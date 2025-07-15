# Conditional



### And

**Sintaxis:** y = x1 & x2; y = And( x1, x2, ... )

**Descripción:** Devuelve el AND lógico de todos los argumentos: 1 si todos los argumentos son distintos de cero y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
1 < 2 & 3 < 4;

```

### AndMZ

**Sintaxis:** y = AndMZ( x1, x2, ... )

**Descripción:** Devuelve el AND lógico de todos los argumentos, tratando los valores faltantes como si fuesen ceros: 1 si todos los argumentos son distintos de cero y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
AndMZ( 1 < 2, 3 < 4 );

```

### Break

**Sintaxis:** Break()

**Descripción:** Provoca una interrupción en el flujo de control dentro de un bucle For o While.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
For( i = 1, i <= 10, i++,
	If( i == 5, Break() );
	Print( "i=" || Char( i ) );
);

```

### Choose

**Sintaxis:** y = Choose( i, expr1, expr2, ..., exprElse )

**Descripción:** Evalúa y devuelve el i-ésimo argumento expr, o el argumento exprElse si no hay ningún argumento i-ésimo expr.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Choose( Random Integer( 1, 5 ), "red", "blue", "other" );

```

### Continue

**Sintaxis:** Continue()

**Descripción:** Provoca la continuación de la iteración siguiente en el flujo de control de un bucle For o While.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
For( i = 1, i <= 10, i++,
	If( i < 2, Continue() );
	Print( "i=" || Char( i ) );
);

```

### Filter Each

**Sintaxis:** list = Filter Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;locals list&gt;, body)

**Descripción:** Realiza lo mismo que la función Para cada, pero también devuelve una lista de valores filtrados del contenedor original basada en un resultado de valores booleanos. El tipo de resultado coincidirá con el tipo de contenedor de entrada. Para la entrada Matriz, se devolverá una matriz de vectores fila, puesto que no se puede saber el tamaño de la matriz.

**JMP Versión agregada:** 16

**Associative Array**

```jsl

Names Default To Here( 1 );
values = Filter Each( {{key, value}}, ["A" => 8, "B" => 6, "C" => 10],
	value > 6
);
Show( values );

```

**Expression**

```jsl

Names Default To Here( 1 );
values = Filter Each( {value}, Expr( MyExpr( 1, 2, 3, 4 ) ),
	Mod( value, 2 ) == 0
);
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

**Sintaxis:** For( initExpr, whileExpr, nextExpr, bodyExpr )

**Descripción:** Evalúa initExpr una sola vez y después evalúa repetidamente whileExpr, bodyExpr y nextExpr mientras el valor de whileExpr sea distinto de cero.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
s = "";
For( i = 1, i < 10, i++,
	s ||= " " || Char( i )
);
Trim( s );

```

### For Each

**Sintaxis:** For Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;locals list&gt;, body)

**Descripción:** Itera sobre un contenedor, ya sea una lista, matriz, arreglo asociativo o expresión y proporciona el valor, elemento o clave en cada iteración. El número de índice también está disponible en cada iteración. Para los contenedores de tipo arreglo asociativo, se puede acceder a la clave y el valor utilizando una lista de dos elementos. Para los contenedores de tipo matriz, se proporciona un índice lineal de forma predeterminada, pero se puede utilizar una lista de dos elementos para acceder a los índices de fila y columna. Estos símbolos solo se proporcionan dentro del cuerpo del bucle, con un bloqueo local integrado. También se puede proporcionar una lista de locales, que se inicializan después de establecer los primeros símbolos de iteración.

**JMP Versión agregada:** 16

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
For Each( {{l1, l2}}, Across( list1, list2, Count( "Longest" ) ),
	Show( l1, l2 )
);

Write( "\!N===Shortest===" );
For Each( {{s1, s2}}, Across( list1, list2, Count( "Shortest" ) ),
	Show( s1, s2 )
);

Write( "\!N===N===" );
For Each( {{n1, n2}}, Across( list1, list2, Count( 7 ) ), Show( n1, n2 ) );

Write( "\!N===Enforce Equal===" );
Try(
	For Each( {values}, Across( list1, list2, Count( "Enforce Equal" ) ),
		Show( values )
	),
	Print( "Error occurred" )
);

```

**Associative Array**

```jsl

Names Default To Here( 1 );
For Each( {{key, value}, index}, ["A" => 8, "B" => 6, "C" => 10],
	Show( key, value, index )
);

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

**Matriz: índice lineal**

```jsl

Names Default To Here( 1 );
For Each( {element, index}, 10 :: 15, Show( element, index ) );

```

### For Each Row

**Sintaxis:** y = For Each Row( &lt;dt&gt;, body )

**Descripción:** Evalúa la expresión del cuerpo iterativamente para cada fila de la tabla de datos actual.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( :height = -:height );

```

### If

**Sintaxis:** y = If( condition1, result1, &lt;condition2, result2&gt;, ..., &lt;elseResult&gt; )

