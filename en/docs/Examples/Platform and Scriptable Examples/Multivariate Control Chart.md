# Multivariate Control Chart

### Example 1
> **Summary**: Creates a multivariate control chart to monitor and analyze multiple quality characteristics in a data table, utilizing subgrouping for enhanced visualization.

<!-- Keywords: #MultivariateControlChart, #JSLScriptingLanguage, #QualityCharacteristics, #Subgrouping, #DataVisualization -->

**Code**:
```jsl
// Save T Square
// Open data table
dt = Open("data_table.jmp");
// Save T Square
dt = Current Data Table();
MyTchart =
Multivariate Control Chart(
	Y(
		:Diameter1, :Diameter2,
		:Diameter3, :Diameter4, :Length1,
		:Length2
	),
	Subgroup( :subgroup )
);
MyTchart << Save T Square;
```

**Code Explanation**:

1. Open data table.
2. Set current data table.
3. Create multivariate control chart.
4. Specify response variables.
5. Define subgroup variable.
6. Save T Square.



### Example 2
> **Summary**: Creates a multivariate control chart to monitor the quality of diameter and length measurements, using subgrouping and specifying an alpha level.

<!-- Keywords: #MultivariateControlChart, #JMPScriptingLanguage, #QualityControl, #Subgrouping, #AlphaLevel -->

**Code**:
```jsl
// Multivariate Control Chart
// Open data table
dt = Open("data_table.jmp");
// Multivariate Control Chart
Multivariate Control Chart(
	Y(
		:Diameter1, :Diameter2,
		:Diameter3, :Diameter4, :Length1,
		:Length2
	),
	Subgroup( :subgroup ),
	Set Alpha Level( 0.0027 )
);
```

**Code Explanation**:

1. Open data table.
2. Create multivariate control chart.
3. Specify variables.
4. Define subgroup.
5. Set alpha level.



### Example 3
> **Summary**: Visualizes a multivariate control chart to monitor and detect changes in large and medium-sized variables, utilizing Principal Component 1 for dimensionality reduction and Phase Detection for anomaly detection.

<!-- Keywords: #MultivariateControlChart, #PrincipalComponents, #PhaseDetection, #JMPScriptingLanguage, #QualityControl -->

