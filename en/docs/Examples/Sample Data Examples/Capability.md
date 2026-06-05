# Capability

## Example 1
> **Summary**: Perform process capability analysis with a goal plot and capability index plot

<!-- Keywords: #Capability, #GoalPlot, #ProcessCapability, #CapabilityIndexPlot, #Grouping -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cheese Manufacturing Data.jmp");
// Process Capability
Process Capability(
	Process Variables(
		:pH, :Salt Concentration,
		:Moisture Content
	),
	Grouping( :Cheese Type ),
	Moving Range Method(
		Average of Moving Ranges
	),
	Goal Plot( 1 ),
	Capability Index Plot( 1 ),
	Process Performance Plot( 0 )
);
```

## Example 2
> **Summary**: Generate process capability analysis with specified limits and a goal plot

<!-- Keywords: #Capability, #GoalPlot, #ProcessCapability, #SpecLimits, #Get -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cities.jmp");
// Process Capability
Process Capability(
	Process Variables(
		:OZONE, :CO, :SO2, :NO
	),
	Spec Limits(
		OZONE(
			LSL( 0 ),
			Target( 0.05 ),
			USL( 0.1 )
		),
		CO(
			LSL( 5 ),
			Target( 10 ),
			USL( 20 )
		),
		SO2(
			LSL( 0 ),
			Target( 0.03 ),
			USL( 0.08 )
		),
		NO(
			LSL( 0 ),
			Target( 0.025 ),
			USL( 0.6 )
		)
	),
	Goal Plot( 1, Shade Levels( 1 ) )
);
```

## Example 3
> **Summary**: Create a control chart for the sample label Lot with XBar and R charts, including capability analysis and histogram customization.

<!-- Keywords: #Capability, #CapabilityAnalysis, #ContinuousDistribution, #ControlChart, #Distribution -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// Control Chart
Control Chart(
	Sample Label( :Lot ),
	KSigma( 3 ),
	Chart Col(
		:X,
		XBar,
		R,
		Capability(
			Distribution(
				Continuous Distribution(
					Column( :X ),
					Quantiles( 0 ),
					Summary Statistics(
						0
					),
					Count Axis( 1 ),
					Outlier Box Plot( 0 ),
					Normal Quantile Plot(
						1
					),
					Capability Analysis(
						LSL( 107 ),
						USL( 147 ),
						Target( 127 ),
						Sigma(
							40.1484175601687
						)
					)
				)
			)
		)
	),
	SendToReport(
		Dispatch( {"Distributions", "X"},
			"Distrib Histogram", FrameBox,
			{
			DispatchSeg(
				Hist Seg( 1 ),
				Histogram Color( 42 )
			)}
		)
	)
);
```

## Example 4
> **Summary**: Generate a Shewhart Poisson control chart for a binary surface quality variable using the Control Chart Builder platform.

<!-- Keywords: #Capability, #Class, #ControlChartBuilder, #Chart, #ControlPanel -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// Control Chart Builder 3
Control Chart Builder(
	Size( 524, 450 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Class( Shewhart Attribute ),
	Variables( Y( :surface quality ) ),
	Chart(
		Points( Statistic( "Count" ) ),
		Limits( Sigma( "Poisson" ) )
	)
);
```

## Example 5
> **Summary**: Analyze the distribution of actual impurity levels using a lognormal fit and assess process capability with a specified upper specification limit of 2.5.

<!-- Keywords: #Capability, #ColumnSwitcher, #ContinuousDistribution, #Distribution, #ProcessCapability -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Impurity Process Capability with Detection Limits.jmp");
// Distribution Lognormal Capability
Distribution(
	Continuous Distribution(
		Column( :Actual Impurity ),
		Quantiles( 0 ),
		Summary Statistics( 0 ),
		Always use column properties( 1 ),
		Histogram( 0 ),
		Vertical( 0 ),
		Outlier Box Plot( 0 ),
		Fit Lognormal(
			Process Capability(
				LSL( . ),
				Target( . ),
				USL( 2.5 ),
				Show as Graph Reference Lines
			)
		),
		Process Capability( 0 )
	),
	Column Switcher(
		:Actual Impurity,
		{:Actual Impurity,
		:"1.0 Limited Impurity"n,
		:"1.5 Limited Impurity"n,
		:"2.0 Limited Impurity"n,
		:"2.5 Limited Impurity"n}
	)
);
```

## Example 6
> **Summary**: Build a control chart for a quality control process using the Control Chart Builder function .

<!-- Keywords: #Capability, #ControlChartBuilder, #Chart, #Group, #ShowCapability -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Combined.jmp");
// Control Chart Builder
Control Chart Builder(
	Show Capability( 0 ),
	Variables(
		Subgroup( :Run ),
		Y( :Length )
	),
	Chart( Position( 1 ) ),
	Chart( Position( 2 ) )
);
```

