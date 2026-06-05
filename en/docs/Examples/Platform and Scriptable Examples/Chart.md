# Chart

### Example 1
> **Summary**: Creates a point chart to visualize arrival delays by airline, using the 'Chart' platform in JMP.

<!-- Keywords: #JMPChart, #PointChart, #DataVisualization, #AirlineAnalysis, #DelayMetrics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Chart( X( :Airline ), Y( :Arrival Delay ), Y[1] << Point Chart( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Set X axis variable.
4. Set Y axis variable.
5. Configure Y axis as point chart.



### Example 2
> **Summary**: Creates a horizontal chart object with Age as the X-axis variable and N as the Y-axis variable, using the Chart function.

<!-- Keywords: #JSLScriptingLanguage, #ChartFunction, #DataVisualization, #JMPScripting, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :Age ), Y( N ) );
```

**Code Explanation**:

1. Open data table.
2. Create horizontal chart object.
3. Set X-axis variable to Age.
4. Set Y-axis variable to N.



### Example 3
> **Summary**: Creates a chart with grouped data, assigning variables for X-axis and Y-axis.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #ChartCreation, #GroupedData, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( Grouping( :sex ), X( :Age ), Y( N ) );
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set grouping variable.
4. Assign X-axis variable.
5. Assign Y-axis variable.



### Example 4
> **Summary**: Creates a point chart to visualize data relationships between 'name' and 'weight', utilizing Chart Builder's configuration options.

<!-- Keywords: #JMPScriptingLanguage, #ChartBuilder, #PointChart, #DataVisualization, #GraphicalAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Chart( X( :name ), Y( :weight ), Y[1] << Point Chart( 1 ), connect points( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create chart with variables.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Configure Y-axis as point chart.
6. Connect data points.



### Example 5
> **Summary**: Creates a pie chart from a data table, specifying the X-axis variable as 'Airline' and the Y-axis variable as 'N'.

<!-- Keywords: #JSLScriptingLanguage, #PieChart, #DataVisualization, #JMP, #ChartCreation -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Chart( X( :Airline ), Y( N( N ) ), Pie Chart( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Assign dataset to variable.
3. Create chart object.
4. Set X-axis variable.
5. Set Y-axis variable.
6. Specify pie chart type.
7. Generate pie chart.



