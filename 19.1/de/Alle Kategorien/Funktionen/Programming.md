# Programming



### Add Custom Functions

**Syntax:** Add Custom Functions({f1, f2, ...} | f)

**Beschreibung:** Definiert eine Liste von benutzerdefinierten Funktionen zur Verwendung in Skripten und im Formeleditor. Der Befehl fügt die Liste auch der Umgebung hinzu.

**JMP Version hinzugefügt:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y}, x + y - 1 ) );mySub = New Custom Function( "custom", "Sub", Function( {x, y}, x - y + 1 ) );Add Custom Functions( {myAdd, mySub} );

```

### As Boolean

**Syntax:** b = As Boolean( x )

**Beschreibung:** Wertet einen Ausdruck aus und gibt einen Booleschen Wert zurück.

**JMP Version hinzugefügt:** 14

```jsl

x = 45;b = As Boolean( x > 2 );Show( b );

```

### As Column

**Syntax:** y = :name; y = dataTable:name; y = As Column( name ); y = As Column( dataTable, name )

**Beschreibung:** Greift auf die angegebene Spalte in der angegebenen oder aktuellen Datentabelle zu. Ein Fehler wird ausgegeben, wenn die Spalte oder Datentabelle nicht gefunden wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );exdt:height[1] + :height[2] + As Column( "height" )[3];

```

### As Constant

**Syntax:** y = As Constant( x )

**Beschreibung:** Wertet einen Ausdruck aus, um einen konstanten Wert zu erstellen, der sich nach der Berechnung nicht verändert.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

New Table( "As Constant Demo Table 1",	Add Rows( 10 ),	New Column( "Non-Constant", Formula( Random Uniform() ) ),	New Column( "Constant", Formula( As Constant( Random Uniform() ) ) ));

```

**Beispiel 2**

```jsl

New Table( "As Constant Demo Table 2",	Add Rows( 1000 ),	New Column( "What's on Your Desktop?",		"character",		Formula(			As Constant( xFiles = Files In Directory( "$Desktop" ) );			iR = Row();			If( iR <= N Items( xFiles ),				xFiles[iR],				"---"			);		)	));

```

**Beispiel 3**

```jsl

For( i = 1, i <= 10, i++,	x = 2;	y = 100;	z = As Constant( x + y );	x *= i;	y /= i;	Show( i, x + y, z ););

```

### As Global

**Syntax:** y = ::name; y = As Global( name )

**Beschreibung:** Greift auf die angegebene globale Variable zu oder gibt einen Fehler aus, wenn die globale Variable nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

::ex = 23;Local( {ex = 12}, Eval List( {ex, ::ex, As Global( "ex" )} ) );

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:(As Name( "height" ))[3];

```

### As Namespace

**Syntax:** asns = As Namespace( ns )

**Beschreibung:** Greift auf den angegebenen Namensraum zu oder gibt einen Fehler aus, wenn der Namensraum nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ns = New Namespace(	"complex");As Namespace( ns );

```

### As Root

**Syntax:** y = :::name; y = As Root( name )

**Beschreibung:** Greift auf die angegebene stammbeschränkte Variable zu oder gibt einen Fehler aus, wenn die stammbeschränkte Variable nicht vorhanden ist.

**JMP Version hinzugefügt:** 15

```jsl

::: ex = 23;Local( {ex = 12}, Eval List( {ex, ::: ex, As Global( "ex" )} ) );

```

### As Scoped

**Syntax:** y = namespace:variable; y = As Scoped( namespace, variable )

**Beschreibung:** Greift auf die angegebene beschränkte Variable zu oder gibt einen Fehler aus, wenn die beschränkte Variable nicht vorhanden ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Here:z = 23.5;As Scoped( Here, z );

```

### Associative Array

**Syntax:** y = Associative Array( {{key1, value1}, ...} ); y = Associative Array( keys, values )

**Beschreibung:** Erstellt ein assoziatives Array, das auch als Wörterbuch oder Hashmap bekannt ist. Im Format mit zwei Argumenten können Schlüssel und Werte eine Liste, eine Matrix oder eine Spalte in einer Datentabelle sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ex = Associative Array( {"red", "blue"}, {1, 2} );ex["green"] = 3;ex << get contents;

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

#### Bearbeitung zulässig

