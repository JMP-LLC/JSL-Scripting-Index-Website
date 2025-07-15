# BarSeg



## Associated Constructors

### Bar Seg

**Syntax:** Bar Seg( x, y, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )

**Description:** Returns a seg representing summarized data as bars.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));

```

## Item Messages

### Child

**Syntax:** seg2 = obj &lt;&lt; Child

**Description:** Returns the first child of the display seg.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Child; // not many segs support children

```

### Class Name

**Syntax:** classname = obj &lt;&lt; Class Name

**Description:** Returns the name of the display class for the display seg.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Class Name;

```

### Clip Shape

**Syntax:** seg &lt;&lt; Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

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

**Syntax:** obj &lt;&lt; Color Theme

### Delete

**Syntax:** obj &lt;&lt; Delete

**Description:** Delete the display seg.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Delete;

```

### Density Gradient

**Syntax:** obj &lt;&lt; Density Gradient( "Fade to White"|"Fade To Gray"|"Full Color"="Fade to White" )

**Description:** Sets the coloring behavior of density gradients. "Fade to White" by default.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Density Gradient( "Fade to Gray" );

```

### Error Bar Cap

**Syntax:** obj &lt;&lt; Error Bar Cap( "None"|"Tiny"|"Small"|"Medium"|"Large" )

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

**Syntax:** obj &lt;&lt; Error Bar Cap Shape( begin, end )

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

### Fill Color

**Syntax:** obj &lt;&lt; Fill Color( color )

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Fill Color( "Green" );

```

### First Value

**Syntax:** obj &lt;&lt; First Value( state=0|1 )

### Frame

**Syntax:** FrameBox = obj &lt;&lt; Frame

**Description:** Returns the frame box that the display seg is in.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Frame;

```

### Get Base Font

**Syntax:** font = obj &lt;&lt; Get Base Font

**Description:** Returns the base font used for text drawn by the box. Base fonts are predefined names such as Title, Text, Annotation, and others, which are specified in the Preferences for fonts.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Get Base Font;

```

### Get Clip Shape

**Syntax:** obj &lt;&lt; Get Clip Shape

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

### Get Density Gradient

**Syntax:** obj &lt;&lt; Get Density Gradient

**Description:** Gets the coloring behavior of density gradients.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Density Gradient;

```

### Get Description

**Syntax:** description = obj &lt;&lt; Get Description

**Description:** Gets the description for the display seg.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << get description();

```

### Get Error Bar Cap

**Syntax:** obj &lt;&lt; Get Error Bar Cap

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

**Syntax:** { begin, end } = obj &lt;&lt; Get Error Bar Cap Shape

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

### Get Fill Color

**Syntax:** color = obj &lt;&lt; Get Fill Color

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Fill Color;

```

### Get Fill Pattern

**Syntax:** obj &lt;&lt; Get Fill Pattern

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Fill Pattern;

```

### Get Font

**Syntax:** obj &lt;&lt; Get Font

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Get Font;

```

### Get Font Name

**Syntax:** obj &lt;&lt; Get Font Name

**Description:** Returns the name of the font.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font Name( "Times New Roman" );
fontobj << Get Font Name;

```

### Get Font Scale

**Syntax:** obj &lt;&lt; Get Font Scale

**Description:** Returns the current scale factor for font.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Get Font Scale;

```

### Get Font Size

**Syntax:** obj &lt;&lt; Get Font Size

**Description:** Returns the size of the font.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Get Font Size;

```

### Get Font Style

**Syntax:** obj &lt;&lt; Get Font Style

**Description:** Returns the font style name.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font Name( "Arial" );
fontobj << Set Font Style( "Italic" );
fontobj << Get Font Style;

```

### Get Gradient

**Syntax:** obj &lt;&lt; Get Gradient

**Description:** Gets the coloring gradient.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient;

```

### Get Gradient Color Theme

**Syntax:** obj &lt;&lt; Get Gradient Color Theme

**Description:** Gets the gradient&apos;s color theme.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**Syntax:** obj &lt;&lt; Get Gradient Discrete Colors

**Description:** Gets if each level in a gradient should be a single color or if colors should transition smoothly.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Discrete Colors;

```

### Get Gradient Fill

**Syntax:** obj &lt;&lt; Get Gradient Fill

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

**Syntax:** obj &lt;&lt; Get Gradient Label Count

**Description:** Gets the number of labels in a gradient&apos;s legend.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Label Count;

```

### Get Gradient Label Levels

**Syntax:** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Label Levels

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

**Syntax:** obj &lt;&lt; Get Gradient Legend Horizontal

