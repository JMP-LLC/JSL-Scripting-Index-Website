# Alle Funktionen

### \\[...]\\

**Syntax:** y = \\[string]\\

**Beschreibung:** Für Passagen, in denen viele Escape-Zeichen erforderlich sind, kann das Trennzeichen \\[...]\\ verwendet werden.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** s = Abbrev Date( datetime, &lt;format&gt; )

**Beschreibung:** Gibt die kurze Darstellung eines Datum/Uhrzeit-Werts entsprechend dem Gebietsschema zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Abbrev Date( Today() );

```

### Abs

**Syntax:** y = Abs( x )

**Beschreibung:** Gibt den Absolutwert von x zurück. Das Argument kann eine Zahl, Matrix oder Liste von Zahlen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Abs( -5 );

```

### Add

**Syntax:** y = x0 + x1; y = Add( x0, x1, ... )

**Beschreibung:** Fügt alle Argumente hinzu, diese können Zahlen, Matrizen oder Listen von Zahlen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Pi() + 10;

```

### Add Color Theme

**Beschreibung:** Erstellt ein neues benutzerdefiniertes Farbschema und registriert es in der Schemaauswahl.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Add Color Theme( {"Yellow To Blue", 0, {{255, 255, 0}, {0, 0, 255}}, {0.0, 1.0}} );

```

**Beispiel 2**

```jsl

Add Color Theme(
	{"Black To Red To White", {"Continuous", "Categorical", "Diverging"}, {{0, 0, 0}, {255, 0,
	0}, {255, 255, 255}, Missing( "Green" )}, {"Full Color", "Tritanopia", "Tritanomaly"}}
);

```

### Add Custom Functions

**Syntax:** Add Custom Functions({f1, f2, ...} | f)

**Beschreibung:** Definiert eine Liste von benutzerdefinierten Funktionen zur Verwendung in Skripten und im Formeleditor. Der Befehl fügt die Liste auch der Umgebung hinzu.

**JMP Version hinzugefügt:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y}, x + y - 1 ) );
mySub = New Custom Function( "custom", "Sub", Function( {x, y}, x - y + 1 ) );
Add Custom Functions( {myAdd, mySub} );

```

### Add To

**Syntax:** y += x; Add To( y, x )

**Beschreibung:** Addiert einen Wert zu einer Variablen oder einer Liste von Variablen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ex = 1;
ex += 2;
ex;

```

### Add Vectors BLAS

**Syntax:** z = Add Vectors BLAS( x, y, alpha )

**JMP Version hinzugefügt:** 17

```jsl

x = [1, 2, 3, 4];
y = [5, 6, 7, 8];
alpha = 0.5;
z = Add Vectors BLAS( x, y, alpha );

```

### Alignment Cell Box

**Syntax:** y = Alignment Cell Box( row, col, nRow, nCol, &lt;Sides(left+2*top+4*right+8*bottom=15)&gt; &lt;RowSpan(nRow matrix)&gt; &lt;ColSpan(nCol matrix)&gt;, matrix or list of strings )

**Beschreibung:** Gibt einen Verweis auf ein Anzeigefeld zurück, das den Zeileninhalt (oder Spalteninhalt) enthält, der sich innerhalb eines Ausrichtungsrasterfelds befindet.

**JMP Version hinzugefügt:** 19

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

**Syntax:** y = Alignment Grid Box( alignment cell boxes )

**Beschreibung:** Gibt einen Verweis auf ein Anzeigefeld zurück, das Ausrichtungszellenfelder enthalten kann.

**JMP Version hinzugefügt:** 19

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

**Syntax:** y = Alignment Multi Box( row, col, nRow, nCol, nElements, list-of-nElements-matrices or empty values, list-of-nElements-lists of strings or empty values )

**Beschreibung:** Gibt einen Verweis auf ein Anzeigefeld zurück, das mehrere Elemente in jeder Zelle enthält, die innerhalb eines Ausrichtungsrasterfelds enthalten ist.

**JMP Version hinzugefügt:** 19

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

**Syntax:** y = All( x, ... )

**Beschreibung:** Gibt 1 zurück, wenn alle Elemente ungleich 0 sind, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

All( [1 2 3] );

```

### Alpha Shape

**Syntax:** ashape = Alpha Shape(Triangulation)

**Beschreibung:** Gibt die Alpha-Form für die vorgegebene Triangulierung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = Alpha Shape( triang );

```

### And

**Syntax:** y = x1 & x2; y = And( x1, x2, ... )

**Beschreibung:** Gibt das logische AND aller Argumente zurück: 1, wenn alle Argumente ungleich 0 sind, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

1 < 2 & 3 < 4;

```

### AndMZ

**Syntax:** y = AndMZ( x1, x2, ... )

**Beschreibung:** Gibt das logische AND von allen Argumenten zurück, wobei fehlende Werte als Nullen behandelt werden: 1, wenn alle Argumente ungleich 0 sind, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

AndMZ( 1 < 2, 3 < 4 );

```

### Any

**Syntax:** y = Any( x, ... )

**Beschreibung:** Gibt 1 zurück, wenn ein Element ungleich 0 ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Any( [1 0 2] );

```

### Arc

**Syntax:** Arc( left, top, right, bottom, startAngle, endAngle )

**Beschreibung:** Zeichnet einen Bogen eines Kreises.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Arc( 10, 80, 70, 30, 0, 90 );
	)
);

```

### Arc Finder

**Syntax:** Arc Finder( Group( lot, wafer ), X( col ), Y( col ), &lt;optional arguments&gt; )

**Beschreibung:** Findet die Bögen in den Punktdaten und erstellt eine neue Spalte, in der die Bögen identifiziert werden.

**JMP Version hinzugefügt:** 14

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

**Syntax:** y = ArcCosH( x )

**Beschreibung:** Gibt den inversen Cosinus hyperbolicus (Area Cosinus Hyperbolicus) von x zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ArcCosH( 1 );

```

### ArcCosine

**Syntax:** y = ArcCosine( x )

**Beschreibung:** Gibt den inversen trigonometrischen Cosinus (Arcus Cosinus) von x zurück, wobei x im Intervall [-1, 1] liegt und das Ergebnis im Intervall [0, Pi()].

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ArcCosine( 0.5 );

```

### ArCos

**Syntax:** y = ArcCosine( x )

**Beschreibung:** Gibt den inversen trigonometrischen Cosinus (Arcus Cosinus) von x zurück, wobei x im Intervall [-1, 1] liegt und das Ergebnis im Intervall [0, Pi()].

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ArcCosine( 0.5 );

```

### ArcSine

**Syntax:** y = ArcSine( x )

**Beschreibung:** Gibt den inversen trigonometrischen Sinus (Arcus Sinus) von x zurück, wobei x im Intervall [-1, 1] liegt und das Ergebnis im Intervall [-Pi()/2, Pi()/2].

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ArcSine( 0.5 );

```

### ArcSinH

**Syntax:** y = ArcSinH( x )

**Beschreibung:** Gibt den inversen Sinus hyperbolicus (Area Sinus Hyperbolicus) von x zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ArcSinH( 1 );

```

### ArcTan

**Syntax:** y = ArcTangent( x1, &lt;x2=1&gt; )

**Beschreibung:** Gibt den inversen trigonometrischen Tangens (Arcus Tangens) von x1/x2 zurück, wobei das Ergebnis im Intervall [-Pi()/2, Pi()/2] liegt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

4 * ArcTangent( 1 );

```

### ArcTangent

**Syntax:** y = ArcTangent( x1, &lt;x2=1&gt; )

**Beschreibung:** Gibt den inversen trigonometrischen Tangens (Arcus Tangens) von x1/x2 zurück, wobei das Ergebnis im Intervall [-Pi()/2, Pi()/2] liegt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

4 * ArcTangent( 1 );

```

### ArcTanH

**Syntax:** y = ArcTanH( x )

**Beschreibung:** Gibt den inversen Tangens hyperbolicus (Area Tangens Hyperbolicus) von x zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ArcTanH( 0.5 );

```

### Arg

**Syntax:** y = Arg( x, i )

**Beschreibung:** Gibt das i-te Argument des ausgewerteten Ausdrucks zurück, oder Empty(), wenn es kein i-tes Argument gibt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Arg( Expr( Sum( a, b, c ) ), 2 );

```

### Arg Expr

**Syntax:** y = Arg Expr( expr, i )

**Beschreibung:** Gibt das i-te Argument des Ausdrucks zurück, oder Empty(), wenn es kein i-tes Argument gibt. Diese Funktion ist veraltet. Bitte verwenden Sie stattdessen Arg().

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

// See Example 2 for the deprecated Arg Expr() equivalent
Arg( Expr( Sum( a, b, c ) ), 2 );

```

**Beispiel 2**

```jsl

// Deprecated
Arg Expr( Sum( a, b, c ), 2 );

```

### ARIMA Forecast

**Syntax:** x = ARIMA Forecast( dtcol, length, model, estimates, from, to )

**Beschreibung:** Gibt einen Vektor von Vorhersagewerten für die Spalte dtcol in dem Bereich zurück, der von den Argumenten from und to“ angegeben wird. Das Argument length gibt einen Anteil der Spalte an, den die Funktion verwenden soll. Das Argument model stimmt mit Meldungen überein, die an die Zeitreihenplattform gesendet werden, um ein Modell anzupassen. Das Argument estimates stimmt mit dem untergeordneten Element des Ergebnisses einer Meldung „Modelle abrufen“ eines einzelnen Modells überein. Typischerweise liegt der Wert from zwischen 1 und dem Wert to, jeweils inklusive. Wenn jedoch from<=0 und from<=to sind, handelt es sich bei einem Teil der Ergebnisse um gefilterte Vorhersagen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Arrhenius( tempC )

**Beschreibung:** Gibt die nichtspezifische Komponente der Arrhenius-Beziehung zurück, die dann mit der Aktivierungsenergie in der Arrhenius-Gleichung multipliziert wird. Gibt 11604.5181215503 / (tempC + 273.15) zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Arrhenius( 100 );

```

### Arrhenius Inv

**Syntax:** tempC = Arrhenius Inv( y )

**Beschreibung:** Gibt die inverse Arrhenius-Funktion zurück, d.h.: (11604.5181215503 / y) - 273.15.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Arrhenius Inv( 100 );

```

### Arrow

**Syntax:** Arrow( {x1, y1}, {x2, y2}, ... ); Arrow( xMatrix, yMatrix )

**Beschreibung:** Zeichnet eine Linie mit einem Pfeil oder einer Folge solcher Linien.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 4 );
		Arrow( [10 30 90], [88 22 44] );
	)
);

```

### ArSin

**Syntax:** y = ArcSine( x )

**Beschreibung:** Gibt den inversen trigonometrischen Sinus (Arcus Sinus) von x zurück, wobei x im Intervall [-1, 1] liegt und das Ergebnis im Intervall [-Pi()/2, Pi()/2].

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ArcSine( 0.5 );

```

### As Boolean

**Syntax:** b = As Boolean( x )

**Beschreibung:** Wertet einen Ausdruck aus und gibt einen Booleschen Wert zurück.

**JMP Version hinzugefügt:** 14

```jsl

x = 45;
b = As Boolean( x > 2 );
Show( b );

```

### As C Expr

**Syntax:** y = As C Expr( x )

**Beschreibung:** Gibt einen äquivalenten Ausdruck in der Programmiersprache C zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

As C Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As Column

**Syntax:** y = :name;y = dataTable:name;y = As Column( name );y = As Column( dataTable, name )

**Beschreibung:** Greift auf die angegebene Spalte in der angegebenen oder aktuellen Datentabelle zu. Ein Fehler wird ausgegeben, wenn die Spalte oder Datentabelle nicht gefunden wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt:height[1] + :height[2] + As Column( "height" )[3];

```

### As Constant

**Syntax:** y = As Constant( x )

**Beschreibung:** Wertet einen Ausdruck aus, um einen konstanten Wert zu erstellen, der sich nach der Berechnung nicht verändert.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

New Table( "As Constant Demo Table 1",
	Add Rows( 10 ),
	New Column( "Non-Constant", Formula( Random Uniform() ) ),
	New Column( "Constant", Formula( As Constant( Random Uniform() ) ) )
);

```

**Beispiel 2**

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

**Beispiel 3**

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

**Syntax:** dt = As Date( datetime )

**Beschreibung:** Gibt einen Datum/Uhrzeit-Wert zurück, der intern als Datum zu Ausgabezwecken gekennzeichnet ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

As Date( Today() );

```

### As Global

**Syntax:** y = ::name; y = As Global( name )

**Beschreibung:** Greift auf die angegebene globale Variable zu oder gibt einen Fehler aus, wenn die globale Variable nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

::ex = 23;
Local( {ex = 12}, Eval List( {ex, ::ex, As Global( "ex" )} ) );

```

### As JavaScript Expr

**Syntax:** y = As JavaScript Expr( x )

**Beschreibung:** Gibt einen äquivalenten Ausdruck in der Programmiersprache JavaScript zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

As JavaScript Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As JSON Expr

**Syntax:** y = As JSON Expr( x )

**Beschreibung:** Gibt eine JSON-Darstellung (JavaScript Object Notation) des Ausdrucks zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

As JSON Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As List

**Syntax:** y = As List( matrix )

**Beschreibung:** Gibt eine Listendarstellung einer Matrix zurück. Matrizen mit mehreren Spalten werden in eine Liste der Listen umgewandelt, eine Liste pro Zeile, wie vom Matrix-Operator zu erwarten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

As List( [11 22 33, 44 55 66] );

```

### As Name

**Syntax:** y = As Name( s )

**Beschreibung:** Konvertiert eine Zeichenkette in einen Namen oder eine Liste von Zeichenketten in eine Liste von Namen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:(As Name( "height" ))[3];

```

### As Namespace

**Syntax:** asns = As Namespace( ns )

**Beschreibung:** Greift auf den angegebenen Namensraum zu oder gibt einen Fehler aus, wenn der Namensraum nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ns = New Namespace(
	"complex"
);
As Namespace( ns );

```

### As Python Expr

**Syntax:** y = As Python Expr( x )

**Beschreibung:** Gibt einen äquivalenten Ausdruck in der Programmiersprache Python zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

As Python Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As Root

**Syntax:** y = :::name; y = As Root( name )

**Beschreibung:** Greift auf die angegebene stammbeschränkte Variable zu oder gibt einen Fehler aus, wenn die stammbeschränkte Variable nicht vorhanden ist.

**JMP Version hinzugefügt:** 15

```jsl

::: ex = 23;
Local( {ex = 12}, Eval List( {ex, ::: ex, As Global( "ex" )} ) );

```

### As Row State

**Syntax:** rs = As Row State( x )

**Beschreibung:** Konvertiert eine Zahl in einen Zeileneigenschaftswert.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = As SAS Expr( x )

**Beschreibung:** Gibt eine Version des Ausdrucks zurück, die für einen SAS-DATA-Step besser geeignet ist. Der Code muss in einen PROC DS2-Aufruf verpackt werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

As SAS Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ) );

```

### As Scoped

**Syntax:** y = namespace:variable; y = As Scoped( namespace, variable )

**Beschreibung:** Greift auf die angegebene beschränkte Variable zu oder gibt einen Fehler aus, wenn die beschränkte Variable nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Here:z = 23.5;
As Scoped( Here, z );

```

### As SQL Expr

**Syntax:** y = As SQL Expr( x, &lt;style&gt; )

**Beschreibung:** Gibt eine Zeichenkette zurück, die den Ausdruck – konvertiert in eine gültige SQL-Syntax – zur Verwendung in einer SQL-Select-Anweisung enthält.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

As SQL Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ), "MySQL" );

```

### As Table

**Syntax:** dt = As Table( matrix, &lt;matrix2,...&gt; &lt; &lt;&lt;invisible/private&gt;, &lt; &lt;&lt;Column Names(name list) &gt; )

**Beschreibung:** Konvertiert eine Matrix in eine Datentabelle. Die Option invisible kann verwendet werden, um die Anzeige der Tabelle zu unterdrücken.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

As Table( [1 2 3, 4 5 6] );

```

### Assign

**Syntax:** y = x; Assign( y, x )

**Beschreibung:** Weist einer Variable oder einer Liste von Variablen einen Wert zu.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

{ex1, ex2} = {Pi(), 1};
ex1 + ex1;

```

### Associative Array

**Syntax:** y = Associative Array( {{key1, value1}, ...} );y = Associative Array( keys, values )

**Beschreibung:** Erstellt ein assoziatives Array, das auch als Wörterbuch oder Hashmap bekannt ist. Im Format mit zwei Argumenten können Schlüssel und Werte eine Liste, eine Matrix oder eine Spalte in einer Datentabelle sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ex = Associative Array( {"red", "blue"}, {1, 2} );
ex["green"] = 3;
ex << get contents;

```

### ATan

**Syntax:** y = ArcTangent( x1, &lt;x2=1&gt; )

**Beschreibung:** Gibt den inversen trigonometrischen Tangens (Arcus Tangens) von x1/x2 zurück, wobei das Ergebnis im Intervall [-Pi()/2, Pi()/2] liegt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

4 * ArcTangent( 1 );

```

### B Spline Coef

**Syntax:** coef = B Spline Coef( x, Internal Knot Grid, &lt;degree = 3&gt;, &lt;KnotEndPoints = min(x) || max(x)&gt; )

**Beschreibung:** Gibt die Matrix von B-Spline-Koeffizienten zurück. Internal Knot Grid ist entweder die Anzahl der gewünschten Knotenpunkte basierend auf Perzentilen von x oder ein Vektor, der die internen Knotenpunkte angibt. Der optionale Parameter degree gibt den Grad der B-Splines mit einem Standardwert von 3 an. Der optionale Parameter KnotEndPoints benötigt eine 2x1-Matrix mit den Positionen [unten, oben] für die Knoten auf der Grenze. Die Knotenendpunkte haben standardmäßig die gleichen Min.- und Max.-Werte wie x. Das zweite Beispiel zeigt, wie B-Spline-Koeffizienten als Designmatrix in einem linearen Modell verwendet werden können.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

B Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );
B Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

**Beispiel 2**

```jsl

xx = (0 :: 10)`;
yy = [0, 1, 0, -1, 0, 1, 0, -1, 0, 1, 0];
designMat = B Spline Coef( xx, 2 );
Linear Regression( yy, designMat, <<nointercept );

```

### Back Color

**Syntax:** Back Color( &lt;name|index|rgbList&gt; )

**Beschreibung:** Legt die Hintergrundfarbe für den Modus „Hintergrund überschreiben“ in der Funktion Text() fest.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Back Color( "red" );
		Text( Erased, {50, 20}, "Hello" );
	)
);

```

### Beep

**Syntax:** Beep()

**Beschreibung:** Gibt einen Warnton ab.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Beep();

```

### Best Partition

**Syntax:** {c1, c2, g2} = Best Partition( xIndices, yIndices, &lt;&lt;Ordered, &lt;&lt;ContinuousY, &lt;&lt;ContinuousX )

**Beschreibung:** Ermittelt die optimale Gruppierung (Versuchsfunktion).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

/*Example for Continuous X and Continuous Y*/Best Partition(
	[1.2, 2.2, 3.5, 4.4, 5.6, 7.8],
	[11.2, 11.5, 11.8, 100.5, 100.7, 100.8],
	<<ContinuousX,
	<<ContinuousY
);

```

### Beta

**Syntax:** z = Beta( x, y )

**Beschreibung:** Gibt die Beta-Funktion von x und y zurück, definiert als Gamma( x ) * Gamma( y ) / Gamma( x + y ).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Beta( 5, 4 );

```

### Beta Binomial Distribution

**Syntax:** cumprob = Beta Binomial Distribution( k, p, n, delta )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine beta-binomialverteilte Zufallsvariable kleiner oder gleich k ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** prob = Beta Binomial Probability( k, p, n, delta )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine beta-binomialverteilte Zufallsvariable gleich k ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Beta Binomial Quantile( p, n, delta, cumprob )

**Beschreibung:** Gibt das Quantil als kleinste ganze Zahl zurück, für das die kumulierte Wahrscheinlichkeit der Beta-Binomialverteilung (( p, n, delta )) größer als oder gleich cumprob ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Beta Density( q, alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**Beschreibung:** Gibt die Dichte an q für eine Beta-Verteilung zurück, wobei q im Intervall theta bis theta + sigma liegt. alpha und beta sind Formparameter. theta und sigma sind die jeweiligen Schwellen- und Bereichsparameter.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Beta Distribution( q, alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine betaverteilte Zufallsvariable kleiner als q ist. alpha und beta sind Formparameter. theta und sigma sind die jeweiligen Schwellen- und Bereichsparameter.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Beta Quantile( p, alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**Beschreibung:** Gibt das Quantil einer Beta-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre. alpha und beta sind Formparameter. theta und sigma sind die jeweiligen Schwellen- und Spannweitenparameter.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Beta Quantile( 0.95, 2, 5 );

```

### Binomial Distribution

**Syntax:** cumprob = Binomial Distribution( p, n, k )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine binomialverteilte Zufallsvariable kleiner oder gleich k ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** prob = Binomial Probability( p, n, k )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine binomialverteilte Zufallsvariable gleich k ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Binomial Quantile( p, n, cumprob )

**Beschreibung:** Gibt das Quantil als kleinste ganze Zahl zurück, für das die kumulierte Wahrscheinlichkeit der Binomialverteilung (p, n) größer als oder gleich cumprob ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** color = Blend Colors( color1, color2, &lt;percent2&gt;, &lt;colorSpace&gt;, &lt;hueDirection&gt; )

**Beschreibung:** Vermischt zwei Farben mit einem konfigurierbaren Prozentsatz und Farbraum.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

Blend Colors( "black", "white", 0.25 );

```

**Beispiel 2**

```jsl

Blend Colors( "red", "blue", "sRGB" );

```

**Beispiel 3**

```jsl

Blend Colors( "red", "blue", "lRGB" );

```

**Beispiel 4**

```jsl

Blend Colors( "red", "blue", 0.5, "LUV" );

```

**Beispiel 5**

```jsl

Blend Colors( "red", "blue", 0.75, "HLS" );

```

**Beispiel 6**

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

**Beispiel 7**

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

**Syntax:** blobResult = Blob MD5( blob )

**Beschreibung:** Erzeugt ein 16-Byte-Ergebnis-BLOB aus einem Quell-BLOB (Binary Large OBject). Das 16-Byte-BLOB ist die MD5-Prüfsumme (oder das Hash) des Quell-BLOB.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** blobResult = Blob Peek( blob, offset, &lt;length&gt; )

**Beschreibung:** Erzeugt aus einem Unterbereich von Bytes des angegebenen Blobs ein neues Blob. Das Argument offset ist nullbasiert, also befindet sich das erste Byte an Offset 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Blob Peek( Char To Blob( "Quick Bob, eat your lunch!" ), 6 /*Zero based!*/, 3 );

```

### Blob To Char

**Syntax:** s = Blob To Char( blob, &lt;encoding="utf-8"&gt; )

**Beschreibung:** Erzeugt mittels der angegebenen Codierung aus einem BLOB (Binary Large OBject) eine Zeichenkette. Unterstützt werden u. a. die Codierungen utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, shift_jis, euc-jp und ascii~hex.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Blob To Char( Hex To Blob( "436166C3A9" ) ) || Blob To Char(
	Hex To Blob( "436166C3A9" ),
	"ascii~hex"
);

```

### Blob To Matrix

**Syntax:** m = Blob To Matrix( blob, type, bytesEach, endian, &lt;nCols=1&gt; )

**Beschreibung:** Erzeugt eine Matrix durch Konvertieren der Bytes im Blob in Zahlen. type ist entweder „int“, „uint“ oder „float“. bytesEach ist entweder 1, 2, 4 oder 8. endian gibt an, ob das erste Byte das höchstwertige („big“) oder das niederwertigste („little“) Byte ist. „native“ gibt das native Format des Rechners an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Blob To Matrix( Hex To Blob( "00010002FFFFFFFE" ), "int", 2, "big", 2 );

```

### Border Box

**Syntax:** y = Border Box( &lt;Left( pix )&gt;, &lt;Right( pix )&gt;, &lt;Top( pix )&gt;, &lt;Bottom( pix )&gt;, &lt;Sides( 0 )&gt;, displayBoxArg )

**Beschreibung:** Erzeugt ein Anzeigefeld, das Platz um das Anzeigefeld für das Argument herum hinzufügt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** x = Box Cox Inverse Transform( y, lambda )

**Beschreibung:** Gibt die inverse Box-Cox-Transformation des Arguments zurück.

**JMP Version hinzugefügt:** 19

```jsl

Box Cox Inverse Transform( 3, 2 );

```

### Box Cox Transform

**Syntax:** y = Box Cox Transform( x, lambda )

**Beschreibung:** Gibt die Box-Cox-Transformation des Arguments zurück.

**JMP Version hinzugefügt:** 19

```jsl

Box Cox Transform( 3, 2 );

```

### Box Plot Seg

**Syntax:** b = Box Plot Seg(&lt;data&gt;, &lt;frequency&gt;, &lt;weight&gt;, &lt;vertical=0|1&gt;)

**Beschreibung:** Gibt ein Anzeigesegment zurück, das einen auf den übergebenen X- und Y-Werten basierenden Box-Plot darstellt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 5 ), Box Plot Seg( [1, 2, 3, 4] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));

```

### Break

**Syntax:** Break()

**Beschreibung:** Unterbricht eine For- oder While-Schleife und springt an das Ende der Schleife.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

For( i = 1, i <= 10, i++,
	If( i == 5, Break() );
	Print( "i=" || Char( i ) );
);

```

### Build Information

**Syntax:** y = Build Information()

**Beschreibung:** Gibt Datum und Uhrzeit der Generierung, Version oder Debug-Generierung und Produktname zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Build Information();

```

### Busy Light

**Syntax:** y = Busy Light( &lt; &lt;&lt;Automatic(0|1)&gt;, &lt;Size(x, y)&gt;, &lt; &lt;&lt;Disable&gt; )

**Beschreibung:** Erstellt ein sich drehendes Bild, das anzeigt, dass ein Prozess arbeitet.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example", Busy Light( <<automatic ) );

```

### Button Box

**Syntax:** y = Button Box( title, script )

**Beschreibung:** Erzeugt ein Anzeigefeld für die Anzeige einer beschrifteten Schaltfläche. Das Argument script wird ausgeführt, wenn auf die Schaltfläche geklickt wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example", Button Box( "Press Me", Print( "Pressed." ) ) );

```

### Calendar Box

**Syntax:** y = Calendar Box()

**Beschreibung:** Gibt ein Anzeigefeld mit einem Kalenderbedienelement zurück. Der Kalender unterstützt die einzelne Auswahl eines Datums und optional einer Uhrzeit.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Calendar Box Example", Calendar Box() );

```

### Caption

**Syntax:** y = Caption( &lt;{h, v}&gt;, text | remove, &lt;Delayed( seconds )&gt;, &lt;Font(font)&gt;, &lt;Font Size(size)&gt;, &lt;Text Color(color)&gt;, &lt;Back Color(color)&gt;, &lt;Spoken(bool)&gt; )

**Beschreibung:** Zeigt ein Textfenster an der von {h, v} angegebenen Stelle und mit dem vom Argument text angegebenen Text an. Das Argument Delayed( seconds ) legt die Wartezeit vor jeder Texteinblendung fest.

**JMP Version hinzugefügt:** Vor Version 14

**Fenstertext entfernen**

```jsl

Caption( "explanation" );
Wait( 2 );
Caption( remove );

```

**Formatierter Fenstertext**

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

**Syntax:** CAS Connect(&lt;URL(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;, &lt;Prompt(Never | Always | IfNeeded)&gt;, &lt;Session("session id")&gt;, &lt;Proxy Server("http://my_proxy:80")&gt;, &lt;Proxy User("proxy_username")&gt;, &lt;Bypass Proxy("http://localhost:80")&gt;, &lt;Certificates(...)&gt;, &lt;Verify Certificates(1 | 0)&gt;, &lt;No Verify Certificates(1 | 0)&gt;, &lt;Timeout(seconds)&gt;, &lt;Authorization Method("Basic" | "Bearer")&gt;)

**Beschreibung:** Stellt eine Verbindung zu einem neuen CAS-Server her. CAS Connect verwendet die Argumente URL, Username, Password und optional Prompt und Session. Für Prompt kann IfNeeded, Always oder Never angegeben werden. URL, Username, Password können weggelassen werden, wenn für das Argument Prompt eine der Optionen IfNeeded oder Always angegeben ist. Der Standardwert für Prompt ist Never. Session kann verwendet werden, um erneut eine Verbindung zu einer vorhandenen CAS-Sitzung herzustellen. Die Sitzung muss für die in der Verbindung verwendeten Argumente URL, Username und Password gültig sein. Das optionale Argument „Certificates“ ist nützlich, um vertrauenswürdige Zertifikate für HTTPS-Verbindungen mit CAS bereitzustellen. Die optionalen Argumente „Verify Certificates“ oder „No Verify Certificates“ sind nützlich, um kurzzeitig selbst signierte Zertifikate zu akzeptieren. Das optionale Argument „Proxy Server“ ist nützlich, um einen Proxy-Host in einer Proxy-Umgebung anzugeben. Das optionale Argument „Proxy User“ ist nützlich, um Benutzer- und Kennwortinformationen für eine Proxy-Umgebung bereitzustellen. Das optionale Argument „Bypass Proxy“ dient zum Umgehen des Proxy bei bestimmten Hosts. Das optionale Argument „Timeout“ legt einen Timeout-Wert für die CAS-Verbindungsoperationen fest. Das optionale Argument „Authorization Method“ gibt an, wie JMP eine Verbindung mit CAS herstellt. Dies ist von der CAS-Bereitstellung abhängig.

**JMP Version hinzugefügt:** 15

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

**Syntax:** CAS Delete Table(tablename, &lt;remove&gt;)

**Beschreibung:** Diese Aktion löscht die Dateisystemtabelle. Die Tabelle im Speicher ist davon nicht betroffen. Durch Angabe von Quiet werden Fehler bei einer nicht vorhandenen Tabelle unterdrückt. Durch Angabe von remACs werden Zugriffskontrollen für eine Tabelle entfernt. Durch Angabe von Remove wird auch die Tabelle aus dem Speicher entfernt.

**JMP Version hinzugefügt:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Delete Table( "Casuser", "Big Class" );

```

### CAS Disconnect

**Syntax:** CAS Disconnect()

**Beschreibung:** Trennt die Verbindung zum CAS-Server und beendet optional die Sitzung. Standardmäßig wird die Sitzung beim Trennen der Verbindung beendet.

**JMP Version hinzugefügt:** 15

```jsl


url = "http://myCasURL";
cas = CAS Connect( URL( url ), Username( "myCas_user" ), Prompt( Always ) );
CAS Disconnect();

```

### CAS Export Data

**Syntax:** y = CAS Export Data(jmp_data_table, cas_libref, cas_dataset, &lt;named_arguments&gt;)

**Beschreibung:** Exportiert eine Tabelle auf einen CAS-Server. jmp_data_table ist die zu exportierende JMP-Datentabelle, und cas_libref und cas_dataset sind die Zielspeicherorte auf dem CAS-Server. Das optional benannte Argument ist Save(1|0). Wenn eine Tabelle in CAS exportiert wird, wird sie nicht dauerhaft im CAS-Dateisystem gespeichert, wenn nicht die Option Save verwendet wird. Die meisten CAS-Aktionen geschehen im Speicher.

**JMP Version hinzugefügt:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "CASUSER", "Big Class" );

```

### CAS Get Data Sets

**Syntax:** y = CAS Get Data Sets(&lt;"caslib"&gt;)

**Beschreibung:** Ruft eine Liste verfügbarer CAS-Datensätze ab. Diese Datensätze werden im CAS-Dateisystem gefunden. Das optionale Argument begrenzt die Liste der Datensätze auf die CAS-Bibliothek. Wenn kein Argument verwendet wird, enthält die Liste der Datensätze den vollständig qualifizierten Datensatznamen (library.dataset). Wenn das Argument verwendet wird, listet die Datensatzliste die Datensatznamen auf.

**JMP Version hinzugefügt:** 15

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

**Syntax:** y = CAS Get Libraries()

**Beschreibung:** Ruft eine Liste verfügbarer CAS-Bibliotheken ab.

**JMP Version hinzugefügt:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
libraries = CAS Get Libraries();
Show( libraries );

```

### CAS Import Data

**Syntax:** dt = CAS Import Data(libref, dataset, &lt;named_arguments&gt;)

**Beschreibung:** Importiert eine Tabelle von einem CAS-Server. Optional benannte Argumente sind Invisible(0|1), Private(0|1) und UseLabelsForVarNames(0|1)

**JMP Version hinzugefügt:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Import Data( "Casuser.Big Class" );

```

### CAS Is Connected

**Syntax:** CAS Is Connected

**Beschreibung:** Gibt 1 zurück, wenn eine aktive CAS-Server-Verbindung besteht. Andernfalls wird 0 zurückgegeben.

**JMP Version hinzugefügt:** 15

```jsl


connected = CAS Is Connected();
Show( connected );

```

### CAS Remove Table

**Syntax:** CAS Remove Table(tablename, &lt;delete&gt;)

**Beschreibung:** Durch diese Aktion wird die im Speicher befindliche Tabelle verworfen. Die Datei, die von der Speicheraktion erstellt wurde, ist nicht betroffen. Wenn Sie „Delete“ angeben, wird die Tabelle auch aus dem Dateisystem gelöscht.

**JMP Version hinzugefügt:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
CAS Remove Table( "Casuser", "Big Class" );

```

### CAS Table To Data Table

**Syntax:** dt = CAS Table To Data Table(jsonstring, &lt;Invisible(1|0) | Private(1|0) | Use Labels for Var Names(1|0)&gt;)

**Beschreibung:** Konvertiert JSON-Text einer SAS-CAS-Tabelle in eine JMP-Datentabelle.

**JMP Version hinzugefügt:** 15

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

**Syntax:** CAS Terminate Sessions

**Beschreibung:** Beendet alle CAS-Sitzungen des aktuellen Benutzers.

**JMP Version hinzugefügt:** 15

```jsl


CAS Connect( Prompt( ifNeeded ) );
CAS Terminate Sessions();

```

### Cauchy Density

**Syntax:** y = Cauchy Density( q, &lt;center&gt;, &lt;scale&gt; )

**Beschreibung:** Gibt die Dichte in q einer Cauchy-Verteilung mit dem Mittelpunkt mu und der Breite sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Cauchy Distribution( q, &lt;center&gt;, &lt;scale&gt; )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Cauchy-verteilte Zufallsvariable kleiner als q ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Cauchy Quantile( p, &lt;center&gt;, &lt;scale&gt; )

**Beschreibung:** Gibt das Quantil einer Cauchy-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** {QuantVec, CumProbVec} = CDF( Y )

**Beschreibung:** Gibt Werte der empirischen kumulierten Wahrscheinlichkeitsfunktion für Vektor oder Liste Y zurück. Die kumulierte Wahrscheinlichkeit ist der Anteil Datenpunkte kleiner oder gleich dem entsprechenden Eintrag im Vektor QuantVec.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Ceiling( x )

**Beschreibung:** Gibt die kleinste ganze Zahl größer oder gleich x zurück. Das Argument kann eine Zahl, Matrix oder Liste von Zahlen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Ceiling( 1.2 );

```

### Char

**Syntax:** s = Char( x, &lt;w&gt;, &lt;d&gt;, &lt; &lt;&lt;Use Locale( Boolean ) &gt;, &lt; &lt;&lt;Full Precision( Boolean ) &gt; )

**Beschreibung:** Gibt eine Darstellung von x als Zeichenkette mit der maximalen Breite w und Dezimalstellen d zurück, wenn das Argument x numerisch ist. <<FullPrecision schreibt numerische Werte mit der gesamten verfügbaren Präzision.

**JMP Version hinzugefügt:** Vor Version 14

**Einfach**

```jsl

Char( Pi(), 10, 4 );

```

**Gebietsschema verwenden**

```jsl

Char( 2.1, <<Use Locale( 1 ) );

```

**Volle Präzision**

```jsl

Show( Char( 88.54 ), Char( 88.54, <<Full Precision( 1 ) ) );

```

### Char To Blob

**Syntax:** blob = Char To Blob( string, &lt;encoding="utf-8"&gt; )

**Beschreibung:** Erzeugt mittels der angegebenen Codierung aus einer Zeichenkette ein BLOB (Binary Large OBject). Unterstützt werden u. a. die Codierungen utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, shift_jis, euc-jp und ascii~hex.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Char To Blob( "Café", "utf-16be" );

```

### Char To Hex

**Syntax:** h = Char To Hex( value, &lt;"integer"&gt;|&lt;encoding="utf-8"&gt; )

**Beschreibung:** Gibt den hexadezimalen Text zurück, der dem angegebenen Wert und der Codierung entspricht, der eine Zahl, eine Zeichenkette oder ein Blob sein kann. Wenn der Wert eine Zahl ist, wird die 64-Bit-Codierung nach IEEE 754 verwendet, es sei denn, es wird das optionale Argument "integer" vorgegeben. Unterstützt werden u. a. die Codierungen utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis und euc-jp.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" );

```

### Char To Path

**Syntax:** m = Char To Path( pathText )

**Beschreibung:** Wandelt eine Pfadspezifikation vom Zeichenformat in Matrixformat um.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show( Char To Path( "M10 10 L50 10 L30 50 Z M20 20 L40 20 L30 40 Z" ) );

```

### Check Box

**Syntax:** y = Check Box( {item, ...}, &lt;script&gt; )

**Beschreibung:** Erzeugt ein Anzeigefeld für die Anzeige eines oder mehrerer Kontrollkästchen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example", cb = Check Box( {"Good"}, Show( cb << Get() ) ) );

```

### ChiSquare Density

**Syntax:** p = ChiSquare Density( q, df, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt die Dichte in q einer Chi-Quadrat-Verteilung mit df Freiheitsgraden zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = ChiSquare Distribution( q, df, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Chi-Quadrat-verteilte Zufallsvariable kleiner als q ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = ChiSquare Log CDistribution( x, df, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt den Logarithmus von 1 - Chi-Quadrat-Verteilungsfunktion zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = ChiSquare Log Density( x, df, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt den Logarithmus der Chi-Quadrat-Wahrscheinlichkeitsdichte zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = ChiSquare Log Distribution( x, df, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt den Logarithmus der Chi-Quadrat-Verteilungsfunktion zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** nc = ChiSquare Noncentrality( x, df, prob )

**Beschreibung:** Gibt den Nichtzentralitätsparameter nc so zurück, dass prob gleich der Wahrscheinlichkeit ist, dass eine Chi-Quadrat-verteilte Zufallsvariable mit df Freiheitsgraden kleiner als x ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = ChiSquare Quantile( p, df, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt das Quantil einer Chi-Quadrat-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ChiSquare Quantile( 0.15, 5 );

```

### Chol Update

**Syntax:** L2 = Chol Update( L, V, C )

**Beschreibung:** Gibt eine aktualisierte Cholesky-Wurzel von A+V*C*V&apos; zurück, wobei C eine symmetrische m x m Matrix und V eine n x m Matrix ist. Das Argument L muss die Cholesky-Wurzel einer n x n Matrix A sein

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** L = Cholesky( A )

**Beschreibung:** Gibt die Cholesky-Zerlegung einer positiv semidefiniten Matrix aus. L ist eine untere Dreiecksmatrix, so dass L*L` = A.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Cholesky( [1 2, 2 13] );

```

### Choose

**Syntax:** y = Choose( i, expr1, expr2, ..., exprElse )

**Beschreibung:** Wertet das i-te Argument expr aus und gibt es zurück. Wenn es kein i-tes Argument expr gibt, wird das Argument exprElse zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Choose( Random Integer( 1, 5 ), "red", "blue", "other" );

```

### Choose Closest

**Syntax:** Choose Closest(source string, {canonical strings...}, &lt;Ignore Case(ignore=1|0)&gt;, &lt;Ignore Nonprintable(ignore=1|0)&gt;, &lt;Ignore Whitespace(ignore=1|0)&gt;, &lt;Max Edit Count(count)&gt;, &lt;Max Edit Ratio([0..1])&gt;, &lt;Min String Length(&lt;count=3&gt;)&gt;, &lt;Replace Unmatched(replace=0|1)&gt;, &lt;Unmatched Value(&lt;value=""&gt;)&gt;)

**Beschreibung:** Die nächste Zeichenkette innerhalb der vorgegebenen Regeln auswählen und zurückgeben. 

Standardmäßig wird die Groß-/Kleinschreibung ignoriert; verwenden Sie „Groß-/Kleinschreibung ignorieren“, um dies anzugeben.

Standardmäßig werden nicht druckbare Zeichen ignoriert; verwenden Sie „Nicht druckbare Zeichen ignorieren“, um dies anzugeben.

Standardmäßig werden Leerzeichen ignoriert; verwenden Sie „Leerzeichen ignorieren“, um dies anzugeben.

Standardmäßig sind Zeichenänderungen nicht zulässig, um eine Übereinstimmung zu finden.

	Verwenden Sie „Max. Bearbeitungszahl“, um anzugeben, wie viele Bearbeitungen vorgenommen werden dürfen.

	Verwenden Sie „Max. Bearbeitungsverhältnis“, um den Prozentsatz der Änderungen anzugeben (in Bezug auf die Zeichen in der ursprünglichen Zeichenkette), der zulässig ist.

	Diese beiden Einstellungen werden angewendet, falls sie angegeben sind. 

Standardmäßig werden Zeichenketten, die kürzer als 3 Zeichen sind, nicht bei der Übereinstimmung berücksichtigt; verwenden Sie „Min. Zeichenkettenlänge“, um eine andere Länge anzugeben.

Zeichenketten ohne Übereinstimmung

	Standardmäßig, wenn keine kanonische Zeichenkette innerhalb der vorgegebenen Regeln übereinstimmt, wird die Quellzeichenkette zurückgegeben.

	Verwenden Sie „Nicht übereinstimmende ersetzen“, um anzugeben, ob die Quellzeichenkette zurückgegeben werden soll.

	Verwenden Sie „Ohne Übereinstimmung“, um den zurückzugebenden Wert anzugeben.

**JMP Version hinzugefügt:** 15

**Bearbeitung zulässig**

```jsl

Choose Closest( "MARTA", {"MARTHA"}, Max Edit Count( 2 ) );

```

**Ohne Übereinstimmung**

```jsl

Choose Closest( "MARTHA", {"Martha"}, Ignore Case( 0 ), Unmatched() );

```

**Zeichenkette wählen, keine Bearbeitung**

```jsl

Choose Closest( "MARTHA_", {"Martha", "MARY"} );

```

**Zeichensetzung beibehalten**

```jsl

Choose Closest( "MARTHA_", {"MARTHA"}, Ignore Punctuation( 0 ) );

```

### Circle

**Syntax:** Circle( {x, y}, radius|PixelRadius( px ), ..., &lt;"FILL"&gt; )

**Beschreibung:** Zeichnet einen Kreis mit dem Mittelpunkt {x, y}. Der Radius kann als ganze Zahl auf der Basis der vertikalen Achse oder als Anzahl von Pixeln angegeben werden. Ein pixelbasierter Radius erstellt einen Kreis, dessen Größe sich nicht ändert, wenn sich die vertikale Achse ändert. Die Argumente können in beliebiger Reihenfolge wiederholt werden, um mehrere Kreise zu zeichnen. "FILL" muss, sofern verwendet, zuletzt folgen. Es füllt die Kreise mit der Füllfarbe, statt sie mit der Stiftfarbe zu zeichnen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** nsexists = Class Exists( class name )

**Beschreibung:** Gibt 1 zurück, wenn die vom Argument name angegebene Klasse vorhanden ist. Andernfalls wird 0 zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Clear Global Window Handler()

**Beschreibung:** Löscht einen von „Globalen Fenster-Handler festlegen“ zuvor festgelegten Fenster-Handler.

**JMP Version hinzugefügt:** 17

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

**Syntax:** Clear Globals( &lt; varname, ... &gt; )

**Beschreibung:** Löscht die Werte aller aktuell definierten globalen Variablen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Clear Globals();

```

### Clear Log

**Syntax:** Clear Log()

**Beschreibung:** Leert das Log.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Clear Log();

```

### Clear Symbols

**Syntax:** Clear Symbols( &lt; varname, ... &gt; )

**Beschreibung:** Löscht die Werte aller aktuell definierten Variablen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Clear Symbols();

```

### Clipboard Capture

**Syntax:** clp = Clipboard Capture( box &lt;&lt; Copy )

**Beschreibung:** If the JSL within this function would have normally copied something to the OS Clipboard, it is instead copied to a Clipboard object and returned.

**JMP Version hinzugefügt:** 19

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Property( "Units", "in" );
clp = Clipboard Capture( dt << Select Columns( :height ) << Copy Column Properties );
Show( Get Clipboard() );
Show( clp << Get Flavor Data( "Text", <<Text ) );

```

### Close

**Syntax:** Close( &lt;dataTableRef|name&gt;, &lt;NoSave|Save( "path" )&gt; )

**Beschreibung:** Schließt die vom ersten Argument angegebene Datentabelle, bei der es sich standardmäßig um die aktuelle Datentabelle im aktuellen Projekt handelt (oder in keinem Projekt, wenn das Skript nicht in einem Projekt ausgeführt wird).



Um ein Projekt anzugeben, verwenden Sie das optionale Argument Projekt() mit einem Titel, Index, Anzeigefeld oder Fensterobjekt. Verwenden Sie Projekt(0), um kein Projekt anzugeben, wenn das Skript in einem Projekt ausgeführt wird.



Das zweite Argument wird zum Speichern der Datentabelle verwendet. Verwenden Sie eine angemessene Dateierweiterung in dem Pfad, um die Datentabelle im Nicht-JMP-Format zu speichern. Durch Angabe von NoSave wird die Aufforderung zum Speichern oder Verwerfen von Änderungen umgangen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 3 );
Close( exdt, NoSave );

```

### Close All

**Syntax:** Close All( &lt;Project(title|index|box|window)&gt;, Data Tables | Reports | Journals, &lt;invisible | private&gt;, &lt;NoSave|Save&gt; )

**Beschreibung:** Schließt alle offenen Ressourcen eines bestimmten Typs: Datentabellen, Journale oder Berichte.



Nur Fenster im aktuellen Projekt (oder in keinem Projekt, wenn das Projekt nicht in einem Skript ausgeführt wird) werden geschlossen. Um ein Projekt anzugeben, verwenden Sie das optionale Argument Projekt() mit einem Titel, Index, Anzeigefeld oder Fensterobjekt. Verwenden Sie Projekt(0), um kein Projekt anzugeben, wenn das Skript in einem Projekt ausgeführt wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );
Wait( 3 );
Close All( Data Tables, NoSave );

```

### Close Database Connection

**Syntax:** Close Database Connection(databaseConnectionHandle)

**Beschreibung:** Schließt eine Datenbankverbindung, die von „Datenbankverbindung erstellen“ zurückgegeben wurde.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Close Database Connection( databaseConnectionHandle );

```

### Close Log

**Syntax:** Close Log()

**Beschreibung:** Log-Fenster schließen

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Close Log();
Show( Is Log Open() );

```

### Col At

**Syntax:** y = Col At( col, index, &lt;byVar, ...&gt;, &lt; &lt;&lt;relative(bool)&gt;, &lt; &lt;&lt;skip missing(expr)&gt; )

**Beschreibung:** Gibt den Wert von col an der Zeilenposition index innerhalb seiner byVar-Gruppe zurück. Zeilen, in denen der skip missing-Ausdruck einen fehlenden Wert ergibt, werden bei der Indizierung nicht berücksichtigt.

**JMP Version hinzugefügt:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Lag Height by Sex", Formula( Col At( :height, -1, :sex, <<relative( 1 ) ) ) );
New Column( "Relative to First Height", Formula( :height / Col At( :height, 1, :sex ) ) );
New Column( "Relative to Last Height", Formula( :height / Col At( :height, -1, :sex ) ) );

```

### Col Box

**Syntax:** y = Col Box( title, boxes )

**Beschreibung:** Gibt ein Spaltenfeld aus den angegebenen Anzeigefeldern zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Col Cumulative Sum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Beschreibung:** Gibt die kumulierte Summe für die aktuelle Zeile an. Nach-Variablen brauchen nicht vorsortiert zu werden.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 40;
Col Cumulative Sum( :height, :sex );

```

**Beispiel 2**

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

**Syntax:** y = Col Interpolate( v, xCol, yCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;method(linear|nearest|previous|next)&gt;, &lt; &lt;&lt;extrapolate(bool)&gt; )

**Beschreibung:** Gibt einen interpolierten Wert innerhalb von yCol zurück, der der Position von v entspricht, wobei xCol]. Values outside the range of xCol fehlt, es sei denn, extrapolate ist eingeschaltet; in diesem Fall wird der nächste yCol-Wert zurückgegeben.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/GNP.jmp" );
dt << New Column( "date30", Formula( :date + 30 ) );
dt << New Column( "gnp30",
	Formula( Col Interpolate( :date30, :date, :"gross national product ($billions)"n ) )
);

```

### Col List Box

**Syntax:** y = Col List Box( &lt;Data Table( name )&gt;, &lt;all&gt;|&lt;character|numeric&gt;, &lt;width( pix )&gt;, &lt;grouped&gt;, &lt;maxSelected( n )&gt;, &lt;nlines( n )&gt;, &lt;MaxItems( n )&gt;, &lt;MinItems( n )&gt;, &lt;onChange( expr )&gt;, &lt; &lt;&lt;Modeling Type({"Any","Continuous","Nominal","Ordinal","Multiple Response","Unstructured Text","Vector","None","Row State"}) &gt;, &lt; &lt;&lt; Set Data Type(Any|Numeric|Character)&gt;, &lt;script&gt; )

**Beschreibung:** Gibt ein Anzeigefeld für die Anzeige eines Listenfelds zur Auswahl von Datentabellenspalten zurück. Verwenden Sie die Meldung <<Modeling Type, um spezielle Modellierungstypen zuzulassen oder um die zulässigen Typen einzuschränken. Der Standardwert von "Any" erlaubt jede Spalte mit einem klassischen Modellierungstyp ("Continuous", "Nominal", "Ordinal").

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 1", Col List Box( all, width( 250 ), maxSelected( 1 ) ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 2",
	Col List Box( all, <<Set Data Type( "numeric" ), width( 250 ), maxSelected( 1 ) )
);

```

**Beispiel 3**

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

**Syntax:** y = Col Maximum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Beschreibung:** Gibt den maximalen Wert der Zeilen in einer Spalte zurück. Das Ergebnis wird intern gespeichert, so dass mehrfache Auswertungen effizient sind. Die optionalen Argumente byVar geben Nach-Gruppen für die Berechnung an. Beachten Sie, dass die byVar-Argumente in einer Spaltenformel oder in einer Funktion For Each Row() verwendet werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Maximum( :height );

```

**Beispiel 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Maximum( :height, :age ) ) );

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Maximum Value for Each Age and Sex Group",
	Formula( Col Maximum( :height, :age, :sex ) )
);

```

**Beispiel 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Max for each Sex", Formula( Col Maximum( :height, :sex ) ) );
dt << New Column( "Col Max for each Sex grouped by Excluded",
	Formula( Col Maximum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Maximum

**Syntax:** y = Col Maximum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Beschreibung:** Gibt den maximalen Wert der Zeilen in einer Spalte zurück. Das Ergebnis wird intern gespeichert, so dass mehrfache Auswertungen effizient sind. Die optionalen Argumente byVar geben Nach-Gruppen für die Berechnung an. Beachten Sie, dass die byVar-Argumente in einer Spaltenformel oder in einer Funktion For Each Row() verwendet werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Maximum( :height );

```

**Beispiel 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Maximum( :height, :age ) ) );

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Maximum Value for Each Age and Sex Group",
	Formula( Col Maximum( :height, :age, :sex ) )
);

```

**Beispiel 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Max for each Sex", Formula( Col Maximum( :height, :sex ) ) );
dt << New Column( "Col Max for each Sex grouped by Excluded",
	Formula( Col Maximum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Mean

**Syntax:** y = Col Mean( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Beschreibung:** Gibt den Mittelwert der Zeilen in einer Spalte zurück. Das Ergebnis wird intern gespeichert, so dass mehrfache Auswertungen effizient sind. Die optionalen Argumente byVar geben Nach-Gruppen für die Berechnung an. Beachten Sie, dass die byVar-Argumente in einer Spaltenformel oder in einer Funktion For Each Row() verwendet werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mean( :height );

```

**Beispiel 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mean( :height, <<Freq( :weight ) );

```

**Beispiel 3**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Mean( :height, :age ) ) );

```

**Beispiel 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Mean for Each Age and Sex Group",
	Formula( Col Mean( :height, :age, :sex ) )
);

```

**Beispiel 5**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Mean for each Sex", Formula( Col Mean( :height, :sex ) ) );
dt << New Column( "Col Mean for each Sex grouped by Excluded",
	Formula( Col Mean( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Median

**Syntax:** y = Col Median( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Beschreibung:** Gibt den angegebenen Median über Zeilen in einer Spalte zurück. Die Reihenfolge wird intern gespeichert, so dass mehrfache Auswertungen effizient sind.

**JMP Version hinzugefügt:** 15

**Beispiel 1**

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

**Beispiel 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Show( Col Median( :height ) );
Row() = 1;
Show( Col Median( :height, :age ) );

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Median for each Sex", Formula( Col Median( :height, :sex ) ) );
dt << New Column( "Col Median for each Sex grouped by Excluded",
	Formula( Col Median( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Min

**Syntax:** y = Col Minimum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Beschreibung:** Gibt den minimalen Wert der Zeilen in einer Spalte zurück. Das Ergebnis wird intern gespeichert, so dass mehrfache Auswertungen effizient sind. Die optionalen Argumente byVar geben Nach-Gruppen für die Berechnung an. Beachten Sie, dass die byVar-Argumente in einer Spaltenformel oder in einer Funktion For Each Row() verwendet werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Minimum( :height );

```

**Beispiel 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Minimum( :height, :age ) ) );

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Minimum Value for Each Age and Sex Group",
	Formula( Col Minimum( :height, :age, :sex ) )
);

```

**Beispiel 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Min for each Sex", Formula( Col Minimum( :height, :sex ) ) );
dt << New Column( "Col Min for each Sex grouped by Excluded",
	Formula( Col Minimum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Minimum

**Syntax:** y = Col Minimum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Beschreibung:** Gibt den minimalen Wert der Zeilen in einer Spalte zurück. Das Ergebnis wird intern gespeichert, so dass mehrfache Auswertungen effizient sind. Die optionalen Argumente byVar geben Nach-Gruppen für die Berechnung an. Beachten Sie, dass die byVar-Argumente in einer Spaltenformel oder in einer Funktion For Each Row() verwendet werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Minimum( :height );

```

**Beispiel 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Minimum( :height, :age ) ) );

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Minimum Value for Each Age and Sex Group",
	Formula( Col Minimum( :height, :age, :sex ) )
);

```

**Beispiel 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Min for each Sex", Formula( Col Minimum( :height, :sex ) ) );
dt << New Column( "Col Min for each Sex grouped by Excluded",
	Formula( Col Minimum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Mode

**Syntax:** y = Col Mode( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Beschreibung:** Gibt den Stichprobenmodus über die Zeilen in einer Spalte zurück, wobei bei mehreren Modi der kleinste ausgewählt wird. Das Ergebnis wird intern gespeichert, so dass mehrfache Auswertungen effizient sind. Die optionalen Argumente byVar geben Nach-Gruppen für die Berechnung an. Beachten Sie, dass die byVar-Argumente in einer Spaltenformel oder in einer Funktion For Each Row() verwendet werden müssen.

**JMP Version hinzugefügt:** 17

**Beispiel 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mode( :height );

```

**Beispiel 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Mode( :height, :age ) ) );

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Mode for Each Age and Sex Group",
	Formula( Col Mode( :height, :age, :sex ) )
);

```

**Beispiel 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Mode for each Sex", Formula( Col Mode( :height, :sex ) ) );
dt << New Column( "Col Mode for each Sex grouped by Excluded",
	Formula( Col Mode( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Moving Average

**Syntax:** y = Col Moving Average( xCol, &lt;weighting=0.25&gt;, &lt;before=-1&gt;, &lt;after=0&gt;, &lt;partial window is missing=1&gt;, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Beschreibung:** Gibt den gleitenden Mittelwert über ein vorgegebenes Intervall basierend auf der aktuellen Zeile zurück. Beim Gewichtungsmultiplikator bedeutet 1 gleiche Gewichtung, 0 bedeutet lineare Gewichtung und andere Werte fungieren als ein exponentieller Gewichtungsmultiplikator. Nach-Variablen brauchen nicht vorsortiert zu werden.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 40;
Col Moving Average( :height, 1, 5, 0, :sex );

```

**Beispiel 2**

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

**Syntax:** y = Col N Missing( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Beschreibung:** Gibt die Anzahl fehlender Werte über Zeilen in einer Spalte zurück. Das Ergebnis wird intern gespeichert, so dass mehrfache Auswertungen effizient sind. Die optionalen Argumente byVar geben Nach-Gruppen für die Berechnung an. Beachten Sie, dass die byVar-Argumente in einer Spaltenformel oder in einer Funktion For Each Row() verwendet werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col N Missing( :height );

```

**Beispiel 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col N Missing( :height, :age ) ) );

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Number of Missing Values for Each Age and Sex Group",
	Formula( Col N Missing( :height, :age, :sex ) )
);

```

**Beispiel 4**

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

**Syntax:** y = Col N Unique( xCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;score missing(bool)&gt; )

**Beschreibung:** Gibt die Anzahl der eindeutigen Werte in einer Spalte zurück. Wenn fehlende Werte angefordert werden, werden alle Fehlende-Werte-Codes als ein einzelner Wert gezählt.

**JMP Version hinzugefügt:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "N unique age by sex", Formula( Col N Unique( :age, :sex ) ) );
New Column( "N unique height by age", Formula( Col N Unique( :height, :age ) ) );

```

### Col Number

**Syntax:** y = Col Number( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Beschreibung:** Gibt die Anzahl nicht-fehlender Werte über Zeilen in einer Spalte zurück. Das Ergebnis wird intern gespeichert, so dass mehrfache Auswertungen effizient sind. Die optionalen Argumente byVar geben Nach-Gruppen für die Berechnung an. Beachten Sie, dass die byVar-Argumente in einer Spaltenformel oder in einer Funktion For Each Row() verwendet werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Number( :height );

```

**Beispiel 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Number( :height, :age ) ) );

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Number of Nonmissing Values for Each Age and Sex Group",
	Formula( Col Number( :height, :age, :sex ) )
);

```

**Beispiel 4**

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

**Syntax:** y = Col Quantile( xCol, p, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Beschreibung:** Gibt das angegebene Quantil über Zeilen in einer Spalte zurück. Die Reihenfolge wird intern gespeichert, so dass mehrfache Auswertungen effizient sind.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

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

**Beispiel 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Show( Col Quantile( :height, 0.5 ) );
Row() = 1;
Show( Col Quantile( :height, 0.5, :age ) );

```

**Beispiel 3**

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

**Syntax:** y = Col Rank( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**Beschreibung:** Gibt den Rang zurück, dabei ist 1 der niedrigste Rang, mit zeilenweisem Gleichstand, sofern nicht vom Argument <<Tie angegeben. Die Option „Mittelwert“ erzeugt den Mittelwert für gebundene Ränge und „Minimum“ erzeugt den niedrigsten der gebundenen Ränge. Für „Zeile“ und „beliebig“ hat jede Zeile einen eindeutigen Rang.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Rank Height", Formula( Col Rank( :height, <<tie( "average" ) ) ) );
New Column( "Rank Height by age", Formula( Col Rank( :height, :age ) ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Rank for each Sex", Formula( Col Rank( :height, :sex ) ) );
dt << New Column( "Col Rank for each Sex grouped by Excluded",
	Formula( Col Rank( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Score

**Syntax:** y = Col Score( xCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;score missing(bool)&gt; )

**Beschreibung:** Gibt einen ganzzahlige Score für jeden eindeutigen Wert zurück, wobei die Reihenfolge nach den jeweiligen Spalteneigenschaften festgelegt wird.

**JMP Version hinzugefügt:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Score Height", Formula( Col Score( :height ) ) );
New Column( "Score Height by age", Formula( Col Score( :height, :age ) ) );

```

### Col Sequence

**Syntax:** y = Col Sequence( &lt;byVar, ...&gt;, &lt; &lt;&lt;skip missing(expr)&gt;, &lt; &lt;&lt;sequence(start=1, end=unbounded, incr=1, repeat=1)&gt;)

**Beschreibung:** Gibt die Position dieser Zeile innerhalb ihrer byVar-Gruppe zurück, adjustiert durch skip missing und etwaige sequence-Parameter.

**JMP Version hinzugefügt:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Row within sex", Formula( Col Sequence( :sex ) ) );
New Column( "Alternate within sex", Formula( Col Sequence( :sex, <<Sequence( 1, 2 ) ) ) );
New Column( "Row within sex, 60+",
	Formula( Col Sequence( :sex, <<skip missing( Sqrt( :height - 60 ) ) ) )
);

```

### Col Shuffle

**Syntax:** y = Col Shuffle(&lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;)

**Beschreibung:** Gibt eine zufällige ganze Zahl zwischen 1 und der Anzahl von Zeilen der aktuellen Datentabelle zurück. Bei Verwendung in einer Spaltenformel erstellt Col Shuffle() eine zufällige Reihenfolge der Zeilennummern, wobei jede Zeilennummer nur einmal erscheint. Die Reihenfolge wird intern gepuffert, so dass mehrere Auswertungen effizient sind.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Shuffle 1", Numeric, Continuous, Set Formula( Col Shuffle() ) );
dt << New Column( "Shuffle 2", Numeric, Continuous, Set Formula( Col Shuffle() ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Shuffle", Numeric, Continuous, Set Formula( Col Shuffle( :age ) ) );

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Shuffle for each Sex", Formula( Col Shuffle( :height, :sex ) ) );
dt << New Column( "Col Shuffle for each Sex grouped by Excluded",
	Formula( Col Shuffle( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Simple Exponential Smoothing

**Syntax:** y = Col Simple Exponential Smoothing( xCol, alpha, &lt;byVar, ...&gt; )

**Beschreibung:** Gibt die einfache exponentielle Glättungsvorhersage für die aktuelle Zeile mittels Glättungsgewichtung Alpha zurück. Nach-Variablen brauchen nicht vorsortiert zu werden. Die Formel ist Vorhersagewert[t] = Alpha * beobachteter Wert[t-1] + (1-Alpha) * Vorhersagewert[t-1], mit Vorhersagewert[1] = beobachteter Wert[1].

**JMP Version hinzugefügt:** 15

```jsl

Open( "$SAMPLE_DATA/Time Series/Seriesa.jmp" );
Row() = 40;
Col Simple Exponential Smoothing( :Column1, .7 );

```

### Col Span Box

**Syntax:** y = Col Span Box( title, children )

**Beschreibung:** Gibt eine Spalte mit einer Überschrift zurück, die untergeordnete Spalten umfasst

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Col Standardize( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Beschreibung:** Gibt den Wert minus dem Spaltenmittelwert dividiert durch die Standardabweichung der Spalte über die Zeilen in einer Spalte zurück. Wenn Nach-Gruppen-Spalten angegeben werden, wird der Wert gegen den Mittelwert und die Standardabweichung der Nach-Gruppe standardisiert.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Col Standardize( :height );

```

**Beispiel 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Standardize( :height, :age ) ) );

```

**Beispiel 3**

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

**Syntax:** y = Col Std Dev( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Beschreibung:** Gibt die Stichproben-Standardabweichung der Zeilen in einer Spalte zurück. Das Ergebnis wird intern gespeichert, so dass mehrfache Auswertungen effizient sind. Die optionalen Argumente byVar geben Nach-Gruppen für die Berechnung an. Beachten Sie, dass die byVar-Argumente in einer Spaltenformel oder in einer Funktion For Each Row() verwendet werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Std Dev( :height );

```

**Beispiel 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Std Dev( :height, :age ) ) );

```

**Beispiel 3**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Std Dev( :height, :age, <<Freq( :weight ) ) ) );

```

**Beispiel 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Standard Deviation for Each Age and Sex Group",
	Formula( Col Std Dev( :height, :age, :sex ) )
);

```

**Beispiel 5**

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

**Syntax:** y = Col Stored Value( &lt;dt&gt;, xCol, &lt;row=Row()&gt; )

**Beschreibung:** Gibt einen Spaltenwert zurück, auf den keine Spalteneigenschaften angewendet wurden. Wenn keine Zeilenoption angegeben ist, wird die aktuelle Zeile angenommen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Col Sum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Beschreibung:** Gibt die Summe der Zeilen in einer Spalte zurück. Das Ergebnis wird intern gespeichert, so dass mehrfache Auswertungen effizient sind. Die optionalen Argumente byVar geben Nach-Gruppen für die Berechnung an. Beachten Sie, dass die byVar-Argumente in einer Spaltenformel oder in einer Funktion For Each Row() verwendet werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Sum( :height );

```

**Beispiel 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Sum( :height, <<Freq( :weight ) );

```

**Beispiel 3**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Sum( :height, :age ) ) );

```

**Beispiel 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Sum for Each Age and Sex Group",
	Formula( Col Sum( :height, :age, :sex ) )
);

```

**Beispiel 5**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Sum for each Sex", Formula( Col Sum( :height, :sex ) ) );
dt << New Column( "Col Sum for each Sex grouped by Excluded",
	Formula( Col Sum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Collapse Whitespace

**Syntax:** scw = Collapse Whitespace( s )

**Beschreibung:** Löscht führende und nachfolgende Leerzeichen und entfernt doppelte Leerzeichen innerhalb.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Collapse Whitespace( "  The  dog    crossed    the  road  " );

```

### Color Difference

**Syntax:** color = Color Difference( color1, color2, &lt;difference metric&gt;)

**Beschreibung:** Gibt die Differenz zwischen zwei Farben unter einer angegebenen Farbdifferenzmetrik zurück.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

Color Difference( "red", "blue" );

```

**Beispiel 2**

```jsl

Color Difference( "red", "blue", "sRGB" );

```

**Beispiel 3**

```jsl

Color Difference( "red", "blue", "redmean" );

```

**Beispiel 4**

```jsl

Color Difference( "red", "blue", "CIE76" );

```

**Beispiel 5**

```jsl

Color Difference( "red", "blue", "CIE94" );

```

**Beispiel 6**

```jsl

Color Difference( "red", "blue", "CIEDE2000" );

```

**Beispiel 7**

```jsl

Color Difference( "red", "blue", "dEok" );

```

### Color Of

**Syntax:** y = Color Of( &lt;rs&gt; ); Color Of( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Beschreibung:** Gibt die Farbkomponente des angegebenen Zeileneigenschaftswerts zurück, entweder einen positiven JMP-Farbpalettenindex oder einen negativen RGB-codierten Wert. Wenn die Farbe als L-Wert verwendet wird, ändert sie die Farbe der aktuellen (oder r-ten) Zeile in der aktuellen Datentabelle.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" ) << Color By Column( :height );
Color To RGB( Color Of( Row State( 3 ) ) );
Row() = 3;
Color To RGB( Color Of() );

```

### Color State

**Syntax:** rs = Color State( color )

**Beschreibung:** Gibt einen Zeileneigenschaftswert zurück, wobei die Farbkomponente auf den angegebenen Wert gesetzt ist. Das Argument color kann jede gültige JSL-Farbe sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, 0.5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Color To HLS

**Syntax:** {h, l, s} = Color To HLS( color )

**Beschreibung:** Gibt eine Liste aus den Komponenten Farbton, Helligkeit und Sättigung zurück.  Das Argument color kann jede gültige JSL-Farbe oder eine Matrix von Farbzahlen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Color To HLS( RGB Color( 1.0, 0.5, 0.5 ) );

```

### Color To RGB

**Syntax:** {r, g, b} = Color To RGB( color )

**Beschreibung:** Gibt eine Liste aus den Komponenten Rot, Grün und Blau, zwischen 0 und 1 zurück. Das Farbargument kann jede gültige JSL-Farbe oder eine Matrix von Farbzahlen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Color To RGB( HLS Color( 30 / 360, 0.5, 1 ) );

```

### Column

**Syntax:** y = Column( name|number );y = Column( dataTable, name|number, &lt;"formatted"&gt; )

**Beschreibung:** Gibt eine Referenz auf die angegebene Spalte in der Datentabelle zurück. Das Schlüsselwort „formatiert“ ermöglicht den Zugriff auf formatierte Spalten wie die Wertbeschriftung.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
col4 = Column( 4 );
ht = Column( "height" );
col4[1] + ht[2];

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << run script( "Set Sex Value Labels" );
col = Column( dt, "sex", "formatted" );
Write( "\!n", col[5] );
Write( "\!nData value returned is the formatted value of row 5." );

```

### Column Dialog

**Syntax:** y = Column Dialog( &lt;var = ColList("Label", &lt;Min Col(min)&gt;, &lt;Max Col(max)&gt;, &lt;Width(w)&gt;, &lt;Data Type("Numeric"|"Character"|"Any")&gt;, &lt;Modeling Type({&lt;"Continuous"&gt;, &lt;"Nominal"&gt;, &lt;"Ordinal"&gt;, &lt;"None"&gt;, &lt;"Multiple Response"&gt;, &lt;"Unstructured Text"&gt;, &lt;"Vector"&gt;})&gt; )&gt;, &lt;var=EditText("string")&gt;, &lt;var=EditNumber(num)&gt;, &lt;var=Check Box( "Text", 0|1)&gt;, &lt;var=RadioButtons( "a", "b" )&gt;, &lt;var=Combo Box("choice1", ...)&gt;, &lt;HList(box, ...)&gt;, &lt;VList(box, ...)&gt;, &lt;LineUp(ncol, box, ...)&gt;, &lt;Text Box("string")&gt;, &lt;Window Title("title")&gt;, &lt;Window Icon("icon string")&gt;, &lt;Dialog Description("description")&gt;, &lt;Recall(script)&gt;, &lt;Help Script(script)&gt;)

**Beschreibung:** Fordert den Benutzer in einem modalen Fenster mit Feldern auf, Spalten einer Datentabelle auszuwählen. Die Spezifikation kann verschiedene Arten von Eingabefeldern sowie Containerfelder zur Organisation des Fensters umfassen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** name = Column Name( n )

**Beschreibung:** Gibt den Namen der n-ten Spalte der aktuellen Datentabelle zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Column Name( 4 );

```

### Combine States

**Syntax:** rs = Combine States( rs1, ... )

**Beschreibung:** Verknüpft mehrere Zeileneigenschaftswerte in einem Wert.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Combo Box

**Syntax:** y = Combo Box( {item &lt;( tipstr )&gt;, ...}, &lt;script&gt; )

**Beschreibung:** Erzeugt ein Anzeigefeld für die Anzeige eines Kombinationsfelds mit einem Popup-Menü. Jedes Element in dem Kombinationsfeld kann einen optionalen Tooltipp haben, der als Zeichenkette in Klammern auf die Zeichenkette des Elements folgend angegeben wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	cb = Combo Box( {"single", "double", "triple"("tool tip")}, Show( cb << Get() ) )
);

```

### Concat

**Syntax:** s = s1 || s2 ...; m = m1 || m2 ...; s = Concat( s1, s2, ... )

**Beschreibung:** Verkettet Zeichenketten zu einer langen Zeichenkette oder Matrizen in eine breitere Matrix.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

[1 2] || [3 4] || [5 6];

```

### Concat Items

**Syntax:** string = Concat Items( {list of strings}, &lt;separatorString&gt; )

**Beschreibung:** Verbindet eine Liste von Zeichenketten zu einer langen Zeichenkette, wobei jede Zeichenkette durch das Trennzeichen bzw. ein Leerzeichen, wenn kein Trennzeichen angegebenen wurde, getrennt wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Concat Items( {"www", "jmp", "com"}, "." );

```

### Concat To

**Syntax:** string1 ||= string2; matrix1 ||= matrix2; Concat To( a, b )

**Beschreibung:** Verkettet und weist das Ergebnis zu. a ||= b ist äquivalent zu a = a || b. Dies ist ein Zuweisungsoperator.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ex = "hello ";
ex ||= "world";

```

### Constrained Maximize

**Syntax:** Constrained Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;LessThanEQ({mat_A, vec_b}), &lt;&lt;GreaterThanEQ({mat_A, vec_b}), &lt;&lt;EqualTo({mat_A, vec_b}), &lt;&lt;MaxIter( 250 ), &lt;&lt;tolerance( .00001 ), &lt;&lt;ShowDetails(True), &lt;&lt;StartingValues([x1, x2, ... ])), &lt;&lt;SetVariableLimit({lowerLimitVector,upperLimitVector})

**Beschreibung:** Findet Werte für die Argumente der Funktion, die in der Liste {x1, x2, ...} angegeben werden, die den Ausdruck expr mit optionalen linearen Nebenbedingungen maximieren. Die Variablen, x1, x2 usw., können Skalare oder Vektoren sein. Untere und obere Grenzen müssen für jede Variable auf den Variablennamen folgend in Klammern oder mit dem optionalen Parameter <<SetVariableLimits() angegeben werden. Optionale Argumente für die Funktion Constrained Maximize ermöglichen Ihnen, Folgendes anzugeben: lineare Nebenbedingungen, maximale Anzahl von Iterationen, gewünschte Toleranz, Ausgabedetails, Startwerte und Grenzen für die Optimierungsvariablen. (Siehe Beispiel 2.) Lineare Nebenbedingungen werden über die Koeffizientenmatrix mat_A und den rechten Vektor vec_b angegeben.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

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

**Beispiel 2**

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

**Syntax:** Constrained Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;LessThanEQ({mat_A, vec_b}), &lt;&lt;GreaterThanEQ({mat_A, vec_b}), &lt;&lt;EqualTo({mat_A, vec_b}), &lt;&lt;MaxIter( 250 ), &lt;&lt;tolerance( .00001 ), &lt;&lt;ShowDetails(True), &lt;&lt;StartingValues([x1, x2, ... ])), &lt;&lt;SetVariableLimit({low,high})

**Beschreibung:** Findet Werte für die Argumente der Funktion, die in der Liste {x1, x2, ...} angegeben werden, die den Ausdruck expr mit optionalen linearen Nebenbedingungen minimieren. Die Variablen, x1, x2 usw., können Skalare oder Vektoren sein. Untere und obere Grenzen müssen für jede Variable auf den Variablennamen folgend in Klammern oder mit dem optionalen Parameter <<SetVariableLimits() angegeben werden. Optionale Argumente für die Funktion Constrained Minimize ermöglichen Ihnen, Folgendes anzugeben: lineare Nebenbedingungen, maximale Anzahl von Iterationen, gewünschte Toleranz, Ausgabedetails, Startwerte und Grenzen für die Optimierungsvariablen. (Siehe Beispiel 2.) Lineare Nebenbedingungen werden über die Koeffizientenmatrix mat_A und den rechten Vektor vec_b angegeben.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

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

**Beispiel 2**

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

**Syntax:** pos = Contains( x, item, &lt;start=1&gt; )

**Beschreibung:** Gibt die Position von item innerhalb von x zurück und beginnt dabei an der Position „start“, falls angegeben. Wenn „start“ negativ ist, wird ab „length( x ) - start“ rückwärts gesucht. Das Argument x kann eine Zeichenkette oder eine Liste sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show( Contains( "redreed", "re", -1 ) );
Show( Contains( {"A", 2, "C", [1 5], "C"}, "C", 4 ) );

```

### Contains Item

**Syntax:** b = Contains Item( x, item | list | Pat Regex(), &lt;delimiter&gt; )

**Beschreibung:** Gibt einen Booleschen Wert zurück, der anzeigt, ob das Wort [Element], eine Liste mit Wörtern [Liste] oder ein Muster [Muster] einem der Wörter im von [x] repräsentierten Text entspricht. Wörter werden durch die Zeichen in der optionalen Trennzeichenkette [Trennzeichen] getrennt. Ein Komma "," ist das Standardtrennzeichen. Leerzeichen werden an den Enden jedes extrahierten Worts von der eingegebenen Textzeichenkette [x] abgeschnitten.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Show( Contains Item( "A, 2, C, D, C", "C", ", " ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Food Journal.jmp" );
dt << New Column( "Cheese",
	numeric,
	continuous,
	Formula( Contains Item( dt:Item Name, "Cheese", ", " ) )
);
dt << Distribution( Column( :Cheese ) );

```

**Beispiel 3**

```jsl

//find repeated character c in cdcef
Contains Item( "abcde,bcdef,cdcef", Pat Regex( "(.).*?\1" ), "," );

```

### Context Box

**Syntax:** y = Context Box( displayBox, ... )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das einen beschränkten Auswertungskontext herstellt. Ermöglicht die voneinander unabhängige Ausführung verschiedener Teile eines Anzeigefensters.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Continue()

**Beschreibung:** Springt in die nächste Iteration einer For- oder While-Schleife, ohne die folgenden Befehle innerhalb der Schleife auszuführen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

For( i = 1, i <= 10, i++,
	If( i < 2, Continue() );
	Print( "i=" || Char( i ) );
);

```

### Contour

**Syntax:** Contour( xVector, yVector, zGridMatrix, zContours, &lt; &lt;&lt;zColor( color, option )&gt;, &lt; &lt;&lt;Fill|Fill Between|Fill Below|Fill Above&gt;, &lt; &lt;&lt;Transparency(vector)&gt; )

**Beschreibung:** Zeichnet Konturen mit Hilfe eines Rasters von Werten. Wenn weniger Farben angegeben sind als es Konturen gibt, bestimmen die Optionen „Farben interpolieren“ und „Farben zyklisch verwenden“, wie die Farben angewendet werden.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Contour Function( zExpr, xName, yName, z|zMatrix, &lt; &lt;&lt;XGrid( min, max, incr )&gt;, &lt; &lt;&lt;YGrid( min, max, incr )&gt;, &lt; &lt;&lt;ZColor( color, option )&gt;, &lt; &lt;&lt;ZLabeled&gt;, &lt; &lt;&lt;Filled&gt;, &lt; &lt;&lt;FillBetween&gt;, &lt; &lt;&lt;Ternary&gt;, &lt; &lt;&lt;Transparency( t )&gt; )

**Beschreibung:** Wertet den Ausdruck auf einem Raster aus den Werten xName und yName aus und zeichnet die Konturlinien. Das Argument color kann als Zahl, als Matrix, als Liste von RGB-Werten, als Liste von Farbnamen oder als Farbschema angegeben werden.  Die Transparenz t kann als Zahl oder als Matrix angegeben werden.  Wenn die Option Ternary angegeben ist, sind die Konturen an ein ternäres Koordinatensystem gebunden.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

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

**Beispiel 2**

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

**Syntax:** me = Contour Seg( Triangulation, [ levels ], &lt; zColor([colors], &lt;Cycle Colors|Interpolate Colors&gt;) &gt;, &lt; Transparency([] | t) &gt;

**Beschreibung:** Gibt ein Anzeigesegment zurück, das die Konturen einer Triangulierung darstellt. Für jede Stufe können optionale Farben als Matrix oder Liste angegeben werden. Die Transparenz kann als Zahl oder Matrix angegeben werden.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** path = Convert File Path( path, &lt;absolute|relative&gt;, &lt;posix|windows&gt;, &lt;base( path )&gt;, &lt;search&gt; )

**Beschreibung:** Gibt den konvertierten Pfad zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** rc = Copy Directory( from, to, &lt;recursive(0|1)&gt; )

**Beschreibung:** Kopiert Dateien aus einem Verzeichnis in ein anderes, kopiert optional Unterverzeichnisse. Der Verzeichnisname wird am Pfad to erstellt und darf nicht Teil des Pfads to sein. Gibt 1 zurück, wenn das Verzeichnis kopiert wurde. Gibt 0 zurück, wenn der Pfad nicht kopiert werden konnte. Gibt einen Fehler zurück, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** rc = Copy File( from, to )

**Beschreibung:** Kopiert eine Datei aus der ursprünglichen Datei in eine neue Datei mit dem gleichen oder einem anderen Namen. Geben Sie einen vollständigen Pfad und Dateinamen für das Ziel ein. Gibt 1 zurück, wenn die Datei kopiert wurde. Gibt 0 zurück, wenn die Datei nicht kopiert werden konnte. Gibt einen Fehler aus, wenn der Pfad ungültig oder nicht vorhanden ist. Eine Datei kann nicht kopiert werden, wenn der Pfad from oder to ungültig ist oder die Datei to bereits vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Correlation( x , &lt; &lt;&lt;"Pairwise" &gt;, &lt; &lt;&lt;"Shrink" &gt;, &lt; &lt;&lt;Freq(vector) &gt;, &lt; &lt;&lt;Weight(vector) &gt; )

**Beschreibung:** Gibt die Korrelationsmatrix des Matrixarguments x zurück. Das Argument "Pairwise" verarbeitet fehlende Werte paarweise und nicht zeilenweise. Das Argument "Shrink" reduziert die nichtdiagonalen Elemente um einen Faktor, der über die in Schafer und Strimmer 2005 beschriebene Methode ermittelt wird. Die Argumente Freq und Weight geben Vektoren von Häufigkeits- bzw. Gewichtungswerten an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Correlation( [1 3 5, 3 2 6, 5 6 1] );

```

### Cos

**Syntax:** y = Cosine( x )

**Beschreibung:** Gibt den trigonometrischen Cosinus von x zurück, wobei x ein Winkel im Bogenmaß ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Cosine( Pi() / 2 );

```

### CosH

**Syntax:** y = CosH( x )

**Beschreibung:** Gibt den Cosinus hyperbolicus von x zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

CosH( 1 );

```

### Cosine

**Syntax:** y = Cosine( x )

**Beschreibung:** Gibt den trigonometrischen Cosinus von x zurück, wobei x ein Winkel im Bogenmaß ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Cosine( Pi() / 2 );

```

### Count

**Syntax:** y = Count( start, end, s, &lt;n=1&gt; )

**Beschreibung:** Gibt den i-ten Wert in der Zahlenreihe von start bis end mit s Schritten zurück und wiederholt jede Zahl n Mal, wobei i durch den Wert der Funktion Row() festgelegt wird. Wegen der Abhängigkeit von der Funktion Row() wird die Funktion Count() im Allgemeinen in Spaltenformeln verwendet.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Covariance( x , &lt; &lt;&lt;"Pairwise" &gt;, &lt; &lt;&lt;"Shrink" &gt;, &lt; &lt;&lt;Freq(vector) &gt;, &lt; &lt;&lt;Weight(vector) &gt; )

**Beschreibung:** Gibt die Kovarianzmatrix des Matrixarguments x zurück. Das Argument "Pairwise" verarbeitet fehlende Werte paarweise und nicht zeilenweise. Das Argument "Shrink" reduziert die nichtdiagonalen Elemente um einen Faktor, der über die in Schafer und Strimmer 2005 beschriebene Methode ermittelt wird. Die Argumente Freq und Weight geben Vektoren von Häufigkeits- bzw. Gewichtungswerten an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Covariance( [1 3 5, 3 2 6, 5 6 1] );

```

### Create Database Connection

**Syntax:** dbc = Create Database Connection( dataSourceName|"Connect Dialog", &lt;DriverPrompt(true|false)&gt; )

**Beschreibung:** Erstellt eine Datenbankverbindung und gibt einen Handle auf die Verbindung zurück. Wenn DriverPrompt wahr ist, wird der Benutzer über die Eingabeaufforderung des ODBC-Treibers aufgefordert, gegebenenfalls seine Benutzerdaten einzugeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dbc = Create Database Connection(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;"
);

```

### Create Directory

**Syntax:** rc = Create Directory( path )

**Beschreibung:** Erstellt ein Verzeichnis. Gibt 1 zurück, wenn das Verzeichnis erstellt wurde. Gibt 0 zurück, wenn das Verzeichnis bereits vorhanden ist oder JMP das Verzeichnis nicht erstellen konnte.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Create Excel Workbook(&lt;Workbook Name&gt;, &lt;{List of open tables}&gt;, &lt;Optional list of worksheet names&gt; )

**Beschreibung:** Eine Excel-Arbeitsmappe aus geöffneten JMP-Datentabellen generieren

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = Open( "$SAMPLE_DATA/Abrasion.jmp" );
Create Excel Workbook( "$TEMP/MyWorkbook.xlsx", {dt1, dt2}, {"Big", "Abrasive"} );

```

**Beispiel 2**

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

**Syntax:** date = Creation Date( path )

**Beschreibung:** Gibt das Erstellungsdatum einer Datei oder eines Verzeichnisses zurück. Gibt einen Fehler aus, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Format( Creation Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Cumulative Sum

**Syntax:** y = Cumulative Sum( x )

**Beschreibung:** Gibt eine Matrix partieller Summen für die Eingabematrix zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Cumulative Sum( [1 1 1 1 . 10 20] );

```

### Current CAS Connection

**Syntax:** Current CAS Connection()

**Beschreibung:** Ruft die Verbindung vom aktuellen CAS-Server ab.

**JMP Version hinzugefügt:** 15

```jsl


connection = Current CAS Connection();
Show( connection );

```

### Current Data Table

**Syntax:** dt = Current Data Table( &lt;Project(title|index|box|window)&gt; ); Current Data Table( dt )

**Beschreibung:** Gibt die aktuelle Datentabelle zurück oder macht die angegebene Datentabelle zur aktuellen Tabelle, wenn eine Tabelle angegeben ist.



Um ein Projekt anzugeben, verwenden Sie das optionale Argument Projekt() mit einem Titel, Index, Anzeigefeld oder Fensterobjekt. Verwenden Sie Projekt(0), um kein Projekt anzugeben, wenn das Skript in einem Projekt ausgeführt wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Current Data Table() << Get Column Names;

```

### Current Journal

**Syntax:** y = Current Journal( &lt;Project(title|index|box|window)&gt; )

**Beschreibung:** Gibt eine Referenz auf das aktuelle Journal im aktuellen Projekt zurück (oder auf kein Projekt, wenn das Skript nicht in einem Projekt ausgeführt wird).



Um ein Projekt anzugeben, verwenden Sie das optionale Argument Projekt() mit einem Titel, Index, Anzeigefeld oder Fensterobjekt. Verwenden Sie Projekt(0), um kein Projekt anzugeben, wenn das Skript in einem Projekt ausgeführt wird.



Wenn im vorgegebenen Projekt kein aktuelles Journal vorhanden ist, wird automatisch eines erstellt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Current Journal();

```

### Current Report

**Syntax:** y = Current Report( &lt;Project(title|index|box|window)&gt; )

**Beschreibung:** Gibt eine Anzeigefeldreferenz auf den aktuellen Bericht im aktuellen Projekt zurück (oder auf kein Projekt, wenn das Skript nicht in einem Projekt ausgeführt wird).



Um ein Projekt anzugeben, verwenden Sie das optionale Argument Projekt() mit einem Titel, Index, Anzeigefeld oder Fensterobjekt. Verwenden Sie Projekt(0), um kein Projekt anzugeben, wenn das Skript in einem Projekt ausgeführt wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Current Report();

```

### Current Window

**Syntax:** y = Current Window( &lt;Project(title|index|box|window)&gt; )

**Beschreibung:** Gibt eine Referenz auf das aktuelle Fenster im aktuellen Projekt zurück (oder auf kein Projekt, wenn das Skript nicht in einem Projekt ausgeführt wird).



Um ein Projekt anzugeben, verwenden Sie das optionale Argument Projekt() mit einem Titel, Index, Anzeigefeld oder Fensterobjekt. Verwenden Sie Projekt(0), um kein Projekt anzugeben, wenn das Skript in einem Projekt ausgeführt wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Outline Box( "Example Outline",
		Text Box( "Example Text" ),
		Button Box( "Close", Current Window() << Close Window )
	)
);

```

### Cytometry Logicle

**Syntax:** y = Cytometry Logicle( x, T, W, M, A )

**Beschreibung:** Zytometrie-Logicle-Transformation berechnen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Cytometry Logicle( 100, 10000, .15, .45, 0 );

```

### Cytometry Logicle Inverse

**Syntax:** x = Cytometry Logicle Inverse( y, T, W, M, A )

**Beschreibung:** Inverse Zytometrie-Logicle-Transformation berechnen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Cytometry Logicle Inverse( 100, 10000, .15, .45, 0 );

```

### Data Connector Registry

**Syntax:** Data Connector Registry()

**Beschreibung:** Die Sammlung von Datenkonnektoren für JMP.

**JMP Version hinzugefügt:** 18

```jsl


dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Data Filter Context Box

**Syntax:** y = Data Filter Context Box( displayBox )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das den Umfang der lokalen Datenfilter in einem Anzeigebaum definiert. Datenfilter und Datenfilterkontext-Felder können in einer Hierarchie angeordnet werden und werden von mehreren Plattformen oder Feldern in den Datenfilterkontext-Feldern gemeinsam genutzt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Data Filter Source Box( displayBox )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das die Quelle eines Auswahlfilters definiert. Ausgewählte Zeilen in Berichten, die im Datenfilterquelle-Feld enthalten sind, werden in die Analyse der anderen Berichte einbezogen, die in einem gemeinsamen Datenfilterkontext-Feld enthalten sind.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Data Grid Box( )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das eine Datentabelle enthalten kann.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example", x = Data Grid Box() );
x << Set Data Table( dt );

```

### Data Table

**Syntax:** dt = Data Table( name|number )

**Beschreibung:** Gibt eine Referenz auf die angegebene Datentabelle zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Data Table( 1 );

```

### Data Table Box

**Syntax:** y = Data Table Box( datatable )

**Beschreibung:** Gibt ein Tabellenfeld zurück, das die angegebene Datentabelle darstellt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example", Data Table Box( dt ) );

```

### Data Table Col Box

**Syntax:** y = Data Table Col Box( col )

**Beschreibung:** Gibt ein Spaltenfeld zurück, das der angegebenen Spalte in der Datentabelle entspricht.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	Table Box( Data Table Col Box( :name ), Data Table Col Box( :height ) )
);

```

### Data Table Plot Col Box

**Syntax:** y = Data Table Plot Col Box( col )

**Beschreibung:** Gibt ein Diagramm-Spaltenfeld zurück, das der vorgegebenen Spalte in der Datentabelle entspricht, und verwendet optional die zweite und dritte Spalte in der Datentabelle, um Eingriffsgrenzen zu erstellen.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	Table Box( Data Table Plot Col Box( :weight ), Data Table Plot Col Box( :height ) )
);

```

### Datafeed

**Syntax:** y = Open Datafeed( ... )

**Beschreibung:** Erstellt ein Objekt und ein Fenster für Echtzeit-Daten-Feeds, an das Mitteilungen gesendet werden können.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** delta = Date Difference( dt1, dt2, intervalName, &lt;alignment="start"&gt; )

**Beschreibung:** Gibt die Differenz in Intervallen von zwei Datums-/Uhrzeitwerten zurück. Unterstützte Werte von intervalName sind „Jahr“, „Quartal“, „Monat“, „Woche“, „Tag“, „Stunde“, „Minute“, „Sekunde“ und „Numerisch“. alignment = "Start" schließt vollständige oder partielle Intervalle ein, während "Actual" nur vollständige Intervalle einschließt. alignment = "Fractional" gibt fraktionelle Differenzen zurück, wobei für die Dauer der Intervalle „Jahr“, „Quartal“ und „Monat“ Mittelwerte verwendet werden.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "start" );

```

**Beispiel 2**

```jsl

Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "actual" );

```

**Beispiel 3**

```jsl

Date Difference( Date DMY( 31, 1, 2015 ), Date DMY( 1, 3, 2015 ), "Month", "fractional" );

```

### Date DMY

**Syntax:** z = Date DMY( d, m, y )

**Beschreibung:** Wandelt Tag, Monat und Jahr in einen JMP-Datum/Uhrzeit-Wert um, das ist die Anzahl Sekunden seit dem 01. Jan. 1904.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

As Date( Date DMY( 15, 7, 2000 ) );

```

### Date Increment

**Syntax:** d = Date Increment( datetime, intervalName, &lt;incr=1&gt;, &lt;alignment="start"&gt; )

**Beschreibung:** Gibt einen neuen Datums-/Uhrzeitwert zurück, indem incr Intervalle hinzugefügt werden. Unterstützte Werte von intervalName sind „Jahr“, „Quartal“, „Monat“, „Woche“, „Tag“, „Stunde“, „Minute“, „Sekunde“ und „Numerisch“. alignment = "Start" schneidet das nächste Intervall vor dem Hinzufügen des Inkrements ab, während "Actual" die vollständige Eingabe für Datum/Uhrzeit beibehält. alignment = "Fractional" gestattet incr fraktionelle Werte, wobei für die Dauer der Intervalle „Jahr“, „Quartal“ und „Monat“ Mittelwerte verwendet werden.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Date Increment( Today(), "Month", 100, "start" );

```

**Beispiel 2**

```jsl

Date Increment( Today(), "Month", 100, "actual" );

```

**Beispiel 3**

```jsl

Date Increment( Today(), "Month", 100, "fractional" );

```

### Date MDY

**Syntax:** z = Date MDY( m, d, y )

**Beschreibung:** Wandelt Monat, Tag und Jahr in einen JMP-Datumswert um, das ist die Anzahl Sekunden seit dem 01. Jan. 1904.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

As Date( Date MDY( 7, 15, 2000 ) );

```

### Day

**Syntax:** d = Day( datetime )

**Beschreibung:** Gibt den Anteil für den Tag des Monats eines Datum/Uhrzeit-Werts zurück, 1 bis 31.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Day( Today() );

```

### Day Of Week

**Syntax:** d = Day Of Week( datetime )

**Beschreibung:** Gibt den Wochentag eines Datum/Uhrzeit-Werts zurück. Sonntag = 1, …, Samstag = 7.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Day Of Week( Today() );

```

### Day Of Year

**Syntax:** d = Day Of Year( datetime )

**Beschreibung:** Gibt den Tag des Jahres eines Datum/Uhrzeit-Werts zurück. Der 1. Januar ist 1.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Day Of Year( Today() );

```

### Days In Month

**Syntax:** v = Days In Month(year, month)

**Beschreibung:** Die Anzahl der Tage in einem vorgegebenen Monat zurückgeben.

**JMP Version hinzugefügt:** 15

```jsl

v = Days In Month( 2016, 2 );

```

### Debug Break

**Syntax:** Debug Break()

**Beschreibung:** Wenn dieser Ausdruck im JSL-Debugger ausgewertet wird, stoppt der Debugger die Ausführung des Skripts.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Decode URI( value )

**Beschreibung:** Zeichenkette mit URI-Verschlüsselung verschlüsseln

**JMP Version hinzugefügt:** 14

```jsl


Decode URI( "Foo%20Bar" );

```

### Decode64 Blob

**Syntax:** y = Decode64 Blob( base64String )

**Beschreibung:** Entschlüsselt eine druckbare Basis64-Zeichenkette in einen Blob.

**JMP Version hinzugefügt:** 14

```jsl

Decode64 Blob( "dGhlIHF1aWNrIGJyb3duIGZveA==" );

```

### Decode64 Double

**Syntax:** y = Decode64 Double( base64String )

**Beschreibung:** Gibt eine Gleitpunktzahl mit doppelter Genauigkeit aus der Base64-codierten Zeichenkette zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Decode64 Double( "P/lUWYIBG9Q=" );

```

### Define Class

**Syntax:** Define Class("class name", &lt;Base Class{ "base class name", ... }&gt;, &lt;Show( All( boolean ) | ( Members( boolean ) | Methods( boolean ) | Functions( boolean ) )+ )&gt;, { method* | member* | function* } )

**Beschreibung:** Neue Klasse definieren

**JMP Version hinzugefügt:** 14

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

**Syntax:** Delete Classes( &lt;Force( boolean )&gt;, &lt;class reference, ...&gt; )

**Beschreibung:** Löscht alle Klassendefinitionen oder eine oder mehrere spezifische Namensdefinitionen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** rc = Delete Directory( path, &lt;Allow Undo( boolean )&gt; )

**Beschreibung:** Löscht ein Verzeichnis und die darin enthaltenen Dateien und Unterverzeichnisse. Gibt 1 zurück, wenn das Verzeichnis gelöscht wurde. Gibt 0 zurück, wenn das Verzeichnis nicht gelöscht werden konnte oder der Pfad ungültig ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** rc = Delete File( path, &lt;Allow Undo( boolean )&gt; )

**Beschreibung:** Löscht eine Datei. Gibt 1 zurück, wenn die Datei gelöscht wurde. Gibt 0 zurück, wenn die Datei nicht gelöscht werden konnte. Gibt einen Fehler aus, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

rc0 = Copy File( "$SAMPLE_DATA/Loss Function Templates/Normal.jmp", "$TEMP/x.jmp" );
rc1 = File Exists( "$TEMP/x.jmp" );
rc2 = Delete File( "$TEMP/x.jmp" );
rc3 = File Exists( "$TEMP/x.jmp" );
Char( rc0 ) || " " || Char( rc1 ) || " " || Char( rc2 ) || " " || Char( rc3 ) /* 1 1 1 0 */;

```

### Delete Globals

**Syntax:** Delete Globals( &lt; varname, ... &gt; )

**Beschreibung:** Löscht alle aktuell definierten globalen Variablen und ihre Werte.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Delete Globals();

```

### Delete Namespaces

**Syntax:** Delete Namespaces( &lt;Force( boolean )&gt;, &lt;namespace reference, ...&gt; )

**Beschreibung:** Löscht alle Namensräume oder einen oder mehrere spezifische Namensräume.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Delete Symbols( &lt; varname, ... &gt; )

**Beschreibung:** Löscht alle aktuell definierten Variablen und ihre Werte.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Delete Symbols();

```

### Derivative

**Syntax:** y = Derivative( expr, name )

**Beschreibung:** Gibt die symbolische Ableitung für den vorgegebenen Ausdruck bezüglich des angegebenen Variablennamens zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Derivative( Sin( x ), x );

```

### Design

**Syntax:** y = Design( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Beschreibung:** Erzeugt eine Designmatrix, die eine Spalte mit Einsen (1) und Nullen (0) für jeden eindeutigen Wert des Arguments enthält. Verwenden Sie das Argument levelsList, um eine Liste der Stufen für die Designmatrix anzugeben. Wenn das Argument <<Levels angegeben ist, ist der Rückgabewert eine Liste mit der Designmatrix und einer Liste der Stufen. Wenn das Argument <<ElseMissing angegeben ist, werden Werte im Argument v, die nicht in der levelsList erscheinen, in der Designmatrix als fehlend eingetragen. Ansonsten werden in der Designmatrix Nullen (0) eingetragen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Design Last( v, &lt; levelsList, &lt;&lt;ElseMissing &gt; )

**Beschreibung:** Erstellt eine Designmatrix mit einer Spalte von Einsen (1) und Nullen (0) für alle bis auf den letzten eindeutigen Wert des Arguments. Die letzte Stufe ist als Zeile mit Nullen (0) codiert. Wenn das Argument levelsList angegeben ist, ist die letzte Stufe die letzte Stufe in levelsList. Ansonsten ist die letzte Stufe definiert als der größte Wert in v. Wenn das Argument <<Levels angegeben ist, ist der Rückgabewert eine Liste mit der Designmatrix und einer Liste der Stufen. Wenn das Argument <<ElseMissing angegeben ist, werden Werte im Argument v, die nicht in der levelsList erscheinen, in der Designmatrix als fehlend eingetragen. Ansonsten werden in der Designmatrix Nullen (0) eingetragen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Design Nom( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Beschreibung:** Erzeugt eine Designmatrix, die eine Spalte mit Einsen (1) und Nullen (0) für alle bis auf den letzten eindeutigen Wert des Arguments enthält. Die letzte Stufe ist als Zeile mit Minus-Einsen (-1) codiert. Wenn das Argument levelsList angegeben ist, ist die letzte Stufe die letzte Stufe in levelsList. Ansonsten ist die letzte Stufe definiert als der größte Wert in v. Wenn das Argument <<Levels angegeben ist, ist der Rückgabewert eine Liste mit der Designmatrix und einer Liste der Stufen. Wenn das Argument <<ElseMissing angegeben ist, werden Werte im Argument v, die nicht in der levelsList erscheinen, in der Designmatrix als fehlend eingetragen. Ansonsten werden Nullen (0) in der Designmatrix eingetragen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Design Ord( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Beschreibung:** Erzeugt eine Designmatrix, die eine Spalte für alle bis auf den letzten eindeutigen Wert des Arguments enthält. Die erste Stufe ist als Zeile mit Nullen (0) codiert. Jede nachfolgende (n-te) Stufe im Argument levelsList ist als Zeile mit (n-1) Einsen (1) und dem Rest als Nullen (0) codiert. Wenn das Argument <<Levels angegeben ist, ist der Rückgabewert eine Liste mit der Designmatrix und einer Liste der Stufen. Wenn das Argument <<ElseMissing angegeben ist, werden Werte im Argument v, die nicht in der levelsList erscheinen, in der Designmatrix als fehlend eingetragen. Ansonsten werden Nullen (0) in der Designmatrix eingetragen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = DesignF( v, &lt; levelsList|&lt;&lt;Levels, &lt;&lt;ElseMissing &gt; )

**Beschreibung:** Erzeugt eine Designmatrix, die eine Spalte mit Einsen (1) und Nullen (0) für alle bis auf den letzten eindeutigen Wert des Arguments enthält. Die letzte Stufe ist als Zeile mit Minus-Einsen (-1) codiert. Wenn das Argument levelsList angegeben ist, ist die letzte Stufe die letzte Stufe in levelsList. Ansonsten ist die letzte Stufe definiert als der größte Wert in v. Wenn das Argument <<Levels angegeben ist, ist der Rückgabewert eine Liste mit der Designmatrix und einer Liste der Stufen. Wenn das Argument <<ElseMissing angegeben ist, werden Werte im Argument v, die nicht in der levelsList erscheinen, in der Designmatrix als fehlend eingetragen. Ansonsten werden Nullen (0) in der Designmatrix eingetragen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** des = Desirability( yVector, dVector, y )

**Beschreibung:** Gibt eine Wünschbarkeitskurve zurück, wobei yVector ein Vektor mit 3 Werten ist, dVector sind die entsprechenden 3 Wünschbarkeitswerte und y ist das Argument, dessen Wünschbarkeit berechnet wird.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Det( x )

**Beschreibung:** Gibt die Determinante einer Quadratmatrix zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Det( [11 22, 33 44] );

```

### Diag

**Syntax:** y = Diag( matrix ); y = Diag( vector ); y = Diag( matrix1, matrix )

**Beschreibung:** Erstellt eine Diagonalmatrix aus einer Matrix oder einem Vektor. Wenn zwei Argumente angegeben werden, gibt die Funktion die diagonale Verkettung der Matrizen zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Diag( [11 22] );

```

### Dialog

**Syntax:** y = Dialog( specification )

**Beschreibung:** Zeigt dem Benutzer eine Eingabeaufforderung in einem modalen Fenster an. Diese Funktion ist veraltet. Bitte verwenden Sie stattdessen die Funktion „New Window“ mit dem Argument <<Modal.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

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

**Beispiel 2**

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

**Syntax:** y = Dif( x, &lt;n=1&gt; )

**Beschreibung:** Gibt x - Lag( x, n ) zurück, auch bekannt als „erste Differenz“. Wegen der Abhängigkeit von Row() ist Dif() hauptsächlich in Spaltenformeln nützlich.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
Dif( :height, 2 );

```

### Digamma

**Syntax:** y = Digamma( x )

**Beschreibung:** Gibt die in x ausgewertete Digamma-Funktion zurück, wobei die Digamma-Funktion die Ableitung des Logarithmus der Gammafunktion ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Digamma( 5 );

```

### Dim

**Syntax:** y = Dim(); y = Dim( dt ); y = Dim( matrix )

**Beschreibung:** Gibt einen Zeilenvektor mit den Dimensionen der aktuellen Datentabelle, einer angegebenen Datentabelle oder einer Matrix zurück. Die Dimensionen sind die Anzahl der Zeilen und die Anzahl der Spalten und werden in dieser Reihenfolge aufgelistet.

**JMP Version hinzugefügt:** 14

```jsl

Dim( [11 22, 33 44, 55 66] );

```

### Direct Product

**Syntax:** y = Direct Product( A, B )

**Beschreibung:** Gibt das direkte oder Kronecker-Produkt zurück. Ergebnis ist A[i,j]*B, für alle möglichen Produkte.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** rc = Directory Exists( path )

**Beschreibung:** Bestimmt, ob das Verzeichnis vorhanden ist. Gibt 1 zurück, wenn der Pfad vorhanden ist. Gibt 0 zurück, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

If( Directory Exists( "$SAMPLE_DATA/Loss Function Templates" ),
	"ok",
	"missing!"
);

```

### Disable JMP Live URL

**Syntax:** Disable JMP Live URL(url)

**Beschreibung:** Deaktiviert eine JMP Live-URL. Diese Methode ist nur während der Ausführung von jmpStartAdmin.jsl verfügbar. Ein Sternchen * kann als Platzhalter verwendet werden, um URLs anzugeben wie * (beliebige URL), *.jmp.com (eine URL, die mit .jmp.com endet), http://public.* (eine URL, die mit http://public. beginnt) oder *public* (eine URL, die „public“ enhält).

**JMP Version hinzugefügt:** 15

```jsl


Disable JMP Live URL( "*public.jmp.com" );

```

### Disable Proxy Settings

**Syntax:** Disable Proxy Settings( 1|0 )

**Beschreibung:** Deaktiviert oder aktiviert Proxy-Einstellungen während der Ausführung von jmpStartAdmin.jsl. Standardmäßig sind Proxy-Einstellungen aktiviert.

**JMP Version hinzugefügt:** 15

```jsl


Disable Proxy Settings( 1 );

```

### Distance

**Syntax:** y = Distance( x1, x2, &lt;scales&gt;, &lt;powers&gt; )

**Beschreibung:** Erzeugt eine Matrix der Abstände zwischen Zeilen von x1 und Zeilen von x2. Wenn Sie die Skalierung und Potenzen für jede Spalte benutzerspezifisch einrichten möchten, geben Sie die zusätzlichen Argumente scale und powers an. Für Kriging wird Exp(-distance(x1,x2)) verwendet.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = x0 / x1; y = Divide( x0, &lt;x1&gt;, ... )

**Beschreibung:** Dividiert durch alle nachfolgenden Argumente vom ersten Argument ab. Argumente können Zahlen, Matrizen oder Listen mit Zahlen sein. Bei Aufruf mit nur einem Argument ist das Ergebnis reziprok.

**JMP Version hinzugefügt:** Vor Version 14

**Einfach**

```jsl

6 / 3 / 2;

```

**Reziprok**

```jsl

x = Divide( 5 );
y = 1 / 5;
Show( x, y );

```

### Divide To

**Syntax:** y /= x; Divide To( y, x )

**Beschreibung:** Dividiert einen Wert in einer Variable oder einer Liste von Variablen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ex = 1;
ex /= 2;
ex;

```

### Double Declining Balance

**Syntax:** x = Double Declining Balance( cost, salvage, life, period, &lt;factor=2&gt; )

**Beschreibung:** Gibt die Abschreibung eines Vermögenswerts für einen bestimmten Zeitraum zurück, wobei die geometrisch degressive Abschreibungsmethode oder ein anderer Abschreibungsfaktor verwendet wird. Entspricht der DDB-Funktion in Microsoft Excel.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Double Declining Balance( 10000, 100, 3, 2 );

```

### Drag Line

**Syntax:** Drag Line( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Beschreibung:** Zeichnet eine Polylinie an den angegebenen Punkten. Im Gegensatz zu „Line“ können die Punkte jedoch über den Bildschirm gezogen werden, wobei die Werte in den Matrixargumenten (L-Wert) aktualisiert werden.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Drag Marker( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Beschreibung:** Zeichnet verschiebbare Symbole an den angegebenen Punkten. Die Matrixwerte werden aktualisiert, wenn die Symbole verschoben werden.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Drag Polygon( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Beschreibung:** Zeichnet ein ausgefülltes Polygon an den angegebenen Punkten. Die Punkte können über den Bildschirm gezogen werden, wobei die Werte in den Matrixargumenten (L-Wert) aktualisiert werden.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Drag Rect( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Beschreibung:** Zeichnet ein Rechteck an den angegebenen Punkten. Im Gegensatz zu „Rect“ können diese Ecken jedoch über den Bildschirm gezogen werden, wobei die Werte in den Matrixargumenten (L-Wert) aktualisiert werden.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Drag Text( xMatrixName, yMatrixName, text, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Beschreibung:** Zeichnet den Text an den angegebenen Punkten. Im Gegensatz zur Funktion Text() können die Punkte jedoch über den Bildschirm gezogen werden, wobei die Werte in den Matrixargumenten xMatrixName und yMatrixName aktualisiert werden. Das Argument text kann ein Zeichenkettenargument oder eine Liste mit Zeichenketten sein.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Dunnett P value( q, nTrt, dfe, &lt;lambdaVec = .&gt; )

**Beschreibung:** Gibt den p-Wert von Dunnetts multiplen Vergleichstests zurück. Dabei ist q die Prüfgröße, nTrt die Anzahl der Behandlungen, die mit der Kontrollgruppe verglichen wird, dfe sind die Fehlerfreiheitsgrade (basierend auf dem Umfang der gesamten Stichprobe) und das optionalelambdaVec ist ein Vektor von Parametern, die standardmäßig auf 1/sqrt(2) gesetzt sind.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Dunnett P value( 1.67623, 3, 11 );

```

### Dunnett Quantile

**Syntax:** q = Dunnett Quantile( 1-alpha, nTrt, dfe, &lt;lambdaVec = .&gt; )

**Beschreibung:** Gibt das Quantil zurück, das in Dunnetts multiplen Vergleichstest benötigt wird. Dabei ist 1-alpha das Konfidenzniveau, nTrt die Anzahl der Behandlungen, die mit der Kontrollgruppe verglichen wird, dfe sind die Fehlerfreiheitsgrade (basierend auf dem Umfang der gesamten Stichprobe) und das optionalelambdaVec ist ein Vektor von Parametern, die standardmäßig auf 1/sqrt(2) gesetzt sind.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Dunnett Quantile( 0.95, 3, 11 );

```

### e

**Syntax:** y = e()

**Beschreibung:** Gibt die mathematische Konstante e zurück, bis auf ca. 15 Dezimalziffern genau: 2.7182818….

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Round( e(), 10 );

```

### E Div

**Syntax:** y = A :/ B; y = E Div( A, B )

**Beschreibung:** Gibt eine elementweise Division von Matrizen zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

[11 22 33] :/ [1 2 3];

```

### E Max

**Syntax:** y = E Max( A, B )

**Beschreibung:** Gibt eine Matrix zurück, bei der es sich um das Maximum der entsprechenden Elemente seiner Argumente handelt.

**JMP Version hinzugefügt:** 16

```jsl

E Max( [1 22 33], [11 2 3] );

```

### E Min

**Syntax:** y = E Min( A, B )

**Beschreibung:** Gibt eine Matrix zurück, bei der es sich um das Minimum der entsprechenden Elemente seiner Argumente handelt.

**JMP Version hinzugefügt:** 16

```jsl

E Min( [1 22 33], [11 2 3] );

```

### E Mult

**Syntax:** y = A :* B; y = E Mult( A, B )

**Beschreibung:** Gibt eine elementweise Multiplikation von Matrizen zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

[1 2 3] :* [11 22 33];

```

### Eigen

**Syntax:** {M, E} = Eigen( X )

**Beschreibung:** Führt eine Eigenwertzerlegung einer symmetrischen Matrix X durch. Gibt eine Liste {M, E} zurück, so dass E*Diag(M)*E` = X ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

X = [11 22, 22 33];
{M, E} = Eigen( X );
E * Diag( M ) * E`;

```

### Eigen BLAS

**Syntax:** z = Eigen BLAS( X, &lt;nvec = ncol&gt; )

**JMP Version hinzugefügt:** 17

```jsl

X = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];
{M1, E1} = Eigen BLAS( X );

```

### Empty

**Syntax:** y = Empty()

**Beschreibung:** Gibt einen leeren Wert zurück. Wird im Formeleditor für nicht angegebene Argumente verwendet.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Empty();

```

### Enable JMP Live URL

**Syntax:** Enable JMP Live URL(url)

**Beschreibung:** Aktiviert eine JMP Live-URL. Diese Methode ist nur während der Ausführung von jmpStartAdmin.jsl verfügbar. Ein Sternchen * kann als Platzhalter verwendet werden, um URLs anzugeben wie * (beliebige URL), *.jmp.com (eine URL, die mit .jmp.com endet), http://public.* (eine URL, die mit http://public. beginnt) oder *public* (eine URL, die „public“ enhält).

**JMP Version hinzugefügt:** 15

```jsl


Enable JMP Live URL( "https://public.jmp.com" );

```

### Enable Proxy Settings

**Syntax:** Enable Proxy Settings( 1|0 )

**Beschreibung:** Aktiviert oder deaktiviert Proxy-Einstellungen während der Ausführung von jmpStartAdmin.jsl. Standardmäßig sind Proxy-Einstellungen aktiviert.

**JMP Version hinzugefügt:** 15

```jsl


Enable Proxy Settings( 0 );

```

### Encode URI

**Syntax:** Encode URI( value )

**Beschreibung:** Zeichenkette mit URI-Verschlüsselung verschlüsseln

**JMP Version hinzugefügt:** 14

```jsl


Encode URI( "Foo Bar" );

```

### Encode64 Blob

**Syntax:** s = Encode64 Blob( x )

**Beschreibung:** Verschlüsselt einen Blob in eine druckbare Basis64-Zeichenkette.

**JMP Version hinzugefügt:** 14

```jsl

Encode64 Blob( Char To Blob( "the quick brown fox" ) );

```

### Encode64 Double

**Syntax:** s = Encode64 Double( x )

**Beschreibung:** Gibt die Gleitpunktzahl als Zeichenkette in Base64-Codierung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Encode64 Double( -1.5831 );

```

### Ends With

**Syntax:** b = Ends With( s, sub )

**Beschreibung:** Gibt 1 zurück, wenn s mit sub endet, andernfalls 0. Die Argumente s und sub können beide Zeichenketten oder beide Listen sein. Äquivalent zu Right( s, Length( sub )) == sub.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Ends With( "http://www.jmp.com", ".com" );

```

### Equal

**Syntax:** z = x == y == ...; z = Equal( x, y, ... )

**Beschreibung:** Gibt 1 zurück, wenn jedes Argument gleich dem nächsten Argument ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

1 == 1;

```

### Estimate Bartlett Factor Score

**Syntax:** {factorScores} = Estimate Bartlett Factor Score( dataRow , mvMeanVec, lvMeanVec, modSRAM, modARAM )

**Beschreibung:** Schätzt Faktor-Scores von einem Strukturgleichungsmodell (SEM) mit Hilfe von Bartletts Methode. Die Eingabeargumente sind ein Zeilenvektor von Daten, die durch das Modell implizierten Mittelwerte für die manifesten Variablen, die durch das Modell implizierten Mittelwerte für die latenten Variablen, die S-RAM-Matrix eines SEM und die A-RAM-Matrix eines SEM. Zurückgegeben wird ein Zeilenvektor mit geschätzten Faktor-Scores basierend auf dem SEM.

**JMP Version hinzugefügt:** 16

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

**Syntax:** {factorScores} = Estimate Factor Score( dataRow , modImpVarCov, mvMeanVec, lvMeanVec )

**Beschreibung:** Schätzt Faktor-Scores von einem Strukturgleichungsmodell (SEM) mit Hilfe der Regressionsmethode. Die Eingabeargumente sind ein Zeilenvektor von Daten sowie folgende durch das Modell implizierte Parameter: Eine Varianz-Kovarianzmatrix, ein Vektor von manifesten Variablenmittelwerten und ein Vektor von latenten Variablenmittelwerten. Zurückgegeben wird ein Zeilenvektor mit geschätzten Faktor-Scores basierend auf dem SEM.

**JMP Version hinzugefügt:** 15

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

**Syntax:** y = Eval( x )

**Beschreibung:** Wertet das Argument aus und gibt das Ergebnis zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval( Expr( 1 + 2 ) );

```

### Eval Expr

**Syntax:** y = Eval Expr( x )

**Beschreibung:** Gibt eine Kopie des Ausdrucks x zurück, wobei jeder Ausdruck Expr() innerhalb von x durch den ausgewerteten Wert ersetzt wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval Expr( Length( Expr( "X" || Char( 12 ) ) ) );

```

### Eval Insert

**Syntax:** y = Eval Insert( string, &lt;startChar="^"&gt;, &lt;endChar=startChar&gt; )

**Beschreibung:** Sucht nach Teilzeichenketten, die durch das Paar startChar/endChar eingeschlossen sind, und ersetzt diese durch den ausgewerteten Ausdruck.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval Insert( "Today is ^As Date( Today())^" );

```

### Eval Insert Into

**Syntax:** Eval Insert Into( l_string, &lt;startChar="^"&gt;, &lt;endChar=startChar&gt; )

**Beschreibung:** Sucht nach Teilzeichenketten, die durch das Paar startChar/endChar eingeschlossen sind, und ersetzt diese durch den ausgewerteten Ausdruck, dabei wird l_string ersetzt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ex = "Today is ^As Date( Today())^";
Eval Insert Into( ex );
ex;

```

### Eval List

**Syntax:** y = Eval List( list )

**Beschreibung:** Gibt eine Liste zurück, in der jedes Element ausgewertet wurde.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Eval List( {1 + 2, 3 + 4} );

```

**Beispiel 2**

```jsl

x = 5;
y = 10;
Eval List( {x, y} );

```

### Excerpt Box

**Syntax:** y = Excerpt Box( rptnum, lstSubscripts )

**Beschreibung:** Gibt ein Anzeigefeld mit dem Auszug zurück, der vom Bericht an Nummer rptnum und der Liste der Anzeigeindizes lstSubscripts angegeben wird. Die Indizes spiegeln den aktuellen Zustand des Berichts wider, nachdem vorherige Auszüge entfernt wurden.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Excluded( &lt;rs&gt; ); Excluded( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Beschreibung:** Gibt die Komponente „ausgeschlossen“ des angegebenen Zeileneigenschaftswerts zurück, 0 oder 1. Wenn die Funktion Excluded() als L-Wert verwendet wird, ändert es den ausgeschlossenen Zustand der aktuellen (oder r-ten) Zeile in der aktuellen Datentabelle.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );
Row() = 3;
Excluded();

```

### Excluded State

**Syntax:** rs = Excluded State( x )

**Beschreibung:** Gibt einen Zeileneigenschaftswert zurück, wobei die Komponente „ausgeschlossen“ auf den angegebenen Wert gesetzt ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );

```

### Execute SQL

**Syntax:** dt = Execute SQL(databaseConnectionHandle|dataConnector, "SELECT ..."|"SQLFILE=..."|tableName, &lt;invisible(0|1)&gt;, &lt;outputTableName&gt;, &lt;Batch Submit(0|1)&gt; )

**Beschreibung:** Führt SQL mit einer Datenbankverbindung aus, die von „Datenbankverbindung erstellen“ oder einem Datenkonnektor zurückgegeben wurde. Die Aktivierung von „Batch absenden“ ermöglicht den Empfang mehrerer Ergebnisse von mehreren SQL-Anweisungen und die Rückgabe einer Liste mit den Ergebnissen (nur unterstützende Treiber).

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

dt = Execute SQL(
	databaseConnectionHandle,
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"NewTable"
);

```

**Beispiel 2**

```jsl

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
dt = Execute SQL( dc, "SELECT HEIGHT, WEIGHT FROM Bigclass" );

```

**Beispiel 3**

```jsl

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
resultList = Execute SQL(
	dc,
	"SELECT HEIGHT, WEIGHT FROM Bigclass; SELECT AGE, WEIGHT FROM BigClass;",
	Batch Submit( 1 )
);

```

### ExGaussian Density

**Syntax:** y = ExGaussian Density( x, location, scale, shape )

**Beschreibung:** Gibt die Dichte an x einer Ex-Gauß-Verteilung zurück.

**JMP Version hinzugefügt:** 18

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

**Syntax:** y = ExGaussian Distribution( x, location, scale, shape )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Ex-Gauß-verteilte Zufallsvariable kleiner als x ist.

**JMP Version hinzugefügt:** 18

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

**Syntax:** q = ExGaussian Quantile( p, mu, sigma, lambda )

**Beschreibung:** Gibt das Quantil einer Ex-Gauß-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** 18

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

**Syntax:** Quit(&lt;"No Save"&gt;); Exit(&lt;"No Save"&gt;)

**Beschreibung:** Beendet JMP.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Exp( &lt;x=1&gt; )

**Beschreibung:** Gibt e hoch x zurück. Das Argument kann eine Zahl, Matrix oder Liste von Zahlen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Round( Exp( 1 ), 5 );

```

### Exp Density

**Syntax:** y = Exp Density( x, &lt;theta=1&gt; )

**Beschreibung:** Gibt die Dichte an x einer Exponentialverteilung mit Parameter theta zurück.

**JMP Version hinzugefügt:** 14

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

**Syntax:** p = Exp Distribution( x, &lt;theta=1&gt; )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine exponentiell verteilte Zufallsvariable kleiner als x ist.

**JMP Version hinzugefügt:** 14

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

**Syntax:** q = Exp Quantile( p, &lt;theta=1&gt; )

**Beschreibung:** Gibt das Quantil einer Exponentialverteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** 14

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

**Syntax:** y = ExpM1( x )

**Beschreibung:** Gibt eine Berechnung von Exp(x)-1 mit größerer Genauigkeit zurück, wenn x sehr klein ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show( ExpM1( 1.1e-18 ), Exp( 1.1e-18 ) - 1 );

```

### Exponential Density

**Syntax:** y = Exponential Density( x, &lt;theta=1&gt; )

**Beschreibung:** Gibt die Dichte an x einer Exponentialverteilung mit Parameter theta zurück.

**JMP Version hinzugefügt:** 17

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

**Syntax:** p = Exponential Distribution( x, &lt;theta=1&gt; )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine exponentiell verteilte Zufallsvariable kleiner als x ist.

**JMP Version hinzugefügt:** 17

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

**Syntax:** q = Exponential Quantile( p, &lt;theta=1&gt; )

**Beschreibung:** Gibt das Quantil einer Exponentialverteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** 17

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

**Syntax:** y = Expr( x )

**Beschreibung:** Gibt das Argument unausgewertet zurück. Dient zum Zitieren von Ausdrücken.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Expr( x + y );

```

### Expr As Picture

**Syntax:** y = Expr As Picture( expr( ... ), &lt;width in pixels&gt;, &lt;Max Matrix Size( dim )&gt; )

**Beschreibung:** Gibt ein Bild zurück, das den angegebenen Ausdruck als Formelabbildung enthält. Die Standardbreite ist 600 Pixel und die maximale Standardmatrixgröße ist 100.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Extract Expr( expr, pattern )

**Beschreibung:** Gibt einen Unterausdruck zurück, der dem angegebenen Muster entspricht.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Extract Expr( a + b * c, Wild() * Wild() );

```

### F Density

**Syntax:** y = F Density( q, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt die Dichte in q einer F-Verteilung mit dfn und dfd Freiheitsgraden zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = F Distribution( q, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine F-verteilte Zufallsvariable kleiner als q ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = F Log CDistribution( x, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt den Logarithmus von 1 - F-Verteilungsfunktion zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = F Log Density( x, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt den Logarithmus der F-Wahrscheinlichkeitsdichte zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = F Log Distribution( x, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt den Logarithmus der F-Verteilungsfunktion zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** nc = F Noncentrality( x, dfnum, dfden, prob )

**Beschreibung:** Bestimmt den Nichtzentralitätsparameter nc so, dass prob = F Distribution( x, ndf, ddf, nc ).

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = F Power( alpha, dfh, dfm, d, n )

**Beschreibung:** Berechnet die Power eines F-Tests. Dabei gilt Folgendes: alpha ist das Signifikanzniveau, dfh sind die Freiheitsgrade der Hypothese, dfm sind die Freiheitsgrade des gesamten Modell, d ist die quadrierte Effektgröße, SSH/(n*sigma^2), dabei ist SSH die Summe der Quadrate für die Hypothese, und n ist die Gesamtanzahl der Beobachtungen. Beachten Sie, dass für das ANOVA-Modell d = Sum(a[i]^2)/(k * sigma^2) ist. Dabei gilt: a[i] sind Effekte und k ist die Anzahl der Mittelwerte.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = F Quantile( p, dfnum, dfden, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt das Quantil einer F-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

F Quantile( 0.7, 5, 3 );

```

### F Sample Size

**Syntax:** n = F Sample Size( alpha, dfh, dfm, d, power )

**Beschreibung:** Berechnet die Stichprobengröße. Dabei gilt Folgendes: alpha ist das Signifikanzniveau, dfh sind die Freiheitsgrade der Hypothese, dfm sind die Freiheitsgrade des gesamten Modell, d ist die quadrierte Effektgröße, SSH/(n*sigma^2), dabei ist SSH die Summe der Quadrate für die Hypothese, und power ist die gewünschte Power. Beachten Sie, dass für das ANOVA-Modell d = Sum(a[i]^2)/(k * sigma^2) ist. Dabei gilt: a[i] sind Effekte und k ist die Anzahl der Mittelwerte.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Factorial( x )

**Beschreibung:** Gibt die Fakultät von x zurück, d. h. Gamma( x + 1 ). Wenn x eine ganze Zahl ist, ist das Ergebnis das Produkt 1 * 2 * ... * x.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Factorial( 5 );

```

### Faure Quasi Random Sequence

**Syntax:** points = Faure Quasi Random Sequence(nDim, nRow)

**Beschreibung:** Mit der Faure-Folge eine Folge von raumfüllenden Quasi-Zufallszahlen erzeugen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

A = Faure Quasi Random Sequence( 3, 100 );
As Table( A );
Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### FDR Adjust

**Syntax:** y = FDR Adjust( matrix )

**Beschreibung:** Gibt die Adjustierung der False Discovery Rate für die angegebenen p-Werte nach der Benjamini-Hochberg-Methode zurück.

**JMP Version hinzugefügt:** 19

```jsl

FDR Adjust( [0.5, 0.2, 0.05, 0.01] );

```

### FFT

**Syntax:** ret = FFT( L, &lt;&lt;inverse( 0 ), &lt;&lt;multivariate( 0 ), &lt;&lt;scale( 1.0 ) )

**Beschreibung:** Führt eine Fast Fourier Transformation (FFT) auf dem Argument L durch, eine erforderliche Liste bestehend aus Real- und Imaginärteilen der Daten in Form einer Matrix. Wenn L aus nur einer Matrix besteht, wird die Matrix als Realteil betrachtet. Wenn L aus zwei Matrizen besteht, ist die erste Matrix der Realteil und die zweite ist der Imaginärteil. Die zwei Matrizen müssen dieselben Dimensionen und mehr als eine Zeile haben. Es gibt drei optionale Argumente. Das Argument inverse legt fest, ob eine inverse FFT durchgeführt werden soll. Das Argument multivariate legt fest, ob eine räumliche oder multivariate FFT durchgeführt werden soll. Das Argument scale legt die Konstante fest, mit der die Rückgabewerte multipliziert werden sollen. Der Rückgabewert ist eine Liste aus zwei Matrizen mit den gleichen Dimensionen wie das erste eingegebene Argument.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** rc = File Exists( path )

**Beschreibung:** Bestimmt, ob die Datei vorhanden ist. Gibt 1 zurück, wenn der Dateipfad vorhanden ist. Gibt 0 zurück, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

If( File Exists( "$SAMPLE_DATA/Big Class.jmp" ),
	"ok",
	"missing!"
);

```

### File Size

**Syntax:** size = File Size( path )

**Beschreibung:** Gibt die Größe der Datei am vorgegebenen Pfad zurück. Gibt fehlend zurück, wenn der Dateipfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

File Size( "$SAMPLE_DATA/Big Class.jmp" );

```

### Files In Directory

**Syntax:** y = Files In Directory( "path", &lt;recursive(0|1)&gt;, &lt;include hidden(0|1)&gt; )

**Beschreibung:** Gibt die Liste von Dateinamen in einem von path angegebenen Verzeichnis zurück. Wenn das Argument Recursive nicht angegeben ist, werden Verzeichnisnamen in die Liste aufgenommen.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Files In Directory( "$HOME" );

```

**Beispiel 2**

```jsl

Filter Each( {fn}, Files In Directory( "$SAMPLE_DATA", recursive( 1 ) ),
	Contains( Lowercase( fn ), "stacked" )
);

```

### Fill Color

**Syntax:** Fill Color( &lt;name|index|rgbList&gt; )

**Beschreibung:** Legt die Farbe zum Zeichnen ausgefüllter Bereiche fest.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( {1, 1, .5} );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

### Fill Pattern

**Syntax:** Fill Pattern( name|mask|image )

**Beschreibung:** Legt das Muster zum Zeichnen ausgefüllter Bereiche fest. Eine Maske ist eine Matrix von Werten zwischen 0 und 1, die auf die aktuelle Füllfarbe angewendet werden soll.

**JMP Version hinzugefügt:** Vor Version 14

**Bild**

```jsl


image = New Image( "$SAMPLE_IMAGES/pi.gif" );
New Window( "Example",
	Graph Box(
		Fill Pattern( image );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

**Maskieren**

```jsl

New Window( "Example",
	Graph Box(
		Fill Pattern( [1 0.5 0 0, 0.5 0 0 1, 0 0 1 0.5, 0 1 0.5 0] );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

### Filter Col Selector

**Syntax:** y = Filter Col Selector(&lt;Data Table(name)&gt;, &lt;width(pixels)&gt;, &lt;nlines(n)&gt;, &lt;script&gt;, &lt;onchange(expr)&gt;)

**Beschreibung:** Gibt ein Anzeigefeld mit einer Liste von Elementen zurück. Das Bedienelement gestattet den Spaltenfilter.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example", fontobj = lb = Filter Col Selector( width( 250 ) ) );

```

### Filter Each

**Syntax:** list = Filter Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;locals list&gt;, body)

**Beschreibung:** Macht alles, was die Funktion „For Each“ macht, gibt jedoch auch eine Liste gefilterter Werte aus dem ursprünglichen Container basierend auf dem Ergebnis eines Booleschen Werts zurück. Der Typ des Ergebnisses stimmt mit dem Typ des Eingabecontainers überein. Bei einer Eingabe als Matrix wird eine Zeilenvektormatrix zurückgegeben, da die Größe der Matrix nicht bekannt sein kann.

**JMP Version hinzugefügt:** 16

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

**Syntax:** Find All( &lt;Project(title|index|box|window)&gt;, Data Tables | Reports | Journals, &lt;invisible | private&gt; )

**Beschreibung:** Findet alle offenen Ressourcen eines bestimmten Typs: Datentabellen, Journale oder Berichte.



Nur Fenster im aktuellen Projekt (oder in keinem Projekt, wenn das Projekt nicht in einem Skript ausgeführt wird) werden eingeschlossen. Um ein Projekt anzugeben, verwenden Sie das optionale Argument Projekt() mit einem Titel, Index, Anzeigefeld oder Fensterobjekt. Verwenden Sie Projekt(0), um kein Projekt anzugeben, wenn das Skript in einem Projekt ausgeführt wird.

**JMP Version hinzugefügt:** 14

```jsl


exdt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
exdt2 = Open( "$SAMPLE_DATA/Animals.jmp" );
windows = Find All( Data Tables );
For( i = 1, i <= N Items( windows ), i++,
	Write( Char( windows[i] << Get Window Title ) || "\!N" )
);

```

### First

**Syntax:** y = First( x1, x2, ... )

**Beschreibung:** Wertet jedes Argument aus und gibt den Wert des ersten Arguments zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

First( 11, 22 );

```

### Fit Censored

**Syntax:** result = FitCensored( Distribution(name), YLow(vector) | Y(vector), &lt;YHigh(vector)&gt;, &lt;Weight(vector)&gt;, &lt;X(matrix)&gt;, &lt;Z(matrix)&gt;, &lt;HoldParm(vector)&gt;, &lt;Use random sample to compute initial values(percent)&gt;, &lt;Use first N observations to compute initial values(nobs)&gt; )

**Beschreibung:** Passt eine Verteilung an zensierte Daten an. Die erforderlichen Argumente sind Distribution und entweder YLow oder Y. Die Funktion gibt eine Liste zurück, die Parameterschätzwerte, Kovarianzmatrix, Log-Likelihood, AICc, BIC und eine Konvergenzmitteilung enthält. Die Argumente X und Z geben Regressions-Designmatrizen für Lage und Skala an. Wenn der Datenvektor groß ist, kann mithilfe von zwei optionalen Argumenten eine Stichprobe zum Berechnen der Startwerte angegeben werden. Sie können einen percent der Beobachtungen oder die ersten nobs Beobachtungen angeben, doch die Gesamtstichprobengröße muss größer als 100 sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

result = Fit Censored(
	Distribution( "Weibull" ),
	Y( [142, 156, 163, 198, 204, 205, 232, 239, 240, 261, 280, 296, 323, 344] )
);
Show( result );

```

### Fit Circle

**Syntax:** {xCenter, yCenter, radius, sse} = Fit Circle( Xvec, Yvec )

**Beschreibung:** Passt den Kreis an, der am besten durch drei oder mehr Punkte verläuft, die von zwei Koordinatenvektoren definiert sind. Das Ergebnis ist eine Liste mit den X- und Y-Koordinaten des Mittelpunkts des Kreises, die Länge des Radius und die Summe der quadrierten Abweichungen.

**JMP Version hinzugefügt:** 14

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

**Syntax:** result = Fit Transform To Normal( Distribution(name), Y(vector), &lt;Freq(vector)&gt; )

**Beschreibung:** Passt eine Normaltransformation an einen Datenvektor an. Dies umfasst die Verteilungen Johnson Sl, Johnson Sb, Johnson Su und GLog. Die Funktion gibt eine Liste zurück mit Parameterschätzwerten, Kovarianzmatrix, Log-Likelihood, AIC und einer Konvergenzmeldung.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Floor( x )

**Beschreibung:** Gibt die größte ganze Zahl kleiner oder gleich x zurück. Argument kann eine Zahl, Matrix oder Liste von Zahlen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Floor( 1.2 );

```

### For

**Syntax:** For( initExpr, whileExpr, nextExpr, bodyExpr )

**Beschreibung:** Wertet „initExpr“ einmal aus und wertet „whileExpr“, „bodyExpr“ und „nextExpr“ wiederholt aus, solange „whileExpr“ auf einen Wert ungleich 0 ausgewertet wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

s = "";
For( i = 1, i < 10, i++,
	s ||= " " || Char( i )
);
Trim( s );

```

### For Each

**Syntax:** For Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;locals list&gt;, body)

**Beschreibung:** Iteriert über einen Container entweder eine Liste, eine Matrix, ein assoziatives Array oder einen Ausdruck und liefert den Wert, das Element oder den Schlüssel bei jeder Iteration. Die Indexnummer ist bei jeder Iteration verfügbar. Bei Containern mit assoziativen Arrays kann über eine Liste aus zwei Elementen auf den Schlüssel und den Wert zugegriffen werden. Bei Matrix-Containern wird standardmäßig ein linearer Index angegeben, doch mithilfe einer Liste aus zwei Elementen kann auf die Zeilen- und Spaltenindizes zugegriffen werden. Diese Symbole werden nur innerhalb des Körpers der Schleife angegeben, mit einem integrierten Block lokaler Variablen. Es kann auch eine Liste der lokalen Variablen angegeben werden, die nach Festlegung der ersten Iterationssymbole initialisiert werden.

**JMP Version hinzugefügt:** 16

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

**Matrix - Linearer Index**

```jsl

For Each( {element, index}, 10 :: 15, Show( element, index ) );

```

### For Each Row

**Syntax:** y = For Each Row( &lt;dt&gt;, body )

**Beschreibung:** Wertet den Ausdruck „body“ für jede Zeile in der aktuellen Datentabelle iterativ aus.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( :height = -:height );

```

### Force Action Notes

**JMP Version hinzugefügt:** 16

### Format

**Syntax:** s = Format( x, formatString, &lt;options&gt; )s = Format( x, "Format Pattern", pattern, &lt;options&gt; )

**Beschreibung:** Gibt die Zahl im angegebenen Format zurück. Formate umfassen Elemente im Dialogfeld „Spalteninfo“ wie „Bestes“ und „h:m:s“. Weitere Optionen wie p-Wert, Währung, Datum und Uhrzeit und geografische Formate finden Sie in den Hilfethemen.

**JMP Version hinzugefügt:** Vor Version 14

**Datum/Uhrzeit**

```jsl

Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

**Formatmuster**

```jsl

Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

**Prozent, Währung**

```jsl

pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

**Volle Präzision**

```jsl

Show( Format( 88.54, "Best" ), Format( 88.54, "Best", "Full Precision" ) );

```

### Format Date

**Syntax:** s = Format( x, formatString, &lt;options&gt; )s = Format( x, "Format Pattern", pattern, &lt;options&gt; )

**Beschreibung:** Gibt die Zahl im angegebenen Format zurück. Formate umfassen Elemente im Dialogfeld „Spalteninfo“ wie „Bestes“ und „h:m:s“. Weitere Optionen wie p-Wert, Währung, Datum und Uhrzeit und geografische Formate finden Sie in den Hilfethemen.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Print( Format( Today(), "yyyyQq" ), Format( Today(), "m/d/y h:m" ) );

```

**Beispiel 2**

```jsl

Print( Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm><:><ss>" ) );

```

**Beispiel 3**

```jsl

pct = Format( 0.123, "Percent", 2 );
amt = Format( 123.4567, "Currency", "EUR", 2 );
result = "Revenue increase: " || amt || " or " || pct || ".";

```

### Format Pattern

**Syntax:** s = Format( x, "Format Pattern", pattern, &lt;width&gt;, &lt;dec&gt;)x = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )obj = Format("Format Pattern", pattern, &lt;width&gt;, &lt;dec&gt;)

**Beschreibung:** Formatmuster sind Zeichenketten, die ein Datum/Uhrzeit-Format definieren, etwa „<JJJJ></><MM></><TT> <hh><:><mm><:><ss><ampm>“. Die Teile des Musters in spitzen Klammern werden Felddeskriptoren genannt. Die Felddeskriptoren stellen einen Wert dar (wie „<JJJJ>“, ein Jahr mit vier Stellen) oder einen anderen Datum/Uhrzeit-Text (wie "</>", ein vom Gebietsschema abhängiges Trennzeichen für das Datum). Ein Formatmuster ermöglicht es Ihnen, Formate zu erstellen, die in JMP nicht bereitgestellt werden. Diese Formate können zum Formatieren und Eingeben von Daten verwendet werden.

**JMP Version hinzugefügt:** 16

```jsl

s = Format( Today(), "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );
x = Informat( "2020/02/10 14:54", "Format Pattern", "<YYYY></><MM></><DD> <hh24><:><mm>" );
Show( s, x );
                                                /*
Felddeskriptoren

Datumsangaben
(können nicht mit Felddeskriptoren für die Dauer verwendet werden)
================================================================================
<YYYY>        Jahr mit vier Ziffern. (1-4 Ziffern werden bei der Eingabe
              akzeptiert.)
<YY>          Jahr mit zwei Ziffern
<yyyy>        ISO-Jahr mit vier Ziffern; ähnlich ISO-Wochen. (Bei der Eingabe
              werden 1-4 Ziffern akzeptiert.)
<yy>          ISO-Jahr mit zwei Ziffern; ähnlich ISO-Wochen.
<YYYY.>       Jahr mit fraktionellem Jahr. Beschreibt Datum und Uhrzeit
              vollständig.
<M>           Nummer des Monats (1..12)
<MM>          Nummer des Monats, mit Null aufgefüllt (01..12)
<Month>       Monatsname ausgeschrieben
<Mmm>         Monatsname abgekürzt
<MMM>         Monatsname in drei Buchstaben
<WW1>         Nummer der Woche mit zwei Ziffern, mit Nullen aufgefüllt. Woche 2
              beginnt am ersten Sonntag des Jahres. Woche 1 ist die Teilwoche
              vor dem ersten Sonntag. (01..54)
<WW2>         Nummer der Woche mit zwei Ziffern, mit Nullen aufgefüllt. Woche 1
              beginnt am ersten Sonntag des Jahres. Woche 0 ist die Teilwoche
              vor dem ersten Sonntag. (00..53)
<ww>          Nummer der ISO-Woche mit zwei Ziffern, mit Nullen aufgefüllt. Die
              Wochen beginnen am Montag. Woche 1 ist die erste Woche in dem Jahr
              mit 4 oder mehr Tagen. Es gibt keine Teilwochen, stattdessen kann
              die erste oder letzte Woche in das Vorjahr bzw. Folgejahr reichen.
              (01..53)
<D>           Tag des Monats (1..31)
<DD>          Tag des Monats, mit Nullen aufgefüllt (01..31)
<Q>           Quartal des Jahres (1..4)
<Q#>          „Q“ gefolgt vom Quartal des Jahres (1..4)
<DayOfWeek>   Name des Wochentags
<DW>          Wochentag als Zahl. 1 = Sonntag, 7 = Samstag
<dw>          Wochentag als Zahl. 1 = Montag, 7 = Sonntag
</>           Trennzeichen beim Datum des Gebietsschemas. (Die meisten
              Trennzeichen werden bei der Eingabe akzeptiert.)
<->           Trennzeichen ‚-‘beim ISO-Datum. (Die meisten Trennzeichen werden
              bei der Eingabe akzeptiert.)
</?>          Optionales Datumstrennzeichen bei der Datumseingabe. Das
              Trennzeichen wird bei der Ausgabe nie geschrieben.
<'T'>         Das ‚T‘ in ISO-Datumsangaben

Uhrzeiten
(einige können mit Felddeskriptoren für die Dauer verwendet werden)
================================================================================
<hh>          Das Stundenformat entspricht dem aktuellen Gebietsschema. Wenn ein
              <ampm>-Deskriptor vorhanden ist, wird abhängig vom Gebietsschema
              das 12- oder 24-Stunden-Format verwendet. Wenn ein
              <AMPM>-Deskriptor vorhanden ist, wird das 12-Stunden-Format
              verwendet. Ansonsten wird das 24-Stunden-Format verwendet. (Kann
              bei Deskriptoren für Felder zur Angabe der Dauer nicht verwendet
              werden.)
<zhh>         Das Stundenformat entspricht dem aktuellen Gebietsschema und wird
              mit Nullen aufgefüllt. Wenn ein <ampm>-Deskriptor vorhanden ist,
              wird abhängig vom Gebietsschema das 12- oder 24-Stunden-Format
              verwendet. Wenn ein <AMPM>-Deskriptor vorhanden ist, wird das
              12-Stunden-Format verwendet. Ansonsten wird das 24-Stunden-Format
              verwendet. (Kann bei Deskriptoren für Felder zur Angabe der Dauer
              nicht verwendet werden.)
<hh24>        Stundenangabe im 24-Stunden-Format und mit Nullen aufgefüllt
              (00..23)
<mm>          Minutenangabe, mit Nullen aufgefüllt (00..59)
<ss>          Sekundenangabe, mit Nullen aufgefüllt (00..59)
<ampm>        AM/PM-Symbol für das aktuelle Gebietsschema. (Kann nicht mit
              Felddeskriptoren für die Dauer verwendet werden.)
<AMPM>        Gebietsschema-unabhängiges AM/PM-Symbol „AM“ oder „PM“. (Kann bei
              Deskriptoren für Felder zur Angabe der Dauer nicht verwendet
              werden.)
<:>           Das Trennzeichen für die Uhrzeit des Gebietsschemas.
<::>          Das Trennzeichen für die ISO-Uhrzeit ‚:‘. (Das Trennzeichen für
              die Uhrzeit des Gebietsschemas wird auch bei der Eingabe
              akzeptiert.)
<:?>          Optionales Uhrzeittrennzeichen bei der Datumseingabe. Das
              Trennzeichen wird bei der Ausgabe nie geschrieben.

Dauer
(können nicht mit Felddeskriptoren für das Datum verwendet werden)
================================================================================
<Day>         Tagesanzahl. Wird bei der Dauer als signifikantestes Feld
              verwendet. Kann mit keiner anderen „Anzahl“ verwendet werden.
<Hour>        Stundenanzahl. Wird bei der Dauer als signifikantestes Feld
              verwendet. Kann mit keiner anderen „Anzahl“ verwendet werden.
<Minute>      Minutenanzahl. Wird bei der Dauer als signifikantestes Feld
              verwendet. Kann mit keiner anderen „Anzahl“ verwendet werden.

Sonstige
================================================================================
<<>           Wird durch „<“ ersetzt
*/

```

### Fourier Basis Coef

**Syntax:** coef = Fourier Basis Coef( x, Number Pairs, &lt;Period = max(x)-min(x)+1&gt; )

**Beschreibung:** Gibt die Matrix der Fourier-Basis-Koeffizienten zurück. Number Pairs ist die Anzahl von Sin()- und Cos()-Paaren für die Basis. Der optionale Parameter Period gibt die Periode für die trigonometrischen Funktionen an und hat den Standardwert Max(x) - Min(x) + 1.

**JMP Version hinzugefügt:** 14

```jsl

Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2 );
Fourier Basis Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] / 10, 2, 2 );

```

### Frechet Density

**Syntax:** y = Frechet Density( x, mu, sigma )

**Beschreibung:** Gibt die Dichte in x einer Frechet-Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Frechet Distribution( x, mu, sigma )

**Beschreibung:** Gibt die Wahrscheinlichkeit in x einer Frechet-Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Frechet Quantile( p, mu, sigma )

**Beschreibung:** Gibt das Quantil in p einer Frechet-Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Function( {arg1=val1, ...}, &lt;{local1=val1, ...}&gt;, expr )

**Beschreibung:** Definiert eine Funktion mit den angegebenen Argumenten, Standardwerten und optionalen lokalen Variablen. Argumente mit Standardwerten sind bei Aufruf der Funktion optional. Wenn im Skript der Funktion Return() verwendet wird, wird der Ausdruck innerhalb zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

exsqr = Function( {x}, x * x );
exsqr( 5 );

```

**Beispiel 2**

```jsl

// y is an optional argument
exmul = Function( {x, y = 3}, x * y );
a = exmul( 5 );
b = exmul( 5, 10 );
Show( a, b );

```

**Beispiel 3**

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

**Syntax:** x = Future Value( rate, nper, pmt, &lt;pv=0&gt;, &lt;type=0&gt; )

**Beschreibung:** Gibt den zukünftigen Wert einer Annuität zurück, die auf regelmäßigen, konstanten Zahlungen und einem konstanten Zinssatz basiert. Das Argument type ist 0, wenn Zahlungen am Ende des Zahlungszeitraums fällig sind, bzw. 1, wenn Zahlungen zu Beginn des Zeitraums fällig sind. Entspricht der FV-Funktion in Microsoft Excel.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Future Value( .03, 12, 100, 0, 1 );

```

### G Inverse

**Syntax:** g = G Inverse( A )

**Beschreibung:** Gibt die verallgemeinerte (Moore-Penrose) inverse Matrix zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Round( G Inverse( [11 22, 33 44] ), 2 );

```

### Gamma

**Syntax:** y = Gamma( x, &lt;limit&gt; )

**Beschreibung:** Gibt die Gamma-Funktion von x zurück, definiert als Integral von z^(x-1)*exp(-z) dz, von 0 bis ∞. Wenn limit angegeben ist, wird der Wert der unvollständigen Gamma-Funktion mit dieser Integrationsgrenze berechnet.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Gamma( 5 );

```

### Gamma Density

**Syntax:** y = Gamma Density( q, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Beschreibung:** Gibt die Dichte in q einer Gamma-Wahrscheinlichkeitsverteilung zurück. Das Argument alpha ist der Formparameter und muss positiv sein.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Gamma Distribution( q, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Gamma-verteilte Zufallsvariable kleiner als q ist. Das Argument alpha ist ein Formparameter und muss positiv sein. IGamma() ist ein Aliasname für Gamma Distribution(). Die Funktion Gamma Distribution() ist äquivalent zu Gamma(alpha,q)/Gamma(alpha).

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Gamma Log CDistribution( x, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Beschreibung:** Gibt den Logarithmus der 1 - Gamma-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Gamma Log Density( x, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Beschreibung:** Gibt den Logarithmus der Gamma-Wahrscheinlichkeitsdichte zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Gamma Log Distribution( x, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Beschreibung:** Gibt den Logarithmus der Gamma-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** cumprob = Gamma Poisson Distribution( k, lambda, sigma )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Poisson-verteilte Zufallsvariable kleiner oder gleich k ist. lambda ist der Mittelwertparameter, sigma ist der Überdispersionparameter und k ist die betrachtete Häufigkeit.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** prob = Gamma Poisson Probability( k, lambda, sigma )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Poisson-verteilte Zufallsvariable gleich k ist. lambda ist der Mittelwertparameter, sigma ist der Overdispersionparameter und k ist die betrachtete Häufigkeit.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Gamma Poisson Quantile( lambda, sigma, cumprob )

**Beschreibung:** Gibt das Quantil als kleinste ganze Zahl zurück, für das die kumulierte Wahrscheinlichkeit der Gamma-Poisson-Verteilung (lambda, sigma) größer als oder gleich cumprob ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Gamma Quantile( p, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Beschreibung:** Gibt das Quantil einer Gamma-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Gamma Quantile( 0.75, 4 );

```

### GenGamma Density

**Syntax:** y = GenGamma Density( x, mu, sigma, lambda )

**Beschreibung:** Gibt die Dichte an der Stelle x einer erweiterten verallgemeinerten Gamma-Wahrscheinlichkeitsverteilung mit den Parametern mu, sigma und lambda zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = GenGamma Distribution( x, mu, sigma, lambda )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine erweiterte verallgemeinerte Gamma-verteilte Zufallsvariable (mit den Parametern mu, sigma und lambda) kleiner ist als x.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = GenGamma Quantile( p, mu, sigma, lambda )

**Beschreibung:** Gibt das Quantil einer erweiterten verallgemeinerten Gamma-Verteilung zurück (mit den Parametern mu, sigma und lambda), den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Get Addin( ID )

**Beschreibung:** Ruft ein anhand der ID angegebenes registriertes Add-in ab.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

addin = Get Addin( "com.mycompany.myaddin" );

```

### Get Addins

**Syntax:** Get Addins( )

**Beschreibung:** Gibt eine Liste aller registrierten Add-ins zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

addins = Get Addins();
addin ids = Get Addins() << id;
Show( addins, addin ids );

```

### Get Addr Info

**Syntax:** Get Addr Info( string )

**Beschreibung:** Sucht nach der numerischen Adresse eines Namens. In den meisten Fällen sollte der Name für künftige IPV6-Kompatibilität verwendet werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Get Addr Info( "www.jmp.com" )[3][4];

```

### Get Class Names

**Syntax:** Get Class Names( &lt; &lt;class reference&gt;, ... &gt; )

**Beschreibung:** Gibt eine Liste von Namen sämtlicher derzeit definierter Klassen zurück.

**JMP Version hinzugefügt:** 14

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

**Syntax:** Get Classes( &lt; &lt;class reference&gt;, ... &gt; )

**Beschreibung:** Gibt eine Liste von Referenzen auf alle gegenwärtig definierten Klassen zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Get Clipboard()

**Beschreibung:** Ruft den aktuellen Inhalt der Zwischenablage ab

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Get Clipboard();

```

### Get Color Theme Detail

**Syntax:** script = Get Color Theme Detail(name)

**Beschreibung:** Gibt das Skript für ein vorgegebenes Farbschema zurück

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Get Color Theme Detail( "JMP Default" );

```

### Get Color Theme Names

**Syntax:** {list of names} = Get Color Theme Names(&lt;kind&gt;)

**Beschreibung:** Gibt eine Liste von Zeichenketten für Farbschemata zurück, die dem optionalen Parameter kind entsprechen. Für kind gibt es folgende Optionen: „stetig“, „kategorial“, „sequentiell“, „divergierend“, „qualitativ“ oder „chromatisch“.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Get Color Theme Names();

```

**Beispiel 2**

```jsl

Get Color Theme Names( "sequential" );

```

### Get Custom Functions

**Syntax:** Get Custom Functions(&lt;{function 1 full name, function 2 full name, ...} | function full name&gt;)

**Beschreibung:** Eine Liste der benutzerdefinierten Funktionen abrufen

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

Get Custom Functions();

```

**Beispiel 2**

```jsl

Get Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Get Data Table

**Syntax:** dt = Get Data Table( &lt;Project(title|index|box|window)&gt;, name|index )

**Beschreibung:** Gibt eine Referenz auf die angegebene Datentabelle zurück.



Die Suche ist auf Tabellen im aktuellen Projekt begrenzt (oder auf kein Projekt, wenn das Skript nicht in einem Projekt ausgeführt wird).



Um ein Projekt anzugeben, verwenden Sie das optionale Argument Projekt() mit einem Titel, Index, Anzeigefeld oder Fensterobjekt. Verwenden Sie Projekt(0), um kein Projekt anzugeben, wenn das Skript in einem Projekt ausgeführt wird.

**JMP Version hinzugefügt:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Get Data Table( 1 );

```

### Get Data Table List

**Syntax:** tableList = Get Data Table List( &lt;Project(title|index|box|window)&gt; )

**Beschreibung:** Gibt eine Liste aller geöffneten Datentabellen zurück.



Die Liste ist auf Tabellen im aktuellen Projekt begrenzt (oder auf kein Projekt, wenn das Skript nicht in einem Projekt ausgeführt wird).



Um ein Projekt anzugeben, verwenden Sie das optionale Argument Projekt() mit einem Titel, Index, Anzeigefeld oder Fensterobjekt. Verwenden Sie Projekt(0), um kein Projekt anzugeben, wenn das Skript in einem Projekt ausgeführt wird.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Get Data Table List();

```

**Beispiel 2**

```jsl

project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
Get Data Table List( Project( project ) );

```

### Get Default Directory

**Syntax:** y = Get Default Directory()

**Beschreibung:** Gibt das JMP-Standardverzeichnis zurück, das als Basis für nachfolgende relative Pfade gilt. Dieser Pfad ist das Verzeichnis, das das aktuell ausgeführte Skript enthält, wenn das Skript gespeichert wurde.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show( Get Default Directory() );
Set Default Directory( "$SAMPLE_DATA" );
Show( Get Default Directory() );

```

### Get Environment Variable

**Syntax:** value = Get Environment Variable( string )

**Beschreibung:** Gibt den Wert der angegebenen Umgebungsvariablen aus dem Betriebssystem zurück.



HINWEIS: Beim Macintosh-Betriebssystem wird beim Variablennamen zwischen Groß- und Kleinschreibung unterschieden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Get Environment Variable( "PATH" );

```

### Get Excel Worksheets

**Syntax:** list = Get Excel Worksheets("filepath")

**Beschreibung:** Gibt eine Liste von Arbeitsblättern in einer Excel-Arbeitsmappe zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

sheetList = Get Excel Worksheets( "$SAMPLE_IMPORT_DATA\Team Results.xlsx" );
Show( sheetList );

```

### Get Expr Location

**Syntax:** Get Expr Location(&lt;expression&gt;, [{"TokenStartLine"|"TokenStartCol"|"TokenStart"|"TokenLength"|"TreeStart"|"TreeEnd"|"TreeLength"}+]

**Beschreibung:** Ruft die Positionen des obersten Tokens in einem geparsten Ausdruck ab. Der Standardaufruf gibt {die Quelldatei, TokenStartLine, TokenStartCol, TokenLength} zurück.

**JMP Version hinzugefügt:** 17

**Ausgabe auswählen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
e = Parse( " :height + 20 " );
Get Expr Location( e, {"TreeStart", "TreeEnd"} );

```

**Standardausgabe**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
e = Parse( ":height + 20" );
Get Expr Location( e );

```

**Teilzeichenkette ersetzen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
data = " :height + 20 ";
e = Parse( data );
positions = Get Expr Location( Arg( e, 2 ), {"TreeStart", "TreeLength"} );
Munger( data, positions[1], positions[2], "45" );

```

### Get File Search Path

**Syntax:** y = Get File Search Path()

**Beschreibung:** Gibt die aktuelle Liste der Verzeichnisse zurück, um nach zu öffnenden Dateien zu suchen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Get File Search Path();

```

### Get Locale Setting

**Syntax:** value = Get Locale Setting( settingName )

**Beschreibung:** Ruft eine Gebietsschemaeinstellung wie das Dezimaltrennzeichen ab

**JMP Version hinzugefügt:** 16

```jsl

Get Locale Setting( "Decimal Separator" );

```

### Get Log

**Syntax:** list = Get Log( &lt;N&gt; )

**Beschreibung:** Gibt eine Liste von Zeilen aus dem Log zurück. Wenn kein Parameter angegeben ist, werden alle Zeilen aus dem Log zurückgegeben. Wenn das numerische Argument N positiv ist, dann werden die ersten N Zeilen aus dem Log zurückgegeben. Wenn N negativ ist, werden die letzten N Zeilen aus dem Log zurückgegeben. Wenn N null ist, werden keine Zeilen zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

all contents = Get Log();
headcontents = Get Log( 10 );
tailcontents = Get Log( -5 );

```

### Get Name Info

**Syntax:** Get Name Info( string )

**Beschreibung:** Sucht nach dem Namen einer numerischen Adresse. In den meisten Fällen sollte der Name für künftige IPV6-Kompatibilität verwendet werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Get Name Info( "149.173.5.120" )[3][4];

```

### Get Namespace Names

**Syntax:** Get Namespace Names( &lt; &lt;namespace reference&gt;, ... &gt; )

**Beschreibung:** Gibt eine Liste von Namen sämtlicher derzeit definierter Namensräume zurück.

**JMP Version hinzugefügt:** 14

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

**Syntax:** Get Namespaces( &lt; &lt;namespace reference&gt;, ... &gt; )

**Beschreibung:** Gibt eine Liste von Referenzen auf alle gegenwärtig definierten Namensräume zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** notebookList = Get Notebook List()

**Beschreibung:** Gibt eine Liste aller geöffneten Notebooks zurück.

**JMP Version hinzugefügt:** 19

### Get OAuth2 Grant Types

**Syntax:** Get OAuth2 Grant Types

**Beschreibung:** Ruft die von JMP unterstützten OAuth2-Berechtigungstypen ab.

**JMP Version hinzugefügt:** 15

```jsl


/*
https://oauth.net/2/grant-types/
*/
grant_types = Get OAuth2 Grant Types();
Show( grant_types );

```

### Get OpenID Connect Discovery

**JMP Version hinzugefügt:** 15

```jsl


url = "https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration";
aa = Get OpenID Connect Discovery( url );
Show( aa );

```

### Get OpenIDC Discovery

**JMP Version hinzugefügt:** 15

### Get Path Variable

**Syntax:** value = Get Path Variable( name )

**Beschreibung:** Gibt den Wert einer Pfadvariablen zurück, z. B. einen Namen wie SAMPLE_DATA, der, wenn er in Pfadnamen gefunden wird, ersetzt wird.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Get Path Variable( "SAMPLE_DATA" );
/* try: SAMPLE_DATA, SAMPLE_IMPORT_DATA, SAMPLE_SCRIPTS
See full listing of Path Variables in the other example
See also Convert File Path() and Set Path Variable() */

```

**Liste**

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

**Syntax:** Get Platform Preferences( &lt; platformName &lt; ( optionName, ... ) &gt; ... &gt; )

**Beschreibung:** Ruft Plattformvoreinstellungen wie angegeben ab.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Platform Preferences

**Syntax:** Get Platform Preferences( &lt; platformName &lt; ( optionName, ... ) &gt; ... &gt; )

**Beschreibung:** Ruft Plattformvoreinstellungen wie angegeben ab.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Get Platform Preferences( Bivariate( Fit Line ), DOE );

```

### Get Policies

**Syntax:** Get Policies( &lt;Machine|User|Both&gt; )

**Beschreibung:** Gibt ein assoziatives Array mit den Namen und Werten der aktuellen Richtlinien zurück.

**JMP Version hinzugefügt:** 18

```jsl

Get Policies();

```

### Get Policy

**Syntax:** Get Policy( "PolicyName" )

**JMP Version hinzugefügt:** 18

### Get Preference

**Syntax:** Get Preferences( pref1, ... )

**Beschreibung:** Ruft Voreinstellungen wie angegeben ab.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Get Preferences( Graph marker size );

```

### Get Preferences

**Syntax:** Get Preferences( pref1, ... )

**Beschreibung:** Ruft Voreinstellungen wie angegeben ab.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Get Preferences( Graph marker size );

```

### Get Project

**Syntax:** project = Get Project( title|index|box|window )

**Beschreibung:** Gibt einen Verweis auf ein spezifisches geöffnetes Projekt nach Titel, Index oder Feld zurück.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
                             
Print( Get Project( 2 ) << Get Window Title() );

```

**Beispiel 2**

```jsl

Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
                             
project = Get Project( "Big Class" );

```

### Get Project List

**Syntax:** projectList = Get Project List()

**Beschreibung:** Gibt eine Liste aller geöffneten Projekte zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Project();
Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
                              
Print( Get Project List() << Get Window Title() );

```

### Get Punctuation Characters

**Syntax:** Get Punctuation Characters(&lt;Exclude Chars(chars) | Include Chars(chars)&gt;)

**Beschreibung:** Gibt eine Zeichenkette mit den Zeichensetzungszeichen zurück, die üblicherweise zum Trennen von Wörtern verwendet werden. Dazu gehören ,:;.?!\\/#@&~()[]<>"*`%$+=^|{} und häufig verwendete Unicode-Zeichensetzung.

**JMP Version hinzugefügt:** 15

**Beispiel 1**

```jsl

Get Punctuation Characters();

```

**Beispiel 2**

```jsl

Get Punctuation Characters( Include Chars( "_" ) );

```

**Beispiel 3**

```jsl

Get Punctuation Characters( Exclude Chars( "$[]" ) );

```

**Beispiel 4**

```jsl

Collapse Whitespace(
	Substitute( "This...string..has..dots", Items( Get Punctuation Characters(), "" ), " " )
);

```

### Get Session Script

**Syntax:** Get Session Script( win1, ... )

**Beschreibung:** Gibt das Sitzungsskript für die angegebenen Fenster zurück. Das Sitzungsskript ist ein JSL-Ausdruck, der die vorgegebenen Fenster, einschließlich Datentabellen, Skriptfenster, Journale und Berichte erneut erstellt. Über JSL-Skripte erstellte Berichte haben begrenzte Unterstützung und versuchen nur, das Layout der Anzeige erneut zu erstellen.

**JMP Version hinzugefügt:** 17

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << RunScript( "Bivariate" );
Get Session Script( Report( biv ) );

```

### Get Whitespace Characters

**Syntax:** Get Whitespace Characters()

**Beschreibung:** Gibt eine Zeichenkette zurück, die alle Leerzeichen enthält, die typischerweise verwendet werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Get Whitespace Characters();

```

### Get Window

**Syntax:** window = Get Window( &lt;Project(title|index|box|window)&gt;, &lt;Type(string)&gt;, title|index|box )

**Beschreibung:** Gibt eine Referenz auf ein spezifisches geöffnetes Fenster nach Titel, Index oder Feld zurück.



Die Suche ist auf Fenster im aktuellen Projekt begrenzt (oder auf kein Projekt, wenn das Skript nicht in einem Projekt ausgeführt wird).



Um ein Projekt anzugeben, verwenden Sie das optionale Argument Projekt() mit einem Titel, Index, Anzeigefeld oder Fensterobjekt. Verwenden Sie Projekt(0), um kein Projekt anzugeben, wenn das Skript in einem Projekt ausgeführt wird.



Verwenden Sie das optionale Argument Typ() entweder mit „Datentabellen“, „Journalen“, „Berichten“ oder „Dialogfeldern“, um die Suche auf Fenster eines bestimmten Typs zu begrenzen.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

Open( "$SAMPLE_DATA\Big Class.jmp" );
                                        
window = Get Window( "Big Class" );

```

**Beispiel 2**

```jsl

project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
window = Get Window( Project( project ), "Big Class" );

```

### Get Window List

**Syntax:** windowList = Get Window List( &lt;Project(title|index|box|window)&gt;, &lt;Type(string)&gt; )

**Beschreibung:** Gibt eine Liste aller geöffneten Fenster zurück.



Die Liste ist auf Fenster im aktuellen Projekt begrenzt (oder auf kein Projekt, wenn das Skript nicht in einem Projekt ausgeführt wird).



Um ein Projekt anzugeben, verwenden Sie das optionale Argument Projekt() mit einem Titel, Index, Anzeigefeld oder Fensterobjekt. Verwenden Sie Projekt(0), um kein Projekt anzugeben, wenn das Skript in einem Projekt ausgeführt wird.



 Verwenden Sie das optionale Argument Typ() entweder mit „Datentabellen“, „Journalen“, „Berichten“ oder „Dialogfeldern“, um die Liste auf Fenster eines bestimmten Typs zu begrenzen.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

Print( Get Window List() << Get Window Title() );

```

**Beispiel 2**

```jsl

project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
Print( Get Window List( Project( project ) ) << Get Window Title() );

```

**Beispiel 3**

```jsl

project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
Print( Get Window List( Project( project ), Type( "Data Tables" ) ) << Get Window Title() );

```

### Global Box

**Syntax:** box = Global Box( name )

**Beschreibung:** Gibt ein Anzeigefeld für die Anzeige des Werts einer globalen Variable zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ex = .6;
New Window( "Example", Global Box( ex ) );

```

### GLog Density

**Syntax:** y = GLog Density( q, mu, sigma, lambda )

**Beschreibung:** Gibt die Dichte bei q einer verallgemeinerten logarithmischen Verteilung mit der Lage mu, der Skala sigma und der Form lambda zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = GLog Distribution( q, mu, sigma, lambda )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine verallgemeinerte logarithmisch-verteilte Zufallsvariable kleiner als q ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = GLog Quantile( p, mu, sigma, lambda )

**Beschreibung:** Gibt das Quantil einer verallgemeinerten logarithmischen Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = ( expr1; expr2; ... ); y = Glue( expr1, expr2, ... )

**Beschreibung:** Wertet jedes Argument aus und gibt das letzte Ergebnis zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ex1 = 1;
ex2 = 2;

```

### Google Sheet Export

**Syntax:** Google Sheet Export(dt, Email(address), Spreadsheet(url|id) | New Spreadsheet(name), Sheet Name(name))

**Beschreibung:** Exportiert eine Datentabelle in eine neue Google-Tabelle oder eine neue Tabelle in eine vorhandene Google-Tabellenkalkulation.

**JMP Version hinzugefügt:** 15

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

**Syntax:** Google Sheet Import(Email(address), Spreadsheet(url|id), &lt;Sheets("sheetName1", ... "sheetNameN")&gt;, &lt;Sheet Settings( Has Column Headers(Boolean), Data Starts on Row(n), Cell Range(range), Import Cell Colors(Boolean), Supress Empty Columns(Boolean))&gt;)

**Beschreibung:** Öffnet eine Google Tabellen-Datei.

**JMP Version hinzugefügt:** 15

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

**Syntax:** Gradient Function( zExpr, xName, yName, zLimits, zColor( color list or matrix ), &lt; &lt;&lt;XGrid( min, max, incr )&gt;, &lt; &lt;&lt;YGrid( min, max, incr )&gt;, &lt; &lt;&lt;Transparency( t )&gt; )

**Beschreibung:** Füllt den Graphen mit einem Farbverlauf zwischen zwei Farben aus. Das Argument zExpr ist eine Funktion der beiden von xName und yName angegebenen Variablen. Der Vektor zLimits gibt den Wertebereich für zExpr an. Das Argument zColor ist ein Vektor oder eine Liste, der/die die beiden Farben angibt, die vermischt werden, um den Farbverlauf zu erstellen. Transparency ist ein einzelner Wert, der auf das gesamte Raster angewendet wird.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Graph Box( props, script )

**Beschreibung:** Gibt ein Anzeigefeld mit einem Graphen mit Achsen zurück. Benannte Argumente können sein: title(„Titel“), XScale(niedrig,hoch), YScale(niedrig,hoch), FrameSize(h,v), XName(„x“), yName(„y“), DoubleBuffer und SuppressAxes.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Graph 3D Box()

**Beschreibung:** (Experimentelles Feature) Gibt ein Anzeigefeld mit 3D-Inhalt zurück, das zusammen mit anderen Anzeigefeldern zur Erstellung von benutzerdefinierten Berichten verwendet werden kann.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Graph Box( props, script )

**Beschreibung:** Gibt ein Anzeigefeld mit einem Graphen mit Achsen zurück. Benannte Argumente können sein: title(„Titel“), XScale(niedrig,hoch), YScale(niedrig,hoch), FrameSize(h,v), XName(„x“), yName(„y“), DoubleBuffer und SuppressAxes.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** z = x &gt; y &gt; ... ; z = Greater( x, y, ... )

**Beschreibung:** Gibt 1 zurück, wenn jedes Argument größer als das nächste Argument ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

3 > 2 > 1;

```

### Greater or Equal

**Syntax:** z = x &gt;= y &gt;= ... ; z = Greater or Equal( x, y, ... )

**Beschreibung:** Gibt 1 zurück, wenn jedes Argument größer oder gleich dem nächsten Argument ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

3 >= 2 >= 2;

```

### Gzip Compress

**Syntax:** blob = Gzip Compress( blob )

**Beschreibung:** Komprimiert einen Blob von Daten in einen GZip-Blob.

**JMP Version hinzugefügt:** 14

```jsl

Gzip Compress(
	Char To Blob( "random data does not usually compress well and may get larger" )
);

```

### Gzip Uncompress

**Syntax:** blob = Gzip Uncompress( blob )

**Beschreibung:** Dekomprimiert einen Blob von Gzip-Daten in einen Blob.

**JMP Version hinzugefügt:** 14

```jsl

Gzip Uncompress(/*typically this data might come from GzipCompress() but might also come from a .gz file using loadTextFile with the blob option*/
	Char To Blob(
		"~1F~8B~08~00~00~00~00~00~00~0A~0D~CA~C1~0D~00~21~08~04~C0V~B6~B5~CDA~FC~80~5C~00c~EC^~E7=~C9)~E1~106~21~A1~85~19~8DU~8Bf~07_~F8~9FZ~85~ADfx~13~CE~83~A1~0Dc~0E~CD~0B~94*~16~1E=~00~00~00",
		"ascii~hex"
	)
);

```

### H Center Box

**Syntax:** y = H Center Box( &lt;childbox&gt; )

**Beschreibung:** Gibt ein Anzeigefeld zurück mit dem Argument des untergeordneten Anzeigefelds childbox zentriert in dem horizontalen Raum, der von der maximalen Größe dieses untergeordneten Felds und allen anderen gleichgestellten Feldern des zentralen Felds definiert wird.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = H Direct Product( A, B )

**Beschreibung:** Gibt das horizontale direkte Produkt zurück, das das direkte Produkt von jeder Zeile der Matrizen A und B ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** H Line( y ); H Line( x1, x2, y )

**Beschreibung:** Zeichnet eine horizontale Linie bei y, von x1 bis x2 oder über den gesamten Rahmen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 2 );
		H Line( 10, 50, 20 );
	)
);

```

### H List Box

**Syntax:** y = H List Box( &lt;Align( center|bottom )&gt;, displayBox, ... )

**Beschreibung:** Erzeugt ein Anzeigefeld, das die Anzeigefelder der Argumente in einem horizontalen Layout anordnet. Die Meldung „<<Halten“ teilt dem Blatt mit, dass ihm die Berichte gehören müssen, aus denen Auszüge erstellt werden. Das optionale Argument Align ermöglicht die Ausrichtung bottom oder center des Inhalts im Anzeigefeld.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Outline Box( "Picker", H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ) )
);

```

### H Scroll Box

**Syntax:** y = H Scroll Box( &lt;Size( x )&gt;, displayBox )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das ein größeres untergeordnetes Feld mittels horizontaler Bildlaufleiste positioniert.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = H Sheet Box( &lt;&lt;Hold( rpt ), displayBox, ... )

**Beschreibung:** Erzeugt ein Anzeigefeld, das die Anzeigefelder der Argumente in einem horizontalen Layout anordnet. Die Meldung „<<Halten“ teilt dem Blatt mit, dass ihm die Berichte gehören müssen, aus denen Auszüge erstellt werden. Das optionale Argument Align ermöglicht die Ausrichtung right oder center des Inhalts im Anzeigefeld.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** h = H Size()

**Beschreibung:** Gibt die horizontale Größe des Grafikrahmens in Pixel zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( H Size() / 20 );
		Line( [10 30 90], [88 22 44] );
	)
);

```

### H Splitter Box

**Syntax:** y = H Splitter Box( &lt;Size(x,y)&gt;, displayBox, ... )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das andere Anzeigefelder mit interaktiver Steuerung der Größen horizontal anordnet. Die Größen untergeordneter Elemente werden als Anteil der Breite oder Höhe des Splitter Box angegeben. Das optionale Argument Size wird nur für das oberste Fensterbereichsfeld verwendet; Felder auf unteren Ebenen erhalten die gleiche Größe wie alle anderen untergeordneten Felder.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Hadamard( n, &lt;normalize = 0&gt; )

**Beschreibung:** Erstellt eine Hadamard-Matrix der Ordnung n.

**JMP Version hinzugefügt:** 15

```jsl

Show( Hadamard( 12 ), Hadamard( 12, 1 ) );

```

### Handle

**Syntax:** Handle( xPos, yPos, dragScript, &lt;mouseUpScript&gt; )

**Beschreibung:** Zeichnet ein quadratisches Symbol an den von xPos und yPos angegebenen Koordinaten und wiederholt die Auswertung des Ausdrucks dragScript, wenn die Maustaste auf dem Symbol gedrückt wird. Vor der Ausführung des Skripts werden die globalen Variablen x und y auf den Mauswert gesetzt und anschließend auf den ursprünglichen Wert zurückgesetzt. Der Ausdruck mouseUpScript wird nach dem Loslassen der Maustaste ausgeführt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Head( x )

**Beschreibung:** Gibt den Kopf des ausgewerteten Ausdrucks ohne dessen Argumente zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Head( Expr( Sum( a, b, c ) ) );

```

### Head Expr

**Syntax:** y = Head Expr( expr )

**Beschreibung:** Gibt den Kopf des Ausdrucks ohne dessen Argumente zurück. Diese Funktion ist veraltet. Bitte verwenden Sie stattdessen Head().

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

// See Example 2 for the deprecated Head Expr() equivalent
Head( Expr( Sum( a, b, c ) ) );

```

**Beispiel 2**

```jsl

// Deprecated
Head Expr( Sum( a, b, c ) );

```

### Head Name

**Syntax:** y = Head Name( x )

**Beschreibung:** Gibt den Kopf des ausgewerteten Ausdrucks als Zeichenkette ohne dessen Argumente zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Head Name( Expr( Sum( a, b, c ) ) );

```

### Head Name Expr

**Syntax:** y = Head Name Expr( expr )

**Beschreibung:** Gibt den Kopf des Ausdrucks als Zeichenkette ohne dessen Argumente zurück. Diese Funktion ist veraltet. Bitte verwenden Sie stattdessen Head Name().

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

// See Example 2 for the deprecated Head Name Expr() equivalent
Head Name( Expr( Sum( a, b, c ) ) );

```

**Beispiel 2**

```jsl

// Deprecated
Head Name Expr( Sum( a, b, c ) );

```

### Heat Color

**Syntax:** y = Heat Color( x ); y = Heat Color( x, &lt; &lt;&lt;theme&gt; )

**Beschreibung:** Gibt eine Farbe zurück, die einem Wert zwischen 0 und 1 entspricht. Standardschema ist „Blau nach Grau nach Rot“. Jedes vom Zellendiagramm unterstützte Farbschema wird hier unterstützt. Matrixargumente werden unterstützt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** h = Hex( value, &lt;"integer"&gt;|&lt;encoding="utf-8"&gt;|&lt;Base(number)&gt;,&lt;Pad To(number)&gt; )

**Beschreibung:** Gibt den hexadezimalen Text (oder den eines anderen Basiszahlensystems) entsprechend dem vorgegebenen Wert und der vorgegebenen Verschlüsselung zurück, was eine Zahl, eine Zeichenkette oder ein Blob sein kann. Wenn der Wert eine Zahl ist, wird die 64-Bit-Verschlüsselung nach IEEE 754 verwendet, sofern nicht eines der optionalen Argumente, integer oder Base, angegeben ist. Wenn Base angegeben ist, gibt die Funktion statt hexadezimal den Text zurück, der der angegebenen Zahl in dem jeweiligen Basiszahlensystem entspricht. Die Basis muss ein ganzzahliger Wert zwischen 2 und 36 (jeweils einschließlich) sein. Unterstützte Verschlüsselungen sind u.a. utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis und euc-jp.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" ) || " " ||
Hex( 11, Base( 2 ), Pad To( 8 ) );

```

### Hex To Blob

**Syntax:** blob = Hex To Blob( hex string )

**Beschreibung:** Erzeugt aus der angegebenen Zeichenkette von Hexadezimalcodes ein BLOB (Binary Large OBject), kann auch Leerzeichen, Kommas, Zeilenumbrüche und Zeilenvorschübe enthalten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Hex To Blob( "FF78CE" );

```

### Hex To Char

**Syntax:** s = Hex To Char( hextext, &lt;encoding="utf-8"&gt; )

**Beschreibung:** Gibt den Text zurück, der dem hexadezimalen Text entspricht, und verwendet die angegebene Codierung. Unterstützt werden u. a. die Codierungen utf-8, utf-16le, utf-16be, us-ascii, iso-8859-1, ascii~hex, shift_jis und euc-jp.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Hex To Char( "436166C3A9" ) || Hex To Char( "00430061006600E9", "utf-16be" );

```

### Hex To Number

**Syntax:** x = Hex To Number( hextext, &lt;Base(number)&gt; )

**Beschreibung:** Gibt die dem hexadezimalen Text (oder einem anderen Basiszahlensystem) entsprechende Zahl zurück. 16 Hex.-Ziffern werden als 64-Bit-Gleitpunktzahlen nach IEEE 754 umgewandelt; andernfalls wird die Eingabe als Hex-Ganzzahl behandelt. Wenn Base angegeben ist, wird der Text als Zeichenkette behandelt, die die Zahl zur jeweiligen Basis darstellt. Die Basis muss eine ganze Zahl zwischen 2 und 36 (jeweils einschließlich) sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Hex To Number( "11110000", Base( 2 ) );

```

### Hidden

**Syntax:** y = Hidden( &lt;rs&gt; ); Hidden( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Beschreibung:** Gibt die Komponente „ausgeblendet“ des angegebenen Zeileneigenschaftswerts zurück, 0 oder 1. Wenn „ausgeblendet“ als L-Wert verwendet wird, ändert es den ausgeblendeten Zustand der aktuellen (oder r-ten) Zeile in der aktuellen Datentabelle.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );
Row() = 3;
Hidden();

```

### Hidden State

**Syntax:** rs = Hidden State( x )

**Beschreibung:** Gibt einen Zeileneigenschaftswert zurück, wobei die Komponente „ausgeblendet“ auf den angegebenen Wert gesetzt ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );

```

### Hier Box

**Syntax:** y = Hier Box( text, Hier Box( ... ), Hier Box( ... ), ... )

**Beschreibung:** Gibt ein Anzeigefeld für Hierarchiebäume zurück. Das Argument text ist der Knotenname und kann ein Text Edit Box sein.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** {c1, c2, c3, c4, c5} = Hier Clust( x )

**Beschreibung:** Gibt den Verlauf des Clusterns für ein hierarchisches Clustern mittels Ward-Methode (ohne Standardisierung der Daten) zurück, dabei ist x eine Datenmatrix.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** b = Hist Seg([data], &lt;[freq data]&gt;,&lt;[weight data]&gt;, &lt;vertical=0|1&gt;, &lt;Row States()&gt;)

**Beschreibung:** Gibt ein Histogrammsegment zurück

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = HLS Color( h, l, s ); y = HLS Color( {h, l, s} )

**Beschreibung:** Gibt eine Farbzahl aus den Komponenten Farbton, Helligkeit und Sättigung zurück, alle zwischen 0 und 1.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Host is( "Mac"|"Windows"|"Bits32"|"Bits64"|"x86_64"|"arm64" )

**Beschreibung:** Gibt 1 zurück, wenn die JMP-Anwendung dem Argument entspricht, andernfalls 0. Die Argumente Windows und Mac prüfen das angegebene Betriebssystem, und die Argumente Bits32 und Bits64 prüfen die angegebene 32-Bit- oder 64-Bit-Anwendung. Es kann jeweils nur ein Argument geprüft werden.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** accum = Hough Line Transform( matrix, &lt;NAngle(number)&gt; &lt;NRadius(number)&gt; )

**Beschreibung:** Gibt die Hough-Transformation zum Erkennen von Linien in Bilddaten zurück.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

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

**Beispiel 2**

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

**Syntax:** hr = Hour( datetime, &lt;12&gt; )

**Beschreibung:** Gibt den Stundenanteil eines Datum/Uhrzeit-Werts zurück, im 12-Stundenmodus (12, 1 bis 11) oder im 24-Stundenmodus (0 bis 23).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Hour( Today() );

```

### HP Time

**Syntax:** t = HP Time()

**Beschreibung:** Gibt einen hochpräzisen Zeitwert in Mikrosekunden zurück. Nur nützlich im Verhältnis zu einem anderen hochpräzisen Wert Time(). Der Zeitwert stellt die Anzahl von Mikrosekunden seit dem Start der JMP-Sitzung dar.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

bt = HP Time();
Open( "$SAMPLE_DATA/Big Class.jmp" );
et = HP Time();
it = et - bt;
Show( it );

```

### Hue State

**Syntax:** rs = Hue State( x )

**Beschreibung:** Gibt einen Zeileneigenschaftswert zurück, wobei die Farbtonkomponente auf den angegebenen Wert gesetzt ist. Muss mit einem Wert Shade State() kombiniert werden, damit eine gültige Farbe erzeugt wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Hypergeometric Distribution

**Syntax:** cumprob = Hypergeometric Distribution( N, K, n, x, &lt;r&gt; )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine hypergeometrisch verteilte Zufallsvariable kleiner oder gleich x ist. Dabei ist N die Größe der Gesamtheit, K ist die Anzahl der Elemente in der betrachteten Kategorie, n ist die Stichprobengröße, x ist die Häufigkeit aus der betrachteten Kategorie und r ist das optionale Chancenverhältnis.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** prob = Hypergeometric Probability( N, K, n, x, &lt;r&gt; )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine hypergeometrisch verteilte Zufallsvariable gleich x ist. Dabei ist N die Größe der Gesamtheit, K ist die Anzahl der Elemente in der betrachteten Kategorie, n ist die Stichprobengröße, x ist die Häufigkeit aus der betrachteten Kategorie und r ist das optionale Chancenverhältnis.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Box = Icon Box( "Name" )

**Beschreibung:** Erzeugt ein Anzeigefeld mit einem Symbol, wobei das Argument name der Name eines JMP-Symbols oder ein Pfad zu einem Bild sein kann.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

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

**Beispiel 2**

```jsl

New Window( "Example with Path", ex = Icon Box( "$SAMPLE_IMAGES/pi.gif" ) );

```

### Identity

**Syntax:** y = Identity( n )

**Beschreibung:** Erstellt eine n x n Einheitsmatrix, d.h. mit Einsen (1) auf der Diagonalen und Nullen (0) an allen anderen Stellen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Identity( 2 );

```

### If

**Syntax:** y = If( condition1, result1, &lt;condition2, result2&gt;, ..., &lt;elseResult&gt; )

**Beschreibung:** Wertet das erste Paar jedes Argumentenpaares aus und gibt die Auswertung des Ausdrucks result zurück, der dem ersten Argument condition zugeordnet ist, das zu einem Ergebnis ungleich 0 ausgewertet wird. Die Argumente condition werden der Reihe nach ausgewertet. Wenn alle Argumente condition als 0 ausgewertet werden, wird das optionale elseResult ausgewertet und das Ergebnis zurückgegeben. Wenn kein elseResult angegeben ist und keine der Bedingungen wahr ist, wird ein fehlender Wert zurückgegeben. Wenn alle Argumente condition als fehlend ausgewertet werden, wird ein fehlender Wert zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

If( Random Uniform() < 0.5,
	"heads",
	"tails"
);

```

### If Box

**Syntax:** box = If Box( 0|1, displayBoxArgs )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das gegebenfalls die angegebenen Argumente des Anzeigefelds anzeigt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** seg = If Seg(&lt;state=0|1&gt;)

**Beschreibung:** Gibt ein Anzeigesegment zurück, das untergeordnete Anzeigesegmente ein- oder ausblendet.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) )
);

```

### IfMax

**Syntax:** y = IfMax( expr1, result1, expr2, result2, ..., &lt;allMissingResult&gt; )

**Beschreibung:** Wertet jeweils das erste der Argumentenpaare aus und gibt die Auswertung des Ergebnisausdrucks für das Maximum der Ausdrücke zurück. Liegen Gleichheiten vor, wird das erste Maximum zurückgegeben. Wenn alle Ausdrücke fehlen, wird bei gerader Anzahl der Argumente Leer und bei ungerader Anzahl der Argumente das letzte Argument zurückgegeben. Die Testausdrücke müssen mit einem numerischen Ergebnis ausgewertet werden, doch die Ergebnisausdrücke können beliebigen Typs sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

TomScore = 45;
JonScore = 47;
TimScore = 46;
highestScorer = IfMax( TomScore, "Tom", JonScore, "Jon", TimScore, "Tim", "Noone" );

```

### IfMin

**Syntax:** y = IfMin( expr1, result1, expr2, result2, ..., &lt;allMissingResult&gt; )

**Beschreibung:** Wertet jeweils das erste der Argumentenpaare aus und gibt die Auswertung des Ergebnisausdrucks für das Minimum der Ausdrücke zurück. Liegen Gleichheiten vor, wird das erste Minimum zurückgegeben. Wenn alle Ausdrücke fehlen, wird bei gerader Anzahl der Argumente Leer und bei ungerader Anzahl der Argumente das letzte Argument zurückgegeben. Die Testausdrücke müssen mit einem numerischen Ergebnis ausgewertet werden, doch die Ergebnisausdrücke können beliebigen Typs sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

TomScore = 45;
JonScore = 47;
TimScore = 46;
lowestScorer = IfMin( TomScore, "Tom", JonScore, "Jon", TimScore, "Tim", "Noone" );

```

### IfMZ

**Syntax:** y = IfMZ( condition1, result1, &lt;condition2, result2&gt;, ..., &lt;elseResult&gt; )

**Beschreibung:** Wertet das erste Paar jedes Argumentenpaares aus und gibt die Auswertung des Ausdrucks result zurück, der dem ersten Argument condition zugeordnet ist, das zu einem Ergebnis ungleich 0 ausgewertet wird. Die Argumente condition werden der Reihe nach ausgewertet. Wenn alle Argumente condition als 0 oder fehlend ausgewertet werden, wird das optionale elseResult ausgewertet und das Ergebnis zurückgegeben. Wenn kein elseResult angegeben ist und keine der Bedingungen wahr ist, wird ein fehlender Wert zurückgegeben. (IfMZ() ist äquivalent zu If(), wobei fehlende Werte für ausgewertete Argumente condition als 0 behandelt werden.)

**JMP Version hinzugefügt:** Vor Version 14

```jsl

x = 1;
Show( IfMZ( x == 1, 10, x == 2, 20, 30 ) );
x = .;
Show( IfMZ( x == 1, 10, x == 2, 20, 30 ) );
x = .;
Show( If( x == 1, 10, x == 2, 20, 30 ) );

```

### IGamma

**Syntax:** p = Gamma Distribution( q, &lt;alpha=1&gt;, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Gamma-verteilte Zufallsvariable kleiner als q ist. Das Argument alpha ist ein Formparameter und muss positiv sein. IGamma() ist ein Aliasname für Gamma Distribution(). Die Funktion Gamma Distribution() ist äquivalent zu Gamma(alpha,q)/Gamma(alpha).

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = In Days( &lt;x=1&gt; )

**Beschreibung:** Wandelt x von einer Anzahl von Tagen in die entsprechende Anzahl Sekunden um.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

In Days( 1.5 );

```

### In Hours

**Syntax:** y = In Hours( &lt;x=1&gt; )

**Beschreibung:** Wandelt x von einer Anzahl von Stunden in die entsprechende Anzahl Sekunden um.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

In Hours( 0.5 );

```

### In Minutes

**Syntax:** y = In Minutes( &lt;x=1&gt; )

**Beschreibung:** Wandelt x von einer Anzahl von Minuten in die entsprechende Anzahl Sekunden um.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

In Minutes( 1 );

```

### In Path

**Syntax:** b = In Path( x, y, pathMatrix|pathText )

**Beschreibung:** Gibt 1 zurück, wenn der Punkt (x,y) im vorgegebenen Pfad liegt, ansonsten wird 0 zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** b = In Polygon( x, y, xMatrix, &lt;yMatrix&gt; )

**Beschreibung:** Gibt 1 zurück, wenn der Punkt (x,y) im Polygon liegt, das von den Vektorargumenten definiert ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

In Polygon( 11, 22, [10 20 30], [10 30 20] );

```

### In Weeks

**Syntax:** y = In Weeks( &lt;x=1&gt; )

**Beschreibung:** Wandelt x von einer Anzahl von Wochen in die entsprechende Anzahl Sekunden um.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

In Weeks( 1 );

```

### In Years

**Syntax:** y = In Years( &lt;x=1&gt; )

**Beschreibung:** Wandelt x von einer Anzahl von Jahren in die entsprechende Anzahl Sekunden um.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

In Years( 1 );

```

### Include

**Syntax:** y = Include( filepath, &lt; &lt;&lt;Parse Only&gt;, &lt; &lt;&lt;New Context&gt;, &lt; &lt;&lt;Names Default to Here&gt; )

**Beschreibung:** Führt JSL in der angegebenen Datei aus. Wenn Parse Only angegeben ist, wird das Skript analysiert und nicht ausgeführt. Wenn New Context angegeben ist, wird die enthaltene JSL im eigenen eindeutigen Namensraum ausgeführt. Wenn sowohl das übergeordnete als auch das eingeschlossene Skript den globalen Namensraum verwenden, dann geben Sie New Context und Names Default to Here an, um Namenskonflikte zu vermeiden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Include( "$SAMPLE_SCRIPTS/chaosGame.jsl" );

```

### Include File List

**Syntax:** y = Include File List()

**Beschreibung:** Gibt eine Liste der eingebundenen Dateien zum Zeitpunkt der Ausführung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

y = Include File List();

```

### Index

**Syntax:** ii = n1::n2; ii = n1::n2::n3; ii = Index( n1, n2, &lt;n3=1&gt;)

**Beschreibung:** Gibt eine Zeilenmatrix zurück, die die Folge der Werte von n1 bis n2 in Inkrementen von n3 zurückgibt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

1 :: 10;

```

### Informat

**Syntax:** dt = In Format( s, formatString, &lt; &lt;&lt;Use Locale(b=1)&gt;, &lt; &lt;&lt;Restrict &gt; )dt = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )

**Beschreibung:** Analysiert eine Zeichenkette eines vorgegebenen Formats. Wenn das Format ein Datum/Uhrzeit-Format ist, werden der Wert als Ausdruck As Date() und das Datum im Format ttMonjjjj zurückgegeben. Das optionale Argument <<Restrict, das mit dem „Besten“ formatString verwendet wird, gestattet die Konvertierung nur mit ganzen Zahlen, Dezimalzahlen und wissenschaftlichen Formaten.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Informat( "07152000", "MMDDYYYY" );

```

**Beispiel 2**

```jsl

Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

**Beispiel 3**

```jsl

Informat( "86.8287° W", "Longitude DDD" );

```

**Beispiel 4**

```jsl

Informat( "123.45%", "Percent" );

```

**Beispiel 5**

```jsl

Show(
	Informat( "1.23e4", "Best" ),
	Informat( "1.23e4", "Best", <<Restrict ),
	Informat( "1989-10-04", "Best" ),
	Informat( "1989-10-04", "Best", <<Restrict )
);

```

### Inner Product BLAS

**Syntax:** y = Inner Product BLAS( A, B, ... )

**JMP Version hinzugefügt:** 17

```jsl

a = [1, 2, 3, -2, 0, -1, 0, 1, 1];
b = [4, 5, 6, -2, 0, -1, 0, 7, 2];
y = Inner Product BLAS( a, b );

```

### Insert

**Syntax:** z = Insert( x, y, &lt;i&gt; )

**Beschreibung:** Gibt eine Kopie der Liste x mit y an der i-ten Position oder ans Ende angehängt zurück, wenn das optionale Argument i nicht angegeben ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

z = {11, 22, 33};
z = Insert( z, 99, 2 );

```

### Insert Into

**Syntax:** Insert Into( x, y, &lt;i&gt; )

**Beschreibung:** Ändert eine Liste, ein assoziatives Array oder ein Anzeigefeld x, wobei y in die Sammlung eingefügt wird. Listen und Anzeigefelder unterstützen optional i, um die Position anzugeben, oder die Elemente werden angehängt, wenn die Position nicht angegeben ist. Beachten Sie, dass das Argument x eine Variable sein muss.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

ex = {11, 22, 33};
Insert Into( ex, 99 );
ex;

```

**Beispiel 2**

```jsl

ex = ["a" => 10, "b" => 3, => 0];
Insert Into( ex, "c", 12 );
ex;

```

**Beispiel 3**

```jsl

New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
Wait( 1 );
Insert Into( hlist, Button Box( "c" ) );

```

### Integrate

**Syntax:** y = Integrate( expr, varname, lowLimit, upLimit, &lt;&lt;Tolerance(1e-10), &lt;&lt;StoreInfo(list), &lt;&lt;StartingValue(val) )

**Beschreibung:** Integriert einen Ausdruck in Bezug auf einen skalaren Wert und verwendet die adaptive Quadraturmethode von Gander und Gautschi (2000). Wenn der mit varname angegebenen Variablen ein Wert zugewiesen ist oder das optionale Argument <<StartingValue() einen Startwert angibt, wird dieser Wert als typischer Wert zur Verbesserung der Genauigkeit des Integrals verwendet. Um unendliche Integrationsbereiche anzugeben, setzen Sie lowLimit, upLimit oder beide auf fehlend. Wenn <<StoreInfo() angegeben ist, enthält das Argument von <<StoreInfo() diagnostische Kennwerte der numerischen Integrationsroutine. Wenn <<Toleranz() angegeben ist, wird das Argument von <<Toleranz() als Toleranzniveau in der Auto-Integrationsfunktion verwendet, mit der das Integral ausgewertet wird. Kleinere Werte führen zu längeren Laufzeiten, jedoch präziseren Ergebnissen.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Integrate( Exp( -x ), x, 0, . );

```

**Beispiel 2**

```jsl

x = 100;
Integrate( Normal Density( x - 100 ), x, ., . );

```

### Interest Payment

**Syntax:** x = Interest Payment( rate, per, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Beschreibung:** Gibt die Zinszahlung für einen bestimmten Zeitraum einer Annuität basierend auf regelmäßigen, konstanten Zahlungen und einem konstanten Zinssatz zurück. Das Argument type ist 0, wenn Zahlungen am Ende des Zahlungszeitraums fällig sind, bzw. 1, wenn Zahlungen zu Beginn des Zeitraums fällig sind. Entspricht der IPMT-Funktion in Microsoft Excel.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Interest Rate

**Syntax:** x = Interest Rate( nper, pmt, pv, &lt;fv=0&gt;, &lt;type=0&gt;, &lt;guess=0.1&gt; )

**Beschreibung:** Gibt den Zinssatz pro Zeitraum für eine Annuität zurück. Das Argument type ist 0, wenn Zahlungen am Ende des Zahlungszeitraums fällig sind, bzw. 1, wenn Zahlungen zu Beginn des Zeitraums fällig sind. Entspricht der RATE-Funktion in Microsoft Excel.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Interest Rate( 30 * 12, Payment( .05 / 12, 30 * 12, 100000 ), 100000 );

```

### Internal Rate of Return

**Syntax:** x = Internal Rate of Return( values, &lt;guess=0.1&gt; );x = Internal Rate of Return( guess, value1, value2, &lt;value3, ...&gt; )

**Beschreibung:** Gibt den internen Ertragssatz für eine Folge von Zahlungsflüssen zurück, die von den Zahlen im Argument values dargestellt werden. Entspricht der IRR-Funktion in Microsoft Excel. Der zweite Prototyp der Funktion akzeptiert alle skalaren Argumente.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Internal Rate of Return( [-10000, 1000, 900, 950] );
Internal Rate of Return( .01, -10000, 1000, 900, 950 );

```

### Interpolate

**Syntax:** y = Interpolate(x|xmatrix|xlist, x1, y1, x2, y2);y = Interpolate(x | xmatrix | xlist, xmatrix, ymatrix);z = Interpolate({ x, y }, xvector, yvector, zmatrix)

**Beschreibung:** Sucht die xi-Argumente, zwischen denen sich x befindet, und interpoliert linear die entsprechenden yi-Argumente. Beachten Sie, dass die xi-Argumente geordnet angegeben werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

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

**Beispiel 2**

```jsl

Interpolate( 2.5, [1 2 3], [15, 20, 30] );

```

**Beispiel 3**

```jsl

Interpolate( {.5, .8}, [0 1], [0 1], [10 20, 12 18] );

```

**Beispiel 4**

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

**Syntax:** y = Inverse( x ); y = Inv( x )

**Beschreibung:** Gibt die inverse Matrix des Arguments x zurück, bei dem es such um eine quadratische, nichtsinguläre Matrix handeln muss.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Round( Inverse( [11 22, 33 44] ), 2 );

```

### Inv Update

**Syntax:** y = Inv Update( S, X, &lt;w=1&gt; )

**Beschreibung:** Gibt eine aktualisierte inverse Matrix zurück, wobei das erste Argument S eine symmetrische positiv definite Matrix mit derselben Anzahl Spalten wie X ist, das zweite Argument X eine Matrix mit den hinzuzufügenden bzw. zu löschenden Zeilen ist und das dritte Argument w festlegt, ob Zeilen hinzuzufügen oder zu löschen sind (1 = Zeilen hinzufügen, -1 Zeilen löschen). Diese Funktion wird ausgewertet als S-w*S*X`*Inv(I+w*X*S*X`)*X*S, wobei I die Einheitsmatrix ist und Inv(A) die inverse Matrix von A bedeutet.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Inverse( x ); y = Inv( x )

**Beschreibung:** Gibt die inverse Matrix des Arguments x zurück, bei dem es such um eine quadratische, nichtsinguläre Matrix handeln muss.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Round( Inverse( [11 22, 33 44] ), 2 );

```

### Invert Expr

**Syntax:** y = Invert Expr( expr, xname, yname )

**Beschreibung:** Invertiert das Ausdrucksargument expr, faltet dabei nach dem einzigen Vorkommen von xname auf.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Invert Expr( Sqrt( Log( x ) ), x, y );

```

### IRT Ability

**Syntax:** y = IRT Ability( Q1, ..., Qn, parmMatrix )

**Beschreibung:** Produziert Scores für die latente Variable in einem Modell der probabilistischen Testtheorie mit n binären Items und einer Matrix bekannter Parameter, angegeben von parmMatrix. Die Parametermatrix muss so viele Zeilen enthalten, wie das Modell Parameter enthält, und so viele Spalten, wie es Items in der Analyse gibt.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
obj = dt << Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5 ), Model( "Logistic 2PL" ) );
obj << Save Ability Formula;
Column( dt, N Cols( dt ) ) << Get Formula;

```

**Beispiel 2**

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

**Syntax:** y = Is Alt Key()

**Beschreibung:** Gibt 1 zurück, wenn die Alt-Taste gedrückt wird, andernfalls 0. Dient der Verwendung in grafischen Rückrufskripten. Auf dem Mac ist die Alt-Taste die Optionstaste.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Is Associative Array( x )

**Beschreibung:** Gibt 1 zurück, wenn das Argument x ein assoziatives Array ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Is Associative Array( [1 => 2] );

```

### Is Class

**Syntax:** isns = Is Class( class reference )

**Beschreibung:** Gibt 1 zurück, wenn das Argument class eine Klasse ist. Andernfalls wird 0 zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Is Command Key()

**Beschreibung:** Gibt 1 zurück, wenn die Befehlstaste gedrückt wird, andernfalls 0. Dient der Verwendung in grafischen Rückrufskripten.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Is Context Key()

**Beschreibung:** Gibt 1 zurück, wenn die Kontexttaste gedrückt wird, andernfalls 0. Dient der Verwendung in grafischen Rückrufskripten.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Is Control Key()

**Beschreibung:** Gibt 1 zurück, wenn die Steuerungstaste gedrückt wird, andernfalls 0. Dient der Verwendung in grafischen Rückrufskripten. Auf dem Mac ist die Steuerungstaste die Befehlstaste.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** rc = Is Directory( path )

**Beschreibung:** Festlegen, ob der vorgegebene Pfad ein Verzeichnis ist. Gibt 0 zurück, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

rc0 = Is Directory( "$SAMPLE_DATA" );
rc1 = Is Directory( "$SAMPLE_DATA/Big Class.jmp" );
Char( rc0 ) || " " || Char( rc1 );/* 1 0 */

```

### Is Directory Writable

**Syntax:** rc = Is Directory Writable( path )

**Beschreibung:** Festlegen, ob der vorgegebene Verzeichnispfad schreibbar ist. Gibt 0 zurück, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Is Directory Writable( "$SAMPLE_DATA" );

```

### Is Empty

**Syntax:** y = Is Empty( name )

**Beschreibung:** Gibt 1 zurück, wenn die Variable nicht definiert ist, oder behält den Wert Empty() bei.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Is Empty( x );

```

**Beispiel 2**

```jsl

x = Empty();
Is Empty( x );

```

**Beispiel 3**

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

**Beschreibung:** Gibt 1 zurück, wenn das Argument x ein Ausdruck ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Is Expr( Expr( x ) );

```

### Is File

**Syntax:** rc = Is File( path )

**Beschreibung:** Festlegen, ob der vorgegebene Pfad eine Datei ist. Gibt 0 zurück, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

rc0 = Is File( "$SAMPLE_DATA" );
rc1 = Is File( "$SAMPLE_DATA/Big Class.jmp" );
Char( rc0 ) || " " || Char( rc1 );/* 0 1 */

```

### Is File Writable

**Syntax:** rc = Is File Writable( path )

**Beschreibung:** Festlegen, ob der vorgegebene Dateipfad schreibbar ist. Gibt 0 zurück, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Is File Writable( "$SAMPLE_DATA/Big Class.jmp" );

```

### Is JMP Live URL Enabled

**Syntax:** Is JMP Live URL Enabled(url)

**Beschreibung:** Legt fest, ob die angegebene URL in dieser JMP-Sitzung verwendet werden kann. URLs können mit dem Skript jmpStartAdmin.jsl aktiviert und/oder deaktiviert werden. Dadurch wird nicht festgelegt, ob es sich um eine gültige URL handelt, und auch nicht, ob der Benutzer sich anmelden kann. Es wird nur festgelegt, ob die URL von JMP gesperrt ist.

**JMP Version hinzugefügt:** 15

```jsl


url = "http://public.jmp.com";
Show( Is JMP Live URL Enabled( url ) );

```

### Is Leap Year

**Syntax:** v = Is Leap Year(year)

**Beschreibung:** Zurückgeben, ob ein vorgegebenes Jahr ein Schaltjahr ist.

**JMP Version hinzugefügt:** 15

```jsl

v = Is Leap Year( 2016 );

```

### Is List

**Syntax:** y = Is List( x )

**Beschreibung:** Gibt 1 zurück, wenn das Argument x eine Liste ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Is List( {1, 2, 3} );

```

### Is Log Open

**Syntax:** Is Log Open()

**Beschreibung:** Ergebnis zurückgeben, um anzuzeigen, ob das Log-Fenster geöffnet ist

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

If( Is Log Open(),
	Close Log()
);

```

**Beispiel 2**

```jsl

If( !Is Log Open(),
	Open Log()
);

```

### Is Matrix

**Syntax:** y = Is Matrix( x )

**Beschreibung:** Gibt 1 zurück, wenn das Argument eine Matrix ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Is Matrix( [11 22 33] );

```

### Is Missing

**Syntax:** y = Is Missing( x )

**Beschreibung:** Gibt 1 zurück, wenn das Argument x ein fehlender Wert ist, andernfalls wird 0 zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Is Missing( . );

```

### Is Name

**Syntax:** y = Is Name( x )

**Beschreibung:** Gibt 1 zurück, wenn das Argument x ein Name ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Is Name( Name Expr( n ) );

```

### Is Namespace

**Syntax:** isns = Is Namespace( namespace reference )

**Beschreibung:** Gibt 1 zurück, wenn das Argument namespace ein Namensraum ist, andernfalls wird 0 zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

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

**Beschreibung:** Gibt 1 zurück, wenn das Argument x eine Zahl ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Is Number( 213 );

```

### Is Option Key

**Syntax:** y = Is Option Key()

**Beschreibung:** Gibt 1 zurück, wenn die Optionstaste gedrückt wird, andernfalls 0. Dient der Verwendung in grafischen Rückrufskripten.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** x = Is Same Color( color1, color2, ... )

**Beschreibung:** Vergleicht Farben auf Gleichheit.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

Is Same Color( "black", 0 );

```

**Beispiel 2**

```jsl

Is Same Color( "red", "green", "blue" );

```

**Beispiel 3**

```jsl

Is Same Color( "red", To Color Space( "hls", "red" ) );

```

**Beispiel 4**

```jsl

Is Same Color( To Color Space( "LUV", "red" ), "red" );

```

### Is Scriptable

**Syntax:** tf = Is Scriptable( x )

**Beschreibung:** Gibt 1 zurück, wenn das Argument x ein skriptfähiges Objekt ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Is Scriptable( Bivariate( Y( :weight ), X( :height ) ) );

```

### Is Shift Key

**Syntax:** y = Is Shift Key()

**Beschreibung:** Gibt 1 zurück, wenn die Umschalttaste gedrückt wird, andernfalls 0. Dient der Verwendung in grafischen Rückrufskripten.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Is String( x )

**Beschreibung:** Gibt 1 zurück, wenn das Argument x eine Zeichenkette ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Is String( "abc" );

```

### ISO Year

**Syntax:** yr = ISO Year( datetime )

**Beschreibung:** Gibt das ISO-Jahr des Datum/Uhrzeit-Werts zurück. ISO-Jahre entsprechen den ISO-Wochen. Sie beginnen am Montag der ersten Woche mit mindestens vier Tagen.

**JMP Version hinzugefügt:** 16

```jsl

ISO Year( Today() );

```

### Item

**Syntax:** w = Item( n|[first last], s, &lt;delim&gt;, &lt;Unmatched(result string)&gt;, &lt;Include Boundary Delimiters(0|1)&gt;)

**Beschreibung:** Gibt das n-te Element des Arguments s zurück, wobei Elemente die (möglicherweise leere) Teilzeichenketten sind, die durch genau eines der im Argument delim angegebenen Zeichen getrennt werden. Wenn delim fehlt, wird das Leerzeichen verwendet. Wenn delim die leere Zeichenkette ist, wird jedes Zeichen als eigenes Element behandelt.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Item( 5, "http://www.jmp.com", ":/." );

```

**Beispiel 2**

```jsl

Item( [2 -1], "This is a sentence" );

```

**Beispiel 3**

```jsl

Item( 4, "Apple+Banana Tree,,Pear,,Peach,,Grape", Get Punctuation Characters() );

```

**Beispiel 4**

```jsl

Item( 5, "a b c d", Unmatched( "None" ) );

```

**Beispiel 5**

```jsl

Item( 2, "abcd", "" );

```

**Beispiel 6**

```jsl

Item( 2, ",abcd", ",", Include Boundary Delimiters );

```

### Items

**Syntax:** wl = Items(&lt;[first last]&gt;, s, &lt;delim&gt;, &lt;Include Boundary Delimiters(0|1)&gt;)

**Beschreibung:** Gibt eine Liste von (möglicherweise leeren) Teilzeichenketten zurück, die durch genau ein beliebiges der Zeichen im Argument delim getrennt werden. Wenn delim fehlt, wird das Leerzeichen verwendet. Wenn delim die leere Zeichenkette ist, wird jedes Zeichen als eigenes Element behandelt.

**JMP Version hinzugefügt:** 15

**Beispiel 1**

```jsl

Eval List( {Items( "http://www.jmp.com", ":/." ), Items( "hello", "" )} );

```

**Beispiel 2**

```jsl

Items( ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Beispiel 3**

```jsl

Items(
	",Apple,Banana Tree,Peach",
	Get Punctuation Characters(),
	Include Boundary Delimiters
);

```

**Beispiel 4**

```jsl

Items( [1 2], ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### J

**Syntax:** y = J( nr, &lt;nc&gt;, &lt;v&gt; ); y = J( nr, nc ); y = J( n )

**Beschreibung:** Erstellt eine Matrix (nr x nc) von Werten, die vom dritten Argument bestimmt werden. Der Standardwert des zweiten Arguments ist gleich dem ersten Argument. Der Standardwert des dritten Arguments ist 1. Das dritte Argument kann jedoch eine Zahl, ein Variablenname einer Zahl oder JSL-Code sein. Wenn das dritte Argument Code ist, wird der Code ausgewertet und der Rückgabewert wird jedem Element in der Matrix zugewiesen, Element für Element, Zeile für Zeile.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = JMP Product Name()

**Beschreibung:** Gibt "Standard" oder "Pro" basierend auf der Version des Produkts zurück, das lizenziert wurde.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

JMP Product Name();

```

### JMP Version

**Syntax:** y = JMP Version()

**Beschreibung:** Gibt die JMP version (release.revision{.fix}) zurück; nicht verfügbar vor JMP 6.0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

JMP Version();

```

### Johnson Sb Density

**Syntax:** y = Johnson Sb Density( q, gamma, delta, theta, sigma )

**Beschreibung:** Gibt die Dichte einer Johnson-Sb-Verteilung für q zurück, wobei q zwischen theta und theta + sigmaliegt. delta>0 und gamma zwischen -∞ und +∞ sind Formparameter, sigma>0 ist ein Lageparameter und theta zwischen -∞ und +∞ ist ein Schwellenparameter. Hinweis: theta ist der untere Endpunkt der Verteilung und sigma ist die Breite des Trägers der Verteilung.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Johnson Sb Distribution( q, gamma, delta, theta, sigma )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Johnson-Sb-verteilte Zufallsvariable kleiner als q ist. (Hinweis: Die Parameterbeschreibungen finden Sie bei der Funktion Johnson Sb Density().)

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Johnson Sb Quantile( p, gamma, delta, theta, sigma )

**Beschreibung:** Gibt das Quantil einer Johnson-Sb-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre. (Hinweis: p ist der erste Parameter. Die Parameterbeschreibungen finden Sie bei der Funktion Johnson Sb Density().)

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Johnson Sb Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Sl Density

**Syntax:** y = Johnson Sl Density( q, gamma, delta, theta, &lt;sigma=1&gt; )

**Beschreibung:** Gibt die Dichte einer Johnson-Sl-Verteilung für q zurück, wobei q zwischen theta und +∞ liegt. delta>0 und gamma zwischen -∞ und +∞ sind Formparameter, sigma gleich +1 oder -1 ist ein Lageparameter und theta zwischen -∞ und +∞ ist ein Schwellenparameter. Hinweis: Wenn sigma = 1, ist theta die untere Grenze der Verteilung, und wenn sigma=-1, ist theta die obere Grenze. Und: Positives sigma bedeutet positive Schiefe und negatives sigma bedeutet negative Schiefe.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Johnson Sl Distribution( q, gamma, delta, theta, &lt;sigma=1&gt; )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Johnson-Sl-verteilte Zufallsvariable kleiner als q ist. (Hinweis: Die Parameterbeschreibungen finden Sie bei der Funktion Johnson Sl Density().)

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Johnson Sl Quantile( p, gamma, delta, theta, &lt;sigma=1&gt; )

**Beschreibung:** Gibt das Quantil einer Johnson-Sl-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre. (Hinweis: p ist der erste Parameter. Die Parameterbeschreibungen finden Sie bei der Funktion Johnson Sl Density().)

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Johnson Sl Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Johnson Su Density

**Syntax:** y = Johnson Su Density( q, gamma, delta, theta, sigma )

**Beschreibung:** Gibt die Dichte einer Johnson-Sb-Verteilung für q zurück, wobei q zwischen -∞ und +∞ liegt. delta>0 und gamma zwischen -∞ und +∞ sind Formparameter, sigma>0 ist ein Lageparameter und theta zwischen -∞ und +∞ ist ein Schwellenparameter.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Johnson Su Distribution( q, gamma, delta, theta, sigma )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Johnson-Su-verteilte Zufallsvariable kleiner als q ist. (Hinweis: Die Parameterbeschreibungen finden Sie bei der Funktion Johnson Su Density().)

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Johnson Su Quantile( p, gamma, delta, theta, sigma )

**Beschreibung:** Gibt das Quantil einer Johnson-Su-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre. (Hinweis: p ist der erste Parameter. Die Parameterbeschreibungen finden Sie bei der Funktion Johnson Su Density().)

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Johnson Su Quantile( 0.5, 0.5, 1, 1, 1 );

```

### Journal Box

**Syntax:** y = Journal Box( journalText )

**Beschreibung:** Erstellt ein Anzeigefeld aus Anweisungen, die üblicherweise in einem Journal gespeichert werden.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = JSL Encrypted(script)

**Beschreibung:** Bettet ein verschlüsseltes Skript in ein anderes Skript ein. Sie erstellen ein verschlüsseltes Skript durch Auswahl von „Bearbeiten > Skript verschlüsseln“ im Hauptmenü eines Skripteditors. Geben Sie Ihre Kennwörter ein und der verschlüsselte Text wird in einem neuen Fenster angezeigt. Kopieren Sie diesen Text in einen JSL-Befehl Encrypted(""), um das verschlüsselte Skript in ein anderes Skript einzubetten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

JSL Encrypted(
	"//-e6.0.2\!NWUSXEHSB?SRAMXPSY?;KDGMNGPQFZP;?><JLEXCQZYIGWSI@<FOPBLDKJ?HEUPTOGSZDYWFDMB;NEVB;HFP=VQ@N;LCVQPWRHIXEIPFKGO=H?DWS?KFQRIPBEPSAE<AM?YG=C@VFRENPEW>@;ND=JA<?=WOZZOG>FZBZKZLMFOX?YF@LWA=B=SJXDGVW>VYLBRJT<I<MFE<Q??QCUOZM?RY>RXLBJRH=BH<EGVSEMABSS<IE=CAPID;XM;;?XIU<FA=SCE<CB;AGOCZWHZXK;*"
);

```

### JSL Quote

**Syntax:** y = JSL Quote(script)

**Beschreibung:** JSL-Skript in einer Variablen speichern, einschließlich aller Kommentare und Formatierungen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** l = JSON Literal( string )

**Beschreibung:** Gibt einen gültigen Booleschen JSON-Wert oder null konstanten Wert zurück, abhängig von der Spezifikation des Parameters.

**JMP Version hinzugefügt:** 14

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

**Syntax:** dt = JSON To Data Table( jsonstring, &lt;Invisible( boolean ) | Private( boolean )&gt;, &lt;Guess(Stack(Boolean)|"Tall"|"Wide")&gt;, &lt;JSON Settings(...)&gt; )

**Beschreibung:** JSON-Text in eine JMP-Datentabelle umwandeln

**JMP Version hinzugefügt:** 14

```jsl

dt = JSON To Data Table(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);

```

### JSON To List

**Syntax:** l = JSON To List( jsonstring )

**Beschreibung:** JSON-Text in eine JSL-Liste umwandeln, die die von den JSON-Daten angegebene Struktur darstellt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

l = JSON To List(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);
Show( l );

```

### JSS Context Box

**Syntax:** y = JSS Context Box( displayBox )

**JMP Version hinzugefügt:** 19

```jsl

New Window( "JSS Context",
	JSS Context Box(
		V List Box(
			Panel Box( "Panel", Text Box( "Hi" ), Button Box( "Press Me" ), ),
			Button Box( "Outside" ),

		),
		<<Set JSS(
			Expr(
				Type( TextBox ) << Background Color( "Red" );
				Type( ButtonBox ) << Background Color( "Green" );
				Descend( Type( PanelBox ), Type( ButtonBox ) ) << Background Color( "Blue" );
			)
		)
	)
);

```

### KDE

**Syntax:** {Estimates, Bins, Counts, ActualBandwidth, Error} = KDE( Vector, &lt;&lt;weights, &lt;&lt;bandwidth( 0 ), &lt;&lt;bandwidth scale( 1 ), &lt;&lt;bandwidth selection( 0 ), &lt;&lt;kernel )

**Beschreibung:** Gibt einen Schätzwert der Kerndichte mit automatischer Bandbreitenauswahl zurück. Das optionale Argument weights muss ein Vektor mit derselben Länge wie das Argument Vector sein. Das optionale Argument bandwidth muss eine nicht negative reelle Zahl oder Null sein, wodurch die Verwendung des für die Bandbreite ausgewählten Werts bandwidth selection eingestellt wird. Das optionale Argument bandwidth scale muss eine positive reelle Zahl sein. Das optionale Argument bandwidth selection muss 0, 1, 2 oder 3 sein, für die jeweilige Auswahl von Sheather und Jones, normale Referenz, Faustregel nach Silverman oder Oversmoother. Das optionale Argument kernel akzeptiert die Werte 0, 1, 2, 3 oder 4, für die jeweilige Auswahl von Gauß, Epanechnikov, Biweight, Dreieck oder Rechteck.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** tab = KDTable( [ 1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6 ] )

**Beschreibung:** Gibt eine Tabelle zum effizienten Suchen naher Nachbarn zurück. Die Matrixargumente sind k-dimensionale Punkte. Es gibt keine Grenze für die Anzahl der Dimensionen oder Punkte.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

tab = KDTable( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tab << K nearest rows( 2, 1 );
"2 nearest rows to row 1 are " || Char( rows );

```

### Labeled

**Syntax:** y = Labeled( &lt;rs&gt; ); Labeled( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Beschreibung:** Gibt die Komponente „Beschriftung“ des angegebenen Zeileneigenschaftswerts zurück, 0 oder 1. Wenn „Beschriftung“ als L-Wert verwendet wird, ändert es den ausgeblendeten Zustand der aktuellen (oder r-ten) Zeile in der aktuellen Datentabelle.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );
Row() = 3;
Labeled();

```

### Labeled State

**Syntax:** rs = Labeled State( x )

**Beschreibung:** Gibt einen Zeileneigenschaftswert zurück, wobei die Komponente „Beschriftung“ auf den angegebenen Wert gesetzt ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );

```

### Lag

**Syntax:** y = Lag( &lt;x&gt;, &lt;n=1&gt; )

**Beschreibung:** Gibt den Wert des Arguments x zurück, wobei für die aktuelle Zeile Row() - n festgelegt wird. Wegen der Abhängigkeit von Row() ist Lag() hauptsächlich in Spaltenformeln nützlich.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
Lag( :height, 2 );

```

### Last Modification Date

**Syntax:** date = Last Modification Date( path )

**Beschreibung:** Gibt das letzte Änderungsdatum einer Datei oder eines Verzeichnisses zurück. Gibt einen Fehler aus, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Format( Last Modification Date( "$SAMPLE_DATA/Big Class.jmp" ), "ddmonyyyy:h:m:s" );

```

### Least Squares Solve

**Syntax:** {Beta, VarBeta} = Least Squares Solve(y, X, &lt;&lt;noIntercept, &lt;&lt;weights(optionalWeightVector), &lt;&lt;method("Sweep"|"GInv"))

**Beschreibung:** Gibt eine Liste zurück, die einen Vektor der Schätzwerte, Beta = Inverse(X&apos;X)X&apos;y und die geschätzte Varianzmatrix von Beta enthält. Das optionale Argument <<noIntercept gibt ein Modell ohne Konstante an. Das optionale Argument <<weights gibt einen Vektor der Gewichtungen an, um gewichtete kleinste Quadrate durchzuführen. Das optionale Argument <<method ermöglicht Ihnen, zwischen der Standardmethode Sweep und einer verallgemeinerten inversen Methode ("GInv") zum Lösen der Normalgleichungen zu wählen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

/*Simple Linear Regression*/
y = [3, 5, 7, 5];
X = [1, 2, 3, 4];
{Beta, VarBeta} = Least Squares Solve( y, X );

```

### Left

**Syntax:** sub = Left( s, n, &lt;filler&gt; )

**Beschreibung:** Gibt eine abgeschnittene oder aufgefüllte Version der ursprünglichen Zeichenkette oder Liste s zurück. Das Ergebnis enthält die linken n Zeichen oder Listenelemente, rechts aufgefüllt mit dem Füllzeichen filler, wenn die Länge von s kleiner als n ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

exurl = "http://www.jmp.com";
Left( exurl, Contains( exurl, ":" ) - 1 );

```

### Length

**Syntax:** l = Length( x )

**Beschreibung:** Gibt die Länge der vorgegebenen Zeichenkette (in Zeichen), Liste (in Elementen), des vorgegebenen assoziativen Arrays (in Anzahl Schlüsseln), Blobs (in Bytes), der vorgegebenen Matrix (in Elementen) oder des vorgegebenen Namensraums/der vorgegebenen Klasse (in Anzahl von Funktionen und Variablen) zurück.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Length( "Café" );

```

**Beispiel 2**

```jsl

Length( {1, 2 + 3, [11 22]} );

```

**Beispiel 3**

```jsl

Length( ["a" => 10, "b" => 3, => 0] );

```

**Beispiel 4**

```jsl

Length( Char To Blob( "Café" ) );

```

### LenthPSE

**Syntax:** y = LenthPSE( x )

**Beschreibung:** Gibt Lenths Pseudo-Standardfehler der Werte innerhalb eines einzelnen Vektors x zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {LenthPSE( [1, 2, 3, 4, 5] ), Std Dev( [1, 2, 3, 4, 5] )} );

```

### Less

**Syntax:** z = x &lt; y &lt; ... ; z = Less( x, y, ... )

**Beschreibung:** Gibt 1 zurück, wenn jedes Argument kleiner als das nächste Argument ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

[1 1 1] < [0 1 2];

```

### Less LessEqual

**Syntax:** z = x &lt; y &lt;= ... ; z = Less LessEqual( x, y, ... )

**Beschreibung:** Gibt 1 zurück, wenn das erste Argument kleiner als das zweite Argument ist und jedes Argument außer dem ersten kleiner oder gleich dem nächsten Argument ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

1 < 2 <= 2;

```

### Less or Equal

**Syntax:** z = x &lt;= y &lt;= ... ; z = Less or Equal( x, y, ... )

**Beschreibung:** Gibt 1 zurück, wenn jedes Argument kleiner oder gleich dem nächsten Argument ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

1 <= 2 <= 2;

```

### LessEqual Less

**Syntax:** z = x &lt;= y &lt; ... ; z = LessEqual Less( x, y, ... )

**Beschreibung:** Gibt 1 zurück, wenn das erste Argument kleiner oder gleich dem zweiten Argument ist und jedes Argument außer dem ersten kleiner als das nächste Argument ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

2 <= 2 < 3;

```

### LEV Density

**Syntax:** y = LEV Density( x, mu, sigma )

**Beschreibung:** Gibt die Dichte in x einer Verteilung des größten Extremwerts mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = LEV Distribution( x, mu, sigma )

**Beschreibung:** Gibt die Wahrscheinlichkeit in x einer Verteilung des größten Extremwerts mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = LEV Quantile( p, mu, sigma )

**Beschreibung:** Gibt das Quantil in p einer Verteilung des größten Extremwerts mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Level Color( i ); y = Level Color( i, n ); y = Level Color( i, n, &lt;theme&gt; ); y = Level Color( i, &lt;theme&gt; )

**Beschreibung:** Gibt eine Kategoriefarbe zurück, wobei i das Kategorieniveau, n die Anzahl der Kategorien (optional) und theme die Farbschemata im Kombinationsfeld „Wertfarbe“ im Dialogfeld „Spalteninfo“ sind. (Dabei ist „JMP-Standard“ das Standardschema.) Der Kategorieindex muss >= 1 und <= der Anzahl der im Aufruf angegebenen oder vom Farbschema festgelegten Kategorien sein. Wenn das zweite Argument ein Zeichen ist, ist es das Farbschema und n ist nicht angegeben.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = LGamma( x )

**Beschreibung:** Gibt den natürlichen Logarithmus der Gamma-Funktion von x zurück. Nützlich, wenn Gamma(x) für die direkte Verwendung zu groß ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

LGamma( 5 );

```

### Line

**Syntax:** Line( {x1, y1}, {x2, y2}, ..., &lt; &lt;&lt;Value Space( 0|1 ) &gt;, &lt; &lt;&lt;Smooth( tension, domain, min response, max response ) &gt; ); Line( xMatrix, yMatrix, &lt; &lt;&lt;Value Space(0 | 1) &gt;, &lt; &lt;&lt;Smooth( tension, domain, min response, max response ) &gt; )

**Beschreibung:** Zeichnet eine Linie oder verbundene Linien. Im Standardfall wird die Linie linear zwischen den Endpunkten gezeichnet. Wenn die Option Value Space festgelegt ist, folgt die Linie der von der zugrunde liegenden Achsenskala angegebenen Projektion. Wenn die Option Smooth festgelegt ist, werden die Verbindungen geglättet, eingeschränkt durch tension, domain dimension, min response und max response.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** ls = Line Seg(x values, y values, &lt;Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )&gt;)

**Beschreibung:** Gibt ein Anzeigesegment mit Verbindungslinien zwischen allen X- und Y-Werten zurück.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y, RowStates( dt ) ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

**Beispiel 3**

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

**Syntax:** Line Style( x )

**Beschreibung:** Legt den aktuellen Linienstil fest, zur Auswahl stehen: 0 (durchgezogen), 1 (gepunktet), 2 (gestrichelt), 3 (Strich-Punkt) oder 4 (Strich-Punkt-Punkt).

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** {Estimates, Std_Error, Diagnostics} = Linear Regression(y, X, &lt;&lt;noIntercept, &lt;&lt;printToLog, &lt;&lt;weight(WeightVector), &lt;&lt;freq(FrequencyVector)

**Beschreibung:** Passt eine lineare Regression für das angenommene Modell y = X * beta + error an. Das optionale Argument <<noIntercept gibt ein Modell ohne Konstante an. Das optionale Argument <<printToLog gibt an, dass eine Zusammenfassung der Anpassung im Logfenster dargestellt wird. Das optionale Argument weight gibt einen Vektor der Gewichtungen an, um gewichtete kleinste Quadrate durchzuführen, und das optionale Argument freq gibt einen Vektor der Häufigkeiten an. Gibt eine Liste mit Vektoren der Schätzwerte, einen Vektor der Standardfehler und eine Liste der Diagnose zurück. Die Liste der Diagnose enthält Vektoren der statistischen t- und p-Werte für die Schätzwerte sowie die r²- und korrigierten r²-Werte für die Regressionsanpassung.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

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

**Beispiel 2**

```jsl

/*Model: y = beta_1*x + beta_2*x^2 + error*/
y = [3, 5, 7, 5];
X = [1 1, 2 4, 3 9, 4 16];
{Estimates, Std_Error, Diagnostics} = Linear Regression( y, X, <<noIntercept, <<printToLog );

```

**Beispiel 3**

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

**Syntax:** ls = Lines Seg([x1 y1 x2 y2,...])

**Beschreibung:** Gibt ein Anzeigesegment mit einer Sequenz aus Liniensegmenten für die übergebenen X- und Y-Werte zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Lines Seg" ));

```

### Lineup Box

**Syntax:** y = Lineup Box( &lt;NCol( nc )&gt;, &lt;Spacing( pixels, &lt;vspace&gt; )&gt;, displayBoxArgs, ... )

**Beschreibung:** Erzeugt ein Anzeigefeld für die Anzeige von in Spalten ausgerichteten Feldern nc. Das optionale Argument Spacing gibt den horizontalen und vertikalen Abstand um die Anzeigefelder herum an. Wird das Argument vspace verwendet, ist vspace der vertikale Abstand und pixels ist der horizontale Abstand.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Lineup Box( &lt;Widths( {width1, width2, ...} )&gt;, displayBoxArgs, ... )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das die Spaltenbreiten der darin enthaltenen Ausrichtungsfelder festlegt.

**JMP Version hinzugefügt:** 16

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

**Syntax:** y = {a, b, ...}; y = List( a, b, ... )

**Beschreibung:** Erstellt eine Liste von Elementen, ohne sie auszuwerten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

{1, 2 + 3, [11 22]};

```

### List Box

**Syntax:** y = List Box( {item, ...}, &lt;width( pixels )&gt;, &lt;maxSelected( 9999 )&gt;, &lt;nlines( 12 )&gt;, &lt;script&gt; )

**Beschreibung:** Erzeugt ein Anzeigefeld für die Anzeige eines Listenfelds mit Auswahlelementen. Wenn item selbst eine Liste mit zwei Elementen ist, die den Elementnamen und eine Zeichenkette enthält, die einen Modellierungstyp oder eine Sortierreihenfolge angibt, z. B. "Ordinal" oder "Ascending", wird das entsprechende Symbol neben dem jeweiligen Element im Listenfeld angezeigt.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

New Window( "Example", b = List Box( {"single", "double", "triple"}, nlines( 10 ) ) );

```

**Beispiel 2**

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

**Syntax:** y = Ln( x )

**Beschreibung:** Gibt den natürlichen Logarithmus von x zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Ln( Exp( 2 ) );

```

### Load DLL

**Syntax:** dll = Load DLL( file path | Base Name( file path without extension ), &lt; AutoDeclare( bool | Quiet | Verbose) | Quiet | Verbose )&gt; )

**Beschreibung:** Lädt eine DLL, auf die der angegebene Pfad zeigt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** text = Load Text File( path, &lt;Charset("best guess", &lt;force("throw" | "alert" | "silent")&gt;)&gt;, &lt;LineSeparator("\\!N")&gt;, &lt;XMLParse&gt;|&lt;SASODSXML&gt;|&lt;JSON&gt;|&lt;BLOB( &lt;readOffsetFromBegin(0)&gt;|&lt;readOffsetFromEnd(42)&gt;, &lt;readLength(2147483647)&gt;, &lt;base64Compressed( 1 /* 0: ascii~hex */)&gt; )&gt; )

**Beschreibung:** Liest eine vollständige Textdatei in eine JSL-Variable ein. Load Text File() fragt einen Dateinamen ab. Load Text File( path ) gibt eine Zeichenkette zurück. Die Option XMLParse konvertiert XML in einen Ausdrucksbaum. SASODSXML wird als SAS ODS Standard-XML analysiert. Die Option [{JSON}] konvertiert JSON in einen Ausdrucksbaum. Das Argument BLOB gibt Binärdaten in einer JSL-Blobvariablen zurück. Optional benannte Parameter von BLOB ermöglichen das Lesen einer Teilzeichenkette aus der Datei.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Loc( m ); y = Loc( v, x )

**Beschreibung:** Gibt eine Matrix mit den Positionen der Matrix m zurück, die nicht 0 sind. Wenn zwei Argumente angegeben werden, gibt Loc(v, x) eine Matrix der Positionen der Liste oder Matrix v zurück, die gleich dem Wert x sind. Ziehen Sie, wenn möglich, stattdessen Where vor.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

/*more examples, above*/
Show( Loc( [1 0 1 0 1 0] ) );
Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, 2 ) );
Show( Loc( {"A", 2, 3, 2, 5, 2, 4, [1 5]}, [1 5] ) );

```

**Beispiel 2**

```jsl

Loc( [0, -2, 3, 0, 5, ., -7, ., 9] ) /*missing is not zero or non-zero*/;

```

**Beispiel 3**

```jsl

Loc( [5, 7, 5, ., 5], 5 );

```

**Beispiel 4**

```jsl

Loc( [5, 7, 5, ., 5] == 5 ) /*[5,7,5, . ,5]==5   ==>   [1, 0, 1, ., 1]*/;

```

**Beispiel 5**

```jsl

Loc( {"a", "fred", "b", "fred"}, "fred" );

```

### Loc Max

**Syntax:** y = Loc Max( x )

**Beschreibung:** Gibt die erste Position des Maximalwerts in x zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Loc Max( [11 22 33 22 33 11] );

```

### Loc Min

**Syntax:** y = Loc Min( x )

**Beschreibung:** Gibt die erste Position des Minimalwerts in x zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Loc Min( [11 22 33 22 33 11] );

```

### Loc Nonmissing

**Syntax:** y = Loc Nonmissing( matrixArg,...,{listArg},... )

**Beschreibung:** Gibt einen Vektor von Zeilennummern in Zeilen der Argumentmatrix zurück, die keine fehlenden Werte haben. Bei Listen werden die Zeilen zurückgegeben, die nicht-fehlende Zahlen oder nicht-leere Zeichen haben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Loc Nonmissing( [1 2 3, 4 . 6, 7 8 ., 8 7 6] );

```

### Loc Sorted

**Syntax:** idx = Loc Sorted( x, y )

**Beschreibung:** Erstellt einen Spaltenvektor von indizierbaren Positionen, wo die Werte von x Werte haben, die basierend auf einer binären Suche kleiner oder gleich den Werten in y sind. x muss eine in aufsteigender Reihenfolge sortierte Matrix ohne fehlende Werte sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show(
	Loc Sorted( [11 22 33 44 55], [11 33 55] ),
	Loc Sorted( [11 22 33 44 55], [1] ),
	Loc Sorted( [11 22 33 44 55], [500] )
);

```

### Local

**Syntax:** y = Local( {name=value, ...}, expression )

**Beschreibung:** Löst Namen in lokale Variablen auf.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Local( {a = 1, b},
	b = 2;
	a + b;
);

```

### Local Here

**Syntax:** y = Local Here( expression )

**Beschreibung:** Führt den Ausdruck aus und verwendet für lokale Namen standardmäßig Hier(1).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

y = Local Here(
	a = 1;
	b = 2;
	c = a + b;
	c;
);

```

### Lock Globals

**Syntax:** Lock Globals( name, ... )

**Beschreibung:** Sperrt angegebene globale Namen, so dass diese nicht geändert und von der Funktion Clear Globals nicht gelöscht werden können.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Lock Symbols( name, ... )

**Beschreibung:** Sperrt angegebene globale Namen, so dass diese nicht geändert und von der Funktion Clear Symbols nicht gelöscht werden können.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Log( x, &lt;b&gt; )

**Beschreibung:** Gibt den Logarithmus zur Basis b von x oder den natürlichen Logarithmus von x zurück, wenn b nicht angegeben ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Log( 256, 2 );

```

### Log Capture

**Syntax:** string = Log Capture( expr )

**Beschreibung:** Wertet das Argument expr aus und erfasst die Ausgabe, die im JMP-Logfenster angezeigt werden würde. Diese wird stattdessen in einer Zeichenkette zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

"captured:" || Log Capture(
	For( i = 1, i <= 3, i++,
		Write( Char( i ) );
		Write( " " );
	)
);

```

### Log Table Messages

**Syntax:** Log Table Messages( &lt;On|Off&gt;, &lt;Enable(subject, ...)&gt;, &lt;Disable(subject, ...)&gt;, &lt;Include(msgname, ...)&gt;, &lt;Exclude(msgname, )&gt;

**Beschreibung:** Control logging of data table messages (such as DtMsgClose). By default logging is off, but all subjects are enabled. (If you turn logging on, you do not need to enable the subjects you&apos;re interested in.) Only a subset of all messages are logged. Not available in retail builds.

**JMP Version hinzugefügt:** 17

**Turn off logging**

```jsl

Log Table Messages( Off );

```

**Turn on logging**

```jsl

Log Table Messages( On );

```

**Turn on logging, and include all messages except "DtMsgClose"**

```jsl

Log Table Messages( On, Exclude( "DtMsgClose" ) );

```

**Turn on logging, and include only the "DtMsgClose" message**

```jsl

Log Table Messages( On, Include( "DtMsgClose" ) );

```

**Turn on logging, but ignore column messages**

```jsl

Log Table Messages( On, Disable( "Column" ) );

```

**Turn on logging, but ignore table messages**

```jsl

Log Table Messages( On );
Log Table Messages( Disable( "Table" ) );

```

### Log10

**Syntax:** y = Log10( x )

**Beschreibung:** Gibt den Logarithmus zur Basis 10 von x zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Log10( 100 );

```

### Log1P

**Syntax:** y = Log1P( x )

**Beschreibung:** Gibt eine Berechnung von Log(1 + x) mit größerer Genauigkeit zurück, wenn x sehr klein ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Log1P( 1e-6 );

```

### LogGenGamma Density

**Syntax:** y = LogGenGamma Density( x, mu, sigma, lambda )

**Beschreibung:** Gibt die Dichte an der Stelle x einer verallgemeinerten Log-Gamma-Wahrscheinlichkeitsverteilung mit den Parametern mu, sigma und lambda zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = LogGenGamma Distribution( x, mu, sigma, lambda )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine verallgemeinerte Log-Gamma-verteilte Zufallsvariable (mit den Parametern mu, sigma und lambda) kleiner ist als x.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = LogGenGamma Quantile( p, mu, sigma, lambda )

**Beschreibung:** Gibt das Quantil einer verallgemeinerten Log-Gamma-Verteilung zurück (mit den Parametern mu, sigma und lambda), den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Logist( x )

**Beschreibung:** Gibt 1 / (1 + Exp( -x )) zurück und konvertiert eine Zahl im Bereich -∞ bis +∞ in den Bereich 0 bis 1. Die Funktion Logist() ist nützlich bei logistischer Regression.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Logist( 2 );

```

### Logist Percent

**Syntax:** y = Logist Percent( x )

**Beschreibung:** Logist-Funktion mit Ergebnis skaliert 0 bis 100.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Logist Percent( 10 );

```

### Logistic Density

**Syntax:** y = Logistic Density( x, mu, sigma )

**Beschreibung:** Gibt die Dichte in x einer logistischen Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Logistic Distribution( x, mu, sigma )

**Beschreibung:** Gibt die Wahrscheinlichkeit in x einer logistischen Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Logistic Quantile( p, mu, sigma )

**Beschreibung:** Gibt das Quantil in p einer logistischen Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Logit( p )

**Beschreibung:** Gibt den Logit-Wert von p zurück, der definiert ist als log(p / (1 - p)).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Logit( 0.95 );

```

### Logit Percent

**Syntax:** y = Logit Percent( p )

**Beschreibung:** Logit-Funktion mit Argument 0 bis 100, statt 0 bis 1.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Logit Percent( 95.0 );

```

### Loglogistic Density

**Syntax:** y = Loglogistic Density( x, mu, sigma )

**Beschreibung:** Gibt die Dichte in x einer log-logistischen Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Loglogistic Distribution( x, mu, sigma )

**Beschreibung:** Gibt die Wahrscheinlichkeit in x einer log-logistischen Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Loglogistic Quantile( p, mu, sigma )

**Beschreibung:** Gibt das Quantil in p einer log-logistischen Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Lognormal Density( x, mu, sigma )

**Beschreibung:** Gibt die Dichte in x einer Lognormal-Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Lognormal Distribution( x, mu, sigma )

**Beschreibung:** Gibt die Wahrscheinlichkeit in x einer Lognormal-Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Lognormal Quantile( p, mu, sigma )

**Beschreibung:** Gibt das Quantil in p einer Lognormal-Verteilung mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** s = Long Date( datetime, &lt;format&gt; )

**Beschreibung:** Gibt die lange Darstellung eines Datum/Uhrzeit-Werts entsprechend dem Gebietsschema zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Long Date( Today() );

```

### Low Rank Symmetric Update BLAS

**Syntax:** y = Low Rank Symmetric Update BLAS( A, U, s )

**JMP Version hinzugefügt:** 17

```jsl

A = [2 0, 0 2];
U = [2 4, 3 5];
s = 2.5;
AUpdate = Low Rank Symmetric Update BLAS( A, U, s );

```

### Lowercase

**Syntax:** sl = Lowercase( s )

**Beschreibung:** Wandelt in der angegebenen Zeichenkette Großbuchstaben in Kleinbuchstaben um. Regeln für Groß- und Kleinbuchstaben richten sich nach dem Gebietsschema.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Lowercase( "CAFÉ #23" );

```

### LPSolve

**Syntax:** {x, z} = LPSolve( A, b, c, L, U, neq, nle, nge, &lt;slackVars=0&gt; )

**Beschreibung:** Minimiert die Zielfunktion unter den vorgegebenen Nebenbedingungen und gibt eine Liste mit zwei Elementen zurück. Das erste Listenelement, x, enthält die Entscheidungsvariablen (und Slack-Variablenwerte, wenn slackVars=1 ist). Das zweite Listenelement, z, enthält den optimalen Zielfunktionswert (sofern einer vorhanden ist). Die ersten fünf Argumente sind Matrizen. Das Argument A ist die Matrix der Nebenbedingungskoeffizienten. Das Argument b ist die Spalte der rechten Seiten der Nebenbedingungen. Das Argument c ist der Vektor der Kostenkoeffizienten der Zielfunktion. Die Argumente L und U sind die untere und obere Schranke für die Variablen. Die Argumente neq, nle und nge ist die Anzahl der Gleichheitsnebenbedingungen, die Anzahl von Ungleichungen „kleiner als oder gleich“ und die Anzahl von Ungleichungen „größer als oder gleich“. Beachten Sie, dass für die Nebenbedingungen zuerst die Gleichungen, danach die Ungleichungen „kleiner als oder gleich“ und zuletzt die Ungleichungen „größer als oder gleich“ aufgeführt werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Mail( "address", "subject", "message", &lt;"attachment filepath"&gt; | { "attachment filepath", ...} )

**Beschreibung:** Erstellt eine ausgehende E-Mail wie angegeben, wenn das Betriebssystem dies zulässt. Nicht alle Optionen funktionieren bei allen Betriebssystemversionen. In der Hilfe finden Sie Details dazu.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Mail( "test@example.com", "revelation", "JMP is great.", "$SAMPLE_DATA/Big Class.jmp" );

```

### Main Menu

**Syntax:** menu = Main Menu( command, &lt;window name&gt; )

**Beschreibung:** Führt den angegebenen Hauptmenübefehl aus.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Main Menu( "Sample Index" );

```

**Beispiel 2**

```jsl

Main Menu( "Help:Sample Index" );

```

### Make KFold Formula

**Syntax:** y = Make KFold Formula( folds, Y Columns( cols ), &lt;&lt;Stratification Columns( cols ), &lt;&lt;Grouping Columns( cols ) )

**Beschreibung:** Erzeugt bei Verwendung in einer Spaltenformel eine Validierungsspalte mit folds Stufen. Diese JSL-Funktion wird in erster Linie von der Plattform „Validierungsspalte erzeugen“ verwendet, um Formelspalten zu erzeugen.

**JMP Version hinzugefügt:** 17

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "KFold Validation",
	"Numeric",
	"Nominal",
	Formula( Make KFold Formula( 5, <<Y Columns( :height ) ) )
);

```

**Beispiel 2**

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

**Syntax:** y = Make Validation Formula( rates, &lt;&lt;Stratification Columns( cols ), &lt;&lt;Grouping Columns( cols ), &lt;&lt;Cutpoint Column ( col ), &lt;&lt;Cutpoint Batch ID( col ), &lt;&lt;Determine cutpoints using( "Proportions"|"Numbers of Rows"|"Fixed Time or Date"|"Elapsed Time" ), &lt;&lt;Assign Extra Rows( "To Training"|"To Validation"|"To Test" ) )

**Beschreibung:** Erzeugt bei Verwendung in einer Spaltenformel eine zwei- oder dreistufige Validierungsspalte. Das Argument rates ist eine 3x1-Matrix, die jeweils die Trainings-, Validierungs- und Testanteile enthält. Diese JSL-Funktion wird in erster Linie von der Plattform „Validierungsspalte erzeugen“ verwendet, um Formelspalten zu erzeugen.

**JMP Version hinzugefügt:** 15

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Validation",
	"Numeric",
	"Nominal",
	Formula( Make Validation Formula( [.6, .4, 0] ) ),
	Set Property( "Value Labels", {0 = "Training", 1 = "Validation"} )
);

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Validation",
	"Numeric",
	"Nominal",
	Formula( Make Validation Formula( [.6, .2, .2], <<Stratification Columns( :age ) ) ),
	Set Property( "Value Labels", {0 = "Training", 1 = "Validation", 2 = "Test"} )
);

```

**Beispiel 3**

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

**Syntax:** v = Mandelbrot( n, radius, x, y )

**Beschreibung:** Berechnet den Wert der Mandelbrot-Funktion für x,y, stoppt nach n Iterationen oder wenn der Radius überschritten ist

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Map Value(string | number, {key1, value1...|{key1...},{value1...}}, &lt;Unmatched(value)&gt;)

**Beschreibung:** Den Ausgangswert auswerten und das zugeordnete Ergebnis oder einen Standardwert zurückgeben.

**JMP Version hinzugefügt:** 15

**Beispiel 1**

```jsl

Map Value( "celry", {"celry", "celery"} );

```

**Beispiel 2**

```jsl

Map Value( "carrot", {"celry", "celery"}, Unmatched( "not found" ) );

```

**Beispiel 3**

```jsl

Map Value( 10, {10, "celery", 11, "banana"} );

```

**Beispiel 4**

```jsl

Map Value( 10, {{1, 2, 3}, {100, 200, 300}} );

```

### Marker

**Syntax:** Marker( &lt;rs&gt;, {x1, y1}, {x2, y2}, ... ); Marker( &lt;rs&gt;, xMatrix, yMatrix )

**Beschreibung:** Zeichnet Symbole an den angegebenen Koordinaten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example", Graph Box( Marker( Marker State( 3 ), [11 44 77], [75 25 50] ) ) );

```

### Marker Of

**Syntax:** y = Marker Of( &lt;rs&gt; ); Marker Of( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Beschreibung:** Gibt die Symbolkomponente des angegebenen Zeileneigenschaftswerts zurück. Wenn das Symbol als L-Wert verwendet wird, ändert es das Symbol der aktuellen (oder r-ten) Zeile in der aktuellen Datentabelle.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );
Row() = 3;
Marker Of();

```

### Marker Seg

**Syntax:** me = Marker Seg( x, y, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )

**Beschreibung:** Gibt ein Anzeigesegment mit Symbolen für alle X- und Y-Werte zurück.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

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

**Beispiel 2**

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

**Beispiel 3**

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

**Beispiel 4**

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

**Beispiel 5**

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

**Syntax:** Marker Size( n )

**Beschreibung:** Legt die Größe für die Symbole im Grafikrahmen fest. 0 = Punkt, 1 = klein, …

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Marker Size( 5 );
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	)
);

```

### Marker State

**Syntax:** rs = Marker State( marker )

**Beschreibung:** Gibt einen Zeileneigenschaftswert zurück, wobei die Symbolkomponente auf den angegebenen Wert gesetzt ist. Das Argument marker gibt ein Symbol an und kann eine positive ganze Zahl, ein Zeichen, eine positive ganze Zahl für ein Unicode-Zeichen oder ein Hexadezimalzeichen für ein Unicode-Zeichen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );

```

### Match

**Syntax:** y = Match( x, v1, expr1, v2, expr2, ..., exprElse )

**Beschreibung:** Wertet das Argument exprN aus, das dem ersten Argument vN entspricht, das gleich x ist, und gibt es zurück. Oder wertet das Argument exprElse aus und gibt es zurück, wenn kein Wert gleich x ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Match( Year( Today() ), 2013, "snake", 2014, "horse", 2015, "goat", "other" );

```

### MatchMZ

**Syntax:** y = MatchMZ( x, v1, expr1, v2, expr2, ..., exprElse )

**Beschreibung:** Wertet das Argument exprN aus, das dem ersten Argument vN entspricht, das gleich x ist, und gibt es zurück. Oder wertet das Argument exprElse aus und gibt es zurück, wenn kein Wert gleich x ist. (Die Funktion MatchMZ() verhält sich wie die Funktion Match(), außer dass fehlende Werte wie 0 behandelt werden.)

**JMP Version hinzugefügt:** Vor Version 14

```jsl

MatchMZ( Year( Today() ), 2013, "snake", 2014, "horse", 2015, "goat", "other" );

```

### Matrix

**Syntax:** y = Matrix( {{x11, ..., x1m}, {...}, {xn1, ..., xnm}} )y = Matrix( {x1, ..., xn} )y = Matrix( n, m )

**Beschreibung:** Erzeugt eine n-x-m-Matrix. Wenn Sie eine Liste von n-Listen angeben, die jeweils m Zeilenwerte enthalten, wird die Matrix durch vertikale Verkettung der ausgewerteten Listen gebildet. Wenn Sie eine einzelne Liste von n Elementen angeben, ist der Rückgabewert ein n-x-1-Spaltenvektor. Wenn Sie zwei ganzzahlige Argumente angeben, ist der Rückgabewert eine Matrix aus Nullen, die n Zeilen und m Spalten enthält.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Matrix( {{11, 22, 33}, {44, 55, 66}} );

```

**Beispiel 2**

```jsl

Matrix( {{[1 2 3], 4, 5, 6, 7, 8, 9}} );

```

**Beispiel 3**

```jsl

Matrix( {2, 3 + 7} );

```

**Beispiel 4**

```jsl

Matrix( 2, 3 );

```

### Matrix Box

**Syntax:** y = Matrix Box( matrix, &lt; &lt;&lt;Column Names( "c1", "c2", ... )&gt;, &lt; &lt;&lt;Row Names( "r1", "r2", ... )&gt; )

**Beschreibung:** Erzeugt ein Anzeigefeld für die Anzeige einer Zahlenmatrix.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example", Matrix Box( [11 22 33, 44 55 66], <<RowNames( "First", "Second" ) ) );

```

### Matrix Mult

**Syntax:** y = Matrix Mult( A, B, ... ); y = A * B

**Beschreibung:** Führt Matrixmultiplikation durch. Die Matrixargumente müssen stimmen: NCol(a)==NRow(b). Beachten Sie, dass A * B ebenfalls funktioniert.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Matrix Mult BLAS( A, B, ... )

**Beschreibung:** Führt Matrixmultiplikation durch. Die Matrixargumente müssen stimmen: NCol(A)==NRow(B).

**JMP Version hinzugefügt:** 17

```jsl

exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatB = [1 2, 1 2, 1 2];
exMatM2 = Matrix Mult BLAS( exMatA, exMatB );

```

### Matrix Rank

**Syntax:** r = Matrix Rank( X )

**Beschreibung:** Gibt den Rang der Matrix X zurück.

**JMP Version hinzugefügt:** 14

```jsl

Matrix Rank( [1 0 0, 0 1 0, 0 1 0] );

```

### Matrix To Blob

**Syntax:** m = Matrix To Blob( matrix, type, bytesEach, endian )

**Beschreibung:** Erzeugt ein Blob aus einer Matrix durch Konvertieren der Matrixelemente in 1-, 2- oder 4-Byte-Ganzzahlen mit oder ohne Vorzeichen oder in 4- oder 8-Byte-Gleitpunktzahlen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Matrix To Blob( [3.14, 1.414], "float", 4, "big" );

```

### Max

**Syntax:** y = Max( x1, ... ); y = Maximum( x1, ... )

**Beschreibung:** Gibt den Maximalwert unter den Argumenten oder der Werte innerhalb eines einzelnen Matrix- oder Listenarguments zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### Maximize

**Syntax:** Maximize( expr, {x1, x2, ...} );Maximize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;MaxIter( 250 ), &lt;&lt;Tolerance( .00000001 ), &lt;&lt;details(both | returnDetails | displaySteps), &lt;&lt;gradient(), &lt;&lt;hessian(), method(NR | SR1), &lt;&lt;useNumericDeriv(True))

**Beschreibung:** Findet Werte für die Argumente der Funktion, angegeben in der Liste {x1, x2, ...}, die den Ausdruck expr maximieren. Auf den Namen des Arguments folgend können Sie für jedes Argument untere und obere Grenzen in Klammern angeben. Wenn expr keine konkave Funktion ist, findet Maximize möglicherweise statt des globalen Maximum ein lokales Maximum. Sollten Sie deswegen Bedenken haben, können Sie versuchen, mehrere Startwerte zu verwenden. Auch funktioniert Maximize am besten für Funktionen mit einer stetigen zweiten Ableitung. Mit zusätzlichen Argumenten für die Funktion Maximize können Sie die maximale Anzahl von Iterationen und Toleranz für Konvergenz angeben und weitere Details über die Optimierung anzeigen. Klicken Sie auf die Schaltfläche „Hilfethemen“, um weitere Informationen über die optionalen Argumente zu erhalten.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

/*Simple example*/ 
x = 0;
y = 0;
maxf = Maximize( ((2 * x ^ 2 + 12 * x * y - y * 3)), {x, y} );
Eval List( {x, y, maxf} );

```

**Beispiel 2**

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

**Beispiel 3**

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

**Syntax:** y = Max( x1, ... ); y = Maximum( x1, ... )

**Beschreibung:** Gibt den Maximalwert unter den Argumenten oder der Werte innerhalb eines einzelnen Matrix- oder Listenarguments zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### MDYHMS

**Syntax:** s = MDYHMS( datetime, &lt;format&gt; )

**Beschreibung:** Gibt eine Darstellung eines Datum/Uhrzeit-Werts in folgender Reihenfolge zurück: Monat, Tag, Jahr, Stunde, Minute, Sekunde.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

MDYHMS( Today() );

```

### Mean

**Syntax:** y = Mean( x1, ... )

**Beschreibung:** Gibt den arithmetischen Mittelwert aller Argumente oder der Werte innerhalb eines einzelnen Matrix- oder Listenarguments zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {Mean( Pi(), e() ), Mean( [33 44 22 20 30] )} );

```

### Median

**Syntax:** y = Median( x1, ... )

**Beschreibung:** Gibt den Median der kombinierten Argumente zurück, die Skalar-, Matrix- oder Listenargumente sein können.

**JMP Version hinzugefügt:** 15

```jsl

Median( [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] );

```

### Method

**Syntax:** m = Method( { arg1 = val1, ... }, expression* )

**Beschreibung:** Eine Methode innerhalb einer Klasse erstellen

**JMP Version hinzugefügt:** Vor Version 14

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

### Mimic

**Syntax:** mimic obj = Mimic(Box|PlatformRef)

**Beschreibung:** Creates a GUI automation object that mimics a real user. ONLY AVAILABLE IN INTERNAL JMP BUILDS.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :age ) );
outline = Report( obj )[Outline Box( 1 )];
mc = Mimic( obj );
mc << Mark( outline );
mc << Mouse Click( Offset( TopLeft( outline ), [25 15] ) );

```

### Min

**Syntax:** y = Min( x1, ... ); y = Minimum( x1, ... )

**Beschreibung:** Gibt den Minimalwert unter den Argumenten oder der Werte innerhalb eines einzelnen Matrix- oder Listenarguments zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Minimize

**Syntax:** Minimize( expr, {x1, x2, ...} );Minimize( expr, {x1( low1, up1 ), x2( low2, up2 ), ...}, &lt;&lt;MaxIter( 250 ), &lt;&lt;Tolerance( .00000001 ), &lt;&lt;details(both | returnDetails | displaySteps), &lt;&lt;gradient(), &lt;&lt;Hessian(), &lt;&lt;method(NR | SR1), &lt;&lt;useNumericDeriv(True))

**Beschreibung:** Findet Werte für die Argumente der Funktion, angegeben in der Liste {x1, x2, ...}, die den Ausdruck expr minimieren. Auf den Namen des Arguments folgend können Sie für jedes Argument untere und obere Grenzen in Klammern angeben. Wenn expr keine konvexe Funktion ist, findet Minimize möglicherweise statt des globalen Minimum ein lokales Minimum. Sollten Sie deswegen Bedenken haben, können Sie versuchen, mehrere Startwerte zu verwenden. Auch funktioniert Minimize am besten für Funktionen mit einer stetigen zweiten Ableitung. Mit zusätzlichen Argumenten für die Funktion Minimize können Sie die maximale Anzahl von Iterationen und Toleranz für Konvergenz angeben und weitere Details über die Optimierung anzeigen. Klicken Sie auf die Schaltfläche „Hilfethemen“, um weitere Informationen über die optionalen Argumente zu erhalten.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

/*Simple Example*/
x = 0;
y = 0;
minFun = Minimize( (y * 3 - 2 * x ^ 2 - 12 * x * y), {x, y} );
Eval List( {x, y, minFun} );

```

**Beispiel 2**

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

**Beispiel 3**

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

**Beispiel 4**

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

**Beispiel 5**

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

**Syntax:** y = Min( x1, ... ); y = Minimum( x1, ... )

**Beschreibung:** Gibt den Minimalwert unter den Argumenten oder der Werte innerhalb eines einzelnen Matrix- oder Listenarguments zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Minus

**Syntax:** y = -x; y = Minus( x )

**Beschreibung:** Negiert x. Das Argument kann eine Zahl, Matrix oder Liste von Zahlen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

-Pi();

```

### Minute

**Syntax:** min = Minute( datetime )

**Beschreibung:** Gibt den Minutenanteil eines Datum/Uhrzeit-Werts zurück, 0 bis 59.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Minute( Today() );

```

### Mod

**Syntax:** z = Modulo( x, y )

**Beschreibung:** Gibt den Divisionsrest der Division von x durch y zurück. Der Divisionsrest hat das gleiche Vorzeichen wie x.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Modulo( 10, 3 );

```

### Mode

**Syntax:** y = Mode( list or matrix )

**Beschreibung:** Wählt das „häufigste“ Element aus einer Matrix oder Liste aus, bei Ranggleichheit den niedrigeren Wert

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show( Mode( [1, 2, 3, 2, 1] ), Mode( {"a", "b", "c", "b", "a", "b"} ) );

```

### Modified Internal Rate of Return

**Syntax:** x = Modified Internal Rate of Return( values, finance_rate, reinvest_rate );x = Modified Internal Rate of Return( finance_rate, reinvest_rate, value1, value2, &lt;value3, ...&gt; )

**Beschreibung:** Gibt den geänderten internen Ertragssatz für eine Folge regelmäßiger Zahlungsflüsse zurück, wobei die Investitionskosten sowie die bei der Wiederanlage von Kapital erhaltenen Zinsen berücksichtigt werden. Entspricht der MIRR-Funktion in Microsoft Excel. Der zweite Prototyp der Funktion akzeptiert alle skalaren Argumente.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Modified Internal Rate of Return( [-10000, 1000, 900, 950], .1, -.12 );
Modified Internal Rate of Return( .1, -.12, -10000, 1000, 900, 950 );

```

### Modulo

**Syntax:** z = Modulo( x, y )

**Beschreibung:** Gibt den Divisionsrest der Division von x durch y zurück. Der Divisionsrest hat das gleiche Vorzeichen wie x.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Modulo( 10, 3 );

```

### Month

**Syntax:** mon = Month( datetime )

**Beschreibung:** Gibt den Monatsanteil eines Datum/Uhrzeit-Werts zurück, 1 bis 12.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Month( Today() );

```

### MouseBox

**Syntax:** box = MouseBox( displayBoxArgs )

**Beschreibung:** Gibt ein Feld zurück, das JSL-Rückrufe für Mausaktionen durchführen kann.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Mousetrap( dragScript, &lt;mouseUpScript&gt; )

**Beschreibung:** Wertet den Ausdruck dragScript wiederholt aus, während die Maustaste im Graphen gedrückt wird und nicht von einem anderen Graphenobjekt bearbeitet wird. Vor der Ausführung des Skripts werden die globalen Variablen x und y auf den Mauswert gesetzt und anschließend auf den ursprünglichen Wert zurückgesetzt. Der Ausdruck mouseUpScript wird nach dem Loslassen der Maustaste ausgeführt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** rc = Move Directory( from, to )

**Beschreibung:** Verschiebt ein Verzeichnis von einem Ort an einen anderen. Gibt 1 zurück, wenn das Verzeichnis verschoben wurde. Gibt 0 zurück, wenn das Verzeichnis nicht verschoben werden konnte. Gibt einen Fehler zurück, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** rc = Move File( from, to )

**Beschreibung:** Verschiebt eine Datei von einem Ort an einen anderen. Gibt 1 zurück, wenn die Datei verschoben wurde. Gibt 0 zurück, wenn die Datei nicht verschoben werden konnte. Gibt einen Fehler zurück, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Move to Project(&lt;Source(project)&gt;, &lt;Destination(project)&gt;, &lt;Windows({list of windows to move})&gt;)

**Beschreibung:** Verschiebt ein oder mehrere Fenster in ein Projekt hinein, aus einem Projekt heraus oder von einem Projekt in ein anderes. Es darf entweder nur die Quelle oder nur das Ziel angegeben werden, die jeweils andere Angabe ist standardmäßig das aktuelle Projekt. (Geben Sie nur die Quelle an, um Fenster in das aktuelle Projekt zu verschieben, geben Sie nur das Ziel an, um Fenster aus dem aktuellen Projekt heraus zu verschieben.) Ein Datentabellenfenster wird zusammen mit den abhängigen Berichten verschoben, auch wenn nur ein Fenster im Argument angegeben zu werden braucht. Wird das Fensterargument weggelassen, sind standardmäßig alle geöffneten Fenster im Quellprojekt betroffen.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
report = dt << Run Script( "Bivariate" );
                              
project = New Project();
                              
Move to Project( destination( project ), windows( {report} ) );

```

**Beispiel 2**

```jsl

project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
Move to Project( Source( project ) );
project << Close Window();

```

### Moving Average

**Syntax:** y = Moving Average( x, weighting, &lt;before=-1&gt;, &lt;after=0&gt;, &lt;partial window is missing=0&gt; )

**Beschreibung:** Gibt eine Matrix der gleitenden Mittelwerte für die Eingabematrix zurück. before und after bestimmen den Bereich („Fenster“) der zu mittelnden Elemente, wobei before -1 sein kann, um alle vorherigen Elemente anzuzeigen. Wenn weighting 1 ist, haben alle Elemente die gleiche Gewichtung. Wenn weighting 0 ist, haben die Elemente linear inkrementelle Gewichtungen. Andernfalls ist weighting der Parameter für die exponentielle Gewichtung (EWMA). partial window is missing zeigt an, ob Mittelwerte berichtet werden, wenn nicht alle Nachbarn vorhanden sind, was an den Enden oder nahe fehlender Werte auftreten kann. Wenn partial window is missing ungleich Null ist, werden stattdessen für solche partiellen Fenster fehlende Werte berichtet.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List(
	{Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 1, 3 ),
	Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0, 2, 2 ),
	Moving Average( [1 2 1 2 . 4 9 9 9 9 9], 1, 1, 1, 1 ),
	Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0.5 )}
);

```

### Multiple File Import

**Syntax:** mfiObj = Multiple File Import();

**Beschreibung:** Erstellt ein Objekt für den Import mehrerer Dateien. Das Objekt akzeptiert Meldungen, um einen Ordner festzulegen, Dateien zu filtern und zu importieren. Um ein Dialogfeld aufzurufen, verwenden Sie die Meldung „Fenster erstellen“. Für den sofortigen Import verwenden Sie die Meldung „Daten importieren“. Dabei wird eine Liste der erstellten Tabellen zurückgegeben.

**JMP Version hinzugefügt:** 14

**Interaktives Beispiel**

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

**Skriptbeispiel**

```jsl


mfi = Multiple File Import();
mfi << Set Folder( "$SAMPLE_IMPORT_DATA" );
mfi << Set Name Filter( "*.txt" );
mfi << Set Name Enable( 1 );
tables = mfi << Import Data();

```

### Multiply

**Syntax:** y = x0 * x1; y = Multiply( x0, x1, ... )

**Beschreibung:** Multipliziert alle Argumente, diese können Zahlen, Matrizen oder Listen von Zahlen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

2 * Pi();

```

### Multiply To

**Syntax:** y *= x; Multiply To( y, x )

**Beschreibung:** Multipliziert einen Wert mit einer Variable oder mit einer Liste von Variablen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ex = 3;
ex *= 2;
ex;

```

### Multivariate Normal Impute

**Syntax:** y = Multivariate Normal Impute( yVec, meanYvec, symCovMat, colMin, colMax )

**Beschreibung:** Gibt einen Zielgrößenvektor mit imputierten Werten für die fehlenden Werte im Vektor yVec der Zielgrößen zurück. Die Imputationen basieren auf einer multivariaten Normalverteilung mit dem Erwartungswertvektor meanYvec und der symmetrischen Kovarianzmatrix symCovMat. Die optionalen Argumente colMin und colMax sind die jeweiligen Vektoren der Minimal- und Maximalwerte der Spalten. Diese Argumente bieten Schranken für die Imputationen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** r = Munger( s, startPos, findStringOrNChars, &lt;replaceString&gt; )

**Beschreibung:** Sucht im Argument s nach einer Teilzeichenkette oder Position, je nach Kombination der Argumente.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {Munger( "over there", 1, "t", "" ), Munger( "17 June 2000", 4, 4, "March" )} );

```

### N Arg

**Syntax:** n = N Arg( expr )

**Beschreibung:** Gibt die Anzahl der Argumente im Kopf des ausgewerteten Ausdrucks zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

N Arg( Expr( Sum( a, b, c ) ) );

```

### N Arg Expr

**Syntax:** n = N Arg Expr( expr )

**Beschreibung:** Gibt die Anzahl der Argumente im Kopf des Ausdrucks zurück. Diese Funktion ist veraltet. Bitte verwenden Sie stattdessen N Arg().

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

// See Example 2 for the deprecated N Arg Expr() equivalent
N Arg( Expr( Sum( a, b, c ) ) );

```

**Beispiel 2**

```jsl

// Deprecated
N Arg Expr( Sum( a, b, c ) );

```

### N Choose K

**Syntax:** m = N Choose K( n, k )

**Beschreibung:** Gibt n! / (k! * (n - k)!), die Anzahl von Möglichkeiten, k Elemente aus n Elementen auszuwählen, ohne Berücksichtigung der Reihenfolge.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

N Choose K( 5, 3 );

```

### N Col

**Syntax:** y = N Col(); y = N Col( dataTable ); y = N Col( matrix )

**Beschreibung:** Gibt die Anzahl der Spalten in der aktuellen Datentabelle, einer angegebenen Datentabelle oder einer Matrix zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

N Col( [11 22, 33 44] );

```

### N Cols

**Syntax:** y = N Cols(); y = N Cols( dataTable ); y = N Col( matrix )

**Beschreibung:** Gibt die Anzahl der Spalten in der aktuellen Datentabelle, einer angegebenen Datentabelle oder einer Matrix zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

N Col( [11 22, 33 44] );

```

### N Items

**Syntax:** y = N Items( x )

**Beschreibung:** Gibt die Anzahl Elemente in einer Liste zurück, die Anzahl Elemente in einer Matrix, die Anzahl Schlüssel in einem assoziativen Array, die Anzahl Funktionen und Variablen in einem Namensraum, die Anzahl Methoden und Variablen in einem Klassenobjekt oder die Anzahl untergeordneter Elemente in einem Anzeigefeld.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

N Items( {1, 2 + 3, [11 22]} );

```

**Beispiel 2**

```jsl

N Items( ["a" => 10, "b" => 3, => 0] );

```

**Beispiel 3**

```jsl

New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
N Items( hlist );

```

### N Missing

**Syntax:** y = N Missing( x1, x2, ... )

**Beschreibung:** Gibt die Anzahl fehlender Werte unter den Argumenten aus.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

N Missing( 1, 2, ., 3, [11 22 . .], 4 );

```

### N Row

**Syntax:** y = N Row(); y = N Row( dt ); y = N Row( matrix )

**Beschreibung:** Gibt die Anzahl der Zeilen in der aktuellen Datentabelle, einer angegebene Datentabelle oder einer Matrix zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

N Row( [11 22, 33 44] );

```

### N Rows

**Syntax:** y = N Rows(); y = N Rows( dt ); y = N Rows( matrix )

**Beschreibung:** Gibt die Anzahl der Zeilen in der aktuellen Datentabelle, einer angegebene Datentabelle oder einer Matrix zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

N Rows( [11 22, 33 44] );

```

### N Table

**Syntax:** n = N Table()

**Beschreibung:** Gibt die Anzahl der aktuell geöffneten Datentabellen zurück.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
N Table();

```

**Beispiel 2**

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

**Syntax:** Name(string)

**Beschreibung:** Ein Name dient lediglich dem Aufruf eines Elements. Namen werden für Variablen und Funktionen verwendet und können direkt in Skripten verwendet werden, solange bestimmte Regeln eingehalten werden. Wenn der Name mit einem alphabetischen Zeichen oder einem Unterstrich beginnt und mit alphanumerischen Zeichen, Leerzeichen, mathematischen Unicode-Symbolen und bestimmten Interpunktionszeichen (Apostroph (’), Prozentzeichen (%), Punkt (.), Schrägstrich rückwärts (\\) und Unterstrich (_)) fortgesetzt wird, kann der Name direkt in Skripten verwendet werden. Bei Namen, die diese Regeln nicht einhalten, kann das Schlüsselwort Name() verwendet werden.

**JMP Version hinzugefügt:** 14

```jsl

Name( "taxable income(2011)" ) = 456000;
tax = .25;
Print( tax * Name( "taxable income(2011)" ) );

```

### Name Expr

**Syntax:** y = Name Expr( x )

**Beschreibung:** Gibt den Wert eines Symbols zurück, ohne dieses auszuwerten, wenn es ein Ausdruck ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ex = Expr( 1 + 2 );
Eval List( {ex, Name Expr( ex )} );

```

### Names Default To Here

**Syntax:** Names Default To Here( boolean )

**Beschreibung:** Legt fest, ob nicht aufgelöste Namen gespeichert werden, entweder global/lokal (0) oder im Hier: Namensraum (1).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

/* Variable x will be stored in the Here: namespace by default */x = 1;
Show( x );

```

### Namespace

**Syntax:** ns = Namespace( namespace reference )

**Beschreibung:** Gibt eine Referenz auf den vom Argument name angegebenen Namensraum zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** nsexists = Namespace Exists( namespace reference )

**Beschreibung:** Gibt 1 zurück, wenn der vom Argument name angegebene Namensraum vorhanden ist, andernfalls wird 0 zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** m = NChooseK Matrix( n, k )

**Beschreibung:** Erstellt eine Matrix von nChooseK(n,k) Zeilen und k Spalten, die alle Kombinationen von k ganzen Zahlen von 1 bis n bilden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Print( NChooseK Matrix( 5, 3 ) );

```

### Neg Binomial Distribution

**Syntax:** cumprob = Neg Binomial Distribution( p, n, k )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine negativ binomialverteilte Zufallsvariable kleiner oder gleich k ist, wobei die Wahrscheinlichkeit des Erfolgs p und die Anzahl der Erfolge n ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** prob = Neg Binomial Probability( p, n, k )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine negativ binomialverteilte Zufallsvariable gleich k ist, wobei die Wahrscheinlichkeit des Erfolgs p und die Anzahl der Erfolge n ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** cumprob = Negative Binomial Distribution( k, lambda, sigma )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine negativ binomial verteilte Zufallsvariable kleiner oder gleich k ist. lambda ist der Lageparameter, sigma ist der Skalenparameter und k ist die betrachtete Häufigkeit.

**JMP Version hinzugefügt:** 19

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

**Syntax:** prob = Negative Binomial Probability( k, lambda, sigma )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine negativ binomial verteilte Zufallsvariable gleich k ist. lambda ist der Lageparameter, sigma ist der Skalenparameter und k ist die betrachtete Häufigkeit.

**JMP Version hinzugefügt:** 19

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

**Syntax:** q = Gamma Negative Binomial Quantile( lambda, sigma, cumprob )

**Beschreibung:** Gibt das Quantil als kleinste ganze Zahl zurück, für das die kumulierte Wahrscheinlichkeit der negativen Binomialverteilung (lambda, sigma) größer als oder gleich cumprob ist.

**JMP Version hinzugefügt:** 19

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

**Syntax:** x = Net Present Value( rate, values );x = Net Present Value( rate, value1, value2, &lt;value3, ...&gt; )

**Beschreibung:** Gibt den aktuellen Nettowert einer Annuität zurück, wobei ein Diskontsatz und eine Reihe künftiger Auszahlungen (negative Werte) und Einzahlungen (positive Werte) berücksichtigt werden. Das Argument values ist eine eindimensionale Matrix. Entspricht der NPV-Funktion in Microsoft Excel. Der zweite Prototyp der Funktion akzeptiert alle skalaren Argumente.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Net Present Value( .05, [-10000, 1000, 900, 9500] );
Net Present Value( .05, -10000, 1000, 900, 9500 );

```

### New CAS Action

**Syntax:** action = New CAS Action(...)

**Beschreibung:** Erstellt eine CAS-Aktion.

**JMP Version hinzugefügt:** 15

```jsl


echo = [=> ];
echo["a"] = 1;
echo["b"] = JSON Literal( true );
echo["c"] = 3.141559;
action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );

```

### New CAS DATA Step action

**Syntax:** action = New CAS DATA Step Action(...)

**Beschreibung:** Erstellt eine CAS-DATA-Step-Aktion.

**JMP Version hinzugefügt:** 15

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

**Syntax:** cas = New CAS Server(&lt;...&gt;)

**Beschreibung:** Erstellt einen neuen CAS-Server.

**JMP Version hinzugefügt:** 15

```jsl


url = "http://myCasURL";
cas = New CAS Server( Connect( URL( url ), Prompt( IfNeeded ) ) );

```

### New Clipboard

**Syntax:** clp = New Clipboard( &lt;&lt;&lt;Get From OS&gt; )

**Beschreibung:** Creates a new Clipboard, either empty or with access to the OS clipboard.

**JMP Version hinzugefügt:** 19

```jsl


clp = New Clipboard( <<Get From OS );
New Window( "Img", clp << Get Flavor Data( "Graphic" ) )
;

```

### New Column

**Syntax:** dc = New Column( name, &lt;"Numeric"|"Character"|"RowState"|"Expression"&gt;, &lt;"Continuous"|"Ordinal"|"Nominal"|"Multiple Response"|"Unstructured Text"|"Vector"|"None"&gt;, &lt;Width( n )|Format(format name, width, precision)&gt;, &lt;Like(:other column)&gt;, &lt;actions&gt; )

**Beschreibung:** Erstellt eine neue Spalte in der aktuellen Datentabelle. Die optionalen Argumente actions sind alle Meldungen, die von Datenspalten unterstützt werden.

**JMP Version hinzugefügt:** Vor Version 14

**Ähnlich**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "like name", Like( :name ) );

```

**Einfach**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "example", "Numeric", "Continuous", Width( 5 ), <<Set Each Value( 100 ) );

```

### New Column by Text Matching

**Syntax:** dc = New Column by Text Matching( Column(:name), Set Regex(), &lt;Output Column Name("Name")&gt;, &lt;Use Result(0 | 1)&gt; )

**Beschreibung:** Erstellt eine neue Spalte durch Ausführen einer Übereinstimmung des Musters eines regulären Ausdrucks mit einer vorhandenen Spalte.

**JMP Version hinzugefügt:** 16

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

**Syntax:** f=New Custom Function(namespace, name, function definition)

**Beschreibung:** Ein neues benutzerdefiniertes Funktionsobjekt erstellen. Eine benutzerdefinierte Funktion wird im Skripteditor farblich gekennzeichnet und im Skriptindex angezeigt. Die erforderlichen Informationen für eine benutzerdefinierte Anwenderfunktion sind ein Namensraum (um Kollisionen mit globalen Funktionen zu verhindern), ein Name und eine Funktionsdefinition. Weitere Hilfeinformationen können mithilfe von Meldungen hinzugefügt werden. Mit dem Befehl „Benutzerdefinierte Funktion hinzufügen“ können Sie die neue Funktion in der JMP-Umgebung veröffentlichen.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );

```

**Beispiel 2**

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

**Beispiel 3**

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

**Syntax:** result = New Data Connector( Type( type ) | ID( id ) | File( path ) | Spec( string ) | Base( data connector ), &lt; Option1( value1 ) &gt;, ..., &lt; OptionN( valueN ) &gt; )

**Beschreibung:** Erstellt ein Konfigurationsobjekt für einen Datenkonnektor.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl


// Create a data connector from scratch
dc = New Data Connector( Type( "ODBC" ), Database( "foo" ), Server( "bar.example.com" ) );
Show( dc << Get( Database ) );  // Overridden database value "foo"
Show( dc << Get( Driver ) );  // Default driver value . (missing)
dc << Set( Database( "foo2" ), Driver( "SQL Server" ) );
Show( dc << Get( Database ) );  // New database value "foo2"
Show( dc << Get( Driver ) );  // New driver value "SQL Server"

```

**Beispiel 2**

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

**Syntax:** New Heat Image( Matrix, &lt;Color Theme / gradient ( ... )&gt;

**Beschreibung:** Erstellt ein Heatmap-Bild basierend auf einer Matrix und einem Farbschema oder Gradient.

**JMP Version hinzugefügt:** 16

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

**Syntax:** obj = New HTTP Request(URL(...), Method(...), &lt;Form(&lt;Fields(...)&gt;, &lt;Files(...)&gt;)&gt; | &lt;File(...)&gt; | &lt;Blob(...)&gt; | &lt;JSON(...)&gt;, &lt;QueryString(...)&gt;, &lt;Headers(...)&gt;, &lt;Username(...)&gt;, &lt;Password(...)&gt;)

**Beschreibung:** Erstellt einen Request zum Senden an einen Webservice.

**JMP Version hinzugefügt:** 14

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

**Syntax:** img = New Image()img = New Image( width, height )img = New Image( pathname )img = New Image( picture )img = New Image( matrix of JSL color pixels ) img = New Image( rgb|r|g|rgba, {i, i, i} )

**Beschreibung:** Gibt ein neues Bild zurück, das dann über JSL-Befehle bearbeitet werden kann. Wenn ein Pfad zu einer vorhandenen Bilddatei angegeben ist, muss es sich um eine Datei vom Typ .JPG, .PNG, .GIF, .BMP oder .TIF handeln.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

image = New Image( "$SAMPLE_IMAGES/windmap.png" );
New Window( "new image", image );

```

**Beispiel 2**

```jsl

pic = Open( "$SAMPLE_IMAGES/windmap.png", png );
image2 = New Image( pic );
New Window( "new image", image2 );

```

**Beispiel 3**

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

**Syntax:** New IP21 Client(URL(base URL), &lt;Authentication Method("None"|"Basic"|"NTLM"|"Kerberos")&gt;, &lt;Username(userid)&gt;,&lt;Password(password)&gt;)

**Beschreibung:** Erstellt eine neue IP21-Client-Instanz, die zum Importieren von Daten von einem AspenTech IP.21-Server verwendet werden kann.

**JMP Version hinzugefügt:** 19

### New JMP Live

**Syntax:** New JMP Live(Connection("Connection Name"), &lt;Prompt("No" | "If Needed")&gt;)

**Beschreibung:** Startet eine Verbindung mit JMP Live und verwendet gespeicherte Verbindungsinformationen. Connection ist optional und der Standardwert ist die im Verbindungsmanager angegebene Standardverbindung. Wenn angegeben, wird die Verbindung nach dem Namen gesucht. Prompt ist optional und der Standardwert dafür ist „No“. Die gültigen Werte für die Eingabeaufforderung sind „Yes“, „No“ und „If needed“. Der Wert „Yes“ fordert immer zur Eingabe der Login-Benutzerdaten auf. Der Wert „No“ fordert niemals zur Eingabe der Login-Benutzerdaten auf, kann jedoch zu einem Authentifizierungsfehler führen. Der Wert „If Needed“ fordert nur dann zur Eingabe der Benutzerdaten auf, wenn die aktuell gespeicherten Benutzerdaten nicht gültig sind. Gibt ein JMP Live-Verbindungsobjekt zurück.

**JMP Version hinzugefügt:** 15

**Beispiel 1**

```jsl

jmplive = New JMP Live();

```

**Beispiel 2**

```jsl

jmplive = New JMP Live( Connection( "MyJMPLive" ), Prompt( No ) );

```

**Beispiel 3**

```jsl

jmplive = New JMP Live( Connection( "MyJMPLive" ), Prompt( If Needed ) );

```

### New JMP Live Content

**Syntax:** obj = New JMP Live Content(jmpreport|Image(path_to_image)|Data(jmpdatatable)|Map(jmpmap), &lt;Title(...)&gt;, &lt;Description(...)&gt;, &lt;Publish Data(0|1)&gt;, &lt;Enable Warnings(0|1)&gt;, &lt;Optimization("Interactivity" | "Performance")&gt;

**Beschreibung:** Erzeugt interaktive Inhalte für die Veröffentlichung auf JMP Live. 

	Der erste Parameter ist erforderlich und gibt die Daten an, die für den Inhalt verwendet werden sollen. Diese Daten können ein Bericht, eine Datentabelle, eine Landkarte oder ein Bild sein. 

	Titel und Beschreibung werden verwendet, um jede Art von veröffentlichtem Inhalt individuell zu gestalten. Die übrigen Parameter sind optional und werden nur zur Anpassung des Berichtsinhalts verwendet. 

	„Daten veröffentlichen“ gibt an, ob die im Bericht verwendeten Daten in JMP Live veröffentlicht werden. Die Daten für den Bericht werden standardmäßig veröffentlicht.

	„Warnungen aktivieren“ gibt an, ob Regelkartenwarnungen für den Bericht aktiviert werden sollen. Regelkartenwarnungen sind standardmäßig deaktiviert. 

	„Optimierung“ dient dazu, die Art und Weise anzupassen, wie der Bericht in JMP Live veröffentlicht wird. Der Bericht wird standardmäßig so veröffentlicht, dass eine größere Interaktivität möglich ist.

**JMP Version hinzugefügt:** 17

**Beispiel 1**

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

**Beispiel 2**

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

**Beispiel 3**

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

**Beispiel 4**

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

**Syntax:** multi_request = New Multi HTTP Request()

**Beschreibung:** Sendet oder lädt mehrere HTTP-Requests parallel.

**JMP Version hinzugefügt:** 17

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

**Syntax:** ns = New Namespace( &lt;name&gt;, &lt;list of expressions&gt; )

**Beschreibung:** Erstellt einen neuen Namensraum mit dem vom Argument name angegebenen Namen oder mit einem anonymen Namen, sofern name nicht angegeben ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** oauth2 = New OAuth2()

**Beschreibung:** Erstellt eine neue OAuth2-Autorisierung.

**JMP Version hinzugefügt:** 15

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

**Syntax:** token = New OAuth2 Token( Account("jmpgoogldev@gmail.com"), Client ID("test"), Client Secret("test 2"), Refresh Token(""), Token URL(""))

**Beschreibung:** Erstellt einen OAuth2-Token für den sicheren Zugriff auf Daten über viele verschiedene Web-APIs.

**JMP Version hinzugefügt:** 15

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

**Syntax:** New Object( "class name" | class name | class reference( constructor arguments* ) )

**Beschreibung:** Erstellt ein Instanzobjekt einer Klasse.

**JMP Version hinzugefügt:** 14

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

**Syntax:** New Pi Client(URL(base URL), &lt;Authentication Method("None"|"Basic"|"NTLM"|"Kerberos")&gt;, &lt;Username(userid)&gt;,&lt;Password(password)&gt;)

**Beschreibung:** Erstellt eine neue PI-Client-Instanz, die zum Importieren von Daten von einem PI-Server verwendet werden kann.

**JMP Version hinzugefügt:** 17

**Beispiel 1**

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

**Beispiel 2**

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

**Beispiel 3**

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

**Syntax:** project = new Project( &lt;project messages&gt; )

**Beschreibung:** Erstellt ein neues leeres Projektfenster. Eine oder mehrere Projektmeldungen können als Argumente eingeschlossen werden, um ein Projekt in einem Schritt zu erstellen.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

project = New Project();

```

**Beispiel 2**

```jsl

project = New Project(
	Run Script(
		dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
		dt << Run Script( "Bivariate" );
	)
);

```

**Beispiel 3**

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

**Beispiel 4**

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

**Beispiel 5**

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

**Syntax:** obj = New SQL Query( Connection( "ODBC:my_connection_string" ), Select( Column( "mycolumn", "t1" ) ), From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ) ); obj = New SQL Query( Connection( "ODBC:my_connection_string;" ), CustomSQL( "SELECT c1, c2, c3 FROM my_table;" ) )

**Beschreibung:** Erstellt ein SQL-Abfrageobjekt für die angegebene Verbindung, Spalten und Tabelle oder für die angegebene benutzerdefinierte SQL-Abfrage. Erzeugen Sie mit der Funktion „Abfrage erstellen“ Skripte, die Abfragen erstellen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


obj = New SQL Query(
	Connection( "ODBC:DSN=mydsn" ),
	Select(),
	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) )
);

```

### New Table

**Syntax:** dt = New Table( name, &lt;visibility("private"|"invisible"|"visible")&gt;, &lt;Enable Filter Views(bool)&gt;, &lt;actions&gt; )

**Beschreibung:** Erstellt eine neue Datentabelle. "Invisible" blendet die Datentabelle aus der Ansicht aus, zeigt sie jedoch im JMP-Hauptfenster an. "Private" blendet die Tabelle vollständig aus. "Visible" ist die Standardeinstellung und erstellt eine normale Tabelle, die sichtbar ist und im JMP-Hauptfenster angezeigt wird. Die optionalen Argumente actions sind alle Meldungen, die von der Datentabelle unterstützt werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "LOUISE", "JANE"} ) ),
	New Column( "age", Nominal, Set Values( [12, 13, 13] ) ),
	New Column( "weight", Continuous, Set Values( [95, 123, 74] ) )
);

```

### New Web Report

**Syntax:** obj = New Web Report(...)

**Beschreibung:** Erstellt einen interaktiven HTML-Bericht.

**JMP Version hinzugefügt:** 14

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

**Syntax:** w = New Window( title, &lt; &lt;&lt;Type("Report" | "Dialog" | "Modal Dialog" | "Journal" | "Launcher" | "Script")&gt;, &lt; &lt;&lt; Return Result&gt;, &lt; &lt;&lt; On Open(expr | function | method)&gt;, &lt; &lt;&lt; On Close(expr | function | method)&gt;, &lt; &lt;&lt;On Validate(expr | function | method)&gt;, &lt; &lt;&lt;Show Menu(0 | 1)&gt;, &lt; &lt;&lt;Show Toolbars(0 | 1)&gt;, &lt; &lt;&lt;Suppress AutoHide(0 | 1)&gt;, &lt; &lt;&lt;Window View("Visible" | "Invisible")&gt;, &lt; &lt;&lt;Language("C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS" | "SQL" | "Text" | "XML")&gt;, &lt; &lt;&lt;Size(x, y)&gt;, displayBox | script)

**Beschreibung:** Erstellt ein Fenster mit dem angegebenen Anzeigefeld oder Skript. Standardmäßig wird ein Berichtsfenster erstellt, es sei denn, die Option Type ist angegeben. Im Fenster von Type("Modal Dialog") wird die Ausführung angehalten, bis im Dialogfeld eine Reaktion erfolgt. On Open, On Validate und Return Result sind nur bei modalen Fenstern verfügbar. On Open() wertet den zugehörigen Ausdruck, die Funktion oder Klassenmethode aus, wenn das Fenster erstellt wird. Wenn On Close() falsch zurückgibt, wird das Fenster am Schließen gehindert. On Validate() führt seinen Ausdruck, die Funktion oder Klassenmethode aus, wenn auf die Schaltfläche „OK“ geklickt wird. Wenn der Ausdruck wahr zurückgibt, wird das Fenster geschlossen. Ansonsten bleibt das Fenster geöffnet. Return Result ändert den Rückgabewert des Fensters beim Schließen so, dass es dem der veralteten Funktion Dialog() entspricht. Bei Fenstertypen, die Symbolleisten unterstützen, verwenden Sie Show Toolbars, um Änderungen am Standardverhalten anzugeben. Die Optionen Show Menu und Suppress AutoHide sind nur für Windows verfügbar. Die Option Window View("Invisible") kann für jedes Fenster außer Modal Dialog verwendet werden. Ein Fenster mit Type("Script") erstellt ein JSL-Dokument, es sei denn, die Option <<Language ist angegeben.

**JMP Version hinzugefügt:** Vor Version 14

**[Win] Symbolleisten und Menüs**

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

**Bericht**

```jsl

g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
New Window( "My Window's Title", g );

```

**Dialogfeld**

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

**Modales Dialogfeld**

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

**Python-Skript**

```jsl

pyscript = "\[import numpy as np
a = np.arange(15).reshape(3, 5)]\";
ex = New Window( "Script example", <<Type( "Script" ), <<Language( "Python" ), pyscript );

```

**Skript**

```jsl

script = JSL Quote(Names Default To Here(1);
dt=Open("$SAMPLE_DATA/Big Class.jmp");
dt << Run Script("Bivariate");
);
ex = New Window( "Script example", <<Type( "Script" ), script );

```

### Normal Biv Distribution

**Syntax:** y = Normal Biv Distribution( x, y, r, &lt;mu1=0&gt;, &lt;s1=1&gt;, &lt;mu2=0&gt;, &lt;s2=1&gt; )

**Beschreibung:** Berechnet die Wahrscheinlichkeit, dass eine Beobachtung (X, Y) kleiner als oder gleich (x, y) ist, bei einem Korrelationskoeffizienten r, wobei die Randverteilung X normalverteilt mit Mittelwert mu1 und Standardabweichung s1 ist und die Randverteilung Y normalverteilt mit Mittelwert mu2 und Standardabweichung s2 ist. Wenn mu1, s1, mu2 und s2 nicht angegeben sind, nimmt die Funktion die bivariate Standardnormalverteilung mit mu1=0, s1=1, mu2=0 und s2=1 an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Normal Biv Distribution( -2, -2, .5, 1, 1.5, -1, 2 );

```

### Normal Contour

**Syntax:** Normal Contour( prob, meanMatrix, stdMatrix, corrMatrix, &lt;colorsMatrix&gt;, &lt;fill=0&gt; )

**Beschreibung:** Zeichnet normalverteilte Wahrscheinlichkeitskonturlinien für k Populationen und zwei Variablen. Das Argument prob kann eine skalare Wahrscheinlichkeit oder eine Matrix mit Wahrscheinlichkeiten sein. Die Argumente meanMatrix und stdsMatrix sind k x 2 Matrizen, und das Argument corrMatrix ist ein k x 1 Vektor. Das Argument colorsMatrix gibt die Farben für die k Konturlinien an. Die Farben müssen als JSL-Farben angegeben werden (entweder ganzzahlige JSL-Farbwerte oder Rückgabewerte von JSL-Farbfunktionen wie RGB Color() oder HLS Color()). Das Argument fill gibt die Transparenz für die Füllfarbe der Konturlinien an.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Normal Density( q, &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Beschreibung:** Gibt die Dichte in q einer Normalverteilung mit dem Mittelwert mu and der Standardabweichung sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Normal Distribution( q, &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine normalverteilte Zufallsvariable kleiner als q ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** {mean, var} = Normal Integrate( muVector, sigmaMatrix, expr, x, NStrata, NSim )

**Beschreibung:** Gibt das Ergebnis der radial-sphärischen Integration glatter Funktionen von multivariaten normalverteilten Variablen zurück. Die grundlegende Idee ist die gleiche wie eine Methode in Genz und Monahan (1996). Für die radiale Richtung wird aber die Quadratur vom Typ Radau-Gauss-Laguerre verwendet.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Normal Log CDistribution( x, &lt;mean=0&gt;, &lt;std dev=1&gt; )

**Beschreibung:** Gibt den Logarithmus der 1 - Normalverteilung bei x mit dem Erwartungswert mu und der Standardabweichung sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Normal Log Density( x, &lt;mu=0&gt;, &lt;sigma=1&gt;)

**Beschreibung:** Gibt den Logarithmus der Wahrscheinlichkeitsdichte der Normalverteilung bei x mit dem Erwartungswert mu und der Standardabweichung sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Normal Log Distribution( x, &lt;mean=0&gt;, &lt;std dev=1&gt; )

**Beschreibung:** Gibt den Logarithmus der Normalverteilung bei x mit dem Erwartungswert mu und der Standardabweichung sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Normal Mixture Density(q, meanvec, sdvec, probvec)

**Beschreibung:** Gibt die Dichte in q einer Mischung aus Normalverteilungen mit dem Gruppenmittelwert meanvec, den Standardabweichungen der Gruppe sdvec und den Gruppenwahrscheinlichkeiten probvec zurück. Hier sind meanvec, sdvec und probvec alles Vektoren gleicher Größe.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Normal Mixture Distribution(q, meanvec, sdvec, probvec)

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine in normaler Mischung verteilte Variable mit dem Gruppenmittelwert meanvec, den Standardabweichungen der Gruppe sdvec und den Gruppenwahrscheinlichkeiten probvec kleiner als q ist. Hier sind meanvec, sdvec und probvec alles Vektoren gleicher Größe.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Normal Mixture Quantile(p, meanvec, sdvec, probvec)

**Beschreibung:** Gibt das Quantil einer Mischung aus Normalverteilungen zurück, die Werte, für die die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Normal Quantile( p, &lt;mu=0&gt;, &lt;sigma=1&gt; ); q = Probit( p )

**Beschreibung:** Gibt das Quantil einer Normalverteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Normal Quantile( 0.9 );

```

### Normal Tolerance Factor

**Syntax:** q = Normal Tolerance Factor( 1-alpha, p, n, &lt;One Sided&gt; )

**Beschreibung:** Berechnet den Toleranzfaktor für die Konstruktion eines 1-Alpha-Konfidenzintervalls, das den Anteil p der Mittelwerte mit der Stichprobengröße n aus der Normalverteilung enthält. Es gibt eine Option, um den Faktor für ein einseitiges Toleranzintervall anzufordern.

**JMP Version hinzugefügt:** 19

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

**Syntax:** y = !x; y = Not( x )

**Beschreibung:** Gibt das logische NOT von x zurück: 1, wenn x gleich 0 ist, fehlend, wenn x fehlt, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

!(1 < 2);

```

### Not Equal

**Syntax:** z = x != y != ...; z = Not Equal( x, y, ... )

**Beschreibung:** Gibt 1 zurück, wenn jedes Argument ungleich dem nächsten Argument ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

1 != 2 != 1;

```

### Notebook

**Syntax:** nb = Notebook( name|number )

**Beschreibung:** Gibt eine Referenz auf das angegebene Notebook zurück.

**JMP Version hinzugefügt:** 19

### Nth Day Of Week in the Month

**Syntax:** n = Nth Day Of Week in the Month( datetime )

**Beschreibung:** Gibt eine ganze Zahl zurück, die die Anzahl von Instanzen des Wochentags des Datum/Uhrzeit-Arguments darstellt, die in dem Monat aufgetreten sind. Beispiel: Der 28. November 2019 ist der vierte Donnerstag des Monats, somit gibt die Funktion 4 aus.

**JMP Version hinzugefügt:** 16

```jsl

Nth Day Of Week in the Month( Date MDY( 11, 28, 2019 ) );

```

### Num

**Syntax:** y = Num( s, &lt; &lt;&lt;Use Locale( use=1 ) &gt;, &lt; &lt;&lt;Restrict &gt; )

**Beschreibung:** Konvertiert s in eine Zahl mithilfe eines beliebigen integrierten Formats, einschließlich Datums- oder Währungsformat. Gibt fehlend zurück, wenn die Konvertierung fehlschlägt. Das optionale <<Restrict gestattet die Konvertierung nur mit ganzen Zahlen, Dezimalzahlen und wissenschaftlichen Formaten.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Show( Num( "3.1e6" ), Num( "1989-10-04" ), Num( "5%" ), Num( "£23" ) );

```

**Beispiel 2**

```jsl

Show(
	Num( "3.1e6", <<Restrict ),
	Num( "1989-10-04", <<Restrict ),
	Num( "5%", <<Restrict ),
	Num( "£23", <<Restrict )
);

```

### Num Deriv

**Syntax:** y = Num Deriv( f( x, ... ), &lt;parnum&gt;)

**Beschreibung:** Gibt die numerische Ableitung der Funktion f( x,... ) in Bezug auf eines ihrer Argumente zurück. Sie können dieses Argument als zweites Argument in der Funktion Num Derivangeben. Wenn kein zweites Argument angegeben ist, wird die Ableitung nach dem ersten Argument der Funktion genommen. Die Ableitung wird mithilfe von numerischen Werten, die im Funktionsausdruck f( x,... ) angegeben sind, ausgewertet.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

f = Function( {x, y}, x ^ 2 + y );
Num Deriv( f( 2, 1 ) );
Num Deriv( f( 2, 1 ), 2 );

```

### Num Deriv2

**Syntax:** y = Num Deriv2( f( x, ... ) )

**Beschreibung:** Gibt die numerische zweite Ableitung der Funktion f( x,... ) in Bezug auf x zurück. Die Ableitung wird mithilfe von numerischen Werten, die im Funktionsausdruck f( x,... ) angegeben sind, ausgewertet.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

f = Function( {x}, x ^ 3 );
Num Deriv2( f( 2 ) );

```

### Number

**Syntax:** y = Number( x1, ... )

**Beschreibung:** Gibt die Anzahl nicht fehlender Argumente oder der Werte innerhalb eines einzelnen Matrix- oder Listenarguments zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {Number( 12, ., 11, 0, -42 ), Number( [33 . -42 . 0 . -30] )} );

```

### Number Col Box

**Syntax:** y = Number Col Box( title, numbers )

**Beschreibung:** Gibt ein Anzeigefeld für die Anzeige der vom Argument numbers angegebenen Zahlen zurück. Dabei kann es sich um eine Liste oder eine Matrix handeln.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Number Col Edit Box( title, numbers )

**Beschreibung:** Gibt ein Anzeigefeld für die Anzeige der vom Argument numbers angegebenen Zahlen zurück. Dabei kann es sich um eine Liste oder eine Matrix handeln.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

x = y = z = 0;
New Window( "Example",
	Modal,
	<<Return Result,
	Outline Box( "Table", Table Box( neb = Number Col Edit Box( "values", {x, y, z} ) ) )
);

```

### Number Edit Box

**Syntax:** y = Number Edit Box( initValue, &lt;width&gt; )

**Beschreibung:** Gibt ein Bearbeitungsfeld zurück, das nur numerische Eingaben annimmt. Geben Sie das optionale Argument width an, um die Breite des Felds in Zeichen festzulegen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example", neb = Number Edit Box( 5 ) );
x = neb << get;

```

### Number of Periods

**Syntax:** x = Number of Periods( rate, pmt, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Beschreibung:** Gibt die Anzahl von Zeiträumen für eine Annuität bei regelmäßigen, konstanten Zahlungen und einem konstanten Zinssatz zurück. Das Argument type ist 0, wenn Zahlungen am Ende des Zahlungszeitraums fällig sind, bzw. 1, wenn Zahlungen zu Beginn des Zeitraums fällig sind. Entspricht der NPER-Funktion in Microsoft Excel.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Number of Periods( .05 / 12, -2000, 100000 );

```

### Open

**Syntax:** Open( filePath, &lt;data table options | Excel import options | text import options | SAS import options | HTML import options | esriShapeFile import options | PDF import options | other file options &gt; )

**Beschreibung:** Gibt eine Referenz auf eine Datentabelle oder eine andere JMP-Datei oder auf ein über eine Datei erstelltes Objekt zurück. Wenn kein Pfad angegeben ist, wird das Dialogfeld „Öffnen“ angezeigt. Wenn ein Ordnerpfad angegeben ist, wird der Dateibrowser des Systems geöffnet und kein Objekt zurückgegeben. Eine vollständige Beschreibung der verfügbaren Optionen finden Sie in der Syntaxreferenz.

**JMP Version hinzugefügt:** Vor Version 14

**Add-In**

```jsl

/* Installing Add-In:
Open( Add-In to open,
    <Check For Updates( "never" | "startup" | "always")>, // "always" will check for updates at startup and while jmp is running
    <Update Prompt(0|1)>) // whether or not the add-in will silently update or prompt first */
Open( "$downloads\test.jmpaddin", Check For Updates( "always" ), Update Prompt( 1 ) );

```

**Bild**

```jsl

/* Picture file imported as a picture object */
pic = Open( "$SAMPLE_IMAGES/tile.jpg", jpg );
New Window( "Picture", Outline Box( "Picture", Picture Box( pic ) ) );

```

**Datentabelle**

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

**Sonstige**

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

**Text**

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

**Syntax:** dt = Open Database( dataSourceName|"Connect Dialog", "SELECT ..."|"SQLFILE=..."|tableName, &lt;invisible | private&gt;, &lt;outputTableName&gt; )

**Beschreibung:** Öffnet eine Datentabelle mittels ODBC, führt das vorgegebene SQL aus und legt die Daten in einer Datentabelle mit dem angegebenen Ausgabetabellennamen ab.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open Database(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;",
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"hw"
);

```

### Open Datafeed

**Syntax:** y = Open Datafeed( ... )

**Beschreibung:** Erstellt ein Objekt und ein Fenster für Echtzeit-Daten-Feeds, an das Mitteilungen gesendet werden können.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** w = Open Help( "Help" | "Scripting Index", ... )

**Beschreibung:** Öffnet die JMP-Onlinehilfe oder den Skriptindex.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Open Help( "Help" );

```

**Beispiel 2**

```jsl

Open Help(
	"Scripting Index",
	Search( Term( "Open" ), Match( {"Contains Terms", "Match All Terms", "Ignore Case"} ) ),
	IndexContext( Category( "Functions" ) )
);

```

**Beispiel 3**

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

**Syntax:** Open Log( &lt;bring window to top&gt; )

**Beschreibung:** Log-Fenster öffnen

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Open Log();
Show( Is Log Open() );

```

**Beispiel 2**

```jsl

/* Bring Log Windows to the Top */
Open Log( 1 );
Show( Is Log Open() );

```

### Or

**Syntax:** y = x1 | x2; y = Or( x1, x2, ... )

**Beschreibung:** Gibt das logische OR aller Argumente zurück: 1, wenn eines der Argumente ungleich 0 ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

1 < 2 | 3 < 2;

```

### OrMZ

**Syntax:** y = OrMZ( x1, x2, ... )

**Beschreibung:** Gibt das logische OR von allen Argumenten zurück, wobei fehlende Werte als Nullen behandelt werden: 1, wenn eines der Argumente ungleich 0 ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

OrMZ( 1 < 2, 3 < 2 );

```

### Ortho

**Syntax:** L = Ortho( A, &lt;Centered( 0 )&gt;, &lt;Scaled( 1 )&gt; )

**Beschreibung:** Orthogonalisiert die Spalten einer Matrix. Option „Zentriert“ führt zur Summe 0. Option „Skaliert“ führt zur Einheitslänge.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Ortho( [1 1, 1 -1] );

```

### Ortho Poly

**Syntax:** L = Ortho Poly( V, order )

**Beschreibung:** Gibt orthogonale Polynome des Vektors V bis zur vom Argument order angegebenen Ordnung zurück. Das Argument V kann ein Zeilen- oder Spaltenvektor sein. Die Skalierungsoption normiert sie auf Einheitslänge.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Ortho Poly( 1 :: 10, 2 );

```

### Outline Box

**Syntax:** y = Outline Box( title, &lt;command script pairs list&gt;, displayBox, ... )

**Beschreibung:** Erstellt ein Gliederungselement im Bericht und gibt die Referenz auf das Anzeigefeld zurück. Um ein Menü in den Gliederungsknoten aufzunehmen, geben Sie die command script pairs list an. Hierbei handelt es sich um eine Liste, die Menübefehle und zugehörige Skripte aufführt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Outline Box( "Picker",
		{"Show label value", Show( teb << get text )},
		H List Box( Text Box( "Label:" ), teb = Text Edit Box( Char( 213 ) ) )
	)
);

```

### Oval

**Syntax:** Oval( left, top, right, bottom, &lt;fill=0&gt; )

**Beschreibung:** Zeichnet ein Oval innerhalb des angegebenen Rechtecks, ausgefüllt, wenn „fill“ ungleich 0 ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** coef = P Spline Coef( x, Internal Knot Grid, &lt;degree = 3&gt;, &lt;KnotEndPoints = min(x) || max(x)&gt; )

**Beschreibung:** Gibt die Matrix der P-Spline-Koeffizienten zurück. Internal Knot Grid ist entweder die Anzahl der gewünschten Knotenpunkte basierend auf Perzentilen von x oder ein Vektor, der die internen Knotenpunkte angibt. Der optionale Parameter degree gibt die Grade der P-Splines mit einem voreingestellten Wert von 3 an.

**JMP Version hinzugefügt:** 14

```jsl

P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2 );
P Spline Coef( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 7] );

```

### Page Break Box

**Syntax:** Page Break Box()

**Beschreibung:** Erstellt ein Anzeigefeld, das einen Seitenumbruch erzwingt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Panel Box( title, displayBoxArgs )

**Beschreibung:** Gibt ein Anzeigefeld zum Beschriften und Einkreisen des Anzeigefelds für das Argument zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** tf = ParallelAssign( { thread_local_var = global_var, ... }, m[ a, b ] = expression using a and b )

**Beschreibung:** Mehrere Threads verwenden, um der Matrix Werte zuzuweisen. Wenn ein Thread eine Ausnahme zurückgibt, wird eine Meldung ins Log geschrieben und der Rückgabewert ist 0. Wenn alle Threads fehlerfrei abgeschlossen werden, ist der Rückgabewert 1. Funktionen, die Plattformen aufrufen, Datentabellen erstellen oder verwenden oder auf das Grafikteilsystem zugreifen, werden nur im Haupt-Thread unterstützt und geben eine Ausnahme zurück, wenn sie aus einem Worker-Thread aufgerufen werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

m = J( 3, 2, -1 );
If( Parallel Assign( {/*no locals */ }, m[a/* 1,2,3 */, b/* 1,2 */ ] = a * a + b ) == 0,
	Throw( "thread failed" )
);
m;/* 1*1+1  1*1+2, 2*2+1  2*2+2, 3*3+1  3*3+2 */

```

### Parameter

**Syntax:** y = Parameter( {name=value, ...}, model expression )

**Beschreibung:** Definiert Formelparameter für Modelle der Plattform „Nichtlinear“.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Parameter( {a = 1}, a + 1 );

```

### Parse

**Syntax:** y = Parse( s )

**Beschreibung:** Analysiert die Zeichenkette und gibt den resultierenden JSL-Ausdruck zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Parse( "x+y" );

```

### Parse Date

**Syntax:** dt = In Format( s, formatString, &lt; &lt;&lt;Use Locale(b=1)&gt;, &lt; &lt;&lt;Restrict &gt; )dt = In Format( s, "Format Pattern", pattern, &lt; &lt;&lt;Use Locale(b=1)&gt; )

**Beschreibung:** Analysiert eine Zeichenkette eines vorgegebenen Formats. Wenn das Format ein Datum/Uhrzeit-Format ist, werden der Wert als Ausdruck As Date() und das Datum im Format ttMonjjjj zurückgegeben. Das optionale Argument <<Restrict, das mit dem „Besten“ formatString verwendet wird, gestattet die Konvertierung nur mit ganzen Zahlen, Dezimalzahlen und wissenschaftlichen Formaten.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Informat( "07152000", "MMDDYYYY" );

```

**Beispiel 2**

```jsl

Informat( "07.15.2000", "Format Pattern", "<MM>.<DD>.<YYYY>" );

```

**Beispiel 3**

```jsl

Informat( "86.8287° W", "Longitude DDD" );

```

**Beispiel 4**

```jsl

Informat( "123.45%", "Percent" );

```

**Beispiel 5**

```jsl

Show(
	Informat( "1.23e4", "Best" ),
	Informat( "1.23e4", "Best", <<Restrict ),
	Informat( "1989-10-04", "Best" ),
	Informat( "1989-10-04", "Best", <<Restrict )
);

```

### Parse JSON

**Syntax:** l = Parse JSON( jsonstring )

**Beschreibung:** JSON-Text in eine JSL-Liste oder ein assoziatives Array umwandeln, die bzw. das die von den JSON-Daten angegebene Struktur darstellt.

**JMP Version hinzugefügt:** 14

```jsl

l = Parse JSON(
	"[ { \!"name\!": \!"KATIE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 59, \!"weight\!": 95 }, { \!"name\!": \!"LOUISE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 61, \!"weight\!": 123 }, { \!"name\!": \!"JANE\!", \!"age\!": 12, \!"sex\!": \!"F\!", \!"height\!": 55, \!"weight\!": 74 } ]"
);
Show( l );

```

### Parse XML

**Syntax:** Parse XML( string, OnElement( tagname, StartTag( expr ), EndTag( expr ) ), ... )

**Beschreibung:** Analysiert einen XML-Ausdruck mit den OnElement-Ausdrücken für angegebene XML-Tags.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

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

**Beispiel 2**

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

**Syntax:** Pat Abort()

**Beschreibung:** Erzeugt einen Musterwert, der bewirkt, dass die gesamte Übereinstimmung sofort und ohne weitere Sicherungen oder Wiederholungen misslingt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Pat Altern( pat1, pat2, ... )

**Beschreibung:** Erzeugt einen Musterwert, der mit einem der vorgegebenen Muster übereinstimmt. Wird im Allgemeinen geschrieben als pat1 | pat2 | ....

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Pat Match(
	"123456789",
	((Pat Pos( 2 ) + "1") | (Pat Pos( 1 ) + "2") | (Pat Pos( 0 ) + "3")) >> result
);
result;

```

### Pat Any

**Syntax:** Pat Any( string )

**Beschreibung:** Erzeugt einen Musterwert, der mit einem beliebigen Zeichen in der Zeichenkette übereinstimmt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

operators = Pat Any( "*+-/" );
text = "abc+def";
Pat Match( text, operators >> op );
op;

```

### Pat Arb

**Syntax:** Pat Arb( pattern )

**Beschreibung:** Erzeugt einen Musterwert, der mit null oder mehr Zeichen übereinstimmt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Pat Match(
	"123nonnumeric456",
	Pat Span( "0123456789" ) + Pat Arb() >> result + Pat Span( "0123456789" )
);
result;

```

### Pat Arb No

**Syntax:** Pat Arb No( pattern )

**Beschreibung:** Erzeugt einen Musterwert, der mit dem Argument kein Mal oder mehrere Male übereinstimmt. Wie patRepeat(pattern,0,infinity,RELUCTANT); (*? in Regex).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Pat Match(
	"xyz aaaaabbbbbb@ccc no c is matched because reluctant",
	Pat Arb No( "a" ) >> a + Pat Arb No( "b" ) >> b + "@" + Pat Arb No( "c" ) >> c
);
" a=" || a || " b=" || b || " c=" || c;

```

### Pat At

**Syntax:** Pat At( variable )

**Beschreibung:** Erzeugt einen Musterwert, der mit null Zeichen übereinstimmt und der Variablen die aktuelle Cursorposition zuweist. Wird im Allgemeinen als patpos()>>variable geschrieben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Pat Match( "123456789", Pat Len( 2 ) + Pat At( result ) );
result;

```

### Pat Break

**Syntax:** Pat Break( string )

**Beschreibung:** Erzeugt einen Musterwert, der mit null oder mehr Zeichen übereinstimmt, die nicht in der Zeichenkette enthalten sind, und der vor einem (erforderlichen) Zeichen in der Zeichenkette stoppt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

b = "- ";
Pat Match( "one two three-", Pat Repeat( Pat Break( b ) >> word + Pat Any( b ) ) );
word;

```

### Pat Concat

**Syntax:** Pat Concat( pat1, pat2, ... )

**Beschreibung:** Erzeugt einen Musterwert, der nacheinander mit jedem der vorgegebenen Muster übereinstimmt. Wird im Allgemeinen geschrieben als pat1 + pat2 + ....

**JMP Version hinzugefügt:** Vor Version 14

```jsl

num = Pat Break( "," );
sep = ",";
Pat Match( "1.3,7.9,8.66", num + sep + num >> result + sep + num );
result;

```

### Pat Conditional

**Syntax:** Pat Conditional( pattern, variable )

**Beschreibung:** Erzeugt einen Musterwert, der mit dem vorgegebenen Muster übereinstimmt, und der übereinstimmende Text wird bei Erfolg in einer Variable gespeichert. Wird im Allgemeinen als pattern >? variable geschrieben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

a = "unchanged";
b = "unchanged";
Pat Match( "123456789", (Pat Len( 2 ) >? a | Pat Len( 1 ) >? b) + "2" );
" a=" || a || " b=" || b;

```

### Pat Fail

**Syntax:** Pat Fail()

**Beschreibung:** Erzeugt einen Musterwert, der beim Vorwärtslauf niemals Übereinstimmungen findet, so dass andere Alternativen ausprobiert werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Pat Fence()

**Beschreibung:** Erzeugt einen Musterwert, der beim Vorwärtslauf mit Null-Zeichen übereinstimmt und beim Backup fehlschlägt, so dass keine Übereinstimmung entsteht. Dient auch zum Stutzen des Muster-Backup-Stacks.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

rc = Pat Match( "123456789", (Pat Len( 1 ) | Pat Len( 2 )) >> result + Pat Fence() + "3" );
"rc=" || Char( rc ) || " result=" || result;

```

### Pat Immediate

**Syntax:** Pat Immediate( pattern, variable )

**Beschreibung:** Erzeugt einen Musterwert, der mit dem vorgegebenen Muster übereinstimmt, und der übereinstimmende Text wird sofort in einer Variable gespeichert. Wird im Allgemeinen als pattern >> variable geschrieben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

a = "unchanged";
b = "unchanged";
Pat Match( "123456789", (Pat Len( 2 ) >> a | Pat Len( 1 ) >> b) + "2" );
" a=" || a || " b=" || b;

```

### Pat Len

**Syntax:** Pat Len( n )

**Beschreibung:** Erzeugt einen Musterwert, der mit n Zeichen übereinstimmt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Pat Match( "123456789", Pat Len( 2 ) + Pat Len( 3 ) >> result );
result;

```

### Pat Look Ahead

**Syntax:** Pat Look Ahead( pattern, &lt;0|1&gt; )

**Beschreibung:** Eine Musterübereinstimmung mit Breite null nach der aktuellen Position. Das zweite optionale Argument ist standardmäßig 0. 1 weist auf eine negative Übereinstimmung oder eine Nichtübereinstimmung hin.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

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

**Beispiel 2**

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

**Beispiel 3**

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

**Syntax:** Pat Look Behind( pattern, &lt;0|1&gt; )

**Beschreibung:** Eine Musterübereinstimmung mit Breite null vor der aktuellen Position. Das zweite optionale Argument ist standardmäßig 0. 1 weist auf eine negative Übereinstimmung oder eine Nichtübereinstimmung hin.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */Pat Match(
		Test,
		Pat Look Behind( "'" ) + "s",
		"z"
	), /* find an s that IS preceded by an apostrophe and replace it with z */Print( test )
);

```

**Beispiel 2**

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

**Beispiel 3**

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

**Syntax:** Pat Match( source, pattern, &lt;replacement&gt; )

**Beschreibung:** Führt die Musterübereinstimmung in der Variable pattern gegen die Zeichenkette in der Variable source aus. Optional wird der übereinstimmende Text durch den Text replacement ersetzt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Pat Not Any( string )

**Beschreibung:** Erzeugt einen Musterwert, der mit einem beliebigen Zeichen übereinstimmt, das nicht in der Zeichenkette enthalten ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

delimiter = ";,-";
text = "fish,dog,cat,";
Pat Match( text, Pat Repeat( Pat Not Any( delimiter ) ) >> word + Pat Any( delimiter ) );
word;

```

### Pat Pos

**Syntax:** Pat Pos( n )

**Beschreibung:** Erzeugt einen Musterwert, der mit null Zeichen übereinstimmt, wenn der Cursor an Position n ist. Wenn kein Argument angegeben ist, gibt die Funktion Pat Pos() die Cursorposition für die Zuweisung >> oder >? zurück: patpos()>>variable.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Pat Match(
	"ab3defghi",
	Pat Pos( 2 ) + Pat Len( 1 ) >> v/*v=3*/+ Expr( Pat Len( v ) )
	+Pat Pos( /* no argument returns current position = 6 */ ) >> result
);
result;

```

### Pat R Pos

**Syntax:** Pat R Pos( n )

**Beschreibung:** Erzeugt einen Musterwert, der mit null Zeichen übereinstimmt, wenn sich der Cursor n Zeichen vor dem Ende befindet.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Pat Match( "quick brown fox", Pat R Pos( 3 ) + Pat Rem() >> result );
result;

```

### Pat R Tab

**Syntax:** Pat R Tab( n )

**Beschreibung:** Erzeugt einen Musterwert, der mit null oder mehr Zeichen übereinstimmt, um den Cursor n Zeichen vor dem Ende zu positionieren.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Pat Match( "123456789", "23" + Pat R Tab( 2 ) >> result );
result;

```

### Pat Regex

**Syntax:** Pat Regex( string )

**Beschreibung:** Erzeugt einen Musterwert, der mit dem regulären Ausdruck in der Zeichenkette übereinstimmt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

string = "John Smith";
Regex Match( string, Pat Regex( "([^ ]+)([ ]+)([^ ]+)" ), "\3, \1" );
string;

```

### Pat Rem

**Syntax:** Pat Rem()

**Beschreibung:** Erzeugt einen Musterwert, der mit dem Rest des Texts übereinstimmt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Pat Match( "the quick fox", Pat R Pos( 3 ) + Pat Rem() >> result );
result;

```

### Pat Repeat

**Syntax:** Pat Repeat( pattern, &lt;min=1&gt;, &lt;max=infinity&gt;, &lt;GREEDY or RELUCTANT=GREEDY&gt; )

**Beschreibung:** Erzeugt einen Musterwert, der mit dem vorgegebenen Muster zwischen min und max Male übereinstimmt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Pat Match(
	"xyz aaaaabbbbbbccc 3 c is matched because greedy",
	Pat Repeat( "a" ) >> a + Pat Repeat( "b" ) >> b + Pat Repeat( "c" ) >> c
);
" a=" || a || " b=" || b || " c=" || c;

```

### Pat Span

**Syntax:** Pat Span( string )

**Beschreibung:** Erzeugt einen Musterwert, der mit einem oder mehreren Zeichen in der Zeichenkette übereinstimmt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

sp = Pat Span( "0123456789.-" );
Pat Match( "junk=-33.44e33", sp >> result );
result;

```

### Pat String

**Syntax:** Pat String( string )

**Beschreibung:** Erzeugt einen Musterwert, der mit der Zeichenkette übereinstimmt. Im Allgemeinen kann die Zeichenkette ohne die Funktion Pat String() verwendet werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

x = Pat String( "a" || "b" );
Pat Match(
	"acbdbababc",
	Pat Arb() >> before + Pat Repeat( x ) >> match + Pat Rem() >> after
);
"before=" || before || " match=" || match || " after=" || after;

```

### Pat Succeed

**Syntax:** Pat Succeed()

**Beschreibung:** Erzeugt einen Musterwert, der immer mit null Zeichen übereinstimmt, auch beim Anlegen von Sicherungskopien.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Pat Tab( n )

**Beschreibung:** Erzeugt einen Musterwert, der mit null oder mehr Zeichen übereinstimmt, um den Cursor bis zur Position n vorwärts zu bewegen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Pat Match( "123456789", "23" + Pat Tab( 6 ) >> result );
result;

```

### Pat Test

**Syntax:** Pat Test( expression )

**Beschreibung:** Erzeugt einen Musterwert, der mit null Zeichen übereinstimmt, wenn der Ausdruck ungleich 0 ist. Der Ausdruck wird während jedes Tests neu ausgewertet, als ob Expr() verwendet würde.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Path( pathMatrix|pathText, &lt;fill=0&gt; )

**Beschreibung:** Zeichnet Linien entlang des angegebenen Pfads, wenn „Füllen“ gleich 0 ist, oder färbt das Innere des angegebenen Pfads, wenn „Füllen“ ungleich 0 ist. Der Pfad kann mit einer Nx3-Matrix oder mit einer Textdarstellung angegeben werden. Eine Pfadmatrix hat drei Spalten für x, y und Flags für jeden Punkt im Pfad. Die Flag-Werte sind 0 für Steuern, 1 für Verschieben, 2 für Liniensegment, 3 für kubisches Bézier-Segment und sie sind negativ, wenn der Punkt den Pfad auch schließt. Der Pfadtext unterstützt die SVG-Syntax.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** s = Path To Char( pathMatrix )

**Beschreibung:** Wandelt eine Pfadspezifikation vom Matrixformat in Zeichenformat um.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Path To Char( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] );

```

### Payment

**Syntax:** x = Payment( rate, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Beschreibung:** Gibt die Zahlung für ein Darlehen bei konstanten Zahlungen und einem konstanten Zinssatz zurück. Das Argument type ist 0, wenn Zahlungen am Ende des Zahlungszeitraums fällig sind, bzw. 1, wenn Zahlungen zu Beginn des Zeitraums fällig sind. Entspricht der PMT-Funktion in Microsoft Excel.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Pdf Page Count

**Syntax:** Pdf Page Count( file name)

**Beschreibung:** Gibt die Anzahl Seiten in einer PDF-Datei zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

pageCount = Pdf Page Count( "$documents\myfile.pdf" );

```

### Pen Color

**Syntax:** Pen Color( &lt;name|index|rgbList&gt; )

**Beschreibung:** Legt die Farbe zum Zeichnen von Linien fest.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( {.3, .5, .7} );
		Circle( {20, 20}, 10 );
	)
);

```

### Pen Size

**Syntax:** Pen Size( &lt;x&gt; )

**Beschreibung:** Legt die Stiftgröße in Pixel zum Zeichnen von Linien fest.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 4 );
		Line( [10 30 90], [88 22 44] );
	)
);

```

### Pi

**Syntax:** y = Pi()

**Beschreibung:** Gibt die mathematische Konstante π zurück, bis auf ca. 15 Dezimalziffern genau: 3.1415926535….

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Char( Pi(), 5 );

```

### Pick Color

**Syntax:** color = Pick Color( &lt;window title&gt;, &lt;name|index|rgbList&gt; )

**Beschreibung:** Gibt eine Farbe zurück, die mit der Standardfarbauswahl ausgewählt wurde.

**JMP Version hinzugefügt:** 14

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

**Syntax:** theme = Pick Color Theme( &lt;window title&gt;, &lt;Color Theme(name|specification)&gt;, &lt;Type("Continuous" | "Sequential" | "Bad to Good" | "Categorical")&gt;)

**Beschreibung:** Gibt ein Farbschema zurück, das mit der Standardfarbauswahl ausgewählt wurde. Das erste Schema kann explizit angegeben werden oder indem ein Type angegeben wird, um die Schemen aus den Voreinstellungen zu verwenden.

**JMP Version hinzugefügt:** 17

**Graphik erstellen**

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

**Legende für Zeilen**

```jsl


pickedTheme = Pick Color Theme( "Pick a Color Theme" );
biv = Open( "$SAMPLE_DATA/Big Class.jmp" ) << Run Script( "Bivariate" );
Report( biv )[FrameBox( 1 )] << Row Legend( "age", Color Theme( pickedTheme ) );

```

### Pick Directory

**Syntax:** path = Pick Directory( &lt;prompt&gt;, &lt;path&gt;, &lt;Show Files( boolean )&gt; )

**Beschreibung:** Erzeugt ein Fenster „Verzeichnis öffnen“ und gibt den Pfad des ausgewählten Verzeichnisses zurück. Die optionale Zeichenkette prompt wird im oberen Bereich des Fensters angezeigt. Bei Show Files kann es sich um eines der drei Argumente handeln, und akzeptiert wird ein Boolesches Argument. 1 zeigt Dateien im Verzeichnisauswahlfenster an, 0 zeigt keine Dateien an. Der Standardwert ist 0. Die Zeichenkette path gibt das Verzeichnis an, das zuerst im Verzeichnisauswahlfenster angezeigt wird. Wenn Sie die Zeichenkette path verwenden, muss sie auf die Zeichenkette prompt folgen, doch Show Files kann sich zwischen den beiden befinden.

**JMP Version hinzugefügt:** Vor Version 14

**Einfach**

```jsl

Pick Directory( "Select a directory" );

```

**Show Files**

```jsl

Pick Directory( "Select a directory", "$DOCUMENTS", Show Files( 1 ) );

```

### Pick File

**Syntax:** path = Pick File( &lt;prompt&gt;, &lt;initial directory&gt;, &lt;filterList&gt;, &lt;first filter&gt;, &lt;saveFlag=0|1&gt;, &lt;default file&gt;, &lt;multiple&gt; )

**Beschreibung:** Zeigt dem Benutzer das Fenster „Öffnen“ an und gibt den Pfad der ausgewählten Datei zurück. Das Argument filterList ist eine Liste von Zeichenketten im Format: „Bezeichnung|Suffix1;Suffix2;...“. Das Argument first filter gibt an, welcher Filter anfänglich gezeigt wird. Das fünfte Argument gibt an, ob das Fenster zum Speichern (saveFlag = 1) oder Öffnen (saveFlag = 0) dient. Das Argument default file gibt die anfänglich ausgewählte Datei an. Das Argument multiple ermöglicht, dass mehrere Dateien ausgewählt werden können, wenn saveFlag = 0.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

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

**Beispiel 2**

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

**Beispiel 3**

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

**Syntax:** pict = Picture Box( Picture Object )

**Beschreibung:** Erstellt ein Anzeigefeld, das ein Grafikbildobjekt enthält. Sie können entweder ein Bild öffnen und es dann referenzieren oder Sie können den Befehl zum Öffnen mit dem Pfad des Bilds anstelle des Arguments Picture Object verwenden.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

New Window( "Example",
	Picture Box( Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg ) )
);

```

**Beispiel 2**

```jsl

pict = Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg );
New Window( "Example", Picture Box( pict ) );

```

### Pie

**Syntax:** Pie( left, top, right, bottom, startAngle, endAngle )

**Beschreibung:** Zeichnet ein Stück im Tortendiagramm.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Pie( 10, 80, 70, 40, 0, 90 );
	)
);

```

### Pie Seg

**Syntax:** ps = Pie Seg(&lt;{ xorigin, yorigin }&gt;, &lt;radius&gt;, &lt;style("pie", "ring", "coxcomb")&gt;, values)

**Beschreibung:** Erstellt ein Tortensegment am angegebenen origin, mit dem angegebenen radius, basierend auf im Matrixformat angegebenen Werten.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Pixel Line To( h, v )

**Beschreibung:** Zeichnet eine Linie von den aktuellen pixelbasierten Stiftkoordinaten zu den vorgegebenen horizontalen und vertikalen Koordinaten.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Pixel Move To( h, v )

**Beschreibung:** Bewegt den pixeladressierten Stift zu den horizontalen und vertikalen Koordinaten relativ zum Ursprung.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Pixel Origin( x, y )

**Beschreibung:** Legt den Ursprung fest, auf dem Pixel-Zeichenbefehle basieren.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** PixelPath( h, v, pathMatrix|pathText, &lt;fill=0&gt;, &lt;scale=1.0&gt;, &lt;orient={0.0,1.0}&gt; )

**Beschreibung:** Zeichnet Linien entlang des angegebenen pixelbasierten Pfads, wenn „Füllen“ gleich 0 ist, oder färbt das Innere des angegebenen Pfads, wenn „Füllen“ ungleich 0 ist. Der Pfad kann mit einer Nx3-Matrix oder mit einer Textdarstellung angegeben werden. Eine Pfadmatrix hat drei Spalten für x, y und Flags für jeden Punkt im Pfad. Die Flag-Werte sind 0 für Steuern, 1 für Verschieben, 2 für Liniensegment, 3 für kubisches Bézier-Segment und sie sind negativ, wenn der Punkt den Pfad auch schließt. Der Pfadtext unterstützt die SVG-Syntax. Der Pfad wird gemäß der optionalen Parameter skaliert und um den Ursprung verschoben, unter Berücksichtigung der im Achsenraum angegebenen Orientierung.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Pixel Text( &lt;properties&gt;, {h, v}, text, ... )

**Beschreibung:** Verschiebt an die Pixelposition {h, v} und zeichnet Text, der vom Argument text angegeben wird. Benannte Eigenschaftsargumente sind u.a.: Center Justified, Right Justified, Top Align, Bottom Align, Erased, Boxed, Counterclockwise, Clockwise. Die Positionsargumente, benannten Argumente und Zeichenketten können in beliebiger Reihenfolge angegeben werden.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Platform( dataTable, script )

**Beschreibung:** Wertet das vorgegebene Skript im Kontext der angegebenen Datentabelle aus. Gibt das resultierende Anzeigefeld zum Einbetten in einem Anzeigebaum zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Beschreibung:** Setzt Plattformeinstellungen wie angegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Platform Preferences

**Syntax:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Beschreibung:** Setzt Plattformeinstellungen wie angegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Plot Col Box

**Syntax:** y = Plot Col Box( title, numbers )

**Beschreibung:** Gibt ein Anzeigefeld für die grafische Darstellung der Zahlen zurück Das Argument numbers kann eine Liste oder eine Matrix sein.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** cumprob = Poisson Distribution( lambda, k )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Poisson-verteilte Zufallsvariable kleiner oder gleich k ist. lambda ist der Mittelwertparameter und k ist die betrachtete Häufigkeit.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** prob = Poisson Probability( lambda, k )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Poisson-verteilte Zufallsvariable gleich k ist. lambda ist der Mittelwertparameter und k ist die betrachtete Häufigkeit.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Poisson Quantile( lambda, cumprob )

**Beschreibung:** Gibt das Quantil mit der kleinsten ganzen Zahl zurück, für das die kumulierte Wahrscheinlichkeit der Poisson-Verteilung ( lambda ) größer als oder gleich cumprob ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** ps = Poly Seg(x values, y values)

**Beschreibung:** Gibt ein Anzeigesegment zurück, das ein Polygon mit auf den übergebenen X- und Y-Werten basierenden Eckpunkten darstellt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Poly Seg Example", g = Graph Box( Poly Seg( x, y ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Poly Seg" ));

```

### Polygon

**Syntax:** Polygon( {x1, y1}, {x2, y2}, ..., &lt;&lt;fill(bool) ); Polygon( xMatrix, &lt;yMatrix&gt;, &lt;&lt;fill(bool) )

**Beschreibung:** Zeichnet das Polygon, das von den Punkten festgelegt wird.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** area = Polygon Area( {x1, y1}, {x2, y2}, ... );area = Polygon Area( xMatrix, yMatrix )

**Beschreibung:** Berechnet die Fläche des angegebenen Polygons.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

area = Polygon Area( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

**Beispiel 2**

```jsl

area = Polygon Area( [10 20 30], [10 30 20] );

```

### Polygon Centroid

**Syntax:** {cx, cy} = Polygon Centroid( {x1, y1}, {x2, y2}, ... );centroid = Polygon Centroid( xMatrix, yMatrix )

**Beschreibung:** Berechnet das Zentroid des angegebenen Polygons.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

{cx, cy} = Polygon Centroid( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

**Beispiel 2**

```jsl

centroid = Polygon Centroid( [10 20 30], [10 30 20] );

```

### Polygon Simplify

**Syntax:** rows = Polygon Simplify( xMatrix|xyMatrix, &lt;yMatrix&gt;, &lt;&lt;&lt;detail factor(f=200)&gt;, &lt;&lt;&lt;multiple(ids)&gt;, &lt;&lt;&lt;geodesic(bool)&gt; )

**Beschreibung:** Entfernt Punkte aus einem Polygon, die einen geringen Detailgrad aufweisen, und gibt die Indizes der verbleibenden Punkte zurück. detail factor ist umgekehrt proportional zur Detailfehlertoleranz. multiple(ids) zeigt an, dass viele Polygone gemeinsam vereinfacht werden sollten, damit gemeinsame Kanten einheitlich behandelt werden. ids ist eine Matrix mit einer Zeile pro Punkt. geodesic(1) gibt an, dass es sich bei den Koordinaten um Breiten- und Längengrade für die Entfernungsmessung handelt.

**JMP Version hinzugefügt:** 19

**Beispiel 1**

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

**Mehrere Polygone**

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

**Syntax:** points = Polytope Uniform Random( numSamples, A, b, L, U, neq, nle, nge, &lt;nwarm=200&gt;, &lt;nstride=25&gt; )

**Beschreibung:** Generiert gleichverteilte Punkte in einem konvexen Polytop. Das Argument numSamples gibt die Anzahl der zu erzeugenden zufälligen Punkte an. Das Argument A ist die Matrix der Nebenbedingungskoeffizienten. Das Argument B sind die rechten Seiten der Nebenbedingungen. Die Argumente L und U sind die untere und obere Schranke für die Variablen. Die Argumente neq, mle und nge ist die Anzahl der Gleichheitsnebenbedingungen, die Anzahl von Ungleichungen „kleiner als oder gleich“ und die Anzahl von Ungleichungen „größer als oder gleich“. Das Argument nwarm ist die Anzahl von Anfangswiederholungen, bevor Punkte in die Ausgabematrix geschrieben werden. Das Argument nstride ist die Anzahl der Wiederholungen zwischen jedem Punkt, der in die Ausgabematrix geschrieben wird. Beachten Sie, dass für die Nebenbedingungen zuerst die Gleichungen, danach die Ungleichungen „kleiner als oder gleich“ und zuletzt die Ungleichungen „größer als oder gleich“ aufgeführt werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

A = [1 1 1, 1 2 0];
b = [1, 0.5];
L = [0, 0, 0.1];
U = [1, 1, 1];
points = Polytope Uniform Random( 2000, A, b, L, U, 1, 0, 1, 300, 50 );
dt = As Table( points );
tobj = Report( Ternary Plot( X( :Col1, :Col2, :Col3 ) ) );
tfr = tobj[scalebox( 1 )] << clone box;
New Window( "Example: Polytope Uniform Random",
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

### Popup Box

**Syntax:** y = Popup Box( {label1, script1, ...} )

**Beschreibung:** Gibt ein Anzeigefeld mit einem Popup-Menü mit Paaren aus Beschriftung und Skript zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** x--; PostDecrement( x )

**Beschreibung:** Subtrahiert den Wert 1 von einer Variablen oder einer Liste von Variablen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ex = 1;
ex--;
ex;

```

### PostIncrement

**Syntax:** x++; PostIncrement( x )

**Beschreibung:** Addiert den Wert 1 zu einer Variablen oder einer Liste von Variablen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ex = 1;
ex++;
ex;

```

### Power

**Syntax:** z = x ^ y; z = Power( x, &lt;y=2&gt; )

**Beschreibung:** Gibt x hoch y zurück. Wenn x negativ ist, muss y eine ganze Zahl sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Power( 2, 5 );

```

### Pref

**Syntax:** Preferences( pref1( value1 ), ... )

**Beschreibung:** Setzt Voreinstellungen wie angegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Preference

**Syntax:** Preferences( pref1( value1 ), ... )

**Beschreibung:** Setzt Voreinstellungen wie angegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Preferences

**Syntax:** Preferences( pref1( value1 ), ... )

**Beschreibung:** Setzt Voreinstellungen wie angegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Prefs

**Syntax:** Preferences( pref1( value1 ), ... )

**Beschreibung:** Setzt Voreinstellungen wie angegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Present Value

**Syntax:** x = Present Value( rate, nper, pmt, &lt;fv=0&gt;, &lt;type=0&gt; )

**Beschreibung:** Gibt den aktuellen Wert einer Annuität zurück. Das Argument type ist 0, wenn Zahlungen am Ende des Zahlungszeitraums fällig sind, bzw. 1, wenn Zahlungen zu Beginn des Zeitraums fällig sind. Entspricht der PV-Funktion in Microsoft Excel.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Present Value( .05 / 12, 30 * 12, 1000 );

```

### Principal Payment

**Syntax:** x = Principal Payment( rate, per, nper, pv, &lt;fv=0&gt;, &lt;type=0&gt; )

**Beschreibung:** Gibt die Kapitalzahlung für einen bestimmten Zeitraum einer Annuität bei regelmäßigen, konstanten Zahlungen und einem konstanten Zinssatz zurück. Das Argument type ist 0, wenn Zahlungen am Ende des Zahlungszeitraums fällig sind, bzw. 1, wenn Zahlungen zu Beginn des Zeitraums fällig sind. Entspricht der PPMT-Funktion in Microsoft Excel.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Payment( .05 / 12, 30 * 12, 100000 ) - Interest Payment( .05 / 12, 13, 30 * 12, 100000 )
-Principal Payment( .05 / 12, 13, 30 * 12, 100000 );

```

### Print

**Syntax:** Print( x, ... )

**Beschreibung:** Zeigt Werte der Argumente im Log an, jeweils einen pro Zeile.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Print( 355 / 113, Pi() );

```

### Print Matrix

**Syntax:** s = Print Matrix( M, &lt;&lt;ignore locale( 0 ), &lt;&lt;style( "parseable" ), &lt;&lt;separate( ", " ), &lt;&lt;line begin( "[ " ), &lt;&lt;line end( " ]" ) )

**Beschreibung:** Druckt die Matrix M. Das optionale Argument ignore locale legt fest, ob beim Drucken der Dezimaltrennzeichen das Gebietsschema berücksichtigt werden soll. Dabei bedeutet Null, dass das Gebietsschema berücksichtigt wird. Das optionale Argument style legt fest, ob ein Stil verwendet werden soll, und welcher Stil verwendet werden soll. Die verfügbaren Stile sind analysierbar (parseable), d.h. ein neu formatierter JSL-Matrixausdruck, latex und other. Wenn für das Argument style die Option other angegeben ist, definieren die letzten drei optionalen Argumente das Anfangs- und Endzeichen der gedruckten Zeilen und die Trennzeichen von verketteten Einträgen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Normal Quantile( p, &lt;mu=0&gt;, &lt;sigma=1&gt; ); q = Probit( p )

**Beschreibung:** Gibt das Quantil einer Normalverteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Normal Quantile( 0.9 );

```

### Product

**Syntax:** y = Product( assignExpr, limit, bodyExpr )

**Beschreibung:** Gibt das Produkt der Auswertungen der Argumente bodyExpr zurück, wobei die Variable des Arguments assignExpr jedes Mal erhöht wird, bis sie größer oder gleich dem Argument limit ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

2 * Product( i = 1, 10000, 4 * i * i / (2 * i - 1) / (2 * i + 1) );

```

### Python Connect

**Syntax:** PythonConnection = Python Connect ()

**Beschreibung:** Gibt ein skriptfähiges Objekt der Python-Verbindung zurück.

**JMP Version hinzugefügt:** 14

```jsl

PythonConnection = Python Connect();
version = PythonConnection << Get Version;
Show( version );

```

### Python Create JPIP CMD

**Syntax:** Python Create JPIP CMD()

**Beschreibung:** Löst die Erstellung eines jpip-Befehlszeilen-Wrapper-Skripts für den Pip-Befehl von Python aus. Ein Verzeichnisauswahldialog fragt nach dem Verzeichnis, in dem das generierte Skript gespeichert werden soll. Dieses Skript stellt dann alle Funktionen von pip zur Verfügung und richtet gleichzeitig die erforderlichen Umgebungsvariablen für die isolierte Python-Umgebung von JMP korrekt ein.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

Python Create JPIP CMD();

```

**Beispiel 2**

```jsl

// install numpy and pandas packages
conn = Python Connect();
conn << Create JPIP CMD();

```

### Python Execute

**Syntax:** Python Execute( { list of Inputs }, { list of Outputs }, statements &lt; , echo( 1 | 0 ) &gt; )

**Beschreibung:** Sendet eine Liste von Eingaben, führt Anweisungen aus und gibt eine Liste von Ausgaben zurück. Der optionale Parameter echo() ist standardmäßig „wahr“. Der Parameter echo steuert das Echo der Python-Quelle im Protokoll. Das logische „wahr“ (1) aktiviert das Echo der Quelle, während 0 das Echo im Protokoll unterdrückt.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

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

**Beispiel 2**

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

**Syntax:** y = Python Get( name )

**Beschreibung:** Ruft Daten von Python ab. Das Argument name kann jeden der folgenden Python-Datentypen darstellen (numeric | string | matrix | list | dict | data table | data frame | datetime | numpy.datetime64).

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl


x1 = {1, 2, 3};
Python Send( x1 );
x2 = Python Get( x1 );
Show( x1, x2 );

```

**Datetime**

```jsl


date1 = As Date( Today() );
Python Send( date1 );
date2 = Python Get( date1 );
Show( date1, date2 );

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

**Syntax:** version = Python Get Version()

**Beschreibung:** Gibt die Versionsnummer von Python zurück, die mit den Python-Schnittstellen in JMP verwendet wird.

**JMP Version hinzugefügt:** 14

```jsl

version = Python Get Version();
Show( version );

```

### Python Init

**Syntax:** PythonConnection = Python Init( )

**Beschreibung:** Hinweis: Diese Funktion ist seit JMP 18 veraltet und entspricht Python Connect().

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl


Python Init();
Python Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
]\" );
getStr = Python Get( str );
Show( getStr );

```

**Beispiel 2**

```jsl


PythonConnection = Python Init();
PythonConnection << Submit( "\[
str = 'The quick brown fox jumps over the lazy dog';
]\" );
getStr = Python Get( str );
Show( getStr );

```

### Python Install Packages

**Syntax:** Python Install Packages( packages )

**Beschreibung:** Dies umhüllt die Installation von Python-Paketen im JMP-Verzeichnis der Pakete. Für Operationen, die über eine einfache Paketinstallation hinausgehen, siehe Python Create JPIP CMD(), um ein Befehlszeilen-Pip-Wrapper-Skript in einem mit Directory Pick() gewählten Verzeichnis zu erstellen. Alternativ können Sie die Installation von einem JMP-Python-Skriptfenster aus starten, siehe jmputils.jpip in der Kategorie „Python“ hier im Skriptindex.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

// install numpy and pandas packages
Python Install Packages( "numpy pandas" );

```

**Beispiel 2**

```jsl

// install numpy and pandas packages
Python Install Packages( {"numpy", "pandas"} );

```

**Beispiel 3**

```jsl

// install numpy and pandas packages
conn = Python Connect();
conn << Install Packages( "numpy pandas" );

```

### Python Is Connected

**Syntax:** connected = Python Is Connected()

**Beschreibung:** Hinweis: Diese Funktion ist seit JMP 18 veraltet und gibt immer 1 zurück.

**JMP Version hinzugefügt:** 14

```jsl

x = Python Is Connected();
Show( x );

```

### Python JMP Name to Python Name

**Syntax:** Python name = Python JMP Name To Python Name( JMP name )

**Beschreibung:** Ordnet einen JMP-Variablennamen einem Python-Variablennamen zu und verwendet Namensregeln von Python-Variablen.

**JMP Version hinzugefügt:** 14

```jsl

Python name = Python JMP Name to Python Name( a b c );
Show( Python name );

```

### Python Reset

**Syntax:** Python Reset()

**Beschreibung:** Resets the shared Python environment, primarily clearing all references to objects. This does not change the import cache of imported modules. This is a limitation of the Python environment itself.  Modules that load shared libraries cannot be unloaded by the running process. To reload pure Python code, see the Python.org documentation on importlib reload().

**JMP Version hinzugefügt:** 19

```jsl

pi = 3.1415927;
Python Send( pi );
Python Submit( "print(pi)" );
Python Reset();
// will show error, pi not defined
Python Submit( "print(pi)" );

```

### Python Send

**Syntax:** Python Send( name, &lt;Python Name( name ) | "as_name" &gt; )

**Beschreibung:** Sends data to Python, where the name argument can represent any of the following JMP data types ( numeric | string | matrix | list | data table | data table column | date ).

**JMP Version hinzugefügt:** 14

**Datentabelle**

```jsl


x = {1, 2, 3};
Python Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt );
Python Submit( "print(x)" );
Python Submit( "print(dt)" );

```

**Datum**

```jsl


date = As Date( Today() );
Python Send( date );
Python Submit( "print(date)" );

```

**Spalte**

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Python Send( dt:weight );
Python Submit( "print(weight)" );

```

### Python Send File

**Syntax:** Python Send File( filename, &lt;Python Name( name )&gt; )

**Beschreibung:** Sendet eine Datendatei an Python; dabei ist das filename-Argument eine Zeichenkette, die den Pfadnamen der an Python zu sendenden Datei angibt.

**JMP Version hinzugefügt:** 14

```jsl


Python Send File( "$SAMPLE_DATA/Big Class.jmp" );
Python Send File( "$SAMPLE_DATA/Baseball.jmp" );
Python Submit( "print(Big_Class)" );
Python Submit( "print(Baseball)" );

```

### Python Submit

**Syntax:** Python Submit( statements &lt; , echo( 1 | 0 ) &gt; )

**Beschreibung:** Übergibt Anweisungen an Python. Anweisungen können in Form eines Zeichenkettenwerts oder einer Liste von Zeichenkettenwerten vorliegen. Der optionale Parameter echo() hat den Standardwert 1. Der Parameter echo steuert das Echo der Python-Quelle im Protokoll. Das logische „wahr“ (1) aktiviert das Echo der Quelle, während 0 das Echo im Protokoll unterdrückt.

**JMP Version hinzugefügt:** 14

```jsl

Python Submit( "\[
str = 'The quick brown fox jumps over the lazy dog'
a = 200]\" );
getStr = Python Get( str );
getNum = Python Get( a );
Show( getStr, getNum );

```

### Python Submit File

**Syntax:** Python Submit File( path )

**Beschreibung:** Sendet Anweisungen an Python und verwendet dafür eine Datei, die vom Argument path angegeben wird.

**JMP Version hinzugefügt:** 14

```jsl

Python Submit File( "some_Python_source.py" );

```

### Python Term

**Syntax:** Python Term()

**Beschreibung:** Hinweis: Diese Funktion ist seit JMP 18 veraltet und hat keine Auswirkungen.

**JMP Version hinzugefügt:** 14

### QR

**Syntax:** {Q, R} = QR( X )

**Beschreibung:** Erstellt eine orthogonale Matrix Q (m x m) und eine obere Dreiecksmatrix R (m x n), so dass X = Q * R ist Das Argument X ist eine (m x n)-Matrix.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

QR( [11 22, 33 44] );

```

### QR LAPACK

**Syntax:** {Q, R} = QR LAPACK( X )

**Beschreibung:** Erstellt eine orthogonale Matrix Q (m x k) und eine obere Dreiecksmatrix R (k x n), so dass X = Q * R ist. Das Argument X ist eine Matrix m x n, wobei k=min(m, n) ist.

**JMP Version hinzugefügt:** 17

```jsl

QR LAPACK( [11 22, 33 44] );

```

### Quadratic Form BLAS

**Syntax:** y = Quadratic Form BLAS( A, x )

**JMP Version hinzugefügt:** 17

```jsl

A = [2 0, 0 2];
x = [2, 3];
y = Quadratic Form BLAS( A, x );

```

### Quantile

**Syntax:** y = Quantile( p, x1, ... )

**Beschreibung:** Gibt das angegebene Quantil p der Argumente x zurück. Das Quantilargument kann skalar oder eine Matrix sein. Die Werte x können auch als Werte innerhalb einer einzelnen Matrix oder eines Listenarguments angegeben werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List(
	{Quantile( 0.75, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ),
	Quantile( 0.5, [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] )}
);

```

### Quarter

**Syntax:** q = Quarter( datetime )

**Beschreibung:** Gibt das Quartal eines Datum/Uhrzeit-Werts zurück, 1 bis 4.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Quarter( Today() );

```

### Query

**Syntax:** result = Query( &lt; &lt; dt1 | Table( dt1, alias1 ) &gt;, ..., &lt; dtN | Table( dtN, aliasN ) &gt; &gt;, &lt;Private|Invisible&gt;, &lt;Scalar&gt;, sqlStatement )

**Beschreibung:** Eine SQL-Abfrage auf JMP-Datentabellen durchführen. sqlStatement (die SQL-Abfrage, wahrscheinlich eine SELECT-Anweisung) ist erforderlich und muss das letzte Argument sein. Von der SQL-Anweisung referenzierte JMP-Datentabellen müssen als Argumente an Query() übergeben werden, wobei mittels Table(dt, "Alias") ein Alias für die Tabelle erstellt wird, den die SQL ggf. verwenden kann. „Unsichtbar“ oder „Privat“ kann übergeben werden, um die Sichtbarkeit der resultierenden Datentabelle zu steuern. Wenn die SQL-Anweisung einen einzelnen Wert zurückgibt, übergeben Sie „Skalar“, wodurch statt einer Datentabelle der einzelne Wert zurückgegeben wird.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Quit(&lt;"No Save"&gt;); Exit(&lt;"No Save"&gt;)

**Beschreibung:** Beendet JMP.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** RConnection = R Connect()

**Beschreibung:** Gibt ein skriptfähiges Objekt einer R-Verbindung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

RConnection = R Connect();

```

### R Control

**Syntax:** R Control( Interrupt | Async( bool ) | Echo( bool ) )

**Beschreibung:** Ändert die Kontrolloptionen für R

**JMP Version hinzugefügt:** Vor Version 14

```jsl

R Init( Echo( true ) );
R Control( Echo( false ) );
R Submit( "Add R code" );

```

### R Execute

**Syntax:** R Execute( { list of Inputs }, { list of Outputs }, statements )

**Beschreibung:** Sendet eine Liste von Eingaben, führt Anweisungen aus und gibt eine Liste von Ausgaben zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = R Get( name )

**Beschreibung:** Ruft Daten von R ab. Das Argument name kann jeden der folgenden R-Datentypen darstellen (Numerisch | Zeichenkette | Matrix | Liste | Datenfeld).

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** R graphics = R Get Graphics( format )

**Beschreibung:** VERALTET in JMP 19 und hat keine Wirkung. Als Ersatz setzen Sie das Gerät auf einen Dateinamen wie png(„r_plot.png“) und öffnen dann die Datei, um das Bild abzurufen. Diese Option wird aus JMP 20 entfernt. Der folgende Code zeigt eine Abhilfe.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** version = R Get Version()

**Beschreibung:** Gibt die Versionsnummer von R zurück, die mit den R-Schnittstellen in JMP verwendet wird.

**JMP Version hinzugefügt:** 14

```jsl

R Init();
version = R Get Version();
Show( version );

```

### R Init

**Syntax:** R Init()

**Beschreibung:** Initialisiert die R-Schnittstellen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

R Init();

```

### R Is Connected

**Syntax:** connected = R Is Connected()

**Beschreibung:** Gibt 1 zurück, wenn eine aktive R-Verbindung besteht, andernfalls wird 0 zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

R Init();
connected = R Is Connected();

```

### R JMP Name to R Name

**Syntax:** R name = R JMP Name To R Name( JMP name )

**Beschreibung:** Ordnet einen JMP-Variablennamen einem R-Variablennamen zu und verwendet Namensregeln von R-Variablen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

R name = R JMP Name to R Name( a b c );

```

### R Send

**Syntax:** R Send( name, &lt;R Name( as_name ) | "as_name"&gt; )

**Beschreibung:** Sendet Daten an R. Das Argument name kann jeden der folgenden JMP-Datentypen darstellen (numeric | string | matrix | list | data table | data table column).

**JMP Version hinzugefügt:** Vor Version 14

**Datentabelle**

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

**Spalte**

```jsl

R Init();
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
R Send( dt:weight );
Close( dt );
w = R Get( "weight" );

```

### R Send File

**Syntax:** R Send File( filename, &lt;R Name( name )&gt; )

**Beschreibung:** Sendet eine Datendatei an R; dabei ist das filename-Argument eine Zeichenkette, die den Pfadnamen der an R zu sendenden Datei angibt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

R Init();
R Send File( "$SAMPLE_DATA/Big Class.jmp" );
R Send File( "$SAMPLE_DATA/Baseball.jmp" );
R Submit( "Big.Class" );
R Submit( "Baseball" );

```

### R Submit

**Syntax:** R Submit( statements )

**Beschreibung:** Sendet Anweisungen an R. Anweisungen können in Form einer Zeichenkette oder einer Liste von Zeichenketten sein.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** R Submit File( path )

**Beschreibung:** Sendet Anweisungen an R und verwendet dafür eine Datei, die vom Argument path angegeben wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


R Init();
file_path = Get Path Variable( "SAMPLE_SCRIPTS" ) || "R/SI_example.R";
R Submit File( file_path );

```

### R Term

**Syntax:** R Term()

**Beschreibung:** Veraltet in JMP 19 und hat keine Wirkung.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

R Init();
R Term();

```

### Radio Box

**Syntax:** y = Radio Box( {item, ...}, &lt;script&gt; )

**Beschreibung:** Erzeugt ein Anzeigefeld für die Anzeige mehrerer runder Optionsfelder.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	rb = Radio Box( {"single", "double", "triple"}, Show( rb << Get() ) )
);

```

### Random Beta

**Syntax:** y = Random Beta( alpha, beta, &lt;theta=0&gt;, &lt;sigma=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer Beta-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


//produce a single random number
x = Random Beta( 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Beta( 1, 1 ) );
//show results
Show( x, v );

```

### Random Beta Binomial

**Syntax:** y = Random Beta Binomial( n, p, &lt;delta=0&gt; )

**Beschreibung:** Gibt für n Versuche mit der Wahrscheinlichkeit p und Korrelation delta eine Zufallszahl aus einer Beta-Binomialverteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


//produce a single random number
x = Random Beta Binomial( 14, .5, .2 );
//produce a vector of random numbers
v = J( 1, 10, Random Beta Binomial( 14, .5, .2 ) );
//show results
Show( x, v );

```

### Random Binomial

**Syntax:** y = Random Binomial( n, p )

**Beschreibung:** Gibt eine Zufallszahl aus einer Binomialverteilung mit n Versuchen und Ereigniswahrscheinlichkeit p zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Random Category( probabilityA, resultA, probabilityB, resultB, resultElse )

**Beschreibung:** Gibt eine zufällige Kategorie mit vorgegebenen Paaren aus Wahrscheinlichkeit und Ergebnisausdrücken zurück. Es wird eine gleichverteilte Zufallszahl erzeugt und mit den Wahrscheinlichkeitsargumenten verglichen, um zu ermitteln, welches Ergebnisargument zurückgegeben wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Random Category( .2, "A", .3, "B", .4, "C", "D" );

```

### Random Cauchy

**Syntax:** y = Random Cauchy()

**Beschreibung:** Gibt eine Zufallszahl aus einer Cauchy-Verteilung mit einem Median von 0 zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


//produce a single random number
x = Random Cauchy();
//produce a vector of random numbers
v = J( 1, 10, Random Cauchy() );
//show results
Show( x, v );

```

### Random ChiSquare

**Syntax:** y = Random ChiSquare( df, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer Chi-Quadrat-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


//produce a single random number
x = Random ChiSquare( 2 );
//produce a vector of random numbers
v = J( 1, 10, Random ChiSquare( 2 ) );
//show results
Show( x, v );

```

### Random ExGaussian

**Syntax:** y = Random ExGaussian( location, scale, shape)

**Beschreibung:** Gibt eine Zufallszahl aus einer Ex-Gaußschen Verteilung zurück.

**JMP Version hinzugefügt:** 18

```jsl


//produce a single random number
x = Random ExGaussian( 0, .5, .25 );
//produce a vector of random numbers
v = J( 1, 10, Random ExGaussian( 0, .5, .25 ) );
//show results
Show( x, v );

```

### Random Exp

**Syntax:** y = Random Exp()

**Beschreibung:** Gibt eine Zufallszahl aus einer Exponentialverteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


//produce a single random number
x = Random Exp();
//produce a vector of random numbers
v = J( 1, 10, Random Exp() );
//show results
Show( x, v );

```

### Random F

**Syntax:** y = Random F( dfnum, dfden, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer F-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


//produce a single random number
x = Random F( 2, 2 );
//produce a vector of random numbers
v = J( 1, 10, Random F( 2, 2 ) );
//show results
Show( x, v );

```

### Random Frechet

**Syntax:** y = Random Frechet( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer Frechet-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


//produce a single random number
x = Random Frechet( 10, 5 );
//produce a vector of random numbers
v = J( 1, 10, Random Frechet( 10, 5 ) );
//show results
Show( x, v );

```

### Random Gamma

**Syntax:** y = Random Gamma( alpha, &lt;scale=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer Gamma-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


//produce a single random number
x = Random Gamma( 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Gamma( 1 ) );
//show results
Show( x, v );

```

### Random Gamma Poisson

**Syntax:** y = Random Gamma Poisson( lambda, &lt;sigma=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer Gamma-Poisson-Verteilung mit den Parametern lambda und sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


//produce a single random number
x = Random Gamma Poisson( 3, 2 );
//produce a vector of random numbers
v = J( 1, 10, Random Gamma Poisson( 3, 2 ) );
//show results
Show( x, v );

```

### Random GenGamma

**Syntax:** y = Random GenGamma( &lt;mu=0&gt;, &lt;sigma=1&gt;, &lt;lambda=0&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer erweiterten verallgemeinerten Gamma-Verteiliung mit den Parametern mu, sigma und lambda zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


//produce a single random number
x = Random GenGamma( 2, 1.25 );
//produce a vector of random numbers
v = J( 1, 10, Random GenGamma( 2, 1.25 ) );
//show results
Show( x, v );

```

### Random Geometric

**Syntax:** y = Random Geometric( p )

**Beschreibung:** Gibt für Ereignisse mit der Wahrscheinlichkeit p eine Zufallszahl von Nicht-Ereignissen zurück, bis ein Ereignis auftritt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Random GLog( mu, sigma, lambda )

**Beschreibung:** Gibt eine Zufallszahl aus einer verallgemeinerten logarithmischen Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


//produce a single random number
x = Random GLog( 4, 1, 0.1 );
//produce a vector of random numbers
v = J( 1, 10, Random GLog( 4, 1, 0.1 ) );
//show results
Show( x, v );

```

### Random Index

**Syntax:** x = Random Index( n, k )

**Beschreibung:** Gibt eine k x 1 Matrix von zufälligen ganzen Zahlen zwischen 1 und n ohne doppelte Werte zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Random Index( 100, 5 );

```

### Random Integer

**Syntax:** y = Random Integer( n ); Random Integer( k, n )

**Beschreibung:** Gibt eine ganzzahlige (Pseudo-)Zufallszahl zwischen 1 und n (oder zwischen k und n) einschließlich zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


//produce a single random number
x = Random Integer( 1, 10 );
//produce a vector of random numbers
v = J( 1, 10, Random Integer( 1, 10 ) );
//show results
Show( x, v );

```

### Random Johnson Sb

**Syntax:** y = Random Johnson Sb( gamma, delta, theta, sigma )

**Beschreibung:** Gibt eine Zufallszahl aus einer Johnson-Sb-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


//produce a single random number
x = Random Johnson Sb( 0.5, 1, 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Johnson Sb( 0.5, 1, 1, 1 ) );
//show results
Show( x, v );

```

### Random Johnson Sl

**Syntax:** y = Random Johnson Sl( gamma, delta, theta, &lt;sigma=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer Johnson-Sl-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


//produce a single random number
x = Random Johnson Sl( 0.5, 1, 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Johnson Sl( 0.5, 1, 1, 1 ) );
//show results
Show( x, v );

```

### Random Johnson Su

**Syntax:** y = Random Johnson Su( gamma, delta, theta, sigma )

**Beschreibung:** Gibt eine Zufallszahl aus einer Johnson-Su-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


//produce a single random number
x = Random Johnson Su( 0.5, 1, 1, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Johnson Su( 0.5, 1, 1, 1 ) );
//show results
Show( x, v );

```

### Random LEV

**Syntax:** y = Random LEV( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer LEV-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


//produce a single random number
x = Random LEV( 10, 5 );
//produce a vector of random numbers
v = J( 1, 10, Random LEV( 10, 5 ) );
//show results
Show( x, v );

```

### Random LogGenGamma

**Syntax:** y = Random LogGenGamma( &lt;mu=0&gt;, &lt;sigma=1&gt;, &lt;lambda=0&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer verallgemeinerten Log-Gamma-Verteilung mit den Parametern mu, sigma und lambda zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


//produce a single random number
x = Random LogGenGamma( 2, 1.25 );
//produce a vector of random numbers
v = J( 1, 10, Random LogGenGamma( 2, 1.25 ) );
//show results
Show( x, v );

```

### Random Logistic

**Syntax:** y = Random Logistic( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer logistischen Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


//produce a single random number
x = Random Logistic( 15, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Logistic( 15, 1 ) );
//show results
Show( x, v );

```

### Random Loglogistic

**Syntax:** y = Random Loglogistic( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer log-logistischen Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


//produce a single random number
x = Random Loglogistic( 15, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random Loglogistic( 15, 1 ) );
//show results
Show( x, v );

```

### Random Lognormal

**Syntax:** y = Random Lognormal( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer Lognormal-Verteilung mit den Parametern mu und sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl


//produce a single random number
x = Random Lognormal( -1, 1.5 );
//produce a vector of random numbers
v = J( 1, 10, Random Lognormal( -1, 1.5 ) );
//show results
Show( x, v );

```

**Beispiel 2**

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

**Syntax:** y = Random Multivariate Normal( mean, covar, &lt;nrows=1&gt;)

**Beschreibung:** Gibt eine zufällige nrows-x-p-Matrix aus einer multivariaten Normalverteilung mit Erwartungswertvektor mean und (positiv semidefiniter) Kovarianzmatrix covar zurück, wobei p als Anzahl der Zeilen von covar definiert ist.

**JMP Version hinzugefügt:** 15

```jsl

meanvec = 1 :: 3;
covar = [1 .6 .6, .6 1 .6, .6 .6 1];
randmvnRow = Random Multivariate Normal( meanvec, covar );
randmvnMat = Random Multivariate Normal( meanvec, covar, 10 );

```

### Random Negative Binomial

**Syntax:** y = Random Negative Binomial( r, p )

**Beschreibung:** Gibt für Ereignisse mit der Wahrscheinlichkeit p eine Zufallszahl von Nicht-Ereignissen zurück, bis r Ereignisse aufgetreten sind.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Random Normal( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer Normalverteilung mit Mittelwert Mu und Standardabweichung Sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl


//produce a single random number
x = Random Normal();
//produce a vector of random numbers
v = J( 1, 10, Random Normal() );
//show results
Show( x, v );

```

**Beispiel 2**

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

**Syntax:** y = Random Normal Mixture( meanvec, sdvec, probvec )

**Beschreibung:** Gibt eine Zufallszahl aus einer Mischung aus Normalverteilungen mit den Gruppenmittelwerten meanvec, den Standardabweichungen der Gruppe sdvec und den Gruppenwahrscheinlichkeiten probvec zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Random Poisson( lambda )

**Beschreibung:** Gibt eine Zufallszahl aus einer Poisson-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Random Reset( seed number )

**Beschreibung:** Startet die Zufallssequenzen mit einem neuen Startwert neu.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Random Reset( 1 );
Random Normal();

```

### Random Seed State

**Syntax:** Random Seed State( &lt;seed state&gt; )

**Beschreibung:** Ruft den Zustand des Zufallszahlenstartwerts aus einem Blob-Objekt ab oder stellt ihn in einem Blob-Objekt wieder her.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

r = Random Seed State();
Random Seed State( r );

```

### Random SEV

**Syntax:** y = Random SEV( &lt;mu=0&gt;, &lt;sigma=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer SEV-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


//produce a single random number
x = Random SEV( 50, 5 );
//produce a vector of random numbers
v = J( 1, 10, Random SEV( 50, 5 ) );
//show results
Show( x, v );

```

### Random SHASH

**Syntax:** y = Random SHASH( gamma, delta, theta, sigma )

**Beschreibung:** Gibt eine Zufallszahl aus der SHASH-Verteilung (sinh-arcsinh) zurück.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl


//produce a single random number
x = Random SHASH( 0, 1, 0, 1 );
//produce a vector of random numbers
v = J( 1, 10, Random SHASH( 0, 1, 0, 1 ) );
//show results
Show( x, v );

```

**SHASH-Transformation**

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

**Syntax:** y = Random Shuffle( matrix )

**Beschreibung:** Gibt die Matrix zurück, wobei die Elemente in zufälliger Reihenfolge angeordnet werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

exA = [1 2 6, 3 5 8];
Random Shuffle( exA );

```

### Random SVD

**Syntax:** {U, M, V} = Random SVD( X , &lt;nSingularValues=min(nRow,nCol)&gt;, &lt;nOver=10&gt;, &lt;nIter=2&gt;)

**Beschreibung:** Berechnet die Singulärwertzerlegung der Matrix X mithilfe der randomisierten Singulärwertzerlegung, indem eine Liste {U, M, V} zurückgegeben wird, so dass U*diag(M)*V` gleich X ist.

**JMP Version hinzugefügt:** 17

```jsl

Random SVD( [11 22, 33 44], 1 );

```

### Random t

**Syntax:** y = Random t( df, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer t-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


//produce a single random number
x = Random t( 2 );
//produce a vector of random numbers
v = J( 1, 10, Random t( 2 ) );
//show results
Show( x, v );

```

### Random Triangular

**Syntax:** y = Random Triangular( a, b, c );y = Random Triangular( b, c );y = Random Triangular( b )

**Beschreibung:** Gibt eine Zufallszahl aus einer Dreiecksverteilung mit unterer Grenze a, Modus b und oberer Grenze c zurück. Random Triangular(b,c) ist äquivalent mit Random Triangular(0,b,c). Random Triangular(b) ist äquivalent mit Random Triangular(0,b,1).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Random Reset( 13579 );
x = Random Triangular( 0.8 );
Random Reset( 13579 );
y = Random Triangular( 0, 0.8, 1 );
Show( x, y );

```

### Random Uniform

**Syntax:** y = Random Uniform( &lt;min&gt;, &lt;max&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer Gleichverteilung zwischen min. und max. exklusive zurück.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl


//produce a single random number
x = Random Uniform( 1, 10 );
//produce a vector of random numbers
v = J( 1, 10, Random Uniform( 1, 10 ) );
//show results
Show( x, v );

```

**Beispiel 2**

```jsl

Random Uniform( 1, 10 );

```

### Random Weibull

**Syntax:** y = Random Weibull( beta, &lt;alpha=1&gt; )

**Beschreibung:** Gibt eine Zufallszahl aus einer Weibull-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


//produce a single random number
x = Random Weibull( 3, 20 );
//produce a vector of random numbers
v = J( 1, 10, Random Weibull( 3, 20 ) );
//show results
Show( x, v );

```

### Random ZI Negative Binomial

**Syntax:** y = Random ZI Negative Binomial( lambda, sigma, pi )

**Beschreibung:** Gibt eine Zufallszahl aus einer zero-inflated negativen Binomialverteilung zurück mit Lageparameter lambda, Skalenparameter sigma und Zero-inflation-Parameter pi.

**JMP Version hinzugefügt:** 19

**Beispiel 1**

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

**Beispiel 2**

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

**Syntax:** y = Random ZI Poisson Binomial( lambda, pi )

**Beschreibung:** Gibt eine Zufallszahl aus einer zero-inflated Poisson-Verteilung zurück mit Lageparameter lambda und Zero-inflation-Parameter pi.

**JMP Version hinzugefügt:** 19

**Beispiel 1**

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

**Beispiel 2**

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

**Syntax:** y = Range( x1, ... )

**Beschreibung:** Gibt die Minimum- und Maximumwerte unter den kombinierten Argumenten zurück, die Skalar-, Matrix- oder Listenargumente sein können.

**JMP Version hinzugefügt:** 15

```jsl

Eval List( {Range( Pi(), e() ), Range( [33 44 22] )} );

```

### Range Slider Box

**Syntax:** y = Range Slider Box( minValue, maxValue, lowVariable, highVariable, script )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das einen Bereichsschieberegler mit einem Bereich von minValue bis maxValue anzeigt. Werden die Positionen der beiden Schieberegler verändert, werden ihre Werte in lowVariable und highVariable abgelegt und das Skript ausgeführt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Rank Index( x )

**Beschreibung:** Gibt einen Vektor von Indizes zurück, der, wenn er als Indizierung des ursprünglichen Vektors x verwendet wird, den Vektor nach Rang ordnet. Fehlende Werte werden ausgeschlossen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Rank( [33, 22, 44, 11, ., 33] );

```

### Rank Index

**Syntax:** y = Rank Index( x )

**Beschreibung:** Gibt einen Vektor von Indizes zurück, der, wenn er als Indizierung des ursprünglichen Vektors x verwendet wird, den Vektor nach Rang ordnet. Fehlende Werte werden ausgeschlossen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Rank Index( [33, 22, 44, 11, ., 33] );

```

### Ranking

**Syntax:** y = Ranking( x, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**Beschreibung:** Gibt einen Vektor der Ränge der Werte von x zurück, zwischen niedrig und hoch von 1 bis n, bei Ranggleichheit arbiträr.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Ranking( [33, 22, 44, 11, 33] );
Ranking( [22, 11, 33, 11, 44, 55, 44, 44, 44], <<Tie( "minimum" ) );

```

### Ranking Tie

**Syntax:** y = Ranking Tie( x, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**Beschreibung:** Gibt einen Vektor von Rängen der Werte von x zurück, Ränge bei Ranggleichheit gemittelt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Ranking Tie( [33, 22, 44, 11, 33] );

```

### Recode

**Syntax:** recode(string|number|list, {&lt;transform&gt;, ...}, &lt;Multiple Response (Separator(sepChar))&gt;, &lt;By Word(Delimiters(&lt;chars&gt;)&gt;)

**Beschreibung:** Wendet die aufgeführten Transformationen auf die Eingabewerte an und gibt das Ergebnis zurück. Die Optionen Mehrfachantwort und Nach Wort teilen die gelieferten Zeichendaten in kleinere Eingabewerte auf. Sobald die Eingabewerte bestimmt sind, werden die Transformationen auf diese Werte separat angewendet.

Spezielle JSL-Variablen werden während der Ausführung des Befehls gefüllt:

	_rcNow ist der aktuelle Wert der Eingabe nach der/den vorherigen Transformation(en).

	_rcOrig ist der ursprüngliche Wert der Eingabe.

**JMP Version hinzugefügt:** 15

**Beispiel 1**

```jsl

Recode(
	"27513-0000",
	{Regex( _rcNow, "(\d\d\d\d\d)-\d+", "\1", GLOBALREPLACE ), Num( _rcNow )}
);

```

**Beispiel 2**

```jsl

Recode(
	"A B C",
	{Map Value( _rcNow, {"A", "Apple", "B", "Banana"}, Unmatched( "Unknown fruit" ) )},
	By Word
);

```

### Rect

**Syntax:** Rect( left, top, right, bottom, &lt;fill=0&gt; ); Rect( {left, top}, {right, bottom} )

**Beschreibung:** Zeichnet ein Rechteck, ausgefüllt, wenn „fill“ ungleich 0 ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Recurse( x1, ... )

**Beschreibung:** Calls the containing function.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** result = Regex( source, pattern, &lt;format, &lt;IGNORECASE&gt;, &lt;GLOBALREPLACE&gt;&gt; )

**Beschreibung:** Sucht im Text source nach einer Übereinstimmung mit pattern. Das format ist standardmäßig „\\0“ (gesamte Übereinstimmung), kann jedoch auch „Fred“ (bei konstantem Ersetzen) oder „\\1“ sein (um den Text in Übereinstimmung mit der ersten Klammer in pattern zu verwenden). Gibt numerisch fehlend zurück, wenn es keine Übereinstimmung gibt. Die Groß-/Kleinschreibung muss standardmäßig übereinstimmen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Regex(
	"   Are you there Alice?, asked Jerry.",
	" (here|there) (\w+).+(said|asked) (\w+)\.",
	"  I am \1, \4, replied \2."
);

```

### Regex Match

**Syntax:** Regex Match( source, pattern, &lt;replacement | NULL&gt;, &lt;MATCHCASE&gt; )

**Beschreibung:** Führt eine Übereinstimmung von regulären Ausdrücken durch und gibt eine Liste des gesamten verglichenen Texts zurück sowie die Übereinstimmungen für jeden Rückverweis, erstellt durch eine offene Klammer. Optional gibt das dritte Argument eine Ersetzungszeichenkette für die gesamte Übereinstimmung an. Die Ersetzungszeichenkette kann Rückverweise verwenden.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Register Addin( uniqueId, homeFolder, &lt;displayName(name)&gt;, &lt;MinJMPVersion(version)&gt;, &lt;MaxJMPVersion(version)&gt;, &lt;LoadsAtStartup(autoLoad)&gt;, &lt;LoadNow(load)&gt; )

**Beschreibung:** Registriert ein Add-in.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Register Addin(
	"com.mycompany.myaddin",
	"$DOCUMENTS/myaddin",
	displayname( "Sample Addin" )
);

```

### Reload Policies

**Syntax:** Reload Policies()

**JMP Version hinzugefügt:** 18

### Remove

**Syntax:** y = Remove( x, &lt;i&gt;, &lt;n=1&gt; ); y = Remove( x, {list} )

**Beschreibung:** Gibt eine Kopie der Liste x zurück, löscht dabei n Elemente mit Beginn bei dem i-ten Element, oder löscht eine Liste mit Elementen, die vom Argument list angegeben sind.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Remove( {11, 22, 33, 44, 55}, 3, 2 );

```

### Remove Color Theme

**Syntax:** Remove Color Theme("Name"|{"Name", &lt;flags&gt;, {color, ...}, &lt;{position, ...}&gt;})

**Beschreibung:** Entfernt ein benutzerdefiniertes Farbschema aus der globalen Liste, entweder nach Name oder nach dem vollständigen Farbschema-Objekt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Remove Color Theme( "Yellow To Blue" );

```

### Remove Custom Functions

**Syntax:** Remove Custom Functions({function 1 full name, function 2 full name, ...} | function full name)

**Beschreibung:** Entfernt eine Liste von benutzerdefinierten Funktionen aus der Umgebung.

**JMP Version hinzugefügt:** 14

```jsl

Remove Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Remove From

**Syntax:** Remove From( x, &lt;i&gt;, &lt;n=1&gt; )

**Beschreibung:** Ändert eine Liste, ein assoziatives Array oder ein Anzeigefeld x durch Entfernen von Elementen. Bei assoziativen Arrays wird das zu entfernende Element durch einen Schlüsselwert i angegeben. Bei Listen und Anzeigefeldern erfolgt das Entfernen ab dem Element an Position i. Bei einer Liste werden mehrere Elemente gleichzeitig entfernt, wenn die Option n angegeben ist. Beachten Sie, dass das Argument x eine Variable sein muss.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

ex = {11, 22, 33, 44, 55};
Remove From( ex, 3, 2 );
ex;

```

**Beispiel 2**

```jsl

ex = ["a" => 10, "b" => 3, "c" => 12, => 0];
Remove From( ex, "c" );
ex;

```

**Beispiel 3**

```jsl

New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Remove From( hlist, 1 );

```

### Rename Directory

**Syntax:** rc = Rename Directory( old, new )

**Beschreibung:** Benennt ein Verzeichnis um, ohne es zu verschieben oder zu kopieren; der neue Name enthält KEINEN Pfad. Gibt 1 zurück, wenn das Verzeichnis umbenannt wurde. Gibt 0 zurück, wenn das Verzeichnis nicht umbenannt werden konnte oder der Pfad ungültig ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** rc = Rename File( old, new )

**Beschreibung:** Benennt eine Datei um, ohne sie zu verschieben oder zu kopieren; der neue Name enthält KEINEN Pfad. Gibt 1 zurück, wenn die Datei umbenannt wurde. Gibt 0 zurück, wenn die Datei nicht umbenannt werden konnte. Gibt einen Fehler aus, wenn der Pfad ungültig oder nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** s = Repeat( x, n, &lt;m=1&gt; )

**Beschreibung:** Gibt den Text, die Matrix oder Liste zurück, der bzw. die vom Argument x angegeben wird, mit sich selbst n Male verkettet. Wenn x eine Zahl oder eine Matrix ist, dann weist n auf vertikale Wiederholung hin und das optionale Argument m gibt horizontale Wiederholung an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show( Repeat( {"A", "B"}, 3 ), Repeat( 2, 3 ), Repeat( 2, 1, 3 ) );

```

### Report

**Syntax:** y = Report( platform object )

**Beschreibung:** Gibt einen Verweis auf den Anzeigebaum eines Berichts einer Plattform zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Report( Bivariate( Y( :weight ), X( :height ), Fit Line ) );

```

### Resample Freq

**Syntax:** Resample Freq( &lt;rate=1&gt;, &lt;column&gt; )

**Beschreibung:** Generiert Häufigkeiten für Stichprobenziehungen mit Zurücklegen, nützlich für Bootstrap-Stichproben. Ohne Argumente generiert die Funktion eine 100%-Bootstrap-Stichprobe. Das Argument rate gibt die Häufigkeit der Stichprobenziehungen an. Wenn das Argument column angegeben wird, ist die gewählte Stichprobengröße rate multipliziert mit der Summe der angegebenen Spalte. Eine negative rate signalisiert, dass fraktionelle Häufigkeiten zulässig sind.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Return(&lt;Expr&gt;, ..., &lt;ExprN&gt;)

**Beschreibung:** Gibt einen Ausdruckswert aus einer benutzerdefinierten Funktion zurück.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

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

**Beispiel 2**

```jsl

f = Function( {a, b},
	Return( a - b, a + b )
);
{lo, hi} = f( 10, 1 );
Show( lo, hi );
Show( f( 7, 15 ) );

```

### Reverse

**Syntax:** y = Reverse( x )

**Beschreibung:** Gibt eine Kopie der Liste x mit umgekehrter Reihenfolge der Elemente zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Reverse( {11, 22, 33, 44, 55} );

```

### Reverse Into

**Syntax:** Reverse Into( x )

**Beschreibung:** Ändert eine Liste oder ein Anzeigefeld x mit umgekehrter Reihenfolge der Elemente. Beachten Sie, dass das Argument x eine Variable sein muss.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

ex = {11, 22, 33, 44, 55};
Reverse Into( ex );
ex;

```

**Beispiel 2**

```jsl

New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Reverse Into( hlist );

```

### Revert Menu

**Syntax:** Revert Menu()

**Beschreibung:** Kehrt zu den werkseitig voreingestellten Menüs zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

/* Reverts menus back to factory default settings. */

```

### RGB Color

**Syntax:** y = RGB Color( r, g, b ); y = RGB Color( {r, g, b} )

**Beschreibung:** Gibt eine Farbzahl aus den Komponenten Rot, Grün und Blau zurück, alle zwischen 0 und 1. RGB Color(1, 1, 1) ist weiß.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** sub = Right( s, n, &lt;filler&gt; )

**Beschreibung:** Gibt eine abgeschnittene oder aufgefüllte Version der ursprünglichen Zeichenkette oder Liste s zurück. Das Ergebnis enthält die rechten n Zeichen oder Listenelemente, links aufgefüllt mit dem Füllzeichen filler, wenn die Länge von s kleiner als n ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Right( "http://www.jmp.com", 3 );

```

### Robust PCA

**Syntax:** {A,E} = Robust PCA( X , &lt;Lambda(2/sqrt(max(nrow,ncol)))&gt;, &lt;tolerance=1e-10&gt;,&lt;maxit(75)&gt;,&lt;Center(1)&gt;,&lt;Scale(1)&gt;

**Beschreibung:** Zerlegt robuste Daten in eine Matrix niederen Ranges und eine dünn besetzte Matrix der Residuen. Ausreißer werden in den Residuen erkannt. Es können auch fehlende Werte eingesetzt werden.

**JMP Version hinzugefügt:** 16

```jsl

X = [1 -3, -1 -2, -3 -4, -4 -3, -3 1, 3 3] * [-2 5 -1 -2 1, 4 5 -4 -3 1];
X[2, 3] += 15;
Result = Robust PCA( X, Center( 0 ), Scale( 0 ), Lambda( .80 ) );

```

### Root

**Syntax:** y = Root( x, &lt;n=2&gt; )

**Beschreibung:** Gibt die n-te Wurzel von x zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Round( Root( 2, 3 ), 4 ) /* cube root */;

```

### Round

**Syntax:** y = Round( x, &lt;n&gt; )

**Beschreibung:** Rundet x auf n Ziffern nach dem Dezimalkomma (oder 0 Ziffern, wenn n nicht angegeben ist). Beachten Sie, dass das Argument n negativ sein kann.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Round( 213, -1 );

```

### Row

**Syntax:** y = Row(); Row() = y

**Beschreibung:** Gibt die aktuelle Zeile einer Datentabelle zurück. Kann als L-Wert festgelegt werden. Zurücksetzen der aktuellen Zeile durch Zuweisen des Werts 0.

**JMP Version hinzugefügt:** Vor Version 14

**Zeile festlegen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
:height * :weight;

```

**Zeile zurücksetzen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( 5 );
Show( Row() );
Row() = 0;

```

### Row State

**Syntax:** y = Row State( &lt;dt&gt;, &lt;r&gt; ); Row State( &lt;dt&gt;, &lt;r&gt; ) = y

**Beschreibung:** Gibt die Zeileneigenschaft der aktuellen (oder r-ten) Zeile in der aktuellen Datentabelle zurück. Wenn die Funktion Row State() als L-Wert verwendet wird, ändert sie die Zeileneigenschaft der aktuellen (oder r-ten) Zeile in der aktuellen Datentabelle.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, .5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Rummage

**Syntax:** treasures = Rummage( box, query )

**JMP Version hinzugefügt:** 17

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Rummage( Window( dt ), "Wilcox" ) << title;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Rummage( Report( obj ), "Wilcox" ) << details;

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show(
	Rummage(
		Window( dt ),
		"graph builder",
		Algorithm( "FilterUtility" ),
		Match All Terms( 0 )
	)[1 :: 5] << Title
);
Show( Rummage( Window( dt ), "graph builder", Algorithm( "Basic" ) )[1 :: 3] << Title );

```

### Run Program

**Syntax:** obj = Run Program( Executable( "path/etc.exe" ), &lt; Options( {"/a", "/b etc" } ) &gt;, &lt; Parameter( optParm ) &gt;, &lt; Read Function( Function( {this, optParm}, etc ) | "text" | "blob" ) &gt;, &lt; Write Function( Function( {this, optParm}, etc ) ) &gt;)

**Beschreibung:** Ein externes Programm mit stdin und stdout steuern.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

RP = Run Program(
	Executable( "PING.EXE"/*path probably not needed*/ ),
	Options( {"-n 5", "localhost"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

**Beispiel 2**

```jsl

RP = Run Program(
	Executable( "CMD.EXE"/*path probably not needed*/ ),
	Options( {"/a", "/q", "/c dir"} ),
	ReadFunction( Function( {this}, Write( this << read ) ) )
);

```

**Beispiel 3**

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

**Syntax:** sasName = SAS Name( string|namelist )

**Beschreibung:** Wandelt JMP-Variablennamen in Zeichenketten mit gültigen SAS-Variablennamen um, indem Sonderzeichen und Leerzeichen durch Unterstriche ersetzt werden. Das Argument kann als Zeichenkette oder als Liste mit Zeichenketten angegeben werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

SAS Name( {"x 1", "x 2"} );

```

### SAS Open For Var Names

**Syntax:** nameList = SAS Open For Var Names( path )

**Beschreibung:** Gibt eine Liste der Variablennamen eines SAS-Datensatzes zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

SAS Open For Var Names( "C:\my data\somedata.sas7bdat" );

```

### Save Log

**Syntax:** f = Save Log( &lt;path&gt; )

**Beschreibung:** Schreibt den Inhalt des Logs in den angegebenen Speicherort einer Datei. Wenn der Schreibvorgang erfolgreich ist, gibt diese Funktion den Namen der erstellten Datei zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Save Log( "$TEMP/log.txt" );
exlogText = Load Text File( "$TEMP/log.txt" );
Substr( exlogText, 1, 30 );

```

### Save Text File

**Syntax:** f = Save Text File( path, text|blob, &lt;mode("replace"|"append")&gt; )

**Beschreibung:** Erzeugt eine Textdatei mit dem vom Argument path angegebenen Dateinamen und dem vom Zeichenkettenargument text angegebenen Inhalt. Wenn der Speichervorgang erfolgreich ist, gibt die Funktion Save Text File() den Pfadnamen der erstellten Datei zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Save Text File( "$TEMP/DeleteMe.txt", "The quick brown fox" );
Load Text File( "$TEMP/DeleteMe.txt" );

```

### SbInv

**Syntax:** x = SbInv( z, gamma, delta, theta, sigma )

**Beschreibung:** Transformiert eine standardnormalverteilte Variable in eine beschränkte Johnson-Variable.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

SbInv( 1.96, 1.5, 2, 1, 2 );

```

### SbTrans

**Syntax:** z = SbTrans( x, gamma, delta, theta, sigma )

**Beschreibung:** Transformiert eine beschränkte Johnson-Variable in eine standardnormalverteilte Variable.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Round( SbTrans( 2.114, 1.5, 2, 1, 2 ), 2 );

```

### Scene Box

**Syntax:** box = Scene Box( xsize, ysize )

**Beschreibung:** Gibt ein Anzeigefeld für 3D-Grafiken zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** list = Scene Display List()

**Beschreibung:** Gibt eine Anzeigeliste für 3D-Grafiken zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Schedule( sec, scpt )

**Beschreibung:** Plant ein Ereignis, das das Skriptargument scpt nach Ablauf von sec Sekunden ausführt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Schedule(
	10,
	Beep();
	Print( "Time's up!" );
);

```

### Scheffe Cubic

**Syntax:** y = Scheffe Cubic( x1, x2 )

**Beschreibung:** Wird ausgewertet als x1*x2*(x1-x2). Zur Unterstützung der Notation bei kubischen Mischungsmodellen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Scheffe Cubic( [1, -1, 1, -1, 1], [-1, -1, 1, 1, -1] );

```

### Scoring Impute

**Syntax:** {imputedRow} = Scoring Impute ( rowWithMissing , VMat, colMeanVec, colStdDevVec)

**Beschreibung:** Bietet Streaming-Funktionalität für den Algorithmus zur automatischen Imputation von Daten (ADI). Die Eingabeargumente sind ein Zeilenvektor, der Folgendes enthält: fehlende Werte, eine Ladungsmatrix (auch V-Matrix genannt), die vom ADI-Algorithmus erzeugt wird, einen Vektor der Spaltenmittelwerte, bei dem fehlende Zellen ignoriert werden, und einen Vektor der Standardabweichungen der Spalte, bei dem fehlende Zellen ignoriert werden. Zurückgegeben wird der Zeilenvektor mit den mittels Kleinste-Quadrate-Schätzung eingesetzten fehlenden Werten.

**JMP Version hinzugefügt:** 14

```jsl

Scoring Impute(
	[1 2 3 . 4 .],
	[.5 .6, .3 .4, .1 .2, .6 .7, .3 .3, .5 .4],
	[0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1]
);

```

### Script Box

**Syntax:** y = Script Box( &lt;s&gt;, &lt;"C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS" | "SQL" | "Text" | "XML"&gt;, &lt;width&gt;, &lt;height&gt; )

**Beschreibung:** Gibt ein Anzeigefeld für die Bearbeitung eines Skripts zurück. Standardmäßig verfügt der Editor über JSL-Syntaxhervorhebung und -Verhalten.

**JMP Version hinzugefügt:** Vor Version 14

**JSL**

```jsl

Script = Script Box( "// This window is editable.", "JSL", 300, 100 );
New Window( "This is a script box", Script );

```

**Python-Skript**

```jsl

pyscript = "\[import numpy as np
a = np.arange(15).reshape(3, 5)]\";
Script = Script Box( pyscript, "Python", 300, 100 );
New Window( "This is a python script box", Script );

```

### Scroll Box

**Syntax:** y = Scroll Box( &lt;Size( x, y )&gt;, displayBox )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das ein größeres untergeordnetes Feld mittels Bildlaufleisten positioniert.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** sec = Second( datetime )

**Beschreibung:** Gibt den Sekundenanteil eines Datum/Uhrzeit-Werts zurück, einschließlich Bruchteile, 0 bis 60 ausschließlich.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Second( Today() );

```

### Selected

**Syntax:** y = Selected( &lt;rs&gt; );Selected( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Beschreibung:** Gibt die Komponente „ausgewählt“ des angegebenen Zeileneigenschaftswerts zurück, 0 oder 1. Wenn „ausgewählt“ als L-Wert verwendet wird, ändert es den ausgewählten Zustand der aktuellen (oder r-ten) Zeile in der aktuellen Datentabelle.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );
Row() = 3;
Selected();

```

### Selected State

**Syntax:** rs = Selected State( x )

**Beschreibung:** Gibt einen Zeileneigenschaftswert zurück, wobei die Komponente „ausgewählt“ auf den angegebenen Wert gesetzt ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );

```

### Send

**Syntax:** r = obj &lt;&lt; msg( args ); r = obj &lt;&lt; msg; r = Send( obj, msg )

**Beschreibung:** Sendet eine Mitteilung (in Form eines Ausdrucks) an ein Objekt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Bivariate( Y( :weight ), X( :height ) ) << Fit Line;

```

### Sequence

**Syntax:** y = Sequence( start, end, &lt;incr=1&gt;, &lt;n=1&gt; )

**Beschreibung:** Gibt das Row(). Element in der Zahlenfolge von start bis end um incr inkrementiert zurück. Jede Zahl in der Folge wird n Mal wiederholt. Wegen ihrer Abhängigkeit von Row() ist die Funktion Sequence() hauptsächlich in Spaltenformeln nützlich. Um Folgen als JSL-Matrizen zu erstellen, siehe Index().

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Row() = 3;
Sequence( 1, 9, 2 );

```

### Set Clipboard

**Syntax:** Set Clipboard( text )

**Beschreibung:** Legt den angegebenen Text in der Zwischenablage des Systems ab, die vom Menü „Bearbeiten“ genutzt wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Set Clipboard( "example" );

```

### Set Default Directory

**Syntax:** Set Default Directory( path )

**Beschreibung:** Legt das JMP-Standardverzeichnis fest, das als Basis für nachfolgende relative Pfade gilt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Set Default Directory( "$SAMPLE_DATA" );
Open( "Big Class.jmp" );

```

### Set Difference

**Syntax:** list = Set Difference( list1, list2 )

**Beschreibung:** Gibt die Liste der Elemente zurück, die in list1, aber nicht in list2 vorkommen. Elemente können wiederholt werden. Wenn ein Argument eine Mehrfachantwort-Spaltenreferenz ist, wird es als Liste seiner Werte in der aktuellen Zeile behandelt.

**JMP Version hinzugefügt:** 19

```jsl

Show( Set Difference( {1, 3}, {3, 2} ) );
Show( Set Difference( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );

```

### Set Environment Variable

**Syntax:** value = Set Environment Variable( string, &lt; string&gt; )

**Beschreibung:** Legt den Wert der angegebenen Umgebungsvariablen im Betriebssystem fest. Wenn das zweite Argument fehlt oder die Zeichenkette leer ist, wird die Umgebungsvariable gelöscht.



Hinweis: Beim Betriebssystem Macintosh ist die Groß- und Kleinschreibung des Variablennamens zu beachten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Set Environment Variable( "PATH", "some path to a directory" );

```

### Set File Search Path

**Syntax:** Set File Search Path(path | {list of paths})

**Beschreibung:** Legt die aktuelle Liste der Verzeichnisse fest, um nach zu öffnenden Dateien zu suchen. „.“ist das aktuelle Verzeichnis.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Set Global Window Handler( Handler Function )

**Beschreibung:** Legt eine Funktion fest, die bei jeder Erstellung eines neuen Fensters aufgerufen werden soll.

**JMP Version hinzugefügt:** 17

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

**Syntax:** list = Set Intersect( list1, list2 )

**Beschreibung:** Gibt die Liste der Elemente zurück, die in beiden Listen vorkommen. Elemente können wiederholt werden. Wenn ein Argument eine Mehrfachantwort-Spaltenreferenz ist, wird es als Liste seiner Werte in der aktuellen Zeile behandelt.

**JMP Version hinzugefügt:** 19

```jsl

Show( Set Intersection( {1, 3}, {3, 2} ) );
Show( Set Intersection( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << get rows where( Set Intersection( :sports, {"Soccer"} ) != {} );

```

### Set Path Variable

**Syntax:** Set Path Variable( name, &lt;value&gt; )

**Beschreibung:** Legt eine Pfadvariable fest, z. B. einen Namen wie SAMPLE_DATA, der, wenn er in Pfadnamen gefunden wird, ersetzt wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Set Path Variable( "SAMPLE_DATA", Get Path Variable( "SAMPLE_DATA" ) );

```

### Set Platform Preference

**Syntax:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Beschreibung:** Setzt Plattformeinstellungen wie angegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Platform Preferences

**Syntax:** Platform Preferences( platformName( optionName( value ), ... ) ... )

**Beschreibung:** Setzt Plattformeinstellungen wie angegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Platform Preferences( Bivariate( Fit Line( 1 ) ) );

```

### Set Policy

**Syntax:** Set Policy("PolicyName", &lt;Empty()|#|"value"&gt; )

**JMP Version hinzugefügt:** 18

### Set Preference

**Syntax:** Preferences( pref1( value1 ), ... )

**Beschreibung:** Setzt Voreinstellungen wie angegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Set Preferences

**Syntax:** Preferences( pref1( value1 ), ... )

**Beschreibung:** Setzt Voreinstellungen wie angegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Preferences( Graph marker size( "Large" ) );

```

### Set Toolbar Visibility

**Syntax:** rc = Set Toolbar Visibility( "toolbar-name" | Default | All, &lt;window-class-name | All&gt;, &lt;True | False&gt; )

**Beschreibung:** Legt die Sichtbarkeit einer vorgegebenen Symbolleiste für eine vorgegebene Klasse von Fenstern fest. toolbar-name ist der interne Name der Symbolleiste. Wird Default als Symbolleistenname weitergegeben, wird die angegebene Fensterklasse mit dem Standardsatz von Symbolleisten für diese Klasse von Fenstern wiederhergestellt. Beispiele für window-class-name sind Datentabelle, Skript, Bericht und Journal. Wenn window-class-name All ist, dann ist die Sichtbarkeit für die angegebene Symbolleiste für alle Klassen von Fenstern festgelegt.

Gibt 1 zurück, wenn erfolgreich, 0, wenn nicht erfolgreich.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** list = Set Union( list1, list2 )

**Beschreibung:** Gibt die Liste der Elemente zurück, die in jeder der beiden Listen vorkommen. Elemente können wiederholt werden. Wenn ein Argument eine Mehrfachantwort-Spaltenreferenz ist, wird es als Liste seiner Werte in der aktuellen Zeile behandelt.

**JMP Version hinzugefügt:** 19

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

**Syntax:** list = Set Unique( list )

**Beschreibung:** Gibt die Liste der eindeutigen Elemente zurück, die in der Eingabeliste vorkommen. Wenn ein Argument eine Mehrfachantwort-Spaltenreferenz ist, wird es als Liste seiner Werte in der aktuellen Zeile behandelt.

**JMP Version hinzugefügt:** 19

```jsl

Show( Set Unique( {1, 3, 2} ) );
Show( Set Unique( {1, 3, 4, 3, 3, 2, 3, 5, 3} ) );
Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Row() = 1;
Show( Set Unique( :sports ) );

```

### SEV Density

**Syntax:** y = SEV Density( x, mu, sigma )

**Beschreibung:** Gibt die Dichte in x einer Verteilung des kleinsten Extremwerts mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = SEV Distribution( x, mu, sigma )

**Beschreibung:** Gibt die Wahrscheinlichkeit in x einer Verteilung des kleinsten Extremwerts mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = SEV Quantile( p, mu, sigma )

**Beschreibung:** Gibt das Quantil in p einer Verteilung des kleinsten Extremwerts mit der Lage mu und Skalenparameter sigma zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** rs = Shade State( x )

**Beschreibung:** Gibt einen Zeileneigenschaftswert zurück, wobei die Farbschattierungskomponente auf den angegebenen Wert gesetzt ist. Muss mit einem Wert Hue State() kombiniert werden, damit eine gültige Farbe erzeugt wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Shape

**Syntax:** r = Shape( M, nr, &lt;nc&gt;, &lt;&lt;bycol)

**Beschreibung:** Formt die Matrix M oder den Skalar über Zeilen in nr Zeilen x nc Spalten um. Ein fehlender Wert ist zulässig für nr. Daten von M werden nach Bedarf repliziert, um die Matrix nr x nc zu füllen. Das optionale Argument <<bycol füllt die Daten nach Spalte. Standardmäßig werden die Daten nach Zeile gefüllt. Häufig verwendet zur Umformung eines Vektors in eine Matrix oder zur Vektorisierung einer Matrix.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List(
	{Shape( [11 22, 33 44], 1, 4 ), Shape( [11 22, 33 44], 1 ), Shape( [11 22, 33 44], ., 4 )
	}
);

```

### Shape Seg

**Syntax:** me = Shape Seg( {Path(&lt;path&gt;), ...}, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt; )

**Beschreibung:** Gibt ein Anzeigesegment mit einer Sammlung von Formen zurück. Jede Form zeichnet eine Linie entlang des angegebenen Pfads, wenn „Füllen“ gleich 0 ist, oder färbt das Innere des angegebenen Pfads, wenn „Füllen“ ungleich 0 ist. Der Pfad kann mit einer Nx3-Matrix oder in der Form einer Textdarstellung angegeben werden. Eine Pfadmatrix hat drei Spalten für x, y und Flags für jeden Punkt im Pfad. Die Flag-Werte sind 0 für Steuerpunkt, 1 für Verschieben, 2 für Liniensegment, 3 für kubisches Bézier-Segment und sie sind negativ, wenn der Punkt den Pfad auch schließt. Der Pfadtext unterstützt die SVG-Syntax.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** d = SHASH Density( x, gamma, delta, theta, sigma )

**Beschreibung:** Gibt die Dichte an x einer SHASH-Verteilung (sinh-arcsinh) zurück. Die SHASH-Transformation kann verwendet werden, um Daten zu erzeugen, die eher einer Normalverteilung folgen.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

SHASH Density( 0, -1, 2, -2, 3 );

```

**SHASH-Transformation**

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

**Syntax:** p = SHASH Distribution( q, gamma, delta, theta, sigma )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine SHASH-verteilte (sinh-arcsinh) Zufallsvariable kleiner ist als q. Die SHASH-Transformation kann verwendet werden, um Daten zu erzeugen, die eher einer Normalverteilung folgen.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

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

**SHASH-Transformation**

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

**Syntax:** q = SHASH Quantile( p, gamma, delta, theta, sigma )

**Beschreibung:** Gibt das Quantil einer SHASH-Verteilung (sinh-arcsinh) zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre. Die SHASH-Transformation kann verwendet werden, um Daten zu erzeugen, die eher einer Normalverteilung folgen.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```jsl

SHASH Quantile( .5, 1, 2, 3, 1 );

```

**SHASH-Transformation**

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

**Syntax:** x = SHASHInv( z, gamma, delta, theta, sigma )

**Beschreibung:** Transformiert eine standardnormalverteilte Variable in eine SHASH-verteilte (sinh-arcsinh) Variable.

**JMP Version hinzugefügt:** 14

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

**Syntax:** z = SHASHTrans( x, gamma, delta, theta, sigma )

**Beschreibung:** Transformiert eine SHASH-verteilte (sinh-arcsinh) Variable in eine standardnormalverteilte Variable. Die SHASH-Transformation kann verwendet werden, um Daten zu erzeugen, die eher einer Normalverteilung folgen.

**JMP Version hinzugefügt:** 14

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

**Syntax:** y = Sheet Part( title, childbox )

**Beschreibung:** Gibt ein Anzeigefeld mit dem Argument des untergeordneten Anzeigefelds childbox mit dem angegebenen Titel zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Shift( x, &lt;n=1&gt; )

**Beschreibung:** Gibt eine Kopie der Liste x zurück, wobei die ersten n Elemente ans Ende der Liste verschoben werden, oder, wenn n negativ ist, werden die letzten n Elemente an den Anfang der Liste verschoben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Shift( {11, 22, 33, 44, 55}, 2 );

```

### Shift Into

**Syntax:** Shift Into( x, &lt;n=1&gt; )

**Beschreibung:** Ändert eine Liste oder ein Anzeigefeld x, wobei die ersten n Elemente ans Ende der Liste verschoben werden, bzw. wenn n negativ ist, werden die letzten n Elemente an den Anfang der Liste verschoben. Beachten Sie, dass das Argument x eine Variable sein muss.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

ex = {11, 22, 33, 44, 55};
Shift Into( ex, -2 );
ex;

```

**Beispiel 2**

```jsl

New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Shift Into( hlist, -2 );

```

### Short Date

**Syntax:** s = Short Date( datetime, &lt;format&gt; )

**Beschreibung:** Gibt die numerische (MM/TT/JJJJ) Darstellung eines Datum/Uhrzeit-Werts entsprechend dem Gebietsschema zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Short Date( Today() );

```

### Shortest Edit Script

**Syntax:** list = Shortest Edit Script(A,B); matrix = Shortest Edit Script( strings( A, B, matrix(1), limit(9999) ) ); list = Shortest Edit Script( lines( A, B, separators("defaults to newline"), ignore("defaults to none")|ignoreWhiteSpace(), matrix(0), limit(9999) ) ); matrix = Shortest Edit Script( sequences(nA, nB, Function({iA,iB}, adata[iA] == bdata[ib] ) ) )

**Beschreibung:** Gibt eines der kürzesten Bearbeitungsskripts zum Konvertieren von Zeichenkette A in Zeichenkette B zurück. Die einfache Form gibt lediglich eine Liste zurück. strings() und lines() haben die Option, eine Matrix oder eine Liste zurückzugeben. sequences() gibt nur eine Matrix zurück.  Der optionale Befehl limit() stoppt die Funktion frühzeitig, wenn die Bearbeitungsliste mehr als den Grenzwert an Einfügungen und Löschungen enthält. lines() vergleicht Zeilen statt Zeichen; der optionale Befehl ignore(„characters“) oder ignoreWhiteSpace() hat in der Standardeinstellung keine ignorierten Zeichen.   Mit ESC kann die Funktion bei Bedarf gestoppt werden.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Show( x, ... )

**Beschreibung:** Zeigt Name und Wert der Argumente im Log an, jeweils einen pro Zeile.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show( 355 / 113, Pi() );

```

### Show Addin Builder Dialog

**Syntax:** Show Addin Builder Dialog()

**Beschreibung:** Zeigt ein Dialogfeld zum Erstellen benutzerdefinierter Add-ins an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show Addin Builder Dialog();

```

### Show Addins Dialog

**Syntax:** Show Addins Dialog()

**Beschreibung:** Zeigt ein Dialogfeld mit dem Status aller registrierten Add-ins an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show Addins Dialog();

```

### Show Classes

**Syntax:** Show Classes( &lt; &lt;class name | class reference&gt;, ... &gt; )

**Beschreibung:** Zeigt den Inhalt aller benutzerdefinierten Klassen an.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Show Commands( &lt;keyword=Builtins&gt; )

**Beschreibung:** Erstellt eine oder mehrere Datentabellen, die Informationen über verschiedene JSL-Komponenten enthalten. Das Argument keyword legt den Inhalt der Ausgabetabelle fest. Geben Sie vordefinierte Objekte (Standardwerte) für integrierte Operatoren und Funktionen an. Geben Sie skriptfähige Objekte für alle skriptfähigen Befehle dieser Objekte an. Geben Sie Übersetzungen für Englisch und lokalisierte Versionen der skriptfähigen Befehle an. Geben Sie Anzeigefelder für skriptfähige Befehle in Zusammenhang mit Anzeigefeldern und Anzeigesegmenten an. Geben Sie skriptfähige Namen für die Namen der skriptfähigen Objekte an. Geben Sie Plattformnamen für Namen von Plattformen an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show Commands();

```

### Show Globals

**Syntax:** Show Globals()

**Beschreibung:** Erstellt eine Liste aller aktuell definierten globalen Variablen und ihrer Werte.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show Globals();

```

### Show Namespaces

**Syntax:** Show Namespaces( &lt; &lt;namespace reference&gt;, ... &gt; )

**Beschreibung:** Zeigt den Inhalt aller benutzerdefinierten Namensräume an, sowohl der benannten als auch der anonymen Namenräume.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Show Preferences()

**Beschreibung:** Zeigt die aktuellen Einstellungen im Log an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show Preferences();

```

### Show Properties

**Syntax:** Show Properties( object )

**Beschreibung:** Zeigt im Log die Mitteilungen an, auf die ein Objekt reagiert.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show Properties( Current Data Table() );

```

### Show Symbols

**Syntax:** Show Symbols()

**Beschreibung:** Erstellt eine Liste aller aktuell definierten Variablen und ihrer Werte.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show Symbols();

```

### Simplify Expr

**Syntax:** resultExpr = Simplify Expr( expr( ... ) )

**Beschreibung:** Gibt einen äquivalenten Ausdruck zurück, der den Argumentausdruck auf verschiedene Weise vereinfacht.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Simplify Expr( Expr( 2 * 3 * a + b * (a + 3 - c) - a * b ) );

```

### Sin

**Syntax:** y = Sine( x )

**Beschreibung:** Gibt den trigonometrischen Sinus von x zurück, wobei x ein Winkel im Bogenmaß ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Sine( Pi() / 6 );

```

### Sine

**Syntax:** y = Sine( x )

**Beschreibung:** Gibt den trigonometrischen Sinus von x zurück, wobei x ein Winkel im Bogenmaß ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Sine( Pi() / 6 );

```

### SinH

**Syntax:** y = SinH( x )

**Beschreibung:** Gibt den Sinus hyperbolicus von x zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

SinH( 1 );

```

### Slider Box

**Syntax:** box = Slider Box(minValue, maxValue, variable, script, &lt;set width(n)&gt;, &lt;rescale slider(minValue, maxValue)&gt;)

**Beschreibung:** Gibt ein Anzeigefeld zurück, das einen Schieberegler mit einem Bereich von minValue bis maxValue anzeigt. Wird die Position des Schiebereglers verändert, wird der zugehörige Wert in variable abgelegt und das Skript ausgeführt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** x = SlInv( z, gamma, delta, theta, &lt;sigma=1&gt; )

**Beschreibung:** Transformiert eine standardnormalverteilte Variable in eine Johnson-SL-verteilte Variable.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

SlInv( 1.96, 1.5, 2, 1 );

```

### SlTrans

**Syntax:** z = SlTrans( x, gamma, delta, theta, &lt;sigma=1&gt; )

**Beschreibung:** Transformiert eine Johnson-SL-verteilte Variable in eine standardnormalverteilte Variable.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Round( SlTrans( 2.259, 1.5, 2, 1 ), 2 );

```

### Sobol Quasi Random Sequence

**Syntax:** points = Sobol Quasi Random Sequence(nDim, nRow)

**Beschreibung:** Mit der Sobol-Folge in bis zu 4000 Dimensionen eine Folge von raumfüllenden Quasi-Zufallszahlen erzeugen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

A = Sobol Quasi Random Sequence( 3, 100 );
As Table( A );
Scatterplot 3D( Y( :Col1, :Col2, :Col3 ) );

```

### Socket

**Syntax:** socketHandle = Socket( &lt;STREAM | DGRAM&gt; )

**Beschreibung:** Erstellt eine Socketvariable, die mit Sockets auf diesem oder anderen vernetzten Computern kommunizieren kann. Das Standardargument ist STREAM. Probieren Sie es mit der Website Ihrer Firma aus.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Solve( A, B )

**Beschreibung:** Löst das lineare System A*x=B nach x. Die Funktion Solve() ist äquivalent zu Inverse(A)*B, wenn A nichtsingulär ist. Beachten Sie, dass das Argument A eine quadratische Matrix sein muss.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Solve( [1 1, -1 4], [11, 14] );

```

### Sort Ascending

**Syntax:** y = Sort Ascending( x )

**Beschreibung:** Gibt eine Kopie der Liste oder Matrix x zurück, wobei die Elemente aufsteigend sortiert werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Sort Ascending( {111, 212, 133, 114, 55} );

```

### Sort Descending

**Syntax:** y = Sort Descending( x )

**Beschreibung:** Gibt eine Kopie der Liste oder Matrix x zurück, wobei die Elemente absteigend sortiert werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Sort Descending( {111, 212, 133, 114, 55} );

```

### Sort List

**Syntax:** y = Sort List( x )

**Beschreibung:** Gibt eine Kopie der Liste x zurück, wobei die Elemente aufsteigend sortiert werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Sort List( {111, 212, 133, 114, 55} );

```

### Sort List Into

**Syntax:** Sort List Into( x )

**Beschreibung:** Ändert Liste x mit den Elementen in aufsteigender Reihenfolge. Beachten Sie, dass das Argument x eine Variable sein muss.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ex = {111, 212, 133, 114, 55};
Sort List Into( ex );
ex;

```

### Spacer Box

**Syntax:** y = Spacer Box( &lt;Size( x, y )&gt;, &lt;Color( c )&gt;)

**Beschreibung:** Gibt ein Anzeigefeld zurück, das verwendet werden kann, um Platz zwischen anderen Anzeigefeldern zu schaffen oder um eine Zelle in einem Lineup Box zu füllen. Die Argumente Size werden in Pixel angegeben, und das Argument Color ist eine beliebige gültige JSL-Farbe.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** {U, M, V} = Sparse SVD( X , &lt;nSingularValues=min(nRow,nCol)&gt;, &lt;tolerance=1e-10&gt;)

**Beschreibung:** Berechnet die Singulärwertzerlegung der Matrix X mithilfe der implizit neu gestarteten, teilweise reorthogonalisierten Lanczos-Methode für dünnbesetzte Matrizen, indem eine Liste {U, M, V} zurückgegeben wird, so dass U*diag(M)*V` gleich X ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Sparse SVD( [11 22, 33 44], 1, 1e-8 );

```

### Speak

**Syntax:** Speak( text, &lt;Wait( sync )&gt; )

**Beschreibung:** Spricht den Text, sofern dies vom Betriebssystem unterstützt wird. Das optionale Argument Wait(true) verzögert die Skriptausführung, bis das Sprechen beendet ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Speak( "Hello" );

```

### Spin Box

**Syntax:** y = Spin Box( &lt;script&gt; )

**Beschreibung:** Gibt ein Anzeigefeld zurück, um eine Schaltfläche mit Bedienelementen für Aufwärts/Abwärts anzuzeigen. Das Argument script wird mit einem Argument aufgerufen, das die Richtung des angeklickten Pfeils angibt (negativ ist abwärts, positiv ist aufwärts). Die Größe 1 kennzeichnet einen einzelnen Klick, während größere Werte verwendet werden können, um eine wiederholte Aktion kenntlich zu machen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** coef = Spline Coef( x, y, lambda, &lt;weights&gt; )

**Beschreibung:** Returns a five-column matrix of coefficients in the following order: knots||a||b||c||d for each of the unique values in x. The smoothing parameter lambda must be a positive value, where larger values of lambda result in greater stiffness of the spline. The optional weights vector specifies a weight for each value in x. A weight of zero removes the corresponding point from the spline fit.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Spline Eval( 0 :: 10, Spline Coef( 0 :: 10, Sqrt( 0 :: 10 ), 100 ) );

```

### Spline Eval

**Syntax:** yhat = Spline Eval( x, coef, &lt;extrapolation=-1&gt; )

**Beschreibung:** Wertet die Spline-Vorhersagen mithilfe der Matrix coef in der gleichen Form aus wie von der Funktion Spline Coef() zurückgegeben. extrapolation zeigt an, wie weit über den Spline-Bereich hinaus, angegeben als Bruchteil des Bereichs, die Auswertung ausgedehnt werden muss, bevor fehlende Werte zurückgegeben werden.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** yhat = Spline Smooth( x, y, lambda, &lt;weights&gt; )

**Beschreibung:** Returns the smoothed predicted values from a spline fit. The smoothing parameter lambda must be a positive value, where larger values of lambda result in greater stiffness of the spline. The optional weights vector specifies a weight for each value in x. A weight of zero removes the corresponding point from the spline fit.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Spline Smooth( 0 :: 10, Sqrt( 0 :: 10 ), 100 );

```

### Sqrt

**Syntax:** y = Sqrt( x )

**Beschreibung:** Gibt die positive Quadratwurzel von x zurück. Das Argument kann eine Zahl, Matrix oder Liste von Zahlen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Round( Sqrt( 2 ), 4 );

```

### Squash

**Syntax:** y = Squash( x )

**Beschreibung:** Gibt 1 / (1 + Exp( x )) zurück und konvertiert eine Zahl im Bereich -∞ bis +∞ in den Bereich 1 bis 0. Die Funktion Squash() ist nützlich bei logistischer Regression.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Squash( 10 );

```

### Squish

**Syntax:** y = Logist( x )

**Beschreibung:** Gibt 1 / (1 + Exp( -x )) zurück und konvertiert eine Zahl im Bereich -∞ bis +∞ in den Bereich 0 bis 1. Die Funktion Logist() ist nützlich bei logistischer Regression.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Logist( 2 );

```

### SSQ

**Syntax:** y = SSQ( x1, ... )

**Beschreibung:** Gibt die Summe der Quadrate aller Elemente zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {SSQ( Pi(), e() ), SSQ( [33 44 22 20 30] )} );

```

### Starts With

**Syntax:** b = Starts With( s, sub )

**Beschreibung:** Gibt 1 zurück, wenn s mit sub beginnt, andernfalls 0. Die Argumente s und sub können beide Zeichenketten oder beide Listen sein. Äquivalent zu Left( s, Length( sub )) == sub.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Starts With( "http://www.jmp.com", "http:" );

```

### Status Msg

**Syntax:** Status Msg( message )

**Beschreibung:** Zeigt die angegebene Meldung in der Statuszeile an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Status Msg( "calculating..." );

```

### Std Dev

**Syntax:** y = Std Dev( x1, ... )

**Beschreibung:** Gibt die Standardabweichung der Argumente oder der Werte innerhalb eines einzelnen Matrix- oder Listenarguments zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {Std Dev( Pi(), e() ), Std Dev( [33 44 22 20 30] )} );

```

### Step

**Syntax:** y = Step( x, x1, y1, x2, y2, ... )y = Step( x, [x1, x2, ...], [y1, y2, ...] )

**Beschreibung:** Gibt das Argument yi zurück, das dem größten Wert xi entspricht, der xi kleiner als oder gleich dem Argument x ist. Beachten Sie, dass die Argumente xi geordnet angegeben werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Step( 2.5, [1 2 3], [15, 20, 30] );

```

### Stop

**Syntax:** Stop()

**Beschreibung:** Beendet die Ausführung eines JSL-Skripts sofort.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

For( i = 1, i <= 10, i++,
	If( i == 7, Stop() );
	Print( "i=" || Char( i ) );
);

```

### Straight Line Depreciation

**Syntax:** x = Straight Line Depreciation( cost, salvage, life )

**Beschreibung:** Gibt die lineare Abschreibung eines Vermögenswerts für einen Zeitraum zurück. Entspricht der SLN-Funktion in Microsoft Excel.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Straight Line Depreciation( 1000, 100, 3 );

```

### String Col Box

**Syntax:** y = String Col Box( title, {strings} )

**Beschreibung:** Gibt ein Anzeigefeld für die Anzeige der vom Argument strings angegebenen Zeichenketten zurück. Dabei handelt es sich um eine Liste von Zeichenketten.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = String Col Edit Box( title, {strings} )

**Beschreibung:** Gibt ein Anzeigefeld für die Anzeige der vom Argument strings angegebenen Zeichenketten zurück. Dabei handelt es sich um eine Liste von Zeichenketten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

a = b = c = "";
New Window( "Example",
	Modal,
	<<Return Result,
	Outline Box( "Table", Table Box( seb = String Col Edit Box( "names", {a, b, c} ) ) )
);

```

### Students t Density

**Syntax:** p = t Density( q, df, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt die Dichtefunktion der Student-t-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = t Distribution( q, df, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Student-t-verteilte Zufallsvariable kleiner als q ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = t Quantile( p, df, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt das Quantil einer Student-t-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** aSub = Subscribe to Data Table List( &lt;subscriber name | ""&gt;, &lt;OnOpen(fn) | OnClose(fn) | On Rename(fn)&gt;)

**Beschreibung:** Abonniert die Datentabellenliste, um benachrichtigt zu werden, wenn eine neue Datentabelle hinzugefügt oder geschlossen wurde.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

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

**Beispiel 2**

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

**Syntax:** y = x[i]; y = m[row, col]; y = Subscript( x, i )

**Beschreibung:** Gibt den i-ten Wert eines indizierbaren Objekts zurück, dies kann eine Spalte einer Datentabelle, eine Matrix, Liste oder ein Berichtsanzeigeelement sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

{11, 12, 13}[2];

```

### Substitute

**Syntax:** y = Substitute( x, patternExpr1, replacementExpr1, ... )y = Substitute( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

**Beschreibung:** Gibt eine Kopie von Zeichenkette, Liste oder Ausdruck x zurück und ersetzt Vorkommen jedes Musterausdrucks mit dem entsprechenden Ersetzungsausdruck. Das optionale Argument <<IGNORECASE ermöglicht den Abgleich ohne Beachtung der Groß- und Kleinschreibung, wenn x eine Zeichenkette ist.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Substitute( Expr( a + Sqrt( a ) ), Expr( a ), Expr( b ) );

```

**Beispiel 2**

```jsl

Substitute( "All things considered", "All", "Some" );

```

**Beispiel 3**

```jsl

lst = {"a", "b", "c"};
Substitute( lst, "a", "A" );

```

**Beispiel 4**

```jsl

Substitute( "All things considered", {"things", "All"}, {"ideas", "Some"} );

```

**Beispiel 5**

```jsl

Substitute( "Apple,orange,banana-grape",
	Items( Get Punctuation Characters() || "-'", "" ), " "
);

```

**Beispiel 6**

```jsl

Substitute( "Apple,APPLE,apple", "apple", "orange", <<IGNORECASE );

```

### Substitute Into

**Syntax:** Substitute Into( x, patternExpr1, replacementExpr1, ... )Substitute Into( x, patternString1, replacementString1, ..., &lt; &lt;&lt;IGNORECASE &gt; )

**Beschreibung:** Ändert Zeichenkette, Liste oder Ausdruck x und ersetzt Vorkommen jedes Musterausdrucks mit dem entsprechenden Ersetzungsausdruck. Das Argument x muss eine Variable sein. Das optionale Argument <<IGNORECASE ermöglicht den Abgleich ohne Beachtung der Groß- und Kleinschreibung, wenn x eine Zeichenkette ist.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

ex = Expr( a + Sqrt( a ) );
Substitute Into( ex, Expr( a ), Expr( b ) );
Name Expr( ex );

```

**Beispiel 2**

```jsl

ex = "All things considered";
Substitute Into( ex, "All", "Some" );
Show( ex );

```

**Beispiel 3**

```jsl

lst = {"a", "b", "c"};
Substitute Into( lst, "a", "A" );
Show( lst );

```

**Beispiel 4**

```jsl

s = "Apple,APPLE,apple";
Substitute Into( s, "apple", "orange", <<IGNORECASE );
Show( s );

```

### Substr

**Syntax:** sub = Substr( s, start, &lt;count&gt; )

**Beschreibung:** Gibt den Teil der Zeichenkette s aus, der aus count einer Anzahl Zeichen besteht, beginnend an Position start. Ein negativer oder fehlender count bedeutet den Rest der Zeichenkette. Ein negativer start bedeutet, dass die Zeichen start am Ende beginnen. Die Funktion Substr() gilt auch für Listen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {Substr( "undergo", 4 ), Substr( {10, 11, 12, 13, 14}, 2, 3 )} );

```

### Subtract

**Syntax:** y = x0 - x1; y = Subtract( x0, x1, ... )

**Beschreibung:** Subtrahiert alle nachfolgenden Argumente vom ersten Argument. Argumente können Zahlen, Matrizen oder Listen von Zahlen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

6 - 2 - 1;

```

### Subtract To

**Syntax:** y -= x; Subtract To( y, x )

**Beschreibung:** Subtrahiert einen Wert von einer Variable oder von einer Liste von Variablen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ex = 1;
ex -= 2;
ex;

```

### SuInv

**Syntax:** x = SuInv( z, gamma, delta, theta, sigma )

**Beschreibung:** Transformiert eine standardnormalverteilte Variable in eine unbeschränkte Johnson-Variable.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

SuInv( 1.96, 1.5, 2, 1, 2 );

```

### Sum

**Syntax:** y = Sum( x1, ... )

**Beschreibung:** Gibt die Summe der Argumente oder der Werte innerhalb eines einzelnen Matrix- oder Listenarguments zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {Sum( Pi(), e() ), Sum( [33 44 22 20 30] )} );

```

### Sum Of Years Digits Depreciation

**Syntax:** x = Sum Of Years Digits Depreciation( cost, salvage, life, per )

**Beschreibung:** Gibt die arithmetisch-degressive Abschreibung eines Vermögenswerts für einen bestimmten Zeitraum zurück. Entspricht der SYD-Funktion in Microsoft Excel.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Sum Of Years Digits Depreciation( 1000, 100, 3, 2 );

```

### Summarize

**Syntax:** Summarize( &lt;dt&gt;, nameBy=By( colBy ), name1=statName1( col1 ), ... )

**Beschreibung:** Berechnet verschiedene statistische Kenngrößen über eine „Nach“-Spalte. Die Namen der statistischen Kenngrößen sind Count, Sum, Mean, Max oder Maximum, Min oder Minimum, StdDev, Corr, Quantile, First. Die statistischen Kenngrößen können nur für numerische Spalten berechnet werden. Die Ergebnisse werden als Matrizen in Variablen mit den vorgegebenen Namen gespeichert.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize( exg = By( :sex ), exm = Mean( :height ) );
Eval List( {exg, Round( exm, 1 )} );

```

### Summarize YByX

**Syntax:** Summarize YByX( X(x columns),Y(y columns), Group(grouping columns), Freq(freq column), Weight(Weight column))

**Beschreibung:** Berechnet alle Kombinationen für „Y nach X anpassen“

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize YByX( X( :age, :height ), Y( :sex, :weight ) );

```

### Summation

**Syntax:** y = Summation( assignExpr, limit, bodyExpr )

**Beschreibung:** Gibt die Summe der Auswertungen der Argumente bodyExpr zurück, wobei die Variable des Arguments assignExpr jedes Mal erhöht wird, bis sie größer oder gleich dem Argument limit ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Summation( i = 0, 10, 1 / Factorial( i ) );

```

### Suppress Formula Eval

**Syntax:** Suppress Formula Eval( &lt;suppress=1&gt; )

**Beschreibung:** Unterdrückt die Auswertung von Formeln in allen Datentabellen, wenn das Argument ungleich 0 ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Suppress Formula Eval( 1 );

```

### SuTrans

**Syntax:** z = SuTrans( x, gamma, delta, theta, sigma )

**Beschreibung:** Transformiert eine unbeschränkte Johnson-Variable in eine standardnormalverteilte Variable.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Round( SuTrans( 1.46, 1.5, 2, 1, 2 ), 2 );

```

### SVD

**Syntax:** {U, M, V} = SVD( X )

**Beschreibung:** Berechnet die Singulärwertzerlegung der Matrix X, indem eine Liste {U, M, V} zurückgegeben wird, so dass U*diag(M)*V` gleich X ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

SVD( [11 22, 33 44] );

```

### SVD LAPACK

**Syntax:** {U, M, V} = SVD LAPACK( X )

**Beschreibung:** Berechnet die Singulärwertzerlegung der Matrix X, indem eine Liste {U, M, V} zurückgegeben wird, so dass U*diag(M)*V` gleich X ist.

**JMP Version hinzugefügt:** 17

```jsl

SVD LAPACK( [11 22, 33 44] );

```

### Sweep

**Syntax:** y = Sweep( A, &lt;indices&gt; )

**Beschreibung:** Gibt den Sweep der Matrix A auf diagonalen Pivots zurück, die von indices angegeben werden. Auf diese Weise kann eine Matrix pivotweise invertiert werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

exMat = [5 4 1 1, 4 5 1 1, 1 1 4 2, 1 1 2 4];
exMatswp = Sweep( exMat, [1, 2, 3, 4] );
exMatinv = Inverse( exMat );
Show( exMatswp );
Show( exMatinv );

```

### Sym Matrix Mult BLAS

**Syntax:** y = Sym Matrix Mult BLAS( A, B, ... )

**Beschreibung:** Führt Matrixmultiplikation durch, wobei A eine symmetrische Matrix ist. Die Matrixargumente müssen stimmen: NCol(A)==NRow(B).

**JMP Version hinzugefügt:** 17

```jsl

exMatA = [1 2 3, -2 0 -1, 0 1 1];
exMatA = exMatA` * exMatA;
exMatB = [1 2, 1 2, 1 2];
exMatM2 = Sym Matrix Mult BLAS( exMatA, exMatB );

```

### t Density

**Syntax:** p = t Density( q, df, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt die Dichtefunktion der Student-t-Verteilung zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = t Distribution( q, df, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Student-t-verteilte Zufallsvariable kleiner als q ist.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = t Log CDistribution( x, df, &lt;nc&gt; )

**Beschreibung:** Gibt den Logarithmus von 1 - t-Verteilungsfunktion zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = t Log Density( x, df, &lt;nc&gt; )

**Beschreibung:** Gibt den Logarithmus der t-Wahrscheinlichkeitsdichte zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = t Log Distribution( x, df, &lt;nc&gt; )

**Beschreibung:** Gibt den Logarithmus der t-Verteilungsfunktion zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** nc = t Noncentrality( x, df, prob )

**Beschreibung:** Bestimmt den Nichtzentralitätsparameter einer Student-t-Verteilung so, dass prob = t Distribution( x, df, nc ).

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = t Quantile( p, df, &lt;nonCentrality=0&gt; )

**Beschreibung:** Gibt das Quantil einer Student-t-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Tab Box( Tab Page Box(...), TabPageBox(...), ... )

**Beschreibung:** Erstellt in einem Fenster ein Anzeigefeld mit verschiedenen Registerkarten.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Tab Page Box( &lt;Title("string")&gt;, &lt;Tip(0|1)&gt;, &lt;Closeable(0|1)&gt;, &lt;Icon("string")&gt;, &lt;Moveable(0|1)&gt;, contents)

**Beschreibung:** Gibt ein Anzeigefeld zurück, das in einem Tab Box oder als unabhängiger Container mit Titel verwendet werden kann. Erkannte Optionen sind: Title(Zeichenkette), um einen Titel anzugeben, Tip (Zeichenkette), um einen Tooltipp anzugeben, Closeable(0|1), um anzugeben, ob die Seite geschlossen werden kann, Icon(Zeichenkette), um das Symbol anzugeben, und Moveable(0|1), um anzugeben, ob die Seite verschoben werden kann.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Tab Box(
		tp = Tab Page Box( Title( "alpha" ), Panel Box( "panel", Text Box( "text" ) ) ),
		Tab Page Box( Title( "beta" ), Popup Box( {"x", ex = 1, "y", ex = 2} ) )
	)
);

```

### Table Box

**Syntax:** y = Table Box( displayBox, ... )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das aus den Spaltenanzeigefeldern Zeichenketten-Spaltenfeld, Zahl-Spaltenfeld und Diagramm-Spaltenfeld der Argumente eine Tabelle erstellt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Tangent( x )

**Beschreibung:** Gibt den trigonometrischen Tangens von x zurück, wobei x ein Winkel im Bogenmaß ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Tangent( Pi() / 4 );

```

### Tangent

**Syntax:** y = Tangent( x )

**Beschreibung:** Gibt den trigonometrischen Tangens von x zurück, wobei x ein Winkel im Bogenmaß ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Tangent( Pi() / 4 );

```

### TanH

**Syntax:** y = TanH( x )

**Beschreibung:** Gibt den Tangens hyperbolicus von x zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

TanH( 1 );

```

### Test Promise Error After

**JMP Version hinzugefügt:** 17

### Test Promise Result After

**JMP Version hinzugefügt:** 17

### Text

**Syntax:** Text( &lt;properties&gt;, {x, y}, text, ... )Text( {left, top, right, bottom}, text )

**Beschreibung:** Geht zur Position {x, y} und zeichnet den vom Argument text angegebenen Text. Benannte Eigenschaftsargumente sind u.a.: Center Justified, Right Justified, Erased, Boxed, Counterclockwise, Clockwise. Die Positionsargumente, benannten Argumente und Zeichenketten können in beliebiger Reihenfolge angegeben werden. Sie können auch mithilfe von vier x/y-Koordinaten ein Feld beschreiben, in dem der Text gezeichnet wird. In diesem Fall werden keine Eigenschaften verwendet.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( Center Justified, {50, 20}, "centered" );
	)
);

```

**Beispiel 2**

```jsl

New Window( "Example",
	Graph Box(
		Text Color( "blue" );
		Text( {20, 80, 40, 70}, "some text" );
	)
);

```

### Text Box

**Syntax:** y = Text Box( text, &lt;&lt;Justify Text( strPos ), &lt;&lt;Set Wrap( width ) )

**Beschreibung:** Erstellt ein Anzeigefeld, das den Text des Zeichenkettenarguments text enthält. Die optionalen Argumente sind verfügbar, um die Textausrichtung zu steuern oder um die Breite für den Textumbruch festzulegen. Das Argument für Justify Text muss eine Zeichenkette sein, die left, right oder center angibt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Text Color( &lt;name|index|rgbList&gt; )

**Beschreibung:** Legt die Farbe zum Zeichnen von Text fest.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( {50, 20}, "label" );
	)
);

```

### Text Edit Box

**Syntax:** y = Text Edit Box( text, &lt;&lt;Password Style( bool ), &lt;&lt;Set Script( script ), &lt;&lt;Set Width( value ) )

**Beschreibung:** Erzeugt ein editierbares Feld, das den in Anführungszeichen angegebenen Text text enthält, und gibt die Referenz auf das Anzeigefeld zurück. Die optionalen Argumente sind verfügbar, um die Textanzeige zu steuern, um ein Skript an das Textfeld anzuhängen und um die Breite des Textfelds in Pixel festzulegen. Durch Angabe von Set Width(-1) wird die Größenanpassung an den Inhalt erzwungen. Beachten Sie, dass Sie ein Skript an das Textbearbeitungsfeld anhängen können, indem Sie das Skript als optionales Argument hinzufügen oder indem Sie die Meldung Set Script senden.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** {nm, sz, st, an} = Text Font(fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt;

**Beschreibung:** Legt die Schriftart für den nachfolgenden graphischen Text() fest. Verwenden Sie dies ohne Argumente, um die aktuellen Einstellungen der Schriftart abzurufen. Der Winkel ist in Grad im Uhrzeigersinn.

**JMP Version hinzugefügt:** 15

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

**Syntax:** score vector = Text Score( text column, text-to-number, &lt;weighting&gt;, &lt;{&lt;center&gt;, &lt;scale&gt;, scoring matrix}&gt;);

**Beschreibung:** Dient zum Erstellen von Scoring-Formeln im Text-Explorer. Das Text-zu-Zahl-Argument ist ein assoziatives Array, das in Kleinbuchstaben geschriebenen Worten Zahlen zuordnet. Das Gewichtungsargument ist entweder "Binary", "Ternary", "Count", "LogCount", "LCA" oder ein Array aus inversen Dokumenthäufigkeitsgewichtungen für TFLogIDF. Die Scoring-Matrix muss die gleiche Anzahl von Spalten haben wie Wörter im assoziativen Array bzw. bei LCA eine mehr. Die Ausgabe ist ein Vektor von Scores. Wenn keine Scoring-Matrix angegeben ist, wird ein Vektor von Anzahl-Scores zurückgegeben. Wenn keine Gewichtung angegeben ist, wird die Anzahl verwendet. Diese Funktion unterstützt die Option „Stamm zum Kombinieren“ nicht.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** seg = Text Seg("text")

**JMP Version hinzugefügt:** 17

```jsl

w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( ts1 = Text Seg( "default location fixed bottom left" ) );

```

### Text Size

**Syntax:** Text Size( n )

**Beschreibung:** Legt die Schriftgröße zum Zeichnen von Text fest.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Text Size( 20 );
		Text( {50, 20}, "label" );
	)
);

```

### This Project

**Syntax:** project = this project()

**Beschreibung:** Gibt aus einem Projekt heraus das entsprechende Projektobjekt zurück. Wenn außerhalb eines Projekts, wird nichts zurückgegeben.

**JMP Version hinzugefügt:** 14

```jsl

If(
	Is Empty( This Project() ), Print( "Project: (none)" ),
	Print( "Project: " || (This Project() << Get Window Title()) ),
);

```

### Throw

**Syntax:** Throw(&lt;message&gt;, &lt;Boolean&gt;)

**Beschreibung:** Leitet die Ausführung zum eingeschlossenen Try() um. Andernfalls wird die Skriptausführung gestoppt. Wenn message mit einem Ausrufezeichen beginnt, kommt es zu einem schwerwiegenden Fehler, der von Try() nicht erfasst werden kann. Das zweite Argument ist ein optionaler Boolescher Wert zum Erstellen eines Traceback.

**JMP Version hinzugefügt:** Vor Version 14

**Fatal Throw**

```jsl


Try( Throw( "!This is a fatal error" ), Print( "CATCH message not reached" ) );
Print( "AFTER TRY message not reached" );

```

**Traceback**

```jsl

Throw( "A line number is included in this error", 1 );

```

**Try-Catch**

```jsl

Try( If( Random Uniform() < 0.5, 1, Throw() ), "thrown" );

```

### Tick Seconds

**Syntax:** t = Tick Seconds()

**Beschreibung:** Gibt einen Zeitwert in Sekunden zurück, üblicherweise bis auf mindestens 1/60 einer Sekunde genau (ein „Teilstrich“), je nach Computer. Nur sinnvoll in Relation zu einem anderen Wert Tick Seconds().

**JMP Version hinzugefügt:** Vor Version 14

```jsl

t1 = Tick Seconds();
Open( "$SAMPLE_DATA/Big Class.jmp" );
t2 = Tick Seconds();
Round( t2 - t1, 3 );

```

### Time Of Day

**Syntax:** sec = Time Of Day( datetime )

**Beschreibung:** Gibt den Uhrzeitanteil eines Datum/Uhrzeit-Werts zurück, einschließlich Bruchteile von Sekunden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Format( Time Of Day( Today() ), "h:m:s" );

```

### Titlecase

**Syntax:** st = Titlecase( s )

**Beschreibung:** Umwandlung in Titel

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Titlecase( "The dog crossed the road" );

```

### To Color Space

**Syntax:** color = To Color Space( color, colorSpace )

**Beschreibung:** Übersetzt eine Farbe in einen anderen Farbraum. Farben außerhalb der Farbskala werden beim Konvertieren in kleinere Farbräume passend zugeordnet.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

To Color Space( "red", "LMS" );

```

**Beispiel 2**

```jsl

To Color Space( {0.871, 0.032, 0.061, "lRGB"}, "HLS" );

```

**Beispiel 3**

```jsl

To Color Space( {0.941, 0.196, 0.274, "lRGB", 0.871, 0.032, 0.061}, "HLS" );

```

### Today

**Syntax:** dt = Today()

**Beschreibung:** Gibt den Datum/Uhrzeit-Wert des aktuellen Zeitpunkts zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

As Date( Today() );

```

### Trace

**Syntax:** y = Trace( x )

**Beschreibung:** Gibt die Summe der Diagonalelemente einer quadratischen Matrix zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Trace( [11 22, 33 44] );

```

### Transform Each

**Syntax:** list = Transform Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;Output( "List" | "Matrix" | "Associative Array" | "Expression", &lt;expr head name&gt; )&gt;, &lt;locals list&gt;, body)

**Beschreibung:** Macht alles, was die Funktion „For Each“ macht, gibt jedoch auch an jeder Iteration einen Container mit dem Ergebnis zurück. Standardmäßig wird ein Container zurückgegeben, der mit dem Typ des Eingabecontainers übereinstimmt, doch mit dem Argument Output geändert werden kann. Bei einer Ausgabe als Liste oder Ausdruck wird Empty() verwendet, wenn es kein Ergebnis gibt. Bei einer Ausgabe als Matrix wird ein numerischer fehlender Wert verwendet, wenn es kein Ergebnis gibt oder wenn das Ergebnis nicht-numerisch ist. Bei einer Ausgabe als assoziatives Array ist kein Schlüssel vorhanden, wenn es kein Ergebnis gibt. Wenn Continue() verwendet wird, entspricht dies der Rückgabe von keinem Wert für die Iteration.

**JMP Version hinzugefügt:** 16

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

**Syntax:** Transparency( &lt;alpha&gt; )

**Beschreibung:** Legt die Transparenz für die Zeichenbefehle fest. Alpha liegt zwischen 0 (durchsichtig) und 1 (undurchsichtig, Standardeinstellung). Einige Betriebssysteme unterstützen diese Funktion nicht.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Transpose( matrix ); y = matrix`

**Beschreibung:** Transponiert das Matrixargument durch Vertauschung der Zeilen und Spalten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show( Transpose( [11 22, 33 44] ), [11 22, 33 44]` );

```

### Tree Box

**Syntax:** tree = Tree Box( &lt;{rootnodes}&gt;, &lt;Size( x, y )&gt;, &lt;Multiselect( 0|1 )&gt; )

**Beschreibung:** Erzeugt ein Anzeigefeld für die Anzeige hierarchischer Informationen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** node = Tree Node( &lt;label&gt; )

**Beschreibung:** Erzeugt einen Baumknoten für die Anzeige in einem Feld im Baum.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** triangulation = Triangulation( X(Column1, Column2), &lt; Y(Column) &gt; )

**Beschreibung:** Gibt ein Objekt mit der Delaunay-Triangulierung des vorgegebenen Punktesatzes zurück. Die optionale Y-Variable wird für doppelte Punkte gemittelt, und alle Punkte in der Ausgabe sind eindeutig.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );

```

**Beispiel 2**

```jsl

tri = Triangulation( X( [0 0 1 1], [0 1 0 1] ), Y( [0 1 2 3] ) );

```

### Trigamma

**Syntax:** y = Trigamma( x )

**Beschreibung:** Gibt die in x ausgewertete Trigamma-Funktion zurück, wobei die Trigamma-Funktion die Ableitung der Digamma-Funktion ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Trigamma( 5 );

```

### Trim

**Syntax:** sub = Trim( s, &lt;left|right|both&gt; )

**Beschreibung:** Gibt eine Kopie der Zeichenkette s zurück, wobei führende oder nachfolgende Leerzeichen entfernt werden. Das zweite Argument gibt entweder die führenden oder nachfolgenden Leerzeichen an. Wenn Sie kein zweites Argument angeben, werden die Leerzeichen an beiden Enden entfernt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Trim( " title   ", both );

```

### Trim Whitespace

**Syntax:** sub = Trim Whitespace( s, &lt;left|right|both&gt; )

**Beschreibung:** Gibt eine Kopie der Zeichenkette s zurück, wobei führende oder nachfolgende Leerzeichen entfernt werden. Das zweite Argument gibt entweder die führenden oder nachfolgenden Leerzeichen an. Wenn Sie kein zweites Argument angeben, werden die Leerzeichen an beiden Enden entfernt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Trim Whitespace( "  The  dog    crossed    the  road  " );

```

### TripleS Import

**Syntax:** TripleSImport( &lt;path to xml file&gt; )

**Beschreibung:** Öffnet Triple-S-Dateien. Das Triple-S-Format besteht aus einer XML- oder SSS-Datei und entweder einer CSV-Datei oder einer DAT-/ASC-Datei. Beide Dateien müssen den gleichen Namen mit der entsprechenden Erweiterung haben und müssen sich im selben Verzeichnis befinden. Geben Sie den Pfad der XML- oder SSS-Datei an, um die Daten zu importieren.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

TripleS Import(); //To get a file dialog to select the XML file
TripleS Import( "c:/MyFile.xml" ); //To open the Triple-S MyFile

```

### Try

**Syntax:** y = Try( expr, &lt;catchExpr&gt; )

**Beschreibung:** Wertet das Argument expr aus und gibt es zurück, sofern die Auswertung nicht einen Throw() oder eine interne Ausnahme verursacht. Dann wird die Auswertung von catchExpr zurückgegeben. Wenn Sie exception_msg als catchExpr verwenden, wird eine Liste mit weiteren Informationen zu dem Fehler zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Try( Sqrt( "s" ), "invalid" );

```

**Beispiel 2**

```jsl

Try( Sqrt( "s" ), exception_msg );

```

### Tukey HSD P value

**Syntax:** p = Tukey HSD P value( q, nGroups, dfe )

**Beschreibung:** Gibt den p-Wert zurück, der in Tukeys HSD-Test für multiple Mittelwertsvergleiche benötigt wird. Das Argument q ist die Prüfgröße, nGroups ist die Anzahl der Gruppen in der Studie und dfe sind die Fehlerfreiheitsgrade (basierend auf der Gesamtanzahl der Stichproben in der Studie).



Beachten Sie, dass q Tukeys adjustierter kritischer Wert ist, wobei es sich um das Quantil von Tukeys Verteilung der studentisierten Spannweite dividiert durch die Wurzel von 2 handelt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Tukey HSD P value( 3.73, 6, 34 );

```

### Tukey HSD Quantile

**Syntax:** q = Tukey HSD Quantile( 1-alpha, nGroups, dfe )

**Beschreibung:** Gibt das Quantil zurück, das in Tukeys HSD-Test für multiple Mittelwertsvergleiche benötigt wird. Das Argument 1-alpha ist das Konfidenzniveau, nGroups ist die Anzahl der Gruppen in der Studie und dfe sind die Fehlerfreiheitsgrade (basierend auf der Gesamtanzahl der Stichproben in der Studie).



Beachten Sie, dass q Tukeys adjustierter kritischer Wert ist, wobei es sich um das Quantil von Tukeys Verteilung der studentisierten Spannweite dividiert durch die Wurzel von 2 handelt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Type( x )

**Beschreibung:** Gibt eine Zeichenkette zurück, die den Typ des Wert des Arguments x nennt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Type( [1 2 3] );

```

### Unit Test

**JMP Version hinzugefügt:** Vor Version 14

### Unlineup Box

**Syntax:** y = UnLineup Box(displayBoxArgs, ... )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das das Spaltenlayout eines Ausrichtungsfelds kurzzeitig aufhebt. Das untergeordnete Element des Ausrichtungsaufhebungsfelds wird über alle Spalten des Ausrichtungsfelds gestreckt.

**JMP Version hinzugefügt:** 16

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

**Syntax:** Unlock Globals( name, ... )

**Beschreibung:** Entsperrt angegebene globale Namen, so dass diese geändert und von der Funktion Clear Globals gelöscht werden können.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Unlock Symbols( name, ... )

**Beschreibung:** Entsperrt angegebene globale Namen, so dass diese geändert und von der Funktion Clear Symbols gelöscht werden können.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Unregister Addin( uniqueId)

**Beschreibung:** Hebt die Registrierung eines Add-ins auf.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Unregister Addin( "com.mycompany.myaddin" );

```

### Unsubscribe to Data Table List

**Syntax:** aSub = Unsubscribe to Data Table List(&lt;subscriber name&gt;, &lt;"OnOpen" | "OnClose" | "OnRename" | "ALL"&gt;)

**Beschreibung:** Entfernt ein Abonnement der Datentabellenliste, das über den Befehl „Datentabellenliste abonnieren“ hinzugefügt wurde.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

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

**Beispiel 2**

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

### Uppercase

**Syntax:** su = Uppercase( s )

**Beschreibung:** Wandelt in der angegebenen Zeichenkette Kleinbuchstaben in Großbuchstaben um. Regeln für Groß- und Kleinbuchstaben richten sich nach dem Gebietsschema.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Uppercase( "Café #23" );

```

### V Center Box

**Syntax:** y = V Center Box( &lt;childbox&gt; )

**Beschreibung:** Gibt ein Anzeigefeld zurück mit dem Argument des untergeordneten Anzeigefelds childbox zentriert in dem vertikalen Raum, der von der maximalen Größe dieses untergeordneten Felds und allen anderen gleichgestellten Feldern des zentralen Felds definiert wird.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = a |/ b; y = V Concat( a, b, ... )

**Beschreibung:** Verkettet Matrizen vertikal. Die Argumente müssen die gleiche Anzahl von Spalten haben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

[11 22] |/ [33 44];

```

### V Concat To

**Syntax:** matrix1 |/= matrix2; V Concat To( matrix1, matrix2 )

**Beschreibung:** Verkettet vertikal und weist das Ergebnis zu. a |/= b ist äquivalent zu a = a || b. Dies ist ein Zuweisungsoperator.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** V Line( x ); V Line( x, y1, y2 )

**Beschreibung:** Zeichnet eine vertikale Linie bei x, von y1 bis y2 oder über den gesamten Rahmen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 2 );
		V Line( 20, 10, 50 );
	)
);

```

### V List Box

**Syntax:** y = V List Box( &lt;Align( center|right )&gt;, displayBox, ... )

**Beschreibung:** Erzeugt ein Anzeigefeld, das die Anzeigefelder der Argumente in einem vertikalen Layout anordnet. Die Meldung „<<Halten“ teilt dem Blatt mit, dass ihm die Berichte gehören müssen, aus denen Auszüge erstellt werden. Das optionale Argument Align ermöglicht die Ausrichtung right oder center des Inhalts im Anzeigefeld.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Outline Box( "Picker", V List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ) )
);

```

### V Max

**Syntax:** b = V Max( matrix )

**Beschreibung:** Gibt einen Zeilenvektor mit dem Maximum der einzelnen Spalten im Argument zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

V Max( [11 22, 33 44, 55 66] );

```

### V Mean

**Syntax:** m = V Mean( matrix )

**Beschreibung:** Gibt einen Zeilenvektor mit dem Mittelwert der einzelnen Spalten im Argument zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

V Mean( [11 22, 33 44, 55 66] );

```

### V Median

**Syntax:** m = V Median( matrix )

**Beschreibung:** Gibt einen Zeilenvektor mit dem Median der einzelnen Spalten im Argument zurück.

**JMP Version hinzugefügt:** 15

```jsl

V Median( [11 22, 33 44, 35 46, 55 66] );

```

### V Min

**Syntax:** a = V Min( matrix )

**Beschreibung:** Gibt einen Zeilenvektor mit dem Minimum der einzelnen Spalten im Argument zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

V Min( [11 22, 33 44, 55 66] );

```

### V Quantile

**Syntax:** m = V Quantile( matrix, p )

**Beschreibung:** Gibt einen Zeilenvektor mit dem angegeben Quantil p der einzelnen Spalten im Argument zurück.

**JMP Version hinzugefügt:** 15

```jsl

V Quantile( [11 22, 33 44, 35 46, 55 66], .25 );

```

### V Robust Standardize

**Syntax:** b = V Robust Standardize( X, &lt;center=1&gt;, &lt;scale=1&gt; )

**Beschreibung:** Gibt eine Matrix zurück, die durch den Median zentriert und durch einen robusten Schätzer der Standardabweichung der Matrix X skaliert ist. Die optionalen Booleschen Argumente geben an, ob Zentrierung und Skalierung durchgeführt werden.

**JMP Version hinzugefügt:** 17

```jsl

V Robust Standardize( J( 150, 4, Random Normal() ), 1, 1 );

```

### V Scroll Box

**Syntax:** y = V Scroll Box( &lt;Size( y )&gt;, displayBox )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das ein größeres untergeordnetes Feld mittels vertikaler Bildlaufleiste positioniert.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = V Sheet Box( &lt;&lt;Hold( rpt ), displayBox, ... )

**Beschreibung:** Erzeugt ein Anzeigefeld, das die Anzeigefelder der Argumente in einem vertikalen Layout anordnet. Die Meldung „<<Halten“ teilt dem Blatt mit, dass ihm die Berichte gehören müssen, aus denen Auszüge erstellt werden. Das optionale Argument Align ermöglicht die Ausrichtung right oder center des Inhalts im Anzeigefeld.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** v = V Size()

**Beschreibung:** Gibt die vertikale Größe des Grafikrahmens in Pixel zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Text Size( V Size() / 4 );
		Text( {50, 20}, "label" );
	)
);

```

### V Splitter Box

**Syntax:** y = V Splitter Box( &lt;Size(x,y)&gt;, displayBox, ... )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das andere Anzeigefelder mit interaktiver Steuerung der Größen vertikal anordnet. Die Größen untergeordneter Elemente werden als Anteil der Breite oder Höhe des Splitter Box angegeben. Das optionale Argument Size wird nur für das oberste Fensterbereichsfeld verwendet; Felder auf unteren Ebenen erhalten die gleiche Größe wie alle anderen untergeordneten Felder.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** b = V Standardize( X )

**Beschreibung:** Gibt eine Matrix zurück, bei der es sich um die zentrierte und skalierte Version der Matrix X handelt. Jede Spalte von b hat den Mittelwert 0 und die Standardabweichung 1.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

V Standardize( [11 22, 33 44, 55 66] );

```

### V Std

**Syntax:** b = V Std( matrix )

**Beschreibung:** Gibt einen Zeilenvektor mit den Standardabweichungen der einzelnen Spalten im Argument zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

V Std( [11 22, 33 44, 55 66] );

```

### V Sum

**Syntax:** s = V Sum( matrix )

**Beschreibung:** Gibt einen Zeilenvektor mit der Summe der einzelnen Spalten im Argument zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

V Sum( [11 22, 33 44, 55 66] );

```

### Varimax

**Syntax:** {R,T} = Varimax( F, &lt;norm=1&gt; )

**Beschreibung:** Führt eine Varimax-Rotation der angegebenen Matrix F durch. Gibt eine Liste zurück, die die rotierte Matrix und die orthogonale Rotationsmatrix enthält. Standardmäßig wird eine normalisierte Varimax-Rotation durchgeführt. Geben Sie norm = 0 an, um eine nicht-normalisierte Varimax-Rotation durchzuführen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Varimax( [1.2 .4, .9 1.5] );

```

### Vec Diag

**Syntax:** y = Vec Diag( x )

**Beschreibung:** Gibt die Diagonalelemente der Quadratmatrix als Vektor zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Vec Diag( [11 22, 33 44] );

```

### Vec Quadratic

**Syntax:** Vec Quadratic( S, X )

**Beschreibung:** Wird ausgewertet wie Vec Diag( X * S * X` ).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

exS = [1 3 5, 3 2 6, 5 6 1];
exX = [1 3 5, 2 4 6];
Vec Quadratic( exS, exX );

```

### VPTree

**Syntax:** tab = VPTree( [ matrix ] )

**Beschreibung:** Gibt eine Tabelle zum effizienten Suchen naher Nachbarn zurück. Die Matrixargumente sind k-dimensionale Punkte. Es gibt keine Grenze für die Anzahl der Dimensionen oder Punkte.

**JMP Version hinzugefügt:** 16

```jsl

tab = VPTree( [1 1 1, 1 2 1, 1 2 2, 2 2 2, 3 3 3, 4 5 6] );
{rows, dist} = tab << K nearest rows( 2, [1.1 .9 1] );
"2 nearest rows to [1.1 .9 1] are " || Char( rows );

```

### Wait

**Syntax:** Wait( &lt;x&gt; )

**Beschreibung:** Wartet x Sekunden, bevor die Ausführung fortgesetzt wird. Der Standardwert für x ist 3 Sekunden. Wenn x 0 oder größer ist, schließt JMP alle Betriebssystemereignisse (z. B. das Zeichnen auf dem Bildschirm) sowie alle anstehenden Rückrufe (z. B. Formelauswertung) zusätzlich zur Wartezeit ab. Wenn x kleiner als 0 ist, werden nur die Bildschirmzeichnung und die anstehenden Bertriebssystemereignisse vor dem Fortfahren definitiv abgeschlossen.

**JMP Version hinzugefügt:** Vor Version 14

**Betriebssystemereignisse**

```jsl

Wait( -1 ); // Wait for OS events

```

**Einfach**

```jsl

Wait( 1.5 );

```

**Rückrufe**

```jsl

Wait( 0 ); // Wait for OS events and callbacks

```

### Watch

**Syntax:** w = Watch( all|name1, ... )

**Beschreibung:** Erstellt ein Fenster mit Variablen aus den Namensräumen Global, Here und Local und ihren Werten.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Wavelet Basis Coef( x, grid, coef, &lt;wavelet = "Haar" or "Biorthogonal" or "Coiflet" or "Daubechies" or "Symlet"&gt;, &lt;param = 0&gt; )

**Beschreibung:** Gibt die Vorhersage an den Punkten x für das angegebene Wavelet-Modell zurück. Der Parameter grid ist ein Vektor, der das Raster der Daten für das Wavelet-Modell angibt. Der Parameter coef ist ein Vektor von Wavelet-Koeffizienten. Der Parameter wavelet ist der Name des Wavelet-Modells. Der optionale Parameter param ist der Wavelet-Modellparameter (sofern notwendig, Standardwert ist 0).

**JMP Version hinzugefügt:** 17

```jsl

Wavelet Basis Coef( 2.5, [1, 2, 3, 4], [0, 1, 2, 3], "Haar" );

```

### Web

**Syntax:** Web( string, &lt;JMP Window&gt; )

**Beschreibung:** Öffnet die URL oder Datei, die im Standard-Webbrowser in string gespeichert ist. Das optionale zweite Argument gibt an, dass die HTML in einem JMP-Browserfenster geöffnet wird.

**JMP Version hinzugefügt:** Vor Version 14

**Einfach**

```jsl

Web( "http://www.jmp.com/" );

```

**Ereignis-Handler**

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

### Web Browser Box

**Syntax:** wb = Web Browser Box( url )

**Beschreibung:** Gibt ein Anzeigefeld zurück, um eine Webseite anzuzeigen, angegeben vom Zeichenkettenargument url.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example", wb = Web Browser Box() );
wb << Navigate( "http://www.jmp.com" );
wb << Set Stretch( "Window", "Window" );
wb << Set Max Size( 10000, 10000 );

```

### Week Of Year

**Syntax:** d = Week Of Year( datetime, &lt;rule=1&gt; )

**Beschreibung:** Gibt die Woche des Jahres eines Datum/Uhrzeit-Werts mithilfe einer von drei Regeln zurück. Standardmäßig (Regel 1) beginnen die Wochen mit dem Sonntag, wobei der erste Sonntag des Jahres Woche 2 ist. Woche 1 ist eine Teilwoche oder leer (wie im Jahr 2006). Bei Regel 2 ist der erste Sonntag Woche 1 und die vorherigen Tage sind Woche 0. Bei Regel 3 wird die ISO-Wochennummer zurückgegeben. Dabei beginnen die Wochen mit dem Montag und Woche 1 ist die erste Woche des Jahres mit vier Tagen in dem Jahr. Bei ISO-Wochen ist es möglich, dass die ersten oder letzten drei Tage des Jahres zur Wochennummer des nachfolgenden bzw. vorherigen Jahres gehören.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Week Of Year( Today() );

```

**Beispiel 2**

```jsl

Show(
	Week Of Year( 01jan2012, 1 ),
	Week Of Year( 01jan2012, 2 ),
	Week Of Year( 01jan2012, 3 )
);

```

### Weibull Density

**Syntax:** y = Weibull Density( x, shape, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Beschreibung:** Gibt die Dichte bei x einer Weibull-Verteilung mit einem Parameter scale und optionalem Parameter shape zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** p = Weibull Distribution( x, shape, &lt;scale=1&gt;, &lt;threshold=0&gt; )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine Weibull-verteilte Zufallsvariable (mit einem Parameter scale und optionalem Parameter shape) kleiner als x ist

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** q = Weibull Quantile( p, beta, &lt;alpha=1&gt;, &lt;threshold=0&gt; )

**Beschreibung:** Gibt das Quantil einer Weibull-Verteilung zurück, den Wert, für den die Wahrscheinlichkeit p ist, dass ein zufälliger Wert kleiner wäre. beta und alpha sind jeweils der Form- und Lageparameter.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Where( &lt;dt&gt;, clause )

**Beschreibung:** Gibt Indizes (üblicherweise Zeilennummern) zurück, die der vorgegebenen Where-Klausel entsprechen. Das optionale dt ändert die Current Data Table während der Auswertung. Diese Klauseln werden von JMP häufig unter Verwendung des Datenfilters geschrieben. Das ist häufig schneller als die Verwendung von Loc, <<Get Rows Where oder <<Select Where. Das Verhalten ist undefiniert, wenn die Klausel die Sequenzen oder Symbole während der Auswertung ändert.

**JMP Version hinzugefügt:** 18

**Matrix/Liste**

```jsl

xs = [10 20 30 . 50];
xs[Where( xs >= 20 )];
xs[Where( !Is Missing( xs ) )];
ys = {10, 20, "30", ., 50};
ys[Where( ys >= 20 )];

```

**Sonstige**

```jsl

xs = [10 20 30 . 50];
ys = [0 0 0 1 1];
Where( xs > 20 & ys );

xs = {{10}, {20}, {15}};
Where( xs[1] < 18 );

```

**Spalten**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Get Rows Where( :sex == "M" );
Where( :sex == "M" );
Where( dt, :sex == "M" );

```

**Spaltenfunktionen**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Select << Select Rows( Where( Col Max( :height, :age ) >= 68 ) );
dt << Clear Select << Select Rows( Where( :height == Col Max( :height, :age ) ) );

```

**Zeileneigenschaften**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [2 4 6] ) << Exclude( 1 );
Where( Excluded() );
Where( !Excluded() );

```

### While

**Syntax:** While( testExpr, bodyExpr )

**Beschreibung:** Wertet die Ausdrücke testExpr und bodyExpr wiederholt aus, solange testExpr einen Wert ungleich 0 ergibt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Wild()

**Beschreibung:** Kennzeichnet die Position eines Platzhalters, der einem beliebigen Ausdruck entspricht (wird nur in Ausdrucksmustern verwendet).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

extestexpr = Expr(
	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );
	Show( "END" );
);
Extract Expr( extestexpr, For( i = 1, Wild(), i++, Print( "YES!!!" ) ) );

```

### Wild List

**Syntax:** Wild List()

**Beschreibung:** Kennzeichnet eine Reihe von Platzhalterargumenten , die eine beliebige Entsprechung haben können (wird nur in Ausdrucksmustern verwendet).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

extestexpr = Expr(
	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );
	Show( "END" );
);
Extract Expr( extestexpr, For( i = 1, Wild List(), Print( "YES!!!" ) ) );

```

### Window

**Syntax:** y = Window( &lt;string|int&gt; )

**Beschreibung:** Diese Funktion ist veraltet und wird nur für die Rückwärtskompatibilität mit vorhandenen Skripten beibehalten. Verwenden Sie bei neuen Skripten Fenster abrufen() oder Fensterliste abrufen().

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Window( "Big Class" );

```

### With Clipboard

**Syntax:** two = With Clipboard( clp, box &lt;&lt; Paste; 1 + 1 )

**Beschreibung:** If the JSL within this function would have normally pasted something from the OS Clipboard, it is instead pasted from the provided Clipboard object.

**JMP Version hinzugefügt:** 19

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Property( "Units", "HELLO" );
clp = Clipboard Capture( dt << Select Columns( :height ) << Copy Column Properties );
With Clipboard( clp, dt << Select Columns( :weight ) << Paste Column Properties );

```

### With Window Handler

**Syntax:** With Window Handler( JSL Code, Handler Function )

**Beschreibung:** Führt einen Codeblock mit einer Funktion aus, die bei jeder Erstellung eines neuen Fensters aufgerufen werden soll.

**JMP Version hinzugefügt:** 17

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

**Syntax:** w = Word( n|[first last], s, &lt;delim&gt;, &lt;Unmatched(result string)&gt;

**Beschreibung:** Gibt das n-te Wort der Zeichenkette s zurück, wobei Wörter Teilzeichenketten sind, die durch eine beliebige Anzahl von beliebigen Zeichen im Argument delim getrennt werden. Wenn delim fehlt, wird das Leerzeichen verwendet. Wenn delim die leere Zeichenkette ist, wird jedes Zeichen als eigenes Wort behandelt.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Word( 3, "http://www.jmp.com", ":/." );

```

**Beispiel 2**

```jsl

Word( [2 -1], "This is a sentence" );

```

**Beispiel 3**

```jsl

Word( 4, "Apple+Banana Tree,,Pear,,Peach,,Grape", Get Punctuation Characters() );

```

**Beispiel 4**

```jsl

Word( 5, "a b c d", Unmatched( "None" ) );

```

**Beispiel 5**

```jsl

Word( 2, "abcd", "" );

```

### Words

**Syntax:** wl = Words( &lt;[first last]&gt;, s, &lt;delim&gt;)

**Beschreibung:** Gibt eine Liste von Teilzeichenketten zurück, die durch ein beliebiges der Zeichen im Argument delim getrennt werden. Wenn delim fehlt, wird das Leerzeichen verwendet. Wenn delim die leere Zeichenkette ist, wird jedes Zeichen als eigenes Wort behandelt.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Eval List( {Words( "http://www.jmp.com", ":/." ), Words( "hello", "" )} );

```

**Beispiel 2**

```jsl

Words( "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**Beispiel 3**

```jsl

Words( [1 2], "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### Wrap List Box

**Syntax:** y = Wrap List Box( displayBox, ... )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das die von den Argumenten gelieferten Anzeigefelder in einem horizontalen Layout anordnet, die Liste jedoch beim Drucken mit Zeilenumbrüchen versieht.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Write( x, ... )

**Beschreibung:** Zeigt die angegebenen Werte im Log an, ohne Anführungszeichen, Leerzeichen oder Zeilenumbrüche hinzuzufügen (wie es bei Print() geschieht).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Write( "fraction = ", 355 / 113, "\!N", "pi       = ", Pi() );

```

### X Function

**Syntax:** X Function( xExpr, yName, &lt;properties&gt; )

**Beschreibung:** Zeichnet die Funktion xExpr in der X-Dimension, wobei die Variable yName über den Bereich der Y-Achse des Graphen variiert. Zusätzliche benannte Eigenschaftsargumente sind u.a.: Min(unteres Y), Max(oberes Y), Fill(Muster, Wert), Inc(obere Grenze des Inkrements).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		X Function( 20 + 40 * Sin( a / 30 ), a );
	)
);

```

### X Origin

**Syntax:** x = X Origin()

**Beschreibung:** Gibt den x-Wert für die linke Kante des Grafikrahmens zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** x = X Range()

**Beschreibung:** Gibt den x-Abstand von links nach rechts zurück. X Origin() + X Range() ist die rechte Kante.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** X Scale( &lt;xMin&gt;, &lt;xMax&gt; )

**Beschreibung:** Setzt eine neue Y-Skala innerhalb des Grafikrahmens.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** value = XML Attr( attr name ); aa = XML Attr()

**Beschreibung:** Extrahiert die Zeichenkette eines XML-Attributs im Rahmen der Auswertung eines Parse XML()-Befehls. Ist kein Name angegeben, wird ein assoziatives Array aller Attributnamen/Wertepaare zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** text = XML Decode( textxml )

**Beschreibung:** Entschlüsselt Symbole in XML und wandelt sie in gewöhnlichen Text um, ändert " in ", < in <, > in >; & in &.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

text = XML Decode( "isSmallAlpha = letter&gt;=&quot;a&quot; &amp; letter&lt;=&quot;z&quot;" );

```

### XML Encode

**Syntax:** textxml = XML Encode( text )

**Beschreibung:** Bereitet Text zum Einbetten in XML vor, ändert " in ", < in <, > in > & in &.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

textxml = XML Encode( "\[isSmallAlpha = letter>="a" & letter<="z"]\" );

```

### XML Text

**Syntax:** value = XML Text()

**Beschreibung:** Extrahiert den Zeichenkettentext des Befehls von einem XML-Tag im Rahmen der Auswertung eines Parse XML()-Befehls.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** result = XPath Query(xml, xpath expression)

**Beschreibung:** Führt eine XPath-Abfrage in einem XML-Dokument durch.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

result = XPath Query(
	"<doc><colors><color>red</color><color>green</color><color>blue</color></colors></doc>",
	"//color/text()"
);

```

### XY Function

**Syntax:** XY Function( x(t), y(t), t, min(0), max(1), inc(.01) | steps(100) )

**Beschreibung:** Diese Grafikskriptfunktion verbindet einen Ausdruck x(t) und einen Ausdruck y(t), um eine Kurve x-y für den angegebenen Parameterbereich t zu zeichnen. Inc() ist das maximale Inkrement für t bzw. steps() ist die minimale Anzahl von Schritten für t. Verwenden Sie steps() oder inc(), wenn der Standardwert keine Details anzeigt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Y Function( yExpr, xName, &lt;properties&gt; )

**Beschreibung:** Zeichnet die Funktion yExpr in der Y-Dimension, wobei die Variable xName über den Bereich der X-Achse des Graphen variiert. Zusätzliche benannte Eigenschaftsargumente sind u.a.: Min(unteres X), Max(oberes X), Fill(Muster, Wert), Inc(obere Grenze des Inkrements).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Y Function( 20 + 40 * Sin( a / 30 ), a );
	)
);

```

### Y Origin

**Syntax:** y = Y Origin()

**Beschreibung:** Gibt den y-Wert für die untere Kante des Grafikrahmens zurück.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = Y Range()

**Beschreibung:** Gibt den y-Abstand von unten nach oben zurück. Y Origin() + Y Range() ist die obere Kante.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Y Scale( &lt;yMin&gt;, &lt;yMax&gt; )

**Beschreibung:** Setzt eine neue Y-Skala innerhalb des Grafikrahmens.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** yr = Year( datetime )

**Beschreibung:** Gibt den Jahresanteil eines Datum/Uhrzeit-Werts zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Year( Today() );

```

### Zero Or Missing

**Syntax:** y = Zero Or Missing( x )

**Beschreibung:** Gibt das logische NOT von x zurück, wobei fehlende Werte als Nullen behandelt werden: 1, wenn x fehlt oder gleich 0 ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Zero Or Missing( 1 < 2 );

```

### ZI Negative Binomial Distribution

**Syntax:** cumprob = ZI Negative Binomial Distribution( k, lambda, sigma, pi )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine zero-inflated negativ binomial verteilte Zufallsvariable kleiner oder gleich k ist. lambda ist der Lageparameter, sigma ist der Skalenparameter, pi ist der Zero-inflation-Parameter und k ist die betrachtete Häufigkeit.

**JMP Version hinzugefügt:** 19

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

**Syntax:** prob = ZI Negative Binomial Probability( k, lambda, sigma, pi)

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine zero-inflated negativ binomial verteilte Zufallsvariable gleich k ist. lambda ist der Lageparameter, sigma ist der Skalenparameter, pi ist der Zero-inflation-Parameter und k ist die betrachtete Häufigkeit.

**JMP Version hinzugefügt:** 19

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

**Syntax:** q = ZI Negative Binomial Quantile( lambda, sigma, pi, cumprob )

**Beschreibung:** Gibt das Quantil mit der kleinsten ganzen Zahl zurück, für das die kumulierte Wahrscheinlichkeit der zero-inflated negativen Binomialverteilung ( lambda, sigma, pi ) größer als oder gleich cumprob ist.

**JMP Version hinzugefügt:** 19

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

**Syntax:** cumprob = ZI Poisson Distribution( k, lambda, pi )

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine zero-inflated Poisson-verteilte Zufallsvariable kleiner oder gleich k ist. lambda ist der Lageparameter, pi ist der Zero-inflation-Parameter und k ist die betrachtete Häufigkeit.

**JMP Version hinzugefügt:** 19

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

**Syntax:** prob = ZI Poisson Probability( k, lambda, pi)

**Beschreibung:** Gibt die Wahrscheinlichkeit zurück, dass eine zero-inflated Poisson-verteilte Zufallsvariable gleich k ist. lambda ist der Lageparameter, pi ist der Zero-inflation-Parameter und k ist die betrachtete Häufigkeit.

**JMP Version hinzugefügt:** 19

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

**Syntax:** q = ZI Poisson Quantile( lambda, pi, cumprob )

**Beschreibung:** Gibt das Quantil mit der kleinsten ganzen Zahl zurück, für das die kumulierte Wahrscheinlichkeit der zero-inflated Poisson-Verteilung ( lambda, pi ) größer als oder gleich cumprob ist.

**JMP Version hinzugefügt:** 19

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

