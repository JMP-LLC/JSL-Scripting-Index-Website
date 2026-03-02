# Transcendental



### Arrhenius

**语法:** y = Arrhenius( tempC )

**说明:** 返回 Arrhenius 关系的非特定成分，然后与 Arrhenius 等式中的活化能量相乘。返回 11604.5181215503 / (tempC + 273.15)。

**JMP添加的版本:** 早于版本 14

```jsl

Arrhenius( 100 );

```

### Arrhenius Inv

**语法:** tempC = Arrhenius Inv( y )

**说明:** 返回 Arrhenius 函数 (11604.5181215503 / y) - 273.15 的逆函数。

**JMP添加的版本:** 早于版本 14

```jsl

Arrhenius Inv( 100 );

```

### Beta

**语法:** z = Beta( x, y )

**说明:** 返回 x 和 y 的 Beta 函数，定义为 Gamma( x ) \* Gamma( y ) / Gamma( x + y )。

**JMP添加的版本:** 早于版本 14

```jsl

Beta( 5, 4 );

```

### Box Cox Inverse Transform

**语法:** x = Box Cox Inverse Transform( y, lambda )

**说明:** 返回参数的逆 Box-Cox 变换。

**JMP添加的版本:** 19

```jsl

Box Cox Inverse Transform( 3, 2 );

```

### Box Cox Transform

**语法:** y = Box Cox Transform( x, lambda )

**说明:** 返回参数的 Box-Cox 变换。

**JMP添加的版本:** 19

```jsl

Box Cox Transform( 3, 2 );

```

### Cytometry Logicle

**语法:** y = Cytometry Logicle( x, T, W, M, A )

**说明:** 计算血细胞计数 Logicle 变换。

**JMP添加的版本:** 早于版本 14

```jsl

Cytometry Logicle( 100, 10000, .15, .45, 0 );

```

### Cytometry Logicle Inverse

**语法:** x = Cytometry Logicle Inverse( y, T, W, M, A )

**说明:** 计算血细胞计数 Logicle 逆变换。

**JMP添加的版本:** 早于版本 14

```jsl

Cytometry Logicle Inverse( 100, 10000, .15, .45, 0 );

```

### Digamma

**语法:** y = Digamma( x )

**说明:** 返回 digamma 函数在 x 处的计算值，其中 digamma 函数为 gamma 函数的对数导数。

**JMP添加的版本:** 早于版本 14

```jsl

Digamma( 5 );

```

### Exp

**语法:** y = Exp( &lt;x=1&gt; )

**说明:** 返回 e 的 x 次幂。参数可以是数值、矩阵或数值列表。

**JMP添加的版本:** 早于版本 14

```jsl

Round( Exp( 1 ), 5 );

```

### ExpM1

**语法:** y = ExpM1( x )

**说明:** 当 x 非常小时，返回计算更准确的 Exp(x)-1。

**JMP添加的版本:** 早于版本 14

```jsl

Show( ExpM1( 1.1e-18 ), Exp( 1.1e-18 ) - 1 );

```

### FFT

**语法:** ret = FFT( L, &lt;&lt;inverse( 0 ), &lt;&lt;multivariate( 0 ), &lt;&lt;scale( 1.0 ) )

**说明:** 对参数 L（由矩阵形式的数据实部和虚部组成的必需列表）执行快速傅里叶变换 (FFT)。若 L 仅由一个矩阵构成，则将该矩阵视为实部。若 L 由两个矩阵构成，则第一个矩阵为实部，第二个矩阵为虚部。两个矩阵必须具有相同的维数，且行数必须大于 1。有三个可选参数。inverse 参数确实是否执行 FFT 逆变换。multivariate 参数确定执行空间还是多元 FFT。scale 参数确定和返回值相乘的常数。返回值为两个矩阵的列表，矩阵的维数与第一个输入参数相同。

**JMP添加的版本:** 早于版本 14

```jsl

FFT( {[1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3]} );A = [1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3];res = FFT( {A} );res = FFT( {A}, <<Inverse( 1 ) );res = FFT( {A}, <<multivariate( 1 ) );res = FFT( FFT( {A} ), <<Inverse( 1 ), <<scale( 1 / 20 ) );B = FFT( {A} );FFT( B, <<Inverse( 1 ), <<scale( 1 / 20 ) );Afun = Function( {},	[1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3]);FFT( FFT( {Afun()} ), <<Inverse( 1 ), <<scale( 1 / 20 ) );Afun = Function( {},	{[1, 2, 3, 4, 4, 5, 5, 6, 7, 7, 2, 3, 6, 6, 2, 2, 2, 3, 3, 3]});FFT( FFT( Afun() ), <<Inverse( 1 ), <<scale( 1 / 20 ) );A = [1 3, 2 4, 3 1, 4 3, 4 5, 5 2, 5 7, 6 9, 7 5, 7 3, 2 7, 3 4, 6 7, 6 4, 2 7, 2 4, 2 6, 3 5,3 6, 3 1];res = FFT( {A} );res = FFT( {A}, <<multivariate( 1 ) );res = FFT( FFT( {A} ), <<Inverse( 1 ), <<scale( 1 / 40 ) );res = FFT(	FFT( {A}, <<multivariate( 1 ) ),	<<multivariate( 1 ),	<<Inverse( 1 ),	<<scale( 1 / 20 ));A = [1 3 1,2 4 3,3 1 2,4 3 3,4 5 9,5 2 8,5 7 6,6 9 5,7 5 3,7 3 2,2 7 1,3 4 3,6 7 3,6 4 2,2 7 4,2 4 1,2 6 5,3 5 1,3 6 2,3 1 9];res = FFT( {A} );res = FFT( {A}, <<multivariate( 1 ) );FFT( FFT( {A} ), <<Inverse( 1 ), <<scale( 1 / 60 ) );fin = FFT(	FFT( {A}, <<multivariate( 1 ) ),	<<Inverse( 1 ),	<<multivariate( 1 ),	<<scale( 1 / 20 ));Show( fin );

```

