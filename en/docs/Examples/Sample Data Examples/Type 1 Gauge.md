# Type 1 Gauge

## Example 1
> **Summary**: Perform a Type 1 Gauge Analysis on variable Y1 with specified tolerance and reference values. Type 1 Gauge() function is used to generate the analysis, and Type 1 Gauge Metadata() function is used to define the parameters such as Lower Tolerance, Upper Tolerance, Reference, and Resolution.

<!-- Keywords: #Type1Gauge, #Type1GaugeAnalysis, #Reference, #Resolution, #Tolerance -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Variability Data/Type 1 Gauge MSA.jmp");
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

## Example 2
> **Summary**: Perform a Type 1 Gauge Study on multiple response variables with specified tolerances, references, and resolutions using the Type 1 Gauge and Type 1 Gauge Analysis functions.

<!-- Keywords: #Type1Gauge, #Type1GaugeAnalysis, #Reference, #Resolution, #Tolerance -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Variability Data/Type 1 Gauge MSA.jmp");
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

