# CUSUM Control Chart

### Example 1
> **Summary**: Creates a CUSUM Control Chart to monitor the performance of verbal and math scores across different years for each state, utilizing the provided data table.

<!-- Keywords: #CUSUMControlChart, #DataVisualization, #JMPScriptingLanguage, #QualityControl, #StatisticalProcessControl -->

**Code**:
```jsl
// CUSUM Control Chart
// Open data table
dt = Open("data_table.jmp");
// CUSUM Control Chart
CUSUM Control Chart(
	Y( :Y ),
	Lower Side( 1 ),
	Target( 100 ),
	Sigma( 10 )
);
```

**Code Explanation**:

1. Open data table.
2. Create CUSUM Control Chart.
3. Set Y variable.
4. Enable lower side.
5. Set target value.
6. Set sigma value.



### Example 2
> **Summary**: Creates a CUSUM control chart to monitor and analyze the performance of verbal and math scores across different years for each state, utilizing the specified variables.

<!-- Keywords: #CUSUMControlChart, #DataAnalysis, #JMPScriptingLanguage, #StatisticalProcessControl, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << CUSUM Control Chart( Y( :Outcome, :Gallbladder, :Hypertension ), X( :Pair ) );
rpt = Current Report();
```

**Code Explanation**:

1. Open data table.
2. Create CUSUM control chart.
3. Set Y variables: Outcome, Gallbladder, Hypertension.
4. Set X variable: Pair.
5. Store chart object in "obj".
6. Get current report object.
7. Store report object in "rpt".



### Example 3
> **Summary**: Creates a CUSUM Control Chart to monitor and analyze the performance of verbal and math scores across different years for each state.

<!-- Keywords: #CUSUMControlChart, #ARLProfiler, #JMPScriptingLanguage, #DataAnalysis, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << CUSUM Control Chart(
	Y( :dose ),
	X( :response ),
	Lower Side( 1 ),
	ARL Profiler( Profiler( 1, Term Value( H( 5, Min( 0 ), Lock( 0 ), Show( 1 ) ), Shift( 1, Lock( 0 ), Show( 1 ) ) ) ) )
);
rpt = obj << report;
Log Capture( obj << K( 3 ) );
```

**Code Explanation**:

1. Open data table;
2. Create CUSUM Control Chart.
3. Set Y variable to "dose".
4. Set X variable to "response".
5. Enable Lower Side.
6. Configure ARL Profiler.
7. Set H value to 5.
8. Set Min to 0.
9. Capture log output.
10. Display report.



### Example 4
> **Summary**: Creates a CUSUM control chart to monitor performance across different years for each state, utilizing the provided data table.

<!-- Keywords: #CUSUMControlChart, #ControlChart, #DataVisualization, #JMPScriptingLanguage, #StatisticalProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << CUSUM Control Chart( Y( :Outcome ), X( :Pair ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create CUSUM control chart.
3. Assign chart to object.
4. Generate report from chart.



### Example 5
> **Summary**: Creates a CUSUM control chart to monitor and analyze performance metrics across different years for each state.

<!-- Keywords: #CUSUMControlChart, #JMPScriptingLanguage(JSL), #DataAnalysis, #QualityControl, #StatisticalProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << CUSUM Control Chart( Y( :NPN1 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create CUSUM control chart.
3. Assign chart object.
4. Generate report.



### Example 6
> **Summary**: Creates a CUSUM control chart to monitor and analyze performance metrics, with customizable target value, sigma value, and ARL profiler configuration.

