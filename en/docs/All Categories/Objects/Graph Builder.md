# Graph Builder



## Associated Constructors

### Graph Builder

**Syntax:** Graph Builder( Variables( X(column ), Y( column ), <Group X( column )>, <Group Y( column )>, <Shape( column )>, <Color( column )>, <Overlay( column )>, <Freq( column )> ), <Elements(...)> ) )

**Description:** Provides an interactive graphical interface that enables you to explore your data. You can drag columns into graph zones to create a variety of graphs including scatterplots, contour plots, bar charts, area charts, box plots, histograms, heat maps, pie charts, treemaps, mosaic plots, and maps.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);

```

## Item Messages

### Add Element

**Syntax:** obj << Add Element( xposition, yposition, {Type(element name), X(i=1), Y(i=1), options...} )

**Description:** Adds a new graph element at the given X and Y positions. The element specification includes the element name, which data roles it uses its option values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 0.5 );
gb << Add Element( 1, 1, {Type( "Line Of Fit" ), X, Y, Degree( "Quadratic" )} );

```

### Add Variable

**Syntax:** obj << Add Variable( {column, Role(role), Position(p=1), Inner Position(i=1)}, < <<Method("insert"|"merge"|"replace")> )

**Description:** Adds a new variable to the Graph Builder model, with a given role and position.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 0.5 );
gb << Add Variable( {:age, Role( "Wrap" )} );

```

### Auto Stretching

**Syntax:** obj << Auto Stretching( state=0|1 )

**Description:** Toggles the automatic stretching of the graph with the containing window. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Auto Stretching( 0 );

```

### Back Color

**Syntax:** obj << Back Color( color )

**Description:** Sets the color for the entire background around the graph.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Back Color( "Yellow" );

```

### Categorical Color Theme

**Syntax:** obj << Categorical Color Theme

**Description:** Sets the color theme used for categories.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Categorical Color Theme( "Pastel" );

```

### Continuous Color Theme

**Syntax:** obj << Continuous Color Theme

**Description:** Sets the color theme used for gradients.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Continuous Color Theme( "White to Black" );

```

### Done

**Syntax:** obj << Done

**Description:** Hides the control panel and turns off any row sampling.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Done;

```

### Elements

**Syntax:** Elements( Points( X, Y )| Box plot( X, Y, Jitter( state=0|1 ), Outliers( state=0|1 ), Box Style( "Outlier"|"Quantile" ) )|Line( X, Y, Row Order( number ), Summary Statistic( ) )| Histogram( X, Y)| Bar( X, Y, Bar Style(), Summary Statistic() )| Contour(X, Y)| Smoother(X, Y)|Map Shapes(Summary Statistic() ))

**Description:** Identifies the elements of the visualization.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
gb = dt << Graph Builder(
	Variables( X( :"F Rate 0-19"n ), Y( :Region ) ),
	Elements( Box Plot( X, Y ), Line( X, Y, Summary Statistic( "Mean" ) ) )
);

```

### Error Bar Offset

**Syntax:** obj << Error Bar Offset

**Description:** Opens a dialog to set the offset for error bars.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 1 );
gb << Error Bar Offset( 0.01 );

```

### Extend Axis to Zero

**Syntax:** obj << Extend Axis to Zero( multiplier=1 )

**Description:** Multiplier for the amount an axis scale is extended to include zero. "1" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Extend Axis to Zero( 10 ),
	Variables( X( :Weight ), Y( :Height ) ),
	Elements( Line( X, Y ) )
);

```

### Extend Dual Axes to Zero

**Syntax:** obj << Extend Dual Axes to Zero( multiplier=2 )

**Description:** Multiplier for the amount an axis scale is extended to include zero when there are both left and right axes. "2" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Size( 513, 465 ),
	Extend Dual Axes to Zero( 10 ),
	Variables( X( :age ), Y( :weight, Side( "Right" ) ), Y( :height, Position( 1 ) ) ),
	Elements( Line( X, Y( 2 ) ), Line( X, Y( 1 ) ) )
);

```

