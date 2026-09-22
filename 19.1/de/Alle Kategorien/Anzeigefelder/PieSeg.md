# PieSeg



## Elementmeldungen

### Child

**Syntax:** seg2 = obj &lt;&lt; Child

**Beschreibung:** Gibt das erste untergeordnete Element des Anzeigesegments zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Child; // not many segs support children

```

### Class Name

**Syntax:** classname = obj &lt;&lt; Class Name

**Beschreibung:** Gibt den Namen der Anzeigeklasse für das Anzeigefeld zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Class Name;

```

### Clip Shape

**Syntax:** seg &lt;&lt; Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**Beschreibung:** Stellt die Geometrie in der gewünschten Form dar. Die Form kann mittels einer Formendatei oder einem Pfad angegeben werden. Optional kann mit einer Formendatei eine ID angegeben werden, um eine einzelne Form aus der Datei auszuwählen, ansonsten wird die Verbindung sämtlicher Formen als Beschneidungsbereich verwendet. Ein Beschneidungspfad kann mit einer Nx3-Matrix oder mit einer Textdarstellung angegeben werden. Eine Pfadmatrix hat drei Spalten für x, y und Flags für jeden Punkt im Pfad. Die Flag-Werte sind 0 für Steuern, 1 für Verschieben, 2 für Liniensegment, 3 für kubisches Bézier-Segment und sie sind negativ, wenn der Punkt den Pfad auch schließt. Der Pfadtext unterstützt die SVG-Syntax.

**JMP Version hinzugefügt:** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Size( 653, 396 ),	Show Control Panel( 0 ),	Variables( X( :Longitude ), Y( :Latitude ) ),	Elements( Contour( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),			Reference Line Order( 3 )}		)	));cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );Wait( 2 );cs << Clip Shape( Boundaries( "US States" ) );

```

### Color Theme

**Syntax:** obj &lt;&lt; Color Theme

### Delete

**Syntax:** obj &lt;&lt; Delete

**Beschreibung:** Löscht das Anzeigesegment.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Delete;

```

### Density Gradient

**Syntax:** obj &lt;&lt; Density Gradient( "Nach Weiß ausblenden"|"Nach Grau ausblenden"|"Vollfarbig"="Nach Weiß ausblenden" )

**Beschreibung:** Legt das Farbverhalten von Dichtegradienten fest. Standardmäßig „Nach Weiß ausblenden“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Density Gradient( "Fade to Gray" );

```

### Error Bar Cap

**Syntax:** obj &lt;&lt; Error Bar Cap( "Keine"|"Sehr klein"|"Klein"|"Mittel"|"Groß" )

**Beschreibung:** Gibt an, welche Art von Abschluss für Fehlerbalken verwendet werden soll.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Set Error Bar Cap( "Large" );

```

### Error Bar Cap Shape

**Syntax:** obj &lt;&lt; Error Bar Cap Shape( begin, end )

**Beschreibung:** Gibt die Form des Abschlusses an, die in Fehlerbalken angezeigt werden soll. Ein einzelnes Argument legt die Form für beide Enden des Balkens fest, oder es können separate Argumente für Anfang und Ende des Balkens angegeben werden. Die Standardform ist "Line". Die Form "Arrow" zeichnet einen nach außen zeigenden Pfeil und "None" lässt den Abschluss aus.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Set Error Bar Cap Shape( "Line", "Arrow" );

```

### Fill Color

**Syntax:** obj &lt;&lt; Fill Color( color )

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Fill Color( "Green" );

```

### First Value

**Syntax:** obj &lt;&lt; First Value( state=0|1 )

**JMP Version hinzugefügt:** 16

### Frame

**Syntax:** FrameBox = obj &lt;&lt; Frame

**Beschreibung:** Gibt das Rahmenfeld zurück, in dem sich das Anzeigesegment befindet.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Frame;

```

### Get Clip Shape

**Syntax:** obj &lt;&lt; Get Clip Shape

**Beschreibung:** Gibt die aktuelle Beschneidungsform aus

**JMP Version hinzugefügt:** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Size( 653, 396 ),	Show Control Panel( 0 ),	Variables( X( :Longitude ), Y( :Latitude ) ),	Elements( Contour( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),			Reference Line Order( 3 )}		)	));cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );cs << Clip Shape( Boundaries( "US States" ) );Wait( 2 );cs << Get Clip Shape();

```

