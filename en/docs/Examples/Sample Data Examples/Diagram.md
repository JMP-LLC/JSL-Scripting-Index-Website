# Diagram

## Example 1
> **Summary**: Fit a neural (3,0,0) model with validation

<!-- Keywords: #Diagram, #Fit, #Neural, #MissingValueCoding, #RobustFit -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Body Fat.jmp");
// Neural (3,0,0): 1 layer
Neural(
	Y( :Percent body fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n,
		:"Height (inches)"n,
		:"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n,
		:"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n,
		:"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n,
		:
		"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n,
		:"Wrist circumference (cm)"n
	),
	Validation( :Validation ),
	Missing Value Coding( 1 ),
	Transform Covariates( 1 ),
	Fit(
		NTanH( 3 ),
		Transform Covariates( 1 ),
		Robust Fit( 1 ),
		Diagram( 1 )
	)
);
```

## Example 2
> **Summary**: Fit a 2 layer neural (4,0,0), (8,0,0) model

<!-- Keywords: #Diagram, #Fit, #Neural, #MissingValueCoding, #RobustFit -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Body Fat.jmp");
// Neural (4,0,0), (8,0,0): 2 layers
Neural(
	Y( :Percent body fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n,
		:"Height (inches)"n,
		:"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n,
		:"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n,
		:"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n,
		:
		"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n,
		:"Wrist circumference (cm)"n
	),
	Validation( :Validation ),
	Missing Value Coding( 1 ),
	Transform Covariates( 1 ),
	Fit(
		NTanH( 4 ),
		NTanH2( 8 ),
		Transform Covariates( 1 ),
		Robust Fit( 1 ),
		Diagram( 1 )
	)
);
```

## Example 3
> **Summary**: Fit a neural model boosted 100x

<!-- Keywords: #Diagram, #Fit, #Neural, #MissingValueCoding, #NBoost -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Body Fat.jmp");
// Neural Boosted
Neural(
	Y( :Percent body fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n,
		:"Height (inches)"n,
		:"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n,
		:"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n,
		:"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n,
		:
		"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n,
		:"Wrist circumference (cm)"n
	),
	Validation( :Validation ),
	Missing Value Coding( 0 ),
	Transform Covariates( 1 ),
	Fit(
		NTanH( 1 ),
		Transform Covariates( 1 ),
		Robust Fit( 1 ),
		N Boost( 100 ),
		Diagram( 1 )
	)
);
```

## Example 4
> **Summary**: Create a Diagnostics Diagram for Variable Relationships

<!-- Keywords: #Diagram -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Ishikawa.jmp");
// Diagram
Diagram( Y( :Child ), X( :Parent ) );
```