### Extend Parallel Y Axes to Zero

**Syntax:** obj << Extend Parallel Y Axes to Zero( multiplier=3 )

**Description:** Multiplier for the amount an axis scale is extended to include zero when in Parallel Y Axes mode. "3" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Parallel Axes( "Y Only" ),
	Extend Parallel Y Axes to Zero( 0 ),
	Variables( X( :age ), Y( :height ), Y( :weight ) ),
	Elements( Position( 1, 1 ), Line( X, Y ) ),
	Elements( Position( 1, 2 ), Line( X, Y ) )
);

```

### Fit to Window

**Syntax:** obj << Fit to Window( "Auto"|"On"|"Off"|"Maintain Aspect Ratio" )

**Description:** Sets the auto stretching behavior of the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Fit to Window( "Off" );

```

### Get Element

**Syntax:** obj << Get Element( xposition, yposition, i )

**Description:** Returns a graph element specifications for the given x and y positions.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Get Element( 1, 1, 1 );

```

### Get Elements

**Syntax:** obj << Get Elements( xposition, yposition )

**Description:** Returns a list of element specifications for the given x and y positions.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Get Elements( 1, 1 );

```

### Get Legend Display

**Syntax:** obj << Get Legend Display

**Description:** Returns the Legend Display Box for the graph that can be queried or modified.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
item << Set Visible( 0 );

```

### Get Legend Server

**Syntax:** obj << Get Legend Server

**Description:** Returns an object holding information used by the Legend Display and corresponding Display Segs in the graph.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Server;
items = lgnd << Get Legend Items;
Show( items );

```

### Get N Elements

**Syntax:** obj << Get N Elements( xposition, yposition )

**Description:** Returns the number of graph elements for the given x and y positions.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Get N Elements( 1, 1 );

```

### Get N Positions

**Syntax:** nrole

**Description:** Returns the number of positions in use for a given role.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Get N Positions( "X" );

```

### Get N Variables

**Syntax:** n = obj << Get N Variables

**Description:** Returns the number of variables in use.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Get N Variables();

```

### Get Variable

**Syntax:** obj << Get Variable( index )

**Description:** Returns a variable specification.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Get Variable( 1 );

```

### Get Variables

**Syntax:** list = obj << Get Variables

**Description:** Returns a list of variable specification lists for the variables in use.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Get Variables();

```

### Graph Spacing

**Syntax:** obj << Graph Spacing( gap=1 )

**Description:** Sets the amount of space between graph panels. "1" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Add Variable( {:age, Role( "Wrap" )} );
gb << Graph Spacing( 3 );

```

### Grid Color

**Syntax:** obj << Grid Color( color )