**Description:** Gets if the gradient&apos;s legend should be drawn horizontally.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**Syntax:** obj &lt;&lt; Get Gradient Legend Label Format

**Description:** Gets the format for gradient legend labels

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**Syntax:** obj &lt;&lt; Get Gradient Legend Label Width

**Description:** Gets the maximum character length of gradient legend labels.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**Syntax:** obj &lt;&lt; Get Gradient Legend Show Labels

**Description:** Gets if the level labels should be shown in the gradient&apos;s legend.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**Syntax:** obj &lt;&lt; Get Gradient Level Count

**Description:** Gets the number of levels in a gradient.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**Syntax:** obj &lt;&lt; Get Gradient Lightness Range

**Description:** Gets the minimum and maximum lightness for level colors in a gradient. Missing values indicate that the color theme&apos;s original value is used.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Lightness Range;

```

### Get Gradient Range

**Syntax:** obj &lt;&lt; Get Gradient Range

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

**Syntax:** obj &lt;&lt; Get Gradient Reverse Color Order

**Description:** Gets if the order of colors in a gradient is reversed.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**Syntax:** obj &lt;&lt; Get Gradient Reverse Label Order

**Description:** Gets if the order of labels in a gradient is reversed.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Reverse Label Order;

```

### Get Gradient Scale

**Syntax:** obj &lt;&lt; Get Gradient Scale

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

**Syntax:** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Scale Values

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

**Syntax:** obj &lt;&lt; Get Gradient Show Missing

**Description:** Gets when to show the legend entry for missing values.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**Syntax:** obj &lt;&lt; Get Gradient Transparency

**Description:** Gets the transparency behavior of gradients.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Transparency;

```

### Get Interval Draw Directions

**Syntax:** obj &lt;&lt; Get Interval Draw Directions

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

**Syntax:** color = obj &lt;&lt; Get Line Color

**Description:** Returns the color of the lines.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Line Color;

```

### Get Line Style

**Syntax:** pen style = obj &lt;&lt; Get Line Style

**Description:** Returns the style of the lines.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Line Style;

```

### Get Line Width

**Syntax:** number = obj &lt;&lt; Get Line Width

**Description:** Returns the width of the lines.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Line Width;

```

### Get Marker

**Syntax:** marker = obj &lt;&lt; Get Marker

**Description:** Returns the marker style.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Marker;

```

### Get Marker Size

**Syntax:** size = obj &lt;&lt; Get Marker Size

**Description:** Returns the size of the markers.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Marker Size;

```

### Get Side by Side Overlap

**Syntax:** proportion = obj &lt;&lt; Get Side by Side Overlap

**Description:** Returns the amount of overlap for subitems in "side by side" bar styles.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ), Overlay( :sex ) ),
	Elements( Bar( X, Y ) )
);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Side by Side Overlap();

```

### Get Text Color

**Syntax:** obj &lt;&lt; Get Text Color

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Text Color;

```

### Get Text Style

**Syntax:** obj &lt;&lt; Get Text Style

**Description:** Gets how the text is drawn with respect to the cursor pen.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 3 ) ), Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) ) )
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( “Text Seg” ));
seg << Get Text Style;

```

### Get Transparency

**Syntax:** obj &lt;&lt; Get Transparency

**Description:** Returns a numeric value representing transparency between 0 (clear) and 1 (opaque).

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Transparency;

```

### Get Width Proportion

**Syntax:** proportion = obj &lt;&lt; Get Width Proportion

**Description:** Returns the proportion of the available bar width to use for drawing. 0 means automatic sizes. 1 means no gap.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Bar( X, Y ) ) );
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Width Proportion();

```

### Gradient

**Syntax:** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; }obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**Description:** Sets the coloring gradient.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**Syntax:** obj &lt;&lt; Gradient Color Theme

**Description:** Sets the gradient&apos;s color theme.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Gradient Discrete Colors

**Syntax:** obj &lt;&lt; Gradient Discrete Colors

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

**Syntax:** obj &lt;&lt; Gradient Fill( "Between"|"Above"|"Below"|"Above Below"="Above Below" )

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

**Syntax:** obj &lt;&lt; Gradient Label Count

**Description:** Sets the number of labels in a gradient&apos;s legend. This is one more than the number of contour levels.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Label Count( 8 );

```

### Gradient Label Levels

**Syntax:** obj &lt;&lt; Gradient Label Levels( [value1,value1, ... value N] )

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

**Syntax:** obj &lt;&lt; Gradient Legend Horizontal