### Get Density Gradient

**Syntax:** obj &lt;&lt; Get Density Gradient

**Beschreibung:** Ruft das Farbverhalten von Dichtegradienten ab.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Density Gradient;

```

### Get Description

**Syntax:** description = obj &lt;&lt; Get Description

**Beschreibung:** Ruft die Beschreibung des Anzeigesegments ab.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << get description();

```

### Get Error Bar Cap

**Syntax:** obj &lt;&lt; Get Error Bar Cap

**Beschreibung:** Gibt die aktuelle Abschlussart der Fehlerbalken zurück.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Get Error Bar Cap();

```

### Get Error Bar Cap Shape

**Syntax:** { begin, end } = obj &lt;&lt; Get Error Bar Cap Shape

**Beschreibung:** Gibt die Form des Abschlusses bei Fehlerbalken zurück.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Get Error Bar Cap Shape();

```

### Get Fill Color

**Syntax:** color = obj &lt;&lt; Get Fill Color

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Fill Color;

```

### Get Fill Pattern

**Syntax:** obj &lt;&lt; Get Fill Pattern

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Fill Pattern;

```

### Get Gradient

**Syntax:** obj &lt;&lt; Get Gradient

**Beschreibung:** Ruft den Farbverlauf ab.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Gradient;

```

### Get Gradient Color Theme

**Syntax:** obj &lt;&lt; Get Gradient Color Theme

**Beschreibung:** Ruft das Farbschema des Verlaufs ab.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**Syntax:** obj &lt;&lt; Get Gradient Discrete Colors

**Beschreibung:** Ruft ab, ob jede Stufe in einem Verlauf eine einzelne Farbe sein soll oder ob die Farben glatte Übergänge haben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Gradient Discrete Colors;

```

### Get Gradient Fill

**Syntax:** obj &lt;&lt; Get Gradient Fill

**Beschreibung:** Ruft das Farbverhalten für Werte außerhalb des Bereichs der Verlaufsskala ab.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Fill;

```

### Get Gradient Label Count

**Syntax:** obj &lt;&lt; Get Gradient Label Count

**Beschreibung:** Ruft die Anzahl der Beschriftungen in der Legende eines Verlaufs ab.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Gradient Label Count;

```

### Get Gradient Label Levels

**Syntax:** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Label Levels

**Beschreibung:** Ruft den Satz von Werten für Beschriftungen in der Verlaufsskala ab.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Scale Values;

```

**Beispiel 2**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );seg << Get Gradient Scale Values;

```

### Get Gradient Legend Horizontal

**Syntax:** obj &lt;&lt; Get Gradient Legend Horizontal

**Beschreibung:** Ruft ab, ob die Legende des Verlaufs horizontal gezeichnet wird.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**Syntax:** obj &lt;&lt; Get Gradient Legend Label Format

**Beschreibung:** Ruft das Format der Beschriftungen der Verlaufslegende ab

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**Syntax:** obj &lt;&lt; Get Gradient Legend Label Width

**Beschreibung:** Ruft die maximale Zeichenlänge von Beschriftungen der Verlaufslegende ab.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**Syntax:** obj &lt;&lt; Get Gradient Legend Show Labels

**Beschreibung:** Ruft ab, ob die Stufenbeschriftungen in der Legende des Verlaufs angezeigt werden sollen.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**Syntax:** obj &lt;&lt; Get Gradient Level Count

**Beschreibung:** Ruft die Anzahl der Stufen in einem Verlauf ab.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**Syntax:** obj &lt;&lt; Get Gradient Lightness Range

**Beschreibung:** Ruft die minimale und maximale Helligkeit für Stufenfarben in einem Verlauf ab. Fehlende Werte weisen darauf hin, dass der ursprüngliche Wert des Farbschemas verwendet wird.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Gradient Lightness Range;

```

### Get Gradient Range

**Syntax:** obj &lt;&lt; Get Gradient Range

**Beschreibung:** Ruft den Bereich ab, über den nicht benutzerdefinierte Verlaufsskalen generiert werden.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Range;

```

### Get Gradient Reverse Color Order

**Syntax:** obj &lt;&lt; Get Gradient Reverse Color Order