**Description:** Sets the color for the grid lines on the graph.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Graph Spacing( 5 ),
	Variables( X( :height ), Y( :weight ), Wrap( :age ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Grid Color( "Red" );

```

### Grid Transparency

**Syntax:** obj << Grid Transparency( fraction=1 )

**Description:** Sets the transparency for the grid lines. "1" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Graph Spacing( 5 ),
	Variables( X( :height ), Y( :weight ), Wrap( :age ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Grid Transparency( 0.2 );

```

### Include Missing Categories

**Syntax:** obj << Include Missing Categories( state=0|1 )

**Description:** Treats missing values as a separate level for categorical variables.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
:age[{10, 20, 30}] = .;
gb << Add Variable( {:age, Role( "Wrap" )} );
gb << Include Missing Categories( 1 );

```

### Launch Analysis

**Syntax:** obj << Launch Analysis

**Description:** Launches an analysis using the current variables.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Launch Analysis;

```

### Legend Floating Offset

**Syntax:** obj << Legend Floating Offset

**Description:** Sets the offset in pixels for the legend when the Legend Position is set to "Floating"

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Legend Position( "Inside Floating" );

```

### Legend Position

**Syntax:** obj << Legend Position( "Right"|"Bottom"|"Inside Left"|"Inside Right"|"Inside Bottom Left"|"Inside Bottom Right"|"Inside Floating" )

**Description:** Sets the position of the legend.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Legend Position( "Bottom" );

```

### Legend Settings

**Syntax:** obj << Legend Settings

**Description:** Opens a dialog to modify the properties of the legend.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 1 );
gb << Legend Settings();

```

### Level Fill Color

**Syntax:** obj << Level Fill Color( color )

**Description:** Sets the color for the level names on the graph.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Level Fill Color( {103, 214, 214} );

```

### Level Frame Color

**Syntax:** obj << Level Frame Color( color )

**Description:** Sets the color for the lines around the level names on the graph.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Level Frame Color( "Blue" );

```

### Level Spacing Color

**Syntax:** obj << Level Spacing Color( color )

**Description:** Sets the color of the spacing between level labels.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Level Spacing Color( "Blue" );

```

### Level Spacing Transparency

**Syntax:** obj << Level Spacing Transparency( fraction=1 )

**Description:** Sets the transparency for the spacing between level labels. "1" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Level Spacing Transparency( .2 );

```

### Level Text Color

**Syntax:** obj << Level Text Color( color )

**Description:** Sets the color for the level name text on the graph.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Level Text Color( "Red" );

```

### Level Transparency

**Syntax:** obj << Level Transparency( fraction=1 )

**Description:** Sets the transparency for the level name frame on the graph. "1" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Level Transparency( .2 );

```

### Level Underline

**Syntax:** obj << Level Underline( state=0|1 )

**Description:** Underlines the level names or removes the underline on the graph.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Level Frame Color( "Blue" );
gb << Level Underline( 1 );

```

### Lighten large fills

**Syntax:** obj << Lighten large fills( state=0|1 )

**Description:** Automatically lighten colors for pie, treemap and mosaic elements, which fill large areas. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Lighten large fills( 1 );

```

### Link Page Axes

**Syntax:** obj << Link Page Axes( "None"|"X Only"|"Y Only"|"X and Y" )

**Description:** Sets which axes are linked across page group levels.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Size( 470, 552 ),
	Variables( X( :height ), Y( :weight ), Page( :sex ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Link Page Axes( "Y Only" );

```

### Lock Scales

**Syntax:** obj << Lock Scales( state=0|1 )

**Description:** Locks axis and gradient ranges so they do not change in response to data or filtering changes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Lock Scales( 1 );

```

### Make into Data Table

**Syntax:** obj << Make into Data Table

**Description:** Creates a new data table containing images of graphs.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Make into Data Table;

```

### Order Statistic

**Syntax:** obj << Order Statistic( "N"|"Mean"|"Median"|"Mode"|"Geometric Mean"|"Min"|"Max"|"Range"|"Sum"|"Cumulative Sum"|"Cumulative Percent"|"% of Total"|"% of Factor"|"% of Grand Total"|"Std Dev"|"Variance"|"Std Err"|"CV"|"Interquartile Range"|"Median Absolute Deviation"|"First Quartile"|"Third Quartile"="Mean" )

**Description:** Sets the default order based on a summary statistic used when using the Order By message for a variable in the graph. "Mean" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
gb = dt << Graph Builder(
	Order Statistic( "Max" ),
	Variables( X( :"F Rate 0-19"n ), Y( :Region, Order By( :"F Rate 0-19"n, Ascending ) ) ),
	Elements( Box Plot( X, Y ) )
);

```

### Overlay Auto Line Styles Limit

**Syntax:** obj << Overlay Auto Line Styles Limit( count=6 )

**Description:** Limits the number of overlay levels where the Overlay Encoding will use line styles for its Auto setting in the presence of a color variable. "6" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Overlay Auto Line Styles Limit( 0 ),
	Variables( X( :Weight ), Y( :Height ), Overlay( :sex ), Color( :Age ) ),
	Elements( Line( X, Y ) )
);

```

### Overlay Auto Marker Styles Limit

**Syntax:** obj << Overlay Auto Marker Styles Limit( count=62 )

**Description:** Limits the number of overlay levels where the Overlay Encoding will use marker styles for its Auto setting in the presence of a color variable. "62" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Overlay Auto Marker Styles Limit( 0 ),
	Variables( X( :Weight ), Y( :Height ), Overlay( :sex ), Color( :Age ) ),
	Elements( Points( X, Y ) )
);

