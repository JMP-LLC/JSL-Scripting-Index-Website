# Mean

## Mean using Tree Map
> **Summary**: Visualizes a treemap to display the distribution of electoral votes across US states, using categories, coloring, sizes, and ordering to facilitate analysis.

<!-- Keywords: #JSLScriptingLanguage, #TreemapVisualization, #DataTableOperations, #ColorTheme, #InteractiveAnalysis -->

**Code**:
```jsl
// Treemap
// Open data table
dt = Open("data_table.jmp");
// Treemap
Tree Map(
	Categories( :State ),
	Coloring( :Winner ),
	Sizes( :Electors ),
	Ordering( :"Mean(X)"n, :"Mean(Y)"n ),
	Color Theme( "JMP Default" )
);
```

**Code Explanation**:

1. Open table.
2. Create treemap.
3. Set categories.
4. Set coloring.
5. Set sizes.
6. Set ordering.
7. Apply color theme.



## Mean using Chart
### Example 1
> **Summary**: Creates a stacked bar chart to visualize sales data, with X-axis variables set to 'Type' and 'Size Co', and Y-axis variable set to the mean of 'Sales ($M)'

<!-- Keywords: #JSL, #BarChart, #StackedBars, #DataVisualization, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
Chart( X( :Type, :Size Co ), Y( Mean( :Name( "Sales ($M)" ) ) ), Stack Bars( 1 ), Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X axis variables.
4. Set Y axis variable.
5. Apply stack bars option.
6. Apply bar chart option.



### Example 2
> **Summary**: Creates a pie chart to visualize mean sales data, with X-axis set to 'Size Co' and Y-axis set to 'Mean(Sales ($M))', while hiding category labels.

<!-- Keywords: #JMPScriptingLanguage, #PieChart, #DataVisualization, #ChartConfiguration, #CategoryAxis -->

**Code**:
```jsl
Open("data_table.jmp");
Chart( X( :Size Co ), Y( Mean( :Name( "Sales ($M)" ) ) ), Pie( 1 ), Category Axis << {Label( None )} );
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Add pie chart element.
6. Configure category axis.
7. Hide category labels.



### Example 3
> **Summary**: Creates a line chart to visualize mean height and weight by age and sex, using overlay and labeling features.

<!-- Keywords: #JMPScriptingLanguage, #LineChart, #Overlay, #Labeling, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :Age, :sex ), Y( Mean( :Height ), Mean( :Weight ) ), Overlay( 1 ) );
obj << Line Chart( 1 );
obj << Label by Value;
obj << Show Labels;
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X variables: Age, sex.
4. Set Y variables: Mean Height, Mean Weight.
5. Enable overlay.
6. Add line chart.
7. Label by value.
8. Show labels.



### Example 4
> **Summary**: Creates a chart object with X-axis variables 'Age' and 'sex', Y-axis variables 'Mean Height' and 'Mean Weight', utilizing JMP's Chart function.

<!-- Keywords: #JMPScriptingLanguage, #ChartFunction, #DataVisualization, #StatisticalAnalysis, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :Age, :sex ), Y( Mean( :Height ), Mean( :Weight ) ) );
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Set X-axis variables.
4. Set Y-axis variables.
5. Calculate mean height.
6. Calculate mean weight.
7. Display chart.



### Example 5
> **Summary**: Creates a chart object with overlay effect, using data from an open JMP data table and specifying X variables (Age and sex) and Y variables (Mean Height and Mean Weight).

<!-- Keywords: #JMPScriptingLanguage, #DataTable, #ChartObject, #OverlayEffect, #StatisticalAnalysis -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Chart( X( :Age, :sex ), Y( Mean( :Height ), Mean( :Weight ) ) );
obj << Overlay( 1 );
```

**Code Explanation**:

1. Set default name scope.
2. Open data table.
3. Create chart object.
4. Set X variables: Age, sex.
5. Set Y variables: Mean Height, Mean Weight.
6. Apply overlay effect.



### Example 6
> **Summary**: Creates a range chart to visualize mean height and weight by age and sex, utilizing default names for data table and chart object.

<!-- Keywords: #JMPScriptingLanguage, #RangeChart, #DataVisualization, #ChartObject, #DefaultNames -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Chart( X( :Age, :sex ), Y( Mean( :Height ), Mean( :Weight ) ) );
obj << Range Chart( 1 );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create chart object.
4. Set X variables: Age, Sex.
5. Set Y variables: Mean Height, Mean Weight.
6. Apply range chart settings.
7. Display chart.



### Example 7
> **Summary**: Creates a chart with X-axis variables Age and sex, Y-axis variables Mean Height and Mean Weight, and disables overlay option.

<!-- Keywords: #JSLScriptingLanguage, #DataTable, #ChartObject, #X-AxisVariables, #Y-AxisVariables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :Age, :sex ), Y( Mean( :Height ), Mean( :Weight ) ), Overlay( 0 ) );
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Set X-axis variables.
4. Set Y-axis variables.
5. Disable overlay option.



### Example 8
> **Summary**: Creates a chart with separate axes, displaying mean Height and Weight by Age and sex.

<!-- Keywords: #JSLScriptingLanguage, #ChartCreation, #SeparateAxes, #MeanCalculation, #DataVisualization -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Chart( X( :Age, :sex ), Y( Mean( :Height ), Mean( :Weight ) ), Overlay( 0 ) );
obj << Show Separate Axes( 1 );
```

**Code Explanation**:

1. Set default name scope.
2. Open data table;
3. Create chart object.
4. Set X-axis to Age and sex.
5. Set Y-axis to mean Height and Weight.
6. Disable overlay.
7. Display separate axes.



### Example 9
> **Summary**: Creates a stacked bar chart to visualize mean height and weight by age and sex, utilizing default naming conventions.

<!-- Keywords: #JSLScripting, #StackedBarChart, #DataVisualization, #MeanHeightWeight, #DefaultNaming -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Chart( X( :Age, :sex ), Y( Mean( :Height ), Mean( :Weight ) ) );
obj << Stack Bars( 1 );
```

**Code Explanation**:

1. Set default names scope.
2. Open data table.
3. Create chart object.
4. Set X-axis to Age and Sex.
5. Set Y-axis to mean Height and Weight.
6. Apply stack bars option.



### Example 10
> **Summary**: Creates a bar chart to visualize profits by type and size, using the Mean function to calculate profit values.

<!-- Keywords: #JMPScriptingLanguage, #BarChart, #DataVisualization, #ProfitAnalysis, #ChartAutomation -->

**Code**:
```jsl
Open("data_table.jmp");
Chart( X( :Type, :Size Co ), Y( Mean( :Name( "Profits ($M)" ) ) ), Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Set X-axis variables.
4. Set Y-axis variable.
5. Apply bar chart style.



### Example 11
> **Summary**: Creates a bar chart to visualize mean height by age, with customizable colors for each level.

<!-- Keywords: #JMPScriptingLanguage, #BarChart, #CustomColors, #DataVisualization, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Chart(
	X( :age ),
	Y( Mean( :height ) ),
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
3. Set X axis to age.
4. Set Y axis to mean height.
5. Set color for level 1.
6. Set color for level 2.
7. Set color for level 3.
8. Set color for level 4.
9. Set color for level 5.
10. Set color for level 6.
11. Generate bar chart.
12. Create report object.



### Example 12
> **Summary**: Creates a bar chart to visualize mean blood pressure values at different time points, utilizing overlay colors for distinct groups.

<!-- Keywords: #JMPScriptingLanguage, #BarChart, #OverlayColors, #DataVisualization, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart(
	X( :Dose ),
	Y( Mean( :BP 8M ), Mean( :BP 12M ), Mean( :BP 6M ), Mean( :BP 8W ) ),
	y[1] << overlay color( 4 ),
	y[2] << overlay color( 3 ),
	y[3] << overlay color( 8 ),
	y[4] << overlay color( 9 ),
	Bar Chart( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X-axis variable.
4. Set Y-axis variables.
5. Overlay color for first Y.
6. Overlay color for second Y.
7. Overlay color for third Y.
8. Overlay color for fourth Y.
9. Generate bar chart.
10. Generate report.



### Example 13
> **Summary**: Creates and creates a report for a bar chart to visualize mean height by sex, with color-coded levels for age groups.

<!-- Keywords: #JSL, #BarChart, #Grouping, #Colors, #Report -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart(
	Grouping( :sex ),
	X( :age ),
	Y( Mean( :height ) ),
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
3. Group by sex variable.
4. Set X-axis to age.
5. Set Y-axis to mean height.
6. Color level 1 bars.
7. Color level 2 bars.
8. Color level 3 bars.
9. Color level 4 bars.
10. Color level 5 bars.
11. Color level 6 bars.
12. Generate bar chart.
13. Save chart report.



### Example 14
> **Summary**: Creates a bar chart to visualize sales and profits data, with customizable colors for each level.

<!-- Keywords: #JMPScriptingLanguage, #BarChart, #DataVisualization, #Customization, #Reporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart(
	X( :Type, :Size Co ),
	Y( Mean( :Name( "Sales ($M)" ) ), Mean( :Name( "Profits ($M)" ) ) ),
	Overlay( 0 ),
	Level[1] << Colors( 4 ),
	Level[2] << Colors( 6 ),
	Level[3] << Colors( 8 ),
	Bar Chart( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Set X-axis variables.
4. Set Y-axis variables.
5. Disable overlay.
6. Set level 1 colors.
7. Set level 2 colors.
8. Set level 3 colors.
9. Configure bar chart.
10. Generate report.



### Example 15
> **Summary**: Creates a bar chart to visualize mean height by age, using JMP's Chart platform.

<!-- Keywords: #JMPChart, #BarChart, #MeanHeight, #AgeVariable, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :age ), Y( Mean( :height ) ), Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Set X-axis to age.
4. Set Y-axis to mean height.
5. Use bar chart type.



### Example 16
> **Summary**: Creates a bar chart to visualize mean height and weight by sex and age, utilizing JMP's Chart() function.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #BarChart, #MeanCalculation, #InteractiveChart -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :sex, :age ), Y( Mean( :height ), Mean( :weight ) ), Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Set X-axis variables.
4. Set Y-axis variables.
5. Calculate mean height.
6. Calculate mean weight.
7. Configure bar chart type.
8. Display chart.



### Example 17
> **Summary**: Creates a bar chart to visualize mean height by sex, with age on the x-axis.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #BarChart, #Grouping, #MeanCalculation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( Grouping( :sex ), X( :age ), Y( Mean( :height ) ), Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Group by sex.
4. Set X-axis to age.
5. Set Y-axis to mean height.
6. Use bar chart type.



### Example 18
> **Summary**: Creates a bar chart to display mean age by marital status and country, with sex as the X-axis variable.

<!-- Keywords: #JMPScriptingLanguage, #BarChart, #GroupingVariables, #MeanAge, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( Grouping( :marital status, :country ), X( :sex ), Y( Mean( :age ) ), Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data_table data
2. Create chart object.
3. Set grouping variables.
4. Set X-axis variable.
5. Set Y-axis variable.
6. Calculate mean age.
7. Use bar chart type.
8. Display chart.



### Example 19
> **Summary**: Creates a bar chart to visualize mean age by marital status and country, with sex and type as categorical variables.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #BarChart, #GroupingVariables, #CategoricalVariables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( Grouping( :marital status, :country ), X( :sex, :type ), Y( Mean( :age ) ), Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create a chart object.
3. Set grouping variables: marital status, country.
4. Set X-axis variables: sex, type.
5. Set Y-axis variable: mean age.
6. Configure bar chart style.



### Example 20
> **Summary**: Creates a bar chart to visualize mean height and weight by sex, using JMP's Chart platform.

<!-- Keywords: #JMPChart, #BarChart, #MeanCalculation, #DataVisualization, #Grouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( Grouping( :sex ), X( :age ), Y( Mean( :height ), Mean( :weight ) ), Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Group by sex variable.
4. Set X-axis to age.
5. Calculate mean height.
6. Calculate mean weight.
7. Add mean height to Y-axis.
8. Add mean weight to Y-axis.
9. Display bar chart.
10. Use first bar chart option.



### Example 21
> **Summary**: Creates a chart object with two mean values on the y-axis, using the Type column as the x-axis.

<!-- Keywords: #JSLScriptingLanguage, #ChartObject, #MeanFunction, #DataTable, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :Type ), Y( Mean( :Name( "Sales($M)" ) ), Mean( :Name( "Assets($Mil.)" ) ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create a chart object.
3. Set X-axis to Type column.
4. Add Mean of Sales($M) to Y-axis.
5. Add Mean of Assets($Mil.) to Y-axis.



### Example 22
> **Summary**: Creates a bar chart to visualize mean sales and profits data, utilizing X-axis variables for type and size, and Y-axis variables for mean sales and profits.

<!-- Keywords: #JMPScriptingLanguage, #BarChart, #DataVisualization, #MeanCalculation, #ChartCreation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :Type, :Size Co ), Y( Mean( :Name( "Sales ($M)" ) ), Mean( :Name( "Profits ($M)" ) ) ), Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Assign data table to variable.
3. Create chart object.
4. Set X-axis variables.
5. Set Y-axis variables.
6. Calculate mean for Sales.
7. Calculate mean for Profits.
8. Specify bar chart type.
9. Display chart.



### Example 23
> **Summary**: Creates a bar chart to visualize sales and profits data, disabling overlay options and setting X-axis variables.

<!-- Keywords: #JSLScriptingLanguage, #BarChart, #DataVisualization, #JMP, #ChartObject -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :Type, :Size Co ), Y( Mean( :Name( "Sales ($M)" ) ), Mean( :Name( "Profits ($M)" ) ) ), Overlay( 0 ), Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Set X-axis variables.
4. Set Y-axis variables.
5. Disable overlay option.
6. Enable bar chart type.
7. Display chart.



### Example 24
> **Summary**: Creates a stacked bar chart to visualize sales data, with X-axis variables set to Type and Size Co, and Y-axis variable set to the mean of Sales ($M).

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #StackedBarChart, #BarChart, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :Type, :Size Co ), Y( Mean( :Name( "Sales ($M)" ) ) ), Stack Bars( 1 ), Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Set X axis variables.
4. Set Y axis variable.
5. Apply stack bars option.
6. Apply bar chart option.



### Example 25
> **Summary**: Creates a chart with mean height and weight by sex and age, enabling overlay and displaying the level legend.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #ChartCreation, #OverlayFeature, #LevelLegend -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Chart( X( :sex, :age ), Y( Mean( :height ), Mean( :weight ) ), Overlay( 1 ) );
obj << Show Level Legend( 1 );
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Set X variables: sex, age.
4. Set Y variables: mean height, mean weight.
5. Enable overlay.
6. Show level legend.



### Example 26
> **Summary**: Creates a chart with mean height and weight by age and sex, displaying level legend.

<!-- Keywords: #JMPScriptingLanguage, #ChartCreation, #DataVisualization, #MeanCalculation, #LevelLegend -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :age, :sex ), Y( Mean( :height ), Mean( :weight ) ), Overlay( 1 ) );
obj << Show Level Legend( 1 );
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X variables: age, sex.
4. Set Y variables: mean height, mean weight.
5. Enable overlay.
6. Display level legend.



### Example 27
> **Summary**: Creates a chart with mean height as the y-axis and sex and age as categorical variables, displaying a level legend.

<!-- Keywords: #JMPScriptingLanguage, #ChartCreation, #LevelLegend, #CategoricalVariables, #MeanHeight -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :sex, :age ), Y( Mean( :height ) ) );
obj << Show Level Legend( 1 );
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Set X-axis variables.
4. Set Y-axis variable.
5. Calculate mean height.
6. Display level legend.



### Example 28
> **Summary**: Creates a chart with mean height and weight by age and sex, enabling overlay color for the first Y variable.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #Charting, #OverlayColor, #MeanCalculation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :age, :sex ), Y( Mean( :height ), Mean( :weight ) ), Overlay( 1 ) );
obj << Y[1] << Overlay Color( 41 );
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X variables: age, sex.
4. Set Y variables: mean height, mean weight.
5. Enable overlay.
6. Apply overlay color to first Y variable.



### Example 29
> **Summary**: Creates a chart with two Y-axis variables, enabling overlay and customizing color for the second axis.

<!-- Keywords: #JSLScriptingLanguage, #ChartCreation, #OverlayFeature, #Customization, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :age, :sex ), Y( Mean( :height ), Mean( :weight ) ), Overlay( 1 ) );
obj << Y[2] << Overlay Color( Red );
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X-axis variables.
4. Set Y-axis variables.
5. Enable overlay.
6. Access second Y-axis.
7. Change overlay color to red.



### Example 30
> **Summary**: Creates a chart object with X variables age and sex, Y variables mean height and mean weight, and applies overlay to Y variables while changing the color of the first Y overlay to 41.

<!-- Keywords: #JSLScripting, #ChartObject, #Overlay, #MeanHeight, #MeanWeight -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :age, :sex ), Y( Mean( :height ), Mean( :weight ) ), Overlay( 1 ) );
obj << (Y[1] << Overlay Color( 41 ));
```

**Code Explanation**:

1. Open data_table data
2. Create a chart object.
3. Set X variables: age, sex.
4. Set Y variables: mean height, mean weight.
5. Apply overlay to Y variables.
6. Change color of first Y overlay to 41.



### Example 31
> **Summary**: Creates a chart with two overlaid Y-axes, displaying mean height and weight by age and sex, with the second Y-axis colored red.

<!-- Keywords: #JSLScriptingLanguage, #ChartCreation, #OverlayCharts, #DataVisualization, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :age, :sex ), Y( Mean( :height ), Mean( :weight ) ), Overlay( 1 ) );
obj << (Y[2] << Overlay Color( Red ));
```

**Code Explanation**:

1. Open data table;
2. Create a chart object.
3. Set X-axis to age and sex.
4. Set Y-axis to mean height and weight.
5. Overlay the charts.
6. Change the second Y-axis overlay color to red.



### Example 32
> **Summary**: Creates a chart object with two overlays, displaying mean height and mean weight by age and sex.

<!-- Keywords: #JSLScripting, #ChartObject, #Overlay, #Mean, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart(
	X( :age, :sex ),
	Y( Mean( :height ), Mean( :weight ) ),
	Overlay( 1 ),
	Y[1] << Overlay Color( 41 ),
	Y[2] << Overlay Color( Red )
);
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Set X variables: age, sex.
4. Set Y variables: mean height, mean weight.
5. Enable overlay.
6. Set first Y overlay color.
7. Set second Y overlay color.



### Example 33
> **Summary**: Creates a bar chart to visualize mean height by age and sex, with horizontal layout, stacked bars, and labels.

<!-- Keywords: #JSLScriptingLanguage, #BarChart, #StackedBars, #HorizontalLayout, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Chart( X( :age, :sex ), Y( Mean( :height ) ), Horizontal( 1 ), Stack Bars( 1 ), Label by Value, Show Labels, Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X-axis variables.
4. Set Y-axis variable.
5. Enable horizontal layout.
6. Enable stack bars option.
7. Label by value.
8. Show labels on bars.
9. Use bar chart type.
10. Display chart.



### Example 34
> **Summary**: Creates a stacked bar chart to visualize mean height by age and sex, with horizontal layout and labeled bars.

<!-- Keywords: #JSLScriptingLanguage, #BarChart, #DataVisualization, #JMPScripting, #StackedBars -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :age, :sex ), Y( Mean( :height ) ), Horizontal( 1 ), Stack Bars( 1 ), Label by Value, Show Labels, Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Set X-axis variables.
4. Set Y-axis variable.
5. Enable horizontal layout.
6. Stack bars option.
7. Label by value.
8. Show labels.
9. Enable bar chart.



### Example 35
> **Summary**: Creates a line chart to visualize the mean sales and assets for each type, using JMP's Chart platform.

<!-- Keywords: #JMPChart, #LineChart, #MeanCalculation, #DataVisualization, #Automation -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Chart( X( :Type ), Y( Mean( :Name( "Sales($M)" ) ), Mean( :Name( "Assets($Mil.)" ) ) ), Line Chart( 1 ) );
```

**Code Explanation**:

1. Open data_table data
2. Create chart object.
3. Set X-axis to Type.
4. Add Sales mean to Y-axis.
5. Add Assets mean to Y-axis.
6. Enable line chart.



### Example 36
> **Summary**: Creates a line chart to visualize mean sales and assets by type, utilizing JMP's Chart platform.

<!-- Keywords: #JMPChart, #LineChart, #MeanCalculation, #DataVisualization, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :Type ), Y( Mean( :Name( "Sales($M)" ) ), Mean( :Name( "Assets($Mil.)" ) ) ), Line Chart( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X-axis to Type.
4. Add Mean Sales to Y-axis.
5. Add Mean Assets to Y-axis.
6. Enable line chart.



### Example 37
> **Summary**: Creates a range chart with two series, using Mean(Sales ($M)) and Mean(Profits ($M)) as y-axis values, and Size Co as the x-axis.

<!-- Keywords: #JSL, #RangeChart, #Mean, #SizeCo, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :Size Co ), Y( Mean( :Name( "Sales ($M)" ) ), Mean( :Name( "Profits ($M)" ) ) ), Range Chart( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create a new chart object.
3. Set X-axis to Size Co.
4. Add Mean(Sales ($M)) to Y-axis.
5. Add Mean(Profits ($M)) to Y-axis.
6. Enable range chart.
7. Configure range chart for first series.



### Example 38
> **Summary**: Creates a stacked bar chart from a data table, customizing colors for each level and applying a bar chart style.

<!-- Keywords: #JSLScriptingLanguage, #BarChart, #StackedBars, #CustomColors, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart(
	X( :Type, :Size Co ),
	Y( Mean( :Name( "Sales ($M)" ) ) ),
	Stack Bars( 1 ),
	Bar Chart( 1 ),
	Level[1] << Colors( 4 ),
	Level[2] << Colors( 9 ),
	Level[3] << Colors( 3 )
);
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Set X axis variables.
4. Set Y axis variable.
5. Enable stacked bars.
6. Apply bar chart style.
7. Customize level 1 colors.
8. Customize level 2 colors.
9. Customize level 3 colors.



