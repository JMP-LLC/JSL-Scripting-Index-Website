# TableBox



## Elementmeldungen

### Add Row

**Syntax:** obj &lt;&lt; Add Row( {values,...} )

**Beschreibung:** Fügt der Tabelle eine Zeile mit Daten hinzu

```jsl

New Window( "test",	tb = Table Box(		String Col Box( "string col", {"a"} ),		Number Col Box( "number col", {1} )	));tb << add row( {"b", 2} );

```

### Bootstrap

**Syntax:** obj &lt;&lt; Bootstrap( nsample, Random Seed(number), Fractional Weights(0|1), Split Selected Column(0|1), Discard Stacked Table if Split Works(0|1) )

**Beschreibung:** Bootstrap dieser Analyse: Es werden viele Wiederholungen mit unterschiedlichen Gewichtungen der neuen Stichproben durchgeführt und Tabellen wie ausgewählt erfasst.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ) );obj << Fit Line;(obj << Report)[Table Box( 1 )] << Bootstrap(	50,	Fractional Weights( 1 ),	Split Selected Column( 1 ));

```

### Copy Selected Table Rows

**Syntax:** obj &lt;&lt; Copy Selected Table Rows

**Beschreibung:** Inhalt der ausgewählten Tabellenzeilen in die Zwischenablage kopieren

**JMP Version hinzugefügt:** 15

### Copy Table

**Syntax:** obj &lt;&lt; Copy Table

**Beschreibung:** Inhalt der Tabelle in die Zwischenablage kopieren

**JMP Version hinzugefügt:** 15

### Delete Row

**Syntax:** obj &lt;&lt; Delete Row( row number )

**Beschreibung:** Löscht eine Zeile mit Daten in der Tabelle

```jsl

New Window( "test",	tb = Table Box(		String Col Box( "string col", {"a", "b"} ),		Number Col Box( "number col", {1, 2} )	));tb << delete row( 1 );

```

### Filter Where

**Syntax:** obj &lt;&lt; Filter Where

**Beschreibung:** Filtert Zeilen in der Tabelle basierend auf den Werten in der Zeile.

**JMP Version hinzugefügt:** 17

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << set selectable rows( 1 );tb << filter where( "Elevation (meters)"n < 4000 | Mountain == "K2" );

```

### Get

**Syntax:** obj &lt;&lt; Get

**Beschreibung:** Gibt die Einträge der Tabelle als Liste zurück.

```jsl

Open( "$SAMPLE_DATA/Baltic.jmp" );d = Distribution( Continuous Distribution( Column( :ls ) ) );rpt = d << report;tb = rpt[Table Box( 1 )];Print( tb << Get );

```

### Get As Matrix

**Syntax:** obj &lt;&lt; Get As Matrix( &lt;"Visible"&gt; )

**Beschreibung:** Gibt die numerischen Einträge der Tabelle als Matrix zurück.  Wenn die Option Visible angegeben ist, werden nur sichtbare Spalten eingeschlossen.

```jsl

Open( "$SAMPLE_DATA/Baltic.jmp" );d = Distribution( Continuous Distribution( Column( :ls ) ) );rpt = d << report;tb = rpt[Table Box( 1 )];Print( tb << Get As Matrix );

```

### Get Base Data Font

**Syntax:** font = obj &lt;&lt; Get Base Data Font

**Beschreibung:** Gibt die Basisschriftart für vom Feld dargestellten Text zurück. Basisschriftarten sind vordefinierte Namen wie Title, Text, Annotation und andere, die in den Voreinstellungen für Schriftarten angegeben sind.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Get Base Data Font;

```

### Get Base Title Font

**Syntax:** font = obj &lt;&lt; Get Base Title Font

**Beschreibung:** Gibt die Basisschriftart für vom Feld dargestellten Text zurück. Basisschriftarten sind vordefinierte Namen wie Title, Text, Annotation und andere, die in den Voreinstellungen für Schriftarten angegeben sind.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Get Base Title Font;

```

### Get Click Sort

**Syntax:** 0|1 = obj &lt;&lt; Get Click Sort

**Beschreibung:** 1, wenn die Tabelle durch einfaches Klicken auf eine Spaltenüberschrift sortiert werden kann, ansonsten 0

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Get Click Sort;

```

### Get Column Borders

**Syntax:** obj &lt;&lt; Get Column Borders( state=0|1 )

**Beschreibung:** Gibt 1 zurück, wenn die Spaltenränder gerade gezeichnet werden

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Get Column Borders;

```

### Get Column Group Borders

**Syntax:** obj &lt;&lt; Get Column Group Borders( state=0|1 )

```jsl

New Window( "Mountains",	tb = Table Box(		Col Span Box(			"Column Span",			String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} )		),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Get Column Group Borders;

```

### Get Context Menu Item State

**Syntax:** 0|1|-1 = obj &lt;&lt; Get Context Menu Item State( index )

**Beschreibung:** Ruft den Zustand des Menüelements index im Kontextmenü ab. Der Zustand ist normal (0), aktiviert (1) oder deaktiviert (-1).

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Context Menu Script( {"A", Print( "A" ), "B", Print( "B" ), "C", Print( "C" )} );tb << Set Context Menu Item State( 2, -1 );tb << Get Context Menu Item State( 2 );

```

### Get Context Menu Script

**Syntax:** list = obj &lt;&lt; Get Context Menu Script

**Beschreibung:** Gibt das an das aufrufende Objekt angehängte Kontextmenüskript zurück.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Context Menu Script(	{"Beep", Beep(), "Beep Twice", Beep() ; Wait( 1.0 ) ; Beep() ; ,	"Get Context Menu Script", Print( tb << Get Context Menu Script )});

```

### Get Context Menu Submenu

**Syntax:** obj &lt;&lt; Get Context Menu Submenu( index )

**Beschreibung:** Gibt die Anzahl von Untermenüs unter dem vorgegebenen Menüelement an

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Context Menu Script(	{"A", Print( "A" ), "B", Print( "B" ), "B1", Print( "B1" ), "B2", Print( "B2" ), "B3",	Print( "B3" ), "C", Print( "C" )});tb << Set Context Menu Submenu( 2, 3 );tb << Get Context Menu Submenu( 2 );

```

### Get Data Font Name

**Syntax:** obj &lt;&lt; Get Data Font Name

**Beschreibung:** Gibt den Namen der Schriftart zurück.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Data Font Name( "Times New Roman" );tb << Get Data Font Name;

```

### Get Data Font Scale

**Syntax:** obj &lt;&lt; Get Data Font Scale

**Beschreibung:** Gibt den aktuellen Skalierungsfaktor für die Schriftart zurück.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Get Data Font Scale;

```

### Get Data Font Size

**Syntax:** obj &lt;&lt; Get Data Font Size

**Beschreibung:** Gibt die Größe der Schriftart zurück.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Get Data Font Size;

```

### Get Data Font Style

**Syntax:** obj &lt;&lt; Get Data Font Style

**Beschreibung:** Gibt den Namen des Schriftschnitts zurück.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Data Font Name( "Arial" );tb << Set Data Font Style( "Italic" );tb << Get Data Font Style;

```

### Get Font

**Syntax:** obj &lt;&lt; Get Font

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Get Font;

```

### Get Heading Column Borders

**Syntax:** obj &lt;&lt; Get Heading Column Borders( state=0|1 )

**Beschreibung:** Gibt 1 zurück, wenn die Spaltenüberschriften der Tabelle derzeit Ränder haben

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Get Heading Column Borders;

```

### Get Heading Underline Color

**Syntax:** obj &lt;&lt; Heading Underline Color( color ); color = obj &lt;&lt; Get Heading Underline Color

**JMP Version hinzugefügt:** 19

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Underline Headings( 1 );tb << Heading Underline Color( "Black" );Show( tb << Get Heading Underline Color );

```

### Get Locked Columns

**Syntax:** obj &lt;&lt; Get Locked Columns

**Beschreibung:** Die Anzahl von Spalten, die nicht mit dem Anfasswerkzeug (Hand) gezogen werden können oder vor denen keine Spalten abgelegt werden können.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << set locked columns( 1 );tb << get locked columns();

```

### Get Names

**Syntax:** obj &lt;&lt; Get Names

**Beschreibung:** Gibt eine Liste der Spaltennamen zurück.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Get Names();

```

### Get Row Border Color

**Syntax:** obj &lt;&lt; Row Border Color( color ); color = obj &lt;&lt; Get Row Border Color

**JMP Version hinzugefügt:** 19

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Row Borders( 1 );tb << Row Border Color( "Black" );Show( tb << Get Row Border Color );

```

### Get Row Borders

**Syntax:** obj &lt;&lt; Get Row Borders( state=0|1 )

**Beschreibung:** Gibt 1 zurück, wenn über und unter jeder Zeile Linien gezeichnet sind

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Get Row Borders;

```

### Get Row Change Function

**Syntax:** obj &lt;&lt; Get Row Change Function

**Beschreibung:** Gibt den Ausdruck zurück, der ausgewertet wird, wenn eine Zeile ausgewählt wird.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Selectable Rows();tb << set row change function( Function( {this}, Print( this << get selected rows ) ) );tb << get row change function;

```

### Get Row Height Scale

**Syntax:** obj &lt;&lt; Row Height Scale( number ); number = obj &lt;&lt; Get Row Height Scale

**Beschreibung:** Skaliert die Standardhöhe oder die Zeilen einer Tabelle. Der Standardwert ist 1.

**JMP Version hinzugefügt:** 19

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Row Height Scale( 3 );tb << Get Row Height Scale();

```

### Get Row Vertical Alignment

**Syntax:** obj &lt;&lt; Row Vertical Alignment( "Oben"|"Mitte"|"Baseline"|"Unten" ); "Oben"|"Mitte"|"Baseline"|"Unten" = obj &lt;&lt; Get Row Vertical Alignment

**Beschreibung:** Legt die vertikale Ausrichtung des Texts oder der Zahlen in den Zeilen einer Tabelle fest

**JMP Version hinzugefügt:** 19

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Row Vertical Alignment( "Bottom" );tb << Get Row Vertical Alignment();tb << Row Height Scale( 3 );

```

### Get Selectable Rows

**Syntax:** obj &lt;&lt; Get Selectable Rows

**Beschreibung:** Gibt „wahr“ zurück, wenn das Tabellenfeld gegenwärtig die Zeilenauswahl gestattet

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Get Selectable Rows();

```

### Get Selected Row Color

**Syntax:** obj &lt;&lt; Get Selected Row Color

**Beschreibung:** Ruft die Hintergrundfarbe ausgewählter Zeilen ab

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Selectable Rows();tb << Set Selected Row Color( "Red" );Color To RGB( tb << Get Selected Row Color );

```

### Get Selected Rows

**Syntax:** obj &lt;&lt; Get Selected Rows

**Beschreibung:** Gibt eine Matrix mit Nummern ausgewählter Zeilen zurück.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Selected Rows( [1, 4] );Print( tb << Get Selected Rows() );

```

### Get Shade Alternate Rows

**Syntax:** obj &lt;&lt; Get Shade Alternate Rows( state=0|1 )

**Beschreibung:** Gibt 1 zurück, wenn jede zweite Zeile schattiert ist

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Get Shade Alternate Rows;

```

### Get Shade Cells

**Syntax:** obj &lt;&lt; Get Shade Cells( state=0|1 )

**Beschreibung:** Gibt 1 zurück, wenn der Zellenbereich der Tabelle einen schattierten Hintergrund hat

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Get Shade Cells;

```

### Get Shade Headings

**Syntax:** obj &lt;&lt; Get Shade Headings( state=0|1 )

**Beschreibung:** Gibt 1 zurück, wenn die Spaltenüberschriften der Tabelle derzeit schattiert sind

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Get Shade Headings;

