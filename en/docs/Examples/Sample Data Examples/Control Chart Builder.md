# Control Chart Builder

## Example 1
> **Summary**: Build and customize a control chart using the Control Chart Builder function .

<!-- Keywords: #ControlChartBuilder, #SpecLimits, #Chart, #Limits, #Line -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// Control Chart Builder
Control Chart Builder(
	Variables( Y( :Y ) ),
	Chart(
		Position( 1 ),
		Limits( Spec Limits( 1 ) )
	),
	Chart( Position( 2 ) ),
	SendToReport(
		Dispatch( {}, "Y", ScaleBox,
			{
			Add Ref Line(
				208, Solid, "Blue", "LSL",
				2
			),
			Add Ref Line(
				248, Solid, "Blue", "USL",
				2
			),
			Add Ref Line(
				228, Solid, "Blue",
				"Target", 2
			)}
		)
	)
);
```

## Example 2
> **Summary**: Build a control chart using the Control Chart Builder platform with subgrouping, specify Y variable and LSL, USL, and Target reference lines.

<!-- Keywords: #ControlChartBuilder, #Chart, #ControlPanel, #Group, #Line -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// Control Chart Builder 2
Control Chart Builder(
	Size( 524, 446 ),
	Show Control Panel( 0 ),
	Variables(
		Subgroup( :Lot ),
		Y( :X )
	),
	Chart( Position( 1 ) ),
	Chart( Position( 2 ) ),
	SendToReport(
		Dispatch( {}, "X", ScaleBox,
			{
			Add Ref Line(
				107, "Solid", "Blue",
				"LSL", 1
			),
			Add Ref Line(
				147, "Solid", "Blue",
				"USL", 1
			),
			Add Ref Line(
				127, "Solid", "Blue",
				"Target", 1
			)}
		)
	)
);
```

## Example 3
> **Summary**: Construct an NP Control Chart in the Control Chart Builder module using the Shewhart Attribute analysis, with Sample as the subgroup variable and Status as the Y variable, displaying count points and binomial-based control limits.

<!-- Keywords: #Class, #ControlChartBuilder, #Chart, #ControlPanel, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Bottle Tops.jmp");
// Control Chart Builder NP Chart
Control Chart Builder(
	Show Control Panel( 0 ),
	Class( "Shewhart Attribute" ),
	Variables(
		Subgroup( :Sample ),
		Y( :Status )
	),
	Chart(
		Points( Statistic( "Count" ) ),
		Limits( Sigma( "Binomial" ) )
	)
);
```

## Example 4
> **Summary**: Construct a G chart in the Control Chart Builder using a negative binomial distribution for limits and enable the warning for points beyond limits.

<!-- Keywords: #Class, #ControlChartBuilder, #Chart, #ControlPanel, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Adverse Reactions.jmp");
// Control Chart Builder G Chart
Control Chart Builder(
	Show Control Panel( 0 ),
	Class( "Rare Event" ),
	Variables(
		Subgroup( :Date of ADE ),
		Y( :Doses since Last ADE )
	),
	Chart(
		Points( Statistic( "Count" ) ),
		Limits(
			Sigma( "Negative Binomial" )
		),
		Warnings(
			Test Beyond Limits( 1 )
		)
	)
);
```

## Example 5
> **Summary**: Build a control chart with average and range charts in the Control Chart Builder platform.

<!-- Keywords: #ControlChartBuilder, #Chart, #ControlPanel, #Limits, #Line -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Airport.jmp");
// Control Chart Builder
Control Chart Builder(
	Show Control Panel( 0 ),
	Variables(
		"Subgroup"(:Day), "Y"(:Delay)
	),
	Chart(
		Position( 1 ),
		Points( Statistic( "Average" ) ),
		Limits( Sigma( "Range" ) ),
		Connecting Line( 1 )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Range" ) ),
		Limits( Sigma( "Range" ) ),
		Connecting Line( 1 )
	)
);
```

## Example 6
> **Summary**: Build a P Chart for attribute data using the Control Chart Builder .

<!-- Keywords: #Class, #ControlChartBuilder, #Chart, #ControlPanel, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Bottle Tops.jmp");
// Control Chart Builder P Chart
Control Chart Builder(
	Show Control Panel( 0 ),
	Class( "Shewhart Attribute" ),
	Variables(
		Subgroup( :Sample ),
		Y( :Status ),
		Phase( :Phase )
	),
	Chart(
		Points(
			Statistic( "Proportion" )
		),
		Limits( Sigma( "Binomial" ) )
	)
);
```

