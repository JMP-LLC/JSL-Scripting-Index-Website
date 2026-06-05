# Parallel Plot

### Example 1
> **Summary**: Visualizes a parallel plot of fatty acid composition in a specific region, utilizing local data filtering to focus on the 'South' region.

<!-- Keywords: #JMPScriptingLanguage, #ParallelPlot, #LocalDataFilter, #DataVisualization, #FattyAcidComposition -->

**Code**:
```jsl
// Parallel Plot
// Open data table
dt = Open("data_table.jmp");
// Parallel Plot
Parallel Plot(
	Scale Uniformly( 0 ),
	Center at zero( 0 ),
	Y(
		:palmitic, :palmitoleic, :stearic,
		:oleic, :linoleic, :linolenic,
		:arachidic, :eicosenoic
	),
	Local Data Filter(
		Location( {126, 115} ),
		Add Filter(
			columns(
				:Subregion, :Region
			),
			Where( :Region == "South" ),
			Display(
				:Subregion,
				Size( 210, 172 ),
				List Display
			)
		),
		Mode(
			Select( 0 ),
			Show( 1 ),
			Include( 1 )
		)
	),
	SendToReport(
		Dispatch( {}, "Parallel Coord",
			FrameBox,
			{Frame Size( 719, 250 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create parallel plot.
3. Set uniform scaling.
4. Disable center at zero.
5. Define Y variables.
6. Add local data filter.
7. Set filter location.
8. Add filter for Subregion and Region.
9. Filter where Region is South.
10. Display Subregion in list format.



### Example 2
> **Summary**: Visualizes a parallel plot to compare math and verbal scores across multiple years, using the Open data table function and the Parallel Plot platform.

<!-- Keywords: #JMPScriptingLanguage, #ParallelPlot, #DataVisualization, #TableOperations, #JMP -->

**Code**:
```jsl
// Parallel Plot
// Open data table
dt = Open("data_table.jmp");
// Parallel Plot
Parallel Plot(
	Y(
		:"2004 Verbal"n, :"2004 Math"n,
		:"2003 Verbal"n, :"2003 Math"n,
		:"2002 Verbal"n, :"2002 Math"n,
		:"2001 Verbal"n, :"2001 Math"n,
		:"1999 Verbal"n, :"1999 Math"n,
		:"1994 Verbal"n, :"1994 Math"n,
		:"1997 Verbal"n, :"1997 Math"n,
		:"1992 Verbal"n, :"1992 Math"n
	)
);
```

**Code Explanation**:

1. Open table.
2. Create parallel plot.
3. Set Y variables.



### Example 3
> **Summary**: Opens a data table and generates a parallel plot with multiple Y variables, adjusting report settings and frame size, while rotating tick labels.

<!-- Keywords: #JMPScriptingLanguage, #ParallelPlot, #DataVisualization, #ReportSettings, #TickLabels -->

**Code**:
```jsl
// Parallel Plot
// Open data table
dt = Open("data_table.jmp");
// Parallel Plot
Parallel Plot(
	Y(
		:Lot Acceptance, :Disso,
		:API Particle Size, :Mill Time,
		:Screen Size,
		:Mag. Stearate Supplier,
		:Lactose Supplier,
		:Sugar Supplier, :Talc Supplier,
		:Blend Time, :Blend Speed,
		:Compressor, :Force,
		:Coating Supplier,
		:Coating Viscosity, :Inlet Temp,
		:Exhaust Temp, :Spray Rate,
		:Atomizer Pressure
	),
	SendToReport(
		Dispatch( {}, "Parallel Coord",
			FrameBox,
			Frame Size( 1082, 462 )
		),
		Dispatch( {}, "", NomAxisBox,
			Rotated Tick Labels( 1 )
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create parallel plot.
3. Set Y variables.
4. Adjust report settings.
5. Set frame size.
6. Rotate tick labels.



### Example 4
> **Summary**: Creates a parallel plot with customized report settings, utilizing uniform scaling and binomial probability calculations.

<!-- Keywords: #JSLScriptingLanguage, #ParallelPlot, #CustomReportSettings, #BinomialProbability, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Parallel Plot(
	Scale Uniformly( 1 ),
	Center at zero( 0 ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	SendToReport( Dispatch( {}, "2", ScaleBox, {Format( "Custom", Formula( Round( Binomial Probability( 0.5, 10, value ), 2 ) ), 12 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create Parallel Plot.
3. Set uniform scaling.
4. Disable center at zero.
5. Define Y variables.
6. Customize report settings.
7. Format scale box.
8. Apply custom formula.
9. Use binomial probability.
10. Round values to 2 decimal places.



### Example 5
> **Summary**: Creates a parallel plot with uniform scaling and centering at zero, featuring four variables: hist0, hist1, hist3, and hist5.

<!-- Keywords: #JSLScriptingLanguage, #ParallelPlot, #UniformScaling, #CenterAtZero, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Parallel Plot( Scale Uniformly( 0 ), Center at zero( 0 ), Y( :hist0, :hist1, :hist3, :hist5 ) );
```

**Code Explanation**:

1. Open data table;
2. Create parallel plot.
3. Scale uniformly set to 0.
4. Center at zero set to 0.
5. Include hist0 variable.
6. Include hist1 variable.
7. Include hist3 variable.
8. Include hist5 variable.



### Example 6
> **Summary**: Creates a parallel plot with uniform scale, selecting Y variables and enabling reversing checkboxes.

<!-- Keywords: #JSLScriptingLanguage, #ParallelPlot, #UniformScale, #ReversingCheckboxes, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Parallel Plot(
	Scale Uniformly( 0 ),
	Center at zero( 0 ),
	Y( :hist0, :hist1, :hist3, :hist5 ),
	Show Reversing Checkboxes( 1 ),
	Reversed( hist0, hist1, hist3, hist5 )
);
```

**Code Explanation**:

1. Open data table;
2. Create parallel plot.
3. Set scale uniformly.
4. Do not center at zero.
5. Select Y variables.
6. Enable reversing checkboxes.
7. Reverse selected variables.



### Example 7
> **Summary**: Creates a parallel plot object with uniform scaling and centering at zero, featuring Sepal length, Sepal width, Petal length, and Petal width variables.

<!-- Keywords: #JSLScriptingLanguage, #ParallelPlot, #DataVisualization, #UniformScaling, #CenterAtZero -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Parallel Plot( Scale Uniformly( 0 ), Center at zero( 0 ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
```

**Code Explanation**:

1. Open data table;
2. Create parallel plot object.
3. Set scale uniformly to 0.
4. Set center at zero to 0.
5. Define Y variables: Sepal length, Sepal width, Petal length, Petal width.



### Example 8
> **Summary**: Creates a parallel plot object with uniform scaling, centered at zero, and customized Y variables, while sending report settings and adjusting frame size.

<!-- Keywords: #JSLScriptingLanguage, #ParallelPlot, #ReportSettings, #FrameSizeAdjustment, #CustomizedYVariables -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Parallel Plot(
	Scale Uniformly( 0 ),
	Center at zero( 0 ),
	Y( :palmitic, :palmitoleic, :stearic, :oleic, :linoleic, :linolenic, :arachidic, :eicosenoic ),
	SendToReport( Dispatch( {}, "Parallel Coord", FrameBox, {Frame Size( 719, 250 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create parallel plot object.
3. Scale axes uniformly.
4. Center axes at zero.
5. Set Y variables.
6. Send report settings.
7. Adjust frame size.



### Example 9
> **Summary**: Creates a parallel plot with uniform scaling and centering at zero, including hist0, hist1, hist3, and hist5 on the Y-axis.

<!-- Keywords: #ParallelPlot, #UniformScaling, #CenterAtZero, #YAxisCustomization, #JSLScript -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Parallel Plot( Scale Uniformly( 0 ), Center at zero( 0 ), Y( :hist0, :hist1, :hist3, :hist5 ) );
```

**Code Explanation**:

1. Open data table.
2. Create Parallel Plot object.
3. Set uniform scaling off.
4. Set centering at zero off.
5. Include hist0 in Y-axis.
6. Include hist1 in Y-axis.
7. Include hist3 in Y-axis.
8. Include hist5 in Y-axis.



### Example 10
> **Summary**: Creates a parallel plot with filtered data, selecting rows where Species is 'setosa' and excluding them from analysis.

<!-- Keywords: #JMPScriptingLanguage, #ParallelPlot, #DataFiltering, #LocalDataFilters, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Parallel Plot(
	Scale Uniformly( 0 ),
	Center at zero( 0 ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Local Data Filter(
		Add Filter( columns( :Sepal length ), Where( :Sepal length >= 5.0 & :Sepal length <= 6.5 ) ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
	), 
);
dt << Select Where( :Species == "setosa" );
dt << Exclude();
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table;
2. Create Parallel Plot object.
3. Set uniform scaling.
4. Set center at zero.
5. Define Y variables.
6. Add local data filter.
7. Set filter conditions.
8. Configure filter mode.
9. Select rows where Species is setosa.
10. Exclude selected rows from analysis.



### Example 11
> **Summary**: Creates a parallel plot with uniformly scaled and centered data, using transformed columns and grouping by concatenated values.

<!-- Keywords: #JSLScripting, #ParallelPlot, #DataTransformation, #ColumnOperations, #ByGrouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Parallel Plot(
	Scale Uniformly( 0 ),
	Center at zero( 0 ),
	Y(
		Transform Column( "-hist0", Formula( -:hist0 ) ),
		Transform Column( "-hist1", Formula( -:hist1 ) ),
		Transform Column( "-hist3", Formula( -:hist3 ) ),
		Transform Column( "-hist5", Formula( -:hist5 ) )
	),
	X( Transform Column( "Last[drug]", Character, Formula( Word( -1, :drug ) ) ) ),
	By( Transform Column( "Concatenate[dep1]", Character, Formula( Concat( :dep1 ) ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create Parallel Plot.
3. Scale uniformly set to 0.
4. Center at zero set to 0.
5. Add transformed column "-hist0".
6. Add transformed column "-hist1".
7. Add transformed column "-hist3".
8. Add transformed column "-hist5".
9. Set X-axis to last word of "drug".
10. Group by concatenated "dep1".



### Example 12
> **Summary**: Creates a parallel plot report, grouping data by 'dep1' and scaling uniformly.

<!-- Keywords: #JSLScriptingLanguage, #ParallelPlot, #DataVisualization, #ReportGeneration, #ByGrouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Parallel Plot( Y( :hist0, :hist1, :hist3, :hist5 ), X( :drug ), Scale Uniformly, Center at zero, By( :dep1 ) );
rpt = obj << report;
rpt = rpt << parent;
```

**Code Explanation**:

1. Open data table.
2. Create parallel plot object.
3. Set Y variables.
4. Set X variable.
5. Scale uniformly.
6. Center at zero.
7. Group by variable.
8. Generate report.
9. Get parent frame.
10. Store report reference.



### Example 13
> **Summary**: Creates a parallel plot object with Sepal length, width, Petal length, and width variables.

<!-- Keywords: #JMPScriptingLanguage, #ParallelPlot, #DataTable, #VariableSelection, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Parallel Plot( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
```

**Code Explanation**:

1. Open data table;
2. Create Parallel Plot object.
3. Set Y variables: Sepal length, width.
4. Add Petal length, width to Y.



### Example 14
> **Summary**: Creates a parallel plot object with uniform scaling, featuring Sepal length, Sepal width, Petal length, and Petal width from a data table.

<!-- Keywords: #JSLScriptingLanguage, #ParallelPlot, #DataVisualization, #UniformScaling, #CustomYAxis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Parallel Plot( Scale Uniformly( 1 ), Center at zero( 0 ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
```

**Code Explanation**:

1. Open data table;
2. Create parallel plot object.
3. Set scale uniformly.
4. Do not center at zero.
5. Add Sepal length to Y.
6. Add Sepal width to Y.
7. Add Petal length to Y.
8. Add Petal width to Y.



### Example 15
> **Summary**: Creates a parallel plot object in JMP, setting Y variables for Sepal length, width, Petal length, and width, and X variable for Species.

<!-- Keywords: #JMPScriptingLanguage, #ParallelPlot, #DataVisualization, #SpeciesClassification, #MultivariateAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Parallel Plot( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), X( :Species ) );
```

**Code Explanation**:

1. Open data table;
2. Create parallel plot object.
3. Set Y variables: Sepal length, width, Petal length, width.
4. Set X variable: Species.



### Example 16
> **Summary**: Creates a parallel plot to visualize height and weight by age, grouped by sex, from a data table.

<!-- Keywords: #JMPScriptingLanguage, #ParallelPlot, #DataVisualization, #ByGrouping, #InteractiveGraphics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Parallel Plot( Scale Uniformly( 1 ), Y( :height, :weight ), X( :age ), By( :sex ) );
```

**Code Explanation**:

1. Open data table.
2. Create parallel plot object.
3. Set scale uniformly.
4. Add height and weight to Y axis.
5. Add age to X axis.
6. Group by sex.



## Parallel Plot using Select Rows
> **Summary**: Creates a parallel plot from a specific subset of rows in a data table, with uniform scaling and customized frame size.

<!-- Keywords: #JSLScripting, #ParallelPlot, #DataVisualization, #Customization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( {30, 62, 140} );
Parallel Plot(
	Scale Uniformly( 0 ),
	Center at zero( 0 ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	SendToReport( Dispatch( {}, "Parallel Coord", FrameBox, {Frame Size( 463, 249 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Select specific rows.
3. Create parallel plot.
4. Set uniform scaling.
5. Disable center at zero.
6. Define Y variables.
7. Adjust frame size.



## Parallel Plot using New Window
### Example 1
> **Summary**: Creates a parallel plot with uniform scaling for three variables: Weight, Thickness, and Purity.

<!-- Keywords: #JMPScriptingLanguage, #ParallelPlot, #UniformScaling, #DataVisualization, #MultivariateAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
New Window( "Parallel Plot",
	Parallel Plot( Scale Uniformly( 1 ), Y( :Weight, :Thickness, :Purity ) ),
	Parallel Plot( Scale Uniformly( 0 ), Y( :Weight, :Thickness, :Purity ) ), 
);
```

**Code Explanation**:

1. Open data table;
2. Create new window.
3. Add first parallel plot.
4. Set uniform scaling.
5. Select variables for plot.
6. Add second parallel plot.
7. Disable uniform scaling.
8. Select same variables for plot.



### Example 2
> **Summary**: Creates multiple parallel plots in JMP, showcasing relationships between age, height, sex, and weight variables.

<!-- Keywords: #JMPScriptingLanguage, #ParallelPlotting, #DataVisualization, #MultivariateAnalysis, #DimensionalityReduction -->

**Code**:
```jsl
Open("data_table.jmp");
New Window( "Parallel Plot",
	Parallel Plot( Scale Uniformly( 0 ), Center at zero( 0 ), Y( :age, :height, :sex, :weight ) ),
	Parallel Plot( Scale Uniformly( 0 ), Center at zero( 0 ), Y( :age, :sex, :height, :weight ) ),
	Parallel Plot( Scale Uniformly( 0 ), Center at zero( 0 ), Y( :height, :weight, :age, :sex ) ),
	Parallel Plot( Scale Uniformly( 0 ), Center at zero( 0 ), Y( :age, :sex, :height, :weight, :age, :sex, :height, :weight ) ),
	Parallel Plot( Scale Uniformly( 1 ), Center at zero( 0 ), Y( :age, :height, :sex, :weight ) ),
	Parallel Plot( Scale Uniformly( 1 ), Center at zero( 0 ), Y( :age, :sex, :height, :weight ) ),
	Parallel Plot( Scale Uniformly( 1 ), Center at zero( 0 ), Y( :height, :weight, :age, :sex ) ),
	Parallel Plot( Scale Uniformly( 1 ), Center at zero( 0 ), Y( :age, :sex, :height, :weight, :age, :sex, :height, :weight ) ), 
);
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Add first parallel plot.
4. Add second parallel plot.
5. Add third parallel plot.
6. Add fourth parallel plot.
7. Add fifth parallel plot.
8. Add sixth parallel plot.
9. Add seventh parallel plot.
10. Add eighth parallel plot.



## Parallel Plot using Close data grid
> **Summary**: Runs data visualization by creating a parallel plot with uniform scaling and centering, highlighting columns tagged as 'attributes'.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #ParallelPlot, #UniformScaling, #ColumnTagging -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Close data grid( 1 );
dt:Coating Supplier << Set Property( "Tags", {"attributes"} );
dt:Lot Acceptance << Set Property( "Tags", {"attributes"} );
Parallel Plot( Scale Uniformly( 0 ), Center at zero( 0 ), Y( Column Tag( "attributes" ) ) );
```

**Code Explanation**:

1. Open data table.
2. Close data grid.
3. Set tags for Coating Supplier.
4. Set tags for Lot Acceptance.
5. Create parallel plot.
6. Uniform scale on axes.
7. Center plot at zero.
8. Display columns with "attributes" tag.



## Parallel Plot using Color or Mark by Column
> **Summary**: Creates a parallel plot report by coloring rows based on the 'drug' column, and combining it with the data table in a JMP application.

<!-- Keywords: #JSLScriptingLanguage, #ParallelPlot, #DataVisualization, #JMPApplication, #Windows -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Color or Mark by Column( :drug );
pp = dt << Parallel Plot( Scale Uniformly( 0 ), Center at zero( 0 ), Y( :hist0, :hist1, :hist3, :hist5 ), X( :dep1 ) );
If( Host is( "Windows" ),
	Main Menu( "File:New:Application" );
	windows = Get Window List();
	closeMe = windows[N Items( windows )];
	closeMe << Close Window;
);
app = JMP App();
app << Set Name( "Parallel Plot App" );
app << Combine Windows( {pp << Report, dt} );
(app << Get Modules)[1] << Set Window Title( "My Parallel Plot Report" );
app << Run;
```

**Code Explanation**:

1. Open data table;
2. Color rows by "drug" column.
3. Create parallel plot.
4. Check if host is Windows.
5. Open new application.
6. Get window list.
7. Close last opened window.
8. Create new JMP app.
9. Set app name to "Parallel Plot App".
10. Combine plot and data table in app.



## Parallel Plot using Set Values
> **Summary**: Creates and analyzes a parallel plot from a data table, setting missing value codes and redoing the analysis.

<!-- Keywords: #JMPScriptingLanguage, #ParallelPlot, #DataAnalysis, #MissingValueHandling, #RedoAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Sepal length << Set Values( {1, 1, 1, 1, 1} );
obj = Parallel Plot( Scale Uniformly( 1 ), Center at zero( 0 ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
rpt1 = obj << Report;
expr1 = rpt1 << Get Journal;
p = "values(1,3.5,1.4,0.2,1,";
ans1 = Pat Match( expr1, p );
:Sepal length << Set Property( "Missing Value Codes", 1 );
obj2 = obj << Redo Analysis;
rpt2 = obj2 << Report;
expr2 = rpt2 << Get Journal;
p = "values(.,3.5,1.4,0.2,.,";
ans2 = Pat Match( expr2, p );
```

**Code Explanation**:

1. Open data table;
2. Set Sepal length values.
3. Create Parallel Plot.
4. Generate first report.
5. Extract first journal.
6. Define pattern for match.
7. Match pattern in first journal.
8. Set missing value code for Sepal length.
9. Redo analysis with missing values.
10. Generate second report.



## Parallel Plot using Set Property
> **Summary**: Creates a parallel plot object with uniform scaling and centering at zero, using Y variables Sepal length, Sepal width, Petal length, and Petal width, from the data table.

<!-- Keywords: #JSL, #ParallelPlot, #DataVisualization, #UniformScaling, #CenterAtZero -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Species << Set Property( "Missing Value Codes", "setosa" );
obj = Parallel Plot( Scale Uniformly( 1 ), Center at zero( 0 ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Set missing value code for Species.
3. Create parallel plot object.
4. Scale plot uniformly.
5. Center plot at zero.
6. Specify Y variables.
7. Generate report object.