```

### Get Title Font

**Syntax:** obj &lt;&lt; Get Title Font

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Get Title Font;

```

### Get Title Font Name

**Syntax:** obj &lt;&lt; Get Title Font Name

**Beschreibung:** Gibt den Namen der Schriftart zurück.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Title Font Name( "Times New Roman" );tb << Get Title Font Name;

```

### Get Title Font Scale

**Syntax:** obj &lt;&lt; Get Title Font Scale

**Beschreibung:** Gibt den aktuellen Skalierungsfaktor für die Schriftart zurück.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Get Title Font Scale;

```

### Get Title Font Size

**Syntax:** obj &lt;&lt; Get Title Font Size

**Beschreibung:** Gibt die Größe der Schriftart zurück.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Get Title Font Size;

```

### Get Title Font Style

**Syntax:** obj &lt;&lt; Get Title Font Style

**Beschreibung:** Gibt den Namen des Schriftschnitts zurück.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Title Font Name( "Arial" );tb << Set Title Font Style( "Italic" );tb << Get Title Font Style;

```

### Get Underline Headings

**Syntax:** obj &lt;&lt; Get Underline Headings( state=0|1 )

**Beschreibung:** Gibt 1 zurück, wenn die Spaltenüberschriften unterstrichen sind

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Get Underline Headings;

```

### Group By Column

**Syntax:** obj &lt;&lt; Group By Column( &lt;column index or title&gt;, &lt;ascending=0|1&gt; )

**Beschreibung:** Gruppiert alle Zeilen mit demselben Wert und sortiert die Tabelle auf der Grundlage dieser Gruppen. Standardmäßig wird absteigend sortiert.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$sample_data\big class.jmp" );New Window( "Test", dtb = Data Table Box( dt ) );dtb << sort by column( 4 );dtb << group by column( 3 );dtb << set click sort( 1 );

```

### Heading Underline Color

**Syntax:** obj &lt;&lt; Heading Underline Color( color ); color = obj &lt;&lt; Get Heading Underline Color

**JMP Version hinzugefügt:** 19

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Underline Headings( 1 );tb << Heading Underline Color( "Black" );Show( tb << Get Heading Underline Color );

```

### Insert Row

**Syntax:** obj &lt;&lt; Insert Row( row number, {values,...} )

**Beschreibung:** Fügt eine Zeile mit Daten in die Tabelle ein

```jsl

New Window( "test",	tb = Table Box(		String Col Box( "string col", {"a"} ),		Number Col Box( "number col", {1} )	));tb << insert row( 1, {"b", 2} );

```

### Make Combined Data Table

**Syntax:** obj &lt;&lt; Make Combined Data Table

**Beschreibung:** Erstellt eine Datentabelle, die auch den Bericht nach Berichtstabellen mit denselben Spalten durchsucht und alle gefundenen in der neuen Datentabelle zusammenfügt.

```jsl

Open( "$SAMPLE_DATA/Baltic.jmp" );d = Distribution(	Continuous Distribution( Column( :ls ) ),	Continuous Distribution( Column( :ha ) ));rpt = d << report;tb = rpt[Table Box( 1 )];tb << Make Combined Data Table;

```

### Make Into Data Table

**Syntax:** obj &lt;&lt; Make Into Data Table( &lt;Invisible(bool) | Private(bool)&gt; )

**Beschreibung:** Erstellt eine neue Datentabelle mit Werten im TableBox.

**Beispiel 1**

```jsl

Open( "$SAMPLE_DATA/Baltic.jmp" );d = Distribution( Continuous Distribution( Column( :ls ) ) );rpt = d << report;tb = rpt[Table Box( 1 )];tb << Make Into Data Table;

```

**Beispiel 2**

```jsl

Open( "$SAMPLE_DATA/Baltic.jmp" );d = Distribution( Continuous Distribution( Column( :ls ) ) );rpt = d << report;tb = rpt[Table Box( 1 )];tb << Make Into Data Table( invisible( 1 ) );

```

### Reorder Columns

**Syntax:** obj &lt;&lt; Reorder Columns( from column index,to column index )

**Beschreibung:** Ordnet die Spalte neu und positioniert from column index anstelle von to column index.

```jsl

Open( "$SAMPLE_DATA/Baltic.jmp" );d = Distribution( Continuous Distribution( Column( :ls ) ) );rpt = d << report;tb = rpt[Table Box( 1 )];Wait( 1 );tb << Reorder Columns( 1, 3 );

```

### Reset Filter

**Syntax:** obj &lt;&lt; Reset Filter

**Beschreibung:** Löscht eine vorhandene Meldungen „Filtern nach Bedingung“ und zeigt alle Zeilen in der Tabelle an.

**JMP Version hinzugefügt:** 17

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << set selectable rows( 1 );tb << filter where( "Elevation (meters)"n < 4000 | Mountain == "K2" );Wait( 2 );tb << Reset Filter;

```

### Reset Style

**Syntax:** obj &lt;&lt; Reset Style

**Beschreibung:** Setzt den Tabellenstil basierend auf den Einstellungen zurück

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Shade Cells( 1 );tb << Reset Style;

```

### Row Border Color

**Syntax:** obj &lt;&lt; Row Border Color( color ); color = obj &lt;&lt; Get Row Border Color

**JMP Version hinzugefügt:** 19

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Row Borders( 1 );tb << Row Border Color( "Black" );Show( tb << Get Row Border Color );

```

### Row Height Scale

**Syntax:** obj &lt;&lt; Row Height Scale( number ); number = obj &lt;&lt; Get Row Height Scale

**Beschreibung:** Skaliert die Standardhöhe oder die Zeilen einer Tabelle. Der Standardwert ist 1.

**JMP Version hinzugefügt:** 19

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Row Height Scale( 3 );tb << Get Row Height Scale();

```

### Row Vertical Alignment

**Syntax:** obj &lt;&lt; Row Vertical Alignment( "Oben"|"Mitte"|"Baseline"|"Unten" ); "Oben"|"Mitte"|"Baseline"|"Unten" = obj &lt;&lt; Get Row Vertical Alignment

**Beschreibung:** Legt die vertikale Ausrichtung des Texts oder der Zahlen in den Zeilen einer Tabelle fest

**JMP Version hinzugefügt:** 19

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Row Vertical Alignment( "Bottom" );tb << Get Row Vertical Alignment();tb << Row Height Scale( 3 );

```

### Select Where

**Syntax:** obj &lt;&lt; Select Where

**Beschreibung:** Wählt Zeilen in der Tabelle basierend auf den Werten in der Zeile aus.

**JMP Version hinzugefügt:** 15

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << set selectable rows( 1 );tb << select where( "Elevation (meters)"n < 4000 | Mountain == "K2" );

```

### Set Base Data Font

**Syntax:** obj &lt;&lt; Set Base Data Font( "Text"|"Überschrift"|"Titel"|"Klein"|"Mono"|"Formeleditor"|"Anmerkung"|"Achse"|"Symbol"|"Achsentitel"|"Graphenbeschriftung"|"Legende"|"Graphentitel"|"Titel"|"Datentabelle"|"Hover-Beschriftung" )

**Beschreibung:** Legt die Basisschriftart für vom Feld dargestellten Text fest.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));Wait( 2 );tb << Set Base Data Font( "Data" );

```

### Set Base Title Font

**Syntax:** obj &lt;&lt; Set Base Title Font( "Text"|"Überschrift"|"Titel"|"Klein"|"Mono"|"Formeleditor"|"Anmerkung"|"Achse"|"Symbol"|"Achsentitel"|"Graphenbeschriftung"|"Legende"|"Graphentitel"|"Titel"|"Datentabelle"|"Hover-Beschriftung" )

**Beschreibung:** Legt die Basisschriftart für vom Feld dargestellten Text fest.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));Wait( 2 );tb << Set Base Title Font( "Title" );

```

### Set Cell Changed Function

**Syntax:** obj &lt;&lt; Set Cell Changed Function( Function({thisBox, col box, row}, &lt;script&gt;;) )

**Beschreibung:** Legt eine Funktion fest, die immer dann aufgerufen wird, wenn der Benutzer eine Zelle in einer Spalte in der Tabelle bearbeitet

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Edit Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Edit Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Cell Changed Function(	Function( {thisBox, col, row},		Print(			(col << get heading) || ": row:" || Char( row ) || " is now " ||			Char( col << get( row ) )		)	));

```

### Set Click Sort

**Syntax:** obj &lt;&lt; Set Click Sort( &lt;state=0|1&gt; )

**Beschreibung:** Gestattet das Sortieren der Tabelle durch einfaches Klicken auf eine Spaltenüberschrift

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Click Sort( 1 );

```

### Set Column Borders

**Syntax:** obj &lt;&lt; Set Column Borders( state=0|1 )

**Beschreibung:** An den Seiten jeder Spalte eine Linie ziehen

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Column Borders( 1 );

```

### Set Column Group Borders

**Syntax:** obj &lt;&lt; Set Column Group Borders( state=0|1 )

```jsl

New Window( "Mountains",	tb = Table Box(		Col Span Box(			"Column Span",			String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} )		),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Column Group Borders( 1 );

```

### Set Context Menu Item State

**Syntax:** obj &lt;&lt; Set Context Menu Item State( index, 0|1|-1 )

**Beschreibung:** Legt den Zustand des Elements im Kontextmenü an index als normal (0), aktiviert (1) oder deaktiviert (-1) fest.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Context Menu Script( {"A", Print( "A" ), "B", Print( "B" ), "C", Print( "C" )} );tb << Set Context Menu Item State( 2, -1 );

```

### Set Context Menu Script

**Syntax:** obj &lt;&lt; Set Context Menu Script( {"string",script,"string",script, ...} )

**Beschreibung:** Fügt dem Feld ein Kontextmenü mit den angegebenen Optionen und Skripten hinzu.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Context Menu Script(	{"Beep", Beep(), "Beep Twice", Beep() ; Wait( 1.0 ) ; Beep() ; ,	"Get Context Menu Script", Print( tb << Get Context Menu Script )});

```

### Set Context Menu Submenu

**Syntax:** obj &lt;&lt; Set Context Menu Submenu( index, submenu count )

**Beschreibung:** Macht aus dem Menüelement „Index“ ein Untermenü mit der in „Anzahl Untermenü“ angegebenen Anzahl von Menüelementen

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Context Menu Script(	{"A", Print( "A" ), "B", Print( "B" ), "B1", Print( "B1" ), "B2", Print( "B2" ), "B3",	Print( "B3" ), "C", Print( "C" )});tb << Set Context Menu Submenu( 2, 3 );

```

### Set Data Font

**Syntax:** obj &lt;&lt; Set Data Font( fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt; )

**Beispiel 1**

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Data Font( "Arial Black" );

```

**Beispiel 2**

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Data Font( "Arial Black", 12, "Italic Underline" );

```

### Set Data Font Name

**Syntax:** obj &lt;&lt; Set Data Font Name( fontname )

**Beschreibung:** Legt die Schriftart für den Text fest.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Data Font Name( "Arial Black" );

```

### Set Data Font Scale

**Syntax:** obj &lt;&lt; Set Data Font Scale( f )

**Beschreibung:** Legt einen Skalierungsfaktor für die aktuelle Schriftart fest. Der Skalierungsfaktor wird auf die Größe angewendet, die anhand der Basisschriftart und der Punktgröße ermittelt wird.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));Wait( 2 );tb << Set Data Font Scale( 2.0 );

```

### Set Data Font Size

**Syntax:** obj &lt;&lt; Set Data Font Size( n )

**Beschreibung:** Legt die Schriftgröße in Punkten für den Text fest.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Data Font Size( 14 );

```

### Set Data Font Style

