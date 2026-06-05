# Contour Profiler

### Example 1
> **Summary**: Uses the Contour Profiler to visualize the relationship between Reaction Temperature and Reaction Time, with Yield as the response variable. The plot displays high and low stock prices over time with major grid lines on the x-axis and a horizontally oriented legend.

<!-- Keywords: #ContourProfiler, #GraphBuilder, #JSLScriptingLanguage, #DataVisualization, #StockPrices -->

**Code**:
```jsl
// Contour Profiler
// Open data table
dt = Open("data_table.jmp");
// Contour Profiler
Contour Profiler(
	Y( :Yield ),
	Contour Profiler(
		1,
		Term Value(
			Reaction Temperature(
				530.05
			),
			Reaction Time(
				0.1995,
				Min( 0.101 )
			)
		),
		Contour Value(
			Yield(
				0.596698113207547,
				Lo Limit(
					0.596698113207547
				),
				Min( 0.425 ),
				Max( 0.625 )
			)
		),
		Horizontal Factor(
			Reaction Temperature
		),
		Vertical Factor( Reaction Time )
	),
	Expand
);
```

**Code Explanation**:

1. Open data table.
2. Launch Contour Profiler.
3. Set response variable.
4. Configure Contour Profiler options.
5. Set term values.
6. Define contour value.
7. Specify horizontal factor.
8. Specify vertical factor.
9. Expand plot.



### Example 2
> **Summary**: Creates a contour profiler object using response columns from a data table, specifying reaction temperature and time factors.

<!-- Keywords: #ContourProfiler, #JSLScriptingLanguage, #DataAnalysis, #GraphBuilder, #JMP -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Contour Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create contour profiler object.
4. Specify response columns.



### Example 3
> **Summary**: Configures a Contour Profiler to visualize the relationship between Reaction Temperature and Reaction Time, with Yield as the response variable.

<!-- Keywords: #ContourProfiler, #GraphBuilder, #JMPScriptingLanguage, #DataVisualization, #ProcessOptimization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Contour Profiler(
	Y( :Yield ),
	Contour Profiler(
		1,
		Term Value( Reaction Temperature( 530.05 ), Reaction Time( 0.1995, Min( 0.101 ) ) ),
		Contour Value( Yield( 0.596698113207547, Lo Limit( 0.596698113207547 ), Min( 0.425 ), Max( 0.625 ) ) ),
		Horizontal Factor( Reaction Temperature ),
		Vertical Factor( Reaction Time )
	),
	Expand
);
```

**Code Explanation**:

1. Open data table;
2. Create Contour Profiler object.
3. Set response variable to Yield.
4. Configure first contour profiler settings.
5. Set Reaction Temperature value to 530.05.
6. Set Reaction Time value to 0.1995.
7. Set Yield contour value to 0.596698113207547.
8. Define horizontal factor as Reaction Temperature.
9. Define vertical factor as Reaction Time.
10. Expand the contour profiler view.



### Example 4
> **Summary**: Configures a Contour Profiler to visualize the relationship between ABRASION, MODULUS, ELONG, and HARDNESS in a data table, with customizable contour values, grid density, and factor assignments.

<!-- Keywords: #ContourProfiler, #JMPScriptingLanguage, #DataVisualization, #CustomizationOptions, #GraphicalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Contour Profiler(
		1,
		Term Value( SILICA( 1.2, Lock( 0 ), Show( 1 ) ), SILANE( 50, Lock( 0 ), Show( 1 ) ), SULFUR( 2.3, Lock( 0 ), Show( 1 ) ) ),
		Contour Value(
			Pred Formula ABRASION( 140.69, Min( 90 ), Max( 200 ) ),
			Pred Formula MODULUS( 1375, Min( 500 ), Max( 2250 ) ),
			Pred Formula ELONG( 425, Min( 200 ), Max( 650 ) ),
			Pred Formula HARDNESS( 70, Min( 60 ), Max( 80 ) )
		),
		Grid Density( "40 x 40" ),
		Horizontal Factor( :SILICA ),
		Vertical Factor( :SILANE )
	),
	SendToReport(
		Dispatch( {"Contour Profiler"}, "1", ScaleBox, {Format( "Custom", Formula( Substr( Char( value ), 1, 1 ) ), 9 )} ),
		Dispatch( {"Contour Profiler"}, "2", ScaleBox, {Format( "Custom", Formula( Substr( Char( value ), 2, 1 ) ), 9 )} )
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Create Contour Profiler.
3. Set Y variables.
4. Configure Contour Profiler settings.
5. Set term values.
6. Define contour values.
7. Set grid density.
8. Assign horizontal factor.
9. Assign vertical factor.
10. Customize report scales.



### Example 5
> **Summary**: Creates a contour profiler report to analyze relationships between four variables: ABRASION, MODULUS, ELONG, and HARDNESS, with customizable term values and contour ranges.

<!-- Keywords: #ContourProfiler, #ReportGeneration, #DataAnalysis, #JMPScriptingLanguage, #GraphicalReporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj3 = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Term Value( SILICA( 1.2, Lock( 0 ), Show( 1 ) ), SILANE( 50, Lock( 0 ), Show( 1 ) ), SULFUR( 2.3, Lock( 0 ), Show( 1 ) ) ),
	Contour Value(
		ABRASION( 140, Min( 80 ), Max( 200 ) ),
		MODULUS( 1375, Min( 250 ), Max( 2500 ) ),
		ELONG( 425, Min( 200 ), Max( 650 ) ),
		HARDNESS( 70, Min( 60 ), Max( 80 ) )
	),
	Grid Density( "50 x 50" ),
	Surface Plot( 1 )
);
rpt3 = obj3 << report;
```

**Code Explanation**:

1. Open data table;
2. Launch Contour Profiler.
3. Set response variables.
4. Define term values.
5. Set contour values.
6. Configure grid density.
7. Enable surface plot.
8. Generate report object.



