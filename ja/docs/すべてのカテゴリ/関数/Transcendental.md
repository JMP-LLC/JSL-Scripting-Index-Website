# Transcendental



### Arrhenius

**構文:** y = Arrhenius( tempC )

**説明:** 11604.5181215503 / (tempC + 273.15)を戻す。これは、Arrhenius式において活性化エネルギーに乗じられる不特定な項。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Arrhenius( 100 );

```

### Arrhenius Inv

**構文:** tempC = Arrhenius Inv( y )

**説明:** Arrhenius関数の逆数。(11604.5181215503 / y) - 273.15を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Arrhenius Inv( 100 );

```

### Beta

**構文:** z = Beta( x, y )

**説明:** Gamma( x ) * Gamma( y ) / Gamma( x + y )で定義されたxとyに対するベータ関数の値を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Beta( 5, 4 );

```

### Box Cox Inverse Transform

**構文:** x = Box Cox Inverse Transform( y, lambda )

**説明:** 引数のBox-Cox逆変換を戻す。

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
Box Cox Inverse Transform( 3, 2 );

```

### Box Cox Transform

**構文:** y = Box Cox Transform( x, lambda )

**説明:** 引数のBox-Cox変換を戻す。

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
Box Cox Transform( 3, 2 );

```

### Cytometry Logicle

**構文:** y = Cytometry Logicle( x, T, W, M, A )

**説明:** サイメトリーLogicle変換を計算する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Cytometry Logicle( 100, 10000, .15, .45, 0 );

```

### Cytometry Logicle Inverse

**構文:** x = Cytometry Logicle Inverse( y, T, W, M, A )

**説明:** 逆サイメトリーLogicle変換を計算する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Cytometry Logicle Inverse( 100, 10000, .15, .45, 0 );

```

### Digamma

**構文:** y = Digamma( x )

**説明:** xにおけるディガンマ関数の値を戻す。ディガンマ関数はガンマ関数の対数の導関数。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Digamma( 5 );

```

### Exp

**構文:** y = Exp( &lt;x=1&gt; )

**説明:** eのx乗を戻す。引数は数値、行列、または数値のリスト。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Round( Exp( 1 ), 5 );

```

### ExpM1

**構文:** y = ExpM1( x )

**説明:** Exp(x)-1を戻す。ただし、xが非常に小さい場合に、より正確な計算結果を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Show( ExpM1( 1.1e-18 ), Exp( 1.1e-18 ) - 1 );

```

### FFT

**構文:** ret = FFT( L, &lt;&lt;inverse( 0 ), &lt;&lt;multivariate( 0 ), &lt;&lt;scale( 1.0 ) )

**説明:** 引数Lに対して高速Fourier変換(FFT)を行う。Lは、データの実数部分と虚数部分を行列で表したリストでなければならない。Lが1つの行列で構成されている場合、その行列は実数とみなされる。が2つの行列で構成されている場合、1つ目が実数部分、2つ目が虚数部分とみなされる。2つの行列は次元が同じで、どちらも行が2つ以上なければならない。オプションの引数には、inverse(逆FFTを行うかどうか)、multivariate (空間FFT、つまり多変量FFTを行うかどうか)、scale(戻り値の乗数とする定数を指定する)がある。戻り値は、第1入力引数と次元が同じ2つの行列でできたリストの形を取る。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
FFT( {[1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3]} );
A = [1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3];
res = FFT( {A} );
res = FFT( {A}, <<Inverse( 1 ) );
res = FFT( {A}, <<multivariate( 1 ) );
res = FFT( FFT( {A} ), <<Inverse( 1 ), <<scale( 1 / 20 ) );
B = FFT( {A} );
FFT( B, <<Inverse( 1 ), <<scale( 1 / 20 ) );
Afun = Function( {},
	[1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3]
);
FFT( FFT( {Afun()} ), <<Inverse( 1 ), <<scale( 1 / 20 ) );
Afun = Function( {},
	{[1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3]}
);
FFT( FFT( Afun() ), <<Inverse( 1 ), <<scale( 1 / 20 ) );
A = [1 3, 2 4, 3 1, 4 3, 4 5, 5 2, 5 7, 6 9, 7 5, 7 3, 2 7, 3 4, 6 7, 6 4, 2 7, 2 4, 2 6, 3 5,
3 6, 3 1];
res = FFT( {A} );
res = FFT( {A}, <<multivariate( 1 ) );
res = FFT( FFT( {A} ), <<Inverse( 1 ), <<scale( 1 / 40 ) );
res = FFT(
	FFT( {A}, <<multivariate( 1 ) ),
	<<multivariate( 1 ),
	<<Inverse( 1 ),
	<<scale( 1 / 20 )
);
A = [1 3 1,
2 4 3,
3 1 2,
4 3 3,
4 5 9,
5 2 8,
5 7 6,
6 9 5,
7 5 3,
7 3 2,
2 7 1,
3 4 3,
6 7 3,
6 4 2,
2 7 4,
2 4 1,
2 6 5,
3 5 1,
3 6 2,
3 1 9];
res = FFT( {A} );
res = FFT( {A}, <<multivariate( 1 ) );
FFT( FFT( {A} ), <<Inverse( 1 ), <<scale( 1 / 60 ) );
fin = FFT(
	FFT( {A}, <<multivariate( 1 ) ),
	<<Inverse( 1 ),
	<<multivariate( 1 ),
	<<scale( 1 / 20 )
);
Show( fin );

