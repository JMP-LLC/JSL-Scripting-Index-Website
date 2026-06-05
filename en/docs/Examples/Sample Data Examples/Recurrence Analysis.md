# Recurrence Analysis

## Example 1
> **Summary**: Perform a detailed Recurrence Analysis on bladder cancer data by fitting a multi-state model, calculating cost, comparing different treatment groups, and labeling patients.

<!-- Keywords: #RecurrenceAnalysis, #Cost, #Grouping, #Label, #PlotMCFDifferences -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Bladder Cancer.jmp");
// Recurrence Analysis
Recurrence Analysis(
	Y( :Age ),
	Cost( :Cost ),
	Grouping( :Treatment Group ),
	Label( :Patient Number ),
	Plot MCF Differences( 1 )
);
```

## Example 2
> **Summary**: Conduct recurrence analysis to identify patterns and costs associated with system failures over time using the Recurrence Analysis function.

<!-- Keywords: #DataTable, #RecurrenceAnalysis, #Cost, #Label -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Diesel Ship Engines.jmp");
// Recurrence Analysis
dt = Current Data Table();
dt << Clear Select;
dt << Select Excluded << Exclude;
dt << Clear Select;
obj =
Recurrence Analysis(
	Y( :kHours ),
	Cost( :Cost ),
	Label( :System ID )
);
```

## Example 3
> **Summary**: Perform a Recurrence Analysis grouped by System ID, incorporating hours and cost data.

<!-- Keywords: #DataTable, #RecurrenceAnalysis, #Cost, #Grouping, #Label -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Diesel Ship Engines.jmp");
// Recurrence Grouped
dt = Current Data Table();
dt << Clear Select;
dt << Select Excluded << Exclude;
dt << Clear Select;
obj =
Recurrence Analysis(
	Y( :kHours ),
	Cost( :Cost ),
	Grouping( :System ID ),
	Label( :System ID )
);
```

## Example 4
> **Summary**: Perform recurrence analysis on a data table with age, cost, and engine ID variables.

<!-- Keywords: #RecurrenceAnalysis, #Cost, #Label -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Engine Valve Seat.jmp");
// Recurrence Analysis
Recurrence Analysis(
	Y( :Age ),
	Cost( :Cost ),
	Label( :EngineID )
);
```

