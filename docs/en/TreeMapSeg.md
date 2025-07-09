# TreeMapSeg



### Child

**Syntax:** seg2 = obj << Child

**Description:** Returns the first child of the display seg.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Child; // not many segs support children

```

### Class Name

**Syntax:** classname = obj << Class Name

**Description:** Returns the name of the display class for the display seg.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Class Name;

```

### Clip Shape

**Syntax:** seg << Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**Description:** Clips the geometry by the given shape. The shape can be specified using a shape file or a path. An optional ID can be specified with a shape file to select a single shape from the file, otherwise the union of all shapes is used as the clipping region. A clipping path can be specified with an N x 3 matrix or with a text representation. A path matrix has three columns for x, y, and flags for each point in the path. The flag values are 0 for control, 1 for move, 2 for line segment, 3 for cubic Bézier segment, and are negative if the point also closes the path. Path text supports SVG syntax.

**JMP Version Added:** 14

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

### Color Theme

**Syntax:** obj << Color Theme

### Delete

**Syntax:** obj << Delete

**Description:** Delete the display seg.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Delete;

```

### Density Gradient

**Syntax:** obj << Density Gradient( "Fade to White"|"Fade To Gray"|"Full Color"="Fade to White" )

**Description:** Sets the coloring behavior of density gradients. "Fade to White" by default.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Density Gradient( "Fade to Gray" );

```

### Enabled

**Syntax:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Description:** An object that is not enabled will not respond to keyboard or mouse input. This property is inherited by child objects, so a container object that is disabled will cause all descendent objects to be disabled.

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

### Error Bar Cap

**Syntax:** obj << Error Bar Cap( "None"|"Tiny"|"Small"|"Medium"|"Large" )

**Description:** Specifies what type of end cap to put on error bars.

**JMP Version Added:** 14

```js

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

**JMP Version Added:** 18

```js

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

**Syntax:** obj << Fill Color( color )

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Fill Color( "Green" );

```

### First Value

**Syntax:** obj << First Value( state=0|1 )

**JMP Version Added:** 16

### Frame

**Syntax:** FrameBox = obj << Frame

**Description:** Returns the frame box that the display seg is in.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Frame;

```

### Frame Size

**Syntax:** obj << Frame Size( width,height )

**Description:** Sets the frame size of the TreeMapBox.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
tm = Treemap( Categories( :city ), Sizes( :POP ) );
tmr = tm << report;
treemapGBPref = Get Platform Preference( treemap( "Use Graph Builder" ) );
prefVal = Arg( Arg( Arg( treemapGBPref, 1 ) ) );
Show( prefVal );
tmbox = If( prefVal == 1,
	tmr[FrameBox( 1 )],
	tmr[Treemap Box( 1 )]
);
tmbox << Frame Size( 200, 200 );

```

### Get Base Font

**Syntax:** font = obj << Get Base Font

**Description:** Returns the base font used for text drawn by the box. Base fonts are predefined names such as Title, Text, Annotation, and others, which are specified in the Preferences for fonts.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Get Base Font;

```

### Get Clip Shape

**Syntax:** obj << Get Clip Shape

**Description:** Returns the current clipping shape

**JMP Version Added:** 14

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

### Get Density Gradient

**Syntax:** obj << Get Density Gradient

**Description:** Gets the coloring behavior of density gradients.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Density Gradient;

```

### Get Description

**Syntax:** description = obj << Get Description

**Description:** Gets the description for the display seg.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << get description();

```

### Get Enabled

**Syntax:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Description:** An object that is not enabled will not respond to keyboard or mouse input. This property is inherited by child objects, so a container object that is disabled will cause all descendent objects to be disabled.

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

### Get Error Bar Cap

**Syntax:** obj << Get Error Bar Cap

**Description:** Returns the current kind of error bar end cap.

**JMP Version Added:** 14

```js

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

**JMP Version Added:** 18

```js

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

**Syntax:** color = obj << Get Fill Color

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Fill Color;

```

### Get Fill Pattern

**Syntax:** obj << Get Fill Pattern

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Fill Pattern;

```

