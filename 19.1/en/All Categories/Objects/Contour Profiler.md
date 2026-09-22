# Contour Profiler



## Associated Constructors

### Contour Profiler

**Syntax:** Contour Profiler( Y( column1, column2, ... ) )

**Description:** Produces an interactive contour plot that enables you to explore how one or more predicted responses change across pairs of factors. The values of factors not used in the plot can be varied to further explore the impact of the factor settings on the predicted responses.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));

```

## Columns

### Noise Factors

**Syntax:** obj = Contour Profiler(...&lt;Noise Factors( column(s) )&gt;...)

**Description:** Specifies noise factors, which must be columns that are ingredients to the formula columns. Noise factors are used to study robustness (or flatness) with respect to transmitted variation from these factors. The resulting profiler includes derivatives of the formulas with respect to the noise factors.

**Contour Profiler Example**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Noise Factors( :SILANE ));

```

**Custom Profiler Example**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Noise Factors( :SILANE ));

```

**Mixture Profiler Example**

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ), Noise Factors( :p1 ) );

```

**Profiler Example**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Noise Factors( :SILANE ));

```

### Prediction Formula

**Syntax:** obj = Contour Profiler(...Prediction Formula( column(s) )...)

**Description:** Specifies the response columns that contain formulas.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));

```

### Y

**Syntax:** obj = Contour Profiler(...Y( column(s) )...)

**Description:** Specifies the response columns that contain formulas.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));

```

## Item Messages

### Animation

**Syntax:** obj &lt;&lt; Animation( &lt;Tour Type( "Sequential"|("Single Factor",factorname)|"Random"|"Data Sequential"|"Data Random" )&gt;, &lt;Speed(ticks)&gt;, &lt;Go&gt;, &lt;Stop&gt; )

**Description:** Starts or stops the animation of the profiler. You can also specify how the animation cycles through factor combinations.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Animation( Tour Type( "Sequential" ), Go );Wait( 3 );obj << Animation( "Stop" );

```

### Append Settings to Table

**Syntax:** obj &lt;&lt; Append Settings to Table

**Description:** Saves the settings of the current profiler as a new row at the end of the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Append Settings to Table;

```

### Arrange X Controls Left

**Syntax:** obj &lt;&lt; Arrange X Controls Left( state=0|1 )

**Description:** Rearranges the X and Y controls horizontally so that the X controls are on the left.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Arrange X Controls Left( 1 );

```

### Broadcast Factor Settings

**Syntax:** obj &lt;&lt; Broadcast Factor Settings

**Description:** Sends the factor settings for the current profiler to all other profilers. This option does not link the profilers.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ),	Term Value(		SILICA( 1.75, Lock( 0 ), Show( 1 ) ),		SILANE( 45.2, Lock( 0 ), Show( 1 ) ),		SULFUR( 2.45, Lock( 0 ), Show( 1 ) )	));obj << Contour Profiler( 1 );Wait( 1 );obj << Broadcast Factor Settings;

```

### Clipping

**Syntax:** obj &lt;&lt; Clipping( horizCenter,horizWidth,verticalCenter,VerticalWidth )

**Description:** Sets up a clipping region, which is circular for wafer maps.

```jsl

dt = Open( "$Sample_Data/Wafer Stacked.jmp" );Neural(	Y( :Defects ),	X( :X_Die, :Y_Die ),	Informative Missing( 0 ),	Validation Method( "Holdback", 0.3333 ),	Fit(		NGaussian( 9 ),		Contour Profiler(			1,			Term Value(				:X_Die( 0, Lock( 0 ), Show( 1 ) ), :Y_Die( 0, Lock( 0 ), Show( 1 ) )			),			Contour Value( :Defects( 0.1309, Min( -0.28 ), Max( 7.28 ) ) ),			Grid Density( "40 x 40" ),			Contour Grid( 0, 0.275, 0.025, :Defects, Filled( 1 ), Reverse Scale( 0 ) ),			Horizontal Factor( :X_Die ),			Vertical Factor( :Y_Die ),			Clipping( {0, 0}, {42, 42} )		)	),	SendToReport(		Dispatch( {"Model NGaussian(9)", "Contour Profiler"}, "Contour Profiler Frame",			FrameBox,			{Frame Size( 400, 400 )}		)	));