```

### Page Count Limit

**Syntax:** obj << Page Count Limit( count=200 )

**Description:** Sets the maximum number of pages created for the page variable, to avoid accidental performance degradation. "200" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Page( :Name ) ),
	Elements( Points( X, Y ) )
);
gb << Page Count Limit( 5 );

```

### Page Gap Size

**Syntax:** obj << Page Gap Size( gap=25 )

**Description:** Sets the amount of space between page groups. "25" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),
	Elements( Smoother( X, Y ) )
);
gb << Page Gap Size( 3 );

```

### Page Level Fill Color

**Syntax:** obj << Page Level Fill Color( color )

**Description:** Sets the color for the level names on the graph.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),
	Elements( Smoother( X, Y ) )
);
gb << Page Level Fill Color( {103, 214, 214} );

```

### Page Level Frame Color

**Syntax:** obj << Page Level Frame Color( color )

**Description:** Sets the color for the lines around the level names on the graph.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),
	Elements( Smoother( X, Y ) )
);
gb << Page Level Frame Color( "Blue" );

```

### Page Level Text Color

**Syntax:** obj << Page Level Text Color( color )

**Description:** Sets the color for the level name text on the graph.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),
	Elements( Smoother( X, Y ) )
);
gb << Page Level Text Color( "Red" );

```

### Page Level Transparency

**Syntax:** obj << Page Level Transparency( fraction=1 )

**Description:** Sets the transparency for the level name frame on the graph. "1" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),
	Elements( Smoother( X, Y ) )
);
gb << Page Level Transparency( .2 );

```

### Page Level Underline

**Syntax:** obj << Page Level Underline( state=0|1 )

**Description:** Underlines the level names or removes the underline on the graph.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),
	Elements( Smoother( X, Y ) )
);
gb << Page Level Frame Color( "Blue" );
gb << Page Level Underline( 1 );

```

### Parallel Axis Merging

**Syntax:** obj << Parallel Axis Merging( "Always"|"Low Similarity"|"Medium Similarity"|"High Similarity"|"Never" )

**Description:** Determines when the automatic Combine Scales setting should choose Parallel Merged instead of Parallel Independent.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Parallel Axis Merging( "Never" );

```

### Parallel Y Axes

**Syntax:** obj << Parallel Y Axes( state=0|1 )

**Description:** All Y axes share the same graph. Like parallel coordinates but supporting an X variable.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :age ), Y( :height ), Y( :weight ) ),
	Elements( Position( 1, 1 ), Points( X, Y ), Smoother( X, Y ) ),
	Elements( Position( 1, 2 ), Points( X, Y ), Smoother( X, Y ) )
);
gb << Parallel Y Axes( 1 );

```

### Random Seed

**Syntax:** obj << Random Seed( number )

**Description:** Sets a specific seed for random jitter.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Sex ), Y( :Height ) ),
	Elements( Points( X, Y, Jitter( "Random Uniform" ) ) )
);
Wait( 1 );
gb << Random Seed( 123456 );

```

### Relative Sizes

**Syntax:** Relative Sizes(axis, matrix of relative size values)

**Description:** Determines the proportion of space allotted to each of multiple axes in a series.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder(
	Size( 435, 352 ),
	Show Control Panel( 0 ),
	Variables( X( :weight ), Y( :height ), Y( :sex ) ),
	Relative Sizes( "Y", [4 1] ),
	Elements( Position( 1, 1 ), Points( X, Y ) ),
	Elements( Position( 1, 2 ), Points( X, Y ) )
);

```

### Remove Element

**Syntax:** obj << Remove Element( xposition, yposition, i )

