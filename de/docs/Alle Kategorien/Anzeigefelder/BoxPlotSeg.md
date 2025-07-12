# BoxPlotSeg



## Elementmeldungen

### Box Style

**Syntax:** obj << Box Style( "Normal"|"Durchgezogen"|"Dünn" )

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Box Style( "Solid" );

```

### Box Type

**Syntax:** obj << Box Type( "Quantil"|"Ausreißer" )

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Box Type( "Outlier" );

```

### Child

**Syntax:** seg2 = obj << Child

**Beschreibung:** Gibt das erste untergeordnete Element des Anzeigesegments zurück.

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Child; // not many segs support children

```

### Class Name

**Syntax:** classname = obj << Class Name

**Beschreibung:** Gibt den Namen der Anzeigeklasse für das Anzeigefeld zurück.

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Class Name;

```

### Clip Shape

**Syntax:** seg << Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**Beschreibung:** Stellt die Geometrie in der gewünschten Form dar. Die Form kann mittels einer Formendatei oder einem Pfad angegeben werden. Optional kann mit einer Formendatei eine ID angegeben werden, um eine einzelne Form aus der Datei auszuwählen, ansonsten wird die Verbindung sämtlicher Formen als Beschneidungsbereich verwendet. Ein Beschneidungspfad kann mit einer Nx3-Matrix oder mit einer Textdarstellung angegeben werden. Eine Pfadmatrix hat drei Spalten für x, y und Flags für jeden Punkt im Pfad. Die Flag-Werte sind 0 für Steuern, 1 für Verschieben, 2 für Liniensegment, 3 für kubisches Bézier-Segment und sie sind negativ, wenn der Punkt den Pfad auch schließt. Der Pfadtext unterstützt die SVG-Syntax.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Size( 653, 396 ),
	Show Control Panel( 0 ),
	Variables( X( :Longitude ), Y( :Latitude ) ),
	Elements( Contour( X, Y, Legend( 2 ) ) ),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),
			Reference Line Order( 3 )}
		)
	)
);
cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );
Wait( 2 );
cs << Clip Shape( Boundaries( "US States" ) );

```

### Color Theme

**Syntax:** obj << Color Theme

### Confidence Diamond

**Syntax:** obj << Confidence Diamond( state=0|1 )

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Confidence Diamond( 0 );

```

### Delete

**Syntax:** obj << Delete

**Beschreibung:** Löscht das Anzeigesegment.

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Delete;

```

### Density Gradient

**Syntax:** obj << Density Gradient( "Nach Weiß ausblenden"|"Nach Grau ausblenden"|"Vollfarbig"="Nach Weiß ausblenden" )

**Beschreibung:** Legt das Farbverhalten von Dichtegradienten fest. Standardmäßig „Nach Weiß ausblenden“.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Density Gradient( "Fade to Gray" );

```

### Error Bar Cap

**Syntax:** obj << Error Bar Cap( "Keine"|"Sehr klein"|"Klein"|"Mittel"|"Groß" )

**Beschreibung:** Gibt an, welche Art von Abschluss für Fehlerbalken verwendet werden soll.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap( "Large" );

```

### Error Bar Cap Shape

**Syntax:** obj << Error Bar Cap Shape( begin, end )

**Beschreibung:** Gibt die Form des Abschlusses an, die in Fehlerbalken angezeigt werden soll. Ein einzelnes Argument legt die Form für beide Enden des Balkens fest, oder es können separate Argumente für Anfang und Ende des Balkens angegeben werden. Die Standardform ist "Line". Die Form "Arrow" zeichnet einen nach außen zeigenden Pfeil und "None" lässt den Abschluss aus.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap Shape( "Line", "Arrow" );

```

### Fences

**Syntax:** obj << Fences( state=0|1 )

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Fences( 0 );

```

### Fill

**Syntax:** obj << Fill( state = 0|1 )

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Fill( 0 );

```

### Fill Color

**Syntax:** obj << Fill Color( color )

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Fill Color( "Green" );

```

### First Value

**Syntax:** obj << First Value( state=0|1 )

**JMP Version hinzugefügt:** 16

### Frame

**Syntax:** FrameBox = obj << Frame

**Beschreibung:** Gibt das Rahmenfeld zurück, in dem sich das Anzeigesegment befindet.

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Frame;

```

### Get Box Style

**Syntax:** obj << Get Box Style

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Box Style();

```

### Get Box Type

**Syntax:** obj << Get Box Type

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Box Type();

```

### Get Clip Shape

