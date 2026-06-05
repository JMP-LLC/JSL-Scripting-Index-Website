# Variability Chart

### Example 1
> **Summary**: Generates a Variability Chart to analyze the relationship between Ship event and Lot, using a nested model with 100 maximum iterations and a convergence limit of 0.00000001.

<!-- Keywords: #VariabilityChart, #NestedModel, #JMPScriptingLanguage, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// Variability Chart
// Open data table
dt = Open("data_table.jmp");
// Variability Chart
Variability Chart(
	Y( :X ),
	X( :Ship event, :Lot ),
	Model( "Nested" ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type(
		"Choose best analysis (EMS REML Bayesian)"n
	),
	Std Dev Chart( 1 ),
	Gauge RR Report( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set response variable.
4. Set factor variables.
5. Specify nested model.
6. Set maximum iterations.
7. Set convergence limit.
8. Set number of abscissas.
9. Set number of function evaluations.
10. Choose best analysis method.



### Example 2
> **Summary**: Generates a Variability Chart to analyze the relationship between Comb MPG and Mfr Name/Engine, with customization options for max iterations, convergence limit, and report settings.

<!-- Keywords: #VariabilityChart, #JSLScriptingLanguage, #DataAnalysis, #CustomizationOptions, #ReportSettings -->

**Code**:
```jsl
// Variability Chart
// Open data table
dt = Open("data_table.jmp");
// Variability Chart
Variability Chart(
	Y( :Comb MPG ),
	X( :Mfr Name, :Engine ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type(
		"Choose best analysis (EMS REML Bayesian)"n
	),
	Process Variation( 0 ),
	Std Dev Chart( 0 ),
	Show Box Plots( 1 ),
	SendToReport(
		Dispatch(
			{
			"Variability Chart for Comb MPG"
			}, "", NomAxisBox( 2 ),
			{Set Width( 539 ),
			Set Height( 161 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set Y variable.
4. Set X variables.
5. Define max iterations.
6. Set convergence limit.
7. Specify number of abscissas.
8. Define number of function evaluations.
9. Choose analysis type.
10. Configure report settings.



### Example 3
> **Summary**: Generates a Variability Chart to analyze the relationship between Shrinkage and Temperature/Casting, using a nested model with specified iteration limits and convergence criteria.

<!-- Keywords: #VariabilityChart, #NestedModel, #JMPScriptingLanguage, #DataAnalysis, #ProcessVariation -->

**Code**:
```jsl
// Variability Chart
// Open data table
dt = Open("data_table.jmp");
// Variability Chart
Variability Chart(
	Y( :Shrinkage ),
	X( :Temperature, :Casting ),
	Model( "Nested" ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type(
		"Choose best analysis (EMS REML Bayesian)"n
	),
	Process Variation( 0 ),
	Std Dev Chart( 1 ),
	Variance Components( 1 ),
	SendToReport(
		Dispatch( {},
			"Variability Chart for Shrinkage",
			OutlineBox,
			{Close( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create variability chart.
3. Set response variable.
4. Set factor variables.
5. Choose nested model.
6. Set maximum iterations.
7. Set convergence limit.
8. Set integration abscissas.
9. Set function evaluations.
10. Analyze with best method.



### Example 4
> **Summary**: Generates a Variability Chart of Fill Weight by Sample, utilizing the Open data table function and specifying various parameters for the chart, including max iterations, convergence limit, and analysis type.

<!-- Keywords: #VariabilityChart, #FillWeight, #Sample, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
// Variability Chart of Fill Weight by Sample
// Open data table
dt = Open("data_table.jmp");
// Variability Chart of Fill Weight by Sample
Variability Chart(
	Y( :Fill Weight ),
	X( :Sample ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type(
		"Choose best analysis (EMS REML Bayesian)"
	),
	Std Dev Chart( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set Y variable.
4. Set X variable.
5. Set max iterations.
6. Set convergence limit.
7. Set number of abscissas.
8. Set number of function evaluations.
9. Choose analysis type.
10. Display standard deviation chart.



### Example 5
> **Summary**: Generates a Variability Chart to analyze Tip Percentage by Day, with customization options for max iterations, convergence limit, and report settings.

<!-- Keywords: #VariabilityChart, #TipPercentage, #DayofWeek, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
// Variability Chart: Tip % by Day
// Open data table
dt = Open("data_table.jmp");
// Variability Chart: Tip % by Day
Variability Chart(
	Y( :Tip Percentage ),
	X( :Day of Week ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type(
		"Choose best analysis (EMS REML Bayesian)"n
	),
	Process Variation( 0 ),
	Std Dev Chart( 1 ),
	Mean Diamonds( 1 ),
	SendToReport(
		Dispatch(
			{
			"Variability Chart for Tip Percentage"
			}, "2", ScaleBox,
			{Min( 5 ), Max( 45 ),
			Inc( 10 ), Minor Ticks( 1 ),
			Rotated Labels(
				"Horizontal"
			)}
		),
		Dispatch(
			{
			"Variability Chart for Tip Percentage"
			}, "Variability Chart",
			FrameBox,
			{Frame Size( 480, 323 ),
			Grid Line Order( 3 ),
			Reference Line Order( 4 )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create variability chart.
3. Set Y variable.
4. Set X variable.
5. Configure max iterations.
6. Set convergence limit.
7. Define integration abscissas.
8. Set function evaluations.
9. Choose analysis type.
10. Customize report settings.



### Example 6
> **Summary**: Generates a Variability Chart to analyze Tip Percentage by Day within Server, utilizing various configuration options such as Max Iterations, Convergence Limit, and Number Integration Abscissas.

<!-- Keywords: #VariabilityChart, #TipPercentage, #Server, #DayOfWeek, #JMPScriptingLanguage -->

**Code**:
```jsl
// Variability Chart: Tip % by Day within Server
// Open data table
dt = Open("data_table.jmp");
// Variability Chart: Tip % by Day within Server
Variability Chart(
	Y( :Tip Percentage ),
	X( :Server, :Day of Week ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type(
		"Choose best analysis (EMS REML Bayesian)"n
	),
	Process Variation( 0 ),
	Std Dev Chart( 1 ),
	Mean Diamonds( 1 ),
	SendToReport(
		Dispatch(
			{
			"Variability Chart for Tip Percentage"
			}, "2", ScaleBox,
			{Min( 5 ), Max( 45 ),
			Inc( 10 ), Minor Ticks( 1 ),
			Rotated Labels(
				"Horizontal"
			)}
		),
		Dispatch(
			{
			"Variability Chart for Tip Percentage"
			}, "Variability Chart",
			FrameBox,
			{Frame Size( 576, 360 ),
			Marker Size( 1 ),
			Grid Line Order( 3 ),
			Reference Line Order( 4 )}
		),
		Dispatch(
			{
			"Variability Chart for Tip Percentage"
			}, "", NomAxisBox( 2 ),
			{Set Width( 576 ),
			Set Height( 45 )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create variability chart.
3. Set Y variable.
4. Set X variables.
5. Configure iterations.
6. Set convergence limit.
7. Define integration abscissas.
8. Define function evaluations.
9. Choose analysis type.
10. Customize chart appearance.



### Example 7
> **Summary**: Opens a data table, creates a Variability Chart with fahrenheit as the response variable and volunteer and sector as factor variables, and disables process variation while enabling standard deviation chart.

<!-- Keywords: #VariabilityChart, #JSLScriptingLanguage, #DataAnalysis, #StatisticalModeling, #JMP -->

**Code**:
```jsl
// Variability Chart - Volunteers
// Open data table
dt = Open("data_table.jmp");
// Variability Chart - Volunteers
Variability Chart(
	Y( :fahrenheit ),
	X( :volunteer, :sector ),
	Analysis Type(
		"Choose best analysis (EMS REML Bayesian)"n
	),
	Process Variation( 0 ),
	Std Dev Chart( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set response variable.
4. Set factor variables.
5. Choose best analysis method.
6. Disable process variation.
7. Enable standard deviation chart.



### Example 8
> **Summary**: This script creates a Variability Chart to analyze the relationship between Measurement, Operator, and part#, with options for choosing the best analysis method and displaying standard deviation charts.

<!-- Keywords: #VariabilityChart, #JSLScriptingLanguage, #DataAnalysis, #StatisticalModeling, #JMP -->

**Code**:
```jsl
// Variability Chart
// Open data table
dt = Open("data_table.jmp");
// Variability Chart
Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Analysis Type(
		"Choose best analysis (EMS REML Bayesian)"n
	),
	Standard( :Standard ),
	Process Variation( 0 ),
	Std Dev Chart( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set measurement variable.
4. Set operator variable.
5. Set part number variable.
6. Choose best analysis method.
7. Set standard variable.
8. Set process variation to zero.
9. Enable standard deviation chart.



### Example 9
> **Summary**: Visualizes the relationship between Operator and Part variables in a nested Variability Chart, with points scaled by standard deviation and colored based on the Y variable.

<!-- Keywords: #VariabilityChart, #NestedVarianceComponents, #StandardDeviation, #DataVisualization, #JMPScriptingLanguage -->

**Code**:
```jsl
// Variability Chart - Nested
// Open data table
dt = Open("data_table.jmp");
// Variability Chart - Nested
Variability Chart(
	Y( :" Y"n ),
	X( :Operator, :Part ),
	Variance Components( "Nested" ),
	Show Points( 1 ),
	Std Dev Chart( 1 )
);
```

**Code Explanation**:

1. Open table.
2. Create variability chart.
3. Set Y variable.
4. Set X variables.
5. Use nested variance components.
6. Show data points.
7. Enable standard deviation chart.



### Example 10
> **Summary**: Opens a data table, creates a Variability Chart with crossed and nested factors, and displays standard deviation charts for the specified variables.

<!-- Keywords: #VariabilityChart, #CrossedAndNestedFactors, #StandardDeviation, #DataVisualization, #JMPScriptingLanguage -->

**Code**:
```jsl
// Variability Chart - Crossed & Nested
// Open data table
dt = Open("data_table.jmp");
// Variability Chart - Crossed & Nested
Variability Chart(
	Y( :Y ),
	X( :Operator, :Instrument, :Part ),
	Show Points( 1 ),
	Std Dev Chart( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set Y variable.
4. Set X variables.
5. Show data points.
6. Display standard deviation chart.



### Example 11
> **Summary**: Generates a Variability Chart for the new Y response variable, with factors Instrument, Operator, and Part, using a Crossed model and specifying maximum iterations, convergence limit, integration abscissas, and function evaluations.

<!-- Keywords: #VariabilityChart, #CrossedModel, #JSLScriptingLanguage, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// Variability Chart of new Y
// Open data table
dt = Open("data_table.jmp");
// Variability Chart of new Y
Variability Chart(
	Y( :new Y ),
	X( :Instrument, :Operator, :Part ),
	Model( "Crossed" ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type(
		"Choose best analysis (EMS REML Bayesian)"
	),
	Connect Cell Means( 1 ),
	Show Group Means( 1 ),
	Std Dev Chart( 1 ),
	SendToReport(
		Dispatch(
			{
			"Variability Chart for new Y"
			}, "Variability Chart",
			FrameBox,
			{Grid Line Order( 6 ),
			Reference Line Order( 7 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set response variable.
4. Define factor variables.
5. Specify crossed model.
6. Set maximum iterations.
7. Define convergence limit.
8. Configure integration abscissas.
9. Set function evaluations.
10. Choose best analysis method.



### Example 12
> **Summary**: Generates a Gauge R&R analysis using the Variability Chart function in JMP, which visualizes and calculates variability components for nested and crossed factors.

<!-- Keywords: #GaugeRnR, #VariabilityChart, #JMPScriptingLanguage, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// Gauge R&R
// Open data table
dt = Open("data_table.jmp");
// Gauge R&R
Variability Chart(
	Y( :Y ),
	X( :Operator, :Instrument, :Part ),
	Model( "Nested then Crossed" ),
	Connect Cell Means( 1 ),
	Mean of Std Dev( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set response variable.
4. Set factor variables.
5. Choose nested model.
6. Enable cell means connection.
7. Display mean of standard deviation.



### Example 13
> **Summary**: Creates a Variability Chart to analyze the relationship between Operator and Part, with options for choosing the best analysis method, displaying cell means, grand mean, XBar control limits, and S control limits.

<!-- Keywords: #VariabilityChart, #CrossedModel, #AnalysisType, #CellMeans, #ControlLimits -->

**Code**:
```jsl
// Variability Chart
// Open data table
dt = Open("data_table.jmp");
// Variability Chart
Variability Chart(
	Y( :Y ),
	Model( "Crossed" ),
	X( :Operator, :Part ),
	Analysis Type(
		"Choose best analysis (EMS REML)"
	),
	Variability Analysis(
		:Y,
		Connect Cell Means( 1 ),
		Show Grand Mean( 1 ),
		XBar Control Limits( 1 ),
		S Control Limits( 1 ),
		Mean of Std Dev( 1 ),
		"Gauge R&R Report"n( 1 )
	)
);
```

**Code Explanation**:

1. Open table.
2. Create variability chart.
3. Set response variable.
4. Specify crossed model.
5. Define factors.
6. Choose best analysis method.
7. Enable cell means connection.
8. Display grand mean.
9. Add XBar control limits.
10. Include S control limits.



### Example 14
> **Summary**: Creates a Variability Chart to analyze the relationship between Response and Part, with Standard deviation chart and bias report enabled, using data from 'data_table.jmp'.

<!-- Keywords: #VariabilityChart, #JSLScriptingLanguage, #DataAnalysis, #ProcessVariation, #StatisticalModel -->

**Code**:
```jsl
// Variability Chart
// Open data table
dt = Open("data_table.jmp");
// Variability Chart
Variability Chart(
	Y( :Response ),
	X( :Part ),
	Standard( :Standard ),
	Process Variation( 14.9286 ),
	Std Dev Chart( 1 ),
	Bias Report( 1 ),
	Linearity Study( 0.05 )
);
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set response variable.
4. Set part variable.
5. Set standard variable.
6. Define process variation.
7. Enable standard deviation chart.
8. Enable bias report.
9. Conduct linearity study.
10. Set linearity significance level.



### Example 15
> **Summary**: Creates a Variability Chart to analyze the relationship between Measurement, Operator, and part#, with variability analysis enabled and a summary report generated.

<!-- Keywords: #VariabilityChart, #JSLScriptingLanguage, #DataAnalysis, #JMP, #Measurement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Variability Analysis( :Measurement, Variability Summary Report( 1 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create variability chart object.
3. Set Y variable to Measurement.
4. Set X variables to Operator and part#.
5. Enable variability analysis.
6. Generate variability summary report.



### Example 16
> **Summary**: Creates a Variability Chart to analyze the relationship between City Mileage (MPG) and various factors, utilizing a Crossed model with specified iterations, convergence limit, and function evaluations.

<!-- Keywords: #VariabilityChart, #CrossedModel, #JSLScriptingLanguage, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
Open("data_table.jmp");
Variability Chart(
	Y( :Name( "City Mileage (MPG)" ) ),
	X( :Manufacturer, :Model, :Vehicle Category, :Drive Train Type ),
	Model( "Crossed" ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Vertical Charts( 1 ),
	Std Dev Chart( 0 )
);
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set response variable.
4. Define factor variables.
5. Specify crossed model.
6. Set maximum iterations.
7. Set convergence limit.
8. Set number of abscissas.
9. Set number of function evaluations.
10. Choose best analysis method.



### Example 17
> **Summary**: Creates two Variability Charts to analyze the relationship between neomycin, gram, genus, and species using EMS REML Bayesian analysis.

<!-- Keywords: #VariabilityChart, #EMSREMLBayesian, #JMPScriptingLanguage, #DataAnalysis, #Neomycin -->

**Code**:
```jsl
Open("data_table.jmp") << Variability Chart(
	Y( :neomycin ),
	X( :gram, :genus, :species ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Std Dev Chart( 0 ),
	Vertical Charts( 0 )
);
Variability Chart(
	Y( :neomycin ),
	X( :gram, :genus, :species ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Std Dev Chart( 0 ),
	Vertical Charts( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Create Variability Chart.
3. Set Y to :neomycin.
4. Set X to :gram, :genus, :species.
5. Set Max Iter to 100.
6. Set Conv Limit to 0.00000001.
7. Set Number Integration Abscissas to 128.
8. Set Number Function Evals to 65536.
9. Choose best analysis (EMS REML Bayesian).
10. Disable Std Dev Chart.
11. Enable Vertical Charts.



### Example 18
> **Summary**: Creates two variability charts with customized settings for Claim USD, Gender, Name, City, Zone, Region, and AgeClass variables.

<!-- Keywords: #VariabilityChart, #CustomSettings, #JSLScripting, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
Open("data_table.jmp") << Variability Chart(
	Y( :Claim USD ),
	X( :Gender, :Name( "Claim(Y/N)" ), :Name( "City(Y/N)" ), :Zone, :Region, :AgeClass ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Std Dev Chart( 1 ),
	Vertical Charts( 0 )
);
Variability Chart(
	Y( :Claim USD ),
	X( :Gender, :Name( "Claim(Y/N)" ), :Name( "City(Y/N)" ), :Zone, :Region, :AgeClass ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Std Dev Chart( 1 ),
	Vertical Charts( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Create variability chart.
3. Set Y variable: Claim USD.
4. Set X variables: Gender, Claim(Y/N), City(Y/N), Zone, Region, AgeClass.
5. Set max iterations: 100.
6. Set convergence limit: 0.00000001.
7. Set number integration abscissas: 128.
8. Set number function evaluations: 65536.
9. Choose best analysis type: EMS REML Bayesian.
10. Enable standard deviation chart.
11. Disable vertical charts.
12. Create second variability chart.
13. Repeat steps 3-11 for second chart.
14. Enable vertical charts in second chart.



### Example 19
> **Summary**: Creates two Variability Charts to analyze CSN data by School, with customizable settings for Max Iter, Conv Limit, and Number Integration Abscissas.

<!-- Keywords: #VariabilityChart, #CustomizationOptions, #DataAnalysis, #JMPScriptingLanguage, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Variability Chart(
	Y( :CSN ),
	X( :School ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( Name( "Choose best analysis (EMS REML Bayesian)" ) ),
	Standard( :Durham Herald ),
	Process Variation( 0 ),
	Std Dev Chart( 0 ),
	Vertical Charts( 0 )
);
obj = dt << Variability Chart(
	Y( :CSN ),
	X( :School ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( Name( "Choose best analysis (EMS REML Bayesian)" ) ),
	Standard( :Durham Herald ),
	Process Variation( 0 ),
	Std Dev Chart( 0 ),
	Vertical Charts( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Create Variability Chart.
3. Set Y variable to CSN.
4. Set X variable to School.
5. Set Max Iter to 100.
6. Set Conv Limit to 0.00000001.
7. Set Number Integration Abscissas to 128.
8. Set Number Function Evals to 65536.
9. Choose best analysis (EMS REML Bayesian).
10. Set Standard to Durham Herald.
11. Set Process Variation to 0.
12. Disable Std Dev Chart.
13. Disable Vertical Charts.
14. Repeat steps 2-13 with Vertical Charts enabled.



### Example 20
> **Summary**: Creates a variability chart to analyze the relationship between response and part variables, with standard deviation charts disabled.

<!-- Keywords: #VariabilityChart, #JMPScriptingLanguage, #DataAnalysis, #StatisticalModeling, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Variability Chart( Y( :Response ), X( :Part ), Standard( :Standard ), Std Dev Chart( 0 ) );
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set response variable.
4. Set part variable.
5. Set standard variable.
6. Disable standard deviation chart.



### Example 21
> **Summary**: Creates a Variability Chart with bias report, using data from a specified JMP table.

<!-- Keywords: #VariabilityChart, #BiasReport, #JMPScriptingLanguage, #DataAnalysis, #StatisticalVisualization -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Variability Chart( Y( :Response ), X( :Part ), Standard( :Standard ), Std Dev Chart( 0 ) );
obj << Bias Report( 1 );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create variability chart.
4. Set Y variable.
5. Set X variable.
6. Set standard variable.
7. Disable standard deviation chart.
8. Generate bias report.



### Example 22
> **Summary**: Creates two Variability Charts to analyze the relationship between response variable Run and factor variables HBars, Dynamo, Seat, Tires, Gear, Raincoat, Brkfast, and Pattern.

<!-- Keywords: #VariabilityChart, #JSLScriptingLanguage, #DataAnalysis, #FactorVariables, #ResponseVariable -->

**Code**:
```jsl
Open("data_table.jmp") << Variability Chart(
	Y( :Run ),
	X( :HBars, :Dynamo, :Seat, :Tires, :Gear, :Raincoat, :Brkfast, :Pattern ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Std Dev Chart( 0 ),
	Vertical Charts( 0 )
);
Variability Chart(
	Y( :Run ),
	X( :HBars, :Dynamo, :Seat, :Tires, :Gear, :Raincoat, :Brkfast, :Pattern ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Std Dev Chart( 0 ),
	Vertical Charts( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Create variability chart.
3. Set response variable.
4. Define factor variables.
5. Set maximum iterations.
6. Set convergence limit.
7. Set number of integration abscissas.
8. Set number of function evaluations.
9. Choose best analysis method.
10. Disable standard deviation chart.
11. Enable vertical charts.



### Example 23
> **Summary**: Creates two Variability Charts with different settings to analyze the relationship between height and various categorical variables in a data table.

<!-- Keywords: #VariabilityChart, #JSLScriptingLanguage, #DataAnalysis, #StatisticalModeling, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp") << Variability Chart(
	Y( :height ),
	X( :sex, :age, :name, :sports, :countries visited, :family cars ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Std Dev Chart( 0 ),
	Vertical Charts( 0 ), 
);
Variability Chart(
	Y( :height ),
	X( :sex, :age, :name, :sports, :countries visited, :family cars ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Std Dev Chart( 0 ),
	Vertical Charts( 1 ), 
);
```

**Code Explanation**:

1. Open data table;
2. Create Variability Chart.
3. Set Y variable to height.
4. Set X variables: sex, age, name, sports, countries visited, family cars.
5. Set maximum iterations to 100.
6. Set convergence limit to 0.00000001.
7. Set number of integration abscissas to 128.
8. Set number of function evaluations to 65536.
9. Choose best analysis type (EMS REML Bayesian).
10. Disable standard deviation chart.
11. Enable vertical charts.



### Example 24
> **Summary**: Creates two Variability Charts to analyze the relationship between Initial Number of Tumors, Cause of Death, Treatment Group, and Patient Number.

<!-- Keywords: #VariabilityChart, #JSLScriptingLanguage, #DataAnalysis, #StatisticalModeling, #JMP -->

**Code**:
```jsl
Open("data_table.jmp") << Variability Chart(
	Y( :Initial Number of Tumors ),
	X( :Cause of Death, :Treatment Group, :Patient Number ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Std Dev Chart( 1 ),
	Vertical Charts( 0 )
);
Variability Chart(
	Y( :Initial Number of Tumors ),
	X( :Cause of Death, :Treatment Group, :Patient Number ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Std Dev Chart( 1 ),
	Vertical Charts( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set response variable.
4. Add factor variables.
5. Define maximum iterations.
6. Set convergence limit.
7. Specify integration abscissas.
8. Define function evaluations.
9. Choose analysis type.
10. Display standard deviation chart.
11. Enable vertical charts.



### Example 25
> **Summary**: Creates two Variability Charts with specified Y and X variables, max iterations, convergence limit, integration abscissas, function evaluations, and analysis type.

<!-- Keywords: #VariabilityChart, #JSLScriptingLanguage, #DataAnalysis, #StatisticalModeling, #JMP -->

**Code**:
```jsl
Open("data_table.jmp") << Variability Chart(
	Y( :Time Cycles ),
	X( :Censor, :Group, :Causes ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Vertical Charts( 0 ),
	Std Dev Chart( 1 )
);
Variability Chart(
	Y( :Time Cycles ),
	X( :Censor, :Group, :Causes ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Vertical Charts( 1 ),
	Std Dev Chart( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Create variability chart.
3. Set Y variable.
4. Set X variables.
5. Define max iterations.
6. Set convergence limit.
7. Specify integration abscissas.
8. Define function evaluations.
9. Choose best analysis method.
10. Disable vertical charts.
11. Enable standard deviation chart.
12. Repeat steps 2-11 with vertical charts enabled.



### Example 26
> **Summary**: Creates two Variability Charts to analyze Corrosion Resistance data, with customizable settings for max iterations, convergence limit, and function evaluations.

<!-- Keywords: #VariabilityChart, #JSLScriptingLanguage, #CorrosionResistance, #DataAnalysis, #Customization -->

**Code**:
```jsl
Open("data_table.jmp") << Variability Chart(
	Y( :Corrosion Resistance ),
	X( :Coating, :Furnace Temp, :Whole Plots ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Std Dev Chart( 0 ),
	Vertical Charts( 0 )
);
Variability Chart(
	Y( :Corrosion Resistance ),
	X( :Coating, :Furnace Temp, :Whole Plots ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Std Dev Chart( 0 ),
	Vertical Charts( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set Y variable.
4. Set X variables.
5. Define max iterations.
6. Set convergence limit.
7. Specify integration abscissas.
8. Set function evaluations.
9. Choose analysis type.
10. Disable standard deviation chart.
11. Enable vertical charts.



### Example 27
> **Summary**: Creates two Variability Charts to analyze Sugars g data, with custom settings for Max Iterations, Convergence Limit, and Number Integration Abscissas.

<!-- Keywords: #VariabilityChart, #CustomSettings, #DataAnalysis, #JMPScriptingLanguage, #StatisticalModeling -->

**Code**:
```jsl
Open("data_table.jmp") << Variability Chart(
	Y( :Sugars g ),
	X( :Brand, :Name ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Vertical Charts( 0 ),
	Std Dev Chart( 0 )
);
Variability Chart(
	Y( :Sugars g ),
	X( :Brand, :Name ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Vertical Charts( 1 ),
	Std Dev Chart( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Create Variability Chart.
3. Set Y variable: Sugars g.
4. Set X variables: Brand, Name.
5. Set Max Iterations to 100.
6. Set Convergence Limit to 0.00000001.
7. Set Number Integration Abscissas to 128.
8. Set Number Function Evals to 65536.
9. Choose best analysis method.
10. Disable vertical charts.
11. Disable standard deviation chart.
12. Create another Variability Chart.
13. Enable vertical charts.
14. Enable standard deviation chart.



### Example 28
> **Summary**: Creates a Variability Chart for Y, utilizing a Crossed model with specified parameters to analyze data from the Wolfer Sunspot dataset.

<!-- Keywords: #VariabilityChart, #CrossedModel, #JSLScriptingLanguage, #DataAnalysis, #WolferSunspot -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
Variability Chart(
	Y( :Y ),
	X( :Operator, :Part ),
	Model( "Crossed" ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( Name( "Choose best analysis (EMS REML)" ) ),
	Historical Sigma( 0 ),
	Process Variation( 0 ),
	Connect Cell Means( 1 ),
	Show Grand Mean( 1 ),
	XBar Control Limits( 1 ),
	S Control Limits( 1 ),
	Std Dev Chart( 1 ),
	Mean of Std Dev( 1 ),
	Gauge RR( 6, 0, 0, 0 ),
	Gauge RR Report( 1 ),
	SendToReport(
		Dispatch( {"Variability Chart for Y"}, "Variability Chart", FrameBox, {Grid Line Order( 7 ), Reference Line Order( 8 )} ),
		Dispatch( {"Variability Chart for Y"}, "Variability", FrameBox, {Frame Size( 96, 180 )} ),
		Dispatch( {"Variability Chart for Y"}, "2", ScaleBox( 2 ),
			{Min( -1 ), Max( 11.3037037037037 ), Inc( 2 ), Minor Ticks( 0 ), Rotated Labels( "Horizontal" )}
		),
		Dispatch( {"Variability Chart for Y"}, "Variability", FrameBox( 2 ), {Frame Size( 61, 135 )} ),
		Dispatch( {"Gauge R&R"}, "StdDev", NumberColBox, {Name( "Hide/Unhide" )(0)} )
	)
);
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create variability chart.
4. Set Y variable.
5. Set X variables.
6. Define crossed model.
7. Set max iterations.
8. Set convergence limit.
9. Set number of integration abscissas.
10. Set number of function evaluations.
11. Choose best analysis method.
12. Disable historical sigma.
13. Disable process variation.
14. Connect cell means.
15. Show grand mean.
16. Enable XBar control limits.
17. Enable S control limits.
18. Enable standard deviation chart.
19. Enable mean of standard deviation.
20. Set gauge RR parameters.
21. Enable gauge RR report.
22. Customize grid line order.
23. Customize reference line order.
24. Resize variability chart frame.
25. Customize scale box settings.
26. Resize second frame.
27. Hide standard deviation column.



### Example 29
> **Summary**: Creates a Variability Chart to analyze the relationship between Measurement, Operator, and part#, using a Crossed model.

<!-- Keywords: #VariabilityChart, #CrossedModel, #JSLScriptingLanguage, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
```

**Code Explanation**:

1. Open data table.
2. Create variability chart object.
3. Set Y variable to Measurement.
4. Set X variables to Operator and part#.
5. Specify model as Crossed.



### Example 30
> **Summary**: Creates a variability chart with heterogeneity tests to analyze the relationship between measurement, operator, and part number in a data table.

<!-- Keywords: #VariabilityChart, #HeterogeneityTests, #CrossedModel, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << Heterogeneity of Variance Tests( 1 );
```

**Code Explanation**:

1. Set default names scope.
2. Open data table.
3. Create variability chart.
4. Add operators and parts to X-axis.
5. Set model to crossed.
6. Enable heterogeneity tests.



### Example 31
> **Summary**: Creates a Variability Chart to analyze measurement data across operators and part numbers, with control limits and standard deviation chart enabled.

<!-- Keywords: #VariabilityChart, #ControlLimits, #StandardDeviation, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Vchart = Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( Crossed ),
	Historical Sigma( 0 ),
	XBar Control Limits( 1 ),
	S Control Limits( 1 ),
	Std Dev Chart( 1 )
);
rpt = Report( Vchart );
Vchart << Std Dev Chart( 0 );
rpt[NomAxisBox( 1 )] << Lower Frame( 0 ) << Divider Lines( 0 );
```

**Code Explanation**:

1. Open data table;
2. Create variability chart.
3. Set Y variable.
4. Set X variables.
5. Define model type.
6. Set historical sigma.
7. Enable XBar control limits.
8. Enable S control limits.
9. Enable standard deviation chart.
10. Modify report settings.



### Example 32
> **Summary**: Creates a Variability Chart with Y-axis measurement, X-axis operator and part#, and standard deviation charting, while customizing axis settings.

<!-- Keywords: #VariabilityChart, #JSLScriptingLanguage, #DataVisualization, #StatisticalProcessControl, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Vchart = Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( Crossed ),
	Historical Sigma( 0 ),
	XBar Control Limits( 1 ),
	S Control Limits( 1 ),
	Std Dev Chart( 1 )
);
rpt = Report( Vchart );
Vchart << Std Dev Chart( 0 );
rpt[NomAxisBox( 1 )] << Lower Frame( 0 ) << Divider Lines( 0 );
rpt[NomAxisBox( 2 )] << Lower Frame( 0 ) << Divider Lines( 0 );
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set Y variable: Measurement.
4. Set X variables: Operator, part#.
5. Use crossed model.
6. Set historical sigma to 0.
7. Enable XBar control limits.
8. Enable S control limits.
9. Enable standard deviation chart.
10. Disable standard deviation chart.
11. Hide lower frame for first axis.
12. Remove divider lines for first axis.
13. Hide lower frame for second axis.
14. Remove divider lines for second axis.



### Example 33
> **Summary**: Creates a Variability Chart to analyze response data with respect to part and standard, utilizing process variation and standard deviation charting.

<!-- Keywords: #VariabilityChart, #ProcessVariation, #StandardDeviation, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Variability Chart( Y( :Response ), X( :Part ), Standard( :Standard ), Process Variation( 6.1 ), Std Dev Chart( 0 ) );
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set response variable.
4. Set part variable.
5. Set standard variable.
6. Define process variation.
7. Disable standard deviation chart.



### Example 34
> **Summary**: Creates a Variability Chart to analyze response variable 'Response' with respect to part 'Part', standard 'Standard', and process variation, while conducting a linearity study at a significance level of 0.05.

<!-- Keywords: #VariabilityChart, #LinearityStudy, #ProcessVariation, #JSLScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Variability Chart( Y( :Response ), X( :Part ), Standard( :Standard ), Process Variation( 6.1 ), Std Dev Chart( 0 ) );
obj << Linearity Study( .05 );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create variability chart.
4. Set response variable.
5. Set part variable.
6. Set standard variable.
7. Set process variation.
8. Disable standard deviation chart.
9. Conduct linearity study.
10. Set significance level.



### Example 35
> **Summary**: Creates a variability chart to analyze the relationship between 'Operator' and 'Part', with nested variance components, showing data points and standard deviation charts.

<!-- Keywords: #VariabilityChart, #NestedVarianceComponents, #DataPoints, #StandardDeviation, #JMPScriptingLanguage -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Variability Chart( Y( :Name( " Y" ) ), X( :Operator, :Part ), Variance Components( Nested ), Show Points( 1 ), Std Dev Chart( 1 ) );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create variability chart.
4. Set Y variable.
5. Set X variables.
6. Use nested variance components.
7. Show data points.
8. Enable standard deviation chart.



### Example 36
> **Summary**: Creates a Variability Chart to analyze the relationship between Y, Operator, Instrument, and Part, with nested variance components and standard deviation chart.

<!-- Keywords: #VariabilityChart, #VarianceComponents, #NestedFactors, #StandardDeviation, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Variability Chart(
	Y( :Y ),
	X( :Operator, :Instrument, Part ),
	Variance Components( Nested then Crossed ),
	Show Points( 1 ),
	Std Dev Chart( 1 ),
	Vertical Charts( 0 )
);
```

**Code Explanation**:

1. Open data table;
2. Create variability chart.
3. Set response variable.
4. Add factor variables.
5. Define variance components.
6. Display data points.
7. Enable standard deviation chart.
8. Disable vertical charts.



### Example 37
> **Summary**: Creates two variability charts to analyze the relationship between Y, Operator, Instrument, and Part, with options for nested and crossed variance components, point display, and standard deviation charting.

<!-- Keywords: #VariabilityChart, #JSLScriptingLanguage, #DataAnalysis, #StatisticalModeling, #JMP -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
Variability Chart(
	Y( :Y ),
	X( :Operator, :Instrument, Part ),
	Variance Components( Nested then Crossed ),
	Show Points( 1 ),
	Std Dev Chart( 1 ),
	Vertical Charts( 0 )
);
Variability Chart(
	Y( :Y ),
	X( :Operator, :Instrument, Part ),
	Variance Components( Nested then Crossed ),
	Show Points( 1 ),
	Std Dev Chart( 1 ),
	Vertical Charts( 1 )
);
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create variability chart.
4. Set Y variable.
5. Set X variables.
6. Define variance components.
7. Show data points.
8. Enable standard deviation chart.
9. Disable vertical charts.
10. Repeat steps 3-9 with vertical charts enabled.



### Example 38
> **Summary**: Creates and customizes two Variability Charts for analyzing measurement data, with options to choose analysis type, enable standard deviation charts, and configure axis settings.

<!-- Keywords: #VariabilityChart, #JMPScriptingLanguage, #DataAnalysis, #Customization, #Automation -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Std Dev Chart( 1 ),
	Vertical Charts( 0 ),
	SendToReport(
		Dispatch( {"Variability Chart for Measurement"}, "", NomAxisBox, {"Short"} ),
		Dispatch( {"Variability Chart for Measurement"}, "", NomAxisBox( 2 ), {Rotated Tick Labels( 1 ), Lower Frame( 0 )} ),
		Dispatch( {"Variability Chart for Measurement"}, "", NomAxisBox( 3 ), {Rotated Tick Labels( 1 )} ),
		Dispatch( {"Variability Chart for Measurement"}, "", NomAxisBox( 4 ), {"Off"} )
	)
);
Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Std Dev Chart( 1 ),
	Vertical Charts( 1 ),
	SendToReport(
		Dispatch( {"Variability Chart for Measurement"}, "", NomAxisBox, {"Short"} ),
		Dispatch( {"Variability Chart for Measurement"}, "", NomAxisBox( 2 ), {Rotated Tick Labels( 1 ), Lower Frame( 0 )} ),
		Dispatch( {"Variability Chart for Measurement"}, "", NomAxisBox( 3 ), {Rotated Tick Labels( 1 )} ),
		Dispatch( {"Variability Chart for Measurement"}, "", NomAxisBox( 4 ), {"Off"} )
	)
);
```

**Code Explanation**:

1. Set default names scope.
2. Open data table.
3. Create variability chart.
4. Set Y variable.
5. Set X variables.
6. Choose analysis type.
7. Enable standard deviation chart.
8. Disable vertical charts.
9. Configure axis settings.
10. Repeat steps 3-9 with vertical charts enabled.



### Example 39
> **Summary**: Creates two Variability Charts for measurement data, with customizable axis settings and standard deviation charts, using JMP Scripting Language (JSL) code.

<!-- Keywords: #VariabilityChart, #JMPScriptingLanguage, #DataVisualization, #CustomizationOptions, #StandardDeviation -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Std Dev Chart( 1 ),
	dt = Open("data_table.jmp");
	Vertical Charts( 0 );,
	SendToReport(
		Dispatch( {"Variability Chart for Measurement"}, "", NomAxisBox, {Rotated Tick Labels( 1 ), "Short", Inside Ticks( 1 )} ),
		Dispatch( {"Variability Chart for Measurement"}, "", NomAxisBox( 2 ), {Rotated Tick Labels( 1 ), Inside Ticks( 1 )} ),
		Dispatch( {"Variability Chart for Measurement"}, "", NomAxisBox( 3 ), {Rotated Tick Labels( 0 ), "Short"} ),
		Dispatch( {"Variability Chart for Measurement"}, "", NomAxisBox( 4 ), {"Short"} )
	)
);
Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Std Dev Chart( 1 ),
	dt = Open("data_table.jmp");
	Vertical Charts( 1 );,
	SendToReport(
		Dispatch( {"Variability Chart for Measurement"}, "", NomAxisBox, {Rotated Tick Labels( 1 ), "Short", Inside Ticks( 1 )} ),
		Dispatch( {"Variability Chart for Measurement"}, "", NomAxisBox( 2 ), {Rotated Tick Labels( 1 ), Inside Ticks( 1 )} ),
		Dispatch( {"Variability Chart for Measurement"}, "", NomAxisBox( 3 ), {Rotated Tick Labels( 0 ), "Short"} ),
		Dispatch( {"Variability Chart for Measurement"}, "", NomAxisBox( 4 ), {"Short"} )
	)
);
```

**Code Explanation**:

1. Set default names.
2. Open data table;
3. Create variability chart.
4. Set Y to :Measurement.
5. Set X to :Operator, :part#.
6. Choose best analysis method.
7. Enable standard deviation chart.
8. Open data table;
9. Disable vertical charts.
10. Configure axis settings.
11. Repeat steps 3-10 with vertical charts enabled.



### Example 40
> **Summary**: Creates a Variability Chart to analyze the relationship between Measurement, Operator, and part#, utilizing Y-axis scaling for sizes and coloring based on the Wolfer variable.

<!-- Keywords: #VariabilityChart, #JSLScriptingLanguage, #DataAnalysis, #WolferVariable, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set measurement as response.
4. Set operator and part as factors.



### Example 41
> **Summary**: Creates a Variability Chart to analyze measurement data by operator and part number, with grand mean displayed.

<!-- Keywords: #VariabilityChart, #JSLScripting, #DataAnalysis, #GrandMean, #MeasurementData -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Show Grand Mean( 1 );
```

**Code Explanation**:

1. Set default names scope.
2. Open data table.
3. Create variability chart object.
4. Display grand mean on chart.



### Example 42
> **Summary**: Creates two Variability Charts to analyze the relationship between height and name, age, and sex in a data table.

<!-- Keywords: #VariabilityChart, #JSLScriptingLanguage, #DataAnalysis, #StatisticalModeling, #JMP -->

**Code**:
```jsl
Open("data_table.jmp") << Variability Chart(
	Y( :height ),
	X( :name, :age, :sex ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Std Dev Chart( 0 ),
	Vertical Charts( 0 )
);
Variability Chart(
	Y( :height ),
	X( :name, :age, :sex ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Std Dev Chart( 0 ),
	Std Dev Chart( 0 ),
	Vertical Charts( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Create variability chart.
3. Set response variable: height.
4. Set factor variables: name, age, sex.
5. Set maximum iterations: 100.
6. Set convergence limit: 0.00000001.
7. Set number of integration abscissas: 128.
8. Set number of function evaluations: 65536.
9. Choose best analysis method.
10. Disable standard deviation chart.
11. Disable vertical charts.
12. Create another variability chart.
13. Set response variable: height.
14. Set factor variables: name, age, sex.
15. Set maximum iterations: 100.
16. Set convergence limit: 0.00000001.
17. Set number of integration abscissas: 128.
18. Set number of function evaluations: 65536.
19. Choose best analysis method.
20. Disable standard deviation chart.
21. Enable vertical charts.



### Example 43
> **Summary**: Creates a variability chart with vertical charts option, using data from a specified JMP data table.

<!-- Keywords: #VariabilityChart, #VerticalCharts, #JMPDataTable, #ScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Vertical Charts( 1 );
```

**Code Explanation**:

1. Set default names scope.
2. Open data table.
3. Create variability chart object.
4. Set vertical charts option.



### Example 44
> **Summary**: Creates a Variability Chart for Measurement, with customization options for axis settings and standard deviation chart, using data from an open JMP data table.

<!-- Keywords: #VariabilityChart, #JMPScriptingLanguage, #DataVisualization, #CustomizationOptions, #AxisSettings -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Vertical Charts( 1 ),
	Std Dev Chart( 1 ),
	SendToReport(
		Dispatch( {"Variability Chart for Measurement"}, "", NomAxisBox( 2 ), {"Short"} ),
		Dispatch( {"Variability Chart for Measurement"}, "", NomAxisBox( 4 ), {Inside Ticks( 1 )} )
	)
);
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create variability chart.
4. Set Y variable.
5. Set X variables.
6. Choose best analysis type.
7. Enable vertical charts.
8. Enable standard deviation chart.
9. Customize axis settings.
10. Customize axis ticks.



### Example 45
> **Summary**: Creates a Variability Chart for Measurement, with Y-axis set to Measurement, X-axes set to Operator and part#, and standard deviation chart enabled.

<!-- Keywords: #VariabilityChart, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #JMP -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Vertical Charts( 1 ),
	Std Dev Chart( 1 ),
	SendToReport(
		Dispatch( {"Variability Chart for Measurement"}, "", NomAxisBox, {"Off", Lower Frame( 0 )} ),
		Dispatch( {"Variability Chart for Measurement"}, "", NomAxisBox( 2 ), {"Short", Inside Ticks( 1 )} ),
		Dispatch( {"Variability Chart for Measurement"}, "", NomAxisBox( 4 ), {"Off", Lower Frame( 0 ), Inside Ticks( 1 )} )
	)
);
```

**Code Explanation**:

1. Set default names scope.
2. Open data table.
3. Create variability chart.
4. Set Y variable.
5. Set X variables.
6. Choose best analysis type.
7. Enable vertical charts.
8. Enable standard deviation chart.
9. Configure axis settings.
10. Configure additional axis settings.



### Example 46
> **Summary**: Creates a Variability Chart with XBar control limits, analyzing Measurement data by Operator and part#, using Open() and Variability Chart() functions.

<!-- Keywords: #VariabilityChart, #XBarControlLimits, #JSLScriptingLanguage, #DataAnalysis, #QualityControl -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << XBar Control Limits( 1 );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create variability chart.
4. Set X variables.
5. Set Y variable.
6. Add XBar control limits.



### Example 47
> **Summary**: Creates a Variability Chart for measurement data, with customizable column properties and report settings.

<!-- Keywords: #VariabilityChart, #ColumnSwitcher, #ReportSettings, #Customization, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Always use column properties( 1 ),
	SendToReport(
		Dispatch( {"Variability Gauge Analysis for Measurement", "Variability Chart for Measurement"}, "Variability Chart", FrameBox( 2 ),
			{Background Color( 73 )}
		)
	)
);
cs = obj << Column Switcher( :Measurement, {:Measurement, :Standard} );
```

**Code Explanation**:

1. Open data table;
2. Create variability chart.
3. Set Y variable.
4. Set X variables.
5. Use column properties.
6. Send report settings.
7. Change background color.
8. Add column switcher.
9. Specify measurement columns.
10. Include standard column.



### Example 48
> **Summary**: Creates a Variability Chart with Column Switcher to analyze measurement data, utilizing Always use column properties and customizing report background.

<!-- Keywords: #VariabilityChart, #ColumnSwitcher, #JMPScriptingLanguage, #DataAnalysis, #ReportCustomization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Always use column properties( 1 ),
	SendToReport(
		Dispatch( {"Variability Gauge Analysis for Measurement", "Variability Chart for Measurement"}, "Variability Chart", FrameBox( 2 ),
			{Background Color( 73 )}
		)
	)
);
cs = obj << Column Switcher( :Measurement, {:Measurement, :Standard} );
cs << Next;
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set response variable.
4. Set factor variables.
5. Use column properties.
6. Customize report background.
7. Add column switcher.
8. Include measurement and standard columns.
9. Switch to next column configuration.



### Example 49
> **Summary**: Creates a Variability Chart with XBar control limits and sends it to a report, while also creating a new window with a lineup box and unlineup boxes for journaling purposes.

<!-- Keywords: #VariabilityChart, #XBarControlLimits, #ReportSending, #WindowCreation, #Journaling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	XBar Control Limits( 1 ),
	SendToReport(
		Dispatch( {"Variability Chart for Measurement"}, "", AxisBox, {Select} ),
		Dispatch( {"Variability Chart for Measurement"}, "Variability Chart", FrameBox, {Select} ),
		Dispatch( {"Variability Chart for Measurement"}, "Variability", FrameBox, {Select} ),
		Dispatch( {"Variability Chart for Measurement"}, "", AxisBox( 2 ), {Select} ),
		Dispatch( {"Variability Chart for Measurement"}, "part#", TextBox, {Select} ),
		Dispatch( {"Variability Chart for Measurement"}, "Operator", TextBox, {Select} ), 
	)
);
Main Menu( "Edit:Journal" );
w = New Window( "unlineup",
	Lineup Box( N Col( 2 ),
		Unlineup Box( Text Box( "Journal this 1", <<Justify Text( "Center" ) ), <<select ),
		Text Box( "Journal this 2", <<select ),
		Text Box( "Don't journal this 1" ),
		Unlineup Box( Text Box( "Don't journal this 2", <<Justify Text( "Center" ) ) ),
		Text Box( "Journal this 3", <<select ),
		Text Box( "Journal this 4", <<select )
	)
);
Main Menu( "Edit:Journal" );
w << close window();
obj << close window();
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set Y variable.
4. Set X variables.
5. Choose crossed model.
6. Add XBar control limits.
7. Select chart elements.
8. Access Edit:Journal menu.
9. Create new window.
10. Add lineup box.
11. Add unlineup boxes.
12. Select specific text boxes.
13. Access Edit:Journal menu again.
14. Close new window.
15. Close variability chart window.



### Example 50
> **Summary**: Creates a Variability Chart to analyze Tip Percentage data, utilizing categorical predictors Server and Day of Week, with customized scaling and formatting for visualization.

<!-- Keywords: #VariabilityChart, #CustomScaling, #JMPScriptingLanguage, #DataVisualization, #TipPercentage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Variability Chart(
	Y( :Tip Percentage ),
	X( :Server, :Day of Week ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Show Grand Mean( 1 ),
	Std Dev Chart( 1 ),
	Points Jittered( 1 ),
	Mean Diamonds( 1 ),
	SendToReport(
		Dispatch( {"Variability Chart for Tip Percentage"}, "2", ScaleBox,
			{Scale( "Log" ), Format(
				"Custom",
				Formula(
					x = value * 2;
					x = x + 12;
					x = x - 4;
					x = x / 2;
					Round( x - 4, 5 );
				),
				12
			), Min( 5 ), Max( 52.6284971735795 ), Inc( 1 ), Minor Ticks( 1 )}
		),
		Dispatch( {"Variability Chart for Tip Percentage"}, "2", ScaleBox( 2 ),
			{Format(
				"Custom",
				Formula(
					x = value + 5;
					x = x * 2;
					x = x - 4;
					x = x / 2;
					x - 3;
				),
				12
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set response variable.
4. Define categorical predictors.
5. Set maximum iterations.
6. Set convergence limit.
7. Specify number of integration points.
8. Set number of function evaluations.
9. Choose best analysis method.
10. Customize chart appearance.



### Example 51
> **Summary**: Creates a Variability Chart for Response, utilizing Main Effect model and Standard variable, with additional features such as Bias Report and Linearity Study.

<!-- Keywords: #VariabilityChart, #MainEffectModel, #BiasReport, #LinearityStudy, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Variability Chart(
	Y( :Response ),
	Model( "Main Effect" ),
	X( :Part ),
	Standard( :Standard ),
	Process Variation( 14.9286 ),
	Variability Analysis( :Response, Bias Report( 1 ), Linearity Study( 1 ) ),
	SendToReport(
		Dispatch( {"Variability Gauge Analysis for Response", "Variability Chart for Response"}, "Variability Chart", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 7 ),
				Index Row( 7 ),
				UniqueID( 7 ),
				FoundPt( {125, 315} ),
				Origin( {0.55, 2.5} ),
				Offset( {-25, -180} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set response variable.
4. Use main effect model.
5. Specify part variable.
6. Define standard variable.
7. Set process variation.
8. Perform variability analysis.
9. Include bias report.
10. Conduct linearity study.



### Example 52
> **Summary**: Creates a Variability Chart to analyze Shrinkage with respect to Temperature and Casting, utilizing a nested model and variance components.

<!-- Keywords: #VariabilityChart, #NestedModel, #VarianceComponents, #JSLScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Variability Chart( Y( :Shrinkage ), X( :Temperature, :Casting ), Model( "Nested" ), Variance Components( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set Y variable: Shrinkage.
4. Set X variables: Temperature, Casting.
5. Specify nested model.
6. Enable variance components.



### Example 53
> **Summary**: Creates two variability charts in JMP, one for 'Measurement' and another for 'height', with customized settings for Y variables, X variables, model types, standard variables, misclassification limits, and legend appearances.

<!-- Keywords: #JMP, #VariabilityChart, #ScriptingLanguage, #DataAnalysis, #Customization -->

**Code**:
```jsl
Open("data_table.jmp");
Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Standard( :Standard ),
	Misclassification Probabilities( LSL( 0.4 ), USL( 1.1 ) ),
	SendToReport(
		Dispatch( {"Variability Chart for Measurement"}, "Variability Chart", FrameBox,
			{Row Legend(
				Standard,
				Color( 1 ),
				Color Theme( "Blue to Gray to Red" ),
				Marker( 0 ),
				Marker Theme( "" ),
				Continuous Scale( 1 ),
				Reverse Scale( 0 ),
				Excluded Rows( 0 )
			)}
		),
		Dispatch( {}, "Misclassification Probabilities", OutlineBox, {Close( 1 )} )
	)
);
Open("data_table.jmp");
Variability Chart(
	Y( :height ),
	X( Transform Column( "Lowercase[sex]", Character, Formula( Lowercase( :sex ) ) ) ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Std Dev Chart( 1 ),
	SendToReport(
		Dispatch( {"Variability Chart for height"}, "Variability Chart", FrameBox,
			{Row Legend(
				Lowercase[sex],
				Color( 1 ),
				Color Theme( "JMP Default" ),
				Marker( 0 ),
				Marker Theme( "" ),
				Continuous Scale( 0 ),
				Reverse Scale( 0 ),
				Excluded Rows( 0 )
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create variability chart.
3. Set Y variable.
4. Set X variables.
5. Define model type.
6. Include standard variable.
7. Set misclassification limits.
8. Customize legend appearance.
9. Close misclassification probabilities.
10. Open data table;
11. Create variability chart for height.
12. Set Y variable.
13. Transform and set X variable.
14. Set iteration limits.
15. Set convergence limit.
16. Set integration parameters.
17. Choose analysis type.
18. Enable standard deviation chart.
19. Customize legend appearance.



### Example 54
> **Summary**: Creates a Variability Chart for Y, utilizing a Crossed model with specified parameters to analyze data from an open JMP data table.

<!-- Keywords: #VariabilityChart, #CrossedModel, #JMPScriptingLanguage, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Variability Chart(
	Y( :Y ),
	X( :Operator, :Part ),
	Model( "Crossed" ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( Name( "Choose best analysis (EMS REML)" ) ),
	Historical Sigma( 0 ),
	Connect Cell Means( 1 ),
	Show Grand Mean( 1 ),
	XBar Control Limits( 1 ),
	S Control Limits( 1 ),
	Std Dev Chart( 1 ),
	Mean of Std Dev( 1 ),
	Gauge RR( 6, 0, 0, 0 ),
	Gauge RR Report( 1 ),
	SendToReport(
		Dispatch( {"Variability Chart for Y"}, "Variability Chart", FrameBox,
			{Frame Size( 300, 180 ), Grid Line Order( 3 ), Reference Line Order( 4 )}
		),
		Dispatch( {"Variability Chart for Y"}, "2", ScaleBox( 2 ), {Min( -1 ), Max( 11.3037037037037 ), Inc( 2 ), Minor Ticks( 0 )} ),
		Dispatch( {"Variability Gauge Analysis for Y", "Variability Chart for Y"}, "Variability", FrameBox( 2 ), {Frame Size( 300, 135 )} ),
		Dispatch( {}, "Gauge R&R", OutlineBox,
			{Set Title( "Gauge R&R - Testing, look for indented values for Operator items in this table" )}
		),
		Dispatch( {"Gauge R&R"}, "StdDev", NumberColBox, {Visibility( "Visible" )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set Y variable.
4. Set X variables.
5. Define crossed model.
6. Set max iterations.
7. Set convergence limit.
8. Set integration abscissas.
9. Set function evaluations.
10. Choose best analysis method.



### Example 55
> **Summary**: Creates a Variability Chart to analyze the relationship between CSN and School, with specified parameters for maximum iterations, convergence limit, and function evaluations.

<!-- Keywords: #VariabilityChart, #JSLScriptingLanguage, #DataAnalysis, #StatisticalModeling, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
Variability Chart(
	Y( :CSN ),
	X( :School ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( Name( "Choose best analysis (EMS REML Bayesian)" ) ),
	Standard( :Durham Herald ),
	Process Variation( 0 ),
	Std Dev Chart( 0 )
);
```

**Code Explanation**:

1. Open data table;
2. Create variability chart.
3. Set Y variable.
4. Set X variable.
5. Define max iterations.
6. Set convergence limit.
7. Specify number of abscissas.
8. Define number of function evaluations.
9. Choose best analysis method.
10. Set standard reference.



### Example 56
> **Summary**: Creates a Variability Chart with Crossed Model analysis for fahrenheit, utilizing factor variables volunteer and sector, and specifying various chart settings.

<!-- Keywords: #VariabilityChart, #CrossedModel, #JMPScriptingLanguage, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Variability Chart(
	Y( :fahrenheit ),
	X( :volunteer, :sector ),
	Model( "Crossed" ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( Name( "Choose best analysis (EMS REML Bayesian)" ) ),
	Process Variation( 0 ),
	Show Range Bars( 0 ),
	Show Cell Means( 0 ),
	Connect Cell Means( 1 ),
	Show Separators( 0 ),
	Std Dev Chart( 1 ),
	Mean of Std Dev( 1 ),
	Discrimination Ratio( 1 ),
	SendToReport(
		Dispatch( {}, "Variability Gauge", OutlineBox,
			{Set Title(
				"Variability chart, show Points, Connect Cell Means, Std Dev Chart, Mean of Std Dev, Gauge Studies: Discrimination Ratio, AIAG Labels"
			)}
		),
		Dispatch( {"Variability Chart for fahrenheit"}, "Variability Chart", FrameBox, {Grid Line Order( 2 ), Reference Line Order( 3 )} ),
		Dispatch( {"Variability Chart for fahrenheit"}, "Variability", FrameBox( 2 ), {Grid Line Order( 2 ), Reference Line Order( 3 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set response variable.
4. Define factor variables.
5. Specify crossed model.
6. Set maximum iterations.
7. Set convergence limit.
8. Set integration abscissas.
9. Set function evaluations.
10. Choose best analysis method.



### Example 57
> **Summary**: Creates a variability chart to analyze measurement data across operators and part numbers, utilizing the Variability Chart function.

<!-- Keywords: #VariabilityChart, #JMPScriptingLanguage, #DataAnalysis, #OperatorPartNumber, #MeasurementData -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create variability chart.



### Example 58
> **Summary**: Creates a Variability Chart for fahrenheit, utilizing a Crossed model with specified iteration and convergence limits, and customizing chart display options.

<!-- Keywords: #VariabilityChart, #CrossedModel, #JSLScripting, #DataAnalysis, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Variability Chart(
	Y( :fahrenheit ),
	X( :volunteer, :sector ),
	Model( "Crossed" ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( Name( "Choose best analysis (EMS REML Bayesian)" ) ),
	Process Variation( 0 ),
	Show Range Bars( 0 ),
	Show Cell Means( 0 ),
	Connect Cell Means( 1 ),
	Show Separators( 0 ),
	Std Dev Chart( 1 ),
	Mean of Std Dev( 1 ),
	Discrimination Ratio( 1 ),
	SendToReport(
		Dispatch( {}, "Variability Gauge", OutlineBox,
			{Set Title(
				"Variability chart, show Points, Connect Cell Means, Std Dev Chart, Mean of Std Dev, Gauge Studies: Discrimination Ratio, AIAG Labels"
			)}
		),
		Dispatch( {"Variability Chart for fahrenheit"}, "Variability Chart", FrameBox, {Grid Line Order( 2 ), Reference Line Order( 3 )} ),
		Dispatch( {"Variability Chart for fahrenheit"}, "Variability", FrameBox, {Grid Line Order( 2 ), Reference Line Order( 3 )} )
	)
);
```

**Code Explanation**:

1. Open table.
2. Create variability chart.
3. Set response variable.
4. Define factor variables.
5. Specify crossed model.
6. Set maximum iterations.
7. Define convergence limit.
8. Configure integration parameters.
9. Choose best analysis method.
10. Customize chart display.



### Example 59
> **Summary**: Creates a Variability Chart for NPN1, using lot_id as a factor and grouping by wafer, with customized report settings and row legend for SITE.

<!-- Keywords: #VariabilityChart, #JMPScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Variability Chart(
	Y( :NPN1 ),
	Model( "Main Effect" ),
	X( :lot_id ),
	By( :wafer ),
	SendToReport(
		Dispatch( {"Variability Gauge Analysis for NPN1", "Variability Chart for NPN1"}, "Variability Chart", FrameBox,
			{Row Legend(
				:SITE,
				Color( 1 ),
				Color Theme( "JMP Default" ),
				Marker( 0 ),
				Marker Theme( "" ),
				Continuous Scale( 0 ),
				Reverse Scale( 0 ),
				Excluded Rows( 0 )
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create variability chart object.
3. Set response variable to NPN1.
4. Define model as main effect.
5. Use lot_id as factor.
6. Group by wafer.
7. Customize report settings.
8. Add row legend for SITE.
9. Set color theme to default.
10. Configure marker settings.



### Example 60
> **Summary**: Creates a Variability Chart to analyze measurement data with operator and part number as X variables, utilizing standard deviation charting and bias reporting.

<!-- Keywords: #VariabilityChart, #JMPScriptingLanguage, #DataAnalysis, #ProcessVariation, #StandardDeviation -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Analysis Type( Name( "Choose best analysis (EMS REML Bayesian)" ) ),
	Standard( :Standard ),
	Process Variation( 0 ),
	Std Dev Chart( 1 ),
	Bias Report
);
```

**Code Explanation**:

1. Open data table;
2. Create variability chart object.
3. Set measurement as Y variable.
4. Set operator and part number as X variables.
5. Choose best analysis method.
6. Include standard variable.
7. Set process variation to zero.
8. Enable standard deviation chart.
9. Generate bias report.



### Example 61
> **Summary**: Creates a Variability Chart with filtered data to analyze measurement values, utilizing Y-axis scaling and X-axis categorization by operator and part number.

<!-- Keywords: #VariabilityChart, #DataFiltering, #JSLScripting, #JMP, #ProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Analysis Type( Name( "Choose best analysis (EMS REML Bayesian)" ) ),
	Process Variation( 0 ),
	Std Dev Chart( 1 ),
	Local Data Filter(
		Add Filter( columns( :Measurement ), Where( :Measurement >= 0.5 & :Measurement <= 1 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
obj << Automatic Recalc( 0 );
dt << Select Where( :Standard == 0.8 );
dt << Exclude();
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table.
2. Create variability chart object.
3. Set Y variable.
4. Set X variables.
5. Choose analysis type.
6. Disable process variation.
7. Enable standard deviation chart.
8. Add local data filter.
9. Set filter conditions.
10. Disable automatic recalculation.



### Example 62
> **Summary**: Creates and configures a Variability Chart to analyze measurement data, with filtering and recalculation options enabled.

<!-- Keywords: #VariabilityChart, #DataFiltering, #Recalculation, #JMPScriptingLanguage, #AnalyticalVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Analysis Type( Name( "Choose best analysis (EMS REML Bayesian)" ) ),
	Process Variation( 0 ),
	Std Dev Chart( 1 ),
	Local Data Filter(
		Add Filter( columns( :Measurement ), Where( :Measurement >= 0.5 & :Measurement <= 1 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
obj << Automatic Recalc( 1 );
dt << Select Where( :Standard == 0.8 );
dt << Exclude();
rpt = Report( obj );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Analysis Type( Name( "Choose best analysis (EMS REML Bayesian)" ) ),
	Process Variation( 0 ),
	Std Dev Chart( 1 ),
	Local Data Filter(
		Add Filter( columns( :Measurement ), Where( :Measurement >= 0.5 & :Measurement <= 1 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
obj << Automatic Recalc( 0 );
dt << Select Where( :Standard == 0.8 );
dt << Exclude();
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table.
2. Create Variability Chart.
3. Set Y variable.
4. Set X variables.
5. Choose analysis type.
6. Disable process variation.
7. Enable standard deviation chart.
8. Add local data filter.
9. Set filter conditions.
10. Set filter mode.
11. Enable automatic recalculation.
12. Select rows where Standard is 0.8.
13. Exclude selected rows.
14. Generate report.
15. Close data table without saving.
16. Reopen data table.
17. Create Variability Chart again.
18. Set Y variable.
19. Set X variables.
20. Choose analysis type.
21. Disable process variation.
22. Enable standard deviation chart.
23. Add local data filter.
24. Set filter conditions.
25. Set filter mode.
26. Disable automatic recalculation.
27. Select rows where Standard is 0.8.
28. Exclude selected rows.
29. Generate report.



### Example 63
> **Summary**: Creates a variability chart for height, grouping by sex, and extracting data tables with summary reports.

<!-- Keywords: #JSLScriptingLanguage, #VariabilityChart, #DataTables, #SummaryReports, #ByGroup -->

**Code**:
```jsl
dt = Open("data_table.jmp");
vc = dt << Variability Chart(
	Y( :height ),
	X( :age ),
	Analysis Type( Name( "Choose best analysis (EMS REML Bayesian)" ) ),
	Process Variation( 0 ),
	Variability Summary Report( 1 ),
	Std Dev Chart( 0 ),
	By( :sex )
);
Current Data Table( vc[1] << datatable window );
dt2 = Current Data Table();
Close( dt2 );
Current Data Table( vc[2] << datatable window );
dt3 = Current Data Table();
Close( dt3, No Save );
Report( vc[1] )[Outline Box( 1 )] << Close( 1 );
Report( vc[2] )[Outline Box( 1 )] << Close( 1 );
Report( vc[1] )[Outline Box( 1 )] << Close( 0 );
Report( vc[2] )[Outline Box( 1 )] << Close( 0 );
tabVC = Report( vc[1] )[Outline Box( "Variability Chart for height" )][Outline Box( "Variability Summary for height" )][Table Box( 1 )] <<
Make Combined Data Table;
matrix = tabVC << Get as matrix;
```

**Code Explanation**:

1. Open data_table data
2. Create variability chart.
3. Set Y variable to height.
4. Set X variable to age.
5. Choose best analysis method.
6. Disable process variation.
7. Enable variability summary report.
8. Disable standard deviation chart.
9. Group by sex.
10. Extract and close data tables.



### Example 64
> **Summary**: Creates a Variability Chart with Y-axis set to height, X-axis set to age, and By-grouping by sex, utilizing the best analysis method chosen from EMS REML Bayesian options.

<!-- Keywords: #VariabilityChart, #JMPScriptingLanguage, #DataAnalysis, #ByGrouping, #BestAnalysisMethod -->

**Code**:
```jsl
dt = Open("data_table.jmp");
vc = dt << Variability Chart(
	Y( :height ),
	X( :age ),
	Analysis Type( Name( "Choose best analysis (EMS REML Bayesian)" ) ),
	Process Variation( 0 ),
	Variability Summary Report( 1 ),
	Std Dev Chart( 0 ),
	By( :sex )
);
Current Data Table( vc[1] << datatable window );
dt2 = Current Data Table();
```

**Code Explanation**:

1. Open data table;
2. Create variability chart.
3. Set response variable to height.
4. Set factor variable to age.
5. Choose best analysis method.
6. Disable process variation.
7. Enable variability summary report.
8. Disable standard deviation chart.
9. Group by sex.
10. Assign current data table to dt2.



### Example 65
> **Summary**: Creates a Variability Chart to analyze measurement and standard data, with specific by-group settings and operator variable configuration.

<!-- Keywords: #VariabilityChart, #ByGroupSettings, #OperatorVariable, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Variability Chart(
	SendToByGroup( Bygroup Default ),
	Y( :Measurement, :Standard ),
	SendToByGroup( {:part# == 1}, Y( :Measurement ) ),
	SendToByGroup( {:part# == 1,  Index( 2 )}, Y( :Standard ) ),
	X( :Operator ),
	Model( "Main Effect" ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Std Dev Chart( 1 ),
	By( :part# ),
	SendToByGroup(
		{:part# == 1},
		SendToReport( Dispatch( {"Variability Gauge part#=1"}, "Variability Chart for Measurement", OutlineBox, {Close( 1 )} ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create variability chart object.
3. Set default by-group settings.
4. Add measurement and standard variables.
5. Configure specific by-group settings.
6. Add operator variable.
7. Define model type.
8. Set maximum iterations.
9. Set convergence limit.
10. Configure integration parameters.



### Example 66
> **Summary**: Creates a Variability Chart for Y, utilizing a Crossed model with specified iterations and convergence limits, and generates a report with customized dispatches.

<!-- Keywords: #VariabilityChart, #CrossedModel, #DispatchReport, #JSLScriptingLanguage, #StatisticalAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = dt under test << Variability Chart(
	Y( :Y ),
	X( :Operator, :Part ),
	Model( "Crossed" ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( Name( "Choose best analysis (EMS REML)" ) ),
	Historical Sigma( 0 ),
	Connect Cell Means( 1 ),
	Show Grand Mean( 1 ),
	XBar Control Limits( 1 ),
	S Control Limits( 1 ),
	Std Dev Chart( 1 ),
	Mean of Std Dev( 1 ),
	Gauge RR( 6, 1, 2, 3 ),
	Gauge RR Report( 1 ),
	SendToReport(
		Dispatch( {"Variability Chart for Y"}, "Variability Chart", FrameBox,
			{Frame Size( 300, 180 ), Grid Line Order( 3 ), Reference Line Order( 4 )}
		),
		Dispatch( {"Variability Chart for Y"}, "2", ScaleBox( 2 ),
			{Min( -1 ), Max( 11.3037037037037 ), Inc( 2 ), Minor Ticks( 0 )}
		),
		Dispatch( {"Variability Chart for Y"}, FrameBox, {Frame Size( 300, 135 )} ),
		Dispatch( {}, "Gauge R&R", OutlineBox,
			{Set Title( "Gauge R&R - Testing, look for indented values for Operator items in this table" )}
		),
		Dispatch( {"Gauge R&R"}, "StdDev", NumberColBox, {Visibility( "Visible" )} )
	)
);
```

**Code Explanation**:

1. Open table.
2. Create variability chart.
3. Set Y variable.
4. Set X variables.
5. Define crossed model.
6. Set max iterations.
7. Set convergence limit.
8. Set integration abscissas.
9. Set function evaluations.
10. Choose best analysis.



### Example 67
> **Summary**: Creates a Variability Chart for fahrenheit, utilizing Crossed model and specifying various settings such as max iterations, convergence limit, and number of integration abscissas.

<!-- Keywords: #VariabilityChart, #CrossedModel, #JSLScripting, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Variability Chart(
	Y( :fahrenheit ),
	X( :volunteer, :sector ),
	Model( "Crossed" ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( Name( "Choose best analysis (EMS REML Bayesian)" ) ),
	Process Variation( 0 ),
	Show Range Bars( 0 ),
	Show Cell Means( 0 ),
	Connect Cell Means( 1 ),
	Show Separators( 0 ),
	Std Dev Chart( 1 ),
	Mean of Std Dev( 1 ),
	Discrimination Ratio( 1 ),
	SendToReport(
		Dispatch( {}, "Variability Gauge", OutlineBox,
			{Set Title(
				"Variability chart, show Points, Connect Cell Means, Std Dev Chart, Mean of Std Dev, Gauge Studies: Discrimination Ratio, AIAG Labels"
			)}
		),
		Dispatch( {"Variability Chart for fahrenheit"}, FrameBox, {Grid Line Order( 2 ), Reference Line Order( 3 )} ),
		Dispatch( {"Variability Chart for fahrenheit"}, FrameBox, {Grid Line Order( 2 ), Reference Line Order( 3 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set response variable.
4. Set factor variables.
5. Define model type.
6. Set maximum iterations.
7. Set convergence limit.
8. Set number of integration abscissas.
9. Set number of function evaluations.
10. Choose best analysis method.



### Example 68
> **Summary**: Creates a Variability Chart with customized analysis parameters and visualization options, including grand mean display, standard deviation chart, and points jittering.

<!-- Keywords: #VariabilityChart, #CustomAnalysis, #VisualizationOptions, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Variability Chart(
	Y( :Tip Percentage ),
	X( :Server, :Day of Week ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Show Grand Mean( 1 ),
	Std Dev Chart( 1 ),
	Points Jittered( 1 ),
	Mean Diamonds( 1 )
);
:Server << Set Property( "Missing Value Codes", "A" );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
actN = (rpt[NomAxisBox( 2 )]);
expr = (actN << get journal());
p = "labels(B,C,)";
ans = Pat Match( expr, p );
```

**Code Explanation**:

1. Open data table.
2. Create variability chart object.
3. Set Y variable.
4. Set X variables.
5. Configure analysis parameters.
6. Enable grand mean display.
7. Enable standard deviation chart.
8. Enable points jittering.
9. Enable mean diamonds.
10. Set missing value code for server.



### Example 69
> **Summary**: Creates a variability chart to analyze the relationship between operator, part#, and measurement data, with options for variance components, misclassification probabilities, and discrimination ratio.

<!-- Keywords: #VariabilityChart, #JMPScriptingLanguage, #DataAnalysis, #StatisticalModeling, #ProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Analysis Type( Name( "Choose best analysis (EMS REML Bayesian)" ) ),
	Process Variation( 0 ),
	Std Dev Chart( 1 ),
	Model( "Crossed" )
);
dt << delete columns( "Measurement" );
obj << Variance Components( 1 );
obj << Misclassification Probabilities;
obj << Discrimination Ratio;
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set response variable.
4. Set factor variables.
5. Choose best analysis method.
6. Disable process variation.
7. Enable standard deviation chart.
8. Specify crossed model.
9. Delete measurement column.
10. Display variance components.
11. Show misclassification probabilities.
12. Display discrimination ratio.



### Example 70
> **Summary**: Creates a Variability Chart to analyze City Mileage (MPG) with factors Manufacturer, Model, Vehicle Category, and Drive Train Type using a Crossed model.

<!-- Keywords: #VariabilityChart, #CrossedModel, #JSLScriptingLanguage, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Variability Chart(
	Y( :Name( "City Mileage (MPG)" ) ),
	X( :Manufacturer, :Model, :Vehicle Category, :Drive Train Type ),
	Model( "Crossed" ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( Name( "Choose best analysis (EMS REML Bayesian)" ) ),
	Vertical Charts( 1 ),
	Std Dev Chart( 0 ),
	Heterogeneity of Variance Tests( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Create Variability Chart object.
3. Set response variable: City Mileage (MPG).
4. Define factors: Manufacturer, Model, Vehicle Category, Drive Train Type.
5. Use crossed model for analysis.
6. Set maximum iterations to 100.
7. Set convergence limit to 0.00000001.
8. Set number of integration abscissas to 128.
9. Set number of function evaluations to 65536.
10. Choose best analysis method: EMS, REML, Bayesian.



### Example 71
> **Summary**: Creates a Variability Chart for height, with sex as the X variable, using a nested model and customizing the row legend, and generates a report.

<!-- Keywords: #VariabilityChart, #NestedModel, #CustomRowLegend, #ReportGeneration, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Variability Chart(
	Y( :height ),
	X( :sex ),
	Model( "Nested" ),
	Analysis Type( Name( "Choose best analysis (EMS REML Bayesian)" ) ),
	Process Variation( 0 ),
	Std Dev Chart( 0 ),
	SendToReport(
		Dispatch( {"Variability Chart for height"}, "Variability Chart", FrameBox,
			{Row Legend(
				height,
				Color( 1 ),
				Color Theme( "" ),
				Marker( 1 ),
				Marker Theme( "Standard" ),
				Continuous Scale( 0 ),
				Reverse Scale( 0 ),
				Excluded Rows( 0 )
			)}
		)
	)
);
obj << vertical charts;
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create variability chart.
3. Set Y variable to height.
4. Set X variable to sex.
5. Use nested model.
6. Choose best analysis method.
7. Disable process variation.
8. Disable standard deviation chart.
9. Customize row legend.
10. Display vertical charts.
11. Generate report.



### Example 72
> **Summary**: Creates a Variability Chart to analyze the relationship between Fat and other variables, utilizing Crossed model and various settings for optimal analysis.

<!-- Keywords: #VariabilityChart, #CrossedModel, #JMPScriptingLanguage, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Variability Chart(
	Y( :Fat ),
	X( :Name, :Manufacturer, :Mfr, :Name( "Hot/Cold" ), :Fiber Gr ),
	Model( "Crossed" ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( Name( "Choose best analysis (EMS REML Bayesian)" ) ),
	Process Variation( 0 ),
	Std Dev Chart( 0 ),
	Discrimination Ratio( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Variability Chart object.
3. Set Y variable to Fat.
4. Define X variables: Name, Manufacturer, Mfr, Hot/Cold, Fiber Gr.
5. Set model to Crossed.
6. Set max iterations to 100.
7. Set convergence limit to 0.00000001.
8. Set number of integration abscissas to 128.
9. Set number of function evaluations to 65536.
10. Choose best analysis method.



### Example 73
> **Summary**: Creates a Variability Chart to analyze the relationship between Operator, Part, and Instrument, with standard deviation charts and group means displayed for each operator.

<!-- Keywords: #VariabilityChart, #JMPScriptingLanguage, #DataAnalysis, #StatisticalModeling, #ProcessVariation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Variability Chart(
	Y( :new Y ),
	X( :Operator, :Part, :Instrument ),
	Analysis Type( Name( "Choose best analysis (EMS REML Bayesian)" ) ),
	Process Variation( 0 ),
	Std Dev Chart( 1 )
);
obj << Show Group Means( Operator ) << Group Means of Std Dev( Operator );
obj << Vertical Charts( 1 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set response variable.
4. Define factors.
5. Choose analysis type.
6. Disable process variation.
7. Enable standard deviation chart.
8. Display group means.
9. Show group means of std dev.
10. Arrange charts vertically.



### Example 74
> **Summary**: Creates two variability charts for analyzing Claim USD data, with customizable settings for maximum iterations, convergence limit, and function evaluations.

<!-- Keywords: #JMPScriptingLanguage, #VariabilityChart, #DataAnalysis, #CustomizationOptions, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Variability Chart(
	Y( :Claim USD ),
	X( :Gender, :Name( "Claim(Y/N)" ), :Name( "City(Y/N)" ), :Zone, :Region, :AgeClass ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Std Dev Chart( 1 ),
	Vertical Charts( 0 )
);
obj2 = dt << Variability Chart(
	Y( :Claim USD ),
	X( :Gender, :Name( "Claim(Y/N)" ), :Name( "City(Y/N)" ), :Zone, :Region, :AgeClass ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	Number Integration Abscissas( 128 ),
	Number Function Evals( 65536 ),
	Analysis Type( "Choose best analysis (EMS REML Bayesian)" ),
	Std Dev Chart( 1 ),
	Vertical Charts( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create variability chart object.
3. Set response variable to Claim USD.
4. Define factor variables for analysis.
5. Set maximum iterations for analysis.
6. Set convergence limit for analysis.
7. Set number of integration abscissas.
8. Set number of function evaluations.
9. Choose best analysis method.
10. Display standard deviation chart.
11. Create second variability chart object.
12. Display vertical charts.



### Example 75
> **Summary**: Creates a Variability Chart with customized settings, including selecting specific rows for analysis and hiding/excluding them.

<!-- Keywords: #VariabilityChart, #Customization, #DataSelection, #JSLScripting, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	Analysis Type( Name( "Choose best analysis (EMS REML Bayesian)" ) ),
	Standard( :Standard ),
	Process Variation( 6.19066 ),
	Variability Chart( 0 ),
	Std Dev Chart( 0 ),
	Bias Report( Confidence Intervals( 1 ), Measurement Error Graphs( 1 ) ),
	Automatic Recalc( 1 ),
	Show Standard Mean( 1 ),
	Linearity Study( 1 )
);
dt << Select Rows( {1, 2, 3} ) << hide << exclude;
```

**Code Explanation**:

1. Open data_table data
2. Create Variability Chart object.
3. Set Y variable: Response.
4. Set X variable: Part.
5. Choose best analysis method.
6. Set standard variable: Standard.
7. Define process variation.
8. Disable Variability Chart display.
9. Disable Std Dev Chart display.
10. Enable Bias Report with intervals and graphs.
11. Enable automatic recalculation.
12. Show standard mean.
13. Enable Linearity Study.
14. Hide and exclude rows 1, 2, 3.



### Example 76
> **Summary**: Creates a Variability Chart to analyze the relationship between height and sex, grouped by age, from a data table.

<!-- Keywords: #VariabilityChart, #DataTable, #JSLScriptingLanguage, #StatisticalAnalysis, #InteractiveVisualization -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
dt2 << select where( :age == 12 );
dt2 << exclude;
vc = Variability Chart( Y( :height ), X( :sex ), Std Chart( 1 ), By( :age ) );
rpt = vc << report;
```

**Code Explanation**:

1. Open data table;
2. Select rows where age is 12.
3. Exclude selected rows.
4. Create Variability Chart.
5. Set Y variable to height.
6. Set X variable to sex.
7. Enable Std Chart.
8. Group by age.
9. Generate report.
10. Assign report to rpt.



### Example 77
> **Summary**: Creates a Variability Chart with Bias Report and Confidence Intervals for analyzing response variable 'Response' across different 'Part' levels, while controlling for 'Standard'.

<!-- Keywords: #VariabilityChart, #BiasReport, #ConfidenceIntervals, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Variability Chart( Y( :Response ), X( :Part ), Standard( :Standard ), Std Dev Chart( 0 ) );
obj << Bias Report( Confidence Intervals( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create Variability Chart.
3. Set Response variable.
4. Set Part variable.
5. Set Standard variable.
6. Disable Std Dev Chart.
7. Generate Bias Report.
8. Enable Confidence Intervals.



### Example 78
> **Summary**: Creates and configures Variability Charts for a data table, copying frame settings to variables and resetting platform preferences.

<!-- Keywords: #VariabilityChart, #JMPScriptingLanguage, #DataAnalysis, #Preference, #FrameSettings -->

**Code**:
```jsl
dt = Open("data_table.jmp");
vc1 = dt << Variability Chart( Y( :weight ), X( :sex ) );
Report( vc1 )[FrameBox( 1 )] << Copy Frame Settings;
vc1Settings = Get Clipboard();
 Preference(
	Variability Chart( SendToReport( Dispatch( {}, "Variability Chart", FrameBox( 1 ), {Left( 1 ), Right( 0 ), Top( 0 ), Bottom( 1 )} ) ) )
);
vc2 = dt << Variability Chart( Y( :weight ), X( :sex ) );
Report( vc2 )[FrameBox( 1 )] << Copy Frame Settings;
vc2Settings = Get Clipboard();
 Preference( Variability Chart( "Default" ) );
vc3 = dt << Variability Chart( Y( :weight ), X( :sex ) );
Report( vc3 )[FrameBox( 1 )] << Copy Frame Settings;
vc3Settings = Get Clipboard();
```

**Code Explanation**:

1. Open data table;
2. Create variability chart.
3. Copy frame settings.
4. Save settings to variable.
5. Set platform preference.
6. Create another variability chart.
7. Copy frame settings.
8. Save settings to variable.
9. Reset platform preference.
10. Create final variability chart.



### Example 79
> **Summary**: Creates a Variability Chart report, extracts gauge statistics, and applies conditional formatting to highlight specific categories in the report.

<!-- Keywords: #JSLScripting, #VariabilityChart, #ConditionalFormatting, #GaugeStatistics, #ReportAutomation -->

**Code**:
```jsl
Names Default To Here( 1 );
//get table and make report
dt = Open("data_table.jmp");
rpt = dt << Variability Chart(
	Y( :Measurement ),
	MSA Metadata( :Measurement( Tolerance Range( 0.25 ) ) ),
	Model( "Crossed" ),
	X( :Operator, :part# ),
	Standard( :Standard ),
	Variability Analysis(
		:Measurement,
		Variability Chart( 0 ),
		Show Range Bars( 0 ),
		Show Cell Means( 0 ),
		Show Separators( 0 ),
		Show Points( 0 ),
		Std Dev Chart( 0 ),
		"Gauge R&R Report"n( 1 )
	)
);
//get the number of distinct categories
categories = (Report( rpt )["Variability Gauge Analysis for Measurement", "Gauge R&R",
Number Col Box( "~Gauge Stat" )] << get)[4];
//use that number of distinct categories to create a rule to highlight just that number in column. This won't work if the number of categories matches another number in the column (they'll both be highlighted)
Eval(
	Eval Expr(
		Preferences(
			Conditional Formatting Rules(
				RuleSet(
					RuleName( "My Special Rule" ),
					EqualTo(
						Value( Expr( categories ) ),
						Inclusive( 1 ),
						Format(
							Text Color( "Medium Dark Red" ),
							Back Color( "Light Yellow" ),
							Annotation( 1 ),
							FontStyle( Bold )
						)
					)
				)
			)
		)
	)
);
//tell that column to use the special rule
Report( rpt )["Variability Gauge Analysis for Measurement", "Gauge R&R",
Number Col Box( "~Gauge Stat" )] << Set conditional Format( "My Special Rule" );
```

**Code Explanation**:

1. Open data table.
2. Create variability chart report.
3. Extract gauge statistics.
4. Define conditional formatting rule.
5. Apply rule to gauge statistics column.



## Variability Chart using Points Jittered
### Example 1
> **Summary**: Opens a data table, creates a variability chart with jittered points, and applies a log scale to the axis.

<!-- Keywords: #JMPScriptingLanguage, #VariabilityChart, #LogScale, #AxisSettings, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
newObj = variability chart( x( :sex ), y( :height ), Points Jittered( 1 ) );
logScale = "Log";
axisMin = 60;
Report( newObj )[AxisBox( 1 )] << Scale( logScale );
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set X variable to sex.
4. Set Y variable to height.
5. Enable jittering for points.
6. Define log scale.
7. Set minimum axis value.
8. Access report object.
9. Select first axis box.
10. Apply log scale to axis.



### Example 2
> **Summary**: Opens a data table and generates a variability chart with jittered points, applying a log scale to the axis and setting a minimum value.

<!-- Keywords: #JMPScriptingLanguage, #VariabilityChart, #LogScale, #AxisSettings, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
newObj = variability chart( x( :sex ), y( :height ), Points Jittered( 1 ) );
logScale = "Log";
axisMin = 60;
Report( newObj )[AxisBox( 1 )] << Scale( logScale );
Report( newObj )[AxisBox( 1 )] << Min( axisMin );
```

**Code Explanation**:

1. Open data table.
2. Create variability chart.
3. Set X variable to sex.
4. Set Y variable to height.
5. Enable jittered points.
6. Define log scale.
7. Set minimum axis value.
8. Apply log scale to axis.
9. Set minimum value on axis.



## Variability Chart using If
> **Summary**: Creates and analyzes a data table with a new column, missing values assignment, and variability chart generation.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #VariabilityChart, #ConditionalStatements, #DataManipulation -->

**Code**:
```jsl
If( JMP Version() >= " 8.0.1",
	dt = Open("data_table.jmp");
	dt << New Column( "By", Set Values( J( 12, 1, 1 ) |/ J( 12, 1, 2 ) ) );
	dt:Y[13 :: 24] = .;
	Variability Chart( Y( Y ), X( Operator ), By( By ) );
	dt:Y[2] = .;
	Close( dt, No Save );
);
```

**Code Explanation**:

1. Check JMP version.
2. Open data table.
3. Create new column "By".
4. Assign values to "By" column.
5. Set Y values to missing for rows 13-24.
6. Generate Variability Chart.
7. Set Y value to missing for row 2.
8. Close data table without saving.



## Variability Chart using Set Property
> **Summary**: Creates a variability chart to analyze process variation and standard deviation, utilizing Log scale and custom axis properties.

<!-- Keywords: #VariabilityChart, #ProcessVariation, #StandardDeviation, #LogScale, #CustomAxisProperties -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Measurement << Set Property(
	"Axis",
	{Min( 0 ), Max( 2 ), Inc( 0.1 ), Minor Ticks( 0 ), Show Major
Ticks( 1 ), Show Minor Ticks( 1 ), Show Major
Grid( 0 ), Show Labels( 1 ),
	Scale( Log )}
);
vc = Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Analysis Type( Name( "Choose best analysis (EMS REML Bayesian)" ) ),
	Standard( :Standard ),
	Process Variation( 0 ),
	Std Dev Chart( 1 )
);
rpt = vc << report;
```

**Code Explanation**:

1. Open data table.
2. Set measurement axis properties.
3. Create variability chart.
4. Specify Y variable.
5. Specify X variables.
6. Choose analysis type.
7. Include standard variable.
8. Disable process variation.
9. Enable standard deviation chart.
10. Generate report.