**Beschreibung:** Ruft ab, ob die Reihenfolge der Farben in einem Verlauf umgekehrt ist.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**Syntax:** obj &lt;&lt; Get Gradient Reverse Label Order

**Beschreibung:** Ruft ab, ob die Reihenfolge der Beschriftungen in einem Verlauf umgekehrt ist.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Gradient Reverse Label Order;

```

### Get Gradient Scale

**Syntax:** obj &lt;&lt; Get Gradient Scale

**Beschreibung:** Ruft den Skalentyp des Verlaufs ab.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Scale;

```

### Get Gradient Scale Values

**Syntax:** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Scale Values

**Beschreibung:** Ruft den Satz von Werten für Beschriftungen in der Verlaufsskala ab.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Scale Values;

```

**Beispiel 2**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );seg << Get Gradient Scale Values;

```

### Get Gradient Show Missing

**Syntax:** obj &lt;&lt; Get Gradient Show Missing

**Beschreibung:** Ruft ab, wann der Legendeneintrag für fehlende Werte angezeigt wird.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**Syntax:** obj &lt;&lt; Get Gradient Transparency

**Beschreibung:** Ruft das Transparenzverhalten von Verläufen ab.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Gradient Transparency;

```

### Get Interval Draw Directions

**Syntax:** obj &lt;&lt; Get Interval Draw Directions

**Beschreibung:** Ruft die Richtungen ab, in die Intervalle gezeichnet werden sollen.

**JMP Version hinzugefügt:** 17

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements(		Points(			X,			Y,			Legend( 3 ),			Summary Statistic( "Mean" ),			Error Interval( "Standard Deviation" )		)	),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Reference Line Order( 3 ), DispatchSeg(				BarSeg( 1 ),				{Set Interval Draw Directions( "Upper" )}			)}		)	));frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Get Interval Draw Directions;

```

### Get Line Color

**Syntax:** color = obj &lt;&lt; Get Line Color

**Beschreibung:** Gibt die Farbe der Linien zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Line Color;

```

### Get Line Style

**Syntax:** pen style = obj &lt;&lt; Get Line Style

**Beschreibung:** Gibt den Stil der Linien zurück.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Line Style;

```

### Get Line Width

**Syntax:** number = obj &lt;&lt; Get Line Width

**Beschreibung:** Gibt die Breite der Linien zurück.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Line Width;

```

### Get Marker

**Syntax:** marker = obj &lt;&lt; Get Marker

**Beschreibung:** Gibt den Symbolstil zurück.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Marker;

```

### Get Marker Size

**Syntax:** size = obj &lt;&lt; Get Marker Size

**Beschreibung:** Gibt die Größe der Symbole zurück.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Marker Size;

```

### Get Origin

**Syntax:** obj &lt;&lt; Get Origin

**Beschreibung:** Ruft den Ursprung der Torte ab.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );nw = New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		Pie Seg( {75, 50}, .25, sumWt )	));frame = nw[framebox( 1 )];seg = frame << Find Seg( "Pie Seg" );Wait( 2 );{ox, oy} = seg << getOrigin;

```

### Get Radius

**Syntax:** obj &lt;&lt; Get Radius

**Beschreibung:** Ruft den Radius der Torte ab.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );nw = New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		Pie Seg( {75, 50}, .25, sumWt )	));frame = nw[framebox( 1 )];seg = frame << Find Seg( "Pie Seg" );Wait( 2 );rad = seg << getRadius;

```

### Get Style

**Syntax:** obj &lt;&lt; Get Style

**Beschreibung:** Ruft den Stil der Torte ab, entweder Torte, Ring oder Coxcomb.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );nw = New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		Pie Seg( {75, 50}, .25, sumWt )	));frame = nw[framebox( 1 )];seg = frame << Find Seg( "Pie Seg" );Wait( 2 );style = seg << getStyle;

```

### Get Transparency

**Syntax:** obj &lt;&lt; Get Transparency

**Beschreibung:** Gibt einen numerischen Wert zurück, der die Transparenz zwischen 0 (durchsichtig) und 1 (undurchsichtig) darstellt.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Get Transparency;

```

### Gradient

**Syntax:** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; } obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**Beschreibung:** Legt den Farbverlauf fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**Syntax:** obj &lt;&lt; Gradient Color Theme

**Beschreibung:** Legt das Farbschema für den Verlauf fest.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Color Theme( "Viridis" );

```