### Example 6
> **Summary**: Creates a Contour Profiler report to visualize and analyze the relationships between ABRASION, MODULUS, ELONG, and HARDNESS variables in a data table.

<!-- Keywords: #ContourProfiler, #DataVisualization, #JMPScriptingLanguage, #ReportGeneration, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj4 = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Term Value( SILICA( 1.2, Lock( 0 ), Show( 1 ) ), SILANE( 50, Lock( 0 ), Show( 1 ) ), SULFUR( 2.3, Lock( 0 ), Show( 1 ) ) ),
	Contour Value(
		ABRASION( 140, Min( 80 ), Max( 200 ) ),
		MODULUS( 1375, Min( 250 ), Max( 2500 ) ),
		ELONG( 425, Min( 200 ), Max( 650 ) ),
		HARDNESS( 70, Min( 60 ), Max( 80 ) )
	),
	Grid Density( "60 x 60" ),
	Surface Plot( 1 )
);
rpt4 = obj4 << report;
```

**Code Explanation**:

1. Open data table;
2. Launch Contour Profiler.
3. Set Y variables: ABRASION, MODULUS, ELONG, HARDNESS.
4. Define term values for SILICA, SILANE, SULFUR.
5. Set contour values for ABRASION, MODULUS, ELONG, HARDNESS.
6. Set grid density to 60x60.
7. Enable surface plot.
8. Generate profiler report.



### Example 7
> **Summary**: Creates two Contour Profilers to visualize and analyze ABRASION data, with customizable settings for Term Values, Contour Values, Grid Density, Horizontal Factor, and Vertical Factor.

<!-- Keywords: #ContourProfiler, #JMPScriptingLanguage, #DataVisualization, #ABRASIONAnalysis, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Contour Profiler(
	Y( :Pred Formula ABRASION ),
	Contour Profiler(
		1,
		Contour Label( 0 ),
		Term Value( SILICA( 1.25, Lock( 0 ), Show( 1 ) ), SILANE( 50, Lock( 0 ), Show( 1 ) ), SULFUR( 2.25, Lock( 0 ), Show( 1 ) ) ),
		Contour Value( Pred Formula ABRASION( 145, Min( 90 ), Max( 200 ) ) ),
		Grid Density( "40 x 40" ),
		Horizontal Factor( :SILICA ),
		Vertical Factor( :SILANE )
	)
);
rpt1 = obj1 << report;
jrn1 = rpt1[Outline Box( "Contour Profiler" )][Frame Box( 1 )] << get journal;
obj2 = dt << Contour Profiler(
	Y( :Pred Formula ABRASION ),
	Contour Profiler(
		1,
		Term Value( SILICA( 1.25, Lock( 0 ), Show( 1 ) ), SILANE( 50, Lock( 0 ), Show( 1 ) ), SULFUR( 2.25, Lock( 0 ), Show( 1 ) ) ),
		Contour Value( Pred Formula ABRASION( 145, Min( 90 ), Max( 200 ) ) ),
		Grid Density( "40 x 40" ),
		Horizontal Factor( :SILICA ),
		Vertical Factor( :SILANE )
	)
);
obj2 << Contour Label( 0 );
rpt2 = obj2 << report;
jrn2 = rpt2[Outline Box( "Contour Profiler" )][Frame Box( 1 )] << get journal;
```

**Code Explanation**:

1. Open data table;
2. Create first Contour Profiler.
3. Set Y to Pred Formula ABRASION.
4. Configure Contour Profiler settings.
5. Set Term Values for SILICA, SILANE, SULFUR.
6. Define Contour Values for ABRASION.
7. Set Grid Density to 40x40.
8. Set Horizontal Factor to SILICA.
9. Set Vertical Factor to SILANE.
10. Get report and journal for first profiler.
11. Create second Contour Profiler.
12. Set Y to Pred Formula ABRASION.
13. Configure Contour Profiler settings.
14. Set Term Values for SILICA, SILANE, SULFUR.
15. Define Contour Values for ABRASION.
16. Set Grid Density to 40x40.
17. Set Horizontal Factor to SILICA.
18. Set Vertical Factor to SILANE.
19. Disable Contour Labels.
20. Get report and journal for second profiler.



### Example 8
> **Summary**: Creates a Contour Profiler report with multiple prediction formulas, generating a surface plot and retrieving its status.

