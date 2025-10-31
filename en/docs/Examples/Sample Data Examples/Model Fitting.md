# Model Fitting

More examples for this topic using the sample data files provided with JMP

### Develop a standard least squares regression model with mixture effects.

```jsl

// Open data table
dt = Open("$Sample_Data/Plasticizer.jmp");
// Model
Fit Model(
	Effects(
		:p1 & RS & Mixture,
		:p2 & RS & Mixture,
		:p3 & RS & Mixture, :p1 * :p2,
		:p1 * :p3, :p2 * :p3
	),
	Y( :Y ),
	No Intercept,
	PERSONALITY(
		"Standard Least Squares"
	)
);

```