<!-- Keywords: #CUSUMControlChart, #JSLScriptingLanguage, #PerformanceMetrics, #QualityControl, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << CUSUM Control Chart(
	Y( :Y ),
	Show ARL( 1 ),
	Target( 100 ),
	Sigma( 10 ),
	ARL Profiler( Profiler( 1, Term Value( h( 5, Min( 0 ), Lock( 0 ), Show( 1 ) ), k( 0, Lock( 0 ), Show( 1 ) ) ) ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create CUSUM control chart.
3. Set Y variable.
4. Display ARL for one defect.
5. Set target value.
6. Define sigma value.
7. Configure ARL profiler.
8. Lock h parameter.
9. Show h parameter.
10. Lock k parameter.
11. Show k parameter.
12. Generate report object.



### Example 7
> **Summary**: Creates a CUSUM Control Chart to monitor and analyze performance metrics across different years for each state, utilizing various parameters such as Y variable, X variable, shift value, K parameter, and H parameter.

<!-- Keywords: #CUSUMControlChart, #JMPScriptingLanguage, #DataAnalysis, #PerformanceMetrics, #StatisticalProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << CUSUM Control Chart(
	Y( :parent ht ),
	X( :child ht ),
	Show ARL( 0 ),
	Lower Side( 1 ),
	Parameters Report( 1 ),
	Data Units( 1 ),
	Shift( 2 ),
	K( 1 ),
	H( 5 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Create CUSUM chart.
3. Set Y variable.
4. Set X variable.
5. Hide ARL plot.
6. Enable lower side.
7. Show parameters report.
8. Use data units.
9. Set shift value.
10. Set K parameter.
11. Set H parameter.
12. Generate report.



### Example 8
> **Summary**: Creates a CUSUM control chart to monitor Resistance values across different Instruments, with customizable settings for ARL, Lower Side detection, and Shift value.

<!-- Keywords: #CUSUMControlChart, #JSLScriptingLanguage, #DataVisualization, #QualityControl, #StatisticalProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << CUSUM Control Chart(
	Y( :Resistance ),
	X( :Instrument ),
	Save Summaries,
	Show ARL( 1 ),
	Lower Side( 1 ),
	Shift( 1 ),
	Sigma( 1 ),
	HeadStart( 1 ),
	H( 2 ),
	ARL Profiler( Profiler( 1, Term Value( H( 2, Min( 0 ), Lock( 0 ), Show( 1 ) ), Shift( 1, Lock( 0 ), Show( 1 ) ) ) ) )
);
dtsum = Data Table("data_table");
```

**Code Explanation**:

1. Open data table.
2. Create CUSUM control chart.
3. Set Y variable to Resistance.
4. Set X variable to Instrument.
5. Save summaries to data table.
6. Show ARL for 1.
7. Enable lower side detection.
8. Set shift value to 1.
9. Set sigma to 1.
10. Set head start to 1.
11. Set H value to 2.
12. Configure ARL profiler.
13. Lock H value.
14. Show H value.
15. Lock shift value.
16. Show shift value.
17. Access summary data table.



### Example 9
> **Summary**: Creates a CUSUM control chart to monitor and analyze performance metrics across specific rows, utilizing target and sigma levels.

<!-- Keywords: #CUSUMControlChart, #JMPScriptingLanguage, #DataTableOperations, #StatisticalProcessControl, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select rows( {25, 26, 27, 28, 29, 30} ) << exclude << hide;
obj = dt << CUSUM Control Chart( Y( :Y ), Target( 100 ), Sigma( 10 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Select specific rows.
3. Exclude selected rows.
4. Hide excluded rows.
5. Create CUSUM control chart.
6. Set Y variable.
7. Define target value.
8. Specify sigma level.
9. Generate report object.
10. Save report object.



### Example 10
> **Summary**: Creates a CUSUM control chart for NPN1 data, utilizing process mean for center line and generating a report object.

<!-- Keywords: #CUSUMControlChart, #JMPScriptingLanguage, #DataAnalysis, #ProcessMean, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << CUSUM Control Chart( Y( :NPN1 ), Data Units( 1 ), Use Process Mean for Center Line( 1 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create CUSUM control chart.
3. Set Y variable to NPN1.
4. Set data units to 1.
5. Use process mean for center line.
6. Generate report object.



### Example 11
> **Summary**: Creates and configures a CUSUM control chart to monitor Thickness 01 values, with customizable parameters for ARL, target value, sigma, head start, and test beyond limits.

<!-- Keywords: #CUSUMControlChart, #JMPScriptingLanguage, #DataAnalysis, #ProcessMonitoring, #StatisticalProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << CUSUM Control Chart(
	Y( :Thickness 01 ),
	X( :Bar ),
	Show ARL( 1 ),
	Parameters Report( 1 ),
	Target( 0.5 ),
	Sigma( 0.2 ),
	Head Start( 1 ),
	Test Beyond Limits( 1 ),
	ARL Profiler(
		Profiler( 1, Confidence Intervals( 0 ), Term Value( h( 5, Min( 0 ), Lock( 0 ), Show( 1 ) ), k( 0.5, Lock( 0 ), Show( 1 ) ) ) )
	),
	Automatic Recalc( 1 ), 
);
dt << Delete Columns( "Thickness 01" );
obj << Sigma( .1 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create CUSUM control chart.
3. Set Y variable.
4. Set X variable.
5. Display ARL.
6. Show parameters report.
7. Set target value.
8. Set sigma value.
9. Enable head start.
10. Test beyond limits.
11. Configure ARL profiler.
12. Enable automatic recalculation.
13. Delete column from table.
14. Update sigma value.
15. Generate report.



## CUSUM Control Chart using Add Rows
> **Summary**: Creates a CUSUM control chart with specified columns from an open data table, utilizing the Get Limits function to retrieve limits from a predefined table.

<!-- Keywords: #JSLScriptingLanguage, #CUSUMControlChart, #DataTable, #GetLimitsFunction, #JMP -->

**Code**:
```jsl
dtLimits = New Table( "Untitled 36",
	Add Rows( 7 ),
	New Column( "_LimitsKey",
		Character,
		"Nominal",
		Set Values( {"_H", "_K", "_Std Dev", "_Mean", "_Head Start", "_Two Sided", "_Data Units"} )
	),
	New Column( "Outcome", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [4, 0.6, 1.5, 0.49, 1, 0, 0] ) ),
	New Column( "Hypertension", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [6, 0.4, 0.35, 0.37, 0, 1, 1] ) ),
	New Column( "Gallbladder", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [7, 0.8, 0.31, 0.21, 2, 0, 0] ) )
);
dt = Open("data_table.jmp");
obj = dt << CUSUM Control Chart( Y( :Outcome, :Gallbladder, :Hypertension ), X( :Pair ), Get Limits( dtLimits ) );
rpt = Current Report();
```

**Code Explanation**:

1. Create new table "Untitled 36".
2. Add 7 rows to table.
3. Define "_LimitsKey" column with character data.
4. Set values for "_LimitsKey" column.
5. Define "Outcome" column with numeric data.
6. Set values for "Outcome" column.
7. Define "Hypertension" column with numeric data.
8. Set values for "Hypertension" column.
9. Define "Gallbladder" column with numeric data.
10. Set values for "Gallbladder" column.
11. Open data table;
12. Create CUSUM control chart with specified columns.
13. Retrieve current report.



## CUSUM Control Chart using Log Capture
> **Summary**: Creates a CUSUM control chart to monitor resistance levels based on instrument data, with customizable ARL and shift values.

<!-- Keywords: #CUSUMControlChart, #ResistanceMonitoring, #InstrumentDataAnalysis, #JMPScriptingLanguage, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	obj = dt << CUSUM Control Chart(
		Y( :Resistance ),
		X( :Instrument ),
		Show ARL( 1 ),
		Lower Side( 1 ),
		Shift( 1 ),
		Sigma( 1 ),
		HeadStart( 1 ),
		H( 2 ),
		ARL Profiler( Profiler( 1, Term Value( H( 2, Min( 0 ), Lock( 0 ), Show( 1 ) ), Shift( 1, Lock( 0 ), Show( 1 ) ) ) ) )
	)
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create CUSUM control chart.
3. Set Y variable.
4. Set X variable.
5. Display ARL.
6. Enable lower side.
7. Set shift value.
8. Set sigma value.
9. Enable head start.
10. Set H value.
11. Add ARL profiler.



## CUSUM Control CHart 
> **Summary**: Creates a CUSUM control chart to monitor and analyze changes in height data, setting a target value of 0.

<!-- Keywords: #CUSUMControlChart, #DataAnalysis, #JMPScriptingLanguage, #ControlCharts, #TargetValue -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << CUSUM Control CHart( Y( :height ), Target( 0 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create CUSUM control chart.
3. Set Y variable to height.
4. Set target value to 0.
5. Generate chart report.



## CUSUM Control Chart using Column
### Example 1
> **Summary**: Creates a CUSUM control chart for multivariate data, utilizing the 'Run' and 'AF' columns as Y variables and the 'Inclusion' column as X variable.

<!-- Keywords: #CUSUMControlChart, #MultivariateAnalysis, #JMPScriptingLanguage, #DataTableOperations, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "Run" ) << Set Property( "Spec Limits", {5, 10, 15} );
Column( dt, "AF" ) << Set Property( "Spec Limits", {5, 10, 15} );
Column( dt, "Inclusion" ) << Set Modeling Type( "Nominal" );
obj = dt << CUSUM Control Chart( Y( :Run, :AF ), X( :INCLUSION ) );
```

