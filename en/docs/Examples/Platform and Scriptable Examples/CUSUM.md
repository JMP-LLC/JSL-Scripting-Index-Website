# CUSUM

## CUSUM using Control Chart
### Example 1
> **Summary**: Generates a Cusum Chart to monitor the weight of a product over time, with control limits set at 2 standard deviations and a target value of 8.1.

<!-- Keywords: #CusumChart, #ControlLimits, #TargetValue, #JMPScriptingLanguage, #QualityControl -->

**Code**:
```jsl
// Cusum Chart
// Open data table
dt = Open("data_table.jmp");
// Cusum Chart
Control Chart(
	Sample Size( :hour ),
	H( 2 ),
	Chart Col(
		:weight,
		CUSUM(
			Two sided( 1 ),
			Target( 8.1 ),
			Delta( 1 ),
			Sigma( 0.05 ),
			Head Start( 0.05 )
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create Cusum Chart.
3. Set sample size column.
4. Define control limit H.
5. Specify chart column.
6. Apply CUSUM method.
7. Set two-sided option.
8. Define target value.
9. Set delta value.
10. Define sigma value.
11. Set head start value.



### Example 2
> **Summary**: Creates and customizes multiple control charts for a single data table, including CUSUM, run, XBar-R, individual measurement, P, NP, C, U, Levey-Jennings, and exponentially weighted moving average charts.

<!-- Keywords: #JSL, #ControlCharts, #DataVisualization, #QualityControl, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
cc = dt << Control Chart(
	Sample Size( 5 ),
	Alpha( 0.00269979606326021 ),
	Show Limits Legend( 0 ),
	Chart Col( :Weight, CUSUM( Two Sided( 1 ) ) )
);
obj = dt << Control Chart(
	Sample Label( :Sample ),
	Sample Size( 1 ),
	KSigma( 3 ),
	Chart Col( :Weight, Run Chart( Show Center Line( 0 ) ) )
);
obj2 = dt << Control Chart( Sample Label( :Sample ), KSigma( 3 ), Chart Col( :Weight, XBar, R ) );
obj3 = dt << Control Chart(
	Sample Label( :Sample ),
	Group Size( 1 ),
	KSigma( 3 ),
	Chart Col( :Weight, Individual Measurement, Moving Range )
);
obj4 = dt << Control Chart( Sample Label( :Sample ), Sample Size( 100 ), KSigma( 3 ), Chart Col( :Weight, P ) );
obj5 = dt << Control Chart( Sample Label( :Sample ), Sample Size( 100 ), KSigma( 3 ), Chart Col( :Weight, NP ) );
obj6 = dt << Control Chart( Sample Label( :Sample ), Sample Size( 1 ), KSigma( 3 ), Chart Col( :Weight, C ) );
obj7 = dt << Control Chart( Sample Label( :Sample ), Unit Size( 1 ), KSigma( 3 ), Chart Col( :Weight, U ) );
obj8 = dt << Control Chart( Sample Label( :Sample ), KSigma( 3 ), Chart Col( :Weight, Levey Jennings ) );
obj9 = dt << Control Chart(
	Sample Label( :Sample ),
	KSigma( 3 ),
	Chart Col( :Weight, Individual on Group Means, Moving Range on Group Means )
);
obj10 = dt << Control Chart( Sample Label( :Sample ), Sample Size( 5 ), KSigma( 3 ), Moving Average Span( 2 ), Chart Col( :Weight, UWMA ) );
obj11 = dt << Control Chart( Sample Label( :Sample ), Sample Size( 5 ), KSigma( 3 ), Weight( 0.2 ), Chart Col( :Weight, EWMA ) );
dt << New Column();
Log Capture( dt << Delete Columns( 1 :: 5 ) );
```

**Code Explanation**:

1. Open data table.
2. Create CUSUM control chart for "Weight".
3. Create run chart for "Weight".
4. Create XBar-R control chart for "Weight".
5. Create individual measurement chart for "Weight".
6. Create P control chart for "Weight".
7. Create NP control chart for "Weight".
8. Create C control chart for "Weight".
9. Create U control chart for "Weight".
10. Create Levey-Jennings chart for "Weight".
11. Create individual on group means chart for "Weight".
12. Create moving average chart for "Weight".
13. Create exponentially weighted moving average chart for "Weight".
14. Add new column to data table.
15. Delete first five columns from data table.



## CUSUM using Select Rows
> **Summary**: Creates a control chart from a data table, excluding specific rows and configuring CUSUM with two-sided limits.

<!-- Keywords: #ControlChart, #CUSUM, #DataExclusion, #JMPScriptingLanguage, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( {1, 3, 5, 7} ) << exclude;
obj = Control Chart(
	Sample Label( Column( dt, "weight" ) ),
	Alpha( 0.00269979606326021 ),
	Show Limits Legend( 0 ),
	Chart Col( :height, CUSUM( Two Sided( 1 ) ) )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Exclude specific rows.
3. Create control chart object.
4. Set sample label column.
5. Define alpha level.
6. Hide limits legend.
7. Add height column for CUSUM.
8. Configure CUSUM to two-sided.
9. Generate report from chart.
10. Assign report to variable.