<!-- Keywords: #ContourProfiler, #JMPScriptingLanguage, #DataVisualization, #PredictiveModeling, #SurfacePlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Contour Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ), );
rpt = obj << report;
surfacePlotStatus1 = rpt[Outline Box( "Contour Profiler" )][If Box( 3 )] << get;
obj << Surface Plot( 1 );
surfacePlotStatus2 = rpt[Outline Box( "Contour Profiler" )][If Box( 3 )] << get;
```

**Code Explanation**:

1. Open data table;
2. Launch Contour Profiler.
3. Select multiple prediction formulas.
4. Generate Contour Profiler report.
5. Retrieve initial surface plot status.
6. Switch to Surface Plot.
7. Retrieve updated surface plot status.



### Example 9
> **Summary**: Runs the Contour Profiler report generation by updating contour values based on current values, utilizing JMP's Contour Profiler and Graph Builder features.

<!-- Keywords: #ContourProfiler, #GraphBuilder, #JMPScriptingLanguage, #DataAnalysis, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contour Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
rpt = obj << report;
Contour value = rpt[Outline Box( "Contour Profiler" )][Number Col Edit Box( 2 )] << get as matrix;
Current value = rpt[Outline Box( "Contour Profiler" )][Number Col Box( 1 )] << get as matrix;
obj << Set Contours to Current;
rpt1 = obj << report;
Contour value1 = rpt1[Outline Box( "Contour Profiler" )][Number Col Edit Box( 2 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Create Contour Profiler.
3. Retrieve Contour Profiler report.
4. Extract initial contour value.
5. Extract initial current value.
6. Set contours to current values.
7. Generate updated report.
8. Extract updated contour value.



### Example 10
> **Summary**: Runs the Contour Profiler report generation by defining relative epsilon, opening a data table, creating a contour profiler object, and updating the contours to current values.

<!-- Keywords: #ContourProfiler, #DataTable, #JSLScriptingLanguage, #ReportGeneration, #RelativeEpsilon -->

**Code**:
```jsl
ut relative epsilon = 1e-10;
dt = Open("data_table.jmp");
obj = Contour Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
rpt = obj << report;
Contour value = rpt[Outline Box( "Contour Profiler" )][Number Col Edit Box( 2 )] << get as matrix;
Current value = rpt[Outline Box( "Contour Profiler" )][Number Col Box( 1 )] << get as matrix;
obj << Set Contours to Current;
rpt1 = obj << report;
Contour value1 = rpt1[Outline Box( "Contour Profiler" )][Number Col Edit Box( 2 )] << get as matrix;
```

**Code Explanation**:

1. Define relative epsilon.
2. Open data table;
3. Create Contour Profiler.
4. Retrieve Contour Profiler report.
5. Extract Contour value matrix.
6. Extract Current value matrix.
7. Set contours to current.
8. Update Contour Profiler report.
9. Extract updated Contour value matrix.



## Contour Profiler using Nonlinear
> **Summary**: Fits a nominal logistic regression model with multiple predictors using a nonlinear model, and configures report displays for parameter profiler and contour profiler.

<!-- Keywords: #NominalLogisticRegression, #NonlinearModel, #ParameterProfiler, #ContourProfiler, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nl = Nonlinear(
	X( :Model Y ),
	Loss( :Loss ),
	Second Deriv Method( 1 ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish,
	Plot( 0 ),
	Parameter Profiler(
		1,
		Confidence Intervals( 1 ),
		Term Value( b0( -5.51145105170802, Lock( 0 ), Show( 1 ) ), b1( 0.034755347763194, Lock( 0 ), Show( 1 ) ) )
	),
	Parameter Contour Profiler(
		1,
		Term Value( b0( -5.51145105170802, Lock( 0 ), Show( 1 ) ), b1( 0.034755347763194, Lock( 0 ), Show( 1 ) ) ),
		Contour Value( Loss( 15, Min( -5 ), Max( 35 ) ) ),
		Grid Density( "40 x 40" ),
		Horizontal Factor( :b0 ),
		Vertical Factor( :b1 )
	),
	SendToReport(
		Dispatch( {}, "Correlation of Estimates", OutlineBox, {Close( 0 )} ),
		Dispatch( {"Profiler-Loss"}, "10000", ScaleBox, {Format( "Custom", Formula( Reverse( Char( value ) ) ), 9 )} ),
		Dispatch( {"Profiler-Loss"}, "2", ScaleBox, {Format( "Custom", Formula( Reverse( Reverse( Char( value ) ) ) ), 9 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define nonlinear model.
3. Set response variable.
4. Set loss function.
5. Choose second derivative method.
6. Specify loss type.
7. Use Newton method.
8. Finish model setup.
9. Disable plot display.
10. Configure parameter profiler.
11. Configure parameter contour profiler.
12. Customize report display.



## Profiler 
### Example 1
> **Summary**: Runs a prediction profiler analysis to visualize the relationship between silica, silane, and sulfur on abrasion, modulus, elongation, and hardness responses.

<!-- Keywords: #JMPScriptingLanguage, #PredictionProfiler, #ContourProfiler, #NoiseFactors, #ResponseVariables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Profiler(
	Noise Factors( :SILICA, :SILANE, :SULFUR ),
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Profiler(
		1,
		Term Value( SILICA( 1.25, Lock( 0 ), Show( 1 ) ), SILANE( 50, Lock( 0 ), Show( 1 ) ), SULFUR( 2.25, Lock( 0 ), Show( 1 ) ) )
	),
	Contour Profiler(
		1,
		Term Value( SILICA( 1.25, Lock( 0 ), Show( 1 ) ), SILANE( 50, Lock( 0 ), Show( 1 ) ), SULFUR( 2.25, Lock( 0 ), Show( 1 ) ) ),
		Contour Value(
			Pred Formula ABRASION( 145, Min( 90 ), Max( 200 ) ),
			Name( "‚àÇPred Formula ABRASION/‚àÇSILICA" )(0, Min( -200 ), Max( 200 )),
			Name( "‚àÇPred Formula ABRASION/‚àÇSILANE" )(0, Min( -10 ), Max( 10 )),
			Name( "‚àÇPred Formula ABRASION/‚àÇSULFUR" )(0, Min( -200 ), Max( 200 )),
			Pred Formula MODULUS( 1375, Min( 500 ), Max( 2250 ) ),
			Name( "‚àÇPred Formula MODULUS/‚àÇSILICA" )(0, Min( -4000 ), Max( 4000 )),
			Name( "‚àÇPred Formula MODULUS/‚àÇSILANE" )(0, Min( -200 ), Max( 200 )),
			Name( "‚àÇPred Formula MODULUS/‚àÇSULFUR" )(0, Min( -4000 ), Max( 4000 )),
			Pred Formula ELONG( 425, Min( 200 ), Max( 650 ) ),
			Name( "‚àÇPred Formula ELONG/‚àÇSILICA" )(0, Min( -1000 ), Max( 1000 )),
			Name( "‚àÇPred Formula ELONG/‚àÇSILANE" )(0, Min( -40 ), Max( 40 )),
			Name( "‚àÇPred Formula ELONG/‚àÇSULFUR" )(0, Min( -1000 ), Max( 1000 )),
			Pred Formula HARDNESS( 70, Min( 60 ), Max( 80 ) ),
			Name( "‚àÇPred Formula HARDNESS/‚àÇSILICA" )(0, Min( -40 ), Max( 40 )),
			Name( "‚àÇPred Formula HARDNESS/‚àÇSILANE" )(0, Min( -2 ), Max( 2 )),
			Name( "‚àÇPred Formula HARDNESS/‚àÇSULFUR" )(0, Min( -40 ), Max( 40 ))
		),
		Grid Density( "40 x 40" ),
		Horizontal Factor( :SILICA ),
		Vertical Factor( :SILANE ),
		Contour Label( 0 )
	),
	SendToReport(
		Dispatch( {"Prediction Profiler"}, "10005", ScaleBox, {Format( "Custom", Formula( Substitute( Char( value ), "000", "k" ) ), 9 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Initiate Profiler analysis.
3. Set noise factors: SILICA, SILANE, SULFUR.
4. Define response variables: ABRASION, MODULUS, ELONG, HARDNESS.
5. Configure Profiler settings.
6. Set initial values for factors.
7. Start Contour Profiler.
8. Configure Contour Profiler settings.
9. Define contour values for responses and derivatives.
10. Adjust grid density and axis factors.
11. Customize report scale formatting.



### Example 2
> **Summary**: Creates and configures a Contour Profiler object in JMP, utilizing term values, contour values, grid density, horizontal factor, and vertical factor to visualize relationships between variables.

<!-- Keywords: #JMPScriptingLanguage, #ContourProfiler, #TermValues, #GridDensity, #DataVisualization -->

**Code**:
```jsl
cpScript =
"\[
Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Profiler(
		1,
		Desirability Functions( 1 ),
		Term Value(
			:SILICA( 1.2, Lock( 0 ), Show( 1 ) ),
			:SILANE( 50, Lock( 0 ), Show( 1 ) ),
			:SULFUR( 2.3, Lock( 0 ), Show( 1 ) )
		)
	),
	Contour Profiler(
		1,
		Term Value(
			:SILICA( 1.2, Lock( 0 ), Show( 1 ) ),
			:SILANE( 50, Lock( 0 ), Show( 1 ) ),
			:SULFUR( 2.3, Lock( 0 ), Show( 1 ) )
		),
		Contour Value(
			:Pred Formula ABRASION( 145, Min( 90 ), Max( 200 ) ),
			:Pred Formula MODULUS( 1375, Min( 500 ), Max( 2250 ) ),
			:Pred Formula ELONG( 425, Min( 200 ), Max( 650 ) ),
			:Pred Formula HARDNESS( 70, Min( 60 ), Max( 80 ) )
		),
		Grid Density( "40 x 40" ),
		Horizontal Factor( :SILICA ),
		Vertical Factor( :SILANE )
	)
);
]\";
dt = Open("data_table.jmp");
cp = Eval( Parse( cpScript ) );
cp << Save Script to Data Table;
varTest = dt << Get Property( "Contour Profiler" );
```

**Code Explanation**:

1. Define `cpScript` variable.
2. Create Profiler object.
3. Set response variables.
4. Configure Profiler settings.
5. Define term values.
6. Create Contour Profiler object.
7. Set Contour Profiler settings.
8. Define contour values.
9. Set grid density.
10. Set horizontal factor.
11. Set vertical factor.
12. Open data table.
13. Evaluate and parse `cpScript`.
14. Save script to data table.
15. Retrieve Contour Profiler property.



### Example 3
> **Summary**: Creates a Profiler object to analyze data from three variables (ABRASION, MODULUS, and ELONG) in a data table, enabling contour profiling and linking profilers together.

<!-- Keywords: #JSL, #Profiler, #DataAnalysis, #ContourPlotting, #LinkingProfilers -->

**Code**:
```jsl
dt3 = Open("data_table.jmp");
obj3 = Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj3 << Contour Profiler( 1 );
obj3 << Link Profilers( 1 );
obj3 << Link Profilers( 0 );
```

**Code Explanation**:

1. Open data table;
2. Create Profiler object.
3. Set Y variables for Profiler.
4. Enable Contour Profiler for first variable.
5. Link all profilers together.
6. Unlink profilers.



## Contour Profiler using Fit Model
### Example 1
> **Summary**: Analyze and visualize shrinkage data by fitting a loglinear variance model, generating a contour profiler with interactive features, and sending the results to a report.

<!-- Keywords: #JSLScriptingLanguage, #LoglinearVarianceModel, #ContourProfiler, #InteractiveVisualization, #DataAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed ),
	LogVariance Effects( :Hold Time & LogVariance ),
	Personality( Loglinear Variance ),
	Run(
		Contour Profiler(
			1,
			Term Value( MoldTemp( 0, Lock( 0 ), Show( 1 ) ), Screw Speed( 0, Lock( 0 ), Show( 1 ) ), Hold Time( 0, Lock( 0 ), Show( 1 ) ) ),
			Contour Value( Shrinkage( 35, Min( 0 ), Max( 70 ) ), Shrinkage Std Dev( 3, Min( -1 ), Max( 7 ) ) ),
			Grid Density( "40 x 40" ),
			Horizontal Factor( MoldTemp ),
			Vertical Factor( Screw Speed )
		),
		:Shrinkage << {Plot Studentized Residual by Predicted( 1 ), Plot Studentized Residual by Row( 1 )}
	),
	SendToReport(
		Dispatch( {"Loglinear Variance Fit", "Contour Profiler"}, "Contour Profiler", FrameBox,
			{DispatchSeg( Contour Seg( 1 ), {Line Color( "None" ), Fill Color( {213, 72, 87} )} ),
			DispatchSeg( Contour Seg( 2 ), {Line Color( "None" ), Fill Color( {64, 111, 223} )} ),
			DispatchSeg( Contour Seg( 3 ), {Line Color( "None" ), Fill Color( {213, 72, 87} )} ),
			DispatchSeg( Contour Seg( 4 ), {Line Color( "None" ), Fill Color( {64, 111, 223} )} ),
			DispatchSeg( Contour Seg( 5 ), {Line Color( "None" ), Fill Color( {213, 72, 87} )} ),
			DispatchSeg( Contour Seg( 6 ), {Line Color( "None" ), Fill Color( {64, 111, 223} )} )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Define response variable Shrinkage.
3. Include effects MoldTemp, Screw Speed, and interaction.
4. Specify LogVariance for Hold Time.
5. Use Loglinear Variance personality.
6. Run Contour Profiler.
7. Set initial values for factors.
8. Define Shrinkage contour limits.
9. Set grid density to 40x40.
10. Configure horizontal and vertical factors.



### Example 2
> **Summary**: Fits a model with Shrinkage as response, including MoldTemp, Screw Speed, and interaction effects, using Loglinear Variance personality, and generates a report object.

<!-- Keywords: #JSLScripting, #FitModel, #LoglinearVariance, #ContourProfiler, #SurfaceProfiler -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( Loglinear Variance ),
	Run
);
rpt = Report( obj );
obj << Contour Profiler( 1 );
obj << Surface Profiler( 1 );
obj << Local Data Filter;
```

