# LinesSeg



## Associated Constructors

### Lines Seg

**Syntax:** ls = Lines Seg([x1 y1 x2 y2,...])

**Description:** Creates a display seg with a sequence of line segments for the given x and y values. The optional second argument enables row state assignments, from either a data table (dt) or independently.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));

```

## Item Messages

### Child

**Syntax:** seg2 = obj &lt;&lt; Child

**Description:** Returns the first child of the display seg.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Child; // not many segs support children

```

### Class Name

**Syntax:** classname = obj &lt;&lt; Class Name

**Description:** Returns the name of the display class for the display seg.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Class Name;

```

### Clip Shape

**Syntax:** seg &lt;&lt; Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**Description:** Clips the geometry by the given shape. The shape can be specified using a shape file or a path. An optional ID can be specified with a shape file to select a single shape from the file, otherwise the union of all shapes is used as the clipping region. A clipping path can be specified with an N x 3 matrix or with a text representation. A path matrix has three columns for x, y, and flags for each point in the path. The flag values are 0 for control, 1 for move, 2 for line segment, 3 for cubic Bézier segment, and are negative if the point also closes the path. Path text supports SVG syntax.

**JMP Version Added:** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Size( 653, 396 ),	Show Control Panel( 0 ),	Variables( X( :Longitude ), Y( :Latitude ) ),	Elements( Contour( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),			Reference Line Order( 3 )}		)	));cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );Wait( 2 );cs << Clip Shape( Boundaries( "US States" ) );

```

### Delete

**Syntax:** obj &lt;&lt; Delete

**Description:** Delete the display seg.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Delete;

```

### First Value

**Syntax:** obj &lt;&lt; First Value( state=0|1 )

**JMP Version Added:** 16

### Frame

**Syntax:** FrameBox = obj &lt;&lt; Frame

**Description:** Returns the frame box that the display seg is in.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Frame;

```

### Get Clip Shape

**Syntax:** obj &lt;&lt; Get Clip Shape

**Description:** Returns the current clipping shape

**JMP Version Added:** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Size( 653, 396 ),	Show Control Panel( 0 ),	Variables( X( :Longitude ), Y( :Latitude ) ),	Elements( Contour( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),			Reference Line Order( 3 )}		)	));cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );cs << Clip Shape( Boundaries( "US States" ) );Wait( 2 );cs << Get Clip Shape();

```

### Get Connected

**Syntax:** 0|1 = obj &lt;&lt; Get Connected

**Description:** Returns the connection state of all line segments in the display seg.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Get Connected;

```

### Get Description

**Syntax:** description = obj &lt;&lt; Get Description

**Description:** Gets the description for the display seg.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << get description();

```

### Get Line

**Syntax:** [x1 y1 x2 y2] = obj &lt;&lt; Get Line( index )

**Description:** Returns the X and Y coordinates of the specified line.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Get Line( 2 );

```

### Get Line Color

**Syntax:** color = obj &lt;&lt; Get Line Color

**Description:** Returns the color of the lines.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Get Line Color;

```

### Get Line Count

**Syntax:** Number = obj &lt;&lt; Get Line Count

**Description:** Returns the number of lines in the display seg.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Get Line Count;

```

### Get Line Style

**Syntax:** pen style = obj &lt;&lt; Get Line Style

**Description:** Returns the style of the lines.

**JMP Version Added:** 14

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Get Line Style;

```

### Get Line Width

**Syntax:** number = obj &lt;&lt; Get Line Width

**Description:** Returns the width of the lines.

**JMP Version Added:** 14

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Get Line Width;

```

### Get Lines

**Syntax:** [x1 y1 x2 y2, ...] = obj &lt;&lt; Get Lines

**Description:** Returns the X and Y coordinate values for all lines.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Get Lines;

```

### Last Value

**Syntax:** obj &lt;&lt; Last Value( state=0|1 )

**JMP Version Added:** 16

### Line Color

**Syntax:** obj &lt;&lt; Line Color( color )

**Description:** Set the color for all lines in the display seg.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Set Line Color( "Green" );

```

### Line Style

**Syntax:** obj &lt;&lt; Line Style( pen style )

**Description:** Sets the style of the lines. Options are Solid, Dotted, Dashed, DashDot, and DashDotDot.

**JMP Version Added:** 14

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Set Line Style( "Dotted" );

```

### Line Width

**Syntax:** obj &lt;&lt; Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Other..." )

**Description:** Sets the width of the lines.

**JMP Version Added:** 14

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Set Line Width( 3 );

```

### Max Value