```

### Factorial

**構文:** y = Factorial( x )

**説明:** xの階乗、つまりGamma( x + 1 )を戻す。xが整数の場合、結果は1 * 2 * ... * xの積。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Factorial( 5 );

```

### Fit Transform To Normal

**構文:** result = Fit Transform To Normal( Distribution(name), Y(vector), &lt;Freq(vector)&gt; )

**説明:** データのベクトルに対し、正規分布へと変換するための分布をあてはめる。Johnson Sl、Johnson Sb、Johnson Su、一般化対数(Glog)といった分布をあてはめることができる。パラメータ推定値、共分散行列、対数尤度、AICc、収束メッセージを含むリストを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
datavec = [-3.7975076, 0.48221038, -1.3082712, -1.860647, -6.9470789, -17.237024, -19.470857,
-6.1855986, 2.16525629, -30.990061];
freqvec = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2];
As Table( datavec || freqvec );
Column( 1 ) << set name( "x" );
Column( 2 ) << set name( "freq vec" );
Distribution(
	Freq( :freq vec ),
	Continuous Distribution( Column( :x ), Fit Distribution( GLog ) )
);
results = Fit Transform To Normal( Distribution( "glog" ), Y( datavec ), freq( freqvec ) );
Show( results );

```

### Gamma

**構文:** y = Gamma( x, &lt;limit&gt; )

**説明:** xに対するガンマ関数の値を戻す。ガンマ関数は、z^(x-1)*exp(-z) dzに関して(0, +∞)の範囲で積分した関数。なお、limitが指定されている場合は、(0, limit)の範囲で積分した不完全ガンマ関数の値を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Gamma( 5 );

```

### LGamma

**構文:** y = LGamma( x )

**説明:** xのガンマ関数の自然対数を戻す。Gamma(x)が大きすぎる場合に便利。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
LGamma( 5 );

```

### Ln

**構文:** y = Ln( x )

**説明:** xの自然対数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Ln( Exp( 2 ) );

```

### Log

**構文:** y = Log( x, &lt;b&gt; )

**説明:** bを底とするxの対数を戻す。bが指定されていない場合は、xの自然対数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Log( 256, 2 );

```

### Log10

**構文:** y = Log10( x )

**説明:** 10を底とするxの対数を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Log10( 100 );

```

### Log1P

**構文:** y = Log1P( x )

**説明:** Log(1 + x)を戻す。ただし、xが非常に小さい場合に、より正確な計算結果を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Log1P( 1e-6 );

```

### Logist

**構文:** y = Logist( x )

**説明:** 1 / (1 + Exp( -x ))を戻す。定義域(-∞, +∞)が(0, 1)に変換される。Logist()関数はロジスティック回帰に役立つ。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Logist( 2 );

```

### Logist Percent

**構文:** y = Logist Percent( x )

**説明:** 結果を、0～100のスケールで戻すLogist関数。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Logist Percent( 10 );

```

### Logit

**構文:** y = Logit( p )

**説明:** log(p / (1 - p))によって定義されるpのロジットを戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Logit( 0.95 );

```

### Logit Percent

**構文:** y = Logit Percent( p )