**Syntax:** obj << Get Clip Shape

**Beschreibung:** Gibt die aktuelle Beschneidungsform aus

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Size( 653, 396 ),
	Show Control Panel( 0 ),
	Variables( X( :Longitude ), Y( :Latitude ) ),
	Elements( Contour( X, Y, Legend( 2 ) ) ),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),
			Reference Line Order( 3 )}
		)
	)
);
cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );
cs << Clip Shape( Boundaries( "US States" ) );
Wait( 2 );
cs << Get Clip Shape();

```

### Get Confidence Diamond

**Syntax:** obj << Get Confidence Diamond

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Confidence Diamond();

```

### Get Density Gradient

**Syntax:** obj << Get Density Gradient

**Beschreibung:** Ruft das Farbverhalten von Dichtegradienten ab.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Density Gradient;

```

### Get Description

**Syntax:** description = obj << Get Description

**Beschreibung:** Ruft die Beschreibung des Anzeigesegments ab.

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << get description();

```

### Get Error Bar Cap

**Syntax:** obj << Get Error Bar Cap

**Beschreibung:** Gibt die aktuelle Abschlussart der Fehlerbalken zurück.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Error Bar Cap();

```

### Get Error Bar Cap Shape

**Syntax:** { begin, end } = obj << Get Error Bar Cap Shape

**Beschreibung:** Gibt die Form des Abschlusses bei Fehlerbalken zurück.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Error Bar Cap Shape();

```

### Get Fences

**Syntax:** obj << Get Fences

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Fences();

```

### Get Fill

**Syntax:** obj << Get Fill

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Fill;

```

### Get Fill Color

**Syntax:** obj << Get Fill Color

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Fill Color();

```

### Get Fill Pattern

**Syntax:** obj << Get Fill Pattern

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Fill Pattern;

```

### Get Gradient

**Syntax:** obj << Get Gradient

**Beschreibung:** Ruft den Farbverlauf ab.

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient;

```

### Get Gradient Color Theme

**Syntax:** obj << Get Gradient Color Theme

**Beschreibung:** Ruft das Farbschema des Verlaufs ab.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**Syntax:** obj << Get Gradient Discrete Colors

**Beschreibung:** Ruft ab, ob jede Stufe in einem Verlauf eine einzelne Farbe sein soll oder ob die Farben glatte Übergänge haben.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Discrete Colors;

```

### Get Gradient Fill

**Syntax:** obj << Get Gradient Fill

**Beschreibung:** Ruft das Farbverhalten für Werte außerhalb des Bereichs der Verlaufsskala ab.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Fill;

```

### Get Gradient Label Count

**Syntax:** obj << Get Gradient Label Count

**Beschreibung:** Ruft die Anzahl der Beschriftungen in der Legende eines Verlaufs ab.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Label Count;

```

### Get Gradient Label Levels

**Syntax:** [value1,value1, ... value N] = obj << Get Gradient Label Levels

**Beschreibung:** Ruft den Satz von Werten für Beschriftungen in der Verlaufsskala ab.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Legend Horizontal

**Syntax:** obj << Get Gradient Legend Horizontal

**Beschreibung:** Ruft ab, ob die Legende des Verlaufs horizontal gezeichnet wird.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**Syntax:** obj << Get Gradient Legend Label Format

**Beschreibung:** Ruft das Format der Beschriftungen der Verlaufslegende ab

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**Syntax:** obj << Get Gradient Legend Label Width

**Beschreibung:** Ruft die maximale Zeichenlänge von Beschriftungen der Verlaufslegende ab.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**Syntax:** obj << Get Gradient Legend Show Labels

**Beschreibung:** Ruft ab, ob die Stufenbeschriftungen in der Legende des Verlaufs angezeigt werden sollen.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**Syntax:** obj << Get Gradient Level Count

**Beschreibung:** Ruft die Anzahl der Stufen in einem Verlauf ab.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**Syntax:** obj << Get Gradient Lightness Range

**Beschreibung:** Ruft die minimale und maximale Helligkeit für Stufenfarben in einem Verlauf ab. Fehlende Werte weisen darauf hin, dass der ursprüngliche Wert des Farbschemas verwendet wird.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Lightness Range;

```

### Get Gradient Range

**Syntax:** obj << Get Gradient Range

**Beschreibung:** Ruft den Bereich ab, über den nicht benutzerdefinierte Verlaufsskalen generiert werden.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Range;

```

### Get Gradient Reverse Color Order

