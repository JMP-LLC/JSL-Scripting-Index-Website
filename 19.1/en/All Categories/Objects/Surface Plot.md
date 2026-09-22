# Surface Plot



## Associated Constructors

### Surface Plot

**Syntax:** Surface Plot( Columns() )

**Description:** Produces a rotating three-dimensional plot of points or a surface defined by a saved formula.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));

```

## Columns

### By

**Syntax:** obj &lt;&lt; By( column(s) )

**Description:** Produce multiple reports, one for each level of the variable(s).

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Factors

**Syntax:** obj &lt;&lt; Factors( column(s) )

**Description:** Variables that will be available for the X, Y, and Z coordinates in the 3D graph.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Factors( :silane, :silica, :hardness ) );

```

## Item Messages

### Clip Sheet

**Syntax:** obj &lt;&lt; Clip Sheet( state=0|1 ); obj &lt;&lt; Clip Sheet1( state=0|1 )

**Description:** Clips the surface at the ranges of the columns that are used in the first response column formula.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Response( :Pred Formula ABRASION );Wait( 1 );obj << Clip Sheet( 1 );

```

### Clip Sheet1

**Syntax:** obj &lt;&lt; Clip Sheet( state=0|1 ); obj &lt;&lt; Clip Sheet1( state=0|1 )

**Description:** Clips the surface at the ranges of the columns that are used in the first response column formula.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Response( :Pred Formula ABRASION );Wait( 1 );obj << Clip Sheet( 1 );

```

### Clip Sheet2

**Syntax:** obj &lt;&lt; Clip Sheet2( state=0|1 )

**Description:** Clips the surface at the ranges of the columns that are used in the second response column formula.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Response( "Pred Formula MODULUS", :Pred Formula MODULUS );obj << Show Surface2( "Both Sides" );Wait( 1 );obj << Clip Sheet2( 1 );

```

### Clip Sheet3

**Syntax:** obj &lt;&lt; Clip Sheet3( state=0|1 )

**Description:** Clips the surface at the ranges of the columns that are used in the third response column formula.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );obj << Show Surface3( "Both sides" );Wait( 1 );obj << Clip Sheet3( 1 );

```

### Clip Sheet4

**Syntax:** obj &lt;&lt; Clip Sheet4( state=0|1 )

**Description:** Clips the surface at the ranges of the columns that are used in the fourth response column formula.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS,		:Pred Formula HARDNESS	));obj << Response(	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",	:Pred Formula HARDNESS);obj << Show Surface4( "Both sides" );Wait( 1 );obj << Clip Sheet4( 1 );

```

### Contour Color

**Syntax:** obj &lt;&lt; Contour Color( color ); obj &lt;&lt; Contour Color1( color )

**Description:** Specifies the color of the contour on the surface for the first response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Contour( "On Surface" ) );obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Contour Color( {255, 128, 0} );

```

### Contour Color1

**Syntax:** obj &lt;&lt; Contour Color( color ); obj &lt;&lt; Contour Color1( color )

**Description:** Specifies the color of the contour on the surface for the first response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Contour( "On Surface" ) );obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Contour Color( {255, 128, 0} );

```

### Contour Color2

**Syntax:** obj &lt;&lt; Contour Color2( color )

**Description:** Specifies the color of the contour on the surface for the second response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Show Surface2( "Both Sides" ));obj << Show Contour2( "On Surface" );Wait( 1 );obj << Contour Color2( {255, 128, 0} );

```

### Contour Color3

**Syntax:** obj &lt;&lt; Contour Color3( color )

**Description:** Specifies the color of the contour on the surface for the third response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Show Surface3( "Both Sides" ));obj << Show Contour3( "On Surface" );Wait( 1 );obj << Contour Color3( {255, 0, 0} );

```

### Contour Color4

**Syntax:** obj &lt;&lt; Contour Color4( color )

**Description:** Specifies the color of the contour on the surface for the fourth response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Show Surface4( "Both Sides" ),	Show Surface1( "Off" ));obj << Show Contour4( "On Surface" );Wait( 1 );obj << Contour Color4( {100, 0, 200} );

```

### Control Panel

**Syntax:** obj &lt;&lt; Control Panel( state=0|1 )

**Description:** Shows or hides the Control Panel, which includes the controls for appearance, independent variables, and dependent variables. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Control Panel( 0 );

```

### Data points Color

**Syntax:** obj &lt;&lt; Data Points Color( color ); obj &lt;&lt; Data Points Color1( color )

**Description:** Changes the color of the data points for the first dependent variable drawn on the surface.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Response( :Pred Formula ABRASION );obj << Datapoints Choice( "Mesh" );obj << Data Points Color( {0, 0, 255} );

```

### Data points Color1

**Syntax:** obj &lt;&lt; Data Points Color( color ); obj &lt;&lt; Data Points Color1( color )

**Description:** Changes the color of the data points for the first dependent variable drawn on the surface.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Response( :Pred Formula ABRASION );obj << Datapoints Choice( "Mesh" );obj << Data Points Color( {0, 0, 255} );

```

### Data points Color2

**Syntax:** obj &lt;&lt; Data points Color2( color )

**Description:** Changes the color of the data points for the second dependent variable drawn on the surface.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );obj << Response( "Pred Formula MODULUS", :Pred Formula MODULUS );obj << Datapoints Choice2( "Mesh" );obj << Data Points Color2( {0, 0, 255} );

```

### Data points Color3

**Syntax:** obj &lt;&lt; Data points Color3( color )

**Description:** Changes the color of the data points for the third dependent variable drawn on the surface.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ));obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );obj << Datapoints Choice3( "Needles" );obj << Data Points Color3( {255, 0, 0} );

```

### Data points Color4

**Syntax:** obj &lt;&lt; Data points Color4( color )

**Description:** Changes the color of the data points for the forth dependent variable drawn on the surface.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Datapoints Choice4( "Surface" );obj << Data points Color4( 100, 0, 200 );obj << Response(	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",	:Pred Formula HARDNESS);obj << Frame3D( Set Rotation( -79.3688859847019, -1.23001727812475, 27.7096879560307 ) );

```

### Datapoints Choice

**Syntax:** obj &lt;&lt; Datapoints Choice( "Off"|"Points"|"Needles"|"Mesh"|"Surface" ); obj &lt;&lt; Datapoints Choice1( "Off"|"Points"|"Needles"|"Mesh"|"Surface" )

**Description:** Specifies how points are displayed on the surface for the first response. The default style is the Points option.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Response( :Pred Formula ABRASION );obj << Datapoints Choice( "Needles" );

```

### Datapoints Choice1

**Syntax:** obj &lt;&lt; Datapoints Choice( "Off"|"Points"|"Needles"|"Mesh"|"Surface" ); obj &lt;&lt; Datapoints Choice1( "Off"|"Points"|"Needles"|"Mesh"|"Surface" )

**Description:** Specifies how points are displayed on the surface for the first response. The default style is the Points option.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Response( :Pred Formula ABRASION );obj << Datapoints Choice( "Needles" );

```

### Datapoints Choice2

**Syntax:** obj &lt;&lt; Datapoints Choice2( "Off"|"Points"|"Needles"|"Mesh"|"Surface" )

**Description:** Specifies how points are displayed on the surface for the second response. The default style is the Points option.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Response( ":Pred Formula MODULUS", :Pred Formula MODULUS );Wait( 1 );obj << Datapoints Choice2( "Off" );

