# IfSeg



### Append

**Syntax:** obj << Append( seg2 )

**Beschreibung:** Fügt das Segment als letztes untergeordnetes Element des aktuellen Segments ein.

```js

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( If Seg( 1 ) ));
seg << Append( Lines Seg( [5 50 95 50] ) );

```

### Child

**Syntax:** seg2 = obj << Child

**Beschreibung:** Gibt das erste untergeordnete Element des Anzeigesegments zurück.

```js

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( If Seg( 1 ) ));
seg << Child; // not many segs support children

```

### Class Name

**Syntax:** classname = obj << Class Name

**Beschreibung:** Gibt den Namen der Anzeigeklasse für das Anzeigefeld zurück.

```js

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( If Seg( 1 ) ));
seg << Class Name;

```

### Clip Shape

**Syntax:** seg << Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**Beschreibung:** Stellt die Geometrie in der gewünschten Form dar. Die Form kann mittels einer Formendatei oder einem Pfad angegeben werden. Optional kann mit einer Formendatei eine ID angegeben werden, um eine einzelne Form aus der Datei auszuwählen, ansonsten wird die Verbindung sämtlicher Formen als Beschneidungsbereich verwendet. Ein Beschneidungspfad kann mit einer Nx3-Matrix oder mit einer Textdarstellung angegeben werden. Eine Pfadmatrix hat drei Spalten für x, y und Flags für jeden Punkt im Pfad. Die Flag-Werte sind 0 für Steuern, 1 für Verschieben, 2 für Liniensegment, 3 für kubisches Bézier-Segment und sie sind negativ, wenn der Punkt den Pfad auch schließt. Der Pfadtext unterstützt die SVG-Syntax.

**JMP Version hinzugefügt:** 14

```js

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

### Delete

**Syntax:** obj << Delete

**Beschreibung:** Löscht das Anzeigesegment.

```js

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( If Seg( 1 ) ));
seg << Delete;

```

### Enabled

**Syntax:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Beschreibung:** Ein Objekt, das nicht aktiviert ist, reagiert nicht auf Tastatur- oder Mauseingabe. Diese Eigenschaft wird von untergeordneten Objekten geerbt, deshalb verursacht ein Containerobjekt, das deaktiviert ist, die Deaktivierung aller untergeordneten Objekte.

```js

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

### Frame

**Syntax:** FrameBox = obj << Frame

**Beschreibung:** Gibt das Rahmenfeld zurück, in dem sich das Anzeigesegment befindet.

```js

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( If Seg( 1 ) ));
seg << Frame;

```

### Get

**Syntax:** 0|1 = obj << Get

**Beschreibung:** Gibt den Zustand des IfSeg zurück.

```js

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( If Seg( 1 ) ));
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( If Seg( 1 ) ));
seg << get;

```

### Get Clip Shape

**Syntax:** obj << Get Clip Shape

**Beschreibung:** Gibt die aktuelle Beschneidungsform aus

**JMP Version hinzugefügt:** 14

```js

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

### Get Description

**Syntax:** description = obj << Get Description

**Beschreibung:** Ruft die Beschreibung des Anzeigesegments ab.

```js

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( If Seg( 1 ) ));
seg << get description();

```

### Get Enabled

**Syntax:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Beschreibung:** Ein Objekt, das nicht aktiviert ist, reagiert nicht auf Tastatur- oder Mauseingabe. Diese Eigenschaft wird von untergeordneten Objekten geerbt, deshalb verursacht ein Containerobjekt, das deaktiviert ist, die Deaktivierung aller untergeordneten Objekte.

```js

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

```js

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

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**Syntax:** obj << Get Property( "property" )

**Beschreibung:** Gibt die aktuelle Einstellung für die benannte property zurück.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**Syntax:** obj << Get Property List

**Beschreibung:** Gibt eine Liste von Eigenschaften des Anzeigefelds zurück.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### If Seg

**Syntax:** seg = If Seg(<state=0|1>)

**Beschreibung:** Erstellt ein Segment, das untergeordnete Elemente von Anzeigesegmenten ein- oder ausblendet.

```js

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( If Seg( 1 ) ));

```

### Parent

**Syntax:** seg2 = obj << Parent

**Beschreibung:** Gibt das übergeordnete Element des Anzeigesegments zurück.

```js

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( If Seg( 1 ) ));
seg << Parent;

```

### Set

**Syntax:** obj << Set( state=0|1 )

**Beschreibung:** Blendet die Anzeigesegmente innerhalb des IfSeg ein oder aus.

```js

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( If Seg( 1 ) ));
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( If Seg( 1 ) ));
Wait( .5 );
seg << set( 0 );
Wait( .5 );
seg << set( 1 );

```

### Set Description

**Syntax:** obj << Set Description( description )

**Beschreibung:** Legt die Beschreibung des Anzeigesegments fest.

```js

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( If Seg( 1 ) ));
seg << set description( "my seg" );

```

### Set Property

**Syntax:** obj << Set Property( "property", value )

**Beschreibung:** Legt den Wert für die benannte property für das Anzeigefeld fest.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Sib

**Syntax:** seg2 = obj << Sib

**Beschreibung:** Gibt das Geschwisterelement des Anzeigesegments zurück.

```js

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( If Seg( 1 ) ));
seg << Sib;

```

### Sib Append

**Syntax:** obj << Sib Append( seg2 )

**Beschreibung:** Fügt ein Anzeigesegment direkt nach dem Anzeigesegment ein.

```js

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

```js

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( If Seg( 1 ) ));
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

