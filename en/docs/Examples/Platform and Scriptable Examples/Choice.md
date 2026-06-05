# Choice

## Choice using Text Explorer
### Example 1
> **Summary**: Opens a data table, initiates the Text Explorer platform, and configures it to analyze text columns with term selection, tokenizing, and language processing. The script defines a model with response column, DTM size, and target levels.

<!-- Keywords: #TextExplorer, #TermSelection, #DTM, #TargetLevels, #JSL -->

**Code**:
```jsl
// Text Explorer - Term Selection
// Open data table
dt = Open("data_table.jmp");
// Text Explorer - Term Selection
Text Explorer(
	Text Columns(
		:Potato Chip Product Review
	),
	Term Selection(
		Show Term Cloud( 1 ),
		Models(
			Model(
				Response Column(
					:Buy again?
				),
				DTM Size( 20 ),
				Target Levels(
					Target String(
						"Yes"
					)
				)
			),
			Current Model Settings(
				Response Column(
					:Buy again?
				),
				DTM Size( 20 ),
				Target Levels(
					Target String(
						"Yes"
					)
				)
			)
		),
		Model Choice( 1 )
	),
	Tokenizing( "Basic Words" ),
	Treat Numbers as Words( 1 ),
	Language( "English" )
);
```

**Code Explanation**:

1. Open table.
2. Initiate Text Explorer.
3. Select text column.
4. Enable term cloud display.
5. Define first model.
6. Set response column.
7. Specify DTM size.
8. Define target level.
9. Set current model settings.
10. Choose model.



### Example 2
> **Summary**: Analyze text columns in a data table, utilizing Text Explorer to extract term and phrase lists with specified regex libraries and local data filtering.