**Code Explanation**:

1. Open data table;
2. Set spec limits for "Run" column.
3. Set spec limits for "AF" column.
4. Set modeling type for "Inclusion" column.
5. Create CUSUM control chart.
6. Use "Run" and "AF" as Y variables.
7. Use "INCLUSION" as X variable.



### Example 2
> **Summary**: Creates a CUSUM control chart for multivariate data, specifying spec limits and modeling type for 'Run' and 'AF' columns, and using process mean for center line.

<!-- Keywords: #CUSUMControlChart, #MultivariateAnalysis, #SpecLimits, #ModelingType, #ProcessMean -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "Run" ) << Set Property( "Spec Limits", {5, 10, 15} );
Column( dt, "AF" ) << Set Property( "Spec Limits", {5, 10, 15} );
Column( dt, "Inclusion" ) << Set Modeling Type( "Nominal" );
obj = dt << CUSUM Control Chart( Y( :Run, :AF ), X( :INCLUSION ), Use Process Mean for Center Line( 1 ) );
rpt = Current Report();
```

**Code Explanation**:

1. Open data table.
2. Set spec limits for "Run".
3. Set spec limits for "AF".
4. Set modeling type for "Inclusion".
5. Create CUSUM control chart.
6. Specify "Run" and "AF" as Y variables.
7. Specify "INCLUSION" as X variable.
8. Use process mean for center line.
9. Assign current report to variable.
10. Store report object.



