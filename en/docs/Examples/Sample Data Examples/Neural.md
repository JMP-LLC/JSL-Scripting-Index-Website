# Neural

## Example 1
> **Summary**:  Fit a neural network model for binary classification using specified input variables and a tanh activation function.

<!-- Keywords: #Fit, #Neural, #InformativeMissing, #RandomSeed, #seed -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Diabetes.jmp");
// Neural of Y Binary
Neural(
	Y( :Y Binary ),
	X(
		:Age, :Gender, :BMI, :BP,
		:Total Cholesterol, :LDL, :HDL,
		:TCH, :LTG, :Glucose
	),
	Validation( :Validation ),
	Informative Missing( 0 ),
	Set Random Seed( 1234 ),
	Fit( NTanH( 3 ) )
);
```

## Example 2
> **Summary**: Train a neural network model with ABRASION, MODULUS, ELONG, and HARDNESS as the response variables and SILICA, SILANE, and SULFUR as the predictors. Use Holdback validation with a holdback percentage of 33.33.

<!-- Keywords: #Neural, #Profiler, #InformativeMissing, #Method, #ValidationMethod -->

**Code:**
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