## Example 7
> **Summary**: Build a U control chart utilizing the Control Chart Builder platform with Poisson distribution limits.

<!-- Keywords: #Class, #ControlChartBuilder, #Chart, #Group, #Limits -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Braces.jmp");
// Control Chart Builder: U Chart
Control Chart Builder(
	Sort by Row Order( 1 ),
	Class( "Shewhart Attribute" ),
	Variables(
		Subgroup( :Date ),
		Y( :"# defects"n ),
		n Trials( :Unit size )
	),
	Chart(
		Points(
			Statistic( "Proportion" )
		),
		Limits( Sigma( "Poisson" ) )
	)
);
```

## Example 8
> **Summary**: Build a Shewhart attribute control chart using the Control Chart Builder function  to analyze a quality control dataset.

<!-- Keywords: #Class, #ControlChartBuilder, #Chart, #ControlPanel, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Cabinet Defects.jmp");
// Control Chart Builder
Control Chart Builder(
	SHow control panel( 0 ),
	Class( "Shewhart Attribute" ),
	Variables(
		Subgroup( :Lot Number ),
		Y( :Type of Defect ),
		Phase( :Date )
	),
	Chart(
		Points( Statistic( "Count" ) ),
		Limits( Sigma( "Binomial" ) )
	)
);
```

## Example 9
> **Summary**: Create Mean and Range Control Charts for Quality Control Analysis.

<!-- Keywords: #ControlChartBuilder, #Chart, #ControlPanel, #Limits, #Line -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Coating.jmp");
// Mean and Range Charts
Control Chart Builder(
	Show Control Panel( 0 ),
	Variables(
		"Subgroup"(:Sample), "Y"(:Weight)
	),
	Chart(
		Position( 1 ),
		Points( Statistic( "Average" ) ),
		Limits( Sigma( "Range" ) ),
		Connecting Line( 1 )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Range" ) ),
		Limits( Sigma( "Range" ) ),
		Connecting Line( 1 )
	)
);
```

## Example 10
> **Summary**: Generate a Short Run chart of Weight using the Control Chart Builder with a Moving Range Centered statistic and Product as the Part variable.

<!-- Keywords: #Class, #ControlChartBuilder, #Chart, #ControlPanel, #Part -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Coating.jmp");
// Short Run chart of Weight
Control Chart Builder(
	Class( Short Run ),
	Variables(
		Y( :Weight ),
		Part( :Product )
	),
	Chart(
		Position( 2 ),
		Points(
			Statistic(
				"Moving Range Centered"
			)
		)
	),
	Show Control Panel( 0 )
);
```

## Example 11
> **Summary**: Construct a control chart using the Control Chart Builder platform with DAY as the subgroup variable and DIAMETER as the response variable, displaying both the average and range subgroups with connecting lines and sigma limits.

<!-- Keywords: #ControlChartBuilder, #Chart, #ControlPanel, #Limits, #Line -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Diameter.jmp");
// Control Chart Builder
Control Chart Builder(
	Show Control Panel( 0 ),
	Variables(
		"Subgroup"(:DAY), "Y"(:DIAMETER)
	),
	Chart(
		Position( 1 ),
		Points( Statistic( "Average" ) ),
		Limits( Sigma( "Range" ) ),
		Connecting Line( 1 )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Range" ) ),
		Limits( Sigma( "Range" ) ),
		Connecting Line( 1 )
	)
);
```

## Example 12
> **Summary**: Create an XBar control chart with Phase distinction for quality control analysis using the Control Chart Builder with Average and Range statistics.

<!-- Keywords: #ControlChartBuilder, #Chart, #ControlPanel, #Limits, #Line -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Diameter.jmp");
// XBar Phases
Control Chart Builder(
	Show Control Panel( 1 ),
	Variables(
		"Subgroup"(:DAY), "Y"(:DIAMETER),
		"Phase"(:Phase)
	),
	Chart(
		Position( 1 ),
		Points( Statistic( "Average" ) ),
		Limits( Sigma( "Range" ) ),
		Connecting Line( 1 )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Range" ) ),
		Limits( Sigma( "Range" ) ),
		Connecting Line( 1 )
	)
);
```

