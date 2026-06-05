# EWMA Control Chart

### Example 1
> **Summary**: Visualizes an EWMA control chart to monitor the Gap variable over time, with subgroups defined by the Sample variable.

<!-- Keywords: #EWMAControlChart, #ControlCharts, #TimeSeriesAnalysis, #Subgrouping, #JMPScriptingLanguage -->

**Code**:
```jsl
// EWMA Chart
// Open data table
dt = Open("data_table.jmp");
// EWMA Chart
EWMA Control Chart(
	Y( :Gap ),
	Subgroup( :Sample )
);
```

**Code Explanation**:

1. Open data table.
2. Create EWMA control chart.
3. Set response variable.
4. Define subgroup variable.



### Example 2
> **Summary**: Visualizes the Gap variable over time using an EWMA Control Chart, with overall mean as target and subgrouping by Date.

<!-- Keywords: #EWMAControlChart, #TimeSeriesAnalysis, #QualityControl, #StatisticalProcessControl, #JMPScriptingLanguage -->

**Code**:
```jsl
// EWMA Chart
// Open data table
dt = Open("data_table.jmp");
// EWMA Chart
EWMA Control Chart(
	Y( :Gap ),
	Subgroup( :Date ),
	Use Overall Mean for Target( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create EWMA chart.
3. Set response variable.
4. Define subgroup variable.
5. Use overall mean as target.



### Example 3
> **Summary**: Generates an EWMA Control Chart of Temperature using the provided data table, with Time stamp as the subgrouping variable.

<!-- Keywords: #EWMAControlChart, #JSLScriptingLanguage, #DataVisualization, #QualityControl, #TimeSeriesAnalysis -->

**Code**:
```jsl
// EWMA Control Chart of Temp
// Open data table
dt = Open("data_table.jmp");
// EWMA Control Chart of Temp
EWMA Control Chart(
	Y( :Temp ),
	Subgroup( :Time stamp )
);
```

**Code Explanation**:

1. Open data table.
2. Create EWMA control chart.
3. Set Y variable to Temp.
4. Use Time stamp for subgrouping.



### Example 4
> **Summary**: Creates and configures an EWMA Control Chart for a dataset, including setting variables, grouping by species, centering data, enabling beyond limits testing, and displaying residuals charts.

<!-- Keywords: #EWMAControlChart, #JMPScriptingLanguage, #DataAnalysis, #QualityControl, #StatisticalProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << EWMA Control Chart(
	Y( Sepal Length, Sepal width, Petal length, Petal width ),
	Subgroup( :Species ),
	Center Data( 1 ),
	Test Beyond Limits( 1 ),
	Constant Limits( 1 )
);
obj << Show Residuals Chart( 1 );
rpt = obj << report;
obj << Lambda( {.5, 0.4, 0.5, 0.4} );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create EWMA control chart.
3. Set variables for analysis.
4. Group by species.
5. Center data.
6. Enable beyond limits test.
7. Use constant limits.
8. Display residuals chart.
9. Update lambda values.
10. Generate report again.



### Example 5
> **Summary**: Creates and analyzes an EWMA Control Chart for a data table, utilizing subgrouping by operator and specifying constant limits with sigma levels 2 and 3.

<!-- Keywords: #EWMAControlChart, #JSLScriptingLanguage, #DataAnalysis, #QualityControl, #StatisticalProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << EWMA Control Chart(
	Y( Measurement, Standard ),
	Subgroup( :Operator ),
	Center Data( 1 ),
	Constant Limits( 1 ),
	Sigma( {2, 3} )
);
obj2 = obj << redo analysis;
rpt = obj2 << report;
```

**Code Explanation**:

1. Open data table.
2. Create EWMA control chart.
3. Set measurement and standard.
4. Define subgroup by operator.
5. Center data enabled.
6. Use constant limits.
7. Set sigma levels 2 and 3.
8. Redo the analysis.
9. Generate report.



### Example 6
> **Summary**: Creates and configures an EWMA Control Chart for quality control analysis, utilizing a Y variable and subgroup labels.