```

### Datapoints Choice3

**Syntax:** obj &lt;&lt; Datapoints Choice3( "Off"|"Points"|"Needles"|"Mesh"|"Surface" )

**Description:** Specifies how points are displayed on the surface for the third response. The default style is the Points option.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );obj << Datapoints Choice3( "Mesh" );

```

### Datapoints Choice4

**Syntax:** obj &lt;&lt; Datapoints Choice4( "Off"|"Points"|"Needles"|"Mesh"|"Surface" )

**Description:** Specifies how points are displayed on the surface for the fourth response. The default style is the Points option.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS,		:Pred Formula HARDNESS	));obj << Response(	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",	:Pred Formula HARDNESS);obj << Datapoints Choice4( "Surface" );

```

### Dependent Variables Points

**Syntax:** obj &lt;&lt; Dependent Variables Points( state=0|1 )

**Description:** Shows or hides the options for points in the Dependent Variables controls. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Dependent Variables Points( 0 );

```

### Dependent Variables Response Grid

**Syntax:** obj &lt;&lt; Dependent Variables Response Grid( state=0|1 )

**Description:** Shows or hides the grid options in the Dependent Variables controls. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Dependent Variables Response Grid( 0 );

```

### Equation

**Syntax:** obj &lt;&lt; Equation( equation1, &lt;equation2&gt;, &lt;equation3&gt;, &lt;equation4&gt; )

**Description:** Assigns equations to the sheets in a specified order in the Dependent Variables section. To skip a response, specify a missing value using a period.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ));obj << Show Surface2( "Both sides" );obj << Equation( ., ".7*:Silane+5*:Silica" );obj << Show Formula( 1 );

```

### Fit to Window

**Syntax:** obj &lt;&lt; Fit to Window( "Auto"|"On"|"Off" )

**Description:** Sets the auto stretching behavior of the report.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Fit to Window( "Off" );

```

### Formula

**Syntax:** obj &lt;&lt; Formula( column, &lt;column&gt;, &lt;column&gt;, &lt;column&gt; )

**Description:** Assigns formulas in columns to the sheets in a specified order in the Dependent Variables section.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Datapoints Choice2( "Surface" ));obj << Show Surface2( "Both sides" );obj << Formula( :Pred Formula ABRASION, :Pred Formula ELONG );

```

### Frame3D

**Syntax:** obj &lt;&lt; Frame3D( Scatterplot 3D options )

**Description:** Changes the display options on the surface. This option uses messages from the Scatterplot 3D platform. See full description under Scatterplot 3D for details.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Show Surface2( "Both sides" ));obj << Frame3D(	Set Graph Size( 692, 671 ),	Set Rotation( -54, 0, 38 ),	Background Color( 255, 177, 125 ));

```

### Hide Lights Border

**Syntax:** obj &lt;&lt; Hide Lights Border( state=0|1 )

**Description:** Shows or hides the lighting controls.

```jsl

obj = Surface Plot();Wait( 1 );obj << Hide Lights Border( 1 );

```

### Iso Value

**Syntax:** obj &lt;&lt; Iso Value( id, value )

**Description:** Changes the value of the isosurface slider for a particular dependent variable. The id argument identifies the dependent variable using a zero-based index.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );obj << Mode( "Isosurface" );Wait( 1 );obj << Iso Value( 0, 100 );obj << Iso Value( 1, 1500 );

```

### Lock Z Scale

**Syntax:** obj &lt;&lt; Lock Z Scale( state=0|1 )

**Description:** Locks the Z axis to its current values.

```jsl

obj = Surface Plot();obj << Lock Z Scale( 1 );

```

### Mesh Color

**Syntax:** obj &lt;&lt; Mesh Color( color ); obj &lt;&lt; Mesh Color1( color )

**Description:** Specifies the color of the surface mesh for the first dependent variable. This option is available only when a value other than Off is selected for the Mesh option.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Show Mesh( "X and Y" );Wait( 1 );obj << Mesh Color( {0, 0, 255} );

```

### Mesh Color1

**Syntax:** obj &lt;&lt; Mesh Color( color ); obj &lt;&lt; Mesh Color1( color )

**Description:** Specifies the color of the surface mesh for the first dependent variable. This option is available only when a value other than Off is selected for the Mesh option.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Show Mesh( "X and Y" );Wait( 1 );obj << Mesh Color( {0, 0, 255} );

```

### Mesh Color2

**Syntax:** obj &lt;&lt; Mesh Color2( color )

**Description:** Specifies the color of the surface mesh for the second dependent variable. This option is available only when a value other than Off is selected for the Mesh option.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );obj << Mode( "Isosurface" );obj << Show Mesh2( "X and Y" );Wait( 1 );obj << Mesh Color2( {255, 0, 0} );

```

### Mesh Color3

**Syntax:** obj &lt;&lt; Mesh Color3( color )

**Description:** Specifies the color of the surface mesh for the third dependent variable. This option is available only when a value other than Off is selected for the Mesh option.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ));obj << Mode( "Isosurface" );obj << Show Mesh3( "X and Y" );Wait( 1 );obj << Mesh Color3( {50, 0, 100} );

```

### Mesh Color4

**Syntax:** obj &lt;&lt; Mesh Color4( color )

**Description:** Specifies the color of the surface mesh for the fourth dependent variable. This option is available only when a value other than Off is selected for the Mesh option.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Mode( "Isosurface" );obj << Show Mesh4( "X and Y" );Wait( 1 );obj << Mesh Color4( {0, 250, 0} );

```

### Mode

**Syntax:** obj &lt;&lt; Mode( "Sheet, points"|"Isosurface"|"Density grid" )

**Description:** Specifies how surfaces are displayed on the plot. The Sheets, points option shows sheets, points, and lines on the surface. The Isosurface options uses a formula with three independent variables.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Show Surface 2( "Both Sides" );obj << Show Surface 4( "Both Sides" );obj << Mode( "Isosurface" );

```

### Resolution

**Syntax:** obj &lt;&lt; Resolution( number ) obj &lt;&lt; X Resolution( number ) obj &lt;&lt; Y Resolution( number )

**Description:** Changes the resolution that is used to draw the surface plot.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Mode( "Isosurface" );Wait( 1 );obj << Resolution( 4 );Wait( 1 );obj << Resolution( 12 );

```

### Response

**Syntax:** obj &lt;&lt; Response( column, &lt;column&gt;, &lt;column&gt;, &lt;column&gt; )

**Description:** Identifies up to four response columns for plotting overlaid points. To skip a response, use any quoted string as a placeholder.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Datapoints Choice3( "Surface" ));obj << Response( :Pred Formula ABRASION, "", :Pred Formula ELONG );

```

### Response Column Color Theme

**Syntax:** obj &lt;&lt; Response Column Color Theme( color theme ); obj &lt;&lt; Response Column Color Theme1( color theme )

