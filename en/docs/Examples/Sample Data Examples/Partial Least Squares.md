# Partial Least Squares

## Example 1
> **Summary**: Build a partial least squares model using nipals method

<!-- Keywords: #Fit, #PartialLeastSquares, #Factors, #InitialNumberofFactors, #Method -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Baltic.jmp");
// Partial Least Squares
Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7,
		:v8, :v9, :v10, :v11, :v12, :v13,
		:v14, :v15, :v16, :v17, :v18,
		:v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	),
	Fit(
		Method( NIPALS ),
		Initial Number of Factors( 15 )
	)
);
```

## Example 2
> **Summary**: Fit a partial least squares model using the nipals method

<!-- Keywords: #Fit, #PartialLeastSquares, #Factors, #InitialNumberofFactors, #Method -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Body Fat.jmp");
// Partial Least Squares
Partial Least Squares(
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
	Initial Number of Factors( 13 ),
	Fit(
		Method( NIPALS ),
		Number of Factors( 7 ),
		Variable Importance Plot( 1 )
	)
);
```

## Example 3
> **Summary**: Perform Partial Least Squares regression with Y variable log RAI and multiple X variables including :S1, :L1, :P1, :S2, :L2, :P2, :S3, :L3, :P3, :S4, :L4, :P4, :S5, :L5, :P5 using the Partial Least Squares function.

<!-- Keywords: #PartialLeastSquares -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Penta.jmp");
// Partial Least Squares
Partial Least Squares(
	Y( :log RAI ),
	X(
		:S1, :L1, :P1, :S2, :L2, :P2, :S3,
		:L3, :P3, :S4, :L4, :P4, :S5, :L5,
		:P5
	),
	Go
);
```

## Example 4
> **Summary**: Perform a Partial Least Squares (PLS) analysis on the Wine Tasting data using the NIPALS method with 1 factor extracted through KFold validation.

<!-- Keywords: #Fit, #PartialLeastSquares, #Factors, #InitialNumberofFactors, #Method -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Wine Tasting.jmp");
// Partial Least Squares
Partial Least Squares(
	Y(
		:Hedonic, :Goes with meat,
		:Goes with dessert
	),
	X(
		:Price, :Sugar, :Alcohol,
		:Acidity
	),
	Validation Method(
		KFold( 5 ),
		Initial Number of Factors( 4 )
	),
	Fit(
		Method( NIPALS ),
		Number of Factors( 1 )
	)
);
```