```

### Conditional Predictions

**Syntax:** scrobj &lt;&lt; Conditional Predictions( state=0|1 )

**Description:** Includes random effects when formulating the predicted value and profiles. This option is available only when random effects are included in the model.

```jsl

dt = Open( "$Sample_Data/Reactor.jmp" );Column( "A" ) << Set Modeling Type( "Nominal" );obj = dt << Fit Model(	Y( :Y ),	Effects( :Ct, :T, :Cn, :Ct * :T, :T * :Cn ),	Random Effects( :A ),	Emphasis( "Minimal Report" ),	Run( Contour Profiler( 1 ) ));scrobj = (Report( obj )["Contour Profiler"] << get scriptable object);scrobj << Conditional Predictions( 1 );

```

### Contour Grid

**Syntax:** obj &lt;&lt; Contour Grid( minimum, maximum, increment, y column, Filled( state=0|1 ), Reverse Scale( state=0|1 ) )

**Description:** Draws a contour grid on the contour profiler. The grid is based on the specified intervals.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Contour Grid( 525.7492294, 2173.9472704279, 206.024755128638, :PredFormulaMODULUS );

```

### Contour Label

**Syntax:** obj &lt;&lt; Contour Label( state=0|1 )

**Description:** Shows or hides the name of the response variables as labels on the contour profiler. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Contour Label( 0 );

```

### Contour Value

**Syntax:** obj &lt;&lt; Contour Value( y1( number, &lt;Lo Limit( number )&gt;, &lt;Hi Limit( number )&gt;, &lt;Min( number )&gt;, &lt;Max( number )&gt;), y2 (...) )

**Description:** Sets specific contour values for responses in the contour profiler.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Contour Value(	:PredFormulaAbrasion( 167, Lo Limit( 160 ), Hi Limit( 180 ) ), :Pred Formula Elong( 320 ));

```

### Copy Settings Script

**Syntax:** obj &lt;&lt; Copy Settings Script

**Description:** Copies the current factor settings to the clipboard. The settings can then be pasted into another profiler.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Set to Data in Row( 4 );obj << Copy Settings Script;obj2 = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj2 << Paste Settings Script;

```

### Custom Profiler

**Syntax:** obj &lt;&lt; Custom Profiler( state=0|1 )

**Description:** Shows or hides the Custom Profiler.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Custom Profiler( 1 );

```

### Data Points

**Syntax:** obj &lt;&lt; Data Points( state=0|1 )

**Description:** Shows or hides the data points.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Data Points( 1 );

```

### Formulas for OPTMODEL

**Syntax:** obj &lt;&lt; Formulas for OPTMODEL

**Description:** Saves the prediction formulas from the model in a new file as SAS statements for PROC OPTMODEL.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Formulas for OPTMODEL;

```

### Get Constraints

**Syntax:** obj &lt;&lt; Get Constraints

**Description:** Returns a list of factor constraints.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Profiler(	Y( :Pred Formula Y ),	Profiler( 1, Profile at Boundary( "Stop at Boundaries" ), ));obj << Get Constraints;

```

### Get Factor Settings

**Syntax:** obj &lt;&lt; Get Factor Settings

**Description:** Returns the current factor settings as a list.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Get Factor Settings;

```

### Get Factor Settings Script

**Syntax:** obj &lt;&lt; Get Factor Settings Script

**Description:** Returns the current factor settings as an expression that can be used in a script.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Get Factor Settings Script;

```

### Get Simulator

**Syntax:** obj &lt;&lt; Get Simulator

**Description:** Returns a reference to the Simulator.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Simulator(	1,	Factors(		SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Fixed( 50 ),		SULFUR << Fixed( 2.25 )	),	Responses(		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,		Pred Formula ELONG << Add Random Noise( 1 ),		Pred Formula HARDNESS << Add Random Weighted Noise( 1 )	));obj2 = obj << Get Simulator;obj2 << Simulation Experiment;

```

