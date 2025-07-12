# HistSeg



## Elementmeldungen

### Child

**Syntax:** seg2 = obj << Child

**Beschreibung:** Gibt das erste untergeordnete Element des Anzeigesegments zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Child; // not many segs support children

```

### Class Name

**Syntax:** classname = obj << Class Name

**Beschreibung:** Gibt den Namen der Anzeigeklasse für das Anzeigefeld zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
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

### Delete

**Syntax:** obj << Delete

**Beschreibung:** Löscht das Anzeigesegment.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Delete;

```

### Frame

**Syntax:** FrameBox = obj << Frame

**Beschreibung:** Gibt das Rahmenfeld zurück, in dem sich das Anzeigesegment befindet.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Frame;

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

### Get Description

**Syntax:** description = obj << Get Description

**Beschreibung:** Ruft die Beschreibung des Anzeigesegments ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << get description();

```

### Get Fill Pattern

**Syntax:** obj << Get Fill Pattern

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Get Fill Pattern;

```

### Get Line Color

**Syntax:** color = obj << Get Line Color( color )

**Beschreibung:** Ruft die Farbe der Umrandungen des Balkens ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Get Line Color;

```

### Get Line Style

**Syntax:** linestyle = obj << Get Line Style( pen style )

**Beschreibung:** Ruft den Linienstil der Umrandungen des Balkens ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Get Line Style;

```

### Get Line Width

**Syntax:** integer = obj << Get Line Width( number )

**Beschreibung:** Ruft die Breite der Umrandungen des Balkens ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Get Line Width;

```

### Get Transparency

**Syntax:** 0.0 to 1.0 = obj << Get Transparency( number )

**Beschreibung:** Ruft die Transparenz des Histogrammsegments ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Get Transparency;

```

### Histogram Color

**Syntax:** obj << Histogram Color( color )

**Beschreibung:** Legt die Farbe der Histogrammbalken fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Histogram Color( "Red" );

```

### Line Color

**Syntax:** obj << Line Color( color )

**Beschreibung:** Legt die Farbe der Umrandungen des Balkens fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Set Line Color( "Green" );

```

### Line Style

**Syntax:** obj << Line Style( Linienstil )

**Beschreibung:** Legt den Linienstil der Umrandungen des Balkens fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Set Line Style( "dashed" );

```

### Line Width

**Syntax:** obj << Line Width( integer )

**Beschreibung:** Legt die Breite der Umrandungen des Balkens fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Set Line Width( 3 );

```

### Parent

**Syntax:** seg2 = obj << Parent

**Beschreibung:** Gibt das übergeordnete Element des Anzeigesegments zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Parent;

```

### Save Color Preference

**Syntax:** obj << Save Color Preference

**Beschreibung:** Legt die aktuelle Balkenfarbe als die Standardfarbe für Histogrammbalken fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Save Color Preference;

```

### Set Description

**Syntax:** obj << Set Description( description )

**Beschreibung:** Legt die Beschreibung des Anzeigesegments fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << set description( "my seg" );

```

### Set Fill Pattern

**Syntax:** obj << Set Fill Pattern

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Set Fill Pattern( "h wave medium" );

```

### Set Line Color

**Syntax:** obj << Set Line Color( color )

**Beschreibung:** Legt die Farbe der Umrandungen des Balkens fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Set Line Color( "Green" );

```

### Set Line Style

**Syntax:** obj << Set Line Style( Linienstil )

**Beschreibung:** Legt den Linienstil der Umrandungen des Balkens fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Set Line Style( "dashed" );

```

### Set Line Width

**Syntax:** obj << Set Line Width( integer )

**Beschreibung:** Legt die Breite der Umrandungen des Balkens fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Set Line Width( 3 );

```

### Set Transparency

**Syntax:** obj << Set Transparency( 0.0 to 1.0 )

**Beschreibung:** Legt die Transparenz des Histogrammsegments fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Set Transparency( .5 );

```

### Sib

**Syntax:** seg2 = obj << Sib

**Beschreibung:** Gibt das Geschwisterelement des Anzeigesegments zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
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

### Subset

**Syntax:** obj << Subset

**Beschreibung:** Erstellt eine Teildatentabelle basierend auf der aktuellen Auswahl.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Subset;

```

### Transparency

**Syntax:** obj << Transparency( 0.0 to 1.0 )

**Beschreibung:** Legt die Transparenz des Histogrammsegments fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));
seg << Set Transparency( .5 );

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

### Hist Seg

**Syntax:** b = Hist Seg([data], <[freq data]>,<[weight data]>, <vertical=0|1>, <Row States()>)

**Beschreibung:** Gibt ein Histogrammsegment zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Hist Seg( 1 ) ));

```