**Description:** Sets if the gradient&apos;s legend should be drawn horizontally.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**Syntax:** obj &lt;&lt; Gradient Legend Label Format

**Description:** Sets the format for gradient legend labels

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**Syntax:** obj &lt;&lt; Gradient Legend Label Width

**Description:** Sets the maximum character length of gradient legend labels.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**Syntax:** obj &lt;&lt; Gradient Legend Show Labels

**Description:** Sets if the level labels should be shown in the gradient&apos;s legend.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**Syntax:** obj &lt;&lt; Gradient Level Count

**Description:** Sets the number of levels in a gradient. This is one less than the number of labels.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**Syntax:** obj &lt;&lt; Gradient Lightness Range

**Description:** Sets the minimum and maximum lightness for level colors in a gradient. The colors will be scaled to cover this range. A missing value is treated as no change.

**Example 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Example 3**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Gradient Range

**Syntax:** obj &lt;&lt; Gradient Range( "Default"|"Exact Data Range"|"Middle 90%"="Default" )

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

**Syntax:** obj &lt;&lt; Gradient Reverse Color Order

**Description:** Reverses the order of the colors in a gradient.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**Syntax:** obj &lt;&lt; Gradient Reverse Label Order

**Description:** Reverses the order of the labels in a gradient.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Reverse Label Order( 1 );

```

### Gradient Scale

**Syntax:** obj &lt;&lt; Gradient Scale( "Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom"="Linear" )

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

**Syntax:** obj &lt;&lt; Gradient Scale Values( [value1,value1, ... value N] )

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

**Syntax:** obj &lt;&lt; Gradient Show Missing( "Auto"|"On"|"Off"="Auto" )

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

**Syntax:** obj &lt;&lt; Gradient Transparency( "None"|"Linear"="Linear" )

**Description:** Sets the transparency behavior of gradients. "Linear" by default.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Gradient Transparency( "None" );

```

### Last Value

**Syntax:** obj &lt;&lt; Last Value( state=0|1 )

### Line Color

**Syntax:** obj &lt;&lt; Line Color( color )

**Description:** Set the color for all lines in the display seg.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Line Color( "Green" );

```

### Line Style

**Syntax:** obj &lt;&lt; Line Style( pen style )

**Description:** Sets the style of the lines. Options are Solid, Dotted, Dashed, DashDot, and DashDotDot.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Line Style( "Dotted" );

```

### Line Width

**Syntax:** obj &lt;&lt; Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Other..." )

**Description:** Sets the width of the lines.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Line Width( 3 );

```

### Marker

**Syntax:** obj &lt;&lt; Marker( marker )

**Description:** Sets the marker style for all markers.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Marker( "Square" );

```

### Marker Size

**Syntax:** obj &lt;&lt; Marker Size( size )

**Description:** Sets the size for the markers. Size options are Dot, Small, Medium, Large, XL, XXL, and XXXL.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

```

### Max Value

**Syntax:** obj &lt;&lt; Max Value( state=0|1 )

### Min Value

**Syntax:** obj &lt;&lt; Min Value( state=0|1 )

### Name

**Syntax:** obj &lt;&lt; Name( state=0|1 )

### Parent

**Syntax:** seg2 = obj &lt;&lt; Parent

**Description:** Returns the parent of the display seg.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Parent;

```

### Revert

**Syntax:** obj &lt;&lt; Revert

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Revert;

```

### Set Base Font

**Syntax:** obj &lt;&lt; Set Base Font( "Text"|"Heading"|"Title"|"Small"|"Mono"|"Formula Editor"|"Annotation"|"Axis"|"Marker"|"Axis Title"|"Graph Label"|"Legend"|"Graph Title"|"Caption"|"Data Table"|"Hover Label" )

**Description:** Sets the base font for text drawn by the box.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
Wait( 2 );
fontobj << Set Base Font( "Title" );

```

### Set Description

**Syntax:** obj &lt;&lt; Set Description( description )

**Description:** Sets the description for the display seg.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << set description( "my seg" );

```

### Set Error Bar Cap

**Syntax:** obj &lt;&lt; Set Error Bar Cap( "None"|"Tiny"|"Small"|"Medium"|"Large" )

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

**Syntax:** obj &lt;&lt; Set Error Bar Cap Shape( begin, end )

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

### Set Fill Color

**Syntax:** obj &lt;&lt; Set Fill Color( color )

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Fill Color( "Green" );

```

### Set Fill Pattern

**Syntax:** obj &lt;&lt; Set Fill Pattern

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Fill Pattern( "h wave medium" );