**Description:** Changes the color theme of the surface for the first response. This option is available only for point response columns that use a continuous gradient.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response Column Fill( "Continuous Gradients" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Color Theme( "Jet" );

```

### Response Column Color Theme1

**Syntax:** obj &lt;&lt; Response Column Color Theme( color theme ); obj &lt;&lt; Response Column Color Theme1( color theme )

**Description:** Changes the color theme of the surface for the first response. This option is available only for point response columns that use a continuous gradient.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response Column Fill( "Continuous Gradients" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Color Theme( "Jet" );

```

### Response Column Color Theme2

**Syntax:** obj &lt;&lt; Response Column Color Theme2( color theme )

**Description:** Changes the color theme of the surface for the second response. This option is available only for point response columns that use a continuous gradient.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Equation( ., ., ., . ),	Datapoints Choice2( "Surface" ),	Response Column Fill2( "Continuous Gradients" ),	Response( "Pred Formula MODULUS", :Pred Formula MODULUS ));Wait( 1 );obj << Response Column Color Theme2( "White to Black" );

```

### Response Column Color Theme3

**Syntax:** obj &lt;&lt; Response Column Color Theme3( color theme )

**Description:** Changes the color theme of the surface for the third response. This option is available only for point response columns that use a continuous gradient.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Equation( ., ., ., . ),	Datapoints Choice3( "Surface" ),	Response Column Fill3( "Continuous Gradients" ),	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG ));Wait( 1 );obj << Response Column Color Theme3( "Blue to Gray to Red" );

```

### Response Column Color Theme4

**Syntax:** obj &lt;&lt; Response Column Color Theme4( color theme )

**Description:** Changes the color theme of the surface for the fourth response. This option is available only for point response columns that use a continuous gradient.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Equation( ., ., ., . ),	Datapoints Choice4( "Surface" ),	Response Column Fill4( "Continuous Gradients" ),	Response(		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",		:Pred Formula HARDNESS	));Wait( 1 );obj << Response Column Color Theme4( "White to Red" );

```

### Response Column Fill

**Syntax:** obj &lt;&lt; Response Column Fill( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Response Column Fill1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Description:** Specifies if the first surface is colored using a solid color, continuous gradients, or discrete gradients. This option is available only if the surface is generated using a dependent point response column.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Fill( "Discrete Gradients" );

```

### Response Column Fill1

**Syntax:** obj &lt;&lt; Response Column Fill( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Response Column Fill1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Description:** Specifies if the first surface is colored using a solid color, continuous gradients, or discrete gradients. This option is available only if the surface is generated using a dependent point response column.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Fill( "Discrete Gradients" );

```

### Response Column Fill2

**Syntax:** obj &lt;&lt; Response Column Fill2( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Description:** Specifies if the second surface is colored using a solid color, continuous gradients, or discrete gradients. This option is available only if the surface is generated using a dependent point response column.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Equation( ., ., ., . ),	Datapoints Choice2( "Surface" ),	Response( "Pred Formula MODULUS", :Pred Formula MODULUS ));Wait( 1 );obj << Response Column Fill2( "Continuous Gradients" );

```

### Response Column Fill3

**Syntax:** obj &lt;&lt; Response Column Fill3( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Description:** Specifies if the third surface is colored using a solid color, continuous gradients, or discrete gradients. This option is available only if the surface is generated using a dependent point response column.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Equation( ., ., ., . ),	Datapoints Choice3( "Surface" ),	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG ));Wait( 1 );obj << Response Column Fill3( "Discrete Gradients" );

```

### Response Column Fill4

**Syntax:** obj &lt;&lt; Response Column Fill4( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Description:** Specifies if the fourth surface is colored using a solid color, continuous gradients, or discrete gradients. This option is available only if the surface is generated using a dependent point response column.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Equation( ., ., ., . ),	Datapoints Choice4( "Surface" ),	Response(		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",		:Pred Formula HARDNESS	));Wait( 1 );obj << Response Column Fill4( "Continuous Gradients" );

```

### Response Column Gradient Lines

**Syntax:** obj &lt;&lt; Response Column Gradient Lines( state=0|1 ); obj &lt;&lt; Response Column Gradient Lines1( state=0|1 )

**Description:** Shows or hides lines between the gradient levels on the surface for the first response. This option is available only if the surface is generated using discrete gradients with a dependent point column response. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response Column Fill( "Discrete Gradients" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Gradient Lines( 0 );

```

### Response Column Gradient Lines1

**Syntax:** obj &lt;&lt; Response Column Gradient Lines( state=0|1 ); obj &lt;&lt; Response Column Gradient Lines1( state=0|1 )

**Description:** Shows or hides lines between the gradient levels on the surface for the first response. This option is available only if the surface is generated using discrete gradients with a dependent point column response. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response Column Fill( "Discrete Gradients" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Gradient Lines( 0 );

```

### Response Column Gradient Lines2

**Syntax:** obj &lt;&lt; Response Column Gradient Lines2( state=0|1 )

**Description:** Shows or hides lines between the gradient levels on the surface for the second response. This option is available only if the surface is generated using discrete gradients with a dependent point column response. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Equation( ., ., ., . ),	Datapoints Choice2( "Surface" ),	Response Column Fill2( "Discrete Gradients" ),	Response( "Pred Formula MODULUS", :Pred Formula MODULUS ));Wait( 1 );obj << Response Column Gradient Lines2( 0 );

```

### Response Column Gradient Lines3

**Syntax:** obj &lt;&lt; Response Column Gradient Lines3( state=0|1 )

**Description:** Shows or hides lines between the gradient levels on the surface for the third response. This option is available only if the surface is generated using discrete gradients with a dependent point column response. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Equation( ., ., ., . ),	Datapoints Choice3( "Surface" ),	Response Column Fill3( "Discrete Gradients" ),	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG ));obj << Response Column Gradient Lines3( 0 );Wait( 1 );obj << Response Column Gradient Lines3( 1 );

```

### Response Column Gradient Lines4

**Syntax:** obj &lt;&lt; Response Column Gradient Lines4( state=0|1 )

**Description:** Shows or hides lines between the gradient levels on the surface for the fourth response. This option is available only if the surface is generated using discrete gradients with a dependent point column response. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Equation( ., ., ., . ),	Datapoints Choice4( "Surface" ),	Response Column Fill4( "Discrete Gradients" ),	Response(		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",		:Pred Formula HARDNESS	),	Response Column Gradient Lines4( 0 ));Wait( 1 );obj << Response Column Gradient Lines4( 1 );

```

### Response Column Gradients

**Syntax:** obj &lt;&lt; Response Column Gradients( number ); obj &lt;&lt; Response Column Gradients1( number )

**Description:** Specifies the number of gradients on the surface for the first response. This option is available only if the surface is generated using discrete gradients with a dependent point response column.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response Column Fill( "Discrete Gradients" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Gradients( 9 );

```

### Response Column Gradients1

**Syntax:** obj &lt;&lt; Response Column Gradients( number ); obj &lt;&lt; Response Column Gradients1( number )

**Description:** Specifies the number of gradients on the surface for the first response. This option is available only if the surface is generated using discrete gradients with a dependent point response column.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response Column Fill( "Discrete Gradients" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Gradients( 9 );

```

### Response Column Gradients2

**Syntax:** obj &lt;&lt; Response Column Gradients2( number )

**Description:** Specifies the number of gradients on the surface for the second response. This option is available only if the surface is generated using discrete gradients with a dependent point response column.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Equation( ., ., ., . ),	Datapoints Choice2( "Surface" ),	Response Column Fill2( "Discrete Gradients" ),	Response( "Pred Formula MODULUS", :Pred Formula MODULUS ));Wait( 1 );obj << Response Column Gradients2( 8 );

```

### Response Column Gradients3

**Syntax:** obj &lt;&lt; Response Column Gradients3( number )

**Description:** Specifies the number of gradients on the surface for the third response. This option is available only if the surface is generated using discrete gradients with a dependent point response column.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Equation( ., ., ., . ),	Datapoints Choice3( "Surface" ),	Response Column Fill3( "Discrete Gradients" ),	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG ));Wait( 1 );obj << Response Column Gradients3( 7 );

```

### Response Column Gradients4

**Syntax:** obj &lt;&lt; Response Column Gradients4( number )

**Description:** Specifies the number of gradients on the surface for the fourth response. This option is available only if the surface is generated using discrete gradients with a dependent point response column.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Equation( ., ., ., . ),	Datapoints Choice4( "Surface" ),	Response Column Fill4( "Discrete Gradients" ),	Response(		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",		:Pred Formula HARDNESS	));Wait( 1 );obj << Response Column Gradients4( 10 );

```

### Scale response axes independently

**Syntax:** obj = Surface Plot(...Scale response axes indenpendently( state=0|1 )...); obj &lt;&lt; Scale response axes independently( state=0|1 )

**Description:** Specifies whether there is a separate scale for each response or if the axis scale for all responses matches the scale for the first response entered in the launch window.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Scale response axes independently( 1 ));obj << Show Surface4( "Both sides" );Wait( 1 );obj << Scale response axes independently( 0 );

