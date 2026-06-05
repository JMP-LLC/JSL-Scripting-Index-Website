# Run Chart

## Run Chart using Control Chart
### Example 1
> **Summary**: Creates a control chart with sample label, K-Sigma level, and run chart configuration for weight data.

<!-- Keywords: #ControlChart, #JMPScriptingLanguage, #DataVisualization, #QualityControl, #StatisticalProcessControl -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Control Chart( Sample Label( :Sample ), KSigma( 3 ), Chart Col( :Weight, Run Chart( Show Center Line( 0 ) ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create control chart object.
3. Set sample label column.
4. Define K-Sigma level to 3.
5. Add weight column to chart.
6. Configure run chart for weight.
7. Show center line at 0.



### Example 2
> **Summary**: Creates a control chart with 3 sigma limits, using a log-transformed 'Percent Increase' column and generating a report.

<!-- Keywords: #JMPScriptingLanguage, #ControlChart, #LogTransformation, #ReportGeneration, #SigmaLimits -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Control Chart(
	Sample Size( 1 ),
	KSigma( 3 ),
	Chart Col( Transform Column( "Log[Percent Increase]", Formula( Log( :Percent Increase ) ) ), Run Chart( Show Center Line( 0 ) ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data_table data
2. Create control chart object.
3. Set sample size to 1.
4. Use 3 sigma limits.
5. Add log-transformed Percent Increase column.
6. Apply logarithm formula to Percent Increase.
7. Create run chart for transformed column.
8. Show center line at 0.
9. Generate report from control chart.
10. Assign report to rpt variable.



### Example 3
> **Summary**: Creates a control chart with sample size 1 and K Sigma 3, featuring Weight column and run chart without center line.

<!-- Keywords: #JMPScriptingLanguage, #ControlChart, #SampleSize, #KSigma, #RunChart -->

**Code**:
```jsl
dt = Open("data_table.jmp");
cc = Control Chart( Sample Size( 1 ), KSigma( 3 ), Chart Col( :Weight, Run Chart( Show Center Line( 0 ) ) ) );
rpt = cc << report;
```

**Code Explanation**:

1. Open data_table data
2. Create control chart.
3. Set sample size to 1.
4. Set K Sigma to 3.
5. Add Weight column.
6. Use run chart.
7. Hide center line.
8. Assign chart to "cc".
9. Generate report.
10. Assign report to "rpt".



