# Scatterplot Matrix

### Example 1
> **Summary**: Visualizes a scatterplot matrix to analyze the relationships between various fatty acid variables in an open data table, utilizing a Lower Triangular Matrix Format and adding fit lines for each pair of variables.

<!-- Keywords: #JSLScripting, #ScatterplotMatrix, #DataVisualization, #MatrixFormat, #FitLines -->

**Code**:
```jsl
// Scatterplot Matrix
// Open data table
dt = Open("data_table.jmp");
// Scatterplot Matrix
Scatterplot Matrix(
	Y(
		:palmitic, :palmitoleic, :stearic,
		:oleic, :linoleic, :linolenic,
		:arachidic, :eicosenoic
	),
	Matrix Format( "Lower Triangular" ),
	Fit Line( 0 )
);
```

**Code Explanation**:

1. Open table.
2. Create scatterplot matrix.
3. Specify variables.
4. Set matrix format.
5. Add fit line.



### Example 2
> **Summary**: Creates a scatterplot matrix from a data table, setting Y and X variables, and configuring report settings with scale box 104.

<!-- Keywords: #JSLScriptingLanguage, #ScatterplotMatrix, #ReportSettings, #ScaleBox, #DataTable -->

**Code**:
```jsl
Open("data_table.jmp");
sm = Scatterplot Matrix(
	Y( :name, :age, :sex, :height, :weight ),
	X( :name, :age, :sex, :height, :weight ),
	SendToReport(
		Dispatch( {}, "104", ScaleBox, {Min( 0 ), Max( 180 ), Inc( 20 ), Minor Ticks( 0 )} ),
		Dispatch( {}, "1104", ScaleBox, {Min( 0 ), Max( 180 ), Inc( 20 ), Minor Ticks( 0 )} ), 
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create scatterplot matrix.
3. Set Y variables.
4. Set X variables.
5. Send report settings.
6. Configure scale box 104.
7. Set min to 0.
8. Set max to 180.
9. Set increment to 20.
10. Disable minor ticks.



### Example 3
> **Summary**: Creates a scatterplot matrix with varying jitter values, enabling interactive exploration of relationships between age, sex, height, and weight.

<!-- Keywords: #JMPScriptingLanguage, #ScatterplotMatrix, #DataVisualization, #InteractiveAnalysis, #Jittering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
objNoJitter = dt << Scatterplot Matrix(
	Y( :age, :sex, :height, :weight ),
	Matrix Format( "Lower Triangular" ),
	Fit Line( 1 ),
	Density Ellipses( 1 ),
	Shaded Ellipses( 1 )
);
For Each( {JitterValue}, {"None", "Auto", "Random Uniform", "Random Normal", "Packed", "Centered Grid", "Positive Grid", "Density Random"},
	objWithJitter = dt << Scatterplot Matrix(
		Y( :age, :sex, :height, :weight ),
		Matrix Format( "Lower Triangular" ),
		Points Jittered( JitterValue ),
		Fit Line( 1 ),
		Density Ellipses( 1 ),
		Shaded Ellipses( 1 ), 
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create scatterplot matrix without jitter.
3. Set matrix format to lower triangular.
4. Add fit lines to plots.
5. Enable density ellipses.
6. Enable shaded ellipses.
7. Loop through jitter values.
8. Create scatterplot matrix for each jitter value.
9. Set matrix format to lower triangular.
10. Apply current jitter value to points.



### Example 4
> **Summary**: Creates a scatterplot matrix from a data table, utilizing default naming conventions.

<!-- Keywords: #JSLScriptingLanguage, #ScatterPlotMatrix, #DataVisualization, #DefaultNamingConventions, #JMP -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Scatterplot Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
```

**Code Explanation**:

1. Set default name scope.
2. Open data table;
3. Create scatterplot matrix.



### Example 5
> **Summary**: Creates a scatterplot matrix with lower triangular format, using 'height' as the Y variable and 'weight' as the X variable, and configures the row legend for 'age'.

