# Column Switcher



## Elementmeldungen

### Close Outline

**Syntax:** obj &lt;&lt; Close Outline( state=0|1 )

**Beschreibung:** Öffnet oder schließt das Gliederungsfeld für den Spaltenwechsler

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Close Outline( 1 );

```

### Get Current

**Syntax:** obj &lt;&lt; Get Current

**Beschreibung:** Ruft den Namen der aktuellen Variablen ab

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Current( "country" );
ColumnSwitcherObject << Get Current/*country*/ ;

```

### Get Layout

**Syntax:** obj &lt;&lt; Get Layout

**Beschreibung:** Ruft das Layout für mehrere Spaltenwechsler ab. Vertikal(0) bzw. horizontal(1).

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Country ), Y( :Weight ) ),
	Elements( Bar( X, Y, Legend( 4 ) ) )
);
cs1 = gb << Column Switcher( :Country, {:Model, :Country, :Type}, Layout( 1 ) );
cs2 = gb << Column Switcher(
	:Weight,
	{:Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size}
);
If( cs2 << Get Layout() == 1,
	Print( "Horizontal" ),
	Print( "Vertical" )
);

```

### Get List

**Syntax:** obj &lt;&lt; Get List

**Beschreibung:** Ruft die Liste der verfügbaren Variablen ab

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Get List/*{"sex","country","marital status"}*/ ;

```

### Get Original

**Syntax:** obj &lt;&lt; Get Original

**Beschreibung:** Ruft den Namen der ursprünglichen Variablen ab

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Next;
ColumnSwitcherObject << Get Original/*marital status*/ ;

```

### Get Speed

**Syntax:** obj &lt;&lt; Get Speed

**Beschreibung:** fpm = obj<<getSpeed /* in Frames Per Minute */;

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
FPM = ColumnSwitcherObject << Get Speed;

```

### Link Platform

**Syntax:** obj &lt;&lt; Link Platform( platform )

**Beschreibung:** Verknüpft eine Plattform mit diesem Spaltenwechsler.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
columnSwitcher = dt << Column Switcher(
	:Process 1,
	{:Process 1, :Process 2, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7}
);
gb = Graph Builder( Variables( Y( :Process 1 ) ), Elements( Histogram( Y, Legend( 3 ) ) ) );
columnSwitcher << Link Platform( gb );

```

### Make Column Switch Handler

**Syntax:** handler = cs &lt;&lt; Make Column Switch Handler( function(pre), function(post) )

**Beschreibung:** Erstellt einen Handler für Spaltenwechsel mit Rückruffunktionen, die vor und nach einem Spaltenwechsel aufgerufen werden. Die Rückruffunktionen empfangen die vorherige Spalte, die nächste Spalte und den Spaltenwechsler. Die für vor dem Spaltenwechsel angegebene Funktion sollte einen Wert ungleich Null zurückgeben, damit der Wechsel gestattet wird. Eine Rückgabe von 0 verhindert den Wechsel. Die nach dem Wechsel aufgerufene Funktion sollte keinen Wert zurückgeben.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
gb = Graph Builder( Variables( Y( :Process 1 ) ), Elements( Histogram( Y, Legend( 3 ) ) ) );
columnSwitcher = gb << Column Switcher(
	:Process 1,
	{:Process 1, :Process 2, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7}
);
pre = Function( {currentColumn, nextColumn, switcher},
	Print(
		"Before switch: " || (currentColumn << get name) || " >> " || (nextColumn << get name
		) || " [Column Switcher] current: " || (columnSwitcher << Get Current)
	);
	If( nextColumn << get name == "Process 4",
		0,
		1
	);
);
post = Function( {previousColumn, currentColumn, switcher},
	Print(
		"After switch: " || (previousColumn << get name) || " >> " || (currentColumn <<
		get name) || " [Column Switcher] current: " || (columnSwitcher << Get Current)
	)
);
handler = columnSwitcher << Make Column Switch Handler( pre, post );
columnSwitcher << Run;

```

### Next

**Syntax:** obj &lt;&lt; Next

**Beschreibung:** Ändert die Auswahl des Spaltenwechslers zur nächsten verfügbaren Auswahl

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Next;

