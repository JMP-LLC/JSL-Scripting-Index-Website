# Variability Chart

## Example 1
> **Summary**: Create a variability chart with nested model analysis using EMS, REML, and Bayesian methods, incorporating standard deviation and gauge RR reports.

<!-- Keywords: #VariabilityChart, #AnalysisType, #Chart, #ConvLimit, #Limit -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
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

## Example 2
> **Summary**: Construct a Variability Chart for analyzing the process variation in Comb MPG using the main factors Mfr Name and Engine, with options for robust analysis methods, box plots, and specific plot dimensions.

<!-- Keywords: #VariabilityChart, #AnalysisType, #BoxPlots, #Chart, #ConvLimit -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hybrid Fuel Economy.jmp");
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

## Example 3
> **Summary**: Prepare a variability chart to analyze shrinkage in investment castings, considering temperature and casting as factors using a nested model.

<!-- Keywords: #VariabilityChart, #AnalysisType, #Chart, #Close, #ConvLimit -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Investment Castings.jmp");
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

## Example 4
> **Summary**: Generate a variability chart of fill weight by sample using EMS, REML, and Bayesian analysis options .

<!-- Keywords: #VariabilityChart, #AnalysisType, #Chart, #ConvLimit, #Limit -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Vial Fill Weights.jmp");
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

## Example 5
> **Summary**: Create a Variability Chart to analyze the tip percentage by day of the week, using the Choose best analysis method, and customize the chart with standard deviation and mean diamonds, while setting specific axis and frame settings.

<!-- Keywords: #VariabilityChart, #AnalysisType, #Chart, #ConvLimit, #FrameSize -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Restaurant Tips.jmp");
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

## Example 6
> **Summary**: Construct a Variability Chart to Analyze Tip Percentage by Day within Each Server

<!-- Keywords: #VariabilityChart, #AnalysisType, #Chart, #ConvLimit, #FrameSize -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Restaurant Tips.jmp");
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

## Example 7
> **Summary**: Create a variability chart for a dataset containing Fahrenheit temperatures, grouped by volunteer and sector, using the Choose best analysis (EMS REML Bayesian) method to analyze process variation and include a standard deviation chart.

<!-- Keywords: #VariabilityChart, #AnalysisType, #Chart, #ProcessVariation, #StdDevChart -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/S4 Temps.jmp");
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

## Example 8
> **Summary**: Create a Variability Chart with Standard Deviation and Bias Reports to assess linearity and process variation.

<!-- Keywords: #BiasReport, #LinearityStudy, #VariabilityChart, #Chart, #ProcessVariation -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Variability Data/MSALinearity.jmp");
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

## Example 9
> **Summary**: Create a variability chart using the Variability Chart function to analyze the Measurement response variable by Operator and part factors, automatically selecting the best analysis type based on EMS, REML, or Bayesian methods, including a standard deviation chart.

<!-- Keywords: #VariabilityChart, #AnalysisType, #Chart, #ProcessVariation, #Standard -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Variability Data/2 Factors Crossed.jmp");
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

## Example 10
> **Summary**: Create a variability chart with nested factors using operator and part configurations and display standard deviation charts.

<!-- Keywords: #VariabilityChart, #Chart, #Points, #ShowPoints, #StdDevChart -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Variability Data/2 Factors Nested.jmp");
// Variability Chart - Nested
Variability Chart(
	Y( :" Y"n ),
	X( :Operator, :Part ),
	Variance Components( "Nested" ),
	Show Points( 1 ),
	Std Dev Chart( 1 )
);
```

## Example 11
> **Summary**: Perform a Variability Chart analysis for crossed and nested factors.

<!-- Keywords: #VariabilityChart, #Chart, #Points, #ShowPoints, #StdDevChart -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Variability Data/3 Factors Crossed & Nested.jmp");
// Variability Chart - Crossed & Nested
Variability Chart(
	Y( :Y ),
	X( :Operator, :Instrument, :Part ),
	Show Points( 1 ),
	Std Dev Chart( 1 )
);
```

## Example 12
> **Summary**: Perform a Variability Chart analysis with a crossed model for the new Y variable, using Instrument, Operator, and Part as factors, with options to choose the best analysis using EMS, REML, and Bayesian methods.

<!-- Keywords: #VariabilityChart, #AnalysisType, #Chart, #ConnectCellMeans, #ConvLimit -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Variability Data/3 Factors Crossed.jmp");
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

## Example 13
> **Summary**: Perform a Gauge R&R analysis using a Variability Chart with nested and crossed factors.

<!-- Keywords: #VariabilityChart, #Chart, #ConnectCellMeans, #MeanofStdDev, #Means -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Variability Data/3 Factors Nested & Crossed.jmp");
// Gauge R&R
Variability Chart(
	Y( :Y ),
	X( :Operator, :Instrument, :Part ),
	Model( "Nested then Crossed" ),
	Connect Cell Means( 1 ),
	Mean of Std Dev( 1 )
);
```

## Example 14
> **Summary**: Construct a variability chart to analyze the process variation using crossed model for the response variable.

<!-- Keywords: #VariabilityAnalysis, #VariabilityChart, #AnalysisType, #Chart, #ConnectCellMeans -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Variability Data/Gasket.jmp");
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

