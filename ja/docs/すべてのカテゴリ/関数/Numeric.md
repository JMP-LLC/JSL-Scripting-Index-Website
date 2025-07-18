# Numeric



### Abs

**構文:** y = Abs( x )

**説明:** xの絶対値を戻す。引数は数値、行列、または数値のリスト。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Abs( -5 );

```

### Ceiling

**構文:** y = Ceiling( x )

**説明:** x以上で最も小さい整数を戻す。引数は数値、行列、または数値のリスト。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Ceiling( 1.2 );

```

### Derivative

**構文:** y = Derivative( expr, name )

**説明:** 指定された変数nameに関する式exprの導関数を解析的に求める。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Derivative( Sin( x ), x );

```

### Floor

**構文:** y = Floor( x )

**説明:** x以下で最も大きい整数を戻す。引数は数値、行列、または数値のリスト。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Floor( 1.2 );

```

### Integrate

**構文:** y = Integrate( expr, varname, lowLimit, upLimit, &lt;&lt;Tolerance(1e-10), &lt;&lt;StoreInfo(list), &lt;&lt;StartingValue(val) )

**説明:** Gander and Gautschi (2000)の数値積分によって、1次元の積分を行う。varnameで指定した変数に値が割り当てられている場合、または<<StartingValue()オプションの引数が開始値を指定している場合は、積分の精度を高めるためにその値を基準値として使う。積分区間において無限を設定したい場合には、lowLimitやupLimitに欠測値を指定する。<<StoreInfo()を指定した場合、<<StoreInfo()の引数に数値計算を診断した情報が含まれる。<<Tolerance()が指定された場合、<<Tolerance() の値が自動積分の許容誤差として使用され、積分の評価に使われる。小さい値を指定するほど実行に時間がかかるが、精度が増す。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

Integrate( Exp( -x ), x, 0, . );

```

#### 例 2

```jsl

x = 100;
Integrate( Normal Density( x - 100 ), x, ., . );

```

### Invert Expr

**構文:** y = Invert Expr( expr, xname, yname )

**説明:** 式exprの引数の逆関数を求める。xnameは、式exprにおいて1回だけ出現していないといけない。そのxnameに対して逆関数が求められる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Invert Expr( Sqrt( Log( x ) ), x, y );

```

### Mod

**構文:** z = Modulo( x, y )

**説明:** xをyで割ったときの余りを戻す。余りはxと同じ符号を持つ。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Modulo( 10, 3 );

```

### Modulo

**構文:** z = Modulo( x, y )

**説明:** xをyで割ったときの余りを戻す。余りはxと同じ符号を持つ。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Modulo( 10, 3 );

```

### Normal Integrate

**構文:** {mean, var} = Normal Integrate( muVector, sigmaMatrix, expr, x, NStrata, NSim )

**説明:** 多変量正規分布の変数に対する滑らかな関数を動径-球法で積分した結果を戻す。基本的な考え方はGenz-Monahan(1996)の手法と同じ。ただし、半径方向にはRadau-Gauss-Laguerre型の求積法が使用される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Normal Integrate(
	J( 3, 1, 0 ),
	Identity( 3 ),
	ex[1] ^ 4 * ex[2] ^ 2 * ex[3] ^ 2,
	ex,
	2,
	5000
);

```

### Num Deriv

**構文:** y = Num Deriv( f( x, ... ), &lt;parnum&gt;)

**説明:** 関数f( x,... )を数値微分により偏微分した結果を戻す。Num Deriv関数の2番目の引数に、偏微分する引数を指定する。2番目の引数を指定しなかった場合、関数の最初の変数に対する偏微分が求められる。偏微分はf( x,... )の引数に指定されている数値の箇所で評価される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

f = Function( {x, y}, x ^ 2 + y );
Num Deriv( f( 2, 1 ) );
Num Deriv( f( 2, 1 ), 2 );

```

### Num Deriv2

**構文:** y = Num Deriv2( f( x, ... ) )

**説明:** 関数f( x,... )をxに関して数値微分により2次微分した結果を戻す。偏微分はf( x,... )の引数に指定されている数値の箇所で評価される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

f = Function( {x}, x ^ 3 );
Num Deriv2( f( 2 ) );

```

### Round

**構文:** y = Round( x, &lt;n&gt; )

**説明:** xを、小数点以下n 桁に丸める(nが指定されていない場合には整数に丸める)。引数nは負の数でも可。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Round( 213, -1 );

```

### Simplify Expr

**構文:** resultExpr = Simplify Expr( expr( ... ) )

**説明:** 引数の式を、いろいろな方法で簡潔なものに変形する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Simplify Expr( Expr( 2 * 3 * a + b * (a + 3 - c) - a * b ) );

```

