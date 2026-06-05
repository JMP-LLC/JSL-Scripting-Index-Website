# Bivariate

### Example 1
> **Summary**: Visualizes the relationship between DAY ON DRUG and WEIGHT using a Bivariate platform in JMP.

<!-- Keywords: #Bivariate, #JMPScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #JMPScript -->

**Code**:
```jsl
// Bivariate
// Open data table
dt = Open("data_table.jmp");
// Bivariate
Bivariate(
	Y( :DAY ON DRUG ),
	X( :WEIGHT )
);
```

**Code Explanation**:

1. Open table.
2. Assign to dt.
3. Launch Bivariate platform.
4. Set Y variable.
5. Set X variable.



### Example 2
> **Summary**: Opens a data table, performs a bivariate analysis with paired T-test to compare the 'Awake' and 'Asleep' variables.

<!-- Keywords: #BivariateAnalysis, #PairedTTest, #JMPScriptingLanguage, #DataTableOperations, #StatisticalAnalysis -->

**Code**:
```jsl
// bivariate
// Open data table
dt = Open("data_table.jmp");
// bivariate
Bivariate(
	x( Awake ),
	Y( Asleep ),
	Paired T Test
);
```

**Code Explanation**:

1. Open data table.
2. Assign table to dt.
3. Create bivariate analysis.
4. Set X variable to Awake.
5. Set Y variable to Asleep.
6. Perform paired T Test.



### Example 3
> **Summary**: Opens a data table, performs a bivariate analysis with a linear regression fit line between the 'weight' variable (Y) and the 'height' variable (X).

<!-- Keywords: #BivariateAnalysis, #LinearRegression, #JMPScriptingLanguage, #DataVisualization, #StatisticalAnalysis -->

**Code**:
```jsl
// Bivariate
// Open data table
dt = Open("data_table.jmp");
// Bivariate
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line
);
```

**Code Explanation**:

1. Open data table.
2. Load data_table.jmp.
3. Initiate Bivariate analysis.
4. Set Y variable to weight.
5. Set X variable to height.
6. Fit linear regression line.



### Example 4
> **Summary**: Opens a data table, performs a bivariate analysis with a polynomial fit of degree 2 between the 'death' and 'birth' variables, and visualizes the results.

<!-- Keywords: #BivariateAnalysis, #PolynomialFit, #JMPScriptingLanguage, #DataVisualization, #StatisticalModeling -->

**Code**:
```jsl
// Bivariate
// Open data table
dt = Open("data_table.jmp");
// Bivariate
Bivariate(
	Y( :death ),
	X( :birth ),
	Fit Polynomial( 2 )
);
```

**Code Explanation**:

1. Open data table.
2. Run Bivariate analysis.
3. Set Y variable to death.
4. Set X variable to birth.
5. Fit polynomial model.
6. Specify polynomial degree 2.



### Example 5
> **Summary**: Performs a bivariate analysis using the Paired T Test to compare two variables, BP AM and BP PM, in a data table.

<!-- Keywords: #BivariateAnalysis, #PairedTTest, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis -->

**Code**:
```jsl
// bivariate
// Open data table
dt = Open("data_table.jmp");
// bivariate
Bivariate(
	x( BP AM ),
	Y( BP PM ),
	Paired T Test
);
```

**Code Explanation**:

1. Open table.
2. Assign table to dt.
3. Bivariate analysis.
4. Set X variable.
5. Set Y variable.
6. Perform paired t-test.



### Example 6
> **Summary**: Visualizes the relationship between the 'hue axis' and 'shade' variables in a data table, using the Bivariate platform.

<!-- Keywords: #Bivariate, #DataVisualization, #JMPScriptingLanguage, #JMPDataTable, #VariableRelationship -->

**Code**:
```jsl
// Bivariate
// Open data table
dt = Open("data_table.jmp");
// Bivariate
Bivariate( Y( :hue axis ), X( :shade ) );
```

**Code Explanation**:

1. Open data table.
2. Launch Bivariate platform.
3. Set Y variable to "hue axis".
4. Set X variable to "shade".



### Example 7
> **Summary**: Visualizes the relationship between CD8 and CD3 using nonparametric density contours, providing a bivariate plot for exploratory data analysis.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #NonParametricDensity, #ExploratoryDataAnalysis, #CD8andCD3 -->

**Code**:
```jsl
// Quantile Density Contours
// Open data table
dt = Open("data_table.jmp");
// Quantile Density Contours
Bivariate(
	Y( :CD8 ),
	X( :CD3 ),
	Nonpar Density
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set Y variable to CD8.
4. Set X variable to CD3.
5. Add nonparametric density.



### Example 8
> **Summary**: Performs K-Means clustering on the CD3 and CD8 variables, visualizing the results in a bivariate plot with 4 clusters, standardized data, and color-coded clusters.

<!-- Keywords: #JMPScriptingLanguage, #KMeansClustering, #BivariatePlot, #DataVisualization, #ClusterAnalysis -->

**Code**:
```jsl
// K Means Cluster: CD3 and CD8
// Open data table
dt = Open("data_table.jmp");
// K Means Cluster: CD3 and CD8
Current Data Table() << clear row states;
bivar = Bivariate( Y( :CD8 ), X( :CD3 ) );
Report( bivar )[framebox( 1 )] <<
frame size( 500, 500 );
bivar << zoom window;
clust =
K Means Cluster(
	Columns( CD3, CD8 ),
	Number of Clusters( 4 ),
	Standardize Data( 1 ),
	Color Clusters( 1 )
);
clust << move window( 600, 100 );
```

**Code Explanation**:

1. Open table.
2. Clear row states.
3. Create bivariate plot.
4. Resize frame.
5. Zoom window.
6. Perform K Means clustering.
7. Set number of clusters to 4.
8. Standardize data.
9. Color clusters.
10. Move window.



### Example 9
> **Summary**: Fits a bivariate distribution to the LogHist1 variable, conditioned on the LogHist0 variable, using the Bivariate platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #LogisticRegression, #ConditionalDistribution, #DataVisualization -->

**Code**:
```jsl
// Fit LogHist1 By LogHist0
// Open data table
dt = Open("data_table.jmp");
// Fit LogHist1 By LogHist0
Bivariate(
	Y( :LogHist1 ),
	X( :LogHist0 )
);
```

**Code Explanation**:

1. Open data table.
2. Fit LogHist1 By LogHist0.



### Example 10
> **Summary**: This script fits a bivariate model to analyze the relationship between 'diff' and 'mean' variables in a data table, providing an interactive visualization of their correlation.

<!-- Keywords: #BivariateModeling, #DataVisualization, #JMPScriptingLanguage, #StatisticalAnalysis, #InteractiveVisualization -->

**Code**:
```jsl
// Fit diff by mean
// Open data table
dt = Open("data_table.jmp");
// Fit diff by mean
Bivariate( Y( :diff ), X( :mean ) );
```

**Code Explanation**:

1. Open data table.
2. Fit bivariate model.



### Example 11
> **Summary**: Generates a bivariate analysis by position, using the 'Speed2' variable as the Y-axis and the 'Weight' variable as the X-axis, with density ellipses added for visualization.

<!-- Keywords: #BivariateAnalysis, #PositionalGrouping, #DensityEllipses, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
// Bivariate by Position
// Open data table
dt = Open("data_table.jmp");
// Bivariate by Position
Bivariate(
	Y( :Speed2 ),
	X( :Weight ),
	Group By( "Position2" ),
	Density Ellipse( 0.5 )
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate analysis.
3. Set Y variable.
4. Set X variable.
5. Group by position.
6. Add density ellipse.



### Example 12
> **Summary**: Opens a data table, creates a bivariate plot with a ratio variable as the Y-axis and age as the X-axis, and fits multiple models including linear, quadratic, cubic, and spline.

<!-- Keywords: #BivariatePlot, #JMPScriptingLanguage, #DataVisualization, #ModelFitting, #JMP -->

**Code**:
```jsl
// Bivariate
// Open data table
dt = Open("data_table.jmp");
// Bivariate
Bivariate(
	Y( :ratio ),
	X( :age ),
	Fit Line,
	Fit Polynomial( 2 ),
	Fit Polynomial( 3 ),
	Fit Spline( 1000 )
);
```

**Code Explanation**:

1. Open table.
2. Create bivariate plot.
3. Set Y variable.
4. Set X variable.
5. Fit linear model.
6. Fit quadratic model.
7. Fit cubic model.
8. Fit spline model.



### Example 13
> **Summary**: Visualizes the relationship between Y and X variables in a bivariate plot, with separate lines and density ellipses for 'ding', 'normal', and 'scratch' surface quality categories. The script also sends the linear fit outlines to a report.

<!-- Keywords: #BivariatePlot, #JMPScriptingLanguage, #DataVisualization, #LinearFit, #DensityEllipse -->

**Code**:
```jsl
// Bivariate
// Open data table
dt = Open("data_table.jmp");
// Bivariate
Bivariate(
	Y( :Y ),
	X( :X ),
	Fit Where(
		:surface quality == "ding",
		Fit Line( {Line Color( "Red" )} )
	),
	Fit Where(
		:surface quality == "normal",
		Fit Line(
			{Line Color( "Green" )}
		)
	),
	Fit Where(
		:surface quality == "scratch",
		Fit Line(
			{Line Color( "Blue" )}
		)
	),
	Fit Where(
		:surface quality == "ding",
		Density Ellipse(
			0.95,
			{Line Color( "Red" )}
		)
	),
	Fit Where(
		:surface quality == "normal",
		Density Ellipse(
			0.95,
			{Line Color( "Green" )}
		)
	),
	Fit Where(
		:surface quality == "scratch",
		Density Ellipse(
			0.95,
			{Line Color( "Blue" )}
		)
	),
	SendToReport(
		Dispatch( {},
			"Linear Fit surface quality==ding",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {},
			"Linear Fit surface quality==normal",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {},
			"Linear Fit surface quality==scratch",
			OutlineBox,
			{Close( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create Bivariate plot.
3. Plot Y vs X.
4. Fit red line for "ding".
5. Fit green line for "normal".
6. Fit blue line for "scratch".
7. Add red density ellipse for "ding".
8. Add green density ellipse for "normal".
9. Add blue density ellipse for "scratch".
10. Close linear fit outlines.



### Example 14
> **Summary**: Visualizes the relationship between edge and nub using a bivariate plot, illustrating the correlation between these two variables.

<!-- Keywords: #BivariatePlot, #JMPScriptingLanguage, #DataVisualization, #CorrelationAnalysis, #StatisticalGraphics -->

**Code**:
```jsl
// Bivariate
// Open data table
dt = Open("data_table.jmp");
// Bivariate
Bivariate( Y( :edge ), X( :nub ) );
```

**Code Explanation**:

1. Open table.
2. Create bivariate plot.



### Example 15
> **Summary**: Opens a data table, creates a bivariate plot with Y variable and X variable, sets title for the bivariate fit, dispatches marker segment settings, and sets label offsets.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataTable, #MarkerSegments, #LabelOffsets -->

**Code**:
```jsl
// Bivariate
// Open data table
dt = Open("data_table.jmp");
// Bivariate
Bivariate(
	Y( :Y ),
	X( :X ),
	SendToReport(
		Dispatch( {},
			"Bivariate Fit of Y By X",
			OutlineBox,
			{
			Set Title(
				"Highlight Maximum January Temperature Points and Label Them"
			)}
		),
		Dispatch( {}, "Bivar Plot",
			FrameBox,
			{Frame Size( 476, 313 ),
			DispatchSeg(
				Marker Seg( 1 ),
				label offset(
					{503, 25, 5},
					{566, -15, 29}
				)
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set Y variable.
4. Set X variable.
5. Send report settings.
6. Set title for bivariate fit.
7. Dispatch bivar plot settings.
8. Set frame size.
9. Dispatch marker segment settings.
10. Set label offsets.



### Example 16
> **Summary**: Performs a bivariate analysis with linear fit on the OZONE variable against the POP variable, displaying the results in JMP.

<!-- Keywords: #BivariateAnalysis, #LinearFit, #JMPScriptingLanguage, #DataVisualization, #StatisticalAnalysis -->

**Code**:
```jsl
// Bivariate with Linear Fit
// Open data table
dt = Open("data_table.jmp");
// Bivariate with Linear Fit
Bivariate(
	Y( :OZONE ),
	X( :POP ),
	Fit Line(
		{Line Color( {213, 72, 87} )}
	)
);
```

**Code Explanation**:

1. Open table.
2. Perform bivariate analysis.
3. Set Y variable to OZONE.
4. Set X variable to POP.
5. Add linear fit.
6. Customize line color to red.



### Example 17
> **Summary**: Visualizes the relationship between 'Portion 0-19' and 'Portion60+' using a bivariate plot, adjusting report size and marker drawing mode.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #ReportCustomization, #MarkerDrawingMode, #DataVisualization -->

**Code**:
```jsl
// Age Portion
// Open data table
dt = Open("data_table.jmp");
// Age Portion
Bivariate(
	Y( :"Portion60+"n ),
	X( :"Portion 0-19"n ),
	SendToReport(
		Dispatch( {}, "Bivar Plot",
			FrameBox,
			{Frame Size( 532, 339 ),
			Marker Drawing Mode( "Fast" )
			}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set Y variable.
4. Set X variable.
5. Adjust report size.
6. Change marker drawing mode.



### Example 18
> **Summary**: Visualizes the relationship between 'F Rate 0-19' and 'F Rate 60+' using a Bivariate plot, with customizable frame size and marker drawing mode.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataVisualization, #CustomizationOptions, #FrameSize -->

**Code**:
```jsl
// Gender Portion
// Open data table
dt = Open("data_table.jmp");
// Gender Portion
Bivariate(
	Y( :"F Rate 60+"n ),
	X( :"F Rate 0-19"n ),
	SendToReport(
		Dispatch( {}, "Bivar Plot",
			FrameBox,
			{Frame Size( 706, 434 ),
			Marker Drawing Mode( "Fast" )
			}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Bivariate plot.
3. Set Y variable.
4. Set X variable.
5. Send report settings.
6. Adjust frame size.
7. Set marker drawing mode.



### Example 19
> **Summary**: Opens a data table and performs a bivariate analysis to visualize the relationship between 'Hours' and 'Temp'.

<!-- Keywords: #BivariateAnalysis, #DataVisualization, #JMPScriptingLanguage, #TableManipulation, #StatisticalAnalysis -->

**Code**:
```jsl
// Bivariate
// Open data table
dt = Open("data_table.jmp");
// Bivariate
Bivariate( Y( :Hours ), X( :Temp ) );
```

**Code Explanation**:

1. Open table.
2. Perform bivariate analysis.



### Example 20
> **Summary**: Visualizes the relationship between weight and height using a bivariate plot with fit lines for both linear and robust models, highlighting the differences in color.

<!-- Keywords: #BivariatePlot, #FitLine, #RobustModel, #JSLScripting, #DataVisualization -->

**Code**:
```jsl
// Bivariate
// Open data table
dt = Open("data_table.jmp");
// Bivariate
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line(
		{Line Color( {213, 72, 87} )}
	),
	Fit Robust(
		{Line Color( {57, 177, 67} )}
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Add Fit Line.
6. Set Fit Line color.
7. Add Fit Robust.
8. Set Fit Robust color.



### Example 21
> **Summary**: Opens a data table, performs a bivariate analysis with a linear fit line between 'weight (lb.)' and 'height (in.)', and visualizes the results.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #LinearFitLine, #DataVisualization, #StatisticalModeling -->

**Code**:
```jsl
// Bivariate
// Open data table
dt = Open("data_table.jmp");
// Bivariate
Bivariate(
	Y( :"weight (lb.)"n ),
	X( :"height (in.)"n ),
	Fit Line
);
```

**Code Explanation**:

1. Open table.
2. Create bivariate analysis.
3. Set Y variable.
4. Set X variable.
5. Fit linear line.



### Example 22
> **Summary**: Visualizes the relationship between Crude Death Rate and Crude Birth Rate using a bivariate plot, with multiple fit lines (mean, linear, polynomial degrees 2 and 3) and sends the output to a report.

<!-- Keywords: #BivariatePlot, #JMPScriptingLanguage, #CrudeDeathRate, #CrudeBirthRate, #DataVisualization -->

**Code**:
```jsl
// Bivariate: Crude Death by Birth Rates
// Open data table
dt = Open("data_table.jmp");
// Bivariate: Crude Death by Birth Rates
Bivariate(
	Y( :"Crude Death Rate (1000)"n ),
	X( :"Crude Birth Rate (1000)"n ),
	Fit Mean(
		{Line Color( {64, 109, 210} )}
	),
	Fit Line(
		{Line Color( {202, 124, 62} )}
	),
	Fit Polynomial(
		2,
		{Line Color( {44, 175, 132} ),
		Line Style( "Smooth" )}
	),
	Fit Polynomial(
		3,
		{Line Color( {150, 65, 217} ),
		Line Style( "Smooth" )}
	),
	SendToReport(
		Dispatch( {}, "Bivar Plot",
			FrameBox,
			{Frame Size( 303, 231 )}
		),
		Dispatch( {"Linear Fit"},
			"Summary of Fit", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Linear Fit"},
			"Analysis of Variance",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Linear Fit"},
			"Parameter Estimates",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {},
			"Polynomial Fit Degree=2",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {},
			"Polynomial Fit Degree=3",
			OutlineBox,
			{Close( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Set Y variable.
3. Set X variable.
4. Fit mean line.
5. Fit linear line.
6. Fit polynomial degree 2.
7. Fit polynomial degree 3.
8. Resize plot frame.
9. Close linear fit summary.
10. Close linear fit ANOVA.
11. Close linear fit parameter estimates.
12. Close polynomial fit degree 2.
13. Close polynomial fit degree 3.



### Example 23
> **Summary**: Visualizes the relationship between Infant Mortality Rate and Crude Birth Rate (1000) using a Bivariate plot, with customizable frame size, marker size, and label offset.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataVisualization, #CustomizationOptions, #JSLCode -->

**Code**:
```jsl
// Bivariate: Infant Mortality by Birth Rate
// Open data table
dt = Open("data_table.jmp");
// Bivariate: Infant Mortality by Birth Rate
Bivariate(
	Y( :Infant Mortality Rate ),
	X( :"Crude Birth Rate (1000)"n ),
	SendToReport(
		Dispatch( {}, "Bivar Plot",
			FrameBox,
			{Frame Size( 264, 205 ),
			Marker Size( 2 ),
			DispatchSeg(
				Marker Seg( 1 ),
				label offset(
					{1, -104, 22},
					{7, 8, -4},
					{126, -2, 13},
					{160, -15, -26},
					{198, -103, -15}
				)
			)}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create bivariate plot.
3. Set Y variable.
4. Set X variable.
5. Send report settings.
6. Adjust frame size.
7. Set marker size.
8. Dispatch segment settings.
9. Label offset for markers.
10. Configure marker labels.



### Example 24
> **Summary**: Opens a data table, performs a bivariate analysis with weight as the Y variable and height as the X variable, fits a linear regression line, and customizes the report appearance with log scales on both axes.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #LinearRegression, #LogScale, #CustomizedReport -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Scale( "Log" ), Format( "Best", 12 ), Min( 68.8301811217164 ), Max( 127.555187303682 ), Inc( 1 ), Minor Ticks( 1 )}
		),
		Dispatch( {}, "2", ScaleBox,
			{Scale( "Log" ), Format( "Best", 12 ), Min( 11.4387432508742 ), Max( 37.1080564603383 ), Inc( 1 ), Minor Ticks( 1 )}
		), 
	)
);
```

**Code Explanation**:

1. Open data table;
2. Launch Bivariate analysis.
3. Set weight as Y variable.
4. Set height as X variable.
5. Fit linear regression line.
6. Customize report appearance.
7. Apply log scale to Y axis.
8. Set Y axis format.
9. Define Y axis min and max.
10. Configure Y axis increments and minor ticks.



### Example 25
> **Summary**: Visualizes the relationship between weight and height in a bivariate plot, with a fitted linear regression line and customized color, and sends the report to JMP with adjusted Y-axis settings.

<!-- Keywords: #BivariatePlot, #LinearRegression, #JMPScriptingLanguage, #DataVisualization, #Customization -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Min( 1119824.625 ), Max( 1163568 ), Inc( 500 ), Minor Ticks( 1 ), Rotated Labels( "Horizontal" )} ),
		Dispatch( {}, "2", ScaleBox, {Rotated Labels( "Automatic" )} ),
		Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Fit linear regression line.
6. Customize line color.
7. Send report to JMP.
8. Adjust Y axis minimum.
9. Adjust Y axis maximum.
10. Set Y axis increment.
11. Enable minor ticks on Y axis.
12. Set Y axis labels horizontal.
13. Set X axis labels automatic.
14. Close linear fit outline box.



### Example 26
> **Summary**: Visualizes the relationship between weight and height using a bivariate plot, with a fitted linear regression line and customized scales for both axes.

<!-- Keywords: #BivariatePlot, #LinearRegression, #CustomizedScales, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Scale( "Log" ), Format( "Best", 12 ), Min( 50 ), Max( 71.342727999454 ), Inc( 1 ), Minor Ticks( 8 ),
			Rotated Labels( "Horizontal" )}
		),
		Dispatch( {}, "2", ScaleBox,
			{Scale( "Log" ), Format( "Best", 12 ), Min( 60 ), Max( 200 ), Inc( 1 ), Minor Ticks( 8 ), Rotated Labels( "Horizontal" )}
		),
		Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Fit linear regression line.
6. Customize Y axis scale.
7. Set Y axis to log scale.
8. Format Y axis numbers.
9. Customize X axis scale.
10. Set X axis to log scale.



### Example 27
> **Summary**: Creates a bivariate plot with a linear regression line, customized color, and reference lines for height and weight variables.

<!-- Keywords: #JSLScripting, #BivariatePlot, #LinearRegression, #Customization, #ReferenceLines -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	SendToReport(
		Dispatch( {}, "height", ScaleBox, {Add Ref Line( {55, 65}, "Solid", "Black", "", 1, 0 )} ),
		Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Fit linear regression line.
6. Customize line color.
7. Add reference lines.
8. Set reference line properties.
9. Hide linear fit outline.
10. Finalize report settings.



### Example 28
> **Summary**: Creates a bivariate plot with reference lines and labels, utilizing Bivariate and Graph Builder platforms in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #GraphBuilder, #ReferenceLines, #Labels -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :height ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "height", ScaleBox,
			{Add Ref Line(
				60,
				"Solid",
				"Black",
				"SIXTY",
				1,
				1,
				Label Settings( {Label Color( "Fuchsia" ), Set Font Size( 22 ), Set Font Style( "Bold" )} )
			)}
		),
		Dispatch( {}, "Bivar Plot", FrameBox, {Frame Size( 328, 238 )} )
	)
);
Graph Builder(
	Size( 547, 460 ),
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 2 ) ), Smoother( X, Y, Legend( 3 ) ) ),
	SendToReport(
		Dispatch( {}, "height", ScaleBox,
			{Add Ref Line(
				60.38,
				"Dashed",
				"Red",
				"Reference Line",
				1,
				1,
				Label Settings( {Label Color( "Blue" ), Set Font Size( 22 ), Set Font Style( "Bold" )} )
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set Y axis to height.
4. Set X axis to height.
5. Add reference line at 60.
6. Label reference line "SIXTY".
7. Set label color to Fuchsia.
8. Set label font size to 22.
9. Set label font style to Bold.
10. Create Graph Builder plot.
11. Set X axis to height.
12. Set Y axis to weight.
13. Add points element.
14. Add smoother element.
15. Hide control panel.
16. Add reference line at 60.38.
17. Label reference line "Reference Line".
18. Set label color to Blue.
19. Set label font size to 22.
20. Set label font style to Bold.



### Example 29
> **Summary**: Creates bivariate plots for height vs height, with reference lines and frame size customization, using JMP's Bivariate platform.

<!-- Keywords: #JMPBivariate, #ReferenceLines, #FrameSize, #Customization, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Add Ref Line( 60, Solid, "Black" )} ),
		Dispatch( {}, "2", ScaleBox, {Add Ref Line( 60, Solid, "Black" )} ),
		Dispatch( {}, "Bivar Plot", FrameBox, {Frame Size( 328, 238 )} )
	)
);
obj = Bivariate(
	Y( :height ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Add Ref Line( 60, Solid, "Black" )} ),
		Dispatch( {}, "2", ScaleBox, {Add Ref Line( 60, Solid, "Black" )} ),
		Dispatch( {}, "Bivar Plot", FrameBox,
			{Frame Size( 328, 238 ), Marker Size( 4 ), DispatchSeg( Marker Seg( 1 ), {Marker( Circle )} )}
		)
	)
);
gb = Graph Builder(
	Size( 426, 378 ),
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	SendToReport( Dispatch( {}, "height", ScaleBox, {Min( 50 ), Max( 72.5 ), Inc( 25 ), Minor Ticks( 0 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot for height vs height.
3. Add reference line at 60 on Y-axis.
4. Add reference line at 60 on X-axis.
5. Set frame size to 328x238.
6. Create second bivariate plot for height vs height.
7. Add reference line at 60 on Y-axis.
8. Add reference line at 60 on X-axis.
9. Set frame size to 328x238.
10. Create Graph Builder for data_table.



### Example 30
> **Summary**: Creates a bivariate plot with reference lines to visualize the relationship between weight and height in a data table.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #ReferenceLines, #DataVisualization, #WeightandHeight -->

**Code**:
```jsl
Open("data_table.jmp") << Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "height", ScaleBox,
			{Add Ref Line(
				52,
				"Solid",
				"Black",
				"Small",
				1,
				1,
				Label Settings( {Label Color( "Medium Dark Cyan" ), Set Font Size( 10 )} )
			), Add Ref Line(
				60,
				"Solid",
				"Black",
				"Medium",
				1,
				1,
				Label Settings( {Label Color( "Medium Light Orange" ), Set Font Size( 12 )} )
			), Add Ref Line( 67, "Solid", "Black", "Very Large", 1, 1, Label Settings( {Label Color( "Red" ), Set Font Size( 16 )} ) )}
		),
		Dispatch( {}, "weight", ScaleBox,
			{Add Ref Line( 165, "Solid", "Black", "Very Large", 1, 1, Label Settings( {Label Color( "Red" ), Set Font Size( 16 )} ) ),
			Add Ref Line(
				125,
				"Solid",
				"Black",
				"Medium",
				1,
				1,
				Label Settings( {Label Color( "Medium Light Orange" ), Set Font Size( 12 )} )
			), Add Ref Line(
				85,
				"Solid",
				"Black",
				"Small",
				1,
				1,
				Label Settings( {Label Color( "Medium Dark Cyan" ), Set Font Size( 10 )} )
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set weight as Y variable.
4. Set height as X variable.
5. Add reference line at 52 on height.
6. Set line style to solid.
7. Set line color to black.
8. Set label size to small.
9. Add reference line at 60 on height.
10. Set label size to medium.



### Example 31
> **Summary**: Creates a bivariate plot with reference lines at specific values, customizing line colors and label sizes.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #ReferenceLines, #CustomizationOptions, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp") << Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "height", ScaleBox,
			{Add Ref Line(
				52,
				"Solid",
				"Black",
				"Small",
				1,
				1,
				Label Settings( {Label Color( "Medium Dark Cyan" ), Set Font Size( 10 )} )
			), Add Ref Line(
				60,
				"Solid",
				"Black",
				"Medium",
				1,
				1,
				Label Settings( {Label Color( "Medium Light Orange" ), Set Font Size( 12 )} )
			), Add Ref Line( 67, "Solid", "Black", "Very Large", 1, 1, Label Settings( {Label Color( "Red" ), Set Font Size( 16 )} ) ),
			Label Row( Label Orientation( "Vertical" ) )}
		),
		Dispatch( {}, "weight", ScaleBox,
			{Add Ref Line( 165, "Solid", "Black", "Very Large", 1, 1, Label Settings( {Label Color( "Red" ), Set Font Size( 16 )} ) ),
			Add Ref Line(
				125,
				"Solid",
				"Black",
				"Medium",
				1,
				1,
				Label Settings( {Label Color( "Medium Light Orange" ), Set Font Size( 12 )} )
			), Add Ref Line(
				85,
				"Solid",
				"Black",
				"Small",
				1,
				1,
				Label Settings( {Label Color( "Medium Dark Cyan" ), Set Font Size( 10 )} )
			), Label Row( Label Orientation( "Vertical" ) )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Set Y variable.
4. Set X variable.
5. Add reference line at 52.
6. Customize line color and style.
7. Customize label color and size.
8. Add reference line at 60.
9. Customize line color and style.
10. Customize label color and size.



### Example 32
> **Summary**: Creates a bivariate plot with a linear regression line, customized Y-axis format, and reference lines at 62.25 and 130.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LinearRegression, #Customization, #ReferenceLines -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Format( "Best", 12 ), Add Ref Line( 62.25, Dotted, "Dark Cyan", "W", 2 ), Rotated Labels( "Horizontal" )}
		),
		Dispatch( {}, "2", ScaleBox, {Add Ref Line( 130, Solid, "Dark Red", "", 3 ), Rotated Labels( "Horizontal" )} ),
		Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set weight as Y variable.
4. Set height as X variable.
5. Fit linear regression line.
6. Customize Y axis format.
7. Add reference line at 62.25.
8. Set reference line style to dotted.
9. Add reference line at 130.
10. Close linear fit outline box.



### Example 33
> **Summary**: Creates a bivariate plot with a linear regression line, customized scales, and reference lines for visualizing relationships between weight (Y) and height (X) variables.

<!-- Keywords: #BivariatePlot, #LinearRegression, #CustomizedScales, #ReferenceLines, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Format( "Best", 12 ), Add Ref Line( 62.25, Dotted, "Dark Cyan", "End", 2 ), Add Ref Line(
				66, Dotted, "Medium Dark Gray", "Tie", 2
			), Add Ref Line( 67, Dotted, "Medium Dark Gray", "Color", 2 ), Rotated Labels( "Horizontal" )}
		),
		Dispatch( {}, "2", ScaleBox,
			{Format( "Best", 12 ), Max( 220 ), Add Ref Line( 130, Solid, "Dark Red", "Top", 3 ),
			Add Ref Line( 125, Dashed, "Medium Dark Green", "Side", 1 ), Add Ref Line( 139, Solid, "Dark Purple", "End", 1 ),
			Add Ref Line( 145, Solid, "Medium Dark Orange", "Fred", 1 ), Rotated Labels( "Horizontal" )}
		),
		Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Set weight as Y variable.
4. Set height as X variable.
5. Fit linear regression line.
6. Customize Y axis scale.
7. Add reference line at 62.25.
8. Add reference line at 66.
9. Add reference line at 67.
10. Customize X axis scale.



### Example 34
> **Summary**: Creates a bivariate plot with a linear fit line, customized scales and reference lines for height and weight variables.

<!-- Keywords: #BivariatePlot, #LinearRegression, #CustomizedScales, #ReferenceLines, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Format( "Best", 12 ), Add Ref Line( 62.25, Dotted, "Dark Cyan", "W", 2 ), Rotated Labels( "Horizontal" )}
		),
		Dispatch( {}, "2", ScaleBox,
			{Format( "Best", 12 ), Max( 220 ), Add Ref Line( 130, Solid, "Dark Red", "Top", 3 ), Rotated Labels( "Horizontal" )}
		),
		Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set weight as Y variable.
4. Set height as X variable.
5. Fit linear regression line.
6. Customize Y-axis scale.
7. Add reference line to Y-axis.
8. Rotate Y-axis labels horizontally.
9. Customize X-axis scale.
10. Add reference line to X-axis.



### Example 35
> **Summary**: Creates a bivariate plot with a fitted linear regression line, customized Y-axis format, and log-scaled X-axis.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #LinearRegression, #CustomizedAxes, #LogScale -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Format( "Best", 12 ), Add Ref Line( 62.25, Dotted, "Dark Cyan", "W", 2 ), Rotated Labels( "Horizontal" )}
		),
		Dispatch( {}, "2", ScaleBox,
			{Scale( "Log" ), Format( "Best", 12 ), Min( 60 ), Max( 200 ), Inc( 1 ), Minor Ticks( 8 ),
			Add Ref Line( 130, Solid, "Dark Red", "Top", 3 ), Rotated Labels( "Horizontal" )}
		),
		Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set weight as Y variable.
4. Set height as X variable.
5. Fit linear regression line.
6. Customize Y axis format.
7. Add reference line on Y axis.
8. Set Y axis labels horizontal.
9. Customize X axis scale to log.
10. Set X axis format and limits.



### Example 36
> **Summary**: Creates a bivariate plot with a reference line, using the Bivariate platform in JMP to visualize the relationship between weight and height.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #ReferenceLine, #DataVisualization, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport( Dispatch( {}, "1", ScaleBox, {Add Ref Line( {60, 65}, "Solid", "Black", "", 1, 0.25 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Send report message.
6. Dispatch to ScaleBox.
7. Add reference lines.
8. Set reference line values.
9. Set line style to solid.
10. Set line color to black.



### Example 37
> **Summary**: Creates a bivariate analysis between weight and height, generating a report with a reference line added to the axis box.

<!-- Keywords: #BivariateAnalysis, #AxisBox, #ReferenceLine, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Add Ref Line( 90, "Dashed", blue );
```

**Code Explanation**:

1. Open data table.
2. Create Bivariate analysis.
3. Assign Bivariate object to variable.
4. Generate report from Bivariate.
5. Access first axis box.
6. Add reference line to axis box.



### Example 38
> **Summary**: Creates a bivariate plot with a linear regression line, and configures the axis box to add and remove reference lines.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #LinearRegression, #AxisBox, #ReferenceLines -->

**Code**:
```jsl
Open("data_table.jmp");
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Add Ref Line( 90, "Dashed", blue );
axisbox << Remove Ref Line( 90 );
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Fit linear regression line.
4. Get report object.
5. Access axis box.
6. Add reference line at 90.
7. Remove reference line at 90.



### Example 39
> **Summary**: Creates bivariate plots with log-scaled axes for analyzing relationships between categorical variables and continuous variables in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LogScaling, #CategoricalVariables, #ContinuousVariables -->

**Code**:
```jsl
Open("data_table.jmp");
type = "Log";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( "Log" )} ) ) );
type = "Log";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( Log )} ) ) );
type = "Log";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( type )} ) ) );
```

**Code Explanation**:

1. Open data table;
2. Set axis type to log.
3. Create bivariate plot.
4. Set Y axis to log scale.
5. Set axis type to log.
6. Create bivariate plot.
7. Set Y axis to log scale.
8. Set axis type to log.
9. Create bivariate plot.
10. Set Y axis to log scale.



### Example 40
> **Summary**: Creates bivariate plots for weight vs height with a log scale on the y-axis, using Bivariate and SendToReport functions in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LogScale, #DataVisualization, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
type = "Log";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( "Log" )} ) ) );
type = "Log";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( Log )} ) ) );
type = "Log";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( type )} ) ) );
```

**Code Explanation**:

1. Open data table.
2. Set scale type to "Log".
3. Create bivariate plot for weight vs height.
4. Set scale type to "Log".
5. Create bivariate plot for weight vs height.
6. Set scale type to "Log".
7. Create bivariate plot for weight vs height.
8. Use "Log" scale on y-axis.
9. Use "Log" scale on y-axis.
10. Use "Log" scale on y-axis.



### Example 41
> **Summary**: Creates a bivariate plot with a fitted line, customized axis settings, and minor tick visibility control.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #CustomAxisSettings, #MinorTicks, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
bp = Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Min( 50 ), Max( 72 ), Inc( 1 ), Minor Ticks( 1 ), Label Row( 1, Show Minor Ticks( 0 ) )} )
	)
);
rpt = bp << report;
axisbox = rpt[axis box( 1 )];
axisbox << inc( 2 );
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set weight as Y variable.
4. Set height as X variable.
5. Fit linear regression line.
6. Customize axis settings.
7. Retrieve report object.
8. Access first axis box.
9. Increase tick interval to 2.
10. Adjust minor ticks visibility.



### Example 42
> **Summary**: Creates a bivariate plot with a fitted linear regression line, customizing axis scale and tick labels.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LinearRegression, #AxisCustomization, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Min( 50 ), Max( 72 ), Inc( 1 ), Minor Ticks( 1 ), Label Row( 1, Show Minor Ticks( 0 ) )} )
	)
);
rpt = bp << report;
axisbox = rpt[axis box( 1 )];
axisbox << inc( 2 );
axisbox << Tick Label List( 2, {"eighty", "sixty", "seventy"}, {80, 60, 70} );
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Fit linear regression line.
6. Customize axis scale.
7. Retrieve report object.
8. Access first axis box.
9. Set axis increment to 2.
10. Modify tick labels.



### Example 43
> **Summary**: Creates a bivariate plot with linear fit and sends it to a report, including summary of fit, analysis of variance, and parameter estimates.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LinearRegression, #ReportGeneration, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
biv = Bivariate(
	Y( :weight ),
	X( :height ),
	FitLine,
	SendToReport(
		Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Linear Fit"}, "Summary of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Linear Fit"}, "Analysis of Variance", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Linear Fit"}, "Parameter Estimates", OutlineBox, {Close( 1 )} )
	)
);
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << {Min( 0 ), Max( 5 ), Inc( 1 )};
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Set Y variable.
4. Set X variable.
5. Fit linear regression line.
6. Close Linear Fit outline.
7. Close Summary of Fit outline.
8. Close Analysis of Variance outline.
9. Close Parameter Estimates outline.
10. Adjust axis settings.



### Example 44
> **Summary**: Creates a bivariate plot with linear fit, sending reports to OutlineBox for summary, analysis of variance, and parameter estimates, while customizing axis settings and tick labels.

<!-- Keywords: #BivariatePlot, #LinearFit, #AxisCustomization, #JMPScriptingLanguage, #OutlineBox -->

**Code**:
```jsl
Open("data_table.jmp");
biv = Bivariate(
	Y( :weight ),
	X( :height ),
	FitLine,
	SendToReport(
		Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Linear Fit"}, "Summary of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Linear Fit"}, "Analysis of Variance", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Linear Fit"}, "Parameter Estimates", OutlineBox, {Close( 1 )} )
	)
);
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << {Min( 0 ), Max( 5 ), Inc( 1 )};
axisbox << Tick Label List( {"sqrt2", "sqrt3", "e", "pi"}, {1.41, 1.73, 2.72, 3.14} );
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Fit linear regression line.
6. Close Linear Fit summary.
7. Close Analysis of Variance.
8. Close Parameter Estimates.
9. Retrieve bivariate report.
10. Modify axis settings.
11. Set axis minimum to 0.
12. Set axis maximum to 5.
13. Set axis increment to 1.
14. Customize tick labels.
15. Add custom labels: sqrt2, sqrt3, e, pi.
16. Assign custom values: 1.41, 1.73, 2.72, 3.14.



### Example 45
> **Summary**: Creates a bivariate plot with a linear regression line, customizing report appearance and axis scale settings.

<!-- Keywords: #BivariatePlot, #LinearRegression, #CustomReportAppearance, #AxisScaleSettings, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Min( 50 ), Max( 72 ), Inc( 1 ), Minor Ticks( 1 ), Label Row( 1, Show Minor Ticks( 0 ) ),
			Tick Label List( 2, {"fifty", "sixty", "seventy"}, {50, 60, 70} )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Fit linear regression line.
6. Customize report appearance.
7. Set axis scale minimum.
8. Set axis scale maximum.
9. Set axis increment.
10. Configure tick labels.



### Example 46
> **Summary**: Creates a bivariate plot with a linear regression line, customizing axis tick labels and rotating Y-axis labels perpendicular.

<!-- Keywords: #BivariatePlot, #LinearRegression, #Customization, #AxisLabels, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Rotated Labels( "Perpendicular" )} ),
		Dispatch( {}, "2", ScaleBox, {Rotated Labels( "Parallel" )} ),
		Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Fit linear regression line.
6. Customize axis tick labels.
7. Rotate Y-axis labels perpendicular.
8. Rotate X-axis labels parallel.
9. Hide linear fit outline.



### Example 47
> **Summary**: Creates a bivariate plot with a linear fit line, customizing Y-axis settings and displaying two scale boxes.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LinearRegression, #ScaleBoxes, #Customization -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Min( 50 ), Max( 110 ), Inc( 100 ), Minor Ticks( 9 ), Rotated Labels( "Horizontal" )} ),
		Dispatch( {}, "2", ScaleBox, {Min( 40 ), Max( 85 ), Inc( 100 ), Minor Ticks( 9 ), Rotated Labels( "Horizontal" )} ),
		Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set weight as Y variable.
4. Set height as X variable.
5. Fit linear regression line.
6. Customize Y axis settings.
7. Set Y axis minimum to 50.
8. Set Y axis maximum to 110.
9. Set Y axis increment to 100.
10. Customize X axis settings.



### Example 48
> **Summary**: Creates a bivariate plot with a linear regression line, customizing Y-axis settings and displaying two scale boxes.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LinearRegression, #ScaleBox, #Customization -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Min( 110 ), Max( 50 ), Inc( 100 ), Minor Ticks( 9 ), Rotated Labels( "Horizontal" )} ),
		Dispatch( {}, "2", ScaleBox, {Min( 85 ), Max( 40 ), Inc( 100 ), Minor Ticks( 9 ), Rotated Labels( "Horizontal" )} ),
		Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Fit linear regression line.
6. Customize Y axis settings.
7. Set Y axis minimum to 110.
8. Set Y axis maximum to 50.
9. Set Y axis increment to 100.
10. Close linear fit outline box.



### Example 49
> **Summary**: Creates a bivariate plot with a fitted linear regression line, utilizing customized scales and labels for both axes.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LinearRegression, #CustomizedAxes, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Scale( "Log" ), Format( "Best", 12 ), Min( 50 ), Max( 221.624013343 ), Inc( 1 ), Minor Ticks( 8 ),
			Rotated Labels( "Horizontal" )}
		),
		Dispatch( {}, "2", ScaleBox,
			{Scale( "Log" ), Format( "Best", 12 ), Min( 22 ), Max( 90 ), Inc( 1 ), Minor Ticks( 8 ), Rotated Labels( "Horizontal" )}
		),
		Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Create Bivariate plot.
3. Set weight as Y variable.
4. Set height as X variable.
5. Fit linear regression line.
6. Customize Y-axis scale to log.
7. Set Y-axis format to "Best".
8. Set Y-axis min to 50.
9. Set Y-axis max to 221.624013343.
10. Close Linear Fit outline box.



### Example 50
> **Summary**: Creates a bivariate plot with a fitted linear regression line, customizing Y and X axis scales to log format.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #LinearRegression, #LogScale, #Customization -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Scale( "Log" ), Format( "Best", 12 ), Min( 221.624013343 ), Max( 50 ), Inc( 1 ), Minor Ticks( 8 ),
			Rotated Labels( "Horizontal" )}
		),
		Dispatch( {}, "2", ScaleBox,
			{Scale( "Log" ), Format( "Best", 12 ), Min( 90 ), Max( 22 ), Inc( 1 ), Minor Ticks( 8 ), Rotated Labels( "Horizontal" )}
		),
		Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Fit linear regression line.
6. Customize Y axis scale.
7. Set Y axis to log scale.
8. Format Y axis labels.
9. Customize X axis scale.
10. Set X axis to log scale.



### Example 51
> **Summary**: Creates a bivariate plot with a fitted linear regression line, customizing Y and X axis settings for weight and height variables.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LinearRegression, #CustomAxisSettings, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Min( 50 ), Max( 500 ), Inc( 5 ), Minor Ticks( 4 ), Rotated Labels( "Horizontal" )} ),
		Dispatch( {}, "2", ScaleBox, {Min( 60 ), Max( 180 ), Inc( 20 ), Minor Ticks( 18 ), Rotated Labels( "Horizontal" )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Fit linear regression line.
6. Customize Y axis settings.
7. Set Y axis minimum to 50.
8. Set Y axis maximum to 500.
9. Set Y axis increment to 5.
10. Customize X axis settings.
11. Set X axis minimum to 60.
12. Set X axis maximum to 180.
13. Set X axis increment to 20.



### Example 52
> **Summary**: Creates a bivariate plot with a fitted linear regression line, displaying the relationship between weight and height on log-scaled axes.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LinearRegression, #LogScale, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Scale( "Log" ), Format( "Best", 12 ), Min( 10 ), Max( 1e+22 ), Inc( 1 ), Minor Ticks( 8 ), Rotated Labels( "Horizontal" )}
		),
		Dispatch( {}, "2", ScaleBox,
			{Scale( "Log" ), Format( "Best", 12 ), Min( 60 ), Max( 200000000 ), Inc( 1 ), Minor Ticks( 8 ), Rotated Labels( "Horizontal" )}
		),
		Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Fit linear regression line.
6. Change Y axis to log scale.
7. Set Y axis format to "Best".
8. Set Y axis min to 10.
9. Set Y axis max to 1e+22.
10. Hide linear fit outline box.



### Example 53
> **Summary**: Creates a bivariate plot with a fitted linear regression line, customizing the Y-axis to log scale and formatting it for best display.

<!-- Keywords: #BivariatePlot, #LinearRegression, #LogScale, #Customization, #JMPScripting -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Scale( "Log" ), Format( "Best", 12 ), Min( 10 ), Max( 1e+27 ), Inc( 1 ), Minor Ticks( 8 ), Rotated Labels( "Horizontal" )}
		),
		Dispatch( {}, "2", ScaleBox,
			{Scale( "Log" ), Format( "Best", 12 ), Min( 60 ), Max( 2e+25 ), Inc( 1 ), Minor Ticks( 8 ), Rotated Labels( "Horizontal" )}
		),
		Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Create Bivariate plot.
3. Set Y to weight.
4. Set X to height.
5. Fit linear regression line.
6. Customize Y-axis to log scale.
7. Set Y-axis format to best.
8. Set Y-axis min to 10.
9. Set Y-axis max to 1e+27.
10. Hide linear fit outline.



### Example 54
> **Summary**: Creates a bivariate plot with a linear fit line, customized axis labels and ticks, and outline box configuration.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #LinearFit, #CustomizedAxisLabels, #OutlineBox -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Inside Ticks( 1 ), Rotated Labels( "Horizontal" )} ),
		Dispatch( {}, "2", ScaleBox, {Inside Ticks( 1 ), Rotated Labels( "Horizontal" )} ),
		Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Fit linear regression line.
6. Customize Y axis ticks.
7. Set Y axis labels horizontal.
8. Customize X axis ticks.
9. Set X axis labels horizontal.
10. Close linear fit outline box.



### Example 55
> **Summary**: Runs a comprehensive analysis by creating bivariate plots, fit curves, one-way analyses, and contingency tables for categorical variables, while sending results to groups based on Sex and Age.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #FitCurve, #One-WayAnalysis, #ContingencyTable -->

**Code**:
```jsl
sd = Open("data_table.jmp");
biv = sd << Bivariate( Y( :Triglycerides ), X( :LDL ), Fit Line, By( :Sex, :Age ) );
biv << SendToByGroup;
fc = sd << Fit Curve( Y( :Triglycerides ), X( :LDL ), By( :Sex, :Age ) );
fc << SendToByGroup;
ow = sd << Oneway( Y( :Triglycerides ), X( :Smoking History ), By( :Sex, :Age ) );
ow << SendToByGroup;
fg = sd << Fit Group(
	Contingency(
		Y( :Heart History ),
		X( :Smoking History ),
		Contingency Table(
			Count( 1, Format( "Fixed Dec", 8, 0 ) ),
			Total %( 1, Format( "Fixed Dec", 8, 2 ) ),
			Col %( 1, Format( "Fixed Dec", 8, 2 ) ),
			Row %( 1, Format( "Fixed Dec", 8, 2 ) ),
			Expected( 0, Format( "Best", 8 ) ),
			Deviation( 0, Format( "Best", 8 ) ),
			Cell Chi Square( 0, Format( "Fixed Dec", 8, 4 ) ),
			Col Cum( 0, Format( "Fixed Dec", 8, 0 ) ),
			Col Cum %( 0, Format( "Fixed Dec", 8, 2 ) ),
			Row Cum( 0, Format( "Fixed Dec", 8, 0 ) ),
			Row Cum %( 0, Format( "Fixed Dec", 8, 2 ) )
		)
	),
	Contingency(
		Y( :Heart History ),
		X( :Alcohol use ),
		Contingency Table(
			Count( 1, Format( "Fixed Dec", 8, 0 ) ),
			Total %( 1, Format( "Fixed Dec", 8, 2 ) ),
			Col %( 1, Format( "Fixed Dec", 8, 2 ) ),
			Row %( 1, Format( "Fixed Dec", 8, 2 ) ),
			Expected( 0, Format( "Best", 8 ) ),
			Deviation( 0, Format( "Best", 8 ) ),
			Cell Chi Square( 0, Format( "Fixed Dec", 8, 4 ) ),
			Col Cum( 0, Format( "Fixed Dec", 8, 0 ) ),
			Col Cum %( 0, Format( "Fixed Dec", 8, 2 ) ),
			Row Cum( 0, Format( "Fixed Dec", 8, 0 ) ),
			Row Cum %( 0, Format( "Fixed Dec", 8, 2 ) )
		)
	),
	<<{Arrange in Rows( 2 )},
	Where( :Sex == "female" & :Age == 21 )
);
fg << SendToByGroup;
ds = sd << Distribution(
	Continuous Distribution( Column( :Triglycerides ), Process Capability( 0 ) ),
	Continuous Distribution( Column( :LDL ), Process Capability( 0 ) ),
	By( :Sex, :Age )
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Send bivariate plots to groups.
4. Create fit curve.
5. Send fit curves to groups.
6. Create one-way analysis.
7. Send one-way analysis to groups.
8. Create fit group for contingencies.
9. Send fit group to groups.
10. Create distribution analysis.



### Example 56
> **Summary**: Analyze and visualize lipid data by creating bivariate plots, fit curves, one-way analyses, and contingency tables, grouped by sex and age.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #FitCurve, #One-WayAnalysis, #ContingencyTable -->

**Code**:
```jsl
sd = Open("data_table.jmp");
biv = sd << Bivariate( Y( :Triglycerides ), X( :LDL ), Fit Line, By( :Sex, :Age ) );
biv << SendToByGroup;
fc = sd << Fit Curve( Y( :Triglycerides ), X( :LDL ), By( :Sex, :Age ) );
fc << SendToByGroup;
ow = sd << Oneway( Y( :Triglycerides ), X( :Smoking History ), By( :Sex, :Age ) );
ow << SendToByGroup;
fg = sd << Fit Group(
	Contingency(
		Y( :Heart History ),
		X( :Smoking History ),
		Contingency Table(
			Count( 1, Format( "Fixed Dec", 8, 0 ) ),
			Total %( 1, Format( "Fixed Dec", 8, 2 ) ),
			Col %( 1, Format( "Fixed Dec", 8, 2 ) ),
			Row %( 1, Format( "Fixed Dec", 8, 2 ) ),
			Expected( 0, Format( "Best", 8 ) ),
			Deviation( 0, Format( "Best", 8 ) ),
			Cell Chi Square( 0, Format( "Fixed Dec", 8, 4 ) ),
			Col Cum( 0, Format( "Fixed Dec", 8, 0 ) ),
			Col Cum %( 0, Format( "Fixed Dec", 8, 2 ) ),
			Row Cum( 0, Format( "Fixed Dec", 8, 0 ) ),
			Row Cum %( 0, Format( "Fixed Dec", 8, 2 ) )
		)
	),
	Contingency(
		Y( :Heart History ),
		X( :Alcohol use ),
		Contingency Table(
			Count( 1, Format( "Fixed Dec", 8, 0 ) ),
			Total %( 1, Format( "Fixed Dec", 8, 2 ) ),
			Col %( 1, Format( "Fixed Dec", 8, 2 ) ),
			Row %( 1, Format( "Fixed Dec", 8, 2 ) ),
			Expected( 0, Format( "Best", 8 ) ),
			Deviation( 0, Format( "Best", 8 ) ),
			Cell Chi Square( 0, Format( "Fixed Dec", 8, 4 ) ),
			Col Cum( 0, Format( "Fixed Dec", 8, 0 ) ),
			Col Cum %( 0, Format( "Fixed Dec", 8, 2 ) ),
			Row Cum( 0, Format( "Fixed Dec", 8, 0 ) ),
			Row Cum %( 0, Format( "Fixed Dec", 8, 2 ) )
		)
	),
	<<{Arrange in Rows( 2 )},
	Where( :Sex == "female" & :Age == 21 )
);
fg << SendToByGroup;
ds = sd << Distribution(
	Continuous Distribution( Column( :Triglycerides ), Process Capability( 0 ) ),
	Continuous Distribution( Column( :LDL ), Process Capability( 0 ) ),
	By( :Sex, :Age )
);
ds << SendToByGroup;
```

**Code Explanation**:

1. Open lipid data file.
2. Create bivariate plot for triglycerides vs LDL.
3. Group plots by sex and age.
4. Send grouped plots to report.
5. Create fit curve for triglycerides vs LDL.
6. Group fit curves by sex and age.
7. Send grouped fit curves to report.
8. Create one-way analysis for triglycerides by smoking history.
9. Group one-way analyses by sex and age.
10. Send grouped one-way analyses to report.



### Example 57
> **Summary**: Creates a bivariate plot with nonparametric density and histogram borders, using CD8 as the Y variable and CD3 as the X variable, while applying local data filtering based on Prin1.

<!-- Keywords: #BivariatePlot, #NonParametricDensity, #HistogramBorders, #LocalDataFiltering, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :CD8 ),
	X( :CD3 ),
	Automatic Recalc( 1 ),
	Histogram Borders( 1 ),
	Nonpar Density( 51, {Color Theme( "Spectral" )} ),
	Local Data Filter( Mode( Include( 0 ) ), Add Filter( columns( :Prin1 ) ) )
);
```

**Code Explanation**:

1. Open data_table data
2. Create Bivariate plot.
3. Set Y variable to CD8.
4. Set X variable to CD3.
5. Enable automatic recalculation.
6. Add histogram borders.
7. Plot nonparametric density.
8. Set color theme to Spectral.
9. Add local data filter.
10. Include Prin1 in filter.



### Example 58
> **Summary**: Peforms a bivariate analysis to visualize the relationship between weight and height, with automatic recalculation and customized line color, while filtering data by sex.

<!-- Keywords: #BivariateAnalysis, #DataFiltering, #LinePlot, #Recalculation, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
rpt = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Automatic Recalc( 1 ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	Local Data Filter( Add Filter( columns( :sex ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate analysis.
3. Set weight as Y variable.
4. Set height as X variable.
5. Enable automatic recalculation.
6. Fit linear regression line.
7. Customize line color to red.
8. Add local data filter.
9. Include sex column in filter.
10. Display report.



### Example 59
> **Summary**: Creates a linear regression line to visualize the relationship between weight and height, with customizable line color and text annotation.

<!-- Keywords: #JSLScriptingLanguage, #BivariateAnalysis, #LinearRegression, #CustomizationOptions, #ReportDispatch -->

**Code**:
```jsl
Open("data_table.jmp");
biv = Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	SendToReport(
		Dispatch( {"Linear Fit"}, "", ListBox,
			Add Text Annotation( Text( "test" ), Fixed Size( 0 ), Text Box( {220, 81, 256, 105} ), Tag Anchor( 18, -56 ), Minimized( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate analysis.
3. Set Y variable to weight.
4. Set X variable to height.
5. Fit linear regression line.
6. Customize line color.
7. Send report to display.
8. Dispatch to Linear Fit.
9. Add text annotation.
10. Set annotation properties.



### Example 60
> **Summary**: Creates a bivariate plot with a linear fit line, customized with a specific color, and adds a text annotation to the report.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #LinearFit, #Customization, #ReportGeneration -->

**Code**:
```jsl
Open("data_table.jmp");
biv = Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	SendToReport(
		Dispatch( {"Linear Fit"}, "", ListBox,
			Add Text Annotation( Text( "test" ), Fixed Size( 0 ), Text Box( {220, 81, 256, 105} ), Tag Anchor( 18, -56 ), Minimized( 1 ) )
		)
	)
);
biv << redo analysis;
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Fit linear regression line.
6. Customize line color.
7. Send report to window.
8. Dispatch to Linear Fit.
9. Add text annotation.
10. Redo analysis.



### Example 61
> **Summary**: Creates a bivariate plot with a linear fit line, using the 'Bivariate' platform in JMP to visualize the relationship between weight and height.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LinearFit, #DataVisualization, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Bivariate( Y( :weight ), X( :height ), Fit Line, Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} ) );
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set weight as Y variable.
4. Set height as X variable.
5. Fit linear regression line.
6. Access Linear Fit outline box.
7. Close Linear Fit outline box.



### Example 62
> **Summary**: Creates a linear fit model for weight based on height, displaying the result in a Text Edit Box.

<!-- Keywords: #JSLScriptingLanguage, #BivariateAnalysis, #LinearRegression, #TextEditBox, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Bivariate( Y( :weight ), X( :height ), Fit Line, Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} ) );
Report( obj )[Text Edit Box( 3 )] << Set Text( "Linear Fit Foo Bar" );
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate analysis.
3. Set Y variable to weight.
4. Set X variable to height.
5. Fit linear regression line.
6. Close Linear Fit outline box.
7. Access report object.
8. Select third Text Edit Box.
9. Set text to "Linear Fit Foo Bar".



### Example 63
> **Summary**: Creates a bivariate plot with a fitted linear regression line and captures its print view picture, repeating this process 19 times in new windows.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #LinearRegression, #PictureCapture, #LoopControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
pic = Report( obj ) << Get Picture( Type( "Bitmap" ), View( "Print" ) );
For( i = 1, i < 20, i++,
	w = New Window( Char( i ), Picture Box( pic ) );
	pic = w << Get Picture( Type( "Bitmap" ), View( "Print" ) );
	w << Close Window;
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Fit linear regression line.
4. Capture print view picture.
5. Loop 19 times.
6. Create new window.
7. Add picture box.
8. Update picture from window.
9. Close window.
10. Repeat loop.



### Example 64
> **Summary**: Creates and displays a series of pictures from a bivariate analysis, utilizing the Bivariate platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #PictureDisplay, #LoopControl, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
pic = Report( obj ) << Get Picture( Type( "Bitmap" ), View( "Print" ) );
For( i = 1, i < 20, i++,
	w = New Window( Char( i ), Picture Box( pic ) );
	pic = w << Get Picture( Type( "Bitmap" ), View( "Print" ) );
	w << Close Window;
);
New Window( "pictures", H List Box( Tab Page Box( "Final pic", Picture Box( pic ) ) ) );
```

**Code Explanation**:

1. Open data table.
2. Create bivariate analysis.
3. Capture initial picture.
4. Loop 19 times.
5. Create new window.
6. Display picture.
7. Update picture from window.
8. Close window.
9. End loop.
10. Display final picture.



### Example 65
> **Summary**: Creates two pictures from a bivariate plot, with one picture having an opaque background and the other having a transparent background.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #PictureGeneration, #TransparentBackground, #ReportPNG -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Pref( Transparent background for report PNG images( 0 ) );
pic1 = Report( obj ) << Get Picture( Type( "Bitmap" ), View( "Print" ) );
Pref( Transparent background for report PNG images( 1 ) );
pic2 = Report( obj ) << Get Picture( Type( "Bitmap" ), View( "Print" ) );
New Window( "pictures",
	H List Box(
		Tab Page Box( "Opaque", Picture Box( pic1 ) ),
		Tab Page Box( "Transparent", Picture Box( pic2 ) ),
		<<BackgroundColor( "Light Yellow" )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set transparency preference off.
4. Capture opaque picture.
5. Set transparency preference on.
6. Capture transparent picture.
7. Create new window.
8. Add horizontal list box.
9. Add opaque tab page.
10. Add transparent tab page.



### Example 66
> **Summary**: Creates and customizes bivariate plots for RunPulse vs RstPulse, with conditional image addition based on host platform.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlotting, #ConditionalLogic, #ImageProcessing, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv1 = dt << Bivariate( Y( :RunPulse ), X( :RstPulse ), Fit Line );
If( Host is( windows ),
	If( Directory Exists( "C:\temp" ) & Is Directory Writable( "C:\temp" ),
		img = New Image( "$SAMPLE_IMAGES/pi.gif" );
		img << Save Picture( "C:\temp\pi.gif" );
	,
		Create Directory( "C:\temp" );
		If( Is Directory Writable( "C:\temp" ),
			img = New Image( "$SAMPLE_IMAGES/pi.gif" );
			img << Save Picture( "C:\temp\pi.gif" );
		);
	);
	Try( Report( biv1 )[framebox( 1 )] << Add Image( Open( "C:\temp\pi.gif" ), fillGraph ) );
);
If( Host is( mac ),
	Try( Report( biv1 )[framebox( 1 )] << Add Image( Open( "$SAMPLE_IMAGES/pi.gif" ), fillGraph ) )
);
Report( biv1 )[Outline Box( 2 )] << Close;
biv2 = dt << Bivariate( Y( :RunPulse ), X( :RstPulse ), Fit Line );
Report( biv2 )[framebox( 1 )] << Add Image( Open( "$SAMPLE_IMAGES/pi.gif" ), fillgraph );
Report( biv2 )[Outline Box( 2 )] << Close;
biv3 = Bivariate( Y( :RunPulse ), X( :RstPulse ), Fit Line( {Line Color( {213, 72, 87} )} ) );
Report( biv3 )[framebox( 1 )] << Add Image( Open( "$SAMPLE_IMAGES/windmap.png" ), fillgraph );
seg = Report( biv3 )[FrameBox( 1 )] << Find Seg( "PictSeg" );
seg << Set Blob(
	Char To Blob(
		"1iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEeSURBVDhPY2CgBzjz+Ov/3bc+kYTvvvnxH8NtIIOU2q7+Zyg+RzLu2PcC1UCQDYI1F0k2CGY5hoFpqx+BDQtddO8/SBKsAMh3mXEbzgeJgfjYxEFBBPcyzHXIguAwARq46sJ7FK/ADEQxAD3wQJrQFYD5QAPRxYkyEFvKIWTgu29/MGMVXxKcefw1VhfCI47U9AuLFAx9sCRFqoGg2AYnCXRAroGgBA5O5NQwEJZkwDFKDQNh4Qf2NhEGgmIcZ7pEzoIY2QlkODQMkeVAbJwGwhIutlwCMg+58Cjf8vQ/CIPUYk2XsMQMUgBKb9gUwfI8comENWhAtoOKL5ylBzQsQZYgl0ogNtayEBb2oByCNeyQIgdkKKxEIjkLkpohAOFsyohHprbCAAAAAElFTkSuQmCC",
		"base64compressed"
	),
	"png"
);
Report( biv3 )[Outline Box( 2 )] << Close;
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot for RunPulse vs RstPulse.
3. Check if host is Windows.
4. Verify C:   emp directory exists and is writable.
5. Load pi.gif image.
6. Save pi.gif to C:   emp.
7. Add pi.gif to bivariate plot if Windows.
8. Check if host is Mac.
9. Add pi.gif to bivariate plot if Mac.
10. Close second outline box in bivariate report.
11. Create second bivariate plot for RunPulse vs RstPulse.
12. Add pi.gif to second bivariate plot.
13. Close second outline box in second bivariate report.
14. Create third bivariate plot with custom line color.
15. Add windmap.png to third bivariate plot.
16. Find segment named "PictSeg" in third plot.
17. Set segment blob with base64 compressed image.
18. Close second outline box in third bivariate report.



### Example 67
> **Summary**: Creates bivariate plots and image saving for a data table, with conditional logic for Windows and Mac platforms.

<!-- Keywords: #JSLScripting, #BivariatePlot, #ImageSaving, #ConditionalLogic, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv1 = dt << Bivariate( Y( :RunPulse ), X( :RstPulse ), Fit Line );
If( Host is( windows ),
	If( Directory Exists( "C:\temp" ) & Is Directory Writable( "C:\temp" ),
		img = New Image( "$SAMPLE_IMAGES/pi.gif" );
		img << Save Picture( "C:\temp\pi.gif" );
	,
		Create Directory( "C:\temp" );
		If( Is Directory Writable( "C:\temp" ),
			img = New Image( "$SAMPLE_IMAGES/pi.gif" );
			img << Save Picture( "C:\temp\pi.gif" );
		);
	);
	Try( Report( biv1 )[framebox( 1 )] << Add Image( Open( "C:\temp\pi.gif" ), fillGraph ) );
);
If( Host is( mac ),
	Try( Report( biv1 )[framebox( 1 )] << Add Image( Open( "$SAMPLE_IMAGES/pi.gif" ), fillGraph ) )
);
Report( biv1 )[Outline Box( 2 )] << Close;
biv2 = dt << Bivariate( Y( :RunPulse ), X( :RstPulse ), Fit Line );
Report( biv2 )[framebox( 1 )] << Add Image( Open( "$SAMPLE_IMAGES/pi.gif" ), fillgraph );
Report( biv2 )[Outline Box( 2 )] << Close;
biv3 = Bivariate( Y( :RunPulse ), X( :RstPulse ), Fit Line( {Line Color( {213, 72, 87} )} ) );
Report( biv3 )[framebox( 1 )] << Add Image( Open( "$SAMPLE_IMAGES/windmap.png" ), fillgraph );
seg = Report( biv3 )[FrameBox( 1 )] << Find Seg( "PictSeg" );
seg << Set Blob(
	Char To Blob(
		"1iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEeSURBVDhPY2CgBzjz+Ov/3bc+kYTvvvnxH8NtIIOU2q7+Zyg+RzLu2PcC1UCQDYI1F0k2CGY5hoFpqx+BDQtddO8/SBKsAMh3mXEbzgeJgfjYxEFBBPcyzHXIguAwARq46sJ7FK/ADEQxAD3wQJrQFYD5QAPRxYkyEFvKIWTgu29/MGMVXxKcefw1VhfCI47U9AuLFAx9sCRFqoGg2AYnCXRAroGgBA5O5NQwEJZkwDFKDQNh4Qf2NhEGgmIcZ7pEzoIY2QlkODQMkeVAbJwGwhIutlwCMg+58Cjf8vQ/CIPUYk2XsMQMUgBKb9gUwfI8comENWhAtoOKL5ylBzQsQZYgl0ogNtayEBb2oByCNeyQIgdkKKxEIjkLkpohAOFsyohHprbCAAAAAElFTkSuQmCC",
		"base64compressed"
	),
	"png"
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Check if host is Windows.
4. Check if C:   emp exists and is writable.
5. If not, create C:   emp directory.
6. Save pi.gif to C:   emp.
7. Try adding pi.gif to plot frame.
8. Check if host is Mac.
9. Try adding pi.gif to plot frame.
10. Close second outline box.
11. Create another bivariate plot.
12. Add pi.gif to plot frame.
13. Close second outline box.
14. Create third bivariate plot with custom line color.
15. Add windmap.png to plot frame.
16. Find PictSeg segment.
17. Set segment blob with base64 image data.



### Example 68
> **Summary**: Creates a bivariate analysis report with a linear fit line, customizing the line color and report settings.

<!-- Keywords: #BivariateAnalysis, #LinearFit, #ReportCustomization, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	SendToReport( Dispatch( {"Linear Fit", "Summary of Fit"}, "", TableBox, {Row Height Scale( 2 ), Row Vertical Alignment( "Center" )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Perform bivariate analysis.
3. Set weight as Y variable.
4. Set height as X variable.
5. Fit linear regression line.
6. Customize line color.
7. Adjust report settings.
8. Set row height scale.
9. Center row vertically.
10. Display the report.



### Example 69
> **Summary**: Peforms a bivariate analysis to visualize the relationship between weight and height, with customized line color and report output.

<!-- Keywords: #BivariateAnalysis, #LinearRegression, #Customization, #ReportOutput, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {"Linear Fit"}, "Analysis of Variance", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Linear Fit"}, "Parameter Estimates", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate analysis object.
3. Set Y variable to weight.
4. Set X variable to height.
5. Fit linear regression line.
6. Customize line color.
7. Close Analysis of Variance report.
8. Close Parameter Estimates report.
9. Save report object.



### Example 70
> **Summary**: Creates a bivariate plot with a custom text annotation, utilizing the Bivariate platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #CustomAnnotation, #DataVisualization, #JMP -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport( Dispatch( {}, "Bivar Plot", FrameBox, Add Text Annotation( Text( "test" ), Text Box( {12, 28, 48, 51} ) ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set Y variable.
4. Set X variable.
5. Send report message.
6. Dispatch to report window.
7. Find bivar plot.
8. Access frame box.
9. Add text annotation.
10. Set text content.



### Example 71
> **Summary**: Creates a bivariate plot with a fitted linear regression line, displaying annotations for categorical variables TV, Film, Art, and Restaurant.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #LinearRegression, #DataVisualization, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			{Add Text Annotation( Text( "[a b c d]" ), Fixed Size( 1 ), Text Box( [1 1 80 25] ), Background Color( "Orange" ) ),
			Add Text Annotation( Text( "[a,b,c,d]" ), Fixed Size( 1 ), Text Box( [1, 31, 80, 55] ), Background Color( "Orange" ) ),
			Add Text Annotation( Text( "[a,b], [c,d]" ), Fixed Size( 1 ), Text Box( [1, 61], [80, 85] ), Background Color( "Orange" ) ),
			Add Text Annotation( Text( "[a b], [c d]" ), Fixed Size( 1 ), Text Box( [1 91], [80 115] ), Background Color( "Orange" ) ),
			Add Text Annotation( Text( "{a,b,c,d}" ), Fixed Size( 1 ), Text Box( {1, 121, 80, 145} ), Background Color( "Orange" ) ),
			Add Text Annotation(
				Text( "{ {a,b}, {c,d} }" ),
				Fixed Size( 1 ),
				Text Box( {{1, 151}, {80, 175}} ),
				Background Color( "Orange" )
			), Add Text Annotation( Text( "a,b,c,d" ), Fixed Size( 1 ), Text Box( 1, 181, 80, 205 ), Background Color( "Orange" ) )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set weight as Y variable.
4. Set height as X variable.
5. Fit linear regression line.
6. Customize line color.
7. Send report commands.
8. Add first text annotation.
9. Add second text annotation.
10. Add remaining text annotations.



### Example 72
> **Summary**: Creates a bivariate plot to analyze the relationship between 'weight' and 'height' in a data table, utilizing the Bivariate platform.

<!-- Keywords: #BivariatePlot, #DataAnalysis, #JMPScriptingLanguage, #StatisticalVisualization, #WeightAndHeight -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Assign report object.



### Example 73
> **Summary**: Creates a bivariate plot to visualize the relationship between 'weight' and 'height', with an added horizontal line annotation.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LineAnnotation, #DataVisualization, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Line Annotation( Line( 160, 235, 240, 235 ) );
```

**Code Explanation**:

1. Open data_table data
2. Create Bivariate plot.
3. Get Bivariate report.
4. Add horizontal line annotation.



### Example 74
> **Summary**: Creates a bivariate plot with weight as the Y variable and height as the X variable, sending the report to dispatch with a pin annotation value of 123.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #DispatchReport, #PinAnnotation, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "Bivar Plot", FrameBox, Add Pin Annotation( 123 ) ) ) );
```

**Code Explanation**:

1. Open data table.
2. Create Bivariate plot.
3. Set weight as Y variable.
4. Set height as X variable.
5. Send report to dispatch.
6. Add pin annotation.
7. Set pin annotation value to 123.



### Example 75
> **Summary**: Creates a bivariate plot with a fit line and text annotation, using the Bivariate platform in JMP to visualize the relationship between weight and height.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #FitLine, #TextAnnotation, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			{DispatchSeg( Line Seg( 1 ), {Line Color( {213, 72, 87} )} ), Add Text Annotation(
				Text( "Annotation wrapping 
onto two lines" ),
				Fixed Size( 0 ),
				Text Box( {43, 55, 213, 104} ),
				Filled( 0 ),
				Text Color( "Gray" ),
				Font( "Segoe UI", 11, "Bold" )
			)}
		),
		Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Add fit line with color.
6. Send report to JMP.
7. Dispatch to bivariate plot frame.
8. Set fit line color again.
9. Add text annotation.
10. Configure text annotation properties.



### Example 76
> **Summary**: Creates a bivariate plot with multiple fit lines, including linear regression, mean, Cauchy curve, and spline, for analyzing the relationship between height and weight in a data table.

<!-- Keywords: #BivariatePlot, #FitLines, #LinearRegression, #DataAnalysis, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Bivariate(
	Y( :height ),
	X( :weight ),
	Automatic Recalc( 1 ),
	Fit Line( {Plot Residuals( 1 ), Line Color( {213, 72, 87} )} ),
	Fit Mean( {Line Color( {57, 177, 67} )} ),
	Fit Cauchy( {Line Color( {31, 182, 182} )} ),
	Fit Spline( 1000000, {Line Color( {201, 37, 205} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Format( "Custom", Formula( Char( value ) || " lb." ), 12 )} ),
		Dispatch( {}, "2", ScaleBox, {Format( "Custom", Formula( Char( value ) || " in." ), 12 )} ),
		Dispatch( {}, "Bivar Plot", FrameBox,
			{DispatchSeg( Line Seg( 9 ), {Line Color( {31, 182, 182} )} ), DispatchSeg( Line Seg( 10 ), {Line Color( {201, 37, 205} )} )}
		),
		Dispatch( {"Linear Fit", "Diagnostics Plots", "Actual by Predicted Plot"}, "2", ScaleBox,
			{Format( "Custom", Formula( Char( value ) || " in." ), 12 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set Y variable.
4. Set X variable.
5. Enable automatic recalculation.
6. Fit linear regression.
7. Plot residuals for linear fit.
8. Set line color for linear fit.
9. Fit mean line.
10. Set line color for mean fit.
11. Fit Cauchy curve.
12. Set line color for Cauchy fit.
13. Fit spline.
14. Set line color for spline.
15. Customize Y axis format.
16. Customize X axis format.
17. Change Cauchy line color.
18. Change spline line color.
19. Customize actual by predicted plot format.



### Example 77
> **Summary**: Creates a bivariate plot to visualize the relationship between weight and height, with histogram borders and a linear regression line.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #HistogramBorders, #LinearRegressionLine, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( 100 <= :weight < 120 );
Bivariate(
	Y( :weight ),
	X( :height ),
	Histogram Borders( 1 ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	SendToReport(
		Dispatch( {}, "Bivariate Report", FrameBox( 2 ),
			{Background Color( 0 ), DispatchSeg( Hist Seg( 1 ), {Line Color( "White" ), Line Width( 2 )} )}
		),
		Dispatch( {}, "Bivariate Report", FrameBox( 4 ),
			{Background Color( 0 ), DispatchSeg( Hist Seg( 1 ), {Line Color( "White" ), Line Width( 2 )} )}
		),
		Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Select rows where weight is between 100 and 120.
3. Create Bivariate plot.
4. Set Y variable as weight.
5. Set X variable as height.
6. Enable histogram borders.
7. Fit a linear regression line.
8. Change line color to RGB(212, 73, 88).
9. Customize report background to black.
10. Set histogram border line color to white and width to 2.



### Example 78
> **Summary**: Creates a bivariate plot with a linear fit line, using the 'Bivariate' platform in JMP to visualize the relationship between weight and height.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LinearFit, #DataVisualization, #GraphBuilder -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			{DispatchSeg(
				Marker Seg( 1 ),
				{Set Graphlet(
					Picture( Graph Builder( Size( 125, 125 ), Show Control Panel( 0 ), Variables( X( :name ) ), Elements( Bar( X ) ) ) ),
					Title( " Graphlet Graphlet" )
				)}
			), Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 4 ),
				Index Row( 4 ),
				UniqueID( 710572804 ),
				FoundPt( {100, 275} ),
				Origin( {51.8984375, 63} ),
				Offset( {-13, -131} ),
				Tag Line( 1 )
			)}
		),
		Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Set Y variable as weight.
4. Set X variable as height.
5. Fit linear regression line.
6. Customize fit line color.
7. Send report commands.
8. Dispatch to bivariate plot frame.
9. Set graphlet with picture.
10. Add pin annotation to graph.



### Example 79
> **Summary**: Creates a bivariate plot to visualize the relationship between height and weight for individuals aged 12 or 13.

<!-- Keywords: #BivariatePlot, #JMPScriptingLanguage, #DataFiltering, #AgeRangeFiltering, #HeightWeightRelationship -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate( Y( :height ), X( :weight ), Where( :age == 12 | :age == 13 ) );
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set Y variable to height.
4. Set X variable to weight.
5. Filter for age 12 or 13.



### Example 80
> **Summary**: Creates a bivariate plot with linear regression lines, grouped by age and arranged in rows, to visualize the relationship between weight and height.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LinearRegression, #GroupedData, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
grp = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Report( 1 )} ),
	By( :age ),
	Group Options( Layout( "Arrange in Rows" ), N Across( 3 ), Return Group )
);
grp << Order By( "Goodness of Fit", Descending( 1 ) );
grp << Order By( "Goodness of Fit", Descending( 0 ) );
grp << Order By( :height, Descending( 1 ), Order Statistic( "Mean" ) );
grp << Order By( :height, Descending( 1 ), Order Statistic( "Max" ) );
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Fit linear regression line.
4. Group by age.
5. Arrange groups in rows.
6. Set 3 groups per row.
7. Return grouped plots.
8. Order by goodness of fit descending.
9. Reorder by goodness of fit descending.
10. Order by height mean descending.
11. Order by height max descending.



### Example 81
> **Summary**: Analyze and visualize categorical variables TV, Film, Art, and Restaurant using JMP's Bivariate, Contour Plot, Oneway, and Distribution platforms.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #ContourPlot, #OnewayAnalysis, #DistributionPlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
grp = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Report( 1 )} ),
	By( :age ),
	Group Options( Layout( "Arrange in Rows" ), N Across( 3 ), Return Group )
);
grp << Order By( "Goodness of Fit", Descending( 1 ) );
grp << Order By( "Goodness of Fit", Descending( 0 ) );
grp << Order By( :height, Descending( 1 ), Order Statistic( "Mean" ) );
grp << Order By( :height, Descending( 1 ), Order Statistic( "Max" ) );
dt = Open("data_table.jmp");
grp = dt << Contour Plot(
	X( :Longitude, :Latitude ),
	Y( :OZONE, :CO ),
	Show Data Points( 0 ),
	Fill Areas( 0 ),
	Label Contours( 0 ),
	Transform( "Range Normalized" ),
	Group Options( Return Group( 1 ) )
);
grp << Order By( Order( "Response" ), Descending( 1 ) );
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
dt = Open("data_table.jmp");
grp = dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Multiple Response Distribution( Column( :sports ) ),
	By( :sex ),
	Group Options( Layout( "Arrange in Rows" ), N Across( 3 ), Return Group( 1 ) )
);
grp << Order By( :sports, Descending( 1 ), Order Statistic( "Count" ) );
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot for weight vs height.
3. Fit line to data.
4. Group plots by age.
5. Arrange groups in rows.
6. Order groups by goodness of fit descending.
7. Reorder groups by goodness of fit descending.
8. Order groups by height mean descending.
9. Order groups by height max descending.
10. Open data table;
11. Create contour plot for ozone and CO.
12. Hide data points and fill areas.
13. Label contours off.
14. Normalize transform.
15. Group plots by response descending.
16. Open data table;
17. Create oneway plot for weight vs sex.
18. Fit line to data.
19. Group plots by age.
20. Arrange groups in rows.
21. Order groups by sex count descending.
22. Order groups by weight max descending.
23. Reorder groups by sex descending.
24. Open data table;
25. Create distribution plot for age and sports.
26. Group plots by sex.
27. Arrange groups in rows.
28. Order groups by sports count descending.



### Example 82
> **Summary**: Creates and customizes various JMP graphs, including bivariate plots with fitted lines, contour plots, and distribution plots, using a combination of data manipulation and graphing techniques.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #ContourPlot, #DistributionPlot, #DataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
grp = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Report( 1 )} ),
	By( :age ),
	Group Options( Layout( "Arrange in Rows" ), N Across( 3 ), Return Group )
);
grp << Order By( "Goodness of Fit", Descending( 1 ) );
grp << Order By( "Goodness of Fit", Descending( 0 ) );
grp << Order By( :height, Descending( 1 ), Order Statistic( "Mean" ) );
grp << Order By( :height, Descending( 1 ), Order Statistic( "Max" ) );
dt = Open("data_table.jmp");
grp = dt << Contour Plot(
	X( :Longitude, :Latitude ),
	Y( :OZONE, :CO ),
	Show Data Points( 0 ),
	Fill Areas( 0 ),
	Label Contours( 0 ),
	Transform( "Range Normalized" ),
	Group Options( Return Group( 1 ) )
);
grp << Order By( Order( "Response" ), Descending( 1 ) );
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
dt = Open("data_table.jmp");
grp = dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Multiple Response Distribution( Column( :sports ) ),
	By( :sex ),
	Group Options( Layout( "Arrange in Rows" ), N Across( 3 ), Return Group( 1 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Fit linear line.
4. Group by age.
5. Arrange groups in rows.
6. Sort by goodness of fit descending.
7. Open data table;
8. Create contour plot.
9. Group options return group.
10. Sort by response descending.



### Example 83
> **Summary**: Creates and saves a bivariate analysis with by-group script for a data table, utilizing JMP's Bivariate platform.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #ByGroupScript, #DataTableManipulation, #JSLCode -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :age ) );
biv[1] << Save Script for All Objects;
biv[1] << Save By Group Script to Script Window;
Data Table("data_table") << Bivariate( Y( :weight ), X( :height ), By( :age ) );
```

**Code Explanation**:

1. Open data table.
2. Create bivariate analysis.
3. Save script for all objects.
4. Save by group script to window.
5. Repeat bivariate analysis.



### Example 84
> **Summary**: Creates bivariate plots by sex, with customized y-axis ranges and marker settings, and saves the report to a specified file.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlotting, #DataVisualization, #CustomizationOptions, #ReportSaving -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
Report( biv[1] )[AxisBox( 2 )] << Min( 52 ) << Max( 70 );
Report( biv[2] )[FrameBox( 1 )] << Marker Size( 0 );
Report( biv[1] ) << Save Window Report( "$TEMP/byplatform.jrp", embed data( 0 ) );
Report( biv[1] ) << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plots by sex.
3. Set y-axis min to 52 for males.
4. Set y-axis max to 70 for males.
5. Remove markers for females.
6. Save report to "$TEMP/byplatform.jrp".
7. Embed data in report.
8. Close report window.



### Example 85
> **Summary**: Creates a bivariate plot with a specified range for the y-axis and hides markers for females, saving the report to a temporary file.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataVisualization, #ReportGeneration, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
Report( biv[1] )[AxisBox( 2 )] << Min( 52 ) << Max( 70 );
Report( biv[2] )[FrameBox( 1 )] << Marker Size( 0 );
Report( biv[1] ) << Save Window Report( "$TEMP/byplatform.jrp", embed data( 0 ) );
Report( biv[1] ) << Close Window;
Open( "$TEMP/byplatform.jrp" );
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set y-axis minimum.
4. Set y-axis maximum.
5. Hide markers for females.
6. Save report to temp file.
7. Close original window.
8. Open saved report file.



### Example 86
> **Summary**: Creates a bivariate plot to visualize the relationship between height and weight, filtered by sex and age 15.

<!-- Keywords: #BivariatePlot, #ByGrouping, #FilteringData, #JMPScriptingLanguage, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ), Where( :age == 15 ) );
Report( biv[1] ) << Save Window Report( "$TEMP/bywhereplatform.jrp", embed data( 0 ) );
Report( biv[1] ) << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Set X variable to height.
4. Set Y variable to weight.
5. Group by sex.
6. Filter for age 15.
7. Save report to temporary file.
8. Embed data in report.
9. Close report window.



### Example 87
> **Summary**: Creates a bivariate plot for height vs weight, grouped by sex and filtered to age 15, with the report saved as a JMP file.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #ByGroup, #FilteringData, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ), Where( :age == 15 ) );
Report( biv[1] ) << Save Window Report( "$TEMP/bywhereplatform.jrp", embed data( 0 ) );
Report( biv[1] ) << Close Window;
Open( "$TEMP/bywhereplatform.jrp" );
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot for height vs weight.
3. Group by sex.
4. Filter where age equals 15.
5. Save report to "bywhereplatform.jrp".
6. Do not embed data in report.
7. Close the Bivariate window.
8. Open the saved report file.



### Example 88
> **Summary**: Peforms a bivariate analysis to visualize the relationship between weight and height, with a fitted linear regression line and customized color.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #LinearRegression, #DataVisualization, #Customization -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate( Y( :weight ), X( :height ), Fit Line( {Line Color( {213, 72, 87} )} ) );
```

**Code Explanation**:

1. Open data table;
2. Launch Bivariate analysis.
3. Set Y variable to weight.
4. Set X variable to height.
5. Fit linear regression line.
6. Customize line color.



### Example 89
> **Summary**: Peforms a bivariate analysis to visualize the relationship between weight and age, with histogram borders and summary statistics.

<!-- Keywords: #BivariateAnalysis, #HistogramBorders, #SummaryStatistics, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate( Y( :weight ), X( :age ), Histogram Borders( 1 ), Summary Statistics( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Perform bivariate analysis.
3. Set Y variable to weight.
4. Set X variable to age.
5. Enable histogram borders.
6. Display summary statistics.



### Example 90
> **Summary**: Peforms a bivariate analysis to model the relationship between height and weight, applying special transformations and nonparametric density plots, with customizable report title and frame size.

<!-- Keywords: #BivariateAnalysis, #SpecialTransformations, #NonParametricDensity, #CustomizableReport, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	Fit Special( xTran( "Sqrt" ), yTran( "Log" ), {Line Color( {213, 72, 87} )} ),
	Nonpar Density,
	SendToReport(
		Dispatch( {}, "Bivariate Fit of height By weight", OutlineBox,
			{Set Title( "Fit Special: log(y) and sqrt(x), Nonpar Density: 5% Contours, Contour Lines, Report" )}
		),
		Dispatch( {}, "Bivar Plot", FrameBox, {Frame Size( 322, 240 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate analysis object.
3. Set Y variable to height.
4. Set X variable to weight.
5. Apply special fit with transformations.
6. Include nonparametric density plot.
7. Customize report title.
8. Set frame size for plot.
9. Save analysis object.



### Example 91
> **Summary**: Creates a bivariate plot to visualize the relationship between LogHist1 and LogHist0 in the data table.

<!-- Keywords: #BivariatePlot, #JSLScripting, #DataVisualization, #LogisticRegression, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Bivariate( Y( :LogHist1 ), X( :LogHist0 ) );
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set Y variable to LogHist1.
4. Set X variable to LogHist0.



### Example 92
> **Summary**: Runs a paired t-test analysis on two continuous variables, LogHist1 and LogHist0, using the Bivariate platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #PairedT-Test, #ContinuousVariables, #DataAnalysis -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Bivariate( Y( :LogHist1 ), X( :LogHist0 ) );
obj << Paired t test;
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create bivariate object.
4. Add paired t-test.



### Example 93
> **Summary**: Creates a bivariate plot with height as the Y variable and weight as the X variable, sending the report to a window with an angled tick label orientation.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataVisualization, #ReportOutput, #TickLabelOrientation -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	SendToReport(
		Dispatch( {}, "Bivariate Fit of height By weight", OutlineBox, {Set Title( "Tick Label Orientation: Angled" )} ),
		Dispatch( {}, "2", ScaleBox, {Rotated Labels( "Angled" )} )
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Create bivariate plot.
3. Set Y variable to height.
4. Set X variable to weight.
5. Send report to window.
6. Set title of plot.
7. Rotate tick labels.
8. Angle tick labels.



### Example 94
> **Summary**: Creates a bivariate plot to visualize the relationship between height and weight, with interactive features for customized display.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #InteractiveVisualization, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	SendToReport(
		Dispatch( {}, "Bivariate Fit of height By weight", OutlineBox, {Set Title( "Tick Label Orientation: Vertical" )} ),
		Dispatch( {}, "2", ScaleBox, {Rotated Labels( "Vertical" )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set Y variable to height.
4. Set X variable to weight.
5. Access report window.
6. Set title to "Tick Label Orientation: Vertical".
7. Access second scale box.
8. Rotate labels to vertical.



### Example 95
> **Summary**: Creates a bivariate plot to analyze the relationship between height and weight, with customizable title and axis label settings.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataVisualization, #CustomizationOptions, #ReportObject -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	SendToReport(
		Dispatch( {}, "Bivariate Fit of height By weight", OutlineBox, {Set Title( "No Y-axis label" )} ),
		Dispatch( {}, "", AxisBox, {Remove Axis Label} )
	)
);
row = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set Y-axis title.
4. Remove axis label.
5. Assign plot to object.
6. Retrieve report object.



### Example 96
> **Summary**: Peforms a bivariate analysis to visualize the relationship between 'height' and 'weight', removing Y-axis and axis labels, and displaying the report.

<!-- Keywords: #BivariateAnalysis, #JMPScriptingLanguage, #DataVisualization, #ReportGeneration, #Customization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	SendToReport(
		Dispatch( {}, "Bivariate Fit of height By weight", OutlineBox, {Set Title( "No Y-axis label" )} ),
		Dispatch( {}, "", AxisBox, {Remove Axis Label} )
	)
);
row = obj << report;
axisbox = row[axis box( 1 )] << Show Labels( 0 );
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate analysis.
3. Set Y variable to "height".
4. Set X variable to "weight".
5. Remove Y-axis label.
6. Remove axis label.
7. Retrieve report object.
8. Access first axis box.
9. Hide axis labels.
10. Save changes.



### Example 97
> **Summary**: Creates bivariate plots with weight vs height, fitting linear regressors and customizing scales and reference lines.

<!-- Keywords: #JSLScripting, #BivariatePlot, #LinearRegression, #Customization, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv2 = Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Scale( "Log" ), Format( "Best", 12 ), Min( 10 ), Max( 1e+28 ), Inc( 1 ), Minor Ticks( 8 ), Rotated Labels( "Horizontal" )}
		),
		Dispatch( {}, "2", ScaleBox,
			{Scale( "Log" ), Format( "Best", 12 ), Min( 60 ), Max( 1e+50 ), Inc( 1 ), Minor Ticks( 8 ), Rotated Labels( "Horizontal" )}
		)
	)
);
biv3 = Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Max( 75 ), Add Ref Line( 62.1, Dotted, "Black", "End", 1 ), Add Ref Line( 67, Dotted, "Black", "Tie", 1 ),
			Add Ref Line( 66, Dotted, "Medium Dark Red", "color", 1 ), Rotated Labels( "Horizontal" )}
		),
		Dispatch( {}, "2", ScaleBox,
			{Max( 220 ), Add Ref Line( 118, Dashed, "Dark Green", "Side", 1 ), Add Ref Line( 138, Solid, "Medium Dark Blue", "Fred", 1 ),
			Add Ref Line( 135, DashDot, "Medium Dark Red", "End", 2 ), Rotated Labels( "Horizontal" )}
		),
		Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 2 )} )
	)
);
dist = Distribution(
	Continuous Distribution(
		Column( :height ),
		Quantiles( 0 ),
		Summary Statistics( 0 ),
		Process Capability(
			Use Column Property Specs,
			Process Capability Analysis(
				Process Summary( 0 ),
				Overall Sigma Capability( 0 ),
				Nonconformance( 0 ),
				Within Sigma Capability( 0 )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot with weight vs height.
3. Fit a linear regressor on the plot.
4. Set y-axis scale to log.
5. Set x-axis scale to log.
6. Create another bivariate plot with weight vs height.
7. Fit a linear regressor on the plot.
8. Set y-axis maximum to 75.
9. Add reference lines to y-axis.
10. Add reference lines to x-axis.



### Example 98
> **Summary**: Creates a bivariate plot to visualize the relationship between 'height' and 'weight', with fitted linear regression and mean lines, and customized X-axis scale and format.

<!-- Keywords: #BivariatePlot, #LinearRegression, #MeanLine, #LogScale, #CustomFormat -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	Fit Mean( {Line Color( {57, 177, 67} )} ),
	SendToReport(
		Dispatch( {}, "Bivariate Fit of height By weight", OutlineBox, {Set Title( "Axis: Scale Log" )} ),
		Dispatch( {}, "2", ScaleBox,
			{Scale( "Log" ), Format( "Best", 12 ), Min( 49.90625 ), Max( 72.40625 ), Inc( 1 ), Minor Ticks( 1 ),
			Rotated Labels( "Horizontal" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set Y variable to "height".
4. Set X variable to "weight".
5. Fit linear regression line.
6. Fit mean line.
7. Set report title.
8. Change X-axis scale to log.
9. Set X-axis format to "Best".
10. Adjust X-axis min, max, increment, and ticks.



### Example 99
> **Summary**: Creates a bivariate plot to visualize the relationship between height and weight, with customizable title and scale settings.

<!-- Keywords: #JSLScripting, #BivariatePlot, #CustomizationOptions, #DataVisualization, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	SendToReport(
		Dispatch( {}, "Bivariate Fit of height By weight", OutlineBox, {Set Title( "minimum 40, maximum 80, reverse order" )} ),
		Dispatch( {}, "2", ScaleBox, {Min( 80 ), Max( 40 ), Inc( 5 ), Minor Ticks( 1 ), Rotated Labels( "Horizontal" )} )
	)
);
```

**Code Explanation**:

1. Open table.
2. Create bivariate plot.
3. Set Y variable.
4. Set X variable.
5. Send report settings.
6. Set title for fit.
7. Dispatch to scale box.
8. Set minimum value.
9. Set maximum value.
10. Set increment value.



### Example 100
> **Summary**: Creates a bivariate analysis object with fit line, confidence curves for fit and individual, and shaded areas for fit and individual.

<!-- Keywords: #BivariateAnalysis, #FitLine, #ConfidenceCurves, #ShadedAreas, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Confid Curves Fit( 1 ), Confid Curves Indiv( 1 ), Confid Shaded Fit( 1 ), Confid Shaded Indiv( 1 )} )
);
```

**Code Explanation**:

1. Open data table.
2. Assign table to variable.
3. Create bivariate analysis object.
4. Set Y variable to weight.
5. Set X variable to height.
6. Add fit line to analysis.
7. Enable confidence curves for fit.
8. Enable confidence curves for individual.
9. Enable shaded area for fit.
10. Enable shaded area for individual.



### Example 101
> **Summary**: Creates a bivariate plot to analyze the relationship between 'weight' and 'height', with interactive row legend for 'sex'.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #RowLegend, #InteractiveVisualization, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Bivariate( Y( :weight ), X( :height ) );
rbiv = obj << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Row Legend( "sex", color( 1 ), Marker( 1 ) );
```

**Code Explanation**:

1. Open table.
2. Create bivariate plot.
3. Get report object.
4. Access first frame box.
5. Add row legend for "sex".
6. Set legend color to 1.
7. Set legend marker to 1.



### Example 102
> **Summary**: Creates a bivariate plot to analyze the relationship between 'weight' and 'height', with interactive row legend for 'sex'.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #InteractiveLegend, #DataAnalysis, #JMPScript -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = dt under test << Bivariate( Y( :weight ), X( :height ) );
rbiv = obj << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Row Legend( "sex", color( 1 ), Marker( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Retrieve report object.
4. Access first frame box.
5. Add row legend for "sex".
6. Set color for legend.
7. Set marker for legend.



### Example 103
> **Summary**: Creates a bivariate analysis object with automatic recalculation, selecting rows by age criteria and hiding/excluding them.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #AutomaticRecalculation, #DataSelection, #DataHiding -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
obj << Automatic Recalc( 1 );
dt << Select where( :age == 12 | :age == 13 );
dt << Hide and Exclude( 1 );
```

**Code Explanation**:

1. Open data table;
2. Create bivariate analysis object.
3. Fit linear regression line.
4. Enable automatic recalculation.
5. Select rows by age criteria.
6. Hide and exclude selected rows.



### Example 104
> **Summary**: Creates a bivariate plot with a fitted linear regression line, filtering data by age (12 or 13), and hiding/excluding selected rows.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LinearRegression, #DataFiltering, #RowSelection -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = dt under test << Bivariate( Y( :weight ), X( :height ), Fit Line );
obj << Automatic Recalc( 1 );
dt under test << Select where( :age == 12 | :age == 13 );
dt under test << Hide and Exclude( 1 );
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set Y variable to "weight".
4. Set X variable to "height".
5. Fit linear regression line.
6. Enable automatic recalculation.
7. Select rows where age is 12 or 13.
8. Hide and exclude selected rows.



### Example 105
> **Summary**: Creates a bivariate analysis object for 'weight' and 'height', enabling automatic recalculation, selecting all rows, and applying labels.

<!-- Keywords: #BivariateAnalysis, #AutomaticRecalculation, #DataSelection, #Labeling, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Bivariate( Y( :weight ), X( :height ) );
obj << Automatic Recalc( 1 );
dt << Select All Rows;
dt << Label( 1 );
```

**Code Explanation**:

1. Open data table.
2. Create bivariate analysis object.
3. Enable automatic recalculation.
4. Select all rows in data table.
5. Apply labels to selected rows.



### Example 106
> **Summary**: Peforms a bivariate analysis between the 'weight' column and the 'height' column, enabling automatic recalculation and selecting all rows in the data table.

<!-- Keywords: #JSLScriptingLanguage, #BivariateAnalysis, #DataTableManipulation, #AutomaticRecalculation, #SelectAllRows -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = dt under test << Bivariate( Y( :weight ), X( :height ) );
obj << Automatic Recalc( 1 );
dt under test << Select All Rows;
dt under test << Label( 1 );
```

**Code Explanation**:

1. Open data table.
2. Create bivariate analysis object.
3. Enable automatic recalculation.
4. Select all rows in table.
5. Apply labels to selected rows.



### Example 107
> **Summary**: Peforms a bivariate analysis to visualize the relationship between height and weight, with customized line colors and report title.

<!-- Keywords: #BivariateAnalysis, #CustomizedReport, #LineColors, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	Fit Mean( {Line Color( {213, 72, 87} )} ),
	Fit Line( {Line Color( {57, 177, 67} )} ),
	SendToReport( Dispatch( {}, "Bivariate Fit of height By weight", OutlineBox, {Set Title( "Statuses of Close and Open" )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate analysis.
3. Set Y variable to height.
4. Set X variable to weight.
5. Fit mean line with color.
6. Fit linear regression line with color.
7. Customize report title.
8. Send report dispatch command.
9. Set outline box title.
10. Finalize Bivariate analysis object.



### Example 108
> **Summary**: Peforms a bivariate analysis to model the relationship between height and weight, applying Fit Special with log transformation for X and reciprocal transformation for Y, and displaying the results in a report.

<!-- Keywords: #BivariateAnalysis, #FitSpecial, #LogTransformation, #ReciprocalTransformation, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	Fit Special( xTran( "Log" ), yTran( "Reciprocal" ), Degree( 3 ), {Line Color( {213, 72, 87} )} ),
	Fit Robust( {Line Color( {57, 177, 67} )} ),
	SendToReport(
		Dispatch( {}, "Bivariate Fit of height By weight", OutlineBox,
			{Set Title( "Fit Special: 1/y and log(x) Degree Cubic, Fit Robust" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate analysis.
3. Set Y variable to height.
4. Set X variable to weight.
5. Apply Fit Special with log transformation for X.
6. Apply Fit Special with reciprocal transformation for Y.
7. Set polynomial degree to 3.
8. Change Fit Special line color to red.
9. Apply Fit Robust.
10. Change Fit Robust line color to green.
11. Set report title to "Fit Special: 1/y and log(x) Degree Cubic, Fit Robust".



### Example 109
> **Summary**: Peforms a bivariate analysis to visualize the relationship between height and weight, applying a reciprocal transformation and kernel smoother for enhanced visualization.

<!-- Keywords: #BivariateAnalysis, #ReciprocalTransformation, #KernelSmoother, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	Fit Special( xTran( "Reciprocal" ), {Line Color( {213, 72, 87} )} ),
	Kernel Smoother( 1, 1, 0.5, 0 ),
	SendToReport(
		Dispatch( {}, "Bivariate Fit of height By weight", OutlineBox, {Set Title( "Fit Special: y and 1/x, Kernel Smoother" )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Assign table to variable.
3. Create bivariate analysis object.
4. Set Y variable as height.
5. Set X variable as weight.
6. Apply fit special with reciprocal transformation.
7. Set line color for fit special.
8. Add kernel smoother to fit.
9. Send report to front.
10. Set title for bivariate fit.



### Example 110
> **Summary**: Creates a bivariate plot to visualize the relationship between height and weight, using an exponential transformation for both variables and customizing the line style and color.

<!-- Keywords: #BivariatePlot, #ExponentialTransformation, #Customization, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	Fit Special( xTran( "Exp" ), yTran( "Exp" ), Degree( 4 ), {Line Color( {213, 72, 87} ), Line Style( Dotted ), Line Width( 5 )} ),
	SendToReport(
		Dispatch( {}, "Bivariate Fit of height By weight", OutlineBox,
			{Set Title( "Fit Special: 1/y and log(x) Degree Cubic, Line Style: Dotted, Line Width: 5" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set Y variable to height.
4. Set X variable to weight.
5. Fit special model.
6. Apply exponential transformation to X.
7. Apply exponential transformation to Y.
8. Use degree 4 polynomial.
9. Customize line color to red.
10. Set line style to dotted.
11. Set line width to 5.
12. Update report title.



### Example 111
> **Summary**: Peforms a bivariate analysis with special transformations and nonparametric density plot to visualize the relationship between height and weight, using square root transformation for Y and square transformation for X.

<!-- Keywords: #BivariateAnalysis, #NonParametricDensityPlot, #SpecialTransformations, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	Fit Special( xTran( "Square" ), yTran( "Sqrt" ), Degree( 2 ), {Line Color( {213, 72, 87} )} ),
	Nonpar Density( {Kernel Control( 1 ), Name( "5% Contours" )(0), Contour Lines( 0 ), Modal Clustering( 1 )} ),
	SendToReport(
		Dispatch( {}, "Bivariate Fit of height By weight", OutlineBox,
			{Set Title(
				"Fit Special: log(y) and sqrt(x) Degree Quadratic, Nonpar Density: Kernel Control, Color By Density Quantile, Modal Clustering"
			)}
		),
		Dispatch( {"Transformed Fit Sqrt to Square"}, "Analysis of Variance", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Transformed Fit Sqrt to Square"}, "Parameter Estimates", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate analysis object.
3. Set Y variable as height.
4. Set X variable as weight.
5. Fit special model with transformations.
6. Apply square transformation to X.
7. Apply square root transformation to Y.
8. Use quadratic degree polynomial.
9. Set line color to red.
10. Add nonparametric density plot.
11. Enable kernel control.
12. Disable 5% contours.
13. Disable contour lines.
14. Enable modal clustering.
15. Set report title.
16. Close Analysis of Variance section.
17. Close Parameter Estimates section.



### Example 112
> **Summary**: Creates a bivariate plot with a density ellipse and shaded contour to visualize the relationship between height and weight, sending the output to a report.

<!-- Keywords: #BivariatePlot, #DensityEllipse, #ShadedContour, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	Density Ellipse( 0.95, {Shaded Contour( 1 ), Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "Bivariate Fit of height By weight", OutlineBox,
			{Set Title( "Density Ellipse 0.95, Fitting Option: Shaded Contour" )}
		),
		Dispatch( {}, "Bivar Plot", FrameBox, {Grid Line Order( 2 ), Reference Line Order( 3 )} )
	)
);
```

**Code Explanation**:

1. Open table.
2. Create bivariate plot.
3. Set Y variable.
4. Set X variable.
5. Add density ellipse.
6. Configure shaded contour.
7. Set line color.
8. Set report title.
9. Adjust grid line order.
10. Adjust reference line order.



### Example 113
> **Summary**: Peforms a bivariate analysis to visualize the relationship between 'height' and 'weight', with residual plots and customized line color, while controlling for alpha level.

<!-- Keywords: #BivariateAnalysis, #ResidualPlots, #CustomizedLineColors, #AlphaLevelControl, #JMPScripting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	Fit Line( {Plot Residuals( 1 ), Line Color( {161, 44, 220} )}, {Set Œ± Level( 0.1 )} ),
	SendToReport(
		Dispatch( {}, "Bivariate Fit of height By weight", OutlineBox, {Set Title( "Plot Residuals, Set Alpha 0.10" )} ),
		Dispatch( {"Linear Fit"}, "Lack Of Fit", OutlineBox, {Close( 0 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate analysis.
3. Set Y variable to "height".
4. Set X variable to "weight".
5. Fit linear regression.
6. Plot residuals.
7. Set line color to purple.
8. Set alpha level to 0.1.
9. Rename report title.
10. Close "Lack Of Fit" section.



### Example 114
> **Summary**: Creates a bivariate analysis with a density ellipse and shaded contour for the 'height' variable by 'weight', sending report settings to display in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #DensityEllipse, #ShadedContour, #ReportSettings -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	Density Ellipse( 0.9, {Shaded Contour( 1 ), Line Color( {213, 72, 87} )} ),
	SendToReport( Dispatch( {}, "Bivariate Fit of height By weight", OutlineBox, {Set Title( "Density Ellipse 0.90, Shaded Contour" )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create Bivariate analysis.
3. Set Y variable.
4. Set X variable.
5. Add Density Ellipse.
6. Set ellipse confidence level.
7. Enable Shaded Contour.
8. Set contour line color.
9. Send report settings.
10. Set report title.



### Example 115
> **Summary**: Creates two Bivariate plots with customized scales and fit lines, utilizing the `Bivariate` function in JMP Scripting Language (JSL).

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #CustomizedScales, #FitLines, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Bivariate(
	Y( :weight ),
	X( :height ),
	Histogram Borders( 1 ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	Fit Robust( {Line Color( {57, 177, 67} )} ),
	Fit Orthogonal( Equal Variances, {Line Color( {64, 111, 223} )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Scale( "Log" ), Format( "Best", 12 ), Min( 50 ), Max( 71.342727999454 ), Inc( 1 ), Minor Ticks( 1 ), Label Row Nesting( 1 )}
		),
		Dispatch( {}, "2", ScaleBox,
			{Scale( "Power" ), Format( "Best", 12 ), Min( 0 ), Max( 150 ), Inc( 45 ), Minor Ticks( 0 ), Label Row Nesting( 1 )}
		)
	)
);
New Table( "dist log test 2",
	Add Rows( 10 ),
	New Column( "log test", Numeric, "Continuous", Format( "Best", 12 ), Formula( 2 ^ Row() ), Set Display Width( 48 ) ),
	New Column( "power test", Numeric, "Continuous", Format( "Best", 12 ), Formula( Sqrt( Row() ) ), Set Display Width( 83 ) )
);
Bivariate(
	Y( :log test ),
	X( :power test ),
	Histogram Borders( 1 ),
	SendToReport( Dispatch( {}, "1", ScaleBox, {Scale( "Power" )} ), Dispatch( {}, "2", ScaleBox, {Scale( "Log", {Log Base( 2 )} )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create Bivariate plot.
3. Set Y variable.
4. Set X variable.
5. Enable histogram borders.
6. Fit linear regression.
7. Fit robust regression.
8. Fit orthogonal regression.
9. Adjust Y axis scale.
10. Adjust X axis scale.
11. Create new data table.
12. Add rows to table.
13. Define "log test" column.
14. Define "power test" column.
15. Create second Bivariate plot.
16. Set Y variable for second plot.
17. Set X variable for second plot.
18. Enable histogram borders for second plot.
19. Adjust Y axis scale for second plot.
20. Adjust X axis scale for second plot.



### Example 116
> **Summary**: Peforms a bivariate analysis to visualize the relationship between weight and height for females, with customized reports for both female and male groups.

<!-- Keywords: #BivariateAnalysis, #CustomizedReports, #ByGroup, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	SendToByGroup( {:sex == "F"} ),
	Y( :weight ),
	X( :height ),
	Weight( :age ),
	Freq( :age ),
	By( :sex ),
	SendToByGroup(
		{:sex == "F"},
		SendToReport(
			Dispatch( {"Bivariate Fit of weight By height sex=F"}, "1", ScaleBox, {Max( 68.2109375 ), Rotated Labels( "Horizontal" )} ),
			Dispatch( {"Bivariate Fit of weight By height sex=F"}, "Bivar Plot", FrameBox, {Frame Size( 250, 213 )} )
		)
	),
	SendToByGroup(
		{:sex == "M"},
		SendToReport( Dispatch( {"Bivariate Fit of weight By height sex=M"}, "Bivar Plot", FrameBox, {Frame Size( 267, 190 )} ) )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Launch Bivariate analysis.
3. Filter data for females.
4. Set Y variable as weight.
5. Set X variable as height.
6. Use age as weight.
7. Use age as frequency.
8. Group by sex.
9. Customize report for females.
10. Customize report for males.



### Example 117
> **Summary**: Creates a bivariate plot with multiple fit lines to visualize the relationship between weight and height in a data table.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #FitLines, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
plat = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} ), Line Width( 1 )} ),
	Fit Mean( {Line Color( {57, 177, 67} ), Line Width( 1 )} ),
	Fit Spline( 10, {Line Color( {64, 111, 223} ), Line Width( 1 )} ),
	Fit Orthogonal( Univariate Variances, {Line Color( {207, 121, 38} ), Line
Width( 1 )} )
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Fit linear regression line.
6. Set linear line color.
7. Set linear line width.
8. Fit mean line.
9. Set mean line color.
10. Set mean line width.



### Example 118
> **Summary**: Peforms a bivariate analysis with multiple fit options and histogram borders to visualize the relationship between '2004 Math' scores and '% Taking (2004)' rates.

<!-- Keywords: #BivariateAnalysis, #FitOptions, #HistogramBorders, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :Name( "2004 Math" ) ),
	X( :Name( "% Taking (2004)" ) ),
	Histogram Borders( 1 ),
	Fit Mean( {Line Color( {213, 72, 87} )} ),
	Fit Line( {Line Color( {57, 177, 67} )} ),
	Fit Polynomial( 2, {Line Color( {64, 111, 223} )} ),
	Fit Spline( 0.1, {Line Color( {161, 44, 220} )} ),
	Fit Each Value( {Line Color( {200, 193, 39} )} ),
	Fit Orthogonal( Univariate Variances, {Line Color( {31, 182, 182} )} ),
	Density Ellipse( 0.95, {Line Color( {201, 37, 205} )} ),
	SendToReport(
		Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Polynomial Fit Degree=2", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Smoothing Spline Fit", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Bivariate analysis.
3. Set Y variable to "2004 Math".
4. Set X variable to "% Taking (2004)".
5. Enable histogram borders.
6. Fit mean with red line.
7. Fit linear regression with green line.
8. Fit polynomial of degree 2 with blue line.
9. Fit spline with purple line.
10. Fit each value with yellow line.



### Example 119
> **Summary**: Creates a bivariate plot with nonparametric density and contour fill, displaying the relationship between height and weight.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #NonParametricDensity, #ContourFill, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	Nonpar Density( {Name( "5% Contours" )(0), Contour Fill( 1 ), Contour Lines( 0 )} ),
	SendToReport(
		Dispatch( {}, "Bivariate Fit of height By weight", OutlineBox, {Set Title( "Nonpar Density Options: Contour Fill" )} ),
		Dispatch( {}, "2", ScaleBox, {Max( 72.59375 ), Rotated Labels( "Horizontal" )} ),
		Dispatch( {}, "Bivar Plot", FrameBox, {DispatchSeg( Contour Seg( 1 ), {Fill Color( {64, 0, 238} )} )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set Y variable to height.
4. Set X variable to weight.
5. Enable Nonparametric Density.
6. Configure 5% Contours.
7. Enable Contour Fill.
8. Disable Contour Lines.
9. Set report title.
10. Customize scale settings.
11. Change contour fill color.



### Example 120
> **Summary**: Peforms a bivariate analysis to visualize the relationship between CD8 and CD3, with nonparametric density plots and modal clustering enabled.

<!-- Keywords: #BivariateAnalysis, #NonParametricDensityPlot, #ModalClustering, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
dt under test << Clear Row States;
obj = Bivariate(
	Y( :CD8 ),
	X( :CD3 ),
	Nonpar Density( {Mesh Plot( 1 ), Modal Clustering( 1 )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Format( "Best", 10 ), Min( 0 ), Max( 520 ), Inc( 75 ), Minor Ticks( 2 ), Rotated Labels( "Angled" )}
		),
		Dispatch( {}, "2", ScaleBox,
			{Format( "Best", 10 ), Min( -20 ), Max( 520 ), Inc( 75 ), Minor Ticks( 2 ), Rotated Labels( "Vertical" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Clear row states.
3. Create bivariate analysis.
4. Set Y variable to CD8.
5. Set X variable to CD3.
6. Add nonparametric density plot.
7. Enable mesh plot.
8. Enable modal clustering.
9. Format Y axis.
10. Format X axis.



### Example 121
> **Summary**: Creates a bivariate plot to analyze the relationship between 'height' and 'weight', with customized title, frame size, background color, row legend appearance, and marker styles for specific individuals.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #Customization, #DataVisualization, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	SendToReport(
		Dispatch( {}, "Bivariate Fit of height By weight", OutlineBox,
			{Set Title(
				"Yellow Background, Row Legend height Blue to Gray to Red, make LAWRENCE a red cross, hide and exclude LILLIE, hide MICHAEL, exclude SUSAN, row label for JACLYN, marker size XXL, 400x300, transparency 0.3"
			)}
		),
		Dispatch( {}, "Bivar Plot", FrameBox,
			{Frame Size( 400, 300 ), Background Color( 73 ), Marker Size( 5 ), Transparency( 0.3 ),
			Row Legend(
				height,
				Color( 1 ),
				Color Theme( "Blue to Gray to Red" ),
				Marker( 0 ),
				Marker Theme( "" ),
				Continuous Scale( 1 ),
				Reverse Scale( 0 ),
				Excluded Rows( 0 )
			)}
		)
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
2. Create bivariate plot.
3. Set plot title and options.
4. Adjust frame size and background color.
5. Configure row legend appearance.
6. Select LAWRENCE's row.
7. Change LAWRENCE's marker color and style.
8. Select LILLIE's row.
9. Hide and exclude LILLIE.
10. Select MICHAEL's row.
11. Hide MICHAEL.
12. Select SUSAN's row.
13. Exclude SUSAN.
14. Select JACLYN's row.
15. Add row label for JACLYN.



### Example 122
> **Summary**: Creates a bivariate plot with customized settings, including row legend, marker size, and transparency, while selectively hiding, excluding, or labeling specific rows.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #Customization, #DataVisualization, #InteractiveFeatures -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	SendToReport(
		Dispatch( {}, "Bivariate Fit of height By weight", OutlineBox,
			{Set Title(
				"Yellow Background, Row Legend height Blue to Gray to Red, make LAWRENCE a red cross, hide and exclude LILLIE, hide MICHAEL, exclude SUSAN, row label for JACLYN, marker size XXL, 400x300, transparency 0.3"
			)}
		),
		Dispatch( {}, "Bivar Plot", FrameBox,
			{Frame Size( 400, 300 ), Background Color( 73 ), Marker Size( 5 ), Transparency( 0.3 ),
			Row Legend(
				height,
				Color( 1 ),
				Color Theme( "Blue to Gray to Red" ),
				Marker( 0 ),
				Marker Theme( "" ),
				Continuous Scale( 1 ),
				Reverse Scale( 0 ),
				Excluded Rows( 0 )
			)}
		)
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

1. Open data table.
2. Create bivariate plot.
3. Set plot title.
4. Adjust frame size.
5. Set background color.
6. Configure marker size.
7. Set transparency.
8. Add row legend.
9. Customize legend colors.
10. Select specific rows.
11. Highlight Lawrence's row.
12. Change Lawrence's marker.
13. Hide and exclude Lillie.
14. Hide Michael.
15. Exclude Susan.
16. Label Jaclyn's row.
17. Deselect all rows.



### Example 123
> **Summary**: Peforms a bivariate analysis to visualize the relationship between height and weight, sending the output to a report with a customized title and plot frame size.

<!-- Keywords: #BivariateAnalysis, #JMPScriptingLanguage, #DataVisualization, #ReportOutput, #Customization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	SendToReport(
		Dispatch( {}, "Bivariate Fit of height By weight", OutlineBox, {Set Title( "Size to Isometric" )} ),
		Dispatch( {}, "Bivar Plot", FrameBox, {Frame Size( 640, 120 )} )
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Create Bivariate analysis.
3. Set Y variable to height.
4. Set X variable to weight.
5. Rename report title to "Size to Isometric".
6. Resize plot frame to 640x120.



### Example 124
> **Summary**: Creates a bivariate report with histogram borders, utilizing the Bivariate platform to visualize the relationship between 'weight' and 'height'.

<!-- Keywords: #BivariateReport, #HistogramBorders, #JMPScriptingLanguage, #DataVisualization, #Automation -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = dt under test << Bivariate(
	Y( :weight ),
	X( :height ),
	Histogram Borders( 1 ),
	SendToReport(
		Dispatch( {}, "Bivariate Report", FrameBox( 4 ),
			{Background Color( 73 ), DispatchSeg(
				Hist Seg( 1 ),
				{Transparency( 0.5 ), Fill Color( "Medium Dark Red" ), Histogram Color( 19 )}
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Bivariate analysis.
3. Set Y variable.
4. Set X variable.
5. Enable histogram borders.
6. Send report settings.
7. Access Bivariate Report.
8. Modify frame background.
9. Dispatch histogram segment settings.
10. Set histogram transparency.
11. Set fill color.
12. Set histogram color.



### Example 125
> **Summary**: Peforms a bivariate analysis to visualize the relationship between Bed spaces and Date, with a polynomial fit of degree 3 and customized report settings.

<!-- Keywords: #BivariateAnalysis, #PolynomialFit, #CustomReportSettings, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :Bed spaces ),
	X( :Date ),
	Fit Polynomial( 3, {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "Bivariate Fit of Bed spaces By Date", OutlineBox, {Set Title( "Report table, Column Number Format" )} ),
		Dispatch( {}, "1", ScaleBox, {Rotated Labels( "Horizontal" )} ),
		Dispatch( {"Polynomial Fit Degree=3", "Summary of Fit"}, "", NumberColBox, {Set Format( 8, 0, "Percent" )} ),
		Dispatch( {"Polynomial Fit Degree=3", "Analysis of Variance"}, "Mean Square", NumberColBox,
			{Set Format( 20, "Best", "Use thousands separator" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate analysis.
3. Set Y variable to "Bed spaces".
4. Set X variable to "Date".
5. Fit Polynomial of degree 3.
6. Set line color to RGB(213, 72, 87).
7. Set report title to "Report table, Column Number Format".
8. Rotate labels to horizontal.
9. Format summary fit column as percent.
10. Format mean square column with thousands separator.



### Example 126
> **Summary**: Creates a bivariate plot with linear regression line and residual plots, displaying summary statistics, analysis of variance, parameter estimates, and diagnostics plots for petal length and width.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LinearRegression, #ResidualPlots, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate(
	Y( :Petal length ),
	X( :Petal width ),
	Fit Line( {Plot Residuals( 1 ), Line Color( {208, 64, 86} )} ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox, {DispatchSeg( Line Seg( 1 ), {Line Color( {208, 64, 86} )} )} ),
		Dispatch( {"Linear Fit"}, "Summary of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Linear Fit"}, "Analysis of Variance", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Linear Fit"}, "Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Linear Fit", "Diagnostics Plots"}, "Residual by Row Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Linear Fit", "Diagnostics Plots"}, "Residual by X Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Linear Fit", "Diagnostics Plots"}, "Residual Normal Quantile Plot", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set Y variable to Petal length.
4. Set X variable to Petal width.
5. Fit linear regression line.
6. Plot residuals.
7. Set line color to custom.
8. Close Summary of Fit report.
9. Close Analysis of Variance report.
10. Close Parameter Estimates report.



### Example 127
> **Summary**: Creates a bivariate plot with a robust fit line, customized to display height as the Y variable and weight as the X variable, with interactive features for hiding/unhiding parameters.

<!-- Keywords: #BivariatePlot, #RobustFit, #Customization, #InteractiveFeatures, #JMPScripting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	Fit Robust( {Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "Bivariate Fit of height By weight", OutlineBox, {Set Title( "hide column Parameter for Bobust Fit" )} ),
		Dispatch( {"Robust Fit"}, "Parameter", StringColBox, {Name( "Hide/Unhide" )(1)} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set Y variable as height.
4. Set X variable as weight.
5. Fit Robust model.
6. Change line color to red.
7. Rename Bivariate Fit title.
8. Hide Robust Fit parameters.



### Example 128
> **Summary**: Creates a bivariate analysis object for female employees, filtering data by sex and using height as the X variable and weight as the Y variable.

<!-- Keywords: #BivariateAnalysis, #DataFiltering, #JMPScriptingLanguage, #SexBasedAnalysis, #WeightAndHeight -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate( Y( weight ), X( height ), Where( :sex == "F" ) );
```

**Code Explanation**:

1. Open data table.
2. Create Bivariate analysis object.
3. Set Y variable to weight.
4. Set X variable to height.
5. Filter data where sex is female.



### Example 129
> **Summary**: Peforms a bivariate analysis to visualize the relationship between height and weight for individuals named 'ALFRED', utilizing Passing Bablok fit with a black line color.

<!-- Keywords: #BivariateAnalysis, #PassingBablok, #JMPScriptingLanguage, #DataVisualization, #Filtering -->

**Code**:
```jsl
Open("data_table.jmp");
Bivariate( Y( :height ), X( :weight ), Fit Passing Bablok( {Line Color( "Black" )} ), Where( :name == "ALFRED" ) );
```

**Code Explanation**:

1. Open data table.
2. Create Bivariate analysis.
3. Set Y variable to height.
4. Set X variable to weight.
5. Apply Passing Bablok fit.
6. Set line color to black.
7. Filter for name "ALFRED".



### Example 130
> **Summary**: Creates multiple Bivariate plots with varying scale types (Log, Linear, Power) for a specified data table.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #ScaleTypes, #DataVisualization, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
type = "Log";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( "Log" )} ) ) );
type = "Log";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( Log )} ) ) );
type = "Log";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( type )} ) ) );
type = "Linear";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( "Linear" )} ) ) );
type = "Linear";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( Linear )} ) ) );
type = "Linear";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( type )} ) ) );
type = "Power";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( "Power" )} ) ) );
type = "Power";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( Power )} ) ) );
type = "Power";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( type )} ) ) );
```

**Code Explanation**:

1. Open data_table data
2. Set type to Log.
3. Create Bivariate plot.
4. Set type to Log.
5. Create Bivariate plot.
6. Set type to Log.
7. Create Bivariate plot.
8. Set type to Linear.
9. Create Bivariate plot.
10. Set type to Linear.
11. Create Bivariate plot.
12. Set type to Linear.
13. Create Bivariate plot.
14. Set type to Power.
15. Create Bivariate plot.
16. Set type to Power.
17. Create Bivariate plot.
18. Set type to Power.
19. Create Bivariate plot.



### Example 131
> **Summary**: Creates multiple bivariate plots with varying scale types (Log, Linear, Power) for the relationship between weight and height in a data table.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #ScaleTypes, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
type = "Log";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( "Log" )} ) ) );
type = "Log";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( Log )} ) ) );
type = "Log";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( type )} ) ) );
type = "Linear";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( "Linear" )} ) ) );
type = "Linear";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( Linear )} ) ) );
type = "Linear";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( type )} ) ) );
type = "Power";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( "Power" )} ) ) );
type = "Power";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( Power )} ) ) );
type = "Power";
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "2", ScaleBox, {Scale( type )} ) ) );
```

**Code Explanation**:

1. Open data table;
2. Set scale type to Log.
3. Create bivariate plot with log scale.
4. Set scale type to Log.
5. Create bivariate plot with log scale.
6. Set scale type to Log.
7. Create bivariate plot with log scale.
8. Set scale type to Linear.
9. Create bivariate plot with linear scale.
10. Set scale type to Linear.
11. Create bivariate plot with linear scale.
12. Set scale type to Linear.
13. Create bivariate plot with linear scale.
14. Set scale type to Power.
15. Create bivariate plot with power scale.
16. Set scale type to Power.
17. Create bivariate plot with power scale.
18. Set scale type to Power.
19. Create bivariate plot with power scale.



### Example 132
> **Summary**: Creates a Bivariate plot with SendToReport, using Y variable 'weight' and X variable 'height', and adds an image to the report.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #SendToReport, #ImageHandling, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			{Add Image(
				Set Blob(
					Char To Blob(
						"1iVBORw0KGgoAAAANSUhEUgAAADEAAAA4CAYAAABUkxDUAAAAAXNSR0IArs4c6QAAAARnQU1B
AACxjwv8YQUAAAAJcEhZcwAAEnMAABJzAYwiuQcAAAKSSURBVGhD7ZnNaxNBFMDzp3mSPXnwooLoSQQR
rDD0VA+96NGDFw8LHjz2UASlUJAN+AFVpCikYqsmrbUW0dY2MW1q7XPe5L1kP2Y2OZjhJcwPHpsd3uH9
MvN2J5MKTABBQgpBQgpBQgpBQgqTKtGAOKpApUIRxXoEh2OIeExHFJtRSJT9XiXm1gsFCWsRJJAtNILu
LUsrSHJ5vihINOLISJggk8xYKnqi6VnimfOIvScyS0dBTBLOJZLL97iSDCWNzctEL5tYdQtMfctJzJ9T
yymhPJ8NoXH2BEevHi6Qwwj1HwLdPujf+/QomYnxIUhIIUhIIUhIoVTi4FMdWm9r5jo8/XcFx6jfGVaJ
41YL1mfuQC0614vPUzNwuPGVMspACd4c+sEq0ZiezQhwfLxyE046R5TlQoBE+/2qVYBj/+UrynQhQGLn
8aK1eI7vD+co00W+J0YvVJBovl62Fs+xu1ilTBcCZgLX/Orl61aBlTMX4c/OLmW6ENLY2BcfLlwtCPyq
vqCMMoRIIPiY/TH/xPQAXgfPACNIYpwIElIIElIIElKYfIm1zQ4srx2Y6/DQBtDxS8gczv3n81qrRLP9
F6bvb8OpG/VeXLu7Bevbg35LICRh273ima1+m0c+JKbufcsIcFy6vQmdoxPKctHddiili81Z4Om6ilFk
xBK1+qFVgOPZu9+U6YL3TgmoTLH6ng+dRy3x6Pm+tXiOBwvDb8Vx/acPpM3M+JBYWmlbi+dYWGpSpou+
hOkBY5Ea8yGBa/787BerwGnVgJ97x5TpIlUwf05YRuNDAsG+OHtroyDw9E2LMspIS+Bk5P5l8iWB4GN2
rrpnegCvg2eAyUroqrMN7lNinAgSUggSUggSMgD4B+fu+r9XnjIsAAAAAElFTkSuQmCC",
						"base64compressed"
					),
					"png"
				),
				Bounds( Left( 68.2109375 ), Right( 71.234375 ), Top( 96 ), Bottom( 71 ) )
			), Row Legend( sex, Color( 1 ), Color Theme( "JMP Default" ), )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Add image to report.
6. Decode base64 compressed image.
7. Convert image to PNG format.
8. Set image bounds.
9. Add row legend for sex.
10. Apply color theme to legend.



### Example 133
> **Summary**: Peforms a bivariate analysis to visualize the relationship between height and weight, sending report settings with a customized frame size and background color.

<!-- Keywords: #BivariateAnalysis, #JMPScriptingLanguage, #DataVisualization, #ReportSettings, #Customization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	SendToReport( Dispatch( {}, "Bivar Plot", FrameBox, {Frame Size( 400, 300 ), Background Color( 73 )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate analysis.
3. Set Y variable to height.
4. Set X variable to weight.
5. Send report settings.
6. Adjust frame size.
7. Set background color.



### Example 134
> **Summary**: Creates a bivariate plot to visualize the relationship between height and weight for female and male employees, with customized settings for each sex group.

<!-- Keywords: #BivariatePlot, #Customization, #ByGroup, #LinearRegression, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Bivariate(
	SendToByGroup( {:sex == "F"} ),
	Y( :height ),
	X( :weight ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	By( :sex ),
	SendToByGroup(
		{:sex == "F"},
		SendToReport(
			Dispatch( {"Bivariate Fit of height By weight sex=F"}, "2", ScaleBox, {Add Ref Line( 60, "Solid", "Black", "", 1 )} ),
			Dispatch( {"Bivariate Fit of height By weight sex=F"}, "Bivar Plot", FrameBox,
				{Add Graphics Script(
					2,
					Description( "Script" ),
					Pen Size( 1 );
					Line( [70 140], [55 55] );
				), Grid Line Order( 1 ), Reference Line Order( 3 )}
			),
			Dispatch( {"Bivariate Fit of height By weight sex=F"}, "Linear Fit", OutlineBox, {Close( 1 )} )
		)
	),
	SendToByGroup(
		{:sex == "M"},
		SendToReport(
			Dispatch( {"Bivariate Fit of height By weight sex=M"}, "1", ScaleBox, {Min( 61.75 )} ),
			Dispatch( {"Bivariate Fit of height By weight sex=M"}, "2", ScaleBox, {Add Ref Line( 60, "Solid", "Black", "", 1 )} ),
			Dispatch( {"Bivariate Fit of height By weight sex=M"}, "Bivar Plot", FrameBox,
				{Add Graphics Script(
					2,
					Description( "Script" ),
					Pen Size( 1 );
					Line( [70 140], [55 55] );
				), Grid Line Order( 1 ), Reference Line Order( 3 )}
			),
			Dispatch( {"Bivariate Fit of height By weight sex=M"}, "Linear Fit", OutlineBox, {Close( 1 )} )
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create Bivariate plot.
3. Filter by sex "F".
4. Set Y variable to height.
5. Set X variable to weight.
6. Fit linear regression.
7. Customize plot for sex "F".
8. Add reference line at 60.
9. Draw custom line.
10. Hide linear fit outline.



### Example 135
> **Summary**: Creates a bivariate analysis object for exploring the relationship between Weight and Height in an open data table.

<!-- Keywords: #BivariateAnalysis, #DataTable, #JSLScripting, #WeightAndHeight, #ExploratoryDataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Bivariate( Y( :Weight ), X( :Height ) );
```

**Code Explanation**:

1. Open data table.
2. Create bivariate analysis object.



### Example 136
> **Summary**: Creates a bivariate plot with nonparametric density estimation and mesh plotting for the relationship between Weight and Height in a data table.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlotting, #NonParametricDensityEstimation, #MeshPlotting, #DataVisualization -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Mesh Plot( 1 )} );
```

**Code Explanation**:

1. Set default names.
2. Open data table;
3. Create Bivariate object.
4. Set Y variable to Weight.
5. Set X variable to Height.
6. Add Nonpar Density.
7. Enable Mesh Plot.



### Example 137
> **Summary**: Creates a bivariate analysis object with a linear regression line, utilizing the 'Bivariate' platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #LinearRegression, #DataVisualization, #StatisticalModeling -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate( Y( :weight ), X( :height ), Fit Line( {Line Color( {213, 72, 87} )} ) );
```

**Code Explanation**:

1. Open data table;
2. Create bivariate analysis object.
3. Set weight as Y variable.
4. Set height as X variable.
5. Fit linear regression line.
6. Customize line color.



### Example 138
> **Summary**: Peforms a bivariate analysis to visualize the relationship between High and Moving Average, with histogram borders and a fitted linear regression line.

<!-- Keywords: #BivariateAnalysis, #JMPScriptingLanguage, #DataVisualization, #LinearRegression, #Histogram -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate( Y( :High ), X( :Moving Average ), Histogram Borders( 1 ), Fit Line( {Plot Residuals( 1 ), Line Color( {213, 72, 87} )} ) );
```

**Code Explanation**:

1. Open data table.
2. Create Bivariate analysis object.
3. Set Y variable to High.
4. Set X variable to Moving Average.
5. Enable histogram borders.
6. Fit linear regression line.
7. Plot residuals on graph.
8. Set line color to red.



### Example 139
> **Summary**: Creates a bivariate plot to visualize the relationship between 'weight' and 'height', with an added image and row legend.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #ImageAddition, #RowLegend, #DataVisualization -->

**Code**:
```jsl
fn = "c:\temp\test.htm";
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			{Add Image(
				Set Blob(
					Char To Blob(
						"1iVBORw0KGgoAAAANSUhEUgAAADEAAAA4CAYAAABUkxDUAAAAAXNSR0IArs4c6QAAAARnQU1B
AACxjwv8YQUAAAAJcEhZcwAAEnMAABJzAYwiuQcAAAKSSURBVGhD7ZnNaxNBFMDzp3mSPXnwooLoSQQR
rDD0VA+96NGDFw8LHjz2UASlUJAN+AFVpCikYqsmrbUW0dY2MW1q7XPe5L1kP2Y2OZjhJcwPHpsd3uH9
MvN2J5MKTABBQgpBQgpBQgpBQgqTKtGAOKpApUIRxXoEh2OIeExHFJtRSJT9XiXm1gsFCWsRJJAtNILu
LUsrSHJ5vihINOLISJggk8xYKnqi6VnimfOIvScyS0dBTBLOJZLL97iSDCWNzctEL5tYdQtMfctJzJ9T
yymhPJ8NoXH2BEevHi6Qwwj1HwLdPujf+/QomYnxIUhIIUhIIUhIoVTi4FMdWm9r5jo8/XcFx6jfGVaJ
41YL1mfuQC0614vPUzNwuPGVMspACd4c+sEq0ZiezQhwfLxyE046R5TlQoBE+/2qVYBj/+UrynQhQGLn
8aK1eI7vD+co00W+J0YvVJBovl62Fs+xu1ilTBcCZgLX/Orl61aBlTMX4c/OLmW6ENLY2BcfLlwtCPyq
vqCMMoRIIPiY/TH/xPQAXgfPACNIYpwIElIIElIIElKYfIm1zQ4srx2Y6/DQBtDxS8gczv3n81qrRLP9
F6bvb8OpG/VeXLu7Bevbg35LICRh273ima1+m0c+JKbufcsIcFy6vQmdoxPKctHddiili81Z4Om6ilFk
xBK1+qFVgOPZu9+U6YL3TgmoTLH6ng+dRy3x6Pm+tXiOBwvDb8Vx/acPpM3M+JBYWmlbi+dYWGpSpou+
hOkBY5Ea8yGBa/787BerwGnVgJ97x5TpIlUwf05YRuNDAsG+OHtroyDw9E2LMspIS+Bk5P5l8iWB4GN2
rrpnegCvg2eAyUroqrMN7lNinAgSUggSUggSMgD4B+fu+r9XnjIsAAAAAElFTkSuQmCC",
						"base64compressed"
					),
					"png"
				),
				Bounds( Left( 68.2109375 ), Right( 71.234375 ), Top( 96 ), Bottom( 71 ) )
			), Row Legend( sex, Color( 1 ), Color Theme( "JMP Default" ), )}
		)
	)
);
```

**Code Explanation**:

1. Define file path.
2. Open data table.
3. Create bivariate plot.
4. Add image to report.
5. Set image blob.
6. Convert char to blob.
7. Specify image format.
8. Set image bounds.
9. Add row legend.
10. Customize legend color.



### Example 140
> **Summary**: Creates a bivariate plot with histogram borders and a fitted linear regression line to visualize the relationship between weight and height in a data table.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #HistogramBorders, #LinearRegression, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
biv = Bivariate( Y( :weight ), X( :height ), Histogram Borders( 1 ), Fit Line( {Line Color( {213, 72, 87} )} ), Report View( "Summary" ) );
```

**Code Explanation**:

1. Open data_table data
2. Create Bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Enable histogram borders.
6. Fit linear regression line.
7. Customize line color.
8. Display summary report.



### Example 141
> **Summary**: Creates a bivariate analysis with histogram borders, fit line, and report view in JMP, using 'weight' as the Y variable and 'height' as the X variable.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #HistogramBorders, #FitLine, #ReportView -->

**Code**:
```jsl
Open("data_table.jmp");
biv = Bivariate( Y( :weight ), X( :height ), Histogram Borders( 1 ), Fit Line( {Line Color( {213, 72, 87} )} ), Report View( "Summary" ) );
(biv << Report) << Set Window Size( 600, 600 );
```

**Code Explanation**:

1. Open data table;
2. Create bivariate analysis.
3. Set Y variable to weight.
4. Set X variable to height.
5. Enable histogram borders.
6. Fit linear regression line.
7. Change line color.
8. Set report view to summary.
9. Get bivariate report.
10. Resize window to 600x600.



### Example 142
> **Summary**: Runs a series of statistical analyses on the 'data_table.jmp' dataset, including bivariate plots, linear regression, logistic regression, and distribution analysis, with interactive filtering by sex.

<!-- Keywords: #JSLScripting, #BivariatePlot, #LinearRegression, #LogisticRegression, #DistributionAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Bivariate( Y( :height ), X( Transform Column( "Row", Formula( Row() ) ) ), Where( :sex == "F" ) );
Fit Model(
	Y( :height ),
	Effects( Transform Column( "Row", Formula( Row() ) ) ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run,
	Where( :sex == "F" )
);
Multivariate(
	Y( :height, Transform Column( "Row", Formula( Row() ) ) ),
	Estimation Method( "Row-wise" ),
	Scatterplot Matrix( 1 ),
	Where( :sex == "F" )
);
Logistic( Y( :age ), X( Transform Column( "Row", Formula( Row() ) ) ), Where( :sex == "F" ) );
Bubble Plot(
	X( :weight ),
	Y( Transform Column( "Row", Formula( Row() ) ) ),
	Title Position( -6.27743856220419e+66, -6.27743856220419e+66 ),
	Where( :sex == "F" ), 
);
Distribution( Continuous Distribution( Column( Transform Column( "Row", Formula( Row() ) ) ) ), Where( :sex == "F" ) );
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Fit standard least squares model.
4. Generate multivariate analysis.
5. Perform logistic regression.
6. Create bubble plot.
7. Analyze distribution.



### Example 143
> **Summary**: Runs a series of data analysis tasks, including bivariate and multivariate modeling, logistic regression, bubble plotting, distribution analysis, and graph building for females in the dataset.

<!-- Keywords: #JMPScriptingLanguage, #DataAnalysis, #MultivariateModeling, #LogisticRegression, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Bivariate( Y( :height ), X( Transform Column( "Row", Formula( Row() ) ) ), Where( :sex == "F" ) );
Fit Model(
	Y( :height ),
	Effects( Transform Column( "Row", Formula( Row() ) ) ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run,
	Where( :sex == "F" )
);
Multivariate(
	Y( :height, Transform Column( "Row", Formula( Row() ) ) ),
	Estimation Method( "Row-wise" ),
	Scatterplot Matrix( 1 ),
	Where( :sex == "F" )
);
Logistic( Y( :age ), X( Transform Column( "Row", Formula( Row() ) ) ), Where( :sex == "F" ) );
Bubble Plot(
	X( :weight ),
	Y( Transform Column( "Row", Formula( Row() ) ) ),
	Title Position( -6.27743856220419e+66, -6.27743856220419e+66 ),
	Where( :sex == "F" ), 
);
Distribution( Continuous Distribution( Column( Transform Column( "Row", Formula( Row() ) ) ) ), Where( :sex == "F" ) );
Graph Builder(
	Size( 603, 408 ),
	Show Control Panel( 0 ),
	Variables( Y( Transform Column( "Row", Formula( Row() ) ) ) ),
	Elements( Points( Y, Legend( 2 ) ) ),
	Where( :sex == "F" )
);
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot for females.
3. Fit model for females.
4. Create Multivariate analysis for females.
5. Perform Logistic regression for females.
6. Generate Bubble Plot for females.
7. Analyze distribution for females.
8. Build Graph Builder for females.
9. Configure Graph Builder settings.
10. Display Graph Builder plot.



### Example 144
> **Summary**: Runs the calculation and reporting of mean fit and RMSE for a bivariate analysis between '2004 Verbal' and '% Taking (2004)' variables in a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #MeanFit, #RMSE, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
exp_mean = 535.3921569;
exp_rmse = 33.8461687;
obj = dt << Bivariate( Y( :Name( "2004 Verbal" ) ), X( :Name( "% Taking (2004)" ) ) );
obj << Fit Mean;
rpt = obj << report;
mean_fit = (rpt[Number Col Box( 1 )]) << getasmatrix;
actmean = mean_fit[1];
actrmse = mean_fit[2];
```

**Code Explanation**:

1. Open data table.
2. Define expected mean.
3. Define expected RMSE.
4. Create bivariate analysis.
5. Fit mean model.
6. Generate report.
7. Extract mean fit matrix.
8. Retrieve actual mean.
9. Retrieve actual RMSE.



### Example 145
> **Summary**: Creates a bivariate plot with a linear regression line, filtering data by height, and enabling automatic recalculation.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LinearRegression, #DataFiltering, #AutomaticRecalculation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Automatic Recalc( 1 ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	Local Data Filter(
		Location( {30, 30} ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
		Add Filter( columns( :height ), Display( :height ) ),
		Animation
	)
);
If( Host is( windows ),
	ww = Window( "data_table - Bivariate of weight by height" ),
	ww = Window( "data_table - Bivariate of weight by height" )
);
ww[Button Box( 4 )] << click;
ww[Button Box( 6 )] << click;
ww[Button Box( 4 )] << click;
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Set Y to weight.
4. Set X to height.
5. Enable automatic recalculation.
6. Fit a linear regression line.
7. Add local data filter.
8. Position filter at (30, 30).
9. Configure filter mode.
10. Add height column to filter.



### Example 146
> **Summary**: Creates a bivariate plot with a linear regression line and local data filter, displaying the journal window with interactive elements.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LinearRegression, #LocalDataFilter, #JournalWindow -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Automatic Recalc( 1 ),
	Fit Line( {Line Color( {124, 149, 202} )} ),
	Local Data Filter( Add Filter( columns( :name ), Display( :name, Check Box Display ) ) )
);
biv << Journal Window;
Current Journal()[Plot Col Box( 1 )] << Remove Element( 3 );
Current Journal()[Plot Col Box( 1 )] << Add Element( {{3, Label( "OPIE" )}} );
vals = Current Journal()[Plot Col Box( 1 )] << Get as matrix;
Current Journal() << Close window;
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Set automatic recalculation.
4. Fit linear regression line.
5. Add local data filter.
6. Show journal window.
7. Remove third element from plot.
8. Add labeled element to plot.
9. Retrieve plot data as matrix.
10. Close journal window.



### Example 147
> **Summary**: Creates a bivariate plot with a fit line, filtered by weight range and sex, and generates reports for both male and female subsets.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #LocalDataFilter, #AutomaticRecalculation, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line,
	Local Data Filter(
		Add Filter( columns( :weight ), Where( :weight >= 95 & :weight <= 150 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
obj << Automatic Recalc( 1 );
dt << Select Where( :sex == "F" );
dt << Exclude();
rpt = Report( obj );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line,
	Local Data Filter(
		Add Filter( columns( :weight ), Where( :weight >= 95 & :weight <= 150 ) ),
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
2. Create bivariate plot.
3. Set Y to weight.
4. Set X to height.
5. Add fit line.
6. Enable local data filter.
7. Filter weight between 95 and 150.
8. Configure filter mode.
9. Automatically recalculate plot.
10. Select females.
11. Exclude females.
12. Generate report.
13. Close file without saving.
14. Reopen "data_table.jmp".
15. Create bivariate plot again.
16. Set Y to weight.
17. Set X to height.
18. Add fit line.
19. Enable local data filter.
20. Filter weight between 95 and 150.
21. Configure filter mode.
22. Disable automatic recalculation.
23. Select females.
24. Exclude females.
25. Generate report.



### Example 148
> **Summary**: Creates a bivariate plot to analyze the relationship between 'weight' and 'height', then saves the report as a PNG image.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #DataVisualization, #ReportGeneration, #PNGImage -->

**Code**:
```jsl
folderPathTmp = "$DESKTOP";
dt = Open("data_table.jmp");
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Capture( folderPathTmp || "/JMP-23578.png", "png" );
```

**Code Explanation**:

1. Set folder path to desktop.
2. Open data table.
3. Create bivariate plot.
4. Get report object.
5. Save capture as PNG.



### Example 149
> **Summary**: Creates a bivariate plot for height vs weight, fitting a red line by sex, and saving predicted heights for males.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #PredictedValues, #ByGroups, #DataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bivar = Bivariate( Y( :height ), X( :weight ), Fit Line( {Line Color( "Red" )} ), By( :sex ) );
bivar[1] << (curve[1] << save predicteds());
dt << delete column( "Predicted height By sex" );
bivar[1] << (curve[1] << save predicteds());
a = :age << GetAsMatrix;
Close( dt, No Save );
certnames =
"{city, Latitude, Longitude, State, Region, \!"pop- m\!"n, POP, Max deg. F Jan, OZONE, CO, SO2, NO, PM10, Lead, X, Y, new 1, new 2, new 3}";
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot for height vs weight.
3. Fit red line by sex.
4. Save predicted heights for males.
5. Delete existing "Predicted height By sex" column.
6. Save predicted heights for males again.
7. Extract age data into matrix.
8. Close table without saving.
9. Define certificate names list.



### Example 150
> **Summary**: Creates a bivariate plot with a red line fit to predict height by sex, while also saving predicted heights and deleting an existing column.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #PredictiveModeling, #DataVisualization, #Sex-BasedAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bivar = Bivariate( Y( :height ), X( :weight ), Fit Line( {Line Color( "Red" )} ), By( :sex ) );
bivar[1] << (curve[1] << save predicteds());
dt << delete column( "Predicted height By sex" );
bivar[1] << (curve[1] << save predicteds());
a = :age << GetAsMatrix;
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Fit line with red color.
4. Group by sex.
5. Save predicted heights.
6. Delete existing predicted column.
7. Save predicted heights again.
8. Extract age data as matrix.



### Example 151
> **Summary**: Creates a bivariate plot to analyze the relationship between height and weight, grouped by age.

<!-- Keywords: #BivariatePlot, #GroupBy, #Age, #Height, #Weight -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Bivariate( Y( :height ), X( :weight ), by( :age ) );
biv << close window;
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set Y variable to height.
4. Set X variable to weight.
5. Group by age.
6. Close bivariate plot window.



### Example 152
> **Summary**: Creates and displays bivariate plots and distribution analyses for a data table, utilizing JMP's Bivariate and Distribution platforms.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DistributionAnalysis, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Bivariate( Y( :height ), X( :weight ), by( :age ) );
biv << close window;
dt1 = Open("data_table.jmp");
dist = dt1 << Distribution( Continuous Distribution( Column( :Order Year ), Outlier Box Plot( 0 ) ) );
dist << close window;
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Close Bivariate window.
4. Open data table;
5. Create Distribution analysis.
6. Close Distribution window.



### Example 153
> **Summary**: Creates a nonparametric density plot for bivariate analysis of Weight and Height variables, saving the density grid to a table.

<!-- Keywords: #JSLScriptingLanguage, #BivariateAnalysis, #NonparametricDensityPlot, #DataVisualization, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
mytab = obj << Nonpar Density( {Save Density Grid} );
```

**Code Explanation**:

1. Open data table.
2. Create bivariate analysis object.
3. Add nonparametric density plot.
4. Save density grid to table.



### Example 154
> **Summary**: Creates and creates a report for three bivariate plots for exploring relationships between 'weight' and 'height', with optional filtering by 'sex'.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataVisualization, #Reporting, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv1 = dt << Bivariate( X( :weight ), Y( :height ), By( :sex ), Title( "Weight/Height Relationship" ) );
biv2 = dt << Bivariate( X( :weight ), Y( :height ), By( :sex ) );
biv3 = dt << Bivariate( X( :weight ), Y( :height ), Title( "Weight/Height Relationship" ) );
rpt1 = biv1 << Report;
rpt2 = biv2 << Report;
rpt3 = biv3 << Report;
```

**Code Explanation**:

1. Open data table;
2. Create first bivariate plot.
3. Create second bivariate plot.
4. Create third bivariate plot.
5. Generate report for first plot.
6. Generate report for second plot.
7. Generate report for third plot.



### Example 155
> **Summary**: Creates and creates a report for bivariate plots for weight vs height, with optional by sex grouping, using JMP's Bivariate platform.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataVisualization, #ByGrouping, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv1 = dt << Bivariate( X( :weight ), Y( :height ), By( :sex ) );
biv1 << Title( "Weight/Height Relationship" );
biv2 = dt << Bivariate( X( :weight ), Y( :height ), By( :sex ) );
biv3 = dt << Bivariate( X( :weight ), Y( :height ) );
biv3 << Title( "Weight/Height Relationship" );
rpt1 = biv1 << Report;
rpt2 = biv2 << Report;
rpt3 = biv3 << Report;
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot for weight vs height by sex.
3. Set title for first plot.
4. Create second bivariate plot for weight vs height by sex.
5. Create third bivariate plot for weight vs height.
6. Set title for third plot.
7. Retrieve report from first plot.
8. Retrieve report from second plot.
9. Retrieve report from third plot.



### Example 156
> **Summary**: Creates a Bivariate analysis for categorical variables TV, Film, Art, and Restaurant in JMP, saving the script to the data table.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #CategoricalVariables, #DataTableOperations, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Bivariate( Y( :A ), X( :Part ) );
obj << Save Script to Data Table("data_table");
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate analysis.
3. Save script to data table.



### Example 157
> **Summary**: Creates a bivariate analysis with a density ellipse and shaded contour for the 'height' variable by 'weight', customizing the report title and outline box.

<!-- Keywords: #BivariateAnalysis, #DensityEllipse, #ShadedContour, #CustomReportTitle, #OutlineBox -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	Density Ellipse( 0.9, {Shaded Contour( 1 ), Line Color( {213, 72, 87} )} ),
	SendToReport(
		Dispatch( {}, "Bivariate Fit of height By weight", OutlineBox, {Set Title( "Density Ellipse 0.90, Shaded Contour" )} ),
		Dispatch( {}, OutlineBox, {Close( 0 )} )
	)
);
```

**Code Explanation**:

1. Open table.
2. Create bivariate analysis.
3. Set Y variable.
4. Set X variable.
5. Add density ellipse.
6. Enable shaded contour.
7. Set line color.
8. Customize report title.
9. Close outline box.
10. Execute script.



### Example 158
> **Summary**: Creates a bivariate analysis object with Nonpar Density and Quantile Density Contours, using CD8 as the Y variable and CD3 as the X variable.

<!-- Keywords: #BivariateAnalysis, #NonparDensity, #QuantileDensityContours, #JSLScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
dt under test << Clear Row States;
obj = Bivariate(
	Y( :CD8 ),
	X( :CD3 ),
	Nonpar Density( {Mesh Plot( 1 ), Modal Clustering( 1 )} ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Format( "Best", 10 ), Min( 0 ), Max( 520 ), Inc( 75 ), Minor Ticks( 2 ), Rotated Labels( "Angled" )}
		),
		Dispatch( {}, "2", ScaleBox,
			{Format( "Best", 10 ), Min( -20 ), Max( 520 ), Inc( 75 ), Minor Ticks( 2 ), Rotated Labels( "Vertical" )}
		),
		Dispatch( {"Quantile Density Contours"}, "1", ScaleBox,
			{Format( "Best", 10 ), Min( 0 ), Max( 520 ), Inc( 75 ), Minor Ticks( 2 ), Rotated Labels( "Angled" )}
		),
		Dispatch( {"Quantile Density Contours"}, "2", ScaleBox,
			{Format( "Best", 10 ), Min( -20 ), Max( 520 ), Inc( 75 ), Minor Ticks( 2 ), Rotated Labels( "Vertical" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Clear row states in data table.
3. Create Bivariate analysis object.
4. Set Y variable to CD8.
5. Set X variable to CD3.
6. Add Nonpar Density with Mesh Plot and Modal Clustering.
7. Configure Y axis formatting and ticks.
8. Configure X axis formatting and ticks.
9. Configure Quantile Density Contours Y axis formatting and ticks.
10. Configure Quantile Density Contours X axis formatting and ticks.



### Example 159
> **Summary**: Creates a bivariate plot with a customized scale box to visualize the relationship between weight and height.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #Customization, #ScaleBox, #DataVisualization -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
biv = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport( Dispatch( {}, "1", ScaleBox, {Min( 50 ), Max( 80 ), Inc( 5 ), Minor Ticks( 1 ), Rotated Labels( "Horizontal" )} ) )
);
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Size To Isometric;
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Configure scale box properties.
6. Retrieve report object.
7. Access first frame box.
8. Set frame box to isometric size.



### Example 160
> **Summary**: Creates a bivariate plot for weight and height, filtered by age 17, and retrieves the first frame box report.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #DataFiltering, #FrameBoxReport, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = Bivariate( y( weight ), x( height ) );
dt << Select Where( :age == 17 );
fbox7 = Report( biv )[Frame Box( 1 )];
dt << Clear Select;
colorVal = -15741510;
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Select rows where age is 17.
4. Get Frame Box 1 report.
5. Clear row selection.
6. Assign color value.



### Example 161
> **Summary**: Creates a bivariate plot with oxy as the Y variable and rstpulse as the X variable, filtered by age 40, and displays the first frame box.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #DataFiltering, #FrameBox, #HLSColor -->

**Code**:
```jsl
dt3 = Open("data_table.jmp");
biv = dt3 << Bivariate( y( :oxy ), x( :rstpulse ) );
dt3 << Select Where( :age == 40 );
fbox8 = Report( biv )[Frame Box( 1 )];
dt3 << Clear Select;
colorVar = HLS Color( 0.2, 0.5, 1 );
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set Y variable to oxy.
4. Set X variable to rstpulse.
5. Select rows where age is 40.
6. Access first Frame Box.
7. Clear row selection.
8. Define color variable.



### Example 162
> **Summary**: Creates a bivariate plot for weight and height, selects rows where age is 14, and displays the first frame box.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #DataSelection, #FrameBox, #ColorConversion -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Bivariate( y( weight ), x( height ) );
dt << Select Where( :age == 14 );
fbox9 = Report( biv )[Frame Box( 1 )];
dt << Clear Select;
{h, l, s} = Color To HLS( 8 );
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Select rows where age is 14.
4. Access first frame box.
5. Clear row selection.
6. Convert color to HLS.



### Example 163
> **Summary**: Creates a bivariate plot for weight and height, selects rows where age is 12, and customizes row colors to green.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #DataSelection, #RowColors, #FrameBox -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Bivariate( y( weight ), x( height ) );
dt << Select Where( :age == 12 );
fbox1 = Report( biv )[Frame Box( 1 )];
fbox1 << Row Colors( green );
dt << Clear Select;
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Select rows where age is 12.
4. Get frame box 1 reference.
5. Change row colors to green.
6. Clear row selection.



### Example 164
> **Summary**: Creates a bivariate plot to visualize the relationship between weight and height, filtered by age 17, and displays the first frame box of the report.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataFiltering, #ReportGeneration, #FrameBox -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = Bivariate( y( weight ), x( height ) );
dt << Select Where( :age == 17 );
fbox7 = Report( biv )[Frame Box( 1 )];
dt << Clear Select;
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot: weight vs height.
3. Select rows where age is 17.
4. Access first frame box of bivariate report.
5. Clear selected rows.



### Example 165
> **Summary**: Creates a bivariate plot for oxy and rstpulse, filters rows where age is 40, and retrieves the first frame box from the report.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataFiltering, #FrameBox, #ReportGeneration -->

**Code**:
```jsl
dt3 = Open("data_table.jmp");
biv = dt3 << Bivariate( y( :oxy ), x( :rstpulse ) );
dt3 << Select Where( :age == 40 );
fbox8 = Report( biv )[Frame Box( 1 )];
dt3 << Clear Select;
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Select rows where age is 40.
4. Get frame box from report.
5. Clear row selection.



### Example 166
> **Summary**: Creates a bivariate plot for weight and height, selecting only rows with age 14, and generates a frame box report.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataSelection, #FrameBoxReport, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Bivariate( y( weight ), x( height ) );
dt << Select Where( :age == 14 );
fbox9 = Report( biv )[Frame Box( 1 )];
dt << Clear Select;
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Select age 14 rows.
4. Get frame box report.
5. Clear row selection.



### Example 167
> **Summary**: Creates a bivariate plot with a linear regression line, and configures the report object to display major grid lines on the y-axis.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LinearRegression, #ReportObject, #DataVisualization -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
biv = dt << Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
rbiv[axis box( 1 )] << Add Ref Line( 90, "Solid", blue );
rbiv[axis box( 2 )] << Show Major Grid( 1 );
framebox = rbiv[frame box( 1 )];
framebox << Grid Line Order( 1 );
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Fit linear regression line.
4. Generate report object.
5. Add reference line at y=90.
6. Enable major grid on y-axis.
7. Select first frame box.
8. Set grid line order to 1.



### Example 168
> **Summary**: Creates a bivariate plot with a linear regression line and reference lines, utilizing JMP's Bivariate platform to visualize the relationship between 'weight' and 'height'.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LinearRegression, #ReferenceLines, #DataVisualization -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
biv = dt << Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
rbiv[axis box( 1 )] << Add Ref Line( 90, "Solid", blue );
rbiv[axis box( 2 )] << Show Major Grid( 1 );
framebox = rbiv[frame box( 1 )];
framebox << Reference Line Order( 1 );
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Fit linear regression line.
4. Generate report object.
5. Add reference line at y=90.
6. Enable major grid lines.
7. Select first frame box.
8. Set reference line order.



### Example 169
> **Summary**: Creates a bivariate plot with a polynomial fit of degree 4, customized line color, and report generation.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #PolynomialFit, #CustomLineColor, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Bivariate( Y( :weight ), X( :height ), Fit Polynomial( 4, {Line Color( {57, 177, 67} )} ) );
rbiv = biv << report;
ms = rbiv[Frame Box( 1 )] << Find Seg( Line Seg( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set Y variable.
4. Set X variable.
5. Fit polynomial of degree 4.
6. Customize line color.
7. Generate report.
8. Access first frame box.
9. Find first segment.
10. Assign to variable ms.



### Example 170
> **Summary**: Creates a bivariate plot and report, extracting the first frame box segment, and appending it to a new graph box.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #FrameBoxSegments, #GraphBoxes, #DataTableOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
foo = rbiv[Frame Box( 1 )] << Child Seg();
Close( dt, no save );
x = [20, 40, 60, 80];
nw = New Window( "Example", Graph Box( Frame Size( 300, 120 ), Marker( x, x ) ), Graph Box( Frame Size( 300, 120 ) ) );
gb2 = Current Report()[FrameBox( 2 )];
gb2 << append seg( Current Report()[FrameBox( 1 )] << find seg( TopSeg( 1 ) ) );
nw << close window;
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Retrieve bivariate report.
4. Extract first frame box segment.
5. Close data table without saving.
6. Define x values.
7. Create new window with graph boxes.
8. Get second graph box.
9. Append segment from first graph box.
10. Close new window.



### Example 171
> **Summary**: Creates a bivariate plot with a fit line, using the 'Bivariate' platform in JMP to visualize the relationship between weight and height.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #FitLine, #DataVisualization, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
foo = rbiv[Frame Box( 1 )] << Child Seg();
```

**Code Explanation**:

1. Open data_table data
2. Create bivariate plot.
3. Set weight as Y variable.
4. Set height as X variable.
5. Add fit line to plot.
6. Generate report object.
7. Access first frame box.
8. Extract child segments.



### Example 172
> **Summary**: Creates a bivariate plot for categorical variables, filtering rows where cheese is 'A', and displaying the total cross table.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataFiltering, #CrossTable, #CategoricalVariables -->

**Code**:
```jsl
dtc = Open("data_table.jmp");
biv = dtc << Bivariate( y( :score ), x( :response ) );
dtc << Select Where( :cheese == "A" );
fbox1 = Report( biv )[Frame Box( 1 )];
fbox1 << Row Label;
fbox1 << Row Label( 0 );
fbox1 << Row Label;
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Select rows where cheese is A.
4. Access first frame box.
5. Toggle row labels on.
6. Hide row labels.
7. Toggle row labels off.



### Example 173
> **Summary**: Selects and visualizes bivariate relationships between categorical variables, specifically focusing on rows where cheese is 'B'.

<!-- Keywords: #JSLScriptingLanguage, #BivariateAnalysis, #CategoricalVariables, #DataSelection, #Visualization -->

**Code**:
```jsl
dtc = Open("data_table.jmp");
biv = dtc << Bivariate( y( :score ), x( :response ) );
dtc << Select Where( :cheese == "B" );
fbox1 = Report( biv )[Frame Box( 1 )];
fbox1 << Row Exclude;
fbox1 << Row Exclude( 0 );
fbox1 << Row Exclude;
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Select rows where cheese is B.
4. Get first frame box.
5. Exclude selected rows.
6. Exclude all rows.
7. Exclude selected rows again.



### Example 174
> **Summary**: Creates a bivariate plot for categorical variables, filtering rows where cheese is 'C', and hiding specific rows in the resulting frame box.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataFiltering, #FrameBox, #RowHiding -->

**Code**:
```jsl
dtc = Open("data_table.jmp");
biv = dtc << Bivariate( y( :score ), x( :response ) );
dtc << Select Where( :cheese == "C" );
fbox1 = Report( biv )[Frame Box( 1 )];
fbox1 << Row Hide( 1 );
fbox1 << Row Hide( 0 );
fbox1 << Row Hide;
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Select rows where cheese is "C".
4. Access first Frame Box.
5. Hide row 1.
6. Hide row 0.
7. Hide all rows.



### Example 175
> **Summary**: Creates a bivariate plot with a fitted linear regression line, customizing report appearance and excluding rows from the legend.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #LinearRegression, #CustomReportAppearance, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {208, 64, 86} )} ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			{Row Legend(
				weight,
				Color( 1 ),
				Color Theme( "Blue to Gray to Red" ),
				Marker( 0 ),
				Marker Theme( "" ),
				Continuous Scale( 1 ),
				Reverse Scale( 1 ),
				Excluded Rows( 0 )
			)}
		)
	)
);
rstate = {};
For( i = 1, i <= N Row( dt ), i++,
	Insert Into( rstate, Color Of( Row State( i ) ) );
	Insert Into( rstate, Marker Of( Row State( i ) ) );
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Fit linear regression line.
6. Customize report appearance.
7. Exclude rows from legend.
8. Initialize row state list.
9. Loop through each row.
10. Record row color and marker state.



### Example 176
> **Summary**: Creates a bivariate plot to visualize the relationship between Response and Count, with customizable row legend settings.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #Customization, #DataVisualization, #PastelColorTheme -->

**Code**:
```jsl
dtc = Open("data_table.jmp");
dtc << Bivariate(
	Y( :Response ),
	X( :Count ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			{Row Legend(
				Cheese,
				Color( 1 ),
				Color Theme( "Pastel" ),
				Marker( 1 ),
				Marker Theme( "Solid" ),
				Continuous Scale( 0 ),
				Reverse Scale( 1 ),
				Excluded Rows( 0 )
			)}
		)
	)
);
rstate = {};
For( i = 1, i <= N Row( dtc ), i++,
	Insert Into( rstate, Color Of( Row State( i ) ) );
	Insert Into( rstate, Marker Of( Row State( i ) ) );
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Set Y variable to "Response".
4. Set X variable to "Count".
5. Configure report settings.
6. Customize row legend.
7. Apply color theme "Pastel".
8. Use solid markers.
9. Enable continuous scale.
10. Reverse the scale.



### Example 177
> **Summary**: Creates a bivariate plot to visualize the relationship between total fat grams and calories for Hershey brand products, with customizable row legend settings.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataTableManipulation, #RowLegendCustomization, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :brand == "Hershey" );
dt << Exclude;
dt << clear select;
op = dt << Bivariate(
	X( :Total fat g ),
	Y( :Calories ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			{Row Legend(
				Brand,
				Color( 1 ),
				Color Theme( "SAS Default" ),
				Marker( 1 ),
				Marker Theme( "Solid" ),
				Continuous Scale( 0 ),
				Reverse Scale( 1 ),
				Excluded Rows( 0 )
			)}
		)
	)
);
rstate = {};
For( i = 1, i <= N Row( dt ), i++,
	Insert Into( rstate, Color Of( Row State( i ) ) );
	Insert Into( rstate, Marker Of( Row State( i ) ) );
);
```

**Code Explanation**:

1. Open data table;
2. Select rows where brand is "Hershey".
3. Exclude selected rows.
4. Clear row selection.
5. Create Bivariate plot.
6. Set X variable to "Total fat g".
7. Set Y variable to "Calories".
8. Configure row legend settings.
9. Initialize empty list `rstate`.
10. Loop through each row to record color and marker states.



### Example 178
> **Summary**: Creates a bivariate plot with customized frame box properties, filtering data by brand 'Hershey', and configuring row state colors and markers.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #DataFiltering, #Customization, #RowState -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :brand == "Hershey" );
dt << Exclude;
dt << clear select;
op = dt << Bivariate(
	X( :Total fat g ),
	Y( :Calories ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			{Row Legend(
				Brand,
				Color( 1 ),
				Color Theme( "SAS Default" ),
				Marker( 1 ),
				Marker Theme( "Solid" ),
				Continuous Scale( 0 ),
				Reverse Scale( 1 ),
				Excluded Rows( 1 )
			)}
		)
	)
);
rstate = {};
For( i = 1, i <= N Row( dt ), i++,
	Insert Into( rstate, Color Of( Row State( i ) ) );
	Insert Into( rstate, Marker Of( Row State( i ) ) );
);
```

**Code Explanation**:

1. Open data table.
2. Select rows with brand "Hershey".
3. Exclude selected rows.
4. Clear row selection.
5. Create bivariate plot.
6. Configure frame box properties.
7. Initialize row state array.
8. Loop through each row.
9. Insert color state into array.
10. Insert marker state into array.



### Example 179
> **Summary**: Process of setting marker sizes for a bivariate plot, utilizing a loop to iterate through predefined size names and update the marker size accordingly.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #MarkerSize, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Bivariate( Y( :height ), X( :weight ) );
seg = Report( biv )[framebox( 1 )] << Find seg( "Marker Seg" );
nameList = {"Dot", "Small", "Medium", "Large", "XL", "XXL", "XXXL"};
mslist = {};
For( i = 1, i <= 7, i++,
	seg << Marker Size( nameList[i] );
	Insert Into( mslist, seg << Get Marker Size );
);
dt << Close Window;
```

**Code Explanation**:

1. Open table.
2. Create bivariate plot.
3. Access report frame.
4. Find segment.
5. Define size names.
6. Initialize size list.
7. Loop through sizes.
8. Set marker size.
9. Save marker size.
10. Close window.



### Example 180
> **Summary**: Creates a bivariate plot for height vs. weight, customizes segment settings, and generates line segment graphs.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #SegmentCustomization, #LineSegmentGraphs, #DataVisualization -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
biv = dt << Bivariate( Y( :height ), X( :weight ) );
seg = Report( biv )[framebox( 1 )] << find seg( "Marker Seg" );
seg << Set color( blue );
seg << Set marker( Plus );
mcolor = seg << Get Color;
seg << Revert;
rmark = Char( seg << Get Marker );
dt << Close Window;
x = [10, 50, 90];
y = [10, 90, 10];
nw19 = New Window( "Line Seg Example", g = Graph Box( Marker Seg( x, y ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Marker Seg" ));
seg << Sib Append( Line Seg( x, y, <<Set Line Color( Green ) ) );
nw19 << Close Window;
x = [10, 50, 90];
y = [10, 90, 10];
nw20 = New Window( "Line Seg Example", g = Graph Box( Marker Seg( x, y ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Marker Seg" ));
seg << Sib Append( Line Seg( x, y, <<Set Line Color( Green ) ) );
nw20 << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot for height vs. weight.
3. Find "Marker Seg" in report.
4. Set segment color to blue.
5. Set segment marker to plus.
6. Retrieve segment color.
7. Revert segment settings.
8. Retrieve segment marker.
9. Close data table window.
10. Create new window with line segment graph.



### Example 181
> **Summary**: Creates a bivariate plot with a fit line, using RunPulse as the Y variable and RstPulse as the X variable, with a customized line color.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #FitLine, #CustomizedColor, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = Bivariate( Y( :RunPulse ), X( :RstPulse ), Fit Line( {Line Color( {213, 72, 87} )} ) );
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set Y variable to RunPulse.
4. Set X variable to RstPulse.
5. Add Fit Line.
6. Customize line color to RGB(213, 72, 87).



### Example 182
> **Summary**: Creates a bivariate plot with a fit line and adds an image to the frame box, utilizing Bivariate and Report platforms in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #FitLine, #ImageAddition, #Report -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = Bivariate( Y( :RunPulse ), X( :RstPulse ), Fit Line( {Line Color( {213, 72, 87} )} ) );
Report( biv )[framebox( 1 )] << Add Image( Open( "$SAMPLE_IMAGES/windmap.png" ), fillgraph );
seg = Report( biv )[FrameBox( 1 )] << Find Seg( "PictSeg" );
seg << Set Blob(
	Char To Blob(
		"1iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEeSURBVDhPY2CgBzjz+Ov/3bc+kYTvvvnxH8NtIIOU2q7+Zyg+RzLu2PcC1UCQDYI1F0k2CGY5hoFpqx+BDQtddO8/SBKsAMh3mXEbzgeJgfjYxEFBBPcyzHXIguAwARq46sJ7FK/ADEQxAD3wQJrQFYD5QAPRxYkyEFvKIWTgu29/MGMVXxKcefw1VhfCI47U9AuLFAx9sCRFqoGg2AYnCXRAroGgBA5O5NQwEJZkwDFKDQNh4Qf2NhEGgmIcZ7pEzoIY2QlkODQMkeVAbJwGwhIutlwCMg+58Cjf8vQ/CIPUYk2XsMQMUgBKb9gUwfI8comENWhAtoOKL5ylBzQsQZYgl0ogNtayEBb2oByCNeyQIgdkKKxEIjkLkpohAOFsyohHprbCAAAAAElFTkSuQmCC",
		"base64compressed"
	),
	"png"
);
```

**Code Explanation**:

1. Open data_table data
2. Create bivariate plot.
3. Add fit line to plot.
4. Add image to frame box.
5. Find picture segment.
6. Set blob with encoded image.
7. Specify image format as PNG.



### Example 183
> **Summary**: Creates a bivariate plot with a custom line color, grouped by region, and extracts parameter estimates from the fit line.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #CustomLineColor, #ParameterEstimates, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Bivariate( Y( :OZONE ), X( :CO ), Fit Line( {Line Color( {212, 73, 88} )} ), By( :Region ) );
dt1 = Report( obj[1] )[Outline Box( "Parameter Estimates" )][Table Box( 1 )] << Make into Data Table;
dt2 = dt1 << Run Script( "Make into Data Table" );
Names Default To Here( 0 );
dt2 = Words( dt1 << Get Name );
dt2 = dt2[1] || " " || Char( Num( dt2[2] ) + 1 );
cdt = dt1 << Compare Data Tables( Compare With( Data Table( dt2 ) ) );
cdt << Show window( 0 );
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Fit line with custom color.
4. Group by region.
5. Extract parameter estimates.
6. Convert to data table.
7. Run script on new table.
8. Disable name defaulting.
9. Rename second table.
10. Compare data tables silently.



### Example 184
> **Summary**: Creates a bivariate report for weight and height variables, saving it as an HTML file with graphics.

<!-- Keywords: #JSLScriptingLanguage, #BivariateReport, #DataVisualization, #HTMLOutput, #GraphicsPath -->

**Code**:
```jsl
dt = Open("data_table.jmp");
rbiv = Report( dt << Bivariate( y( :weight ), x( :height ) ) );
reportPath = "$TEMP/savehtml.htm";
gfxPath = "$TEMP/gfx/";
delete = 1;
```

**Code Explanation**:

1. Open data table;
2. Create bivariate report.
3. Assign report to rbiv.
4. Define report path.
5. Define graphics path.
6. Set delete flag to 1.



### Example 185
> **Summary**: Analyze categorical variables TV, Film, Art, and Restaurant in a data table by performing multiple correspondence analysis (MCA) and displaying the total cross table.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #OnewayAnalysis, #MultipleCorrespondenceAnalysis, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Biv = Bivariate(
	Y( :Year ),
	X( Transform Column( "Year[Month/Year]", Formula( Year( :Name( "Month/Year" ) ) ) ) ),
	Fit Line( {Line Color( {213, 72, 87} )} )
);
rpt = Biv << report;
Biv << close window;
Biv = Oneway(
	Y( :Month ),
	X( Transform Column( "Month[Month/Year]", Ordinal, Formula( Month( :Name( "Month/Year" ) ) ) ) ),
	Name( "Means/Anova" )(1),
	Mean Diamonds( 1 )
);
rpt = Biv << report;
Biv << close window;
Biv = Bivariate(
	Y( :Name( "Month/Year" ) ),
	X(
		Transform Column(
			"Month Year[Month/Year]",
			Format( "m/y", 8 ),
			Formula( Date DMY( 1, Month( :Name( "Month/Year" ) ), Year( :Name( "Month/Year" ) ) ) )
		)
	),
	Fit Line( {Line Color( {213, 72, 87} )} )
);
rpt = Biv << report;
Biv << close window;
```

**Code Explanation**:

1. Open data table.
2. Create Bivariate analysis.
3. Set Y variable as Year.
4. Transform Month/Year column to Year.
5. Fit linear regression.
6. Save report.
7. Close Bivariate window.
8. Create Oneway analysis.
9. Set Y variable as Month.
10. Transform Month/Year column to Month.
11. Perform Means/Anova.
12. Display mean diamonds.
13. Save report.
14. Close Oneway window.
15. Create Bivariate analysis.
16. Set Y variable as Month/Year.
17. Transform Month/Year column to Date.
18. Fit linear regression.
19. Save report.
20. Close Bivariate window.



### Example 186
> **Summary**: Creates a bivariate analysis report with reference lines and customized frame settings, utilizing the Bivariate platform in JMP.

<!-- Keywords: #BivariateAnalysis, #JMPScriptingLanguage, #ReportGeneration, #CustomizationOptions, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Bivariate(
	Y( :height ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Add Ref Line( 60, Solid, "Black" )} ),
		Dispatch( {}, "2", ScaleBox, {Add Ref Line( 60, Solid, "Black" )} ),
		Dispatch( {}, "Bivar Plot", FrameBox,
			{Frame Size( 328, 238 ), Marker Size( 4 ), DispatchSeg( Marker Seg( 1 ), {Marker( Circle )} )}
		)
	)
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create bivariate analysis.
3. Set Y variable to height.
4. Set X variable to height.
5. Add reference line at 60 on Y axis.
6. Add reference line at 60 on X axis.
7. Adjust frame size to 328x238.
8. Set marker size to 4.
9. Change marker shape to circle.
10. Generate report object.



### Example 187
> **Summary**: Creates a bivariate plot with nonparametric density and color theme, selecting points within a specified range (start to end) and extracting quantile values.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #NonParametricDensity, #ColorTheme, #QuantileValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
start = 0.2609;
end = 0.3;
obj = dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Nonpar Density( {Color Theme( "Spectral"(1) ), Select Points by Density( start, end ), Save Density Quantile} )
);
rows_selected = dt << get selected rows;
quantile = dt[rows_selected, 6];
in_slider_act = Sum( start < quantile < end ) / Length( quantile );
in_slider_exp = 1;
```

**Code Explanation**:

1. Open data table.
2. Define start value.
3. Define end value.
4. Create bivariate plot.
5. Apply nonparametric density.
6. Set color theme.
7. Select points by density.
8. Save density quantile.
9. Get selected rows.
10. Extract quantile values.



### Example 188
> **Summary**: Creates a bivariate plot with a fitted linear and polynomial model, displaying residuals for both models.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LinearModel, #PolynomialRegression, #ResidualAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bv = Bivariate(
	Y( :Name( "2004 Verbal" ) ),
	X( :Name( "2004 Math" ) ),
	Fit Line( {Plot Residuals( 1 ), Line Color( "Red" )} ),
	Fit Polynomial( 3, {Plot Residuals( 1 ), Line Color( "Green" ), Line Style( Smooth )} )
);
rep = Report( bv );
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Set Y variable.
4. Set X variable.
5. Fit linear model.
6. Plot residuals for linear.
7. Set line color red.
8. Fit polynomial model.
9. Set polynomial degree 3.
10. Plot residuals for polynomial.



### Example 189
> **Summary**: Creates a bivariate plot with density ellipses and spline fitting, utilizing the Bivariate platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #DensityEllipses, #SplineFitting, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bv = Bivariate( Y( :weight ), X( :height ) );
bv << Density Ellipse( 0 );
bv << Density Ellipse( 1 );
rpt = Report( bv );
bv << close window;
dt:age[1] = .;
bv = Bivariate( Y( :weight ), X( :height ), Freq( :age ) );
bv << Fit Spline( 100 );
rpt = Report( bv );
s = bv << get script;
```

**Code Explanation**:

1. Open data_table data
2. Create bivariate plot.
3. Add density ellipse at 0.
4. Add density ellipse at 1.
5. Generate report.
6. Close bivariate window.
7. Set first age value to missing.
8. Create weighted bivariate plot.
9. Fit spline with 100 points.
10. Get script for bivariate analysis.



### Example 190
> **Summary**: Creates and analyzes bivariate plots for height vs weight by sex, with additional features to plot residuals, retrieve reports, and run scripts for percentile calculations.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlotting, #DataAnalysis, #PercentileCalculations, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bv = Bivariate( Y( :height ), X( :weight ), By( :sex ), Fit Line( 1 ) );
bv << (Curve[1] << Plot Residuals);
rp = Eval List( {Report( bv[1] ), Report( bv[2] )} );
rp[1][Outline Box( "Residual by Predicted Plot" )] << Close All Like This;
bv << close window;
Delete Symbols( bv, rp, op1, op2 );
Close( dt, No Save );
dt = New Table( "percentiles",
	Add Rows( 7 ),
	New Script(
		"Bivariate",
		Bivariate(
			Y( :dummy ),
			X( :Percentile ),
			SendToReport(
				Dispatch( {}, "Bivar Plot", FrameBox,
					Row Legend(
						Percentile,
						Color( 1 ),
						Color Theme( "" ),
						Marker( 0 ),
						Marker Theme( "" ),
						Continuous Scale( 0 ),
						Reverse Scale( 0 ),
						Excluded Rows( 0 )
					)
				)
			)
		)
	),
	New Script( "Bivariate 2", Bivariate( Y( :dummy ), X( :Percentile ) ) ),
	New Column( "Percentile",
		Numeric,
		Continuous,
		Format( "Best"("NumSeparator"), 10 ),
		Set Property( "Value Colors", {1 = -58112, 2 = -565000, 3 = -1071888, 4 = -1579032, 5 = -6492947, 6 = -11538191, 7 = -16517899} ),
		Set Property( "Value Ordering", {7, 6, 5, 4, 3, 2, 1} ),
		Set Values( [1, 2, 3, 4, 5, 6, 7] ),
		Value Labels( {1 = "5th", 2 = "10th", 3 = "25th", 4 = "Median", 5 = "75th", 6 = "90th", 7 = "95th"} ),
		Use Value Labels( 1 )
	),
	New Column( "dummy", Numeric, Continuous, Format( "Best", 12 ), Set Values( [1, 2, 3, 4, 5, 6, 7] ) ),
	Set Row States(
		[9216.00346374512, 5120.0336766243, 13312.0638895035, 0.0941176414489746, 13056.3870097995, 13056.6877297759, 4864.98454350233]
	)
);
dt << Run Script( "Bivariate" );
dt << Run Script( "Bivariate 2" );
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot for height vs weight by sex.
3. Add fit line to plots.
4. Plot residuals for first curve.
5. Retrieve reports for both plots.
6. Close residual plot outlines.
7. Close bivariate window.
8. Delete symbols.
9. Close dataset without saving.
10. Create new table "percentiles".
11. Add rows and scripts for bivariate analysis.
12. Define "Percentile" column with properties.
13. Define "dummy" column.
14. Set row states.
15. Run "Bivariate" script.
16. Run "Bivariate 2" script.



### Example 191
> **Summary**: Creates a bivariate plot with a spline fit to predict the 'ratio' variable based on the 'age' variable, and saves the predicted values.

<!-- Keywords: #BivariatePlot, #SplineFit, #PredictiveModeling, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bv = Bivariate( Y( :ratio ), X( :age ), Fit Spline( 1000, {Save Predicteds} ) );
dt << Delete Column( Spline Predictor for ratio );
bv << (Curve[1] << Save Prediction Formula);
bv << (Curve[1] << Save Predicteds);
```

**Code Explanation**:

1. Open data table.
2. Create Bivariate plot.
3. Set Y variable to "ratio".
4. Set X variable to "age".
5. Fit Spline with 1000 points.
6. Save predicted values.
7. Delete "Spline Predictor for ratio" column.
8. Save prediction formula.
9. Save predicted values again.



### Example 192
> **Summary**: Creates a bivariate plot with exponential and square transformations, shaded confidence intervals, and customized line color to visualize the relationship between height and weight.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #Transformation, #ConfidenceInterval, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Fit Special( xTran( "Exp" ), yTran( "Square" ), {Confid Shaded Indiv( 1 ), Line Color( {57, 177, 67} )} ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			{DispatchSeg( Poly Seg( 1 ), {Fill Color( {57, 177, 67} )} ), DispatchSeg( Line Seg( 1 ), {Line Color( {57, 177, 67} )} )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set Y variable to height.
4. Set X variable to weight.
5. Apply special fit with transformations.
6. Transform X using exponential function.
7. Transform Y using square function.
8. Enable shaded confidence interval.
9. Set line color to green.
10. Customize report appearance.



### Example 193
> **Summary**: Creates a bivariate analysis object for exploring relationships between categorical variables TV, Film, Art, and Restaurant in an Employee Taste data table.

<!-- Keywords: #JSLScriptingLanguage, #BivariateAnalysis, #CategoricalVariables, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Bivariate( Y( :height ), X( :"weight" ) );
```

**Code Explanation**:

1. Open data table.
2. Create bivariate analysis object.



### Example 194
> **Summary**: Runs the creation and plotting of a bivariate analysis with residuals for height vs. weight, grouped by sex, using JMP's Bivariate platform.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #ResidualPlotting, #GroupBy, #LinearRegression -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bv = Bivariate( Y( :height ), X( :weight ), By( :sex ), Fit Line( 1 ) );
bv << (Curve[1] << Plot Residuals);
rp = Eval List( {Report( bv[1] ), Report( bv[2] )} );
rp[1][Outline Box( "Residual by Predicted Plot" )] << Close All Like This;
bv << close window;
Delete Symbols( bv, rp, op1, op2 );
```

**Code Explanation**:

1. Open data_table data
2. Create Bivariate analysis.
3. Set Y to height.
4. Set X to weight.
5. Group by sex.
6. Fit linear regression line.
7. Plot residuals for curve.
8. Evaluate report objects.
9. Close residual plots.
10. Close Bivariate window.



### Example 195
> **Summary**: Creates a bivariate plot with nonparametric density and contour levels, utilizing kernel parameters to visualize relationships between height and weight.

<!-- Keywords: #BivariatePlot, #NonParametricDensity, #KernelParameters, #ContourLevels, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
kvh = 6.00274066676535;
kvw = 1.14700503275327;
bv = Bivariate( Y( :height ), X( :weight ) );
bv << Nonpar Density( 1 );
bv << (Curve[1] << Name( "5% Contours" )(0));
bv << (Curve[1] << Set Kernel( kvh, kvw ));
bv << close window;
bv = Bivariate( Y( :height ), X( :weight ), Nonpar Density( {Set Kernel( kvh, kvw ), Name( "5% Contours" )(0), Kernel Control( 0 )} ) );
bv << close window;
```

**Code Explanation**:

1. Open data table.
2. Define kernel height.
3. Define kernel width.
4. Create bivariate plot.
5. Add nonparametric density.
6. Configure contour level.
7. Set kernel parameters.
8. Close first window.
9. Create bivariate plot again.
10. Close second window.



### Example 196
> **Summary**: Creates a bivariate analysis with nonparametric density plot and mesh plot, using CD8 as the Y variable and CD3 as the X variable.

<!-- Keywords: #JSLScriptingLanguage, #BivariateAnalysis, #NonParametricDensityPlot, #MeshPlot, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Clear Row States;
fit = Bivariate( Y( :CD8 ), X( :CD3 ), Nonpar Density( {Mesh Plot( 1 ), Set Kernel( 12.2, 15.3 )} ) );
fit << journal;
jrn = Current Journal();
jrn << close window( no save );
```

**Code Explanation**:

1. Open data table;
2. Clear row states in table.
3. Create bivariate analysis.
4. Set Y variable to CD8.
5. Set X variable to CD3.
6. Add nonparametric density plot.
7. Enable mesh plot.
8. Set kernel parameters.
9. Display analysis results.
10. Close journal without saving.



### Example 197
> **Summary**: Creates bivariate plots by sex, displaying rectangles and text for each point in a 400x400 frame.

<!-- Keywords: #JSLScripting, #BivariatePlot, #ByGroup, #GraphicsScript, #FrameBox -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
biv = Bivariate( Y( :height ), X( :Weight ), By( :sex ) );
rep = Eval List( {Report( biv[1] ), Report( biv[2] )} );
For( i = 1, i <= N Items( biv ), i++,
	grph = rep[i][Framebox( 1 )];
	grph << framesize( 400, 400 );
	grph << add graphics script(
		back,
		For Each Row(
			If( :sex == "M",
				Fill Color( "Cyan" ),
				Fill Color( "Yellow" )
			);
			Rect( :Weight - 1, height - 0.2, :Weight + 1, height + 0.2, 1 );
			Text( Center Justified, {:Weight, :height}, :age );
		)
	);
);
jrn1 = rep[1][FrameBox( 1 )] << get journal;
jrn2 = rep[2][FrameBox( 1 )] << get journal;
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot by sex.
3. Store reports in list.
4. Loop through each report.
5. Get frame box for graph.
6. Set frame size to 400x400.
7. Add graphics script to frame.
8. Loop through each row.
9. Set fill color based on sex.
10. Draw rectangle for each point.
11. Add age text to each point.
12. Get journal for first frame.
13. Get journal for second frame.



### Example 198
> **Summary**: Creates a bivariate plot with histogram borders, using the Bivariate platform in JMP to visualize the relationship between Oxy and Runtime.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #HistogramBorders, #GraphicsScript, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bv = Bivariate(
	Y( :Oxy ),
	X( :Runtime ),
	Histogram Borders( 1 ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			{Marker Size( 3 ), Add Graphics Script(
				2,
				Description( "Script" ),
				Transparency( 0.5 );
				Fill Color( {0.38, 0.84, 0.67} );
				Polygon( [8.56, 10.94, 13.81], [54.33, 40.82, 37.98] );
			), Grid Line Order( 1 ), Reference Line Order( 3 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate analysis.
3. Set Y variable to Oxy.
4. Set X variable to Runtime.
5. Enable histogram borders.
6. Send report settings.
7. Dispatch to Bivar Plot frame.
8. Set marker size to 3.
9. Add graphics script.
10. Draw colored polygon on plot.



### Example 199
> **Summary**: Creates and displays bivariate plots with polynomial fits, histograms, and reports for a selected data table.

<!-- Keywords: #JSLScripting, #BivariatePlot, #PolynomialFit, #HistogramBorders, #DataVisualization -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
:age[1] = .;
bv1 = Bivariate( Y( :height ), X( :weight ), Freq( :age ), Fit Polynomial( 2, {Line Color( "Red" )} ) );
rp1 = Report( bv1 );
Row State( 1 ) = Excluded State( 1 );
bv2 = Bivariate( Y( :height ), X( :weight ), Freq( :age ), Fit Polynomial( 2, {Line Color( "Red" )} ) );
rp2 = Report( bv2 );
dt2 << Select Rows( 2 ) << Select Rows( 7 ) << Select Rows( 30 ) << Select Rows( 37 ) << Select Rows( 39 );
biv2 = Bivariate( Y( :height ), X( :weight ), Freq( :age ), Histogram Borders( 1 ) );
rep2 = Report( biv2 );
```

**Code Explanation**:

1. Open data table;
2. Set age of first row to missing.
3. Create polynomial fit bivariate plot.
4. Generate report for first bivariate plot.
5. Exclude first row.
6. Create second polynomial fit bivariate plot.
7. Generate report for second bivariate plot.
8. Select specific rows in table.
9. Create bivariate plot with histogram borders.
10. Generate report for third bivariate plot.



### Example 200
> **Summary**: Peforms a bivariate analysis to visualize the relationship between ABRASION and MODULUS, with adjustable scale box settings and minor ticks.

<!-- Keywords: #BivariateAnalysis, #JMPScriptingLanguage, #DataVisualization, #RegressionLine, #ScaleBoxSettings -->

**Code**:
```jsl
dt3 = Open("data_table.jmp");
biv3 = Bivariate(
	Y( :ABRASION ),
	X( :MODULUS ),
	SendToReport( Dispatch( {}, "2", ScaleBox, {Inc( 40 ), Minor Ticks( 10 )} ) ),
	Fit Line( 1 )
);
BivRedo = biv3 << Redo Analysis( 1 );
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate analysis.
3. Set Y variable to ABRASION.
4. Set X variable to MODULUS.
5. Adjust scale box settings.
6. Increase major ticks to 40.
7. Enable minor ticks at 10.
8. Fit linear regression line.
9. Redo the analysis.
10. Save redo analysis object.



### Example 201
> **Summary**: Peforms a bivariate analysis to visualize the relationship between height and weight, fitting polynomial curves of degrees 2-6, and customizing curve appearance.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #PolynomialCurveFitting, #Customization, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fit = Bivariate(
	Y( :height ),
	X( :weight ),
	Fit Polynomial( 2 ),
	Fit Polynomial( 3 ),
	Fit Polynomial( 4 ),
	Fit Polynomial( 5 ),
	Fit Polynomial( 6 )
);
rep = Report( fit );
jrn = rep << get journal;
fit << (curve[1] << Line Style( 0 ));
fit << (curve[1] << LineWidth( 2 ));
fit << (curve[1] << LineColor( 8 ));
fit << (curve[3] << Confid Curves Indiv( 1 ));
fit << (curve[5] << Plot Residuals);
fit << (curve[4] << Plot Residuals);
fit << (curve[3] << Plot Residuals);
fit << (curve[2] << Plot Residuals);
fit << (curve[1] << Plot Residuals);
```

**Code Explanation**:

1. Open data table.
2. Perform bivariate analysis.
3. Fit polynomial of degree 2.
4. Fit polynomial of degree 3.
5. Fit polynomial of degree 4.
6. Fit polynomial of degree 5.
7. Fit polynomial of degree 6.
8. Retrieve report object.
9. Get journal from report.
10. Customize curve appearance.



### Example 202
> **Summary**: Runs a series of bivariate analyses with nonparametric density plots, orthogonal regression, and confidence curves to visualize relationships between Sepal length and Petal Width in the Iris dataset, while also accounting for species-specific density ellipses.

<!-- Keywords: #BivariateAnalysis, #NonParametricDensityPlot, #OrthogonalRegression, #ConfidenceCurves, #IrisDataset -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fit = Bivariate(
	Y( :Petal Width ),
	X( :Sepal length ),
	Nonpar Density( {Name( "5% contours" )(0), Modal Clustering( 1 ), Kernel Control( 1 )} ),
	Fit Orthogonal( Equal Variances ),
	Fit Mean( {Confid Curves Fit( 1 )} )
);
rep = Report( fit );
fit << Show Points( 0 );
nm = N Missing( dt:Cluster << get values );
fit2 = Bivariate(
	Y( :Petal Width ),
	X( :Sepal length ),
	Fit Orthogonal( Univariate Variances ),
	Fit Mean,
	Fit Where( :Species == "setosa", Density Ellipse( 0.9 ) ),
	Fit Where( :Species == "versicolor", Density Ellipse( 0.9 ) ),
	Fit Where( :Species == "virginica", Density Ellipse( 0.9 ) )
);
fit3 = Bivariate(
	Y( :Petal Width ),
	X( :Sepal length ),
	Fit Orthogonal( Fit X to Y ),
	Fit Mean,
	Fit Where( :Species == "setosa", Density Ellipse( 0.95 ) ),
	Fit Where( :Species == "versicolor", Density Ellipse( 0.95 ) ),
	Fit Where( :Species == "virginica", Density Ellipse( 0.95 ) )
);
fit4 = Bivariate( Y( :Petal Width ), X( :Sepal length ), Fit Orthogonal( 0.4 ) );
```

**Code Explanation**:

1. Open data table;
2. Create bivariate analysis.
3. Set Y variable.
4. Set X variable.
5. Add nonparametric density plot.
6. Fit orthogonal regression.
7. Fit mean with confidence curves.
8. Generate report.
9. Hide data points.
10. Count missing values in Cluster column.
11. Create second bivariate analysis.
12. Set Y variable.
13. Set X variable.
14. Fit orthogonal regression with univariate variances.
15. Fit mean.
16. Add density ellipses for setosa species.
17. Add density ellipses for versicolor species.
18. Add density ellipses for virginica species.
19. Create third bivariate analysis.
20. Set Y variable.
21. Set X variable.
22. Fit orthogonal regression with X to Y.
23. Fit mean.
24. Add density ellipses for setosa species.
25. Add density ellipses for versicolor species.
26. Add density ellipses for virginica species.
27. Create fourth bivariate analysis.
28. Set Y variable.
29. Set X variable.
30. Fit orthogonal regression with 0.4 variance.



### Example 203
> **Summary**: Peforms a bivariate analysis with orthogonal regression fits for different age groups, using the weight variable as X and height as Y, while coloring the lines according to specific lambda values.

<!-- Keywords: #BivariateAnalysis, #OrthogonalRegression, #AgeGrouping, #WeightedFit, #JMPScripting -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
:age[1] = .;
fit5 = Bivariate(
	Y( :height ),
	X( :weight ),
	Weight( :age ),
	Fit Orthogonal( 0.034134995712417, {Line Color( "Red" )} ),
	Fit Orthogonal( 1, {Line Color( "Green" )} ),
	Fit Orthogonal( 0, {Line Color( "Blue" )} ),
	Fit Orthogonal( 0.5, {Line Color( "Orange" )} )
);
```

**Code Explanation**:

1. Open data_table data
2. Set first age value to missing.
3. Create Bivariate analysis.
4. Set height as Y variable.
5. Set weight as X variable.
6. Use age for weighting.
7. Fit orthogonal regression with lambda 0.034134995712417.
8. Color orthogonal line red.
9. Fit orthogonal regression with lambda 1.
10. Color orthogonal line green.



### Example 204
> **Summary**: Peforms a bivariate analysis with splines for ages 12-17, generates a report, and performs a paired t-test on the 'weight' variable against the 'height' variable in a data table.

<!-- Keywords: #JSL, #BivariateAnalysis, #Splines, #PairedTTest, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bv = Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Where( :age == 12, Fit Spline( 10 ) ),
	Fit Where( :age == 13, Fit Spline( 10 ) ),
	Fit Where( :age == 14, Fit Spline( 10 ) ),
	Fit Where( :age == 15, Fit Spline( 10 ) ),
	Fit Where( :age == 16, Fit Spline( 10 ) ),
	Fit Where( :age == 17, Fit Spline( 10 ) )
);
rep = Report( bv );
bv << Paired t test;
bv << (curve[7] << LineColor( 57 ));
bv << (curve[1] << Line Style( 0 ));
bv << (curve[1] << LineWidth( 2 ));
bv << (curve[2] << LineColor( 0 ));
bv << (curve[6] << Line of Fit( 0 ));
bv << (curve[6] << Remove Fit);
bv << (curve[5] << Remove Fit);
bv << (curve[4] << Remove Fit);
bv << (curve[3] << Remove Fit);
bv << (curve[2] << Remove Fit);
bv << (curve[1] << Remove Fit);
bv << fit line;
bv << (curve[1] << Line Style( Dot ));
rep[framebox( 1 )] << add graphics script(
	Text Size( 25 );
	Text Color( "red" );
	Text( Center Justified, {57.5, 140}, "Graph Title" );
);
bv << Group By( sex );
bv << Fit Line;
fit2 = Bivariate( Y( :weight ), X( :height ), Histogram Borders( 1 ) );
r = (fit2 << report);
xax = r[axisbox( 2 )];
xax << {Add Ref Line( 61, Solid, Black )};
yax = r[axisbox( 1 )];
yax << {scale( log ), Format( "Best" ), Min( 50 ), Max( 200 ), inc( 1 )};
xax << {scale( log ), Format( "Best" ), Min( 50 ), Max( 72 ), inc( 1 )};
r[framebox( 3 )] << Background Color( "Black" );
fit2 << Histogram Borders( 0 );
dt << select rows( 1 :: 15 ) << exclude;
dt << clear select;
fit3 = Bivariate( Y( :weight ), X( :height ), Histogram Borders( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create bivariate analysis.
3. Fit splines for ages 12-17.
4. Generate report.
5. Perform paired t-test.
6. Change curve colors and styles.
7. Remove unnecessary fits.
8. Add fit line.
9. Customize graph title.
10. Group by sex and fit line.



### Example 205
> **Summary**: Fits a bivariate model to predict height based on weight, and captures log output for further analysis.

<!-- Keywords: #JSLScripting, #BivariateModel, #LogCapture, #BootstrapSampling, #PredictiveAnalytics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Suppress Formula Eval;
bv = Bivariate( Y( :height ), X( :weight ), Fit Line( 1 ) );
Random Reset( 12475 );
lc = Log Capture( dt2 = Report( bv )["Parameter Estimates"][Number Col Box( 1 )] << Bootstrap( 5 ) );
ex = "";
samp = dt2[2] << getasmatrix;
b samp = [0 48.3216916354557 0.135507698709946,
1 48.4496107769986 0.132910582544434,
2 46.8058186738836 0.154533152909337,
3 47.0780135026011 0.147693626091112,
4 44.7117091345982 0.164806087348299,
5 50.025009221554 0.120254569945258];
```

**Code Explanation**:

1. Open data table.
2. Suppress formula evaluation.
3. Create bivariate plot.
4. Set random seed.
5. Capture log output.
6. Extract bootstrap report.
7. Convert report to matrix.
8. Store expected bootstrap samples.
9. Compare with actual samples.
10. Evaluate results.



### Example 206
> **Summary**: Creates a bivariate plot and report, saving it as EPS, SVG, or EMF formats depending on the host platform.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #ReportGeneration, #-SpecificOutput, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
biv = Bivariate( Y( :weight ), X( :height ) );
rbiv = biv << report;
rbiv << Save Picture( "$TEMP/report.eps", eps );
If( Host is( Windows ),
	rbiv << Save Picture( "$TEMP/report.svg", svg )
);
If( Host is( Windows ),
	rbiv << Save Picture( "$TEMP/report.emf", emf )
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Generate report object.
4. Save report as EPS.
5. Check if host is Windows.
6. Save report as SVG.
7. Check if host is Windows.
8. Save report as EMF.



### Example 207
> **Summary**: Creates and saves a bivariate plot from a data table, utilizing the Bivariate platform to visualize the relationship between 'weight' and 'height'.

<!-- Keywords: #BivariatePlot, #DataVisualization, #JMPScriptingLanguage, #ReportGeneration, #Specific -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = Bivariate( Y( :weight ), X( :height ) );
rbiv = biv << report;
rbiv << Save Picture( "$TEMP/report.eps", eps );
If( Host is( Windows ),
	rbiv << Save Picture( "$TEMP/report.svg", svg )
);
If( Host is( Windows ),
	rbiv << Save Picture( "$TEMP/report.emf", emf )
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Retrieve report object.
4. Save report as EPS.
5. Check if host is Windows.
6. Save report as SVG (Windows).
7. Check if host is Windows.
8. Save report as EMF (Windows).



### Example 208
> **Summary**: Creates a bivariate plot with a fitted linear regression line, customized with specific colors and reference lines.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LinearRegression, #Customization, #ReferenceLines -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 71, 86} )} ),
	SendToReport(
		Dispatch( {}, "2", ScaleBox,
			{Add Ref Line( 120, Solid, {128, 64, 0} ), Add Ref Line( 140, Dotted, {0, 128, 128} ),
			Add Ref Line( 100, Dashed, {0, 64, 128} ), Add Ref Line( 80, DashDot, {255, 128, 0} ),
			Add Ref Line( 65, DashDotDot, {255, 0, 0} )}
		)
	)
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Fit linear regression line.
6. Customize line color to red.
7. Add reference line at y=120.
8. Add solid reference line at y=140.
9. Add dashed reference line at y=100.
10. Add dash-dot reference line at y=80.
11. Add dash-dot-dot reference line at y=65.



### Example 209
> **Summary**: Creates a bivariate plot with a fitted line, customized with specific colors and reference lines.

<!-- Keywords: #BivariatePlot, #Customization, #ReferenceLines, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 71, 86} )} ),
	SendToReport(
		Dispatch( {}, "2", ScaleBox,
			{Add Ref Line( 120, Solid, {128, 64, 0} ), Add Ref Line( 140, Dotted, {0, 128, 128} ),
			Add Ref Line( 100, Dashed, {0, 64, 128} ), Add Ref Line( 80, DashDot, {255, 128, 0} ),
			Add Ref Line( 65, DashDotDot, {255, 0, 0} )}
		)
	)
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data_table data
2. Create Bivariate plot.
3. Set weight as Y variable.
4. Set height as X variable.
5. Fit linear regression line.
6. Change line color to pink.
7. Send report to dispatch.
8. Add reference line at 120.
9. Set line style to solid.
10. Set line color to orange.



### Example 210
> **Summary**: Creates a bivariate analysis object to visualize the relationship between categorical variables TV, Film, Art, and Restaurant in the Employee Taste data table.

<!-- Keywords: #JSLScriptingLanguage, #BivariateAnalysis, #CategoricalVariables, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Bivariate( Y( :height ), X( :weight ) );
```

**Code Explanation**:

1. Open data table.
2. Create bivariate analysis object.



### Example 211
> **Summary**: Opens a journal file, closes the window, and creates a bivariate plot using the 'Bivariate' platform to visualize the relationship between height and weight.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataVisualization, #Specific, #TechnicalWriting -->

**Code**:
```jsl
j = Open( "$TEMP/journal freeze problem.jrn" );
j << Close Window;
dt = Open("data_table.jmp");
obj = Bivariate( Y( :height ), X( :weight ) );
```

**Code Explanation**:

1. Open journal file.
2. Close journal window.
3. Open data table.
4. Create bivariate plot.



### Example 212
> **Summary**: Creates a bivariate plot with a custom image, configuring frame size and image bounds.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #CustomImage, #FrameSize, #ImageBounds -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			{Frame Size( 500, 400 ), Add Image(
				Set Blob(
					Char To Blob(
						"4113eJxz93SzsEzkZeBm2MwAAvvBeD+Y2g9mHThwoKGh4T9Q4D/DfzD1H8wCAsWfLIwMDOwMOiCd
IDMYWOQ+eHC+2rMlao7pfLntjJIvJkpVLnlTsU7RZ+qjsM3BLAzWAJr5KQA=",
						"base64compressed"
					),
					"png"
				),
				Bounds( Left( 54.095 ), Right( 54.68 ), Top( 151.5 ), Bottom( 148.2 ) )
			)}
		)
	)
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Configure frame size.
4. Add image to plot.
5. Set image blob data.
6. Decode base64 compressed string.
7. Specify image format as PNG.
8. Define image bounds.
9. Retrieve report object.
10. Assign report to variable.



### Example 213
> **Summary**: Creates a bivariate plot with automatic recalculation, fitting a linear regression line, and displaying a local data filter for the 'age' column.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #LocalDataFilter, #AutomaticRecalculation, #LinearRegression -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = Bivariate(
	Y( :weight ),
	X( :height ),
	Automatic Recalc( 1 ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	Local Data Filter( Add Filter( columns( :age ), Display( :age, Size( 160, 90 ), List Display ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Set Y variable to "weight".
4. Set X variable to "height".
5. Enable automatic recalculation.
6. Fit linear regression line.
7. Set line color to red.
8. Add local data filter.
9. Filter by "age" column.
10. Display age filter.



### Example 214
> **Summary**: Creates and customizes reports for multiple statistical analyses, including bivariate plots, one-way analysis, and logistic regression.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #OnewayAnalysis, #LogisticRegression, #ReportCustomization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} ) ) );
rpt = biv << report;
ow = Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
rpt = ow << report;
lg = Logistic( Y( :age ), X( :weight ) );
rpt = lg << report;
biv2 = Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "weight", TextEditBox, {Set Text( "four score and seven years ago" )} ),
		Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} )
	)
);
rpt = biv2 << report;
Preferences( Axis Title Above( 0 ) );
biv3 = Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "weight", TextEditBox,
			{Set Text( "Some years ago - never mind how long precisely - having little or no money in my purse" )}
		),
		Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} )
	)
);
rpt = biv3 << report;
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot for weight vs height.
3. Set marker size to 3.
4. Generate report for Bivariate plot.
5. Create Oneway plot for height vs sex.
6. Display means and mean diamonds.
7. Generate report for Oneway plot.
8. Perform Logistic regression on age vs weight.
9. Generate report for Logistic regression.
10. Create another Bivariate plot for weight vs height.
11. Set Y-axis title text.
12. Set marker size to 3.
13. Generate report for second Bivariate plot.
14. Change axis title position to above.
15. Create third Bivariate plot for weight vs height.
16. Set Y-axis title text.
17. Set marker size to 3.
18. Generate report for third Bivariate plot.



## Bivariate using New Window
### Example 1
> **Summary**: Opens a data table, creates a new window titled 'The Quartet', and arranges four bivariate graphs with linear fit lines for x1 vs y1, x2 vs y2, x3 vs y3, and x4 vs y4.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #BivariateGraphs, #LinearFitLines, #DataTable -->

**Code**:
```jsl
// The Quartet
// Open data table
dt = Open("data_table.jmp");
// The Quartet
New Window( "The Quartet",
	H List Box(
		V List Box(
			Bivariate(
				x( :x1 ),
				y( :y1 ),
				Show Points( 0 ),
				Fit Line
			),
			Bivariate(
				x( :x2 ),
				y( :y2 ),
				Show Points( 0 ),
				Fit Line
			)
		),
		V List Box(
			Bivariate(
				x( :x3 ),
				y( :y3 ),
				Show Points( 0 ),
				Fit Line
			),
			Bivariate(
				x( :x4 ),
				y( :y4 ),
				Show Points( 0 ),
				Fit Line
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create a new window titled "The Quartet".
3. Arrange layout in horizontal list box.
4. Create vertical list box for first pair.
5. Plot bivariate graph for x1 vs y1.
6. Hide data points.
7. Add linear fit line.
8. Plot bivariate graph for x2 vs y2.
9. Hide data points.
10. Add linear fit line.



### Example 2
> **Summary**: Visualizes the relationship between heart rate and various factors, including drink type, testers, and time, using a combination of one-way and bivariate analyses in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #One-WayAnalysis, #BivariateAnalysis, #HeartRate -->

**Code**:
```jsl
// Fit Y by X Group
// Open data table
dt = Open("data_table.jmp");
// Fit Y by X Group
New Window(
	"Fit Y by X of Heart Rate",
	H List Box(
		Oneway(
			Y( :Heart Rate ),
			X( :Drink ),
			Box Plots( 0 ),
			Mean Diamonds( 0 ),
			SendToReport(
				Dispatch( {}, "",
					NomAxisBox,
					Rotated Tick Labels(
						1
					)
				)
			)
		),
		Oneway(
			Y( :Heart Rate ),
			X( :Testers ),
			Box Plots( 0 ),
			Mean Diamonds( 0 )
		),
		Oneway(
			Y( :Heart Rate ),
			X( :"Time (Raw)"n ),
			Box Plots( 0 ),
			Mean Diamonds( 0 )
		),
		Bivariate(
			Y( :Heart Rate ),
			X( :"Time (Numeric)"n )
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Add horizontal list box.
4. Fit heart rate by drink.
5. Disable box plots.
6. Disable mean diamonds.
7. Rotate tick labels.
8. Fit heart rate by testers.
9. Disable box plots.
10. Disable mean diamonds.



### Example 3
> **Summary**: Generates a new window with multiple bivariate analyses for household income, utilizing nonparametric density plots and contour lines to visualize relationships between income and various demographic factors.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #NonparametricDensityPlot, #ContourLines, #HouseholdIncome -->

**Code**:
```jsl
// Bivariate: Household Income
// Open data table
dt = Open("data_table.jmp");
// Bivariate: Household Income
New Window(
	"US Demographics - Fit Y by X of Household Income 2",
	H List Box(
		Bivariate(
			Y( :Household Income ),
			X( :IQ ),
			Nonpar Density(
				{Contour Fill( 1 ),
				Contour Lines( 0 )}
			)
		),
		Oneway(
			Y( :Household Income ),
			X( :Region ),
			Box Plots( 1 )
		),
		Bivariate(
			Y( :Household Income ),
			X( :Eighth Grade Math ),
			Nonpar Density(
				{Contour Fill( 1 ),
				Contour Lines( 0 )}
			)
		),
		Bivariate(
			Y( :Household Income ),
			X( :High School Graduates ),
			Nonpar Density(
				{Contour Fill( 1 ),
				Contour Lines( 0 )}
			)
		),
		Bivariate(
			Y( :Household Income ),
			X( :Vegetable Consumption ),
			Nonpar Density(
				{Contour Fill( 1 ),
				Contour Lines( 0 )}
			)
		),
		Bivariate(
			Y( :Household Income ),
			X( :Smokers ),
			Nonpar Density(
				{Contour Fill( 1 ),
				Contour Lines( 0 )}
			)
		),
		Bivariate(
			Y( :Household Income ),
			X( :Physical Activity ),
			Nonpar Density(
				{Contour Fill( 1 ),
				Contour Lines( 0 )}
			)
		),
		Bivariate(
			Y( :Household Income ),
			X( :Obese ),
			Nonpar Density(
				{Contour Fill( 1 ),
				Contour Lines( 0 )}
			)
		),
		Bivariate(
			Y( :Household Income ),
			X( :College Degrees ),
			Nonpar Density(
				{Contour Fill( 1 ),
				Contour Lines( 0 )}
			)
		),
		Bivariate(
			Y( :Household Income ),
			X( :Alcohol Consumption ),
			Nonpar Density(
				{Contour Fill( 1 ),
				Contour Lines( 0 )}
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Add horizontal list box.
4. Perform bivariate analysis for IQ.
5. Perform oneway analysis for Region.
6. Perform bivariate analysis for Eighth Grade Math.
7. Perform bivariate analysis for High School Graduates.
8. Perform bivariate analysis for Vegetable Consumption.
9. Perform bivariate analysis for Smokers.
10. Perform bivariate analysis for Physical Activity.
11. Perform bivariate analysis for Obese.
12. Perform bivariate analysis for College Degrees.
13. Perform bivariate analysis for Alcohol Consumption.



### Example 4
> **Summary**: Process of outlier screening by filtering a data table based on population and geographic location, then visualizing the results in a new window.

<!-- Keywords: #JSLScriptingLanguage, #DataFiltering, #BivariateAnalysis, #GeographicVisualization, #OutlierScreening -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "invisible" );
New Window( "Outlier Screening",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter( Local, Add Filter( columns( :pop ), Where( :POP > 1000 ) ) ),
			dt << Bivariate(
				Y( :Latitude ),
				X( :Longitude ),
				Local Data Filter( Add Filter( columns( :State, :Region ), Where( :State == "NY" ), Where( :Region == "S" ) ) )
			)
		)
	)
);
Data Table("data_table") << Select Where( :State == "NY" );
Data Table("data_table") << Select Where( :State == "NY" ) << Hide and Exclude;
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Add data filter context box.
4. Add horizontal list box.
5. Apply local filter on population.
6. Perform bivariate analysis.
7. Set Y axis to Latitude.
8. Set X axis to Longitude.
9. Add local data filter on State and Region.
10. Select rows where State is NY.
11. Hide and exclude selected rows.



### Example 5
> **Summary**: Creates a new window with a data filter context box, applying local filters to population and geographic coordinates, and generating a bivariate plot for analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataFilterContextBox, #BivariatePlot, #LocalDataFilters, #GeographicAnalysis -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "invisible" );
New Window( "Outlier Screening",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter( Local, Add Filter( columns( :pop ), Where( :POP > 1000 ) ) ),
			dt << Bivariate(
				Y( :Latitude ),
				X( :Longitude ),
				Local Data Filter( Add Filter( columns( :State, :Region ), Where( :State == "NY" ), Where( :Region == "S" ) ) )
			)
		)
	)
);
Data Table("data_table") << Select Where( :State == "NY" );
Data Table("data_table") << Select Where( :State == "NY" ) << Hide and Exclude;
Data Table("data_table") << Clear Select << Select Rows( [1, 36] ) << Hide and Exclude;
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Add data filter context box.
4. Add horizontal list box.
5. Apply local data filter on population.
6. Create bivariate plot.
7. Set Y variable as Latitude.
8. Set X variable as Longitude.
9. Apply local data filter on State and Region.
10. Select rows where State is NY.
11. Hide and exclude selected rows.
12. Clear selection.
13. Select specific rows.
14. Hide and exclude selected rows.



### Example 6
> **Summary**: Creates a new window with a data filter context box, filtering data by age 13, and plotting weight vs height with a fit line.

<!-- Keywords: #JSLScriptingLanguage, #DataFilterContextBox, #BivariateAnalysis, #FitLine, #NewWindow -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
New Window( "Example",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter( local, Add Filter( columns( :age ), Where( :age == 13 ) ) ),
			V Sheet Box(
				<<Hold( dt << Bivariate( Y( :weight ), X( :height ), FitLine() ) ),
				Sheet Part( "", Excerpt Box( 1, {Picture Box( 1 )} ) )
			)
		)
	)
);
```

**Code Explanation**:

1. Set default names.
2. Open data table;
3. Create new window.
4. Add data filter context box.
5. Add horizontal list box.
6. Apply age filter for 13.
7. Add vertical sheet box.
8. Hold bivariate analysis.
9. Plot weight vs height.
10. Add fit line.



### Example 7
> **Summary**: Visualizes and analyzes bivariate relationships between 'weight' and 'height' variables in a data table, utilizing Graph Builder and Bivariate elements.

<!-- Keywords: #JMPScriptingLanguage, #GraphBuilder, #BivariateAnalysis, #DataVisualization, #Correlation -->

**Code**:
```jsl
Open("data_table.jmp");
New Window( "Pearson's r",
	Graph Builder(
		Size( 528, 454 ),
		Show Control Panel( 0 ),
		Variables( X( :weight ), Y( :height ) ),
		Elements( Points( X, Y, Legend( 3 ) ), Ellipse( X, Y, Legend( 5 ), Correlation( 1 ) ) )
	),
	Bivariate(
		Y( :weight ),
		X( :height ),
		Density Ellipse( 0.9, {Line Color( {61, 174, 70} )} ),
		SendToReport( Dispatch( {}, "Bivariate Normal Ellipse P=0.900", OutlineBox, {Close( 0 )} ) )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "Pearson's r".
3. Initialize Graph Builder.
4. Set window size.
5. Hide control panel.
6. Assign variables for X and Y.
7. Add points element to graph.
8. Add ellipse element with correlation.
9. Initiate Bivariate analysis.
10. Set Y and X variables.
11. Add density ellipse.
12. Customize ellipse line color.
13. Close normal ellipse outline.



### Example 8
> **Summary**: Creates a Graph Builder report with regression correlation analysis, utilizing variables height and weight, and generates detailed coordinates and scaling for the first three dimensions.

<!-- Keywords: #GraphBuilder, #RegressionCorrelation, #JSLScriptingLanguage, #DataVisualization, #ReportGeneration -->

**Code**:
```jsl
my_report = New Window( "Graph Builder Ellipse - Regression Correlation" );
dt = Open("data_table.jmp");
gb = Graph Builder(
	Size( 534, 454 ),
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 2 ) ), Ellipse( X, Y, Legend( 5 ), Correlation( 1 ) ) )
);
biv = Bivariate(
	Y( :weight ),
	X( :height ),
	Density Ellipse( 0.9, {Line Color( {212, 73, 88} )} ),
	SendToReport( Dispatch( {}, "Bivariate Normal Ellipse P=0.900", OutlineBox, {Close( 0 )} ) )
);
```

**Code Explanation**:

1. Create new window.
2. Open data table.
3. Initialize Graph Builder.
4. Set window size.
5. Hide control panel.
6. Define X and Y variables.
7. Add points element.
8. Add ellipse element with correlation.
9. Perform Bivariate analysis.
10. Add density ellipse.
11. Customize ellipse line color.
12. Close Bivariate report outline box.



### Example 9
> **Summary**: Creates a bivariate plot to visualize the relationship between height and weight, with histogram borders enabled.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #HistogramBorders, #DataVisualization, #InteractiveAnalysis -->

**Code**:
```jsl
Open( "$SAMPLE_DATA\data_table.jmp", invisible );
New Window( "Fit Y by X of height by weight", Bivariate( Y( :height ), X( :weight ), Histogram Borders( 1 ) ) ) <<
Move Window( 862, 208 ) << Set Window Icon( "FitYByX" );
```

**Code Explanation**:

1. Open data table;
2. Create new window.
3. Generate Bivariate plot.
4. Set Y variable to height.
5. Set X variable to weight.
6. Enable histogram borders.
7. Move window to position.
8. Set window icon to "FitYByX".



### Example 10
> **Summary**: Creates multiple reports in JMP, including a one-way analysis with local data filtering and ordering by goodness of fit, as well as a bivariate analysis.

<!-- Keywords: #JMPScriptingLanguage, #OneWayAnalysis, #BivariateAnalysis, #LocalDataFiltering, #GoodnessOfFit -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "multiple reports",
	H List Box(
		V List Box(
			obj = dt << Oneway(
				Y( :height ),
				X( :sex ),
				By( :age ),
				Group Options(
					Local Data Filter( Add Filter( columns( :height ), Where( :height >= 56.429 & :height <= 59.369 ) ) ),
					Order By( "Goodness of Fit", Descending( 1 ) ),
					Hide Empty s( 1 )
				)
			)
		),
		V List Box( obj = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) ) )
	)
);
obj[1] << Save Script for All Objects;
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Add horizontal list box.
4. Add vertical list box.
5. Perform one-way analysis.
6. Set response variable.
7. Set factor variable.
8. Group by age.
9. Add local data filter.
10. Set order by goodness of fit.
11. Hide empty platforms.
12. Add second vertical list box.
13. Perform bivariate analysis.
14. Set response variable.
15. Set factor variable.
16. Group by sex.
17. Save script for all objects.



### Example 11
> **Summary**: Analyze and visualize multiple reports, including OneWay and Bivariate analyses on height and weight data by sex and age, with interactive features like local data filters and by groups.

<!-- Keywords: #JMPScriptingLanguage, #OneWayAnalysis, #BivariateAnalysis, #DataVisualization, #InteractiveFeatures -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "multiple reports",
	H List Box(
		V List Box(
			obj = dt << Oneway(
				Y( :height ),
				X( :sex ),
				By( :age ),
				Group Options(
					Local Data Filter( Add Filter( columns( :height ), Where( :height >= 56.429 & :height <= 59.369 ) ) ),
					Order By( "Goodness of Fit", Descending( 1 ) ),
					Hide Empty s( 1 )
				)
			)
		),
		V List Box( obj = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) ) )
	)
);
obj[1] << Save Script for All Objects;
dt = Open("data_table.jmp");
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :age ) );
biv[1] << Save Script for All Objects;
biv[1] << Save By Group Script to Script Window;
Data Table("data_table") << Bivariate( Y( :weight ), X( :height ), By( :age ) );
Bivariate( Y( :weight ), X( :height ), By( :age ) );
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "multiple reports".
3. Create horizontal list box.
4. Create vertical list box inside horizontal list box.
5. Run OneWay analysis on height by sex, grouped by age.
6. Add local data filter for height range.
7. Order platforms by goodness of fit descending.
8. Hide empty platforms.
9. Create another vertical list box inside horizontal list box.
10. Run Bivariate analysis on weight vs height by sex.
11. Save script for all objects in OneWay analysis.
12. Reopen data_table dataset
13. Run Bivariate analysis on weight vs height by age.
14. Save script for all objects in Bivariate analysis.
15. Save by group script to script window.
16. Run Bivariate analysis on weight vs height by age in data_table table.
17. Run Bivariate analysis on weight vs height by age again.



### Example 12
> **Summary**: Analyze and visualize multiple reports, including one-way analysis on height by sex, grouped by age, and bivariate analysis on weight vs. height, grouped by sex or age.

<!-- Keywords: #JMPScriptingLanguage, #One-WayAnalysis, #BivariateAnalysis, #DataVisualization, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "multiple reports",
	H List Box(
		V List Box(
			obj = dt << Oneway(
				Y( :height ),
				X( :sex ),
				By( :age ),
				Group Options(
					Local Data Filter( Add Filter( columns( :height ), Where( :height >= 56.429 & :height <= 59.369 ) ) ),
					Order By( "Goodness of Fit", Descending( 1 ) ),
					Hide Empty s( 1 )
				)
			)
		),
		V List Box( obj = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) ) )
	)
);
obj[1] << Save Script for All Objects;
dt = Open("data_table.jmp");
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :age ) );
biv[1] << Save Script for All Objects;
biv[1] << Save By Group Script to Script Window;
Data Table("data_table") << Bivariate( Y( :weight ), X( :height ), By( :age ) );
```

**Code Explanation**:

1. Open data table.
2. Create new window titled "multiple reports".
3. Add horizontal list box.
4. Add vertical list box inside horizontal list box.
5. Perform one-way analysis on height by sex, grouped by age.
6. Apply local data filter on height.
7. Order platforms by goodness of fit descending.
8. Hide empty platforms.
9. Add another vertical list box inside horizontal list box.
10. Perform bivariate analysis on weight vs. height, grouped by sex.
11. Save script for all objects in first analysis.
12. Reopen data table.
13. Perform bivariate analysis on weight vs. height, grouped by age.
14. Save script for all objects in second analysis.
15. Save by group script to script window.
16. Perform bivariate analysis on weight vs. height, grouped by age.



### Example 13
> **Summary**: Creates a new window with a bivariate plot that displays the relationship between weight and height, grouped by sex.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #GroupedAnalysis, #DataVisualization, #InteractiveDashboard -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "where", H List Box( dt << Bivariate( Y( :weight ), X( :height ), Fit Line, By( :sex ) ) ) );
```

**Code Explanation**:

1. Open data table.
2. Create new window titled "where".
3. Add horizontal list box.
4. Display bivariate plot.
5. Set weight as Y variable.
6. Set height as X variable.
7. Fit linear line.
8. Group by sex.



### Example 14
> **Summary**: Creates a new window with two Bivariate plots, setting the X-axis to log scale and closing fit outlines for linear and polynomial fits.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #LogScale, #FitOutlines, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
w = New Window( "biv",
	H List Box(
		b1 = Bivariate( Y( :amplitude ), X( :x ), Fit Line(), Fit Polynomial( 2 ) ),
		b2 = Bivariate( Y( :amplitude ), X( :x ), Fit Line(), Fit Polynomial( 2 ) )
	)
);
w[ScaleBox( 1 )] << scale( "log" );
Report( b1 )[Outline Box( "Linear Fit" )] << Close();
Report( b1 )[Outline Box( "Polynomial Fit Degree=2" )] << Close();
Report( b2 )[Outline Box( "Linear Fit" )] << Close();
Report( b2 )[Outline Box( "Polynomial Fit Degree=2" )] << Close();
```

**Code Explanation**:

1. Open data table;
2. Create new window named "biv".
3. Add horizontal list box.
4. Create first Bivariate plot.
5. Create second Bivariate plot.
6. Set first plot's X-axis to log scale.
7. Close Linear Fit outline in first plot.
8. Close Polynomial Fit outline in first plot.
9. Close Linear Fit outline in second plot.
10. Close Polynomial Fit outline in second plot.



### Example 15
> **Summary**: Creates a new window with two Bivariate plots, setting the X-axis scale to log and closing specific fit outlines.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LogScale, #FitOutlines, #WindowCreation -->

**Code**:
```jsl
Open("data_table.jmp");
w = New Window( "biv",
	H List Box(
		b1 = Bivariate( Y( :amplitude ), X( :x ), Fit Line(), Fit Polynomial( 2 ) ),
		b2 = Bivariate( Y( :amplitude ), X( :x ), Fit Line(), Fit Polynomial( 2 ) )
	)
);
w[ScaleBox( 1 )] << scale( "log" );
Report( b1 )[Outline Box( "Linear Fit" )] << Close();
Report( b1 )[Outline Box( "Polynomial Fit Degree=2" )] << Close();
Report( b2 )[Outline Box( "Linear Fit" )] << Close();
Report( b2 )[Outline Box( "Polynomial Fit Degree=2" )] << Close();
w;
```

**Code Explanation**:

1. Open data table;
2. Create new window named "biv".
3. Add two Bivariate plots to window.
4. Set X-axis scale to log for first plot.
5. Close Linear Fit outline in first plot.
6. Close Polynomial Fit outline in first plot.
7. Close Linear Fit outline in second plot.
8. Close Polynomial Fit outline in second plot.
9. Display the window.



### Example 16
> **Summary**: Creates a new window with two Bivariate plots, fitting linear and quadratic models to amplitude data against x-axis variables, and setting logarithmic scaling for one plot.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LogarithmicScaling, #LinearModel, #QuadraticPolynomial -->

**Code**:
```jsl
Open("data_table.jmp");
w = New Window( "biv",
	H List Box(
		b1 = Bivariate( Y( :amplitude ), X( :x ), Fit Line(), Fit Polynomial( 2 ) ),
		b2 = Bivariate( Y( :amplitude ), X( :x ), Fit Line(), Fit Polynomial( 2 ) )
	)
);
w[ScaleBox( 1 )] << scale( "log" );
```

**Code Explanation**:

1. Open data table.
2. Create new window titled "biv".
3. Add horizontal list box.
4. Insert first Bivariate plot.
5. Set Y variable to "amplitude".
6. Set X variable to "x".
7. Fit linear model.
8. Fit quadratic polynomial.
9. Insert second Bivariate plot.
10. Set logarithmic scale for first plot.



### Example 17
> **Summary**: Creates a new window with a local data filter, filtering by age and sex, and launching a bivariate platform to plot weight vs. height by sex.

<!-- Keywords: #JSLScriptingLanguage, #DataFiltering, #Bivariate, #InteractiveVisualization, #JMP -->

**Code**:
```jsl
dt5 = Open("data_table.jmp");
report7 = New Window( "Shared Local Filter",
	Data Filter Context Box(
		H List Box(
			Current Data Table() << Data Filter(
				Local,
				Add Filter(
					columns( :age, :sex ),
					Where( :age == 12 ),
					Where( :sex == "F" ),
					Display( :age, Size( 160, 90 ), List Display )
				)
			),
			( Current Data Table(), bivariate( X( :weight ), Y( :height ), By( :sex ), ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create new window "Shared Local Filter".
3. Initialize Data Filter Context Box.
4. Create horizontal list box.
5. Apply local data filter.
6. Set filter conditions: age == 12.
7. Set filter condition: sex == "F".
8. Display age filter list.
9. Launch Bivariate platform.
10. Plot weight vs. height by sex.



### Example 18
> **Summary**: Data filtering and visualization by creating a new window with an outline box, horizontal list box, and bivariate plot to analyze Cleaned Line Width vs Sequence for 'Top' Site and filtered Raw Line Width.

<!-- Keywords: #JMPScriptingLanguage, #DataFiltering, #BivariatePlot, #Visualization, #InteractiveAnalysis -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
win2 = New Window( "Test",
	Outline Box( "Data Filter Context Box",
		Data Filter Context Box(
			H List Box(
				filter1 = dt2 << Data Filter(
					Local,
					Add Filter(
						columns( :Site, :Raw Line Width ),
						Where( :Site == "Top" ),
						Where( :Raw Line Width >= 0.746546 & :Raw Line Width <= 2.6198 )
					)
				),
				Bivariate( Y( :Cleaned Line Width ), X( :Sequence ), Automatic Recalc( 1 ), Where( :Site == "Top" ) )
			)
		)
	)
);
text2 = win2[Box( 1 )][Text Box( 1 )] << Get Text;
```

**Code Explanation**:

1. Open data table;
2. Create new window named "Test".
3. Add outline box titled "Data Filter Context Box".
4. Insert data filter context box.
5. Create horizontal list box.
6. Add local data filter for Site and Raw Line Width.
7. Filter Site for "Top".
8. Filter Raw Line Width between 0.746546 and 2.6198.
9. Add bivariate plot for Cleaned Line Width vs Sequence.
10. Set automatic recalculation to 1.
11. Filter Site for "Top" in bivariate plot.
12. Retrieve text from first text box in first box.



### Example 19
> **Summary**: Creates a new window with a vertical sheet box, holding bivariate analysis and tree map, as well as horizontal sheet boxes for supplementary information.

<!-- Keywords: #JMPScriptingLanguage, #NewWindow, #SheetBox, #BivariateAnalysis, #TreeMap -->

**Code**:
```jsl
Open("data_table.jmp");
New Window( "Example 1",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), FitLine() ) ),
		<<Hold( Tree Map( Categories( :age ) ) ),
		H Sheet Box(
			<<Size( 0.3 ),
			sp1 = Sheet Part( "", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			sp2 = Sheet Part( "", Excerpt Box( 2, {Picture Box( 1 )} ) )
		), 
	)
);
sp1 << Set Window Size( 401, 300 );
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "Example 1".
3. Add vertical sheet box.
4. Hold bivariate analysis.
5. Hold tree map.
6. Add horizontal sheet box.
7. Set size of horizontal box.
8. Create first sheet part.
9. Create second sheet part.
10. Set window size for first sheet part.



### Example 20
> **Summary**: Creates a new window with a vertical sheet box, containing a bivariate plot for weight vs height and a tree map for age categories, as well as two horizontal sheet parts with picture boxes.

<!-- Keywords: #JMPScriptingLanguage, #NewWindow, #BivariatePlot, #TreeMap, #PictureBox -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "Example 1",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), FitLine() ) ),
		<<Hold( Tree Map( Categories( :age ) ) ),
		H Sheet Box(
			<<Size( 0.3 ),
			sp1 = Sheet Part( "", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			sp2 = Sheet Part( "", Excerpt Box( 2, {Picture Box( 1 )} ) )
		), 
	)
);
sp1 << Set Window Size( 401, 300 );
```

**Code Explanation**:

1. Open data table.
2. Create new window titled "Example 1".
3. Add vertical sheet box.
4. Hold bivariate plot for weight vs height.
5. Hold tree map for age categories.
6. Add horizontal sheet box.
7. Set horizontal size to 0.3.
8. Create first sheet part with picture box.
9. Create second sheet part with picture box.
10. Set first sheet part window size.



### Example 21
> **Summary**: Creates a new window with a bivariate plot, setting X-axis to height and Y-axis to weight, and retrieves platform container box.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #ContainerBox, #BorderBox, #NewWindow -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "Date/Data Titles", bb = Border Box( dt << Bivariate( X( :height ), Y( :weight ) ), ) );
pcb = bb[ContainerBox( 1 )];
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "Date/Data Titles".
3. Add border box to window.
4. Generate bivariate plot inside border box.
5. Set X-axis variable to height.
6. Set Y-axis variable to weight.
7. Retrieve platform container box.



### Example 22
> **Summary**: Creates a new window with multiple data filters and a bivariate plot, generating detailed coordinates and scaling for the first three dimensions.

<!-- Keywords: #JSLScriptingLanguage, #DataFilterContextBox, #BivariatePlot, #MultipleCorrespondenceAnalysis, #DimensionalityReduction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nw = New Window( "Test",
	dfcb = Data Filter Context Box(
		H List Box(
			dfsb2 = Data Filter Source Box(
				V List Box(
					dist1 = dt << Distribution(
						Nominal Distribution( Column( :Type ) ),
						SendToReport( Dispatch( {"Distributions", "Type"}, "Frequencies", OutlineBox, {Close( 1 )} ) )
					),
					dfsb1 = Data Filter Source Box(
						dist2 = dt << Distribution(
							Nominal Distribution( Column( :Rating ) ),
							SendToReport( Dispatch( {"Distributions", "Rating"}, "Frequencies", OutlineBox, {Close( 1 )} ) )
						)
					)
				)
			),
			biv = dt << Bivariate( Y( :Domestic $ ), X( :Worldwide $ ) )
		)
	)
);
w = Window( "Test" );
Wait( 0 );
newDt = w[framebox( 3 )] << Make Table of Graphs like this;
w << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Create new window named "Test".
3. Add Data Filter Context Box.
4. Create horizontal list box.
5. Add first Data Filter Source Box.
6. Create vertical list box inside first Data Filter Source Box.
7. Generate distribution for Type column.
8. Close Frequencies outline box for Type distribution.
9. Add second Data Filter Source Box.
10. Generate distribution for Rating column.
11. Close Frequencies outline box for Rating distribution.
12. Create Bivariate plot for Domestic $ vs Worldwide $.
13. Retrieve window named "Test".
14. Wait for 0 seconds.
15. Create table from graph in third frame box.
16. Close the "Test" window.



### Example 23
> **Summary**: Creates a validation window with stratification by age and grouping by sex, allocating 50% for training, 25% for validation, and 25% for testing.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #ValidationWindow, #Stratification, #Grouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = New Window( "validation",
	H List Box(
		dt << Make Validation Column(
			Stratification Columns( :Age ),
			Grouping Columns( :Sex ),
			Training Set( 0.50 ),
			Validation Set( 0.25 ),
			Test Set( 0.25 ),
			New Column Name( "Valid1" ),
			Random Seed( 1234 ), 
		),
		Graph Builder(
			Size( 533, 456 ),
			Show Control Panel( 0 ),
			Variables( X( :Weight ), Y( :Age ) ),
			Elements( Points( X, Y, Legend( 2 ) ), Smoother( X, Y, Legend( 3 ) ) )
		),
		Bivariate( Y( :Weight ), X( :Cholesterol ), Fit Line( {Line Color( {212, 73, 88} )} ) )
	)
);
n = Length( Window() );
```

**Code Explanation**:

1. Open data table.
2. Create new window named "validation".
3. Add horizontal list box.
4. Create validation column in data table.
5. Stratify by age.
6. Group by sex.
7. Allocate 50% for training.
8. Allocate 25% for validation.
9. Allocate 25% for testing.
10. Name new column "Valid1".



### Example 24
> **Summary**: Creates a validation window with multiple graph builders and bivariate plots to analyze relationships between variables in a data table.

<!-- Keywords: #JSLScriptingLanguage, #DataAnalysis, #GraphBuilder, #BivariatePlot, #ValidationWindow -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = New Window( "validation",
	V List Box(
		H List Box(
			dt << Make Validation Column(
				Cutpoint Column( :Age ),
				Cutpoint Batch ID( :Heart History ),
				Training Set( 0.50 ),
				Validation Set( 0.25 ),
				Test Set( 0.25 ),
				New Column Name( "Valid1" ),
				Random Seed( 1234 ), 
			),
			Graph Builder(
				Size( 533, 456 ),
				Show Control Panel( 0 ),
				Variables( X( :Weight ), Y( :Age ) ),
				Elements( Points( X, Y, Legend( 2 ) ), Smoother( X, Y, Legend( 3 ) ) )
			),
			Bivariate( Y( :Weight ), X( :Cholesterol ), Fit Line( {Line Color( {212, 73, 88} )} ) )
		),
		H List Box(
			dt << Make Validation Column(
				Cutpoint Column( :Age ),
				Training Set( 0.50 ),
				Validation Set( 0.25 ),
				Test Set( 0.25 ),
				New Column Name( "Valid1" ),
				Random Seed( 1234 ), 
			),
			Graph Builder(
				Size( 533, 456 ),
				Show Control Panel( 0 ),
				Variables( X( :Height ), Y( :Weight ) ),
				Elements( Points( X, Y, Legend( 2 ) ), Smoother( X, Y, Legend( 3 ) ) )
			),
			Oneway( Y( :Height ), X( :Smoking History ), Means( 1 ), Mean Diamonds( 1 ) )
		)
	)
);
n = Length( Window() );
```

**Code Explanation**:

1. Open data table.
2. Create new window named "validation".
3. Add vertical list box to window.
4. Add horizontal list box to vertical list box.
5. Create validation column using age and heart history.
6. Generate graph builder for weight vs. age.
7. Create bivariate plot for weight vs. cholesterol.
8. Add another horizontal list box to vertical list box.
9. Create validation column using age.
10. Generate graph builder for height vs. weight.
11. Create oneway plot for height vs. smoking history.
12. Count number of windows.



### Example 25
> **Summary**: Creates a new window with a continuous distribution for age, freezes all journal content, and generates a bivariate plot for height vs weight.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #NewWindowCreation, #ContinuousDistribution, #BivariatePlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nw = New Window( "test", Distribution( Continuous Distribution( Column( :age ) ) ) );
nw << journal window( freeze all );
nw << close window;
Close( dt, nosave );
Current Journal() << save journal( "$TEMP\journal freeze problem.jrn" );
Current Journal() << close window;
j = Open( "$TEMP/journal freeze problem.jrn" );
j << Close Window;
dt = Open("data_table.jmp");
obj = Bivariate( Y( :height ), X( :weight ) );
```

**Code Explanation**:

1. Open data table.
2. Create new window for distribution.
3. Add continuous distribution for age.
4. Freeze all journal content.
5. Close the window.
6. Close data table without saving.
7. Save current journal to temp file.
8. Close current journal window.
9. Reopen saved journal file.
10. Close reopened journal window.
11. Reopen data table.
12. Create bivariate plot for height vs weight.



## Bivariate using Fit Group
> **Summary**: Opens a data table and fits Passing Bablok models for four methods, arranging the plots in rows.

<!-- Keywords: #PassingBablok, #JMPScriptingLanguage, #DataTable, #PlotArrangement, #RegressionAnalysis -->

**Code**:
```jsl
// Passing Bablok
// Open data table
dt = Open("data_table.jmp");
// Passing Bablok
Fit Group(
	Bivariate(
		Y( :Method 1 ),
		X( :Standard ),
		Fit Passing Bablok
	),
	Bivariate(
		Y( :Method 2 ),
		X( :Standard ),
		Fit Passing Bablok
	),
	Bivariate(
		Y( :Method 3 ),
		X( :Standard ),
		Fit Passing Bablok
	),
	Bivariate(
		Y( :Method 4 ),
		X( :Standard ),
		Fit Passing Bablok
	),
	<<{Arrange in Rows( 1 )}
);
```

**Code Explanation**:

1. Open data table.
2. Fit Passing Bablok for Method 1.
3. Fit Passing Bablok for Method 2.
4. Fit Passing Bablok for Method 3.
5. Fit Passing Bablok for Method 4.
6. Arrange plots in rows.



## Bivariate using New Project
### Example 1
> **Summary**: Creates a bivariate plot to visualize the relationship between weight and height, with a fitted linear regression line.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #LinearRegression, #DataVisualization, #JMPScript -->

**Code**:
```jsl
project = New Project();
project << Run Script(
	dt = Open("data_table.jmp");
	New Window( "Bivariate of weight by height", Bivariate( Y( :weight ), X( :height ), Fit Line() ) );
);
```

**Code Explanation**:

1. Create new project.
2. Run script within project.
3. Open data table;
4. Create new window.
5. Display bivariate plot of weight vs height.
6. Fit a linear regression line.



### Example 2
> **Summary**: Creates a new JMP project, sets bookmarks, and runs a script that opens a data table, generates a bivariate plot of weight vs. height with a red line fit, and plots distributions of weight and age.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DistributionPlot, #DataTable, #Bookmarks -->

**Code**:
```jsl
New Project(
	Set Bookmarks( {Folder( "$SAMPLE_DATA/", Expanded( 1 ) )} ),
	Run Script(
		Open( "$SAMPLE_DATA/data_table.jmp", Set Window ID( "f2200f19-6371-e645-bdb9-b36eae451c92" ) );
		New Window( "Bivariate of weight by height",
			Set Window ID( "f3116756-07af-0846-9943-59675df088f9" ),
			Bivariate(
				Y( :weight ),
				X( :height ),
				Fit Line( {Line Color( {213, 72, 87} )} ),
				SendToReport( Dispatch( {}, "Bivar Plot", FrameBox, {DispatchSeg( Line Seg( 1 ), {Line Color( {213, 72, 87} )} )} ) )
			)
		) << Set Window Icon( "Bivariate" );
		New Window( "Distribution",
			Set Window ID( "ed4b35da-c2bd-294c-9f01-fef84cf36441" ),
			Distribution( Continuous Distribution( Column( :weight ) ), Nominal Distribution( Column( :age ) ) )
		) << Set Window Icon( "Distrib" );
	),
	Set Layout(
		H Splitter Box(
			Size( 1215, 700 ),
			<<Set Sizes( {0.2, 0.42, 0.38} ),
			<<Dockable(),
			Tab Page Box( Title( "Bookmarks" ), Window ID( "Bookmarks" ) ),
			Tab Page Box( Title( "data_table" ), Window ID( "f2200f19-6371-e645-bdb9-b36eae451c92" ) ),
			Tab Box(
				<<Dockable(),
				Tab Page Box( Title( "Bivariate of weight by height" ), Window ID( "f3116756-07af-0846-9943-59675df088f9" ) ),
				Tab Page Box( Title( "Distribution" ), Window ID( "ed4b35da-c2bd-294c-9f01-fef84cf36441" ) )
			)
		)
	)
);
```

**Code Explanation**:

1. Create new project.
2. Set bookmarks folder.
3. Run script block.
4. Open data table;
5. Create bivariate window.
6. Set bivariate window ID.
7. Plot weight vs. height.
8. Fit red line.
9. Set line color.
10. Create distribution window.
11. Set distribution window ID.
12. Plot weight and age distributions.
13. Set bivariate window icon.
14. Set distribution window icon.
15. Set layout splitter box.
16. Set sizes for splitter.
17. Make splitter dockable.
18. Add bookmarks tab page.
19. Add data_table data tab page.
20. Add bivariate plot tab page.
21. Add distribution plot tab page.



### Example 3
> **Summary**: Process of performing a bivariate analysis and generating a report from a data table, saving it as a PDF file.

<!-- Keywords: #JSLScriptingLanguage, #BivariateAnalysis, #DataTable, #ReportGeneration, #PDFOutput -->

**Code**:
```jsl
project = New Project();
project << Run Script(
	dt = Open("data_table.jmp");
	biv = dt << Bivariate( y( :weight ), x( :height ) );
	rbiv = biv << report;
	rbiv << Save PDF( "$TEMP/example.pdf" );
);
Delete File( "$TEMP/example.pdf" );
project << close window;
```

**Code Explanation**:

1. Create new project.
2. Run script within project.
3. Open data table.
4. Perform bivariate analysis.
5. Generate report from analysis.
6. Save report as PDF.
7. Delete saved PDF file.
8. Close project window.



## Bivariate using As Table
> **Summary**: Generates random data, creates a graph builder window with points and smoother elements, performs bivariate analysis, fits a linear model, and customizes the report layout.

<!-- Keywords: #JSLScriptingLanguage, #GraphBuilder, #BivariateAnalysis, #LinearModel, #ReportCustomization -->

**Code**:
```jsl
As Table( J( 15000, 2, Random Uniform( 0, 1100 ) ) ) << Graph Builder(
	Size( 526, 434 ),
	Show Control Panel( 0 ),
	Variables( X( :Col1 ), Y( :Col2 ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Plot Residuals( 1 ), Line Color( {213, 72, 87} ), Line Width( 2 )} ),
	SendToReport(
		Dispatch( {"Linear Fit", "Diagnostics
Plots", "Residual by Predicted Plot"}, "Bivar Resid vs Predict Plot", FrameBox,
			{Frame Size( 333, 165 )}
		),
		Dispatch( {"Linear Fit", "Diagnostics
Plots", "Residual by Predicted Plot"}, "Bivar Resid vs Predict Plot", FrameBox( 2 ),
			{Frame Size( 88, 165 )}
		)
	)
);
```

**Code Explanation**:

1. Generate random data.
2. Create graph builder window.
3. Set window size.
4. Hide control panel.
5. Define X and Y variables.
6. Add points and smoother elements.
7. Open data table.
8. Perform bivariate analysis.
9. Fit linear model.
10. Customize report layout.



## Bivariate using Fit Curve
> **Summary**: Opens a data table, fits various curves (quartic, logistic, inverse Michaelis-Menten, and Korsmeyer-Peppas with lag) to the CO2 data, and customizes the plot with reference lines, axis labels, and grid settings.

<!-- Keywords: #FitCurve, #JMPScriptingLanguage, #DataVisualization, #CustomPlotting, #ReferenceLines -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Curve(
	Y( :CO2 ),
	X( :"Year&Month"n ),
	Fit Quartic,
	Fit Logistic 3P,
	"Fit Inverse Michaelis-Menten"n,
	"Fit Korsmeyer-Peppas with Lag"n,
	SendToReport(
		Dispatch( {"Plot"}, "5", ScaleBox,
			{Add Ref Line(
				334.978363636364,
				"Solid",
				"Medium Light Cyan",
				"",
				20,
				1,
				Label Settings( {Label Position( "Inside Above" )} )
			)}
		),
		Dispatch( {"Plot"}, "4", ScaleBox,
			{Scale( "Power" ), Format( "Best", 12 ), Min( 1974.375 ), Max( 1987.70833333333 ), Inc( 4 ), Minor Ticks( 4 ),
			Add Ref Line(
				1980.13017751479,
				"Solid",
				"Medium Dark Purple",
				"",
				5,
				0.25,
				Label Settings( {Label Color( "Dark Blue" ), Label Position( "Inside Above" ), Set Font( "Segoe UI Semibold" )} )
			)}
		),
		Dispatch( {"Plot"}, "Fit Curve Report", FrameBox, {Frame Size( 975, 418 )} ),
		Dispatch( {"Plot"}, "", AxisBox( 2 ), {Add Axis Label( "Test Axis Label" )} ),
		Dispatch( {"Plot"}, "Test Axis Label", TextEditBox,
			{Text Color( "Red" ), Bullet point( 1 ), Rotate Text( "Horizontal" ), Font Color( 3 )}
		)
	)
);
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "", AxisBox, {Add Axis Label( "YAxis" )} ),
		Dispatch( {}, "YAxis", TextEditBox, {Text Color( "Green" ), Rotate Text( "Horizontal" ), Font Color( 4 )} ),
		Dispatch( {}, "Bivar Plot", FrameBox, {Grid Line Order( 1 ), Reference Line Order( 2 )} ),
		Dispatch( {}, "", AxisBox( 2 ), {Add Axis Label( "XAxis" )} ),
		Dispatch( {}, "XAxis", TextEditBox, {Text Color( "Red" ), Rotate Text( "Left" ), Font Color( 3 )} )
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Fit quartic curve.
3. Fit logistic model.
4. Fit inverse Michaelis-Menten.
5. Fit Korsmeyer-Peppas with lag.
6. Add reference line.
7. Configure X-axis scale.
8. Add another reference line.
9. Adjust plot size.
10. Add rotated axis label.
11. Open data_table data
12. Create bivariate plot.
13. Add Y-axis label.
14. Style Y-axis label.
15. Configure grid and reference lines.
16. Add X-axis label.
17. Style X-axis label.



## Bivariate using Graph Builder
### Example 1
> **Summary**: Creates a bivariate graph with nested factors, displaying standard deviation charts and adding reference lines to visualize relationships between height and weight.

<!-- Keywords: #GraphBuilder, #BivariateAnalysis, #NestedFactors, #StandardDeviation, #ReferenceLines -->

**Code**:
```jsl
Open("data_table.jmp");
Graph Builder(
	Size( 522, 452 ),
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 4 ) ) ),
	SendToReport( Dispatch( {}, "weight", ScaleBox, {Add Ref Line( {160, 180}, "Solid", "Black", "Obeast", 1, 0.25 )} ) )
);
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	SendToReport(
		Dispatch( {}, "weight", ScaleBox,
			{Min( 59.68 ), Max( 180 ), Inc( 20 ), Minor Ticks( 2 ), Add Ref Line(
				{65, 95},
				"Solid",
				"Medium Light Purple",
				"average",
				1,
				0.25
			), Add Ref Line( {125, 145}, "Solid", "Green", "", 1, 0.25 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Launch Graph Builder.
3. Set graph size.
4. Hide control panel.
5. Assign variables.
6. Add points element.
7. Add reference lines.
8. Launch Bivariate analysis.
9. Fit linear line.
10. Customize scale and add reference lines.



### Example 2
> **Summary**: Creates a pie chart with nested factors using Graph Builder, displaying standard deviation charts and adding pin annotations to segments.

<!-- Keywords: #GraphBuilder, #PieChart, #NestedFactors, #StandardDeviation, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Graph Builder(
	Size( 495, 440 ),
	Show Control Panel( 0 ),
	Variables( X( :sex ) ),
	Elements( Pie( X, Legend( 3 ) ) ),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Set Graphlet(
				Picture(
					Bivariate(
						Y( :height ),
						X( :weight ),
						Histogram Borders( 1 ),
						Summary Statistics( 1 ),
						Local Data Filter( Add Filter( columns( :sex ), Where( :sex == "M" ) ) )
					)
				)
			), Add Pin Annotation(
				Seg( Pie Seg( 1 ) ),
				Index( {1, 0} ),
				Index Row( {13, 0} ),
				UniqueID( 791315825 ),
				FoundPt( {498, 308} ),
				Origin( {-0.178571428571429, 0.0280612244897959} ),
				Tag Line( 1 )
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Graph Builder window.
3. Set graph size.
4. Hide control panel.
5. Set X variable.
6. Add pie chart element.
7. Send report to Graph Builder.
8. Insert bivariate graphlet picture.
9. Set Y and X variables for bivariate.
10. Add pin annotation to pie segment.



### Example 3
> **Summary**: Creates a bivariate graph with a contour element and standard deviation charts, using Graph Builder to visualize the relationship between height and weight.

<!-- Keywords: #GraphBuilder, #BivariateAnalysis, #ContourElement, #StandardDeviationCharts, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Graph Builder(
	Size( 534, 454 ),
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Contour( X, Y, Legend( 4 ) ) ),
	SendToReport( Dispatch( {}, "400", ScaleBox, {Legend Model( 4, Properties( 0, {Fill Color( 21 )} ) )} ) )
);
Bivariate( Y( :weight ), X( :height ), Fit Line( {Line Color( {213, 72, 87} )} ), Nonpar Density( 51 ) );
```

**Code Explanation**:

1. Open data table;
2. Launch Graph Builder.
3. Set graph size.
4. Hide control panel.
5. Assign height to X.
6. Assign weight to Y.
7. Add contour element.
8. Configure legend properties.
9. Launch Bivariate analysis.
10. Fit linear regression line.



### Example 4
> **Summary**: Creates a variability chart with nested factors using Graph Builder, displaying standard deviation charts and nonparametric density plots.

<!-- Keywords: #GraphBuilder, #VariabilityChart, #NestedFactors, #StandardDeviation, #NonParametricDensity -->

**Code**:
```jsl
Open("data_table.jmp");
Graph Builder(
	Size( 534, 454 ),
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Contour( X, Y, Legend( 4 ) ) ),
	SendToReport( Dispatch( {}, "400", ScaleBox, {Legend Model( 4, Properties( 0, {Fill Color( 21 )} ) )} ) )
);
Bivariate( Y( :weight ), X( :height ), Fit Line( {Line Color( {213, 72, 87} )} ), Nonpar Density( 51 ) );
Scatterplot Matrix(
	Y( :height, :weight ),
	Matrix Format( "Lower Triangular" ),
	Ellipse Color( 3 ),
	Nonpar Density( 1 ),
	Automatic Recalc( 0 )
);
```

**Code Explanation**:

1. Open data table.
2. Create Graph Builder window.
3. Set graph size.
4. Hide control panel.
5. Define X and Y variables.
6. Add contour element.
7. Customize legend color.
8. Generate Bivariate plot.
9. Fit linear regression line.
10. Add nonparametric density.
11. Create Scatterplot Matrix.
12. Set matrix format.
13. Customize ellipse color.
14. Add nonparametric density.
15. Disable automatic recalculation.



### Example 5
> **Summary**: Creates a bivariate graph with nested factors, displaying standard deviation charts and correlation analysis.

<!-- Keywords: #GraphBuilder, #BivariateAnalysis, #Correlation, #DensityEllipse, #JSLScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
gb = Graph Builder(
	Size( 534, 454 ),
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 2 ) ), Ellipse( X, Y, Legend( 5 ), Correlation( 1 ) ) )
);
biv = Bivariate(
	Y( :weight ),
	X( :height ),
	Density Ellipse( 0.9, {Line Color( {212, 73, 88} )} ),
	SendToReport( Dispatch( {}, "Bivariate Normal Ellipse P=0.900", OutlineBox, {Close( 0 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create Graph Builder object.
3. Set graph size.
4. Hide control panel.
5. Assign X and Y variables.
6. Add points element.
7. Add ellipse element.
8. Calculate correlation.
9. Create Bivariate analysis.
10. Add density ellipse.
11. Customize ellipse color.
12. Close ellipse outline box.



## Bivariate using Set Preference
### Example 1
> **Summary**: Creates a bivariate plot with a linear fit line, setting axis font preferences and customizing the line color.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LinearRegression, #DataVisualization, #Customization -->

**Code**:
```jsl
Set Preference( Axis Font( "Times New Roman", 18, "Bold" ) );
Open("data_table.jmp");
Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	SendToReport( Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} ) )
);
```

**Code Explanation**:

1. Set axis font preferences.
2. Open data table.
3. Create bivariate plot.
4. Set Y variable to weight.
5. Set X variable to height.
6. Fit linear regression line.
7. Set line color to red.
8. Close linear fit outline box.



### Example 2
> **Summary**: Creates and customizes bivariate plots, one-way analysis, and logistic modeling for a data table, while adjusting axis title preferences and closing the data table.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlotting, #OneWayAnalysis, #LogisticModeling, #DataVisualization -->

**Code**:
```jsl
Set Preference( Default );
Preferences( Axis Title Above( 1 ) );
dt = Open("data_table.jmp");
biv = Bivariate( Y( :weight ), X( :height ), SendToReport( Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} ) ) );
rpt = biv << report;
ow = Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
rpt = ow << report;
lg = Logistic( Y( :age ), X( :weight ) );
rpt = lg << report;
biv2 = Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "weight", TextEditBox, {Set Text( "four score and seven years ago" )} ),
		Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} )
	)
);
rpt = biv2 << report;
Preferences( Axis Title Above( 0 ) );
biv3 = Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "weight", TextEditBox,
			{Set Text( "Some years ago - never mind how long precisely - having little or no money in my purse" )}
		),
		Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} )
	)
);
rpt = biv3 << report;
Close( dt, nosave );
Set Preference( default );
```

**Code Explanation**:

1. Set default preferences.
2. Set axis title above.
3. Open data table.
4. Create bivariate plot for weight vs height.
5. Adjust marker size in plot.
6. Generate report for bivariate plot.
7. Create one-way analysis for height vs sex.
8. Generate report for one-way analysis.
9. Fit logistic model for age vs weight.
10. Generate report for logistic model.
11. Create second bivariate plot with custom title.
12. Adjust marker size in second plot.
13. Generate report for second bivariate plot.
14. Reset axis title preference.
15. Create third bivariate plot with custom title.
16. Adjust marker size in third plot.
17. Generate report for third bivariate plot.
18. Close data table without saving.
19. Reset default preferences.



## Bivariate using Expr
### Example 1
> **Summary**: Creates a bivariate plot with a reference line, utilizing the Extract Expr function to access and configure various elements.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #ReferenceLine, #AxisBox, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
testPlot = Expr(
	biv = dt << Bivariate( Y( :weight ), X( :height ), FitLine );
	rbiv = biv << report;
	axisbox = rbiv[axis box( 1 )];
	axisbox << Add Ref Line(
		100.9444,
		"Dotted",
		"Red",
		"F mean",
		2,
		1,
		Label Settings( {Label Color( "Fuchsia" ), Label Position( myOption )} )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Retrieve report object.
4. Access axis box.
5. Add reference line.
6. Set reference line style.
7. Set reference line color.
8. Label reference line.
9. Set label position option.
10. Apply label settings.



### Example 2
> **Summary**: Creates a bivariate plot with dynamic label positions, utilizing the `Bivariate` and `Add Ref Line` functions to generate multiple plots.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #DynamicLabelPosition, #DataVisualization, #JMP -->

**Code**:
```jsl
myJSL = {};
myVList = Expr( V List Box() );
lstLabelPos = {"Outside", "Inside Above", "Inside Below", "Inside Inline"};
dt = Open("data_table.jmp");
testPlot = Expr(
	biv = dt << Bivariate( Y( :weight ), X( :height ), FitLine );
	rbiv = biv << report;
	axisbox = rbiv[axis box( 1 )];
	axisbox << Add Ref Line(
		100.9444,
		"Dotted",
		"Red",
		"F mean",
		2,
		1,
		Label Settings( {Label Color( "Fuchsia" ), Label Position( myOption )} )
	);
);
For( i = 1, i <= N Items( lstLabelPos ), i++,
	Substitute Into( testPlot, Expr( myOption ), Eval Expr( Expr( lstLabelPos[i] ) ) );
	myJSL[i] = Eval Expr( testPlot );
	Substitute Into( testPlot, Eval Expr( Expr( lstLabelPos[i] ) ), Expr( myOption ) );
);
New Window( "test", Outline Box( "test", For( i = 1, i <= N Items( lstLabelPos ), i++, Insert Into( myVList, Eval( myJSL[i] ) ) ) ) );
```

**Code Explanation**:

1. Initialize empty dictionary.
2. Create vertical list box expression.
3. Define label positions list.
4. Open data table.
5. Define test plot expression.
6. Create bivariate plot.
7. Get report of bivariate plot.
8. Access first axis box.
9. Add reference line with dynamic label position.
10. Loop through label positions.
11. Substitute label position in test plot.
12. Evaluate test plot and store in dictionary.
13. Reset label position in test plot.
14. Create new window with outline box.
15. Insert plots into vertical list box.



### Example 3
> **Summary**: Creates a bivariate expression and distribution analysis for a subset of data, utilizing the `Expr` function to combine multiple operations.

<!-- Keywords: #JSLScriptingLanguage, #BivariateExpression, #DistributionAnalysis, #DataSubset, #ExprFunction -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
sbiv_expr = Expr(
	dt1 << Bivariate( Y( :height ), X( :weight ), Automatic Recalc( 1 ) )
);
subset_dt1 = dt1 << subset( all rows, selected columns only( 0 ) );
sdis_expr = Expr(
	subset_dt1 << Distribution( Continuous Distribution( Column( :weight ) ), Nominal Distribution( Column( :age ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate expression.
3. Subset table without selected columns.
4. Create distribution expression.



### Example 4
> **Summary**: Creates a new window with two plots: a bivariate plot and a distribution plot, using the Extract Expr function to subset data.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #DistributionPlot, #DataSubset, #NewWindow -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
sbiv_expr = Expr(
	dt1 << Bivariate( Y( :height ), X( :weight ), Automatic Recalc( 1 ) )
);
subset_dt1 = dt1 << subset( all rows, selected columns only( 0 ) );
sdis_expr = Expr(
	subset_dt1 << Distribution( Continuous Distribution( Column( :weight ) ), Nominal Distribution( Column( :age ) ) )
);
New Window( "example", H List Box( sbiv_expr, sdis_expr ) );
```

**Code Explanation**:

1. Open data table.
2. Define bivariate expression.
3. Create subset of data.
4. Define distribution expression.
5. Create new window.
6. Add bivariate plot to window.
7. Add distribution plot to window.



### Example 5
> **Summary**: Creates a new window with two tab pages, each containing a bivariate expression and distribution expression respectively, using JSL scripting language.

<!-- Keywords: #JSLScriptingLanguage, #NewWindow, #TabPages, #BivariateExpression, #DistributionExpression -->

**Code**:
```jsl
Open("data_table.jmp");
sbiv_expr = Expr(
	Bivariate( Y( :height ), X( :weight ), Automatic Recalc( 1 ) )
);
sdis_expr = Expr(
	Distribution( Continuous Distribution( Column( :weight ) ), Nominal Distribution( Column( :age ) ) )
);
New Window( "Example",
	tb = Tab Box( tp = Tab Page Box( "alpha", H List Box( sbiv_expr ) ), tp2 = Tab Page Box( "beta", H List Box( sdis_expr ) ) ), 
);
tb << set selected( 2 );
```

**Code Explanation**:

1. Open data table.
2. Define bivariate expression.
3. Define distribution expression.
4. Create new window.
5. Add tab box.
6. Add first tab page.
7. Add second tab page.
8. Set selected tab to second.



### Example 6
> **Summary**: Creates a new window with two tab pages, each containing an expression: a bivariate analysis and a distribution analysis.

<!-- Keywords: #JSLScriptingLanguage, #NewWindow, #TabBox, #BivariateAnalysis, #DistributionAnalysis -->

**Code**:
```jsl
Names Default To Here( 1 );
Open("data_table.jmp");
sbiv_expr = Expr(
	Bivariate( Y( :height ), X( :weight ), Automatic Recalc( 1 ) )
);
sdis_expr = Expr(
	Distribution( Continuous Distribution( Column( :weight ) ), Nominal Distribution( Column( :age ) ) )
);
New Window( "Example",
	tb = Tab Box( tp = Tab Page Box( "alpha", H List Box( sbiv_expr ) ), tp2 = Tab Page Box( "beta", H List Box( sdis_expr ) ) ), 
);
tb << set selected( 2 );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Define bivariate expression.
4. Define distribution expression.
5. Create new window.
6. Add tab box.
7. Add first tab page.
8. Add second tab page.
9. Set selected tab page.



### Example 7
> **Summary**: Creates and customizes a Bivariate plot, including setting the background color.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #DataVisualization, #Customization, #InteractiveFeatures -->

**Code**:
```jsl
badStringExpr = Expr(
	dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
	biv = bivariate( y( weight ), x( height ) );
	rbiv = biv << report;
	framebox = rbiv[Frame Box( 1 )];
	val1 = framebox << Get Background Color;
	framebox << Background Color( pseudoColor );
	val2 = framebox << Get Background Color;
);
```

**Code Explanation**:

1. Define `badStringExpr`.
2. Open data table;
3. Create Bivariate plot.
4. Retrieve Bivariate report.
5. Access first Frame Box.
6. Get initial background color.
7. Set new background color.
8. Get updated background color.



## Bivariate using For
### Example 1
> **Summary**: Process of generating a bivariate plot, copying its picture, and verifying that pasting it into a journal window does not modify the XML.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #JournalWindow, #XMLModification, #Automation -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
biv = dt << bivariate( y( weight ), x( height ) );
rbiv = biv << report;
For( retry = 1, retry < 5, retry++,
	jjj = New Window( "Test", <<journal );
	jjj << Bring window to front;
	Debug( "Bring to Front" );
	rbiv[FrameBox( 1 )] << Copy Picture();
	top = jjj;
	While( !Is Empty( top << parent ), top = top << parent );
	beforeXml = top << get xml;
	Main Menu( "Edit:Paste" );
	afterXml = top << get xml;
	Print( afterXml );
	If( beforeXml != afterXml,
		Break()
	);
	If( retry < 4,
		jjj << close window
	);
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Get report object.
4. Loop 4 times.
5. Create new journal window.
6. Bring window to front.
7. Debug message.
8. Copy picture from plot.
9. Find top window.
10. Get XML before paste.
11. Paste copied picture.
12. Get XML after paste.
13. Print modified XML.
14. Compare XMLs; break if different.
15. Close journal window if not last iteration.



### Example 2
> **Summary**: Process of copying a picture from a bivariate plot and pasting it into a journal window, verifying that the XML remains unchanged.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #JournalWindow, #XMLManipulation, #Automation -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
biv = dt << bivariate( y( weight ), x( height ) );
rbiv = biv << report;
For( retry = 1, retry < 5, retry++,
	jjj = New Window( "Test", <<journal );
	jjj << Bring window to front;
	Debug( "Bring to Front" );
	rbiv[FrameBox( 1 )] << Copy Picture();
	top = jjj;
	While( !Is Empty( top << parent ), top = top << parent );
	beforeXml = top << get xml;
	Main Menu( "Edit:Paste" );
	afterXml = top << get xml;
	Print( afterXml );
	If( beforeXml != afterXml,
		Break()
	);
	If( retry < 4,
		jjj << close window
	);
);
biv << close window;
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Get report object.
4. Loop 4 times.
5. Create new journal window.
6. Bring window to front.
7. Copy picture from plot.
8. Traverse up to root window.
9. Get XML before paste.
10. Paste copied picture.
11. Get XML after paste.
12. Print updated XML.
13. Compare XMLs, break if changed.
14. Close journal window if not last iteration.
15. Close bivariate plot window.



### Example 3
> **Summary**: Process of copying a graph from a bivariate report and verifying its integrity by comparing XML before and after paste, with retries for successful execution.

<!-- Keywords: #JSLScriptingLanguage, #BivariateReport, #GraphCopying, #XMLVerification, #RetryMechanism -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
biv = dt << bivariate( y( weight ), x( height ) );
rbiv = biv << report;
For( retry = 1, retry < 5, retry++,
	jj = New Window( "Test", <<journal );
	jj << Bring window to front;
	Debug( "Bring to Front" );
	(rbiv[FrameBox( 1 )]) << Copy Graph();
	top = jj;
	While( !Is Empty( top << parent ), top = top << parent );
	beforeXml = top << get xml;
	Main Menu( "Edit:Paste" );
	afterXml = top << get xml;
	Print( afterXml );
	If( beforeXml != afterXml,
		Break()
	);
	If( retry < 4,
		jj << close window
	);
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Get report object.
4. Initialize retry counter.
5. Start loop.
6. Create new journal window.
7. Bring window to front.
8. Copy graph from report.
9. Traverse to top window.
10. Get XML before paste.
11. Paste copied graph.
12. Get XML after paste.
13. Print updated XML.
14. Check if XML changed.
15. Break loop if changed.
16. Close journal window if not last attempt.
17. Repeat loop if retries left.



### Example 4
> **Summary**: Process of generating a bivariate report and verifying its XML content by looping through journal windows, copying graphs to clipboard, and comparing XMLs.

<!-- Keywords: #JSLScriptingLanguage, #BivariateReport, #JournalWindow, #XMLVerification, #LoopControl -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
biv = dt << bivariate( y( weight ), x( height ) );
rbiv = biv << report;
For( retry = 1, retry < 5, retry++,
	jj = New Window( "Test", <<journal );
	jj << Bring window to front;
	Debug( "Bring to Front" );
	(rbiv[FrameBox( 1 )]) << Copy Graph();
	top = jj;
	While( !Is Empty( top << parent ), top = top << parent );
	beforeXml = top << get xml;
	Main Menu( "Edit:Paste" );
	afterXml = top << get xml;
	Print( afterXml );
	If( beforeXml != afterXml,
		Break()
	);
	If( retry < 4,
		jj << close window
	);
);
biv << close window;
```

**Code Explanation**:

1. Open data_table data
2. Create bivariate plot.
3. Get bivariate report.
4. Loop 4 times.
5. Create new journal window.
6. Bring journal to front.
7. Copy graph to clipboard.
8. Get current XML.
9. Paste clipboard content.
10. Get new XML.
11. Print new XML.
12. Compare XMLs.
13. Break loop if different.
14. Close journal window if not last iteration.
15. Close bivariate window.



### Example 5
> **Summary**: Generates a bivariate plot for height and weight variables, filtered by age 12 and sex 'F', using the Distribution platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #Distribution, #BivariatePlot, #DataFiltering, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myrows = dt << get rows where( :age == 12 & :sex == "F" );
For( i = 1, i <= N Items( myrows ), i++,
	:age[myrows[i]] = .
);
Bivariate( Y( :height ), X( :weight ), Where( Is Missing( :age ) ) );
```

**Code Explanation**:

1. Open data table;
2. Identify rows where age is 12 and sex is female.
3. Loop through identified rows.
4. Set age to missing for each row.
5. Create Bivariate plot.
6. Set Y variable to height.
7. Set X variable to weight.
8. Filter data where age is missing.



## Bivariate using Fit Model
> **Summary**: Analyze and visualize a linear regression model with weight as the response variable, using height as an effect, and generates plots for effect screening, inverse prediction, and bivariate relationships.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #EffectScreening, #InversePrediction, #BivariateAnalysis -->

**Code**:
```jsl
dt = Open( "$Sample_Data/data_table.jmp", invisible );
fm = dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run(
		Profiler( 0 ),
		:weight << {Summary of Fit( 1 ), Analysis of Variance( 1 ), Parameter Estimates( 1 ), Sorted Estimates( 0 ),
		Plot Actual by Predicted( 1 ), Plot Residual by Predicted( 1 ), Plot Residual by Row( 1 ), Plot Studentized Residuals( 1 ),
		Plot Effect Leverage( 1 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 ),
		Inverse Prediction( Response( 100 ), Term Value( height( . ) ), Individual )}
	),
	SendToReport(
		Dispatch( {"Response weight", "Inverse Prediction"}, "2", ScaleBox,
			{Min( 0.318245170716 ), Max( 2.341988325204 ), Inc( 0.5 ), Minor Ticks( 0 )}
		)
	)
);
fb1 = Report( fm )["Response weight", "Inverse Prediction", FrameBox( 1 )];
fb1 << Copy Frame Contents;
fb1 << Close Window;
biv = dt << Bivariate( Y( :weight ), X( :height ) );
fb2 = Report( biv )[Framebox( 1 )];
fb2 << Paste Frame Contents;
biv << Redo Analysis;
biv << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Fit model with weight as Y.
3. Use height as effect.
4. Set personality to Standard Least Squares.
5. Emphasize Effect Screening.
6. Run profiler and various plots.
7. Set inverse prediction for weight.
8. Adjust scale box for inverse prediction.
9. Copy frame contents of inverse prediction.
10. Close inverse prediction window.
11. Create bivariate plot of weight vs height.
12. Paste frame contents of bivariate plot.
13. Redo bivariate analysis.
14. Close bivariate window.



## Bivariate using Get Preference
> **Summary**: Creates and compares bivariate plot images with transparent background settings, showcasing the effect on report PNG images.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #TransparentBackground, #ReportPNGImages, #DataVisualization -->

**Code**:
```jsl
before = Get Preference( Transparent background for report PNG images );
dt = Open("data_table.jmp");
obj = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Pref( Transparent background for report PNG images( 0 ) );
pic1 = Report( obj ) << Get Picture( Type( "Bitmap" ), View( "Print" ) );
Pref( Transparent background for report PNG images( 1 ) );
pic2 = Report( obj ) << Get Picture( Type( "Bitmap" ), View( "Print" ) );
New Window( "pictures",
	H List Box(
		Tab Page Box( "Opaque", Picture Box( pic1 ) ),
		Tab Page Box( "Transparent", Picture Box( pic2 ) ),
		<<BackgroundColor( "Light Yellow" )
	)
);
Pref( Transparent background for report PNG images( before ) );
```

**Code Explanation**:

1. Save current transparency setting.
2. Open data table.
3. Create bivariate plot.
4. Disable transparent background.
5. Capture opaque plot image.
6. Enable transparent background.
7. Capture transparent plot image.
8. Create new window.
9. Display both images in tabs.
10. Restore original transparency setting.



## Bivariate using New Image
### Example 1
> **Summary**: Creates bivariate plots with images and segment manipulation in JMP, utilizing data table operations and report elements.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlotting, #ImageHandling, #SegmentManipulation, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
img = New Image( "$SAMPLE_IMAGES/pi.gif" );
biv2 = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Report( biv2 )[framebox( 1 )] << Add Image( image( img ), fillGraph );
Report( biv2 )[Outline Box( 2 )] << Close;
img2 = New Image( "$SAMPLE_IMAGES/pi.gif" );
biv = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Report( biv )[framebox( 1 )] << Add Image( image( img2 ), fillGraph );
seg = Report( biv )[framebox( 1 )] << Find Seg( "PictSeg" );
Report( biv )[Outline Box( 2 )] << Close;
seg << Flip Vertical;
img3 = New Image( "$SAMPLE_IMAGES/pi.gif" );
biv3 = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Report( biv3 )[framebox( 1 )] << Add Image( image( img3 ), fillGraph );
seg1 = Report( biv3 )[framebox( 1 )] << Find Seg( "PictSeg" );
Report( biv3 )[Outline Box( 2 )] << Close;
seg1 << Flip Horizontal;
img4 = New Image( "$SAMPLE_IMAGES/pi.gif" );
biv4 = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Report( biv4 )[framebox( 1 )] << Add Image( image( img4 ), fillGraph );
Report( biv4 )[Outline Box( 2 )] << Close;
seg2 = Report( biv4 )[framebox( 1 )] << Find Seg( "PictSeg" );
```

**Code Explanation**:

1. Open data table.
2. Load "pi.gif" image.
3. Create bivariate plot: weight vs height.
4. Add image to graph frame.
5. Close second outline box.
6. Repeat steps 2-5 for another plot.
7. Find segment named "PictSeg".
8. Flip vertical segment.
9. Repeat steps 2-7 for another plot.
10. Flip horizontal segment.



### Example 2
> **Summary**: Creates and customizes bivariate plots with images, including flipping segments vertically or horizontally.

<!-- Keywords: #JSLScripting, #BivariateAnalysis, #ImageIntegration, #DataVisualization, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
img = New Image( "$SAMPLE_IMAGES/pi.gif" );
biv2 = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Report( biv2 )[framebox( 1 )] << Add Image( image( img ), fillGraph );
Report( biv2 )[Outline Box( 2 )] << Close;
img2 = New Image( "$SAMPLE_IMAGES/pi.gif" );
biv = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Report( biv )[framebox( 1 )] << Add Image( image( img2 ), fillGraph );
seg = Report( biv )[framebox( 1 )] << Find Seg( "PictSeg" );
Report( biv )[Outline Box( 2 )] << Close;
seg << Flip Vertical;
img3 = New Image( "$SAMPLE_IMAGES/pi.gif" );
biv3 = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Report( biv3 )[framebox( 1 )] << Add Image( image( img3 ), fillGraph );
seg1 = Report( biv3 )[framebox( 1 )] << Find Seg( "PictSeg" );
Report( biv3 )[Outline Box( 2 )] << Close;
seg1 << Flip Horizontal;
img4 = New Image( "$SAMPLE_IMAGES/pi.gif" );
biv4 = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Report( biv4 )[framebox( 1 )] << Add Image( image( img4 ), fillGraph );
Report( biv4 )[Outline Box( 2 )] << Close;
seg2 = Report( biv4 )[framebox( 1 )] << Find Seg( "PictSeg" );
seg2 << Flip Both;
```

**Code Explanation**:

1. Open data table.
2. Create new image object.
3. Perform bivariate analysis.
4. Add image to graph.
5. Close second outline box.
6. Repeat steps 2-5.
7. Find segment in report.
8. Flip segment vertically.
9. Repeat steps 2-8.
10. Flip segment horizontally.
11. Repeat steps 2-10.
12. Flip segment both ways.



### Example 3
> **Summary**: Creates and customizes bivariate plots with images, setting transparency levels to zero, 0.5, and one.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #ImageCustomization, #TransparencyControl, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
img2 = New Image( "$SAMPLE_IMAGES/pi.gif" );
biv2 = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Report( biv2 )[framebox( 1 )] << Add Image( image( img2 ), fillGraph );
Report( biv2 )[Outline Box( 2 )] << Close;
Report( biv2 )[Outline Box( 1 )] << set title( "transparency is zero" );
seg2 = Report( biv2 )[framebox( 1 )] << Find Seg( "PictSeg" );
seg2 << Transparency( 0 );
img3 = New Image( "$SAMPLE_IMAGES/pi.gif" );
biv3 = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Report( biv3 )[framebox( 1 )] << Add Image( image( img3 ), fillGraph );
Report( biv3 )[Outline Box( 2 )] << Close;
Report( biv3 )[Outline Box( 1 )] << set title( "transparency is 0.5" );
seg3 = Report( biv3 )[framebox( 1 )] << Find Seg( "PictSeg" );
seg3 << Transparency( 0.5 );
img5 = New Image( "$SAMPLE_IMAGES/pi.gif" );
biv5 = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Report( biv5 )[framebox( 1 )] << Add Image( image( img5 ), fillGraph );
Report( biv5 )[Outline Box( 2 )] << Close;
Report( biv5 )[Outline Box( 1 )] << set title( "transparency is 1" );
seg5 = Report( biv5 )[framebox( 1 )] << Find Seg( "PictSeg" );
```

**Code Explanation**:

1. Open data table.
2. Create new image object.
3. Perform bivariate analysis.
4. Add image to graph.
5. Close second outline box.
6. Set report title.
7. Find PictSeg segment.
8. Set transparency to zero.
9. Create another image object.
10. Repeat steps 3-8 with transparency 0.5.
11. Create third image object.
12. Repeat steps 3-8 with transparency 1.



### Example 4
> **Summary**: Creates and customizes interactive plots with images, segment rotation, and transparency settings in JMP.

<!-- Keywords: #JMPScriptingLanguage, #GraphBuilder, #ImageHandling, #SegmentRotation, #DataVisualization -->

**Code**:
```jsl
img1 = New Image( "$Sample_Images/pi.gif" );
w1 = New Window( "Rotate",
	gb = Graph Box( Frame Size( 300, 300 ), X Scale( 0, 100 ), Y Scale( 0, 100 ), <<Add Image( Image( img1 ), fillgraph ) )
);
seg1 = w1[framebox( 1 )] << Find Seg( "PictSeg" );
seg1 << Rotate( 45 );
img4 = New Image( "$Sample_Images/pi.gif" );
w4 = New Window( "Rotate",
	gb = Graph Box( Frame Size( 300, 300 ), X Scale( 0, 100 ), Y Scale( 0, 100 ), <<Add Image( Image( img4 ), fillgraph ) )
);
seg4 = w4[framebox( 1 )] << Find Seg( "PictSeg" );
seg4 << Rotate( 45 );
seg4 << Rotate( -180 );
dt = Open("data_table.jmp");
img2 = New Image( "$SAMPLE_IMAGES/pi.gif" );
biv2 = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Report( biv2 )[framebox( 1 )] << Add Image( image( img2 ), fillGraph );
Report( biv2 )[Outline Box( 2 )] << Close;
Report( biv2 )[Outline Box( 1 )] << set title( "transparency is zero" );
seg2 = Report( biv2 )[framebox( 1 )] << Find Seg( "PictSeg" );
seg2 << Transparency( 0 );
img3 = New Image( "$SAMPLE_IMAGES/pi.gif" );
biv3 = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Report( biv3 )[framebox( 1 )] << Add Image( image( img3 ), fillGraph );
Report( biv3 )[Outline Box( 2 )] << Close;
Report( biv3 )[Outline Box( 1 )] << set title( "transparency is 0.5" );
seg3 = Report( biv3 )[framebox( 1 )] << Find Seg( "PictSeg" );
seg3 << Transparency( 0.5 );
img5 = New Image( "$SAMPLE_IMAGES/pi.gif" );
biv5 = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Report( biv5 )[framebox( 1 )] << Add Image( image( img5 ), fillGraph );
Report( biv5 )[Outline Box( 2 )] << Close;
Report( biv5 )[Outline Box( 1 )] << set title( "transparency is 1" );
seg5 = Report( biv5 )[framebox( 1 )] << Find Seg( "PictSeg" );
seg5 << Transparency( 1 );
```

**Code Explanation**:

1. Load image "pi.gif".
2. Create window "Rotate".
3. Add image to graph box.
4. Find segment "PictSeg".
5. Rotate segment by 45 degrees.
6. Repeat steps 1-5 for another window.
7. Rotate segment by 45 then -180 degrees.
8. Open data table;
9. Create bivariate plot with weight vs height.
10. Add image to plot frame.
11. Close second outline box.
12. Set plot title to "transparency is zero".
13. Find segment "PictSeg" in plot.
14. Set segment transparency to 0.
15. Repeat steps 9-14 for another plot with transparency 0.5.
16. Repeat steps 9-14 for another plot with transparency 1.



### Example 5
> **Summary**: Creates a bivariate analysis report with images, setting frame size and removing segments in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #ImageAddition, #FrameSizeAdjustment, #SegmentRemoval -->

**Code**:
```jsl
dt = Open("data_table.jmp");
img2 = New Image( "$SAMPLE_IMAGES/windmap.png" );
biv2 = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Report( biv2 )[framebox( 1 )] << Add Image(
	image( img2 ),
	Bounds( bottom( 60 ), Right( 72.5 ), top( 180 ), Left( 50 ) ),
	Transparency( 0.3 )
);
Report( biv2 )[framebox( 1 )] << frame size( 400, 500 );
seg = Report( biv2 )[framebox( 1 )] << Find Seg( "PictSeg" );
seg << Remove;
Report( biv2 )[Outline Box( 2 )] << Close;
img4 = New Image( "$SAMPLE_IMAGES/windmap.png" );
img3 = New Image( "$SAMPLE_IMAGES/pi.gif" );
biv3 = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Report( biv3 )[framebox( 1 )] << Add Image(
	image( img4 ),
	Bounds( bottom( 60 ), Right( 72.5 ), top( 180 ), Left( 50 ) ),
	Transparency( 0.3 )
);
Report( biv3 )[framebox( 1 )] << Add Image(
	image( img3 ),
	Bounds( bottom( 60 ), Right( 72.5 ), top( 180 ), Left( 50 ) ),
	Transparency( 1 )
);
Report( biv3 )[framebox( 1 )] << frame size( 400, 500 );
```

**Code Explanation**:

1. Open data table.
2. Create new image object.
3. Perform bivariate analysis.
4. Add image to report.
5. Set frame size.
6. Find and remove segment.
7. Close outline box.
8. Create new image objects.
9. Perform bivariate analysis again.
10. Add images to report.



## Bivariate using Add Text Annotation
### Example 1
> **Summary**: Creates and customizes bivariate plots with text annotations, justifying text content to center, right, or left.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #TextAnnotation, #Justification, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
ta = rbiv << Add Text Annotation();
ta << Text( "This text 
should be center 
justified." );
ta << Justification( "Center" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
ta = rbiv << Add Text Annotation();
ta << Text( "This text 
should be right 
justified." );
ta << Justification( "Right" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
ta = rbiv << Add Text Annotation();
ta << Text( "This text 
should be left 
justified." );
```

**Code Explanation**:

1. Open data_table data
2. Create bivariate plot.
3. Retrieve report object.
4. Add text annotation.
5. Set text content.
6. Center justify text.
7. Create bivariate plot again.
8. Retrieve report object.
9. Add text annotation.
10. Set text content.
11. Right justify text.
12. Create bivariate plot again.
13. Retrieve report object.
14. Add text annotation.
15. Set text content.
16. Left justify text.



### Example 2
> **Summary**: Creates and customizes bivariate plots with text annotations in JMP, demonstrating center, right, and left justification techniques.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #TextAnnotation, #DataVisualization, #Customization -->

**Code**:
```jsl
Names Default To Here( 1 );
Open("data_table.jmp");
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
ta = rbiv << Add Text Annotation();
ta << Text( "This text 
should be center 
justified." );
ta << Justification( "Center" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
ta = rbiv << Add Text Annotation();
ta << Text( "This text 
should be right 
justified." );
ta << Justification( "Right" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
ta = rbiv << Add Text Annotation();
ta << Text( "This text 
should be left 
justified." );
ta << Justification( "Left" );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create bivariate plot.
4. Get bivariate report.
5. Add text annotation.
6. Set text content.
7. Center justify text.
8. Create bivariate plot again.
9. Get bivariate report.
10. Add text annotation.
11. Set text content.
12. Right justify text.
13. Create bivariate plot again.
14. Get bivariate report.
15. Add text annotation.
16. Set text content.
17. Left justify text.



## Bivariate using Format
### Example 1
> **Summary**: Runs data visualization and analysis by generating a bivariate plot, calculating linear fit lines, and creating an Oneway ANOVA plot for the 'Big Class' dataset.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #BivariatePlot, #LinearFit, #OnewayANOVA -->

**Code**:
```jsl
Open("data_table.jmp");
:height << Format( "Custom", Formula( Char( value ) || "in" ), 12 );
:weight << Format( "Custom", Formula( Char( value ) || "lb" ), 12 );
Bivariate( Y( :weight ), X( :height ), Fit Line, SendToReport( Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} ) ) );
Distribution( Continuous Distribution( Column( :weight ) ), Histograms Only( 1 ) );
Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ), SendToReport( Dispatch( {}, "Oneway Anova", OutlineBox, {Close( 1 )} ) ) );
```

**Code Explanation**:

1. Open data table;
2. Set height format to "X in".
3. Set weight format to "X lb".
4. Create Bivariate plot.
5. Add linear fit line.
6. Close Linear Fit outline.
7. Generate weight distribution.
8. Display histograms only.
9. Create Oneway plot.
10. Group by sex.
11. Show means.
12. Display mean diamonds.
13. Close Oneway Anova outline.



### Example 2
> **Summary**: Runs data visualization and analysis by formatting height and weight columns, generating a bivariate plot with a linear fit line, creating a distribution report for weight, and performing an Oneway ANOVA on height by sex.

<!-- Keywords: #JSL, #DataVisualization, #BivariatePlot, #LinearRegression, #OnewayANOVA -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:height << Format( "Custom", Formula( Char( value ) || "in" ), 12 );
:weight << Format( "Custom", Formula( Char( value ) || "lb" ), 12 );
Bivariate( Y( :weight ), X( :height ), Fit Line, SendToReport( Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} ) ) );
Distribution( Continuous Distribution( Column( :weight ) ), Histograms Only( 1 ) );
Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ), SendToReport( Dispatch( {}, "Oneway Anova", OutlineBox, {Close( 1 )} ) ) );
Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ), Overlay( :sex ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Format height column as "Custom".
3. Append "in" to height values.
4. Format weight column as "Custom".
5. Append "lb" to weight values.
6. Create Bivariate plot with weight vs height.
7. Fit linear regression line.
8. Close Linear Fit outline box.
9. Generate distribution report for weight.
10. Display histograms only for weight.



## Bivariate using Subset
### Example 1
> **Summary**: Subsets data and visualization by sex, selecting specific columns, linking to the original table, and creating a bivariate plot with grouping by age.

<!-- Keywords: #JSLScriptingLanguage, #DataSubset, #BivariatePlot, #GroupBy, #JMPVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Subset(
	By( :sex ),
	All rows,
	Selected columns only( 0 ),
	columns( :name, :age, :height, :weight ),
	link to original data table( 1 )
);
Bivariate( Y( :height ), X( :height ), By( :age ) );
```

**Code Explanation**:

1. Open data table.
2. Subset data by sex.
3. Select specific columns.
4. Link subset to original.
5. Create Bivariate plot.
6. Set Y variable to height.
7. Set X variable to height.
8. Group by age.



### Example 2
> **Summary**: Creates a subset filter window in JMP, allowing users to interactively filter data by sex and visualize bivariate plots for subsets.

<!-- Keywords: #JMPScriptingLanguage, #DataFilter, #BivariatePlot, #SubsetFilter, #InteractiveAnalysis -->

**Code**:
```jsl
dt5 = Open("data_table.jmp");
subsets = dt5 << Subset( By( :sex ), link to original data table( 1 ) );
win4 = New Window( "subset filter",
	Data Filter Context Box(
		H List Box(
			dt5 << Data Filter( "Local", Add Filter( Columns( :weight ), Where( :weight >= 130 & :weight <= 172 ) ) ),
			V List Box( subsets[1] << Bivariate( Y( :weight ), X( :height ), By( :sex ) ) )
		)
	)
);
text4 = win4[Box( 1 )][Text Box( 1 )] << Get Text;
```

**Code Explanation**:

1. Open data table;
2. Create subsets by sex.
3. Link subsets to original table.
4. Create new window "subset filter".
5. Add data filter context box.
6. Add horizontal list box.
7. Add local data filter for weight.
8. Add vertical list box.
9. Add bivariate plot for subsets.
10. Get text from first text box.



## Bivariate using For Each
> **Summary**: Creates and customizes Bivariate analyses for multiple samples in a data table, applying preset sample settings and setting report titles.

<!-- Keywords: #JSLScriptingLanguage, #BivariateAnalysis, #DataTable, #PresetSamples, #ReportCustomization -->

**Code**:
```jsl
plat_samples = ["Bivariate" => {"Correlation and Summary Statistics", "Fit Line with Confidence Band", "Check Regression Assumptions",
"Compare Linear and Quadratic Fits", "Publication Density Contours", "Linear Model Profiler"}, => {}];
dt = Open("data_table.jmp");
For Each( {sample}, plat_samples["Bivariate"],
	obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
	Eval( Eval Expr( obj << Apply Preset( "Sample Presets", Expr( sample ) ) ) );
	obj << Set Report Title( sample );
);
```

**Code Explanation**:

1. Define preset samples.
2. Open data table.
3. Loop through each sample.
4. Create Bivariate analysis.
5. Apply preset sample settings.
6. Set report title to sample name.
7. Repeat for all samples.



## Bivariate using Contains
> **Summary**: Runs data analysis and visualization by selecting rows, performing one-way analysis, generating a report, and creating a bivariate plot with customized settings.

<!-- Keywords: #JMPScriptingLanguage, #DataAnalysis, #Visualization, #BivariatePlot, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( Contains( :name, "LILLIE" ) );
ow = Oneway( Y( :height ), X( :sex ), Means and Std Dev( 1 ), Mean Error Bars( 1 ), Std Dev Lines( 1 ) );
rpt = ow << Report();
rpt[Framebox( 1 )] << Marker Size( 10 );
Bivariate(
	Y( :height ),
	X( :weight ),
	Fit Line( {Line Color( {212, 73, 88} ), Line Width( 3 )} ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			{Marker Size( 6 ), Marker Drawing Mode( "Normal" ), DispatchSeg( Line Seg( 1 ), {Line Width( 3 )} ),
			DispatchSeg( Marker Seg( 1 ), {Marker Size( 10 )} )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Select rows containing "LILLIE".
3. Perform one-way analysis on height by sex.
4. Get report object.
5. Increase marker size in first frame.
6. Create bivariate plot of height vs weight.
7. Fit a red line with specific color and width.
8. Send report settings to bivariate plot.
9. Adjust marker size and drawing mode.
10. Set line width and marker size for segments.



## Bivariate using Frame Box
### Example 1
> **Summary**: Creates a bivariate analysis to visualize the relationship between weight and height, including a fitted linear regression line.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #LinearRegression, #DataVisualization, #FrameBox -->

**Code**:
```jsl
Open("data_table.jmp");
biv = bivariate( y( :weight ), x( :height ), FitLine );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
```

**Code Explanation**:

1. Open data table.
2. Create bivariate analysis.
3. Set Y variable to weight.
4. Set X variable to height.
5. Fit linear regression line.
6. Retrieve bivariate report.
7. Access first frame box.



### Example 2
> **Summary**: Creates a bivariate plot with a fit line, reporting on the relationship between weight and height in a data table.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #FitLine, #DataTableAnalysis, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = bivariate( y( :weight ), x( :height ), FitLine );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Line Width Scale( 2 );
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Add FitLine to plot.
6. Generate report object.
7. Access first Frame Box.
8. Adjust Line Width Scale to 2.



### Example 3
> **Summary**: Creates and customizes a bivariate plot, including setting the background color to red and manipulating the background fill.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #DataVisualization, #Customization, #JMP -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
biv = bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Background color( "red" );
framebox << Set Background Fill( 0 );
val1 = framebox << Get Background Fill;
framebox << Set Background Fill( 1 );
val2 = framebox << Get Background Fill;
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Retrieve report object.
4. Select first frame box.
5. Set background color to red.
6. Disable background fill.
7. Get background fill value.
8. Enable background fill.
9. Get background fill value again.
10. End script.



### Example 4
> **Summary**: Creates and customizes a bivariate plot in JMP, including opening a data table, generating the report object, selecting the first frame box, and setting its size.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataTable, #FrameBox, #ReportObject -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
biv = dt << bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Frame Size( 300, 300 );
framebox << Frame Size( 100, 100 );
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Get report object.
4. Select first frame box.
5. Set frame size to 300x300.
6. Change frame size to 100x100.



### Example 5
> **Summary**: Creates and customizes a bivariate plot, including selecting the first frame box and setting its transparency.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #FrameBox, #Transparency, #DataVisualization -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
biv = bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Transparency( 0.5 );
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Retrieve bivariate report.
4. Select first frame box.
5. Set frame box transparency.



### Example 6
> **Summary**: Creates a bivariate plot and customizes its appearance by selecting specific rows, changing row colors, and adding markers.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataSelection, #RowCustomization, #FrameBox -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
biv = dt2 << bivariate( y( :score ), x( :count ) );
fbox11 = Report( biv )[Frame Box( 1 )];
dt2 << Select Where( :cheese == "B" );
fbox11 << Row Colors( 6 );
fbox11 << Row Markers( "B" );
dt2 << Clear Select;
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Assign frame box reference.
4. Select rows where cheese is "B".
5. Change selected row colors.
6. Set selected row markers.
7. Clear selection.



### Example 7
> **Summary**: Creates and customizes a bivariate plot for different age groups, using JMP's data manipulation and visualization capabilities.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataVisualization, #ConditionalSelection, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << bivariate( y( weight ), x( height ) );
fbox4 = Report( biv )[Frame Box( 1 )];
dt << Select Where( :age == 12 );
fbox4 << Row Exclude;
fbox4 << Row Colors( 5 ) << Row Markers( 5 );
dt << Clear Select;
dt << Select Where( :age == 13 );
fbox4 << Row Hide;
fbox4 << Row Colors( 10 ) << Row Markers( 10 );
dt << Clear Select;
dt << Select Where( :age == 14 );
fbox4 << Row Label;
fbox4 << Row Colors( 15 ) << Row Markers( 15 );
dt << Clear Select;
dt << Select Where( :age == 15 );
fbox4 << Row Exclude << Row Hide;
fbox4 << Row Colors( 20 ) << Row Markers( 20 );
dt << Clear Select;
dt << Select Where( :age == 16 );
fbox4 << Row Label << Row Hide;
fbox4 << Row Exclude << Row Label;
fbox4 << Row Colors( 25 ) << Row Markers( 25 );
dt << Clear Select;
dt << Select Where( :age == 17 );
fbox4 << Row Colors( 30 ) << Row Markers( 30 );
fbox4 << Row Label << Row Hide;
dt << Clear Select;
dt << Select Where( :name == "KATIE" );
fbox4 << Row Label << Row Hide << Row Exclude;
dt << Clear Select;
rslist = {};
For( i = 1, i <= N Row( dt ), i++,
	Insert Into( rslist, Color Of( Row State( i ) ) );
	Insert Into( rslist, Marker Of( Row State( i ) ) );
	Insert Into( rslist, Labeled( Row State( i ) ) );
	Insert Into( rslist, Excluded( Row State( i ) ) );
	Insert Into( rslist, Hidden( Row State( i ) ) );
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot of weight vs height.
3. Select rows where age is 12.
4. Exclude selected rows from plot.
5. Change row colors and markers to 5.
6. Clear selection.
7. Select rows where age is 13.
8. Hide selected rows in plot.
9. Change row colors and markers to 10.
10. Clear selection.



### Example 8
> **Summary**: Creates and selects a bivariate plot, selecting the first row and setting the second column selected.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #DataTable, #FrameBox, #Selection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
dt << Select Rows( 1 );
Column( 2 ) << Set Selected( 1 );
framebox << Select Matching Cells;
selRows = dt << get selected rows;
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Get report object.
4. Access first frame box.
5. Select first row.
6. Set second column selected.
7. Select matching cells in frame box.
8. Get selected rows.



### Example 9
> **Summary**: Creates and analyzes a bivariate plot to visualize the relationship between weight and height, selecting specific rows and columns for further examination.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #DataSelection, #FrameBox, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
dt << Select Where( Row() == 1 | Row() == 12 );
Column( 4 ) << Set Selected( 1 );
framebox << Select Matching Cells;
selRows = dt << get selected rows;
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot: weight vs height.
3. Get bivariate report object.
4. Access first frame box.
5. Select rows 1 and 12.
6. Select column 4 (weight).
7. Set selected rows' weight values.
8. Select matching cells in frame box.
9. Get selected row indices.



### Example 10
> **Summary**: Creates and customizes a bivariate plot report in JMP, including cloning and appending frames with specific background colors.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #ReportObject, #FrameBox, #BackgroundColor -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
biv = dt << bivariate( y( weight ), x( height ) );
rbiv1 = biv << report;
rbiv2 = rbiv1 << Clone Box;
rbiv1 << append( rbiv2 );
framebox1 = rbiv1[Frame Box( 1 )];
framebox2 = rbiv2[Frame Box( 1 )];
framebox1 << Background Color( "green" );
framebox1 << Copy Frame Settings;
framebox2 << Paste Frame Settings;
bc = framebox2 << Get Background Color;
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Generate report object.
4. Clone first box.
5. Append cloned box.
6. Select first frame box.
7. Select second frame box.
8. Set background color green.
9. Copy frame settings.
10. Paste frame settings.



### Example 11
> **Summary**: Creates and customizes a bivariate plot, cloning and appending report boxes to visualize relationships between 'weight' and 'height' variables.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #ReportBox, #DataVisualization, #Customization -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
biv = dt << bivariate( y( weight ), x( height ) );
rbiv1 = biv << report;
rbiv2 = rbiv1 << Clone Box;
rbiv1 << append( rbiv2 );
framebox1 = rbiv1[Frame Box( 1 )];
framebox2 = rbiv2[Frame Box( 1 )];
framebox1 << Marker Drawing Mode( "outlined" );
framebox1 << Copy Customizations;
framebox2 << Paste Customizations;
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Get report object.
4. Clone report box.
5. Append cloned box.
6. Select first frame box.
7. Select cloned frame box.
8. Set marker drawing mode.
9. Copy customizations.
10. Paste customizations.



### Example 12
> **Summary**: Creates and customizes a bivariate plot, including fitting a linear regression line and cloning report boxes.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #LinearRegression, #ReportCustomization, #DataVisualization -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
biv = dt << bivariate( y( weight ), x( height ) );
rbiv1 = biv << report;
rbiv2 = rbiv1 << Clone Box;
rbiv1 << append( rbiv2 );
framebox1 = rbiv1[Frame Box( 1 )];
framebox2 = rbiv2[Frame Box( 1 )];
biv << Fit Line;
Report( biv )[framebox( 1 )] << DispatchSeg( Line Seg( 1 ), {Line Color( "blue" )} );
framebox1 << Copy Frame Contents;
framebox2 << Paste Frame Contents;
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Generate initial report.
4. Clone report box.
5. Append cloned box to report.
6. Select first frame box.
7. Select cloned frame box.
8. Fit linear regression line.
9. Change line color to blue.
10. Copy frame contents.
11. Paste frame contents.



### Example 13
> **Summary**: Creates and selects a bivariate analysis report in JMP, utilizing the `bivariate` function to generate a report object.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #ReportGeneration, #DataTableOperations, #FrameBoxSelection -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
biv = bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << select;
framebox << deselect;
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate analysis.
3. Generate report object.
4. Select first frame box.
5. Deselect the frame box.



### Example 14
> **Summary**: Creates and customizes a bivariate plot for weight vs. height, applying filters and labels based on age and name conditions.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataFiltering, #RowLabeling, #ColumnManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << bivariate( y( weight ), x( height ) );
fbox4 = Report( biv )[Frame Box( 1 )];
dt << Select Where( :age == 12 );
fbox4 << Row Exclude;
dt << Clear Select;
dt << Select Where( :age == 13 );
fbox4 << Row Hide;
dt << Clear Select;
dt << Select Where( :age == 14 );
fbox4 << Row Label;
dt << Clear Select;
dt << Select Where( :age == 15 );
fbox4 << Row Exclude << Row Hide;
dt << Clear Select;
dt << Select Where( :age == 16 );
fbox4 << Row Label << Row Hide;
fbox4 << Row Exclude << Row Label( 0 );
dt << Clear Select;
dt << Select Where( :age == 17 );
fbox4 << Row Label << Row Hide;
dt << Clear Select;
dt << Select Where( :name == "KATIE" );
fbox4 << Row Label << Row Hide << Row Exclude( 1 );
dt << Clear Select;
col = dt << New Column( "Rstate", rowstate );
col << Copy from Row States;
col << data type( numeric );
vals = col << get values;
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot for weight vs. height.
3. Select Frame Box 1.
4. Exclude rows where age is 12.
5. Clear selection.
6. Hide rows where age is 13.
7. Clear selection.
8. Label rows where age is 14.
9. Clear selection.
10. Exclude and hide rows where age is 15.
11. Label and hide rows where age is 16.
12. Exclude and label rows where age is 16.
13. Hide rows where age is 17.
14. Label, hide, and exclude row for name "KATIE".
15. Clear selection.
16. Create new column "Rstate" for row states.
17. Copy row states to "Rstate" column.
18. Change "Rstate" column data type to numeric.
19. Get values from "Rstate" column.



### Example 15
> **Summary**: Creates a bivariate plot and row labeling, with filtering by age and gender, using JMP's data manipulation capabilities.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #Filtering, #RowLabeling, #BivariatePlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << bivariate( y( weight ), x( height ) );
fbox5 = Report( biv )[Frame Box( 1 )];
dt << Select Where( :age == 12 & :sex == "F" );
fbox5 << Row Label;
rownums = 1 :: 8;
compare = {};
For( i = 1, i <= N Col( rownums ), i++,
	Insert Into( compare, Labeled( Row State( i ) ) )
);
dt << Select Where( :age == 12 );
fbox5 << Row Label;
compare2 = {};
For( i = 1, i <= N Col( rownums ), i++,
	Insert Into( compare2, Labeled( Row State( i ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Access first frame box.
4. Select rows by age and gender.
5. Apply row labels.
6. Define row numbers.
7. Initialize comparison list.
8. Loop through rows.
9. Add labeled states to list.
10. Select rows by age only.
11. Apply row labels again.
12. Initialize second comparison list.
13. Loop through rows again.
14. Add labeled states to second list.



### Example 16
> **Summary**: Selects and excludes rows in a data table based on specific conditions, generating two lists for comparison.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #RowSelection, #Exclusion, #Comparison -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << bivariate( y( weight ), x( height ) );
fbox6 = Report( biv )[Frame Box( 1 )];
dt << Select Where( :age == 13 & :sex == "F" );
fbox6 << Row Exclude;
rownums = [9, 10, 11, 12, 13, 14, 15];
compareE = {};
For( i = 1, i <= N Row( rownums ), i++,
	Insert Into( compareE, Excluded( Row State( rownums[i] ) ) )
);
dt << Select Where( :age == 13 );
fbox6 << Row Exclude;
compare2E = {};
For( i = 1, i <= N Row( rownums ), i++,
	Insert Into( compare2E, Excluded( Row State( rownums[i] ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Select frame box 1.
4. Select rows where age is 13 and sex is "F".
5. Exclude selected rows.
6. Define row numbers array.
7. Initialize empty list compareE.
8. Loop through row numbers.
9. Check if rows are excluded.
10. Select rows where age is 13.
11. Exclude selected rows.
12. Initialize empty list compare2E.
13. Loop through row numbers.
14. Check if rows are excluded.



### Example 17
> **Summary**: Selects and hides specific rows in a bivariate plot, utilizing row numbers and conditional logic.

<!-- Keywords: #JSLScripting, #BivariatePlot, #RowSelection, #DataManipulation, #ConditionalLogic -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << bivariate( y( weight ), x( height ) );
fbox7 = Report( biv )[Frame Box( 1 )];
dt << Select Where( :age == 14 & :sex == "F" );
fbox7 << Row Hide;
rownums = 16 :: 27;
compareH = {};
For( i = 1, i <= N Col( rownums ), i++,
	Insert Into( compareH, Hidden( Row State( rownums[i] ) ) )
);
dt << Select Where( :age == 14 );
fbox7 << Row Hide;
compare2H = {};
For( i = 1, i <= N Col( rownums ), i++,
	Insert Into( compare2H, Hidden( Row State( rownums[i] ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Access first frame box.
4. Select specific rows.
5. Hide selected rows.
6. Define row number range.
7. Initialize empty list.
8. Loop through row numbers.
9. Check row hidden state.
10. Compare hidden states.



### Example 18
> **Summary**: Creates a bivariate plot with a row legend for age, utilizing data from 'data_table.jmp'.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #RowLegend, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Row Legend( "age", color( 0 ), Marker( 0 ) );
color1 = {};
For( i = 1, i <= N Row( dt ), i++,
	Insert Into( color1, Color Of( Row State( i ) ) )
);
```

**Code Explanation**:

1. Open data_table data
2. Create bivariate plot.
3. Get bivariate report.
4. Select first frame box.
5. Add row legend for age.
6. Initialize color1 list.
7. Loop through each row.
8. Get row state color.
9. Insert color into color1.
10. End loop.



### Example 19
> **Summary**: Creates a bivariate plot with row legend for age, utilizing JMP's reporting capabilities and data manipulation features.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #RowLegend, #DataManipulation, #Reporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Row Legend( "age", color( 1 ), Marker( 0 ) );
color2 = {};
For( i = 1, i <= N Row( dt ), i++,
	Insert Into( color2, Color Of( Row State( i ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create Bivariate plot.
3. Get Bivariate report.
4. Select first Frame Box.
5. Add Row Legend for age.
6. Initialize color list.
7. Loop through each row.
8. Get row state color.
9. Insert color into list.
10. End loop.



### Example 20
> **Summary**: Creates a bivariate plot with a row legend for age, utilizing data from an open JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #RowLegend, #DataTable, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Row Legend( "age", color( 2 ), Marker( 0 ) );
color3 = {};
For( i = 1, i <= N Row( dt ), i++,
	Insert Into( color3, Color Of( Row State( i ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create Bivariate plot.
3. Get report object.
4. Select first frame box.
5. Add row legend for age.
6. Initialize color list.
7. Loop through rows.
8. Get row state color.
9. Insert color into list.
10. End loop.



### Example 21
> **Summary**: Creates a bivariate plot with row legend and color palette from a data table, utilizing JMP's reporting capabilities.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataVisualization, #RowLegend, #ColorPalette -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Row Legend( "age", color( -1 ), Marker( 0 ) );
color4 = {};
For( i = 1, i <= N Row( dt ), i++,
	Insert Into( color4, Color Of( Row State( i ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Retrieve Bivariate report.
4. Access first Frame Box.
5. Add Row Legend for "age".
6. Initialize empty list `color4`.
7. Loop through each row.
8. Insert row state color into `color4`.



### Example 22
> **Summary**: Creates a bivariate plot with row legend for age, utilizing data from an open JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataTable, #RowLegend, #MarkerList -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Row Legend( "age", color( 0 ), Marker( 1 ) );
marker2 = {};
For( i = 1, i <= N Row( dt ), i++,
	Insert Into( marker2, Marker Of( Row State( i ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Get report object.
4. Select first frame box.
5. Add row legend for age.
6. Initialize marker list.
7. Loop through all rows.
8. Get marker state of each row.
9. Insert marker states into list.
10. End loop.



### Example 23
> **Summary**: Creates a bivariate analysis report, including adding a row legend for age and storing marker states in a list.

<!-- Keywords: #JSLScripting, #BivariateAnalysis, #DataVisualization, #JMP, #MarkerStates -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Row Legend( "age", color( 0 ), Marker( 2 ) );
marker3 = {};
For( i = 1, i <= N Row( dt ), i++,
	Insert Into( marker3, Marker Of( Row State( i ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create Bivariate analysis.
3. Retrieve report object.
4. Access first Frame Box.
5. Add row legend for age.
6. Initialize marker3 list.
7. Loop through each row.
8. Get marker state of row.
9. Insert marker state into marker3.
10. End loop.



### Example 24
> **Summary**: Creates a bivariate plot with a row legend for age, using data from an open table.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #RowLegend, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Row Legend( "age", color( 0 ), Marker( -1 ) );
marker4 = {};
For( i = 1, i <= N Row( dt ), i++,
	Insert Into( marker4, Marker Of( Row State( i ) ) )
);
```

**Code Explanation**:

1. Open table.
2. Create Bivariate plot.
3. Get report object.
4. Select first frame box.
5. Add row legend for age.
6. Initialize marker list.
7. Loop through rows.
8. Get marker state for each row.
9. Insert marker into list.
10. End loop.



## Bivariate using Column
### Example 1
> **Summary**: Creates a bivariate plot with fit lines for females and males based on height and weight data, utilizing value labels for gender.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #ValueLabels, #FitLines, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
col = Column( dt under test, "sex" );
col << Set Name( "gender with Value Labels" );
col << Value Labels( {"F" = "Females", "M" = "Males"} );
col << Use Value Labels( 1 );
obj = dt under test << Bivariate(
	Y( :height ),
	X( :weight ),
	Fit Where( :gender with Value Labels == "F", Fit Line ),
	Fit Where( :gender with Value Labels == "M", Fit Line )
);
```

**Code Explanation**:

1. Open data table;
2. Select "sex" column.
3. Rename column to "gender with Value Labels".
4. Assign value labels "Females" and "Males".
5. Enable value labels.
6. Create Bivariate plot.
7. Set Y axis to height.
8. Set X axis to weight.
9. Fit line for females.
10. Fit line for males.



### Example 2
> **Summary**: Creates a bivariate plot with mahalanobis distances to analyze correlations between height and weight, grouped by age.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #MahalanobisDistance, #CorrelationAnalysis, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "name" ) << Set Selected;
Column( dt, "name" ) << Label( 0 );
dt << Select all rows;
dt << Label;
dt << Clear Select;
biv = dt << Bivariate( Y( :height ), X( :weight ), By( :age ) );
labelList = {};
```

**Code Explanation**:

1. Open data table;
2. Select "name" column.
3. Unlabel "name" column.
4. Select all rows.
5. Label selected rows.
6. Clear row selection.
7. Create Bivariate plot.
8. Set Y to height.
9. Set X to weight.
10. Group by age.



### Example 3
> **Summary**: Selects and excludes rows based on brand, then generates a bivariate plot with customized settings for color and marker.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #BivariatePlotting, #Customization, #RowSelection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( "brand" ) << Set Property(
	"Value Colors",
	{"Adams & Brooks" = -7306931, "Annabelle" = -13654875, "Bit-O-Honey" = -6727072, "Brown & Haley" = -11109979, "Charms" = -11962829,
	"Hershey" = -12293057, "Just Born" = -12688822, "Leaf" = -13019051, "M&M/Mars" = -13415071, "Myerson" = -13745300, "Nabisco" =
	-14141065, "Nestle" = -14537086, "Pearson" = -9282864, "Sherwood" = -6995852, "Standard" = -1524612, "Tobler" = -9458080, "Tootsie" =
	-14452073, "Weider" = -6391856}
);
dt << select where( :brand == "Hershey" );
dt << Exclude;
dt << clear select;
op = dt << Bivariate(
	X( :Total fat g ),
	Y( :Calories ),
	Separate Axes( 1 ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			{Row Legend(
				Brand,
				Color( 1 ),
				Color Theme( "" ),
				Marker( 1 ),
				Marker Theme( "Solid" ),
				Continuous Scale( 0 ),
				Reverse Scale( 0 ),
				Excluded Rows( 1 )
			)}
		)
	)
);
rstate = {};
For( i = 1, i <= N Row( dt ), i++,
	Insert Into( rstate, Color Of( Row State( i ) ) );
	Insert Into( rstate, Marker Of( Row State( i ) ) );
);
```

**Code Explanation**:

1. Open data table.
2. Set value colors for brands.
3. Select rows where brand is Hershey.
4. Exclude selected rows.
5. Clear selection.
6. Create bivariate plot.
7. Configure bivariate plot settings.
8. Initialize row state list.
9. Loop through each row.
10. Insert row color and marker into list.



### Example 4
> **Summary**: Configures a Bivariate plot with a framebox row legend and custom color scheme, while also storing row states for further analysis.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #FrameboxLegend, #CustomColorScheme, #RowStates -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << Set Property(
	"Value Colors",
	{51 = -16774640, 52 = -16180962, 55 = -15587541, 56 = -14993863, 58 = -14400442, 59 = -13806765, 60 = -13213343, 61 = -12619922, 62 =
	-12026245, 63 = -11432823, 64 = -10839146, 65 = -10245725, 66 = -9652303, 67 = -9058626, 68 = -8465205, 69 = -7871527, 70 = -6750221}
);
biv = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Report( biv )[framebox( 1 )] << Row Legend(
	height,
	Color( 1 ),
	Color Theme( "" ),
	Marker( 1 ),
	Marker Theme( "Alphanumeric" ),
	Continuous Scale( 0 ),
	Reverse Scale( 1 ),
	Excluded Rows( 0 )
);
rstate = {};
For( i = 1, i <= N Row( dt ), i++,
	Insert Into( rstate, Color Of( Row State( i ) ) );
	Insert Into( rstate, Marker Of( Row State( i ) ) );
);
```

**Code Explanation**:

1. Open data table;
2. Set "height" column colors.
3. Create Bivariate plot.
4. Configure framebox row legend.
5. Initialize rstate list.
6. Loop through rows.
7. Insert row state color.
8. Insert row state marker.
9. End loop.
10. Store row states.



### Example 5
> **Summary**: Vizualizes a bivariate plot with 'weight' vs 'height', configuring row legend and color properties, while also tracking row states.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #RowLegend, #ColorProperties, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << Set Property(
	"Value Colors",
	{51 = -13977687, 52 = -3780931, 55 = -4222943, 56 = -13596966, 58 = -12877872, 59 = -12224314, 60 = -11570756, 61 = -10917198, 62 =
	-10263641, 63 = -9610083, 64 = -8956525, 65 = -8302967, 66 = -7649409, 67 = -6995852, 68 = -1524612, 69 = -9458080, 70 = -14452073}
);
biv = dt << Bivariate( Y( :weight ), X( :height ), Fit Line );
Report( biv )[framebox( 1 )] << Row Legend(
	height,
	Color( 1 ),
	Color Theme( "" ),
	Marker( 1 ),
	Marker Theme( "Standard" ),
	Continuous Scale( 0 ),
	Reverse Scale( 1 ),
	Excluded Rows( 0 )
);
rstate = {};
For( i = 1, i <= N Row( dt ), i++,
	Insert Into( rstate, Color Of( Row State( i ) ) );
	Insert Into( rstate, Marker Of( Row State( i ) ) );
);
```

**Code Explanation**:

1. Open data table.
2. Set color property for "height" column.
3. Create bivariate plot with "weight" vs "height".
4. Configure row legend for framebox.
5. Initialize empty list for row states.
6. Loop through each row in the table.
7. Insert color state into list.
8. Insert marker state into list.
9. End loop.
10. Store row states in variable.



## Bivariate using Preferences
> **Summary**: Runs a Bivariate analysis with multiple fit lines, including linear regression, mean, spline, and orthogonal regression, on the 'weight' variable against the 'height' variable in a data table.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #FitLines, #DataVisualization, #StatisticalModeling -->

**Code**:
```jsl
Preferences( Line Width( 5 ) );
dt = Open("data_table.jmp");
plat = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {213, 72, 87} ), Line Width( 1 )} ),
	Fit Mean( {Line Color( {57, 177, 67} ), Line Width( 1 )} ),
	Fit Spline( 10, {Line Color( {64, 111, 223} ), Line Width( 1 )} ),
	Fit Orthogonal( Univariate Variances, {Line Color( {207, 121, 38} ), Line
Width( 1 )} )
);
plat << Redo Analysis;
```

**Code Explanation**:

1. Set line width preference.
2. Open data table.
3. Launch Bivariate analysis.
4. Set Y variable to weight.
5. Set X variable to height.
6. Fit linear regression line.
7. Fit mean line.
8. Fit spline line.
9. Fit orthogonal regression line.
10. Redo the analysis.



## Bivariate using Select Where
### Example 1
> **Summary**: Analyze a bivariate relationship between weight and height, generating two special models with customized plots and line colors.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #SpecialModels, #PlotCustomization, #DataSelection -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
dt undertest << Select Where( And( :weight >= 120, :height >= 60 ) );
obj = Bivariate(
	Y( :height ),
	X( :weight ),
	Fit Special( Intercept( 0 ), {Plot Residuals( 1 ), Line Color( "Medium Light Green" )} ),
	Fit Special( yTran( "Square" ), {Line Color( "Purple" )} )
);
```

**Code Explanation**:

1. Open data table.
2. Select rows where weight >= 120.
3. Select rows where height >= 60.
4. Create Bivariate object.
5. Set Y variable to height.
6. Set X variable to weight.
7. Fit special model with zero intercept.
8. Plot residuals in green.
9. Fit special model with square transformation.
10. Set square model line color to purple.



### Example 2
> **Summary**: Creates and customizes a bivariate plot for a specific age group, utilizing JMP's reporting features to visualize relationships between weight and height.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataVisualization, #Customization, #Reporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[framebox( 1 )];
dt << Select Where( :age == 12 );
framebox << Row Exclude;
framebox << Row Legend(
	:age,
	Color( 1 ),
	Color Theme( "SAS Default" ),
	Marker( 1 ),
	Marker Theme( "Paired" ),
	Continuous Scale( 0 ),
	Reverse Scale( 0 ),
	Excluded Rows( 0 ), 
);
framebox << Row Legend(
	:age,
	Color( 1 ),
	Color Theme( "SAS Default" ),
	Marker( 1 ),
	Marker Theme( "Paired" ),
	Continuous Scale( 0 ),
	Reverse Scale( 0 ),
	Excluded Rows( 1 ), 
);
```

**Code Explanation**:

1. Open data table.
2. Create Bivariate plot.
3. Get Bivariate report.
4. Access first frame box.
5. Select rows where age is 12.
6. Exclude selected rows from frame.
7. Set row legend for age.
8. Repeat setting row legend for age.
9. Include excluded rows in legend.
10. Finalize row legend settings.



### Example 3
> **Summary**: Creates a bivariate plot and sets row colors for selected data rows, specifically filtering by age 14.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataFiltering, #RowColors, #JSLScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = bivariate( y( weight ), x( height ) );
dt << Select Where( :age == 14 );
fbox3 = Report( biv )[Frame Box( 1 )];
fbox3 << Row Colors( 84 );
dt << Clear Select;
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Select rows where age is 14.
4. Access first frame box.
5. Set row colors to 84.
6. Clear row selection.



### Example 4
> **Summary**: Creates a bivariate plot with row colors applied to selected rows, based on specific conditions in the data table.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #RowColors, #DataTableOperations, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << bivariate( y( weight ), x( height ) );
dt << Select Where( :age == 16 );
fbox5 = Report( biv )[Frame Box( 1 )];
fbox5 << Row Colors( -100 );
dt << Clear Select;
```

**Code Explanation**:

1. Open data table;
2. Create Bivariate plot.
3. Set Y variable to weight.
4. Set X variable to height.
5. Select rows where age is 16.
6. Get first Frame Box from report.
7. Apply row colors to selected rows.
8. Clear row selection.



### Example 5
> **Summary**: Creates a bivariate plot with row filtering and customization, utilizing JMP's data manipulation capabilities.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataFiltering, #RowCustomization, #JMPDataManipulation -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
biv = dt2 << bivariate( y( :score ), x( :count ) );
dt2 << Select Where( :cheese == "A" );
fbox6 = Report( biv )[Frame Box( 1 )];
fbox6 << Row Colors( 8 );
fbox6 << Row Markers( 0 );
dt2 << Clear Select;
```

**Code Explanation**:

1. Open table.
2. Create Bivariate plot.
3. Select rows where cheese is "A".
4. Get Frame Box 1 report.
5. Set row colors to blue.
6. Disable row markers.
7. Clear row selection.



### Example 6
> **Summary**: Creates a bivariate plot with row colors and markers, filtered by rows where cheese is 'D', using JMP's data manipulation capabilities.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataFiltering, #RowColors, #FrameBox -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
biv = dt2 << bivariate( y( :score ), x( :count ) );
dt2 << Select Where( :cheese == "D" );
fbox13 = Report( biv )[Frame Box( 1 )];
fbox13 << Row Colors( 8 );
fbox13 << Row Markers( "\!U004C" );
dt2 << Clear Select;
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Select rows where cheese is "D".
4. Get first frame box report.
5. Set row colors to blue.
6. Set row markers to circle.
7. Clear selected rows.



### Example 7
> **Summary**: Creates and analyzes a bivariate plot for weight vs height, selecting specific rows and columns, and retrieving matching cells from the report.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataTableManipulation, #ReportGeneration, #SelectionOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << bivariate( y( weight ), x( height ) );
rbiv = biv << report;
dt << Select Where( Row() == 8 | Row() == 20 );
Column( dt, "name" ) << Set Selected( 1 );
framebox = rbiv[Frame Box( 1 )];
framebox << Select Matching Cells;
selRows = dt << get selected rows;
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot: weight vs height.
3. Get report of bivariate plot.
4. Select rows 8 and 20.
5. Select "name" column.
6. Get first frame box from report.
7. Select matching cells in frame box.
8. Retrieve selected rows from data table.



### Example 8
> **Summary**: Creates a bivariate plot with customized row legend and color scheme, selecting specific rows based on age criteria.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #RowLegend, #Customization, #DataSelection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[framebox( 1 )];
dt << Select Where( :age == 12 );
framebox << Row Exclude;
framebox << Row Legend(
	:age,
	Color( 1 ),
	Color Theme( "SAS Default" ),
	Marker( 1 ),
	Marker Theme( "Paired" ),
	Continuous Scale( 0 ),
	Reverse Scale( 0 ),
	Excluded Rows( 0 ), 
);
rstate = {};
For( i = 1, i <= N Row( dt ), i++,
	Insert Into( rstate, Color Of( Row State( i ) ) );
	Insert Into( rstate, Marker Of( Row State( i ) ) );
);
```

**Code Explanation**:

1. Open data_table data
2. Create bivariate plot.
3. Get report object.
4. Access first frame box.
5. Select rows where age is 12.
6. Exclude selected rows from plot.
7. Configure row legend for age.
8. Initialize empty list rstate.
9. Loop through all rows.
10. Insert color and marker states into rstate.



### Example 9
> **Summary**: Creates a bivariate plot with row legend and exclusion of specific rows, utilizing JMP's data manipulation and visualization capabilities.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataVisualization, #RowLegend, #DataExclusion -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[framebox( 1 )];
dt << Select Where( :age == 13 );
framebox << Row Exclude;
framebox << Row Legend(
	:age,
	Color( 1 ),
	Color Theme( "Pastel" ),
	Marker( 1 ),
	Marker Theme( "Alphanumeric" ),
	Continuous Scale( 0 ),
	Reverse Scale( 0 ),
	Excluded Rows( 1 ), 
);
rstate = {};
For( i = 1, i <= N Row( dt ), i++,
	Insert Into( rstate, Color Of( Row State( i ) ) );
	Insert Into( rstate, Marker Of( Row State( i ) ) );
	Insert Into( rstate, Excluded( Row State( i ) ) );
);
```

**Code Explanation**:

1. Open data table;
2. Create bivariate plot.
3. Get bivariate report.
4. Select first framebox.
5. Select rows where age is 13.
6. Exclude selected rows from plot.
7. Add row legend for age.
8. Initialize empty list for row states.
9. Loop through each row in dataset.
10. Insert row state into list.



## Bivariate using ASSOCIATIONANALYSIS
> **Summary**: Executes various data analysis launchers, opening two data tables and iterating through each launcher to perform respective analyses.

<!-- Keywords: #JSLScripting, #DataAnalysisAutomation, #Launchers, #JMP, #DataScience -->

**Code**:
```jsl
launchers = {ASSOCIATIONANALYSIS(), AUGMENTDESIGN(), BIVARIATE(), BOOSTEDTREE(), BOOTSTRAPFOREST(), BUBBLEPLOT(), CAPABILITY(),
CATEGORICAL(), CELLPLOT(), CHOICE(), CLUSTERVARIABLES(), COMPAREDESIGNS(), CONTINGENCY(), CONTROLCHART(), CUSUMCONTROLCHART(), DIAGRAM()
 << Relaunch Analysis << Close Window, DECISIONTREE(), DISTRIBUTION(), EMPMEASUREMENTSYSTEMSANALYSIS(), EVALUATEDESIGN(),
EXPLOREMISSINGVALUES(), EXPLOREOUTLIERS(), FACTORANALYSIS(), FITCURVE(), FITDEFINITIVESCREENING(), FITLIFEBYX(), FITMODEL(),
FITTWOLEVELSCREENING(), FITYBYX(), FUNCTIONALDATAEXPLORER(), GAUSSIANPROCESS(), HIERARCHICALCLUSTER(), ITEMANALYSIS(), KMEANSCLUSTER(),
KNEARESTNEIGHBORS(), LATENTCLASSANALYSIS(), LIFEDISTRIBUTION(), LOGISTIC(), MANAGESPECLIMITS(), MATCHEDPAIRS(), MAXDIFFDESIGN(),
MISSINGDATAPATTERN(), MIXTUREPROFILER(), MODELDRIVENMULTIVARIATECONTROLCHART(), MULTIDIMENSIONALSCALING(), MULTIPLECORRESPONDENCEANALYSIS(),
MULTIPLEFACTORANALYSIS(), MULTIVARIATE(), MULTIVARIATECONTROLCHART(), MULTIVARIATEEMBEDDING(), NAIVEBAYES(), NEURAL(), NONLINEAR(),
NONLINEARDESIGN(), NORMALMIXTURES(), ONEWAY(), PARALLELPLOT(), PARETOPLOT(), PARTIALLEASTSQUARES(), PREDICTORSCREENING(),
PROCESSCAPABILITY(), PROCESSHISTORYEXPLORER(), PROCESSSCREENING(), PROFILER(), RECURRENCEANALYSIS(), RELIABILITYFORECAST(),
RELIABILITYGROWTH(), RESPONSESCREENING(), SCATTERPLOT3D(), SCATTERPLOTMATRIX(), STRUCTURALEQUATIONMODELS(), SURVIVAL(), TERNARYPLOT(),
TEXTEXPLORER(), TIMESERIES(), TIMESERIESFORECAST(), UPLIFT(), VARIABILITYCHART(), MARKERSTATISTICS(), MARKERSIMULATION(),
MARKERRELATEDNESS(), MARKERADMIXTURE(), NORMALIZATION(), DISTANCEMATRIX(), CONCATENATE(), JOIN(), SORT(), SPLIT(), STACK(), SUBSET(),
SUMMARY(), UPDATE(), MAKEVALIDATIONCOLUMN()};
dt1 = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
For Each( {e}, launchers, e );
```

**Code Explanation**:

1. Define launchers list.
2. Open data table;
3. Open data table;
4. Iterate through each launcher.
5. Execute each analysis launcher.



## Bivariate using Control Chart Builder
> **Summary**: Creates and customizes control charts and bivariate plots for a specific dataset, utilizing local data filters and interactive features.

<!-- Keywords: #JSLScripting, #ControlChartBuilder, #BivariatePlot, #LocalDataFilter, #InteractiveFeatures -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart Builder( Variables( Y( :height ) ) );
ldf = obj << Local Data Filter(
	Location( {0, 175} ),
	Add Filter( columns( :age ), Where( :age == 12 ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
If( Host is( windows ),
	ww = Window( "data_table - Control Chart Builder" ),
	ww = Window( "data_table - Control Chart Builder" )
);
ww[checkboxbox( 1 )] << Set( 1, 0 );
dt << Select Rows( [34, 35, 36, 37, 38] );
ww << Close Window;
dt << Clear Select;
biv = dt << Bivariate( Y( :weight ), X( :height ), Automatic Recalc( 1 ), Fit Line( {Line Color( {213, 72, 87} )} ) );
ldf3 = biv << Local Data Filter(
	Location( {241, 104} ),
	Mode( Select( 0 ), Include( 1 ) ),
	Add Filter( columns( :age ), Where( :age == 12 ) )
);
If( Host is( windows ),
	ww = Window( "data_table - Bivariate of weight by height" ),
	ww = Window( "data_table - Bivariate of weight by height" )
);
ww[checkboxbox( 1 )] << Set( 1, 0 );
dt << Select Rows( [17] );
```

**Code Explanation**:

1. Open data table;
2. Create control chart for height.
3. Add local data filter for age 12.
4. Check if host is Windows.
5. Get control chart window.
6. Disable data filter checkbox.
7. Select specific rows in dataset.
8. Close control chart window.
9. Clear row selection.
10. Create bivariate plot for weight vs height.
11. Add local data filter for age 12.
12. Check if host is Windows.
13. Get bivariate plot window.
14. Disable data filter checkbox.
15. Select specific row in dataset.



## Bivariate using Distribution
> **Summary**: Runs the generation and saving of a distribution analysis presentation, including a bivariate plot, using data from a specified JMP table.

<!-- Keywords: #JMPScriptingLanguage, #DistributionAnalysis, #BivariatePlot, #PresentationGeneration, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
dis = Distribution( Continuous Distribution( Column( :weight ) ), Nominal Distribution( Column( :age ) ) );
dis << Save Presentation( "$desktop/jmp_example.pptx" );
rbiv = bivariate( y( :weight ), x( :height ) );
rbiv << Save Presentation( "$desktop/jmp_example.pptx", replace( End ) );
```

**Code Explanation**:

1. Open data table.
2. Generate distribution analysis.
3. Save distribution to PPTX.
4. Create bivariate plot.
5. Append bivariate to PPTX.



## Bivariate using New Script
> **Summary**: Creates and analyzes a new table 'Rerun Test' with numerical columns, performs bivariate analysis on 'Number' vs 'Square', and deletes a column.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #BivariateAnalysis, #ColumnManagement, #DataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Current Data Table() << New Script( "test", Current Data Table():Name( "Matrix Row" ) << Delete Formula );
var = Collapse Whitespace( Char( dt << get property( "test" ) ) );
Close( dt, "nosave" );
dt = New Table( "Rerun Test",
	New Column( "Number", "Numeric", "Continuous", Set Values( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ) ),
	New Column( "Square", "Numeric", "Continuous", Formula( :Number ^ 2 ) ),
	New Column( "DeleteMe", "Expression" )
);
For( i = 1, i <= N Rows( dt ), i++,
	dt:Number[i] += 1
);
dt << delete column( dt:DeleteMe );
biv = Report( dt << Bivariate( X( dt:Number ), Y( dt:Square ), Fit Polynomial( 2, {Line Color( {213, 72, 87} )} ) ) );
```

**Code Explanation**:

1. Open data table;
2. Delete formula from "Matrix Row".
3. Get property "test" content.
4. Close data_table.jmp without saving.
5. Create new table "Rerun Test".
6. Add "Number" column with values 1-10.
7. Add "Square" column with squared values.
8. Add "DeleteMe" expression column.
9. Increment each "Number" value by 1.
10. Delete "DeleteMe" column.
11. Perform bivariate analysis on "Number" vs "Square".



## Bivariate using Summarize
> **Summary**: Creates a bivariate plot to visualize the relationship between height and weight for females in different age groups, utilizing By Groups and SendToByGroup.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlot, #ByGroups, #SendToByGroup, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Summarize( g = By( dt:sex ) );
biv = dt << Bivariate(
	SendToByGroup( {:sex == "F"} ),
	Y( :height ),
	X( :weight ),
	Fit Where( :age == 12, Fit Line( {Line Color( {102, 114, 224} )} ) ),
	Fit Where( :age == 13, Fit Line( {Line Color( {152, 157, 203} )} ) ),
	Fit Where( :age == 14, Fit Line( {Line Color( {192, 192, 192} )} ) ),
	Fit Where( :age == 15, Fit Line( {Line Color( {199, 145, 145} )} ) ),
	Fit Where( :age == 16, Fit Line( {Line Color( {219, 84, 84} )} ) ),
	Fit Where( :age == 17, Fit Line( {Line Color( {252, 11, 11} )} ) ),
	By( :sex )
);
biv << SendToByGroup(
	{:sex == Eval( g[2] )},
	SendToReport(
		Dispatch( {Eval( "Bivariate Fit of height By weight sex=" || g[2] )}, "2", ScaleBox,
			{Add Ref Line( 61.25, Solid, "Black", "", 2 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Summarize data by sex.
3. Create Bivariate plot.
4. Filter for female group.
5. Set height as Y variable.
6. Set weight as X variable.
7. Fit line for age 12.
8. Fit line for age 13.
9. Fit line for age 14.
10. Add reference line for females.



## Bivariate using Select Rows
> **Summary**: Creates and analyzes a bivariate plot, selecting similar elements and retrieving selected rows in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataSelection, #FrameBox, #ReportObject -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << bivariate( y( weight ), x( height ) );
rbiv = biv << report;
dt << Select Rows( 1 );
Column( 3 ) << Set Selected( 1 );
framebox = rbiv[Frame Box( 1 )];
framebox << Select Similar;
selRows = dt << get selected rows;
```

**Code Explanation**:

1. Open data table.
2. Create bivariate plot.
3. Retrieve report object.
4. Select first row.
5. Set selection on third column.
6. Access first frame box.
7. Select similar elements.
8. Get selected rows.



## Bivariate using Set Property
### Example 1
> **Summary**: Creates a side-by-side bar chart in Graph Builder to visualize mean profit by product line and quarter from the Profit by Product dataset.

<!-- Keywords: #GraphBuilder, #BarChart, #ProfitByProduct, #JSLScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:age << Set Property( "Value Colors", {12 = "red", 13 = "green", 14 = "yellow", 15 = "purple", 16 = "blue", 17 = "cyan"} );
biv = bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[framebox( 1 )];
framebox << Row Legend(
	age,
	Color( 1 ),
	Color Theme( "Value Colors" ),
	Marker( 1 ),
	Marker Theme( "Hollow" ),
	Continuous Scale( 0 ),
	Reverse Scale( 0 ),
	Excluded Rows( 0 ), 
);
rstate = {};
For( i = 1, i <= N Row( dt ), i++,
	Insert Into( rstate, Color Of( Row State( i ) ) );
	Insert Into( rstate, Marker Of( Row State( i ) ) );
);
```

**Code Explanation**:

1. Open data table;
2. Set age value colors.
3. Create bivariate plot.
4. Get bivariate report.
5. Select first framebox.
6. Configure row legend.
7. Initialize row state list.
8. Loop through rows.
9. Insert color state.
10. Insert marker state.



### Example 2
> **Summary**: Creates and customizes a bivariate plot with row legend in JMP, utilizing Set Property to define age value colors and Color Theme.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #RowLegend, #ColorTheme, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:age << Set Property( "Value Colors", {12 = "red", 13 = "green", 14 = "yellow", 15 = "purple", 16 = "blue", 17 = "cyan"} );
biv = bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[framebox( 1 )];
framebox << Row Legend(
	age,
	Color( 1 ),
	Color Theme( "Value Colors" ),
	Marker( 1 ),
	Marker Theme( "Hollow" ),
	Continuous Scale( 0 ),
	Reverse Scale( 0 ),
	Excluded Rows( 0 ), 
);
rstate = {};
For( i = 1, i <= N Row( dt ), i++,
	Insert Into( rstate, Color Of( Row State( i ) ) );
	Insert Into( rstate, Marker Of( Row State( i ) ) );
);
dt = Open("data_table.jmp");
biv = bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[framebox( 1 )];
framebox << Row Legend(
	:age,
	Color( 1 ),
	Color Theme( "Green to Black to Red" ),
	Marker( 1 ),
	Marker Theme( "Solid" ),
	Continuous Scale( 0 ),
	Reverse Scale( 0 ),
	Excluded Rows( 0 ), 
);
rstate = {};
For( i = 1, i <= N Row( dt ), i++,
	Insert Into( rstate, Color Of( Row State( i ) ) );
	Insert Into( rstate, Marker Of( Row State( i ) ) );
);
```

**Code Explanation**:

1. Open data table;
2. Set age value colors.
3. Create bivariate plot.
4. Get bivariate report.
5. Select first framebox.
6. Configure row legend for age.
7. Initialize row state list.
8. Loop through dataset rows.
9. Insert color and marker states.
10. Repeat steps 1-9 with different color theme.



## Bivariate using If
### Example 1
> **Summary**: Analyze a data table by creating a bivariate plot, fitting a linear regression model, and comparing models, while capturing log output.

<!-- Keywords: #JSLScriptingLanguage, #BivariatePlotting, #LinearRegression, #ModelComparison, #LogCapture -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Standard" ),
	dt = Open("data_table.jmp");
	obj = dt << Bivariate( Y( :Calories ), X( :Protein ) );
	obj << Fit Line( {Save Predicteds} );
	Log Capture( obj2 = dt << Model Comparison() );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check JMP version.
2. Open data_table data
3. Create Bivariate plot.
4. Fit linear regression.
5. Save predictions.
6. Compare models.
7. Capture log output.
8. Close data without saving.



### Example 2
> **Summary**: Calculates a correlation coefficient and its confidence interval from a bivariate plot, utilizing JMP's data manipulation capabilities.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #CorrelationCoefficient, #ConfidenceInterval, #DataManipulation -->

**Code**:
```jsl
If( JMP Version() >= "14.0.0",
	dt = Open("data_table.jmp");
	bv = dt << Bivariate( Y( :weight ), X( :height ), Summary Statistics( 1 ) );
	rpt = Report( bv );
	OB = rpt["Summary Statistics"];
	meanx = Mean( Column( dt, "height" ) << GetAsMatrix );
	meany = Mean( Column( dt, "weight" ) << GetAsMatrix );
	dt << New Column( "diff_x", Numeric, Continuous, Formula( :height - meanx ) );
	dt << New Column( "diff_y", Numeric, Continuous, Formula( :weight - meany ) );
	dx = Column( dt, "diff_x" ) << GetAsMatrix;
	dy = Column( dt, "diff_y" ) << GetAsMatrix;
	num = Sum( E Mult( dx, dy ) );
	denom = Sqrt( Sum( E Mult( dx, dx ) ) ) * Sqrt( Sum( E Mult( dy, dy ) ) );
	R = num / denom;
	z = Normal Quantile( 0.975 );
	LL = ((1 + R) / (1 - R) * Exp( -2 * z / Sqrt( 40 - 3 ) ) - 1) / ((1 + R) / (1 - R) * Exp( -2 * z / Sqrt( 40 - 3 ) ) + 1);
	UL = ((1 + R) / (1 - R) * Exp( 2 * z / Sqrt( 40 - 3 ) ) - 1) / ((1 + R) / (1 - R) * Exp( 2 * z / Sqrt( 40 - 3 ) ) + 1);
	bv_heading = Collapse Whitespace( rpt["Summary Statistics"][1][1] << GetText );
	regex_corr = Regex( bv_heading, "Correlation" );
	Sum_Stats = rpt["Summary Statistics"][1][1] << GetAsMatrix;
	corr_rpt = Matrix( Eval List( {Sum_Stats[1, 1], Sum_Stats[1, 2], Sum_Stats[1, 3]} ) );
);
```

**Code Explanation**:

1. Check JMP version.
2. Open data table;
3. Create bivariate plot.
4. Generate report object.
5. Extract summary statistics.
6. Calculate mean height.
7. Calculate mean weight.
8. Add "diff_x" column.
9. Add "diff_y" column.
10. Compute correlation coefficient.



### Example 3
> **Summary**: Runs data cleaning and visualization by replacing missing 'age' values, summarizing data by age groups, coloring rows by age, and creating a bivariate plot of height vs weight.

<!-- Keywords: #JSLScriptingLanguage, #DataCleaning, #Visualization, #BivariatePlot, #ByGroups -->

**Code**:
```jsl
dt = Open("data_table.jmp");
If( Sum( Is Missing( dt[0, "age"] ) ) > 0,
	dt[Loc( Is Missing( dt[0, "age"] ) ), "age"] = 12
);
Summarize( a = By( :age ) );
dt << Color by Column( :age );
biv = dt << Bivariate( Y( :height ), X( :weight ) );
i = 1;
rpt = biv << Fit Where( :age == Num( a[i] ), Fit Each Value( {Line Width( 1 )} ) );
```

**Code Explanation**:

1. Open data table;
2. Check for missing values in "age".
3. Replace missing "age" values with 12.
4. Summarize data by "age".
5. Color rows by "age".
6. Create Bivariate plot: height vs weight.
7. Initialize index i to 1.
8. Fit lines for each age group.
9. Set line width to 1.
10. Repeat fitting process for all age groups.



### Example 4
> **Summary**: Creates a bivariate plot with a fit line and confidence curves, allowing for customization of curve color and segment selection.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #FitLine, #ConfidenceCurves, #DataVisualization -->

**Code**:
```jsl
If( JMP Version() >= "11.0.0",
	dt = Open("data_table.jmp");
	rbiv = dt << Bivariate( Y( :weight ), X( :height ), Fit Line( {Confid Curves Fit( 1 ), Confid Shaded Fit( 1 )} ) );
	rpt = rbiv << report;
	frame = rpt[FrameBox( 1 )];
	rbiv << (curve[1] << Line Color( "Blue" ));
	line5 = frame << FindSeg( Line Seg( 5 ) );
	colorLine5 = line5 << get line color;
	Close( dt, nosave );
);
```

**Code Explanation**:

1. Check JMP version.
2. Open data table;
3. Create bivariate plot.
4. Add fit line with confidence curves.
5. Get report object.
6. Access first frame.
7. Change curve color to blue.
8. Find segment 5.
9. Get line color of segment 5.
10. Close dataset without saving.



## Bivariate using Data Table
> **Summary**: Analyze and visualize Receive Application data by adjusting axis limits, generating a distribution, creating a bivariate plot, and building a control chart.

<!-- Keywords: #JMPScriptingLanguage, #DataAnalysis, #Visualization, #ControlChart, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt = Data Table("data_table");
dt:Receive Application << Set Property( "Axis", {Min( 7 ), Max( 25 )} );
dist = Distribution( Continuous Distribution( Column( :Receive Application ) ) );
biv = Bivariate( Y( :Receive Application ), X( :Time ) );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :Time ), Y( :Receive Application ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
ccb = Control Chart Builder(
	Show Control Panel( 0 ),
	Variables( Y( :Receive Application ) ),
	Chart( Position( 1 ) ),
	Chart( Position( 2 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Set active data table.
3. Adjust Receive Application axis limits.
4. Create distribution for Receive Application.
5. Generate bivariate plot for Receive Application vs Time.
6. Build graph with points and smoother.
7. Hide control panel in graph builder.
8. Add Receive Application and Time variables.
9. Plot points and smoother elements.
10. Build control chart for Receive Application.



## Bivariate using Col Minimum
> **Summary**: Fits a Cauchy distribution to bivariate data, grouping by sex, and extracting relevant parameters.

<!-- Keywords: #JMPScriptingLanguage, #CauchyDistribution, #BivariateAnalysis, #GroupBy, #NonlinearRegression -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:weight[1] = Col Minimum( :weight );
dt:height[N Rows( dt )] = Col Minimum( :height );
obj = dt << Bivariate( Y( :height ), X( :weight ) );
obj << Group By( :sex );
obj << Fit Cauchy;
rpt = obj << report;
cauchy_sigF = (rpt[Outline Box( 1 )][Number Col Box( "Sigma" )] << get as matrix)[1];
cauchy_chi2F = (rpt[Outline Box( 1 )][Number Col Box( "ChiSquare" )] << get as matrix)[1];
cauchy_pvalF = (rpt[Outline Box( 1 )][Number Col Box( "PValue" )] << get as matrix)[1];
cauchy_lnWorthF = (rpt[Outline Box( 1 )][Number Col Box( "LogWorth" )] << get as matrix)[1];
cauchy_estF = rpt[Outline Box( 1 )][Number Col Box( "Robust Estimate" )] << get as matrix;
cauchy_stdF = rpt[Outline Box( 1 )][Number Col Box( "Std Error" )] << get as matrix;
heightF = {};
heightM = {};
For( i = 1, i <= N Rows( dt ), i++,
	If( Column( dt, 3 )[i] == "F",
		heightF = heightF |/ Column( dt, 4 )[i],
		heightM = heightM |/ Column( dt, 4 )[i]
	)
);
htF = Sort Ascending( heightF );
htM = Sort Ascending( heightM );
medianF = (htF[N Rows( htF ) / 2] + htF[N Rows( htF ) / 2 + 1]) / 2;
medianM = (htM[N Rows( htM ) / 2] + htM[N Rows( htM ) / 2 + 1]) / 2;
IQR_F = Quantile( 0.75, heightF ) - Quantile( 0.25, heightF );
IQR_M = Quantile( 0.75, heightM ) - Quantile( 0.25, heightM );
dt << New Column( "Cauchy Loss",
	Formula(
		Parameter(
			{b0F = Mean( htF ), b0M = Mean( htM ), b1F = 0, b1M = 0, sigmaF = IQR_F, sigmaM = IQR_M},
			b0 = Match( :Name( "sex" ), "F", b0F, "M", b0M, . );
			b1 = Match( :Name( "sex" ), "F", b1F, "M", b1M, . );
			sigma = Match( :Name( "sex" ), "F", sigmaF, "M", sigmaM, . );
			Log( sigma + ((:height - b0 - b1 * :weight) ^ 2 / sigma) );
		)
	)
);
obj1 = dt << Nonlinear( Loss( :Cauchy Loss ), Loss is Neg LogLikelihood( 1 ), Iteration Limit( 50 ), Finish );
rpt1 = obj1 << report;
est1 = (rpt1[Number Col Box( "Estimate" )] << get as matrix);
std1 = (rpt1[Number Col Box( "ApproxStdErr" )] << get as matrix);
```

**Code Explanation**:

1. Open data table.
2. Set first weight to minimum.
3. Set last height to minimum.
4. Create bivariate plot.
5. Group by sex.
6. Fit Cauchy distribution.
7. Extract report.
8. Retrieve Cauchy parameters.
9. Separate heights by sex.
10. Calculate median and IQR for each sex.
11. Create new column for Cauchy loss formula.
12. Perform nonlinear regression.
13. Extract nonlinear regression results.



## Bivariate using Select rows
> **Summary**: Creates a bivariate plot to visualize the relationship between weight and height, with interactive features for selecting points by density and coloring by density quantile.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #DataVisualization, #InteractiveAnalysis, #QuantileColor -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select rows( 1 ) << Exclude( 1 );
dt << Clear Select;
bv = Bivariate( Y( :weight ), X( :height ), Nonpar Density( 1 ) );
rp = Report( bv );
bv << (Curve[1] << Select Points by Density( 0, 1 ));
dt << Clear Select;
bv << (Curve[1] << Color By Density Quantile);
bv << (Curve[1] << Save Density Quantile);
```

**Code Explanation**:

1. Open data_table data
2. Select first row.
3. Exclude selected row.
4. Clear selection.
5. Create bivariate plot.
6. Get report object.
7. Select points by density.
8. Clear selection.
9. Color points by density quantile.
10. Save density quantile data.



## Bivariate using New Column
### Example 1
> **Summary**: Creates a bivariate plot with nonparametric density estimation and frequency-based selection, utilizing the Report platform in JMP.

<!-- Keywords: #JMPReport, #BivariatePlot, #NonParametricDensity, #FrequencySelection, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "freq", Numeric, Ordinal, set values( [0] |/ J( 39, 1, 1 ) ) );
bv = Bivariate( Y( :weight ), X( :height ), Freq( :freq ), Nonpar Density( 1 ) );
rp = Report( bv );
bv << (Curve[1] << Select Points by Density( 0, 1 ));
dt << Clear Select;
bv << (Curve[1] << Color By Density Quantile);
bv << (Curve[1] << Save Density Quantile);
```

**Code Explanation**:

1. Open data table;
2. Add new column "freq".
3. Set "freq" values to 1.
4. Create Bivariate plot.
5. Use weight for Y.
6. Use height for X.
7. Apply frequency.
8. Enable nonparametric density.
9. Get report object.
10. Select points by density.
11. Clear selection in data table.
12. Color points by density quantile.
13. Save density quantile to data table.



### Example 2
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot using JMP's Bivariate platform.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #ProfilerPlot, #LeastSquaresModel, #MultipleEffects -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "wgt", Numeric, Continuous, set values( [0] |/ J( 39, 1, 1 ) ) );
bv = Bivariate( Y( :weight ), X( :height ), Weight( :wgt ), Nonpar Density( 1 ) );
rp = Report( bv );
bv << (Curve[1] << Select Points by Density( 0, 1 ));
dt << Clear Select;
bv << (Curve[1] << Color By Density Quantile);
bv << (Curve[1] << Save Density Quantile);
```

**Code Explanation**:

1. Open data table;
2. Create new column "wgt".
3. Set "wgt" values to 1.
4. Run Bivariate analysis.
5. Generate report.
6. Select points by density.
7. Clear selection in data table.
8. Color curve by density quantile.
9. Save density quantile to data table.



### Example 3
> **Summary**: Fits a standard least squares model with multiple effects and generating a profiler plot, utilizing Bivariate analysis and Report objects in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #ReportObject, #LeastSquaresModel, #ProfilerPlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "wgt", Numeric, Continuous, set values( [0, 0] |/ J( 38, 1, 1 ) ) );
dt << New Column( "freq", Numeric, Ordinal, set values( [0, 1, 0] |/ J( 37, 1, 1 ) ) );
bv = Bivariate( Y( :weight ), X( :height ), Weight( :wgt ), Freq( :freq ), Nonpar Density( 1 ) );
rp = Report( bv );
bv << (Curve[1] << Select Points by Density( 0, 1 ));
dt << Invert Row Selection;
dt << Clear Select;
bv << (Curve[1] << Color By Density Quantile);
bv << (Curve[1] << Save Density Quantile);
```

**Code Explanation**:

1. Open data table.
2. Add new column "wgt".
3. Set "wgt" values.
4. Add new column "freq".
5. Set "freq" values.
6. Create bivariate analysis.
7. Generate report object.
8. Select points by density.
9. Invert row selection.
10. Clear row selection.



## Bivariate using N Cols
> **Summary**: Creates a bivariate analysis with linear fit line and nonparametric density, grouping by age, using data from a specified JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #BivariateAnalysis, #NonparametricDensity, #LinearFitLine, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nc = N Cols( dt );
bv = bivariate( y( height ), x( weight ), by( age ), fitline( 1 ), nonpardensity( 1 ) );
bv << (Curve[2] << Save Density Quantile);
```

**Code Explanation**:

1. Open data table;
2. Count columns in dataset.
3. Create Bivariate analysis.
4. Set Y variable to height.
5. Set X variable to weight.
6. Group by age.
7. Add linear fit line.
8. Enable nonparametric density.
9. Save density quantile curve.



## Bivariate using Spline Smooth
> **Summary**: Creates a bivariate analysis on weight vs height, utilizing Spline Smooth and Bivariate platforms to generate predicted values.

<!-- Keywords: #JSLScriptingLanguage, #BivariateAnalysis, #SplineSmooth, #PredictedValues, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
x = dt[0, 4];
y = dt[0, 5];
val_SS = Spline Smooth( x, y, 0.01 );
obj = dt << Bivariate( Y( :weight ), X( :height ), Fit Spline( 0.01, {Line Color( {212, 73, 88} )}, {Save Predicteds} ) );
val_FS = dt[0, 6];
```

**Code Explanation**:

1. Open data table;
2. Assign height column to x.
3. Assign weight column to y.
4. Create spline smooth for x and y.
5. Run bivariate analysis on weight vs height.
6. Fit spline with specified smoothing parameter.
7. Save predicted values.
8. Assign saved predicteds to val_FS.



## Bivariate using Mean
> **Summary**: Calculates and visualizes a bivariate analysis on weight vs height, utilizing Spline Smooth and Standardized features to generate predicted values.

<!-- Keywords: #JSLScriptingLanguage, #BivariateAnalysis, #SplineSmooth, #Standardization, #PredictedValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
x = dt[0, 4];
y = dt[0, 5];
avg_x = Mean( x );
sd_x = (Mean( (x - avg_x) ^ 2 ) * (40 / 39)) ^ (1 / 2);
std_x = (x - avg_x) / sd_x;
val_SS_std = Spline Smooth( std_x, y, 0.01 );
obj = dt << Bivariate( Y( :weight ), X( :height ), Fit Spline( 0.01, Standardized, {Line Color( {212, 73, 88} )}, {Save Predicteds} ) );
val_FS_std = dt[0, 6];
```

**Code Explanation**:

1. Open data table;
2. Assign column 4 to variable `x`.
3. Assign column 5 to variable `y`.
4. Calculate mean of `x` into `avg_x`.
5. Compute standard deviation of `x` into `sd_x`.
6. Standardize `x` values into `std_x`.
7. Create spline smooth of standardized `x` and `y` into `val_SS_std`.
8. Perform bivariate analysis on weight vs height.
9. Fit spline with smoothing level 0.01.
10. Save predicted values.



## Bivariate using Set Row States
> **Summary**: Creates a bivariate plot with a fit line and local data filter to analyze relationships between height and weight, filtered by gender.

<!-- Keywords: #JMPScriptingLanguage, #BivariatePlot, #LocalDataFilter, #FitLine, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Set Row States(
	[0, 0, 2, 1, 0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 2, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 0]
);
biv = Bivariate( Y( :height ), X( :weight ), Automatic Recalc( 1 ), Fit Line( {Line Color( {213, 72, 87} )} ), );
ldf = biv << Local Data Filter(
	Location( {868, 72} ),
	Add Filter( columns( :sex ), Where( :sex == "F" ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
```

**Code Explanation**:

1. Open data table.
2. Set row states in data table.
3. Create bivariate plot.
4. Add fit line to plot.
5. Customize fit line color.
6. Enable automatic recalculation.
7. Add local data filter.
8. Position filter on plot.
9. Filter data by gender.
10. Configure filter display settings.