**Code Explanation**:

1. Open data table;
2. Fit model with Shrinkage as response.
3. Include MoldTemp, Screw Speed, and interaction effects.
4. Use Loglinear Variance personality.
5. Run the model.
6. Generate report object.
7. Create Contour Profiler.
8. Create Surface Profiler.
9. Add Local Data Filter.



### Example 3
> **Summary**: Runs a regression analysis to predict responses for ABRASION, MODULUS, ELONG, and HARDNESS variables, utilizing the Fit Model dialog with Standard Least Squares personality.

<!-- Keywords: #JMPScriptingLanguage, #RegressionAnalysis, #FitModel, #ProfilerReport, #ContourProfiler -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILICA, :SILANE * :SILICA, :SILANE * :SILANE, :SULFUR * :SILICA, :SULFUR * :SILANE,
		:SULFUR * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run,
	SendToReport(
		Dispatch( {}, "Response ABRASION", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Response MODULUS", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Response ELONG", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Response HARDNESS", OutlineBox, {Close( 1 )} )
	)
);
obj << Profiler( 1, Confidence Intervals( 1 ), Desirability Functions( 1 ), Term Value( :SILICA( 1.2 ), :SILANE( 47 ), :SULFUR( 2.3 ) ) );
obj << Contour Profiler( 1, Term Value( :SILICA( 1.2 ), :SILANE( 57 ), :SULFUR( 2.3 ) ) );
rpt = obj << report;
silane1 = rpt["Prediction Profiler"][AxisBox( 7 )] << get text;
silane2 = rpt["Contour Profiler"][Number Col Edit Box( 1 )] << get;
```

**Code Explanation**:

1. Open data table;
2. Initiate Fit Model dialog.
3. Set response variables.
4. Define model effects.
5. Choose Standard Least Squares personality.
6. Set Minimal Report emphasis.
7. Run the model.
8. Close response outlines.
9. Generate Profiler report.
10. Generate Contour Profiler report.
11. Extract Prediction Profiler text.
12. Extract Contour Profiler value.



### Example 4
> **Summary**: Fits a linear model to data, generating a report object with contour profiler results and attempting to retrieve the title.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #ContourProfiler, #ReportGeneration, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :height ),
	Effects( :sex, :age, :age * :sex, :weight ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run( Contour Profiler( 1 ) )
);
rpt1 = Report( obj1 );
title1 = "";
Try( title1 = rpt1[Outline Box( "Whole Model" )][Outline Box( "Contour Profiler" )] << get title );
```

