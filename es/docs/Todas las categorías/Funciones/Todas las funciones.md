# Todas las funciones

### \\[...]\\

**Sintaxis:** y = \\[string]\\

**Descripción:** Los pasajes que requieren numerosos caracteres de escape pueden utilizar el separador \\[...]\\.

**JMP Versión agregada:** Antes de la versión 14

```jsl


jslPhrase =
"The JSL to do this is :\[
a = "hello";
b = a|| " world.";
show(b);
]\ and you use the Submit command to run it.";
Show( jslPhrase );

```

### Abbrev Date

**Sintaxis:** s = Abbrev Date( datetime, &lt;format&gt; )

**Descripción:** Devuelve una representación abreviada y específica de la configuración local de un valor de fecha y hora.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Abbrev Date( Today() );

```

### Abs

**Sintaxis:** y = Abs( x )

**Descripción:** Devuelve el valor absoluto de x. El argumento puede ser un número, una matriz o una lista de números.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Abs( -5 );

```

### Add

**Sintaxis:** y = x0 + x1; y = Add( x0, x1, ... )

**Descripción:** Suma todos los argumentos, que pueden ser números, matrices o listas de números.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Pi() + 10;

```

### Add Color Theme

**Descripción:** Crea un nuevo tema de color personalizado y lo registra en el selector de temas.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Add Color Theme( {"Yellow To Blue", 0, {{255, 255, 0}, {0, 0, 255}}, {0.0, 1.0}} );

```

**Ejemplo 2**

```jsl

Add Color Theme(
	{"Black To Red To White", {"Continuous", "Categorical", "Diverging"}, {{0, 0, 0}, {255, 0,
	0}, {255, 255, 255}, Missing( "Green" )}, {"Full Color", "Tritanopia", "Tritanomaly"}}
);

```

### Add Custom Functions

**Sintaxis:** Add Custom Functions({f1, f2, ...} | f)

**Descripción:** Define una lista de funciones personalizadas para usarla en los scripts y el Editor de fórmulas. El comando también añade la lista al entorno.

**JMP Versión agregada:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y}, x + y - 1 ) );
mySub = New Custom Function( "custom", "Sub", Function( {x, y}, x - y + 1 ) );
Add Custom Functions( {myAdd, mySub} );

```

### Add To

**Sintaxis:** y += x; Add To( y, x )

**Descripción:** Añade un valor a una variable o a una lista de variables.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex = 1;
ex += 2;
ex;

```

### Add Vectors BLAS

**Sintaxis:** z = Add Vectors BLAS( x, y, alpha )

**JMP Versión agregada:** 17

```jsl

x = [1, 2, 3, 4];
y = [5, 6, 7, 8];
alpha = 0.5;
z = Add Vectors BLAS( x, y, alpha );

```

### Alignment Cell Box

**Sintaxis:** y = Alignment Cell Box( row, col, nRow, nCol, &lt;Sides(left+2*top+4*right+8*bottom=15)&gt; &lt;RowSpan(nRow matrix)&gt; &lt;ColSpan(nCol matrix)&gt;, matrix or list of strings )

**Descripción:** Devuelve una referencia a un cuadro de visualización que incluye el contenido de la fila (o columna) que se encuentra en un cuadro de la cuadrícula de alineación.

**JMP Versión agregada:** 19

```jsl


New Window( "Crosstab",
	Alignment Grid Box(
		Alignment Cell Box( 0, 1, 1, 1, ColSpan( [3] ), {"sex"} ),
		Alignment Cell Box( 1, 1, 1, 3, {"F", "M", "Total"} ),
		Alignment Cell Box( 3, 0, 1, 1, Sides( 0 ), ColSpan( [4] ), {"age"} ),
		Alignment Cell Box( 4, 0, 6, 1, {"  12", "  13", "  14", "  15", "  16", "  17"} ),
		Alignment Cell Box(
			4,
			1,
			6,
			3,
			{"5 (28%)", "3 (14%)", "8 (20%)", "3 (17%)", "4 (18%)", "7 (18%)", "5 (28%)",
			"7 (32%)", "12 (30%)", "2 (11%)", "5 (23%)", "7 (18%)", "2 (11%)", "1 (5%)",
			"3 (8%)", "1 (6%)", "2 (9%)", "3 (8%)"}
		)
	)
);

```

### Alignment Grid Box

**Sintaxis:** y = Alignment Grid Box( alignment cell boxes )

**Descripción:** Devuelve una referencia a un cuadro de visualización que puede contener cuadros de celdas de alineación.

**JMP Versión agregada:** 19

```jsl


New Window( "Crosstab",
	Alignment Grid Box(
		Alignment Cell Box( 0, 1, 1, 1, ColSpan( [3] ), {"sex"} ),
		Alignment Cell Box( 1, 1, 1, 3, {"F", "M", "Total"} ),
		Alignment Cell Box( 3, 0, 1, 1, Sides( 0 ), ColSpan( [4] ), {"age"} ),
		Alignment Cell Box( 4, 0, 6, 1, {"  12", "  13", "  14", "  15", "  16", "  17"} ),
		Alignment Cell Box(
			4,
			1,
			6,
			3,
			{"5 (28%)", "3 (14%)", "8 (20%)", "3 (17%)", "4 (18%)", "7 (18%)", "5 (28%)",
			"7 (32%)", "12 (30%)", "2 (11%)", "5 (23%)", "7 (18%)", "2 (11%)", "1 (5%)",
			"3 (8%)", "1 (6%)", "2 (9%)", "3 (8%)"}
		)
	)
);

```

### Alignment Multi Box

**Sintaxis:** y = Alignment Multi Box( row, col, nRow, nCol, nElements, list-of-nElements-matrices or empty values, list-of-nElements-lists of strings or empty values )

**Descripción:** Devuelve una referencia a un cuadro de visualización que contiene múltiples elementos dentro de cada celda de una cuadrícula de alineación.

**JMP Versión agregada:** 19

```jsl


New Window( "Alignment MultiBox",
	Border Box( Top( 15 ), Left( 15 ), Right( 15 ), Bottom( 15 ),
		Alignment Grid Box(
			Alignment Multi Box( 0, 1, 1, 1, 2, {}, {{"Freq"}, {"Share"}} ),
			Alignment Cell Box( 0, 2, 1, 1, ColSpan( [2] ), {"sex"} ),
			Alignment Cell Box( 1, 2, 1, 2, ColSpan( [1, 1] ), {"F", "M"} ),
			Alignment Cell Box( 2, 0, 1, 1, RowSpan( [7] ), {"age"} ),
			Alignment Cell Box(
				2,
				1,
				7,
				1,
				{"12", "13", "14", "15", "16", "17", "Total Responses"}
			),
			Alignment Multi Box(
				2,
				2,
				6,
				2,
				2,
				{[5 3, 5 2, 2 1, 3 4, 7 5, 1 2], [0.277 0.167, 0.278 0.111, 0.111 0.055,
				0.136 0.181, 0.318 0.227, 0.045 0.090]},
				{Empty(), Empty()}
			),
			Alignment Cell Box( 8, 2, 1, 2, [18 22] )
		)
	)
);

```

### All

**Sintaxis:** y = All( x, ... )

**Descripción:** Devuelve 1 si todos los elementos son distintos de cero y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

All( [1 2 3] );

```

### Alpha Shape

**Sintaxis:** ashape = Alpha Shape(Triangulation)

**Descripción:** Devuelve la forma alfa de la triangulación indicada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = Alpha Shape( triang );

```

### And

**Sintaxis:** y = x1 & x2; y = And( x1, x2, ... )

**Descripción:** Devuelve el AND lógico de todos los argumentos: 1 si todos los argumentos son distintos de cero y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

1 < 2 & 3 < 4;

```

### AndMZ

**Sintaxis:** y = AndMZ( x1, x2, ... )

**Descripción:** Devuelve el AND lógico de todos los argumentos, tratando los valores faltantes como si fuesen ceros: 1 si todos los argumentos son distintos de cero y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

AndMZ( 1 < 2, 3 < 4 );

```

### Any

**Sintaxis:** y = Any( x, ... )

**Descripción:** Devuelve 1 si algún elemento es distinto de cero y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Any( [1 0 2] );

```

### Arc

**Sintaxis:** Arc( left, top, right, bottom, startAngle, endAngle )

**Descripción:** Dibuja un arco de un óvalo. Los ángulos se expresan en grados, y se especifican con 0 grados a las 12:00 y 90 grados a las 3:00. Para alinearlos con los valores radianes utilizados por sin() y cos(), debe invertir la rotación y añadir el desplazamiento de fase de 90 grados. Por ejemplo, radianes = 2 * pi() * (90 - grados)/360. Los arcos se desplazan en el sentido de las agujas del reloj desde el inicio hasta el final.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Arc( 10, 80, 70, 30, 0, 90 );
	)
);

```

### Arc Finder

**Sintaxis:** Arc Finder( Group( lot, wafer ), X( col ), Y( col ), &lt;optional arguments&gt; )

**Descripción:** Busca los arcos en los datos de punto y crea una nueva columna que identifica los arcos.

**JMP Versión agregada:** 14

```jsl


dt = Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );
Arc Finder(
	Group( :Lot, :Wafer ),
	X( :X_Die ),
	Y( :Y_Die ),
	Min Distance( 12 ), // minimum distance among 3 points to seed an arc
	Min Radius( 15 ), // minimum radius of the acceptable arc
	Max Radius( 2000 ), // maximum radius of acceptable arc
	Max Radius Error( 2 ), // how close a point needs to be added
	Min Arc Points( 5 ), // how many points to define an arc
	Number of Searches( 500 ), // how many random probes of data
	Max Number Arcs( 3 ) // number of arcs searched for
);
dt << Color or Mark by Column( :Arc Number );
dt << Graph Builder(
	Size( 1539, 921 ),
	Variables( X( :X_Die ), Y( :Y_Die ), Wrap( :Lot_Wafer Label ), Color( :Arc Number ) ),
	Elements( Points( X, Y, Legend( 6 ) ) )
);

```

### ArcCosH

**Sintaxis:** y = ArcCosH( x )

**Descripción:** Devuelve el arcocoseno hiperbólico de x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ArcCosH( 1 );

```

### ArcCosine

**Sintaxis:** y = ArcCosine( x )

**Descripción:** Devuelve el arcocoseno trigonométrico de x, donde x está en el intervalo [-1, 1] y el resultado en el intervalo [0, Pi()].

**JMP Versión agregada:** Antes de la versión 14

```jsl

ArcCosine( 0.5 );

```

### ArCos

**Sintaxis:** y = ArcCosine( x )

**Descripción:** Devuelve el arcocoseno trigonométrico de x, donde x está en el intervalo [-1, 1] y el resultado en el intervalo [0, Pi()].

**JMP Versión agregada:** Antes de la versión 14

```jsl

ArcCosine( 0.5 );

```

### ArcSine

**Sintaxis:** y = ArcSine( x )

**Descripción:** Devuelve el arcoseno trigonométrico de x, donde x está en el intervalo [-1, 1] y el resultado en el intervalo [-Pi()/2, Pi()/2].

**JMP Versión agregada:** Antes de la versión 14

```jsl

ArcSine( 0.5 );

```

### ArcSinH

**Sintaxis:** y = ArcSinH( x )

**Descripción:** Devuelve el arcoseno hiperbólico de x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ArcSinH( 1 );

```

### ArcTan

**Sintaxis:** y = ArcTangent( x1, &lt;x2=1&gt; )

**Descripción:** Devuelve el arcotangente trigonométrico de x1/x2, donde el resultado está en el intervalo [-Pi()/2, Pi()/2].

**JMP Versión agregada:** Antes de la versión 14

```jsl

4 * ArcTangent( 1 );

```

### ArcTangent

**Sintaxis:** y = ArcTangent( x1, &lt;x2=1&gt; )

**Descripción:** Devuelve el arcotangente trigonométrico de x1/x2, donde el resultado está en el intervalo [-Pi()/2, Pi()/2].

**JMP Versión agregada:** Antes de la versión 14

```jsl

4 * ArcTangent( 1 );

```

### ArcTanH

**Sintaxis:** y = ArcTanH( x )

**Descripción:** Devuelve el arcotangente hiperbólico de x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ArcTanH( 0.5 );

```

### Arg

**Sintaxis:** y = Arg( x, i )

**Descripción:** Devuelve el i-ésimo argumento de la expresión evaluada o Empty() si no hay ningún argumento i-ésimo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Arg( Expr( Sum( a, b, c ) ), 2 );

```

### Arg Expr

**Sintaxis:** y = Arg Expr( expr, i )

**Descripción:** Devuelve el i-ésimo argumento de la expresión o Empty() si no hay ningún argumento i-ésimo. Esta función está en desuso. Utilice Arg() en su lugar.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

// See Example 2 for the deprecated Arg Expr() equivalent
Arg( Expr( Sum( a, b, c ) ), 2 );

```

**Ejemplo 2**

```jsl

// Deprecated
Arg Expr( Sum( a, b, c ), 2 );

```

### ARIMA Forecast

**Sintaxis:** x = ARIMA Forecast( dtcol, length, model, estimates, from, to )

**Descripción:** Devuelve un vector de valores pronosticados para la columna dtcol dentro del rango definido por los argumentos from y to. El argumento length especifica la parte de la columna que debe usar la función. El argumento model coincide con los mensajes que se envían a la plataforma Serie de tiempo para ajustar un modelo. El argumento estimates coincide con el hijo del resultado de un mensaje Get Models de un modelo único. Por lo general, el valor from se halla entre 1 y el valor to ambos incluidos. No obstante, si from<=0 y from<=to, parte de los resultados son predicciones filtradas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
ARIMA Forecast(
	:Steel Shipments,
	96,
	ARIMA( 1, 0, 1 ),
	{AR Coefficients( {0.900397691783565} ), MA Coefficients( {0.483316746530245} ),
	Intercept( 6466.03264802329 )},
	1,
	2
);

```

### Arrhenius

**Sintaxis:** y = Arrhenius( tempC )

**Descripción:** Devuelve el componente no específico de la relación de Arrhenius que, a continuación, se multiplica por la energía de activación en la ecuación de Arrhenius. Devuelve 11604.5181215503 / (tempC + 273.15).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Arrhenius( 100 );

```

### Arrhenius Inv

**Sintaxis:** tempC = Arrhenius Inv( y )

**Descripción:** Devuelve la inversa de la función de Arrhenius, que es (11604.5181215503 / y) - 273.15.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Arrhenius Inv( 100 );

```

### Arrow

**Sintaxis:** Arrow( {x1, y1}, {x2, y2}, ... ); Arrow( xMatrix, yMatrix )

**Descripción:** Dibuja una línea con una flecha o una secuencia de ellas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 4 );
		Arrow( [10 30 90], [88 22 44] );
	)
);

```

### ArSin

**Sintaxis:** y = ArcSine( x )

**Descripción:** Devuelve el arcoseno trigonométrico de x, donde x está en el intervalo [-1, 1] y el resultado en el intervalo [-Pi()/2, Pi()/2].

**JMP Versión agregada:** Antes de la versión 14

```jsl

ArcSine( 0.5 );

```

### As Boolean

**Sintaxis:** b = As Boolean( x )

**Descripción:** Evalúa una expresión y devuelve un valor booleano.

**JMP Versión agregada:** 14

```jsl

x = 45;
b = As Boolean( x > 2 );
Show( b );

```

### As C Expr

**Sintaxis:** y = As C Expr( x )

**Descripción:** Devuelve una expresión equivalente en el lenguaje de programación C.

**JMP Versión agregada:** Antes de la versión 14

```jsl

As C Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As Column

**Sintaxis:** y = :name; y = dataTable:name; y = As Column( name ); y = As Column( dataTable, name )

**Descripción:** Accede a la columna especificada de la tabla de datos especificada o de la tabla de datos actual. Si la columna de la tabla no existe, se lanza un error.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt:height[1] + :height[2] + As Column( "height" )[3];

```

### As Constant

**Sintaxis:** y = As Constant( x )

**Descripción:** Evalúa una expresión para crear un valor constante que no cambie una vez calculado

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

New Table( "As Constant Demo Table 1",
	Add Rows( 10 ),
	New Column( "Non-Constant", Formula( Random Uniform() ) ),
	New Column( "Constant", Formula( As Constant( Random Uniform() ) ) )
);

```

**Ejemplo 2**

```jsl

New Table( "As Constant Demo Table 2",
	Add Rows( 1000 ),
	New Column( "What's on Your Desktop?",
		"character",
		Formula(
			As Constant( xFiles = Files In Directory( "$Desktop" ) );
			iR = Row();
			If( iR <= N Items( xFiles ),
				xFiles[iR],
				"---"
			);
		)
	)
);

```

**Ejemplo 3**

```jsl

For( i = 1, i <= 10, i++,
	x = 2;
	y = 100;
	z = As Constant( x + y );
	x *= i;
	y /= i;
	Show( i, x + y, z );
);

```

### As Date

**Sintaxis:** dt = As Date( datetime )

**Descripción:** Devuelve un valor de fecha y hora marcado internamente como fecha con propósitos de salida.

**JMP Versión agregada:** Antes de la versión 14

```jsl

As Date( Today() );

```

### As Global

**Sintaxis:** y = ::name; y = As Global( name )

**Descripción:** Accede a la variable global especificada o lanza un error si la variable no existe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

::ex = 23;
Local( {ex = 12}, Eval List( {ex, ::ex, As Global( "ex" )} ) );

```

### As JavaScript Expr

**Sintaxis:** y = As JavaScript Expr( x )

**Descripción:** Devuelve una expresión equivalente en el lenguaje de programación JavaScript.

**JMP Versión agregada:** Antes de la versión 14

```jsl

As JavaScript Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As JSON Expr

**Sintaxis:** y = As JSON Expr( x )

**Descripción:** Devuelve una representación JSON (notación de objetos JavaScript) de la expresión.

**JMP Versión agregada:** Antes de la versión 14

```jsl

As JSON Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As List

**Sintaxis:** y = As List( matrix )

**Descripción:** Devuelve una representación de una matriz en forma de lista. Las matrices con varias columnas se convierten en una lista de listas, una por cada fila, tal como espera el operador Matrix.

**JMP Versión agregada:** Antes de la versión 14

```jsl

As List( [11 22 33, 44 55 66] );

```

### As Name

**Sintaxis:** y = As Name( s )

**Descripción:** Convierte una cadena en un nombre o una lista de cadenas en una lista de nombres.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:(As Name( "height" ))[3];

```

### As Namespace

**Sintaxis:** asns = As Namespace( ns )

**Descripción:** Accede al espacio de nombres especificado o lanza un error si el espacio de nombres no existe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ns = New Namespace(
	"complex"
);
As Namespace( ns );

```

### As Python Expr

**Sintaxis:** y = As Python Expr( x )

**Descripción:** Devuelve una expresión equivalente en el lenguaje de programación Python.

**JMP Versión agregada:** Antes de la versión 14

```jsl

As Python Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As Root

**Sintaxis:** y = :::name; y = As Root( name )

**Descripción:** Accede a la variable con ámbito de raíz especificada o lanza un error si la variable no existe.

**JMP Versión agregada:** 15

```jsl

::: ex = 23;
Local( {ex = 12}, Eval List( {ex, ::: ex, As Global( "ex" )} ) );

```

### As Row State

**Sintaxis:** rs = As Row State( x )

**Descripción:** Convierte un número en un valor de estado de fila.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row(
	Row State() = As Row State(
		(:sex == "F") * 2 + (:sex == "M") * 4 + ((:sex == "F") * 2 + (:sex == "M") * 6) * 16
		 + (:age - 11) * 256
	)
);

```

### As SAS Expr

**Sintaxis:** y = As SAS Expr( x )

**Descripción:** Devuelve una versión de la expresión más adecuada para un paso de datos SAS. El código debe estar incluido en una llamada PROC DS2.

**JMP Versión agregada:** Antes de la versión 14

```jsl

As SAS Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As Scoped

**Sintaxis:** y = namespace:variable; y = As Scoped( namespace, variable )

**Descripción:** Accede a la variable de contexto especificada o lanza un error si la variable no existe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Here:z = 23.5;
As Scoped( Here, z );

```

### As SQL Expr

**Sintaxis:** y = As SQL Expr( x, &lt;style&gt; )

**Descripción:** Devuelve una cadena que contiene la expresión convertida a sintaxis SQL válida para su uso en una instrucción Select de SQL.

**JMP Versión agregada:** Antes de la versión 14

```jsl

As SQL Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ), "MySQL" );

```

### As Table

**Sintaxis:** dt = As Table( matrix, &lt;matrix2,...&gt; &lt; &lt;&lt;invisible/private&gt;, &lt; &lt;&lt;Column Names(name list) &gt; )

**Descripción:** Convierte una matriz en una tabla de datos. La opción invisible se puede usar para evitar mostrar la tabla.

**JMP Versión agregada:** Antes de la versión 14

```jsl

As Table( [1 2 3, 4 5 6] );

```

### Assign

**Sintaxis:** y = x; Assign( y, x )

**Descripción:** Asigna un valor a una variable o a una lista de variables.

**JMP Versión agregada:** Antes de la versión 14

```jsl

{ex1, ex2} = {Pi(), 1};
ex1 + ex1;

```

### Associative Array

**Sintaxis:** y = Associative Array( {{key1, value1}, ...} ); y = Associative Array( keys, values )

**Descripción:** Crea un arreglo asociativo, que también se conoce como diccionario o mapa hash. En la forma con dos argumentos, las claves y los valores pueden ser una lista, una matriz o una columna de una tabla de datos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex = Associative Array( {"red", "blue"}, {1, 2} );
ex["green"] = 3;
ex << get contents;

```

### ATan

**Sintaxis:** y = ArcTangent( x1, &lt;x2=1&gt; )

**Descripción:** Devuelve el arcotangente trigonométrico de x1/x2, donde el resultado está en el intervalo [-Pi()/2, Pi()/2].

**JMP Versión agregada:** Antes de la versión 14

```jsl

4 * ArcTangent( 1 );

```

### B Spline Coef

**Sintaxis:** coef = B Spline Coef( x, Internal Knot Grid, &lt;degree = 3&gt;, &lt;KnotEndPoints = min(x) || max(x)&gt; )

**Descripción:** Devuelve la matriz de los coeficientes de B-Spline. Internal Knot Grid es el número de puntos de nodo deseado basado en percentiles de x o un vector que especifica los puntos de nodo internos. El parámetro opcional degree especifica el grado de los B-Splines con un valor predeterminado de 3. El parámetro opcional KnotEndPoints toma una matriz 2x1 que contiene ubicaciones [inferior, superior] para los nodos en el límite. De forma predeterminada los puntos finales del nodo se establecen en el mínimo y el máximo de x. El segundo ejemplo demuestra cómo pueden utilizarse los coeficientes de B-Spline como la matriz de diseño en un modelo lineal.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

B Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );
B Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

**Ejemplo 2**

```jsl

xx = (0 :: 10)`;
yy = [0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0];
designMat = B Spline Coef( xx, 2 );
Linear Regression( yy, designMat, <<nointercept );

```

### Back Color

**Sintaxis:** Back Color( &lt;name|index|rgbList&gt; )

**Descripción:** Establece el color de fondo para el modo de borrado de la función Text().

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Back Color( "red" );
		Text( Erased, {50, 20}, "Hello" );
	)
);

```

### Beep

**Sintaxis:** Beep()

**Descripción:** Emite un sonido de alerta..

**JMP Versión agregada:** Antes de la versión 14

```jsl

Beep();

```

### Best Partition

**Sintaxis:** {c1, c2, g2} = Best Partition( xIndices, yIndices, &lt;&lt;Ordered, &lt;&lt;ContinuousY, &lt;&lt;ContinuousX )

**Descripción:** Determina la agrupación óptima (función experimental).

**JMP Versión agregada:** Antes de la versión 14

```jsl

/*Example for Continuous X and Continuous Y*/Best Partition(
	[1.2, 2.2, 3.5, 4.4, 5.6, 7.8],
	[11.2, 11.5, 11.8, 100.5, 100.7, 100.8],
	<<ContinuousX,
	<<ContinuousY
);

```

### Beta

**Sintaxis:** z = Beta( x, y )

**Descripción:** Devuelve la función Beta de x y y, definida como Gamma( x ) * Gamma( y ) / Gamma( x + y ).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Beta( 5, 4 );

```

### Beta Binomial Distribution

**Sintaxis:** cumprob = Beta Binomial Distribution( k, p, n, delta )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución beta binomial sea menor o igual que k.

**JMP Versión agregada:** Antes de la versión 14

```jsl

p = 0.5;
n = 25;
delta = 0;
New Window( "Example: BetaBinomial Distribution",
	y = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, n + 1 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= n, k++,
			H Line( k, k + 1, Beta Binomial Distribution( k, p, n, delta ) );
			V Line(
				k + 1,
				Beta Binomial Distribution( k, p, n, delta ),
				Beta Binomial Distribution( k + 1, p, n, delta )
			);
		);
		Text( {15, 0.1}, "n=", Round( n ), " p=", Round( p, 2 ) );
		Text( {15, 0.04}, "Dispersion=", Round( delta, 2 ) );
	),
	H List Box( Slider Box( 0.01, 0.99, p, y << reshow ), Text Box( " p" ) ),
	H List Box( Slider Box( -0.01, 0.99, delta, y << reshow ), Text Box( " Dispersion" ) )
);

```

### Beta Binomial Probability

**Sintaxis:** prob = Beta Binomial Probability( k, p, n, delta )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución beta binomial sea igual a k.

**JMP Versión agregada:** Antes de la versión 14

```jsl

n = 25;
p = 0.5;
delta = 0;
New Window( "Binomial and BetaBinomial Probabilities",
	clty = Graph Box(
		Y Scale( 0, 0.3 ),
		X Scale( -1, n + 1 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( x = 0, x <= n, x++,
			Pen Color( "red" );
			V Line( x, 0, Binomial Probability( p, n, x ) );
			Pen Color( "blue" );
			V Line( x + 0.35, 0, Beta Binomial Probability( x, p, n, delta ) );
		);
		Text( {1, 0.25}, "p=", Round( p, 8 ), " Dispersion=", Round( delta, 8 ) );
		Text( {0, 0.28}, "Red = Binomial, Blue = BetaBinomial" );
	),
	H List Box( Slider Box( 0.2, 0.8, p, clty << reshow ), Text Box( " p" ) ),
	H List Box(
		Slider Box( -0.05, 0.999, delta, clty << reshow ),
		Text Box( " Dispersion" )
	)
);

```

### Beta Binomial Quantile

**Sintaxis:** q = Beta Binomial Quantile( p, n, delta, cumprob )

**Descripción:** Devuelve el cuantil entero más pequeño para el cual la probabilidad acumulada de la distribución Beta binomial ( p, n, delta ) es mayor o igual que cumprob.

**JMP Versión agregada:** Antes de la versión 14

```jsl

qbinexp = 0.3;
qbinexn = 20;
qbinexq = 0.5;
delta = 0;
New Window( "Example: BetaBinomial Quantile",
	qbinexy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qbinexk = 0, qbinexk < Round( qbinexn ), qbinexk++,
			H Line(
				qbinexk,
				qbinexk + 1,
				Beta Binomial Distribution( qbinexk, qbinexp, Round( qbinexn ), delta )
			);
			V Line(
				qbinexk + 1,
				Beta Binomial Distribution( qbinexk, qbinexp, Round( qbinexn ), delta ),
				Beta Binomial Distribution( qbinexk + 1, qbinexp, Round( qbinexn ), delta )
			);
		);
		Pen Color( "blue" );
		V Line( Beta Binomial Quantile( qbinexp, Round( qbinexn ), delta, qbinexq ), 0, 1 );
		Text(
			{6, 0.17},
			"n=",
			Round( qbinexn ),
			" p=",
			Round( qbinexp, 2 ),
			" Disp.=",
			Round( Delta, 2 ),
			" q=",
			Round( qbinexq, 2 )
		);
		Text(
			{6, 0.1},
			"quantile=",
			Round( Beta Binomial Quantile( qbinexp, Round( qbinexn ), delta, qbinexq ) )
		);
	),
	H List Box( Slider Box( 0, 0.99, qbinexp, qbinexy << reshow ), Text Box( " p" ) ),
	H List Box( Slider Box( 0, 40, qbinexn, qbinexy << reshow ), Text Box( " n" ) ),
	H List Box(
		Slider Box( -0.01, 0.99, delta, qbinexy << reshow ),
		Text Box( " Dispersion" )
	),
	H List Box( Slider Box( 0, 1, qbinexq, qbinexy << reshow ), Text Box( " q" ) )
);

```

### Beta Density

**Sintaxis:** y = Beta Density( q, alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**Descripción:** Devuelve la densidad en q de una distribución Beta donde q está en el intervalo de theta a theta + sigma, alpha y beta son parámetros de forma y theta y sigma son parámetros de umbral y de rango, respectivamente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

alpha = 0.5;
beta = 0.5;
New Window( "Example: Beta Density",
	y = Graph Box(
		Y Scale( 0, 2.5 ),
		X Scale( 0, 1 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Beta Density( q, alpha, beta ), q );
		Text( {0.55, 2.2}, "\!U03B1=", Round( alpha, 2 ), " \!U03B2=", Round( beta, 2 ) );
	),
	H List Box( Slider Box( 0, 10, alpha, y << reshow ), Text Box( " \!U03B1" ) ),
	H List Box( Slider Box( 0, 10, beta, y << reshow ), Text Box( " \!U03B2" ) )
);

```

### Beta Distribution

**Sintaxis:** p = Beta Distribution( q, alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución beta sea menor que q, donde alpha y beta son parámetros de forma y theta y sigma son parámetros de umbral y de rango, respectivamente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

alpha = 0.5;
beta = 0.5;
New Window( "Example: Beta Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 1 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Beta Distribution( q, alpha, beta ), q );
		Text( {0.1, 0.9}, "\!U03B1=", Round( alpha, 2 ), " \!U03B2=", Round( beta, 2 ) );
	),
	H List Box( Slider Box( 0, 10, alpha, y << reshow ), Text Box( " \!U03B1" ) ),
	H List Box( Slider Box( 0, 10, beta, y << reshow ), Text Box( " \!U03B2" ) )
);

```

### Beta Quantile

**Sintaxis:** q = Beta Quantile( p, alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**Descripción:** Devuelve el cuantil de una distribución Beta, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p, donde alpha y beta son los parámetros de forma y theta y sigma son los parámetros de umbral y rango, respectivamente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Beta Quantile( 0.95, 2, 5 );

```

### Binomial Distribution

**Sintaxis:** cumprob = Binomial Distribution( p, n, k )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución binomial sea menor o igual que k.

**JMP Versión agregada:** Antes de la versión 14

```jsl

p = 0.5;
n = 30;
New Window( "Example: Binomial Distribution",
	y = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 31 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= n, k++,
			H Line( k, k + 1, Binomial Distribution( p, n, k ) );
			V Line(
				k + 1,
				Binomial Distribution( p, n, k ),
				Binomial Distribution( p, n, k + 1 )
			);
		);
		Text( {20, 0.1}, "n=", Round( n ), " p=", Round( p, 2 ) );
	),
	H List Box( Slider Box( 0, 1, p, y << reshow ), Text Box( " p" ) ),
	H List Box( Slider Box( 0, 30, n, y << reshow ), Text Box( " n" ) )
);

```

### Binomial Probability

**Sintaxis:** prob = Binomial Probability( p, n, k )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución binomial sea igual a k.

**JMP Versión agregada:** Antes de la versión 14

```jsl

cltp = 0.03;
cltn = 30;
New Window( "Example: Binomial Probability and Central Limit Theorem",
	clty = Graph Box(
		Y Scale( 0, 0.3 ),
		X Scale( -1, 60 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( cltk = 0, cltk <= cltn, cltk++,
			V Line( cltk, 0, Binomial Probability( cltp, cltn, cltk ) )
		);
		Text( {15, 0.09}, "n=", Round( cltn ), " p=", Round( cltp, 2 ) );
	),
	H List Box( Slider Box( 0.01, 0.99, cltp, clty << reshow ), Text Box( " p" ) ),
	H List Box(
		Slider Box( 0, 2000, cltn, clty << reshow ),
		Text Box( " n ( Drag me and see Central Limit Theorem )" )
	)
);

```

### Binomial Quantile

**Sintaxis:** q = Binomial Quantile( p, n, cumprob )

**Descripción:** Devuelve el cuantil entero más pequeño para el cual la probabilidad acumulada de la distribución Binomial(p, n) es mayor o igual que cumprob.

**JMP Versión agregada:** Antes de la versión 14

```jsl

qbinexp = 0.3;
qbinexn = 20;
qbinexq = 0.5;
New Window( "Example: Binomial Quantile",
	qbinexy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qbinexk = 0, qbinexk < Round( qbinexn ), qbinexk++,
			H Line(
				qbinexk,
				qbinexk + 1,
				Binomial Distribution( qbinexp, Round( qbinexn ), qbinexk )
			);
			V Line(
				qbinexk + 1,
				Binomial Distribution( qbinexp, Round( qbinexn ), qbinexk ),
				Binomial Distribution( qbinexp, Round( qbinexn ), qbinexk + 1 )
			);
		);
		Pen Color( "blue" );
		V Line( Binomial Quantile( qbinexp, Round( qbinexn ), qbinexq ), 0, 1.0 );
		Text(
			{6, 0.17},
			"n=",
			Round( qbinexn ),
			" p=",
			Round( qbinexp, 2 ),
			" q=",
			Round( qbinexq, 2 ),
			" quantile=",
			Round( Binomial Quantile( qbinexp, Round( qbinexn ), qbinexq ) )
		);
	),
	H List Box( Slider Box( 0, 1, qbinexp, qbinexy << reshow ), Text Box( " p" ) ),
	H List Box( Slider Box( 0, 40, qbinexn, qbinexy << reshow ), Text Box( " n" ) ),
	H List Box( Slider Box( 0, 1, qbinexq, qbinexy << reshow ), Text Box( " q" ) )
);

```

### Blend Colors

**Sintaxis:** color = Blend Colors( color1, color2, &lt;percent2&gt;, &lt;colorSpace&gt;, &lt;hueDirection&gt; )

**Descripción:** Combina dos colores con un porcentaje y un espacio de color configurables.

**JMP Versión agregada:** 18

**Ejemplo 1**

```jsl

Blend Colors( "black", "white", 0.25 );

```

**Ejemplo 2**

```jsl

Blend Colors( "red", "blue", "sRGB" );

```

**Ejemplo 3**

```jsl

Blend Colors( "red", "blue", "lRGB" );

```

**Ejemplo 4**

```jsl

Blend Colors( "red", "blue", 0.5, "LUV" );

```

**Ejemplo 5**

```jsl

Blend Colors( "red", "blue", 0.75, "HLS" );

```

**Ejemplo 6**

```jsl

c1 = "red";
c2 = "blue";
steps = 20;
New Window( "HLS Radial Color Blending",
	Graph(
		frameSize( 290, 110 ),
		X Scale( 0, 150 ),
		Y Scale( 0, 55 ),
		Suppress Axes,
		Text( {2, 47}, "Short" ),
		Text( {2, 32}, "Long" ),
		Text( {2, 17}, "Positive" ),
		Text( {2, 2}, "Negative" ),
		For( i = 0, i < steps, i += 1,
			x = i * 6 + 30;
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Short" ) );
			Rect( x, 45, x + 5, 55, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Long" ) );
			Rect( x, 30, x + 5, 40, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Positive" ) );
			Rect( x, 15, x + 5, 25, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Negative" ) );
			Rect( x, 0, x + 5, 10, 1 );
		)
	)
);

```

**Ejemplo 7**

```jsl

c1 = "blue";
c2 = "red";
steps = 20;
New Window( "HCLuv Radial Color Blending",
	Graph(
		frameSize( 290, 110 ),
		X Scale( 0, 150 ),
		Y Scale( 0, 55 ),
		Suppress Axes,
		Text( {2, 47}, "Short" ),
		Text( {2, 32}, "Long" ),
		Text( {2, 17}, "Positive" ),
		Text( {2, 2}, "Negative" ),
		For( i = 0, i < steps, i += 1,
			x = i * 6 + 30;
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Short" ) );
			Rect( x, 45, x + 5, 55, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Long" ) );
			Rect( x, 30, x + 5, 40, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Positive" ) );
			Rect( x, 15, x + 5, 25, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Negative" ) );
			Rect( x, 0, x + 5, 10, 1 );
		)
	)
);

```

### Blob MD5

**Sintaxis:** blobResult = Blob MD5( blob )

**Descripción:** Obtiene un BLOB de 16 bytes a partir de un BLOB origen (Binary Large OBject). El BLOB de 16 bytes es la suma de comprobación MD5 (o el hash) del BLOB de partida.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Hex(/* make it printable */ Blob MD5(/* get the hash */
		Load Text File(/* a file from the samples */ "$SAMPLE_IMPORT_DATA/animals.txt",
			BLOB/* the result is a BLOB, not a string */
		)
	)
) == "763D3C9F5F3E92951B3A3DC965084DAC" /* benchmark hash value */ /* the result is 1 if the benchmark matches */
;

```

### Blob Peek

**Sintaxis:** blobResult = Blob Peek( blob, offset, &lt;length&gt; )

**Descripción:** Obtiene un BLOB nuevo a partir de un subconjunto de bytes del BLOB dado. El argumento offset se cuenta a partir de cero, así que el primer byte tiene offset cero.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Blob Peek( Char To Blob( "Quick Bob, eat your lunch!" ), 6 /*Zero based!*/, 3 );

```

### Blob To Char

**Sintaxis:** s = Blob To Char( blob, &lt;encoding="utf-8"&gt; )

**Descripción:** Crea una cadena de caracteres a partir de un BLOB (Binary Large Object) usando la codificación especificada. Se admiten las codificaciones utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, shift_jis, euc-jp y ascii~hex.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Blob To Char( Hex To Blob( "436166C3A9" ) ) || Blob To Char(
	Hex To Blob( "436166C3A9" ),
	"ascii~hex"
);

```

### Blob To Matrix

**Sintaxis:** m = Blob To Matrix( blob, type, bytesEach, endian, &lt;nCols=1&gt; )

**Descripción:** Genera una matriz convirtiendo los bytes presentes en el blob en números. type puede ser "int", "uint" o "float". bytesEach puede ser 1, 2, 4 o 8. endian indica si el primer byte es el más significativo ("big") o el menos significativo ("little"); "native" indica el formato nativo de la máquina.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Blob To Matrix( Hex To Blob( "00010002FFFFFFFE" ), "int", 2, "big", 2 );

```

### Border Box

**Sintaxis:** y = Border Box( &lt;Left( pix )&gt;, &lt;Right( pix )&gt;, &lt;Top( pix )&gt;, &lt;Bottom( pix )&gt;, &lt;Sides( 0 )&gt;, displayBoxArg )

**Descripción:** Devuelve un cuadro de visualización para añadir espacio alrededor del cuadro de visualización indicado en el argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Box Cox Inverse Transform

**Sintaxis:** x = Box Cox Inverse Transform( y, lambda )

**Descripción:** Devuelve la transformación Box-Cox inversa del argumento.

**JMP Versión agregada:** 19

```jsl

Box Cox Inverse Transform( 3, 2 );

```

### Box Cox Transform

**Sintaxis:** y = Box Cox Transform( x, lambda )

**Descripción:** Devuelve la transformación Box-Cox del argumento.

**JMP Versión agregada:** 19

```jsl

Box Cox Transform( 3, 2 );

```

### Box Plot Seg

**Sintaxis:** b = Box Plot Seg(&lt;data&gt;, &lt;frequency&gt;, &lt;weight&gt;, &lt;vertical=0|1&gt;)

**Descripción:** Devuelve un segmento de visualización que representa un diagrama de caja basado en los valores x e y indicados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 5 ), Box Plot Seg( [1, 2, 3, 4] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));

```

### Break

**Sintaxis:** Break()

**Descripción:** Provoca una interrupción en el flujo de control dentro de un bucle For o While.

**JMP Versión agregada:** Antes de la versión 14

```jsl

For( i = 1, i <= 10, i++,
	If( i == 5, Break() );
	Print( "i=" || Char( i ) );
);

```

### Build Information

**Sintaxis:** y = Build Information()

**Descripción:** Devuelve la fecha y la hora de la compilación, la versión liberación o depuración y el nombre del producto.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Build Information();

```

### Busy Light

**Sintaxis:** y = Busy Light( &lt; &lt;&lt;Automatic(0|1)&gt;, &lt;Size(x, y)&gt;, &lt; &lt;&lt;Disable&gt; )

**Descripción:** Crea una imagen rotatoria que indica un proceso en curso.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example", Busy Light( <<automatic ) );

```

### Button Box

**Sintaxis:** y = Button Box( title, script )

**Descripción:** Devuelve un cuadro de visualización para mostrar un botón con título. El argumento script se ejecuta al hacer clic en el botón.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example", Button Box( "Press Me", Print( "Pressed." ) ) );

```

### Calendar Box

**Sintaxis:** y = Calendar Box()

**Descripción:** Devuelve un cuadro de visualización que contiene un control de calendario. El calendario admite la selección única de una fecha y, de forma opcional, de una hora.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Calendar Box Example", Calendar Box() );

```

### Caption

**Sintaxis:** y = Caption( &lt;{h, v}&gt;, text | remove, &lt;Delayed( seconds )&gt;, &lt;Font(font)&gt;, &lt;Font Size(size)&gt;, &lt;Text Color(color)&gt;, &lt;Back Color(color)&gt;, &lt;Spoken(bool)&gt; )

**Descripción:** Muestra una ventana de encabezado en la ubicación especificada por {h, v}, la cual contiene el texto especificado por el argumento text. El argumento Delayed( seconds ) establece el tiempo de espera en segundos antes de que se muestre cada uno de los encabezados.

**JMP Versión agregada:** Antes de la versión 14

**Quitar título**

```jsl

Caption( "explanation" );
Wait( 2 );
Caption( remove );

```

**Título con formato**

```jsl

Caption(
	{100, 200},
	"explanation",
	Font( "Arial Black" ),
	Font Size( 16 ),
	Text Color( "blue" ),
	Back Color( "yellow" ),
	Spoken( 1 )
);

```

### CAS Connect

**Sintaxis:** CAS Connect(&lt;URL(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;, &lt;Prompt(Never | Always | IfNeeded)&gt;, &lt;Session("session id")&gt;, &lt;Proxy Server("http://my_proxy:80")&gt;, &lt;Proxy User("proxy_username")&gt;, &lt;Bypass Proxy("http://localhost:80")&gt;, &lt;Certificates(...)&gt;, &lt;Verify Certificates(1 | 0)&gt;, &lt;No Verify Certificates(1 | 0)&gt;, &lt;Timeout(seconds)&gt;, &lt;Authorization Method("Basic" | "Bearer")&gt;)

**Descripción:** Se conecta a un nuevo servidor CAS. La conexión CAS utiliza los argumentos URL, User name y Password, y opcionalmente Prompt y Session. Prompt puede ser IfNeeded, Always o Never. URL, User name y Password se pueden omitir si el argumento Prompt es IfNeeded o Always. El valor predeterminado de Prompt es Never. Session se puede utilizar para volver a conectarse a una sesión CAS existente. La sesión debe ser válida para la URL, el nombre de usuario y la contraseña utilizados en la conexión. El argumento opcional Certificates es útil para proporcionar certificados de confianza para conexiones https a CAS. El argumento opcional Verify Certificates o No Verify Certificates es útil para aceptar temporalmente los certificados autofirmados. El argumento opcional Proxy Server es útil para proporcionar un host proxy en un entorno proxy. El argumento opcional Proxy User es útil para proporcionar información de usuario y contraseña para un entorno proxy. El argumento opcional Bypass Proxy se utiliza para omitir el proxy para determinados hosts. El argumento opcional Timeout establece un valor de tiempo de espera para las operaciones de la conexión CAS. El argumento opcional Authorization Method especifica cómo se conecta JMP a CAS y es independiente de la implementación de CAS.

**JMP Versión agregada:** 15

```jsl


url = "http://myCasURL";
cas = CAS Connect(
	URL( url ),
	Username( "myCas_user" ),
	Prompt( Always ),
	Certificates( "c:\mycerts.crt" )
);

```

### CAS Delete Table

**Sintaxis:** CAS Delete Table(tablename, &lt;remove&gt;)

**Descripción:** Esta acción elimina la tabla del sistema de archivos. La tabla en memoria no se ve afectada. Si especifica Silenciar, se suprimirán los errores de una tabla no existente. Si especifica remACs, se eliminarán los controles de acceso para una tabla. Si especifica Quitar, también se eliminará la tabla de la memoria.

**JMP Versión agregada:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Delete Table( "Casuser", "Big Class" );

```

### CAS Disconnect

**Sintaxis:** CAS Disconnect()

**Descripción:** Se desconecta de un servidor CAS y, opcionalmente, finaliza la sesión. De forma predeterminada, la sesión finaliza al desconectarse.

**JMP Versión agregada:** 15

```jsl


url = "http://myCasURL";
cas = CAS Connect( URL( url ), Username( "myCas_user" ), Prompt( Always ) );
CAS Disconnect();

```

### CAS Export Data

**Sintaxis:** y = CAS Export Data(jmp_data_table, cas_libref, cas_dataset, &lt;named_arguments&gt;)

**Descripción:** Exporta una tabla a un servidor CAS. jmp_data_table es la tabla de datos de JMP que se exporta, mientras que cas_libref y cas_dataset representan las ubicaciones de destino en el servidor CAS. El argumento con nombre opcional es Save(1|0). Cuando se exporta una tabla a CAS, no se guarda en el sistema de archivos CAS a menos que se utilice la opción Guardar. La mayoría de las acciones CAS tienen lugar en la memoria.

**JMP Versión agregada:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "CASUSER", "Big Class" );

```

### CAS Get Data Sets

**Sintaxis:** y = CAS Get Data Sets(&lt;"caslib"&gt;)

**Descripción:** Obtiene una lista de conjuntos de datos CAS disponibles. Estos conjuntos de datos se encuentran en el sistema de archivos CAS. El argumento opcional limita la lista de conjuntos de datos a la librería CAS. Si no se utiliza ningún argumento, la lista de conjuntos de datos contiene el nombre del conjunto de datos completo (library.dataset). Si se utiliza el argumento, la lista de conjuntos de datos es una lista de nombres de conjuntos de datos.

**JMP Versión agregada:** 15

```jsl


cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class", Save( 1 ) );
datasets = CAS Get Data Sets( "casuser" );
Show( datasets );
cas << Delete Table( "Casuser", "Big Class" );
datasets = CAS Get Data Sets( "casuser" );
Show( datasets );

```

### CAS Get Libraries

**Sintaxis:** y = CAS Get Libraries()

**Descripción:** Obtiene una lista de librerías CAS disponibles.

**JMP Versión agregada:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
libraries = CAS Get Libraries();
Show( libraries );

```

### CAS Import Data

**Sintaxis:** dt = CAS Import Data(libref, dataset, &lt;named_arguments&gt;)

**Descripción:** Importa una tabla de un servidor CAS. Los argumentos opcionales con nombre son Invisible(0|1), Private(0|1) y UseLabelsForVarNames(0|1).

**JMP Versión agregada:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Import Data( "Casuser.Big Class" );

```

### CAS Is Connected

**Sintaxis:** CAS Is Connected

**Descripción:** Devuelve 1 si hay una conexión a un servidor CAS activa y 0 en caso contrario.

**JMP Versión agregada:** 15

```jsl


connected = CAS Is Connected();
Show( connected );

```

### CAS Remove Table

**Sintaxis:** CAS Remove Table(tablename, &lt;delete&gt;)

**Descripción:** Esta acción anula la tabla en memoria. Esto no afecta al archivo que se creó con la acción de guardar. Si se especifica la eliminación, también se elimina la tabla del sistema de archivos.

**JMP Versión agregada:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Remove Table( "Casuser", "Big Class" );

```

### CAS Table To Data Table

**Sintaxis:** dt = CAS Table To Data Table(jsonstring, &lt;Invisible(1|0) | Private(1|0) | Use Labels for Var Names(1|0)&gt;)

**Descripción:** Convierte texto JSON de una tabla CAS de SAS en una tabla de datos de JMP.

**JMP Versión agregada:** 15

```jsl


json =
"\[
{
  "_ctb": true,
  "label": "Selected Rows from Table BIG CLASS",
  "name": "Fetch",
  "title": "Selected Rows from Table BIG CLASS",
  "schema": [
    {
      "format": "",
      "label": "",
      "name": "_Index_",
      "type": "int",
      "width": 4
    },
    {
      "format": "",
      "label": "",
      "name": "name",
      "type": "string",
      "width": 9
    },
    {
      "format": "",
      "label": "",
      "name": "age",
      "type": "double",
      "width": 8
    },
    {
      "format": "",
      "label": "",
      "name": "sex",
      "type": "string",
      "width": 1
    },
    {
      "format": "",
      "label": "",
      "name": "height",
      "type": "double",
      "width": 8
    },
    {
      "format": "",
      "label": "",
      "name": "weight",
      "type": "double",
      "width": 8
    }
  ],
  "rows": [
    [
      1,
      "KATIE",
      12,
      "F",
      59,
      95
    ],
    [
      2,
      "LOUISE",
      12,
      "F",
      61,
      123
    ],
    [
      3,
      "JANE",
      12,
      "F",
      55,
      74
    ],
    [
      4,
      "JACLYN",
      12,
      "F",
      66,
      145
    ],
    [
      5,
      "LILLIE",
      12,
      "F",
      52,
      64
    ],
    [
      6,
      "TIM",
      12,
      "M",
      60,
      84
    ],
    [
      7,
      "JAMES",
      12,
      "M",
      61,
      128
    ],
    [
      8,
      "ROBERT",
      12,
      "M",
      51,
      79
    ],
    [
      9,
      "BARBARA",
      13,
      "F",
      60,
      112
    ],
    [
      10,
      "ALICE",
      13,
      "F",
      61,
      107
    ],
    [
      11,
      "SUSAN",
      13,
      "F",
      56,
      67
    ],
    [
      12,
      "JOHN",
      13,
      "M",
      65,
      98
    ],
    [
      13,
      "JOE",
      13,
      "M",
      63,
      105
    ],
    [
      14,
      "MICHAEL",
      13,
      "M",
      58,
      95
    ],
    [
      15,
      "DAVID",
      13,
      "M",
      59,
      79
    ],
    [
      16,
      "JUDY",
      14,
      "F",
      61,
      81
    ],
    [
      17,
      "ELIZABETH",
      14,
      "F",
      62,
      91
    ],
    [
      18,
      "LESLIE",
      14,
      "F",
      65,
      142
    ],
    [
      19,
      "CAROL",
      14,
      "F",
      63,
      84
    ],
    [
      20,
      "PATTY",
      14,
      "F",
      62,
      85
    ]
  ]
}
]\";
dt = CAS Table To Data Table( json );

```

### CAS Terminate Sessions

**Sintaxis:** CAS Terminate Sessions

**Descripción:** Finaliza todas las sesiones CAS que pertenezcan al usuario actual.

**JMP Versión agregada:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Terminate Sessions();

```

### Cauchy Density

**Sintaxis:** y = Cauchy Density( q, &lt;center&gt;, &lt;scale&gt; )

**Descripción:** Devuelve la densidad en q de una distribución de Cauchy con centro mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example: Cauchy Density",
	y = Graph Box(
		Y Scale( 0, .4 ),
		X Scale( -6, 6 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Cauchy Density( q ), q );
	)
);

```

### Cauchy Distribution

**Sintaxis:** p = Cauchy Distribution( q, &lt;center&gt;, &lt;scale&gt; )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución de Cauchy es inferior a q.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example: Cauchy Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -6, 6 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Cauchy Distribution( q ), q );
	)
);

```

### Cauchy Quantile

**Sintaxis:** q = Cauchy Quantile( p, &lt;center&gt;, &lt;scale&gt; )

**Descripción:** Devuelve el cuantil de una distribución de Cauchy, el valor de la cual tiene una probabilidad p de que un valor aleatorio sea inferior.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example: Cauchy Quantile",
	Graph Box(
		Y Scale( -6, 6 ),
		X Scale( 0, 1 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Cauchy Quantile( p ), p );
	)
);

```

### CDF

**Sintaxis:** {QuantVec, CumProbVec} = CDF( Y )

**Descripción:** Devuelve los valores de la función de distribución empírica de probabilidad acumulada correspondientes al vector o la lista Y. La probabilidad acumulada es la proporción de valores de datos menores o iguales a la entrada correspondiente en el vector QuantVec.

**JMP Versión agregada:** Antes de la versión 14

```jsl

/* Generate random values, Normal(0,1) */
Y = J( 150, 1, Random Normal() );

/* CDF function */
{Quant, CumProb} = CDF( Y ); 

/* Draw empirical and theorical CDF */
New Window( "Empirical CDF",
	Graph Box(
		X Scale( -3, 3 ),
		Y Scale( 0, 1 ),
		Pen Color( "red" );
		For( i = 2, i <= N Row( Quant ), i++,
			H Line( Quant[i - 1], Quant[i], CumProb[i] );
			V Line( Quant[i - 1], CumProb[i - 1], CumProb[i] );
		);
		i = N Row( Quant );
		V Line( Quant[i], CumProb[i], 1 );
		Pen Color( "blue" );
		Y Function( Normal Distribution( q ), q );
	)
);

```

### Ceiling

**Sintaxis:** y = Ceiling( x )

**Descripción:** xDevuelve el entero más pequeño que sea mayor o igual que x. El argumento puede ser un número, una matriz o una lista de números.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Ceiling( 1.2 );

```

### Char

**Sintaxis:** s = Char( x, &lt;w&gt;, &lt;d&gt;, &lt; &lt;&lt;Use Locale( Boolean ) &gt;, &lt; &lt;&lt;Full Precision( Boolean ) &gt; )

**Descripción:** Devuelve una representación de x como cadena de caracteres, utilizando el ancho máximo w y decimales d si el argumento x es numérico. <<FullPrecision escribe valores numéricos utilizando toda la precisión disponible.

**JMP Versión agregada:** Antes de la versión 14

**Precisión completa**

```jsl

Show( Char( 88.54 ), Char( 88.54, <<Full Precision( 1 ) ) );

```

**Simple**

```jsl

Char( Pi(), 10, 4 );

```

**Usar configuración local**

```jsl

Char( 2.1, <<Use Locale( 1 ) );

```

### Char To Blob

**Sintaxis:** blob = Char To Blob( string, &lt;encoding="utf-8"&gt; )

**Descripción:** Crea un BLOB (Binary Large Object) a partir de una cadena de caracteres usando la codificación especificada. Se admiten las codificaciones utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, shift_jis, euc-jp y ascii~hex.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Char To Blob( "Café", "utf-16be" );

```

### Char To Hex

**Sintaxis:** h = Char To Hex( value, &lt;"integer"&gt;|&lt;encoding="utf-8"&gt; )

**Descripción:** Devuelve el texto hexadecimal correspondiente al valor y la codificación indicados. Puede tratarse de un número, una cadena de caracteres o un blob. Si el valor es un número, se utiliza la codificación IEEE 754 de 64 bits a menos que se indique el argumento opcional "integer". Se admiten las codificaciones utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis y euc-jp.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" );

```

### Char To Path

**Sintaxis:** m = Char To Path( pathText )

**Descripción:** Convierte la especificación de una ruta de acceso de forma alfanumérica a matricial.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show( Char To Path( "M10 10 L50 10 L30 50 Z M20 20 L40 20 L30 40 Z" ) );

```

### Check Box

**Sintaxis:** y = Check Box( {item, ...}, &lt;script&gt; )

**Descripción:** Devuelve un cuadro de visualización para mostrar una o más casillas de selección.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example", cb = Check Box( {"Good"}, Show( cb << Get() ) ) );

```

### Check MATLAB Dependencies

**Sintaxis:** Check MATLAB Dependencies()

**Descripción:** Comprueba si las dependencias de MATLAB están instaladas.

**JMP Versión agregada:** Antes de la versión 14

```jsl


If( !Check MATLAB Dependencies(),
	Install MATLAB Dependencies();
	Print( "Dependencies are installed" );
,
	Print( "Dependencies are installed" )
);

```

### ChiSquare Density

**Sintaxis:** p = ChiSquare Density( q, df, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve la densidad en q de una distribución ji cuadrado con df grados de libertad.

**JMP Versión agregada:** Antes de la versión 14

```jsl

cdedf = 2;
New Window( "Example: ChiSquare Density",
	cdey = Graph Box(
		Y Scale( 0, 0.4 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Density( cdeq, cdedf ), cdeq );
		Text( {7, 0.35}, "df=", Round( cdedf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, cdedf, cdey << reshow ) )
);

```

### ChiSquare Distribution

**Sintaxis:** p = ChiSquare Distribution( q, df, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución ji cuadrado sea menor que q.

**JMP Versión agregada:** Antes de la versión 14

```jsl

cdidf = 2;
New Window( "Example: ChiSquare Distribution",
	cdiy = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Distribution( cdiq, cdidf ), cdiq );
		Text( {1, 0.9}, "df=", Round( cdidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, cdidf, cdiy << reshow ) )
);

```

### ChiSquare Log CDistribution

**Sintaxis:** y = ChiSquare Log CDistribution( x, df, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve el logaritmo de 1- la distribución ji cuadrado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

clcdidf = 2;
New Window( "Example: ChiSquare Log CDistribution",
	clcdiy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Log CDistribution( clcdiq, clcdidf ), clcdiq );
		Text( {1, -0.9}, "df=", Round( clcdidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 1, 10, clcdidf, clcdiy << reshow ) )
);

```

### ChiSquare Log Density

**Sintaxis:** y = ChiSquare Log Density( x, df, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve el logaritmo de la densidad de probabilidad ji cuadrado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

cldedf = 1;
New Window( "Example: ChiSquare Log Density",
	cldey = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Log Density( cldeq, cldedf ), cldeq );
		Text( {7, -0.35}, "df=", Round( cldedf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, cldedf, cldey << reshow ) )
);

```

### ChiSquare Log Distribution

**Sintaxis:** y = ChiSquare Log Distribution( x, df, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve el logaritmo de la distribución ji cuadrado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

cldidf = 2;
New Window( "Example: ChiSquare Log Distribution",
	cldiy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Log Distribution( cldiq, cldidf ), cldiq );
		Text( {1, -0.9}, "df=", Round( cldidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 1, 10, cldidf, cldiy << reshow ) )
);

```

### ChiSquare Noncentrality

**Sintaxis:** nc = ChiSquare Noncentrality( x, df, prob )

**Descripción:** Devuelve el parámetro de no centralidad nc tal que prob es igual a la probabilidad de que una variable aleatoria con una distribución ji cuadrado con df grados de libertad sea menor que x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example: ChiSquare Noncentrality",
	chincgr = Graph Box(
		Y Scale( 0.01, 0.99 ),
		X Scale( 0.01, 0.99 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( ChiSquare Noncentrality( 3, 2, ChiSquare Distribution( 3, 2, q ) ), q );
	)
);
ChiSquare Noncentrality( 3, 2, ChiSquare Distribution( 3, 2, 0.5 ) );

```

### ChiSquare Quantile

**Sintaxis:** q = ChiSquare Quantile( p, df, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve el cuantil de una distribución ji cuadrado, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ChiSquare Quantile( 0.15, 5 );

```

### Chol Update

**Sintaxis:** L2 = Chol Update( L, V, C )

**Descripción:** Devuelve una raíz de Cholesky actualizada de A+V*C*V&apos;, donde C es una matriz simétrica m por m y V es una matriz n por m. El argumento L debe ser la raíz de Cholesky de una matriz n por n A.

**JMP Versión agregada:** Antes de la versión 14

```jsl

/* The inner product of a design matrix */
exS = [16 1 0 11 -1 12,
1 11 -1 1 -1 1,
0 -1 12 -1 1 0,
11 1 -1 11 -1 9,
-1 -1 1 -1 9 -1,
12 1 0 9 -1 12];
/* Conduct the Cholesky decomposition */
exAchol = Cholesky( exS );

/* Two column vectors to be applied to change the design matrix */
exV = [1 1, 0 0, 0 1, 0 0, 0 0, 0 1];

/* The first column vector is added to one of the rows in the design matrix */
/* The second column vector is subtracted from one of the rows in the design matrix */
exC = [1 0, 0 -1];

/* Update the Cholesky decomposition manually */
exAnew = exS + exV * exC * exV`;
exAcholnew = Cholesky( exAnew );

/* Update the Cholesky decomposition more efficiently */
exAcholnew_test = Chol Update( exAchol, exV, exC );

/* Results are the same */
Show( exAcholnew_test );
Show( exAcholnew );

```

### Cholesky

**Sintaxis:** L = Cholesky( A )

**Descripción:** Devuelve la descomposición de Cholesky de una matriz semidefinida positiva. L es una matriz triangular inferior tal que L*L` = A.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Cholesky( [1 2, 2 13] );

```

### Choose

**Sintaxis:** y = Choose( i, expr1, expr2, ..., exprElse )

**Descripción:** Evalúa y devuelve el i-ésimo argumento expr, o el argumento exprElse si no hay ningún argumento i-ésimo expr.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Choose( Random Integer( 1, 5 ), "red", "blue", "other" );

```

### Choose Closest

**Sintaxis:** Choose Closest(source string, {canonical strings...}, &lt;Ignore Case(ignore=1|0)&gt;, &lt;Ignore Nonprintable(ignore=1|0)&gt;, &lt;Ignore Whitespace(ignore=1|0)&gt;, &lt;Max Edit Count(count)&gt;, &lt;Max Edit Ratio([0..1])&gt;, &lt;Min String Length(&lt;count=3&gt;)&gt;, &lt;Replace Unmatched(replace=0|1)&gt;, &lt;Unmatched Value(&lt;value=""&gt;)&gt;)

**Descripción:** Escoge la cadena de caracteres más cercana dentro de las reglas dadas y la devuelve. 

De forma predeterminada, se ignora si los caracteres están en mayúsculas o minúsculas; utilice Ignorar mayúsculas/minúsculas para especificarlo.

De forma predeterminada, se ignoran los caracteres no imprimibles; utilice Ignorar no imprimibles para especificarlo.

De forma predeterminada, se ignoran los espacios en blanco; utilice Ignorar espacios en blanco para especificarlo.

De forma predeterminada, no se permiten los cambios de caracteres para buscar una coincidencia.

	Utilice Conteo de ediciones máximas para controlar cuántas ediciones pueden realizarse.

	Utilice Razón de ediciones máximas para controlar el porcentaje de cambio permitido (en términos de caracteres de la cadena original).

	Ambos ajustes se aplican si se especifican.

De forma predeterminada, no se harán coincidir las cadenas inferiores a tres caracteres; utilice Longitud de cadena mínima para especificar una longitud distinta.

Cadenas sin coincidencia

	De forma predeterminada, si no se encuentra coincidencia para la cadena canónica dentro de las reglas dadas, se devuelve la cadena de origen.

	Utilice Reemplazar sin coincidencia para especificar si se devolverá la cadena de origen.

	Utilice Sin coincidencia para especificar el valor que se devolverá.

**JMP Versión agregada:** 15

**Escoge entre las cadenas de caracteres, sin ediciones**

```jsl

Choose Closest( "MARTHA_", {"Martha", "MARY"} );

```

**Mantiene la puntuación**

```jsl

Choose Closest( "MARTHA_", {"MARTHA"}, Ignore Punctuation( 0 ) );

```

**Permite ediciones**

```jsl

Choose Closest( "MARTA", {"MARTHA"}, Max Edit Count( 2 ) );

```

**Sin coincidencia**

```jsl

Choose Closest( "MARTHA", {"Martha"}, Ignore Case( 0 ), Unmatched() );

```

### Circle

**Sintaxis:** Circle( {x, y}, radius|PixelRadius( px ), ..., &lt;"FILL"&gt; )

**Descripción:** Dibuja un círculo centrado en el punto {x, y}. El radio se puede especificar en forma de entero basado en el eje vertical o como número de píxeles. Si el radio se indica como número de píxeles, el tamaño del círculo no varía al cambiar el eje vertical. Es posible repetir los argumentos en cualquier orden para dibujar múltiples círculos. Si se utiliza el argumento "FILL", se debe colocar en última posición. Se utiliza para rellenar los círculos con un color de relleno en lugar de trazarlos con el color de la pluma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Circle( {20, 20}, 4, 7, 10/* no fill for concentric circles */ );
		Fill Color( "blue" );
		Transparency( .25 );/* transparent fill for concentric circles */
		Circle( {60, 20}, 4, 7, 10, "FILL" );
		Fill Color( "green" );
		Transparency( 1 );/* solid fill */Circle(
			PixelRadius( 18 ),
			{40, 20},
			{40, 50},
			{40, 80},
			"FILL"
		);
	)
);

```

### Class Exists

**Sintaxis:** nsexists = Class Exists( class name )

**Descripción:** Devuelve 1 si la clase especifica por el argumento name ya existe. De lo contrario, devuelve 0.

**JMP Versión agregada:** Antes de la versión 14

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
clexists = Class Exists( cl );
Show( clexists );
cl << Delete;
Delete Classes( "complex" );

```

### Clear Global Window Handler

**Sintaxis:** Clear Global Window Handler()

**Descripción:** Borra un controlador de ventanas establecido previamente por Establecer controlador de ventanas global.

**JMP Versión agregada:** 17

```jsl

Set Global Window Handler(
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);
New Window( "My Window" );
Clear Global Window Handler();

```

### Clear Globals

**Sintaxis:** Clear Globals( &lt; varname, ... &gt; )

**Descripción:** Borra los valores de todos los símbolos globales definidos actualmente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Clear Globals();

```

### Clear Log

**Sintaxis:** Clear Log()

**Descripción:** Vacía el registro.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Clear Log();

```

### Clear Symbols

**Sintaxis:** Clear Symbols( &lt; varname, ... &gt; )

**Descripción:** Borra los valores de todos los símbolos definidos actualmente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Clear Symbols();

```

### Close

**Sintaxis:** Close( &lt;dataTableRef|name&gt;, &lt;NoSave|Save( "path" )&gt; )

**Descripción:** Cierra la tabla de datos a la que hace referencia el primer argumento, que es la tabla de datos actual del proyecto actual de forma predeterminada (o de ningún proyecto si no se ejecuta el script en un proyecto).



Para especificar un proyecto, utilice el argumento opcional Project() con un título, índice, cuadro de visualización u objeto de ventana. Utilice Project(0) para no especificar ningún proyecto al ejecutar el script en un proyecto.



El segundo argumento se utiliza para guardar la tabla de datos. Utilice una extensión de archivo adecuada en la ruta para guardar la tabla de datos con un formato distinto a JMP. Si se especifica NoSave, se omite el mensaje que pide que se guarden o se descarten los cambios.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 3 );
Close( exdt, NoSave );

```

### Close All

**Sintaxis:** Close All( &lt;Project(title|index|box|window)&gt;, Data Tables | Reports | Journals, &lt;invisible | private&gt;, &lt;NoSave|Save&gt; )

**Descripción:** Busca todos los recursos abiertos de un tipo específico: tablas de datos, diarios o informes.



Solo se incluirán las ventanas del proyecto actual (o de ningún proyecto si no se ejecuta el script en un proyecto). Para especificar un proyecto, utilice el argumento opcional Project() con un título, índice, cuadro de visualización u objeto de ventana. Utilice Project(0) para no especificar ningún proyecto cuando se ejecute el script en un proyecto.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );
Wait( 3 );
Close All( Data Tables, NoSave );

```

### Close Database Connection

**Sintaxis:** Close Database Connection(databaseConnectionHandle)

**Descripción:** Cierra una conexión a base de datos procedente de la opción Crear conexión a base de datos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Close Database Connection( databaseConnectionHandle );

```

### Close Log

**Sintaxis:** Close Log()

**Descripción:** Cierra la ventana Registro

**JMP Versión agregada:** Antes de la versión 14

```jsl

Close Log();
Show( Is Log Open() );

```

### Col At

**Sintaxis:** y = Col At( col, index, &lt;byVar, ...&gt;, &lt; &lt;&lt;relative(bool)&gt;, &lt; &lt;&lt;skip missing(expr)&gt; )

**Descripción:** Devuelve el valor de col en la posición de fila index dentro de su grupo byVar. Las filas en las que se evalúa la expresión skip missing con respecto a un valor faltante no se incluyen en la indexación.

**JMP Versión agregada:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Lag Height by Sex", Formula( Col At( :height, -1, :sex, <<relative( 1 ) ) ) );
New Column( "Relative to First Height", Formula( :height / Col At( :height, 1, :sex ) ) );
New Column( "Relative to Last Height", Formula( :height / Col At( :height, -1, :sex ) ) );

```

### Col Box

**Sintaxis:** y = Col Box( title, boxes )

**Descripción:** Devuelve un cuadro de columna constituido por los cuadros de visualización indicados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = New Window( "Example",
	exx = 1;
	exy = 4;
	exz = 8;
	Table Box(
		String Col Box( "strings", {"x", "y", "z"} ),
		Col Box(
			"boxes",
			Slider Box( 0, 10, exx, Show( exx ) ),
			Slider Box( 0, 10, exy, Show( exy ) ),
			Slider Box( 0, 10, exz, Show( exz ) )
		)
	);
);

```

### Col Cumulative Sum

**Sintaxis:** y = Col Cumulative Sum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descripción:** Devuelve la suma acumulativa para la fila actual. Para las variables Por no es necesaria una ordenación previa.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 40;
Col Cumulative Sum( :height, :sex );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Cumulative Sum for each Sex",
	Formula( Col Cumulative Sum( :height, :sex ) )
);
dt << New Column( "Col Cumulative Sum for each Sex grouped by Excluded",
	Formula( Col Cumulative Sum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Interpolate

**Sintaxis:** y = Col Interpolate( v, xCol, yCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;method(linear|nearest|previous|next)&gt;, &lt; &lt;&lt;extrapolate(bool)&gt; )

**Descripción:** Devuelve un valor interpolado dentro de yCol que corresponde a la posición de v con xCol. Los valores que estén fuera del rango de xCol serán faltantes a menos que extrapolate esté activado, en cuyo caso se devolverá el valor de yCol más cercano.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/GNP.jmp" );
dt << New Column( "date30", Formula( :date + 30 ) );
dt << New Column( "gnp30",
	Formula( Col Interpolate( :date30, :date, :"gross national product ($billions)"n ) )
);

```

### Col List Box

**Sintaxis:** y = Col List Box( &lt;Data Table( name )&gt;, &lt;all&gt;|&lt;character|numeric&gt;, &lt;width( pix )&gt;, &lt;grouped&gt;, &lt;maxSelected( n )&gt;, &lt;nlines( n )&gt;, &lt;MaxItems( n )&gt;, &lt;MinItems( n )&gt;, &lt;onChange( expr )&gt;, &lt; &lt;&lt;Modeling Type({"Any","Continuous","Nominal","Ordinal","Multiple Response","Unstructured Text","Vector","None","Row State"}) &gt;, &lt; &lt;&lt; Set Data Type(Any|Numeric|Character)&gt;, &lt;script&gt; )

**Descripción:** Devuelve un cuadro de visualización para mostrar un cuadro de lista en el que seleccionar columnas de la tabla de datos. Use el mensaje <<Modeling Type para permitir tipos de modelización especiales o restringir los tipos permitidos. El valor predeterminado de "Any" permitirá cualquier columna con un tipo de modelización clásico ("Continuous", "Nominal", "Ordinal").

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 1", Col List Box( all, width( 250 ), maxSelected( 1 ) ) );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 2",
	Col List Box( all, <<Set Data Type( "numeric" ), width( 250 ), maxSelected( 1 ) )
);

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 3",
	H List Box(
		ll1 = Col List Box( all ),
		Button Box( "Add", ll2 << append( ll1 << get selected ) ),
		ll2 = Col List Box( "numeric", MaxItems( 1 ), nlines( 1 ) ),
		Button Box( "Remove", ll2 << remove selected )
	)
);

```

### Col Max

**Sintaxis:** y = Col Maximum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descripción:** Devuelve el valor máximo de las filas de una columna. El resultado se guarda en caché internamente para que las evaluaciones múltiples sean más eficientes. Los argumentos opcionales byVar especifican los grupos para realizar el cálculo. Nótese que los argumentos byVar se deben usar en una fórmula de columna o una función For Each Row().

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Maximum( :height );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Maximum( :height, :age ) ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Maximum Value for Each Age and Sex Group",
	Formula( Col Maximum( :height, :age, :sex ) )
);

```

**Ejemplo 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Max for each Sex", Formula( Col Maximum( :height, :sex ) ) );
dt << New Column( "Col Max for each Sex grouped by Excluded",
	Formula( Col Maximum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Maximum

**Sintaxis:** y = Col Maximum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descripción:** Devuelve el valor máximo de las filas de una columna. El resultado se guarda en caché internamente para que las evaluaciones múltiples sean más eficientes. Los argumentos opcionales byVar especifican los grupos para realizar el cálculo. Nótese que los argumentos byVar se deben usar en una fórmula de columna o una función For Each Row().

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Maximum( :height );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Maximum( :height, :age ) ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Maximum Value for Each Age and Sex Group",
	Formula( Col Maximum( :height, :age, :sex ) )
);

```

**Ejemplo 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Max for each Sex", Formula( Col Maximum( :height, :sex ) ) );
dt << New Column( "Col Max for each Sex grouped by Excluded",
	Formula( Col Maximum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Mean

**Sintaxis:** y = Col Mean( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descripción:** Devuelve la media de muestra de las filas de una columna. El resultado se guarda en caché internamente para que las evaluaciones múltiples sean más eficientes. Los argumentos opcionales byVar especifican los grupos para realizar el cálculo. Nótese que los argumentos byVar se deben usar en una fórmula de columna o una función For Each Row().

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mean( :height );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mean( :height, <<Freq( :weight ) );

```

**Ejemplo 3**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Mean( :height, :age ) ) );

```

**Ejemplo 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Mean for Each Age and Sex Group",
	Formula( Col Mean( :height, :age, :sex ) )
);

```

**Ejemplo 5**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Mean for each Sex", Formula( Col Mean( :height, :sex ) ) );
dt << New Column( "Col Mean for each Sex grouped by Excluded",
	Formula( Col Mean( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Median

**Sintaxis:** y = Col Median( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descripción:** Devuelve la mediana especificada en las filas de una columna. El orden queda almacenado internamente para que se puedan realizar múltiples evaluaciones de forma eficiente.

**JMP Versión agregada:** 15

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Col Median Height",
	numeric,
	continuous,
	formula( Col Median( :height ) )
);
dt << New Column( "Col Median Height by Age",
	numeric,
	continuous,
	formula( Col Median( :height, :age ) )
);

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Show( Col Median( :height ) );
Row() = 1;
Show( Col Median( :height, :age ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Median for each Sex", Formula( Col Median( :height, :sex ) ) );
dt << New Column( "Col Median for each Sex grouped by Excluded",
	Formula( Col Median( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Min

**Sintaxis:** y = Col Minimum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descripción:** Devuelve el valor mínimo de las filas de una columna. El resultado se guarda en caché internamente para que las evaluaciones múltiples sean más eficientes. Los argumentos opcionales byVar especifican los grupos para realizar el cálculo. Nótese que los argumentos byVar se deben usar en una fórmula de columna o una función For Each Row().

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Minimum( :height );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Minimum( :height, :age ) ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Minimum Value for Each Age and Sex Group",
	Formula( Col Minimum( :height, :age, :sex ) )
);

```

**Ejemplo 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Min for each Sex", Formula( Col Minimum( :height, :sex ) ) );
dt << New Column( "Col Min for each Sex grouped by Excluded",
	Formula( Col Minimum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Minimum

**Sintaxis:** y = Col Minimum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descripción:** Devuelve el valor mínimo de las filas de una columna. El resultado se guarda en caché internamente para que las evaluaciones múltiples sean más eficientes. Los argumentos opcionales byVar especifican los grupos para realizar el cálculo. Nótese que los argumentos byVar se deben usar en una fórmula de columna o una función For Each Row().

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Minimum( :height );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Minimum( :height, :age ) ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Minimum Value for Each Age and Sex Group",
	Formula( Col Minimum( :height, :age, :sex ) )
);

```

**Ejemplo 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Min for each Sex", Formula( Col Minimum( :height, :sex ) ) );
dt << New Column( "Col Min for each Sex grouped by Excluded",
	Formula( Col Minimum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Mode

**Sintaxis:** y = Col Mode( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descripción:** Devuelve la moda de muestra de las filas de una columna, seleccionando la más pequeña en el caso de que haya varias modas. El resultado se guarda en caché internamente para que las evaluaciones múltiples sean más eficientes. Los argumentos opcionales byVar especifican los grupos para realizar el cálculo. Nótese que los argumentos byVar se deben usar en una fórmula de columna o una función For Each Row().

**JMP Versión agregada:** 17

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mode( :height );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Mode( :height, :age ) ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Mode for Each Age and Sex Group",
	Formula( Col Mode( :height, :age, :sex ) )
);

```

**Ejemplo 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Mode for each Sex", Formula( Col Mode( :height, :sex ) ) );
dt << New Column( "Col Mode for each Sex grouped by Excluded",
	Formula( Col Mode( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Moving Average

**Sintaxis:** y = Col Moving Average( xCol, &lt;weighting=0.25&gt;, &lt;before=-1&gt;, &lt;after=0&gt;, &lt;partial window is missing=1&gt;, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descripción:** Devuelve la media móvil de un intervalo dado en función de la fila actual. Para el multiplicador de peso, 1 significa que la ponderación es la misma, 0 significa que la ponderación es lineal y otros valores actúan como multiplicador de ponderación exponencial. Para las variables Por no es necesaria una ordenación previa.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 40;
Col Moving Average( :height, 1, 5, 0, :sex );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Moving Average for each Sex",
	Formula( Col Moving Average( :height, :sex ) )
);
dt << New Column( "Col Moving Average for each Sex grouped by Excluded",
	Formula( Col Moving Average( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col N Missing

**Sintaxis:** y = Col N Missing( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descripción:** Devuelve el número de valores faltantes de las filas de una columna. El resultado se guarda en caché internamente para que las evaluaciones múltiples sean más eficientes. Los argumentos opcionales byVar especifican los grupos para realizar el cálculo. Nótese que los argumentos byVar se deben usar en una fórmula de columna o una función For Each Row().

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col N Missing( :height );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col N Missing( :height, :age ) ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Number of Missing Values for Each Age and Sex Group",
	Formula( Col N Missing( :height, :age, :sex ) )
);

```

**Ejemplo 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height[10] = .;
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col N Missing for each Sex", Formula( Col N Missing( :height, :sex ) ) );
dt << New Column( "Col N Missing for each Sex grouped by Excluded",
	Formula( Col N Missing( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col N Unique

**Sintaxis:** y = Col N Unique( xCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;score missing(bool)&gt; )

**Descripción:** Devuelve el número de valores únicos de una columna. Si se solicitan los valores faltantes, todos los códigos de valores faltantes se contabilizan como un único valor.

**JMP Versión agregada:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "N unique age by sex", Formula( Col N Unique( :age, :sex ) ) );
New Column( "N unique height by age", Formula( Col N Unique( :height, :age ) ) );

```

### Col Number

**Sintaxis:** y = Col Number( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descripción:** Devuelve el número de valores no faltantes de las filas de una columna. El resultado se guarda en caché internamente para que las evaluaciones múltiples sean más eficientes. Los argumentos opcionales byVar especifican los grupos para realizar el cálculo. Nótese que los argumentos byVar se deben usar en una fórmula de columna o una función For Each Row().

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Number( :height );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Number( :height, :age ) ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Number of Nonmissing Values for Each Age and Sex Group",
	Formula( Col Number( :height, :age, :sex ) )
);

```

**Ejemplo 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height[10] = .;
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Number for each Sex", Formula( Col Number( :height, :sex ) ) );
dt << New Column( "Col Number for each Sex grouped by Excluded",
	Formula( Col Number( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Quantile

**Sintaxis:** y = Col Quantile( xCol, p, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descripción:** Devuelve el cuantil especificado en las filas de una columna. El orden queda almacenado internamente para que se puedan realizar múltiples evaluaciones de forma eficiente.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Col Quantile Height",
	numeric,
	continuous,
	formula( Col Quantile( :height, 0.5 ) )
);
dt << New Column( "Col Quantile Height by Age",
	numeric,
	continuous,
	formula( Col Quantile( :height, 0.5, :age ) )
);

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Show( Col Quantile( :height, 0.5 ) );
Row() = 1;
Show( Col Quantile( :height, 0.5, :age ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Quantile for each Sex",
	Formula( Col Quantile( :height, 0.5, :sex ) )
);
dt << New Column( "Col Quantile for each Sex grouped by Excluded",
	Formula( Col Quantile( :height, 0.5, :sex, Excluded( Row State() ) ) )
);

```

### Col Rank

**Sintaxis:** y = Col Rank( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**Descripción:** Devuelve el rango, que parte desde 1, el valor más bajo, con desempate por orden de fila a menos que se especifique con el argumento <<Tie. "media" genera la media de los rangos empatados, y "mínimo" genera el menor de los rangos empatados. Para "fila" y "arbitrario" cada fila tiene un rango único.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Rank Height", Formula( Col Rank( :height, <<tie( "average" ) ) ) );
New Column( "Rank Height by age", Formula( Col Rank( :height, :age ) ) );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Rank for each Sex", Formula( Col Rank( :height, :sex ) ) );
dt << New Column( "Col Rank for each Sex grouped by Excluded",
	Formula( Col Rank( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Score

**Sintaxis:** y = Col Score( xCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;score missing(bool)&gt; )

**Descripción:** Devuelve una puntuación entera para cada valor único, ordenada según cualquier propiedad de columna pertinente.

**JMP Versión agregada:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Score Height", Formula( Col Score( :height ) ) );
New Column( "Score Height by age", Formula( Col Score( :height, :age ) ) );

```

### Col Sequence

**Sintaxis:** y = Col Sequence( &lt;byVar, ...&gt;, &lt; &lt;&lt;skip missing(expr)&gt;, &lt; &lt;&lt;sequence(start=1, end=unbounded, incr=1, repeat=1)&gt;)

**Descripción:** Devuelve la posición de esta fila dentro de su grupo byVar, ajustada en función de skip missing y cualquier parámetro sequence.

**JMP Versión agregada:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Row within sex", Formula( Col Sequence( :sex ) ) );
New Column( "Alternate within sex", Formula( Col Sequence( :sex, <<Sequence( 1, 2 ) ) ) );
New Column( "Row within sex, 60+",
	Formula( Col Sequence( :sex, <<skip missing( Sqrt( :height - 60 ) ) ) )
);

```

### Col Shuffle

**Sintaxis:** y = Col Shuffle(&lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;)

**Descripción:** Devuelve un entero aleatorio entre 1 y el número de filas de la tabla de datos actual. Cuando se utiliza en una fórmula de columna, Col Shuffle() crea un orden aleatorio de números de fila, y cada número de fila aparece una sola vez. El orden se almacena en la memoria caché interna de modo que las múltiples evaluaciones son eficientes.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Shuffle 1", Numeric, Continuous, Set Formula( Col Shuffle() ) );
dt << New Column( "Shuffle 2", Numeric, Continuous, Set Formula( Col Shuffle() ) );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Shuffle", Numeric, Continuous, Set Formula( Col Shuffle( :age ) ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Shuffle for each Sex", Formula( Col Shuffle( :height, :sex ) ) );
dt << New Column( "Col Shuffle for each Sex grouped by Excluded",
	Formula( Col Shuffle( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Simple Exponential Smoothing

**Sintaxis:** y = Col Simple Exponential Smoothing( xCol, alpha, &lt;byVar, ...&gt; )

**Descripción:** Devuelve la predicción de alisado exponencial simple para la fila actual, usando el valor alfa de peso de alisado. Para las variables Por no es necesaria una ordenación previa. La fórmula es Valor predicho[t]=alfa * Valor observado[t-1] + (1-alfa) * Valor predicho[t-1], con Valor predicho[1] = Valor observado[1].

**JMP Versión agregada:** 15

```jsl

Open( "$SAMPLE_DATA/Time Series/Seriesa.jmp" );
Row() = 40;
Col Simple Exponential Smoothing( :Column1, .7 );

```

### Col Span Box

**Sintaxis:** y = Col Span Box( title, children )

**Descripción:** Devuelve una columna con un encabezado que abarca columnas hijas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "test",
	Table Box(
		Col Span Box(
			"Col Span",
			String Col Box( "col 1", {"A", "B", "C"} ),
			Number Col Box( "col2", {1, 2, 3} )
		)
	)
);

```

### Col Standardize

**Sintaxis:** y = Col Standardize( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descripción:** Devuelve el valor menos la media de la columna dividida entre la desviación estándar de la columna en las distintas filas de una columna. Si se especifican columnas Por grupo, el valor se estandariza en función de la media y la desviación estándar de Por grupo.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Col Standardize( :height );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Standardize( :height, :age ) ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Standardize for each Sex",
	Formula( Col Standardize( :height, :sex ) )
);
dt << New Column( "Col Standardize for each Sex grouped by Excluded",
	Formula( Col Standardize( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Std Dev

**Sintaxis:** y = Col Std Dev( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descripción:** Devuelve la desviación estándar muestral de las filas de una columna. El resultado se guarda en caché internamente para que las evaluaciones múltiples sean más eficientes. Los argumentos opcionales byVar especifican los grupos para realizar el cálculo. Nótese que los argumentos byVar se deben usar en una fórmula de columna o una función For Each Row().

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Std Dev( :height );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Std Dev( :height, :age ) ) );

```

**Ejemplo 3**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Std Dev( :height, :age, <<Freq( :weight ) ) ) );

```

**Ejemplo 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Standard Deviation for Each Age and Sex Group",
	Formula( Col Std Dev( :height, :age, :sex ) )
);

```

**Ejemplo 5**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Standard Deviation for each Sex",
	Formula( Col Std Dev( :height, :sex ) )
);
dt << New Column( "Col Standard Deviation for each Sex grouped by Excluded",
	Formula( Col Std Dev( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Stored Value

**Sintaxis:** y = Col Stored Value( &lt;dt&gt;, xCol, &lt;row=Row()&gt; )

**Descripción:** Devuelve un valor de columna que no tiene propiedades de columna aplicadas. Si no se especifica la opción de fila, se asume la fila actual

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Equity.jmp" );
:JOB << Set Property( "Missing Value Codes", {"Other"} );
y1 = Col Stored Value( :JOB, 10 );
y2 = Col Stored Value( :JOB, 11 );
y3 = Col Stored Value( :JOB, 14 );
y4 = Col Stored Value( :JOB, 15 );
Show( y1, y2, y3, y4 );

```

### Col Sum

**Sintaxis:** y = Col Sum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descripción:** Devuelve la suma de las filas de una columna. El resultado se guarda en caché internamente para que las evaluaciones múltiples sean más eficientes. Los argumentos opcionales byVar especifican los grupos para realizar el cálculo. Nótese que los argumentos byVar se deben usar en una fórmula de columna o una función For Each Row().

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Sum( :height );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Sum( :height, <<Freq( :weight ) );

```

**Ejemplo 3**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Sum( :height, :age ) ) );

```

**Ejemplo 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Sum for Each Age and Sex Group",
	Formula( Col Sum( :height, :age, :sex ) )
);

```

**Ejemplo 5**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Sum for each Sex", Formula( Col Sum( :height, :sex ) ) );
dt << New Column( "Col Sum for each Sex grouped by Excluded",
	Formula( Col Sum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Collapse Whitespace

**Sintaxis:** scw = Collapse Whitespace( s )

**Descripción:** Recorta el espacio en blanco del principio o del final y elimina los espacios en blanco interiores que estén duplicados

**JMP Versión agregada:** Antes de la versión 14

```jsl

Collapse Whitespace( "  The  dog    crossed    the  road  " );

```

### Color Difference

**Sintaxis:** color = Color Difference( color1, color2, &lt;difference metric&gt;)

**Descripción:** Devuelve la diferencia entre dos colores bajo una métrica de diferencia de color especificada.

**JMP Versión agregada:** 18

**Ejemplo 1**

```jsl

Color Difference( "red", "blue" );

```

**Ejemplo 2**

```jsl

Color Difference( "red", "blue", "sRGB" );

```

**Ejemplo 3**

```jsl

Color Difference( "red", "blue", "redmean" );

```

**Ejemplo 4**

```jsl

Color Difference( "red", "blue", "CIE76" );

```

**Ejemplo 5**

```jsl

Color Difference( "red", "blue", "CIE94" );

```

**Ejemplo 6**

```jsl

Color Difference( "red", "blue", "CIEDE2000" );

```

**Ejemplo 7**

```jsl

Color Difference( "red", "blue", "dEok" );

```

### Color Of

**Sintaxis:** y = Color Of( &lt;rs&gt; ); Color Of( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Descripción:** Devuelve la componente de color del valor de estado de la fila indicado, ya sea en forma de índice positivo de la paleta de colores de JMP o un valor negativo codificado RGB. Si se usa Color Of como L-value, sirve para cambiar el color de la fila actual (o la fila r-ésima) de la tabla de datos actual.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" ) << Color By Column( :height );
Color To RGB( Color Of( Row State( 3 ) ) );
Row() = 3;
Color To RGB( Color Of() );

```

### Color State

**Sintaxis:** rs = Color State( color )

**Descripción:** Devuelve un valor de estado de fila con la componente de color ajustada al valor especificado. El argumento color puede ser cualquier color JSL válido.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, 0.5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Color To HLS

**Sintaxis:** {h, l, s} = Color To HLS( color )

**Descripción:** Devuelve una lista de los componentes de tono, brillo y saturación. El argumento color puede ser cualquier color JSL válido, o una matriz de números de colores.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Color To HLS( RGB Color( 1.0, 0.5, 0.5 ) );

```

### Color To RGB

**Sintaxis:** {r, g, b} = Color To RGB( color )

**Descripción:** Devuelve una lista de los componentes rojo, verde y azul entre 0 y 1. El argumento de color puede ser cualquier color JSL válido o una matriz de números de colores.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Color To RGB( HLS Color( 30 / 360, 0.5, 1 ) );

```

### Column

**Sintaxis:** y = Column( name|number ); y = Column( dataTable, name|number, &lt;"formatted"&gt; )

**Descripción:** Devuelve una referencia a la columna de tabla de datos especificada. Las palabras clave "con formato" permiten acceder a los datos con formato, como la etiqueta de valor.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
col4 = Column( 4 );
ht = Column( "height" );
col4[1] + ht[2];

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << run script( "Set Sex Value Labels" );
col = Column( dt, "sex", "formatted" );
Write( "\!n", col[5] );
Write( "\!nData value returned is the formatted value of row 5." );

```

### Column Dialog

**Sintaxis:** y = Column Dialog( &lt;var = ColList("Label", &lt;Min Col(min)&gt;, &lt;Max Col(max)&gt;, &lt;Width(w)&gt;, &lt;Data Type("Numeric"|"Character"|"Any")&gt;, &lt;Modeling Type({&lt;"Continuous"&gt;, &lt;"Nominal"&gt;, &lt;"Ordinal"&gt;, &lt;"None"&gt;, &lt;"Multiple Response"&gt;, &lt;"Unstructured Text"&gt;, &lt;"Vector"&gt;})&gt; )&gt;, &lt;var=EditText("string")&gt;, &lt;var=EditNumber(num)&gt;, &lt;var=Check Box( "Text", 0|1)&gt;, &lt;var=RadioButtons( "a", "b" )&gt;, &lt;var=Combo Box("choice1", ...)&gt;, &lt;HList(box, ...)&gt;, &lt;VList(box, ...)&gt;, &lt;LineUp(ncol, box, ...)&gt;, &lt;Text Box("string")&gt;, &lt;Window Title("title")&gt;, &lt;Window Icon("icon string")&gt;, &lt;Dialog Description("description")&gt;, &lt;Recall(script)&gt;, &lt;Help Script(script)&gt;)

**Descripción:** Muestra al usuario una ventana modal con campos para seleccionar columnas de una tabla de datos. La especificación puede incluir varios tipos de cuadros de entrada, así como cuadros contenedores para organizar la ventana.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
Column Dialog(
	ex y = ColList( "Y", Min Col( 1 ), Max Col( 2 ), Data Type( "Numeric" ) ),
	ex x = ColList( "X", Max Col( 1 ), Modeling Type( {"Continuous", "Multiple Response"} ) ),
	Line Up( 2,
		Text Box( "Alpha" ), ex = EditNumber( .05 ),
		Text Box( "Beta" ), ey = EditText( "xyz" )
	),
	HList( cb = Check Box( "check", 1 ) ),
	HList( combo = Combo Box( "option1", "option2" ) ),
	HList( rb = RadioButtons( "a", "b" ) ),
	Window Title( "Custom Launch Dialog" ),
	Window Icon( "RowState" ), //icon string can be a full path file name of an image file.
	Dialog Description( "The dialog before a groundbreaking discovery!" ),
	Recall Script(
		Function( {dlgBox},
			dlgBox[list box box( 2 )] << remove all;
			dlgBox[list box box( 1 )] << clear selection;
			dlgBox[list box box( 1 )] << set selected( 3 );
			dlgBox[Button Box( 2 )] << click;
		)
	),
	Help Script( Web( "http://www.jmp.com/" ) )
);

```

### Column Name

**Sintaxis:** name = Column Name( n )

**Descripción:** Devuelve el nombre de la n-ésima columna de la tabla de datos actual.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Column Name( 4 );

```

### Combine States

**Sintaxis:** rs = Combine States( rs1, ... )

**Descripción:** Combina los valores de estado de varias filas en uno solo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Combo Box

**Sintaxis:** y = Combo Box( {item &lt;( tipstr )&gt;, ...}, &lt;script&gt; )

**Descripción:** Devuelve un cuadro de visualización para mostrar un cuadro combinado con un menú desplegable. Cada elemento del cuadro combinado puede contener información sobre la herramienta que se especifique en forma de cadena de caracteres entre paréntesis, a continuación de la cadena de texto que corresponde al elemento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	cb = Combo Box( {"single", "double", "triple"("tool tip")}, Show( cb << Get() ) )
);

```

### Concat

**Sintaxis:** s = s1 || s2 ...; m = m1 || m2 ...; s = Concat( s1, s2, ... )

**Descripción:** Concatena cadenas de caracteres para obtener una cadena más larga, o matrices para obtener una matriz más ancha.

**JMP Versión agregada:** Antes de la versión 14

```jsl

[1 2] || [3 4] || [5 6];

```

### Concat Items

**Sintaxis:** string = Concat Items( {list of strings}, &lt;separatorString&gt; )

**Descripción:** Concatena una lista de cadenas de caracteres en una sola, separándolas con el separador indicado o con un espacio en blanco si no se especifica ninguno.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Concat Items( {"www", "jmp", "com"}, "." );

```

### Concat To

**Sintaxis:** string1 ||= string2; matrix1 ||= matrix2; Concat To( a, b )

**Descripción:** Operador de asignación que concatena en el mismo lugar. a ||= b equivale a a = a || b.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex = "hello ";
ex ||= "world";

```

### Constrained Maximize

**Sintaxis:** Constrained Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;LessThanEQ({mat_A, vec_b}), &lt;&lt;GreaterThanEQ({mat_A, vec_b}), &lt;&lt;EqualTo({mat_A, vec_b}), &lt;&lt;MaxIter( 250 ), &lt;&lt;tolerance( .00001 ), &lt;&lt;ShowDetails(True), &lt;&lt;StartingValues([x1, x2, ... ])), &lt;&lt;SetVariableLimit({lowerLimitVector,upperLimitVector})

**Descripción:** Busca valores para los argumentos de la función, especificados en la lista {x1, x2, ...}, que maximizan la expresión expr con restricciones lineales opcionales. Las variables, x1, x2, etc. pueden ser escalares o vectores. Deben especificarse límites inferior y superior para cada variable entre paréntesis siguiendo el nombre de la variable o con el parámetro opcional <<SetVariableLimits(). Los argumentos opcionales para la función Constrained Maximize le permiten especificar lo siguiente: restricciones lineales, número máximo de iteraciones, tolerancia deseada, detalles de salida, valores de inicio y límites para las variables de optimización. (Consulte el ejemplo 2.) Las restricciones lineales se especifican con la matriz de coeficientes mat_A y el vector de la parte derecha vec_b.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

/*Simple Example*/
f = Expr(
	-2 * x1 ^ 2 - 2 * x2 ^ 2 + 2 * x1 * x2 + 4 * x1 + 6 * x2
);
A = [1 1, 1 5];
b = [2, 5];
minFun = Constrained Maximize(
	f,
	{x1( 0, 5 ), x2( 0, 5 )},
	<<lessthanEQ( {A, b} )/*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	<<StartingValues( [1, .5] )
);
Eval List( {x1, x2, minFun} );

```

**Ejemplo 2**

```jsl

/*Simple Example with optional parameters included*/ 
x = [., .];
f = Expr(
	-2 * x[1] ^ 2 - 2 * x[2] ^ 2 + 2 * x[1] * x[2] + 4 * x[1] + 6 * x[2]
);
A = [1 1, 1 5];
b = [2, 5];
{objVal, iters, gradient, hessian} = Constrained Maximize(
	f,
	{x},
	<<lessthanEQ( {A, b} )/*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	MaxIter( 250 ),
	<<tolerance( 1e-5 ),
	<<showDetails( True ),
	<<StartingValues( [1, .5] ),
	<<setVariableLimit( {[0, 0], [5, 5]} )
);
Show( x, objVal, iters, gradient, hessian );

```

### Constrained Minimize

**Sintaxis:** Constrained Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;LessThanEQ({mat_A, vec_b}), &lt;&lt;GreaterThanEQ({mat_A, vec_b}), &lt;&lt;EqualTo({mat_A, vec_b}), &lt;&lt;MaxIter( 250 ), &lt;&lt;tolerance( .00001 ), &lt;&lt;ShowDetails(True), &lt;&lt;StartingValues([x1, x2, ... ])), &lt;&lt;SetVariableLimit({low,high})

**Descripción:** Busca valores para los argumentos de la función, especificados en la lista {x1, x2, ...}, que minimizan la expresión expr con restricciones lineales opcionales. Las variables, x1, x2, etc. pueden ser escalares o vectores. Deben especificarse límites inferior y superior para cada variable entre paréntesis siguiendo el nombre de la variable o con el parámetro opcional <<SetVariableLimits(). Los argumentos opcionales para la función Constrained Minimize le permiten especificar lo siguiente: restricciones lineales, número máximo de iteraciones, tolerancia deseada, detalles de salida, valores de inicio y límites para las variables de optimización. (Consulte el ejemplo 2.) Las restricciones lineales se especifican con la matriz de coeficientes mat_A y el vector de la parte derecha vec_b.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

/*Simple Example*/
f = Expr(
	2 * x1 ^ 2 + 2 * x2 ^ 2 - 2 * x1 * x2 - 4 * x1 - 6 * x2
);
A = [1 1, 1 5];
b = [2, 5];
minFun = Constrained Minimize(
	f,
	{x1( 0, 5 ), x2( 0, 5 )},
	<<lessthanEQ( {A, b} )/*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	<<StartingValues( [1, .5] )
);
Eval List( {x1, x2, minFun} );

```

**Ejemplo 2**

```jsl

/*Simple Example with optional parameters included*/ 
x = [., .];
f = Expr(
	2 * x[1] ^ 2 + 2 * x[2] ^ 2 - 2 * x[1] * x[2] - 4 * x[1] - 6 * x[2]
);
A = [1 1, 1 5];
b = [2, 5];
{objVal, iters, gradient, hessian} = Constrained Minimize(
	f,
	{x},
	<<lessthanEQ( {A, b} ) /*and/or <<GreaterThanEQ({A,b}) and/or <<EqualTo({A,b})*/,
	MaxIter( 250 ),
	<<tolerance( 1e-5 ),
	<<showDetails( True ),
	<<StartingValues( [1, .5] ),
	<<setVariableLimit( {[0, 0], [5, 5]} )
);
Show( x, objVal, iters, gradient, hessian );

```

### Contains

**Sintaxis:** pos = Contains( x, item, &lt;start=1&gt; )

**Descripción:** Devuelve la posición de item dentro de x, comenzando en la posición start, siempre que esté indicada. Si el valor de start es negativo, la búsqueda comienza hacia atrás desde length( x ) - start. El argumento x puede ser una cadena de caracteres o una lista.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show( Contains( "redreed", "re", -1 ) );
Show( Contains( {"A", 2, "C", [1 5], "C"}, "C", 4 ) );

```

### Contains Item

**Sintaxis:** b = Contains Item( x, item | list | Pat Regex(), &lt;delimiter&gt; )

**Descripción:** Devuelve un booleano que indica si la palabra [elemento], una de una lista de palabras [lista] o el patrón [patrón] coincide o no con una de las palabras del texto representado por [x]. Las palabras están delimitadas por los caracteres en la cadena del separador opcional [separador]. Un carácter de coma, "," , es el separador predeterminado. Los espacios se recortan por los extremos de cada palabra extraída de la cadena de texto de entrada [x].

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Show( Contains Item( "A, 2, C, D, C", "C", ", " ) );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Food Journal.jmp" );
dt << New Column( "Cheese",
	numeric,
	continuous,
	Formula( Contains Item( dt:Item Name, "Cheese", ", " ) )
);
dt << Distribution( Column( :Cheese ) );

```

**Ejemplo 3**

```jsl

//find repeated character c in cdcef
Contains Item( "abcde,bcdef,cdcef", Pat Regex( "(.).*?\1" ), "," );

```

### Context Box

**Sintaxis:** y = Context Box( displayBox, ... )

**Descripción:** Devuelve un cuadro de visualización que establece un contexto de evaluación limitada. Permite que distintas partes de una ventana de visualización funcionen de forma independiente entre sí.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Context Box(
		Outline Box( "Picker",
			V List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
		)
	)
);

```

### Continue

**Sintaxis:** Continue()

**Descripción:** Provoca la continuación de la iteración siguiente en el flujo de control de un bucle For o While.

**JMP Versión agregada:** Antes de la versión 14

```jsl

For( i = 1, i <= 10, i++,
	If( i < 2, Continue() );
	Print( "i=" || Char( i ) );
);

```

### Contour

**Sintaxis:** Contour( xVector, yVector, zGridMatrix, zContours, &lt; &lt;&lt;zColor( color, option )&gt;, &lt; &lt;&lt;Fill|Fill Between|Fill Below|Fill Above&gt;, &lt; &lt;&lt;Transparency(vector)&gt; )

**Descripción:** Dibuja contornos a partir de una cuadrícula de valores. Si se especifican menos colores que contornos, las opciones de "Interpolar colores" o "Recorrer colores" determinan cómo se aplicarán los colores.

**JMP Versión agregada:** Antes de la versión 14

```jsl


New Window( "Example",
	H List Box(
		Outline Box( "Line",
			Graph Box(
				Contour( 1 :: 100, 1 :: 100, (1 :: 100)` * (1 :: 100), 7 ^ (0 :: 4) )
			)
		),
		Outline Box( "Line Colors",
			Graph Box(
				Contour(
					1 :: 100,
					1 :: 100,
					(1 :: 100)` * (1 :: 100),
					7 ^ (0 :: 4),
					<<zColor( {"Blue", "Red"} )
				)
			)
		)
	),
	H List Box(
		Outline Box( "Fill Cycle",
			Graph Box(
				Contour(
					1 :: 100,
					1 :: 100,
					(1 :: 100)` * (1 :: 100),
					7 ^ (0 :: 4),
					<<zColor(
						{RGB Color( 218, 218, 255 ), RGB Color( 255, 218, 218 )},
						"Cycle Colors"
					),
					fill
				)
			)
		),
		Outline Box( "Fill Interpolate",
			Graph Box(
				Contour(
					1 :: 100,
					1 :: 100,
					(1 :: 100)` * (1 :: 100),
					7 ^ (0 :: 4),
					<<zColor( {"Blue", "Red"}, "Interpolate Colors" ),
					fill
				)
			)
		)
	)
);

```

### Contour Function

**Sintaxis:** Contour Function( zExpr, xName, yName, z|zMatrix, &lt; &lt;&lt;XGrid( min, max, incr )&gt;, &lt; &lt;&lt;YGrid( min, max, incr )&gt;, &lt; &lt;&lt;ZColor( color, option )&gt;, &lt; &lt;&lt;ZLabeled&gt;, &lt; &lt;&lt;Filled&gt;, &lt; &lt;&lt;FillBetween&gt;, &lt; &lt;&lt;Ternary&gt;, &lt; &lt;&lt;Transparency( t )&gt; )

**Descripción:** Evalúa la expresión en una cuadrícula de valores de xName y yName, y dibuja las líneas de contorno. El color se puede especificar en forma de número, matriz o lista de valores RGB, una lista de nombres de colores o un tema de color. La transparencia t se puede especificar en forma de número o de matriz. Si se especifica la opción Ternary, los contornos se recortan y se limitan a un sistema de coordenadas ternarias.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

New Window( "Example",
	Graph Box(
		Contour Function(
			Log( a * a + b * b ),
			a,
			b,
			1 :: 10,
			<<ZColor( {"blue", "green", "red"}, "Cycle Colors" ),
			Transparency( 0.9 )
		)
	)
);

```

**Ejemplo 2**

```jsl

New Window( "Example",
	Graph Box(
		Contour Function(
			Log( a * a + b * b ),
			a,
			b,
			1 :: 10,
			<<Filled,
			<<ZColor( {{1, 0.1, 0.1}, {0.1, 1, 0.1}, {0.1, 0.1, 1}}, "Interpolate Colors" )
		)
	)
);

```

### Contour Seg

**Sintaxis:** me = Contour Seg( Triangulation, [ levels ], &lt; zColor([colors], &lt;Cycle Colors|Interpolate Colors&gt;) &gt;, &lt; Transparency([] | t) &gt;

**Descripción:** Devuelve un segmento de visualización que representa los contornos de una triangulación. Se pueden especificar colores opcionales para cada nivel en forma de matriz o lista. La transparencia puede indicarse en forma de número o matriz.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
{xx, yy} = tri << Get Points();
New Window( "Contour Seg Example",
	g = Graph Box(
		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),
		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),
		Contour Seg(
			tri,
			[0, 400, 1000, 2000, 9000],
			zColor( 5 + [64 32 0 16 48] ),
			Transparency( [1, 1, 1, 1, 1] )
		)
	)
);

```

### Convert File Path

**Sintaxis:** path = Convert File Path( path, &lt;absolute|relative&gt;, &lt;posix|windows&gt;, &lt;base( path )&gt;, &lt;search&gt; )

**Descripción:** Devuelve la ruta convertida.

**JMP Versión agregada:** Antes de la versión 14

```jsl

For Each( {pv},
	{"HOME", "DOCUMENTS", "SAMPLE_DATA", "SAMPLE_IMPORT_DATA", "SAMPLE_SCRIPTS",
	"SAMPLE_IMAGES", "USER_APPDATA", "USER_JMPDATA", "MAPS", "USER_JMPDATA_ALL", "TEMP"},
	Write(
		pv || Repeat( " ", 20 - Length( pv ) ) || " => " || Convert File Path( "$" || pv )
		 || "\!N"
	)
);

```

### Copy Directory

**Sintaxis:** rc = Copy Directory( from, to, &lt;recursive(0|1)&gt; )

**Descripción:** Copia archivos de un directorio a otro y, opcionalmente, copia los subdirectorios. El nombre del directorio se creará en la ruta de acceso de to y no puede formar parte de ella. Devuelve 1 si se ha copiado el directorio o 0 si no se ha podido copiar el directorio. Lanza un error si la ruta no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );/* creates $TEMP/Loss Function Templates */ 
rc1 = File Exists( "$TEMP/Loss Function Templates/Normal.jmp" );
rc2 = Delete File( "$TEMP/Loss Function Templates/Normal.jmp" );
rc3 = File Exists( "$TEMP/Loss Function Templates/Normal.jmp" );
rc4 = Delete Directory( "$TEMP/Loss Function Templates" );
rc5 = Directory Exists( "$TEMP/Loss Function Templates" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 1 0 1 0 */

```

### Copy File

**Sintaxis:** rc = Copy File( from, to )

**Descripción:** Copia un archivo desde el archivo original en otro nuevo con el mismo nombre o un nombre distinto. Se debe especificar el nombre de archivo y la ruta de acceso completa del archivo de destino. Devuelve 1 si se ha copiado el archivo o 0 si no se ha podido copiar. Lanza un error si la ruta de acceso no es válida o no existe. No se puede copiar un archivo cuando las rutas from o to no son válidas o si el archivo to ya existe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

rc0 = File Exists( "$TEMP/x.jmp" );
rc1 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = Delete File( "$TEMP/x.jmp" );
rc4 = File Exists( "$TEMP/x.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 );/* 0 1 1 1 0 */

```

### Correlation

**Sintaxis:** y = Correlation( x , &lt; &lt;&lt;"Pairwise" &gt;, &lt; &lt;&lt;"Shrink" &gt;, &lt; &lt;&lt;Freq(vector) &gt;, &lt; &lt;&lt;Weight(vector) &gt; )

**Descripción:** Devuelve la matriz de correlación del argumento de la matriz x. El argumento "Pairwise" maneja los valores faltantes por pares en lugar de por filas. El argumento "Shrink" reduce los elementos fuera de la diagonal en función de un factor que se determina usando el método descrito en Schafer and Strimmer, 2005. Los argumentos Freq y Weight especifican vectores de frecuencia o valores de peso, respectivamente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Correlation( [1 3 5, 3 2 6, 5 6 1] );

```

### Cos

**Sintaxis:** y = Cosine( x )

**Descripción:** Devuelve el coseno trigonométrico de x, donde x es un ángulo en radianes.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Cosine( Pi() / 2 );

```

### CosH

**Sintaxis:** y = CosH( x )

**Descripción:** Devuelve el coseno hiperbólico de x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

CosH( 1 );

```

### Cosine

**Sintaxis:** y = Cosine( x )

**Descripción:** Devuelve el coseno trigonométrico de x, donde x es un ángulo en radianes.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Cosine( Pi() / 2 );

```

### Count

**Sintaxis:** y = Count( start, end, s, &lt;n=1&gt; )

**Descripción:** Devuelve el elemento i-ésimo de la secuencia de números del start al end en s pasos y repitiendo cada número n veces, donde i viene determinado por el valor de la función Row(). Puesto que depende de la función Row(), la función Count() se usar generalmente en fórmulas de columna.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Table( "Count Example",
	Add Rows( 12 ),
	New Column( "Count1" ),
	New Column( "Count2" ),
	New Column( "Count3", Set Formula( Count( 0, 6, 4, 1 ) ) )
);
For Each Row(
	:Count1[Row()] = Count( 0, 6, 4, 1 );
	:Count2[Row()] = Count( 0, 6, 3, 2 );
);

```

### Covariance

**Sintaxis:** y = Covariance( x , &lt; &lt;&lt;"Pairwise" &gt;, &lt; &lt;&lt;"Shrink" &gt;, &lt; &lt;&lt;Freq(vector) &gt;, &lt; &lt;&lt;Weight(vector) &gt; )

**Descripción:** Devuelve la matriz de covarianza del argumento de la matriz x. El argumento "Pairwise" maneja los valores faltantes por pares en lugar de por filas. El argumento "Shrink" reduce los elementos fuera de la diagonal en función de un factor que se determina usando el método descrito en Schafer and Strimmer, 2005. Los argumentos Freq y Weight especifican vectores de frecuencia o valores de peso, respectivamente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Covariance( [1 3 5, 3 2 6, 5 6 1] );

```

### Create Database Connection

**Sintaxis:** dbc = Create Database Connection( dataSourceName|"Connect Dialog", &lt;DriverPrompt(true|false)&gt; )

**Descripción:** Crea una conexión de base de datos y devuelve un identificador para la conexión. Si DriverPrompt es True, se le solicitará al usuario mediante la solicitud del controlador ODBC que facilite las credenciales si fuera necesario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dbc = Create Database Connection(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;"
);

```

### Create Directory

**Sintaxis:** rc = Create Directory( path )

**Descripción:** Crea un directorio. Devuelve 1 si se ha creado el directorio. Devuelve 0 si el directorio ya existe o si JMP no ha podido crear el directorio.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Delete Directory( "$TEMP/sub1" );
rc0 = Create Directory( "$TEMP/sub1/sub2/sub3" );
Save Text File( "$TEMP/sub1/sub2/sub3/temp.txt", "example text" );
date = Last Modification Date( "$TEMP/sub1/sub2/sub3/temp.txt" );
rc1 = Delete Directory( "$TEMP/sub1" );
rc2 = File Exists( "$TEMP/sub1/sub2/sub3/temp.txt" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " ||
Format( date, "ddmonyyyy:h:m:s" );/* 1 1 0 date:time */

```

### Create Excel Workbook

**Sintaxis:** Create Excel Workbook(&lt;Workbook Name&gt;, &lt;{List of open tables}&gt;, &lt;Optional list of worksheet names&gt; )

**Descripción:** Genera una hoja de Excel a partir de las tablas de datos JMP abiertas

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = Open( "$SAMPLE_DATA/Abrasion.jmp" );
Create Excel Workbook( "$TEMP/MyWorkbook.xlsx", {dt1, dt2}, {"Big", "Abrasive"} );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Abrasion.jmp" );
Create Excel Workbook(
	"$TEMP/MyWorkbook.xlsx",
	{"Big Class", "Abrasion"},
	{"Big", "Abrasive"}
);

```

### Creation Date

**Sintaxis:** date = Creation Date( path )

**Descripción:** Devuelve la fecha de creación de un archivo o directorio. Lanza un error cuando la ruta no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Format( Creation Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Cumulative Sum

**Sintaxis:** y = Cumulative Sum( x )

**Descripción:** Devuelve una matriz de sumas parciales para la matriz de entrada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Cumulative Sum( [1 1 1 1 . 10 20] );

```

### Current CAS Connection

**Sintaxis:** Current CAS Connection()

**Descripción:** Obtiene la conexión al servidor CAS actual.

**JMP Versión agregada:** 15

```jsl


connection = Current CAS Connection();
Show( connection );

```

### Current Data Table

**Sintaxis:** dt = Current Data Table( &lt;Project(title|index|box|window)&gt; ); Current Data Table( dt )

**Descripción:** Devuelve la tabla de datos actual o convierte la tabla de datos especificada en la actual si se especifica una.



Para especificar un proyecto, utilice el argumento opcional Project() con un título, índice, cuadro de visualización u objeto de ventana. Utilice Project(0) para no especificar ningún proyecto cuando se ejecute el script en un proyecto.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Current Data Table() << Get Column Names;

```

### Current Journal

**Sintaxis:** y = Current Journal( &lt;Project(title|index|box|window)&gt; )

**Descripción:** Devuelve una referencia al diario actual del proyecto actual (o a ningún proyecto si no se ejecuta el script en un proyecto).



Para especificar un proyecto, utilice el argumento opcional Project() con un título, índice, cuadro de visualización u objeto de ventana. Utilice Project(0) para no especificar ningún proyecto cuando se ejecute el script en un proyecto.



Si no existe ningún diario actual en el proyecto especificado, se creará uno automáticamente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Current Journal();

```

### Current Report

**Sintaxis:** y = Current Report( &lt;Project(title|index|box|window)&gt; )

**Descripción:** Devuelve una referencia de cuadro de visualización al informe actual del proyecto actual (o a ningún proyecto si no se ejecuta el script en un proyecto).



Para especificar un proyecto, utilice el argumento opcional Project() con un título, índice, cuadro de visualización u objeto de ventana. Utilice Project(0) para no especificar ningún proyecto cuando se ejecute el script en un proyecto.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Current Report();

```

### Current Window

**Sintaxis:** y = Current Window( &lt;Project(title|index|box|window)&gt; )

**Descripción:** Devuelve una referencia a la ventana actual del proyecto actual (o a ningún proyecto si no se ejecuta el script en un proyecto).



Para especificar un proyecto, utilice el argumento opcional Project() con un título, índice, cuadro de visualización u objeto de ventana. Utilice Project(0) para no especificar ningún proyecto cuando se ejecute el script en un proyecto.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Outline Box( "Example Outline",
		Text Box( "Example Text" ),
		Button Box( "Close", Current Window() << Close Window )
	)
);

```

### Cytometry Logicle

**Sintaxis:** y = Cytometry Logicle( x, T, W, M, A )

**Descripción:** Calcula la transformación de citometría biexponencial.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Cytometry Logicle( 100, 10000, .15, .45, 0 );

```

### Cytometry Logicle Inverse

**Sintaxis:** x = Cytometry Logicle Inverse( y, T, W, M, A )

**Descripción:** Calcula la transformación de citometría biexponencial inversa.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Cytometry Logicle Inverse( 100, 10000, .15, .45, 0 );

```

### Data Connector Registry

**Sintaxis:** Data Connector Registry()

**Descripción:** La colección de conectores de datos para JMP.

**JMP Versión agregada:** 18

```jsl


dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Data Filter Context Box

**Sintaxis:** y = Data Filter Context Box( displayBox )

**Descripción:** Devuelve un cuadro de visualización que define la extensión de los filtros de datos locales contenidos en un árbol de visualización. Los filtros de datos y los cuadros de contexto de filtro de datos se pueden organizar en una jerarquía y se pueden compartir en distintas plataformas o cuadros dentro de cuadros de contexto de filtro de datos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Shared Local Filter",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter( Local, Add Filter( columns( :sex ), Where( :sex == "F" ) ) ),
			dt << Bubble Plot(
				X( :weight ),
				Y( :height ),
				Fit To Window( "On" ),
				Sizes( :age ),
				Title Position( 0, 0 )
			),
			dt << Graph Builder(
				Size( 525, 456 ),
				Show Control Panel( 0 ),
				Fit To Window( "On" ),
				Variables( X( :weight ), Y( :age ) ),
				Elements( Box Plot( X, Y, Legend( 4 ) ) ),

			)
		)
	)
);

```

### Data Filter Source Box

**Sintaxis:** y = Data Filter Source Box( displayBox )

**Descripción:** Devuelve un cuadro de visualización que define el origen de un filtro de selección. Las filas seleccionadas en los informes que contiene el cuadro de origen del filtro de datos se incluirá para el análisis en otros informes contenidos en un cuadro de contexto del filtro de datos común.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Selection Filter",
	Data Filter Context Box(
		H List Box(
			Data Filter Source Box(
				Graph Builder(
					Size( 208, 207 ),
					Show Control Panel( 0 ),
					Show Legend( 0 ),
					Variables( X( :age ) ),
					Elements( Bar( X, Legend( 3 ) ) ),
					SendToReport(
						Dispatch( {}, "Graph Builder", OutlineBox, {Set Title( "Filter" )} )
					)
				)
			),
			Platform(
				Current Data Table(),
				Bubble Plot(
					X( :weight ),
					Y( :height ),
					Sizes( :age ),
					Title Position( 0, 0 )
				)
			)
		)
	)
);

```

### Data Grid Box

**Sintaxis:** y = Data Grid Box( )

**Descripción:** Devuelve un cuadro de visualización que puede contener una tabla de datos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example", x = Data Grid Box() );
x << Set Data Table( dt );

```

### Data Table

**Sintaxis:** dt = Data Table( name|number )

**Descripción:** Devuelve una referencia a la tabla de datos especificada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Data Table( 1 );

```

### Data Table Box

**Sintaxis:** y = Data Table Box( datatable )

**Descripción:** Devuelve un cuadro de tabla que representa la tabla de datos indicada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example", Data Table Box( dt ) );

```

### Data Table Col Box

**Sintaxis:** y = Data Table Col Box( col )

**Descripción:** Devuelve un cuadro de columna correspondiente a la columna de la tabla de datos especificada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	Table Box( Data Table Col Box( :name ), Data Table Col Box( :height ) )
);

```

### Data Table Plot Col Box

**Sintaxis:** y = Data Table Plot Col Box( col )

**Descripción:** Devuelve un Plot Col Box que corresponde a la columna de datos dada y, opcionalmente, utiliza la segunda y tercera columnas de la tabla de datos para crear límites de control.

**JMP Versión agregada:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	Table Box( Data Table Plot Col Box( :weight ), Data Table Plot Col Box( :height ) )
);

```

### Datafeed

**Sintaxis:** y = Open Datafeed( ... )

**Descripción:** Crea un objeto y una ventana a los cuales se pueden enviar mensajes con el fin de gestionar feeds de datos en tiempo real.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exfeed = Open Datafeed(/*Connect( Port( "com3" ), Baud( 4800 ), DataBits( 8 ) ),*/
	Set Script(
		ex = exfeed << getLine;
		Show( ex );
	)
);
For( exi = 0, exi < 5, exi++, /* this is just a way to test a feed when the real data source is not available...*/
	exfeed << Queue Line( Char( exi ) );
	Wait( .5 );
);

```

### Date Difference

**Sintaxis:** delta = Date Difference( dt1, dt2, intervalName, &lt;alignment="start"&gt; )

**Descripción:** Devuelve la diferencia en intervalos de dos valores de fecha/hora. Los valores compatibles de intervalName son "Año", "Trimestre", "Mes", "Semana", "Día", "Hora", "Minuto", "Segundo" y "Numérico". Una alignment de "Start" incluye intervalos parciales o completos, mientras que "Actual" solo incluye intervalos completos. Una alignment de "Fractional" devuelve diferencias fraccionales y utiliza medias para la duración de los intervalos de "Año", "Trimestre" y "Mes".

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "start" );

```

**Ejemplo 2**

```jsl

Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "actual" );

```

**Ejemplo 3**

```jsl

Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "fractional" );

```

### Date DMY

**Sintaxis:** z = Date DMY( d, m, y )

**Descripción:** Convierte día, mes y año en un valor de fecha y hora de JMP, que es el número de segundos transcurridos desde el 1 de enero de 1904.

**JMP Versión agregada:** Antes de la versión 14

```jsl

As Date( Date DMY( 15, 7, 2000 ) );

```

### Date Increment

**Sintaxis:** d = Date Increment( datetime, intervalName, &lt;incr=1&gt;, &lt;alignment="start"&gt; )

**Descripción:** Devuelve un valor de fecha y hora agregando un número de intervalos incr. Los valores compatibles de intervalName son "Año", "Trimestre", "Mes", "Semana", "Día", "Hora", "Minuto", "Segundo" y "Numérico". Una alignment de "Start" trunca el intervalo más cercano antes de agregar el incremento, mientras que "Actual" retiene la fecha y hora de entrada completa. Una alignment de "Fractional" permite valores incr fraccionales y utiliza medias para la duración de los intervalos "Año", "Trimestre" y "Mes".

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Date Increment( Today(), "Month", 100, "start" );

```

**Ejemplo 2**

```jsl

Date Increment( Today(), "Month", 100, "actual" );

```

**Ejemplo 3**

```jsl

Date Increment( Today(), "Month", 100, "fractional" );

```

### Date MDY

**Sintaxis:** z = Date MDY( m, d, y )

**Descripción:** Convierte mes, día y año en un valor de fecha y hora de JMP, que es el número de segundos transcurridos desde el 1 de enero de 1904.

**JMP Versión agregada:** Antes de la versión 14

```jsl

As Date( Date MDY( 7, 15, 2000 ) );

```

### Day

**Sintaxis:** d = Day( datetime )

**Descripción:** Devuelve el día del mes correspondiente a un valor de fecha y hora, del 1 al 31.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Day( Today() );

```

### Day Of Week

**Sintaxis:** d = Day Of Week( datetime )

**Descripción:** Devuelve el día de la semana correspondiente a un valor de fecha y hora. Domingo = 1, ..., Sábado = 7.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Day Of Week( Today() );

```

### Day Of Year

**Sintaxis:** d = Day Of Year( datetime )

**Descripción:** Devuelve el día del año correspondiente a un valor de fecha y hora. El 1 de enero es el día 1.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Day Of Year( Today() );

```

### Days In Month

**Sintaxis:** v = Days In Month(year, month)

**Descripción:** Devuelve el número de días en un mes dado.

**JMP Versión agregada:** 15

```jsl

v = Days In Month( 2016, 2 );

```

### Debug Break

**Sintaxis:** Debug Break()

**Descripción:** Cuando el Depurador JSL evalúa esta expresión, detiene la ejecución del script.

**JMP Versión agregada:** Antes de la versión 14

```jsl

// Right-click and select Debug.
// In the JSL Debugger, click Run.
x = 5;
y = 8;
Debug Break();
z = x + yy;
Show( z );

```

### Decode URI

**Sintaxis:** Decode URI( value )

**Descripción:** Codificar la cadena usando la codificación URI

**JMP Versión agregada:** 14

```jsl


Decode URI( "Foo%20Bar" );

```

### Decode64 Blob

**Sintaxis:** y = Decode64 Blob( base64String )

**Descripción:** Decodifica una cadena imprimible de texto Base 64 en un blob.

**JMP Versión agregada:** 14

```jsl

Decode64 Blob( "dGhlIHF1aWNrIGJyb3duIGZveA==" );

```

### Decode64 Double

**Sintaxis:** y = Decode64 Double( base64String )

**Descripción:** Devuelve el número de coma flotante de precisión doble a partir de la cadena de caracteres codificada en Base64.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Decode64 Double( "P/lUWYIBG9Q=" );

```

### Define Class

**Sintaxis:** Define Class("class name", &lt;Base Class{ "base class name", ... }&gt;, &lt;Show( All( boolean ) | ( Members( boolean ) | Methods( boolean ) | Functions( boolean ) )+ )&gt;, { method* | member* | function* } )

**Descripción:** Define una nueva clase

**JMP Versión agregada:** 14

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
cl << Delete;
Delete Classes( complex );

```

### Delete Classes

**Sintaxis:** Delete Classes( &lt;Force( boolean )&gt;, &lt;class reference, ...&gt; )

**Descripción:** Elimina todas las definiciones de clase o una o más definiciones de clase específicas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Define Class(
	"aa",
	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )}
);
Define Class(
	"bb",
	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )}
);
lcaa = New Object( aa() );
lcbb = New Object( bb() );
lcl = Get Classes();
Show( lcl );
Show Classes();
Clear Symbols( lcl );
lcaa << Delete;
lcbb << Delete;
Delete Classes( "aa", "bb" );
Show Classes();

```

### Delete Directory

**Sintaxis:** rc = Delete Directory( path, &lt;Allow Undo( boolean )&gt; )

**Descripción:** Elimina un directorio y todos sus archivos y subdirectorios. Devuelve 1 si se ha eliminado el directorio. Devuelve 0 si no se ha podido eliminar el directorio o si la ruta de acceso no es válida.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Delete Directory( "$TEMP/sub1" );
rc0 = Create Directory( "$TEMP/sub1/sub2/sub3" );
Save Text File( "$TEMP/sub1/sub2/sub3/temp.txt", "example text" );
date = Last Modification Date( "$TEMP/sub1/sub2/sub3/temp.txt" );
rc1 = Delete Directory( "$TEMP/sub1" );
rc2 = File Exists( "$TEMP/sub1/sub2/sub3/temp.txt" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " ||
Format( date, "ddmonyyyy:h:m:s" );/* 1 1 0 date:time */

```

### Delete File

**Sintaxis:** rc = Delete File( path, &lt;Allow Undo( boolean )&gt; )

**Descripción:** Elimina un archivo. Devuelve 1 si se ha eliminado el archivo. Devuelve 0 si no se ha podido eliminar el archivo. Lanza un error cuando la ruta de acceso no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc1 = File Exists( "$TEMP/x.jmp" );
rc2 = Delete File( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/x.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) /* 1 1 1 0 */;

```

### Delete Globals

**Sintaxis:** Delete Globals( &lt; varname, ... &gt; )

**Descripción:** Elimina todos los símbolos globales definidos y sus valores.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Delete Globals();

```

### Delete Namespaces

**Sintaxis:** Delete Namespaces( &lt;Force( boolean )&gt;, &lt;namespace reference, ...&gt; )

**Descripción:** Elimina todos los espacios de nombres o uno o más espacios de nombres específicos.

**JMP Versión agregada:** Antes de la versión 14

```jsl


nsaa = New Namespace(
	"aa",
	{
		x = 1
	}
);
nsbb = New Namespace(
	"bb",
	{
		y = 1
	}
);
Show Namespaces();
Delete Namespaces( nsaa, nsbb );
Show Namespaces();

```

### Delete Symbols

**Sintaxis:** Delete Symbols( &lt; varname, ... &gt; )

**Descripción:** Elimina todos los símbolos definidos y sus valores.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Delete Symbols();

```

### Derivative

**Sintaxis:** y = Derivative( expr, name )

**Descripción:** Devuelve la derivada simbólica de la expresión indicada respecto de la variable con el nombre indicado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Derivative( Sin( x ), x );

```

### Design

**Sintaxis:** y = Design( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Descripción:** Crea una matriz de diseño que contiene una columna de unos y ceros para cada valor único del argumento. Utilice el argumento levelsList para especificar una lista de niveles para la matriz de diseño. Si se especifica el argumento <<Levels, el valor devuelto es una lista que contiene la matriz de diseño y una lista de los niveles. Si se especifica el argumento <<ElseMissing, se colocan los valores faltantes en la matriz de diseño para los valores del argumento v que no aparezcan en levelsList. De lo contrario, se colocan ceros en la matriz de diseño.

**JMP Versión agregada:** Antes de la versión 14

```jsl

/* example that Design(...) takes one argument */
exLevels = [1, 2, 3, 2, 1];
Show( Design( exLevels ) );
/* Also see DesignNom, DesignOrd */

/* example that Design(...) takes two arguments */
Show( Design( 3, {1, 2, 3} ) );
Show( Design( [1 2], {1, 2, 3} ) );
exLevels = [1, 2, 3, 2, 1, 2, 3];
Show( Design( exLevels, {1, 2, 3} ) );
Show( Design( {"a", "b"}, {"a", "b", "c"} ) );

/* example that Design(...) takes three arguments */
Show( Design( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );
Show( Design( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Design Last

**Sintaxis:** y = Design Last( v, &lt; levelsList, &lt;&lt;ElseMissing &gt; )

**Descripción:** Crea una matriz de diseño que contiene una columna de unos y ceros para todos los valores únicos del argumento, excepto para el último. El último nivel se codifica como una fila de ceros. Si se especifica el argumento levelsList, el último nivel es el último nivel de levelsList. De lo contrario, se define el último nivel como el mayor valor de v. Si se especifica el argumento <<Levels, el valor devuelto es una lista que contiene la matriz de diseño y una lista de los niveles. Si se especifica el argumento <<ElseMissing, se colocan los valores faltantes en la matriz de diseño para los valores del argumento v que no aparezcan en levelsList. De lo contrario, se colocan ceros en la matriz de diseño.

**JMP Versión agregada:** Antes de la versión 14

```jsl

/* example that Design Last(...) takes one argument */
exLevels = [1, 2, 3, 2, 1];
Show( Design Last( exLevels ) );
/* see what is different from Design(...) */
Show( Design( exLevels ) );

/* Also see Design, DesignOrd */

/* example that Design Last(...) takes two arguments */
Show( Design Last( 3, {1, 2, 3} ) );
Show( Design( 3, {1, 2, 3} ) );
Show( Design Last( [1 2], {1, 2, 3} ) );
Show( Design( [1 2], {1, 2, 3} ) );
exLevels = [1, 2, 3, 2, 1, 2, 3];
Show( Design Last( exLevels, {1, 2, 3} ) );
Show( Design( exLevels, {1, 2, 3} ) );
Show( Design Last( {"a", "b"}, {"a", "b", "c"} ) );
Show( Design( {"a", "b"}, {"a", "b", "c"} ) );

/* example that Design Last(...) takes three arguments */
Show( Design Last( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );
Show( Design Last( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Design Nom

**Sintaxis:** y = Design Nom( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Descripción:** Crea una matriz de diseño que contiene una columna de unos y ceros para todos los valores únicos del argumento, excepto para el último. El último nivel se codifica como una fila de menos unos.. Si se especifica el argumento levelsList, el último nivel es el último nivel de levelsList. De lo contrario, se define el último nivel como el mayor valor de v. Si se especifica el argumento <<Levels, el valor devuelto es una lista que contiene la matriz de diseño y una lista de los niveles. Si se especifica el argumento <<ElseMissing, se colocan los valores faltantes en la matriz de diseño para los valores del argumento v que no aparezcan en levelsList. De lo contrario, se colocan ceros en la matriz de diseño.

**JMP Versión agregada:** Antes de la versión 14

```jsl

/* example that Design Nom(...) takes one argument */
exLevels = [1, 2, 3, 2, 1];
Show( Design Nom( exLevels ) );
/* see what is different from Design(...) */
Show( Design( exLevels ) );

/* Also see Design, DesignOrd */

/* example that Design Nom(...) takes two arguments */
Show( Design Nom( 3, {1, 2, 3} ) );
Show( Design( 3, {1, 2, 3} ) );
Show( Design Nom( [1 2], {1, 2, 3} ) );
Show( Design( [1 2], {1, 2, 3} ) );
exLevels = [1, 2, 3, 2, 1, 2, 3];
Show( Design Nom( exLevels, {1, 2, 3} ) );
Show( Design( exLevels, {1, 2, 3} ) );
Show( Design Nom( {"a", "b"}, {"a", "b", "c"} ) );
Show( Design( {"a", "b"}, {"a", "b", "c"} ) );

 /* example that Design Nom(...) takes three arguments */
Show( Design Nom( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );
Show( Design Nom( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Design Ord

**Sintaxis:** y = Design Ord( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Descripción:** Crea una matriz de diseño que contiene una columna para todos los valores únicos del argumento, excepto para el último. El primer nivel se codifica como una fila de ceros. Cada nivel posterior del argumento levelsList se codifica como una fila de (n-1) unos y el resto de ceros. Si se especifica el argumento <<Levels, el valor devuelto es una lista que contiene la matriz de diseño y una lista de los niveles. Si se especifica el argumento <<ElseMissing, se colocan los valores faltantes en la matriz de diseño para los valores del argumento v que no aparezcan en levelsList. De lo contrario, se colocan ceros en la matriz de diseño.

**JMP Versión agregada:** Antes de la versión 14

```jsl

/* example that Design Ord(...) takes one argument */
exLevels = [1, 2, 3, 2, 1];
Show( Design Ord( exLevels ) );
/* see what is different from Design Nom(...) */
Show( Design Nom( exLevels ) );

/* Also see Design, Design Nom */

/* example that Design Ord(...) takes two arguments */
Show( Design Ord( 3, {1, 2, 3} ) );
Show( Design Nom( 3, {1, 2, 3} ) );
Show( Design Ord( [1 2], {1, 2, 3} ) );
Show( Design Nom( [1 2], {1, 2, 3} ) );
exLevels = [1, 2, 3, 2, 1, 2, 3];
Show( Design Ord( exLevels, {1, 2, 3} ) );
Show( Design Nom( exLevels, {1, 2, 3} ) );
Show( Design Ord( {"a", "b"}, {"a", "b", "c"} ) );
Show( Design Nom( {"a", "b"}, {"a", "b", "c"} ) );

/* example that Design Ord(...) takes three arguments */
Show( Design Ord( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );
Show( Design Ord( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### DesignF

**Sintaxis:** y = DesignF( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Descripción:** Crea una matriz de diseño que contiene una columna de unos y ceros para todos los valores únicos del argumento, excepto para el último. El último nivel se codifica como una fila de menos unos.. Si se especifica el argumento levelsList, el último nivel es el último nivel de levelsList. De lo contrario, se define el último nivel como el mayor valor de v. Si se especifica el argumento <<Levels, el valor devuelto es una lista que contiene la matriz de diseño y una lista de los niveles. Si se especifica el argumento <<ElseMissing, se colocan los valores faltantes en la matriz de diseño para los valores del argumento v que no aparezcan en levelsList. De lo contrario, se colocan ceros en la matriz de diseño.

**JMP Versión agregada:** Antes de la versión 14

```jsl

/* example that DesignF(...) takes one argument */
exLevels = [1, 2, 3, 2, 1];
Show( DesignF( exLevels ) );
/* see what is different from Design(...) */
Show( Design( exLevels ) );

/* Also see Design, DesignOrd */

/* example that DesignF(...) takes two arguments */
Show( DesignF( 3, {1, 2, 3} ) );
Show( Design( 3, {1, 2, 3} ) );
Show( DesignF( [1 2], {1, 2, 3} ) );
Show( Design( [1 2], {1, 2, 3} ) );
exLevels = [1, 2, 3, 2, 1, 2, 3];
Show( DesignF( exLevels, {1, 2, 3} ) );
Show( Design( exLevels, {1, 2, 3} ) );
Show( DesignF( {"a", "b"}, {"a", "b", "c"} ) );
Show( Design( {"a", "b"}, {"a", "b", "c"} ) );

/* example that DesignF(...) takes three arguments */
Show( DesignF( [1, 2, 3, 4, 5], {1, 2, 3, 4}, <<ElseMissing ) );
Show( DesignF( [1, 2, 3, 4, 5], {1, 2, 3, 4} ) );

```

### Desirability

**Sintaxis:** des = Desirability( yVector, dVector, y )

**Descripción:** Devuelve una curva de deseabilidad tal que yVector es un vector que contiene 3 valores de entrada, dVector son los 3 valores de deseabilidad correspondientes y y es el argumento del cual se desea calcular la deseabilidad.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dvec = [0.1 0.9 0.1];
yvec = [1 5 10];
New Window( "Desirability",
	Graph Box(
		X Scale( 0, 12 ),
		Y Scale( 0, 1 ),
		Frame Size( 500, 400 ),
		Drag Marker( yvec, dvec );
		Y Function( Desirability( yvec, dvec, x ), x );
	)
);

```

### Det

**Sintaxis:** y = Det( x )

**Descripción:** Devuelve el determinante de una matriz cuadrada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Det( [11 22, 33 44] );

```

### Diag

**Sintaxis:** y = Diag( matrix ); y = Diag( vector ); y = Diag( matrix1, matrix )

**Descripción:** Construye una matriz diagonal a partir de una matriz o un vector. Si se especifican dos argumentos, la función devuelve la concatenación diagonal de las matrices.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Diag( [11 22] );

```

### Dialog

**Sintaxis:** y = Dialog( specification )

**Descripción:** Muestra al usuario una ventana modal. Esta función está en desuso. Utilice la función Nueva ventana con el argumento <<Modal.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

// See Example 2 for the deprecated Dialog equivalent
If(
	ex = New Window( "Dialog() example",
		<<Modal,
		<<Return Result,
		V List Box(
			H List Box( "Set this value", variable = Number Edit Box( 42 ) ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	);
	ex["button"] == 1;
,
	ex["variable"],
	"CANCEL"
);

```

**Ejemplo 2**

```jsl

// Deprecated
If(
	ex = Dialog(
		Title( " Dialog() example" ),
		vlist(
			hlist( "Set this value", variable = EditNumber( 42 ) ),
			hlist( Button( "OK" ), Button( "Cancel" ) )
		)
	);
	ex["button"] == 1;
,
	ex["variable"],
	"CANCEL"
);

```

### Dif

**Sintaxis:** y = Dif( x, &lt;n=1&gt; )

**Descripción:** Devuelve x - Lag( x, n ), también conocida como "primera diferencia". Puesto que depende de Row(), Dif(), resulta útil principalmente en fórmulas de columna.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
Dif( :height, 2 );

```

### Digamma

**Sintaxis:** y = Digamma( x )

**Descripción:** Devuelve la función digamma evaluada en el punto x, donde la función digamma es la derivada del logaritmo de la función gamma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Digamma( 5 );

```

### Dim

**Sintaxis:** y = Dim(); y = Dim( dt ); y = Dim( matrix )

**Descripción:** Devuelve un vector de fila con las dimensiones de la tabla de datos actual, una tabla de datos especificada o una matriz. Las dimensiones son el número de filas y el número de columnas y se muestran en ese orden.

**JMP Versión agregada:** 14

```jsl

Dim( [11 22, 33 44, 55 66] );

```

### Direct Product

**Sintaxis:** y = Direct Product( A, B )

**Descripción:** Devuelve el producto directo o de Kronecker. El resultado tiene A[i,j]*B, que se extiende a todos los productos posibles.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exA = [1 2, 3 4];
exB = [1 1 1, 2 2 2, 3 3 3];
exProd = Direct Product( exA, exB );
Show( exProd );

/* verify results */
Show( exProd[1 :: 3, 1 :: 3] == exB );
Show( exProd[4 :: 6, 1 :: 3] == (exB * 3) );
Show( exProd[1 :: 3, 4 :: 6] == (exB * 2) );
Show( exProd[4 :: 6, 4 :: 6] == (exB * 4) );

/* Also see H Direct Product */

```

### Directory Exists

**Sintaxis:** rc = Directory Exists( path )

**Descripción:** Determina si existe el directorio. Devuelve 1 si existe la ruta de acceso. Devuelve 0 si la ruta de acceso no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

If( Directory Exists( "$SAMPLE_DATA/Loss Function Templates" ),
	"ok",
	"missing!"
);

```

### Disable JMP Live URL

**Sintaxis:** Disable JMP Live URL(url)

**Descripción:** Deshabilita una URL de JMP Live. Este método solo está disponible durante jmpStartAdmin.jsl. Se puede utilizar un asterisco * como comodín para especificar URL como * (cualquier URL), *.jmp.com (una URL que acabe en .jmp.com), http://public.* (una URL que comience por http://public.) o *public* (una URL que contenga el término public).

**JMP Versión agregada:** 15

```jsl


Disable JMP Live URL( "*public.jmp.com" );

```

### Disable Proxy Settings

**Sintaxis:** Disable Proxy Settings( 1|0 )

**Descripción:** Deshabilita o habilita la configuración de proxy durante la ejecución de jmpStartAdmin.jsl. La configuración de proxy está habilitada de forma predeterminada.

**JMP Versión agregada:** 15

```jsl


Disable Proxy Settings( 1 );

```

### Distance

**Sintaxis:** y = Distance( x1, x2, &lt;scales&gt;, &lt;powers&gt; )

**Descripción:** Genera una matriz de distancias entre filas de x1 y filas de x2. Para personalizar el escalado y las potencias de cada columna, especifique los argumentos adicionales scale y powers. Para kriging se utiliza Exp(-distance(x1,x2)).

**JMP Versión agregada:** Antes de la versión 14

```jsl

/*1-D example*/
exX1 = [1, 2, 3, 4];
exX2 = [2, 4, 6, 8]; 
/*Compute squared Euclidean distance*/
exD = Distance( exX1, exX2 ); 
/*Verify result*/
exDm = J( 4, 4, . );
For( exi = 1, exi <= 4, exi++,
	For( exj = 1, exj <= 4, exj++,
		exDm[exi, exj] = Sum( (exX1[exi, 0] - exX2[exj, 0]) ^ 2 )
	)
);
Show( exDm == exD ); 

/*2-D example*/
exX1 = [1 1, 2 2, 3 3, 4 4];
exX2 = [2 1, 4 2, 6 0, 8 7]; 
/*Compute squared Euclidean distance*/
exD = Distance( exX1, exX2 ); 
/*Verify result*/
exDm = J( 4, 4, . );
For( exi = 1, exi <= 4, exi++,
	For( exj = 1, exj <= 4, exj++,
		exDm[exi, exj] = Sum( (exX1[exi, 0] - exX2[exj, 0]) ^ 2 )
	)
);
Show( exDm == exD ); 

/*2-D example*/
exX1 = [1 1, 2 2, 3 3, 4 4];
exX2 = [2 1, 4 2, 6 0, 8 7]; 
/*Compute squared Euclidean distance, with a scaler [0.5 2.0]*/
exD = Distance( exX1, exX2, [0.5 2.0] ); 
/*Verify result*/
exDm = J( 4, 4, . );
For( exi = 1, exi <= 4, exi++,
	For( exj = 1, exj <= 4, exj++,
		exDm[exi, exj] = Sum( [0.5 2.0] :* (Abs( exX1[exi, 0] - exX2[exj, 0] ) ^ 2) )
	)
);
Show( exDm == exD ); 

/*2-D example*/
exX1 = [1 1, 2 2, 3 3, 4 4];
exX2 = [2 1, 4 2, 6 0, 8 7]; 
/*Compute squared Euclidean distance, with scalers [0.5 2.0] and powers [1.5 2.0]*/
exD = Distance( exX1, exX2, [0.5 2.0], [1.5 2.0] ); 
/*Verify result*/
exDm = J( 4, 4, . );
For( exi = 1, exi <= 4, exi++,
	For( exj = 1, exj <= 4, exj++,
		exDm[exi, exj] = Sum(
			[0.5 2.0] :* (Abs( exX1[exi, 0] - exX2[exj, 0] ) :^ [1.5 2.0])
		)
	)
);
Show( exDm == exD );

```

### Divide

**Sintaxis:** y = x0 / x1; y = Divide( x0, &lt;x1&gt;, ... )

**Descripción:** Divide todos los argumentos posteriores a partir del primer argumento. Los argumentos pueden ser números, matrices o listas de números. Cuando se llama con un solo argumento, el resultado será el recíproco.

**JMP Versión agregada:** Antes de la versión 14

**Recíproco**

```jsl

x = Divide( 5 );
y = 1 / 5;
Show( x, y );

```

**Simple**

```jsl

6 / 3 / 2;

```

### Divide To

**Sintaxis:** y /= x; Divide To( y, x )

**Descripción:** Divide un valor en una variable o lista de variables.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex = 1;
ex /= 2;
ex;

```

### Double Declining Balance

**Sintaxis:** x = Double Declining Balance( cost, salvage, life, period, &lt;factor=2&gt; )

**Descripción:** Devuelve la devaluación de un activo en el período indicado usando el método de balance de doble-declinación u otro factor de depreciación. Equivale a la función DDB de Microsoft Excel.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Double Declining Balance( 10000, 100, 3, 2 );

```

### Drag Line

**Sintaxis:** Drag Line( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Descripción:** Dibuja una línea poligonal pasando por los puntos indicados. Sin embargo, a diferencia de Line, los puntos se pueden arrastrar por la pantalla, con lo cual se actualizan los valores de las matrices empleadas como argumentos (LValue).

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Line( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Marker

**Sintaxis:** Drag Marker( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Descripción:** Dibuja marcadores móviles en los puntos indicados. Los valores de la matriz se actualizan a medida que los marcadores se mueven.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Marker( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Polygon

**Sintaxis:** Drag Polygon( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Descripción:** Dibuja un polígono lleno en los puntos indicados. Los puntos se pueden arrastrar por la pantalla, con lo cual se actualizan los valores de los argumentos de la matriz (LValue).

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Polygon( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Rect

**Sintaxis:** Drag Rect( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Descripción:** Dibuja un rectángulo en los puntos indicados. Sin embargo, a diferencia de Rect, las esquinas se pueden arrastrar por la pantalla, con lo cual se actualizan los valores de las matrices empleadas como argumentos (LValue).

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	exx = [11 33];
	exy = [88 22];,
	Graph Box(
		Drag Rect( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Text

**Sintaxis:** Drag Text( xMatrixName, yMatrixName, text, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Descripción:** Dibuja el texto en los puntos indicados. A diferencia de la función Text(), no obstante, los puntos se pueden arrastrar por la pantalla, lo cual provoca la actualización de los valores de las matrices en los argumentos xMatrixName y yMatrixName. El argumento text puede ser un argumento de cadena de caracteres o una lista de cadenas de caracteres.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Text( exx, exy, "hello" );
		Line( exx, exy );
	)
);

```

### Dunnett P value

**Sintaxis:** p = Dunnett P value( q, nTrt, dfe, &lt;lambdaVec = .&gt; )

**Descripción:** Devuelve el valor p de la prueba de comparaciones múltiples de Dunnett, donde q es el estadístico de prueba, nTrt es el número de tratamientos que se comparan con el grupo de control, dfe son los grados de libertad del error (basados en la muestra total del estudio) y el valor lambdaVec opcional es un vector de parámetros que se establece en 1/sqrt(2) de forma predeterminada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Dunnett P value( 1.67623, 3, 11 );

```

### Dunnett Quantile

**Sintaxis:** q = Dunnett Quantile( 1-alpha, nTrt, dfe, &lt;lambdaVec = .&gt; )

**Descripción:** Devuelve el cuantil necesario de la prueba de comparaciones múltiples de Dunnett, donde 1-alpha es el nivel de confianza, nTrt es el número de tratamientos que se comparan con el grupo de control, dfe son los grados de libertad del error (basados en la muestra total del estudio) y el valor lambdaVec opcional es un vector de parámetros que se establece en 1/sqrt(2) de forma predeterminada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Dunnett Quantile( 0.95, 3, 11 );

```

### e

**Sintaxis:** y = e()

**Descripción:** Devuelve la constante matemática e, con una precisión aproximada de 15 decimales: 2.7182818....

**JMP Versión agregada:** Antes de la versión 14

```jsl

Round( e(), 10 );

```

### E Div

**Sintaxis:** y = A :/ B; y = E Div( A, B )

**Descripción:** Devuelve una división de matrices por elementos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

[11 22 33] :/ [1 2 3];

```

### E Max

**Sintaxis:** y = E Max( A, B )

**Descripción:** Devuelve una matriz que es el máximo de elementos correspondientes de sus argumentos.

**JMP Versión agregada:** 16

```jsl

E Max( [1 22 33], [11 2 3] );

```

### E Min

**Sintaxis:** y = E Min( A, B )

**Descripción:** Devuelve una matriz que es el mínimo de elementos correspondientes de sus argumentos.

**JMP Versión agregada:** 16

```jsl

E Min( [1 22 33], [11 2 3] );

```

### E Mult

**Sintaxis:** y = A :* B; y = E Mult( A, B )

**Descripción:** Devuelve una multiplicación de matrices por elementos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

[1 2 3] :* [11 22 33];

```

### Eigen

**Sintaxis:** {M, E} = Eigen( X )

**Descripción:** Realiza la descomposición en valores propios de una matriz simétrica X. Devuelve la lista {M, E} tal que E*Diag(M)*E` = X.

**JMP Versión agregada:** Antes de la versión 14

```jsl

X = [11 22, 22 33];
{M, E} = Eigen( X );
E * Diag( M ) * E`;

```

### Eigen BLAS

**Sintaxis:** z = Eigen BLAS( X, &lt;nvec = ncol&gt; )

**JMP Versión agregada:** 17

```jsl

X = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];
{M1, E1} = Eigen BLAS( X );

```

### Empty

**Sintaxis:** y = Empty()

**Descripción:** Devuelve un valor vacío. Se usa en el editor de fórmulas para argumentos no especificados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Empty();

```

### Enable JMP Live URL

**Sintaxis:** Enable JMP Live URL(url)

**Descripción:** Habilita una URL de JMP Live. Este método solo está disponible durante jmpStartAdmin.jsl. Se puede utilizar un asterisco * como comodín para especificar URL como * (cualquier URL), *.jmp.com (una URL que acabe en .jmp.com), http://public.* (una URL que comience por http://public.) o *public* (una URL que contenga el término public).

**JMP Versión agregada:** 15

```jsl


Enable JMP Live URL( "https://public.jmp.com" );

```

### Enable Proxy Settings

**Sintaxis:** Enable Proxy Settings( 1|0 )

**Descripción:** Habilita o deshabilita la configuración de proxy durante la ejecución de jmpStartAdmin.jsl. La configuración de proxy está habilitada de forma predeterminada.

**JMP Versión agregada:** 15

```jsl


Enable Proxy Settings( 0 );

```

### Encode URI

**Sintaxis:** Encode URI( value )

**Descripción:** Codificar la cadena usando la codificación URI

**JMP Versión agregada:** 14

```jsl


Encode URI( "Foo Bar" );

```

### Encode64 Blob

**Sintaxis:** s = Encode64 Blob( x )

**Descripción:** Codifica un blob en una cadena imprimible de texto Base 64.

**JMP Versión agregada:** 14

```jsl

Encode64 Blob( Char To Blob( "the quick brown fox" ) );

```

### Encode64 Double

**Sintaxis:** s = Encode64 Double( x )

**Descripción:** Devuelve una cadena codificada en Base64 correspondiente al número de coma flotante.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Encode64 Double( -1.5831 );

```

### Ends With

**Sintaxis:** b = Ends With( s, sub )

**Descripción:** Devuelve 1 si s termina con sub y 0 en caso contrario. Los argumentos s y sub pueden ser ambos cadenas de caracteres o ambos listas. Equivale a Right( s, Length( sub )) == sub.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Ends With( "http://www.jmp.com", ".com" );

```

### Equal

**Sintaxis:** z = x == y == ...; z = Equal( x, y, ... )

**Descripción:** Devuelve 1 si cada argumento es igual al siguiente y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

1 == 1;

```

### Estimate Bartlett Factor Score

**Sintaxis:** {factorScores} = Estimate Bartlett Factor Score( dataRow , mvMeanVec, lvMeanVec, modSRAM, modARAM )

**Descripción:** Estima puntuaciones factoriales, empleando el método de Bartlett, a partir de un modelo de ecuación estructural (SEM). Los argumentos de entrada son un vector fila de datos, la media implicada por el modelo para las variables manifiestas, la media implicada por el modelo para las variables latentes, una matriz S RAM de un SEM y una matriz A RAM de un SEM. Devuelve un vector fila con puntuaciones factoriales estimadas basadas en el SEM.

**JMP Versión agregada:** 16

```jsl

Estimate Bartlett Factor Score(
	[2 2 0],
	[2.085 2.76 1.56],
	[0],
	[1 0 0 0 0,
	0 0.684181992749 0 0 0,
	0 0 1.19686444665695 0 0,
	0 0 0 0.875198112795068 0,
	0 0 0 0 0.953592961124492],
	[0 0 0 0 0,
	2.085 0 0 0 1,
	2.76 0 0 0 0.61913203807175,
	1.56 0 0 0 0.710365935511608,
	0 0 0 0 0]
);

```

### Estimate Factor Score

**Sintaxis:** {factorScores} = Estimate Factor Score( dataRow , modImpVarCov, mvMeanVec, lvMeanVec )

**Descripción:** Estima puntuaciones factoriales, empleando el método de regresión, a partir de un modelo de ecuación estructural (SEM). Los argumentos de entrada son un vector fila de los datos, una matriz de varianzas-covarianzas implicada por el modelo, un vector de medias de variables de manifiesto implicadas por el modelo y un vector de medias de variables latentes implicadas por el modelo. Devuelve un vector fila con puntuaciones factoriales estimadas basadas en el SEM.

**JMP Versión agregada:** 15

```jsl

Estimate Factor Score(
	[7 10 5 2 2 0],
	[1.66 0.45 0.58 -0.58 -0.44 -0.5 0.59 -0.58,
	0.45 1.22 0.44 -0.44 -0.33 -0.38 0.45 -0.44,
	0.58 0.44 1.88 -0.57 -0.43 -0.49 0.58 -0.57,
	-0.58 -0.44 -0.57 1.64 0.57 0.65 -0.58 0.76,
	-0.44 -0.33 -0.43 0.57 1.56 0.49 -0.44 0.57,
	-0.5 -0.38 -0.49 0.65 0.49 1.36 -0.5 0.65,
	0.59 0.45 0.58 -0.58 -0.44 -0.5 0.59 -0.58,
	-0.58 -0.44 -0.57 0.76 0.57 0.65 -0.58 0.76],
	[6.59, 8.81, 2.92, 2.09, 2.76, 1.56],
	[0, 0]
);

```

### Eval

**Sintaxis:** y = Eval( x )

**Descripción:** Evalúa el argumento y devuelve el resultado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval( Expr( 1 + 2 ) );

```

### Eval Expr

**Sintaxis:** y = Eval Expr( x )

**Descripción:** Devuelve una copia de la expresión x donde cada una de las cláusulas Expr() dentro de x está sustituida por el valor calculado correspondiente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval Expr( Length( Expr( "X" || Char( 12 ) ) ) );

```

### Eval Insert

**Sintaxis:** y = Eval Insert( string, &lt;startChar="^"&gt;, &lt;endChar=startChar&gt; )

**Descripción:** Busca subcadenas de caracteres delimitadas por el par startChar/endChar y las sustituye por la expresión evaluada en el interior.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval Insert( "Today is ^As Date( Today())^" );

```

### Eval Insert Into

**Sintaxis:** Eval Insert Into( l_string, &lt;startChar="^"&gt;, &lt;endChar=startChar&gt; )

**Descripción:** Busca subcadenas de caracteres delimitadas por el par startChar/endChar y las sustituye por la expresión evaluada en el interior, sustituyendo l_string.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex = "Today is ^As Date( Today())^";
Eval Insert Into( ex );
ex;

```

### Eval List

**Sintaxis:** y = Eval List( list )

**Descripción:** Devuelve una lista donde cada uno de sus elementos ha sido evaluado.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Eval List( {1 + 2, 3 + 4} );

```

**Ejemplo 2**

```jsl

x = 5;
y = 10;
Eval List( {x, y} );

```

### Excerpt Box

**Sintaxis:** y = Excerpt Box( rptnum, lstSubscripts )

**Descripción:** Devuelve un cuadro de visualización que contiene el extracto designado por el informe número rptnum y la lista de índices de visualización lstSubscripts. Estos índices reflejan el estado actual del informe después de eliminar los extractos anteriores.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### Excluded

**Sintaxis:** y = Excluded( &lt;rs&gt; ); Excluded( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Descripción:** Devuelve el componente de exclusión del valor de estado de fila especificado, 0 o 1. Si la función Excluded() se usa como L-value, cambia el estado de exclusión de la fila actual (o la r-ésima) de la tabla de datos actual.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );
Row() = 3;
Excluded();

```

### Excluded State

**Sintaxis:** rs = Excluded State( x )

**Descripción:** Devuelve un valor de estado de fila con la componente de exclusión ajustada al valor especificado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );

```

### Execute SQL

**Sintaxis:** dt = Execute SQL(databaseConnectionHandle|dataConnector, "SELECT ..."|"SQLFILE=..."|tableName, &lt;invisible(0|1)&gt;, &lt;outputTableName&gt;, &lt;Batch Submit(0|1)&gt; )

**Descripción:** Ejecuta una instrucción SQL sobre una conexión de base de datos devuelta desde Crear conexión a base de datos o un conector de datos. Habilitar el envío por lotes permite recibir múltiples resultados de múltiples instrucciones SQL, lo que devuelve una lista con los resultados (solo controladores compatibles).

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

dt = Execute SQL(
	databaseConnectionHandle,
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"NewTable"
);

```

**Ejemplo 2**

```jsl

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
dt = Execute SQL( dc, "SELECT HEIGHT, WEIGHT FROM Bigclass" );

```

**Ejemplo 3**

```jsl

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
resultList = Execute SQL(
	dc,
	"SELECT HEIGHT, WEIGHT FROM Bigclass; SELECT AGE, WEIGHT FROM BigClass;",
	Batch Submit( 1 )
);

```

### ExGaussian Density

**Sintaxis:** y = ExGaussian Density( x, location, scale, shape )

**Descripción:** Devuelve la densidad en x de una distribución exgaussiana.

**JMP Versión agregada:** 18

```jsl

New Window( "Example: ExGaussian Density",
	y = Graph Box(
		Y Scale( 0, .2 ),
		X Scale( -2, 15 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( ExGaussian Density( x, 0, .5, .25 ), x );
	)
);

```

### ExGaussian Distribution

**Sintaxis:** y = ExGaussian Distribution( x, location, scale, shape )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución exgaussiana sea menor que x.

**JMP Versión agregada:** 18

```jsl

New Window( "Example: ExGaussian Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -2, 15 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( ExGaussian Distribution( x, 0, .5, .25 ), x );
	)
);

```

### ExGaussian Quantile

**Sintaxis:** q = ExGaussian Quantile( p, mu, sigma, lambda )

**Descripción:** Devuelve el cuantil de una distribución exgaussiana, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** 18

```jsl

New Window( "Example: ExGaussian Quantile",
	Graph Box(
		Y Scale( -2, 15 ),
		X Scale( 0, 1 ),
		XName( "p" ),
		Pen Color( "red" );
		Y Function( ExGaussian Quantile( p, 0, .5, .25 ), p );
	)
);

```

### Exit

**Sintaxis:** Quit(&lt;"No Save"&gt;); Exit(&lt;"No Save"&gt;)

**Descripción:** Sale de JMP.

**JMP Versión agregada:** Antes de la versión 14

```jsl

If(
	New Window( "Exit() example",
		<<Type( "Modal" ),
		Text Box( "Shut down JMP?" ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)["Button"] == 1, /*OK==1*/Exit(), /*cancel==-1*/"Good choice."
);

```

### Exp

**Sintaxis:** y = Exp( &lt;x=1&gt; )

**Descripción:** Devuelve e elevado a la potencia x. El argumento puede ser un número, una matriz o una lista de números.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Round( Exp( 1 ), 5 );

```

### Exp Density

**Sintaxis:** y = Exp Density( x, &lt;theta=1&gt; )

**Descripción:** Devuelve la densidad en x de una distribución exponencial con parámetro theta.

**JMP Versión agregada:** 14

```jsl

New Window( "Example: Exp Density",
	y = Graph Box(
		Y Scale( 0, 0.45 ),
		X Scale( 0, 4 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Exp Density( x, 2 ), x );
	)
);

```

### Exp Distribution

**Sintaxis:** p = Exp Distribution( x, &lt;theta=1&gt; )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución exponencial sea menor que x.

**JMP Versión agregada:** 14

```jsl

New Window( "Example: Exp Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 4 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Exp Distribution( x, 2 ), x );
	)
);

```

### Exp Quantile

**Sintaxis:** q = Exp Quantile( p, &lt;theta=1&gt; )

**Descripción:** Devuelve el cuantil de una distribución exponencial, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** 14

```jsl

New Window( "Example: Exp Quantile",
	y = Graph Box(
		Y Scale( 0, 4 ),
		X Scale( 0, 1 ),
		Pen Color( "red" );
		Y Function( Exp Quantile( qq, 2 ), qq );
	)
);

```

### ExpM1

**Sintaxis:** y = ExpM1( x )

**Descripción:** Devuelve un cálculo más exacto de Exp(x)-1 cuando x es muy pequeño.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show( ExpM1( 1.1e-18 ), Exp( 1.1e-18 ) - 1 );

```

### Exponential Density

**Sintaxis:** y = Exponential Density( x, &lt;theta=1&gt; )

**Descripción:** Devuelve la densidad en x de una distribución exponencial con parámetro theta.

**JMP Versión agregada:** 17

```jsl

New Window( "Example: Exponential Density",
	y = Graph Box(
		Y Scale( 0, 0.45 ),
		X Scale( 0, 4 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Exponential Density( x, 2 ), x );
	)
);

```

### Exponential Distribution

**Sintaxis:** p = Exponential Distribution( x, &lt;theta=1&gt; )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución exponencial sea menor que x.

**JMP Versión agregada:** 17

```jsl

New Window( "Example: Exponential Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 4 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Exponential Distribution( x, 2 ), x );
	)
);

```

### Exponential Quantile

**Sintaxis:** q = Exponential Quantile( p, &lt;theta=1&gt; )

**Descripción:** Devuelve el cuantil de una distribución exponencial, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** 17

```jsl

New Window( "Example: Exponential Quantile",
	y = Graph Box(
		Y Scale( 0, 4 ),
		X Scale( 0, 1 ),
		Pen Color( "red" );
		Y Function( Exponential Quantile( qq, 2 ), qq );
	)
);

```

### Expr

**Sintaxis:** y = Expr( x )

**Descripción:** Devuelve el argumento sin evaluar. Se utiliza para entrecomillar expresiones.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Expr( x + y );

```

### Expr As Picture

**Sintaxis:** y = Expr As Picture( expr( ... ), &lt;width in pixels&gt;, &lt;Max Matrix Size( dim )&gt; )

**Descripción:** Devuelve una imagen que contiene la expresión especificada como imagen de la fórmula. El ancho predeterminado es 600 píxeles y el tamaño de matriz máximo predeterminado es 100.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Extract Expr

**Sintaxis:** y = Extract Expr( expr, pattern )

**Descripción:** Devuelve una expresión secundaria que corresponde con el patrón especificado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Extract Expr( a + b * c, Wild() * Wild() );

```

### F Density

**Sintaxis:** y = F Density( q, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve la densidad en q de una distribución F con dfn y dfd grados de libertad.

**JMP Versión agregada:** Antes de la versión 14

```jsl

fdedfn = 2;
fdedfd = 2;
New Window( "Example: F Density",
	fdey = Graph Box(
		Y Scale( 0, 0.8 ),
		X Scale( 0, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Density( fdeq, fdedfn, fdedfd ), fdeq );
		Text( {2.5, 0.7}, "dfn=", Round( fdedfn, 2 ), " dfd=", Round( fdedfd, 2 ) );
	),
	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, fdedfn, fdey << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 1, 10, fdedfd, fdey << reshow ) )
);

```

### F Distribution

**Sintaxis:** y = F Distribution( q, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución F sea menor que q.

**JMP Versión agregada:** Antes de la versión 14

```jsl

fdidfn = 5;
fdidfd = 5;
New Window( "Example: F Distribution",
	fdiy = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Distribution( fdiq, fdidfn, fdidfd ), fdiq );
		Text( {0.5, 0.9}, "dfn=", Round( fdidfn, 2 ), " dfd=", Round( fdidfd, 2 ) );
	),
	H List Box( Text Box( "dfn " ), Slider Box( 0.5, 10, fdidfn, fdiy << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 0.5, 10, fdidfd, fdiy << reshow ) )
);

```

### F Log CDistribution

**Sintaxis:** y = F Log CDistribution( x, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve el logaritmo de 1- la distribución F.

**JMP Versión agregada:** Antes de la versión 14

```jsl

flcddfn = 5;
flcddfd = 5;
New Window( "Example: F Log CDistribution",
	flcdy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Log CDistribution( flcdq, flcddfn, flcddfd ), flcdq );
		Text( {0.5, -0.9}, "dfn=", Round( flcddfn, 2 ), " dfd=", Round( flcddfd, 2 ) );
	),
	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, flcddfn, flcdy << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 1, 30, flcddfd, flcdy << reshow ) )
);

```

### F Log Density

**Sintaxis:** y = F Log Density( x, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve el logaritmo de la densidad de probabilidad F.

**JMP Versión agregada:** Antes de la versión 14

```jsl

fldedfn = 1;
fldedfd = 1;
New Window( "Example: F Log Density",
	fldey = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Log Density( fldeq, fldedfn, fldedfd ), fldeq );
		Text( {2.5, -0.7}, "dfn=", Round( fldedfn, 2 ), " dfd=", Round( fldedfd, 2 ) );
	),
	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, fldedfn, fldey << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 1, 10, fldedfd, fldey << reshow ) )
);

```

### F Log Distribution

**Sintaxis:** y = F Log Distribution( x, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve el logaritmo de la distribución F.

**JMP Versión agregada:** Antes de la versión 14

```jsl

flddfn = 5;
flddfd = 5;
New Window( "Example: F Log Distribution",
	fldy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 10 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Log Distribution( fldq, flddfn, flddfd ), fldq );
		Text( {0.5, -0.9}, "dfn=", Round( flddfn, 2 ), " dfd=", Round( flddfd, 2 ) );
	),
	H List Box( Text Box( "dfn " ), Slider Box( 1, 10, flddfn, fldy << reshow ) ),
	H List Box( Text Box( "dfd " ), Slider Box( 1, 30, flddfd, fldy << reshow ) )
);

```

### F Noncentrality

**Sintaxis:** nc = F Noncentrality( x, dfnum, dfden, prob )

**Descripción:** Resuelve el parámetro de no centralidad nc tal que prob = F Distribution( x, ndf, ddf, nc ).

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example: F Noncentrality",
	fncgr = Graph Box(
		Y Scale( 0.01, 0.99 ),
		X Scale( 0.01, 0.99 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( F Noncentrality( 3, 2, 5, F Distribution( 3, 2, 5, q ) ), q );
	)
);
F Noncentrality( 3, 2, 5, F Distribution( 3, 2, 5, 0.4 ) );

```

### F Power

**Sintaxis:** p = F Power( alpha, dfh, dfm, d, n )

**Descripción:** Calcula la potencia de una Prueba F, donde alpha es el nivel de significación, dfh son los grados de libertad de la hipótesis, dfm son los grados de libertad del modelo completo, d es el tamaño del efecto al cuadrado SSH/(n*sigma^2) donde SSH es la suma de cuadrados de la hipótesis y n es el número total de observaciones. Nótese que, para el modelo ANOVA, d = Sum(a[i]^2)/(k * sigma^2) donde a[i] son efectos y k es el número de medias.

**JMP Versión agregada:** Antes de la versión 14

```jsl

alpha = 0.05;
obs = 25;
dfh = 5;
dfm = 5;
d = 1;
New Window( "Example: F Power (alpha=.05,dfh=5,dfm=5)",
	fpdigr = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( 0, 1 ),
		YName( "Power" ),
		XName( "d" ),
		Pen Color( "red" );
		Y Function( F Power( alpha, dfh, dfm, d, obs ), d );
		Text( {0.75, 0.1}, "obs=", Round( obs ) );
	),
	H List Box( Text Box( "obs" ), Slider Box( 10, 100, obs, fpdigr << reshow ) )
);

```

### F Quantile

**Sintaxis:** q = F Quantile( p, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve el cuantil de una distribución F, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** Antes de la versión 14

```jsl

F Quantile( 0.7, 5, 3 );

```

### F Sample Size

**Sintaxis:** n = F Sample Size( alpha, dfh, dfm, d, power )

**Descripción:** Calcula el tamaño muestral, donde alpha es el nivel de significación, dfh son los grados de libertad de la hipótesis, dfm son los grados de libertad del modelo completo, d es el tamaño del efecto al cuadrado SSH/(n*sigma^2) donde SSH es la suma de cuadrados de la hipótesis y power es la potencia deseada. Nótese que, para el modelo ANOVA, d = Sum(a[i]^2)/(k * sigma^2) donde a[i] son efectos y k es el número de medias.

**JMP Versión agregada:** Antes de la versión 14

```jsl

alpha = 0.05;
pow = 0.6;
dfh = 5;
dfm = 5;
d = 1;
New Window( "Example: F Sample Size (alpha=.05,dfh=5,dfm=5)",
	fpdigr = Graph Box(
		Y Scale( 0, 50 ),
		X Scale( 0.5, 5 ),
		YName( "Sample Size" ),
		XName( "d" ),
		Pen Color( "red" );
		Y Function( F Sample Size( alpha, dfh, dfm, d, pow ), d );
		Text( {0.75, 0.2}, "power=", Round( pow, 2 ) );
	),
	H List Box( Text Box( "power" ), Slider Box( 0.2, 0.95, pow, fpdigr << reshow ) )
);

```

### Factorial

**Sintaxis:** y = Factorial( x )

**Descripción:** Devuelve el factorial de x, que es lo mismo que Gamma( x + 1 ). Si x es un entero, el resultado es el producto 1 * 2 * ... * x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Factorial( 5 );

```

### Faure Quasi Random Sequence

**Sintaxis:** points = Faure Quasi Random Sequence(nDim, nRow)

**Descripción:** Genera una secuencia de números casi aleatorios que llenan el espacio con la secuencia de Faure.

**JMP Versión agregada:** Antes de la versión 14

```jsl

A = Faure Quasi Random Sequence( 3, 100 );
As Table( A );
Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### FDR Adjust

**Sintaxis:** y = FDR Adjust( matrix )

**Descripción:** Devuelve el ajuste de la tasa de falsos descubrimientos para los valores p especificados utilizando el método Benjamini-Hochberg.

**JMP Versión agregada:** 19

```jsl

FDR Adjust( [0.5, 0.2, 0.05, 0.01] );

```

### FFT

**Sintaxis:** ret = FFT( L, &lt;&lt;inverse( 0 ), &lt;&lt;multivariate( 0 ), &lt;&lt;scale( 1.0 ) )

**Descripción:** Realiza una transformada rápida de Fourier (FFT) del argumento L, una lista obligatoria de las partes real e imaginaria de los datos en forma matricial. Si L consiste en solo una matriz, se considera que la matriz es la parte real. Si L consiste en dos matrices, la primera es la parte real y la segunda la imaginaria. Las dos matrices deben tener las mismas dimensiones y contener más de una fila. Hay tres argumentos opcionales. El argumento inverse determina si se debe realizar la FFT inversa. El argumento multivariate determina si se debe realizar FFT espacial o multivariante. El argumento scale determina la constante por la cual se deben multiplicar los valores resultantes. El valor devuelto es una lista de dos matrices con las mismas dimensiones que el primer argumento introducido.

**JMP Versión agregada:** Antes de la versión 14

```jsl

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

### File Exists

**Sintaxis:** rc = File Exists( path )

**Descripción:** Determina si existe el archivo. Devuelve 1 si existe la ruta de acceso al archivo. Devuelve 0 si la ruta de acceso no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

If( File Exists( "$SAMPLE_DATA/Big Class.jmp" ),
	"ok",
	"missing!"
);

```

### File Size

**Sintaxis:** size = File Size( path )

**Descripción:** Devuelve el tamaño del archivo en la ruta especificada. Devuelve un valor faltante cuando la ruta al archivo no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

File Size( "$SAMPLE_DATA/Big Class.jmp" );

```

### Files In Directory

**Sintaxis:** y = Files In Directory( "path", &lt;recursive(0|1)&gt;, &lt;include hidden(0|1)&gt; )

**Descripción:** Devuelve la lista de nombres de archivo de un directorio especificado por path. Si no se especifica el argumento Recursive, se incluyen los nombres de directorio en la lista.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Files In Directory( "$HOME" );

```

**Ejemplo 2**

```jsl

Filter Each( {fn}, Files In Directory( "$SAMPLE_DATA", recursive( 1 ) ),
	Contains( Lowercase( fn ), "stacked" )
);

```

### Fill Color

**Sintaxis:** Fill Color( &lt;name|index|rgbList&gt; )

**Descripción:** Establece el color para dibujar áreas rellenas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( {1, 1, .5} );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

### Fill Pattern

**Sintaxis:** Fill Pattern( name|mask|image )

**Descripción:** Establece el patrón para dibujar áreas rellenas. Una máscara es una matriz de valores comprendidos entre 0 y 1 que se aplicarán al color de relleno actual.

**JMP Versión agregada:** Antes de la versión 14

**Imagen**

```jsl


image = New Image( "$SAMPLE_IMAGES/pi.gif" );
New Window( "Example",
	Graph Box(
		Fill Pattern( image );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

**Máscara**

```jsl

New Window( "Example",
	Graph Box(
		Fill Pattern( [1 0.5 0 0, 0.5 0 0 1, 0 0 1 0.5, 0 1 0.5 0] );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

### Filter Col Selector

**Sintaxis:** y = Filter Col Selector(&lt;Data Table(name)&gt;, &lt;width(pixels)&gt;, &lt;nlines(n)&gt;, &lt;script&gt;, &lt;onchange(expr)&gt;)

**Descripción:** Devuelve un cuadro de visualización que contiene una lista de elementos. El control permite el filtrado de columnas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example", fontobj = lb = Filter Col Selector( width( 250 ) ) );

```

### Filter Each

**Sintaxis:** list = Filter Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;locals list&gt;, body)

**Descripción:** Realiza lo mismo que la función Para cada, pero también devuelve una lista de valores filtrados del contenedor original basada en un resultado de valores booleanos. El tipo de resultado coincidirá con el tipo de contenedor de entrada. Para la entrada Matriz, se devolverá una matriz de vectores fila, puesto que no se puede saber el tamaño de la matriz.

**JMP Versión agregada:** 16

**Associative Array**

```jsl

values = Filter Each( {{key, value}}, ["A" => 8, "B" => 6, "C" => 10], value > 6 );
Show( values );

```

**Expression**

```jsl

values = Filter Each( {value}, Expr( MyExpr( 1, 2, 3, 4 ) ), Mod( value, 2 ) == 0 );
Show( values );

```

**List**

```jsl

values = Filter Each( {x}, {0, -5, 2, -10, 4}, x > 0 );
Show( values );

```

**Matrix**

```jsl

values = Filter Each( {x, i}, 100 :: 120, i > 10 );
Show( values );

```

### Find All

**Sintaxis:** Find All( &lt;Project(title|index|box|window)&gt;, Data Tables | Reports | Journals, &lt;invisible | private&gt; )

**Descripción:** Busca todos los recursos abiertos de un tipo específico: tablas de datos, diarios o informes.



Solo se incluirán las ventanas del proyecto actual (o de ningún proyecto si no se ejecuta el script en un proyecto). Para especificar un proyecto, utilice el argumento opcional Project() con un título, índice, cuadro de visualización u objeto de ventana. Utilice Project(0) para no especificar ningún proyecto cuando se ejecute el script en un proyecto.

**JMP Versión agregada:** 14

```jsl


exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );
windows = Find All( Data Tables );
For( i = 1, i <= N Items( windows ), i++,
	Write( Char( windows[i] << Get Window Title ) || "\!N" )
);

```

### First

**Sintaxis:** y = First( x1, x2, ... )

**Descripción:** Evalúa todos los argumentos y devuelve el valor del primero.

**JMP Versión agregada:** Antes de la versión 14

```jsl

First( 11, 22 );

```

### Fit Censored

**Sintaxis:** result = FitCensored( Distribution(name), YLow(vector) | Y(vector), &lt;YHigh(vector)&gt;, &lt;Weight(vector)&gt;, &lt;X(matrix)&gt;, &lt;Z(matrix)&gt;, &lt;HoldParm(vector)&gt;, &lt;Use random sample to compute initial values(percent)&gt;, &lt;Use first N observations to compute initial values(nobs)&gt; )

**Descripción:** Ajusta una distribución de datos censurados. Los argumentos necesarios son Distribution y YLow o Y. La función devuelve una lista que contiene las estimaciones de los parámetros, matriz de covarianza, log-verosimilitud, AICc, BIC y un mensaje de convergencia. Los argumentos X y Z especifican las matrices de diseño de regresión para la localización y la escala, respectivamente. Cuando el vector de datos tiene un gran tamaño, pueden utilizarse dos argumentos opcionales para especificar una muestra para calcular los valores iniciales. Puede especificar un percent de las observaciones o las primeras nobs observaciones, pero el tamaño muestral total debe ser superior a 100.

**JMP Versión agregada:** Antes de la versión 14

```jsl

result = Fit Censored(
	Distribution( "Weibull" ),
	Y( [142, 156, 163, 198, 204, 205, 232, 239, 240, 261, 280, 296, 323, 344] )
);
Show( result );

```

### Fit Circle

**Sintaxis:** {xCenter, yCenter, radius, sse} = Fit Circle( Xvec, Yvec )

**Descripción:** Ajusta el círculo que mejor pasa por tres o más puntos definidos por dos vectores de coordinadas. El resultado es una lista que contiene las coordenadas X e Y del punto central del círculo, la longitud del radio y la suma de cuadrados de los errores.

**JMP Versión agregada:** 14

```jsl

x = [68, 77, 85, 88, 93, 93, 95, 98];
y = [1, 9, 18, 94, 35, 82, 40, 59];
result = Fit Circle( x, y );
New Window( "Fit Circle",
	Graph Box(
		X Scale( -50, 100 ),
		Y Scale( -20, 130 ),
		FrameSize( 300, 300 ),
		Marker( x, y );
		Circle( {result[1], result[2]}, result[3] );
	)
);

```

### Fit Transform To Normal

**Sintaxis:** result = Fit Transform To Normal( Distribution(name), Y(vector), &lt;Freq(vector)&gt; )

**Descripción:** Ajusta una transformación de datos vectoriales a la normalidad. Esto incluye las distribuciones Johnson Sl, Johnson Sb, Johnson Su y Logaritmo generalizado. La función devuelve una lista que contiene las estimaciones de los parámetros, la matriz de covarianza, la log-verisimilitud, AICc, un mensaje de convergencia y los valores transformados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

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

### Floor

**Sintaxis:** y = Floor( x )

**Descripción:** Devuelve el entero mayor que sea menor o igual que x. El argumento puede ser un número, una matriz o una lista de números.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Floor( 1.2 );

```

### For

**Sintaxis:** For( initExpr, whileExpr, nextExpr, bodyExpr )

**Descripción:** Evalúa initExpr una sola vez y después evalúa repetidamente whileExpr, bodyExpr y nextExpr mientras el valor de whileExpr sea distinto de cero.

**JMP Versión agregada:** Antes de la versión 14

```jsl

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

For Each( {{key, value}, index}, ["A" => 8, "B" => 6, "C" => 10], Show( key, value, index ) );

```

**Expression**

```jsl

For Each( {value, index}, Expr( MyExpr( 10, 20, 30 ) ), Show( value ) );

```

**List**

```jsl

For Each( {value, index}, {10, 20, 30}, Show( value, index ) );

```

**Matrix**

```jsl

For Each( {element, {row, col}}, 10 :: 15, Show( element, row, col ) );

```

**Matriz: índice lineal**

```jsl

For Each( {element, index}, 10 :: 15, Show( element, index ) );

```

### For Each Row

**Sintaxis:** y = For Each Row( &lt;dt&gt;, body )

**Descripción:** Evalúa la expresión del cuerpo iterativamente para cada fila de la tabla de datos actual.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( :height = -:height );

```

### Format

**Sintaxis:** s = Format( x, formatString, &lt;options&gt; ) s = Format( x, "Format Pattern", pattern, &lt;options&gt; )

**Descripción:** Devuelve el número en el formato especificado. Entre los formatos se incluyen los elementos del cuadro de diálogo Info de columna, tales como "Mejor" y "h:m:s". Consulte los temas de ayuda para conocer otras opciones, incluidos los formatos de valor p, fecha y hora, y geográfico.

**JMP Versión agregada:** Antes de la versión 14

**Fecha y hora**

```jsl

Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

**Patrón de formato**

```jsl

Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

**Porcentaje, Moneda**

```jsl

pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

**Precisión completa**

```jsl

Show( Format( 88.54, "Best" ), Format( 88.54, "Best", "Full Precision" ) );

```

### Format Date

**Sintaxis:** s = Format( x, formatString, &lt;options&gt; ) s = Format( x, "Format Pattern", pattern, &lt;options&gt; )

**Descripción:** Devuelve el número en el formato especificado. Entre los formatos se incluyen los elementos del cuadro de diálogo Info de columna, tales como "Mejor" y "h:m:s". Consulte los temas de ayuda para conocer otras opciones, incluidos los formatos de valor p, fecha y hora, y geográfico.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

**Ejemplo 2**

```jsl

Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

**Ejemplo 3**

```jsl

pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

### Format Pattern

**Sintaxis:** s = Format( x, "Format Pattern", pattern, &lt;width&gt;, &lt;dec&gt;) x = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; ) obj = Format("Format Pattern", pattern, &lt;width&gt;, &lt;dec&gt;)

**Descripción:** Los patrones de formato son cadenas de caracteres que definen un formato de fecha y hora, como "<AAAA></><MM></><DD> <hh><:><mm><:><ss><ampm>". Las partes del patrón que se encuentran entre paréntesis angulares se denominan descriptores de campo. Los descriptores de campo representan un valor (como "<AAAA>", que es un año de cuatro dígitos) u otro texto de fecha y hora (como "</>", que es un separador de fecha específico de la configuración regional). Un patrón de formato le permite crear formatos que no se proporcionan en JMP. Estos formatos pueden utilizarse para dar formato a los datos e introducirlos.

**JMP Versión agregada:** 16

```jsl

s = Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );
x = Informat( "2020/02/10 14:54", "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );
Show( s, x );
                                                /*
Descriptores de campo

Fechas
(no se pueden utilizar con descriptores de campo de duración)
================================================================================
<YYYY>        Año de cuatro dígitos. (Acepta entre 1 y 4 dígitos en la entrada).
<YY>          Año de dos dígitos
<yyyy>        Año ISO de cuatro dígitos; corresponde a semanas ISO. (Acepta de 1
              a 4 dígitos en la entrada).
<yy>          Año ISO de dos dígitos; corresponde a semanas ISO.
<YYYY.>       Año con año fraccional. Describe completamente la fecha y la hora.
<M>           Número de mes (1..12)
<MM>          Número de mes, completado con ceros (01..12)
<Month>       Nombre del mes largo
<Mmm>         Nombre del mes abreviado
<MMM>         Nombre del mes "en línea". Siempre tres letras.
<WW1>         Número de semana de dos dígitos, completado con ceros. La semana 2
              comienza el primer domingo del año. La semana 1 es una semana
              parcial antes del primer domingo. (01..54)
<WW2>         Número de semana de dos dígitos, completado con ceros. La semana 1
              comienza el primer domingo del año. La semana 0 es una semana
              parcial antes del primer domingo. (00..53)
<ww>          Número de semana ISO de dos dígitos, completado con ceros. La
              semana comienza el lunes. La semana 1 es la primera semana de ese
              año con cuatro o más días. No hay semanas parciales, sino que la
              primera o la última semana se pueden considerar del año anterior o
              el siguiente, respectivamente. (01..53)
<D>           Día del mes (1..31)
<DD>          Día del mes, completado con ceros (01..31)
<Q>           Trimestre del año (1..4)
<Q#>          "T" seguido del trimestre del año (1..4)
<DayOfWeek>   Nombre del día de la semana
<DW>          Día de la semana en número. 1 = domingo, 7 = sábado
<dw>          Día de la semana en número. 1 = lunes, 7 = domingo
</>           El separador de fecha de la configuración regional. (Acepta los
              separadores más comunes en la entrada).
<->           El separador de fecha ISO "-". (Acepta los separadores más comunes
              en la entrada).
</?>          Separador de fecha opcional en la entrada de fecha. El separador
              no se escribe nunca en la salida.
<'T'>         La "T" en las fechas ISO

Horas
(algunas se pueden utilizar con descriptores de campo de duración)
================================================================================
<hh>          Se ha aplicado un formato de hora acorde a la configuración
              regional actual. Si hay presente un descriptor <ampm>, se usará un
              reloj de 12 o 24 horas en función de la configuración regional. Si
              hay presente un descriptor <AMPM>, se usará un reloj de 12 horas.
              De lo contrario, se usará un reloj de 24 horas. (No se puede
              utilizar con descriptores del campo de duración).
<zhh>         Se ha aplicado un formato de hora acorde con la configuración
              regional actual y completado con ceros. Si hay presente un
              descriptor <ampm>, se usará un reloj de 12 o 24 horas en función
              de la configuración regional. Si hay presente un descriptor
              <AMPM>, se usará un reloj de 12 horas. De lo contrario, se usará
              un reloj de 24 horas. (No se puede utilizar con descriptores del
              campo de duración).
<hh24>        Hora en formato de 24 horas y completada con ceros (00..23)
<mm>          Minuto, completado con ceros (00..59)
<ss>          Segundo, completado con ceros (00..59)
<ampm>        Símbolo a. m./p. m. para la configuración regional actual. (No se
              puede utilizar con descriptores de campo de duración).
<AMPM>        Símbolo de a. m./p. m. "a. m." o "p. m." independiente de la
              configuración regional. (No se puede utilizar con descriptores del
              campo de duración).
<:>           El separador de fecha y hora de la configuración regional.
<::>          El separador de fecha y hora ISO ":". (También acepta el separador
              de fecha y hora de la configuración regional en la entrada).
<:?>          Separador de hora opcional en la entrada de fecha. El separador no
              se escribe nunca en la salida.

Duraciones
(no se puede utilizar con los descriptores de campo de fecha)
================================================================================
<Day>         Conteo de días. Se utiliza como el campo más significativo de las
              duraciones. No se puede utilizar con ningún otro "conteo".
<Hour>        Conteo de horas. Se utiliza como el campo más significativo de las
              duraciones. No se puede utilizar con ningún otro "conteo".
<Minute>      Conteo de minutos. Se utiliza como el campo más significativo de
              las duraciones. No se puede utilizar con ningún otro "conteo".

Otro
================================================================================
<<>           Reemplazado por un "<"
*/

```

### Fourier Basis Coef

**Sintaxis:** coef = Fourier Basis Coef( x, Number Pairs, &lt;Period = max(x)-min(x)+1&gt; )

**Descripción:** Devuelve la matriz de los coeficientes de Base de Fourier. Number Pairs es el número de pares de sin() y cos() para la base. El parámetro opcional Period especifica el periodo para las funciones trigonométricas y los valores predeterminados para max(x) - min(x) + 1.

**JMP Versión agregada:** 14

```jsl

Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2 );
Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2, 2 );

```

### Frechet Density

**Sintaxis:** y = Frechet Density( x, mu, sigma )

**Descripción:** Devuelve la densidad en x de una distribución Fréchet con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 0;
sig = .5;
New Window( "Example: Frechet Density",
	y = Graph Box(
		Y Scale( 0, .06 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Frechet Density( x, mu, sig ), x );
		Text( {0, .055}, "mu=", Round( mu, 2 ) );
		Text( {0, .045}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### Frechet Distribution

**Sintaxis:** p = Frechet Distribution( x, mu, sigma )

**Descripción:** Devuelve la probabilidad en x de una distribución Fréchet con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 0;
sig = .5;
New Window( "Example: Frechet Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Frechet Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) )
);

```

### Frechet Quantile

**Sintaxis:** q = Frechet Quantile( p, mu, sigma )

**Descripción:** Devuelve el cuantil en p de una distribución Fréchet con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 0;
sig = .5;
qq = .5;
New Window( "Example: Frechet Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Frechet Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( Frechet Quantile( qq, mu, sig ), 0, 1 );
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### Function

**Sintaxis:** y = Function( {arg1=val1, ...}, &lt;{local1=val1, ...}&gt;, expr )

**Descripción:** Define una función con los argumentos especificados, valores predeterminados y variables locales opcionales. Los argumentos con valores predeterminados son opcionales en la invocación de la función. Si se utiliza Return() dentro del script de la función, se devuelve la expresión intra.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

exsqr = Function( {x}, x * x );
exsqr( 5 );

```

**Ejemplo 2**

```jsl

// y is an optional argument
exmul = Function( {x, y = 3}, x * y );
a = exmul( 5 );
b = exmul( 5, 10 );
Show( a, b );

```

**Ejemplo 3**

```jsl

posorneg = Function( {x},
	{},
	If(
		x > 0, Return( "positive" ),
		x == 0, Return( "zero" ),
		Return( "negative" )
	)
);
posorneg( -5.5 );

```

### Future Value

**Sintaxis:** x = Future Value( rate, nper, pmt, &lt;pv=0&gt;, &lt;type=0&gt; )

**Descripción:** Devuelve el valor futuro de una inversión basándose en pagos periódicos constantes y una tasa de interés constante. El argumento type es 0 para los pagos al final de cada período y 1 para los pagos al inicio de cada período. Equivale a la función FV de Microsoft Excel.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Future Value( .03, 12, 100, 0, 1 );

```

### G Inverse

**Sintaxis:** g = G Inverse( A )

**Descripción:** Devuelve la matriz inversa generalizada (Moore-Penrose).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Round( G Inverse( [11 22, 33 44] ), 2 );

```

### Gamma

**Sintaxis:** y = Gamma( x, &lt;limit&gt; )

**Descripción:** Devuelve la función Gamma de x, definida como la integral de z^(x-1)*exp(-z) dz de 0 a ∞. Si el argumento limit está presente, se calcula una Gamma incompleta usando ese límite de integración.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Gamma( 5 );

```

### Gamma Density

**Sintaxis:** y = Gamma Density( q, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descripción:** Devuelve la densidad en q de una distribución de probabilidad Gamma, donde el argumento parámetro de forma alpha debe ser positivo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

gdealpha = Log( 1.5 );
New Window( "Example: Gamma Density",
	gdey = Graph Box(
		Y Scale( 0, 0.5 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Density( gdeq, Exp( gdealpha ) ), gdeq );
		Text( {9, 0.45}, "\!U03B1=", Round( Exp( gdealpha ), 2 ) );
	),
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), gdealpha, gdey << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Distribution

**Sintaxis:** p = Gamma Distribution( q, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución Gamma sea menor que q, donde el argumento del parámetro de forma alpha debe ser positivo. IGamma() es un alias de Gamma Distribution(). La función Gamma Distribution() equivale a Gamma(alpha,q)/Gamma(alpha).

**JMP Versión agregada:** Antes de la versión 14

```jsl

gdialpha = Log( 1.5 );
New Window( "Example: Gamma Distribution",
	gdiy = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Distribution( gdiq, Exp( gdialpha ) ), gdiq );
		Text( {1, 0.9}, "\!U03B1=", Round( Exp( gdialpha ), 2 ) );
	),
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), gdialpha, gdiy << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Log CDistribution

**Sintaxis:** p = Gamma Log CDistribution( x, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descripción:** Devuelve el logaritmo de 1 - la distribución Gamma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

glcdialpha = Log( 1.5 );
New Window( "Example: Gamma Log CDistribution",
	glcdiy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Log CDistribution( glcdiq, Exp( glcdialpha ) ), glcdiq );
		Text( {1, -0.9}, "\!U03B1=", Round( Exp( glcdialpha ), 2 ) );
	),
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), glcdialpha, glcdiy << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Log Density

**Sintaxis:** y = Gamma Log Density( x, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descripción:** Devuelve el logaritmo de la densidad de probabilidad Gamma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

gldealpha = Log( 1.5 );
New Window( "Example: Gamma Log Density",
	gldey = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Log Density( gldeq, Exp( gldealpha ) ), gldeq );
		Text( {9, -0.45}, "\!U03B1=", Round( Exp( gldealpha ), 2 ) );
	),
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), gldealpha, gldey << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Log Distribution

**Sintaxis:** p = Gamma Log Distribution( x, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descripción:** Devuelve el logaritmo de la distribución Gamma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

gldialpha = Log( 1.5 );
New Window( "Example: Gamma Log Distribution",
	gldiy = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Log Distribution( gldiq, Exp( gldialpha ) ), gldiq );
		Text( {1, -0.9}, "\!U03B1=", Round( Exp( gldialpha ), 2 ) );
	),
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), gldialpha, gldiy << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### Gamma Poisson Distribution

**Sintaxis:** cumprob = Gamma Poisson Distribution( k, lambda, sigma )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución gamma Poisson sea menor o igual que k, donde lambda es el parámetro de media, sigma es el parámetro de sobredispersión y k es el conteo de interés.

**JMP Versión agregada:** Antes de la versión 14

```jsl

lambda = 20;
sigma = 2;
New Window( "Example: Gamma Poisson Distribution",
	ppy = Graph Box(
		Y Scale( 0, 1.01 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= 40, k++,
			H Line( k, k + 1, Gamma Poisson Distribution( k, lambda, sigma ) );
			V Line(
				k + 1,
				Gamma Poisson Distribution( k, lambda, sigma ),
				Gamma Poisson Distribution( k + 1, lambda, sigma )
			);
		);
		Text( {2, 0.95}, "\!U03BB=", Round( lambda, 2 ) );
		Text( {2, 0.87}, "\!U03C3=", Round( sigma, 2 ) );
	),
	H List Box( Slider Box( 3, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 1, 5, sigma, ppy << reshow ), Text Box( " \!U03C3" ) )
);

```

### Gamma Poisson Probability

**Sintaxis:** prob = Gamma Poisson Probability( k, lambda, sigma )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución gamma Poisson sea igual a k, donde el argumento lambda es el parámetro de media, sigma es el parámetro de sobredispersión y k es el conteo de interés.

**JMP Versión agregada:** Antes de la versión 14

```jsl

lambda = 5;
sigma = 2;
New Window( "Poisson and Gamma Poisson",
	clty = Graph Box(
		Y Scale( 0, 0.3 ),
		X Scale( -1, 20.5 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( x = 0, x <= 20, x++,
			Pen Color( "red" );
			V Line( x, 0, Poisson Probability( lambda, x ) );
			Pen Color( "blue" );
			V Line( x + 0.35, 0, Gamma Poisson Probability( x, lambda, sigma ) );
		);
		Text( {1, 0.25}, "\!U03BB=", Round( lambda, 8 ), " \!U03C3=", Round( sigma, 8 ) );
		Text( {0, 0.28}, "Red = Poisson, Blue = Gamma Poisson" );
	),
	H List Box( Slider Box( 3, 10, lambda, clty << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 1, 5, sigma, clty << reshow ), Text Box( " \!U03C3" ) )
);

```

### Gamma Poisson Quantile

**Sintaxis:** q = Gamma Poisson Quantile( lambda, sigma, cumprob )

**Descripción:** Devuelve el cuantil entero más pequeño para el cual la probabilidad acumulada de la distribución Gamma Poisson(lambda, sigma) es mayor o igual que cumprob.

**JMP Versión agregada:** Antes de la versión 14

```jsl

qexpl = 20;
qexps = 2;
qexpn = 40;
qexpq = 0.5;
New Window( "Example: Gamma Poisson Quantile",
	qexpy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qexpk = 0, qexpk < Round( qexpn ), qexpk++,
			H Line( qexpk, qexpk + 1, Gamma Poisson Distribution( qexpk, qexpl, qexps ) );
			V Line(
				qexpk + 1,
				Gamma Poisson Distribution( qexpk, qexpl, qexps ),
				Gamma Poisson Distribution( qexpk + 1, qexpl, qexps )
			);
		);
		Pen Color( "blue" );
		V Line( Gamma Poisson Quantile( qexpl, qexps, qexpq ), 0, 1 );
		Text( {1, 0.9}, " \!U03BB=", Round( qexpl, 2 ), " \!U03C3=", Round( qexps, 2 ) );
		Text(
			{1, 0.8},
			" q=",
			Round( qexpq, 2 ),
			" quantile=",
			Round( Gamma Poisson Quantile( qexpl, qexps, qexpq ) )
		);
	),
	H List Box( Slider Box( 3, 40, qexpl, qexpy << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 1, 5, qexps, qexpy << reshow ), Text Box( " \!U03C3" ) ),
	H List Box( Slider Box( 0, 1, qexpq, qexpy << reshow ), Text Box( " q" ) )
);

```

### Gamma Quantile

**Sintaxis:** q = Gamma Quantile( p, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descripción:** Devuelve el cuantil de una distribución Gamma, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Gamma Quantile( 0.75, 4 );

```

### GenGamma Density

**Sintaxis:** y = GenGamma Density( x, mu, sigma, lambda )

**Descripción:** Devuelve la densidad en x de una distribución de probabilidad de gamma generalizada extendida con parámetros mu, sigma y lambda.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: GenGamma Density",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -5, 10 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( GenGamma Density( y, mu, sigma, lambda ), y );
		Text( {-4, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-4, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) )
);

```

### GenGamma Distribution

**Sintaxis:** p = GenGamma Distribution( x, mu, sigma, lambda )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución gamma generalizada extendida (con parámetros mu, sigma y lambda) sea inferior a x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: GenGamma Distribution",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( GenGamma Distribution( y, mu, sigma, lambda ), y );
		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) )
);

```

### GenGamma Quantile

**Sintaxis:** q = GenGamma Quantile( p, mu, sigma, lambda )

**Descripción:** Devuelve el cuantil de una distribución gamma generalizada extendida (con parámetros mu, sigma y lambda), el valor para el que la probabilidad de que un valor aleatorio fuera inferior es p.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 0;
sigma = 1;
lambda = 1;
p = 0.4;
New Window( "Example: GenGamma Quantile",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( GenGamma Distribution( x, mu, sigma, lambda ), x );
		Pen Color( "Blue" );
		V Line( GenGamma Quantile( p, mu, sigma, lambda ), 0, 1 );
		Text(
			{-9, 0.9},
			"\!U03BC=",
			Round( mu, 4 ),
			" \!U03C3=",
			Round( sigma, 4 ),
			" \!U03BB=",
			Round( lambda, 4 )
		);
		Text( {-9, 0.8}, "p=", Round( p, 3 ) );
		Text(
			{-9, 0.7},
			"quantile= ",
			Round( GenGamma Quantile( p, mu, sigma, lambda ), 2 )
		);
	),
	H List Box( Slider Box( -2, 2, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) ),
	H List Box( Slider Box( 0.01, 0.99, p, gdey << reshow ), Text Box( " p" ) )
);

```

### Get Addin

**Sintaxis:** Get Addin( ID )

**Descripción:** Recupera un complemento registrado mediante su ID.

**JMP Versión agregada:** Antes de la versión 14

```jsl

addin = Get Addin( "com.mycompany.myaddin" );

```

### Get Addins

**Sintaxis:** Get Addins( )

**Descripción:** Devuelve una lista de todos los complementos registrados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

addins = Get Addins();
addin ids = Get Addins() << id;
Show( addins, addin ids );

```

### Get Addr Info

**Sintaxis:** Get Addr Info( string )

**Descripción:** Busca la dirección numérica correspondiente a un nombre. En la mayoría de los casos se debería usar el nombre para garantizar la compatibilidad futura con IPV6.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Get Addr Info( "www.jmp.com" )[3][4];

```

### Get Class Names

**Sintaxis:** Get Class Names( &lt; &lt;class reference&gt;, ... &gt; )

**Descripción:** Devuelve una lista de nombres de todas las clases definidas actualmente.

**JMP Versión agregada:** 14

```jsl

Define Class(
	"aa",
	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )}
);
Define Class(
	"bb",
	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )}
);
lcaa = New Object( aa() );
lcbb = New Object( bb() );
lcl = Get Class Names();
Show( lcl );
lcaa << Delete;
lcbb << Delete;
Delete Classes( "aa", "bb" );

```

### Get Classes

**Sintaxis:** Get Classes( &lt; &lt;class reference&gt;, ... &gt; )

**Descripción:** Devuelve una lista de referencias a todas las clases definidas actualmente

**JMP Versión agregada:** Antes de la versión 14

```jsl

Define Class(
	"aa",
	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )}
);
Define Class(
	"bb",
	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )}
);
lcaa = New Object( aa() );
lcbb = New Object( bb() );
lcl = Get Classes();
Show( lcl );
Clear Symbols( lcl );
lcaa << Delete;
lcbb << Delete;
Delete Classes( "aa", "bb" );

```

### Get Clipboard

**Sintaxis:** Get Clipboard()

**Descripción:** Obtiene el contenido actual del portapapeles

**JMP Versión agregada:** Antes de la versión 14

```jsl

Get Clipboard();

```

### Get Color Theme Detail

**Sintaxis:** script = Get Color Theme Detail(name)

**Descripción:** Devuelve el script correspondiente al nombre de tema de color especificado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Get Color Theme Detail( "JMP Default" );

```

### Get Color Theme Names

**Sintaxis:** {list of names} = Get Color Theme Names(&lt;kind&gt;)

**Descripción:** Devuelve una lista de cadenas de temas de color que coinciden con el parámetro opcional kind. kind es uno de los siguientes: "continuo", "categórico", "secuencial", "divergente", "cualitativo" o "cromático".

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Get Color Theme Names();

```

**Ejemplo 2**

```jsl

Get Color Theme Names( "sequential" );

```

### Get Custom Functions

**Sintaxis:** Get Custom Functions(&lt;{function 1 full name, function 2 full name, ...} | function full name&gt;)

**Descripción:** Obtiene una lista de funciones personalizadas

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

Get Custom Functions();

```

**Ejemplo 2**

```jsl

Get Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Get Data Table

**Sintaxis:** dt = Get Data Table( &lt;Project(title|index|box|window)&gt;, name|index )

**Descripción:** Devuelve una referencia a la tabla de datos especificada.



La búsqueda está limitada a las tablas del proyecto actual (o a ningún proyecto si no se ejecuta el script en un proyecto).



Para especificar un proyecto, utilice el argumento opcional Project() con un título, índice, cuadro de visualización u objeto de ventana. Utilice Project(0) para no especificar ningún proyecto cuando se ejecute el script en un proyecto.

**JMP Versión agregada:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Get Data Table( 1 );

```

### Get Data Table List

**Sintaxis:** tableList = Get Data Table List( &lt;Project(title|index|box|window)&gt; )

**Descripción:** Devuelve una lista de todas las tablas de datos abiertas.



La lista está limitada a las tablas del proyecto actual (o a ningún proyecto si no se ejecuta el script en un proyecto).



Para especificar un proyecto, utilice el argumento opcional Project() con un título, índice, cuadro de visualización u objeto de ventana. Utilice Project(0) para no especificar ningún proyecto cuando se ejecute el script en un proyecto.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Get Data Table List();

```

**Ejemplo 2**

```jsl

project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
Get Data Table List( Project( project ) );

```

### Get Default Directory

**Sintaxis:** y = Get Default Directory()

**Descripción:** Devuelve el directorio predeterminado de JMP, que se utiliza como base para determinar rutas relativas subsiguientes. Esta ruta es el directorio que contiene el script que se está ejecutando en ese momento si se guarda el script.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show( Get Default Directory() );
Set Default Directory( "$SAMPLE_DATA" );
Show( Get Default Directory() );

```

### Get Environment Variable

**Sintaxis:** value = Get Environment Variable( string )

**Descripción:** Devuelve el valor de la variable de entorno del sistema operativo especificada.



NOTA: en el sistema operativo Macintosh, en el nombre de la variable se distinguen los caracteres en mayúsculas y minúsculas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Get Environment Variable( "PATH" );

```

### Get Excel Worksheets

**Sintaxis:** list = Get Excel Worksheets("filepath")

**Descripción:** Devuelve una lista de hojas dentro de un libro de Excel

**JMP Versión agregada:** Antes de la versión 14

```jsl

sheetList = Get Excel Worksheets( "$SAMPLE_IMPORT_DATA\Team Results.xlsx" );
Show( sheetList );

```

### Get File Search Path

**Sintaxis:** y = Get File Search Path()

**Descripción:** Devuelve la lista actual de directorios donde buscar para abrir archivos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Get File Search Path();

```

### Get Locale Setting

**Sintaxis:** value = Get Locale Setting( settingName )

**Descripción:** Recupera un ajuste de la configuración regional, como el separador decimal

**JMP Versión agregada:** 16

```jsl

Get Locale Setting( "Decimal Separator" );

```

### Get Log

**Sintaxis:** list = Get Log( &lt;N&gt; )

**Descripción:** Devuelve una lista de líneas del registro. Si no se especifica ningún argumento, devuelve todas las líneas del registro. Si el argumento numérico N es positivo, devuelve las primeras N líneas del registro. Si N es negativo, devuelve las últimas N líneas del registro. Si N es cero, no devuelve ninguna línea.

**JMP Versión agregada:** Antes de la versión 14

```jsl

all contents = Get Log();
headcontents = Get Log( 10 );
tailcontents = Get Log( -5 );

```

### Get Name Info

**Sintaxis:** Get Name Info( string )

**Descripción:** Busca el nombre correspondiente a una dirección numérica. En la mayoría de los casos se debería usar el nombre para garantizar la compatibilidad futura con IPV6.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Get Name Info( "149.173.5.120" )[3][4];

```

### Get Namespace Names

**Sintaxis:** Get Namespace Names( &lt; &lt;namespace reference&gt;, ... &gt; )

**Descripción:** Devuelve una lista de nombres de todos los espacios de nombre definidos actualmente.

**JMP Versión agregada:** 14

```jsl

nsaa = New Namespace(
	"aa",
	{
		x = 1
	}
);
nsbb = New Namespace(
	"bb",
	{
		y = 1
	}
);
lns = Get Namespace Names();
Show( lns );
nsaa << Delete;
nsbb << Delete;

```

### Get Namespaces

**Sintaxis:** Get Namespaces( &lt; &lt;namespace reference&gt;, ... &gt; )

**Descripción:** Devuelve una lista de referencias a todos los espacios de nombres definidos actualmente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

nsaa = New Namespace(
	"aa",
	{
		x = 1
	}
);
nsbb = New Namespace(
	"bb",
	{
		y = 1
	}
);
lns = Get Namespaces();
Show( lns );
Clear Symbols( lns );
nsaa << Delete;
nsbb << Delete;

```

### Get Notebook List

**Sintaxis:** notebookList = Get Notebook List()

**Descripción:** Devuelve una lista de todos los cuadernos especificados.

**JMP Versión agregada:** 19

### Get OAuth2 Grant Types

**Sintaxis:** Get OAuth2 Grant Types

**Descripción:** Obtiene los tipos de concesiones OAuth2 de JMP compatibles.

**JMP Versión agregada:** 15

```jsl


/*
https://oauth.net/2/grant-types/
*/
grant_types = Get OAuth2 Grant Types();
Show( grant_types );

```

### Get OpenID Connect Discovery

**JMP Versión agregada:** 15

```jsl


url = "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration";
aa = Get OpenID Connect Discovery( url );
Show( aa );

```

### Get OpenIDC Discovery

**JMP Versión agregada:** 15

### Get Path Variable

**Sintaxis:** value = Get Path Variable( name )

**Descripción:** Devuelve el valor de una variable de ruta, que es un nombre como SAMPLE_DATA, que se sustituye cuando se encuentra en nombres de rutas.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Get Path Variable( "SAMPLE_DATA" );
/* try: SAMPLE_DATA, SAMPLE_IMPORT_DATA, SAMPLE_SCRIPTS
See full listing of Path Variables in the other example
See also Convert File Path() and Set Path Variable() */

```

**Listado**

```jsl

// Run for a Path Variable listing
path vars = {"SAMPLE_DATA", "DESKTOP", "DOCUMENTS", "DOWNLOADS", "TEMP", "HOME",
"USER_APPDATA", "ALL_HOME", "BUILTIN_SCRIPTS", "SAMPLE_APPS", "SAMPLE_DASHBOARDS",
"SAMPLE_IMAGES", "SAMPLE_IMPORT_DATA", "SAMPLE_PROJECTS", "SAMPLE_SCRIPTS"};
path vars ||= Transform Each( {id}, Get Addins() << ID, Eval Insert( "ADDIN_HOME(^id^)" ) );
path vars = Filter Each( {var}, path vars, Directory Exists( Get Path Variable( var ) ) );

New Window( "Path Variables",
	<<Type( "Dialog" ),
	Outline Box( "Path Variables",
		H List Box(
			Button Box( "Open Paths",
				For Each( {row}, tbl << Get Selected Rows, {path},
					path = tbl[String Col Box( 2 )] << Get( row );
					Open( path );
				)
			),
			Button Box( "Copy Paths",
				If( N Items( tbl << Get Selected Rows ),
					Set Clipboard(
						Concat Items(
							Transform Each( {row}, tbl << Get Selected Rows, Output( "List" ),
								tbl[String Col Box( 2 )] << Get( row )
							),
							"\!N"
						)
					)
				)
			)
		),
		window:tbl = Table Box(
			String Col Box( "Variable", path vars ),
			String Col Box( "Path",
				Transform Each( {var}, path vars, Get Path Variable( var ) )
			),
			<<Set Selectable Rows
		)
	)
);

```

### Get Platform Preference

**Sintaxis:** Get Platform Preferences( &lt; platformName &lt; ( optionName, ... ) &gt; ... &gt; )

**Descripción:** Devuelve las preferencias de la plataforma según la especificación.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Platform Preferences

**Sintaxis:** Get Platform Preferences( &lt; platformName &lt; ( optionName, ... ) &gt; ... &gt; )

**Descripción:** Devuelve las preferencias de la plataforma según la especificación.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Policies

**Sintaxis:** Get Policies( &lt;Machine|User|Both&gt; )

**Descripción:** Devuelve un arreglo asociativo que contiene los nombres y valores de las políticas actuales.

**JMP Versión agregada:** 18

```jsl

Get Policies();

```

### Get Preference

**Sintaxis:** Get Preferences( pref1, ... )

**Descripción:** Devuelve las preferencias según la especificación.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Get Preferences( Graph marker size );

```

### Get Preferences

**Sintaxis:** Get Preferences( pref1, ... )

**Descripción:** Devuelve las preferencias según la especificación.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Get Preferences( Graph marker size );

```

### Get Project

**Sintaxis:** project = Get Project( title|index|box|window )

**Descripción:** Devuelve una referencia a un proyecto abierto específico por título, índice o cuadro.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
                             
Print( Get Project( 2 ) << Get Window Title() );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
                             
project = Get Project( "Big Class" );

```

### Get Project List

**Sintaxis:** projectList = Get Project List()

**Descripción:** Devuelve una lista de todos los proyectos abiertos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Project();
Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
                              
Print( Get Project List() << Get Window Title() );

```

### Get Punctuation Characters

**Sintaxis:** Get Punctuation Characters(&lt;Exclude Chars(chars) | Include Chars(chars)&gt;)

**Descripción:** Devuelve una cadena que contiene los caracteres de puntuación que suelen utilizarse para delimitar palabras. Algunos son ,:;.?!\\/#@&~()[]<>"*`%$+=^|{} y algunos símbolos de puntuación Unicode comunes.

**JMP Versión agregada:** 15

**Ejemplo 1**

```jsl

Get Punctuation Characters();

```

**Ejemplo 2**

```jsl

Get Punctuation Characters( Include Chars( "_" ) );

```

**Ejemplo 3**

```jsl

Get Punctuation Characters( Exclude Chars( "$[]" ) );

```

**Ejemplo 4**

```jsl

Collapse Whitespace(
	Substitute( "This...string..has..dots", Items( Get Punctuation Characters(), "" ), " " )
);

```

### Get Session Script

**Sintaxis:** Get Session Script( win1, ... )

**Descripción:** Devuelve el script de sesión para las ventanas especificadas. El script de sesión es una expresión JSL que recreará las ventanas dadas, incluidas las tablas de datos, ventanas de script, diarios e informes. Los informes creados mediante scripts JSL tienen un soporte limitado, y solo intentarán recrear el diseño de la pantalla.

**JMP Versión agregada:** 17

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << RunScript( "Bivariate" );
Get Session Script( Report( biv ) );

```

### Get Whitespace Characters

**Sintaxis:** Get Whitespace Characters()

**Descripción:** Devuelve una cadena que contiene todos los caracteres de espacio en blanco que suelen utilizarse.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Get Whitespace Characters();

```

### Get Window

**Sintaxis:** window = Get Window( &lt;Project(title|index|box|window)&gt;, &lt;Type(string)&gt;, title|index|box )

**Descripción:** Devuelve una referencia a una ventana abierta específica por título, índice o cuadro.



La búsqueda está limitada a las ventanas del proyecto actual (o a ningún proyecto si no se ejecuta el script en un proyecto).



Para especificar un proyecto, utilice el argumento opcional Project() con un título, índice, cuadro de visualización u objeto de ventana. Utilice Project(0) para no especificar ningún proyecto cuando se ejecute el script en un proyecto.



Utilice el argumento opcional Type() con "Tablas de datos", "Diarios", "Informes" o "Cuadros de diálogo" para limitar la búsqueda a ventanas de un tipo en concreto.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA\Big Class.jmp" );
                                        
window = Get Window( "Big Class" );

```

**Ejemplo 2**

```jsl

project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
window = Get Window( Project( project ), "Big Class" );

```

### Get Window List

**Sintaxis:** windowList = Get Window List( &lt;Project(title|index|box|window)&gt;, &lt;Type(string)&gt; )

**Descripción:** Devuelve una lista de todas las ventanas abiertas.



La lista está limitada a las ventanas del proyecto actual (o a ningún proyecto si no se ejecuta el script en un proyecto).



Para especificar un proyecto, utilice el argumento opcional Project() con un título, índice, cuadro de visualización u objeto de ventana. Utilice Project(0) para no especificar ningún proyecto cuando se ejecute el script en un proyecto.



Utilice el argumento opcional Type() y seleccione "Tablas de datos", "Diarios", "Informes" o "Cuadros de diálogo" para limitar la búsqueda a ventanas de un tipo en concreto.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

Print( Get Window List() << Get Window Title() );

```

**Ejemplo 2**

```jsl

project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
Print( Get Window List( Project( project ) ) << Get Window Title() );

```

**Ejemplo 3**

```jsl

project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
Print( Get Window List( Project( project ), Type( "Data Tables" ) ) << Get Window Title() );

```

### Global Box

**Sintaxis:** box = Global Box( name )

**Descripción:** Crea un cuadro de visualización que muestra el valor de una variable global.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex = .6;
New Window( "Example", Global Box( ex ) );

```

### GLog Density

**Sintaxis:** y = GLog Density( q, mu, sigma, lambda )

**Descripción:** Devuelve la densidad en q de una distribución logarítmica generalizada con localización mu, escala sigma y forma lambda.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: GLog Density",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 10 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( GLog Density( y, mu, sigma, lambda ), y );
		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( " \!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( " \!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( " \!U03BB" ) )
);

```

### GLog Distribution

**Sintaxis:** p = GLog Distribution( q, mu, sigma, lambda )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución logarítmica generalizada sea menor que q.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: Glog Distribution",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -20, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( GLog Distribution( y, mu, sigma, lambda ), y );
		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( " \!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( " \!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( " \!U03BB" ) )
);

```

### GLog Quantile

**Sintaxis:** q = GLog Quantile( p, mu, sigma, lambda )

**Descripción:** Devuelve el cuantil de una distribución logarítmica generalizada, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 0;
sigma = 1;
lambda = 1;
p = 0.4;
New Window( "Example: GLog Quantile",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -20, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( GLog Distribution( x, mu, sigma, lambda ), x );
		Pen Color( "Blue" );
		V Line( GLog Quantile( p, mu, sigma, lambda ), 0, 1 );
		Text(
			{-9, 0.9},
			"\!U03BC=",
			Round( mu, 4 ),
			" \!U03C3=",
			Round( sigma, 4 ),
			" \!U03BB=",
			Round( lambda, 4 )
		);
		Text( {-9, 0.8}, "p=", Round( p, 3 ) );
		Text( {-9, 0.7}, "quantile= ", Round( GLog Quantile( p, mu, sigma, lambda ), 2 ) );
	),
	H List Box( Slider Box( -2, 2, mu, gdey << reshow ), Text Box( " \!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( " \!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 0.01, 0.99, p, gdey << reshow ), Text Box( " p" ) )
);

```

### Glue

**Sintaxis:** y = ( expr1; expr2; ... ); y = Glue( expr1, expr2, ... )

**Descripción:** Evalúa todos los argumentos y devuelve el último resultado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex1 = 1;
ex2 = 2;

```

### Google Sheet Export

**Sintaxis:** Google Sheet Export(dt, Email(address), Spreadsheet(url|id) | New Spreadsheet(name), Sheet Name(name))

**Descripción:** Exporta una tabla de datos a una nueva hoja de cálculo de Google o una nueva hoja dentro de una hoja de cálculo de Google existente.

**JMP Versión agregada:** 15

```jsl

email = "youremail@gmail.com"; //Replace this with your email
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Google Sheet Export(
	dt,
	Email( email ),
	New Spreadsheet( "JSL Example" ),
	Sheet Name( "Example 1" )
);

```

### Google Sheet Import

**Sintaxis:** Google Sheet Import(Email(address), Spreadsheet(url|id), &lt;Sheets("sheetName1", ... "sheetNameN")&gt;, &lt;Sheet Settings( Has Column Headers(Boolean), Data Starts on Row(n), Cell Range(range), Import Cell Colors(Boolean), Supress Empty Columns(Boolean))&gt;)

**Descripción:** Abre un archivo Google Sheet.

**JMP Versión agregada:** 15

```jsl

email = "youremail@gmail.com"; //Replace this with your email
spreadsheet =
"https://docs.google.com/spreadsheets/d/1AqV2ZkzzMtFrk-devlFdQW2Sb09ipOQaCQ1p0iho-iE/"; 
                                        
Google Sheet Import(
	Email( email ),
	Spreadsheet( spreadsheet ),
	Sheets( "Sheet1", "Sheet2" ),
	Sheet Settings(
		Has Column Headers( 0 ),
		Data Starts on Row( 1 ),
		Cell Range( "A1:C2" ),
		Import Cell Colors( 0 ),
		Suppress Empty Columns( 1 )
	)
);

```

### Gradient Function

**Sintaxis:** Gradient Function( zExpr, xName, yName, zLimits, zColor( color list or matrix ), &lt; &lt;&lt;XGrid( min, max, incr )&gt;, &lt; &lt;&lt;YGrid( min, max, incr )&gt;, &lt; &lt;&lt;Transparency( t )&gt; )

**Descripción:** Rellena el gráfico con un gradiente entre dos colores. El argumento zExpr es una función en términos de las variables especificadas por xName y yName. El vector zLimits especifica el intervalo de valores de zExpr. El argumento zColor es un vector o lista que definen los dos colores que se combinan para crear el gradiente. Transparency es un valor único que se aplica a toda la cuadrícula.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Gradient Function(
			Log( a * a + b * b ),
			a,
			b,
			[2 10],
			Z Color( {"Green", "Orange"} )
		)
	)
);

```

### Graph

**Sintaxis:** y = Graph Box( props, script )

**Descripción:** Devuelve un cuadro de visualización que contiene un gráfico con ejes. Los argumentos de propiedades con nombre pueden ser title("título"), XScale(mínimo, máximo), YScale(mínimo, máximo), FrameSize(h,v), XName("x"), yName("y"), DoubleBuffer y SuppressAxes.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### Graph 3D Box

**Sintaxis:** y = Graph 3D Box()

**Descripción:** (Experimental) Devuelve un cuadro de visualización con contenido en 3D que se puede usar en otros cuadros de visualización para crear informes personalizados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

x3d = Graph 3D Box(
	framesize( 300, 300 ),
	Xname( "X Axis" ),
	Yname( "Y Axis" ),
	Zname( "Z Axis" )
);
New Window( "Graph3DBox Example", x3d );
x3d << addmarkers( /*x*/[20 20 20 20], /*y*/[20 20 20 20], /*z*/[10 20 30 40] );
x3d << AddVector(
	[60 60 60]/*from*/,
	[90 60 60, 60 90 60, 60 60 90]/*to*/,
	ShaftThickness( [.1] ),
	FromThickness( [.2] ),
	ToThickness( [.3] ),
	ShaftColor( [-255] ),
	FromColor( [-16711680] ),
	ToColor( [-65280] ),
	Facets( Round ),
	FromCap( Sphere ),
	toCap( Point )
);

```

### Graph Box

**Sintaxis:** y = Graph Box( props, script )

**Descripción:** Devuelve un cuadro de visualización que contiene un gráfico con ejes. Los argumentos de propiedades con nombre pueden ser title("título"), XScale(mínimo, máximo), YScale(mínimo, máximo), FrameSize(h,v), XName("x"), yName("y"), DoubleBuffer y SuppressAxes.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### Greater

**Sintaxis:** z = x &gt; y &gt; ... ; z = Greater( x, y, ... )

**Descripción:** Devuelve 1 si cada argumento es mayor que el siguiente y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

3 > 2 > 1;

```

### Greater or Equal

**Sintaxis:** z = x &gt;= y &gt;= ... ; z = Greater or Equal( x, y, ... )

**Descripción:** Devuelve 1 si cada argumento es mayor o igual que el siguiente y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

3 >= 2 >= 2;

```

### Gzip Compress

**Sintaxis:** blob = Gzip Compress( blob )

**Descripción:** Comprime un blob de datos en un blob GZip.

**JMP Versión agregada:** 14

```jsl

Gzip Compress(
	Char To Blob( "random data does not usually compress well and may get larger" )
);

```

### Gzip Uncompress

**Sintaxis:** blob = Gzip Uncompress( blob )

**Descripción:** Descomprime un blob de datos GZip en un blob.

**JMP Versión agregada:** 14

```jsl

Gzip Uncompress(/*typically this data might come from GzipCompress() but might also come from a .gz file using loadTextFile with the blob option*/
	Char To Blob(
		"~1F~8B~08~00~00~00~00~00~00~0A~0D~CA~C1~0D~00~21~08~04~C0V~B6~B5~CDA~FC~80~5C~00c~EC^~E7=~C9)~E1~106~21~A1~85~19~8DU~8Bf~07_~F8~9FZ~85~ADfx~13~CE~83~A1~0Dc~0E~CD~0B~94*~16~1E=~00~00~00",
		"ascii~hex"
	)
);

```

### H Center Box

**Sintaxis:** y = H Center Box( &lt;childbox&gt; )

**Descripción:** Devuelve un cuadro de visualización con el argumento del cuadro de visualización childbox centrado horizontalmente según el tamaño máximo de este hijo y de todos los demás hermanos del recuadro central.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "test",
	H List Box(
		V Center Box( Text Box( "V+V" ) ),
		V List Box(
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			H Center Box( Text Box( "H+H" ) ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" )
		)
	)
);

```

### H Direct Product

**Sintaxis:** y = H Direct Product( A, B )

**Descripción:** Devuelve el producto directo horizontal, que consiste en el producto directo de cada fila de las matrices A y B.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exA = [1 2, 3 4];
exB = [1 1 1, 2 2 2];
exProd = H Direct Product( exA, exB );
Show( exProd );

/* verify result */
Show( exProd[1, 1 :: 6] == Direct Product( exA[1, 1 :: 2], exB[1, 1 :: 3] ) );
Show( exProd[2, 1 :: 6] == Direct Product( exA[2, 1 :: 2], exB[2, 1 :: 3] ) );

```

### H Line

**Sintaxis:** H Line( y ); H Line( x1, x2, y )

**Descripción:** Dibuja una línea horizontal en y desde x1 hasta x2 o de extremo a extremo del marco.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 2 );
		H Line( 10, 50, 20 );
	)
);

```

### H List Box

**Sintaxis:** y = H List Box( &lt;Align( center|bottom )&gt;, displayBox, ... )

**Descripción:** Devuelve un cuadro de visualización que organiza los cuadros de visualización indicados por los argumentos en disposición horizontal. El mensaje <<Hold indica a la hoja que se convierta en propietaria de los informes extraídos. El argumento opcional Align permite alinear los contenidos a la derecha (bottom) o en el centro (center) dentro del cuadro de visualización.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Outline Box( "Picker", H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ) )
);

```

### H Scroll Box

**Sintaxis:** y = H Scroll Box( &lt;Size( x )&gt;, displayBox )

**Descripción:** Devuelve un cuadro de visualización que sirve para posicionar un cuadro hijo mayor usando una barra de desplazamiento horizontal.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Outline Box( "Picker",
		H Scroll Box(
			Size( 200 ),
			H List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### H Sheet Box

**Sintaxis:** y = H Sheet Box( &lt;&lt;Hold( rpt ), displayBox, ... )

**Descripción:** Devuelve un cuadro de visualización que organiza los cuadros de visualización indicados por los argumentos en disposición horizontal. El mensaje <<Hold indica a la hoja que se convierta en propietaria de los informes extraídos. El argumento opcional Align permite alinear los contenidos a la derecha (right) o en el centro (center) dentro del cuadro de visualización.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### H Size

**Sintaxis:** h = H Size()

**Descripción:** Devuelve el tamaño horizontal del marco de gráficos en píxeles.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( H Size() / 20 );
		Line( [10 30 90], [88 22 44] );
	)
);

```

### H Splitter Box

**Sintaxis:** y = H Splitter Box( &lt;Size(x,y)&gt;, displayBox, ... )

**Descripción:** Devuelve un cuadro de visualización que organiza otros cuadros de visualización horizontalmente, con un control interactivo de los tamaños. Los tamaños de los hijos se especifican como proporciones del ancho o el alto de Splitter Box. El argumento Size opcional solo se utiliza para el cuadro divisor superior. A los cuadros de nivel inferior se les asignan tamaños como los de cualquier otro cuadro hijo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Splitter",
	V Splitter Box(
		Size( 800, 600 ),
		H Splitter Box( graph = Graph Box(), Script Box(), <<Sizes( {0.6, 0.4} ) ),
		H Splitter Box(
			pict = Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) ),
			spacer = Spacer Box(),
			<<Sizes( {0.4, 0.6} )
		)
	)
);
graph[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
pict << Set Min Size( 100, 100 );
pict << Set Max Size( 500, 500 );
pict << Set Stretch( "Window", "Window" );
spacer << Set Fill( 1 );
spacer << Color( "Red" );
spacer << Set Stretch( "Window", "Window" );

```

### Hadamard

**Sintaxis:** y = Hadamard( n, &lt;normalize = 0&gt; )

**Descripción:** Crea una matriz Hadamard de orden n.

**JMP Versión agregada:** 15

```jsl

Show( Hadamard( 12 ), Hadamard( 12, 1 ) );

```

### Handle

**Sintaxis:** Handle( xPos, yPos, dragScript, &lt;mouseUpScript&gt; )

**Descripción:** Dibuja un marcador cuadrado en las coordenadas especificadas por xPos e yPos y evalúa repetidamente la expresión dragScript cuando se pulsa el ratón encima del marcador. Antes de ejecutar el script, los valores globales x e y se fijan a los valores del ratón y, a continuación, se devuelven a sus valores iniciales. La expresión mouseUpScript se ejecuta después de soltar el botón del ratón.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	exx = 20;
	exy = 50;,
	Graph Box(
		Frame Size( 200, 200 ),
		Handle(
			exx,
			exy,
			exx = x;
			exy = y;
		);
		Circle( {0, 0}, Sqrt( exx * exx + exy * exy ) );
	)
);

```

### Head

**Sintaxis:** y = Head( x )

**Descripción:** Devuelve el inicio de la expresión evaluada, sin sus argumentos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Head( Expr( Sum( a, b, c ) ) );

```

### Head Expr

**Sintaxis:** y = Head Expr( expr )

**Descripción:** Devuelve el inicio de la expresión, sin sus argumentos. Esta función está en desuso. Utilice Head() en su lugar.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

// See Example 2 for the deprecated Head Expr() equivalent
Head( Expr( Sum( a, b, c ) ) );

```

**Ejemplo 2**

```jsl

// Deprecated
Head Expr( Sum( a, b, c ) );

```

### Head Name

**Sintaxis:** y = Head Name( x )

**Descripción:** Devuelve el inicio de la expresión evaluada en forma de cadena de caracteres, sin sus argumentos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Head Name( Expr( Sum( a, b, c ) ) );

```

### Head Name Expr

**Sintaxis:** y = Head Name Expr( expr )

**Descripción:** Devuelve el inicio de la expresión como cadena, sin sus argumentos. Esta función está en desuso. Utilice Head Name() en su lugar.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

// See Example 2 for the deprecated Head Name Expr() equivalent
Head Name( Expr( Sum( a, b, c ) ) );

```

**Ejemplo 2**

```jsl

// Deprecated
Head Name Expr( Sum( a, b, c ) );

```

### Heat Color

**Sintaxis:** y = Heat Color( x ); y = Heat Color( x, &lt; &lt;&lt;theme&gt; )

**Descripción:** Devuelve un color que corresponde a un valor entre 0 y 1. El tema predeterminado es "Azul a gris y a rojo". Admite cualquier tema de los que admite el Gráfico de celdas y también admite argumentos matriciales.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Color Bar",
	Graph(
		For( z = 0, z < 1, z += .1,
			x = 10 + 80 * z;
			Fill Color( Heat Color( z, <<"Green to Black to Red" ) );
			Rect( x - 5, 45, x + 5, 55, 1 );
		)
	)
);

```

### Hex

**Sintaxis:** h = Hex( value, &lt;"integer"&gt;|&lt;encoding="utf-8"&gt;|&lt;Base(number)&gt;,&lt;Pad To(number)&gt; )

**Descripción:** Devuelve el texto hexadecimal (u otro sistema numérico base) correspondiente al valor y la codificación dados, que puede ser un número, una cadena o un blob. Si el valor es un número, se utiliza la codificación IEEE 754 de 64 bits a menos que se proporcione uno de los argumentos opcionales, integer o Base. Si se especifica Base, la función devuelve el texto correspondiente al número especificado en ese sistema numérico base, en lugar de en hexadecimal. La base debe ser un valor entero entre 2 y 36, ambos incluidos. Algunas de las codificaciones compatibles son utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis y euc-jp.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" ) || " " ||
Hex( 11, Base( 2 ), Pad To( 8 ) );

```

### Hex To Blob

**Sintaxis:** blob = Hex To Blob( hex string )

**Descripción:** Obtiene un BLOB (Binary Large OBject) a partir de la cadena de caracteres indicada con códigos hexadecimales, que también puede contener espacios, comas, retornos de carro y avances de línea.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Hex To Blob( "FF78CE" );

```

### Hex To Char

**Sintaxis:** s = Hex To Char( hextext, &lt;encoding="utf-8"&gt; )

**Descripción:** Devuelve el texto correspondiente al texto hexadecimal, usando la codificación especificada. Se admiten las codificaciones utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis y euc-jp.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Hex To Char( "436166C3A9" ) || Hex To Char( "00430061006600E9", "utf-16be" );

```

### Hex To Number

**Sintaxis:** x = Hex To Number( hextext, &lt;Base(number)&gt; )

**Descripción:** Devuelve el número correspondiente al texto hexadecimal (u otro sistema numérico base). 16 dígitos hexadecimales se convierten como números de punto flotante IEEE 754 de 64 bits; de lo contrario, la entrada se considera un entero hexadecimal. Si se especifica Base, el texto se considera una cadena que representa al número en esa base. La base debe ser un entero entre 2 y 36, ambos incluidos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Hex To Number( "11110000", Base( 2 ) );

```

### Hidden

**Sintaxis:** y = Hidden( &lt;rs&gt; ); Hidden( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Descripción:** Devuelve el componente de ocultación del valor de estado fila especificado, 0 o 1. Si la función Hidden se usa como L-value, cambia el estado de ocultación de la fila actual (o la r-ésima) de la tabla de datos actual.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );
Row() = 3;
Hidden();

```

### Hidden State

**Sintaxis:** rs = Hidden State( x )

**Descripción:** Devuelve un valor de estado de fila con la componente de ocultación ajustada al valor especificado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );

```

### Hier Box

**Sintaxis:** y = Hier Box( text, Hier Box( ... ), Hier Box( ... ), ... )

**Descripción:** Devuelve un cuadro de visualización para árboles jerárquicos. El argumento text es el nombre del nodo y puede ser un Text Edit Box.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Hier Box(
		Text Edit Box( "Cause 1" ),
		Hier Box( Text Edit Box( "Subcause 1.1" ), <<direction( 1 ) ),
		Hier Box( Text Box( "Subcause 1.2" ) ),
		<<Change Type( Fishbone ),
		<<direction( 1 )
	)
);

```

### Hier Clust

**Sintaxis:** {c1, c2, c3, c4, c5} = Hier Clust( x )

**Descripción:** Devuelve la historia de conglomeración de una conglomeración jerárquica determinada mediante el método de Ward (sin estandarización de datos), donde x es una matriz de datos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exdt = Open( "$SAMPLE_DATA/Body Measurements.jmp" );
ex = exdt << get as matrix();
exhc = Hierarchical Cluster(
	Y( Eval( exdt << Get Column Names ) ),
	Method( Ward ),
	Standardize( 0 ),
	Dendrogram Scale( Even Spacing ),
	Number of Clusters( 3 )
);
Report( exhc )["Dendrogram"] << Close( 1 );
Report( exhc )["Clustering History"] << Close( 0 );
exhistory = Hier Clust( ex );
exhistory[3, 1];

```

### Hist Seg

**Sintaxis:** b = Hist Seg([data], &lt;[freq data]&gt;,&lt;[weight data]&gt;, &lt;vertical=0|1&gt;, &lt;Row States()&gt;)

**Descripción:** Devuelve un segmento de histograma

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, .2 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);

```

### HLS Color

**Sintaxis:** y = HLS Color( h, l, s ); y = HLS Color( {h, l, s} )

**Descripción:** Devuelve un número de color a partir de los componentes de tono, brillo y saturación, todos entre 0 y 1.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Color Wheel",
	Graph(
		frameSize( 200, 200 ),
		For( hue = 0, hue < 360, hue += 30,
			y = 50 - 40 * Cos( hue * 2 * Pi() / 360 );
			x = 50 + 40 * Sin( hue * 2 * Pi() / 360 );
			Fill Color( HLS Color( hue / 360, 0.5, 1 ) );
			Oval( x - 10, y - 10, x + 10, y + 10, 1 );
		)
	)
);

```

### Host is

**Sintaxis:** y = Host is( "Mac"|"Windows"|"Bits32"|"Bits64"|"x86_64"|"arm64" )

**Descripción:** Devuelve 1 si la aplicación JMP coincide con el argumento y 0 en caso contrario. Los argumentos Windows o Mac sirven para comprobar si el sistema operativo es el especificado, y los argumentos Bits32 o Bits64 para comprobar si se trata de la aplicación JMP de 32 bits o de 64 bits. Sólo se puede probar un argumento por vez.

**JMP Versión agregada:** Antes de la versión 14

```jsl

If( Host is( "Mac" ),
	Show( "On Mac" ),
	Show( "Not on Mac" )
);
If( Host is( "Bits64" ),
	Show( "64 bit" )
);
If(
	Host is( "x86_64" ), Show( "On x86_64" ),
	Host is( "arm64" ), Show( "On arm64" )
);

```

### Hough Line Transform

**Sintaxis:** accum = Hough Line Transform( matrix, &lt;NAngle(number)&gt; &lt;NRadius(number)&gt; )

**Descripción:** Devuelve la transformación de Hough para detectar líneas en datos de imagen

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

xx = .4;
yy = .4;
angleDegrees = (1 :: 180)`;
angle = Pi() * angleDegrees / (180);
New Window( "Hough Transform Demo 1",
	Border Box( Left( 20 ), Top( 20 ), Right( 15 ), Bottom( 15 ),
		V List Box(
			Text Box( "Click and drag the circle in a straight line." ),
			Graph Box(
				X Scale( -1, 1 ),
				Y Scale( -1, 1 ),
				Circle( {xx, yy}, .05 );
				Text( {xx + .1, yy + .1}, Char( xx, 4 ) || " " || Char( yy, 4 ) );
				Mousetrap(
					xx = x;
					yy = y;
					gb << reshow;
				);
			),
			Text Box( "For angle 1 to 180 , x*Cos(angle)+y*Sin(angle)" ),
			Text Box( "What position stays constant as you move?" ),
			gb = Graph Box(
				X Scale( 0, 180 ),
				XName( "Angle" ),
				Y Scale( -1.5, 1.5 ),
				YName( "Distance to Line" ),
				Line( angleDegrees, xx * Cos( angle ) + yy * Sin( angle ) )
			)
		)
	)
);

```

**Ejemplo 2**

```jsl

nRow = 35;
nCol = 35;

// Make a wafer template missing outside a radius
waferTemplate = J( nRow, nCol, 0 );
If( 0,
	For( i = 1, i <= nRow, i++,
		For( j = 1, j <= nCol, j++,
			If( (i - nrow / 2) ^ 2 + (j - nCol / 2) ^ 2 > ((nRow + nCol) / 4) ^ 2,
				waferTemplate[i, j] = .
			)
		)
	)
);
wafer = waferTemplate;
wafer[5, 22] = 1;
lightGray = RGB Color( .9, .9, .9 );
showWafer = Expr(
	For( i = 1, i <= nRow, i++,
		For( j = 1, j <= nCol, j++,
			z = wafer[i, j];
			If( Is Missing( z ),
				Continue()
			);
			Fill Color( If( z == 0, lightGray, 3 ) );
			Rect( i - nrow / 2, j - nCol / 2, i - nrow / 2 - 1, j - nCol / 2 + 1, 1 );
		)
	)
);
showHough = Expr(
	accum = Hough Line Transform( wafer );
	maxAccum = Max( Max( accum ), 1 );
	accumHeat = Heat Color( accum / maxAccum );
	nr = N Row( accum );
	nc = N Col( accum );
	For( i = 1, i <= nr, i++,
		For( j = 1, j <= nc, j++,
			z = accumHeat[i, j];
			Fill Color( z );
			Rect( j - 1, nr - i, j, nr - i + 1, 1 );
		)
	);
    //Marginals
	radiusDensity = V Max( accum` );
	radiusScale = 3 * Max( radiusDensity ) / Mean( radiusDensity );
	radiusColor = Heat Color( radiusDensity / radiusScale );
	If( 1,
		angleDensity = V Max( accum );
		angleScale = 3 * Max( angleDensity ) / Mean( angleDensity );
		angleColor = Heat Color( angleDensity / angleScale );
	,
		angle1 = angleDensity - Mean( angleDensity );
		angle1 = angle1 :* (angle1 > 0);
		angleColor = Heat Color( angle1 / Max( angle1 ) );
	);
	For( j = 1, j <= nc, j++,
		Fill Color( angleColor[j] );
		Rect( j - 1, -5, j, -8, 1 );
	);
	For( i = 1, i <= nr, i++,
		Fill Color( radiusColor[i] );
		Rect( 185, nr - i, 190, nr - i + 1, 1 );
	);
);
mouseAction = Expr(
	i = Floor( x + nrow / 2 + .5 );
	j = Floor( y + ncol / 2 + .5 );
	If( i > 0 & i <= nRow & j > 0 & j <= nCol,
		wafer[i, j]
		++);
	bothBox << reshow;
);
New Window( "Hough Transform Demo 2",
	Border Box( Left( 15 ), Top( 15 ), Right( 10 ), Bottom( 10 ),
		bothBox = V List Box(
			Text Box( "Click to add points in the top frame along a slanted line." ),
			Text Box( "The Hough transform is shown below with marginal densities." ),
			Text Box( "" ),
			H List Box(
				Button Box( "Clear",
					wafer = waferTemplate;
					bothBox << Reshow;
				),
				Button Box( "Add Random",
					wafer = wafer | J( nRow, nCol, Random Uniform() < .05 );
					bothBox << Reshow;
				)
			),
			waferBox = Graph Box(
				X Scale( -18, 18 ),
				Y Scale( -18, 18 ),
				FrameSize( 300, 300 ),
				XName( "Angle" ),
				YName( "Radius" ),
				Mousetrap( mouseAction ),
				showWafer
			),
			houghBox = Graph Box(
				X Scale( 0, 190 ),
				Y Scale( -10, 50 ),
				FrameSize( 500, 200 ),
				showHough
			)
		)
	)
);

```

### Hour

**Sintaxis:** hr = Hour( datetime, &lt;12&gt; )

**Descripción:** Devuelve las horas correspondientes al valor de fecha y hora, en modo 12 horas (12, 1 - 11) o 24 horas (0 - 23).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Hour( Today() );

```

### HP Time

**Sintaxis:** t = HP Time()

**Descripción:** Devuelve un valor de tiempo de alta precisión (HP) en microsegundos. Únicamente es útil en relación con otro valor de HP Time(). El valor de tiempo representa el número de microsegundos que transcurren desde el inicio de la sesión JMP.

**JMP Versión agregada:** Antes de la versión 14

```jsl

bt = HP Time();
Open( "$SAMPLE_DATA/Big Class.jmp" );
et = HP Time();
it = et - bt;
Show( it );

```

### Hue State

**Sintaxis:** rs = Hue State( x )

**Descripción:** Devuelve un valor de estado de fila con la componente de tono de color ajustada al valor especificado. Para generar un color válido, se debe combinar con un valor de Shade State().

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Hypergeometric Distribution

**Sintaxis:** cumprob = Hypergeometric Distribution( N, K, n, x, &lt;r&gt; )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución hipergeométrica sea menor o igual que x, donde N es el tamaño de la población, K es el número de elementos dentro de la categoría de interés, n es el tamaño muestral, x es el conteo de interés y r es la razón de posibilidades opcional.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exhdK = 10;
exhdn = 10;
New Window( "Example: Hypergeometric Distribution",
	exy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 21 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( exhdx = 0, exhdx < Round( exhdn ), exhdx++,
			H Line(
				exhdx,
				exhdx + 1,
				Hypergeometric Distribution( 20, Round( exhdK ), Round( exhdn ), exhdx )
			);
			V Line(
				exhdx + 1,
				Hypergeometric Distribution( 20, Round( exhdK ), Round( exhdn ), exhdx ),
				Hypergeometric Distribution( 20, Round( exhdK ), Round( exhdn ), exhdx + 1 )
			);
		);
		Text( {10, 0.17}, "N=", 20, " K=", Round( exhdK ), " n=", Round( exhdn ) );
	),
	H List Box( Slider Box( 0, 20, exhdK, exy << reshow ), Text Box( " K" ) ),
	H List Box( Slider Box( 0, 20, exhdn, exy << reshow ), Text Box( " n" ) )
);

```

### Hypergeometric Probability

**Sintaxis:** prob = Hypergeometric Probability( N, K, n, x, &lt;r&gt; )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución hipergeométrica sea igual a x, donde N es el tamaño de la población, K es el número de elementos dentro de la categoría de interés, n es el tamaño muestral, x es el conteo de interés y r es la razón de posibilidades opcional.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exhdK = 10;
exhdn = 10;
New Window( "Example: Hypergeometric Probability",
	exhdy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 21 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( exhdx = 0, exhdx <= Round( exhdn ), exhdx++,
			V Line(
				exhdx,
				0,
				Hypergeometric Probability( 20, Round( exhdK ), Round( exhdn ), exhdx )
			)
		);
		Text( {10, 0.17}, "N=", 20, " K=", Round( exhdK ), " n=", Round( exhdn ) );
	),
	H List Box( Slider Box( 0, 20, exhdK, exhdy << reshow ), Text Box( " K" ) ),
	H List Box( Slider Box( 0, 20, exhdn, exhdy << reshow ), Text Box( " n" ) )
);

```

### Icon Box

**Sintaxis:** Box = Icon Box( "Name" )

**Descripción:** Construye un cuadro de visualización que contiene un icono, donde el argumento name puede ser el nombre de un icono de o una ruta a una imagen.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

New Window( "Example",
	ex1 = Icon Box( "Popup" ),
	ex2 = Icon Box( "Locked" ),
	ex3 = Icon Box( "Labeled" ),
	ex4 = Icon Box( "Sub" ),
	ex5 = Icon Box( "Excluded" ),
	ex6 = Icon Box( "Hidden" ),
	ex7 = Icon Box( "Continuous" ),
	ex8 = Icon Box( "Nominal" ),
	ex9 = Icon Box( "Ordinal" )
);

```

**Ejemplo 2**

```jsl

New Window( "Example with Path", ex = Icon Box( "$SAMPLE_IMAGES/pi.gif" ) );

```

### Identity

**Sintaxis:** y = Identity( n )

**Descripción:** Crea una matriz identidad n-por-n, con unos en la diagonal y ceros en el resto de posiciones.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Identity( 2 );

```

### If

**Sintaxis:** y = If( condition1, result1, &lt;condition2, result2&gt;, ..., &lt;elseResult&gt; )

**Descripción:** Evalúa la primera de cada pareja de argumentos y devuelve la evaluación de la expresión result asociada al primer argumento de condition que evalúa como un resultado distinto de cero. Los argumentos de condition se evalúan en orden. Si todos los argumentos de condition evalúan como cero, se evalúa el elseResult opcional y se devuelve el resultado. Si no se especifica ningún elseResult, y ninguna de las condiciones son verdaderas, se devuelve un valor faltante. Si todos los argumentos de condition evalúan como faltante, se devuelve un valor faltante.

**JMP Versión agregada:** Antes de la versión 14

```jsl

If( Random Uniform() < 0.5,
	"heads",
	"tails"
);

```

### If Box

**Sintaxis:** box = If Box( 0|1, displayBoxArgs )

**Descripción:** Devuelve un cuadro de visualización que muestra de forma condicional los argumentos de cuadro de visualización especificados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	H List Box(
		englishBox = If Box( 1, Text Box( "Good day" ) ),
		frenchBox = If Box( 0, Text Box( "Bon Jour" ) )
	)
);
Wait( 5 );
englishBox << Set( 0 );
frenchBox << Set( 1 );

```

### If Seg

**Sintaxis:** seg = If Seg(&lt;state=0|1&gt;)

**Descripción:** Devuelve un segmento de visualización que muestra u oculta los segmentos de visualización hijos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) )
);

```

### IfMax

**Sintaxis:** y = IfMax( expr1, result1, expr2, result2, ..., &lt;allMissingResult&gt; )

**Descripción:** Evalúa el primero de cada par de argumentos y devuelve la evaluación de la expresión resultado que resulta asociada al máximo de las expresiones. Si se produce un empate, devuelve el primer máximo. En caso de que no haya ninguna expresión, si el número de argumentos es par, devuelve Vacío, y si es impar, el último argumento. Las expresiones de prueba deben dar un resultado numérico, pero las expresiones resultado pueden ser cualesquiera.

**JMP Versión agregada:** Antes de la versión 14

```jsl

TomScore = 45;
JonScore = 47;
TimScore = 46;
highestScorer = IfMax( TomScore, "Tom", JonScore, "Jon", TimScore, "Tim", "Noone" );

```

### IfMin

**Sintaxis:** y = IfMin( expr1, result1, expr2, result2, ..., &lt;allMissingResult&gt; )

**Descripción:** Evalúa el primero de cada par de argumentos y devuelve la evaluación de la expresión resultado que resulta asociada al mínimo de las expresiones. Si se produce un empate, devuelve el primer mínimo. En caso de que no haya ninguna expresión, si el número de argumentos es par, devuelve Vacío, y si es impar, el último argumento. Las expresiones de prueba deben dar un resultado numérico, pero las expresiones resultado pueden ser cualesquiera.

**JMP Versión agregada:** Antes de la versión 14

```jsl

TomScore = 45;
JonScore = 47;
TimScore = 46;
lowestScorer = IfMin( TomScore, "Tom", JonScore, "Jon", TimScore, "Tim", "Noone" );

```

### IfMZ

**Sintaxis:** y = IfMZ( condition1, result1, &lt;condition2, result2&gt;, ..., &lt;elseResult&gt; )

**Descripción:** Evalúa la primera de cada pareja de argumentos y devuelve la evaluación de la expresión result asociada al primer argumento de condition que evalúa como un resultado distinto de cero. Los argumentos de condition se evalúan en orden. Si todos los argumentos de condition evalúan como cero o faltante, se evalúa el elseResult opcional y se devuelve el resultado. Si no se especifica ningún elseResult, y ninguna de las condiciones son verdaderas, se devuelve un valor faltante. (IfMZ() equivale a If() donde los valores faltantes de los argumentos de condition evaluados se consideran cero.)

**JMP Versión agregada:** Antes de la versión 14

```jsl

x = 1;
Show( IfMZ( x == 1, 10, x == 2, 20, 30 ) );
x = .;
Show( IfMZ( x == 1, 10, x == 2, 20, 30 ) );
x = .;
Show( If( x == 1, 10, x == 2, 20, 30 ) );

```

### IGamma

**Sintaxis:** p = Gamma Distribution( q, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución Gamma sea menor que q, donde el argumento del parámetro de forma alpha debe ser positivo. IGamma() es un alias de Gamma Distribution(). La función Gamma Distribution() equivale a Gamma(alpha,q)/Gamma(alpha).

**JMP Versión agregada:** Antes de la versión 14

```jsl

gdialpha = Log( 1.5 );
New Window( "Example: Gamma Distribution",
	gdiy = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 12 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Gamma Distribution( gdiq, Exp( gdialpha ) ), gdiq );
		Text( {1, 0.9}, "\!U03B1=", Round( Exp( gdialpha ), 2 ) );
	),
	H List Box(
		Slider Box( Log( 0.1 ), Log( 12 ), gdialpha, gdiy << reshow ),
		Text Box( " \!U03B1" )
	)
);

```

### In Days

**Sintaxis:** y = In Days( &lt;x=1&gt; )

**Descripción:** Convierte un número de días x en su equivalente en segundos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

In Days( 1.5 );

```

### In Hours

**Sintaxis:** y = In Hours( &lt;x=1&gt; )

**Descripción:** Convierte un número de horas x en su equivalente en segundos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

In Hours( 0.5 );

```

### In Minutes

**Sintaxis:** y = In Minutes( &lt;x=1&gt; )

**Descripción:** Convierte un número de minutos x en su equivalente en segundos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

In Minutes( 1 );

```

### In Path

**Sintaxis:** b = In Path( x, y, pathMatrix|pathText )

**Descripción:** Devuelve 1 si el punto (x, y) pertenece al trazado especificado y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl


New Window( "Example",
	window:p = "M10 10 L52 10 L37 52 Z M20 16 L40 20 L35 40 Z";
	Graph Box(
		Fill Color( "light blue" );
		Path( window:p, 1 );
		For Each( {x}, 5 :: 55 :: 5,
			For Each( {y}, 5 :: 55 :: 5,
				Marker(
					Marker State( If( In Path( x, y, window:p ), "x", "circle" ) ),
					{x, y}
				)
			)
		);
	);
);

```

### In Polygon

**Sintaxis:** b = In Polygon( x, y, xMatrix, &lt;yMatrix&gt; )

**Descripción:** Devuelve 1 si el punto (x,y) pertenece al polígono definido por los vectores indicados como argumentos y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

In Polygon( 11, 22, [10 20 30], [10 30 20] );

```

### In Weeks

**Sintaxis:** y = In Weeks( &lt;x=1&gt; )

**Descripción:** Convierte un número de semanas x en su equivalente en segundos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

In Weeks( 1 );

```

### In Years

**Sintaxis:** y = In Years( &lt;x=1&gt; )

**Descripción:** Convierte un número de años x en su equivalente en segundos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

In Years( 1 );

```

### Include

**Sintaxis:** y = Include( filepath, &lt; &lt;&lt;Parse Only&gt;, &lt; &lt;&lt;New Context&gt;, &lt; &lt;&lt;Names Default to Here&gt; )

**Descripción:** Ejecuta el JSL del archivo especificado. Si se especifica Parse Only, se analiza el script en lugar de ejecutarlo. Si se especifica New Context, se ejecuta el JSL incluido en su propio espacio de nombres unívoco. Si tanto el script incluido como el script progenitor utilizan el espacio de nombres global, especifique New Context y Names Default to Here para evitar colisiones de nombres.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Include( "$SAMPLE_SCRIPTS/chaosGame.jsl" );

```

### Include File List

**Sintaxis:** y = Include File List()

**Descripción:** Devuelve una lista de los archivos incluidos en el punto de ejecución.

**JMP Versión agregada:** Antes de la versión 14

```jsl

y = Include File List();

```

### Index

**Sintaxis:** ii = n1::n2; ii = n1::n2::n3; ii = Index( n1, n2, &lt;n3=1&gt;)

**Descripción:** Devuelve una matriz de fila que contiene la secuencia de valores de n1 a n2 por incrementos de n3.

**JMP Versión agregada:** Antes de la versión 14

```jsl

1 :: 10;

```

### Informat

**Sintaxis:** dt = In Format( s, formatString, &lt; &lt;&lt;Use Locale(b=1)&gt;, &lt; &lt;&lt;Restrict &gt; ) dt = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )

**Descripción:** Analiza una cadena de caracteres de un formato dado. Si el formato es un formato de fecha y hora, el valor se expresa como si estuviera rodeado por As Date(), devolviendo la fecha en formato ddmesaaaa. El ajuste <<Restrict opcional utilizado con la "mejor" formatString solo permite la conversión con formatos enteros, decimales y científicos.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Informat( "07152000", "MMDDYYYY" );

```

**Ejemplo 2**

```jsl

Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

**Ejemplo 3**

```jsl

Informat( "86.8287° W", "Longitude DDD" );

```

**Ejemplo 4**

```jsl

Informat( "123.45%", "Percent" );

```

**Ejemplo 5**

```jsl

Show(
	Informat( "1.23e4", "Best" ),
	Informat( "1.23e4", "Best", <<Restrict ),
	Informat( "1989-10-04", "Best" ),
	Informat( "1989-10-04", "Best", <<Restrict )
);

```

### Inner Product BLAS

**Sintaxis:** y = Inner Product BLAS( A, B, ... )

**JMP Versión agregada:** 17

```jsl

a = [1, 2, 3, -2, 0, -1, 0, 1, 1];
b = [4, 5, 6, -2, 0, -1, 0, 7, 2];
y = Inner Product BLAS( a, b );

```

### Insert

**Sintaxis:** z = Insert( x, y, &lt;i&gt; )

**Descripción:** Devuelve una copia de la lista x con y insertado en la i-ésima posición o añadido al final si no se especifica el argumento opcional i.

**JMP Versión agregada:** Antes de la versión 14

```jsl

z = {11, 22, 33};
z = Insert( z, 99, 2 );

```

### Insert Into

**Sintaxis:** Insert Into( x, y, &lt;i&gt; )

**Descripción:** Modifica la lista, el arreglo asociativo o el cuadro de visualización x con y insertada en la colección. Las listas y cuadros de visualización admiten una variable i opcional para especificar la posición, o se añadirán los elementos si no se especifica la posición. Tenga en cuenta de que el argumento x debe ser una variable.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

ex = {11, 22, 33};
Insert Into( ex, 99 );
ex;

```

**Ejemplo 2**

```jsl

ex = ["a" => 10, "b" => 3, => 0];
Insert Into( ex, "c", 12 );
ex;

```

**Ejemplo 3**

```jsl

New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
Wait( 1 );
Insert Into( hlist, Button Box( "c" ) );

```

### Install MATLAB Dependencies

**Sintaxis:** Install MATLAB Dependencies(&lt;Patch(0|1)&gt;)

**Descripción:** Instala las dependencias de MATLAB necesarias.

**JMP Versión agregada:** Antes de la versión 14

```jsl


If( !Check MATLAB Dependencies(),
	Install MATLAB Dependencies(),
	Print( "Dependencies are installed" )
);

```

### Integrate

**Sintaxis:** y = Integrate( expr, varname, lowLimit, upLimit, &lt;&lt;Tolerance(1e-10), &lt;&lt;StoreInfo(list), &lt;&lt;StartingValue(val) )

**Descripción:** Integra una expresión con respecto a un valor escalar, utilizando el método de cuadratura adaptativa de Gander y Gautschi (2000). Si la variable especificada con varname tiene un valor asignado o el argumento opcional <<StartingValue() especifica un valor de inicio, dicho valor se utilizará como valor típico para mejorar la precisión de la integral. Para especificar rangos de integración infinitos, establezca lowLimit, upLimit o ambos en faltante. Si se especifica <<StoreInfo(), el argumento de <<StoreInfo() contendrá diagnósticos de la rutina de integración numérica. Si se especifica <<Tolerance(), el argumento de <<Tolerance() se utilizará como el nivel de tolerancia en la función de autointegración utilizada para evaluar la integral. Los valores más pequeños se traducen en tiempos de corrida más prolongados pero con resultados más precisos.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Integrate( Exp( -x ), x, 0, . );

```

**Ejemplo 2**

```jsl

x = 100;
Integrate( Normal Density( x - 100 ), x, ., . );

```

### Interest Payment

**Sintaxis:** x = Interest Payment( rate, per, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Descripción:** Devuelve los intereses pagados durante un período especificado para una inversión basándose en pagos periódicos constantes y una tasa de interés constante. El argumento type es 0 para los pagos al final de cada período y 1 para los pagos al inicio de cada período. Equivale a la función IPMT de Microsoft Excel.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Interest Rate

**Sintaxis:** x = Interest Rate( nper, pmt, pv, &lt;fv=0&gt;, &lt;type=0&gt;, &lt;guess=0.1&gt; )

**Descripción:** Devuelve la tasa de interés en un período o una anualidad. El argumento type es 0 para los pagos al final de cada período y 1 para los pagos al inicio de cada período. Equivale a la función RATE de Microsoft Excel.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Interest Rate( 30 * 12, Payment( .05 / 12, 30 * 12, 100000 ), 100000 );

```

### Internal Rate of Return

**Sintaxis:** x = Internal Rate of Return( values, &lt;guess=0.1&gt; ); x = Internal Rate of Return( guess, value1, value2, &lt;value3, ...&gt; )

**Descripción:** Devuelve la tasa interna de retorno de una serie de flujos de caja representados por los números contenidos en el argumento values. Equivale a la función IRR de Microsoft Excel. El segundo prototipo de la función acepta todos los argumentos escalares.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Internal Rate of Return( [-10000, 1000, 900, 950] );
Internal Rate of Return( .01, -10000, 1000, 900, 950 );

```

### Interpolate

**Sintaxis:** y = Interpolate(x|xmatrix|xlist, x1, y1, x2, y2); y = Interpolate(x | xmatrix | xlist, xmatrix, ymatrix); z = Interpolate({ x, y }, xvector, yvector, zmatrix)

**Descripción:** Encuentra los argumentos xi tales que x está entre ellos e interpola linealmente los argumentos yi correspondientes. Nótese que los argumentos xi se deben especificar por orden.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

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

**Ejemplo 2**

```jsl

Interpolate( 2.5, [1 2 3], [15, 20, 30] );

```

**Ejemplo 3**

```jsl

Interpolate( {.5, .8}, [0 1], [0 1], [10 20, 12 18] );

```

**Ejemplo 4**

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

### Inv

**Sintaxis:** y = Inverse( x ); y = Inv( x )

**Descripción:** Devuelve la inversa del argumento x, que debe ser una matriz no singular cuadrada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Round( Inverse( [11 22, 33 44] ), 2 );

```

### Inv Update

**Sintaxis:** y = Inv Update( S, X, &lt;w=1&gt; )

**Descripción:** Devuelve una matriz inversa actualizada, donde el primer argumento S es una matriz definida positiva y simétrica con el mismo número de columnas que X, el segundo argumento X es una matriz que contiene las filas a añadir o eliminar, y el tercer argumento w determina si se deben añadir o eliminar filas (1 para añadir filas y -1 para eliminarlas). Esta función equivale a S-w*S*X`*Inv(I+w*X*S*X`)*X*S, donde I es una matriz identidad y Inv(A) es la matriz inversa de A.

**JMP Versión agregada:** Antes de la versión 14

```jsl

/* Generate a design matrix */
exX = [1 0 4 2,
1 0 5 1,
1 0 2 4,
5 4 4 5,
0 1 4 3,
0 1 9 1,
0 1 2 4,
0 1 1 9,
0 1 5 2,
0 1 2 1,
0 1 4 5];
S = Inverse( exX` * exX );
Show( "----------Adding Rows (w=1) --------" );
X = [5 4 3 3, 4 3 2 1, 9 1 2 5];
w = 1;
y = Inv Update( S, X, w );
Show( "Result of Inv Update" );
Show( y );
Show( "Result of updating formula" );
Show( S - w * S * X` * Inv( Identity( N Row( X ) ) + w * X * S * X` ) * X * S );
Show( "Result of direct calculation" );
Show( Inverse( (exX |/ X)` * (exX |/ X) ) );
Show( "----------Deleting Rows (w=-1) --------" );
X = [0 1 5 2, 0 1 2 1, 0 1 4 5];
w = -1;
y = Inv Update( S, X, w );
Show( "Result of Inv Update" );
Show( y );
Show( "Result of updating formula" );
Show( S - w * S * X` * Inv( Identity( N Row( X ) ) + w * X * S * X` ) * X * S );
Show( "Result of direct calculation" );
p = N Row( exX ) - 3;
Show( Inverse( exX[Index( 1, p ), 0]` * exX[Index( 1, p ), 0] ) );

```

### Inverse

**Sintaxis:** y = Inverse( x ); y = Inv( x )

**Descripción:** Devuelve la inversa del argumento x, que debe ser una matriz no singular cuadrada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Round( Inverse( [11 22, 33 44] ), 2 );

```

### Invert Expr

**Sintaxis:** y = Invert Expr( expr, xname, yname )

**Descripción:** Invierte el argumento de la expresión expr, alrededor del único evento de xname.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Invert Expr( Sqrt( Log( x ) ), x, y );

```

### IRT Ability

**Sintaxis:** y = IRT Ability( Q1, ..., Qn, parmMatrix )

**Descripción:** Genera puntuaciones para la variable latente en un modelo de la teoría de respuesta al ítem con n ítems binarios y una matriz de parámetros desconocidos, especificada por parmMatrix. La matriz de parámetros debe contener tantas filas como parámetros haya en el modelo y tantas columnas como ítems en el análisis.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
obj = dt << Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5 ), Model( "Logistic 2PL" ) );
obj << Save Ability Formula;
Column( dt, N Cols( dt ) ) << Get Formula;

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
mth = (dt << get as matrix)[0, Index( 2, 6 )];
mthlst = {};
i = Floor( Random Uniform( 1, N Rows( mth ) ) );
mthlst[1] = mth[i, 1] |/ mth[i, 2] |/ mth[i, 3] |/ mth[i, 4] |/ mth[i, 5];
mthlst[2] = IRT Ability(
	mth[i, 1],
	mth[i, 2],
	mth[i, 3],
	mth[i, 4],
	mth[i, 5],
	[0.28 1.93 1.9 1.67 1, -0.06 -0.55 0.5 -1.89 0.04]
);
mthlst;

```

### Is Alt Key

**Sintaxis:** y = Is Alt Key()

**Descripción:** Devuelve 1 si la tecla Alt está pulsada y 0 en caso contrario. Está destinado a scripts de rellamada a gráficos. En Mac, Alt es la tecla Option.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Control Key(),
			Text( {60, 50}, "Control Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Associative Array

**Sintaxis:** y = Is Associative Array( x )

**Descripción:** Devuelve 1 si el argumento x es un arreglo asociativo y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Is Associative Array( [1 => 2] );

```

### Is Class

**Sintaxis:** isns = Is Class( class reference )

**Descripción:** Devuelve 1 si el argumento class es una clase. De lo contrario, devuelve 0.

**JMP Versión agregada:** Antes de la versión 14

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

### Is Command Key

**Sintaxis:** y = Is Command Key()

**Descripción:** Devuelve 1 si la tecla Command está pulsada y 0 en caso contrario. Está destinado a scripts de rellamada a gráficos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Command Key(),
			Text( {60, 50}, "Command Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Context Key

**Sintaxis:** y = Is Context Key()

**Descripción:** Devuelve 1 si la tecla Context está pulsada y 0 en caso contrario. Está destinado a scripts de rellamada a gráficos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Context Key(),
			Text( {60, 50}, "Context Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Control Key

**Sintaxis:** y = Is Control Key()

**Descripción:** Devuelve 1 si la tecla Control está pulsada y 0 en caso contrario. Está destinado a scripts de rellamada a gráficos. En Mac, Control es la tecla Command.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Control Key(),
			Text( {60, 50}, "Control Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Directory

**Sintaxis:** rc = Is Directory( path )

**Descripción:** Determina si la ruta especificada es un directorio. Devuelve 0 si la ruta no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

rc0 = Is Directory( "$SAMPLE_DATA" );
rc1 = Is Directory( "$SAMPLE_DATA/Big Class.jmp" );
Char( rc0 ) || " " || Char( rc1 );/* 1 0 */

```

### Is Directory Writable

**Sintaxis:** rc = Is Directory Writable( path )

**Descripción:** Determina si la ruta de directorio especificada permite la escritura. Devuelve 0 si la ruta no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Is Directory Writable( "$SAMPLE_DATA" );

```

### Is Empty

**Sintaxis:** y = Is Empty( name )

**Descripción:** Devuelve 1 si la variable no está definida o retiene el valor Empty().

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Is Empty( x );

```

**Ejemplo 2**

```jsl

x = Empty();
Is Empty( x );

```

**Ejemplo 3**

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

**Sintaxis:** y = Is Expr( x )

**Descripción:** Devuelve 1 si el argumento x es una expresión y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Is Expr( Expr( x ) );

```

### Is File

**Sintaxis:** rc = Is File( path )

**Descripción:** Determina si la ruta especificada es un archivo. Devuelve 0 si la ruta no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

rc0 = Is File( "$SAMPLE_DATA" );
rc1 = Is File( "$SAMPLE_DATA/Big Class.jmp" );
Char( rc0 ) || " " || Char( rc1 );/* 0 1 */

```

### Is File Writable

**Sintaxis:** rc = Is File Writable( path )

**Descripción:** Determina si la ruta de archivo especificada permite la escritura. Devuelve 0 si la ruta no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Is File Writable( "$SAMPLE_DATA/Big Class.jmp" );

```

### Is JMP Live URL Enabled

**Sintaxis:** Is JMP Live URL Enabled(url)

**Descripción:** Determina si la URL especificada se puede utilizar en esta sesión de JMP. Las URL pueden habilitarse o deshabilitarse con el script jmpStartAdmin.jsl. Esto no determina si se trata de una URL válida, ni si el usuario puede iniciar sesión. Solo determina si la URL está bloqueada por JMP.

**JMP Versión agregada:** 15

```jsl


url = "http://public.jmp.com";
Show( Is JMP Live URL Enabled( url ) );

```

### Is Leap Year

**Sintaxis:** v = Is Leap Year(year)

**Descripción:** Devuelve si un año dado es un año bisiesto.

**JMP Versión agregada:** 15

```jsl

v = Is Leap Year( 2016 );

```

### Is List

**Sintaxis:** y = Is List( x )

**Descripción:** Devuelve 1 si el argumento x es una lista y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Is List( {1, 2, 3} );

```

### Is Log Open

**Sintaxis:** Is Log Open()

**Descripción:** Devuelve el resultado para indicar si está abierta la ventana Registro

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

If( Is Log Open(),
	Close Log()
);

```

**Ejemplo 2**

```jsl

If( !Is Log Open(),
	Open Log()
);

```

### Is Matrix

**Sintaxis:** y = Is Matrix( x )

**Descripción:** Devuelve 1 si el argumento es una matriz y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Is Matrix( [11 22 33] );

```

### Is Missing

**Sintaxis:** y = Is Missing( x )

**Descripción:** Devuelve 1 si el argumento x es un valor faltante y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Is Missing( . );

```

### Is Name

**Sintaxis:** y = Is Name( x )

**Descripción:** Devuelve 1 si el argumento x es un nombre y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Is Name( Name Expr( n ) );

```

### Is Namespace

**Sintaxis:** isns = Is Namespace( namespace reference )

**Descripción:** Devuelve 1 si el argumento namespace es un espacio de nombres y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** y = Is Number( x )

**Descripción:** Devuelve 1 si el argumento x es un número y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Is Number( 213 );

```

### Is Option Key

**Sintaxis:** y = Is Option Key()

**Descripción:** Devuelve 1 si la tecla Option está pulsada y 0 en caso contrario. Está destinado a scripts de rellamada a gráficos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Option Key(),
			Text( {60, 50}, "Option Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is Same Color

**Sintaxis:** x = Is Same Color( color1, color2, ... )

**Descripción:** Compara la igualdad de los colores.

**JMP Versión agregada:** 18

**Ejemplo 1**

```jsl

Is Same Color( "black", 0 );

```

**Ejemplo 2**

```jsl

Is Same Color( "red", "green", "blue" );

```

**Ejemplo 3**

```jsl

Is Same Color( "red", To Color Space( "hls", "red" ) );

```

**Ejemplo 4**

```jsl

Is Same Color( To Color Space( "LUV", "red" ), "red" );

```

### Is Scriptable

**Sintaxis:** tf = Is Scriptable( x )

**Descripción:** Devuelve 1 si el argumento x es un objeto que admite scripts y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Is Scriptable( Bivariate( Y( :weight ), X( :height ) ) );

```

### Is Shift Key

**Sintaxis:** y = Is Shift Key()

**Descripción:** Devuelve 1 si la tecla Mayús está pulsada y 0 en caso contrario. Está destinado a scripts de rellamada a gráficos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Show me the key",
	Graph Box(
		Rect( 45, 55, 55, 45, 1 );
		If( Is Shift Key(),
			Text( {50, 60}, "Shift Key" )
		);
		If( Is Control Key(),
			Text( {60, 50}, "Control Key" )
		);
		If( Is Alt Key(),
			Text( {50, 35}, "Alt Key" )
		);
		Mousetrap( {} );
	)
);

```

### Is String

**Sintaxis:** y = Is String( x )

**Descripción:** Devuelve 1 si el argumento x es una cadena de caracteres y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Is String( "abc" );

```

### ISO Year

**Sintaxis:** yr = ISO Year( datetime )

**Descripción:** Devuelve el año ISO de un valor de fecha-hora. Los años ISO corresponden a semanas ISO: comienzan el lunes de la primera semana que contiene al menos cuatro días.

**JMP Versión agregada:** 16

```jsl

ISO Year( Today() );

```

### Item

**Sintaxis:** w = Item( n|[first last], s, &lt;delim&gt;, &lt;Unmatched(result string)&gt;, &lt;Include Boundary Delimiters(0|1)&gt;)

**Descripción:** Devuelve el n-ésimo elemento del argumento s, donde los elementos son las subcadenas de caracteres (que pueden estar vacías) separadas por un solo carácter cualquiera de los especificados en el argumento delim. En ausencia de delim, se usa el carácter de espacio. Si delim es una cadena de caracteres vacía, cada carácter se considera un elemento aparte.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Item( 5, "http://www.jmp.com", ":/." );

```

**Ejemplo 2**

```jsl

Item( [2 -1], "This is a sentence" );

```

**Ejemplo 3**

```jsl

Item( 4, "Apple+Banana Tree,,Pear,,Peach,,Grape", Get Punctuation Characters() );

```

**Ejemplo 4**

```jsl

Item( 5, "a b c d", Unmatched( "None" ) );

```

**Ejemplo 5**

```jsl

Item( 2, "abcd", "" );

```

**Ejemplo 6**

```jsl

Item( 2, ",abcd", ",", Include Boundary Delimiters );

```

### Items

**Sintaxis:** wl = Items(&lt;[first last]&gt;, s, &lt;delim&gt;, &lt;Include Boundary Delimiters(0|1)&gt;)

**Descripción:** Devuelve una lista de subcadenas de caracteres (posiblemente vacías) separadas por exactamente uno de cualquiera de los caracteres especificados en el argumento delim. En ausencia del argumento delim, se usa el carácter de espacio. Si el argumento delim es una cadena de caracteres vacía, cada carácter se trata como un elemento aparte.

**JMP Versión agregada:** 15

**Ejemplo 1**

```jsl

Eval List( {Items( "http://www.jmp.com", ":/." ), Items( "hello", "" )} );

```

**Ejemplo 2**

```jsl

Items( ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Ejemplo 3**

```jsl

Items(
	",Apple,Banana Tree,Peach",
	Get Punctuation Characters(),
	Include Boundary Delimiters
);

```

**Ejemplo 4**

```jsl

Items( [1 2], ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### J

**Sintaxis:** y = J( nr, &lt;nc&gt;, &lt;v&gt; ); y = J( nr, nc ); y = J( n )

**Descripción:** Crea una matriz (nr por nc) de valores determinados por el tercer argumento. El valor predeterminado del segundo argumento equivale al del primer argumento. El valor predeterminado del tercer argumento es 1. No obstante, el tercer argumento puede ser un número, el nombre de variable de un número o un código JSL. Si el tercer argumento es código, se evalúa el código y se asigna el valor devuelto a cada elemento de la matriz, elemento por elemento, fila por fila.

**JMP Versión agregada:** Antes de la versión 14

```jsl


// Produce a 2x3 matrix, filled with 15.
m = J( 2, 3, 15 );
// Produce a default 4x4 matrix, filled with 1.
m = J( 4 );
// Produce a 2x3 matrix, filled with a number determined by a variable.
a = 3.14;
m = J( 2, 3, a );
// Produce a vector of random numbers from the Uniform distribution.
m = J( 1, 100, Random Uniform() );
// Produce a 2x3 matrix, filled with a sequence of integers.
a = 0;
m = J( 2, 3, a = a + 1 );
// This is a fun example to illustrate what is possible for the third argument.
i = 1;
J(
	10,
	1,
	Print(
		Eval Insert(
			"For the ^i^^if(i < 4, words(\!"st,nd,rd\!",\!",\!")[i], \!"th\!")^ time, I'm not a loop!"
		)
	);
	Round( 1 / Sqrt( 5 ) * ((1 + Sqrt( 5 )) / 2) ^ i++ );
);

```

### JMP Product Name

**Sintaxis:** y = JMP Product Name()

**Descripción:** Devuelve "Standard" o "Pro" en función de la versión del producto de la que se disponga licencia.

**JMP Versión agregada:** Antes de la versión 14

```jsl

JMP Product Name();

```

### JMP Version

**Sintaxis:** y = JMP Version()

**Descripción:** Devuelve la versión de JMP (versión.revisión{.parche}); no disponible antes de la versión 6.0.

**JMP Versión agregada:** Antes de la versión 14

```jsl

JMP Version();

```

### Johnson Sb Density

**Sintaxis:** y = Johnson Sb Density( q, gamma, delta, theta, sigma )

**Descripción:** Devuelve la densidad en q de una distribución Johnson Sb, donde q está en el intervalo de theta a theta + sigma, delta>0 y gamma entre -∞ y +∞ son parámetros de forma, sigma>0 es un parámetro de escala y theta entre -∞ y +∞ es un parámetro de umbral. Nota: theta es el extremo inferior de la distribución y sigma es el rango de soporte de la distribución.

**JMP Versión agregada:** Antes de la versión 14

```jsl

gamma = 0.5;
delta = 0.5;
theta = 0.5;
sigma = 1;
New Window( "Example: Johnson Sb Density",
	jsbp = Graph Box(
		Y Scale( 0, 5.5 ),
		X Scale( 0.2, 1.8 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Johnson Sb Density( q, gamma, delta, theta, sigma ), q );
		Text(
			{0.5, 4.5},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 ),
			" \!U03C3=",
			Round( sigma, 2 )
		);
	),
	H List Box( Slider Box( 0, 1, gamma, jsbp << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 2, delta, jsbp << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( -2, 2, theta, jsbp << reshow ), Text Box( " \!U03B8" ) ),
	H List Box( Slider Box( 0, 10, sigma, jsbp << reshow ), Text Box( " \!U03C3" ) )
);

```

### Johnson Sb Distribution

**Sintaxis:** p = Johnson Sb Distribution( q, gamma, delta, theta, sigma )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución Johnson Sb sea menor que q. (Nota: consulte las descripciones de los parámetros en la función Johnson Sb Density()).

**JMP Versión agregada:** Antes de la versión 14

```jsl

gamma = 0.5;
delta = 0.5;
theta = 0.5;
sigma = 3;
New Window( "Example: Johnson Sb Distribution",
	jsbc = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0.2, 3.8 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Johnson Sb Distribution( q, gamma, delta, theta, sigma ), q );
		Text(
			{0.3, 0.8},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 ),
			" \!U03C3=",
			Round( sigma, 2 )
		);
	),
	H List Box( Slider Box( 0, 1, gamma, jsbc << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 1, delta, jsbc << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( 0, 1, theta, jsbc << reshow ), Text Box( " \!U03B8" ) ),
	H List Box( Slider Box( 0, 4, sigma, jsbc << reshow ), Text Box( " \!U03C3" ) )
);

```

### Johnson Sb Quantile

**Sintaxis:** q = Johnson Sb Quantile( p, gamma, delta, theta, sigma )

**Descripción:** Devuelve el cuantil de una distribución Johnson Sb, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p. (Nota: p es el primer parámetro. Consulte la descripción de los parámetros en la función Johnson Sb Density()).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Johnson Sb Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Sl Density

**Sintaxis:** y = Johnson Sl Density( q, gamma, delta, theta, &lt;sigma=1&gt; )

**Descripción:** Devuelve la densidad en q de una distribución Johnson Sl, donde q está en el intervalo de theta a +∞, delta>0 y gamma entre -∞ y +∞ son parámetros de forma, sigma igual a +1 o -1 es un parámetro de escala, y theta entre -∞ y +∞ es un parámetro de umbral. Nota: cuando sigma = 1, theta es el límite inferior de la distribución y cuando sigma=-1, theta es el límite superior. Además, un valor positivo de sigma implica asimetría positiva y un valor negativo de sigma implica asimetría negativa.

**JMP Versión agregada:** Antes de la versión 14

```jsl

gamma = 0.5;
delta = 1;
theta = 0;
sigma = 1;
New Window( "Example: Johnson Sl Density",
	jslp = Graph Box(
		Y Scale( 0, 1.5 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Johnson Sl Density( q, gamma, delta, theta, sigma ), q );
		Text(
			{-1, 1.1},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 )
		);
	),
	jslpcb = Check Box(
		{"\!U03C3 = +1 (Note: When unchecked \!U03C3 = -1)"},
		<<set( 1 ),
		sigma = [-1, 1][((jslpcb << get()) + 1)];
		jslp << reshow;
	),
	H List Box( Slider Box( -15, 15, gamma, jslp << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 10, delta, jslp << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( -5, 5, theta, jslp << reshow ), Text Box( " \!U03B8" ) )
);

```

### Johnson Sl Distribution

**Sintaxis:** p = Johnson Sl Distribution( q, gamma, delta, theta, &lt;sigma=1&gt; )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución Johnson Sl sea menor que q. (Nota: consulte las descripciones de los parámetros en la función Johnson Sl Density()).

**JMP Versión agregada:** Antes de la versión 14

```jsl

gamma = 0.5;
delta = 1;
theta = 0;
sigma = 1;
New Window( "Example: Johnson Sl Distribution",
	jslc = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Johnson Sl Distribution( q, gamma, delta, theta, sigma ), q );
		Text(
			{-1, 0.9},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 )
		);
	),
	jslccb = Check Box(
		{"\!U03C3 = +1 (Note: When unchecked \!U03C3 = -1)"},
		<<set( 1 ),
		sigma = [-1, 1][((jslccb << get()) + 1)];
		jslc << reshow;
	),
	H List Box( Slider Box( -15, 15, gamma, jslc << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 10, delta, jslc << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( -5, 5, theta, jslc << reshow ), Text Box( " \!U03B8" ) )
);

```

### Johnson Sl Quantile

**Sintaxis:** q = Johnson Sl Quantile( p, gamma, delta, theta, &lt;sigma=1&gt; )

**Descripción:** Devuelve el cuantil de una distribución Johnson Sl, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p. (Nota: p es el primer parámetro. Consulte la descripción de los parámetros en la función Johnson Sl Density()).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Johnson Sl Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Su Density

**Sintaxis:** y = Johnson Su Density( q, gamma, delta, theta, sigma )

**Descripción:** Devuelve la densidad en q de una distribución Johnson Su, donde q está entre -∞ y +∞, delta>0 y gamma entre -∞ y +∞ son los parámetros de forma, sigma>0 es un parámetro de escala y theta está entre -∞ y + y es un parámetro de umbral.

**JMP Versión agregada:** Antes de la versión 14

```jsl

gamma = 0.5;
delta = 1;
theta = 1;
sigma = 1;
New Window( "Example: Johnson Su Density",
	y = Graph Box(
		Y Scale( 0, 1.5 ),
		X Scale( -2, 2 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Johnson Su Density( q, gamma, delta, theta, sigma ), q );
		Text(
			{-1, 1.3},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 ),
			" \!U03C3=",
			Round( sigma, 2 )
		);
	),
	H List Box( Slider Box( 0, 1, gamma, y << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 2, delta, y << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( 0, 2, theta, y << reshow ), Text Box( " \!U03B8" ) ),
	H List Box( Slider Box( 0, 2, sigma, y << reshow ), Text Box( " \!U03C3" ) )
);

```

### Johnson Su Distribution

**Sintaxis:** p = Johnson Su Distribution( q, gamma, delta, theta, sigma )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución Johnson Su sea menor que q. (Nota: consulte las descripciones de los parámetros en la función Johnson Su Density()).

**JMP Versión agregada:** Antes de la versión 14

```jsl

gamma = 0.5;
delta = 1;
theta = 1;
sigma = 1;
New Window( "Example: Johnson Su Distribution",
	jsuc = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -2, 2 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Johnson Su Distribution( q, gamma, delta, theta, sigma ), q );
		Text(
			{-1, 0.9},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 ),
			" \!U03C3=",
			Round( sigma, 2 )
		);
	),
	H List Box( Slider Box( 0, 1, gamma, jsuc << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 2, delta, jsuc << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( 0, 2, theta, jsuc << reshow ), Text Box( " \!U03B8" ) ),
	H List Box( Slider Box( 0, 2, sigma, jsuc << reshow ), Text Box( " \!U03C3" ) )
);

```

### Johnson Su Quantile

**Sintaxis:** q = Johnson Su Quantile( p, gamma, delta, theta, sigma )

**Descripción:** Devuelve el cuantil de una distribución Johnson Su, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p. (Nota: p es el primer parámetro. Consulte la descripción de los parámetros en la función Johnson Su Density()).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Johnson Su Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Journal Box

**Sintaxis:** y = Journal Box( journalText )

**Descripción:** Construye un cuadro de visualización a partir de las instrucciones que se almacenarían en un diario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sample = Distribution( Y( :height ) );
sampjourn = sample << Get Journal;
New Window( "Distribution of Height",
	Text Box( "Here is the result of the distribution platform for Height." ),
	Journal Box( sampjourn )
);

```

### JSL Encrypted

**Sintaxis:** y = JSL Encrypted(script)

**Descripción:** Integra un script encriptado con otro. Para crear un script encriptado, seleccione Editar > Encriptar script en el menú principal de un editor de scripts. Introduzca las contraseñas y el texto encriptado aparecerá en una ventana nueva. Copie este texto en un comando de JSL Encrypted("") para integrar el script encriptado en otro.

**JMP Versión agregada:** Antes de la versión 14

```jsl

JSL Encrypted(
	"//-e6.0.2\!NWUSXEHSB?SRAMXPSY?;KDGMNGPQFZP;?><JLEXCQZYIGWSI@<FOPBLDKJ?HEUPTOGSZDYWFDMB;NEVB;HFP=VQ@N;LCVQPWRHIXEIPFKGO=H?DWS?KFQRIPBEPSAE<AM?YG=C@VFRENPEW>@;ND=JA<?=WOZZOG>FZBZKZLMFOX?YF@LWA=B=SJXDGVW>VYLBRJT<I<MFE<Q??QCUOZM?RY>RXLBJRH=BH<EGVSEMABSS<IE=CAPID;XM;;?XIU<FA=SCE<CB;AGOCZWHZXK;*"
);

```

### JSL Quote

**Sintaxis:** y = JSL Quote(script)

**Descripción:** Guarda un script JSL en una variable, incluidos todos los comentarios y el formato.

**JMP Versión agregada:** Antes de la versión 14

```jsl


x = JSL Quote(/* Begin quote. */
    For (i = 1, i <= 5, i++,
        // Print the value of i.
        Print(i);
    );
    // End expression.
);
New Window( "editor", Script Box( x ) );

```

### JSON Literal

**Sintaxis:** l = JSON Literal( string )

**Descripción:** Devuelve un booleano JSON válido o un valor constante nulo dependiendo de la especificación del parámetro.

**JMP Versión agregada:** 14

```jsl


myJSON =
"{ \!"myChar\!": \!"Character Value\!", \!"myNum\!": 12345, \!"myBool\!": true, \!"myOtherChar\!": \!"Another char value\!", \!"myNull\!": null, \!"x\!": 54321, \!"myOtherBool\!": false, \!"y\!": \!"Hello\!" }";
parsed = Parse JSON( myJSON );
x = parsed["myBool"];
Show( x );
If( x == JSON Literal( true ),
	Show( "Worked" ),
	Show( "Didn't work" )
);

```

### JSON To Data Table

**Sintaxis:** dt = JSON To Data Table( jsonstring, &lt;Invisible( boolean ) | Private( boolean )&gt;, &lt;Guess(Stack(Boolean)|"Tall"|"Wide")&gt;, &lt;JSON Settings(...)&gt; )

**Descripción:** Convertir texto JSON en una tabla de datos de JMP

**JMP Versión agregada:** 14

```jsl

dt = JSON To Data Table(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);

```

### JSON To List

**Sintaxis:** l = JSON To List( jsonstring )

**Descripción:** Convierte el texto JSON en una lista JSL representando la estructura especificada por los datos JSON.

**JMP Versión agregada:** Antes de la versión 14

```jsl

l = JSON To List(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);
Show( l );

```

### KDE

**Sintaxis:** {Estimates, Bins, Counts, ActualBandwidth, Error} = KDE( Vector, &lt;&lt;weights, &lt;&lt;bandwidth( 0 ), &lt;&lt;bandwidth scale( 1 ), &lt;&lt;bandwidth selection( 0 ), &lt;&lt;kernel )

**Descripción:** Devuelve un estimador de densidad de kernel con selección automática de ancho de banda. El argumento opcional weights debe ser un vector de la misma longitud que el argumento Vector. El argumento opcional bandwidth debe ser un número real positivo o cero, y obliga a usar el valor del argumento bandwidth selection. El argumento opcional bandwidth scale debe ser un número real positivo. El argumento opcional bandwidth selection debe ser 0, 1, 2 o 3, correspondientes a Sheather y Jones, Referencia normal, Regla del pulgar de Silverman o Método de sobrealisado, respectivamente. El argumento opcional kernel acepta los valores 0, 1, 2, 3 o 4, correspondientes a gaussiano, Epanechnikov, bipeso, triangular o rectangular, respectivamente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

// generate sample dataset from a mixture of 3 normal distributions
ndata3 = 25;
Random Reset( 113 );
channel = J( 1, ndata3 * 3, 0 );
For( i = 1, i <= ndata3, i++,
	channel[1, i] = Random Normal() - 3;
	channel[1, ndata3 + i] = Random Normal() / 2;
	channel[1, ndata3 + ndata3 + i] = Random Normal() + 3;
);

// use kernel density estimator to estimate the underlying distribution
bw = .; // automatic bandwidth
bscl = 1; // bandwidth multiplier
bsel = 0; // Sheather and Jones bandwith selection

// Create data table with estimates from all smoothing KDEs and Bins
dt = New Table( "KDE Smoothing",
	New Column( "Kernel", "Character" ),
	New Column( "Bin" ),
	New Column( "Density Estimate" ),
	New Column( "Counts" )
);

kernels = {"Gaussian", "Epanechnikov", "Biweight", "Triangular", "Rectangular"};
For( kernel = 0, kernel < N Items( kernels ), kernel++,
	res = KDE(
		channel,
		<<bandwidth( bw ),
		<<bandwidth scale( bscl ),
		<<bandwidth selection( bsel ),
		<<kernel( kernel )
	);
	nbin = N Items( res["Bins"] );
	rows = (N Rows( dt ) + 1) :: (N Rows( dt ) + nbin);
	dt << Add Rows( nbin );
	dt[rows, "Kernel"] = kernels[kernel + 1];
	dt[rows, "Bin"] = res["Bins"]`;
	dt[rows, "Density Estimate"] = res["Estimates"]`;
	dt[rows, "Counts"] = res["Counts"]`;
);

dt << Graph Builder(
	Size( 1000, 376 ),
	Show Control Panel( 0 ),
	Legend Position( "Bottom" ),
	Variables(
		X( :Bin ),
		Y( :Density Estimate, Side( "Right" ) ),
		Y( :Counts, Position( 1 ) ),
		Overlay( :Kernel )
	),
	Elements(
		Bar( X, Y( 2 ), Overlay( 0 ), Legend( 2 ), Bar Style( "Needle" ) ),
		Line( X, Y( 1 ), Legend( 3 ) )
	)
);

```

### KDTable

**Sintaxis:** tab = KDTable( [ 1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6 ] )

**Descripción:** Devuelve una tabla para una búsqueda eficiente de vecinos cercanos. Los argumentos de la matriz son puntos k-dimensionales. No existe límite alguno en el número de dimensiones o puntos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

tab = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tab << K nearest rows( 2, 1 );
"2 nearest rows to row 1 are " || Char( rows );

```

### Labeled

**Sintaxis:** y = Labeled( &lt;rs&gt; ); Labeled( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Descripción:** Devuelve el componente de etiquetado del valor de estado de fila especificado, 0 o 1. Si la función Labeled se usa como L-value, cambia el estado de la etiqueta de la fila actual (o la r-ésima) de la tabla de datos actual.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );
Row() = 3;
Labeled();

```

### Labeled State

**Sintaxis:** rs = Labeled State( x )

**Descripción:** Devuelve un valor de estado de fila con la componente de etiquetado ajustada al valor especificado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );

```

### Lag

**Sintaxis:** y = Lag( &lt;x&gt;, &lt;n=1&gt; )

**Descripción:** Devuelve el valor del argumento x con la fila actual con el valor Row() - n. Puesto que depende de Row(), Lag() resulta útil principalmente en fórmulas de columna.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
Lag( :height, 2 );

```

### Last Modification Date

**Sintaxis:** date = Last Modification Date( path )

**Descripción:** Devuelve la fecha de última modificación de un archivo o directorio. Lanza un error cuando la ruta no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Format( Last Modification Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Least Squares Solve

**Sintaxis:** {Beta, VarBeta} = Least Squares Solve(y, X, &lt;&lt;noIntercept, &lt;&lt;weights(optionalWeightVector), &lt;&lt;method("Sweep"|"GInv"))

**Descripción:** Devuelve una lista que contiene un vector de estimaciones, Beta = Inverse(X&apos;X)X&apos;y y la matriz de varianza estimada de Beta. El argumento <<noIntercept opcional especifica un modelo sin constante. El argumento <<weights opcional especifica un vector de pesos para llevar a cabo los mínimos cuadrados ponderados. El argumento <<method opcional le permite elegir entre el método Sweep predeterminado y un método de inversa generalizada ("GInv") para resolver las ecuaciones normales.

**JMP Versión agregada:** Antes de la versión 14

```jsl

/*Simple Linear Regression*/
y = [3, 5, 7, 5];
X = [1, 2, 3, 4];
{Beta, VarBeta} = Least Squares Solve( y, X );

```

### Left

**Sintaxis:** sub = Left( s, n, &lt;filler&gt; )

**Descripción:** Devuelve una versión truncada o rellenada de la cadena de caracteres o lista original s. El resultado contiene los n caracteres o elementos de la lista de la izquierda, rellenados con filler por la derecha si la longitud de s es menor que n.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exurl = "http://www.jmp.com";
Left( exurl, Contains( exurl, ":" ) - 1 );

```

### Length

**Sintaxis:** l = Length( x )

**Descripción:** Devuelve la longitud de la cadena especificada (en caracteres), lista (en términos), arreglo asociativo (en número de claves), blob (en bytes), matriz (en elementos) o espacio de nombres/clase (en número de funciones y variables).

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Length( "Café" );

```

**Ejemplo 2**

```jsl

Length( {1, 2 + 3, [11 22]} );

```

**Ejemplo 3**

```jsl

Length( ["a" => 10, "b" => 3, => 0] );

```

**Ejemplo 4**

```jsl

Length( Char To Blob( "Café" ) );

```

### LenthPSE

**Sintaxis:** y = LenthPSE( x )

**Descripción:** Devuelve el error seudoestándar de Lenth de los valores de un único vector x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {LenthPSE( [1, 2, 3, 4, 5] ), Std Dev( [1, 2, 3, 4, 5] )} );

```

### Less

**Sintaxis:** z = x &lt; y &lt; ... ; z = Less( x, y, ... )

**Descripción:** Devuelve 1 si cada argumento es menor que el siguiente y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

[1 1 1] < [0 1 2];

```

### Less LessEqual

**Sintaxis:** z = x &lt; y &lt;= ... ; z = Less LessEqual( x, y, ... )

**Descripción:** Devuelve 1 si el primer argumento es menor que el segundo y cada uno de los argumentos salvo el primero es menor o igual que el argumento siguiente, y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

1 < 2 <= 2;

```

### Less or Equal

**Sintaxis:** z = x &lt;= y &lt;= ... ; z = Less or Equal( x, y, ... )

**Descripción:** Devuelve 1 si cada argumento es menor o igual que el siguiente y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

1 <= 2 <= 2;

```

### LessEqual Less

**Sintaxis:** z = x &lt;= y &lt; ... ; z = LessEqual Less( x, y, ... )

**Descripción:** Devuelve 1 si el primer argumento es menor o igual que el segundo y cada uno de los argumentos salvo el primero es menor que el argumento siguiente, y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

2 <= 2 < 3;

```

### LEV Density

**Sintaxis:** y = LEV Density( x, mu, sigma )

**Descripción:** Devuelve la densidad en x de una distribución de los valores extremos máximos con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 10;
sig = 5;
New Window( "Example: LEV Density",
	y = Graph Box(
		Y Scale( 0, .08 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( LEV Density( x, mu, sig ), x );
		Text( {0, .055}, "mu=", Round( mu, 2 ) );
		Text( {0, .045}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### LEV Distribution

**Sintaxis:** p = LEV Distribution( x, mu, sigma )

**Descripción:** Devuelve la probabilidad en x de una distribución de los valores extremos máximos con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 10;
sig = 5;
New Window( "Example: LEV Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( LEV Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) )
);

```

### LEV Quantile

**Sintaxis:** q = LEV Quantile( p, mu, sigma )

**Descripción:** Devuelve el cuantil en p de una distribución de los valores extremos máximos con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 10;
sig = 5;
qq = .5;
New Window( "Example: LEV Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( LEV Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( LEV Quantile( qq, mu, sig ), 0, 1 );
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box( Slider Box( 0, 80, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### Level Color

**Sintaxis:** y = Level Color( i ); y = Level Color( i, n ); y = Level Color( i, n, &lt;theme&gt; ); y = Level Color( i, &lt;theme&gt; )

**Descripción:** Devuelve un color de categoría, donde i es el nivel de categoría, n el número de categorías (opcional) y theme son los temas de color del cuadro desplegable Color de valor del cuadro de diálogo Información de columna. (El tema predeterminado es "JMP Default"). El índice de la categoría debe ser >= 1 y <= el número de categorías especificadas en la llamada o definidas por el tema. Si el segundo argumento es un carácter, es el tema de color y n es no especificado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Color Bar",
	Graph(
		For( x = 1, x <= 100, x += 5,
			Fill Color( Level Color( x, 100, "Green to Black to Red" ) );
			Rect( x - 5, 45, x + 5, 55, 1 );
		)
	)
);

```

### LGamma

**Sintaxis:** y = LGamma( x )

**Descripción:** Devuelve el logaritmo natural de la función Gamma de x. Resulta útil cuando Gamma(x) es demasiado grande como para usarlo directamente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

LGamma( 5 );

```

### Line

**Sintaxis:** Line( {x1, y1}, {x2, y2}, ..., &lt; &lt;&lt;Value Space( 0|1 ) &gt;, &lt; &lt;&lt;Smooth( tension, domain, min response, max response ) &gt; ); Line( xMatrix, yMatrix, &lt; &lt;&lt;Value Space(0 | 1) &gt;, &lt; &lt;&lt;Smooth( tension, domain, min response, max response ) &gt; )

**Descripción:** Dibuja una línea o líneas conectadas. En el caso predeterminado, la línea se dibuja linealmente entre los extremos. Si se selecciona la opción Value Space, la línea seguirá la proyección especificada por las escalas de los ejes subyacentes. Si se selecciona la opción Smooth, se suavizan las conexiones, y se restringen por tension, domain dimension, min response y max response.

**JMP Versión agregada:** Antes de la versión 14

**Constrained smoothing**

```jsl

New Window( "Constrained smoothing",
	Graph Box(
		Pen Color( "gray" );
		H Line( 90 );
		H Line( 92 );
		H Line( 10 );
		H Line( 8 );
		Pen Color( "red" );
		Line( Index( 10, 90, 10 ), [20 10 90 90 60 70 10 10 40], <<Smooth( . ) );
		Pen Color( "blue" );
		Line( Index( 10, 90, 10 ), [20 10 90 90 60 70 10 10 40], <<Smooth( ., "X", 8, 92 ) );
	)
);

```

**Polyline**

```jsl

New Window( "Example", Graph Box( Line( [10 30 90], [88 22 44] ) ) );

```

**Smoothing**

```jsl

New Window( "Smoothing",
	Graph Box(
		XAxis( Min( 0 ), Max( 10 ), Inc( 2 ) ),
		YAxis( Min( -1.1 ), Max( 1.1 ), Inc( 1 ) ),
		Pen Color( "gray" );
		H Line( 1 );
		H Line( -1 );
		H Line( 0 );
		Line( 0 :: 10, Sin( 0 :: 10 ) );
		Pen Color( "red" );
		Line( 0 :: 10, Sin( 0 :: 10 ), <<Smooth( . ) );
		Pen Color( "blue" );
		Line( 0 :: 10, Sin( 0 :: 10 ), <<Smooth( 0.25 ) );
	)
);

```

**Value space interpolation**

```jsl

New Window( "Interpolate in value space",
	Graph Box(
		XAxis( Scale( "Log" ), Min( 10 ), Max( 100 ) ),
		YAxis( Scale( "Log" ), Min( 10 ), Max( 100 ) ),
		Line( [10 30 90], [88 22 44], <<Value Space( 1 ) )
	)
);

```

### Line Seg

**Sintaxis:** ls = Line Seg(x values, y values, &lt;Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )&gt;)

**Descripción:** Devuelve un segmento de visualización que contiene líneas que conectan todos los valores x e y indicados.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y, RowStates( dt ) ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example",
	g = Graph Box( Line Seg( x, y, RowStates( dt, {1, 3, 5} ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

### Line Style

**Sintaxis:** Line Style( x )

**Descripción:** Establece el estilo de línea actual, que puede ser uno de los siguientes: 0 (sólido), 1 (punteado), 2 (discontinua), 3 (guión-punto) o 4 (guión-punto-punto).

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Line Style Example",
	Graph Box(
		Frame Size( 500, 400 ),
		named line styles = {"Solid", "Dotted", "Dashed", "Dash Dot", "Dash Dot Dot",
		"Dash Dash Dot", "Dash Dash Dot Dot", "Long Dash", "Long Dash Dash", "Dense Dash",
		"Sparse Dash", "Sparse Dot", "Sparse Dash Dot"};
		For Each( {istyle, i}, named line styles, {x = 5 :: 75, y = 12 * Sin( x / 12 )},
			Text( {x[N Items( x )] + 1, y[N Items( y )] + 92 - 6 * i - 1.5}, istyle );
			Line Style( istyle );
			Pen Size( 2 );
			Line( x, y + 92 - 6 * i );
		);
	)
);

```

### Linear Regression

**Sintaxis:** {Estimates, Std_Error, Diagnostics} = Linear Regression(y, X, &lt;&lt;noIntercept, &lt;&lt;printToLog, &lt;&lt;weight(WeightVector), &lt;&lt;freq(FrequencyVector)

**Descripción:** Ajusta una regresión lineal para el modelo asumido y = X * beta + error. El argumento opcional <<noIntercept especifica un modelo sin constante. El argumento opcional <<printToLog especifica que se imprime un resumen del ajuste en la ventana de registro. El argumento opcional weight especifica un vector de pesos para llevar a cabo los mínimos cuadrados ponderados, y el argumento opcional freq especifica un vector de frecuencias. Devuelve una lista que contiene un vector de la estimaciones, un vector de los errores estándar y una lista de diagnósticos. La lista de diagnósticos contiene vectores de los estadísticos t y valores p para las estimaciones, así como los valores R cuadrado y R cuadrado ajustado para el ajuste de regresión.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

/*Simple Linear Regression: y = intercept + beta * x + error*/
y = [3, 5, 7, 5];
X = [1, 2, 3, 4];
{Estimates, Std_Error, Diagnostics} = Linear Regression( y, X, <<printToLog ); 
/*
t_ratio = Diagnostics["t_ratio"]; 
p_value = Diagnostics["p_value"]; 
RSquare = Diagnostics["RSquare"]; 
RSquare Adj = Diagnostics["RSquare Adj"];
*/

```

**Ejemplo 2**

```jsl

/*Model: y = beta_1*x + beta_2*x^2 + error*/
y = [3, 5, 7, 5];
X = [1 1, 2 4, 3 9, 4 16];
{Estimates, Std_Error, Diagnostics} = Linear Regression( y, X, <<noIntercept, <<printToLog );

```

**Ejemplo 3**

```jsl

/*Categorical Variable Example*/
/*Model: y = beta_1*boy + beta_2*girl + beta_3*x + error*/
y = [3, 5, 7, 5];
x = [1, 2, 3, 4];
gender = {"boy", "girl", "girl", "boy"};
designMat = Design( gender ) || x;
{Estimates, Std_Error, Diagnostics} = Linear Regression(
	y,
	designMat,
	<<noIntercept,
	<<printToLog
);

```

### Lines Seg

**Sintaxis:** ls = Lines Seg([x1 y1 x2 y2,...])

**Descripción:** Devuelve un segmento de visualización que contiene una secuencia de segmentos de línea correspondientes a los valores x e y indicados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Lines Seg" ));

```

### Lineup Box

**Sintaxis:** y = Lineup Box( &lt;NCol( nc )&gt;, &lt;Spacing( pixels, &lt;vspace&gt; )&gt;, displayBoxArgs, ... )

**Descripción:** Devuelve un cuadro de visualización para mostrar la alineación de cuadros en nc columnas. El argumento opcional Spacing especifica el espaciado horizontal y vertical alrededor de los cuadros de visualización. Cuando se utiliza el argumento vspace, vspace es el espaciado vertical y pixels el horizontal.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Lineup Ruler Box

**Sintaxis:** y = Lineup Box( &lt;Widths( {width1, width2, ...} )&gt;, displayBoxArgs, ... )

**Descripción:** Devuelve un cuadro de visualización que establece el ancho de las columnas de los cuadros de alineación que contiene.

**JMP Versión agregada:** 16

```jsl


New Window( "Lineup Ruler",
	lrb = Lineup Ruler Box(
		Widths( {120, 200} ),
		Outline Box( "Customer 1",
			Lineup Box( N Col( 2 ),
				Text Box( "First Name:" ),
				Text Edit Box(),
				Text Box( "Last Name:" ),
				Text Edit Box(), 

			)
		),
		Outline Box( "Customer 2",
			Lineup Box( N Col( 2 ),
				Text Box( "First Name:" ),
				Text Edit Box(),
				Text Box( "Last Name:" ),
				Text Edit Box(), 

			)
		)
	)
);

```

### List

**Sintaxis:** y = {a, b, ...}; y = List( a, b, ... )

**Descripción:** Crea una lista de elementos sin evaluarlos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

{1, 2 + 3, [11 22]};

```

### List Box

**Sintaxis:** y = List Box( {item, ...}, &lt;width( pixels )&gt;, &lt;maxSelected( 9999 )&gt;, &lt;nlines( 12 )&gt;, &lt;script&gt; )

**Descripción:** Devuelve un cuadro de visualización que muestra un cuadro de lista de elementos de selección. Si el propio item es una lista de dos elementos que contiene el nombre del elemento y una cadena de caracteres que especifica un tipo de modelización o criterio de ordenación, como "Ordinal" o "Ascending", el icono correspondiente se mostrará junto a ese elemento en el cuadro de lista.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

New Window( "Example", b = List Box( {"single", "double", "triple"}, nlines( 10 ) ) );

```

**Ejemplo 2**

```jsl

New Window( "Example",
	lb = List Box(
		{{"First Item", "continuous"}, {"Second Item", "ordinal"}, {"Third Item", "nominal"}},
		width( 200 ),
		max selected( 2 ),
		nlines( 6 )
	)
);

```

### Ln

**Sintaxis:** y = Ln( x )

**Descripción:** Devuelve el logaritmo natural de x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Ln( Exp( 2 ) );

```

### Load DLL

**Sintaxis:** dll = Load DLL( file path | Base Name( file path without extension ), &lt; AutoDeclare( bool | Quiet | Verbose) | Quiet | Verbose )&gt; )

**Descripción:** Carga una DLL situada en la ruta especificada.

**JMP Versión agregada:** Antes de la versión 14

**Cross platform using Base Name()**

```jsl

dll = Load DLL( Base Name( "/path/to/dll/financial" ) );
// Loads "financial.dll" on Windows and "libfinancial.dylib" on Mac
// Declarations for "irr" and "npv" are auto-loaded
myirr = dll << irr( 0.1, -51000, 1000, 900, 950 );
mynpv = dll << npv( 0.05, -51000, 1000, 900, 9500 );
dll << UnloadDLL();

```

**Windows only**

```jsl

If( Host is( "Windows" ),
	dll = Load DLL( "C:/Windows/System32/User32.DLL" );
	dll << CallDLL( "MessageBeep", "n", 0 );
	Wait( 1 );
	dll << CallDLL( "MessageBeep", "n", 0 );
	dll << UnloadDLL();
);

```

### Load Text File

**Sintaxis:** text = Load Text File( path, &lt;Charset("best guess", &lt;force("throw" | "alert" | "silent")&gt;)&gt;, &lt;LineSeparator("\\!N")&gt;, &lt;XMLParse&gt;|&lt;SASODSXML&gt;|&lt;JSON&gt;|&lt;BLOB( &lt;readOffsetFromBegin(0)&gt;|&lt;readOffsetFromEnd(42)&gt;, &lt;readLength(2147483647)&gt;, &lt;base64Compressed( 1 /* 0: ascii~hex */)&gt; )&gt; )

**Descripción:** Lee un archivo de texto completo y lo coloca en una variable de JSL. Load Text File() solicita un nombre de archivo. Load Text File( path ) devuelve una cadena de caracteres. La opción XMLParse convierte XML en un árbol de expresiones. SASODSXML analiza el archivo como XML predeterminado de ODS SAS. La opción [{JSON}] convierte JSON en un árbol de expresiones. El argumento BLOB devuelve datos binarios en una variable BLOB de JSL. Los parámetros opcionales con nombre para BLOB permiten leer una subcadena de caracteres del archivo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex = Load Text File(
	Get Path Variable( "sample_import_data" ) || "/animals.txt"
/*, Charset("ascii")*/
/*, LineSeparator("\!r\!n")*/
/*, BLOB*/
);
Word( 4, ex, " \!t\!n\!r" );

```

### Loc

**Sintaxis:** y = Loc( m ); y = Loc( v, x )

**Descripción:** Devuelve una matriz de las posiciones de la matriz m distintas de cero. Si se especifican dos argumentos, Loc(v, x) devuelve una matriz de las posiciones de la lista o la matriz v que son iguales al valor x. Se prefiere Where en lugar de ello siempre que sea posible.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

/*more examples, above*/
Show( Loc( [1 0 1 0 1 0] ) );
Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, 2 ) );
Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, [1 5] ) );

```

**Ejemplo 2**

```jsl

Loc( [0, -2, 3, 0, 5, ., -7, ., 9] ) /*missing is not zero or non-zero*/;

```

**Ejemplo 3**

```jsl

Loc( [5, 7, 5, ., 5], 5 );

```

**Ejemplo 4**

```jsl

Loc( [5, 7, 5, ., 5] == 5 ) /*[5,7,5, . ,5]==5   ==>   [1, 0, 1, ., 1]*/;

```

**Ejemplo 5**

```jsl

Loc( {"a", "fred", "b", "fred"}, "fred" );

```

### Loc Max

**Sintaxis:** y = Loc Max( x )

**Descripción:** Devuelve la primera posición en x del valor máximo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Loc Max( [11 22 33 22 33 11] );

```

### Loc Min

**Sintaxis:** y = Loc Min( x )

**Descripción:** Devuelve la primera posición en x del valor mínimo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Loc Min( [11 22 33 22 33 11] );

```

### Loc Nonmissing

**Sintaxis:** y = Loc Nonmissing( matrixArg,...,{listArg},... )

**Descripción:** Devuelve un vector de los números de las filas de la matriz que figuran en el argumento y que contengan valores no faltantes, o bien, en el caso de listas, de las filas que contengan números no faltantes o caracteres no vacíos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Loc Nonmissing( [1 2 3, 4 . 6, 7 8 ., 8 7 6] );

```

### Loc Sorted

**Sintaxis:** idx = Loc Sorted( x, y )

**Descripción:** Crea un vector de columna de posiciones de subíndices donde los valores de x tienen valores inferiores o iguales a los valores de y según una búsqueda binaria. x debe ser una matriz en orden ascendente sin valores faltantes.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show(
	Loc Sorted( [11 22 33 44 55], [11 33 55] ),
	Loc Sorted( [11 22 33 44 55], [1] ),
	Loc Sorted( [11 22 33 44 55], [500] )
);

```

### Local

**Sintaxis:** y = Local( {name=value, ...}, expression )

**Descripción:** Resuelve los nombres en variables locales.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Local( {a = 1, b},
	b = 2;
	a + b;
);

```

### Local Here

**Sintaxis:** y = Local Here( expression )

**Descripción:** Ejecuta la expresión con el valor predeterminado de nombres locales Aquí (1).

**JMP Versión agregada:** Antes de la versión 14

```jsl

y = Local Here(
	a = 1;
	b = 2;
	c = a + b;
	c;
);

```

### Lock Globals

**Sintaxis:** Lock Globals( name, ... )

**Descripción:** Protege los nombres globales especificados para impedir que se puedan modificar o borrar mediante la función Clear Globals.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exalpha = 0.05;
exdelta = 0.5;
Watch( exalpha, exdelta );
Wait( 3 );
Lock Globals( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );
Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );
Wait( 3 );
Unlock Globals( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Lock Symbols

**Sintaxis:** Lock Symbols( name, ... )

**Descripción:** Protege los nombres globales especificados para impedir que se puedan modificar o borrar mediante la función Clear Symbols.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exalpha = 0.05;
exdelta = 0.5;
Watch( exalpha, exdelta );
Wait( 3 );
Lock Symbols( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );
Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );
Wait( 3 );
Unlock Symbols( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Log

**Sintaxis:** y = Log( x, &lt;b&gt; )

**Descripción:** Devuelve el logaritmo en base b de x o el logaritmo natural de x si no se especifica b.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Log( 256, 2 );

```

### Log Capture

**Sintaxis:** string = Log Capture( expr )

**Descripción:** Evalúa el argumento expr, captura el resultado que hubiese aparecido en la ventana del registro de JMP, y lo devuelve en forma de texto.

**JMP Versión agregada:** Antes de la versión 14

```jsl

"captured:" || Log Capture(
	For( i = 1, i <= 3, i++,
		Write( Char( i ) );
		Write( " " );
	)
);

```

### Log10

**Sintaxis:** y = Log10( x )

**Descripción:** Devuelve el logaritmo en base 10 de x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Log10( 100 );

```

### Log1P

**Sintaxis:** y = Log1P( x )

**Descripción:** Devuelve un cálculo más exacto de Log(1 + x) cuando x es muy pequeño.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Log1P( 1e-6 );

```

### LogGenGamma Density

**Sintaxis:** y = LogGenGamma Density( x, mu, sigma, lambda )

**Descripción:** Devuelve la densidad en x de una distribución de probabilidad de log-gamma generalizada extendida con parámetros mu, sigma y lambda.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: LogGenGamma Density",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 10 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( LogGenGamma Density( y, mu, sigma, lambda ), y );
		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) )
);

```

### LogGenGamma Distribution

**Sintaxis:** p = LogGenGamma Distribution( x, mu, sigma, lambda )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución log-gamma generalizada (con parámetros mu, sigma y lambda) sea inferior a x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 0;
sigma = 1;
lambda = 1;
New Window( "Example: LogGenGamma Distribution",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -20, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( LogGenGamma Distribution( y, mu, sigma, lambda ), y );
		Text( {-9, 0.9}, "\!U03BC=", Round( mu, 4 ), " \!U03C3=", Round( sigma, 4 ) );
		Text( {-9, 0.8}, "\!U03BB=", Round( lambda, 4 ) );
	),
	H List Box( Slider Box( -5, 5, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) )
);

```

### LogGenGamma Quantile

**Sintaxis:** q = LogGenGamma Quantile( p, mu, sigma, lambda )

**Descripción:** Devuelve el cuantil de una distribución log-gamma generalizada (con parámetros mu, sigma y lambda), el valor para el que la probabilidad de que un valor aleatorio fuera inferior es p.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 0;
sigma = 1;
lambda = 1;
p = 0.4;
New Window( "Example: LogGenGamma Quantile",
	gdey = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -20, 20 ),
		XName( "y" ),
		Pen Color( "red" );
		Y Function( LogGenGamma Distribution( x, mu, sigma, lambda ), x );
		Pen Color( "Blue" );
		V Line( LogGenGamma Quantile( p, mu, sigma, lambda ), 0, 1 );
		Text(
			{-19, 0.9},
			"\!U03BC=",
			Round( mu, 4 ),
			" \!U03C3=",
			Round( sigma, 4 ),
			" \!U03BB=",
			Round( lambda, 4 )
		);
		Text( {-19, 0.8}, "p=", Round( p, 3 ) );
		Text(
			{-19, 0.7},
			"quantile= ",
			Round( LogGenGamma Quantile( p, mu, sigma, lambda ), 2 )
		);
	),
	H List Box( Slider Box( -2, 2, mu, gdey << reshow ), Text Box( "\!U03BC" ) ),
	H List Box( Slider Box( 0, 4, sigma, gdey << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, 10, lambda, gdey << reshow ), Text Box( "\!U03BB" ) ),
	H List Box( Slider Box( 0.01, 0.99, p, gdey << reshow ), Text Box( " p" ) )
);

```

### Logist

**Sintaxis:** y = Logist( x )

**Descripción:** Devuelve 1 / (1 + Exp( -x )), que convierte un número en el dominio -∞...+∞ dentro del intervalo 0...1. La función Logist() es útil en regresión logística.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Logist( 2 );

```

### Logist Percent

**Sintaxis:** y = Logist Percent( x )

**Descripción:** Función Logist con el resultado escalado de 0 a 100.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Logist Percent( 10 );

```

### Logistic Density

**Sintaxis:** y = Logistic Density( x, mu, sigma )

**Descripción:** Devuelve la densidad en x de una distribución logística con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 0;
sig = .2;
New Window( "Example: Logistic Density",
	y = Graph Box(
		Y Scale( 0, 2 ),
		X Scale( -10, 10 ),
		Pen Color( "red" );
		Y Function( Logistic Density( x, mu, sig ), x );
		Text( {0, 1.8}, "mu=", Round( mu, 2 ) );
		Text( {0, 1.6}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( -4, 4, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box( Slider Box( 0.01, 2, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### Logistic Distribution

**Sintaxis:** p = Logistic Distribution( x, mu, sigma )

**Descripción:** Devuelve la probabilidad en x de una distribución logística con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 0;
sig = .2;
New Window( "Example: Logistic Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 10 ),
		Pen Color( "red" );
		Y Function( Logistic Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( -4, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0.01, 2, sig, y << reshow ), Text Box( " sig" ) )
);

```

### Logistic Quantile

**Sintaxis:** q = Logistic Quantile( p, mu, sigma )

**Descripción:** Devuelve el cuantil en p de una distribución logística con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 0;
sig = .2;
qq = .5;
New Window( "Example: Logistic Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -10, 10 ),
		Pen Color( "red" );
		Y Function( Logistic Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( Logistic Quantile( qq, mu, sig ), 0, 1 );
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box( Slider Box( -4, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0.01, 2, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### Logit

**Sintaxis:** y = Logit( p )

**Descripción:** Devuelve el logit de p, que se define como log(p / (1 - p)).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Logit( 0.95 );

```

### Logit Percent

**Sintaxis:** y = Logit Percent( p )

**Descripción:** Función Logit con el argumento de 0 a 100 en lugar de 0 a 1.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Logit Percent( 95.0 );

```

### Loglogistic Density

**Sintaxis:** y = Loglogistic Density( x, mu, sigma )

**Descripción:** Devuelve la densidad en x de una distribución log-logística con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 0;
sig = .2;
New Window( "Example: Loglogistic Density",
	y = Graph Box(
		Y Scale( 0, .06 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Loglogistic Density( x, mu, sig ), x );
		Text( {0, .055}, "mu=", Round( mu, 2 ) );
		Text( {0, .045}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### Loglogistic Distribution

**Sintaxis:** p = Loglogistic Distribution( x, mu, sigma )

**Descripción:** Devuelve la probabilidad en x de una distribución log-logística con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 0;
sig = .2;
New Window( "Example: Loglogistic Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Loglogistic Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) )
);

```

### Loglogistic Quantile

**Sintaxis:** q = Loglogistic Quantile( p, mu, sigma )

**Descripción:** Devuelve el cuantil en p de una distribución log-logística con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 0;
sig = .2;
qq = .5;
New Window( "Example: Loglogistic Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Loglogistic Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( Loglogistic Quantile( qq, mu, sig ), 0, 1 );
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### Lognormal Density

**Sintaxis:** y = Lognormal Density( x, mu, sigma )

**Descripción:** Devuelve la densidad en x de una distribución log-normal con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 0;
sig = 1;
New Window( "Example: Lognormal Density",
	y = Graph Box(
		Y Scale( 0, .15 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Lognormal Density( x, mu, sig ), x );
		Text( {0, .14}, "mu=", Round( mu, 2 ) );
		Text( {0, .12}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box( Slider Box( 0, 2, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### Lognormal Distribution

**Sintaxis:** p = Lognormal Distribution( x, mu, sigma )

**Descripción:** Devuelve la probabilidad en x de una distribución log-normal con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 0;
sig = 1;
New Window( "Example: Lognormal Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Lognormal Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 2, sig, y << reshow ), Text Box( " sig" ) )
);

```

### Lognormal Quantile

**Sintaxis:** q = Lognormal Quantile( p, mu, sigma )

**Descripción:** Devuelve el cuantil en p de una distribución log-normal con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 0;
sig = 1;
qq = .5;
New Window( "Example: Lognormal Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( Lognormal Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( Lognormal Quantile( qq, mu, sig ), 0, 1 );
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box( Slider Box( 0, 4, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 3, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### Long Date

**Sintaxis:** s = Long Date( datetime, &lt;format&gt; )

**Descripción:** Devuelve una representación larga y específica de la configuración local de un valor de fecha y hora.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Long Date( Today() );

```

### Low Rank Symmetric Update BLAS

**Sintaxis:** y = Low Rank Symmetric Update BLAS( A, U, s )

**JMP Versión agregada:** 17

```jsl

A = [2 0, 0 2];
U = [2 4, 3 5];
s = 2.5;
AUpdate = Low Rank Symmetric Update BLAS( A, U, s );

```

### Lowercase

**Sintaxis:** sl = Lowercase( s )

**Descripción:** Convierte letras mayúsculas en minúsculas en la cadena especificada. Las reglas de conversión de mayúsculas y minúsculas dependen de la configuración local.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Lowercase( "CAFÉ #23" );

```

### LPSolve

**Sintaxis:** {x, z} = LPSolve( A, b, c, L, U, neq, nle, nge, &lt;slackVars=0&gt; )

**Descripción:** Minimiza la función objetivo sujeta a las restricciones especificadas y devuelve una lista de dos elementos. El primer elemento de la lista, x, contiene las variables de decisión (y valores de variables de holgura si slackVars=1). El segundo elemento de la lista, z, contiene el valor óptimo de la función objetivo (si es que existe). Los primeros cinco argumentos son matrices. El argumento A es la matriz de coeficientes de restricción. El argumento b es la columna de los valores de la derecha de las restricciones. El argumento c es el vector de los coeficientes de coste de la función objetivo. Los argumentos L y U son los límites inferior y superior de las variables, respectivamente. Los argumentos neq, nle y nge son el número de restricciones de igualdad, de restricciones de tipo menor o igual que y de restricciones de tipo mayor o igual que, respectivamente. Nótese que las restricciones se deben listar indicando las de igualdad en primer lugar, seguidas de las de tipo menor o igual que y, finalmente, las de tipo mayor o igual que.

**JMP Versión agregada:** Antes de la versión 14

```jsl

A = [5 -2 6, 2 4 0, 3 8 -4];
b = [17, 19, 14];
c = [9 6 -4];
L = [. 0 .];
U = [0 . .];
{x, z} = LPSolve( A, b, c, L, U, 1, 1, 1, 1 );
Show( x, z );

```

### Mail

**Sintaxis:** Mail( "address", "subject", "message", &lt;"attachment filepath"&gt; | { "attachment filepath", ...} )

**Descripción:** Crea un mensaje de correo electrónico saliente de la forma especificada si el sistema operativo lo permite. No funcionarán todas las opciones en todas las versiones de sistema operativo. Consulte la Ayuda para obtener más detalles.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Mail( "test@example.com", "revelation", "JMP is great.", "$SAMPLE_DATA/Big Class.jmp" );

```

### Main Menu

**Sintaxis:** menu = Main Menu( command, &lt;window name&gt; )

**Descripción:** Ejecuta el comando del menú principal especificado.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Main Menu( "Sample Index" );

```

**Ejemplo 2**

```jsl

Main Menu( "Help:Sample Index" );

```

### Make KFold Formula

**Sintaxis:** y = Make KFold Formula( folds, Y Columns( cols ), &lt;&lt;Stratification Columns( cols ), &lt;&lt;Grouping Columns( cols ) )

**Descripción:** Genera una columna de validación con niveles de folds cuando se utiliza en una fórmula de columna. Esta función JSL la utiliza principalmente la plataforma Crear columna de validación para generar columnas de fórmulas.

**JMP Versión agregada:** 17

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "KFold Validation",
	"Numeric",
	"Nominal",
	Formula( Make KFold Formula( 5, <<Y Columns( :height ) ) )
);

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Stratified KFold",
	"Numeric",
	"Nominal",
	Formula(
		Make KFold Formula( 4, <<Y Columns( :height ), <<Stratification Columns( :sex ) )
	)
);

```

### Make Validation Formula

**Sintaxis:** y = Make Validation Formula( rates, &lt;&lt;Stratification Columns( cols ), &lt;&lt;Grouping Columns( cols ), &lt;&lt;Cutpoint Column ( col ), &lt;&lt;Cutpoint Batch ID( col ), &lt;&lt;Determine cutpoints using( "Proportions"|"Numbers of Rows"|"Fixed Time or Date"|"Elapsed Time" ), &lt;&lt;Assign Extra Rows( "To Training"|"To Validation"|"To Test" ) )

**Descripción:** Genera una columna de validación de dos o tres niveles cuando se utiliza en una fórmula de columna. El argumento rates es una matriz 3 por 1 que contiene las tasas de entrenamiento, validación y pruebas, respectivamente. Esta función JSL la utiliza principalmente la plataforma Crear columna de validación para generar columnas de fórmulas.

**JMP Versión agregada:** 15

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Validation",
	"Numeric",
	"Nominal",
	Formula( Make Validation Formula( [.6, .4, 0] ) ),
	Set Property( "Value Labels", {0 = "Training", 1 = "Validation"} )
);

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Validation",
	"Numeric",
	"Nominal",
	Formula( Make Validation Formula( [.6, .2, .2], <<Stratification Columns( :age ) ) ),
	Set Property( "Value Labels", {0 = "Training", 1 = "Validation", 2 = "Test"} )
);

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "Validation",
	"Numeric",
	"Nominal",
	Formula(
		Make Validation Formula(
			[20, 10, 4],
			<<Cutpoint Column( :Week of Year ),
			<<Cutpoint Batch ID( :ID ),
			<<Determine cutpoints using( "Numbers of Rows" )
		)
	),
	Set Property( "Value Labels", {0 = "Training", 1 = "Validation", 2 = "Test"} )
);

```

### Mandelbrot

**Sintaxis:** v = Mandelbrot( n, radius, x, y )

**Descripción:** Calcula el valor de la función de Mandelbrot en x,y, deteniéndose después de n iteraciones o al superar el radio.

**JMP Versión agregada:** Antes de la versión 14

```jsl

grid = 50;
rmax = 0/*zero for smooth*/;
nmax = 50;// http://wikipedia.org/wiki/Mandelbrot_set 
New Window( "Mandelbrot - use magnifier to zoom in",
	g = Graph Box(
		X Scale( -3, 3 ),
		Y Scale( -2, 2 ),
		framesize( 600, 400 ),
		Gradient Function(
			Mandelbrot( nmax, rmax, a, b ), // return value: number of iterations before something interesting happened
			a, // standard GradientFunction stuff...
			b,
			Matrix( {0, nmax} ), // range to map the colors onto
			Z Color(
				{RGB Color( 0, 0, 0 ), RGB Color( 1, 0, 0 ), RGB Color( 1, 1, 0 ),
				RGB Color( 0, 1, 0 ), RGB Color( 0, 1, 1 ), RGB Color( 0, 0, 1 ),
				RGB Color( .3, .3, .4 )}
			),
			<<xgrid(
				X Origin(), X Origin() + X Range(),
				X Range() / (Floor( grid * H Size() / V Size() ))
			),
			<<ygrid( Y Origin(), Y Origin() + Y Range(), Y Range() / (Floor( grid )) ), 

		)
	),
	H List Box( Slider Box( 2, 500, nmax, g << reshow ), Global Box( nmax ) ),
	H List Box( Slider Box( 0, 5, rmax, g << reshow ), Global Box( rmax ) ),
	H List Box( Slider Box( 2, 500, grid, g << reshow ), Global Box( grid ) ), 

);
g << Set X Axis(
	{Format( "Best", 15 ), Show Major Ticks( 0 ), Rotated Labels( "Parallel" )}
);
g << Set Y Axis(
	{Format( "Best", 15 ), Show Major Ticks( 0 ), Rotated Labels( "Parallel" )}
);

```

### Map Value

**Sintaxis:** Map Value(string | number, {key1, value1...|{key1...},{value1...}}, &lt;Unmatched(value)&gt;)

**Descripción:** Evalúa el valor inicial y devuelve el resultado asignado o un valor predeterminado.

**JMP Versión agregada:** 15

**Ejemplo 1**

```jsl

Map Value( "celry", {"celry", "celery"} );

```

**Ejemplo 2**

```jsl

Map Value( "carrot", {"celry", "celery"}, Unmatched( "not found" ) );

```

**Ejemplo 3**

```jsl

Map Value( 10, {10, "celery", 11, "banana"} );

```

**Ejemplo 4**

```jsl

Map Value( 10, {{1, 2, 3}, {100, 200, 300}} );

```

### Marker

**Sintaxis:** Marker( &lt;rs&gt;, {x1, y1}, {x2, y2}, ... ); Marker( &lt;rs&gt;, xMatrix, yMatrix )

**Descripción:** Dibuja marcadores en las coordenadas indicadas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example", Graph Box( Marker( Marker State( 3 ), [11 44 77], [75 25 50] ) ) );

```

### Marker Of

**Sintaxis:** y = Marker Of( &lt;rs&gt; ); Marker Of( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Descripción:** Devuelve el componente de marcación del valor de estado de fila especificado. Si la función Marker Of se usa como L-value, cambia el estado de marcación de la fila actual (o la r-ésima) de la tabla de datos actual.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );
Row() = 3;
Marker Of();

```

### Marker Seg

**Sintaxis:** me = Marker Seg( x, y, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )

**Descripción:** Devuelve un segmento de visualización que contiene marcadores en todos los valores x e y indicados.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
sz = Column( "age" ) << get values;
aa = [=> 0];
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ), sizes( sz ) )
	)
);

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt, {3, 4, 11, 7, 13} ) )
	)
);

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt, 11 :: 15 ) )
	)
);

```

**Ejemplo 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg(
			xx,
			yy,
			Row States( dt, {{1, 2, 3}, {4, 5}, {6}, {7, 12, 15, 9}, {21, 8}} )
		)
	)
);

```

**Ejemplo 5**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg(
			xx,
			yy,
			Row States(
				{Color State( "Blue" ), Color State( "Orange" ), Color State( "Green" ),
				Color State( "Purple" ), Color State( "Red" )}
			)
		)
	)
);

```

### Marker Size

**Sintaxis:** Marker Size( n )

**Descripción:** Establece los marcadores de tamaño para dibujar en el marco de gráficos. 0 = punto, 1 = pequeño, ....

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Marker Size( 5 );
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	)
);

```

### Marker State

**Sintaxis:** rs = Marker State( marker )

**Descripción:** Devuelve un valor de estado de fila con la componente de marcador ajustada al valor especificado. El argumento marker especifica un marcador y puede ser un entero positivo, un carácter, un entero positivo correspondiente a un carácter Unicode, o un carácter hexadecimal correspondiente a un carácter Unicode.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );

```

### Match

**Sintaxis:** y = Match( x, v1, expr1, v2, expr2, ..., exprElse )

**Descripción:** Evalúa y devuelve el argumento exprN correspondiente al primer argumento vN igual a x, o evalúa y devuelve el argumento exprElse si ningún valor es igual a x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Match( Year( Today() ), 2013, "snake", 2014, "horse", 2015, "goat", "other" );

```

### MatchMZ

**Sintaxis:** y = MatchMZ( x, v1, expr1, v2, expr2, ..., exprElse )

**Descripción:** Evalúa y devuelve el argumento exprN correspondiente al primer argumento vN igual a x, o evalúa y devuelve el argumento exprElse si ningún valor es igual a x. (La función MatchMZ() se comporta como la función Match(), salvo que los valores faltantes se tratan como 0).

**JMP Versión agregada:** Antes de la versión 14

```jsl

MatchMZ( Year( Today() ), 2013, "snake", 2014, "horse", 2015, "goat", "other" );

```

### MATLAB Connect

**Sintaxis:** MATLABConnection = MATLAB Connect(&lt;Echo(0|1)&gt;)

**Descripción:** Devuelve un objeto con conexión a MATLAB que admite scripts.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLABConnection = MATLAB Connect();
x = MatlabConnection << Is Connected;
Show( x );

```

### MATLAB Control

**Sintaxis:** MATLAB Control( Echo(bool) )

**Descripción:** Cambia las opciones de control para MATLAB.

**JMP Versión agregada:** Antes de la versión 14

```jsl


MATLAB Init( Echo( true ) );
MATLAB Control( Echo( false ) );
MATLAB Submit(
	"\[
	v = [9 8 7, 6 5 4, 3 2 1];
	m = [1 2 3, 4 5 6, 7 8 9];
	rowjoin = [v ; m]
	coljoin = [v , m]
]\"
);
MATLAB Term();

```

### MATLAB Execute

**Sintaxis:** MATLAB Execute( { list of Inputs }, { list of Outputs }, statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**Descripción:** Envía una lista de entradas, ejecuta unas instrucciones y devuelve una lista de salidas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init();
a = "abcdef";
d = 3.141;
v = [9 8 7, 6 5 4, 3 2 1];
m = [1 2 3, 4 5 6, 7 8 9];
ml = MATLAB Execute(
	{v, m, a, d},
	{x, z, a, d},
	"\[
a = v * m; % matrix product
d = v / m; % = v * inv(m) called Right division
z = m \ v; % = m * inv(v) called Left division
x = m .* v; % element-wise product
]\"
);
Show( v, m, ml, x, z, a, d );
MATLAB Term();

```

### MATLAB Get

**Sintaxis:** y = MATLAB Get( name )

**Descripción:** Devuelve datos de MATLAB, donde el argumento name representa cualquiera de los siguientes tipos de datos de MATLAB (numérico | cadena de caracteres | matriz | lista | data frame).

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init();
x1 = [1, 2, 3];
MATLAB Send( x1 );
x2 = MATLAB Get( x1 );
Show( x1, x2 );
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
MATLAB Send( dt1 );
dt2 = MATLAB Get( dt1 );
dt2 << New Data View;
Close( dt1 );
MATLAB Term();

```

### MATLAB Get Graphics

**Sintaxis:** MATLAB graphics = MATLAB Get Graphics( format )

**Descripción:** Devuelve el último objeto gráfico trazado en la ventana de visualización gráfica de MATLAB en un formato de gráficos especificado en el argumento format.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init();
ml = MATLAB Submit( "\[
plot(1:10)
]\" );
plot = MATLAB Get Graphics( png );
pngJMP = New Window( "Plot", Picture Box( plot ) );
pngJMP << Close Window;
MATLAB Submit( "close" );//Needed this command to close the figure generated from Matlab
MATLAB Term();

```

### MATLAB Get Version

**Sintaxis:** version = MATLAB Get Version()

**Descripción:** Devuelve el número de versión de MATLAB que se está utilizando con las interfaces de MATLAB de JMP.

**JMP Versión agregada:** 14

```jsl

MATLAB Init();
version = MATLAB Get Version();
Show( version );
MATLAB Term();

```

### MATLAB Init

**Sintaxis:** MATLAB Init(&lt;Echo(0|1)&gt;)

**Descripción:** Inicializa las interfaces de MATLAB.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init();
MATLAB Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
]\" );
getStr = MATLAB Get( str );
Show( getStr );
MATLAB Term();

```

### MATLAB Is Connected

**Sintaxis:** connected = MATLAB Is Connected()

**Descripción:** Devuelve 1 si hay una conexión a MATLAB activa y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init();
x = MATLAB Is Connected();
Show( x );
MATLAB Term();

```

### MATLAB JMP Name to MATLAB Name

**Sintaxis:** MATLAB name = MATLAB JMP Name To MATLAB Name( JMP name )

**Descripción:** Establece una correspondencia entre un nombre de variable de JMP y uno de MATLAB usando las reglas de denominación de variables de MATLAB.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init();
MATLAB name = MATLAB JMP Name to MATLAB Name( a b c );
Show( MATLAB name );
MATLAB Term();

```

### MATLAB Load

**Sintaxis:** MATLAB Load( path )

**Descripción:** Carga variables en MATLAB desde un archivo .mat y devuelve las variables a un arreglo asociativo JSL.

**JMP Versión agregada:** 19

```jsl

MATLAB Init();
// if .mat file contained: x = 40; y = 'hello';
vars = MATLAB Load( "path/to/.mat" );
Show( vars << Get Value( "x" ), vars << Get Value( "y" ) );
MATLAB Term();

```

### MATLAB Send

**Sintaxis:** MATLAB Send( name, &lt;MATLAB Name( name )&gt;, &lt;Named Arguments&gt; )

**Descripción:** Envía datos a MATLAB. El argumento name representa cualquiera de los tipos de datos de JMP (numérico | cadena de caracteres | matriz | lista | tabla de datos).

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init();
x = [1, 2, 3];
MATLAB Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
MATLAB Send( dt );
Close( dt );
MATLAB Submit( "x" );
MATLAB Submit( "dt" );
MATLAB Term();

```

### MATLAB Send File

**Sintaxis:** MATLAB Send File( filename, &lt;MATLAB Name( name )&gt; )

**Descripción:** Envía un archivo de datos a MATLAB, donde el argumento filename es una cadena que especifica la ruta de acceso al archivo que se va a enviar a MATLAB.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init();
MATLAB Send File( "$SAMPLE_DATA/Big Class.jmp" );
MATLAB Send File( "$SAMPLE_DATA/Baseball.jmp" );
MATLAB Submit( "BigClass" );
MATLAB Submit( "Baseball" );
MATLAB Term();

```

### MATLAB Submit

**Sintaxis:** MATLAB Submit( statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**Descripción:** Envía instrucciones a MATLAB. Las instrucciones pueden tener la forma de un valor de cadena o una lista de valores de cadena.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init();
MATLAB Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
a = 200;
]\" );
getStr = MATLAB Get( str );
getNum = MATLAB Get( a );
Show( getStr, getNum );
MATLAB Term();

```

### MATLAB Submit File

**Sintaxis:** MATLAB Submit File( path, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**Descripción:** Envía instrucciones a MATLAB empleando un archivo especificado en el argumento path.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init();
MATLAB Submit File( "file containing MATLAB source.m" );
MATLAB Term();

```

### MATLAB Term

**Sintaxis:** MATLAB Term()

**Descripción:** Cierra las interfaces de MATLAB.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MATLAB Init();
MATLAB Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
]\" );
getStr = MATLAB Get( str );
Show( getStr );
MATLAB Term();

```

### Matrix

**Sintaxis:** y = Matrix( {{x11, ..., x1m}, {...}, {xn1, ..., xnm}} ) y = Matrix( {x1, ..., xn} ) y = Matrix( n, m )

**Descripción:** Construye una matriz n por m. Si especifica una lista de n listas, y cada una contiene m valores de fila, la matriz se forma concatenando verticalmente las listas evaluadas. Si especifica una única lista de n elementos, el valor devuelto es un vector de columna n por 1. Si especifica dos argumentos enteros, el valor devuelto es una matriz de ceros que contiene n filas y m columnas.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Matrix( {{11, 22, 33}, {44, 55, 66}} );

```

**Ejemplo 2**

```jsl

Matrix( {{[1 2 3], 4, 5, 6, 7, 8, 9}} );

```

**Ejemplo 3**

```jsl

Matrix( {2, 3 + 7} );

```

**Ejemplo 4**

```jsl

Matrix( 2, 3 );

```

### Matrix Box

**Sintaxis:** y = Matrix Box( matrix, &lt; &lt;&lt;Column Names( "c1", "c2", ... )&gt;, &lt; &lt;&lt;Row Names( "r1", "r2", ... )&gt; )

**Descripción:** Devuelve un cuadro de visualización para mostrar una matriz de números.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example", Matrix Box( [11 22 33, 44 55 66], <<RowNames( "First", "Second" ) ) );

```

### Matrix Mult

**Sintaxis:** y = Matrix Mult( A, B, ... ); y = A * B

**Descripción:** Realiza una multiplicación de matrices. Los argumentos de las matrices deben ser conformables: NCol(a)==NRow(b). Nótese que A * B también es válido.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatB = [1 2, 1 2, 1 2];
exMatM1 = exMatA * exMatB;
exMatM2 = Matrix Mult( exMatA, exMatB );
exMatC = [1 2, 1 2];
exMatM3 = Matrix Mult( exMatA, exMatB, exMatC );
Show( exMatM1 );
Show( exMatM2 );
Show( exMatM3 );

```

### Matrix Mult BLAS

**Sintaxis:** y = Matrix Mult BLAS( A, B, ... )

**Descripción:** Realiza una multiplicación de matrices. Los argumentos de las matrices deben ser conformables: NCol(A)==NRow(B).

**JMP Versión agregada:** 17

```jsl

exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatB = [1 2, 1 2, 1 2];
exMatM2 = Matrix Mult BLAS( exMatA, exMatB );

```

### Matrix Rank

**Sintaxis:** r = Matrix Rank( X )

**Descripción:** Devuelve el rango de la matriz X.

**JMP Versión agregada:** 14

```jsl

Matrix Rank( [1 0 0, 0 1 0, 0 1 0] );

```

### Matrix To Blob

**Sintaxis:** m = Matrix To Blob( matrix, type, bytesEach, endian )

**Descripción:** Genera un blob a partir de una matriz convirtiendo los elementos de la matriz en enteros con signo o sin signo de 1, 2 o 4 bytes o números de coma flotante de 4 o 8 bytes.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Matrix To Blob( [3.14, 1.414], "float", 4, "big" );

```

### Max

**Sintaxis:** y = Max( x1, ... ); y = Maximum( x1, ... )

**Descripción:** Devuelve el valor máximo entre los argumentos o de los valores dentro de una única matriz o lista indicada como argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### Maximize

**Sintaxis:** Maximize( expr, {x1, x2, ...} ); Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;MaxIter( 250 ), &lt;&lt;Tolerance( .00000001 ), &lt;&lt;details(both | returnDetails | displaySteps), &lt;&lt;gradient(), &lt;&lt;hessian(), method(NR | SR1), &lt;&lt;useNumericDeriv(True))

**Descripción:** Busca valores para los argumentos de la función, especificados en la lista {x1, x2, ...}, que maximizan la expresión expr. Puede especificar los límites inferior y superior para cada argumento entre paréntesis después del nombre del argumento. Si expr no es una función cóncava, es posible que Maximize encuentre un máximo local en lugar de un máximo global. Si esto supone un problema, pruebe a utilizar varios valores iniciales. Además, Maximize funciona mejor con las funciones que tienen una segunda derivada continua. Los argumentos adicionales para la función Maximize le permiten establecer el número máximo de iteraciones y la tolerancia de la convergencia, así como ver más detalles acerca de la optimización. Haga clic en el botón Tema de ayuda para obtener más información acerca de los argumentos opcionales.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

/*Simple example*/ 
x = 0;
y = 0;
maxf = Maximize( ((2 * x ^ 2 + 12 * x * y - y * 3)), {x, y} );
Eval List( {x, y, maxf} );

```

**Ejemplo 2**

```jsl

/*Find the MLE for a Normal Distribution with a random sample of 3 observations*/
x = [3 4 5]; /* observed values*/ 
n = 3;
logDens = Expr(
	(-n / 2) * Log( 2 * Pi() * sigSq ) - Summation( i = 1, 3, ((x[i] - mu) ^ 2) ) / (2 *
	sigSq)
);
mu = 3;
sigSq = 1;/*initial values*/ 
{maxReached, iters, gradient, hessian} = Maximize(
	logDens,
	{mu, sigSq( 0, . )},
	<<details( both )
);

```

**Ejemplo 3**

```jsl

/*Simple example with all optional arguments*/ 
x = 0;
y = 0;
{objVal, iters, gradient, hessian} = Maximize(
	((2 * x ^ 2 + 12 * x * y - y * 3)),
	{x( -1, 1 ), y( -1, 1 )},
	<<maxIter( 200 ),
	<<tolerance( 10 ^ -6 ),
	<<details( both )
);

```

### Maximum

**Sintaxis:** y = Max( x1, ... ); y = Maximum( x1, ... )

**Descripción:** Devuelve el valor máximo entre los argumentos o de los valores dentro de una única matriz o lista indicada como argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### MDYHMS

**Sintaxis:** s = MDYHMS( datetime, &lt;format&gt; )

**Descripción:** Devuelve una representación de un valor de fecha y hora con el orden: mes, día, año, hora, minuto y segundo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

MDYHMS( Today() );

```

### Mean

**Sintaxis:** y = Mean( x1, ... )

**Descripción:** Devuelve la media aritmética de los argumentos o de los valores dentro de una única matriz o lista indicadas como argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {Mean( Pi(), e() ), Mean( [33 44 22 20 30] )} );

```

### Median

**Sintaxis:** y = Median( x1, ... )

**Descripción:** Devuelve la mediana de los argumentos combinados, que pueden ser argumentos escalares, matriz o lista.

**JMP Versión agregada:** 15

```jsl

Median( [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] );

```

### Method

**Sintaxis:** m = Method( { arg1 = val1, ... }, expression* )

**Descripción:** Crea un método dentro de una clase

**JMP Versión agregada:** Antes de la versión 14

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
cl << Delete;
Delete Classes( "complex" );

```

### Min

**Sintaxis:** y = Min( x1, ... ); y = Minimum( x1, ... )

**Descripción:** Devuelve el valor mínimo entre los argumentos o de los valores dentro de una única matriz o lista indicada como argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Minimize

**Sintaxis:** Minimize( expr, {x1, x2, ...} ); Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;MaxIter( 250 ), &lt;&lt;Tolerance( .00000001 ), &lt;&lt;details(both | returnDetails | displaySteps), &lt;&lt;gradient(), &lt;&lt;Hessian(), &lt;&lt;method(NR | SR1), &lt;&lt;useNumericDeriv(True))

**Descripción:** Busca valores para los argumentos de la función, especificados en la lista {x1, x2, ...}, que minimizan la expresión expr. Puede especificar los límites inferior y superior para cada argumento entre paréntesis después del nombre del argumento. Si expr no es una función convexa, es posible que Minimize encuentre un mínimo local en lugar de un mínimo global. Si esto supone un problema, pruebe a utilizar varios valores iniciales. Además, Minimize funciona mejor con las funciones que tienen una segunda derivada continua. Los argumentos adicionales para la función Minimize le permiten establecer el número máximo de iteraciones y la tolerancia de la convergencia, así como ver más detalles acerca de la optimización. Haga clic en el botón Tema de ayuda para obtener más información acerca de los argumentos opcionales.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

/*Simple Example*/
x = 0;
y = 0;
minFun = Minimize( (y * 3 - 2 * x ^ 2 - 12 * x * y), {x, y} );
Eval List( {x, y, minFun} );

```

**Ejemplo 2**

```jsl

/*Nonlinear Sums of Squares Example*/
x = [1.309, 1.471, 1.49, 1.565, 1.611, 1.68];
y = [2.138, 3.421, 3.597, 4.34, 4.882, 5.66];
sseExpr = Expr(
	Summation( i = 1, 6, (y[i] - b1 * x[i] ^ b2) ^ 2 )
);
b1 = 1;
b2 = 5;
{objVal, iters, gradient, hessian} = Minimize(
	sseExpr,
	{b1, b2},
	<<details( both ),
	<<tolerance( 10 ^ -16 )
);

```

**Ejemplo 3**

```jsl

/*Simple example with some optional arguments*/
x = 0;
y = 0;
{objVal, iters, gradient, hessian} = Minimize(
	((2 * x ^ 2 + 12 * x * y - y * 3)),
	{x( -1, 1 ), y( -1, 1 )},
	<<maxIter( 200 ),
	<<tolerance( 10 ^ -6 ),
	<<details( both )
);

```

**Ejemplo 4**

```jsl

/*Example with gradient, hessian, and method(nr) options*/
xx = [1.309, 1.471, 1.49, 1.565, 1.611, 1.68];
yy = [2.138, 3.421, 3.597, 4.34, 4.882, 5.66];
tmp3 = Expr(
	Summation( i = 1, 6, (yy[i] - b1 * xx[i] ^ b2) ^ 2 )
);
b1 = 1;
b2 = 5;
Minimize(
	tmp3,
	{b1, b2},
	<<details( both ),
	<<tolerance( 10 ^ -10 ),
	<<Method( nr ),
	<<gradient(
		{Summation( i = 1, 6, -2 * xx[i] ^ b2 * (yy[i] - b1 * xx[i] ^ b2) ),
		Summation(
			i = 1,
			6,
			2 * (b1 * Ln( xx[i] ) * xx[i] ^ b2) * (b1 * xx[i] ^ b2 - yy[i])
		)}
	),
	<<hessian(
		{{Summation( i = 1, 6, 2 * xx[i] ^ (2 * b2) ),
		Summation( i = 1, 6, 2 * Ln( xx[i] ) * xx[i] ^ b2 * (2 * b1 * xx[i] ^ b2 - yy[i]) )},
		{Summation(
			i = 1,
			6,
			2 * b1 * Ln( xx[i] ) ^ 2 * xx[i] ^ b2 * (2 * b1 * xx[i] ^ b2 - yy[i])
		)}}
	)
);

```

**Ejemplo 5**

```jsl

/*Example with usNumericDeriv and method(sr1) options*/
xx = [1.309, 1.471, 1.49, 1.565, 1.611, 1.68];
yy = [2.138, 3.421, 3.597, 4.34, 4.882, 5.66];
tmp3 = Expr(
	Summation( i = 1, 6, (yy[i] - b1 * xx[i] ^ b2) ^ 2 )
);
b1 = 1;
b2 = 5;
{objValue, iter, gradient, hessian} = Minimize(
	tmp3,
	{b1, b2},
	<<details( both ),
	<<tolerance( 10 ^ -16 ),
	<<Method( sr1 ),
	<<useNumericDeriv( True )
);

```

### Minimum

**Sintaxis:** y = Min( x1, ... ); y = Minimum( x1, ... )

**Descripción:** Devuelve el valor mínimo entre los argumentos o de los valores dentro de una única matriz o lista indicada como argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Minus

**Sintaxis:** y = -x; y = Minus( x )

**Descripción:** Niega x, que puede ser un número, una matriz o una lista de números.

**JMP Versión agregada:** Antes de la versión 14

```jsl

-Pi();

```

### Minute

**Sintaxis:** min = Minute( datetime )

**Descripción:** Devuelve los minutos correspondientes a un valor de fecha y hora, del 0 al 59.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Minute( Today() );

```

### Mod

**Sintaxis:** z = Modulo( x, y )

**Descripción:** Devuelve el resto de la división de x entre y. El resto tiene el mismo signo que x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Modulo( 10, 3 );

```

### Mode

**Sintaxis:** y = Mode( list or matrix )

**Descripción:** Selecciona el elemento &apos;más frecuente&apos; de una matriz o lista, el valor más bajo en caso de coincidir

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show( Mode( [1, 2, 3, 2, 1] ), Mode( {"a", "b", "c", "b", "a", "b"} ) );

```

### Modified Internal Rate of Return

**Sintaxis:** x = Modified Internal Rate of Return( values, finance_rate, reinvest_rate ); x = Modified Internal Rate of Return( finance_rate, reinvest_rate, value1, value2, &lt;value3, ...&gt; )

**Descripción:** Devuelve la tasa interna de retorno modificada de una serie de flujos de caja periódicos, teniendo en cuenta tanto el coste de la inversión como los intereses obtenidos mediante la reinversión de tesorería. Equivale a la función MIRR de Microsoft Excel. El segundo prototipo de la función acepta todos los argumentos escalares.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Modified Internal Rate of Return( [-10000, 1000, 900, 950], .1, -.12 );
Modified Internal Rate of Return( .1, -.12, -10000, 1000, 900, 950 );

```

### Modulo

**Sintaxis:** z = Modulo( x, y )

**Descripción:** Devuelve el resto de la división de x entre y. El resto tiene el mismo signo que x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Modulo( 10, 3 );

```

### Month

**Sintaxis:** mon = Month( datetime )

**Descripción:** Devuelve el mes correspondiente a un valor de fecha y hora, del 1 al 12.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Month( Today() );

```

### MouseBox

**Sintaxis:** box = MouseBox( displayBoxArgs )

**Descripción:** Devuelve un cuadro que permite realizar rellamadas a JSL para seguir las acciones del ratón.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	MouseBox(/*first sibling*/Text Box( "drag from here" ),
		<<setDragText( "hello" ),
		<<setTooltip( "source" ),
		<<setDragEnable( 1 ),
		<<setDragBegin(/* decide if a drag is allowed */
			Function( {this, clickpt},
				"magic text";/* 0.0 to prevent the drag.  1.0 is the same as 'this<<getDragText' */
			)
		),
		<<setDragEnd(/* clean up after a drag finishes or cancels */
			Function( {this, clickpt, how}, /* how=move,copy,ignore */
				If(
					how != "ignore" & !Is Empty( this << getDestBox ) & this << getDestBox
					 == this << sib, /* the getDestBox check makes sure the destination of the drag-and-drop was my sibling and not some other program beyond our control */
					(this << child) << setText(
						"done!" /* 'move' suggests clearing the source */
					)
				)
			)
		)
	),
	MouseBox(/*second sibling*/Text Box( "drag to here" ),
		<<setTooltip( "destination" ),
		<<setDropEnable( 1 ),
		<<setDropTrack(/* decide if dropping is allowed, before the drop.  The getSourceBox check makes sure the source of the drag-and-drop is my sibling, and not some other program */
			Function( {this, clickpt},
				If( !Is Empty( this << getSourceBox ) & this == (this << getSourceBox) << sib,
					1, /*else*/0
				)
			)
		),
		<<setDropCommit(/* accept the drop */Function( {this, clickpt, text},
				(this << child) << setText( text )
			)
		)
	)
);

```

### Mousetrap

**Sintaxis:** Mousetrap( dragScript, &lt;mouseUpScript&gt; )

**Descripción:** Evalúa repetidamente la expresión dragScript mientras se mantiene pulsado el ratón dentro del gráfico allí donde la pulsación no sea gestionada por otro objeto gráfico. Antes de ejecutar el script, las variables globales x e y se fijan a los valores del ratón y posteriormente se restauran a sus valores originales. La expresión mouseUpScript se ejecuta al soltar el botón del ratón.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	exx = 20;
	exy = 50;,
	Graph Box(
		Frame Size( 200, 200 ),
		Mousetrap(
			exx = x;
			exy = y;
		);
		Circle( {0, 0}, Sqrt( exx * exx + exy * exy ) );
	)
);

```

### Move Directory

**Sintaxis:** rc = Move Directory( from, to )

**Descripción:** Mueve un directorio de un lugar a otro. Devuelve 1 si se ha movido el directorio. Devuelve 0 si no se ha podido mover el directorio. Lanza un error si la ruta de acceso no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Delete Directory( "$TEMP/subB" );
Delete Directory( "$TEMP/Loss Function Templates" );
rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );
Create Directory( "$TEMP/subB" );
rc1 = Move Directory( "$TEMP/Loss Function Templates", "$TEMP/subB" );
rc2 = Directory Exists( "$TEMP/Loss Function Templates" );
rc3 = Directory Exists( "$TEMP/subB" );
rc4 = Delete Directory( "$TEMP/subB" );
rc5 = Directory Exists( "$TEMP/subB" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Move File

**Sintaxis:** rc = Move File( from, to )

**Descripción:** Mueve un archivo de un lugar a otro. Devuelve 1 si se ha movido el archivo. Devuelve 0 si no se ha podido mover el archivo. Lanza un error cuando la ruta de acceso no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

If( File Exists( "$TEMP/y.jmp" ),
	Delete File( "$TEMP/y.jmp" )
);
rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc1 = Move File( "$TEMP/x.jmp", "$TEMP/y.jmp" );
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/y.jmp" );
rc4 = Delete File( "$TEMP/y.jmp" );
rc5 = File Exists( "$TEMP/y.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Move to Project

**Sintaxis:** Move to Project(&lt;Source(project)&gt;, &lt;Destination(project)&gt;, &lt;Windows({list of windows to move})&gt;)

**Descripción:** Mueve una o más ventanas a un proyecto, fuera de un proyecto o entre proyectos. Solo se debe especificar un origen y un destino; el resto serán los valores predeterminados del proyecto actual. (Utilice solo el origen para mover ventanas al proyecto actual, y solo destino para mover ventanas fuera de él). Se moverá una ventana de tabla de datos junto con sus informes dependientes, aunque solo es necesario especificar uno en el argumento Ventanas. Si se omite, el argumento Ventanas será el predeterminado para todas las ventanas abiertas en el proyecto de origen.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
report = dt << Run Script( "Bivariate" );
                              
project = New Project();
                              
Move to Project( destination( project ), windows( {report} ) );

```

**Ejemplo 2**

```jsl

project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
Move to Project( Source( project ) );
project << Close Window();

```

### Moving Average

**Sintaxis:** y = Moving Average( x, weighting, &lt;before=-1&gt;, &lt;after=0&gt;, &lt;partial window is missing=0&gt; )

**Descripción:** Devuelve una matriz de las medias móviles para la matriz de entrada. before y after determinan el rango ("ventana") de elementos de los que calcular la media, donde before puede ser -1 para indicar todos los elementos anteriores. Si weighting es 1, todos los elementos tienen el mismo peso. Si weighting es 0, los elementos tienen pesos linealmente incrementales. De lo contrario, weighting es el parámetro para la ponderación exponencial (EWMA). partial window is missing indica si las medias se notifican cuando no todos los vecinos están presentes, lo que puede producirse en los extremos o cerca de los valores faltantes. Si partial window is missing no es cero, se notifican los valores faltantes para tales ventanas parciales.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List(
	{Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 1, 3 ),
	Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0, 2, 2 ),
	Moving Average( [1 2 1 2 . 4 9 9 9 9 9], 1, 1, 1, 1 ),
	Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0.5 )}
);

```

### Multiple File Import

**Sintaxis:** mfiObj = Multiple File Import();

**Descripción:** Crea un objeto de importación de varios archivos; el objeto acepta mensajes para establecer una carpeta, filtrar archivos e importar. Para abrir un cuadro de diálogo, utilice el mensaje "Crear ventana". Para importar inmediatamente, utilice el mensaje "Importar datos", que devolverá una lista de las tablas que se crearon.

**JMP Versión agregada:** 14

**Ejemplo de scripting**

```jsl


mfi = Multiple File Import();
mfi << Set Folder( "$SAMPLE_IMPORT_DATA" );
mfi << Set Name Filter( "*.txt" );
mfi << Set Name Enable( 1 );
tables = mfi << Import Data();

```

**Ejemplo interactivo**

```jsl

// use the save-script-to-script-window button 
// in the MFI dialog to see more messages
// for filtering files and controlling the import
Multiple File Import(
	<<Set Folder( "$DESKTOP" ),
	<<Set Name Filter( "*.csv;" ),
	<<Set Name Enable( 1 )
) << Create Window;

```

### Multiply

**Sintaxis:** y = x0 * x1; y = Multiply( x0, x1, ... )

**Descripción:** Multiplica todos los argumentos, que pueden ser números, matrices o listas de números.

**JMP Versión agregada:** Antes de la versión 14

```jsl

2 * Pi();

```

### Multiply To

**Sintaxis:** y *= x; Multiply To( y, x )

**Descripción:** Multiplica un valor por una variable o lista de variables.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex = 3;
ex *= 2;
ex;

```

### Multivariate Normal Impute

**Sintaxis:** y = Multivariate Normal Impute( yVec, meanYvec, symCovMat, colMin, colMax )

**Descripción:** Devuelve un vector respuesta con valores imputados a los valores faltantes en el vector de respuestas yVec. Las imputaciones se basan en una distribución normal multivariante con vector de medias meanYvec y matriz de covarianza simétrica symCovMat. Los argumentos opcionales colMin y colMax son los vectores respectivos de los mínimos y máximos de columna. Estos argumentos establecen límites para las imputaciones.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mat = [0.430735257211985 -0.935632420013493 . 0.424649913158299,
. -0.687720061441453 0.29665732536624 -1.94898001941576,
-0.0425472526673373 0.463229145080277 0.635619352779951 .];
cov = Covariance( mat, <<"Pairwise"/*, <<"shrink"*/ );
colMean = V Mean( mat );
colMin = V Min( mat );
colMax = V Max( mat );
For( it = 1, it <= N Row( mat ), it++,
	mat[it, 0] = Multivariate Normal Impute( mat[it, 0], colMean, cov, colMin, colMax )`
);
Print( mat );

```

### Munger

**Sintaxis:** r = Munger( s, startPos, findStringOrNChars, &lt;replaceString&gt; )

**Descripción:** Busca una subcadena de caracteres o una posición en el argumento s en función de una combinación de argumentos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {Munger( "over there", 1, "t", "" ), Munger( "17 June 2000", 4, 4, "March" )} );

```

### N Arg

**Sintaxis:** n = N Arg( expr )

**Descripción:** Devuelve el número de argumentos del principio de la expresión evaluada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

N Arg( Expr( Sum( a, b, c ) ) );

```

### N Arg Expr

**Sintaxis:** n = N Arg Expr( expr )

**Descripción:** Devuelve el número de argumentos del principio de la expresión. Esta función está en desuso. Utilice N Arg() en su lugar.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

// See Example 2 for the deprecated N Arg Expr() equivalent
N Arg( Expr( Sum( a, b, c ) ) );

```

**Ejemplo 2**

```jsl

// Deprecated
N Arg Expr( Sum( a, b, c ) );

```

### N Choose K

**Sintaxis:** m = N Choose K( n, k )

**Descripción:** Devuelve n! / (k! * (n - k)!), que es el número de formas en que se pueden seleccionar k elementos de n, ignorando el orden.

**JMP Versión agregada:** Antes de la versión 14

```jsl

N Choose K( 5, 3 );

```

### N Col

**Sintaxis:** y = N Col(); y = N Col( dataTable ); y = N Col( matrix )

**Descripción:** Devuelve el número de columnas de la tabla de datos actual, una tabla de datos especificada o una matriz.

**JMP Versión agregada:** Antes de la versión 14

```jsl

N Col( [11 22, 33 44] );

```

### N Cols

**Sintaxis:** y = N Cols(); y = N Cols( dataTable ); y = N Col( matrix )

**Descripción:** Devuelve el número de columnas de la tabla de datos actual, una tabla de datos especificada o una matriz.

**JMP Versión agregada:** Antes de la versión 14

```jsl

N Col( [11 22, 33 44] );

```

### N Items

**Sintaxis:** y = N Items( x )

**Descripción:** Devuelve el número de elementos en una lista, el número de elementos en una matriz, el número de claves en un arreglo asociativo, el número de funciones y variables en un espacio de nombres, el número de métodos y variables en un objeto de clase, o el número de hijos de un cuadro de visualización.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

N Items( {1, 2 + 3, [11 22]} );

```

**Ejemplo 2**

```jsl

N Items( ["a" => 10, "b" => 3, => 0] );

```

**Ejemplo 3**

```jsl

New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
N Items( hlist );

```

### N Missing

**Sintaxis:** y = N Missing( x1, x2, ... )

**Descripción:** Devuelve el número de valores faltantes entre los argumentos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

N Missing( 1, 2, ., 3, [11 22 . .], 4 );

```

### N Row

**Sintaxis:** y = N Row(); y = N Row( dt ); y = N Row( matrix )

**Descripción:** Devuelve el número de filas de la tabla de datos actual, una tabla de datos especificada o una matriz.

**JMP Versión agregada:** Antes de la versión 14

```jsl

N Row( [11 22, 33 44] );

```

### N Rows

**Sintaxis:** y = N Rows(); y = N Rows( dt ); y = N Rows( matrix )

**Descripción:** Devuelve el número de filas de la tabla de datos actual, una tabla de datos especificada o una matriz.

**JMP Versión agregada:** Antes de la versión 14

```jsl

N Rows( [11 22, 33 44] );

```

### N Table

**Sintaxis:** n = N Table()

**Descripción:** Devuelve el número de tablas de datos abiertas actualmente.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
N Table();

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Open( "$SAMPLE_DATA/Solubility.jmp" );
d = {};
For( i = 1, i <= N Table(), i++,
	d[i] = Data Table( i ) << GetName
);
d;

```

### Name

**Sintaxis:** Name(string)

**Descripción:** Un nombre es simplemente algo para llamar a un elemento. Los nombres se utilizan para las variables y para las funciones, y pueden emplearse directamente en scripts, siempre que se sigan ciertas reglas. Si el nombre comienza por un carácter alfabético o un guión bajo, y continúa con caracteres alfanuméricos, espacios en blanco, símbolos matemáticos Unicode y ciertos símbolos de puntuación (apóstrofos (’), signos de porcentaje (%), puntos (.), barras inversas (\\) y guiones bajos (_)), el nombre puede utilizarse directamente en scripts. Los nombres que no siguen estas reglas pueden emplearse mediante la palabra clave del Name().

**JMP Versión agregada:** 14

```jsl

Name( "taxable income(2011)" ) = 456000;
tax = .25;
Print( tax * Name( "taxable income(2011)" ) );

```

### Name Expr

**Sintaxis:** y = Name Expr( x )

**Descripción:** Devuelve el valor de un símbolo, sin evaluarlo cuando se trata de una expresión.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex = Expr( 1 + 2 );
Eval List( {ex, Name Expr( ex )} );

```

### Names Default To Here

**Sintaxis:** Names Default To Here( boolean )

**Descripción:** Determina dónde se deben almacenar los nombres sin resolver, ya sea como globales/locales (0) o en el espacio de nombres Aquí: (1).

**JMP Versión agregada:** Antes de la versión 14

```jsl

/* Variable x will be stored in the Here: namespace by default */x = 1;
Show( x );

```

### Namespace

**Sintaxis:** ns = Namespace( namespace reference )

**Descripción:** Devuelve una referencia al espacio de nombres especificado en el argumento name.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Namespace(
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
ns = Namespace( "complex" );
Show( ns );
ns << Delete;

```

### Namespace Exists

**Sintaxis:** nsexists = Namespace Exists( namespace reference )

**Descripción:** Devuelve 1 si el espacio de nombres especificado en el argumento name existe y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

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
nsexists = Namespace Exists( ns );
Show( nsexists );
ns << Delete;

```

### NChooseK Matrix

**Sintaxis:** m = NChooseK Matrix( n, k )

**Descripción:** Crea una matriz de nChooseK(n,k) filas y k columnas con todas las combinaciones de k enteros de 1 a n.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Print( NChooseK Matrix( 5, 3 ) );

```

### Neg Binomial Distribution

**Sintaxis:** cumprob = Neg Binomial Distribution( p, n, k )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución binomial negativa sea menor o igual que k, donde la probabilidad de éxito es p y el número de éxitos es n.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exnbdp = 0.5;
exnbdn = 10;
New Window( "Example: Neg Binomial Distribution",
	exnbdy = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( exnbdk = 0, exnbdk < 100, exnbdk++,
			H Line(
				exnbdk,
				exnbdk + 1,
				Neg Binomial Distribution( exnbdp, Round( exnbdn ), exnbdk )
			);
			V Line(
				exnbdk + 1,
				Neg Binomial Distribution( exnbdp, Round( exnbdn ), exnbdk ),
				Neg Binomial Distribution( exnbdp, Round( exnbdn ), exnbdk + 1 )
			);
		);
		Text( {30, 0.07}, "n=", Round( exnbdn ), " p=", Round( exnbdp, 2 ) );
	),
	H List Box( Slider Box( 0, 1, exnbdp, exnbdy << reshow ), Text Box( " p" ) ),
	H List Box( Slider Box( 1, 20, exnbdn, exnbdy << reshow ), Text Box( " n" ) )
);

```

### Neg Binomial Probability

**Sintaxis:** prob = Neg Binomial Probability( p, n, k )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución binomial negativa sea igual a k, donde la probabilidad de éxito es p y el número de éxitos es n.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exnbpp = 0.5;
exnbpn = 10;
New Window( "Example: Neg Binomial Probability",
	exnbpy = Graph Box(
		Y Scale( 0, 0.3 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( exnbpk = 0, exnbpk < 100, exnbpk++,
			V Line( exnbpk, 0, Neg Binomial Probability( exnbpp, exnbpn, exnbpk ) )
		);
		Text( {30, 0.27}, "n=", Round( exnbpn ), " p=", Round( exnbpp, 2 ) );
	),
	H List Box( Slider Box( 0, 1, exnbpp, exnbpy << reshow ), Text Box( " p" ) ),
	H List Box( Slider Box( 0, 40, exnbpn, exnbpy << reshow ), Text Box( " n" ) )
);

```

### Negative Binomial Distribution

**Sintaxis:** cumprob = Negative Binomial Distribution( k, lambda, sigma )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución binomial negativa sea menor o igual que k, donde lambda es el parámetro de localización, sigma es el parámetro de escala y k es el conteo de interés.

**JMP Versión agregada:** 19

```jsl

lambda = 20;
sigma = 2;
New Window( "Example: Negative Binomial Distribution",
	ppy = Graph Box(
		Y Scale( 0, 1.01 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= 40, k++,
			H Line( k, k + 1, Negative Binomial Distribution( k, lambda, sigma ) );
			V Line(
				k + 1,
				Negative Binomial Distribution( k, lambda, sigma ),
				Negative Binomial Distribution( k + 1, lambda, sigma )
			);
		);
		Text( {2, 0.95}, "\!U03BB=", Round( lambda, 2 ) );
		Text( {2, 0.87}, "\!U03C3=", Round( sigma, 2 ) );
	),
	H List Box( Slider Box( 3, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( .01, 5, sigma, ppy << reshow ), Text Box( " \!U03C3" ) )
);

```

### Negative Binomial Probability

**Sintaxis:** prob = Negative Binomial Probability( k, lambda, sigma )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución binomial negativa sea igual a k, donde lambda es el parámetro de localización, sigma es el parámetro de escala y k es el conteo de interés.

**JMP Versión agregada:** 19

```jsl

lambda = 5;
sigma = 2;
New Window( "Poisson and Negative Binomial",
	clty = Graph Box(
		Y Scale( 0, 0.3 ),
		X Scale( -1, 20.5 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( x = 0, x <= 20, x++,
			Pen Color( "red" );
			V Line( x, 0, Poisson Probability( lambda, x ) );
			Pen Color( "blue" );
			V Line( x + 0.35, 0, Negative Binomial Probability( x, lambda, sigma ) );
		);
		Text( {1, 0.25}, "\!U03BB=", Round( lambda, 8 ), " \!U03C3=", Round( sigma, 8 ) );
		Text( {0, 0.28}, "Red = Poisson, Blue = Negative Binomial" );
	),
	H List Box( Slider Box( 3, 10, lambda, clty << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( .01, 5, sigma, clty << reshow ), Text Box( " \!U03C3" ) )
);

```

### Negative Binomial Quantile

**Sintaxis:** q = Gamma Negative Binomial Quantile( lambda, sigma, cumprob )

**Descripción:** Devuelve el cuantil entero más pequeño para el cual la probabilidad acumulada de la distribución binomial negativa (lambda, sigma) es mayor o igual que cumprob.

**JMP Versión agregada:** 19

```jsl

qexpl = 20;
qexps = 2;
qexpn = 40;
qexpq = 0.5;
New Window( "Example: Negative Binomial Quantile",
	qexpy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qexpk = 0, qexpk < Round( qexpn ), qexpk++,
			H Line( qexpk, qexpk + 1, Negative Binomial Distribution( qexpk, qexpl, qexps ) );
			V Line(
				qexpk + 1,
				Negative Binomial Distribution( qexpk, qexpl, qexps ),
				Negative Binomial Distribution( qexpk + 1, qexpl, qexps )
			);
		);
		Pen Color( "blue" );
		V Line( Negative Binomial Quantile( qexpl, qexps, qexpq ), 0, 1 );
		Text( {1, 0.9}, " \!U03BB=", Round( qexpl, 2 ), " \!U03C3=", Round( qexps, 2 ) );
		Text(
			{1, 0.8},
			" q=",
			Round( qexpq, 2 ),
			" quantile=",
			Round( Negative Binomial Quantile( qexpl, qexps, qexpq ) )
		);
	),
	H List Box( Slider Box( 3, 40, qexpl, qexpy << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( .01, 5, qexps, qexpy << reshow ), Text Box( " \!U03C3" ) ),
	H List Box( Slider Box( 0, 1, qexpq, qexpy << reshow ), Text Box( " q" ) )
);

```

### Net Present Value

**Sintaxis:** x = Net Present Value( rate, values ); x = Net Present Value( rate, value1, value2, &lt;value3, ...&gt; )

**Descripción:** Devuelve el valor actual neto de una inversión basándose en una tasa de descuento y una serie de futuros pagos (valores negativos) e ingresos (valores positivos). El argumento values es una matriz unidimensional. Equivale a la función NPV de Microsoft Excel. El segundo prototipo de la función acepta todos los argumentos escalares.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Net Present Value( .05, [-10000, 1000, 900, 9500] );
Net Present Value( .05, -10000, 1000, 900, 9500 );

```

### New CAS Action

**Sintaxis:** action = New CAS Action(...)

**Descripción:** Crea una acción CAS.

**JMP Versión agregada:** 15

```jsl


echo = [=> ];
echo["a"] = 1;
echo["b"] = JSON Literal( true );
echo["c"] = 3.141559;
action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );

```

### New CAS DATA Step action

**Sintaxis:** action = New CAS DATA Step Action(...)

**Descripción:** Crea una acción DATA step de CAS.

**JMP Versión agregada:** 15

```jsl


cas = Current CAS Connection();
code =
"\[
	data temp;
	x = 9.1; y = 6; z = sqrt(x**2 + y**2);
	A = "SAS"; B = "Statistics";
	put _ALL_;              /* display all variables and values */
	run;
]\";
action = New CAS DATA Step action( Code( code ) );
cas << Submit( action );

```

### New CAS Server

**Sintaxis:** cas = New CAS Server(&lt;...&gt;)

**Descripción:** Crea un nuevo servidor CAS.

**JMP Versión agregada:** 15

```jsl


url = "http://myCasURL";
cas = New CAS Server( Connect( URL( url ), Prompt( IfNeeded ) ) );

```

### New Column

**Sintaxis:** dc = New Column( name, &lt;"Numeric"|"Character"|"RowState"|"Expression"&gt;, &lt;"Continuous"|"Ordinal"|"Nominal"|"Multiple Response"|"Unstructured Text"|"Vector"|"None"&gt;, &lt;Width( n )|Format(format name, width, precision)&gt;, &lt;Like(:other column)&gt;, &lt;actions&gt; )

**Descripción:** Crea una columna nueva en la tabla de datos actual. Los argumentos opcionales actions son todos los mensajes compatibles con los objetos de columnas de datos.

**JMP Versión agregada:** Antes de la versión 14

**Like**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "like name", Like( :name ) );

```

**Simple**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "example", "Numeric", "Continuous", Width( 5 ), <<Set Each Value( 100 ) );

```

### New Column by Text Matching

**Sintaxis:** dc = New Column by Text Matching( Column(:name), Set Regex(), &lt;Output Column Name("Name")&gt;, &lt;Use Result(0 | 1)&gt; )

**Descripción:** Crea una nueva columna realizando una coincidencia de patrón de expresión regular en una columna existente.

**JMP Versión agregada:** 16

```jsl

Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
New Column by Text Matching(
	Column( :Narrative Cause ),
	Set Regex( Library( "Words" ), Library( "Time" ), Library( "Units" ) ),
	Output Column Name( "Match Output" ),
	Use Result( 1 )
);

```

### New Custom Function

**Sintaxis:** f=New Custom Function(namespace, name, function definition)

**Descripción:** Crea un nuevo objeto de función personalizada. Se coloreará una función personalizada en el editor de scripts y se mostrará en el Índice de scripts. La información necesaria para una función de usuario personalizada son un espacio de nombres (para evitar colisiones con funciones globales), un nombre y una definición de función. Se puede añadir información de ayuda adicional mediante mensajes. Utilice el comando Añadir funciones personalizadas para publicar la nueva función en el entorno JMP.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );

```

**Ejemplo 2**

```jsl

/*Create a custom function that can be used as a format*/
Add Custom Functions(
	{New Custom Function(
		"custom",
		"User Defined Format Function",
		Function( {inches},
			Char( inches ) || " in"
		),
		<<Custom Format Category( "Custom" ), 

	)}
);

```

**Ejemplo 3**

```jsl

/*Create a custom function that can be used as a transform*/
Add Custom Functions(
	{New Custom Function(
		"custom",
		"User Defined Transform Function",
		Function( {inches},
			inches * 2.54
		),
		<<Transform Category( "Custom" ), 

	)}
);

```

### New Data Connector

**Sintaxis:** result = New Data Connector( Type( type ) | ID( id ) | File( path ) | Spec( string ) | Base( data connector ), &lt; Option1( value1 ) &gt;, ..., &lt; OptionN( valueN ) &gt; )

**Descripción:** Crea un objeto de configuración del conector de datos.

**JMP Versión agregada:** 18

**Ejemplo 1**

```jsl


// Create a data connector from scratch
dc = New Data Connector( Type( "ODBC" ), Database( "foo" ), Server( "bar.example.com" ) );
Show( dc << Get( Database ) );  // Overridden database value "foo"
Show( dc << Get( Driver ) );  // Default driver value . (missing)
dc << Set( Database( "foo2" ), Driver( "SQL Server" ) );
Show( dc << Get( Database ) );  // New database value "foo2"
Show( dc << Get( Driver ) );  // New driver value "SQL Server"

```

**Ejemplo 2**

```jsl


// Launch Query Builder from a SQL Server data source
dc = New Data Connector(
	ID( "com.jmp.sql_server" ), 
    // All these example values need to be replaced with real ones
	Server( "database.example.com" ),
	Database( "MainDatabase" ),
	User( "username" ),
	Password( "password" )
);
New SQL Query( Connection( dc ) ) << Modify;

```

### New Heat Image

**Sintaxis:** New Heat Image( Matrix, &lt;Color Theme / gradient ( ... )&gt;

**Descripción:** Crea una imagen del mapa de calor basada en una matriz y tema de color o gradiente.

**JMP Versión agregada:** 16

```jsl


nx = 20; // data is this size
ny = 15;
data = J( ny, nx, Random Normal() ); // ny=rows, nx=cols
// create a magnified matrix for seeing each value
magnify = 10;
big data = J( N Rows( data ) * magnify, N Cols( data ) * magnify );
big data = Transform Each( {z, {row, col}}, big data, 
	// and filling each value with one from the small matrix
	data[Floor( (row - 1) / magnify ) + 1, Floor( (col - 1) / magnify ) + 1]
);
New Window( "small and big",
	Lineup Box( N Col( 3 ),
		New Heat Image(
			data,
			gradient(
				{Color Theme( "Blue To Gray To Orange" ), Scale Type( "Standard Deviation" )}
			)
		),
		New Heat Image(
			big data,
			gradient(
				{Color Theme( "Blue To Gray To Orange" ), Scale Type( "Standard Deviation" )}
			)
		),
		New Heat Image(
			Abs( big data ),
			gradient(
				{Color Theme( "White to Black" ), Scale Values( [0 2] ),
				Reverse Gradient( 1 )}
			)
		)
	)
);

```

### New HTTP Request

**Sintaxis:** obj = New HTTP Request(URL(...), Method(...), &lt;Form(&lt;Fields(...)&gt;, &lt;Files(...)&gt;)&gt; | &lt;File(...)&gt; | &lt;Blob(...)&gt; | &lt;JSON(...)&gt;, &lt;QueryString(...)&gt;, &lt;Headers(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;)

**Descripción:** Crea una solicitud para enviar a un servicio web.

**JMP Versión agregada:** 14

```jsl


getSentiment = Function( {text},
	{Default Local},
	fields = Associative Array();
	fields["text"] = text;
	s = New HTTP Request(
		URL( "http://text-processing.com/api/sentiment/" ),
		Method( "POST" ),
		Form( Fields( fields ) ),
		Headers( {"Accept: application/json"} )
	) << Send;
	sAsList = Parse JSON( s );
	retval = Associative Array();
	retval["pos"] = sAsList["probability"]["pos"];
	retval["neg"] = sAsList["probability"]["neg"];
	retval["neutral"] = sAsList["probability"]["neutral"];
	retval["label"] = sAsList["label"];
	retval;
);
                         
addSentimentColumns = Function( {dt, colname, bLabel, bValues},
	{Default Local},
	col = Column( dt, colname );
	colLabel = "Sentiment_Label(" || colname || ")";
	colValPos = "Sentiment_Pos(" || colname || ")";
	colValNeg = "Sentiment_Neg(" || colname || ")";
	colValNeutral = "Sentiment_Neutral(" || colname || ")";
	If( bLabel,
		dt << New Column( colLabel, Character )
	);
	If( bValues,
		dt << New Column( colValPos, Numeric );
		dt << New Column( colValNeg, Numeric );
		dt << New Column( colValNeutral, Numeric );
	);
	For( i = 1, i <= N Rows( dt ), i++,
		sentiment = getSentiment( col[i] );
		If( bLabel,
			Column( dt, colLabel )[i] = sentiment["label"]
		);
		If( bValues,
			Column( dt, colValPos )[i] = sentiment["pos"];
			Column( dt, colValNeg )[i] = sentiment["neg"];
			Column( dt, colValNeutral )[i] = sentiment["neutral"];
		);
	);
);
                         
dt2 = Open( "$SAMPLE_DATA\Cereal.jmp" );
addSentimentColumns( dt2, "Name", 1, 1 );

```

### New Image

**Sintaxis:** img = New Image() img = New Image( width, height ) img = New Image( pathname ) img = New Image( picture ) img = New Image( matrix of JSL color pixels ) img = New Image( rgb|r|g|rgba, {i, i, i} )

**Descripción:** Devuelve una nueva imagen editable mediante comandos de JSL. Si se especifica una ruta hasta un archivo de imagen existente, el archivo debe estar en formato .JPG, .PNG, .GIF, .BMP o .TIF.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

image = New Image( "$SAMPLE_IMAGES/windmap.png" );
New Window( "new image", image );

```

**Ejemplo 2**

```jsl

pic = Open( "$SAMPLE_IMAGES/windmap.png", png );
image2 = New Image( pic );
New Window( "new image", image2 );

```

**Ejemplo 3**

```jsl

image3 = New Image();
mat = J( 256, 256 );
For( y = 0, y < 256, y++,
	For( x = 0, x < 256, x++,
		mat[y * 256 + x] = RGB Color( y / 255.0, 0.0, x / 255.0 )
	)
);
image3 << Set Pixels( mat );
New Window( "image", image3 );

```

### New IP21 Client

**Sintaxis:** New IP21 Client(URL(base URL), &lt;Authentication Method("None"|"Basic"|"NTLM"|"Kerberos")&gt;, &lt;Username(userid)&gt;,&lt;Password(password)&gt;)

**Descripción:** Crea una nueva instancia de Cliente IP21 que se puede utilizar para importar datos de un AspenTech IP.21 Server.

**JMP Versión agregada:** 19

**Ejemplo 1**

```jsl

/* Import actual (raw) data */
/* Note: URL() and Authentication Method() use example values. Please supply a working URL and authentication credentials. */  
tag set = {"TI8045", "TI8058", "TI8064"};
end time = Today();
start time = end time - In Days( 1 );
client = New IP21 Client(
	URL( "https://myserver.com/" ),
	Authentication Method( "NTLM" ),
	Username( "%_UID_%" ),
	Password( "%_PWD_%" )
);
importer = client << Importer(
	Data Source( "My-Data-Source" ),
	Tag Set( tag set ),
	Start Time( start time ),
	End Time( end time ),
	Retrieval Type( "Actual" )
);
importer << Run;

```

**Ejemplo 2**

```jsl

/* Import interpolated data */
/* Note: URL() and Authentication Method() use example values. Please supply a working URL and authentication credentials. */  
tag set = {"TI8045", "TI8058", "TI8064"};
end time = Today();
start time = end time - In Days( 1 );
client = New IP21 Client(
	URL( "https://myserver.com/" ),
	Authentication Method( "NTLM" ),
	Username( "%_UID_%" ),
	Password( "%_PWD_%" )
);
importer = client << Importer(
	Data Source( "My-Data-Source" ),
	Tag Set( tag set ),
	Start Time( start time ),
	End Time( end time ),
	Retrieval Type( "Interpolated" ),
	Period( Minute( 30 ) ), 	/* Every half hour */
);
importer << Run;

```

### New JMP Live

**Sintaxis:** New JMP Live(Connection("Connection Name"), &lt;Prompt("No" | "If Needed")&gt;)

**Descripción:** Inicia una conexión con JMP Live utilizando la información de conexión guardada. La conexión es opcional y se utiliza, de forma predeterminada, la conexión predeterminada especificada en el Administrador de conexiones. El mensaje de solicitud es opcional y su valor predeterminado es "No". Los valores válidos para el mensaje de solicitud son "Sí", "No" y "Si es necesario". El valor "Sí" siempre solicita las credenciales de inicio de sesión. El valor "No" nunca solicita las credenciales de inicio de sesión, pero podría generar un error de autenticación. El valor "Si es necesario" solicita las credenciales solo si las que hay guardadas actualmente no son válidas. Devuelve un objeto de conexión de JMP Live.

**JMP Versión agregada:** 15

**Ejemplo 1**

```jsl

jmplive = New JMP Live();

```

**Ejemplo 2**

```jsl

jmplive = New JMP Live( Connection( "MyJMPLive" ), Prompt( No ) );

```

**Ejemplo 3**

```jsl

jmplive = New JMP Live( Connection( "MyJMPLive" ), Prompt( If Needed ) );

```

### New JMP Live Content

**Sintaxis:** obj = New JMP Live Content(jmpreport|Image(path_to_image)|Data(jmpdatatable)|Map(jmpmap), &lt;Title(...)&gt;, &lt;Description(...)&gt;, &lt;Publish Data(0|1)&gt;, &lt;Enable Warnings(0|1)&gt;, &lt;Optimization("Interactivity" | "Performance")&gt;

**Descripción:** Crea contenido interactivo para publicarlo en JMP Live. 

	El primer parámetro es obligatorio y especifica los datos que se utilizarán para el contenido. Esos datos pueden ser un informe, una tabla de datos, un mapa o una imagen. 

	Título y Descripción se utilizan para personalizar el tipo de contenido que se va a publicar. El resto de los parámetros son opcionales y solo se utilizan para personalizar el contenido del informe. 

	Publicar datos indica si los datos utilizados en el informe se publican en JMP Live. De forma predeterminada, los datos del informe se publican.

	Habilitar advertencias indica si se deben habilitar las Advertencias de gráficos de control para el informe. De forma predeterminada, las Advertencias de gráficos de control están deshabilitadas. 

	Optimización se utiliza para personalizar la forma en que se publica el informe en JMP Live. De forma predeterminada, el informe se publica para permitir una mayor interactividad.

**JMP Versión agregada:** 17

**Ejemplo 1**

```jsl

bc = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = bc << Run Script( "Distribution" );

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Sample Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	dist,
	Title( "Distribution Web Report" ),
	Description( "This report was created with the sample found in the Scripting Index" ),
	Publish Data( 1 ),
	Optimization( "Interactivity" )
);

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**Ejemplo 2**

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Data Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content(
	Data( "$SAMPLE_DATA/Big Class.jmp" ),
	Title( "Big Class Sample Table" ),
	Description(
		"This data table was published with the sample found in the Scripting Index"
	)
);

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**Ejemplo 3**

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Map Content" )
);
folder = jmpliveresult << As Scriptable;

content = New JMP Live Content( Map( "$SAMPLE_DATA/S4-XY.jmp" ) );

jmpliveresult = liveconnection << Publish( content, Folder( folder ) );

```

**Ejemplo 4**

```jsl

liveconnection = New JMP Live();
jmpliveresult = liveconnection << Create Folder(
	Parent Folder( "~" ),
	Title( "Folder for Image Content" )
);
folder = jmpliveresult << As Scriptable;

imageContent = New JMP Live Content(
	Image( "$SAMPLE_IMAGES/black rhino footprint.jpg" ),
	Title( "Rhino Footprint" ),
	Description( "An image of a rhino footprint from the Sample Data" )
);

jmpliveresult = liveconnection << Publish( imageContent, Folder( folder ) );

```

### New Multi HTTP Request

**Sintaxis:** multi_request = New Multi HTTP Request()

**Descripción:** Envía o descarga múltiples solicitudes HTTP en paralelo.

**JMP Versión agregada:** 17

```jsl


requests = New Multi HTTP Request();
requests << Add(
	New HTTP Request(
		Method( "GET" ),
		URL(
			"http://cdimage.ubuntu.com/lubuntu/releases/20.04.3/release/lubuntu-20.04.3-desktop-amd64.iso"
		)
	)
);

requests << Add(
	New HTTP Request(
		Method( "GET" ),
		URL(
			"http://downloads.sourceforge.net/clonezilla/clonezilla-live-2.7.3-19-amd64.iso"
		)
	)
);

data = requests << Download( "show progress", "detailed" );
http_requests = requests << Get Requests();
For( i = 1, i <= N Items( http_requests ), i++,
	Show( http_requests[i] << Get Mime Type() )
);

```

### New Namespace

**Sintaxis:** ns = New Namespace( &lt;name&gt;, &lt;list of expressions&gt; )

**Descripción:** Crea un nuevo espacio de nombres con el nombre especificado en el argumento name, o anónimo si no se especifica nada para name.

**JMP Versión agregada:** Antes de la versión 14

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
Show( ns );
ns << Delete;

```

### New OAuth2

**Sintaxis:** oauth2 = New OAuth2()

**Descripción:** Crea una nueva autorización de OAuth2.

**JMP Versión agregada:** 15

```jsl


/*
https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow
*/

/*
Note: the "code" parameter is set automatically after the redirect occurs
*/
auth_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize";
token_url = "https://login.microsoftonline.com/common/oauth2/v2.0/token";
redirect_url = "http://localhost/myapp/";
client_id = "6731de76-14a6-49ae-97bc-6eba6914391e";
client_secret = "JqQX2PNo9bpM0uEihUPzyrh";
scope = "openid offline_access https://graph.microsoft.com/user.read";
auth_fields = [=> ];
token_fields = [=> ];
                                          
oauth2 = New OAuth2();
oauth2 << Grant Type( "Authorization Code" );
oauth2 << Auth URL( auth_url );
oauth2 << Token URL( token_url );
oauth2 << Redirect URL( redirect_url );
                                          
auth_fields["scope"] = scope;
auth_fields["client_id"] = client_id;
token_fields["client_secret"] = client_secret;
                                          
oauth2 << Auth Fields( auth_fields );
oauth2 << Token Fields( token_fields );
                                          
auth_header = oauth2 << Get Auth Header();
request = New HTTP Request(
	URL( "https://graph.microsoft.com/v1.0/me" ),
	Headers( {auth_header} ),
	Method( "GET" )
);
data = request << Send;

```

### New OAuth2 Token

**Sintaxis:** token = New OAuth2 Token( Account("jmpgoogldev@gmail.com"), Client ID("test"), Client Secret("test 2"), Refresh Token(""), Token URL(""))

**Descripción:** Crea un token OAuth2 para acceder de forma segura a los datos en muchas API web distintas.

**JMP Versión agregada:** 15

```jsl

token = New OAuth2 Token(
	Account( "jmpgoogldev@gmail.com" ),
	Client ID( "test" ),
	Client Secret( "test 2" ),
	Refresh Token( "" ),
	Token URL( "" )
);

```

### New Object

**Sintaxis:** New Object( "class name" | class name | class reference( constructor arguments* ) )

**Descripción:** Crea un objeto de instancia de una clase.

**JMP Versión agregada:** 14

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
cl << Delete;
Delete Classes( "complex" );

```

### New PI Client

**Sintaxis:** New Pi Client(URL(base URL), &lt;Authentication Method("None"|"Basic"|"NTLM"|"Kerberos")&gt;, &lt;Username(userid)&gt;,&lt;Password(password)&gt;)

**Descripción:** Crea una nueva instancia de PI Client que se puede utilizar para importar datos de un servidor PI.

**JMP Versión agregada:** 17

**Ejemplo 1**

```jsl

/* Import raw data */
client = New PI Client(
	URL( "https://myserver.com/piwebapi" ),
	Authentication Method( "basic" ),
	Username( "myuserid" ),
	Password( "mypassword" )
);
importer = client << Importer(
	AF Path( "\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I A" ), /* Asset Framework path */
	Series( "raw" ),
	Start Time( "*-1d" ), /* PI time string */
	End Time( "*" ),      /* PI time string */
	Boundary Type( "inside" ), /* choices are "inside", "outside", "interpolated" */
	UTC( 0 ), /* whether specified start/end times are based on UTC - default is zero */
	Max Count( 5000 ), /* Max. number of values to fetch - default is 5000 */
	Filter( "" ), /* Optional filter */
	Retrieve Attribute Status( 0 ) /* Whether to retrieve value attributes (i.e. "good", "questionable", "substituted", "annotated") - default is 0 */
);
importer << Run;

```

**Ejemplo 2**

```jsl

/* Import plot data using Kerberos for authentication */
client = New PI Client(
	URL( "https://myserver.com/piwebapi" ),
	Authentication Method( "kerberos" )
);
importer = client << Importer(
	AF Path( "\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I A" ),
	Series( "plot" ),
	Start Time( "*-1d" ),
	End Time( "*" ),
	UTC( 0 ),
	Intervals( 24 )
); /* No of time intervals to fetch*/
importer << Run;

```

**Ejemplo 3**

```jsl

/* Import interpolated data from a server that does not require authentication */
client = New PI Client(
	URL( "https://myserver.com/piwebapi" ),
	Authentication Method( "none" )
);
importer = client << Importer(
	AF Path( "\\myserver\PIData\Atlanta Data Center\Server Rack1\ION 6200 Power Meter1|I A" ),
	Series( "interpolated" ),
	Start Time( "*-1d" ),
	End Time( "*" ),
	UTC( 0 ),
	Sync Time Boundary Type( "inside" ),   /*  choices are "inside", "outside" */
	Interval( "1h" ),            /* interval period */
	Sync Time( "01JUL2021" ),    /* optional sync point - ie. intervals begin from this point */
	Filter( "" )
);
importer << Run;

```

### New Project

**Sintaxis:** project = new Project( &lt;project messages&gt; )

**Descripción:** Crea una nueva ventana de proyecto vacía. Pueden incluirse uno o más mensajes de proyecto como argumentos para crear un proyecto en un paso.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

project = New Project();

```

**Ejemplo 2**

```jsl

project = New Project(
	Run Script(
		dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
		dt << Run Script( "Bivariate" );
	)
);

```

**Ejemplo 3**

```jsl

project = New Project(
	Run Script(
		Open( "$SAMPLE_DATA/Big Class.jmp" );
		New Window( "Big Class - Bivariate of weight by height",
			Bivariate( Y( :weight ), X( :height ) )
		);
	)
);

```

**Ejemplo 4**

```jsl

project = New Project(
	Set Bookmarks(
		{File( "$SAMPLE_DATA/Animals.jmp" ), File( "$SAMPLE_DATA/Big Class.jmp" )}
	),
	Run Script(
		Open( "$SAMPLE_DATA/Big Class.jmp" );
		New Window( "Big Class - Bivariate of weight by height",
			Bivariate( Y( :weight ), X( :height ) )
		);
	)
);

```

**Ejemplo 5**

```jsl

project = New Project(
	Run Script( Open( "$SAMPLE_SCRIPTS/demoCorr.jsl", Set Window ID( "demoCorr" ), Script ) ),
	Set Layout(
		H Splitter Box(
			<<Set Sizes( {0.15, 0.85} ),
			Tab Page Box( Title( "Window List" ), Window ID( "Windows" ) ),
			V Splitter Box(
				<<Set Sizes( {0.7, 0.3} ),
				Tab Page Box( Title( "demoCorr" ), Window ID( "demoCorr" ) ),
				Tab Page Box( Title( "Log" ), Window ID( "Log" ) )
			)
		)
	)
);

```

### New SQL Query

**Sintaxis:** obj = New SQL Query( Connection( "ODBC:my_connection_string" ), Select( Column( "mycolumn", "t1" ) ), From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ) ); obj = New SQL Query( Connection( "ODBC:my_connection_string;" ), CustomSQL( "SELECT c1, c2, c3 FROM my_table;" ) )

**Descripción:** Crea un objeto de consulta SQL para la conexión, las columnas y la tabla especificadas, o para la consulta SQL personalizada especificada. Utilice el constructor de consultas para generar  scripts que creen consultas.

**JMP Versión agregada:** Antes de la versión 14

```jsl


obj = New SQL Query(
	Connection( "ODBC:DSN=mydsn" ),
	Select(),
	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) )
);

```

### New Table

**Sintaxis:** dt = New Table( name, &lt;visibility("private"|"invisible"|"visible")&gt;, &lt;Enable Filter Views(bool)&gt;, &lt;actions&gt; )

**Descripción:** Crea una nueva tabla de datos. "Invisible" oculta la tabla de datos de la vista pero la muestra en la Ventana principal de JMP. "Private" oculta la tabla por completo. "Visible" es la opción predeterminada y crea una tabla normal que está visible y aparece en la Ventana principal de JMP. Los argumentos actions opcionales son cualquier mensaje que sean compatibles con las tablas de datos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "LOUISE", "JANE"} ) ),
	New Column( "age", Nominal, Set Values( [12, 13, 13] ) ),
	New Column( "weight", Continuous, Set Values( [95, 123, 74] ) )
);

```

### New Web Report

**Sintaxis:** obj = New Web Report(...)

**Descripción:** Crea un informe HTML interactivo.

**JMP Versión agregada:** 14

```jsl


Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
webreport = New Web Report(
	Add Report(
		Distribution(
			Continuous Distribution( Column( :weight ) ),
			Nominal Distribution( Column( :age ) )
		),
		Title( "Distribution Web Report" ),
		Description( "This report was created with the sample found in the Scripting Index" )
	),
	Add Report(
		Bivariate(
			Y( :weight ),
			X( :height ),
			Automatic Recalc( 1 ),
			Fit Line( {Line Color( {213, 72, 87} )} ),
			Local Data Filter( Add Filter( columns( :sex ) ) )
		)
	)
);
webreport << Index( Title( "Big Class Report" ) );
file = webreport << Save( "$TEMP" );
If( !Is Empty( file ),
	Web( file )
);

```

### New Window

**Sintaxis:** w = New Window( title, &lt; &lt;&lt;Type("Report" | "Dialog" | "Modal Dialog" | "Journal" | "Launcher" | "Script")&gt;, &lt; &lt;&lt; Return Result&gt;, &lt; &lt;&lt; On Open(expr | function | method)&gt;, &lt; &lt;&lt; On Close(expr | function | method)&gt;, &lt; &lt;&lt;On Validate(expr | function | method)&gt;, &lt; &lt;&lt;Show Menu(0 | 1)&gt;, &lt; &lt;&lt;Show Toolbars(0 | 1)&gt;, &lt; &lt;&lt;Suppress AutoHide(0 | 1)&gt;, &lt; &lt;&lt;Window View("Visible" | "Invisible")&gt;, &lt; &lt;&lt;Language("C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS" | "SQL" | "Text" | "XML")&gt;, &lt; &lt;&lt;Size(x, y)&gt;, displayBox | script)

**Descripción:** Crea una ventana que contiene el cuadro de visualización o script especificados. De forma predeterminada, se crea una ventana de resultados, a menos que se especifique la opción Type. Una ventana de Type("Modal Dialog") detiene la ejecución hasta que se responda al cuadro de diálogo. On Open, On Validate y Return Result solo están disponibles para las ventanas modales. On Open() evalúa su expresión, función o método de clase cuando se crea la ventana. Si On Close() devuelve falso, se impide que la ventana se cierre. On Validate() ejecuta su expresión, función o método de clase cuando se hace clic en el botón Aceptar. Si la expresión devuelve verdadero, la ventana se cierra. De lo contrario, la ventana permanece abierta. Return Result cambia el valor devuelto por la ventana cuando se cierra para que coincida con el de la función Dialog() en desuso. Para los tipos de ventanas que admiten barras de herramientas, utilice Show Toolbars para especificar los cambios con respecto al comportamiento predeterminado. Las opciones Show Menu y Suppress AutoHide son solo para Windows. La opción Window View("Invisible") se puede utilizar para cualquier ventana que no sea Modal Dialog. Una ventana de Type("Script") crea un documento de JSL a menos que se especifique la opción <<Language.

**JMP Versión agregada:** Antes de la versión 14

**[Win] Barras de herramientas y menús**

```jsl

// Compare settings for toolbars and menus
// Suppress AutoHide is Windows only
g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
New Window( "Default - menu and toolbars", g );
New Window( "Menu, no toolbars, suppress autohide",
	Suppress AutoHide( 1 ),
	Show Toolbars( 0 ),
	g
);
New Window( "Toolbars, no menu", Show Menu( 0 ), g );
New Window( "No menu, no toolbars", Show Menu( 0 ), Show Toolbars( 0 ), g );

```

**Cuadro de diálogo**

```jsl


ex = New Window( "Dialog example",
	<<Type( "Dialog" ),
	V List Box(
		Panel Box( "Sample data dialog",
			Button Box( "Open Sample Data", Open( "$SAMPLE_DATA/Big Class.jmp" ) )
		),
		H List Box( Button Box( "Close", Try( ex << CloseWindow ) ) )
	)
);

```

**Diálogo modal**

```jsl


ex = New Window( "Modal Dialog example",
	<<Type( "Modal Dialog" ),
	<<Return Result,
	<<On Validate(
		num = myEditBox << Get;
		If( num >= 1 & num <= 100, // in range
			myEditBox << Background Color( "Background" ); // this field does not need attention
			1; //the number is good, validate
		, // else out of range
			myEditBox << Background Color( "Light Yellow" ); // this field needs attention
			0; // the number is bad, do not validate
		) // the result of this if(...) is the OnValidate( ) answer, 0 or 1
		;
	),
	V List Box(
		Text Box( "Enter a value between [1,100]:" ),
		H List Box( myEditBox = Number Edit Box( 42 ) ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)
);

//  the Modal window must be closed before the following code runs

If(
	ex["button"] == 1 // not canceled
, // then show the value
	Write( ex["myEditBox"] ); // note: myEditBox is the name of the variable holding the text edit box
, // else report no selection
	Write( "CANCEL" ); // cancel button or red X was pressed
);

```

**Informe**

```jsl

g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
New Window( "My Window's Title", g );

```

**Invisible**

```jsl


g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
w = New Window( "My Window's Title", <<WindowView( "Invisible" ), g );
p = w << Get Picture();
w << Close Window;
psize = p << Size;
New Window( "picture", Outline Box( "picture size: " || Char( psize ), p ) );

```

**Script**

```jsl

script = JSL Quote(Names Default To Here(1);
dt=Open("$SAMPLE_DATA/Big Class.jmp");
dt << Run Script("Bivariate");
);
ex = New Window( "Script example", <<Type( "Script" ), script );

```

**Script Python**

```jsl

pyscript = "\[import numpy as np
a = np.arange(15).reshape(3, 5)]\";
ex = New Window( "Script example", <<Type( "Script" ), <<Language( "Python" ), pyscript );

```

### Normal Biv Distribution

**Sintaxis:** y = Normal Biv Distribution( x, y, r, &lt;mu1=0&gt;, &lt;s1=1&gt;, &lt;mu2=0&gt;, &lt;s2=1&gt; )

**Descripción:** Calcula la probabilidad de que una observación (X, Y) sea menor o igual que (x, y) con un coeficiente de correlación r donde X está distribuida normalmente y marginalmente con una media mu1 y desviación estándar s1 y Y está distribuida normalmente y marginalmente con una media mu2 y desviación estándar s2. Si no se indican mu1, s1, mu2 y s2, la función asume la distribución bivariante normal estándar con mu1=0, s1=1, mu2=0, y s2=1.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Normal Biv Distribution( -2, -2, .5, 1, 1.5, -1, 2 );

```

### Normal Contour

**Sintaxis:** Normal Contour( prob, meanMatrix, stdMatrix, corrMatrix, &lt;colorsMatrix&gt;, &lt;fill=0&gt; )

**Descripción:** Dibuja los contornos de probabilidad normal de k poblaciones y 2 variables. El argumento prob puede ser una probabilidad escalar o una matriz de probabilidades. Los argumentos meanMatrix y stdsMatrix son matrices k por 2, y el argumento corrMatrix es un vector k por 1. El argumento colorsMatrix específica los colores de los k contornos, especificados como colores de JSL (ya sean valores enteros de colores de JSL o valores devueltos por funciones de color de JSL como RGB Color() o HLS Color()). El argumento fill especifica la transparencia del color de relleno del contorno.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "blue" );
		Normal Contour( 0.95, [40 40], [15 5], [0.5], Empty(), 0.1 );,
		Normal Contour(
			0.95,
			[40 40, 60 50],
			[15 5, 10 10],
			[-0.9, -0.5],
			Matrix( {RGB Color( {0.1, 0.9, 0.1} ), 3} ),
			0.2
		)
	)
);

```

### Normal Density

**Sintaxis:** y = Normal Density( q, &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descripción:** Devuelve la densidad en q de una distribución normal con media mu y desviación estándar sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example: Normal Density",
	y = Graph Box(
		Y Scale( 0, 0.45 ),
		X Scale( -4, 4 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Normal Density( q ), q );
	)
);

```

### Normal Distribution

**Sintaxis:** p = Normal Distribution( q, &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución normal sea menor que q.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example: Normal Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -4, 4 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Normal Distribution( q ), q );
	)
);

```

### Normal Integrate

**Sintaxis:** {mean, var} = Normal Integrate( muVector, sigmaMatrix, expr, x, NStrata, NSim )

**Descripción:** Devuelve el resultado de la integración radial-esférica para funciones suaves de variables normales multivariantes. La idea básica es la misma que la de un método descrito por Genz y Monahan(1996). Pero se usa la cuadratura de tipo Radau-Gauss-Laguerre en la dirección radial.

**JMP Versión agregada:** Antes de la versión 14

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

### Normal Log CDistribution

**Sintaxis:** y = Normal Log CDistribution( x, &lt;mean=0&gt;, &lt;std dev=1&gt; )

**Descripción:** Devuelve el logaritmo de 1- distribución normal en x con media mu y desviación estándar sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example: Normal Log CDistribution",
	nlcdiy = Graph Box(
		Y Scale( -10, 0.05 ),
		X Scale( -4, 4 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Normal Log CDistribution( q ), q );
	)
);

```

### Normal Log Density

**Sintaxis:** y = Normal Log Density( x, &lt;mu=0&gt;, &lt;sigma=1&gt;)

**Descripción:** Devuelve el logaritmo de la densidad de probabilidad normal en x con la media mu y la desviación estándar sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example: Normal Log Density",
	nldey = Graph Box(
		Y Scale( -9, 0.05 ),
		X Scale( -4, 4 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Normal Log Density( q ), q );
	)
);

```

### Normal Log Distribution

**Sintaxis:** y = Normal Log Distribution( x, &lt;mean=0&gt;, &lt;std dev=1&gt; )

**Descripción:** Devuelve el logaritmo de la distribución normal en x con media mu y desviación estándar sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example: Normal Log Distribution",
	nldiy = Graph Box(
		Y Scale( -10, 0.05 ),
		X Scale( -4, 4 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Normal Log Distribution( q ), q );
	)
);

```

### Normal Mixture Density

**Sintaxis:** y = Normal Mixture Density(q, meanvec, sdvec, probvec)

**Descripción:** Devuelve la densidad en q de una mezcla de distribuciones normales con medias de grupo meanvec, desviaciones estándar de grupo sdvec y probabilidades de grupo probvec. En este caso meanvec, sdvec y probvec son todos vectores del mismo tamaño.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu1 = -2;
mu2 = 2;
sigma1 = 1;
sigma2 = 4;
p1 = .5;
t1 = mu1 |/ mu2;
t2 = sigma1 |/ sigma2;
t3 = p1 |/ (1 - p1);
New Window( "Univariate Normal Mixture Density",
	clty = Graph Box(
		Y Scale( 0, 0.4 ),
		X Scale( -8, 8 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		t1 = mu1 |/ mu2;
		t2 = sigma1 |/ sigma2;
		t3 = p1 |/ (1 - p1);
		Y Function(
			Normal Mixture Density( y, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),
			y
		);
		Text( {-7, .37}, "Mean1=", Round( mu1, 2 ) );
		Text( {-2, .37}, "Mean2=", Round( mu2, 2 ) );
		Text( {-7, .34}, "SD1=", Round( sigma1, 2 ) );
		Text( {-2, .34}, "SD2=", Round( sigma2, 2 ) );
		Text( {-7, .31}, "P1=", Round( p1, 2 ) );
		Text( {-2, .31}, "P2=", Round( 1 - p1, 2 ) );
	),
	H List Box( Slider Box( -3, 3, mu1, clty << reshow ), Text Box( " Mean 1" ) ),
	H List Box( Slider Box( -3, 3, mu2, clty << reshow ), Text Box( " Mean 2" ) ),
	H List Box( Slider Box( .1, 9, sigma1, clty << reshow ), Text Box( " Std Dev 1" ) ),
	H List Box( Slider Box( .1, 9, sigma2, clty << reshow ), Text Box( " Std Dev 2" ) ),
	H List Box( Slider Box( 0, 1, p1, clty << reshow ), Text Box( " P 1" ) ), 

);

```

### Normal Mixture Distribution

**Sintaxis:** y = Normal Mixture Distribution(q, meanvec, sdvec, probvec)

**Descripción:** Devuelve la probabilidad de que una variable distribuida según una mezcla de normales con medias de grupo meanvec, desviaciones estándar de grupo sdvec y probabilidades de grupo probvec sea menor que q. Aquí meanvec, sdvec y  probvec son todos vectores del mismo tamaño.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu1 = -2;
mu2 = 2;
sigma1 = 1;
sigma2 = 4;
p1 = .5;
New Window( "Univariate Normal Mixture Distribution",
	clty = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -8, 8 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		Y Function(
			Normal Mixture Distribution( y, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),
			y
		);
		Text( {-7, .95}, "Mean1=", Round( mu1, 2 ) );
		Text( {-2, .95}, "Mean2=", Round( mu2, 2 ) );
		Text( {-7, .85}, "SD1=", Round( sigma1, 2 ) );
		Text( {-2, .85}, "SD2=", Round( sigma2, 2 ) );
		Text( {-7, .75}, "P1=", Round( p1, 2 ) );
		Text( {-2, .75}, "P2=", Round( 1 - p1, 2 ) );
	),
	H List Box( Slider Box( -3, 3, mu1, clty << reshow ), Text Box( " Mean 1" ) ),
	H List Box( Slider Box( -3, 3, mu2, clty << reshow ), Text Box( " Mean 2" ) ),
	H List Box( Slider Box( .1, 9, sigma1, clty << reshow ), Text Box( " Std Dev 1" ) ),
	H List Box( Slider Box( .1, 9, sigma2, clty << reshow ), Text Box( " Std Dev 2" ) ),
	H List Box( Slider Box( 0, 1, p1, clty << reshow ), Text Box( " P 1" ) ), 

);

```

### Normal Mixture Quantile

**Sintaxis:** q = Normal Mixture Quantile(p, meanvec, sdvec, probvec)

**Descripción:** Devuelve el cuantil de una mezcla de distribuciones normales, los valores para los cuales la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** Antes de la versión 14

```jsl

extqdf = 1;
extqqq = 0.5;
mu1 = -1;
mu2 = 1;
sigma1 = 1;
sigma2 = 4;
p1 = .3;
New Window( "Example: Normal Mixture Quantile",
	extqgr = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Pen Size( 2 );
		Y Function(
			Normal Mixture Distribution( q, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),
			q
		);
		Pen Color( "blue" );
		V Line(
			Normal Mixture Quantile( extqqq, mu1 |/ mu2, sigma1 |/ sigma2, p1 |/ (1 - p1) ),
			0,
			1
		);
		Text( {-4.5, 0.9}, " quantile=", Round( extqqq, 2 ) );
	),
	H List Box( Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ), Text Box( " quantile" ) ),
	H List Box( Slider Box( -3, 3, mu1, extqgr << reshow ), Text Box( " Mean 1" ) ),
	H List Box( Slider Box( -3, 3, mu2, extqgr << reshow ), Text Box( " Mean 2" ) ),
	H List Box( Slider Box( .1, 9, sigma1, extqgr << reshow ), Text Box( " Std Dev 1" ) ),
	H List Box( Slider Box( .1, 9, sigma2, extqgr << reshow ), Text Box( " Std Dev 2" ) ),
	H List Box( Slider Box( 0, 1, p1, extqgr << reshow ), Text Box( " P 1" ) ), 

);

```

### Normal Quantile

**Sintaxis:** q = Normal Quantile( p, &lt;mu=0&gt;, &lt;sigma=1&gt; ); q = Probit( p )

**Descripción:** Devuelve el cuantil de una distribución normal, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Normal Quantile( 0.9 );

```

### Normal Tolerance Factor

**Sintaxis:** q = Normal Tolerance Factor( 1-alpha, p, n, &lt;One Sided&gt; )

**Descripción:** Calcula el factor de tolerancia para construir un intervalo de confianza de 1 alfa para contener la proporción p de las medias con tamaño muestral n de la distribución normal. Existe una opción para solicitar el factor para un intervalo de tolerancia unilateral.

**JMP Versión agregada:** 19

```jsl

n = 15;
New Window( "Example: Tolerance Factor()",
	tdig = Graph Box(
		Y Scale( 0, 5 ),
		X Scale( 0.05, 0.95 ),
		Yname( "Tolerance Factor" ),
		Xname( "p" ),
		Pen Color( "red" );
		Y Function( Normal Tolerance Factor( 0.95, p, n ), p );
		Text( {0.1, 4}, "n=", Round( n ) );
	),
	H List Box( Text Box( "n" ), Slider Box( 5, 25, n, tdig << reshow ) )
);

```

### Not

**Sintaxis:** y = !x; y = Not( x )

**Descripción:** Devuelve el NOT lógico de x: 1 si x es cero, faltante si x falta y 0 en los demás casos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

!(1 < 2);

```

### Not Equal

**Sintaxis:** z = x != y != ...; z = Not Equal( x, y, ... )

**Descripción:** Devuelve 1 si cada argumento es distinto del siguiente y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

1 != 2 != 1;

```

### Notebook

**Sintaxis:** nb = Notebook( name|number )

**Descripción:** Devuelve una referencia al cuaderno especificado.

**JMP Versión agregada:** 19

### Nth Day Of Week in the Month

**Sintaxis:** n = Nth Day Of Week in the Month( datetime )

**Descripción:** Devuelve un entero que representa el número de instancias del día de la semana del argumento fecha y hora que han tenido lugar en el mes. Por ejemplo, 28 de noviembre de 2019 es el cuarto jueves el mes, por lo que la función devuelve 4.

**JMP Versión agregada:** 16

```jsl

Nth Day Of Week in the Month( Date MDY( 11, 28, 2019 ) );

```

### Num

**Sintaxis:** y = Num( s, &lt; &lt;&lt;Use Locale( use=1 ) &gt;, &lt; &lt;&lt;Restrict &gt; )

**Descripción:** Convierte s en un número utilizando cualquier formato integrado, incluidos los formatos de fecha y moneda. Devuelve faltante si falla la conversión. El ajuste <<Restrict opcional solo permite la conversión con formatos enteros, decimales y científicos.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Show( Num( "3.1e6" ), Num( "1989-10-04" ), Num( "5%" ), Num( "£23" ) );

```

**Ejemplo 2**

```jsl

Show(
	Num( "3.1e6", <<Restrict ),
	Num( "1989-10-04", <<Restrict ),
	Num( "5%", <<Restrict ),
	Num( "£23", <<Restrict )
);

```

### Num Deriv

**Sintaxis:** y = Num Deriv( f( x, ... ), &lt;parnum&gt;)

**Descripción:** Devuelve la derivada numérica de la función f( x,... ) con respecto a uno de sus argumentos. Puede especificar ese argumento como el segundo argumento de la función Num Deriv. Si no se especifica un segundo argumento, se toma la derivada con respecto al primer argumento de la función. La derivada se evalúa mediante variables numéricas especificadas en la expresión de función f( x,... ).

**JMP Versión agregada:** Antes de la versión 14

```jsl

f = Function( {x, y}, x ^ 2 + y );
Num Deriv( f( 2, 1 ) );
Num Deriv( f( 2, 1 ), 2 );

```

### Num Deriv2

**Sintaxis:** y = Num Deriv2( f( x, ... ) )

**Descripción:** Devuelve la segunda derivada numérica de la función f( x,... ) con respecto a x. La derivada se evalúa mediante variables numéricas especificadas en la expresión de función f( x,... ).

**JMP Versión agregada:** Antes de la versión 14

```jsl

f = Function( {x}, x ^ 3 );
Num Deriv2( f( 2 ) );

```

### Number

**Sintaxis:** y = Number( x1, ... )

**Descripción:** Devuelve el número de argumentos o valores no faltantes dentro de una matriz única o un argumento de lista.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {Number( 12, ., 11, 0, -42 ), Number( [33 . -42 . 0 . -30] )} );

```

### Number Col Box

**Sintaxis:** y = Number Col Box( title, numbers )

**Descripción:** Devuelve un cuadro de visualización para mostrar los números especificados en el argumento numbers, que puede ser una lista o una matriz.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Number Col Edit Box

**Sintaxis:** y = Number Col Edit Box( title, numbers )

**Descripción:** Devuelve un cuadro de visualización para mostrar los números especificados en el argumento numbers, que puede ser una lista o una matriz.

**JMP Versión agregada:** Antes de la versión 14

```jsl

x = y = z = 0;
New Window( "Example",
	Modal,
	<<Return Result,
	Outline Box( "Table", Table Box( neb = Number Col Edit Box( "values", {x, y, z} ) ) )
);

```

### Number Edit Box

**Sintaxis:** y = Number Edit Box( initValue, &lt;width&gt; )

**Descripción:** Devuelve un cuadro de edición que solo acepta entradas numéricas. Especifique el argumento width opcional para establecer el ancho del cuadro en caracteres.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example", neb = Number Edit Box( 5 ) );
x = neb << get;

```

### Number of Periods

**Sintaxis:** x = Number of Periods( rate, pmt, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Descripción:** Devuelve el número de períodos de una inversión basándose en pagos periódicos constantes y una tasa de interés constante. El argumento type es 0 para los pagos al final de cada período y 1 para los pagos al inicio de cada período. Equivale a la función NPER de Microsoft Excel.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Number of Periods( .05 / 12, -2000, 100000 );

```

### Open

**Sintaxis:** Open( filePath, &lt;data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options &gt; )

**Descripción:** Devuelve una referencia a una tabla de datos u otro archivo JMP o un objeto creado a partir de un archivo. Si no se especifica ninguna ruta, aparece el cuadro de diálogo Abrir. Si se especifica una ruta de carpetas, se abre el explorador de archivos del sistema y no se devuelve ningún objeto. Consulte la referencia de sintaxis para obtener una descripción completa de las opciones disponibles.

**JMP Versión agregada:** Antes de la versión 14

**Add-In**

```jsl

/* Installing Add-In:
Open( Add-In to open,
    <Check For Updates( "never" | "startup" | "always")>, // "always" will check for updates at startup and while jmp is running
    <Update Prompt(0|1)>) // whether or not the add-in will silently update or prompt first */
Open( "$downloads\test.jmpaddin", Check For Updates( "always" ), Update Prompt( 1 ) );

```

**Excel**

```jsl

/* Excel files imported into a data table:
   Open( excelFilePath,
     <Worksheets( "sheet name" | {"sheet name", "sheet name", ...} | "n" )>,
     <Use for all sheets(0|1)>,
     <Concatenate Worksheets(0|1)>,
     <Create Concatenation Column(0|1)>,
     <Worksheet Settings( 0|1,
       Has Column Headers(0|1),
       Number of Rows in Headers(n),
       Headers Start on Row(n),
       Data Starts on Row(n),
       Data Starts on Column(n),
       Data Ends on Row(n),
       Data Ends on Column(n),
       Replicated Spanned Rows(0|1),
       Suppress Hidden Rows(0|1),
       Suppress Hidden Columns(0|1),
       Treat as Hierarchy(0|1)
     )>,
     <Invisible | Private>
   )
*/

/* Using the Excel Wizard dialog:
   Open("$SAMPLE_IMPORT_DATA/Bigclass.xlsx", "Excel Wizard");  
*/

dt = Open(
	"$SAMPLE_IMPORT_DATA/Team Results.xlsx",
	Worksheets( "Ungrouped Team Results" ),
	Worksheet Settings( Headers Start on Row( 3 ), Data Starts on Row( 4 ) )
);

```

**Folder**

```jsl

/* Open of folder launches file browser */
Open( "$SAMPLE_DATA" );

```

**Imagen**

```jsl

/* Picture file imported as a picture object */
pic = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
New Window( "Picture", Outline Box( "Picture", Picture Box( pic ) ) );

```

**Otro**

```jsl

/* Other options:
   SAS File imported as a data table:
   Open( sasFilePath,
     <Invisible | Private>,
     <Use Labels for Var Names(0|1)>,
     <Password( "password" )>
   )
   
   SAS Transport File imported as a data table, members are separate tables within the larger file:
   Open( sasTransportFilePath,
     <Use Labels for Var Names(0|1)>,
     <Members({"Table1", "Table2"})>
   )
   
   HTML file imported as a data table:
   Open( htmlFilePath,
     <Invisible | Private>,
     <HTML Table(n, <ColumnNames(n)>, DataStarts(n)>)>
   )
   
   Get column names as a list for a JMP Data Table without opening the table:
   Open( jmpDataTableFilePath, 
     "Column Names Only"
   )
   
   esriShapeFile opened for use as a map shape data table:
   Open( esriShapeFilePath,
     <Invisible | Private>,
     Columns( Shape=numeric(n),
     Part=numeric(n),
     X=numeric(n),
     Y=numeric(n) ),
              Polygon Import Options(Simplification Factor(f), Geodesic(g))
   )
*/
//SAS Example:
dt1 = Open( "$SAMPLE_IMPORT_DATA/Bigclass.sas7bdat", Use Labels for Var Names( 1 ) );

// HTML Example:
dt2 = Open(
	"https://en.wikipedia.org/wiki/Black_Mountains_(North_Carolina)",
	HTML Table( 3, Column Names( 1 ), Data Starts( 2 ) )
);

// Column Names Only Example: 
colNames = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp", "Column Names Only" );

// SHP Shapefile Example with polygon simplification: 
Open(
	"$SAMPLE_IMPORT_DATA/parishes.shp",
	Polygon Import Options( Simplification Factor( 200 ), Geodesic( 1 ) )
);

```

**PDF**

```jsl

/* PDF file imported as one or multiple data tables
open(pdfFilePath,
    PDF Tables(Table(<Name(name)>, Add Rows(Page(n | {page list}), <Header Rows(n)>, Rect(top, left, right, bottom), <RowBorders(n, ...)>, <Column Borders(n, ....)>), ...)) |
    PDF All Tables(< Combine(All | Matching Headers | None)>, <Minimum Rows(n)>, <Minimum Columns(n)>) |
    PDF Text(<Pages(n, ...)>, <sort>) |
    PDF Wizard
);*/
dt = Open( "$SAMPLE_DATA\big class.jmp" );
w = New Window( "test", Data Table Box( dt ) );
w << save picture( "$DOCUMENTS\test.pdf", pdf );
pdftable = Open( "$DOCUMENTS\test.pdf", PDF All Tables( Combine( all ) ) ); // just some of the rows
pdftable2 = Open(
	"$DOCUMENTS\test.pdf",
	PDF Tables( Table( Table Name( "test" ), Add Rows( Page( 1 ), Rect( 0, 0, 5, 3 ) ) ) )
);

```

**Tabla de datos**

```jsl

/* Data tables, other JMP files, external files:
   Open( filePath,
     <Invisible | Private>,
     <Select Columns( "col", ... )>,
     <Ignore Columns( "col", ... )>,
     <Add to Recent Files(bool)>,
     <Quarantine Action("Allow Scripts"|"Block Scripts"|"Do Not Open"|"Show Dialog")>
     <Force Refresh>,
     <Enable Filter Views(bool)>,
     <"file type">
   )
*/
//Basic data table open
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
//Data table open with some options
dt2 = Open( "$SAMPLE_DATA/Fitness.jmp", Select Columns( "Name", "Sex", "Age", "Weight" ) );

```

**Texto**

```jsl

/* Text files imported into a data table:
   Open( textFilePath,
     <Invisible | Private>,
     CharSet("option") // "Best Guess", "utf-8", "utf-16", "us-ascii", "windows-1252", "x-max-roman", "x-mac-japanese", "shift-jis", "euc-jp", "utf-16be", "gb2312"
     <Number of Columns(n)>,
     <Columns(colName=colType(colWidth),... )>,// colType is Character|Numeric and colWidth is an integer specifying the width of the column
     <End Of Field (Tab|Space|Comma|Semicolon|Other|None)>,
     <EOF Other ("char")>,
     <End Of Line (CRLF|CR|LF|Semicolon|Other)>,
     <EOL Other ("char")>,
     <Strip Quotes|Strip Enclosing Quotes (0|1)>,
     <Labels|Table Contains Column Headers (0|1)>,
     <Year Rule|Two digit year rule ("decade start")>, // For example, if the earliest date is 1979, use "1970". If the earliest date is 2001, use "20xx".
     Treat Empty Columns as Numeric(0|1)
     Scan Whole File(0|1) // 1 means scan the whole file and 0 means scan for 5 seconds.
     <Column Names Start|Column Names are on line (n)>,
     <Data Starts|Data starts on line (n)>,
     <Lines to Read>, // a number
     <Use Apostrophe as Quotation Mark>,
     <CompressNumericColumns(0|1)>,
     <CompressCharacterColumns(0|1)>,
     <CompressAllowListCheck(0|1)>
   )
*/
dt = Open( "$SAMPLE_IMPORT_DATA/EOF_comma.txt", Table Contains Column Headers( 0 ) );

```

### Open Database

**Sintaxis:** dt = Open Database( dataSourceName|"Connect Dialog", "SELECT ..."|"SQLFILE=..."|tableName, &lt;invisible | private&gt;, &lt;outputTableName&gt; )

**Descripción:** Abre una base de datos mediante ODBC, ejecuta el SQL especificado y pone los datos en una tabla de datos con el nombre de tabla de salida indicado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open Database(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;",
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"hw"
);

```

### Open Datafeed

**Sintaxis:** y = Open Datafeed( ... )

**Descripción:** Crea un objeto y una ventana a los cuales se pueden enviar mensajes con el fin de gestionar feeds de datos en tiempo real.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exfeed = Open Datafeed(/*Connect( Port( "com3" ), Baud( 4800 ), DataBits( 8 ) ),*/
	Set Script(
		ex = exfeed << getLine;
		Show( ex );
	)
);
For( exi = 0, exi < 5, exi++, /* this is just a way to test a feed when the real data source is not available...*/
	exfeed << Queue Line( Char( exi ) );
	Wait( .5 );
);

```

### Open Help

**Sintaxis:** w = Open Help( "Help" | "Scripting Index", ... )

**Descripción:** Abre la ayuda en línea de JMP o el Índice de scripts.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open Help( "Help" );

```

**Ejemplo 2**

```jsl

Open Help(
	"Scripting Index",
	Search( Term( "Open" ), Match( {"Contains Terms", "Match All Terms", "Ignore Case"} ) ),
	IndexContext( Category( "Functions" ) )
);

```

**Ejemplo 3**

```jsl

Open Help(
	"Scripting Index",
	Search( Term( "alpha" ), Match( {"Contains Terms", "Match All Terms", "Ignore Case"} ) ),
	IndexContext(
		Category( "All Categories" ),
		Object( "Search results" ),
		Method( "Get Alpha" )
	)
);

```

### Open Log

**Sintaxis:** Open Log( &lt;bring window to top&gt; )

**Descripción:** Abre la ventana Registro

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open Log();
Show( Is Log Open() );

```

**Ejemplo 2**

```jsl

/* Bring Log Windows to the Top */
Open Log( 1 );
Show( Is Log Open() );

```

### Or

**Sintaxis:** y = x1 | x2; y = Or( x1, x2, ... )

**Descripción:** Devuelve el OR lógico de todos los argumentos: 1 si algún argumento es distinto de cero y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

1 < 2 | 3 < 2;

```

### OrMZ

**Sintaxis:** y = OrMZ( x1, x2, ... )

**Descripción:** Devuelve el OR lógico de todos los argumentos, tratando los valores faltantes como si fuesen ceros: 1 si algún argumento es distinto de cero y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

OrMZ( 1 < 2, 3 < 2 );

```

### Ortho

**Sintaxis:** L = Ortho( A, &lt;Centered( 1 )&gt;, &lt;Scaled( 1 )&gt; )

**Descripción:** Ortogonaliza las columnas de una matriz. La opción Center hace que sumen cero. La opción Scale hace que sean de longitud unitaria.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Ortho( [1 1, 1 -1] );

```

### Ortho Poly

**Sintaxis:** L = Ortho Poly( V, order )

**Descripción:** Devuelve los polinomios ortogonales del vector V hasta el orden especificado por el argumento order. El argumento V puede ser un vector fila o columna. La opción Scale los modifica para que tengan longitud uno.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Ortho Poly( 1 :: 10, 2 );

```

### Outline Box

**Sintaxis:** y = Outline Box( title, &lt;command script pairs list&gt;, displayBox, ... )

**Descripción:** Crea un cuadro de esquema en el informe y devuelve la referencia al cuadro de visualización. Para incluir un menú en el nodo de esquema, especifique la lista command script pairs list con los comandos de menú y los scripts asociados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Outline Box( "Picker",
		{"Show label value", Show( teb << get text )},
		H List Box( Text Box( "Label:" ), teb = Text Edit Box( Char( 213 ) ) )
	)
);

```

### Oval

**Sintaxis:** Oval( left, top, right, bottom, &lt;fill=0&gt; )

**Descripción:** Dibuja un óvalo dentro del rectángulo especificado y lo rellena si el parámetro de relleno es no nulo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "Green" );
		Pen Size( 2 );
		Fill Color( "Red" );
		Oval( 15, 75, 65, 55, 1 );
		Oval( 10, 80, 70, 50 );
	)
);

```

### P Spline Coef

**Sintaxis:** coef = P Spline Coef( x, Internal Knot Grid, &lt;degree = 3&gt;, &lt;KnotEndPoints = min(x) || max(x)&gt; )

**Descripción:** Devuelve la matriz de los coeficientes P-Spline. Internal Knot Grid es el número de puntos de nodo deseado basado en percentiles de x o un vector que especifica los puntos de nodo internos. El parámetro opcional degree especifica el grado de los P-splines con un valor predeterminado de 3.

**JMP Versión agregada:** 14

```jsl

P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );
P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

### Page Break Box

**Sintaxis:** Page Break Box()

**Descripción:** Crea un cuadro de visualización que fuerza un salto de página.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	),
	Page Break Box(),
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [77 44 11], [75 25 50] );
		Pen Color( "Red" );
		Line( [70 30 10], [88 22 44] );
	)
);

```

### Panel Box

**Sintaxis:** y = Panel Box( title, displayBoxArgs )

**Descripción:** Devuelve un cuadro de visualización que contiene el cuadro de visualización indicado en el argumento y sirve para etiquetarlo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Tab Box(
		"alpha",
		Panel Box( "panel", Text Box( "text" ) ),
		"beta",
		Popup Box( {"x", ex = 1, "y", ex = 2} )
	)
);

```

### Parallel Assign

**Sintaxis:** tf = ParallelAssign( { thread_local_var = global_var, ... }, m[ a, b ] = expression using a and b )

**Descripción:** Utiliza varios subprocesos para asignar valores a la matriz. Si cualquier subproceso lanza una excepción, se imprimirá un mensaje en el registro y el valor devuelto será 0. Si todos los subprocesos se completan sin errores, el valor devuelto será 1. Las funciones que inician plataformas, crean o utilizan tablas de datos o acceden al subsistema de gráficos solo son compatibles con el proceso principal y lanzarán una excepción si se llama desde el proceso de un trabajador.

**JMP Versión agregada:** Antes de la versión 14

```jsl

m = J( 3, 2, -1 );
If( Parallel Assign( {/*no locals */ }, m[a/* 1,2,3 */, b/* 1,2 */ ] = a * a + b ) == 0,
	Throw( "thread failed" )
);
m;/* 1*1+1  1*1+2, 2*2+1  2*2+2, 3*3+1  3*3+2 */

```

### Parameter

**Sintaxis:** y = Parameter( {name=value, ...}, model expression )

**Descripción:** Define los parámetros de las fórmulas de modelos para la plataforma No lineal.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Parameter( {a = 1}, a + 1 );

```

### Parse

**Sintaxis:** y = Parse( s )

**Descripción:** Analiza la cadena de caracteres y devuelve la expresión de JSL resultante.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Parse( "x+y" );

```

### Parse Date

**Sintaxis:** dt = In Format( s, formatString, &lt; &lt;&lt;Use Locale(b=1)&gt;, &lt; &lt;&lt;Restrict &gt; ) dt = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )

**Descripción:** Analiza una cadena de caracteres de un formato dado. Si el formato es un formato de fecha y hora, el valor se expresa como si estuviera rodeado por As Date(), devolviendo la fecha en formato ddmesaaaa. El ajuste <<Restrict opcional utilizado con la "mejor" formatString solo permite la conversión con formatos enteros, decimales y científicos.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Informat( "07152000", "MMDDYYYY" );

```

**Ejemplo 2**

```jsl

Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

**Ejemplo 3**

```jsl

Informat( "86.8287° W", "Longitude DDD" );

```

**Ejemplo 4**

```jsl

Informat( "123.45%", "Percent" );

```

**Ejemplo 5**

```jsl

Show(
	Informat( "1.23e4", "Best" ),
	Informat( "1.23e4", "Best", <<Restrict ),
	Informat( "1989-10-04", "Best" ),
	Informat( "1989-10-04", "Best", <<Restrict )
);

```

### Parse JSON

**Sintaxis:** l = Parse JSON( jsonstring )

**Descripción:** Convierte el texto JSON en una lista JSL o un arreglo asociativo que representan la estructura especificada por los datos JSON.

**JMP Versión agregada:** 14

```jsl

l = Parse JSON(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);
Show( l );

```

### Parse XML

**Sintaxis:** Parse XML( string, OnElement( tagname, StartTag( expr ), EndTag( expr ) ), ... )

**Descripción:** Analiza una expresión XML con las expresiones OnElement aplicadas a etiquetas XML especificadas.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

/*See example two for more details*/
ex =
"<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";
Parse XML( ex,
	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),
	On Element(
		"col",
		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )
	)
);

```

**Ejemplo 2**

```jsl


doc =
"
<a title='one'>
    WWWa
    <b>BB<c>ZZZ</c>B1</b>
    XXXa
    <b>BBB2</b>
    YYYa
    <c>CCC</c>
</a>";
// doc, above, has tags a, b, and c. The c tags are not handled by the parser, below,
// to show why text should be collected by Text(...) and then processed by EndTag(...)
// Text(...) captures the BB ZZZ B1 while using EndTag(...) only captures the final snippet.
docname = "undefined";
doctext = "";
recordtext = "";
records = {};
NestLevel = 0; // not really used here, but shows how to use Start/End Tag to track nesting level
Parse XML( doc,
	On Element(
		"a",
		Start Tag(
			docname = XML Attr( "title" );
			NestLevel++;
		), 
        // decide here to trim the CRLF and blanks and use a single blank
		Text( doctext = doctext || Trim( XML Text() ) || " " ),
		End Tag( NestLevel-- )
	),
	On Element(
		"b",
		Start Tag( NestLevel++ ), 
        // comment out the next line and...
		Text( recordtext = recordtext || Trim( XML Text() ) || " " ),
		End Tag(
            // ...uncomment the next line and observe the "B1" vs "BB ZZZ B1 " value in records
			// recordtext = XMLText();
			Insert Into( records, recordtext );
			recordtext = "";
			NestLevel--;
		)
	)
);

Show( docname, doctext, records, NestLevel );

```

### Pat Abort

**Sintaxis:** Pat Abort()

**Descripción:** Genera un valor de patrón que provoca que la coincidencia completa falle de inmediato sin que se produzcan reintentos de coincidencia.

**JMP Versión agregada:** Antes de la versión 14

```jsl

source = "xxxxx";
n = 0;
pattern = Pat Succeed() + Pat Arb() >> xs + Expr(
	Show( xs );
	n = n + 1;
	If( n > 16,
		Pat Abort(),
		Pat Fail()
	);
);
rc = Pat Match( source, pattern, NULL, FULLSCAN );

```

### Pat Altern

**Sintaxis:** Pat Altern( pat1, pat2, ... )

**Descripción:** Genera un valor de patrón que coincide con cualquiera de los patrones indicados. Generalmente escrito así: pat1 | pat2 | ....

**JMP Versión agregada:** Antes de la versión 14

```jsl

Pat Match(
	"123456789",
	((Pat Pos( 2 ) + "1") | (Pat Pos( 1 ) + "2") | (Pat Pos( 0 ) + "3")) >> result
);
result;

```

### Pat Any

**Sintaxis:** Pat Any( string )

**Descripción:** Genera un valor de patrón que coincida con cualquier carácter de la cadena.

**JMP Versión agregada:** Antes de la versión 14

```jsl

operators = Pat Any( "*+-/" );
text = "abc+def";
Pat Match( text, operators >> op );
op;

```

### Pat Arb

**Sintaxis:** Pat Arb( pattern )

**Descripción:** Genera un valor de patrón que coincide con cero o más caracteres.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Pat Match(
	"123nonnumeric456",
	Pat Span( "0123456789" ) + Pat Arb() >> result + Pat Span( "0123456789" )
);
result;

```

### Pat Arb No

**Sintaxis:** Pat Arb No( pattern )

**Descripción:** Genera un valor de patrón que coincide con su argumento cero o más veces. Lo mismo que patRepeat(pattern,0,infinity,RELUCTANT); (*? en regex).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Pat Match(
	"xyz aaaaabbbbbb@ccc no c is matched because reluctant",
	Pat Arb No( "a" ) >> a + Pat Arb No( "b" ) >> b + "@" + Pat Arb No( "c" ) >> c
);
" a=" || a || " b=" || b || " c=" || c;

```

### Pat At

**Sintaxis:** Pat At( variable )

**Descripción:** Genera un valor de patrón que coincide con cero caracteres y asigna la posición actual del cursor a una variable. Generalmente escrito así: patpos()>>variable.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Pat Match( "123456789", Pat Len( 2 ) + Pat At( result ) );
result;

```

### Pat Break

**Sintaxis:** Pat Break( string )

**Descripción:** Genera un valor de patrón que coincide con cero o más caracteres que no pertenecen a la cadena de caracteres y se detiene antes de un carácter (requerido) de la cadena.

**JMP Versión agregada:** Antes de la versión 14

```jsl

b = "- ";
Pat Match( "one two three-", Pat Repeat( Pat Break( b ) >> word + Pat Any( b ) ) );
word;

```

### Pat Concat

**Sintaxis:** Pat Concat( pat1, pat2, ... )

**Descripción:** Genera un valor de patrón que coincide con cada uno de los sucesivos patrones indicados. Generalmente escrito así: pat1 + pat2 + ....

**JMP Versión agregada:** Antes de la versión 14

```jsl

num = Pat Break( "," );
sep = ",";
Pat Match( "1.3,7.9,8.66", num + sep + num >> result + sep + num );
result;

```

### Pat Conditional

**Sintaxis:** Pat Conditional( pattern, variable )

**Descripción:** Genera un valor de patrón que coincide con el patrón indicado y almacena el texto de coincidencia en una variable en caso de éxito. Generalmente escrito así: pattern >? variable.

**JMP Versión agregada:** Antes de la versión 14

```jsl

a = "unchanged";
b = "unchanged";
Pat Match( "123456789", (Pat Len( 2 ) >? a | Pat Len( 1 ) >? b) + "2" );
" a=" || a || " b=" || b;

```

### Pat Fail

**Sintaxis:** Pat Fail()

**Descripción:** Genera un valor de patrón que siempre falla al intentar una coincidencia hacia adelante, lo cual fuerza al buscador a reintentar alternativas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

source = "xxxxx";
n = 0;
pattern = Pat Succeed() + Pat Arb() >> xs + Expr(
	Show( xs );
	n = n + 1;
	If( n > 16,
		Pat Abort(),
		Pat Fail()
	);
);
rc = Pat Match( source, pattern, NULL, FULLSCAN );

```

### Pat Fence

**Sintaxis:** Pat Fence()

**Descripción:** Genera un valor de patrón que coincide con cero caracteres hacia adelante y falla al reintentar la coincidencia, lo cual hace que ésta falle totalmente. También se utiliza para reducir la pila de reintentos de coincidencias con el patrón.

**JMP Versión agregada:** Antes de la versión 14

```jsl

rc = Pat Match( "123456789", (Pat Len( 1 ) | Pat Len( 2 )) >> result + Pat Fence() + "3" );
"rc=" || Char( rc ) || " result=" || result;

```

### Pat Immediate

**Sintaxis:** Pat Immediate( pattern, variable )

**Descripción:** Genera un valor de patrón que coincide con el patrón indicado y almacena el texto de coincidencia e inmediatamente almacena el texto de coincidencia en una variable. Generalmente escrito así: pattern >> variable.

**JMP Versión agregada:** Antes de la versión 14

```jsl

a = "unchanged";
b = "unchanged";
Pat Match( "123456789", (Pat Len( 2 ) >> a | Pat Len( 1 ) >> b) + "2" );
" a=" || a || " b=" || b;

```

### Pat Len

**Sintaxis:** Pat Len( n )

**Descripción:** Genera un valor de patrón que coincide con n caracteres.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Pat Match( "123456789", Pat Len( 2 ) + Pat Len( 3 ) >> result );
result;

```

### Pat Look Ahead

**Sintaxis:** Pat Look Ahead( pattern, &lt;0|1&gt; )

**Descripción:** Una coincidencia de patrón de ancho cero después de la posición actual. El segundo argumento opcional tiene el valor predeterminado 0. 1 indica una coincidencia negativa o la ausencia de coincidencia.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */Pat Match(
		Test,
		"s" + Pat Look Ahead( "'" ),
		"z"
	), /* find an s that IS followed by an apostrophe and replace it with z */
	Print( test )
);

```

**Ejemplo 2**

```jsl

Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */Pat Match(
		Test,
		"s" + Pat Look Ahead( "'", 1 ),
		"z"
	), /* find an s that is NOT followed by an apostrophe and replace it with z */
	Print( test )
);

```

**Ejemplo 3**

```jsl

Test = "a bb ccc dddd";
While( /* keep repeating the match until it won't match */
	Pat Match(
		Test,
		Pat Len( 1 ) >> xxx/* find any character */
		+ Pat Look Behind( Expr( xxx ) + Expr( xxx ) ) /* back up 2 positions, which includes the character just found */
		+ Pat Look Ahead( Expr( xxx ) /* and look ahead one position */ ),
		"@" /* replacement for the middle character of a triple */
	),
	Print( test ) /* show each intermediate result */
);

```

### Pat Look Behind

**Sintaxis:** Pat Look Behind( pattern, &lt;0|1&gt; )

**Descripción:** Una coincidencia de patrón de ancho cero antes de la posición actual. El segundo argumento opcional tiene el valor predeterminado 0. 1 indica una coincidencia negativa o la ausencia de coincidencia.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */Pat Match(
		Test,
		Pat Look Behind( "'" ) + "s",
		"z"
	), /* find an s that IS preceded by an apostrophe and replace it with z */Print( test )
);

```

**Ejemplo 2**

```jsl

Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */Pat Match(
		Test,
		Pat Look Behind( "'", 1 ) + "s",
		"z"
	), /* find an s that is NOT preceded by an apostrophe and replace it with a z */
	Print( test )
);

```

**Ejemplo 3**

```jsl

Test = "a bb ccc dddd";
While( /* keep repeating the match until it won't match */
	Pat Match(
		Test,
		Pat Len( 1 ) >> xxx/* find any character */
		+ Pat Look Behind( Expr( xxx ) + Expr( xxx ) ) /* back up 2 positions, which includes the character just found */
		+ Pat Look Ahead( Expr( xxx ) /* and look ahead one position */ ),
		"@" /* replacement for the middle character of a triple */
	),
	Print( test ) /* show each intermediate result */
);

```

### Pat Match

**Sintaxis:** Pat Match( source, pattern, &lt;replacement&gt; )

**Descripción:** Busca la coincidencia de patrones en la variable pattern frente a la cadena de caracteres contenida en la variable source. El texto que haya coincidido se sustituye por el texto replacement opcional.

**JMP Versión agregada:** Antes de la versión 14

```jsl

string = "John Smith";
Pat Match(
	string,
	Pat Break( " " ) >> first + Pat Span( " " ) + Pat Rem() >> last,
	last || ", " || first
);
string;

```

### Pat Not Any

**Sintaxis:** Pat Not Any( string )

**Descripción:** Genera un valor de patrón que coincida con cualquier carácter ajeno a la cadena.

**JMP Versión agregada:** Antes de la versión 14

```jsl

delimiter = ";,-";
text = "fish,dog,cat,";
Pat Match( text, Pat Repeat( Pat Not Any( delimiter ) ) >> word + Pat Any( delimiter ) );
word;

```

### Pat Pos

**Sintaxis:** Pat Pos( n )

**Descripción:** Genera un valor de patrón que coincide con cero caracteres cuando el cursor se encuentra en la posición n. Si no se indica ningún argumento, la función Pat Pos() devuelve la posición del cursor para la asignación >> o >?: patpos()>>variable.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Pat Match(
	"ab3defghi",
	Pat Pos( 2 ) + Pat Len( 1 ) >> v/*v=3*/+ Expr( Pat Len( v ) )
	+Pat Pos( /* no argument returns current position = 6 */ ) >> result
);
result;

```

### Pat R Pos

**Sintaxis:** Pat R Pos( n )

**Descripción:** Genera un valor de patrón que coincide con cero caracteres cuando el cursor se encuentra a n caracteres del final.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Pat Match( "quick brown fox", Pat R Pos( 3 ) + Pat Rem() >> result );
result;

```

### Pat R Tab

**Sintaxis:** Pat R Tab( n )

**Descripción:** Genera un valor de patrón que coincide con cero o más caracteres para mover el cursor hacia adelante hasta n caracteres antes del final.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Pat Match( "123456789", "23" + Pat R Tab( 2 ) >> result );
result;

```

### Pat Regex

**Sintaxis:** Pat Regex( string )

**Descripción:** Genera un valor de patrón que coincide con la expresión regular de la cadena de caracteres.

**JMP Versión agregada:** Antes de la versión 14

```jsl

string = "John Smith";
Regex Match( string, Pat Regex( "([^ ]+)([ ]+)([^ ]+)" ), "\3, \1" );
string;

```

### Pat Rem

**Sintaxis:** Pat Rem()

**Descripción:** Genera un valor de patrón que coincide con el resto del texto.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Pat Match( "the quick fox", Pat R Pos( 3 ) + Pat Rem() >> result );
result;

```

### Pat Repeat

**Sintaxis:** Pat Repeat( pattern, &lt;min=1&gt;, &lt;max=infinity&gt;, &lt;GREEDY or RELUCTANT=GREEDY&gt; )

**Descripción:** Genera un valor de patrón que coincide con el patrón indicado entre min y max veces.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Pat Match(
	"xyz aaaaabbbbbbccc 3 c is matched because greedy",
	Pat Repeat( "a" ) >> a + Pat Repeat( "b" ) >> b + Pat Repeat( "c" ) >> c
);
" a=" || a || " b=" || b || " c=" || c;

```

### Pat Span

**Sintaxis:** Pat Span( string )

**Descripción:** Genera un valor de patrón que coincide con uno o más caracteres de la cadena de caracteres.

**JMP Versión agregada:** Antes de la versión 14

```jsl

sp = Pat Span( "0123456789.-" );
Pat Match( "junk=-33.44e33", sp >> result );
result;

```

### Pat String

**Sintaxis:** Pat String( string )

**Descripción:** Genera un valor de patrón que coincide con la cadena de caracteres. Generalmente, la cadena de caracteres se puede usar sin usar la función Pat String().

**JMP Versión agregada:** Antes de la versión 14

```jsl

x = Pat String( "a" || "b" );
Pat Match(
	"acbdbababc",
	Pat Arb() >> before + Pat Repeat( x ) >> match + Pat Rem() >> after
);
"before=" || before || " match=" || match || " after=" || after;

```

### Pat Succeed

**Sintaxis:** Pat Succeed()

**Descripción:** Genera un valor de patrón que siempre coincide con cero caracteres incluso al reintentar la coincidencia.

**JMP Versión agregada:** Antes de la versión 14

```jsl

source = "xxxxx";
n = 0;
pattern = Pat Succeed() + Pat Arb() >> xs + Expr(
	Show( xs );
	n = n + 1;
	If( n > 16,
		Pat Abort(),
		Pat Fail()
	);
);
rc = Pat Match( source, pattern, NULL, FULLSCAN );

```

### Pat Tab

**Sintaxis:** Pat Tab( n )

**Descripción:** Genera un valor de patrón que coincide con cero o más caracteres para mover el cursor hacia adelante hasta la posición n.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Pat Match( "123456789", "23" + Pat Tab( 6 ) >> result );
result;

```

### Pat Test

**Sintaxis:** Pat Test( expression )

**Descripción:** Genera un valor de patrón que coincide con cero caracteres cuando la expresión es no nula. La expresión se vuelve a evaluar durante cada prueba, como si se utilizase Expr().

**JMP Versión agregada:** Antes de la versión 14

```jsl

nCats = 0;
whichCat = 3;
string = "catch a catnapping cat in a catsup factory";
rc = Pat Match(
	string,
	"cat" + Pat Test(
		nCats = nCats + 1;
		nCats == whichCat;
	),
	"dog"
);
string;

```

### Path

**Sintaxis:** Path( pathMatrix|pathText, &lt;fill=0&gt; )

**Descripción:** Dibuja un trazo a lo largo de una trayectoria determinada si el valor del relleno es 0. En caso contrario, pinta el interior de ese trazo. La trayectoria se puede especificar en forma de matriz N x 3 o en forma de texto. Una matriz de trayectoria tiene tres columnas para x, y, y marcas para cada punto de la trayectoria. Los valores de las marcas son 0 para control, 1 para movimiento, 2 para segmento lineal, 3 para segmento de curva de Bézier, y son negativos si, además, el punto cierra la trayectoria. El formato de texto de la trayectoria es compatible con la sintaxis SVG.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "blue" );
		Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3], 1 );
		Path( "M20,20 C20,60 60,60 60,20 Z", 0 );
	)
);

```

### Path To Char

**Sintaxis:** s = Path To Char( pathMatrix )

**Descripción:** Convierte la especificación de una ruta de acceso de forma matricial a alfanumérica.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Path To Char( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] );

```

### Payment

**Sintaxis:** x = Payment( rate, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Descripción:** Devuelve los pagos de un préstamo basándose en pagos periódicos constantes y una tasa de interés constante. El argumento type es 0 para los pagos al final de cada período y 1 para los pagos al inicio de cada período. Equivale a la función PMT de Microsoft Excel.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Pdf Page Count

**Sintaxis:** Pdf Page Count( file name)

**Descripción:** Devuelve el número de páginas en un archivo PDF.

**JMP Versión agregada:** Antes de la versión 14

```jsl

pageCount = Pdf Page Count( "$documents\myfile.pdf" );

```

### Pen Color

**Sintaxis:** Pen Color( &lt;name|index|rgbList&gt; )

**Descripción:** Establece el color para dibujar líneas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( {.3, .5, .7} );
		Circle( {20, 20}, 10 );
	)
);

```

### Pen Size

**Sintaxis:** Pen Size( &lt;x&gt; )

**Descripción:** Establece el grosor de las líneas en píxeles.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 4 );
		Line( [10 30 90], [88 22 44] );
	)
);

```

### Pi

**Sintaxis:** y = Pi()

**Descripción:** Devuelve la constante matemática π, con una precisión aproximada de 15 decimales: 3.1415926535....

**JMP Versión agregada:** Antes de la versión 14

```jsl

Char( Pi(), 5 );

```

### Pick Color

**Sintaxis:** color = Pick Color( &lt;window title&gt;, &lt;name|index|rgbList&gt; )

**Descripción:** Devuelve un color que se seleccionó con el selector de colores estándar.

**JMP Versión agregada:** 14

```jsl

pickedColor = Pick Color( "Pick a Line Color", "Red" );
New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( pickedColor );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### Pick Color Theme

**Sintaxis:** theme = Pick Color Theme( &lt;window title&gt;, &lt;Color Theme(name|specification)&gt;, &lt;Type("Continuous" | "Sequential" | "Bad to Good" | "Categorical")&gt;)

**Descripción:** Devuelve un tema de color que se seleccionó con el selector de tema de color estándar. El tema inicial puede especificarse explícitamente o determinando un Type para utilizar los temas de las preferencias.

**JMP Versión agregada:** 17

**Constructor de gráficos**

```jsl


theme = Pick Color Theme( "Choose a color theme", Type( "Bad to Good" ) );
dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Variables( Color( :SAT Math ), Shape( :State ) ),
	Elements( Map Shapes( Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 2, 1 );
item << Set Properties( {Gradient( {Color Theme( theme )} )} );

```

**Leyenda de fila**

```jsl


pickedTheme = Pick Color Theme( "Pick a Color Theme" );
biv = Open( "$SAMPLE_DATA/Big Class.jmp" ) << Run Script( "Bivariate" );
Report( biv )[FrameBox( 1 )] << Row Legend( "age", Color Theme( pickedTheme ) );

```

### Pick Directory

**Sintaxis:** path = Pick Directory( &lt;prompt&gt;, &lt;path&gt;, &lt;Show Files( boolean )&gt; )

**Descripción:** Muestra al usuario una ventana Abrir directorio y devuelve el nombre de la ruta del directorio seleccionado. La cadena de caracteres opcional prompt se muestra en la parte superior de la ventana. Show Files puede ser cualquiera de los tres argumentos, y utiliza un argumento booleano. 1 muestra los archivos en la ventana Seleccionar directorio y 0 no los muestra. El valor predeterminado es 0. La cadena de caracteres path especifica el directorio que muestra inicialmente la ventana Seleccionar directorio. Si se utiliza la cadena de caracteres path, debe ir a continuación de la cadena de caracteres prompt, pero Show Files puede aparecer entre ellas.

**JMP Versión agregada:** Antes de la versión 14

**Show Files**

```jsl

Pick Directory( "Select a directory", "$DOCUMENTS", Show Files( 1 ) );

```

**Simple**

```jsl

Pick Directory( "Select a directory" );

```

### Pick File

**Sintaxis:** path = Pick File( &lt;prompt&gt;, &lt;initial directory&gt;, &lt;filterList&gt;, &lt;first filter&gt;, &lt;saveFlag=0|1&gt;, &lt;default file&gt;, &lt;multiple&gt; )

**Descripción:** Aparece una ventana Abrir que devuelve el nombre de la ruta del archivo seleccionado. El argumento filterList es una lista de cadenas de caracteres con la estructura: "Etiqueta|sufijo1;sufijo2;...". El argumento first filter especifica qué filtro de archivos se debe mostrar inicialmente. El quinto argumento indica si la ventana debe funcionar como ventana para guardar (saveFlag = 1) o para abrir (saveFlag = 0). El argumento default file especifica el archivo seleccionado inicialmente. El argumento multiple permite seleccionar varios archivos siempre que saveFlag sea 0.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Pick File(
	"Select JMP File",
	"$DOCUMENTS",
	{"JMP Files|jmp;jsl;jrn", "All Files|*"},
	1,
	0,
	"newJmpFile.jmp"
);

```

**Ejemplo 2**

```jsl

Files = Pick File(
	"Select JMP File",
	"$SAMPLE_DATA",
	{"JMP Files|jmp;jsl;jrn", "All Files|*"},
	1,
	0,
	"",
	"multiple"
);
For( i = 1, i <= N Items( Files ), i++,
	Try( Open( Files[i] ) )
);

```

**Ejemplo 3**

```jsl

filename = Pick File(
	"Save As Text",
	"$DOCUMENTS",
	{"Text File|txt"},
	1,
	1, // Save Flag
	"export.txt"
);
If( Is Missing( filename ),
	Print( "Canceled" ),
	Save Text File( filename, "The quick brown fox" )
);

```

### Picture Box

**Sintaxis:** pict = Picture Box( Picture Object )

**Descripción:** Crea un cuadro de visualización que contiene un objeto de imagen gráfica. Es posible abrir una imagen y hacer referencia a ella o bien usar el comando Abrir con la ruta correspondiente a la imagen en lugar del argumento Picture Object.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

New Window( "Example",
	Picture Box( Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg ) )
);

```

**Ejemplo 2**

```jsl

pict = Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg );
New Window( "Example", Picture Box( pict ) );

```

### Pie

**Sintaxis:** Pie( left, top, right, bottom, startAngle, endAngle )

**Descripción:** Dibuja un sector circular.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Pie( 10, 80, 70, 40, 0, 90 );
	)
);

```

### Pie Seg

**Sintaxis:** ps = Pie Seg(&lt;{ xorigin, yorigin }&gt;, &lt;radius&gt;, &lt;style("pie", "ring", "coxcomb")&gt;, values)

**Descripción:** Crea un segmento de gráfico circular en el origin especificado, con el radius especificado, basado en los valores especificados en el formato de matriz.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );
New Window( "Pie Seg",
	Graph Box(
		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),
		Pie Seg( {75, 50}, .25, sumWt )
	)
);

```

### Pixel Line To

**Sintaxis:** Pixel Line To( h, v )

**Descripción:** Dibuja una línea desde la coordenada en píxeles actual de la pluma hasta las coordenadas horizontal y vertical indicadas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Pixel Origin( 50, 50 ); // in axis coordinates
		// others are pixels, relative to pixel origin
		Pixel Move To( 0, 0 );
		Pixel Line To( 0, 80 );
		Pixel Move To( 2, 0 );
		Pixel Line To( 2, 40 );
		Pixel Move To( 4, 0 );
		Pixel Line To( 4, 20 );
	)
);

```

### Pixel Move To

**Sintaxis:** Pixel Move To( h, v )

**Descripción:** Mueve la pluma, situada en un píxel determinado, hasta las coordenadas horizontal y vertical indicadas en relación con el origen.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Pixel Origin( 50, 50 ); // in axis coordinates
		// others are pixels, relative to pixel origin
		Pixel Move To( 0, 0 );
		Pixel Line To( 0, 80 );
		Pixel Move To( 2, 0 );
		Pixel Line To( 2, 40 );
		Pixel Move To( 4, 0 );
		Pixel Line To( 4, 20 );
	)
);

```

### Pixel Origin

**Sintaxis:** Pixel Origin( x, y )

**Descripción:** Establece el origen que se usa como referencia en los comandos de trazado de píxeles.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Pixel Origin( 50, 50 ); // in axis coordinates
		// others are pixels, relative to pixel origin
		Pixel Move To( 0, 0 );
		Pixel Line To( 0, 80 );
		Pixel Move To( 2, 0 );
		Pixel Line To( 2, 40 );
		Pixel Move To( 4, 0 );
		Pixel Line To( 4, 20 );
	)
);

```

### Pixel Path

**Sintaxis:** PixelPath( h, v, pathMatrix|pathText, &lt;fill=0&gt;, &lt;scale=1.0&gt;, &lt;orient={0.0,1.0}&gt; )

**Descripción:** Dibuja un trazo a lo largo de una trayectoria determinada definida por píxeles si el valor del relleno es 0. En caso contrario, pinta el interior de ese trazo. La trayectoria se puede especificar en forma de matriz N x 3 o en forma de texto. Una matriz de trayectoria tiene tres columnas para x, y, y marcas para cada punto de la trayectoria. Los valores de las marcas son 0 para control, 1 para movimiento, 2 para segmento lineal, 3 para segmento de curva de Bézier, y son negativos si, además, el punto cierra la trayectoria. El formato de texto es compatible con la sintaxis SVG. La trayectoria se escala y traslada respecto a su origen en función de los parámetros opcionales, con la orientación especificada en el espacio de ejes.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "blue" );
		angle = 45 * Pi() / 180; // 45 deg in radians
		Pixel Origin( 20, 80 );
		Pixel Path(
			0,
			0, // offset from pixel origin in pixels
			[-10 -10 1,
			10 -10 0,
			20 20 0,
			-10 20 -3],
			1, // fill
			2.0, // scale
			{Sin( angle ), Cos( angle )} // clockwise rotation
		);
		Pixel Origin( 80, 20 );
		Pixel Path(
			0,
			0,
			"M-10,-10 C10,-10 20,20 -10,20 Z",
			0,
			1.0,
			{Sin( -angle ), Cos( -angle )}
		);
	)
);

```

### Pixel Text

**Sintaxis:** Pixel Text( &lt;properties&gt;, {h, v}, text, ... )

**Descripción:** Se mueve hasta la posición del píxel {h, v} y dibuja el texto especificado por el argumento text. Los argumentos de propiedades con nombre asignado incluyen Center Justified, Right Justified, Top Align, Bottom Align, Erased, Boxed, Counterclockwise, Clockwise. Los argumentos de posición, los argumentos con nombre y las cadenas de caracteres se pueden mezclar en cualquier orden.

**JMP Versión agregada:** Antes de la versión 14

```jsl


New Window( "Example",
	Graph Box(
		Pixel Origin( 10, 80 ); // in axis coordinates
		Pixel Move To( 0, 0 );
		Pixel Line To( 160, 140 ); // in pixels from pixel origin
		Pixel Text( {0, 0}, "default" );
		Pixel Text( Erased, Boxed, Clockwise, {75, 75}, "Erased Boxed Clockwise" );
		Pixel Text(
			Center Justified,
			Bottom Align,
			{160, 140},  // in pixels from pixel origin
			"Bottom Align\!NCenter Justified"
		);
	)
);

```

### Platform

**Sintaxis:** y = Platform( dataTable, script )

**Descripción:** Evalúa el resultado del script en el contexto de la tabla de datos indicada. Devuelve el cuadro de visualización resultante para incluir en un árbol de visualización.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Platform example",
	H List Box(
		Platform(
			dt,
			Bubble Plot( X( :weight ), Y( :height ), Sizes( :age ), Title Position( 0, 0 ) )
		),
		Platform(
			dt,
			Bubble Plot( X( :weight ), Y( :age ), Sizes( :height ), Title Position( 0, 0 ) )
		)
	)
);

```

### Platform Preference

**Sintaxis:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Descripción:** Establece las preferencias de una plataforma tal como se especifique.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Platform Preferences

**Sintaxis:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Descripción:** Establece las preferencias de una plataforma tal como se especifique.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Plot Col Box

**Sintaxis:** y = Plot Col Box( title, numbers )

**Descripción:** Devuelve un cuadro de visualización para representar gráficamente los números. El argumento numbers puede ser una lista o una matriz.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Poisson Distribution

**Sintaxis:** cumprob = Poisson Distribution( lambda, k )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución de Poisson sea menor o igual que k, donde lambda es el parámetro de media y k es el conteo de interés.

**JMP Versión agregada:** Antes de la versión 14

```jsl

lambda = 4;
New Window( "Example: Poisson Distribution",
	ppy = Graph Box(
		Y Scale( 0, 1.01 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= 40, k++,
			H Line( k, k + 1, Poisson Distribution( lambda, k ) );
			V Line(
				k + 1,
				Poisson Distribution( lambda, k ),
				Poisson Distribution( lambda, k + 1 )
			);
		);
		Text( {2, 0.9}, "\!U03BB=", Round( lambda, 2 ) );
	),
	H List Box( Slider Box( 0, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) )
);

```

### Poisson Probability

**Sintaxis:** prob = Poisson Probability( lambda, k )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución de Poisson sea igual a k, donde lambda es el parámetro de media y k es el conteo de interés.

**JMP Versión agregada:** Antes de la versión 14

```jsl

lambda = 4;
New Window( "Example: Poisson Probability",
	pdy = Graph Box(
		Y Scale( 0, 0.20 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( k = 0, k <= 40, k++,
			V Line( k, 0, Poisson Probability( lambda, k ) )
		);
		Text( {30, 0.18}, "\!U03BB=", Round( lambda, 2 ) );
	),
	H List Box( Slider Box( 0, 40, lambda, pdy << reshow ), Text Box( " \!U03BB" ) )
);

```

### Poisson Quantile

**Sintaxis:** q = Poisson Quantile( lambda, cumprob )

**Descripción:** Devuelve el cuantil entero más pequeño para el cual la probabilidad acumulada de la distribución Poisson(lambda) es mayor o igual que cumprob.

**JMP Versión agregada:** Antes de la versión 14

```jsl

qexpl = 20;
qexpn = 40;
qexpq = 0.5;
New Window( "Example: Poisson Quantile",
	qexpy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qexpk = 0, qexpk < Round( qexpn ), qexpk++,
			H Line( qexpk, qexpk + 1, Poisson Distribution( qexpl, qexpk ) );
			V Line(
				qexpk + 1,
				Poisson Distribution( qexpl, qexpk ),
				Poisson Distribution( qexpl, qexpk + 1 )
			);
		);
		Pen Color( "blue" );
		V Line( Poisson Quantile( qexpl, qexpq ), 0, 1.0 );
		Text(
			{6, 0.17},
			" \!U03BB=",
			Round( qexpl, 2 ),
			" q=",
			Round( qexpq, 2 ),
			" quantile=",
			Round( Poisson Quantile( qexpl, qexpq ) )
		);
	),
	H List Box( Slider Box( 0, 40, qexpl, qexpy << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 0, 1, qexpq, qexpy << reshow ), Text Box( " q" ) )
);

```

### Poly Seg

**Sintaxis:** ps = Poly Seg(x values, y values)

**Descripción:** Devuelve un segmento de visualización que representa un polígono con vértices en los valores x e y indicados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Poly Seg Example", g = Graph Box( Poly Seg( x, y ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Poly Seg" ));

```

### Polygon

**Sintaxis:** Polygon( {x1, y1}, {x2, y2}, ..., &lt;&lt;fill(bool) ); Polygon( xMatrix, &lt;yMatrix&gt;, &lt;&lt;fill(bool) )

**Descripción:** Dibuja el polígono especificado por los puntos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "gray" );
		Polygon( [10 30 90], [88 22 44] );
		Polygon( [10 10, 50 80, 80 20, 50 50], <<Fill( 0 ) );
	)
);

```

### Polygon Area

**Sintaxis:** area = Polygon Area( {x1, y1}, {x2, y2}, ... ); area = Polygon Area( xMatrix, yMatrix )

**Descripción:** Calcula el área del polígono especificado.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

area = Polygon Area( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

**Ejemplo 2**

```jsl

area = Polygon Area( [10 20 30], [10 30 20] );

```

### Polygon Centroid

**Sintaxis:** {cx, cy} = Polygon Centroid( {x1, y1}, {x2, y2}, ... ); centroid = Polygon Centroid( xMatrix, yMatrix )

**Descripción:** Calcula el centroide del polígono especificado.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

{cx, cy} = Polygon Centroid( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

**Ejemplo 2**

```jsl

centroid = Polygon Centroid( [10 20 30], [10 30 20] );

```

### Polygon Simplify

**Sintaxis:** rows = Polygon Simplify( xMatrix|xyMatrix, &lt;yMatrix&gt;, &lt;&lt;&lt;detail factor(f=200)&gt;, &lt;&lt;&lt;multiple(ids)&gt;, &lt;&lt;&lt;geodesic(bool)&gt; )

**Descripción:** Quita los puntos de un polígono que tienen poco detalle y devuelve los índices de los puntos restantes. detail factor es inversamente proporcional a la tolerancia de error de detalle. multiple(ids) indica que se deben simplificar muchos polígonos conjuntamente para que las aristas comunes se traten de forma coherente. ids es una matriz con una fila por punto. geodesic(1) indica que las coordenadas son latitud y longitud para medir distancias.

**JMP Versión agregada:** 19

**Ejemplo 1**

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "cyan" );
		xx = 18 * [1 1 1 1 1 2 3 4 5 5 5 5 5 4 3 2] + J( 1, 16, Random Uniform( -5, 5 ) );
		yy = 18 * [1 2 3 4 5 5 5 5 5 4 3 2 1 1 1 1] + J( 1, 16, Random Uniform( -5, 5 ) );
		Polygon( xx, yy );
		rows = Polygon Simplify( xx, yy, <<detail factor( 10 ) );
		Polygon( xx[rows], yy[rows], <<Fill( 0 ) );
	)
);

```

**Múltiples polígonos**

```jsl

dt = Open( "$SAMPLE_IMPORT_DATA/Parishes.shp" );
rows = Where( dt, 4 <= :Shape <= 7 );
polys = dt[rows, {"X", "Y"}];
ids = dt[rows, {"Shape"}] * 100 + dt[rows, {"Part"}];
Close( dt, NoSave );

simple rows = Polygon Simplify(
	polys,
	<<detail factor( 500 ),
	<<multiple( ids ),
	<<geodesic( 1 )
);
unique ids = Associative Array( ids );

minx = Min( polys[0, 1] );
maxx = Max( polys[0, 1] );
sx = maxx - minx;
miny = Min( polys[0, 2] );
maxy = Max( polys[0, 2] );
sy = maxy - miny;

New Window( "Parishes",
	Graph Box(
		Frame Size( 600, 600 ),
		X Scale( minx - sx * 0.02, maxx + sx * 0.02 ),
		Y Scale( miny - sy * 0.02, maxy + sy * 0.02 ), 
		
		For Each( {id}, unique ids, 

			rows = simple rows[Loc( ids[simple rows] == id )];
			Pen Color( "light red" );
			Pen Size( 4 );
			Polygon( polys[rows, 0], <<Fill( 0 ) );

			rows = Loc( ids == id );
			Pen Color( "black" );
			Pen Size( 1 );
			Polygon( polys[rows, 0], <<Fill( 0 ) );
			
			{cx, cy} = Polygon Centroid( polys[rows, 0] );
			Text( Center Justified, {cx, cy}, Char( id ) );
		)
	)
);

```

### Polytope Uniform Random

**Sintaxis:** points = Random Linearly Constrained Uniform( numSamples, A, b, L, U, neq, nle, nge, &lt;nwarm=200&gt;, &lt;nstride=25&gt;, &lt;tol=1e-8&gt;, &lt;G&gt;, &lt;LC&gt;, &lt;UC&gt; )

**Descripción:** Genera una muestra aleatoria sujeta a restricciones lineales, restricciones de límites variables y restricciones de cardinalidad en variables de subgrupos de componentes especificados. El argumento numSamples especifica el número de puntos aleatorios que se generarán. El argumento A es la matriz de coeficientes de restricción lineal. El argumento b es el vector de valores del lado derecho de las restricciones lineales. Los argumentos L y U son vectores de los límites inferior y superior de las variables, respectivamente. Los argumentos neq, nle y nge son el número de restricciones de igualdad, el número de restricciones menores o iguales y el número de restricciones mayores o iguales, respectivamente. El argumento nwarm es el número de repeticiones previas antes de que los puntos se escriban en la matriz de salida. El argumento nstride es el número de repeticiones entre cada punto que se escribe en la matriz de salida. El argumento tol es la tolerancia. El argumento G es un vector de índices que asigna las variables a subgrupos de componentes restringidos, donde los valores faltantes o nulos no pertenecen a un subgrupo restringido. Los argumentos LC y UC son las restricciones de cardinalidad inferior y superior para los subgrupos de componentes restringidos, respectivamente. Tenga en cuenta que las restricciones se deben indicar primero como igualdad, luego como menor o igual y, por último, como mayor o igual.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

A = [1 1 1, 1 2 0];
b = [1, 0.5];
L = [0, 0, 0.1];
U = [1, 1, 1];
points = Random Linearly Constrained Uniform( 2000, A, b, L, U, 1, 0, 1, 300, 50 );
dt = As Table( points );
tobj = Report( Ternary Plot( X( :Col1, :Col2, :Col3 ) ) );
tfr = tobj[scalebox( 1 )] << clone box;
New Window( "Example: Random Linearly Constrained Uniform",
	Outline Box( "Points on a Ternary Plot", tfr ),
	Outline Box( "Constraints",
		Text Box( "X1 + x2 + x3 = 1" ),
		Text Box( "X2 + 2*x2 >= 0.5" )
	),
	Outline Box( "Variable Bounds",
		Text Box( "0 <= x1 <= 1" ),
		Text Box( "0 <= x2 <= 1" ),
		Text Box( ".1 < x3 <= 1" )
	)
);
Close( dt, no save );
Show( "see new window for example output" );

```

**Ejemplo 2**

```jsl


A = [1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1];
b = [100];
L = [0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0];
U = [100 100 95 90 100 85 100 90 60 70 75 70 75 100 95 60 80 95 100 100];
nwarm = 100;
nstride = 100;
tol = 1e-8;
// Index the constrained subgroups.  Index = 0 is not in a constrained subgroup.
G = [0 0 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 0 0];
// Lower cardinality constraints for the constrained subgroups
LC = [1 1];
// Upper cardinality constraints for the constrained subgroups
UC = [3 5];
points = Random Linearly Constrained Uniform(
	100,
	A,
	b,
	L,
	U,
	1,
	0,
	0,
	nwarm,
	nstride,
	tol,
	G,
	LC,
	UC
);
dt = As Table( points );

```

### Popup Box

**Sintaxis:** y = Popup Box( {label1, script1, ...} )

**Descripción:** Devuelve un cuadro de visualización con un menú desplegable definido por los pares etiqueta/script.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Tab Box(
		"alpha",
		Popup Box( {"x", ex = 1, "y", ex = 2} ),
		"beta",
		Panel Box( "panel", Text Box( "text" ) )
	)
);

```

### PostDecrement

**Sintaxis:** x--; PostDecrement( x )

**Descripción:** Resta 1 a una variable o una lista de variables.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex = 1;
ex--;
ex;

```

### PostIncrement

**Sintaxis:** x++; PostIncrement( x )

**Descripción:** Añade 1 a una variable o a una lista de variables.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex = 1;
ex++;
ex;

```

### Power

**Sintaxis:** z = x ^ y; z = Power( x, &lt;y=2&gt; )

**Descripción:** Devuelve x elevado a la potencia y. Si x es un valor negativo, y debe ser entero.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Power( 2, 5 );

```

### Pref

**Sintaxis:** Preferences( pref1( value1 ), ... )

**Descripción:** Establece las preferencias tal como se especifique.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Preference

**Sintaxis:** Preferences( pref1( value1 ), ... )

**Descripción:** Establece las preferencias tal como se especifique.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Preferences

**Sintaxis:** Preferences( pref1( value1 ), ... )

**Descripción:** Establece las preferencias tal como se especifique.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Prefs

**Sintaxis:** Preferences( pref1( value1 ), ... )

**Descripción:** Establece las preferencias tal como se especifique.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Present Value

**Sintaxis:** x = Present Value( rate, nper, pmt, &lt;fv=0&gt;, &lt;type=0&gt; )

**Descripción:** Devuelve el valor actual de una inversión. El argumento type es 0 para los pagos al final de cada período y 1 para los pagos al inicio de cada período. Equivale a la función PV de Microsoft Excel.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Present Value( .05 / 12, 30 * 12, 1000 );

```

### Principal Payment

**Sintaxis:** x = Principal Payment( rate, per, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Descripción:** Devuelve los pagos de principal durante un período especificado para una inversión basándose en pagos periódicos constantes y una tasa de interés constante. El argumento type es 0 para los pagos al final de cada período y 1 para los pagos al inicio de cada período. Equivale a la función PPMT de Microsoft Excel.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Print

**Sintaxis:** Print( x, ... )

**Descripción:** Muestra los valores de los argumentos en el registro, uno por línea.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Print( 355 / 113, Pi() );

```

### Print Matrix

**Sintaxis:** s = Print Matrix( M, &lt;&lt;ignore locale( 0 ), &lt;&lt;style( "parseable" ), &lt;&lt;separate( ", " ), &lt;&lt;line begin( "[ " ), &lt;&lt;line end( " ]" ) )

**Descripción:** Imprime la matriz M. El argumento opcional ignore locale determina si se deben imprimir los separadores decimales según la configuración local del ordenador, donde el valor 0 significa que se debe respetar dicha configuración. El argumento opcional style determina si se debe emplear un estilo y cuál aplicar. Los estilos disponibles son parseable, que es una expresión de matriz JSL reformateada, latex y other. Si el argumento style es other, los tres últimos argumentos opcionales definen los caracteres inicial y final de las filas impresas y los caracteres de separación entre entradas concatenadas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

A = [3.509 0.003, 874.4 0.00384, 0.03 0.093];
Print Matrix( A );
Print Matrix( A, <<ignore locale( 1 ) );
Print Matrix( A, <<style( "latex" ) );
Print Matrix(
	A,
	<<style( "other" ),
	<<line begin( "| " ),
	<<line end( " |" ),
	<<separate( " | " )
);

```

### Probit

**Sintaxis:** q = Normal Quantile( p, &lt;mu=0&gt;, &lt;sigma=1&gt; ); q = Probit( p )

**Descripción:** Devuelve el cuantil de una distribución normal, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Normal Quantile( 0.9 );

```

### Product

**Sintaxis:** y = Product( assignExpr, limit, bodyExpr )

**Descripción:** Devuelve el producto de los resultados de evaluar los argumentos bodyExpr, aumentando cada vez la variable del argumento assignExpr hasta que sea mayor o igual que el argumento limit.

**JMP Versión agregada:** Antes de la versión 14

```jsl

2 * Product( i = 1, 10000, 4 * i * i / (2 * i - 1) / (2 * i + 1) );

```

### Python Connect

**Sintaxis:** PythonConnection = Python Connect ()

**Descripción:** Devuelve un objeto de conexión a Python que admite scripts.

**JMP Versión agregada:** 14

```jsl

PythonConnection = Python Connect();
version = PythonConnection << Get Version;
Show( version );

```

### Python Create JPIP CMD

**Sintaxis:** Python Create JPIP CMD()

**Descripción:** Activa la creación de un script que envuelve la línea de comandos jpip para el comando pip de Python. Un cuadro de diálogo de selección de directorios le preguntará la ubicación del directorio para guardar el script generado. Este script ofrece entonces todas las capacidades de pip, a la vez que determina correctamente las variables de entorno necesarias para el entorno Python aislado de JMP.

**JMP Versión agregada:** 18

**Ejemplo 1**

```jsl

Python Create JPIP CMD();

```

**Ejemplo 2**

```jsl


conn = Python Connect();
conn << Create JPIP CMD();

```

### Python Execute

**Sintaxis:** Python Execute( { list of Inputs }, { list of Outputs }, statements &lt; , echo( 1 | 0 ) &gt; )

**Descripción:** Envía una lista de entradas, ejecuta sentencias y devuelve una lista de salidas. El parámetro opcional echo() es True de forma predeterminada. El parámetro echo controla el eco de la fuente Python en el registro. El valor lógico verdadero (1) activa el eco de la fuente mientras que 0 suprime el eco en el registro.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl


a = "abcdef";
d = 3.141;
x = 0;
z = 0;
v = [1 0 0, 0 1 0, 0 0 1];
// pi, e, phi, c, Plank's, Faraday, 345 triangle
m = [3.141 2.718 1.618,
2.997 6.626 9.648,
3 4 5];
ml = Python Execute(
	{v, m, a, d},
	{x, z, a, d},
	"\[
import numpy as np
a = np.multiply(v, m) # matrix product
d = np.divide(v, m) # matrix division
z = np.multiply(m, np.linalg.inv(v)) # m * inv(v) called Left division
x = np.multiply(np.linalg.inv(m), v) # inv(m) * v called right division
]\"
);
Show( v, m, ml, x, z, a, d );

```

**Ejemplo 2**

```jsl


x1 = 1;
x2 = 2;
y1 = 1;
y2 = 2;
z1 = 1;
z2 = 2;
v = [1 0 0, 0 1 0, 0 0 1];
// pi, e, phi, c, Plank's, Faraday, 345 triangle
m = [3.141 2.718 1.618,
2.997 6.626 9.648,
3 4 5];
ml = Python Execute(
	{v, m},
	{x1, x2, y1, y2, z1, z2},
	"\[
import numpy as np
x1 = np.multiply(v, m) # matrix product
print('x1=', x1)
x2 = np.divide(v, m) # matrix division
print('x2=', x2)
y1 = np.dot(v, m) # dot product of v and m
print('y1=', y1)
y2 = np.dot(m, v) # dot product of m and v
print('y2=', y2)
z1 = np.inner(v, m) # inner product of v and m
print('z1=', z1)
z2 = np.inner(m, v) # innder product of m and v
print('z2=', z2)
]\"
);
Show( v, m, ml, x1, x2, y1, y2, z1, z2 );

```

### Python Get

**Sintaxis:** y = Python Get( name )

**Descripción:** Devuelve datos de Python, donde el argumento name puede representar cualquiera de los tipos de datos de Python (numérico | cadena | matriz | lista | diccionario | tabla de datos | data frame | fecha y hora | numpy.datetime64) siguientes.

**JMP Versión agregada:** 14

**Datetime**

```jsl


date1 = As Date( Today() );
Python Send( date1 );
date2 = Python Get( date1 );
Show( date1, date2 );

```

**Ejemplo 1**

```jsl


x1 = {1, 2, 3};
Python Send( x1 );
x2 = Python Get( x1 );
Show( x1, x2 );

```

**numpy.datetime64**

```jsl


Python Install Packages( "numpy" );
Python Submit( "import numpy as np" );
Python Submit( "datetime64 = np.datetime64('1989-10-05')" );
numpy_datetime = Python Get( datetime64 );
Show( numpy_datetime );

```

### Python Get Version

**Sintaxis:** version = Python Get Version()

**Descripción:** Devuelve el número de versión de Python que se utiliza con las interfaces Python de JMP.

**JMP Versión agregada:** 14

```jsl

version = Python Get Version();
Show( version );

```

### Python Init

**Sintaxis:** PythonConnection = Python Init( )

**Descripción:** Nota: esta función está en desuso a partir de JMP 18 y equivale a Python Connect().

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl


Python Init();
Python Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
]\" );
getStr = Python Get( str );
Show( getStr );

```

**Ejemplo 2**

```jsl


PythonConnection = Python Init();
PythonConnection << Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
]\" );
getStr = Python Get( str );
Show( getStr );

```

### Python Install Packages

**Sintaxis:** Python Install Packages( packages )

**Descripción:** Esto envuelve la instalación de paquetes Python en el directorio de paquetes del sitio JMP. Para operaciones que van más allá de la mera instalación de paquetes, consulte Python Create JPIP CMD() para crear un script que envuelva el pip de la línea de comandos en un directorio seleccionado con Directory Pick(). Alternativamente, para ejecutar la instalación desde una ventana de script de JMP Python consulta jmputils.jpip en la categoría Python aquí en el índice de scripts.

**JMP Versión agregada:** 18

**Ejemplo 1**

```jsl

// install numpy and pandas packages
Python Install Packages( "numpy pandas" );

```

**Ejemplo 2**

```jsl

// install numpy and pandas packages
Python Install Packages( {"numpy", "pandas"} );

```

**Ejemplo 3**

```jsl

// install numpy and pandas packages
conn = Python Connect();
conn << Install Packages( "numpy pandas" );

```

### Python Is Connected

**Sintaxis:** connected = Python Is Connected()

**Descripción:** Nota: esta función está en desuso a partir de JMP 18 y siempre devuelve 1.

**JMP Versión agregada:** 14

```jsl

x = Python Is Connected();
Show( x );

```

### Python JMP Name to Python Name

**Sintaxis:** Python name = Python JMP Name To Python Name( JMP name )

**Descripción:** Establece una correspondencia entre un nombre de variable de JMP y uno de Python usando las reglas de denominación de variables de Python.

**JMP Versión agregada:** 14

```jsl

Python name = Python JMP Name to Python Name( a b c );
Show( Python name );

```

### Python Reset

**Sintaxis:** Python Reset()

**Descripción:** Restablece el entorno de Python compartido, borrando principalmente todas las referencias a objetos. Esto no cambia la caché de importación de los módulos importados. Se trata de una limitación del propio entorno de Python. El proceso en ejecución no puede descargar los módulos que cargan bibliotecas compartidas. Para recargar código Python puro, consulte la documentación de Python.org sobre importlib reload().

**JMP Versión agregada:** 19

```jsl

pi = 3.1415927;
Python Send( pi );
Python Submit( "print(pi)" );
Python Reset();
// will show error, pi not defined
Python Submit( "print(pi)" );

```

### Python Send

**Sintaxis:** Python Send( name, &lt;Python Name( name )&gt; )

**Descripción:** Envía datos a Python, donde el argumento name puede representar cualquiera de los tipos de datos de JMP (numérico | cadena | matriz | lista | tabla de datos | columna de tabla de datos | fecha) siguientes.

**JMP Versión agregada:** 14

**Columna**

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt:weight );
Python Submit( "print(dt_weight)" );

```

**Fecha**

```jsl


date = As Date( Today() );
Python Send( date );
Python Submit( "print(date)" );

```

**Tabla de datos**

```jsl


x = {1, 2, 3};
Python Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt );
Python Submit( "print(x)" );
Python Submit( "print(dt)" );

```

### Python Send File

**Sintaxis:** Python Send File( filename, &lt;Python Name( name )&gt; )

**Descripción:** Envía un archivo de datos a Python. El argumento filename es una cadena de caracteres que especifica el nombre de la ruta del archivo que se debe enviar a Python.

**JMP Versión agregada:** 14

```jsl


Python Send File( "$SAMPLE_DATA/Big Class.jmp" );
Python Send File( "$SAMPLE_DATA/Baseball.jmp" );
Python Submit( "print(Big_Class)" );
Python Submit( "print(Baseball)" );

```

### Python Submit

**Sintaxis:** Python Submit( statements &lt; , echo( 1 | 0 ) &gt; )

**Descripción:** Envía instrucciones a Python. Las instrucciones pueden adoptar la forma de un valor de cadena de caracteres o de una lista de valores de cadena de caracteres. El parámetro opcional echo() es 1 de forma predeterminada. El parámetro echo controla el eco de la fuente Python en el registro. El valor lógico verdadero (1) activa el eco de la fuente mientras que 0 suprime el eco en el registro.

**JMP Versión agregada:** 14

```jsl

Python Submit( "\[
str = 'The quick brown fox jumps over the lazy dog'
a = 200]\" );
getStr = Python Get( str );
getNum = Python Get( a );
Show( getStr, getNum );

```

### Python Submit File

**Sintaxis:** Python Submit File( path )

**Descripción:** Envía instrucciones a Python empleando un archivo especificado en el argumento path.

**JMP Versión agregada:** 14

```jsl

Python Submit File( "some_Python_source.py" );

```

### Python Term

**Sintaxis:** Python Term()

**Descripción:** Nota: esta función está en desuso a partir de JMP 18 y no tiene ningún efecto.

**JMP Versión agregada:** 14

### QR

**Sintaxis:** {Q, R} = QR( X )

**Descripción:** Crea una matriz ortogonal m por m Q y una matriz triangular superior m por n R tales que X = Q * R. El argumento X es una matriz m por n.

**JMP Versión agregada:** Antes de la versión 14

```jsl

QR( [11 22, 33 44] );

```

### QR LAPACK

**Sintaxis:** {Q, R} = QR LAPACK( X )

**Descripción:** Crea una matriz ortogonal m por k Q y una matriz triangular superior k por n R tales que X = Q * R. El argumento X es una matriz m por n, donde k es min(m, n).

**JMP Versión agregada:** 17

```jsl

QR LAPACK( [11 22, 33 44] );

```

### Quadratic Form BLAS

**Sintaxis:** y = Quadratic Form BLAS( A, x )

**JMP Versión agregada:** 17

```jsl

A = [2 0, 0 2];
x = [2, 3];
y = Quadratic Form BLAS( A, x );

```

### Quantile

**Sintaxis:** y = Quantile( p, x1, ... )

**Descripción:** Devuelve el cuantil especificado p de los argumentos x. El argumento del cuantil puede ser un escalar o una matriz. También se pueden especificar los valores x como valores dentro de una única matriz o argumento de lista.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List(
	{Quantile( 0.75, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ),
	Quantile( 0.5, [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] )}
);

```

### Quarter

**Sintaxis:** q = Quarter( datetime )

**Descripción:** Devuelve el trimestre correspondiente a un valor de fecha y hora, del 1 al 4.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Quarter( Today() );

```

### Query

**Sintaxis:** result = Query( &lt; &lt; dt1 | Table( dt1, alias1 ) &gt;, ..., &lt; dtN | Table( dtN, aliasN ) &gt; &gt;, &lt;Private|Invisible&gt;, &lt;Scalar&gt;, sqlStatement )

**Descripción:** Realiza una consulta SQL en las tablas de datos JMP. sqlStatement (la consulta SQL, una instrucción SELECT lo más probable) es necesario y debe ser el último argumento. Las tablas de datos JMP a las que hace referencia la instrucción SQL deben introducirse como argumentos en Query(), usando Table(dt, "alias") para crear un alias para la tabla que SQL puede usar si se desea. Se puede indicar Invisible o Privado para controlar la visibilidad de la tabla de datos resultante. Si la instrucción SQL devuelve un valor único, introduzca Escalar, lo que provocará que se devuelva el valor único en lugar de una tabla de datos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
Query( dt, "SELECT name, age, height FROM 'Big Class'
         WHERE age > 14; " );

		// Using aliases, performing a join
dtSAT = Open( "$SAMPLE_DATA/SATByYear.jmp", Invisible );
dtUS = Open( "$SAMPLE_DATA/US Demographics.jmp", Invisible );
Query(
	Table( dtSAT, "t1" ),
	Table( dtUS, "t2" ), 

	"\[SELECT t1.State, t1."SAT Math", t2."College Degrees",
            t2."Eighth Grade Math"
       FROM t1
       LEFT OUTER JOIN t2
           ON t1.State = t2.State
       WHERE t1.'SAT Math' > 550;
      ]\"
);

		// Query that returns a scalar value
retval = Query( Scalar, dt, "SELECT AVG(height) from 'Big Class';" );
// Query with no tables
retval = Query( Scalar, "SELECT SQRT(152399025);" );

```

### Quit

**Sintaxis:** Quit(&lt;"No Save"&gt;); Exit(&lt;"No Save"&gt;)

**Descripción:** Sale de JMP.

**JMP Versión agregada:** Antes de la versión 14

```jsl

If(
	New Window( "Quit() example",
		<<Type( "Modal" ),
		Text Box( "Shut down JMP?" ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)["Button"] == 1, /*OK==1*/Quit(), /*cancel==-1*/"Good choice."
);

```

### R Connect

**Sintaxis:** RConnection = R Connect()

**Descripción:** Devuelve un objeto conexión a R que admite scripts.

**JMP Versión agregada:** Antes de la versión 14

```jsl

RConnection = R Connect();

```

### R Control

**Sintaxis:** R Control( Interrupt | Async( bool ) | Echo( bool ) )

**Descripción:** Cambia las opciones de control para R

**JMP Versión agregada:** Antes de la versión 14

```jsl

R Init( Echo( true ) );
R Control( Echo( false ) );
R Submit( "Add R code" );

```

### R Execute

**Sintaxis:** R Execute( { list of Inputs }, { list of Outputs }, statements )

**Descripción:** Envía una lista de entradas, ejecuta unas instrucciones y devuelve una lista de salidas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

R Init();
a = "abcdef";
d = 3.141;
x = 0;
z = 0;
v = [9 8 7, 6 5 4, 3 2 1];
m = [1 2 3, 4 5 6, 7 8 9];
rc = R Execute( {v, m, a, d}, {x, z, a, d}, "\[
x <- rnorm(5)
z <- v * m
]\" );
Show( v, m, rc, x, z, a, d );

```

### R Get

**Sintaxis:** y = R Get( name )

**Descripción:** Devuelve datos de R, donde el argumento name representa cualquiera de los siguientes tipos de datos de R (numérico | cadena de caracteres | matriz | lista | data frame).

**JMP Versión agregada:** Antes de la versión 14

```jsl

R Init();
x1 = [1, 2, 3];
R Send( x1 );
x2 = R Get( x1 );
Show( x1, x2 );
dt1 = New Table( "Test", New Column( "Col", Values( [10, 20, 30] ) ) );
R Send( dt1 );
dt2 = R Get( dt1 );
Close( dt1, No Save );

```

### R Get Graphics

**Sintaxis:** R graphics = R Get Graphics( format )

**Descripción:** EN DESUSO en JMP 19 y no tiene ningún efecto. En su lugar, defina un nombre de archivo como png("r_plot.png") para el dispositivo y, a continuación, abra el archivo para recuperar la imagen. Esta opción se eliminará en JMP 20. El código siguiente muestra una solución alternativa.

**JMP Versión agregada:** Antes de la versión 14

```jsl

R Init();
img_path = Get Path Variable( "TEMP" ) || "r_plot.png";
R Execute( {img_path}, {}, "\[
png(img_path)
plot(1:10)
dev.off()
]\" );
plot = Open( img_path );
rc = Delete File( img_path );

```

### R Get Version

**Sintaxis:** version = R Get Version()

**Descripción:** Devuelve el número de versión de R que se utiliza con las interfaces R de JMP.

**JMP Versión agregada:** 14

```jsl

R Init();
version = R Get Version();
Show( version );

```

### R Init

**Sintaxis:** R Init()

**Descripción:** Inicializa las interfaces de R.

**JMP Versión agregada:** Antes de la versión 14

```jsl

R Init();

```

### R Is Connected

**Sintaxis:** connected = R Is Connected()

**Descripción:** Devuelve 1 si hay una conexión a R activa y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

R Init();
connected = R Is Connected();

```

### R JMP Name to R Name

**Sintaxis:** R name = R JMP Name To R Name( JMP name )

**Descripción:** Establece una correspondencia entre un nombre de variable de JMP y uno de R usando las reglas de denominación de variables de R.

**JMP Versión agregada:** Antes de la versión 14

```jsl

R name = R JMP Name to R Name( a b c );

```

### R Send

**Sintaxis:** R Send( name, &lt;R Name( as_name ) | "as_name"&gt; )

**Descripción:** Envía datos a R, donde el argumento name puede representar cualquiera de los tipos de datos de JMP (numérico | cadena | matriz | lista | tabla de datos | columna de tabla de datos) siguientes.

**JMP Versión agregada:** Antes de la versión 14

**Columna**

```jsl

R Init();
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
R Send( dt:weight );
Close( dt );
w = R Get( "dt.weight" );

```

**Tabla de datos**

```jsl

R Init();
x = [1, 2, 3];
R Send( x, "x1" );
rx = R Get( "x1" );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
R Send( dt );
Close( dt );
R Submit( "dt" );

```

### R Send File

**Sintaxis:** R Send File( filename, &lt;R Name( name )&gt; )

**Descripción:** Envía un archivo de datos a R. El argumento filename es una cadena de caracteres que especifica el nombre de la ruta del archivo que se debe enviar a R.

**JMP Versión agregada:** Antes de la versión 14

```jsl

R Init();
R Send File( "$SAMPLE_DATA/Big Class.jmp" );
R Send File( "$SAMPLE_DATA/Baseball.jmp" );
R Submit( "Big.Class" );
R Submit( "Baseball" );

```

### R Submit

**Sintaxis:** R Submit( statements )

**Descripción:** Envía instrucciones a R. Las instrucciones pueden estar en forma de cadena de caracteres o de lista de cadenas de caracteres.

**JMP Versión agregada:** Antes de la versión 14

```jsl


R Init();
img_path = Get Path Variable( "TEMP" ) || "r_plot.png";
code =
"\[
x <- rnorm(1000)
hx <- hist(x, breaks=100, plot=FALSE)
png("IMG_PATH")
plot(hx, col=ifelse(abs(hx$breaks) < 1.669, 4, 2))
dev.off()
x <- rnorm (100)
y <- x**2 + rnorm (100)
summary(y)
]\";
// substitue portable path into R code
r_code = Substitute( code, "IMG_PATH", img_path );
R Submit( r_code );
Wait( 3 );
plot = Open( img_path );
rc = Delete File( img_path );

```

### R Submit File

**Sintaxis:** R Submit File( path )

**Descripción:** Envía instrucciones a R empleando un archivo especificado en el argumento path.

**JMP Versión agregada:** Antes de la versión 14

```jsl


R Init();
file_path = Get Path Variable( "SAMPLE_SCRIPTS" ) || "R/SI_example.R";
R Submit File( file_path );

```

### R Term

**Sintaxis:** R Term()

**Descripción:** En desuso en JMP 19 y no tiene ningún efecto.

**JMP Versión agregada:** Antes de la versión 14

```jsl

R Init();
R Term();

```

### Radio Box

**Sintaxis:** y = Radio Box( {item, ...}, &lt;script&gt; )

**Descripción:** Devuelve un cuadro de visualización para mostrar un conjunto de botones de opción.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	rb = Radio Box( {"single", "double", "triple"}, Show( rb << Get() ) )
);

```

### Random Beta

**Sintaxis:** y = Random Beta( alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución beta.

**JMP Versión agregada:** Antes de la versión 14

```jsl


//produce a single random number
x = Random Beta( 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Beta( 1, 1 ) );
//show results
Show( x, v );

```

### Random Beta Binomial

**Sintaxis:** y = Random Beta Binomial( n, p, &lt;delta=0&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución beta binomial para n pruebas con probabilidad p y correlación delta.

**JMP Versión agregada:** Antes de la versión 14

```jsl


//produce a single random number
x = Random Beta Binomial( 14, .5, .2 );
//produce a vector of random numbers
v = J( 1, 10, Random Beta Binomial( 14, .5, .2 ) );
//show results
Show( x, v );

```

### Random Binomial

**Sintaxis:** y = Random Binomial( n, p )

**Descripción:** Devuelve un número aleatorio de una distribución binomial con n pruebas y una probabilidad de sucesos p.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exrbinp = 0.5;
exrbinn = 40;
exrbinlsz = Log( 1000 );
New Window( "Example: Random Binomial and Empirical Distribution",
	exrbiny = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( 0, 40 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		exrbinsz = Round( Exp( exrbinlsz ) );
		exrbinsamp = J( Round( exrbinsz ), 1, . );
		exrbinfreq = J( Round( exrbinn + 1 ), 1, . );
		For( exrbink = 1, exrbink <= Round( exrbinsz ), exrbink++,
			exrbinsamp[exrbink] = Random Binomial( exrbinn, exrbinp )
		);
		For( exrbink = 0, exrbink <= Round( exrbinn ), exrbink++,
			exrbinfreq[exrbink + 1] = Sum( exrbinsamp <= exrbink ) / Round( exrbinsz )
		);
		For( exrbink = 0, exrbink < Round( exrbinn ), exrbink++,
			H Line(
				exrbink,
				exrbink + 1,
				Binomial Distribution( exrbinp, Round( exrbinn ), exrbink )
			);
			V Line(
				exrbink + 1,
				Binomial Distribution( exrbinp, Round( exrbinn ), exrbink ),
				Binomial Distribution( exrbinp, Round( exrbinn ), exrbink + 1 )
			);
		);
		Pen Color( "blue" );
		For( exrbink = 1, exrbink <= Round( exrbinn ), exrbink++,
			H Line( exrbink - 1, exrbink, exrbinfreq[exrbink] );
			V Line( exrbink, exrbinfreq[exrbink], exrbinfreq[exrbink + 1] );
		);
		Text(
			{0.5, 0.9},
			"n=",
			Round( exrbinn ),
			" p=",
			Round( exrbinp, 2 ),
			" size=",
			Round( exrbinsz )
		);
	),
	H List Box(
		Slider Box( Log( 10 ), Log( 5000 ), exrbinlsz, exrbiny << reshow ),
		Text Box( " random sample size" )
	)
);

```

### Random Category

**Sintaxis:** y = Random Category( probabilityA, resultA, probabilityB, resultB, resultElse )

**Descripción:** Devuelve los pares de probabilidad dados de una categoría aleatoria y las expresiones de resultado. Se genera un número uniforme aleatorio y se compara con los argumentos de probabilidad para determinar qué argumento de resultado se devuelve.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Random Category( .2, "A", .3, "B", .4, "C", "D" );

```

### Random Cauchy

**Sintaxis:** y = Random Cauchy()

**Descripción:** Devuelve un número aleatorio de una distribución de Cauchy con mediana cero.

**JMP Versión agregada:** Antes de la versión 14

```jsl


//produce a single random number
x = Random Cauchy();
//produce a vector of random numbers
v = J( 1, 10, Random Cauchy() );
//show results
Show( x, v );

```

### Random ChiSquare

**Sintaxis:** y = Random ChiSquare( df, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución Ji cuadrado.

**JMP Versión agregada:** Antes de la versión 14

```jsl


//produce a single random number
x = Random ChiSquare( 2 );
//produce a vector of random numbers
v = J( 1, 10, Random ChiSquare( 2 ) );
//show results
Show( x, v );

```

### Random ExGaussian

**Sintaxis:** y = Random ExGaussian( location, scale, shape)

**Descripción:** Devuelve un número aleatorio de una distribución exgaussiana.

**JMP Versión agregada:** 18

```jsl


//produce a single random number
x = Random ExGaussian( 0, .5, .25 );
//produce a vector of random numbers
v = J( 1, 10, Random ExGaussian( 0, .5, .25 ) );
//show results
Show( x, v );

```

### Random Exp

**Sintaxis:** y = Random Exp()

**Descripción:** Devuelve un número aleatorio de una distribución exponencial.

**JMP Versión agregada:** Antes de la versión 14

```jsl


//produce a single random number
x = Random Exp();
//produce a vector of random numbers
v = J( 1, 10, Random Exp() );
//show results
Show( x, v );

```

### Random F

**Sintaxis:** y = Random F( dfnum, dfden, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución F.

**JMP Versión agregada:** Antes de la versión 14

```jsl


//produce a single random number
x = Random F( 2, 2 );
//produce a vector of random numbers
v = J( 1, 10, Random F( 2, 2 ) );
//show results
Show( x, v );

```

### Random Frechet

**Sintaxis:** y = Random Frechet( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución Fréchet.

**JMP Versión agregada:** Antes de la versión 14

```jsl


//produce a single random number
x = Random Frechet( 10, 5 );
//produce a vector of random numbers
v = J( 1, 10, Random Frechet( 10, 5 ) );
//show results
Show( x, v );

```

### Random Gamma

**Sintaxis:** y = Random Gamma( alpha, &lt;scale=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución gamma.

**JMP Versión agregada:** Antes de la versión 14

```jsl


//produce a single random number
x = Random Gamma( 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Gamma( 1 ) );
//show results
Show( x, v );

```

### Random Gamma Poisson

**Sintaxis:** y = Random Gamma Poisson( lambda, &lt;sigma=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución gamma Poisson con parámetros lambda y sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl


//produce a single random number
x = Random Gamma Poisson( 3, 2 );
//produce a vector of random numbers
v = J( 1, 10, Random Gamma Poisson( 3, 2 ) );
//show results
Show( x, v );

```

### Random GenGamma

**Sintaxis:** y = Random GenGamma( &lt;mu=0&gt;, &lt;sigma=1&gt;, &lt;lambda=0&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución gamma generalizada extendida con parámetros mu, sigma y lambda.

**JMP Versión agregada:** Antes de la versión 14

```jsl


//produce a single random number
x = Random GenGamma( 2, 1.25 );
//produce a vector of random numbers
v = J( 1, 10, Random GenGamma( 2, 1.25 ) );
//show results
Show( x, v );

```

### Random Geometric

**Sintaxis:** y = Random Geometric( p )

**Descripción:** Devuelve un número aleatorio de no eventos hasta que suceda un evento, para eventos con probabilidad p.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exrgeop = 0.1;
exrgeolsz = Log( 300 );
New Window( "Example: Random Geometric and Empirical Distribution",
	exrgeoy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 50 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		exrgeosz = Round( Exp( exrgeolsz ) );
		exrgeosamp = J( Round( exrgeosz ), 1, . );
		exrgeofreq = J( Round( 50 + 1 ), 1, . );
		For( exrgeok = 1, exrgeok <= Round( exrgeosz ), exrgeok++,
			exrgeosamp[exrgeok] = Random Geometric( exrgeop )
		);
		For( exrgeok = 0, exrgeok <= 50, exrgeok++,
			exrgeofreq[exrgeok + 1] = Sum( exrgeosamp <= exrgeok ) / Round( exrgeosz )
		);
		exrgeotmp1 = 0;
		exrgeotmp2 = 0;
		For( exrgeok = 0, exrgeok < 50, exrgeok++,
			exrgeotmp2 = exrgeotmp2 + (1 - exrgeop) ^ exrgeok * exrgeop;
			H Line( exrgeok, exrgeok + 1, exrgeotmp2 );
			V Line( exrgeok, exrgeotmp1, exrgeotmp2 );
			exrgeotmp1 = exrgeotmp2;
		);
		Pen Color( "blue" );
		For( exrgeok = 0, exrgeok < 50, exrgeok++,
			H Line( exrgeok, exrgeok + 1, exrgeofreq[exrgeok + 1] );
			V Line( exrgeok + 1, exrgeofreq[exrgeok + 1], exrgeofreq[exrgeok + 2] );
		);
		Text( {10, 0.2}, " p=", Round( exrgeop, 2 ), " sample size=", Round( exrgeosz ) );
	),
	H List Box(
		Slider Box( Log( 10 ), Log( 5000 ), exrgeolsz, exrgeoy << reshow ),
		Text Box( " random sample size" )
	)
);

```

### Random GLog

**Sintaxis:** y = Random GLog( mu, sigma, lambda )

**Descripción:** Devuelve un número aleatorio de una distribución logarítmica generalizada.

**JMP Versión agregada:** Antes de la versión 14

```jsl


//produce a single random number
x = Random GLog( 4, 1, 0.1 );
//produce a vector of random numbers
v = J( 1, 10, Random GLog( 4, 1, 0.1 ) );
//show results
Show( x, v );

```

### Random Index

**Sintaxis:** x = Random Index( n, k )

**Descripción:** Devuelve una matriz k por 1 con enteros aleatorios entre 1 y n y sin duplicados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Random Index( 100, 5 );

```

### Random Integer

**Sintaxis:** y = Random Integer( n ); Random Integer( k, n )

**Descripción:** Devuelve un entero aleatorio entre 1 y n (o entre k y n) inclusive.

**JMP Versión agregada:** Antes de la versión 14

```jsl


//produce a single random number
x = Random Integer( 1, 10 );
//produce a vector of random numbers
v = J( 1, 10, Random Integer( 1, 10 ) );
//show results
Show( x, v );

```

### Random Johnson Sb

**Sintaxis:** y = Random Johnson Sb( gamma, delta, theta, sigma )

**Descripción:** Devuelve un número aleatorio de una distribución Johnson Sb.

**JMP Versión agregada:** Antes de la versión 14

```jsl


//produce a single random number
x = Random Johnson Sb( 0.5, 1, 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Johnson Sb( 0.5, 1, 1, 1 ) );
//show results
Show( x, v );

```

### Random Johnson Sl

**Sintaxis:** y = Random Johnson Sl( gamma, delta, theta, &lt;sigma=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución Johnson Sl.

**JMP Versión agregada:** Antes de la versión 14

```jsl


//produce a single random number
x = Random Johnson Sl( 0.5, 1, 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Johnson Sl( 0.5, 1, 1, 1 ) );
//show results
Show( x, v );

```

### Random Johnson Su

**Sintaxis:** y = Random Johnson Su( gamma, delta, theta, sigma )

**Descripción:** Devuelve un número aleatorio de una distribución Johnson Su.

**JMP Versión agregada:** Antes de la versión 14

```jsl


//produce a single random number
x = Random Johnson Su( 0.5, 1, 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Johnson Su( 0.5, 1, 1, 1 ) );
//show results
Show( x, v );

```

### Random LEV

**Sintaxis:** y = Random LEV( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución LEV.

**JMP Versión agregada:** Antes de la versión 14

```jsl


//produce a single random number
x = Random LEV( 10, 5 );
//produce a vector of random numbers
v = J( 1, 10, Random LEV( 10, 5 ) );
//show results
Show( x, v );

```

### Random Linearly Constrained Uniform

**Sintaxis:** points = Random Linearly Constrained Uniform( numSamples, A, b, L, U, neq, nle, nge, &lt;nwarm=200&gt;, &lt;nstride=25&gt;, &lt;tol=1e-8&gt;, &lt;G&gt;, &lt;LC&gt;, &lt;UC&gt; )

**Descripción:** Genera una muestra aleatoria sujeta a restricciones lineales, restricciones de límites variables y restricciones de cardinalidad en variables de subgrupos de componentes especificados. El argumento numSamples especifica el número de puntos aleatorios que se generarán. El argumento A es la matriz de coeficientes de restricción lineal. El argumento b es el vector de valores del lado derecho de las restricciones lineales. Los argumentos L y U son vectores de los límites inferior y superior de las variables, respectivamente. Los argumentos neq, nle y nge son el número de restricciones de igualdad, el número de restricciones menores o iguales y el número de restricciones mayores o iguales, respectivamente. El argumento nwarm es el número de repeticiones previas antes de que los puntos se escriban en la matriz de salida. El argumento nstride es el número de repeticiones entre cada punto que se escribe en la matriz de salida. El argumento tol es la tolerancia. El argumento G es un vector de índices que asigna las variables a subgrupos de componentes restringidos, donde los valores faltantes o nulos no pertenecen a un subgrupo restringido. Los argumentos LC y UC son las restricciones de cardinalidad inferior y superior para los subgrupos de componentes restringidos, respectivamente. Tenga en cuenta que las restricciones se deben indicar primero como igualdad, luego como menor o igual y, por último, como mayor o igual.

**JMP Versión agregada:** 20

**Ejemplo 1**

```jsl

A = [1 1 1, 1 2 0];
b = [1, 0.5];
L = [0, 0, 0.1];
U = [1, 1, 1];
points = Random Linearly Constrained Uniform( 2000, A, b, L, U, 1, 0, 1, 300, 50 );
dt = As Table( points );
tobj = Report( Ternary Plot( X( :Col1, :Col2, :Col3 ) ) );
tfr = tobj[scalebox( 1 )] << clone box;
New Window( "Example: Random Linearly Constrained Uniform",
	Outline Box( "Points on a Ternary Plot", tfr ),
	Outline Box( "Constraints",
		Text Box( "X1 + x2 + x3 = 1" ),
		Text Box( "X2 + 2*x2 >= 0.5" )
	),
	Outline Box( "Variable Bounds",
		Text Box( "0 <= x1 <= 1" ),
		Text Box( "0 <= x2 <= 1" ),
		Text Box( ".1 < x3 <= 1" )
	)
);
Close( dt, no save );
Show( "see new window for example output" );

```

**Ejemplo 2**

```jsl

  
A = [1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1];
b = [100];
L = [0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0];
U = [100 100 95 90 100 85 100 90 60 70 75 70 75 100 95 60 80 95 100 100];
nwarm = 100;
nstride = 100;
tol = 1e-8;
// Index the constrained subgroups.  Index = 0 is not in a constrained subgroup.
G = [0 0 1 1 1 1 1 1 2 2 2 2 2 2 2 2 2 2 0 0];
// Lower cardinality constraints for the constrained subgroups
LC = [1 1];
// Upper cardinality constraints for the constrained subgroups
UC = [3 5];
points = Random Linearly Constrained Uniform(
	100,
	A,
	b,
	L,
	U,
	1,
	0,
	0,
	nwarm,
	nstride,
	tol,
	G,
	LC,
	UC
);
dt = As Table( points );

```

### Random LogGenGamma

**Sintaxis:** y = Random LogGenGamma( &lt;mu=0&gt;, &lt;sigma=1&gt;, &lt;lambda=0&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución de log-gamma generalizada con parámetros mu, sigma y lambda.

**JMP Versión agregada:** Antes de la versión 14

```jsl


//produce a single random number
x = Random LogGenGamma( 2, 1.25 );
//produce a vector of random numbers
v = J( 1, 10, Random LogGenGamma( 2, 1.25 ) );
//show results
Show( x, v );

```

### Random Logistic

**Sintaxis:** y = Random Logistic( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución logística.

**JMP Versión agregada:** Antes de la versión 14

```jsl


//produce a single random number
x = Random Logistic( 15, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Logistic( 15, 1 ) );
//show results
Show( x, v );

```

### Random Loglogistic

**Sintaxis:** y = Random Loglogistic( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución log-logística.

**JMP Versión agregada:** Antes de la versión 14

```jsl


//produce a single random number
x = Random Loglogistic( 15, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Loglogistic( 15, 1 ) );
//show results
Show( x, v );

```

### Random Lognormal

**Sintaxis:** y = Random Lognormal( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución log-normal con parámetro de localización mu y parámetro de escala sigma.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl


//produce a single random number
x = Random Lognormal( -1, 1.5 );
//produce a vector of random numbers
v = J( 1, 10, Random Lognormal( -1, 1.5 ) );
//show results
Show( x, v );

```

**Ejemplo 2**

```jsl

exrlnn = 30;
New Window( "Example: Random Lognormal and Empirical Distribution",
	exrlny = Graph Box(
		Y Scale( -0.05, 1.05 ),
		X Scale( -.05, 10 ),
		Pen Color( "red" );
		exranlnorm = J( Round( exrlnn ), 1, . );
		For( k = 1, k <= Round( exrlnn ), k++,
			exranlnorm[k] = Random Lognormal( -1, 1.5 )
		);
		exranlnorm = Sort Ascending( exranlnorm );
		H Line( 0, exranlnorm[1], 0 );
		For( k = 2, k <= Round( exrlnn ), k++,
			H Line( exranlnorm[k - 1], exranlnorm[k], (k - 1) / Round( exrlnn ) )
		);
		H Line( exranlnorm[Round( exrlnn )], 10, 1.0 );
		Pen Color( "blue" );
		Y Function( Normal Distribution( Log( tdeq ), -1, 1.5 ), tdeq );
		Text( {-4, 0.8}, " n=", Round( exrlnn ) );
	),
	H List Box( Slider Box( 10, 2000, exrlnn, exrlny << reshow ), Text Box( " n" ) )
);

```

### Random Multivariate Normal

**Sintaxis:** y = Random Multivariate Normal( mean, covar, &lt;nrows=1&gt;)

**Descripción:** Devuelve un matriz nrows por p aleatoria a partir de una distribución normal multivariante con vector de medias mean y matriz de covarianza (semidefinida positiva) covar, donde p se define como el número de filas de covar.

**JMP Versión agregada:** 15

```jsl

meanvec = 1 :: 3;
covar = [1 .6 .6, .6 1 .6, .6 .6 1];
randmvnRow = Random Multivariate Normal( meanvec, covar );
randmvnMat = Random Multivariate Normal( meanvec, covar, 10 );

```

### Random Negative Binomial

**Sintaxis:** y = Random Negative Binomial( r, p )

**Descripción:** Devuelve un número aleatorio de no eventos hasta que sucedan r eventos, para eventos con probabilidad p.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exnbpp = 0.3;
exnbpn = 20;
exnbrn = Random Negative Binomial( 20, 0.3 );
New Window( "Example: Neg Binomial Probability",
	exnbpy = Graph Box(
		Y Scale( 0, 0.04 ),
		X Scale( -1, 100 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( exnbpk = 0, exnbpk < 1000, exnbpk++,
			V Line( exnbpk, 0, Neg Binomial Probability( exnbpp, exnbpn, exnbpk ) )
		);
		Pen Color( "blue" );,
		Pen Size( 4 ),
		V Line( exnbrn, 0, Neg Binomial Probability( exnbpp, exnbpn, exnbrn ) );
		Text( {1, 0.035}, "n=", Round( exnbpn ), " p=", Round( exnbpp, 2 ) );
		Text(
			{1, 0.030},
			"x=",
			Round( exnbrn, 2 ),
			" Prob=",
			Round( Neg Binomial Probability( exnbpp, exnbpn, exnbrn ), 2 )
		);
	),
	H List Box(
		Button Box( "Generate a Random Negative Binomial Number",
			exnbrn = Random Negative Binomial( 20, 0.3 );
			exnbpy << reshow;
		)
	)
);

```

### Random Normal

**Sintaxis:** y = Random Normal( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución normal con media mu y desviación estándar sigma.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl


//produce a single random number
x = Random Normal();
//produce a vector of random numbers
v = J( 1, 10, Random Normal() );
//show results
Show( x, v );

```

**Ejemplo 2**

```jsl

exGcoordX = J( 50, 1, . );
exGcoordY = J( 50, 1, . );
For( k = 1, k <= 50, k++,
	exGcoordX[k] = Random Uniform( -5, 5 )
);
For( k = 1, k <= 50, k++,
	exGcoordY[k] = exGcoordX[k] + Random Normal()
);
New Window( "Random Normal, Linear Regression, and Outlier",
	V List Box(
		Graph Box(
			framesize( 600, 300 ),
			X Scale( -10, 10 ),
			Y Scale( 1.5 * Min( exGcoordY ), 1.5 * Max( exGcoordY ) ),
			double buffer,
			exsx = Sum( exGcoordX ),
			exsy = Sum( exGcoordY ),
			exsxx = Sum( (exGcoordX) ^ 2 );
			exsxy = Sum( exGcoordX :* exGcoordY );
			exbeta1 = (100 * exsxy - exsx * exsy) / (100 * exsxx - exsx * exsx);
			exbeta0 = (exsy - exbeta1 * exsx) / 100;
			exx1 = Min( exGcoordX );
			exy1 = exbeta0 + exbeta1 * Min( exGcoordX );
			exx2 = Max( exGcoordX );
			exy2 = exbeta0 + exbeta1 * Max( exGcoordX );
			Line( {exx1, exy1}, {exx2, exy2} );
			Marker Size( 5 );
			Drag Marker( exGcoordX, exGcoordY );
			Drag Text( [-7], [-5], "drag any marker" );
		)
	)
);

```

### Random Normal Mixture

**Sintaxis:** y = Random Normal Mixture( meanvec, sdvec, probvec )

**Descripción:** Devuelve un número aleatorio de una mezcla de distribuciones normales con medias de grupo meanvec, desviaciones estándar de grupo sdvec  y probabilidades de grupo probvec.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = New Table( "Example",
	New Column( "Rand NM",
		set formula( Random Normal Mixture( [-3, 3], [1, 1], [.3, .7] ) )
	)
);
dt << add rows( 1000 );
Distribution( Continuous Distribution( Column( :Rand NM ), Vertical( 0 ) ) );

```

### Random Poisson

**Sintaxis:** y = Random Poisson( lambda )

**Descripción:** Devuelve un número aleatorio de una distribución Poisson.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exrpoilambda = 20;
exrpoilsz = Log( 300 );
New Window( "Example: Random Poisson and Empirical Distribution",
	exrpoiy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 50 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		exrpoisz = Round( Exp( exrpoilsz ) );
		exrpoisamp = J( Round( exrpoisz ), 1, . );
		exrpoifreq = J( Round( 50 + 1 ), 1, . );
		For( exrpoik = 1, exrpoik <= Round( exrpoisz ), exrpoik++,
			exrpoisamp[exrpoik] = Random Poisson( exrpoilambda )
		);
		For( exrpoik = 0, exrpoik <= 50, exrpoik++,
			exrpoifreq[exrpoik + 1] = Sum( exrpoisamp <= exrpoik ) / Round( exrpoisz )
		);
		exrpoitmp1 = 0;
		exrpoitmp2 = 0;
		For( exrpoik = 0, exrpoik < 50, exrpoik++,
			H Line( exrpoik, exrpoik + 1, Poisson Distribution( exrpoilambda, exrpoik ) );
			V Line(
				exrpoik + 1,
				Poisson Distribution( exrpoilambda, exrpoik ),
				Poisson Distribution( exrpoilambda, exrpoik + 1 )
			);
		);
		Pen Color( "blue" );
		For( exrpoik = 0, exrpoik < 50, exrpoik++,
			H Line( exrpoik, exrpoik + 1, exrpoifreq[exrpoik + 1] );
			V Line( exrpoik + 1, exrpoifreq[exrpoik + 1], exrpoifreq[exrpoik + 2] );
		);
		Text(
			{10, 0.2},
			" \!U03BB=",
			Round( exrpoilambda, 2 ),
			" sample size=",
			Round( exrpoisz )
		);
	),
	H List Box(
		Slider Box( Log( 10 ), Log( 5000 ), exrpoilsz, exrpoiy << reshow ),
		Text Box( " random sample size" )
	)
);

```

### Random Reset

**Sintaxis:** Random Reset( seed number )

**Descripción:** Reinicia las secuencias aleatorias con una nueva semilla.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Random Reset( 1 );
Random Normal();

```

### Random Seed State

**Sintaxis:** Random Seed State( &lt;seed state&gt; )

**Descripción:** Recupera o restaura el estado de semilla aleatoria, hacia o desde un objeto blob.

**JMP Versión agregada:** Antes de la versión 14

```jsl

r = Random Seed State();
Random Seed State( r );

```

### Random SEV

**Sintaxis:** y = Random SEV( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución SEV.

**JMP Versión agregada:** Antes de la versión 14

```jsl


//produce a single random number
x = Random SEV( 50, 5 );
//produce a vector of random numbers
v = J( 1, 10, Random SEV( 50, 5 ) );
//show results
Show( x, v );

```

### Random SHASH

**Sintaxis:** y = Random SHASH( gamma, delta, theta, sigma )

**Descripción:** Devuelve un número aleatorio de la distribución sinh-arcsinh (SHASH).

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl


//produce a single random number
x = Random SHASH( 0, 1, 0, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random SHASH( 0, 1, 0, 1 ) );
//show results
Show( x, v );

```

**Transformación SHASH**

```jsl

gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );
Show( result1, result2 );

```

### Random Shuffle

**Sintaxis:** y = Random Shuffle( matrix )

**Descripción:** Devuelve la matriz con los elementos reordenados aleatoriamente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exA = [1 2 6, 3 5 8];
Random Shuffle( exA );

```

### Random SVD

**Sintaxis:** {U, M, V} = Random SVD( X , &lt;nSingularValues=min(nRow,nCol)&gt;, &lt;nOver=10&gt;, &lt;nIter=2&gt;)

**Descripción:** Calcula la descomposición en valores singulares de la matriz X utilizando la descomposición en valores singulares aleatorizada y devuelve una lista {U, M, V} tal que U*diag(M)*V` es igual a X.

**JMP Versión agregada:** 17

```jsl

Random SVD( [11 22, 33 44], 1 );

```

### Random t

**Sintaxis:** y = Random t( df, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución t.

**JMP Versión agregada:** Antes de la versión 14

```jsl


//produce a single random number
x = Random t( 2 );
//produce a vector of random numbers
v = J( 1, 10, Random t( 2 ) );
//show results
Show( x, v );

```

### Random Triangular

**Sintaxis:** y = Random Triangular( a, b, c ); y = Random Triangular( b, c ); y = Random Triangular( b )

**Descripción:** Devuelve un número aleatorio de una distribución triangular con límite inferior a, modo b y límite superior c. Random Triangular(b,c) equivale a Random Triangular(0,b,c). Random Triangular(b) equivale a Random Triangular(0,b,1).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Random Reset( 13579 );
x = Random Triangular( 0.8 );
Random Reset( 13579 );
y = Random Triangular( 0, 0.8, 1 );
Show( x, y );

```

### Random Uniform

**Sintaxis:** y = Random Uniform( &lt;min&gt;, &lt;max&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución uniforme entre min y max, exclusive.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl


//produce a single random number
x = Random Uniform( 1, 10 );
//produce a vector of random numbers
v = J( 1, 10, Random Uniform( 1, 10 ) );
//show results
Show( x, v );

```

**Ejemplo 2**

```jsl

Random Uniform( 1, 10 );

```

### Random Weibull

**Sintaxis:** y = Random Weibull( beta, &lt;alpha=1&gt; )

**Descripción:** Devuelve un número aleatorio de una distribución Weibull.

**JMP Versión agregada:** Antes de la versión 14

```jsl


//produce a single random number
x = Random Weibull( 3, 20 );
//produce a vector of random numbers
v = J( 1, 10, Random Weibull( 3, 20 ) );
//show results
Show( x, v );

```

### Random ZI Negative Binomial

**Sintaxis:** y = Random ZI Negative Binomial( lambda, sigma, pi )

**Descripción:** Devuelve un número aleatorio de una distribución binomial negativa con inflación de ceros junto con el parámetro de ubicación lambda, el parámetro de escala sigma y el parámetro de inflación de ceros pi.

**JMP Versión agregada:** 19

**Ejemplo 1**

```jsl

exnbpp = 0.3;
exnbpn = 20;
rnb = Random ZI Negative Binomial( 25, .5, .05 );
New Window( "Example: Zero Inflated Negative Binomial",
	exnbpy = Graph Box(
		Y Scale( 0, 0.075 ),
		X Scale( -1, 100 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( i = 0, i < 100, i++,
			V Line( i, 0, ZI Negative Binomial Probability( i, 25, .5, .05 ) )
		);
		Pen Color( "blue" );,
		Pen Size( 4 ),
		V Line( rnb, 0, ZI Negative Binomial Probability( rnb, 25, .5, .05 ) );
		Text(
			{25, 0.06},
			"lambda=",
			Round( 25 ),
			", sigma=",
			Round( .5, 2 ),
			", pi=",
			Round( .05, 2 )
		);
		Text(
			{25, 0.05},
			"x=",
			Round( rnb, 2 ),
			", Prob=",
			Round( ZI Negative Binomial Probability( rnb, 25, .5, .05 ), 4 )
		);
	),
	H List Box(
		Button Box( "Generate a Random Zero Inflated Negative Binomial Number",
			rnb = Random ZI Negative Binomial( 25, .5, .05 );
			exnbpy << reshow;
		)
	)
);

```

**Ejemplo 2**

```jsl

Random Reset( 19 );
dt = As Table( J( 1000, 1, Random ZI Negative Binomial( 5, 2, .2 ) ) );
Column( 1 ) << set name( "Random ZiNB" );
dt << Distribution(
	Continuous Distribution(
		Column( :Random ZiNB ),
		Vertical( 0 ),
		Fit ZI Negative Binomial,
		CDF Plot( 1 )
	)
);

```

### Random ZI Poisson

**Sintaxis:** y = Random ZI Poisson Binomial( lambda, pi )

**Descripción:** Devuelve un número aleatorio de una distribución Poisson con inflación de ceros junto con el parámetro de ubicación lambda y el parámetro con inflación de ceros pi.

**JMP Versión agregada:** 19

**Ejemplo 1**

```jsl

exnbpp = 0.3;
exnbpn = 20;
rp = Random ZI Poisson( 20, .05 );
New Window( "Example: Zero Inflated Poisson",
	exnbpy = Graph Box(
		Y Scale( 0, 0.1 ),
		X Scale( -1, 60 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( i = 0, i < 100, i++,
			V Line( i, 0, ZI Poisson Probability( i, 20, .05 ) )
		);
		Pen Color( "blue" );,
		Pen Size( 4 ),
		V Line( rp, 0, ZI Poisson Probability( rp, 20, .05 ) );
		Text( {30, 0.06}, "lambda=", Round( 20 ), ", pi=", Round( .05, 2 ) );
		Text(
			{30, 0.05},
			"x=",
			Round( rp, 2 ),
			", Prob=",
			Round( ZI Poisson Probability( rp, 20, .05 ), 4 )
		);
	),
	H List Box(
		Button Box( "Generate a Random Zero Inflated Poisson Number",
			rp = Random ZI Poisson( 20, .05 );
			exnbpy << reshow;
		)
	)
);

```

**Ejemplo 2**

```jsl

Random Reset( 19 );
dt = As Table( J( 1000, 1, Random ZI Poisson( 5, .2 ) ) );
Column( 1 ) << set name( "Random ZIP" );
dt << Distribution(
	Continuous Distribution(
		Column( :Random ZIP ),
		Vertical( 0 ),
		Fit ZI Poisson,
		CDF Plot( 1 )
	)
);

```

### Range

**Sintaxis:** y = Range( x1, ... )

**Descripción:** Devuelve los valores mínimo y máximo entre los argumentos combinados, que pueden ser argumentos escalares, matriz o lista.

**JMP Versión agregada:** 15

```jsl

Eval List( {Range( Pi(), e() ), Range( [33 44 22] )} );

```

### Range Slider Box

**Sintaxis:** y = Range Slider Box( minValue, maxValue, lowVariable, highVariable, script )

**Descripción:** Devuelve un cuadro de visualización que muestra un control deslizante de rango que va de minValue a maxValue. A medida que la posición de los dos selectores deslizantes varía, sus valores se coloca en lowVariable y highVariable y se ejecuta la secuencia de comandos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

sliderLowerValue = .5;
sliderUpperValue = .7;
New Window( "Example",
	Panel Box( "Range Slider",
		tb1 = Text Box( "Low Value: " || Char( sliderLowerValue ) ),
		tb2 = Text Box( "High Value: " || Char( sliderUpperValue ) ),
		sb = Range Slider Box(
			0,
			1,
			sliderLowerValue,
			sliderUpperValue,
			tb1 << Set Text( "Low Value: " || Char( sliderLowerValue ) );
			tb2 << Set Text( "High Value: " || Char( sliderUpperValue ) );
		)
	)
);

```

### Rank

**Sintaxis:** y = Rank Index( x )

**Descripción:** Devuelve un vector de índices que, si se usa como índice del vector original v, sirve para ordenarlo por rango. Los valores faltantes se excluyen.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Rank( [33, 22, 44, 11, ., 33] );

```

### Rank Index

**Sintaxis:** y = Rank Index( x )

**Descripción:** Devuelve un vector de índices que, si se usa como índice del vector original v, sirve para ordenarlo por rango. Los valores faltantes se excluyen.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Rank Index( [33, 22, 44, 11, ., 33] );

```

### Ranking

**Sintaxis:** y = Ranking( x, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**Descripción:** Devuelve un vector con los rangos de los valores de x, de menor a mayor indicado como de 1 a n, con desempate arbitrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Ranking( [33, 22, 44, 11, 33] );
Ranking( [22, 11, 33, 11, 44, 55, 44, 44, 44], <<Tie( "minimum" ) );

```

### Ranking Tie

**Sintaxis:** y = Ranking Tie( x, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**Descripción:** Devuelve un vector con los rangos de los valores de x, pero con los rangos de los empates promediados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Ranking Tie( [33, 22, 44, 11, 33] );

```

### Recode

**Sintaxis:** recode(string|number|list, {&lt;transform&gt;, ...}, &lt;Multiple Response (Separator(sepChar))&gt;, &lt;By Word(Delimiters(&lt;chars&gt;)&gt;)

**Descripción:** Aplica las transformaciones especificadas a los valores de entrada y devuelve el resultado. Las opciones Respuesta múltiple y Por palabra dividen los datos de caracteres proporcionados en valores de entrada más pequeños. Una vez determinados los valores de entrada, las transformaciones se aplican a esos valores por separado.

Las variables de JSL especiales se rellenan durante la ejecución del comando:

	_rcNow es el valor actual de la entrada después de las transformaciones anteriores.

	_rcOrig es el valor original de la entrada.

**JMP Versión agregada:** 15

**Ejemplo 1**

```jsl

Recode(
	"27513-0000",
	{Regex( _rcNow, "(\d\d\d\d\d)-\d+", "\1", GLOBALREPLACE ), Num( _rcNow )}
);

```

**Ejemplo 2**

```jsl

Recode(
	"A B C",
	{Map Value( _rcNow, {"A", "Apple", "B", "Banana"}, Unmatched( "Unknown fruit" ) )},
	By Word
);

```

### Rect

**Sintaxis:** Rect( left, top, right, bottom, &lt;fill=0&gt; ); Rect( {left, top}, {right, bottom} )

**Descripción:** Dibuja un rectángulo y lo rellena si el parámetro es distinto de cero.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "Green" );
		Pen Size( 2 );
		Fill Color( "Red" );
		Rect( 15, 75, 65, 55, 1 );
		Rect( 10, 80, 70, 50 );
	)
);

```

### Recurse

**Sintaxis:** y = Recurse( x1, ... )

**Descripción:** Llama a la función de contención.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex rev = Function( {s},
	If( Length( s ) <= 1,
		s,
		Recurse( Substr( s, 2 ) ) || Left( s, 1 )
	)
);
ex rev( "abcd" );

```

### Regex

**Sintaxis:** result = Regex( source, pattern, &lt;format, &lt;IGNORECASE&gt;, &lt;GLOBALREPLACE&gt;&gt; )

**Descripción:** Busca en el texto source una coincidencia con pattern. El format predeterminado es "\\0" (la coincidencia completa) pero podría ser "Fred" (para un reemplazo constante) o "\\1" (para utilizar el texto que coincida con el primer paréntesis de pattern). Devuelve valores faltantes numéricos para la ausencia de coincidencias. De forma predeterminada, deben coincidir las mayúsculas y minúsculas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Regex(
	"   Are you there Alice?, asked Jerry.",
	" (here|there) (\w+).+(said|asked) (\w+)\.",
	"  I am \1, \4, replied \2."
);

```

### Regex Match

**Sintaxis:** Regex Match( source, pattern, &lt;replacement | NULL&gt;, &lt;MATCHCASE&gt; )

**Descripción:** Ejecuta una coincidencia de expresión regular y devuelve una lista de texto totalmente coincidente y las coincidencias de cada referencia inversa creada por un paréntesis abierto. Opcionalmente, el tercer argumento puede especificar una cadena de sustitución para toda la coincidencia; la cadena de sustitución puede utilizar referencias inversas.

**JMP Versión agregada:** Antes de la versión 14

```jsl


source = "believe";
// [aeiou] matches exactly one vowel
// .*? is a reluctant (vs greedy) match. try it without the ? to see the greedy behavior
// \1 is a back reference to the first ( group -- [aeiou] is inside the first ( group
matches = Regex Match(
	source, // a variable allows updating some text
	"([aeiou])(.*?)(\1)", // a regex with parens makes back references
	">\2<" // the match is replaced by text that uses a back reference
);
Show( source, matches );
// results:
// source = "b>li<ve";
// matches = {"elie", "e", "li", "e"};
// notes:
// matches[1] is the entire match AND the part that will be replaced
// matches[2] is back ref \1  this is the letter e matched by [aeiou]
// matches[3] is back ref \2  this is the letter li matched by .*?
// matches[4] is back ref \3  this is another letter e match by \1, which was an e
//
// the * operator is greedy by default, taking as many characters as it can, and
// only backing up if required. Adding the ? makes it reluctant, taking characters
// one at a time and allowing the remaining pattern to have a chance earlier.

```

### Register Addin

**Sintaxis:** Register Addin( uniqueId, homeFolder, &lt;displayName(name)&gt;, &lt;MinJMPVersion(version)&gt;, &lt;MaxJMPVersion(version)&gt;, &lt;AutoLoad(0|1)&gt; )

**Descripción:** Register an add-in. An Autoload value of 1 forces the add-in to load when registered. A value of 0 leaves the add-in unloaded. If AutoLoad is not specified the addin.def setting will be used if found otherwise the default will be for the add-in to be loaded.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Register Addin(
	"com.mycompany.myaddin",
	"$DOCUMENTS/myaddin",
	displayname( "Sample Addin" )
);

```

### Remove

**Sintaxis:** y = Remove( x, &lt;i&gt;, &lt;n=1&gt; ); y = Remove( x, {list} )

**Descripción:** Devuelve una copia de la lista x, eliminando n elementos a partir del elemento i-ésimo o eliminando una lista de elementos especificada en el argumento list.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Remove( {11, 22, 33, 44, 55}, 3, 2 );

```

### Remove Color Theme

**Sintaxis:** Remove Color Theme("Name"|{"Name", &lt;flags&gt;, {color, ...}, &lt;{position, ...}&gt;})

**Descripción:** Quita un tema de color personalizado de la lista global, por nombre o por el objeto de tema de color completo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Remove Color Theme( "Yellow To Blue" );

```

### Remove Custom Functions

**Sintaxis:** Remove Custom Functions({function 1 full name, function 2 full name, ...} | function full name)

**Descripción:** Elimina una lista de funciones personalizadas del entorno.

**JMP Versión agregada:** 14

```jsl

Remove Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Remove From

**Sintaxis:** Remove From( x, &lt;i&gt;, &lt;n=1&gt; )

**Descripción:** Modifica la lista, el arreglo asociativo o el cuadro de visualización x quitando elementos. Los arreglos asociativos especifican el elemento que se quitará mediante un valor clave i. Las listas y cuadros de visualización empiezan quitando elementos por el que está en posición i. Una lista quitará múltiples elementos de una vez si se especifica la opción n. Tenga en cuenta que el argumento x debe ser una variable.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

ex = {11, 22, 33, 44, 55};
Remove From( ex, 3, 2 );
ex;

```

**Ejemplo 2**

```jsl

ex = ["a" => 10, "b" => 3, "c" => 12, => 0];
Remove From( ex, "c" );
ex;

```

**Ejemplo 3**

```jsl

New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Remove From( hlist, 1 );

```

### Rename Directory

**Sintaxis:** rc = Rename Directory( old, new )

**Descripción:** Cambia el nombre de un directorio sin moverlo ni copiarlo. El nuevo nombre NO incluye ninguna ruta de acceso. Devuelve 1 si se ha cambiado el nombre del directorio. Devuelve 0 si no se ha podido cambiar el nombre del directorio o si la ruta de acceso no es válida.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Delete Directory( "$TEMP/subD" );
Delete Directory( "$TEMP/Loss Function Templates" );
rc0 = Copy Directory( "$SAMPLE_DATA/Loss Function Templates", "$TEMP" );
rc1 = Rename Directory( "$TEMP/Loss Function Templates", "subD" /* NO PATH */ );
rc2 = Directory Exists( "$TEMP/Loss Function Templates" );
rc3 = Directory Exists( "$TEMP/subD" );
rc4 = Delete Directory( "$TEMP/subD" );
rc5 = Directory Exists( "$TEMP/subD" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Rename File

**Sintaxis:** rc = Rename File( old, new )

**Descripción:** Cambia el nombre de un archivo sin moverlo ni copiarlo. El nuevo nombre NO incluye ninguna ruta de acceso. Devuelve 1 si se ha cambiado el nombre del archivo. Devuelve 0 si no se ha podido cambiar el nombre del archivo. Lanza un error cuando la ruta de acceso no es válida o no existe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc1 = Rename File( "$TEMP/x.jmp", "y.jmp" /* NO PATH */ );
rc2 = File Exists( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/y.jmp" );
rc4 = Delete File( "$TEMP/y.jmp" );
rc5 = File Exists( "$TEMP/y.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) || " " ||
Char( rc4 ) || " " || Char( rc5 );/* 1 1 0 1 1 0 */

```

### Repeat

**Sintaxis:** s = Repeat( x, n, &lt;m=1&gt; )

**Descripción:** Devuelve el texto, la matriz o una lista especificados por el argumento x concadenados consigo mismo n veces. Si x es un número o una matriz, n indica la repetición vertical y el argumento opcional m designa la repetición horizontal.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show( Repeat( {"A", "B"}, 3 ), Repeat( 2, 3 ), Repeat( 2, 1, 3 ) );

```

### Report

**Sintaxis:** y = Report( platform object )

**Descripción:** Devuelve una referencia al árbol de visualización correspondiente al informe de una plataforma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Report( Bivariate( Y( :weight ), X( :height ), Fit Line ) );

```

### Resample Freq

**Sintaxis:** Resample Freq( &lt;rate=1&gt;, &lt;column&gt; )

**Descripción:** Genera un conteo de frecuencia para muestreo con reemplazo, útil para muestras bootstrap. Si no se indica ningún argumento, la función genera un remuestreo del 100%. El argumento rate especifica la tasa de remuestreo. Si se especifica el argumento column, el tamaño muestral elegido es rate multiplicado por la suma de la columna especificada. Una rate negativa indica que se permiten las frecuencias fraccionales.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Freq", numeric, formula( Resample Freq() ) );
New Window( "w", theBox = V List Box() );
For( i = 1, i <= 30, i++,
	Column( "Freq" ) << EvalFormula;
	theBox << append(
		V List Box( Bivariate( Y( :height ), X( :weight ), Freq( :Freq ), Fit Line( 1 ) ) )
	);
);
newDt = theBox["Parameter Estimates", Table Box( 1 )] << MakeCombinedDataTable;
newDt << Distribution( Y( :Estimate ), By( :Term ), Horizontal Layout( 1 ) );
theBox << CloseWindow;

```

### Return

**Sintaxis:** Return(&lt;Expr&gt;, ..., &lt;ExprN&gt;)

**Descripción:** Devuelve un valor de expresión de una función definida por el usuario

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

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

**Ejemplo 2**

```jsl

f = Function( {a, b},
	Return( a - b, a + b )
);
{lo, hi} = f( 10, 1 );
Show( lo, hi );
Show( f( 7, 15 ) );

```

### Reverse

**Sintaxis:** y = Reverse( x )

**Descripción:** Devuelve una copia de la lista x con los elementos en orden inverso.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Reverse( {11, 22, 33, 44, 55} );

```

### Reverse Into

**Sintaxis:** Reverse Into( x )

**Descripción:** Modifica la lista o el cuadro de visualización x con el orden de los elementos invertido. Tenga en cuenta que el argumento x debe ser una variable.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

ex = {11, 22, 33, 44, 55};
Reverse Into( ex );
ex;

```

**Ejemplo 2**

```jsl

New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Reverse Into( hlist );

```

### Revert Menu

**Sintaxis:** Revert Menu()

**Descripción:** Vuelve a recuperar los menús predeterminados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

/* Reverts menus back to factory default settings. */

```

### RGB Color

**Sintaxis:** y = RGB Color( r, g, b ); y = RGB Color( {r, g, b} )

**Descripción:** Devuelve un número de color a partir de los componentes rojo, verde y azul, todos entre 0 y 1. RGB Color(1, 1, 1) corresponde al color blanco.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "RGB Color Example", 
    /* 1 through 16 are good */ 
	division = 6;
	blocks = division + 1;
	ysize = 400 / Sqrt( division );
	xsize = ysize * blocks;
	fract = 1 / division;
    /* 100 is default axis range */
	yBlockSize = 100 / blocks;
	xBlockSize = 100 / (blocks * blocks);
	Graph(
		frameSize( xsize, ysize ),
		For( blue = 0, blue <= 1, blue += fract,
			For( red = 0, red <= 1, red += fract,
				For( green = 0, green <= 1, green += fract,
					y = red / fract * yBlockSize;
					x = green / fract * xBlockSize + blue / fract * xBlockSize * blocks;
                    /* here's the example */
					Fill Color( RGB Color( red, green, blue ) );
					Rect( x, y, x + xBlockSize, y + yBlockSize, 1 );
				)
			)
		)
	);
);

```

### Right

**Sintaxis:** sub = Right( s, n, &lt;filler&gt; )

**Descripción:** Devuelve una versión truncada o rellenada de la cadena de caracteres o lista original s. El resultado contiene los n caracteres o elementos de la lista de la derecha, rellenados con filler por la izquierda si la longitud de s es menor que n.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Right( "http://www.jmp.com", 3 );

```

### Robust PCA

**Sintaxis:** {A,E} = Robust PCA( X , &lt;Lambda(2/sqrt(max(nrow,ncol)))&gt;, &lt;tolerance=1e-10&gt;,&lt;maxit(75)&gt;,&lt;Center(1)&gt;,&lt;Scale(1)&gt;

**Descripción:** Descompone de forma robusta los datos en una matriz de rango bajo y una matriz dispersa de los residuos. Los valores atípicos se detectan en los residuos. También puede imputar los valores faltantes.

**JMP Versión agregada:** 16

```jsl

X = [1 -3, -1 -2, -3 -4, -4 -3, -3 1, 3 3] * [-2 5 -1 -2 1, 4 5 -4 -3 1];
X[2, 3] += 15;
Result = Robust PCA( X, Center( 0 ), Scale( 0 ), Lambda( .80 ) );

```

### Root

**Sintaxis:** y = Root( x, &lt;n=2&gt; )

**Descripción:** Devuelve la raíz n-ésima de x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Round( Root( 2, 3 ), 4 ) /* cube root */;

```

### Round

**Sintaxis:** y = Round( x, &lt;n&gt; )

**Descripción:** Redondea x a n dígitos después de la coma decimal (o a 0 dígitos si no se especifica n). Tenga en cuenta que el argumento n puede ser negativo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Round( 213, -1 );

```

### Row

**Sintaxis:** y = Row(); Row() = y

**Descripción:** Devuelve la fila actual en una tabla de datos. Se puede usar como L-value. Restablezca la fila actual asignando un valor de 0.

**JMP Versión agregada:** Antes de la versión 14

**Establecer fila**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
:height * :weight;

```

**Restablecer fila**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( 5 );
Show( Row() );
Row() = 0;

```

### Row State

**Sintaxis:** y = Row State( &lt;dt&gt;, &lt;r&gt; ); Row State( &lt;dt&gt;, &lt;r&gt; ) = y

**Descripción:** Devuelve el estado de la fila actual o de la fila r-ésima de la tabla de datos actual. Si la función Row State() se usa como L-value, cambia el estado de la fila actual (o la r-ésima) de la tabla de datos actual.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, .5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Run Program

**Sintaxis:** obj = Run Program( Executable( "path/etc.exe" ), &lt; Options( {"/a", "/b etc" } ) &gt;, &lt; Parameter( optParm ) &gt;, &lt; Read Function( Function( {this, optParm}, etc ) | "text" | "blob" ) &gt;, &lt; Write Function( Function( {this, optParm}, etc ) ) &gt; )

**Descripción:** Controla un programa externo mediante stdin y stdout.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

RP = Run Program(
	Executable( "PING.EXE"/*path probably not needed*/ ),
	Options( {"-n 5", "localhost"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

**Ejemplo 2**

```jsl

RP = Run Program(
	Executable( "CMD.EXE"/*path probably not needed*/ ),
	Options( {"/a", "/q", "/c dir"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

**Ejemplo 3**

```jsl

commands = {"echo this is a test\!n", "ping -n 1 localhost\!n", "exit\!n"};
icommand = 0;
RP = Run Program(
	Executable( "CMD.EXE" ),
	Options( {"/a", "/q"} ),
	ReadFunction( Function( {this}, Write( this << Read ) ) ),
	WriteFunction(
		Function( {this},
			icommand++;
			If( icommand <= N Items( commands ),
				this << Write( commands[icommand] );
				Show( commands[icommand] );
			,
				this << WriteEOF;
				Show( this << CanRead, this << CanWrite, this << isReadEOF );
			);
		)
	)
);

```

### SAS Name

**Sintaxis:** sasName = SAS Name( string|namelist )

**Descripción:** Convierte los nombres de variables de JMP en una cadena de caracteres que contiene nombres de variables de SAS válidos obtenidos mediante la sustitución de los caracteres especiales y los espacios por guiones bajos. El argumento se puede especificar como cadena de caracteres o lista de cadenas de caracteres.

**JMP Versión agregada:** Antes de la versión 14

```jsl

SAS Name( {"x 1", "x 2"} );

```

### SAS Open For Var Names

**Sintaxis:** nameList = SAS Open For Var Names( path )

**Descripción:** Devuelve una lista de nombres de variables de un conjunto de datos de SAS.

**JMP Versión agregada:** Antes de la versión 14

```jsl

SAS Open For Var Names( "C:\my data\somedata.sas7bdat" );

```

### Save Log

**Sintaxis:** f = Save Log( &lt;path&gt; )

**Descripción:** Escribe los contenidos del registro en la ubicación de archivo especificada. Si la escritura se realiza correctamente, la función devuelve el nombre del archivo creado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Save Log( "$TEMP/log.txt" );
exlogText = Load Text File( "$TEMP/log.txt" );
Substr( exlogText, 1, 30 );

```

### Save Text File

**Sintaxis:** f = Save Text File( path, text|blob, &lt;mode("replace"|"append")&gt; )

**Descripción:** Crea un archivo de texto con el nombre del archivo especificado en el argumento path y los contenidos indicados en el argumento de cadena de caracteres text. Si se guarda correctamente, la función Save Text File() devuelve el nombre de la ruta del archivo creado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Save Text File( "$TEMP/DeleteMe.txt", "The quick brown fox" );
Load Text File( "$TEMP/DeleteMe.txt" );

```

### SbInv

**Sintaxis:** x = SbInv( z, gamma, delta, theta, sigma )

**Descripción:** Transforma una variable normal estándar en una variable Johnson restringida a un intervalo con dos límites.

**JMP Versión agregada:** Antes de la versión 14

```jsl

SbInv( 1.96, 1.5, 2, 1, 2 );

```

### SbTrans

**Sintaxis:** z = SbTrans( x, gamma, delta, theta, sigma )

**Descripción:** Transforma una variable Johnson restringida a un intervalo con dos límites en una variable normal estándar.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Round( SbTrans( 2.114, 1.5, 2, 1, 2 ), 2 );

```

### Scene Box

**Sintaxis:** box = Scene Box( xsize, ysize )

**Descripción:** Devuelve un cuadro de visualización para gráficos en 3D.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Scene = Scene Box( 600, 600 );
Scene << backgroundcolor( 0 );
Scene << showarcball( always );
New Window( "See HelloWorld.jsl in sample scripts", Scene );
Scene << perspective( 45, .2, 20 );
Scene << Translate( 0.0, 0.0, -4.5 );
ex = Scene Display List();
ex << color( .9, .9, .9 );
ex << Text( center, middle, .3, "Hello World" );
Scene << arcball( ex, 1.5 );
Scene << update;

```

### Scene Display List

**Sintaxis:** list = Scene Display List()

**Descripción:** Devuelve una lista de visualización para gráficos en 3D.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex = Scene Display List();
ex << color( .9, .9, .9 );
ex << Text( center, middle, .3, "Hello World" );
exScene = Scene Box( 600, 600 );
exScene << backgroundcolor( 0 );
exScene << showarcball( always );
New Window( "See HelloWorld.jsl in sample scripts", exScene );
exScene << perspective( 45, .2, 20 );
exScene << Translate( 0.0, 0.0, -4.5 );
exScene << arcball( ex, 1.5 );
exScene << update;

```

### Schedule

**Sintaxis:** Schedule( sec, scpt )

**Descripción:** Programa un evento que ejecuta el argumento de script scpt transcurridos sec segundos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Schedule(
	10,
	Beep();
	Print( "Time's up!" );
);

```

### Scheffe Cubic

**Sintaxis:** y = Scheffe Cubic( x1, x2 )

**Descripción:** Evalúa como x1*x2*(x1-x2). Se utiliza para emplear la notación de modelización en modelos de mezcla cúbicos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Scheffe Cubic( [1, -1, 1, -1, 1], [-1, -1, 1, 1, -1] );

```

### Scoring Impute

**Sintaxis:** {imputedRow} = Scoring Impute ( rowWithMissing , VMat, colMeanVec, colStdDevVec)

**Descripción:** Ofrece funcionalidad en streaming para el algoritmo Imputación de datos automatizada (ADI). Los argumentos de entrada son un vector fila que contiene valores faltantes, una matriz de carga (también denominada matriz V) que la genera el algoritmo ADI, un vector de la columna que implica que se ignoren las celdas faltantes y un vector de las desviaciones estándar de la columna que ignora las celdas faltantes. Devuelve el vector fila con los valores faltantes imputados utilizando la estimación de mínimos cuadrados.

**JMP Versión agregada:** 14

```jsl

Scoring Impute(
	[1 2 3 . 4 .],
	[.5 .6, .3 .4, .1 .2, .6 .7, .3 .3, .5 .4],
	[0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1]
);

```

### Script Box

**Sintaxis:** y = Script Box( &lt;s&gt;, &lt;"C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS" | "SQL" | "Text" | "XML"&gt;, &lt;width&gt;, &lt;height&gt; )

**Descripción:** Devuelve un cuadro de visualización para editar un script. De forma predeterminada, el editor tiene el resaltado de sintaxis y el comportamiento JSL.

**JMP Versión agregada:** Antes de la versión 14

**JSL**

```jsl

Script = Script Box( "// This window is editable.", "JSL", 300, 100 );
New Window( "This is a script box", Script );

```

**Script Python**

```jsl

pyscript = "\[import numpy as np
a = np.arange(15).reshape(3, 5)]\";
Script = Script Box( pyscript, "Python", 300, 100 );
New Window( "This is a python script box", Script );

```

### Scroll Box

**Sintaxis:** y = Scroll Box( &lt;Size( x, y )&gt;, displayBox )

**Descripción:** Devuelve un cuadro de visualización que sirve para posicionar un cuadro hijo mayor usando barras de desplazamiento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Outline Box( "Picker",
		Scroll Box(
			Size( 200, 100 ),
			V List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### Second

**Sintaxis:** sec = Second( datetime )

**Descripción:** Devuelve los segundos correspondientes a un valor de fecha y hora, incluida cualquier parte fraccional, de 0 a 60 exclusive.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Second( Today() );

```

### Selected

**Sintaxis:** y = Selected( &lt;rs&gt; );Selected( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Descripción:** Devuelve el componente seleccionado del valor de estado de fila especificado, 0 o 1. Si se usa Selected como L-value, cambia el estado de selección de la fila actual (o la r-ésima) de la tabla de datos actual.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );
Row() = 3;
Selected();

```

### Selected State

**Sintaxis:** rs = Selected State( x )

**Descripción:** Devuelve un valor de estado de fila con la componente de selección ajustada al valor especificado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );

```

### Send

**Sintaxis:** r = obj &lt;&lt; msg( args ); r = obj &lt;&lt; msg; r = Send( obj, msg )

**Descripción:** Envía un mensaje (en forma de expresión) a un objeto.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Bivariate( Y( :weight ), X( :height ) ) << Fit Line;

```

### Sequence

**Sintaxis:** y = Sequence( start, end, &lt;incr=1&gt;, &lt;n=1&gt; )

**Descripción:** Devuelve el Row()-ésimo elemento de la secuencia de números de start a end, incrementado por incr. Cada número de la secuencia se repite n veces. Dada su dependencia de Row(), la función Sequence() resulta útil fundamentalmente en las fórmulas de columna. Para crear secuencias como matrices JSL, consulte Index().

**JMP Versión agregada:** Antes de la versión 14

```jsl

Row() = 3;
Sequence( 1, 9, 2 );

```

### Set Clipboard

**Sintaxis:** Set Clipboard( text )

**Descripción:** Coloca el texto especificado en el portapapeles del sistema que utiliza el menú Edición.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Set Clipboard( "example" );

```

### Set Default Directory

**Sintaxis:** Set Default Directory( path )

**Descripción:** Establece el directorio predeterminado de JMP, que se utiliza como base para determinar rutas relativas subsiguientes.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Set Default Directory( "$SAMPLE_DATA" );
Open( "Big Class.jmp" );

```

### Set Difference

**Sintaxis:** list = Set Difference( list1, list2 )

**Descripción:** Devuelve la lista de elementos que aparecen en list1, pero no en list2. Los elementos se pueden repetir. Si un argumento es una referencia de columna de respuesta múltiple, se trata como una lista de sus valores en la fila actual.

**JMP Versión agregada:** 19

```jsl

Show( Set Difference( {1, 3}, {3, 2} ) );
Show( Set Difference( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );

```

### Set Environment Variable

**Sintaxis:** value = Set Environment Variable( string, &lt; string&gt; )

**Descripción:** Establece el valor de la variable de entorno especificada en el sistema operativo. Si falta el segundo argumento o es una cadena de caracteres vacía, se elimina la variable de entorno.



NOTA: en el sistema operativo Macintosh, en el nombre de la variable se distinguen los caracteres en mayúsculas y minúsculas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Set Environment Variable( "PATH", "some path to a directory" );

```

### Set File Search Path

**Sintaxis:** Set File Search Path(path | {list of paths})

**Descripción:** Establece la lista de directorios actual para buscar archivos para abrirlos. "." significa el directorio actual.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Set File Search Path(
	{Convert File Path( "$SAMPLE_DATA/" ), Convert File Path( "$SAMPLE_DATA/Time Series/" )}
);
Show( Get File Search Path() );
Show( Convert File Path( "Air.jmp", search ) );
Show( Convert File Path( "Full of Air.jmp", search ) );
Show( Convert File Path( "Iris.jmp", search ) );

```

### Set Global Window Handler

**Sintaxis:** Set Global Window Handler( Handler Function )

**Descripción:** Establece una función a la que se llama cada vez que se crea una nueva ventana.

**JMP Versión agregada:** 17

```jsl

Set Global Window Handler(
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);
New Window( "My Window" );
Clear Global Window Handler();

```

### Set Intersection

**Sintaxis:** list = Set Intersect( list1, list2 )

**Descripción:** Devuelve la lista de elementos que aparecen en ambas listas. Los elementos se pueden repetir. Si un argumento es una referencia de columna de respuesta múltiple, se trata como una lista de sus valores en la fila actual.

**JMP Versión agregada:** 19

```jsl

Show( Set Intersection( {1, 3}, {3, 2} ) );
Show( Set Intersection( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << get rows where( Set Intersection( :sports, {"Soccer"} ) != {} );

```

### Set Path Variable

**Sintaxis:** Set Path Variable( name, &lt;value&gt; )

**Descripción:** Establece una variable de ruta, que es un nombre como SAMPLE_DATA, que se sustituye cuando se encuentra en nombres de rutas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Set Path Variable( "SAMPLE_DATA", Get Path Variable( "SAMPLE_DATA" ) );

```

### Set Platform Preference

**Sintaxis:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Descripción:** Establece las preferencias de una plataforma tal como se especifique.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Platform Preferences

**Sintaxis:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Descripción:** Establece las preferencias de una plataforma tal como se especifique.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Preference

**Sintaxis:** Preferences( pref1( value1 ), ... )

**Descripción:** Establece las preferencias tal como se especifique.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Set Preferences

**Sintaxis:** Preferences( pref1( value1 ), ... )

**Descripción:** Establece las preferencias tal como se especifique.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Set Toolbar Visibility

**Sintaxis:** rc = Set Toolbar Visibility( "toolbar-name" | Default | All, &lt;window-class-name | All&gt;, &lt;True | False&gt; )

**Descripción:** Establece la visibilidad de una barra de herramientas determinada para una clase de ventana concreta. El nombre de la barra de herramientas se refiere al nombre interno de la misma. Si se introduce "Default" como nombre de la barra de herramientas, se restablece la barra de herramientas predeterminada para la clase de ventana correspondiente. Ejemplos de nombres de clase de ventana son Data Table, Script, Report y Journal. Si el nombre de clase de ventana es All, entonces se establece la visibilidad de la barra de herramientas especificada en todas las clases de ventanas. 

Devuelve 1 si la operación se ha realizado con éxito y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```jsl


// Make the Analyze toolbar visible in Script windows
Set Toolbar Visibility( "Analyze", Script, true );

// Make the Analyze toolbar visible in all classes of windows
Set Toolbar Visibility( "Analyze", All, true );

// Revert Script windows to the default toolbar set for Script windows
Set Toolbar Visibility( Default, Script );

// Revert all windows to their default toolbar set
Set Toolbar Visibility( Default, All );

```

### Set Union

**Sintaxis:** list = Set Union( list1, list2 )

**Descripción:** Devuelve la lista de elementos que aparecen en cualquier lista. Los elementos se pueden repetir. Si un argumento es una referencia de columna de respuesta múltiple, se trata como una lista de sus valores en la fila actual.

**JMP Versión agregada:** 19

```jsl

Show( Set Union( {1, 3}, {3, 2} ) );
Show( Set Union( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );
all = {};
Open( "$SAMPLE_DATA/Big Class Families.jmp" );
For Each Row( all = Set Union( all, :sports ) );
all = Set Unique( all );
Show( all );

```

### Set Unique

**Sintaxis:** list = Set Unique( list )

**Descripción:** Devuelve la lista de elementos únicos que aparecen en la lista de entrada. Si un argumento es una referencia de columna de respuesta múltiple, se trata como una lista de sus valores en la fila actual.

**JMP Versión agregada:** 19

```jsl

Show( Set Unique( {1, 3, 2} ) );
Show( Set Unique( {1, 3, 4, 3, 3, 2, 3, 5, 3} ) );
Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Row() = 1;
Show( Set Unique( :sports ) );

```

### SEV Density

**Sintaxis:** y = SEV Density( x, mu, sigma )

**Descripción:** Devuelve la densidad en x de una distribución de los valores extremos mínimos con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 50;
sig = 5;
New Window( "Example: SEV Density",
	y = Graph Box(
		Y Scale( 0, .06 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( SEV Density( x, mu, sig ), x );
		Text( {0, .055}, "mu=", Round( mu, 2 ) );
		Text( {0, .045}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( "mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( "sig" ) ), 

);

```

### SEV Distribution

**Sintaxis:** p = SEV Distribution( x, mu, sigma )

**Descripción:** Devuelve la probabilidad en x de una distribución de los valores extremos mínimos con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 50;
sig = 5;
New Window( "Example: SEV Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( SEV Distribution( x, mu, sig ), x );
		Text( {0.1, 0.9}, "mu=", Round( mu, 2 ) );
		Text( {0.1, 0.8}, "sig=", Round( sig, 2 ) );
	),
	H List Box( Slider Box( 0, 100, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) )
);

```

### SEV Quantile

**Sintaxis:** q = SEV Quantile( p, mu, sigma )

**Descripción:** Devuelve el cuantil en p de una distribución de los valores extremos mínimos con localización mu y escala sigma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

mu = 50;
sig = 5;
qq = .5;
New Window( "Example: SEV Quantile",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 60 ),
		Pen Color( "red" );
		Y Function( SEV Distribution( qq, mu, sig ), qq );
		Pen Color( "blue" );
		V Line( SEV Quantile( qq, mu, sig ), 0, 1 );
		Text(
			{0.1, 0.9},
			" mu=",
			Round( mu, 2 ),
			" sig=",
			Round( sig, 2 ),
			" quantile=",
			Round( qq, 2 )
		);
	),
	H List Box( Slider Box( 0, 80, mu, y << reshow ), Text Box( " mu" ) ),
	H List Box( Slider Box( 0, 10, sig, y << reshow ), Text Box( " sig" ) ),
	H List Box( Slider Box( 0.01, 0.99, qq, y << reshow ), Text Box( " quantile" ) )
);

```

### Shade State

**Sintaxis:** rs = Shade State( x )

**Descripción:** Devuelve un valor de estado de fila con la componente de sombreado de color ajustada al valor especificado. Para generar un color válido, se debe combinar con un valor de Hue State().

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Shape

**Sintaxis:** r = Shape( M, nr, &lt;nc&gt;, &lt;&lt;bycol)

**Descripción:** Cambia la forma de la matriz o escalar M en las filas para que sean nr filas por nc columnas. Se permite un valor faltante para nr. Los datos de M se replican según sea necesario para rellenar la matriz nr por nc. El argumento opcional <<bycol rellena los datos por columna. De forma predeterminada, los datos se rellenan por fila. Los usos más comunes son convertir un vector en una matriz o vectorizar una matriz.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List(
	{Shape( [11 22, 33 44], 1, 4 ), Shape( [11 22, 33 44], 1 ), Shape( [11 22, 33 44], ., 4 )
	}
);

```

### Shape Seg

**Sintaxis:** me = Shape Seg( {Path(&lt;path&gt;), ...}, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt; )

**Descripción:** Devuelve un segmento de visualización con una colección de formas. Cada forma dibuja un trazo a lo largo de una trayectoria determinada si el valor del relleno es 0. En caso contrario, pinta el interior de ese trazo. La trayectoria se puede especificar en forma de matriz N x 3 o en forma de texto. Una matriz de trayectoria tiene tres columnas para x, y, y marcas para cada punto de la trayectoria. Los valores de las marcas son 0 para control, 1 para movimiento, 2 para segmento lineal, 3 para segmento cúbico de Bézier, y son negativos si, además, el punto cierra la trayectoria. El formato de texto de la trayectoria es compatible con la sintaxis SVG.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Shape Seg Example",
	Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);

```

### SHASH Density

**Sintaxis:** d = SHASH Density( x, gamma, delta, theta, sigma )

**Descripción:** Devuelve la densidad en x de una distribución sinh-arcsinh (SHASH). La transformación SHASH se puede utilizar para crear datos con una distribución más normal.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

SHASH Density( 0, -1, 2, -2, 3 );

```

**Transformación SHASH**

```jsl

gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );
Show( result1, result2 );

```

### SHASH Distribution

**Sintaxis:** p = SHASH Distribution( q, gamma, delta, theta, sigma )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución sinh-arcsinh (SHASH) sea inferior que q. La transformación SHASH se puede utilizar para crear datos con una distribución más normal.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

gamma = 0.5;
delta = 1;
theta = 1;
sigma = 1;
New Window( "Example: SHASH Distribution",
	jsuc = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -2, 2 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( SHASH Distribution( q, gamma, delta, theta, sigma ), q );
		Text(
			{-1, 0.9},
			"\!U03B3=",
			Round( gamma, 2 ),
			" \!U03B4=",
			Round( delta, 2 ),
			" \!U03B8=",
			Round( theta, 2 ),
			" \!U03C3=",
			Round( sigma, 2 )
		);
	),
	H List Box( Slider Box( 0, 1, gamma, jsuc << reshow ), Text Box( " \!U03B3" ) ),
	H List Box( Slider Box( 0, 2, delta, jsuc << reshow ), Text Box( " \!U03B4" ) ),
	H List Box( Slider Box( 0, 2, theta, jsuc << reshow ), Text Box( " \!U03B8" ) ),
	H List Box( Slider Box( 0, 2, sigma, jsuc << reshow ), Text Box( " \!U03C3" ) )
);

```

**Transformación SHASH**

```jsl

gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );
Show( result1, result2 );

```

### SHASH Quantile

**Sintaxis:** q = SHASH Quantile( p, gamma, delta, theta, sigma )

**Descripción:** Devuelve el cuantil de una distribución sinh-arcsinh (SHASH), el valor para el cual la probabilidad de que un valor aleatorio sea menor es p. La transformación SHASH se puede utilizar para crear datos con una distribución más normal.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

SHASH Quantile( .5, 1, 2, 3, 1 );

```

**Transformación SHASH**

```jsl

gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );
Show( result1, result2 );

```

### SHASHInv

**Sintaxis:** x = SHASHInv( z, gamma, delta, theta, sigma )

**Descripción:** Transforma una variable normal estándar en una variable con distribución sinh-arcsinh (SHASH).

**JMP Versión agregada:** 14

```jsl

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

**Sintaxis:** z = SHASHTrans( x, gamma, delta, theta, sigma )

**Descripción:** Transforma una variable con distribución sinh-arcsinh (SHASH) en una variable con una distribución normal estándar. La transformación SHASH se puede utilizar para crear datos con una distribución más normal.

**JMP Versión agregada:** 14

```jsl

gamma = 1;
delta = .5;
theta = -1;
sigma = 2;
x = 3;
result1 = SHASHTrans( x, gamma, delta, theta, sigma );
result2 = SinH( gamma + delta * ArcSinH( (x - theta) / sigma ) );
Show( result1, result2 );

```

### Sheet Part

**Sintaxis:** y = Sheet Part( title, childbox )

**Descripción:** Devuelve un cuadro de visualización que contiene el cuadro de visualización childbox indicado como argumento con el título especificado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### Shift

**Sintaxis:** y = Shift( x, &lt;n=1&gt; )

**Descripción:** Devuelve una copia de la lista x con los primeros n elementos movidos al final de la lista o bien, si n es negativo, los últimos n elementos movidos al principio.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Shift( {11, 22, 33, 44, 55}, 2 );

```

### Shift Into

**Sintaxis:** Shift Into( x, &lt;n=1&gt; )

**Descripción:** Modifica la lista o el cuadro de visualización x con los primeros n elementos desplazados hasta el final de la lista, o, si n es negativo, los últimos n elementos se desplazarán al inicio. Tenga en cuenta que el argumento x debe ser una variable.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

ex = {11, 22, 33, 44, 55};
Shift Into( ex, -2 );
ex;

```

**Ejemplo 2**

```jsl

New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Shift Into( hlist, -2 );

```

### Short Date

**Sintaxis:** s = Short Date( datetime, &lt;format&gt; )

**Descripción:** Devuelve una representación numérica y específica de la configuración local (MM/DD/AAAA) de un valor de fecha y hora.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Short Date( Today() );

```

### Shortest Edit Script

**Sintaxis:** list = Shortest Edit Script(A,B); matrix = Shortest Edit Script( strings( A, B, matrix(1), limit(9999) ) ); list = Shortest Edit Script( lines( A, B, separators("defaults to newline"), ignore("defaults to none")|ignoreWhiteSpace(), matrix(0), limit(9999) ) ); matrix = Shortest Edit Script( sequences(nA, nB, Function({iA,iB}, adata[iA] == bdata[ib] ) ) )

**Descripción:** Devuelve uno de los scripts de edición más cortos para convertir la cadena de caracteres A en la cadena de caracteres B. La forma simple sólo devuelve una lista. strings() y lines() disponen de una opción para devolver una matriz o una lista, mientras que sequences() solamente devuelve una matriz. El elemento opcional limit() detiene la función antes de tiempo si la lista de edición contiene más inserciones y eliminaciones que los indicados por limit. lines() compara líneas en lugar de caracteres. Los elementos opcionales ignore("caracteres") o ignoreWhiteSpace() tienen como valor predeterminado no ignorar ningún carácter. ESC detiene la función si es necesario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

editList = Shortest Edit Script( "time flies like an arrow", "fruit flies like a banana" );
common = "";/* assemble a longest common subsequence */For( i = 1, i <= N Items( editList ),
	i++,
	If( editList[i][1] == "Common", /* or Insert or Remove */common = common || editList[i][2
		] /* the snippet */
	)
);
common;

```

### Show

**Sintaxis:** Show( x, ... )

**Descripción:** Muestra el nombre y el valor de los argumentos en el registro, uno por línea.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show( 355 / 113, Pi() );

```

### Show Addin Builder Dialog

**Sintaxis:** Show Addin Builder Dialog()

**Descripción:** Abre un cuadro de diálogo que se puede utilizar para generar complementos personalizados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show Addin Builder Dialog();

```

### Show Addins Dialog

**Sintaxis:** Show Addins Dialog()

**Descripción:** Abre un cuadro de diálogo que muestra el estado de todos los complementos registrados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show Addins Dialog();

```

### Show Classes

**Sintaxis:** Show Classes( &lt; &lt;class name | class reference&gt;, ... &gt; )

**Descripción:** Muestra el contenido de todas las clases definidas por el usuario.

**JMP Versión agregada:** Antes de la versión 14

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
Show Classes();

```

### Show Commands

**Sintaxis:** Show Commands( &lt;keyword=Builtins&gt; )

**Descripción:** Crea una o más tablas de datos que contienen información sobre varios componentes de JSL. El argumento keyword determina el contenido de la tabla de salida. Especifique Elementos integrados (el valor predeterminado) para las funciones y operadores integrados. Especifique Elementos para scripts para todos los comandos que admitan scripts para los objetos. Especifique las traducciones del inglés y las versiones localizadas de los comandos que admiten scripts. Especifica los cuadros de visualización para los comandos que admiten scripts relacionados con los cuadros de visualización y los segmentos de visualización. Especifique Nombres que admiten scripts para los nombres de los objetos que admiten scripts. Especifique Nombres de plataforma para los nombres de las plataformas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show Commands();

```

### Show Globals

**Sintaxis:** Show Globals()

**Descripción:** Lista todos los símbolos globales definidos actualmente y sus valores.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show Globals();

```

### Show Namespaces

**Sintaxis:** Show Namespaces( &lt; &lt;namespace reference&gt;, ... &gt; )

**Descripción:** Muestra el contenido de todos los espacios de nombres definidos por el usuario, tanto los que tienen nombre asignado como los anónimos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Namespace(
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
Show Namespaces( "complex" );
Delete Namespaces( "complex" );

```

### Show Preferences

**Sintaxis:** Show Preferences()

**Descripción:** Muestra en el registro la configuración actual de preferencias.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show Preferences();

```

### Show Properties

**Sintaxis:** Show Properties( object )

**Descripción:** Muestra en el registro los mensajes a los que un objeto puede responder.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show Properties( Current Data Table() );

```

### Show Symbols

**Sintaxis:** Show Symbols()

**Descripción:** Lista todos los símbolos definidos actualmente y sus valores.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show Symbols();

```

### Simplify Expr

**Sintaxis:** resultExpr = Simplify Expr( expr( ... ) )

**Descripción:** Devuelve una expresión equivalente que simplifica la expresión del argumento de distintos modos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Simplify Expr( Expr( 2 * 3 * a + b * (a + 3 - c) - a * b ) );

```

### Sin

**Sintaxis:** y = Sine( x )

**Descripción:** Devuelve el seno trigonométrico de x, donde x es un ángulo en radianes.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Sine( Pi() / 6 );

```

### Sine

**Sintaxis:** y = Sine( x )

**Descripción:** Devuelve el seno trigonométrico de x, donde x es un ángulo en radianes.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Sine( Pi() / 6 );

```

### SinH

**Sintaxis:** y = SinH( x )

**Descripción:** Devuelve el seno hiperbólico de x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

SinH( 1 );

```

### Slider Box

**Sintaxis:** box = Slider Box(minValue, maxValue, variable, script, &lt;set width(n)&gt;, &lt;rescale slider(minValue, maxValue)&gt;)

**Descripción:** Devuelve un cuadro de visualización que muestra un control deslizante que va de minValue a maxValue. A medida que la posición del selector deslizante varía, el valor se coloca en variable y se ejecuta la secuencia de comandos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

sliderValue = .6;
New Window( "Example",
	Panel Box( "Slider Box",
		tb = Text Box( "Value: " || Char( sliderValue ) ),
		sb = Slider Box(
			0,
			1,
			sliderValue,
			tb << Set Text( "Value: " || Char( sliderValue ) )
		)
	)
);

```

### SlInv

**Sintaxis:** x = SlInv( z, gamma, delta, theta, &lt;sigma=1&gt; )

**Descripción:** Transforma una variable normal estándar en una variable Johnson SL.

**JMP Versión agregada:** Antes de la versión 14

```jsl

SlInv( 1.96, 1.5, 2, 1 );

```

### SlTrans

**Sintaxis:** z = SlTrans( x, gamma, delta, theta, &lt;sigma=1&gt; )

**Descripción:** Transforma una variable Johnson SL en una variable normal estándar.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Round( SlTrans( 2.259, 1.5, 2, 1 ), 2 );

```

### Sobol Quasi Random Sequence

**Sintaxis:** points = Sobol Quasi Random Sequence(nDim, nRow)

**Descripción:** Genera una secuencia de números casi aleatorios que llenan el espacio con la secuencia de Sobol en hasta 4000 dimensiones.

**JMP Versión agregada:** Antes de la versión 14

```jsl

A = Sobol Quasi Random Sequence( 3, 100 );
As Table( A );
Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### Socket

**Sintaxis:** socketHandle = Socket( &lt;STREAM | DGRAM&gt; )

**Descripción:** Crea una variable de socket que se puede comunicar con sockets en el propio ordenador u otro conectado a la red. El argumento predeterminado es STREAM. Puede probarlo con el sitio web de su propia empresa.

**JMP Versión agregada:** Antes de la versión 14

```jsl


// see the socket's OBJECT messages in the scripting index for better examples
tCall = Socket();
tcall << Ioctl( FIONBIO, 1 );
rc = tCall << connect( "www.jmp.com", "80" );
If( rc[2] == "ok",
	tCall << <<Char To Blob(
		"GET /en_us/home.html HTTP/1.1~0d~0aHost: www.jmp.com~0d~0aConnection: Close~0d~0a~0d~0a",
		"ASCII~HEX"
	);
	While( 1,
		tMessage = tCall << Recv( 100000 );
		If(
			tMessage[2] == "ok",
				Show( Length( tMessage[3] ) ); //typically about six chunks of around 5-20K bytes
		,
			Starts With( tMessage[2], "WOULDBLOCK" ),
				Show( "waiting" ) // sometimes data might not be available yet
		,
			Starts With( tMessage[2], "CLOSED" ),
				Break(); // this is the desired result
		, // else
			Show( tMessage );
			Stop();
		);
	);
	tCall << Close();// done
, // else
	Show( rc );
	Stop();
);

```

### Solve

**Sintaxis:** y = Solve( A, B )

**Descripción:** Resuelve el sistema lineal A*x=B para x. La función Solve() equivale a Inverse(A)*B si A es no singular. Nótese que el argumento A debe ser una matriz cuadrada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Solve( [1 1, -1 4], [11, 14] );

```

### Sort Ascending

**Sintaxis:** y = Sort Ascending( x )

**Descripción:** Devuelve una copia de la lista o la matriz x con los elementos ordenados en orden ascendente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Sort Ascending( {111, 212, 133, 114, 55} );

```

### Sort Descending

**Sintaxis:** y = Sort Descending( x )

**Descripción:** Devuelve una copia de la lista o la matriz x con los elementos ordenados en orden descendente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Sort Descending( {111, 212, 133, 114, 55} );

```

### Sort List

**Sintaxis:** y = Sort List( x )

**Descripción:** Devuelve una copia de la lista x con los elementos ordenados en orden ascendente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Sort List( {111, 212, 133, 114, 55} );

```

### Sort List Into

**Sintaxis:** Sort List Into( x )

**Descripción:** Modifica la lista x ordenando los elementos en orden ascendente. Nótese que el argumento x debe ser una variable.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex = {111, 212, 133, 114, 55};
Sort List Into( ex );
ex;

```

### Spacer Box

**Sintaxis:** y = Spacer Box( &lt;Size( x, y )&gt;, &lt;Color( c )&gt;)

**Descripción:** Devuelve un cuadro de visualización que se puede usar para mantener un espacio entre otros cuadros de visualización o para rellenar una celda en un Lineup Box. Los argumentos Size se especifican en píxeles, y el argumento Color es cualquier color de JSL válido.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Lineup Box( N Col( 3 ),
		Text Box( "a" ),
		Spacer Box(),
		Text Box( "b" ),
		Spacer Box(),
		Text Edit Box( "Under Spacer Box" )
	)
);

```

### Sparse SVD

**Sintaxis:** {U, M, V} = Sparse SVD( X , &lt;nSingularValues=min(nRow,nCol)&gt;, &lt;tolerance=1e-10&gt;)

**Descripción:** Calcula la descomposición en valores singulares de la matriz X con el método Lanczos parcialmente ortogonalizado y reiniciado de forma implícita, para las matrices dispersas devolviendo una lista {U, M, V} como que U*diag(M)*V` equivale a X.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Sparse SVD( [11 22, 33 44], 1, 1e-8 );

```

### Speak

**Sintaxis:** Speak( text, &lt;Wait( sync )&gt; )

**Descripción:** Convierte en voz el texto, siempre que el sistema operativo lo admita. El argumento opcional Wait(true) sirve para especificar el retraso de la ejecución del script hasta que finalice la locución.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Speak( "Hello" );

```

### Spin Box

**Sintaxis:** y = Spin Box( &lt;script&gt; )

**Descripción:** Devuelve un cuadro de visualización que sirve para mostrar un botón con controles hacia arriba/abajo. Se llama al argumento script con un argumento que indica la dirección de la flecha en la que se ha hecho clic (negativo es hacia abajo, positivo es hacia arriba). Una magnitud de 1 indica un solo clic y se pueden usar valores mayores para indicar una acción repetida.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Lineup Box(
		2,
		nb = Number Edit Box( 3 ),
		sb = Spin Box( Function( {value}, nb << Increment( value ) ) )
	)
);
nb << Set Increment( 1 );

```

### Spline Coef

**Sintaxis:** coef = Spline Coef( x, y, lambda, &lt;weights&gt; )

**Descripción:** Devuelve una matriz de cinco columnas de coeficientes en el siguiente orden: knots||a||b||c||d para cada uno de los valores únicos en x. El parámetro de alisado lambda debe ser un valor positivo, donde los valores más altos de lambda dan como resultado una mayor rigidez de spline. El vector weights opcional especifica un peso para cada valor en x. Un peso de cero quita el punto correspondiente del ajuste de spline.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Spline Eval( 0 :: 10, Spline Coef( 0 :: 10, Sqrt( 0 :: 10 ), 100 ) );

```

### Spline Eval

**Sintaxis:** yhat = Spline Eval( x, coef, &lt;extrapolation=-1&gt; )

**Descripción:** Evalúa las predicciones de spline con la matriz coef de la misma forma que la devuelve la función Spline Coef(). extrapolation indica hasta qué distancia más allá del rango de spline, como una fracción del rango, se extenderá la evaluación antes de devolver valores faltantes.

**JMP Versión agregada:** Antes de la versión 14

```jsl


New Window( "Spline Fit",
	window:x = 20 :: 80;
	window:y = 50 + Sin( (20 :: 80) / 10 ) * 40 + J(
		1,
		N Col( window:x ),
		Random Normal( 0, 10 )
	);
	window:loglambda = 2;
	window:g = Graph Box(
		Pen Color( "blue" );
		window:m = Spline Coef( window:x, window:y, Power( 10, window:loglambda ) );
		Marker( window:x, window:y );
		Y Function( Spline Eval( a, window:m, 0.05 ), a );
	);,
	H List Box(
		Text Box( "Lambda: " ),
		Slider Box( -2, 5, window:loglambda, window:g << reshow )
	)
)
;

```

### Spline Smooth

**Sintaxis:** yhat = Spline Smooth( x, y, lambda, &lt;weights&gt; )

**Descripción:** Devuelve los valores predichos alisados a partir de un ajuste de spline. El parámetro de alisado lambda debe ser un valor positivo, donde los valores más altos de lambda dan como resultado una mayor rigidez de spline. El vector weights opcional especifica un peso para cada valor en x. Un peso igual a cero quita el punto correspondiente del ajuste de spline.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Spline Smooth( 0 :: 10, Sqrt( 0 :: 10 ), 100 );

```

### Sqrt

**Sintaxis:** y = Sqrt( x )

**Descripción:** Devuelve la raíz cuadrada positiva del argumento x, que puede ser un número, una matriz o una lista de números.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Round( Sqrt( 2 ), 4 );

```

### Squash

**Sintaxis:** y = Squash( x )

**Descripción:** Devuelve 1 / (1 + Exp( x )), que convierte un número en el dominio -∞...+∞ dentro del intervalo 1...0. La función Squash() es útil en regresión logística.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Squash( 10 );

```

### Squish

**Sintaxis:** y = Logist( x )

**Descripción:** Devuelve 1 / (1 + Exp( -x )), que convierte un número en el dominio -∞...+∞ dentro del intervalo 0...1. La función Logist() es útil en regresión logística.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Logist( 2 );

```

### SSQ

**Sintaxis:** y = SSQ( x1, ... )

**Descripción:** Devuelve la suma de cuadrados de todos los elementos

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {SSQ( Pi(), e() ), SSQ( [33 44 22 20 30] )} );

```

### Starts With

**Sintaxis:** b = Starts With( s, sub )

**Descripción:** Devuelve 1 si s comienza por sub y 0 en caso contrario. Los argumentos s y sub pueden ser ambos cadenas de caracteres o ambos listas. Equivale a Left( s, Length( sub )) == sub.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Starts With( "http://www.jmp.com", "http:" );

```

### Status Msg

**Sintaxis:** Status Msg( message )

**Descripción:** Muestra el mensaje especificado en la barra de estado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Status Msg( "calculating..." );

```

### Std Dev

**Sintaxis:** y = Std Dev( x1, ... )

**Descripción:** Devuelve la desviación estándar de los argumentos o de los valores dentro de una única matriz o lista indicada como argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {Std Dev( Pi(), e() ), Std Dev( [33 44 22 20 30] )} );

```

### Step

**Sintaxis:** y = Step( x, x1, y1, x2, y2, ... ) y = Step( x, [x1, x2, ...], [y1, y2, ...] )

**Descripción:** Devuelve el argumento yi correspondiente al valor xi más grande que cumple que xi es menor o igual que el argumento x. Nótese que los argumentos xi se deben especificar en orden.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Step( 2.5, [1 2 3], [15, 20, 30] );

```

### STK:ArchSpiral

**Sintaxis:** STK:ArchSpiral(t, &lt;a = 1&gt;, &lt;n = 1&gt;)

**Descripción:** Takes in a given angle t (in radians) and returns the x,y coordinate pair as a matrix for location on the Archimedean Spiral, given scaling parameter, "a" and the "n"-th root

**Ejemplo 1**

```jsl

STK:ArchSpiral( 3, 1, 1 );

```

**Ejemplo 2**

```jsl

For Each( {v, i}, 1 :: 30, Show( STK:ArchSpiral( v ) ) );

```

### STK:arctan2

**Sintaxis:** STK:arctan2(x,y)

**Descripción:** The arctangent function that takes in 2 arguments. See https://en.wikipedia.org/wiki/Atan2 for motivation and details.

**Ejemplo 1**

```jsl

STK:arctan2( 3, 4 );

```

**Ejemplo 2**

```jsl

STK:arctan2( 3, 4 );

```

### STK:Cart2Polar

**Sintaxis:** STK:Cart2Polar(x,y)

**Descripción:** Runs both the Radius() and Theta() in one function, returning the pair in a matrix.

**Ejemplo 1**

```jsl

STK:Cart2Polar( 3, 4 );

```

**Ejemplo 2**

```jsl


x = [1, -1, 1, -1];
y = [1, 1, -1, -1];

For Each( {{a, b}, index}, Across( x, y ), Show( STK:Cart2Polar( a, b ) ) );

```

### STK:deg2rad

**Sintaxis:** STK:deg2rad(d)

**Descripción:** Converts a value from degrees to radians

**Ejemplo 1**

```jsl

STK:deg2rad( 45 );

```

**Ejemplo 2**

```jsl

STK:um2mm( 45 );

```

### STK:DieIndex

**Sintaxis:** STK:DieIndex(x,y)

**Descripción:** Combines the x- and y-die coordinate columns into a single text column. For use with the STK generated wafer shapefiles.

**Ejemplo 1**

```jsl

STK:DieIndex( 3, 4 );

```

**Ejemplo 2**

```jsl

Example;

```

### STK:LPCVDSim

**Sintaxis:** STK:LPCVDSim(x, y, &lt;time = 30&gt;, &lt;temp = 600&gt;, &lt;press = 20&gt;, &lt;flow = 2&gt;, &lt;gas1 = 1&gt;, &lt;gas2 = 1&gt;, &lt;r = 150&gt;, &lt;tbase = 200&gt;)

**Descripción:** A simulation of a hypothetical LPCVD profile. Optional parameters include Deposition Time (time = 30), Deposition Temperature (temp = 600), Total Chamber Pressure (press = 20), Gas Flow Rate (flow = 2), Reagent Gas 1 Flow (gas1 = 1), Reagent Gas 2 Flow (gas2 = 1), Wafer Radius (r = 150), Baseline Film Thickness (tbase = 200).



NOTE: This simulator is entirely empirical and for demonstration, teaching, or testing purposes only.

**Ejemplo 1**

```jsl

STK:LPCVDSim( 0, 0 );

```

**Ejemplo 2**

```jsl

STK:LPCVDSim( 0, 0, 100 );

```

### STK:mm2um

**Sintaxis:** STK:mm2um(x)

**Descripción:** Converts a value from millimeters (mm) to microns (um).

**Ejemplo 1**

```jsl

STK:mm2um( 3 );

```

**Ejemplo 2**

```jsl

STK:mm2um( 3 );

```

### STK:MShape

**Sintaxis:** STK:MShape( m )

**Descripción:** Returns the shape of the matrix as a [nCols nRows] vector.

**Ejemplo 1**

```jsl

STK:MShape( J( 13, 20 ) );

```

**Ejemplo 2**

```jsl

STK:MShape( J( 13, 20 ) );

```

### STK:Polar2Cart

**Sintaxis:** STK:Polar2Cart(x,y)

**Descripción:** Runs both the xCart() and yCart() in one function, returning the pair in a matrix. Assumes theta is in radians.

**Ejemplo 1**

```jsl

STK:Polar2Cart( 1, Pi() / 4 );

```

**Ejemplo 2**

```jsl


x = [1, -1, 1, -1];
y = [1, 1, -1, -1];

For Each( {{a, b}, index}, Across( x, y ),
	p = STK:Cart2Polar( a, b );
	c = STK:Polar2Cart( p[1], p[2] );
	Show( p, c );
);

```

### STK:ProcessSim

**Sintaxis:** STK:ProcessSim(n, &lt;radius = 150&gt;, &lt;stat = "Mean"&gt;, &lt;result = "summary"&gt;)

**Descripción:** A simulation of a hypothetical Process based on the LPCVDSim Function. Returns a single value by default using any desired statistic JMP provides directly. A matrix of the measurement coordinates and result value are optional by providing "full" as the final argument

**Ejemplo 1**

```jsl

STK:ProcessSim( 13 );

```

**Ejemplo 2**

```jsl

STK:ProcessSim( 13, 150 );

```

**Ejemplo 3**

```jsl

STK:ProcessSim( 100, 150, "Std Dev", "full" );

```

### STK:rad2deg

**Sintaxis:** STK:rad2deg(r)

**Descripción:** Converts a value from radians to degrees

**Ejemplo 1**

```jsl

STK:rad2deg( 0.79 );

```

**Ejemplo 2**

```jsl

STK:um2mm( 0.79 );

```

### STK:Radius

**Sintaxis:** STK:Radius(x,y)

**Descripción:** Uses the Pythagorean Transform to convert X,Y data pairs to a radius.

**Ejemplo 1**

```jsl

STK:Radius( 3, 4 );

```

**Ejemplo 2**

```jsl

STK:Radius( 3, 4 );

```

### STK:Theta

**Sintaxis:** STK:Theta(x,y)

**Descripción:** Uses the arccosine function to return the angle of an X,Y data pair in radians.

**Ejemplo 1**

```jsl

STK:Theta( 3, 4 );

```

**Ejemplo 2**

```jsl

STK:Theta( 3, 4 );

```

### STK:um2mm

**Sintaxis:** STK:um2mm(x)

**Descripción:** Converts a value from microns to millimeters.

**Ejemplo 1**

```jsl

STK:um2mm( 3 );

```

**Ejemplo 2**

```jsl

STK:um2mm( 3 );

```

### STK:xCart

**Sintaxis:** STK:xCart(r,t)

**Descripción:** Takes in a radius and angle (in radians) and returns the x-component of the cartesian coordinate pair.

**Ejemplo 1**

```jsl

STK:xCart( 1, Pi() / 4 );

```

**Ejemplo 2**

```jsl

STK:xCart( 1, Pi() / 4 );

```

### STK:yCart

**Sintaxis:** STK:yCart(r,t)

**Descripción:** Takes in a radius and angle (in radians) and returns the y-component of the cartesian coordinate pair

**Ejemplo 1**

```jsl

STK:yCart( 1, Pi() / 4 );

```

**Ejemplo 2**

```jsl

STK:yCart( 1, Pi() / 4 );

```

### Stop

**Sintaxis:** Stop()

**Descripción:** Finaliza inmediatamente la ejecución de un script JSL.

**JMP Versión agregada:** Antes de la versión 14

```jsl

For( i = 1, i <= 10, i++,
	If( i == 7, Stop() );
	Print( "i=" || Char( i ) );
);

```

### Straight Line Depreciation

**Sintaxis:** x = Straight Line Depreciation( cost, salvage, life )

**Descripción:** Devuelve la devaluación en línea recta de un activo en un período determinado. Equivale a la función SLN de Microsoft Excel.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Straight Line Depreciation( 1000, 100, 3 );

```

### String Col Box

**Sintaxis:** y = String Col Box( title, {strings} )

**Descripción:** Devuelve un cuadro de visualización para mostrar las cadenas de caracteres especificadas en el argumento strings, que es una lista de cadenas de caracteres.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### String Col Edit Box

**Sintaxis:** y = String Col Edit Box( title, {strings} )

**Descripción:** Devuelve un cuadro de visualización para mostrar las cadenas de caracteres especificadas en el argumento strings, que es una lista de cadenas de caracteres.

**JMP Versión agregada:** Antes de la versión 14

```jsl

a = b = c = "";
New Window( "Example",
	Modal,
	<<Return Result,
	Outline Box( "Table", Table Box( seb = String Col Edit Box( "names", {a, b, c} ) ) )
);

```

### Students t Density

**Sintaxis:** p = t Density( q, df, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve la función de densidad t de Student.

**JMP Versión agregada:** Antes de la versión 14

```jsl

tdedf = 1;
New Window( "Example: Students t Density",
	tdegr = Graph Box(
		Y Scale( -.05, 0.45 ),
		X Scale( -8, 8 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Density( tdeq, Exp( tdedf ) ), tdeq );
		H Line( 2, 3, 0.3 );
		Pen Color( "blue" );
		Y Function( Normal Density( tdeq ), tdeq );
		H Line( 2, 3, 0.25 );
		Text( {2, 0.35}, "df=", Round( Exp( tdedf ), 2 ) );
		Text( {3.5, 0.3}, "Student t" );
		Text( {3.5, 0.25}, "Normal" );
	),
	H List Box(
		Text Box( "df " ),
		Slider Box( Log( 0.1 ), Log( 1000 ), tdedf, tdegr << reshow )
	)
);

```

### Students t Distribution

**Sintaxis:** p = t Distribution( q, df, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución t de Student sea menor que q.

**JMP Versión agregada:** Antes de la versión 14

```jsl

tdidf = 1;
New Window( "Example: Students t Distribution",
	tdigr = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Distribution( tdiq, tdidf ), tdiq );
		Text( {-4.5, 0.9}, "df=", Round( tdidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 1, 10, tdidf, tdigr << reshow ) )
);

```

### Students t Quantile

**Sintaxis:** q = t Quantile( p, df, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve el cuantil de una distribución t de Student, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** Antes de la versión 14

```jsl

extqdf = 1;
extqqq = 0.5;
New Window( "Example: Students t Quantile",
	extqgr = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Distribution( q, Round( extqdf ) ), q );
		Pen Color( "blue" );
		V Line( t Quantile( extqqq, Round( extqdf ) ), 0, 1 );
		Text( {-4.5, 0.9}, "df=", Round( extqdf, 2 ), " quantile=", Round( extqqq, 2 ) );
	),
	H List Box( Slider Box( 1, 30, extqdf, extqgr << reshow ), Text Box( " df" ) ),
	H List Box( Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ), Text Box( " quantile" ) ), 

);

```

### Subscribe to Data Table List

**Sintaxis:** aSub = Subscribe to Data Table List( &lt;subscriber name | ""&gt;, &lt;OnOpen(fn) | OnClose(fn) | On Rename(fn)&gt;)

**Descripción:** Se suscribe a la lista de tablas de datos para recibir una notificación al añadir o cerrar una nueva tabla de datos.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "closing" );
	Print( dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnClose( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );

```

**Ejemplo 2**

```jsl

f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab, b},
	dtname = (dtab << getname());
	Print( "renaming ", b, " to ", dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnRename( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << setname( "xxx" );

```

### Subscript

**Sintaxis:** y = x[i]; y = m[row, col]; y = Subscript( x, i )

**Descripción:** Devuelve el valor i-ésimo de un objeto indexable, que puede ser una columna de una tabla de datos, una matriz, una lista o un elemento de visualización de un informe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

{11, 12, 13}[2];

```

### Substitute

**Sintaxis:** y = Substitute( x, patternExpr1, replacementExpr1, ... ) y = Substitute( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

**Descripción:** Devuelve una copia de la cadena, lista o expresión x, donde cada una de las instancias de cada expresión de patrón está sustituida por la expresión de sustitución correspondiente. El argumento opcional <<IGNORECASE habilita la búsqueda de coincidencias sin distinguir entre mayúsculas y minúsculas si x es una cadena.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Substitute( Expr( a + Sqrt( a ) ), Expr( a ), Expr( b ) );

```

**Ejemplo 2**

```jsl

Substitute( "All things considered", "All", "Some" );

```

**Ejemplo 3**

```jsl

lst = {"a", "b", "c"};
Substitute( lst, "a", "A" );

```

**Ejemplo 4**

```jsl

Substitute( "All things considered", {"things", "All"}, {"ideas", "Some"} );

```

**Ejemplo 5**

```jsl

Substitute( "Apple,orange,banana-grape",
	Items( Get Punctuation Characters() || "-'", "" ), " "
);

```

**Ejemplo 6**

```jsl

Substitute( "Apple,APPLE,apple", "apple", "orange", <<IGNORECASE );

```

### Substitute Into

**Sintaxis:** Substitute Into( x, patternExpr1, replacementExpr1, ... ) Substitute Into( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

**Descripción:** Modifica la cadena, lista o expresión x, donde cada una de las instancias de cada expresión de patrón está sustituida por la expresión de sustitución correspondiente. Tenga en cuenta que el argumento x debe ser una variable. El argumento opcional <<IGNORECASE habilita la búsqueda de coincidencias sin distinguir entre mayúsculas y minúsculas si x es una cadena.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

ex = Expr( a + Sqrt( a ) );
Substitute Into( ex, Expr( a ), Expr( b ) );
Name Expr( ex );

```

**Ejemplo 2**

```jsl

ex = "All things considered";
Substitute Into( ex, "All", "Some" );
Show( ex );

```

**Ejemplo 3**

```jsl

lst = {"a", "b", "c"};
Substitute Into( lst, "a", "A" );
Show( lst );

```

**Ejemplo 4**

```jsl

s = "Apple,APPLE,apple";
Substitute Into( s, "apple", "orange", <<IGNORECASE );
Show( s );

```

### Substr

**Sintaxis:** sub = Substr( s, start, &lt;count&gt; )

**Descripción:** Devuelve la parte de la cadena de caracteres s que se compone de count caracteres comenzando a partir de la posición start. Si count es negativo o está ausente, significa el resto de la cadena de caracteres. Un valor negativo de start significa empezar a start caracteres del final. La función Substr() también se puede aplicar a listas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {Substr( "undergo", 4 ), Substr( {10, 11, 12, 13, 14}, 2, 3 )} );

```

### Subtract

**Sintaxis:** y = x0 - x1; y = Subtract( x0, x1, ... )

**Descripción:** Resta todos los argumentos subsiguientes al primer argumento. Los argumentos pueden ser números, matrices o listas de números.

**JMP Versión agregada:** Antes de la versión 14

```jsl

6 - 2 - 1;

```

### Subtract To

**Sintaxis:** y -= x; Subtract To( y, x )

**Descripción:** Resta un valor a una variable o una lista de variables.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex = 1;
ex -= 2;
ex;

```

### SuInv

**Sintaxis:** x = SuInv( z, gamma, delta, theta, sigma )

**Descripción:** Transforma una variable normal estándar en una variable Johnson sin límites.

**JMP Versión agregada:** Antes de la versión 14

```jsl

SuInv( 1.96, 1.5, 2, 1, 2 );

```

### Sum

**Sintaxis:** y = Sum( x1, ... )

**Descripción:** Devuelve la suma de los argumentos o de los valores dentro de una única matriz o lista indicada como argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {Sum( Pi(), e() ), Sum( [33 44 22 20 30] )} );

```

### Sum Of Years Digits Depreciation

**Sintaxis:** x = Sum Of Years Digits Depreciation( cost, salvage, life, per )

**Descripción:** Devuelve la devaluación de un activo durante un período determinado calculado proporcionalmente al orden numérico del año. Equivale a la función SYD de Microsoft Excel.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Sum Of Years Digits Depreciation( 1000, 100, 3, 2 );

```

### Summarize

**Sintaxis:** Summarize( &lt;dt&gt;, nameBy=By( colBy ), name1=statName1( col1 ), ... )

**Descripción:** Calcula diversos estadísticos de resumen en una columna By. Los nombres de los estadísticos son Conteo, Suma, Media, Máx. o Máximo, Mín. o Mínimo, Desviación estándar, Correlación, Cuantil, Primero. Los estadísticos solo se calculan para columnas numéricas. Los resultados se almacenan en forma de matrices en variables con los nombres especificados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize( exg = By( :sex ), exm = Mean( :height ) );
Eval List( {exg, Round( exm, 1 )} );

```

### Summarize YByX

**Sintaxis:** Summarize YByX( X(x columns),Y(y columns), Group(grouping columns), Freq(freq column), Weight(Weight column))

**Descripción:** Calcula todas las combinaciones de Ajustar Y en función de X

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize YByX( X( :age, :height ), Y( :sex, :weight ) );

```

### Summation

**Sintaxis:** y = Summation( assignExpr, limit, bodyExpr )

**Descripción:** Devuelve la suma de los resultados de evaluar los argumentos bodyExpr, aumentando cada vez la variable del argumento assignExpr hasta que sea mayor o igual que el argumento limit.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Summation( i = 0, 10, 1 / Factorial( i ) );

```

### Suppress Formula Eval

**Sintaxis:** Suppress Formula Eval( &lt;suppress=1&gt; )

**Descripción:** Suprime la evaluación de las fórmulas en todas las tablas de datos si el argumento es distinto de cero.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Suppress Formula Eval( 1 );

```

### SuTrans

**Sintaxis:** z = SuTrans( x, gamma, delta, theta, sigma )

**Descripción:** Transforma una variable Johnson sin límites en una variable normal estándar.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Round( SuTrans( 1.46, 1.5, 2, 1, 2 ), 2 );

```

### SVD

**Sintaxis:** {U, M, V} = SVD( X )

**Descripción:** Calcula la descomposición en valores singulares de la matriz X y devuelve una lista {U, M, V} tal que U*diag(M)*V` es igual a X.

**JMP Versión agregada:** Antes de la versión 14

```jsl

SVD( [11 22, 33 44] );

```

### SVD LAPACK

**Sintaxis:** {U, M, V} = SVD LAPACK( X )

**Descripción:** Calcula la descomposición en valores singulares de la matriz X y devuelve una lista {U, M, V} tal que U*diag(M)*V` es igual a X.

**JMP Versión agregada:** 17

```jsl

SVD LAPACK( [11 22, 33 44] );

```

### Sweep

**Sintaxis:** y = Sweep( A, &lt;indices&gt; )

**Descripción:** Devuelve el barrido de la matriz A según los pivotes diagonales indicados por indices. Es una forma de invertir una matriz de pivote en pivote.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exMat = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];
exMatswp = Sweep( exMat, [1, 2, 3, 4] );
exMatinv = Inverse( exMat );
Show( exMatswp );
Show( exMatinv );

```

### Sym Matrix Mult BLAS

**Sintaxis:** y = Sym Matrix Mult BLAS( A, B, ... )

**Descripción:** Realiza una multiplicación de matrices, donde A es una matriz simétrica. Los argumentos de las matrices deben ser conformables: NCol(A)==NRow(B).

**JMP Versión agregada:** 17

```jsl

exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatA = exMatA` * exMatA;
exMatB = [1 2, 1 2, 1 2];
exMatM2 = Sym Matrix Mult BLAS( exMatA, exMatB );

```

### t Density

**Sintaxis:** p = t Density( q, df, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve la función de densidad t de Student.

**JMP Versión agregada:** Antes de la versión 14

```jsl

tdedf = 1;
New Window( "Example: Students t Density",
	tdegr = Graph Box(
		Y Scale( -.05, 0.45 ),
		X Scale( -8, 8 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Density( tdeq, Exp( tdedf ) ), tdeq );
		H Line( 2, 3, 0.3 );
		Pen Color( "blue" );
		Y Function( Normal Density( tdeq ), tdeq );
		H Line( 2, 3, 0.25 );
		Text( {2, 0.35}, "df=", Round( Exp( tdedf ), 2 ) );
		Text( {3.5, 0.3}, "Student t" );
		Text( {3.5, 0.25}, "Normal" );
	),
	H List Box(
		Text Box( "df " ),
		Slider Box( Log( 0.1 ), Log( 1000 ), tdedf, tdegr << reshow )
	)
);

```

### t Distribution

**Sintaxis:** p = t Distribution( q, df, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución t de Student sea menor que q.

**JMP Versión agregada:** Antes de la versión 14

```jsl

tdidf = 1;
New Window( "Example: Students t Distribution",
	tdigr = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Distribution( tdiq, tdidf ), tdiq );
		Text( {-4.5, 0.9}, "df=", Round( tdidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 1, 10, tdidf, tdigr << reshow ) )
);

```

### t Log CDistribution

**Sintaxis:** y = t Log CDistribution( x, df, &lt;nc&gt; )

**Descripción:** Devuelve el logaritmo de 1- la distribución t.

**JMP Versión agregada:** Antes de la versión 14

```jsl

tlcdidf = 1;
New Window( "Example: Students t Log CDistribution",
	tlcdigr = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Log CDistribution( tlcdiq, tlcdidf ), tlcdiq );
		Text( {-4.5, -0.9}, "df=", Round( tlcdidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 1, 10, tlcdidf, tlcdigr << reshow ) )
);

```

### t Log Density

**Sintaxis:** y = t Log Density( x, df, &lt;nc&gt; )

**Descripción:** Devuelve el logaritmo de la densidad de probabilidad t.

**JMP Versión agregada:** Antes de la versión 14

```jsl

tldedf = 1;
New Window( "Example: Students t Log Density",
	tldegr = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Log Density( tldeq, tldedf ), tldeq );
		Text( {2.5, -0.35}, "df=", Round( tldedf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 0.5, 10, tldedf, tldegr << reshow ) )
);

```

### t Log Distribution

**Sintaxis:** y = t Log Distribution( x, df, &lt;nc&gt; )

**Descripción:** Devuelve el logaritmo de la distribución t.

**JMP Versión agregada:** Antes de la versión 14

```jsl

tldidf = 1;
New Window( "Example: Students t Log Distribution",
	tldigr = Graph Box(
		Y Scale( -4, 0.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Log Distribution( tldiq, tldidf ), tldiq );
		Text( {-4.5, -0.9}, "df=", Round( tldidf, 2 ) );
	),
	H List Box( Text Box( "df " ), Slider Box( 1, 10, tldidf, tldigr << reshow ) )
);

```

### t Noncentrality

**Sintaxis:** nc = t Noncentrality( x, df, prob )

**Descripción:** Resuelve el parámetro de no centralidad de una distribución t de Student tal que prob = t Distribution( x, df, nc ).

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example: t Noncentrality",
	tncgr = Graph Box(
		Y Scale( 0.01, 0.99 ),
		X Scale( 0.01, 0.99 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Distribution( 3, 2, t Noncentrality( 3, 2, q ) ), q );
	)
);
t Distribution( 3, 2, t Noncentrality( 3, 2, 0.5 ) );

```

### t Quantile

**Sintaxis:** q = t Quantile( p, df, &lt;nonCentrality=0&gt; )

**Descripción:** Devuelve el cuantil de una distribución t de Student, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p.

**JMP Versión agregada:** Antes de la versión 14

```jsl

extqdf = 1;
extqqq = 0.5;
New Window( "Example: Students t Quantile",
	extqgr = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -5, 5 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( t Distribution( q, Round( extqdf ) ), q );
		Pen Color( "blue" );
		V Line( t Quantile( extqqq, Round( extqdf ) ), 0, 1 );
		Text( {-4.5, 0.9}, "df=", Round( extqdf, 2 ), " quantile=", Round( extqqq, 2 ) );
	),
	H List Box( Slider Box( 1, 30, extqdf, extqgr << reshow ), Text Box( " df" ) ),
	H List Box( Slider Box( 0.01, 0.99, extqqq, extqgr << reshow ), Text Box( " quantile" ) ), 

);

```

### Tab Box

**Sintaxis:** y = Tab Box( Tab Page Box(...), TabPageBox(...), ... )

**Descripción:** Crea un panel con pestañas en una ventana con un cuadro de visualización.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Tab Box(
		"alpha",
		Panel Box( "panel", Text Box( "text" ) ),
		"beta",
		Popup Box( {"x", ex = 1, "y", ex = 2} )
	)
);

```

### Tab Page Box

**Sintaxis:** y = Tab Page Box( &lt;Title("string")&gt;, &lt;Tip(0|1)&gt;, &lt;Closeable(0|1)&gt;, &lt;Icon("string")&gt;, &lt;Moveable(0|1)&gt;, contents)

**Descripción:** Devuelve un cuadro de visualización que se puede utilizar en un Tab Box o en un contenedor independiente con título. Algunas de las opciones reconocidas son Title(cadena) para especificar un título, Tip(cadena) para especificar una instancia de información sobre herramienta, Closeable(0|1) para especificar si la página puede cerrarse, Icon(cadena) para especificar el icono y Moveable(0|1) para especificar si la página puede moverse.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Tab Box(
		tp = Tab Page Box( Title( "alpha" ), Panel Box( "panel", Text Box( "text" ) ) ),
		Tab Page Box( Title( "beta" ), Popup Box( {"x", ex = 1, "y", ex = 2} ) )
	)
);

```

### Table Box

**Sintaxis:** y = Table Box( displayBox, ... )

**Descripción:** Devuelve un cuadro de visualización que contiene una tabla con los cuadros de visualización de columnas String Col Box, Number Col Box y Plot Col Box indicados por los argumentos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Tan

**Sintaxis:** y = Tangent( x )

**Descripción:** Devuelve la tangente trigonométrica de x, donde x es un ángulo en radianes.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Tangent( Pi() / 4 );

```

### Tangent

**Sintaxis:** y = Tangent( x )

**Descripción:** Devuelve la tangente trigonométrica de x, donde x es un ángulo en radianes.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Tangent( Pi() / 4 );

```

### TanH

**Sintaxis:** y = TanH( x )

**Descripción:** Devuelve la tangente hiperbólica de x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

TanH( 1 );

```

### Text

**Sintaxis:** Text( &lt;properties&gt;, {x, y}, text, ... ) Text( {left, top, right, bottom}, text )

**Descripción:** Se mueve a la posición {x, y} y dibuja el texto especificado en el argumento text. Los argumentos de propiedad con nombre incluyen Center Justified, Right Justified, Erased, Boxed, Counterclockwise, Clockwise. Se pueden mezclar argumentos de posición, argumentos con nombre y cadenas de caracteres en cualquier orden. También se pueden usar cuatro coordenadas x, y para describir una caja en la cual dibujar el texto. En ese caso, no se utilizan propiedades.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( Center Justified, {50, 20}, "centered" );
	)
);

```

**Ejemplo 2**

```jsl

New Window( "Example",
	Graph Box(
		Text Color( "blue" );
		Text( {20, 80, 40, 70}, "some text" );
	)
);

```

### Text Box

**Sintaxis:** y = Text Box( text, &lt;&lt;Justify Text( strPos ), &lt;&lt;Set Wrap( width ) )

**Descripción:** Construye un cuadro de visualización que contiene el texto indicado en el argumento de cadena de caracteres text. Los argumentos opcionales sirven para controlar la justificación del texto o la sangría. El argumento Justify Text debe ser una cadena de caracteres con uno de los valores left, right o center.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Justification Example",
	Outline Box( "text",
		V List Box(
			Text Box( "Text implicitly justified over multiple lines:", <<Set Wrap( 100 ) ),
			Text Box( " " ),
			Text Box(
				"Text left justified over multiple lines:",
				<<Justify Text( "left" ),
				<<Set Wrap( 100 )
			),
			Text Box( " " ),
			Text Box(
				"Text center justified over multiple lines:",
				<<Justify Text( "center" ),
				<<Set Wrap( 100 )
			),
			Text Box( " " ),
			Text Box(
				"Text right justified over multiple lines:",
				<<Justify Text( "right" ),
				<<Set Wrap( 100 )
			)
		)
	)
);

```

### Text Color

**Sintaxis:** Text Color( &lt;name|index|rgbList&gt; )

**Descripción:** Establece el color para dibujar texto.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( {50, 20}, "label" );
	)
);

```

### Text Edit Box

**Sintaxis:** y = Text Edit Box( text, &lt;&lt;Password Style( bool ), &lt;&lt;Set Script( script ), &lt;&lt;Set Width( value ) )

**Descripción:** Construye un cuadro editable que contiene la cadena de caracteres entrecomillada text y devuelve una referencia al cuadro de visualización. Los argumentos opcionales sirven para controlar la visualización del texto, para asignar un script al cuadro de texto y para establecer el ancho del cuadro en píxeles. Al especificar Set Width(-1) se configura un cuadro que se ajusta al tamaño del texto. Tenga en cuenta que se puede añadir un script al cuadro de texto añadiéndolo como argumento opcional o enviándole el mensaje Set Script.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example: Text Edit Box",
	Outline Box( "Picker Example",
		H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
	),
	Outline Box( "Text Edit Box with password style Example",
		H List Box(
			Text Box( "Enter password:    " ),
			exq = Text Edit Box( "", Password Style( 1 ), Set Script( Print( "changed!" ) ) )
		),
		Button Box( "print to log", Set Script( Print( exq << Get Text() ) ) ),
		Button Box( "hide password", Set Script( exq << Password Style( 1 ) ) ),
		Button Box( "show password", Set Script( exq << Password Style( 0 ) ) )
	)
); // "look in the log window"

```

### Text Font

**Sintaxis:** {nm, sz, st, an} = Text Font(fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt;

**Descripción:** Establece la fuente para el trazado de Text() posterior. Utilícelo sin ningún argumento para obtener la configuración de fuente actual. El ángulo se expresa en grados en el sentido de las agujas del reloj.

**JMP Versión agregada:** 15

```jsl

New Window( "Degrees",
	Graph Box(
		FrameSize( 400, 400 ),
		X Scale( -100, 100 ),
		Y Scale( -100, 100 ),
		Local( {fname, fsize, fstyle, fangle, i, a},
			{fname, fsize, fstyle, fangle} = Text Font();
			Text Font( If( Host is( "Mac" ), "Helvetica", "Arial" ), 30, "Italic Bold" );
			Text( Center Justified, {0, -10}, "JMP" );
			For( i = 0, i < 360, i += 15,
				Text Font( {fname, 10, "plain", -i + 90} );
				a = i * Pi() / 180;
				Text( Center Justified, {80 * Cos( a ), 80 * Sin( a )}, Char( i ) );
				Line( {70 * Cos( a ), 70 * Sin( a )}, {76 * Cos( a ), 76 * Sin( a )} );
			);
		)
	)
);

```

### Text Score

**Sintaxis:** score vector = Text Score( text column, text-to-number, &lt;weighting&gt;, &lt;{&lt;center&gt;, &lt;scale&gt;, scoring matrix}&gt;);

**Descripción:** Se utiliza para crear fórmulas de puntuación en el explorador de texto. El argumento texto a número es un arreglo asociativo que establece correspondencias entre palabras en minúscula y números. El argumento de ponderación es "Binary", "Ternary", "Count", "LogCount", "LCA" o un arreglo de pesos de frecuencia inversa del documento para TFLogIDF. La matriz de puntuación debe tener el mismo número de columnas que palabras en el arreglo asociativo, o una más si se trata de LCA. El resultado es un vector de puntuaciones. Si no se especifica ninguna matriz de puntuación, genera un vector de puntuaciones de conteo. Si no se especifica ninguna ponderación, utiliza Conteo. Esta función no es compatible con la opción Lema para combinación.

**JMP Versión agregada:** Antes de la versión 14

```jsl

score = Text Score(
	"over the lazy dogs back",
	["lazy" => 1, "dogs" => 2],
	"Count",
	[1 0, 0 1]
);
Show( score );

```

### Text Seg

**Sintaxis:** seg = Text Seg("text")

**JMP Versión agregada:** 17

```jsl

w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( ts1 = Text Seg( "default location fixed bottom left" ) );

```

### Text Size

**Sintaxis:** Text Size( n )

**Descripción:** Establece el tamaño de la fuente para trazar textos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Text Size( 20 );
		Text( {50, 20}, "label" );
	)
);

```

### This Project

**Sintaxis:** project = this project()

**Descripción:** Desde dentro de un proyecto, devuelve el objeto de proyecto correspondiente. Fuera de un proyecto, no devuelve nada.

**JMP Versión agregada:** 14

```jsl

If(
	Is Empty( This Project() ), Print( "Project: (none)" ),
	Print( "Project: " || (This Project() << Get Window Title()) ),
);

```

### Throw

**Sintaxis:** Throw(&lt;message&gt;, &lt;Boolean&gt;)

**Descripción:** Desvía la ejecución hacia el método Try() envolvente. De lo contrario, se detiene la ejecución del script. Si message comienza por un signo de exclamación, el error será fatal y no podrá ser capturado por Try(). El segundo argumento es un booleano opcional para incluir un rastreo.

**JMP Versión agregada:** Antes de la versión 14

**Lanzamiento fatal**

```jsl


Try( Throw( "!This is a fatal error" ), Print( "CATCH message not reached" ) );
Print( "AFTER TRY message not reached" );

```

**Rastreo**

```jsl

Throw( "A line number is included in this error", 1 );

```

**Try-Catch**

```jsl

Try( If( Random Uniform() < 0.5, 1, Throw() ), "thrown" );

```

### Tick Seconds

**Sintaxis:** t = Tick Seconds()

**Descripción:** Devuelve un valor de tiempo en segundos, por lo general preciso hasta 1/60 segundos (un "tick") como mínimo, en función del ordenador. Sólo es útil respecto de otro valor de Tick Seconds().

**JMP Versión agregada:** Antes de la versión 14

```jsl

t1 = Tick Seconds();
Open( "$SAMPLE_DATA/Big Class.jmp" );
t2 = Tick Seconds();
Round( t2 - t1, 3 );

```

### Time Of Day

**Sintaxis:** sec = Time Of Day( datetime )

**Descripción:** Devuelve la hora de un valor de fecha y hora, incluida la fracción de segundos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Format( Time Of Day( Today() ), "h:m:s" );

```

### Titlecase

**Sintaxis:** st = Titlecase( s )

**Descripción:** Convierte el formato de mayúsculas y minúsculas a tipo título

**JMP Versión agregada:** Antes de la versión 14

```jsl

Titlecase( "The dog crossed the road" );

```

### To Color Space

**Sintaxis:** color = To Color Space( color, colorSpace )

**Descripción:** Traduce un color a otro espacio de color. Se asignan los colores fuera de la gama para ajustarlos al convertir a espacios de color más pequeños.

**JMP Versión agregada:** 18

**Ejemplo 1**

```jsl

To Color Space( "red", "LMS" );

```

**Ejemplo 2**

```jsl

To Color Space( {0.871, 0.032, 0.061, "lRGB"}, "HLS" );

```

**Ejemplo 3**

```jsl

To Color Space( {0.941, 0.196, 0.274, "lRGB", 0.871, 0.032, 0.061}, "HLS" );

```

### Today

**Sintaxis:** dt = Today()

**Descripción:** Devuelve el valor de fecha-hora correspondiente al instante actual.

**JMP Versión agregada:** Antes de la versión 14

```jsl

As Date( Today() );

```

### Trace

**Sintaxis:** y = Trace( x )

**Descripción:** Devuelve la suma de los elementos de la diagonal de una matriz cuadrada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Trace( [11 22, 33 44] );

```

### Transform Each

**Sintaxis:** list = Transform Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;Output( "List" | "Matrix" | "Associative Array" | "Expression", &lt;expr head name&gt; )&gt;, &lt;locals list&gt;, body)

**Descripción:** Realiza lo mismo que la función Para cada, pero también devuelve un contenedor con el resultado de cada iteración. De forma predeterminada, devuelve un contenedor que coincide con el tipo de contenedor de entrada, pero se puede modificar mediante el argumento Salida. Para la salida Lista o Expresión, se utilizará Empty() cuando no haya ningún resultado. Para la salida Matriz, se utiliza un valor faltante numérico cuando no haya ningún resultado o cuando el resultado sea no numérico. En el caso de la salida Arreglo asociativo, la clave no existirá cuando no haya ningún resultado. Utilizar Continue() equivale a no devolver ningún valor para cada iteración.

**JMP Versión agregada:** 16

**Associative Array**

```jsl

values = Transform Each( {{key, value}}, ["A" => 8, "B" => 6, "C" => 10], value + 1 );
Show( values );

```

**Expression 1**

```jsl

ex = Transform Each( {value}, Expr( MyExpr( 10, 20, 30 ) ), value + 1 );
Show( ex );

```

**Expression 2**

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

**List**

```jsl

values = Transform Each( {value}, {10, 20, 30}, value + 5 );
Show( values );

```

**Matrix**

```jsl

values = Transform Each( {element}, 10 :: 15, element + 5 );
Show( values );

```

**Output**

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

### Transparency

**Sintaxis:** Transparency( &lt;alpha&gt; )

**Descripción:** Establece la transparencia a emplear en los comandos de dibujo. Alfa puede variar entre 0 (transparente) y 1 (opaco, el valor predeterminado). Algunos sistemas operativos no admiten esta opción.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Frame Size( 500, 500 ),
		X Scale( -3, 3 ),
		Y Scale( -3, 3 ),
		Transparency( .1 );
		Fill Color( RGB Color( 1/*red*/, 0/*green*/, 0/*blue*/ ) );
		For( i = 0, i < 10000, i++,
			Circle( {Random Normal(), Random Normal()}, 0.05, "FILL" )
		);
	)
);

```

### Transpose

**Sintaxis:** y = Transpose( matrix ); y = matrix`

**Descripción:** Transpone el argumento de matriz intercambiando filas y columnas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Show( Transpose( [11 22, 33 44] ), [11 22, 33 44]` );

```

### Tree Box

**Sintaxis:** tree = Tree Box( &lt;{rootnodes}&gt;, &lt;Size( x, y )&gt;, &lt;Multiselect( 0|1 )&gt; )

**Descripción:** Genera un cuadro de visualización para mostrar información jerárquica.

**JMP Versión agregada:** Antes de la versión 14

```jsl

root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
                                        
c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
                                        
root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
                                        
New Window( "TreeBox", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );

```

### Tree Node

**Sintaxis:** node = Tree Node( &lt;label&gt; )

**Descripción:** Genera un nodo de un árbol para visualizarlo dentro de un cuadro de árbol.

**JMP Versión agregada:** Antes de la versión 14

```jsl

root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
                                        
c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
                                        
root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
                                        
New Window( "TreeBox Nodes", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );

```

### Triangulation

**Sintaxis:** triangulation = Triangulation( X(Column1, Column2), &lt; Y(Column) &gt; )

**Descripción:** Devuelve un objeto que contiene la triangulación de Delaunay del conjunto de puntos indicado. De la Y opcional se calcula la media de los puntos duplicados y todos los puntos de salida son únicos.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );

```

**Ejemplo 2**

```jsl

tri = Triangulation( X( [0 0 1 1], [0 1 0 1] ), Y( [0 1 2 3] ) );

```

### Trigamma

**Sintaxis:** y = Trigamma( x )

**Descripción:** Devuelve la función trigamma evaluada en el punto x, donde la función trigamma es la derivada de la función digamma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Trigamma( 5 );

```

### Trim

**Sintaxis:** sub = Trim( s, &lt;left|right|both&gt; )

**Descripción:** Devuelve una copia de la cadena de caracteres s después de eliminar todos los espacios en blanco del principio o del final. El segundo argumento especifica si se desean eliminar los espacios en blanco del principio o bien los del final y, si no se especifica, se eliminan de ambos extremos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Trim( " title   ", both );

```

### Trim Whitespace

**Sintaxis:** sub = Trim Whitespace( s, &lt;left|right|both&gt; )

**Descripción:** Devuelve una copia de la cadena de caracteres s después de eliminar todos los espacios en blanco del principio o del final. El segundo argumento especifica si se desean eliminar los espacios en blanco del principio o bien los del final y, si no se especifica, se eliminan de ambos extremos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Trim Whitespace( "  The  dog    crossed    the  road  " );

```

### TripleS Import

**Sintaxis:** TripleSImport( &lt;path to xml file&gt; )

**Descripción:** Abre archivos Triple-S. El formato Triple-S comprende un archivo xml o sss y un archivo csv o un archivo dat/asc. Ambos archivos deben tener el mismo nombre con la extensión adecuada y deben estar en el mismo directorio. Especifique la ruta de acceso de xml o sss para importar los datos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

TripleS Import(); //To get a file dialog to select the XML file
TripleS Import( "c:/MyFile.xml" ); //To open the Triple-S MyFile

```

### Try

**Sintaxis:** y = Try( expr, &lt;catchExpr&gt; )

**Descripción:** Evalúa y devuelve el argumento de expr, a menos que la evaluación provoque una excepción Throw() o una excepción interna. En tal caso, se devuelve la evaluación de catchExpr. Si se utiliza exception_msg como catchExpr, se devuelve una lista con más información sobre el error.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Try( Sqrt( "s" ), "invalid" );

```

**Ejemplo 2**

```jsl

Try( Sqrt( "s" ), exception_msg );

```

### Tukey HSD P value

**Sintaxis:** p = Tukey HSD P value( q, nGroups, dfe )

**Descripción:** Devuelve el valor p necesario para la prueba de comparaciones múltiples HSD de Tukey, donde q es el estadístico de prueba, nGroups es el número de grupos del estudio y dfe son los grados de libertad del error (basado en el total de la muestra del estudio).



Tenga en cuenta que q es el valor crítico ajustado de Tukey, que es el cuantil de la distribución de rango estudentizado de Tukey dividido por sqrt(2).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Tukey HSD P value( 3.73, 6, 34 );

```

### Tukey HSD Quantile

**Sintaxis:** q = Tukey HSD Quantile( 1-alpha, nGroups, dfe )

**Descripción:** Devuelve el cuantil necesario para la prueba de comparaciones múltiples HSD de Tukey, donde 1-alpha es el nivel de confianza, nGroups es el número de grupos del estudio y dfe son los grados de libertad del error (basado en el total de la muestra del estudio).



Tenga en cuenta que q es el valor crítico ajustado de Tukey, que es el cuantil de la distribución de rango estudentizado de Tukey dividido por sqrt(2).

**JMP Versión agregada:** Antes de la versión 14

```jsl

alpha = 0.05;
dfe = 5;
Tukey HSD Quantile( 1 - alpha, 20, dfe );
New Window( "Example: Tukey HSD Quantile",
	tdigr = Graph Box(
		Y Scale( 2, 8 ),
		X Scale( 2.5, 15.5 ),
		YName( "Tukey HSD Quantile" ),
		XName( "Groups" ),
		Pen Color( "red" );
		For( i = 3, i <= 15, i++,
			V Line( i, 0, Tukey HSD Quantile( 1 - alpha, i, dfe ) )
		);
		Text( {3, 7}, "dfe=", Round( dfe, 2 ) );
	),
	H List Box( Text Box( "dfe" ), Slider Box( 3, 10, dfe, tdigr << reshow ) )
);

```

### Type

**Sintaxis:** y = Type( x )

**Descripción:** Devuelve una cadena de caracteres con el nombre del tipo de valor del argumento x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Type( [1 2 3] );

```

### Unlineup Box

**Sintaxis:** y = UnLineup Box(displayBoxArgs, ... )

**Descripción:** Devuelve un cuadro de visualización que suspende de forma temporal el diseño de columnas de un cuadro de alineación. El hijo del cuadro de desalineación se expandirá para abarcar todas las columnas del cuadro de alineación.

**JMP Versión agregada:** 16

```jsl

New Window( "unlineup",
	Lineup Box( N Col( 2 ),
		Unlineup Box( Text Box( "First Section", <<Justify Text( "Center" ) ) ),
		Button Box( "First Section 1" ),
		Button Box( "First Section 2" ),
		Unlineup Box( Text Box( "Second Section", <<Justify Text( "Center" ) ) ),
		Button Box( "Second Section 1" ),
		Button Box( "Second Section 2" )
	)
);

```

### Unlock Globals

**Sintaxis:** Unlock Globals( name, ... )

**Descripción:** Desprotege los nombres globales especificados, lo cual permite modificarlos y borrarlos mediante la función Clear Globals.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exalpha = 0.05;
exdelta = 0.5;
Watch( exalpha, exdelta );
Wait( 3 );
Lock Globals( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );
Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );
Wait( 3 );
Unlock Globals( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Unlock Symbols

**Sintaxis:** Unlock Symbols( name, ... )

**Descripción:** Desprotege los nombres globales especificados, lo cual permite modificarlos y borrarlos mediante la función Clear Symbols.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exalpha = 0.05;
exdelta = 0.5;
Watch( exalpha, exdelta );
Wait( 3 );
Lock Symbols( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );
Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );
Wait( 3 );
Unlock Symbols( exalpha );
Wait( 3 );
Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Unregister Addin

**Sintaxis:** Unregister Addin( uniqueId)

**Descripción:** Elimina el registro de un complemento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Unregister Addin( "com.mycompany.myaddin" );

```

### Unsubscribe to Data Table List

**Sintaxis:** aSub = Unsubscribe to Data Table List(&lt;subscriber name&gt;, &lt;"OnOpen" | "OnClose" | "OnRename" | "ALL"&gt;)

**Descripción:** Elimina una suscripción a la lista de tablas de datos añadida mediante el comando "suscribirse a la lista de tablas de datos".

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "closing" );
	Print( dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnClose( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );
Unsubscribe to Data Table List( aSub, "on close" );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );

```

**Ejemplo 2**

```jsl

f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "closing" );
	Print( dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnClose( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );
Unsubscribe to Data Table List( aSub, "all" );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );

```

### Update MATLAB Dependencies

**Sintaxis:** Update MATLAB Dependencies(&lt;Patch(0|1)&gt;)

**Descripción:** Actualiza las dependencias de MATLAB necesarias.

**JMP Versión agregada:** Antes de la versión 14

```jsl


If( Check MATLAB Dependencies(),
	Update MATLAB Dependencies(),
	Print( "Dependencies are updated" )
);

```

### Uppercase

**Sintaxis:** su = Uppercase( s )

**Descripción:** Convierte letras minúsculas en mayúsculas en la cadena especificada. Las reglas de conversión de mayúsculas y minúsculas dependen de la configuración local.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Uppercase( "Café #23" );

```

### V Center Box

**Sintaxis:** y = V Center Box( &lt;childbox&gt; )

**Descripción:** Devuelve un cuadro de visualización con el argumento del cuadro de visualización childbox centrado verticalmente según el tamaño máximo de este hijo y de todos los demás hermanos del recuadro central.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "test",
	H List Box(
		V Center Box( Text Box( "V+V" ) ),
		V List Box(
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			H Center Box( Text Box( "H+H" ) ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" )
		)
	)
);

```

### V Concat

**Sintaxis:** y = a |/ b; y = V Concat( a, b, ... )

**Descripción:** Concatena matrices verticalmente. Los argumentos deben tener el mismo número de columnas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

[11 22] |/ [33 44];

```

### V Concat To

**Sintaxis:** matrix1 |/= matrix2; V Concat To( matrix1, matrix2 )

**Descripción:** Operador de asignación que concatena en el mismo lugar, verticalmente. a |/= b equivale a a = a |/ b.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exA = [1 2, 3 4];
exB = [5 6, 7 8, 9 10];
exC = [1, 1, 1, 1, 1];
exD = V Concat To( exA, exB );
exE = Concat( exD, exC );
/* exA is changed and exD is not. */
Show( exA, exB, exC, exD, exE );
/* Also see ConcatTo(), VConcat() */

```

### V Line

**Sintaxis:** V Line( x ); V Line( x, y1, y2 )

**Descripción:** Dibuja una línea vertical en x desde y1 hasta y2 o de extremo a extremo del marco.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 2 );
		V Line( 20, 10, 50 );
	)
);

```

### V List Box

**Sintaxis:** y = V List Box( &lt;Align( center|right )&gt;, displayBox, ... )

**Descripción:** Devuelve un cuadro de visualización que organiza los cuadros de visualización indicados por los argumentos en disposición vertical. El mensaje <<Hold indica a la hoja que se convierta en propietaria de los informes extraídos. El argumento opcional Align permite alinear los contenidos a la derecha (right) o en el centro (center) dentro del cuadro de visualización.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Outline Box( "Picker", V List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ) )
);

```

### V Max

**Sintaxis:** b = V Max( matrix )

**Descripción:** Devuelve un vector fila que contiene los valores máximos de cada una de las columnas del argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

V Max( [11 22, 33 44, 55 66] );

```

### V Mean

**Sintaxis:** m = V Mean( matrix )

**Descripción:** Devuelve un vector fila que contiene las medias de cada una de las columnas del argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

V Mean( [11 22, 33 44, 55 66] );

```

### V Median

**Sintaxis:** m = V Median( matrix )

**Descripción:** Devuelve un vector fila que contiene la mediana de cada una de las columnas en el argumento.

**JMP Versión agregada:** 15

```jsl

V Median( [11 22, 33 44, 35 46, 55 66] );

```

### V Min

**Sintaxis:** a = V Min( matrix )

**Descripción:** Devuelve un vector fila que contiene los valores mínimos de cada una de las columnas del argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

V Min( [11 22, 33 44, 55 66] );

```

### V Quantile

**Sintaxis:** m = V Quantile( matrix, p )

**Descripción:** Devuelve un vector fila que contiene el cuantil especificado p de cada una de las columnas en el argumento.

**JMP Versión agregada:** 15

```jsl

V Quantile( [11 22, 33 44, 35 46, 55 66], .25 );

```

### V Robust Standardize

**Sintaxis:** b = V Robust Standardize( X, &lt;center=1&gt;, &lt;scale=1&gt; )

**Descripción:** Devuelve una matriz centrada por la mediana y escalada por una estimación robusta de la desviación estándar de la matriz X. Los argumentos booleanos opcionales especifican si se llevan a cabo el centrado y el escalado.

**JMP Versión agregada:** 17

```jsl

V Robust Standardize( J( 150, 4, Random Normal() ), 1, 1 );

```

### V Scroll Box

**Sintaxis:** y = V Scroll Box( &lt;Size( y )&gt;, displayBox )

**Descripción:** Devuelve un cuadro de visualización que sirve para posicionar un cuadro hijo mayor usando una barra de desplazamiento vertical.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Outline Box( "Picker",
		V Scroll Box(
			Size( 100 ),
			V List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### V Sheet Box

**Sintaxis:** y = V Sheet Box( &lt;&lt;Hold( rpt ), displayBox, ... )

**Descripción:** Devuelve un cuadro de visualización que organiza los cuadros de visualización indicados por los argumentos en disposición vertical. El mensaje <<Hold indica a la hoja que se convierta en propietaria de los informes extraídos. El argumento opcional Align permite alinear los contenidos a la derecha (right) o en el centro (center) dentro del cuadro de visualización.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### V Size

**Sintaxis:** v = V Size()

**Descripción:** Devuelve el tamaño vertical del marco de gráficos en píxeles.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Text Size( V Size() / 4 );
		Text( {50, 20}, "label" );
	)
);

```

### V Splitter Box

**Sintaxis:** y = V Splitter Box( &lt;Size(x,y)&gt;, displayBox, ... )

**Descripción:** Devuelve un cuadro de visualización que organiza otros cuadros de visualización verticalmente, con un control interactivo de los tamaños. Los tamaños de los hijos se especifican como proporciones del ancho o el alto de Splitter Box. El argumento Size opcional solo se utiliza para el cuadro divisor superior. A los cuadros de nivel inferior se les asignan tamaños como los de cualquier otro cuadro hijo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Splitter",
	V Splitter Box(
		Size( 800, 600 ),
		H Splitter Box( graph = Graph Box(), Script Box(), <<Sizes( {0.6, 0.4} ) ),
		H Splitter Box(
			pict = Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) ),
			spacer = Spacer Box(),
			<<Sizes( {0.4, 0.6} )
		)
	)
);
graph[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
pict << Set Min Size( 100, 100 );
pict << Set Max Size( 500, 500 );
pict << Set Stretch( "Window", "Window" );
spacer << Set Fill( 1 );
spacer << Color( "Red" );
spacer << Set Stretch( "Window", "Window" );

```

### V Standardize

**Sintaxis:** b = V Standardize( X )

**Descripción:** Devuelve una matriz que es la versión centrada y escalada de la matriz X. Cada columna de b tiene una media de 0 y una desviación estándar de 1.

**JMP Versión agregada:** Antes de la versión 14

```jsl

V Standardize( [11 22, 33 44, 55 66] );

```

### V Std

**Sintaxis:** b = V Std( matrix )

**Descripción:** Devuelve un vector fila que contiene las desviaciones estándar de cada una de las columnas del argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

V Std( [11 22, 33 44, 55 66] );

```

### V Sum

**Sintaxis:** s = V Sum( matrix )

**Descripción:** Devuelve un vector fila que contiene la suma de cada una de las columnas del argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

V Sum( [11 22, 33 44, 55 66] );

```

### Varimax

**Sintaxis:** {R,T} = Varimax( F, &lt;norm=1&gt; )

**Descripción:** Realizar una rotación Varimax de la matriz especificada F. Devuelve una lista que contiene la matriz rotada y la matriz de rotación ortogonal. De forma predeterminada, se lleva a cabo una rotación Varimax normalizada. Especifique norm = 0 para realizar una rotación Varimax no normalizada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Varimax( [1.2 .4, .9 1.5] );

```

### Vec Diag

**Sintaxis:** y = Vec Diag( x )

**Descripción:** Devuelve los elementos de la diagonal de una matriz cuadrada en forma de vector.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Vec Diag( [11 22, 33 44] );

```

### Vec Quadratic

**Sintaxis:** Vec Quadratic( S, X )

**Descripción:** Evalúa como Vec Diag( X * S * X` ).

**JMP Versión agregada:** Antes de la versión 14

```jsl

exS = [1 3 5, 3 2 6, 5 6 1];
exX = [1 3 5, 2 4 6];
Vec Quadratic( exS, exX );

```

### VPTree

**Sintaxis:** tab = VPTree( [ matrix ] )

**Descripción:** Devuelve una tabla para una búsqueda eficiente de vecinos cercanos. Los argumentos de la matriz son puntos k-dimensionales. No existe límite alguno en el número de dimensiones o puntos.

**JMP Versión agregada:** 16

```jsl

tab = VPTree( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tab << K nearest rows( 2, [1.1 .9 1] );
"2 nearest rows to [1.1 .9 1] are " || Char( rows );

```

### Wait

**Sintaxis:** Wait( &lt;x&gt; )

**Descripción:** Espera x segundos para proceder con la ejecución. El valor predeterminado para x es de 3 segundos. Si x es 0 o más, JMP completará cualquier evento del sistema operativo (p. ej. representación en pantalla), así como cualquier rellamada pendiente (p. ej. evaluación de fórmulas) además de la espera. Si x es menor que 0, solo se confirma que se completarán la representación en pantalla y los eventos pendientes del sistema operativo antes de proceder.

**JMP Versión agregada:** Antes de la versión 14

**Eventos del sistema operativo**

```jsl

Wait( -1 ); // Wait for OS events

```

**Rellamadas**

```jsl

Wait( 0 ); // Wait for OS events and callbacks

```

**Simple**

```jsl

Wait( 1.5 );

```

### Watch

**Sintaxis:** w = Watch( all|name1, ... )

**Descripción:** Crea una ventana que muestra variables de espacios de nombre Global, Here y Local y sus valores.

**JMP Versión agregada:** Antes de la versión 14

```jsl

x = 1;
y = 2;
z = "abc";
w = Watch( all );
Wait( 5 );
x = x * 5;
y = y / 25;
z = z || "def";
Wait( 5 );
w << close Window();

```

### Wavelet Basis Coef

**Sintaxis:** y = Wavelet Basis Coef( x, grid, coef, &lt;wavelet = "Haar" or "Biorthogonal" or "Coiflet" or "Daubechies" or "Symlet"&gt;, &lt;param = 0&gt; )

**Descripción:** Devuelve la predicción en los puntos x para el modelo de ondículas especificado. El parámetro grid es un vector que especifica la cuadrícula de los datos para el modelo de ondículas. El parámetro coef es un vector de coeficientes de ondículas. El parámetro wavelet es el nombre del modelo de ondículas. El parámetro opcional param es el parámetro del modelo de ondículas (si es necesario, el valor predeterminado es 0).

**JMP Versión agregada:** 17

```jsl

Wavelet Basis Coef( 2.5, [1, 2, 3, 4], [0, 1, 2, 3], "Haar" );

```

### Web

**Sintaxis:** Web( string, &lt;JMP Window&gt; )

**Descripción:** Abre la URL o el archivo almacenado en string en el navegador web predeterminado. El segundo argumento opcional especifica que el HTML se abre en una ventana del navegador de JMP.

**JMP Versión agregada:** Antes de la versión 14

**Controlador de sucesos**

```jsl

//Making a clickable link show up in a formula column
New Table( "Example",
	Add Rows( 2 ),
	New Column( "URL",
		"Character",
		"Nominal",
		Formula( "https://www.jmp.com/" || :Page ),
		Set Property(
			"Event Handler",
			Event Handler(
				Click( JSL Quote( Function( {dt, col, row}, Web( dt:col[row] ) ) ) )
			)
		)
	),
	New Column( "Page",
		"Character",
		"Nominal",
		Set Values( {"support/knowledge_base.shtml", "en_us/about.html"} )
	)
);

```

**Simple**

```jsl

Web( "http://www.jmp.com/" );

```

### Web Browser Box

**Sintaxis:** wb = Web Browser Box( url )

**Descripción:** Devuelve un cuadro de visualización que sirve para visualizar una página web especificada por el argumento de cadena de caracteres url.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example", wb = Web Browser Box() );
wb << Navigate( "http://www.jmp.com" );
wb << Set Stretch( "Window", "Window" );
wb << Set Max Size( 10000, 10000 );

```

### Week Of Year

**Sintaxis:** d = Week Of Year( datetime, &lt;rule=1&gt; )

**Descripción:** Devuelve la semana del año con un valor de fecha-hora utilizando una de tres reglas. De forma predeterminada (regla 1), las semanas empiezan el domingo y el primer domingo del año es la semana 2. La semana 1 es una semana parcial o vacía (por ejemplo, en 2006). Según la regla 2, el primer domingo corresponde a la semana 1, y los días anteriores pertenecen a la semana 0. Según la regla 3 se devuelve el valor del número de semana según la norma ISO; según la cual las semanas empiezan en lunes y la semana 1 es la primera semana del año que tenga 4 días durante ese año. Con las semanas ISO, es posible que los primeros o los últimos tres días del año pertenezcan a una semana del año anterior o siguiente.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Week Of Year( Today() );

```

**Ejemplo 2**

```jsl

Show(
	Week Of Year( 01jan2012, 1 ),
	Week Of Year( 01jan2012, 2 ),
	Week Of Year( 01jan2012, 3 )
);

```

### Weibull Density

**Sintaxis:** y = Weibull Density( x, shape, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descripción:** Devuelve la densidad en x de una distribución de probabilidad de Weibull con un parámetro de shape y parámetro de scale opcional.

**JMP Versión agregada:** Antes de la versión 14

```jsl

shape = 0.5;
New Window( "Example: Weibull Density",
	y = Graph Box(
		Y Scale( 0, 2 ),
		X Scale( 0, 1.5 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Weibull Density( x, shape ), x );
		Text( {1.1, 1.8}, " shape=", Round( shape, 2 ) );
	),
	H List Box( Slider Box( 0, 5, shape, y << reshow ), Text Box( " shape" ) )
);

```

### Weibull Distribution

**Sintaxis:** p = Weibull Distribution( x, shape, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con distribución de Weibull (con un parámetro de shape y un parámetro de scale opcional) sea menor que x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

shape = 2;
New Window( "Example: Weibull Distribution",
	y = Graph Box(
		Y Scale( 0, 1 ),
		X Scale( 0, 2 ),
		XName( "x" ),
		Pen Color( "red" );
		Y Function( Weibull Distribution( x, shape ), x );
		Text( {0.1, 0.9}, " shape=", Round( shape, 2 ) );
	),
	H List Box( Slider Box( 0, 5, shape, y << reshow ), Text Box( " shape" ) )
);

```

### Weibull Quantile

**Sintaxis:** q = Weibull Quantile( p, beta, &lt;alpha=1&gt;, &lt;threshold=0&gt; )

**Descripción:** Devuelve el cuantil de una distribución de Weibull, el valor para el cual la probabilidad de que un valor aleatorio sea menor es p, donde beta y alpha son los parámetros de forma y escala, respectivamente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exwqbeta = 2;
exwqqq = 0.5;
New Window( "Example: Weibull Quantile",
	exwqy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( 0, 2 ),
		XName( "q" ),
		Pen Color( "red" );
		Y Function( Weibull Distribution( exwqq, exwqbeta ), exwqq );
		Pen Color( "blue" );
		V Line( Weibull Quantile( exwqqq, exwqbeta ), 0, 1 );
		Text(
			{0.1, 0.9},
			" \!U03B2=",
			Round( exwqbeta, 2 ),
			" quantile=",
			Round( exwqqq, 2 )
		);
	),
	H List Box( Slider Box( 0, 5, exwqbeta, exwqy << reshow ), Text Box( " \!U03B2" ) ),
	H List Box( Slider Box( 0.01, 0.99, exwqqq, exwqy << reshow ), Text Box( " quantile" ) )
);

```

### Where

**Sintaxis:** Where( &lt;dt&gt;, clause )

**Descripción:** Devuelve índices (normalmente números de fila) que coinciden con la cláusula Where indicada. El dt opcional cambia el Current Data Table durante la evaluación. Estas cláusulas suelen escribirse en JMP mediante el filtro de datos. A menudo, será más rápido que usar Loc, <<Get Rows Where o <<Select Where. El comportamiento no está definido si la cláusula modifica las secuencias o cualquier símbolo durante la evaluación.

**JMP Versión agregada:** 18

**Columnas**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Get Rows Where( :sex == "M" );
Where( :sex == "M" );
Where( dt, :sex == "M" );

```

**Estados de fila**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [2 4 6] ) << Exclude( 1 );
Where( Excluded() );
Where( !Excluded() );

```

**Funciones de columna**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Select << Select Rows( Where( Col Max( :height, :age ) >= 68 ) );
dt << Clear Select << Select Rows( Where( :height == Col Max( :height, :age ) ) );

```

**Matriz/Lista**

```jsl

xs = [10 20 30 . 50];
xs[Where( xs >= 20 )];
xs[Where( !Is Missing( xs ) )];
ys = {10, 20, "30", ., 50};
ys[Where( ys >= 20 )];

```

**Otro**

```jsl

xs = [10 20 30 . 50];
ys = [0 0 0 1 1];
Where( xs > 20 & ys );

xs = {{10}, {20}, {15}};
Where( xs[1] < 18 );

```

### While

**Sintaxis:** While( testExpr, bodyExpr )

**Descripción:** Evalúa las expresiones testExpr y bodyExpr repetidamente mientras el valor de testExpr sea distinto de cero.

**JMP Versión agregada:** Antes de la versión 14

```jsl

i = 1;
s = "";
While( i < 1000,
	s ||= " " || Char( i );
	i *= 2;
);
s;

```

### Wild

**Sintaxis:** Wild()

**Descripción:** Denota la posición de un comodín que coincide con cualquier expresión (se utiliza únicamente en patrones de expresión).

**JMP Versión agregada:** Antes de la versión 14

```jsl

extestexpr = Expr(
	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );
	Show( "END" );
);
Extract Expr( extestexpr, For( i = 1, Wild(), i++, Print( "YES!!!" ) ) );

```

### Wild List

**Sintaxis:** Wild List()

**Descripción:** Denota una serie de argumentos comodín que coinciden con cualquier elemento (se utiliza únicamente en patrones de expresión).

**JMP Versión agregada:** Antes de la versión 14

```jsl

extestexpr = Expr(
	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );
	Show( "END" );
);
Extract Expr( extestexpr, For( i = 1, Wild List(), Print( "YES!!!" ) ) );

```

### Window

**Sintaxis:** y = Window( &lt;string|int&gt; )

**Descripción:** Esta función está en desuso y solo se conserva para la compatibilidad retroactiva con scripts existentes. Para los nuevos scripts, utilice Get Window() o Get Window List().

**JMP Versión agregada:** Antes de la versión 14

```jsl

Window( "Big Class" );

```

### With Window Handler

**Sintaxis:** With Window Handler( JSL Code, Handler Function )

**Descripción:** Ejecuta un bloque de código con una función a la que se llama cada vez que se crea una nueva ventana.

**JMP Versión agregada:** 17

```jsl

With Window Handler(
	New Window( "My Window" ),
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);

```

### Word

**Sintaxis:** w = Word( n|[first last], s, &lt;delim&gt;, &lt;Unmatched(result string)&gt;

**Descripción:** Devuelve la n-ésima palabra de la cadena de caracteres s, donde las palabras son las subcadenas de caracteres separadas por cualquier número de caracteres de los indicados en el argumento delim. En ausencia de delim, se usa el carácter de espacio. Si delim es una cadena de caracteres vacía, cada carácter se considera una palabra aparte.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Word( 3, "http://www.jmp.com", ":/." );

```

**Ejemplo 2**

```jsl

Word( [2 -1], "This is a sentence" );

```

**Ejemplo 3**

```jsl

Word( 4, "Apple+Banana Tree,,Pear,,Peach,,Grape", Get Punctuation Characters() );

```

**Ejemplo 4**

```jsl

Word( 5, "a b c d", Unmatched( "None" ) );

```

**Ejemplo 5**

```jsl

Word( 2, "abcd", "" );

```

### Words

**Sintaxis:** wl = Words( &lt;[first last]&gt;, s, &lt;delim&gt;)

**Descripción:** Devuelve una lista de subcadenas de caracteres separadas por cualquiera de los caracteres especificados en el argumento delim. En ausencia del argumento delim, se usa el carácter de espacio. Si el argumento delim es una cadena de caracteres vacía, cada carácter se trata como una palabra aparte.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Eval List( {Words( "http://www.jmp.com", ":/." ), Words( "hello", "" )} );

```

**Ejemplo 2**

```jsl

Words( "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Ejemplo 3**

```jsl

Words( [1 2], "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### Wrap List Box

**Sintaxis:** y = Wrap List Box( displayBox, ... )

**Descripción:** Devuelve un cuadro de visualización que organiza los cuadros de visualización proporcionados por los argumentos en una presentación horizontal, pero ajustará esa lista al imprimir.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "WrapListBox",
	Wrap List Box(
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "1" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "2" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "3" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "4" ) )
	)
);

```

### Write

**Sintaxis:** Write( x, ... )

**Descripción:** Muestra los valores especificados en el registro sin añadir puntos de interrogación, comillas, espacios ni saltos de línea (como sí sucede con Print()).

**JMP Versión agregada:** Antes de la versión 14

```jsl

Write( "fraction = ", 355 / 113, "\!N", "pi       = ", Pi() );

```

### X Function

**Sintaxis:** X Function( xExpr, yName, &lt;properties&gt; )

**Descripción:** Dibuja la función xExpr en la dimensión X a medida que la variable yName varía en el intervalo del eje Y del gráfico. Entre los argumentos adicionales relativos a propiedades con nombre asignado se encuentran Min(X mínima), Max(Y máxima), Fill(patrón de relleno, valor del color de relleno), Inc(límite superior del incremento).

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		X Function( 20 + 40 * Sin( a / 30 ), a );
	)
);

```

### X Origin

**Sintaxis:** x = X Origin()

**Descripción:** Devuelve el valor x correspondiente al extremo izquierdo del marco de gráficos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### X Range

**Sintaxis:** x = X Range()

**Descripción:** Devuelve la distancia x de izquierda a derecha. X Origin() + X Range() corresponde al extremo derecho.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### X Scale

**Sintaxis:** X Scale( &lt;xMin&gt;, &lt;xMax&gt; )

**Descripción:** Establece una nueva escala en el marco de gráficos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

/* Default value for X Scale() is (0,100). */
New Window( "Example",
	Graph Box(
		Y Scale( -10, 90 ),
		X Scale( -10, 90 ),
		Oval(
			X Origin() + 10,
			(Y Origin() + Y Range()) - 10,
			(X Origin() + X Range()) - 10,
			Y Origin() + 10,
			1
		)
	)
);

```

### XML Attr

**Sintaxis:** value = XML Attr( attr name ); aa = XML Attr()

**Descripción:** Extrae el valor, en forma de cadena de caracteres, de un atributo XML en el contexto aplicación del comando Parse XML(). Si no se indica ningún nombre, devuelve un arreglo asociativo de todos los pares nombre/valor.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex =
"<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";
Parse XML( ex,
	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),
	On Element(
		"col",
		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )
	)
);

```

### XML Decode

**Sintaxis:** text = XML Decode( textxml )

**Descripción:** Descodifica símbolos en XML en forma de texto ordinario. Sustituye " por ", < por <, &gt por >; & por &.

**JMP Versión agregada:** Antes de la versión 14

```jsl

text = XML Decode( "isSmallAlpha = letter&gt;=&quot;a&quot; &amp; letter&lt;=&quot;z&quot;" );

```

### XML Encode

**Sintaxis:** textxml = XML Encode( text )

**Descripción:** Prepara un texto para introducirlo en XML, sustituyendo " por ", < por <, > por > & por &.

**JMP Versión agregada:** Antes de la versión 14

```jsl

textxml = XML Encode( "\[isSmallAlpha = letter>="a" & letter<="z"]\" );

```

### XML Text

**Sintaxis:** value = XML Text()

**Descripción:** Extrae el texto de cadena del cuerpo de una etiqueta XML en el contexto de la evaluación con el comando Parse XML().

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex =
"<table name='fromxml'><col name='x'>[1 2 3]</col><col name='y'>[11 22 33]</col></table>";
Parse XML( ex,
	On Element( "table", Start Tag( New Table( XML Attr( "name" ) ) ) ),
	On Element(
		"col",
		End Tag( New Column( XML Attr( "name" ), Set Values( Parse( XML Text() ) ) ) )
	)
);

```

### XPath Query

**Sintaxis:** result = XPath Query(xml, xpath expression)

**Descripción:** Ejecuta una consulta de XPath sobre un documento XML.

**JMP Versión agregada:** Antes de la versión 14

```jsl

result = XPath Query(
	"<doc><colors><color>red</color><color>green</color><color>blue</color></colors></doc>",
	"//color/text()"
);

```

### XY Function

**Sintaxis:** XY Function( x(t), y(t), t, min(0), max(1), inc(.01) | steps(100) )

**Descripción:** Esta función de script gráfico combina una expresión x(t) y una expresión y(t) para dibujar una curva x-y para el rango especificado del parámetro t. Inc() es el incremento máximo en t, o steps() es el número mínimo de pasos en t. Utilice steps() o inc() si el valor predeterminado no muestra detalles.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Spiral",
	Graph Box(
		Pen Color( "red" );
		xCenter = 50;
		yCenter = 50;
		minAngle = 0;
		maxAngle = Pi() * 2 * 20;
		XY Function(
			xCenter + ((ta / 3) * Cos( ta )),
			yCenter + ((ta / 3) * Sin( ta )),
			ta,
			Min( minAngle ),
			Max( maxAngle ),
			inc( Pi() / 100 )
		);
	)
);
/* sin() and cos() use ta as an argument (rotates)
   AND as a factor (expands) in this example.
   (sin and cos use radians, not degrees.) */

```

### Y Function

**Sintaxis:** Y Function( yExpr, xName, &lt;properties&gt; )

**Descripción:** Dibuja la función yExpr en la dimensión Y a medida que la variable xName varía en el intervalo del eje X del gráfico. Entre los argumentos adicionales relativos a propiedades con nombre asignado se encuentran Min(X mínima), Max(X máxima), Fill(patrón de relleno, valor del color de relleno), Inc(límite superior del incremento).

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Y Function( 20 + 40 * Sin( a / 30 ), a );
	)
);

```

### Y Origin

**Sintaxis:** y = Y Origin()

**Descripción:** Devuelve el valor y correspondiente al extremo inferior del marco de gráficos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### Y Range

**Sintaxis:** y = Y Range()

**Descripción:** Devuelve la distancia y de abajo a arriba. Y Origin() + Y Range() corresponde al extremo superior.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### Y Scale

**Sintaxis:** Y Scale( &lt;yMin&gt;, &lt;yMax&gt; )

**Descripción:** Establece una nueva escala en el marco de gráficos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

/* Default value for Y Scale() is (0,100).*/
New Window( "Example",
	Graph Box(
		Y Scale( -10, 90 ),
		X Scale( -10, 90 ),
		Oval(
			X Origin() + 10,
			(Y Origin() + Y Range()) - 10,
			(X Origin() + X Range()) - 10,
			Y Origin() + 10,
			1
		)
	)
);

```

### Year

**Sintaxis:** yr = Year( datetime )

**Descripción:** Devuelve el año correspondiente a un valor de fecha y hora.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Year( Today() );

```

### Zero Or Missing

**Sintaxis:** y = Zero Or Missing( x )

**Descripción:** Devuelve el NOT lógico de x, tratando los valores faltantes como si fuesen ceros: 1 si x falta o es cero y 0 en los demás casos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Zero Or Missing( 1 < 2 );

```

### ZI Negative Binomial Distribution

**Sintaxis:** cumprob = ZI Negative Binomial Distribution( k, lambda, sigma, pi )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con inflación de ceros y distribución binomial negativa sea menor o igual que k, donde lambda es el parámetro de localización, sigma es el parámetro de escala, pi es el parámetro de inflación de ceros y k es el conteo de interés.

**JMP Versión agregada:** 19

```jsl

lambda = 4;
sigma = .5;
p = .2;
New Window( "Example: Zero Inflated Negative Binomial Distribution",
	ppy = Graph Box(
		Y Scale( 0, 1.01 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= 40, k++,
			H Line( k, k + 1, ZI Negative Binomial Distribution( k, lambda, sigma, p ) );
			V Line(
				k + 1,
				ZI Negative Binomial Distribution( k, lambda, sigma, p ),
				ZI Negative Binomial Distribution( k + 1, lambda, sigma, p )
			);
		);
		Text( {30, 0.3}, "\!U03BB=", Round( lambda, 2 ) );
		Text( {30, .2}, "\!U03C3=", Round( sigma, 2 ) );
		Text( {30, .1}, "\!U03C0=", Round( p, 2 ) );
	),
	V List Box(
		H List Box( Slider Box( 0.01, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),
		H List Box( Slider Box( 0.001, 2, sigma, ppy << reshow ), Text Box( "\!U03C3" ) ),
		H List Box( Slider Box( 0, .99, p, ppy << reshow ), Text Box( " \!U03C0" ) ),

	)
);

```

### ZI Negative Binomial Probability

**Sintaxis:** prob = ZI Negative Binomial Probability( k, lambda, sigma, pi)

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con inflación de ceros y distribución binomial negativa sea igual que k, donde lambda es el parámetro de localización, sigma es el parámetro de escala, pi es el parámetro de inflación de ceros y k es el conteo de interés.

**JMP Versión agregada:** 19

```jsl

lambda = 4;
sigma = .5;
p = .1;
New Window( "Example: Zero Inflated Negative Binomial Probability",
	ppy = Graph Box(
		Y Scale( 0, .4 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( k = 0, k <= 40, k++,
			V Line( k, 0, ZI Negative Binomial Probability( k, lambda, sigma, p ) )
		);
		Text( {30, 0.3}, "\!U03BB=", Round( lambda, 2 ) );
		Text( {30, .25}, "\!U03C3=", Round( sigma, 2 ) );
		Text( {30, .2}, "\!U03C0=", Round( p, 2 ) );
	),
	V List Box(
		H List Box( Slider Box( .01, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),
		H List Box( Slider Box( 0.001, 2, sigma, ppy << reshow ), Text Box( "\!U03C3" ) ),
		H List Box( Slider Box( 0, .25, p, ppy << reshow ), Text Box( " \!U03C0" ) )
	)
);

```

### ZI Negative Binomial Quantile

**Sintaxis:** q = ZI Negative Binomial Quantile( lambda, sigma, pi, cumprob )

**Descripción:** Devuelve el cuantil entero más pequeño para el cual la probabilidad acumulada de la distribución binomial negativa con inflación de ceros (lambda, sigma, pi) es mayor o igual que cumprob.

**JMP Versión agregada:** 19

```jsl

qexpl = 20;
qexpsig = .5;
qexpp = .2;
qexpn = 40;
qexpq = 0.5;
New Window( "Example: ZI Negative Binomial Quantile",
	qexpy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qexpk = 0, qexpk < Round( qexpn ), qexpk++,
			H Line(
				qexpk,
				qexpk + 1,
				ZI Negative Binomial Distribution( qexpk, qexpl, qexpsig, qexpp )
			);
			V Line(
				qexpk + 1,
				ZI Negative Binomial Distribution( qexpk, qexpl, qexpsig, qexpp ),
				ZI Negative Binomial Distribution( qexpk + 1, qexpl, qexpsig, qexpp )
			);
		);
		Pen Color( "blue" );
		V Line( ZI Negative Binomial Quantile( qexpl, qexpsig, qexpp, qexpq ), 0, 1.0 );
		Text(
			{2, 0.9},
			" \!U03BB=",
			Round( qexpl, 2 ),
			" \!U03C3=",
			Round( qexpsig, 2 ),
			" \!U03C0=",
			Round( qexpp, 2 )
		);
		Text(
			{2, 0.8},
			" q=",
			Round( qexpq, 2 ),
			" quantile=",
			Round( ZI Negative Binomial Quantile( qexpl, qexpsig, qexpp, qexpq ) )
		);
	),
	H List Box( Slider Box( 0.001, 40, qexpl, qexpy << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 0.001, 2, qexpsig, qexpy << reshow ), Text Box( "\!U03C3" ) ),
	H List Box( Slider Box( 0, .99, qexpp, qexpy << reshow ), Text Box( " \!U03C0" ) ),
	H List Box( Slider Box( 0.001, .999, qexpq, qexpy << reshow ), Text Box( " q" ) )
);

```

### ZI Poisson Distribution

**Sintaxis:** cumprob = ZI Poisson Distribution( k, lambda, pi )

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con inflación de ceros y distribución de Poisson sea menor o igual que k, donde lambda es el parámetro de localización, pi es el parámetro de inflación de ceros y k es el conteo de interés.

**JMP Versión agregada:** 19

```jsl

lambda = 4;
p = .2;
New Window( "Example: Zero Inflated Poisson Distribution",
	ppy = Graph Box(
		Y Scale( 0, 1.01 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 1 );
		For( k = 0, k <= 40, k++,
			H Line( k, k + 1, ZI Poisson Distribution( k, lambda, p ) );
			V Line(
				k + 1,
				ZI Poisson Distribution( k, lambda, p ),
				ZI Poisson Distribution( k + 1, lambda, p )
			);
		);
		Text( {30, 0.2}, "\!U03BB=", Round( lambda, 2 ) );
		Text( {30, .1}, "\!U03C0=", Round( p, 2 ) );
	),
	V List Box(
		H List Box( Slider Box( 0, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),
		H List Box( Slider Box( 0, .99, p, ppy << reshow ), Text Box( " \!U03C0" ) ),

	)
);

```

### ZI Poisson Probability

**Sintaxis:** prob = ZI Poisson Probability( k, lambda, pi)

**Descripción:** Devuelve la probabilidad de que una variable aleatoria con inflación de ceros y distribución de Poisson sea igual que k, donde lambda es el parámetro de localización, pi es el parámetro de inflación de ceros y k es el conteo de interés.

**JMP Versión agregada:** 19

```jsl

lambda = 4;
p = .2;
New Window( "Example: Poisson Probability",
	ppy = Graph Box(
		Y Scale( 0, .6 ),
		X Scale( -1, 40 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( k = 0, k <= 40, k++,
			V Line( k, 0, ZI Poisson Probability( k, lambda, p ) )
		);
		Text( {30, 0.5}, "\!U03BB=", Round( lambda, 2 ) );
		Text( {30, .4}, "\!U03C0=", Round( p, 2 ) );
	),
	V List Box(
		H List Box( Slider Box( 0, 40, lambda, ppy << reshow ), Text Box( " \!U03BB" ) ),
		H List Box( Slider Box( 0, .99, p, ppy << reshow ), Text Box( " \!U03C0" ) ),

	)
);

```

### ZI Poisson Quantile

**Sintaxis:** q = ZI Poisson Quantile( lambda, pi, cumprob )

**Descripción:** Devuelve el cuantil entero más pequeño para el cual la probabilidad acumulada de la distribución Poisson con inflación de ceros (lambda, pi) es mayor o igual que cumprob.

**JMP Versión agregada:** 19

```jsl

qexpl = 20;
qexpp = .2;
qexpn = 40;
qexpq = 0.5;
New Window( "Example: ZI Poisson Quantile",
	qexpy = Graph Box(
		Y Scale( 0, 1.05 ),
		X Scale( -1, 41 ),
		Pen Color( "red" ),
		Pen Size( 2 );
		For( qexpk = 0, qexpk < Round( qexpn ), qexpk++,
			H Line( qexpk, qexpk + 1, ZI Poisson Distribution( qexpk, qexpl, qexpp ) );
			V Line(
				qexpk + 1,
				ZI Poisson Distribution( qexpl, qexpp, qexpk ),
				ZI Poisson Distribution( qexpl, qexpp, qexpk + 1 )
			);
		);
		Pen Color( "blue" );
		V Line( ZI Poisson Quantile( qexpl, qexpp, qexpq ), 0, 1.0 );
		Text( {2, 0.9}, " \!U03BB=", Round( qexpl, 2 ), " \!U03C0=", Round( qexpp, 2 ) );
		Text(
			{2, 0.8},
			" q=",
			Round( qexpq, 2 ),
			" quantile=",
			Round( ZI Poisson Quantile( qexpl, qexpp, qexpq ) )
		);
	),
	H List Box( Slider Box( 0, 40, qexpl, qexpy << reshow ), Text Box( " \!U03BB" ) ),
	H List Box( Slider Box( 0, .99, qexpp, qexpy << reshow ), Text Box( " \!U03C0" ) ),
	H List Box( Slider Box( 0, 1, qexpq, qexpy << reshow ), Text Box( " q" ) )
);

```