**Syntax:** obj &lt;&lt; Set Data Font Style( style )

**Beschreibung:** Legt den Schriftstil für Textzeichenketten fest. Um mehrere Stile gleichzeitig festzulegen, platzieren Sie sie getrennt durch Leerzeichen in der gleichen Zeichenkette (siehe Beispiel 2 unten).

**Beispiel 1**

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Data Font Style( "Italic" );

```

**Beispiel 2**

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Data Font Style( "Italic Bold Underline" );

```

### Set Heading Column Borders

**Syntax:** obj &lt;&lt; Set Heading Column Borders( state=0|1 )

**Beschreibung:** Spaltenränder in Überschriften

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Heading Column Borders( 1 );

```

### Set Locked Columns

**Syntax:** obj &lt;&lt; Set Locked Columns( number )

**Beschreibung:** Sperrt die ersten n Spalten, so dass sie nicht mit dem Anfasswerkzeug (Hand) gezogen werden können oder vor ihnen keine Spalten abgelegt werden können.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << set locked columns( 1 );

```

### Set Row Borders

**Syntax:** obj &lt;&lt; Set Row Borders( state=0|1 )

**Beschreibung:** Über und unter jeder Zeile eine Linie ziehen

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Row Borders( 1 );

```

### Set Row Change Function

**Syntax:** obj &lt;&lt; Set Row Change Function( Function( {thisBox}, &lt;script&gt; ) )

**Beschreibung:** Legt den Ausdruck fest, der ausgewertet wird, wenn eine Zeile ausgewählt wird.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Selectable Rows();tb << set row change function( Function( {thisBox}, Print( thisBox << get selected rows ) ) );

```

### Set Scrollable

**Syntax:** obj &lt;&lt; Set Scrollable( rows, columns )

**Beschreibung:** Schaltet den Bildlauf für dieses TableBox ein oder aus.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Scrollable( 3, 0 );

```

### Set Selectable Rows

**Syntax:** obj &lt;&lt; Set Selectable Rows( state=0|1 )

**Beschreibung:** Legt fest, ob die Zeilen für dieses TableBox auswählbar sind oder nicht.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Selectable Rows();

```

### Set Selected Row Color

**Syntax:** obj &lt;&lt; Set Selected Row Color( color )

**Beschreibung:** Legt die Hintergrundfarbe für ausgewählte Zeilen fest; nur gültig, wenn „Ausgewählte Zeilen festlegen“ aktiviert ist

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Selectable Rows();tb << Set Selected Rows( [1, 4] );tb << Set Selected Row Color( "Red" );

```

### Set Selected Rows

**Syntax:** obj &lt;&lt; Set Selected Rows( row matrix )

**Beschreibung:** Wählt die angegebenen Zeilen aus und wählt andere Zeilen ab.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Selected Rows( [1, 4] );

```

### Set Shade Alternate Rows

**Syntax:** obj &lt;&lt; Set Shade Alternate Rows( state=0|1 )

**Beschreibung:** Hintergrund jeder zweiten Zeile in der Tabelle schattieren

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Shade Alternate Rows( 1 );

```

### Set Shade Cells

**Syntax:** obj &lt;&lt; Set Shade Cells( state=0|1 )

**Beschreibung:** Hintergrund jeder Zelle in der Tabelle schattieren

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Shade Cells( 1 );

```

### Set Shade Headings

**Syntax:** obj &lt;&lt; Set Shade Headings( state=0|1 )

**Beschreibung:** Hintergrund der Spaltenüberschriften schattieren

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Shade Headings( 1 );

```

### Set Title Font

**Syntax:** obj &lt;&lt; Set Title Font( fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt; )

**Beispiel 1**

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Title Font( "Arial Black" );

```

**Beispiel 2**

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Title Font( "Arial Black", 12, "Italic Underline" );

```

### Set Title Font Name

**Syntax:** obj &lt;&lt; Set Title Font Name( fontname )

**Beschreibung:** Legt die Schriftart für den Text fest.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Title Font Name( "Arial Black" );

```

### Set Title Font Scale

**Syntax:** obj &lt;&lt; Set Title Font Scale( f )

**Beschreibung:** Legt einen Skalierungsfaktor für die aktuelle Schriftart fest. Der Skalierungsfaktor wird auf die Größe angewendet, die anhand der Basisschriftart und der Punktgröße ermittelt wird.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));Wait( 2 );tb << Set Title Font Scale( 2.0 );

```

### Set Title Font Size

**Syntax:** obj &lt;&lt; Set Title Font Size( n )

**Beschreibung:** Legt die Schriftgröße in Punkten für den Text fest.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Title Font Size( 14 );

```

### Set Title Font Style

**Syntax:** obj &lt;&lt; Set Title Font Style( style )

**Beschreibung:** Legt den Schriftstil für Textzeichenketten fest. Um mehrere Stile gleichzeitig festzulegen, platzieren Sie sie getrennt durch Leerzeichen in der gleichen Zeichenkette (siehe Beispiel 2 unten).

**Beispiel 1**

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Title Font Style( "Italic" );

```

**Beispiel 2**

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Title Font Style( "Italic Bold Underline" );

```

### Set Underline Headings

**Syntax:** obj &lt;&lt; Set Underline Headings( state=0|1 )

**Beschreibung:** Unter den Spaltenüberschriften eine Linie ziehen

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Set Underline Headings( 1 );

```

### Simulate

**Syntax:** obj &lt;&lt; Simulate( nsample, Random Seed(number), Out(column), In(column), Update(&lt;columns&gt;) )

**Beschreibung:** Führt eine Simulation durch, indem eine Spalte durch eine andere mit einer Simulationsformel ausgetauscht wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Fit Model(	Y( :weight ),	Effects( :age, :sex, :height ),	Personality( "Generalized Regression" ),	Generalized Distribution( "Normal" ),	Run( Fit( Estimation Method( Lasso( Adaptive ) ), Validation Method( AICc ) ) ));obj << (fit[1] << Save Simulation Formula);rpt = Report( obj );dtlst = rpt["Parameter Estimates for Original Predictors"][Number Col Box( "Prob > ChiSquare" )] << Simulate(	10,	Out( :weight ),	In( :weight Simulation Formula ));dtlst[2] << Distribution( Y( :height ) );

```

### Sort By Column

**Syntax:** obj &lt;&lt; Sort By Column( &lt;column index or title&gt;, &lt;ascending=0|1&gt; )

**Beschreibung:** Sortiert alle Zeilen der Tabelle basierend auf den Werten in der Spalte. Standardmäßig wird absteigend sortiert.

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));tb << Sort By Column( 1 );Wait( 2 );tb << Sort By Column( "Elevation (meters)" );

```

## Freigegebene Elementmeldungen

### Add Line Annotation

**Syntax:** obj &lt;&lt; Add Line Annotation

**Beschreibung:** Fügt im Vordergrund des Anzeigefensters eine Linie ein.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Line Annotation( Line( 160, 235, 240, 235 ) );

```

### Add Pin Annotation

**Syntax:** obj &lt;&lt; Add Pin Annotation

**Beschreibung:** Fügt im Vordergrund eines Anzeigefensters eine angeheftete Anmerkung ein. Die meisten Attribute (wie Index Row, UniqueID and FoundPt) sind nur für interne Zwecke ausgelegt.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :weight ),	X( :height ),	SendToReport(		Dispatch( {}, "Bivar Plot", FrameBox,			Add Pin Annotation(				Seg( Marker Seg( 1 ) ),				Index( 17 ),				Index Row( 17 ),				UniqueID( -960001792 ),				FoundPt( {238, 219} ),				Origin( {64.9765625, 142} ),				Offset( {-174, -40} ),				Tag Line( 1 ),				Font( "Helvetica", 11, "Plain" )			)		)	));

```

### Add Polygon Annotation

**Syntax:** obj &lt;&lt; Add Polygon Annotation

**Beschreibung:** Fügt im Vordergrund des Anzeigefensters ein Polygon ein.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Polygon Annotation(	Points( {210, 80}, {230, 70}, {280, 115}, {240, 120} ),	Color( "Red" ),	Closed( 1 ));

```

### Add Simple Shape Annotation

**Syntax:** obj &lt;&lt; Add Simple Shape Annotation

**Beschreibung:** Fügt im Vordergrund des Anzeigefensters eine einfache Form ein.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Simple Shape Annotation( Oval( 210, 100, 250, 75 ) );rbiv << Add Simple Shape Annotation( Rectangle( 70, 180, 95, 215 ) );

```

### Add Text Annotation

**Syntax:** obj &lt;&lt; Add Text Annotation

**Beschreibung:** Fügt im Vordergrund des Anzeigefensters Text ein.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Text Annotation(	Text( "We need to discuss this at the next meeting." ),	Text Box( {65, 35, 200, 77} ));

```

### Append

**Syntax:** obj &lt;&lt; Append( db2 )

**Beschreibung:** Fügt db2 nach db in den Anzeigebaum ein.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << append( Text Box( "=== below ===" ) );

```

### Background Color

**Syntax:** obj &lt;&lt; Background Color( color ); color = obj &lt;&lt; Get Background Color

**Beschreibung:** Ist die Hintergrundfarbe festgelegt, wird das Feld vor dem Darstellen des Inhalts mit der Hintergrundfarbe ausgefüllt. Ist die Hintergrundfarbe nicht festgelegt, sind Hintergrund und Inhalt der beinhaltenden Boxen sichtbar.

**JMP Version hinzugefügt:** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Background Color );Wait( 2 );tb << Background Color( "Yellow" );

```

### Border

**Syntax:** obj &lt;&lt; Border( sides ); sides = obj &lt;&lt; Get Border

**Beschreibung:** Rahmen sind durchgezogene Linien um das Äußere eines Anzeigefelds. Wird ein einziger Wert angegeben, gilt dieser für alle Seiten. Werden zwei Werte angegeben, gelten diese für horizontale und vertikale Rahmen.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Border );Wait( 1 );tb << Border( 1 );

```

### Border Color

**Syntax:** obj &lt;&lt; Border Color( color ); color = obj &lt;&lt; Get Border Color

**Beschreibung:** Optionale Farbe zum Überschreiben der Standardfarbe für Feldrahmen.

**JMP Version hinzugefügt:** 19

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Wait( 2 );tb << Border( 1 );tb << Border Color( "Light Red" );

```

### Bring Window To Front

**Syntax:** obj &lt;&lt; Bring Window To Front

**Beschreibung:** Zeigt das Fenster im Vordergrund an.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Run Script( "Bivariate" );w << Bring Window To Front;

```

### Child

**Syntax:** obj &lt;&lt; Child

**Beschreibung:** Gibt das untergeordnete Element des Anzeigefelds zurück.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisParent = axisbox << parent();axisChild = axisParent << child();Print( axisChild << Class Name() );

```

### Class Name

**Syntax:** obj &lt;&lt; Class Name

**Beschreibung:** Gibt den Namen der Anzeigeklasse für das Anzeigefenster zurück.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Class Name();

```

### Clone Box

**Syntax:** obj &lt;&lt; Clone Box

**Beschreibung:** Erstellt eine neue Kopie des Anzeigefelds.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << append( Text Box( "=== below ===" ) );clonedBox = rbiv << Clone Box();rbiv << append( clonedBox );

```

### Close Window

**Syntax:** obj &lt;&lt; Close Window( &lt;"NoSave"&gt; )

**Beschreibung:** Schließt das Fenster.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );w << Close Window;

```

### Copy Data

**Syntax:** obj &lt;&lt; Copy Data

**Beschreibung:** Kopiert die mit Tabstopp getrennten Daten aus einer Matrix oder Tabelle in die Zwischenablage.

```jsl

New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );mat << CopyData;

