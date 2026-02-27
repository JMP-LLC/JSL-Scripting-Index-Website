# ShapeSeg



## Elementmeldungen

### Child

**Syntax:** seg2 = obj &lt;&lt; Child

**Beschreibung:** Gibt das erste untergeordnete Element des Anzeigesegments zurück.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Child; // not many segs support children

```

### Class Name

**Syntax:** classname = obj &lt;&lt; Class Name

**Beschreibung:** Gibt den Namen der Anzeigeklasse für das Anzeigefeld zurück.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Class Name;

```

### Clip Shape

**Syntax:** seg &lt;&lt; Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**Beschreibung:** Stellt die Geometrie in der gewünschten Form dar. Die Form kann mittels einer Formendatei oder einem Pfad angegeben werden. Optional kann mit einer Formendatei eine ID angegeben werden, um eine einzelne Form aus der Datei auszuwählen, ansonsten wird die Verbindung sämtlicher Formen als Beschneidungsbereich verwendet. Ein Beschneidungspfad kann mit einer Nx3-Matrix oder mit einer Textdarstellung angegeben werden. Eine Pfadmatrix hat drei Spalten für x, y und Flags für jeden Punkt im Pfad. Die Flag-Werte sind 0 für Steuern, 1 für Verschieben, 2 für Liniensegment, 3 für kubisches Bézier-Segment und sie sind negativ, wenn der Punkt den Pfad auch schließt. Der Pfadtext unterstützt die SVG-Syntax.

**JMP Version hinzugefügt:** 14

```jsl

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

### Color

**Syntax:** obj &lt;&lt; Color( color )

**Beschreibung:** Legt die Farbe für alle Formen fest.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Color( "Green" );

```

### Color Theme

**Syntax:** obj &lt;&lt; Color Theme

### Delete

**Syntax:** obj &lt;&lt; Delete

**Beschreibung:** Löscht das Anzeigesegment.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Delete;

```

### Density Gradient

**Syntax:** obj &lt;&lt; Density Gradient( "Nach Weiß ausblenden"|"Nach Grau ausblenden"|"Vollfarbig"="Nach Weiß ausblenden" )

**Beschreibung:** Legt das Farbverhalten von Dichtegradienten fest. Standardmäßig „Nach Weiß ausblenden“.

**JMP Version hinzugefügt:** 15

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Density Gradient( "Fade to Gray" );

```

### Fill Color

**Syntax:** obj &lt;&lt; Fill Color( color )

**Beschreibung:** Legt die Füllfarbe für alle Formen fest.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Fill Color( "Green" );

```

### Frame

**Syntax:** FrameBox = obj &lt;&lt; Frame

**Beschreibung:** Gibt das Rahmenfeld zurück, in dem sich das Anzeigesegment befindet.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Frame;

```

### Get Clip Shape

**Syntax:** obj &lt;&lt; Get Clip Shape

**Beschreibung:** Gibt die aktuelle Beschneidungsform aus

**JMP Version hinzugefügt:** 14

```jsl

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

### Get Color

**Syntax:** color = obj &lt;&lt; Get Color

**Beschreibung:** Gibt die Formenfarbe zurück.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Color;

```

### Get Density Gradient

**Syntax:** obj &lt;&lt; Get Density Gradient

**Beschreibung:** Ruft das Farbverhalten von Dichtegradienten ab.

**JMP Version hinzugefügt:** 15

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Density Gradient;

```

### Get Description

**Syntax:** description = obj &lt;&lt; Get Description

**Beschreibung:** Ruft die Beschreibung des Anzeigesegments ab.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << get description();

```

### Get Fill Color

**Syntax:** obj &lt;&lt; Get Fill Color

**Beschreibung:** Gibt die Füllfarbe der Formen zurück.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Fill Color;

```

### Get Fill Pattern

**Syntax:** obj &lt;&lt; Get Fill Pattern

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Fill Pattern;

```

### Get Gradient

**Syntax:** obj &lt;&lt; Get Gradient

**Beschreibung:** Ruft den Farbverlauf ab.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient;