```

### Set Z Variable

**Syntax:** obj &lt;&lt; Set Z Variable( column )

**Description:** Sets the specified column as the Z variable on the surface plot. This option is available only for isosurfaces.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Mode( "Isosurface" ));obj << Set Y Variable( :SULFUR );Wait( 1 );obj << Set Z Variable( :SILANE );

```

### SetVariableAxis

**Syntax:** obj &lt;&lt; SetVariableAxis( column, &lt;Current Value( number )&gt;, &lt;Axis Data( axis options )&gt; )

**Description:** Specifies attributes for the specified independent variable axis.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << Set Variable Axis( :SULFUR, Current Value( 2.925 ) );Wait( 1 );obj << Set Variable Axis( :SILANE, Axis Data( {Format( "Fixed", 8, 1 )} ) );

```

### SetXVariable

**Syntax:** obj &lt;&lt; SetXVariable( column )

**Description:** Sets the specified column as the X variable on the surface plot.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << Set X Variable( :SULFUR );

```

### SetYVariable

**Syntax:** obj &lt;&lt; SetYVariable( column )

**Description:** Sets the specified column as the Y variable on the surface plot.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << Set Y Variable( :SULFUR );

```

### SetZAxis

**Syntax:** obj &lt;&lt; SetZAxis( column, Current Value( number ), &lt;Axis Data( axis options )&gt; )

**Description:** Specifies attributes for the Z axis.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << Set Z Axis( :Pred Formula ABRASION, Axis Data( {Format( "Fixed", 8, 1 )} ) );

```

### Show Contour

**Syntax:** obj &lt;&lt; Show Contour( "Off"|"Below"|"Above"|"On Surface" ); obj &lt;&lt; Show Contour1( "Off"|"Below|Above"|"On Surface" )

**Description:** Specifies the placement of the contour lines on the plot in relation to the surface for the first response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Show Contour( "On Surface" );

```

### Show Contour1

**Syntax:** obj &lt;&lt; Show Contour( "Off"|"Below"|"Above"|"On Surface" ); obj &lt;&lt; Show Contour1( "Off"|"Below|Above"|"On Surface" )

**Description:** Specifies the placement of the contour lines on the plot in relation to the surface for the first response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Show Contour( "On Surface" );

```

### Show Contour2

**Syntax:** obj &lt;&lt; Show Contour2( "Off"|"Below"|"Above"|"On Surface" )

**Description:** Specifies the placement of the contour lines on the plot in relation to the surface for the second response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Show Contour2( "Above" );

```

### Show Contour3

**Syntax:** obj &lt;&lt; Show Contour3( "Off"|"Below"|"Above"|"On Surface" )

**Description:** Specifies the placement of the contour lines on the plot in relation to the surface for the third response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Show Surface3( "Both Sides" );Wait( 1 );obj << Show Contour3( "Below" );

```

### Show Contour4

**Syntax:** obj &lt;&lt; Show Contour4( "Off"|"Below"|"Above"|"On Surface" )

**Description:** Specifies the placement of the contour lines on the plot in relation to the surface for the fourth response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Show Surface4( "Both Sides" );Wait( 1 );obj << Show Contour4( "On Surface" );

```

### Show Mesh

**Syntax:** obj &lt;&lt; Show Mesh( "Off"|"X"|"Y"|"X and Y" ); obj &lt;&lt; Show Mesh1( "Off"|"X"|"Y"|"X and Y" )

**Description:** Specifies the style of the surface mesh for the first response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Show Mesh( "X and Y" );

```

### Show Mesh1

**Syntax:** obj &lt;&lt; Show Mesh( "Off"|"X"|"Y"|"X and Y" ); obj &lt;&lt; Show Mesh1( "Off"|"X"|"Y"|"X and Y" )

**Description:** Specifies the style of the surface mesh for the first response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Show Mesh( "X and Y" );

```

### Show Mesh2

**Syntax:** obj &lt;&lt; Show Mesh2( "Off"|"X and Y"|"X"|"Y" )

**Description:** Specifies the style of the surface mesh for the second response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Show Mesh2( "X" );

```

### Show Mesh3

**Syntax:** obj &lt;&lt; Show Mesh3( "Off"|"X and Y"|"X"|"Y" )

**Description:** Specifies the style of the surface mesh for the third response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Show Mesh3( "Y" );

```

### Show Mesh4

**Syntax:** obj &lt;&lt; Show Mesh4( "Off"|"X and Y"|"X"|"Y" )

**Description:** Specifies the style of the surface mesh for the fourth response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Show Mesh4( "X and Y" );

```

### Show Surface

**Syntax:** obj &lt;&lt; Show Surface( "Off"|"Both sides"|"Above only"|"Below only" ); obj &lt;&lt; Show Surface1( "Off"|"Both sides"|"Above only"|"Below only" )

**Description:** Specifies how the surface for the first response appears. This option is available only for surfaces that are generated by a formula column response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Show Surface( "Below Only" );

```

### Show Surface1

**Syntax:** obj &lt;&lt; Show Surface( "Off"|"Both sides"|"Above only"|"Below only" ); obj &lt;&lt; Show Surface1( "Off"|"Both sides"|"Above only"|"Below only" )

**Description:** Specifies how the surface for the first response appears. This option is available only for surfaces that are generated by a formula column response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Show Surface( "Below Only" );

```

### Show Surface2

**Syntax:** obj &lt;&lt; Show Surface2( "Off"|"Both sides"|"Above only"|"Below only" )

**Description:** Specifies how the surface for the second response appears. This option is available only for surfaces that are generated by a formula column response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Show Surface2( "Both Sides" );

```

### Show Surface3

**Syntax:** obj &lt;&lt; Show Surface3( "Off"|"Both sides"|"Above only"|"Below only" )

**Description:** Specifies how the surface for the third response appears. This option is available only for surfaces that are generated by a formula column response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Show Surface3( "Above Only" );

```

