# Conditional



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

### Choose

**Syntax:** y = Choose( i, expr1, expr2, ..., exprElse )

**Beschreibung:** Wertet das i-te Argument expr aus und gibt es zurück. Wenn es kein i-tes Argument expr gibt, wird das Argument exprElse zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Choose( Random Integer( 1, 5 ), "red", "blue", "other" );

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

### Filter Each

**Syntax:** list = Filter Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;locals list&gt;, body)

**Beschreibung:** Macht alles, was die Funktion „For Each“ macht, gibt jedoch auch eine Liste gefilterter Werte aus dem ursprünglichen Container basierend auf dem Ergebnis eines Booleschen Werts zurück. Der Typ des Ergebnisses stimmt mit dem Typ des Eingabecontainers überein. Bei einer Eingabe als Matrix wird eine Zeilenvektormatrix zurückgegeben, da die Größe der Matrix nicht bekannt sein kann.

**JMP Version hinzugefügt:** 16

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

#### Matrix - Linearer Index

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

### Interpolate

**Syntax:** y = Interpolate(x|xmatrix|xlist, x1, y1, x2, y2);y = Interpolate(x | xmatrix | xlist, xmatrix, ymatrix);z = Interpolate({ x, y }, xvector, yvector, zmatrix)

**Beschreibung:** Sucht die xi-Argumente, zwischen denen sich x befindet, und interpoliert linear die entsprechenden yi-Argumente. Beachten Sie, dass die xi-Argumente geordnet angegeben werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

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

#### Beispiel 2

```jsl

Interpolate( 2.5, [1 2 3], [15, 20, 30] );

```

#### Beispiel 3

```jsl

Interpolate( {.5, .8}, [0 1], [0 1], [10 20, 12 18] );

```

#### Beispiel 4

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

### Is Empty

**Syntax:** y = Is Empty( name )

**Beschreibung:** Gibt 1 zurück, wenn die Variable nicht definiert ist, oder behält den Wert Empty() bei.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Is Empty( x );

```

#### Beispiel 2

```jsl

x = Empty();
Is Empty( x );

```

#### Beispiel 3

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

### Is List

**Syntax:** y = Is List( x )

**Beschreibung:** Gibt 1 zurück, wenn das Argument x eine Liste ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Is List( {1, 2, 3} );

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

### Is Scriptable

**Syntax:** tf = Is Scriptable( x )

**Beschreibung:** Gibt 1 zurück, wenn das Argument x ein skriptfähiges Objekt ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Is Scriptable( Bivariate( Y( :weight ), X( :height ) ) );

```

### Is String

**Syntax:** y = Is String( x )

**Beschreibung:** Gibt 1 zurück, wenn das Argument x eine Zeichenkette ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Is String( "abc" );

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

### Not

**Syntax:** y = !x; y = Not( x )

**Beschreibung:** Gibt das logische NOT von x zurück: 1, wenn x gleich 0 ist, fehlend, wenn x fehlt, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

!(1 < 2);

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

### Return

**Syntax:** Return(&lt;Expr&gt;, ..., &lt;ExprN&gt;)

**Beschreibung:** Gibt einen Ausdruckswert aus einer benutzerdefinierten Funktion zurück.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

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

#### Beispiel 2

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

### Transform Each

**Syntax:** list = Transform Each({&lt;value&gt;, &lt;index&gt;} | {&lt;element&gt;, &lt;index | {row, col}&gt;} | {&lt;key | {key, value}&gt;, &lt;index&gt;} | {&lt;values | {value1, ..., valueN}&gt;, &lt;index&gt;}, list | matrix | associative array | expression | Across( container1, ..., &lt;containerN&gt;, &lt;Count( "Longest" | "Shortest" | "Enforce Equal" | n )&gt; ), &lt;Output( "List" | "Matrix" | "Associative Array" | "Expression", &lt;expr head name&gt; )&gt;, &lt;locals list&gt;, body)

**Beschreibung:** Macht alles, was die Funktion „For Each“ macht, gibt jedoch auch an jeder Iteration einen Container mit dem Ergebnis zurück. Standardmäßig wird ein Container zurückgegeben, der mit dem Typ des Eingabecontainers übereinstimmt, doch mit dem Argument Output geändert werden kann. Bei einer Ausgabe als Liste oder Ausdruck wird Empty() verwendet, wenn es kein Ergebnis gibt. Bei einer Ausgabe als Matrix wird ein numerischer fehlender Wert verwendet, wenn es kein Ergebnis gibt oder wenn das Ergebnis nicht-numerisch ist. Bei einer Ausgabe als assoziatives Array ist kein Schlüssel vorhanden, wenn es kein Ergebnis gibt. Wenn Continue() verwendet wird, entspricht dies der Rückgabe von keinem Wert für die Iteration.

**JMP Version hinzugefügt:** 16

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

### Zero Or Missing

**Syntax:** y = Zero Or Missing( x )

**Beschreibung:** Gibt das logische NOT von x zurück, wobei fehlende Werte als Nullen behandelt werden: 1, wenn x fehlt oder gleich 0 ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Zero Or Missing( 1 < 2 );

```