```

### Get Gradient Color Theme

**Syntax:** obj &lt;&lt; Get Gradient Color Theme

**Beschreibung:** Ruft das Farbschema des Verlaufs ab.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**Syntax:** obj &lt;&lt; Get Gradient Discrete Colors

**Beschreibung:** Ruft ab, ob jede Stufe in einem Verlauf eine einzelne Farbe sein soll oder ob die Farben glatte Übergänge haben.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Discrete Colors;

```

### Get Gradient Fill

**Syntax:** obj &lt;&lt; Get Gradient Fill

**Beschreibung:** Ruft das Farbverhalten für Werte außerhalb des Bereichs der Verlaufsskala ab.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Fill;

```

### Get Gradient Label Count

**Syntax:** obj &lt;&lt; Get Gradient Label Count

**Beschreibung:** Ruft die Anzahl der Beschriftungen in der Legende eines Verlaufs ab.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Label Count;

```

### Get Gradient Label Levels

**Syntax:** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Label Levels

**Beschreibung:** Ruft den Satz von Werten für Beschriftungen in der Verlaufsskala ab.

**JMP Version hinzugefügt:** 18

#### Beispiel 1

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

#### Beispiel 2

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Legend Horizontal

**Syntax:** obj &lt;&lt; Get Gradient Legend Horizontal

**Beschreibung:** Ruft ab, ob die Legende des Verlaufs horizontal gezeichnet wird.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**Syntax:** obj &lt;&lt; Get Gradient Legend Label Format

**Beschreibung:** Ruft das Format der Beschriftungen der Verlaufslegende ab

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**Syntax:** obj &lt;&lt; Get Gradient Legend Label Width

**Beschreibung:** Ruft die maximale Zeichenlänge von Beschriftungen der Verlaufslegende ab.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**Syntax:** obj &lt;&lt; Get Gradient Legend Show Labels

**Beschreibung:** Ruft ab, ob die Stufenbeschriftungen in der Legende des Verlaufs angezeigt werden sollen.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**Syntax:** obj &lt;&lt; Get Gradient Level Count

**Beschreibung:** Ruft die Anzahl der Stufen in einem Verlauf ab.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**Syntax:** obj &lt;&lt; Get Gradient Lightness Range

**Beschreibung:** Ruft die minimale und maximale Helligkeit für Stufenfarben in einem Verlauf ab. Fehlende Werte weisen darauf hin, dass der ursprüngliche Wert des Farbschemas verwendet wird.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Lightness Range;

```

### Get Gradient Range

**Syntax:** obj &lt;&lt; Get Gradient Range

**Beschreibung:** Ruft den Bereich ab, über den nicht benutzerdefinierte Verlaufsskalen generiert werden.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Range;

```

### Get Gradient Reverse Color Order

**Syntax:** obj &lt;&lt; Get Gradient Reverse Color Order

**Beschreibung:** Ruft ab, ob die Reihenfolge der Farben in einem Verlauf umgekehrt ist.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**Syntax:** obj &lt;&lt; Get Gradient Reverse Label Order

**Beschreibung:** Ruft ab, ob die Reihenfolge der Beschriftungen in einem Verlauf umgekehrt ist.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Reverse Label Order;

```

### Get Gradient Scale

**Syntax:** obj &lt;&lt; Get Gradient Scale

**Beschreibung:** Ruft den Skalentyp des Verlaufs ab.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale;

```

### Get Gradient Scale Values

**Syntax:** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Scale Values

**Beschreibung:** Ruft den Satz von Werten für Beschriftungen in der Verlaufsskala ab.

**JMP Version hinzugefügt:** 18

#### Beispiel 1

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

#### Beispiel 2

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Show Missing

**Syntax:** obj &lt;&lt; Get Gradient Show Missing

**Beschreibung:** Ruft ab, wann der Legendeneintrag für fehlende Werte angezeigt wird.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**Syntax:** obj &lt;&lt; Get Gradient Transparency

**Beschreibung:** Ruft das Transparenzverhalten von Verläufen ab.

**JMP Version hinzugefügt:** 15

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Transparency;

```

### Get Line Style

**Syntax:** pen style = obj &lt;&lt; Get Line Style

**Beschreibung:** Gibt den Stil der Linien zurück.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Line Style;

```

### Get Line Width

**Syntax:** number = obj &lt;&lt; Get Line Width

**Beschreibung:** Gibt die Breite der Linien zurück.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Line Width;

