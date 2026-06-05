# Control Chart

## Example 1
> **Summary**:  Create a control chart with individual measurement, no center line, and no control limits.

<!-- Keywords: #ControlChart, #Chart, #IndividualMeasurement, #KSigma, #Limits -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/DiceRolls.jmp");
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

## Example 2
> **Summary**: Create a U Chart with a Weighted Moving Average Chart (UWMA) for a sample data table in the Quality Control platform.

<!-- Keywords: #ControlChart, #Chart, #KSigma, #Label, #SampleLabel -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Clips1.jmp");
// UWMA Chart
Control Chart(
	Sample Label( :Status ),
	Sample Size( 5 ),
	K Sigma( 3 ),
	Moving Average Span( 2 ),
	Chart Col( :Gap, UWMA )
);
```

## Example 3
> **Summary**: Generate a Unweighted Moving Average (UWMA) control chart with a sample size of 5, a moving average span of 2, and 3-sigma control limits.

<!-- Keywords: #ControlChart, #Chart, #KSigma, #Label, #SampleLabel -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Clips2.jmp");
// UWMA Chart
Control Chart(
	Sample Label( :Date ),
	Sample Size( 5 ),
	K Sigma( 3 ),
	Moving Average Span( 2 ),
	Chart Col( :Gap, UWMA )
);
```