```

### Copy Graph

**Syntax:** obj &lt;&lt; Copy Graph

**Beschreibung:** Legt ein Bild des Graphen und der Achsen in der Zwischenablage ab.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;(rbiv[FrameBox( 1 )]) << Copy Graph();"paste into a paint program";

```

### Copy Picture

**Syntax:** obj &lt;&lt; Copy Picture

**Beschreibung:** Legt ein Bild des Anzeigefelds in der Zwischenablage ab.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Copy Picture();

```

### Delete Box

**Syntax:** obj &lt;&lt; Delete Box

**Beschreibung:** Löscht das Anzeigefeld.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Delete Box();

```

### Deselect

**Syntax:** obj &lt;&lt; Deselect

**Beschreibung:** Wählt dieses Objekt für die Verwendung mit Befehlen aus dem Menü „Bearbeiten“ ab.

```jsl

//This message applies to all display box objectsselected = 0;New Window( "Example",	ex = Button Box( "Press Me",		selected = !selected;		refresh;	));refresh = Function( {},	If( selected,		ex << Select,		ex << Deselect	));

```

### Dispatch

**Syntax:** obj &lt;&lt; Dispatch( {outline node, ...}, display element, display element type, command )

**Beschreibung:** Sendet command an einen spezifischen Teil eines Anzeigebaums.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} );

```

### Enabled

**Syntax:** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**Beschreibung:** Ein Objekt, das nicht aktiviert ist, reagiert nicht auf Tastatur- oder Mauseingabe. Diese Eigenschaft wird von untergeordneten Objekten geerbt, deshalb verursacht ein Containerobjekt, das deaktiviert ist, die Deaktivierung aller untergeordneten Objekte.

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Find

**Syntax:** obj &lt;&lt; Find

**Beschreibung:** Gibt das Anzeigefeld mit dem vorgegebenen argument zurück

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv << Find( axis box( 1 ) );axisbox << Delete();

```

### Get Annotation

**Syntax:** obj &lt;&lt; Get Annotation

**Beschreibung:** Gibt die erste Anmerkung zurück, die in diesem Anzeigefeld verankert ist. Auf andere Anmerkungen kann mit Sib() über das Ergebnis zugegriffen werden.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Text Annotation(	Text( "We need to discuss this at the next meeting." ),	Text Box( {65, 35, 200, 77} ));annotation = rbiv << Get Annotation;annotation << delete;

```

### Get Background Color

**Syntax:** obj &lt;&lt; Background Color( color ); color = obj &lt;&lt; Get Background Color

**Beschreibung:** Ist die Hintergrundfarbe festgelegt, wird das Feld vor dem Darstellen des Inhalts mit der Hintergrundfarbe ausgefüllt. Ist die Hintergrundfarbe nicht festgelegt, sind Hintergrund und Inhalt der beinhaltenden Boxen sichtbar.

**JMP Version hinzugefügt:** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Background Color );Wait( 2 );tb << Background Color( "Yellow" );

```

### Get Border

**Syntax:** obj &lt;&lt; Border( sides ); sides = obj &lt;&lt; Get Border

**Beschreibung:** Rahmen sind durchgezogene Linien um das Äußere eines Anzeigefelds. Wird ein einziger Wert angegeben, gilt dieser für alle Seiten. Werden zwei Werte angegeben, gelten diese für horizontale und vertikale Rahmen.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Border );Wait( 1 );tb << Border( 1 );

```

### Get Border Color

**Syntax:** obj &lt;&lt; Border Color( color ); color = obj &lt;&lt; Get Border Color

**Beschreibung:** Optionale Farbe zum Überschreiben der Standardfarbe für Feldrahmen.

**JMP Version hinzugefügt:** 19

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Wait( 2 );tb << Border( 1 );tb << Border Color( "Light Red" );

```

### Get Content Size

**Syntax:** obj &lt;&lt; Get Content Size

**Beschreibung:** Gibt die Inhaltsgröße innerhalb des Fensters zurück.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );c = w << Get Content Size();Show( c );

```

### Get Display Path

**Syntax:** obj &lt;&lt; Get Display Path( parent box, &lt;receiver expr&gt;, &lt;Mode("XPath"|"Subscript")&gt; )

**Beschreibung:** Ruft einen relativ robusten Ausdruck für die Navigation zwischen parent box und obj ab. Dieser Pfad ist nicht in allen JMP-Versionen garantiert stabil. Der receiver expr wird, sofern angegeben, in den Ausgabeausdruck integriert. Wenn nicht, wird stattdessen der für parent box angegebene Ausdruck verwendet. Wie im Beispiel gezeigt, ist diese Meldung hauptsächlich nützlich, um die Robustheit eines bereits verfügbaren Pfads zu erhöhen. Standard ist der XPath-Modus.

#### Basis

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );rpt = Report( biv );xpath expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Expr( Report( biv ) ) ); // Make Number Col Box(9) more robustShow( xpath expr );xpath expr << Select;

```

#### Indexmodus

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );rpt = Report( biv );subscript expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Mode( "Subscript" ) ); // Make Number Col Box(9) more robustShow( subscript expr );subscript expr << Select;

```

### Get Enabled

**Syntax:** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**Beschreibung:** Ein Objekt, das nicht aktiviert ist, reagiert nicht auf Tastatur- oder Mauseingabe. Diese Eigenschaft wird von untergeordneten Objekten geerbt, deshalb verursacht ein Containerobjekt, das deaktiviert ist, die Deaktivierung aller untergeordneten Objekte.

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Get HTML

**Syntax:** obj &lt;&lt; Get HTML( &lt;format&gt; )

**Beschreibung:** Gibt eine Zeichenkette mit dem HTML-Quellcode des Anzeigefelds zurück.

**Beispiel 1**

```jsl

//This message applies to all display box objectswin = New Window( "Example", a = Text Box( "Example Text" ) );a << Set Text( win << Get HTML );

```

**Beispiel 2**

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );Save Text File( "$TEMP/Oneway.html", obj << Get HTML( "svg" ) ); // Prefer <<Save HTMLWeb( "$TEMP/Oneway.html", JMPWindow );

```

### Get Height

**Syntax:** width = obj &lt;&lt; Get Height

**Beschreibung:** Gibt die Höhe des Anzeigefelds zurück.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Get Height;

```

### Get Horizontal Alignment

**Syntax:** obj &lt;&lt; Horizontal Alignment( "Default"|"Left"|"Center"|"Right" ); "Default"|"Left"|"Center"|"Right" = obj &lt;&lt; Get Horizontal Alignment

**Beschreibung:** Die horizontale Ausrichtung steuert die Position des Felds innerhalb eines Containers, sofern das Feld nicht den gesamten Raum ausfüllt.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;lb = r[List Box( 6 )];lb << Border( 1 );Wait( 2 );lb << Horizontal Alignment( "Right" );

```

### Get Journal

**Syntax:** obj &lt;&lt; Get Journal

**Beschreibung:** Gibt eine Zeichenkette mit dem Journal-Quellcode des Anzeigefelds zurück.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;Print( rbiv << Get Journal );

```

### Get Margin

**Syntax:** obj &lt;&lt; Margin( sides ); sides = obj &lt;&lt; Get Margin

**Beschreibung:** Der Rand fügt Platz zwischen dem Rahmen des Felds und benachbarten Feldern hinzu. Verwenden Sie benannte Argumente oder geben Sie eine Liste mit Werten an. Wird ein einziger Wert angegeben, gilt dieser für alle Seiten. Werden zwei Werte angegeben, gelten diese für den horizontalen und vertikalen Rand.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Margin );tb << Border( 1 );Wait( 2 );tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Max Size

**Syntax:** width,height = obj &lt;&lt; Get Max Size

**Beschreibung:** Gibt die maximale Größe dieses Anzeigefelds zum Zweck der automatischen Streckung zurück.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Get Max Size;

```

### Get Min Size

**Syntax:** width,height = obj &lt;&lt; Get Min Size

**Beschreibung:** Gibt die Mindestgröße dieses Anzeigefelds zum Zweck der automatischen Streckung zurück.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Get Min Size;

```

### Get Namespace

**Syntax:** obj &lt;&lt; Get Namespace

**Beschreibung:** Gibt den zu diesem Anzeigeobjekt zugehörigen Namensraum zurück.

```jsl

//This message applies to all display objectsx = 1;w = New Window( "Test", b = Button Box( "Press me" ) );b:x = 2;ns = b << GetNamespace();Show( ns:x, x );

```

### Get On Close

**Syntax:** obj &lt;&lt; Get On Close

**Beschreibung:** Gibt das Skript oder die Funktion zurück, das/die beim Schließen des Fensters ausgeführt wird.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << On Close(	// Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled	New Window( "Are you sure?",		<<modal,		V List Box(			Text Box( "Press OK to allow the window to close" ),			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )		)	)["button"] == 1);Show( w << Get On Close );

```

### Get Padding

**Syntax:** obj &lt;&lt; Padding( sides ); sides = obj &lt;&lt; Get Padding

**Beschreibung:** Der Innenabstand fügt Platz zwischen dem Inhalt und dem Rahmen des Felds hinzu. Verwenden Sie benannte Argumente oder geben Sie eine Liste mit Werten an. Wird ein einziger Wert angegeben, gilt dieser für alle Seiten. Werden zwei Werte angegeben, gelten diese für den horizontalen und vertikalen Innenabstand.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Padding );tb << Border( 1 );Wait( 1 );tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Page Setup

**Syntax:** obj &lt;&lt; Get Page Setup

**Beschreibung:** Informationen für die Seiteneinrichtung für PDFs abrufen

```jsl

//This message applies to all display box objectsw = New Window( "Window", Text Box( "Page Setup Test" ) );w << get page setup();

```

### Get Picture

**Syntax:** obj &lt;&lt; Get Picture( &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**Beschreibung:** Erfasst db als ein Bildobjekt. Das optionale Argument Scale stellt das Bild mit einer skalierten Auflösung dar. Für die Skalierung ist es erforderlich, dass das Anzeigefeld streckbar ist. Das Argument Type legt fest, ob das Ergebnis ein skalierbares Vektorbild oder ein Bitmap ist. Standardmäßig wird ein skalierbares Bild zurückgegeben, das sich zum Speichern in Vektorformaten wie PDF eignet. Die Option View ändert das Verhalten einiger Felder. Die Standardoption "Picture" zeichnet den Bericht wie beim Export in ein Bildformat, wobei Bereiche mit Bildlauf vollständig gezeigt werden. Der Ansichtsmodus "Screen" zeichnet den Bericht wie er auf dem Bildschirm gezeigt wird, und "Print" zeichnet den Bericht wie beim Drucken, ohne die Seiteneinrichtungsfunktionen. Die Option SubRect erfasst einen Teil des resultierenden Bildes, statt eines vollständigen Bildes. Die Option Appearance kann von den "Default"-Ausgabefarben zu den "Current" Farben wie auf dem Bildschirm angezeigt wechseln. Die Optionen View, SubRect und Appearance werden nur bei Type "Bitmap" unterstützt.

#### Ansicht und Erscheinungsbild

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate(	Y( :weight ),	X( :height ),	Fit Line( {Line Color( {212, 73, 88} )} ),	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),	Kernel Smoother( 1, 1, 0.5, 0 ));rbiv = biv << report;rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );New Window( "Example",	H List Box(		rbiv << Get Picture( View( "Screen" ), Appearance( "Current" ) ),		rbiv << Get Picture( View( "Print" ), Appearance( "Default" ) )	));

```

#### Skalieren

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );New Window( "Example", rbiv << Get Picture( Scale( 1.5 ) ) );

```

#### Standard

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;New Window( "Example", rbiv << Get Picture );