**Description:** Removes a graph element at the given X and Y positions.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 0.5 );
gb << Remove Element( 1, 1, 2 );

```

### Remove Variable

**Syntax:** obj << Remove Variable( index | {column, Role(role), Position(p=1), Inner Position(i=1)} )

**Description:** Removes a variable from the Graph Builder model, specified by either the index or a given column name, role, and position.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 0.5 );
gb << Add Variable( {:age, Role( "Wrap" )} );
Wait( 0.5 );
gb << Remove Variable( 3 );

```

### Replicate Linked Page Axes

**Syntax:** obj << Replicate Linked Page Axes( state=0|1 )

**Description:** Determines whether linked pages axis in a grid are displayed once for each graph or once for each row or column of graphs.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Size( 470, 552 ),
	Variables( X( :height ), Y( :weight ), Page( :age ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Link Page Axes( "X and Y" );
gb << Replicate Linked Page Axes( 1 );

```

### Sampling

**Syntax:** obj << Sampling( number )

**Description:** Randomly selects a subset of the data using a specified proportion or count. This is useful when the data is large and the graph is still being changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Sampling( 20 );

```

### Set Alpha Level

**Syntax:** obj << Set Alpha Level( 0.10|0.05|0.01|Other... )

**Description:** Changes the alpha level used for the confidence curves.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Set Alpha Level( 0.10 );

```

### Set α Level

**Syntax:** obj << Set α Level( 0.10|0.05|0.01|Other... )

**Description:** Changes the alpha level used for the confidence curves.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Set Alpha Level( 0.10 );

```

### Show Control Panel

**Syntax:** obj << Show Control Panel( state=0|1 )

**Description:** Displays or hides the control panel. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show Control Panel( 1 );

```

### Show Excluded Rows

**Syntax:** obj << Show Excluded Rows( state=0|1 )

**Description:** Shows or hides excluded rows on plots. When this option is selected, excluded rows are included in the count of out of control points, but excluded from numerical calculations.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
dt << Select Rows( 1 :: 5 );
dt << Exclude();
gb << Show Excluded Rows( 1 );

```

### Show Footer

**Syntax:** obj << Show Footer( state=0|1 )

**Description:** Displays or hides the footer text. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show Footer( 0 );

```

### Show Legend

**Syntax:** obj << Show Legend( state=0|1 )

**Description:** Displays or hides the legend to the right of the graph. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show Legend( 1 );

```

### Show Subtitle

**Syntax:** obj << Show Subtitle( state=0|1 )

**Description:** Displays or hides the graph subtitle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show Subtitle( 1 );

```

### Show Title

**Syntax:** obj << Show Title( state=0|1 )

**Description:** Displays or hides the graph title. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show Title( 0 );

```

### Show X Axis

**Syntax:** obj << Show X Axis( state=0|1 )

**Description:** Displays or hides the X axis. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show X Axis( 0 );

```

### Show X Axis Title

**Syntax:** obj << Show X Axis Title( state=0|1 )

**Description:** Displays or hides the X axis title. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show X Axis Title( 0 );

```

### Show Y Axis

**Syntax:** obj << Show Y Axis( state=0|1 )

**Description:** Displays or hides the Y axis. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show Y Axis( 0 );

```

### Show Y Axis Title

**Syntax:** obj << Show Y Axis Title( state=0|1 )

**Description:** Displays or hides the Y axis title. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Show Y Axis Title( 0 );

```

### Size

**Syntax:** obj << Size( width, height )

**Description:** Sets the size of the graph.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Size( 808, 586 );

```

### Spacing Borders

**Syntax:** obj << Spacing Borders( 0|1=0 )

**Description:** Sets the borders for the internal graph panels. "0" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Spacing Borders( 1 );

```

### Subtitle Alignment

**Syntax:** obj << Subtitle Alignment( "Left"|"Center"|"Right"|"Auto" )

**Description:** Sets the alignment of the graph subtitle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Subtitle Alignment( "Left" );

```

### Subtitle Span

**Syntax:** obj << Subtitle Span( "Full"|"Graph contents" )

**Description:** Sets the span of the graph subtitle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Subtitle Span( "Graph" );

```

### Summary Statistic

**Syntax:** Summary Statistic( N|Mean|Min|Max|Sum|% of Total )

**Description:** Sets the default summary statistic used by the different elements in the graph. Mean by default for Bar and Line elements. "Mean" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Y( :weight, Position( 1 ) ) ),
	Summary Statistic( "Sum" ),
	Elements( Bar( X, Y( 1 ), Y( 2 ), Legend( 2 ) ) )
);