**Descripción:** Evalúa la primera de cada pareja de argumentos y devuelve la evaluación de la expresión result asociada al primer argumento de condition que evalúa como un resultado distinto de cero. Los argumentos de condition se evalúan en orden. Si todos los argumentos de condition evalúan como cero, se evalúa el elseResult opcional y se devuelve el resultado. Si no se especifica ningún elseResult, y ninguna de las condiciones son verdaderas, se devuelve un valor faltante. Si todos los argumentos de condition evalúan como faltante, se devuelve un valor faltante.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
If( Random Uniform() < 0.5,
	"heads",
	"tails"
);

```

### IfMZ

**Sintaxis:** y = IfMZ( condition1, result1, &lt;condition2, result2&gt;, ..., &lt;elseResult&gt; )

**Descripción:** Evalúa la primera de cada pareja de argumentos y devuelve la evaluación de la expresión result asociada al primer argumento de condition que evalúa como un resultado distinto de cero. Los argumentos de condition se evalúan en orden. Si todos los argumentos de condition evalúan como cero o faltante, se evalúa el elseResult opcional y se devuelve el resultado. Si no se especifica ningún elseResult, y ninguna de las condiciones son verdaderas, se devuelve un valor faltante. (IfMZ() equivale a If() donde los valores faltantes de los argumentos de condition evaluados se consideran cero.)

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = IfMax( expr1, result1, expr2, result2, ..., &lt;allMissingResult&gt; )

**Descripción:** Evalúa el primero de cada par de argumentos y devuelve la evaluación de la expresión resultado que resulta asociada al máximo de las expresiones. Si se produce un empate, devuelve el primer máximo. En caso de que no haya ninguna expresión, si el número de argumentos es par, devuelve Vacío, y si es impar, el último argumento. Las expresiones de prueba deben dar un resultado numérico, pero las expresiones resultado pueden ser cualesquiera.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
TomScore = 45;
JonScore = 47;
TimScore = 46;
highestScorer = IfMax(
	TomScore,
	"Tom",
	JonScore,
	"Jon",
	TimScore,
	"Tim",
	"Noone"
);

```

### IfMin

**Sintaxis:** y = IfMin( expr1, result1, expr2, result2, ..., &lt;allMissingResult&gt; )

**Descripción:** Evalúa el primero de cada par de argumentos y devuelve la evaluación de la expresión resultado que resulta asociada al mínimo de las expresiones. Si se produce un empate, devuelve el primer mínimo. En caso de que no haya ninguna expresión, si el número de argumentos es par, devuelve Vacío, y si es impar, el último argumento. Las expresiones de prueba deben dar un resultado numérico, pero las expresiones resultado pueden ser cualesquiera.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
TomScore = 45;
JonScore = 47;
TimScore = 46;
lowestScorer = IfMin(
	TomScore,
	"Tom",
	JonScore,
	"Jon",
	TimScore,
	"Tim",
	"Noone"
);

```

### Interpolate

**Sintaxis:** y = Interpolate(x|xmatrix|xlist, x1, y1, x2, y2);y = Interpolate(x | xmatrix | xlist, xmatrix, ymatrix);z = Interpolate({ x, y }, xvector, yvector, zmatrix)

**Descripción:** Encuentra los argumentos xi tales que x está entre ellos e interpola linealmente los argumentos yi correspondientes. Nótese que los argumentos xi se deben especificar por orden.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

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

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
Interpolate( 2.5, [1 2 3], [15, 20, 30] );

```

**Ejemplo 3**

```jsl

Names Default To Here( 1 );
Interpolate( {.5, .8}, [0 1], [0 1], [10 20, 12 18] );

```

**Ejemplo 4**

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

**Sintaxis:** y = Is Associative Array( x )

**Descripción:** Devuelve 1 si el argumento x es un arreglo asociativo y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Is Associative Array( [1 => 2] );

```

### Is Class

**Sintaxis:** isns = Is Class( class reference )

**Descripción:** Devuelve 1 si el argumento class es una clase. De lo contrario, devuelve 0.

**JMP Versión agregada:** Antes de la versión 14

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
		New Object(
			complex(
				real * y:real - imag * y:imag, imag * y:real + real * y:imag
			)
		)
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

**Sintaxis:** y = Is Empty( name )

**Descripción:** Devuelve 1 si la variable no está definida o retiene el valor Empty().

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
Is Empty( x );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
x = Empty();
Is Empty( x );

```

**Ejemplo 3**

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

**Sintaxis:** y = Is Expr( x )

**Descripción:** Devuelve 1 si el argumento x es una expresión y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Is Expr( Expr( x ) );

```

### Is List

**Sintaxis:** y = Is List( x )

**Descripción:** Devuelve 1 si el argumento x es una lista y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Is List( {1, 2, 3} );

```

### Is Name

**Sintaxis:** y = Is Name( x )

**Descripción:** Devuelve 1 si el argumento x es un nombre y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Is Name( Name Expr( n ) );

```

### Is Namespace

**Sintaxis:** isns = Is Namespace( namespace reference )

**Descripción:** Devuelve 1 si el argumento namespace es un espacio de nombres y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = Is Number( x )

**Descripción:** Devuelve 1 si el argumento x es un número y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Is Number( 213 );

```

### Is Scriptable