```

### Get Transparency

**Syntax:** obj &lt;&lt; Get Transparency

**Beschreibung:** Gibt einen numerischen Wert zurück, der die Transparenz zwischen 0 und 1 darstellt.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Transparency;

```

### Gradient

**Syntax:** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; }obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**Beschreibung:** Legt den Farbverlauf fest.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**Syntax:** obj &lt;&lt; Gradient Color Theme

**Beschreibung:** Legt das Farbschema für den Verlauf fest.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Gradient Discrete Colors

**Syntax:** obj &lt;&lt; Gradient Discrete Colors

**Beschreibung:** Legt fest, ob jede Stufe in einem Verlauf eine einzelne Farbe sein soll oder ob die Farben glatte Übergänge haben sollen.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Gradient Fill

**Syntax:** obj &lt;&lt; Gradient Fill( "Zwischen"|"Darüber"|"Darunter"|"Darüber Darunter"="Darüber Darunter" )

**Beschreibung:** Legt das Farbverhalten für Werte außerhalb des Bereichs der Verlaufsskala fest. Standardmäßig „Darüber Darunter“.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Gradient Label Count

**Syntax:** obj &lt;&lt; Gradient Label Count

**Beschreibung:** Legt die Anzahl der Beschriftungen in der Legende eines Verlaufs fest. Diese Anzahl ist um eins kleiner als die Anzahl der Konturstufen.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Label Count( 8 );

```

### Gradient Label Levels

**Syntax:** obj &lt;&lt; Gradient Label Levels( [value1,value1, ... value N] )

**Beschreibung:** Legt einen benutzerdefinierten Satz von Werten für die Verwendung in der Verlaufsskala fest.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Legend Horizontal

**Syntax:** obj &lt;&lt; Gradient Legend Horizontal

**Beschreibung:** Legt fest, ob die Legende des Verlaufs horizontal gezeichnet werden soll.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**Syntax:** obj &lt;&lt; Gradient Legend Label Format

**Beschreibung:** Legt das Format für die Beschriftungen der Verlaufslegende fest

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**Syntax:** obj &lt;&lt; Gradient Legend Label Width

**Beschreibung:** Legt die maximale Zeichenlänge von Beschriftungen der Verlaufslegende fest.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**Syntax:** obj &lt;&lt; Gradient Legend Show Labels

**Beschreibung:** Legt fest, ob die Stufenbeschriftungen in der Legende des Verlaufs angezeigt werden sollen.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**Syntax:** obj &lt;&lt; Gradient Level Count

**Beschreibung:** Legt die Anzahl der Stufen in einem Verlauf fest. Diese Anzahl ist um eins kleiner als die Anzahl der Beschriftungen.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**Syntax:** obj &lt;&lt; Gradient Lightness Range

**Beschreibung:** Legt die minimale und maximale Helligkeit für Stufenfarben in einem Verlauf fest. Die Farben werden skaliert, um den Bereich abzudecken. Ein fehlender Wert wird behandelt wie keine Änderung.

**JMP Version hinzugefügt:** 18

#### Beispiel 1

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

#### Beispiel 2

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

#### Beispiel 3

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Gradient Range

**Syntax:** obj &lt;&lt; Gradient Range( "Standard"|"Exakter Datenbereich"|"Mittlere 90 %"="Standard" )

**Beschreibung:** Legt den Bereich fest, über den nicht benutzerspezifische Verlaufsskalen generiert werden. Standardmäßig „Standard“.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Gradient Reverse Color Order

**Syntax:** obj &lt;&lt; Gradient Reverse Color Order

**Beschreibung:** Kehrt die Reihenfolge der Farben in einem Verlauf um.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**Syntax:** obj &lt;&lt; Gradient Reverse Label Order

**Beschreibung:** Kehrt die Reihenfolge der Beschriftungen in einem Verlauf um.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Reverse Label Order( 1 );

```

### Gradient Scale

**Syntax:** obj &lt;&lt; Gradient Scale( "Linear"|"Quantil"|"Standardabweichung"|"Log"|"Log-Offset"|"Benutzerdefiniert"="Linear" )

**Beschreibung:** Legt den Skalentyp des Verlaufs fest. Standardmäßig „Linear“.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Gradient Scale Values

