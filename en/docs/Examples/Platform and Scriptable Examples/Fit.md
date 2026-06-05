# Fit

## Fit using If
> **Summary**: Executes Lasso regression analysis on a data table, utilizing adaptive estimation and validation column methods.

<!-- Keywords: #JMPPro, #LassoRegression, #DataAnalysis, #Scripting, #AdaptiveEstimation -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	obj = dt << Run Script( "Lasso" );
	For( i = 1, i <= 10, i++,
		obj << Fit( Estimation Method( Lasso( Adaptive ) ), Validation Method( "Validation Column" ) )
	);
	For( i = 1, i <= 10, i++,
		obj << (Fit[1] << Remove Fit( 1 ))
	);
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Run Lasso script.
4. Loop 10 times.
5. Fit Lasso model.
6. Use validation column.
7. Loop 10 times.
8. Remove first fit.
9. Close dataset.
10. Do not save.



## Fit using Run Script
### Example 1
> **Summary**: Executes a Structural Equation Modeling (SEM) script and configures path diagram properties, including path styles, thickness, and transparency.

<!-- Keywords: #JSLScriptingLanguage, #StructuralEquationModeling, #PathDiagrams, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: Bollen (1989)" );
obj << Remove Fit( 1 );
```

**Code Explanation**:

1. Open table.
2. Run SEM script.
3. Remove fit from object.



### Example 2
> **Summary**: Runs the comparison and analysis of SEM models in a data table, selecting specific rows for model evaluation and retrieving XML results.

<!-- Keywords: #JSLScriptingLanguage, #SEMAnalysis, #ModelComparison, #DataTableOperations, #XMLRetrieval -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: Measurement Models" );
(obj << Report())[Outline Box( "Model Comparison" )][Table Box( 1 )] << SetSelected Rows( [1, 2, 3, 4] );
obj << Compare Selected Models();
obj << Remove Fit();
obj << Remove Fit();
rpt = Current Report();
results_box = (rpt[Outline Box( "Chi-Square Difference Test" )]);
results_box << get xml;
```

**Code Explanation**:

1. Open data table;
2. Run SEM script on dataset.
3. Select specific model comparison rows.
4. Compare selected models.
5. Remove first fit from analysis.
6. Remove second fit from analysis.
7. Retrieve current report.
8. Access Chi-Square Difference Test outline box.
9. Get XML of results box.
10. Store XML for further use.



## Fit using Chart
### Example 1
> **Summary**: Creates a bar chart to visualize mean sales and profit data by type, with customizable overlay colors for each metric.

<!-- Keywords: #JSLScripting, #BarChart, #DataVisualization, #Customization, #JMPReporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart(
	X( :Type ),
	Y( Mean( :Name( "Sales($M)" ) ), Mean( :Name( "Profit($M)" ) ) ),
	Bar Chart( 1 ),
	Y[1] << Overlay Color( 4 ),
	Y[2] << Overlay Color( 3 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X-axis to Type.
4. Set Y-axis to Sales and Profit means.
5. Use bar chart type.
6. Overlay color for Sales.
7. Overlay color for Profit.
8. Generate chart report.



### Example 2
> **Summary**: Creates a chart with multiple Y-axes, visualizing mean values of Sales, Profit, Assets, and Stockholder's Equity, with customized colors and chart types.

<!-- Keywords: #JMPScriptingLanguage, #ChartCreation, #Customization, #DataVisualization, #MeanValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart(
	X( :Type ),
	Y(
		Mean( :Name( "Sales($M)" ) ),
		Mean( :Name( "Profit($M)" ) ),
		Mean( :Name( "Assets($Mil.)" ) ),
		Mean( :Name( "Stockholder's Eq($Mil.)" ) )
	),
	Y[1] << Bar Chart( 1 ),
	Y[2] << Bar Chart( 1 ),
	Y[3] << Line Chart( 1 ),
	Y[4] << Bar Chart( 1 ),
	Y[1] << {Bar Chart( 1 ), Overlay Color( 4 )},
	Y[2] << {Bar Chart( 1 ), Overlay Color( 3 )},
	Y[3] << {Line Chart( 1 ), Overlay Color( 8 )},
	Y[4] << {Bar Chart( 1 ), Overlay Color( 9 )}
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Chart object.
3. Set X-axis to Type.
4. Set Y-axes to mean values of Sales, Profit, Assets, Stockholder's Eq.
5. Plot Y1 as Bar Chart.
6. Plot Y2 as Bar Chart.
7. Plot Y3 as Line Chart.
8. Plot Y4 as Bar Chart.
9. Customize Y1 with Bar Chart and color 4.
10. Customize Y2 with Bar Chart and color 3.
11. Customize Y3 with Line Chart and color 8.
12. Customize Y4 with Bar Chart and color 9.
13. Generate report from Chart object.



### Example 3
> **Summary**: Creates a bar chart to visualize mean sales and profit data, with Type as the X-axis.

<!-- Keywords: #JSLScriptingLanguage, #BarChart, #DataVisualization, #MeanCalculation, #ChartConfiguration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :Type ), Y( Mean( :Name( "Sales($M)" ) ), Mean( :Name( "Profit($M)" ) ) ), Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data_table data
2. Create chart object.
3. Set X-axis to Type.
4. Set Y-axis to Sales mean.
5. Add Profit mean to Y-axis.
6. Configure chart type as bar chart.



### Example 4
> **Summary**: Creates a chart with multiple Y-axes, displaying means of Sales, Profit, Assets, and Stockholder's Equity, using different visualization types for each axis.

<!-- Keywords: #JSLScriptingLanguage, #ChartCreation, #MultipleYAxes, #VisualizationTypes, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart(
	X( :Type ),
	Y(
		Mean( :Name( "Sales($M)" ) ),
		Mean( :Name( "Profit($M)" ) ),
		Mean( :Name( "Assets($Mil.)" ) ),
		Mean( :Name( "Stockholder's Eq($Mil.)" ) )
	),
	Y[1] << Bar Chart( 1 ),
	Y[2] << Bar Chart( 1 ),
	Y[3] << Line Chart( 1 ),
	Y[4] << Bar Chart( 1 ), 
);
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X-axis to Type.
4. Add Sales mean to Y-axis.
5. Add Profit mean to Y-axis.
6. Add Assets mean to Y-axis.
7. Add Stockholders' Eq mean to Y-axis.
8. Configure first Y-axis as bar chart.
9. Configure second Y-axis as bar chart.
10. Configure third Y-axis as line chart.
11. Configure fourth Y-axis as bar chart.