### Show Surface4

**Syntax:** obj &lt;&lt; Show Surface4( "Off"|"Both sides"|"Above only"|"Below only" )

**Description:** Specifies how the surface for the fourth response appears. This option is available only for surfaces that are generated by a formula column response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS,		:Pred Formula HARDNESS	));Wait( 1 );obj << Show Surface4( "Both Sides" );

```

### Show formula

**Syntax:** obj &lt;&lt; Show formula( state=0|1 )

**Description:** Shows or hides the formula for all dependent variables that currently appear in the surface plot.

```jsl

obj = Surface Plot();obj << Show Formula( 1 );

```

### Surface Alpha

**Syntax:** obj &lt;&lt; Surface Alpha( number ); obj &lt;&lt; Surface Alpha1( number )

**Description:** Specifies the opacity of the isosurface for the first response variable.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Mode( "Isosurface" );Wait( 1 );obj << Surface Alpha( 0.25 );

```

### Surface Alpha1

**Syntax:** obj &lt;&lt; Surface Alpha( number ); obj &lt;&lt; Surface Alpha1( number )

**Description:** Specifies the opacity of the isosurface for the first response variable.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Mode( "Isosurface" );Wait( 1 );obj << Surface Alpha( 0.25 );

```

### Surface Alpha2

**Syntax:** obj &lt;&lt; Surface Alpha2( number )

**Description:** Specifies the opacity of the isosurface for the second response variable.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Mode( "Isosurface" );obj << Show Surface2( "Both sides" );Wait( 1 );obj << Surface Alpha2( 0.3 );

```

### Surface Alpha3

**Syntax:** obj &lt;&lt; Surface Alpha3( number )

**Description:** Specifies the opacity of the isosurface for the third response variable.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Mode( "Isosurface" );obj << Show Surface3( "Both sides" );Wait( 1 );obj << Surface Alpha3( 0.75 );

```

### Surface Alpha4

**Syntax:** obj &lt;&lt; Surface Alpha4( number )

**Description:** Specifies the opacity of the isosurface for the fourth response variable.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Mode( "Isosurface" );obj << Show Surface4( "Both sides" );Wait( 1 );obj << Surface Alpha4( 0.90 );

```

### Surface Color

**Syntax:** obj &lt;&lt; Surface Color( color ); obj &lt;&lt; Surface Color1( color )

**Description:** Specifies the color of the surface for the first response when the fill type is solid.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Surface( "Both Sides" ) );Wait( 1 );obj << Surface Color( {0, 0, 255} );

```

### Surface Color Method

**Syntax:** obj &lt;&lt; Surface Color Method( "Solid"|formula, &lt;"Solid"|formula&gt;, &lt;"Solid"|formula&gt;, &lt;"Solid"|formula&gt; )

**Description:** Specifies the method that is used for coloring each of the four possible surfaces. Note that the formula can differ from the formula that is used to draw the surface.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Show Surface2( "Both sides" ));obj << Surface Gradient Type( "Continuous Gradients" );obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );Wait( 1 );obj << Surface Color Theme2( "Blue to Gray to Red" );

```

### Surface Color Range

**Syntax:** obj &lt;&lt; Surface Color Range( "Data"|"Axis" ); obj &lt;&lt; Surface Color Range1( "Data"|"Axis" )

**Description:** Specifies the endpoints for the color gradient on the surface for the first response. This option is available only when a gradient is used.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Show Surface( "Both Sides" ));obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Surface Color Range( "Axis" );

```

### Surface Color Range1

**Syntax:** obj &lt;&lt; Surface Color Range( "Data"|"Axis" ); obj &lt;&lt; Surface Color Range1( "Data"|"Axis" )

**Description:** Specifies the endpoints for the color gradient on the surface for the first response. This option is available only when a gradient is used.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Show Surface( "Both Sides" ));obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Surface Color Range( "Axis" );

```

### Surface Color Range2

**Syntax:** obj &lt;&lt; Surface Color Range2( "Data"|"Axis" )

**Description:** Specifies the endpoints for the color gradient on the surface for the second response. This option is available only when a gradient is used.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Show Surface2( "Both Sides" ));obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );Wait( 1 );obj << Surface Color Range2( "Data" );

```

### Surface Color Range3

**Syntax:** obj &lt;&lt; Surface Color Range3( "Data"|"Axis" )

**Description:** Specifies the endpoints for the color gradient on the surface for the third response. This option is available only when a gradient is used.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Show Surface3( "Both Sides" ));obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );Wait( 1 );obj << Surface Color Range3( "Axis" );

```

### Surface Color Range4

**Syntax:** obj &lt;&lt; Surface Color Range4( "Data"|"Axis" )

**Description:** Specifies the endpoints for the color gradient on the surface for the fourth response. This option is available only when a gradient is used.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Show Surface4( "Both Sides" ));obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );Wait( 1 );obj << Surface Color Range4( "Data" );

```

### Surface Color Theme

**Syntax:** obj &lt;&lt; Surface Color Theme( color theme ); obj &lt;&lt; Surface Color Theme1( color theme )

**Description:** Specifies the color theme of the surface for the first response. This option is available only for formula response columns that use a gradient.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Surface Gradient Type( "Continuous Gradients" );obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Surface Color Theme( "Blue to Gray to Red" );

```

### Surface Color Theme1

**Syntax:** obj &lt;&lt; Surface Color Theme( color theme ); obj &lt;&lt; Surface Color Theme1( color theme )

**Description:** Specifies the color theme of the surface for the first response. This option is available only for formula response columns that use a gradient.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Surface Gradient Type( "Continuous Gradients" );obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Surface Color Theme( "Blue to Gray to Red" );

```

### Surface Color Theme2

**Syntax:** obj &lt;&lt; Surface Color Theme2( color theme )

**Description:** Specifies the color theme of the surface for the second response. This option is available only for formula response columns that use a gradient.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Show Surface2( "Both sides" ));obj << Surface Gradient Type2( "Continuous Gradients" );obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );Wait( 1 );obj << Surface Color Theme2( "White to Black" );

```

### Surface Color Theme3

**Syntax:** obj &lt;&lt; Surface Color Theme3( color theme )

**Description:** Specifies the color theme of the surface for the third response. This option is available only for formula response columns that use a gradient.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Show Surface3( "Both Sides" ));obj << Surface Gradient Type3( "Continuous Gradients" );obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );Wait( 1 );obj << Surface Color Theme3( "Spectral" );

```

### Surface Color Theme4

**Syntax:** obj &lt;&lt; Surface Color Theme4( color theme )

**Description:** Specifies the color theme of the surface for the fourth response. This option is available only for formula response columns that use a gradient.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Show Surface4( "Both Sides" ));obj << Surface Gradient Type4( "Continuous Gradients" );obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );Wait( 1 );obj << Surface Color Theme4( "Jet" );

```

### Surface Color1

**Syntax:** obj &lt;&lt; Surface Color( color ); obj &lt;&lt; Surface Color1( color )

**Description:** Specifies the color of the surface for the first response when the fill type is solid.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Surface( "Both Sides" ) );Wait( 1 );obj << Surface Color( {0, 0, 255} );

```

### Surface Color2

**Syntax:** obj &lt;&lt; Surface Color2( color )

**Description:** Specifies the color of the surface for the second response when the fill type is solid.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Show Surface2( "Both Sides" ));obj << Surface Color2( {255, 128, 0} );

```

