# Model Driven Multivariate Control Chart

## Example 1
> **Summary**: Create a Model-Driven Multivariate Control Chart for a Polyethylene Process. Functions used:_open, Model Driven Multivariate Control Chart, Process, Set Component, Historical Data End at Row, SendToReport, Dispatch, FrameBox, Grid Line Order, Reference Line Order.

<!-- Keywords: #ControlChart, #ModelDrivenMultivariateControlChart, #MultivariateControlChart, #Chart, #Order -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Polyethylene Process.jmp");
// Model Driven Multivariate Control Chart
Model Driven Multivariate Control Chart(
	Process(
		:X Score 1 Formula,
		:X Score 2 Formula,
		:X Score 3 Formula,
		:X Score 4 Formula
	),
	Set Component( 4 ),
	"Historical Data End at Row"(100),
	SendToReport(
		Dispatch(
			{"Monitor the Process",
			"T² for 4 Factors"},
			"Monitor the process",
			FrameBox( 3 ),
			{Grid Line Order( 1 ),
			Reference Line Order( 2 )}
		)
	)
);
```

## Example 2
> **Summary**: Generate a Model Driven Multivariate Control Chart (MDMCC) for the entire dataset, incorporating all identified process variables and including statistical prediction error and normalized DModX plots for comprehensive analysis.

<!-- Keywords: #ControlChart, #ModelDrivenMultivariateControlChart, #MultivariateControlChart, #Chart, #ID -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Flight Delays.jmp");
// MDMCC with entire data
Model Driven Multivariate Control Chart(
	Process(
		:AA, :CO, :DL, :F9, :FL, :NW, :UA,
		:US, :WN
	),
	Time ID( :Flight date ),
	Statistical Prediction Error Plot,
	Normalized DModX Plot
);
```

## Example 3
> **Summary**: Generate a model-driven multivariate control chart with principal component scores using historical data.

<!-- Keywords: #ControlChart, #ModelDrivenMultivariateControlChart, #MultivariateControlChart, #Chart, #HistoricalDataEndatRow -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Flight Delays.jmp");
// PCA score with historical
Model Driven Multivariate Control Chart(
	Process( :Prin1, :Prin2, :Prin3 ),
	Historical Data End at Row( 16 ),
	T2 Plot,
	Statistical Prediction Error Plot,
	Normalized DModX Plot
);
```

## Example 4
> **Summary**: Create a Model-Driven Multivariate Control Chart using historical data.

<!-- Keywords: #ControlChart, #ModelDrivenMultivariateControlChart, #MultivariateControlChart, #ScoreEllipseCoverage, #Chart -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Flight Delays.jmp");
// Original data with historical
Model Driven Multivariate Control Chart(
	Process(
		:AA, :CO, :DL, :F9, :FL, :NW, :UA,
		:US, :WN
	),
	Time ID( :Flight date ),
	Historical Data End at Row( 16 ),
	Score Plot(
		Score Ellipse Coverage( 0.95 )
	)
);
```