```

### Get Project

**Syntax:** project = obj &lt;&lt; Get Project()

**Beschreibung:** Gibt das übergeordnete Projekt des Fensters zurück, oder Leer(), wenn sich das Fenster nicht in einem Projekt befindet.

**JMP Version hinzugefügt:** 14

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );c = w << Get Project();Show( c );

```

### Get Properties

**Syntax:** obj &lt;&lt; Get Properties

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Eigenschaften und deren Werte des Anzeigefelds enthält.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Properties;

```

### Get Property

**Syntax:** obj &lt;&lt; Get Property( "property" )

**Beschreibung:** Gibt die aktuelle Einstellung für die benannte property zurück.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Property( "Enabled" );

```

### Get Property List

**Syntax:** obj &lt;&lt; Get Property List

**Beschreibung:** Gibt eine Liste von Eigenschaften des Anzeigefelds zurück.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Property List;

```

### Get RTF

**Syntax:** obj &lt;&lt; Get RTF( &lt;format&gt; )

**Beschreibung:** Gibt eine Zeichenkette mit dem RTF-Quellcode des Anzeigefelds zurück.

**Beispiel 1**

```jsl

//This message applies to all display box objectswin = New Window( "Example", a = Text Box( "Example Text" ) );a << Set Text( win << Get RTF );

```

**Beispiel 2**

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );Save Text File( "$TEMP/Oneway.rtf", obj << Get RTF( "png" ) ); // Prefer <<Save RTFOpen( "$TEMP/Oneway.rtf" );

```

### Get Row States

**Syntax:** rs = obj &lt;&lt; Get Row States( &lt;dt&gt; )

**Beschreibung:** Gibt einen Vektor mit der Zeileneigenschaft für jede Zeile in der vorgegebenen Datentabelle oder der aktuellen Datentabelle zurück. Die Zeileneigenschaften können aus der Tabelle oder aus dem Filterkontext des Felds kommen.

#### Single table

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "filter test",	Data Filter Context Box(		H List Box(			dt << Data Filter(				Local,				Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )			),			V List Box(				t = Text Box( "0 Rows Excluded" ),				Distribution(					Continuous Distribution( Column( :weight ) ),					Nominal Distribution( Column( :age ) )				)			)		)	));updatetext = Function( {},	rs = t << Get Row States( dt );	n = 0;	For( ii = 1, ii <= N Rows( rs ), ii++,		If( Excluded( As Row State( rs[ii] ) ),			n			++)	);	t << Set Text( Char( n ) || " Rows Excluded" ););rsupdate = Function( {a},	If( Is Matrix( a ),		updatetext()	));rsh = t << Make Row State Handler( dt, rsupdate );updatetext();

```

#### Where subset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "filter test",	t = Text Box( "0 Rows Excluded" ),	dist = Distribution(		Continuous Distribution( Column( :weight ) ),		Nominal Distribution( Column( :age ) ),		Local Data Filter(			Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )		),		Where( :sex == "F" )	));subset = dist << Get Data Table();updatetext = Function( {},	rs = Report( dist ) << Get Row States( subset );	n = 0;	For( ii = 1, ii <= N Rows( rs ), ii++,		If( Excluded( As Row State( rs[ii] ) ),			n			++)	);	t << Set Text( Char( n ) || " Rows Excluded" ););rsupdate = Function( {a},	If( Is Matrix( a ),		updatetext()	));rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );updatetext();

```

### Get Show Window

**Syntax:** obj &lt;&lt; Get Show Window

**Beschreibung:** Gibt die Sichtbarkeit des Fensters zurück.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Show Window( 0 );Wait( 2 );Print( w << Get Show Window() );

```

### Get Size

**Syntax:** width,height = obj &lt;&lt; Get Size

**Beschreibung:** Gibt die Größe des Anzeigefensters zurück.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];Print( fb << Get Size );

```

### Get Stretch

**Syntax:** x,y = obj &lt;&lt; Get Stretch

**Beschreibung:** Gibt die Streckungs-Flags für dieses Anzeigefeld in horizontaler und vertikaler Richtung zurück.

**JMP Version hinzugefügt:** 16

```jsl

//This message applies to all display box objectsNew Window( "Stretch",	V List Box(		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),		spacer = Spacer Box(			Size( 20, 20 ),			Color( "Light Red" ),			<<Set Stretch( "Fill", "Off" )		)	));spacer << Get Stretch();

```

### Get Text

**Syntax:** obj &lt;&lt; Get Text

**Beschreibung:** Gibt eine Zeichenkette mit dem Text des Anzeigefelds zurück.

```jsl

//This message applies to all display box objectswin = New Window( "Example", a = Text Box( "Example Text" ) );a << Set Text( win << Get Text );

```

### Get Text Color

**Syntax:** obj &lt;&lt; Text Color( color ); color = obj &lt;&lt; Get Text Color

**Beschreibung:** Der Text wird in der Textfarbe dargestellt, sofern eine festgelegt ist. Ist die Eigenschaft nicht festgelegt, erbt das Feld die Textfarbe des Containerfelds.

**JMP Version hinzugefügt:** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Text Color );Wait( 2 );tb << Text Color( "Red" );

```

### Get UI Only

**Syntax:** obj &lt;&lt; UI Only( state=0|1 ); state = obj &lt;&lt; Get UI Only

### Get User Resizable

**Syntax:** obj &lt;&lt; User Resizable; obj &lt;&lt; Get User Resizable

**Beschreibung:** Wenn die Feldgröße vom Benutzer geändert werden kann, ändert sich der Cursor am unteren und rechten Rand, um die Größenänderung per Drag & Drop zuzulassen.

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );New Window( "resize",	H Splitter Box(		Size( 600, 200 ),		tree = Tree Box( {root1, root2} ),		scroll = Scroll Box(			Size( 300, 200 ),			Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) )		)	));tree << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );scroll << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );Wait( 2 );tree << User Resizable( {0, 0} );scroll << User Resizable( {0, 0} );

```

### Get Vertical Alignment

**Syntax:** obj &lt;&lt; Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" ); "Default"|"Top"|"Center"|"Bottom" = obj &lt;&lt; Get Vertical Alignment

**Beschreibung:** Die vertikale Ausrichtung steuert die Position des Felds innerhalb eines Containers, sofern das Feld nicht den gesamten Raum ausfüllt.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;lb = r[List Box( 6 )];lb << Set Horizontal( 1 );lb = r[List Box( 7 )];lb << Border( 1 );Wait( 2 );lb << Vertical Alignment( "Bottom" );

```

### Get Visibility

**Syntax:** obj &lt;&lt; Visibility( "Visible"|"Hidden"|"Collapse" ); "Visible"|"Hidden"|"Collapse" = obj &lt;&lt; Get Visibility

**Beschreibung:** Die Sichtbarkeit legt fest, ob ein Feld angezeigt wird und ob es Platz benötigt. Der Standardwert "Visible" bedeutet, dass das Objekt angezeigt wird. Ein Objekt vom Typ "Hidden" wird nicht angezeigt, benötigt jedoch trotzdem Platz, während ein Feld vom Typ "Collapsed" keinen Platz im Layout benötigt.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Visibility );Wait( 1 );tb << Visibility( "Collapse" );Show( tb << Get Visibility );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Width

**Syntax:** width = obj &lt;&lt; Get Width

**Beschreibung:** Gibt die Breite des Anzeigefelds zurück.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Get Width;

```

### Get Window Icon

**Syntax:** obj &lt;&lt; Get Window Icon

**Beschreibung:** Gibt das Fenstersymbol zurück.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );t = w << Get Window Icon;Show( t );

```

### Get Window Position

**Syntax:** obj &lt;&lt; Get Window Position

**Beschreibung:** Gibt die Position des Fensters zurück.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );p = w << Get Window Position();Show( p );

```

### Get Window Size

**Syntax:** obj &lt;&lt; Get Window Size

**Beschreibung:** Gibt die Größe des Fensters zurück.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );s = w << Get Window Size();Show( s );

```

### Get Window Title

**Syntax:** obj &lt;&lt; Get Window Title

**Beschreibung:** Gibt den Fenstertitel zurück.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );t = w << Get Window Title;Show( t );

```

### Get Window View

**Syntax:** obj &lt;&lt; Get Window View

**Beschreibung:** Gibt die aktuelle Fensteransicht zurück. Fenster können „sichtbar“, „unsichtbar“ oder „privat“ sein.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Print( w << Get Window View() );

```

### Get XML

**Syntax:** obj &lt;&lt; Get XML( &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**Beschreibung:** Ruft den Anzeigebaum im XML-Format ab. Standardmäßig werden Zeichenketten in der Landessprache zurückgegeben, und die XML enthält Datenwerte in einigen Feldern. Verwenden Sie die Option English, um englische Zeichenketten zurückzugeben, sofern verfügbar. Verwenden Sie die Option NoData, um die Datenwerte in den Feldern wegzulassen, die bei einigen Anzeigebäumen sehr groß sein können.

```jsl

//This message applies to all display box objectswin = New Window( "test", a = Text Box( "my test" ) );a << set text( win << get xml );

```

### GetOffset

**Syntax:** x,y = obj &lt;&lt; GetOffset

**Beschreibung:** Gibt den Offset dieses Anzeigefelds relativ zum übergeordneten Feld zurück. Sie müssen möglicherweise die <<übergeordnete Meldung in einer Schleife verwenden, um mehrere Offsets zu akkumulieren.

```jsl

