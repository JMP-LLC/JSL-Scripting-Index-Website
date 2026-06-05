# Ternary Plot

### Example 1
> **Summary**: Visualizes a ternary plot to analyze the relationships between CuSO4, Na2S2O3, and Glyoxal using a predefined data table.

<!-- Keywords: #TernaryPlot, #JMPScriptingLanguage, #DataVisualization, #ChemistryAnalysis, #MarkerSize -->

**Code**:
```jsl
// Ternary Plot
// Open data table
dt = Open("data_table.jmp");
// Ternary Plot
obj =
Ternary Plot(
	Y( :CuSO4, :Na2S2O3, :Glyoxal )
);
Report( obj )[framebox( 1 )] <<
Marker Size( 4 );
```

**Code Explanation**:

1. Open data table.
2. Create ternary plot object.
3. Set Y variables.
4. Access report object.
5. Modify marker size.



### Example 2
> **Summary**: Visualizes a ternary plot to compare the proportions of Propanol, Butanol, and Pentanol using a predefined data table.

<!-- Keywords: #TernaryPlot, #JSLScriptingLanguage, #DataVisualization, #ProportionComparison, #JMP -->

**Code**:
```jsl
// Ternary Plot
// Open data table
dt = Open("data_table.jmp");
// Ternary Plot
Ternary Plot(
	X( :Propanol, :Butanol, :Pentanol ),
	SendToReport(
		Dispatch( {}, "Ternary Plot",
			FrameBox,
			{Marker Size( 6 ),
			Marker Drawing Mode(
				"Normal"
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create ternary plot.
3. Set X variables.
4. Send report settings.
5. Configure marker size.
6. Set marker drawing mode.



### Example 3
> **Summary**: Visualizes a ternary plot to analyze the relationships between Screech, Whine, and Roar variables from a predefined data table.

<!-- Keywords: #TernaryPlot, #JMPScriptingLanguage, #DataVisualization, #QualityControl, #EngineTemperatureSensor -->

**Code**:
```jsl
// Ternary Plot
// Open data table
dt = Open("data_table.jmp");
// Ternary Plot
Ternary Plot(
	Y( :Screech, :Whine, :Roar )
);
```

**Code Explanation**:

1. Open table.
2. Create ternary plot.
3. Set Y variables.



### Example 4
> **Summary**: Visualizes a ternary plot from a predefined data table, utilizing the Ternary Plot function to display the relationships between three variables.

<!-- Keywords: #TernaryPlot, #DataVisualization, #JMPScriptingLanguage, #JSL, #QualityControl -->

**Code**:
```jsl
// Ternary Plot
// Open data table
dt = Open("data_table.jmp");
// Ternary Plot
Ternary Plot( Y( :p1, :p2, :p3 ) );
```

**Code Explanation**:

1. Open data table.
2. Create ternary plot.
3. Set Y variables.



### Example 5
> **Summary**: Visualizes a ternary plot from a predefined data table, setting marker size to 4.

<!-- Keywords: #TernaryPlot, #DataVisualization, #JMPScriptingLanguage, #MarkerSize, #DataTable -->

**Code**:
```jsl
// Ternary Plot
// Open data table
dt = Open("data_table.jmp");
// Ternary Plot
obj = Ternary Plot( Y( :p1, :p2, :p3 ) );
Report( obj )[framebox( 1 )] <<
Marker Size( 4 );
```

**Code Explanation**:

1. Open data table.
2. Create ternary plot.
3. Set marker size.



### Example 6
> **Summary**: Visualizes a ternary plot from a predefined data table, utilizing Y variables to represent the relationships between three categorical variables.

<!-- Keywords: #TernaryPlot, #JSLScriptingLanguage, #DataVisualization, #CategoricalVariables, #JMP -->

**Code**:
```jsl
// Ternary Plot
// Open data table
dt = Open("data_table.jmp");
// Ternary Plot
Ternary Plot( Y( :Yat, :Yee, :Sam ) );
```

**Code Explanation**:

1. Open data table.
2. Create ternary plot.
3. Set Y variables.



### Example 7
> **Summary**: Creates a ternary plot with customizable background color, frame size, and marker size, and captures its picture for further manipulation in a new window.

<!-- Keywords: #TernaryPlot, #JSLScriptingLanguage, #DataVisualization, #CustomizationOptions, #PictureCapture -->

**Code**:
```jsl
Open("data_table.jmp");
tp = Ternary Plot(
	Y( :p1, :p2, :p3 ),
	SendToReport(
		Dispatch( {}, "Ternary Plot", OutlineBox, {Background Color( 72 ), Set Title( "Ternary Plot: axes/background color (GCanvas)" )} ),
		Dispatch( {}, "Ternary Plot", FrameBox, {Frame Size( 480, 415 ), Background Color( 76 ), Marker Size( 4 )} )
	)
);
fb = Report( tp )[Picture Box( 1 )];
New Window( "test",
	Lineup Box( N Col( 3 ),
		Tab Page Box( "transparent scalable", fb << Get Picture( Transparent Background( 1 ) ) ),
		Tab Page Box( "opaque scalable", fb << Get Picture( Transparent Background( 0 ) ) ),
		Tab Page Box( "opaque scalable scaled", fb << Get Picture( Transparent Background( 0 ), Scale( 1.1 ) ) ),
		Tab Page Box( "transparent bitmap", fb << Get Picture( Transparent Background( 1 ), Type( "Bitmap" ) ) ),
		Tab Page Box( "opaque bitmap", fb << Get Picture( Transparent Background( 0 ), Type( "Bitmap" ) ) ),
		Tab Page Box( "opaque bitmap scaled", fb << Get Picture( Transparent Background( 0 ), Type( "Bitmap" ), Scale( 1.1 ) ) )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create ternary plot.
3. Set background color.
4. Set plot title.
5. Adjust frame size.
6. Change frame background.
7. Set marker size.
8. Capture plot picture.
9. Create new window.
10. Add tab pages with different picture settings.



### Example 8
> **Summary**: Creates a ternary plot from a predefined data table, utilizing custom formatting and random resets for interactive visualization.

<!-- Keywords: #TernaryPlot, #CustomFormatting, #RandomReset, #InteractiveVisualization, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Ternary Plot(
	Y( :Yat, :Yee, :Sam ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Format(
				"Custom",
				Formula(
					Random Reset( 6 );
					value > Random Uniform();
				),
				9
			)}
		),
		Dispatch( {}, "2", ScaleBox,
			{Format(
				"Custom",
				Formula(
					Random Reset( 3 );
					Random Integer( value * 10 );
				),
				9
			)}
		),
		Dispatch( {}, "3", ScaleBox, {Format( "Custom", Formula( Round( Trigamma( value ), 2 ) ), 9 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create ternary plot.
3. Set Y variables.
4. Customize first scale box.
5. Apply random reset.
6. Compare value to random uniform.
7. Customize second scale box.
8. Reset random seed.
9. Generate random integer.
10. Customize third scale box.



### Example 9
> **Summary**: Creates a ternary plot from a predefined data table, visualizing the relationships between three variables (p1, p2, and p3).

<!-- Keywords: #TernaryPlot, #DataVisualization, #JMPScriptingLanguage, #QualityControl, #CUSUMControlChart -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Ternary Plot( Y( :p1, :p2, :p3 ) );
```

**Code Explanation**:

1. Open data table.
2. Create ternary plot object.
3. Set plot variables.



### Example 10
> **Summary**: Creates a Ternary Plot from a predefined data table, customizing report background and frame settings.

<!-- Keywords: #TernaryPlot, #DataVisualization, #JMPScriptingLanguage, #Customization, #ReportSettings -->

**Code**:
```jsl
Open("data_table.jmp");
Ternary Plot(
	Y( :p1, :p2, :p3 ),
	SendToReport(
		Dispatch( {}, "Ternary Plot", OutlineBox, {Background Color( 72 ), Set Title( "Ternary Plot: axies/background color (GCanvas)" )} ),
		Dispatch( {}, "Ternary Plot", FrameBox, {Frame Size( 480, 415 ), Background Color( 76 ), Marker Size( 4 )} )
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Create ternary plot.
3. Set Y variables.
4. Customize report background.
5. Set plot title.
6. Adjust frame size.
7. Change frame background.
8. Modify marker size.



### Example 11
> **Summary**: Creates a CUSUM control chart for quality control monitoring using a predefined data table.

<!-- Keywords: #JSLScriptingLanguage, #TernaryPlot, #CUSUMControlChart, #QualityControlMonitoring, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Ternary Plot( Y( :p1, :p2, :p3 ), Contour Formula( :Pred Formula Y ) );
```

**Code Explanation**:

1. Open data table;
2. Create ternary plot object.
3. Set Y variables.
4. Define contour formula.



### Example 12
> **Summary**: Creates a ternary plot for quality control monitoring using a predefined data table, filtering by column p3.

<!-- Keywords: #TernaryPlot, #LocalDataFilter, #QualityControl, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Ternary Plot( Y( :p1, :p2, :p3 ), Local Data Filter( Add Filter( columns( :p3 ) ) ), );
```

**Code Explanation**:

1. Open data_table data
2. Create ternary plot.
3. Set Y variables: p1, p2, p3.
4. Add local data filter.
5. Filter by column p3.



### Example 13
> **Summary**: Creates a ternary plot with local data filtering for quality control monitoring, utilizing predefined data and custom table definition.

<!-- Keywords: #TernaryPlot, #LocalDataFilter, #QualityControl, #CustomTableDefinition, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Ternary Plot( Y( :p1, :p2, :p3 ), Local Data Filter( Add Filter( columns( :p3 ), Where( :p3 >= 0.23 & :p3 <= 0.24 ) ) ) );
New Table( "Test3",
	New Column( "X1", Values( [20, 10, 10, 30, 10, 10] ) ),
	New Column( "X2", Values( [10, 20, 10, 10, 30, 10] ) ),
	New Column( "X3", Values( [10, 10, 20, 10, 10, 30] ) ),
	New Column( "Sum", Character( 1 ), "Nominal", Values( {"A", "A", "A", "B", "B", "B"} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create ternary plot for p1, p2, p3.
3. Apply local data filter on p3.
4. Define new table named Test3.
5. Add column X1 with values.
6. Add column X2 with values.
7. Add column X3 with values.
8. Add column Sum with nominal values.
9. Set Sum column type to Nominal.



### Example 14
> **Summary**: Creates a ternary plot for quality control monitoring using a predefined data table, with interactive filtering and customization options.

<!-- Keywords: #TernaryPlot, #DataFiltering, #InteractiveVisualization, #QualityControl, #JMPScripting -->

**Code**:
```jsl
Open("data_table.jmp");
Ternary Plot( Y( :p1, :p2, :p3 ), Local Data Filter( Add Filter( columns( :p3 ), Where( :p3 >= 0.23 & :p3 <= 0.24 ) ) ) );
New Table( "Test3",
	New Column( "X1", Values( [20, 10, 10, 30, 10, 10] ) ),
	New Column( "X2", Values( [10, 20, 10, 10, 30, 10] ) ),
	New Column( "X3", Values( [10, 10, 20, 10, 10, 30] ) ),
	New Column( "Sum", Character( 1 ), "Nominal", Values( {"A", "A", "A", "B", "B", "B"} ) )
);
Ternary Plot( Y( :X1, :X2, :X3 ) );
```

**Code Explanation**:

1. Open data table;
2. Create ternary plot for p1, p2, p3.
3. Add local data filter for p3.
4. Create new table "Test3".
5. Add column X1 with values.
6. Add column X2 with values.
7. Add column X3 with values.
8. Add column Sum with character values.
9. Create ternary plot for X1, X2, X3.



### Example 15
> **Summary**: Creates a ternary plot for quality control monitoring, utilizing a predefined data table to visualize predicted values.

<!-- Keywords: #TernaryPlot, #QualityControl, #PredictiveModeling, #DataVisualization, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Ternary Plot( Y( :X1, :X2, :X3, :X4, :X5 ), Contour Formula( :Y1 Predicted ) );
```

**Code Explanation**:

1. Open data table;
2. Create ternary plot.
3. Set Y variables.
4. Add contour formula.



### Example 16
> **Summary**: Creates a ternary plot from a predefined data table, customizing reference lines and markers for quality control monitoring.

<!-- Keywords: #TernaryPlot, #QualityControl, #DataVisualization, #JMPScriptingLanguage, #Customization -->

**Code**:
```jsl
Open("data_table.jmp");
Ternary Plot(
	X( :p1, :p2, :p3 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Add Ref Line( {0.5, 0.6}, "Solid", "Medium Dark Red", "Label", 1, 0.25, Label Settings( {Label Color( "Blue" )} ) )}
		),
		Dispatch( {}, "Ternary Plot", FrameBox, {Marker Size( 4 ), Marker Drawing Mode( "Normal" )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create ternary plot.
3. Set plot axes.
4. Add reference lines.
5. Customize reference line style.
6. Customize reference line label.
7. Customize reference line label color.
8. Customize plot marker size.
9. Set marker drawing mode.
10. Finalize plot settings.



### Example 17
> **Summary**: Creates a ternary plot from a predefined data table, formatting scales and frame size for quality control monitoring.

<!-- Keywords: #JSLScripting, #TernaryPlot, #QualityControl, #DataVisualization, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
Ternary Plot(
	Y( :p1, :p2, :p3 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Format( "Percent", Use thousands separator( 0 ), 9, 0 )} ),
		Dispatch( {}, "2", ScaleBox, {Format( "Percent", Use thousands separator( 0 ), 9, 0 )} ),
		Dispatch( {}, "3", ScaleBox, {Format( "Percent", Use thousands separator( 0 ), 9, 0 )} ),
		Dispatch( {}, "Ternary Plot", FrameBox, {Frame Size( 352, 324 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create ternary plot.
3. Set Y variables.
4. Format first scale box.
5. Format second scale box.
6. Format third scale box.
7. Set frame size.



### Example 18
> **Summary**: Creates a ternary plot from a predefined data table, visualizing three variables: Screech, Whine, and Roar.

<!-- Keywords: #TernaryPlot, #DataVisualization, #JMPScriptingLanguage, #QualityControl, #EngineTemperatureSensor -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Ternary Plot( Y( :Screech, :Whine, :Roar ) );
```

**Code Explanation**:

1. Open data table;
2. Assign data table to variable.
3. Create ternary plot object.
4. Set plot variables.



### Example 19
> **Summary**: Creates a ternary plot for quality control monitoring by opening a predefined data table and visualizing three variables.

<!-- Keywords: #TernaryPlot, #QualityControl, #DataVisualization, #JMPScriptingLanguage, #CUSUM -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Ternary Plot( Y( :p1, :p2, :p3 ) );
```

**Code Explanation**:

1. Open table.
2. Create ternary plot.



### Example 20
> **Summary**: Creates a ternary plot from a predefined data table, showcasing three Y variables: Yat, Yee, and Sam.

<!-- Keywords: #TernaryPlot, #DataVisualization, #JMPScriptingLanguage, #QualityControl, #CUSUMControlChart -->

**Code**:
```jsl
Open("data_table.jmp");
Ternary Plot( Y( :Yat, :Yee, :Sam ) );
```

**Code Explanation**:

1. Open data table;
2. Create ternary plot.
3. Set Y variables: Yat, Yee, Sam.



### Example 21
> **Summary**: Creates a ternary plot with local data filtering and selection, excluding edge points from a predefined data table.

<!-- Keywords: #TernaryPlot, #LocalDataFilter, #DataSelection, #EdgePoints, #ReportObject -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Ternary Plot(
	Y( :p1, :p2, :p3 ),
	Local Data Filter( Add Filter( columns( :p1 ), Where( :p1 >= 0.6 & :p1 <= 0.8 ) ), Mode( Select( 0 ), Show( 1 ), Include( 1 ) ) ), 
);
dt << Select Where( :Point Type == "Edge" );
dt << Exclude();
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table;
2. Create ternary plot.
3. Add local data filter.
4. Filter p1 between 0.6 and 0.8.
5. Select edge points.
6. Exclude selected points.
7. Generate report object.



### Example 22
> **Summary**: Creates a ternary plot object using a predefined data table, with X variables p1, p2, and p3, and a contour formula defined by Pred Formula Y.

<!-- Keywords: #TernaryPlot, #ContourFormula, #PredFormulaY, #DataTable, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Ternary Plot( X( :p1, :p2, :p3 ), Contour Formula( :Pred Formula Y ) );
```

**Code Explanation**:

1. Open data table;
2. Create ternary plot object.
3. Set X variables: p1, p2, p3.
4. Define contour formula: Pred Formula Y.



### Example 23
> **Summary**: Creates a ternary plot using absolute values for Mullet, Sheepshead, and Croaker columns from a predefined data table.

<!-- Keywords: #TernaryPlot, #AbsoluteValue, #DataVisualization, #JMPScriptingLanguage, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Ternary Plot(
	Y(
		Transform Column( "Abs[Mullet]", Formula( Abs( :Mullet ) ) ),
		Transform Column( "Abs[Sheepshead]", Formula( Abs( :Sheepshead ) ) ),
		Transform Column( "Abs[Croaker]", Formula( Abs( :Croaker ) ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create ternary plot.
3. Transform Mullet column.
4. Use absolute value formula.
5. Transform Sheepshead column.
6. Use absolute value formula.
7. Transform Croaker column.
8. Use absolute value formula.
9. Plot transformed columns.
10. Display graph.



### Example 24
> **Summary**: Creates a ternary plot for quality control monitoring using a predefined data table, with adjustable marker size and report settings.

<!-- Keywords: #TernaryPlot, #QualityControl, #DataTable, #MarkerSize, #ReportSettings -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Ternary Plot( Y( :Yat, :Yee, :Sam ), SendToReport( Dispatch( {}, "Ternary Plot", FrameBox, {Marker Size( 6 )} ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create ternary plot object.
3. Set Y variables for plot.
4. Configure report settings.
5. Adjust marker size to 6.



### Example 25
> **Summary**: Creates a ternary plot with contour lines based on predicted ratings, utilizing the Ternary Plot platform in JMP.

<!-- Keywords: #TernaryPlot, #ContourLines, #PredictedRatings, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Ternary Plot(
	X( :Mullet, :Sheepshead, :Croaker ),
	Contour Formula( :Predicted Rating ),
	SendToReport( Dispatch( {}, "Ternary Plot", FrameBox ), Dispatch( {}, "", Number Col Edit Box( 2 ), set values( [300] ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create ternary plot.
3. Set X variables: Mullet, Sheepshead, Croaker.
4. Use "Predicted Rating" for contours.
5. Send report to dispatch.
6. Access Ternary Plot frame.
7. Find Number Col Edit Box.
8. Set value to 2.
9. Set values to [300].



### Example 26
> **Summary**: Creates a ternary plot from a predefined data table, utilizing the Ternary Plot platform to visualize and analyze three variables.

<!-- Keywords: #TernaryPlot, #DataVisualization, #JMPScriptingLanguage, #QualityControl, #Engineering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Ternary Plot(
	X( :Yat, :Yee, :Sam ),
	SendToReport(
		Dispatch( {}, "Ternary Plot", FrameBox,
			{Marker Size( 3 ), Row Legend( Finalist, Color( 1 ), Color Theme( "JMP Default" ), Marker( 1 ), Marker Theme( "Standard" ) )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create ternary plot.
3. Set X variables.
4. Send report message.
5. Dispatch to frame box.
6. Set marker size.
7. Add row legend.
8. Set legend color.
9. Apply color theme.
10. Set marker style.



### Example 27
> **Summary**: Creates and customizes ternary plots for quality control monitoring using predefined data tables, with features such as marker size adjustment and row legend settings.

<!-- Keywords: #TernaryPlot, #QualityControl, #DataVisualization, #JMPScriptingLanguage, #Customization -->

**Code**:
```jsl
dt = Open("data_table1.jmp");
obj = Ternary Plot( Y( :Yat, :Yee, :Sam ), SendToReport( Dispatch( {}, "Ternary Plot", FrameBox, {Marker Size( 6 )} ) ) );
Close( dt, NoSave );
dt = Open("data_table2.jmp");
obj = Ternary Plot(
	X( :Mullet, :Sheepshead, :Croaker ),
	Contour Formula( :Predicted Rating ),
	SendToReport( Dispatch( {}, "Ternary Plot", FrameBox ), Dispatch( {}, "", Number Col Edit Box( 2 ), set values( [300] ) ) )
);
Close( dt, NoSave );
dt = Open("data_table1.jmp");
obj = Ternary Plot(
	X( :Yat, :Yee, :Sam ),
	SendToReport(
		Dispatch( {}, "Ternary Plot", FrameBox,
			{Marker Size( 3 ), Row Legend( Finalist, Color( 1 ), Color Theme( "JMP Default" ), Marker( 1 ), Marker Theme( "Standard" ) )}
		)
	)
);
```

**Code Explanation**:

1. Open data_table1;
2. Create ternary plot for Yat, Yee, Sam.
3. Set marker size to 6.
4. Close data_table1 dataset without saving.
5. Open data_table2;
6. Create ternary plot for Mullet, Sheepshead, Croaker.
7. Add contour formula for Predicted Rating.
8. Set number col edit box value to 300.
9. Close data_table2 dataset without saving.
10. Reopen data_table1 dataset
11. Create ternary plot for Yat, Yee, Sam.
12. Set marker size to 3.
13. Add row legend for Finalist with specific settings.



### Example 28
> **Summary**: Creates ternary plots for quality control monitoring, utilizing predefined data tables and customizing marker sizes and row legends.

<!-- Keywords: #TernaryPlot, #QualityControl, #DataVisualization, #JMPScriptingLanguage, #Customization -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Ternary Plot( Y( :Yat, :Yee, :Sam ), SendToReport( Dispatch( {}, "Ternary Plot", FrameBox, {Marker Size( 6 )} ) ) );
dt = Open("data_table.jmp");
obj = Ternary Plot(
	X( :Mullet, :Sheepshead, :Croaker ),
	Contour Formula( :Predicted Rating ),
	SendToReport( Dispatch( {}, "Ternary Plot", FrameBox ), Dispatch( {}, "", Number Col Edit Box( 2 ), set values( [300] ) ) )
);
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Ternary Plot(
	X( :Yat, :Yee, :Sam ),
	SendToReport(
		Dispatch( {}, "Ternary Plot", FrameBox,
			{Marker Size( 3 ), Row Legend( Finalist, Color( 1 ), Color Theme( "JMP Default" ), Marker( 1 ), Marker Theme( "Standard" ) )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create ternary plot.
3. Set marker size to 6.
4. Open data table;
5. Create ternary plot.
6. Set X variables.
7. Add contour formula.
8. Set contour levels to 300.
9. Close "Fish Patty.jmp".
10. Open data table;
11. Create ternary plot.
12. Set X variables.
13. Set marker size to 3.
14. Add row legend for "Finalist".



## Ternary Plot using Set Values
> **Summary**: Creates and analyzes a ternary plot, setting missing value codes and generating a report.

<!-- Keywords: #TernaryPlot, #JSLScripting, #DataAnalysis, #ReportGeneration, #MissingValueHandling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Yat << Set Values( {0, 0, 0, 0} );
obj = Ternary Plot( Y( :Yat, :Yee, :Sam ) );
:Yat << Set Property( "Missing Value Codes", 0 );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
expr = rpt << Get Journal;
p = "x(.,.,.,.,";
ans = Pat Match( expr, p );
```

**Code Explanation**:

1. Open data table;
2. Set :Yat values to {0, 0, 0, 0}.
3. Create Ternary Plot.
4. Set :Yat missing value code to 0.
5. Redo analysis.
6. Generate report.
7. Extract journal expression.
8. Define pattern "x(.,.,.,.,".
9. Match pattern in expression.
10. Store match result.



