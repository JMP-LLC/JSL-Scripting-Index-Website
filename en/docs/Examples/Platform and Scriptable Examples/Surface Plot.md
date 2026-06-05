# Surface Plot

### Example 1
> **Summary**: Visualizes a surface plot of Net Costs using the Graph Builder function, specifying columns for the plot, locking Z scale, and defining a formula.

<!-- Keywords: #JMPScriptingLanguage, #GraphBuilder, #SurfacePlot, #DataVisualization, #NetCosts -->

**Code**:
```jsl
// Surface Plot
// Open data table
dt = Open("data_table.jmp");
// Surface Plot
Surface Plot(
	Columns(
		:GP Fit, :NL Fit,
		:"log($ value)"n
	),
	Lock Z Scale( 1 ),
	Shine Choice2( "Both sides" ),
	Datapoints Choice3( "Points" ),
	XRotate( -66.3468993855009 ),
	YRotate( 0.547170416692303 ),
	ZRotate( 40.7073204987852 ),
	Formula( "GP Fit", "NL Fit" ),
	Response(
		"log($ value)", "log($ value)",
		:"log($ value)"n
	),
	SetVariableAxis(
		GP Fit,
		Axis Data(
			{Scale( "Linear" ),
			Format( "Best" ), Min( -6 ),
			Max( 1 ), Inc( 1 )}
		)
	),
	SetVariableAxis(
		NL Fit,
		Axis Data(
			{Scale( "Linear" ),
			Format( "Best" ), Min( -6 ),
			Max( 1 ), Inc( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create surface plot.
3. Specify columns for plot.
4. Lock Z scale.
5. Set shine choice.
6. Choose datapoint style.
7. Rotate X-axis.
8. Rotate Y-axis.
9. Rotate Z-axis.
10. Define formula for plot.



### Example 2
> **Summary**: Creates a surface plot to visualize the relationship between SILICA and SILANE, utilizing various color themes and axis formats.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #GraphBuilder, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Lock Z Scale( 1 ),
	Scale response axes independently( 1 ),
	Z Grid Position( 130 ),
	Surface Color Theme( "Green to Black to Red" ),
	Surface Color Theme2( "Green to White to Red" ),
	Surface Color Theme3( "White to Black" ),
	Surface Color Theme4( "Blue to Gray to Red" ),
	Response Column Color Theme( "Blue to Green to Red" ),
	Response Column Color Theme2( "Spectral" ),
	Response Column Color Theme3( "Jet" ),
	Response Column Color Theme4( "White to Blue" ),
	Formula( "Pred Formula ABRASION" ),
	Equation( "", "", "", "" ),
	Surface Color Method( "Solid", "Solid", "Solid", "Solid" ),
	SetVariableAxis( :SILICA, Axis Data( {Format( "Custom", Formula( Round( Ln( value ), 2 ) ), 8 )} ) ),
	SetVariableAxis( :SILANE, Axis Data( {Format( "Custom", Formula( Round( Log( value, 2 ), 2 ) ), 8 )} ) ),
	SetZAxis( Pred Formula ABRASION, Current Value( 130 ), Axis Data( {Format( "Custom", Formula( Round( Log10( value ), 2 ) ), 8 )} ) ),
	SetZAxis( z#2, Axis Data( {} ) ),
	SetZAxis( z#3, Axis Data( {} ) ),
	SetZAxis( z#4, Axis Data( {} ) ),
	SetXVariable( :SILICA ),
	SetYVariable( :SILANE ),
	Iso Value( 0, 139.119238722664 ),
	Frame3D( Set Rotation( -54, 0, 38 ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create surface plot.
3. Set columns for plot.
4. Lock Z scale.
5. Scale response axes independently.
6. Set Z grid position.
7. Define surface color themes.
8. Define response column color themes.
9. Set formula for prediction.
10. Configure axis formats and rotations.



### Example 3
> **Summary**: Creates a surface plot to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
Open("data_table.jmp");
Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
```

**Code Explanation**:

1. Open data_table data
2. Create surface plot.
3. Include ABRASION column.
4. Include MODULUS column.
5. Include ELONG column.
6. Include HARDNESS column.



### Example 4
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION and MODULUS, with independent scaling of response axes.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
Open("data_table.jmp");
Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Control Panel( 0 ),
	Show Surface2( "Both sides" ),
	Scale response axes independently( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Create surface plot.
3. Set columns for plot.
4. Disable control panel.
5. Show both sides surface.
6. Scale response axes independently.



### Example 5
> **Summary**: Creates two surface plots to visualize the relationship between ABRASION and SILICA, with SILANE as a secondary variable.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
sp = Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Formula( "Pred Formula ABRASION" ),
	Surface Color Method( "MODULUS", "Solid", "Solid", "Solid" ),
	SetXVariable( :SILICA ),
	SetYVariable( :SILANE ), 
);
sp = Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Formula( "Pred Formula ABRASION" ),
	Surface Color Method( "Solid", "Solid", "Solid", "Solid" ),
	SetXVariable( :SILICA ),
	SetYVariable( :SILANE ), 
);
```

**Code Explanation**:

1. Open data_table data
2. Create surface plot.
3. Set columns for surface.
4. Define formula for surface.
5. Apply color method MODULUS.
6. Set X variable SILICA.
7. Set Y variable SILANE.
8. Create another surface plot.
9. Set columns for surface.
10. Define formula for surface.



### Example 6
> **Summary**: Creates two surface plots to visualize the relationship between ABRASION and SILICA, with optional color modulation based on MODULUS.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
sp = Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Formula( "Pred Formula ABRASION" ),
	Surface Color Method( "MODULUS", "Solid", "Solid", "Solid" ),
	SetXVariable( :SILICA ),
	SetYVariable( :SILANE ), 
);
sp = Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Formula( "Pred Formula ABRASION" ),
	Surface Color Method( "Solid", "Solid", "Solid", "Solid" ),
	SetXVariable( :SILICA ),
	SetYVariable( :SILANE ), 
);
sp << Surface Color Method( "MODULUS", "Solid", "Solid", "Solid" );
```

**Code Explanation**:

1. Open data table.
2. Create surface plot.
3. Set columns for surface plot.
4. Define formula for surface plot.
5. Apply surface color method.
6. Set X variable.
7. Set Y variable.
8. Create another surface plot.
9. Set columns for second surface plot.
10. Define formula for second surface plot.
11. Apply solid surface color method.
12. Set X variable for second plot.
13. Set Y variable for second plot.
14. Modify surface color method of first plot.



### Example 7
> **Summary**: Creates a surface plot to visualize the relationships between ABRASION, MODULUS, ELONG, and HARDNESS using data from the 'data_table.jmp' file.

<!-- Keywords: #JSL, #SurfacePlot, #DataVisualization, #3DGraphing, #PredictiveModel -->

**Code**:
```jsl
Open("data_table.jmp");
Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Show formula( 0 ),
	Surface Color Theme( "Green to Black to Red" ),
	Surface Color Theme2( "Green to White to Red" ),
	Surface Color Theme3( "White to Black" ),
	Surface Color Theme4( "Blue to Gray to Red" ),
	Response Column Color Theme( "Blue to Green to Red" ),
	Response Column Color Theme2( "Spectral" ),
	Response Column Color Theme3( "Jet" ),
	Response Column Color Theme4( "White to Blue" ),
	Formula( "Pred Formula ABRASION", "Pred Formula MODULUS", "Pred Formula ELONG", "Pred Formula HARDNESS" ),
	Surface Color Method( "Solid", "Solid", "Solid", "Solid" ),
	SetVariableAxis( :SILICA, Axis Data( {Format( "Best", 8 ), Min( 0.2 ), Max( 2.2 ), Inc( 0.5 ), Minor Ticks( 1 )} ) ),
	SetVariableAxis( :SILANE, Axis Data( {Format( "Best", 8 ), Min( 30 ), Max( 70 ), Inc( 5 ), Minor Ticks( 1 )} ) ),
	SetZAxis( Pred Formula ABRASION, Current Value( 130 ) ),
	SetXVariable( SILICA ),
	SetYVariable( SILANE ),
	Iso Value( 0, 139.119238722664 ),
	Iso Value( 1, 1261.13313805186 ),
	Iso Value( 2, 400.384575393762 ),
	Iso Value( 3, 68.9096152062609 ),
	Frame3D( Set Graph Size( 500, 480 ), Set Rotation( -54, 0, 38 ) ), 
);
```

