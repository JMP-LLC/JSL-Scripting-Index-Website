# BoxPlotSeg



## Associated Constructors

### Box Plot Seg

**Syntax:** b = Box Plot Seg(<data>, <frequency>, <weight>, <vertical=0|1>)

**Description:** Returns a display seg representing a box plot based on the passed in x and y values.

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

## Item Messages

### Box Style

**Syntax:** obj << Box Style( "Normal"|"Solid"|"Thin" )

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

**Syntax:** obj << Box Type( "Quantile"|"Outlier" )

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

**Description:** Returns the first child of the display seg.

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

**Description:** Returns the name of the display class for the display seg.

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

**Description:** Clips the geometry by the given shape. The shape can be specified using a shape file or a path. An optional ID can be specified with a shape file to select a single shape from the file, otherwise the union of all shapes is used as the clipping region. A clipping path can be specified with an N x 3 matrix or with a text representation. A path matrix has three columns for x, y, and flags for each point in the path. The flag values are 0 for control, 1 for move, 2 for line segment, 3 for cubic Bézier segment, and are negative if the point also closes the path. Path text supports SVG syntax.

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

**Description:** Delete the display seg.

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

**Syntax:** obj << Density Gradient( "Fade to White"|"Fade To Gray"|"Full Color"="Fade to White" )

**Description:** Sets the coloring behavior of density gradients. "Fade to White" by default.

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

**Syntax:** obj << Error Bar Cap( "None"|"Tiny"|"Small"|"Medium"|"Large" )

**Description:** Specifies what type of end cap to put on error bars.

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

**Description:** Specifies the shape of the end cap to display on error bars. A single argument sets the shape for both ends of the bar, or separate arguments can be provided for the start and end. The default shape is "Line". A shape of "Arrow" draws an outward pointing arrow, and "None" omits the cap.

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

### Frame

**Syntax:** FrameBox = obj << Frame

**Description:** Returns the frame box that the display seg is in.

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

**Description:** Returns the current clipping shape

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

**Description:** Gets the coloring behavior of density gradients.

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

**Description:** Gets the description for the display seg.

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

**Description:** Returns the current kind of error bar end cap.

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

**Description:** Returns the shape of the end cap on error bars.

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

**Description:** Gets the coloring gradient.

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

**Description:** Gets the gradient&apos;s color theme.

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

**Description:** Gets if each level in a gradient should be a single color or if colors should transition smoothly.

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

**Description:** Gets the coloring behavior for values outside of the range of the gradient&apos;s scale.

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

**Description:** Gets the number of labels in a gradient&apos;s legend.

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

**Description:** Gets the set of values used for labels in the gradient&apos;s scale.

**Example 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

**Example 2**

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

**Description:** Gets if the gradient&apos;s legend should be drawn horizontally.

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

**Description:** Gets the format for gradient legend labels

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

**Description:** Gets the maximum character length of gradient legend labels.

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

**Description:** Gets if the level labels should be shown in the gradient&apos;s legend.

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

**Description:** Gets the number of levels in a gradient.

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

**Description:** Gets the minimum and maximum lightness for level colors in a gradient. Missing values indicate that the color theme&apos;s original value is used.

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

**Description:** Gets the range over which non-custom gradient scales are generated.

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

**Description:** Gets if the order of colors in a gradient is reversed.

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

**Description:** Gets if the order of labels in a gradient is reversed.

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

**Description:** Gets the gradient scale type.

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

**Description:** Gets the set of values used for labels in the gradient&apos;s scale.

**Example 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

**Example 2**

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

**Description:** Gets when to show the legend entry for missing values.

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

**Description:** Gets the transparency behavior of gradients.

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

**Description:** Gets the directions in which intervals should be drawn.

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

**Description:** Returns the color of the lines.

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

**Description:** Returns the style of the lines.

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

**Description:** Returns the width of the lines.

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

**Description:** Returns the marker style.

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

**Description:** Returns the size of the markers.

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

**Description:** Returns a matrix representing the computed quantiles. The first column lists the quantiles that are computed and the second column contains the values for those quantiles.

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

**Description:** Returns a numeric value representing transparency between 0 (clear) and 1 (opaque).

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

**Description:** Sets the coloring gradient.

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

**Description:** Sets the gradient&apos;s color theme.

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

**Description:** Sets if each level in a gradient should be a single color or if colors should transition smoothly.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Gradient Fill

**Syntax:** obj << Gradient Fill( "Between"|"Above"|"Below"|"Above Below"="Above Below" )

**Description:** Sets the coloring behavior for values outside of the range of the gradient&apos;s scale. "Above Below" by default.

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

**Description:** Sets the number of labels in a gradient&apos;s legend. This is one more than the number of contour levels.

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

**Description:** Sets a custom set of values for use in the gradient&apos;s scale.

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

**Description:** Sets if the gradient&apos;s legend should be drawn horizontally.

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

**Description:** Sets the format for gradient legend labels

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

**Description:** Sets the maximum character length of gradient legend labels.

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

**Description:** Sets if the level labels should be shown in the gradient&apos;s legend.

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

**Description:** Sets the number of levels in a gradient. This is one less than the number of labels.

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

**Description:** Sets the minimum and maximum lightness for level colors in a gradient. The colors will be scaled to cover this range. A missing value is treated as no change.

**Example 1**

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

**Example 2**

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

**Example 3**

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

**Syntax:** obj << Gradient Range( "Default"|"Exact Data Range"|"Middle 90%"="Default" )

**Description:** Sets the range over which non-custom gradient scales are generated. "Default" by default.

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