### Gradient Discrete Colors

**Syntax:** obj &lt;&lt; Gradient Discrete Colors

**Beschreibung:** Legt fest, ob jede Stufe in einem Verlauf eine einzelne Farbe sein soll oder ob die Farben glatte Übergänge haben sollen.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Marker Seg( 1 ) );seg << Set Gradient Discrete Colors( 1 );

```

### Gradient Fill

**Syntax:** obj &lt;&lt; Gradient Fill( "Zwischen"|"Darüber"|"Darunter"|"Darüber Darunter"="Darüber Darunter" )

**Beschreibung:** Legt das Farbverhalten für Werte außerhalb des Bereichs der Verlaufsskala fest. Standardmäßig „Darüber Darunter“.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Middle 90%" );seg << Set Gradient Fill( "Between" );

```

### Gradient Label Count

**Syntax:** obj &lt;&lt; Gradient Label Count

**Beschreibung:** Legt die Anzahl der Beschriftungen in der Legende eines Verlaufs fest. Diese Anzahl ist um eins kleiner als die Anzahl der Konturstufen.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Label Count( 8 );

```

### Gradient Label Levels

**Syntax:** obj &lt;&lt; Gradient Label Levels( [value1,value1, ... value N] )

**Beschreibung:** Legt einen benutzerdefinierten Satz von Werten für die Verwendung in der Verlaufsskala fest.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Legend Horizontal

**Syntax:** obj &lt;&lt; Gradient Legend Horizontal

**Beschreibung:** Legt fest, ob die Legende des Verlaufs horizontal gezeichnet werden soll.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**Syntax:** obj &lt;&lt; Gradient Legend Label Format

**Beschreibung:** Legt das Format für die Beschriftungen der Verlaufslegende fest

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**Syntax:** obj &lt;&lt; Gradient Legend Label Width

**Beschreibung:** Legt die maximale Zeichenlänge von Beschriftungen der Verlaufslegende fest.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**Syntax:** obj &lt;&lt; Gradient Legend Show Labels

**Beschreibung:** Legt fest, ob die Stufenbeschriftungen in der Legende des Verlaufs angezeigt werden sollen.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**Syntax:** obj &lt;&lt; Gradient Level Count

**Beschreibung:** Legt die Anzahl der Stufen in einem Verlauf fest. Diese Anzahl ist um eins kleiner als die Anzahl der Beschriftungen.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**Syntax:** obj &lt;&lt; Gradient Lightness Range

**Beschreibung:** Legt die minimale und maximale Helligkeit für Stufenfarben in einem Verlauf fest. Die Farben werden skaliert, um den Bereich abzudecken. Ein fehlender Wert wird behandelt wie keine Änderung.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Lightness Range( ., 0.75 );

```

### Gradient Range

**Syntax:** obj &lt;&lt; Gradient Range( "Standard"|"Exakter Datenbereich"|"Mittlere 90 %"="Standard" )

**Beschreibung:** Legt den Bereich fest, über den nicht benutzerspezifische Verlaufsskalen generiert werden. Standardmäßig „Standard“.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Exact Data Range" );

```

### Gradient Reverse Color Order

**Syntax:** obj &lt;&lt; Gradient Reverse Color Order

**Beschreibung:** Kehrt die Reihenfolge der Farben in einem Verlauf um.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**Syntax:** obj &lt;&lt; Gradient Reverse Label Order

**Beschreibung:** Kehrt die Reihenfolge der Beschriftungen in einem Verlauf um.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Reverse Label Order( 1 );

```

### Gradient Scale

**Syntax:** obj &lt;&lt; Gradient Scale( "Linear"|"Quantil"|"Standardabweichung"|"Log"|"Log-Offset"|"Benutzerdefiniert"="Linear" )

**Beschreibung:** Legt den Skalentyp des Verlaufs fest. Standardmäßig „Linear“.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale( "Quantile" );