**説明:** 引数を0～1ではなく、0～100で取るLogit関数。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Logit Percent( 95.0 );

```

### N Choose K

**構文:** m = N Choose K( n, k )

**説明:** n個からk個を選ぶときの組み合わせ数n! / (k! * (n - k)!)を戻す。なお、この組み合わせ数は順序を考慮していない。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
N Choose K( 5, 3 );

```

### Power

**構文:** z = x ^ y; z = Power( x, &lt;y=2&gt; )

**説明:** xのy乗を戻す。xが負の場合、yは整数でなければならない。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Power( 2, 5 );

```

### Root

**構文:** y = Root( x, &lt;n=2&gt; )

**説明:** xのn乗根を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Round( Root( 2, 3 ), 4 ) /* cube root */;

```

### SHASHInv

**構文:** x = SHASHInv( z, gamma, delta, theta, sigma )

**説明:** 標準正規分布の変数をsinh-arcsinh（SHASH）分布の変数に変換する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
x1 = SHASHInv( result1, gamma, delta, theta, sigma );
x2 = SinH( (ArcSinH( result1 ) - gamma) / delta ) * sigma + theta;
Show( x1, x2 );

```

### SHASHTrans

**構文:** z = SHASHTrans( x, gamma, delta, theta, sigma )

**説明:** sinh-arcsinh（SHASH）分布の変数を標準正規分布の変数に変換する。SHASH変換を使用すると、より正規分布に近いデータを作成することができる。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );
Show( result1, result2 );

```

### SbInv

**構文:** x = SbInv( z, gamma, delta, theta, sigma )

**説明:** 標準正規分布の変数を上下に有界なJohnson-SB分布の変数に変換する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
SbInv( 1.96, 1.5, 2, 1, 2 );

```

### SbTrans

**構文:** z = SbTrans( x, gamma, delta, theta, sigma )

**説明:** 上下に有界なJohnson-SB分布の変数を標準正規分布の変数に変換する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Round( SbTrans( 2.114, 1.5, 2, 1, 2 ), 2 );

```

### Scheffe Cubic

**構文:** y = Scheffe Cubic( x1, x2 )

**説明:** x1*x2*(x1-x2)と等価。3次の配合モデルに対応した関数。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Scheffe Cubic( [1, -1, 1, -1, 1], [-1, -1, 1, 1, -1] );

```

### SlInv

**構文:** x = SlInv( z, gamma, delta, theta, &lt;sigma=1&gt; )

**説明:** 標準正規分布の変数をJohnson-SL分布の変数に変換する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
SlInv( 1.96, 1.5, 2, 1 );

```

### SlTrans

**構文:** z = SlTrans( x, gamma, delta, theta, &lt;sigma=1&gt; )

**説明:** Johnson-SL分布の変数を標準正規分布の変数に変換する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Round( SlTrans( 2.259, 1.5, 2, 1 ), 2 );

```

### Sqrt

**構文:** y = Sqrt( x )

**説明:** 引数xの正の平方根を戻す。引数は、数値、行、または数値リスト。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Round( Sqrt( 2 ), 4 );

```

### Squash

**構文:** y = Squash( x )

**説明:** 1 / (1 + Exp( x ))を戻す。定義域(-∞, +∞)が(1, 0)に変換される。Squash()関数はロジスティック回帰に役立つ。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Squash( 10 );

```

### Squish

**構文:** y = Logist( x )

**説明:** 1 / (1 + Exp( -x ))を戻す。定義域(-∞, +∞)が(0, 1)に変換される。Logist()関数はロジスティック回帰に役立つ。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Logist( 2 );

```

### SuInv

**構文:** x = SuInv( z, gamma, delta, theta, sigma )

**説明:** 標準正規分布の変数を有界でないJohnson-SU分布の変数に変換する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
SuInv( 1.96, 1.5, 2, 1, 2 );

```

### SuTrans

**構文:** z = SuTrans( x, gamma, delta, theta, sigma )

**説明:** 有界でないJohnson-SU分布の変数を標準正規分布の変数に変換する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Round( SuTrans( 1.46, 1.5, 2, 1, 2 ), 2 );

```

### Trigamma

**構文:** y = Trigamma( x )

**説明:** xにおけるトリガンマ関数の値を戻す。トリガンマ関数はディガンマ関数の導関数。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Trigamma( 5 );

```

