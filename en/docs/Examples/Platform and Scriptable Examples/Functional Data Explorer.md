# Functional Data Explorer

## Functional Data Explorer Group 
### Example 1
> **Summary**: Opens a data table, launches the Functional Data Explorer Group, and configures multiple explorers with specific variables, validation, and plot settings.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #DataProcessing, #Validation, #PlotSettings -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Functional Data Explorer Group(
	Functional Data Explorer(
		Y( :"Size/nm"n ),
		X( :Time ),
		ID( :Batch ),
		Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n, :"T(¬∫C)"n ),
		Validation( :Run Type ),
		Plot Mean( 0 ),
		Plot Standard Deviation( 0 )
	),
	Functional Data Explorer(
		Y( :"#Oversize"n ),
		X( :Time ),
		ID( :Batch ),
		Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n, :"T(¬∫C)"n ),
		Validation( :Run Type ),
		Plot Mean( 0 ),
		Plot Standard Deviation( 0 ),
		B Splines(
			Diagnostic Plots( 0 ),
			Function Summaries( 0 ),
			Basis Function Coefficients( 0 ),
			Random Coefficients( 0 ),
			Functional PCA(
				1,
				Score Plot( 0 ),
				FPC Profiler(
					1,
					Confidence Intervals( 1 ),
					Term Value(
						Time( 9.875, Lock( 1 ), Show( 1 ) ),
						FPC 1( 0, Lock( 0 ), Show( 1 ) ),
						FPC 2( 0, Lock( 0 ), Show( 1 ) ),
						FPC 3( 0, Lock( 0 ), Show( 1 ) )
					)
				)
			)
		),
		SendToReport( Dispatch( {}, "Data Processing", OutlineBox, {Close( 1 )} ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer Group.
3. Configure first Functional Data Explorer.
4. Set Y variable: Size/nm.
5. Set X variable: Time.
6. Set ID variable: Batch.
7. Set Z variables: %Beads, %Strength, Flow(g/min), T(¬∫C).
8. Set validation: Run Type.
9. Disable mean plot.
10. Disable standard deviation plot.



### Example 2
> **Summary**: Analyze and visualize functional data explorer groups, including B-splines, Functional PCA, and generalized regression models.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #Bsplines, #FunctionalPCA, #GeneralizedRegressionModel -->

**Code**:
```jsl
Open("data_table.jmp") << Functional Data Explorer Group(
	Functional Data Explorer(
		Y( :"Size/nm"n ),
		X( :Time ),
		ID( :Batch ),
		Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n, :"T(¬∫C)"n ),
		Validation( :Run Type ),
		B Splines(
			Functional PCA(
				1,
				FPC Profiler(
					1,
					Confidence Intervals( 1 ),
					Term Value( Time( 9.707, Lock( 1 ), Show( 1 ) ), FPC 1( 0, Lock( 0 ), Show( 1 ) ) )
				)
			),
			Functional DOE Analysis(
				FDOE Profiler(
					1,
					Confidence Intervals( 1 ),
					Term Value(
						Time( 9.707, Lock( 1 ), Show( 1 ) ),
						"%Beads"n( 85, Lock( 0 ), Show( 1 ) ),
						"%Strength"n( 20, Lock( 0 ), Show( 1 ) ),
						"Flow(g/min)"n( 350, Lock( 0 ), Show( 1 ) ),
						"T(¬∫C)"n( 30, Lock( 0 ), Show( 1 ) )
					)
				),
				Generalized Regression FPC Model(
					FPC Number( 1 ),
					Estimation Method( Best Subset ),
					Validation Method( Holdback, 0.3 ),
					Enforce Heredity,
					Model Summary( 0 ),
					Parameter Estimates for Original Predictors( 0 ),
					Effect Tests( 0 )
				)
			)
		),
		SendToReport( Dispatch( {"Functional Data Explorer - Size/nm"}, "Data Processing", OutlineBox, {Close( 1 )} ) )
	),
	Functional Data Explorer(
		Y( :"#Oversize"n ),
		X( :Time ),
		ID( :Batch ),
		Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n, :"T(¬∫C)"n ),
		Validation( :Run Type )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set response variable.
4. Define time variable.
5. Specify batch identifier.
6. Include additional factors.
7. Set validation method.
8. Apply B-splines analysis.
9. Conduct Functional PCA.
10. Display FPC profiler.
11. Enable confidence intervals.
12. Set term values.
13. Perform Functional DOE analysis.
14. Launch FDOE profiler.
15. Configure profiler settings.
16. Define term values.
17. Build generalized regression model.
18. Select FPC number.
19. Choose estimation method.
20. Set validation method.
21. Enforce heredity constraint.
22. Hide model summary.
23. Hide parameter estimates.
24. Hide effect tests.
25. Close data processing outline.



### Example 1
> **Summary**: Analyze and visualize functional data using Fourier Basis and Functional PCA, with customization options for FPC Profiler.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #FourierBasis, #FunctionalPCA, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Plot Mean( 0 ),
	Plot Standard Deviation( 0 ),
	Fourier Basis(
		Diagnostic Plots( 0 ),
		Function Summaries( 0 ),
		Basis Function Coefficients( 0 ),
		Random Coefficients( 0 ),
		Functional PCA(
			1,
			FPC Profiler(
				1,
				Confidence Intervals( 1 ),
				Term Value(
					Week Of Year( 27, Lock( 1 ), Show( 1 ) ),
					FPC 1( 0, Lock( 0 ), Show( 1 ) ),
					FPC 2( 0, Lock( 0 ), Show( 1 ) ),
					FPC 3( 0, Lock( 0 ), Show( 1 ) )
				)
			)
		)
	),
	SendToReport(
		Dispatch( {}, "Data Processing", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Summaries", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fourier Basis on Initial data", "Functional PCA", "Score Plot"}, "Functional PCA", FrameBox,
			{Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 9 ),
				Index Row( 9 ),
				UniqueID( 835420409 ),
				FoundPt( {207, 418} ),
				Origin( {-61.5168539325843, 18.625} ),
				Offset( {-88, -75} ),
				Tag Line( 1 )
			), Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 11 ),
				Index Row( 11 ),
				UniqueID( 835420411 ),
				FoundPt( {380, 468} ),
				Origin( {84.2696629213483, 4.04166666666666} ),
				Offset( {29, -7} ),
				Tag Line( 1 )
			), Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 10 ),
				Index Row( 10 ),
				UniqueID( 835420410 ),
				FoundPt( {155, 594} ),
				Origin( {-105.337078651685, -32.7083333333333} ),
				Tag Line( 1 )
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Launch Functional Data Explorer.
3. Set Y variable to TMAX.
4. Set X variable to Week of Year.
5. Use NAME as ID.
6. Disable plot mean.
7. Disable plot standard deviation.
8. Configure Fourier Basis.
9. Enable Functional PCA.
10. Customize FPC Profiler.



### Example 2
> **Summary**: Analyze and visualize ethanol data using Functional Data Explorer, applying B Splines transformation, Functional PCA, and FPC Profiler to identify patterns and trends.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #BSplines, #FunctionalPCA, #FPCProfiler -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Y( :Ethanol ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Align 0 to 1 ),
	B Splines(
		Functional PCA(
			1,
			FPC Profiler(
				1,
				Confidence Intervals( 1 ),
				Reorder X Variables( FPC 10, FPC 9, FPC 8, FPC 7, FPC 6, FPC 5, FPC 4, FPC 3, FPC 2, FPC 1 )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set response variable: Ethanol.
4. Set predictor variable: Time.
5. Set ID variable: BatchID.
6. Align data from 0 to 1.
7. Apply B Splines transformation.
8. Perform Functional PCA.
9. Generate FPC Profiler.
10. Display confidence intervals.



### Example 3
> **Summary**: Analyze ethanol data using Functional Data Explorer, performing B Splines and Functional PCA with confidence intervals.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #Bsplines, #FunctionalPCA, #ConfidenceIntervals -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Y( :Ethanol ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Align 0 to 1 ),
	B Splines(
		Functional PCA(
			1,
			FPC Profiler(
				1,
				Confidence Intervals( 1 ),
				Reorder X Variables( FPC 10, FPC 9, FPC 8, FPC 7, FPC 6, FPC 5, FPC 4, FPC 3, FPC 2, FPC 1 )
			)
		)
	)
);
obj << Redo Analysis;
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set response variable: Ethanol.
4. Set predictor variable: Time.
5. Set ID variable: BatchID.
6. Apply data processing: Align 0 to 1.
7. Configure B Splines analysis.
8. Perform Functional PCA with 1 component.
9. Enable FPC Profiler with confidence intervals.
10. Reorder FPC variables for visualization.



### Example 4
> **Summary**: Analyze a data table using Functional Data Explorer, performing Functional PCA and Generalized Regression FPC modeling with P Splines.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #PSplines, #GeneralizedRegressionFPCModeling, #FunctionalPCA -->

**Code**:
```jsl
Open("data_table.jmp") << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	P Splines(
		Functional PCA(
			1,
			FPC Profiler(
				1,
				Confidence Intervals( 1 ),
				Term Value( T( 45, Lock( 1 ), Show( 1 ) ), FPC 1( 0, Lock( 0 ), Show( 1 ) ), FPC 2( 0, Lock( 0 ), Show( 1 ) ) )
			)
		),
		Functional DOE Analysis(
			FDOE Profiler(
				1,
				Confidence Intervals( 1 ),
				Term Value(
					T( 45, Lock( 1 ), Show( 1 ) ),
					Solvent( 0.5375, Lock( 0 ), Show( 1 ) ),
					Active( 0.25, Lock( 0 ), Show( 1 ) ),
					Water( 0.2125, Lock( 0 ), Show( 1 ) )
				)
			),
			Generalized Regression FPC Model(
				FPC Number( 1 ),
				Estimation Method( Best Subset ),
				Validation Method( AICc ),
				Enforce Heredity,
				Force( [1 1 1 0 0 0 0 0 0 0] ),
				Model Summary( 0 ),
				Parameter Estimates for Original Predictors( 0 ),
				Effect Tests( 0 )
			),
			Generalized Regression FPC Model(
				FPC Number( 2 ),
				Estimation Method( Best Subset ),
				Validation Method( AICc ),
				Enforce Heredity,
				Force( [1 1 1 0 0 0 0 0 0 0] ),
				Model Summary( 0 ),
				Parameter Estimates for Original Predictors( 0 ),
				Effect Tests( 0 )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Launch Functional Data Explorer.
3. Set response variable.
4. Define time variable.
5. Specify ID variable.
6. List covariates.
7. Configure P Splines.
8. Perform Functional PCA.
9. Create FPC Profiler.
10. Set confidence intervals.



### Example 5
> **Summary**: Analyze oversize data by applying B-splines and Functional PCA to identify trends and patterns.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #Bsplines, #FunctionalPCA, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp") << Functional Data Explorer(
	Y( :"#Oversize"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n, :"T(¬∫C)"n ),
	Validation( :Run Type ),
	Data Processing( Load Targets( 2905 ) ),
	B Splines(
		Functional PCA(
			1,
			AICc( 0 ),
			BIC( 0 ),
			GCV( 0 ),
			FPC Profiler(
				1,
				Confidence Intervals( 1 ),
				"#Oversize"n << Response Limits(
					{Lower( -100000000, 1 ), Middle( 682649666.256783, 1 ), Upper( 1465299332.51357, 1 ), Goal( "None" ), Importance( 1 )}
				),
				Difference from Target 2905 << Response Limits(
					{Lower( -600000000, 1 ), Middle( 0, 1 ), Upper( 600000000, 1 ), Goal( "None" ), Importance( 1 )}
				),
				Integrated Error from Target 2905 << Response Limits(
					{Lower( -100000000, 0.9819 ), Middle( 300000000, 0.5 ), Upper( 700000000, 0.066 ), Goal( "Minimize" ), Importance( 1 )}
				),
				Term Value( Time( 9.875, Lock( 1 ), Show( 1 ) ), FPC 1( 0, Lock( 0 ), Show( 1 ) ), FPC 2( 0, Lock( 0 ), Show( 1 ) ) )
			)
		),
		Customize Function Summaries( Number of FPCs( 2 ) )
	),
	SendToReport( Dispatch( {}, "Data Processing", OutlineBox, {Close( 1 )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set response variable.
4. Define time variable.
5. Specify batch identifier.
6. Include control variables.
7. Set validation method.
8. Load target values.
9. Apply B-splines method.
10. Perform Functional PCA.



### Example 6
> **Summary**: Analyze a functional data explorer by applying B Splines and performing Functional PCA to model relationships between 'Size/nm', 'Time', and other variables, while validating results against target values.

<!-- Keywords: #FunctionalDataExplorer, #BSplines, #FunctionalPCA, #TargetValidation, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp") << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n, :"T(¬∫C)"n ),
	Validation( :Run Type ),
	Data Processing( Load Targets( 2905 ) ),
	B Splines(
		Functional PCA(
			1,
			AICc( 0 ),
			BIC( 0 ),
			GCV( 0 ),
			FPC Profiler(
				1,
				Confidence Intervals( 1 ),
				"Size/nm"n << Response Limits(
					{Lower( 50, 1 ), Middle( 186.425, 1 ), Upper( 322.85, 1 ), Goal( "None" ), Importance( 1 )}
				),
				Difference from Target 2905 << Response Limits(
					{Lower( -125, 1 ), Middle( 0, 1 ), Upper( 125, 1 ), Goal( "None" ), Importance( 1 )}
				),
				Integrated Error from Target 2905 << Response Limits(
					{Lower( -25, 0.9819 ), Middle( 50, 0.5 ), Upper( 125, 0.066 ), Goal( "Minimize" ), Importance( 1 )}
				),
				Term Value( Time( 9.71, Lock( 1 ), Show( 1 ) ), FPC 1( 10, Lock( 0 ), Show( 1 ) ) )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set Y variable.
4. Set X variable.
5. Set ID variable.
6. Define Z variables.
7. Specify validation method.
8. Load target data.
9. Apply B Splines.
10. Perform Functional PCA.



### Example 7
> **Summary**: Creates and configures a Functional Data Explorer for simple spline data analysis, utilizing B Splines method.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #BSplines, #SimpleSplineAnalysis, #DataConfiguration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y(
		:Name( "1980" ), :Name( "1984" ), :Name( "1988" ), :Name( "1992" ), :Name( "1996" ), :Name( "2000" ), :Name( "2004" ),
		:Name( "2008" ), :Name( "2012" )
	),
	ID( :State ),
	B Splines
);
Close( dt, No Save );
dt = New Table( "Simple Spline Data", New Column( "x", Values( 0 :: 10 ) ), New Column( "y", Formula( Random Normal() ) ) );
obj = dt << Functional Data Explorer( Data Format( Column ), Y( :x, :y ), B Splines );
```

**Code Explanation**:

1. Open data table;
2. Launch Functional Data Explorer.
3. Set data format to row.
4. Define Y variables for election years.
5. Set ID variable to "State".
6. Use B Splines method.
7. Close table without saving.
8. Create new table "Simple Spline Data".
9. Add column "x" with values 0 to 10.
10. Add column "y" with random normal formula.



### Example 8
> **Summary**: Sets up a Functional Data Explorer to analyze data across states, using B Splines and specifying Y variables for years.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #BSplines, #DataAnalysis, #State-LevelData -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y(
		:Name( "1980" ), :Name( "1984" ), :Name( "1988" ), :Name( "1992" ), :Name( "1996" ), :Name( "2000" ), :Name( "2004" ),
		:Name( "2008" ), :Name( "2012" )
	),
	ID( :State ),
	B Splines
);
Close( dt, No Save );
a = 1;
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set data format to row.
4. Specify Y variables for years.
5. Identify ID variable as State.
6. Use B Splines method.
7. Close data table without saving.
8. Assign value 1 to variable a.



### Example 9
> **Summary**: Runs the exploration and modeling of data using Functional Data Explorer, adding B Splines, P Splines, and Fourier Basis models.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #BSplines, #PSplines, #FourierBasis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :TAVG ), X( :Week of Year ), ID( :STATION ) );
obj << B Splines;
obj << P Splines;
obj << Fourier Basis;
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set Y variable to TAVG.
4. Set X variable to Week of Year.
5. Set ID variable to STATION.
6. Add B Splines model.
7. Add P Splines model.
8. Add Fourier Basis model.



### Example 10
> **Summary**: Opens a data table and launches the Functional Data Explorer to visualize and explore relationships between 'kHours' and 'event time', filtered by 'System ID'.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #DataTable, #ExploratoryDataAnalysis, #InteractiveVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :kHours, :event time ), ID( :System ID ) );
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.



### Example 11
> **Summary**: Launches Functional Data Explorer with event time as Y variable and System ID as ID variable, allowing for interactive exploration of data.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #DataTable, #InteractiveAnalysis, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :event time ), ID( :System ID ) );
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set event time as Y variable.
4. Set System ID as ID variable.



### Example 12
> **Summary**: Creates a Functional Data Explorer to analyze data across states, using B Splines method and setting ID variable to State.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #BSplines, #DataAnalysis, #State-LevelData -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y(
		:Name( "1980" ), :Name( "1984" ), :Name( "1988" ), :Name( "1992" ), :Name( "1996" ), :Name( "2000" ), :Name( "2004" ),
		:Name( "2008" ), :Name( "2012" )
	),
	ID( :State ),
	B Splines
);
```

**Code Explanation**:

1. Open table.
2. Create Functional Data Explorer.
3. Set data format to row.
4. Define Y variables for years.
5. Set ID variable to State.
6. Use B Splines method.



### Example 13
> **Summary**: Launches Functional Data Explorer with TAVG as the response variable, DATE as the predictor variable, and STATION as the ID variable using P Splines method.

<!-- Keywords: #FunctionalDataExplorer, #PSplines, #JMPScriptingLanguage, #DataTable, #ExploratoryDataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :TAVG ), X( :DATE ), ID( :STATION ), P Splines );
```

**Code Explanation**:

1. Open data table.
2. Assign table to variable `dt`.
3. Launch Functional Data Explorer.
4. Set response variable to TAVG.
5. Set predictor variable to DATE.
6. Set ID variable to STATION.
7. Use P Splines method.



### Example 14
> **Summary**: Creates a B Splines model with 2 knots for the 'weight' variable in a data table, using GCV for model selection.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #BSplines, #ModelSelection, #GCV -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Y( :weight ),
	X( :weight ),
	B Splines( Knot Locations( [93, 120] ), GCV, Select Model( Knots( 2 ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Launch Functional Data Explorer.
3. Set Y variable to "weight".
4. Set X variable to "weight".
5. Use B Splines method.
6. Specify knot locations at 93 and 120.
7. Use GCV for model selection.
8. Select model with 2 knots.



### Example 15
> **Summary**: Explores a functional data relationship using P Splines and Generalized Cross-Validation.

<!-- Keywords: #FunctionalDataExplorer, #PSplines, #GeneralizedCrossValidation, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :weight ), X( :weight ), P Splines( GCV ) );
```

**Code Explanation**:

1. Open data table;
2. Assign data table to variable.
3. Launch Functional Data Explorer.
4. Set response variable to weight.
5. Set predictor variable to weight.
6. Use P Splines method.
7. Apply Generalized Cross-Validation.



### Example 16
> **Summary**: Processes and analyzes data using B Splines in JMP's Functional Data Explorer, generating a report with dynamic time warping and row alignment.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #BSplines, #DynamicTimeWarping, #RowAlignment -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :Ethanol ), X( :Time ), ID( :BatchID ), Validation( :Validation ), B Splines );
rpt = obj << report;
scptObj = rpt[Outline Box( "B-Spline on Initial data" )] << get scriptable object;
scptObj << Remove Fit;
obj << B Splines;
obj << (Model["B Splines"] << Remove Fit);
obj << Data Processing( Dynamic Time Warping( Reference( 100 ) ) );
obj << Data Processing( Row Alignment );
obj << Data Processing( Align Range 0 to 1 );
obj << Data Processing( Range 0 to 1 );
obj << Data Processing( Dynamic Time Warping( Reference( 5 ) ) );
obj << Data Processing( Range 0 to 1 );
```

**Code Explanation**:

1. Open table.
2. Launch Functional Data Explorer.
3. Set response variable.
4. Set time variable.
5. Set ID variable.
6. Set validation variable.
7. Use B Splines.
8. Get report object.
9. Access B-Spline outline box.
10. Remove fit from scriptable object.



### Example 17
> **Summary**: Launches Functional Data Explorer to analyze data table relationships, setting variables for Y, X, ID, Z, and validation, with B-splines method applied.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #DataAnalysis, #B-Splines, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :Flow ), X( :Order ), ID( :Wafer Id ), Z( :Condition ), Validation( :Validation ), B Splines );
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set Y variable.
4. Set X variable.
5. Set ID variable.
6. Set Z variable.
7. Set validation variable.
8. Use B-splines method.



### Example 18
> **Summary**: Analyze a data table using Functional Data Explorer, generating a report with P Splines model controls and interactive buttons.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #PSplinesModel, #DynamicTimeWarping, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	Data Processing( Dynamic Time Warping( Reference( 1 ) ) ),
	P Splines Model Controls, 
);
rpt = obj << report;
rpt[Outline Box( "Model Controls" )][Button Box( 4 )] << Click();
```

**Code Explanation**:

1. Open data table;
2. Launch Functional Data Explorer.
3. Set response variable.
4. Define time variable.
5. Specify ID variable.
6. Include covariates.
7. Apply dynamic time warping.
8. Use P splines model.
9. Generate report.
10. Click on specific button.



### Example 19
> **Summary**: Analyze three temperature variables (TMIN, TMAX, and TAVG) using Functional Data Explorer in JMP, with Fourier basis, Functional PCA, and FPC Profiler configurations.

<!-- Keywords: #JMP, #FunctionalDataExplorer, #FourierBasis, #FunctionalPCA, #FPCProfiler -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Y( :TMIN ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Center ),
	Fourier Basis(
		Functional PCA(
			1,
			FPC Profiler(
				1,
				Confidence Intervals( 1 ),
				Term Value(
					:Week of Year( 27, N Levels( 53 ), Lock( 1 ), Show( 1 ) ),
					FPC 1( 0, Lock( 0 ), Show( 1 ) ),
					FPC 2( 0, Lock( 0 ), Show( 1 ) )
				)
			)
		)
	)
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Center ),
	Fourier Basis(
		Functional PCA(
			1,
			FPC Profiler(
				1,
				Confidence Intervals( 1 ),
				Term Value(
					:Week of Year( 27, N Levels( 53 ), Lock( 1 ), Show( 1 ) ),
					FPC 1( 0, Lock( 0 ), Show( 1 ) ),
					FPC 2( 0, Lock( 0 ), Show( 1 ) )
				)
			)
		)
	)
);
obj = dt << Functional Data Explorer(
	Y( :TAVG ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Center ),
	Fourier Basis(
		Functional PCA(
			1,
			FPC Profiler(
				1,
				Confidence Intervals( 1 ),
				Term Value(
					:Week of Year( 27, N Levels( 53 ), Lock( 1 ), Show( 1 ) ),
					FPC 1( 0, Lock( 0 ), Show( 1 ) ),
					FPC 2( 0, Lock( 0 ), Show( 1 ) )
				)
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer for TMIN.
3. Set Y to TMIN.
4. Set X to Week of Year.
5. Set ID to NAME.
6. Center data processing.
7. Use Fourier basis.
8. Perform Functional PCA.
9. Configure FPC Profiler.
10. Display confidence intervals.
11. Set term values for Week of Year.
12. Show FPC 1 and FPC 2 terms.
13. Repeat steps 2-12 for TMAX.
14. Repeat steps 2-12 for TAVG.



### Example 20
> **Summary**: Explores and analyzes ethanol data using Functional Data Explorer, with B Splines method applied to model relationships between time and response variable.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #BSplines, #TimeSeriesAnalysis, #DataModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Y( :Ethanol ),
	X( :Time ),
	ID( :BatchID ),
	B Splines( Knots( [0.18, 0.37, 0.73, 1.47, 2.20, 2.94, 4.41, 5.88] ) )
);
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set response variable.
4. Set time variable.
5. Set ID variable.
6. Use B Splines method.
7. Define knot positions.



### Example 21
> **Summary**: Runs the analysis and processing of a data table by opening it, launching Functional Data Explorer, setting variables, removing zero values, disabling automatic recalculation, resetting the random seed, selecting and deleting rows, and closing the window.

<!-- Keywords: #JMPScripting, #FunctionalDataExplorer, #DataProcessing, #RandomSampling, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :Ethanol ), X( :Time ), ID( :BatchID ), Data Processing( Remove Zeros ) );
obj << Automatic Recalc( 0 );
Random Reset( 123456789 );
dt << Select Randomly( 0.1 ) << Delete Rows();
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set response variable to Ethanol.
4. Set time variable to Time.
5. Set ID variable to BatchID.
6. Remove zero values from data.
7. Disable automatic recalculation.
8. Reset random seed.
9. Randomly select and delete 10% of rows.
10. Close the Functional Data Explorer window.



### Example 22
> **Summary**: Launches Functional Data Explorer to analyze relationships between Homogeneity Grade and T, with Formulation as an ID variable, using B Splines method.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #Bsplines, #IDVariable, #PredictorVariable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :Homogeneity Grade ), X( :T ), ID( :Formulation ), B Splines );
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set response variable.
4. Set predictor variable.
5. Specify ID variable.
6. Use B Splines method.



### Example 23
> **Summary**: Explores and filters data for election results by state, utilizing the Functional Data Explorer to define Y variables and apply a local data filter.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #LocalDataFilter, #DataTableManipulation, #ElectionAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( :"1980"n, :"1984"n, :"1988"n, :"1992"n, :"1996"n, :"2000"n, :"2004"n, :"2008"n, :"2012"n ),
	ID( :State ),
	Local Data Filter( Add Filter( columns( :"1980"n ), Where( :"1980"n >= 30 & :"1980"n <= 30 ) ) )
);
rpt = Current Data Table();
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set data format to row.
4. Define Y variables for election years.
5. Set ID variable to State.
6. Add local data filter for 1980 election.
7. Filter where 1980 results are 30.
8. Assign current data table to rpt variable.



### Example 24
> **Summary**: Launches Functional Data Explorer to analyze data table 'data_table.jmp', setting Y variable to TAVG, X variable to Week of Year, and ID variable to NAME.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #DataAnalysis, #Scripting, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :TAVG ), X( :Week of Year ), ID( :NAME ), );
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set Y variable to TAVG.
4. Set X variable to Week of Year.
5. Set ID variable to NAME.



### Example 25
> **Summary**: Runs the analysis and processing of a data table, including filtering out values above 95 and updating overall statistics.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #DataProcessing, #Filtering, #Statistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :weight ) );
rpt = obj << report;
frame = rpt[Frame Box( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg1 = seg << Get Y Values;
overall1 = rpt[Outline Box( "Overall" )][Number Col Box( 1 )] << get as matrix;
obj << Data Processing( Remove Value( 95 ) );
frame = rpt[Frame Box( 1 )];
seg = (frame << Find Seg( Marker Seg( 1 ) ));
seg2 = seg << Get Y Values;
overall2 = rpt[Outline Box( "Overall" )][Number Col Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Launch Functional Data Explorer on weight.
3. Retrieve the report object.
4. Access the first frame box.
5. Find segment with marker 1.
6. Extract Y values from segment.
7. Get overall statistics as matrix.
8. Remove value 95 from data.
9. Refresh the first frame box.
10. Find segment with marker 1 again.
11. Extract new Y values from segment.
12. Get updated overall statistics as matrix.



### Example 26
> **Summary**: Explores data and filtering in JMP, extracting overall reports and counting rows based on specific conditions.

<!-- Keywords: #JMPScriptingLanguage, #DataExploration, #Filtering, #Reporting, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :Air ), X( :Time ), ID( :BatchID ) );
rpt = obj << report;
overall = rpt[Outline Box( "Overall" )][Number Col Box( 1 )] << get as matrix;
rows0.25 = N Rows( (dt << Select Where( :Time < 0.25 )) << get selected rows() );
obj << Data Processing( Filter X( [0.25, .] ) );
overall0.25 = rpt[Outline Box( "Overall" )][Number Col Box( 1 )] << get as matrix;
rows11 = N Rows( (dt << Select Where( :Time > 11 )) << get selected rows() );
obj << Data Processing( Filter X( [., 11] ) );
overall11 = rpt[Outline Box( "Overall" )][Number Col Box( 1 )] << get as matrix;
rpt[Outline Box( "Steps" )][Button Box( 1 )] << Click();
rpt[Outline Box( "Steps" )][Button Box( 1 )] << Click();
rows8000 = N Rows( (dt << Select Where( :Air > 8000 )) << get selected rows() );
obj << Data Processing( Filter Y( [., 8000] ) );
overall8000 = rpt[Outline Box( "Overall" )][Number Col Box( 1 )] << get as matrix;
rows2000 = N Rows( (dt << Select Where( :Air < 2000 )) << get selected rows() );
obj << Data Processing( Filter Y( [2000, .] ) );
overall2000 = rpt[Outline Box( "Overall" )][Number Col Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open table.
2. Launch Functional Data Explorer.
3. Extract overall report.
4. Count rows where Time < 0.25.
5. Filter data for X > 0.25.
6. Extract updated overall report.
7. Count rows where Time > 11.
8. Filter data for X < 11.
9. Extract updated overall report.
10. Click button twice in Steps outline box.
11. Count rows where Air > 8000.
12. Filter data for Y < 8000.
13. Extract updated overall report.
14. Count rows where Air < 2000.
15. Filter data for Y > 2000.
16. Extract updated overall report.



### Example 27
> **Summary**: Creates a Functional Data Explorer object to analyze and visualize data from a column-formatted table, using Fourier basis for analysis.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #FourierBasis, #ColumnFormat, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Data Format( Column ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Fourier Basis );
```

**Code Explanation**:

1. Open data table;
2. Create Functional Data Explorer object.
3. Set data format to column.
4. Specify response variables.
5. Use Fourier basis for analysis.



### Example 28
> **Summary**: Analyze election data by opening a table, launching Functional Data Explorer, and defining Y variables for specific years.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #DataAnalysis, #ElectionData, #FourierBasis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y(
		:Name( "1980" ), :Name( "1984" ), :Name( "1988" ), :Name( "1992" ), :Name( "1996" ), :Name( "2000" ), :Name( "2004" ),
		:Name( "2008" ), :Name( "2012" )
	),
	ID( :State ),
	Fourier Basis
);
```

**Code Explanation**:

1. Open table.
2. Launch Functional Data Explorer.
3. Set data format to row.
4. Define Y variables for election years.
5. Set ID variable to State.
6. Use Fourier Basis method.



### Example 29
> **Summary**: Launches Functional Data Explorer with specified variables and Fourier Basis, enabling interactive analysis.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #FourierBasis, #DataAnalysis, #InteractiveVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :TAVG ), X( :Week of Year ), ID( :NAME ), Fourier Basis );
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set Y variable.
4. Set X variable.
5. Set ID variable.
6. Use Fourier Basis.



### Example 30
> **Summary**: Process of generating a Functional PCA report with eigenvalues from a data table, utilizing P Splines model and 100 knots.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #PSplines, #Eigenvalue, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Data Format( Column ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	P Splines( Select Model( Knots( 100 ) ) ), 
);
rpt = obj << report;
eigVal = rpt[Outline Box( "Functional PCA" )][Number Col Box( "Eigenvalue" )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Launch Functional Data Explorer.
3. Set data format to column.
4. Define Y variables.
5. Use P Splines model.
6. Specify 100 knots.
7. Generate report.
8. Extract Functional PCA outline.
9. Retrieve Eigenvalue number column.
10. Convert to matrix.



### Example 31
> **Summary**: Analyze and visualize functional data by opening a data table, launching Functional Data Explorer, and generating a report with eigenvalues.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #DataAnalysis, #Visualization, #Eigenvalue -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :Ethanol ), X( :Time ), ID( :BatchID ), P Splines );
rpt = obj << report;
eigVal = rpt[Outline Box( "Functional PCA" )][Number Col Box( "Eigenvalue" )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set response variable.
4. Set time variable.
5. Set ID variable.
6. Choose P Splines method.
7. Generate report object.
8. Access Functional PCA outline.
9. Retrieve Eigenvalue column box.
10. Convert to matrix.



### Example 32
> **Summary**: Launches Functional Data Explorer with B-splines method and saves the script to Script Window, then extracts and closes the script.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #BsplinesMethod, #ScriptWindow, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Data Format( Column ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), B Splines );
obj << Save Script to Script Window;
For( i = 1, i <= N Items( Window() ), i++,
	If( (Window()[i] << get window title) == "Script Window",
		txt = Window()[i][Script Box( 1 )] << get text;
		Window()[i] << Close Window;
		Break();
	)
);
```

**Code Explanation**:

1. Open data table;
2. Launch Functional Data Explorer.
3. Set data format to columns.
4. Define response variables.
5. Use B-splines method.
6. Save script to Script Window.
7. Loop through all windows.
8. Check for Script Window.
9. Extract script text.
10. Close Script Window.



### Example 33
> **Summary**: Launches Functional Data Explorer to analyze data table 'data_table.jmp' with Y variable set to :TAVG, X variable set to :Week of Year, and ID variable set to :STATION.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #DataTableAnalysis, #VariableSelection, #IDVariable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :TAVG ), X( :Week of Year ), ID( :STATION ) );
```

**Code Explanation**:

1. Open data table;
2. Launch Functional Data Explorer.
3. Set Y variable.
4. Set X variable.
5. Set ID variable.



### Example 34
> **Summary**: Analyze a data table by launching Functional Data Explorer and setting variables for Y, X, and ID, using Fourier Basis to explore relationships.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #DataAnalysis, #FourierBasis, #JSL -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :TAVG ), X( :Week of Year ), ID( :STATION ), Fourier Basis );
dt1 = Current Data Table();
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set Y variable.
4. Set X variable.
5. Set ID variable.
6. Use Fourier Basis.
7. Assign current data table.



### Example 35
> **Summary**: Cutomizes function summaries in a data table using B Splines and retrieves a report object.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #BSplines, #CustomizeFunctionSummaries, #ReportObject -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Y( :TAVG ),
	X( :Week of Year ),
	ID( :STATION ),
	B Splines(
		Customize Function Summaries(
			Number of FPCs( 3 ),
			Mean( 0 ),
			Std Dev( 0 ),
			Integrated Difference( 0 ),
			Median( 0 ),
			Minimum( 0 ),
			Maximum( 0 )
		)
	)
);
rpt = obj << report;
For( i = 4, i <= 16, i++,
	visible = rpt[Outline Box( "Function Summaries" )][Number Col Box( i )] << get visibility
);
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set response variable.
4. Set predictor variable.
5. Set ID variable.
6. Use B Splines method.
7. Customize function summaries.
8. Set number of FPCs.
9. Set mean to 0.
10. Retrieve report object.



### Example 36
> **Summary**: Generates function summaries for a data table using B Splines and customizes summary statistics, disabling FPCs and mean calculation.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #BSplines, #CustomizedFunctionSummaries, #DataTableAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Y( :TAVG ),
	X( :Week of Year ),
	ID( :STATION ),
	B Splines(
		Customize Function Summaries(
			FPC 1( 0 ),
			FPC 2( 0 ),
			FPC 3( 0 ),
			FPC 4( 0 ),
			FPC 5( 0 ),
			FPC 6( 0 ),
			FPC 7( 0 ),
			FPC 8( 0 ),
			FPC 9( 0 ),
			FPC 10( 0 ),
			Mean( 0 ),
			Std Dev( 0 ),
			Integrated Difference( 0 ),
			Median( 0 ),
			Minimum( 0 ),
			Maximum( 0 )
		)
	)
);
rpt = obj << report;
visible = rpt[Outline Box( "Function Summaries" )][Number Col Box( 14 )] << get visibility;
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set response variable.
4. Set predictor variable.
5. Set ID variable.
6. Use B Splines method.
7. Customize function summaries.
8. Disable all FPCs.
9. Disable mean calculation.
10. Retrieve visibility status.



### Example 37
> **Summary**: Runs data processing and report generation by opening a JMP data table, launching the Functional Data Explorer, setting variables, generating a report, and capturing log output.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #DataProcessing, #ReportGeneration, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :Temp ), X( :Time ), ID( :BatchID ), );
rpt = obj << report;
scptObj = rpt[Outline Box( "Data Processing" )] << get scriptable object;
lCap = Words( Log Capture( scptObj << Remove Zeros ), "\!N" );
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set Y variable.
4. Set X variable.
5. Set ID variable.
6. Generate report.
7. Access Data Processing outline box.
8. Get scriptable object.
9. Log capture output.
10. Extract non-zero values.



### Example 38
> **Summary**: Analyze ethanol data using Functional Data Explorer, retrieving fit statistics and basis function coefficients.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #PSplines, #FitStatistics, #BasisFunctionCoefficients -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :Ethanol ), X( :Time ), ID( :BatchID ), P Splines );
rpt = obj << report;
fStat = rpt[Outline Box( "Fit Statistics" )][Number Col Box( 1 )] << get as matrix;
est = rpt[Outline Box( "Basis Function Coefficients" )][Table Box( 1 )] << get as matrix;
nObs = N Rows( dt );
nPar = 2 * N Rows( est );
neg2LnL = fStat[3];
bic = neg2LnL + nPar * Log( nObs );
aic = 2 * nPar + neg2LnL;
aicc = aic + 2 * nPar * (nPar + 1) / (nObs - nPar - 1);
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set response variable to Ethanol.
4. Set predictor variable to Time.
5. Set ID variable to BatchID.
6. Use P Splines method.
7. Retrieve fit statistics report.
8. Extract basis function coefficients.
9. Count number of observations.
10. Calculate model parameters and statistics.



### Example 39
> **Summary**: Analyze a data table using Functional Data Explorer, configuring B Splines method with diagnostic plots, model summary, and functional PCA disabled.

<!-- Keywords: #FunctionalDataExplorer, #BSplines, #JMPScriptingLanguage, #DataAnalysis, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines( Diagnostic Plots( 0 ), Model Summary( 0 ), Functional PCA( 0 ) )
);
rpt = obj << report;
ifBox8 = rpt[If Box( 19 )] << get;
ifBox11 = rpt[If Box( 22 )] << get;
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set Y variable.
4. Set X variable.
5. Set ID variable.
6. Use B Splines method.
7. Disable diagnostic plots.
8. Disable model summary.
9. Disable functional PCA.
10. Get If Box 19 report.
11. Get If Box 22 report.



### Example 40
> **Summary**: Analyze functional data by generating a report with customized function summaries and extracting FPC values as a matrix.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #CustomizedFunctionSummaries, #BSplines, #MatrixOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Y( :TAVG ),
	X( :Week of Year ),
	ID( :STATION ),
	B Splines( Customize Function Summaries( Number of FPCs( 7 ) ) )
);
rpt = obj << report;
fpc = rpt[Number Col Box( "FPC" )] << get as matrix;
```

**Code Explanation**:

1. Open table.
2. Launch Functional Data Explorer.
3. Set Y variable.
4. Set X variable.
5. Set ID variable.
6. Use B Splines method.
7. Customize function summaries.
8. Set number of FPCs to 7.
9. Generate report.
10. Extract FPC values as matrix.



### Example 41
> **Summary**: Analyzes and creates reports for fit statistics for a functional data explorer model, utilizing P Splines method.

<!-- Keywords: #JMPScripting, #FunctionalDataExplorer, #PSplines, #FitStatistics, #Reporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :Y ), X( :Days ), ID( :Patient ), P Splines );
rpt = obj << report;
stats = rpt[Outline Box( "Fit Statistics" )][Number Col Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data_table data
2. Launch Functional Data Explorer.
3. Set response variable.
4. Set time variable.
5. Set subject identifier.
6. Use P Splines method.
7. Generate report.
8. Extract fit statistics outline.
9. Access first number column box.
10. Retrieve statistics as matrix.



### Example 42
> **Summary**: Fits a B-spline curve to data and extracting fit statistics, utilizing the Functional Data Explorer platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #Bsplines, #FitStatistics, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :weight ), X( :weight ), B Splines( Knots( [10] ), Degree( [1] ) ) );
rpt = obj << report;
stats = rpt[Outline Box( "Fit Statistics" )][Number Col Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set response variable.
4. Set predictor variable.
5. Use B Splines method.
6. Specify knot locations.
7. Set spline degree.
8. Generate report object.
9. Extract fit statistics outline.
10. Retrieve number column box content.



### Example 43
> **Summary**: Generates a B-spline regression report with fit statistics, using the Functional Data Explorer platform in JMP.

<!-- Keywords: #JMPFunctionalDataExplorer, #BsplinesRegression, #FitStatistics, #ReportGeneration, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :weight ), X( :weight ), B Splines( Knots( [10] ), Degree( [2] ) ) );
rpt = obj << report;
stats = rpt[Outline Box( "Fit Statistics" )][Number Col Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set Y variable to weight.
4. Set X variable to weight.
5. Use B Splines method.
6. Specify 10 knots.
7. Set degree to 2.
8. Generate report.
9. Extract Fit Statistics outline box.
10. Retrieve first number column as matrix.



### Example 44
> **Summary**: Creates a Functional Data Explorer object to model and report on weight data, utilizing B Splines with 4 knots and degree 3.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #BSplines, #Knots, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :weight ), X( :weight ), B Splines( Knots( [4] ), Degree( [3] ) ) );
rpt = obj << report;
stats = rpt[Outline Box( "Fit Statistics" )][Number Col Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Create Functional Data Explorer object.
3. Set Y variable to weight.
4. Set X variable to weight.
5. Use B Splines method.
6. Define 4 knots.
7. Set spline degree to 3.
8. Generate report from object.
9. Extract "Fit Statistics" outline box.
10. Retrieve first number column box as matrix.



### Example 45
> **Summary**: Launches Functional Data Explorer to generate a report with B Splines model, sets number of splines to 42, and interacts with buttons and list box.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #BSplines, #ReportGeneration, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :TAVG ), X( :Week of Year ), ID( :STATION ), B Splines );
rpt = obj << report;
rpt[Outline Box( "Model Controls" )][Number Edit Box( 1 )] << Set( 42 );
rpt[Outline Box( "Model Controls" )][Button Box( 1 )] << Click();
rpt[Outline Box( "Model Controls" )][Button Box( 4 )] << Click();
grid = rpt[Outline Box( "Model Controls" )][List Box Box( 1 )] << get items;
```

**Code Explanation**:

1. Open table.
2. Launch Functional Data Explorer.
3. Set Y variable.
4. Set X variable.
5. Set ID variable.
6. Choose B Splines model.
7. Generate report.
8. Set number of splines to 42.
9. Click on first button.
10. Click on fourth button.
11. Get grid items.



### Example 46
> **Summary**: Runs the exploration and reporting of functional relationships in a dataset, utilizing P Splines method with BIC criterion.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #PSplines, #BICCriterion, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :weight ), X( :weight ), P Splines( BIC ) );
rpt = obj << report;
summ = rpt[Outline Box( "Function Summaries" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open table.
2. Launch Functional Data Explorer.
3. Set Y variable.
4. Set X variable.
5. Use P Splines method.
6. Select BIC criterion.
7. Generate report.
8. Extract Function Summaries.
9. Access first Table Box.
10. Convert to matrix.



### Example 47
> **Summary**: Runs the Functional Data Explorer to analyze and report on the relationship between weight variables, utilizing P Splines method with BIC model selection.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #PSplines, #BICModelSelection, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :weight ), X( :weight ), Data Processing( Align Range 0 to 1 ), P Splines( BIC ) );
rpt = obj << report;
summ = rpt[Outline Box( "Function Summaries" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Launch Functional Data Explorer.
3. Set Y variable as weight.
4. Set X variable as weight.
5. Apply data processing: Align Range 0 to 1.
6. Use P Splines method.
7. Select BIC for model selection.
8. Retrieve the report object.
9. Access Function Summaries outline box.
10. Extract Table Box 1 as matrix.



### Example 48
> **Summary**: Analyze ethanol data by opening a data table, launching Functional Data Explorer, and generating a report with dynamic time warping.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #DynamicTimeWarping, #DataAnalysis, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Y( :Ethanol ),
	X( :Time ),
	ID( :BatchID ),
	Validation( :Validation ),
	Data Processing( Dynamic Time Warping( Reference( 1 ) ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set response variable.
4. Set time variable.
5. Set ID variable.
6. Specify validation column.
7. Apply dynamic time warping.
8. Generate report.



### Example 49
> **Summary**: Analyze and visualize ethanol data by opening a data table, launching Functional Data Explorer, and generating a report with dynamic time warping.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #DynamicTimeWarping, #DataAnalysis, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Y( :Ethanol ),
	X( :Time ),
	ID( :BatchID ),
	Validation( :Validation ),
	Data Processing( Dynamic Time Warping( Reference( 10 ) ) ), 
);
rpt = obj << report;
step = rpt[Outline Box( "Steps" )][List Box Box( 1 )] << get items;
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set response variable.
4. Set time variable.
5. Set ID variable.
6. Specify validation column.
7. Apply dynamic time warping.
8. Generate report object.
9. Extract steps outline box.
10. Retrieve list box items.



### Example 50
> **Summary**: Creates a report with initial data plots for each column in a table, utilizing Functional Data Explorer and report generation.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #ReportGeneration, #DataVisualization, #TableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Data Format( Column ),
	Y(
		:Name( "1980" ), :Name( "1984" ), :Name( "1988" ), :Name( "1992" ), :Name( "1996" ), :Name( "2000" ), :Name( "2004" ),
		:Name( "2008" ), :Name( "2012" )
	)
);
rpt = obj << report;
For( i = 1, i <= N Cols( dt << get as matrix ), i++,
	jrn = rpt[Outline Box( "Initial data Plot" )][FrameBox( i + 1 )] << get journal
);
```

**Code Explanation**:

1. Open table.
2. Launch Functional Data Explorer.
3. Set data format to column.
4. Define Y variables for each year.
5. Generate report object.
6. Initialize loop for columns count.
7. Access initial data plot outline.
8. Access frame box for current iteration.
9. Get journal from frame box.
10. Loop ends.



### Example 51
> **Summary**: Analyze ethanol and temperature data using Functional Data Explorer with B Splines method, generating a report with GCV option.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #BSplines, #GCV, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :Ethanol ), X( :Time ), ID( :BatchID ), B Splines, );
obj = dt << Functional Data Explorer( Y( :Temp ), X( :Time ), ID( :BatchID ), B Splines, );
rpt = Current Report();
obj << GCV;
```

**Code Explanation**:

1. Open table.
2. Launch Functional Data Explorer.
3. Set Y variable to Ethanol.
4. Set X variable to Time.
5. Set ID variable to BatchID.
6. Use B Splines method.
7. Launch Functional Data Explorer again.
8. Set Y variable to Temp.
9. Retrieve current report.
10. Select GCV option.



### Example 52
> **Summary**: Generates function summaries for a data table using B Splines and customizable number of FPCs, then extracts the journal from the report.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #BSplines, #CustomizableFunctionSummaries, #DataTableAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Y( :TAVG ),
	X( :Week of Year ),
	ID( :STATION ),
	B Splines( Customize Function Summaries( Number of FPCs( 7 ) ) )
);
rpt = obj << report;
jrn = (rpt[Outline Box( "Function Summaries" )][Table Box( 1 )] << get journal);
```

**Code Explanation**:

1. Open data table;
2. Launch Functional Data Explorer.
3. Set Y variable.
4. Set X variable.
5. Set ID variable.
6. Use B Splines method.
7. Customize function summaries.
8. Set number of FPCs.
9. Generate report.
10. Extract journal from report.



### Example 53
> **Summary**: Analyze and visualize a functional data explorer, generating a report with FPC 1 matrix and score plot.

<!-- Keywords: #FunctionalDataExplorer, #JMPScriptingLanguage, #BsplinesModel, #ReportGeneration, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Y( :Y ),
	X( :Silica ),
	ID( :Characteristic ),
	Plot Median( 1 ),
	B Splines( Select Model( Knots( 2 ) ) ), 
);
rpt = obj << report;
fpc1 = rpt[Number Col Box( "FPC 1" )] << get as matrix;
xVal = ((rpt[Outline Box( "Score Plot" )][Frame Box( 1 )]) << Find Seg( Marker Seg( 1 ) )) << Get X Values;
yVal = ((rpt[Outline Box( "Score Plot" )][Frame Box( 1 )]) << Find Seg( Marker Seg( 1 ) )) << Get Y Values;
```

**Code Explanation**:

1. Open table.
2. Launch Functional Data Explorer.
3. Set response variable.
4. Set predictor variable.
5. Set ID variable.
6. Plot median.
7. Use B-splines model.
8. Generate report.
9. Extract FPC 1 matrix.
10. Retrieve X values from score plot.



### Example 54
> **Summary**: Generates a report from a functional data explorer, specifying Y variables and ID variable for analysis.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #ReportGeneration, #DataAnalysis, #InteractiveVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y(
		:Name( "1980" ), :Name( "1984" ), :Name( "1988" ), :Name( "1992" ), :Name( "1996" ), :Name( "2000" ), :Name( "2004" ),
		:Name( "2008" ), :Name( "2012" )
	),
	ID( :State ), 
);
rpt = obj << report;
jrn = rpt[Scroll Box( 1 )][FrameBox( 1 )] << get journal;
```

**Code Explanation**:

1. Open table.
2. Launch Functional Data Explorer.
3. Set data format to row.
4. Specify Y variables.
5. Set ID variable.
6. Generate report.
7. Access first scroll box.
8. Access first frame box.
9. Get journal.



### Example 55
> **Summary**: Analyze and visualize data in a Functional Data Explorer, generating reports with mean, standard deviation, and median functions for selected variables.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #ReportGeneration, #DataVisualization, #StatisticalAnalysis -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
obj1 = dt1 << Functional Data Explorer(
	Data Format( Column ),
	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),
	X( :SILICA ),
	Plot Median( 1 )
);
rpt1 = obj1 << report;
x_Mean1 = (rpt1[Outline Box( "Mean Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get X Values;
y_Mean1 = (rpt1[Outline Box( "Mean Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get Y Values;
x_StdDev1 = (rpt1[Outline Box( "Standard Deviation Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get X Values;
y_StdDev1 = (rpt1[Outline Box( "Standard Deviation Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get Y Values;
x_Median1 = (rpt1[Outline Box( "Median Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get X Values;
y_Median1 = (rpt1[Outline Box( "Median Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get Y Values;
```

**Code Explanation**:

1. Open data table;
2. Launch Functional Data Explorer.
3. Set data format to column.
4. Define Y variables: ABRASION, MODULUS, ELONG, HARDNESS.
5. Set X variable: SILICA.
6. Plot median function.
7. Generate report object.
8. Extract mean function X values.
9. Extract mean function Y values.
10. Extract standard deviation function X values.
11. Extract standard deviation function Y values.
12. Extract median function X values.
13. Extract median function Y values.



### Example 56
> **Summary**: Analyze and visualize data in JMP's Functional Data Explorer, generating reports with mean, standard deviation, and median functions.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #ReportGeneration, #DataAnalysis, #Visualization -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
obj2 = dt2 << Functional Data Explorer( Y( :Y ), X( :Silica ), ID( :Characteristic ), Plot Median( 1 ) );
rpt2 = obj2 << report;
x_Mean2 = (rpt2[Outline Box( "Mean Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get X Values;
y_Mean2 = (rpt2[Outline Box( "Mean Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get Y Values;
x_StdDev2 = (rpt2[Outline Box( "Standard Deviation Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get X Values;
y_StdDev2 = (rpt2[Outline Box( "Standard Deviation Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get Y Values;
x_Median2 = (rpt2[Outline Box( "Median Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get X Values;
y_Median2 = (rpt2[Outline Box( "Median Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get Y Values;
```

**Code Explanation**:

1. Open data_table data
2. Launch Functional Data Explorer.
3. Set Y variable.
4. Set X variable.
5. Set ID variable.
6. Plot median function.
7. Retrieve report object.
8. Extract mean function X values.
9. Extract mean function Y values.
10. Extract standard deviation function X values.
11. Extract standard deviation function Y values.
12. Extract median function X values.
13. Extract median function Y values.



### Example 57
> **Summary**: Analyze ethanol data by opening a table, launching Functional Data Explorer, and applying Dynamic Time Warping with reference value 4.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #DynamicTimeWarping, #DataProcessing, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :Ethanol ), X( :Time ), ID( :BatchID ), Validation( :Validation ), );
lc = Words( Trim( Log Capture( obj << Data Processing( Dynamic Time Warping( Reference( 4 ) ) ) ) ), "\!N" );
```

**Code Explanation**:

1. Open table.
2. Launch Functional Data Explorer.
3. Set response variable.
4. Set time variable.
5. Set ID variable.
6. Set validation variable.
7. Access Data Processing.
8. Apply Dynamic Time Warping.
9. Set reference value.
10. Capture log output.



### Example 58
> **Summary**: Analyze and visualize data in a Functional Data Explorer, generating reports for mean, standard deviation, and median functions.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #DataVisualization, #StatisticalAnalysis, #ReportGeneration -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
obj1 = dt1 << Functional Data Explorer(
	Data Format( Column ),
	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),
	X( :SILICA ),
	Plot Median( 1 )
);
rpt1 = obj1 << report;
x_Mean1 = (rpt1[Outline Box( "Mean Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get X Values;
y_Mean1 = (rpt1[Outline Box( "Mean Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get Y Values;
x_StdDev1 = (rpt1[Outline Box( "Standard Deviation Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get X Values;
y_StdDev1 = (rpt1[Outline Box( "Standard Deviation Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get Y Values;
x_Median1 = (rpt1[Outline Box( "Median Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get X Values;
y_Median1 = (rpt1[Outline Box( "Median Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get Y Values;
dt2 = Open("data_table.jmp");
obj2 = dt2 << Functional Data Explorer( Y( :Y ), X( :Silica ), ID( :Characteristic ), Plot Median( 1 ) );
rpt2 = obj2 << report;
x_Mean2 = (rpt2[Outline Box( "Mean Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get X Values;
y_Mean2 = (rpt2[Outline Box( "Mean Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get Y Values;
x_StdDev2 = (rpt2[Outline Box( "Standard Deviation Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get X Values;
y_StdDev2 = (rpt2[Outline Box( "Standard Deviation Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get Y Values;
x_Median2 = (rpt2[Outline Box( "Median Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get X Values;
y_Median2 = (rpt2[Outline Box( "Median Function" )][Frame Box( 1 )] << Find Seg( Line Seg( 1 ) )) << Get Y Values;
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set data format to column.
4. Specify Y variables: ABRASION, MODULUS, ELONG, HARDNESS.
5. Set X variable: SILICA.
6. Plot median function.
7. Retrieve mean function report.
8. Extract x and y values for mean function.
9. Extract x and y values for standard deviation function.
10. Extract x and y values for median function.



### Example 59
> **Summary**: Analyze a data table using Functional Data Explorer and B Splines, capturing log output for further review.

<!-- Keywords: #JMPScripting, #FunctionalDataExplorer, #BSplines, #LogCapture, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :Y ), ID( :ID ), );
lc = Log Capture( obj << B Splines );
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set Y variable.
4. Set ID variable.
5. Perform B Splines analysis.
6. Capture log output.



### Example 60
> **Summary**: Launches Functional Data Explorer to analyze data table relationships, setting response and time variables, defining ID variable, and including control variables.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #DataTableAnalysis, #VariableDefinition, #ControlVariables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :Homogeneity Grade ), X( :T ), ID( :Formulation ), Z( :Solvent, :Active, :Water ), );
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set response variable.
4. Specify time variable.
5. Define ID variable.
6. Include control variables.



### Example 61
> **Summary**: Analyze functional data by launching the Functional Data Explorer, setting response and time variables, defining an ID variable, adding covariates, and choosing B Splines for modeling.

<!-- Keywords: #FunctionalDataExplorer, #BSplines, #JMPScriptingLanguage, #DataAnalysis, #Modeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	B Splines( Functional DOE Analysis )
);
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set response variable.
4. Define time variable.
5. Specify ID variable.
6. Add covariates.
7. Choose B Splines method.



### Example 62
> **Summary**: Creates a Functional Data Explorer with Direct Functional PCA and Local Data Filter for data analysis.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #DirectFunctionalPCA, #LocalDataFilter, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :TAVG ), X( :Week of Year ), ID( :STATION ), Direct Functional PCA );
obj << Local Data Filter;
```

**Code Explanation**:

1. Open table.
2. Create Functional Data Explorer.
3. Set Y variable.
4. Set X variable.
5. Set ID variable.
6. Perform Direct Functional PCA.
7. Add local data filter.



### Example 63
> **Summary**: Analyze functional data by performing Direct Functional PCA and configuring FPC Profiler settings, utilizing Functional Data Explorer in JMP.

<!-- Keywords: #FunctionalDataAnalysis, #DirectFunctionalPCA, #FPCProfiler, #JMPScriptingLanguage, #DataExploration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	Direct Functional PCA(
		Functional PCA(
			1,
			AICc( 0 ),
			BIC( 0 ),
			GCV( 0 ),
			FPC Profiler(
				1,
				Confidence Intervals( 1 ),
				Term Value(
					T( 45, Min( 10 ), Lock( 1 ), Show( 1 ) ),
					FPC 1( 0, Lock( 0 ), Show( 1 ) ),
					FPC 2( 0, Max( 1.95534262255575 ), Lock( 0 ), Show( 1 ) )
				)
			)
		),
		Functional DOE Analysis(
			FDOE Profiler(
				1,
				Confidence Intervals( 1 ),
				Profile at Boundary( "Stop at Boundaries" ),
				Term Value(
					T( 45, Min( 10 ), Lock( 1 ), Show( 1 ) ),
					Solvent( 0.5375, Lock( 0 ), Show( 1 ) ),
					Active( 0.25, Lock( 0 ), Show( 1 ) ),
					Water( 0.2125, Lock( 0 ), Show( 1 ) )
				)
			),
			Generalized Regression FPC Model(
				FPC Number( 1 ),
				Estimation Method( Best Subset ),
				Validation Method( AICc ),
				Enforce Heredity,
				Force( [1 1 1 0 0 0 0 0 0 0] ),
				Model Summary( 0 ),
				Parameter Estimates for Original Predictors( 0 ),
				Effect Tests( 0 )
			),
			Generalized Regression FPC Model(
				FPC Number( 2 ),
				Estimation Method( Best Subset ),
				Validation Method( AICc ),
				Enforce Heredity,
				Force( [1 1 1 0 0 0 0 0 0 0] ),
				Model Summary( 0 ),
				Parameter Estimates for Original Predictors( 0 ),
				Effect Tests( 0 )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set response variable.
4. Set time variable.
5. Set ID variable.
6. Set covariate variables.
7. Perform Direct Functional PCA.
8. Configure Functional PCA settings.
9. Enable AICc, BIC, GCV.
10. Configure FPC Profiler.



### Example 64
> **Summary**: Analyze functional data by opening a data table, launching Functional Data Explorer, and performing Direct Functional PCA.

<!-- Keywords: #FunctionalDataExplorer, #DirectFunctionalPCA, #JMPScriptingLanguage, #DataAnalysisAutomation, #TimeSeriesAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer(
	Y( :kHours ),
	ID( :System ID ),
	Z( :Unit, :Cost, :orig time, :event time, :end time ),
	Direct Functional PCA
);
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Specify response variable.
4. Define ID variable.
5. Set covariates.
6. Perform Direct Functional PCA.



### Example 65
> **Summary**: Analyze a functional data explorer with Fourier basis, generating a report and extracting fit statistics.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #FourierBasis, #ReportGeneration, #FitStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), Fourier Basis );
rpt = obj << report;
fStat1 = rpt[Outline Box( "Fit Statistics" )][Number Col Box( 1 )] << get as matrix;
rpt[Outline Box( "Model Controls" )][Number Edit Box( 2 )] << Set( 50 );
rpt[Outline Box( "Model Controls" )][Button Box( 4 )] << Click();
fStat2 = rpt[Outline Box( "Fit Statistics" )][Number Col Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open table.
2. Launch Functional Data Explorer.
3. Specify response variable.
4. Specify predictor variable.
5. Specify ID variable.
6. Use Fourier basis.
7. Generate report.
8. Extract first fit statistics.
9. Set basis function count.
10. Recalculate model.
11. Extract second fit statistics.



### Example 66
> **Summary**: Explores a dataset using Functional Data Explorer, specifying response and predictor variables, identification by BatchID, and applying P Splines model.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #PSplines, #DataExploration, #BatchAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Functional Data Explorer( Y( :Temp ), X( :Time ), ID( :BatchID ), P Splines );
```

**Code Explanation**:

1. Open data table;
2. Assign dataset to variable `dt`.
3. Launch Functional Data Explorer.
4. Set response variable `Temp`.
5. Set predictor variable `Time`.
6. Use `BatchID` for identification.
7. Apply P Splines model.



### Example 67
> **Summary**: Configures a stacked Functional Data Explorer in JMP, defining Y and Z variables for analysis and capturing log output.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #StackedFormat, #LogCapture, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fde = dt << Functional Data Explorer(
	Data Format( Stacked ),
	Y( :Birth Year, :Age in Years ),
	Z( :Toothpaste Cost, :Floss Cost ),
	B Splines
);
Log Capture( dt << Delete Columns( {"Birth Year", "Age in Years", "Toothpaste Cost", "Floss Cost"} ) );
```

**Code Explanation**:

1. Open data table;
2. Launch Functional Data Explorer.
3. Set data format to stacked.
4. Define Y variables: Birth Year, Age in Years.
5. Define Z variables: Toothpaste Cost, Floss Cost.
6. Use B Splines method.
7. Capture log output.
8. Delete specified columns from dt.



## Functional Data Explorer using Fit Group
### Example 1
> **Summary**: Fits functional data explorer models to a data table, and saves model summaries for all Y variables.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #ModelSummaries, #ScriptableObjects, #ReportObject -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Group(
	Functional Data Explorer( Y( :Name( "1980" ) ), ID( :State ), B Splines ),
	Functional Data Explorer( Y( :Name( "1984" ) ), ID( :State ), B Splines )
);
Try(
	scptObj = Report( obj )[Outline Box( 2 )] << get scriptable object;
	scptObj << Save Model Summaries for All Y;
);
```

**Code Explanation**:

1. Open data table.
2. Fit functional data explorer models.
3. Try to access report object.
4. Get scriptable object from outline box.
5. Save model summaries for all Y.



### Example 2
> **Summary**: Creates and creates a report for functional data explorations for TMIN, TMAX, and TAVG variables using Fit Group

<!-- Keywords: #FitGroup, #FunctionalDataExplorer, #JSLScriptingLanguage, #DataAnalysis, #Reporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Group(
	Functional Data Explorer( Y( :TMIN ), X( :Week of Year ), ID( :NAME ), B Splines ),
	Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), B Splines ),
	Functional Data Explorer( Y( :TAVG ), X( :Week of Year ), ID( :NAME ), B Splines )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create Fit Group object.
3. Add TMIN analysis.
4. Add TMAX analysis.
5. Add TAVG analysis.
6. Generate report.



### Example 3
> **Summary**: Creates a fit group object with three functional data explorers for TMIN, TMAX, and TAVG responses, using B Splines method and Week of Year predictor.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #BSplines, #FitGroupObject, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Group(
	Functional Data Explorer( Y( :TMIN ), X( :Week of Year ), ID( :NAME ), B Splines ),
	Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), B Splines ),
	Functional Data Explorer( Y( :TAVG ), X( :Week of Year ), ID( :NAME ), B Splines )
);
```

**Code Explanation**:

1. Open data table.
2. Create fit group object.
3. Add TMIN analysis.
4. Specify TMIN response.
5. Define Week of Year predictor.
6. Set NAME as identifier.
7. Use B Splines method.
8. Add TMAX analysis.
9. Specify TMAX response.
10. Add TAVG analysis.



### Example 4
> **Summary**: Analyze multiple variables over time, using Functional Data Explorer to fit group models with P Splines for each batch ID.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #PSplines, #BatchIDAnalysis, #TimeSeriesModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Group(
	Functional Data Explorer( Y( :Temp ), X( :Time ), ID( :BatchID ), P Splines ),
	Functional Data Explorer( Y( :Molasses Feed ), X( :Time ), ID( :BatchID ), P Splines ),
	Functional Data Explorer( Y( :NH3 Feed ), X( :Time ), ID( :BatchID ), P Splines ),
	Functional Data Explorer( Y( :Tank Level ), X( :Time ), ID( :BatchID ), P Splines )
);
```

**Code Explanation**:

1. Open data table.
2. Fit group of models.
3. Use Functional Data Explorer.
4. Analyze Temp over Time.
5. Identify by BatchID.
6. Apply P Splines method.
7. Analyze Molasses Feed over Time.
8. Identify by BatchID.
9. Apply P Splines method.
10. Analyze NH3 Feed over Time.
11. Identify by BatchID.
12. Apply P Splines method.
13. Analyze Tank Level over Time.
14. Identify by BatchID.
15. Apply P Splines method.



## Functional Data Explorer using Log Capture
### Example 1
> **Summary**: Analyze a data table by launching Functional Data Explorer, setting the response variable to weight, and filtering height between 68.5 and 70 using a local data filter.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #LocalDataFilter, #PSplines, #LogCapture -->

**Code**:
```jsl
Open("data_table.jmp");
Log Capture(
	obj = dt << Functional Data Explorer(
		Y( :weight ),
		P Splines,
		Local Data Filter( Add Filter( columns( :height ), Where( :height >= 68.5 & :height <= 70 ) ) )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Start log capture.
3. Launch Functional Data Explorer.
4. Set response variable to weight.
5. Use P Splines method.
6. Add local data filter.
7. Filter height between 68.5 and 70.



### Example 2
> **Summary**: Runs the exploration and processing of a data table, utilizing Functional Data Explorer to set response variables, apply data processing techniques, and capture log output.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #DataProcessing, #LogCapture, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	obj = dt << Functional Data Explorer(
		Y( :"#Oversize"n ),
		X( :Time ),
		ID( :Batch ),
		Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n, :"T(¬∫C)"n ),
		Validation( :Run Type ),
		Data Processing( Log, "Savitzky-Golay Filter"n )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set response variable.
4. Set time variable.
5. Set ID variable.
6. Add Z variables.
7. Specify validation method.
8. Apply data processing techniques.
9. Capture log output.
10. Store result object.



### Example 3
> **Summary**: Runs the opening and processing of a data table, utilizing Functional Data Explorer to define Y and Z variables, apply B Splines, and save the results.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #Bsplines, #DataProcessing, #JSL -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	fde = dt << Functional Data Explorer(
		Data Format( Row ),
		Y( :Birth Year, :Age in Years ),
		Z( :Toothpaste Cost, :Floss Cost ),
		B Splines
	)
);
dt << Delete Columns( {"Birth Year", "Age in Years", "Toothpaste Cost", "Floss Cost"} );
newdt = fde << Save Data;
fde << close window;
```

**Code Explanation**:

1. Open data table.
2. Log capture starts.
3. Launch Functional Data Explorer.
4. Set data format to row.
5. Define Y variables.
6. Define Z variables.
7. Use B Splines method.
8. Log capture ends.
9. Delete specified columns.
10. Save data from FDE.
11. Close FDE window.



## Functional Data Explorer using Words
### Example 1
> **Summary**: Creates and analyzes a functional data explorer with B-spline modeling, utilizing a random seed for reproducibility.

<!-- Keywords: #FunctionalDataExplorer, #Bsplines, #RandomSeed, #DataAnalysis, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
lc = Words(
	Log Capture(
		obj = dt << Functional Data Explorer(
			Y( :Homogeneity Grade ),
			X( :T ),
			ID( :Formulation ),
			Z( :Solvent, :Active, :Water ),
			Data Processing( Reduce( Bin( 10 ) ), Reduce( Thin( 2 ) ), Reduce( Grid( 500 ) ) )
		)
	),
	"\!N"
);
Close( dt, No Save );
nrow = 30;
myseed = 123456789;
xx = (0 :: nrow)`;
Random Reset( myseed );
yy = J( nrow + 1, 1, Random Normal() );
dt = As Table( xx || yy );
Column( dt, 1 ) << Set Name( "x" );
Column( dt, 2 ) << Set Name( "y" );
obj = dt << Functional Data Explorer( Y( :y ), X( :x ), B Splines( Degree( 0 ), Select Model( Knots( 1 ) ) ) );
```

**Code Explanation**:

1. Open data table.
2. Launch Functional Data Explorer.
3. Set response variable.
4. Set time variable.
5. Set ID variable.
6. Set factor variables.
7. Apply data processing.
8. Close data table without saving.
9. Define number of rows.
10. Set random seed.
11. Create x values.
12. Generate y values.
13. Create new data table.
14. Rename columns.
15. Launch Functional Data Explorer again.
16. Set response variable.
17. Set time variable.
18. Fit B-spline model.



### Example 2
> **Summary**: Explores and analyzes a data table by launching a Functional Data Explorer, applying data reduction methods, and capturing log information.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #DataReduction, #LogCapture, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
lc = Words(
	Log Capture(
		obj = dt << Functional Data Explorer(
			Y( :Homogeneity Grade ),
			X( :T ),
			ID( :Formulation ),
			Z( :Solvent, :Active, :Water ),
			Data Processing( Reduce( Bin( 10 ) ), Reduce( Thin( 2 ) ), Reduce( Grid( 500 ) ) )
		)
	),
	"\!N"
);
```

**Code Explanation**:

1. Open data table.
2. Log capture starts.
3. Launch Functional Data Explorer.
4. Set response variable.
5. Define time variable.
6. Specify ID variable.
7. Identify Z variables.
8. Apply data reduction methods.
9. Log capture ends.
10. Extract log content.



## Functional Data Explorer using Select Rows
> **Summary**: Selects and processes data for Functional Data Explorer, utilizing random indices to filter by BatchID.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #DataProcessing, #LocalDataFilter, #BatchIDFiltering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
r = dt << Select Rows( 2501 :: 10000 );
r << Hide and Exclude;
obj = dt << Functional Data Explorer( Y( :Air ), X( :Time ), ID( :BatchID ) );
idIndex = Random Index( 25, 10 );
For( i = 1, i <= N Rows( idIndex ), i++,
	(dt << Select Where( :BatchID == idIndex[i] ));
	obj << Data Processing( Remove Selected );
);
obj << Local Data Filter;
```

**Code Explanation**:

1. Open data table.
2. Select rows 2501 to 10000.
3. Hide and exclude selected rows.
4. Launch Functional Data Explorer.
5. Set response variable to Air.
6. Set predictor variable to Time.
7. Set ID variable to BatchID.
8. Generate random indices for BatchID.
9. Loop through each random index.
10. Select rows with matching BatchID.
11. Remove selected rows from FDE.
12. Add local data filter to FDE.



## Functional Data Explorer using Select Where
> **Summary**: Analyze data for a specific system ID, generating a report with fit statistics using Functional Data Explorer and P Splines.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #PSplines, #DataAnalysis, #FitStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :Name( "System ID" ) == "Grampus4" );
dt << Exclude;
obj = dt << Functional Data Explorer( Y( :kHours ), X( :event time ), ID( :System ID ), P Splines );
rpt = obj << report;
stats = rpt[Outline Box( "Fit Statistics" )][Number Col Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Select specific rows.
3. Exclude selected rows.
4. Launch Functional Data Explorer.
5. Specify Y variable.
6. Specify X variable.
7. Specify ID variable.
8. Use P Splines method.
9. Generate report object.
10. Extract fit statistics.



## Functional Data Explorer using New Column
> **Summary**: Fits a standard least squares model with multiple effects and generating profiler plots using JMP's Functional Data Explorer.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #LeastSquaresModel, #ProfilerPlot, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Week minus 1", Formula( :Name( "Week of Year" ) - 1 ) );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week minus 1 ), ID( :NAME ), Data Processing( Center ), Fourier Basis, );
rpt = obj << report;
ranCoeffFun = rpt[Outline Box( "Random Coefficients by Function" )][Table Box( 1 )] << get as matrix;
dt1 = Data Table("data_table") << Split(
	Split By( :Week minus 1 ),
	Split( :TMAX ),
	Group( :NAME ),
	Remaining Columns( Drop All ),
	Sort by Column Property
);
obj1 = dt1 << Functional Data Explorer( Data Format( Row ), Y( 2 :: 54 ), ID( :NAME ), Data Processing( Center ), Fourier Basis );
rpt1 = obj1 << report;
ranCoeffFun1 = rpt1[Outline Box( "Random Coefficients by Function" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Create "Week minus 1" column.
3. Launch Functional Data Explorer.
4. Generate report.
5. Extract random coefficients matrix.
6. Split data table.
7. Launch Functional Data Explorer again.
8. Generate another report.
9. Extract second random coefficients matrix.



## Functional Data Explorer using If
### Example 1
> **Summary**: Analyze data in JMP Pro by launching Functional Data Explorer to visualize and model relationships between variables.

<!-- Keywords: #JMPPro, #FunctionalDataExplorer, #BSplines, #PSplines, #FourierBasis -->

**Code**:
```jsl
If( JMP Product Name() == "Pro", 
	
	dt = Open("data_table.jmp");
	obj = dt << Functional Data Explorer(
		Y( :Homogeneity Grade ),
		X( :T ),
		ID( :Formulation ),
		Z( :Solvent, :Active, :Water ),
		B Splines,
		P Splines,
		Fourier Basis
	);
	Close( dt, No Save );
);
```

**Code Explanation**:

1. Check if JMP Product Name is "Pro".
2. Open data table;
3. Launch Functional Data Explorer.
4. Set response variable.
5. Define time variable.
6. Specify ID variable.
7. Assign covariates.
8. Select B Splines.
9. Select P Splines.
10. Choose Fourier Basis.
11. Close dataset without saving.



### Example 2
> **Summary**: Analyzes and creates reports for functional data explorer summaries for a given data table in JMP Pro, utilizing B Splines with custom summaries.

<!-- Keywords: #JMPPro, #FunctionalDataExplorer, #Bsplines, #CustomSummaries, #Scripting -->

**Code**:
```jsl
If( JMP Product Name() == "Pro", 
		
	
	dt = Open("data_table.jmp");
	obj = dt << Functional Data Explorer(
		Y( :Ethanol ),
		X( :Time ),
		ID( :BatchID ),
		Validation( :Validation ),
		B Splines(
			Customize Function Summaries( Mean( 0 ), Std Dev( 0 ), Integrated Difference( 0 ), Median( 0 ), Minimum( 0 ), Maximum( 0 ) )
		)
	);
	rpt = obj << report;
	scptObj = rpt[Outline Box( "Function Summaries" )] << get scriptable object;
	scptObj << Save Summaries;
	dt1 = Current Data Table();
	Close( dt1, No Save );
	Close( dt, No Save );
		
	
);
```

**Code Explanation**:

1. Check if JMP version is Pro.
2. Open data table.
3. Launch Functional Data Explorer.
4. Set response variable to Ethanol.
5. Set time variable to Time.
6. Set ID variable to BatchID.
7. Set validation variable to Validation.
8. Configure B Splines with custom summaries.
9. Retrieve report from Functional Data Explorer.
10. Access Function Summaries outline box.
11. Save summaries from scriptable object.
12. Get current data table.
13. Close current data table without saving.
14. Close original data table without saving.



### Example 3
> **Summary**: Analyze and visualize data using Functional Data Explorer, generating reports with standardized and aligned ranges.

<!-- Keywords: #JMPScriptingLanguage, #FunctionalDataExplorer, #DataVisualization, #Standardization, #Alignment -->

**Code**:
```jsl
If( JMP Product Name() == "Pro",
	dt = Open("data_table.jmp");
	obj = dt << Functional Data Explorer(
		Y( :Flow ),
		X( :Order ),
		ID( :Wafer Id ),
		Z( :Condition ),
		Validation( :Validation ),
		Data Processing( Standardize, Align Range 0 to 1 ), 
	);
	rpt = obj << report;
	Close( dt, No Save );
	dt = Open("data_table.jmp");
	obj = dt << Run Script( "Functional Data Explorer" );
	obj << "B-Splines"n;
	objProfiler = Profiler[1];
	objProfiler << Data Points;
	rpt = obj << report;
 
	Close( dt, No Save );
);
```

**Code Explanation**:

1. Check if JMP Product Name is Pro.
2. Open data table;
3. Launch Functional Data Explorer.
4. Set Y variable to Flow.
5. Set X variable to Order.
6. Set ID variable to Wafer Id.
7. Set Z variable to Condition.
8. Set Validation variable.
9. Apply Standardize and Align Range.
10. Generate report.
11. Close data_table.jmp without saving.
12. Open data table;
13. Run "Functional Data Explorer" script.
14. Select B-Splines option.
15. Enable Data Points in Profiler.
16. Generate report.
17. Close data_table.jmp without saving.



