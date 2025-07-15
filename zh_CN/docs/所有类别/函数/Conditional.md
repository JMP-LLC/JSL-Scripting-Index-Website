# Conditional



### And

**语法:** y = x1 & x2; y = And( x1, x2, ... )

**说明:** 返回所有参数的逻辑“与”运算值: 若所有参数均非零，则为 1，否则为 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
1 < 2 & 3 < 4;

```

### AndMZ

**语法:** y = AndMZ( x1, x2, ... )

**说明:** 返回所有参数的逻辑“与”值（缺失值视为零）: 若所有参数均非零，则为 1，否则为 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
AndMZ( 1 < 2, 3 < 4 );

```

### Break

**语法:** Break()

**说明:** 导致 For 或 While 循环内的控制流中断。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
For( i = 1, i <= 10, i++,
	If( i == 5, Break() );
	Print( "i=" || Char( i ) );
);

```

### Choose

**语法:** y = Choose( i, expr1, expr2, ..., exprElse )

**说明:** 计算并返回第 i 个 expr 参数，若没有第 i 个 expr 参数，则计算并返回 exprElse 参数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Choose( Random Integer( 1, 5 ), "red", "blue", "other" );

```

### Continue

**语法:** Continue()

**说明:** 导致继续进行 For 或 While 循环内控制流的下一次迭代。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
For( i = 1, i <= 10, i++,
	If( i < 2, Continue() );
	Print( "i=" || Char( i ) );
);

```

### Filter Each

**语法:** list = Filter Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;locals list&gt;, body)

**说明:** 不仅执行 For Each 函数的所有操作，而且还会根据布尔值结果从原始容器返回过滤值列表。结果的类型将与输入容器的类型匹配。对于矩阵输入，将返回行向量矩阵，因为无法知道矩阵的大小。

**JMP添加的版本:** 16

**Associative Array**

```jsl

Names Default To Here( 1 );
values = Filter Each( {{key, value}}, ["A" => 8, "B" => 6, "C" => 10], value > 6 );
Show( values );

```

**Expression**

```jsl

Names Default To Here( 1 );
values = Filter Each( {value}, Expr( MyExpr( 1, 2, 3, 4 ) ), Mod( value, 2 ) == 0 );
Show( values );

```

**List**

```jsl

Names Default To Here( 1 );
values = Filter Each( {x}, {0, -5, 2, -10, 4}, x > 0 );
Show( values );

```

**Matrix**

```jsl

Names Default To Here( 1 );
values = Filter Each( {x, i}, 100 :: 120, i > 10 );
Show( values );

```

### For

**语法:** For( initExpr, whileExpr, nextExpr, bodyExpr )

**说明:** 计算一次 initExpr，然后反复计算 whileExpr、bodyExpr、nextExpr，直到 whileExpr 计算得出非零值。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
s = "";
For( i = 1, i < 10, i++,
	s ||= " " || Char( i )
);
Trim( s );

```

### For Each

**语法:** For Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;locals list&gt;, body)

**说明:** 迭代容器（列表、矩阵、关联数组或表达式），并在每次迭代时提供值、元素或键。在每次迭代时也可以使用索引号。对于“关联数组”容器，可以使用两项列表来访问键和值。对于“矩阵”容器，默认情况下提供线性索引，但是可以使用两项列表来访问行索引和列索引。这些符号仅在循环主体内提供，并带有内置的“本地”块。还提供了一个“本地”列表，在设置第一个迭代符号后将其初始化。

**JMP添加的版本:** 16

**Across**

```jsl

Names Default To Here( 1 );

// Across multiple containers
x = {1, 3};
y = {2, 4};
For Each( {{a, b}, index}, Across( x, y ), Show( a, b, index ) );

// Across list of containers
xy = {{1, 3}, {2, 4}};
For Each( {{a, b}, index}, Across( xy ), Show( a, b, index ) );

```

**Across - Count**

```jsl

Names Default To Here( 1 );

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

**Associative Array**

```jsl

Names Default To Here( 1 );
For Each( {{key, value}, index}, ["A" => 8, "B" => 6, "C" => 10], Show( key, value, index ) );

```

**Expression**

```jsl

Names Default To Here( 1 );
For Each( {value, index}, Expr( MyExpr( 10, 20, 30 ) ), Show( value ) );

```

**List**

```jsl

Names Default To Here( 1 );
For Each( {value, index}, {10, 20, 30}, Show( value, index ) );

```

**Matrix**

```jsl

Names Default To Here( 1 );
For Each( {element, {row, col}}, 10 :: 15, Show( element, row, col ) );

```

**矩阵 - 线性索引**

```jsl

Names Default To Here( 1 );
For Each( {element, index}, 10 :: 15, Show( element, index ) );

```

### For Each Row

**语法:** y = For Each Row( &lt;dt&gt;, body )

**说明:** 针对当前数据表中的每一行，迭代计算 body 表达式。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( :height = -:height );

```

### If

