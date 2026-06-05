# Degradation

## Destructive Degradation 
### Example 1
> **Summary**: Fits a destructive degradation model to analyze device lifetimes, accounting for censoring and incorporating effects of average load, moisture, vibration, solar exposure, and location coordinates.

<!-- Keywords: #DestructiveDegradation, #ProportionalHazards, #Censoring, #DeviceLifetimes, #ReliabilityAnalysis -->

**Code**:
```jsl
// Destructive Degradation Fit
// Open data table
dt = Open("data_table.jmp");
// Destructive Degradation Fit
Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	Censor( :Censor ),
	X( :Degrees ),
	Censor Code( "Right" ),
	Model(
		"Log10", "Sqrt", "Normal",
		"Individual Path with Intercept"
	),
	Control(
		"Log10", "Sqrt", "Normal",
		"Individual Path with Intercept"
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform destructive degradation fit.
3. Set response variable.
4. Define time variable.
5. Specify censor variable.
6. Include covariate.
7. Set censor code.
8. Choose model types.
9. Apply control settings.
10. Execute analysis.



### Example 2
> **Summary**: Fits a destructive degradation model to analyze device lifetimes, accounting for censoring and including effects of average load, moisture, vibration, solar exposure, and location coordinates.

<!-- Keywords: #DestructiveDegradation, #ProportionalHazards, #Censoring, #ReliabilityAnalysis, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	Censor( :Censor ),
	X( :Degrees ),
	Censor Code( "Right" ),
	Use Condition Temperature( "Celsius" ),
	Model(
		"Log",
		"Sqrt",
		"Normal",
		"Arrhenius Rate",
		Degradation Profiler(
			Profiler( 1, Confidence Intervals( 1 ), Term Value( Weeks( 8, Lock( 0 ), Show( 1 ) ), Degrees( 60, Lock( 0 ), Show( 1 ) ) ) )
		),
		Probability(
			Profiler(
				1,
				Confidence Intervals( 1 ),
				Term Value(
					Weeks( 8, Lock( 0 ), Show( 1 ) ),
					Degrees( 60, Lock( 0 ), Show( 1 ) ),
					Strength( 58.5225826501035, Lock( 0 ), Show( 1 ) )
				)
			)
		),
		Crossing Time Quantile Profiler(
			Profiler(
				1,
				Confidence Intervals( 1 ),
				Term Value(
					Degrees( 35, Min( 35 ), Lock( 0 ), Show( 1 ) ),
					Probability( 0.02, Lock( 0 ), Show( 1 ) ),
					Strength( 50, Lock( 0 ), Show( 1 ) )
				)
			)
		)
	),
	Control( "Log", "Sqrt", "Normal", "Arrhenius Rate" ), 
);
```

**Code Explanation**:

1. Open data table.
2. Fit destructive degradation model.
3. Set response variable.
4. Define time variable.
5. Specify censor variable.
6. Include covariate.
7. Set censor code.
8. Use Celsius temperature unit.
9. Select models: Log, Sqrt, Normal, Arrhenius Rate.
10. Configure profilers for degradation, probability, and crossing time.



### Example 3
> **Summary**: Fits a proportional hazards model to analyze device lifetimes, including effects of average load, average moisture, average vibration, and location coordinates, while accounting for censoring.

<!-- Keywords: #ProportionalHazards, #DeviceLifetimes, #Censoring, #SurvivalAnalysis, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Destructive Degradation( Y( :Strength ), Time( :Weeks ), Censor( :Censor ), X( :Degrees ), Censor Code( "Right" ), );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Launch Destructive Degradation analysis.
3. Set response variable.
4. Set time variable.
5. Specify censor variable.
6. Include covariate variable.
7. Define censor code.
8. Generate analysis report.



### Example 4
> **Summary**: Runs a destructive degradation analysis to fit a proportional hazards model for device lifetimes, incorporating effects of average load, moisture, vibration, solar exposure, and location coordinates while accounting for censoring.

<!-- Keywords: #DestructiveDegradation, #ProportionalHazardsModel, #Censoring, #DeviceLifetimes, #ReliabilityAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	Censor( :Censor ),
	X( :Degrees ),
	Censor Code( "Right" ),
	Use Condition Temperature( "Celsius", 50 ),
	Model( "Linear", "Linear", "Lognormal", "First Order Kinetics Type1" ),
	Control( "Linear", "Linear", "Lognormal", "First Order Kinetics Type1" )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Perform destructive degradation analysis.
3. Set response variable.
4. Define time variable.
5. Specify censoring variable.
6. Include covariate.
7. Set censoring code.
8. Define condition temperature.
9. Select models for analysis.
10. Generate report.



### Example 5
> **Summary**: Runs a destructive degradation analysis to model device lifetimes, incorporating effects of average load, moisture, vibration, solar exposure, and location coordinates while accounting for censoring.

<!-- Keywords: #DestructiveDegradation, #ProportionalHazards, #Censoring, #DeviceLifetimes, #ReliabilityAnalysis -->

**Code**:
```jsl
::ArrheniusConstant = 1.7;
dt = Open("data_table.jmp");
obj1 = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	Censor( :Censor ),
	X( :Degrees ),
	Censor Code( "Right" ),
	Use Condition Temperature( "Celsius", 50 ),
	Model( "Linear", "Linear", "Lognormal", "First Order Kinetics Type1" ),
	Control( "Linear", "Linear", "Lognormal", "First Order Kinetics Type1" )
);
Eval(
	Eval Expr(
		dt << New Column( "lossformula",
			Formula(
				Parameter(
					{b0 = 4, b1 = 0, b2 = 13, b3 = -2, sigma = 0.4},
					ArrX0 = (Expr( ::ArrheniusConstant ) / (60 + 273.15));
					ArrX = (Expr( ::ArrheniusConstant ) / (:Degrees + 273.15));
					mu = b0 + b1 * Exp( -b2 * Exp( b3 * (ArrX0 - ArrX) ) * :Weeks );
					zz = (Log( :Strength ) - mu) / sigma;
					If( :Censor == "Right",
						-Log( 1 - Normal Distribution( zz ) ),
						Log( sigma ) + Log( :Strength ) + (zz ^ 2) / 2 + 0.5 * Log( 2 * Pi() )
					);
				)
			)
		)
	)
);
```

**Code Explanation**:

1. Define Arrhenius constant.
2. Open data table.
3. Perform destructive degradation analysis.
4. Set response variable.
5. Set time variable.
6. Set censor variable.
7. Set condition variable.
8. Specify censor code.
9. Define condition temperature.
10. Choose models and controls.



## Repeated Measures Degradation 
### Example 1
> **Summary**: Performs a repeated measures degradation analysis to model the length of specimens over multiple cycles, utilizing Bayesian models and Monte Carlo iterations.

<!-- Keywords: #JMPScriptingLanguage, #RepeatedMeasuresDegradation, #BayesianModels, #MonteCarloIterations, #DataAnalysis -->