**Code Explanation**:

1. Open data table.
2. Fit linear model.
3. Set response variable.
4. Define effects.
5. Choose personality.
6. Set emphasis.
7. Run contour profiler.
8. Generate report object.
9. Initialize title variable.
10. Attempt to get contour title.



### Example 5
> **Summary**: Fits a standard least squares model to a data table, generating a report with minimal emphasis and including mixture and contour profilers.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #StandardLeastSquares, #MixtureProfiler, #ContourProfiler -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model(
	Y( :Y ),
	Effects( :p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1, :p3 * :p2 ),
	Personality( Standard Least Squares ),
	Emphasis( Minimal Report ),
	Run Model( :Y << {Mixture Profiler( 1 ), Contour Profiler( 1 )} )
);
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table.
2. Define model variables.
3. Fit standard least squares model.
4. Set minimal report emphasis.
5. Run mixture profiler.
6. Run contour profiler.
7. Generate model report.



## Contour Profiler using Gaussian Process
### Example 1
> **Summary**: Fits a Gaussian Process model to predict stretch using silica, sulfur, and silane as predictor variables, with interactive profiler settings for contour and surface visualization.

<!-- Keywords: #GaussianProcess, #PredictiveModeling, #JMPScriptingLanguage, #DataAnalysis, #MachineLearning -->

