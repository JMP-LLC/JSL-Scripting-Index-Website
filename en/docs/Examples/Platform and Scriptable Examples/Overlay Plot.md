# Overlay Plot

### Example 1
> **Summary**: Visualizes the relationship between City Mileage (MPG) and Highway Mileage (MPG) using an Overlay Plot, enabling Range Plot for dispersion analysis.

<!-- Keywords: #OverlayPlot, #RangePlot, #MeasurementAnalysis, #JSLScripting, #DataVisualization -->

**Code**:
```jsl
// Overlay Plot
// Open data table
dt = Open("data_table.jmp");
// Overlay Plot
Overlay Plot(
	Y(
		:"City Mileage (MPG)"n,
		:"Highway Mileage (MPG)"n
	),
	Range Plot( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Create Overlay Plot.
3. Set Y-axis to "City Mileage (MPG)".
4. Add "Highway Mileage (MPG)" to Y-axis.
5. Enable Range Plot.



### Example 2
> **Summary**: Visualizes the overlay plot of normal and t-densities for a given data set, providing an interactive visualization of the distribution.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #NormalDistribution, #T-Distribution, #DataVisualization -->

**Code**:
```jsl
// Overlay Plot Nomal and t
// Open data table
dt = Open("data_table.jmp");
// Overlay Plot Nomal and t
Overlay Plot(
	X( :X ),
	Y( :Normal dens, :t dens5 ),
	Function Plot( 1 ),
	Show Points( 0 )
);
```

**Code Explanation**:

1. Open data table.
2. Create overlay plot.
3. Set X variable.
4. Add Normal density.
5. Add t density.
6. Enable function plot.
7. Disable point display.



### Example 3
> **Summary**: Visualizes the relationship between Xbeta and beta coefficients using an overlay plot, with customizable scales for both axes.

<!-- Keywords: #JMPScriptingLanguage, #OverlayPlot, #BetaCoefficients, #DataVisualization, #MeasurementAnalysis -->

**Code**:
```jsl
// Overlay Plot for Betas
// Open data table
dt = Open("data_table.jmp");
// Overlay Plot for Betas
Overlay Plot(
	X( :Xbeta ),
	Y( :beta.5.5, :beta52, :beta2.5 ),
	Overlay Axis << {{Scale( "Linear" ),
	Format( "Best" ), Min( -1 ), Max( 5 ),
	Inc( 1 ), Minor Ticks( 0 )}},
	X Axis << {{Scale( "Linear" ),
	Format( "Best" ), Min( 0.05 ),
	Max( 0.95 ), Inc( 0.1 )}},
	Function Plot( 1 ),
	Show Points( 0 ),
	SendToReport(
		Dispatch( {}, "102", ScaleBox,
			{Scale( "Linear" ),
			Format( "Best" ), Min( -1 ),
			Max( 5 ), Inc( 1 ),
			Minor Ticks( 0 )}
		),
		Dispatch( {}, "101", ScaleBox,
			{Scale( "Linear" ),
			Format( "Best" ), Min( 0.05 ),
			Max( 0.95 ), Inc( 0.1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create overlay plot.
3. Set X variable.
4. Set Y variables.
5. Configure overlay axis scale.
6. Configure X axis scale.
7. Add function plot.
8. Hide points.
9. Send report settings.
10. Adjust overlay scale box.
11. Adjust X scale box.



### Example 4
> **Summary**: Visualizes the relationship between Xgamma and gamma values using an overlay plot, with function plots enabled and point display disabled.

<!-- Keywords: #OverlayPlot, #FunctionPlot, #PointDisplay, #MeasurementAnalysis, #JMPScriptingLanguage -->

**Code**:
```jsl
// Overlay Plot for Gammas
// Open data table
dt = Open("data_table.jmp");
// Overlay Plot for Gammas
Overlay Plot(
	X( :Xgamma ),
	Y( :gamma1, :gamma3, :gamma5 ),
	Function Plot( 1 ),
	Show Points( 0 )
);
```

**Code Explanation**:

1. Open table.
2. Create overlay plot.
3. Set X-axis to :Xgamma.
4. Add :gamma1 to Y-axis.
5. Add :gamma3 to Y-axis.
6. Add :gamma5 to Y-axis.
7. Enable function plot.
8. Disable point display.



### Example 5
> **Summary**: Visualizes Weibull distributions with an overlay plot, showcasing the relationships between three variables using JMP's Overlay Plot function.

<!-- Keywords: #JMPScriptingLanguage, #WeibullDistribution, #OverlayPlot, #DataVisualization, #MeasurementAnalysis -->

**Code**:
```jsl
// Overlay Plot for Weibulls
// Open data table
dt = Open("data_table.jmp");
// Overlay Plot for Weibulls
Overlay Plot(
	X( :XWeibull ),
	Y( :Weibull11, :Weibul12, :Weibul21 ),
	Function Plot( 1 ),
	Show Points( 0 )
);
```

**Code Explanation**:

1. Open table.
2. Create overlay plot.
3. Set X-axis variable.
4. Add Y-axis variables.
5. Enable function plot.
6. Hide data points.



### Example 6
> **Summary**: Visualizes the relationship between X and Y variables using an overlay plot, with Pred Y series connected and hidden, and Y series colored by group.

<!-- Keywords: #OverlayPlot, #JSLScriptingLanguage, #MeasurementAnalysis, #DataVisualization, #JMP -->

**Code**:
```jsl
// Overlay Plot
// Open data table
dt = Open("data_table.jmp");
// Overlay Plot
Overlay Plot(
	X( :X ),
	Y( :Pred Y, :Y ),
	:
	Pred Y(
		Connect Points( 1 ),
		Show Points( 0 )
	),
	:Y( Connect Color( 5 ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create overlay plot.
3. Set X axis variable.
4. Add Y variables.
5. Configure Pred Y series.
6. Connect Pred Y points.
7. Hide Pred Y points.
8. Configure Y series.
9. Color Y lines by group.
10. Display plot.



### Example 7
> **Summary**: Visualizes the relationship between x and y variables using an overlay plot, allowing for a detailed analysis of DJI High, Close, and Low values.

<!-- Keywords: #OverlayPlot, #JMPScriptingLanguage, #DataVisualization, #FinancialAnalysis, #TimeSeries -->

**Code**:
```jsl
// Overlay Plot
// Open data table
dt = Open("data_table.jmp");
// Overlay Plot
Overlay Plot( X( :x ), Y( :y ) );
```

**Code Explanation**:

1. Open data table.
2. Create overlay plot.
3. Set X-axis variable.
4. Set Y-axis variable.



### Example 8
> **Summary**: Visualizes the portion of a specific age group in each country over time, using an overlay plot to display the data with grouping by country.

<!-- Keywords: #OverlayPlot, #Grouping, #XAxisConfiguration, #JMPScriptingLanguage, #MeasurementAnalysis -->

**Code**:
```jsl
// Overlay Plot
// Open data table
dt = Open("data_table.jmp");
// Overlay Plot
Overlay Plot(
	X( :Year ),
	Y( :"Portion 0-19"n ),
	Grouping( :Country ),
	Overlay Groups,
	X Axis << {{Scale( "Linear" ),
	Format( "Best" ), Min( 1957.5 ),
	Max( 2000 ), Inc( 10 ),
	Minor Ticks( 9 ),
	Show Major Grid( 1 ),
	Show Minor Grid( 1 )}},
	Connect Points( 1 )
);
```

**Code Explanation**:

1. Open table.
2. Create overlay plot.
3. Set X variable.
4. Set Y variable.
5. Define grouping.
6. Enable overlay groups.
7. Configure X axis scale.
8. Set X axis format.
9. Set X axis min value.
10. Set X axis max value.



### Example 9
> **Summary**: Visualizes moving averages for the XYZ variable over time, using an overlay plot to display both the original data and the calculated moving average.

<!-- Keywords: #JSL, #OverlayPlot, #MovingAverages, #TimeSeriesAnalysis, #DataVisualization -->

**Code**:
```jsl
// Overlay Plot: Moving Averages
// Open data table
dt = Open("data_table.jmp");
// Overlay Plot: Moving Averages
Overlay Plot(
	X( :Date ),
	Y( :XYZ, :moving avg. )
);
```

**Code Explanation**:

1. Open data table.
2. Create overlay plot.
3. Set X-axis to Date.
4. Add XYZ to Y-axis.
5. Add moving avg. to Y-axis.



### Example 10
> **Summary**: Visualizes the daily movement of DJI High, Close, and Low values over time using an overlay plot with a needle style, providing a detailed view of market fluctuations.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #NeedlePlotStyle, #FinancialDataAnalysis, #TimeSeriesVisualization -->

**Code**:
```jsl
// Overlay Plot: Needle
// Open data table
dt = Open("data_table.jmp");
// Overlay Plot: Needle
Overlay Plot(
	X( :Date ),
	Y( :DJI High, :DJI Close, :DJI Low ),
	Needle( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create overlay plot.
3. Set X-axis to Date.
4. Add DJI High, Close, Low to Y-axis.
5. Enable needle plot style.



### Example 11
> **Summary**: Creates an overlay plot to visualize the relationship between 'name' and 'height', using separate axes for clarity.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #SeparateAxes, #DataVisualization, #MeasurementAnalysis -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
Overlay Plot( X( :name ), Y( :height ), Separate Axes( 1 ) );
```

**Code Explanation**:

1. Set default names.
2. Open data_table data
3. Create overlay plot.
4. Set X axis to "name".
5. Set Y axis to "height".
6. Enable separate axes.



### Example 12
> **Summary**: Creates an overlay plot to visualize height data, configuring Y-axis settings and sending a report dispatch.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #Y-AxisSettings, #ReportDispatch, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Overlay Plot(
	Y( :height ),
	Y Axis[1] << {{Format( "Best", 12 ), Min( -4.2 ), Max( 4.2 ), Inc( 0.2 ), Minor Ticks( 1 )}},
	Separate Axes( 1 ),
	SendToReport( Dispatch( {}, "106", ScaleBox, {Format( "Best", 12 ), Min( -4.2 ), Max( 4.2 ), Inc( 0.2 ), Minor Ticks( 1 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create overlay plot.
3. Set Y variable to height.
4. Configure Y axis settings.
5. Enable separate axes.
6. Send report dispatch.
7. Format scale box.
8. Set minimum value.
9. Set maximum value.
10. Set increment value.



### Example 13
> **Summary**: Creates an Overlay Plot with customized scales for measurement analysis, displaying values in a user-friendly format.

<!-- Keywords: #MeasurementAnalysis, #OverlayPlot, #CustomScale, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Overlay Plot(
	X( :April ),
	Y( :Name( "Humid1:PM" ), :Name( "Humid4:PM" ) ),
	SendToReport(
		Dispatch( {}, "102", ScaleBox,
			{Format( "Custom", Formula( If( value != 100, Substitute( Char( value ), "0", " tens" ), "10 tens" ) ), 11 )}
		),
		Dispatch( {}, "101", ScaleBox, {Format( "Custom", Formula( If( value > 30, "DNE", value ) ), 5 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create an Overlay Plot.
3. Set X-axis to April.
4. Set Y-axes to Humid1:PM and Humid4:PM.
5. Customize Y1 scale format.
6. Replace "0" with " tens".
7. Replace "100" with "10 tens".
8. Set Y2 scale format.
9. Display "DNE" for values over 30.
10. Display actual values for Y2 otherwise.



### Example 14
> **Summary**: Creates an overlay plot to visualize height and weight against age, utilizing the Overlay Plot platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #OverlayPlot, #MeasurementAnalysis, #DataVisualization, #Graphical -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Overlay Plot( X( :age ), Y( :height, :weight ) );
Report( obj )[Outline Box( 1 )] << Set Title( "Height & Weight vs. Age" );
```

**Code Explanation**:

1. Open data table.
2. Create overlay plot object.
3. Set X-axis to age.
4. Set Y-axes to height and weight.
5. Access report object.
6. Locate first outline box.
7. Set title for plot.



### Example 15
> **Summary**: Creates an overlay plot to visualize height and weight data against age, with a bold title and centered text box.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #DataVisualization, #MeasurementAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Overlay Plot( X( :age ), Y( :height, :weight ) );
Report( obj )[Outline Box( 1 )] << Set Title( "Height & Weight vs. Age" );
(Report( obj )[Outline Box( 1 )] << Child) << Prepend(
	H Center Box( tb = Text Box( "Height & Weight vs. Age", <<Set Font Style( "Bold" ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create overlay plot object.
3. Set main title for graph.
4. Add centered bold text box.
5. Place text box at top.



### Example 16
> **Summary**: Creates an overlay plot to visualize two variables, Humid1:PM and Humid4:PM, with April as the x-axis.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #MeasurementSystemsAnalysis, #DataVisualization, #JMPScripting -->

**Code**:
```jsl
Open("data_table.jmp");
Overlay Plot( X( :April ), Y( :Name( "Humid1:PM" ), :Name( "Humid4:PM" ) ), Overlay( 0 ), Connect Points( 1 ) );
```

**Code Explanation**:

1. Open data_table data
2. Create overlay plot.
3. Set X-axis to April.
4. Add Humid1:PM to Y-axis.
5. Add Humid4:PM to Y-axis.
6. Disable overlay.
7. Connect data points.



### Example 17
> **Summary**: Creates an overlay plot to visualize stock market data, with X-axis set to Date and Y-axes for High, Low, Close, and Volume.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #FinancialDataAnalysis, #DataVisualization, #JMPScript -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Overlay Plot( X( :Date ), Y( :High, :Low, :Close, :Volume ), Y Scale( Left, Left, Left, Right ) );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create overlay plot object.
4. Set X axis to Date.
5. Set Y axes for High, Low, Close, Volume.
6. Assign Y scales: Left, Left, Left, Right.



### Example 18
> **Summary**: Creates an overlay plot to visualize the relationship between weight and height, grouped by age, with specific color and marker settings for group 2.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #Grouping, #ColorMarker, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Overlay Plot( X( :weight ), Y( :height ), Grouping( :age ), Overlay Groups( Group[2] << Group Color( 25 ) << Group Marker( 11 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create overlay plot.
3. Set X axis to weight.
4. Set Y axis to height.
5. Group by age.
6. Overlay groups by age.
7. Set group 2 color.
8. Set group 2 marker.



### Example 19
> **Summary**: Creates an overlay plot to visualize the relationship between height and weight, grouped by age, in a data table.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #DataVisualization, #Grouping, #FrameSizeAdjustment -->

**Code**:
```jsl
Open("data_table.jmp");
Overlay Plot(
	X( :height ),
	Y( :weight ),
	Grouping( :age ),
	SendToReport(
		Dispatch( {}, "Overlay Plot Graph", FrameBox, {Frame Size( 252, 81 )} ),
		Dispatch( {}, "Overlay Plot Graph", FrameBox( 2 ), {Frame Size( 252, 81 )} ),
		Dispatch( {}, "Overlay Plot Graph", FrameBox( 3 ), {Frame Size( 252, 81 )} ),
		Dispatch( {}, "Overlay Plot Graph", FrameBox( 4 ), {Frame Size( 252, 81 )} ),
		Dispatch( {}, "Overlay Plot Graph", FrameBox( 5 ), {Frame Size( 252, 81 )} ),
		Dispatch( {}, "Overlay Plot Graph", FrameBox( 6 ), {Frame Size( 252, 81 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create overlay plot.
3. Set X axis to height.
4. Set Y axis to weight.
5. Group by age.
6. Adjust frame size for graph.
7. Adjust frame size for graph.
8. Adjust frame size for graph.
9. Adjust frame size for graph.
10. Adjust frame size for graph.



### Example 20
> **Summary**: Creates an overlay plot to visualize two humidity levels (Humid1:PM and Humid4:PM) for April, utilizing the Overlay Plot platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #OverlayPlot, #DataVisualization, #MeasurementSystemsAnalysis, #CrossedModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select all Rows << Label;
dt << clear select;
Overlay Plot( X( :April ), Y( :Name( "Humid1:PM" ), :Name( "Humid4:PM" ) ) );
```

**Code Explanation**:

1. Open data table;
2. Select all rows in table.
3. Label selected rows.
4. Clear row selection.
5. Create overlay plot.
6. Set X-axis to April.
7. Add Humid1:PM to Y-axis.
8. Add Humid4:PM to Y-axis.



### Example 21
> **Summary**: Creates an overlay plot to visualize the relationship between Humid1:PM and Humid4:PM in April, with specific row selection and labeling.

<!-- Keywords: #JMPScriptingLanguage, #OverlayPlot, #DataTableManipulation, #RowSelection, #Labeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select all Rows << Label;
dt << clear select;
Overlay Plot( X( :April ), Y( :Name( "Humid1:PM" ), :Name( "Humid4:PM" ) ) );
dt << Select Rows( {27, 28, 29, 30} );
```

**Code Explanation**:

1. Open data table.
2. Select all rows.
3. Label selected rows.
4. Clear row selection.
5. Create overlay plot.
6. Set X axis to April.
7. Add Humid1:PM to Y axis.
8. Add Humid4:PM to Y axis.
9. Select specific rows.
10. Highlight selected rows.



### Example 22
> **Summary**: Creates an overlay plot to visualize DJI High, Close, and Low values over time, with interactive features for customization.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #TimeSeriesAnalysis, #FinancialDataVisualization, #Customization -->

**Code**:
```jsl
Open("data_table.jmp");
Overlay Plot(
	X( :Date ),
	Y( :DJI High, :DJI Close, :DJI Low ),
	:DJI High( Connect Points( 1 ), Overlay Marker( 8 ) ),
	:DJI Close( Needle( 1 ), Overlay Marker( 1 ) ),
	:DJI Low( Connect Points( 1 ) ),
	SendToReport( Dispatch( {}, "101", ScaleBox, {Label Row( Label Orientation( "Vertical" ) )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create overlay plot.
3. Set X-axis to Date.
4. Add DJI High to Y-axis.
5. Add DJI Close to Y-axis.
6. Add DJI Low to Y-axis.
7. Connect DJI High points.
8. Overlay DJI High markers.
9. Use needle for DJI Close.
10. Overlay DJI Close markers.
11. Connect DJI Low points.
12. Set vertical label orientation.



### Example 23
> **Summary**: Creates an overlay plot to visualize DJI High, Close, and Low values over time, using the Needle plot style.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #NeedlePlot, #TimeSeriesAnalysis, #FinancialData -->

**Code**:
```jsl
Open("data_table.jmp");
Overlay Plot( X( :Date ), Y( :DJI High, :DJI Close, :DJI Low ), Needle( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create overlay plot.
3. Set X-axis to Date.
4. Add DJI High series.
5. Add DJI Close series.
6. Add DJI Low series.
7. Enable needle plot style.



### Example 24
> **Summary**: Creates an overlay plot with grouped data, adjusting frame sizes and background colors for each graph.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #GroupedData, #FrameSizeAdjustment, #BackgroundColorCustomization -->

**Code**:
```jsl
Open("data_table.jmp");
Overlay Plot(
	X( :weight ),
	Y( :height ),
	Grouping( :age, :sex ),
	SendToReport(
		Dispatch( {}, "Overlay Plot Graph", FrameBox, {Frame Size( 180, 100 ), Background Color( 41 )} ),
		Dispatch( {}, "Overlay Plot Graph", FrameBox( 2 ), {Frame Size( 180, 100 )} ),
		Dispatch( {}, "Overlay Plot Graph", FrameBox( 3 ), {Frame Size( 180, 100 )} ),
		Dispatch( {}, "Overlay Plot Graph", FrameBox( 4 ), {Frame Size( 180, 100 )} ),
		Dispatch( {}, "Overlay Plot Graph", FrameBox( 5 ), {Frame Size( 180, 100 )} ),
		Dispatch( {}, "Overlay Plot Graph", FrameBox( 6 ), {Frame Size( 180, 100 ), Background Color( 38 )} ),
		Dispatch( {}, "Overlay Plot Graph", FrameBox( 7 ), {Frame Size( 180, 100 )} ),
		Dispatch( {}, "Overlay Plot Graph", FrameBox( 8 ), {Frame Size( 180, 100 )} ),
		Dispatch( {}, "Overlay Plot Graph", FrameBox( 9 ), {Frame Size( 180, 100 )} ),
		Dispatch( {}, "Overlay Plot Graph", FrameBox( 10 ), {Frame Size( 180, 100 )} ),
		Dispatch( {}, "Overlay Plot Graph", FrameBox( 11 ), {Frame Size( 180, 100 )} ),
		Dispatch( {}, "Overlay Plot Graph", FrameBox( 12 ), {Frame Size( 180, 100 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create overlay plot.
3. Set X-axis to weight.
4. Set Y-axis to height.
5. Group by age and sex.
6. Send report settings.
7. Adjust frame size for each graph.
8. Set background color for specific frames.
9. Repeat frame size adjustments for all graphs.
10. Finalize report layout.



### Example 25
> **Summary**: Creates an overlay plot with multiple Y axes, including log scaling on the left axis, using the Overlay Plot function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #OverlayPlot, #MultipleYAxes, #LogScaling, #DataVisualization -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Overlay Plot( X( :Date ), Y( :High, :Low, :Close, :Volume ), Y Scale( Right, Right, Right, Left ), Left Y Log Scale( 1 ) );
```

**Code Explanation**:

1. Set default names scope.
2. Open data table.
3. Create Overlay Plot object.
4. Set X axis to Date.
5. Set Y axes to High, Low, Close, Volume.
6. Set Y scales: Right, Right, Right, Left.
7. Enable log scale on left Y axis.



### Example 26
> **Summary**: Creates an overlay plot to visualize profit data, utilizing the Overlay Plot platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #OverlayPlot, #ProfitAnalysis, #DataVisualization, #MeasurementSystemsAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Overlay Plot( Y( :Name( "Profit($M)" ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create overlay plot.
3. Set Y axis variable.



### Example 27
> **Summary**: Creates an overlay plot to visualize and compare ozone, CO, and SO2 levels across different regions.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #Grouping, #MeasurementAnalysis, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Overlay Plot( X( :X ), Y( :OZONE, :CO, :SO2 ), Grouping( :Region ) );
```

**Code Explanation**:

1. Open data table;
2. Create overlay plot object.
3. Set X variable to :X.
4. Add Y variables :OZONE, :CO, :SO2.
5. Group by :Region.



### Example 28
> **Summary**: Creates an overlay plot to visualize and compare ozone, carbon monoxide, and sulfur dioxide levels across regions.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #DataVisualization, #MeasurementSystemsAnalysis, #JMP -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Overlay Plot( X( :X ), Y( :OZONE, :CO, :SO2 ), Grouping( :Region ) );
obj << Overlay Groups( 1 );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create overlay plot.
4. Set X-axis to :X.
5. Set Y-axes to :OZONE, :CO, :SO2.
6. Group by :Region.
7. Overlay groups.



### Example 29
> **Summary**: Creates an overlay plot with multiple Y axes, displaying High, Low, Close, and Volume data over time.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #YAxisCustomization, #DataVisualization, #TimeSeriesAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Overlay Plot( X( :Date ), Y( :High, :Low, :Close, :Volume ), Y Scale( Left, Left, Left, Right ) );
obj << Overlay( 0 );
```

**Code Explanation**:

1. Open data_table data
2. Create Overlay Plot object.
3. Set X axis to Date.
4. Set Y axes for High, Low, Close, Volume.
5. Assign Y scales: Left, Left, Left, Right.
6. Overlay plots on separate axes.



### Example 30
> **Summary**: Creates an overlay plot with separate axes for High, Low, Close, and Volume data, using the Overlay Plot platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #OverlayPlot, #SeparateAxes, #DataVisualization, #FinancialData -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Overlay Plot( X( :Date ), Y( :High, :Low, :Close, :Volume ), Y Scale( Left, Left, Left, Right ) );
obj << Overlay( 0 );
obj << Separate Axes( 1 );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create overlay plot.
4. Set X axis to Date.
5. Set Y axes for High, Low, Close, Volume.
6. Assign Left scale to High, Low, Close.
7. Assign Right scale to Volume.
8. Overlay plots.
9. Separate axes.
10. Execute script.



### Example 31
> **Summary**: Creates an overlay plot to visualize the relationship between POP and OZONE, NO, SO2 variables with a log-scaled X-axis.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #LogScale, #DataVisualization, #MeasurementAnalysis -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Overlay Plot( X( :POP ), Y( :OZONE, :NO, :SO2 ), X Log Scale( 1 ) );
```

**Code Explanation**:

1. Set default names scope.
2. Open data table.
3. Create overlay plot object.
4. Set X-axis to log scale.
5. Plot POP on X-axis.
6. Plot OZONE, NO, SO2 on Y-axis.



### Example 32
> **Summary**: Creates an overlay plot to visualize and compare City Mileage (MPG) and Highway Mileage (MPG) data, with options for connect thru missing values and ungrouped plots.

<!-- Keywords: #JSL, #OverlayPlot, #MeasurementSystemsAnalysis, #DataVisualization, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Overlay Plot(
	Y( :Name( "City Mileage (MPG)" ), :Name( "Highway Mileage (MPG)" ) ),
	Overlay( 0 ),
	Range Plot( 1 ),
	Ungroup Plots( 1 ),
	Connect Thru Missing( 1 ),
	SendToReport(
		Dispatch( {}, "Overlay Plot", OutlineBox, {Set Title( "Overlay Plots: No Overlay; Connect Thru Missing, Ungroup Plots" )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create overlay plot object.
3. Set Y variables.
4. Enable overlay.
5. Enable range plot.
6. Enable ungroup plots.
7. Enable connect thru missing.
8. Send report to display.
9. Set plot title.
10. Display final plot.



### Example 33
> **Summary**: Creates an overlay plot to visualize and compare City Mileage (MPG) and Highway Mileage (MPG) using the Range Plot feature.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #RangePlot, #MeasurementAnalysis, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Overlay Plot( Y( :Name( "City Mileage (MPG)" ), :Name( "Highway Mileage (MPG)" ) ), Range Plot( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create overlay plot object.
3. Set Y variables for plot.
4. Add range plot to overlay.
5. Configure range plot settings.



### Example 34
> **Summary**: Creates an overlay plot to visualize two variables (Humid1:PM and Humid4:PM) over time, using the Open and Overlay Plot JSL functions.

<!-- Keywords: #JMPScriptingLanguage, #OverlayPlot, #DataVisualization, #TimeSeriesAnalysis, #MeasurementSystemsAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Overlay Plot( X( :April ), Y( :Name( "Humid1:PM" ), :Name( "Humid4:PM" ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create overlay plot.
3. Set X-axis variable.
4. Add first Y-axis variable.
5. Add second Y-axis variable.



### Example 35
> **Summary**: Creates an overlay plot to visualize two variables (Humid1:PM and Humid4:PM) for specific rows in a data table.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #DataTableSelection, #MeasurementAnalysis, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Overlay Plot( X( :April ), Y( :Name( "Humid1:PM" ), :Name( "Humid4:PM" ) ) );
dt << Select Rows( {27, 28, 29, 30} );
```

**Code Explanation**:

1. Open table.
2. Create overlay plot.
3. Set X axis variable.
4. Set Y axis variables.
5. Select specific rows.



### Example 36
> **Summary**: Creates an overlay plot to visualize the relationship between height and weight, grouped by age.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #Grouping, #DataVisualization, #MeasurementAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Overlay Plot( X( :height ), Y( :weight ), Grouping( :age ), Overlay Groups );
```

**Code Explanation**:

1. Open data table;
2. Create overlay plot.
3. Set X-axis to height.
4. Set Y-axis to weight.
5. Group by age.
6. Display overlay groups.



### Example 37
> **Summary**: Creates an overlay plot with local data filtering to analyze gamma values based on Xgamma ranges, and generates a report for further analysis.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #LocalDataFilter, #AutomaticRecalculation, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Overlay Plot(
	X( :Xgamma ),
	Y( :gamma1, :gamma3, :gamma5 ),
	Local Data Filter(
		Add Filter( columns( :Xgamma ), Where( :Xgamma >= 0.5 & :Xgamma <= 10 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
obj << Automatic Recalc( 0 );
dt << Select Where( :X <= 0 );
dt << Exclude();
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table.
2. Create overlay plot object.
3. Set X axis variable.
4. Set Y axis variables.
5. Add local data filter.
6. Define filter conditions.
7. Set filter mode.
8. Disable automatic recalculation.
9. Select rows where X <= 0.
10. Exclude selected rows from analysis.



### Example 38
> **Summary**: Creates and updates an overlay plot with filtered data, utilizing a local data filter to select specific rows based on the Xgamma column.

<!-- Keywords: #OverlayPlot, #LocalDataFilter, #AutomaticRecalculation, #DataFiltering, #JSLScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Overlay Plot(
	X( :Xgamma ),
	Y( :gamma1, :gamma3, :gamma5 ),
	Local Data Filter(
		Add Filter( columns( :Xgamma ), Where( :Xgamma >= 0.5 & :Xgamma <= 10 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
obj << Automatic Recalc( 1 );
dt << Select Where( :X <= 0 );
dt << Exclude();
rpt = Report( obj );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Overlay Plot(
	X( :Xgamma ),
	Y( :gamma1, :gamma3, :gamma5 ),
	Local Data Filter(
		Add Filter( columns( :Xgamma ), Where( :Xgamma >= 0.5 & :Xgamma <= 10 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
obj << Automatic Recalc( 0 );
dt << Select Where( :X <= 0 );
dt << Exclude();
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table;
2. Create overlay plot.
3. Set X-axis to :Xgamma.
4. Set Y-axes to :gamma1, :gamma3, :gamma5.
5. Add local data filter.
6. Filter :Xgamma between 0.5 and 10.
7. Enable automatic recalculation.
8. Select rows where :X <= 0.
9. Exclude selected rows.
10. Generate report.
11. Close "data_table.jmp" without saving.
12. Reopen "data_table.jmp".
13. Create overlay plot again.
14. Set X-axis to :Xgamma.
15. Set Y-axes to :gamma1, :gamma3, :gamma5.
16. Add local data filter.
17. Filter :Xgamma between 0.5 and 10.
18. Disable automatic recalculation.
19. Select rows where :X <= 0.
20. Exclude selected rows.
21. Generate report.



### Example 39
> **Summary**: Creates an overlay plot to visualize and compare City Mileage (MPG) and Highway Mileage (MPG) using the Range Plot feature.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #RangePlot, #MeasurementSystemsAnalysis, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Overlay Plot( Y( :Name( "City Mileage (MPG)" ), :Name( "Highway Mileage (MPG)" ) ), Range Plot( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create overlay plot object.
3. Set Y variables for plot.
4. Add range plot feature.



### Example 40
> **Summary**: Creates an Overlay Plot to visualize flight data, combining concatenated flight numbers with transformed time of day and original time, grouped by first event word and last airport word.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #DataVisualization, #FlightDataAnalysis, #TimeSeries -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Overlay Plot(
	X( Transform Column( "Concatenate[Flight Number,Tail Number]", Character, Formula( :Flight Number || ", " || :Tail Number ) ) ),
	Y(
		Transform Column( "Time of Day[Time]", Format( "h:m", 8 ), Formula( Time Of Day( :Time ) ) ),
		Transform Column( "Time of Day[Original Time]", Format( "h:m", 8 ), Formula( Time Of Day( :Original Time ) ) )
	),
	Y Scale( Left, Right ),
	Grouping( Transform Column( "First[Event]", Character, Formula( Word( 1, :Event ) ) ) ),
	By( Transform Column( "Last[Airport]", Character, Formula( Word( -1, :Airport ) ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create Overlay Plot.
3. Set X-axis to concatenated flight numbers.
4. Set Y-axis to transformed time of day.
5. Set second Y-axis to original time of day.
6. Use left and right scales for Y-axes.
7. Group by first word in event.
8. By last word in airport.
9. Transform flight number and tail number.
10. Transform time of day and original time.



### Example 41
> **Summary**: Creates an overlay plot for weight and subsequent data table modifications, including column deletion and row selection.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #DataTableModification, #ColumnDeletion, #RowSelection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Overlay Plot( Y( :weight ) );
dt << delete columns( weight );
dt << select rows( [1, 2, 3] );
dt << exclude;
```

**Code Explanation**:

1. Open data table;
2. Create overlay plot for weight.
3. Delete weight column.
4. Select first three rows.
5. Exclude selected rows.



### Example 42
> **Summary**: Creates an Overlay Plot to visualize stock market data, with customizable Y-axis scales and marker drawing mode.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #CustomizableY-axisScales, #MarkerDrawingMode, #FinancialDataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Overlay Plot(
	X( :Date ),
	Y( :High, :Low, :Close, :Volume ),
	Y Scale( Left, Left, Left, Right ),
	SendToReport( Dispatch( {}, "Overlay Plot Graph", FrameBox, {Marker Drawing Mode( "Fast" )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create Overlay Plot.
3. Set X axis to Date.
4. Set Y axes: High, Low, Close, Volume.
5. Assign Y scales: Left, Left, Left, Right.
6. Send report message.
7. Dispatch to Overlay Plot Graph.
8. Select FrameBox.
9. Set Marker Drawing Mode to Fast.



### Example 43
> **Summary**: Creates two overlay plots with connected points to visualize April data for Humid1:PM and Humid4:PM.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #ConnectedPoints, #MeasurementAnalysis, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Overlay Plot( X( :April ), Y( :Name( "Humid1:PM" ), :Name( "Humid4:PM" ) ) );
obj = Overlay Plot( X( :April ), Y( :Name( "Humid1:PM" ), :Name( "Humid4:PM" ) ), Connect Points( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create overlay plot.
3. Set X axis to April.
4. Set Y axes to Humid1:PM and Humid4:PM.
5. Create second overlay plot.
6. Set X axis to April.
7. Set Y axes to Humid1:PM and Humid4:PM.
8. Connect points in plot.



### Example 44
> **Summary**: Creates an overlay plot to visualize stock market data, with X-axis set to date and Y-axis scales for high, low, close, and volume.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #FinancialDataAnalysis, #DataVisualization, #StockMarket -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Overlay Plot( X( :Date ), Y( :High, :Low, :Close, :Volume ), Y Scale( Left, Left, Left, Right ), Connect Points( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create overlay plot.
3. Set X axis to :Date.
4. Add :High, :Low, :Close, :Volume to Y.
5. Set Y scales: Left, Left, Left, Right.
6. Connect data points for each series.



### Example 45
> **Summary**: Creates overlay plots with grouping by age and sex, allowing for separate axes and overlay groups.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #Grouping, #SeparateAxes, #OverlayGroups -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Overlay Plot( X( :height ), Y( :weight ), Grouping( :age, :sex ) );
obj = Overlay Plot( X( :height ), Y( :weight ), Grouping( :age, :sex ), Separate Axes( 1 ) );
obj = Overlay Plot( X( :height ), Y( :weight ), Grouping( :sex ) );
obj = Overlay Plot( X( :height ), Y( :weight ), Grouping( :sex ), Overlay Groups );
```

**Code Explanation**:

1. Open data table;
2. Create overlay plot.
3. Set grouping by age and sex.
4. Separate axes for groups.
5. Change grouping to sex.
6. Overlay groups by sex.



### Example 46
> **Summary**: Creates overlay plots to visualize and compare humidity data over time, with options for separate axes and step plots.

<!-- Keywords: #JSL, #OverlayPlot, #DataVisualization, #MeasurementSystemsAnalysis, #TimeSeries -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Overlay Plot( X( :date ), Y( :Name( "Humid1:PM" ), :Name( "Humid4:PM" ) ), Overlay( 0 ), Connect Points( 1 ) );
obj = Overlay Plot( X( :date ), Y( :Name( "Humid1:PM" ), :Name( "Humid4:PM" ) ), Overlay( 0 ), Separate Axes( 1 ), Connect Points( 1 ) );
obj = Overlay Plot( Y( :Name( "Humid4:PM" ) ), Step( 1 ), Show Points( 0 ) );
```

**Code Explanation**:

1. Open data table;
2. Create overlay plot.
3. Set X-axis to date.
4. Set Y-axes to Humid1:PM and Humid4:PM.
5. Disable overlay.
6. Connect data points.
7. Create another overlay plot.
8. Set X-axis to date.
9. Set Y-axes to Humid1:PM and Humid4:PM.
10. Enable separate axes.
11. Connect data points.
12. Create step plot for Humid4:PM.
13. Hide data points.



### Example 47
> **Summary**: Creates an overlay plot to visualize relationships between height, weight, and demographic factors (age and sex) in a data table.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #DataVisualization, #MeasurementAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Overlay Plot( X( :height ), Y( :weight ), Grouping( :age, :sex ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Overlay Plot.
3. Set X-axis to height.
4. Set Y-axis to weight.
5. Group by age and sex.
6. Generate report object.



### Example 48
> **Summary**: Creates an overlay plot to visualize height and weight data, with customizable Y-axis limits and separate axes.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #Customization, #DataVisualization, #MeasurementAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Overlay Plot(
	X( :height ),
	Y( :weight ),
	Y Axis[1] << {{Min( 180 ), Max( 60 ), Inc( 20 )}},
	Separate Axes( 1 ),
	Connect Thru Missing( 1 ),
	Connect Points( 1 ),
	SendToReport(
		Dispatch( {}, "106", ScaleBox, {Min( 180 ), Max( 60 ), Inc( 20 )} ),
		Dispatch( {}, "Overlay Plot Graph", FrameBox, Add Graphics Script( 2, Description( "Script" ), Circle( {60, 120}, 10 ) ) )
	)
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create overlay plot object.
3. Set X-axis to height.
4. Set Y-axis to weight.
5. Customize Y-axis limits.
6. Enable separate axes.
7. Connect points through missing values.
8. Connect individual points.
9. Send report to script.
10. Add circle to graph.



## Overlay Plot using If
### Example 1
> **Summary**: Creates an overlay plot on a data table, displaying DJI High, Close, and Low series with needle plots enabled.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #OverlayPlot, #NeedlePlot, #Windows -->

**Code**:
```jsl
If( Host is( "Windows" ),
	Open("data_table.jmp");
	Overlay Plot( X( :Date ), Y( :DJI High, :DJI Close, :DJI Low ), Needle( 1 ) );
);
```

**Code Explanation**:

1. Check if host is Windows.
2. Open data table;
3. Create overlay plot.
4. Set X axis to Date.
5. Add DJI High series.
6. Add DJI Close series.
7. Add DJI Low series.
8. Enable needle plot.



### Example 2
> **Summary**: Creates an overlay plot to visualize City and Highway Mileage data on a Windows platform.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #Windows, #DataVisualization, #JMPScriptingLanguage -->

**Code**:
```jsl
If( Host is( "Windows" ),
	dt under test = Open("data_table.jmp");
	obj = Overlay Plot( Y( :Name( "City Mileage (MPG)" ), :Name( "Highway Mileage (MPG)" ) ), Range Plot( 1 ) );
);
```

**Code Explanation**:

1. Check if host is Windows.
2. Open data table;
3. Create Overlay Plot object.
4. Set Y variables: City and Highway Mileage.
5. Add Range Plot with index 1.



## Overlay Plot using Select Rows
> **Summary**: Creates an overlay plot with separate axes, grouping data by sex, using a specific range of rows from a data table.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #OverlayPlot, #SeparateAxes, #ByGroup -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( {16, 17, 18, 19, 20} );
dt << Overlay Plot( X( :age ), Y( :height ), Separate Axes( 1 ), By( :sex ) );
```

**Code Explanation**:

1. Open data table.
2. Select specific rows.
3. Create overlay plot.
4. Set X-axis variable.
5. Set Y-axis variable.
6. Enable separate axes.
7. Group by sex.



## Overlay Plot using Insert Into
> **Summary**: Creates a new window with an overlay plot, grouping data by 'sex' and displaying 'height' on the X-axis and 'weight' on the Y-axis.

<!-- Keywords: #JSLScriptingLanguage, #OverlayPlot, #ByGrouping, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtCol = {};
Insert Into( dtCol, Column( "sex" ) );
New Window( "Try Crash", op = Overlay Plot( X( :Name( "height" ) ), Y( :Name( "weight" ) ), By( Eval( dtCol ) ) ) );
```

**Code Explanation**:

1. Open data table.
2. Initialize empty list.
3. Insert column "sex" into list.
4. Create new window titled "Try Crash".
5. Define overlay plot object.
6. Set X axis to "height".
7. Set Y axis to "weight".
8. Group plots by "sex".



## Overlay Plot using Set Values
> **Summary**: Creates and compares overlay plots with initial and revised reports, utilizing JMP's reporting features.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #Reporting, #OverlayPlot, #Comparison -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:"Humid1:PM" << Set Values( {1, 1, 1, 1, 1, 1} );
obj = Overlay Plot( X( :April ), Y( :Name( "Humid1:PM" ), :Name( "Humid4:PM" ) ) );
rpt1 = obj << report;
expr1 = rpt1 << get journal;
:"Humid1:PM" << Set Property( "Missing Value Codes", 1 );
obj2 = obj << Redo Analysis;
rpt2 = obj2 << Report;
expr2 = rpt2 << Get Journal;
ans = Equal( expr1, expr2 );
```

**Code Explanation**:

1. Open data_table data
2. Set Humid1:PM values.
3. Create overlay plot.
4. Generate initial report.
5. Extract initial journal.
6. Set missing value code.
7. Redo analysis.
8. Generate new report.
9. Extract new journal.
10. Compare journals.



