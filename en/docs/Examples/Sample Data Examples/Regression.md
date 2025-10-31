# Regression

More examples for this topic using the sample data files provided with JMP

### Perform a Partial Least Squares (PLS) analysis on the Wine Tasting data using the NIPALS method with 1 factor extracted through KFold validation.

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