## Example 13
> **Summary**: Generate a P chart for the proportion of defective units using week subgroups with a Binomial distribution in the Control Chart Builder platform.

<!-- Keywords: #Class, #ControlChartBuilder, #Chart, #ControlPanel, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Electrical Component Defect Screening.jmp");
// P chart of N Defective Week Subgrouping
Control Chart Builder(
	Size( 534, 450 ),
	Show Control Panel( 0 ),
	Class( Shewhart Attribute ),
	Variables(
		Subgroup( :Week ),
		Y( :N Defective ),
		n Trials( :N Units )
	),
	Chart(
		Points(
			Statistic( "Proportion" )
		),
		Limits( Sigma( "Binomial" ) )
	),
	SendToReport(
		Dispatch( {}, "N Defective",
			ScaleBox,
			{Min( -0.000843572386136978 ),
			Max( 0.1 ), Inc( 0.01 ),
			Minor Ticks( 1 )}
		)
	)
);
```

## Example 14
> **Summary**: Create a P' Chart to Monitor Proportions of Defectives with Laney P' Adjustment, Grouping Data by Week Subgroup Size.

<!-- Keywords: #Class, #ControlChartBuilder, #Chart, #ControlPanel, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Electrical Component Defect Screening.jmp");
// P' chart of N Defective Week Subgrouping
Control Chart Builder(
	Size( 534, 450 ),
	Show Control Panel( 0 ),
	Class( Shewhart Attribute ),
	Variables(
		Subgroup( :Week ),
		Y( :N Defective ),
		n Trials( :N Units )
	),
	Chart(
		Points(
			Statistic( "Proportion" )
		),
		Limits(
			Sigma( "Laney P Prime" )
		)
	),
	SendToReport(
		Dispatch( {}, "N Defective",
			ScaleBox,
			{Min( -0.000843572386136978 ),
			Max( 0.1 ), Inc( 0.01 ),
			Minor Ticks( 1 )}
		)
	)
);
```

## Example 15
> **Summary**: Create a P chart to monitor the proportion of defective electrical components over time using the Control Chart Builder platform.

<!-- Keywords: #Class, #ControlChartBuilder, #Chart, #ControlPanel, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Electrical Component Defect Screening.jmp");
// P chart of N Defective
Control Chart Builder(
	Size( 622, 305 ),
	Show Control Panel( 0 ),
	Class( Shewhart Attribute ),
	Variables(
		Subgroup( :Week ),
		Subgroup(
			:Weekday,
			Position( 1 )
		),
		Y( :N Defective ),
		n Trials( :N Units )
	),
	Chart(
		Points(
			Statistic( "Proportion" )
		),
		Limits( Sigma( "Binomial" ) )
	),
	SendToReport(
		Dispatch( {}, "N Defective",
			ScaleBox,
			{Min( -0.00188665487286776 ),
			Max( 0.140225884611048 ),
			Inc( 0.02 ), Minor Ticks( 0 )
			}
		)
	)
);
```

## Example 16
> **Summary**: Create a Laney P' chart of N Defective using the Control Chart Builder  with specified subgroup and variable configurations.

<!-- Keywords: #Class, #ControlChartBuilder, #Chart, #ControlPanel, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Electrical Component Defect Screening.jmp");
// P' chart of N Defective
Control Chart Builder(
	Size( 622, 305 ),
	Show Control Panel( 0 ),
	Class( Shewhart Attribute ),
	Variables(
		Subgroup( :Week ),
		Subgroup(
			:Weekday,
			Position( 1 )
		),
		Y( :N Defective ),
		n Trials( :N Units )
	),
	Chart(
		Points(
			Statistic( "Proportion" )
		),
		Limits(
			Sigma( "Laney P Prime" )
		)
	),
	SendToReport(
		Dispatch( {}, "N Defective",
			ScaleBox,
			{Min( -0.00188665487286776 ),
			Max( 0.140225884611048 ),
			Inc( 0.02 ), Minor Ticks( 0 )
			}
		)
	)
);
```

