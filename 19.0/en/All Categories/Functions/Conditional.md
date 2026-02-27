# Conditional



### And

**Syntax:** y = x1 & x2; y = And( x1, x2, ... )

**Description:** Returns the logical AND of all arguments: 1 if all arguments are nonzero and 0 otherwise.

**JMP Version Added:** Before version 14

```jsl

1 < 2 & 3 < 4;

```

### AndMZ

**Syntax:** y = AndMZ( x1, x2, ... )

**Description:** Returns the logical AND of all arguments with missing values treated as zeros: 1 if all arguments are nonzero and 0 otherwise.

**JMP Version Added:** Before version 14

```jsl

AndMZ( 1 < 2, 3 < 4 );

```

### Break

**Syntax:** Break()

**Description:** Causes a break in flow of control within a For or While loop.

**JMP Version Added:** Before version 14

```jsl

For( i = 1, i <= 10, i++,
	If( i == 5, Break() );
	Print( "i=" || Char( i ) );
);

```

### Choose

**Syntax:** y = Choose( i, expr1, expr2, ..., exprElse )

**Description:** Evaluates and returns the ith expr argument or the exprElse argument if there is no ith expr argument.

**JMP Version Added:** Before version 14

```jsl

Choose( Random Integer( 1, 5 ), "red", "blue", "other" );

```

### Continue

**Syntax:** Continue()

**Description:** Causes a continuation of next iteration of flow of control within a For or While loop.

**JMP Version Added:** Before version 14

```jsl

For( i = 1, i <= 10, i++,
	If( i < 2, Continue() );
	Print( "i=" || Char( i ) );
);

```

### Filter Each

**Syntax:** list = Filter Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;locals list&gt;, body)

**Description:** Does everything that the For Each function does, but also returns a list of filtered values from the original container based on a boolean value result. The type of the result will match the type of the input container. For Matrix input, a row vector matrix will be returned, since the size of the matrix cannot be known.

**JMP Version Added:** 16

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

**Syntax:** For( initExpr, whileExpr, nextExpr, bodyExpr )

**Description:** Evaluates initExpr once and repeatedly evaluates whileExpr, bodyExpr, and nextExpr as long as whileExpr evaluates to a nonzero value.

**JMP Version Added:** Before version 14

```jsl

s = "";
For( i = 1, i < 10, i++,
	s ||= " " || Char( i )
);
Trim( s );

```

### For Each

**Syntax:** For Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;locals list&gt;, body)

**Description:** Iterates over a container, either a list, matrix, associative array, or expression, providing the value, element, or key at each iteration. The index number is also available at each iteration. For Associative Array containers, the key and value can be accessed using a two-item list. For Matrix containers, a linear index is provided by default, but a two item list can be used to access the row and column indices. These symbols are provided within the body of the loop only, with a built-in Local block. A locals list can also be provided, which are initialized after the first iteration symbols are set.

**JMP Version Added:** 16

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

#### Matrix - Linear Index

```jsl

For Each( {element, index}, 10 :: 15, Show( element, index ) );

```

### For Each Row

**Syntax:** y = For Each Row( &lt;dt&gt;, body )

**Description:** Evaluates the body expression iteratively for each row in the current data table.

**JMP Version Added:** Before version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( :height = -:height );

```

### If

**Syntax:** y = If( condition1, result1, &lt;condition2, result2&gt;, ..., &lt;elseResult&gt; )

**Description:** Evaluates the first of each pair of arguments and returns the evaluation of the result expression associated with the first condition argument that evaluates to a nonzero result. The condition arguments are evaluated in order. If all of the condition arguments evaluate to zero, the optional elseResult is evaluated and the result is returned. If no elseResult is specified, and none of the conditions are true, a missing value is returned. If all of the condition arguments evaluate to missing, a missing value is returned.

**JMP Version Added:** Before version 14

```jsl

If( Random Uniform() < 0.5,
	"heads",
	"tails"
);

```

### IfMZ

**Syntax:** y = IfMZ( condition1, result1, &lt;condition2, result2&gt;, ..., &lt;elseResult&gt; )

**Description:** Evaluates the first of each pair of arguments and returns the evaluation of the result expression associated with the first condition argument that evaluates to a nonzero result. The condition arguments are evaluated in order. If all condition arguments evaluate to zero or missing, the optional elseResult is evaluated and the result is returned. If no elseResult is specified, and none of the conditions are true, a missing value is returned. (IfMZ() is equivalent to If() where missing values for evaluated condition arguments are treated as zero.)

**JMP Version Added:** Before version 14

```jsl