```

### Gradient Scale Values

**Syntax:** obj &lt;&lt; Gradient Scale Values( [value1,value1, ... value N] )

**Beschreibung:** Legt einen benutzerdefinierten Satz von Werten für die Verwendung in der Verlaufsskala fest.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Show Missing

**Syntax:** obj &lt;&lt; Gradient Show Missing( "Automatisch"|"Ein"|"Aus"="Automatisch" )

**Beschreibung:** Legt fest, wann der Legendeneintrag für fehlende Werte angezeigt werden soll. Standardmäßig „Automatisch“.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );gb = Graph Builder(	Variables( X( :city ), Y( :POP ), Color( :NO ) ),	Elements( Bar( X, Y ) ));frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Bar Seg( 1 ) );seg << Set Gradient Show Missing( "Off" );

```

### Gradient Transparency

**Syntax:** obj &lt;&lt; Gradient Transparency( "Keine"|"Linear"="Linear" )

**Beschreibung:** Legt das Transparenzverhalten von Verläufen fest. Standardmäßig „Linear“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Gradient Transparency( "None" );

```

### Last Value

**Syntax:** obj &lt;&lt; Last Value( state=0|1 )

**JMP Version hinzugefügt:** 16

### Line Color

**Syntax:** obj &lt;&lt; Line Color( color )

**Beschreibung:** Legt die Farbe für alle Linien im Anzeigesegment fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Line Color( "Green" );

```

### Line Style

**Syntax:** obj &lt;&lt; Line Style( pen style )

**Beschreibung:** Legt den Stil der Linien fest. Mögliche Optionen sind Durchgezogen, Gepunktet, Gestrichelt, Strich-Punkt oder Strich-Punkt-Punkt.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Line Style( "Dotted" );

```

### Line Width

**Syntax:** obj &lt;&lt; Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Sonstige…" )

**Beschreibung:** Legt die Breite der Linien fest.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Line Width( 3 );

```

### Marker

**Syntax:** obj &lt;&lt; Marker( marker )

**Beschreibung:** Legt den Symbolstil für alle Symbole fest.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Marker( "Square" );

```

### Marker Size

**Syntax:** obj &lt;&lt; Marker Size( size )

**Beschreibung:** Legt die Größe der Symbole fest. Mögliche Größen sind Punkt, Klein, Mittel, Groß, XL, XXL und XXXL.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Marker( "Square" );seg << Set Marker Size( "XL" );

```

### Max Value

**Syntax:** obj &lt;&lt; Max Value( state=0|1 )

**JMP Version hinzugefügt:** 16

### Min Value

**Syntax:** obj &lt;&lt; Min Value( state=0|1 )

**JMP Version hinzugefügt:** 16

### Name

**Syntax:** obj &lt;&lt; Name( state=0|1 )

**JMP Version hinzugefügt:** 16

### Origin

**Syntax:** obj &lt;&lt; Origin( XUrsprung, YUrsprung )

**Beschreibung:** Ursprung der Torte festlegen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );nw = New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		Pie Seg( {75, 50}, .25, sumWt )	));frame = nw[framebox( 1 )];seg = frame << Find Seg( "Pie Seg" );Wait( 2 );seg << origin( 35, 25 );

```

### Parent

**Syntax:** seg2 = obj &lt;&lt; Parent

**Beschreibung:** Gibt das übergeordnete Element des Anzeigesegments zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Parent;

```

### Radius

**Syntax:** obj &lt;&lt; Radius( Radius )

**Beschreibung:** Radius der Torte festlegen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );nw = New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		Pie Seg( {75, 50}, .25, sumWt )	));frame = nw[framebox( 1 )];seg = frame << Find Seg( "Pie Seg" );Wait( 2 );seg << radius( 0.5 );

```

### Set Description

**Syntax:** obj &lt;&lt; Set Description( description )

**Beschreibung:** Legt die Beschreibung des Anzeigesegments fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << set description( "my seg" );

```

### Set Error Bar Cap

**Syntax:** obj &lt;&lt; Set Error Bar Cap( "Keine"|"Sehr klein"|"Klein"|"Mittel"|"Groß" )

**Beschreibung:** Gibt an, welche Art von Abschluss für Fehlerbalken verwendet werden soll.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Set Error Bar Cap( "Large" );

```

### Set Error Bar Cap Shape

**Syntax:** obj &lt;&lt; Set Error Bar Cap Shape( begin, end )

**Beschreibung:** Gibt die Form des Abschlusses an, die in Fehlerbalken angezeigt werden soll. Ein einzelnes Argument legt die Form für beide Enden des Balkens fest, oder es können separate Argumente für Anfang und Ende des Balkens angegeben werden. Die Standardform ist "Line". Die Form "Arrow" zeichnet einen nach außen zeigenden Pfeil und "None" lässt den Abschluss aus.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Set Error Bar Cap Shape( "Line", "Arrow" );

```