```

### Set Font

**Syntax:** obj &lt;&lt; Set Font( fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt; )

**Example 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font( "Arial Black" );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font( "Arial Black", 12, "Italic Underline" );

```

### Set Font Name

**Syntax:** obj &lt;&lt; Set Font Name( fontname )

**Description:** Sets the font for text strings.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font Name( "Arial Black" );

```

### Set Font Scale

**Syntax:** obj &lt;&lt; Set Font Scale( f )

**Description:** Sets a scale factor for the current font. The scale factor will be applied to the size that is determined from the base font and point size.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
Wait( 2 );
fontobj << Set Font Scale( 2.0 );

```

### Set Font Size

**Syntax:** obj &lt;&lt; Set Font Size( n )

**Description:** Sets the font size in points for text strings.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font Size( 14 );

```

### Set Font Style

**Syntax:** obj &lt;&lt; Set Font Style( style )

**Description:** Sets the font style for text strings. To set more than one style at once, place them in the same string, separated by spaces (see Example 2 below).

**Example 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font Style( "Italic" );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font Style( "Italic Bold Underline" );

```

### Set Gradient

**Syntax:** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; }obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**Description:** Sets the coloring gradient.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**Syntax:** obj &lt;&lt; Set Gradient Color Theme

**Description:** Sets the gradient&apos;s color theme.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**Syntax:** obj &lt;&lt; Set Gradient Custom Scale

**Description:** Sets the gradient to use a list of values for a custom scale.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Custom Scale( {0.0, 5.0, 10.0, 20.0} );

```

### Set Gradient Discrete Colors

**Syntax:** obj &lt;&lt; Set Gradient Discrete Colors

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

**Syntax:** obj &lt;&lt; Set Gradient Fill( "Between"|"Above"|"Below"|"Above Below"="Above Below" )

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

**Syntax:** obj &lt;&lt; Set Gradient Label Count

**Description:** Sets the number of labels in a gradient&apos;s legend. This is one more than the number of contour levels.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Label Count( 8 );

```

### Set Gradient Label Levels

**Syntax:** obj &lt;&lt; Set Gradient Label Levels( [value1,value1, ... value N] )

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

**Syntax:** obj &lt;&lt; Set Gradient Legend Horizontal

**Description:** Sets if the gradient&apos;s legend should be drawn horizontally.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**Syntax:** obj &lt;&lt; Set Gradient Legend Label Format

**Description:** Sets the format for gradient legend labels

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**Syntax:** obj &lt;&lt; Set Gradient Legend Label Width

**Description:** Sets the maximum character length of gradient legend labels.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**Syntax:** obj &lt;&lt; Set Gradient Legend Show Labels

**Description:** Sets if the level labels should be shown in the gradient&apos;s legend.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**Syntax:** obj &lt;&lt; Set Gradient Level Count

**Description:** Sets the number of levels in a gradient. This is one less than the number of labels.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**Syntax:** obj &lt;&lt; Set Gradient Lightness Range

**Description:** Sets the minimum and maximum lightness for level colors in a gradient. The colors will be scaled to cover this range. A missing value is treated as no change.

**Example 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Example 3**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Set Gradient Range

**Syntax:** obj &lt;&lt; Set Gradient Range( "Default"|"Exact Data Range"|"Middle 90%"="Default" )

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

**Syntax:** obj &lt;&lt; Set Gradient Reverse Color Order

**Description:** Reverses the order of the colors in a gradient.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**Syntax:** obj &lt;&lt; Set Gradient Reverse Label Order

**Description:** Reverses the order of the labels in a gradient.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Reverse Label Order( 1 );

```

### Set Gradient Scale

**Syntax:** obj &lt;&lt; Set Gradient Scale( "Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom"="Linear" )

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

**Syntax:** obj &lt;&lt; Set Gradient Scale Values( [value1,value1, ... value N] )

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

**Syntax:** obj &lt;&lt; Set Gradient Show Missing( "Auto"|"On"|"Off"="Auto" )

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

**Syntax:** obj &lt;&lt; Set Interval Draw Directions( Both|Upper|Lower|None )

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

### Set Label Offset

**Syntax:** Set Label Offset {Bar Index, X Scale Coordinate, Y Scale Coordinate}

**Description:** Sets the offset of a bar&apos;s value label to a coordinate in the graph

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Legend( 9 ), Label( "Label by Value" ) ) ),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{DispatchSeg(
				BarSeg( 1 ),
				{Set Label Offset( {0, 0.394409937888199, 112.5685} ),
				Set Label Offset( {1, 1.2639751552795, 110.634333333333} ),
				Set Label Offset( {2, 2.14596273291925, 111.794833333333} ),
				Set Label Offset( {3, 3.12732919254658, 116.05} ),
				Set Label Offset( {4, 4.17080745341615, 127.268166666667} )}
			)}
		)
	)
);

```

