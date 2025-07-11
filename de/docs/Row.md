# Row



### As Table

**Syntax:** dt = As Table( matrix, <matrix2,...> < <<invisible/private>, < <<Column Names(name list) > )

**Beschreibung:** Konvertiert eine Matrix in eine Datentabelle. Die Option invisible kann verwendet werden, um die Anzeige der Tabelle zu unterdrücken.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
As Table( [1 2 3, 4 5 6] );

```

### Col Stored Value

**Syntax:** y = Col Stored Value( <dt>, xCol, <row=Row()> )

**Beschreibung:** Gibt einen Spaltenwert zurück, auf den keine Spalteneigenschaften angewendet wurden. Wenn keine Zeilenoption angegeben ist, wird die aktuelle Zeile angenommen.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Equity.jmp" );
:JOB << Set Property( "Missing Value Codes", {"Other"} );
y1 = Col Stored Value( :JOB, 10 );
y2 = Col Stored Value( :JOB, 11 );
y3 = Col Stored Value( :JOB, 14 );
y4 = Col Stored Value( :JOB, 15 );
Show( y1, y2, y3, y4 );

```

### Column

**Syntax:** y = Column( name|number );

y = Column( dataTable, name|number, <"formatted"> )

**Beschreibung:** Gibt eine Referenz auf die angegebene Spalte in der Datentabelle zurück. Das Schlüsselwort „formatiert“ ermöglicht den Zugriff auf formatierte Spalten wie die Wertbeschriftung.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
col4 = Column( 4 );
ht = Column( "height" );
col4[1] + ht[2];

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << run script( "Set Sex Value Labels" );
col = Column( dt, "sex", "formatted" );
Write( "\!n", col[5] );
Write( "\!nData value returned is the formatted value of row 5." );

```

### Column Name

**Syntax:** name = Column Name( n )

**Beschreibung:** Gibt den Namen der n-ten Spalte der aktuellen Datentabelle zurück.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Column Name( 4 );

```

### Count

**Syntax:** y = Count( start, end, s, <n=1> )

**Beschreibung:** Gibt den i-ten Wert in der Zahlenreihe von start bis end mit s Schritten zurück und wiederholt jede Zahl n Mal, wobei i durch den Wert der Funktion Row() festgelegt wird. Wegen der Abhängigkeit von der Funktion Row() wird die Funktion Count() im Allgemeinen in Spaltenformeln verwendet.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
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

### Current Data Table

**Syntax:** dt = Current Data Table( <Project(title|index|box|window)> ); Current Data Table( dt )

**Beschreibung:** Gibt die aktuelle Datentabelle zurück oder macht die angegebene Datentabelle zur aktuellen Tabelle, wenn eine Tabelle angegeben ist.



Um ein Projekt anzugeben, verwenden Sie das optionale Argument Projekt() mit einem Titel, Index, Anzeigefeld oder Fensterobjekt. Verwenden Sie Projekt(0), um kein Projekt anzugeben, wenn das Skript in einem Projekt ausgeführt wird.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Current Data Table() << Get Column Names;

```

### Data Table

**Syntax:** dt = Data Table( name|number )

**Beschreibung:** Gibt eine Referenz auf die angegebene Datentabelle zurück.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Data Table( 1 );

```

### Dif

**Syntax:** y = Dif( x, <n=1> )

**Beschreibung:** Gibt x - Lag( x, n ) zurück, auch bekannt als „erste Differenz“. Wegen der Abhängigkeit von Row() ist Dif() hauptsächlich in Spaltenformeln nützlich.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
Dif( :height, 2 );

```

### Dim

**Syntax:** y = Dim(); y = Dim( dt ); y = Dim( matrix )

**Beschreibung:** Gibt einen Zeilenvektor mit den Dimensionen der aktuellen Datentabelle, einer angegebenen Datentabelle oder einer Matrix zurück. Die Dimensionen sind die Anzahl der Zeilen und die Anzahl der Spalten und werden in dieser Reihenfolge aufgelistet.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
Dim( [11 22, 33 44, 55 66] );

```

### Get Data Table

**Syntax:** dt = Get Data Table( <Project(title|index|box|window)>, name|index )

**Beschreibung:** Gibt eine Referenz auf die angegebene Datentabelle zurück.



Die Suche ist auf Tabellen im aktuellen Projekt begrenzt (oder auf kein Projekt, wenn das Skript nicht in einem Projekt ausgeführt wird).



Um ein Projekt anzugeben, verwenden Sie das optionale Argument Projekt() mit einem Titel, Index, Anzeigefeld oder Fensterobjekt. Verwenden Sie Projekt(0), um kein Projekt anzugeben, wenn das Skript in einem Projekt ausgeführt wird.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Get Data Table( 1 );

```

### Get Data Table List

**Syntax:** tableList = Get Data Table List( <Project(title|index|box|window)> )

**Beschreibung:** Gibt eine Liste aller geöffneten Datentabellen zurück.



Die Liste ist auf Tabellen im aktuellen Projekt begrenzt (oder auf kein Projekt, wenn das Skript nicht in einem Projekt ausgeführt wird).



Um ein Projekt anzugeben, verwenden Sie das optionale Argument Projekt() mit einem Titel, Index, Anzeigefeld oder Fensterobjekt. Verwenden Sie Projekt(0), um kein Projekt anzugeben, wenn das Skript in einem Projekt ausgeführt wird.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Get Data Table List();

```

**Beispiel 2**

```js

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
Get Data Table List( Project( project ) );

```

### Lag

**Syntax:** y = Lag( <x>, <n=1> )

