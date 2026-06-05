# Gaussian Process

## Example 1
> **Summary**: Build a gaussian process model

<!-- Keywords: #GaussianProcess, #Process -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/2D Gaussian Process Example.jmp");
// Model
Gaussian Process(
	Y( :Y ),
	X( :X1, :X2 )
);
```

## Example 2
> **Summary**: Generate a gaussian process model

<!-- Keywords: #GaussianProcess, #BlockSize, #FastGASP, #Process, #SetCorrelationFunction -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Algorithm Data.jmp");
// Model
Gaussian Process(
	Y( :CPU Time ),
	X(
		:Alpha, :Beta, :Gamma, :Algorithm,
		:Compiler
	),
	Set Correlation Function(
		"Gaussian"
	),
	Fast GASP( 1 ),
	Block Size( 50 )
);
```

## Example 3
> **Summary**: Fit a Gaussian Process model to predict the response variable using several predictor variables in a Design of Experiments (DOE) context.

<!-- Keywords: #GaussianProcess, #Process -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Borehole Sphere Packing.jmp");
// Model (GP from DOE)
Gaussian Process(
	Y( :Y ),
	X(
		:log10 Rw, :log10 R, :Tu, :Tl,
		:Hu, :Hl, :L, :Kw
	)
);
```

