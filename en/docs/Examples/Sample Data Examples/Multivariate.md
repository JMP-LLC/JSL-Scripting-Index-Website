# Multivariate

## Example 1
> **Summary**: Perform multivariate correlations analysis with mahalanobis distances

<!-- Keywords: #Multivariate, #ScatterplotMatrix, #DensityEllipses, #EllipseColor, #EstimationMethod -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Body Fat.jmp");
// Multivariate Correlations
Multivariate(
	Y(
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
	Estimation Method( "Row-wise" ),
	Scatterplot Matrix(
		Density Ellipses( 1 ),
		Shaded Ellipses( 0 ),
		Ellipse Color( 3 )
	),
	Mahalanobis Distances( 1 )
);
```

## Example 2
> **Summary**: Calculate factor score correlations for specified variables in the Online Consumer Data table using the Multivariate platform with row-wise estimation method and display the results in a square matrix format with scatterplot matrix and shaded ellipses.

<!-- Keywords: #Multivariate, #ScatterplotMatrix, #ColorMaponCorrelations, #Correlations, #DensityEllipses -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Online Consumer Data.jmp");
// Factor Score Correlations
Multivariate(
	Y(
		:Privacy, :Security, :Reputation,
		:Trust, :Purchase Int
	),
	Estimation Method( "Row-wise" ),
	Matrix Format( "Square" ),
	Scatterplot Matrix(
		Density Ellipses( 0 ),
		Shaded Ellipses( 0 )
	),
	Color Map on Correlations( 1 )
);
```

## Example 3
> **Summary**: Analyze a multivariate dataset using the Multivariate platform, generating a scatterplot matrix with density ellipses and customizing axis scales.

<!-- Keywords: #Multivariate, #ScatterplotMatrix, #DensityEllipses, #EstimationMethod, #Max -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Polyethylene Process.jmp");
// Multivariate
Multivariate(
	Y( :Tmax2, :z2, :Fi2 ),
	Estimation Method( "Row-wise" ),
	Scatterplot Matrix(
		Density Ellipses( 1 ),
		Shaded Ellipses( 0 )
	),
	SendToReport(
		Dispatch( {"Scatterplot Matrix"},
			"102", ScaleBox,
			{Min( 0.385563909774436 ),
			Max( 0.576842105263158 ),
			Inc( 0.025 ),
			Minor Ticks( 0 )}
		),
		Dispatch( {"Scatterplot Matrix"},
			"101", ScaleBox,
			{Min( 0.5675 ),
			Max( 0.636453182118107 ),
			Inc( 0.01 ), Minor Ticks( 0 )
			}
		),
		Dispatch( {"Scatterplot Matrix"},
			"100", ScaleBox,
			{Min( 272.586320371566 ),
			Max( 292.665882156916 ),
			Inc( 5 ), Minor Ticks( 1 )}
		)
	)
);
```

## Example 4
> **Summary**: Perform multivariate analysis using Row-wise estimation method and create a scatterplot matrix with density ellipses color coded.

<!-- Keywords: #Multivariate, #ScatterplotMatrix, #DensityEllipses, #EllipseColor, #EstimationMethod -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Thickness.jmp");
// Multivariate
Multivariate(
	Y(
		:Thickness 01, :Thickness 02,
		:Thickness 03, :Thickness 04,
		:Thickness 05, :Thickness 06,
		:Thickness 07, :Thickness 08,
		:Thickness 09, :Thickness 10,
		:Thickness 11, :Thickness 12
	),
	Estimation Method( "Row-wise" ),
	Scatterplot Matrix(
		Density Ellipses( 1 ),
		Shaded Ellipses( 0 ),
		Ellipse Color( 3 )
	)
);
```

## Example 5
> **Summary**: Create a scatterplot matrix displaying the relationship between Aperture, Ranging, Cadence, and Yield using the Multivariate and Scatterplot Matrix functions.

<!-- Keywords: #Multivariate, #ScatterplotMatrix, #columns, #DensityEllipses, #EllipseColor -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Ro.jmp");
// Scatterplot matrix
Multivariate(
	Columns(
		:Aperture, :Ranging, :Cadence,
		:Yield
	),
	Scatterplot Matrix(
		Density Ellipses( 1 ),
		Ellipse Color( 3 )
	)
);
```

## Example 6
> **Summary**: Construct a scatterplot matrix using the Multivariate function to visualize the relationships between Ether, 1-Octanol, Carbon Tetrachloride, Benzene, Hexane, and Chloroform in the Solubility dataset.

<!-- Keywords: #Multivariate, #ScatterplotMatrix, #columns, #DensityEllipses, #EllipseColor -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Solubility.jmp");
// Multivariate
Multivariate(
	Columns(
		:Ether, :"1-Octanol"n,
		:Carbon Tetrachloride, :Benzene,
		:Hexane, :Chloroform
	),
	Scatterplot Matrix(
		Density Ellipses( 1 ),
		Ellipse Color( 3 )
	)
);
```

## Example 7
> **Summary**: Create a scatterplot matrix with density ellipses and color map on correlations for multiple variables in a multivariate analysis.

<!-- Keywords: #Multivariate, #ScatterplotMatrix, #ColorMaponCorrelations, #Correlations, #DensityEllipses -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Tablet Production.jmp");
// Multivariate
Multivariate(
	Y(
		:Disso, :Mill Time, :Blend Time,
		:Blend Speed, :Force,
		:Coating Viscosity, :Inlet Temp,
		:Exhaust Temp, :Spray Rate,
		:Atomizer Pressure
	),
	Estimation Method( "Row-wise" ),
	Scatterplot Matrix(
		Density Ellipses( 1 ),
		Shaded Ellipses( 0 ),
		Vertical( 1 ),
		Ellipse Color( 3 )
	),
	Color Map On Correlations( 1 )
);
```

## Example 8
> **Summary**: Build a multivariate scatterplot matrix with pairwise estimation method for household income, IQ, eighth-grade math, high school graduates, gross state product, vegetable consumption, smokers, physical activity, obese, college degrees, and alcohol consumption.

<!-- Keywords: #Multivariate, #ScatterplotMatrix, #DensityEllipses, #EllipseColor, #EstimationMethod -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/US Demographics.jmp");
// Multivariate
Multivariate(
	Y(
		:Household Income, :IQ,
		:Eighth Grade Math,
		:High School Graduates,
		:Gross State Product,
		:Vegetable Consumption, :Smokers,
		:Physical Activity, :Obese,
		:College Degrees,
		:Alcohol Consumption
	),
	Estimation Method( "Pairwise" ),
	Scatterplot Matrix(
		Density Ellipses( 1 ),
		Shaded Ellipses( 0 ),
		Ellipse Color( 3 )
	)
);
```