## Example 17
> **Summary**: Generate a C Chart using the Control Chart Builder function to visualize defect counts per unit.

<!-- Keywords: #Class, #ControlChartBuilder, #Chart, #ControlPanel, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Fabric.jmp");
// Control Chart Builder: C Chart
Control Chart Builder(
	Show Control Panel( 0 ),
	Class( "Shewhart Attribute" ),
	Variables(
		Subgroup( :Bolt ),
		Y( :Flaws )
	),
	Chart(
		Points( Statistic( "Count" ) ),
		Limits( Sigma( "Poisson" ) )
	)
);
```

## Example 18
> **Summary**: Generate individual and moving range control charts using the Control Chart Builder platform.

<!-- Keywords: #ControlChartBuilder, #SpecLimits, #Chart, #ControlPanel, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Fan Burnout.jmp");
// Control Chart Builder Individual and Moving Range Charts
Control Chart Builder(
	Show Control Panel( 0 ),
	Variables(
		Subgroup( :Burnout ),
		Y( :Hours between Burnouts )
	),
	Chart(
		Position( 1 ),
		Limits( Spec Limits( 1 ) )
	),
	Chart( Position( 2 ) ),
	SendToReport(
		Dispatch( {}, "Burnout", ScaleBox,
			{Min( 0 ), Max( 26 ),
			Inc( 2 ), Minor Ticks( 0 )}
		)
	)
);
```

## Example 19
> **Summary**: Build a rare event T control chart in the Control Chart Builder platform using Weibull limits for subgrouped data analysis.

<!-- Keywords: #Class, #ControlChartBuilder, #Chart, #Group, #Limits -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Fan Burnout.jmp");
// Control Chart Builder T Chart
Control Chart Builder(
	Class( "Rare Event" ),
	Variables(
		Subgroup( :Burnout ),
		Y( :Hours between Burnouts )
	),
	Chart(
		Points( Statistic( "Count" ) ),
		Limits( Sigma( "Weibull" ) )
	)
);
```

## Example 20
> **Summary**: Generate a Short Run DNOM chart using Control Chart Builder, with subgroups defined by Box, and variables for % Cocoa and Product. The chart includes product-level statistics for different types of chocolates, setting targets and sigmas accordingly.

<!-- Keywords: #Class, #ControlChartBuilder, #Chart, #Get, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Fancy Chocolate Factory.jmp");
// Short Run DNOM
Control Chart Builder(
	Show Product Separators( 0 ),
	Class( Short Run ),
	Variables(
		Subgroup( :Box ),
		Y( :"% Cocoa"n ),
		Part( :Product )
	),
	Chart(
		Position( 2 ),
		Points(
			Statistic( "Range Centered" )
		)
	),
	Product Statistics(
		:
		"% Cocoa"n(
			Product Level(
				Milk Chocolate(
					Target( 37 ),
					Sigma(
						3.76288031574307
					)
				),
				Dark Chocolate(
					Target( 70 ),
					Sigma(
						1.75728682873715
					)
				),
				Extra Dark Chocolate(
					Target( 85 ),
					Sigma(
						1.00725971457878
					)
				)
			)
		)
	)
);
```

## Example 21
> **Summary**: Execute a Short Run Standardized Control Chart with Product Separators and Target Specifications for the % Cocoa variable using the Control Chart Builder function.