```jsl

Choose Closest( "MARTA", {"MARTHA"}, Max Edit Count( 2 ) );

```

#### Ohne Übereinstimmung

```jsl

Choose Closest( "MARTHA", {"Martha"}, Ignore Case( 0 ), Unmatched() );

```

#### Zeichenkette wählen, keine Bearbeitung

```jsl

Choose Closest( "MARTHA_", {"Martha", "MARY"} );

```

#### Zeichensetzung beibehalten

```jsl

Choose Closest( "MARTHA_", {"MARTHA"}, Ignore Punctuation( 0 ) );

```

### Class Exists

**Syntax:** nsexists = Class Exists( class name )

**Beschreibung:** Gibt 1 zurück, wenn die vom Argument name angegebene Klasse vorhanden ist. Andernfalls wird 0 zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Define Class(	"complex",	real = 0;	imag = 0;	_init_ = Method( {a, b},		real = a;		imag = b;	);	Add = Method( {y},		New Object( complex( real + y:real, imag + y:imag ) )	);	Sub = Method( {y},		New Object( complex( real - y:real, imag - y:imag ) )	);	Mul = Method( {y},		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )	);	Div = Method( {y},		t = New Object( complex( 0, 0 ) );		mag2 = y:Magsq();		t:real = real * y:real + imag * y:imag;		t:imag = imag * y:real + real * y:imag;		t:real = t:real / mag2;		t:imag = t:imag / mag2;		t;	);	Magsq = Method( {},		real * real + imag * imag	);	Mag = Method( {},		Sqrt( real * real + imag * imag )	);	_to string_ = Method( {},		Char( real ) || " + " || Char( imag ) || "i"	);	_show_ = _to string_;);cl = New Object( complex( 1, 2 ) );clexists = Class Exists( cl );Show( clexists );cl << Delete;Delete Classes( "complex" );

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

### Close Log

**Syntax:** Close Log()

**Beschreibung:** Log-Fenster schließen

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Close Log();Show( Is Log Open() );

```

### Define Class

**Syntax:** Define Class("class name", &lt;Base Class{ "base class name", ... }&gt;, &lt;Show( All( boolean ) | ( Members( boolean ) | Methods( boolean ) | Functions( boolean ) )+ )&gt;, { method* | member* | function* } )

**Beschreibung:** Neue Klasse definieren

**JMP Version hinzugefügt:** 14

```jsl

Define Class(	"complex",	real = 0;	imag = 0;	_init_ = Method( {a, b},		real = a;		imag = b;	);	Add = Method( {y},		New Object( complex( real + y:real, imag + y:imag ) )	);	Sub = Method( {y},		New Object( complex( real - y:real, imag - y:imag ) )	);	Mul = Method( {y},		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )	);	Div = Method( {y},		t = New Object( complex( 0, 0 ) );		mag2 = y:Magsq();		t:real = real * y:real + imag * y:imag;		t:imag = imag * y:real + real * y:imag;		t:real = t:real / mag2;		t:imag = t:imag / mag2;		t;	);	Magsq = Method( {},		real * real + imag * imag	);	Mag = Method( {},		Sqrt( real * real + imag * imag )	);	_to string_ = Method( {},		Char( real ) || " + " || Char( imag ) || "i"	);	_show_ = _to string_;);cl = New Object( complex( 1, 2 ) );cl << Delete;Delete Classes( complex );

```

### Delete Classes

**Syntax:** Delete Classes( &lt;Force( boolean )&gt;, &lt;class reference, ...&gt; )

**Beschreibung:** Löscht alle Klassendefinitionen oder eine oder mehrere spezifische Namensdefinitionen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Define Class(	"aa",	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )});Define Class(	"bb",	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )});lcaa = New Object( aa() );lcbb = New Object( bb() );lcl = Get Classes();Show( lcl );Show Classes();Clear Symbols( lcl );lcaa << Delete;lcbb << Delete;Delete Classes( "aa", "bb" );Show Classes();

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

nsaa = New Namespace(	"aa",	{		x = 1	});nsbb = New Namespace(	"bb",	{		y = 1	});Show Namespaces();Delete Namespaces( nsaa, nsbb );Show Namespaces();

```

### Delete Symbols

**Syntax:** Delete Symbols( &lt; varname, ... &gt; )

**Beschreibung:** Löscht alle aktuell definierten Variablen und ihre Werte.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Delete Symbols();