<!-- Keywords: #JSLScripting, #ScatterPlotMatrix, #LowerTriangularFormat, #RowLegendConfiguration, #DispatchReport -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Scatterplot Matrix(
	Y( :height ),
	X( :weight ),
	Matrix Format( "Lower Triangular" ),
	SendToReport(
		Dispatch( {}, "ScatterPlot Matrix Plot", FrameBox,
			{Row Legend(
				age,
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

1. Open data table.
2. Create scatterplot matrix.
3. Set Y variable to height.
4. Set X variable to weight.
5. Format matrix as lower triangular.
6. Send report to dispatch.
7. Configure row legend for age.
8. Set color theme to JMP Default.
9. Disable marker usage.
10. Disable marker theme.



### Example 6
> **Summary**: Creates and customizes a scatterplot matrix, filtering data by age 11 and generating reports from the filtered dataset.

<!-- Keywords: #JSLScripting, #ScatterPlotMatrix, #DataFiltering, #ReportGeneration, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Scatterplot Matrix(
	Y( :age, :sex, :height, :weight ),
	Matrix Format( "Lower Triangular" ),
	Ellipse Color( 3 ),
	Local Data Filter( Add Filter( columns( :age ), Where( :age == 11 ) ), Mode( Select( 0 ), Show( 1 ), Include( 1 ) ) ), 
);
obj << Automatic Recalc( 1 );
dt << Select Where( :idnum >= 600 );
dt << Exclude();
rpt = Report( obj );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Scatterplot Matrix(
	Y( :age, :sex, :height, :weight ),
	Matrix Format( "Lower Triangular" ),
	Ellipse Color( 3 ),
	Local Data Filter( Add Filter( columns( :age ), Where( :age == 11 ) ), Mode( Select( 0 ), Show( 1 ), Include( 1 ) ) ), 
);
obj << Automatic Recalc( 0 );
dt << Select Where( :idnum >= 600 );
dt << Exclude();
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table;
2. Create scatterplot matrix.
3. Set matrix format to lower triangular.
4. Set ellipse color to blue.
5. Add local data filter for age 11.
6. Enable automatic recalculation.
7. Select rows where idnum is 600 or higher.
8. Exclude selected rows.
9. Generate report from scatterplot.
10. Close dataset without saving.
11. Reopen data_table dataset
12. Recreate scatterplot matrix.
13. Disable automatic recalculation.
14. Select rows where idnum is 600 or higher.
15. Exclude selected rows.
16. Generate report from scatterplot.



### Example 7
> **Summary**: Creates and customizes a scatterplot matrix to visualize relationships between age, sex, height, and weight data, with interactive features for density ellipses and shaded regions.

<!-- Keywords: #JMPScriptingLanguage, #ScatterplotMatrix, #DataVisualization, #InteractiveAnalysis, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Scatterplot Matrix(
	Y( :age, :sex, :height, :weight ),
	Matrix Format( "Lower Triangular" ),
	Fit Line( 1 ),
	Density Ellipses( 1 ),
	Shaded Ellipses( 1 ),
	Ellipse Color( 3 ),
	Nonpar Density( 1 ),
	Ellipses Coverage( 0.9 ),
	SendToReport( Dispatch( {}, FrameBox, {Frame Size( 46, 37 )} ) )
);
:Age << Set Property( "Missing Value Codes", 999 );
:Age << Set Values( {999, 999, 999} );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
expr = rpt[FrameBox( 1 )] << Get Journal;
p = "x(.,.,.,";
ans = Pat Match( expr, p );
```

**Code Explanation**:

1. Open data_table data
2. Create scatterplot matrix.
3. Set matrix format to lower triangular.
4. Fit lines to plots.
5. Add density ellipses.
6. Shade ellipses.
7. Set ellipse color to blue.
8. Enable nonparametric density.
9. Set ellipses coverage to 90%.
10. Adjust frame size to 46x37.
11. Set missing value code for Age to 999.
12. Replace Age values with 999.
13. Redo analysis with updated data.
14. Generate report from analysis.
15. Extract journal from first frame.
16. Define pattern to search for.
17. Search journal for pattern.



### Example 8
> **Summary**: Creates a scatterplot matrix to visualize relationships between height and weight, while controlling for age and sex.

<!-- Keywords: #JMPScriptingLanguage, #ScatterPlotMatrix, #DataVisualization, #InteractiveAnalysis, #ByGroup -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Scatterplot Matrix(
	Y( :height, Transform Column( "height*height", Formula( :height * :height ) ) ),
	X( :weight ),
	Density Ellipses( 1 ),
	Group By( :age ),
	By( :sex )
);
```

**Code Explanation**:

1. Open data table;
2. Create scatterplot matrix.
3. Add height variable.
4. Transform height to height squared.
5. Add weight variable.
6. Enable density ellipses.
7. Group by age.
8. Apply by sex.



### Example 9
> **Summary**: Creates a scatterplot matrix to visualize relationships between height, weight, and age, with density ellipses at 1 level, grouped by sex.

<!-- Keywords: #JMPScriptingLanguage, #ScatterplotMatrix, #DensityEllipses, #GroupBy, #By -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt = Open("data_table.jmp");
Scatterplot Matrix(
	Y( :height, Transform Column( "height*height", Formula( :height * :height ) ) ),
	X( :weight ),
	Density Ellipses( 1 ),
	Group By( :age ),
	By( :sex )
);
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Create Scatterplot Matrix.
4. Set Y variables: height, height*height.
5. Transform height to height*height.
6. Set X variable: weight.
7. Add Density Ellipses at 1 level.
8. Group data by age.
9. Use sex for By grouping.
10. Display the graph.



### Example 10
> **Summary**: Creates and customizes scatterplot matrices with density ellipses for exploratory data analysis, generating two report objects with varying ellipse coverage settings.

<!-- Keywords: #JSLScriptingLanguage, #ScatterplotMatrix, #DensityEllipses, #DataVisualization, #ExploratoryDataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Scatterplot Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Group( :Species ) );
obj << Density Ellipses( 1 );
obj << Ellipses Coverage( 0.95 );
robj = obj << report;
obj1 = Scatterplot Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Group( :Species ) );
obj1 << Density Ellipses( 1 );
obj1 << Ellipses Coverage( 0.99 );
robj1 = obj1 << report;
```

**Code Explanation**:

1. Open data table;
2. Create scatterplot matrix.
3. Add density ellipses.
4. Set ellipse coverage to 95%.
5. Generate report object.
6. Create second scatterplot matrix.
7. Add density ellipses.
8. Set ellipse coverage to 99%.
9. Generate second report object.



### Example 11
> **Summary**: Creates a scatterplot matrix with jittered points, generates a report object, and extracts the journal from the first frame box.

<!-- Keywords: #JSLScriptingLanguage, #ScatterplotMatrix, #ReportObject, #JournalExtraction, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Scatterplot Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Points Jittered( 0 );
rep = Report( obj );
jrn = rep[FrameBox( 1 )] << get journal;
```

**Code Explanation**:

1. Open data table;
2. Create scatterplot matrix.
3. Set points jittered off.
4. Generate report object.
5. Extract first frame box.
6. Get journal from frame.



### Example 12
> **Summary**: Creates a scatterplot matrix with multiple variables, formatting the output as a lower triangular matrix and adding fit lines to each plot.

<!-- Keywords: #JMPScriptingLanguage, #ScatterplotMatrix, #MatrixFormat, #FitLine, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Scatterplot Matrix(
	Y( :Age, :Weight, :Cholesterol ),
	X( :Triglycerides, :HDL, :LDL, :Height ),
	Matrix Format( "Lower Triangular" ),
	Fit Line( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Create Scatterplot Matrix.
3. Set Y variables: Age, Weight, Cholesterol.
4. Set X variables: Triglycerides, HDL, LDL, Height.
5. Format matrix as Lower Triangular.
6. Add Fit Line to plots.



### Example 13
> **Summary**: Creates and analyzes a scatterplot matrix to visualize relationships between height and age, with jittering applied for improved visualization.

<!-- Keywords: #JSLScriptingLanguage, #ScatterplotMatrix, #DataAnalysis, #Visualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
spm = Scatterplot Matrix( Y( :height, :age ), Points Jittered( 0 ) );
rpt = Report( spm );
jrn = rpt << get journal;
xexp = dt:height << get values;
yexp = (dt:age << get values) - Min( dt:age << get values );
spm << close window;
spm = Scatterplot Matrix( Y( :height, :age ), Points Jittered( 1 ) );
rpt = Report( spm );
jrn = rpt << get journal;
xexp = dt:height << get values;
yexp = (dt:age << get values) - Min( dt:age << get values );
 
Close( dt, No Save );
data_path = "/tests/s/";
```

**Code Explanation**:

1. Open data table.
2. Create scatterplot matrix.
3. Retrieve report object.
4. Extract journal from report.
5. Get height values.
6. Adjust age values.
7. Close scatterplot window.
8. Recreate scatterplot matrix with jitter.
9. Retrieve updated report object.
10. Extract new journal from report.



### Example 14
> **Summary**: Creates and analyzes a scatterplot matrix to visualize relationships between height and age, utilizing JMP's reporting capabilities.

<!-- Keywords: #JMPScriptingLanguage, #ScatterPlotMatrix, #DataVisualization, #ReportGeneration, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
spm = Scatterplot Matrix( Y( :height, :age ), Points Jittered( 0 ) );
rpt = Report( spm );
jrn = rpt << get journal;
xexp = dt:height << get values;
yexp = (dt:age << get values) - Min( dt:age << get values );
spm << close window;
spm = Scatterplot Matrix( Y( :height, :age ), Points Jittered( 1 ) );
rpt = Report( spm );
jrn = rpt << get journal;
xexp = dt:height << get values;
yexp = (dt:age << get values) - Min( dt:age << get values );
```

**Code Explanation**:

1. Open data table.
2. Create scatterplot matrix.
3. Retrieve report object.
4. Extract journal from report.
5. Get height values.
6. Normalize age values.
7. Close scatterplot matrix.
8. Recreate scatterplot matrix.
9. Retrieve updated report object.
10. Extract updated journal from report.



### Example 15
> **Summary**: Creates a scatterplot matrix with density ellipses and group filtering for 'setosa' species, utilizing JMP's Scatterplot Matrix platform.

<!-- Keywords: #JMPScriptingLanguage, #ScatterplotMatrix, #DataFiltering, #GroupBy, #DensityEllipses -->

**Code**:
```jsl
dt = Open("data_table.jmp");
sm = dt << Scatterplot Matrix(
	Y( :Sepal width ),
	X( :Sepal length ),
	Matrix Format( "Upper Triangular" ),
	Density Ellipses( 1 ),
	Ellipse Color( 3 ),
	Fit Line( 0 ),
	Group By( :Species ),
	Lock Scales( 1 )
);
rp = Report( sm );
ymin = rp[AxisBox( 1 )] << get min;
ymax = rp[AxisBox( 1 )] << get max;
xmin = rp[AxisBox( 2 )] << get min;
xmax = rp[AxisBox( 2 )] << get max;
df = dt << Data Filter( Add Filter( columns( :Species ), Where( :Species == "setosa" ) ), Mode( Select( 0 ), Show( 1 ), Include( 1 ) ) );
rp = Report( sm );
df << Close;
dt << Clear Row States;
sm = dt << Scatterplot Matrix(
	Y( :Sepal width ),
	X( :Sepal length ),
	Matrix Format( "Upper Triangular" ),
	Density Ellipses( 1 ),
	Ellipse Color( 3 ),
	Fit Line( 0 ),
	Group By( :Species ),
	Lock Scales( 1 )
);
rp = Report( sm );
ymin = rp[AxisBox( 1 )] << get min;
ymax = rp[AxisBox( 1 )] << get max;
xmin = rp[AxisBox( 2 )] << get min;
xmax = rp[AxisBox( 2 )] << get max;
sm << Local Data Filter( Add Filter( columns( :Species ), Where( :Species == "setosa" ) ), Mode( Select( 0 ), Show( 1 ), Include( 1 ) ) );
rp = Report( sm );
```

**Code Explanation**:

1. Open data table;
2. Create scatterplot matrix.
3. Set Y variable.
4. Set X variable.
5. Configure matrix format.
6. Add density ellipses.
7. Set ellipse color.
8. Disable fit lines.
9. Group by species.
10. Lock scales.



### Example 16
> **Summary**: Creates a scatterplot matrix for Sepal width and length, filtering data by species, and visualizing axis ranges.

<!-- Keywords: #JSLScripting, #ScatterplotMatrix, #DataFiltering, #AxisRangeVisualization, #InteractiveDataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
sm = Scatterplot Matrix( Y( 2 :: 7 ), Lock Scales( 1 ) );
rp = Report( sm );
min = rp[AxisBox( 2 )] << get min;
max = rp[AxisBox( 2 )] << get max;
dt << Select Where( :Ether > 0 );
dt << Exclude;
rp = Report( sm );
Close( dt, No Save );
dt = Open("data_table.jmp");
sm = dt << Scatterplot Matrix(
	Y( :Sepal width ),
	X( :Sepal length ),
	Matrix Format( "Upper Triangular" ),
	Density Ellipses( 1 ),
	Ellipse Color( 3 ),
	Fit Line( 0 ),
	Group By( :Species ),
	Lock Scales( 1 )
);
rp = Report( sm );
ymin = rp[AxisBox( 1 )] << get min;
ymax = rp[AxisBox( 1 )] << get max;
xmin = rp[AxisBox( 2 )] << get min;
xmax = rp[AxisBox( 2 )] << get max;
df = dt << Data Filter( Add Filter( columns( :Species ), Where( :Species == "setosa" ) ), Mode( Select( 0 ), Show( 1 ), Include( 1 ) ) );
rp = Report( sm );
df << Close;
dt << Clear Row States;
sm = dt << Scatterplot Matrix(
	Y( :Sepal width ),
	X( :Sepal length ),
	Matrix Format( "Upper Triangular" ),
	Density Ellipses( 1 ),
	Ellipse Color( 3 ),
	Fit Line( 0 ),
	Group By( :Species ),
	Lock Scales( 1 )
);
rp = Report( sm );
ymin = rp[AxisBox( 1 )] << get min;
ymax = rp[AxisBox( 1 )] << get max;
xmin = rp[AxisBox( 2 )] << get min;
xmax = rp[AxisBox( 2 )] << get max;
sm << Local Data Filter( Add Filter( columns( :Species ), Where( :Species == "setosa" ) ), Mode( Select( 0 ), Show( 1 ), Include( 1 ) ) );
rp = Report( sm );
```

**Code Explanation**:

1. Open data table.
2. Create scatterplot matrix.
3. Get axis min and max.
4. Select rows where Ether > 0.
5. Exclude selected rows.
6. Close data table without saving.
7. Open data table.
8. Create scatterplot matrix for Sepal width and length.
9. Get axis min and max.
10. Apply data filter for setosa species.



### Example 17
> **Summary**: Creates a scatterplot matrix with fit lines, selecting all rows and deleting them from the data table.

<!-- Keywords: #JSLScriptingLanguage, #ScatterplotMatrix, #FitLines, #DataTableOperations, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Scatterplot Matrix( Y( :age, :height, :weight ), X( :sex ), Fit Line( 0 ), Automatic Recalc( 0 ) );
dt << Select Rows( 1 :: N Row( dt ) );
dt << Delete Rows;
```

**Code Explanation**:

1. Open data table.
2. Create scatterplot matrix.
3. Set Y variables.
4. Set X variable.
5. Add fit line option.
6. Disable automatic recalculation.
7. Select all rows.
8. Delete selected rows.



### Example 18
> **Summary**: Creates a scatterplot matrix to visualize relationships between height and weight, with a lower triangular matrix format and customized row legend for age.

<!-- Keywords: #JMPScriptingLanguage, #ScatterplotMatrix, #DataVisualization, #MatrixFormat, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Scatterplot Matrix(
	Y( :height ),
	X( :weight ),
	Matrix Format( "Lower Triangular" ),
	SendToReport(
		Dispatch( {}, "ScatterPlot Matrix Plot", FrameBox,
			{Row Legend(
				age,
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
rpt = obj << report;
Close( dt, NoSave );
cert levels = {levels( "Violent Rate" ), levels( "Violent Rate" )};
```

**Code Explanation**:

1. Open data table;
2. Create scatterplot matrix.
3. Set Y variable to height.
4. Set X variable to weight.
5. Format matrix as lower triangular.
6. Send report to object.
7. Dispatch to frame box.
8. Configure row legend for age.
9. Set color theme to JMP Default.
10. Close dataset without saving.



### Example 19
> **Summary**: Creates a scatterplot matrix from a data table, with the Y variable set to height and X variable set to weight, formatted as a lower triangular matrix, and configured with a row legend for age.

<!-- Keywords: #JSL, #ScatterPlotMatrix, #DataVisualization, #JMPScriptingLanguage, #ReportObject -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Scatterplot Matrix(
	Y( :height ),
	X( :weight ),
	Matrix Format( "Lower Triangular" ),
	SendToReport(
		Dispatch( {}, "ScatterPlot Matrix Plot", FrameBox,
			{Row Legend(
				age,
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
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create scatterplot matrix.
3. Set Y variable to height.
4. Set X variable to weight.
5. Format matrix as lower triangular.
6. Send report to script.
7. Dispatch to scatterplot matrix plot.
8. Configure row legend for age.
9. Set color theme to default.
10. Retrieve report object.