## Mean using Summarize
### Example 1
> **Summary**: Runs data summarization by sex, calculating the mean height for each group.

<!-- Keywords: #JSLScriptingLanguage, #DataSummarization, #ByGroup, #MeanCalculation, #JMPDataTable -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "invisible" );
Summarize( dt, exg = By( :sex ), exm = Mean( :height ) );
```

**Code Explanation**:

1. Open data table;
2. Summarize data by sex.
3. Calculate mean height for each sex.



### Example 2
> **Summary**: Runs data summarization by sex and calculates the mean height, utilizing the Summarize platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataSummarization, #ByGroups, #MeanCalculation, #Summarize -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
Summarize( dt, exg = By( :sex ), exm = Mean( :height ) );
```

**Code Explanation**:

1. Open data table;
2. Assign dataset to variable.
3. Summarize data by sex.
4. Calculate mean height.
5. Store results in variables.



### Example 3
> **Summary**: Runs data summarization by sex, calculating the mean height for each group.

<!-- Keywords: #JSLScriptingLanguage, #DataSummarization, #ByGroup, #MeanCalculation, #JMPScripting -->

**Code**:
```jsl
Open("data_table.jmp");
Summarize( var1a = By( :sex ), var1b = Mean( :height ) );
```

**Code Explanation**:

1. Open data table;
2. Summarize data by sex.
3. Calculate mean height for each sex.



## Mean using Text Edit Box
### Example 1
> **Summary**: Creates a bar chart to visualize mean height by age, utilizing text edit boxes and rectangles for customization.

<!-- Keywords: #JSLScripting, #BarChart, #Customization, #DataVisualization, #JMP -->

**Code**:
```jsl
cert text edit bx = {Text Edit Box( "Mean(height)", default font id( 9 ), wrapWidth( 277 ), justification( 1 ), vjustification( 1 ), left )
};
cert title = {Title( "age" )};
cert labels = {"Labels", Labels( "12", "13", "14", "15", "16", "17" )};
cert rect = {Rect( 0.855595667870036, 66.6666666666667, 0.945848375451264, 0, 1 ), Rect(
	0.693140794223827,
	64.3333333333333,
	0.783393501805054,
	0,
	1
), Rect( 0.530685920577617, 64.5714285714286, 0.620938628158845, 0, 1 ), Rect(
	0.371841155234657,
	64.1666666666667,
	0.462093862815885,
	0,
	1
), Rect( 0.209386281588448, 60.2857142857143, 0.299638989169675, 0, 1 ), Rect( 0.0469314079422383, 58.125, 0.137184115523466, 0, 1 )};
dt = Open("data_table.jmp");
obj = dt << Chart(
	X( :age ),
	Y( Mean( :height ) ),
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

1. Create text edit box.
2. Set title "age".
3. Define labels for age groups.
4. Define rectangles for bar chart.
5. Open data table;
6. Create bar chart of mean height by age.
7. Set colors for bar levels.
8. Generate report from chart.



### Example 2
> **Summary**: Creates a bar chart with multiple series, utilizing text edit boxes for input and custom rendering styles.

<!-- Keywords: #JSLScripting, #BarChart, #CustomRendering, #TextEditBox, #DataVisualization -->

**Code**:
```jsl
cert label = {label( "Mean(BP 8M)" ), label( "Mean(BP 12M)" ), label( "Mean(BP 6M)" ), label( "Mean(BP 8W)" )};
cert text edit bx = {Text Edit Box( "Y", default font id( 9 ), wrapWidth( 277 ), justification( 1 ), vjustification( 1 ), left )};
cert title = {Title( "Dose" )};
cert labels = {"Labels", Labels( "A", "B", "Control", "Placebo" )};
cert rs = {rs( 0, Dot, 4 ), rs( 0, Dot, 3 ), rs( 0, Dot, 8 ), rs( 0, Dot, 9 )};
cert rect = {Rect( 0.898916967509025, 181.274811443348, 0.942238267148014, 0, 1 ), Rect(
	0.660649819494585,
	177.186763443482,
	0.703971119133574,
	0,
	1
), Rect( 0.422382671480144, 184.238884423777, 0.465703971119134, 0, 1 ), Rect(
	0.184115523465704,
	176.138183331992,
	0.227436823104693,
	0,
	1
), Rect( 0.855595667870036, 181.006139550061, 0.898916967509025, 0, 1 ), Rect(
	0.617328519855596,
	180.734825407513,
	0.660649819494585,
	0,
	1
), Rect( 0.379061371841155, 180.202909288621, 0.422382671480144, 0, 1 ), Rect(
	0.140794223826715,
	179.415573829326,
	0.184115523465704,
	0,
	1
), Rect( 0.812274368231047, 177.682555628762, 0.855595667870036, 0, 1 ), Rect(
	0.574007220216607,
	180.949644217605,
	0.617328519855596,
	0,
	1
), Rect( 0.335740072202166, 182.75321496061, 0.379061371841155, 0, 1 ), Rect( 0.0974729241877256, 179.9324183333, 0.140794223826715, 0, 1 ),
Rect( 0.768953068592058, 179.353123836291, 0.812274368231047, 0, 1 ), Rect( 0.530685920577617, 180.530731287898, 0.574007220216607, 0, 1 ),
Rect( 0.292418772563177, 176.722603031539, 0.335740072202166, 0, 1 ), Rect(
	0.0541516245487365,
	180.141228733493,
	0.0974729241877256,
	0,
	1
)};
dt = Open("data_table.jmp");
obj = Chart(
	X( :Dose ),
	Y( Mean( :BP 8M ), Mean( :BP 12M ), Mean( :BP 6M ), Mean( :BP 8W ) ),
	y[1] << overlay color( 4 ),
	y[2] << overlay color( 3 ),
	y[3] << overlay color( 8 ),
	y[4] << overlay color( 9 ),
	Bar Chart( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Define labels for bar chart.
2. Create text edit box for input.
3. Set chart title.
4. Define labels for categories.
5. Define rendering styles for bars.
6. Define rectangles for chart elements.
7. Open data_table data
8. Create bar chart object.
9. Assign colors to different series.
10. Generate report from chart object.



### Example 3
> **Summary**: Creates a bar chart to visualize mean height by sex, utilizing a text edit box for customization and a report object for output.

<!-- Keywords: #JMPScriptingLanguage, #BarChart, #DataVisualization, #Customization, #ReportObject -->

**Code**:
```jsl
cert text edit bx = {Text Edit Box( "Mean(height)", default font id( 9 ), wrapWidth( 277 ), justification( 1 ), vjustification( 1 ), left ),
Text Edit Box( "Mean(height)", default font id( 9 ), wrapWidth( 277 ), justification( 1 ), vjustification( 1 ), left )};
cert label = {label( "F" ), label( "M" ), label( "sex" )};
cert title = {Title( "age" )};
cert labels = {"Labels", "Labels", Labels( "12", "13", "14", "15", "16", "17" )};
dt = Open("data_table.jmp");
obj = Chart(
	Grouping( :sex ),
	X( :age ),
	Y( Mean( :height ) ),
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

1. Define text edit boxes.
2. Define labels.
3. Define title.
4. Define labels.
5. Open data table;
6. Create chart object.
7. Group by sex.
8. Set X-axis to age.
9. Set Y-axis to mean height.
10. Generate bar chart.



### Example 4
> **Summary**: Creates a bar chart to visualize sales and profits by size category within type, utilizing a custom layout and color scheme.

<!-- Keywords: #JMPScriptingLanguage, #BarChart, #CustomLayout, #ColorScheme, #DataVisualization -->

**Code**:
```jsl
cert label = {label( "big" ), label( "medium" ), label( "small" )};
cert text edit bx = {Text Edit Box( "Mean(Sales ($M))",
	default font id( 9 ),
	wrapWidth( 277 ),
	justification( 1 ),
	vjustification( 1 ),
	left
), Text Edit Box( "Mean(Profits ($M))", default font id( 9 ), wrapWidth( 277 ), justification( 1 ), vjustification( 1 ), left )};
cert labels = {"Labels", "Labels", Labels( "Computer", "Pharmaceutical" ), Labels( "big", "medium", "small" )};
cert title = {Title( "Size Co within Type" )};
cert rect = {Rect( 0.859205776173285, 1083.75, 0.945848375451264, 0, 1 ), Rect( 0.703971119133574, 4261.06, 0.790613718411552, 0, 1 ),
Rect( 0.545126353790614, 7474.04, 0.631768953068592, 0, 1 ), Rect( 0.357400722021661, 1758.05714285714, 0.444043321299639, 0, 1 ),
Rect( 0.202166064981949, 3018.85, 0.288808664259928, 0, 1 ), Rect( 0.0469314079422383, 20597.475, 0.133574007220217, 0, 1 ),
Rect( 0.859205776173285, 156.95, 0.945848375451264, 0, 1 ), Rect( 0.703971119133574, 698.98, 0.790613718411552, 0, 1 ),
Rect( 0.545126353790614, 894.42, 0.631768953068592, 0, 1 ), Rect( 0.357400722021661, 44.9357142857143, 0.444043321299639, 0, 1 ),
Rect( 0.202166064981949, 0, 0.288808664259928, -85.75, 1 ), Rect( 0.0469314079422383, 1089.925, 0.133574007220217, 0, 1 )};
dt = Open("data_table.jmp");
obj = Chart(
	X( :Type, :Size Co ),
	Y( Mean( :Name( "Sales ($M)" ) ), Mean( :Name( "Profits ($M)" ) ) ),
	Overlay( 0 ),
	Level[1] << Colors( 4 ),
	Level[2] << Colors( 6 ),
	Level[3] << Colors( 8 ),
	Bar Chart( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Define `cert label` array.
2. Define `cert text edit bx` array.
3. Define `cert labels` array.
4. Define `cert title` object.
5. Define `cert rect` array.
6. Open data table;
7. Create chart object with X variables.
8. Add Y variables to chart.
9. Disable overlay.
10. Set colors for levels.
11. Generate bar chart.
12. Retrieve chart report.



### Example 5
> **Summary**: Creates a stacked bar chart from a data table, with customized colors for each level and a text edit box for labeling.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #BarChart, #StackedBars, #Customization -->

**Code**:
```jsl
cert text edit bx = {Text Edit Box( "Mean(Sales ($M))", default font id( 9 ), wrapWidth( 277 ), justification( 1 ), left )};
dt = Open("data_table.jmp");
obj = Chart(
	X( :Type, :Size Co ),
	Y( Mean( :Name( "Sales ($M)" ) ) ),
	Stack Bars( 1 ),
	Bar Chart( 1 ),
	Level[1] << Colors( 4 ),
	Level[2] << Colors( 9 ),
	Level[3] << Colors( 3 )
);
```

**Code Explanation**:

1. Open data table.
2. Create text edit box for label.
3. Initialize chart object.
4. Set X axis variables.
5. Set Y axis variable as mean sales.
6. Enable stacked bars.
7. Set chart type to bar chart.
8. Assign color to first level.
9. Assign color to second level.
10. Assign color to third level.



