# Screening

## Example 1
> **Summary**: Perform a screening analysis with the OCV as the response variable and A1, A2, A3, A4, C1, and C2 as the factors.

<!-- Keywords: #Screening -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Battery Data.jmp");
// Screening
Screening(
	Y( :OCV ),
	X( :A1, :A2, :A3, :A4, :C1, :C2 )
);
```

## Example 2
> **Summary**: Perform screening analysis to identify significant factors affecting taste in a cake experiment using the Screening function.

<!-- Keywords: #Screening -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Cake Data.jmp");
// Screening
Screening(
	Y( :Taste ),
	X(
		:Cocoa, :Sugar, :Flour, :Butter,
		:Milk, :Eggs
	)
);
```

## Example 3
> **Summary**: Perform screening analysis on the response variable Y using predictors X1, X2, and X3 from a specific dataset.

<!-- Keywords: #Screening -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Custom RSM.jmp");
// Screening
Screening( Y( :Y ), X( :X1, :X2, :X3 ) );
```

## Example 4
> **Summary**: Conduct a screening analysis on a design experiment dataset to evaluate the influence of multiple predictor variables on a response variable.

<!-- Keywords: #Screening -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Piepel.jmp");
// Screening
Screening( Y( :Y ), X( :X1, :X2, :X3 ) );
```

## Example 5
> **Summary**: Perform screening analysis using the Screening function to identify significant factors affecting the Percent Reacted.

<!-- Keywords: #Screening -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Plackett-Burman.jmp");
// Screening
Screening(
	Y( :Percent Reacted ),
	X(
		:Feed Rate, :Catalyst, :Stir Rate,
		:Temperature, :Concentration
	)
);
```

## Example 6
> **Summary**: Perform a screening analysis for the response variables 'Number Popped' and 'Total Kernels' against the predictor variables 'Brand', 'Time', and 'Power'.

<!-- Keywords: #Screening -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Popcorn DOE Results.jmp");
// Screening
Screening(
	Y( :Number Popped, :Total Kernels ),
	X( :Brand, :Time, :Power )
);
```

## Example 7
> **Summary**: Perform a screening analysis with Percent Reacted as the response variable and Feed Rate, Catalyst, Stir Rate, Temperature, and Concentration as the explanatory variables.

<!-- Keywords: #Screening -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Reactor 20 Custom.jmp");
// Screening
Screening(
	Y( :Percent Reacted ),
	X(
		:Feed Rate, :Catalyst, :Stir Rate,
		:Temperature, :Concentration
	)
);
```

## Example 8
> **Summary**: Perform screening analysis using the Screening function with Odor as the response variable and temp, gl ratio, and ht as the covariates.

<!-- Keywords: #Screening -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Odor JSS.jmp");
// Screening
Screening(
	Y( :Odor ),
	X( :temp, :gl ratio, :ht )
);
```

## Example 9
> **Summary**: Screen continuous variables for a response using the Screening function.

<!-- Keywords: #Screening -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reactor Half Fraction.jmp");
// Screening
Screening(
	Y( :Percent Reacted ),
	X(
		:Feed Rate, :Catalyst, :Stir Rate,
		:Temperature, :Concentration
	)
);
```

## Example 10
> **Summary**: Perform variable screening using the Screening platform on a dataset containing 18 predictors and one response variable.

<!-- Keywords: #Screening -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Supersaturated.jmp");
// Screening
Screening(
	Y( :Y ),
	X(
		:X1, :X2, :X3, :X4, :X5, :X6, :X7,
		:X8, :X9, :X10, :X11, :X12, :X13,
		:X14, :X15, :X16, :X17, :X18
	)
);
```

## Example 11
> **Summary**: Perform a screening analysis to identify significant factors affecting log life in the Weld-Repaired Castings dataset using the Screening platform.

<!-- Keywords: #Screening -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Weld-Repaired Castings.jmp");
// Screening
Screening(
	Y( :"Log Life (×100)"n ),
	X(
		:Initial Structure, :Bead Size,
		:Pressure Treatment,
		:Heat Treatment, :Cooling Rate,
		:Polish, :Final Treatment, :ε1,
		:ε2, :ε3, :ε4
	)
);
```

