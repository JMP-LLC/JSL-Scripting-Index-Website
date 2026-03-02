# LinesSeg



## Elementmeldungen

### Child

**Syntax:** seg2 = obj &lt;&lt; Child

**Beschreibung:** Gibt das erste untergeordnete Element des Anzeigesegments zurück.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Child; // not many segs support children

```

### Class Name

**Syntax:** classname = obj &lt;&lt; Class Name

**Beschreibung:** Gibt den Namen der Anzeigeklasse für das Anzeigefeld zurück.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Class Name;

```

### Clip Shape

**Syntax:** seg &lt;&lt; Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**Beschreibung:** Stellt die Geometrie in der gewünschten Form dar. Die Form kann mittels einer Formendatei oder einem Pfad angegeben werden. Optional kann mit einer Formendatei eine ID angegeben werden, um eine einzelne Form aus der Datei auszuwählen, ansonsten wird die Verbindung sämtlicher Formen als Beschneidungsbereich verwendet. Ein Beschneidungspfad kann mit einer Nx3-Matrix oder mit einer Textdarstellung angegeben werden. Eine Pfadmatrix hat drei Spalten für x, y und Flags für jeden Punkt im Pfad. Die Flag-Werte sind 0 für Steuern, 1 für Verschieben, 2 für Liniensegment, 3 für kubisches Bézier-Segment und sie sind negativ, wenn der Punkt den Pfad auch schließt. Der Pfadtext unterstützt die SVG-Syntax.

**JMP Version hinzugefügt:** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Size( 653, 396 ),	Show Control Panel( 0 ),	Variables( X( :Longitude ), Y( :Latitude ) ),	Elements( Contour( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),			Reference Line Order( 3 )}		)	));cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );Wait( 2 );cs << Clip Shape( Boundaries( "US States" ) );

```

### Delete

**Syntax:** obj &lt;&lt; Delete

**Beschreibung:** Löscht das Anzeigesegment.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Delete;

```

### First Value

**Syntax:** obj &lt;&lt; First Value( state=0|1 )

**JMP Version hinzugefügt:** 16

### Frame

**Syntax:** FrameBox = obj &lt;&lt; Frame

**Beschreibung:** Gibt das Rahmenfeld zurück, in dem sich das Anzeigesegment befindet.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Frame;

```

### Get Clip Shape

**Syntax:** obj &lt;&lt; Get Clip Shape

**Beschreibung:** Gibt die aktuelle Beschneidungsform aus

**JMP Version hinzugefügt:** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Size( 653, 396 ),	Show Control Panel( 0 ),	Variables( X( :Longitude ), Y( :Latitude ) ),	Elements( Contour( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),			Reference Line Order( 3 )}		)	));cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );cs << Clip Shape( Boundaries( "US States" ) );Wait( 2 );cs << Get Clip Shape();

```

### Get Connected

**Syntax:** 0|1 = obj &lt;&lt; Get Connected

**Beschreibung:** Gibt den Verbindungszustand aller Liniensegmente im Anzeigesegment zurück.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Get Connected;

```

### Get Description

**Syntax:** description = obj &lt;&lt; Get Description

**Beschreibung:** Ruft die Beschreibung des Anzeigesegments ab.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << get description();

```

### Get Line

**Syntax:** [x1 y1 x2 y2] = obj &lt;&lt; Get Line( index )

**Beschreibung:** Gibt die X- und Y-Koordinaten der angegebenen Linie zurück.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Get Line( 2 );

```

### Get Line Color

**Syntax:** color = obj &lt;&lt; Get Line Color

**Beschreibung:** Gibt die Farbe der Linien zurück.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Get Line Color;

```

### Get Line Count

**Syntax:** Number = obj &lt;&lt; Get Line Count

**Beschreibung:** Gibt die Anzahl der Linien im Anzeigesegment zurück.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Get Line Count;

```

### Get Line Style

**Syntax:** pen style = obj &lt;&lt; Get Line Style

**Beschreibung:** Gibt den Stil der Linien zurück.

**JMP Version hinzugefügt:** 14

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Get Line Style;

```