**Code**:
```jsl
// Repeated Measures Degradation of Length by MCycles
// Open data table
dt = Open("data_table.jmp");
// Repeated Measures Degradation of Length by MCycles
Repeated Measures Degradation(
	Y( :Length ),
	Time( :MCycles ),
	Label( :Specimen ),
	Bayesian Models(
		Y Transformation( "Linear" ),
		X Transformation( "Linear" ),
		Degradation Path Name(
			"Paris-Erdogan Crack Growth with Initial Condition"
		),
		Models(
			Model(
				Parameter(
					{"b1", "Normal"},
					{"b2", "Normal"}
				),
				Prior(
					{"Œº[b1]",
					Distribution(
						"<Normal>"
					),
					Prior Parameter(
						"Lower 99% Limit",
						2
					),
					Prior Parameter(
						"Upper 99% Limit",
						5
					)},
					{"œÉ[b1]",
					Distribution(
						"Half Cauchy"
					),
					Prior Parameter(
						"Scale", 0.2
					)},
					{"Œº[b2]",
					Distribution(
						"<Normal>"
					),
					Prior Parameter(
						"Lower 99% Limit",
						4
					),
					Prior Parameter(
						"Upper 99% Limit",
						6
					)},
					{"œÉ[b2]",
					Distribution(
						"Half Cauchy"
					),
					Prior Parameter(
						"Scale", 0.2
					)},
					{"œÅ[b1, b2]",
					Distribution(
						"Normal"
					),
					Prior Parameter(
						"Location", 0
					),
					Prior Parameter(
						"Scale", 4
					)},
					{"œÉ[Œµ]",
					Distribution(
						"Half Cauchy"
					),
					Prior Parameter(
						"Scale", 3
					)}
				),
				Random Seed( 32323 ),
				Number of Monte Carlo Iterations(
					10000
				),
				Warmup Laps( 10 ),
				Auto Thinning( 1 ),
				Thinning( 1 ),
				N Chains( 1 )
			)
		)
	),
	Control(
		"Linear", "Linear",
		"Paris-Erdogan Crack Growth with Initial Condition"
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform repeated measures degradation analysis.
3. Specify length as response variable.
4. Use MCycles as time variable.
5. Label specimens accordingly.
6. Apply Bayesian models.
7. Transform Y and X linearly.
8. Define degradation path name.
9. Set model parameters and priors.
10. Configure Monte Carlo iterations and settings.



### Example 2
> **Summary**: Visualizes the degradation of power drop over time, accounting for device-specific effects and temperature variations using Bayesian models in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BayesianModeling, #DegradationAnalysis, #RepeatedMeasures, #DataVisualization -->

**Code**:
```jsl
// Repeated Measures Degradation
// Open data table
dt = Open("data_table.jmp");
// Repeated Measures Degradation
Repeated Measures Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Reference Temperature(
		"Celsius", 195
	),
	Bayesian Models(
		Y Transformation( "Linear" ),
		X Transformation( "Linear" ),
		Degradation Path Name(
			"First Order Kinetics Type 2"
		),
		Models(
			Model(
				Parameter(
					{"b1", "Lognormal"},
					{"b2", "Lognormal"}
				),
				Prior(
					{"Œº[log|b1|]",
					Distribution(
						"<Normal>"
					),
					Prior Parameter(
						"Lower 99% Limit",
						-1
					),
					Prior Parameter(
						"Upper 99% Limit",
						3
					)},
					{"œÉ[log|b1|]",
					Distribution(
						"Half Cauchy"
					),
					Prior Parameter(
						"Scale", 0.5
					)},
					{"Œº[log|b2|]",
					Distribution(
						"<Normal>"
					),
					Prior Parameter(
						"Lower 99% Limit",
						-10
					),
					Prior Parameter(
						"Upper 99% Limit",
						-5
					)},
					{"œÉ[log|b2|]",
					Distribution(
						"Half Cauchy"
					),
					Prior Parameter(
						"Scale", 0.5
					)},
					{"œÅ[b1, b2]",
					Distribution(
						"Normal"
					),
					Prior Parameter(
						"Location", 0
					),
					Prior Parameter(
						"Scale", 3
					)},
					{"b3",
					Distribution(
						"<Normal>"
					),
					Prior Parameter(
						"Lower 99% Limit",
						-10
					),
					Prior Parameter(
						"Upper 99% Limit",
						10
					)},
					{"œÉ[Œµ]",
					Distribution(
						"Half Cauchy"
					),
					Prior Parameter(
						"Scale", 3
					)}
				),
				Random Seed( 32323 ),
				Number of Monte Carlo Iterations(
					5000
				),
				Warmup Laps( 20 ),
				Auto Thinning( 1 ),
				Thinning( 1 ),
				N Chains( 1 )
			)
		)
	),
	Control(
		"Linear", "Linear",
		"First Order Kinetics Type 2"
	)
);
```

**Code Explanation**:

1. Open data table.
2. Set Y variable.
3. Set time variable.
4. Set label variable.
5. Set X variable.
6. Define reference temperature.
7. Specify Bayesian models.
8. Define Y transformation.
9. Define X transformation.
10. Set degradation path name.



### Example 3
> **Summary**: Runs a repeated measures degradation analysis to model the relationship between Power Drop, Hours, and Degrees C, using Bayesian models with linear transformations and first-order kinetics type 2 degradation path.

<!-- Keywords: #JMPScriptingLanguage, #RepeatedMeasuresDegradation, #BayesianModels, #LinearTransformations, #FirstOrderKinetics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Repeated Measures Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Reference Temperature( "Celsius", 195 ),
	Bayesian Models(
		Y Transformation( "Linear" ),
		X Transformation( "Linear" ),
		Degradation Path Name( "First Order Kinetics Type 2" ),
		Models(
			Model(
				Parameter( {"b1", "Lognormal"}, {"b2", "Lognormal"} ),
				Prior(
					{"Œº[log|b1|]", Distribution( "<Normal>" ), Prior Parameter( "Lower 99% Limit", -1 ),
					Prior Parameter( "Upper 99% Limit", 3 )},
					{"œÉ[log|b1|]", Distribution( "Half Cauchy" ), Prior Parameter( "Scale", 0.5 )},
					{"Œº[log|b2|]", Distribution( "<Normal>" ), Prior Parameter( "Lower 99% Limit", -10 ),
					Prior Parameter( "Upper 99% Limit", -5 )},
					{"œÉ[log|b2|]", Distribution( "Half Cauchy" ), Prior Parameter( "Scale", 0.5 )},
					{"œÅ[b1, b2]", Distribution( "Normal" ), Prior Parameter( "Location", 0 ), Prior Parameter( "Scale", 3 )},
					{"b3", Distribution( "<Normal>" ), Prior Parameter( "Lower 99% Limit", -10 ), Prior Parameter( "Upper 99% Limit", 10 )},
					{"œÉ[Œµ]", Distribution( "Half Cauchy" ), Prior Parameter( "Scale", 3 )}
				),
				Random Seed( 32323 ),
				Number of Monte Carlo Iterations( 5000 ),
				Warmup Laps( 20 ),
				Auto Thinning( 1 ),
				Thinning( 1 ),
				N Chains( 1 )
			)
		)
	),
	Control( "Linear", "Linear", "First Order Kinetics Type 2" ), 
);
```

**Code Explanation**:

1. Open data table;
2. Launch repeated measures degradation analysis.
3. Set response variable to Power Drop.
4. Define time variable as Hours.
5. Use Device as label.
6. Include Degrees C as covariate.
7. Set reference temperature to Celsius 195.
8. Configure Bayesian models.
9. Apply linear transformations to Y and X.
10. Select first order kinetics type 2 degradation path.



### Example 1
> **Summary**: Performs a degradation analysis on temperature data, comparing Fahrenheit measurements across different thermometer types using the Repeated Measures Degradation platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DegradationAnalysis, #RepeatedMeasures, #TemperatureData, #ThermometerTypes -->

**Code**:
```jsl
// Degradation
// Open data table
dt = Open("data_table.jmp");
// Degradation
Degradation(
	Y( :Crack Size ),
	Time( :Cycles ),
	Label( :Unit ),
	Application(
		Repeated Measures Degradation
	),
	Connect Data Markers( 1 ),
	Show Fitted Lines( 0 ),
	Show Median Curves( 0 ),
	Show Legend( 0 ),
	No Tab List( 0 ),
	Set Upper Spec Limit( . ),
	Set Lower Spec Limit( . ),
	Set Censoring Time( . ),
	Show Residual Plot( 1 ),
	Show Inverse Prediction Plot( 1 ),
	Inverse Prediction Interval(
		No Interval
	),
	Inverse Prediction Alpha( 0.05 ),
	Path Specifications(
		Simple Linear(
			Add Custom X Scale(
				{{"Linear",
				Function( {x}, x ),
				Function( {x}, x )}}
			),
			Add Custom Y Scale(
				{{"Linear",
				Function( {x}, x ),
				Function( {x}, x )}}
			),
			Slope Constaint( Different ),
			Intercept( Different ),
			Select X Scale( "Linear" ),
			Select Y Scale( "-1/x" )
		),
		Nonlinear Path
	),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( "-1/x"n ),
			Intercept( Different ),
			Slope( Different )
		)
	),
	Simple Linear Path( 1 ),
	Mean Path( 1 ),
	Model Report( Select Model( 1 ) ),
	SendToReport(
		Dispatch(
			{"Overlay",
			"Model Specification"},
			"Crack Size Transformation",
			OutlineBox,
			{Close( 0 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define degradation analysis.
3. Specify response variable.
4. Specify time variable.
5. Specify label variable.
6. Choose repeated measures application.
7. Connect data markers.
8. Hide fitted lines.
9. Hide median curves.
10. Hide legend.



### Example 2
> **Summary**: Performs a degradation analysis on temperature data from different thermometer types, using the Repeated Measures Degradation platform in JMP to visualize and compare Fahrenheit measurements.

<!-- Keywords: #DegradationAnalysis, #RepeatedMeasures, #JMP, #TemperatureData, #ThermometerTypes -->

**Code**:
```jsl
// Degradation
// Open data table
dt = Open("data_table.jmp");
// Degradation
Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Application(
		Repeated Measures Degradation
	)
);
```

**Code Explanation**:

1. Open table.
2. Analyze degradation data.
3. Set response variable.
4. Define time variable.
5. Specify label variable.
6. Include covariate.
7. Choose analysis method.



### Example 3
> **Summary**: Opens a data table, performs a degradation analysis with repeated measures, and generates various visualizations including ANOM charts and mean diamonds.

<!-- Keywords: #DegradationAnalysis, #RepeatedMeasures, #JMPScriptingLanguage, #Visualizations, #DataAnalysis -->

**Code**:
```jsl
// Degradation
// Open data table
dt = Open("data_table.jmp");
// Degradation
Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application(
		Repeated Measures Degradation
	),
	Connect Data Markers( 1 ),
	Show Fitted Lines( 0 ),
	Show Spec Limits( 1 ),
	Show Median Curves( 0 ),
	Show Legend( 0 ),
	No Tab List( 0 ),
	Use Pooled MSE for Nonpoolable Model(
		0
	),
	Set Censoring Time( . ),
	Show Residual Plot( 1 ),
	Show Inverse Prediction Plot( 1 ),
	Inverse Prediction Interval(
		No Interval
	),
	Inverse Prediction Alpha( 0.05 ),
	Path Specifications(
		Simple Linear(
			Add Custom X Scale(
				{{"Linear",
				Function( {x}, x ),
				Function( {x}, x )}}
			),
			Add Custom Y Scale(
				{{"Linear",
				Function( {x}, x ),
				Function( {x}, x )}}
			),
			Slope( Different ),
			Intercept( Different ),
			Select X Scale( "Linear" ),
			Select Y Scale( "Linear" )
		),
		Nonlinear Path
	),
	Simple Linear Path( 1 ),
	Mean Path( 1 )
);
```

**Code Explanation**:

1. Open table.
2. Define degradation analysis.
3. Set response variable.
4. Set time variable.
5. Set label variable.
6. Choose repeated measures application.
7. Connect data markers.
8. Hide fitted lines.
9. Show spec limits.
10. Hide median curves.



### Example 4
> **Summary**: Opens a data table, applies the Degradation platform to analyze temperature data across different thermometer types, and generates visualizations such as ANOM charts and mean diamonds.

<!-- Keywords: #Degradation, #TemperatureDataAnalysis, #ThermometerTypes, #Visualizations, #JMPScriptingLanguage -->

**Code**:
```jsl
// Degradation
// Open data table
dt = Open("data_table.jmp");
// Degradation
Degradation(
	Y( :Percent Increase ),
	Time( :kHours ),
	Label( :Resistor ),
	X( :Degrees C ),
	Application(
		Repeated Measures Degradation
	)
);
```

**Code Explanation**:

1. Open data table.
2. Call Degradation function.
3. Set Y variable.
4. Set Time variable.
5. Set Label variable.
6. Set X variable.
7. Specify application type.



### Example 5
> **Summary**: Opens a data table, performs a degradation analysis with specified variables and settings, and generates various visualizations.

<!-- Keywords: #DegradationAnalysis, #JMPScriptingLanguage, #DataVisualization, #StabilityTest, #PharmaceuticalIndustry -->

**Code**:
```jsl
// Degradation
// Open data table
dt = Open("data_table.jmp");
// Degradation
Degradation(
	Y( :"Concentration (mg/Kg)"n ),
	Time( :Time ),
	Label( :Batch Number ),
	Application( Stability Test ),
	Connect Data Markers( 0 ),
	Show Fitted Lines( 1 ),
	Show Median Curves( 0 ),
	Show Legend( 1 ),
	Set Upper Spec Limit( . ),
	Set Lower Spec Limit( 99 ),
	Set Censoring Time( . ),
	Show Residual Plot( 1 ),
	Show Inverse Prediction Plot( 1 ),
	Inverse Prediction Interval(
		No Interval
	),
	Inverse Prediction Alpha( 0.05 )
);
```

**Code Explanation**:

1. Open table.
2. Define degradation analysis.
3. Set response variable.
4. Set time variable.
5. Set label variable.
6. Apply stability test.
7. Disable data markers.
8. Enable fitted lines.
9. Disable median curves.
10. Enable legend.



### Example 6
> **Summary**: Degradation analysis on temperature data, comparing Fahrenheit measurements across different thermometer types and generating various comparative visualizations.

<!-- Keywords: #DegradationAnalysis, #ThermometerComparison, #ComparativeVisualization, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Degradation(
	Y( :Crack Size ),
	Time( :Cycles ),
	Label( :Unit ),
	Connect Data Markers( 1 ),
	Show Fitted Lines( 0 ),
	Show Median Curves( 0 ),
	Show Legend( 0 ),
	No Tab List( 0 ),
	Set Upper Spec Limit( . ),
	Set Lower Spec Limit( . ),
	Set Censoring Time( . ),
	Show Residual Plot( 1 ),
	Show Inverse Prediction Plot( 1 ),
	Inverse Prediction Interval( No Interval ),
	Inverse Prediction Alpha( 0.05 ),
	Path Specifications(
		Simple Linear(
			Add Custom X Scale( {{"Linear", Function( {x}, x ), Function( {x}, x )}} ),
			Add Custom Y Scale( {{"Linear", Function( {x}, x ), Function( {x}, x )}} ),
			Slope Constaint( Different ),
			Intercept( Different ),
			Select X Scale( "Linear" ),
			Select Y Scale( "-1/x" )
		),
		Nonlinear Path
	),
	Model Report( Simple Linear Path( X Scale( Linear ), Y Scale( Name( "-1/x" ) ), Intercept( Different ), Slope( Different ) ) ),
	Simple Linear Path( 1 ),
	Mean Path( 1 ),
	Model Report( Select Model( 1 ) ),
	SendToReport( Dispatch( {"Overlay", "Model Specification"}, "Crack Size Transformation", OutlineBox, {Close( 0 )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Initiate degradation analysis.
3. Set response variable.
4. Set time variable.
5. Set label variable.
6. Connect data markers.
7. Disable fitted lines.
8. Disable median curves.
9. Disable legend.
10. Configure path specifications.



### Example 7
> **Summary**: Degradation analysis on temperature data using the Degradation platform, comparing Fahrenheit measurements across different thermometer types and generating various comparative visualizations.

<!-- Keywords: #DegradationAnalysis, #TemperatureData, #ThermometerComparison, #Visualization, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Degradation(
	Y( :Crack Size ),
	Time( :Cycles ),
	Label( :Unit ),
	Connect Data Markers( 1 ),
	Show Fitted Lines( 0 ),
	Show Spec Limits( 1 ),
	Show Median Curves( 0 ),
	Show Legend( 0 ),
	No Tab List( 0 ),
	Set Upper Spec Limit( . ),
	Set Lower Spec Limit( . ),
	Set Censoring Time( . ),
	Show Residual Plot( 1 ),
	Show Inverse Prediction Plot( 1 ),
	Inverse Prediction Interval( No Interval ),
	Inverse Prediction Alpha( 0.05 ),
	Path Specifications(
		Simple Linear(
			Add Custom X Scale( {{"Linear", Function( {x}, x ), Function( {x}, x )}} ),
			Add Custom Y Scale( {{"Linear", Function( {x}, x ), Function( {x}, x )}} ),
			Slope( Different ),
			Intercept( Different ),
			Select X Scale( "Linear" ),
			Select Y Scale( "-1" )
		),
		Nonlinear Path
	),
	Model Report( Simple Linear Path( X Scale( "Linear" ), Y Scale( "-1" ), Intercept( Different ), Slope( Different ) ) ),
	Simple Linear Path( 1 ),
	Mean Path( 1 ),
	Model Report( Select Model( 1 ) ),
	SendToReport( Dispatch( {"Overlay", "Model Specification"}, "Crack Size Transformation", OutlineBox, {Close( 0 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create degradation analysis object.
3. Set response variable.
4. Set time variable.
5. Label units.
6. Connect data markers.
7. Hide fitted lines.
8. Show spec limits.
9. Hide median curves.
10. Hide legend.



### Example 8
> **Summary**: Runs the specification and fitting of a custom linear model for degradation analysis, utilizing repeated measures and system ID-based fitting.

<!-- Keywords: #DegradationAnalysis, #CustomLinearModel, #RepeatedMeasures, #SystemIDFitting, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Degradation( Y( :Current ), Time( :Hours ), Label( :Unit ), Application( Repeated Measures Degradation ), );
obj << Specify and Fit Path(
	Formula Name( "custom linear model 1" ),
	Formula( Model Type( "Custom Linear" ), Parameter( {b0 = 0, b1 = 0, b2 = 0}, b0 + b1 * Hours + b2 * Hours ^ 2 ) ),
	Fit by System ID()
);
rpt = obj << report;
est = rpt[Number Col Edit Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Launch degradation analysis.
3. Specify custom linear model.
4. Define formula parameters.
5. Fit model by system ID.
6. Generate analysis report.
7. Extract estimate values.



### Example 9
> **Summary**: Degradation analysis on temperature data using the Degradation platform, comparing Fahrenheit measurements across different thermometer types and generating various comparative visualizations.

<!-- Keywords: #DegradationAnalysis, #TemperatureData, #ThermometerComparison, #ComparativeVisualization, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	Censor( :Censor ),
	X( :Degrees ),
	Application( Destructive Degradation ),
	Censor Code( "Right" ),
	Connect Data Markers( 0 ),
	Show Fitted Lines( 0 ),
	Show Spec Limits( 1 ),
	Show Median Curves( 1 ),
	Show Legend( 1 ),
	No Tab List( 0 ),
	Use Pooled MSE for Nonpoolable Model( 0 ),
	Set Censoring Time( . ),
	Show Residual Plot( 1 ),
	Show Inverse Prediction Plot( 1 ),
	Longitudinal Prediction Time( 52 ),
	Longitudinal Prediction Interval( Prediction Interval ),
	Longitudinal Prediction Alpha( 0.05 ),
	Inverse Prediction Interval( No Interval ),
	Inverse Prediction Alpha( 0.05 ),
	Path Specifications(
		Simple Linear(
			Add Custom X Scale( {{"Linear", Function( {x}, x ), Function( {x}, x )}} ),
			Add Custom Y Scale( {{"Linear", Function( {x}, x ), Function( {x}, x )}} ),
			Slope( Different ),
			Intercept( Different ),
			Select X Scale( "Linear" ),
			Select Y Scale( "Linear" ),
			Location Parameter Path( Lognormal )
		),
		Nonlinear Path(
			Add Formula(
				Formula Name( "Custom Model" ),
				Formula( Parameter( {b1 = 50, b2 = 50, b3 = -1}, b1 * Degrees + b2 * Exp( b3 * Sqrt( Weeks ) ) ) ),
				Initial Values( [-0.0280647947384581, 6.094714323873, -0.0323082976858807, 0.193319701159847] ),
				Lower( [-0.0354731281638972, 5.63428389791153, -0.0399644272744453, 0.149037352216101] ),
				Upper( [-0.020656461313019, 6.55514474983446, -0.0246521680973161, 0.237602050103593] ),
				Fitting Method( QuasiNewton BFGS ),
				Fixed( [0, 0, 0, 0] ),
				Location Parameter Path( Lognormal )
			),
			Select Formula( "Custom Model" ),
			Location Parameter Path( Lognormal )
		)
	),
	Nonlinear Path( 1 ),
	Location Parameter Path( 1 ),
	Set Baseline( 25 )
);
rpt = obj << report;
txt = rpt[Outline Box( "Overlay" )][Tab Page Box( 3 )][Outline Box( "Prediction Plot" )][AxisBox( 2 )] << get journal;
```

