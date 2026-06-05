# Survival

## Example 1
> **Summary**: Analyze survival data by generating a survival plot with grouped data and censoring information.

<!-- Keywords: #Survival, #Censor, #Grouping, #Plot, #SurvivalPlot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Rats.jmp");
// Survival
Survival(
	Y( :days ),
	Censor( :Censor ),
	Grouping( :Group ),
	Survival Plot( 1 )
);
```

## Example 2
> **Summary**: Create a survival analysis using time cycles, censor status, and grouping variables.

<!-- Keywords: #Survival, #Censor, #Grouping -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Blenders.jmp");
// Survival
Survival(
	Y( :Time Cycles ),
	Censor( :Censor ),
	Grouping( :Group )
);
```