**语法:** y = If( condition1, result1, &lt;condition2, result2&gt;, ..., &lt;elseResult&gt; )

**说明:** 对每对参数的第一个求值并返回与求值结果为非零的第一个 condition 参数关联的 result 表达式的求值结果。condition 参数按顺序求值。若所有 condition 参数的求值结果为零，则计算可选 elseResult 并且返回该结果。若未指定 elseResult，则没有条件为真，返回缺失值。若所有 condition 参数的计算结果为缺失值，则返回缺失值。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
If( Random Uniform() < 0.5,
	"heads",
	"tails"
);

```

### IfMZ

**语法:** y = IfMZ( condition1, result1, &lt;condition2, result2&gt;, ..., &lt;elseResult&gt; )

**说明:** 对每对参数的第一个求值并返回与第一个求值结果为非零的第一个 condition 参数关联的 result 表达式的求值结果。condition 参数按顺序求值。若所有 condition 参数的求值结果为零或缺失值，则计算可选 elseResult 并且返回该结果。若未指定 elseResult，则没有条件为真，返回缺失值。（IfMZ() 等价于 If()，其中求值的 condition 参数的缺失值视为零。）

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
x = 1;
Show( IfMZ( x == 1, 10, x == 2, 20, 30 ) );
x = .;
Show( IfMZ( x == 1, 10, x == 2, 20, 30 ) );
x = .;
Show( If( x == 1, 10, x == 2, 20, 30 ) );

```

### IfMax

**语法:** y = IfMax( expr1, result1, expr2, result2, ..., &lt;allMissingResult&gt; )

**说明:** 对每对参数的第一个参数求值，返回与其中最大值对应的结果表达式的值。若存在结值，则返回第一个最大值。若所有表达式均缺失，则返回空（参数数量为偶数时）或最后一个参数（参数数量为奇数时）。检验表达式的求值结果必须为数值，但结果表达式的求值结果可以是任何对象。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
TomScore = 45;
JonScore = 47;
TimScore = 46;
highestScorer = IfMax( TomScore, "Tom", JonScore, "Jon", TimScore, "Tim", "Noone" );

```

### IfMin

**语法:** y = IfMin( expr1, result1, expr2, result2, ..., &lt;allMissingResult&gt; )

**说明:** 对每对参数的第一个参数求值，返回与其中最小值对应的结果表达式的值。若存在结值，则返回第一个最小值。若所有表达式均缺失，则返回空（参数数量为偶数时）或最后一个参数（参数数量为奇数时）。检验表达式的求值结果必须为数值，但结果表达式的求值结果可以是任何对象。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
TomScore = 45;
JonScore = 47;
TimScore = 46;
lowestScorer = IfMin( TomScore, "Tom", JonScore, "Jon", TimScore, "Tim", "Noone" );

```

### Interpolate

**语法:** y = Interpolate(x|xmatrix|xlist, x1, y1, x2, y2);y = Interpolate(x | xmatrix | xlist, xmatrix, ymatrix);z = Interpolate({ x, y }, xvector, yvector, zmatrix)

**说明:** 查找 x 介于其间的 xi 参数，并使用线性内插法将相应的 yi 参数插入。注意: xi 参数必须按顺序指定。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );

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

**示例 2**

```jsl

Names Default To Here( 1 );
Interpolate( 2.5, [1 2 3], [15, 20, 30] );

```

**示例 3**

```jsl

Names Default To Here( 1 );
Interpolate( {.5, .8}, [0 1], [0 1], [10 20, 12 18] );

```

**示例 4**

```jsl

Names Default To Here( 1 );

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

**语法:** y = Is Associative Array( x )

**说明:** 若 x 参数是关联数组则返回 1，否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Is Associative Array( [1 => 2] );

```

### Is Class

**语法:** isns = Is Class( class reference )

**说明:** 若 class 参数为类，则返回 1。否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
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

**语法:** y = Is Empty( name )

**说明:** 若变量未定义或保持 Empty() 值，则返回 1。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Is Empty( x );

```

**示例 2**

```jsl

Names Default To Here( 1 );
x = Empty();
Is Empty( x );

```

**示例 3**

```jsl

Names Default To Here( 1 );

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

**语法:** y = Is Expr( x )

**说明:** 若 x 参数是表达式则返回 1，否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Is Expr( Expr( x ) );

```

### Is List

**语法:** y = Is List( x )

**说明:** 若 x 参数是列表，则返回 1；否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Is List( {1, 2, 3} );

```

### Is Name

**语法:** y = Is Name( x )

**说明:** 若 x 参数是名称则返回 1，否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Is Name( Name Expr( n ) );

```

### Is Namespace

**语法:** isns = Is Namespace( namespace reference )

**说明:** 若 namespace 参数为命名空间，则返回 1；否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
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

**语法:** y = Is Number( x )

**说明:** 若 x 参数是数值则返回 1，否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Is Number( 213 );

```

### Is Scriptable

**语法:** tf = Is Scriptable( x )