### Get Line Width

**Syntax:** number = obj &lt;&lt; Get Line Width

**Beschreibung:** Gibt die Breite der Linien zurück.

**JMP Version hinzugefügt:** 14

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Get Line Width;

```

### Get Lines

**Syntax:** [x1 y1 x2 y2, ...] = obj &lt;&lt; Get Lines

**Beschreibung:** Gibt die X- und Y-Koordinatenwerte aller Linien zurück.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Get Lines;

```

### Last Value

**Syntax:** obj &lt;&lt; Last Value( state=0|1 )

**JMP Version hinzugefügt:** 16

### Line Color

**Syntax:** obj &lt;&lt; Line Color( color )

**Beschreibung:** Legt die Farbe für alle Linien im Anzeigesegment fest.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Set Line Color( "Green" );

```

### Line Style

**Syntax:** obj &lt;&lt; Line Style( pen style )

**Beschreibung:** Legt den Stil der Linien fest. Mögliche Optionen sind Durchgezogen, Gepunktet, Gestrichelt, Strich-Punkt oder Strich-Punkt-Punkt.

**JMP Version hinzugefügt:** 14

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Set Line Style( "Dotted" );

```

### Line Width

**Syntax:** obj &lt;&lt; Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Sonstige…" )

**Beschreibung:** Legt die Breite der Linien fest.

**JMP Version hinzugefügt:** 14

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Set Line Width( 3 );

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

### Parent

**Syntax:** seg2 = obj &lt;&lt; Parent

**Beschreibung:** Gibt das übergeordnete Element des Anzeigesegments zurück.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Parent;

```

### Set Connected

**Syntax:** obj &lt;&lt; Set Connected( state=0|1 )

**Beschreibung:** Legt den Verbindungszustand aller Liniensegmente im Anzeigesegment fest.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Set Connected( 1 );

```

### Set Description

**Syntax:** obj &lt;&lt; Set Description( description )

**Beschreibung:** Legt die Beschreibung des Anzeigesegments fest.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << set description( "my seg" );

```

### Set Line Color

**Syntax:** obj &lt;&lt; Set Line Color( color )

**Beschreibung:** Legt die Farbe für alle Linien im Anzeigesegment fest.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Set Line Color( "Green" );

```

### Set Line Style

**Syntax:** obj &lt;&lt; Set Line Style( pen style )

**Beschreibung:** Legt den Stil der Linien fest. Mögliche Optionen sind Durchgezogen, Gepunktet, Gestrichelt, Strich-Punkt oder Strich-Punkt-Punkt.

**JMP Version hinzugefügt:** 14

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Set Line Style( "Dotted" );

```

### Set Line Width

**Syntax:** obj &lt;&lt; Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Sonstige…" )

**Beschreibung:** Legt die Breite der Linien fest.

**JMP Version hinzugefügt:** 14

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Set Line Width( 3 );

```

### Sib

**Syntax:** seg2 = obj &lt;&lt; Sib

**Beschreibung:** Gibt das Geschwisterelement des Anzeigesegments zurück.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Sib;

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

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));Try(	xAxis = g[AxisBox( 2 )];	xMin = (xAxis << get min);	xMax = (xAxis << get max);,	xMin = 0;	xMax = 100;);yAxis = g[AxisBox( 1 )];yMin = (yAxis << get min);yMax = (yAxis << get max);xval = Matrix( {xmin, xmax} );yval = Matrix( {ymin, ymax} );seg << Sib Prepend( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

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

### Lines Seg

**Syntax:** ls = Lines Seg([x1 y1 x2 y2,...])

**Beschreibung:** Erstellt ein Anzeigesegment mit einer Sequenz aus Liniensegmenten für die angegebenen X- und Y-Werte. Das optionale zweite Argument aktiviert zugewiesene Zeileneigenschaften, entweder aus einer Datentabelle (dt) oder unabhängig.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));

```