### Surface Color3

**Syntax:** obj &lt;&lt; Surface Color3( color )

**Description:** Specifies the color of the surface for the third response when the fill type is solid.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Show Surface3( "Both Sides" ));obj << Surface Color3( {255, 0, 0} );

```

### Surface Color4

**Syntax:** obj &lt;&lt; Surface Color4( color )

**Description:** Specifies the color of the surface for the fourth response when the fill type is solid.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Show Surface4( "Both Sides" ));obj << Surface Color4( {100, 0, 200} );

```

### Surface Gradient Type

**Syntax:** obj &lt;&lt; Surface Gradient Type( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Surface Gradient Type1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Description:** Specifies the fill type of the surface for the first response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << Surface Gradient Type( "Continuous Gradients" );obj << Surface Color Method( ":Pred Formula ABRASION" );

```

### Surface Gradient Type1

**Syntax:** obj &lt;&lt; Surface Gradient Type( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Surface Gradient Type1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Description:** Specifies the fill type of the surface for the first response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << Surface Gradient Type( "Continuous Gradients" );obj << Surface Color Method( ":Pred Formula ABRASION" );

```

### Surface Gradient Type2

**Syntax:** obj &lt;&lt; Surface Gradient Type2( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Description:** Specifies the fill type of the surface for the second response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Show Surface2( "Both sides" ));Wait( 1 );obj << Surface Gradient Type2( "Discrete Gradients" );obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );

```

### Surface Gradient Type3

**Syntax:** obj &lt;&lt; Surface Gradient Type3( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Description:** Specifies the fill type of the surface for the third response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Show Surface3( "Both Sides" ));Wait( 1 );obj << Surface Gradient Type3( "Solid" );obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );

```

### Surface Gradient Type4

**Syntax:** obj &lt;&lt; Surface Gradient Type4( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Description:** Specifies the fill type of the surface for the fourth response.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Show Surface4( "Both Sides" ));Wait( 1 );obj << Surface Gradient Type4( "Discrete Gradients" );obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );

```

### Surface Gradients

**Syntax:** obj &lt;&lt; Surface Gradients( number ); obj &lt;&lt; Surface Gradients1( number )

**Description:** Specifies the number of gradient lines on the surface of the first response. This option is available only if discrete gradients are used.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Surface Color Method( ":Pred Formula ABRASION" ));obj << Surface Gradient Type( "Discrete Gradients" );Wait( 1 );obj << Surface Gradients( 9 );

```

### Surface Gradients1

**Syntax:** obj &lt;&lt; Surface Gradients( number ); obj &lt;&lt; Surface Gradients1( number )

**Description:** Specifies the number of gradient lines on the surface of the first response. This option is available only if discrete gradients are used.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Surface Color Method( ":Pred Formula ABRASION" ));obj << Surface Gradient Type( "Discrete Gradients" );Wait( 1 );obj << Surface Gradients( 9 );

```

### Surface Gradients2

**Syntax:** obj &lt;&lt; Surface Gradients2( number )

**Description:** Specifies the number of gradient lines on the surface of the second response. This option is available only if discrete gradients are used.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Show Surface2( "Both sides" ),	Surface Color Method( "Solid", ":Pred Formula MODULUS" ));obj << Surface Gradient Type2( "Discrete Gradients" );Wait( 1 );obj << Surface Gradients2( 8 );

```

### Surface Gradients3

**Syntax:** obj &lt;&lt; Surface Gradients3( number )

**Description:** Specifies the number of gradient lines on the surface of the third response. This option is available only if discrete gradients are used.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Show Surface3( "Both sides" ),	Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" ));obj << Surface Gradient Type3( "Discrete Gradients" );Wait( 1 );obj << Surface Gradients3( 10 );

```

### Surface Gradients4

**Syntax:** obj &lt;&lt; Surface Gradients4( number )

**Description:** Specifies the number of gradient lines on the surface of the fourth response. This option is available only if discrete gradients are used.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Show Surface4( "Both sides" ),	Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" ));obj << Surface Gradient Type4( "Discrete Gradients" );Wait( 1 );obj << Surface Gradients4( 9 );

```

### Surface Lighting

**Syntax:** obj &lt;&lt; Surface Lighting( "None"|"Low Reflection"|"Normal" ); obj &lt;&lt; Surface Lighting1( "None"|"Low Reflection"|"Normal" )

**Description:** Specifies the surface lighting on the surface for the first response. This option is available only with continuous and discrete gradients.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Surface Lighting( "Low Reflection" );

```

### Surface Lighting1

**Syntax:** obj &lt;&lt; Surface Lighting( "None"|"Low Reflection"|"Normal" ); obj &lt;&lt; Surface Lighting1( "None"|"Low Reflection"|"Normal" )

**Description:** Specifies the surface lighting on the surface for the first response. This option is available only with continuous and discrete gradients.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Surface Lighting( "Low Reflection" );

```

### Surface Lighting2

**Syntax:** obj &lt;&lt; Surface Lighting2( "None"|"Low Reflection"|"Normal" )

**Description:** Specifies the surface lighting on the surface for the second response. This option is available only with continuous and discrete gradients.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );obj << Show Surface2( "Both Sides" );obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );Wait( 1 );obj << Surface Lighting2( "Normal" );

```

### Surface Lighting3

**Syntax:** obj &lt;&lt; Surface Lighting3( "None"|"Low Reflection"|"Normal" )

**Description:** Specifies the surface lighting on the surface for the third response. This option is available only with continuous and discrete gradients.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Show Surface3( "Both Sides" );obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );Wait( 1 );obj << Surface Lighting3( "Low Reflection" );

```

### Surface Lighting4

**Syntax:** obj &lt;&lt; Surface Lighting4( "None"|"Low Reflection"|"Normal" )

**Description:** Specifies the surface lighting on the surface for the fourth response. This option is available only with continuous and discrete gradients.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Show Surface4( "Both Sides" );obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );Wait( 1 );obj << Surface Lighting4( "Normal" );

```

### Surface Selector

**Syntax:** obj &lt;&lt; Surface Selector( state=0|1 )

**Description:** Shows or hides the surface options in the Dependent Variables controls. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Surface Selector( 0 );

```

### X Grid

**Syntax:** obj &lt;&lt; X Grid( state=0|1 )

**Description:** Shows or hides a grid that is perpendicular to the X axis.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << X Grid( 1 );

```

### X Resolution

**Syntax:** obj &lt;&lt; Resolution( number ) obj &lt;&lt; X Resolution( number ) obj &lt;&lt; Y Resolution( number )

**Description:** Changes the resolution that is used to draw the surface plot.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Mode( "Isosurface" );Wait( 1 );obj << Resolution( 4 );Wait( 1 );obj << Resolution( 12 );

```

### XRotate

**Syntax:** obj &lt;&lt; XRotate( degrees )

**Description:** Rotates the surface plot on the X axis.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << XRotate( 30 );

```

### Y Grid

**Syntax:** obj &lt;&lt; Y Grid( state=0|1 )

**Description:** Shows or hides a grid that is perpendicular to the Y axis.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Y Grid( 1 );

```

### Y Resolution