<!-- Keywords: #EWMAControlChart, #QualityControl, #StatisticalProcessControl, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = EWMA Control Chart( Y( :y ), Subgroup( :Labels ), Test Beyond Limits( 1 ), Sigma( 0.5 ) );
obj << constant limits( 1 );
obj << Reset to Defaults( 1 );
obj << constant limits( 0 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create EWMA control chart.
3. Set Y variable to :y.
4. Use :Labels for subgroups.
5. Enable test beyond limits.
6. Set sigma to 0.5.
7. Apply constant limits.
8. Reset to default settings.
9. Disable constant limits.
10. Generate report.



### Example 7
> **Summary**: Creates an EWMA control chart for a specified Y variable and subgroup, generating a report and saving summaries to a new table.

<!-- Keywords: #EWMAControlChart, #JMPScriptingLanguage, #DataTableOperations, #ReportGeneration, #SummarySaving -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << EWMA Control Chart( Y( Part ), Subgroup( :Code ) );
rpt = obj << report;
dtsum = obj << save summaries;
```

**Code Explanation**:

1. Open data table;
2. Create EWMA control chart.
3. Set Y variable as "Part".
4. Set subgroup variable as "Code".
5. Retrieve chart report.
6. Save summaries to new table.



### Example 8
> **Summary**: Creates an EWMA control chart with amplitude as the Y variable, enabling test beyond limits and using constant limits, generating a report object.

<!-- Keywords: #EWMAControlChart, #JSLScriptingLanguage, #DataAnalysis, #QualityControl, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << EWMA Control Chart( Y( amplitude ), Test Beyond Limits( 1 ), Constant Limits( 1 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create EWMA control chart.
3. Set Y variable to amplitude.
4. Enable test beyond limits.
5. Use constant limits.
6. Generate report object.



### Example 9
> **Summary**: Creates and creates a report for an EWMA control chart for Y4, with centered data and saved summaries.

<!-- Keywords: #EWMAControlChart, #JMPScriptingLanguage, #DataTable, #Reporting, #ControlCharts -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << EWMA Control Chart( Y( :Y4 ), Center Data( 1 ) );
dtsum = obj << save summaries;
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create EWMA control chart for Y4.
3. Center data on chart.
4. Save summaries from chart.
5. Generate report from chart.



### Example 10
> **Summary**: Creates an EWMA control chart for subgroup analysis, using Whole Plots as subgroups and variable C2 as Y.

<!-- Keywords: #EWMAControlChart, #SubgroupAnalysis, #WholePlots, #JMPScriptingLanguage, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << EWMA Control Chart( Y( :C2 ), Subgroup( :Whole Plots ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create EWMA control chart.
3. Set Y variable to C2.
4. Use Whole Plots for subgroups.
5. Generate report object.



### Example 11
> **Summary**: Creates an EWMA Control Chart with Group Means, Relative Sizes, Grand Mean, Contributions to Delta Squared, and Delta, including a Residuals Chart.

<!-- Keywords: #EWMAControlChart, #JMPScriptingLanguage, #DataAnalysis, #StatisticalProcessControl, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << EWMA Control Chart(
	Y( Group Means, Relative Sizes, Grand Mean, Contributions to Delta Squared, Delta ),
	Show Residuals Chart( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create EWMA Control Chart.
3. Include Group Means in analysis.
4. Include Relative Sizes in analysis.
5. Include Grand Mean in analysis.
6. Include Contributions to Delta Squared in analysis.
7. Include Delta in analysis.
8. Enable Residuals Chart.
9. Retrieve chart report.
10. Assign report to variable rpt.



### Example 12
> **Summary**: Creates an EWMA control chart for the Gap variable, with constant limits and ARL display.

<!-- Keywords: #EWMAControlChart, #JMPScriptingLanguage, #StatisticalProcessControl, #QualityControl, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << EWMA Control Chart( Y( :Gap ), Show ARL( 1 ), Constant Limits( 1 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Create EWMA control chart.
3. Set Y variable.
4. Show ARL.
5. Use constant limits.
6. Generate report object.



### Example 13
> **Summary**: Creates and configures an EWMA control chart, enabling beyond limits testing and generating a report object.

<!-- Keywords: #EWMAControlChart, #BeyondLimitsTesting, #ReportGeneration, #JMPScriptingLanguage, #TimeSeriesAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << EWMA Control Chart( Y( :y ), Subgroup( :Labels ), Test Beyond Limits( 1 ) );
dt << Delete Columns( dt, "Labels" );
obj << Lambda( .5 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create EWMA control chart.
3. Set subgroup variable.
4. Enable beyond limits test.
5. Remove Labels column.
6. Set lambda value.
7. Generate report object.



### Example 14
> **Summary**: Creates an EWMA control chart for a subset of rows in a data table, with interactive features to exclude and hide specific rows.

<!-- Keywords: #EWMAControlChart, #DataTableOperations, #InteractiveFiltering, #JMPScriptingLanguage, #ControlCharts -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << EWMA Control Chart( Y( :Weight 2 ), Subgroup( :Sample ), Show Excluded Region( 1 ) );
dt << select rows( {29, 30, 31, 32} ) << exclude << hide;
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create EWMA control chart.
3. Select specific rows.
4. Exclude selected rows.
5. Hide excluded rows.
6. Generate report object.



### Example 15
> **Summary**: Creates an EWMA control chart for population analysis, utilizing the Y variable '2010 Population' and subgroup variable 'Change in Population', then deletes the original columns.

<!-- Keywords: #EWMAControlChart, #BivariateAnalysis, #DataTableOperations, #JMPScriptingLanguage, #TimeSeriesAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << EWMA Control Chart( Y( :"2010 Population"n ), Subgroup( :Change in Population ) );
dt << delete columns( "2010 Population", "Change in Population" );
```

**Code Explanation**:

1. Open data table.
2. Create EWMA control chart.
3. Set Y variable.
4. Set subgroup variable.
5. Delete original columns.



### Example 16
> **Summary**: Creates and updates an EWMA control chart for gap analysis, utilizing subgrouping by date and enabling parameters report.

<!-- Keywords: #EWMAControlChart, #GapAnalysis, #Subgrouping, #ParametersReport, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << EWMA Control Chart( Y( :Gap ), Subgroup( :Date ), Parameters Report( 1 ), Use Overall Mean for Target( 1 ), Center Data( 1 ) );
rpt = obj << report;
obj << Use Overall Mean for Target( 0 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create EWMA control chart.
3. Set Y variable to Gap.
4. Set subgroup to Date.
5. Enable parameters report.
6. Use overall mean for target.
7. Center data.
8. Generate initial report.
9. Disable overall mean for target.
10. Generate updated report.



### Example 17
> **Summary**: Creates an EWMA control chart for Change in Population, with Y variable set to 2010 Population and subgrouping by Change in Population, while capturing log events.

<!-- Keywords: #EWMAControlChart, #LogCapture, #JMPScriptingLanguage, #DataAnalysis, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << EWMA Control Chart( Y( :"2010 Population"n ), Subgroup( :Change in Population ) );
actLog = Log Capture( dt << select all rows << exclude );
```

**Code Explanation**:

1. Open data table.
2. Create EWMA control chart.
3. Set Y variable.
4. Set subgroup variable.
5. Log capture begins.
6. Select all rows.
7. Exclude selected rows.
8. End log capture.



### Example 18
> **Summary**: Creates an EWMA control chart with constant limits and test beyond limits, while also hiding and excluding rows, capturing log information, and generating a report.

<!-- Keywords: #EWMAControlChart, #ConstantLimits, #TestBeyondLimits, #LogCapture, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << EWMA Control Chart( Y( amplitude ), Test Beyond Limits( 1 ), constant limits( 1 ) );
dt << select all rows << hide << exclude;
Log Capture( obj << restart EWMA after empty subgroup );
dt << clear selected rowstates;
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create EWMA control chart.
3. Apply test beyond limits.
4. Use constant limits.
5. Select all rows.
6. Hide selected rows.
7. Exclude hidden rows.
8. Log capture on restart.
9. Clear selected row states.
10. Generate report.



### Example 19
> **Summary**: Creates an EWMA Control Chart for monitoring sample data, with customizable Y variable, subgrouping by Age, and sigma value set to 100.

<!-- Keywords: #EWMAControlChart, #JSLScriptingLanguage, #DataVisualization, #QualityControl, #StatisticalProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << EWMA Control Chart( Y( :Sample # ), Subgroup( :Age ), Sigma( 100 ) );
obj << Lambda( .4 );
obj << reset to defaults;
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create EWMA control chart.
3. Set Y variable.
4. Set subgroup variable.
5. Set sigma value.
6. Modify lambda parameter.
7. Reset chart to defaults.
8. Generate report object.



## EWMA Control Chart using N Items
### Example 1
> **Summary**: Creates and configures an EWMA control chart for diameter data, generating a report with specified limits and targets.

<!-- Keywords: #JSLScripting, #EWMAControlChart, #DataVisualization, #StatisticalAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
beforeItems = N Items( Window() );
obj = dt << EWMA Control Chart( Save Summaries, Y( :Y4 ), Lambda( 0.4462 ), Sigma( 1 ) );
afterItems = N Items( Window() );
  
Close( dt, no save );
dt = New Table( "Untitled 15",
	Add Rows( 30 ),
	Set Header Height( 55 ),
	New Column( "Sample",
		Numeric,
		"Continuous",
		Format( "Best", 12 ),
		Set Values( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30] )
	),
	New Column( "Diameter",
		Numeric,
		"Continuous",
		Format( "Best", 12 ),
		Set Values(
			[24.05, 23.99, 23.95, 23.93, 23.97, 24.06, 24.06, 24.1, 23.98, 24.03, 23.91, 24.06, 24.05, 23.96, 23.98, 24.06, 24.01, 24,
			23.93, 23.92, 24.09, 24.11, 24.05, 23.98, 23.98, 24.06, 24.02, 24.06, 23.97, 23.96]
		)
	)
);
obj = dt << EWMA Control Chart( Y( :Diameter ), Test Beyond Limits( 1 ), Target( 24.04 ), Sigma( 0.03 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Count initial window items.
3. Create EWMA control chart for Y4.
4. Count final window items.
5. Close dataset without saving.
6. Create new table "Untitled 15".
7. Add 30 rows to new table.
8. Set header height to 55.
9. Add "Sample" column with values.
10. Add "Diameter" column with values.
11. Create EWMA control chart for Diameter.
12. Generate report from chart.



### Example 2
> **Summary**: Creates an EWMA control chart for a specified Y variable, with customizable lambda and sigma values, and saves summaries for further analysis.

<!-- Keywords: #EWMAControlChart, #JSLScriptingLanguage, #DataTable, #ControlCharts, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
beforeItems = N Items( Window() );
obj = dt << EWMA Control Chart( Save Summaries, Y( :Y4 ), Lambda( 0.4462 ), Sigma( 1 ) );
afterItems = N Items( Window() );
```

**Code Explanation**:

1. Open data table;
2. Count initial window items.
3. Create EWMA control chart.
4. Specify Y variable as Y4.
5. Set lambda value to 0.4462.
6. Set sigma value to 1.
7. Save summaries for the chart.
8. Count final window items.
9. Compare item counts before and after.



## EWMA Control Chart using Select Rows
> **Summary**: Creates an EWMA control chart from a data table, selecting the first row and excluding it, while setting height as the Y variable and age as the subgroup.

<!-- Keywords: #EWMAControlChart, #JSLScriptingLanguage, #DataVisualization, #QualityControl, #StatisticalProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( {1} ) << exclude << hide;
obj = dt << EWMA Control Chart( Y( :height ), Subgroup( :age ) );
dtsum = obj << Save summaries;
```

**Code Explanation**:

1. Open data table;
2. Select first row.
3. Exclude selected row.
4. Hide excluded row.
5. Create EWMA control chart.
6. Set height as Y variable.
7. Set age as subgroup.
8. Save summary data.
9. Store summary data table.