```

### Title Alignment

**Syntax:** obj << Title Alignment( "Left"|"Center"|"Right" )

**Description:** Sets the alignment of the graph title.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Title Alignment( "Left" );

```

### Title Fill Color

**Syntax:** obj << Title Fill Color( color )

**Description:** Sets the color for the title background fill on the graph.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Title Fill Color( "Cyan" );

```

### Title Frame Color

**Syntax:** obj << Title Frame Color( color )

**Description:** Sets the color for the line around the title frame on the graph.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Title Frame Color( "Blue" );

```

### Title Span

**Syntax:** obj << Title Span( "Full"|"Graph contents" )

**Description:** Sets the span of the graph title.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Title Span( "Graph" );

```

### Title Text Color

**Syntax:** obj << Title Text Color( color )

**Description:** Sets the color for the title text on the graph.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Title Text Color( "Red" );

```

### Title Transparency

**Syntax:** obj << Title Transparency( fraction=1 )

**Description:** Sets the transparency for the title frame on the graph. "1" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Title Transparency( .2 );

```

### Title Underline

**Syntax:** obj << Title Underline( state=0|1 )

**Description:** Underlines the title or removes the underline on the graph.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Title Frame Color( "Blue" );
gb << Title Underline( 1 );

```

### Update Element

**Syntax:** obj << Update Element( xposition, yposition, i, {options} )

**Description:** Modifies the properties of an existing element.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 0.5 );
gb << Update Element( 1, 1, 1, {Summary Statistic( "Mean" ), Error Bars( "Range" )} );

```

### Use row colors for levels

**Syntax:** obj << Use row colors for levels( state=0|1 )

**Description:** Initialize legend levels with row colors when every level has a unique color. On by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Use row colors for levels( 1 );

```

### Variables

**Syntax:** Variables( X(column ), Y( column ), <Group X( column )>, <Group Y( column )>, <Shape( column )>, <Color( column )>, <Overlay( column )>, <Freq( column )> )

**Description:** Defines the variables used in the visualization.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );
gb = dt << Graph Builder( Variables( Color( :SAT Verbal ), Shape( :State ) ) );

```

### X Group Edge

**Syntax:** obj << X Group Edge( "Top"|"Bottom" )

**Description:** Moves the axis for the X group to either the top or the bottom. "Top" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
Wait( 1 );
gb << X Group Edge( "Bottom" );

```

### Y Group Edge

**Syntax:** obj << Y Group Edge( "Left"|"Right" )

**Description:** Moves the axis for the Y group to either the left or the right. "Right" by default.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),
	Elements( Smoother( X, Y ) )
);
Wait( 1 );
gb << Y Group Edge( "Left" );

```

### Y Group Level Orientation

**Syntax:** obj << Y Group Level Orientation( "Horizontal"|"Vertical" )

**Description:** Determines whether the Y Group level label text is horizontal or vertical (rotated).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),
	Elements( Smoother( X, Y ) )
);
Wait( 1 );
gb << Y Group Level Orientation( "Horizontal" );

```

### Y Group Title Orientation

**Syntax:** obj << Y Group Title Orientation( "Horizontal"|"Vertical" )

**Description:** Determines whether the Y Group title label text is horizontal or vertical (rotated).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),
	Elements( Smoother( X, Y ) )
);
Wait( 1 );
gb << Y Group Title Orientation( "Horizontal" );