**Code Explanation**:

1. Open table.
2. Perform degradation analysis.
3. Specify response variable.
4. Define time variable.
5. Identify censor variable.
6. Include covariate.
7. Apply destructive degradation method.
8. Set censor code.
9. Disable data markers.
10. Enable spec limits.



### Example 10
> **Summary**: Degradation analysis on temperature data using the Oneway platform, comparing Fahrenheit measurements across different thermometer types and generating ANOM charts and mean diamonds.

<!-- Keywords: #DegradationAnalysis, #Oneway, #ThermometerComparison, #ANOMCharts, #MeanDiamonds -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Degradation( Y( :Current ), Time( :Hours ), Label( :Unit ), Application( Repeated Measures Degradation ) );
obj << Get Inverse Prediction Results;
```

**Code Explanation**:

1. Open table.
2. Perform degradation analysis.
3. Set response variable.
4. Set time variable.
5. Set label variable.
6. Specify application type.
7. Retrieve inverse prediction results.



### Example 11
> **Summary**: Degradation analysis on temperature data, comparing Fahrenheit measurements across different thermometer types and generating comparative visualizations using the Degradation platform.

<!-- Keywords: #Degradation, #RepeatedMeasuresModel, #CensoringTime, #UpperLowerSpecLimits, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dg = dt << Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Application( Repeated Measures Degradation ),
	Upper Spec Limit( 0 ),
	Lower Spec Limit( -1.45 ),
	Censoring Time( 4001 )
);
bef = N Items( Window() );
dg << Relaunch Analysis;
wn = Window()[bef + 1];
rm = wn[Tab Page Box( 1 )];
```