**Code**:
```jsl
Open("data_table.jmp") << Gaussian Process(
	Y( :Y ),
	X( :X1, :X2 ),
	Profiler(
		1,
		Confidence Intervals( 1 ),
		Desirability Functions( 1 ),
		Y << Response Limits( {Lower( -1.25, 0.066 ), Middle( 0, 0.5 ), Upper( 1.25, 0.9819 ), Goal( "Maximize" ), Importance( 1 )} ),
		Term Value( X1( 0, Lock( 0 ), Show( 1 ) ), X2( 0, Lock( 0 ), Show( 1 ) ) )
	),
	Contour Profiler(
		1,
		Term Value( X1( 0, Lock( 0 ), Show( 1 ) ), X2( 0, Lock( 0 ), Show( 1 ) ) ),
		Contour Value( Y( 0, Min( -1.25 ), Max( 1.25 ) ) ),
		Grid Density( "40 x 40" ),
		Horizontal Factor( :X1 ),
		Vertical Factor( :X2 )
	),
	Surface Profiler(
		1,
		Surface Color Theme( "Green to Black to Red" ),
		Surface Color Theme2( "Green to White to Red" ),
		Surface Color Theme3( "White to Black" ),
		Surface Color Theme4( "Blue to Gray to Red" ),
		Response Column Color Theme( "Blue to Green to Red" ),
		Response Column Color Theme2( "Spectral" ),
		Response Column Color Theme3( "Jet" ),
		Response Column Color Theme4( "White to Blue" ),
		Surface Color Method( "Solid", "Solid", "Solid", "Solid" ),
		SetVariableAxis( :X1, Current Value( 0 ), Axis Data( {} ) ),
		SetVariableAxis( :X2, Axis Data( {} ) ),
		SetZAxis( :Y, Current Value( 0 ), Axis Data( {} ) ),
		SetXVariable( :X1 ),
		SetYVariable( :X2 ),
		Iso Value( 0, -0.0844099077010923 ),
		Frame3D( Set Hide Lights Border( 1 ), Set Rotation( -54, 0, 38 ) ),
		Term Value( X1( 0, Min( -1 ), Max( 1 ) ), X2( 0, Min( -1 ), Max( 1 ) ) )
	),
	Set Correlation Function( "Gaussian" ),
	Fast GASP( 0 )
);
```

**Code Explanation**:

1. Open data table.
2. Fit Gaussian Process model.
3. Configure Profiler settings.
4. Set response limits.
5. Define term values for Profiler.
6. Enable contour profiler.
7. Set contour values.
8. Adjust grid density.
9. Specify horizontal factor.
10. Specify vertical factor.



### Example 2
> **Summary**: Fits a Gaussian Process model to predict stretch using silica, sulfur, and silane as predictor variables, with configurable profiler settings and contour plots.

<!-- Keywords: #GaussianProcess, #PredictiveModeling, #ContourPlots, #ProfilerSettings, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Gaussian Process(
	Y( :Y ),
	X( :X1, :X2 ),
	Profiler(
		1,
		Confidence Intervals( 1 ),
		Desirability Functions( 1 ),
		Y << Response Limits( {Lower( -1.25, 0.066 ), Middle( 0, 0.5 ), Upper( 1.25, 0.9819 ), Goal( Maximize ), Importance( 1 )} ),
		Term Value( X1( 0, Lock( 0 ), Show( 1 ) ), X2( 0, Lock( 0 ), Show( 1 ) ) )
	),
	Contour Profiler(
		1,
		Term Value( X1( 0, Lock( 0 ), Show( 1 ) ), X2( 0, Lock( 0 ), Show( 1 ) ) ),
		Contour Value( Y( 0, Min( -1.25 ), Max( 1.25 ) ) ),
		Grid Density( "40 x 40" ),
		Horizontal Factor( X1 ),
		Vertical Factor( X2 )
	),
	Surface Profiler(
		1,
		Surface Color Theme( "Green to Black to Red" ),
		Surface Color Theme2( "Green to White to Red" ),
		Surface Color Theme3( "White to Black" ),
		Surface Color Theme4( "Blue to Gray to Red" ),
		Response Column Color Theme( "Blue to Green to Red" ),
		Response Column Color Theme2( "Spectral" ),
		Response Column Color Theme3( "Jet" ),
		Response Column Color Theme4( "White to Blue" ),
		Surface Color Method( "Solid", "Solid", "Solid", "Solid" ),
		SetVariableAxis(
			:X1,
			Current Value( 0 ),
			Axis Data( {Format( "Best", 8 ), Min( -1.25 ), Max( 1.25 ), Inc( 0.5 ), Minor Ticks( 1 )} )
		),
		SetVariableAxis( :X2, Axis Data( {Format( "Best", 8 ), Min( -1.25 ), Max( 1.25 ), Inc( 0.5 ), Minor Ticks( 1 )} ) ),
		SetZAxis( Y, Current Value( 0 ), Axis Data( {Format( "Best", 8 ), Min( -1.5 ), Max( 1.5 ), Inc( 0.5 ), Minor Ticks( 1 )} ) ),
		SetXVariable( X1 ),
		SetYVariable( X2 ),
		Iso Value( 0, -0.0844099077010923 ),
		Frame3D( Set Hide Lights Border( 1 ), Set Rotation( -54, 0, 38 ) ),
		Term Value( X1( 0, Min( -1.25 ), Max( 1.25 ) ), X2( 0, Min( -1.25 ), Max( 1.25 ) ) )
	),
	Set Correlation Function( "Cubic" )
);
```

**Code Explanation**:

1. Open data table.
2. Fit Gaussian Process model.
3. Configure Profiler settings.
4. Set response limits.
5. Define desirability functions.
6. Enable confidence intervals.
7. Configure Contour Profiler.
8. Set contour value range.
9. Define grid density.
10. Configure Surface Profiler.



## Contour Profiler using New Column
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot to visualize the relationship between height and weight.

<!-- Keywords: #JSLScripting, #ProfilerPlot, #LeastSquaresModel, #MultipleEffects, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myCol = dt << New Column( "myFormula", formula( :height / :weight ) );
Profiler(
	Y( :myFormula ),
	Contour Profiler(
		1,
		Term Value( height( 57.2560975609756, Lock( 0 ), Show( 1 ) ), weight( 114.707317073171, Lock( 0 ), Show( 1 ) ) ),
		Contour Value( myFormula( 0.625, Min( 0.4 ), Max( 0.85 ) ) ),
		Grid Density( "40 x 40" ),
		Horizontal Factor( :height ),
		Vertical Factor( :weight )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create new column "myFormula".
3. Define formula for "myFormula".
4. Launch Profiler.
5. Set response variable to "myFormula".
6. Enable Contour Profiler.
7. Set initial values for height and weight.
8. Define contour value range.
9. Set grid density to 40x40.
10. Set horizontal factor to height.
11. Set vertical factor to weight.



## Contour Profiler using Graph Builder
> **Summary**: Creates a variability chart with nested factors using operator and part configurations, displaying standard deviation charts in JMP.

<!-- Keywords: #JMPScriptingLanguage, #GraphBuilder, #VariabilityChart, #NestedFactors, #StandardDeviation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
plat = dt << Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 3 ) ) ),
	SendToReport( Dispatch( {}, "Graph Builder", FrameBox, {Marker Size( 6 )} ) )
);
dt << Select Where( :sex == "M" );
jrn = plat << Journal Window;
Close( dt, nosave );
jrn << close window;
cpScript =
"Contour Profiler(Y(:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS), Contour Profiler(1, Term Value(SILICA(1.25, Lock(0), Show(1)), SILANE(50, Lock(0), Show(1)), SULFUR(2.25, Lock(0), Show(1))), Contour Value(Pred Formula ABRASION(145, Min(90), Max(200)), Pred Formula MODULUS(1375, Min(500), Max(2250)), Pred Formula ELONG(425, Min(200), Max(650)), Pred Formula HARDNESS(70, Min(60), Max(80))), Grid Density(\!"40 x 40\!"), Horizontal Factor(:SILICA), Vertical Factor(:SILANE)))";
```

