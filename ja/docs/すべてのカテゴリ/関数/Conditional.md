# Conditional



### And

**構文:** y = x1 & x2; y = And( x1, x2, ... )

**説明:** すべての引数の論理積(AND)を戻す。すなわち、すべての引数が0以外の場合には1、それ以外の場合には0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

1 < 2 & 3 < 4;

```

### AndMZ

**構文:** y = AndMZ( x1, x2, ... )

**説明:** 欠測値を0とみなし、すべての引数の論理積(AND)を戻す。すべての引数が0以外の場合には1、それ以外の場合には0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

AndMZ( 1 < 2, 3 < 4 );

```

### Break

**構文:** Break()

**説明:** ForまたはWhileループ内の処理を中断する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

For( i = 1, i <= 10, i++,
	If( i == 5, Break() );
	Print( "i=" || Char( i ) );
);

```

### Choose

**構文:** y = Choose( i, expr1, expr2, ..., exprElse )

**説明:** i番目のexpr引数を評価して戻す。i番目のexpr引数がない場合は、exprElse引数を評価して戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Choose( Random Integer( 1, 5 ), "red", "blue", "other" );

```

### Continue

**構文:** Continue()

**説明:** ForまたはWhileループ内の処理の次の反復を続行させる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

For( i = 1, i <= 10, i++,
	If( i < 2, Continue() );
	Print( "i=" || Char( i ) );
);

```

### Filter Each

**構文:** list = Filter Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;locals list&gt;, body)

**説明:** For Each関数と同じ処理を行うが、それに加えて、ブール値の結果に基づいて元のコンテナからフィルタリングした値のリストを戻す。結果の種類は、入力コンテナの種類と一致する。入力がMatrixの場合は、行列のサイズが不明であるため、行ベクトル行列が戻される。

**JMP追加されたバージョン:** 16

#### Associative Array

```jsl

values = Filter Each( {{key, value}}, ["A" => 8, "B" => 6, "C" => 10], value > 6 );
Show( values );

```

#### Expression

```jsl

values = Filter Each( {value}, Expr( MyExpr( 1, 2, 3, 4 ) ), Mod( value, 2 ) == 0 );
Show( values );

```

#### List

```jsl

values = Filter Each( {x}, {0, -5, 2, -10, 4}, x > 0 );
Show( values );

```

#### Matrix

```jsl

values = Filter Each( {x, i}, 100 :: 120, i > 10 );
Show( values );

```

### For

**構文:** For( initExpr, whileExpr, nextExpr, bodyExpr )

**説明:** initExprを一度評価し、whileExpr、bodyExpr、およびnextExprを、whileExprがゼロ以外の値になるまで繰り返し評価する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

s = "";
For( i = 1, i < 10, i++,
	s ||= " " || Char( i )
);
Trim( s );

```

### For Each

**構文:** For Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;locals list&gt;, body)

**説明:** リスト、行列、連想配列、式のいずれかであるコンテナで反復する。コンテナには、値、要素、またはキーが含まれる。各反復でインデックス番号を使うこともできる。連想配列のコンテナの場合は、2項目のリストを使ってキーと値を評価することができる。行列のコンテナの場合は、デフォルトで線形インデックスが与えられるが、2項目のリストを使って行インデックスと列インデックスを評価できる。これらのシンボルは、ビルトインのLocalブロックを使い、ループの本体のみに含まれる。ローカルのリストを指定することもでき、これは最初の反復シンボルが設定された後に初期化される。

**JMP追加されたバージョン:** 16

#### Across

```jsl


// Across multiple containers
x = {1, 3};
y = {2, 4};
For Each( {{a, b}, index}, Across( x, y ), Show( a, b, index ) );

// Across list of containers
xy = {{1, 3}, {2, 4}};
For Each( {{a, b}, index}, Across( xy ), Show( a, b, index ) );

```

#### Across - Count