x = 1;
Show( IfMZ( x == 1, 10, x == 2, 20, 30 ) );
x = .;
Show( IfMZ( x == 1, 10, x == 2, 20, 30 ) );
x = .;
Show( If( x == 1, 10, x == 2, 20, 30 ) );

```

### IfMax

**Syntax:** y = IfMax( expr1, result1, expr2, result2, ..., &lt;allMissingResult&gt; )

**Description:** Evaluates the first of each pair of arguments, and returns the evaluation of the result expression associated with the maximum of the expressions. If there are ties, it returns the first maximum. If all expressions are missing, it returns Empty if an even number of arguments, or the last argument if odd. The test expressions must evaluate to numeric, but the result expressions can be anything.

**JMP Version Added:** Before version 14

```jsl

TomScore = 45;
JonScore = 47;
TimScore = 46;
highestScorer = IfMax( TomScore, "Tom", JonScore, "Jon", TimScore, "Tim", "Noone" );

```

### IfMin

**Syntax:** y = IfMin( expr1, result1, expr2, result2, ..., &lt;allMissingResult&gt; )

**Description:** Evaluates the first of each pair of arguments, and returns the evaluation of the result expression associated with the minimum of the expressions. If there are ties, it returns the first minimum. If all expressions are missing, it returns Empty if an even number of arguments, or the last argument if odd. The test expressions must evaluate to numeric, but the result expressions can be anything.

**JMP Version Added:** Before version 14

```jsl

TomScore = 45;
JonScore = 47;
TimScore = 46;
lowestScorer = IfMin( TomScore, "Tom", JonScore, "Jon", TimScore, "Tim", "Noone" );

```

### Interpolate

**Syntax:** y = Interpolate(x|xmatrix|xlist, x1, y1, x2, y2);y = Interpolate(x | xmatrix | xlist, xmatrix, ymatrix);z = Interpolate({ x, y }, xvector, yvector, zmatrix)

**Description:** Finds the xi arguments that x is between and linearly interpolates the corresponding yi arguments. Note that the xi arguments must be specified in order.

**JMP Version Added:** Before version 14

**Example 1**

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

**Example 2**

```jsl

Interpolate( 2.5, [1 2 3], [15, 20, 30] );

```

**Example 3**

```jsl

Interpolate( {.5, .8}, [0 1], [0 1], [10 20, 12 18] );

```

**Example 4**

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

**Syntax:** y = Is Associative Array( x )

**Description:** Returns 1 is the x argument is an associative array, otherwise returns 0.

**JMP Version Added:** Before version 14

```jsl

Is Associative Array( [1 => 2] );

```

### Is Class

**Syntax:** isns = Is Class( class reference )

**Description:** Returns 1 if the class argument is a class. Otherwise, a 0 is returned.

**JMP Version Added:** Before version 14

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

**Syntax:** y = Is Empty( name )

**Description:** Returns 1 if the variable is undefined or holds the Empty() value.

**JMP Version Added:** Before version 14

**Example 1**

```jsl

Is Empty( x );

```

**Example 2**

```jsl

x = Empty();
Is Empty( x );

```

**Example 3**

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

**Syntax:** y = Is Expr( x )

**Description:** Returns 1 if the x argument is an expression, 0 otherwise.

**JMP Version Added:** Before version 14

```jsl

Is Expr( Expr( x ) );

```

### Is List

**Syntax:** y = Is List( x )

**Description:** Returns 1 if the x argument is a list, 0 otherwise.

**JMP Version Added:** Before version 14

```jsl

Is List( {1, 2, 3} );

```

### Is Name

**Syntax:** y = Is Name( x )

**Description:** Returns 1 if the x argument is a name, 0 otherwise.

**JMP Version Added:** Before version 14

```jsl

Is Name( Name Expr( n ) );

```

### Is Namespace

**Syntax:** isns = Is Namespace( namespace reference )

**Description:** Returns 1 if the namespace argument is a namespace; otherwise a 0 is returned.

**JMP Version Added:** Before version 14

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

**Syntax:** y = Is Number( x )

**Description:** Returns 1 if the x argument is a number, 0 otherwise.

**JMP Version Added:** Before version 14

```jsl

Is Number( 213 );