**Syntax:** obj &lt;&lt; Gradient Scale Values( [value1,value1, ... value N] )

**Beschreibung:** Legt einen benutzerdefinierten Satz von Werten für die Verwendung in der Verlaufsskala fest.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Show Missing

**Syntax:** obj &lt;&lt; Gradient Show Missing( "Automatisch"|"Ein"|"Aus"="Automatisch" )

**Beschreibung:** Legt fest, wann der Legendeneintrag für fehlende Werte angezeigt werden soll. Standardmäßig „Automatisch“.

**JMP Version hinzugefügt:** 18

```jsl

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

**Syntax:** obj &lt;&lt; Gradient Transparency( "Keine"|"Linear"="Linear" )

**Beschreibung:** Legt das Transparenzverhalten von Verläufen fest. Standardmäßig „Linear“.

**JMP Version hinzugefügt:** 15

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Gradient Transparency( "None" );

```

### Line Style

**Syntax:** obj &lt;&lt; Line Style( pen style )

**Beschreibung:** Legt den Stil der Linien fest. Mögliche Optionen sind Durchgezogen, Gepunktet, Gestrichelt, Strich-Punkt oder Strich-Punkt-Punkt.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Line Style( "Dotted" );

```

### Line Width

**Syntax:** obj &lt;&lt; Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Sonstige…" )

**Beschreibung:** Legt die Breite der Linien fest.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Line Width( 3 );

```

### Parent

**Syntax:** seg2 = obj &lt;&lt; Parent

**Beschreibung:** Gibt das übergeordnete Element des Anzeigesegments zurück.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Parent;

```

### Revert

**Syntax:** obj &lt;&lt; Revert

**Beschreibung:** Versetzt das Segment wieder in seinen ursprünglichen Zustand.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
Wait( 1 );
seg << Set Color( "Red" );
Wait( 1 );
seg << Revert;

```

### Set Color

**Syntax:** obj &lt;&lt; Set Color( color )

**Beschreibung:** Legt die Farbe für alle Formen fest.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Color( "Green" );

```

### Set Description

**Syntax:** obj &lt;&lt; Set Description( description )

**Beschreibung:** Legt die Beschreibung des Anzeigesegments fest.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << set description( "my seg" );

```

### Set Fill Color

**Syntax:** obj &lt;&lt; Set Fill Color( color )

**Beschreibung:** Legt die Füllfarbe für alle Formen fest.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Fill Color( "Green" );

```

### Set Fill Pattern

**Syntax:** obj &lt;&lt; Set Fill Pattern

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Fill Color( "Blue" );
seg << Set Fill Pattern( "h wave medium" );

```

### Set Gradient

**Syntax:** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; }obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**Beschreibung:** Legt den Farbverlauf fest.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**Syntax:** obj &lt;&lt; Set Gradient Color Theme

**Beschreibung:** Legt das Farbschema für den Verlauf fest.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**Syntax:** obj &lt;&lt; Set Gradient Custom Scale

**Beschreibung:** Legt für den Verlauf fest, dass eine Liste von Werten für eine benutzerdefinierte Skala verwendet wird.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Custom Scale( {0.0, 5.0, 10.0, 20.0} );

```

### Set Gradient Discrete Colors

**Syntax:** obj &lt;&lt; Set Gradient Discrete Colors

**Beschreibung:** Legt fest, ob jede Stufe in einem Verlauf eine einzelne Farbe sein soll oder ob die Farben glatte Übergänge haben sollen.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Set Gradient Fill

**Syntax:** obj &lt;&lt; Set Gradient Fill( "Zwischen"|"Darüber"|"Darunter"|"Darüber Darunter"="Darüber Darunter" )

**Beschreibung:** Legt das Farbverhalten für Werte außerhalb des Bereichs der Verlaufsskala fest. Standardmäßig „Darüber Darunter“.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Set Gradient Label Count

**Syntax:** obj &lt;&lt; Set Gradient Label Count

**Beschreibung:** Legt die Anzahl der Beschriftungen in der Legende eines Verlaufs fest. Diese Anzahl ist um eins kleiner als die Anzahl der Konturstufen.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Label Count( 8 );

```

### Set Gradient Label Levels