<!-- Keywords: #Class, #ControlChartBuilder, #Chart, #Get, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Fancy Chocolate Factory.jmp");
// Short Run Standardized
Control Chart Builder(
	Show Product Separators( 0 ),
	Class( Short Run ),
	Variables(
		Subgroup( :Box, Position( 1 ) ),
		Y( :"% Cocoa"n ),
		Part( :Product )
	),
	Chart(
		Position( 1 ),
		Points(
			Statistic( "Standardized" )
		),
		Warnings( Test 1( 1 ) )
	),
	Chart(
		Position( 2 ),
		Points(
			Statistic( "Standardized" )
		)
	),
	Product Statistics(
		:
		"% Cocoa"n(
			Product Level(
				Milk Chocolate(
					Target( 37 ),
					Sigma( 3.5 )
				),
				Dark Chocolate(
					Target( 70 ),
					Sigma( 1.5 )
				),
				Extra Dark Chocolate(
					Target( 85 ),
					Sigma( 1 )
				)
			)
		)
	)
);
```

## Example 22
> **Summary**: Create an NP control chart using the Control Chart Builder to monitor the count of defects in samples.

<!-- Keywords: #Class, #ControlChartBuilder, #Chart, #ControlPanel, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Orange Juice.jmp");
// Control Chart Builder NP Chart
Control Chart Builder(
	Show Control Panel( 0 ),
	Class( Shewhart Attribute ),
	Variables(
		Subgroup( :Sample ),
		Y( :Status )
	),
	Chart(
		Points( Statistic( "Count" ) ),
		Limits( Sigma( "Binomial" ) )
	)
);
```

## Example 23
> **Summary**: Create a Control Chart using the Control Chart Builder with Shewhart Attribute for subgrouping by Sample, Y variable as Status, and Phased data. Display Proportion points and Binomial sigma limits.

<!-- Keywords: #Class, #ControlChartBuilder, #Chart, #ControlPanel, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Orange Juice.jmp");
// Control Chart Builder Phases
Control Chart Builder(
	Show Control Panel( 0 ),
	Class( Shewhart Attribute ),
	Variables(
		Subgroup( :Sample ),
		Y( :Status ),
		Phase( :Phase )
	),
	Chart(
		Points(
			Statistic( "Proportion" )
		),
		Limits( Sigma( "Binomial" ) )
	)
);
```

## Example 24
> **Summary**: Create an Individual Measurement Chart using Control Chart Builder, displaying both Individual and Moving Range statistics.

<!-- Keywords: #ControlChartBuilder, #Chart, #ControlPanel, #Limits, #Line -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Pickles.jmp");
// Individual Measurement Chart
Control Chart Builder(
	Show Control Panel( 0 ),
	Variables( "Y"(:Acid) ),
	Chart(
		Position( 1 ),
		Points(
			Statistic( "Individual" )
		),
		Limits( Sigma( "Moving Range" ) ),
		Connecting Line( 1 )
	),
	Chart(
		Position( 2 ),
		Points(
			Statistic( "Moving Range" )
		),
		Limits( Sigma( "Moving Range" ) ),
		Connecting Line( 1 )
	)
);
```

## Example 25
> **Summary**: Construct Shewhart attribute control chart for defect count with Poisson limits in the Control Chart Builder platform.

<!-- Keywords: #Class, #ControlChartBuilder, #Chart, #ControlPanel, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Shirts.jmp");
// Control Chart Builder
Control Chart Builder(
	Show Control Panel( 0 ),
	Class( "Shewhart Attribute" ),
	Variables(
		Subgroup( :Box ),
		Y( :"# Defects"n )
	),
	Chart(
		Points( Statistic( "Count" ) ),
		Limits( Sigma( "Poisson" ) )
	)
);
```

## Example 26
> **Summary**: Create a P Chart using the Control Chart Builder for Shewhart Attribute charts with proportion and Binomial limits to analyze defectives in a sample dataset.

<!-- Keywords: #Class, #ControlChartBuilder, #Chart, #ControlPanel, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Washers.jmp");
// Control Chart Builder: P Chart
Control Chart Builder(
	Show Control Panel( 0 ),
	Class( "Shewhart Attribute" ),
	Variables(
		Subgroup( :Lot ),
		Y( :"# defective"n ),
		n Trials( :Lot Size )
	),
	Chart(
		Points(
			Statistic( "Proportion" )
		),
		Limits( Sigma( "Binomial" ) )
	)
);
```