**Syntax:** obj << Get Gradient Reverse Color Order

**Beschreibung:** Ruft ab, ob die Reihenfolge der Farben in einem Verlauf umgekehrt ist.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**Syntax:** obj << Get Gradient Reverse Label Order

**Beschreibung:** Ruft ab, ob die Reihenfolge der Beschriftungen in einem Verlauf umgekehrt ist.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Reverse Label Order;

```

### Get Gradient Scale

**Syntax:** obj << Get Gradient Scale

**Beschreibung:** Ruft den Skalentyp des Verlaufs ab.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale;

```

### Get Gradient Scale Values

**Syntax:** [value1,value1, ... value N] = obj << Get Gradient Scale Values

**Beschreibung:** Ruft den Satz von Werten für Beschriftungen in der Verlaufsskala ab.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Show Missing

**Syntax:** obj << Get Gradient Show Missing

**Beschreibung:** Ruft ab, wann der Legendeneintrag für fehlende Werte angezeigt wird.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**Syntax:** obj << Get Gradient Transparency

**Beschreibung:** Ruft das Transparenzverhalten von Verläufen ab.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Transparency;

```

### Get Interval Draw Directions

**Syntax:** obj << Get Interval Draw Directions

**Beschreibung:** Ruft die Richtungen ab, in die Intervalle gezeichnet werden sollen.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements(
		Points(
			X,
			Y,
			Legend( 3 ),
			Summary Statistic( "Mean" ),
			Error Interval( "Standard Deviation" )
		)
	),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Reference Line Order( 3 ), DispatchSeg(
				BarSeg( 1 ),
				{Set Interval Draw Directions( "Upper" )}
			)}
		)
	)
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Interval Draw Directions;

```

### Get Line Color

**Syntax:** color = obj << Get Line Color

**Beschreibung:** Gibt die Farbe der Linien zurück.

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Line Color;

```

### Get Line Style

**Syntax:** pen style = obj << Get Line Style

**Beschreibung:** Gibt den Stil der Linien zurück.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Line Style;

```

### Get Line Width

**Syntax:** number = obj << Get Line Width

**Beschreibung:** Gibt die Breite der Linien zurück.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Line Width;

```

### Get Marker

**Syntax:** marker = obj << Get Marker

**Beschreibung:** Gibt den Symbolstil zurück.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Marker;

```

### Get Marker Size

**Syntax:** size = obj << Get Marker Size

**Beschreibung:** Gibt die Größe der Symbole zurück.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Marker Size;

```

### Get Median Line Style

**Syntax:** obj << Get Median Line Style

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Median Line Style();

```

### Get Moment

**Syntax:** obj << Get Moment( "Mean"|"Std Dev"|"Std Err Mean"|"Upper Mean"|"Lower Mean"|"N"|"Sum Wgt"|"Sum"|"Variance"|"Skewness"|"Kurtosis"|"CV"|"N Missing"|"N Zero"|"N Unique"|"Uncorrected SS"|"Corrected SS"|"Autocorrelation"|"Minimum"|"Maximum"|"Median"|"Mode"|"Trimmed Mean"|"Geometric Mean"|"Range"|"Interquartile Range"|"Median Absolute Deviation"|"Proportion Zero"|"Proportion Nonzero"|"K*Std Dev"|"K*Std Dev Above Mean"|"K*Std Dev Below Mean"|"Robust Mean"|"Robust Standard Deviation"|"N Modes"|"Mode Count" )

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Moment( "Std Dev" );

```

### Get Notched

**Syntax:** obj << Get Notched

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Notched();

```

### Get Quantiles

**Syntax:** Matrix = obj << Get Quantiles( number )

**Beschreibung:** Gibt eine Matrix mit den berechneten Quantilen zurück. Die erste Spalte führt die berechneten Quantile auf und die zweite Spalte enthält die Werte für diese Quantile.

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Quantiles;

```

### Get Shortest Half Bracket

**Syntax:** obj << Get Shortest Half Bracket

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Shortest Half Bracket();

```

### Get Shortest Half Color

**Syntax:** obj << Get Shortest Half Color

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Shortest Half Color();

```

### Get Transparency

**Syntax:** obj << Get Transparency

**Beschreibung:** Gibt einen numerischen Wert zurück, der die Transparenz zwischen 0 (durchsichtig) und 1 (undurchsichtig) darstellt.

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Transparency;

```

### Gradient

**Syntax:** obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <Contour Levels(num)>, <Reverse Gradient(0|1)>, <Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")>, <Gradient Transparency("None"|"Linear")> }

obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <N Labels(num)>, <Show Missing Color("On"|"Off"|"Auto")>, <Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")>, <Scale Values([v1, v2, …])>, <Range Type("Default"|"Exact Data Range"|"Middle 90%")>, <Fill("Between"|"Above"|"Below"|"Above Below")>, <Reverse Gradient(0|1)>, <Reverse Labels(0|1)>, <Discrete Color(0|1)> }, <Label Format(labelFormat)>, <Width(num)>, <Horizontal(0|1)>, <Show Labels(0|1)>

**Beschreibung:** Legt den Farbverlauf fest.

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**Syntax:** obj << Gradient Color Theme

**Beschreibung:** Legt das Farbschema für den Verlauf fest.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Gradient Discrete Colors

**Syntax:** obj << Gradient Discrete Colors

**Beschreibung:** Legt fest, ob jede Stufe in einem Verlauf eine einzelne Farbe sein soll oder ob die Farben glatte Übergänge haben sollen.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Gradient Fill

**Syntax:** obj << Gradient Fill( "Zwischen"|"Darüber"|"Darunter"|"Darüber Darunter"="Darüber Darunter" )

**Beschreibung:** Legt das Farbverhalten für Werte außerhalb des Bereichs der Verlaufsskala fest. Standardmäßig „Darüber Darunter“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Gradient Label Count

**Syntax:** obj << Gradient Label Count

**Beschreibung:** Legt die Anzahl der Beschriftungen in der Legende eines Verlaufs fest. Diese Anzahl ist um eins kleiner als die Anzahl der Konturstufen.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Label Count( 8 );

```

### Gradient Label Levels

**Syntax:** obj << Gradient Label Levels( [value1,value1, ... value N] )

**Beschreibung:** Legt einen benutzerdefinierten Satz von Werten für die Verwendung in der Verlaufsskala fest.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Legend Horizontal

**Syntax:** obj << Gradient Legend Horizontal

**Beschreibung:** Legt fest, ob die Legende des Verlaufs horizontal gezeichnet werden soll.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**Syntax:** obj << Gradient Legend Label Format

**Beschreibung:** Legt das Format für die Beschriftungen der Verlaufslegende fest

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**Syntax:** obj << Gradient Legend Label Width

**Beschreibung:** Legt die maximale Zeichenlänge von Beschriftungen der Verlaufslegende fest.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**Syntax:** obj << Gradient Legend Show Labels

**Beschreibung:** Legt fest, ob die Stufenbeschriftungen in der Legende des Verlaufs angezeigt werden sollen.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**Syntax:** obj << Gradient Level Count

**Beschreibung:** Legt die Anzahl der Stufen in einem Verlauf fest. Diese Anzahl ist um eins kleiner als die Anzahl der Beschriftungen.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**Syntax:** obj << Gradient Lightness Range

**Beschreibung:** Legt die minimale und maximale Helligkeit für Stufenfarben in einem Verlauf fest. Die Farben werden skaliert, um den Bereich abzudecken. Ein fehlender Wert wird behandelt wie keine Änderung.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Gradient Range

**Syntax:** obj << Gradient Range( "Standard"|"Exakter Datenbereich"|"Mittlere 90 %"="Standard" )

**Beschreibung:** Legt den Bereich fest, über den nicht benutzerspezifische Verlaufsskalen generiert werden. Standardmäßig „Standard“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Gradient Reverse Color Order

**Syntax:** obj << Gradient Reverse Color Order

**Beschreibung:** Kehrt die Reihenfolge der Farben in einem Verlauf um.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**Syntax:** obj << Gradient Reverse Label Order

**Beschreibung:** Kehrt die Reihenfolge der Beschriftungen in einem Verlauf um.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Reverse Label Order( 1 );

```

### Gradient Scale

**Syntax:** obj << Gradient Scale( "Linear"|"Quantil"|"Standardabweichung"|"Log"|"Log-Offset"|"Benutzerdefiniert"="Linear" )

**Beschreibung:** Legt den Skalentyp des Verlaufs fest. Standardmäßig „Linear“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Gradient Scale Values

**Syntax:** obj << Gradient Scale Values( [value1,value1, ... value N] )

**Beschreibung:** Legt einen benutzerdefinierten Satz von Werten für die Verwendung in der Verlaufsskala fest.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Show Missing

**Syntax:** obj << Gradient Show Missing( "Automatisch"|"Ein"|"Aus"="Automatisch" )