New Window( "example",	MouseBox(		Graph Box(			title( "title" ),			Pen Size( 3 );			Y Function( -3 + 100 / 2 * (1 + Sin( (2 * Pi() * (x + .3)) / 100 )), x );		),		<<settrackenable( 1 ) // put the mouse box to work, watching "tracking"	,		<<settrack( // events from the mouse (movement, with button up or down)			Function( {this, pt}, // parameters: this is the mousebox, pt is mouse x,y				{fb, offset, t, off, size}, // local variables				// recalulate offset and size each time, the values can change				fb = this[framebox( 1 )]; // the framebox in the graph 				offset = [0, 0]; // accumulator to sum up the offset between framebox and mousebox				t = fb; // a temporary box that starts at the frame 				While( t != this, // and walks up to the mousebox					off = t << getOffset; // ask each box for its offset to the immediate parent					offset += Matrix( off ); // convert list answer to matrix so + will work					t = t << parent; // crawl up to the mousebox, one box at a time				);				size = Matrix( fb << getSize ); // the frame knows its size				If( // over the frame box					offset[1] < pt[1] < offset[1] + size[1] & offset[2] < pt[2] < offset[2]					 + size[2]				,					fb << setbackgroundcolor( "red" ),					fb << setbackgroundcolor( "blue" )				);			)		)	));

```

### Horizontal Alignment

**Syntax:** obj &lt;&lt; Horizontal Alignment( "Default"|"Left"|"Center"|"Right" ); "Default"|"Left"|"Center"|"Right" = obj &lt;&lt; Get Horizontal Alignment

**Beschreibung:** Die horizontale Ausrichtung steuert die Position des Felds innerhalb eines Containers, sofern das Feld nicht den gesamten Raum ausfüllt.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;lb = r[List Box( 6 )];lb << Border( 1 );Wait( 2 );lb << Horizontal Alignment( "Right" );

```

### Inval

**Syntax:** obj &lt;&lt; Inval

**Beschreibung:** Das Anzeigefeld ungültig machen. Das Fenster wird aktualisiert, wenn die Meldung <<UpdateWindow gesendet wird oder das Betriebssystem Zeit für die Aktualisierung hat.

```jsl

//This message applies to all display box objectscolor = "green"; /* initial color in a variable */New Window( "Inval example",	Button Box( "red",		color = "red";		g1 << inval; /* tell the oval to redraw */		g2 << inval; /* tell the rectangle to redraw */		g1 << updateWindow; /* tell the window to update immediately */		// this is a busy-wait to help demonstrate the various behaviors...		x = Tick Seconds();		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );	),	Button Box( "blue",		color = "blue";		g1 << inval; /* same comments */		g2 << inval;		g1 << updateWindow;		x = Tick Seconds();		While( Tick Seconds() - x < .5, 0 );	),	g1 = Graph Box(/* the graph does NOT watch for the color variable to change                       but will use the current value of color when it reshows */		Fill Color( color );		Oval( 10, 80, 70, 50, 1 );	),	g2 = Graph Box(		Fill Color( color );		Rect( 10, 80, 70, 50, 1 );	));

```

### Is Dirty

**Syntax:** obj &lt;&lt; Is Dirty

**Beschreibung:** Ruft den Dokumentstatus „modifiziert“ ab. 1 bedeutet, das Dokument wurde geändert und eine Aufforderung zum Speichern wird angezeigt, 0 bedeutet, das Dokument wurde nicht geändert.

**JMP Version hinzugefügt:** 14

```jsl

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );Show( ww << Is Dirty );ww << Set Dirty( 0 );Show( ww << Is Dirty );

```

### Is Modal Dialog

**Syntax:** obj &lt;&lt; Is Modal Dialog

**Beschreibung:** Gibt „wahr“ zurück, wenn das Fenster ein modales Dialogfeld ist. Nur nützlich bei Aufruf aus einem Fenster-Handler-Rückruf.

```jsl

With Window Handler(	New Window( "Modal Window", <<Modal ),	Function( {win},		Print( win << Is Modal Dialog() );		win << close window();	));

```

### Journal

**Syntax:** obj &lt;&lt; Journal

**Beschreibung:** Wandelt ein Anzeigefeld in ein Journal um.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << journal;

```

### Journal Window

**Syntax:** obj &lt;&lt; Journal Window

**Beschreibung:** Öffnet ein Journalfenster des Fensters.

```jsl

//This message applies to all display box objectsw = New Window( "Main Window", Text Box( "Main JMP Window" ) );w << Journal Window;

```

### Launch

**Syntax:** obj &lt;&lt; Launch

**Beschreibung:** Wertet das vorgegebene argument im Kontext des Anzeigefelds aus.

```jsl

//This message applies to all display box objectsOpen( "$SAMPLE_DATA/Big Class.jmp" );New Window( "example",	ob1 = Outline Box( "treemap launcher" ),	ob2 = Outline Box( "bivariate partial" ),	ob3 = Outline Box( "bivariate launched" ));ob1 << launch( Treemap() );ob2 << launch( Bivariate( Y( :height ) ) );ob3 << launch( Bivariate( Y( :height ), X( :weight ) ) );

```

### Make RowState Handler

**Syntax:** rs = obj &lt;&lt; Make RowState Handler( &lt;dt&gt;, function(a) )

**Beschreibung:** Erstellt einen Zeileneigenschafts-Handler für die vorgegebene Datentabelle oder die aktuelle Datentabelle. Die Funktion wird aufgerufen, wenn sich die Zeileneigenschaften im Filterkontext des Felds ändern. Das Argument der Funktion enthält die geänderten Zeilennummern oder -1, wenn sich der Zeileneigenschaftsfilter geändert hat.

#### Single table

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "filter test",	Data Filter Context Box(		H List Box(			dt << Data Filter(				Local,				Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )			),			V List Box(				t = Text Box( "0 Rows Excluded" ),				Distribution(					Continuous Distribution( Column( :weight ) ),					Nominal Distribution( Column( :age ) )				)			)		)	));updatetext = Function( {},	rs = t << Get Row States( dt );	n = 0;	For( ii = 1, ii <= N Rows( rs ), ii++,		If( Excluded( As Row State( rs[ii] ) ),			n			++)	);	t << Set Text( Char( n ) || " Rows Excluded" ););rsupdate = Function( {a},	If( Is Matrix( a ),		updatetext()	));rsh = t << Make Row State Handler( dt, rsupdate );updatetext();

```

#### Where subset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "filter test",	t = Text Box( "0 Rows Excluded" ),	dist = Distribution(		Continuous Distribution( Column( :weight ) ),		Nominal Distribution( Column( :age ) ),		Local Data Filter(			Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )		),		Where( :sex == "F" )	));subset = dist << Get Data Table();updatetext = Function( {},	rs = Report( dist ) << Get Row States( subset );	n = 0;	For( ii = 1, ii <= N Rows( rs ), ii++,		If( Excluded( As Row State( rs[ii] ) ),			n			++)	);	t << Set Text( Char( n ) || " Rows Excluded" ););rsupdate = Function( {a},	If( Is Matrix( a ),		updatetext()	));rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );updatetext();

```

### Margin

**Syntax:** obj &lt;&lt; Margin( sides ); sides = obj &lt;&lt; Get Margin

**Beschreibung:** Der Rand fügt Platz zwischen dem Rahmen des Felds und benachbarten Feldern hinzu. Verwenden Sie benannte Argumente oder geben Sie eine Liste mit Werten an. Wird ein einziger Wert angegeben, gilt dieser für alle Seiten. Werden zwei Werte angegeben, gelten diese für den horizontalen und vertikalen Rand.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Margin );tb << Border( 1 );Wait( 2 );tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Maximize Window

**Syntax:** obj &lt;&lt; Maximize Window( &lt;state=0|1&gt; )

**Beschreibung:** Maximiert das Fenster. Das Standardargument ist 1.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Maximize Window( 1 );Wait( 1 );w << Maximize Window( 0 );

```

### Minimize Window

**Syntax:** obj &lt;&lt; Minimize Window( &lt;state=0|1&gt; )

**Beschreibung:** Minimiert das Fenster. Das Standardargument ist 1.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Minimize Window( 1 );Wait( 1 );w << Minimize Window( 0 );

```

### Move Window

**Syntax:** obj &lt;&lt; Move Window( x,y )

**Beschreibung:** Verschiebt das Fenster an die angegebene Position.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );w << Move Window( 500, 500 );

```

### Next

**Syntax:** obj &lt;&lt; Next

**Beschreibung:** Gibt das Anzeigefeld nach diesem Anzeigefeld zurück.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;next = rbiv << Next();Print( next << Class Name() );

```

### On Close

**Syntax:** obj &lt;&lt; On Close( script )

**Beschreibung:** Legt ein Skript oder eine Funktion fest, das bzw. die beim Schließen des Fensters ausgeführt wird. Dieses Skript muss 1 zurückgeben, um das Schließen zu gestatten, oder 0, um zu verhindern, dass das Fenster geschlossen wird.

#### Funktion beim Schließen

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << On Close(	Function( {this},         // Modal dialogs return Button(1) if OK is pressed, Button(-1) if cancelled		New Window( "Are you sure?",			<<modal,			V List Box(				Text Box( "Press OK to allow " || (this << Get Window Title) || " to close" ),				H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )			)		)["button"] == 1	));

```

#### Skript beim Schließen

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << On Close(    // Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled	New Window( "Are you sure?",		<<modal,		V List Box(			Text Box( "Press OK to allow the window to close" ),			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )		)	)["button"] == 1);

```

### Optimize Display

**Syntax:** obj &lt;&lt; Optimize Display

**Beschreibung:** Legt für die Spaltenbreiten und das Fenster der Datentabelle eine optimale Größe fest.

**JMP Version hinzugefügt:** 14

```jsl

//This message applies to Data Table objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Optimize Display;

```

### Pad Window

**Syntax:** obj &lt;&lt; Pad Window( bool )

**Beschreibung:** Schaltet die Fensteranpassung ein oder aus.

```jsl

//This message applies to all display box objectsOpen( "$SAMPLE_DATA/Big Class.jmp" );d = distribution( Column( :height ) );r = d << report;r << Pad Window( 0 );

```

### Padding

**Syntax:** obj &lt;&lt; Padding( sides ); sides = obj &lt;&lt; Get Padding

**Beschreibung:** Der Innenabstand fügt Platz zwischen dem Inhalt und dem Rahmen des Felds hinzu. Verwenden Sie benannte Argumente oder geben Sie eine Liste mit Werten an. Wird ein einziger Wert angegeben, gilt dieser für alle Seiten. Werden zwei Werte angegeben, gelten diese für den horizontalen und vertikalen Innenabstand.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Padding );tb << Border( 1 );Wait( 1 );tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Page Break

**Syntax:** obj &lt;&lt; Page Break

**Beschreibung:** Fügt einen Seitenumbruch vor dem Anzeigefeld ein.

```jsl

//This message applies to all display box objectsNew Window( "Example",	ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob3 << Page Break;

```

### Parent

**Syntax:** obj &lt;&lt; Parent

**Beschreibung:** Gibt das übergeordnete Element dieses Anzeigefelds zurück.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisParent = axisbox << parent();Print( axisParent << Class Name() );

```

### Prepend

**Syntax:** obj &lt;&lt; Prepend( db2 )

**Beschreibung:** Fügt db2 vor db in den Anzeigebaum ein.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << prepend( Text Box( "=== above ===" ) );

```

### Prev Sib

**Syntax:** obj &lt;&lt; Prev Sib

**Beschreibung:** Gibt das vorherige Geschwisterelement des Anzeigefelds zurück.

**JMP Version hinzugefügt:** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 2 )];axisSibling = axisbox << Prev Sib();Print( axisSibling << Class Name() );

```

### Print Window

**Syntax:** obj &lt;&lt; Print Window

**Beschreibung:** Druckt das Fenster.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Print Window;

```

### Reshow

**Syntax:** obj &lt;&lt; Reshow

**Beschreibung:** Das Anzeigefeld ungültig machen und das Fenster mit dem neuen Inhalt aktualisieren. Wenn eine bessere Zeitsteuerung der Aktualisierung erforderlich ist, sehen Sie die Meldungen <<Inval und <<UpdateWindow.

```jsl

//This message applies to all display box objectscolor = "green"; /* initial color in a variable */New Window( "Reshow example",	Button Box( "red",		color = "red";		g << reshow/* tell the graph that something changed */;	),	Button Box( "blue",		color = "blue";		g << reshow/* tell the graph that something changed */;	),	g = Graph Box(/* the graph does NOT watch for the color variable to change                     but will use the current value of color when it reshows */		Fill Color( color );		Oval( 10, 80, 70, 50, 1 );	));

```

### Save Capture

**Syntax:** obj &lt;&lt; Save Capture( &lt;"path"&gt;, &lt;format&gt;, &lt;Add Sibling(n)&gt; )

**Beschreibung:** Speichert einen Screenshot des Anzeigefelds im angegebenen path. Ist kein path vorgegeben, wird das Fenster „Speichern unter“ angezeigt.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Capture( "$TEMP/jmp_example.png", "png" );

```

### Save HTML

**Syntax:** obj &lt;&lt; Save HTML( &lt;pathname&gt;, &lt;format&gt; )

**Beschreibung:** Speichert HTML-Quellcode und Ordner der Grafiken im angegebenen format.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save HTML( "$TEMP/jmp_example.html" );

```

### Save Interactive HTML

**Syntax:** obj &lt;&lt; Save Interactive HTML( &lt;pathname&gt;, &lt;Boolean&gt; )

**Beschreibung:** Speichert das interaktive HTML-Format mit Daten in einer Datei. Das Argument Boolean stellt den Bericht als statisch dar.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Interactive HTML( "$TEMP/jmp_example.html" );

```

### Save Journal

**Syntax:** obj &lt;&lt; Save Journal( &lt;pathname&gt; )

**Beschreibung:** Speichert den Journal-Quellcode des Anzeigefelds.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Journal( "$TEMP/jmp_example.jrn" );

```

### Save MSWord

**Syntax:** obj &lt;&lt; Save MSWord( &lt;pathname&gt;, &lt;format&gt; )

**Beschreibung:** Speichert das Anzeigefeld als Microsoft Word-Dokcument. (Nur Windows)

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save MSWord( "$TEMP/jmp_example.doc" );

```

### Save PDF

**Syntax:** obj &lt;&lt; Save PDF( &lt;pathname&gt;, &lt;Show Page Setup(0|1)&gt;, &lt;Portrait(0|1)&gt; )

**Beschreibung:** Speichert eine PDF des Anzeigefelds.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save PDF( "$TEMP/jmp_example.pdf" );

```

### Save Picture

**Syntax:** obj &lt;&lt; Save Picture( &lt;pathname&gt;, &lt;format&gt;, &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**Beschreibung:** Speichert ein Bild des Anzeigefelds. Unterstützte Formate sind EMF (Windows), PICT (Macintosh), JPEG oder JPG, GIF oder PNB. Das optionale Argument Scale stellt das Bild mit einer skalierten Auflösung dar. Für die Skalierung ist es erforderlich, dass das Anzeigefeld streckbar ist. Das Argument Type legt fest, ob das Ergebnis ein skalierbares Vektorbild oder ein Bitmap ist. Standardmäßig wird ein skalierbares Bild zurückgegeben, das sich zum Speichern in Vektorformaten wie PDF eignet. Die Option View ändert das Verhalten einiger Felder. Die Standardoption "Picture" zeichnet den Bericht wie beim Export in ein Bildformat, wobei Bereiche mit Bildlauf vollständig gezeigt werden. Der Ansichtsmodus "Screen" zeichnet den Bericht wie er auf dem Bildschirm gezeigt wird, und "Print" zeichnet den Bericht wie beim Drucken, ohne die Seiteneinrichtungsfunktionen. Die Option SubRect erfasst einen Teil des resultierenden Bildes, statt eines vollständigen Bildes. Die Option Appearance kann von den "Default"-Ausgabefarben zu den "Current" Farben wie auf dem Bildschirm angezeigt wechseln. Die Optionen View, SubRect und Appearance werden nur bei Type "Bitmap" unterstützt.

#### Ansicht und Erscheinungsbild

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate(	Y( :weight ),	X( :height ),	Fit Line( {Line Color( {212, 73, 88} )} ),	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),	Kernel Smoother( 1, 1, 0.5, 0 ));rbiv = biv << report;rbiv << Save Picture(	"$TEMP/jmp_example_screen.png",	"png",	View( "Screen" ),	Appearance( "Current" ));rbiv << Save Picture(	"$TEMP/jmp_example_print.png",	"png",	View( "Print" ),	Appearance( "Default" ));New Window( "Example",	H List Box(		New Image( "$TEMP/jmp_example_screen.png" ),		New Image( "$TEMP/jmp_example_print.png" )	));

```

#### Skalieren

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );rbiv << Save Picture( "$TEMP/jmp_example_scale.png", "png", Scale( 1.5 ) );New Window( "scaled image", New Image( "$TEMP/jmp_example_scale.png" ) );

```

#### Standard

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Picture( "$TEMP/jmp_example.png", "png" );

```

### Save Presentation

**Syntax:** obj &lt;&lt; Save Presentation( "filename.pptx", &lt;Template("path\\to\\my_template.pptx")&gt;, &lt;Insert(Begin|End|#) | Replace(Begin|End|#) | Append&gt;, &lt;Outline Titles(None|Hide|TopLeft|TopRight|BottomLeft|BottomRight)&gt;, &lt;"EMF"|"PNG"|"JPG"|"Native"&gt; )

**Beschreibung:** Speichert die Tabellen und Graphen des Anzeigefelds in einer Präsentation. Die Präsentation kann mit Microsoft PowerPoint oder anderer Präsentationssoftware geöffnet werden.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Presentation( "$TEMP/jmp_example.pptx" );Open( "$TEMP/jmp_example.pptx" );

```

### Save RTF

**Syntax:** obj &lt;&lt; Save RTF( &lt;pathname&gt;, &lt;format&gt; )

**Beschreibung:** Speichert den RTF-Quellcode mit Grafiken im angegebenen format.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save RTF( "$TEMP/jmp_example.rtf", "png" );

```

### Save Text

**Syntax:** obj &lt;&lt; Save Text( &lt;pathname&gt;, &lt;format&gt; )

**Beschreibung:** Gibt eine Datei mit dem Text des Anzeigefelds zurück.

```jsl

//This message applies to all display box objectswin = New Window( "Example", a = Text Box( "Example Text" ) );a << save text( "$TEMP/jmp_example.txt" );

```

### Save Window Report

**Syntax:** obj &lt;&lt; Save Window Report( pathname, &lt;embed data(0|1)&gt; )

**Beschreibung:** Speichert das aktuelle Berichtsfenster in einer JMP-Berichtsdatei (\*.jrp).

**JMP Version hinzugefügt:** 16

```jsl

//This message can be sent to any display box object but will be applied to the report windowOpen( "$SAMPLE_DATA/Big Class.jmp" );d = distribution( Column( :height ) );d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Scroll Window

**Syntax:** obj &lt;&lt; Scroll Window( DisplayBox | &lt;Relative(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;)&gt; | &lt;Absolute(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;) )

**Beschreibung:** Passt die Bildlaufleiste des Fensters an, um das vorgegebene Anzeigefeld in die Ansicht zu bringen, oder führt einen Bildlauf über eine relative Anzahl von Pixeln durch oder blättert zu einer absoluten Pixelposition. Anstelle einer Anzahl von Pixeln können die Schlüsselwörter "Start" oder "End" verwendet werden.

#### Absolute

```jsl

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );fm = Fit Model(	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),	Effects( :Subject, :Dose ),	Personality( "Manova" ),	Run);fm << setwindowsize( 600, 600 ); // shrink the windowfm << scroll window( Absolute( "End", "End" ) );Wait( 1 );fm << scroll window( Absolute( 0, 300 ) );Wait( 1 );

```

#### Box

```jsl

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );fm = Fit Model(	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),	Effects( :Subject, :Dose ),	Personality( "Manova" ),	Run);fm << setwindowsize( 600, 600 ); // shrink the windowFor( i = 1, i <= 5, i++, // repeatedly, bring each frame box into view for 1/2 second	fm << scroll window( Report( fm )[framebox( 2 )] );	Wait( .5 );	fm << scroll window( Report( fm )[framebox( 3 )] );	Wait( .5 );	fm << scroll window( Report( fm )[framebox( 1 )] );	Wait( .5 ););