**Code Explanation**:

1. Open data table.
2. Create Graph Builder plot.
3. Set X, Y, and overlay variables.
4. Add points and smoother elements.
5. Adjust marker size in report.
6. Select male records in data table.
7. Create journal window from plot.
8. Close data table without saving.
9. Close journal window.
10. Define contour profiler script.



## Contour Profiler using If
> **Summary**: Fits a log-linear variance model to a data table, generating reports and profiles, and filtering data interactively.

<!-- Keywords: #JMPScriptingLanguage, #LogLinearVarianceModel, #DataFiltering, #ReportGeneration, #Profiler -->

**Code**:
```jsl
If( JMP Version() >= " 8.0.1",
	dt = Open("data_table.jmp");
	dt:height[38 :: 40] = .;
	Fit Model( Y( :height ), Effects( :weight & LogVariance ), Personality( Loglinear Variance ), By( :age ), Run Model( Profiler( 1 ) ) );
	dt:height[2] = .;
	Close( dt, No Save );
	dt = Open("data_table.jmp");
	dt:height[38 :: 40] = .;
	Fit Model(
		Y( :height ),
		Effects( :weight & LogVariance ),
		Personality( Loglinear Variance ),
		By( :age ),
		Run Model( Save Columns( Residuals ) )
	);
	Fit Model(
		Y( :height ),
		Effects( :weight & LogVariance ),
		Personality( Loglinear Variance ),
		By( :age ),
		Run Model( Save Columns( Residuals ) )
	);
	Close( dt, No Save );
);
dt = Open("data_table.jmp");
obj = Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( Loglinear Variance ),
	Run
);
rpt = Report( obj );
obj << Contour Profiler( 1 );
obj << Surface Profiler( 1 );
obj << Local Data Filter;
```

**Code Explanation**:

1. Check JMP version.
2. Open data table;
3. Set height values 38-40 to missing.
4. Fit log-linear variance model.
5. Set height value 2 to missing.
6. Close "data_table.jmp" without saving.
7. Reopen "data_table.jmp".
8. Set height values 38-40 to missing.
9. Fit log-linear variance model and save residuals.
10. Repeat fit and save residuals.
11. Close "data_table.jmp" without saving.
12. Open data table;
13. Fit log-linear variance model with interaction effects.
14. Generate report.
15. Add contour profiler.
16. Add surface profiler.
17. Add local data filter.



## Contour Profiler using Set Modeling Type
### Example 1
> **Summary**: Peforms a bivariate analysis to examine the relationship between difference and mean by fitting a model with height as response, including effects of sex, age, age*sex, and weight, and emphasizing effect screening.