**Syntax:** obj &lt;&lt; Resolution( number ) obj &lt;&lt; X Resolution( number ) obj &lt;&lt; Y Resolution( number )

**Description:** Changes the resolution that is used to draw the surface plot.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Mode( "Isosurface" );Wait( 1 );obj << Resolution( 4 );Wait( 1 );obj << Resolution( 12 );

```

### YRotate

**Syntax:** obj &lt;&lt; YRotate( degrees )

**Description:** Rotates the surface plot on the Y axis.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << YRotate( 20 );

```

### Z Grid

**Syntax:** obj &lt;&lt; Z Grid( state=0|1 )

**Description:** Shows or hides a grid that is perpendicular to the Z axis.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Z Grid( 1 );

```

### Z Grid Position

**Syntax:** obj &lt;&lt; Z Grid Position( fraction )

**Description:** Moves the Z grid to the percent specified.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Z Grid( 1 );Wait( 1 );obj << Z Grid Position( 0.733 );

```

### ZRotate

**Syntax:** obj &lt;&lt; ZRotate( degrees )

**Description:** Rotates the surface plot on the Z axis.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << ZRotate( 45 );

```

## Shared Item Messages

### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

#### Anonymous preset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

#### Search by name

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Search within folder(s)

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Platform with Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));t = obj << Get Timing;Show( t );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Relaunch Analysis;

```

### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Description:** Returns a reference to the report object.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Surface Plot(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Surface Frame3D

### Associated Constructors

#### Surface Frame3D

**Syntax:** Surface Frame3D( &lt;commands passed to Frame3D&gt; )

**Description:** Sends display commands to the 3D plot.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));

```

### Item Messages

#### Add Ellipsoid

**Syntax:** obj &lt;&lt; Add Ellipsoid( 4x4 matrix ) obj &lt;&lt; Add Ellipsoid(3x3 cov,3x1 means) obj &lt;&lt; Add Ellipsoid(3x3 corr,3x1 means,3x1 std dev)

**Description:** Draws an ellipsoid on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D(	Add Ellipsoid(		[1 0.42632 0.85183, 0.42632 1 0.34418, 0.85183 0.34418 1],		[6.55099 2.96919 5.5066],		[0.57829 0.29087 0.53668]	));

```

#### Add Markers

**Syntax:** obj &lt;&lt; Add Markers( [ nx1 X matrix ], [ nx1 Y matrix ], [ nx1 Z matrix ] )

**Description:** Draws n markers on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Add Markers( [2 3 4], [5 6 7], [1 8 9] ) );

```

#### Add Vector

**Syntax:** obj &lt;&lt; Add Vector( [ 3xn from matrix ], [ 3xn to matrix ], FromCap( CutOff|Sphere|Point|Feather ), ToCap( CutOff|Sphere|Point|Feather ), Facets( Triangle|Square|Round ), Shaft Color( color ), Shaft Thickness( number ), From Thickness( number ), To Thickness( number ), From Color( number ), To Color( number ) ) )

**Description:** Draws a vector or arrow on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Add Vector( [4.5 2 1], [7.5 4 6], FromCap( "Feather" ), ToCap( "Point" ) ) );

```

#### Get Axes

**Syntax:** obj &lt;&lt; Get Axes

**Description:** Returns the state of displaying the axes on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));s = obj << Frame3D( Get Axes );Show( s );

```

#### Get Box

**Syntax:** obj &lt;&lt; Get Box

**Description:** Returns the state of displaying the box frame on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));s = obj << Frame3D( Get Box );Show( s );

```

#### Get Grab Handles

**Syntax:** obj &lt;&lt; Get Grab Handles

**Description:** Returns the state of displaying the grab handles on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));s = obj << Frame3D( Get Box );Show( s );

```

#### Get Graph Size

**Syntax:** obj &lt;&lt; Get Graph Size

**Description:** Returns the size of the graph.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));s = obj << Frame3D( Get Graph Size );Show( s );

```

#### Get Grids

**Syntax:** obj &lt;&lt; Get Grids

**Description:** Returns the state of displaying the grids on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));s = obj << Frame3D( Get Grids );Show( s );

```

#### Get Hide Lights Border

**Syntax:** obj &lt;&lt; Get Hide Lights Border

**Description:** Returns the state of the lights border around the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));state = obj << Frame3D( Get Hide Lights Border );Show( state );

```

#### Get Line Scale

**Syntax:** obj &lt;&lt; Get Line Scale

**Description:** Returns the line width for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));w = obj << Frame3D( Get Line Scale );Show( w );

```

#### Get Marker Quality

**Syntax:** obj &lt;&lt; Get Marker Quality

**Description:** Returns the marker characteristics such as shape and shade for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));q = obj << Frame3D( Get Marker Quality );Show( q );

```

#### Get Marker Scale

**Syntax:** obj &lt;&lt; Get Marker Scale

**Description:** Returns the marker size for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));s = obj << Frame3D( Get Marker Scale );Show( s );

```

#### Get Marker Transparency

**Syntax:** obj &lt;&lt; Get Marker Transparency

**Description:** Returns the marker transparency for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));t = obj << Frame3D( Get Marker Transparency );Show( t );

```

#### Get Rotation

**Syntax:** obj &lt;&lt; Get Rotation

**Description:** Returns the current rotation for the frame.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));r = obj << Frame3D( Get Rotation() );Show( r );

```

#### Get Text Scale

**Syntax:** obj &lt;&lt; Get Text Scale

**Description:** Returns the text size for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));s = obj << Frame3D( Get Text Scale );Show( s );

```

#### Get View Ortho

**Syntax:** obj &lt;&lt; Get View Ortho

**Description:** Returns the state of the orthographic view for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));o = obj << Frame3D( Get View Ortho );Show( o );

```

#### Get View Perspective

**Syntax:** obj &lt;&lt; Get View Perspective

**Description:** Returns the view perspective for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));p = obj << Frame3D( Get View Perspective );Show( p );

```

#### Get View Zoom

**Syntax:** obj &lt;&lt; Get View Zoom

**Description:** Returns the current zoom for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));z = obj << Frame3D( Get View Zoom );Show( z );

```

#### Get Wall Color

**Syntax:** obj &lt;&lt; Get Wall Color

**Description:** Returns the wall color for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));c = obj << Frame3D( Get Wall Color );Show( c );

```

#### Get Walls

**Syntax:** obj &lt;&lt; Get Walls

**Description:** Returns the state of displaying the walls on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));s = obj << Frame3D( Get Walls );Show( s );

```

#### Get X Axis Color

**Syntax:** obj &lt;&lt; Get X Axis Color

**Description:** Returns the x axis color for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));c = obj << Frame3D( Get X Axis Color );Show( c );

```

#### Get X Axis Label

**Syntax:** obj &lt;&lt; Get X Axis Label

**Description:** Returns the label for the X Axis on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));label = obj << Frame3D( Get X Axis Label );Show( label );

```

#### Get Y Axis Color

**Syntax:** obj &lt;&lt; Get Y Axis Color

**Description:** Returns the y axis color for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));c = obj << Frame3D( Get Y Axis Color );Show( c );

```

#### Get Y Axis Label

**Syntax:** obj &lt;&lt; Get Y Axis Label

**Description:** Returns the label for the Y Axis on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));label = obj << Frame3D( Get Y Axis Label );Show( label );