**Beschreibung:** Legt fest, wann der Legendeneintrag für fehlende Werte angezeigt werden soll. Standardmäßig „Automatisch“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :city ), Y( :POP ), Color( :NO ) ),
	Elements( Bar( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Bar Seg( 1 ) );
seg << Set Gradient Show Missing( "Off" );

```

### Gradient Transparency

**Syntax:** obj << Gradient Transparency( "Keine"|"Linear"="Linear" )

**Beschreibung:** Legt das Transparenzverhalten von Verläufen fest. Standardmäßig „Linear“.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Gradient Transparency( "None" );

```

### Last Value

**Syntax:** obj << Last Value( state=0|1 )

**JMP Version hinzugefügt:** 16

### Line Color

**Syntax:** obj << Line Color( color )

**Beschreibung:** Legt die Farbe für alle Linien im Anzeigesegment fest.

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Line Color( "Green" );

```

### Line Style

**Syntax:** obj << Line Style( pen style )

**Beschreibung:** Legt den Stil der Linien fest. Mögliche Optionen sind Durchgezogen, Gepunktet, Gestrichelt, Strich-Punkt oder Strich-Punkt-Punkt.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Line Style( "Dotted" );

```

### Line Width

**Syntax:** obj << Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Sonstige…" )

**Beschreibung:** Legt die Breite der Linien fest.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Line Width( 3 );

```

### Marker

**Syntax:** obj << Marker( marker )

**Beschreibung:** Legt den Symbolstil für alle Symbole fest.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Marker( "Square" );

```

### Marker Size

**Syntax:** obj << Marker Size( size )

**Beschreibung:** Legt die Größe der Symbole fest. Mögliche Größen sind Punkt, Klein, Mittel, Groß, XL, XXL und XXXL.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

```

### Max Value

**Syntax:** obj << Max Value( state=0|1 )

**JMP Version hinzugefügt:** 16

### Median Line Style

**Syntax:** obj << Median Line Style( pen style )

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Median Line Style( "Dotted" );

```

### Min Value

**Syntax:** obj << Min Value( state=0|1 )

**JMP Version hinzugefügt:** 16

### Name

**Syntax:** obj << Name( state=0|1 )

**JMP Version hinzugefügt:** 16

### Notched

**Syntax:** obj << Notched( state=0|1 )

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Notched( 1 );

```

### Parent

**Syntax:** seg2 = obj << Parent

**Beschreibung:** Gibt das übergeordnete Element des Anzeigesegments zurück.

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Parent;

```

### Set Box Style

**Syntax:** obj << Set Box Style( "Normal"|"Durchgezogen"|"Dünn" )

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Box Style( "Solid" );

```

### Set Box Type

**Syntax:** obj << Set Box Type( "Quantil"|"Ausreißer" )

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Box Type( "Outlier" );

```

### Set Confidence Diamond

**Syntax:** obj << Set Confidence Diamond( state=0|1 )

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Confidence Diamond( 0 );

```

### Set Description

**Syntax:** obj << Set Description( description )

**Beschreibung:** Legt die Beschreibung des Anzeigesegments fest.

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << set description( "my seg" );

```

### Set Error Bar Cap

**Syntax:** obj << Set Error Bar Cap( "Keine"|"Sehr klein"|"Klein"|"Mittel"|"Groß" )

**Beschreibung:** Gibt an, welche Art von Abschluss für Fehlerbalken verwendet werden soll.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap( "Large" );

```

### Set Error Bar Cap Shape

**Syntax:** obj << Set Error Bar Cap Shape( begin, end )

**Beschreibung:** Gibt die Form des Abschlusses an, die in Fehlerbalken angezeigt werden soll. Ein einzelnes Argument legt die Form für beide Enden des Balkens fest, oder es können separate Argumente für Anfang und Ende des Balkens angegeben werden. Die Standardform ist "Line". Die Form "Arrow" zeichnet einen nach außen zeigenden Pfeil und "None" lässt den Abschluss aus.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap Shape( "Line", "Arrow" );

```

### Set Fences

**Syntax:** obj << Set Fences( state=0|1 )

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Fences( 0 );

```

### Set Fill

**Syntax:** obj << Set Fill( state = 0|1 )

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Fill( 0 );

```

### Set Fill Color

**Syntax:** obj << Set Fill Color( color )

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Fill Color( "Green" );

```

### Set Fill Pattern

**Syntax:** obj << Set Fill Pattern

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Fill Pattern( "h wave medium" );

```

### Set Gradient

**Syntax:** obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <Contour Levels(num)>, <Reverse Gradient(0|1)>, <Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")>, <Gradient Transparency("None"|"Linear")> }

obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <N Labels(num)>, <Show Missing Color("On"|"Off"|"Auto")>, <Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")>, <Scale Values([v1, v2, …])>, <Range Type("Default"|"Exact Data Range"|"Middle 90%")>, <Fill("Between"|"Above"|"Below"|"Above Below")>, <Reverse Gradient(0|1)>, <Reverse Labels(0|1)>, <Discrete Color(0|1)> }, <Label Format(labelFormat)>, <Width(num)>, <Horizontal(0|1)>, <Show Labels(0|1)>

**Beschreibung:** Legt den Farbverlauf fest.

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**Syntax:** obj << Set Gradient Color Theme

**Beschreibung:** Legt das Farbschema für den Verlauf fest.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**Syntax:** obj << Set Gradient Custom Scale

**Beschreibung:** Legt für den Verlauf fest, dass eine Liste von Werten für eine benutzerdefinierte Skala verwendet wird.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Custom Scale( {0.0, 5.0, 10.0, 20.0} );

```

### Set Gradient Discrete Colors

**Syntax:** obj << Set Gradient Discrete Colors

**Beschreibung:** Legt fest, ob jede Stufe in einem Verlauf eine einzelne Farbe sein soll oder ob die Farben glatte Übergänge haben sollen.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Set Gradient Fill

**Syntax:** obj << Set Gradient Fill( "Zwischen"|"Darüber"|"Darunter"|"Darüber Darunter"="Darüber Darunter" )

**Beschreibung:** Legt das Farbverhalten für Werte außerhalb des Bereichs der Verlaufsskala fest. Standardmäßig „Darüber Darunter“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Set Gradient Label Count

**Syntax:** obj << Set Gradient Label Count

**Beschreibung:** Legt die Anzahl der Beschriftungen in der Legende eines Verlaufs fest. Diese Anzahl ist um eins kleiner als die Anzahl der Konturstufen.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Label Count( 8 );

```

### Set Gradient Label Levels

**Syntax:** obj << Set Gradient Label Levels( [value1,value1, ... value N] )

**Beschreibung:** Legt einen benutzerdefinierten Satz von Werten für die Verwendung in der Verlaufsskala fest.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Legend Horizontal

**Syntax:** obj << Set Gradient Legend Horizontal

**Beschreibung:** Legt fest, ob die Legende des Verlaufs horizontal gezeichnet werden soll.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**Syntax:** obj << Set Gradient Legend Label Format

**Beschreibung:** Legt das Format für die Beschriftungen der Verlaufslegende fest

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**Syntax:** obj << Set Gradient Legend Label Width

**Beschreibung:** Legt die maximale Zeichenlänge von Beschriftungen der Verlaufslegende fest.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**Syntax:** obj << Set Gradient Legend Show Labels

**Beschreibung:** Legt fest, ob die Stufenbeschriftungen in der Legende des Verlaufs angezeigt werden sollen.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**Syntax:** obj << Set Gradient Level Count

**Beschreibung:** Legt die Anzahl der Stufen in einem Verlauf fest. Diese Anzahl ist um eins kleiner als die Anzahl der Beschriftungen.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**Syntax:** obj << Set Gradient Lightness Range

**Beschreibung:** Legt die minimale und maximale Helligkeit für Stufenfarben in einem Verlauf fest. Die Farben werden skaliert, um den Bereich abzudecken. Ein fehlender Wert wird behandelt wie keine Änderung.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Set Gradient Range

**Syntax:** obj << Set Gradient Range( "Standard"|"Exakter Datenbereich"|"Mittlere 90 %"="Standard" )

**Beschreibung:** Legt den Bereich fest, über den nicht benutzerspezifische Verlaufsskalen generiert werden. Standardmäßig „Standard“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Set Gradient Reverse Color Order

**Syntax:** obj << Set Gradient Reverse Color Order

**Beschreibung:** Kehrt die Reihenfolge der Farben in einem Verlauf um.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**Syntax:** obj << Set Gradient Reverse Label Order

**Beschreibung:** Kehrt die Reihenfolge der Beschriftungen in einem Verlauf um.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Reverse Label Order( 1 );

```

### Set Gradient Scale

**Syntax:** obj << Set Gradient Scale( "Linear"|"Quantil"|"Standardabweichung"|"Log"|"Log-Offset"|"Benutzerdefiniert"="Linear" )

**Beschreibung:** Legt den Skalentyp des Verlaufs fest. Standardmäßig „Linear“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Set Gradient Scale Values

**Syntax:** obj << Set Gradient Scale Values( [value1,value1, ... value N] )

**Beschreibung:** Legt einen benutzerdefinierten Satz von Werten für die Verwendung in der Verlaufsskala fest.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Show Missing

**Syntax:** obj << Set Gradient Show Missing( "Automatisch"|"Ein"|"Aus"="Automatisch" )

**Beschreibung:** Legt fest, wann der Legendeneintrag für fehlende Werte angezeigt werden soll. Standardmäßig „Automatisch“.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :city ), Y( :POP ), Color( :NO ) ),
	Elements( Bar( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Bar Seg( 1 ) );
seg << Set Gradient Show Missing( "Off" );

```

### Set Interval Draw Directions

**Syntax:** obj << Set Interval Draw Directions( Both|Upper|Lower|None )

**Beschreibung:** Legt die Richtungen fest, in die Intervalle gezeichnet werden sollen.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements(
		Points(
			X,
			Y,
			Legend( 3 ),
			Summary Statistic( "Mean" ),
			Error Interval( "Standard Deviation" )
		)
	),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Reference Line Order( 3 ), DispatchSeg(
				BarSeg( 1 ),
				{Set Interval Draw Directions( "Upper" )}
			)}
		)
	)
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Interval Draw Directions( "Lower" );

