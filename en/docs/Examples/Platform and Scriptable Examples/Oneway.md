# Oneway

## Oneway using ANOVA
> **Summary**: Opens a data table, creates a new window with horizontal list boxes, and performs one-way ANOVA for multiple variables, including AgeClass, City(Y/N), and Rating Class. The script also configures plot axes, enables mean diamonds, and comparison circles.

<!-- Keywords: #JMPScriptingLanguage, #ANOVAAnalysis, #DataVisualization, #PlotCustomization, #InteractiveDashboard -->

**Code**:
```jsl
// ANOVA (Claim USD)
// Open data table
dt = Open("data_table.jmp");
// ANOVA (Claim USD)
New Window(
	"Fit Y by X of Claim USD",
	H List Box(
		Oneway(
			Y( :Claim USD ),
			X( :AgeClass ),
			All Pairs( 1 ),
			Means( 1 ),
			Median Test( 1 ),
			Box Plots( 0 ),
			Mean Diamonds( 1 ),
			Comparison Circles( 1 ),
			X Axis proportional( 0 ),
			SendToReport(
				Dispatch( {}, "1",
					ScaleBox,
					{
					Format(
						"Currency",
						"USD",
						15,
						0
					), Min( 1000 ),
					Max( 8000 ),
					Inc( 1000 )}
				),
				Dispatch( {},
					"Oneway Plot",
					FrameBox,
					Marker Drawing Mode(
						"Fast"
					)
				)
			)
		),
		Oneway(
			Y( :Claim USD ),
			X( :"City(Y/N)"n ),
			All Pairs( 1 ),
			Means( 1 ),
			Median Test( 1 ),
			Box Plots( 0 ),
			Mean Diamonds( 1 ),
			Comparison Circles( 1 ),
			X Axis proportional( 0 ),
			SendToReport(
				Dispatch( {}, "1",
					ScaleBox,
					{
					Format(
						"Currency",
						"USD",
						15,
						0
					), Min( 1000 ),
					Max( 8000 ),
					Inc( 1000 )}
				),
				Dispatch( {},
					"Oneway Plot",
					FrameBox,
					Marker Drawing Mode(
						"Fast"
					)
				)
			)
		),
		Oneway(
			Y( :Claim USD ),
			X( :Rating Class ),
			All Pairs( 1 ),
			Means( 1 ),
			Median Test( 1 ),
			Box Plots( 0 ),
			Mean Diamonds( 1 ),
			Comparison Circles( 1 ),
			X Axis proportional( 0 ),
			SendToReport(
				Dispatch( {}, "1",
					ScaleBox,
					{
					Format(
						"Currency",
						"USD",
						15,
						0
					), Min( 1000 ),
					Max( 8000 ),
					Inc( 1000 )}
				),
				Dispatch( {},
					"Oneway Plot",
					FrameBox,
					Marker Drawing Mode(
						"Fast"
					)
				)
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Display horizontal list box.
4. Perform one-way ANOVA for AgeClass.
5. Perform one-way ANOVA for City(Y/N).
6. Perform one-way ANOVA for Rating Class.
7. Set currency format for plots.
8. Configure plot axes.
9. Enable mean diamonds.
10. Enable comparison circles.



### Example 1
> **Summary**: Performs a one-way analysis on the 'height' response variable with respect to the 'sex' factor variable, displaying means and mean diamonds.

<!-- Keywords: #JMPScriptingLanguage, #One-WayAnalysis, #MeansandMeanDiamonds, #DataTableOperations, #StatisticalAnalysis -->

**Code**:
```jsl
// Oneway
// Open data table
dt = Open("data_table.jmp");
// Oneway
Oneway(
	Y( :height ),
	X( :sex ),
	Means( 1 ),
	Mean Diamonds( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Perform one-way analysis.
3. Set response variable.
4. Set factor variable.
5. Display means.
6. Show mean diamonds.



### Example 2
> **Summary**: Performs an Oneway analysis to identify significant predictors of a response variable in the Fitness data table, utilizing the Mean Diamonds option.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #MeanDiamonds, #StepwiseRegression, #DataAnalysis -->

**Code**:
```jsl
// Oneway
// Open data table
dt = Open("data_table.jmp");
// Oneway
Oneway(
	Y( :Time ),
	X( :Cost of Production ),
	"Means/Anova"n( 1 ),
	Mean Diamonds( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Launch Oneway analysis.
3. Set response variable.
4. Set factor variable.
5. Enable Means/Anova option.
6. Enable Mean Diamonds.



### Example 3
> **Summary**: Performs a stepwise linear regression analysis on the Fitness data table to identify significant predictors of Oxygen consumption, utilizing Oneway and Equivalence Tests

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #EquivalenceTests, #DataAnalysis, #StepwiseRegression -->

**Code**:
```jsl
// Fit Y by X Equivalence Tests
// Open data table
dt = Open("data_table.jmp");
// Fit Y by X Equivalence Tests
Oneway(
	Y( :Measurement ),
	X( :Drug Type ),
	Equivalence Tests(
		3, 0.05, "Pooled Variance",
		"Equivalence Trial"
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit Y by X Equivalence Tests.
3. Set Y variable.
4. Set X variable.
5. Specify equivalence tests.
6. Set significance level.
7. Choose pooled variance.
8. Define trial type.
9. Execute analysis.
10. Display results.



### Example 4
> **Summary**: Performs an Oneway analysis on the 'Toxicity' variable with respect to the 'Formulation' variable, displaying means and robust means lines in a diamond plot.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #DiamondPlot, #RobustMeansLines, #DataVisualization -->

**Code**:
```jsl
// Oneway
// Open data table
dt = Open("data_table.jmp");
// Oneway
Oneway(
	Y( :Toxicity ),
	X( :Formulation ),
	"Means/Anova"n( 1 ),
	Mean Diamonds( 1 ),
	Robust Means Lines( 1 )
);
```

**Code Explanation**:

1. Open table.
2. Run Oneway analysis.
3. Set Y variable.
4. Set X variable.
5. Enable Means/Anova option.
6. Enable Mean Diamonds.
7. Enable Robust Means Lines.



### Example 5
> **Summary**: Performs a one-way analysis of variance (ANOVA) to examine the relationship between Durability and Brand, displaying mean lines and connecting means for each brand.

<!-- Keywords: #JMPScriptingLanguage, #One-WayANOVA, #MeanLines, #ConnectMeans, #DurabilityAnalysis -->

**Code**:
```jsl
// Oneway: Durability by Brand
// Open data table
dt = Open("data_table.jmp");
// Oneway: Durability by Brand
Oneway(
	Y( :Durability ),
	X( :Brand ),
	Mean Lines( 1 ),
	Connect Means( 1 ),
	Grand Mean( 0 )
);
```

**Code Explanation**:

1. Open table.
2. Set variable dt.
3. Call Oneway function.
4. Specify Y variable.
5. Specify X variable.
6. Enable mean lines.
7. Connect mean points.
8. Disable grand mean.



### Example 6
> **Summary**: Performs an Oneway analysis to visualize the relationship between Y and surface quality, including means, box plots, and mean diamonds, with customized plot appearance.

<!-- Keywords: #OnewayAnalysis, #JMPScriptingLanguage, #DataVisualization, #BoxPlots, #MeanDiamonds -->

**Code**:
```jsl
// Oneway of Y by surface quality
// Open data table
dt = Open("data_table.jmp");
// Oneway of Y by surface quality
Oneway(
	Y( :Y ),
	X( :surface quality ),
	All Pairs( 1 ),
	Means( 1 ),
	Plot Actual by Quantile( 1 ),
	Box Plots( 1 ),
	Mean Diamonds( 1 ),
	X Axis Proportional( 0 ),
	SendToReport(
		Dispatch( {}, "Oneway Plot",
			FrameBox,
			{
			DispatchSeg(
				Box Plot Seg( 1 ),
				{Confidence Diamond( 0 ),
				Line Color( "Red" )}
			),
			DispatchSeg(
				Box Plot Seg( 2 ),
				{Confidence Diamond( 0 ),
				Line Color( "Red" )}
			),
			DispatchSeg(
				Box Plot Seg( 3 ),
				{Confidence Diamond( 0 ),
				Line Color( "Red" )}
			),
			DispatchSeg(
				Box Plot Seg( 4 ),
				{Confidence Diamond( 0 ),
				Line Color( "Red" )}
			)}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Perform Oneway analysis.
3. Set Y variable.
4. Set X variable.
5. Enable all pairs comparison.
6. Display means.
7. Plot actual by quantile.
8. Include box plots.
9. Show mean diamonds.
10. Customize plot appearance.



### Example 7
> **Summary**: Performs an Oneway analysis to visualize the relationship between Height and Gender in a data table, displaying means and mean diamonds.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #DataVisualization, #MeansPlotting, #MeanDiamonds -->

**Code**:
```jsl
// Oneway
// Open data table
dt = Open("data_table.jmp");
// Oneway
Oneway(
	Y( :Height ),
	X( :Gender ),
	Means( 1 ),
	Box Plots( 0 ),
	Mean Diamonds( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Perform Oneway analysis.
3. Set Y variable to Height.
4. Set X variable to Gender.
5. Display means.
6. Hide box plots.
7. Show mean diamonds.



### Example 8
> **Summary**: Generates an Oneway chart to visualize the relationship between Comb MPG and Mfr Name, filtered by Engine type, with customized frame size and rotated tick labels.

<!-- Keywords: #JMPScriptingLanguage, #OnewayChart, #DataVisualization, #Customization, #Filtering -->

**Code**:
```jsl
// Oneway Chart
// Open data table
dt = Open("data_table.jmp");
// Oneway Chart
Oneway(
	Y( :Comb MPG ),
	X( :Mfr Name ),
	Where( :Engine == "Gas" ),
	SendToReport(
		Dispatch( {}, "Oneway Plot",
			FrameBox,
			{Frame Size( 412, 244 )}
		),
		Dispatch( {}, "", NomAxisBox,
			{Rotated Tick Labels( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create oneway chart.
3. Set Y variable.
4. Set X variable.
5. Filter data.
6. Adjust frame size.
7. Rotate tick labels.



### Example 9
> **Summary**: Performs an Oneway analysis to match the 'miles' variable with the 'season' variable, while disabling X-axis proportionality and enabling matching lines for the 'subject' column.

<!-- Keywords: #OnewayAnalysis, #MatchingLines, #JMPScriptingLanguage, #DataVisualization, #StatisticalAnalysis -->

**Code**:
```jsl
// Oneway - Matching
// Open data table
dt = Open("data_table.jmp");
// Oneway - Matching
Oneway(
	Y( :miles ),
	X( :season ),
	X Axis proportional( 0 ),
	Matching Lines( 1 ),
	Matching Column( subject )
);
```

**Code Explanation**:

1. Open data table.
2. Perform Oneway analysis.
3. Set Y variable as miles.
4. Set X variable as season.
5. Disable X axis proportionality.
6. Enable matching lines.
7. Set matching column as subject.



### Example 10
> **Summary**: Performs a one-way analysis of variance (ANOVA) on the 'Count1' and 'Count2' variables, with 'Brand' as the categorical predictor, to identify significant differences between groups.

<!-- Keywords: #JMPScriptingLanguage, #One-WayANOVA, #CategoricalPredictor, #StatisticalAnalysis, #DataVisualization -->

**Code**:
```jsl
// Oneway
// Open data table
dt = Open("data_table.jmp");
// Oneway
Oneway(
	Y( :Count1, :Count2 ),
	X( :Brand ),
	Anova( 1 ),
	Student's t( 1 ),
	Hsu MCB( 1 )
);
```

**Code Explanation**:

1. Open table.
2. Perform Oneway analysis.
3. Set Y variables.
4. Set X variable.
5. Enable ANOVA.
6. Enable Student's t-test.
7. Enable Hsu MCB.



### Example 11
> **Summary**: Performs a one-way ANOVA analysis to identify significant predictors of oxygen consumption in the Fitness data table, utilizing the Oneway platform.

<!-- Keywords: #JMPScriptingLanguage, #One-WayANOVA, #DataAnalysis, #PredictiveModeling, #FitnessData -->

**Code**:
```jsl
// Oneway with Anova
// Open data table
dt = Open("data_table.jmp");
// Oneway with Anova
Oneway(
	Y( :Gain ),
	X( :Dose ),
	Anova( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Perform One-Way ANOVA.



### Example 12
> **Summary**: Performs an Oneway analysis with non-parametric tests (Wilcoxon, Median, and van der Waerden) to identify relationships between the 'Gain' response variable and the 'Dose' factor variable in a data table.

<!-- Keywords: #OnewayAnalysis, #NonParametricTests, #JSLScripting, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// Oneway with NP Tests
// Open data table
dt = Open("data_table.jmp");
// Oneway with NP Tests
Oneway(
	Y( :Gain ),
	X( :Dose ),
	Wilcoxon Test( 1 ),
	Median Test( 1 ),
	van der Waerden Test( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Perform Oneway analysis.
3. Set response variable.
4. Set factor variable.
5. Enable Wilcoxon Test.
6. Enable Median Test.
7. Enable van der Waerden Test.



### Example 13
> **Summary**: Performs an Oneway analysis on the 'Thermometers' data table to identify significant predictors of Fahrenheit temperature, utilizing ANOM, Mean Diamonds, and Comparison Circles for visualization.

<!-- Keywords: #JSLScripting, #OnewayAnalysis, #ThermometerData, #Visualization, #StatisticalModeling -->

**Code**:
```jsl
// Oneway - Thermometers
// Open data table
dt = Open("data_table.jmp");
// Oneway - Thermometers
Oneway(
	Y( :fahrenheit ),
	X( :thermometer ),
	Each Pair(
		1,
		Ordered Differences Report( 0 )
	),
	ANOM( 1 ),
	Mean Diamonds( 1 ),
	Comparison Circles( 1 ),
	SendToReport(
		Dispatch( {"Analysis of Means"},
			"ANOM Graph", FrameBox,
			{Marker Size( 4 )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Run Oneway analysis.
3. Set Y variable.
4. Set X variable.
5. Enable each pair comparison.
6. Disable ordered differences report.
7. Enable ANOM.
8. Enable mean diamonds.
9. Enable comparison circles.
10. Adjust ANOM graph marker size.



### Example 14
> **Summary**: Performs a one-way analysis of variance (Oneway) on the 'fahrenheit' response variable, with 'type of space' as the factor variable, to identify significant differences between groups.

<!-- Keywords: #JSL, #OneWayANOVA, #FactorVariable, #ResponseVariable, #BoxPlots -->

**Code**:
```jsl
// Oneway - Type of Space
// Open data table
dt = Open("data_table.jmp");
// Oneway - Type of Space
Oneway(
	Y( :fahrenheit ),
	X( :type of space ),
	Each Pair(
		1,
		LSD Threshold Matrix( 0 ),
		Ordered Differences Report( 0 )
	),
	ANOM( 1 ),
	Box Plots( 1 ),
	Comparison Circles( 1 )
);
```

**Code Explanation**:

1. Open table.
2. Run Oneway analysis.
3. Set response variable.
4. Set factor variable.
5. Enable pairwise comparisons.
6. Disable LSD threshold matrix.
7. Disable ordered differences report.
8. Enable ANOM chart.
9. Enable box plots.
10. Enable comparison circles.



### Example 15
> **Summary**: Performs a one-way analysis of variance (Oneway) on the 'fahrenheit' variable, with 'room/office' as the categorical predictor, and sends the report to a JMP document.

<!-- Keywords: #JMPScriptingLanguage, #One-WayANOVA, #CategoricalPredictor, #ReportGeneration, #DataVisualization -->

**Code**:
```jsl
// Oneway - Offices
// Open data table
dt = Open("data_table.jmp");
// Oneway - Offices
Oneway(
	Y( :fahrenheit ),
	X( :"room/office"n ),
	SendToReport(
		Dispatch( {}, "Oneway Plot",
			FrameBox,
			{
			Marker Selection Mode(
				"Selected Haloed"
			)}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create Oneway plot.
3. Set Y variable.
4. Set X variable.
5. Send report settings.
6. Configure marker selection mode.



### Example 16
> **Summary**: Performs a one-way ANOVA analysis on the 'Y' response variable, with 'Soil' as the factor variable and 'Block' as the blocking variable, displaying mean diamonds.

<!-- Keywords: #JMP, #ANOVA, #OneWayAnalysis, #DataVisualization, #StatisticalAnalysis -->

**Code**:
```jsl
// Oneway Anova
// Open data table
dt = Open("data_table.jmp");
// Oneway Anova
Oneway(
	Y( :Y ),
	X( :Soil ),
	Block( :Block ),
	Anova( 1 ),
	Mean Diamonds( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Perform Oneway Anova.
3. Specify response variable.
4. Specify factor variable.
5. Specify blocking variable.
6. Enable Anova table.
7. Display mean diamonds.



### Example 17
> **Summary**: Performs an Oneway analysis with ANOMV to identify significant differences in mean weight across different brands, providing a summary report and customizable graph settings.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #ANOMV, #BoxPlots, #MeanDiamonds -->

**Code**:
```jsl
// Oneway with ANOMV
// Open data table
dt = Open("data_table.jmp");
// Oneway with ANOMV
Oneway(
	Y( :Weight ),
	X( :Brand ),
	ANOM for Variances(
		1,
		Show Summary Report( 1 )
	),
	Box Plots( 0 ),
	Mean Diamonds( 0 ),
	SendToReport(
		Dispatch(
			{
			"Analysis of Means for Variances"
			}, "ANOMV Graph", FrameBox,
			{Marker Size( 4 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define variable `dt`.
3. Create Oneway analysis.
4. Set response variable `Weight`.
5. Set factor variable `Brand`.
6. Enable ANOM for Variances.
7. Show summary report.
8. Disable box plots.
9. Disable mean diamonds.
10. Adjust marker size in ANOMV graph.



### Example 18
> **Summary**: Performs an Oneway analysis on the 'Disso' variable with respect to the 'Screen Size' variable, displaying various plots and statistics.

<!-- Keywords: #OnewayAnalysis, #JMPScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #ScreenSize -->

**Code**:
```jsl
// Oneway
// Open data table
dt = Open("data_table.jmp");
// Oneway
Oneway(
	Y( :Disso ),
	X( :Screen Size ),
	All Pairs( 1 ),
	Quantiles( 1 ),
	Means( 0 ),
	Means( 0 ),
	Means and Std Dev( 1 ),
	Box Plots( 1 ),
	Mean Lines( 1 ),
	Mean CI Lines( 1 ),
	Mean Diamonds( 1 ),
	Mean Error Bars( 1 ),
	Std Dev Lines( 1 ),
	Comparison Circles( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create oneway analysis.
3. Set Y variable.
4. Set X variable.
5. Enable all pairs comparisons.
6. Enable quantiles display.
7. Disable means display.
8. Disable means display.
9. Enable means and std dev display.
10. Enable box plots.



### Example 19
> **Summary**: Performs a one-way analysis to identify significant factors affecting oxygen consumption in the Fitness data table, displaying means and comparing all pairs.

<!-- Keywords: #JMPScriptingLanguage, #One-WayAnalysis, #MeansComparison, #AllPairs, #DataTable -->

**Code**:
```jsl
// Oneway
// Open data table
dt = Open("data_table.jmp");
// Oneway
Oneway(
	Y( :speed ),
	X( :brand ),
	Means( 1 ),
	All Pairs( 1 )
);
```

**Code Explanation**:

1. Open table.
2. Perform one-way analysis.
3. Set response variable.
4. Set factor variable.
5. Display means.
6. Compare all pairs.



### Example 20
> **Summary**: Performs an Oneway analysis to identify the relationship between 'height (in.)' and 'sex', displaying means and mean diamonds.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #MeansandMeanDiamonds, #DataVisualization, #StatisticalAnalysis -->

**Code**:
```jsl
// Oneway
// Open data table
dt = Open("data_table.jmp");
// Oneway
Oneway(
	Y( :"height (in.)"n ),
	X( :sex ),
	Means( 1 ),
	Mean Diamonds( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Run Oneway analysis.
3. Set Y variable.
4. Set X variable.
5. Display means.
6. Show mean diamonds.



### Example 21
> **Summary**: Generates an Oneway plot to visualize the relationship between Life Expectancy at Birth and Development Level, with customized frame size, marker size, and label offsets.

<!-- Keywords: #JMPScriptingLanguage, #OnewayPlot, #DataVisualization, #Customization, #Scripting -->

**Code**:
```jsl
// Oneway: Life Expectancy by Development Level
// Open data table
dt = Open("data_table.jmp");
// Oneway: Life Expectancy by Development Level
Oneway(
	Y(
		:Overall Life Expectancy at Birth
	),
	X( :Development Level ),
	Box Plots( 0 ),
	Mean Diamonds( 0 ),
	SendToReport(
		Dispatch( {}, "Oneway Plot",
			FrameBox,
			{Frame Size( 387, 179 ),
			Marker Size( 2 ),
			DispatchSeg(
				Marker Seg( 1 ),
				label offset(
					{18, 15, 28},
					{88, 33, 11},
					{182, 51, 12},
					{212, 20, -11},
					{220, 13, -16}
				)
			)}
		),
		Dispatch( {}, "Development Level",
			TextEditBox,
			{
			Set Text(
				"Country Development Level"
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Oneway plot.
3. Set Y variable.
4. Set X variable.
5. Disable box plots.
6. Disable mean diamonds.
7. Adjust frame size.
8. Set marker size.
9. Adjust label offsets.
10. Rename X axis title.



### Example 22
> **Summary**: Performs a stepwise linear regression analysis on the Fitness data table to identify significant predictors of Oxygen consumption, using Oneway and Matching Column features.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #MatchingColumn, #StepwiseLinearRegression, #DataTable -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Oneway( Y( :LogHist0 ), X( :drug ) );
obj << Matching Column( :LogHist1 );
obj << Matching Lines( 1 );
```

**Code Explanation**:

1. Open data table.
2. Create Oneway plot.
3. Set Y variable to LogHist0.
4. Set X variable to drug.
5. Add Matching Column.
6. Set Matching Column to LogHist1.
7. Enable Matching Lines.



### Example 23
> **Summary**: Performs a one-way analysis of the 'height' variable by 'sex' in the data table, sending the report to a window with customized grid lines and labels.

<!-- Keywords: #JMPScriptingLanguage, #One-WayAnalysis, #CustomizedGridLines, #DataTable, #ReportGeneration -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Major Grid Lines Color, Minor Grid Lines color" )} ),
		Dispatch( {}, "1", ScaleBox,
			{Min( 49.90625 ), Max( 72.40625 ), Inc( 5 ), Minor Ticks( 1 ), Major Grid Line Color( 53 ), Minor Grid Line Color( 51 ),
			Show Major Grid( 1 ), Show Minor Grid( 1 ), Rotated Labels( "Horizontal" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create one-way analysis.
3. Set Y variable to height.
4. Set X variable to sex.
5. Send report to window.
6. Set title for outline box.
7. Dispatch to scale box.
8. Set minimum value.
9. Set maximum value.
10. Set increment value.
11. Enable minor ticks.
12. Set major grid line color.
13. Set minor grid line color.
14. Show major grid lines.
15. Show minor grid lines.
16. Set rotated labels.



### Example 24
> **Summary**: Performs a stepwise linear regression analysis on the Fitness data table to identify significant predictors of Oxygen consumption, using Oneway plots with Y variable set to Fahrenheit and X variable set to room/office.

<!-- Keywords: #JMPScriptingLanguage, #StepwiseLinearRegression, #OnewayPlot, #DataAnalysis, #PredictiveModeling -->

**Code**:
```jsl
Open("data_table.jmp");
Oneway( Y( :fahrenheit ), X( :Name( "room/office" ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create Oneway plot.
3. Set Y variable to fahrenheit.
4. Set X variable to room/office.



### Example 25
> **Summary**: Generates a one-way analysis to examine the relationship between height and sex, generating a report with a reference line at 60 units on the Y-axis.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #ReferenceLine, #DataVisualization, #JMP -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "60 mark red reference line with width 5 on Y axis" )} ),
		Dispatch( {}, "1", ScaleBox, {Add Ref Line( 60, Solid, "Red", "60 mark", 5 ), Rotated Labels( "Horizontal" )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis.
3. Set Y variable to height.
4. Set X variable to sex.
5. Send report to Oneway analysis.
6. Set title for outline box.
7. Add reference line at 60.
8. Set reference line color to red.
9. Set reference line label to "60 mark".
10. Set reference line width to 5.



### Example 26
> **Summary**: Creates an Oneway plot to visualize the relationship between Fahrenheit temperature and room/office space, with selected interior type data.

<!-- Keywords: #JSLScriptingLanguage, #OnewayPlot, #DataVisualization, #RegressionAnalysis, #JMP -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
dt under test << select where( :type of space == "interior" );
obj = Oneway(
	Y( :fahrenheit ),
	X( :Name( "room/office" ) ),
	SendToReport( Dispatch( {}, "Oneway Plot", FrameBox, {Marker Selection Mode( "Selected Haloed" )} ) )
);
```

**Code Explanation**:

1. Open table.
2. Select interior type.
3. Create Oneway plot.
4. Set Y variable.
5. Set X variable.
6. Configure marker selection.
7. Display report.



### Example 27
> **Summary**: Runs an Oneway analysis to compare the mean height of individuals based on their sex, displaying means and mean diamonds, with interactive column switchers for sex and height.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #ColumnSwitcher, #MeansandMeanDiamonds, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ow = dt << Oneway(
	Y( :height ),
	X( :sex ),
	Means( 1 ),
	Mean Diamonds( 1 ),
	Column Switcher( :sex, {:name, :age, :sex} ),
	Column Switcher( :height, {:height, :weight} ),
	SendToReport( Dispatch( {}, "Oneway Anova", OutlineBox, {Close( 1 )} ) )
);
ow << Redo Analysis;
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis.
3. Set Y variable to height.
4. Set X variable to sex.
5. Display means.
6. Show mean diamonds.
7. Add sex column switcher.
8. Add height column switcher.
9. Close Oneway Anova outline.
10. Redo the analysis.



### Example 28
> **Summary**: Generates a one-way analysis to identify relationships between Overall Life Expectancy at Birth and Development Level, with interactive filtering by GDP per Capita.

<!-- Keywords: #JMPScriptingLanguage, #One-WayAnalysis, #LocalDataFilter, #Quantiles, #BoxPlots -->

**Code**:
```jsl
Open("data_table.jmp");
Oneway(
	Y( :Overall Life Expectancy at Birth ),
	X( :Development Level ),
	Automatic Recalc( 1 ),
	Quantiles( 1 ),
	Box Plots( 1 ),
	Histograms( 1 ),
	Local Data Filter(
		Mode( Include( 0 ) ),
		Add Filter( columns( :GDP per Capita ), Where( :GDP per Capita >= 26.5112193563842 & :GDP per Capita <= 116236.832546313 ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform one-way analysis.
3. Set response variable.
4. Set factor variable.
5. Enable automatic recalculation.
6. Display quantiles.
7. Show box plots.
8. Display histograms.
9. Add local data filter.
10. Set filter criteria.



### Example 29
> **Summary**: Generates a one-way analysis to identify significant predictors of oxygen consumption in the Fitness data table, grouping results by sex and analyzing height vs age.

<!-- Keywords: #JSLScriptingLanguage, #One-WayAnalysis, #GroupedData, #RegressionAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
grp = dt << Oneway( SendToByGroup( Bygroup Default ), Y( :height ), X( :age ), By( :sex ), Group Options( Return Group( 1 ) ) );
Report( grp )[Outline Box( 2 )] << Close( 1 );
```

**Code Explanation**:

1. Open data table;
2. Perform Oneway analysis.
3. Group by sex.
4. Analyze height vs age.
5. Send results to group.
6. Retrieve first group.
7. Access report object.
8. Locate second outline box.
9. Close the outline box.



### Example 30
> **Summary**: Generates a one-way analysis to identify significant predictors of oxygen consumption in the Fitness data table, grouping by sex and analyzing height vs. age.

<!-- Keywords: #JSLScriptingLanguage, #One-WayAnalysis, #Grouping, #RegressionAnalysis, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
grp = dt << Oneway( SendToByGroup( Bygroup Default ), Y( :height ), X( :age ), By( :sex ), Group Options( Return Group( 1 ) ) );
Report( grp )[Outline Box( 2 )] << Close( 1 );
grp << Layout( "Horizontal List" );
```

**Code Explanation**:

1. Open data table.
2. Perform one-way analysis.
3. Group by sex.
4. Analyze height vs. age.
5. Retrieve group report.
6. Close second outline box.
7. Change layout to horizontal list.



### Example 31
> **Summary**: Generates a one-way analysis to identify significant predictors of oxygen consumption in the Fitness data table, grouping by sex and analyzing height by age.

<!-- Keywords: #JSLScriptingLanguage, #One-WayAnalysis, #ByGroup, #StepwiseLinearRegression, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
grp = dt << Oneway( SendToByGroup( Bygroup Default ), Y( :height ), X( :age ), By( :sex ), Group Options( Return Group( 1 ) ) );
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis.
3. Group by sex.
4. Analyze height by age.
5. Set bygroup default.
6. Return group option.



### Example 32
> **Summary**: Generates a one-way analysis to identify significant predictors of oxygen consumption in the Fitness data table, using sex as the predictor variable.

<!-- Keywords: #JSLScriptingLanguage, #One-WayAnalysis, #PredictorVariables, #OxygenConsumption, #FitnessData -->

**Code**:
```jsl
Open("data_table.jmp");
ow = Oneway( Y( :height ), X( :sex ) );
```

**Code Explanation**:

1. Open data table;
2. Create Oneway plot.
3. Set Y variable to height.
4. Set X variable to sex.



### Example 33
> **Summary**: Generates a one-way analysis to compare height based on sex, with a text annotation added to the first frame box.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #TextAnnotation, #FrameBox, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ow = Oneway( Y( :height ), X( :sex ) );
Report( ow )[FrameBox( 1 )] << Add Text Annotation(
	Text( "Cholestasis" ),
	Fixed Size( 0 ),
	Text Box( {15, 15, 90, 39} ),
	Editable( 0 ),
	Text Color( "Medium Dark Gray" ),
	Font( "Arial", 10, "Plain" )
);
```

**Code Explanation**:

1. Open data table;
2. Create Oneway plot.
3. Access first frame box.
4. Add text annotation.
5. Set text to "Cholestasis".
6. Enable fixed size.
7. Define text box position.
8. Make text non-editable.
9. Set text color.
10. Specify font style.



### Example 34
> **Summary**: Generates a one-way analysis to identify significant predictors of oxygen consumption in the Fitness data table, utilizing various statistical tests and visualizations.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #StatisticalTests, #DataVisualization, #StepwiseRegression -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Oneway(
	Y( :height ),
	X( :sex ),
	All Pairs( 1 ),
	Means( 1 ),
	t Test( 1 ),
	Kolmogorov Smirnov Test( 1 ),
	Cauchy Fit( 1 ),
	Mean Diamonds( 1 ),
	Comparison Circles( 1 ),
	Robust Means Lines( 1 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Format( "Custom", Formula( Match( value, 70, "seventy", 65, "sixty five", 60, "sixty", 55, "fifty five", 50, "fifty" ) ), 12 )
			}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Oneway plot.
3. Set Y variable: height.
4. Set X variable: sex.
5. Enable all pairwise comparisons.
6. Display means.
7. Perform t-test.
8. Conduct Kolmogorov-Smirnov test.
9. Fit Cauchy distribution.
10. Show mean diamonds.
11. Display comparison circles.
12. Add robust means lines.
13. Customize Y-axis labels.



### Example 35
> **Summary**: Creates an Oneway chart to visualize the relationship between Comb MPG and Mfr Name, with a local data filter applied to display only the top 10 Mfr Names.

<!-- Keywords: #OnewayChart, #LocalDataFilter, #JMPScriptingLanguage, #Visualization, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << run script( "oneway chart" );
Oneway(
	Y( :Comb MPG ),
	X( :Mfr Name ),
	Local Data Filter( Add Filter( columns( :Mfr Name ), Display( :Mfr Name, N Items( 10 ) ) ) ),
	SendToReport(
		Dispatch( {}, "2", ScaleBox, {Label Row( Label Orientation( "Perpendicular" ) )} ),
		Dispatch( {}, "Oneway Plot", FrameBox, {Frame Size( 412, 244 )} ),
		Dispatch( {}, "Oneway Plot", FrameBox,
			{Frame Size( 412, 244 ), {Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 3 ),
				Index Row( 3 ),
				UniqueID( 3 ),
				FoundPt( {287, 221} ),
				Origin( {3.05825242718447, 20.0550819672131} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			), Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 47 ),
				Index Row( 47 ),
				UniqueID( 47 ),
				FoundPt( {546, 58} ),
				Origin( {47.0631067961165, 40.977868852459} ),
				Offset( {-193, 39} ),
				RightOfCenter( 1 ),
				Tag Line( 1 )
			)}}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Run script "oneway chart".
3. Create Oneway plot.
4. Set Y variable.
5. Set X variable.
6. Add local data filter.
7. Configure label orientation.
8. Set frame size.
9. Add pin annotation.
10. Add another pin annotation.



### Example 36
> **Summary**: Creates an oneway chart with a local data filter to analyze Comb MPG by Mfr Name, filtering for Gas and Hybrid engines, and adding pin annotations at specific indices.

<!-- Keywords: #JSLScriptingLanguage, #OnewayChart, #LocalDataFilter, #PinAnnotation, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << run script( "oneway chart" );
Oneway(
	Y( :Comb MPG ),
	X( :Mfr Name ),
	Local Data Filter(
		Add Filter( columns( :Mfr Name, :Engine ), Where( :Engine == {"Gas", "Hybrid"} ), Display( :Mfr Name, N Items( 10 ) ) )
	),
	SendToReport(
		Dispatch( {}, "2", ScaleBox, {Label Row( Label Orientation( "Perpendicular" ) )} ),
		Dispatch( {}, "Oneway Plot", FrameBox, {Frame Size( 412, 244 )} ),
		Dispatch( {}, "Oneway Plot", FrameBox,
			{Frame Size( 412, 244 ), {Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 3 ),
				Index Row( 3 ),
				UniqueID( 3 ),
				FoundPt( {287, 221} ),
				Origin( {3.05825242718447, 20.0550819672131} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			), Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 47 ),
				Index Row( 47 ),
				UniqueID( 47 ),
				FoundPt( {546, 58} ),
				Origin( {47.0631067961165, 40.977868852459} ),
				Offset( {-193, 39} ),
				RightOfCenter( 1 ),
				Tag Line( 1 )
			)}}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Run "oneway chart" script.
3. Create Oneway plot.
4. Set Y to Comb MPG.
5. Set X to Mfr Name.
6. Add Local Data Filter.
7. Filter Engine for Gas and Hybrid.
8. Display Mfr Name, limit 10 items.
9. Adjust label orientation to Perpendicular.
10. Set frame size to 412x244.
11. Add pin annotation at index 3.
12. Add pin annotation at index 47.



### Example 37
> **Summary**: Creates an Oneway plot to analyze the relationship between Comb MPG and Mfr Name, filtered by Engine type, and configures report output with custom label orientation and frame size.

<!-- Keywords: #JSL, #OnewayPlot, #DataFiltering, #ReportConfiguration, #JMPScripting -->

**Code**:
```jsl
Open("data_table.jmp");
Oneway(
	Y( :Comb MPG ),
	X( :Mfr Name ),
	Where( :Engine == "Gas" ),
	SendToReport(
		Dispatch( {}, "2", ScaleBox, {Label Row( Label Orientation( "Perpendicular" ) )} ),
		Dispatch( {}, "Oneway Plot", FrameBox,
			{Frame Size( 412, 244 ), {Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 11 ),
				Index Row( 11 ),
				UniqueID( 897917771 ),
				FoundPt( {147, 155} ),
				Origin( {7.30582524271845, 22.827868852459} ),
				Offset( {-76, -51} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			), Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 1 ),
				Index Row( 1 ),
				UniqueID( 897917761 ),
				FoundPt( {82, 236} ),
				Origin( {1.78398058252427, 17.0184426229508} ),
				Offset( {-11, 11} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			)}}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Oneway plot.
3. Set Y variable.
4. Set X variable.
5. Filter data where Engine is Gas.
6. Send report to window.
7. Adjust label orientation.
8. Set frame size.
9. Add first pin annotation.
10. Add second pin annotation.



### Example 38
> **Summary**: Creates an Oneway plot to analyze the relationship between height and sex, with quantiles and box plots displayed.

<!-- Keywords: #JMPScriptingLanguage, #OnewayPlot, #Quantiles, #BoxPlots, #SendToReport -->

**Code**:
```jsl
Open("data_table.jmp");
Oneway(
	Y( :height ),
	X( :sex ),
	Quantiles( 1 ),
	Box Plots( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Plot", FrameBox,
			Add Pin Annotation(
				Seg( Box Plot Seg( 1 ) ),
				Index( {1, 1} ),
				Index Row( {1, 1} ),
				UniqueID( 918435537 ),
				FoundPt( {138, 119} ),
				Origin( {8.65168539325843, 65} ),
				Tag Line( 1 )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Oneway plot.
3. Set Y variable to height.
4. Set X variable to sex.
5. Display quantiles.
6. Show box plots.
7. Send report to window.
8. Dispatch to Oneway Plot.
9. Add frame box annotation.
10. Configure pin annotation settings.



### Example 39
> **Summary**: Creates an oneway plot to visualize the relationship between height and sex, displaying means and mean diamonds.

<!-- Keywords: #JSLScriptingLanguage, #OnewayPlot, #MeansAndDiamonds, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ow = dt << Oneway(
	Y( :height ),
	X( :sex ),
	Means( 1 ),
	Mean Diamonds( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Plot", FrameBox, {DispatchSeg( Marker Seg( 1 ), Set Jitter( "Random Uniform", "X", 10, 0, 355 ) )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create oneway plot.
3. Set Y variable to height.
4. Set X variable to sex.
5. Display means.
6. Add mean diamonds.
7. Send report to window.
8. Dispatch to oneway plot.
9. Set frame box properties.
10. Apply jitter to marker segments.



### Example 40
> **Summary**: Generates a one-way analysis to visualize the relationship between height and sex, displaying means, mean diamonds, and histograms.

<!-- Keywords: #JSLScripting, #OneWayAnalysis, #MeansAndDiamonds, #Histograms, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp") << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ), Histograms( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis.
3. Set Y variable to height.
4. Set X variable to sex.
5. Display means.
6. Show mean diamonds.
7. Include histograms.



### Example 41
> **Summary**: Creates an Oneway analysis to visualize the relationship between height and sex, displaying means and mean diamonds, with a custom line annotation added to the report.

<!-- Keywords: #OnewayAnalysis, #CustomAnnotation, #MeansAndDiamonds, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Means( 1 ),
	Mean Diamonds( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Plot", FrameBox,
			Add Line Annotation( Line( {5, 198}, {354, 195} ), Color( "Orange" ), Thick( 1 ), Point to( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis.
3. Set Y variable as height.
4. Set X variable as sex.
5. Display means.
6. Show mean diamonds.
7. Send report to display.
8. Add line annotation.
9. Set line coordinates.
10. Color line orange.



### Example 42
> **Summary**: Creates an Oneway plot to visualize the relationship between Household Income and Region in a data table, with customized box plots and outlier appearance.

<!-- Keywords: #JSLScriptingLanguage, #OnewayPlot, #BoxPlots, #Customization, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:State << set labelled;
dt << select where( :State == "North Carolina" );
dt << label( 1 );
dt << Oneway(
	Y( :Household Income ),
	X( :Region ),
	Box Plots( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Plot", FrameBox,
			{DispatchSeg( Marker Seg( 1 ), label offset( {32, 49, 49} ) ), DispatchSeg(
				Box Plot Seg( 1 ),
				{Box Type( "Outlier" ), Line Color( "Red" )}
			), DispatchSeg( Box Plot Seg( 2 ), {Box Type( "Outlier" ), Line Color( "Red" )} ), DispatchSeg(
				Box Plot Seg( 3 ),
				{Box Type( "Outlier" ), Line Color( "Red" )}
			), DispatchSeg( Box Plot Seg( 4 ), {Box Type( "Outlier" ), Line Color( "Red" )} )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Label State column.
3. Select North Carolina rows.
4. Label selected rows.
5. Create Oneway plot.
6. Set Y variable: Household Income.
7. Set X variable: Region.
8. Add box plots.
9. Adjust marker label offsets.
10. Customize outlier box plot appearance.



### Example 43
> **Summary**: Generates a one-way analysis to identify significant predictors of oxygen consumption in the Fitness data table, grouping by region and ordering groups by city.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #StepwiseLinearRegression, #DataTableOperations, #GroupingandOrdering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Oneway( Y( :POP ), X( :State ), By( :Region ), Group Options( Order By( :City, Descending( 1 ) ) ) );
```

**Code Explanation**:

1. Open data table.
2. Perform Oneway analysis.
3. Set response variable.
4. Set factor variable.
5. Group by region.
6. Order groups by city.
7. Sort in descending order.



### Example 44
> **Summary**: Runs a stepwise linear regression analysis to identify significant predictors of oxygen consumption in the Fitness data table, utilizing Oneway analysis with multiple grouping options and ordering criteria.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #StepwiseRegression, #DataTableManipulation, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
grp = dt << Oneway(
	Y( :weight ),
	X( :sex ),
	Fit Line( {Report( 1 )} ),
	By( :age ),
	Group Options( Layout( "Arrange in Rows" ), N Across( 3 ), Return Group( 1 ) )
);
grp << Order By( :sex, Descending( 1 ), Order Statistic( "Count" ) );
grp << Order By( :weight, Descending( 1 ), Order Statistic( "Max" ) );
grp << Order By( :sex, Descending( 0 ) );
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis.
3. Set weight as response variable.
4. Set sex as factor variable.
5. Fit linear regression line.
6. Group by age.
7. Arrange groups in rows.
8. Set 3 columns per row.
9. Order by sex descending count.
10. Order by weight descending max.



### Example 45
> **Summary**: Generates a one-way analysis to identify significant predictors of oxygen consumption in the Fitness data table, utilizing default names and an open data table.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #StepwiseLinearRegression, #DataTableOperations, #DefaultNames -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Oneway( Y( :Height ), X( :Age ) );
```

**Code Explanation**:

1. Set default names scope.
2. Open data table.
3. Create Oneway analysis object.



### Example 46
> **Summary**: Generates a one-way analysis to identify the relationship between Height and Age in the data table, with All Pairs comparison enabled.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #AllPairsComparison, #DataTableAnalysis, #StatisticalModeling -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Oneway( Y( :Height ), X( :Age ) );
obj << All Pairs( 1 );
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis.
3. Set Height as Y variable.
4. Set Age as X variable.
5. Enable All Pairs comparison.



### Example 47
> **Summary**: Generates a one-way analysis to identify the relationship between Height and Age in the data table, with interactive visualizations for All Pairs comparisons and Comparison Circles.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #DataVisualization, #InteractiveAnalytics, #JMPScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Oneway( Y( :Height ), X( :Age ) );
obj << All Pairs( 1 );
obj << Comparison Circles( 1 );
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis.
3. Set Y variable to Height.
4. Set X variable to Age.
5. Enable All Pairs comparisons.
6. Enable Comparison Circles.



### Example 48
> **Summary**: Generates a one-way analysis to identify significant predictors of Oxygen consumption in the Fitness data table, utilizing the Oneway platform.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #StepwiseRegression, #PredictorIdentification, #FitnessData -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Oneway( Y( :Height ), X( :Age ) );
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis object.



### Example 49
> **Summary**: Analyze the relationship between Age and Height by creating an Oneway object with a histogram.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #Histograms, #DataVisualization, #StatisticalModeling -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Histograms( 1 );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create Oneway object.
4. Add histograms to Oneway.



### Example 50
> **Summary**: Generates a one-way analysis to identify the relationship between Height and Age in the Fitness data table, with a quantile plot for visualization.

<!-- Keywords: #JSLScriptingLanguage, #One-WayAnalysis, #QuantilePlot, #DataVisualization, #FitnessData -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Oneway( Y( :Height ), X( :Age ), Plot Quantile by Actual( 1 ), Legend( 0 ) );
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis object.
3. Set response variable to Height.
4. Set factor variable to Age.
5. Enable quantile plot.
6. Disable legend display.



### Example 51
> **Summary**: Generates a one-way analysis to identify significant predictors of Weight, using Age and sex as factor variables, with Matching Column applied for sex.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #MatchingColumn, #FactorVariables, #PredictorIdentification -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Oneway( Y( :Weight ), X( :Age, :sex ) );
obj[1] << Matching Column( :sex );
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis object.
3. Set response variable to Weight.
4. Set factor variables to Age and sex.
5. Access first analysis object.
6. Add Matching Column for sex.



### Example 52
> **Summary**: Runs a stepwise linear regression analysis to identify significant predictors of Oxygen consumption in the Fitness data table, utilizing Oneway analysis with Matching Columns for Age and sex.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #MatchingColumns, #StepwiseLinearRegression, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Oneway( Y( :Weight ), X( :Age, :sex ) );
obj[1] << Matching Column( :sex );
obj[2] << Matching Column( :Age );
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis object.
3. Set Y variable to Weight.
4. Set X variables to Age and sex.
5. Apply Matching Column for sex.
6. Apply Matching Column for Age.



### Example 53
> **Summary**: Generates a one-way analysis to identify the relationship between LogHist0 and drug, with matching column LogHist1.

<!-- Keywords: #JSLScripting, #OnewayAnalysis, #MatchingColumn, #LogisticRegression, #DataScience -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Oneway( Y( :LogHist0 ), X( :drug ) );
obj << Matching Column( :LogHist1 );
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis.
3. Set response variable "LogHist0".
4. Set factor variable "drug".
5. Add matching column "LogHist1".



### Example 54
> **Summary**: Runs a stepwise linear regression analysis on the Fitness data table to identify significant predictors of Oxygen consumption, utilizing an Oneway analysis with matching columns and lines.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #MatchingColumns, #StepwiseRegression, #LinearRegression -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Oneway( Y( :LogHist0 ), X( :drug ) );
obj << Matching Column( :LogHist1 );
obj << Matching Lines( 1 );
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis.
3. Set response variable to "LogHist0".
4. Set factor variable to "drug".
5. Add matching column "LogHist1".
6. Enable matching lines.



### Example 55
> **Summary**: Generates a one-way analysis to identify significant predictors of oxygen consumption in the Fitness data table, using age as a factor variable.

<!-- Keywords: #JSLScriptingLanguage, #One-WayAnalysis, #StepwiseRegression, #PredictiveModeling, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Oneway( Y( :Weight ), X( :Age ), Each Pair );
```

**Code Explanation**:

1. Open data table;
2. Create oneway analysis object.
3. Set weight as response variable.
4. Set age as factor variable.
5. Perform pairwise comparisons.



### Example 56
> **Summary**: Runs a one-way ANOVA analysis to identify significant predictors of Oxygen consumption in the Fitness data table, selecting group 14 for further examination.

<!-- Keywords: #JSLScriptingLanguage, #OneWayANOVA, #DataAnalysis, #PredictiveModeling, #FitnessData -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Oneway( Y( :Weight ), X( :Age ), Each Pair );
obj << Select Group( 14 );
```

**Code Explanation**:

1. Open data table;
2. Perform one-way ANOVA.
3. Compare each pair of groups.
4. Select group 14.



### Example 57
> **Summary**: Runs a one-way ANOVA analysis to identify significant predictors of oxygen consumption in the Fitness data table, utilizing the Oneway platform.

<!-- Keywords: #JSLScriptingLanguage, #OneWayANOVA, #PredictorAnalysis, #FitnessData, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Oneway( Y( :y ), X( :Drug ) );
```

**Code Explanation**:

1. Open data table;
2. Perform Oneway ANOM analysis.
3. Set response variable as "y".
4. Set factor variable as "Drug".



### Example 58
> **Summary**: Analyze oxygen consumption data to identify significant predictors of toxicity, utilizing a one-way ANOVA with an anomalous plot.

<!-- Keywords: #JSLScriptingLanguage, #One-WayANOVA, #AnomalousPlot, #DataAnalysis, #PredictiveModeling -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Set Alpha Level( 0.1 ) );
```

**Code Explanation**:

1. Set default names to current.
2. Open data table;
3. Create Oneway analysis object.
4. Set response variable to "y".
5. Set factor variable to "Drug".
6. Enable ANOM plot.
7. Set ANOM significance level to 0.1.



### Example 59
> **Summary**: Generates a one-way analysis of variance (ANOVA) to identify significant differences in elapsed time across airlines, with interactive needles and customized report formatting.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #ANOMforVariances, #ReportCustomization, #InteractiveVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :Elapsed Time ),
	X( :Airline ),
	ANOM for Variances( 1, Point Options( "Show Needles" ) ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of Elapsed Time By Airline", OutlineBox, {Set Title( "ANOM for Variances" )} ),
		Dispatch( {"Analysis of Means for Variances"}, "ANOMV Graph", FrameBox, {Marker Size( 4 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Oneway object.
3. Set Y variable to Elapsed Time.
4. Set X variable to Airline.
5. Enable ANOM for Variances.
6. Show needles on plot.
7. Set report title.
8. Adjust marker size.
9. Display analysis results.
10. Finalize report formatting.



### Example 60
> **Summary**: Analyze variance for height by sex using ANOM with Levene's test, generating a summary report and graph.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #ANOMTest, #LevenesTest, #SummaryReport -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Name( "ANOM for Variances with Levene(ADM)" )(1, Show Summary Report( 1 ), Point Options( "Show Only Points" )),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title(
				"ANOM_for_Variances_with_Levene, Alpha_0.05, Show Summary Report, Show Decision Limits Limit Shading and Center Line, Show Only Points"
			)}
		),
		Dispatch( {"Analysis of Means for Variances-Levene(ADM)"}, "ANOMV with Levene(ADM) Graph", FrameBox, {Marker Size( 4 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis object.
3. Set Y variable to height.
4. Set X variable to sex.
5. Configure ANOM for Variances with Levene.
6. Enable summary report.
7. Show only points.
8. Set report title.
9. Adjust marker size in graph.
10. Display analysis results.



### Example 61
> **Summary**: Generates a one-way analysis of variance (ANOVA) for variances with Levene's test to identify significant differences in height based on sex, and generates a report with decision limits and connected points.

<!-- Keywords: #JMPScriptingLanguage, #OnewayANOVA, #LevenesTest, #DecisionLimits, #ConnectedPoints -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Name( "ANOM for Variances with Levene(ADM)" )(1, Set Alpha Level( 0.1 ), Show Decision Limits( 0 ), Show Center Line( 0 ),
	Show Decision Limit Shading( 0 ), Point Options( "Show Connected Points" )),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title( "ANOM_for_Variances_with_Levene, Alpha_0.10, No Show Decisions, Show Connected Points" )}
		),
		Dispatch( {"Analysis of Means for Variances-Levene(ADM)"}, "ANOMV with Levene(ADM) Graph", FrameBox,
			{Marker Size( 4 ), Grid Line Order( 2 ), Reference Line Order( 3 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis.
3. Set response variable to "height".
4. Set factor variable to "sex".
5. Enable ANOM for Variances with Levene.
6. Set alpha level to 0.1.
7. Hide decision limits.
8. Hide center line.
9. Hide decision limit shading.
10. Show connected points.



### Example 62
> **Summary**: Generates a one-way analysis of variance (ANOVA) to identify significant predictors of oxygen consumption in the Fitness data table, utilizing ANOM for Variances with an alpha level of 0.15 and customizing report title and marker size.

<!-- Keywords: #JSL, #OnewayAnalysis, #ANOVA, #DataVisualization, #StatisticalModeling -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :Elapsed Time ),
	X( :Airline ),
	ANOM for Variances(
		1,
		Set Alpha Level( 0.15 ),
		Show Summary Report( 1 ),
		Show Decision Limit Shading( 0 ),
		Point Options( "Show Only Points" )
	),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of Elapsed Time By Airline", OutlineBox,
			{Set Title( "ANOM_for_Variances, Alpha_0.15, Show Summary Report, Show Decision Limits and Center Line, Show Only Points" )}
		),
		Dispatch( {"Analysis of Means for Variances"}, "ANOMV Graph", FrameBox, {Marker Size( 4 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis object.
3. Set Y variable to Elapsed Time.
4. Set X variable to Airline.
5. Enable ANOM for Variances.
6. Set alpha level to 0.15.
7. Show summary report.
8. Hide decision limit shading.
9. Show only points on graph.
10. Customize report title and marker size.



### Example 63
> **Summary**: Generates a one-way analysis of variance (ANOVA) to identify significant predictors of Elapsed Time by Airline, with decision limits and connected points displayed in the graph.

<!-- Keywords: #JMPScriptingLanguage, #One-WayANOVA, #DecisionLimits, #ConnectedPoints, #VarianceScale -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Oneway(
	Y( :Elapsed Time ),
	X( :Airline ),
	ANOM for Variances( 1, Show Decision Limits( 0 ), Graph in Variance Scale( 1 ), Point Options( "Show Connected Points" ) ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of Elapsed Time By Airline", OutlineBox,
			{Set Title(
				"ANOM_for_Variances, Alpha_0.05, Graph in Variance Scale, Show Decision Limit Shading and Center Line, Show Connected Points"
			)}
		),
		Dispatch( {"Analysis of Means for Variances"}, "50999", ScaleBox,
			{Min( 3000 ), Max( 7500 ), Inc( 500 ), Minor Ticks( 0 ), Rotated Labels( "Horizontal" )}
		),
		Dispatch( {"Analysis of Means for Variances"}, "ANOMV Graph", FrameBox, {Marker Size( 4 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Oneway object.
3. Set Y variable.
4. Set X variable.
5. Enable ANOM for Variances.
6. Hide decision limits.
7. Use variance scale graph.
8. Show connected points.
9. Set report title.
10. Adjust scale properties.
11. Adjust marker size.



### Example 64
> **Summary**: Runs an Oneway analysis to identify significant predictors of height by sex, with ANOM with Transformed Ranks and ANOM for Variances with Levene(ADM) enabled.

<!-- Keywords: #OnewayAnalysis, #ANOM, #TransformedRanks, #LeveneTest, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	ANOM with Transformed Ranks( 1, Point Options( "Show Needles" ) ),
	Name( "ANOM for Variances with Levene(ADM)" )(1, Point Options( "Show Needles" )),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title( "ANOM with Transformed Ranks, ANOM for Variances with Levene(ADM)" )}
		),
		Dispatch( {"Analysis of Means-Transformed Ranks"}, "ANOM Transformed Ranks Graph", FrameBox, {Marker Size( 4 )} ),
		Dispatch( {"Analysis of Means for Variances-Levene(ADM)"}, "ANOMV with Levene(ADM) Graph", FrameBox, {Marker Size( 4 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis.
3. Set response variable to height.
4. Set factor variable to sex.
5. Enable ANOM with Transformed Ranks.
6. Enable ANOM for Variances with Levene(ADM).
7. Show needles on graphs.
8. Set report title.
9. Adjust marker size for Transformed Ranks graph.
10. Adjust marker size for Variances graph.



### Example 65
> **Summary**: Runs an ANOM with Transformed Ranks analysis to identify significant predictors of height based on sex, generating a report with summary statistics and decision limits.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #TransformedRanks, #ANOM, #DecisionLimits -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	ANOM with Transformed Ranks( 1, Show Summary Report( 1 ), Show Decision Limits( 0 ), Point Options( "Show Connected Points" ) ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title(
				"ANOM with Transformed Ranks, Alpha_0.05, Show Summary Report, Show Decision Limits Shading and Center Line, Show Connected Points"
			)}
		),
		Dispatch( {"Analysis of Means-Transformed Ranks"}, "ANOM Transformed Ranks Graph", FrameBox, {Marker Size( 4 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Perform Oneway analysis.
3. Set Y variable to height.
4. Set X variable to sex.
5. Enable ANOM with Transformed Ranks.
6. Show summary report.
7. Hide decision limits.
8. Show connected points.
9. Set report title.
10. Adjust marker size in graph.



### Example 66
> **Summary**: Runs a one-way ANOM analysis to identify significant predictors of oxygen consumption in the Fitness data table, utilizing transformed ranks and setting alpha level to 0.001.

<!-- Keywords: #JSLScriptingLanguage, #OneWayANOM, #TransformedRanks, #AlphaLevel, #DataAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	ANOM with Transformed Ranks( 1, Set Alpha Level( 0.001 ), Show Decision Limit Shading( 0 ), Point Options( "Show Only Points" ) ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title( "ANOM with Transformed Ranks, Alpha_0.001, Show Decision Limits and Center Line, Show Only Points" )}
		),
		Dispatch( {}, "1", ScaleBox, {Max( 71 ), Rotated Labels( "Horizontal" )} ),
		Dispatch( {"Analysis of Means-Transformed Ranks"}, "50999", ScaleBox,
			{Min( 0.4 ), Max( 1.2 ), Inc( 0.1 ), Minor Ticks( 0 ), Rotated Labels( "Horizontal" )}
		),
		Dispatch( {"Analysis of Means-Transformed Ranks"}, "ANOM Transformed Ranks Graph", FrameBox, {Marker Size( 4 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform one-way ANOM analysis.
3. Use transformed ranks method.
4. Set alpha level to 0.001.
5. Hide decision limit shading.
6. Display only points.
7. Rename report title.
8. Set Y-axis max to 71.
9. Rotate Y-axis labels horizontally.
10. Adjust transformed ranks scale.



### Example 67
> **Summary**: Generates a one-way analysis of variance (ANOVA) to identify significant predictors of height based on sex, with ANOM enabled and summary report included.

<!-- Keywords: #JMPScriptingLanguage, #One-WayAnalysis, #ANOVA, #ANOM, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	ANOM( 1, Set Alpha Level( 0.1 ), Show Summary Report( 1 ), Point Options( "Show Connected Points" ) ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title(
				"ANOM, Alpha_0.10, Show Summary Report, Show Decision Limits Limit Shading and Center Line, Show Connected Points"
			)}
		),
		Dispatch( {"Analysis of Means"}, "ANOM Graph", FrameBox, {Marker Size( 4 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create oneway analysis object.
3. Set Y variable as height.
4. Set X variable as sex.
5. Enable ANOM with alpha level 0.1.
6. Show summary report.
7. Show connected points.
8. Set title for report.
9. Adjust marker size in ANOM graph.
10. Save analysis object.



### Example 68
> **Summary**: Runs a one-way ANOM analysis to identify significant predictors of oxygen consumption in the Fitness data table, with customizable report title and graph settings.

<!-- Keywords: #JSLScriptingLanguage, #OneWayANOM, #StepwiseRegression, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	ANOM( 1, Set Alpha Level( 0.01 ), Show Decision Limits( 0 ), Show Decision Limit Shading( 0 ), Point Options( "Show Only Points" ) ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title( "ANOM, Alpha_0.01, Show Summary Report, Show Center Line, Show Only Points" )}
		),
		Dispatch( {"Analysis of Means"}, "ANOM Graph", FrameBox, {Marker Size( 4 )} )
	)
);
```

**Code Explanation**:

1. Open table.
2. Perform one-way ANOM.
3. Set alpha level.
4. Hide decision limits.
5. Hide shading.
6. Show only points.
7. Set report title.
8. Adjust graph title.
9. Increase marker size.
10. Display results.



### Example 69
> **Summary**: Generates a one-way analysis to identify significant predictors of oxygen consumption in the Fitness data table, utilizing Oneway() function.

<!-- Keywords: #JSLScriptingLanguage, #OneWayAnalysis, #PredictorVariables, #DataAnalysis, #FitnessData -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Oneway( Y( :y ), X( :Drug ) );
```

**Code Explanation**:

1. Open data table;
2. Create oneway analysis object.



### Example 70
> **Summary**: Creates an ANOM for Ranges analysis object in JMP, specifying 'y' as the response variable and 'Drug' as the predictor variable.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #ANOMforRanges, #DataTableOperations, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Oneway( Y( :y ), X( :Drug ) );
obj << Name( "ANOM for Ranges" )(1);
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis object.
3. Set Y variable to y.
4. Set X variable to Drug.
5. Enable ANOM for Ranges option.
6. Set ANOM for Ranges parameter to 1.



### Example 71
> **Summary**: Creates an Oneway analysis to visualize the relationship between height and sex, with customized axis specifications.

<!-- Keywords: #JSLScripting, #OnewayAnalysis, #AxisCustomization, #DataVisualization, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title( "Axis Specification Window, Major Grid Lines Color, Minor Grid Lines color" )}
		),
		Dispatch( {}, "1", ScaleBox,
			{Min( 49.90625 ), Max( 72.40625 ), Inc( 5 ), Minor Ticks( 1 ), Major Grid Line Color( 53 ), Minor Grid Line Color( 51 ),
			Show Major Grid( 1 ), Show Minor Grid( 1 ), Rotated Labels( "Horizontal" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis.
3. Set report title.
4. Configure Y-axis scale.
5. Set minimum value.
6. Set maximum value.
7. Set increment value.
8. Enable minor ticks.
9. Set major grid color.
10. Set minor grid color.



### Example 72
> **Summary**: Generates a one-way analysis to examine the relationship between height and sex, generating a report with customized axis specifications.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #AxisSpecification, #ReportGeneration, #Customization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Axis Specification Window, Labels hide" )} ),
		Dispatch( {}, "1", ScaleBox, {Show Labels( 0 ), Rotated Labels( "Horizontal" )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis.
3. Set Y variable to height.
4. Set X variable to sex.
5. Send report to window.
6. Set title for outline box.
7. Hide labels for axis.
8. Rotate labels horizontally.
9. Assign Oneway object to variable obj.



### Example 73
> **Summary**: Generates a one-way analysis to examine the relationship between height and sex, generating a report with a reference line at 60 units.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #ReferenceLines, #ReportGeneration, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title( "Axis Specification Window, Reference Lines, Value, Lable, Color, Line Width" )}
		),
		Dispatch( {}, "1", ScaleBox, {Add Ref Line( 60, Solid, "Red", "60 mark", 5 ), Rotated Labels( "Horizontal" )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis.
3. Set Y variable to :height.
4. Set X variable to :sex.
5. Send report to Oneway Analysis.
6. Set title of report.
7. Add reference line at value 60.
8. Set reference line color to Red.
9. Label reference line as "60 mark".
10. Set line width to 5.



### Example 74
> **Summary**: Generates a one-way analysis to examine the relationship between height and sex, generating an angled tick label orientation in the report.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #TickLabelOrientation, #ReportGeneration, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Tick Label Orientation: Angled" )} ),
		Dispatch( {}, "1", ScaleBox, {Rotated Labels( "Angled" )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create oneway analysis object.
3. Set Y variable to height.
4. Set X variable to sex.
5. Send report to analysis.
6. Dispatch to Oneway Analysis title.
7. Set title to "Tick Label Orientation: Angled".
8. Dispatch to ScaleBox.
9. Rotate labels to angled orientation.
10. End script execution.



### Example 75
> **Summary**: Runs an Oneway analysis of height by sex, sending the report to a custom layout with vertical tick labels.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #CustomReportLayout, #VerticalTickLabels, #JMPScript -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Tick Label Orientation: Vertical" )} ),
		Dispatch( {}, "1", ScaleBox, {Rotated Labels( "Vertical" )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis object.
3. Set Y variable to height.
4. Set X variable to sex.
5. Send report to Oneway Analysis.
6. Set title to "Tick Label Orientation: Vertical".
7. Dispatch to ScaleBox.
8. Rotate labels to vertical.
9. Close dispatch.
10. End script.



### Example 76
> **Summary**: Generates a one-way analysis to identify the relationship between 'height' and 'sex', removing the axis label for 'height'.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #AxisLabelManagement, #DataVisualization, #StatisticalAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Oneway( Y( :height ), X( :sex ), );
row = obj << report;
axisbox = row[axis box( 1 )] << Remove Axis Label( "height" );
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis.
3. Assign analysis object to `obj`.
4. Retrieve analysis report.
5. Assign report object to `row`.
6. Access first axis box.
7. Remove axis label "height".



### Example 77
> **Summary**: Generates a one-way analysis to identify significant predictors of oxygen consumption in the Fitness data table, utilizing Oneway and axis manipulation techniques.

<!-- Keywords: #JSLScriptingLanguage, #OneWayAnalysis, #AxisManipulation, #DataTable, #Fitness -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway( Y( :height ), X( :sex ), );
row = obj << report;
axisbox = row[axis box( 1 )] << Remove Axis Label( "height" );
axisbox = row[axis box( 1 )] << Show Labels( 0 );
```

**Code Explanation**:

1. Open table.
2. Perform one-way analysis.
3. Retrieve report object.
4. Access axis box.
5. Remove axis label.
6. Hide axis labels.



### Example 78
> **Summary**: Generates a one-way analysis of variance (ANOVA) on the height variable by sex, generating a report with mean diamonds and log-scale axis.

<!-- Keywords: #JMPScriptingLanguage, #One-WayANOVA, #LogScaleAxis, #MeanDiamonds, #ReportGeneration -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Name( "Means/Anova" )(1),
	Mean Diamonds( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Axis: Scale Log" )} ),
		Dispatch( {}, "1", ScaleBox,
			{Scale( "Log" ), Format( "Best", 12 ), Min( 50 ), Max( 71.342727999454 ), Inc( 1 ), Minor Ticks( 1 ),
			Rotated Labels( "Horizontal" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform Oneway analysis.
3. Set Y variable to height.
4. Set X variable to sex.
5. Enable Means/Anova option.
6. Display mean diamonds.
7. Set report title.
8. Change Y-axis scale to log.
9. Set axis format to best.
10. Define axis min and max values.



### Example 79
> **Summary**: Runs an Oneway analysis to examine the relationship between height and sex, generating a report with customized title and axis settings.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #CustomizedReport, #AxisSettings, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "minimum 40, maximum 80, reverse order" )} ),
		Dispatch( {}, "1", ScaleBox, {Min( 80 ), Max( 40 ), Inc( 5 ), Minor Ticks( 1 ), Rotated Labels( "Horizontal" )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform Oneway analysis.
3. Set Y variable.
4. Set X variable.
5. Send report settings.
6. Set title for analysis.
7. Configure axis settings.
8. Set minimum value.
9. Set maximum value.
10. Set increment value.



### Example 80
> **Summary**: Generates a one-way analysis to examine the relationship between 'hist0' and 'drug', with block variable 'dep1', and generates a report with mean lines and confidence intervals.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #BlockVariable, #MeanLines, #ConfidenceIntervals -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :hist0 ),
	X( :drug ),
	Block( :dep1 ),
	Mean Lines( 1 ),
	Mean CI Lines( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of hist0 By drug", OutlineBox,
			{Set Title( "Block statement, Display Options: Mean Lines, Mean CI Lines" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Perform Oneway analysis.
3. Set response variable to "hist0".
4. Set factor variable to "drug".
5. Use "dep1" as block variable.
6. Enable mean lines.
7. Enable mean CI lines.
8. Send report to display.
9. Set title for Oneway analysis.
10. Customize outline box title.



### Example 81
> **Summary**: Runs a stepwise linear regression analysis on the Fitness data table to identify significant predictors of Oxygen consumption, utilizing Oneway analysis and customized reporting for male group analysis.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #StepwiseRegression, #LinearRegression, #CustomizedReporting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	SendToByGroup( Bygroup Default ),
	Y( :height ),
	SendToByGroup( {:sex == "M"}, Y( :height ) ),
	X( :age ),
	SendToByGroup( {:sex == "M"}, X( :age ) ),
	By( :sex ),
	SendToByGroup(
		{:sex == "M"},
		SendToReport( Dispatch( {}, "Oneway Analysis of height By age sex=M", OutlineBox, {Set Title( "By statement" )} ) )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis object.
3. Set default by-group options.
4. Add height as Y variable.
5. Add height for male group.
6. Add age as X variable.
7. Add age for male group.
8. Group by sex.
9. Customize report for male group.
10. Set title for male group analysis.



### Example 82
> **Summary**: Runs a one-way ANOVA analysis to compare means for each pair of groups, generating reports with difference matrices, connecting letters, ordered differences, and detailed comparisons.

<!-- Keywords: #JSLScriptingLanguage, #OneWayANOVA, #ComparisonReports, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Each Pair(
		1,
		Difference Matrix( 1 ),
		Connecting Letters Report( 1 ),
		Ordered Differences Report( 1 ),
		Detailed Comparisons Report( 1 )
	),
	Comparison Circles( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Compare_Means, Each Pair, Student's t, all options" )} )
	)
);
```

**Code Explanation**:

1. Open table.
2. Perform one-way ANOVA.
3. Compare means for each pair.
4. Display difference matrix.
5. Show connecting letters report.
6. Present ordered differences report.
7. Include detailed comparisons report.
8. Add comparison circles.
9. Send report to display.
10. Set report title.



### Example 83
> **Summary**: Runs a one-way ANOVA analysis to compare means across groups, utilizing the Tukey HSD method and generating connecting letters and ordered differences reports.

<!-- Keywords: #JSLScriptingLanguage, #OneWayANOVA, #TukeyHSD, #ConnectingLettersReport, #OrderedDifferencesReport -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	All Pairs( 1, Confidence Quantile( 0 ), LSD Threshold Matrix( 0 ), Connecting Letters Report( 1 ), Ordered Differences Report( 1 ) ),
	Comparison Circles( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title( "Compare_Means, All Pairs, Tukey HSD, Connecting Letters Report, Ordered Differences Report" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Assign dataset to variable.
3. Perform one-way ANOVA.
4. Compare means across groups.
5. Use Tukey HSD method.
6. Generate connecting letters report.
7. Display ordered differences report.
8. Include comparison circles.
9. Send report to output.
10. Set custom title for report.



### Example 84
> **Summary**: Generates a one-way analysis to compare the means of height by sex, generating a report with best comparisons, difference matrix, and confidence quantile.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #BestComparisons, #DifferenceMatrix, #ConfidenceQuantile -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	With Best( 1, Difference Matrix( 1 ), LSD Threshold Matrix( 0 ) ),
	Comparison Circles( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title( "Compare_Means, With Best, Hsu's MCB, Difference Matrix, Confidence Quantile" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Oneway object.
3. Set Y variable to height.
4. Set X variable to sex.
5. Enable best comparisons.
6. Use Difference Matrix.
7. Disable LSD Threshold Matrix.
8. Enable Comparison Circles.
9. Customize report title.
10. Display Oneway analysis.



### Example 85
> **Summary**: Generates a one-way analysis to compare the mean height of males and females, with control group set as 'F' and confidence quantile at 0, sending report settings to an outline box.

<!-- Keywords: #JSL, #OnewayAnalysis, #ComparisonCircles, #SendToReport, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	With Control( 1, {"F"}, Confidence Quantile( 0 ) ),
	Comparison Circles( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title( "Compare_Means, With Control, Dunnett's, LSD Threshold Matrix" )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Perform one-way analysis.
3. Set Y variable.
4. Set X variable.
5. Define control group.
6. Set confidence quantile.
7. Enable comparison circles.
8. Send report settings.
9. Set report title.
10. Display results.



### Example 86
> **Summary**: Generates a one-way analysis to visualize the relationship between height and sex, generating an interactive report with a customized row legend.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #InteractiveReporting, #Customization, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Check Row Legend" )} ),
		Dispatch( {}, "Oneway Plot", FrameBox,
			{Row Legend(
				sex,
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
2. Create Oneway analysis.
3. Set Y variable to height.
4. Set X variable to sex.
5. Send report to window.
6. Set title to "Check Row Legend".
7. Configure Oneway Plot.
8. Add Row Legend.
9. Set legend variable to sex.
10. Apply default color theme.



### Example 87
> **Summary**: Generates a one-way analysis to compare densities of height by sex, sending the report to a JMP window with a custom title.

<!-- Keywords: #JMPScriptingLanguage, #One-WayAnalysis, #DensityComparison, #CustomReportTitle, #DataTableOperations -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Compare Densities( 1 ),
	SendToReport( Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Densities: Compare Densities" )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Perform one-way analysis.
3. Set response variable.
4. Set factor variable.
5. Enable density comparison.
6. Send report to window.
7. Set report title.



### Example 88
> **Summary**: Runs an Oneway analysis to examine the relationship between height and sex, generating a report with composition of densities and proportion of densities.

<!-- Keywords: #OnewayAnalysis, #CompositionOfDensities, #ProportionOfDensities, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Composition of Densities( 1 ),
	Proportion of Densities( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title( "Densities: Composition of Densities, Proportion of Densitites" )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Perform Oneway analysis.
3. Set Y variable.
4. Set X variable.
5. Enable Composition of Densities.
6. Enable Proportion of Densities.
7. Customize report title.
8. Display report.



### Example 89
> **Summary**: Generates a one-way analysis of variance (ANOVA) to compare the mean height of males and females, including quantiles, box plots, and mean diamonds, with customized report title and box plot styles.

<!-- Keywords: #JSL, #OnewayAnalysis, #BoxPlot, #Quantile, #CustomReport -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Quantiles( 1 ),
	Name( "Means/Anova" )(1),
	Box Plots( 1 ),
	Mean Diamonds( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Statuses of Close and Open" )} ),
		Dispatch( {}, "Oneway Plot", FrameBox,
			{DispatchSeg( Box Plot Seg( 1 ), {Box Style( "Outlier" ), Line Color( "Red" )} ), DispatchSeg(
				Box Plot Seg( 2 ),
				{Box Style( "Outlier" ), Line Color( "Red" )}
			)}
		),
		Dispatch( {}, "Quantiles", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Oneway Anova"}, "Pooled t Test", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis object.
3. Set Y variable as height.
4. Set X variable as sex.
5. Enable quantiles.
6. Enable Means/Anova.
7. Enable box plots.
8. Enable mean diamonds.
9. Set report title.
10. Customize box plot styles.



### Example 90
> **Summary**: Generates a one-way analysis to compare the mean height of males and females, generating a report with box plots, mean diamonds, and ANOVA statistics.

<!-- Keywords: #JMPScriptingLanguage, #One-WayAnalysis, #BoxPlots, #MeanDiamonds, #ANOVA -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Quantiles( 1 ),
	Name( "Means/Anova" )(1),
	Box Plots( 1 ),
	Mean Diamonds( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Statuses of Horizontal" )} ),
		Dispatch( {}, "Oneway Plot", FrameBox,
			{DispatchSeg( Box Plot Seg( 1 ), {Box Style( "Outlier" ), Line Color( "Red" )} ), DispatchSeg(
				Box Plot Seg( 2 ),
				{Box Style( "Outlier" ), Line Color( "Red" )}
			)}
		),
		Dispatch( {}, "Oneway Anova", OutlineBox, {SetHorizontal( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Perform Oneway analysis.
3. Set Y variable as height.
4. Set X variable as sex.
5. Enable quantiles calculation.
6. Include Means/Anova.
7. Add box plots.
8. Display mean diamonds.
9. Rename report title.
10. Customize box plot styles.



### Example 91
> **Summary**: Generates a one-way analysis of the relationship between height and sex, generating a report with mean error bars, standard deviation lines, and connected means.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #MeanErrorBars, #StandardDeviationLines, #ConnectMeans -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Mean Error Bars( 1 ),
	Std Dev Lines( 1 ),
	Connect Means( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Mean Error Bars, Std Dev Lines, Connect Means" )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Oneway object.
3. Set Y variable to height.
4. Set X variable to sex.
5. Enable mean error bars.
6. Enable standard deviation lines.
7. Enable connect means.
8. Send report to display.
9. Set title of outline box.
10. Display options for analysis.



### Example 92
> **Summary**: Generates a one-way analysis to visualize the relationship between height and sex, with points jittered and mean of means enabled.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #PointsJittered, #MeanofMeans, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Points Jittered( 1 ),
	Mean of Means( 1 ),
	SendToReport( Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Mean of Means, Points Jittered" )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis.
3. Set Y variable to "height".
4. Set X variable to "sex".
5. Enable points jittering.
6. Enable mean of means.
7. Send report to display.
8. Set title to "Mean of Means, Points Jittered".



### Example 93
> **Summary**: Creates an Oneway analysis to visualize the relationship between height and sex, with points spread and histograms displayed.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #PointsSpread, #Histograms, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Points Spread( 1 ),
	Histograms( 1 ),
	SendToReport( Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Points Spread, Histograms" )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis object.
3. Set Y variable to height.
4. Set X variable to sex.
5. Enable points spread display.
6. Enable histograms display.
7. Send report to display.
8. Set title to "Points Spread, Histograms".



### Example 94
> **Summary**: Analyze height by sex using a one-way ANOVA, with frequency weights and mean diamonds, to generate a report titled 'Fre statement'.

<!-- Keywords: #JSLScriptingLanguage, #One-WayANOVA, #FrequencyWeights, #MeanDiamonds, #ReportGeneration -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Freq( :age ),
	Name( "Means/Anova" )(1),
	Mean Diamonds( 1 ),
	SendToReport( Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Fre statement" )} ) )
);
```

**Code Explanation**:

1. Open table.
2. Perform Oneway analysis.
3. Set Y variable.
4. Set X variable.
5. Use frequency weights.
6. Enable Means/Anova option.
7. Display mean diamonds.
8. Customize report title.
9. Send report to window.
10. Set title to "Fre statement".



### Example 95
> **Summary**: Generates a one-way analysis to identify significant predictors of oxygen consumption in the Fitness data table, utilizing matching lines and report customization.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #MatchingLines, #ReportCustomization, #StepwiseRegression -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :age ),
	Matching Column( :sex ),
	X Axis Proportional( 0 ),
	Matching Lines( 1 ),
	Matching Dotted Lines( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By age", OutlineBox, {Set Title( "Matching Column" )} ),
		Dispatch( {}, "Oneway Plot", FrameBox, {Grid Line Order( 3 ), Reference Line Order( 4 )} ),
		Dispatch( {}, "Matching Fit", OutlineBox, {Close( 0 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform one-way analysis.
3. Set response variable.
4. Set factor variable.
5. Match by sex column.
6. Disable proportional X axis.
7. Enable matching lines.
8. Use dotted matching lines.
9. Set report title.
10. Configure grid and reference lines.



### Example 96
> **Summary**: Runs an Oneway analysis to identify significant predictors of Oxygen consumption in the Fitness data table, utilizing ANOM and t-test statistics.

<!-- Keywords: #OnewayAnalysis, #ANOM, #tTest, #StepwiseRegression, #JMPScripting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	ANOM( 1, Point Options( "Show Needles" ) ),
	Means and Std Dev( 1 ),
	t Test( 1 ),
	Mean Error Bars( 1 ),
	Std Dev Lines( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Means and Std Dev, t Test, ANOM" )} ),
		Dispatch( {"Analysis of Means"}, "ANOM Graph", FrameBox, {Marker Size( 4 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis object.
3. Set response variable to height.
4. Set factor variable to sex.
5. Enable ANOM analysis.
6. Show needles on ANOM plot.
7. Display means and standard deviations.
8. Perform t-test.
9. Add mean error bars.
10. Draw standard deviation lines.



### Example 97
> **Summary**: Runs a nonparametric analysis of the relationship between height and sex, utilizing Wilcoxon Test and Median Test to identify significant patterns.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #WilcoxonTest, #MedianTest, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Wilcoxon Test( 1 ),
	Median Test( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Nonparametric, Wilcoxon Test, Median Test" )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Perform Oneway analysis.
3. Set Y variable to "height".
4. Set X variable to "sex".
5. Enable Wilcoxon Test.
6. Enable Median Test.
7. Send report to display.
8. Set title of report.



### Example 98
> **Summary**: Generates a one-way analysis to compare the mean height of males and females, utilizing van der Waerden and Kolmogorov Smirnov tests, and sends the report to a window with a customized title.

<!-- Keywords: #JSL, #OneWayAnalysis, #vanDerWaerdenTest, #KolmogorovSmirnovTest, #SendToReport -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	van der Waerden Test( 1 ),
	Kolmogorov Smirnov Test( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title( "Compare_Means, With Best, Hsu's MCB, With Control, Dunnett's" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform one-way analysis.
3. Set response variable.
4. Set factor variable.
5. Enable van der Waerden test.
6. Enable Kolmogorov Smirnov test.
7. Send report to window.
8. Dispatch to Oneway Analysis.
9. Set outline box title.
10. Configure multiple comparisons.



### Example 99
> **Summary**: Generates a one-way analysis to identify significant predictors of Oxygen consumption in the Fitness data table, utilizing Wilcoxon and Median tests with exact tests for non-parametric analysis.

<!-- Keywords: #JSLScriptingLanguage, #OneWayAnalysis, #WilcoxonTest, #MedianTest, #ExactTests -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Wilcoxon Test( 1 ),
	Median Test( 1 ),
	Wilcoxon Exact Test( 1 ),
	Median Exact Test( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title( "Nonparametric-Exact_Test, van der Waerden Test, Kolmogorov Smirnov Test" )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Perform one-way analysis.
3. Set Y variable.
4. Set X variable.
5. Enable Wilcoxon Test.
6. Enable Median Test.
7. Enable Wilcoxon Exact Test.
8. Enable Median Exact Test.
9. Modify report title.
10. Send report settings.



### Example 100
> **Summary**: Generates a one-way analysis of height by sex, applying various nonparametric and exact tests to identify significant differences between groups.

<!-- Keywords: #JMPScriptingLanguage, #OneWayAnalysis, #NonParametricTests, #ExactTests, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	van der Waerden Test( 1 ),
	Kolmogorov Smirnov Test( 1 ),
	Van Der Waerden Exact Test( 1 ),
	Kolmogorov Smirnov Exact Test( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title( "Nonparametric-Exact_Test, Van Der Waerden Exact Test, Kolmogorov Smirnov Exact Test" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Perform One-Way ANOVA.
3. Apply Van der Waerden Test.
4. Apply Kolmogorov Smirnov Test.
5. Apply Van Der Waerden Exact Test.
6. Apply Kolmogorov Smirnov Exact Test.
7. Send report to window.
8. Set report title.
9. Customize report outline box.
10. Display analysis results.



### Example 101
> **Summary**: Runs a nonparametric multiple comparison analysis to identify significant predictors of oxygen consumption in the Fitness data table, utilizing Oneway and Wilcoxon Each Pair methods.

<!-- Keywords: #JMPScriptingLanguage, #NonparametricAnalysis, #MultipleComparison, #OxygenConsumption, #FitnessData -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :weight ),
	X( :age ),
	Wilcoxon Each Pair( 1 ),
	Name( "Steel-Dwass All Pairs" )(1),
	Steel With Control( 1, {12} ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of weight By age", OutlineBox,
			{Set Title( "Nonparametric-Nonparametric_Multiple_Comparison, Wilcoxon Each Pair, Steel-Dwass All Pairs, Steel With Control" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Perform Oneway analysis.
3. Set weight as response variable.
4. Set age as factor variable.
5. Use Wilcoxon for pairwise comparisons.
6. Apply Steel-Dwass for all pairs.
7. Compare Steel with control at age 12.
8. Customize report title.
9. Display nonparametric multiple comparisons.
10. Save analysis results.



### Example 102
> **Summary**: Generates a one-way analysis to compare the distribution of height by sex, utilizing Dunn All Pairs for Joint Ranks and Dunn With Control for Joint Ranks, with customized report title.

<!-- Keywords: #JMPScriptingLanguage, #One-WayAnalysis, #DunnAllPairs, #DunnWithControl, #CustomizedReport -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Dunn All Pairs for Joint Ranks( 1 ),
	Dunn With Control for Joint Ranks( 1, {"F"} ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title(
				"Nonparametric-Nonparametric_Multiple_Comparison, Dunn All Pairs for Joint Ranks, Dunn With Control for Joint Ranks"
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Perform one-way analysis.
3. Set response variable to height.
4. Set factor variable to sex.
5. Apply Dunn All Pairs for Joint Ranks.
6. Apply Dunn With Control for Joint Ranks.
7. Customize report title.
8. Set title for Oneway Analysis.
9. Specify Dunn All Pairs method.
10. Specify Dunn With Control method.



### Example 103
> **Summary**: Generates a one-way analysis of variance (ANOVA) on the 'height' variable by 'sex', generating plots and reports in JMP.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #PlotActualbyQuantile, #CDFPlot, #SendToReport -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Plot Actual by Quantile( 1 ),
	Plot Quantile by Actual( 1 ),
	CDF Plot( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title( "Normal Quantile Plot, Plot Actual by Quantile, Plot Quantile by Actual, Line of Fit, CDF Plot" )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create Oneway object.
3. Set Y variable.
4. Set X variable.
5. Enable Plot Actual by Quantile.
6. Enable Plot Quantile by Actual.
7. Enable CDF Plot.
8. Send report to window.
9. Set report title.
10. Display analysis.



### Example 104
> **Summary**: Creates an Oneway analysis report to visualize the relationship between height and sex, with customized title, frame size, background color, marker size, and transparency, while selectively hiding and excluding specific rows.

<!-- Keywords: #OnewayAnalysis, #Customization, #ReportGeneration, #DataVisualization, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Name( "Means/Anova" )(1),
	Mean Diamonds( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title(
				"blue background color, make LAWRENCE a red cross, hide and exclude LILLIE, hide MICHAEL, exclude SUSAN, row label for JACLYN, marker size 6, 400x300, transparency 0.3"
			)}
		),
		Dispatch( {}, "Oneway Plot", FrameBox, {Frame Size( 400, 300 ), Background Color( 5 ), Marker Size( 6 ), Transparency( 0.3 )} )
	)
);
row = obj << report;
framebox = row[Frame Box( 1 )];
dt << Select Where( :name == "LAWRENCE" );
framebox << Row Colors( red );
framebox << Row Markers( 2 );
dt << Select Where( :name == "LILLIE" );
framebox << Row Hide and Exclude( 1 );
dt << Select Where( :name == "MICHAEL" );
framebox << Row Hide;
dt << Select Where( :name == "SUSAN" );
framebox << Row Exclude;
dt << Select Where( :name == "JACLYN" );
framebox << Row Label;
```

**Code Explanation**:

1. Open data table.
2. Create oneway analysis.
3. Set Y variable to height.
4. Set X variable to sex.
5. Enable Means/Anova option.
6. Enable Mean Diamonds.
7. Customize report title.
8. Set plot frame size.
9. Set background color.
10. Set marker size.
11. Set plot transparency.
12. Select Lawrence row.
13. Change Lawrence row color.
14. Change Lawrence row marker.
15. Select Lillie row.
16. Hide and exclude Lillie row.
17. Select Michael row.
18. Hide Michael row.
19. Select Susan row.
20. Exclude Susan row.
21. Select Jaclyn row.
22. Add row label for Jaclyn.



### Example 105
> **Summary**: Creates an Oneway analysis report to visualize the relationship between height and sex, with customized title, frame size, background color, marker size, and transparency.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #Customization, #ReportGeneration, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Name( "Means/Anova" )(1),
	Mean Diamonds( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title(
				"blue background color, make LAWRENCE a red cross, hide and exclude LILLIE, hide MICHAEL, exclude SUSAN, row label for JACLYN, marker size 6, 400x300, transparency 0.3"
			)}
		),
		Dispatch( {}, "Oneway Plot", FrameBox, {Frame Size( 400, 300 ), Background Color( 5 ), Marker Size( 6 ), Transparency( 0.3 )} )
	)
);
row = obj << report;
framebox = row[Frame Box( 1 )];
dt under test << Select Where( :name == "LAWRENCE" );
framebox << Row Colors( red );
framebox << Row Markers( 2 );
dt under test << Select Where( :name == "LILLIE" );
framebox << Row Hide and Exclude( 1 );
dt under test << Select Where( :name == "MICHAEL" );
framebox << Row Hide;
dt under test << Select Where( :name == "SUSAN" );
framebox << Row Exclude;
dt under test << Select Where( :name == "JACLYN" );
framebox << Row Label;
dt under test << Select All Rows;
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis.
3. Set Y variable to height.
4. Set X variable to sex.
5. Enable Means/Anova option.
6. Enable Mean Diamonds.
7. Customize report title.
8. Set frame size to 400x300.
9. Set background color to blue.
10. Set marker size to 6.
11. Set transparency to 0.3.
12. Select Lawrence row.
13. Change Lawrence row color to red.
14. Change Lawrence row marker to cross.
15. Select Lillie row.
16. Hide and exclude Lillie row.
17. Select Michael row.
18. Hide Michael row.
19. Select Susan row.
20. Exclude Susan row.
21. Select Jaclyn row.
22. Add label to Jaclyn row.
23. Select all rows.



### Example 106
> **Summary**: Generates a one-way analysis of variance (ANOVA) to compare the mean height of males and females, with additional visualizations including box plots and mean diamonds.

<!-- Keywords: #JSLScriptingLanguage, #OneWayANOVA, #BoxPlots, #MeanDiamonds, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Quantiles( 1 ),
	Name( "Means/Anova" )(1),
	Box Plots( 1 ),
	Mean Diamonds( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Quantiles, Means/Anova/Pooled t" )} ),
		Dispatch( {}, "Oneway Plot", FrameBox,
			{DispatchSeg( Box Plot Seg( 1 ), {Box Style( "Outlier" ), Confidence Diamond( 1 ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 2 ), {Box Style( "Outlier" ), Confidence Diamond( 1 ), Line Color( "Red" )} )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis object.
3. Set response variable to height.
4. Set factor variable to sex.
5. Include quantiles in analysis.
6. Include Means/Anova in analysis.
7. Enable box plots.
8. Enable mean diamonds.
9. Set report title.
10. Customize box plot styles.



### Example 107
> **Summary**: Generates a one-way analysis to visualize the relationship between Bed spaces and Year, including quantiles and box plots, with customizable report title and box plot style.

<!-- Keywords: #JSLScriptingLanguage, #OneWayAnalysis, #Quantiles, #BoxPlots, #CustomizableReports -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Oneway(
	Y( :Bed spaces ),
	X( :Year ),
	Quantiles( 1 ),
	Box Plots( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of Bed spaces By Year", OutlineBox, {Set Title( "Report table, Column Number Format" )} ),
		Dispatch( {}, "Oneway Plot", FrameBox,
			{DispatchSeg( Box Plot Seg( 1 ), {Box Style( "Outlier" ), Line Color( "Red" )} ), DispatchSeg(
				Box Plot Seg( 2 ),
				{Box Style( "Outlier" ), Line Color( "Red" )}
			), DispatchSeg( Box Plot Seg( 3 ), {Box Style( "Outlier" ), Line Color( "Red" )} ), DispatchSeg(
				Box Plot Seg( 4 ),
				{Box Style( "Outlier" ), Line Color( "Red" )}
			), DispatchSeg( Box Plot Seg( 5 ), {Box Style( "Outlier" ), Line Color( "Red" )} ), DispatchSeg(
				Box Plot Seg( 6 ),
				{Box Style( "Outlier" ), Line Color( "Red" )}
			), DispatchSeg( Box Plot Seg( 7 ), {Box Style( "Outlier" ), Line Color( "Red" )} ), DispatchSeg(
				Box Plot Seg( 8 ),
				{Box Style( "Outlier" ), Line Color( "Red" )}
			), DispatchSeg( Box Plot Seg( 9 ), {Box Style( "Outlier" ), Line Color( "Red" )} ), DispatchSeg(
				Box Plot Seg( 10 ),
				{Box Style( "Outlier" ), Line Color( "Red" )}
			), DispatchSeg( Box Plot Seg( 11 ), {Box Style( "Outlier" ), Line Color( "Red" )} ), DispatchSeg(
				Box Plot Seg( 12 ),
				{Box Style( "Outlier" ), Line Color( "Red" )}
			), DispatchSeg( Box Plot Seg( 13 ), {Box Style( "Outlier" ), Line Color( "Red" )} ), DispatchSeg(
				Box Plot Seg( 14 ),
				{Box Style( "Outlier" ), Line Color( "Red" )}
			)}
		),
		Dispatch( {"Quantiles"}, "Minimum", NumberColBox, {Set Format( 8, "Best", "Use thousands separator" )} ),
		Dispatch( {"Quantiles"}, "25%", NumberColBox, {Set Format( 7 )} ),
		Dispatch( {"Quantiles"}, "75%", NumberColBox, {Set Format( 8, 0, "Percent" )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform one-way analysis.
3. Set response variable.
4. Set factor variable.
5. Include quantiles.
6. Include box plots.
7. Rename report title.
8. Customize box plot style.
9. Format minimum quantile.
10. Format 25% quantile.
11. Format 75% quantile.



### Example 108
> **Summary**: Generates a one-way analysis to determine the significance of sex as a predictor of height, including power and confidence interval calculations.

<!-- Keywords: #OnewayAnalysis, #PowerAnalysis, #ConfidenceInterval, #JMPScriptingLanguage, #StatisticalModeling -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Power(
		Alpha( 0.05 ),
		Sigma( 4.01181137588536 ),
		Delta( 1.50253153381252 ),
		Number( 40 ),
		Solve for Power,
		Solve for Least Significant Number,
		Solve for Least Significant Value,
		Adjusted Power and Confidence Interval,
		Done
	),
	SendToReport( Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Robust Fit, Power" )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis object.
3. Set response variable to height.
4. Set factor variable to sex.
5. Configure power analysis settings.
6. Set significance level to 0.05.
7. Define standard deviation.
8. Define effect size.
9. Set sample size to 40.
10. Solve for power and other metrics.



### Example 109
> **Summary**: Creates an Oneway plot to visualize the relationship between height and sex, with customizable background color, marker size, and row legends.

<!-- Keywords: #JSLScriptingLanguage, #OnewayPlot, #DataVisualization, #CustomizationOptions, #JMP -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	SendToReport(
		Dispatch( {}, "Oneway Plot", FrameBox,
			{Background Color( 73 ), Marker Size( 4 ), Row Legend(
				sex,
				Color( 1 ),
				Color Theme( "JMP Default" ),
				Marker( 1 ),
				Marker Theme( "Hollow" ),
				Continuous Scale( 0 ),
				Reverse Scale( 0 ),
				Excluded Rows( 0 )
			), Row Legend(
				height,
				Color( 1 ),
				Color Theme( "SAS Default" ),
				Marker( 1 ),
				Marker Theme( "Standard" ),
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
2. Create Oneway plot.
3. Set Y to height.
4. Set X to sex.
5. Change background color.
6. Set marker size.
7. Add row legend for sex.
8. Set sex color.
9. Apply JMP Default color theme.
10. Use hollow markers for sex.



### Example 110
> **Summary**: Generates a one-way analysis to examine the relationship between weight and age, generating a report with pairwise comparisons and comparison circles.

<!-- Keywords: #JSLScriptingLanguage, #One-WayAnalysis, #PairwiseComparisons, #ComparisonCircles, #ReportGeneration -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Oneway(
	Y( :weight ),
	X( :age ),
	Each Pair( 1 ),
	Comparison Circles( 1 ),
	SendToReport( Dispatch( {}, "Oneway Analysis of weight By age", OutlineBox, {Set Title( "Select Group" )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create oneway analysis object.
3. Set response variable to weight.
4. Set factor variable to age.
5. Enable pairwise comparisons.
6. Display comparison circles.
7. Send report to display.
8. Rename report title to "Select Group".



### Example 111
> **Summary**: Generates a one-way analysis to identify significant predictors of oxygen consumption in the Fitness data table, utilizing Oneway platform and interactive features.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #DataTable, #StepwiseRegression, #PredictiveModeling -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :weight ),
	X( :age ),
	Each Pair( 1 ),
	Comparison Circles( 1 ),
	SendToReport( Dispatch( {}, "Oneway Analysis of weight By age", OutlineBox, {Set Title( "Select Group" )} ) )
);
obj << Select Group( 14 );
```

**Code Explanation**:

1. Open table.
2. Perform one-way analysis.
3. Set Y variable.
4. Set X variable.
5. Enable each pair comparison.
6. Display comparison circles.
7. Rename report title.
8. Select group 14.



### Example 112
> **Summary**: Generates a one-way analysis report with means and standard deviation, displaying mean error bars and standard deviation lines for the 'height' variable by 'sex', with customizable line color.

<!-- Keywords: #JSLScripting, #OneWayAnalysis, #MeansAndStdDev, #ErrorBars, #LineColors -->

**Code**:
```jsl
Open("data_table.jmp");
ow = Oneway( Y( :height ), X( :sex ), Means and Std Dev( 1 ), Mean Error Bars( 1 ), Std Dev Lines( 1 ) );
rpt = ow << Report();
css = rpt[Frame Box( 1 )] << Find Seg( CustomStreamSeg( 7 ) );
css << Line Color( "Red" );
```

**Code Explanation**:

1. Open data table;
2. Create oneway analysis.
3. Set Y variable to height.
4. Set X variable to sex.
5. Display means and standard deviation.
6. Show mean error bars.
7. Display standard deviation lines.
8. Retrieve report object.
9. Access first frame box.
10. Change line color to red.



### Example 113
> **Summary**: Generates a one-way analysis report with means and standard deviations, error bars, and standard deviation lines for the height response variable by sex factor in the Fitness data table.

<!-- Keywords: #JSLScriptingLanguage, #OneWayAnalysis, #MeansAndStandardDeviation, #ErrorBars, #StandardDeviationLines -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ow = Oneway( Y( :height ), X( :sex ), Means and Std Dev( 1 ), Mean Error Bars( 1 ), Std Dev Lines( 1 ) );
rpt = ow << Report();
css = rpt[Frame Box( 1 )] << Find Seg( CustomStreamSeg( 7 ) );
css << Line Color( "Red" );
css << Line width( 10 );
```

**Code Explanation**:

1. Open data table.
2. Perform one-way analysis.
3. Specify height as response.
4. Specify sex as factor.
5. Display means and standard deviations.
6. Add mean error bars.
7. Add standard deviation lines.
8. Retrieve report object.
9. Locate first frame box.
10. Find custom stream segment.
11. Set line color to red.
12. Set line width to 10.



### Example 114
> **Summary**: Generates a one-way analysis of variance (ANOVA) to compare the means of height based on sex, with mean diamonds displayed and report settings customized.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #MeansAnova, #ReportCustomization, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Name( "Means/Anova" )(1),
	Mean Diamonds( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title( "hide column 1 for Summary of Fit, only numbers are displayed" )}
		),
		Dispatch( {"Oneway Anova", "Summary of Fit"}, "", StringColBox, {Name( "Hide/Unhide" )(1)} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Oneway object.
3. Set Y variable to height.
4. Set X variable to sex.
5. Enable Means/Anova option.
6. Show mean diamonds.
7. Send report settings.
8. Set title for Oneway analysis.
9. Hide column 1 in Summary of Fit.
10. Unhide numbers in Summary of Fit.



### Example 115
> **Summary**: Generates a one-way analysis to compare the mean height of males and females, with unequal variances and an equivalence test, and customizes the report title.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #UnequalVariances, #EquivalenceTest, #CustomReport -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Unequal Variances( 1 ),
	Std Dev Lines( 1 ),
	Equivalence Test( 1 ),
	SendToReport( Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Unequal Variances, Equivalence Test" )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis object.
3. Set response variable to height.
4. Set factor variable to sex.
5. Enable unequal variances option.
6. Display standard deviation lines.
7. Enable equivalence test.
8. Customize report title.
9. Send report settings.



### Example 116
> **Summary**: Generates a one-way analysis of variance (ANOVA) to compare the mean height of individuals based on their sex, while considering age as a weight factor and generating a report with mean diamonds.

<!-- Keywords: #JSLScripting, #OnewayAnalysis, #WeightedRegression, #ReportGeneration, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Weight( :age ),
	Name( "Means/Anova" )(1),
	Mean Diamonds( 1 ),
	SendToReport( Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Weight statement" )} ) )
);
```

**Code Explanation**:

1. Open table.
2. Create Oneway object.
3. Set Y variable.
4. Set X variable.
5. Apply weight.
6. Enable Means/Anova.
7. Show mean diamonds.
8. Send report.
9. Set report title.
10. Display analysis.



### Example 117
> **Summary**: Generates a one-way analysis to identify significant predictors of oxygen consumption in the Fitness data table, filtering by sex and utilizing the Oneway platform.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #DataFiltering, #PredictiveModeling, #FitnessData -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway( Y( :height ), X( :sex ), Where( :sex == "F" ) );
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis object.
3. Set response variable to height.
4. Set factor variable to sex.
5. Apply filter where sex equals "F".



### Example 118
> **Summary**: Runs a stepwise linear regression analysis on the Fitness data table to identify significant predictors of Oxygen consumption, grouping by Engine Type and handling missing values.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #StepwiseRegression, #DataTable, #EngineType -->

**Code**:
```jsl
Open("data_table.jmp");
Oneway(
	SendToByGroup( Bygroup Default ),
	Y( :Total Fatal Injuries ),
	SendToByGroup( {Is Missing( :Engine Type )}, Y( :Total Fatal Injuries ) ),
	SendToByGroup( {:Engine Type == "Unknown"}, Y( :Total Fatal Injuries ) ),
	X( :Location ),
	SendToByGroup( {Is Missing( :Engine Type )}, X( :Location ) ),
	SendToByGroup( {:Engine Type == "Unknown"}, X( :Location ) ),
	By( :Engine Type ),
	Group Options( Layout( "Arrange in Tabs" ) ),
	SendToByGroup(
		{Is Missing( :Engine Type )},
		SendToReport(
			Dispatch( {}, "Oneway Plot", FrameBox,
				{Frame Size( 677, 240 ), Add Pin Annotation(
					Seg( Marker Seg( 1 ) ),
					Index( 38 ),
					Index Row( 38 ),
					UniqueID( 38 ),
					FoundPt( {432, 190} ),
					Origin( {4.50664697193501, 44.086} ),
					RightOfCenter( 1 ),
					Tag Line( 1 ),
					Text Color( "Black" ),
					Background Color( {230, 230, 230} )
				)}
			)
		)
	),
	SendToByGroup(
		{:Engine Type == "Unknown"},
		SendToReport(
			Dispatch( {}, "Oneway Plot", FrameBox,
				Add Pin Annotation(
					Seg( Marker Seg( 1 ) ),
					Index( 69 ),
					Index Row( 69 ),
					UniqueID( 0 ),
					FoundPt( {279, 254} ),
					Origin( {0.5, 0} ),
					RightOfCenter( 0 ),
					Tag Line( 1 ),
					Text Color( "Black" ),
					Background Color( {230, 230, 230} )
				)
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis.
3. Group by Engine Type.
4. Set Y variable.
5. Handle missing Engine Type for Y.
6. Handle "Unknown" Engine Type for Y.
7. Set X variable.
8. Handle missing Engine Type for X.
9. Handle "Unknown" Engine Type for X.
10. Arrange plots in tabs.
11. Add pin annotation for missing Engine Type.
12. Add pin annotation for "Unknown" Engine Type.



### Example 119
> **Summary**: Generates a one-way analysis to visualize means and standard deviations of Sepal length by Species, with mean error bars and standard deviation lines displayed in a bar plot.

<!-- Keywords: #JSLScriptingLanguage, #OneWayAnalysis, #MeansAndStdDev, #BarPlot, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Oneway( Y( :Sepal length ), X( :Species ), Means and Std Dev( 1 ), Mean Error Bars( 1 ), Std Dev Lines( 1 ) );
Report( obj )["Means and Std Deviations", Plot Col Box( "~Std Dev" )] << set plot style( Bar );
Report( obj )["Means and Std Deviations", Plot Col Box( "~Std Dev" )] << Set Axis Position( Bottom );
```

**Code Explanation**:

1. Open data table;
2. Perform Oneway analysis.
3. Specify Y variable.
4. Specify X variable.
5. Display means and standard deviations.
6. Add mean error bars.
7. Add standard deviation lines.
8. Change plot style to bar.
9. Set axis position to bottom.
10. End script.



### Example 120
> **Summary**: Generates a one-way analysis object to visualize means and standard deviations for Sepal length by Species, with bar plot style and bottom axis position.

<!-- Keywords: #JSLScriptingLanguage, #OneWayAnalysis, #MeansAndStdDev, #BarPlot, #AxisPosition -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Oneway( Y( :Sepal length ), X( :Species ), Means and Std Dev( 1 ), Mean Error Bars( 1 ), Std Dev Lines( 1 ) );
Report( obj )["Means and Std Deviations", Plot Col Box( "~Std Dev" )] << set plot style( Bar );
Report( obj )["Means and Std Deviations", Plot Col Box( "~Std Dev" )] << Set Axis Position( Bottom );
obj << redo analysis;
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis object.
3. Set Y variable: Sepal length.
4. Set X variable: Species.
5. Enable Means and Std Dev.
6. Enable Mean Error Bars.
7. Enable Std Dev Lines.
8. Change plot style to Bar.
9. Set axis position to Bottom.
10. Redo the analysis.



### Example 121
> **Summary**: Generates a one-way analysis to identify significant predictors of Production Budget based on Lead Studio Name.

<!-- Keywords: #JSLScriptingLanguage, #One-WayAnalysis, #PredictiveModeling, #DataTableOperations, #StatisticalAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway( Y( :Production Budget ), X( :Lead Studio Name ) );
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis object.
3. Set Y variable to Production Budget.
4. Set X variable to Lead Studio Name.



### Example 122
> **Summary**: Creates an Oneway analysis to compare the mean height by sex, including means comparison, ANOVA, and diamonds.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #MeansComparison, #ANOVA, #Diamonds -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Each Pair( 1 ),
	All Pairs( 1 ),
	With Best( 1 ),
	Means( 1 ),
	Mean Diamonds( 1 ),
	Comparison Circles( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Plot", FrameBox, {Frame Size( 356, 222 )} ),
		Dispatch( {}, "Oneway Means Compare", FrameBox, {Frame Size( 97, 222 )} ),
		Dispatch( {}, "Oneway Means Compare", FrameBox( 2 ), {DispatchSeg( CustomStreamSeg( 1 ), {Transparency( 0.3 )} )} ),
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title( "Oneway Analysis of height By sex - Testing, Student's t circles should be symmetric around refline" )}
		),
		Dispatch( {}, "Oneway Anova", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Means Comparisons", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Oneway object.
3. Set Y variable to height.
4. Set X variable to sex.
5. Enable each pair comparison.
6. Enable all pairs comparison.
7. Enable best comparison.
8. Display means.
9. Display mean diamonds.
10. Display comparison circles.



### Example 123
> **Summary**: Generates a one-way analysis to examine the relationship between Claim USD and AgeClass, generating a report with means, median test, mean diamonds, comparison circles, and customized formatting.

<!-- Keywords: #JMPScriptingLanguage, #One-WayAnalysis, #MeansComparisons, #MedianTest, #CustomizedReporting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :Claim USD ),
	X( :AgeClass ),
	All Pairs( 1 ),
	Means( 1 ),
	Median Test( 1 ),
	Mean Diamonds( 1 ),
	Comparison Circles( 1 ),
	X Axis Proportional( 0 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of Claim USD By AgeClass", OutlineBox,
			{Set Title( "Oneway Analysis of Claim USD By AgeClass - Testing, Y-axis should not show decimal values" )}
		),
		Dispatch( {}, "Oneway Anova", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Means Comparisons", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "1", ScaleBox, {Format( Currency( "USD" ), 15, 0 ), Min( 1000 ), Max( 8000 ), Inc( 1000 ), Minor Ticks( 1 )} ),
		Dispatch( {}, "Oneway Plot", FrameBox, {Marker Drawing Mode( "Fast" )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create oneway analysis.
3. Set Y variable to "Claim USD".
4. Set X variable to "AgeClass".
5. Enable all pairs comparison.
6. Display means.
7. Perform median test.
8. Show mean diamonds.
9. Use comparison circles.
10. Customize report title and formatting.



### Example 124
> **Summary**: Runs the stepwise linear regression analysis on the Fitness data table to identify significant predictors of Oxygen consumption, using Oneway analysis with response variable height and factor variable age.

<!-- Keywords: #JSLScriptingLanguage, #StepwiseRegression, #OxygenConsumption, #FitnessData, #LinearRegression -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway( Y( :height ), X( :age ) );
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis object.
3. Set response variable to height.
4. Set factor variable to age.



### Example 125
> **Summary**: Generates a one-way analysis of variance (ANOVA) to compare the speed of different brands, including pairwise and all-pairs comparisons, ANOM graph with needles, means/Anova report, and various plots.

<!-- Keywords: #JMP, #OnewayAnalysis, #ANOVA, #DataVisualization, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Oneway(
	Y( :speed ),
	X( :brand ),
	Each Pair( 1 ),
	All Pairs( 1 ),
	ANOM( 1, Point Options( "Show Needles" ) ),
	Name( "Means/Anova" )(1),
	Means and Std Dev( 1 ),
	Unequal Variances( 1 ),
	Plot Actual by Quantile( 1 ),
	Plot Quantile by Actual( 1 ),
	CDF Plot( 1 ),
	Compare Densities( 1 ),
	Composition of Densities( 1 ),
	Proportion of Densities( 1 ),
	Box Plots( 1 ),
	Mean Diamonds( 1 ),
	Mean Error Bars( 1 ),
	Std Dev Lines( 1 ),
	Comparison Circles( 1 ),
	Histograms( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Plot", FrameBox,
			{DispatchSeg( Box Plot Seg( 1 ), {Box Style( "Outlier" ), Line Color( "Red" )} ), DispatchSeg(
				Box Plot Seg( 2 ),
				{Box Style( "Outlier" ), Line Color( "Red" )}
			), DispatchSeg( Box Plot Seg( 3 ), {Box Style( "Outlier" ), Line Color( "Red" )} )}
		),
		Dispatch( {"Analysis of Means"}, "ANOM Graph", FrameBox, {Marker Size( 4 )} ),
		Dispatch( {"Tests that the Variances are Equal"}, "Oneway Plot", FrameBox,
			{Marker Size( 5 ), DispatchSeg( Marker Seg( 1 ), {Color( "Dark Green" ), Marker( Right Triangle )} )}
		),
		Dispatch( {}, "CDF Plot", OutlineBox, {SetHorizontal( 1 )} ),
		Dispatch( {}, "Compare Densities", OutlineBox, {SetHorizontal( 1 )} ),
		Dispatch( {}, "Composition of Densities", OutlineBox, {SetHorizontal( 1 )} ),
		Dispatch( {}, "Proportion of Densities", OutlineBox, {SetHorizontal( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis object.
3. Set Y variable as speed.
4. Set X variable as brand.
5. Enable pairwise comparisons.
6. Enable all pairs comparison.
7. Add ANOM graph with needles.
8. Include Means/Anova report.
9. Display means and standard deviation.
10. Account for unequal variances.



### Example 126
> **Summary**: Runs the stepwise linear regression analysis on the Fitness data table to identify significant predictors of Oxygen consumption, utilizing a One-Way Analysis and By Group transformation.

<!-- Keywords: #JSLScriptingLanguage, #OneWayAnalysis, #ByGroupTransformation, #StepwiseLinearRegression, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Oneway( Y( :height ), X( :age ), By( Transform Column( "Lowercase[sex]", Character, Formula( Lowercase( :sex ) ) ) ) );
plan = obj[1] << Get ByGroup Script;
(obj[1] << TopReport) << Journal << Close Window;
plan;
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis.
3. Transform sex column to lowercase.
4. Group by transformed sex column.
5. Retrieve ByGroup script.
6. Close top report window.
7. Execute retrieved script.



### Example 127
> **Summary**: Generates a one-way analysis to identify significant predictors of oxygen consumption in the Fitness data table, filtering for female records and utilizing the Oneway platform.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #StepwiseLinearRegression, #DataFiltering, #PredictorIdentification -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Oneway(
	Transform Column( "Lowercase sex", Character, Formula( Lowercase( :sex ) ) ),
	Y( :height ),
	X( :age ),
	Where( :Lowercase sex == "f" )
);
script = obj << Get Script;
```

**Code Explanation**:

1. Open data table;
2. Create new column for lowercase sex.
3. Perform one-way analysis.
4. Set Y variable as height.
5. Set X variable as age.
6. Filter for female records.
7. Retrieve script from analysis.



### Example 128
> **Summary**: Generates a one-way analysis to identify significant predictors of oxygen consumption in the Fitness data table, filtering for females and using age as a factor variable.

<!-- Keywords: #JSLScriptingLanguage, #OneWayAnalysis, #FilteringData, #FactorVariable, #PredictorVariables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Oneway(
	Transform Column( "Lowercase sex", Character, Formula( Lowercase( :sex ) ) ),
	Y( :height ),
	X( :age ),
	Where( :Lowercase sex == "f" )
);
script = obj << Get Script;
script;
```

**Code Explanation**:

1. Open data table.
2. Create lowercase sex column.
3. Perform one-way analysis.
4. Set response variable to height.
5. Set factor variable to age.
6. Filter data for females.
7. Retrieve script from object.
8. Display script.



### Example 129
> **Summary**: Runs a stepwise linear regression analysis on the Fitness data table to identify significant predictors of Oxygen consumption, utilizing local data filtering and automatic recalculation.

<!-- Keywords: #JSLScriptingLanguage, #LinearRegression, #DataFiltering, #AutomaticRecalculation, #StepwiseAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Oneway( Y( :height ), X( :sex ), Automatic Recalc( 1 ), Name( "Means/Anova" )(1), Mean Diamonds( 1 ) );
obj << Local Data Filter(
	Location( {0, 0} ),
	Add Filter( columns( :age ), Where( :age == 12 ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
obj << Automatic Recalc( 0 );
dt << Select Where( :sex == "F" );
dt << Exclude();
rpt = obj << Report;
```

**Code Explanation**:

1. Open data table.
2. Create one-way analysis object.
3. Set local data filter location.
4. Add age filter for 12-year-olds.
5. Configure filter mode.
6. Disable automatic recalculation.
7. Select female records.
8. Exclude selected records.
9. Generate report from analysis.



### Example 130
> **Summary**: Runs a stepwise linear regression analysis on the Fitness data table to identify significant predictors of Oxygen consumption, utilizing Oneway and Local Data Filter features.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #LocalDataFilter, #StepwiseLinearRegression, #DataTableOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Oneway( Y( :height ), X( :sex ), Automatic Recalc( 1 ), Name( "Means/Anova" )(1), Mean Diamonds( 1 ), );
obj << Local Data Filter(
	Location( {1087, 151} ),
	Add Filter( columns( :age ), Where( :age == 12 ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
dt << Select Where( :sex == "F" );
dt << Exclude();
rpt = obj << Report;
vallist = (rpt[Number Col Box( 1 )]);
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Oneway( Y( :height ), X( :sex ), Automatic Recalc( 1 ), Name( "Means/Anova" )(1), Mean Diamonds( 1 ) );
obj << Local Data Filter(
	Location( {0, 0} ),
	Add Filter( columns( :age ), Where( :age == 12 ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
obj << Automatic Recalc( 0 );
dt << Select Where( :sex == "F" );
dt << Exclude();
rpt = obj << Report;
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis on height by sex.
3. Add local data filter for age 12.
4. Select female rows.
5. Exclude selected rows.
6. Generate report from analysis.
7. Extract values from report.
8. Close data table without saving.
9. Reopen data table.
10. Create another Oneway analysis on height by sex.



### Example 131
> **Summary**: Creates a step-by-step linear regression analysis on the Fitness data table to identify significant predictors of Oxygen consumption, utilizing Oneway analysis and HTML content extraction.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #HTMLContentExtraction, #StepwiseLinearRegression, #DataVisualization -->

**Code**:
```jsl
folderPathTmp = "$DESKTOP";
dt = Open("data_table.jmp");
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
getHTMLContent = obj << Get HTML;
win = New Window( "Example",
	Number Col Box( "xs", [0.01, 0.001, 0.5], <<Set Conditional Format( "PValue" ) ),
	Matrix Box( [0.01 0.001, 0.5 0.6], <<RowNames( "First", "Second" ), <<Set Conditional Format( "PValue" ) ),
	Text Box( "some text", <<Text Color( "Red" ) )
);
getHTMLContent = win << Get HTML;
win << Close Window;
path rtf = folderPathTmp || "/JMP-22803.rtf";
path picture = folderPathTmp || "/JMP-22803";
path capture = folderPathTmp || "/JMP-22803";
path msword = folderPathTmp || "/JMP-22803.doc";
```

**Code Explanation**:

1. Set folder path to desktop.
2. Open data table.
3. Create Oneway analysis on height by sex.
4. Extract HTML content from analysis.
5. Create new window with various UI elements.
6. Extract HTML content from window.
7. Close the window.
8. Define RTF file path.
9. Define picture file path.
10. Define capture file path.
11. Define MSWord file path.



### Example 132
> **Summary**: Runs a stepwise linear regression analysis on the Fitness data table to identify significant predictors of Oxygen consumption, utilizing Oneway plots and summary statistics.

<!-- Keywords: #JSLScriptingLanguage, #StepwiseLinearRegression, #OxygenConsumption, #FitnessDataTable, #SummaryStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ow = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
ow << Automatic Recalc( 1 );
dt << select where( :age == 12 | :age == 13 );
dt << Hide and Exclude( 1 );
sumStats1 = Report( ow )["Summary of Fit"][Table Box( 1 )] << get as matrix;
certStats1 = [0.396825396825397, 0.370600414078676, 2.09899907133121, 64.6, 25];
dt << clear row states;
dt << select Where( :age == 12 | :age == 17 );
dt << Hide and Exclude( 1 );
sumStats2 = Report( ow )["Summary of Fit"][Table Box( 1 )] << get as matrix;
certSTats2 = [0.199831454551116, 0.170195582497454, 2.77879066500391, 63.3448275862069, 29];
```

**Code Explanation**:

1. Open data table.
2. Create Oneway plot for height vs sex.
3. Enable automatic recalculation.
4. Select rows where age is 12 or 13.
5. Hide and exclude selected rows.
6. Extract summary statistics from report.
7. Define certified statistics for comparison.
8. Clear row states in data table.
9. Select rows where age is 12 or 17.
10. Hide and exclude selected rows.



### Example 133
> **Summary**: Creates a 'Means_StdDev' table by performing one-way ANOVA on height by sex, extracting means and standard deviations data, and closing original datasets without saving.

<!-- Keywords: #JMPScriptingLanguage, #One-WayANOVA, #DataTableManipulation, #GraphBuilder, #ReportGeneration -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dtName = "Means_StdDev";
biv = dt1 << Oneway( Y( :height ), X( :sex ), Means and Std Dev( 1 ) );
dt2 = Report( biv )["Means and Std Deviations"][Table Box( 1 )] << Make Data Table( dtName );
Close( dt1, nosave );
Close( dt2, nosave );
New Window( "Example", gb = Graph Box( JSL Quote() ) );
gb << close window;
```

**Code Explanation**:

1. Open data table;
2. Create "Means_StdDev" table.
3. Perform one-way ANOVA on height by sex.
4. Extract means and standard deviations data.
5. Close original dataset without saving.
6. Close extracted data table without saving.
7. Create new window named "Example".
8. Add graph box to window.
9. Close the graph box.
10. Close the example window.



### Example 134
> **Summary**: Creates a data table containing means and standard deviations for height by sex, using Oneway analysis in JMP.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #MeansandStandardDeviations, #DataTableCreation, #StatisticalAnalysis -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dtName = "Means_StdDev";
biv = dt1 << Oneway( Y( :height ), X( :sex ), Means and Std Dev( 1 ) );
dt2 = Report( biv )["Means and Std Deviations"][Table Box( 1 )] << Make Data Table( dtName );
```

**Code Explanation**:

1. Open data table;
2. Define table name "Means_StdDev".
3. Create one-way analysis for height by sex.
4. Include means and standard deviations.
5. Extract means and standard deviations report.
6. Convert report to data table.
7. Name new data table "Means_StdDev".



### Example 135
> **Summary**: Creates an Oneway plot to visualize the relationship between Fahrenheit temperature and room/office conditions, with interactive marker selection mode.

<!-- Keywords: #JSLScriptingLanguage, #OnewayPlot, #InteractiveVisualization, #MarkerSelectionMode, #DataAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :fahrenheit ),
	X( :Name( "room/office" ) ),
	SendToReport( Dispatch( {}, "Oneway Plot", FrameBox, {Marker Selection Mode( "Selected Haloed" )} ) )
);
```

**Code Explanation**:

1. Open table.
2. Create Oneway plot.
3. Set Y variable.
4. Set X variable.
5. Configure report settings.
6. Apply marker selection mode.



### Example 136
> **Summary**: Runs a comprehensive Oneway analysis to identify significant predictors of height, utilizing ANOM with needles and transformed ranks, and customizing report settings.

<!-- Keywords: #OnewayAnalysis, #ANOM, #JMPScriptingLanguage, #DataVisualization, #StatisticalModeling -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :age ),
	ANOM( 1, Point Options( "Show Needles" ) ),
	ANOM with Transformed Ranks( 1, Point Options( "Show Needles" ) ),
	Name( "ANOM for Variances with Levene(ADM)" )(1, Point Options( "Show Connected Points" )),
	All Graphs( 0 ),
	Quantiles( 1 ),
	Means( 1 ),
	Means and Std Dev( 1 ),
	Box Plots( 1 ),
	Mean Diamonds( 1 ),
	Mean Error Bars( 1 ),
	Std Dev Lines( 1 ),
	SendToReport(
		Dispatch( {}, "Quantiles", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Oneway Anova", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Means and Std Deviations", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Analysis of Means", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Analysis of Means"}, "ANOM Graph", FrameBox, {Marker Size( 2 )} ),
		Dispatch( {}, "Analysis of Means-Transformed Ranks", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Analysis of Means for Variances-Levene(ADM)"}, "ANOMV with Levene(ADM) Graph", FrameBox, {Marker Size( 6 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis.
3. Set Y variable to height.
4. Set X variable to age.
5. Enable ANOM with needles.
6. Enable ANOM with transformed ranks and needles.
7. Enable ANOM for variances with Levene(ADM) and connected points.
8. Disable all graphs.
9. Enable quantiles.
10. Customize report settings.



### Example 137
> **Summary**: Runs an Oneway analysis to identify significant predictors of Oxygen consumption in the Fitness data table, utilizing ANOM for Variances and customizing graph settings.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #ANOMforVariances, #CustomizedGraphSettings, #FitnessData -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :Elapsed Time ),
	X( :Airline ),
	ANOM for Variances( 1, Show Decision Limits( 0 ), Graph in Variance Scale( 1 ), Point Options( "Show Connected Points" ) ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of Elapsed Time By Airline", OutlineBox,
			{Set Title(
				"ANOM_for_Variances, Alpha_0.05, Graph in Variance Scale, Show Decision Limit Shading and Center Line, Show Connected Points"
			)}
		),
		Dispatch( {"Analysis of Means for Variances"}, "50999", ScaleBox,
			{Min( 3000 ), Max( 7500 ), Inc( 500 ), Minor Ticks( 0 ), Rotated Labels( "Horizontal" )}
		),
		Dispatch( {"Analysis of Means for Variances"}, TextEditBox, {Set Text( "Variance (Elapsed Time)" )} ),
		Dispatch( {"Analysis of Means for Variances"}, "ANOMV Graph", FrameBox, {Marker Size( 4 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis.
3. Set Y variable as Elapsed Time.
4. Set X variable as Airline.
5. Enable ANOM for Variances.
6. Hide decision limits.
7. Graph in variance scale.
8. Show connected points.
9. Set report title.
10. Customize graph settings.



### Example 138
> **Summary**: Generates a one-way analysis to compare the mean height of males and females, including quantiles, box plots, and mean diamonds, with customized report title and box plot styles.

<!-- Keywords: #JSLScriptingLanguage, #OneWayAnalysis, #BoxPlots, #Quantiles, #CustomizedReport -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Quantiles( 1 ),
	Name( "Means/Anova" )(1),
	Box Plots( 1 ),
	Mean Diamonds( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Statuses of Close and Open" )} ),
		Dispatch( {}, "Oneway Plot", FrameBox,
			{DispatchSeg( Box Plot Seg( 1 ), {Box Style( "Outlier" ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 2 ), {Box Style( "Outlier" ), Line Color( "Red" )} )}
		),
		Dispatch( {}, "Quantiles", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Oneway Anova"}, OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis object.
3. Set Y variable as height.
4. Set X variable as sex.
5. Include quantiles.
6. Enable Means/Anova option.
7. Enable Box Plots.
8. Enable Mean Diamonds.
9. Set report title.
10. Customize box plot styles and colors.



### Example 139
> **Summary**: Analyze height by sex using a one-way ANOVA, generating box plots and mean diamonds for visual inspection.

<!-- Keywords: #JSLScriptingLanguage, #OneWayANOVA, #BoxPlots, #MeanDiamonds, #JMPReporting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Quantiles( 1 ),
	Name( "Means/Anova" )(1),
	Box Plots( 1 ),
	Mean Diamonds( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Statuses of Horizontal" )} ),
		Dispatch( {}, "Oneway Plot", FrameBox,
			{DispatchSeg( Box Plot Seg( 1 ), {Box Style( "Outlier" ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 2 ), {Box Style( "Outlier" ), Line Color( "Red" )} )}
		),
		Dispatch( {}, "Oneway Anova", OutlineBox, {SetHorizontal( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis object.
3. Set Y variable to height.
4. Set X variable to sex.
5. Enable quantiles.
6. Enable Means/Anova.
7. Enable box plots.
8. Enable mean diamonds.
9. Set report title.
10. Customize box plot styles and colors.



### Example 140
> **Summary**: Generates a one-way analysis of variance (ANOVA) to compare the mean height of males and females, with additional visualizations including box plots and mean diamonds.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #BoxPlots, #MeanDiamonds, #SendToReport -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Quantiles( 1 ),
	Name( "Means/Anova" )(1),
	Box Plots( 1 ),
	Mean Diamonds( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
			{Set Title( "Quantiles, Means/Anova/Pooled t" )}
		),
		Dispatch( {}, "Oneway Plot", FrameBox,
			{DispatchSeg( Box Plot Seg( 1 ), {Box Style( "Outlier" ), Confidence Diamond( 1 ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 2 ), {Box Style( "Outlier" ), Confidence Diamond( 1 ), Line Color( "Red" )} )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis.
3. Set Y variable to height.
4. Set X variable to sex.
5. Enable quantiles calculation.
6. Enable Means/Anova option.
7. Enable box plots.
8. Enable mean diamonds.
9. Set report title.
10. Customize box plot appearance.



### Example 141
> **Summary**: Analyze bed spaces by year using a one-way ANOVA, generating box plots with customized styles and formatting quantiles for minimum, 25%, and 75% values.

<!-- Keywords: #JSLScripting, #OneWayANOVA, #BoxPlots, #QuantileAnalysis, #ReportGeneration -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :Bed spaces ),
	X( :Year ),
	Quantiles( 1 ),
	Box Plots( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of Bed spaces By Year", OutlineBox,
			{Set Title( "Report table, Column Number Format" )}
		),
		Dispatch( {}, "Oneway Plot", FrameBox,
			{DispatchSeg( Box Plot Seg( 1 ), {Box Style( "Outlier" ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 2 ), {Box Style( "Outlier" ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 3 ), {Box Style( "Outlier" ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 4 ), {Box Style( "Outlier" ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 5 ), {Box Style( "Outlier" ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 6 ), {Box Style( "Outlier" ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 7 ), {Box Style( "Outlier" ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 8 ), {Box Style( "Outlier" ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 9 ), {Box Style( "Outlier" ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 10 ), {Box Style( "Outlier" ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 11 ), {Box Style( "Outlier" ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 12 ), {Box Style( "Outlier" ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 13 ), {Box Style( "Outlier" ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 14 ), {Box Style( "Outlier" ), Line Color( "Red" )} )}
		),
		Dispatch( {"Quantiles"}, "Minimum", NumberColBox, {Set Format( 8, "Best", "Use thousands separator" )} ),
		Dispatch( {"Quantiles"}, "25%", NumberColBox, {Set Format( 7 )} ),
		Dispatch( {"Quantiles"}, "75%", NumberColBox, {Set Format( 8, 0, "Percent" )} )
	)
);
```

**Code Explanation**:

1. Open table.
2. Create Oneway analysis.
3. Set Y variable.
4. Set X variable.
5. Enable quantiles.
6. Enable box plots.
7. Set report title.
8. Customize box plot style.
9. Format minimum value.
10. Format 25% value.
11. Format 75% value.



### Example 142
> **Summary**: Runs a one-way ANOVA analysis to compare the speed of different brands, including pairwise comparisons and an ANOM plot, with customizable plot styles and colors.

<!-- Keywords: #JMPScriptingLanguage, #One-WayANOVA, #PairwiseComparisons, #ANOMPlot, #CustomizablePlots -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :speed ),
	X( :brand ),
	Each Pair( 1 ),
	All Pairs( 1 ),
	ANOM( 1, Point Options( "Show Needles" ) ),
	Name( "Means/Anova" )(1),
	Means and Std Dev( 1 ),
	Unequal Variances( 1 ),
	Plot Actual by Quantile( 1 ),
	Plot Quantile by Actual( 1 ),
	CDF Plot( 1 ),
	Compare Densities( 1 ),
	Composition of Densities( 1 ),
	Proportion of Densities( 1 ),
	Box Plots( 1 ),
	Mean Diamonds( 1 ),
	Mean Error Bars( 1 ),
	Std Dev Lines( 1 ),
	Comparison Circles( 1 ),
	Histograms( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Plot", FrameBox,
			{DispatchSeg( Box Plot Seg( 1 ), {Box Style( "Outlier" ), Line Color( "Red" )} ), DispatchSeg(
				Box Plot Seg( 2 ),
				{Box Style( "Outlier" ), Line Color( "Red" )}
			), DispatchSeg( Box Plot Seg( 3 ), {Box Style( "Outlier" ), Line Color( "Red" )} )}
		),
		Dispatch( {"Analysis of Means"}, "ANOM Graph", FrameBox, {Marker Size( 4 )} ),
		Dispatch( {"Tests that the Variances are Equal"}, "Oneway Plot", FrameBox,
			{Marker Size( 5 ), DispatchSeg( Marker Seg( 1 ), {Color( "Dark Green" ), Marker( Right Triangle )} )}
		),
		Dispatch( {}, "CDF Plot", OutlineBox, {SetHorizontal( 1 )} ),
		Dispatch( {}, "Compare Densities", OutlineBox, {SetHorizontal( 1 )} ),
		Dispatch( {}, "Composition of Densities", OutlineBox, {SetHorizontal( 1 )} ),
		Dispatch( {}, "Proportion of Densities", OutlineBox, {SetHorizontal( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Perform One-Way ANOVA.
3. Set Y variable as speed.
4. Set X variable as brand.
5. Enable pairwise comparisons.
6. Include ANOM plot.
7. Display means and ANOVA table.
8. Show means and standard deviations.
9. Assume unequal variances.
10. Customize plot styles and colors.



### Example 143
> **Summary**: Generates a one-way analysis to identify significant predictors of oxygen consumption in the Fitness data table, utilizing ANOM plots and means/ANOVA tables.

<!-- Keywords: #JSLScriptingLanguage, #OneWayAnalysis, #ANOMPlot, #MeansAndANOVA, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Oneway(
	Y( :speed ),
	X( :brand ),
	Each Pair( 1 ),
	All Pairs( 1 ),
	ANOM( 1, Point Options( "Show Needles" ) ),
	Name( "Means/Anova" )(1),
	Means and Std Dev( 1 ),
	Unequal Variances( 1 ),
	Plot Actual by Quantile( 1 ),
	Plot Quantile by Actual( 1 ),
	CDF Plot( 1 ),
	Compare Densities( 1 ),
	Composition of Densities( 1 ),
	Proportion of Densities( 1 ),
	Box Plots( 1 ),
	Mean Diamonds( 1 ),
	Mean Error Bars( 1 ),
	Std Dev Lines( 1 ),
	Comparison Circles( 1 ),
	Histograms( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Plot", FrameBox,
			{DispatchSeg( Box Plot Seg( 1 ), {Box Style( "Outlier" ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 2 ), {Box Style( "Outlier" ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 3 ), {Box Style( "Outlier" ), Line Color( "Red" )} )}
		),
		Dispatch( {"Analysis of Means"}, "ANOM Graph", FrameBox, {Marker Size( 4 )} ),
		Dispatch( {"Tests that the Variances are Equal"}, "Oneway Plot", FrameBox,
			{Marker Size( 5 ), DispatchSeg( Marker Seg( 1 ), {Color( "Dark Green" ), Marker( Right Triangle )} )}
		),
		Dispatch( {}, "CDF Plot", OutlineBox, {SetHorizontal( 1 )} ),
		Dispatch( {}, "Compare Densities", OutlineBox, {SetHorizontal( 1 )} ),
		Dispatch( {}, "Composition of Densities", OutlineBox, {SetHorizontal( 1 )} ),
		Dispatch( {}, "Proportion of Densities", OutlineBox, {SetHorizontal( 1 )} )
	)
);
```

**Code Explanation**:

1. Open table.
2. Perform Oneway analysis.
3. Set Y variable.
4. Set X variable.
5. Enable each pair comparison.
6. Enable all pairs comparison.
7. Add ANOM plot.
8. Display means/ANOVA table.
9. Show means and standard deviations.
10. Assume unequal variances.



### Example 144
> **Summary**: Generates a one-way analysis to identify significant predictors of oxygen consumption in the Fitness data table, combining windows with Fit YbyX and BY variables.

<!-- Keywords: #JSLScriptingLanguage, #One-WayAnalysis, #FitYbyX, #BYVariables, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
onew = Oneway( Y( :height ), X( :age ), By( :sex ) );
app3 = JMP App();
app3 << Combine Windows( {Window( "data_table - Oneway of height by age" )} );
(app3 << Get Modules)[1] << Set Window Title( "Combine Windows with Fit YbyX and BY var" );
app3 << Run;
```

**Code Explanation**:

1. Open data table.
2. Perform one-way analysis.
3. Create new JMP app.
4. Combine analysis windows.
5. Rename combined window.
6. Run the app.



### Example 145
> **Summary**: Runs a stepwise linear regression analysis on the Fitness data table to identify significant predictors of Oxygen consumption, displaying means and mean diamonds for sex.

<!-- Keywords: #JMPScriptingLanguage, #StepwiseLinearRegression, #OnewayAnalysis, #PredictiveModeling, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
obj << Save Predicted( 1 );
prop1 = dt:height mean by sex << get property( "Predicting" );
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis.
3. Set Y variable to height.
4. Set X variable to sex.
5. Show means.
6. Show mean diamonds.
7. Save predicted values.
8. Get predicting property.



### Example 146
> **Summary**: Runs a stepwise linear regression analysis on the Fitness data table to identify significant predictors of Oxygen consumption, utilizing Oneway analysis and ignoring platform preferences.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #StepwiseLinearRegression, #DataTableOperations, #Preferences -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Oneway( Ignore  Preferences( 1 ), X( :Country ), Y( :Weight, Turning Circle, :Displacement ) );
obj[1] << Save Script for All Objects To Data Table("data_table");
obj[1] << Close Window;
lc = Collapse Whitespace( Log Capture( dt << RunScript( "Test Oneway" ) ) );
lc_exp = Collapse Whitespace( "" );
```

**Code Explanation**:

1. Open data table.
2. Create oneway analysis object.
3. Ignore platform preferences.
4. Set X variable to Country.
5. Set Y variables to Weight, Turning Circle, Displacement.
6. Save script for all objects.
7. Close oneway window.
8. Capture log output.
9. Collapse whitespace in log.
10. Collapse whitespace in expected log.



### Example 147
> **Summary**: Creates an Oneway plot to visualize the relationship between Fahrenheit temperature and room/office conditions, with customizable marker selection.

<!-- Keywords: #JSLScriptingLanguage, #OnewayPlot, #Customization, #MarkerSelection, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ow = Oneway(
	Y( :fahrenheit ),
	X( :Name( "room/office" ) ),
	SendToReport( Dispatch( {}, "Oneway Plot", FrameBox, {Marker Selection Mode( "Selected Haloed" )} ) )
);
rpt = ow << report;
```

**Code Explanation**:

1. Open table.
2. Create Oneway plot.
3. Set Y variable.
4. Set X variable.
5. Customize marker selection.
6. Generate report object.



### Example 148
> **Summary**: Runs a stepwise linear regression analysis on the Fitness data table to identify significant predictors of Oxygen consumption, utilizing an Oneway plot and control values.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #StepwiseRegression, #LinearRegression, #DataTable -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Oneway( Y( :height ), X( :age ) );
obj << With Control( 1, {15} );
obj << With Control( 0 );
rpt = Report( obj );
Color_Exp = {};
```

**Code Explanation**:

1. Open data table;
2. Create Oneway plot.
3. Set control value 15.
4. Reset control value.
5. Generate report object.
6. Initialize empty list.



### Example 149
> **Summary**: Runs a stepwise linear regression analysis on the Fitness data table to identify significant predictors of Oxygen consumption, utilizing Oneway plots and control settings.

<!-- Keywords: #JSLScriptingLanguage, #StepwiseLinearRegression, #OnewayPlot, #DataAnalysis, #FitnessData -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Oneway( Y( :height ), X( :age ) );
obj << With Control( 1, {15} );
obj << With Control( 0 );
rpt = Report( obj );
Color_Exp = {};
```

**Code Explanation**:

1. Open data table;
2. Create Oneway plot.
3. Set control for axis.
4. Remove default control.
5. Generate report object.
6. Initialize empty list.



### Example 150
> **Summary**: Calculates Friedman rank test statistics for a one-way ANOVA analysis, including overall score mean, group means, and standard deviation, as well as Z-scores for each group.

<!-- Keywords: #FriedmanRankTest, #OneWayANOVA, #JSLScriptingLanguage, #DataAnalysis, #StatisticalComputations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ), Friedman Rank Test( 1 ) );
r = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7];
n = N Row( r );
nb = 3;
nk = 7;
F_overall score mean = 4;
F_score mean group 1 = 4.3333333333333333;
F_score mean group 2 = 1.6666666666666667;
F_score mean group 3 = 1.3333333333333333;
F_score mean group 4 = 6.000000;
F_score mean group 5 = 5.000000;
F_score mean group 6 = 6.6666666666666667;
F_score mean group 7 = 3.0000000000000000;
F_score std = (Sum( R ^ 2 ) - (Sum( R )) ^ 2 / n) / (nk - 1);
F_Z1 = (F_score mean group 1 - F_overall score mean) / (Root( F_score std / nk ) / nb);
F_Z2 = (F_score mean group 2 - F_overall score mean) / (Root( F_score std / nk ) / nb);
F_Z3 = (F_score mean group 3 - F_overall score mean) / (Root( F_score std / nk ) / nb);
F_Z4 = (F_score mean group 4 - F_overall score mean) / (Root( F_score std / nk ) / nb);
F_Z5 = (F_score mean group 5 - F_overall score mean) / (Root( F_score std / nk ) / nb);
F_Z6 = (F_score mean group 6 - F_overall score mean) / (Root( F_score std / nk ) / nb);
F_Z7 = (F_score mean group 7 - F_overall score mean) / (Root( F_score std / nk ) / nb);
Zact = Report( obj )["Friedman Rank Test", Number Col Box( "(Mean-Mean0)" )] << Get;
```

**Code Explanation**:

1. Open data table.
2. Perform a one-way ANOVA.
3. Define ranks array.
4. Calculate number of rows.
5. Set block count.
6. Set group count.
7. Define overall score mean.
8. Define score means for each group.
9. Calculate score standard deviation.
10. Compute Z-scores for each group.



### Example 151
> **Summary**: Generates a one-way analysis to identify significant predictors of oxygen consumption in the Fitness data table, utilizing all pairs comparisons and equivalence tests with pooled variance.

<!-- Keywords: #JSLScriptingLanguage, #One-WayAnalysis, #EquivalenceTests, #PooledVariance, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Oneway(
	Y( :Sepal length ),
	X( :Species ),
	All Pairs( 1 ),
	With Control( 1, {"setosa"} ),
	Equivalence Tests( 1, 0.05, "Pooled Variance", "Superiority Greater" ),
	Equivalence Tests( 1, 0.05, "Pooled Variance", "Noninferiority Greater" )
);
rpt = Report( obj );
WarningSupAct = rpt["Superiority Tests with Pooled Variance", "Superiority Tests", Text Box( 1 )] << Get Text;
WarningSupExp = "Note: No correction for multiple comparisons is made for the superiority tests.";
WarningNonInfAct = rpt["Noninferiority Tests with Pooled Variance", "Noninferiority Tests", Text Box( 1 )] << Get Text;
WarningNonInfExp = "Note: No correction for multiple comparisons is made for the noninferiority tests.";
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis.
3. Set Sepal length as Y.
4. Set Species as X.
5. Perform all pairs comparisons.
6. Include control group "setosa".
7. Conduct equivalence tests with pooled variance.
8. Test for superiority greater.
9. Test for noninferiority greater.
10. Extract warning texts for both tests.



### Example 152
> **Summary**: Runs the stepwise linear regression analysis on the Fitness data table to identify significant predictors of Oxygen consumption, including robust fit and report generation.

<!-- Keywords: #JSLScriptingLanguage, #StepwiseLinearRegression, #RobustFit, #DataAnalysis, #FitnessData -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Oneway( Y( :height ), X( :sex ), Freq( :weight ) );
obj << Robust Fit( 1 );
rpt = obj << report;
sig = (rpt[Outline Box( "Robust Fit" )][Number Col Box( "Sigma" )] << get)[1];
chi2 = (rpt[Outline Box( "Robust Fit" )][Number Col Box( "ChiSquare" )] << get)[1];
pVal = (rpt[Outline Box( "Robust Fit" )][Number Col Box( "PValue" )] << get)[1];
logWorth = (rpt[Outline Box( "Robust Fit" )][Number Col Box( "LogWorth" )] << get)[1];
est = rpt[Outline Box( "Robust Fit" )][Number Col Box( "Robust Mean" )] << get as matrix;
std = rpt[Outline Box( "Robust Fit" )][Number Col Box( "Std Error" )] << get as matrix;
huber_sigma = 3.409842708458;
huber_Chi2 = 89052.7562775259;
huber_pValue = 0;
huber_LogWorth = 19340.1332133005;
huber_mean = [61.5684493531749, 64.6932240257862];
huber_stderr = [0.00797007487683098, 0.00723860041062778];
```

**Code Explanation**:

1. Open data table.
2. Perform one-way ANOVA.
3. Apply robust fit.
4. Retrieve report object.
5. Extract Sigma value.
6. Extract ChiSquare value.
7. Extract PValue.
8. Extract LogWorth.
9. Extract Robust Mean.
10. Extract Std Error.



### Example 153
> **Summary**: Calculates Cohen's D and expected Cohen's D from a one-way ANOVA report, utilizing JMP scripting language.

<!-- Keywords: #JMPScriptingLanguage, #OneWayANOVA, #CohensD, #ExpectedCohensD, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Means( 1 );
rpt = Report( obj );
CohensDAct = (rpt["Oneway Anova", "Pooled t Test", Number Col Box( 5 )] << Get)[1];
Diff = rpt["Oneway Anova", "Pooled t Test", Number Col Box( 1 )] << Get;
M1 = (rpt["Oneway Anova", "Means for Oneway Anova", Number Col Box( "Mean" )] << Get)[1];
M2 = (rpt["Oneway Anova", "Means for Oneway Anova", Number Col Box( "Mean" )] << Get)[2];
SE1 = (rpt["Oneway Anova", "Means for Oneway Anova", Number Col Box( "Std Error" )] << Get)[1];
SE2 = (rpt["Oneway Anova", "Means for Oneway Anova", Number Col Box( "Std Error" )] << Get)[2];
n1 = (rpt["Oneway Anova", "Means for Oneway Anova", Number Col Box( "Number" )] << Get)[1];
n2 = (rpt["Oneway Anova", "Means for Oneway Anova", Number Col Box( "Number" )] << Get)[2];
S1 = Sqrt( SE1 * SE1 * n1 );
S2 = Sqrt( SE2 * SE2 * n2 );
Sp = Sqrt( ((n1 - 1) * s1 ^ 2 + (n2 - 1) * s2 ^ 2) / (n1 + n2 - 2) );
CohensDExp = (M2 - M1) / Sp;
```

**Code Explanation**:

1. Open data table.
2. Perform one-way ANOVA on height by sex.
3. Display means in report.
4. Extract Cohen's D from report.
5. Extract mean difference from report.
6. Extract first mean value.
7. Extract second mean value.
8. Extract first standard error.
9. Extract second standard error.
10. Extract first sample size.
11. Extract second sample size.
12. Calculate first standard deviation.
13. Calculate second standard deviation.
14. Calculate pooled standard deviation.
15. Calculate expected Cohen's D.



### Example 154
> **Summary**: Runs a one-way ANOVA analysis to identify significant predictors of oxygen consumption in the Fitness data table, utilizing the Steel-Dwass test and generating a report.

<!-- Keywords: #JSLScriptingLanguage, #OneWayANOVA, #SteelDwassTest, #ReportGeneration, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Oneway( Y( :height ), X( :age ), "Steel-Dwass All Pairs"n( 1 ) );
rpt = Report( obj );
letter_exp = List( strings( "A", "A", "A", "A", "A", "A" ) );
```

**Code Explanation**:

1. Open data table.
2. Perform One-Way ANOVA.
3. Use Steel-Dwass test.
4. Create report object.
5. Define expected letter list.



### Example 155
> **Summary**: Runs a stepwise linear regression analysis on the Fitness data table to identify significant predictors of Oxygen consumption, utilizing Oneway and Power features in JMP.

<!-- Keywords: #JSLScriptingLanguage, #StepwiseRegression, #LinearRegression, #OxygenConsumption, #FitnessData -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Oneway( Y( :height ), X( :age ) );
obj << Power(
	Alpha( 0.05 ),
	Sigma( 3.38255845192249 ),
	Delta( 2.79679344454119 ),
	Number( 10, 100, 5 ),
	Solve for Least Significant Value,
	Power Plot,
	Done
);
```

**Code Explanation**:

1. Open data table;
2. Create Oneway plot.
3. Set alpha level.
4. Specify sigma value.
5. Define delta value.
6. Set number range.
7. Solve for least significant value.
8. Generate power plot.
9. Complete power analysis setup.



### Example 156
> **Summary**: Generates a one-way analysis to identify significant predictors of oxygen consumption in the Fitness data table, utilizing box plots and a reference line.

<!-- Keywords: #JMPScriptingLanguage, #One-WayAnalysis, #BoxPlots, #ReferenceLine, #StepwiseLinearRegression -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Oneway( Y( :Oxy ), X( :sex ), Box Plots( 1 ), Mean Diamonds( 0 ), Yaxis( Add Ref Line( 50, Dotted, Red ) ) );
scr = obj << get script;
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis.
3. Set Y variable to Oxy.
4. Set X variable to sex.
5. Enable Box Plots.
6. Disable Mean Diamonds.
7. Add reference line at Y=50.
8. Customize line style to dotted.
9. Set line color to red.
10. Retrieve analysis script.



### Example 157
> **Summary**: Runs a stepwise linear regression analysis to identify significant predictors of oxygen consumption in the Fitness data table, utilizing Oneway and Wilcoxon tests.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #WilcoxonTest, #LinearRegression, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ow = Oneway( Y( :height, :weight ), X( :age ), Each Pair( 1 ), Box Plots( 0 ), Mean Diamonds( 0 ), Comparison Circles( 1 ), By( :sex ) );
owr = Report( ow[1] );
dt2 = owr[Table Box( 2 )] << make combined data table;
Close( dt, No Save );
Close( dt2, No Save );
Random Reset( 111111 );
dt = New Table( "Test",
	Add Rows( 300 ),
	New Column( "Y", Formula( Random Normal() ) ),
	New Column( "X", Formula( Random Integer( 1, 2 ) ) )
);
dt << Run Formulas;
Oneway( Y( :Y ), X( :X ), Wilcoxon Test( 1 ), );
```

**Code Explanation**:

1. Open data table;
2. Perform Oneway analysis.
3. Extract report from analysis.
4. Create combined data table.
5. Close original tables without saving.
6. Reset random seed.
7. Create new table "Test".
8. Add rows and columns.
9. Run formulas in new table.
10. Perform Oneway analysis on new table.



### Example 158
> **Summary**: Generates a one-way analysis to identify significant predictors of oxygen consumption in the Fitness data table, grouping results by sex.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #DataVisualization, #StepwiseRegression, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ow = Oneway( Y( :height, :weight ), X( :age ), Each Pair( 1 ), Box Plots( 0 ), Mean Diamonds( 0 ), Comparison Circles( 1 ), By( :sex ) );
owr = Report( ow[1] );
dt2 = owr[Table Box( 2 )] << make combined data table;
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis.
3. Set Y variables: height, weight.
4. Set X variable: age.
5. Enable Each Pair comparison.
6. Disable Box Plots.
7. Disable Mean Diamonds.
8. Enable Comparison Circles.
9. Group by sex.
10. Extract and combine data table.



### Example 159
> **Summary**: Creates an oneway plot to visualize the relationship between height and age, with sex as a matching variable, and customizes report colors.

<!-- Keywords: #JMPScriptingLanguage, #OnewayPlot, #Customization, #MatchingVariable, #ReportColors -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ow = Oneway(
	Y( :height ),
	X( :age ),
	Matching Column( :sex ),
	Box Plots( 0 ),
	Mean Diamonds( 0 ),
	X Axis proportional( 0 ),
	Matching Lines( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Plot", FrameBox, DispatchSeg( Line Seg( 1 ), Line Color( black ) ) ),
		Dispatch( {}, "Oneway Plot", FrameBox, DispatchSeg( Line Seg( 2 ), Line Color( purple ) ) )
	)
);
scr = ow << get script;
bch = Expr(
	Dispatch( {}, "Oneway Plot", FrameBox,
		{DispatchSeg( Line Seg( 1 ), {Line Color( "Black" )} ), DispatchSeg( Line Seg( 2 ), {Line Color( "Purple" )} )}
	)
);
ow << close window;
Delete Symbols( ow, scr, act, bch );
act = Expr(
	Oneway( Y( :height ), X( :age ), Plot Actual by Quantile( 1 ), Plot Quantile by Actual( 1 ) )
);
ow = Eval( act );
scr = ow << get script;
ow << close window;
Delete Symbols( ow, act, scr, jrn );
```

**Code Explanation**:

1. Open data table;
2. Create oneway plot.
3. Set Y variable to height.
4. Set X variable to age.
5. Match by sex.
6. Disable box plots.
7. Disable mean diamonds.
8. Set X axis proportional.
9. Enable matching lines.
10. Customize report colors.



### Example 160
> **Summary**: Runs an equivalence test analysis on the height variable with sex as a predictor, utilizing pooled variance and a significance level of 0.05.

<!-- Keywords: #EquivalenceTest, #OnewayAnalysis, #PooledVariance, #SignificanceLevel, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = (dt << Oneway( Y( :height ), X( :sex ), Equivalence Tests( 6, 0.05, "Pooled Variance", "Equivalence Trial" ) ));
```

**Code Explanation**:

1. Open data table;
2. Create oneway analysis object.
3. Set Y variable to height.
4. Set X variable to sex.
5. Enable equivalence tests.
6. Set lower limit to 6.
7. Set significance level to 0.05.
8. Use pooled variance method.
9. Specify equivalence trial type.



### Example 161
> **Summary**: Generates a one-way analysis to identify significant predictors of height based on sex, utilizing the Steel with Control method and retrieving the report in XML format.

<!-- Keywords: #JMPScriptingLanguage, #One-WayAnalysis, #SteelwithControl, #XMLReport, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
rpt = Oneway( Y( :height ), X( :sex ), Steel With Control( 1, {"M"} ) );
rpt << Get XML;
```

**Code Explanation**:

1. Open data table.
2. Perform one-way analysis.
3. Set Y variable to height.
4. Set X variable to sex.
5. Apply steel with control method.
6. Specify control group as "M".
7. Retrieve analysis report XML.



### Example 162
> **Summary**: Runs a stepwise linear regression analysis on the Fitness data table to identify significant predictors of Oxygen consumption, including robust means lines and Cauchy fit.

<!-- Keywords: #JSLScriptingLanguage, #StepwiseLinearRegression, #RobustMeansLines, #CauchyFit, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Oneway( Y( :height ), X( :sex ), Robust Means Lines( 1 ), Cauchy Fit( 1 ), CDF Plot( 1 ) );
rpt = Report( obj );
obj2 = obj << redo analysis;
rpt2 = Report( obj2 );
```

**Code Explanation**:

1. Open data table.
2. Perform One-Way ANOVA.
3. Include robust means lines.
4. Apply Cauchy fit.
5. Generate CDF plot.
6. Retrieve initial report.
7. Redo the analysis.
8. Retrieve updated report.



### Example 163
> **Summary**: Generates a one-way analysis to identify significant predictors of weight based on age, with an equivalence test set at 20.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #EquivalenceTest, #RegressionAnalysis, #DataScience -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Oneway( Y( :weight ), X( :age ), Equivalence Test( 20 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data_table data
2. Create Oneway analysis.
3. Set Y variable to weight.
4. Set X variable to age.
5. Enable Equivalence Test.
6. Set equivalence limit to 20.
7. Generate analysis report.



### Example 164
> **Summary**: Analyze a data table to identify significant predictors of oxygen consumption using stepwise linear regression, and visualizes the results in a scatterplot with customized legend colors.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #EquivalenceTests, #Scatterplot, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Oneway(
	Y( :weight ),
	X( :age ),
	Equivalence Tests( 20, 0.05, "Pooled Variance", "Equivalence", Equivalence Tests Scatterplot( 1 ) ),
	SendToReport(
		Dispatch( {"Equivalence Tests with Pooled Variance", "Scatterplot"}, "101", ScaleBox,
			{Legend Model(
				1,
				Properties( 0, {Line Color( 0 )}, Item ID( "Equivalent", 1 ) ),
				Properties( 1, {Line Color( 24 )}, Item ID( "Not Equivalent", 1 ) )
			)}
		)
	)
);
rpt = obj << report;
jrn = rpt["Scatterplot"] << Get Journal;
col1_act = Regex( jrn, "Line age:12 - age:14.*?color\(([0-9]+)", "\1" );
col2_act = Regex( jrn, "Line age:12 - age:15.*?color\(([0-9]+)", "\1" );
 
Close( dt, nosave );
dt = Open("data_table.jmp");
obj = dt << Oneway( Y( :weight ), X( :age ), Equivalence Test( 20 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Perform Oneway analysis.
3. Set equivalence tests parameters.
4. Customize scatterplot legend colors.
5. Retrieve scatterplot journal.
6. Extract color values for specific lines.
7. Close "data_table.jmp" without saving.
8. Reopen "data_table.jmp".
9. Perform Oneway analysis without equivalence tests.
10. Retrieve report.



### Example 165
> **Summary**: Generates a one-way analysis to identify significant predictors of oxygen consumption in the Fitness data table, displaying means, box plots, and histograms with customized axis settings.

<!-- Keywords: #JMPScriptingLanguage, #One-WayAnalysis, #BoxPlots, #Histograms, #CustomAxisSettings -->

**Code**:
```jsl
dt = Open("data_table.jmp");
One = Oneway( Y( :height ), X( :sex ), Means( 1 ), Box Plots( 0 ), Mean Diamonds( 1 ) );
One << X Axis proportional( 0 );
One << Set Alpha Level( 0.10 ) << Median Test( 1 );
One << Box Plots( 1 ) << Mean Lines( 1 ) << Mean Diamonds( 0 ) << Grand Mean( 0 ) << Mean of Means( 1 );
One << Histograms( 1 );
Report( One )[axisBox( 1 )] << axis settings( Min( 75 ), Max( 50 ) );
One << close window;
```

**Code Explanation**:

1. Open data table.
2. Create one-way analysis.
3. Display means.
4. Hide box plots initially.
5. Show mean diamonds.
6. Set alpha level to 0.10.
7. Enable median test.
8. Show box plots.
9. Add mean lines.
10. Hide mean diamonds.
11. Disable grand mean display.
12. Show mean of means.
13. Display histograms.
14. Adjust axis settings.
15. Close analysis window.



### Example 166
> **Summary**: Generates a one-way analysis to compare means of Salary based on Age Group, utilizing control levels and Dunnett's method for comparisons.

<!-- Keywords: #JSLScriptingLanguage, #OneWayAnalysis, #MeansComparisons, #DunnettsMethod, #ControlLevels -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Oneway( X( :Age Group ), Y( :Salary ), With Control( 1, {1} ) );
rpt = Report( obj );
onewayBaselineNoCont = rpt["Means Comparisons", "Comparisons with a control using Dunnett's Method", Text Box( 2 )] << Get Text;
```

**Code Explanation**:

1. Open data table.
2. Perform one-way analysis.
3. Set age group as X variable.
4. Set salary as Y variable.
5. Include control level.
6. Generate report object.
7. Access means comparisons section.
8. Use Dunnett's method for comparisons.
9. Retrieve text box content.
10. Extract comparison results text.



### Example 167
> **Summary**: Generates a one-way analysis to identify significant predictors of oxygen consumption in the Fitness data table, utilizing the Wilcoxon test and excluding all graphs.

<!-- Keywords: #JMPScriptingLanguage, #One-WayAnalysis, #WilcoxonTest, #DataTableOperations, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ow_obj = dt << Oneway( Y( :height, :weight ), X( :sex ), Wilcoxon( 1 ), All Graphs( 0 ) );
```

**Code Explanation**:

1. Open data table.
2. Create oneway analysis object.
3. Set response variables.
4. Set factor variable.
5. Enable Wilcoxon test.
6. Disable all graphs.



### Example 168
> **Summary**: Generates a one-way analysis to identify significant predictors of age, utilizing the Wilcoxon test and considering country and size as potential factors.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #WilcoxonTest, #PredictorIdentification, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ow_obj = dt << Oneway( Y( :age ), X( :country, :size ), Wilcoxon( 1 ), All Graphs( 0 ) );
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis object.
3. Set response variable to "age".
4. Add predictors: "country", "size".
5. Enable Wilcoxon test.
6. Disable all graphs display.



### Example 169
> **Summary**: Generates a one-way analysis to identify significant predictors of age based on marital status and sex, utilizing the Wilcoxon test.

<!-- Keywords: #JSLScriptingLanguage, #One-WayAnalysis, #WilcoxonTest, #ByGrouping, #Oneway -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ow_obj = dt << Oneway( Y( :age ), X( :marital status ), By( :sex ), Wilcoxon( 1 ), All Graphs( 0 ) );
```

**Code Explanation**:

1. Open data table;
2. Create Oneway analysis.
3. Set Y variable to :age.
4. Set X variable to :marital status.
5. Group by :sex.
6. Enable Wilcoxon test.
7. Disable all graphs.



### Example 170
> **Summary**: Analyze oxygen consumption data by performing one-way analysis on height by sex, running Wilcoxon and Median tests, and extracting journal information.

<!-- Keywords: #JSLScriptingLanguage, #One-WayAnalysis, #WilcoxonTest, #MedianTest, #JournalExtraction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ow = Oneway( Y( :height ), X( :sex ) );
rpt = Report( ow );
testexp = Expr(
	jrn = Try( rpt[Outline Box( _s_ )] << get journal, {} )
);
ow << Wilcoxon Exact Test( 1 );
Eval( Substitute( Name Expr( testexp ), Expr( _s_ ), "Wilcoxon / Kruskal-Wallis Tests (Rank Sums)", Expr( _res_ ), 0 ) );
isPro = 1;
If( isPro,
	ow << Wilcoxon Test( 0 )
);
ow << Wilcoxon Test( 1 );
Eval( Substitute( Name Expr( testexp ), Expr( _s_ ), "Wilcoxon / Kruskal-Wallis Tests (Rank Sums)", Expr( _res_ ), 1 ) );
ow << Wilcoxon Test( 0 );
ow << Median Exact Test( 1 );
Eval( Substitute( Name Expr( testexp ), Expr( _s_ ), "Median Test (Number of Points Above Median)", Expr( _res_ ), 0 ) );
If( isPro,
	ow << Median Test( 0 )
);
ow << Median Test( 1 );
Eval( Substitute( Name Expr( testexp ), Expr( _s_ ), "Median Test (Number of Points Above Median)", Expr( _res_ ), 1 ) );
ow << Median Test( 0 );
ow << Van Der Waerden Exact Test( 1 );
Eval( Substitute( Name Expr( testexp ), Expr( _s_ ), "Van der Waerden Test (Normal Quantiles)", Expr( _res_ ), 0 ) );
If( isPro,
	ow << van der Waerden Test( 0 )
);
ow << van der Waerden Test( 1 );
Eval( Substitute( Name Expr( testexp ), Expr( _s_ ), "Van der Waerden Test (Normal Quantiles)", Expr( _res_ ), 1 ) );
ow << van der Waerden Test( 0 );
ow << Kolmogorov Smirnov Exact Test( 1 );
jrn = Try( rpt[Outline Box( "Kolmogorov Smirnov Two-Sample Test" )] << get journal, {} );
If( isPro,
	ow << Kolmogorov Smirnov Test( 0 )
);
ow << Kolmogorov Smirnov Test( 1 );
jrn = Try( rpt[Outline Box( "Kolmogorov Smirnov Two-Sample Test" )] << get journal, {} );
ow << Kolmogorov Smirnov Test( 0 );
```

**Code Explanation**:

1. Open data table;
2. Perform one-way analysis on height by sex.
3. Create report from one-way analysis.
4. Define expression for extracting journal.
5. Run Wilcoxon Exact Test.
6. Evaluate expression with test results.
7. Set isPro flag to 1.
8. Run Wilcoxon Test if isPro is true.
9. Run Wilcoxon Test.
10. Evaluate expression with test results.



### Example 171
> **Summary**: Creates an Oneway analysis object to visualize the relationship between height and sex, with means display and mean diamonds enabled.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #MeansDisplay, #MeanDiamonds, #SendToReport -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Oneway(
	Y( :height ),
	X( :sex ),
	Means( 1 ),
	Mean Diamonds( 1 ),
	SendToReport(
		Dispatch( {}, "Oneway Plot", FrameBox,
			{Frame Size( 511, 444 ), Marker Size( 6 ), Marker Drawing Mode( "Outlined" ), DispatchSeg(
				Marker Seg( 1 ),
				{Color( {255, 128, 0} )}
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Oneway analysis object.
3. Set response variable to height.
4. Set factor variable to sex.
5. Enable means display.
6. Enable mean diamonds.
7. Send report settings.
8. Adjust frame size.
9. Set marker size.
10. Change marker drawing mode.



## Oneway using Fit Group
### Example 1
> **Summary**: Opens a data table, performs two Oneway analyses with means and standard deviations, box plots, mean error bars, and standard deviation lines for Specific Gravity and Tensile Strength response variables, and Supplier factor variable.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #DataVisualization, #MeansandStandardDeviations, #BoxPlots -->

**Code**:
```jsl
// Oneway
// Open data table
dt = Open("data_table.jmp");
// Oneway
Fit Group(
	Oneway(
		Y( :Specific Gravity ),
		X( :Supplier ),
		Means and Std Dev( 1 ),
		Box Plots( 1 ),
		Mean Error Bars( 1 ),
		Std Dev Lines( 1 )
	),
	Oneway(
		Y( :Tensile Strength ),
		X( :Supplier ),
		Means and Std Dev( 1 ),
		Box Plots( 1 ),
		Mean Error Bars( 1 ),
		Std Dev Lines( 1 )
	),
	<<{Arrange in Rows( 1 )}
);
```

**Code Explanation**:

1. Open data table.
2. Perform Oneway analysis.
3. Set response variable: Specific Gravity.
4. Set factor variable: Supplier.
5. Display means and standard deviations.
6. Show box plots.
7. Include mean error bars.
8. Add standard deviation lines.
9. Repeat Oneway analysis.
10. Set response variable: Tensile Strength.



### Example 2
> **Summary**: Analyze height data by age and sex, generating a report with box plots and ANOM plots, and customizing box plot segments.

<!-- Keywords: #JMPScriptingLanguage, #FitGroup, #BoxPlots, #ANOM, #ReportGeneration -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Fit Group(
	Oneway( Y( :height ), X( :age ), Quantiles( 1 ), Box Plots( 1 ) ),
	Oneway( Y( :height ), X( :sex ), ANOM( 1, Point Options( "Show Needles" ) ) ),
	<<{Arrange in Rows( 2 )},
	SendToReport(
		Dispatch( {"Oneway Analysis of height By age"}, "Oneway Plot", FrameBox,
			{DispatchSeg( Box Plot Seg( 1 ), {Box Style( "Outlier" ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 2 ), {Box Style( "Outlier" ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 3 ), {Box Style( "Outlier" ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 4 ), {Box Style( "Outlier" ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 5 ), {Box Style( "Outlier" ), Line Color( "Red" )} ),
			DispatchSeg( Box Plot Seg( 6 ), {Box Style( "Outlier" ), Line Color( "Red" )} )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create fit group object.
3. Perform oneway analysis by age.
4. Include quantiles and box plots.
5. Perform oneway analysis by sex.
6. Include ANOM and show needles.
7. Arrange plots in rows.
8. Send report to window.
9. Customize box plot segments.
10. Set box style and line color.



### Example 3
> **Summary**: Runs a two-way oneway analysis with Wilcoxon test to compare age distribution across marital status and sex groups, disabling all graphs.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #WilcoxonTest, #GroupedData, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ow_obj = dt << Fit Group(
	Oneway( Y( :age ), X( :marital status ), Wilcoxon( 1 ), All Graphs( 0 ) ),
	Oneway( Y( :age ), X( :marital status ), By( :sex ), Wilcoxon( 1 ), All Graphs( 0 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create oneway analysis.
3. Set Y variable to :age.
4. Set X variable to :marital status.
5. Use Wilcoxon test.
6. Disable all graphs.
7. Create grouped oneway analysis.
8. Set Y variable to :age.
9. Set X variable to :marital status.
10. Group by :sex.



### Example 4
> **Summary**: Fits two one-way Wilcoxon tests to analyze the relationship between height and sex, and weight and age in a data table.

<!-- Keywords: #JMPScriptingLanguage, #WilcoxonTest, #OneWayANOVA, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ow_obj = dt << Fit Group(
	Oneway( Y( :height ), X( :sex ), Wilcoxon( 1 ), All Graphs( 0 ) );
	Oneway( Y( :weight ), X( :age ), Wilcoxon( 1 ), All Graphs( 0 ) );
);
```

**Code Explanation**:

1. Open data table;
2. Create new object `ow_obj`.
3. Fit group analysis initiated.
4. Perform Oneway on height.
5. Set sex as independent variable.
6. Apply Wilcoxon test.
7. Disable all graphs.
8. Perform Oneway on weight.
9. Set age as independent variable.
10. Apply Wilcoxon test.



## Oneway using New Window
### Example 1
> **Summary**: Creates two interactive windows for exploratory data analysis, featuring Column Switchers and Oneway plots to visualize relationships between weight, age, sex, and height.

<!-- Keywords: #JSLScriptingLanguage, #ColumnSwitcher, #OnewayPlot, #InteractiveDataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "where switcher",
	wherecs = dt << Column Switcher( :weight, {:weight, :height} ),
	wherep = dt << Oneway( X( :age ), Y( :weight ), Where( :sex == "M" ) )
);
wherecs << Link ( wherep );
wherecs << Set Current( "height" );
New Window( "where switcher",
	bycs = dt << Column Switcher( :weight, {:weight, :height} ),
	byp = dt << Oneway( X( :age ), Y( :weight ), By( :sex ) )
);
bycs << Link ( byp[1] );
bycs << Link ( byp[2] );
```

**Code Explanation**:

1. Open data table;
2. Create new window "where switcher".
3. Initialize Column Switcher for weight.
4. Create Oneway plot for males.
5. Link Column Switcher to Oneway plot.
6. Set Column Switcher to height.
7. Create new window "where switcher".
8. Initialize Column Switcher for weight.
9. Create Oneway plot by sex.
10. Link Column Switcher to both Oneway plots.



### Example 2
> **Summary**: Creates two 'where switcher' windows for exploratory data analysis, utilizing Column Switchers and OneWay platforms to analyze weight by age and sex.

<!-- Keywords: #JSLScriptingLanguage, #ColumnSwitcher, #OneWay, #DataAnalysis, #ExploratoryDataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "where switcher",
	wherecs = dt << Column Switcher( :weight, {:weight, :height} ),
	wherep = dt << Oneway( X( :age ), Y( :weight ), Where( :sex == "M" ) )
);
wherecs << Link ( wherep );
wherecs << Set Current( "height" );
New Window( "where switcher",
	bycs = dt << Column Switcher( :weight, {:weight, :height} ),
	byp = dt << Oneway( X( :age ), Y( :weight ), By( :sex ) )
);
bycs << Link ( byp[1] );
bycs << Link ( byp[2] );
bycs << Set Current( "height" );
```

**Code Explanation**:

1. Open data table.
2. Create "where switcher" window.
3. Add Column Switcher for weight.
4. Perform OneWay analysis on weight by age, where sex is male.
5. Link Column Switcher to OneWay platform.
6. Set Column Switcher to height.
7. Create another "where switcher" window.
8. Add Column Switcher for weight.
9. Perform OneWay analysis on weight by age, by sex.
10. Link Column Switcher to both OneWay platforms.
11. Set Column Switcher to height.



### Example 3
> **Summary**: Generates a one-way analysis with column switching and local data filtering to analyze SO2 levels by Region, while also setting the current column to 'OZONE' and clearing the filter.

<!-- Keywords: #JMP, #OneWayAnalysis, #ColumnSwitcher, #LocalDataFilter, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
w = New Window( "oneway app", ow = dt << Oneway( Y( :SO2 ), X( :Region ) ) );
cs = ow << Column Switcher( :SO2, {:OZONE, :SO2} );
df = ow << Local Data Filter( Add Filter( columns( :POP ), Where( :POP >= 90.5 & :POP <= 91.5 ) ) );
cs << Set Current( "OZONE" );
df << Clear();
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Fit one-way analysis.
4. Add column switcher.
5. Add local data filter.
6. Set current column to "OZONE".
7. Clear local data filter.



### Example 4
> **Summary**: Creates an Oneway analysis with a Column Switcher and Local Data Filter to analyze ozone levels by region, filtering for specific population ranges.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #ColumnSwitcher, #LocalDataFilter, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
w = New Window( "oneway app", ow = dt << Oneway( Y( :OZONE ), X( :Region ) ) );
cs = ow << Column Switcher( :OZONE, {:OZONE, :SO2} );
df = ow << Local Data Filter( Add Filter( columns( :POP ), Where( :POP >= 90.5 & :POP <= 91.5 ) ) );
cs << Set Current( "SO2" );
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Fit Oneway analysis.
4. Add Column Switcher.
5. Add Local Data Filter.
6. Set filter conditions.
7. Switch to SO2 column.



### Example 5
> **Summary**: Generates a one-way analysis with local data filtering and column switching for SO2 variables in a specified region, while modifying OZONE values at specific rows.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #ColumnSwitcher, #LocalDataFilter, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
w = New Window( "oneway",
	oneway = dt << Oneway(
		Y( :SO2 ),
		X( :Region ),
		Local Data Filter( Add Filter( columns( :POP ), Where( :POP >= 90.5 & :POP <= 91.5 ) ) )
	)
);
cs = oneway << Column Switcher( :SO2, {:OZONE, :SO2} );
cs << Set Current( "OZONE" );
dt:OZONE[10] = dt:OZONE[17] = 0.01;
```

**Code Explanation**:

1. Open data table;
2. Create new window named "oneway".
3. Perform Oneway analysis.
4. Set Y variable to SO2.
5. Set X variable to Region.
6. Add local data filter.
7. Filter POP between 90.5 and 91.5.
8. Enable Column Switcher for SO2.
9. Set current column to OZONE.
10. Modify OZONE values at rows 10 and 17.



### Example 6
> **Summary**: Runs a series of one-way analyses on SO2 and OZONE by Region, with local data filtering for POP between 90.5 and 91.5, and modifies OZONE values at specific rows.

<!-- Keywords: #JSL, #OneWayAnalysis, #ColumnSwitcher, #LocalDataFilter, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
w = New Window( "oneway app", ow = dt << Oneway( Y( :SO2 ), X( :Region ) ) );
cs = ow << Column Switcher( :SO2, {:OZONE, :SO2} );
df = ow << Local Data Filter( Add Filter( columns( :POP ), Where( :POP >= 90.5 & :POP <= 91.5 ) ) );
cs << Set Current( "OZONE" );
df << Clear();
dt = Open("data_table.jmp");
w = New Window( "oneway app", ow = dt << Oneway( Y( :OZONE ), X( :Region ) ) );
cs = ow << Column Switcher( :OZONE, {:OZONE, :SO2} );
df = ow << Local Data Filter( Add Filter( columns( :POP ), Where( :POP >= 90.5 & :POP <= 91.5 ) ) );
cs << Set Current( "SO2" );
dt = Open("data_table.jmp");
w = New Window( "oneway",
	oneway = dt << Oneway(
		Y( :SO2 ),
		X( :Region ),
		Local Data Filter( Add Filter( columns( :POP ), Where( :POP >= 90.5 & :POP <= 91.5 ) ) )
	)
);
cs = oneway << Column Switcher( :SO2, {:OZONE, :SO2} );
cs << Set Current( "OZONE" );
dt:OZONE[10] = dt:OZONE[17] = 0.01;
```

**Code Explanation**:

1. Open data table;
2. Create new window "oneway app".
3. Perform one-way analysis on SO2 by Region.
4. Add column switcher for SO2 and OZONE.
5. Add local data filter for POP between 90.5 and 91.5.
6. Set current column to OZONE.
7. Clear local data filter.
8. Open data table;
9. Create new window "oneway app".
10. Perform one-way analysis on OZONE by Region.
11. Add column switcher for OZONE and SO2.
12. Set current column to SO2.
13. Open data table;
14. Create new window "oneway".
15. Perform one-way analysis on SO2 by Region with local data filter.
16. Add column switcher for SO2 and OZONE.
17. Set current column to OZONE.
18. Modify OZONE values at rows 10 and 17 to 0.01.



### Example 7
> **Summary**: Creates a new window with an Oneway analysis and detailed coordinates for the first three dimensions, utilizing the  platform.

<!-- Keywords: #JMPScriptingLanguage, #, #OnewayAnalysis, #Coordinates, #DimensionalityReduction -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", Invisible );
New Window( "ColIDShadingDoesNotSpanTitle", extra = V List Box(), plat = ( dt, Oneway( Y( :height ), X( :sex ), Means( 1 ) ) ) );
plat << Visibility( "Collapse" );
extra << Append( plat["Oneway Anova", "Analysis of Variance", Table Box( 1 )] );
extra[Table Box( 1 )] << Margin( 30 ) << Padding( 0 );
```

**Code Explanation**:

1. Open data table;
2. Create new window.
3. Add vertical list box.
4. Perform Oneway analysis.
5. Collapse platform visibility.
6. Append analysis results.
7. Adjust margin settings.
8. Set padding to zero.



### Example 8
> **Summary**: Creates a new window with a platform object, collapsing its visibility and appending an analysis to an extra list box, while setting margins and padding for table boxes.

<!-- Keywords: #JMPScriptingLanguage, #NewWindow, #Object, #Visibility, #TableBox -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", Invisible );
New Window( "ColIDShadingDoesNotSpanTitle", extra = V List Box(), plat = ( dt, Oneway( Y( :height ), X( :sex ), Means( 1 ) ) ) );
plat << Visibility( "Collapse" );
extra << Append( plat["Oneway Anova", "Analysis of Variance", Table Box( 1 )] );
extra[Table Box( 1 )] << Margin( 30 ) << Padding( 0 );
extra[String Col Box( 1 )] << Padding( Left( 20 ), Right( 20 ) );
```

**Code Explanation**:

1. Open data_table data
2. Create new window.
3. Initialize platform object.
4. Collapse platform visibility.
5. Append analysis to extra.
6. Set margin for table box.
7. Set padding for table box.
8. Set padding for string column box.



### Example 9
> **Summary**: Creates a shared local filter window with data filtering and Oneway analysis for age 12 and 13, utilizing Data Filter Context Box and H List Box.

<!-- Keywords: #JMPScriptingLanguage, #DataFilter, #OnewayAnalysis, #LocalFilter, #SharedWindow -->

**Code**:
```jsl
dt = Open("data_table.jmp");
win = New Window( "Shared Local Filter",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter( Local, ),
			( dt, Oneway( Y( :height ), X( :sex ), Automatic Recalc( 1 ), Means( 1 ), Mean Diamonds( 1 ), Where( :age == 12 ) ) ),
			( dt, Oneway( Y( :height ), X( :sex ), Automatic Recalc( 1 ), Means( 1 ), Mean Diamonds( 1 ), Where( :age == 13 ) ) )
		)
	)
);
dt << Data Filter( Location( {170, 292} ), Conditional, Mode( Select( 0 ), Show( 1 ), Include( 1 ) ), Add Filter( columns( :age ) ) );
text5 = win[Text Box( 4 )] << Get Text;
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "Shared Local Filter".
3. Add Data Filter Context Box to window.
4. Create horizontal list box.
5. Add local data filter to list box.
6. Add Oneway analysis for age 12.
7. Add Oneway analysis for age 13.
8. Set data filter location.
9. Set data filter mode to conditional.
10. Add filter for age column.



## Oneway using Column
### Example 1
> **Summary**: Generates a one-way analysis with mahalanobis distances to explore relationships between 'distance from head to toe' and 'sex', utilizing JMP's Oneway platform.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #MahalanobisDistance, #DataTableManipulation, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << Set Name( "distance from head to toe" );
ow = dt << Oneway(
	Y( :distance from head to toe ),
	X( :sex ),
	SendToReport( Dispatch( {}, "distance from head to toe", TextEditBox, {Rotate Text( "Horizontal" ), Fixed Size( 1, 71, 55 )} ) )
);
ow << Save Script to Data Table;
ow << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Rename height column.
3. Create OneWay analysis.
4. Set Y variable.
5. Set X variable.
6. Rotate axis title.
7. Fix axis title size.
8. Save script to data table.
9. Close report window.



### Example 2
> **Summary**: Creates and customizes an oneway analysis to examine the relationship between 'distance from head to toe' and 'sex', with interactive features for script saving and running.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #Customization, #InteractiveFeatures, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << Set Name( "distance from head to toe" );
ow = dt << Oneway(
	Y( :distance from head to toe ),
	X( :sex ),
	SendToReport( Dispatch( {}, "distance from head to toe", TextEditBox, {Rotate Text( "Horizontal" ), Fixed Size( 1, 71, 55 )} ) )
);
ow << Save Script to Data Table;
ow << Close Window;
dt << Run Script( "Oneway of distance from head to toe by sex" );
```

**Code Explanation**:

1. Open data table.
2. Rename height column.
3. Create oneway analysis.
4. Rotate axis title.
5. Fix axis title size.
6. Save script to data table.
7. Close oneway window.
8. Run saved script.



## Oneway using For Each
> **Summary**: Creates Oneway analysis plots for multiple presets, applying each preset to a data table and setting report titles accordingly.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #DataVisualization, #PresetManagement, #ReportCustomization -->

**Code**:
```jsl
plat_samples = ["Oneway" => {"Presentation Normality Plots", "Compare Distributions", "Compare Densities", "Student's t Tests",
"Nonparametric Tests", "Box Plots and Summary Statistics", "Test Variances"}, => {}];
dt = Open("data_table.jmp");
For Each( {sample}, plat_samples["Oneway"],
	obj = dt << Oneway( Y( :Height ), X( :Age ) );
	Eval( Eval Expr( obj << Apply Preset( "Sample Presets", Expr( sample ) ) ) );
	obj << Set Report Title( sample );
);
```

**Code Explanation**:

1. Define presets for Oneway analysis.
2. Open data table;
3. Iterate over each preset in Oneway analysis.
4. Create Oneway plot for Height vs. Age.
5. Apply current preset to the plot.
6. Set report title to current preset name.
7. Repeat steps 4-6 for all presets.



## Oneway using Set Row States
> **Summary**: Analyze height data by sex, generating a report with an Oneway analysis and customizable title.

<!-- Keywords: #JMPScriptingLanguage, #DataAnalysis, #OnewayAnalysis, #ReportGeneration, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:height << set name( "heightxaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaY" );
dt << Set Row States(
	[0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
obj = Oneway(
	Y( :heightxaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaY ),
	X( :sex ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of heightxaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaY By sex", OutlineBox,
			{Set Title( "Set Wrap for Axis Label" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Rename height column.
3. Set row states.
4. Perform one-way analysis.
5. Set report title.



## Oneway using For
### Example 1
> **Summary**: Generates a one-way analysis for continuous variables in the specified data table, utilizing the Distribution platform to visualize relationships between height and age.

<!-- Keywords: #JMPScriptingLanguage, #Distribution, #One-WayAnalysis, #ContinuousVariables, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
For( j = 1, j <= N Row( dt underTest ), j++,
	Row State( j ) = Marker State( Mod( j - 1, 16 ) )
);
dt underTest << Color By Column( :height );
dt underTest << Color To RGB( Color Of( Row State( 3 ) ) );
dt under test << Clear Row States;
obj = Oneway(
	Y( :height ),
	X( :age ),
	SendToReport( Dispatch( {}, "Oneway Analysis of height By age", OutlineBox, {Set Title( "Exercise Clear Row States" )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Loop through each row.
3. Set row state based on index.
4. Color rows by height column.
5. Get color from row state 3.
6. Clear all row states.
7. Perform one-way analysis.
8. Set Y variable to height.
9. Set X variable to age.
10. Rename report title.



### Example 2
> **Summary**: Generates a distribution analysis for continuous variables in the specified data table using the Distribution platform, with interactive features such as color by column and row selection.

<!-- Keywords: #JSLScriptingLanguage, #Distribution, #DataTableManipulation, #InteractiveAnalysis, #One-WayAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
For( j = 1, j <= N Row( dt underTest ), j++,
	Row State( j ) = Marker State( Mod( j - 1, 16 ) )
);
dt underTest << Color By Column( :height );
dt underTest << Color To RGB( Color Of( Row State( 3 ) ) );
dt under test << Select where( :age == 12 );
dt under test << Clear Selected Row States;
obj = Oneway(
	Y( :height ),
	X( :age ),
	SendToReport(
		Dispatch( {}, "Oneway Analysis of height By age", OutlineBox,
			{Set Title( "Exercise markers, Colors, Row Selection, and Clear Selected Row States" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Loop through each row.
3. Set marker state based on row index.
4. Color rows by height column.
5. Change color to RGB of third row's state.
6. Select rows where age is 12.
7. Clear selected row states.
8. Perform one-way analysis on height by age.
9. Set report title to specified text.



### Example 3
> **Summary**: Generates a distribution analysis for continuous variables in a specified data table using the Distribution platform.

<!-- Keywords: #Distribution, #OneWayANOVA, #KolmogorovSmirnovTest, #DataTableOperations, #JMPScriptingLanguage -->

**Code**:
```jsl
For( k = 1, k <= 3, k++,
	dt = Open("data_table.jmp");
	d = Oneway( Y( :height ), X( :sex ), Kolmogorov Smirnov Test( 1 ) );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Initialize loop counter k.
2. Set loop condition k <= 3.
3. Increment k by 1.
4. Open data table.
5. Perform One-Way ANOVA on height by sex.
6. Include Kolmogorov-Smirnov test.
7. Close data table without saving.
8. Repeat steps 3-7 until k > 3.



### Example 4
> **Summary**: Generates a one-way ANOVA analysis for continuous variables in a specified data table, utilizing the Oneway platform and enabling the Kolmogorov-Smirnov Test.

<!-- Keywords: #JSL, #Oneway, #KolmogorovSmirnovTest, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
For( k = 1, k <= 3, k++,
	dt = Open("data_table.jmp");
	d = Oneway(
		Y( :height ),
		X( :sex ),
		Kolmogorov Smirnov Test( 1 ),
		SendToReport(
			Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox,
				{Set Title( "Compare_Means, With Best, Hsu's MCB, With Control, Dunnett's" )}
			)
		)
	);
	Close( dt, no save );
);
```

**Code Explanation**:

1. Loop starts with k=1.
2. Open data table;
3. Perform One-Way ANOVA.
4. Set Y variable to :height.
5. Set X variable to :sex.
6. Enable Kolmogorov-Smirnov Test.
7. Send report to window.
8. Set title to "Compare_Means, With Best, Hsu's MCB, With Control, Dunnett's".
9. Close the data table without saving.
10. Loop continues until k=3.



## Oneway using Value Labels
> **Summary**: Analyze height by age, utilizing value labels and custom ordering for the age column, and generates a report with a customized title.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ValueLabels, #CustomOrdering, #OnewayAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
:age << Value Labels( {12 = "Twelve", 15 = "Fifteen"} );
:age << Add Column Properties( Value Ordering( {17, 16, 15, 14, 13, 12} ) );
obj = Oneway(
	Y( :height ),
	X( :age ),
	SendToReport( Dispatch( {}, "Oneway Analysis of height By age", OutlineBox, {Set Title( "Value Ordering, Value Labels" )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Apply value labels to age column.
3. Set value ordering for age column.
4. Perform one-way analysis.
5. Set title for report.



## Oneway using Select where
### Example 1
> **Summary**: Analyze height by sex, hiding and excluding rows where age is 12 or 13, and generating a report with an Oneway analysis.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #DataTableManipulation, #ReportGeneration, #ByGroups -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
dt under test << Select where( :age == 12 | :age == 13 );
dt under test << Hide and Exclude( 1 );
obj = Oneway(
	Y( :height ),
	X( :sex ),
	SendToReport( Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Check Hide & Exclude" )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Select rows where age is 12 or 13.
3. Hide and exclude selected rows.
4. Perform Oneway analysis.
5. Set Y variable to height.
6. Set X variable to sex.
7. Send report to window.
8. Rename report title to "Check Hide & Exclude".



### Example 2
> **Summary**: Analyze height by sex, generating a report with an Oneway analysis and labeling selected rows in a data table.

<!-- Keywords: #JSLScripting, #OnewayAnalysis, #DataLabeling, #ReportGeneration, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
dt under test << Select where( :age == 12 );
dt under test << Label( 1 );
obj = Oneway(
	Y( :height ),
	X( :sex ),
	SendToReport( Dispatch( {}, "Oneway Analysis of height By sex", OutlineBox, {Set Title( "Check Label" )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Select rows where age is 12.
3. Label selected rows with 1.
4. Create Oneway analysis.
5. Set Y variable as height.
6. Set X variable as sex.
7. Send report to window.
8. Dispatch to Oneway Analysis of height By sex.
9. Change title to "Check Label".
10. Assign object to obj variable.



## Oneway using Expr
> **Summary**: Creates a customized Oneway plot for height vs age, grouping by sex and applying various visualization options.

<!-- Keywords: #JSLScriptingLanguage, #OnewayPlot, #ByGroup, #Quantiles, #BoxPlots -->

**Code**:
```jsl
dt = Open("data_table.jmp");
 
stdows = Expr(
	Oneway(
		SendToByGroup( {:sex == "F"} ),
		Y( :height ),
		SendToByGroup( {:sex == "F"}, Y( :height ) ),
		SendToByGroup( {:sex == "M"}, Y( :height ) ),
		X( :age ),
		SendToByGroup( {:sex == "F"}, X( :age ), Quantiles( 1 ), Box Plots( 1 ) ),
		SendToByGroup( {:sex == "M"}, X( :age ), Means( 1 ), Mean Diamonds( 1 ) ),
		By( :sex )
	)
);
 
ow = dt << Oneway( Y( :height ), X( :age ), By( :sex ) );
 
ow[1] << Quantiles( 1 );
ow[2] << Name( "Means/Anova" )(1);
ow[1] << save bygroup script to data table;
```

**Code Explanation**:

1. Open data table;
2. Define `stdows` expression.
3. Create Oneway plot.
4. Group by sex for females.
5. Plot height for females.
6. Group by sex for females again.
7. Plot height for males.
8. Set age as X-axis.
9. Group by sex for females.
10. Add quantiles and box plots for females.
11. Group by sex for males.
12. Add means and mean diamonds for males.
13. Apply By( :sex ).
14. Create Oneway plot for height vs age.
15. Add quantiles to first plot.
16. Add Means/Anova to second plot.
17. Save ByGroup script to data table.



## Oneway using Time Series
> **Summary**: Creates a P chart to monitor the proportion of Total Plastic defects over time, with subgrouping by Week and phase variable by Location, using the Control Chart Builder platform.

<!-- Keywords: #TimeSeriesAnalysis, #ControlChartBuilder, #JMPScriptingLanguage, #QualityControl, #ProcessMonitoring -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Time Series(
	Y( :Log Passengers ),
	Variogram( 1 ),
	Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) ),
	Local Data Filter(
		Add Filter( columns( :Log Passengers ), Where( :Log Passengers >= 2.1 & :Log Passengers <= 2.5 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
obj << Automatic Recalc( 1 );
dt << Select Where( :Season == 10 );
dt << Exclude();
Close( dt, nosave );
dt = New Table( "fish",
	Add Rows( 13 ),
	New Script( "Oneway", Oneway( Y( :Name( "Toxin mg/kg" ) ), X( :Location ), Box Plots( 0 ), Mean Diamonds( 0 ) ) ),
	New Script( "Oneway ANOM", Oneway( Y( :Name( "Toxin mg/kg" ) ), X( :Location ), ANOM( 1, Point Options( "Show Needles" ) ) ) ),
	New Column( "Location", Character( 1 ), Nominal, Set Values( {"A", "A", "A", "B", "B", "B", "B", "B", "C", "C", "C", "C", "C"} ) ),
	New Column( "Toxin mg/kg",
		Numeric,
		Continuous,
		Format( "Best", 10 ),
		Set Values( [3.8, 3.2, 3.5, 5.3, 5.7, 5.6, 5.8, 5.6, 3.3, 2.9, 3.8, 3.3, 3.4] )
	)
);
obj = dt << Run Script( "Oneway ANOM" );
scr1 = Char( obj << Get Script );
scr2 = Char( dt << Get Property( "Oneway ANOM" ) );
Close( dt, nosave );
dtName = "Yellow";
```

**Code Explanation**:

1. Open data table.
2. Define time series object.
3. Set automatic recalculation.
4. Select specific rows.
5. Exclude selected rows.
6. Close original table.
7. Create new table.
8. Add scripts to new table.
9. Run script on new table.
10. Extract script as character.



## OneWay 
> **Summary**: Creates a one-way plot with actual values by quantile, filtered to specific height data.

<!-- Keywords: #JSLScriptingLanguage, #OneWayPlot, #QuantilePlot, #DataFiltering, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
plot = OneWay( Y( :height ), X( :weight ), Plot Actual by Quantile( 1 ), Where( :height == 59 ), );
```

**Code Explanation**:

1. Open data table.
2. Create one-way plot.
3. Set Y variable to height.
4. Set X variable to weight.
5. Plot actual by quantile.
6. Use quantile value of 1.
7. Filter data where height equals 59.



## Oneway using Set Property
### Example 1
> **Summary**: Analyze the relationship between Age and Height by performing an Oneway analysis with Equivalence Tests, utilizing Pooled Variance method and generating a Forest Plot.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #EquivalenceTests, #PooledVariance, #ForestPlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Age << Set Property( "Forced Values", {12, 13, 14, 15, 16, 17, 18} );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests( 4, 0.05, "Pooled Variance", "Equivalence", Forest Plot( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Set forced values for Age.
3. Create Oneway analysis.
4. Perform Equivalence Tests.
5. Use Pooled Variance method.
6. Specify Equivalence test type.
7. Generate Forest Plot.



### Example 2
> **Summary**: Creates a one-way plot to visualize the relationship between Age and Arm, utilizing Oneway analysis in JMP.

<!-- Keywords: #JMPScriptingLanguage, #OnewayAnalysis, #DataVisualization, #GraphBuilder, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Description of Planned Arm << Set Property( "Value Order", {Custom Order( {"NIC .15", "Placebo"} ), Common Order( 0 )} );
dt:Description of Planned Arm << Set Property( "Control Level", "Placebo" );
dt:Description of Planned Arm << Set Name( "Arm" );
dt << Oneway( Y( :Age ), X( :Arm ) );
```

**Code Explanation**:

1. Open data table.
2. Set value order for Arm.
3. Define Placebo as control level.
4. Rename Description of Planned Arm to Arm.
5. Create Oneway plot.
6. Set Age as Y variable.
7. Set Arm as X variable.



### Example 3
> **Summary**: Generates a one-way analysis to compare means with a control using Dunnett's method, extracting text from the control comparison box.

<!-- Keywords: #JSLScripting, #OneWayAnalysis, #DunnettsMethod, #MeansComparison, #ControlLevel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Age Group << Set Property( "Control Level", ">54" );
obj = dt << Oneway( X( :Age Group ), Y( :Salary ), With Control( 1 ) );
rpt = Report( obj );
onewayBaselineCont = rpt["Means Comparisons", "Comparisons with a control using Dunnett's Method", Text Box( 2 )] << Get Text;
```

**Code Explanation**:

1. Open data table.
2. Set Age Group control level.
3. Create one-way analysis.
4. Retrieve report object.
5. Access means comparisons section.
6. Use Dunnett's method for comparisons.
7. Extract text from control comparison box.



## Oneway using If
> **Summary**: Generates a one-way analysis with pair comparisons, best pairs selection, and control pair selection, while setting the alpha level to 0.01.

<!-- Keywords: #JSLScriptingLanguage, #OneWayAnalysis, #PairComparisons, #BestPairsSelection, #ControlPairsSelection -->

**Code**:
```jsl
If( JMP Version() >= " 9.0",
	dt = Open("data_table.jmp");
	ow = Oneway( Y( :weight ), X( :sex ) );
	rp = Report( ow );
	ow << Each Pair( 1 );
	ow << All Pairs( 1 );
	ow << With Best( 1 );
	ow << With Control( 1, {"F"} );
	ow << Each Pair( 0 );
	ow << All Pairs( 0 );
	ow << With Best( 0 );
	ow << With Control( 0, {"F"} );
	ow << Set alpha level( .01 );
	Close( dt, No Save );
);
```

**Code Explanation**:

1. Check JMP version.
2. Open data table;
3. Perform Oneway analysis.
4. Get report object.
5. Enable pair comparisons.
6. Enable all pairs comparison.
7. Enable best pair selection.
8. Enable control pair selection.
9. Disable pair comparisons.
10. Disable all pairs comparison.
11. Disable best pair selection.
12. Disable control pair selection.
13. Set alpha level to 0.01.
14. Close dataset without saving.



## Oneway using Select Where
> **Summary**: Analyze male students' height data, matching by age and excluding/hiding selected rows.

<!-- Keywords: #JSLScripting, #DataAnalysis, #OneWayAnalysis, #MatchingColumns, #ReportObject -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :sex == "M" & :age == 13 );
dt << Exclude << Hide;
ow = Oneway( Y( :height ), X( :sex ), Matching Column( :age ) );
rp = Report( ow );
jrn = rp[FrameBox( 1 )] << get journal;
```

**Code Explanation**:

1. Open data table.
2. Select male students aged 13.
3. Exclude and hide selected rows.
4. Create one-way analysis.
5. Set height as response variable.
6. Set sex as factor.
7. Match by age.
8. Retrieve report object.
9. Access first frame box.
10. Get journal from frame box.



## Oneway using New Column
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot to visualize the relationship between height and sex.

<!-- Keywords: #JSLScriptingLanguage, #OnewayAnalysis, #QuantilePlot, #NormalQuantiles, #DataVisualization -->

**Code**:
```jsl
dt5 = Open("data_table.jmp");
dt5 << New Column( "Freq", continuous, formula( 1e9 ) );
oneway2 = Oneway( Y( :height ), X( :sex ), Freq( :Freq ), Plot Actual by Quantile( 1 ), Plot Quantile by Actual( 1 ) );
oneway2 << Save Normal Quantiles;
vals = Column( dt5, "height Normal Quantiles by sex" ) << get values;
oneway2 << close window;
```

**Code Explanation**:

1. Open data table;
2. Add new column "Freq".
3. Set "Freq" formula to 1e9.
4. Run Oneway analysis.
5. Plot actual vs quantile.
6. Plot quantile vs actual.
7. Save normal quantiles.
8. Retrieve height normal quantiles.
9. Close Oneway report window.



## Oneway using With Window Handler
> **Summary**: Creates a one-way plot with Age as Y and Arm as X, including control level in the plot, while also handling window interactions.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #WindowHandler, #ModalDialog, #OnewayPlot -->

**Code**:
```jsl
With Window Handler(
	(dt = Open("data_table.jmp") ; dt:Description of Planned Arm << Set Property(
		"Value Order",
		{Custom Order( {"NIC .15", "Placebo"} ), Common Order( 0 )}
	) ; dt:Description of Planned Arm << Set Name( "Arm" ) ; dt << Oneway( Y( :Age ), X( :Arm ), With Control( 1 ) ) ; ),
	Function( {dlg},
		If( dlg << Is Modal Dialog,
			dlg[Button Box( 1 )] << Click
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Set value order for Description of Planned Arm.
3. Rename Description of Planned Arm to Arm.
4. Create Oneway plot with Age as Y and Arm as X.
5. Include control level in Oneway plot.
6. Define window handler function.
7. Check if dialog is modal.
8. Click first button box if modal.
9. End window handler function.
10. Execute window handler script.



## Oneway using Associative Array
### Example 1
> **Summary**: Analyze and visualize response screening results, generating means tables and P-values for further exploration.

<!-- Keywords: #JMPScriptingLanguage, #ResponseScreening, #DataVisualization, #MeansTable, #PValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = Response Screening( Y( :height ), X( :age ), PValues Table on Launch( 1 ) );
obj << Save Means( 1 );
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	);
	If( Contains( aftlst[i], "Means" ),
		dt3 = Data Table( aftlst[i] )
	);
);
mat3 = dt3 << get as matrix;
obj1 = dt << Oneway( Y( :height ), X( :age ), Means and Std Dev( 1 ), Mean Error Bars( 1 ), Std Dev Lines( 1 ) );
rpt1 = Report( obj1 );
nb = [8, 7, 12, 7, 3, 3];
mean = [58.125, 60.2857142857143, 64.1666666666667, 64.5714285714286, 64.3333333333333, 66.6666666666667];
std = [5.08323575238113, 3.03942350423485, 2.36771210371122, 1.98805959477601, 4.04145188432738, 4.16333199893227];
Close( dt3, no save );
```

**Code Explanation**:

1. Open data table;
2. Create associative array of window titles before analysis.
3. Perform Response Screening analysis.
4. Save means from Response Screening.
5. Create associative array of window titles after analysis.
6. Remove pre-analysis windows from post-analysis array.
7. Retrieve keys from post-analysis associative array.
8. Loop through window keys.
9. Identify and assign PValues table to dt2.
10. Identify and assign Means table to dt3.



### Example 2
> **Summary**: Analyze and visualize response screening results, including means and standard deviations, using JMP's Response Screening platform.

<!-- Keywords: #JMPScriptingLanguage, #ResponseScreening, #MeansAndStandardDeviation, #DataVisualization, #AnalyticalAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = Response Screening( Y( :height ), X( :age ), PValues Table on Launch( 1 ) );
obj << Save Means( 1 );
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	);
	If( Contains( aftlst[i], "Means" ),
		dt3 = Data Table( aftlst[i] )
	);
);
mat3 = dt3 << get as matrix;
obj1 = dt << Oneway( Y( :height ), X( :age ), Means and Std Dev( 1 ), Mean Error Bars( 1 ), Std Dev Lines( 1 ) );
rpt1 = Report( obj1 );
nb = [8, 7, 12, 7, 3, 3];
mean = [58.125, 60.2857142857143, 64.1666666666667, 64.5714285714286, 64.3333333333333, 66.6666666666667];
std = [5.08323575238113, 3.03942350423485, 2.36771210371122, 1.98805959477601, 4.04145188432738, 4.16333199893227];
```

**Code Explanation**:

1. Open data table.
2. Create associative array of window titles before analysis.
3. Run Response Screening with height as response and age as predictor.
4. Save means from Response Screening.
5. Create associative array of window titles after analysis.
6. Remove pre-analysis window titles from post-analysis array.
7. Get keys from post-analysis associative array.
8. Loop through window keys.
9. Identify PValues table.
10. Identify Means table.



