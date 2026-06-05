# Control Chart

### Example 1
> **Summary**: Visualizes control chart results from a data table, utilizing Control Chart platform with K-Sigma set to 3 and range span of 1, while hiding center line and control limits.

<!-- Keywords: #ControlChart, #JSLScriptingLanguage, #DataVisualization, #StatisticalProcessControl, #QualityControl -->

**Code**:
```jsl
// Plot Results
// Open data table
dt = Open("data_table.jmp");
// Plot Results
Control Chart(
	KSigma( 3 ),
	Range Span( 1 ),
	Chart Col(
		:Average,
		Individual Measurement(
			Show Center Line( 0 ),
			Show Control Limits( 0 )
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart.
3. Set K Sigma to 3.
4. Set range span to 1.
5. Add chart column.
6. Select average column.
7. Use individual measurement.
8. Hide center line.
9. Hide control limits.



### Example 2
> **Summary**: Opens a data table, creates a UWMA control chart with specified parameters, and adds the UWMA chart column.

<!-- Keywords: #JMPScriptingLanguage, #ControlChart, #UWMA, #DataVisualization, #QualityControl -->

**Code**:
```jsl
// UWMA Chart
// Open data table
dt = Open("data_table.jmp");
// UWMA Chart
Control Chart(
	Sample Label( :Status ),
	Sample Size( 5 ),
	K Sigma( 3 ),
	Moving Average Span( 2 ),
	Chart Col( :Gap, UWMA )
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart.
3. Set sample label.
4. Define sample size.
5. Set K sigma value.
6. Specify moving average span.
7. Add UWMA chart column.



### Example 3
> **Summary**: Generates a UWMA chart to monitor and control process variability, utilizing the Control Chart platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ControlChart, #UWMAChart, #ProcessMonitoring, #QualityControl -->

**Code**:
```jsl
// UWMA Chart
// Open data table
dt = Open("data_table.jmp");
// UWMA Chart
Control Chart(
	Sample Label( :Date ),
	Sample Size( 5 ),
	K Sigma( 3 ),
	Moving Average Span( 2 ),
	Chart Col( :Gap, UWMA )
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart.
3. Set sample label.
4. Define sample size.
5. Set K Sigma value.
6. Specify moving average span.
7. Add UWMA chart column.



### Example 4
> **Summary**: Creates a control chart for quality monitoring, utilizing a run chart to visualize sample data and specify chart columns.

<!-- Keywords: #ControlChart, #RunChart, #QualityMonitoring, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Control Chart( Sample Size( 1 ), Chart Col( :Weight ), Chart Type( Run Chart ) );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create control chart object.
4. Set sample size to 1.
5. Select chart column.
6. Specify chart type as run chart.



### Example 5
> **Summary**: Creates a control chart with XBar chart type, 3 sigma control limits, and weight column, using data from an open JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #ControlChart, #XBarChart, #SigmaControlLimits, #WeightColumn -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Control Chart( Sample Size( :Sample ), KSigma( 3 ), Chart Col( :Weight ), Chart Type( XBar ) );
```

**Code Explanation**:

1. Set default names scope.
2. Open data table.
3. Create control chart object.
4. Set sample size column.
5. Set control limits to 3 sigma.
6. Add weight column to chart.
7. Specify chart type as XBar.



### Example 6
> **Summary**: Creates a control chart with sample label 'Box', sample size 'Box Size', and K-Sigma set to 3, featuring a '# Defects' column with limits precision set to -1.

<!-- Keywords: #ControlChart, #JSLScriptingLanguage, #SampleLabel, #KSigma, #LimitsPrecision -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Control Chart(
	Sample Label( :Box ),
	Sample Size( :Box Size ),
	KSigma( 3 ),
	Chart Col( :Name( "# Defects" ), C( Limits Precision( -1 ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Set sample label to Box.
4. Define sample size as Box Size.
5. Set KSigma to 3.
6. Add # Defects column to chart.
7. Set limits precision to -1.



### Example 7
> **Summary**: Creates a control chart with specified parameters, including sample size, KSigma, and weight, for analysis of the Gap column using EWMA method.

<!-- Keywords: #ControlChart, #EWMA, #JSLScriptingLanguage, #StatisticalAnalysis, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Control Chart( Sample Size( 5 ), KSigma( 3 ), Weight( 0.5 ), Chart Col( :Gap, EWMA ) );
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Set sample size to 5.
4. Set KSigma to 3.
5. Set weight to 0.5.
6. Specify Gap column for analysis.
7. Use EWMA method for chart.



### Example 8
> **Summary**: Creates a control chart with individual measurement settings and moving range chart for weight, utilizing Control Chart functionality in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ControlChart, #IndividualMeasurement, #MovingRange, #Weight -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Control Chart(
	Sample Label( :Sample ),
	Group Size( 1 ),
	KSigma( 3 ),
	Chart Col( :Weight, Individual Measurement( Needle( 1 ), Connect Points( 0 ) ), Moving Range( Needle( 1 ), Connect Points( 0 ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Set sample label column.
4. Define group size as 1.
5. Set K Sigma to 3.
6. Add weight column to chart.
7. Configure individual measurement settings.
8. Enable needle for individual measurements.
9. Disable point connections for individuals.
10. Add moving range chart for weight.



### Example 9
> **Summary**: Creates a control chart with median moving range type, using data from an open JMP data table and specifying K-Sigma as 3.

<!-- Keywords: #ControlChart, #MedianMovingRange, #JMPScriptingLanguage, #DataAnalysis, #StatisticalProcessControl -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Control Chart( KSigma( 3 ), Chart Col( :Weight ), Chart Type( Median Moving Range ) );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Create control chart object.
4. Set K-Sigma to 3.
5. Add Weight column.
6. Use Median Moving Range type.



### Example 10
> **Summary**: Creates a control chart with sample size 400, K Sigma level 3, and needle display for defects, utilizing Control Chart functionality in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ControlChart, #StatisticalProcessControl, #QualityControl, #DataAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Control Chart(
	Sample Size( 400 ),
	KSigma( 3 ),
	Chart Col( :Name( "# defective" ), NP( Needle( 1 ), Connect Points( 0 ), Point Marker( 12 ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create control chart object.
3. Set sample size to 400.
4. Define K Sigma level as 3.
5. Add chart column for defects.
6. Use NP chart type.
7. Enable needle display.
8. Disable point connection.
9. Set point marker style to 12.
10. Display control chart.



### Example 11
> **Summary**: Creates a control chart with sample label, sample size, and K Sigma specifications to analyze defect rates in a data table.

<!-- Keywords: #ControlChart, #JSLScriptingLanguage, #QualityControl, #CapabilityAnalysis, #StatisticalProcessControl -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Control Chart( Sample Label( :Lot ), Sample Size( :Lot Size ), K Sigma( 3 ), Chart Col( :Name( "# defective" ), P ) );
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Set sample label column.
4. Define sample size column.
5. Specify K Sigma value.
6. Add P chart column.



### Example 12
> **Summary**: Creates a control chart with individual and moving range plots for quality monitoring, utilizing the Control Chart platform in JMP.

<!-- Keywords: #JMPControlChart, #QualityMonitoring, #ProcessControl, #StatisticalProcessControl, #ManufacturingAnalytics -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Control Chart( Sample Label( :Sample ), KSigma( 3 ), Chart Col( :Weight, Individual on Group Means, Moving Range on Group Means ), );
```

**Code Explanation**:

1. Open data table.
2. Assign data table to variable.
3. Create control chart object.
4. Set sample label column.
5. Define KSigma level.
6. Add Weight column to chart.
7. Use Individual on Group Means plot.
8. Use Moving Range on Group Means plot.



### Example 13
> **Summary**: Creates a control chart with sample label 'Date', unit size 'Unit size', and K Sigma set to 3, featuring column '# defects' for defect tracking.

<!-- Keywords: #ControlChart, #JSLScriptingLanguage, #QualityControl, #StatisticalProcessControl, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Control Chart( Sample Label( :Date ), Unit Size( :Unit size ), KSigma( 3 ), Chart Col( :Name( "# defects" ), U ) );
```

**Code Explanation**:

1. Open data table;
2. Create control chart object.
3. Set sample label to "Date".
4. Set unit size to "Unit size".
5. Set K Sigma to 3.
6. Add column "# defects" to chart.
7. Set chart type to U control chart.



### Example 14
> **Summary**: Creates a control chart with sample label, K Sigma level, and moving average span for data analysis.

<!-- Keywords: #JMPScriptingLanguage, #ControlChart, #DataAnalysis, #StatisticalProcessControl, #QualityImprovement -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Control Chart( Sample Label( :Sample ), KSigma( 3 ), Moving Average Span( 3 ), Chart Col( :Gap, UWMA ) );
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Set sample label column.
4. Define K Sigma level.
5. Set moving average span.
6. Add Gap column to chart.
7. Specify UWMA analysis type.



### Example 15
> **Summary**: Creates a control chart with defects column, unit size, and K-Sigma set to 3, and sends report dispatch with grid line order and reference line order.

<!-- Keywords: #JMPScriptingLanguage, #ControlChart, #DataTable, #ReportDispatch, #KSigma -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Control Chart(
	Sample Label( :Date ),
	Unit Size( :Unit size ),
	KSigma( 3 ),
	Chart Col( :Name( "# defects" ), U( Show Zones( 1 ), Shade Zones( 1 ) ) ),
	SendToReport( Dispatch( {"U of # defects"}, "Attributes Chart", FrameBox, {Grid Line Order( 4 ), Reference Line Order( 5 )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart.
3. Set sample label.
4. Define unit size.
5. Set K Sigma to 3.
6. Add defects column.
7. Enable upper zone.
8. Shade upper zone.
9. Send report dispatch.
10. Adjust grid and reference lines.



### Example 16
> **Summary**: Creates a control chart with sample size, KSigma value, and '# defective' column using JMP's Control Chart platform.

<!-- Keywords: #JMPControlChart, #SampleSize, #KSigma, #PChart, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = Control Chart( Sample Size( :Lot Size ), KSigma( 3 ), Chart Col( :Name( "# defective" ), P ), );
```

**Code Explanation**:

1. Open data table;
2. Create control chart object.
3. Set sample size column.
4. Set KSigma value to 3.
5. Add "# defective" column.
6. Use P chart type.



### Example 17
> **Summary**: Creates a control chart for defect analysis, selecting all rows and deleting them from the data table.

<!-- Keywords: #ControlChart, #DataTable, #JMPScriptingLanguage, #QualityControl, #StatisticalProcessControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = Control Chart( Sample Size( :Lot Size ), KSigma( 3 ), Chart Col( :Name( "# defective" ), P ), );
dt << select all rows;
dt << delete rows();
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Set sample size column.
4. Set K Sigma value.
5. Add defect count column.
6. Select all rows.
7. Delete selected rows.



### Example 18
> **Summary**: Creates a control chart to monitor defects in a production process, utilizing a P-chart and specifying K Sigma value.

<!-- Keywords: #ControlChart, #PChart, #KSigma, #DefectMonitoring, #ProcessControl -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Control Chart( Sample Label( :Lot ), Sample Size( :Lot Size ), K Sigma( 3 ), Chart Col( Name( "# defective" ), P ) );
```

**Code Explanation**:

1. Open data table;
2. Assign data table to variable.
3. Create control chart object.
4. Set sample label column.
5. Define sample size column.
6. Set K Sigma value.
7. Add chart column for defects.
8. Specify chart type as P-chart.



### Example 19
> **Summary**: Creates a control chart with EWMA type, specifying sample label column, sample size, K Sigma value, and weight, while deleting middle rows from the data table.

<!-- Keywords: #JSLScriptingLanguage, #ControlChart, #EWMAType, #DataTableManipulation, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart( Sample Label( :Status ), Sample Size( 5 ), KSigma( 3 ), weight( 0.2 ), Chart Col( :Gap ), Chart Type( EWMA ) );
dt << Delete Rows( Index( 2, N Row( dt ) - 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Set sample label column.
4. Define sample size.
5. Set K Sigma value.
6. Assign weight.
7. Specify chart column.
8. Choose chart type.
9. Delete middle rows.
10. Save changes.



### Example 20
> **Summary**: Creates a control chart with picture box for data analysis, utilizing the Control Chart platform in JMP.

<!-- Keywords: #JMPControlChart, #PictureBox, #DataAnalysis, #StatisticalProcessControl, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart( Sample Size( :Sample ), KSigma( 3 ), Chart Col( :Weight ), Chart Type( IR ) );
obj[Picture Box( 1 )];
```

**Code Explanation**:

1. Open data table.
2. Create control chart object.
3. Set sample size column.
4. Define KSigma level.
5. Specify chart column.
6. Choose chart type.
7. Display picture box.



### Example 21
> **Summary**: Creates a control chart with XBar and R charts, utilizing sample labels and KSigma levels to visualize measurement data.

<!-- Keywords: #ControlChart, #XBar, #RChart, #KSigma, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
cc1sample = {:part#};
cc1column = {:Measurement};
obj = dt << Control Chart( Sample Label( Eval( cc1sample ) ), KSigma( 3 ), Chart Col( Eval( cc1column ), XBar, R ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Assign part number column.
3. Assign measurement column.
4. Create control chart object.
5. Set sample label.
6. Define KSigma level.
7. Add XBar and R charts.
8. Generate report object.



### Example 22
> **Summary**: Creates and manipulates a control chart for weight, utilizing various JSL syntax features such as Eval, Substitute, and Parse.

<!-- Keywords: #JMPScriptingLanguage, #ControlChart, #SampleSize, #KSigma, #ChartCol -->

**Code**:
```jsl
dt = Open("data_table.jmp");
samplesz = 6;
obj = Control Chart( Sample Size( samplesz ), KSigma( 3 ), Chart Col( :weight, XBar, R ) );
obj << close window;
obj = Control Chart( Sample Size( Eval( samplesz ) ), KSigma( 3 ), Chart Col( :weight, XBar, R ) );
obj << close window;
Eval( Eval Expr( obj = Control Chart( Sample Size( Expr( samplesz ) ), KSigma( 3 ), Chart Col( :weight, XBar, R ) ) ) );
obj << close window;
Eval(
	Substitute( Expr( obj = Control Chart( Sample Size( samp ), KSigma( 3 ), Chart Col( :weight, XBar, R ) ) ), Expr( samp ), samplesz )
);
obj << close window;
Eval( Parse( "obj = Control Chart( Sample Size( " || Char( samplesz ) || " ), KSigma( 3 ), Chart Col( :weight, XBar, R ) );" ) );
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Set sample size to 6.
3. Create control chart for weight.
4. Close the control chart window.
5. Re-create control chart with evaluated sample size.
6. Close the control chart window.
7. Use nested Eval to create control chart.
8. Close the control chart window.
9. Substitute sample size variable in expression.
10. Close the control chart window.
11. Parse and evaluate string expression for control chart.
12. Close the control chart window.



### Example 23
> **Summary**: Creates and configures a control chart with XBar and R, utilizing the Control Chart platform in JMP.

<!-- Keywords: #ControlChart, #JMPScriptingLanguage, #XBar, #RChart, #SampleSize -->

**Code**:
```jsl
ut relative epsilon = 1e-2;
dt = Open("data_table.jmp");
samplesz = 6;
obj = Control Chart( Sample Size( samplesz ), KSigma( 3 ), Chart Col( :weight, XBar, R ) );
obj << close window;
obj = Control Chart( Sample Size( Eval( samplesz ) ), KSigma( 3 ), Chart Col( :weight, XBar, R ) );
obj << close window;
Eval( Eval Expr( obj = Control Chart( Sample Size( Expr( samplesz ) ), KSigma( 3 ), Chart Col( :weight, XBar, R ) ) ) );
obj << close window;
Eval(
	Substitute( Expr( obj = Control Chart( Sample Size( samp ), KSigma( 3 ), Chart Col( :weight, XBar, R ) ) ), Expr( samp ), samplesz )
);
obj << close window;
Eval( Parse( "obj = Control Chart( Sample Size( " || Char( samplesz ) || " ), KSigma( 3 ), Chart Col( :weight, XBar, R ) );" ) );
obj << close window;
```

**Code Explanation**:

1. Define relative epsilon.
2. Open data table;
3. Set sample size to 6.
4. Create control chart with XBar and R.
5. Close the control chart window.
6. Re-create control chart with evaluated sample size.
7. Close the control chart window.
8. Use Eval to create control chart with expression.
9. Close the control chart window.
10. Substitute sample size in expression and create control chart.
11. Close the control chart window.
12. Parse and evaluate string to create control chart.
13. Close the control chart window.



### Example 24
> **Summary**: Creates a control chart for quality monitoring, specifying sample size, K Sigma level, and chart column, with report generation.

<!-- Keywords: #ControlChart, #QualityMonitoring, #JSLScripting, #DataAnalysis, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
cc = Control Chart( Sample Size( :Sample ), KSigma( 3 ), Chart Col( :Weight, Median Moving Range on Group Std Devs ) );
rpt = cc << report;
```

**Code Explanation**:

1. Open data table.
2. Create control chart.
3. Set sample size column.
4. Define K Sigma level.
5. Specify chart column and type.
6. Generate report object.



## Control Chart using For
> **Summary**: Creates a new window with two control charts, displaying height and weight measurements by sex, using data from an open JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #ControlCharts, #DataVisualization, #WindowManagement, #ScriptAutomation -->

**Code**:
```jsl
For( i = 1, i <= 10, i++,
	dt = Open("data_table.jmp");
	win_temp = New Window( "test",
		o = Outline Box( "test",
			Lineup Box( N Col( 2 ), spacing( 0 ),
				Control Chart( Group Size( 1 ), KSigma( 3 ), Chart Col( :height, Individual Measurement, Moving Range ), By( :sex ) ),
				Control Chart( Group Size( 1 ), KSigma( 3 ), Chart Col( :weight, Individual Measurement, Moving Range ), By( :sex ) )
			)
		)
	);
	dt << Subscribe( "myname", On Close( win_temp << close window ) );
	Close( dt );
);
```

**Code Explanation**:

1. Loop 10 times.
2. Open data table.
3. Create new window named "test".
4. Add outline box titled "test".
5. Arrange two control charts side by side.
6. First chart: height, individual measurement, moving range, by sex.
7. Second chart: weight, individual measurement, moving range, by sex.
8. Subscribe to data table close event.
9. Close data table.
10. Repeat loop.



## Control Chart using Index
> **Summary**: Creates an XBar control chart with Test 4 enabled, and performs data manipulation tasks such as row deletion and random sampling.

<!-- Keywords: #JMPScriptingLanguage, #ControlChart, #DataManipulation, #RandomSampling, #XBar -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << delete rows( Index( 85, 132 ) );
obj = dt << Control Chart( Sample Size( 6 ), KSigma( 3 ), Chart Col( :DIAMETER ), Chart Type( XBar ) );
obj << Test 4( 1 );
Random Reset( 123456789 );
dt << Select Randomly( 0.1 ) << Delete Rows();
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Delete rows 85-132.
3. Create XBar control chart.
4. Enable Test 4.
5. Set random seed.
6. Randomly select 10% rows.
7. Delete selected rows.
8. Generate report.