```

### Set Line Color

**Syntax:** obj << Set Line Color( color )

**Beschreibung:** Legt die Farbe für alle Linien im Anzeigesegment fest.

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Line Color( "Green" );

```

### Set Line Style

**Syntax:** obj << Set Line Style( pen style )

**Beschreibung:** Legt den Stil der Linien fest. Mögliche Optionen sind Durchgezogen, Gepunktet, Gestrichelt, Strich-Punkt oder Strich-Punkt-Punkt.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Line Style( "Dotted" );

```

### Set Line Width

**Syntax:** obj << Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Sonstige…" )

**Beschreibung:** Legt die Breite der Linien fest.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Line Width( 3 );

```

### Set Marker

**Syntax:** obj << Set Marker( marker )

**Beschreibung:** Legt den Symbolstil für alle Symbole fest.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Marker( "Square" );

```

### Set Marker Size

**Syntax:** obj << Set Marker Size( size )

**Beschreibung:** Legt die Größe der Symbole fest. Mögliche Größen sind Punkt, Klein, Mittel, Groß, XL, XXL und XXXL.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

```

### Set Median Line Style

**Syntax:** obj << Set Median Line Style( pen style )

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Median Line Style( "Dotted" );

```

### Set Notched

**Syntax:** obj << Set Notched( state=0|1 )

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Notched( 1 );

```