**Sintaxis:** tf = Is Scriptable( x )

**Descripción:** Devuelve 1 si el argumento x es un objeto que admite scripts y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Is Scriptable( Bivariate( Y( :weight ), X( :height ) ) );

```

### Is String

**Sintaxis:** y = Is String( x )

**Descripción:** Devuelve 1 si el argumento x es una cadena de caracteres y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Is String( "abc" );

```

### Match

**Sintaxis:** y = Match( x, v1, expr1, v2, expr2, ..., exprElse )

**Descripción:** Evalúa y devuelve el argumento exprN correspondiente al primer argumento vN igual a x, o evalúa y devuelve el argumento exprElse si ningún valor es igual a x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Match( Year( Today() ), 2013, "snake", 2014, "horse", 2015, "goat", "other" );

```

### MatchMZ

**Sintaxis:** y = MatchMZ( x, v1, expr1, v2, expr2, ..., exprElse )

**Descripción:** Evalúa y devuelve el argumento exprN correspondiente al primer argumento vN igual a x, o evalúa y devuelve el argumento exprElse si ningún valor es igual a x. (La función MatchMZ() se comporta como la función Match(), salvo que los valores faltantes se tratan como 0).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
MatchMZ( Year( Today() ), 2013, "snake", 2014, "horse", 2015, "goat", "other" );

```

### Not

**Sintaxis:** y = !x; y = Not( x )

**Descripción:** Devuelve el NOT lógico de x: 1 si x es cero, faltante si x falta y 0 en los demás casos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
!(1 < 2);

```

### Or

**Sintaxis:** y = x1 | x2; y = Or( x1, x2, ... )

**Descripción:** Devuelve el OR lógico de todos los argumentos: 1 si algún argumento es distinto de cero y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
1 < 2 | 3 < 2;

```

### OrMZ

**Sintaxis:** y = OrMZ( x1, x2, ... )

**Descripción:** Devuelve el OR lógico de todos los argumentos, tratando los valores faltantes como si fuesen ceros: 1 si algún argumento es distinto de cero y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
OrMZ( 1 < 2, 3 < 2 );

```

### Return

**Sintaxis:** Return(&lt;Expr&gt;, ..., &lt;ExprN&gt;)

**Descripción:** Devuelve un valor de expresión de una función definida por el usuario

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

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

**Ejemplo 2**

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

**Sintaxis:** y = Step( x, x1, y1, x2, y2, ... )y = Step( x, [x1, x2, ...], [y1, y2, ...] )

**Descripción:** Devuelve el argumento yi correspondiente al valor xi más grande que cumple que xi es menor o igual que el argumento x. Nótese que los argumentos xi se deben especificar en orden.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Step( 2.5, [1 2 3], [15, 20, 30] );

```

### Stop

**Sintaxis:** Stop()

**Descripción:** Finaliza inmediatamente la ejecución de un script JSL.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
For( i = 1, i <= 10, i++,
	If( i == 7, Stop() );
	Print( "i=" || Char( i ) );
);

```

### Transform Each

**Sintaxis:** list = Transform Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;Output( "List" | "Matrix" | "Associative Array" | "Expression", &lt;expr head name&gt; )&gt;, &lt;locals list&gt;, body)

**Descripción:** Realiza lo mismo que la función Para cada, pero también devuelve un contenedor con el resultado de cada iteración. De forma predeterminada, devuelve un contenedor que coincide con el tipo de contenedor de entrada, pero se puede modificar mediante el argumento Salida. Para la salida Lista o Expresión, se utilizará Empty() cuando no haya ningún resultado. Para la salida Matriz, se utiliza un valor faltante numérico cuando no haya ningún resultado o cuando el resultado sea no numérico. En el caso de la salida Arreglo asociativo, la clave no existirá cuando no haya ningún resultado. Utilizar Continue() equivale a no devolver ningún valor para cada iteración.

**JMP Versión agregada:** 16

**Associative Array**

```jsl

Names Default To Here( 1 );
values = Transform Each( {{key, value}}, ["A" => 8, "B" => 6, "C" => 10],
	value + 1
);
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
parsedScript = Include(
	"$SAMPLE_SCRIPTS/BayesPlotForFactors.jsl",
	<<ParseOnly
);
functionNames = Transform Each( {statement}, Name Expr( parsedScript ),
	Output( "List" ), {lhs, rhs},
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
aa = Transform Each( {value}, {10, 20, 30}, Output( "Associative Array" ),
	value + 1
);
Show( aa );

Write( "\!N===Expression===" );
ex = Transform Each( {value}, {10, 20, 30}, Output( "Expression", "My Values" ),
	value + 1
);
Show( ex );

```

### While

**Sintaxis:** While( testExpr, bodyExpr )

**Descripción:** Evalúa las expresiones testExpr y bodyExpr repetidamente mientras el valor de testExpr sea distinto de cero.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = Zero Or Missing( x )

**Descripción:** Devuelve el NOT lógico de x, tratando los valores faltantes como si fuesen ceros: 1 si x falta o es cero y 0 en los demás casos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Zero Or Missing( 1 < 2 );

```