**Code Explanation**:

1. Open data table.
2. Initiate degradation analysis.
3. Set response variable.
4. Define time variable.
5. Specify label variable.
6. Include covariate.
7. Choose repeated measures model.
8. Set upper spec limit.
9. Set lower spec limit.
10. Define censoring time.



### Example 12
> **Summary**: Degradation analysis on temperature data, comparing Fahrenheit measurements across different thermometer types and generating various comparative visualizations.

<!-- Keywords: #DegradationAnalysis, #TemperatureData, #ThermometerComparison, #ComparativeVisualization, #JMPScriptingLanguage -->

**Code**:
```jsl
stab = Open("data_table.jmp");
dg = stab << Degradation(
	Y( :Name( "Concentration (mg/Kg)" ) ),
	Time( :Time ),
	Label( :Batch Number ),
	Upper Spec Limit( 110 ),
	Lower Spec Limit( 99 ),
	Application( Stability Test )
);
bef = N Items( Window() );
dg << Relaunch Analysis;
wn = Window()[bef + 1];
st = wn[Tab Page Box( 3 )];
```

**Code Explanation**:

1. Open data table.
2. Launch Degradation platform.
3. Set response variable.
4. Set time variable.
5. Set label variable.
6. Define upper spec limit.
7. Define lower spec limit.
8. Specify application type.
9. Count initial windows.
10. Relaunch analysis.
11. Access new window.
12. Select third tab page.



### Example 13
> **Summary**: Degradation analysis on temperature data, comparing Fahrenheit measurements across different thermometer types and generating various comparative visualizations.

<!-- Keywords: #DegradationAnalysis, #RepeatedMeasures, #LongitudinalPrediction, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( Repeated Measures Degradation ),
	Connect Data Markers( 1 ),
	Show Fitted Lines( 0 ),
	Show Median Curves( 0 ),
	Show Legend( 0 ),
	Set Upper Spec Limit( . ),
	Set Lower Spec Limit( . ),
	Set Censoring Time( . ),
	Show Residual Plot( 1 ),
	Show Inverse Prediction Plot( 1 ),
	Inverse Prediction Interval( No Interval ),
	Inverse Prediction Alpha( 0.05 ),
	Path Specifications(
		Simple Linear(
			Add Custom X Scale( {{"Linear", Function( {x}, x ), Function( {x}, x )}} ),
			Add Custom Y Scale( {{"Linear", Function( {x}, x ), Function( {x}, x )}} ),
			Slope Constaint( Different ),
			Intercept( Different ),
			Select X Scale( "Linear" ),
			Select Y Scale( "Linear" )
		),
		Nonlinear Path
	),
	Simple Linear Path( 1 ),
	Mean Path( 1 )
);
rpt = obj << report;
tm = 500 :: 2000 :: 500;
For( i = 1, i <= N Cols( tm ), i++,
	obj << Longitudinal Prediction Time( tm[i] );
	txt = rpt[Outline Box( "Prediction Plot" )][Text Box( 3 )] << get text;
);
```

**Code Explanation**:

1. Open data table.
2. Perform degradation analysis.
3. Set response variable.
4. Set time variable.
5. Set label variable.
6. Choose repeated measures application.
7. Connect data markers.
8. Hide fitted lines.
9. Hide median curves.
10. Hide legend.



### Example 14
> **Summary**: Selects and analyzes temperature data from different thermometer types, utilizing the Degradation platform to generate ANOM charts and mean diamonds.

<!-- Keywords: #Degradation, #TemperatureDataAnalysis, #ThermometerTypes, #ANOMCharts, #MeanDiamonds -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Degradation();
For( i = N Items( Window() ), i >= 1, i--,
	lnchWin = (Window()[i]);
	winTtl = lnchWin << get window title;
	If( winTtl == "Degradation Data Analysis",
		Break()
	);
);
```

**Code Explanation**:

1. Open data table.
2. Access Degradation platform.
3. Loop through all windows.
4. Get current window title.
5. Check for "Degradation Data Analysis".
6. Break loop if title matches.
7. End loop.



### Example 15
> **Summary**: Degradation analysis on temperature data, comparing Fahrenheit measurements across different thermometer types and generating various comparative visualizations, including ANOM charts and mean diamonds.