**Code**:
```jsl
// Multivariate Control Chart
// Open data table
dt = Open("data_table.jmp");
// Multivariate Control Chart
Multivariate Control Chart(
	Y( :Large, :Medium ),
	Principal Components( 1 ),
	Phase Detection( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Create Multivariate Control Chart.
3. Set variables: Large, Medium.
4. Use Principal Component 1.
5. Enable Phase Detection.



### Example 4
> **Summary**: Calculates principal components and generates a new column with the sum of squares for a given data table, utilizing Multivariate Control Chart and formula-based calculations.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentAnalysis, #MultivariateControlChart, #DataTransformation, #FormulaCalculation -->

**Code**:
```jsl
// Principal Component Analysis
// Open data table
dt = Open("data_table.jmp");
// Principal Component Analysis
Multivariate Control Chart(
	Y(
		:Fuel, :Steam Flow, :Steam Temp,
		:MW, :Cool Temp, :Pressure
	)
) << Save T Square <<
Save Principal Components;
Current Data Table() <<
New Column( :PCA Column,
	Continuous,
	Formula(
		:Prin1 ^ 2 + :Prin2 ^ 2 + :Prin3
		 ^ 2 + :Prin4 ^ 2 + :Prin5 ^ 2
		+:Prin6 ^ 2
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform PCA analysis.
3. Save T Square.
4. Save Principal Components.
5. Create new column.
6. Set column type continuous.
7. Define formula for PCA Column.
8. Sum squares of principal components.



### Example 5
> **Summary**: Visualizes a multivariate control chart to monitor and analyze the thickness measurements of multiple samples, utilizing T Square partitioning and principal components.

<!-- Keywords: #MultivariateControlChart, #T-SquarePartitioned, #PrincipalComponents, #JMPScriptingLanguage, #ThicknessMeasurements -->

**Code**:
```jsl
// Multivariate Control Chart
// Open data table
dt = Open("data_table.jmp");
// Multivariate Control Chart
Multivariate Control Chart(
	Y(
		:Thickness 01, :Thickness 02,
		:Thickness 03, :Thickness 04,
		:Thickness 05, :Thickness 06,
		:Thickness 07, :Thickness 08,
		:Thickness 09, :Thickness 10,
		:Thickness 11, :Thickness 12
	),
	T Square Partitioned( 1 ),
	Principal Components( 1 ),
	Set Alpha Level(
		0.00270000000000004
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create multivariate control chart.
3. Select multiple thickness columns.
4. Enable T Square partitioned.
5. Enable principal components.
6. Set alpha level.



### Example 6
> **Summary**: Creates a multivariate control chart with T Square partitioned, show correlation, and show inverse covariance, while setting report title and closing T Square with all principal components.

<!-- Keywords: #MultivariateControlChart, #TSquarePartitioned, #CorrelationMatrix, #InverseCovariance, #JMPReport -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Multivariate Control Chart(
	Y( :Large, :Medium ),
	Principal Components( 0 ),
	T Square Partitioned( 1 ),
	Show Correlation( 1 ),
	Show Inverse Covariance( 1 ),
	SendToReport(
		Dispatch( {}, "Multivariate Control Chart", OutlineBox,
			{Set Title( "T Square Partitioned 1, Show Correlation, Show Inverse Covariance" )}
		),
		Dispatch( {}, "T Square with All Principal Components", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open table.
2. Create multivariate control chart.
3. Set Y variables.
4. Disable principal components.
5. Enable T Square partitioned.
6. Enable show correlation.
7. Enable show inverse covariance.
8. Set report title.
9. Close T Square with all components.



### Example 7
> **Summary**: Creates a multivariate control chart with scatterplot matrix visualization, utilizing principal components and phase detection.

<!-- Keywords: #MultivariateControlChart, #ScatterplotMatrix, #PrincipalComponents, #PhaseDetection, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Multivariate Control Chart(
	Y( :Large, :Medium ),
	Principal Components( 1 ),
	Phase Detection( 1 ),
	SendToReport(
		Dispatch( {"Scatterplot Matrix"}, "101", ScaleBox, {Max( 100.1625 )} ),
		Dispatch( {"Scatterplot Matrix"}, "100", ScaleBox, {Min( 0.155 ), Inc( 2 )} ),
		Dispatch( {"Scatterplot Matrix"}, FrameBox( 2 ), Frame Size( 41, 40 ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create multivariate control chart.
3. Set Y variables: Large, Medium.
4. Use principal components: 1.
5. Enable phase detection.
6. Adjust scatterplot matrix scale.
7. Set maximum value: 100.1625.
8. Set minimum value: 0.155.
9. Set increment value: 2.
10. Resize frame box: 41x40.



### Example 8
> **Summary**: Creates a multivariate control chart with T Square partitioned, showing correlation and inverse covariance matrices, and customizing the report title and frame size.

<!-- Keywords: #MultivariateControlChart, #TSquarePartitioned, #CorrelationMatrix, #InverseCovariance, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Multivariate Control Chart(
	Y( :Large, :Medium ),
	Principal Components( 0 ),
	T Square Partitioned( 1 ),
	Show Correlation( 1 ),
	Show Inverse Covariance( 1 ),
	SendToReport(
		Dispatch( {}, "Multivariate Control Chart", OutlineBox,
			{Set Title( "T Square Partitioned 1, Show Correlation, Show Inverse Covariance" )}
		),
		Dispatch( {}, "T Square with All Principal Components", OutlineBox, {Close( 1 )} ),
		Dispatch( {"T Square with All Principal Components"}, FrameBox, {Frame Size( 53, 277 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create multivariate control chart.
3. Set Y variables.
4. Disable principal components.
5. Enable T Square partitioned.
6. Show correlation matrix.
7. Show inverse covariance matrix.
8. Set report title.
9. Close all principal components plot.
10. Resize frame.



### Example 9
> **Summary**: Creates a multivariate control chart with customized scatterplot matrix, using principal components and phase detection.

<!-- Keywords: #MultivariateControlChart, #ScatterplotMatrix, #PrincipalComponents, #PhaseDetection, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Multivariate Control Chart(
	Y( :Large, :Medium ),
	Principal Components( 1 ),
	Phase Detection( 1 ),
	SendToReport(
		Dispatch( {"Scatterplot Matrix"}, "101", ScaleBox, {Max( 100.1625 )} ),
		Dispatch( {"Scatterplot Matrix"}, "100", ScaleBox, {Min( 0.155 ), Inc( 2 )} ),
		Dispatch( {"Scatterplot Matrix"}, FrameBox( 2 ), Frame Size( 41, 40 ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create multivariate control chart.
3. Set Y variables: Large, Medium.
4. Use principal components: 1.
5. Enable phase detection: 1.
6. Customize scatterplot matrix.
7. Set max scale: 100.1625.
8. Set min scale: 0.155.
9. Set increment: 2.
10. Resize frame size: 41x40.



### Example 10
> **Summary**: Creates a multivariate control chart and report, combining data table and chart in a JMP application on Windows platforms.

<!-- Keywords: #MultivariateControlChart, #JMPApplication, #Windows, #DataVisualization, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
mcc = dt << Multivariate Control Chart( Y( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ), Principal Components( 1 ) );
If( Host is( "Windows" ),
	Main Menu( "File:New:Application" );
	windows = Get Window List();
	closeMe = windows[N Items( windows )];
	closeMe << Close Window;
);
app = JMP App();
app << Set Name( "MCC App" );
app << Combine Windows( {mcc << Report, dt} );
(app << Get Modules)[1] << Set Window Title( "My MCC Report" );
app << Run;
```

**Code Explanation**:

1. Open data table.
2. Create multivariate control chart.
3. Check if host is Windows.
4. Open new application.
5. Get window list.
6. Identify last window.
7. Close last window.
8. Create JMP app.
9. Set app name.
10. Combine chart and data table in app.



### Example 11
> **Summary**: Creates a multivariate control chart using principal components and phase detection, with report generation.

<!-- Keywords: #MultivariateControlChart, #PrincipalComponents, #PhaseDetection, #ReportGeneration, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multivariate Control Chart( Y( :Large, :Medium ), Principal Components( 1 ), Phase Detection( 1 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Multivariate Control Chart.
3. Set Y variables: Large, Medium.
4. Use 1 Principal Component.
5. Enable Phase Detection.
6. Generate report object.



### Example 12
> **Summary**: Creates a multivariate control chart to monitor heat and count data, with change point detection enabled.

<!-- Keywords: #MultivariateControlChart, #ChangePointDetection, #JMPScriptingLanguage, #DataVisualization, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multivariate Control Chart( Y( :heat ), Freq( :Count ), Change Point Detection( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Assign data table to variable.
3. Create multivariate control chart.
4. Set Y variable to heat.
5. Set frequency to Count.
6. Enable change point detection.
7. Set change point detection level to 1.



### Example 13
> **Summary**: Creates a multivariate control chart for Health Expenditure per Capita, utilizing principal components analysis and change point detection.

<!-- Keywords: #MultivariateControlChart, #PrincipalComponentsAnalysis, #ChangePointDetection, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multivariate Control Chart( Y( :Health Expenditure per Capita ), Principal Components( 1 ), Change Point Detection( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create multivariate control chart.
3. Set Y variable to Health Expenditure.
4. Use principal components analysis.
5. Enable change point detection.



### Example 14
> **Summary**: Creates a Multivariate Control Chart from a selected subset of rows in a data table, utilizing Principal Components and Change Point Detection.

<!-- Keywords: #MultivariateControlChart, #PrincipalComponents, #ChangePointDetection, #DataSubsetSelection, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select
rows(
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
	37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
) << hide << exclude;
obj = dt << Multivariate Control Chart(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Principal Components( 1 ),
	Change Point Detection( 1 ), 
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Select specific rows.
3. Hide selected rows.
4. Exclude selected rows.
5. Create Multivariate Control Chart.
6. Set Y variables.
7. Enable Principal Components.
8. Enable Change Point Detection.
9. Generate report object.
10. Save report.