### Set Fill Color

**Syntax:** obj &lt;&lt; Set Fill Color( color )

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Fill Color( "Green" );

```

### Set Fill Pattern

**Syntax:** obj &lt;&lt; Set Fill Pattern

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Fill Pattern( "h wave medium" );

```

### Set Gradient

**Syntax:** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; } obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**Beschreibung:** Legt den Farbverlauf fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**Syntax:** obj &lt;&lt; Set Gradient Color Theme

**Beschreibung:** Legt das Farbschema für den Verlauf fest.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**Syntax:** obj &lt;&lt; Set Gradient Custom Scale

**Beschreibung:** Legt für den Verlauf fest, dass eine Liste von Werten für eine benutzerdefinierte Skala verwendet wird.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Custom Scale( {0.0, 5.0, 10.0, 20.0} );

```

### Set Gradient Discrete Colors

**Syntax:** obj &lt;&lt; Set Gradient Discrete Colors

**Beschreibung:** Legt fest, ob jede Stufe in einem Verlauf eine einzelne Farbe sein soll oder ob die Farben glatte Übergänge haben sollen.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Marker Seg( 1 ) );seg << Set Gradient Discrete Colors( 1 );

```

### Set Gradient Fill

**Syntax:** obj &lt;&lt; Set Gradient Fill( "Zwischen"|"Darüber"|"Darunter"|"Darüber Darunter"="Darüber Darunter" )

**Beschreibung:** Legt das Farbverhalten für Werte außerhalb des Bereichs der Verlaufsskala fest. Standardmäßig „Darüber Darunter“.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Middle 90%" );seg << Set Gradient Fill( "Between" );

```

### Set Gradient Label Count

**Syntax:** obj &lt;&lt; Set Gradient Label Count

**Beschreibung:** Legt die Anzahl der Beschriftungen in der Legende eines Verlaufs fest. Diese Anzahl ist um eins kleiner als die Anzahl der Konturstufen.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Label Count( 8 );

```

### Set Gradient Label Levels

**Syntax:** obj &lt;&lt; Set Gradient Label Levels( [value1,value1, ... value N] )

**Beschreibung:** Legt einen benutzerdefinierten Satz von Werten für die Verwendung in der Verlaufsskala fest.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Legend Horizontal

**Syntax:** obj &lt;&lt; Set Gradient Legend Horizontal

**Beschreibung:** Legt fest, ob die Legende des Verlaufs horizontal gezeichnet werden soll.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**Syntax:** obj &lt;&lt; Set Gradient Legend Label Format

**Beschreibung:** Legt das Format für die Beschriftungen der Verlaufslegende fest

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**Syntax:** obj &lt;&lt; Set Gradient Legend Label Width

**Beschreibung:** Legt die maximale Zeichenlänge von Beschriftungen der Verlaufslegende fest.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**Syntax:** obj &lt;&lt; Set Gradient Legend Show Labels

**Beschreibung:** Legt fest, ob die Stufenbeschriftungen in der Legende des Verlaufs angezeigt werden sollen.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**Syntax:** obj &lt;&lt; Set Gradient Level Count

**Beschreibung:** Legt die Anzahl der Stufen in einem Verlauf fest. Diese Anzahl ist um eins kleiner als die Anzahl der Beschriftungen.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**Syntax:** obj &lt;&lt; Set Gradient Lightness Range

**Beschreibung:** Legt die minimale und maximale Helligkeit für Stufenfarben in einem Verlauf fest. Die Farben werden skaliert, um den Bereich abzudecken. Ein fehlender Wert wird behandelt wie keine Änderung.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Beispiel 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Lightness Range( ., 0.75 );

```

### Set Gradient Range

**Syntax:** obj &lt;&lt; Set Gradient Range( "Standard"|"Exakter Datenbereich"|"Mittlere 90 %"="Standard" )

**Beschreibung:** Legt den Bereich fest, über den nicht benutzerspezifische Verlaufsskalen generiert werden. Standardmäßig „Standard“.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Exact Data Range" );

```

