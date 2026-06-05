# Is Name

## Is Name using Chart
### Example 1
> **Summary**: Creates a range chart with level legend and label by row, using data from an open table in JMP.

<!-- Keywords: #JMPScriptingLanguage, #RangeChart, #LevelLegend, #LabelbyRow, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Chart(
	Y( :Name( "Humid1:PM" ), :Name( "Humid4:PM" ) ),
	Show Separate Axes( 0 ),
	Category Axis << {Axis Name( "Rows" )},
	Show Y Legend( 0 ),
	Show Level Legend( 1 ),
	Range Chart( 1 ),
	Label by Row,
	Show Labels,
	SendToReport( Dispatch( {}, "Chart", OutlineBox, {Set Title( "Range Chart, Show Level Legend, Label by Row" )} ) )
);
```

**Code Explanation**:

1. Open table.
2. Create chart object.
3. Set Y variables.
4. Disable separate axes.
5. Configure category axis.
6. Hide Y legend.
7. Show level legend.
8. Enable range chart.
9. Label by row.
10. Show labels.
11. Set chart title.



### Example 2
> **Summary**: Creates a pie chart with two Y variables, Humid1:PM and Humid4:PM, from a data table, while configuring axis settings and sending report settings.

<!-- Keywords: #JMPScriptingLanguage, #PieChart, #DataTable, #ChartConfiguration, #ReportSettings -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Chart(
	Y( :Name( "Humid1:PM" ), :Name( "Humid4:PM" ) ),
	Overlay( 0 ),
	Pie( 1 ),
	Category Axis << {Axis Name( "Rows" ), Label( None )},
	Overlay Stack Axis << {{Min( -500 )}},
	Stack Axis << {{Min( -250 )}},
	SendToReport( Dispatch( {}, "Chart", OutlineBox, {Set Title( "Pie Chart, Show Level Legend" )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set Y variables.
4. Disable overlay.
5. Enable pie chart.
6. Configure category axis.
7. Set overlay stack axis minimum.
8. Set stack axis minimum.
9. Send report settings.
10. Set chart title.



### Example 3
> **Summary**: Creates a range chart with level legend and label by row, utilizing JMP's Chart function to visualize data from an open data table.

<!-- Keywords: #JMPChart, #RangeChart, #LevelLegend, #LabelByRow, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Chart(
	Y( :Name( "Humid1:PM" ), :Name( "Humid4:PM" ) ),
	Show Separate Axes( 0 ),
	Category Axis << {Axis Name( "Rows" )},
	Show Y Legend( 0 ),
	Show Level Legend( 1 ),
	Range Chart( 1 ),
	Label by Row,
	Show Labels,
	SendToReport(
		Dispatch( {}, "Chart", OutlineBox, {Set Title( "Range Chart, Show Level Legend, Label by Row" )} ),
		Dispatch( {}, FrameBox, {Frame Size( 420, 277 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set Y variables.
4. Hide separate axes.
5. Configure category axis.
6. Hide Y legend.
7. Show level legend.
8. Enable range chart.
9. Label by row.
10. Show labels.



### Example 4
> **Summary**: Creates a bar chart to visualize mean height data, with category axis configured for rows.

<!-- Keywords: #JSLScriptingLanguage, #BarChart, #CategoryAxis, #DataVisualization, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( Y( Mean( :height ) ), Category Axis << {Axis Name( Rows )}, Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set Y axis to mean height.
4. Configure category axis for rows.
5. Generate bar chart.



