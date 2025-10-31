# Neural

More examples for this topic using the sample data files provided with JMP

### Train a neural network model with ABRASION, MODULUS, ELONG, and HARDNESS as the response variables and SILICA, SILANE, and SULFUR as the predictors. Use Holdback validation with a holdback percentage of 33.33.

```jsl

// Open data table
dt = Open("$Sample_Data/Tiretread.jmp");
// Neural
Neural(
	Y(
		:ABRASION, :MODULUS, :ELONG,
		:HARDNESS
	),
	X( :SILICA, :SILANE, :SULFUR ),
	Informative Missing( 0 ),
	Validation Method(
		"Holdback", 0.3333
	),
	Go,
	Profiler( 1 )
);

```