### Set Gradient Reverse Color Order

**Syntax:** obj &lt;&lt; Set Gradient Reverse Color Order

**Beschreibung:** Kehrt die Reihenfolge der Farben in einem Verlauf um.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**Syntax:** obj &lt;&lt; Set Gradient Reverse Label Order

**Beschreibung:** Kehrt die Reihenfolge der Beschriftungen in einem Verlauf um.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Gradient Reverse Label Order( 1 );

```

### Set Gradient Scale

**Syntax:** obj &lt;&lt; Set Gradient Scale( "Linear"|"Quantil"|"Standardabweichung"|"Log"|"Log-Offset"|"Benutzerdefiniert"="Linear" )

**Beschreibung:** Legt den Skalentyp des Verlaufs fest. Standardmäßig „Linear“.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale( "Quantile" );

```

### Set Gradient Scale Values

**Syntax:** obj &lt;&lt; Set Gradient Scale Values( [value1,value1, ... value N] )

**Beschreibung:** Legt einen benutzerdefinierten Satz von Werten für die Verwendung in der Verlaufsskala fest.

**JMP Version hinzugefügt:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Show Missing

**Syntax:** obj &lt;&lt; Set Gradient Show Missing( "Automatisch"|"Ein"|"Aus"="Automatisch" )

**Beschreibung:** Legt fest, wann der Legendeneintrag für fehlende Werte angezeigt werden soll. Standardmäßig „Automatisch“.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );gb = Graph Builder(	Variables( X( :city ), Y( :POP ), Color( :NO ) ),	Elements( Bar( X, Y ) ));frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Bar Seg( 1 ) );seg << Set Gradient Show Missing( "Off" );

```

### Set Interval Draw Directions

**Syntax:** obj &lt;&lt; Set Interval Draw Directions( Both|Upper|Lower|None )

**Beschreibung:** Legt die Richtungen fest, in die Intervalle gezeichnet werden sollen.

**JMP Version hinzugefügt:** 17

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements(		Points(			X,			Y,			Legend( 3 ),			Summary Statistic( "Mean" ),			Error Interval( "Standard Deviation" )		)	),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Reference Line Order( 3 ), DispatchSeg(				BarSeg( 1 ),				{Set Interval Draw Directions( "Upper" )}			)}		)	));frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Set Interval Draw Directions( "Lower" );

```

### Set Label Offset

**Syntax:** Set Label Offset {Wedge Index, X Scale Coordinate (0-1), Y Scale Coordinate (0-1)}

**Beschreibung:** Legt für den Offset der Wertbeschriftung eines Tortenstücks eine Koordinate im Graphen fest

**JMP Version hinzugefügt:** 16

### Set Line Color

**Syntax:** obj &lt;&lt; Set Line Color( color )

**Beschreibung:** Legt die Farbe für alle Linien im Anzeigesegment fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Line Color( "Green" );

```

### Set Line Style

**Syntax:** obj &lt;&lt; Set Line Style( pen style )

**Beschreibung:** Legt den Stil der Linien fest. Mögliche Optionen sind Durchgezogen, Gepunktet, Gestrichelt, Strich-Punkt oder Strich-Punkt-Punkt.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Line Style( "Dotted" );

```

### Set Line Width

**Syntax:** obj &lt;&lt; Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Sonstige…" )

**Beschreibung:** Legt die Breite der Linien fest.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Line Width( 3 );

```

### Set Marker

**Syntax:** obj &lt;&lt; Set Marker( marker )

**Beschreibung:** Legt den Symbolstil für alle Symbole fest.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Marker( "Square" );

```

### Set Marker Size

**Syntax:** obj &lt;&lt; Set Marker Size( size )

**Beschreibung:** Legt die Größe der Symbole fest. Mögliche Größen sind Punkt, Klein, Mittel, Groß, XL, XXL und XXXL.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Marker( "Square" );seg << Set Marker Size( "XL" );

```

### Set Transparency

**Syntax:** obj &lt;&lt; Set Transparency( number )

**Beschreibung:** Legt die Formentransparenz fest. Das Argument muss ein numerischer Wert zwischen 0 und 1 sein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Transparency( .3 );

```

### Sib

**Syntax:** seg2 = obj &lt;&lt; Sib