```

### Eval

**Syntax:** y = Eval( x )

**Beschreibung:** Wertet das Argument aus und gibt das Ergebnis zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval( Expr( 1 + 2 ) );

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

ex = "Today is ^As Date( Today())^";Eval Insert Into( ex );ex;

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

x = 5;y = 10;Eval List( {x, y} );

```

### Exit

**Syntax:** Quit(&lt;"No Save"&gt;); Exit(&lt;"No Save"&gt;)

**Beschreibung:** Beendet JMP.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

If(	New Window( "Exit() example",		<<Type( "Modal" ),		Text Box( "Shut down JMP?" ),		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )	)["Button"] == 1, /*OK==1*/Exit(), /*cancel==-1*/"Good choice.");

```

### First

**Syntax:** y = First( x1, x2, ... )

**Beschreibung:** Wertet jedes Argument aus und gibt den Wert des ersten Arguments zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

First( 11, 22 );

```

### Function

**Syntax:** y = Function( {arg1=val1, ...}, &lt;{local1=val1, ...}&gt;, expr )

**Beschreibung:** Definiert eine Funktion mit den angegebenen Argumenten, Standardwerten und optionalen lokalen Variablen. Argumente mit Standardwerten sind bei Aufruf der Funktion optional. Wenn im Skript der Funktion Return() verwendet wird, wird der Ausdruck innerhalb zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

exsqr = Function( {x}, x * x );exsqr( 5 );

```

**Beispiel 2**

```jsl

// y is an optional argumentexmul = Function( {x, y = 3}, x * y );a = exmul( 5 );b = exmul( 5, 10 );Show( a, b );

```

**Beispiel 3**

```jsl

posorneg = Function( {x},	{},	If(		x > 0, Return( "positive" ),		x == 0, Return( "zero" ),		Return( "negative" )	));posorneg( -5.5 );

```

### Get Class Names

**Syntax:** Get Class Names( &lt; &lt;class reference&gt;, ... &gt; )

**Beschreibung:** Gibt eine Liste von Namen sämtlicher derzeit definierter Klassen zurück.

**JMP Version hinzugefügt:** 14

```jsl

Define Class(	"aa",	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )});Define Class(	"bb",	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )});lcaa = New Object( aa() );lcbb = New Object( bb() );lcl = Get Class Names();Show( lcl );lcaa << Delete;lcbb << Delete;Delete Classes( "aa", "bb" );

```

### Get Classes

**Syntax:** Get Classes( &lt; &lt;class reference&gt;, ... &gt; )

**Beschreibung:** Gibt eine Liste von Referenzen auf alle gegenwärtig definierten Klassen zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Define Class(	"aa",	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )});Define Class(	"bb",	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )});lcaa = New Object( aa() );lcbb = New Object( bb() );lcl = Get Classes();Show( lcl );Clear Symbols( lcl );lcaa << Delete;lcbb << Delete;Delete Classes( "aa", "bb" );

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

### Get Environment Variable

**Syntax:** value = Get Environment Variable( string )

**Beschreibung:** Gibt den Wert der angegebenen Umgebungsvariablen aus dem Betriebssystem zurück.



HINWEIS: Beim Macintosh-Betriebssystem wird beim Variablennamen zwischen Groß- und Kleinschreibung unterschieden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Get Environment Variable( "PATH" );

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

all contents = Get Log();headcontents = Get Log( 10 );tailcontents = Get Log( -5 );

```

### Get Namespace Names

**Syntax:** Get Namespace Names( &lt; &lt;namespace reference&gt;, ... &gt; )

**Beschreibung:** Gibt eine Liste von Namen sämtlicher derzeit definierter Namensräume zurück.

**JMP Version hinzugefügt:** 14

```jsl

nsaa = New Namespace(	"aa",	{		x = 1	});nsbb = New Namespace(	"bb",	{		y = 1	});lns = Get Namespace Names();Show( lns );nsaa << Delete;nsbb << Delete;

```

### Get Namespaces

**Syntax:** Get Namespaces( &lt; &lt;namespace reference&gt;, ... &gt; )

**Beschreibung:** Gibt eine Liste von Referenzen auf alle gegenwärtig definierten Namensräume zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