### Graph Updating

**Syntax:** obj &lt;&lt; Graph Updating( "Per Mouse Move"|"Per Mouse Up" )

**Description:** Sets the frequency of updating the Contour Profiler. The Per Mouse Move setting updates the graph as the mouse moves. The Per Mouse Up setting updates the graph after the mouse button has been released.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Graph Updating( "Per Mouse Up" );// use your mouse to move the slider scale for a response

```

### Grid Density

**Syntax:** obj &lt;&lt; Grid Density( "10 x 10"|"20 x 20"|"30 x 30"|"40 x 40"|"50 x 50"|"60 x 60" )

**Description:** Sets the density of the individual mesh or surface plots.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Grid Density( "10 x 10" );

```

### Hide X Controls

**Syntax:** obj &lt;&lt; Hide X Controls( state=0|1 )

**Description:** Shows or hides the control settings for the factors.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Hide X Controls( 1 );

```

### Hide Y Controls

**Syntax:** obj &lt;&lt; Hide Y Controls( state=0|1 )

**Description:** Shows or hides the control settings for the responses.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Hide Y Controls( 1 );

```

### Horizontal Factor

**Syntax:** obj &lt;&lt; Horizontal Factor( column )

**Description:** Specifies the factor that is displayed on the horizontal axis.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 2 );obj << Horizontal Factor( :SULFUR );

```

### Link Profilers

**Syntax:** obj &lt;&lt; Link Profilers( state=0|1 )

**Description:** Links all the profilers in a single report together, so that a change in a factor in one profiler causes that factor to change to that value in all other profilers.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Prediction Profiler( 1 );obj << Contour Profiler( 1 );obj << Link Profilers( 1 );Wait( 1 );obj << Term Value( :Silica( 1.78 ), :Sulfur( 2.34 ) );

```

### Multiple Contour Frames

**Syntax:** obj &lt;&lt; Multiple Contour Frames( Horizontal Factor( column ), Vertical Factor( column ), &lt;Remove Previous Frames&gt; )

**Description:** Adds another contour plot that represents the specified combination of factors.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Multiple Contour Frames( Horizontal Factor( :SULFUR ), Vertical Factor( :SILANE ) );

```

### Number of Plots Across

**Syntax:** obj &lt;&lt; Number of Plots Across( number )

**Description:** Specifies the layout of the plots when multiple contour frames are shown in the report.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Multiple Contour Frames( Horizontal Factor( :Sulfur ), Vertical Factor( :Silane ) );obj << Multiple Contour Frames( Horizontal Factor( :Silane ), Vertical Factor( :Silica ) );obj << Number of Plots Across( 2 );

```

### Paste Settings Script

**Syntax:** obj &lt;&lt; Paste Settings Script

**Description:** Pastes the profiler settings from the clipboard to a profiler in another report.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Set to Data in Row( 4 );obj << Copy Settings Script;obj2 = Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj2 << Paste Settings Script;

```

### Predict for Another Table

**Syntax:** obj &lt;&lt; Predict for Another Table( &lt;data table&gt; )

**Description:** Adds prediction columns to a specified data table, using the factors in that table. This option is available only for continuous responses.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));dt2 = dt << Subset(	All rows,	columns( :SILICA, :SILANE, :SULFUR ),	Output Table( "Subset" ));obj << Predict For Another Table( dt2 );

```

### Prediction Profiler

**Syntax:** obj &lt;&lt; Prediction Profiler( state=0|1 )

**Description:** Shows or hides the Prediction Profiler.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Prediction Profiler( 1 );

```

### Remember Settings

**Syntax:** obj &lt;&lt; Remember Settings

**Description:** Adds an outline node to the report with the values of the factor settings.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Remember Settings;

```

### Remove Contour Grid

**Syntax:** obj &lt;&lt; Remove Contour Grid