## Example 7
> **Summary**: Construct an Individual Moving Range (IMR) chart with multiple control limits in the Control Chart Builder platform.

<!-- Keywords: #Capability, #ControlChartBuilder, #Chart, #Limits, #ShowCapability -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Engine Temperature Sensor.jmp");
// IMR Chart
Control Chart Builder(
	Show Capability( 0 ),
	Variables( Y( :Y ) ),
	Chart(
		Position( 1 ),
		Limits( Sigma( Moving Range ) ),
		Warnings(
			Test 1( 1 ),
			Test 2( 1 ),
			Test 3( 1 ),
			Test 4( 1 ),
			Test 5( 1 ),
			Test 6( 1 ),
			Test 7( 1 ),
			Test 8( 1 )
		)
	),
	Chart(
		Position( 2 ),
		Limits( Sigma( Moving Range ) )
	)
);
```

## Example 8
> **Summary**: Build a control chart with subgroup and Y variables using Control Chart Builder.

<!-- Keywords: #Capability, #ControlChartBuilder, #Chart, #Group, #ShowCapability -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Line Length.jmp");
// Control Chart Builder
Control Chart Builder(
	Show Capability( 0 ),
	Variables(
		Subgroup( :Run ),
		Y( :Length )
	),
	Chart(
		Position( 1 ),
		Warnings(
			Test 1( 1 ),
			Test 2( 1 ),
			Test 3( 1 ),
			Test 4( 1 ),
			Test 5( 1 ),
			Test 6( 1 ),
			Test 7( 1 ),
			Test 8( 1 )
		)
	),
	Chart( Position( 2 ) )
);
```

## Example 9
> **Summary**: Build a control chart using the Control Chart Builder platform, incorporating subgroup and Y variables, and setting specific control limits for each chart.

<!-- Keywords: #Capability, #ControlChartBuilder, #Avg, #Chart, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/New Length Data.jmp");
// Control Chart Builder
Control Chart Builder(
	Show Capability( 0 ),
	Variables(
		Subgroup( :Run ),
		Y( :Length )
	),
	Chart(
		Position( 1 ),
		Set Control Limits(
			{LCL( 15.90519 ),
			UCL( 16.09131 ),
			Avg( 15.99825 )}
		)
	),
	Chart(
		Position( 2 ),
		Set Control Limits(
			{LCL( 0 ), UCL( 0.161693 ),
			Avg( 0.0495 )}
		)
	)
);
```

## Example 10
> **Summary**: Create a Control Chart Builder with a specified subgroup, response variable, and phase variable, and customize the limits and appearance using the Sigma Moving Range method.

<!-- Keywords: #Capability, #ControlChartBuilder, #Chart, #Group, #Limits -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Phase Historical Data.jmp");
// Control Chart Builder
Control Chart Builder(
	Show Capability( 0 ),
	Variables(
		Subgroup( :Run ),
		Y( :Force ),
		Phase( :Site )
	),
	Chart(
		Position( 1 ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Limits( Sigma( "Moving Range" ) )
	),
	SendToReport(
		Dispatch( {},
			"Control Chart Builder",
			FrameBox,
			{
			DispatchSeg(
				Text Seg( 4 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			),
			DispatchSeg(
				Text Seg( 5 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			),
			DispatchSeg(
				Text Seg( 6 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			)}
		)
	)
);
```

## Example 11
> **Summary**: Construct a Three-Way Chart of Fill Weight using Control Chart Builder, incorporating Subgroup, Moving Range on Means, and Range statistics.

<!-- Keywords: #Capability, #ControlChartBuilder, #Chart, #ControlPanel, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Vial Fill Weights.jmp");
// Three-Way Chart of Fill Weight
Control Chart Builder(
	Size( 526, 451 ),
	Show Control Panel( 0 ),
	Show Capability( 0 ),
	Variables(
		Subgroup( :Sample ),
		Y( :Fill Weight )
	),
	Chart(
		Position( 1 ),
		Points( Statistic( "Average" ) ),
		Limits( Sigma )
	),
	Chart(
		Position( 2 ),
		Points(
			Statistic(
				"Moving Range on Means"
			)
		),
		Limits( Sigma )
	),
	Chart(
		Position( 3 ),
		Points( Statistic( "Range" ) ),
		Limits( Sigma )
	)
);
```

## Example 12
> **Summary**: Create a control chart with an individual measurement plot and capability analysis for the Disso variable, using the API Lot No as the sample label, with LSL set to 70, and Group Size of 1.

<!-- Keywords: #Capability, #ControlChart, #Chart, #Get, #IndividualMeasurement -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Tablet Production.jmp");
// Control Chart and Distribution
Control Chart(
	Sample Label( :API Lot No ),
	Group Size( 1 ),
	KSigma( 3 ),
	Chart Col(
		:Disso,
		Individual Measurement(
			Test 1( 1 )
		),
		Capability(
			LSL( 70 ),
			USL( . ),
			Target( . )
		)
	)
);
```