nsaa = New Namespace(	"aa",	{		x = 1	});nsbb = New Namespace(	"bb",	{		y = 1	});lns = Get Namespaces();Show( lns );Clear Symbols( lns );nsaa << Delete;nsbb << Delete;

```

### Get Punctuation Characters

**Syntax:** Get Punctuation Characters(&lt;Exclude Chars(chars) | Include Chars(chars)&gt;)

**Beschreibung:** Gibt eine Zeichenkette mit den Zeichensetzungszeichen zurück, die üblicherweise zum Trennen von Wörtern verwendet werden. Dazu gehören ,:;.?!\\/#@&~()[]<>"\*`%$+=^|{} und häufig verwendete Unicode-Zeichensetzung.

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

Collapse Whitespace(	Substitute( "This...string..has..dots", Items( Get Punctuation Characters(), "" ), " " ));

```

### Get Session Script

**Syntax:** Get Session Script( win1, ... )

**Beschreibung:** Gibt das Sitzungsskript für die angegebenen Fenster zurück. Das Sitzungsskript ist ein JSL-Ausdruck, der die vorgegebenen Fenster, einschließlich Datentabellen, Skriptfenster, Journale und Berichte erneut erstellt. Über JSL-Skripte erstellte Berichte haben begrenzte Unterstützung und versuchen nur, das Layout der Anzeige erneut zu erstellen.

**JMP Version hinzugefügt:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << RunScript( "Bivariate" );Get Session Script( Report( biv ) );

```

### Get Whitespace Characters

**Syntax:** Get Whitespace Characters()

**Beschreibung:** Gibt eine Zeichenkette zurück, die alle Leerzeichen enthält, die typischerweise verwendet werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Get Whitespace Characters();

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

### Is Log Open

**Syntax:** Is Log Open()

**Beschreibung:** Ergebnis zurückgeben, um anzuzeigen, ob das Log-Fenster geöffnet ist

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

If( Is Log Open(),	Close Log());

```

**Beispiel 2**

```jsl

If( !Is Log Open(),	Open Log());

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

### List

**Syntax:** y = {a, b, ...}; y = List( a, b, ... )

**Beschreibung:** Erstellt eine Liste von Elementen, ohne sie auszuwerten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

{1, 2 + 3, [11 22]};

```

### Local

**Syntax:** y = Local( {name=value, ...}, expression )

**Beschreibung:** Löst Namen in lokale Variablen auf.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Local( {a = 1, b},	b = 2;	a + b;);

```

### Local Here

**Syntax:** y = Local Here( expression )

**Beschreibung:** Führt den Ausdruck aus und verwendet für lokale Namen standardmäßig Hier(1).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

y = Local Here(	a = 1;	b = 2;	c = a + b;	c;);

```

### Lock Globals

**Syntax:** Lock Globals( name, ... )

**Beschreibung:** Sperrt angegebene globale Namen, so dass diese nicht geändert und von der Funktion Clear Globals nicht gelöscht werden können.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

exalpha = 0.05;exdelta = 0.5;Watch( exalpha, exdelta );Wait( 3 );Lock Globals( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );Wait( 3 );Unlock Globals( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Lock Symbols

**Syntax:** Lock Symbols( name, ... )

**Beschreibung:** Sperrt angegebene globale Namen, so dass diese nicht geändert und von der Funktion Clear Symbols nicht gelöscht werden können.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

exalpha = 0.05;exdelta = 0.5;Watch( exalpha, exdelta );Wait( 3 );Lock Symbols( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );Wait( 3 );Unlock Symbols( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Log Capture

**Syntax:** string = Log Capture( expr )

**Beschreibung:** Wertet das Argument expr aus und erfasst die Ausgabe, die im JMP-Logfenster angezeigt werden würde. Diese wird stattdessen in einer Zeichenkette zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

"captured:" || Log Capture(	For( i = 1, i <= 3, i++,		Write( Char( i ) );		Write( " " );	));

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

### Method

**Syntax:** m = Method( { arg1 = val1, ... }, expression* )

**Beschreibung:** Eine Methode innerhalb einer Klasse erstellen

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Define Class(	"complex",	real = 0;	imag = 0;	_init_ = Method( {a, b},		real = a;		imag = b;	);	Add = Method( {y},		New Object( complex( real + y:real, imag + y:imag ) )	);	Sub = Method( {y},		New Object( complex( real - y:real, imag - y:imag ) )	);	Mul = Method( {y},		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )	);	Div = Method( {y},		t = New Object( complex( 0, 0 ) );		mag2 = y:Magsq();		t:real = real * y:real + imag * y:imag;		t:imag = imag * y:real + real * y:imag;		t:real = t:real / mag2;		t:imag = t:imag / mag2;		t;	);	Magsq = Method( {},		real * real + imag * imag	);	Mag = Method( {},		Sqrt( real * real + imag * imag )	);	_to string_ = Method( {},		Char( real ) || " + " || Char( imag ) || "i"	);	_show_ = _to string_;);cl = New Object( complex( 1, 2 ) );cl << Delete;Delete Classes( "complex" );

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

New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );N Items( hlist );

```