<!-- Keywords: #DegradationAnalysis, #RepeatedMeasures, #ComparativeVisualization, #ThermometerData, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Application( Repeated Measures Degradation ),
	Connect Data Markers( 1 ),
	Show Fitted Lines( 0 ),
	Show Spec Limits( 1 ),
	Show Median Curves( 0 ),
	Show Legend( 0 ),
	No Tab List( 0 ),
	Set Upper Spec Limit( . ),
	Set Lower Spec Limit( . ),
	Set Censoring Time( . ),
	Show Residual Plot( 1 ),
	Show Inverse Prediction Plot( 1 ),
	Inverse Prediction Interval( No Interval ),
	Inverse Prediction Alpha( 0.05 ),
	Path Specifications(
		Simple Linear(
			Add Custom X Scale( {{"Linear", Function( {x}, x ), Function( {x}, x )}} ),
			Add Custom Y Scale( {{"Linear", Function( {x}, x ), Function( {x}, x )}} ),
			Slope( Different ),
			Intercept( Different ),
			Select X Scale( "Linear" ),
			Select Y Scale( "Linear" )
		),
		Nonlinear Path
	),
	Simple Linear Path( 1 ),
	Mean Path( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Perform degradation analysis.
3. Set response variable.
4. Set time variable.
5. Set label variable.
6. Set covariate variable.
7. Specify repeated measures model.
8. Enable data marker connection.
9. Disable fitted lines display.
10. Enable spec limits display.



### Example 16
> **Summary**: Degradation analysis on temperature data, comparing Fahrenheit measurements across different thermometer types and generating various comparative visualizations, including ANOM charts and mean diamonds.

<!-- Keywords: #DegradationAnalysis, #ThermometerComparison, #ANOVA, #Visualization, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	Censor( :Censor ),
	X( :Degrees ),
	Application( Destructive Degradation ),
	Censor Code( "Right" ),
	Connect Data Markers( 0 ),
	Show Fitted Lines( 0 ),
	Show Spec Limits( 1 ),
	Show Median Curves( 1 ),
	Show Legend( 1 ),
	No Tab List( 0 ),
	Set Upper Spec Limit( . ),
	Set Lower Spec Limit( . ),
	Set Censoring Time( . ),
	Show Residual Plot( 1 ),
	Show Inverse Prediction Plot( 1 ),
	Inverse Prediction Interval( No Interval ),
	Inverse Prediction Alpha( 0.05 ),
	Path Specifications(
		Nonlinear Path(
			Add Formula(
				Formula Name( "custom model" ),
				Formula(
					Parameter(
						{a1 = 50, a2 = 50, a3 = 50, b = 50, c = -1},
						(:Degrees == 50) * a1 + (:Degrees == 60) * a2 + (:Degrees == 70) * a3 + b * Exp( c * :Weeks )
					)
				),
				Initial Values(
					[3.9940336536756, 3.78758378705772, 3.44050130448918, 0.695135749339572, -0.274485502043071, 0.187832949250086]
				),
				Lower( [3.84797499317043, 3.63164497538109, 3.26979047511123, 0.532188177264295, -0.464822227355543, 0.144922009003584] ),
				Upper( [4.14009231418076, 3.94352259873435, 3.61121213386713, 0.85808332141485, -0.0841487767305982, 0.230743889496588] ),
				Fitting Method( QuasiNewton BFGS ),
				Fixed( [0, 0, 0, 0, 0, 0] ),
				Location Parameter Path( Lognormal )
			),
			Select Formula( "custom model" ),
			Location Parameter Path( Lognormal )
		)
	),
	Model Report( Nonlinear Path( custom model ) ),
	Nonlinear Path( 1 ),
	Location Parameter Path( 1 ),
	Model Report( Select Model( 1 ) )
);
rpt = obj << report;
distProfJrn = rpt[Outline Box( "Model 1 - custom model" )][Outline Box( "Distribution Profiler" )] << get journal;
```

**Code Explanation**:

1. Open data table.
2. Perform degradation analysis.
3. Specify response variable.
4. Define time variable.
5. Identify censor variable.
6. Include covariate.
7. Set application type.
8. Define censor code.
9. Configure plot options.
10. Generate distribution profiler.



### Example 17
> **Summary**: Degradation analysis on temperature data using the Degradation platform, comparing Fahrenheit measurements across different thermometer types and generating various comparative visualizations.

<!-- Keywords: #Degradation, #JMPScriptingLanguage, #TemperatureDataAnalysis, #ComparativeVisualization, #ThermometerTypes -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	Label( :Degrees ),
	Application( Repeated Measures Degradation ),
	Model Report( Simple Linear Path( X Scale( Linear ), Y Scale( Linear ), Intercept( Common ), Slope( Different ) ) )
);
obj << Automatic Recalc( 1 );
obj << Save Script to Script Window;
For( i = 1, i <= N Items( Window() ), i++,
	If( Window()[i] << get window title == "Script Window",
		lc = ((Window()[i][Script Box( 1 )] << Get Text()));
		Window()[i] << Close Window();
		Break();
	)
);
```

**Code Explanation**:

1. Open table.
2. Run degradation analysis.
3. Set response variable.
4. Set time variable.
5. Set label variable.
6. Specify application type.
7. Define model report.
8. Enable automatic recalculation.
9. Save script to window.
10. Extract and close script window.



### Example 18
> **Summary**: Degradation analysis on temperature data, comparing Fahrenheit measurements across different thermometer types and generating various comparative visualizations.

<!-- Keywords: #DegradationAnalysis, #RepeatedMeasures, #ThermometerComparison, #FahrenheitMeasurements, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Degradation(
	Y( :Percent Increase ),
	Time( :kHours ),
	Label( :Resistor ),
	X( :Degrees C ),
	Application( Repeated Measures Degradation ), 
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data_table data
2. Initiate Degradation analysis.
3. Set Percent Increase as response.
4. Use kHours as time variable.
5. Label results by Resistor.
6. Include Degrees C as covariate.
7. Apply Repeated Measures model.
8. Generate analysis report.



## Degradation using Random Reset
> **Summary**: Degradation analysis to visualize the strength of a material over time, accounting for censoring and incorporating predictor variables.