### Example 5
> **Summary**: Creates a bar chart to visualize profit data, configuring the category axis for rows and setting the Y variable to Profit.

<!-- Keywords: #JSLScriptingLanguage, #BarChart, #CategoryAxis, #DataVisualization, #ProfitAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( Y( :Name( "Profit($M)" ) ), Category Axis << {Axis Name( Rows )}, Bar Chart( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set Y variable to Profit.
4. Configure Category Axis for rows.
5. Generate bar chart.



## Fit using Text Edit Box
> **Summary**: Creates a bar chart to visualize mean sales and profit by category, utilizing text edit boxes, labels, and rendering styles.

<!-- Keywords: #JMPScriptingLanguage, #BarChart, #DataVisualization, #TextEditBox, #CategoryLabels -->

**Code**:
```jsl
cert text edit bx = {Text Edit Box( "Y", default font id( 9 ), wrapWidth( 277 ), justification( 1 ), vjustification( 1 ), left )};
cert title = {Title( "Type" )};
cert labels = {"Labels", Labels( "Aerospace", "Beverages", "Computer", "Drugs", "Oil", "Soap" )};
cert label = {label( "Mean(Sales($M))" ), label( "Mean(Profit($M))" )};
cert rs = {rs( 0, Circle, 4 ), rs( 0, Plus, 3 )};
cert color = {Fill Color( 3 ), Fill Color( 4 ), Fill Color( 3 ), Fill Color( 4 ), Fill Color( 4 ), Fill Color( 0 ), Fill Color( 4 ),
Fill Color( 0 ), Fill Color( 4 ), Fill Color( 0 ), Fill Color( 4 ), Fill Color( 0 ), Fill Color( 4 ), Fill Color( 0 ), Fill Color( 4 ),
Fill Color( 0 ), Fill Color( 3 ), Fill Color( 0 ), Fill Color( 3 ), Fill Color( 0 ), Fill Color( 3 ), Fill Color( 0 ), Fill Color( 3 ),
Fill Color( 0 ), Fill Color( 3 ), Fill Color( 0 ), Fill Color( 3 ), Fill Color( 0 )};
cert rect = {Rect( 0.902527075812274, 205.69, 0.953068592057762, 0, 1 ), Rect(
	0.740072202166065,
	616.938461538462,
	0.790613718411552,
	0,
	1
), Rect( 0.577617328519856, 690.075, 0.628158844765343, 0, 1 ), Rect( 0.418772563176895, 257.259090909091, 0.469314079422383, 0, 1 ),
Rect( 0.256317689530686, 590.885714285714, 0.306859205776173, 0, 1 ), Rect( 0.0938628158844765, 238.677777777778, 0.144404332129964, 0, 1 ),
Rect( 0.851985559566787, 4173.32727272727, 0.902527075812274, 0, 1 ), Rect( 0.689530685920578, 13329.6185185185, 0.740072202166065, 0, 1 ),
Rect( 0.527075812274368, 5070.25, 0.577617328519856, 0, 1 ), Rect( 0.368231046931408, 5792.01363636364, 0.418772563176895, 0, 1 ),
Rect( 0.205776173285199, 6249.72857142857, 0.256317689530686, 0, 1 ), Rect(
	0.0433212996389892,
	7357.05555555556,
	0.0938628158844765,
	0,
	1
)};
dt = Open("data_table.jmp");
obj = Chart(
	X( :Type ),
	Y( Mean( :Name( "Sales($M)" ) ), Mean( :Name( "Profit($M)" ) ) ),
	Bar Chart( 1 ),
	Y[1] << Overlay Color( 4 ),
	Y[2] << Overlay Color( 3 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create text edit box for "Y".
3. Set title "Type".
4. Define category labels.
5. Label mean sales and profit.
6. Define rendering styles for shapes.
7. Set fill colors for elements.
8. Define rectangles for chart elements.
9. Create bar chart with type on X-axis.
10. Overlay mean sales and profit with different colors.