**Beschreibung:** Gibt das Geschwisterelement des Anzeigesegments zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Sib;

```

### Sib Append

**Syntax:** obj &lt;&lt; Sib Append( seg2 )

**Beschreibung:** Fügt ein Anzeigesegment direkt nach dem Anzeigesegment ein.

```jsl

win = New Window( "World",	gb = Graph(		FrameSize( 800, 400 ),		X Scale( -180, 180 ),		Y Scale( -90, 90 ),		<<Background Map( Images( "Simple Earth" ) )	));imgBox = win[framebox( 1 )];mapSeg = imgBox << FindSeg( MapSeg( 1 ) );mapSeg << Transparency( 0.5 );Try(	xAxis = gb[AxisBox( 2 )];	xMin = (xAxis << get min);	xMax = (xAxis << get max);,	xMin = 0;	xMax = 100;);yAxis = gb[AxisBox( 1 )];yMin = (yAxis << get min);yMax = (yAxis << get max);xval = Matrix( {xmin, xmax} );yval = Matrix( {ymin, ymax} );mapSeg << Sib Append( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Sib Prepend

**Syntax:** obj &lt;&lt; Sib Prepend( seg2 )

**Beschreibung:** Fügt ein Anzeigesegment direkt vor dem Anzeigesegment ein.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));Try(	xAxis = g[AxisBox( 2 )];	xMin = (xAxis << get min);	xMax = (xAxis << get max);,	xMin = 0;	xMax = 100;);yAxis = g[AxisBox( 1 )];yMin = (yAxis << get min);yMax = (yAxis << get max);xval = Matrix( {xmin, xmax} );yval = Matrix( {ymin, ymax} );seg << Sib Prepend( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Style

**Syntax:** obj &lt;&lt; Style( „Torte“, „Ring“, „Coxcomb“ )

**Beschreibung:** Für den Stil der Torte entweder Torte, Ring oder Coxcomb festlegen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );nw = New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		Pie Seg( {75, 50}, .25, sumWt )	));frame = nw[framebox( 1 )];seg = frame << Find Seg( "Pie Seg" );Wait( 2 );seg << Style( "Coxcomb" );

```

### Transparency

**Syntax:** obj &lt;&lt; Transparency( number )

**Beschreibung:** Legt die Formentransparenz fest. Das Argument muss ein numerischer Wert zwischen 0 und 1 sein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));seg << Set Transparency( .3 );

```

## Freigegebene Elementmeldungen

### Enabled

**Syntax:** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**Beschreibung:** Ein Objekt, das nicht aktiviert ist, reagiert nicht auf Tastatur- oder Mauseingabe. Diese Eigenschaft wird von untergeordneten Objekten geerbt, deshalb verursacht ein Containerobjekt, das deaktiviert ist, die Deaktivierung aller untergeordneten Objekte.

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Get Enabled

**Syntax:** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**Beschreibung:** Ein Objekt, das nicht aktiviert ist, reagiert nicht auf Tastatur- oder Mauseingabe. Diese Eigenschaft wird von untergeordneten Objekten geerbt, deshalb verursacht ein Containerobjekt, das deaktiviert ist, die Deaktivierung aller untergeordneten Objekte.

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Get Namespace

**Syntax:** obj &lt;&lt; Get Namespace

**Beschreibung:** Gibt den zu diesem Anzeigeobjekt zugehörigen Namensraum zurück.

```jsl

//This message applies to all display objectsx = 1;w = New Window( "Test", b = Button Box( "Press me" ) );b:x = 2;ns = b << GetNamespace();Show( ns:x, x );

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

### Set Property

**Syntax:** obj &lt;&lt; Set Property( "property", value )

**Beschreibung:** Legt den Wert für die benannte property für das Anzeigefeld fest.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Set Property( "Enabled", 0 );

```

## Zugehörige Konstruktoren

### Pie Seg

**Syntax:** ps = Pie Seg(&lt;{ xorigin, yorigin }&gt;, &lt;radius&gt;, &lt;style("pie", "ring", "coxcomb")&gt;, values)

**Beschreibung:** Erstellt ein Tortensegment am angegebenen Ursprung, mit dem angegebenen Radius, basierend auf im Matrixformat angegebenen Werten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box(		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),		seg = Pie Seg( {75, 50}, .25, sumWt )	));

```