```

#### Relative

```jsl

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );fm = Fit Model(	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),	Effects( :Subject, :Dose ),	Personality( "Manova" ),	Run);fm << setwindowsize( 600, 600 ); // shrink the windowfm << scroll window( Relative( 300 ) );Wait( 1 );fm << scroll window( Relative( -50 ) );Wait( 1 );fm << scroll window( Relative( "Start" ) );Wait( 1 );

```

### Select

**Syntax:** obj &lt;&lt; Select

**Beschreibung:** Dieses Objekt für die Verwendung mit Befehlen aus dem Menü „Bearbeiten“ auswählen.

```jsl

//This message applies to all display box objectsNew Window( "Example", ex = Button Box( "Press Me" ) );ex << Select;

```

### Set Content Size

**Syntax:** obj &lt;&lt; Set Content Size( x,y )

**Beschreibung:** Legt die Inhaltsgröße innerhalb des Fensters fest.

```jsl

//This message applies to all display box objectsw = New Window( "Test",	lb = List Box( {"a", "b", "c", "d"} ),	Button Box( "Enable 2nd item",		lb << enable item( 2, 1 );		Show( lb << item enabled( 2 ) );	),	Button Box( "Disable 2nd item",		lb << enable item( 2, 0 );		Show( lb << item enabled( 2 ) );	));Wait( 2 );w << Set Content Size( 400, 300 );

```

### Set Dirty

**Syntax:** obj &lt;&lt; Set Dirty

**Beschreibung:** Legt den Dokumentstatus „modifiziert“ fest. Bei 0 wird keine Aufforderung zum Speichern angezeigt, bei 1 wird die Aufforderung angezeigt.

**JMP Version hinzugefügt:** 14

```jsl

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );Show( ww << Is Dirty );ww << Set Dirty( 0 );Show( ww << Is Dirty );

```

### Set Height

**Syntax:** obj &lt;&lt; Set Height( width )

**Beschreibung:** Legt die Höhe des Anzeigefelds fest.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Set Height( 150 );

```

### Set Main Window

**Syntax:** obj &lt;&lt; Set Main Window

**Beschreibung:** Fenster als Hauptfenster in JMP festlegen und bisheriges Hauptfenster als normales Fenster festlegen.

```jsl

//This message applies to all display box objectsw = New Window( "Main Window", Text Box( "Main JMP Window" ) );w << Set Main Window;

```

### Set Max Size

**Syntax:** obj &lt;&lt; Set Max Size( width,height )

**Beschreibung:** Legt die maximale Größe dieses Anzeigefelds zum Zweck der automatischen Streckung fest.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Set Max Size( 500, 500 );fb << Get Max Size;

```

### Set Min Size

**Syntax:** obj &lt;&lt; Set Min Size( width,height )

**Beschreibung:** Legt die Mindestgröße dieses Anzeigefelds zum Zweck der automatischen Streckung fest.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Set Min Size( 30, 30 );fb << Get Min Size;

```

### Set Page Setup

**Syntax:** obj &lt;&lt; Set Page Setup( &lt;margins(left, top, right, bottom)&gt;, &lt;scale(s)&gt;, &lt;portrait(0|1)&gt;, &lt;paper size(p)&gt;, &lt;Table of Contents(always, never, default)&gt; )

**Beschreibung:** Legt die Informationen für die Seiteneinrichtung fest, die beim Drucken oder Speichern als PDF verwendet werden. Ein Inhaltsverzeichnis kann optional aus Gliederungsfeldern erstellt werden.

```jsl

//This message applies to all display box objectsw = New Window( "Window", Outline Box( "TOC", Text Box( "Page Setup Test" ) ) );w << Set page setup(	margins( 1, 1, 1, 1 ),	scale( 1 ),	portrait( 1 ),	paper size( "Letter" ),	Table of Contents( "always" ));w << Save pdf( "$DOCUMENTS\test.pdf" );

```

### Set Print Footers

**Syntax:** obj &lt;&lt; Set Print Footers( left footer, center footer, right header )

**Beschreibung:** Legt die linke, mittlere und rechte Fußzeile für den Ausdruck fest.

```jsl

//This message applies to all display box objectsw = New Window( "Window", Text Box( "Footer Test" ) );w << Set Print Footers(	"Today is: &d;"/*left*/, "&wt;"/*center*/,	"Page &pn; of &pc;"/*right*/);w << Print Window;

```

### Set Print Headers

**Syntax:** obj &lt;&lt; Set Print Headers( left header, center header, right header )

**Beschreibung:** Legt die linke, mittlere und rechte Kopfzeile für den Ausdruck fest.

```jsl

//This message applies to all display box objectsw = New Window( "Window", Text Box( "Header Test" ) );w << Set Print Headers(	"Today is: &d;"/*left*/, "&wt;"/*center*/,	"Page &pn; of &pc;"/*right*/);w << Print Window;

```

### Set Property

**Syntax:** obj &lt;&lt; Set Property( "property", value )

**Beschreibung:** Legt den Wert für die benannte property für das Anzeigefeld fest.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Set Property( "Enabled", 0 );

```

### Set Report Title

**Syntax:** obj &lt;&lt; Set Report Title( "string" )

**Beschreibung:** Ändert den Berichtstitel.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Set Report Title( "New Title" );

```

### Set Stretch

**Syntax:** obj &lt;&lt; Set Stretch( x,y )