**Description:** Reverses the order of the colors in a gradient.

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

**Description:** Reverses the order of the labels in a gradient.

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

**Syntax:** obj << Gradient Scale( "Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom"="Linear" )

**Description:** Sets the gradient scale type. "Linear" by default.

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

**Description:** Sets a custom set of values for use in the gradient&apos;s scale.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Show Missing

**Syntax:** obj << Gradient Show Missing( "Auto"|"On"|"Off"="Auto" )

**Description:** Sets when to show the legend entry for missing values. "Auto" by default.

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

**Syntax:** obj << Gradient Transparency( "None"|"Linear"="Linear" )

**Description:** Sets the transparency behavior of gradients. "Linear" by default.

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

### Line Color

**Syntax:** obj << Line Color( color )

**Description:** Set the color for all lines in the display seg.

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

**Description:** Sets the style of the lines. Options are Solid, Dotted, Dashed, DashDot, and DashDotDot.

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

**Syntax:** obj << Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Other..." )

**Description:** Sets the width of the lines.

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

**Description:** Sets the marker style for all markers.

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

**Description:** Sets the size for the markers. Size options are Dot, Small, Medium, Large, XL, XXL, and XXXL.

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

### Name

**Syntax:** obj << Name( state=0|1 )

### Notched

**Syntax:** obj << Notched( state=0|1 )

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

**Description:** Returns the parent of the display seg.

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

**Syntax:** obj << Set Box Style( "Normal"|"Solid"|"Thin" )

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

**Syntax:** obj << Set Box Type( "Quantile"|"Outlier" )

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

**Description:** Sets the description for the display seg.

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

**Syntax:** obj << Set Error Bar Cap( "None"|"Tiny"|"Small"|"Medium"|"Large" )

**Description:** Specifies what type of end cap to put on error bars.

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

**Description:** Specifies the shape of the end cap to display on error bars. A single argument sets the shape for both ends of the bar, or separate arguments can be provided for the start and end. The default shape is "Line". A shape of "Arrow" draws an outward pointing arrow, and "None" omits the cap.

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

**Description:** Sets the coloring gradient.

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

**Description:** Sets the gradient&apos;s color theme.

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

**Description:** Sets the gradient to use a list of values for a custom scale.

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

**Description:** Sets if each level in a gradient should be a single color or if colors should transition smoothly.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Set Gradient Fill

**Syntax:** obj << Set Gradient Fill( "Between"|"Above"|"Below"|"Above Below"="Above Below" )

**Description:** Sets the coloring behavior for values outside of the range of the gradient&apos;s scale. "Above Below" by default.

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

**Description:** Sets the number of labels in a gradient&apos;s legend. This is one more than the number of contour levels.

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

**Description:** Sets a custom set of values for use in the gradient&apos;s scale.

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

**Description:** Sets if the gradient&apos;s legend should be drawn horizontally.

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

**Description:** Sets the format for gradient legend labels

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

**Description:** Sets the maximum character length of gradient legend labels.

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

**Description:** Sets if the level labels should be shown in the gradient&apos;s legend.

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

**Description:** Sets the number of levels in a gradient. This is one less than the number of labels.

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

**Description:** Sets the minimum and maximum lightness for level colors in a gradient. The colors will be scaled to cover this range. A missing value is treated as no change.

**Example 1**

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

**Example 2**

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

**Example 3**

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

**Syntax:** obj << Set Gradient Range( "Default"|"Exact Data Range"|"Middle 90%"="Default" )

**Description:** Sets the range over which non-custom gradient scales are generated. "Default" by default.

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

**Description:** Reverses the order of the colors in a gradient.

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

**Description:** Reverses the order of the labels in a gradient.

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

**Syntax:** obj << Set Gradient Scale( "Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom"="Linear" )

**Description:** Sets the gradient scale type. "Linear" by default.

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

**Description:** Sets a custom set of values for use in the gradient&apos;s scale.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Show Missing

**Syntax:** obj << Set Gradient Show Missing( "Auto"|"On"|"Off"="Auto" )

**Description:** Sets when to show the legend entry for missing values. "Auto" by default.

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

**Description:** Sets the directions in which intervals should be drawn.

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

**Description:** Set the color for all lines in the display seg.

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

**Description:** Sets the style of the lines. Options are Solid, Dotted, Dashed, DashDot, and DashDotDot.

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

**Syntax:** obj << Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Other..." )

**Description:** Sets the width of the lines.

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

**Description:** Sets the marker style for all markers.

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

**Description:** Sets the size for the markers. Size options are Dot, Small, Medium, Large, XL, XXL, and XXXL.

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

**Description:** Returns the sibling of the display seg.

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

**Description:** Adds a display seg immediately after the display seg.

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

**Description:** Adds a display seg immediately before the display seg.

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

## Shared Item Messages

### Enabled

**Syntax:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Description:** An object that is not enabled will not respond to keyboard or mouse input. This property is inherited by child objects, so a container object that is disabled will cause all descendent objects to be disabled.

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

**Description:** An object that is not enabled will not respond to keyboard or mouse input. This property is inherited by child objects, so a container object that is disabled will cause all descendent objects to be disabled.

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

**Description:** Returns the namespace associated with this display object.

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

**Description:** Returns an associative array that contains the display box&apos;s properties and their values.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**Syntax:** obj << Get Property( "property" )

**Description:** Returns the current setting for the named property.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**Syntax:** obj << Get Property List

**Description:** Returns a list of properties the display box has.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Set Property

**Syntax:** obj << Set Property( "property", value )

**Description:** Sets the value for the named property for the display box.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

