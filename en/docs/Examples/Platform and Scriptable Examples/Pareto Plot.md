# Pareto Plot

### Example 1
> **Summary**: Visualizes a Pareto plot to analyze test rates across groups, with the Ship event as the X-axis and color as the cause variable.

<!-- Keywords: #ParetoPlot, #TestRates, #Groups, #CauseVariable, #JMPScripting -->

**Code**:
```jsl
// Pareto Plot 3
// Open data table
dt = Open("data_table.jmp");
// Pareto Plot 3
Pareto Plot(
	Cause( :color ),
	X( :Ship event ),
	Test Rates Across Groups( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create Pareto Plot.
3. Set cause variable.
4. Set X variable.
5. Enable test rates across groups.



### Example 2
> **Summary**: Visualizes the distribution of surface quality defects using a Pareto Plot, highlighting the most common causes.

<!-- Keywords: #ParetoPlot, #CauseAnalysis, #QualityControl, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
// Pareto Plot
// Open data table
dt = Open("data_table.jmp");
// Pareto Plot
Pareto Plot( Cause( :surface quality ) );
```

**Code Explanation**:

1. Open data table.
2. Create Pareto Plot.
3. Set cause variable.



### Example 3
> **Summary**: Visualizes the distribution of colors in a Pareto plot, utilizing the Cause variable to categorize and analyze the data.

<!-- Keywords: #ParetoPlot, #CauseVariable, #DataVisualization, #JMPScriptingLanguage, #ReliabilityAnalysis -->

**Code**:
```jsl
// Pareto Plot 2
// Open data table
dt = Open("data_table.jmp");
// Pareto Plot 2
Pareto Plot( Cause( :color ) );
```

**Code Explanation**:

1. Open data table.
2. Create Pareto Plot.
3. Set cause variable.



### Example 4
> **Summary**: Visualizes the relationship between surface quality and Part, using a Pareto Plot to identify patterns in test rates across groups.

<!-- Keywords: #ParetoPlot, #JSLScriptingLanguage, #DataVisualization, #TestRates, #GroupAnalysis -->

**Code**:
```jsl
// Pareto Plot 4
// Open data table
dt = Open("data_table.jmp");
// Pareto Plot 4
Pareto Plot(
	Cause( :surface quality ),
	X( :Part ),
	Test Rates Across Groups( 1 ),
	No Plot( 1 ),
	SendToReport(
		Dispatch( {}, "Plots", OutlineBox,
			{Close( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create Pareto Plot.
3. Set cause variable.
4. Set X variable.
5. Enable test rates.
6. Disable plot display.
7. Close plot outline.



### Example 5
> **Summary**: Visualizes the distribution of failure causes using a Pareto Plot, providing an overview of the most common failure modes.

<!-- Keywords: #ParetoPlot, #FailureAnalysis, #ReliabilityEngineering, #JMPScripting, #DataVisualization -->

**Code**:
```jsl
// Pareto Plot
// Open data table
dt = Open("data_table.jmp");
// Pareto Plot
Pareto Plot( Cause( :failure ) );
```

**Code Explanation**:

1. Open table.
2. Create Pareto Plot.
3. Use failure column.



### Example 6
> **Summary**: Visualizes the frequency distribution of failure causes using a Pareto plot, with the cause column set to :failure and the frequency column set to :N.

<!-- Keywords: #ParetoPlot, #FrequencyDistribution, #FailureCauses, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
// Pareto Plot
// Open data table
dt = Open("data_table.jmp");
// Pareto Plot
Pareto Plot(
	Cause( :failure ),
	Freq( :N )
);
```

**Code Explanation**:

1. Open table.
2. Create Pareto plot.
3. Set cause column.
4. Set frequency column.



### Example 7
> **Summary**: Visualizes the frequency distribution of failures in a Pareto plot, with the cause variable set to 'failure', X variable set to 'clean', and frequency variable set to 'N'.

<!-- Keywords: #ParetoPlot, #FrequencyDistribution, #JMPScriptingLanguage, #DataVisualization, #ReliabilityAnalysis -->

**Code**:
```jsl
// Pareto Plot
// Open data table
dt = Open("data_table.jmp");
// Pareto Plot
Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N )
);
```

**Code Explanation**:

1. Open data table.
2. Create Pareto plot.
3. Set cause variable.
4. Set X variable.
5. Set frequency variable.



### Example 8
> **Summary**: Visualizes the distribution of failure causes using a Pareto Plot, with frequency and date as X variables.

<!-- Keywords: #ParetoPlot, #JMPScriptingLanguage, #DataVisualization, #FailureAnalysis, #ReliabilityEngineering -->

**Code**:
```jsl
// Pareto Plot
// Open data table
dt = Open("data_table.jmp");
// Pareto Plot
Pareto Plot(
	Cause( :failure ),
	X( :clean, :date ),
	Freq( :N )
);
```

**Code Explanation**:

1. Open data table.
2. Create Pareto Plot.
3. Set cause variable.
4. Add X variables.
5. Specify frequency variable.



### Example 9
> **Summary**: Visualizes a Pareto Plot with rate-based analysis, utilizing the Cause variable for color-coding and enabling per unit rates and test rates across groups.

<!-- Keywords: #ParetoPlot, #RateAnalysis, #CauseVariable, #PerUnitRates, #TestRates -->

**Code**:
```jsl
// Pareto Plot - Rate
// Open data table
dt = Open("data_table.jmp");
// Pareto Plot - Rate
Pareto Plot(
	Cause( :Causes ),
	X( :Process ),
	Freq( :Count ),
	Per Unit Rates( 1 ),
	Test Rates Across Groups( 1 ),
	Cause[1] << Colors( "Red" ),
	Cause[2] << Colors( "Purple" ),
	Cause[4] << Colors( "BlueGreen" ),
	Cause[5] << Colors( "Yellow" ),
	Cause[6] << Colors( "Blue" ),
	Cause[7] << Colors( "Orange" )
);
```

**Code Explanation**:

1. Open data table.
2. Create Pareto Plot.
3. Set cause variable.
4. Set X variable.
5. Set frequency variable.
6. Enable per unit rates.
7. Enable test rates across groups.
8. Color first cause red.
9. Color second cause purple.
10. Color fourth cause blue-green.
11. Color fifth cause yellow.
12. Color sixth cause blue.
13. Color seventh cause orange.



### Example 10
> **Summary**: Visualizes a Pareto Plot to analyze the distribution of failures by process, utilizing Per Unit Analysis and specifying the value in frequency column as 'size'.

<!-- Keywords: #ParetoPlot, #PerUnitAnalysis, #JMPScriptingLanguage, #DataVisualization, #ReliabilityEngineering -->

