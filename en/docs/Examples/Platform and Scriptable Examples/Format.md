# Format

## Format using Pref
> **Summary**: Sets summary graph preferences, defines default name scope, creates a new project, and runs a script within the project to open a data table, set missing value codes for 'Item Number', and format the 'order date' column.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnProperties, #DateFormat, #Scripting -->

**Code**:
```jsl
Pref( Show summary graphs below column names( 1 ) );
Names Default To Here( 1 );
project = New Project();
project << Run Script(
	dt1 = Open("data_table.jmp");
	dt1:Name( "Item Number" ) << {Set Property( "Missing Value Codes", {1001, 1002, 1003, 1105, 1106} )};
	dt1:order date << Data Type( "Numeric", Format( ":day:hr:m:s", 17, 0 ), Input Format( "m/d/y" ) );
	dt1:order date << Data Type( "Numeric", Format( "ddMonyyyy", 22 ), Input Format( "m/d/y" ) );
);
```

**Code Explanation**:

1. Set summary graphs preference.
2. Set default name scope.
3. Create new project.
4. Run script within project.
5. Open data table;
6. Define missing value codes for "Item Number".
7. Set "order date" data type to numeric.
8. Format "order date" as day, hour, minute, second.
9. Set "order date" input format as month/day/year.
10. Format "order date" as dayMonthYear.



## Format using Chart
### Example 1
> **Summary**: Creates a line chart to visualize mean height and weight by age and sex, with formatted Y-axis labels.

<!-- Keywords: #JMPScriptingLanguage, #LineChart, #DataVisualization, #Charting, #Statistics -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Chart( X( :Age, :sex ), Y( Mean( :Height ), Mean( :Weight ) ), Overlay( 1 ) );
obj << Line Chart( 1 );
obj << Label by Value;
obj << Show Labels;
obj << (Y[1] << Label Format( 9, 2 ));
```

**Code Explanation**:

1. Set default names.
2. Open data_table data
3. Create chart object.
4. Add line chart.
5. Label by value.
6. Show labels.
7. Format Y-axis label.



### Example 2
> **Summary**: Creates and analyzes a bar chart to summarize age distribution by sex, utilizing overlay axes for detailed visualization.

<!-- Keywords: #JMPScriptingLanguage, #BarChart, #OverlayAxis, #DataAnalysis, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart(
	X( :sex ),
	Y( Sum( :age ) ),
	Overlay Axis << {{Format( "Fixed Dec", 12, 0 ), Min( 0 ), Max( 6000 ), Inc( 1000 ), Minor Ticks( 1 )}},
	Overlay Stack Axis << {{Format( "Fixed Dec", 12, 0 ), Min( 0 ), Max( 12000 ), Inc( 2000 ), Minor Ticks( 1 )}},
	Bar Chart( 1 )
);
:age << Set Property( "Missing Value Codes", 26 );
obj2 = obj << Redo Analysis;
rpt2 = obj2 << Report;
expr2 = rpt2 << Get Journal;
p = "3959";
ans = Pat Match( expr2, p );
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X axis to sex.
4. Set Y axis to sum of age.
5. Format overlay axis.
6. Format overlay stack axis.
7. Add bar chart.
8. Set missing value code for age.
9. Redo analysis on chart.
10. Retrieve report from redo analysis.



### Example 3
> **Summary**: Creates a pie chart with customized overlay axes and level colors from a data table, utilizing JMP's Chart platform.

<!-- Keywords: #JMPChart, #PieChart, #OverlayAxes, #LevelColors, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Chart(
	X( :Size Co ),
	Y( N( N ) ),
	Pie( 1 ),
	Category Axis << {Label( None )},
	Overlay Axis << {{Format( "Fixed Dec", 12, 1 ), Min( 5 ), Max( 20 ), Inc( 2.5 ), Minor Ticks( 0 ), Rotated Labels( "Horizontal" )}},
	Overlay Stack Axis << {{Min( -10 ), Max( 40 ), Inc( 10 ), Minor Ticks( 1 ), Rotated Labels( "Horizontal" )}},
	Level[1] << Colors( 73 )
);
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Add pie chart type.
6. Hide category axis labels.
7. Format overlay axis.
8. Format overlay stack axis.
9. Set level colors.



### Example 4
> **Summary**: Creates a pie chart with customized overlay axes, utilizing the Chart() function in JMP.

<!-- Keywords: #JMPCharting, #OverlayAxes, #PieChart, #Customization, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart(
	X( :Size Co ),
	Y( N( N ) ),
	Pie( 1 ),
	Category Axis << {Label( None )},
	Overlay Axis << {{Format( "Fixed Dec", 12, 1 ), Min( 5 ), Max( 20 ), Inc( 2.5 ), Minor Ticks( 0 ), Rotated Labels( "Horizontal" )}},
	Overlay Stack Axis << {{Min( -10 ), Max( 40 ), Inc( 10 ), Minor Ticks( 1 ), Rotated Labels( "Horizontal" )}},
	Level[1] << Colors( 73 )
);
```

**Code Explanation**:

1. Open data table;
2. Create a chart object.
3. Set X-axis to Size Co.
4. Set Y-axis to N(N).
5. Add pie chart element.
6. Hide category axis labels.
7. Format overlay axis.
8. Format overlay stack axis.
9. Set level 1 colors to 73.



> **Summary**: Opens a data table and configures the Pred Formula HARDNESS with scientific notation, adjusting decimal places to 6 and then 5.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #PredFormula, #ScientificNotation, #FormatAdjustment -->

**Code**:
```jsl
Open("data_table.jmp");
:Pred Formula HARDNESS << Format( "Scientific", 6 );
:Pred Formula HARDNESS << Format( "Scientific", 5 );
```

**Code Explanation**:

1. Open data table;
2. Set format for Pred Formula HARDNESS.
3. Change format to Scientific.
4. Set decimal places to 6.
5. Change format to Scientific.
6. Set decimal places to 5.