```

### Is Scriptable

**Syntax:** tf = Is Scriptable( x )

**Description:** Returns 1 if the x argument is a scriptable object, 0 otherwise.

**JMP Version Added:** Before version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Is Scriptable( Bivariate( Y( :weight ), X( :height ) ) );

```

### Is String

**Syntax:** y = Is String( x )

**Description:** Returns 1 if the x argument is a string, 0 otherwise.

**JMP Version Added:** Before version 14

```jsl

Is String( "abc" );

```

### Match

**Syntax:** y = Match( x, v1, expr1, v2, expr2, ..., exprElse )

**Description:** Evaluates and returns the exprN argument corresponding to the first vN argument that equals x or evaluates and returns the exprElse argument if no value equals x.

**JMP Version Added:** Before version 14

```jsl

Match( Year( Today() ), 2013, "snake", 2014, "horse", 2015, "goat", "other" );

```

### MatchMZ

**Syntax:** y = MatchMZ( x, v1, expr1, v2, expr2, ..., exprElse )

**Description:** Evaluates and returns the exprN argument corresponding to the first vN argument that equals x or evaluates and returns the exprElse argument if no value equals x. (The MatchMZ() function behaves the same as the Match() function, except that missing values are treated as 0.)

**JMP Version Added:** Before version 14

```jsl

MatchMZ( Year( Today() ), 2013, "snake", 2014, "horse", 2015, "goat", "other" );

```

### Not

**Syntax:** y = !x; y = Not( x )

**Description:** Returns the logical NOT of x: 1 if x is zero, missing if x is missing, and 0 otherwise.

**JMP Version Added:** Before version 14

```jsl

!(1 < 2);

```

### Or

**Syntax:** y = x1 | x2; y = Or( x1, x2, ... )

**Description:** Returns the logical OR of all arguments: 1 if any arguments are nonzero and 0 otherwise.

**JMP Version Added:** Before version 14

```jsl

1 < 2 | 3 < 2;

```

### OrMZ

**Syntax:** y = OrMZ( x1, x2, ... )

**Description:** Returns the logical OR of all arguments with missing values treated as zeros: 1 if any arguments are nonzero and 0 otherwise.

**JMP Version Added:** Before version 14

```jsl

OrMZ( 1 < 2, 3 < 2 );

```

### Return

**Syntax:** Return(&lt;Expr&gt;, ..., &lt;ExprN&gt;)

**Description:** Returns an expression value from a user-defined function.

**JMP Version Added:** Before version 14

**Example 1**

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

**Example 2**

```jsl

f = Function( {a, b},
	Return( a - b, a + b )
);
{lo, hi} = f( 10, 1 );
Show( lo, hi );
Show( f( 7, 15 ) );

```

### Step

**Syntax:** y = Step( x, x1, y1, x2, y2, ... )y = Step( x, [x1, x2, ...], [y1, y2, ...] )

**Description:** Returns the yi argument corresponding to the largest xi value which satisfies xi less than or equal to the x argument. Note that the xi arguments must be specified in order.

**JMP Version Added:** Before version 14

```jsl

Step( 2.5, [1 2 3], [15, 20, 30] );

```

### Stop

**Syntax:** Stop()

**Description:** Immediately terminates the execution of a JSL script

**JMP Version Added:** Before version 14

```jsl

For( i = 1, i <= 10, i++,
	If( i == 7, Stop() );
	Print( "i=" || Char( i ) );
);

```

### Transform Each

**Syntax:** list = Transform Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;Output( "List" | "Matrix" | "Associative Array" | "Expression", &lt;expr head name&gt; )&gt;, &lt;locals list&gt;, body)

**Description:** Does everything the For Each function does, but also returns a container with the result at each iteration. By default, returns a container matching the type of the input container, but can be changed using the Output argument. For List or Expression output, Empty() will be used when there is no result. For Matrix output, a numeric missing value is used when there is no result, or when the result is non-numeric. For Associative Array output, the key will not exist when there is no result. When Continue() is used, it is equivalent to returning no value for that iteration.

**JMP Version Added:** 16

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

**Syntax:** While( testExpr, bodyExpr )

**Description:** Evaluates the testExpr and bodyExpr expressions repeatedly as long as testExpr evaluates to a nonzero value.

**JMP Version Added:** Before version 14

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

**Syntax:** y = Zero Or Missing( x )

**Description:** Returns the logical NOT of x with missing values treated as zeros: 1 if x is missing or zero and 0 otherwise.

**JMP Version Added:** Before version 14

```jsl

Zero Or Missing( 1 < 2 );

```