**Syntax:** obj &lt;&lt; Set Gradient Label Levels( [value1,value1, ... value N] )

**Beschreibung:** Legt einen benutzerdefinierten Satz von Werten für die Verwendung in der Verlaufsskala fest.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Legend Horizontal

**Syntax:** obj &lt;&lt; Set Gradient Legend Horizontal

**Beschreibung:** Legt fest, ob die Legende des Verlaufs horizontal gezeichnet werden soll.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**Syntax:** obj &lt;&lt; Set Gradient Legend Label Format

**Beschreibung:** Legt das Format für die Beschriftungen der Verlaufslegende fest

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**Syntax:** obj &lt;&lt; Set Gradient Legend Label Width

**Beschreibung:** Legt die maximale Zeichenlänge von Beschriftungen der Verlaufslegende fest.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**Syntax:** obj &lt;&lt; Set Gradient Legend Show Labels

**Beschreibung:** Legt fest, ob die Stufenbeschriftungen in der Legende des Verlaufs angezeigt werden sollen.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**Syntax:** obj &lt;&lt; Set Gradient Level Count

**Beschreibung:** Legt die Anzahl der Stufen in einem Verlauf fest. Diese Anzahl ist um eins kleiner als die Anzahl der Beschriftungen.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**Syntax:** obj &lt;&lt; Set Gradient Lightness Range

**Beschreibung:** Legt die minimale und maximale Helligkeit für Stufenfarben in einem Verlauf fest. Die Farben werden skaliert, um den Bereich abzudecken. Ein fehlender Wert wird behandelt wie keine Änderung.

**JMP Version hinzugefügt:** 18

#### Beispiel 1

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

#### Beispiel 2

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

#### Beispiel 3

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Set Gradient Range

**Syntax:** obj &lt;&lt; Set Gradient Range( "Standard"|"Exakter Datenbereich"|"Mittlere 90 %"="Standard" )

**Beschreibung:** Legt den Bereich fest, über den nicht benutzerspezifische Verlaufsskalen generiert werden. Standardmäßig „Standard“.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Set Gradient Reverse Color Order

**Syntax:** obj &lt;&lt; Set Gradient Reverse Color Order

**Beschreibung:** Kehrt die Reihenfolge der Farben in einem Verlauf um.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**Syntax:** obj &lt;&lt; Set Gradient Reverse Label Order

**Beschreibung:** Kehrt die Reihenfolge der Beschriftungen in einem Verlauf um.

**JMP Version hinzugefügt:** 18

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Reverse Label Order( 1 );

```

### Set Gradient Scale

**Syntax:** obj &lt;&lt; Set Gradient Scale( "Linear"|"Quantil"|"Standardabweichung"|"Log"|"Log-Offset"|"Benutzerdefiniert"="Linear" )

**Beschreibung:** Legt den Skalentyp des Verlaufs fest. Standardmäßig „Linear“.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Set Gradient Scale Values

**Syntax:** obj &lt;&lt; Set Gradient Scale Values( [value1,value1, ... value N] )

**Beschreibung:** Legt einen benutzerdefinierten Satz von Werten für die Verwendung in der Verlaufsskala fest.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Show Missing

**Syntax:** obj &lt;&lt; Set Gradient Show Missing( "Automatisch"|"Ein"|"Aus"="Automatisch" )

**Beschreibung:** Legt fest, wann der Legendeneintrag für fehlende Werte angezeigt werden soll. Standardmäßig „Automatisch“.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :city ), Y( :POP ), Color( :NO ) ),
	Elements( Bar( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Bar Seg( 1 ) );
seg << Set Gradient Show Missing( "Off" );

```

### Set Label Offset

**Syntax:** obj &lt;&lt; Set Label Offset {Index, Longitude, Latitude}, ...

**Beschreibung:** Positioniert Zeilenbeschriftungen entsprechend den angegebenen Koordinaten.

**JMP Version hinzugefügt:** 16

### Set Line Style

**Syntax:** obj &lt;&lt; Set Line Style( pen style )

**Beschreibung:** Legt den Stil der Linien fest. Mögliche Optionen sind Durchgezogen, Gepunktet, Gestrichelt, Strich-Punkt oder Strich-Punkt-Punkt.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Line Style( "Dotted" );