### Get Font

**Syntax:** obj << Get Font

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Get Font;

```

### Get Font Name

**Syntax:** obj << Get Font Name

**Description:** Returns the name of the font.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font Name( "Times New Roman" );
fontobj << Get Font Name;

```

### Get Font Scale

**Syntax:** obj << Get Font Scale

**Description:** Returns the current scale factor for font.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Get Font Scale;

```

### Get Font Size

**Syntax:** obj << Get Font Size

**Description:** Returns the size of the font.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Get Font Size;

```

### Get Font Style

**Syntax:** obj << Get Font Style

**Description:** Returns the font style name.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font Name( "Arial" );
fontobj << Set Font Style( "Italic" );
fontobj << Get Font Style;

```

### Get Gradient

**Syntax:** obj << Get Gradient

**Description:** Gets the coloring gradient.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient;

```

### Get Gradient Color Theme

**Syntax:** obj << Get Gradient Color Theme

**Description:** Gets the gradient&apos;s color theme.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**Syntax:** obj << Get Gradient Discrete Colors

**Description:** Gets if each level in a gradient should be a single color or if colors should transition smoothly.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Discrete Colors;

```

### Get Gradient Fill

**Syntax:** obj << Get Gradient Fill

**Description:** Gets the coloring behavior for values outside of the range of the gradient&apos;s scale.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Fill;

```

### Get Gradient Label Count

**Syntax:** obj << Get Gradient Label Count

**Description:** Gets the number of labels in a gradient&apos;s legend.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Label Count;

```

### Get Gradient Label Levels

**Syntax:** [value1,value1, ... value N] = obj << Get Gradient Label Levels

**Description:** Gets the set of values used for labels in the gradient&apos;s scale.

**JMP Version Added:** 18

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Legend Horizontal

**Syntax:** obj << Get Gradient Legend Horizontal

**Description:** Gets if the gradient&apos;s legend should be drawn horizontally.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**Syntax:** obj << Get Gradient Legend Label Format

**Description:** Gets the format for gradient legend labels

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**Syntax:** obj << Get Gradient Legend Label Width

**Description:** Gets the maximum character length of gradient legend labels.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**Syntax:** obj << Get Gradient Legend Show Labels

**Description:** Gets if the level labels should be shown in the gradient&apos;s legend.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**Syntax:** obj << Get Gradient Level Count

**Description:** Gets the number of levels in a gradient.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**Syntax:** obj << Get Gradient Lightness Range

**Description:** Gets the minimum and maximum lightness for level colors in a gradient. Missing values indicate that the color theme&apos;s original value is used.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Lightness Range;

```

### Get Gradient Range

**Syntax:** obj << Get Gradient Range

**Description:** Gets the range over which non-custom gradient scales are generated.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Range;

```

### Get Gradient Reverse Color Order

**Syntax:** obj << Get Gradient Reverse Color Order

**Description:** Gets if the order of colors in a gradient is reversed.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**Syntax:** obj << Get Gradient Reverse Label Order

**Description:** Gets if the order of labels in a gradient is reversed.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Reverse Label Order;

```

### Get Gradient Scale

**Syntax:** obj << Get Gradient Scale

**Description:** Gets the gradient scale type.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale;

```

### Get Gradient Scale Values

**Syntax:** [value1,value1, ... value N] = obj << Get Gradient Scale Values

**Description:** Gets the set of values used for labels in the gradient&apos;s scale.

**JMP Version Added:** 18

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Show Missing

**Syntax:** obj << Get Gradient Show Missing

**Description:** Gets when to show the legend entry for missing values.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**Syntax:** obj << Get Gradient Transparency

**Description:** Gets the transparency behavior of gradients.

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Transparency;

```

### Get Group Label Border Color

**Syntax:** color = obj << Get Group Label Border Color

**Description:** Gets the floating group label border color.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Group Label Border Color();

```

### Get Group Label Color

**Syntax:** color = obj << Get Group Label Color

**Description:** Gets the floating group label fill color.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Group Label Color();

```

### Get Group Label Font