**Description:** Removes the contour grid that is overlaid on the contour profiler.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Contour Grid( 525.7492294, 2173.9472704279, 206.024755128638, :PredFormulaMODULUS );Wait( 2 );obj << Remove Contour Grid;

```

### Reset

**Syntax:** obj &lt;&lt; Reset

**Description:** Updates the predictions at the current values.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Term Value( :Silica( 1.78 ), :Sulfur( 2.34 ) );obj << Reset;

```

### Save Expanded Formulas

**Syntax:** obj &lt;&lt; Save Expanded Formulas

**Description:** Saves a new formula column to the data table. The new column contains resolved formula references within the formulas used as Y variables to see the underlying variables. This is available only after the Expand Intermediate Formulas option is selected in the launch window or the Expand message is specified in the Profiler script.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Profiler( Y( :GP Fit, :NL Fit, :Difference ), Expand, Contour Profiler( 1 ) );obj << Save Expanded Formulas;

```

### Set Contours to Current

**Syntax:** obj &lt;&lt; Set Contours to Current

**Description:** Resets the contour lines to where the current Y values are located.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Contour Value(	:PredFormulaAbrasion( 167, Lo Limit( 160 ), Hi Limit( 180 ) ), :Pred Formula Elong( 320 ));Wait( 1 );obj << Set Contours to Current;

```

### Set Script

**Syntax:** obj &lt;&lt; Set Script( Function( {arguments}, &lt;{locals}&gt;, expr ) )

**Description:** Sets a script that is run each time a factor changes.

```jsl

ProfileCallbackLog = Function( {arg}, Show( arg ) );dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Set Script( ProfileCallbackLog );obj << Term Value( :Silica( 1 ) );

```

### Set to Data in Row

**Syntax:** obj &lt;&lt; Set to Data in Row( row number )

**Description:** Assigns the values of a data table row to the X variables in the profiler.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 2 );obj << Set to Data in Row( 4 );

```

### Show Formulas

**Syntax:** obj &lt;&lt; Show Formulas

**Description:** Opens a script window that contains JSL for all formulas that are being profiled.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Show Formulas;

```

### Simulator

**Syntax:** obj &lt;&lt; Simulator( state=0|1 )

**Description:** Shows or hides the Simulator.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Simulator( 1 );

```

### Surface Plot

**Syntax:** obj &lt;&lt; Surface Plot( state=0|1 )

**Description:** Shows or hides the individual mesh plots.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Surface Plot( 1 );

```

### Surface Profiler

**Syntax:** obj &lt;&lt; Surface Profiler( state=0|1 )

**Description:** Shows or hides the Surface Profiler.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Surface Profiler( 1 );

```

### Term Value

**Syntax:** obj &lt;&lt; Term Value( (x1( number ),x2( number ), ... )

**Description:** Sets specific term values for factors on the contour profiler.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Term Value( :Silica( 1.78 ), :Sulfur( 2.34 ) );

```

### Unthreaded

**Syntax:** obj &lt;&lt; Unthreaded( state=0|1 )

**Description:** To suppress any multithreading in evaluating the profile traces, the contour grid, and the optimizer trips.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Desirability Functions( 1 );obj << Unthreaded( 1 );obj << Maximize Desirability;

```

### Up Dots

**Syntax:** obj &lt;&lt; Up Dots( state=0|1 )

**Description:** Shows or hides dots next to the contour lines. These dots indicate the upward direction of the response. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Up Dots( 0 );

```

### Vertical Factor

**Syntax:** obj &lt;&lt; Vertical Factor( column )

**Description:** Specifies the factor that is displayed on the vertical axis.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 2 );obj << Vertical Factor( :SULFUR );

```

### Y Colors

**Syntax:** obj &lt;&lt; Y Colors( color1, color2, ... )

**Description:** Specifies the colors for each Y term in both the contour plot and the individual mesh plots.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Surface Plot( 1 ));obj << Y Colors( 8, 4, 5, 46 );

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

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Platform with Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Report View( "Summary" );

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