```

### Set Line Width

**Syntax:** obj &lt;&lt; Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Sonstige…" )

**Beschreibung:** Legt die Breite der Linien fest.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Line Width( 3 );

```

### Set Transparency

**Syntax:** obj &lt;&lt; Set Transparency( number )

**Beschreibung:** Legt die Formentransparenz fest. Das Argument muss ein numerischer Wert zwischen 0 und 1 sein.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Transparency( .3 );

```

### Sib

**Syntax:** seg2 = obj &lt;&lt; Sib

**Beschreibung:** Gibt das Geschwisterelement des Anzeigesegments zurück.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Sib;

```

### Sib Append

**Syntax:** obj &lt;&lt; Sib Append( seg2 )

**Beschreibung:** Fügt ein Anzeigesegment direkt nach dem Anzeigesegment ein.

```jsl

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

**Syntax:** obj &lt;&lt; Sib Prepend( seg2 )

**Beschreibung:** Fügt ein Anzeigesegment direkt vor dem Anzeigesegment ein.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
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

**Syntax:** obj &lt;&lt; Transparency( number )

**Beschreibung:** Legt die Formentransparenz fest. Das Argument muss ein numerischer Wert zwischen 0 und 1 sein.

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Transparency( .3 );

```

## Freigegebene Elementmeldungen

### Enabled

**Syntax:** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

**Beschreibung:** Ein Objekt, das nicht aktiviert ist, reagiert nicht auf Tastatur- oder Mauseingabe. Diese Eigenschaft wird von untergeordneten Objekten geerbt, deshalb verursacht ein Containerobjekt, das deaktiviert ist, die Deaktivierung aller untergeordneten Objekte.

```jsl

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

**Syntax:** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

**Beschreibung:** Ein Objekt, das nicht aktiviert ist, reagiert nicht auf Tastatur- oder Mauseingabe. Diese Eigenschaft wird von untergeordneten Objekten geerbt, deshalb verursacht ein Containerobjekt, das deaktiviert ist, die Deaktivierung aller untergeordneten Objekte.

```jsl

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

**Syntax:** obj &lt;&lt; Get Namespace

**Beschreibung:** Gibt den zu diesem Anzeigeobjekt zugehörigen Namensraum zurück.

```jsl

//This message applies to all display objects
x = 1;
w = New Window( "Test", b = Button Box( "Press me" ) );
b:x = 2;
ns = b << GetNamespace();
Show( ns:x, x );

```

### Get Properties

**Syntax:** obj &lt;&lt; Get Properties

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Eigenschaften und deren Werte des Anzeigefelds enthält.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**Syntax:** obj &lt;&lt; Get Property( "property" )

**Beschreibung:** Gibt die aktuelle Einstellung für die benannte property zurück.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**Syntax:** obj &lt;&lt; Get Property List

**Beschreibung:** Gibt eine Liste von Eigenschaften des Anzeigefelds zurück.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Set Property

**Syntax:** obj &lt;&lt; Set Property( "property", value )

**Beschreibung:** Legt den Wert für die benannte property für das Anzeigefeld fest.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

## Zugehörige Konstruktoren

### Shape Seg

**Syntax:** ss = Shape Seg( {Path(&lt;path&gt;), ...}, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt; )

**Beschreibung:** Gibt ein Anzeigesegment mit einer Sammlung Formen zurück. Jede Form zeichnet Linien entlang des angegebenen Pfads, wenn „Füllen“ gleich 0 ist, oder färbt das Innere des angegebenen Pfads, wenn „Füllen“ ungleich 0 ist. Der Pfad kann mit einer Nx3-Matrix oder mit einer Textdarstellung angegeben werden. Eine Pfadmatrix hat drei Spalten für x, y und Flags für jeden Punkt im Pfad. Die Flag-Werte sind 0 für Steuerpunkt, 1 für Verschieben, 2 für Liniensegment, 3 für kubisches Bézier-Segment und sie sind negativ, wenn der Punkt den Pfad auch schließt. Der Pfadtext unterstützt die SVG-Syntax.

#### Beispiel 1

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));

```

#### Beispiel 2

```jsl

New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )},
			Row States( {Selected State( 1 ), Color State( "red" )} )
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));

```