### Names Default To Here

**Syntax:** Names Default To Here( boolean )

**Beschreibung:** Legt fest, ob nicht aufgelöste Namen gespeichert werden, entweder global/lokal (0) oder im Hier: Namensraum (1).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

/* Variable x will be stored in the Here: namespace by default */x = 1;Show( x );

```

### Namespace

**Syntax:** ns = Namespace( namespace reference )

**Beschreibung:** Gibt eine Referenz auf den vom Argument name angegebenen Namensraum zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Namespace(	"complex",	{		make = Function( {a, b},			Index( a, b, b - a )		),		add = Function( {x, y}, x + y ),		sub = Function( {x, y}, x - y ),		mul = Function( {x, y},			local:z = J( 1, 2 );			local:z[1] = x[1] * y[1] - x[2] * y[2];			local:z[2] = x[1] * y[2] + x[2] * y[1];			local:z;		),		div = Function( {x, y},			local:z = J( 1, 2 );			local:d = (y[1] ^ 2 + y[2] ^ 2);			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;			local:z;		),		write = Function( {x},			Write( x[1], " + ", x[2], "i\!n" )		)	});ns = Namespace( "complex" );Show( ns );ns << Delete;

```

### Namespace Exists

**Syntax:** nsexists = Namespace Exists( namespace reference )

**Beschreibung:** Gibt 1 zurück, wenn der vom Argument name angegebene Namensraum vorhanden ist, andernfalls wird 0 zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ns = New Namespace(	"complex",	{		make = Function( {a, b},			Index( a, b, b - a )		),		add = Function( {x, y}, x + y ),		sub = Function( {x, y}, x - y ),		mul = Function( {x, y},			local:z = J( 1, 2 );			local:z[1] = x[1] * y[1] - x[2] * y[2];			local:z[2] = x[1] * y[2] + x[2] * y[1];			local:z;		),		div = Function( {x, y},			local:z = J( 1, 2 );			local:d = (y[1] ^ 2 + y[2] ^ 2);			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;			local:z;		),		write = Function( {x},			Write( x[1], " + ", x[2], "i\!n" )		)	});nsexists = Namespace Exists( ns );Show( nsexists );ns << Delete;

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

/*Create a custom function that can be used as a format*/Add Custom Functions(	{New Custom Function(		"custom",		"User Defined Format Function",		Function( {inches},			Char( inches ) || " in"		),		<<Custom Format Category( "Custom" ), 	)});

```

**Beispiel 3**

```jsl

/*Create a custom function that can be used as a transform*/Add Custom Functions(	{New Custom Function(		"custom",		"User Defined Transform Function",		Function( {inches},			inches * 2.54		),		<<Transform Category( "Custom" ), 	)});

```

### New Namespace

**Syntax:** ns = New Namespace( &lt;name&gt;, &lt;list of expressions&gt; )

**Beschreibung:** Erstellt einen neuen Namensraum mit dem vom Argument name angegebenen Namen oder mit einem anonymen Namen, sofern name nicht angegeben ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ns = New Namespace(	"complex",	{		make = Function( {a, b},			Index( a, b, b - a )		),		add = Function( {x, y}, x + y ),		sub = Function( {x, y}, x - y ),		mul = Function( {x, y},			local:z = J( 1, 2 );			local:z[1] = x[1] * y[1] - x[2] * y[2];			local:z[2] = x[1] * y[2] + x[2] * y[1];			local:z;		),		div = Function( {x, y},			local:z = J( 1, 2 );			local:d = (y[1] ^ 2 + y[2] ^ 2);			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;			local:z;		),		write = Function( {x},			Write( x[1], " + ", x[2], "i\!n" )		)	});Show( ns );ns << Delete;

```