**Syntax:** font = obj << Get Group Label Font

**Description:** Gets the group label font.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Group Label Font();

```

### Get Group Label Font Color

**Syntax:** color = obj << Get Group Label Font Color

**Description:** Gets the group label font color.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Group Label Font Color();

```

### Get Group Spacing

**Syntax:** obj << Get Group Spacing

**Description:** Returns the amount of space around group tiles.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Group Spacing();

```

### Get Interval Draw Directions

**Syntax:** obj << Get Interval Draw Directions

**Description:** Gets the directions in which intervals should be drawn.

**JMP Version Added:** 17

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Line Color;

```

### Get Line Style

**Syntax:** pen style = obj << Get Line Style

**Description:** Returns the style of the lines.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Line Style;

```

### Get Line Width

**Syntax:** number = obj << Get Line Width

**Description:** Returns the width of the lines.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Line Width;

```

### Get Marker

**Syntax:** marker = obj << Get Marker

**Description:** Returns the marker style.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Marker;

```

### Get Marker Size

**Syntax:** size = obj << Get Marker Size

**Description:** Returns the size of the markers.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Marker Size;

```

### Get Namespace

**Syntax:** obj << Get Namespace

**Description:** Returns the namespace associated with this display object.

```js

Names Default To Here( 1 );
//This message applies to all display objects
x = 1;
w = New Window( "Test", b = Button Box( "Press me" ) );
b:x = 2;
ns = b << GetNamespace();
Show( ns:x, x );

```

### Get Orientation Bias

**Syntax:** bias = obj << Get Orientation Bias

**Description:** Gets the relative preference of horizontal vs. vertical area splitting.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SATByYear.jmp" );
gb = Graph Builder(
	Variables( X( :State ), Size( :Population ) ),
	Elements( Treemap( X ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Orientation Bias();

```

### Get Properties

**Syntax:** obj << Get Properties

**Description:** Returns an associative array that contains the display box&apos;s properties and their values.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**Syntax:** obj << Get Property( "property" )

**Description:** Returns the current setting for the named property.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**Syntax:** obj << Get Property List

**Description:** Returns a list of properties the display box has.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Get Text Color

**Syntax:** obj << Get Text Color

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Text Color;

```

### Get Text Style

**Syntax:** obj << Get Text Style

**Description:** Gets how the text is drawn with respect to the cursor pen.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements(
		Points( X, Y, Legend( 3 ) ),
		Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) )
	)
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( “Text Seg” ));
seg << Get Text Style;

```

### Get Transparency

**Syntax:** obj << Get Transparency

**Description:** Returns a numeric value representing transparency between 0 (clear) and 1 (opaque).

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Transparency;

```

### Gradient

**Syntax:** obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <Contour Levels(num)>, <Reverse Gradient(0|1)>, <Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")>, <Gradient Transparency("None"|"Linear")> }

obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <N Labels(num)>, <Show Missing Color("On"|"Off"|"Auto")>, <Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")>, <Scale Values([v1, v2, …])>, <Range Type("Default"|"Exact Data Range"|"Middle 90%")>, <Fill("Between"|"Above"|"Below"|"Above Below")>, <Reverse Gradient(0|1)>, <Reverse Labels(0|1)>, <Discrete Color(0|1)> }, <Label Format(labelFormat)>, <Width(num)>, <Horizontal(0|1)>, <Show Labels(0|1)>

**Description:** Sets the coloring gradient.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**Syntax:** obj << Gradient Color Theme

**Description:** Sets the gradient&apos;s color theme.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Gradient Discrete Colors

**Syntax:** obj << Gradient Discrete Colors