<!-- Keywords: #TextExplorer, #RegexLibraries, #LocalDataFiltering, #TermAndPhraseLists, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Phrasing Punctuation" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" )
	),
	Term Selection(
		Show Term Cloud( 1 ),
		Models(
			Model( Response Column( :Single Status ), DTM Size( 20 ), Target Levels( Target Number( 1 ), Target String( "1" ) ) ),
			Current Model Settings(
				Response Column( :Single Status ),
				DTM Size( 20 ),
				Target Levels( Target Number( 1 ), Target String( "1" ) )
			)
		),
		Model Choice( 1 )
	),
	Language( "English" ),
	Local Data Filter( Add Filter( columns( :Gender ), Where( :Gender == 1 ) ) ), 
);
obj << Add Stop Words( {"brushing", "flossing", "forget", "just", "like", "need"} );
rpt = obj << report;
dtTerm = rpt[Outline Box( "Term and Phrase Lists" )][Border Box( 1 )][Table Box( 1 )] << make into data table;
```

**Code Explanation**:

1. Open data table;
2. Create Text Explorer object.
3. Set regex libraries.
4. Configure term selection.
5. Specify response column.
6. Define DTM size.
7. Set target levels.
8. Choose model.
9. Set language to English.
10. Apply local data filter.
11. Add stop words.
12. Generate report.
13. Extract term and phrase lists.
14. Convert to data table.



### Example 3
> **Summary**: Implements sentiment analysis on a text column, utilizing Text Explorer to extract relevant terms and libraries, and then performs sentiment analysis with customizable stem exceptions.

<!-- Keywords: #TextExplorer, #SentimentAnalysis, #JSLScriptingLanguage, #NaturalLanguageProcessing, #DataAnalytics -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
obj2 = dt2 << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Term Selection(
		Show Term Cloud( 1 ),
		Models(
			Model( Response Column( :Gender ), DTM Size( 31 ), Target Levels( Target Number( 1 ), Target String( "1" ) ) ),
			Current Model Settings( Response Column( :Gender ), DTM Size( 31 ), Target Levels( Target Number( 1 ), Target String( "1" ) ) )
		),
		Model Choice( 1 )
	),
	Language( "English" )
);
obj2 << Sentiment Analysis;
obj2 << Add Stem Exceptions( {"use", "feel", "like"} );
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer platform.
3. Select text column for analysis.
4. Set regex libraries.
5. Configure term selection settings.
6. Specify models for analysis.
7. Set current model settings.
8. Choose first model.
9. Set language to English.
10. Perform sentiment analysis.
11. Add stem exceptions.



### Example 4
> **Summary**: Analyze text columns in a data table using Text Explorer, with regex libraries and term selection settings to extract relevant information.

<!-- Keywords: #TextExplorer, #RegexLibraries, #TermSelection, #DataAnalysis, #JMPScriptingLanguage -->

**Code**:
```jsl
dt5 = Open("data_table.jmp");
obj5 = dt5 << Text Explorer(
	Text Columns( :Narrative Cause ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Term Selection(
		Models(
			Model(
				Response Column( :Fatal ),
				DTM Size( 400 ),
				Target Levels( Target Number( 0 ), Target String( "0" ) ),
				Fits(
					First Fit(
						Fit(
							Estimation Method( Elastic Net ),
							Validation Method( AICc ),
							Early Stopping,
							Model Summary( 0 ),
							Parameter Estimates for Original Predictors( 0 ),
							Effect Tests( 0 )
						)
					)
				)
			),
			Model(
				Response Column( :Fatal ),
				DTM Size( 40 ),
				Target Levels( Target Number( 0 ), Target String( "0" ) ),
				Fits(
					First Fit(
						Fit(
							Estimation Method( Elastic Net ),
							Validation Method( AICc ),
							Early Stopping,
							Model Summary( 0 ),
							Parameter Estimates for Original Predictors( 0 ),
							Effect Tests( 0 )
						)
					)
				)
			),
			Current Model Settings( Response Column( :Fatal ), DTM Size( 40 ), Target Levels( Target Number( 0 ), Target String( "0" ) ) )
		),
		Model Choice( 2 )
	),
	Language( "English" )
);
```

**Code Explanation**:

1. Open data table.
2. Launch Text Explorer platform.
3. Specify text columns for analysis.
4. Set regex libraries for processing.
5. Configure term selection settings.
6. Define first model with DTM size 400.
7. Set response column and target levels.
8. Configure fit parameters for first model.
9. Define second model with DTM size 40.
10. Set current model settings and language.



## Choice using Surface Plot
### Example 1
> **Summary**: Generates a surface plot using the Surface Plot function, visualizing the relationship between x, y, and z variables from a data table. The script customizes various settings such as axis rotation, grid position, and graph size.

<!-- Keywords: #SurfacePlot, #JMPScriptingLanguage, #DataVisualization, #GraphBuilder, #Customization -->

**Code**:
```jsl
// Surface Plot
// Open data table
dt = Open("data_table.jmp");
// Surface Plot
Surface Plot(
	Columns( :x, :y, :z ),
	Control Panel( 0 ),
	Lock Z Scale( 1 ),
	Hide Lights Border( 1 ),
	Shine Choice( "Off" ),
	Datapoints Choice( "Points" ),
	Datapoints Choice2( "Points" ),
	Datapoints Choice3( "Points" ),
	XRotate( -77.6289809380828 ),
	YRotate( -2.91022337856568 ),
	ZRotate( 30.2534324018626 ),
	Z Grid Position( 0.523583333333333 ),
	Formula( "x", "y", "z" ),
	Response( "z", "z", :z ),
	Equation( "", "", "", "" ),
	SetVariableAxis(
		z,
		Current Value( 0.283 ),
		Axis Data(
			{Scale( "Linear" ),
			Format( "Best" ), Min( -1 ),
			Max( 1 ), Inc( 0.25 )}
		)
	),
	SetZAxis(
		z#4,
		Current Value(
			0.283000000000001
		)
	),
	Graph Size( 334, 334 )
);
```

**Code Explanation**:

1. Open data table.
2. Create surface plot.
3. Set columns for plot.
4. Disable control panel.
5. Lock Z scale.
6. Hide lights border.
7. Turn off shine.
8. Set datapoint choice to points.
9. Rotate X axis.
10. Rotate Y axis.
11. Rotate Z axis.
12. Set Z grid position.
13. Define formula.
14. Set response variable.
15. Define equation.
16. Set variable axis properties.
17. Set Z axis properties.
18. Set graph size.



### Example 2
> **Summary**: Generates a surface plot to visualize the relationship between Reaction Temperature, Reaction Time, and Yield using the Surface Plot function in JMP.

<!-- Keywords: #SurfacePlot, #JMPScriptingLanguage, #DataVisualization, #3DFrame, #GraphBuilder -->

**Code**:
```jsl
// Surface Plot
// Open data table
dt = Open("data_table.jmp");
// Surface Plot
Surface Plot(
	Columns( :Yield ),
	Control Panel( 0 ),
	Datapoints Choice( "Points" ),
	Formula( "Yield" ),
	Surface Color Method(
		"Solid", "Solid", "Solid",
		"Solid"
	),
	SetVariableAxis(
		Reaction Temperature,
		Axis Data(
			{Scale( "Linear" ),
			Format( "Best" ),
			Min( 517.5 ), Max( 542.5 ),
			Inc( 5 )}
		)
	),
	SetVariableAxis(
		Reaction Time,
		Axis Data(
			{Scale( "Linear" ),
			Format( "Best" ),
			Min( 0.075 ), Max( 0.325 ),
			Inc( 0.05 )}
		)
	),
	SetZAxis(
		Yield,
		Current Value( 0.425 ),
		Axis Data(
			{Scale( "Linear" ),
			Format( "Best" ), Min( 0.15 ),
			Max( 0.7 ), Inc( 0.1 )}
		)
	),
	Frame3D(
		Set Hide Lights Border( 1 ),
		Set Rotation( -54, 0, 38 )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create surface plot.
3. Set columns for plot.
4. Disable control panel.
5. Choose data points display.
6. Define formula for plot.
7. Set surface color method.
8. Configure reaction temperature axis.
9. Configure reaction time axis.
10. Configure yield axis.
11. Adjust 3D frame settings.



### Example 3
> **Summary**: Visualizes a surface plot to analyze the relationship between Reaction Temperature and Reaction Time, utilizing the Surface Plot function in JMP.

<!-- Keywords: #JMP, #SurfacePlot, #DataVisualization, #ReactionKinetics, #Graphing -->

**Code**:
```jsl
// Surface Plot
// Open data table
dt = Open("data_table.jmp");
// Surface Plot
Surface Plot(
	Columns( :Yield ),
	Control Panel( 0 ),
	Hide Lights Border( 1 ),
	Scale response axes independently(
		1
	),
	Datapoints Choice( "Points" ),
	XRotate( -67.3776687507792 ),
	YRotate( -5.03482899952444 ),
	ZRotate( 52.4071239021159 ),
	Formula( "Yield" ),
	Response( :Yield ),
	SetXVariable( Reaction Temperature ),
	SetYVariable( Reaction Time ),
	Graph( Background Color( 0, 0, 0 ) ),
	Graph Size( 443, 443 )
);
```

**Code Explanation**:

1. Open data table.
2. Create surface plot.
3. Set response column.
4. Disable control panel.
5. Hide lights border.
6. Scale axes independently.
7. Show data points.
8. Rotate X-axis.
9. Rotate Y-axis.
10. Rotate Z-axis.



### Example 4
> **Summary**: Creates a surface plot to visualize the relationship between sepal length, sepal width, and petal width in a dataset.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #JMPScripting, #GraphBuilder -->

**Code**:
```jsl
Open("data_table.jmp");
sp = Surface Plot(
	Columns( :sepal length, :sepal width ),
	Datapoints Choice( "Surface" ),
	Equation( "a+b+c" ),
	Surface Color Method( "Petal width" ), 
);
```

**Code Explanation**:

1. Open data table;
2. Create surface plot.
3. Set columns for X-axis.
4. Set columns for Y-axis.
5. Choose surface plot type.
6. Define equation for surface.
7. Assign color based on petal width.



### Example 5
> **Summary**: Creates a surface plot using the Surface Plot function, with columns for sepal length and width, and color method based on petal width.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #JMPScripting, #GraphBuilder -->

**Code**:
```jsl
Open("data_table.jmp");
sp = Surface Plot(
	Columns( :sepal length, :sepal width ),
	Datapoints Choice( "Surface" ),
	Equation( "a+b+c" ),
	Surface Color Method( "Petal width" ), 
);
sp << copy script;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot.
3. Set columns for plot.
4. Choose surface datapoints.
5. Define equation for plot.
6. Assign color method.
7. Copy plot script.



### Example 6
> **Summary**: Creates a surface plot from a data table, allowing for customization of columns, color themes, and axis settings.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #GraphBuilder, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
Surface Plot(
	Columns( :x, :y, :z ),
	Show Surface( "Off" ),
	Lock Z Scale( 1 ),
	Datapoints Choice( "Points" ),
	Datapoints Choice2( "Points" ),
	Datapoints Choice3( "Points" ),
	Z Grid Position( -0.172413793103448 ),
	Surface Color Theme( "Green to Black to Red" ),
	Surface Color Theme2( "Green to White to Red" ),
	Surface Color Theme3( "White to Black" ),
	Surface Color Theme4( "Blue to Gray to Red" ),
	Response Column Color Theme( "Blue to Green to Red" ),
	Response Column Color Theme2( "Spectral" ),
	Response Column Color Theme3( "Jet" ),
	Response Column Color Theme4( "White to Blue" ),
	Formula( "x", "y", "z" ),
	Response( Empty(), Empty(), :z ),
	Equation( "", "", "", "" ),
	Surface Color Method( "Solid", "Solid", "Solid", "Solid" ),
	SetVariableAxis( :x, Axis Data( {} ) ),
	SetVariableAxis( :y, Axis Data( {} ) ),
	SetVariableAxis( :z, Current Value( 0.283 ), Axis Data( {Format( "Best", 15 ), Min( -1 ), Max( 1 ), Inc( 0.25 ), Minor
Ticks( 1 )} ) ),
	SetZAxis( x, Axis Data( {} ) ),
	SetXVariable( :x ),
	SetYVariable( :y ),
	Iso Value( 0, -0.172413793103448 ),
	Iso Value( 1, -0.172413793103448 ),
	Iso Value( 2, -0.493279825755025 ),
	Frame3D(
		Set Graph Size( 425, 334 ),
		Set Hide Lights Border( 1 ),
		Set Rotation( -77.4290610933332, -10.5557507761771, 31.9546972936505 )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create surface plot.
3. Set columns for plotting.
4. Disable surface display.
5. Lock Z scale.
6. Choose data point style.
7. Set Z grid position.
8. Define surface color themes.
9. Define response column color themes.
10. Configure axis settings and rotations.



### Example 7
> **Summary**: Creates a surface plot to visualize ABRASION values based on Pred Formula ABRASION, with interactive filtering and selection options.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataFiltering, #InteractiveVisualization, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :ABRASION, :Pred Formula ABRASION ),
	Datapoints Choice( Points ),
	Formula( "Pred Formula ABRASION" ),
	Response( :ABRASION ),
	Local Data Filter(
		Add Filter( columns( :ABRASION ), Where( :ABRASION >= 110 & :ABRASION <= 140 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
dt << Select Where( :SILANE <= 40 );
dt << Exclude();
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Specify columns for plot.
4. Set datapoints choice to points.
5. Define formula for prediction.
6. Set response variable.
7. Add local data filter.
8. Filter ABRASION values between 110 and 140.
9. Configure filter mode.
10. Select rows where SILANE <= 40.
11. Exclude selected rows.
12. Generate report from object.



### Example 8
> **Summary**: Creates a 3D surface plot from a data table, allowing for interactive exploration of relationships between X, Y, and Z variables.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #InteractiveAnalysis, #3DGraph -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Surface Plot(
	Columns( :X, :Y, :Z ),
	Lock Z Scale( 1 ),
	Datapoints Choice( Needles ),
	Z Grid Position( 2 ),
	Data points Color( Blue ),
	Response( :Z ),
	Surface Color Method( "Solid", "Solid", "Solid", "Solid" ),
	SetVariableAxis( X, Axis Data( {Format( "Best", 8 )} ) ),
	SetVariableAxis( Y, Axis Data( {Format( "Best", 8 )} ) ),
	SetZAxis( Z, Current Value( 2 ), Axis Data( {} ) ),
	SetXVariable( X ),
	SetYVariable( Y ),
	Frame3D( Set Rotation( -54, 0, 38 ), Set Marker Transparency( 0.9 ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Set plot columns.
4. Lock Z scale.
5. Choose data points style.
6. Set Z grid position.
7. Color data points blue.
8. Define response variable.
9. Set surface color method.
10. Format X axis.
11. Format Y axis.
12. Set Z axis properties.
13. Set X variable.
14. Set Y variable.
15. Rotate 3D frame.
16. Set marker transparency.
17. Generate report object.



### Example 9
> **Summary**: Creates a 3D surface plot from a data table, using the Surface Plot function to visualize relationships between X, Y, and Z variables.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #3DPlotting, #JMPScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :X, :Y, :Z ),
	Lock Z Scale( 1 ),
	Datapoints Choice( Needles ),
	Z Grid Position( 2 ),
	Data points Color( Red ),
	Response( :Z ),
	Surface Color Method( "Solid", "Solid", "Solid", "Solid" ),
	SetVariableAxis( X, Axis Data( {Format( "Best", 8 )} ) ),
	SetVariableAxis( Y, Axis Data( {Format( "Best", 8 )} ) ),
	SetZAxis( Z, Current Value( 2 ), Axis Data( {} ) ),
	SetXVariable( X ),
	SetYVariable( Y ),
	Frame3D( Set Rotation( -54, 0, 38 ), Set Marker Quality( 0.7 ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Specify columns for plotting.
4. Lock Z scale.
5. Choose needle datapoints.
6. Set Z grid position.
7. Color datapoints red.
8. Define response variable.
9. Set solid surface color.
10. Configure axis formats and settings.
11. Rotate and adjust marker quality.
12. Generate report from object.



### Example 10
> **Summary**: Creates a 3D surface plot from a data table, utilizing the Surface Plot function to visualize relationships between X, Y, and Z columns.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #3DGraphs, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :X, :Y, :Z ),
	Datapoints Choice( Points ),
	Response( :Z ),
	Surface Color Method( "Solid", "Solid", "Solid", "Solid" ),
	SetVariableAxis( X, Axis Data( {Format( "Best", 8 )} ) ),
	SetVariableAxis( Y, Axis Data( {Format( "Best", 8 )} ) ),
	SetZAxis( Z, Current Value( 2 ) ),
	Frame3D( Set Rotation( -54, 0, 38 ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot.
3. Select X, Y, Z columns.
4. Choose data points.
5. Set response to Z.
6. Configure surface color.
7. Format X axis.
8. Format Y axis.
9. Set Z axis value.
10. Rotate 3D frame.



### Example 11
> **Summary**: Creates a 3D surface plot from data in a JMP table, using Needles for datapoints and blue coloring.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #GraphBuilder, #3DPlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :X, :Y, :Z ),
	Datapoints Choice( Needles ),
	Data points Color( Blue ),
	Response( :Z ),
	Surface Color Method( "Solid", "Solid", "Solid", "Solid" ),
	SetVariableAxis( X, Axis Data( {Format( "Best", 8 )} ) ),
	SetVariableAxis( Y, Axis Data( {Format( "Best", 8 )} ) ),
	SetZAxis( Z, Current Value( 2 ), Axis Data( {} ) ),
	Frame3D( Set Rotation( -54, 0, 38 ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Specify X, Y, Z columns.
4. Use Needles for datapoints.
5. Color datapoints blue.
6. Set response variable to Z.
7. Apply solid color method.
8. Format X axis.
9. Format Y axis.
10. Set Z axis properties.



### Example 12
> **Summary**: Creates a surface plot from a data table, using mesh datapoints and solid color method to visualize the relationship between X, Y, and Z variables.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #3DGraphs, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :X, :Y, :Z ),
	Datapoints Choice( Mesh ),
	Data points Color( Blue ),
	Response( :Z ),
	Surface Color Method( "Solid", "Solid", "Solid", "Solid" ),
	SetVariableAxis( X, Axis Data( {Format( "Best", 8 )} ) ),
	SetVariableAxis( Y, Axis Data( {Format( "Best", 8 )} ) ),
	SetZAxis( Z, Current Value( 2 ), Axis Data( {} ) ),
	Frame3D( Set Rotation( -54, 0, 38 ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Create surface plot.
3. Specify columns.
4. Choose mesh datapoints.
5. Set datapoints color.
6. Define response variable.
7. Configure surface colors.
8. Format X axis.
9. Format Y axis.
10. Set Z axis properties.



### Example 13
> **Summary**: Creates a surface plot to visualize Net Costs using the Graph Builder function in JMP.

<!-- Keywords: #JMP, #GraphBuilder, #SurfacePlot, #DataVisualization, #NetCosts -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :X, :Y, :Z ),
	Datapoints Choice( Surface ),
	Data points Color( Medium Dark YellowGreen ),
	Response( :Z ),
	Surface Color Method( "Solid", "Solid", "Solid", "Solid" ),
	SetVariableAxis( X, Axis Data( {Format( "Best", 8 )} ) ),
	SetVariableAxis( Y, Axis Data( {Format( "Best", 8 )} ) ),
	SetZAxis( Z, Current Value( 2 ), Axis Data( {} ) ),
	Frame3D( Set Rotation( -54, 0, 38 ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Specify X, Y, Z columns.
4. Choose surface data points.
5. Set data point color.
6. Define response variable Z.
7. Set surface color method.
8. Format X-axis data.
9. Format Y-axis data.
10. Configure Z-axis settings.
11. Rotate 3D frame.
12. Generate report.



### Example 14
> **Summary**: Creates a surface plot to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Response( :Pred Formula ABRASION );
obj << Datapoints Choice( Needles );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Set ABRASION as response.
4. Choose needles for datapoints.
5. Generate report object.



### Example 15
> **Summary**: Creates a surface plot to visualize Net Costs using the Graph Builder function in JMP.

<!-- Keywords: #JMP, #GraphBuilder, #SurfacePlot, #DataVisualization, #NetCosts -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Response( :Pred Formula ABRASION );
obj << Datapoints Choice( Mesh );
obj << Data Points Color( {0, 0, 255} );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Set response variable.
4. Choose mesh for datapoints.
5. Set datapoints color blue.
6. Generate report object.



### Example 16
> **Summary**: Creates a surface plot to visualize Net Costs using JMP's Graph Builder function, with interactive features for response column fill and report generation.

<!-- Keywords: #JMPGraphBuilder, #SurfacePlot, #InteractiveVisualization, #DataReporting, #NetCosts -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( Surface ),
	Response( :Pred Formula ABRASION )
);
obj << Response Column Fill( Discrete Gradients );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Set columns for plotting.
4. Define equation parameters.
5. Choose surface datapoints.
6. Set response column.
7. Fill response column with gradients.
8. Generate report from plot.



### Example 17
> **Summary**: Creates a surface plot to visualize Net Costs using the Graph Builder function in JMP.

<!-- Keywords: #GraphBuilder, #SurfacePlot, #JMPScriptingLanguage, #DataVisualization, #NetCosts -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( Surface ),
	Response Column Fill( Discrete Gradients ),
	Response( :Pred Formula ABRASION )
);
obj << Response Column Gradient Lines( 1 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Set prediction formula column.
4. Define equation parameters.
5. Choose surface datapoints.
6. Fill response column with gradients.
7. Set response column.
8. Enable gradient lines for response.
9. Generate report from plot.
10. Assign report to variable.



### Example 18
> **Summary**: Creates a surface plot to visualize Net Costs using the Graph Builder function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #GraphBuilder, #SurfacePlot, #DataVisualization, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( Surface ),
	Response Column Fill( Discrete Gradients ),
	Response( :Pred Formula ABRASION )
);
obj << Response Column Gradients( 9 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data_table data
2. Create Surface Plot object.
3. Set columns for prediction.
4. Define equation parameters.
5. Choose surface data points.
6. Fill response column gradients.
7. Set response column.
8. Configure gradient levels to 9.
9. Generate plot report.
10. Assign report to variable.



### Example 19
> **Summary**: Creates a surface plot to visualize Net Costs using the Graph Builder function, with interactive features for response column fill and color theme.

<!-- Keywords: #GraphBuilder, #SurfacePlot, #JMPScriptingLanguage, #DataVisualization, #InteractivePlotting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( Surface ),
	Response Column Fill( Continuous Gradients ),
	Response( :Pred Formula ABRASION )
);
obj << Response Column Color Theme( Jet );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Set columns for prediction formula.
4. Define equation for surface plot.
5. Choose surface datapoints.
6. Set response column fill style.
7. Specify response column.
8. Apply Jet color theme to response.
9. Generate report from plot.



### Example 20
> **Summary**: Creates a 3D surface plot to visualize the relationship between SILICA, SILANE, and SULFUR using the Surface Plot function in JMP.

<!-- Keywords: #JMP, #SurfacePlot, #DataVisualization, #3DPlotting, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :SILICA, :SILANE, :SULFUR ),
	Datapoints Choice( Points ),
	Response( :SULFUR ),
	Surface Color Method( "Solid", "Solid", "Solid", "Solid" ),
	SetVariableAxis( SILICA, Axis Data( {Format( "Best", 8 )} ) ),
	SetVariableAxis( SILANE, Axis Data( {Format( "Best", 8 )} ) ),
	SetZAxis( SULFUR, Current Value( 2.3 ) ),
	SetXVariable( SILICA ),
	SetYVariable( SILANE ),
	Frame3D( Set Rotation( -54, 0, 38 ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Specify columns: SILICA, SILANE, SULFUR.
4. Set datapoints to points.
5. Define response as SULFUR.
6. Configure surface color method.
7. Format SILICA axis.
8. Format SILANE axis.
9. Set SULFUR current value.
10. Assign X variable as SILICA.
11. Assign Y variable as SILANE.
12. Rotate 3D frame.
13. Generate report from plot.



### Example 1
> **Summary**: Opens a data table, defines a profile data table with grouping and effects, and launches a dialog for choice analysis.

<!-- Keywords: #JMPScriptingLanguage, #ChoiceAnalysis, #ProfileDataTable, #DialogLaunch, #DataTableOperations -->

**Code**:
```jsl
// Choice
// Open data table
dt = Open("data_table.jmp");
// Choice
Choice(
	Profile DataTable( "data_table" ),
	Profile Grouping( :Choice Set ),
	Profile ID( :Response Indicator ),
	Profile Effects(
		:Disk Size, :Speed, :Battery Life,
		:Price
	),
	Launch Dialog
);
```

**Code Explanation**:

1. Open table.
2. Define variable `dt`.
3. Call `Choice` function.
4. Specify profile data table.
5. Set profile grouping.
6. Define profile ID.
7. List profile effects.
8. Launch dialog.



### Example 2
> **Summary**: Opens a data table, defines a choice profile with multiple predictor variables, and launches a dialog window for analysis.

<!-- Keywords: #JMPScriptingLanguage, #ChoiceProfile, #ProfileGrouping, #ProfileEffects, #DialogWindow -->

**Code**:
```jsl
// Choice
// Open data table
dt = Open("data_table.jmp");
// Choice
Choice(
	Profile DataTable( "data_table" ),
	Profile Grouping(
		:Respondent, :Survey, :Choice Set
	),
	Profile ID( :Response Indicator ),
	Profile Effects(
		:Disk Size, :Speed, :Battery Life,
		:Price
	),
	Launch Dialog
);
```

**Code Explanation**:

1. Open data table.
2. Define choice profile.
3. Set profile data table.
4. Define profile grouping variables.
5. Set profile ID variable.
6. Define profile effects variables.
7. Launch dialog window.



### Example 3
> **Summary**: Performs a conditional logistic regression analysis on a data table, with the goal of identifying relationships between multiple predictor variables and an outcome variable.

<!-- Keywords: #ConditionalLogisticRegression, #JMPScriptingLanguage, #DataAnalysis, #PredictiveModeling, #Biostatistics -->

**Code**:
```jsl
// Conditional Logistic Regression
// Open data table
dt = Open("data_table.jmp");
// Conditional Logistic Regression
Choice(
	Profile DataTable(
		Current Data Table()
	),
	Profile ID( :Outcome ),
	Profile Grouping( :Pair ),
	Profile Effects(
		:Gallbladder, :Hypertension
	),
	"Firth Bias-adjusted Estimates"n( 0 ),
	Likelihood Ratio Tests( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Perform conditional logistic regression.
3. Set profile data table.
4. Define profile ID.
5. Define profile grouping.
6. Specify profile effects.
7. Disable Firth bias adjustment.
8. Enable likelihood ratio tests.



### Example 4
> **Summary**: Opens a data table, defines response and profile data tables, sets response profile ID chosen, and specifies profile effects for partitioning a dataset into clusters based on multiple predictor variables using the Partition platform.

<!-- Keywords: #Partition, #JMPScriptingLanguage, #DataTable, #ProfileEffects, #FirthBias-AdjustedEstimates -->

**Code**:
```jsl
// Choice
// Open data table
dt = Open("data_table.jmp");
// Choice
Open("data_table.jmp");
Choice(
	Response DataTable( data_table ),
	Profile DataTable( data_table ),
	Response Profile ID Chosen(
		:Response
	),
	Response Grouping(
		:Survey, :Choice Set
	),
	Response Profile ID Choices(
		:Choice1, :Choice2
	),
	Profile ID( :Choice ID ),
	Profile Grouping(
		:Survey, :Choice Set
	),
	Profile Effects(
		:Hard Disk, :Speed, :Battery Life,
		:Price
	),
	"Firth Bias-adjusted Estimates"n( 1 ),
	Likelihood Ratio Tests( 1 ),
	Profiler(
		1,
		Utility <<
		Response Limits(
			{Lower( -2, 0.066 ),
			Middle( 0, 0.5 ),
			Upper( 2, 0.9819 ),
			Goal( Maximize ),
			Importance( 1 )}
		),
		Term Value(
			hard disk( "80 GB" ),
			speed( "2.0 GHz" ),
			battery life( "6 hours" ),
			price( "$1,200" )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Define response and profile data tables.
4. Set response profile ID chosen.
5. Define response grouping variables.
6. Set response profile ID choices.
7. Define profile ID variable.
8. Define profile grouping variables.
9. Specify profile effects.
10. Enable Firth bias adjustment and likelihood ratio tests.



### Example 5
> **Summary**: Performs choice analysis on a dataset, partitioning it into clusters based on multiple predictor variables using the Partition platform.

<!-- Keywords: #JMPScriptingLanguage, #Partition, #ChoiceAnalysis, #PredictorVariables, #DataClustering -->

**Code**:
```jsl
// Choice with Subject Effects
// Open data table
dt = Open("data_table.jmp");
// Choice with Subject Effects
Open("data_table.jmp");
Open("data_table.jmp");
Choice(
	Response Data Table(
		Data Table("data_table")
	),
	Profile DataTable( data_table ),
	Subject DataTable(
		Data Table("data_table")
	),
	Response Subject ID( :Person ),
	Response Grouping(
		:Survey, :Choice Set
	),
	Response Profile ID Choices(
		:Choice1, :Choice2
	),
	Profile ID( :Choice ID ),
	Profile Grouping(
		:Survey, :Choice Set
	),
	Profile Effects(
		:Hard Disk, :Speed, :Battery Life,
		:Price
	),
	Subject Subject ID( :Person ),
	Subject Effects( :Gender, :Job ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	Response Profile ID Chosen(
		:Response
	),
	Likelihood Ratio Tests( 1 ),
	Utility Profiler(
		1,
		Confidence Intervals( 1 ),
		Term Value(
			Hard Disk(
				"40 GB",
				Lock( 0 ),
				Show( 1 )
			),
			Speed(
				"1.5 GHz",
				Lock( 0 ),
				Show( 1 )
			),
			Battery Life(
				"4 hours",
				Lock( 0 ),
				Show( 1 )
			),
			Price(
				1000,
				Lock( 0 ),
				Show( 1 )
			),
			Gender(
				"F",
				Lock( 1 ),
				Show( 0 )
			),
			Job(
				"Development",
				Lock( 1 ),
				Show( 0 )
			)
		)
	),
	SendToReport(
		Dispatch( {"Utility Profiler"},
			"10000", ScaleBox,
			{Min( -20 ), Max( 1 ),
			Inc( 5 ), Minor Ticks( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Open data table.
3. Open data table.
4. Perform choice analysis.
5. Set response data table.
6. Set profile data table.
7. Set subject data table.
8. Define response subject ID.
9. Define response grouping.
10. Define response profile ID choices.



### Example 6
> **Summary**: This JSL script partitions a dataset into clusters based on multiple predictor variables using the Partition platform, with interactive features for response grouping and profile ID choices.

<!-- Keywords: #Partition, #ChoiceAnalysis, #ResponseGrouping, #ProfileIDChoices, #JMPScriptingLanguage -->

**Code**:
```jsl
// Choice with Gender
// Open data table
dt = Open("data_table.jmp");
// Choice with Gender
Open("data_table.jmp");
Open("data_table.jmp");
Choice(
	Response Data Table(
		Data Table("data_table")
	),
	Profile DataTable( Laptop Profile ),
	Subject DataTable(
		Data Table("data_table")
	),
	Response Subject ID( :Person ),
	Response Grouping(
		:Survey, :Choice Set
	),
	Response Profile ID Choices(
		:Choice1, :Choice2
	),
	Profile ID( :Choice ID ),
	Profile Grouping(
		:Survey, :Choice Set
	),
	Profile Effects(
		:Hard Disk, :Speed, :Battery Life,
		:Price
	),
	Subject Subject ID( :Person ),
	Subject Effects( :Gender ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	Response Profile ID Chosen(
		:Response
	),
	Likelihood Ratio Tests( 1 )
);
```

**Code Explanation**:

1. Open data table "data_table1".
2. Open data table "data_table2".
3. Open data table "data_table3".
4. Configure choice analysis.
5. Set response data table 1.
6. Set profile data table 2.
7. Set subject data table 3.
8. Define response subject ID.
9. Define response grouping.
10. Define response profile ID choices.



### Example 7
> **Summary**: This JSL script partitions a dataset into clusters based on multiple predictor variables using the Choice Reduced Model platform in JMP.

<!-- Keywords: #ChoiceReducedModel, #Partition, #JMPScriptingLanguage, #DataClustering, #PredictorVariables -->

**Code**:
```jsl
// Choice Reduced Model
// Open data table
dt = Open("data_table.jmp");
// Choice Reduced Model
Open("data_table.jmp");
Open("data_table.jmp");
Choice(
	Response Data Table(
		Data Table("data_table")
	),
	Profile DataTable( Laptop Profile ),
	Subject DataTable(
		Data Table("data_table")
	),
	Response Subject ID( :Person ),
	Response Grouping(
		:Survey, :Choice Set
	),
	Response Profile ID Choices(
		:Choice1, :Choice2
	),
	Profile ID( :Choice ID ),
	Profile Grouping(
		:Survey, :Choice Set
	),
	Profile Effects(
		:Hard Disk, :Speed, :Battery Life,
		:Price
	),
	Subject Subject ID( :Person ),
	Subject Effects( :Gender ),
	Remove Subject Effects(
		Speed * Gender
	),
	History( Remove Subject Effects ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	Response Profile ID Chosen(
		:Response
	),
	Likelihood Ratio Tests( 1 )
);
```

**Code Explanation**:

1. Open "data_table1" table.
2. Open "data_table2" table.
3. Open "data_table3" table.
4. Define choice model.
5. Set response data table.
6. Set profile data table.
7. Set subject data table.
8. Define response subject ID.
9. Define response grouping.
10. Define response profile ID choices.



### Example 8
> **Summary**: This JSL script partitions a dataset into clusters based on multiple predictor variables using the Choice platform, with hierarchical Bayes estimation and Firth bias-adjusted estimates.

<!-- Keywords: #Choice, #HierarchicalBayes, #FirthBiasAdjustedEstimates, #Partitioning, #PredictorVariables -->

**Code**:
```jsl
// Choice with Hierarchical Bayes
// Open data table
dt = Open("data_table.jmp");
// Choice with Hierarchical Bayes
Open("data_table.jmp");
Open("data_table.jmp");
Choice(
	Response Data Table(
		Data Table("data_table")
	),
	Profile DataTable( Laptop Profile ),
	Subject DataTable(
		Data Table("data_table")
	),
	Response Subject ID( :Person ),
	Response Grouping(
		:Survey, :Choice Set
	),
	Response Profile ID Choices(
		:Choice1, :Choice2
	),
	Profile ID( :Choice ID ),
	Profile Grouping(
		:Survey, :Choice Set
	),
	Profile Effects(
		:Hard Disk, :Speed, :Battery Life,
		:Price
	),
	Subject Subject ID( :Person ),
	Subject Effects( :Gender ),
	Hierarchical Bayes( 1 ),
	Hierarchical Bayes( 1 ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	Response Profile ID Chosen(
		:Response
	)
);
```

**Code Explanation**:

1. Open table "data_table1".
2. Open table "data_table2".
3. Open table "data_table3".
4. Start Choice analysis.
5. Set response data table.
6. Set profile data table.
7. Set subject data table.
8. Define response subject ID.
9. Define response grouping variables.
10. Define response profile ID choices.



### Example 9
> **Summary**: This JSL script partitions a dataset into clusters based on multiple predictor variables using the Choice platform, enabling analysis of response data and subject effects.

<!-- Keywords: #JMPScriptingLanguage, #Choice, #Partitioning, #PredictorVariables, #DataAnalysis -->

**Code**:
```jsl
// Choice
// Open data table
dt = Open("data_table.jmp");
// Choice
Open("data_table Response.jmp");
Choice(
	Response DataTable(
		data_table
	),
	Profile DataTable(
		data_table Response
	),
	Subject DataTable(
		data_table
	),
	Response Profile ID Chosen(
		:Lung Cancer
	),
	Response Freq( :Count ),
	Response Profile ID Choices(
		:Choice1, :Choice2
	),
	Profile ID( :Lung Cancer ),
	Profile Effects( :Lung Cancer ),
	Subject Effects( :Smoker ),
	"Firth Bias-adjusted Estimates"n( 0 ),
	Likelihood Ratio Tests( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Define response data table.
4. Define profile data table.
5. Define subject data table.
6. Set response profile ID chosen.
7. Set response frequency.
8. Set response profile ID choices.
9. Set profile ID.
10. Set profile effects.
11. Set subject effects.
12. Disable Firth bias adjustment.
13. Enable likelihood ratio tests.



### Example 10
> **Summary**: Opens a data table, initializes a Choice analysis, and partitions the data into clusters based on multiple predictor variables, including crust, cheese, topping, and gender.

<!-- Keywords: #JMPScriptingLanguage, #ChoiceAnalysis, #Partition, #DataClustering, #PredictorVariables -->

**Code**:
```jsl
// Choice
// Open data table
dt = Open("data_table.jmp");
// Choice
Choice(
	One Table( 1 ),
	Response Subject ID( :Subject ),
	Profile ID( :Indicator ),
	Profile Grouping( :Subject, :Trial ),
	Profile Effects(
		:Crust, :Cheese, :Topping
	),
	Subject Effects( :Gender ),
	"Firth Bias-adjusted Estimates"n( 1 ),
	Respondents Are Allowed to Choose None(
		1
	),
	Likelihood Ratio Tests( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Initialize Choice analysis.
3. Specify one table.
4. Set response subject ID.
5. Define profile ID.
6. Group profiles by subject and trial.
7. Include profile effects: crust, cheese, topping.
8. Include subject effect: gender.
9. Enable Firth bias adjustment.
10. Allow respondents to choose none.



### Example 11
> **Summary**: Opens a data table, defines a Choice analysis with multiple predictor variables, and enables Firth bias adjustment and likelihood ratio tests.

<!-- Keywords: #JMPScriptingLanguage, #ChoiceAnalysis, #FirthBiasAdjustment, #LikelihoodRatioTests, #DataTable -->

**Code**:
```jsl
// Choice
// Open data table
dt = Open("data_table.jmp");
// Choice
Choice(
	One Table( 1 ),
	Subject ID( :Subject ),
	Choice Set ID( :Trial ),
	Profile ID( :Indicator ),
	Profile Effects(
		:Crust, :Cheese, :Topping
	),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	Likelihood Ratio Tests( 1 )
);
```

**Code Explanation**:

1. Open table.
2. Select one table.
3. Set subject ID.
4. Set choice set ID.
5. Set profile ID.
6. Define profile effects.
7. Enable Firth bias adjustment.
8. Enable likelihood ratio tests.



### Example 12
> **Summary**: Opens three data tables and sets up a Choice platform to analyze response, profile, and subject effects.

<!-- Keywords: #JMPScriptingLanguage, #Choice, #DataTableOperations, #ResponseAnalysis, #ProfileEffects -->

**Code**:
```jsl
// Choice
// Open data table
dt = Open("data_table1.jmp");
// Choice
Open("data_table.jmp2");
Open("data_table.jmp3");
Choice(
	Response DataTable( data_table1 ),
	Profile DataTable( data_table2 ),
	Subject DataTable( data_table3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices(
		:Choice1, :Choice2
	),
	Profile ID( :ID ),
	Profile Effects(
		:Crust, :Cheese, :Topping
	),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);
```

**Code Explanation**:

1. Open table.
2. Open another table.
3. Open third table.
4. Set response data table.
5. Set profile data table.
6. Set subject data table.
7. Specify response ID column.
8. Specify subject ID column.
9. Define response profile choices.
10. Define profile effects.



### Example 13
> **Summary**: Opens a data table, sets choice configuration, and specifies response data tables for partitioning a dataset into clusters based on multiple predictor variables using the Partition platform.

<!-- Keywords: #JMPScriptingLanguage, #Partition, #ChoiceConfiguration, #ResponseDataTable, #PredictorVariables -->

**Code**:
```jsl
// Choice
// Open data table
dt = Open("data_table.jmp");
// Choice
Open("data_table.jmp");
Open("data_table.jmp");
Choice(
	Response Data Table(
		Data Table("data_table")
	),
	Profile DataTable( Pizza Profiles ),
	Subject DataTable(
		Data Table("data_table")
	),
	Response Subject ID( :Subject ),
	Response Profile ID Choices(
		:Choice1, :Choice2
	),
	Profile ID( :ID ),
	Profile Effects(
		:Crust, :Cheese, :Topping
	),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	Response Profile ID Chosen( :Choice ),
	Likelihood Ratio Tests( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Open additional tables.
3. Set choice configuration.
4. Specify response data table.
5. Define profile data table.
6. Identify subject data table.
7. Link response subject ID.
8. Define response profile ID choices.
9. Set profile ID.
10. Specify profile effects.



### Example 14
> **Summary**: Partitions a dataset into clusters based on multiple predictor variables, utilizing the Choice platform to generate Firth bias-adjusted estimates and perform likelihood ratio tests.

<!-- Keywords: #Choice, #Partitioning, #FirthBiasAdjustment, #LikelihoodRatioTests, #UtilityProfiler -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Choice(
	One Table( 1 ),
	Profile ID( :Response Indicator ),
	Profile Grouping( :Choice Set ),
	Profile Effects( :Disk Size, :Speed, :Battery Life, :Price ),
	Name( "Firth Bias-Adjusted Estimates" )(1),
	Likelihood Ratio Tests( 1 ),
	Utility Profiler(
		1,
		Confidence Intervals( 1 ),
		Term Value(
			Disk Size( "40 GB", Lock( 0 ), Show( 1 ) ),
			Speed( "1.5 GHz", Lock( 0 ), Show( 1 ) ),
			Battery Life( "4 Hrs", Lock( 0 ), Show( 1 ) ),
			Price( "$1000", Lock( 0 ), Show( 1 ) )
		)
	),
	Comparisons(
		{Disk Size( "80 GB" ), Speed( "1.5 GHz" ), Battery Life( "4 Hrs" ), Price( "$1000" )},
		{Disk Size( "40 GB" ), Speed( "1.5 GHz" ), Battery Life( "4 Hrs" ), Price( "$1000" )}
	),
	SendToReport(
		Dispatch( {"Utility Profiler"}, "10000", ScaleBox,
			{Format( "Custom", Formula( If( value >= 0 & value <= 1, "loahtive", value < 0, "negative", "indifferent" ) ), 11 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Set choice options.
3. Define profile ID.
4. Set profile grouping.
5. Specify profile effects.
6. Enable Firth bias adjustment.
7. Perform likelihood ratio tests.
8. Configure utility profiler.
9. Set confidence intervals.
10. Customize scale box formatting.



### Example 15
> **Summary**: Creates a choice model object with Firth bias-adjusted estimates, confidence intervals, and effect marginals for a specified data table.

<!-- Keywords: #ChoiceModel, #FirthBiasAdjustment, #ConfidenceIntervals, #EffectMarginals, #JSLScripting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Choice(
	Profile DataTable( Data Table("data_table") ),
	Profile ID( :Indicator ),
	Profile Grouping( :Subject, :Trial ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Name( "Firth Bias-adjusted Estimates" )(1),
	Confidence Intervals( 1 ),
	Profiler(
		1,
		Confidence Intervals( 1 ),
		Term Value(
			Crust( "Thick", Lock( 0 ), Show( 1 ) ),
			Cheese( "Jack", Lock( 0 ), Show( 1 ) ),
			Topping( "Pepperoni", Lock( 0 ), Show( 1 ) )
		)
	),
	Effect Marginals( 1 ),
	SendToReport(
		Dispatch( {}, "Choice Model: Indicator", OutlineBox, {Set Title( "Confidence Intervals, Effect Marginals, Profiler" )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create choice model object.
3. Set profile data table.
4. Define profile ID variable.
5. Specify profile grouping variables.
6. Identify profile effects variables.
7. Enable Firth bias adjustment.
8. Include confidence intervals.
9. Configure profiler settings.
10. Display effect marginals.
11. Customize report title.



### Example 16
> **Summary**: Creates a Choice object to partition a dataset into clusters based on multiple predictor variables, utilizing Profile DataTable, Profile ID, and Profile Grouping.

<!-- Keywords: #JSLScriptingLanguage, #Partition, #ChoiceObject, #ProfileDataTable, #PredictorVariables -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Choice(
	Profile DataTable( data_table ),
	Profile ID( :Indicator ),
	Profile Grouping( :Subject, :Trial ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Likelihood Ratio Tests( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Create Choice object.
3. Set Profile DataTable.
4. Define Profile ID.
5. Set Profile Grouping.
6. Specify Profile Effects.
7. Enable Likelihood Ratio Tests.



### Example 17
> **Summary**: Partitions a dataset into clusters based on multiple predictor variables using the Partition platform, with hierarchical clustering and gradient saving by subject.

<!-- Keywords: #Partition, #HierarchicalClustering, #GradientSaving, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt1 = Open("data_table1.jmp");
dt2 = Open("data_table2.jmp");
dt3 = Open("data_table3.jmp");
plat = Choice(
	Response DataTable( data_table2 ),
	Profile DataTable( data_table1 ),
	Subject DataTable( data_table3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);
dt name = plat << Save Gradients by Subject;
plat clus = dt name << Hierarchical Cluster(
	Y( 2 :: 7 ),
	Method( "Ward" ),
	Standardize( 1 ),
	Dendrogram Scale( "Distance Scale" ),
	Number of Clusters( 4 )
);
plat clus << Save Clusters;
dt3 << Update( With( dt name ), Match Columns( :Subject = :Subject ) );
plat clus << close window;
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Open data table;
4. Define platform for analysis.
5. Save gradients by subject.
6. Perform hierarchical clustering.
7. Save clusters from analysis.
8. Update Pizza Subjects.jmp.
9. Close clustering window.



### Example 18
> **Summary**: Partitions a dataset into clusters based on multiple predictor variables using the Choice platform, generating two separate reports for male and female subjects.

<!-- Keywords: #Choice, #Partitioning, #PredictorVariables, #DataClustering, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Choice(
	One Table( 1 ),
	Subject ID( :Subject ),
	Choice Set ID( :Trial ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Name( "Firth Bias-Adjusted Estimates" )(1),
	Likelihood Ratio Tests( 1 ),
	By( :Gender )
);
rpt1 = obj << Report();
dt << Select Where( :Gender == "M" );
dt << Delete Rows();
objF = dt << Choice(
	One Table( 1 ),
	Subject ID( :Subject ),
	Choice Set ID( :Trial ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Name( "Firth Bias-Adjusted Estimates" )(1),
	Likelihood Ratio Tests( 1 )
);
rptF = objF << Report();
```

**Code Explanation**:

1. Open data table.
2. Run choice model analysis.
3. Store report object.
4. Select male rows.
5. Delete male rows.
6. Run choice model again.
7. Store new report object.



### Example 19
> **Summary**: Partitions a dataset into clusters based on multiple predictor variables using the Choice platform, generating reports and selecting female subjects.

<!-- Keywords: #Choice, #Partitioning, #DataClustering, #PredictorVariables, #JMPScripting -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
dt3 = Open("data_table.jmp");
obj = Choice(
	Response Data Table( Data Table("data_table") ),
	Profile DataTable( Pizza Profiles ),
	Subject DataTable( Data Table("data_table") ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Name( "Firth Bias-Adjusted Estimates" )(1),
	Response Profile ID Chosen( :Choice ),
	Likelihood Ratio Tests( 1 ),
	By( :Gender )
);
rpt1 = obj[2] << Report();
rpt2 = obj[1] << Report();
dt1 << Select Where( :Gender == "F" );
femaleIndex = dt1 << Get Selected Rows();
femaleIDs = dt1[femaleIndex, 1];
dt3 << New Column( "GenNum", Numeric, Continuous, Formula( If( Length( Char( :Subject / 2 ) ) > 2, 0, 1 ) ) );
obj = Choice(
	Response Data Table( Data Table("data_table") ),
	Profile DataTable( Pizza Profiles ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Name( "Firth Bias-Adjusted Estimates" )(1),
	Response Profile ID Chosen( :Choice ),
	Likelihood Ratio Tests( 1 ),
	By( :GenNum )
);
rpt1 = obj[1] << Report();
rpt2 = obj[2] << Report();
```

**Code Explanation**:

1. Open three data tables.
2. Create a choice model object.
3. Generate first report from object.
4. Generate second report from object.
5. Select female subjects.
6. Get indices of selected rows.
7. Extract subject IDs of females.
8. Add new column "GenNum" to responses table.
9. Recreate choice model object with "GenNum" grouping.
10. Generate reports from updated object.



### Example 20
> **Summary**: Generates Firth bias-adjusted estimates and utility profiler reports for a given dataset, utilizing the Choice platform to configure profile grouping, effects, and subject effects.

<!-- Keywords: #Choice, #FirthBiasAdjustedEstimates, #UtilityProfiler, #DataAnalysis, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Choice(
	One Table( 1 ),
	Profile ID( :Indicator ),
	Profile Grouping( :Subject, :Trial ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Effects( :Gender ),
	Name( "Firth Bias-Adjusted Estimates" )(0),
	Likelihood Ratio Tests( 1 ),
	Utility Profiler(
		1,
		Confidence Intervals( 1 ),
		Term Value(
			Crust( "Thick", Lock( 0 ), Show( 1 ) ),
			Cheese( "Jack", Lock( 0 ), Show( 1 ) ),
			Topping( "Pepperoni", Lock( 0 ), Show( 1 ) )
		)
	)
);
rpt = obj << Report();
actNumEff = N Row( rpt[Outline Box( "Effect Summary" )][Number Col Box( 1 )] << Get as Matrix );
actUPSubEff = rpt[Outline Box( "Utility Profiler" )][Combo Box( 1 )] << Get Items;
rpt[Outline Box( "Effect Summary" )][Table Box( 1 )] << Set Selected Rows( [2, 3, 5] );
rpt[Outline Box( "Effect Summary" )][Button Box( 1 )] << Click();
rpt2 = Current Report();
actNumEff2 = N Row( rpt2[Outline Box( "Effect Summary" )][Number Col Box( 1 )] << Get as Matrix );
actUPSubEff2 = Try( rpt2[Outline Box( "Utility Profiler" )][Combo Box( 1 )] << Get Items, "" );
rpt2[Outline Box( "Effect Summary" )][Button Box( 4 )] << Click();
rpt3 = Current Report();
actNumEff3 = N Row( rpt3[Outline Box( "Effect Summary" )][Number Col Box( 1 )] << Get as Matrix );
actUPSubEff3 = Try( rpt3[Outline Box( "Utility Profiler" )][Combo Box( 1 )] << Get Items, "" );
```

**Code Explanation**:

1. Open data table;
2. Run Choice platform.
3. Configure One Table.
4. Set Profile ID to Indicator.
5. Define Profile Grouping.
6. Specify Profile Effects.
7. Include Subject Effects.
8. Disable Firth Bias-Adjusted Estimates.
9. Enable Likelihood Ratio Tests.
10. Configure Utility Profiler.



### Example 21
> **Summary**: Partitions a dataset into clusters based on multiple predictor variables using the Choice platform in JMP, generating a report with effect summaries.

<!-- Keywords: #JMPScriptingLanguage, #Choice, #Partitioning, #PredictorVariables, #EffectSummaries -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Choice(
	One Table( 1 ),
	Subject ID( :Subject ),
	Choice Set ID( :Trial ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Effects( :Gender ),
	Name( "Firth Bias-Adjusted Estimates" )(1),
	Likelihood Ratio Tests( 1 )
);
obj << Save Gradients by Subject( 1 );
newdt = Current Data Table();
fiveGrad = newdt[1 :: 5, 0];
actGrad = [1 -0.0095853886681887 -0.00168452712777625 0.0148763377706009 -0.00958538866818871 -0.00168452712777626 0.0148763377706009,
2 0.00237281898226702 -0.00758384023063104 -0.00238766015177311 -0.00237281898226702 0.00758384023063104 0.00238766015177311,
3 0.00212872302334231 -0.00789948605623235 0.00303136136719393 0.00212872302334231 -0.00789948605623235 0.00303136136719393,
4 -0.00105737224164787 -0.00485162469628601 -0.00901291178323131 0.00105737224164787 0.00485162469628601 0.00901291178323131,
5 0.00282752188561035 -0.00945279429845995 0.007250123153496 0.00282752188561035 -0.00945279429845995 0.007250123153496];
Close( newdt, Nosave );
rpt = obj << Report;
rpt[Outline Box( "Effect Summary" )][Table Box( 1 )] << Set Selected Rows( [2, 3, 5] );
rpt[Outline Box( "Effect Summary" )][Button Box( 1 )] << Click();
rpt = obj << Report;
actNewTable = rpt[Outline Box( "Effect Summary" )][Table Box( 1 )] << Get As Matrix;
rpt[Outline Box( "Effect Summary" )][NoCloneBox( 1 )][Button Box( 4 )] << Click();
rpt = obj << Report;
actUndoTable = rpt[Outline Box( "Effect Summary" )][Table Box( 1 )] << Get As Matrix;
```

**Code Explanation**:

1. Open data table.
2. Perform choice analysis.
3. Save gradients by subject.
4. Create new data table.
5. Define expected gradients.
6. Close new data table.
7. Generate report.
8. Select specific rows.
9. Click button to apply changes.
10. Retrieve updated effect summary.



### Example 22
> **Summary**: Creates a choice model object in JMP, configuring subject ID, choice set ID, profile ID, and profile effects for Firth bias-adjusted estimates.

<!-- Keywords: #JMPScriptingLanguage, #ChoiceModel, #FirthBias-AdjustedEstimates, #Partition, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Choice(
	One Table( 1 ),
	Subject ID( :Subject ),
	Choice Set ID( :Trial ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Effects( :Gender ),
	Name( "Firth Bias-Adjusted Estimates" )(1),
	Likelihood Ratio Tests( 1 )
);
obj << Save Gradients by Subject( 1 );
newdt = Current Data Table();
fiveGrad = newdt[1 :: 5, 0];
actGrad = [1 -0.0095853886681887 -0.00168452712777625 0.0148763377706009 -0.00958538866818871 -0.00168452712777626 0.0148763377706009,
2 0.00237281898226702 -0.00758384023063104 -0.00238766015177311 -0.00237281898226702 0.00758384023063104 0.00238766015177311,
3 0.00212872302334231 -0.00789948605623235 0.00303136136719393 0.00212872302334231 -0.00789948605623235 0.00303136136719393,
4 -0.00105737224164787 -0.00485162469628601 -0.00901291178323131 0.00105737224164787 0.00485162469628601 0.00901291178323131,
5 0.00282752188561035 -0.00945279429845995 0.007250123153496 0.00282752188561035 -0.00945279429845995 0.007250123153496];
```

**Code Explanation**:

1. Open data_table data
2. Create choice model object.
3. Configure subject ID.
4. Set choice set ID.
5. Define profile ID.
6. Specify profile effects.
7. Include subject effects.
8. Enable Firth bias adjustment.
9. Perform likelihood ratio tests.
10. Save gradients by subject.



### Example 23
> **Summary**: Creates a Choice object for partitioning a dataset into clusters based on multiple predictor variables, utilizing data tables and response grouping.

<!-- Keywords: #JSLScriptingLanguage, #Partition, #DataTables, #ResponseGrouping, #ChoiceObject -->

**Code**:
```jsl
dt1 = Open("data_table1.jmp");
dt2 = Open("data_table2.jmp");
dt3 = Open("data_table3.jmp");
obj = Choice(
	Response DataTable( data_table1 ),
	Profile DataTable( data_table2 ),
	Subject DataTable( data_table3 ),
	Response Profile ID Chosen( :Response ),
	Response Subject ID( :Person ),
	Response Grouping( :Survey, :Choice Set ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :Choice ID ),
	Profile Grouping( :Survey, :Choice Set ),
	Profile Effects( :Hard Disk, :Speed, :Battery Life, :Price ),
	Subject Subject ID( :Person ),
	Subject Effects( :Gender, :Job ),
	Name( "Firth Bias-adjusted Estimates" )(1),
	Likelihood Ratio Tests( 1 )
);
obj << Save Utility Formula;
newdt = Current Data Table();
actRows = N Row( newdt );
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Open data table;
4. Create Choice object.
5. Set response data table.
6. Set profile data table.
7. Set subject data table.
8. Define response profile ID chosen.
9. Define response subject ID.
10. Define response grouping.



### Example 24
> **Summary**: Analyze Bayesian parameter estimates using a Choice model, extracting text and verifying confidence limits.

<!-- Keywords: #JSLScriptingLanguage, #ChoiceModel, #BayesianAnalysis, #ConfidenceLimits, #TextExtraction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Choice(
	One Table( 1 ),
	Subject ID( :Subject ),
	Choice Set ID( :Trial ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Effects( :Gender ),
	Name( "Firth Bias-Adjusted Estimates" )(0),
	Hierarchical Bayes( 1 ),
	Number of Bayesian Iterations( 1000 ),
	Respondents Are Allowed to Choose None( 1 )
);
rpt = obj << Report();
text = rpt[Outline Box( "Bayesian Parameter Estimates" )] << Get Text();
shouldBeEmpty = Regex Match( text, "95%" );
obj << Confidence Limits( 1 );
text2 = rpt[Outline Box( "Bayesian Parameter Estimates" )] << Get Text();
shouldBe95 = Regex Match( text2, "95%" );
obj << Confidence Limits( 0 );
text3 = rpt[Outline Box( "Bayesian Parameter Estimates" )] << Get Text();
shouldBeEmpty2 = Regex Match( text3, "95%" );
```

**Code Explanation**:

1. Open data table.
2. Run choice model analysis.
3. Retrieve report object.
4. Extract text from Bayesian estimates.
5. Check for "95%" presence.
6. Enable confidence limits.
7. Update text after enabling limits.
8. Verify "95%" presence again.
9. Disable confidence limits.
10. Check for "95%" absence.



### Example 25
> **Summary**: Analyze a dataset to generate Firth bias-adjusted estimates and likelihood ratio tests, utilizing the Choice platform with profile data table, one table option, and utility profiler settings.

<!-- Keywords: #Choice, #FirthBiasAdjustment, #LikelihoodRatioTests, #UtilityProfiler, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Choice(
	Profile DataTable( Data Table("data_table") ),
	One Table,
	Profile ID( :Response Indicator ),
	Profile Grouping( :Choice Set ),
	Profile Effects( :Disk Size, :Speed, :Battery Life, :Price ),
	Name( "Firth Bias-adjusted Estimates" )(1),
	Likelihood Ratio Tests( 1 ),
	Utility Profiler(
		1,
		Confidence Intervals( 1 ),
		Term Value(
			Disk Size( "40 GB", Lock( 0 ), Show( 1 ) ),
			Speed( "1.5 GHz", Lock( 0 ), Show( 1 ) ),
			Battery Life( "4 Hrs", Lock( 0 ), Show( 1 ) ),
			Price( "$1,000", Lock( 0 ), Show( 1 ) )
		)
	)
);
rpt1 = obj << report;
expr1 = rpt1 << get journal;
:Price << Set Property( "Missing Value Codes", "$1,000" );
obj2 = obj << Redo Analysis;
rpt2 = obj2 << Report;
expr2 = rpt2 << Get Journal;
ans = Equal( expr1, expr2 );
```

**Code Explanation**:

1. Open data table.
2. Create choice object.
3. Set profile data table.
4. Define one table option.
5. Set profile ID column.
6. Set profile grouping column.
7. Add profile effects.
8. Enable Firth bias adjustment.
9. Enable likelihood ratio tests.
10. Configure utility profiler settings.



### Example 26
> **Summary**: Configures a Choice model object to generate Firth Bias-Adjusted Estimates and Utility Profiler reports, utilizing multiple predictor variables.

<!-- Keywords: #ChoiceModel, #FirthBiasAdjustedEstimates, #UtilityProfiler, #JSLScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
dt3 = Open("data_table.jmp");
obj = Choice(
	Response Data Table( Data Table("data_table") ),
	Profile DataTable( Pizza Profiles ),
	Subject DataTable( Data Table("data_table") ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Name( "Firth Bias-Adjusted Estimates" )(1),
	Response Profile ID Chosen( :Choice ),
	Likelihood Ratio Tests( 1 ),
	Utility Profiler(
		1,
		Confidence Intervals( 1 ),
		Desirability Functions( 1 ),
		Utility << Response Limits( {Lower( -1.5, 0.066 ), Middle( 0, 0.5 ), Upper( 1.5, 0.9819 ), Goal( "Maximize" ), Importance( 1 )} ),
		Term Value(
			Crust( "Thick", Lock( 1 ), Show( 1 ) ),
			Cheese( "Jack", Lock( 1 ), Show( 1 ) ),
			Topping( "Pepperoni", Lock( 0 ), Show( 1 ) )
		)
	)
);
rpt = obj << Report;
scpt = rpt[Outline Box( "Utility Profiler" )] << Get Scriptable Object;
scpt << Maximize For Each Grid Point;
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Open data table;
4. Create Choice model object.
5. Set response data table.
6. Set profile data table.
7. Set subject data table.
8. Define response subject ID.
9. Define response profile ID choices.
10. Define profile ID.
11. Define profile effects.
12. Define subject subject ID.
13. Enable Firth Bias-Adjusted Estimates.
14. Set response profile ID chosen.
15. Enable Likelihood Ratio Tests.
16. Configure Utility Profiler.
17. Enable confidence intervals.
18. Enable desirability functions.
19. Set response limits for Utility.
20. Lock Crust value.
21. Lock Cheese value.
22. Unlock Topping value.
23. Generate report.
24. Get Utility Profiler scriptable object.
25. Maximize for each grid point.



### Example 27
> **Summary**: Creates a utility profiler report with customized settings, including response and subject data tables, profile effects, and desirability functions.

<!-- Keywords: #JSLScriptingLanguage, #UtilityProfiler, #Choice, #ReportGeneration, #Customization -->

**Code**:
```jsl
dt1 = Open("data_table1.jmp");
dt2 = Open("data_table2.jmp");
dt3 = Open("data_table3.jmp");
obj = Choice(
	Response Data Table( data_table1 ),
	Profile DataTable( data_table2 ),
	Subject DataTable( data_table3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender ),
	Name( "Firth Bias-adjusted Estimates" )(1),
	Likelihood Ratio Tests( 1 ),
	Utility Profiler(
		1,
		Confidence Intervals( 1 ),
		Desirability Functions( 1 ),
		Term Value(
			Crust( "Thick", Lock( 0 ), Show( 1 ) ),
			Cheese( "Jack", Lock( 0 ), Show( 1 ) ),
			Topping( "Pepperoni", Lock( 0 ), Show( 1 ) ),
			Gender( "F", Lock( 1 ), Show( 0 ) )
		)
	)
);
rpt = obj << report;
scrObj = rpt[Outline Box( "Utility Profiler" )] << Get Scriptable Object;
scrObj << Maximize For Each Gridpoint;
rpt[Outline Box( "Remembered Settings" )][Radio Box( 1 )] << Set( 2 );
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Open data table;
4. Create Choice object.
5. Set response data table.
6. Set profile data table.
7. Set subject data table.
8. Define response profile ID chosen.
9. Define response subject ID.
10. Configure utility profiler settings.



### Example 28
> **Summary**: Creates a utility profiler report based on a data table, utilizing choice objects and profile grouping to analyze crust, cheese, and topping effects.

<!-- Keywords: #JSLScriptingLanguage, #UtilityProfiler, #ChoiceObjects, #ProfileGrouping, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Choice(
	Profile DataTable( data_table ),
	Profile ID( :Indicator ),
	Profile Grouping( :Subject, :Trial ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Profiler( 1 )
);
rpt = obj << report;
utlProfScptObj = rpt[Outline Box( "Utility Profiler" )] << get scriptable object;
Match( Random Integer( 1, 3 ),
	1, utlProfScptObj << Independent Uniform Inputs( 1 ),
	2, utlProfScptObj << Independent Resampled Inputs( 1 ),
	3, utlProfScptObj << Dependent Resampled Inputs( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create choice object.
3. Define profile data table.
4. Set profile identifier.
5. Define profile grouping.
6. Specify profile effects.
7. Generate profiler report.
8. Retrieve utility profiler scriptable object.
9. Match random integer to input method.
10. Set independent uniform inputs.



## Choice using DOE
> **Summary**: Performs a variance component analysis using the REML method and fits a model for shrinkage with random effects in the Standard Least Squares personality, utilizing the DOE Dialog to define categorical factors and specify design parameters.

<!-- Keywords: #DOE, #REML, #VarianceComponentAnalysis, #ShrinkageModel, #JSL -->

**Code**:
```jsl
// DOE Dialog
// Open data table
dt = Open("data_table.jmp");
// DOE Dialog
DOE(
	Choice Design,
	{
	Add Factor(
		Categorical,
		{"40 GB", "80 GB"},
		"Disk Size",
		0
	),
	Add Factor(
		Categorical,
		{"1.5 GHz", "2.0 GHz"},
		"Speed",
		0
	),
	Add Factor(
		Categorical,
		{"4 Hrs", "6 Hrs"},
		"Battery Life",
		0
	),
	Add Factor(
		Categorical,
		{"$1500", "$1200", "$1000"},
		"Price",
		0
	), Set Random Seed( 12345 ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {4, 1} ),
	Set Prior Mean Choice( [0 0 0 0 0] ),
	Set Prior Variance Matrix(
		[1 0 0 0 0,
		0 1 0 0 0,
		0 0 1 0 0,
		0 0 0 1 0,
		0 0 0 0 1]
	), Set Number of Attributes( 4 ),
	Set Number of Profiles( 2 ),
	Set Number of Choice Sets( 8 ),
	Set Number of Surveys( 1 ),
	Set Expected Number of Respondents(
		1
	), Number of Starts( 10 ),
	Make Design,
	Choice Design Table Output(
		Combined
	), Simulate Responses( 0 )}
);
```

**Code Explanation**:

1. Open data table.
2. Define DOE parameters.
3. Add categorical factors.
4. Set random seed.
5. Add main effects.
6. Set prior mean.
7. Set prior variance matrix.
8. Specify number of attributes.
9. Specify number of profiles.
10. Generate design.



## Choice using Screening
> **Summary**: Executes a screening analysis and choice analysis on two data tables, generating reports for Half Normal Plot and Parameter Estimates.

<!-- Keywords: #JMPScriptingLanguage, #ScreeningAnalysis, #ChoiceAnalysis, #DataTableOperations, #ReportGeneration -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1 << Screening(
	Y( :Percent Reacted ),
	X( :Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration ),
	SendToReport( Dispatch( {}, "Half Normal Plot", OutlineBox, {Close( 1 )} ) )
);
dt3 = Open("data_table.jmp");
dt3 << Choice(
	Profile DataTable( Pizza Combined ),
	Profile ID( :Indicator ),
	Profile Grouping( :Subject, :Trial ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Likelihood Ratio Tests( 1 ),
	SendToReport( Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} ) )
);
```

**Code Explanation**:

1. Open data_table data
2. Perform screening analysis.
3. Set response variable.
4. Define predictor variables.
5. Close Half Normal Plot.
6. Open data_table data
7. Conduct choice analysis.
8. Specify profile data table.
9. Define profile ID.
10. Set profile grouping.



## Choice using Select Where
> **Summary**: Creates a choice model object for Firth bias-adjusted estimates, selecting female rows from an open table and defining various profile effects.

<!-- Keywords: #JSLScriptingLanguage, #ChoiceModeling, #FirthBiasAdjustment, #DataSelection, #ProfileEffects -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :Gender == "F" );
dt << Delete Rows();
objM = dt << Choice(
	One Table( 1 ),
	Subject ID( :Subject ),
	Choice Set ID( :Trial ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Name( "Firth Bias-Adjusted Estimates" )(1),
	Likelihood Ratio Tests( 1 )
);
rptM = objM << Report();
```

**Code Explanation**:

1. Open table.
2. Select female rows.
3. Delete selected rows.
4. Create choice model object.
5. Specify one table.
6. Define subject ID.
7. Define choice set ID.
8. Define profile ID.
9. Define profile effects.
10. Enable Firth bias adjustment.



## Choice using Loc
> **Summary**: Analyze and visualize choice models for males and females, utilizing Loc, Design, and Choice functions to generate reports.

<!-- Keywords: #JSLScripting, #ChoiceModel, #DataAnalysis, #Visualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
theFemales = Loc( (Design( dt:Gender << Get As Matrix() ))[0, 1] );
dt << Select Rows( theFemales ) << Exclude( 1 );
objExM = dt << Choice(
	One Table( 1 ),
	Subject ID( :Subject ),
	Choice Set ID( :Trial ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Name( "Firth Bias-Adjusted Estimates" )(1),
	Likelihood Ratio Tests( 1 )
);
dt << Exclude( 0 );
dt << Invert Row Selection() << Exclude( 1 );
objExM << Close Window();
objExF = dt << Choice(
	One Table( 1 ),
	Subject ID( :Subject ),
	Choice Set ID( :Trial ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Name( "Firth Bias-Adjusted Estimates" )(1),
	Likelihood Ratio Tests( 1 )
);
dt << Clear Row States();
objExF << Close Window();
dt << New Column( "GenderNum", Numeric, Continuous, Formula( If( :Gender == "M", 0, 1 ) ) );
objCont = dt << Choice(
	One Table( 1 ),
	Subject ID( :Subject ),
	Choice Set ID( :Trial ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Name( "Firth Bias-Adjusted Estimates" )(1),
	Likelihood Ratio Tests( 1 ),
	By( :GenderNum )
);
rpt1Cont = objCont[1] << Report();
rpt2Cont = objCont[2] << Report();
```

**Code Explanation**:

1. Open table.
2. Identify female rows.
3. Exclude female rows.
4. Run choice model for males.
5. Reinclude all rows.
6. Exclude male rows.
7. Run choice model for females.
8. Clear row states.
9. Add gender numeric column.
10. Run continuous choice model by gender.



## Choice using N Col
### Example 1
> **Summary**: Analyze a table to generate Bayesian parameter estimates and summary statistics, utilizing the Choice platform with specified settings.

<!-- Keywords: #JMPScriptingLanguage, #Choice, #BayesianAnalysis, #ParameterEstimation, #SummaryStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
NIter = 1000;
dtCols = N Col( dt );
obj = dt << Choice(
	One Table( 1 ),
	Subject ID( :Subject ),
	Choice Set ID( :Trial ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Effects( :Gender ),
	Name( "Firth Bias-Adjusted Estimates" )(0),
	Hierarchical Bayes( 1 ),
	Number of Bayesian Iterations( 1000 ),
	Confidence Intervals( 1 ),
	Respondents Are Allowed to Choose None( 1 )
);
rpt = obj << Report;
actBayParEst = rpt[Outline Box( "Bayesian Parameter Estimates" )][Table Box( 1 )] << Get As Matrix;
actSummary = rpt[Outline Box( "Bayesian Parameter Estimates" )][Number Col Box( 6 )] << Get As Matrix;
```

**Code Explanation**:

1. Open table.
2. Set number of iterations.
3. Count columns in table.
4. Launch Choice platform.
5. Specify one table.
6. Define subject ID.
7. Define choice set ID.
8. Define profile ID.
9. Include profile effects.
10. Include subject effects.
11. Disable Firth bias adjustment.
12. Enable hierarchical Bayes.
13. Set Bayesian iterations.
14. Enable confidence intervals.
15. Allow choosing none.
16. Retrieve report.
17. Extract Bayesian parameter estimates.
18. Extract summary statistics.



### Example 2
> **Summary**: Process of performing choice analysis on a data table, generating subject estimates, and updating the original data table with new columns.

<!-- Keywords: #JSLScripting, #ChoiceAnalysis, #DataTableManipulation, #SubjectEstimates, #BayesianIteration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
NIter = 1000;
dtCols = N Col( dt );
obj = dt << Choice(
	One Table( 1 ),
	Subject ID( :Subject ),
	Choice Set ID( :Trial ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Effects( :Gender ),
	Name( "Firth Bias-Adjusted Estimates" )(0),
	Hierarchical Bayes( 1 ),
	Number of Bayesian Iterations( 1000 ),
	Confidence Intervals( 1 ),
	Respondents Are Allowed to Choose None( 1 )
);
obj << Save Subject Estimates;
dtSub1 = Current Data Table();
obj = dt << Choice(
	One Table( 1 ),
	Subject ID( :Subject ),
	Choice Set ID( :Trial ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust ),
	Subject Effects( :Gender ),
	Name( "Firth Bias-Adjusted Estimates" )(0),
	Hierarchical Bayes( 1 ),
	Number of Bayesian Iterations( 1000 ),
	Confidence Intervals( 1 ),
	Respondents Are Allowed to Choose None( 1 )
);
obj << Save Subject Estimates;
dtSub2 = Current Data Table();
mySub = 1 :: 32;
Random Reset( 123 );
SubEff1 = J( 32, 1, Random Integer( 2 ) );
SubEff2 = J( 32, 1, Random Integer( 1, 3 ) );
newSubDat = mySub` || SubEff1 || SubEff2;
As Table( newSubDat ) << Set Name( "NewSubjectData" );
Data Table("data_table"):Col1 << Set Modeling Type( Nominal );
Data Table("data_table"):Col2 << Set Data Type( "Character" );
Data Table("data_table"):Col3 << Set Data Type( "Character" );
Data Table("data_table") << Update(
	With( Data Table("data_table") ),
	Match Columns( :Subject = :Col1 ),
	Add Columns from Update table( :Col2, :Col3 )
);
```

**Code Explanation**:

1. Open data table.
2. Set number of iterations.
3. Count columns in data table.
4. Perform choice analysis.
5. Save subject estimates.
6. Get current data table.
7. Perform another choice analysis.
8. Save subject estimates.
9. Get current data table.
10. Generate random subject effects.
11. Create new subject data table.
12. Set column modeling types.
13. Update original data table.



## Choice using Fit Model
> **Summary**: Runs a standard least squares model fit with effect screening and Shapley values calculation, generating predicted values and absolute deviations for analysis.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #ShapleyValues, #EffectScreening, #PredictiveAnalytics -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
obj1 = dt1 << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Arrange in Rows( 7 ),
			Shapley Set Random Seed( 1000 ),
			Shapley Background Data Choice( Percent training data set ),
			Shapley Percent Training Data( 60 ),
			Save Shapley Values
		)
	)
);
dt1:SHAP Intercept << Exclude( 0 );
dt1 << New Column( "Sum of SHAP",
	Formula(
		Sum(
			:SHAP Intercept,
			SHAP Age,
			:SHAP Gender,
			:SHAP BMI,
			:SHAP BP,
			:SHAP Total Cholesterol,
			:SHAP LDL,
			:SHAP HDL,
			:SHAP TCH,
			:SHAP LTG,
			:SHAP Glucose
		)
	)
);
obj1 << Predicted Values;
dt1 << New Column( "Absolute Deviation", Formula( Abs( :Sum of SHAP - :Predicted Y ) ) );
dt1 << New Column( "Max Deviation", Formula( Col Max( :Absolute Deviation ) ), hide );
Window( "data_table - Fit Least Squares" ) << close window;
```

**Code Explanation**:

1. Open data table;
2. Fit standard least squares model.
3. Specify response variable Y.
4. Include multiple predictor variables.
5. Set emphasis on effect screening.
6. Run profiler with settings.
7. Enable confidence intervals.
8. Arrange profiler in rows.
9. Set Shapley random seed.
10. Use percent training data for background.
11. Save Shapley values.
12. Exclude SHAP Intercept column.
13. Create new column for sum of SHAP values.
14. Calculate predicted values.
15. Create new column for absolute deviation.
16. Create hidden column for max deviation.
17. Close the model window.



## Choice using Set Name
> **Summary**: Extracts and reports term and phrase lists from a text column, utilizing Text Explorer to configure regex libraries and term selection.

<!-- Keywords: #TextExplorer, #RegexLibraries, #TermSelection, #DataReporting, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Gender << Set Name( "Gender(test)" );
obj = Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Set Regex(
		Library( "Money" ),
		Library( "Common Emoticons" ),
		Library( "Words" ),
		Library( "HTML Link Grabber" ),
		Library( "Time" ),
		Library( "Numbers" ),
		Library( "Phrasing Punctuation" )
	),
	Term Selection(
		Show Term Cloud( 1 ),
		Models(
			Model( Response Column( :Gender( test ) ), DTM Size( 31 ), Target Levels( Target Number( 1 ), Target String( "1" ) ) ),
			Current Model Settings(
				Response Column( :Gender( test ) ),
				DTM Size( 31 ),
				Target Levels( Target Number( 1 ), Target String( "1" ) )
			)
		),
		Model Choice( 1 )
	),
	Language( "English" ), 
);
rpt = obj << report;
dtTerm = rpt[Outline Box( "Term and Phrase Lists" )][Border Box( 1 )][Table Box( 1 )] << make into data table;
```

**Code Explanation**:

1. Open table.
2. Rename column.
3. Create Text Explorer object.
4. Define regex libraries.
5. Configure term selection.
6. Set response column.
7. Define DTM size.
8. Specify target levels.
9. Choose model settings.
10. Extract term and phrase lists.