### Set Line Color

**Syntax:** obj &lt;&lt; Set Line Color( color )

**Description:** Set the color for all lines in the display seg.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Line Color( "Green" );

```

### Set Line Style

**Syntax:** obj &lt;&lt; Set Line Style( pen style )

**Description:** Sets the style of the lines. Options are Solid, Dotted, Dashed, DashDot, and DashDotDot.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Line Style( "Dotted" );

```

### Set Line Width

**Syntax:** obj &lt;&lt; Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Other..." )

**Description:** Sets the width of the lines.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Line Width( 3 );

```

### Set Marker

**Syntax:** obj &lt;&lt; Set Marker( marker )

**Description:** Sets the marker style for all markers.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Marker( "Square" );

```

### Set Marker Size

**Syntax:** obj &lt;&lt; Set Marker Size( size )

**Description:** Sets the size for the markers. Size options are Dot, Small, Medium, Large, XL, XXL, and XXXL.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

```

### Set Side by Side Overlap

**Syntax:** obj &lt;&lt; Set Side by Side Overlap( proportion or missing )

**Description:** Sets the amount of overlap for subitems in "side by side" bar styles, 0 (no overlap) to 1 (full overlap).

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ), Overlay( :sex ) ),
	Elements( Bar( X, Y ) )
);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Side by Side Overlap( 0.5 );

```

### Set Text Color

**Syntax:** obj &lt;&lt; Set Text Color( color )

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Text Color( "Green" );

```

### Set Text Style

**Syntax:** obj &lt;&lt; Set Text Style( [Left|Center|Right], [Top|VCenter|Baseline|Bottom], [Erased], [Boxed] )

**Description:** Sets how the text is drawn with respect to the cursor pen. When supported, "Erased" fills the bounding box of the text and "Erased" outlines it. If not specified, the default horizontal alignment is "Left" and vertical is "Baseline".

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 3 ) ), Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) ) )
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( “Text Seg” ));
seg << Set Text Style( {Center, VCenter} );

```

### Set Transparency

**Syntax:** obj &lt;&lt; Set Transparency( number )

**Description:** Sets the shape transparency. The argument should be a numeric value between 0 and 1.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Transparency( .3 );

```

### Set Width Proportion

**Syntax:** obj &lt;&lt; Set Width Proportion( proportion )

**Description:** Sets the proportion of the available bar width to use for drawing. 0 means automatic sizes. 1 means no gap.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Bar( X, Y ) ) );
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Width Proportion( 1 );

```

### Sib

**Syntax:** seg2 = obj &lt;&lt; Sib

**Description:** Returns the sibling of the display seg.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Sib;

```

### Sib Append

**Syntax:** obj &lt;&lt; Sib Append( seg2 )

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

**Syntax:** obj &lt;&lt; Sib Prepend( seg2 )

**Description:** Adds a display seg immediately before the display seg.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
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

### Text Color

**Syntax:** obj &lt;&lt; Text Color( color )

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Text Color( "Green" );

```

### Text Style

**Syntax:** obj &lt;&lt; Text Style( [Left|Center|Right], [Top|VCenter|Baseline|Bottom], [Erased], [Boxed] )

**Description:** Sets how the text is drawn with respect to the cursor pen. When supported, "Erased" fills the bounding box of the text and "Erased" outlines it. If not specified, the default horizontal alignment is "Left" and vertical is "Baseline".

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 3 ) ), Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) ) )
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( “Text Seg” ));
seg << Set Text Style( {Center, VCenter} );

```

### Transparency

**Syntax:** obj &lt;&lt; Transparency( number )

**Description:** Sets the shape transparency. The argument should be a numeric value between 0 and 1.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Transparency( .3 );

```

## Shared Item Messages

### Enabled

**Syntax:** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

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

**Syntax:** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

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

**Syntax:** obj &lt;&lt; Get Namespace

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

**Syntax:** obj &lt;&lt; Get Properties

**Description:** Returns an associative array that contains the display box&apos;s properties and their values.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**Syntax:** obj &lt;&lt; Get Property( "property" )

**Description:** Returns the current setting for the named property.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**Syntax:** obj &lt;&lt; Get Property List

**Description:** Returns a list of properties the display box has.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Set Property

**Syntax:** obj &lt;&lt; Set Property( "property", value )

**Description:** Sets the value for the named property for the display box.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