**Description:** Sets if each level in a gradient should be a single color or if colors should transition smoothly.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Points( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Gradient Fill

**Syntax:** obj << Gradient Fill( "Between"|"Above"|"Below"|"Above Below"="Above Below" )

**Description:** Sets the coloring behavior for values outside of the range of the gradient&apos;s scale. "Above Below" by default.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Gradient Label Count

**Syntax:** obj << Gradient Label Count

**Description:** Sets the number of labels in a gradient&apos;s legend. This is one more than the number of contour levels.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Label Count( 8 );

```

### Gradient Label Levels

**Syntax:** obj << Gradient Label Levels( [value1,value1, ... value N] )

**Description:** Sets a custom set of values for use in the gradient&apos;s scale.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Legend Horizontal

**Syntax:** obj << Gradient Legend Horizontal

**Description:** Sets if the gradient&apos;s legend should be drawn horizontally.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**Syntax:** obj << Gradient Legend Label Format

**Description:** Sets the format for gradient legend labels

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**Syntax:** obj << Gradient Legend Label Width

**Description:** Sets the maximum character length of gradient legend labels.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**Syntax:** obj << Gradient Legend Show Labels

**Description:** Sets if the level labels should be shown in the gradient&apos;s legend.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**Syntax:** obj << Gradient Level Count

**Description:** Sets the number of levels in a gradient. This is one less than the number of labels.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**Syntax:** obj << Gradient Lightness Range

**Description:** Sets the minimum and maximum lightness for level colors in a gradient. The colors will be scaled to cover this range. A missing value is treated as no change.

**JMP Version Added:** 18

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Example 3**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Gradient Range

**Syntax:** obj << Gradient Range( "Default"|"Exact Data Range"|"Middle 90%"="Default" )

**Description:** Sets the range over which non-custom gradient scales are generated. "Default" by default.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Gradient Reverse Color Order

**Syntax:** obj << Gradient Reverse Color Order

**Description:** Reverses the order of the colors in a gradient.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**Syntax:** obj << Gradient Reverse Label Order

**Description:** Reverses the order of the labels in a gradient.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Reverse Label Order( 1 );

```

### Gradient Scale

**Syntax:** obj << Gradient Scale( "Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom"="Linear" )

**Description:** Sets the gradient scale type. "Linear" by default.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Gradient Scale Values

**Syntax:** obj << Gradient Scale Values( [value1,value1, ... value N] )

**Description:** Sets a custom set of values for use in the gradient&apos;s scale.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Show Missing

**Syntax:** obj << Gradient Show Missing( "Auto"|"On"|"Off"="Auto" )

**Description:** Sets when to show the legend entry for missing values. "Auto" by default.

**JMP Version Added:** 18

```js

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

**JMP Version Added:** 15

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Gradient Transparency( "None" );

```

### Group Label Background

**Syntax:** obj << Group Label Background( transparency )

**Description:** Sets the transparency of the background for group labels.

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Animals.jmp" );
gb = Graph Builder(
	Variables( X( :season ), X( :species, Position( 1 ) ), Color( :miles ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 8 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( Treemap Seg( 1 ) ));
seg << Group Label Background( 0.4 );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
tm = Treemap( Categories( :city, :State ), Sizes( :POP ) );
tmr = tm << report;
treemapGBPref = Get Platform Preference( treemap( "Use Graph Builder" ) );
prefVal = Arg( Arg( Arg( treemapGBPref, 1 ) ) );
If( prefVal == 1,
	tmr << Dispatch( {}, "Graph Builder", FrameBox,
		{DispatchSeg( Treemap Seg( 1 ), {Group Label Background( 1 )} )}
	),
	tmbox = tmr[Treemap Box( 1 )];
	tmbox << Group Label Background( 1 );
);

```

### Ignore Group Hierarchy

**Syntax:** obj << Ignore Group Hierarchy( state=0|1 )

**Description:** If more than one category is specified, the categories are grouped.  If this message is enabled, the group hierarchy is ignored.

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Animals.jmp" );
gb = Graph Builder(
	Variables( X( :season ), X( :species, Position( 1 ) ), Color( :miles ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 8 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( Treemap Seg( 1 ) ));
seg << Ignore Group Hierarchy( 1 );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
tm = Treemap( Categories( :city, :State ), Sizes( :POP ) );
tmr = tm << report;
treemapGBPref = Get Platform Preference( treemap( "Use Graph Builder" ) );
prefVal = Arg( Arg( Arg( treemapGBPref, 1 ) ) );
If( prefVal == 1,
	tmr << Dispatch( {}, "Graph Builder", FrameBox,
		{DispatchSeg( Treemap Seg( 1 ), {Ignore Group Hierarchy( 1 )} )}
	),
	tmbox = tmr[Treemap Box( 1 )];
	tmbox << Ignore Group Hierarchy( 1 );
);

```

### Last Value

**Syntax:** obj << Last Value( state=0|1 )

**JMP Version Added:** 16

### Line Color

**Syntax:** obj << Line Color( color )

**Description:** Set the color for all lines in the display seg.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Line Color( "Green" );

```

### Line Style

**Syntax:** obj << Line Style( pen style )

**Description:** Sets the style of the lines. Options are Solid, Dotted, Dashed, DashDot, and DashDotDot.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Line Style( "Dotted" );

```

### Line Width

**Syntax:** obj << Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Other..." )

**Description:** Sets the width of the lines.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Line Width( 3 );

```

### Marker

**Syntax:** obj << Marker( marker )

**Description:** Sets the marker style for all markers.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Marker( "Square" );

```

### Marker Size

**Syntax:** obj << Marker Size( size )

**Description:** Sets the size for the markers. Size options are Dot, Small, Medium, Large, XL, XXL, and XXXL.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

```

### Max Value

**Syntax:** obj << Max Value( state=0|1 )

**JMP Version Added:** 16

### Min Value

**Syntax:** obj << Min Value( state=0|1 )

**JMP Version Added:** 16

### Name

**Syntax:** obj << Name( state=0|1 )

**JMP Version Added:** 16

### Parent

**Syntax:** seg2 = obj << Parent

**Description:** Returns the parent of the display seg.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Parent;

```

### Revert

**Syntax:** obj << Revert

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Revert;

```

### Set Base Font

**Syntax:** obj << Set Base Font( "Text"|"Heading"|"Title"|"Small"|"Mono"|"Formula Editor"|"Annotation"|"Axis"|"Marker"|"Axis Title"|"Graph Label"|"Legend"|"Graph Title"|"Caption"|"Data Table"|"Hover Label" )

**Description:** Sets the base font for text drawn by the box.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
Wait( 2 );
fontobj << Set Base Font( "Title" );

```

### Set Description

**Syntax:** obj << Set Description( description )

**Description:** Sets the description for the display seg.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << set description( "my seg" );

```

### Set Error Bar Cap

**Syntax:** obj << Set Error Bar Cap( "None"|"Tiny"|"Small"|"Medium"|"Large" )

**Description:** Specifies what type of end cap to put on error bars.

**JMP Version Added:** 14

```js

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

**JMP Version Added:** 18

```js

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

**Syntax:** obj << Set Fill Color( color )

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Fill Color( "Green" );

```

### Set Fill Pattern

**Syntax:** obj << Set Fill Pattern

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Fill Pattern( "h wave medium" );

```

### Set Font

**Syntax:** obj << Set Font( fontName, <size>, <"bold italic underline strikeout">, <angle> )

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font( "Arial Black" );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font( "Arial Black", 12, "Italic Underline" );

```

### Set Font Name

**Syntax:** obj << Set Font Name( fontname )

**Description:** Sets the font for text strings.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font Name( "Arial Black" );

```

### Set Font Scale

**Syntax:** obj << Set Font Scale( f )

**Description:** Sets a scale factor for the current font. The scale factor will be applied to the size that is determined from the base font and point size.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
Wait( 2 );
fontobj << Set Font Scale( 2.0 );

```

### Set Font Size

**Syntax:** obj << Set Font Size( n )

**Description:** Sets the font size in points for text strings.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font Size( 14 );

```

### Set Font Style

**Syntax:** obj << Set Font Style( style )

**Description:** Sets the font style for text strings. To set more than one style at once, place them in the same string, separated by spaces (see Example 2 below).

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font Style( "Italic" );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font Style( "Italic Bold Underline" );

```

### Set Gradient

**Syntax:** obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <Contour Levels(num)>, <Reverse Gradient(0|1)>, <Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")>, <Gradient Transparency("None"|"Linear")> }

obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <N Labels(num)>, <Show Missing Color("On"|"Off"|"Auto")>, <Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")>, <Scale Values([v1, v2, …])>, <Range Type("Default"|"Exact Data Range"|"Middle 90%")>, <Fill("Between"|"Above"|"Below"|"Above Below")>, <Reverse Gradient(0|1)>, <Reverse Labels(0|1)>, <Discrete Color(0|1)> }, <Label Format(labelFormat)>, <Width(num)>, <Horizontal(0|1)>, <Show Labels(0|1)>

**Description:** Sets the coloring gradient.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**Syntax:** obj << Set Gradient Color Theme

**Description:** Sets the gradient&apos;s color theme.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**Syntax:** obj << Set Gradient Custom Scale

**Description:** Sets the gradient to use a list of values for a custom scale.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Custom Scale( {0.0, 5.0, 10.0, 20.0} );

```

### Set Gradient Discrete Colors

**Syntax:** obj << Set Gradient Discrete Colors

**Description:** Sets if each level in a gradient should be a single color or if colors should transition smoothly.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Points( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Set Gradient Fill

**Syntax:** obj << Set Gradient Fill( "Between"|"Above"|"Below"|"Above Below"="Above Below" )

**Description:** Sets the coloring behavior for values outside of the range of the gradient&apos;s scale. "Above Below" by default.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Set Gradient Label Count

**Syntax:** obj << Set Gradient Label Count

**Description:** Sets the number of labels in a gradient&apos;s legend. This is one more than the number of contour levels.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Label Count( 8 );

```

### Set Gradient Label Levels

**Syntax:** obj << Set Gradient Label Levels( [value1,value1, ... value N] )

**Description:** Sets a custom set of values for use in the gradient&apos;s scale.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Legend Horizontal

**Syntax:** obj << Set Gradient Legend Horizontal

**Description:** Sets if the gradient&apos;s legend should be drawn horizontally.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**Syntax:** obj << Set Gradient Legend Label Format

**Description:** Sets the format for gradient legend labels

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**Syntax:** obj << Set Gradient Legend Label Width

**Description:** Sets the maximum character length of gradient legend labels.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**Syntax:** obj << Set Gradient Legend Show Labels

**Description:** Sets if the level labels should be shown in the gradient&apos;s legend.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**Syntax:** obj << Set Gradient Level Count

**Description:** Sets the number of levels in a gradient. This is one less than the number of labels.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**Syntax:** obj << Set Gradient Lightness Range

**Description:** Sets the minimum and maximum lightness for level colors in a gradient. The colors will be scaled to cover this range. A missing value is treated as no change.

**JMP Version Added:** 18

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Example 3**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Set Gradient Range

**Syntax:** obj << Set Gradient Range( "Default"|"Exact Data Range"|"Middle 90%"="Default" )

**Description:** Sets the range over which non-custom gradient scales are generated. "Default" by default.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Set Gradient Reverse Color Order

**Syntax:** obj << Set Gradient Reverse Color Order

**Description:** Reverses the order of the colors in a gradient.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**Syntax:** obj << Set Gradient Reverse Label Order

**Description:** Reverses the order of the labels in a gradient.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Reverse Label Order( 1 );

```

### Set Gradient Scale

**Syntax:** obj << Set Gradient Scale( "Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom"="Linear" )

**Description:** Sets the gradient scale type. "Linear" by default.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Set Gradient Scale Values

**Syntax:** obj << Set Gradient Scale Values( [value1,value1, ... value N] )

**Description:** Sets a custom set of values for use in the gradient&apos;s scale.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder(
	Variables( X( :X ), Y( :Y ), Color( :Z ) ),
	Elements( Contour( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Show Missing

**Syntax:** obj << Set Gradient Show Missing( "Auto"|"On"|"Off"="Auto" )

**Description:** Sets when to show the legend entry for missing values. "Auto" by default.

**JMP Version Added:** 18

```js

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

### Set Group Label Border Color

**Syntax:** obj << Set Group Label Border Color( color )

**Description:** Sets the floating group label border color.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Group Label Border Color( "Blue" );

```

### Set Group Label Color

**Syntax:** obj << Set Group Label Color( color )

**Description:** Sets the floating group label fill color.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Group Label Color( "Blue" );

```

### Set Group Label Font

**Syntax:** obj << Set Group Label Font( <label position> fontName, <size>, <"bold italic underline strikeout">, <angle>; <label position>, <Font(fontName)>, <Size(size)>, <Style("bold italic underline strikeout")>, <Angle(angle)> )

**Description:** Sets the group label font. If a label position is specified, the font is only applied if group labels use that position.

**JMP Version Added:** 17

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Group Label Font( "Arial Black", 16 );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Group Label Font( "Floating", Size( 24 ) );

```

### Set Group Label Font Color

**Syntax:** obj << Set Group Label Font Color( color )

**Description:** Sets the group label font color.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Group Label Font Color( "Blue" );

```

### Set Group Spacing

**Syntax:** obj << Set Group Spacing( spacing=1 )

**Description:** Sets the amount of space around group tiles. "1" by default.

**JMP Version Added:** 16

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Group Spacing( 5 );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{DispatchSeg( TreeMapSeg( 1 ), Set Group Spacing( 4 ) )}
		)
	)
);