### Factorial

**语法:** y = Factorial( x )

**说明:** 返回 x 的阶乘，与 Gamma( x + 1 ) 相同。若 x 为整数，结果为 1 \* 2 \* ... \* x 的积。

**JMP添加的版本:** 早于版本 14

```jsl

Factorial( 5 );

```

### Fit Transform To Normal

**语法:** result = Fit Transform To Normal( Distribution(name), Y(vector), &lt;Freq(vector)&gt; )

**说明:** 拟合数据向量的正态变换。这包括 Johnson Sl、Johnson Sb、Johnson Su 和广义对数分布。该函数返回包含参数估计值、协方差矩阵、对数似然、AICc、收敛消息和变换值的列表。

**JMP添加的版本:** 早于版本 14

```jsl

datavec = [-3.7975076, 0.48221038, -1.3082712, -1.860647, -6.9470789, -17.237024, -19.470857,-6.1855986, 2.16525629, -30.990061];freqvec = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2];As Table( datavec || freqvec );Column( 1 ) << set name( "x" );Column( 2 ) << set name( "freq vec" );Distribution(	Freq( :freq vec ),	Continuous Distribution( Column( :x ), Fit Distribution( GLog ) ));results = Fit Transform To Normal( Distribution( "glog" ), Y( datavec ), freq( freqvec ) );Show( results );

```

### Gamma

**语法:** y = Gamma( x, &lt;limit&gt; )

**说明:** 返回 x 的 Gamma 函数，定义为 z^(x-1)\*exp(-z) dz 从 0 到 ∞ 的积分。若存在 limit，则使用该积分限制来计算不完整的 Gamma。

**JMP添加的版本:** 早于版本 14

```jsl

Gamma( 5 );

```

### LGamma

**语法:** y = LGamma( x )

**说明:** 返回 x 的 Gamma 函数的自然对数。当 Gamma(x) 过大而不能直接使用时很有用。

**JMP添加的版本:** 早于版本 14

```jsl

LGamma( 5 );

```

### Ln

**语法:** y = Ln( x )

**说明:** 返回“x”的自然对数。

**JMP添加的版本:** 早于版本 14

```jsl

Ln( Exp( 2 ) );

```

### Log

**语法:** y = Log( x, &lt;b&gt; )

**说明:** 返回 x 以 b 为底的对数。若没有指定 b，则返回 x 的自然对数。

**JMP添加的版本:** 早于版本 14

```jsl

Log( 256, 2 );

```

### Log10

**语法:** y = Log10( x )

**说明:** 返回 x 以 10 为底的对数。

**JMP添加的版本:** 早于版本 14

```jsl

Log10( 100 );

```

### Log1P

**语法:** y = Log1P( x )

**说明:** 当 x 非常小时，返回计算更准确的 Log(1 + x)。

**JMP添加的版本:** 早于版本 14

```jsl

Log1P( 1e-6 );

```

### Logist

**语法:** y = Logist( x )

**说明:** 返回 1 / (1 + Exp( -x ))，用于将域 -∞...+∞ 中的数值转换到 0...1 范围内。Logist() 函数在 Logistic 回归中很有用。

**JMP添加的版本:** 早于版本 14

```jsl

Logist( 2 );

```

### Logist Percent

**语法:** y = Logist Percent( x )

**说明:** Logist 函数将结果统一尺度为 0 到 100。

**JMP添加的版本:** 早于版本 14

```jsl

Logist Percent( 10 );

```

### Logit

**语法:** y = Logit( p )

**说明:** 返回 p 的 logit，其定义为 log(p / (1 - p))。

**JMP添加的版本:** 早于版本 14

```jsl

Logit( 0.95 );

```

### Logit Percent

**语法:** y = Logit Percent( p )

**说明:** Logit 函数的参数为 0 到 100，而不是 0 到 1。

**JMP添加的版本:** 早于版本 14

```jsl

Logit Percent( 95.0 );

```

### N Choose K

**语法:** m = N Choose K( n, k )

**说明:** 返回 n! / (k! \* (n - k)!)，是从 n 项中选取 k 项的方法数（不考虑选取顺序）。

**JMP添加的版本:** 早于版本 14