```jsl


list1 = {1, 3, 5, 7, 9};
list2 = {2, 4}; 

Write( "\!N===Longest [default]===" );
For Each( {{l1, l2}}, Across( list1, list2, Count( "Longest" ) ), Show( l1, l2 ) );

Write( "\!N===Shortest===" );
For Each( {{s1, s2}}, Across( list1, list2, Count( "Shortest" ) ), Show( s1, s2 ) );

Write( "\!N===N===" );
For Each( {{n1, n2}}, Across( list1, list2, Count( 7 ) ), Show( n1, n2 ) );

Write( "\!N===Enforce Equal===" );
Try(
	For Each( {values}, Across( list1, list2, Count( "Enforce Equal" ) ), Show( values ) ),
	Print( "Error occurred" )
);

```

#### Associative Array

```jsl

For Each( {{key, value}, index}, ["A" => 8, "B" => 6, "C" => 10], Show( key, value, index ) );

```

#### Expression

```jsl

For Each( {value, index}, Expr( MyExpr( 10, 20, 30 ) ), Show( value ) );

```

#### List

```jsl

For Each( {value, index}, {10, 20, 30}, Show( value, index ) );

```

#### Matrix

```jsl

For Each( {element, {row, col}}, 10 :: 15, Show( element, row, col ) );

```

#### Matrix - 線形インデックス

```jsl

For Each( {element, index}, 10 :: 15, Show( element, index ) );

```

### For Each Row

**構文:** y = For Each Row( &lt;dt&gt;, body )

**説明:** 現在のデータテーブル内の各行に対して、bodyに指定された式を反復して評価する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( :height = -:height );

```

### If

**構文:** y = If( condition1, result1, &lt;condition2, result2&gt;, ..., &lt;elseResult&gt; )

**説明:** 引数の各ペアの1つ目の引数を評価し、 conditionのうち最初に非ゼロとなった条件に関連付けられたresult式の評価を戻す。condition引数は、順に評価される。すべてのcondition引数がゼロになった場合、オプションのelseResultを評価して結果を戻す。elseResultが指定されず、いずれの条件も真でない場合は、欠測値を戻す。すべてのcondition引数が欠測値になった場合は、欠測値を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

If( Random Uniform() < 0.5,
	"heads",
	"tails"
);

```

### IfMZ

**構文:** y = IfMZ( condition1, result1, &lt;condition2, result2&gt;, ..., &lt;elseResult&gt; )

**説明:** 引数の各ペアの1つ目の引数を評価し、conditionのうち最初に非ゼロとなった条件に関連付けられたresult式の評価を戻す。condition引数は、順に評価される。すべてのcondition引数がゼロまたは欠測値になった場合、オプションのelseResultを評価して結果を戻す。elseResultが指定されず、いずれの条件も真でない場合は、欠測値を戻す。(IfMZ()は、評価したcondition引数の欠測値をゼロとして扱った場合のIf()に相当する。)

**JMP追加されたバージョン:** バージョン14より前

```jsl

x = 1;
Show( IfMZ( x == 1, 10, x == 2, 20, 30 ) );
x = .;
Show( IfMZ( x == 1, 10, x == 2, 20, 30 ) );
x = .;
Show( If( x == 1, 10, x == 2, 20, 30 ) );

```

### IfMax

**構文:** y = IfMax( expr1, result1, expr2, result2, ..., &lt;allMissingResult&gt; )

**説明:** 引数の各ペアの1つ目を評価し、最大値に対する結果式の評価を戻す。最大値が複数ある場合には、最初の最大値を戻す。すべての式が欠測値である場合、引数の数が偶数であれば空(Empty)、奇数であれば最後の引数を戻す。条件式は数値になる必要があるが、結果式はどのような値でもよい。

**JMP追加されたバージョン:** バージョン14より前

```jsl

TomScore = 45;
JonScore = 47;
TimScore = 46;
highestScorer = IfMax( TomScore, "Tom", JonScore, "Jon", TimScore, "Tim", "Noone" );

```

### IfMin

**構文:** y = IfMin( expr1, result1, expr2, result2, ..., &lt;allMissingResult&gt; )

**説明:** 引数の各ペアの1つ目を評価し、最小値に対する結果式の評価を戻す。最小値が複数ある場合には、最初の最小値を戻す。すべての式が欠測値である場合、引数の数が偶数であれば空(Empty)、奇数であれば最後の引数を戻す。条件式は数値になる必要があるが、結果式はどのような値でもよい。

