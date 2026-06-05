# Scatterplot 3D

### Example 1
> **Summary**: Visualizes a 3D scatterplot of Amplitude, x, and y variables from the data table using JMP's Scatterplot 3D function.

<!-- Keywords: #JMP, #Scatterplot, #DataVisualization, #3DPlotting, #Scripting -->

**Code**:
```jsl
// Scatterplot 3D
// Open data table
dt = Open("data_table.jmp");
// Scatterplot 3D
Scatterplot 3D( Y( :Amplitude, :x, :y ) );
```

**Code Explanation**:

1. Open table.
2. Create 3D scatterplot.



### Example 2
> **Summary**: Visualizes a 3D scatterplot of x, y, and z variables from the data table using JMP's Scatterplot 3D feature.

<!-- Keywords: #JMPScriptingLanguage, #ScatterPlot3D, #DataVisualization, #JSLCode, #InteractiveAnalysis -->

**Code**:
```jsl
// Scatterplot 3D
// Open data table
dt = Open("data_table.jmp");
// Scatterplot 3D
Scatterplot 3D( Y( :x, :y, :z ) );
```

**Code Explanation**:

1. Open data table.
2. Create 3D scatterplot.



### Example 3
> **Summary**: Generates a 3D scatterplot to visualize the relationship between x, y, and z variables in a data table, customizing frame settings, axis visibility, and background color.

<!-- Keywords: #JMP, #Scatterplot3D, #DataVisualization, #Customization, #FrameSettings -->

**Code**:
```jsl
// Scatterplot 3D
// Open data table
dt = Open("data_table.jmp");
// Scatterplot 3D
Scatterplot 3D(
	Y( :x, :y, :z ),
	Frame3D(
		Set Wall Color( 0 ),
		Set Box( 0 ),
		Set Axes( 0 ),
		Set Grids( 0 ),
		Set Walls( 0 ),
		Set Rotation( -76, -18, -88 ),
		Background Color( 0, 0, 0 )
	)
);
```

**Code Explanation**:

1. Open table.
2. Create 3D scatterplot.
3. Set X, Y, Z axes.
4. Customize frame settings.
5. Remove wall color.
6. Disable box display.
7. Hide axes.
8. Turn off grids.
9. Disable walls.
10. Rotate view.
11. Set background color.



### Example 4
> **Summary**: Visualizes a 3D scatterplot to explore the relationships between Age, Oxygen levels, and Runtime in a data table.

<!-- Keywords: #JSLScriptingLanguage, #Scatterplot3D, #DataVisualization, #JMPScripting, #DataAnalysis -->

**Code**:
```jsl
// Scatterplot 3D
// Open data table
dt = Open("data_table.jmp");
// Scatterplot 3D
Scatterplot 3D(
	Y( :Age, :Oxy, :Runtime )
);
```

**Code Explanation**:

1. Open data table.
2. Create 3D scatterplot.



### Example 5
> **Summary**: Visualizes a 3D scatterplot to explore the relationship between X, Y, and Z variables, with surface quality coloring and customizable frame settings.

<!-- Keywords: #JSL, #Scatterplot3D, #Frame3D, #Coloring, #DataVisualization -->

