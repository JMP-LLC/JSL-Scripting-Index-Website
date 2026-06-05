# Control Chart Builder

### Example 1
> **Summary**: Creates a control chart with specific limits and reference lines using JMP's Control Chart Builder platform.

<!-- Keywords: #JMP, #ControlChartBuilder, #StatisticalProcessControl, #QualityControl, #DataVisualization -->

**Code**:
```jsl
// Control Chart Builder
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Create control chart.
3. Set Y variable.
4. Configure first chart.
5. Set spec limits.
6. Configure second chart.
7. Send report settings.
8. Add LSL reference line.
9. Add USL reference line.
10. Add target reference line.



### Example 2
> **Summary**: Creates a Control Chart Builder with two charts, specifying subgroup and Y variables, and adding reference lines for LSL, USL, and Target.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #StatisticalProcessControl, #QualityControl, #DataVisualization -->

**Code**:
```jsl
// Control Chart Builder 2
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Create Control Chart Builder.
3. Set chart size.
4. Hide control panel.
5. Define subgroup variable.
6. Define Y variable.
7. Add first chart.
8. Add second chart.
9. Send report dispatch.
10. Add LSL reference line.
11. Add USL reference line.
12. Add target reference line.



### Example 3
> **Summary**: Generates a Control Chart Builder G Chart to visualize and analyze the count of doses since last adverse event (ADE) over time, with limits set using negative binomial sigma and warnings for test beyond limits.

<!-- Keywords: #ControlChartBuilder, #GChart, #NegativeBinomialSigma, #WarningLimits, #JSLScript -->

**Code**:
```jsl
// Control Chart Builder G Chart
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Initialize Control Chart Builder.
3. Hide control panel.
4. Set class variable.
5. Define subgroup variable.
6. Define Y variable.
7. Plot points using count statistic.
8. Set limits using negative binomial sigma.
9. Enable test beyond limits warning.
10. Display chart.



### Example 4
> **Summary**: Uses the Control Chart Builder to visualize and analyze data from a table, creating two Shewhart charts with average points and range limits.

<!-- Keywords: #ControlChartBuilder, #ShewhartCharts, #JMPScriptingLanguage, #DataVisualization, #QualityControl -->

**Code**:
```jsl
// Control Chart Builder
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Set control panel visibility.
3. Define subgroup variable.
4. Define Y variable.
5. Create first chart.
6. Set chart position.
7. Plot average points.
8. Add range limits.
9. Enable connecting lines.
10. Create second chart.



### Example 5
> **Summary**: Creates a Control Chart Builder NP chart to visualize and analyze the count points of a binomial distribution, utilizing the Shewhart Attribute class and hiding the control panel.

<!-- Keywords: #ControlChartBuilder, #NPChart, #ShewhartAttribute, #BinomialDistribution, #JMPScriptingLanguage -->

**Code**:
```jsl
// Control Chart Builder NP Chart
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Initialize Control Chart Builder.
3. Hide control panel.
4. Set chart type to Shewhart Attribute.
5. Define subgroup variable.
6. Define response variable.
7. Plot count points.
8. Set limits using binomial distribution.
9. Build the control chart.
10. Display the chart.



### Example 6
> **Summary**: Creates a Shewhart Attribute control chart using the Control Chart Builder platform in JMP, with a focus on visualizing the proportion of 'Status' over 'Sample' subgroups.

<!-- Keywords: #JMP, #ControlChartBuilder, #ShewhartAttribute, #BinomialLimits, #DataVisualization -->

**Code**:
```jsl
// Control Chart Builder P Chart
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Initialize Control Chart Builder.
3. Hide control panel.
4. Set chart type to Shewhart Attribute.
5. Define subgroup variable.
6. Define Y variable.
7. Define phase variable.
8. Add points statistic.
9. Set limits to Binomial.
10. Build the control chart.



### Example 7
> **Summary**: Creates a U Chart control chart builder in JMP, specifying subgroup by date, Y variable as number of defects, and n trials as unit size.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #UChart, #ShewhartAttribute, #PoissonSigma -->

**Code**:
```jsl
// Control Chart Builder: U Chart
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Create control chart builder.
3. Sort by row order.
4. Set chart type to Shewhart Attribute.
5. Define subgroup variable.
6. Define Y variable.
7. Define n Trials variable.
8. Add points to chart.
9. Set statistic to Proportion.
10. Set limits to Poisson Sigma.



### Example 8
> **Summary**: Creates a Shewhart attribute control chart using JMP's Control Chart Builder, specifying subgroup, Y, and phase variables, and plotting points with a binomial limit method.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #ShewhartAttribute, #BinomialLimitMethod, #DataVisualization -->

**Code**:
```jsl
// Control Chart Builder
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Create control chart.
3. Hide control panel.
4. Set chart type.
5. Define subgroup variable.
6. Define Y variable.
7. Define phase variable.
8. Plot points.
9. Set point statistic.
10. Set limit method.



### Example 9
> **Summary**: Generates a Mean and Range Chart using Control Chart Builder to visualize the distribution of 'Weight' values across 'Subgroup' samples, with connecting lines enabled.

<!-- Keywords: #ControlChartBuilder, #MeanAndRangeCharts, #JMPScriptingLanguage, #DataVisualization, #QualityControl -->

**Code**:
```jsl
// Mean and Range Charts
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Hide control panel.
4. Set subgroup variable.
5. Set Y variable.
6. Add first chart.
7. Set chart position.
8. Plot average points.
9. Set range limits.
10. Enable connecting lines.



### Example 10
> **Summary**: Generates a Short Run chart of Weight using Control Chart Builder, with the class set to Short Run and variables for Weight and Product.

<!-- Keywords: #ControlChartBuilder, #ShortRun, #Weight, #Product, #JMPScriptingLanguage -->

**Code**:
```jsl
// Short Run chart of Weight
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Create Control Chart Builder.
3. Set class to Short Run.
4. Add Weight variable.
5. Add Product part.
6. Position chart at 2.
7. Add Moving Range Centered points.
8. Hide control panel.



### Example 11
> **Summary**: Visualizes a control chart using the Control Chart Builder, with two charts displaying average and range values for the 'DIAMETER' variable, grouped by 'DAY'.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #DataVisualization, #StatisticalProcessControl, #QualityControl -->

**Code**:
```jsl
// Control Chart Builder
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Initialize Control Chart Builder.
3. Hide control panel.
4. Set subgroup variable.
5. Set Y variable.
6. Create first chart.
7. Position first chart.
8. Plot average points.
9. Set range limits.
10. Enable connecting lines.



### Example 12
> **Summary**: Visualizes XBar phases by creating a Control Chart Builder with two charts, displaying average and range statistics, and connecting lines.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #XBarPhases, #Statistics, #DataVisualization -->

**Code**:
```jsl
// XBar Phases
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Create control chart builder.
3. Show control panel.
4. Set variables: subgroup, Y, phase.
5. Add first chart.
6. Set position 1.
7. Plot average points.
8. Set range limits.
9. Enable connecting lines.
10. Add second chart.



### Example 13
> **Summary**: Visualizes a P chart for N Defective Week Subgrouping, using Control Chart Builder to plot proportion statistics with binomial limits.

<!-- Keywords: #ControlChartBuilder, #PChart, #BinomialLimits, #ShewhartAttribute, #JSL -->

**Code**:
```jsl
// P chart of N Defective Week Subgrouping
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Set size to 534x450.
4. Hide control panel.
5. Use Shewhart attribute class.
6. Define subgroup as Week.
7. Define Y variable as N Defective.
8. Define n Trials as N Units.
9. Plot proportion statistic.
10. Use binomial limits.



### Example 14
> **Summary**: Visualizes a P' chart for N Defective Week Subgrouping, utilizing Control Chart Builder to plot proportion statistics with Laney P Prime limits.

<!-- Keywords: #ControlChartBuilder, #PChart, #LaneyPPrime, #ShewhartAttribute, #JSL -->

**Code**:
```jsl
// P' chart of N Defective Week Subgrouping
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Set size of chart.
4. Hide control panel.
5. Use Shewhart attribute class.
6. Define subgroup variable.
7. Define Y variable.
8. Define n Trials variable.
9. Plot proportion statistic.
10. Use Laney P Prime limits.



### Example 15
> **Summary**: Generates a P chart of N Defective using Control Chart Builder, with variables for Week and N Units, to visualize the proportion of defective units over time.

<!-- Keywords: #ControlChartBuilder, #PChart, #JMPScriptingLanguage, #StatisticalProcessControl, #QualityControl -->

**Code**:
```jsl
// P chart of N Defective
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Create control chart.
3. Set chart size.
4. Hide control panel.
5. Define chart type.
6. Assign subgroup variables.
7. Add Y variable.
8. Add n Trials variable.
9. Set point statistic.
10. Set limit method.



### Example 16
> **Summary**: Visualizes a P' chart of N Defective using Control Chart Builder, specifying subgroup variables and point statistic, while hiding the control panel.

<!-- Keywords: #ControlChartBuilder, #PChart, #ShewhartAttribute, #JSLScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
// P' chart of N Defective
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Set size of chart.
4. Hide control panel.
5. Define chart type.
6. Specify subgroup variables.
7. Add Y variable.
8. Add n Trials variable.
9. Set point statistic.
10. Set limit method.



### Example 17
> **Summary**: Creates a Shewhart Attribute control chart to monitor flaws in bolts, using the Poisson distribution for limits and counting statistic for points.

<!-- Keywords: #ControlChart, #ShewhartAttribute, #PoissonDistribution, #CountStatistic, #JMPScriptingLanguage -->

**Code**:
```jsl
// Control Chart Builder: C Chart
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Initialize control chart builder.
3. Hide control panel.
4. Set chart type to Shewhart Attribute.
5. Define subgroup variable.
6. Define response variable.
7. Plot points using count statistic.
8. Set limits using Poisson distribution.
9. Display control chart.



### Example 18
> **Summary**: Visualizes individual and moving range charts using the Control Chart Builder, with specific settings for subgroup variable, Y variable, and Burnout scale.

<!-- Keywords: #ControlChartBuilder, #IndividualAndMovingRangeCharts, #JMPScriptingLanguage, #DataVisualization, #QualityControl -->

**Code**:
```jsl
// Control Chart Builder Individual and Moving Range Charts
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Hide control panel.
4. Set subgroup variable.
5. Set Y variable.
6. Add first chart.
7. Apply spec limits.
8. Add second chart.
9. Adjust Burnout scale.
10. Set Burnout min to 0.
11. Set Burnout max to 26.
12. Set Burnout increment to 2.
13. Disable minor ticks on Burnout.



### Example 19
> **Summary**: Opens a data table, creates a Control Chart Builder T Chart to visualize and analyze the 'Hours between Burnouts' variable by 'Burnout' subgroup, with limits set using the Weibull method.

<!-- Keywords: #ControlChartBuilder, #TChart, #WeibullLimits, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
// Control Chart Builder T Chart
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Create Control Chart Builder.
3. Set class variable.
4. Define subgroup variable.
5. Define Y variable.
6. Add points to chart.
7. Set point statistic.
8. Add limits to chart.
9. Set limit method.
10. Display chart.



### Example 20
> **Summary**: Opens a data table, creates a control chart with product statistics, and sets point statistic to 'Range Centered'.

<!-- Keywords: #ControlChart, #ProductStatistics, #JMPScriptingLanguage, #DataAnalysis, #QualityControl -->

**Code**:
```jsl
// Short Run DNOM
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Create control chart.
3. Hide product separators.
4. Set class variable.
5. Define subgroup variable.
6. Define Y variable.
7. Define part variable.
8. Position chart element.
9. Set point statistic.
10. Configure product statistics.



### Example 21
> **Summary**: Generates a control chart builder to visualize the standardized values of '% Cocoa' for different products, with product separators turned off and warning test 1 enabled.

<!-- Keywords: #ControlChartBuilder, #ShortRunStandardized, #JMPScriptingLanguage, #DataVisualization, #QualityControl -->

**Code**:
```jsl
// Short Run Standardized
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Set product separators off.
4. Define class as short run.
5. Add subgroup variable.
6. Add Y variable.
7. Add part variable.
8. Create first chart.
9. Set points statistic to standardized.
10. Enable warning test 1.



### Example 22
> **Summary**: Creates a Control Chart Builder NP chart to visualize and analyze the count-based status data, utilizing Shewhart Attribute class and binomial sigma limits.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #NPChart, #ShewhartAttribute, #BinomialSigma -->

**Code**:
```jsl
// Control Chart Builder NP Chart
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Create Control Chart Builder.
3. Set control panel visibility off.
4. Define chart type as Shewhart Attribute.
5. Specify subgroup variable.
6. Specify response variable.
7. Plot points based on count.
8. Set limits using binomial sigma.
9. Display NP chart.



### Example 23
> **Summary**: Creates a control chart builder with Shewhart Attribute class, defining subgroup, Y, and phase variables, and adding points to the chart with Proportion statistic and Binomial Sigma limits.

<!-- Keywords: #ControlChartBuilder, #ShewhartAttribute, #JSLScriptingLanguage, #BinomialSigma, #ProportionStatistic -->

