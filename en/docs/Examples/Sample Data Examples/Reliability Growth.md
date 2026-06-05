# Reliability Growth

## Example 1
> **Summary**: Perform reliability growth analysis using the Piecewise Weibull NHPP model for change point detection on the BrakeReliability data set.

<!-- Keywords: #ReliabilityGrowth, #Count, #Format, #InputFormat, #Timestamp -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/BrakeReliability.jmp");
// Reliability Growth
Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes ),
	Piecewise Weibull NHPP Change Point Detection
);
```

## Example 2
> **Summary**: Perform a reliability growth analysis using the Crow-AMSAA model for concurrent systems, incorporating time-to-event data and system identification.

<!-- Keywords: #ReliabilityGrowth, #Format, #ID, #InputFormat, #TimetoEvent -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Concurrent Systems.jmp");
// Reliability Growth
Reliability Growth(
	Input Format( Concurrent Systems ),
	Time to Event(
		:Prototype 1, :Prototype 2
	),
	System ID( :Failed System ),
	Crow AMSAA
);
```

## Example 3
> **Summary**: Perform Reliability Growth Analysis using the Crow-AMSAA model with Time to Event data in the Reliability Growth platform.

<!-- Keywords: #ReliabilityGrowth, #Count, #Format, #InputFormat, #TimetoEvent -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/NewEngineOperation.jmp");
// Reliability Growth
Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	Crow AMSAA
);
```

## Example 4
> **Summary**: Assess reliability growth feasibility using the Parallel Systems input format in the Reliability Growth platform.

<!-- Keywords: #ReliabilityGrowth, #Count, #Format, #ID, #InputFormat -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Parallel Systems Different Intercepts.jmp");
// Reliability Growth Feasibility
Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
```

## Example 5
> **Summary**: Analyze reliability growth using a parallel systems model with Weibull NHPP distributions in the Reliability Growth platform.

<!-- Keywords: #ReliabilityGrowth, #Column, #Count, #Format, #ID -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Parallel Systems Different Intercepts.jmp");
// Reliability Growth Models
Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase ),
	Distinct Phase Weibull NHPP,
	Distinct Weibull NHPP,
	SendToReport(
		Dispatch( {"Model List"}, "",
			TableBox,
			{Sort By Column( 4, 1 )}
		)
	)
);
```

## Example 6
> **Summary**: Perform a Reliability Growth Feasibility Analysis on a Parallel Systems Multiple Phases dataset using the Reliability Growth function.

<!-- Keywords: #ReliabilityGrowth, #Count, #Format, #ID, #InputFormat -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Parallel Systems Multiple Phases.jmp");
// Reliability Growth Feasibility
Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
```

## Example 7
> **Summary**: Analyze parallel systems reliability growth using Piecewise Weibull, Distinct Phase Weibull, and Distinct Weibull NHPP models.

<!-- Keywords: #ReliabilityGrowth, #Column, #Count, #Format, #ID -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Parallel Systems Multiple Phases.jmp");
// Reliability Growth Models
Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase ),
	Piecewise Weibull NHPP with Different Intercepts,
	Distinct Phase Weibull NHPP,
	Distinct Weibull NHPP,
	SendToReport(
		Dispatch( {"Model List"}, "",
			TableBox,
			{Sort By Column( 4, 1 )}
		)
	)
);
```

## Example 8
> **Summary**: Perform reliability growth feasibility analysis on parallel systems data using time to event and event count variables.

<!-- Keywords: #ReliabilityGrowth, #Count, #Format, #ID, #InputFormat -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Parallel Systems One Phase.jmp");
// Reliability Growth Feasibility
Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Repairs ),
	System ID( :System ID )
);
```

## Example 9
> **Summary**: Analyze reliability growth using weibull NHPP for both distinct and identical systems in parallel systems data.

<!-- Keywords: #ReliabilityGrowth, #Count, #Format, #ID, #InputFormat -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Parallel Systems One Phase.jmp");
// Reliability Growth Models
Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Repairs ),
	System ID( :System ID ),
	Distinct System Weibull NHPP,
	Identical System Weibull NHPP
);
```

## Example 10
> **Summary**: Perform reliability growth feasibility analysis using parallel systems input format in the Reliability Growth platform.

<!-- Keywords: #ReliabilityGrowth, #Count, #Format, #ID, #InputFormat -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Parallel Systems Reinitialized.jmp");
// Reliability Growth Feasibility
Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
```

## Example 11
> **Summary**: Create a reliability growth analysis using various growth models, including Piecewise Weibull NHPP and Distinct Weibull NHPP, on a parallel systems data set, and sort the results by a specific column in the output report.

<!-- Keywords: #ReliabilityGrowth, #Column, #Count, #Format, #ID -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Parallel Systems Reinitialized.jmp");
// Reliability Growth Models
Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase ),
	Piecewise Weibull NHPP,
	Piecewise Weibull NHPP with Different Intercepts,
	Distinct Phase Weibull NHPP,
	Distinct Weibull NHPP,
	SendToReport(
		Dispatch( {"Model List"}, "",
			TableBox,
			{Sort By Column( 4, 1 )}
		)
	)
);
```

## Example 12
> **Summary**: Analyze reliability growth using phase-specific Weibull NHPP model.

<!-- Keywords: #ReliabilityGrowth, #Count, #Format, #InputFormat, #Phase -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/ProductionEquipment.jmp");
// Reliability Growth
Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage ),
	Reinitialized Weibull NHPP
);
```

## Example 13
> **Summary**: Calculate and analyze the reliability growth of turbine engine designs using a piecewise Weibull non-homogeneous Poisson process model, incorporating both time to event and event count data, and segmented by design phase.

<!-- Keywords: #ReliabilityGrowth, #Count, #Format, #InputFormat, #Phase -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/TurbineEngineDesign1.jmp");
// Reliability Growth
Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase ),
	Piecewise Weibull NHPP
);
```

## Example 14
> **Summary**: Perform a piece-wise Weibull Non-Homogeneous Poisson Process (NHPP) reliability growth analysis on a turbine engine design dataset.

<!-- Keywords: #ReliabilityGrowth, #Count, #Format, #InputFormat, #Phase -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/TurbineEngineDesign2.jmp");
// Reliability Growth
Reliability Growth(
	Input Format( Time to Event ),
	Time to Event(
		:Interval Start, :Interval End
	),
	Event Count( :Fixes ),
	Phase( :Design Phase ),
	Piecewise Weibull NHPP
);
```