**Syntax:** obj &lt;&lt; Max Value( state=0|1 )

**JMP Version Added:** 16

### Min Value

**Syntax:** obj &lt;&lt; Min Value( state=0|1 )

**JMP Version Added:** 16

### Name

**Syntax:** obj &lt;&lt; Name( state=0|1 )

**JMP Version Added:** 16

### Parent

**Syntax:** seg2 = obj &lt;&lt; Parent

**Description:** Returns the parent of the display seg.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Parent;

```

### Set Connected

**Syntax:** obj &lt;&lt; Set Connected( state=0|1 )

**Description:** Sets the connection state for all line segments in the display seg.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Set Connected( 1 );

```

### Set Description

**Syntax:** obj &lt;&lt; Set Description( description )

**Description:** Sets the description for the display seg.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << set description( "my seg" );

```

### Set Line Color

**Syntax:** obj &lt;&lt; Set Line Color( color )

**Description:** Set the color for all lines in the display seg.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Set Line Color( "Green" );

```

### Set Line Style

**Syntax:** obj &lt;&lt; Set Line Style( pen style )

**Description:** Sets the style of the lines. Options are Solid, Dotted, Dashed, DashDot, and DashDotDot.

**JMP Version Added:** 14

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Set Line Style( "Dotted" );

```

### Set Line Width

**Syntax:** obj &lt;&lt; Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Other..." )

**Description:** Sets the width of the lines.

**JMP Version Added:** 14

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Set Line Width( 3 );

```

### Sib

**Syntax:** seg2 = obj &lt;&lt; Sib

**Description:** Returns the sibling of the display seg.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));seg << Sib;

```

### Sib Append

**Syntax:** obj &lt;&lt; Sib Append( seg2 )

**Description:** Adds a display seg immediately after the display seg.

```jsl

win = New Window( "World",	gb = Graph(		FrameSize( 800, 400 ),		X Scale( -180, 180 ),		Y Scale( -90, 90 ),		<<Background Map( Images( "Simple Earth" ) )	));imgBox = win[framebox( 1 )];mapSeg = imgBox << FindSeg( MapSeg( 1 ) );mapSeg << Transparency( 0.5 );Try(	xAxis = gb[AxisBox( 2 )];	xMin = (xAxis << get min);	xMax = (xAxis << get max);,	xMin = 0;	xMax = 100;);yAxis = gb[AxisBox( 1 )];yMin = (yAxis << get min);yMax = (yAxis << get max);xval = Matrix( {xmin, xmax} );yval = Matrix( {ymin, ymax} );mapSeg << Sib Append( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Sib Prepend

**Syntax:** obj &lt;&lt; Sib Prepend( seg2 )

**Description:** Adds a display seg immediately before the display seg.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( Lines Seg( 1 ) ));Try(	xAxis = g[AxisBox( 2 )];	xMin = (xAxis << get min);	xMax = (xAxis << get max);,	xMin = 0;	xMax = 100;);yAxis = g[AxisBox( 1 )];yMin = (yAxis << get min);yMax = (yAxis << get max);xval = Matrix( {xmin, xmax} );yval = Matrix( {ymin, ymax} );seg << Sib Prepend( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

## Shared Item Messages

### Enabled

**Syntax:** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**Description:** An object that is not enabled will not respond to keyboard or mouse input. This property is inherited by child objects, so a container object that is disabled will cause all descendent objects to be disabled.

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Get Enabled

**Syntax:** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**Description:** An object that is not enabled will not respond to keyboard or mouse input. This property is inherited by child objects, so a container object that is disabled will cause all descendent objects to be disabled.

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Get Namespace

**Syntax:** obj &lt;&lt; Get Namespace

**Description:** Returns the namespace associated with this display object.

```jsl

//This message applies to all display objectsx = 1;w = New Window( "Test", b = Button Box( "Press me" ) );b:x = 2;ns = b << GetNamespace();Show( ns:x, x );

```

### Get Properties

**Syntax:** obj &lt;&lt; Get Properties

**Description:** Returns an associative array that contains the display box&apos;s properties and their values.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Properties;

```

### Get Property

**Syntax:** obj &lt;&lt; Get Property( "property" )

**Description:** Returns the current setting for the named property.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Property( "Enabled" );

```

### Get Property List

**Syntax:** obj &lt;&lt; Get Property List

**Description:** Returns a list of properties the display box has.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Property List;

```

### Set Property

**Syntax:** obj &lt;&lt; Set Property( "property", value )

**Description:** Sets the value for the named property for the display box.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Set Property( "Enabled", 0 );

```