<!-- Keywords: #BivariateAnalysis, #ModelFitting, #EffectScreening, #ContourProfiler, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:age << Set Modeling Type( continuous );
obj1 = dt << Fit Model(
	Y( :height ),
	Effects( :sex, :age, :age * :sex, :weight ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run( Contour Profiler( 1 ) )
);
rpt1 = Report( obj1 );
title1 = "";
Try( title1 = (rpt1 << parent)[Outline Box( "Contour Profiler" )] << get title );
Close( dt, no save );
b text = "Drug[d]:xConst had constant covariate and was dropped from model.";
b coding1 = [1 0 1 1.6 0 6,
1 0 1 -1.4 0 0,
1 0 1 -4.4 0 2,
1 0 1 4.6 0 8,
1 0 1 9.6 0 11,
1 0 1 -3.4 0 4,
1 0 1 0.6 0 13,
1 0 1 -3.4 0 1,
1 0 1 1.6 0 8,
1 0 1 -6.4 0 0,
1 1 0 0 0 0,
1 1 0 0 0 2,
1 1 0 0 0 3,
1 1 0 0 0 1,
1 1 0 0 0 18,
1 1 0 0 0 4,
1 1 0 0 0 14,
1 1 0 0 0 9,
1 1 0 0 0 1,
1 1 0 0 0 9,
1 -1 -1 0 6.6 13,
1 -1 -1 0 3.6 10,
1 -1 -1 0 1.6 18,
1 -1 -1 0 -0.4 5,
1 -1 -1 0 11.6 23,
1 -1 -1 0 6.6 12,
1 -1 -1 0 2.6 5,
1 -1 -1 0 2.6 16,
1 -1 -1 0 -2.4 1,
1 -1 -1 0 2.6 20];
b coding2 = [1 1 0 1.6 0 6,
1 1 0 -1.4 0 0,
1 1 0 -4.4 0 2,
1 1 0 4.6 0 8,
1 1 0 9.6 0 11,
1 1 0 -3.4 0 4,
1 1 0 0.6 0 13,
1 1 0 -3.4 0 1,
1 1 0 1.6 0 8,
1 1 0 -6.4 0 0,
1 0 1 0 0 0,
1 0 1 0 0 2,
1 0 1 0 0 3,
1 0 1 0 0 1,
1 0 1 0 0 18,
1 0 1 0 0 4,
1 0 1 0 0 14,
1 0 1 0 0 9,
1 0 1 0 0 1,
1 0 1 0 0 9,
1 -1 -1 0 6.6 13,
1 -1 -1 0 3.6 10,
1 -1 -1 0 1.6 18,
1 -1 -1 0 -0.4 5,
1 -1 -1 0 11.6 23,
1 -1 -1 0 6.6 12,
1 -1 -1 0 2.6 5,
1 -1 -1 0 2.6 16,
1 -1 -1 0 -2.4 1,
1 -1 -1 0 2.6 20];
b coding3 = [1 0 1 0 1.6 6,
1 0 1 0 -1.4 0,
1 0 1 0 -4.4 2,
1 0 1 0 4.6 8,
1 0 1 0 9.6 11,
1 0 1 0 -3.4 4,
1 0 1 0 0.6 13,
1 0 1 0 -3.4 1,
1 0 1 0 1.6 8,
1 0 1 0 -6.4 0,
1 -1 -1 0 0 0,
1 -1 -1 0 0 2,
1 -1 -1 0 0 3,
1 -1 -1 0 0 1,
1 -1 -1 0 0 18,
1 -1 -1 0 0 4,
1 -1 -1 0 0 14,
1 -1 -1 0 0 9,
1 -1 -1 0 0 1,
1 -1 -1 0 0 9,
1 1 0 6.6 0 13,
1 1 0 3.6 0 10,
1 1 0 1.6 0 18,
1 1 0 -0.4 0 5,
1 1 0 11.6 0 23,
1 1 0 6.6 0 12,
1 1 0 2.6 0 5,
1 1 0 2.6 0 16,
1 1 0 -2.4 0 1,
1 1 0 2.6 0 20];
```

**Code Explanation**:

1. Open data table;
2. Set "age" modeling type to continuous.
3. Fit model with "height" as response.
4. Include effects: "sex", "age", "age*sex", "weight".
5. Use Standard Least Squares personality.
6. Emphasize Effect Screening.
7. Run Contour Profiler.
8. Extract Contour Profiler title.
9. Close table without saving.
10. Define text and coding arrays.



### Example 2
> **Summary**: Peforms a bivariate analysis to examine the relationship between difference and mean by fitting a model with height as response, including sex, age, interaction age*sex, and weight as effects, and generating a report.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #ModelFitting, #EffectScreening, #ContourProfiler -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:age << Set Modeling Type( continuous );
obj1 = dt << Fit Model(
	Y( :height ),
	Effects( :sex, :age, :age * :sex, :weight ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run( Contour Profiler( 1 ) )
);
rpt1 = Report( obj1 );
title1 = "";
Try( title1 = (rpt1 << parent)[Outline Box( "Contour Profiler" )] << get title );
```

**Code Explanation**:

1. Open data table;
2. Set age as continuous variable.
3. Fit model with height as response.
4. Include sex, age, interaction age*sex, weight as effects.
5. Use Standard Least Squares personality.
6. Emphasize Effect Screening.
7. Run Contour Profiler.
8. Generate report from fit model.
9. Initialize title1 as empty string.
10. Try to get Contour Profiler title.



## Contour Profiler using Column
### Example 1
> **Summary**: Configures spec limits for four prediction formulas and generates a report from a Contour Profiler object.

<!-- Keywords: #JSLScriptingLanguage, #ContourProfiler, #SpecLimits, #PredictionFormulas, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( "Pred Formula ABRASION" ) << set property( "Spec Limits", {LSL( 100 ), USL( 200 ), Target( 150 )} );
Column( "Pred Formula MODULUS" ) << set property( "Spec Limits", {LSL( 1000 ), USL( 2000 ), Target( 1500 )} );
Column( "Pred Formula ELONG" ) << set property( "Spec Limits", {LSL( 450 ), USL( 550 ), Target( 475 )} );
Column( "Pred Formula HARDNESS" ) << set property( "Spec Limits", {LSL( 65 ), USL( 70 ), Target( 67.5 )} );
obj = Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Contour Profiler( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Set spec limits for ABRASION.
3. Set spec limits for MODULUS.
4. Set spec limits for ELONG.
5. Set spec limits for HARDNESS.
6. Create Contour Profiler object.
7. Specify four prediction formulas.
8. Configure first contour profiler.
9. Generate report from profiler.
10. Assign report to variable.



### Example 2
> **Summary**: Configures and generates a Contour Profiler report with specified spec limits for multiple columns, utilizing the Contour Profiler platform in JMP.

<!-- Keywords: #ContourProfiler, #SpecLimits, #JMPScriptingLanguage, #MultivariateAnalysis, #QualityControl -->

**Code**:
```jsl
ut relative epsilon = 1e-10;
dt = Open("data_table.jmp");
Column( "Pred Formula ABRASION" ) << set property( "Spec Limits", {LSL( 100 ), USL( 200 ), Target( 150 )} );
Column( "Pred Formula MODULUS" ) << set property( "Spec Limits", {LSL( 1000 ), USL( 2000 ), Target( 1500 )} );
Column( "Pred Formula ELONG" ) << set property( "Spec Limits", {LSL( 450 ), USL( 550 ), Target( 475 )} );
Column( "Pred Formula HARDNESS" ) << set property( "Spec Limits", {LSL( 65 ), USL( 70 ), Target( 67.5 )} );
obj = Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Contour Profiler( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Set relative epsilon.
2. Open data table.
3. Set Spec Limits for ABRASION.
4. Set Spec Limits for MODULUS.
5. Set Spec Limits for ELONG.
6. Set Spec Limits for HARDNESS.
7. Create Contour Profiler object.
8. Configure Contour Profiler settings.
9. Generate report from profiler.
10. Assign report to variable.