```

#### Get Z Axis Color

**Syntax:** obj &lt;&lt; Get Z Axis Color

**Description:** Returns the z axis color for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));c = obj << Frame3D( Get Z Axis Color );Show( c );

```

#### Get Z Axis Label

**Syntax:** obj &lt;&lt; Get Z Axis Label

**Description:** Returns the label for the Z Axis on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));label = obj << Frame3D( Get Z Axis Label );Show( label );

```

#### Legend

**Syntax:** obj &lt;&lt; Legend( state=0|1 )

**Description:** Displays or hides the legend on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Show Surface2( Both Sides ));obj << Frame3D( Legend( 0 ) );Wait( 2 );obj << Frame3D( Legend( 1 ) );

```

#### Set Axes

**Syntax:** obj &lt;&lt; Set Axes( state=0|1 )

**Description:** Shows or hides the x, y, and z axes on the plot. On by default.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Axes( 1 ) );

```

#### Set Box

**Syntax:** obj &lt;&lt; Set Box( state=0|1 )

**Description:** Shows or hides the box frame on the plot. On by default.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Box( 1 ) );

```

#### Set Graph Size

**Syntax:** obj &lt;&lt; Set Graph Size( x, y )

**Description:** Sets the size of the graph.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Graph Size( 700, 800 ) );

```

#### Set Grids

**Syntax:** obj &lt;&lt; Set Grids( state=0|1 )

**Description:** Shows or hides the grids on the plot. On by default.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Grids( 1 ) );

```

#### Set Hide Lights Border

**Syntax:** obj &lt;&lt; Set Hide Lights Border( state=0|1 )

**Description:** Hides or displays the lights border around the plot. On by default.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Hide Lights Border( 0 ) );

```

#### Set Line Scale

**Syntax:** obj &lt;&lt; Set Line Scale( number )

**Description:** Sets the line width for the grid on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Line Scale( 6.5 ) );

```

#### Set Marker Quality

**Syntax:** obj &lt;&lt; Set Marker Quality( number )

**Description:** Sets the marker characteristics such as shape and shade for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Marker Scale( 3 ), Set Marker Quality( 0.2625 ) );

```

#### Set Marker Scale

**Syntax:** obj &lt;&lt; Set Marker Scale( number )

**Description:** Sets the marker size for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Marker Scale( 3.5 ) );

```

#### Set Marker Transparency

**Syntax:** obj &lt;&lt; Set Marker Transparency( fraction )

**Description:** Sets the marker transparency for the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Marker Transparency( 0.4125 ) );

```

#### Set Oscillation

**Syntax:** obj &lt;&lt; Set Oscillation( X, Y, Z, duration )

**Description:** Sets oscillation rate on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Rotation( -60, -3, 35 ), Set Oscillation( -54, 0, 38, 100 ) );

```

#### Set Rotation

**Syntax:** obj &lt;&lt; Set Rotation( X, Y, Z )

**Description:** Rotates the frame to the specified coordinates.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Rotation( -60, -3, 35 ) );

```

#### Set Spin

**Syntax:** obj &lt;&lt; Set Spin( dx, dy, sx, sy )

**Description:** Spins the graph on a specified axis. The values dx and dy are a delta motion of the mouse from the point, (sx, sy).

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Spin( .01, .01, 0, 0 ) );

```

#### Set Text Scale

**Syntax:** obj &lt;&lt; Set Text Scale( number )

**Description:** Sets the text size for the axis text on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Text Scale( 1.4 ) );

```

#### Set View Ortho

**Syntax:** obj &lt;&lt; Set View Ortho( state=0|1 )

**Description:** Displays the plot orthographically or linearly.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set View Ortho( 1 ) );

```

#### Set View Perspective

**Syntax:** obj &lt;&lt; Set View Perspective( fraction )

**Description:** Sets the view perspective on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set View Perspective( 0.275 ) );

```

#### Set View Zoom

**Syntax:** obj &lt;&lt; Set View Zoom( number )

**Description:** Sets the zoom on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set View Zoom( 0.5 ) );Wait( 2 );obj << Frame3D( Set View Zoom( 2 ) );

```

#### Set Wall Color

**Syntax:** obj &lt;&lt; Set Wall Color( number )

**Description:** Sets the wall color on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Wall Color( -16775543 ) );

```

#### Set Walls

**Syntax:** obj &lt;&lt; Set Walls( state=0|1 )

**Description:** Shows or hides the walls on the plot. On by default.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Walls( 1 ) );

```

#### Set X Axis Color

**Syntax:** obj &lt;&lt; Set X Axis Color( color )

**Description:** Sets the x axis color on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set X Axis Color( 5 ) );

```

#### Set X Axis Label

**Syntax:** obj &lt;&lt; Set X Axis Label( string )

**Description:** Sets the label for the X Axis on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set X Axis Label( "Iris Sepal Length" ) );

```

#### Set Y Axis Color

**Syntax:** obj &lt;&lt; Set Y Axis Color( color )

**Description:** Sets the y axis color on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Y Axis Color( 11 ) );

```

#### Set Y Axis Label

**Syntax:** obj &lt;&lt; Set Y Axis Label( string )

**Description:** Sets the label for the Y Axis on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Y Axis Label( "Iris Petal Length" ) );

```

#### Set Z Axis Color

**Syntax:** obj &lt;&lt; Set Z Axis Color( color )

**Description:** Sets the z axis color on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Z Axis Color( "Green" ) );

```

#### Set Z Axis Label

**Syntax:** obj &lt;&lt; Set Z Axis Label( string )

**Description:** Sets the label for the Z Axis on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Z Axis Label( "Iris Sepal Width" ) );

```

#### XAxis

**Syntax:** obj &lt;&lt; XAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Description:** Sets the values for the X Axis on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( XAxis( Min( 3 ), Max( 10 ) ) );

```

#### YAxis

**Syntax:** obj &lt;&lt; YAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Description:** Sets the values for the Y Axis on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( YAxis( Min( 1 ), Max( 10 ), Inc( 0.5 ) ) );

```

#### Z Axis

**Syntax:** obj &lt;&lt; Z Axis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Description:** Sets the values for the Z Axis on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( ZAxis( Min( 1 ), Max( 5 ), Inc( 0.25 ) ) );

```

#### get light active

**Syntax:** obj &lt;&lt; get light active( light number )

**Description:** Returns the specified light activation shining on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Active( 2 ) );Show( p );

```

#### get light color

**Syntax:** obj &lt;&lt; get light color( light number )

**Description:** Returns the specified light color shining on the plot as a list {red, green, blue}.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));c = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Color( 1 ) );Show( c );

```

#### get light position

**Syntax:** obj &lt;&lt; get light position( light number )

**Description:** Returns the specified light position shining on the plot as a list {x, y, z}.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Position( 2 ) );Show( p );

```

#### set light active

**Syntax:** obj &lt;&lt; set light active( light number, state=0|1 )

**Description:** Turns on the specified light shining on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Active( 4, 1 ) );

```

#### set light color

**Syntax:** obj &lt;&lt; set light color( light number, red value, green value, blue value )

**Description:** Sets the color of the light shining on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Color( 2, 240, 50, 70 ) );

```

#### set light position

**Syntax:** obj &lt;&lt; set light position( light number, X, Y, Z )

**Description:** Sets the light position shining on the plot.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Position( 2, -1.5833, 10, 0 ) );

```