**Code**:
```jsl
// Pareto Plot - DPU
// Open data table
dt = Open("data_table.jmp");
// Pareto Plot - DPU
Pareto Plot(
	Cause( :Causes ),
	Per Unit Analysis(
		Value In Freq Column(
			Cause Code( "size" )
		)
	),
	X( :Process ),
	Freq( :Count ),
	Per Unit Rates( 1 ),
	Test Rates Across Groups( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create Pareto Plot.
3. Set cause variable.
4. Enable Per Unit Analysis.
5. Specify value in frequency column.
6. Set cause code.
7. Set process variable.
8. Set frequency variable.
9. Set per unit rates.
10. Test rates across groups.



### Example 11
> **Summary**: Creates a Pareto Plot to visualize failure data, including customization of scale box format and conditional value formatting.

<!-- Keywords: #ParetoPlot, #JSLScriptingLanguage, #Customization, #ConditionalFormatting, #SurvivalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Pareto Plot(
	Cause( :failure ),
	X( :clean, :date ),
	Freq( :N ),
	N Legend( 1 ),
	Test Rate Within Groups( 1 ),
	SendToReport( Dispatch( {"Plots"}, "102", ScaleBox, {Format( "Custom", Formula( IfMax( value, value, 20, "<20" ) ), 12 )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create Pareto Plot.
3. Set cause variable.
4. Add X variables.
5. Define frequency variable.
6. Enable N legend.
7. Apply test rate within groups.
8. Send report to window.
9. Customize scale box format.
10. Format values conditionally.



### Example 12
> **Summary**: Creates a Pareto plot to visualize failure frequency, utilizing Cause and Freq variables from the data table.

<!-- Keywords: #ParetoPlot, #JSLScripting, #DataVisualization, #FailureAnalysis, #ReliabilityEngineering -->

**Code**:
```jsl
Open("data_table.jmp");
pp = Pareto Plot( Cause( :failure ), X( :ID ), Freq( :N ), Ungroup Plots( 1 ) );
pp << save journal( "$temp\pareto.jrn" );
```

**Code Explanation**:

1. Open data table.
2. Create Pareto plot.
3. Set cause variable.
4. Set ID variable.
5. Set frequency variable.
6. Enable ungrouped plots.
7. Save journal file.



### Example 13
> **Summary**: Creates and saves a Pareto plot to analyze failure rates, utilizing the Cause variable for grouping and the ID variable as the x-axis.

<!-- Keywords: #ParetoPlot, #JSLScriptingLanguage, #DataVisualization, #FailureAnalysis, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
pp = Pareto Plot( Cause( :failure ), X( :ID ), Freq( :N ), Ungroup Plots( 1 ) );
pp << save journal( "$temp\pareto.jrn" );
Open( "$temp\pareto.jrn" );
```

**Code Explanation**:

1. Open data table.
2. Create Pareto plot.
3. Set cause variable.
4. Set X variable.
5. Set frequency variable.
6. Enable ungrouped plots.
7. Save plot to journal.
8. Open saved journal.



### Example 14
> **Summary**: Creates a Pareto plot to visualize the distribution of failure causes, with frequency and cumulative percent curve settings.

<!-- Keywords: #ParetoPlot, #JSLScripting, #DataVisualization, #ReliabilityAnalysis, #SurvivalModel -->

**Code**:
```jsl
Open("data_table.jmp");
Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Show Cum Percent Curve( 0 ),
	Pie Chart( 1 ),
	SendToReport( Dispatch( {"Plots"}, "502", ScaleBox, {Max( 31 ), Inc( 5 ), Label Row( Show Major Grid( 1 ) )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create Pareto plot.
3. Set cause variable.
4. Set frequency variable.
5. Hide cumulative percent curve.
6. Enable pie chart.
7. Send report settings.
8. Set scale box maximum.
9. Set scale box increment.
10. Show major grid on label row.



### Example 15
> **Summary**: Creates a Pareto plot to visualize the frequency distribution of failures, with the cause variable set to 'failure' and the frequency variable set to 'N'.

<!-- Keywords: #ParetoPlot, #FrequencyDistribution, #FailureAnalysis, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Pareto Plot( Cause( :failure ), Freq( :N ) );
```

**Code Explanation**:

1. Open data file.
2. Create Pareto plot.
3. Set cause variable.
4. Set frequency variable.



### Example 16
> **Summary**: Creates Pareto plots to visualize failure data, adjusting marker size and displaying cumulative percent points.