### Set Shortest Half Bracket

**Syntax:** obj << Set Shortest Half Bracket( state = 0|1 )

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Shortest Half Bracket( 0 );

```

### Set Shortest Half Color

**Syntax:** obj << Set Shortest Half Color( color )

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Shortest Half Color( "Green" );

```

### Set Transparency

**Syntax:** obj << Set Transparency( number )

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Transparency( .3 );

```

### Shortest Half Bracket

**Syntax:** obj << Shortest Half Bracket( state = 0|1 )

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Shortest Half Bracket( 0 );

```

### Shortest Half Color

**Syntax:** obj << Shortest Half Color( color )

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Shortest Half Color( "Green" );

```

### Sib

**Syntax:** seg2 = obj << Sib

**Beschreibung:** Gibt das Geschwisterelement des Anzeigesegments zurück.

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Sib;

```

### Sib Append

**Syntax:** obj << Sib Append( seg2 )

**Beschreibung:** Fügt ein Anzeigesegment direkt nach dem Anzeigesegment ein.

```jsl

Names Default To Here( 1 );
Names Default To Here( 1 );
win = New Window( "World",
	gb = Graph(
		FrameSize( 800, 400 ),
		X Scale( -180, 180 ),
		Y Scale( -90, 90 ),
		<<Background Map( Images( "Simple Earth" ) )
	)
);
imgBox = win[framebox( 1 )];
mapSeg = imgBox << FindSeg( MapSeg( 1 ) );
mapSeg << Transparency( 0.5 );
Try(
	xAxis = gb[AxisBox( 2 )];
	xMin = (xAxis << get min);
	xMax = (xAxis << get max);
,
	xMin = 0;
	xMax = 100;
);
yAxis = gb[AxisBox( 1 )];
yMin = (yAxis << get min);
yMax = (yAxis << get max);
xval = Matrix( {xmin, xmax} );
yval = Matrix( {ymin, ymax} );
mapSeg << Sib Append( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Sib Prepend

**Syntax:** obj << Sib Prepend( seg2 )

**Beschreibung:** Fügt ein Anzeigesegment direkt vor dem Anzeigesegment ein.

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
Try(
	xAxis = g[AxisBox( 2 )];
	xMin = (xAxis << get min);
	xMax = (xAxis << get max);
,
	xMin = 0;
	xMax = 100;
);
yAxis = g[AxisBox( 1 )];
yMin = (yAxis << get min);
yMax = (yAxis << get max);
xval = Matrix( {xmin, xmax} );
yval = Matrix( {ymin, ymax} );
seg << Sib Prepend( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Transparency

**Syntax:** obj << Transparency( number )

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Transparency( .3 );

```

