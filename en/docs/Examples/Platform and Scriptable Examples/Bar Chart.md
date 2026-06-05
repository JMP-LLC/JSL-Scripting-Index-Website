# Bar Chart

## Chart 
### Example 1
> **Summary**: Creates and customizes a bar chart from data_table.jmp, specifying colors for each level and generating a report.

<!-- Keywords: #JMPScriptingLanguage, #BarChart, #DataVisualization, #Customization, #Reporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Chart(
	X( :Type ),
	Y( N ),
	Level[1] << Colors( 72 ),
	Level[2] << Colors( 72 ),
	Level[3] << Colors( 72 ),
	Level[4] << Colors( 72 ),
	Level[5] << Colors( 72 ),
	Level[6] << Colors( 72 ),
	Bar Chart( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data_table data
2. Create chart object.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Customize Level 1 color.
6. Customize Level 2 color.
7. Customize Level 3 color.
8. Customize Level 4 color.
9. Customize Level 5 color.
10. Customize Level 6 color.
11. Generate bar chart.
12. Retrieve chart report.



### Example 2
> **Summary**: Creates and creates a report for a bar chart from a data table, with customizable colors for each level.

<!-- Keywords: #JSLScriptingLanguage, #BarChart, #DataTable, #Customization, #Reporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Chart(
	X( :age ),
	Y( N ),
	Level[1] << Colors( 72 ),
	Level[2] << Colors( 72 ),
	Level[3] << Colors( 72 ),
	Level[4] << Colors( 72 ),
	Level[5] << Colors( 72 ),
	Level[6] << Colors( 72 ),
	Bar Chart( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X-axis to "age".
4. Set Y-axis to count.
5. Set color for level 1.
6. Set color for level 2.
7. Set color for level 3.
8. Set color for level 4.
9. Set color for level 5.
10. Set color for level 6.
11. Generate bar chart.
12. Retrieve chart report.



### Example 3
> **Summary**: Creates a bar chart to visualize data by sex, with customized colors for female and male groups.

<!-- Keywords: #JSLScriptingLanguage, #BarChart, #ByGroup, #CustomColors, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart(
	X( :age ),
	Y( N ),
	Show Level Legend( 1 ),
	Bar Chart( 1 ),
	By( :sex ),
	SendToByGroup(
		{:sex == "F"},
		Level[1] << Colors( 3 ),
		Level[2] << Colors( 4 ),
		Level[3] << Colors( 9 ),
		Level[4] << Colors( 8 ),
		Level[5] << Colors( 5 ),
		Level[6] << Colors( 6 )
	),
	SendToByGroup(
		{:sex == "M"},
		Level[1] << Colors( 3 ),
		Level[2] << Colors( 4 ),
		Level[3] << Colors( 9 ),
		Level[4] << Colors( 8 ),
		Level[5] << Colors( 5 ),
		Level[6] << Colors( 6 )
	)
);
rpt = obj << report;
rpt = rpt << parent;
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X-axis to age.
4. Set Y-axis to N.
5. Enable level legend.
6. Use bar chart type.
7. Group by sex.
8. Customize female group colors.
9. Customize male group colors.
10. Retrieve and display report.



### Example 4
> **Summary**: Creates a bar chart to visualize data from an open JMP data table, with X-axis variable 'Type' and Y-axis variable 'N'.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #BarChart, #ChartObject, #DataTable -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Chart( X( :Type ), Y( N ), Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Configure bar chart type.



### Example 5
> **Summary**: Creates a bar chart to visualize data from a specified table, with the age variable on the X-axis and N values on the Y-axis.

<!-- Keywords: #JSLScripting, #BarChart, #DataVisualization, #JMP, #ChartCreation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :age ), Y( N ), Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Specify bar chart type.
6. Execute chart creation.



### Example 6
> **Summary**: Creates a bar chart to visualize count data by age and sex, utilizing the Chart platform in JMP.

<!-- Keywords: #JMP, #Chart, #BarChart, #CountData, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :age, :sex ), Y( N ), Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Set X-axis to "age" and "sex".
4. Set Y-axis to count (N).
5. Display bar chart.



### Example 7
> **Summary**: Creates a bar chart to visualize age distribution by sex, utilizing the JMP scripting language.

<!-- Keywords: #JMPScriptingLanguage, #BarChart, #DataVisualization, #ByGrouping, #ChartObject -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :age ), Y( N ), Bar Chart( 1 ), By( :sex ) );
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X-axis to "age".
4. Set Y-axis to count.
5. Use bar chart type.
6. Group by "sex".



### Example 8
> **Summary**: Creates a bar chart to visualize count data by sex, with age as the x-axis.

<!-- Keywords: #JMPScriptingLanguage, #BarChart, #DataVisualization, #Grouping, #ChartObject -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( Grouping( :sex ), X( :age ), Y( N ), Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Group by sex variable.
4. Set age as X-axis.
5. Set count as Y-axis.
6. Generate bar chart.



### Example 9
> **Summary**: Creates a bar chart to visualize data by age and sex, with configurable colors for level 1 and level 2 variables.

<!-- Keywords: #JMPScriptingLanguage, #BarChart, #DataVisualization, #Customization, #ChartConfiguration -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Chart( X( :age, :sex ), Y( N ), Level[1] << Colors( 24 ), Level[2] << Colors( 12 ), Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X-axis variables.
4. Set Y-axis variable.
5. Configure level 1 colors.
6. Configure level 2 colors.
7. Create bar chart.



### Example 10
> **Summary**: Creates a bar chart to visualize data from 'data_table.jmp', with X-axis variables set to 'age' and 'sex', Y-axis variable set to 'N', and color applied to Level 1 and Level 2 bars.

<!-- Keywords: #JSL, #BarChart, #DataVisualization, #JMPScriptingLanguage, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :age, :sex ), Y( N ), Level[1] << Colors( 78 ), Level[2] << Colors( "green" ), Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data_table data
2. Create chart object.
3. Set X-axis variables: age, sex.
4. Set Y-axis variable: N.
5. Apply color to Level 1 bars.
6. Apply green color to Level 2 bars.
7. Configure bar chart type.



### Example 11
> **Summary**: Creates a bar chart to visualize count data by age and sex, with color-coded levels.

<!-- Keywords: #JSLScriptingLanguage, #BarChart, #DataVisualization, #LevelDisplay, #ColorScheme -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :age, :sex ), Y( N ), Level[2] << Colors( 32 ), Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Set X variables: age, sex.
4. Set Y variable: count.
5. Configure level display: 2 levels.
6. Apply color scheme: 32 colors.
7. Generate bar chart.



### Example 12
> **Summary**: Creates a bar chart with customized colors and settings, using the age variable as the X-axis and N as the Y-axis.

<!-- Keywords: #JSLScriptingLanguage, #BarChart, #CustomColors, #DataVisualization, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :age ), Y( N ), Level[1] << Colors( 78 ), Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X axis to age.
4. Set Y axis to N.
5. Set level to 1.
6. Apply color scheme 78.
7. Enable bar chart.



### Example 13
> **Summary**: Creates a bar chart with count data, setting the X-axis to 'age' and colors to 78.

<!-- Keywords: #JMPScriptingLanguage, #BarChart, #DataVisualization, #ChartConfiguration, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :age ), Y( N ), Bar Chart( 1 ) );
obj << (Level[1] << Colors( 78 ));
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X-axis to "age".
4. Set Y-axis to count.
5. Add bar chart type.
6. Access first level.
7. Set colors to 78.



### Example 14
> **Summary**: Creates a bar chart with age on the X-axis and N on the Y-axis, using color 78 for the first level.

<!-- Keywords: #JSLScriptingLanguage, #BarChart, #DataVisualization, #JMPScripting, #ChartConfiguration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :age ), Y( N ), Bar Chart( 1 ) );
obj << Level[1] << Colors( 78 );
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Set X axis to age.
4. Set Y axis to N.
5. Use bar chart type.
6. Access first level settings.
7. Set color to 78.



### Example 15
> **Summary**: Creates a bar chart with custom color settings, utilizing the Chart() function and specifying X-axis and Y-axis variables.

<!-- Keywords: #JSLScriptingLanguage, #BarChart, #CustomColor, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :age ), Y( N ), Bar Chart( 1 ) );
(obj << Level[1]) << Colors( 78 );
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Choose bar chart type.
6. Access first level.
7. Set color to 78.



### Example 16
> **Summary**: Creates a bar chart with X-axis set to 'age' and Y-axis set to 'N', using color index 78.

<!-- Keywords: #JSLScriptingLanguage, #BarChart, #DataVisualization, #JMPScripting, #ChartConfiguration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :age ), Y( N ), Bar Chart( 1 ) );
obj << Colors( 78 );
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X-axis to age.
4. Set Y-axis to N.
5. Use bar chart type.
6. Assign color index 78.