### New Object

**Syntax:** New Object( "class name" | class name | class reference( constructor arguments* ) )

**Beschreibung:** Erstellt ein Instanzobjekt einer Klasse.

**JMP Version hinzugefügt:** 14

```jsl

Define Class(	"complex",	real = 0;	imag = 0;	_init_ = Method( {a, b},		real = a;		imag = b;	);	Add = Method( {y},		New Object( complex( real + y:real, imag + y:imag ) )	);	Sub = Method( {y},		New Object( complex( real - y:real, imag - y:imag ) )	);	Mul = Method( {y},		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )	);	Div = Method( {y},		t = New Object( complex( 0, 0 ) );		mag2 = y:Magsq();		t:real = real * y:real + imag * y:imag;		t:imag = imag * y:real + real * y:imag;		t:real = t:real / mag2;		t:imag = t:imag / mag2;		t;	);	Magsq = Method( {},		real * real + imag * imag	);	Mag = Method( {},		Sqrt( real * real + imag * imag )	);	_to string_ = Method( {},		Char( real ) || " + " || Char( imag ) || "i"	);	_show_ = _to string_;);cl = New Object( complex( 1, 2 ) );cl << Delete;Delete Classes( "complex" );

```

### Open Log

**Syntax:** Open Log( &lt;bring window to top&gt; )

**Beschreibung:** Log-Fenster öffnen

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Open Log();Show( Is Log Open() );

```

**Beispiel 2**

```jsl

/* Bring Log Windows to the Top */Open Log( 1 );Show( Is Log Open() );

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

### Print

**Syntax:** Print( x, ... )

**Beschreibung:** Zeigt Werte der Argumente im Log an, jeweils einen pro Zeile.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Print( 355 / 113, Pi() );

```

### Quit

**Syntax:** Quit(&lt;"No Save"&gt;); Exit(&lt;"No Save"&gt;)

**Beschreibung:** Beendet JMP.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

If(	New Window( "Quit() example",		<<Type( "Modal" ),		Text Box( "Shut down JMP?" ),		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )	)["Button"] == 1, /*OK==1*/Quit(), /*cancel==-1*/"Good choice.");

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

Recode(	"27513-0000",	{Regex( _rcNow, "(\d\d\d\d\d)-\d+", "\1", GLOBALREPLACE ), Num( _rcNow )});

```

**Beispiel 2**

```jsl

Recode(	"A B C",	{Map Value( _rcNow, {"A", "Apple", "B", "Banana"}, Unmatched( "Unknown fruit" ) )},	By Word);

```

### Recurse

**Syntax:** y = Recurse( x1, ... )

**Beschreibung:** Calls the containing function.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

ex rev = Function( {s},	If( Length( s ) <= 1,		s,		Recurse( Substr( s, 2 ) ) || Left( s, 1 )	));ex rev( "abcd" );

```

### Remove Custom Functions

**Syntax:** Remove Custom Functions({function 1 full name, function 2 full name, ...} | function full name)

**Beschreibung:** Entfernt eine Liste von benutzerdefinierten Funktionen aus der Umgebung.

**JMP Version hinzugefügt:** 14

```jsl

Remove Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Save Log

**Syntax:** f = Save Log( &lt;path&gt; )

**Beschreibung:** Schreibt den Inhalt des Logs in den angegebenen Speicherort einer Datei. Wenn der Schreibvorgang erfolgreich ist, gibt diese Funktion den Namen der erstellten Datei zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Save Log( "$TEMP/log.txt" );exlogText = Load Text File( "$TEMP/log.txt" );Substr( exlogText, 1, 30 );

```

### Send

**Syntax:** r = obj &lt;&lt; msg( args ); r = obj &lt;&lt; msg; r = Send( obj, msg )

**Beschreibung:** Sendet eine Mitteilung (in Form eines Ausdrucks) an ein Objekt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Bivariate( Y( :weight ), X( :height ) ) << Fit Line;

```

### Set Environment Variable

**Syntax:** value = Set Environment Variable( string, &lt; string&gt; )

**Beschreibung:** Legt den Wert der angegebenen Umgebungsvariablen im Betriebssystem fest. Wenn das zweite Argument fehlt oder die Zeichenkette leer ist, wird die Umgebungsvariable gelöscht.



