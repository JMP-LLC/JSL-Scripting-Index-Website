# Contour Plot

### Example 1
> **Summary**: Visualizes a contour plot from the data table, displaying amplitude values with contours and boundary lines.

<!-- Keywords: #ContourPlot, #DataVisualization, #JMPScriptingLanguage, #GraphicalAnalysis, #StatisticalGraphics -->

**Code**:
```jsl
// Contour Plot
// Open data table
dt = Open("data_table.jmp");
// Contour Plot
Contour Plot(
	X( x, y ),
	Y( :Amplitude ),
	Show Contours( 1 ),
	Show Boundary( 1 ),
	Fill Areas( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create contour plot.
3. Set X variables.
4. Set Y variable.
5. Show contours.
6. Show boundary.
7. Fill areas.



### Example 2
> **Summary**: Visualizes a contour plot from data in a table, displaying contours and boundaries with filled areas.

<!-- Keywords: #ContourPlot, #DataVisualization, #JMPScriptingLanguage, #TableOperations, #GraphicalOutput -->

**Code**:
```jsl
// Contour Plot
// Open data table
dt = Open("data_table.jmp");
// Contour Plot
Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Contours( 1 ),
	Show Boundary( 1 ),
	Fill Areas( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create contour plot.
3. Set X variables.
4. Set Y variable.
5. Show contours.
6. Show boundary.
7. Fill areas.



### Example 3
> **Summary**: Creates a contour plot from a data table, specifying X and Y variables, hiding data points, disabling area filling and labeling, and defining a contour range with 7 intervals.

<!-- Keywords: #ContourPlot, #DataVisualization, #JMPScriptingLanguage, #GraphicalAnalysis, #StatisticalGraphics -->

**Code**:
```jsl
Open("data_table.jmp");
Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 0 ),
	Fill Areas( 0 ),
	Label Contours( 0 ),
	Transform( "None" ),
	Specify Contours( Min( -4 ), Max( 8 ), N( 7 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Set X variables.
4. Set Y variable.
5. Hide data points.
6. Disable area filling.
7. Disable contour labeling.
8. Apply no transformation.
9. Define contour range.
10. Specify number of contours.



### Example 4
> **Summary**: Creates a contour plot with custom specifications, including data points, contour labels, and color scheme.

<!-- Keywords: #ContourPlot, #JMPScriptingLanguage, #DataVisualization, #Customization, #GraphicalOutput -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 1 ),
	Fill Areas( 0 ),
	Label Contours( 1 ),
	Reverse Colors( 1 ),
	Transform( "None" ),
	Show Boundary( 0 ),
	Specify Contours(
		Min( -4 ),
		Max( 8 ),
		N( 7 ),
		Contour( 1, -4, -5793511 ),
		Contour( 2, -2, -8423637 ),
		Contour( 3, 0, -10725064 ),
		Contour( 4, 2, -12632256 ),
		Contour( 5, 4, -12885662 ),
		Contour( 6, 6, -13595764 ),
		Contour( 7, 8, -14828355 )
	),
	SendToReport(
		Dispatch( {}, "Contour Plot for Z", OutlineBox, {Set Title( "Show Data Points, Show Contours, Label contours, Reverse Colors" )} ),
		Dispatch( {}, "Contour Plot Graph", FrameBox, {DispatchSeg( Contour Seg( 1 ), {Fill Color( {252, 11, 11} )} )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Set X variables.
4. Set Y variable.
5. Show data points.
6. Disable fill areas.
7. Enable label contours.
8. Reverse color scheme.
9. Set no transformation.
10. Hide boundary lines.



### Example 5
> **Summary**: Creates a contour plot from a data table, fitting it to the window and setting names default to here.

<!-- Keywords: #ContourPlot, #DataVisualization, #JMPScriptingLanguage, #FitToWindow, #NamesDefault -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Fit to Window( "Auto" );
Names Default To Here( 1 );
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Fit contour to window.
4. Set names default to here.



### Example 6
> **Summary**: Creates a contour plot object from a data table, with fit to window option enabled and global name resolution disabled.

<!-- Keywords: #ContourPlot, #DataTable, #FitToWindow, #GlobalNameResolution, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Fit to Window( "On" );
Names Default To Here( 1 );
```

**Code Explanation**:

1. Open data table;
2. Create contour plot object.
3. Set fit to window option.
4. Disable global name resolution.



### Example 7
> **Summary**: Creates a contour plot from a data table, setting X and Y variables while disabling fit to window.

<!-- Keywords: #ContourPlot, #DataVisualization, #JSLScripting, #FitToWindow, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Fit to Window( "Off" );
Names Default To Here( 1 );
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Set X variables.
4. Set Y variable.
5. Turn off fit to window.
6. Reset name default settings.



### Example 8
> **Summary**: Creates and customizes contour plots and graph builders in JMP, allowing users to visualize data with varying fit-to-window options.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #GraphBuilder, #FittoWindow, #DataVisualization -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Fit to Window( "Auto" );
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Fit to Window( "On" );
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Fit to Window( "Off" );
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = dt << Graph Builder(
	Size( 522, 452 ),
	Show Control Panel( 0 ),
	Variables( X( :Z ), Y( :X ), Y( :Y, Position( 1 ) ) ),
	Elements( Contour( X, Y( 1 ), Y( 2 ), Legend( 5 ) ) )
);
obj << Fit to Window( "Auto" );
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = dt << Graph Builder(
	Size( 522, 452 ),
	Show Control Panel( 0 ),
	Variables( X( :Z ), Y( :X ), Y( :Y, Position( 1 ) ) ),
	Elements( Contour( X, Y( 1 ), Y( 2 ), Legend( 5 ) ) )
);
obj << Fit to Window( "On" );
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = dt << Graph Builder(
	Size( 522, 452 ),
	Show Control Panel( 0 ),
	Variables( X( :Z ), Y( :X ), Y( :Y, Position( 1 ) ) ),
	Elements( Contour( X, Y( 1 ), Y( 2 ), Legend( 5 ) ) )
);
obj << Fit to Window( "Off" );
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = dt << Graph Builder(
	Size( 522, 452 ),
	Show Control Panel( 0 ),
	Variables( X( :Z ), Y( :X ), Y( :Y, Position( 1 ) ) ),
	Elements( Contour( X, Y( 1 ), Y( 2 ), Legend( 5 ) ) )
);
obj << Fit to Window( "Maintain Aspect Ratio" );
```

**Code Explanation**:

1. Set names default.
2. Open data_table data
3. Create contour plot.
4. Fit plot to window automatically.
5. Reset names default.
6. Open data_table data
7. Create contour plot.
8. Fit plot to window on.
9. Reset names default.
10. Open data_table data
11. Create contour plot.
12. Fit plot to window off.
13. Reset names default.
14. Open data_table data
15. Create graph builder.
16. Set size and hide control panel.
17. Define variables and elements.
18. Fit plot to window automatically.
19. Reset names default.
20. Open data_table data
21. Create graph builder.
22. Set size and hide control panel.
23. Define variables and elements.
24. Fit plot to window on.
25. Reset names default.
26. Open data_table data
27. Create graph builder.
28. Set size and hide control panel.
29. Define variables and elements.
30. Fit plot to window off.
31. Reset names default.
32. Open data_table data
33. Create graph builder.
34. Set size and hide control panel.
35. Define variables and elements.
36. Fit plot to window maintaining aspect ratio.



### Example 9
> **Summary**: Creates and customizes contour plots in JMP, allowing for interactive exploration of data.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #GraphBuilder, #FitToWindow, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Fit to Window( "Auto" );
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Fit to Window( "On" );
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Fit to Window( "Off" );
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = dt << Graph Builder(
	Size( 522, 452 ),
	Show Control Panel( 0 ),
	Variables( X( :Z ), Y( :X ), Y( :Y, Position( 1 ) ) ),
	Elements( Contour( X, Y( 1 ), Y( 2 ), Legend( 5 ) ) )
);
obj << Fit to Window( "Auto" );
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = dt << Graph Builder(
	Size( 522, 452 ),
	Show Control Panel( 0 ),
	Variables( X( :Z ), Y( :X ), Y( :Y, Position( 1 ) ) ),
	Elements( Contour( X, Y( 1 ), Y( 2 ), Legend( 5 ) ) )
);
obj << Fit to Window( "On" );
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = dt << Graph Builder(
	Size( 522, 452 ),
	Show Control Panel( 0 ),
	Variables( X( :Z ), Y( :X ), Y( :Y, Position( 1 ) ) ),
	Elements( Contour( X, Y( 1 ), Y( 2 ), Legend( 5 ) ) )
);
obj << Fit to Window( "Off" );
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = dt << Graph Builder(
	Size( 522, 452 ),
	Show Control Panel( 0 ),
	Variables( X( :Z ), Y( :X ), Y( :Y, Position( 1 ) ) ),
	Elements( Contour( X, Y( 1 ), Y( 2 ), Legend( 5 ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Fit plot to window (auto).
4. Reset names default.
5. Repeat steps 1-3.
6. Fit plot to window (on).
7. Reset names default.
8. Repeat steps 1-3.
9. Fit plot to window (off).
10. Reset names default.



### Example 10
> **Summary**: Creates a contour plot with specific contour specifications and data point display, while saving the journal to a temporary location.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #DataVisualization, #Journaling, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
cp = Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 1 ),
	Fill Areas( 0 ),
	Label Contours( 1 ),
	Reverse Colors( 1 ),
	Transform( "None" ),
	Show Boundary( 0 ),
	Specify Contours(
		Min( -4 ),
		Max( 8 ),
		N( 7 ),
		Contour( 1, -4, -5793511 ),
		Contour( 2, -2, -8423637 ),
		Contour( 3, 0, -10725064 ),
		Contour( 4, 2, -12632256 ),
		Contour( 5, 4, -12885662 ),
		Contour( 6, 6, -13595764 ),
		Contour( 7, 8, -14828355 )
	),
	SendToReport(
		Dispatch( {}, "Contour Plot for Z", OutlineBox, {Set Title( "Show Data Points, Show Contours, Label contours,
Reverse Colors" )} ),
		Dispatch( {}, "Contour Plot Graph", FrameBox, {DispatchSeg( Contour Seg( 1 ), {Fill Color( {252, 11, 11} )} )} )
	)
);
cp << journal();
Current Journal() << save journal( "$TEMP\temp.jrn" );
Current Journal() << close window();
```

**Code Explanation**:

1. Open data table.
2. Create contour plot.
3. Set X variables.
4. Set Y variable.
5. Show data points.
6. Do not fill areas.
7. Label contours.
8. Reverse colors.
9. Set contour specifications.
10. Save journal to temp location.



### Example 11
> **Summary**: Creates a contour plot with custom specifications, including data points, contour labels, and color reversal.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #DataVisualization, #Customization, #Reporting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
cp = Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 1 ),
	Fill Areas( 0 ),
	Label Contours( 1 ),
	Reverse Colors( 1 ),
	Transform( "None" ),
	Show Boundary( 0 ),
	Specify Contours(
		Min( -4 ),
		Max( 8 ),
		N( 7 ),
		Contour( 1, -4, -5793511 ),
		Contour( 2, -2, -8423637 ),
		Contour( 3, 0, -10725064 ),
		Contour( 4, 2, -12632256 ),
		Contour( 5, 4, -12885662 ),
		Contour( 6, 6, -13595764 ),
		Contour( 7, 8, -14828355 )
	),
	SendToReport(
		Dispatch( {}, "Contour Plot for Z", OutlineBox, {Set Title( "Show Data Points, Show Contours, Label contours,
Reverse Colors" )} ),
		Dispatch( {}, "Contour Plot Graph", FrameBox, {DispatchSeg( Contour Seg( 1 ), {Fill Color( {252, 11, 11} )} )} )
	)
);
cp << journal();
Current Journal() << save journal( "$TEMP\temp.jrn" );
Current Journal() << close window();
Open( "$TEMP\temp.jrn" );
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Set X and Y axes.
4. Set Z as Y variable.
5. Show data points.
6. Do not fill areas.
7. Label contours.
8. Reverse colors.
9. Save report.
10. Save journal as temp.jrn.



### Example 12
> **Summary**: Creates a contour plot from data in 'data_table.jmp', specifying contour limits and area filling, while hiding data points and disabling contour labels.

<!-- Keywords: #JSLScriptingLanguage, #ContourPlot, #DataVisualization, #JMP, #StatisticalAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 0 ),
	Fill Areas( 1 ),
	Label Contours( 0 ),
	Transform( "None" ),
	Specify Contours( Min( -5 ), Max( 10 ), N( 5 ) )
);
```

**Code Explanation**:

1. Open data_table data
2. Create contour plot.
3. Set X variables.
4. Set Y variable.
5. Hide data points.
6. Enable area filling.
7. Disable contour labels.
8. Apply no transformation.
9. Specify contour limits.
10. Define number of contours.



### Example 13
> **Summary**: Creates a contour plot from a data table, specifying contour levels and hiding data points.

<!-- Keywords: #ContourPlot, #DataVisualization, #JMPScriptingLanguage, #StatisticalAnalysis, #DataScience -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 0 ),
	Fill Areas( 1 ),
	Label Contours( 0 ),
	Transform( "None" ),
	Specify Contours( Min( -5 ), Max( 10 ), N( 5 ) )
);
obj << Redo Analysis;
```

**Code Explanation**:

1. Open data table;
2. Create contour plot object.
3. Set X variables.
4. Set Y variable.
5. Hide data points.
6. Fill contour areas.
7. Disable contour labels.
8. Apply no transformation.
9. Specify contour levels.
10. Redo analysis.



### Example 14
> **Summary**: Creates and manipulates a contour plot in JMP, specifying custom contour levels and saving/retrieving the resulting contours.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #DataVisualization, #Customization, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Specify Contours( Min( -4 ), Max( 6 ), N( 3 ), Contour( 1, -4, -2768895 ), Contour( 2, 1, -9344469 ), Contour( 3, 6, -13927556 ) );
dt2 = obj << Save Contours;
obj << Revert Contours;
obj << Retrieve Contours( dt2 );
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Specify contour levels.
4. Save contours to dt2.
5. Revert to original contours.
6. Retrieve saved contours.



### Example 15
> **Summary**: Creates and customizes a contour plot from a data table, specifying contour limits and defining specific contours.

<!-- Keywords: #ContourPlot, #DataVisualization, #JMPScriptingLanguage, #Customization, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Specify Contours( Min( -4 ), Max( 6 ), N( 3 ), Contour( 1, -4, -2768895 ), Contour( 2, 1, -9344469 ), Contour( 3, 6, -13927556 ) );
dt3 = obj << Save Contours;
obj << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Specify contour limits.
4. Define specific contours.
5. Save contour data.
6. Close contour window.



### Example 16
> **Summary**: Creates and manipulates contour plots in JMP, specifying custom contour levels and saving/retrieving contours to/from a data table.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #DataTable, #CustomLevels, #Visualization -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Specify Contours( Min( -4 ), Max( 6 ), N( 3 ), Contour( 1, -4, -2768895 ), Contour( 2, 1, -9344469 ), Contour( 3, 6, -13927556 ) );
dt2 = obj << Save Contours;
obj << Revert Contours;
obj << Retrieve Contours( dt2 );
dt = Open("data_table.jmp");
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Specify Contours( Min( -4 ), Max( 6 ), N( 3 ), Contour( 1, -4, -2768895 ), Contour( 2, 1, -9344469 ), Contour( 3, 6, -13927556 ) );
dt3 = obj << Save Contours;
obj << Close Window;
dt << Contour Plot( X( :X, :Y ), Y( :Z ), Retrieve From( dt3 ) );
```

**Code Explanation**:

1. Set default names scope.
2. Open data table;
3. Create contour plot.
4. Specify contour levels.
5. Save contours to new table.
6. Revert to original contours.
7. Retrieve saved contours.
8. Reopen "data_table.jmp".
9. Create another contour plot.
10. Specify contour levels again.
11. Save contours to another table.
12. Close the contour plot window.
13. Create final contour plot with retrieved contours.



### Example 17
> **Summary**: Creates and customizes a contour plot in JMP, specifying contour limits and saving contours to a data table.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #DataVisualization, #Customization, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Specify Contours( Min( -4 ), Max( 6 ), N( 3 ), Contour( 1, -4, -2768895 ), Contour( 2, 1, -9344469 ), Contour( 3, 6, -13927556 ) );
dt2 = obj << Save Contours;
obj << Revert Contours;
obj << Retrieve Contours( dt2 );
dt = Open("data_table.jmp");
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Specify Contours( Min( -4 ), Max( 6 ), N( 3 ), Contour( 1, -4, -2768895 ), Contour( 2, 1, -9344469 ), Contour( 3, 6, -13927556 ) );
dt3 = obj << Save Contours;
obj << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Specify contour limits.
4. Save contours to dt2.
5. Revert contour settings.
6. Retrieve contours from dt2.
7. Open data table;
8. Create contour plot.
9. Specify contour limits.
10. Save contours to dt3 and close window.



### Example 18
> **Summary**: Creates a contour plot with specified ranges and contours from a data table in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #DataVisualization, #CustomizationOptions, #JSLCode -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Specify Contours(
	Min( -4 ),
	Max( 8 ),
	N( 4 ),
	Contour( 1, -4, -2768895 ),
	Contour( 2, 0, -7700704 ),
	Contour( 3, 4, -12632256 ),
	Contour( 4, 8, -14575206 ),
	Contour( 5, 8, -16517899 )
);
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Specify contour range.
4. Set minimum value to -4.
5. Set maximum value to 8.
6. Define 4 contours.
7. Set first contour at -4.
8. Set second contour at 0.
9. Set third contour at 4.
10. Set fourth contour at 8.



### Example 19
> **Summary**: Creates and customizes a contour plot from a data table, specifying contour limits and levels.

<!-- Keywords: #ContourPlot, #DataVisualization, #JMPScriptingLanguage, #CustomizationOptions, #DataAnalysis -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Specify Contours(
	Min( -4 ),
	Max( 8 ),
	N( 4 ),
	Contour( 1, -4, -2768895 ),
	Contour( 2, 0, -7700704 ),
	Contour( 3, 4, -12632256 ),
	Contour( 4, 8, -14575206 ),
	Contour( 5, 8, -16517899 )
);
obj << Revert Contours;
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create contour plot.
4. Specify contour limits.
5. Define contour levels.
6. Revert contour settings.



### Example 20
> **Summary**: Creates a contour plot from data in 'data_table.jmp', specifying contours with custom levels and ranges.

<!-- Keywords: #JSLScripting, #ContourPlot, #DataVisualization, #Customization, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Specify Contours( Min( -4 ), Max( 6 ), N( 3 ), Contour( 1, -4, -2768895 ), Contour( 2, 1, -9344469 ), Contour( 3, 6, -13927556 ) );
```

**Code Explanation**:

1. Open data_table data
2. Create contour plot.
3. Set X variables: X, Y.
4. Set Y variable: Z.
5. Specify contour range.
6. Set minimum contour value.
7. Set maximum contour value.
8. Define number of contours.
9. Set first contour level.
10. Set second contour level.
11. Set third contour level.



### Example 21
> **Summary**: Creates a contour plot from a data table, specifying the range and number of contours.

<!-- Keywords: #ContourPlot, #DataVisualization, #JMPScriptingLanguage, #GraphicalOutput, #Customization -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Specify Contours( Min( -4 ), Max( 6 ), N( 3 ), Contour( 1, -4, -2768895 ), Contour( 2, 1, -9344469 ), Contour( 3, 6, -13927556 ) );
obj << Save Contours;
```

**Code Explanation**:

1. Set default names.
2. Open data table;
3. Create contour plot.
4. Specify contour range.
5. Define number of contours.
6. Set first contour level.
7. Set second contour level.
8. Set third contour level.
9. Save specified contours.



### Example 22
> **Summary**: Creates a contour plot from a data table, specifying grid and contour levels, and applying range normalization.

<!-- Keywords: #ContourPlot, #DataVisualization, #JMPScriptingLanguage, #GridSettings, #RangeNormalization -->

**Code**:
```jsl
Open("data_table.jmp");
Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 0 ),
	Fill Areas( 0 ),
	Label Contours( 0 ),
	Transform( "Range Normalized" ),
	Grid( [25 -5, 5 0.416666666666667, 25 -5, 5 0.416666666666667] ),
	Specify Contours( Min( -4 ), Max( 8 ), N( 7 ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create contour plot.
3. Set X variables.
4. Set Y variable.
5. Hide data points.
6. Disable area fill.
7. Disable contour labels.
8. Apply range normalization.
9. Define grid specifications.
10. Specify contour levels.



### Example 23
> **Summary**: Creates two contour plots from a data table, specifying X and Y variables, Z variable, grid specifications, and contour range and count.

<!-- Keywords: #ContourPlot, #JMPScriptingLanguage, #DataVisualization, #GridSpecifications, #RangeNormalization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 0 ),
	Fill Areas( 0 ),
	Label Contours( 0 ),
	Transform( "Range Normalized" ),
	Grid( [25 -5, 5 0.416666666666667, 25 -5, 5 0.416666666666667] ),
	Specify Contours( Min( -4 ), Max( 8 ), N( 7 ) )
);
Contour Plot( X( :X, :Y ), Y( :Z ), Show Contours( 1 ), Show Boundary( 1 ), Fill Areas( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Set X and Y variables.
4. Set Z variable.
5. Hide data points.
6. Disable area fill.
7. Disable contour labels.
8. Apply range normalization transform.
9. Define grid specifications.
10. Specify contour range and count.
11. Create second contour plot.
12. Set X and Y variables.
13. Set Z variable.
14. Show contours.
15. Show boundary.
16. Enable area fill.



### Example 24
> **Summary**: Creates a contour plot from a data table, specifying grid and contour limits, and applying range normalization.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #DataVisualization, #GridSettings, #RangeNormalization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 0 ),
	Fill Areas( 0 ),
	Label Contours( 0 ),
	Transform( "Range Normalized" ),
	Grid( [25 -5, 5 0.416666666666667, 25 -5, 5 0.416666666666667] ),
	Specify Contours( Min( -4 ), Max( 8 ), N( 7 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Set X variables.
4. Set Y variable.
5. Hide data points.
6. Disable area filling.
7. Disable contour labels.
8. Apply range normalization.
9. Define grid specifications.
10. Specify contour limits.



### Example 25
> **Summary**: Creates a contour plot from a data table, specifying X and Y variables.

<!-- Keywords: #JSLScriptingLanguage, #ContourPlot, #DataVisualization, #JMP, #Scripting -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Contour Plot( X( :X, :Y ), Y( :Z ) );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create contour plot object.
4. Set X variables.
5. Set Y variable.



### Example 26
> **Summary**: Creates a contour plot to visualize ozone levels, specifying contour ranges and details.

<!-- Keywords: #ContourPlot, #JMPScriptingLanguage, #DataVisualization, #OzoneLevels, #CustomizedPlotting -->

**Code**:
```jsl
Open("data_table.jmp");
Contour Plot(
	X( :X, :Y ),
	Y( :OZONE ),
	Show Data Points( 0 ),
	Fill Areas( 1 ),
	Label Contours( 0 ),
	Transform( "None" ),
	Specify Contours(
		Min( 0.1 ),
		Max( 0.3 ),
		N( 5 ),
		Contour( 1, 0.1, -6714080 ),
		Contour( 2, 0.15, -10001867 ),
		Contour( 3, 0.2, -12632256 ),
		Contour( 4, 0.25, -13078929 ),
		Contour( 5, 0.3, -14373972 ),
		Contour( 6, 0.3, -16517899 )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create contour plot.
3. Set X variables.
4. Set Y variable.
5. Hide data points.
6. Enable fill areas.
7. Disable label contours.
8. Use no transformation.
9. Define contour range.
10. Specify contour details.



### Example 27
> **Summary**: Creates a contour plot from a data table, specifying contours and axis visibility.

<!-- Keywords: #ContourPlot, #DataVisualization, #JMPScriptingLanguage, #AxisVisibility, #Customization -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 0 ),
	Fill Areas( 0 ),
	Label Contours( 0 ),
	Transform( "None" ),
	Specify Contours(
		Min( -4 ),
		Max( 8 ),
		N( 7 ),
		Contour( 1, -4, -5793511 ),
		Contour( 2, -2, -8423637 ),
		Contour( 3, 0, -10725064 ),
		Contour( 4, 2, -12632256 ),
		Contour( 5, 4, -12885662 ),
		Contour( 6, 6, -13595764 ),
		Contour( 7, 8, -14828355 )
	),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),
		Dispatch( {}, "2", ScaleBox, {Label Row( Show Major Grid( 1 ) )} )
	)
);
Report( obj )[AxisBox( 1 )] << Visibility( "Collapse" );
Report( obj )[AxisBox( 2 )] << Visibility( "Collapse" );
```

**Code Explanation**:

1. Open data table;
2. Create contour plot object.
3. Set X variables to :X and :Y.
4. Set Y variable to :Z.
5. Hide data points.
6. Disable area filling.
7. Disable contour labels.
8. Use no transformation.
9. Define specific contours.
10. Collapse X and Y axes.



### Example 28
> **Summary**: Creates a contour plot from a data table, specifying contour levels and hiding data points.

<!-- Keywords: #ContourPlot, #DataVisualization, #JMPScriptingLanguage, #ReportGeneration, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 0 ),
	Fill Areas( 0 ),
	Label Contours( 0 ),
	Transform( "None" ),
	Specify Contours(
		Min( -4 ),
		Max( 8 ),
		N( 7 ),
		Contour( 1, -4, -5793511 ),
		Contour( 2, -2, -8423637 ),
		Contour( 3, 0, -10725064 ),
		Contour( 4, 2, -12632256 ),
		Contour( 5, 4, -12885662 ),
		Contour( 6, 6, -13595764 ),
		Contour( 7, 8, -14828355 )
	),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),
		Dispatch( {}, "2", ScaleBox, {Label Row( Show Major Grid( 1 ) )} )
	)
);
Report( obj )[AxisBox( 1 )] << Visibility( "Collapse" );
Report( obj )[AxisBox( 2 )] << Visibility( "Collapse" );
obj << Journal;
```

**Code Explanation**:

1. Open data table.
2. Create contour plot object.
3. Set X and Y variables.
4. Set Z variable.
5. Hide data points.
6. Disable area filling.
7. Disable contour labels.
8. Use no transformation.
9. Specify contour levels.
10. Display report with grid lines.



### Example 29
> **Summary**: Creates a contour plot from a data table, specifying X and Y variables, hiding data points, disabling area fill, enabling contour labels, and configuring report legend.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #DataVisualization, #ReportConfiguration, #ScriptAutomation -->

**Code**:
```jsl
Open("data_table.jmp");
Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 0 ),
	Fill Areas( 0 ),
	Label Contours( 1 ),
	Transform( "None" ),
	Specify Contours( Min( -4 ), Max( 8 ), N( 7 ) ),
	SendToReport( Dispatch( {}, "1111", ScaleBox, {Legend Model( 1, Type( 0, 524288, Item ID( "Z", 1 ) ) )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Set X variables.
4. Set Y variable.
5. Hide data points.
6. Disable area fill.
7. Enable contour labels.
8. Apply no transformation.
9. Define contour range and count.
10. Configure report legend.



### Example 30
> **Summary**: Creates a contour plot from a data table, applying range normalization and customizing contour levels.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #RangeNormalization, #CustomizedContours, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 0 ),
	Fill Areas( 0 ),
	Label Contours( 0 ),
	Transform( "Range Normalized" ),
	Specify Contours( Min( 0.00195660717271321 ), Max( 2.95266928192615 ), N( 7 ) ),
	SendToReport(
		Dispatch( {}, "1111", ScaleBox,
			{Legend Model(
				1,
				Type( 0, 524288, Item ID( "Z", 1 ) ),
				Properties( 0, {gradient( {Scale Values( [. 1] ), Scale Type( "Log" )} )}, Item ID( "Z", 1 ) )
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Set X variables.
4. Set Y variable.
5. Hide data points.
6. Disable area fill.
7. Disable contour labels.
8. Apply range normalization.
9. Define contour levels.
10. Adjust Z scale to log.



### Example 31
> **Summary**: Creates a contour plot from a data table, displaying one contour line and filling areas between contours.

<!-- Keywords: #ContourPlot, #DataVisualization, #JMPScriptingLanguage, #InteractiveGraphics, #StatisticalAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Contour Plot( X( :X, :Y ), Y( :Z ), Show Contours( 1 ), Show Boundary( 1 ), Fill Areas( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create contour plot object.
3. Set X variables to X and Y.
4. Set Y variable to Z.
5. Display 1 contour line.
6. Display boundary lines.
7. Fill areas between contours.



### Example 32
> **Summary**: Creates a contour plot with fill areas from a data table, utilizing the Jet theme.

<!-- Keywords: #JSLScriptingLanguage, #ContourPlot, #FillAreas, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj2 = dt << Contour Plot( X( :X, :Y ), Y( :Z ), Fill Areas( 1 ) );
DesirableTheme = "Jet";
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Set X variables.
4. Set Y variable.
5. Enable fill areas.
6. Assign theme "Jet".



### Example 33
> **Summary**: Creates a contour plot with fill areas from a data table, applying a specified color theme.

<!-- Keywords: #JSLScriptingLanguage, #ContourPlot, #FillAreas, #ColorTheme, #DataTable -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj2 = dt << Contour Plot( X( :X, :Y ), Y( :Z ), Fill Areas( 1 ) );
DesirableTheme = "Jet";
obj2 << Color Theme( DesirableTheme );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create contour plot.
4. Set X variables.
5. Set Y variable.
6. Enable fill areas.
7. Define color theme.
8. Apply color theme.



### Example 34
> **Summary**: Creates a contour plot with color theme, captures the list box, and saves it as a PNG image.

<!-- Keywords: #JMPScripting, #ContourPlot, #ColorTheme, #WindowHandler, #PNGImage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
cp = Contour Plot( X( :weight, :height ), Y( :height ) );
With Window Handler(
	cp << Color Theme(),
	Function( {window},
		Show( (window << xpath( "/HeadBox/ListBox" ))[1] << save picture( "$temp\JMP-18423cp.png", png ) );
		window << close window();
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Create contour plot.
3. Set color theme.
4. Define window handler.
5. Capture color theme list box.
6. Save list box as PNG.
7. Close contour plot window.



### Example 35
> **Summary**: Creates and customizes a contour plot from a data table, capturing a list box element and saving the plot as a PNG file.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #DataVisualization, #WindowHandler, #PNGExport -->

**Code**:
```jsl
dt = Open("data_table.jmp");
cp = Contour Plot( X( :weight, :height ), Y( :height ) );
With Window Handler(
	cp << Color Theme(),
	Function( {window},
		Show( (window << xpath( "/HeadBox/ListBox" ))[1] << save picture( "$temp\JMP-18423cp.png", png ) );
		window << close window();
	)
);
Open( "$temp\JMP-18423cp.png" );
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Define window handler.
4. Apply color theme.
5. Capture list box element.
6. Save plot as PNG.
7. Close plot window.
8. Open saved PNG file.



### Example 36
> **Summary**: Creates a contour plot from a data table, with customizable scales and labels.

<!-- Keywords: #ContourPlot, #DataVisualization, #JMPScriptingLanguage, #CustomizationOptions, #ReportScaling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 1 ),
	Fill Areas( 1 ),
	Label Contours( 1 ),
	Transform( "Range Normalized" ),
	Specify Contours(
		Min( -4 ),
		Max( 8 ),
		N( 7 ),
		Contour( 1, -4, -5793511 ),
		Contour( 2, -2, -8423637 ),
		Contour( 3, 0, -10725064 ),
		Contour( 4, 2, -12632256 ),
		Contour( 5, 4, -12885662 ),
		Contour( 6, 6, -13595764 ),
		Contour( 7, 8, -14828355 ),
		Contour( 8, 8, -16517899 )
	),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Format( "Custom", Formula( Char( value * 1760 ) || " (yd)" ), 12 )} ),
		Dispatch( {}, "2", ScaleBox, {Format( "Custom", Formula( Char( value * 1.61 ) || " (km)" ), 10 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Set X variables: X, Y.
4. Set Y variable: Z.
5. Show data points.
6. Fill contour areas.
7. Label contours.
8. Apply range normalization.
9. Specify contour levels and values.
10. Customize report scales.



### Example 37
> **Summary**: Creates a contour plot to visualize OZONE and CO data, grouped by response, with range normalization applied.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #DataVisualization, #GroupingOptions, #RangeNormalization -->

**Code**:
```jsl
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
```

**Code Explanation**:

1. Open data table.
2. Create contour plot.
3. Set X variables: Longitude, Latitude.
4. Set Y variables: OZONE, CO.
5. Hide data points.
6. Disable area filling.
7. Disable contour labels.
8. Apply range normalization.
9. Group contours.
10. Order groups by response descending.



### Example 38
> **Summary**: Creates a contour plot with specified levels and filters data to focus on X values greater than 200.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #DataFiltering, #RangeNormalization, #AutomaticRecalculation -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 1 ),
	Fill Areas( 1 ),
	Label Contours( 1 ),
	Transform( "Range Normalized" ),
	Specify Contours(
		Min( -4 ),
		Max( 8 ),
		N( 7 ),
		Contour( 1, -4, -5793511 ),
		Contour( 2, -2, -8423637 ),
		Contour( 3, 0, -10725064 ),
		Contour( 4, 2, -12632256 ),
		Contour( 5, 4, -12885662 ),
		Contour( 6, 6, -13595764 ),
		Contour( 7, 8, -14828355 ),
		Contour( 8, 8, -16517899 )
	)
);
obj << Automatic Recalc( 1 );
obj << Local Data Filter(
	Location( {0, 0} ),
	Add Filter( columns( :X ), Where( :X >= 200 ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
dt2 = obj << Save Contours;
minX = Col Minimum( dt2:X );
test = minX >= 200;
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Set X and Y variables.
4. Set Z variable.
5. Show data points.
6. Fill areas.
7. Label contours.
8. Apply range normalization.
9. Specify contour levels.
10. Enable automatic recalculation.
11. Add local data filter.
12. Set filter location.
13. Filter X values greater than 200.
14. Save contour data.
15. Find minimum X value.
16. Test if minimum X is 200 or greater.



### Example 39
> **Summary**: Creates a contour plot with specified levels and range normalization, while filtering data based on a condition.

<!-- Keywords: #ContourPlot, #DataFiltering, #RangeNormalization, #JMPScriptingLanguage, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 1 ),
	Fill Areas( 1 ),
	Label Contours( 1 ),
	Transform( "Range Normalized" ),
	Specify Contours(
		Min( -4 ),
		Max( 8 ),
		N( 7 ),
		Contour( 1, -4, -5793511 ),
		Contour( 2, -2, -8423637 ),
		Contour( 3, 0, -10725064 ),
		Contour( 4, 2, -12632256 ),
		Contour( 5, 4, -12885662 ),
		Contour( 6, 6, -13595764 ),
		Contour( 7, 8, -14828355 ),
		Contour( 8, 8, -16517899 )
	)
);
obj << Automatic Recalc( 0 );
dt << Select Where( :X >= 200 );
dt << Exclude();
dt2 = obj << Save Contours;
minX = Col Minimum( dt2:X );
test = minX < 200;
```

**Code Explanation**:

1. Open data table;
2. Create contour plot object.
3. Set X and Y axes.
4. Set Z axis.
5. Show data points.
6. Fill contour areas.
7. Label contours.
8. Apply range normalization.
9. Specify contour levels.
10. Disable automatic recalculation.



### Example 40
> **Summary**: Creates and customizes a contour plot in JMP, applying range normalization and specifying contour levels, while also enabling automatic recalculation and adding a local data filter.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #RangeNormalization, #LocalDataFilter, #AutomaticRecalculation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 1 ),
	Fill Areas( 1 ),
	Label Contours( 1 ),
	Transform( "Range Normalized" ),
	Specify Contours(
		Min( -4 ),
		Max( 8 ),
		N( 7 ),
		Contour( 1, -4, -5793511 ),
		Contour( 2, -2, -8423637 ),
		Contour( 3, 0, -10725064 ),
		Contour( 4, 2, -12632256 ),
		Contour( 5, 4, -12885662 ),
		Contour( 6, 6, -13595764 ),
		Contour( 7, 8, -14828355 ),
		Contour( 8, 8, -16517899 )
	)
);
obj << Automatic Recalc( 1 );
obj << Local Data Filter(
	Location( {0, 0} ),
	Add Filter( columns( :X ), Where( :X >= 200 ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
dt2 = obj << Save Contours;
minX = Col Minimum( dt2:X );
test = minX >= 200;
Close( dt, NoSave );
Close( dt2, NoSave );
dt = Open("data_table.jmp");
obj = Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 1 ),
	Fill Areas( 1 ),
	Label Contours( 1 ),
	Transform( "Range Normalized" ),
	Specify Contours(
		Min( -4 ),
		Max( 8 ),
		N( 7 ),
		Contour( 1, -4, -5793511 ),
		Contour( 2, -2, -8423637 ),
		Contour( 3, 0, -10725064 ),
		Contour( 4, 2, -12632256 ),
		Contour( 5, 4, -12885662 ),
		Contour( 6, 6, -13595764 ),
		Contour( 7, 8, -14828355 ),
		Contour( 8, 8, -16517899 )
	)
);
obj << Automatic Recalc( 0 );
dt << Select Where( :X >= 200 );
dt << Exclude();
dt2 = obj << Save Contours;
minX = Col Minimum( dt2:X );
test = minX < 200;
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Set X, Y, Z variables.
4. Show data points.
5. Fill areas.
6. Label contours.
7. Apply range normalization.
8. Specify contour levels.
9. Enable automatic recalculation.
10. Add local data filter.
11. Save contour plot data.
12. Find minimum X value.
13. Test if minimum X is >= 200.
14. Close datasets without saving.
15. Reopen data_table dataset
16. Create contour plot again.
17. Disable automatic recalculation.
18. Select rows where X >= 200.
19. Exclude selected rows.
20. Save contour plot data.
21. Find minimum X value.
22. Test if minimum X is < 200.



### Example 41
> **Summary**: Creates a contour plot with specific settings, including show data points, label contours, and reverse colors.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #DataVisualization, #CustomizationOptions, #ReportOutput -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 1 ),
	Fill Areas( 0 ),
	Label Contours( 1 ),
	Reverse Colors( 1 ),
	Transform( "None" ),
	Show Boundary( 0 ),
	Specify Contours(
		Min( -4 ),
		Max( 8 ),
		N( 7 ),
		Contour( 1, -4, -5793511 ),
		Contour( 2, -2, -8423637 ),
		Contour( 3, 0, -10725064 ),
		Contour( 4, 2, -12632256 ),
		Contour( 5, 4, -12885662 ),
		Contour( 6, 6, -13595764 ),
		Contour( 7, 8, -14828355 )
	),
	SendToReport(
		Dispatch( {}, "Contour Plot for Z", OutlineBox, {Set Title( "Show Data Points, Show Contours, Label contours, Reverse Colors" )} ),
		Dispatch( {}, "Contour Plot Graph", FrameBox, {DispatchSeg( Contour Seg( 1 ), {Fill Color( {252, 11, 11} )} )} ),
		Dispatch( {}, FrameBox, {Frame Size( 88, 219 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Contour Plot object.
3. Set X variables: X, Y.
4. Set Y variable: Z.
5. Show data points.
6. Do not fill areas.
7. Label contours.
8. Reverse colors.
9. Use no transformation.
10. Do not show boundary.



### Example 42
> **Summary**: Creates and compares contour plots with specified levels, utilizing range normalization and data point display.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #RangeNormalization, #DataPointDisplay, #ReportComparison -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 1 ),
	Fill Areas( 1 ),
	Label Contours( 1 ),
	Transform( "Range Normalized" ),
	Specify Contours(
		Min( -4 ),
		Max( 8 ),
		N( 7 ),
		Contour( 1, -4, -5793511 ),
		Contour( 2, -2, -8423637 ),
		Contour( 3, 0, -10725064 ),
		Contour( 4, 2, -12632256 ),
		Contour( 5, 4, -12885662 ),
		Contour( 6, 6, -13595764 ),
		Contour( 7, 8, -14828355 ),
		Contour( 8, 8, -16517899 )
	)
);
rpt1 = obj << Report;
expr1 = rpt1 << Get Journal;
:X << Set Property( "Missing Value Codes", 0 );
obj2 = obj << Redo Analysis;
rpt2 = obj2 << Report;
expr2 = rpt2 << Get Journal;
ans = Equal( expr1, expr2 );
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Set X, Y, Z variables.
4. Show data points.
5. Fill areas.
6. Label contours.
7. Apply range normalization.
8. Specify contour levels.
9. Compare initial and redone reports.
10. Check equality of expressions.



### Example 43
> **Summary**: Creates a contour plot to visualize relationships between 'height', 'weight', and 'age' variables, with interactive filtering by 'sex'.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #DataVisualization, #InteractiveFiltering, #ByGroup -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Contour Plot(
	X( Transform Column( "Abs[height]", Formula( Abs( :height ) ) ), Transform Column( "Abs[weight]", Formula( Abs( :weight ) ) ) ),
	Y( Transform Column( "Abs[age]", Formula( Abs( :age ) ) ) ),
	Show Data Points( 0 ),
	Fill Areas( 0 ),
	Label Contours( 0 ),
	Transform( "None" ),
	Specify Contours(
		Min( 12.5 ),
		Max( 16.5 ),
		N( 9 ),
		Contour( 1, 12.5, -5201643 ),
		Contour( 2, 13, -7371739 ),
		Contour( 3, 13.5, -9344463 ),
		Contour( 4, 14, -11119814 ),
		Contour( 5, 14.5, -12632256 ),
		Contour( 6, 15, -12821925 ),
		Contour( 7, 15.5, -13272710 ),
		Contour( 8, 16, -14049890 ),
		Contour( 9, 16.5, -15153465 )
	),
	By( Transform Column( "First[sex]", Character, Formula( Word( 1, :sex ) ) ) )
);
```

**Code Explanation**:

1. Open table.
2. Create contour plot.
3. Transform height column.
4. Transform weight column.
5. Transform age column.
6. Hide data points.
7. Disable fill areas.
8. Disable label contours.
9. Set transform to none.
10. Define contour specifications.



### Example 44
> **Summary**: Creates a contour plot to visualize population density across geographic locations, with adjustable alpha level and control panel.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #DataVisualization, #GeographicAnalysis, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contour Plot( X( :Longitude, :Latitude ), Y( :Pop ), Fill Areas( 1 ) );
obj << Set Alpha( 0.06 );
obj << Show Control Panel( 1 );
rpt = obj << report;
Close( dt, NoSave );
cert_title = {title( "Contour Plot for ELEV_M" )};
```

**Code Explanation**:

1. Open data table.
2. Create contour plot.
3. Set alpha level.
4. Show control panel.
5. Generate report.
6. Close data table.
7. Define certification title.



### Example 45
> **Summary**: Creates a contour plot to visualize population data, applying range normalization and labeling contours.

<!-- Keywords: #JSLScriptingLanguage, #ContourPlot, #RangeNormalization, #DataVisualization, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contour Plot( X( :Longitude, :Latitude ), Y( :Pop ), Fill Areas( 1 ) );
obj << Transform( "Range Normalized" );
obj << Label Contours( 1 );
rpt = obj << report;
Close( dt, NoSave );
cert_title = {title( "Contour Plot for POP" )};
```

**Code Explanation**:

1. Open data table.
2. Create contour plot.
3. Set X to Longitude, Latitude.
4. Set Y to Pop.
5. Fill contour areas.
6. Apply range normalization.
7. Label contours.
8. Generate report object.
9. Close data table without saving.
10. Define contour plot title.



### Example 46
> **Summary**: Creates a contour plot to visualize population data based on longitude and latitude coordinates, with no transformation applied.

<!-- Keywords: #JSLScriptingLanguage, #ContourPlot, #DataVisualization, #GeographicAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contour Plot( X( :Longitude, :Latitude ), Y( :Pop ), Fill Areas( 1 ) );
obj << Transform( "None" );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create contour plot object.
3. Set X variables: Longitude, Latitude.
4. Set Y variable: Pop.
5. Fill areas in contour plot.
6. Apply no transformation.
7. Generate report from plot.



### Example 47
> **Summary**: Creates a contour plot to visualize population distribution based on longitude and latitude, with adjustable alpha level and control panel.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #DataVisualization, #GeographicAnalysis, #InteractiveReporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contour Plot( X( :Longitude, :Latitude ), Y( :Pop ), Fill Areas( 1 ) );
obj << Set Alpha( 0.06 );
obj << Show Control Panel( 1 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create contour plot object.
3. Set X variables: Longitude, Latitude.
4. Set Y variable: Population.
5. Fill contour areas.
6. Set alpha level to 0.06.
7. Show control panel.
8. Generate report object.



### Example 48
> **Summary**: Creates a contour plot to visualize population density based on longitude and latitude, with range normalization and labeled contours.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #RangeNormalization, #DataVisualization, #GeographicAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contour Plot( X( :Longitude, :Latitude ), Y( :Pop ), Fill Areas( 1 ) );
obj << Transform( "Range Normalized" );
obj << Label Contours( 1 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create contour plot object.
3. Set X-axis variables.
4. Set Y-axis variable.
5. Fill contour areas.
6. Apply range normalization.
7. Label contour lines.
8. Generate report object.



### Example 49
> **Summary**: Creates a contour plot to visualize Oxy levels by sex, with specific contours defined and data points hidden.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #DataVisualization, #ByGroup, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Contour Plot(
	SendToByGroup( {:Sex == "F"} ),
	X( :Weight, :Runtime ),
	Y( :Oxy ),
	Show Data Points( 0 ),
	Fill Areas( 1 ),
	Label Contours( 0 ),
	Specify Contours(
		Min( 40 ),
		Max( 55 ),
		N( 5 ),
		Contour( 1, 40, -2768895 ),
		Contour( 2, 43.75, -7371739 ),
		Contour( 3, 47.5, -11119814 ),
		Contour( 4, 51.25, -12821925 ),
		Contour( 5, 55, -14049890 ),
		Contour( 6, 55, -16517899 )
	),
	By( :Sex ),
	SendToByGroup( {:Sex == "F"}, SendToReport( Dispatch( {"Contour Plot for Oxy Sex=F"}, FrameBox, {Frame Size( 113, 150 )} ) ) ),
	SendToByGroup( {:Sex == "M"}, SendToReport( Dispatch( {"Contour Plot for Oxy Sex=M"}, FrameBox, {Frame Size( 113, 150 )} ) ) )
);
rpt = obj << report;
rpt << journal;
Close( dt, NoSave );
Current Journal() << close window( no save );
```

**Code Explanation**:

1. Open data table;
2. Create contour plot object.
3. Filter data by female sex.
4. Set X variables: Weight, Runtime.
5. Set Y variable: Oxy.
6. Hide data points.
7. Enable filled areas.
8. Disable contour labels.
9. Define specific contours.
10. Group by Sex variable.
11. Resize female contour plot frame.
12. Resize male contour plot frame.
13. Generate report from plot.
14. Add report to journal.
15. Close dataset without saving.
16. Close journal without saving.



### Example 50
> **Summary**: Creates a contour plot to visualize the relationship between Weight, Runtime, and Oxy in a data table, with customizable contour levels and frame resizing.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #DataVisualization, #Customization, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contour Plot(
	X( :Weight, :Runtime ),
	Y( :Oxy ),
	Show Data Points( 0 ),
	Fill Areas( 1 ),
	Label Contours( 0 ),
	Specify Contours(
		Min( 30 ),
		Max( 60 ),
		N( 8 ),
		Contour( 1, 30, -2768895 ),
		Contour( 2, 34.2857142857143, -5793511 ),
		Contour( 3, 38.5714285714286, -8423637 ),
		Contour( 4, 42.8571428571429, -10725064 ),
		Contour( 5, 47.1428571428571, -12632256 ),
		Contour( 6, 51.4285714285714, -12885662 ),
		Contour( 7, 55.7142857142857, -13595764 ),
		Contour( 8, 60, -14828355 ),
		Contour( 9, 60, -16517899 )
	),
	SendToReport( Dispatch( {}, FrameBox, {Frame Size( 113, 213 )} ) )
);
rpt = obj << report;
rpt << journal;
Close( dt, NoSave );
Current Journal() << close window( no save );
```

**Code Explanation**:

1. Open data table.
2. Create contour plot object.
3. Set X variables: Weight, Runtime.
4. Set Y variable: Oxy.
5. Hide data points.
6. Enable fill areas.
7. Disable label contours.
8. Define contour levels and values.
9. Resize frame to 113x213.
10. Generate report and journal.
11. Close data table without saving.
12. Close journal window without saving.



### Example 51
> **Summary**: Creates a contour plot from a data table, specifying contour levels and frame size, and saves the report to a journal.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #DataVisualization, #ReportGeneration, #JournalOutput -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 0 ),
	Fill Areas( 1 ),
	Label Contours( 0 ),
	Specify Contours(
		Min( -12 ),
		Max( 6 ),
		N( 6 ),
		Contour( 1, -12, -2768895 ),
		Contour( 2, -8.4, -6714080 ),
		Contour( 3, -4.8, -10001867 ),
		Contour( 4, -1.2, -12632256 ),
		Contour( 5, 2.4, -13078929 ),
		Contour( 6, 6, -14373972 ),
		Contour( 7, 6, -16517899 )
	),
	SendToReport( Dispatch( {}, FrameBox, {Frame Size( 117, 171 )} ) )
);
rpt = obj << report;
rpt << journal;
Close( dt, NoSave );
Current Journal() << close window( no save );
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Set X variables.
4. Set Y variable.
5. Hide data points.
6. Enable fill areas.
7. Disable contour labels.
8. Define contour levels.
9. Set frame size.
10. Save report to journal.
11. Close data table.
12. Close journal window.



### Example 52
> **Summary**: Creates a contour plot to visualize Oxy levels by sex, with customizable contour levels and frame sizes for each sex group.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #DataVisualization, #ByGroup, #ReportGeneration -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Contour Plot(
	SendToByGroup( {:Sex == "F"} ),
	X( :Weight, :Runtime ),
	Y( :Oxy ),
	Show Data Points( 0 ),
	Fill Areas( 1 ),
	Label Contours( 0 ),
	Specify Contours(
		Min( 40 ),
		Max( 55 ),
		N( 5 ),
		Contour( 1, 40, -2768895 ),
		Contour( 2, 43.75, -7371739 ),
		Contour( 3, 47.5, -11119814 ),
		Contour( 4, 51.25, -12821925 ),
		Contour( 5, 55, -14049890 ),
		Contour( 6, 55, -16517899 )
	),
	By( :Sex ),
	SendToByGroup( {:Sex == "F"}, SendToReport( Dispatch( {"Contour Plot for Oxy Sex=F"}, FrameBox, {Frame Size( 113, 150 )} ) ) ),
	SendToByGroup( {:Sex == "M"}, SendToReport( Dispatch( {"Contour Plot for Oxy Sex=M"}, FrameBox, {Frame Size( 113, 150 )} ) ) )
);
rpt = obj << report;
rpt << journal;
```

**Code Explanation**:

1. Open data table;
2. Create contour plot object.
3. Filter data by female sex.
4. Set X-axis variables: Weight, Runtime.
5. Set Y-axis variable: Oxy.
6. Hide data points.
7. Enable fill areas.
8. Disable contour labels.
9. Define contour levels and values.
10. Group plots by sex.
11. Adjust frame size for female plot.
12. Adjust frame size for male plot.
13. Generate report from plot.
14. Save report as journal.



### Example 53
> **Summary**: Creates a contour plot from a data table, specifying X variables Weight and Runtime, Y variable Oxy, and custom contour levels.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #DataVisualization, #Customization, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contour Plot(
	X( :Weight, :Runtime ),
	Y( :Oxy ),
	Show Data Points( 0 ),
	Fill Areas( 1 ),
	Label Contours( 0 ),
	Specify Contours(
		Min( 30 ),
		Max( 60 ),
		N( 8 ),
		Contour( 1, 30, -2768895 ),
		Contour( 2, 34.2857142857143, -5793511 ),
		Contour( 3, 38.5714285714286, -8423637 ),
		Contour( 4, 42.8571428571429, -10725064 ),
		Contour( 5, 47.1428571428571, -12632256 ),
		Contour( 6, 51.4285714285714, -12885662 ),
		Contour( 7, 55.7142857142857, -13595764 ),
		Contour( 8, 60, -14828355 ),
		Contour( 9, 60, -16517899 )
	),
	SendToReport( Dispatch( {}, FrameBox, {Frame Size( 113, 213 )} ) )
);
rpt = obj << report;
rpt << journal;
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Set X variables: Weight, Runtime.
4. Set Y variable: Oxy.
5. Hide data points.
6. Fill contour areas.
7. Disable contour labels.
8. Specify contour levels.
9. Set frame size to 113x213.
10. Generate report and open journal.



### Example 54
> **Summary**: Creates a contour plot from a data table, customizing contour levels and frame size.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #DataVisualization, #CustomizationOptions, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 0 ),
	Fill Areas( 1 ),
	Label Contours( 0 ),
	Specify Contours(
		Min( -12 ),
		Max( 6 ),
		N( 6 ),
		Contour( 1, -12, -2768895 ),
		Contour( 2, -8.4, -6714080 ),
		Contour( 3, -4.8, -10001867 ),
		Contour( 4, -1.2, -12632256 ),
		Contour( 5, 2.4, -13078929 ),
		Contour( 6, 6, -14373972 ),
		Contour( 7, 6, -16517899 )
	),
	SendToReport( Dispatch( {}, FrameBox, {Frame Size( 117, 171 )} ) )
);
rpt = obj << report;
rpt << journal;
```

**Code Explanation**:

1. Open data table.
2. Create contour plot object.
3. Set X variables to :X and :Y.
4. Set Y variable to :Z.
5. Hide data points.
6. Enable fill areas.
7. Disable label contours.
8. Define custom contour levels.
9. Set frame size to 117x171.
10. Generate report and open journal.



### Example 55
> **Summary**: Creates a contour plot from a data table, setting X and Y axis variables.

<!-- Keywords: #ContourPlot, #DataVisualization, #JSLScripting, #AxisVariables, #DataTable -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Contour Plot( X( :X, :Y ), Y( :Z ) );
```

**Code Explanation**:

1. Open data table;
2. Create contour plot object.
3. Set X axis variables.
4. Set Y axis variable.



### Example 56
> **Summary**: Creates a contour plot with fill areas from a data table, specifying X and Y variables and enabling fill areas.

<!-- Keywords: #ContourPlot, #FillAreas, #DataTable, #JMPScriptingLanguage, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contour Plot( X( :X, :Y ), Y( :Z ), Fill Areas( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create contour plot object.
3. Set X variables: X, Y.
4. Set Y variable: Z.
5. Enable fill areas.



### Example 57
> **Summary**: Opens a data table and generates a contour plot to visualize the relationship between X, Y, and Z variables.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #DataVisualization, #TableOperations, #GraphicalOutput -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contour Plot( X( :X, :Y ), Y( :Z ) );
```

**Code Explanation**:

1. Open table.
2. Create contour plot.



### Example 58
> **Summary**: Creates and displays contour plots for X, Y, Z variables in a data table, with optional fill areas.

<!-- Keywords: #JSLScriptingLanguage, #ContourPlot, #DataVisualization, #FillAreas, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contour Plot( X( :X, :Y ), Y( :Z ) );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Contour Plot( X( :X, :Y ), Y( :Z ), Fill Areas( 1 ) );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Contour Plot( X( :X, :Y ), Y( :Z ) );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Contour Plot( X( :X, :Y ), Y( :Z ) );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Contour Plot( X( :X, :Y ), Y( :Z ) );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Contour Plot( X( :X, :Y ), Y( :Z ), Fill Areas( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create contour plot for X, Y, Z.
3. Close file without saving.
4. Reopen "data_table.jmp".
5. Create contour plot with filled areas.
6. Close file without saving.
7. Reopen "data_table.jmp".
8. Create contour plot for X, Y, Z.
9. Close file without saving.
10. Reopen "data_table.jmp".
11. Create contour plot for X, Y, Z.
12. Close file without saving.
13. Reopen "data_table.jmp".
14. Create contour plot for X, Y, Z.
15. Close file without saving.
16. Reopen "data_table.jmp".
17. Create contour plot with filled areas.



### Example 59
> **Summary**: Creates a contour plot with customized color scheme, contour limits, and count, and generates a report object.

<!-- Keywords: #ContourPlot, #Customization, #ReportObject, #DataVisualization, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Reverse Colors( 1 );
obj << Specify Contours( Min( -4 ), Max( 6 ), N( 5 ) );
rpt = obj << report;
cert text = {labels( -6.5, 8.5 ), labels( -6.5, 8.5 ), labels( -6.5, 8.5 )};
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Reverse color scheme.
4. Set contour limits and count.
5. Generate report object.
6. Define certification text labels.



### Example 60
> **Summary**: Creates and customizes a contour plot from a data table, specifying contour limits, reversing color scheme, saving contours to a new table, retrieving saved contours, and generating a report.

<!-- Keywords: #JSLScripting, #ContourPlot, #DataTable, #ReportGeneration, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Specify Contours( Min( -4 ), Max( 6 ), N( 3 ), Contour( 1, -4, -2768895 ), Contour( 2, 1, -9344469 ), Contour( 3, 6, -13927556 ) );
obj << Reverse Colors( 1 );
newdt = obj << Save Contours;
obj << Revert Contours;
obj << Retrieve Contours( newdt );
rpt = obj << report;
cert text = {labels( -6, 11 ), labels( -6, 11 ), labels( -6, 11 )};
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Set contour limits.
4. Reverse color scheme.
5. Save contours to new table.
6. Revert original contours.
7. Retrieve saved contours.
8. Generate report.
9. Define certificate text labels.



### Example 61
> **Summary**: Creates a contour plot with specified fill areas and contour limits, utilizing the Contour Plot platform in JMP.

<!-- Keywords: #ContourPlot, #FillAreas, #JMPScriptingLanguage, #DataVisualization, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Fill Areas( 1 ),
	Specify Contours(
		Min( -5 ),
		Max( 7.5 ),
		N( 6 ),
		Contour( 1, -5, 10 ),
		Contour( 2, -2.5, 7 ),
		Contour( 3, 0, 4 ),
		Contour( 4, 2.5, 12 ),
		Contour( 5, 5, 9 ),
		Contour( 6, 7.5, 6 ),
		Contour( 7, 7.5, 3 )
	)
);
obj << Reverse Colors( 1 );
obj << RedoAnalysis;
```

**Code Explanation**:

1. Open data table;
2. Create contour plot object.
3. Set X variables.
4. Set Y variable.
5. Enable fill areas.
6. Define contour limits.
7. Specify number of contours.
8. Set individual contour values.
9. Reverse color scheme.
10. Redo analysis.



### Example 62
> **Summary**: Creates and manipulates a contour plot from a data table, specifying custom contour limits and saving/retrieving the resulting contours.

<!-- Keywords: #JSLScriptingLanguage, #ContourPlot, #DataTable, #CustomLimits, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Specify Contours( Min( -4 ), Max( 6 ), N( 3 ), Contour( 1, -4, -2768895 ), Contour( 2, 1, -9344469 ), Contour( 3, 6, -13927556 ) );
newdt = obj << Save Contours;
obj << Revert Contours;
obj << Retrieve Contours( newdt );
rpt = obj << report;
cert text = {labels( -6, 11 ), labels( -6, 11 ), labels( -6, 11 )};
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Define contour limits.
4. Save contours to new table.
5. Revert to original contours.
6. Retrieve saved contours.
7. Generate report.
8. Define certificate text.



### Example 63
> **Summary**: Creates a contour plot with specified levels and generates a report, utilizing the Contour Plot platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ContourPlot, #ReportGeneration, #DataVisualization, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Specify Contours( Min( -4 ), Max( 6 ), N( 3 ), Contour( 1, -4, -2768895 ), Contour( 2, 1, -9344469 ), Contour( 3, 6, -13927556 ) );
rpt = obj << report;
cert text = {labels( -5.955078125, -4, 1, 6, 10 ), labels( -5.955078125, -4, 1, 6, 10 ), labels( -5.955078125, -4, 1, 6, 10 )};
```

**Code Explanation**:

1. Open data table;
2. Create contour plot.
3. Set X and Y axes.
4. Set Z axis.
5. Specify contour levels.
6. Generate report.
7. Define certificate text.



## Contour Plot using RGB Color
### Example 1
> **Summary**: Creates a contour plot with specified X and Y variables, color theme, and boundary settings.

<!-- Keywords: #ContourPlot, #JSLScriptingLanguage, #DataVisualization, #GraphicalUserInterface, #JMP -->

**Code**:
```jsl
dt = Open( "$sample_data/big class.jmp", invisible );
magenta = RGB Color( 1, 0, 1 );
cp = dt << Contour Plot(
	X( :weight, :height ),
	Y( :age ),
	Show Boundary( 0 ),
	Show Data Points( 0 ),
	Fill Areas( 1 ),
	Label Contours( 0 ),
	Transform( "Range Normalized" ),
	Color Theme( "White to Black" ),
	Show Boundary( 0 ),
	Specify Contours( Min( 12.5 ), Max( 16.5 ), N( 9 ) ),
	SendToReport( Dispatch( {}, "Contour Plot Graph", FrameBox, {Frame Size( 623, 512 ), Background Color( magenta )} ) )
);
```

**Code Explanation**:

1. Open table.
2. Define magenta color.
3. Create contour plot.
4. Set X variables.
5. Set Y variable.
6. Hide boundary lines.
7. Hide data points.
8. Fill contour areas.
9. Label contours off.
10. Apply color theme.



### Example 2
> **Summary**: Creates a contour plot to visualize relationships between 'weight', 'height', and 'age' variables, with customized color theme and graph settings.

<!-- Keywords: #ContourPlot, #DataVisualization, #JMPScriptingLanguage, #GraphSettings, #Customization -->

**Code**:
```jsl
dt = Open( "$sample_data/big class.jmp", invisible );
magenta = RGB Color( 1, 0, 1 );
cp = dt << Contour Plot(
	X( :weight, :height ),
	Y( :age ),
	Show Boundary( 0 ),
	Show Data Points( 0 ),
	Fill Areas( 1 ),
	Label Contours( 0 ),
	Transform( "Range Normalized" ),
	Color Theme( "White to Black" ),
	Show Boundary( 0 ),
	Specify Contours( Min( 12.5 ), Max( 16.5 ), N( 9 ) ),
	SendToReport( Dispatch( {}, "Contour Plot Graph", FrameBox, {Frame Size( 623, 512 ), Background Color( magenta )} ) )
);
cp << Redo Analysis;
```

**Code Explanation**:

1. Open data table.
2. Define magenta color.
3. Create contour plot.
4. Set X variables.
5. Set Y variable.
6. Hide boundary lines.
7. Hide data points.
8. Fill contour areas.
9. Hide contour labels.
10. Apply range normalization.
11. Set color theme.
12. Specify contour range.
13. Adjust graph size.
14. Set background color.
15. Redo analysis.



## Contour Plot using Set Preferences
> **Summary**: Creates a contour plot with customized specifications, using JMP's Graph Builder to visualize relationships between X, Y, and Z variables.

<!-- Keywords: #JMPGraphBuilder, #ContourPlot, #CustomizationOptions, #DataVisualization, #GraphPreferences -->

**Code**:
```jsl
Set Preferences( Graph Border( 1 ), Frame Border( 1 ), Frame Color( 21 ), Graph Background Color( 73 ) );
Open("data_table.jmp");
Contour Plot(
	X( :X, :Y ),
	Y( :Z ),
	Show Data Points( 0 ),
	Fill Areas( 1 ),
	Label Contours( 0 ),
	Specify Contours(
		Min( -4 ),
		Max( 6 ),
		N( 6 ),
		Contour( 1, -4, -5181519 ),
		Contour( 2, -2, -2556671 ),
		Contour( 3, 0, -42680 ),
		Contour( 4, 2, -58112 ),
		Contour( 5, 4, -14668544 ),
		Contour( 6, 6, -15949569 ),
		Contour( 7, 6, -10363169 )
	)
);
```

**Code Explanation**:

1. Set graph preferences.
2. Open data table;
3. Create contour plot.
4. Set X and Y variables.
5. Set Z variable.
6. Hide data points.
7. Fill contour areas.
8. Disable contour labels.
9. Define contour specifications.
10. Customize contour levels and colors.



## Contour Plot using New Column
> **Summary**: Calculates and visualizes BMI (Body Mass Index) using a formula-based column in JMP, generating a contour plot with customizable grid coordinates.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #BMICalculation, #ContourPlot, #GridCustomization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "BMI", Numeric, "Continuous", Format( "Best", 12 ), Formula( (:weight * 703) / :height ^ 2 ) );
my grid = [11 -5, 5 1, 11 -5, 5 1];
dt << Contour Plot(
	X( :height, :weight ),
	Y( :BMI ),
	Show Data Points( 0 ),
	Fill Areas( 0 ),
	Label Contours( 0 ),
	Transform( "None" ),
	Grid( my grid )
);
```

**Code Explanation**:

1. Open data table.
2. Create new column "BMI".
3. Define BMI formula.
4. Set grid coordinates.
5. Create contour plot.
6. Set X variables.
7. Set Y variable.
8. Hide data points.
9. Disable area filling.
10. Disable contour labeling.



## Contour Plot using New Window
> **Summary**: Creates contour plots for a 3D dataset, with separate plots for 'Between', 'Above', 'Below', and 'Above Below' conditions.

<!-- Keywords: #JSLScriptingLanguage, #ContourPlot, #DataVisualization, #JMP, #MultidimensionalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "contour fill",
	Lineup Box( N Col( 2 ),
		Contour Plot(
			X( :X, :Y ),
			Y( :Z ),
			Show Data Points( 0 ),
			Fill Areas( 1 ),
			Label Contours( 0 ),
			Transform( "Range Normalized" ),
			SendToReport( Dispatch( {}, "Contour Plot for Z", OutlineBox, {Set Title( "Between" )} ) )
		),
		Contour Plot(
			X( :X, :Y ),
			Y( :Z ),
			Show Data Points( 0 ),
			Fill Areas( 1 ),
			Label Contours( 0 ),
			Transform( "Range Normalized" ),
			SendToReport( Dispatch( {}, "Contour Plot for Z", OutlineBox, {Set Title( "Above" )} ) )
		),
		Contour Plot(
			X( :X, :Y ),
			Y( :Z ),
			Show Data Points( 0 ),
			Fill Areas( 1 ),
			Label Contours( 0 ),
			Transform( "Range Normalized" ),
			SendToReport( Dispatch( {}, "Contour Plot for Z", OutlineBox, {Set Title( "Below" )} ) )
		),
		Contour Plot(
			X( :X, :Y ),
			Y( :Z ),
			Show Data Points( 0 ),
			Fill Areas( 1 ),
			Label Contours( 0 ),
			Transform( "Range Normalized" ),
			SendToReport( Dispatch( {}, "Contour Plot for Z", OutlineBox, {Set Title( "Above Below" )} ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create new window titled "contour fill".
3. Arrange plots in two columns.
4. Plot contour for Z with X and Y.
5. Hide data points.
6. Enable area filling.
7. Disable contour labels.
8. Normalize data range.
9. Set title "Between".
10. Repeat steps 4-9 for "Above", "Below", and "Above Below".