**Beschreibung:** Legt das horizontale und vertikale Streckverhalten des Felds fest. Felder, die mit Window gestreckt werden, werden in der Größe geändert, wenn sich die Größe des Fensters oder Fensterbereichs ändert. Felder, die mit Fill gestreckt werden, werden so gestreckt, dass sie den verfügbaren Raum in ihrem Container füllen. Felder, bei denen für das Strecken Off ausgewählt ist, werden im Allgemeinen nicht gestreckt. Für die meisten Felder ist standardmäßig Neutral festgelegt, was bedeutet, dass sie ihr Verhalten anhand ihrer untergeordneten Felder bestimmen.

**JMP Version hinzugefügt:** 16

#### Mit Fenster strecken

```jsl

//This message applies to all display box objectsNew Window( "Example",	H List Box(		tv = Text Box( "V+V", <<rotate text( left ) ),		V List Box(			Text Box( "resize the containing window" ),			th = Text Box( "H+H" ),			ts = Spacer Box( <<Size( 10, 30 ), <<Color( "blue" ) )		)	));tv << Vertical Alignment( "Center" );th << Horizontal Alignment( "Center" );th << Set Stretch( "Window", "Off" );ts << Set Min Size( 5, 20 );ts << Set Max Size( 100000, 100 );ts << Set Stretch( "Window", "Window" );

```

#### Strecken zum Füllen

```jsl

//This message applies to all display box objectsNew Window( "Stretch",	V List Box(		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),		Spacer Box( Size( 20, 20 ), Color( "Light Red" ), <<Set Stretch( "Fill", "Off" ) )	));

```

### Set Summary Behavior

**Syntax:** obj &lt;&lt; Set Summary Behavior( "Default"|"Visible"|"Collapse" )

**Beschreibung:** Sets the behavior of the box when a report is viewed in Summary mode.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );d << Report View( "Summary" );r = d << Report;tb = r[Table Box( 1 )];tb << Set Summary Behavior( "Visible" );

```

### Set Width

**Syntax:** obj &lt;&lt; Set Width( width )

**Beschreibung:** Legt die Breite des Anzeigefelds fest.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Set Width( 400 );

```

### Set Window Icon

**Syntax:** obj &lt;&lt; Set Window Icon( icon name )

**Beschreibung:** Legt das Fenstersymbol fest.

```jsl

//This message applies to all display box objectsw = New Window( "Example", ex = Button Box( "New Analysis" ) );w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**Syntax:** obj &lt;&lt; Set Window Size( x,y )

**Beschreibung:** Legt die Größe des Fensters fest.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Set Window Size( 800, 1200 );

```

### Set Window Title

**Syntax:** obj &lt;&lt; Set Window Title( "string" )

**Beschreibung:** Ändert den Fenstertitel.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Set Window Title( "New Title" );

```

### Show Properties

**Syntax:** obj &lt;&lt; Show Properties

**Beschreibung:** Zeigt einen Eigenschaftseditor für Anzeigefelder an

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Show Properties();

```

### Show Tree Structure

**Syntax:** obj &lt;&lt; Show Tree Structure

**Beschreibung:** Zeigt eine hierarchische Baumstruktur des Anzeigefelds und der zugehörigen Knoten an.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Show Tree Structure();

```

### Show Window

**Syntax:** obj &lt;&lt; Show Window( state=0|1 )

**Beschreibung:** Blendet das Fenster ein oder aus. Dies ist nützlich, um Fenster kurzzeitig auszublenden. Standardmäßig ein.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Show Window( 0 );Wait( 2 );w << Show Window( 1 );

```

### Sib

**Syntax:** obj &lt;&lt; Sib

**Beschreibung:** Gibt das Geschwisterelement des Anzeigefelds zurück.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisSibling = axisbox << sib();Print( axisSibling << Class Name() );

```

### Sib Append

**Syntax:** obj &lt;&lt; Sib Append( Display box, Horizontal|Vertical )

**Beschreibung:** Fügt direkt nach diesem Anzeigefeld ein Anzeigefeld hinzu.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r()[framebox( 1 )];fb << sib append(	Text Box( "============ after ==============", Rotate Text( "Right" ) ),	"Horizontal");fb << sib append( Text Box( "=== below ===" ), "Vertical" );

```

### Sib Prepend

**Syntax:** obj &lt;&lt; Sib Prepend( Display box, Horizontal|Vertical )

**Beschreibung:** Fügt direkt vor diesem Anzeigefeld ein Anzeigefeld hinzu.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << sib prepend(	Text Box( "    ============ before ==============", Rotate Text( "Right" ) ),	"Horizontal");fb << sib prepend( Text Box( "=== above ===" ), "Vertical" );

```

### Size Window

**Syntax:** obj &lt;&lt; Size Window( x,y )

**Beschreibung:** Legt die Größe des Fensters fest.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Size Window( 500, 500 );

```

### Text Color

**Syntax:** obj &lt;&lt; Text Color( color ); color = obj &lt;&lt; Get Text Color

**Beschreibung:** Der Text wird in der Textfarbe dargestellt, sofern eine festgelegt ist. Ist die Eigenschaft nicht festgelegt, erbt das Feld die Textfarbe des Containerfelds.

**JMP Version hinzugefügt:** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Text Color );Wait( 2 );tb << Text Color( "Red" );

```

### Top Parent

**Syntax:** obj &lt;&lt; Top Parent

**Beschreibung:** Gibt das übergeordnete Stammelement dieses Anzeigefelds zurück.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rootParent = rbiv << Top Parent();Print( rootParent << Class Name() );

```

### UI Only

**Syntax:** obj &lt;&lt; UI Only( state=0|1 ); state = obj &lt;&lt; Get UI Only

### Update Window

**Syntax:** obj &lt;&lt; Update Window

**Beschreibung:** Aktualisieren Sie das Fenster mit dem Anzeigefenster, falls dieses ungültig gemachte Bereiche enthält. Die Meldung <<Inval erzeugt ungültig gemachte Bereiche.

```jsl

//This message applies to all display box objectscolor = "green"; /* initial color in a variable */New Window( "UpdateWindow example",	Button Box( "red",		color = "red";        // try commenting out each of the 4 lines that follow, run the script,		// click the buttons, and resize the windows (for example) to force a		// redraw.  All 4 lines are important, though the last two may be		// slightly different on Windows and Mac OSs.		g1 << inval; /* tell the oval to redraw */		g2 << inval; /* tell the rectangle to redraw */		g1 << updateWindow; /* tell the oval window to update immediately */		g2 << updateWindow; /* tell the rect window to update immediately */		// this is a busy-wait to help demonstrate the various behaviors...		x = Tick Seconds();		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );	),	Button Box( "blue",		color = "blue";		g1 << inval; /* same comments */		g2 << inval;		g1 << updateWindow;		g2 << updateWindow;		x = Tick Seconds();		While( Tick Seconds() - x < .5, 0 );	));New Window( "oval",	g1 = Graph Box(/* the graph does NOT watch for the color variable to change                      but will use the current value of color when it reshows */		Fill Color( color );		Oval( 10, 80, 70, 50, 1 );	));New Window( "rect",	g2 = Graph Box(		Fill Color( color );		Rect( 10, 80, 70, 50, 1 );	));

```

### User Resizable

**Syntax:** obj &lt;&lt; User Resizable; obj &lt;&lt; Get User Resizable

**Beschreibung:** Wenn die Feldgröße vom Benutzer geändert werden kann, ändert sich der Cursor am unteren und rechten Rand, um die Größenänderung per Drag & Drop zuzulassen.

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );New Window( "resize",	H Splitter Box(		Size( 600, 200 ),		tree = Tree Box( {root1, root2} ),		scroll = Scroll Box(			Size( 300, 200 ),			Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) )		)	));tree << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );scroll << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );Wait( 2 );tree << User Resizable( {0, 0} );scroll << User Resizable( {0, 0} );

```

### Vertical Alignment

**Syntax:** obj &lt;&lt; Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" ); "Default"|"Top"|"Center"|"Bottom" = obj &lt;&lt; Get Vertical Alignment

**Beschreibung:** Die vertikale Ausrichtung steuert die Position des Felds innerhalb eines Containers, sofern das Feld nicht den gesamten Raum ausfüllt.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;lb = r[List Box( 6 )];lb << Set Horizontal( 1 );lb = r[List Box( 7 )];lb << Border( 1 );Wait( 2 );lb << Vertical Alignment( "Bottom" );

```

### Visibility

**Syntax:** obj &lt;&lt; Visibility( "Visible"|"Hidden"|"Collapse" ); "Visible"|"Hidden"|"Collapse" = obj &lt;&lt; Get Visibility

**Beschreibung:** Die Sichtbarkeit legt fest, ob ein Feld angezeigt wird und ob es Platz benötigt. Der Standardwert "Visible" bedeutet, dass das Objekt angezeigt wird. Ein Objekt vom Typ "Hidden" wird nicht angezeigt, benötigt jedoch trotzdem Platz, während ein Feld vom Typ "Collapsed" keinen Platz im Layout benötigt.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Visibility );Wait( 1 );tb << Visibility( "Collapse" );Show( tb << Get Visibility );

```

### Window Class Name

**Syntax:** obj &lt;&lt; Window Class Name

**Beschreibung:** Gibt den Namen der Fensterklasse für das Anzeigefenster zurück.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;Show( biv << Window Class Name() );Show( rbiv << Window Class Name() );

```

### XPath

**Syntax:** obj &lt;&lt; XPath( XPath expression, &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**Beschreibung:** Wendet einen XPath-Ausdruck auf die XML-Darstellung des Anzeigebaums an und gibt die Ergebnisse zurück. Standardmäßig werden Zeichenketten in der Landessprache zurückgegeben, und die XML enthält Datenwerte in einigen Feldern. Verwenden Sie die Option English, um englische Zeichenketten zurückzugeben, sofern verfügbar. Verwenden Sie die Option NoData, um die Datenwerte in den Feldern wegzulassen, was für die Leistung sinnvoll ist, wenn Ihre Abfrage nur auf Feldattributen basiert.

#### Attributes

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//OutlineBox[@isOpen='false']" )) << Close( 0 );

```

#### Box type

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//TextEditBox" )) << Text Color( "Green" );

```

#### Child box

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//OutlineBox[text()='Summary of Fit']/TableBox" )) <<Make Into Data Table;

```

#### Data

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//NumberColBoxItem[text()='40']/parent::*" )) <<Text Color( "Green" );

```

#### Display Seg

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//MarkerSeg" )) << Set Marker( "Square" );

```

#### Text

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//OutlineBox[text()='Parameter Estimates']" )) << Close;

```

### Zoom Window

**Syntax:** obj &lt;&lt; Zoom Window

**Beschreibung:** Ändert die Größe des Fensters, so dass es groß genug ist, um seinen gesamten Inhalt anzuzeigen.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Set Window Size( 80, 120 );Wait( 2 );w << Zoom Window;

```

## Zugehörige Konstruktoren

### Table Box

**Syntax:** y = Table Box( displayBox, ... )

**Beschreibung:** Gibt für eine Tabelle mit einer oder mehreren Spalten ein Anzeigefeld zurück.

**Beispiel 1**

```jsl

New Window( "Mountains",	tb = Table Box(		String Col Box( "Mountain", {"K2", "Delphi", "Kilimanjaro", "Grand Teton"} ),		Number Col Box( "Elevation (meters)", {8611, 681, 5895, 4199} ),		Plot Col Box( "", {8611, 681, 5895, 4199} )	));

```

**Beispiel 2**

```jsl

Open( "$SAMPLE_DATA/Baltic.jmp" );d = Distribution( Continuous Distribution( Column( :ls ) ) );rpt = d << report;tb = rpt[Table Box( 1 )];tb << Select;

```