## Freigegebene Elementmeldungen

### Enabled

**Syntax:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Beschreibung:** Ein Objekt, das nicht aktiviert ist, reagiert nicht auf Tastatur- oder Mauseingabe. Diese Eigenschaft wird von untergeordneten Objekten geerbt, deshalb verursacht ein Containerobjekt, das deaktiviert ist, die Deaktivierung aller untergeordneten Objekte.

```jsl

Names Default To Here( 1 );
//This message applies to all display objects
New Window( "enabled",
	V List Box(
		check = Check Box(
			{"Use Password"},
			ptext << Enabled( check << Get( 1 ) );
			pvalue << Enabled( check << Get( 1 ) );
		),
		Lineup Box( N Col( 2 ),
			Text Box( "Username:" ),
			Text Edit Box( "", <<Set Width( 100 ) ),
			ptext = Text Box( "Password:", <<Enabled( 0 ) ),
			pvalue = Text Edit Box( "",
				<<Password Style( 1 ),
				<<Set Width( 20 ),
				<<Enabled( 0 )
			)
		)
	)
);

```

### Get Enabled

**Syntax:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Beschreibung:** Ein Objekt, das nicht aktiviert ist, reagiert nicht auf Tastatur- oder Mauseingabe. Diese Eigenschaft wird von untergeordneten Objekten geerbt, deshalb verursacht ein Containerobjekt, das deaktiviert ist, die Deaktivierung aller untergeordneten Objekte.

```jsl

Names Default To Here( 1 );
//This message applies to all display objects
New Window( "enabled",
	V List Box(
		check = Check Box(
			{"Use Password"},
			ptext << Enabled( check << Get( 1 ) );
			pvalue << Enabled( check << Get( 1 ) );
		),
		Lineup Box( N Col( 2 ),
			Text Box( "Username:" ),
			Text Edit Box( "", <<Set Width( 100 ) ),
			ptext = Text Box( "Password:", <<Enabled( 0 ) ),
			pvalue = Text Edit Box( "",
				<<Password Style( 1 ),
				<<Set Width( 20 ),
				<<Enabled( 0 )
			)
		)
	)
);

```

### Get Namespace

**Syntax:** obj << Get Namespace

**Beschreibung:** Gibt den zu diesem Anzeigeobjekt zugehörigen Namensraum zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display objects
x = 1;
w = New Window( "Test", b = Button Box( "Press me" ) );
b:x = 2;
ns = b << GetNamespace();
Show( ns:x, x );

```

### Get Properties

**Syntax:** obj << Get Properties

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Eigenschaften und deren Werte des Anzeigefelds enthält.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**Syntax:** obj << Get Property( "property" )

**Beschreibung:** Gibt die aktuelle Einstellung für die benannte property zurück.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**Syntax:** obj << Get Property List

**Beschreibung:** Gibt eine Liste von Eigenschaften des Anzeigefelds zurück.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Set Property

**Syntax:** obj << Set Property( "property", value )

**Beschreibung:** Legt den Wert für die benannte property für das Anzeigefeld fest.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

## Zugehörige Konstruktoren

### Box Plot Seg

**Syntax:** Box Plot Seg( <data>, <frequency>, <weight>, <vertical=0|1> )

**Beschreibung:** Gibt ein Anzeigesegment zurück, das einen auf den übergebenen X- und Y-Werten basierenden Box-Plot darstellt.

```jsl

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box(
		Frame Size( 40, 180 ),
		Y Scale( 0, 100 ),
		Box Plot Seg( [20, 30, 50, 90] )
	)
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));

```