Hinweis: Beim Betriebssystem Macintosh ist die Groß- und Kleinschreibung des Variablennamens zu beachten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Set Environment Variable( "PATH", "some path to a directory" );

```

### Show

**Syntax:** Show( x, ... )

**Beschreibung:** Zeigt Name und Wert der Argumente im Log an, jeweils einen pro Zeile.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show( 355 / 113, Pi() );

```

### Show Classes

**Syntax:** Show Classes( &lt; &lt;class name | class reference&gt;, ... &gt; )

**Beschreibung:** Zeigt den Inhalt aller benutzerdefinierten Klassen an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Define Class(	"complex",	real = 0;	imag = 0;	_init_ = Method( {a, b},		real = a;		imag = b;	);	Add = Method( {y},		New Object( complex( real + y:real, imag + y:imag ) )	);	Sub = Method( {y},		New Object( complex( real - y:real, imag - y:imag ) )	);	Mul = Method( {y},		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )	);	Div = Method( {y},		t = New Object( complex( 0, 0 ) );		mag2 = y:Magsq();		t:real = real * y:real + imag * y:imag;		t:imag = imag * y:real + real * y:imag;		t:real = t:real / mag2;		t:imag = t:imag / mag2;		t;	);	Magsq = Method( {},		real * real + imag * imag	);	Mag = Method( {},		Sqrt( real * real + imag * imag )	);	_to string_ = Method( {},		Char( real ) || " + " || Char( imag ) || "i"	);	_show_ = _to string_;);Show Classes();

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

New Namespace(	"complex",	{		make = Function( {a, b},			Index( a, b, b - a )		),		add = Function( {x, y}, x + y ),		sub = Function( {x, y}, x - y ),		mul = Function( {x, y},			local:z = J( 1, 2 );			local:z[1] = x[1] * y[1] - x[2] * y[2];			local:z[2] = x[1] * y[2] + x[2] * y[1];			local:z;		),		div = Function( {x, y},			local:z = J( 1, 2 );			local:d = (y[1] ^ 2 + y[2] ^ 2);			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;			local:z;		),		write = Function( {x},			Write( x[1], " + ", x[2], "i\!n" )		)	});Show Namespaces( "complex" );Delete Namespaces( "complex" );

```

### Show Symbols

**Syntax:** Show Symbols()

**Beschreibung:** Erstellt eine Liste aller aktuell definierten Variablen und ihrer Werte.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show Symbols();

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

ex = {111, 212, 133, 114, 55};Sort List Into( ex );ex;

```

### Throw

**Syntax:** Throw(&lt;message&gt;, &lt;Boolean&gt;)

**Beschreibung:** Leitet die Ausführung zum eingeschlossenen Try() um. Andernfalls wird die Skriptausführung gestoppt. Wenn message mit einem Ausrufezeichen beginnt, kommt es zu einem schwerwiegenden Fehler, der von Try() nicht erfasst werden kann. Das zweite Argument ist ein optionaler Boolescher Wert zum Erstellen eines Traceback.

**JMP Version hinzugefügt:** Vor Version 14

#### Fatal Throw

```jsl

Try( Throw( "!This is a fatal error" ), Print( "CATCH message not reached" ) );Print( "AFTER TRY message not reached" );

```

#### Traceback

```jsl

Throw( "A line number is included in this error", 1 );

```

#### Try-Catch

```jsl

Try( If( Random Uniform() < 0.5, 1, Throw() ), "thrown" );

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

### Type

**Syntax:** y = Type( x )

**Beschreibung:** Gibt eine Zeichenkette zurück, die den Typ des Wert des Arguments x nennt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Type( [1 2 3] );

```

### Unlock Globals

**Syntax:** Unlock Globals( name, ... )

**Beschreibung:** Entsperrt angegebene globale Namen, so dass diese geändert und von der Funktion Clear Globals gelöscht werden können.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