```jsl

N Choose K( 5, 3 );

```

### Power

**语法:** z = x ^ y; z = Power( x, &lt;y=2&gt; )

**说明:** 返回 x 的 y 次幂。若 x 为负，y 必须是整数。

**JMP添加的版本:** 早于版本 14

```jsl

Power( 2, 5 );

```

### Root

**语法:** y = Root( x, &lt;n=2&gt; )

**说明:** 返回 x 的 n 次方根。

**JMP添加的版本:** 早于版本 14

```jsl

Round( Root( 2, 3 ), 4 ) /* cube root */;

```

### SHASHInv

**语法:** x = SHASHInv( z, gamma, delta, theta, sigma )

**说明:** 将标准正态分布变量变换为 sinh-arcsinh (SHASH) 分布变量。

**JMP添加的版本:** 14

```jsl

gamma = 1;delta = .5;theta = -1;sigma = 2;x = 3;result1 = SHASHTrans( x, gamma, delta, theta, sigma );x1 = SHASHInv( result1, gamma, delta, theta, sigma );x2 = SinH( (ArcSinH( result1 ) - gamma) / delta ) * sigma + theta;Show( x1, x2 );

```

### SHASHTrans

**语法:** z = SHASHTrans( x, gamma, delta, theta, sigma )

**说明:** 将 sinh-arcsinh (SHASH) 分布的变量变换为标准正态分布的变量。SHASH 变换可用于创建更接近正态分布的数据。

**JMP添加的版本:** 14

```jsl

gamma = 1;delta = .5;theta = -1;sigma = 2;x = 3;result1 = SHASHTrans( x, gamma, delta, theta, sigma );result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );Show( result1, result2 );

```

### SbInv

**语法:** x = SbInv( z, gamma, delta, theta, sigma )

**说明:** 将标准正态变量变换为双界 Johnson 变量。

**JMP添加的版本:** 早于版本 14

```jsl

SbInv( 1.96, 1.5, 2, 1, 2 );

```

### SbTrans

**语法:** z = SbTrans( x, gamma, delta, theta, sigma )

**说明:** 将双界 Johnson 变量变换为标准正态变量。

**JMP添加的版本:** 早于版本 14

```jsl

Round( SbTrans( 2.114, 1.5, 2, 1, 2 ), 2 );

```

### Scheffe Cubic

**语法:** y = Scheffe Cubic( x1, x2 )

**说明:** 按照 x1\*x2\*(x1-x2) 计算；用于支持三次混料模型的建模表示法。

**JMP添加的版本:** 早于版本 14

```jsl

Scheffe Cubic( [1, -1, 1, -1, 1], [-1, -1, 1, 1, -1] );

```

### SlInv

**语法:** x = SlInv( z, gamma, delta, theta, &lt;sigma=1&gt; )

**说明:** 将标准正态变量变换为 Johnson SL 变量。

**JMP添加的版本:** 早于版本 14

```jsl

SlInv( 1.96, 1.5, 2, 1 );

```

### SlTrans

**语法:** z = SlTrans( x, gamma, delta, theta, &lt;sigma=1&gt; )

**说明:** 将 Johnson SL 变量变换为标准正态变量。

**JMP添加的版本:** 早于版本 14

```jsl

Round( SlTrans( 2.259, 1.5, 2, 1 ), 2 );

```

### Sqrt

**语法:** y = Sqrt( x )

**说明:** 返回 x 参数的正平方根，参数可以是数值、矩阵或数值列表。

**JMP添加的版本:** 早于版本 14

```jsl

Round( Sqrt( 2 ), 4 );

```

### Squash

**语法:** y = Squash( x )

**说明:** 返回 1 / (1 + Exp( x ))，用于将域 -∞...+∞ 中的数字转换到 1...0 范围内。Squash() 函数在 logistic 回归中很有用。

**JMP添加的版本:** 早于版本 14

```jsl

Squash( 10 );

```

### Squish

**语法:** y = Logist( x )

**说明:** 返回 1 / (1 + Exp( -x ))，用于将域 -∞...+∞ 中的数值转换到 0...1 范围内。Logist() 函数在 Logistic 回归中很有用。

**JMP添加的版本:** 早于版本 14

```jsl

Logist( 2 );

```

### SuInv

**语法:** x = SuInv( z, gamma, delta, theta, sigma )

**说明:** 将标准正态变量变换为无界 Johnson 变量。

**JMP添加的版本:** 早于版本 14

```jsl

SuInv( 1.96, 1.5, 2, 1, 2 );

```

### SuTrans

**语法:** z = SuTrans( x, gamma, delta, theta, sigma )

**说明:** 将无界 Johnson 变量变换为标准正态变量。

**JMP添加的版本:** 早于版本 14

```jsl

Round( SuTrans( 1.46, 1.5, 2, 1, 2 ), 2 );

```

### Trigamma

**语法:** y = Trigamma( x )

**说明:** 返回 trigamma 函数在 x 处的计算值，其中 trigamma 函数为 digamma 函数的导数。

**JMP添加的版本:** 早于版本 14

```jsl

Trigamma( 5 );

```