**JMP追加されたバージョン:** バージョン14より前

```jsl

TomScore = 45;
JonScore = 47;
TimScore = 46;
lowestScorer = IfMin( TomScore, "Tom", JonScore, "Jon", TimScore, "Tim", "Noone" );

```

### Interpolate

**構文:** y = Interpolate(x|xmatrix|xlist, x1, y1, x2, y2);y = Interpolate(x | xmatrix | xlist, xmatrix, ymatrix);z = Interpolate({ x, y }, xvector, yvector, zmatrix)

**説明:** 線形補間を行う。引数xが、引数xiのどの位置にあるかを調べ、それに対応した引数yiから線形補間値を求める。引数xiは小さい順に並んでいる必要がある。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl


New Window( "Interpolate",
	window:x = (2 :: 9) * 10;
	window:y = 50 + Sin( (2 :: 9) ) * 40;
	Graph Box(
		Pen Color( "blue" );
		Marker( window:x, window:y );
		Y Function( Interpolate( a, window:x, window:y ), a );
	);
)
;

```

#### 例 2

```jsl

Interpolate( 2.5, [1 2 3], [15, 20, 30] );

```

#### 例 3

```jsl

Interpolate( {.5, .8}, [0 1], [0 1], [10 20, 12 18] );

```

#### 例 4

```jsl


xd = Transpose( Index( 1, 6 * Pi(), 0.3 ) );
yd = Sin( xd );
                                    
xd2 = xd + 0.15;
yd2 = Interpolate( xd2, xd, yd );
                                    
New Window( "Interpolated values are blue",
	Graph Box(
		X Scale( 1, 6 * Pi() ),
		Y Scale( -1, 1 ),
		For( i = 0, i < N Rows( xd ), i++,
			Pen Color( "red" );
			Circle( {xd[i], yd[i]}, 0.01 );
			Pen Color( "blue" );
			Circle( {xd2[i], yd2[i]}, 0.01 );
		)
	)
);

```

### Is Associative Array

**構文:** y = Is Associative Array( x )

**説明:** 引数xが連想配列の場合に1、それ以外の場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Is Associative Array( [1 => 2] );

```

### Is Class

**構文:** isns = Is Class( class reference )

**説明:** 引数classがクラスの場合は1、そうでない場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Define Class(
	"complex",
	real = 0;
	imag = 0;
	_init_ = Method( {a, b},
		real = a;
		imag = b;
	);
	Add = Method( {y},
		New Object( complex( real + y:real, imag + y:imag ) )
	);
	Sub = Method( {y},
		New Object( complex( real - y:real, imag - y:imag ) )
	);
	Mul = Method( {y},
		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )
	);
	Div = Method( {y},
		t = New Object( complex( 0, 0 ) );
		mag2 = y:Magsq();
		t:real = real * y:real + imag * y:imag;
		t:imag = imag * y:real + real * y:imag;
		t:real = t:real / mag2;
		t:imag = t:imag / mag2;
		t;
	);
	Magsq = Method( {},
		real * real + imag * imag
	);
	Mag = Method( {},
		Sqrt( real * real + imag * imag )
	);
	_to string_ = Method( {},
		Char( real ) || " + " || Char( imag ) || "i"
	);
	_show_ = _to string_;
);
cl = New Object( complex( 1, 2 ) );
iscl = Is Class( cl );
Show( iscl );
cl << Delete;
Delete Classes( "complex" );

```

### Is Empty

**構文:** y = Is Empty( name )

**説明:** 変数が未定義であるか、Empty()の値を持つときに1を戻す。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

Is Empty( x );

```

#### 例 2

```jsl

x = Empty();
Is Empty( x );

```

#### 例 3

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
If( Is Empty( dt ),
	Print( "There is no open data table." ),
	Print( "This data table is open: " || (dt << Get Name()) )
);
Wait( 1 );
Close( DT, "nosave" );
Wait( 1 );
If( Is Empty( dt ),
	Print( "There is no open data table." ),
	Print( "This data table is open: " || (dt << Get Name()) )
);