**Beschreibung:** Gibt den Wert des Arguments x zurück, wobei für die aktuelle Zeile Row() - n festgelegt wird. Wegen der Abhängigkeit von Row() ist Lag() hauptsächlich in Spaltenformeln nützlich.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
Lag( :height, 2 );

```

### N Row

**Syntax:** y = N Row(); y = N Row( dt ); y = N Row( matrix )

**Beschreibung:** Gibt die Anzahl der Zeilen in der aktuellen Datentabelle, einer angegebene Datentabelle oder einer Matrix zurück.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
N Row( [11 22, 33 44] );

```

### N Rows

**Syntax:** y = N Rows(); y = N Rows( dt ); y = N Rows( matrix )

**Beschreibung:** Gibt die Anzahl der Zeilen in der aktuellen Datentabelle, einer angegebene Datentabelle oder einer Matrix zurück.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
N Rows( [11 22, 33 44] );

```

### N Table

**Syntax:** n = N Table()

**Beschreibung:** Gibt die Anzahl der aktuell geöffneten Datentabellen zurück.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
N Table();

```

**Beispiel 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Open( "$SAMPLE_DATA/Solubility.jmp" );
d = {};
For( i = 1, i <= N Table(), i++,
	d[i] = Data Table( i ) << GetName
);
d;

```

### New Column

**Syntax:** dc = New Column( name, <"Numeric"|"Character"|"RowState"|"Expression">, <"Continuous"|"Ordinal"|"Nominal"|"Multiple Response"|"Unstructured Text"|"Vector"|"None">, <Width( n )|Format(format name, width, precision)>, <Like(:other column)>, <actions> )

**Beschreibung:** Erstellt eine neue Spalte in der aktuellen Datentabelle. Die optionalen Argumente actions sind alle Meldungen, die von Datenspalten unterstützt werden.

**JMP Version hinzugefügt:** Vor Version 14

**Ähnlich**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "like name", Like( :name ) );

```

**Einfach**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "example", "Numeric", "Continuous", Width( 5 ), <<Set Each Value( 100 ) );

```

### New Column by Text Matching

**Syntax:** dc = New Column by Text Matching( Column(:name), Set Regex(), <Output Column Name("Name")>, <Use Result(0 | 1)> )

**Beschreibung:** Erstellt eine neue Spalte durch Ausführen einer Übereinstimmung des Musters eines regulären Ausdrucks mit einer vorhandenen Spalte.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
New Column by Text Matching(
	Column( :Narrative Cause ),
	Set Regex( Library( "Words" ), Library( "Time" ), Library( "Units" ) ),
	Output Column Name( "Match Output" ),
	Use Result( 1 )
);

```

### New Table

**Syntax:** dt = New Table( name, <visibility("private"|"invisible"|"visible")>, <Enable Filter Views(bool)>, <actions> )

**Beschreibung:** Erstellt eine neue Datentabelle. "Invisible" blendet die Datentabelle aus der Ansicht aus, zeigt sie jedoch im JMP-Hauptfenster an. "Private" blendet die Tabelle vollständig aus. "Visible" ist die Standardeinstellung und erstellt eine normale Tabelle, die sichtbar ist und im JMP-Hauptfenster angezeigt wird. Die optionalen Argumente actions sind alle Meldungen, die von der Datentabelle unterstützt werden.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "LOUISE", "JANE"} ) ),
	New Column( "age", Nominal, Set Values( [12, 13, 13] ) ),
	New Column( "weight", Continuous, Set Values( [95, 123, 74] ) )
);

```

### Row

**Syntax:** y = Row(); Row() = y

**Beschreibung:** Gibt die aktuelle Zeile einer Datentabelle zurück. Kann als L-Wert festgelegt werden. Zurücksetzen der aktuellen Zeile durch Zuweisen des Werts 0.

**JMP Version hinzugefügt:** Vor Version 14

**Zeile festlegen**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
:height * :weight;

```

**Zeile zurücksetzen**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( 5 );
Show( Row() );
Row() = 0;

```

### Sequence

**Syntax:** y = Sequence( start, end, <incr=1>, <n=1> )

**Beschreibung:** Gibt das Row(). Element in der Zahlenfolge von start bis end um incr inkrementiert zurück. Jede Zahl in der Folge wird n Mal wiederholt. Wegen ihrer Abhängigkeit von Row() ist die Funktion Sequence() hauptsächlich in Spaltenformeln nützlich. Um Folgen als JSL-Matrizen zu erstellen, siehe Index().

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Row() = 3;
Sequence( 1, 9, 2 );

```

### Subscribe to Data Table List

**Syntax:** aSub = Subscribe to Data Table List( <subscriber name | "">, <OnOpen(fn) | OnClose(fn) | On Rename(fn)>)

**Beschreibung:** Abonniert die Datentabellenliste, um benachrichtigt zu werden, wenn eine neue Datentabelle hinzugefügt oder geschlossen wurde.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```js

Names Default To Here( 1 );
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

```js

Names Default To Here( 1 );
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

```js

Names Default To Here( 1 );
{11, 12, 13}[2];

```

### Suppress Formula Eval

**Syntax:** Suppress Formula Eval( <suppress=1> )

**Beschreibung:** Unterdrückt die Auswertung von Formeln in allen Datentabellen, wenn das Argument ungleich 0 ist.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Suppress Formula Eval( 1 );

```

### Unsubscribe to Data Table List

**Syntax:** aSub = Unsubscribe to Data Table List(<subscriber name>, <"OnOpen" | "OnClose" | "OnRename" | "ALL">)

**Beschreibung:** Entfernt ein Abonnement der Datentabellenliste, das über den Befehl „Datentabellenliste abonnieren“ hinzugefügt wurde.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```js

Names Default To Here( 1 );
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

```js

Names Default To Here( 1 );
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