**Code**:
```jsl
// Scatterplot 3D
// Open data table
dt = Open("data_table.jmp");
// Scatterplot 3D
Scatterplot 3D(
	Y( :X, :Y, :Z ),
	Coloring( :surface quality ),
	Frame3D(
		Legend( 1 ),
		Set Grab Handles( 0 ),
		Set Rotation(
			-131.974910853295,
			-55.4597023094039,
			56.3897695048096
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create 3D scatterplot.
3. Set Y variables.
4. Apply coloring.
5. Configure frame.
6. Enable legend.
7. Disable grab handles.
8. Set rotation angles.



### Example 6
> **Summary**: Visualizes a 3D scatterplot of sepal length, sepal width, petal length, and petal width using the Open data table function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #Scatterplot3D, #DataVisualization, #Frame3D, #Rotation -->

**Code**:
```jsl
// Scatterplot 3D
// Open data table
dt = Open("data_table.jmp");
// Scatterplot 3D
Scatterplot 3D(
	Y(
		:Sepal length, :Sepal width,
		:Petal length, :Petal width
	),
	Frame3D(
		Set Rotation(
			-37.7763571468042,
			-20.0181349932962,
			0.755666043084993
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create 3D scatterplot.
3. Set Y variables.
4. Configure 3D frame.
5. Set rotation angles.



### Example 7
> **Summary**: Visualizes a 3D scatterplot of three continuous variables (c1, c2, and c3) from an open data table using the Scatterplot 3D function.

<!-- Keywords: #JSLScriptingLanguage, #Scatterplot3D, #DataVisualization, #ContinuousVariables, #JMP -->

**Code**:
```jsl
// Scatterplot 3D
// Open data table
dt = Open("data_table.jmp");
// Scatterplot 3D
Scatterplot 3D( Y( :c1, :c2, :c3 ) );
```

**Code Explanation**:

1. Open table.
2. Create 3D scatterplot.



### Example 8
> **Summary**: Visualizes a 3D scatter plot from a data table, customizing the frame appearance and marker settings while applying a data filter to focus on specific values.

<!-- Keywords: #JMPScriptingLanguage, #Scatterplot3D, #DataFilter, #Customization, #Visualization -->

**Code**:
```jsl
// Demo
// Open data table
dt = Open("data_table.jmp");
// Demo
::plot =
Scatterplot 3D(
	Y( :a, :b, :c ),
	Frame3D(
		Set Graph Size( 843, 778 ),
		Set Wall Color( 0 ),
		Set Grab Handles( 0 ),
		Set Box( 0 ),
		Set Axes( 0 ),
		Set Grids( 0 ),
		Set Walls( 0 ),
		Set Rotation(
			-40.6830417299277,
			45.6965893407126,
			-106.496076830932
		),
		Set Marker Transparency( 0.5625 ),
		Set Marker Quality( 1 ),
		Set Marker Scale( 1.46125 ),
		Background Color( 0, 0, 0 )
	),
	SendToReport(
		Dispatch( {}, "1", ScaleBox,
			{Scale( "Linear" ),
			Format( "Best", 9 ),
			Min( 3086.08815426997 ),
			Max( 6750 ), Inc( 500 )}
		),
		Dispatch( {}, "2", ScaleBox,
			{Scale( "Linear" ),
			Format( "Best", 9 ), Min( 0 ),
			Max( 307.806691449814 ),
			Inc( 50 )}
		),
		Dispatch( {}, "3", ScaleBox,
			{Scale( "Linear" ),
			Format( "Best", 9 ),
			Min( -4.23185483870968 ),
			Max( 1 ), Inc( 1 )}
		)
	)
);
df = Current Data Table() <<
Data Filter(
	Animation( 1 ),
	Animate Rate( 17 ),
	Animate Column( :ln SSE ),
	Add Filter(
		columns( :ln SSE ),
		Where(
			:ln SSE >= 25.1738975 &
			:ln SSE <= 25.4875975
		)
	)
);
df << move window( 585, 100 );
```

**Code Explanation**:

1. Open data table.
2. Create 3D scatter plot.
3. Set graph size.
4. Customize frame appearance.
5. Set rotation angles.
6. Adjust marker transparency.
7. Set marker quality.
8. Scale marker size.
9. Change background color.
10. Apply data filter.



### Example 9
> **Summary**: Generates a 3D scatterplot to visualize the relationship between Culmen Length, Culmen Depth, and Flipper Length, colored by Species, with normal contour ellipsoids and nonparametric density contours.

<!-- Keywords: #Scatterplot, #3DVisualization, #JMPScriptingLanguage, #DataVisualization, #StatisticalAnalysis -->

**Code**:
```jsl
// Scatterplot 3D
// Open data table
dt = Open("data_table.jmp");
// Scatterplot 3D
Scatterplot 3D(
	Y(
		:Culmen Length, :Culmen Depth,
		:Flipper Length
	),
	Coloring( :Species ),
	Normal Contour Ellipsoids(
		1, :Species
	),
	Nonpar Density Contour( 1, :Species ),
	Legend( 1 ),
	Frame3D(
		Set Graph Size( 655, 672 ),
		Legend( 1 ),
		Set Grab Handles( 0 ),
		Set Rotation(
			-72.1900689453449,
			-1.75327107936844,
			34.4563606108469
		)
	),
	SendToReport(
		Dispatch( {},
			"Density Contour Controls",
			OutlineBox,
			{Close( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create 3D scatterplot.
3. Set Y variables.
4. Color by species.
5. Add normal contour ellipsoids.
6. Add nonparametric density contours.
7. Show legend.
8. Configure 3D frame size.
9. Set legend position.
10. Disable grab handles.



### Example 10
> **Summary**: Visualizes a 3D scatterplot to explore the relationship between X, Y, and Max ¬∞F Jan variables in a data table, with customizable frame settings and rotation angles.

<!-- Keywords: #JSLScriptingLanguage, #Scatterplot3D, #FrameSettings, #RotationAngles, #DataVisualization -->

**Code**:
```jsl
// Scatterplot 3D
// Open data table
dt = Open("data_table.jmp");
// Scatterplot 3D
Scatterplot 3D(
	Y( :X, :Y, :Max ¬∞F Jan ),
	Frame3D(
		Set Grab Handles( 0 ),
		Set Rotation(
			24.1937619852405,
			-39.6864960978558,
			-7.80895767396027
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create 3D scatterplot.
3. Set Y variables.
4. Configure frame settings.
5. Disable grab handles.
6. Set rotation angles.



### Example 11
> **Summary**: Visualizes a 3D scatterplot to explore the relationship between Year and Portion, with Connect Lines enabled for better visualization.

<!-- Keywords: #JSLScriptingLanguage, #ScatterPlot3D, #DataVisualization, #JMP, #GraphicalAnalysis -->

**Code**:
```jsl
// Scatterplot 3D
// Open data table
dt = Open("data_table.jmp");
// Scatterplot 3D
Scatterplot 3D(
	Y(
		:"Portion 0-19"n, :"Portion60+"n,
		:Year
	),
	Connect Lines( 1 ),
	Frame3D(
		Set Rotation(
			32.2919968078136,
			-52.900586943001,
			19.4821987530212
		),
		Set View Perspective( 0.1095 ),
		Set View Zoom( 1.07375 ),
		Background Color( 127, 127, 127 )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create 3D scatterplot.
3. Set Y variables.
4. Connect lines.
5. Configure 3D frame.
6. Set rotation angles.
7. Set view perspective.
8. Set view zoom.
9. Set background color.



### Example 12
> **Summary**: Visualizes a 3D scatterplot to explore the relationships between four solvents (1-Octanol, Ether, Chloroform, and Benzene) using data from a JMP data table.

<!-- Keywords: #JSL, #Scatterplot3D, #DataVisualization, #Chemistry, #JMP -->

**Code**:
```jsl
// Scatterplot 3D
// Open data table
dt = Open("data_table.jmp");
// Scatterplot 3D
Scatterplot 3D(
	Y(
		:"1-Octanol"n, :Ether,
		:Chloroform, :Benzene,
		:Carbon Tetrachloride, :Hexane
	)
);
```

**Code Explanation**:

1. Open table.
2. Create 3D scatterplot.



### Example 13
> **Summary**: Creates a 3D scatter plot to visualize Sepal length and width for different Species, with interactive column switching between Sepal length, Petal length, and Petal width.

<!-- Keywords: #JSL, #Scatterplot3D, #ColumnSwitcher, #ByGrouping, #InteractiveVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
sp3d = Scatterplot 3D(
	Y( :Sepal length, :Sepal width ),
	X Axis( :Sepal length ),
	Y Axis( :Sepal width ),
	Frame3D( Set Grab Handles( 0 ), Set Rotation( -54, 0, 38 ) ),
	By( :Species )
);
cs = sp3d[1] << Column Switcher( :Sepal length, {:Sepal length, :Petal length, :Petal width} );
```

**Code Explanation**:

1. Open data table;
2. Create 3D scatter plot.
3. Set Y variables.
4. Set X axis variable.
5. Set Y axis variable.
6. Configure 3D frame.
7. Apply rotation settings.
8. Enable column switching.
9. Set initial column.
10. Define switchable columns.



### Example 14
> **Summary**: Creates a 3D scatter plot to visualize Sepal length and width by Species, with interactive column switching for Petal length, Sepal length, or Petal width.

<!-- Keywords: #JSLScripting, #Scatterplot3D, #ColumnSwitcher, #InteractiveVisualization, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
sp3d = Scatterplot 3D(
	Y( :Sepal length, :Sepal width ),
	X Axis( :Sepal length ),
	Y Axis( :Sepal width ),
	Frame3D( Set Grab Handles( 0 ), Set Rotation( -54, 0, 38 ) ),
	By( :Species )
);
cs = sp3d[1] << Column Switcher( :Sepal length, {:Sepal length, :Petal length, :Petal width} );
cs << Set Current( "Petal length" );
```

**Code Explanation**:

1. Open data table;
2. Create 3D scatter plot.
3. Set Y variables.
4. Set X axis variable.
5. Set Y axis variable.
6. Configure 3D frame.
7. Apply by grouping.
8. Add column switcher.
9. Define switchable columns.
10. Set current column to "Petal length".



### Example 15
> **Summary**: Creates a 3D scatter plot from a data table, utilizing hardware acceleration for enhanced visualization.

<!-- Keywords: #JSLScriptingLanguage, #Scatterplot3D, #HardwareAcceleration, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Scene3DHardwareAcceleration = 1;
dt << Scatterplot 3D( Y( :Name( "1-Octanol" ), :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
```

**Code Explanation**:

1. Open data table;
2. Enable 3D hardware acceleration.
3. Create 3D scatter plot.



### Example 16
> **Summary**: Creates a 3D scatter plot to visualize age, height, and weight data, with customizable frame size, rotation angles, and scale box settings.

<!-- Keywords: #JSLScriptingLanguage, #ScatterPlot3D, #DataVisualization, #CustomizationOptions, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
Scatterplot 3D(
	Y( :age, :height, :weight ),
	Frame3D(
		Set Graph Size( 919, 663 ),
		Set Grab Handles( 0 ),
		Set Walls( 1 ),
		Set Rotation( -84.2027279121991, -0.029051140768227, 39.0135113839242 ), 
	),
	SendToReport(
		Dispatch( {}, "3", ScaleBox,
			{Min( 60 ), Max( 180 ), Inc( 20 ), Minor Ticks( 3 ), Label Row(
				{Minor Grid Line Color( 19 ), Show Major Grid( 1 ), Show Minor Grid( 1 ), Show Minor Labels( 1 )}
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create 3D scatter plot.
3. Set Y variables: age, height, weight.
4. Configure 3D frame size.
5. Disable grab handles.
6. Enable walls.
7. Set initial rotation angles.
8. Send report to display.
9. Configure scale box settings.
10. Adjust minor grid line color.



### Example 17
> **Summary**: Creates a 3D scatter plot to visualize relationships between Sepal length, Sepal width, Petal length, and Petal width, with frequency based on Petal width, and configures frame settings for rotation and marker quality.

<!-- Keywords: #JSL, #Scatterplot3D, #Frame3D, #MarkerQuality, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length ),
	Freq( :Petal width ),
	Sized Points( 1 ),
	Frame3D( Set Grab Handles( 0 ), Set Rotation( -54, 0, 38 ), Set Marker Quality( 1 ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create 3D scatter plot.
3. Set Y variables.
4. Use Petal width for frequency.
5. Set point size.
6. Configure 3D frame.
7. Disable grab handles.
8. Set rotation angles.
9. Adjust marker quality.
10. Generate report object.



### Example 18
> **Summary**: Creates a 3D scatter plot with sized points to visualize relationships between Sepal length, Sepal width, Petal length, and Petal width, while incorporating observation frequencies.

<!-- Keywords: #JSL, #Scatterplot, #3DVisualization, #FrequencyPlot, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length ),
	Freq( :Petal width ),
	Sized Points( 1 ),
	Frame3D( Set Grab Handles( 0 ), Set Rotation( -54, 0, 38 ), Set Marker Quality( 1 ) )
);
rpt = obj << report;
rpt << journal;
```

**Code Explanation**:

1. Open data table;
2. Create 3D scatter plot.
3. Set Y variables.
4. Use Petal width for frequency.
5. Set point size to 1.
6. Configure 3D frame settings.
7. Disable grab handles.
8. Rotate view to -54, 0, 38.
9. Set marker quality to 1.
10. Generate report and journal.



### Example 19
> **Summary**: Creates a 3D scatter plot to visualize relationships between Sepal length, Sepal width, Petal length, and Petal width, with adjustable frame settings and marker quality.

<!-- Keywords: #JSL, #Scatterplot3D, #Frame3D, #MarkerQuality, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length ),
	Weight( :Petal width ),
	Sized Points( 1 ),
	Frame3D( Set Grab Handles( 0 ), Set Rotation( -54, 0, 38 ), Set Marker Quality( 1 ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create 3D scatter plot.
3. Set Y variables.
4. Use Petal width for weight.
5. Size points uniformly.
6. Configure 3D frame settings.
7. Disable grab handles.
8. Set rotation angles.
9. Adjust marker quality.
10. Generate report object.



### Example 20
> **Summary**: Creates a 3D scatter plot to visualize relationships between Sepal length, Sepal width, Petal length, and Petal width in a dataset.

<!-- Keywords: #JSLScriptingLanguage, #Scatterplot3D, #DataVisualization, #Frame3D, #ReportObject -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length ),
	Weight( :Petal width ),
	Sized Points( 1 ),
	Frame3D( Set Grab Handles( 0 ), Set Rotation( -54, 0, 38 ), Set Marker Quality( 1 ) )
);
rpt = obj << report;
rpt << journal;
```

**Code Explanation**:

1. Open data table;
2. Create 3D scatter plot.
3. Set Y variables.
4. Use Petal width for weight.
5. Set point size to 1.
6. Configure 3D frame settings.
7. Generate report object.
8. Convert report to journal.



### Example 21
> **Summary**: Creates a 3D scatterplot and surface plot from a data table, with customizable axis labels and rotation.

<!-- Keywords: #JSLScriptingLanguage, #ScatterPlot, #SurfacePlot, #DataVisualization, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
s = Scatterplot 3D(
	Y( :sex, :height, :weight ),
	Frame3D( Set Z Axis Label( "c" ), Set Y Axis Label( "b" ), Set X Axis Label( "a" ), Set Grab Handles( 0 ), Set Rotation( -54, 0, 38 ) )
);
s << redo analysis;
s = Surface Plot(
	Columns( :height, :weight, :age ),
	Frame3D( Set Z Axis Label( "c" ), Set Y Axis Label( "b" ), Set X Axis Label( "a" ), )
);
```

**Code Explanation**:

1. Open data table.
2. Create 3D scatterplot.
3. Set axis labels.
4. Disable grab handles.
5. Rotate view.
6. Redo analysis.
7. Create surface plot.
8. Set axis labels.



### Example 22
> **Summary**: Creates a 3D scatterplot and surface plot from a data table, with customizable axis labels and rotation.

<!-- Keywords: #JSLScripting, #ScatterPlot, #SurfacePlot, #DataVisualization, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
s = Scatterplot 3D(
	Y( :sex, :height, :weight ),
	Frame3D( Set Z Axis Label( "c" ), Set Y Axis Label( "b" ), Set X Axis Label( "a" ), Set Grab Handles( 0 ), Set Rotation( -54, 0, 38 ) )
);
s << redo analysis;
s = Surface Plot(
	Columns( :height, :weight, :age ),
	Frame3D( Set Z Axis Label( "c" ), Set Y Axis Label( "b" ), Set X Axis Label( "a" ), )
);
s << redo analysis;
```

**Code Explanation**:

1. Open data table;
2. Create 3D scatterplot.
3. Set axis labels.
4. Disable grab handles.
5. Rotate plot.
6. Redo analysis.
7. Create surface plot.
8. Set axis labels.
9. Redo analysis.



### Example 23
> **Summary**: Creates a 3D scatterplot to visualize relationships between Sepal length, Sepal width, and Petal length, with coloring based on Petal width.

<!-- Keywords: #JSL, #Scatterplot, #3DPlotting, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length ), Coloring( :Petal width ) );
```

**Code Explanation**:

1. Open data table;
2. Create 3D scatterplot.
3. Set Y variables.
4. Color by Petal width.



### Example 24
> **Summary**: Creates a 3D scatter plot using data from a JMP data table, with Y variables set to Sepal length, Sepal width, and Petal length, and coloring by Petal width.

<!-- Keywords: #JSL, #Scatterplot, #3DPlotting, #DataVisualization, #JMP -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length ), Coloring( :Petal width ) );
dt:Petal width[1] = 42;
```

**Code Explanation**:

1. Set default names.
2. Open data table;
3. Create 3D scatter plot.
4. Set Y variables.
5. Color by Petal width.
6. Modify first Petal width value.



### Example 25
> **Summary**: Creates a 3D scatter plot to visualize relationships between Sepal length, Sepal width, Petal length, and Petal width in a data table.

<!-- Keywords: #JSLScriptingLanguage, #Scatterplot3D, #DataVisualization, #JMP, #GraphicalModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Drop Lines( 1 );
```

**Code Explanation**:

1. Open data table;
2. Create 3D scatter plot.
3. Set Y variables.
4. Add drop lines.



### Example 26
> **Summary**: Creates a 3D scatter plot with drop lines, filtering data to only include setosa species and hiding corresponding data points.

<!-- Keywords: #JSLScriptingLanguage, #Scatterplot3D, #DropLines, #DataFiltering, #HideDataPoints -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Drop Lines( 1 );
Data Table("data_table") << Select Where( :Species == "setosa" ) << Hide;
```

**Code Explanation**:

1. Open data table;
2. Create 3D scatter plot.
3. Add drop lines.
4. Select setosa species.
5. Hide setosa data.



### Example 27
> **Summary**: Creates a 3D scatter plot to visualize relationships between height, weight, and age in a data table, with interactive frame rotation and axis configuration.

<!-- Keywords: #JSLScriptingLanguage, #Scatterplot3D, #DataVisualization, #InteractivePlotting, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
s3d = dt << Scatterplot 3D(
	Y( :height, :weight, :age ),
	X Axis( :weight ),
	Y Axis( :height ),
	Z Axis( :age ),
	Frame3D( Set Grab Handles( 0 ), Set Rotation( -54, 0, 38 ) )
);
dt << Delete Column( :height );
```

**Code Explanation**:

1. Open data table;
2. Create 3D scatter plot.
3. Set Y axes: height, weight, age.
4. Set X axis: weight.
5. Set Y axis: height.
6. Set Z axis: age.
7. Configure frame rotation.
8. Remove height column.



### Example 28
> **Summary**: Creates a 3D scatter plot to visualize relationships between height, weight, and age in a data table.

<!-- Keywords: #JSLScriptingLanguage, #Scatterplot3D, #DataVisualization, #JMP, #InteractivePlotting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
s3d = dt << Scatterplot 3D(
	Y( :height, :weight, :age ),
	X Axis( :weight ),
	Y Axis( :height ),
	Z Axis( :age ),
	Frame3D( Set Grab Handles( 0 ), Set Rotation( -54, 0, 38 ) )
);
dt << Delete Column( :height );
s3d << Save Script to Script Window;
```

**Code Explanation**:

1. Open data table.
2. Create 3D scatter plot.
3. Set Y axes: height, weight, age.
4. Set X axis: weight.
5. Set Y axis: height.
6. Set Z axis: age.
7. Configure 3D frame settings.
8. Remove height column.
9. Save script to window.



### Example 29
> **Summary**: Creates a 3D scatter plot to visualize relationships between Sepal length, Sepal width, Petal length, and Petal width in a data table.

<!-- Keywords: #JSLScriptingLanguage, #Scatterplot3D, #DataVisualization, #GraphBuilder, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
s3d = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Frame3D( Set Graph Size( 520, 520 ), Set Grab Handles( 0 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create 3D scatter plot.
3. Set Y variables.
4. Configure frame size.
5. Disable grab handles.



### Example 30
> **Summary**: Creates a 3D scatterplot from a data table, customizing graph size, grab handles, background color, border, and padding.

<!-- Keywords: #JSLScriptingLanguage, #ScatterPlot3D, #GraphCustomization, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
s3d = dt << Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Frame3D( Set Graph Size( 520, 520 ), Set Grab Handles( 0 ) )
);
Report( s3d )[Scene Box( 1 )] << Background Color( "Light Orange" ) << Set Property( "Background Color", "Light Yellow" ) <<
Border( {Left( 1 ), Top( 1 ), Right( 1 ), Bottom( 1 )} ) << Border Color( "Dark Magenta" ) << Padding(
	{Left( 10 ), Top( 10 ), Right( 10 ), Bottom( 10 )}
);
```

**Code Explanation**:

1. Open data table;
2. Create 3D scatterplot.
3. Set graph size.
4. Disable grab handles.
5. Change background color.
6. Set background color again.
7. Add border.
8. Set border color.
9. Add padding.



### Example 31
> **Summary**: Creates and configures a 3D scatterplot to visualize height and weight data, with interactive filtering and rotation capabilities.

<!-- Keywords: #JMPScriptingLanguage, #ScatterPlot, #DataVisualization, #InteractiveFiltering, #3DFrameRotation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Scatterplot 3D(
	Y( :height, :weight ),
	X Axis( :height ),
	Y Axis( :weight ),
	Frame3D( Set Grab Handles( 0 ), Set Rotation( -54, 0, 38 ) ),
	Local Data Filter(
		Add Filter( columns( :height ), Where( :height >= 55 & :height <= 65 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
obj << Automatic Recalc( 1 );
dt << Select Where( :sex == "F" );
dt << Exclude();
rpt = Report( obj );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Scatterplot 3D(
	Y( :height, :weight ),
	X Axis( :height ),
	Y Axis( :weight ),
	Frame3D( Set Grab Handles( 0 ), Set Rotation( -54, 0, 38 ) ),
	Local Data Filter(
		Add Filter( columns( :height ), Where( :height >= 55 & :height <= 65 ) ),
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
2. Create 3D scatterplot.
3. Set Y axes: height, weight.
4. Set X axis: height.
5. Configure 3D frame rotation.
6. Add local data filter for height.
7. Enable automatic recalculation.
8. Select rows where sex is "F".
9. Exclude selected rows.
10. Generate report from scatterplot.
11. Close table without saving.
12. Reopen "data_table.jmp" table.
13. Create another 3D scatterplot.
14. Set Y axes: height, weight.
15. Set X axis: height.
16. Configure 3D frame rotation.
17. Add local data filter for height.
18. Disable automatic recalculation.
19. Select rows where sex is "F".
20. Exclude selected rows.
21. Generate report from scatterplot.



### Example 32
> **Summary**: Creates a 3D scatter plot to visualize the relationships between Sepal length, Sepal width, Petal length, and Petal width, with interactive features for coloring by Species name and setting point size.

<!-- Keywords: #JSL, #Scatterplot3D, #DataVisualization, #InteractivePlotting, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Scatterplot 3D(
	Y(
		Transform Column( "-Sepal length", Formula( -:Sepal length ) ),
		Transform Column( "-Sepal width", Formula( -:Sepal width ) ),
		Transform Column( "-Petal length", Formula( -:Petal length ) )
	),
	Weight( Transform Column( "Abs[Petal width]", Formula( Abs( :Petal width ) ) ) ),
	Freq( Transform Column( "Length[Species]", Formula( Length( :Species ) ) ) ),
	Coloring( Transform Column( "Concatenate[Species]", Character, Formula( Concat( :Species ) ) ) ),
	Sized Points( 1 ),
	Frame3D( Legend( 1 ), Set Grab Handles( 0 ), Set Rotation( -54, 0, 38 ), Set Marker Quality( 1 ) ),
	By( Transform Column( "Concatenate[Species] 2", Character, Formula( Concat( :Species ) ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create 3D scatter plot.
3. Transform Sepal length to negative.
4. Transform Sepal width to negative.
5. Transform Petal length to negative.
6. Use absolute Petal width for weight.
7. Use Species length for frequency.
8. Color by concatenated Species name.
9. Set point size to 1.
10. Configure 3D frame settings.



### Example 33
> **Summary**: Creates a 3D scatterplot to visualize RunPulse, RstPulse, and MaxPulse data colored by Age, with customized frame settings and marker scale.

<!-- Keywords: #JMPScriptingLanguage, #Scatterplot3D, #DataVisualization, #Customization, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Scatterplot 3D(
	Y( :RunPulse, :RstPulse, :MaxPulse ),
	Coloring( :Age ),
	Frame3D( Legend( 1 ), Set Grab Handles( 0 ), Set Rotation( -54, 0, 38 ), Set Marker Scale( 4.92625 ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create 3D scatterplot object.
3. Set Y variables: RunPulse, RstPulse, MaxPulse.
4. Color points by Age.
5. Configure 3D frame settings.
6. Enable legend for frame.
7. Disable grab handles.
8. Set rotation angles.
9. Adjust marker scale.
10. Generate report from plot.



### Example 34
> **Summary**: Creates a 3D scatterplot using data from a specified JMP data table, with Y variables set to x1, x2, and x3.

<!-- Keywords: #JSLScriptingLanguage, #ScatterPlot, #DataVisualization, #JMP, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Scatterplot 3D( Y( :x1, :x2, :x3 ) );
```

**Code Explanation**:

1. Open data table;
2. Create 3D scatterplot.
3. Set Y variables: x1, x2, x3.



## Scatterplot 3D using Preferences
### Example 1
> **Summary**: Creates and displays a 3D scatterplot from a data table, with font preferences adjusted for readability.

<!-- Keywords: #JSLScriptingLanguage, #ScatterPlot, #DataVisualization, #FontPreferences, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Preferences( Fonts( English( Text Font( "Sans Serif Collection", 9 ) ) ) );
Scatterplot 3D( Y( :height, :weight, :age ) );
Preferences( Fonts( English( Text Font( "Javanese Text", 9 ) ) ) );
Scatterplot 3D( Y( :height, :weight, :age ) );
```

**Code Explanation**:

1. Open data table.
2. Set default font preferences.
3. Create 3D scatterplot.
4. Change font preferences.
5. Create another 3D scatterplot.



### Example 2
> **Summary**: Creates and customizes a 3D scatterplot in JMP, utilizing font preferences to enhance visualization.

<!-- Keywords: #JMPScriptingLanguage, #ScatterPlot, #FontPreferences, #DataVisualization, #Customization -->

**Code**:
```jsl
Names Default To Here( 1 );
Open("data_table.jmp");
Preferences( Fonts( English( Text Font( "Sans Serif Collection", 9 ) ) ) );
Scatterplot 3D( Y( :height, :weight, :age ) );
Preferences( Fonts( English( Text Font( "Javanese Text", 9 ) ) ) );
Scatterplot 3D( Y( :height, :weight, :age ) );
Preferences( Fonts( English( Text Font( "Segoe UI", 9 ) ) ) );
```

**Code Explanation**:

1. Set default name scope.
2. Open data table;
3. Set Sans Serif font for English.
4. Create 3D scatterplot with height, weight, age.
5. Change font to Javanese Text.
6. Recreate 3D scatterplot with same variables.
7. Change font to Segoe UI.



## Scatterplot 3D using For Each
> **Summary**: Creates and customizes 3D scatterplots for multiple samples, applying preset settings and setting report titles.

<!-- Keywords: #JSLScriptingLanguage, #Scatterplot3D, #DataTable, #PresetOptions, #ReportTitle -->

**Code**:
```jsl
plat_samples = ["Scatterplot 3D" => {"Large Markers"}, => {}];
dt = Open("data_table.jmp");
For Each( {sample}, plat_samples["Scatterplot 3D"],
	obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
	Eval( Eval Expr( obj << Apply Preset( "Sample Presets", Expr( sample ) ) ) );
	obj << Set Report Title( sample );
);
```

**Code Explanation**:

1. Define preset options.
2. Open data table;
3. Iterate over scatterplot presets.
4. Create 3D scatterplot.
5. Apply preset settings.
6. Set report title.
7. Repeat for each preset.