**说明:** 若 x 参数是可脚本化对象，则返回 1；否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Is Scriptable( Bivariate( Y( :weight ), X( :height ) ) );

```

### Is String

**语法:** y = Is String( x )

**说明:** 若 x 参数是字符串则返回 1，否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Is String( "abc" );

```

### Match

**语法:** y = Match( x, v1, expr1, v2, expr2, ..., exprElse )

**说明:** 找出第一个等于 x 的 vN 参数并计算和返回对应的 exprN 参数，若没有等于 x 的值，则计算并返回 exprElse 参数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Match( Year( Today() ), 2013, "snake", 2014, "horse", 2015, "goat", "other" );

```

### MatchMZ

**语法:** y = MatchMZ( x, v1, expr1, v2, expr2, ..., exprElse )

**说明:** 找出第一个等于 x 的 vN 参数并计算和返回对应的 exprN 参数，若没有值等于 x，则计算并返回 exprElse 参数。（除缺失值视为 0 之外，MatchMZ() 函数等价于 Match() 函数。）

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
MatchMZ( Year( Today() ), 2013, "snake", 2014, "horse", 2015, "goat", "other" );

```

### Not

**语法:** y = !x; y = Not( x )

**说明:** 返回 x 的逻辑“非”运算值: 若 x 为零，则为 1，若 x 为缺失，则为缺失；若为其他情况，则为 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
!(1 < 2);

```

### Or

**语法:** y = x1 | x2; y = Or( x1, x2, ... )

**说明:** 返回所有参数的逻辑“或”运算值: 若有任何参数为非零，则为 1，否则为 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
1 < 2 | 3 < 2;

```

### OrMZ

**语法:** y = OrMZ( x1, x2, ... )

**说明:** 返回所有参数的逻辑“或”值（缺失值视为零）: 若有任何参数非零，则为 1，否则为 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
OrMZ( 1 < 2, 3 < 2 );

```

### Return

**语法:** Return(&lt;Expr&gt;, ..., &lt;ExprN&gt;)

**说明:** 从用户定义的函数返回表达式值。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
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

**示例 2**

```jsl

Names Default To Here( 1 );
f = Function( {a, b},
	Return( a - b, a + b )
);
{lo, hi} = f( 10, 1 );
Show( lo, hi );
Show( f( 7, 15 ) );

```

### Step

**语法:** y = Step( x, x1, y1, x2, y2, ... )y = Step( x, [x1, x2, ...], [y1, y2, ...] )

**说明:** 找出 xi 小于等于 x 参数的最大一个 xi 值并返回对应的 yi 参数。注意: xi 参数必须按顺序指定。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Step( 2.5, [1 2 3], [15, 20, 30] );

```

### Stop

**语法:** Stop()

**说明:** 立即终止执行 JSL 脚本

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
For( i = 1, i <= 10, i++,
	If( i == 7, Stop() );
	Print( "i=" || Char( i ) );
);

```

### Transform Each

**语法:** list = Transform Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;Output( "List" | "Matrix" | "Associative Array" | "Expression", &lt;expr head name&gt; )&gt;, &lt;locals list&gt;, body)

**说明:** 不仅执行 For Each 函数的所有操作，而且还会在每次迭代时返回包含结果的容器。默认情况下，返回与输入容器类型匹配的容器，但可以使用 Output 参数进行更改。对于列表或表达式输出，没有结果时将使用 Empty()。对于矩阵输出，没有结果或结果为非数值时，将使用数值缺失值。对于关联数组输出，若没有结果，则键将不存在。使用 Continue() 时，等效于该迭代不返回任何值。

**JMP添加的版本:** 16

**Associative Array**

```jsl

Names Default To Here( 1 );
values = Transform Each( {{key, value}}, ["A" => 8, "B" => 6, "C" => 10], value + 1 );
Show( values );

```

**Expression 1**

```jsl

Names Default To Here( 1 );
ex = Transform Each( {value}, Expr( MyExpr( 10, 20, 30 ) ), value + 1 );
Show( ex );

```

**Expression 2**

```jsl

Names Default To Here( 1 );
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

**List**

```jsl

Names Default To Here( 1 );
values = Transform Each( {value}, {10, 20, 30}, value + 5 );
Show( values );

```

**Matrix**

```jsl

Names Default To Here( 1 );
values = Transform Each( {element}, 10 :: 15, element + 5 );
Show( values );

```

**Output**

```jsl

Names Default To Here( 1 );

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

**语法:** While( testExpr, bodyExpr )

**说明:** 若 testExpr 计算得出非零值，就要重复计算 testExpr 和 bodyExpr 表达式。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
i = 1;
s = "";
While( i < 1000,
	s ||= " " || Char( i );
	i *= 2;
);
s;

```

### Zero Or Missing

**语法:** y = Zero Or Missing( x )

**说明:** 返回 x 的逻辑“非”（缺失值视为零）: 若 x 为缺失或零，则为 1。否则，则为 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Zero Or Missing( 1 < 2 );

```

