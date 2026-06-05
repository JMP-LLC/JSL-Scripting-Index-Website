# Pie

## Pie using Chart
### Example 1
> **Summary**: Creates a pie chart with Size Co as the X-axis and N as the Y-axis, adding a pie chart element and configuring the category axis to hide labels.

<!-- Keywords: #JSLScriptingLanguage, #PieChart, #CategoryAxis, #DataVisualization, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Chart( X( :Size Co ), Y( N( N ) ), Pie( 1 ), Category Axis << {Label( None )} );
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X variable to Size Co.
4. Set Y variable to N.
5. Add pie chart element.
6. Configure category axis.
7. Hide category labels.



### Example 2
> **Summary**: Creates a pie chart from a data table, specifying the size column as the X-axis variable and the N() function as the Y-axis variable.

<!-- Keywords: #JSLScriptingLanguage, #PieChart, #DataVisualization, #JMP, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :Size Co ), Y( N( N ) ), Pie( 1 ), Category Axis << {Label( None )} );
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X-axis variable.
4. Set Y-axis variable.
5. Add pie chart type.
6. Hide category axis labels.



### Example 3
> **Summary**: Creates a pie chart to visualize data distribution by age, utilizing JMP's Chart function with customized color levels and labels.

<!-- Keywords: #JMPChart, #PieChart, #CustomColors, #DataLabels, #AgeDistribution -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Chart(
	X( :age ),
	Y( N( N ) ),
	Pie( 1 ),
	Category Axis << {Label( None )},
	Label by Percent of Total Values,
	Show Labels,
	Level[1] << Colors( 3 ),
	Level[2] << Colors( 5 ),
	Level[3] << Colors( 9 ),
	Level[4] << Colors( 7 ),
	Level[5] << Colors( 8 ),
	Level[6] << Colors( 4 ), 
);
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X axis to "age".
4. Set Y axis to count.
5. Add pie chart type.
6. Hide category labels.
7. Label by percent.
8. Show data labels.
9. Set level 1 colors.
10. Set level 2 colors.
11. Set level 3 colors.
12. Set level 4 colors.
13. Set level 5 colors.
14. Set level 6 colors.



### Example 4
> **Summary**: Creates a pie chart to visualize the distribution of values in a data table, with customizable colors for each level.

<!-- Keywords: #JMPScriptingLanguage, #PieChart, #DataVisualization, #Customization, #ChartConfiguration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart(
	X( :age ),
	Y( N( N ) ),
	Pie( 1 ),
	Category Axis << {Label( None )},
	Label by Percent of Total Values,
	Show Labels,
	Level[1] << Colors( 3 ),
	Level[2] << Colors( 5 ),
	Level[3] << Colors( 9 ),
	Level[4] << Colors( 7 ),
	Level[5] << Colors( 8 ),
	Level[6] << Colors( 4 ), 
);
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Set X axis to age.
4. Set Y axis to count.
5. Add pie chart type.
6. Hide category labels.
7. Label by percentage.
8. Show value labels.
9. Set level 1 colors.
10. Set level 2 colors.
11. Set level 3 colors.
12. Set level 4 colors.
13. Set level 5 colors.
14. Set level 6 colors.



### Example 5
> **Summary**: Creates a pie chart to visualize data distribution, with customizable colors for levels 1-3 and labels showing percentage values.

<!-- Keywords: #JMPScriptingLanguage, #PieChart, #DataVisualization, #Customization, #ChartConfiguration -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Chart(
	X( :Size Co ),
	Y( N( N ) ),
	Pie( 1 ),
	Label by Percent of Total Values,
	Show Labels,
	Category Axis << {Label( None )},
	Level[1] << Colors( 4 ),
	Level[2] << Colors( 5 ),
	Level[3] << Colors( 8 )
);
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X axis variable.
4. Set Y axis variable.
5. Create pie chart.
6. Label by percentage.
7. Show labels on chart.
8. Hide category axis labels.
9. Set level 1 colors.
10. Set level 2 colors.
11. Set level 3 colors.



### Example 6
> **Summary**: Creates a pie chart with customized colors and labels from a data table, showcasing the 'Size Co' column on the X-axis and the 'N(N)' column on the Y-axis.

<!-- Keywords: #JMPScriptingLanguage, #PieChart, #CustomColors, #DataVisualization, #ChartConfiguration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart(
	X( :Size Co ),
	Y( N( N ) ),
	Pie( 1 ),
	Label by Percent of Total Values,
	Show Labels,
	Category Axis << {Label( None )},
	Level[1] << Colors( 4 ),
	Level[2] << Colors( 5 ),
	Level[3] << Colors( 8 )
);
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X axis to Size Co.
4. Set Y axis to N(N).
5. Add pie chart type.
6. Label by percent of total values.
7. Show labels on chart.
8. Hide category axis labels.
9. Set level 1 colors to 4.
10. Set level 2 colors to 5.
11. Set level 3 colors to 8.