```

### Set Interval Draw Directions

**Syntax:** obj << Set Interval Draw Directions( Both|Upper|Lower|None )

**Description:** Sets the directions in which intervals should be drawn.

**JMP Version Added:** 17

```js

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

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Line Color( "Green" );

```

### Set Line Style

**Syntax:** obj << Set Line Style( pen style )

**Description:** Sets the style of the lines. Options are Solid, Dotted, Dashed, DashDot, and DashDotDot.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Line Style( "Dotted" );

```

### Set Line Width

**Syntax:** obj << Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Other..." )

**Description:** Sets the width of the lines.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Line Width( 3 );

```

### Set Marker

**Syntax:** obj << Set Marker( marker )

**Description:** Sets the marker style for all markers.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Marker( "Square" );

```

### Set Marker Size

**Syntax:** obj << Set Marker Size( size )

**Description:** Sets the size for the markers. Size options are Dot, Small, Medium, Large, XL, XXL, and XXXL.

**JMP Version Added:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

```

### Set Orientation Bias

**Syntax:** obj << Set Orientation Bias( bias )

**Description:** Sets the relative preference of horizontal vs. vertical area splitting. The argument should be a number between -1 and 1.

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SATByYear.jmp" );
gb = Graph Builder(
	Variables( X( :State ), Size( :Population ) ),
	Elements( Treemap( X ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Orientation Bias( 0.5 );

```