**Code Explanation**:

1. Open data_table data
2. Create surface plot.
3. Define columns for plotting.
4. Hide formula display.
5. Set surface color themes.
6. Set response column color themes.
7. Define formula for prediction.
8. Set solid color method for surfaces.
9. Configure SILICA axis.
10. Configure SILANE axis.
11. Set Z-axis value for ABRASION.
12. Set X-variable to SILICA.
13. Set Y-variable to SILANE.
14. Add iso values.
15. Adjust 3D frame size and rotation.



### Example 8
> **Summary**: Creates a surface plot to visualize the relationship between SILICA and SILANE, with customizable color themes and axis settings.

<!-- Keywords: #JSL, #SurfacePlot, #GraphBuilder, #Customization, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Lock Z Scale( 1 ),
	Scale response axes independently( 1 ),
	Z Grid Position( 130 ),
	Surface Color Theme( "Green to Black to Red" ),
	Surface Color Theme2( "Green to White to Red" ),
	Surface Color Theme3( "White to Black" ),
	Surface Color Theme4( "Blue to Gray to Red" ),
	Response Column Color Theme( "Blue to Green to Red" ),
	Response Column Color Theme2( "Spectral" ),
	Response Column Color Theme3( "Jet" ),
	Response Column Color Theme4( "White to Blue" ),
	Formula( "Pred Formula ABRASION" ),
	Equation( "", "", "", "" ),
	Surface Color Method( "Solid", "Solid", "Solid", "Solid" ),
	SetVariableAxis( :SILICA, Axis Data( {Format( "Custom", Formula( Round( Ln( value ), 2 ) ), 8 )} ) ),
	SetVariableAxis( :SILANE, Axis Data( {Format( "Custom", Formula( Round( Log( value, 2 ), 2 ) ), 8 )} ) ),
	SetZAxis( Pred Formula ABRASION, Current Value( 130 ), Axis Data( {Format( "Custom", Formula( Round( Log10( value ), 2 ) ), 8 )} ) ),
	SetZAxis( z#2, Axis Data( {} ) ),
	SetZAxis( z#3, Axis Data( {} ) ),
	SetZAxis( z#4, Axis Data( {} ) ),
	SetXVariable( :SILICA ),
	SetYVariable( :SILANE ),
	Iso Value( 0, 139.119238722664 ),
	Frame3D( Set Rotation( -54, 0, 38 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create surface plot.
3. Set prediction formula column.
4. Lock Z scale.
5. Scale response axes independently.
6. Set Z grid position.
7. Define surface color themes.
8. Define response column color themes.
9. Set surface color method.
10. Customize variable and Z axes.



### Example 9
> **Summary**: Creates a surface plot to visualize relationships between Pred Formula ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #3DGraphics -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Surface Color Theme( "Green to Black to Red" ),
	Surface Color Theme2( "Green to White to Red" ),
	Surface Color Theme3( "White to Black" ),
	Surface Color Theme4( "Blue to Gray to Red" ),
	Response Column Color Theme( "Blue to Green to Red" ),
	Response Column Color Theme2( "Spectral" ),
	Response Column Color Theme3( "Jet" ),
	Response Column Color Theme4( "White to Blue" ),
	Formula( "Pred Formula ABRASION", "Pred Formula MODULUS", "Pred Formula ELONG", "Pred Formula HARDNESS" ),
	Surface Color Method( "Solid", "Solid", "Solid", "Solid" ),
	SetVariableAxis( :SILICA, Axis Data( {Format( "Best", 8 ), Rotated Labels( "Horizontal" )} ) ),
	SetVariableAxis( :SILANE, Axis Data( {Format( "Best", 8 ), Rotated Labels( "Horizontal" )} ) ),
	SetZAxis(
		Pred Formula ABRASION,
		Current Value( 130 ),
		Axis Data( {Format( "Best", 8 ), Min( 40 ), Max( 220 ), Inc( 20 ), Minor Ticks( 0 ), Rotated Labels( "Horizontal" )} )
	),
	SetXVariable( SILICA ),
	SetYVariable( SILANE ),
	Iso Value( 0, 139.119238722664 ),
	Iso Value( 1, 1261.13313805186 ),
	Iso Value( 2, 400.384575393762 ),
	Iso Value( 3, 68.9096152062609 ),
	Frame3D( Set Rotation( -54, 0, 38 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Define columns for plotting.
4. Set surface color themes.
5. Set response column color themes.
6. Define formula for prediction.
7. Set surface color methods.
8. Configure variable axes.
9. Set Z-axis properties.
10. Set X and Y variables.
11. Add iso values.
12. Rotate 3D frame.



### Example 10
> **Summary**: Creates a surface plot with four columns (ABRASION, MODULUS, ELONG, and HARDNESS) from an open data table using the Surface Plot function.

<!-- Keywords: #JSLScripting, #SurfacePlot, #DataVisualization, #JMP, #GraphicalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
```

**Code Explanation**:

1. Open data table;
2. Create surface plot.
3. Include columns: ABRASION.
4. Include columns: MODULUS.
5. Include columns: ELONG.
6. Include columns: HARDNESS.



### Example 11
> **Summary**: Creates multiple slider boxes in new windows for testing purposes, utilizing the Surface Plot function to generate a 3D plot with four columns.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #SliderBox, #NewWindow, #Testing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
sb = (Report( obj )[Slider Box( 2 )]);
sbflag = 1;
If( sbflag,
	Close( dt, nosave )
);
sbvar = 0;
sb = "";
New Window( "Test Case 4", sb = Slider Box( -10, 10, sbvar, 0, set width( 200 ) ) );
If( sbflag,
	sb << Close Window
);
sbvar = 0;
sb = "";
New Window( "Test Case 5", sb = Slider Box( -10, 10, sbvar, 0, set width( 200 ) ) );
If( sbflag,
	sb << Close Window
);
sbvar = 0;
sb = "";
New Window( "Test Case 6", sb = Slider Box( -10, 10, sbvar, 0, set width( 200 ) ) );
If( sbflag,
	sb << Close Window
);
sbvar = 0;
sb = "";
New Window( "Test Case 7", sb = Slider Box( -10, 10, sbvar, 0, set width( 200 ) ) );
If( sbflag,
	sb << Close Window
);
sbvar = 0;
sb = "";
New Window( "Test Case 8", sb = Slider Box( -10, 10, sbvar, 0, set width( 200 ) ) );
If( sbflag,
	sb << Close Window
);
sbvar = 0;
sb = "";
New Window( "Test Case 9", sb = Slider Box( -10, 10, sbvar, 0, set width( 200 ) ) );
If( sbflag,
	sb << Close Window
);
sbvar = 0;
sb = "";
New Window( "Test Case 10", sb = Slider Box( -10, 10, sbvar, 0, set width( 200 ) ) );
If( sbflag,
	sb << Close Window
);
sbvar = 0;
sb = "";
```

**Code Explanation**:

1. Open data_table data
2. Create surface plot with four columns.
3. Access second slider box.
4. Set flag for closing data table.
5. Close data table if flag is set.
6. Initialize slider variable.
7. Clear slider object reference.
8. Create new window for Test Case 4.
9. Add slider box to window.
10. Close window if flag is set.



### Example 12
> **Summary**: Creates a surface plot from a data table, utilizing columns for prediction and displaying interactive slider boxes.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #InteractiveAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
sb = (Report( obj )[Slider Box( 2 )]);
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Set columns for prediction.
4. Access Report object.
5. Select Slider Box element.
6. Assign to sb variable.



### Example 13
> **Summary**: Creates a 3D surface plot to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #3DFrame, #Legend -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Show Surface2( Both Sides )
);
obj << Frame3D( Legend( 1 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Specify columns for plotting.
4. Display both sides of surface.
5. Convert to 3D frame.
6. Add legend to frame.
7. Generate report object.



### Example 14
> **Summary**: Creates a 3D surface plot to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMP, #SurfacePlot, #3DVisualization, #DataAnalysis, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Show Surface2( Both Sides )
);
obj << Frame3D( Legend( 1 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Define columns for plotting.
4. Show both sides of surface.
5. Enable 3D frame on plot.
6. Add legend to frame.
7. Generate report from plot.



### Example 15
> **Summary**: Creates a surface plot from a data table, specifying columns for plotting and grid lines, and generates a report.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #GridLines, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	X Grid( 1 ),
	Y Grid( 1 ),
	Z Grid( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Specify columns for plotting.
4. Set X grid lines.
5. Set Y grid lines.
6. Set Z grid lines.
7. Generate report from plot.



### Example 16
> **Summary**: Creates a surface plot to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphicalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Show Surface3( Above Only );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Specify columns for plotting.
4. Display surface plot above only.
5. Generate report from plot.



### Example 17
> **Summary**: Creates a surface plot from a data table, displaying both sides and generating a report.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #ReportGeneration, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Show Surface( Both Sides );
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Create surface plot.
3. Set surface display.
4. Generate report.



### Example 18
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphicalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Show Surface2( Both Sides );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot.
3. Select four columns.
4. Display both sides of surface.
5. Generate report object.



### Example 19
> **Summary**: Creates a surface plot to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphicalInterface -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Show Surface4( Both Sides );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Specify columns for plot.
4. Display surface on both sides.
5. Generate report from object.



### Example 20
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION, MODULUS, ELONG, and HARDNESS in a data table, with ABRASION as the response variable.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Response( :Pred Formula ABRASION );
obj << Clip Sheet( 1 );
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Create surface plot.
3. Set response variable.
4. Enable clip sheet.
5. Generate report.



### Example 21
> **Summary**: Creates a surface plot to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphicalUserInterface -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Response( "Pred Formula MODULUS", :Pred Formula MODULUS );
obj << Show Surface2( Both Sides );
obj << Clip Sheet2( 1 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot.
3. Set response variable "MODULUS".
4. Show both sides of surface.
5. Enable clipping for sheet 2.
6. Generate report.



### Example 22
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION, MODULUS, ELONG, and HARDNESS in a data table, with interactive features for both sides surface viewing and clipping.

<!-- Keywords: #JSL, #SurfacePlot, #DataVisualization, #InteractiveAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );
obj << Show Surface3( Both sides );
obj << Clip Sheet3( 1 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot.
3. Set response variable.
4. Show both sides surface.
5. Clip sheet 1.
6. Generate report.



### Example 23
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION, MODULUS, ELONG, and HARDNESS in a data table.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #JMP, #GraphicalReporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Response( "Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS", :Pred Formula HARDNESS );
obj << Show Surface4( Both sides );
obj << Clip Sheet4( 1 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Set columns for surface plot.
4. Define response variable.
5. Display both sides of surface.
6. Enable clipping sheet.
7. Generate report object.



### Example 24
> **Summary**: Creates a surface plot to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Show Mesh( X and Y );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create surface plot object.
3. Set columns for plot.
4. Display mesh on plot.
5. Generate report object.



### Example 25
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMP, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Show Mesh2( X );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot.
3. Add prediction columns.
4. Show X mesh.
5. Generate report.



### Example 26
> **Summary**: Creates a surface plot to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Show Mesh3( Y );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Set columns for plotting.
4. Show mesh on plot.
5. Generate report object.



### Example 27
> **Summary**: Creates a surface plot to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS in a data table, with both sides displayed and mesh shown on X and Y axes.

<!-- Keywords: #JSL, #SurfacePlot, #DataVisualization, #JMPScriptingLanguage, #GraphicalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Show Surface4( Both Sides );
obj << Show Mesh4( X and Y );
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Create surface plot.
3. Display both sides.
4. Show mesh on X and Y.
5. Generate report.



### Example 28
> **Summary**: Creates a surface plot with contour lines from four columns in a data table, utilizing the Surface Plot function.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #ContourLines, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Show Contour( On Surface );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot.
3. Add four columns.
4. Enable contour on surface.
5. Generate report object.



### Example 29
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Show Contour2( Above );
rpt = obj << report;
```

**Code Explanation**:

1. Open data_table data
2. Create Surface Plot object.
3. Specify prediction columns.
4. Display contour lines above.
5. Generate report object.



### Example 30
> **Summary**: Creates a 3D surface plot with contour display, using columns from a data table to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS.

<!-- Keywords: #JSL, #SurfacePlot, #ContourPlot, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Show Surface3( Both Sides );
obj << Show Contour3( Below );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot.
3. Set columns for plot.
4. Display surface on both sides.
5. Display contour below surface.
6. Generate report object.



### Example 31
> **Summary**: Creates a surface plot with contour lines to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS in a data table.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #ContourLines, #DataVisualization, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Show Surface4( Both Sides );
obj << Show Contour4( On Surface );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Add columns to plot.
4. Display both sides of surface.
5. Show contour lines on surface.
6. Generate report object.



### Example 32
> **Summary**: Creates a surface plot to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphicalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Dependent Variables Density( 1 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data_table data
2. Create Surface Plot object.
3. Set plot columns.
4. Configure dependent variables density.
5. Generate report object.



### Example 33
> **Summary**: Creates a surface plot to visualize three prediction columns (ABRASION, MODULUS, and ELONG) from a data table, with independent scaling of response axes.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Show Surface4( Both sides );
obj << Scale response axes independently( 1 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data_table data
2. Create Surface Plot object.
3. Add prediction columns to plot.
4. Display surface on both sides.
5. Independently scale response axes.
6. Generate report from plot.



### Example 34
> **Summary**: Creates a surface plot to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Response( ":Pred Formula MODULUS", :Pred Formula MODULUS );
obj << Datapoints Choice2( Points );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Set response column.
4. Configure datapoints choice.
5. Generate report object.



### Example 35
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );
obj << Datapoints Choice3( Mesh );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Set response variable.
4. Choose mesh data points.
5. Generate report object.



### Example 36
> **Summary**: Creates a 3D surface plot to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS in a data table.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #3DGraphs, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Response( "Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS", :Pred Formula HARDNESS );
obj << Datapoints Choice4( Surface );
obj << Frame3D( Set Rotation( -91.5268238026563, -9.26702369140455, 27.55249869042 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data_table data
2. Create Surface Plot object.
3. Set response variable HARDNESS.
4. Choose Surface for datapoints.
5. Rotate 3D frame.
6. Generate report object.



### Example 37
> **Summary**: Creates a surface plot to visualize three predicted formulas (ABRASION, MODULUS, and ELONG) from a data table, with both sides displayed for surfaces 2 and 4, and set to isosurface mode.

<!-- Keywords: #JSL, #SurfacePlot, #DataVisualization, #PredictiveModeling, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Show Surface 2( Both Sides );
obj << Show Surface 4( Both Sides );
obj << Mode( Isosurface );
rpt = obj << report;
```

**Code Explanation**:

1. Open data_table data
2. Create Surface Plot object.
3. Set columns for prediction.
4. Display both sides of surface 2.
5. Display both sides of surface 4.
6. Set plot mode to Isosurface.
7. Generate report from object.



### Example 38
> **Summary**: Creates a surface plot with multiple variables (ABRASION, MODULUS, ELONG, HARDNESS) from a data table, displaying both sides of Surfaces 2 and 4 in Density grid mode.

<!-- Keywords: #JSL, #SurfacePlot, #DensityGrid, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Show Surface 2( Both Sides );
obj << Show Surface 4( Both Sides );
obj << Mode( Density grid );
rpt = obj << report;
```

**Code Explanation**:

1. Open data_table data
2. Create Surface Plot object.
3. Add ABRASION column.
4. Add MODULUS column.
5. Add ELONG column.
6. Add HARDNESS column.
7. Display both sides of Surface 2.
8. Display both sides of Surface 4.
9. Set mode to Density grid.
10. Generate report.



### Example 39
> **Summary**: Creates a surface plot with multiple columns (ABRASION, MODULUS, ELONG, HARDNESS) and generates a report.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #ReportGeneration, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Show Surface 2( Both Sides );
obj << Show Surface 4( Both Sides );
obj << Mode( Sheet, points );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot.
3. Add ABRASION column.
4. Add MODULUS column.
5. Add ELONG column.
6. Add HARDNESS column.
7. Display both sides of Surface 2.
8. Display both sides of Surface 4.
9. Set mode to points.
10. Generate report.



### Example 40
> **Summary**: Creates a surface plot from data table 'data_table.jmp' with X-axis rotation set to 30 degrees, generating a report.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataTable, #ReportGeneration, #XAxisRotation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << XRotate( 30 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data_table data
2. Create Surface Plot object.
3. Set X-axis rotation to 30 degrees.
4. Generate report from plot.



### Example 41
> **Summary**: Creates a surface plot from data table 'data_table.jmp' with Y-axis rotation, and generates a report.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #ReportGeneration, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << YRotate( 20 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot.
3. Set Y-axis rotation.
4. Generate report.



### Example 42
> **Summary**: Creates a surface plot to visualize the relationship between Pred Formula ABRASION and other variables, with interactive features for rotation and report generation.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #InteractiveReporting, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << ZRotate( 45 );
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Create surface plot.
3. Rotate plot 45 degrees.
4. Generate report.



### Example 43
> **Summary**: Creates a surface plot to visualize the relationship between Pred Formula ABRASION, utilizing Isosurface mode and a resolution of 7.356.

<!-- Keywords: #SurfacePlot, #IsosurfaceMode, #JMPScriptingLanguage, #DataVisualization, #PredictiveModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Mode( Isosurface );
obj << Resolution( 7.356 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Set plot mode to Isosurface.
4. Set resolution to 7.356.
5. Generate report from plot.



### Example 44
> **Summary**: Creates a surface plot with a Z grid from a data table, specifying the Pred Formula ABRASION and positioning the Z grid at 0.733.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #GridPositioning, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Z Grid( 1 );
obj << Z Grid Position( 0.733 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create surface plot.
3. Set Z grid to 1.
4. Position Z grid at 0.733.
5. Generate report.



### Example 45
> **Summary**: Creates a surface plot from a data table, using columns for Pred Formula ABRASION, MODULUS, ELONG, and HARDNESS, with adjustable transparency and report generation.

<!-- Keywords: #JSL, #SurfacePlot, #DataVisualization, #ReportGeneration, #InteractiveAnalytics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Mode( Isosurface );
obj << Surface Alpha( 0.25 );
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Create surface plot.
3. Set plot mode.
4. Adjust surface transparency.
5. Generate report.



### Example 46
> **Summary**: Creates a surface plot from a data table, using columns for Pred Formula ABRASION, MODULUS, ELONG, and HARDNESS, with adjustable alpha value and both sides visible.

<!-- Keywords: #JSL, #SurfacePlot, #DataVisualization, #JMPScriptingLanguage, #GraphicalOutput -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Mode( Isosurface );
obj << Show Surface2( Both sides );
obj << Surface Alpha2( 0.3 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot.
3. Set columns for plot.
4. Change mode to Isosurface.
5. Show both sides of surface.
6. Set surface alpha to 0.3.
7. Generate report.



### Example 47
> **Summary**: Creates a surface plot from a data table, using columns for Pred Formula ABRASION, MODULUS, ELONG, and HARDNESS, with adjustable transparency and 3D visualization.

<!-- Keywords: #JSL, #SurfacePlot, #DataVisualization, #3DVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Mode( Isosurface );
obj << Show Surface3( Both sides );
obj << Surface Alpha3( 0.75 );
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Create surface plot.
3. Set mode to isosurface.
4. Show both sides of surface.
5. Set surface transparency.
6. Generate report.



### Example 48
> **Summary**: Creates a surface plot from a data table, using the Surface Plot function to visualize three predictive formula columns: ABRASION, MODULUS, and ELONG.

<!-- Keywords: #JSLScripting, #SurfacePlot, #PredictiveFormula, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Mode( Isosurface );
obj << Show Surface4( Both sides );
obj << Surface Alpha4( 0.90 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Set plot mode to isosurface.
4. Show surface on both sides.
5. Set surface transparency to 0.90.
6. Generate report from plot.



### Example 49
> **Summary**: Creates a surface plot with two response variables, Pred Formula ABRASION and Pred Formula MODULUS, using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Response( "Pred Formula MODULUS", :Pred Formula MODULUS );
obj << Datapoints Choice2( Mesh );
obj << Data Points Color2( {0, 0, 255} );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Set response variable.
4. Choose mesh for datapoints.
5. Set datapoints color to blue.
6. Generate report from plot.



### Example 50
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION, MODULUS, and ELONG using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ) );
obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );
obj << Datapoints Choice3( Needles );
obj << Data Points Color3( {255, 0, 0} );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Set response variable.
4. Choose datapoints style.
5. Set datapoints color.
6. Generate report object.



### Example 51
> **Summary**: Creates a 3D surface plot to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #3DGraph, #PredictiveModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Response( "Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS", :Pred Formula HARDNESS );
obj << Datapoints Choice4( Surface );
obj << Data Points Color4( {100, 0, 200} );
obj << Frame3D( Set Rotation( -79.3688859847019, -1.23001727812475, 27.7096879560307 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Create surface plot.
3. Set response variable.
4. Choose data points style.
5. Set data points color.
6. Rotate 3D frame.
7. Generate report.



### Example 52
> **Summary**: Creates a surface plot using the Surface Plot function to visualize the relationship between ABRASION, MODULUS, and ELONG variables in a data table.

<!-- Keywords: #JSL, #SurfacePlot, #DataVisualization, #PredictiveModeling, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ), Datapoints Choice3( Surface ) );
obj << Response( :Pred Formula ABRASION, "Pred Formula ELONG", :Pred Formula ELONG );
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Create surface plot.
3. Set response variables.
4. Generate report.



### Example 53
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION, MODULUS, and ELONG using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ), Datapoints Choice2( Surface ) );
obj << Show Surface2( Both sides );
obj << Formula( :Pred Formula ABRASION, Pred Formula ELONG );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Set surface plot options.
4. Display both sides of surface.
5. Define formula for prediction.
6. Generate report from plot.



### Example 54
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION, MODULUS, and ELONG, with an equation that combines SILANE and SILICA variables.

<!-- Keywords: #JSLScripting, #SurfacePlot, #DataVisualization, #EquationModeling, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ) );
obj << Show Surface2( Both sides );
obj << Equation( ., ".7 * :SILANE + 5 * :SILICA" );
obj << Show Formula( 1 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create surface plot.
3. Display both sides.
4. Set equation.
5. Show formula.
6. Generate report.



### Example 55
> **Summary**: Creates a surface plot to visualize ABRASION values, setting the Z axis current value to 130 and generating a report.

<!-- Keywords: #SurfacePlot, #JMPScriptingLanguage, #DataVisualization, #ReportGeneration, #ABRASION -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION ), Z Grid( 1 ) );
obj << Set Z Axis( :Pred Formula ABRASION, Current Value( 130 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot.
3. Set Z axis to "ABRASION".
4. Set Z axis current value to 130.
5. Generate report.



### Example 56
> **Summary**: Creates a surface plot to visualize the relationship between SULFUR and SILANE, with specific axis values set for each variable.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #AxisSettings, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Set Variable Axis( :SULFUR, Current Value( 2.925 ) );
obj << Set Variable Axis( :SILANE, Axis Data( {Format( "Best", 8 )} ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot.
3. Set SULFUR axis value.
4. Format SILANE axis data.
5. Generate report.



### Example 57
> **Summary**: Creates a surface plot from data table 'data_table.jmp' by setting the X variable to 'SULFUR' and generating a report.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataTable, #ReportGeneration, #XVariable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Set X Variable( :SULFUR );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create surface plot.
3. Set X variable.
4. Generate report.



### Example 58
> **Summary**: Creates a surface plot to visualize the relationship between Pred Formula ABRASION and SULFUR, generating a report for further analysis.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #ReportGeneration, #DataVisualization, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Set Y Variable( :SULFUR );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot.
3. Set Y variable to SULFUR.
4. Generate report.



### Example 59
> **Summary**: Creates a surface plot with isosurface mode to visualize the relationship between SILANE and SULFUR, utilizing the Surface Plot function in JMP.

<!-- Keywords: #JMP, #SurfacePlot, #IsosurfaceMode, #DataVisualization, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ), Mode( Isosurface ) );
obj << Set Y Variable( :SILANE );
obj << Set Y Variable( :SULFUR );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot.
3. Set columns for plot.
4. Change mode to Isosurface.
5. Set Y variable SILANE.
6. Set Y variable SULFUR.
7. Generate report.



### Example 60
> **Summary**: Creates a surface plot to visualize the relationship between SILANE and SULFUR, utilizing the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #ScientificComputing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ), Mode( Isosurface ) );
obj << Set Y Variable( :SILANE );
obj << Set Z Variable( :SULFUR );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot.
3. Set X variables.
4. Set Y variable.
5. Set Z variable.
6. Generate report.



### Example 61
> **Summary**: Creates a 3D surface plot to visualize the relationship between ABRASION and MODULUS, with customizable frame settings and background color.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #GraphBuilder, #DataVisualization, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ), Show Surface2( Both sides ) );
obj << Frame3D( Set Graph Size( 692, 671 ), Set Rotation( -54, 0, 38 ), Background Color( 255, 177, 125 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Specify plot columns.
4. Show both sides of surface.
5. Configure 3D frame settings.
6. Set graph size.
7. Set rotation angles.
8. Change background color.
9. Generate report object.
10. Assign report to variable.



### Example 62
> **Summary**: Creates a surface plot to visualize relationships between ABRASION and MODULUS, with an isosurface value set to 100.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #Isosurface, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Mode( Isosurface );
obj << Iso Value( 1, 100 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data_table data
2. Create Surface Plot.
3. Set Columns for plot.
4. Switch to Isosurface mode.
5. Set Iso Value to 100.
6. Generate report.



### Example 63
> **Summary**: Creates a surface plot to visualize ABRASION data, with mesh display on X and Y axes and blue color scheme.

<!-- Keywords: #SurfacePlot, #JSLScriptingLanguage, #DataVisualization, #MeshDisplay, #ABRASION -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Show Mesh( X and Y );
obj << Mesh Color( {0, 0, 255} );
```

**Code Explanation**:

1. Open data_table data
2. Create surface plot object.
3. Set plot columns to ABRASION.
4. Display mesh on X and Y.
5. Set mesh color to blue.



### Example 64
> **Summary**: Creates a surface plot with mesh display for X and Y, utilizing the Surface Plot object in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #MeshDisplay, #DataVisualization, #JSLScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Mode( Isosurface );
obj << Show Mesh2( X and Y );
obj << Mesh Color2( {255, 0, 0} );
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Set plot mode to Isosurface.
4. Enable mesh display for X and Y.
5. Set mesh color to red.



### Example 65
> **Summary**: Creates a surface plot with mesh display, utilizing the Surface Plot function to visualize relationships between Pred Formula ABRASION, Pred Formula MODULUS, and Pred Formula ELONG.

<!-- Keywords: #JSL, #SurfacePlot, #MeshDisplay, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ) );
obj << Mode( Isosurface );
obj << Show Mesh3( X and Y );
obj << Mesh Color3( {50, 0, 100} );
```

**Code Explanation**:

1. Open data table;
2. Create surface plot.
3. Set plot mode to isosurface.
4. Display mesh on X and Y axes.
5. Set mesh color to purple.



### Example 66
> **Summary**: Creates a surface plot to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS using JMP's Surface Plot function.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #Isosurface, #MeshColor -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Mode( Isosurface );
obj << Show Mesh4( X and Y );
obj << Mesh Color4( {0, 250, 0} );
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Set plot mode to Isosurface.
4. Enable mesh display for X and Y.
5. Set mesh color to green.



### Example 67
> **Summary**: Creates a surface plot to visualize Net Costs using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #GraphBuilder, #NetCosts -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Color Method( :Pred Formula ABRASION );
obj << Surface Lighting( Low Reflection );
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Set plot columns.
4. Apply Surface Color Method.
5. Adjust Surface Lighting.



### Example 68
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION and MODULUS, with both sides shown and solid color method applied.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Show Surface2( Both Sides );
obj << Surface Color Method( "Solid", :Pred Formula MODULUS );
obj << Surface Lighting2( Normal );
```

**Code Explanation**:

1. Open data table.
2. Create surface plot.
3. Show both sides surface.
4. Set surface color method.
5. Apply normal lighting.



### Example 69
> **Summary**: Creates a 3D surface plot to visualize and analyze the relationships between ABRASION, MODULUS, ELONG, and HARDNESS using JMP's Surface Plot function.

<!-- Keywords: #JMP, #SurfacePlot, #DataVisualization, #PredictiveModeling, #3DPlotting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Show Surface3( Both Sides );
obj << Surface Color Method( "Solid", "Solid", :Pred Formula ELONG );
obj << Surface Lighting3( Low Reflection );
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Specify plot columns.
4. Display both sides of surface.
5. Set surface color method.
6. Use elong prediction formula for color.
7. Apply low reflection lighting.



### Example 70
> **Summary**: Creates a 3D surface plot to visualize the relationship between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMP, #SurfacePlot, #3DVisualization, #DataAnalysis, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
obj << Show Surface4( Both Sides );
obj << Surface Color Method( "Solid", "Solid", "Solid", :Pred Formula HARDNESS );
obj << Surface Lighting4( Normal );
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Set columns for plot.
4. Display surface on both sides.
5. Apply solid color method.
6. Use hardness for coloring.
7. Enable normal lighting.



### Example 71
> **Summary**: Creates a surface plot with continuous gradients and solid color method based on MODULUS, using the Surface Plot function in JMP.

<!-- Keywords: #JMP, #SurfacePlot, #ContinuousGradients, #SolidColorMethod, #MODULUS -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ), Show Surface2( both sides ) );
obj << Surface Gradient Type( Continuous Gradients );
obj << Surface Color Method( "Solid", :Pred Formula MODULUS );
obj << Surface Color Theme2( Blue to Gray to Red );
```

**Code Explanation**:

1. Open data table;
2. Create surface plot.
3. Set columns for prediction.
4. Display surface on both sides.
5. Use continuous gradients for surface.
6. Set color method to solid.
7. Color based on MODULUS.
8. Apply blue to gray to red theme.



### Example 72
> **Summary**: Creates a surface plot with continuous gradients and color theme, using two prediction columns from an opened data table.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #ContinuousGradients, #ColorTheme, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ), Show Surface2( both sides ) );
obj << Surface Gradient Type( Continuous Gradients );
obj << Surface Gradient Type2( Continuous Gradients );
obj << Surface Color Method( :Pred Formula ABRASION, :Pred Formula MODULUS );
obj << Surface Color Theme( Blue to Gray to Red );
```

**Code Explanation**:

1. Open data_table data
2. Create Surface Plot.
3. Select two prediction columns.
4. Display surface on both sides.
5. Set gradient type to continuous.
6. Set gradient type2 to continuous.
7. Define color method for surfaces.
8. Apply blue to gray to red color theme.



### Example 73
> **Summary**: Creates a surface plot to visualize Net Costs using the Surface Plot function in JMP.

<!-- Keywords: #JMP, #SurfacePlot, #DataVisualization, #GraphBuilder, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Gradient Type( Continuous Gradients );
obj << Surface Color Method( :Pred Formula ABRASION );
obj << Surface Color Theme( Blue to Gray to Red );
```

**Code Explanation**:

1. Open table.
2. Create surface plot.
3. Set gradient type.
4. Set color method.
5. Set color theme.



### Example 74
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION and MODULUS, utilizing continuous gradients for both sides of the surface.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #ContinuousGradients, #DataVisualization, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ), Show Surface2( Both sides ) );
obj << Surface Color Theme( Blue to Gray to Red );
obj << Surface Gradient Type( Continuous Gradients );
obj << Surface Gradient Type2( Continuous Gradients );
obj << Surface Color Method( :Pred Formula ABRASION, :Pred Formula MODULUS, "Solid", "Solid" );
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Set columns for prediction.
4. Display both sides of surface.
5. Apply blue to gray to red color theme.
6. Use continuous gradients for surface.
7. Use continuous gradients for second surface.
8. Set color method for ABRASION.
9. Set color method for MODULUS.



### Example 75
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION and MODULUS, with continuous gradients and solid color scheme.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #GradientColor, #JMPGraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ), Show Surface2( Both sides ) );
obj << Surface Gradient Type2( Continuous Gradients );
obj << Surface Color Method( "Solid", :Pred Formula MODULUS );
obj << Surface Color Theme2( White to Black );
```

**Code Explanation**:

1. Open table.
2. Create surface plot.
3. Set surface display.
4. Define gradient type.
5. Set color method.
6. Apply color theme.



### Example 76
> **Summary**: Creates a 3D surface plot to visualize relationships between ABRASION, MODULUS, and ELONG using continuous gradients and solid color theme.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #ContinuousGradients, #SolidColorTheme, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ), Show Surface3( Both Sides ) );
obj << Surface Gradient Type3( Continuous Gradients );
obj << Surface Color Method( "Solid", "Solid", :Pred Formula ELONG );
obj << Surface Color Theme3( Spectral );
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Set columns for plot.
4. Display surface on both sides.
5. Set gradient type to continuous.
6. Define color method for surfaces.
7. Use solid color theme.
8. Apply Spectral color theme.



### Example 77
> **Summary**: Creates a surface plot with continuous gradients and solid colors, using hardness as the color variable, from the 'data_table.jmp' dataset.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #ContinuousGradients, #SolidColors, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Show Surface4( Both Sides )
);
obj << Surface Gradient Type4( Continuous Gradients );
obj << Surface Color Method( "Solid", "Solid", "Solid", :Pred Formula HARDNESS );
obj << Surface Color Theme4( Jet );
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Specify columns for plotting.
4. Show both sides of surface.
5. Set gradient type to continuous.
6. Define color method for surfaces.
7. Use hardness for coloring.
8. Apply jet color theme.



### Example 78
> **Summary**: Creates a surface plot to visualize Net Costs using the Surface Plot function in JMP.

<!-- Keywords: #SurfacePlot, #JMPScriptingLanguage, #DataVisualization, #NetCosts, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Gradient Type( Continuous Gradients );
obj << Surface Color Method( :Pred Formula ABRASION );
```

**Code Explanation**:

1. Open data table;
2. Create surface plot.
3. Set gradient type.
4. Apply color method.



### Example 79
> **Summary**: Creates a surface plot to visualize and analyze the relationship between ABRASION and MODULUS, with customizable gradient type and color method.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #Customization, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ), Show Surface2( Both sides ) );
obj << Surface Gradient Type2( Discrete Gradients );
obj << Surface Color Method( "Solid", :Pred Formula MODULUS );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Set surface display options.
4. Configure surface gradient type.
5. Define surface color method.
6. Generate report from object.



### Example 80
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION, MODULUS, and ELONG using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ), Show Surface3( Both Sides ) );
obj << Surface Gradient Type3( Solid );
obj << Surface Color Method( "Solid", "Solid", :Pred Formula ELONG );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Set surface gradient type.
4. Set surface color method.
5. Generate report object.



### Example 81
> **Summary**: Creates a surface plot with discrete gradients and color method based on hardness, using data from an open JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DiscreteGradients, #ColorMethod, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Show Surface4( Both Sides )
);
obj << Surface Gradient Type4( Discrete Gradients );
obj << Surface Color Method( "Solid", "Solid", "Solid", :Pred Formula HARDNESS );
rpt = obj << report;
```

**Code Explanation**:

1. Open data_table data
2. Create Surface Plot object.
3. Specify columns for plotting.
4. Display both sides of surface.
5. Set gradient type to discrete.
6. Assign color method based on hardness.
7. Generate report from plot.



### Example 82
> **Summary**: Creates a surface plot to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMP, #SurfacePlot, #DataVisualization, #PredictiveModeling, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Show Surface( Both Sides )
);
obj << Surface Color Method( :Pred Formula ABRASION );
obj << Surface Color Range( Axis );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Set columns for surface plot.
4. Display both sides of surface.
5. Set color method for surface.
6. Use axis for color range.
7. Generate report from surface plot.



### Example 83
> **Summary**: Creates a surface plot with three columns (Pred Formula ABRASION, Pred Formula MODULUS, and Pred Formula ELONG) to visualize relationships between variables, utilizing a solid color method based on the MODULUS column.

<!-- Keywords: #JSL, #SurfacePlot, #DataVisualization, #PredictiveModeling, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Show Surface2( Both Sides )
);
obj << Surface Color Method( "Solid", :Pred Formula MODULUS );
obj << Surface Color Range2( Data );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Specify columns for plot.
4. Show surface on both sides.
5. Set surface color method to solid.
6. Use MODULUS column for coloring.
7. Define color range based on data.
8. Generate report from plot.



### Example 84
> **Summary**: Creates a surface plot to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMP, #SurfacePlot, #DataVisualization, #Scripting, #GraphicalModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Show Surface3( Both Sides )
);
obj << Surface Color Method( "Solid", "Solid", :Pred Formula ELONG );
obj << Surface Color Range3( Axis );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot.
3. Add columns to plot.
4. Show both sides of surface.
5. Set color method to solid.
6. Use elongation for coloring.
7. Set color range by axis.
8. Generate report object.



### Example 85
> **Summary**: Creates a surface plot with color based on hardness, using data from a specified table and generating a report.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #ReportGeneration, #TableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Show Surface4( Both Sides )
);
obj << Surface Color Method( "Solid", "Solid", "Solid", :Pred Formula HARDNESS );
obj << Surface Color Range4( Data );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Define columns for plotting.
4. Show both sides of surface.
5. Set color method to solid.
6. Use hardness for coloring.
7. Set color range based on data.
8. Generate report from object.



### Example 86
> **Summary**: Creates a surface plot to visualize Net Costs using the Graph Builder function in JMP.

<!-- Keywords: #JMPGraphBuilder, #SurfacePlot, #DataVisualization, #NetCosts, #Graphing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION ), Show Surface( Both Sides ) );
obj << Surface Color( {0, 0, 255} );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create surface plot object.
3. Set surface plot columns.
4. Display both sides of surface.
5. Change surface color to blue.
6. Generate report object.



### Example 87
> **Summary**: Creates a surface plot with color to visualize and analyze data from 'data_table.jmp', utilizing the Surface Plot function.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #GraphBuilder, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ), Show Surface2( Both Sides ) );
obj << Surface Color2( {255, 128, 0} );
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Create surface plot.
3. Set surface color.
4. Generate report.



### Example 88
> **Summary**: Creates a surface plot to visualize three predictive formula columns (ABRASION, MODULUS, and ELONG) from a data table, with red color scheme.

<!-- Keywords: #JSLScripting, #SurfacePlot, #PredictiveFormula, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ), Show Surface3( Both Sides ) );
obj << Surface Color3( {255, 0, 0} );
rpt = obj << report;
```

**Code Explanation**:

1. Open data_table data
2. Create Surface Plot object.
3. Set plot columns.
4. Show both sides surface.
5. Set surface color red.
6. Generate report object.



### Example 89
> **Summary**: Creates a surface plot with color, using columns from a data table to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #GraphBuilder, #InteractiveReporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Show Surface4( Both Sides )
);
obj << Surface Color4( {100, 0, 200} );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create surface plot object.
3. Specify columns for plotting.
4. Display both sides of surface.
5. Set surface color.
6. Generate report object.



### Example 90
> **Summary**: Creates a surface plot with contour lines to visualize Net Costs, utilizing the Surface Plot function in JMP.

<!-- Keywords: #JMP, #SurfacePlot, #ContourLines, #DataVisualization, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION ), Show Contour( On Surface ) );
obj << Surface Color Method( :Pred Formula ABRASION );
obj << Contour Color( {255, 128, 0} );
```

**Code Explanation**:

1. Open data table;
2. Create surface plot.
3. Set contour on surface.
4. Change surface color method.
5. Set contour color.



### Example 91
> **Summary**: Creates a surface plot with contour lines to visualize the relationship between ABRASION and MODULUS, using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #ContourLines, #DataVisualization, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ), Show Surface2( Both Sides ) );
obj << Show Contour2( On Surface );
obj << Contour Color2( {255, 128, 0} );
```

**Code Explanation**:

1. Open table.
2. Create surface plot.
3. Display both sides.
4. Enable contour on surface.
5. Set contour color.



### Example 92
> **Summary**: Creates a surface plot with contour lines to visualize the relationship between ABRASION, MODULUS, and ELONG using the Surface Plot function in JMP.

<!-- Keywords: #JMP, #SurfacePlot, #ContourLines, #DataVisualization, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ), Show Surface3( Both Sides ) );
obj << Show Contour3( On Surface );
obj << Contour Color3( {255, 0, 0} );
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Set columns for prediction formulas.
4. Display both sides of surface.
5. Enable contour on surface.
6. Set contour color to red.



### Example 93
> **Summary**: Creates a surface plot with contour lines to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS in a data table.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #ContourLines, #DataVisualization, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Show Surface4( Both Sides )
);
obj << Show Contour4( On Surface );
obj << Contour Color4( {100, 0, 200} );
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Create surface plot.
3. Select columns for plot.
4. Display both sides of surface.
5. Show contour on surface.
6. Set contour color.
7. Generate report.



### Example 94
> **Summary**: Creates a surface plot with discrete gradients to visualize and analyze the ABRASION data, utilizing the Surface Plot function.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DiscreteGradients, #DataVisualization, #ABRASION -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot( Columns( :Pred Formula ABRASION ), Surface Color Method( :Pred Formula ABRASION ) );
obj << Surface Gradient Type( Discrete Gradients );
obj << Surface Gradients( 9 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Set surface color method.
4. Configure discrete gradients.
5. Set gradient count to 9.
6. Generate report object.



### Example 95
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION and MODULUS, with discrete gradients and solid color based on MODULUS.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DiscreteGradients, #SolidColor, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( Both sides ),
	Surface Color Method( "Solid", :Pred Formula MODULUS )
);
obj << Surface Gradient Type2( Discrete Gradients );
obj << Surface Gradients2( 8 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Set columns for prediction.
4. Display both sides of surface.
5. Use modulus for surface color.
6. Set gradient type to discrete.
7. Define 8 surface gradients.
8. Generate report from plot.



### Example 96
> **Summary**: Creates a surface plot to visualize the relationships between ABRASION, MODULUS, and ELONG using the Surface Plot function in JMP.

<!-- Keywords: #JMP, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphicalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( Both sides ),
	Surface Color Method( "Solid", "Solid", :Pred Formula ELONG )
);
obj << Surface Gradient Type3( Discrete Gradients );
obj << Surface Gradients3( 10 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Define columns for prediction.
4. Display both sides of surface.
5. Set surface color method.
6. Apply discrete gradients to surface.
7. Specify number of gradients.
8. Generate report from object.



### Example 97
> **Summary**: Creates a surface plot to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphicalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Show Surface4( Both sides ),
	Surface Color Method( "Solid", "Solid", "Solid", :Pred Formula HARDNESS )
);
obj << Surface Gradient Type4( Discrete Gradients );
obj << Surface Gradients4( 9 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Set columns for plot.
4. Display both sides of surface.
5. Set color method for surfaces.
6. Set gradient type to discrete.
7. Set number of gradients to 9.
8. Generate report from plot.



### Example 98
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION and MODULUS, with continuous gradient fill applied.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #ContinuousGradientFill, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( Surface ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
obj << Response Column Fill2( Continuous Gradients );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Set columns for plot.
4. Define equation parameters.
5. Choose surface datapoints.
6. Set response column.
7. Apply continuous gradient fill.
8. Generate report.



### Example 99
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION, MODULUS, and ELONG using the Surface Plot function in JMP.

<!-- Keywords: #JMP, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( Surface ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
obj << Response Column Fill3( Discrete Gradients );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Set plot columns.
4. Define equation parameters.
5. Choose datapoint display.
6. Set response column.
7. Apply discrete gradient fill.
8. Generate report.



### Example 100
> **Summary**: Creates a surface plot to visualize and analyze the relationship between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Equation( ., ., ., . ),
	Datapoints Choice4( Surface ),
	Response( "Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS", :Pred Formula HARDNESS )
);
obj << Response Column Fill4( Continuous Gradients );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Set columns for prediction formulas.
4. Initialize equation parameters.
5. Choose surface datapoint style.
6. Set response column for hardness.
7. Apply continuous gradient fill.
8. Generate report from plot.



### Example 101
> **Summary**: Creates a surface plot to visualize and analyze the relationship between ABRASION and MODULUS using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( Surface ),
	Response Column Fill2( Discrete Gradients ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
obj << Response Column Gradient Lines2( 1 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Specify columns for plotting.
4. Set equation parameters.
5. Choose surface datapoints.
6. Set response column fill.
7. Define response column.
8. Add gradient lines to response.
9. Generate report from object.
10. Assign report to variable.



### Example 102
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION, MODULUS, and ELONG using the Surface Plot function in JMP.

<!-- Keywords: #JMP, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( Surface ),
	Response Column Fill3( Discrete Gradients ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
obj << Response Column Gradient Lines3( 1 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Set columns for plotting.
4. Define equation parameters.
5. Choose surface datapoints.
6. Fill response column gradients.
7. Set response column properties.
8. Enable gradient lines on response.
9. Generate report from plot.
10. Assign report to variable.



### Example 103
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Equation( ., ., ., . ),
	Datapoints Choice4( Surface ),
	Response Column Fill4( Discrete Gradients ),
	Response( "Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS", :Pred Formula HARDNESS )
);
obj << Response Column Gradient Lines4( 1 );
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Create surface plot.
3. Set columns for plot.
4. Define equation.
5. Choose datapoint style.
6. Set response column fill.
7. Set response.
8. Add gradient lines.
9. Generate report.



### Example 104
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION and MODULUS using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( Surface ),
	Response Column Fill2( Discrete Gradients ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
obj << Response Column Gradients2( 8 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot.
3. Set columns for plot.
4. Define equation parameters.
5. Choose surface datapoints.
6. Set response column fill.
7. Specify response variable.
8. Adjust response gradients.
9. Generate report object.
10. Assign report to variable.



### Example 105
> **Summary**: Creates a surface plot to visualize the relationship between Abrasion, Modulus, and Elongation using data from a specified table.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( Surface ),
	Response Column Fill3( Discrete Gradients ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
obj << Response Column Gradients3( 7 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Set columns for prediction formulas.
4. Initialize equation parameters.
5. Choose surface plot data points.
6. Fill response column with gradients.
7. Set response column for elongation.
8. Configure response column gradients.
9. Generate report from plot.
10. Assign report to variable.



### Example 106
> **Summary**: Creates a surface plot to visualize relationships between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Equation( ., ., ., . ),
	Datapoints Choice4( Surface ),
	Response Column Fill4( Discrete Gradients ),
	Response( "Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS", :Pred Formula HARDNESS )
);
obj << Response Column Gradients4( 10 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create surface plot object.
3. Define columns for plotting.
4. Set equation parameters.
5. Choose surface datapoints.
6. Fill response column gradients.
7. Set response column.
8. Adjust response gradients.
9. Generate report object.



### Example 107
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION and MODULUS, with continuous gradients for response and white-to-black color theme.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #GraphBuilder, #ContinuousGradients, #ColorTheme -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( Surface ),
	Response Column Fill2( Continuous Gradients ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
obj << Response Column Color Theme2( White to Black );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Surface Plot object.
3. Set X columns: ABRASION, MODULUS.
4. Initialize Equation parameters.
5. Choose Surface for Datapoints.
6. Set Continuous Gradients for Response.
7. Define Response: MODULUS.
8. Apply White to Black color theme.
9. Generate report object.
10. Assign report to rpt variable.



### Example 108
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION, MODULUS, and ELONG using the Surface Plot function in JMP.

<!-- Keywords: #JMP, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( Surface ),
	Response Column Fill3( Continuous Gradients ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
obj << Response Column Color Theme3( Blue to Gray to Red );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create a Surface Plot object.
3. Specify columns for plotting.
4. Set equation parameters.
5. Choose surface datapoint style.
6. Select response column fill theme.
7. Define response variable.
8. Set response column color theme.
9. Generate plot report.
10. Assign report to rpt variable.



### Example 109
> **Summary**: Creates a surface plot to visualize the relationship between ABRASION, MODULUS, ELONG, and HARDNESS using the Surface Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #SurfacePlot, #DataVisualization, #PredictiveModeling, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Equation( ., ., ., . ),
	Datapoints Choice4( Surface ),
	Response Column Fill4( Continuous Gradients ),
	Response( "Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS", :Pred Formula HARDNESS )
);
obj << Response Column Color Theme4( White to Red );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create surface plot object.
3. Specify columns for plotting.
4. Set equation parameters.
5. Choose datapoints display method.
6. Select response column fill.
7. Define response column.
8. Set response color theme.
9. Generate report object.



### Example 110
> **Summary**: Creates a surface plot to visualize and compare GP Fit and NL Fit values, with interactive features for rotation and axis scaling.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #InteractiveVisualization, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :GP Fit, :NL Fit, :Name( "log($ value)" ) ),
	Lock Z Scale( 1 ),
	Shine Choice2( Both sides ),
	Datapoints Choice3( Points ),
	XRotate( -66.3468993855009 ),
	YRotate( 0.547170416692303 ),
	ZRotate( 40.7073204987852 ),
	Formula( "GP Fit", "NL Fit" ),
	Response( "log($ value)", "log($ value)", :Name( "log($ value)" ) ),
	SetVariableAxis( GP Fit, Axis Data( {Scale( Linear ), Format( "Best" ), Min( -6 ), Max( 1 ), Inc( 1 )} ) ),
	SetVariableAxis( NL Fit, Axis Data( {Scale( Linear ), Format( "Best" ), Min( -6 ), Max( 1 ), Inc( 1 )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create surface plot object.
3. Specify columns for plotting.
4. Lock Z scale.
5. Set shine choice.
6. Set datapoint choice.
7. Rotate X axis.
8. Rotate Y axis.
9. Rotate Z axis.
10. Define formula and response.



### Example 111
> **Summary**: Creates a surface plot to visualize and compare GP Fit and NL Fit values, with interactive features for data points and axis rotation.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #InteractiveAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Surface Plot(
	Columns( :GP Fit, :NL Fit, :Name( "log($ value)" ) ),
	Lock Z Scale( 1 ),
	Shine Choice2( Both sides ),
	Datapoints Choice3( Points ),
	XRotate( -66.3468993855009 ),
	YRotate( 0.547170416692303 ),
	ZRotate( 40.7073204987852 ),
	Formula( :GP Fit, :NL Fit ),
	Response( Empty(), Empty(), :Name( "log($ value)" ) ),
	SetVariableAxis( :GP Fit, Axis Data( {Scale( Linear ), Format( "Best" ), Min( -6 ), Max( 1 ), Inc( 1 )} ) ),
	SetVariableAxis( :NL Fit, Axis Data( {Scale( Linear ), Format( "Best" ), Min( -6 ), Max( 1 ), Inc( 1 )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create surface plot.
3. Select columns for plotting.
4. Lock Z scale.
5. Set shine option.
6. Display data points.
7. Rotate X axis.
8. Rotate Y axis.
9. Rotate Z axis.
10. Define formula and response.



## Surface Plot using Eval
> **Summary**: Creates a surface plot from a data table, specifying columns for plotting and customizing visual settings.

<!-- Keywords: #JSLScriptingLanguage, #SurfacePlot, #DataVisualization, #Customization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Eval(
	Eval Expr(
		dt << Surface Plot(
			Columns( :GP Fit, :NL Fit, :Name( "log($ value)" ) ),
			Lock Z Scale( 1 ),
			Shine Choice2( Both sides ),
			Datapoints Choice3( Points ),
			XRotate( -66.3468993855009 ),
			YRotate( 0.547170416692303 ),
			ZRotate( 40.7073204987852 ),
			Formula( Expr( :GP Fit << Get Name ), Expr( :NL Fit << Get Name ) ),
			Response( Expr( :Name( "log($ value)" ) << Get Name ), Expr( :Name( "log($
value)" ) << Get Name ), :Name( "log($ value)" ) ),
			SetVariableAxis(
				Expr(
					As Name( :GP Fit << Get Name )
				),
				Axis Data( {Scale( Linear ), Format( "Best" ), Min( -6 ), Max( 1 ), Inc( 1 )} )
			),
			SetVariableAxis(
				Expr(
					As Name( :NL Fit << Get Name )
				),
				Axis Data( {Scale( Linear ), Format( "Best" ), Min( -6 ), Max( 1 ), Inc( 1 )} )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create surface plot object.
3. Specify columns for plotting.
4. Lock Z scale.
5. Set shine choice.
6. Set datapoints choice.
7. Rotate X axis.
8. Rotate Y axis.
9. Rotate Z axis.
10. Define formula for plot.



## Surface Plot using Name
> **Summary**: Creates a surface plot with three columns: GP Fit, NL Fit, and log($ value), using JMP's Graph Builder platform.

<!-- Keywords: #JMPGraphBuilder, #SurfacePlot, #GPFit, #NLFit, #LogarithmicScale -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log dollar value name = :Name( "log($ value)" ) << Get Name;
gp fit name = :GP Fit << Get Name;
nl fit name = :NL Fit << Get Name;
obj = Eval(
	Eval Expr(
		dt << Surface Plot(
			Columns( :GP Fit, :NL Fit, :Name( "log($ value)" ) ),
			Lock Z Scale( 1 ),
			Shine Choice2( Both sides ),
			Datapoints Choice3( Points ),
			XRotate( -66.3468993855009 ),
			YRotate( 0.547170416692303 ),
			ZRotate( 40.7073204987852 ),
			Formula( Expr( gp fit name ), Expr( nl fit name ) ),
			Response( Expr( log dollar value name ), Expr( log dollar value name ), Expr( As Name( log dollar value name ) ) ),
			SetVariableAxis(
				Expr( As Name( gp fit name ) ),
				Axis Data( {Scale( Linear ), Format( "Best" ), Min( -6 ), Max( 1 ), Inc( 1 )} )
			),
			SetVariableAxis(
				Expr( As Name( nl fit name ) ),
				Axis Data( {Scale( Linear ), Format( "Best" ), Min( -6 ), Max( 1 ), Inc( 1 )} )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Retrieve column names.
3. Create surface plot object.
4. Specify columns for plotting.
5. Lock Z scale.
6. Set shine choice.
7. Display data points.
8. Rotate plot axes.
9. Define formula expressions.
10. Set response and variable axes.