```

### Is Expr

**構文:** y = Is Expr( x )

**説明:** 引数xが式の場合に1、それ以外の場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Is Expr( Expr( x ) );

```

### Is List

**構文:** y = Is List( x )

**説明:** 引数xがリストの場合に1、それ以外の場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Is List( {1, 2, 3} );

```

### Is Name

**構文:** y = Is Name( x )

**説明:** 引数xが名前の場合に1、それ以外の場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Is Name( Name Expr( n ) );

```

### Is Namespace

**構文:** isns = Is Namespace( namespace reference )

**説明:** 引数namespaceが名前空間の場合は1、そうでない場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

ns = New Namespace(
	"complex",
	{
		make = Function( {a, b},
			Index( a, b, b - a )
		),
		add = Function( {x, y}, x + y ),
		sub = Function( {x, y}, x - y ),
		mul = Function( {x, y},
			local:z = J( 1, 2 );
			local:z[1] = x[1] * y[1] - x[2] * y[2];
			local:z[2] = x[1] * y[2] + x[2] * y[1];
			local:z;
		),
		div = Function( {x, y},
			local:z = J( 1, 2 );
			local:d = (y[1] ^ 2 + y[2] ^ 2);
			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;
			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;
			local:z;
		),
		write = Function( {x},
			Write( x[1], " + ", x[2], "i\!n" )
		)
	}
);
isns = Is Namespace( ns );
Show( isns );
ns << Delete;

```

### Is Number

**構文:** y = Is Number( x )

**説明:** 引数xが数値の場合に1、それ以外の場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Is Number( 213 );

```

### Is Scriptable

**構文:** tf = Is Scriptable( x )

**説明:** 引数xがスクリプト可能なオブジェクトの場合に1、それ以外の場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Is Scriptable( Bivariate( Y( :weight ), X( :height ) ) );

```

### Is String

**構文:** y = Is String( x )

**説明:** 引数xが文字列の場合に1、それ以外の場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Is String( "abc" );

```

### Match

**構文:** y = Match( x, v1, expr1, v2, expr2, ..., exprElse )

**説明:** xと等しい最初のvN 引数に対応するexprN引数を評価して戻す。xと等しい値がない場合はexprElse引数を評価して戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Match( Year( Today() ), 2013, "snake", 2014, "horse", 2015, "goat", "other" );

```

### MatchMZ

**構文:** y = MatchMZ( x, v1, expr1, v2, expr2, ..., exprElse )

**説明:** xと等しい最初のvN 引数に対応するexprN引数を評価して戻す。xと等しい値がない場合はexprElse引数を評価して戻す。(MatchMZ()関数は、欠測値を0として扱う以外はMatch()関数と同じ)

**JMP追加されたバージョン:** バージョン14より前

```jsl

MatchMZ( Year( Today() ), 2013, "snake", 2014, "horse", 2015, "goat", "other" );

```

### Not

**構文:** y = !x; y = Not( x )

**説明:** xの論理否定(NOT)を戻す。すなわち、xが0の場合には1、xが欠測値の場合には欠測値、それ以外の場合には0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

!(1 < 2);

```

### Or

**構文:** y = x1 | x2; y = Or( x1, x2, ... )

**説明:** すべての引数の論理和(OR)を戻す。すなわち、いずれかの引数が0以外であれば1、それ以外の場合には0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

1 < 2 | 3 < 2;

```

### OrMZ

**構文:** y = OrMZ( x1, x2, ... )

**説明:** 欠測値を0とみなし、すべての引数の論理和(OR)を戻す。いずれかの引数が0以外であれば1、それ以外の場合には0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

OrMZ( 1 < 2, 3 < 2 );

```

### Return

**構文:** Return(&lt;Expr&gt;, ..., &lt;ExprN&gt;)

**説明:** ユーザ定義の関数から式の値を戻す。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

vr = Function( {},
	x = 2;
	y = 4;
	Return( Char( x * y ) );
);
lvr = Function( {},
	x = 2;
	y = 4;
	For( i = 1, i < 5, i++,
		If( i == 3,
			Return( i * x * y )
		)
	);
);
nr = Function( {}, Return() );
vrv = vr();
lvrv = lvr();
nrv = nr();
Show( vrv, lvrv, nrv );