<!-- Keywords: #ParetoPlot, #JMPScriptingLanguage, #DataVisualization, #FailureAnalysis, #MarkerSizeAdjustment -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Show Cum Percent Points( 1 ),
	SendToReport( Dispatch( {"Plots"}, FrameBox, {Marker Size( 3 )} ) )
);
 Preferences( Pareto Plot( Markers( Filled Right Triangle ) ) );
Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Show Cum Percent Points( 1 ),
	SendToReport( Dispatch( {"Plots"}, FrameBox, {Marker Size( 5 )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create Pareto plot.
3. Set cause variable.
4. Set frequency variable.
5. Show cumulative percent points.
6. Adjust marker size.
7. Set platform preferences.
8. Create Pareto plot again.
9. Set cause variable.
10. Set frequency variable.
11. Show cumulative percent points.
12. Adjust marker size.



### Example 17
> **Summary**: Creates Pareto plots with various customization options, including bar styles, pie charts, and cumulative percentage curves.

<!-- Keywords: #ParetoPlot, #JSLScriptingLanguage, #CustomizationOptions, #DataVisualization, #ReliabilityAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Pareto Plot( Cause( :Causes ), Bar Style( Float ) );
Pareto Plot( Cause( :Causes ), Show Pareto Bars( 0 ), Show Pareto Line( 1 ) );
Pareto Plot( Cause( :Causes ), Show Pareto Bars( 0 ), Show Pareto Markers( 1 ) );
Pareto Plot(
	Cause( :Causes ),
	Show Pareto Line( 1 ),
	Show Pareto Markers( 1 ),
	SendToReport(
		Dispatch( {"Plots"}, "900", ScaleBox,
			{Legend Model(
				1,
				Properties( 1, {Line Color( 3 )}, Item ID( "Total Count Curve", 1 ) ),
				Properties( 3, {Line Color( 3 ), Marker( "Star" ), Marker Size( 4 )}, Item ID( "Cumulative % Markers", 1 ) )
			)}
		)
	)
);
Pareto Plot( Cause( :Causes ), Pie Chart( 1 ) );
Pareto Plot( Cause( :Causes ), Show Cum Percent Curve( 0 ) );
Pareto Plot( Cause( :Causes ), Show Cum Percent Curve( 0 ), Show Cum Percent Points( 1 ) );
Pareto Plot( Cause( :Causes ), Show Cum Percent Curve( 0 ), Label Cum Percent Points( 1 ) );
Pareto Plot(
	Cause( :Causes ),
	Cum Percent Curve Color( "Orange" ),
	Show Cum Percent Points( 1 ),
	Label Cum Percent Points( 1 ),
	Cum Percent Label Format( "Percent", 12, 1 )
);
Pareto Plot( Cause( :Causes ), Show Cum Percent Axis( 0 ), Show Cum Percent Points( 1 ) );
Pareto Plot(
	Cause( :Causes ),
	Synchronize Y Axes( 0 ),
	Show Cum Percent Points( 1 ),
	SendToReport( Dispatch( {"Plots"}, "102", ScaleBox, {Min( 0 ), Max( 42 ), Inc( 10 ), Minor Ticks( 0 )} ) )
);
Pareto Plot( Cause( :Causes ), Percent Scale( 1 ), Label Cum Percent Points( 1 ) );
```

**Code Explanation**:

1. Open data_table data
2. Create Pareto plot with float bars.
3. Create Pareto plot without bars, show line.
4. Create Pareto plot without bars, show markers.
5. Customize Pareto plot with colored line and markers.
6. Add pie chart to Pareto plot.
7. Hide cumulative percentage curve.
8. Show cumulative percentage points.
9. Label cumulative percentage points.
10. Customize cumulative percentage plot appearance.



### Example 18
> **Summary**: Creates Pareto plots with various customization options, including bar styles, pie charts, and cumulative percent curves.

<!-- Keywords: #ParetoPlot, #JSLScriptingLanguage, #CustomizationOptions, #DataVisualization, #ReliabilityAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Pareto Plot( Cause( :Causes ), Bar Style( Float ) );
Pareto Plot( Cause( :Causes ), Show Pareto Bars( 0 ), Show Pareto Line( 1 ) );
Pareto Plot( Cause( :Causes ), Show Pareto Bars( 0 ), Show Pareto Markers( 1 ) );
Pareto Plot(
	Cause( :Causes ),
	Show Pareto Line( 1 ),
	Show Pareto Markers( 1 ),
	SendToReport(
		Dispatch( {"Plots"}, "900", ScaleBox,
			{Legend Model(
				1,
				Properties( 1, {Line Color( 3 )}, Item ID( "Total Count Curve", 1 ) ),
				Properties( 3, {Line Color( 3 ), Marker( "Star" ), Marker Size( 4 )}, Item ID( "Cumulative % Markers", 1 ) )
			)}
		)
	)
);
Pareto Plot( Cause( :Causes ), Pie Chart( 1 ) );
Pareto Plot( Cause( :Causes ), Show Cum Percent Curve( 0 ) );
Pareto Plot( Cause( :Causes ), Show Cum Percent Curve( 0 ), Show Cum Percent Points( 1 ) );
Pareto Plot( Cause( :Causes ), Show Cum Percent Curve( 0 ), Label Cum Percent Points( 1 ) );
Pareto Plot(
	Cause( :Causes ),
	Cum Percent Curve Color( "Orange" ),
	Show Cum Percent Points( 1 ),
	Label Cum Percent Points( 1 ),
	Cum Percent Label Format( "Percent", 12, 1 )
);
Pareto Plot( Cause( :Causes ), Show Cum Percent Axis( 0 ), Show Cum Percent Points( 1 ) );
Pareto Plot(
	Cause( :Causes ),
	Synchronize Y Axes( 0 ),
	Show Cum Percent Points( 1 ),
	SendToReport( Dispatch( {"Plots"}, "102", ScaleBox, {Min( 0 ), Max( 42 ), Inc( 10 ), Minor Ticks( 0 )} ) )
);
Pareto Plot( Cause( :Causes ), Percent Scale( 1 ), Label Cum Percent Points( 1 ) );
Pareto Plot( Cause( :Causes ), N Legend( 1 ) );
```

**Code Explanation**:

1. Open data_table data
2. Create Pareto plot with float bars.
3. Hide bars, show Pareto line.
4. Hide bars, show Pareto markers.
5. Customize Pareto plot appearance.
6. Add pie chart to Pareto plot.
7. Hide cumulative percent curve.
8. Show cumulative percent points.
9. Label cumulative percent points.
10. Customize cumulative percent curve and labels.



### Example 19
> **Summary**: Creates a Pareto plot to visualize the distribution of failure rates by sex, utilizing the Open data table and pareto plot functions in JMP.

<!-- Keywords: #ParetoPlot, #DataVisualization, #JMPScriptingLanguage, #ReliabilityAnalysis, #SurvivalModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:sex[{2}] = "";
pp = pareto plot( Y( :sex ) );
```

**Code Explanation**:

1. Open data table.
2. Modify sex column value.
3. Create Pareto plot.



### Example 20
> **Summary**: Creates Pareto plots with customizable colors for specific causes, utilizing JMP's Cause() and Freq() functions to visualize failure data.

<!-- Keywords: #JMPScriptingLanguage, #ParetoPlot, #CustomizableColors, #CauseFunction, #FreqFunction -->

**Code**:
```jsl
Names Default To Here( 1 );
Open("data_table.jmp");
Pareto Plot( Cause( :failure ), Freq( :N ), Colors( "Light Red" ) );
Pareto Plot( Cause( :failure ), Freq( :N ), Cause[1] << Colors( -6740950 ), Cause[6] << Colors( "Light Gray" ) );
If( JMP Version() >= "17",
	Pareto Plot( Cause( :failure ), Freq( :N ), Cause Colors( {{"contamination", "Light Red"}, {"oxide defect", {188, 188, 197}}} ) );
	Pareto Plot( Cause( :failure ), Freq( :N ), Cause Colors( {"contamination", "Light Red"} ) );
	Pareto Plot( Cause( :failure ), Freq( :N ), Cause Colors( {"contamination", "Light Red"} ), Cause Colors( {"corrosion", 13} ) );
	Pareto Plot(
		Cause( :failure ),
		Freq( :N ),
		Combine Causes( {"metallization", "doping", "silicon defect"}, "Other" ),
		Cause Colors( {{"contamination", {102, 219, 214}}, {"Other", {236, 248, 16}}} )
	);
	Pareto Plot(
		Cause( :failure ),
		Freq( :N ),
		Combine Causes( {"metallization", "doping", "silicon defect"}, "Other" ),
		Cause Colors( {{"contamination", {102, 219, 214}}, {"doping", {236, 248, 16}}} )
	);
	Pareto Plot(
		Cause( :failure ),
		Freq( :N ),
		Cause Colors( {"metallization", {102, 219, 214}} ),
		Combine Causes( {"metallization", "doping", "silicon defect"}, "Other" )
	);
	Pareto Plot(
		Cause( :failure ),
		Freq( :N ),
		Cause Colors( {{"doping", "Dark Yellow"}, {"metallization", "Dark Red"}} ),
		Combine Causes( {"metallization", "doping", "silicon defect"}, "Other" )
	);
);
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create Pareto plot with default colors.
4. Customize colors for specific causes.
5. Check JMP version.
6. Create Pareto plot with named cause colors.
7. Repeat Pareto plot with single named color.
8. Add another color for "corrosion".
9. Combine specific causes into "Other".
10. Customize colors for combined causes.



### Example 21
> **Summary**: Creates Pareto plots to analyze failure causes and frequencies, utilizing conditional logic based on JMP version.

<!-- Keywords: #ParetoPlot, #JMPScriptingLanguage, #ConditionalLogic, #FailureAnalysis, #DataVisualization -->

**Code**:
```jsl
Names Default To Here( 1 );
Open("data_table.jmp");
Pareto Plot( Cause( :failure ), Freq( :N ), Label( 1 ) );
Pareto Plot( Cause( :failure ), Freq( :N ), Cause[1] << Label( 1 ), Cause[2] << Label( 1 ) );
If( JMP Version() >= "17",
	Pareto Plot( Cause( :failure ), Freq( :N ), Cause Labels( {{"contamination", 1}, {"oxide defect", 1}} ) );
	Pareto Plot( Cause( :failure ), Freq( :N ), Cause Labels( {"silicon defect", 1} ) );
	Pareto Plot(
		Cause( :failure ),
		Freq( :N ),
		Cause Labels( {"silicon defect", 1} ),
		Cause Labels( {"doping", 1} ),
		Cause Labels( {"silicon defect", 0} )
	);
	Pareto Plot(
		Cause( :failure ),
		Freq( :N ),
		Combine Causes( {"metallization", "doping", "silicon defect"}, "Last 3" ),
		Cause Labels( {"Last 3", 1} )
	);
	Pareto Plot(
		Cause( :failure ),
		Freq( :N ),
		Combine Causes( {"metallization", "doping", "silicon defect"}, "Last 3" ),
		Cause Labels( {"doping", 1} )
	);
	Pareto Plot(
		Cause( :failure ),
		Freq( :N ),
		Cause Labels( {"metallization", 1} ),
		Combine Causes( {"metallization", "doping", "silicon defect"}, "Last 3" )
	);
);
```

**Code Explanation**:

1. Set default names.
2. Open data_table data
3. Create Pareto plot.
4. Label first two causes.
5. Check JMP version.
6. Create Pareto plot with labels.
7. Create Pareto plot with silicon defect label.
8. Create Pareto plot with multiple labels.
9. Combine last three causes.
10. Label combined causes.



### Example 22
> **Summary**: Creates Pareto plots to analyze failure causes, customizing markers and combining causes based on JMP version.

<!-- Keywords: #ParetoPlot, #JMPScriptingLanguage, #Customization, #FailureAnalysis, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ), Markers( 11 ) );
Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Show Cum Percent Points( 1 ),
	Cause[5] << Markers( 8 ),
	Cause[6] << Markers( 9 ),
	Cause[7] << Markers( 10 )
);
If( JMP Version() >= "17",
	Pareto Plot(
		Cause( :failure ),
		Freq( :N ),
		Show Cum Percent Points( 1 ),
		Cause Markers( {{"metallization", "Circle"}, {"doping", "Wide"}, {"silicon defect", "Tall"}} )
	);
	Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ), Cause Markers( {"doping", "Wide"} ) );
	Pareto Plot(
		Cause( :failure ),
		Freq( :N ),
		Show Pareto Markers( 1 ),
		Show Cum Percent Points( 1 ),
		Cause Markers( {"miscellaneous", "Plus"} ),
		Cause Markers( {"doping", "Star"} )
	);
	Pareto Plot(
		Cause( :failure ),
		Freq( :N ),
		Show Pareto Markers( 1 ),
		Show Cum Percent Curve( 0 ),
		Combine Causes( {"metallization", "doping", "silicon defect"}, "3 Others" ),
		Cause Markers( {{"miscellaneous", "Plus"}, {"3 Others", "Star"}} )
	);
	Pareto Plot(
		Cause( :failure ),
		Freq( :N ),
		Show Pareto Markers( 1 ),
		Show Cum Percent Curve( 0 ),
		Combine Causes( {"metallization", "doping", "silicon defect"}, "Others" ),
		Cause Markers( {"doping", "Plus"} )
	);
	Pareto Plot(
		Cause( :failure ),
		Freq( :N ),
		Show Pareto Markers( 1 ),
		Show Cum Percent Curve( 0 ),
		Cause Markers( {"silicon defect", "A"} ),
		Combine Causes( {"metallization", "doping", "silicon defect"}, "Others" ), 
	);
	Pareto Plot(
		Cause( :failure ),
		Freq( :N ),
		Show Pareto Markers( 1 ),
		Show Cum Percent Curve( 0 ),
		Cause Markers( {"silicon defect", "Plus"} ),
		Cause Markers( {"doping", "A"} ),
		Combine Causes( {"metallization", "doping", "silicon defect"}, "Others" ), 
	);
);
```

**Code Explanation**:

1. Open data file.
2. Create Pareto plot.
3. Customize Pareto plot markers.
4. Check JMP version.
5. Create Pareto plot for JMP 17.
6. Customize Pareto plot markers for doping.
7. Create Pareto plot with additional markers.
8. Customize Pareto plot with combined causes.
9. Customize Pareto plot with specific markers.
10. Customize Pareto plot with additional cause markers.



### Example 23
> **Summary**: Creates Pareto plots for causes, combining categories based on JMP version and additional conditions.

<!-- Keywords: #ParetoPlot, #JMPScriptingLanguage, #DataVisualization, #ConditionalLogic, #ReliabilityAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Pareto Plot( Cause( :Causes ), Combine Causes( {"none", "switch, other"}, ) );
If( JMP Version() >= "17",
	Pareto Plot( Cause( :Causes ), Combine Causes( {"none", "switch, other"}, "Switch, None or Other" ) );
	Pareto Plot(
		Cause( :Causes ),
		Combine Causes( {"none", "switch, other"}, "Switch, None or Other" ),
		Combine Causes( {"belt", "container throw", "circuitry"}, "Belt, Container Throw, Circuitry" )
	);
	Pareto Plot(
		Cause( :Causes ),
		Combine Causes( {"none", "switch, other"}, "Switch, None or Other" ),
		Combine Causes( {"belt", "circuitry"}, "Belt & Circuitry" ),
		Combine Causes( {"Switch, None or Other", "Belt & Circuitry"}, "All Other" )
	);
	Pareto Plot(
		Cause( :Causes ),
		Combine Causes( {"none", "switch, other"}, "Switch, None or Other" ),
		Combine Causes( {"belt", "circuitry"}, "Belt & Circuitry" ),
		Combine Causes( {"none", "belt", "cord short"}, "6 Combined" )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Create Pareto plot for causes.
3. Check JMP version.
4. Create Pareto plot with combined causes.
5. Create Pareto plot with additional combined causes.
6. Create Pareto plot with further combined causes.
7. Create Pareto plot with comprehensive combined categories.
8. Create Pareto plot with six combined causes.



### Example 24
> **Summary**: Creates Pareto plots with various settings and group orientations to analyze failure causes, utilizing the Cause() function and Freq() function.

<!-- Keywords: #ParetoPlot, #JMPScriptingLanguage, #DataVisualization, #FailureAnalysis, #GroupSettings -->

**Code**:
```jsl
Names Default To Here( 1 );
Open("data_table.jmp");
Pareto Plot( Cause( :failure ), X( :ID ), Freq( :N ), Ungroup Plots( 1 ) );
Pareto Plot(
	Cause( :failure ),
	X( :clean, :date ),
	Freq( :N ),
	Reorder Horizontal( {"OCT 2", "OCT 1"} ),
	Reorder Vertical( {"before", "after"} )
);
If( JMP Version() >= "17",
	Pareto Plot( Cause( :failure ), X( :clean, :date ), Freq( :N ), Swap Group Orientation( 1 ) );
	Pareto Plot( Cause( :failure ), X( :clean, :date ), Freq( :N ), Group Settings( :date, Levels In View( 1 ), Start Level( 1 ) ) );
	Pareto Plot(
		Cause( :failure ),
		X( :clean, :date ),
		Freq( :N ),
		Swap Group Orientation( 1 ),
		Group Settings( :date, Levels In View( 2 ) )
	);
	Pareto Plot(
		Cause( :failure ),
		X( :clean, :date ),
		Freq( :N ),
		Group Settings( :date, Show Title( 0 ) ),
		Group Settings( :clean, Show Title( 0 ) )
	);
	Pareto Plot(
		Cause( :failure ),
		X( :clean, :date ),
		Freq( :N ),
		Group Settings( :date, Title Color( "Dark Blue" ), Levels Color( {190, 211, 250} ) ),
		Group Settings( :clean, Title Color( {133, 6, 3} ), Levels Color( "Light Red" ) )
	);
	Pareto Plot(
		Cause( :failure ),
		X( :clean, :date ),
		Freq( :N ),
		Swap Group Orientation( 1 ),
		Group Settings( :date, Title Orientation( Horizontal ), Level Orientation( Horizontal ) )
	);
	Pareto Plot( Cause( :failure ), X( :ID ), Freq( :N ), Swap Group Orientation( 1 ), Ungroup Plots( 1 ) );
);
```

**Code Explanation**:

1. Set default names.
2. Open data table;
3. Create Pareto plot for failure causes.
4. Create Pareto plot with clean and date variables.
5. Reorder horizontal groups.
6. Reorder vertical groups.
7. Check JMP version compatibility.
8. Create Pareto plot with swapped group orientation.
9. Set group levels in view.
10. Adjust group settings and colors.



### Example 25
> **Summary**: Creates Pareto plots for causes, allowing users to move specific causes to first or last positions, and combining causes based on JMP version.

<!-- Keywords: #ParetoPlot, #CauseAnalysis, #JMPScriptingLanguage, #ReliabilityEngineering, #SurvivalModel -->

**Code**:
```jsl
Open("data_table.jmp");
Pareto Plot( Cause( :Causes ), Move to First( {"stripped gear"} ) );
Pareto Plot( Cause( :Causes ), Move to First( {"stripped gear", "power switch", "belt"} ) );
Pareto Plot( Cause( :Causes ), Move to First( {"stripped gear"} ), Move to First( {"power switch"} ), Move to First( {"belt"} ) );
Pareto Plot( Cause( :Causes ), Move to Last( {"none"} ) );
Pareto Plot( Cause( :Causes ), Move to Last( {"engine fan", "none"} ) );
Pareto Plot( Cause( :Causes ), Move to Last( {"engine fan"} ), Move to Last( {"none"} ), Move to Last( {"belt"} ) );
If( JMP Version() >= "17",
	Pareto Plot( Cause( :Causes ), Combine Causes( {"circuitry", "switch, other"}, "Smallest" ), Move to First( {"Smallest"} ) );
	Pareto Plot( Cause( :Causes ), Combine Causes( {"circuitry", "switch, other"}, "Smallest" ), Move to First( {"circuitry"} ) );
 
	Pareto Plot(
		Cause( :Causes ),
		Combine Causes( {"none", "switch, other"}, "None, Switch, Other" ),
		Move to Last( {"None, Switch, Other"} )
	);
	Pareto Plot( Cause( :Causes ), Combine Causes( {"none", "switch, other"}, "None, Switch, Other" ), Move to Last( {"switch, other"} ) );
);
```

**Code Explanation**:

1. Open data_table data
2. Create Pareto plot for causes.
3. Move "stripped gear" to first.
4. Move multiple causes to first.
5. Move "none" to last.
6. Move multiple causes to last.
7. Check JMP version.
8. Combine causes if version >= 17.
9. Move combined cause to first.
10. Adjust combined cause order.
11. Combine different causes.
12. Move combined cause to last.
13. Adjust combined cause order.



### Example 26
> **Summary**: Creates Pareto plots to analyze causes and frequencies in a reliability study, with optional per-unit analysis and test rates across groups.

<!-- Keywords: #ParetoPlot, #ReliabilityAnalysis, #JMPScriptingLanguage, #PerUnitAnalysis, #TestRates -->

**Code**:
```jsl
Names Default To Here( 1 );
Open("data_table.jmp");
Pareto Plot(
	Cause( :Causes ),
	X( :Process ),
	Freq( :Count ),
	Per Unit Analysis( Value In Freq Column( Cause Code( "size" ) ) ),
	Per Unit Rates( 1 )
);
Pareto Plot(
	Cause( :Causes ),
	X( :Process, :Day ),
	Freq( :Count ),
	Per Unit Analysis( Value In Freq Column( Cause Code( "size" ) ) ),
	Per Unit Rates( 1 ),
	Test Rate Within Groups( 1 ),
	Test Rates Across Groups( 1 )
);
If( JMP Version() >= "17",
	Pareto Plot(
		Cause( :Causes ),
		X( :Process, :Day ),
		Freq( :Count ),
		Per Unit Analysis( Value In Freq Column( Cause Code( "size" ) ) ),
		Tables Match Plot( {Per Unit Rates( 1 ), Test Rate Within Groups( 1 ), Test Rates Across Groups( 1 )} ),
		Per Unit Rates( 1 ),
		Test Rate Within Groups( 1 ),
		Test Rates Across Groups( 1 ),
		Combine Causes( {"Corrosion", "Metallization", "Doping"}, "Corr, Metal, Dope" ),
		Combine Causes( {"Miscellaneous", "Silicon Defect"}, "Misc, SD" )
	)
);
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create Pareto plot.
4. Specify cause variable.
5. Specify X variable.
6. Specify frequency variable.
7. Enable per unit analysis.
8. Set per unit rates.
9. Create second Pareto plot.
10. Add Day to X variable.
11. Enable test rate within groups.
12. Enable test rates across groups.
13. Check JMP version.
14. Create third Pareto plot.
15. Combine specific causes.
16. Combine other specific causes.