## Example 27
> **Summary**: Construct an NP Chart using the Control Chart Builder to analyze the number of defective items in subgroups with varying lot sizes.

<!-- Keywords: #Class, #ControlChartBuilder, #Chart, #ControlPanel, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Washers.jmp");
// Control Chart Builder: NP Chart
Control Chart Builder(
	Show Control Panel( 0 ),
	Class( "Shewhart Attribute" ),
	Variables(
		Subgroup( :Lot ),
		Y( :"# defective"n ),
		n Trials( :Lot Size )
	),
	Chart(
		Points( Statistic( "Count" ) ),
		Limits( Sigma( "Binomial" ) )
	)
);
```

## Example 28
> **Summary**: Create a P chart to monitor the proportion of Total Plastic defects over time using the Control Chart Builder platform , with subgrouping by Week, phase variable by Location, and n Trials based on Total Volume.

<!-- Keywords: #Class, #ControlChartBuilder, #Chart, #ControlPanel, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Water Plastics.jmp");
// P chart of Total Plastic
Control Chart Builder(
	Size( 814, 307 ),
	Show Two Shewhart Charts( 0 ),
	Show Control Panel( 0 ),
	Show Limit Summaries( 0 ),
	Class( Shewhart Attribute ),
	Variables(
		Subgroup( :Week ),
		Y( :Total Plastic ),
		Phase( :Location ),
		n Trials( :Total Volume )
	),
	Chart(
		Points(
			Statistic( "Proportion" )
		),
		Limits(
			Sigma( "Binomial" ),
			Show Lower Limit( 0 )
		)
	),
	SendToReport(
		Dispatch( {},
			"Control Chart Builder",
			FrameBox,
			{
			DispatchSeg(
				Text Seg( 1 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			),
			DispatchSeg(
				Text Seg( 2 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			),
			DispatchSeg(
				Text Seg( 3 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			)}
		)
	)
);
```

## Example 29
> **Summary**: Generate a Laney P-prime control chart for the proportion of Total Plastic defects using the Water Plastics dataset.

<!-- Keywords: #Class, #ControlChartBuilder, #Chart, #ControlPanel, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Water Plastics.jmp");
// Laney P' chart of Total Plastic
Control Chart Builder(
	Size( 814, 307 ),
	Show Two Shewhart Charts( 0 ),
	Show Control Panel( 0 ),
	Show Limit Summaries( 0 ),
	Class( Shewhart Attribute ),
	Variables(
		Subgroup( :Week ),
		Y( :Total Plastic ),
		Phase( :Location ),
		n Trials( :Total Volume )
	),
	Chart(
		Points(
			Statistic( "Proportion" )
		),
		Limits(
			Sigma( "Laney P Prime" ),
			Show Lower Limit( 0 )
		)
	),
	SendToReport(
		Dispatch( {},
			"Control Chart Builder",
			FrameBox,
			{
			DispatchSeg(
				Text Seg( 1 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			),
			DispatchSeg(
				Text Seg( 2 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			),
			DispatchSeg(
				Text Seg( 3 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			)}
		)
	)
);
```

## Example 30
> **Summary**: Create a control chart using the moving average with specifications limits.

<!-- Keywords: #ControlChartBuilder, #SpecLimits, #Chart, #ControlPanel, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Stock Averages.jmp");
// Control Chart Builder: Moving Average
Control Chart Builder(
	Variables(
		Subgroup( :Date ),
		Y( :Moving Average )
	),
	Chart(
		Position( 1 ),
		Limits( Spec Limits( 1 ) )
	),
	Chart( Position( 2 ) ),
	Show Control Panel( 0 )
);
```