exalpha = 0.05;exdelta = 0.5;Watch( exalpha, exdelta );Wait( 3 );Lock Globals( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );Wait( 3 );Unlock Globals( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Unlock Symbols

**Syntax:** Unlock Symbols( name, ... )

**Beschreibung:** Entsperrt angegebene globale Namen, so dass diese geändert und von der Funktion Clear Symbols gelöscht werden können.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

exalpha = 0.05;exdelta = 0.5;Watch( exalpha, exdelta );Wait( 3 );Lock Symbols( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );Wait( 3 );Unlock Symbols( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Wait

**Syntax:** Wait( &lt;x&gt; )

**Beschreibung:** Wartet x Sekunden, bevor die Ausführung fortgesetzt wird. Der Standardwert für x ist 3 Sekunden. Wenn x 0 oder größer ist, schließt JMP alle Betriebssystemereignisse (z. B. das Zeichnen auf dem Bildschirm) sowie alle anstehenden Rückrufe (z. B. Formelauswertung) zusätzlich zur Wartezeit ab. Wenn x kleiner als 0 ist, werden nur die Bildschirmzeichnung und die anstehenden Bertriebssystemereignisse vor dem Fortfahren definitiv abgeschlossen.

**JMP Version hinzugefügt:** Vor Version 14

#### Betriebssystemereignisse

```jsl

Wait( -1 ); // Wait for OS events

```

#### Einfach

```jsl

Wait( 1.5 );

```

#### Rückrufe

```jsl

Wait( 0 ); // Wait for OS events and callbacks

```

### Watch

**Syntax:** w = Watch( all|name1, ... )

**Beschreibung:** Erstellt ein Fenster mit Variablen aus den Namensräumen Global, Here und Local und ihren Werten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

x = 1;y = 2;z = "abc";w = Watch( all );Wait( 5 );x = x * 5;y = y / 25;z = z || "def";Wait( 5 );w << close Window();

```

### Where

**Syntax:** Where( &lt;dt&gt;, clause )

**Beschreibung:** Gibt Indizes (üblicherweise Zeilennummern) zurück, die der vorgegebenen Where-Klausel entsprechen. Das optionale dt ändert die Current Data Table während der Auswertung. Diese Klauseln werden von JMP häufig unter Verwendung des Datenfilters geschrieben. Das ist häufig schneller als die Verwendung von Loc, <<Get Rows Where oder <<Select Where. Das Verhalten ist undefiniert, wenn die Klausel die Sequenzen oder Symbole während der Auswertung ändert.

**JMP Version hinzugefügt:** 18

#### Matrix/Liste

```jsl

xs = [10 20 30 . 50];xs[Where( xs >= 20 )];xs[Where( !Is Missing( xs ) )];ys = {10, 20, "30", ., 50};ys[Where( ys >= 20 )];

```

#### Sonstige

```jsl

xs = [10 20 30 . 50];ys = [0 0 0 1 1];Where( xs > 20 & ys );xs = {{10}, {20}, {15}};Where( xs[1] < 18 );

```

#### Spalten

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Get Rows Where( :sex == "M" );Where( :sex == "M" );Where( dt, :sex == "M" );

```

#### Spaltenfunktionen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Select << Select Rows( Where( Col Max( :height, :age ) >= 68 ) );dt << Clear Select << Select Rows( Where( :height == Col Max( :height, :age ) ) );

```

#### Zeileneigenschaften

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( [2 4 6] ) << Exclude( 1 );Where( Excluded() );Where( !Excluded() );

```

### Wild

**Syntax:** Wild()

**Beschreibung:** Kennzeichnet die Position eines Platzhalters, der einem beliebigen Ausdruck entspricht (wird nur in Ausdrucksmustern verwendet).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

extestexpr = Expr(	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );	Show( "END" ););Extract Expr( extestexpr, For( i = 1, Wild(), i++, Print( "YES!!!" ) ) );

```

### Wild List

**Syntax:** Wild List()

**Beschreibung:** Kennzeichnet eine Reihe von Platzhalterargumenten , die eine beliebige Entsprechung haben können (wird nur in Ausdrucksmustern verwendet).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

extestexpr = Expr(	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );	Show( "END" ););Extract Expr( extestexpr, For( i = 1, Wild List(), Print( "YES!!!" ) ) );

```

### Write

**Syntax:** Write( x, ... )

**Beschreibung:** Zeigt die angegebenen Werte im Log an, ohne Anführungszeichen, Leerzeichen oder Zeilenumbrüche hinzuzufügen (wie es bei Print() geschieht).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Write( "fraction = ", 355 / 113, "\!N", "pi       = ", Pi() );

```