### Set Property

**Syntax:** obj << Set Property( "property", value )

**Description:** Sets the value for the named property for the display box.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Set Text Color

**Syntax:** obj << Set Text Color( color )

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Text Color( "Green" );

```

### Set Text Style

**Syntax:** obj << Set Text Style( [Left|Center|Right], [Top|VCenter|Baseline|Bottom], [Erased], [Boxed] )

**Description:** Sets how the text is drawn with respect to the cursor pen. When supported, "Erased" fills the bounding box of the text and "Erased" outlines it. If not specified, the default horizontal alignment is "Left" and vertical is "Baseline".

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements(
		Points( X, Y, Legend( 3 ) ),
		Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) )
	)
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( “Text Seg” ));
seg << Set Text Style( {Center, VCenter} );

```

### Set Transparency

**Syntax:** obj << Set Transparency( number )

**Description:** Sets the shape transparency. The argument should be a numeric value between 0 and 1.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Transparency( .3 );

```

### Show Category Name

**Syntax:** obj << Show Category Name( state=0|1 )

### Show Group Labels

**Syntax:** obj << Show Group Labels( state=0|1 )

**Description:** If disabled, group labels are not shown. On by default.

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Animals.jmp" );
gb = Graph Builder(
	Variables( X( :season ), X( :species, Position( 1 ) ), Color( :miles ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 8 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( Treemap Seg( 1 ) ));
seg << Show Group Labels( 0 );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
tm = Treemap( Categories( :city, :State ), Sizes( :POP ) );
tmr = tm << report;
treemapGBPref = Get Platform Preference( treemap( "Use Graph Builder" ) );
prefVal = Arg( Arg( Arg( treemapGBPref, 1 ) ) );
If( prefVal == 1,
	tmr << Dispatch( {}, "Graph Builder", FrameBox,
		{DispatchSeg( Treemap Seg( 1 ), {Show Group Labels( 0 )} )}
	),
	tmbox = tmr[Treemap Box( 1 )];
	tmbox << Show Group Labels( 0 );
);

```