### Example 27
> **Summary**: Creates a Pareto plot to analyze causes of failure, with an optional threshold adjustment for combined causes.

<!-- Keywords: #ParetoPlot, #CauseAnalysis, #FailureMode, #ThresholdAdjustment, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Pareto Plot( Cause( :failure ) );
Pareto Plot( Cause( :failure ), Threshold of Combined Causes( Tail %( 15 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create Pareto plot for causes.
3. Adjust Pareto plot threshold.



### Example 28
> **Summary**: Creates and customizes Pareto plots to analyze failure causes in a data table, utilizing the Cause() function and Threshold of Combined Causes() options.

<!-- Keywords: #ParetoPlot, #FailureAnalysis, #DataVisualization, #JMPScriptingLanguage, #ReliabilityEngineering -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Pareto Plot( Cause( :failure ) );
Pareto Plot( Cause( :failure ), Threshold of Combined Causes( Tail %( 15 ) ) );
Pareto Plot( Cause( :failure ), Threshold of Combined Causes( Count( 2 ) ) );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create Pareto plot.
4. Modify Pareto plot with threshold.
5. Modify Pareto plot with count threshold.



### Example 29
> **Summary**: Creates a Pareto Plot to analyze failure rates within groups, with customizable report title and pie chart visualization.

<!-- Keywords: #ParetoPlot, #ParametricSurvivalModel, #WeibullDistribution, #TestRateAnalysis, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Pareto Plot(
	Cause( :failure ),
	X( :clean, :date ),
	Freq( :N ),
	Pie Chart( 1 ),
	Test Rate Within Groups( 1 ),
	SendToReport( Dispatch( {}, "Pareto Plot", OutlineBox, {Set Title( "Pie Chart, Count Analysis: Test Rate Within Groups" )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create Pareto Plot object.
3. Set cause variable.
4. Add X variables.
5. Define frequency variable.
6. Enable pie chart.
7. Enable test rate analysis.
8. Customize report title.
9. Display Pareto Plot.
10. End script execution.



### Example 30
> **Summary**: Creates a Pareto plot to visualize failure rates over time, utilizing the 'Cause' and 'Freq' functions.

<!-- Keywords: #ParetoPlot, #FailureAnalysis, #TimeSeries, #JMPScriptingLanguage, #ReliabilityEngineering -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Pareto Plot( Cause( :failure ), X( :clean, :date ), Freq( :N ) );
```

**Code Explanation**:

1. Open data table.
2. Create Pareto plot object.
3. Set cause variable.
4. Set X variables.
5. Set frequency variable.



### Example 31
> **Summary**: Creates Pareto plots for reliability analysis, utilizing various options such as Per Unit Rates, Test Rate Within Groups, and Tables Match Plot, with interactive features like Combine Causes and Close plots outline box.

<!-- Keywords: #ParetoPlot, #ReliabilityAnalysis, #JMPScriptingLanguage, #DataVisualization, #ParametricSurvivalModel -->

**Code**:
```jsl
Names Default To Here( 1 );
Open("data_table.jmp");
Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Per Unit Rates( 1 ),
	SendToReport( Dispatch( {}, "Plots", OutlineBox, {Close( 1 )} ) )
);
Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Test Rate Within Groups( 1 ),
	SendToReport( Dispatch( {}, "Plots", OutlineBox, {Close( 1 )} ) )
);
Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Test Rates Across Groups( 1 ),
	SendToReport( Dispatch( {}, "Plots", OutlineBox, {Close( 1 )} ) )
);
If( JMP Version() >= "17",
	Pareto Plot(
		Cause( :failure ),
		X( :date ),
		Freq( :N ),
		Per Unit Rates( 1 ),
		Combine Causes( {"corrosion", "doping", "silicon defect"}, "3 Others" ),
		SendToReport( Dispatch( {}, "Plots", OutlineBox, {Close( 1 )} ) )
	);
	Pareto Plot(
		Cause( :failure ),
		X( :date ),
		Freq( :N ),
		Tables Match Plot( {Per Unit Rates( 1 ), Test Rate Within Groups( 0 ), Test Rates Across Groups( 0 )} ),
		Per Unit Rates( 1 ),
		Combine Causes( {"corrosion", "doping", "silicon defect"}, "3 Others" ),
		SendToReport( Dispatch( {}, "Plots", OutlineBox, {Close( 1 )} ) )
	);
	Pareto Plot(
		Cause( :failure ),
		X( :date ),
		Freq( :N ),
		Test Rate Within Groups( 1 ),
		Test Rates Across Groups( 1 ),
		Combine Causes( {"corrosion", "doping", "silicon defect"}, "3 Others" ),
		SendToReport( Dispatch( {}, "Plots", OutlineBox, {Close( 1 )} ) )
	);
	Pareto Plot(
		Cause( :failure ),
		X( :date ),
		Freq( :N ),
		Tables Match Plot( {Per Unit Rates( 1 ), Test Rate Within Groups( 1 ), Test Rates Across Groups( 1 )} ),
		Test Rate Within Groups( 1 ),
		Test Rates Across Groups( 1 ),
		Combine Causes( {"corrosion", "doping", "silicon defect"}, "3 Others" ),
		SendToReport( Dispatch( {}, "Plots", OutlineBox, {Close( 1 )} ) )
	);
);
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create Pareto plot for clean.
4. Close plots outline box.
5. Create Pareto plot for clean.
6. Test rate within groups.
7. Close plots outline box.
8. Create Pareto plot for clean.
9. Test rates across groups.
10. Close plots outline box.
11. Check JMP version.
12. Create Pareto plot for date.
13. Combine specific causes.
14. Close plots outline box.
15. Create Pareto plot for date.
16. Configure tables match plot.
17. Combine specific causes.
18. Close plots outline box.
19. Create Pareto plot for date.
20. Test rate within groups.
21. Test rates across groups.
22. Combine specific causes.
23. Close plots outline box.
24. Create Pareto plot for date.
25. Configure tables match plot.
26. Test rate within groups.
27. Test rates across groups.
28. Combine specific causes.
29. Close plots outline box.



### Example 32
> **Summary**: Creates a Pareto plot to analyze failure rates within groups, using per unit rates and testing rate within groups.

<!-- Keywords: #ParetoPlot, #FailureRates, #PerUnitRates, #TestRateWithinGroups, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Pareto Plot( Cause( :failure ), Per Unit Rates( 1 ), Test Rate Within Groups( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create Pareto plot object.
3. Set cause variable to failure.
4. Use per unit rates.
5. Test rate within groups.



### Example 33
> **Summary**: Creates a Pareto Plot to visualize and analyze the relationship between causes, process, and frequency in a reliability dataset.

<!-- Keywords: #ParetoPlot, #ReliabilityAnalysis, #JMPScriptingLanguage, #DataVisualization, #SurvivalModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Pareto Plot(
	Cause( :Causes ),
	X( :Process ),
	Freq( :Count ),
	Per Unit Rates( 1 ),
	Test Rate Within Groups( 1 ),
	Test Rates Across Groups( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create Pareto Plot object.
3. Set cause variable.
4. Set process variable.
5. Set frequency variable.
6. Enable per unit rates.
7. Enable test rate within groups.
8. Enable test rates across groups.



### Example 34
> **Summary**: Creates a Pareto Plot to analyze failure rates, filtering data by 'doping' and excluding rows where 'clean' is not 'after'.

<!-- Keywords: #ParetoPlot, #DataFiltering, #JMPScriptingLanguage, #ReliabilityAnalysis, #SurvivalModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Local Data Filter( Add Filter( columns( :failure ), Where( :failure == "doping" ) ), Mode( Select( 0 ), Show( 1 ), Include( 1 ) ) ), 
);
obj << Automatic Recalc( 0 );
dt << Select Where( :clean == "after" );
dt << Exclude();
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table;
2. Create Pareto Plot object.
3. Set cause variable to "failure".
4. Set frequency variable to "N".
5. Add local data filter.
6. Filter where "failure" equals "doping".
7. Disable automatic recalculation.
8. Select rows where "clean" is "after".
9. Exclude selected rows.
10. Generate report from Pareto Plot.



### Example 35
> **Summary**: Creates and updates a Pareto plot to analyze failure data, utilizing local data filtering and automatic recalculation.

<!-- Keywords: #ParetoPlot, #LocalDataFilter, #AutomaticRecalculation, #JMPScriptingLanguage, #ReliabilityAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Local Data Filter( Add Filter( columns( :failure ), Where( :failure == "doping" ) ), Mode( Select( 0 ), Show( 1 ), Include( 1 ) ) ), 
);
obj << Automatic Recalc( 1 );
dt << Select Where( :clean == "after" );
dt << Exclude();
rpt = Report( obj );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Local Data Filter( Add Filter( columns( :failure ), Where( :failure == "doping" ) ), Mode( Select( 0 ), Show( 1 ), Include( 1 ) ) ), 
);
obj << Automatic Recalc( 0 );
dt << Select Where( :clean == "after" );
dt << Exclude();
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table;
2. Create Pareto plot.
3. Add local data filter.
4. Set automatic recalculation.
5. Select rows where clean is "after".
6. Exclude selected rows.
7. Generate report from Pareto plot.
8. Close dataset without saving.
9. Reopen data_table dataset
10. Create Pareto plot again.



## Pareto Plot using If
### Example 1
> **Summary**: Creates a Pareto plot in JMP, utilizing version 17 or later, to visualize failure causes and frequencies.

<!-- Keywords: #JMPScriptingLanguage, #ParetoPlot, #DataVisualization, #FailureAnalysis, #JMPVersion17 -->

**Code**:
```jsl
Open("data_table.jmp");
If( JMP Version() >= "17",
	Pareto Plot(
		Cause( :failure ),
		Freq( :N ),
		N Legend( 1 ),
		SendToReport(
			Dispatch( {"Plots"}, "201", ScaleBox,
				{Min( 8 ), Max( -1 ), Inc( 2 ), Minor Ticks( 0 ), Add Ref Line(
					{2, 5},
					"Solid",
					"Medium Light BlueCyan",
					"Range",
					1,
					0.25
				), Label Row(
					{Label Orientation( "Vertical" ), Show Major Grid( 1 ), Set Font( "Arial Narrow" ), Set Font Size( 11 ),
					Set Font Style( "Italic" )}
				)}
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Check JMP version.
3. If version >= 17, create Pareto plot.
4. Set cause variable to failure.
5. Set frequency variable to N.
6. Display legend.
7. Send report to Pareto plot.
8. Configure plot scale.
9. Add reference lines at 2 and 5.
10. Customize label row settings.



### Example 2
> **Summary**: Creates a Pareto plot to analyze failure rates, utilizing JMP version 17+ features and customizing cumulative percentage label formatting.

<!-- Keywords: #JMPScriptingLanguage, #ParetoPlot, #FailureRateAnalysis, #CustomLabelFormatting, #JMPVersion17 -->

**Code**:
```jsl
Open("data_table.jmp");
If( JMP Version() >= "17",
	Pareto Plot( Cause( :failure ), Freq( :N ), Label Cum Percent Points( 1 ), Cum Percent Label Format( "Percent", 12, 2 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Check JMP version compatibility.
3. If version is 17+, create Pareto plot.
4. Set cause variable to failure.
5. Set frequency variable to N.
6. Enable cumulative percentage points.
7. Format cumulative percentage label as percent.
8. Set label width to 12 characters.
9. Set label decimal places to 2.



### Example 3
> **Summary**: Creates Pareto plots to visualize failure data, with options for customization and horizontal orientation.

<!-- Keywords: #ParetoPlot, #JMPScriptingLanguage, #DataVisualization, #CustomizationOptions, #FailureAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
If( JMP Version() >= "17",
	Pareto Plot( Cause( :failure ), Freq( :N ), N Legend( 1 ) );
	Pareto Plot(
		Cause( :failure ),
		Freq( :N ),
		Orientation( "Horizontal" ),
		N Legend( 1 ),
		SendToReport(
			Dispatch( {"Plots"}, "102", ScaleBox, {Format( "Percent", 12, 0 ), Min( 0 ), Max( 1 ), Inc( 0.2 ), Minor Ticks( 1 )} )
		)
	);
);
```

**Code Explanation**:

1. Open data table.
2. Check JMP version compatibility.
3. Create Pareto plot.
4. Set cause variable.
5. Set frequency variable.
6. Display legend.
7. Create second Pareto plot.
8. Set cause variable.
9. Set frequency variable.
10. Set horizontal orientation.
11. Display legend.
12. Format scale box.
13. Set percent format.
14. Set minimum value.
15. Set maximum value.
16. Set increment value.
17. Enable minor ticks.



### Example 4
> **Summary**: Creates a Pareto Plot for 'failure' causes, using frequency variable 'N' and per unit rates calculation, compatible with JMP version 17+.

<!-- Keywords: #ParetoPlot, #JMPScriptingLanguage, #PerUnitRates, #FrequencyVariable, #JMPVersionCompatibility -->

**Code**:
```jsl
Open("data_table.jmp");
If( JMP Version() >= "17",
	Pareto Plot( Cause( :failure ), Freq( :N ), Per Unit Rates( 1 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Check JMP version compatibility.
3. If version is 17+, execute Pareto Plot.
4. Set cause variable to 'failure'.
5. Set frequency variable to 'N'.
6. Enable per unit rates calculation.
7. Calculate per unit rates for units.



### Example 5
> **Summary**: Creates Pareto plots for failure causes, combining specific causes and adding pin annotations to reports.

<!-- Keywords: #JMPScriptingLanguage, #ParetoPlot, #DataVisualization, #ReportGeneration, #FailureAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
If( JMP Version() >= "17",
	Pareto Plot(
		Cause( :failure ),
		Freq( :N ),
		Combine Causes( {"silicon defect", "doping"}, "Last 2" ),
		SendToReport(
			Dispatch( {"Plots"}, "Pareto Report", FrameBox,
				Add Pin Annotation(
					Seg( BarSeg( 1 ) ),
					Index( {5, 5} ),
					Index Row( {2, 2} ),
					UniqueID( 5 ),
					FoundPt( {333, 362} ),
					Origin( {5.15342960288809, 1.43285198555957} ),
					Offset( {-238, -207} ),
					RightOfCenter( 1 ),
					Tag Line( 1 )
				)
			)
		)
	);
	Pareto Plot(
		Cause( :failure ),
		Freq( :N ),
		Combine Causes( {"contamination", "metallization", "oxide defect"}, "First 3" ),
		SendToReport(
			Dispatch( {"Plots"}, "Pareto Report", FrameBox,
				Add Pin Annotation(
					Seg( BarSeg( 1 ) ),
					Index( {0, 0} ),
					Index Row( {0, 0} ),
					UniqueID( 0 ),
					FoundPt( {95, 186} ),
					Origin( {-0.0848375451263538, 37.458844765343} ),
					Offset( {41, 117} ),
					RightOfCenter( 0 ),
					Tag Line( 1 )
				)
			)
		)
	);
);
```

**Code Explanation**:

1. Open data table.
2. Check JMP version.
3. Create first Pareto plot.
4. Set cause variable.
5. Set frequency variable.
6. Combine specific causes.
7. Send report settings.
8. Add pin annotation.
9. Create second Pareto plot.
10. Repeat steps 4-9 for second plot.



### Example 6
> **Summary**: Creates a Pareto plot using Cause and N Legend, with missing value code settings for :age.

<!-- Keywords: #JSLScriptingLanguage, #ParetoPlot, #CauseAnalysis, #MissingValueHandling, #JMP17 -->

**Code**:
```jsl
Open("data_table.jmp");
If( JMP Version() >= "17",
	dt = Open("data_table.jmp");
	obj = Pareto Plot( Cause( :age ), N Legend( 1 ) );
	:age << Set Property( "Missing Value Codes", 999 );
	:age << Set Values( [999, 999] );
);
```

**Code Explanation**:

1. Open data_table data
2. Check JMP version.
3. If version >= 17, proceed.
4. Open data_table data
5. Create Pareto Plot.
6. Set Cause to :age.
7. Add N Legend.
8. Set Missing Value Code for :age.
9. Set :age values to 999.



### Example 7
> **Summary**: Creates a Pareto plot for age, with specific values set to 18 and 19, using JMP version 17 or later.

<!-- Keywords: #JMPScriptingLanguage, #ParetoPlot, #DataVisualization, #ConditionalStatements, #JMPVersionControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
If( JMP Version() >= "17",
	obj = Pareto Plot( Cause( :age ), N Legend( 1 ) );
	:age << Set Values( [18, 19] );
);
```

**Code Explanation**:

1. Open data table;
2. Check if JMP version is 17.
3. Create Pareto plot for age.
4. Set age values to 18 and 19.



### Example 8
> **Summary**: Creates and customizes a Pareto plot, selecting specific rows and hiding/excluding them based on user-defined criteria.

<!-- Keywords: #JMPScriptingLanguage, #ParetoPlot, #DataTableManagement, #RowSelection, #PlotCustomization -->

**Code**:
```jsl
Open("data_table.jmp");
If( JMP Version() >= "17",
	dt = Open("data_table.jmp");
	obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ), Per Unit Rates( 1 ) );
	obj << No Plot( 1 );
	dt << Get Rows Where();
	For( i = 5, i <= 65, i++,
		Selected( Row State( i ) ) = 1
	);
	dt << Hide and Exclude();
	dt << Clear Select;
);
```

**Code Explanation**:

1. Open data table.
2. Check JMP version.
3. Open data table.
4. Create Pareto plot.
5. Disable plot display.
6. Retrieve all rows.
7. Loop through rows 5 to 65.
8. Select specified rows.
9. Hide and exclude selected rows.
10. Clear row selection.



### Example 9
> **Summary**: Creates Pareto plots for failure causes, with options to customize subcategory bar styles.

<!-- Keywords: #JMPScriptingLanguage, #ParetoPlot, #DataVisualization, #CustomizationOptions, #FailureAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
If( JMP Version() >= "17",
	Pareto Plot( Cause( :failure ), Subcategory( :clean ), Freq( :N ) );
	Pareto Plot( Cause( :failure ), Subcategory( :clean ), Freq( :N ), Subcategory Bar Style( "Side by Side" ) );
	Pareto Plot( Cause( :failure ), Subcategory( :clean ), Freq( :N ), Subcategory Bar Style( "Stacked" ) );
	Pareto Plot( Cause( :failure ), Subcategory( :clean ), Freq( :N ), Subcategory Bar Style( "Bullet" ) );
	Pareto Plot( Cause( :failure ), Subcategory( :clean ), Freq( :N ), Subcategory Bar Style( "Nested" ) );
	Pareto Plot( Cause( :failure ), Subcategory( :clean ), Freq( :N ), Subcategory Bar Style( "Single" ) );
	Pareto Plot( Cause( :failure ), Subcategory( :clean ), Freq( :N ), Subcategory Bar Style( "Needle" ) );
	Pareto Plot( Cause( :failure ), Subcategory( :clean ), Freq( :N ), Subcategory Bar Style( "Float" ) );
);
```

**Code Explanation**:

1. Open data table;
2. Check JMP version compatibility.
3. Create Pareto plot for failure causes.
4. Create side-by-side subcategory bar Pareto plot.
5. Create stacked subcategory bar Pareto plot.
6. Create bullet subcategory bar Pareto plot.
7. Create nested subcategory bar Pareto plot.
8. Create single subcategory bar Pareto plot.
9. Create needle subcategory bar Pareto plot.
10. Create float subcategory bar Pareto plot.



### Example 10
> **Summary**: Creates a Pareto Plot for failure data, utilizing JMP version 17+ features to customize plot settings and report output.

<!-- Keywords: #JMPScriptingLanguage, #ParetoPlot, #DataVisualization, #ReportCustomization, #JMPVersionCompatibility -->

**Code**:
```jsl
Open("data_table.jmp");
If( JMP Version() >= "17",
	Pareto Plot(
		Cause( :failure ),
		X( :clean, :date ),
		Freq( :N ),
		SendToReport( Dispatch( {"Plots"}, "201", ScaleBox, {Label Row( Label Orientation( "Angled" ) )} ) )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Check JMP version compatibility.
3. Create Pareto Plot if version is 17+.
4. Set cause variable to failure.
5. Add clean and date to X-axis.
6. Use N for frequency.
7. Adjust report settings.
8. Angle label row orientation.



### Example 11
> **Summary**: Creates a Pareto plot to visualize process causes and frequencies, with options for per-unit rates and table match plots.

<!-- Keywords: #ParetoPlot, #JMPScriptingLanguage, #DataVisualization, #ProcessAnalysis, #TableMatchPlot -->

**Code**:
```jsl
Open("data_table.jmp");
If( JMP Version() >= "17",
	Pareto Plot(
		Cause( :Causes ),
		X( :Process ),
		Freq( :Count ),
		Tables Match Plot( {Per Unit Rates( 1 ), Test Rate Within Groups( 0 ), Test Rates Across Groups( 0 )} ),
		Per Unit Rates( 1 ),
		Reorder Horizontal( {"Process B", "Process A"} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Check JMP version.
3. If version >= 17, create Pareto plot.
4. Set cause variable.
5. Set X variable.
6. Set frequency variable.
7. Configure tables match plot options.
8. Enable per unit rates.
9. Reorder horizontal processes.



### Example 12
> **Summary**: Creates Pareto plots for causes and treatment groups, with customizable styling options, using JMP scripting language.

<!-- Keywords: #JMPScripting, #ParetoPlot, #CustomizationOptions, #DataVisualization, #StatisticalAnalysis -->

**Code**:
```jsl
Names Default To Here( 1 );
Open("data_table.jmp");
If( JMP Version() >= "17",
	Pareto Plot( Cause( :Cause of Death ), Subcategory( :Treatment Group ) );
	Pareto Plot( Cause( :Cause of Death ), Subcategory( :Treatment Group ), Subcategory Bar Style( Stacked ) );
	Pareto Plot(
		Cause( :Cause of Death ),
		Subcategory( :Treatment Group ),
		Show Cum Percent Points( 1 ),
		Subcategory Bar Style( Stacked )
	);
	Pareto Plot(
		Cause( :Cause of Death ),
		Subcategory( :Treatment Group ),
		Show Cum Percent Points( 1 ),
		Subcategory Bar Style( Stacked ),
		Cause Colors( {"Other Cause", "Medium Light Gray"} ),
		Cause Markers( {"Other Cause", "Star"} )
	);
	Pareto Plot(
		Cause( :Cause of Death ),
		Subcategory( :Initial Number of Tumors ),
		X( :Treatment Group ),
		Subcategory Bar Style( Needle )
	);
);
```

**Code Explanation**:

1. Set default names.
2. Open data_table data
3. Check JMP version compatibility.
4. Create Pareto plot for causes and treatment groups.
5. Create stacked Pareto plot for causes and treatment groups.
6. Add cumulative percentage points to Pareto plot.
7. Create detailed Pareto plot with specific styling.
8. Customize cause colors and markers in Pareto plot.
9. Create Pareto plot with initial number of tumors.
10. Use treatment group as X-axis variable.



## Pareto Plot using  Preferences
> **Summary**: Configures Pareto plots with customizable markers and sizes, while also resetting platform preferences to default.

<!-- Keywords: #JMPScriptingLanguage, #ParetoPlot, #Preferences, #DataVisualization, #Customization -->

**Code**:
```jsl
 Preferences( Factory Default );
 Preferences( Pareto Plot( Markers( Square ) ) );
Open("data_table.jmp");
Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Show Cum Percent Points( 1 ),
	SendToReport( Dispatch( {"Plots"}, FrameBox, {Marker Size( 3 )} ) )
);
 Preferences( Pareto Plot( Markers( Filled Right Triangle ) ) );
Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Show Cum Percent Points( 1 ),
	SendToReport( Dispatch( {"Plots"}, FrameBox, {Marker Size( 5 )} ) )
);
 Preferences( Factory Default );
```

**Code Explanation**:

1. Set platform preferences to default.
2. Change Pareto plot markers to square.
3. Open data table;
4. Create Pareto plot with failure causes.
5. Display cumulative percentage points.
6. Adjust marker size to 3.
7. Change Pareto plot markers to triangle.
8. Recreate Pareto plot with failure causes.
9. Display cumulative percentage points.
10. Adjust marker size to 5.
11. Reset platform preferences to default.



## Pareto Plot using Set Values
> **Summary**: Creates a Pareto plot for age, including setting missing value codes and generating a report with journal extraction.

<!-- Keywords: #JMPScriptingLanguage, #ParetoPlot, #DataTable, #MissingValueCodes, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:age << Set Values( [999, 999] );
obj = Pareto Plot( Cause( :age ), N Legend( 1 ) );
:age << Set Property( "Missing Value Codes", 999 );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
jrn = rpt[framebox( 1 )] << getjournal;
sub1 = Substr( jrn, Contains( jrn, "NObsInit" ) );
NString = Substr( sub1, 1, Contains( sub1, ")" ) );
actN = Num( Substitute( NString, "NObsInit(", "", ")", "" ) );
```

**Code Explanation**:

1. Open data table.
2. Modify age values to 999.
3. Create Pareto plot for age.
4. Set missing value code for age to 999.
5. Redo Pareto plot analysis.
6. Generate report from analysis.
7. Extract journal from report frame.
8. Locate "NObsInit" substring.
9. Extract number string from substring.
10. Convert extracted string to numeric value.



## Pareto Plot using Run script
> **Summary**: Analyze and visualize a fitted model, generating normal, Bayes, and Pareto plots, as well as extracting parameter estimates and standard errors.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #DataAnalysis, #Visualization, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Run script( "Fit Model" );
obj1 << Normal Plot( 1 );
obj1 << Bayes Plot( 1 );
obj1 << Pareto Plot( 1 );
rpt1 = obj1 << report;
transform mat = rpt1[Outline Box( "Transformation to make uncorrelated" )][Matrix Box( 1 )] << get;
est1 = (rpt1[Outline Box( "Parameter Estimates" )][Table Box( 1 )] << get as matrix)[1 :: 8, 1];
est2 = (transform mat * est1);
stderr = (rpt1[Outline Box( "Summary of Fit" )][Table Box( 1 )] << get as matrix)[3] / Sqrt( N Rows( dt ) );
est3 = est2[2 :: 8] * stderr;
idx = J( N Rows( est3 ), 1, 0 );
For( i = 1, i <= N Rows( est3 ), i++,
	If( est3[i] >= 0,
		idx[i] = 1,
		idx[i] = -1
	)
);
sorted est3 = Sort Descending( Abs( est3 ) ) :* idx;
bayes plot = (rpt1[Outline Box( "Bayes Plot" )][Table Box( 1 )] << get as matrix)[0, 1];
pareto plot = rpt1[Outline Box( "Pareto Plot of Transformed Estimates" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Run "Fit Model" script.
3. Generate normal plot.
4. Generate Bayes plot.
5. Generate Pareto plot.
6. Extract report object.
7. Retrieve transformation matrix.
8. Extract parameter estimates.
9. Apply transformation matrix.
10. Calculate standard error.
11. Adjust transformed estimates.
12. Determine sign indicators.
13. Sort estimates by magnitude.
14. Extract Bayes plot data.
15. Extract Pareto plot data.



