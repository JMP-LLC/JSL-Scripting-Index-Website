# Visualization

More examples for this topic using the sample data files provided with JMP

### Fit a linear model using REML with a random effects structure involving both machine and person variables.

```jsl

// Open data table
dt = Open("$Sample_Data/Machine.jmp");
// Fit Model REML
Fit Model(
	Y( :rating ),
	Effects(
		:machine, :person & Random,
		:machine * :person & Random
	),
	Personality(
		"Standard Least Squares"
	),
	Run
);

```

