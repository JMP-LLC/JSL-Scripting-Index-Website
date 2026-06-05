# Fit Two Level Screening

## Example 1
> **Summary**: Perform Two-Level Screening Analysis on Design Experiment Data Using the Fit Two Level Screening Function

<!-- Keywords: #FitTwoLevelScreening -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/DOE Example 1.jmp");
// Screening
Fit Two Level Screening(
	Y( :Depth ),
	X( :Operator, :Speed, :Current )
);
```

## Example 2
> **Summary**: Perform a two-level screening analysis on a design experiment data table using the Fit Two Level Screening function.

<!-- Keywords: #FitTwoLevelScreening -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Reactor 8 Runs.jmp");
// Screening
Fit Two Level Screening(
	Y( :Percent Reacted ),
	X(
		:Feed Rate, :Catalyst, :Stir Rate,
		:Temperature, :Concentration
	)
);
```

## Example 3
> **Summary**: Perform two-level screening analysis on a reactor experiment dataset to identify significant factors affecting percent reacted

<!-- Keywords: #FitTwoLevelScreening -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Reactor 32 Runs.jmp");
// Screening
Fit Two Level Screening(
	Y( :Percent Reacted ),
	X(
		:Feed Rate, :Catalyst, :Stir Rate,
		:Temperature, :Concentration
	)
);
```