<!-- Keywords: #DegradationAnalysis, #JMPScriptingLanguage, #TimeSeriesPlotting, #Censoring, #PredictorVariables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 5 );
Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	Censor( :Censor ),
	X( :Degrees ),
	Application( Destructive Degradation ),
	Censor Code( "Right" ),
	Connect Data Markers( 0 ),
	Show Fitted Lines( 0 ),
	Show Spec Limits( 1 ),
	Show Median Curves( 1 ),
	Show Legend( 1 ),
	No Tab List( 0 ),
	Set Upper Spec Limit( . ),
	Set Lower Spec Limit( . ),
	Set Censoring Time( . ),
	Show Residual Plot( 1 ),
	Show Inverse Prediction Plot( 1 ),
	Inverse Prediction Interval( No Interval ),
	Inverse Prediction Alpha( 0.05 ),
	Path Specifications(
		Simple Linear(
			Add Custom X Scale( {{"Linear", Function( {x}, x ), Function( {x}, x )}} ),
			Add Custom Y Scale( {{"Linear", Function( {x}, x ), Function( {x}, x )}} ),
			Slope( Different ),
			Intercept( Different ),
			Select X Scale( "Linear" ),
			Select Y Scale( "Linear" ),
			Location Parameter Path( Normal )
		),
		Nonlinear Path
	),
	Simple Linear Path( 1 ),
	Location Parameter Path( 1 ),
	SendToReport(
		Dispatch( {"Overlay"}, "1", ScaleBox, {Format( "Custom", Formula( Char( In Weeks( value ) ) || " (s)" ), 12 )} ),
		Dispatch( {"Overlay", "Strength Residuals by Weeks"}, "7", ScaleBox,
			{Format( "Custom", Formula( If( Abs( value ) > 1, "big", "small" ) ), 12 )}
		),
		Dispatch( {"Overlay", "Strength Residuals by Weeks"}, "13", ScaleBox,
			{Format( "Custom", Formula( If( Abs( value ) > 1, "big", "small" ) ), 12 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Reset random seed.
3. Define degradation analysis.
4. Specify response variable.
5. Specify time variable.
6. Specify censor variable.
7. Specify predictor variable.
8. Choose destructive degradation method.
9. Set censoring type.
10. Configure plot settings.



## Degradation using Set Values
### Example 1
> **Summary**: Creates and creates a report for a degradation analysis, utilizing the Degradation platform in JMP to visualize and analyze strength data over time.

<!-- Keywords: #JMP, #DegradationAnalysis, #StrengthData, #TimeSeries, #Reporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Strength << Set Values( {0, 0, 0} );
obj = Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	Censor( :Censor ),
	X( :Degrees ),
	Application( Destructive Degradation ),
	Censor Code( "Right" ),
	Connect Data Markers( 0 ),
	Show Fitted Lines( 0 ),
	Show Spec Limits( 1 ),
	Show Median Curves( 1 ),
	Show Legend( 1 ),
	No Tab List( 0 ),
	Set Upper Spec Limit( . ),
	Set Lower Spec Limit( . ),
	Set Censoring Time( . ),
	Show Residual Plot( 1 ),
	Show Inverse Prediction Plot( 1 ),
	Inverse Prediction Interval( No Interval ),
	Inverse Prediction Alpha( 0.05 ),
	Path Specifications(
		Simple Linear(
			Add Custom X Scale( {{"Linear", Function( {x}, x ), Function( {x}, x )}} ),
			Add Custom Y Scale( {{"Linear", Function( {x}, x ), Function( {x}, x )}} ),
			Slope( Different ),
			Intercept( Different ),
			Select X Scale( "Linear" ),
			Select Y Scale( "Linear" ),
			Location Parameter Path( Normal )
		),
		Nonlinear Path
	),
	Simple Linear Path( 1 ),
	Location Parameter Path( 1 )
);
rpt1 = obj << report;
expr1 = rpt1 << get journal;
```

**Code Explanation**:

1. Open table.
2. Set Strength values.
3. Create degradation object.
4. Define Y variable.
5. Define Time variable.
6. Define Censor variable.
7. Define X variable.
8. Set application type.
9. Set censor code.
10. Generate report.



### Example 2
> **Summary**: Creates a Degradation report with specified Strength values, censoring information, and predictor variables.

<!-- Keywords: #JMPScriptingLanguage, #DegradationModel, #Censoring, #PredictorVariables, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Strength << Set Values( {0, 0, 0} );
:Strength << Set Property( "Missing Value Codes", 0 );
obj2 = Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	Censor( :Censor ),
	X( :Degrees ),
	Application( Destructive Degradation ),
	Censor Code( "Right" ),
	Connect Data Markers( 0 ),
	Show Fitted Lines( 0 ),
	Show Spec Limits( 1 ),
	Show Median Curves( 1 ),
	Show Legend( 1 ),
	No Tab List( 0 ),
	Set Upper Spec Limit( . ),
	Set Lower Spec Limit( . ),
	Set Censoring Time( . ),
	Show Residual Plot( 1 ),
	Show Inverse Prediction Plot( 1 ),
	Inverse Prediction Interval( No Interval ),
	Inverse Prediction Alpha( 0.05 ),
	Path Specifications(
		Simple Linear(
			Add Custom X Scale( {{"Linear", Function( {x}, x ), Function( {x}, x )}} ),
			Add Custom Y Scale( {{"Linear", Function( {x}, x ), Function( {x}, x )}} ),
			Slope( Different ),
			Intercept( Different ),
			Select X Scale( "Linear" ),
			Select Y Scale( "Linear" ),
			Location Parameter Path( Normal )
		),
		Nonlinear Path
	),
	Simple Linear Path( 1 ),
	Location Parameter Path( 1 )
);
rpt2 = obj2 << Report;
```

**Code Explanation**:

1. Open data table.
2. Set Strength values to 0.
3. Define 0 as missing value code.
4. Create Degradation object.
5. Specify Strength as response variable.
6. Set Weeks as time variable.
7. Use Censor for censoring information.
8. Include Degrees as predictor.
9. Apply destructive degradation model.
10. Generate report.



## Degradation using Log Capture
### Example 1
> **Summary**: Degradation analysis to visualize the relationship between Current and Hours, with interactive plot options and residual/inverse prediction plots.

<!-- Keywords: #JMPScriptingLanguage, #DegradationAnalysis, #LogCapture, #DataVisualization, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
lc = Log Capture(
	dg = dt << Degradation(
		Y( :Current ),
		Time( :Hours ),
		Label( :Unit ),
		Application( Repeated Measures Degradation ),
		Connect Data Markers( 1 ),
		Show Fitted Lines( 0 ),
		Show Median Curves( 0 ),
		Show Legend( 0 ),
		Set Upper Spec Limit( . ),
		Set Lower Spec Limit( . ),
		Set Censoring Time( . ),
		Show Residual Plot( 1 ),
		Show Inverse Prediction Plot( 1 ),
		Inverse Prediction Interval( No Interval ),
		Inverse Prediction Alpha( 0.05 ),
		Path Specifications(
			Simple Linear(
				Add Custom X Scale( {{"Linear", Function( {x}, x ), Function( {x}, x )}} ),
				Add Custom Y Scale( {{"Linear", Function( {x}, x ), Function( {x}, x )}} ),
				Slope Constaint( Different ),
				Intercept( Different ),
				Select X Scale( "Linear" ),
				Select Y Scale( "Linear" )
			),
			Nonlinear Path
		),
		Simple Linear Path( 1 ),
		Mean Path( 1 )
	)
);
dg << Automatic Recalc( 1 );
dt << Select Rows( 1 :: 25 ) << Name( "Exclude/Unexclude" );
dg << Set Lower Spec Limit( 0 );
dg << Set Upper Spec Limit( 6 );
dg << Set Censoring Time( 6 );
ndt = dg << Generate Pseudo Failure Data( 0 );
Close( ndt, No Save );
ndt2 = dg << Generate Pseudo Failure Data( 1, .05 );
```

**Code Explanation**:

1. Open data table.
2. Start log capture.
3. Create degradation analysis.
4. Set response variable.
5. Set time variable.
6. Set label variable.
7. Specify application type.
8. Configure plot options.
9. Enable residual plot.
10. Enable inverse prediction plot.



### Example 2
> **Summary**: Creates a degradation plot with custom settings, including pseudo failure data generation and interactive filtering.

<!-- Keywords: #JMPScriptingLanguage, #DegradationPlot, #PseudoFailureData, #InteractiveFiltering, #CustomSettings -->

**Code**:
```jsl
dt = Open("data_table.jmp");
lc = Log Capture(
	dg = dt << Degradation(
		Y( :Current ),
		Time( :Hours ),
		Label( :Unit ),
		Application( Repeated Measures Degradation ),
		Connect Data Markers( 1 ),
		Show Fitted Lines( 0 ),
		Show Median Curves( 0 ),
		Show Legend( 0 ),
		Set Upper Spec Limit( . ),
		Set Lower Spec Limit( . ),
		Set Censoring Time( . ),
		Show Residual Plot( 1 ),
		Show Inverse Prediction Plot( 1 ),
		Inverse Prediction Interval( No Interval ),
		Inverse Prediction Alpha( 0.05 ),
		Path Specifications(
			Simple Linear(
				Add Custom X Scale( {{"Linear", Function( {x}, x ), Function( {x}, x )}} ),
				Add Custom Y Scale( {{"Linear", Function( {x}, x ), Function( {x}, x )}} ),
				Slope Constaint( Different ),
				Intercept( Different ),
				Select X Scale( "Linear" ),
				Select Y Scale( "Linear" )
			),
			Nonlinear Path
		),
		Simple Linear Path( 1 ),
		Mean Path( 1 )
	)
);
dg << Automatic Recalc( 1 );
dt << Select Rows( 1 :: 25 ) << Name( "Exclude/Unexclude" );
dg << Set Lower Spec Limit( 0 );
dg << Set Upper Spec Limit( 6 );
dg << Set Censoring Time( 6 );
ndt = dg << Generate Pseudo Failure Data( 0 );
```

**Code Explanation**:

1. Open table.
2. Create degradation plot.
3. Set Y variable.
4. Set Time variable.
5. Set Label variable.
6. Choose application type.
7. Configure plot settings.
8. Enable residual plot.
9. Enable inverse prediction plot.
10. Generate pseudo failure data.



## Degradation using New Column
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot to analyze reactor data, utilizing degradation analysis and inverse prediction.

<!-- Keywords: #JSLScriptingLanguage, #DegradationAnalysis, #InversePrediction, #LeastSquaresModel, #ReactorData -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "extrapolation",
	Set Formula(
		If(
			Lag( :Device, 1 ) == :Device & (Lag( :Power Drop, 1 ) > -.75 > :Power Drop),
				(-.75 - Lag( :Power Drop, 1 )) / (:Power Drop - Lag( :Power Drop, 1 )) * (:Hours - Lag( :Hours, 1 )) + Lag( :Hours, 1 ),
			Lag( :Device, -1 ) != :Device & :Power Drop > -.75, :Hours,
			.
		)
	)
);
dg = dt << Degradation( Y( :Power Drop ), Time( :Hours ), Label( :Device ), X( :Degrees C ), Application( Repeated Measures Degradation ) );
rp = Report( dg );
dg << Set Lower Spec Limit( -.75 ) << Inverse Prediction( 1 );
dg << Save Crossing Time;
rdt1 = Data Table( 1 );
pred1 = rdt1:Prediction << get values;
```

**Code Explanation**:

1. Open data table.
2. Create new column.
3. Define formula for extrapolation.
4. Perform degradation analysis.
5. Generate report.
6. Set lower specification limit.
7. Perform inverse prediction.
8. Save crossing time.
9. Retrieve first data table.
10. Extract prediction values.



## Degradation using Select Where
### Example 1
> **Summary**: Degradation analysis and stability testing on a subset of data, utilizing the Degradation platform to generate reports and extract key metrics.

<!-- Keywords: #JMPScriptingLanguage, #DegradationAnalysis, #StabilityTesting, #DataSubsetting, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :Hours == 250 );
dtsub = dt << Subset( Selected Rows( 1 ) );
dg = dtsub << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Upper Spec Limit( .8 ),
	Application( Repeated Measures Degradation )
);
obtry = Try(
	Report( dg )["Model Specification"];
	1;
,
	0
);
If( JMP Version() >= "12",
	rpt = (Report( dg )["Inverse Prediction"] << child());
	obj = rpt["Inverse Prediction"] << get scriptable object;
	ctime = obj << save crossing time;
	m = ctime << get as matrix;
	d = dtsub << get as matrix;
	c = .8 / (d[0, 1] :/ d[0, 3]);
	Close( ctime, No Save );
);
Close( dt, No Save );
Close( dtsub, No Save );
dt = New Table( "Test",
	New Column( "Time", Values( [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5] ) ),
	New Column( "Concentration", Values( [100, 97, 95, 94, 90, 100, 97, 95, 94, 90, 100, 97, 95, 94, 90] ) ),
	New Column( "Batch", Nominal, Values( [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3] ) )
);
dg = dt << Degradation(
	Y( :Concentration ),
	Time( :Time ),
	Label( :Batch ),
	Application( Repeated Measures Degradation ),
	Set Lower Spec Limit( 90 )
);
dg << Test Stability;
ect = Report( dg )["Stability Tests"][Number Col Box( "Earliest Crossing Time" )] << get as matrix;
mctab = Report( dg )["Stability Tests"][Panel Box( 1 )][Table Box( 1 )] << get as matrix;
mctab exp = [4 0 0 0 1, 2 0 0 0 1, 2 0 0 0 1, 9 5.70000000000003 0.633333333333336 . ., 6 136104.3 22684.05 . .];
sel = Report( dg )["Stability Tests"][Radio Box( 1 )] << get;
```

**Code Explanation**:

1. Open data table.
2. Select rows where Hours=250.
3. Create subset of selected rows.
4. Perform degradation analysis.
5. Try accessing model specification report.
6. Check JMP version compatibility.
7. Extract inverse prediction report.
8. Get scriptable object from report.
9. Save crossing time data.
10. Close temporary tables without saving.
11. Create new test data table.
12. Perform degradation analysis on new data.
13. Run stability test.
14. Extract earliest crossing time.
15. Extract stability test results matrix.
16. Compare extracted matrix with expected values.
17. Retrieve radio box selection from report.



### Example 2
> **Summary**: Degradation analysis on a subset of data, specifying the response variable, time variable, label variable, and upper spec limit.

<!-- Keywords: #DegradationAnalysis, #JSLScriptingLanguage, #DataSubset, #RepeatedMeasures, #ModelSpecification -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :Hours == 250 );
dtsub = dt << Subset( Selected Rows( 1 ) );
dg = dtsub << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Upper Spec Limit( .8 ),
	Application( Repeated Measures Degradation )
);
obtry = Try(
	Report( dg )["Model Specification"];
	1;
,
	0
);
```

**Code Explanation**:

1. Open data table.
2. Select rows where Hours equals 250.
3. Subset selected rows.
4. Create degradation analysis.
5. Set response variable to Current.
6. Set time variable to Hours.
7. Set label variable to Unit.
8. Set upper spec limit to 0.8.
9. Specify application type.
10. Try to access model specification report.



## Degradation using Column
> **Summary**: Runs the destructive degradation analysis for a dataset, generating reports with negative log-likelihood, AICc, BIC, and standard error values.

<!-- Keywords: #JSLScriptingLanguage, #DestructiveDegradationAnalysis, #ReportGeneration, #StatisticalModeling, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "Degrees" ) << Set Property( "Missing Value Codes", {60} );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	Censor( :Censor ),
	X( :Degrees ),
	Censor Code( "Right" ),
	Model( "Log", "Sqrt", "Normal", "Common Slope" )
);
rpt = obj << report;
nllk = rpt[Number Col Box( "-Loglikelihood" )] << get as matrix;
aicc = rpt[Number Col Box( "AICc" )] << get as matrix;
bic = rpt[Number Col Box( "BIC" )] << get as matrix;
stdErr = rpt[Number Col Box( "Std Error" )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Set missing value code.
3. Run destructive degradation analysis.
4. Assign report object.
5. Extract negative log-likelihood.
6. Extract AICc value.
7. Extract BIC value.
8. Extract standard error.