```

#### 例 2

```jsl

f = Function( {a, b},
	Return( a - b, a + b )
);
{lo, hi} = f( 10, 1 );
Show( lo, hi );
Show( f( 7, 15 ) );

```

### Step

**構文:** y = Step( x, x1, y1, x2, y2, ... )y = Step( x, [x1, x2, ...], [y1, y2, ...] )

**説明:** 引数x以下となっている引数xiのうち、最大のxi値に対応する引数yiを戻す。引数xiは小さい順に指定されていなければならない。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Step( 2.5, [1 2 3], [15, 20, 30] );

```

### Stop

**構文:** Stop()

**説明:** JSLスクリプトの実行を即座に中止する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

For( i = 1, i <= 10, i++,
	If( i == 7, Stop() );
	Print( "i=" || Char( i ) );
);

```

### Transform Each

**構文:** list = Transform Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;Output( "List" | "Matrix" | "Associative Array" | "Expression", &lt;expr head name&gt; )&gt;, &lt;locals list&gt;, body)

**説明:** For Each関数と同じ処理を行うが、それに加えて各反復での結果を含めたコンテナも戻す。デフォルトでは、入力コンテナと同じ種類のコンテナを戻すが、Output引数を使って種類を変更することも可能。出力がListまたはExpressionで、結果がないときはEmpty()が使用される。出力がMatrixで結果がないとき、または結果が数値以外のときは、数値の欠測値が使用される。出力がAssociative Arrayで結果がないときはキーが存在しないものとなる。Continue()を使用した場合、反復においては値が戻されず、次の反復に進む。

**JMP追加されたバージョン:** 16

#### Associative Array

```jsl

values = Transform Each( {{key, value}}, ["A" => 8, "B" => 6, "C" => 10], value + 1 );
Show( values );

```

#### Expression 1

```jsl

ex = Transform Each( {value}, Expr( MyExpr( 10, 20, 30 ) ), value + 1 );
Show( ex );

```

#### Expression 2

```jsl

// Find Functions defined in a script
parsedScript = Include( "$SAMPLE_SCRIPTS/BayesPlotForFactors.jsl", <<ParseOnly );
functionNames = Transform Each( {statement}, Name Expr( parsedScript ), Output( "List" ),
	{lhs, rhs},
	If( Head( statement ) == Expr( Assign() ),
		rhs = Arg( statement, 2 );
		If( !Is Empty( rhs ) & Contains( {Function()}, Head( rhs ) ),
			Head Name( Arg( statement, 1 ) ),
			Empty()
		);
	,
		Empty()
	)
);
functionNames = Filter Each( {f}, functionNames, !Is Empty( f ) );
Show( functionNames );

```

#### List

```jsl

values = Transform Each( {value}, {10, 20, 30}, value + 5 );
Show( values );

```

#### Matrix

```jsl

values = Transform Each( {element}, 10 :: 15, element + 5 );
Show( values );

```

#### Output

```jsl


Write( "\!N===List===" );
lst = Transform Each( {value}, [10, 20, 30], Output( "List" ), value + 1 );
Show( lst );

Write( "\!N===Matrix===" );
mat = Transform Each( {value}, {10, 20, 30}, Output( "Matrix" ), value + 1 );
Show( mat );

Write( "\!N===Associative Array===" );
aa = Transform Each( {value}, {10, 20, 30}, Output( "Associative Array" ), value + 1 );
Show( aa );

Write( "\!N===Expression===" );
ex = Transform Each( {value}, {10, 20, 30}, Output( "Expression", "My Values" ), value + 1 );
Show( ex );

```

### While

**構文:** While( testExpr, bodyExpr )

**説明:** testExprとbodyExprを、testExprがゼロ以外の値になるまで繰り返し評価する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

i = 1;
s = "";
While( i < 1000,
	s ||= " " || Char( i );
	i *= 2;
);
s;

```

### Zero Or Missing

**構文:** y = Zero Or Missing( x )

**説明:** 欠測値を0とみなし、xの論理否定(NOT)を戻す。xが0か欠測値の場合には1、それ以外の場合には0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Zero Or Missing( 1 < 2 );

```