```

### Pause

**Syntax:** obj &lt;&lt; Pause

**Beschreibung:** Animation anhalten

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Run;
Wait( 5/*seconds, while it animates*/ );
ColumnSwitcherObject << Pause;

```

### Previous

**Syntax:** obj &lt;&lt; Previous

**Beschreibung:** Ändert die Auswahl des Spaltenwechslers zur vorherigen verfügbaren Auswahl

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Previous;

```

### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Diesen Spaltenwechsler entfernen

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Run;
Wait( 2/*seconds, while it animates*/ );
ColumnSwitcherObject << Remove Column Switcher;

```

### Retain Axis Settings

**Syntax:** obj &lt;&lt; Retain Axis Settings( state=0|1 )

**Beschreibung:** Einige Graphen speichern Achsenanpassungen auf der Grundlage des Namens der Spalte. Standardmäßig werden diese Anpassungen beim Spaltenwechsel entfernt. Wenn diese Option aktiviert ist, wird die Spalte beim Wechsel aktualisiert, so dass die Anpassungen auf den neuen Graphen angewendet werden.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
Graph Builder(
	Variables( X( :Process 1 ), Y( :Process 2 ) ),
	Elements( Points( X, Y, Legend( 2 ) ), Smoother( X, Y, Legend( 3 ) ) ),
	Column Switcher(
		:Process 1,
		{:Process 1, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7},
		Retain Axis Settings( 1 )
	),
	SendToReport(
		Dispatch( {}, "Process 1", ScaleBox,
			{Min( -0.5 ), Max( 22 ), Inc( 4 ), Minor Ticks( 3 ),
			Add Ref Line( 12, "Solid", "Black", "", 1 )}
		)
	)
);

```

### Run

**Syntax:** obj &lt;&lt; Run

**Beschreibung:** Animation starten

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Run;

```

### Script

**Syntax:** obj &lt;&lt; Script( script )

**Beschreibung:** Skript festlegen, das beim Wechseln der Spalte ausgeführt wird

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Script(
	Print( "New Value: " || Char( ColumnSwitcherObject << Get Current ) )
);
ColumnSwitcherObject << Run;
Wait( 5/*seconds, while it animates*/ );

```

### Set Current

**Syntax:** obj &lt;&lt; Set Current( string )

**Beschreibung:** Legt die aktuelle Variable fest

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Current( "country" );

```

### Set Layout

**Syntax:** obj &lt;&lt; Set Layout( 0 = Vertical | 1 = Horizontal )

**Beschreibung:** Legt für das Layout für mehrere Spaltenwechsler vertikal(0) bzw. horizontal(1) fest.

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Country ), Y( :Weight ) ),
	Elements( Bar( X, Y, Legend( 4 ) ) )
);
cs1 = gb << Column Switcher( :Country, {:Model, :Country, :Type} );
cs2 = gb << Column Switcher(
	:Weight,
	{:Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size}
);
cs1 << Set Layout( 1 );

```

### Set N Lines

**Syntax:** obj &lt;&lt; Set N Lines( number )

**Beschreibung:** Legt die Anzahl der Linien im Listenfeld der Spaltennamen fest

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set N Lines( 20 );

```

### Set Script

**Syntax:** obj &lt;&lt; Set Script( script )

**Beschreibung:** Skript festlegen, das beim Wechseln der Spalte ausgeführt wird

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Script(
	Print( "New Value: " || Char( ColumnSwitcherObject << Get Current ) )
);
ColumnSwitcherObject << Run;
Wait( 5/*seconds, while it animates*/ );

```

### Set Size

**Syntax:** obj &lt;&lt; Set Size( number )

**Beschreibung:** Legt die Pixelbreite des Listenfelds der Spaltennamen fest

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Size( 300 );

```

### Set Speed

**Syntax:** obj &lt;&lt; Set Speed( number )

**Beschreibung:** obj<<setSpeed(60) /* in Frames Per Minute */;

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Speed( 60 );/*FPM*/ColumnSwitcherObject << Run;

```

### Title

**Syntax:** obj &lt;&lt; Title( string )

**Beschreibung:** Legt den Titel für das Gliederungsfeld für den Spaltenwechsel fest

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Title( "Switch on X" );

```