```

## Shared Item Messages

### Action

**Syntax:** obj << Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj << Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj << Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

### Get Data Table

**Syntax:** obj << Get Data Table

**Description:** Returns a reference to the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj << Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj << Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj << Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Local Data Filter

**Syntax:** obj << Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntax:** obj << Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj << Report;

Report( obj )

**Description:** Returns a reference to the report object.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj << Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Syntax:** obj << View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Graph Builder(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Graph Builder Elements

### Item Messages

#### Area

**Syntax:** obj << Area

**Description:** Area: Shows a response summarized by categories.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Area( X, Y ) ) );

```

#### Bar

**Syntax:** obj << Bar

**Description:** Bar: Shows a response summarized by categories.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Bar( X, Y ) ) );

```

#### Box Plot

**Syntax:** obj << Box Plot

**Description:** Box Plot: Shows a compact view of a variable’s distribution with quartiles and outliers.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Box Plot( X, Y ) ) );

```

#### Caption Box

**Syntax:** obj << Caption Box

**Description:** Caption Box: Shows a summary statistic value for the data.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Line( X, Y ), Caption Box( X, Y ) )
);

```

#### Contour

**Syntax:** obj << Contour

**Description:** Contour: Shows regions of data density (or value contours with a Color variable). Produces violin plots when X is categorical.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Contour( X, Y ) ) );

```

#### Ellipse

**Syntax:** obj << Ellipse

**Description:** Ellipse: Shows a bivariate normal density ellipse.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Ellipse( X, Y ) ) );

```

#### Formula

**Syntax:** obj << Formula

**Description:** Formula: Shows a function defined by a column formula.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder(
	Variables( X( :height ), Y( Transform Column( "f", Formula( Sin( :height / 5 ) ) ) ) ),
	Elements( Formula( X, Y ) )
);

```

#### Heatmap

**Syntax:** obj << Heatmap

**Description:** Heatmap: Shows counts using color for X and Y categories.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Heatmap( X, Y ) ) );

```

#### Histogram

**Syntax:** obj << Histogram

**Description:** Histogram: Shows a variable’s distribution using binning.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :weight ) ), Elements( Histogram( X ) ) );

```

#### Line

**Syntax:** obj << Line

**Description:** Line: Shows a response summarized by categories.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Line( X, Y ) ) );

```

#### Line Of Fit

**Syntax:** obj << Line Of Fit

**Description:** Line Of Fit: Shows a linear regression with confidence intervals for continuous X and Y. Fits means for categorical X.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Line of Fit( X, Y ) ) );

```

#### Map Shapes

**Syntax:** obj << Map Shapes

**Description:** Map Shapes: Shows areas defined by a Map Shape variable, usually with a Color variable.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SATByYear.jmp" );
Graph Builder( Variables( Color( :SAT Verbal ), Shape( :State ) ), Elements( Map Shapes() ) );

```

#### Mosaic

**Syntax:** obj << Mosaic

**Description:** Mosaic: Shows counts using size for X and Y categories.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :sex ) ), Elements( Mosaic( X, Y ) ) );

```

#### Parallel

**Syntax:** obj << Parallel

**Description:** Parallel: Shows many variables along parallel axes with a connected line for each row.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder(
	Variables( X( :height ), X( :weight, Position( 1 ) ), X( :age, Position( 1 ) ) ),
	Elements( Parallel( X( 1 ), X( 2 ), X( 3 ) ) )
);

```

#### Pie

**Syntax:** obj << Pie

**Description:** Pie: Shows portions of a whole.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ) ), Elements( Pie( X ) ) );

```

#### Points

**Syntax:** obj << Points

**Description:** Points: Shows a scatter plot of data values.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ) ) );

```

#### Smoother

**Syntax:** obj << Smoother

**Description:** Smoother: Shows a smooth curve through the data. Best for continuous X and Y with an unknown relationship.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Smoother( X, Y ) ) );

```

#### Treemap

**Syntax:** obj << Treemap

**Description:** Treemap: Shows a response summarized by many categories.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Treemap( X, Y ) ) );

```