**Code**:
```jsl
// Control Chart Builder Phases
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Hide control panel.
4. Set chart type to Shewhart Attribute.
5. Define subgroup variable.
6. Define Y variable.
7. Define phase variable.
8. Add points to chart.
9. Set statistic to Proportion.
10. Add limits using Binomial Sigma.



### Example 24
> **Summary**: Visualizes individual measurements and moving ranges using the Control Chart Builder, with two charts displaying Acid values and moving range limits.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #IndividualMeasurementChart, #MovingRangeLimits, #DataVisualization -->

**Code**:
```jsl
// Individual Measurement Chart
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Create Individual Measurement Chart.
3. Hide control panel.
4. Set Y variable to Acid.
5. Add first chart.
6. Position first chart.
7. Plot individual points.
8. Use moving range for limits.
9. Enable connecting lines.
10. Add second chart.



### Example 25
> **Summary**: Creates a Shewhart Attribute control chart using the Control Chart Builder platform in JMP, with count statistic and Poisson distribution limits.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #ShewhartAttribute, #PoissonDistribution, #StatisticalProcessControl -->

**Code**:
```jsl
// Control Chart Builder
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Hide control panel.
4. Set chart type to Shewhart Attribute.
5. Define subgroup variable.
6. Define response variable.
7. Plot points using count statistic.
8. Set limits using Poisson distribution.
9. Finalize chart configuration.



### Example 26
> **Summary**: Generates a Control Chart Builder to visualize and analyze the relationship between Thickness, Hour, and Cavity using average points and range limits.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #QualityControl -->

**Code**:
```jsl
// Control Chart Builder
// Open data table
dt = Open("data_table.jmp");
// Control Chart Builder
Control Chart Builder(
	Variables(
		"Subgroup"(:Hour),
		"Y"(:Thickness), "Phase"(:Cavity)
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
	),
	SendToReport(
		Dispatch( {}, "400", ScaleBox,
			{Legend Model( 2 ),
			Legend Model( 4 )}
		),
		Dispatch( {},
			"Control Chart Builder",
			FrameBox,
			{
			DispatchSeg(
				Text Seg( 5 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			),
			DispatchSeg(
				Text Seg( 6 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			),
			DispatchSeg(
				Text Seg( 7 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			),
			DispatchSeg(
				Text Seg( 8 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			),
			DispatchSeg(
				Text Seg( 9 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			),
			DispatchSeg(
				Text Seg( 10 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			),
			DispatchSeg(
				Text Seg( 11 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			),
			DispatchSeg(
				Text Seg( 12 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			),
			DispatchSeg(
				Text Seg( 13 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			),
			DispatchSeg(
				Text Seg( 14 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			),
			DispatchSeg(
				Text Seg( 15 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			),
			DispatchSeg(
				Text Seg( 16 ),
				{Line Color( "None" ),
				Fill Color( "None" )}
			)}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Define variables.
3. Create control chart.
4. Add average points.
5. Set range limits.
6. Enable connecting lines.
7. Add range points.
8. Set range limits.
9. Enable connecting lines.
10. Customize report appearance.



### Example 27
> **Summary**: Creates a P Chart control chart using JMP's Control Chart Builder, with variables for Lot, # defective, and Lot Size.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #PChart, #ShewhartAttribute, #BinomialLimits -->

**Code**:
```jsl
// Control Chart Builder: P Chart
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Initialize Control Chart Builder.
3. Hide control panel.
4. Set chart type to Shewhart Attribute.
5. Define subgroup variable.
6. Define Y variable.
7. Define n Trials variable.
8. Add points to chart.
9. Set statistic to Proportion.
10. Set limits to Binomial.



### Example 28
> **Summary**: Creates a Non-Poisson (NP) control chart using JMP's Control Chart Builder, specifying subgroup and Y variables, and plotting points with count statistics.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #NPChart, #ShewhartAttribute, #BinomialSigma -->

**Code**:
```jsl
// Control Chart Builder: NP Chart
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Create NP chart.
3. Set control panel visibility.
4. Define Shewhart attribute class.
5. Specify subgroup variable.
6. Specify Y variable.
7. Specify n Trials variable.
8. Plot points with count statistic.
9. Set limits using Binomial sigma.



### Example 29
> **Summary**: Generates a P chart of Total Plastic using the Control Chart Builder platform in JMP, with specific settings for subgroup, Y variable, phase, and n Trials.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #PChart, #TotalPlastic, #DataAnalysis -->

**Code**:
```jsl
// P chart of Total Plastic
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Create P chart.
3. Set chart size.
4. Hide two Shewhart charts.
5. Hide control panel.
6. Hide limit summaries.
7. Define chart type.
8. Set subgroup variable.
9. Set Y variable.
10. Set phase variable.
11. Set n Trials variable.
12. Set point statistic.
13. Set limit method.
14. Hide lower limit.
15. Customize text segments.



### Example 30
> **Summary**: Visualizes a Laney P' chart of Total Plastic using Control Chart Builder, specifying subgroup and Y variables, and sending the output to a report.

<!-- Keywords: #ControlChartBuilder, #LaneyPChart, #JMPScriptingLanguage, #StatisticalProcessControl, #DataVisualization -->

**Code**:
```jsl
// Laney P' chart of Total Plastic
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Create Laney P' chart.
3. Set chart size.
4. Hide two Shewhart charts.
5. Hide control panel.
6. Hide limit summaries.
7. Define attribute chart.
8. Specify subgroup variable.
9. Specify Y variable.
10. Specify phase variable.



### Example 31
> **Summary**: Creates a Control Chart Builder with Moving Average, utilizing Open data table and specifying subgroup and Y variables.

<!-- Keywords: #ControlChartBuilder, #MovingAverage, #DataVisualization, #JMPScriptingLanguage, #StatisticalAnalysis -->

**Code**:
```jsl
// Control Chart Builder: Moving Average
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Launch Control Chart Builder.
3. Set subgroup variable.
4. Set Y variable.
5. Add first chart.
6. Set chart position.
7. Add limits.
8. Add second chart.
9. Set second chart position.
10. Hide control panel.



### Example 32
> **Summary**: Visualizes a rare event control chart using the Control Chart Builder platform, with the goal of monitoring doses since last adverse event (ADE) over time.

<!-- Keywords: #ControlChartBuilder, #RareEvent, #NegativeBinomialLimits, #TestBeyondLimits, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Control Chart Builder(
	Class( Rare Event ),
	Variables( Subgroup( :Date of ADE ), Y( :Doses since Last ADE ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Negative Binomial" ) ), Warnings( Test Beyond Limits( 1 ) ) ),
	Show Control Panel( 0 ),
	SendToReport( Dispatch( {}, "Doses since Last ADE Limit Summaries", OutlineBox, {Close( 1 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create control chart builder.
3. Set chart type to rare event.
4. Define subgroup variable.
5. Define response variable.
6. Plot count statistic.
7. Use negative binomial limits.
8. Enable test beyond limits.
9. Hide control panel.
10. Close limit summaries outline.



### Example 33
> **Summary**: Generates a control chart builder object to visualize and analyze data from a data table, with three charts displaying average, moving range on means, and standard deviation values.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Variables( Subgroup( :lot_id ), Y( :INM1 ) ),
	Chart( Position( 1 ), Points( Statistic( "Average" ) ), Limits( Sigma( "Moving Range" ), Spec Limits( 0 ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Moving Range" ), Spec Limits( 0 ) ) ),
	Chart( Position( 3 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Standard Deviation" ), Spec Limits( 0 ) ) ),
	Show Limit Labels( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder object.
3. Set subgroup variable.
4. Set Y variable.
5. Add first chart with average points.
6. Set limits for first chart.
7. Add second chart with moving range points.
8. Set limits for second chart.
9. Add third chart with standard deviation points.
10. Set limits for third chart.
11. Show limit labels.



### Example 34
> **Summary**: Creates a Shewhart Attribute control chart to monitor the proportion of 'NO' values in a data table, with binomial sigma limits and one zone limit.

<!-- Keywords: #JSLScriptingLanguage, #ControlChartBuilder, #ShewhartAttribute, #BinomialSigmaLimits, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Class( Shewhart Attribute ),
	Variables( Subgroup( :State, Position( 1 ) ), Y( :NO ), Phase( :Region ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Binomial" ), Zones( 1 ) ) ),
	Show Control Panel( 0 ),
	SendToReport( Dispatch( {}, "NO Limit Summaries", OutlineBox, {Close( 1 )} ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Control Chart Builder object.
3. Set chart type to Shewhart Attribute.
4. Define subgroup variable as State.
5. Set Y variable as NO.
6. Define phase variable as Region.
7. Plot proportion statistic points.
8. Use binomial sigma limits.
9. Enable one zone limit.
10. Hide control panel.
11. Close NO Limit Summaries outline box.
12. Generate report object.



### Example 35
> **Summary**: Creates a control chart for gap analysis, connecting through missing values and displaying the chart in position 1.

<!-- Keywords: #ControlChart, #GapAnalysis, #MissingValues, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Control Chart Builder(
	Connect Thru Missing( 1 ),
	Show Limit Summaries( 0 ),
	Variables( Y( :Gap ) ),
	Chart( Position( 1 ) ),
	Show Control Panel( 0 )
);
```

**Code Explanation**:

1. Open data table.
2. Launch Control Chart Builder.
3. Enable Connect Through Missing.
4. Disable Limit Summaries display.
5. Set Y variable to Gap.
6. Place chart in position 1.
7. Hide control panel.



### Example 36
> **Summary**: Creates a control chart builder with two charts and reference lines, utilizing the Control Chart Builder platform in JMP.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #StatisticalProcessControl, #DataVisualization, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ccb = Control Chart Builder(
	Show Control Panel( 0 ),
	Variables( Subgroup( :Day ), Y( :Delay ) ),
	Chart( Position( 1 ) ),
	Chart( Position( 2 ) ),
	SendToReport(
		Dispatch( {}, "Delay", ScaleBox,
			{Add Ref Line( -10, DashDot, "Blue", "LSL", 2 ), Add Ref Line( 15, Solid, "Red", "Target", 2 ),
			Add Ref Line( 40, Dashed, "Blue", "USL", 2 )}
		),
		Dispatch( {}, "Delay", ScaleBox( 2 ),
			{Add Ref Line( -10, DashDot, "Blue", "LSL", 2 ), Add Ref Line( 15, Solid, "Red", "Target", 2 ),
			Add Ref Line( 40, Dashed, "Blue", "USL", 2 )}
		),
		Dispatch( {}, "Control Chart Builder", FrameBox, {Marker Size( 2 )} ),
		Dispatch( {}, "Control Chart Builder", FrameBox( 2 ), {Marker Size( 2 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Hide control panel.
4. Set subgroup variable.
5. Set Y variable.
6. Add first chart.
7. Add second chart.
8. Add reference lines to first scale.
9. Add reference lines to second scale.
10. Set marker size for first frame.
11. Set marker size for second frame.



### Example 37
> **Summary**: Creates a control chart to monitor phase-specific diameter measurements, utilizing Control Chart Builder with subgrouping by day and response variable diameter.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #QualityControl, #ProcessMonitoring, #StatisticalProcessControl -->

**Code**:
```jsl
Open("data_table.jmp");
Control Chart Builder( Variables( Subgroup( :DAY, Position( 1 ) ), Y( :DIAMETER ) ), Show Control Panel( 0 ), By( :Phase ) );
```

**Code Explanation**:

1. Open data table.
2. Launch Control Chart Builder.
3. Specify subgroup variable.
4. Set position for subgroup.
5. Define response variable.
6. Hide control panel.
7. Group charts by phase.



### Example 38
> **Summary**: Creates a control chart builder object with specified window size, hidden control panel, and customized variables for subgroup and Y-axis.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Size( 534, 456 ),
	Show Control Panel( 0 ),
	Variables( Subgroup( :Date ), Y( :Gap ) ),
	Chart( Position( 1 ), Points( Box Plots( 1 ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder object.
3. Set window size.
4. Hide control panel.
5. Define subgroup variable.
6. Define Y variable.
7. Add chart to position 1.
8. Display box plots for points.



### Example 39
> **Summary**: Creates a Control Chart Builder with multiple charts and filters to analyze data from a specific wafer lot.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataFiltering, #StatisticalAnalysis, #WaferLot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Control Chart Builder(
	Size( 534, 464 ),
	Show Control Panel( 0 ),
	Variables( Subgroup( :lot_id ), Subgroup( :wafer, Position( 1 ) ), Y( :INM1 ) ),
	Chart( Position( 1 ), Points( Statistic( "Average" ) ), Limits( Sigma( "Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Standard Deviation" ) ) ),
	Chart( Position( 3 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 4 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart( Position( 5 ), Points( Statistic( "Moving Range on Std Dev" ) ), Limits( Sigma( "Median Moving Range" ) ) ),
	Local Data Filter( Add Filter( columns( :wafer ), Where( :wafer == 1 ), Display( :wafer, Size( 157, 68 ), Height( 68 ) ) ) )
);
```

**Code Explanation**:

1. Open data_table data
2. Create control chart builder.
3. Set window size.
4. Hide control panel.
5. Define subgroup variables.
6. Add average chart.
7. Add range chart.
8. Add standard deviation chart.
9. Add moving range chart.
10. Add moving range on means chart.
11. Add moving range on std dev chart.
12. Apply local data filter.



### Example 40
> **Summary**: Creates a control chart for height, with two chart positions and row selection/exclusion capabilities.

<!-- Keywords: #ControlChart, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder( Variables( Y( :height ) ), Chart( Position( 1 ) ), Chart( Position( 2 ) ) );
dt << select all rows << exclude;
```

**Code Explanation**:

1. Open data table;
2. Create control chart for height.
3. Add first chart position.
4. Add second chart position.
5. Select all rows.
6. Exclude selected rows.



### Example 41
> **Summary**: Creates a control chart with height as the Y variable, using Control Chart Builder to visualize and analyze data.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataAnalysis, #Visualization, #StatisticalProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder( Variables( Y( :height ) ), Chart( Position( 1 ) ), Chart( Position( 2 ) ) );
dt << select all rows << exclude;
dt << clear select;
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Add height variable to chart.
4. Position chart elements.
5. Exclude all rows from analysis.
6. Clear row selection.



### Example 42
> **Summary**: Creates a control chart builder object with specific variables and settings, enabling interactive visualization and analysis.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #InteractiveAnalysis, #StatisticalProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select rows( {15} ) << exclude;
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sports ), Y( :Grade ), Phase( :Grades ) ),
	Chart( Position( 1 ), Points( Individual Points( 1 ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Select row 15.
3. Exclude selected row.
4. Create control chart builder object.
5. Set subgroup variable to Sports.
6. Set Y variable to Grade.
7. Set phase variable to Grades.
8. Position chart at 1.
9. Add individual points plot.
10. Display control chart.



### Example 43
> **Summary**: Creates a control chart with multiple tests and report generation from a data table, utilizing Control Chart Builder in JMP.

<!-- Keywords: #JMP, #ControlChartBuilder, #DataAnalysis, #StatisticalProcessControl, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Variables( Y( :Month Number ) ),
	Chart(
		Position( 1 ),
		Limits( Spec Limits( 1 ) ),
		Warnings( Test 1( 1 ), Test 2( 1 ), Test 3( 1 ), Test 4( 1 ), Test 5( 1 ), Test 6( 1 ), Test 7( 1 ), Test 8( 1 ) )
	),
	Chart( Position( 2 ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Create control chart.
3. Set Y variable.
4. Define chart position.
5. Apply spec limits.
6. Enable multiple tests.
7. Define second chart position.
8. Generate report.



### Example 44
> **Summary**: Creates a control chart with multiple warning tests and generates a report object, while selecting specific rows and hiding them.

<!-- Keywords: #ControlChartBuilder, #WarningTests, #ReportObject, #DataSelection, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Variables( Y( :Month Number ) ),
	Chart(
		Position( 1 ),
		Limits( Spec Limits( 1 ) ),
		Warnings( Test 1( 1 ), Test 2( 1 ), Test 3( 1 ), Test 4( 1 ), Test 5( 1 ), Test 6( 1 ), Test 7( 1 ), Test 8( 1 ) )
	),
	Chart( Position( 2 ) )
);
rpt = obj << report;
dt << select rows( {120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130} ) << hide;
```

**Code Explanation**:

1. Open data table.
2. Create control chart.
3. Set Y variable.
4. Configure chart position.
5. Define specification limits.
6. Enable multiple warning tests.
7. Add second chart.
8. Generate report object.
9. Select specific rows.
10. Hide selected rows.



### Example 45
> **Summary**: Creates a control chart builder with multiple charts and warning tests to analyze data from a wafer production process.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #DataAnalysis, #ProcessMonitoring, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Variables( Subgroup( :wafer ), Y( :PMS1 ), Phase( :SITE ) ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Average" ) ),
		Limits( Sigma( "Range" ) ),
		Warnings( Test 1( 1 ), Test 2( 1 ), Test 3( 1 ), Test 4( 1 ), Test 5( 1 ), Test 6( 1 ), Test 7( 1 ), Test 8( 1 ) )
	),
	Chart( Position( 2 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Range" ) ) )
);
```

**Code Explanation**:

1. Open data_table data
2. Create control chart builder.
3. Set subgroup variable.
4. Set Y variable.
5. Set phase variable.
6. Add first chart.
7. Set position of first chart.
8. Plot average points.
9. Set range limits.
10. Enable warning tests.



### Example 46
> **Summary**: Creates a control chart builder with customized settings, including pin annotations for specific data points.

<!-- Keywords: #ControlChartBuilder, #PinAnnotation, #Customization, #DataVisualization, #JMPScriptingLanguage -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
ccb1 = dt1 << Control Chart Builder(
	Size( 528, 464 ),
	Show Control Panel( 0 ),
	Variables( Subgroup( :Hour ), Y( :Thickness ), Phase( :Cavity ) ),
	SendToReport(
		Dispatch( {}, "Control Chart Builder", FrameBox( 2 ),
			{Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 19 ),
				Index Row( 380 ),
				UniqueID( -868777941 ),
				FoundPt( {491, 120} ),
				Origin( {18.8846153846154, 15.5236026294407} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			), Add Pin Annotation(
				Seg( Marker Seg( 2 ) ),
				Index( 6 ),
				Index Row( 125 ),
				UniqueID( -868810722 ),
				FoundPt( {537, 290} ),
				Origin( {25.9615384615385, 6.28201825815275} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			)}
		),
		Dispatch( {}, "Control Chart Builder", FrameBox( 3 ),
			Add Pin Annotation(
				Seg( Marker Seg( 3 ) ),
				Index( 8 ),
				Index Row( 170 ),
				UniqueID( -869007328 ),
				FoundPt( {679, 410} ),
				Origin( {47.8076923076923, 3.92906830441131} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Set chart size.
4. Hide control panel.
5. Define variables for subgroup, Y, and phase.
6. Send report to add pin annotation.
7. Add first pin annotation to frame box 2.
8. Add second pin annotation to frame box 2.
9. Add third pin annotation to frame box 3.



### Example 47
> **Summary**: Creates a control chart builder with specific variables and pin annotations for data analysis.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataAnalysis, #PinAnnotations, #Visualization -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
ccb2 = dt2 << Control Chart Builder(
	Size( 534, 464 ),
	Show Control Panel( 0 ),
	Variables( Subgroup( :Alcohol Consumption ), Subgroup( :Relapsed, Position( 1 ) ), Y( :Count ) ),
	SendToReport(
		Dispatch( {}, "Control Chart Builder", FrameBox,
			{Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 2 ),
				Index Row( 3 ),
				UniqueID( -829349862 ),
				FoundPt( {688, 154} ),
				Origin( {1.98461538461538, 100.162365732485} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			), Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 0 ),
				Index Row( 1 ),
				UniqueID( -829349864 ),
				FoundPt( {430, 249} ),
				Origin( {0, 10.960682425812} ),
				Offset( {-7, 46} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			)}
		),
		Dispatch( {}, "Control Chart Builder", FrameBox( 2 ),
			{Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 1 ),
				Index Row( 0 ),
				UniqueID( -830069223 ),
				FoundPt( {558, 463} ),
				Origin( {0.984615384615385, 8.25874440681437} ),
				Offset( {-165, -70} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			), Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 3 ),
				Index Row( 2 ),
				UniqueID( -830069221 ),
				FoundPt( {823, 428} ),
				Origin( {3.02307692307692, 49.9473489930454} ),
				Offset( {19, -30} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Set chart size.
4. Hide control panel.
5. Define variables for subgroup and Y.
6. Send report to add pin annotations.
7. Add first pin annotation to frame 1.
8. Add second pin annotation to frame 1.
9. Add third pin annotation to frame 2.
10. Add fourth pin annotation to frame 2.



### Example 48
> **Summary**: Creates a control chart builder to analyze NPN1 data, with two charts for moving range on means and std dev, and sends the report to Process Sigma Report.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #ProcessSigmaReport, #MovingRange, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Control Chart Builder(
	Size( 534, 448 ),
	Show Control Panel( 0 ),
	Show Sigma Report( 1 ),
	Variables( Subgroup( :wafer ), Y( :NPN1 ) ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Median Moving Range" ) ),
		Warnings( Test Beyond Limits( 1 ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Median Moving Range" ) ),
		Warnings( Test Beyond Limits( 1 ) )
	),
	SendToReport( Dispatch( {"NPN1 Limit Summaries"}, "Process Sigma Report", OutlineBox, {Close( 1 )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Set window size.
4. Hide control panel.
5. Show sigma report.
6. Define subgroup variable.
7. Define Y variable.
8. Add first chart for moving range on means.
9. Set limits using median moving range.
10. Enable test beyond limits warning.
11. Add second chart for moving range on std dev.
12. Set limits using median moving range.
13. Enable test beyond limits warning.
14. Close process sigma report.



### Example 49
> **Summary**: Creates a control chart for delay data, filtered by reason and displaying up to 5 items.

<!-- Keywords: #ControlChartBuilder, #DataFiltering, #JSLScripting, #StatisticalAnalysis, #Visualization -->

**Code**:
```jsl
Open("data_table.jmp");
Control Chart Builder(
	Show Control Panel( 0 ),
	Show Limit Summaries( 0 ),
	Variables( Subgroup( :Day ), Y( :Delay ) ),
	Local Data Filter(
		Width( 160 ),
		Add Filter( columns( :Reason ), Where( :Reason == {"Fog", "Late", "Mechanical"} ), Display( :Reason, N Items( 5 ) ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Launch Control Chart Builder.
3. Hide control panel.
4. Hide limit summaries.
5. Set subgroup variable.
6. Set Y variable.
7. Add local data filter.
8. Set filter width.
9. Define filter criteria.
10. Display filtered items.



### Example 50
> **Summary**: Creates a Control Chart Builder with two charts, configuring variables and chart settings to visualize delay and flight data.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #DataVisualization, #StatisticalProcessControl, #QualityControl -->

**Code**:
```jsl
Open("data_table.jmp");
Control Chart Builder(
	Size( 764, 464 ),
	Show Control Panel( 0 ),
	Show Limit Summaries( 0 ),
	Variables( Y( :Delay ), Phase( :Flight ) ),
	Chart( Position( 1 ), Points( Show Points( 0 ) ), Limits( Show Center Line( 0 ), Show Lower Limit( 0 ), Show Upper Limit( 0 ) ) ),
	Chart( Position( 2 ), Points( Show Connect Line( 0 ) ), Limits( Show Center Line( 0 ), Show Lower Limit( 0 ), Show Upper Limit( 0 ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Launch Control Chart Builder.
3. Set window size.
4. Hide control panel.
5. Hide limit summaries.
6. Define variables: Delay, Flight.
7. Configure first chart position.
8. Hide points in first chart.
9. Hide limits in first chart.
10. Configure second chart position.
11. Hide connect lines in second chart.
12. Hide limits in second chart.



### Example 51
> **Summary**: Creates a control chart for height data, filtered by sex, using Control Chart Builder in JMP.

<!-- Keywords: #JMP, #ControlChartBuilder, #DataFiltering, #InteractiveAnalysis, #StatisticalVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Control Chart Builder(
	Show Limit Summaries( 0 ),
	Variables( Y( :height ), Label( :sex ) ),
	Show Control Panel( 0 ),
	Local Data Filter( Add Filter( columns( :sex ), Where( :sex == "F" ) ) ),
	SendToReport( Dispatch( {}, "height Limit Summaries", OutlineBox, {Close( 1 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Launch Control Chart Builder.
3. Disable limit summaries.
4. Set Y variable to height.
5. Label by sex.
6. Hide control panel.
7. Add local data filter.
8. Filter for female sex.
9. Close height limit summaries.



### Example 52
> **Summary**: Creates a control chart with three charts: average, range, and standard deviation, using the Control Chart Builder platform in JMP.

<!-- Keywords: #JMP, #ControlChartBuilder, #DataVisualization, #StatisticalAnalysis, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Size( 534, 464 ),
	Show Control Panel( 0 ),
	Variables( Subgroup( :lot_id ), Subgroup( :wafer, Position( 1 ) ), Y( :INM1 ) ),
	Chart( Position( 1 ), Points( Statistic( "Average" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 3 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Standard Deviation" ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create control chart object.
3. Set window size.
4. Hide control panel.
5. Define subgroup variables.
6. Add average chart.
7. Set average limits.
8. Add range chart.
9. Set range limits.
10. Add standard deviation chart.
11. Set standard deviation limits.



### Example 53
> **Summary**: Creates a control chart to visualize and analyze delay times based on reason, utilizing Control Chart Builder in JMP.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #DataAnalysis, #ProcessImprovement, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder( Variables( "Y"(:Delay), "Phase"(:Reason) ), );
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Set Y variable to Delay.
4. Set Phase variable to Reason.
5. Build control chart.



### Example 54
> **Summary**: Creates a control chart builder object with specific variables and selects a single row for analysis.

<!-- Keywords: #ControlChartBuilder, #JSLScripting, #DataAnalysis, #StatisticalProcessControl, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder( Variables( "Y"(:Delay), "Phase"(:Reason) ), );
dt << select rows( 187 );
```

**Code Explanation**:

1. Open data table;
2. Create control chart builder object.
3. Set Y variable to "Delay".
4. Set Phase variable to "Reason".
5. Select row 187.



### Example 55
> **Summary**: Creates a control chart builder object with multiple charts and reference lines, utilizing variables from an open data table.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataAnalysis, #StatisticalProcessControl, #ReferenceLines -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Variables( Y( :RstPulse, :Oxy, :Age ) ),
	Chart( Position( 1 ) ),
	Chart( Position( 2 ) ),
	SendToReport(
		Dispatch( {}, "", ScaleBox, {Add Ref Line( 21, Solid, "Black", "", 2 )} ),
		Dispatch( {}, "", ScaleBox( 5 ), {Add Ref Line( 21, Solid, "Black", "", 2 )} ),
		Dispatch( {}, "", ScaleBox( 9 ), {Add Ref Line( 21, Solid, "Black", "", 2 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create control chart builder object.
3. Set variables for analysis.
4. Add first chart.
5. Add second chart.
6. Send report dispatch.
7. Add reference line to first scale box.
8. Add reference line to fifth scale box.
9. Add reference line to ninth scale box.



### Example 56
> **Summary**: Creates a Control Chart Builder with multiple charts and reference lines, utilizing variables RstPulse, Oxy, and Age.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Variables( Y( :RstPulse, :Oxy, :Age ) ),
	Chart( Position( 1 ) ),
	Chart( Position( 2 ) ),
	SendToReport(
		Dispatch( {}, "", ScaleBox, {Add Ref Line( 21, Solid, "Black", "", 2 )} ),
		Dispatch( {}, "", ScaleBox( 5 ), {Add Ref Line( 21, Solid, "Black", "", 2 )} ),
		Dispatch( {}, "", ScaleBox( 9 ), {Add Ref Line( 21, Solid, "Black", "", 2 )} )
	)
);
dt2 = Open("data_table.jmp");
```

**Code Explanation**:

1. Open data table;
2. Create Control Chart Builder.
3. Set variables for RstPulse, Oxy, Age.
4. Add first chart.
5. Add second chart.
6. Add reference line at 21 on first scale.
7. Add reference line at 21 on fifth scale.
8. Add reference line at 21 on ninth scale.
9. Open data table;



### Example 57
> **Summary**: Creates a control chart builder object with specific settings, including excluded region display and sample size selection.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataExclusion, #SampleSizeSelection, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select rows( {1, 2, 3, 4, 5} ) << exclude;
obj = dt << Control Chart Builder(
	Show Excluded Region( 1 ),
	Variables( Y( :height ) ),
	Set Sample Size( 5 ),
	Chart( Points( Statistic( "Average" ) ), Limits( Sigma( "Range" ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Select specific rows.
3. Exclude selected rows.
4. Create control chart builder object.
5. Show excluded region.
6. Set Y variable.
7. Set sample size.
8. Add points to chart.
9. Set statistic for points.
10. Add limits to chart.



### Example 58
> **Summary**: Creates a control chart builder object with specific variables and filters to analyze data from a subset of rows in a JMP data table.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #DataFiltering, #LocalDataFilter, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Variables( Subgroup( :State ), Y( :NO ) ),
	Show Excluded Region( 0 ),
	Local Data Filter( Add Filter( columns( :X ), Where( :X >= 0.1075 & :X <= 0.2 ) ) ),
	Where( :Region == "MW" )
);
```

**Code Explanation**:

1. Open data table;
2. Create control chart builder object.
3. Set subgroup variable to "State".
4. Set Y variable to "NO".
5. Disable excluded region display.
6. Add local data filter.
7. Filter column "X" values between 0.1075 and 0.2.
8. Apply filter condition.
9. Filter rows where "Region" equals "MW".



### Example 59
> **Summary**: Creates a control chart builder object with specific variables and filters to analyze data from the 'MW' region.

<!-- Keywords: #ControlChartBuilder, #DataFiltering, #LocalDataFilter, #JMPScriptingLanguage, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Variables( Subgroup( :State ), Y( :NO ) ),
	Show Excluded Region( 0 ),
	Local Data Filter( Add Filter( columns( :X ), Where( :X >= 0.1075 & :X <= 0.2 ) ) ),
	Where( :Region == "MW" )
);
dt = Open("data_table.jmp");
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder object.
3. Set subgroup variable to State.
4. Set response variable to NO.
5. Hide excluded region.
6. Add local data filter for X.
7. Filter where X between 0.1075 and 0.2.
8. Apply condition where Region equals MW.
9. Open data table.



### Example 60
> **Summary**: Creates a control chart with customized graph spacing color, utilizing Control Chart Builder to visualize subgroup data.

<!-- Keywords: #ControlChartBuilder, #GraphSpacingColor, #SubgroupData, #JSLScriptingLanguage, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder( Variables( Y( :Weight ), Subgroup( :Sample ) ) );
obj << Graph Spacing Color( "Red" );
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Set graph spacing color.



### Example 61
> **Summary**: Creates a control chart with specified variables and customizes graph spacing settings.

<!-- Keywords: #ControlChart, #JMPScriptingLanguage, #GraphSpacing, #Customization, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder( Variables( Y( :Weight ), Subgroup( :Sample ) ) );
obj << Graph Spacing Color( "Red" );
obj << Graph Spacing Transparency( 0.3 );
```

**Code Explanation**:

1. Open data table;
2. Create control chart object.
3. Set Y variable to Weight.
4. Set Subgroup variable to Sample.
5. Change graph spacing color to red.
6. Set graph spacing transparency to 0.3.



### Example 62
> **Summary**: Creates a control chart builder to visualize and analyze toxicity data, featuring multiple charts for average points, moving range on means, and range with specification limits.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #ProcessCapabilityAnalysis, #QualityControl -->

**Code**:
```jsl
Open("data_table.jmp");
Control Chart Builder(
	Size( 534, 450 ),
	Variables( Subgroup( :Formulation ), Y( :Toxicity ) ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Average" ) ),
		Limits( Sigma( "Moving Range" ) ),
		Add Spec Limits( {LSL( 4 ), USL( 6.5 ), Target( 5 )} )
	),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 3 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Range" ) ) ),
	Show Control Panel( 0 ),
	SendToReport(
		Dispatch( {}, "Toxicity", ScaleBox,
			{Add Ref Line( 4, "Solid", "Blue", "LSL", 1 ), Add Ref Line( 6.5, "Solid", "Blue", "USL", 1 ),
			Add Ref Line( 5, "Solid", "Blue", "Target", 1 )}
		),
		Dispatch( {}, "Control Chart Builder", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 2 ),
				Index Row( 100 ),
				UniqueID( 2 ),
				FoundPt( {476, 121} ),
				Origin( {2.00354609929078, 6.10148542583318} ),
				RightOfCenter( 1 ),
				Tag Line( 1 )
			)
		),
		Dispatch( {}, "Control Chart Builder", FrameBox( 2 ),
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 1 ),
				Index Row( 50 ),
				UniqueID( 1 ),
				FoundPt( {335, 307} ),
				Origin( {1.00354609929078, 0.256186587181004} ),
				Offset( {5, -64} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			)
		),
		Dispatch( {}, "Control Chart Builder", FrameBox( 3 ),
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 0 ),
				Index Row( 0 ),
				UniqueID( 0 ),
				FoundPt( {194, 427} ),
				Origin( {0.00354609929078009, 6.20824088265475} ),
				Offset( {-6, -65} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			)
		),
		Dispatch( {}, "Toxicity Limit Summaries", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Toxicity Limit Summaries"}, "Process Capability Analysis", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create control chart builder.
3. Set window size.
4. Define subgroup and response variables.
5. Add first chart for average points.
6. Set limits using moving range.
7. Add specification limits.
8. Add second chart for moving range on means.
9. Add third chart for range.
10. Hide control panel.



### Example 63
> **Summary**: Creates a control chart builder object to visualize and analyze data, configuring points and limits for proportion, and enabling multiple warning tests and rules.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Size( 528, 464 ),
	Show Control Panel( 0 ),
	Class( Shewhart Attribute ),
	Variables( Y( :height, :weight ), Phase( :sex ) ),
	Set Subgroup Size( 5 ),
	Chart(
		Points( Statistic( "Proportion" ) ),
		Limits( Sigma( "Poisson" ) ),
		Warnings(
			Test 1( 1 ),
			Test 2( 1 ),
			Test 3( 1 ),
			Test 4( 1 ),
			Test 5( 1 ),
			Test 6( 1 ),
			Test 7( 1 ),
			Test 8( 1 ),
			Rule 1 2S( 1 ),
			Rule 1 3S( 1 ),
			Rule 2 2S( 1 ),
			Rule R 4S( 1 ),
			Rule 4 1S( 1 ),
			Rule 10 X( 1 )
		)
	),
	SendToReport(
		Dispatch( {}, "Control Chart Builder", FrameBox,
			{DispatchSeg( Text Seg( 1 ), {Line Color( "None" ), Fill Color( "None" )} ), DispatchSeg(
				Text Seg( 2 ),
				{Line Color( "None" ), Fill Color( "None" )}
			)}
		),
		Dispatch( {}, "Control Chart Builder", FrameBox( 3 ),
			{DispatchSeg( Text Seg( 1 ), {Line Color( "None" ), Fill Color( "None" )} ), DispatchSeg(
				Text Seg( 2 ),
				{Line Color( "None" ), Fill Color( "None" )}
			)}
		),
		Dispatch( {}, "Control Chart Builder", FrameBox( 4 ),
			{Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 3 ),
				Index Row( 34 ),
				UniqueID( -1683937277 ),
				FoundPt( {524, 736} ),
				Origin( {4.04378612716763, 114.29375} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			), Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 1 ),
				Index Row( 8 ),
				UniqueID( -1683937279 ),
				FoundPt( {409, 796} ),
				Origin( {1.99971098265896, 91.04375} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			), Add Pin Annotation(
				Seg( Marker Seg( 2 ) ),
				Index( 4 ),
				Index Row( 38 ),
				UniqueID( -1683952188 ),
				FoundPt( {802, 537} ),
				Origin( {8.98511560693642, 152.85} ),
				Offset( {-385, 81} ),
				RightOfCenter( 1 ),
				Tag Line( 1 )
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder object.
3. Set chart size to 528x464.
4. Hide control panel.
5. Use Shewhart attribute class.
6. Define variables: height, weight, sex.
7. Set subgroup size to 5.
8. Configure points and limits for proportion.
9. Enable multiple warning tests and rules.
10. Customize report appearance and add annotations.



### Example 64
> **Summary**: Creates a control chart builder to visualize and analyze data from a specific subgroup, utilizing box plots and local data filtering.

<!-- Keywords: #ControlChartBuilder, #BoxPlots, #LocalDataFiltering, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Control Chart Builder(
	Size( 522, 448 ),
	Show Control Panel( 0 ),
	Show Limit Summaries( 0 ),
	Variables( Subgroup( :Hour ), Y( :Thickness ) ),
	Chart( Position( 1 ), Points( Box Plots( 1 ) ) ),
	Local Data Filter( Width( 160 ), Add Filter( columns( :Cavity ), Where( :Cavity == "4" ), Display( :Cavity, N Items( 3 ) ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Set window size.
4. Hide control panel.
5. Hide limit summaries.
6. Define subgroup and Y variables.
7. Add box plot points.
8. Add local data filter.
9. Set filter width.
10. Filter by cavity "4".



### Example 65
> **Summary**: Creates a control chart builder with specified size, hidden control panel and limit summaries, and defined subgroup and Y variables.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
Control Chart Builder( Size( 528, 448 ), Show Control Panel( 0 ), Show Limit Summaries( 0 ), Variables( Subgroup( :Run ), Y( :Length ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create control chart builder.
3. Set chart size.
4. Hide control panel.
5. Hide limit summaries.
6. Define subgroup variable.
7. Define Y variable.



### Example 66
> **Summary**: Creates a control chart for height, utilizing Control Chart Builder with sex as subgroup and age as phase variable.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #QualityControl, #StatisticalProcessControl -->

**Code**:
```jsl
Open("data_table.jmp");
Control Chart Builder( Size( 528, 448 ), Show Control Panel( 0 ), Show Limit Summaries( 0 ), Variables( Subgroup( :Run ), Y( :Length ) ) );
dt = Open("data_table.jmp");
Column( dt, "age" ) << set modeling type( "continuous" );
For( i = 38, i <= 40, i++,
	Column( dt, "age" )[i] = .
);
obj = dt << Control Chart Builder(
	Size( 528, 458 ),
	Show Control Panel( 0 ),
	Show Limit Summaries( 0 ),
	Variables( Subgroup( :sex ), Y( :height ), Phase( :age ) )
);
```

**Code Explanation**:

1. Open data_table data
2. Create control chart for Length.
3. Open data_table data
4. Set age column as continuous.
5. Loop through rows 38-40.
6. Set age values to missing.
7. Create control chart for height.
8. Use sex as subgroup.
9. Use age as phase variable.



### Example 67
> **Summary**: Creates a control chart builder with specific variables and settings, while also modifying data in an external data table.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataModification, #VariableSettings, #InteractiveVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Control Chart Builder( Size( 528, 448 ), Show Control Panel( 0 ), Show Limit Summaries( 0 ), Variables( Subgroup( :Run ), Y( :Length ) ) );
dt = Open("data_table.jmp");
Column( dt, "age" ) << set modeling type( "continuous" );
For( i = 38, i <= 40, i++,
	Column( dt, "age" )[i] = .
);
```

**Code Explanation**:

1. Open data table;
2. Create control chart builder.
3. Hide control panel.
4. Hide limit summaries.
5. Set variables for chart.
6. Open another data file.
7. Set age column type.
8. Loop through specific rows.
9. Replace age values with missing.



### Example 68
> **Summary**: Creates a Control Chart Builder object with specific settings, including chart size and variable selection.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder( Size( 528, 458 ), Show Control Panel( 0 ), Show Limit Summaries( 0 ), Variables( Y( :height ) ) );
dt << select all rows << exclude;
```

**Code Explanation**:

1. Open data table;
2. Create Control Chart Builder object.
3. Set chart size to 528x458.
4. Hide control panel.
5. Hide limit summaries.
6. Add height variable to Y-axis.
7. Select all rows in dataset.
8. Exclude selected rows.



### Example 69
> **Summary**: Creates a control chart builder object with specific settings and variables, including height as the Y-axis variable.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder( Size( 528, 458 ), Show Control Panel( 0 ), Show Limit Summaries( 0 ), Variables( Y( :height ) ) );
dt << select all rows << exclude;
dt << clear select;
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder object.
3. Set chart size and options.
4. Add height variable to Y axis.
5. Select all rows in table.
6. Exclude selected rows.
7. Clear row selection.



### Example 70
> **Summary**: Creates a control chart builder object with specified variables, hiding the control panel and sending it to a report.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #DataVisualization, #StatisticalProcessControl, #ReportGeneration -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Control Chart Builder( show control panel( 0 ), Variables( Y( :Weight ), Subgroup( :Sample ) ) );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create control chart builder object.
4. Hide control panel.
5. Specify variables for chart.



### Example 71
> **Summary**: Creates a Control Chart Builder with two charts, one for averages and one for ranges, using the Day variable as subgroup and Delay as Y variable.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #QualityControl, #StatisticalProcessControl -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Control Chart Builder(
	Show Control Panel( 0 ),
	Variables( "Subgroup"(:Day), "Y"(:Delay) ),
	Chart( Position( 1 ), Points( Statistic( "Average" ) ), Limits( Sigma( "Range" ) ), Connecting Line( 1 ) ),
	Chart( Position( 2 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Range" ) ), Connecting Line( 1 ) )
);
```

**Code Explanation**:

1. Open data_table data
2. Create Control Chart Builder.
3. Hide control panel.
4. Set subgroup variable to Day.
5. Set Y variable to Delay.
6. Add first chart for averages.
7. Use average statistic.
8. Set limits based on range sigma.
9. Enable connecting lines.
10. Add second chart for ranges.



### Example 72
> **Summary**: Creates a control chart builder object and adds a transformed variable to the Y role, utilizing Graph Builder Box.

<!-- Keywords: #JSLScriptingLanguage, #ControlChartBuilder, #GraphBuilderBox, #DataTransformation, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder();
ccbb = Report( obj )[Graph Builder Box( 1 )];
ccbb << Add Variable( {Transform Column( "First[sex]", Character, Formula( Word( 1, :sex ) ) ), Role( "Y" )} );
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder object.
3. Access graph builder box.
4. Add transformed variable to Y role.



### Example 73
> **Summary**: Creates a control chart builder object with specific variables and filters, generating a report for analysis.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataFiltering, #ReportGeneration, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Control Chart Builder(
	Show Control Panel( 0 ),
	Variables( Y( :height ), Phase( :age ) ),
	Chart( Position( 1 ) ),
	Chart( Position( 2 ) ),
	Local Data Filter(
		Location( {412, 107} ),
		Add Filter( columns( :height ), Where( :height >= 55 & :height <= 66 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
obj << Automatic Recalc( 0 );
dt << Select Where( :sex == "F" );
dt << Exclude();
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder object.
3. Hide control panel.
4. Set Y variable to height.
5. Set phase variable to age.
6. Add first chart.
7. Add second chart.
8. Enable local data filter.
9. Set filter location.
10. Add height filter criteria.
11. Disable automatic recalculation.
12. Select female rows.
13. Exclude selected rows.
14. Generate report object.



### Example 74
> **Summary**: Creates and customizes a Control Chart Builder to analyze height data, filtering by sex and age range, and generates reports.

<!-- Keywords: #ControlChartBuilder, #DataFiltering, #ReportGeneration, #JSLScripting, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Control Chart Builder(
	Show Control Panel( 0 ),
	Variables( Y( :height ), Phase( :age ) ),
	Chart( Position( 1 ) ),
	Chart( Position( 2 ) ),
	Local Data Filter(
		Location( {412, 107} ),
		Add Filter( columns( :height ), Where( :height >= 55 & :height <= 66 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
dt << Select Where( :sex == "F" );
dt << Exclude();
rpt = Report( obj );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Control Chart Builder(
	Show Control Panel( 0 ),
	Variables( Y( :height ), Phase( :age ) ),
	Chart( Position( 1 ) ),
	Chart( Position( 2 ) ),
	Local Data Filter(
		Location( {412, 107} ),
		Add Filter( columns( :height ), Where( :height >= 55 & :height <= 66 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
obj << Automatic Recalc( 0 );
dt << Select Where( :sex == "F" );
dt << Exclude();
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table;
2. Create Control Chart Builder.
3. Hide control panel.
4. Set Y variable to height.
5. Set phase variable to age.
6. Add first chart.
7. Add second chart.
8. Add local data filter.
9. Set filter location.
10. Add height filter criteria.
11. Set filter mode.
12. Select females.
13. Exclude selected rows.
14. Generate report.
15. Close file without saving.
16. Reopen "data_table.jmp".
17. Create Control Chart Builder again.
18. Hide control panel.
19. Set Y variable to height.
20. Set phase variable to age.
21. Add first chart.
22. Add second chart.
23. Add local data filter.
24. Set filter location.
25. Add height filter criteria.
26. Set filter mode.
27. Disable automatic recalculation.
28. Select females.
29. Exclude selected rows.
30. Generate report.



### Example 75
> **Summary**: Creates and analyzes control charts for weight limits, filtering data based on Pin values and extracting summary statistics.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #DataFiltering, #SummaryStatistics, #WeightLimits -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ccb = dt << Control Chart Builder( Variables( Y( :Weight ), Subgroup( :Sample ) ) );
dt << select where( :Pin > 10 );
dt << Hide and Exclude( 1 );
results1 = Report( ccb )["Weight Limit Summaries"][Table Box( 1 )] << Get as Matrix;
dt << Clear Row STates;
dt << Select Where( :pin < 10 );
dt << Hide and Exclude( 1 );
results2 = Report( ccb )["Weight Limit Summaries"][Table Box( 1 )] << Get as Matrix;
```

**Code Explanation**:

1. Open data_table data
2. Create control chart builder.
3. Select rows where Pin > 10.
4. Hide and exclude selected rows.
5. Extract weight limit summaries matrix.
6. Clear row states.
7. Select rows where Pin < 10.
8. Hide and exclude selected rows.
9. Extract weight limit summaries matrix again.



### Example 76
> **Summary**: Creates and customizes a control chart builder object in JMP, generating reports with multiple charts and adjusting frame box sizes.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #DataVisualization, #ReportGeneration, #Customization -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Control Chart Builder(
	Variables( "Subgroup"(:DAY), "Y"(:DIAMETER) ),
	Chart( Position( 1 ), Points( Statistic( "Average" ) ), Limits( Sigma( "Range" ) ), Connecting Line( 1 ) ),
	Chart( Position( 2 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Range" ) ), Connecting Line( 1 ) )
);
rpt = obj << report;
size_loc = rpt[FrameBox( 1 )] << get size;
size_dis = rpt[FrameBox( 2 )] << get size;
rpt[FrameBox( 1 )] << FrameSize( 514, 300 );
size_loc = rpt[FrameBox( 1 )] << get size;
size_dis = rpt[FrameBox( 2 )] << get size;
rpt[FrameBox( 2 )] << FrameSize( 514, 50 );
size_loc = rpt[FrameBox( 1 )] << get size;
size_dis = rpt[FrameBox( 2 )] << get size;
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Create control chart builder object.
3. Define variables for chart.
4. Add first chart with average points and range limits.
5. Add second chart with range points and range limits.
6. Generate report from control chart.
7. Get size of first frame box.
8. Get size of second frame box.
9. Set size of first frame box.
10. Close control chart window.



### Example 77
> **Summary**: Creates and configures a control chart with two frames, retrieving report data and adjusting frame sizes.

<!-- Keywords: #JSLScriptingLanguage, #ControlChartBuilder, #DataVisualization, #ReportGeneration, #FrameManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Control Chart Builder(
	Variables( "Subgroup"(:DAY), "Y"(:DIAMETER) ),
	Chart( Position( 1 ), Points( Statistic( "Average" ) ), Limits( Sigma( "Range" ) ), Connecting Line( 1 ) ),
	Chart( Position( 2 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Range" ) ), Connecting Line( 1 ) )
);
rpt = obj << report;
size_loc = rpt[FrameBox( 1 )] << get size;
size_dis = rpt[FrameBox( 2 )] << get size;
rpt[FrameBox( 1 )] << FrameSize( 514, 300 );
size_loc = rpt[FrameBox( 1 )] << get size;
size_dis = rpt[FrameBox( 2 )] << get size;
rpt[FrameBox( 2 )] << FrameSize( 514, 50 );
size_loc = rpt[FrameBox( 1 )] << get size;
size_dis = rpt[FrameBox( 2 )] << get size;
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Define chart variables.
4. Configure first chart settings.
5. Configure second chart settings.
6. Retrieve chart report.
7. Get initial frame sizes.
8. Resize first frame.
9. Update frame sizes again.
10. Resize second frame.



### Example 78
> **Summary**: Creates a Shewhart Attribute control chart with Poisson limits for sigma calculation, using the Date variable as the Y-axis and enabling Event Chooser.

<!-- Keywords: #ControlChart, #ShewhartAttribute, #PoissonLimits, #EventChooser, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Class( Shewhart Attribute ),
	use Event Chooser( 1 ),
	Variables( Y( :Date ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Poisson" ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create control chart object.
3. Set chart type to Shewhart Attribute.
4. Enable Event Chooser.
5. Set Y variable to Date.
6. Plot points using Count statistic.
7. Use Poisson limits for sigma calculation.



### Example 79
> **Summary**: Creates and analyzes control charts for height and weight data, utilizing Control Chart Builder to visualize subgroup variations and standard deviations.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataAnalysis, #StatisticalProcessControl, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Variables( Subgroup( :sex ), Y( :height, :weight ) ),
	Chart(
		Position( 1 ),
		Points( Individual Points( 1 ) ),
		Limits( Sigma( "Standard Deviation" ) ),
		Warnings( Test 1( 1 ), Test 2( 1 ), Test 3( 1 ), Test 4( 1 ), Test 5( 1 ), Test 6( 1 ), Test 7( 1 ), Test 8( 1 ) )
	),
	Chart( Position( 2 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Standard Deviation" ) ) )
);
obj << redo analysis;
obj = dt << Control Chart Builder( Variables( Y( :height, :weight ) ), Chart( Position( 1 ), Limits( Zones( 1 ) ) ) );
obj << redo analysis;
```

**Code Explanation**:

1. Open data table;
2. Create Control Chart Builder object.
3. Set subgroup variable to sex.
4. Add height and weight as Y variables.
5. Configure first chart: individual points.
6. Set limits using standard deviation.
7. Enable all warning tests.
8. Configure second chart: standard deviation statistic.
9. Set limits using standard deviation.
10. Redo analysis on first chart.
11. Create new Control Chart Builder object.
12. Add height and weight as Y variables.
13. Configure single chart: zones limits.
14. Redo analysis on second chart.



### Example 80
> **Summary**: Creates and saves control charts for delay and flight variables, utilizing Control Chart Builder to summarize data.

<!-- Keywords: #ControlChartBuilder, #DataSummary, #JMPScriptingLanguage, #StatisticalAnalysis, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder( Variables( Y( :Delay, :Flight ) ) );
dtSum = obj << Save Summaries;
   
Close( dt, no save );
Close( dtSum, no save );
dtSum2 = Data Table("data_table");
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Save summaries from chart.
4. Close original data table.
5. Close summary data table.
6. Open saved summary table.



### Example 81
> **Summary**: Creates a control chart to analyze delay and flight variables, utilizing Control Chart Builder to generate summaries.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataAnalysis, #StatisticalProcessControl, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder( Variables( Y( :Delay, :Flight ) ) );
dtSum = obj << Save Summaries;
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Add variables to chart.
4. Save summaries from chart.



### Example 82
> **Summary**: Creates a control chart report for :OZONE data, using Control Chart Builder to visualize subgroup and Y variable relationships.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #QualityControl, #StatisticalProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder( Variables( Subgroup( :Y ), Y( :OZONE ) ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create control chart object.
3. Set subgroup variable to :Y.
4. Set Y variable to :OZONE.
5. Generate control chart report.
6. Assign report to rpt variable.



### Example 83
> **Summary**: Creates a Shewhart Attribute control chart using JMP's Control Chart Builder, with points plotted based on count statistics and limits set using Poisson sigma.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #ShewhartAttribute, #PoissonSigma, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Class( Shewhart Attribute ),
	Variables( Subgroup( :Bolt ), Y( :Flaws ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Poisson" ) ) )
);
dt << delete rows( {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25} );
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder object.
3. Set chart type to Shewhart Attribute.
4. Define subgroup variable.
5. Define response variable.
6. Plot points using count statistic.
7. Set limits using Poisson sigma.
8. Delete specified rows from data table.



### Example 84
> **Summary**: Creates a Control Chart Builder with Floss Delimited as Y, Phase, and Subgroup variables.

<!-- Keywords: #ControlChartBuilder, #GraphBuilderBox, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder();
ccbb = Report( obj )[Graph Builder Box( 1 )];
ccbb << Add Variable( {Column( dt, "Floss Delimited" ), Role( "Y" )} );
ccbb << Add Variable( {Column( dt, "Floss Delimited" ), Role( "Phase" )} );
ccbb << Add Variable( {Column( dt, "Floss Delimited" ), Role( "Subgroup" )} );
```

**Code Explanation**:

1. Open data table;
2. Create Control Chart Builder.
3. Access Graph Builder Box.
4. Add Floss Delimited as Y variable.
5. Add Floss Delimited as Phase variable.
6. Add Floss Delimited as Subgroup variable.



### Example 85
> **Summary**: Creates a Shewhart Attribute control chart to monitor the proportion of status changes, utilizing binomial limits and multiple tests and rules.

<!-- Keywords: #JSLScriptingLanguage, #ControlChartBuilder, #ShewhartAttribute, #BinomialLimits, #MultipleTests -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Show Alarm Report( 1 ),
	Class( Shewhart Attribute ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart(
		Points( Statistic( "Proportion" ) ),
		Limits( Sigma( "Binomial" ) ),
		Warnings(
			Test 1( 1 ),
			Test 2( 1 ),
			Test 3( 1 ),
			Test 4( 1 ),
			Test 5( 1 ),
			Test 6( 1 ),
			Test 7( 1 ),
			Test 8( 1 ),
			Rule 1 2S( 1 ),
			Rule 1 3S( 1 ),
			Rule 2 2S( 1 ),
			Rule R 4S( 1 ),
			Rule 4 1S( 1 ),
			Rule 10 X( 1 ),
			Test Beyond Limits( 1 )
		)
	)
);
obj << Test Excluded subgroups( 0 );
obj << Save Script to Script window;
actScript = Window( "Script Window" ) << get text;
Window( "Script Window" ) << close window;
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder object.
3. Enable alarm report.
4. Set chart type to Shewhart Attribute.
5. Define subgroup, Y, and phase variables.
6. Plot proportion points.
7. Set binomial limits.
8. Enable multiple tests and rules.
9. Disable excluded subgroup testing.
10. Save script to script window.



### Example 86
> **Summary**: Creates a control chart to monitor the proportion of received applications, utilizing Control Chart Builder and report generation.

<!-- Keywords: #ControlChartBuilder, #ReportGeneration, #JMPScriptingLanguage, #StatisticalProcessControl, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder( Variables( Y( :Receive Application ) ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Create control chart.
3. Set variable.
4. Generate report.



### Example 87
> **Summary**: Creates a control chart for NPN1 data, positioning it in the first column and formatting the scale box to display percentages.

<!-- Keywords: #ControlChart, #JSLScriptingLanguage, #DataVisualization, #ProcessCapabilityAnalysis, #Histogram -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Variables( Y( :NPN1 ) ),
	Chart( Position( 1 ) ),
	SendToReport(
		Dispatch( {"NPN1 Limit Summaries", "Process Capability Analysis", "Histogram"}, "1", ScaleBox, {Format( "Percent", 12, 0 )} )
	)
);
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Create control chart.
3. Set Y variable.
4. Position chart.
5. Format scale box.
6. Generate report.



### Example 88
> **Summary**: Creates a Shewhart Attribute control chart with proportion statistic and Poisson distribution limits, generating a report from the analysis.

<!-- Keywords: #JSLScriptingLanguage, #ControlChartBuilder, #ShewhartAttribute, #PoissonDistribution, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Class( Shewhart Attribute ),
	Variables( Y( :species ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Poisson" ) ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Set chart type to Shewhart Attribute.
4. Specify variable for analysis.
5. Define chart with proportion statistic.
6. Set limits using Poisson distribution.
7. Generate report from chart.



### Example 89
> **Summary**: Creates a control chart for analyzing the proportion of NPN1 in a dataset, specifying variables and position, and generating a report.

<!-- Keywords: #ControlChart, #JMPScriptingLanguage, #DataAnalysis, #StatisticalProcessControl, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder( Variables( Y( :NPN1 ) ), Chart( Position( 1 ) ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Create control chart.
3. Set variable.
4. Specify position.
5. Generate report.



### Example 90
> **Summary**: Creates a control chart builder object to visualize and analyze data from a specified data table, with subgrouping by State and grouping charts by Region.

<!-- Keywords: #ControlChartBuilder, #DataVisualization, #JMPScriptingLanguage, #StatisticalAnalysis, #DataScience -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Sort by Subgroup( 1 ),
	Variables( Subgroup( :State ), Y( :POP ) ),
	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ), Shade Zones( 1 ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Standard Deviation" ) ) ),
	By( :Region )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder object.
3. Sort by subgroup column.
4. Define subgroup and Y variables.
5. Add first chart with sigma limits.
6. Add second chart with standard deviation points.
7. Apply sigma limits to second chart.
8. Group charts by region.
9. Generate report from object.
10. Assign report to variable.



### Example 91
> **Summary**: Creates a control chart report from a data table, utilizing Control Chart Builder to visualize and analyze subgroup data.

<!-- Keywords: #ControlChartBuilder, #DataVisualization, #JMPScriptingLanguage, #StatisticalAnalysis, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder();
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create control chart builder object.
3. Generate control chart report.



### Example 92
> **Summary**: Creates a control chart for OZONE and CO variables in a data table, with subgroup size set to 5 and spec limits applied from CitySpecLimits.jmp.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataAnalysis, #StatisticalProcessControl, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtLimits = Open("data_table.jmp");
obj = dt << Control Chart Builder( Variables( Y( :OZONE, :CO ) ), Set Subgroup Size( 5 ) );
obj << Get Spec Limits( dtLimits );
obj << save script to script window;
actScript = Window( "Script Window" ) << get text;
Window( "Script Window" ) << close Window;
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Create control chart for OZONE and CO.
4. Set subgroup size to 5.
5. Apply spec limits from "CitySpecLimits.jmp".
6. Save script to script window.
7. Retrieve script text from window.
8. Close script window.



### Example 93
> **Summary**: Creates a control chart builder object with specified variables and generates a report, while also setting platform preferences.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #DataAnalysis, #Preferences, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder( Variables( "Subgroup"(:MACHINE), "Subgroup"(:DAY, Position( 1 )), "Y"(:DIAMETER) ) );
rpt = obj << report;
Close( dt, no save );
 Preferences( Control Chart Builder( Shade Zones( 0 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create control chart builder object.
3. Assign variables for subgroup and Y.
4. Generate report from object.
5. Close table without saving.
6. Set platform preferences.
7. Disable shade zones in control chart builder.



### Example 94
> **Summary**: Creates a control chart report for diameter measurements, using subgroup variables MACHINE and DAY, and Y variable DIAMETER.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder( Variables( "Subgroup"(:MACHINE), "Subgroup"(:DAY, Position( 1 )), "Y"(:DIAMETER) ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create control chart builder object.
3. Set subgroup variables: MACHINE, DAY.
4. Set Y variable: DIAMETER.
5. Generate control chart report.



### Example 95
> **Summary**: Creates a control chart for NPN1 variable, grouping by lot_id and wafer, using Control Chart Builder in JMP.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #DataVisualization, #StatisticalProcessControl, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder( Variables( Subgroup( :lot_id ), Subgroup( :wafer ), Y( :NPN1 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create control chart object.
3. Set subgroup variable lot_id.
4. Set subgroup variable wafer.
5. Set response variable NPN1.



### Example 96
> **Summary**: Creates a control chart for short-run data, specifying Total Kernels as the Y variable, Number Popped as the Phase, and Brand as the Part.

<!-- Keywords: #ControlChart, #ShortRunData, #JSLScripting, #StatisticalProcessControl, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder(
	Class( Short Run ),
	Variables( Y( :Total Kernels ), Phase( :Number Popped ), Part( :Brand ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range Centered" ) ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Create control chart.
3. Set class to Short Run.
4. Define variables.
5. Add Total Kernels to Y.
6. Add Number Popped to Phase.
7. Add Brand to Part.
8. Position chart at 2.
9. Add moving range points.
10. Generate report.



### Example 97
> **Summary**: Creates a control chart builder with specific settings for average points and range limits, while disabling two Shewhart charts and hiding the control panel.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #DataAnalysis, #StatisticalProcessControl, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj2 = dt << Control Chart Builder(
	Show Two Shewhart Charts( 0 ),
	Variables( Y( :DIAMETER ) ),
	Set Subgroup Size( 6 ),
	Chart( Points( Statistic( "Average" ) ), Limits( Sigma( "Range" ) ) ),
	Show Control Panel( 0 )
);
obj2 << OC Curve;
dtLimits = obj2 << Save Limits( in New Table );
```

**Code Explanation**:

1. Open data table;
2. Create control chart builder.
3. Disable two Shewhart charts.
4. Set variable to "DIAMETER".
5. Define subgroup size as 6.
6. Configure chart for average points.
7. Use range for limits.
8. Hide control panel.
9. Generate OC curve.
10. Save limits to new table.



### Example 98
> **Summary**: Creates a Shewhart Attribute control chart with binomial limits and proportion points, excluding specific rows from the data table.

<!-- Keywords: #JSLScriptingLanguage, #ControlChartBuilder, #ShewhartAttribute, #BinomialLimits, #ProportionPoints -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select rows( 2 ) << exclude( 1 );
dt << select rows( 3 ) << exclude( 1 );
dt << select rows( 10 ) << exclude( 1 );
dt << select rows( 14 ) << exclude( 1 );
obj2 = dt << Control Chart Builder(
	Class( Shewhart Attribute ),
	Variables( Y( :"# defective"n ), n Trials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Binomial" ) ) ),
	Show Control Panel( 0 )
);
obj2 << OC Curve;
dtLimits = obj2 << Save Limits( in New Table );
```

**Code Explanation**:

1. Open data table;
2. Exclude row 2.
3. Exclude row 3.
4. Exclude row 10.
5. Exclude row 14.
6. Create control chart.
7. Set chart type to Shewhart Attribute.
8. Define Y variable as "# defective".
9. Set n Trials to "Lot Size".
10. Add proportion points and binomial limits.
11. Disable control panel.
12. Generate OC curve.
13. Save limits to new table.



### Example 99
> **Summary**: Creates a Shewhart Attribute control chart with Poisson limits, using the DIAMETER variable and 6 trials, and generates an OC curve.

<!-- Keywords: #ControlChartBuilder, #ShewhartAttribute, #PoissonLimits, #JSLScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj2 = dt << Control Chart Builder(
	Class( Shewhart Attribute ),
	Variables( Y( :DIAMETER ) ),
	n Trials( 6 ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Poisson" ) ) ),
	Show Control Panel( 0 )
);
obj2 << OC Curve;
dtLimits = obj2 << Save Limits( in New Table );
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder.
3. Set chart type to Shewhart Attribute.
4. Specify Y variable as DIAMETER.
5. Set number of trials to 6.
6. Add points statistic as Count.
7. Use Poisson for limits.
8. Hide control panel.
9. Generate OC curve.
10. Save limits to new table.



### Example 100
> **Summary**: Creates a Shewhart Attribute control chart to analyze the proportion of DIAMETER values, with limits set using the Poisson distribution and OC curve generation.

<!-- Keywords: #JSLScriptingLanguage, #ControlChartBuilder, #ShewhartAttribute, #PoissonDistribution, #OCCurve -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj2 = dt << Control Chart Builder(
	Class( Shewhart Attribute ),
	Variables( Y( :DIAMETER ) ),
	n Trials( 6 ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Poisson" ) ) ),
	Show Control Panel( 0 )
);
obj2 << OC Curve;
dtLimits = obj2 << Save Limits( in New Table );
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder object.
3. Set chart type to Shewhart Attribute.
4. Specify variable for analysis.
5. Define number of trials.
6. Configure chart to show proportion.
7. Set limits using Poisson distribution.
8. Hide control panel.
9. Generate OC curve.
10. Save limits to new table.



## Control Chart Builder using Set Modeling Type
> **Summary**: Creates a control chart to examine the relationship between :DAY and :DIAMETER, utilizing the Control Chart Builder platform.

<!-- Keywords: #ControlChartBuilder, #ContinuousData, #JMPScriptingLanguage, #StatisticalAnalysis, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:DAY << Set Modeling Type( Continuous );
obj = dt << Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ), Phase( :Phase ) ) );
```

**Code Explanation**:

1. Open table.
2. Set DAY as continuous.
3. Create control chart.



## Control Chart Builder using Column
> **Summary**: Creates a control chart for the 'Delay' column in a data table, specifying spec limits and defining subgroup and Y variables.

<!-- Keywords: #ControlChart, #SpecLimits, #JSLScripting, #DataAnalysis, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( "Delay" ) << Set Property( "Spec Limits", {LSL( -10 ), USL( 40 ), Target( 15 ), Show Limits( 1 )} );
ccb = Control Chart Builder( Show Control Panel( 0 ), Variables( "Subgroup"(:Day), "Y"(:Delay) ) );
```

**Code Explanation**:

1. Open data table;
2. Set spec limits for "Delay" column.
3. Create Control Chart Builder object.
4. Hide control panel.
5. Define "Day" as subgroup variable.
6. Define "Delay" as Y variable.



## Control Chart Builder using For
> **Summary**: Generates a control chart for continuous variables in a specified data table, utilizing Control Chart Builder and filtering out rows with an empty lot_id.

<!-- Keywords: #ControlChartBuilder, #DataFiltering, #ContinuousVariables, #JMPScriptingLanguage, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myrs2 = dt << get rows where( :lot_id == "lot02" );
For( j = 1, j <= N Items( myrs2 ), j++,
	:lot_id[myrs2[j]] = ""
);
lstStatistic = {"Average", "Range", "Standard Deviation", "Moving Range on Means", "Moving Range on Std Dev"};
lstSigma = {"Range", "Standard Deviation", "Moving Range", "Median Moving Range"};
obj = dt << Control Chart Builder(
	Size( 534, 464 ),
	Show Control Panel( 0 ),
	Variables( Subgroup( :lot_id ), Subgroup( :wafer, Position( 1 ) ), Y( :INM1 ) ),
	Chart( Position( 1 ), Points( Statistic( lstStatistic[1] ) ), Limits( Sigma( lstSigma[1] ) ) ),
	Chart( Position( 2 ), Points( Statistic( lstStatistic[2] ) ), Limits( Sigma( lstSigma[2] ) ) ),
	Chart( Position( 3 ), Points( Statistic( lstStatistic[3] ) ), Limits( Sigma( lstSigma[3] ) ) ),
	Chart( Position( 4 ), Points( Statistic( lstStatistic[4] ) ), Limits( Sigma( lstSigma[4] ) ) ),
	Chart( Position( 5 ), Points( Statistic( lstStatistic[5] ) ), Limits( Sigma( lstSigma[4] ) ) ),
	Local Data Filter( Add Filter( columns( :lot_id ), Where( :lot_id != {""} ), ) )
);
```

**Code Explanation**:

1. Open data table.
2. Identify rows with lot_id "lot02".
3. Clear lot_id for identified rows.
4. Define statistics list.
5. Define sigma list.
6. Create control chart builder object.
7. Set chart size.
8. Hide control panel.
9. Configure variables and subgroups.
10. Add charts with specified statistics and limits.



## Control Chart Builder using Set Row States
> **Summary**: Creates a Control Chart to analyze height data, defining age as a subgroup variable and plotting average statistic points.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #DataTableManipulation, #StatisticalAnalysis, #InteractiveVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Set Row States(
	[8960, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
dt << Control Chart Builder(
	Variables( Subgroup( :age, Position( 1 ) ), Y( :height ) ),
	Chart( Position( 1 ), Points( Statistic( "Average" ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Set row states for dataset.
3. Launch Control Chart Builder.
4. Define age as subgroup variable.
5. Define height as Y variable.
6. Position chart at 1.
7. Plot average statistic points.



## Control Chart Builder using Add Rows
> **Summary**: Creates a control chart builder with subgroup, Y, and phase variables, adding six rows to the data table and sending the report to an outline box.

<!-- Keywords: #ControlChartBuilder, #DataTableManagement, #JSLScripting, #ReportGeneration, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Add Rows( 6, At End( 1 ) );
Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ), Phase( :Phase ) ),
	Chart(
		Position( 1 ),
		Warnings( Test 1( 1 ), Test 2( 1 ), Test 3( 1 ), Test 4( 1 ), Test 5( 1 ), Test 6( 1 ), Test 7( 1 ), Test 8( 1 ) )
	),
	Show Control Panel( 0 ),
	SendToReport( Dispatch( {}, "DIAMETER Limit Summaries", OutlineBox, {Close( 1 )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Add six rows to table.
3. Create control chart builder.
4. Set subgroup variable.
5. Set Y variable.
6. Set phase variable.
7. Position chart.
8. Enable all warnings.
9. Hide control panel.
10. Close limit summaries outline.



## Control Chart Builder using Log Capture
> **Summary**: Creates a Control Chart Builder object with two charts, one for individual points and another for moving range, using variables sex, height, and age.

<!-- Keywords: #ControlChartBuilder, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	obj = dt << Control Chart Builder(
		Variables( "Subgroup"(:sex), "Y"(:height), "Phase"(:age) ),
		Chart( Position( 1 ), Points( Statistic( "Individual" ) ), Limits( Sigma( "Moving Range" ) ) ),
		Chart( Position( 2 ), Points( Statistic( "Moving Range on Std Dev" ) ), Limits( Sigma( "Range" ) ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Start log capture.
3. Create Control Chart Builder object.
4. Define variables: sex, height, age.
5. Add first chart for individual points.
6. Set limits using moving range.
7. Add second chart for moving range.
8. Set limits using range.
9. End log capture.



## Control Chart Builder using Rows
> **Summary**: Creates a Control Chart Builder object for rare event analysis, selecting specific rows and excluding others, with points statistic and Negative Binomial limits.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #RareEventAnalysis, #NegativeBinomialLimits, #DataSelection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select
Rows(
	{1, 2, 3, 4, 5, 6, 7, 8, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40}
) << exclude;
obj = dt << Control Chart Builder(
	Class( "Rare Event" ),
	Variables( Subgroup( :sex ), Y( :height ) ),
	Show Excluded Region( 1 ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Negative Binomial" ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Select specific rows.
3. Exclude selected rows.
4. Create Control Chart Builder object.
5. Set chart class to "Rare Event".
6. Define subgroup and Y variables.
7. Show excluded region.
8. Add points statistic.
9. Set limits using Negative Binomial.



## Control Chart Builder using For Each
> **Summary**: Creates and customizes control charts for multiple samples using the Control Chart Builder platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #DataTable, #ForEachLoop, #ReportCustomization -->

**Code**:
```jsl
plat_samples = ["Control Chart Builder" => {"IMR Chart with Tests"}, => {}];
dt = Open("data_table.jmp");
For Each( {sample}, plat_samples["Control Chart Builder"],
	obj = dt << Control Chart Builder( Variables( Y( :Weight ), Subgroup( :Sample ) ) );
	Eval( Eval Expr( obj << Apply Preset( "Sample Presets", Expr( sample ) ) ) );
	obj << Set Report Title( sample );
);
```

**Code Explanation**:

1. Define `plat_samples` array.
2. Open data table;
3. Loop through each preset.
4. Create control chart object.
5. Apply selected preset.
6. Set report title.
7. Repeat for all presets.



## Control Chart Builder using JSL Quote
> **Summary**: Creates a control chart and graph builder with transformed variables, utilizing JMP's Control Chart Builder and Graph Builder platforms.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #GraphBuilder, #DataTransformation, #InteractiveVisualization -->

**Code**:
```jsl
contents = JSL Quote(
   dt=Open("data_table.jmp");
    obj=dt<<Control Chart Builder();
    ccbb=Report(obj)[Graph Builder Box(1)];
    ccbb<<Add Variable({Transform Column( "First[sex]", Character,
Formula(Word(1, :sex))), Role("Y")});
);
Include( Char To Blob( contents ), <<New Context );
Open("data_table.jmp");
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
Report( gb )[Graph Builder Box( 1 )] << Add Variable( {Transform Column( "age0", "Numeric", Formula( :age + 0 ) ), Role( "Wrap" )} );
```

**Code Explanation**:

1. Open data table.
2. Create control chart builder object.
3. Access graph builder box.
4. Add transformed sex variable as Y role.
5. Convert JSL code to blob.
6. Include JSL code in new context.
7. Open data_table data table again.
8. Create graph builder with height and weight.
9. Access graph builder box.
10. Add transformed age variable as wrap role.



## Control Chart Builder using Lock Data Table
### Example 1
> **Summary**: Creates and customizes control charts for 'Acid' data, while also generating a new table with row state properties.

<!-- Keywords: #JSLScripting, #ControlCharts, #DataVisualization, #RowStateProperties, #TableCreation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Lock Data Table( 1 );
cc = dt << Control Chart Builder(
	Show Control Panel( 0 ),
	Variables( "Y"(:Acid) ),
	Chart( Position( 1 ), Points( Statistic( "Individual" ) ), Limits( Sigma( "Moving Range" ) ), Connecting Line( 1 ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range" ) ), Limits( Sigma( "Moving Range" ) ), Connecting Line( 1 ) )
);
dt << Lock Data Table( 0 );
cc << in column;
prop = Column( "Acid" ) << Get Property( "Control Limits" );
Close( dt, no save );
dt = New Table( "RowStateTest",
	Add Rows( 3 ),
	New Column( "Numerics", Numeric, Continuous, Format( "Best", 12 ), Set Values( [1, 2, 3] ) ),
	New Column( "RS", Row State, Row State, Set Values( [0, 0, 0] ) )
);
dt << Save( "$TEMP/RowStateTest.jmp" );
Close( dt, no save );
Try( Delete File( "$TEMP/RowStateTest.jmp" ) );
dtnew = New Table( "RowStateCustom",
	Add Rows( 9 ),
	New Column( "Data", Numeric, Continuous, Format( "Best", 12 ), Set Values( [1, 2, 3, 4, 5, 6, 7, 8, 9] ) ),
	New Column( "RS", Row State, Row State, Set Values( [2, 4, 131088, 8, 768, 9216, 9328, 140448, 9392] ) )
);
```

**Code Explanation**:

1. Open data table.
2. Lock data table.
3. Create control chart for "Acid".
4. Disable control panel.
5. Plot individual points for "Acid".
6. Set limits using moving range.
7. Connect data points.
8. Plot moving range.
9. Set limits using moving range.
10. Connect moving range points.
11. Unlock data table.
12. Insert control chart into column.
13. Retrieve control limits property.
14. Close data_table.jmp without saving.
15. Create new table "RowStateTest".
16. Add 3 rows.
17. Add "Numerics" column.
18. Set "Numerics" values.
19. Add "RS" column.
20. Set "RS" values.
21. Save "RowStateTest.jmp" to $TEMP.
22. Close "RowStateTest.jmp" without saving.
23. Delete "RowStateTest.jmp" from $TEMP.
24. Create new table "RowStateCustom".
25. Add 9 rows.
26. Add "Data" column.
27. Set "Data" values.
28. Add "RS" column.
29. Set "RS" values.



### Example 2
> **Summary**: Creates a control chart builder object with individual points and moving range charts, utilizing JMP's Control Chart Builder platform.

<!-- Keywords: #ControlChartBuilder, #JMPScriptingLanguage, #DataAnalysis, #StatisticalProcessControl, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Lock Data Table( 1 );
cc = dt << Control Chart Builder(
	Show Control Panel( 0 ),
	Variables( "Y"(:Acid) ),
	Chart( Position( 1 ), Points( Statistic( "Individual" ) ), Limits( Sigma( "Moving Range" ) ), Connecting Line( 1 ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range" ) ), Limits( Sigma( "Moving Range" ) ), Connecting Line( 1 ) )
);
dt << Lock Data Table( 0 );
cc << in column;
prop = Column( "Acid" ) << Get Property( "Control Limits" );
```

**Code Explanation**:

1. Open data table.
2. Lock data table for editing.
3. Create control chart builder object.
4. Hide control panel.
5. Set Y variable to Acid.
6. Add individual points chart.
7. Set limits using moving range.
8. Enable connecting lines.
9. Add moving range chart.
10. Retrieve control limits property.



## Control Chart Builder using New Window
### Example 1
> **Summary**: Creates a Control Chart Builder in JMP, generating three charts for average points, moving range on means, and range points with limits based on sigma.

<!-- Keywords: #JMP, #ControlChartBuilder, #DataVisualization, #SigmaLimits, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nw = New Window( "Test",
	dt << Control Chart Builder(
		Show Control Panel( 0 ),
		Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
		Chart( Position( 1 ), Points( Statistic( "Average" ) ), Limits( Sigma( "Range" ) ), Connecting Line( 1 ) ),
		Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Moving Range" ) ) ),
		Chart( Position( 3 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Range" ) ), Connecting Line( 1 ) )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "Test".
3. Initialize Control Chart Builder.
4. Hide control panel.
5. Set subgroup variable to DAY.
6. Set Y variable to DIAMETER.
7. Add first chart for average points.
8. Add limits based on range sigma.
9. Connect average points with lines.
10. Add second chart for moving range on means.
11. Add limits based on moving range sigma.
12. Add third chart for range points.
13. Add limits based on range sigma.
14. Connect range points with lines.



### Example 2
> **Summary**: Creates a control chart builder object in JMP, using the 'Sample' variable as the Y-axis and 'Phase' as the X-axis, with Shewhart attribute and variables classes applied.

<!-- Keywords: #JMP, #ControlChartBuilder, #ShewhartAttribute, #ShewhartVariables, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "test",
	H List Box(
		obj = dt << Control Chart Builder(
			Variables( Y( :Sample ), Phase( :Phase ) ),
			Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma ) ),
			Class( shewhart attribute ),
			Class( shewhart variables ), 
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "test".
3. Add horizontal list box.
4. Insert control chart builder object.
5. Set Y variable to "Sample".
6. Set Phase variable to "Phase".
7. Plot proportion statistic.
8. Use sigma limits.
9. Apply Shewhart attribute class.
10. Apply Shewhart variables class.



### Example 3
> **Summary**: Creates side-by-side control charts for height and weight data, cloning limit summaries and appending them to the chart.

<!-- Keywords: #JSLScriptingLanguage, #ControlCharts, #DataVisualization, #JMPScripting, #DataAnalysis -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
nw = New Window( "Side by Side",
	H List Box(
		//height control chart
		ccheight = dt << Control Chart Builder( Variables( Y( :height ) ), Show Control Panel( 0 ) );
		//get copy of limits summary
		ccheightsummary = Report( ccheight )["Control Chart Builder", "height Limit Summaries", List Box( 1 )] << clone box;
		//hide original limits summary
		ccheight << Show Limit Summaries( 0 );
		//put cloned summaries at bottom of window		
		Report( ccheight )["Control Chart Builder"] << append( ccheightsummary );
	, //comma here to separate these, but it's not needed. So, one could just loop through a list of columns instead of hard-coding.	
		//repeat for weight control chart
		ccweight = dt << Control Chart Builder( Variables( Y( :weight ) ), Show Control Panel( 0 ) );
		ccweightsummary = Report( ccweight )["Control Chart Builder", "weight Limit Summaries", List Box( 1 )] << clone box;
		ccweight << Show Limit Summaries( 0 );
		Report( ccweight )["Control Chart Builder"] << append( ccweightsummary );
	)
);
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create new window titled "Side by Side".
4. Add horizontal list box.
5. Generate height control chart.
6. Clone height limit summaries.
7. Hide original height limit summaries.
8. Append cloned summaries to chart.
9. Generate weight control chart.
10. Clone weight limit summaries.
11. Hide original weight limit summaries.
12. Append cloned summaries to chart.



## Control Chart Builder using Select Rows
> **Summary**: Creates control charts and reports from a data table, utilizing the Control Chart and Control Chart Builder platforms in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ControlCharts, #DataAnalysis, #ReportGeneration, #StatisticalProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( [25] ) << Exclude;
obj = dt << Control Chart(
	Use Excluded Points on MR,
	Group Size( 1 ),
	KSigma( 3 ),
	Chart Col( :Weight, Individual Measurement, Moving Range )
);
rpt = obj << report;
obj2 = dt << Control Chart Builder( Use Excluded Points on MR( 1 ), Variables( Y( :Weight ) ) );
rpt2 = obj2 << report;
```

**Code Explanation**:

1. Open data table.
2. Select row 25.
3. Exclude selected row.
4. Create control chart.
5. Set group size to 1.
6. Set KSigma to 3.
7. Add weight column.
8. Generate report.
9. Create control chart builder.
10. Generate second report.



## Control Chart Builder using New Column
### Example 1
> **Summary**: Creates a control chart with two Shewhart charts to monitor and analyze the 'Diameter/10000' column in a data table, utilizing subgroup size 6 and range limits.

<!-- Keywords: #JSL, #ControlChart, #ShewhartChart, #DataAnalysis, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Diameter/10000", Numeric, "Continuous", Formula( :Diameter / 10000 ) );
obj2 = dt << Control Chart Builder(
	Show Two Shewhart Charts( 0 ),
	Variables( Y( :"Diameter/10000"n ) ),
	Set Subgroup Size( 6 ),
	Chart( Points( Statistic( "Average" ) ), Limits( Sigma( "Range" ) ) ),
	Show Control Panel( 0 )
);
obj2 << OC Curve;
dtLimits = obj2 << Save Limits( in New Table );
```

**Code Explanation**:

1. Open data table.
2. Create new column.
3. Divide Diameter by 10000.
4. Build control chart.
5. Use two Shewhart charts.
6. Set subgroup size to 6.
7. Display average points.
8. Use range for limits.
9. Hide control panel.
10. Generate OC curve.
11. Save limits to new table.



### Example 2
> **Summary**: Creates a control chart with OC curve and saves limits to a new table, utilizing Control Chart Builder and formula-based calculations.

<!-- Keywords: #ControlChartBuilder, #OC_Curve, #DataManipulation, #JMP_Scripting, #Statistical_Analysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Diameter*10000", Numeric, "Continuous", Formula( :Diameter * 10000 ) );
obj2 = dt << Control Chart Builder(
	Show Two Shewhart Charts( 0 ),
	Variables( Y( :"Diameter*10000"n ) ),
	Set Subgroup Size( 6 ),
	Chart( Points( Statistic( "Average" ) ), Limits( Sigma( "Range" ) ) ),
	Show Control Panel( 0 )
);
obj2 << OC Curve;
dtLimits = obj2 << Save Limits( in New Table );
```

**Code Explanation**:

1. Open table.
2. Create new column.
3. Apply formula to column.
4. Launch Control Chart Builder.
5. Configure chart settings.
6. Add subgroup size.
7. Define chart elements.
8. Hide control panel.
9. Generate OC Curve.
10. Save limits to new table.



### Example 3
> **Summary**: Creates a Shewhart Attribute control chart with binomial limits and generates an OC curve to monitor the proportion of defective items in a dataset.

<!-- Keywords: #JSLScriptingLanguage, #ControlChartBuilder, #ShewhartAttribute, #BinomialLimits, #OCCurve -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "# non-defective", Numeric, "Continuous", Formula( :Lot Size - :"# defective"n ) );
obj2 = dt << Control Chart Builder(
	Class( Shewhart Attribute ),
	Variables( Y( :"# defective"n ), n Trials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Binomial" ) ) ),
	Show Control Panel( 0 )
);
obj2 << OC Curve;
dtLimits = obj2 << Save Limits( in New Table );
```

**Code Explanation**:

1. Open table.
2. Create new column.
3. Initialize Control Chart Builder.
4. Set chart type to Shewhart Attribute.
5. Specify Y variable and trials.
6. Configure points and limits.
7. Hide control panel.
8. Generate OC Curve.
9. Save limits to new table.



### Example 4
> **Summary**: Creates a control chart to monitor non-defective items in a production process, utilizing Shewhart Attribute and Binomial limits.

<!-- Keywords: #JSLScriptingLanguage, #ControlChartBuilder, #ShewhartAttribute, #BinomialLimits, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "# non-defective", Numeric, "Continuous", Formula( :Lot Size - :"# defective"n ) );
obj2 = Control Chart Builder(
	Class( Shewhart Attribute ),
	Variables( Y( :"# non-defective"n ), n Trials( :Lot Size ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Binomial" ) ) ),
	Show Control Panel( 0 )
);
obj2 << OC Curve;
dtLimits = obj2 << Save Limits( in New Table );
```

**Code Explanation**:

1. Open data table.
2. Create new column for non-defectives.
3. Initialize Control Chart Builder.
4. Set chart type to Shewhart Attribute.
5. Define variables: non-defectives, lot size.
6. Configure chart with points and limits.
7. Hide control panel.
8. Generate OC curve.
9. Save control limits to new table.



### Example 5
> **Summary**: Creates a control chart with Poisson limits and generates an OC curve for analyzing the 'Diameter/10000' column in a data table.

<!-- Keywords: #JMPScriptingLanguage, #ControlChartBuilder, #PoissonLimits, #OCCurve, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Diameter/10000", Numeric, "Continuous", Formula( :Diameter / 10000 ) );
obj2 = dt << Control Chart Builder(
	Class( Shewhart Attribute ),
	Variables( Y( :"Diameter/10000"n ) ),
	n Trials( 6 ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Poisson" ) ) ),
	Show Control Panel( 0 )
);
obj2 << OC Curve;
dtLimits = obj2 << Save Limits( in New Table );
```

**Code Explanation**:

1. Open data table;
2. Create new column "Diameter/10000".
3. Apply formula to new column.
4. Launch Control Chart Builder.
5. Set chart type to Shewhart Attribute.
6. Select "Diameter/10000" as variable.
7. Set n Trials to 6.
8. Configure chart with Count statistic.
9. Use Poisson limits.
10. Hide control panel.
11. Generate OC Curve.
12. Save limits to new table.



### Example 6
> **Summary**: Creates a control chart for continuous data, using Shewhart Attribute class and configuring points and limits with Poisson sigma limits.

<!-- Keywords: #JSLScriptingLanguage, #ControlChart, #ShewhartAttribute, #PoissonSigmaLimits, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Diameter*10000", Numeric, "Continuous", Formula( :Diameter * 10000 ) );
obj2 = dt << Control Chart Builder(
	Class( Shewhart Attribute ),
	Variables( Y( :"Diameter*10000"n ) ),
	n Trials( 6 ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Poisson" ) ) ),
	Show Control Panel( 0 )
);
obj2 << OC Curve;
dtLimits = obj2 << Save Limits( in New Table );
```

**Code Explanation**:

1. Open data table.
2. Create new column.
3. Multiply Diameter by 10000.
4. Build control chart.
5. Set chart type to Shewhart Attribute.
6. Select "Diameter*10000" for Y variable.
7. Set n Trials to 6.
8. Configure chart points and limits.
9. Hide control panel.
10. Generate OC Curve.
11. Save limits to new table.



### Example 7
> **Summary**: Creates a control chart with an OC curve for analyzing continuous data, utilizing Control Chart Builder and specifying variables, trials, and chart elements.

<!-- Keywords: #JMPScriptingLanguage, #ControlChart, #OCCurve, #ContinuousDataAnalysis, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Diameter/10000", Numeric, "Continuous", Formula( :Diameter / 10000 ) );
obj2 = dt << Control Chart Builder(
	Class( Shewhart Attribute ),
	Variables( Y( :"Diameter/10000"n ) ),
	n Trials( 6 ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Poisson" ) ) ),
	Show Control Panel( 0 )
);
obj2 << OC Curve;
dtLimits = obj2 << Save Limits( in New Table );
```

**Code Explanation**:

1. Open table.
2. Create new column.
3. Apply formula to column.
4. Build control chart.
5. Set chart type.
6. Define variables.
7. Set number of trials.
8. Configure chart elements.
9. Hide control panel.
10. Generate OC curve.
11. Save limits to new table.



### Example 8
> **Summary**: Creates a Shewhart Attribute control chart with OC Curve and limits, using the Diameter*10000 column as input.

<!-- Keywords: #JMPScriptingLanguage, #ControlChart, #ShewhartAttribute, #OCCurve, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Diameter*10000", Numeric, "Continuous", Formula( :Diameter * 10000 ) );
obj2 = dt << Control Chart Builder(
	Class( Shewhart Attribute ),
	Variables( Y( :"Diameter*10000"n ) ),
	n Trials( 6 ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Poisson" ) ) ),
	Show Control Panel( 0 )
);
obj2 << OC Curve;
dtLimits = obj2 << Save Limits( in New Table );
```

**Code Explanation**:

1. Open data table.
2. Create new column.
3. Multiply Diameter by 10000.
4. Launch Control Chart Builder.
5. Set chart type to Shewhart Attribute.
6. Add Diameter*10000 to Y variables.
7. Set n Trials to 6.
8. Configure points and limits.
9. Hide control panel.
10. Generate OC Curve.
11. Save limits to new table.



## Control Chart Builder using Delete Columns
> **Summary**: Creates and customizes a Model Driven Multivariate Control Chart (MDMCC) with T Square plots for each part, followed by the generation of a Short Run Control Chart Builder.

<!-- Keywords: #JMPScriptingLanguage, #ModelDrivenMultivariateControlChart, #TSquarePlot, #ShortRunControlChart, #DataTableManipulation -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
//cleanup
dt << Delete Columns( {:name, :sex} );
dt:age << set name( "Part" );
mdmcc = dt << Model Driven Multivariate Control Chart(
	Process( :height, :weight ),
	By( :Part )
);
//get number of different parts/skus
nparts = n items(Associative Array(:Part) <<Get Keys);
for each ({i}, 1::nparts,
	mdmcc[i] << T Square Plot (Save Values)
);
//make short run cc
ccb = dt << Control Chart Builder(
	Class( Short Run ),
	Variables( Y( :T¬≤ By Part ), Part( :Part ) ),
	Show Control Panel( 0 )
);
//cleanup
mdmcc << close window;
```

**Code Explanation**:

1. Set default names.
2. Open data table;
3. Delete name and sex columns.
4. Rename age column to Part.
5. Create Model Driven Multivariate Control Chart.
6. Set process variables height and weight.
7. Group by Part.
8. Get number of unique parts.
9. Loop through each part.
10. Save T Square plot values.
11. Create Short Run Control Chart Builder.
12. Set chart type to Short Run.
13. Add T¬≤ By Part and Part variables.
14. Hide control panel.
15. Close Model Driven Multivariate Control Chart window.