### Show Group Name

**Syntax:** obj << Show Group Name( state=0|1 )

### Show Labels

**Syntax:** obj << Show Labels( state=0|1 )

**Description:** If disabled, labels are not shown. On by default.

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Animals.jmp" );
gb = Graph Builder(
	Variables( X( :season ), X( :species, Position( 1 ) ), Color( :miles ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 8 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( Treemap Seg( 1 ) ));
seg << Show Labels( 0 );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
tm = Treemap( Categories( :city, :State ), Sizes( :POP ) );
tmr = tm << report;
treemapGBPref = Get Platform Preference( treemap( "Use Graph Builder" ) );
prefVal = Arg( Arg( Arg( treemapGBPref, 1 ) ) );
If( prefVal == 1,
	tmr << Dispatch( {}, "Graph Builder", FrameBox,
		{DispatchSeg( Treemap Seg( 1 ), {Show Labels( 0 )} )}
	),
	tmbox = tmr[Treemap Box( 1 )];
	tmbox << Show Labels( 0 );
);

```

### Sib

**Syntax:** seg2 = obj << Sib

**Description:** Returns the sibling of the display seg.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Sib;

```

### Sib Append

**Syntax:** obj << Sib Append( seg2 )

**Description:** Adds a display seg immediately after the display seg.

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

**Description:** Adds a display seg immediately before the display seg.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
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

### Suppress Box Frames

**Syntax:** obj << Suppress Box Frames( state=0|1 )

**Description:** If enabled, the box frames are not shown.

**Example 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Animals.jmp" );
gb = Graph Builder(
	Variables( X( :season ), X( :species, Position( 1 ) ), Color( :miles ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 8 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( Treemap Seg( 1 ) ));
seg << Suppress Box Frames( 1 );

```

**Example 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
tm = Treemap( Categories( :city ), Sizes( :POP ) );
tmr = tm << report;
treemapGBPref = Get Platform Preference( treemap( "Use Graph Builder" ) );
prefVal = Arg( Arg( Arg( treemapGBPref, 1 ) ) );
If( prefVal == 1,
	tmr << Dispatch( {}, "Graph Builder", FrameBox,
		{DispatchSeg( Treemap Seg( 1 ), {Suppress Box Frames( 1 )} )}
	),
	tmbox = tmr[Treemap Box( 1 )];
	tmbox << Suppress Box Frames( 1 );
);

```

### Text Color

**Syntax:** obj << Text Color( color )

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Text Color( "Green" );

```

### Text Style

**Syntax:** obj << Text Style( [Left|Center|Right], [Top|VCenter|Baseline|Bottom], [Erased], [Boxed] )

**Description:** Sets how the text is drawn with respect to the cursor pen. When supported, "Erased" fills the bounding box of the text and "Erased" outlines it. If not specified, the default horizontal alignment is "Left" and vertical is "Baseline".

**JMP Version Added:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements(
		Points( X, Y, Legend( 3 ) ),
		Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) )
	)
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( “Text Seg” ));
seg << Set Text Style( {Center, VCenter} );

```

### Transparency

**Syntax:** obj << Transparency( number )

**Description:** Sets the shape transparency. The argument should be a numeric value between 0 and 1.

**JMP Version Added:** 16

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Transparency( .3 );

```

### Treemap

**Syntax:** Treemap

**Description:** Shows a response summarized by many categories.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));

```

