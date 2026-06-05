# Type 1 Gauge

### Example 1
> **Summary**: Performs an EMP Measurement Systems Analysis using a Type 1 Gauge to evaluate the variability of Y1, with defined lower and upper tolerances, reference value, and resolution.

<!-- Keywords: #JMPScriptingLanguage, #EMPMeasurementSystemsAnalysis, #Type1Gauge, #VariabilityAnalysis, #DataTable -->

**Code**:
```jsl
// Type 1 Gauge of Y1
// Open data table
dt = Open("data_table.jmp");
// Type 1 Gauge of Y1
Type 1 Gauge(
	Y( :Y1 ),
	Type 1 Gauge Metadata(
		:
		Y1(
			Lower Tolerance( 49.014 ),
			Upper Tolerance( 51.014 ),
			Reference( 50.014 ),
			Resolution( 0.001 )
		)
	),
	Type 1 Gauge Analysis( "Y1" )
);
```

**Code Explanation**:

1. Open data table.
2. Launch Type 1 Gauge analysis.
3. Set response variable Y1.
4. Define metadata for Y1.
5. Set lower tolerance for Y1.
6. Set upper tolerance for Y1.
7. Set reference value for Y1.
8. Set resolution for Y1.
9. Perform analysis on Y1.
10. Display results.



### Example 2
> **Summary**: Performs a Type 1 Gauge Study on three response variables (Y1, Y2, and Y3) using the Open data table function in JMP. The script defines metadata for each variable and analyzes them individually.

<!-- Keywords: #Type1GaugeStudy, #JMPScriptingLanguage, #DataAnalysis, #MeasurementSystemsAnalysis, #EmpiricalProcessCapability -->

**Code**:
```jsl
// Type 1 Gauge Study
// Open data table
dt = Open("data_table.jmp");
// Type 1 Gauge Study
Type 1 Gauge(
	Y( :Y1, :Y2, :Y3 ),
	Type 1 Gauge Metadata(
		:
		Y1(
			Lower Tolerance( 49.014 ),
			Upper Tolerance( 51.014 ),
			Reference( 50.014 ),
			Resolution( 0.001 )
		),
		:
		Y2(
			Lower Tolerance( 21.9 ),
			Upper Tolerance( 27.9 ),
			Reference( 24.9 ),
			Resolution( 0.01 )
		),
		:
		Y3(
			Lower Tolerance( 7.5 ),
			Upper Tolerance( 12.5 ),
			Reference( 10 ),
			Resolution( 0.0005 )
		)
	),
	Type 1 Gauge Analysis( "Y1" ),
	Type 1 Gauge Analysis( "Y2" ),
	Type 1 Gauge Analysis( "Y3" )
);
```

**Code Explanation**:

1. Open data table.
2. Perform Type 1 Gauge Study.
3. Define response variables.
4. Set metadata for Y1.
5. Set metadata for Y2.
6. Set metadata for Y3.
7. Analyze Y1.
8. Analyze Y2.
9. Analyze Y3.



### Example 3
> **Summary**: Performs the EMP Measurement Systems Analysis using a Type 1 Gauge, performing bias testing and generating a report with average and dispersion charts.

<!-- Keywords: #JMPScriptingLanguage, #Type1Gauge, #EMPMeasurementSystemsAnalysis, #BiasTesting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Type 1 Gauge(
	Y( :Y1 ),
	Type 1 Gauge Metadata( :Y1( Lower Tolerance( 49.014 ), Upper Tolerance( 51.014 ), Reference( 50.014 ), Resolution( .001 ) ) )
);
obj << (Type 1 Gauge Analysis[1] << Bias Test( 1 ));
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Run Type 1 Gauge analysis.
3. Set Y variable.
4. Define metadata for Y1.
5. Perform bias test.
6. Generate analysis report.



## Type 1 Gauge using Column
> **Summary**: Configures a Type 1 Gauge analysis for the 'height' column in a JMP data table, specifying spec limits and metadata.

<!-- Keywords: #JSLScriptingLanguage, #Type1Gauge, #SpecLimits, #Metadata, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << set property( "Spec Limits", {LSL( -50 ), USL( 200 ), Target( 100 ), Show Limits( 1 )} );
obj = dt << Type 1 Gauge(
	Y( :height ),
	Type 1 Gauge Metadata( :height( Lower Tolerance( -50 ), Upper Tolerance( 200 ), Reference( 100 ), Resolution( 0.2 ) ) ),
	Percent of Tolerance( 40 ),
	Sigma Multiplier( 8 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Set height column spec limits.
3. Run Type 1 Gauge analysis.
4. Specify height as response variable.
5. Define metadata for height.
6. Set percent of tolerance to 40.
7. Set sigma multiplier to 8.
8. Retrieve analysis report.



