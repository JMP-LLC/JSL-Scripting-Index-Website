# Multivariate

### Example 1
> **Summary**: Calculates multivariate correlations between various anthropometric measurements, generating a scatterplot matrix with density ellipses and Mahalanobis distances.

<!-- Keywords: #MultivariateCorrelation, #ScatterplotMatrix, #DensityEllipses, #MahalanobisDistances, #JMPScriptingLanguage -->

**Code**:
```jsl
// Multivariate Correlations
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Define multivariate analysis.
3. Specify response variables.
4. Set estimation method.
5. Create scatterplot matrix.
6. Enable density ellipses.
7. Disable shaded ellipses.
8. Set ellipse color.
9. Calculate Mahalanobis distances.



### Example 2
> **Summary**: Generates a factor score correlation matrix for a set of variables, using the Multivariate platform in JMP to visualize relationships between Privacy, Security, Reputation, Trust, and Purchase Intent.

<!-- Keywords: #JMPScriptingLanguage, #MultivariateAnalysis, #FactorScoreCorrelation, #ScatterplotMatrix, #DataVisualization -->

**Code**:
```jsl
// Factor Score Correlations
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Define analysis variables.
3. Perform multivariate analysis.
4. Set estimation method.
5. Specify matrix format.
6. Generate scatterplot matrix.
7. Disable density ellipses.
8. Disable shaded ellipses.
9. Enable color map on correlations.



### Example 3
> **Summary**: Visualizes the relationship between multiple variables in a multivariate analysis, using row-wise estimation and scatterplot matrices with density ellipses to identify correlations.

<!-- Keywords: #MultivariateAnalysis, #ScatterplotMatrix, #JSLScriptingLanguage, #RowWiseEstimation, #DensityEllipses -->

**Code**:
```jsl
// Multivariate
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Define variables.
3. Run Multivariate analysis.
4. Specify response variables.
5. Set estimation method.
6. Create scatterplot matrix.
7. Add density ellipses.
8. Remove shaded ellipses.
9. Adjust scale for first variable.
10. Adjust scale for second variable.
11. Adjust scale for third variable.



### Example 4
> **Summary**: Opens a data table, performs a multivariate analysis with row-wise estimation method, and generates a scatterplot matrix with density ellipses and custom ellipse color.

<!-- Keywords: #MultivariateAnalysis, #ScatterplotMatrix, #JMPScriptingLanguage, #DataVisualization, #RowWiseEstimation -->

**Code**:
```jsl
// Multivariate
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Define data table variable.
3. Run Multivariate analysis.
4. Specify response variables.
5. Set estimation method.
6. Generate scatterplot matrix.
7. Add density ellipses.
8. Disable shaded ellipses.
9. Set ellipse color.



### Example 5
> **Summary**: Generates a scatterplot matrix to visualize the relationships between Aperture, Ranging, Cadence, and Yield variables in a data table, with density ellipses displayed for each pair of columns.

<!-- Keywords: #JMPScriptingLanguage, #ScatterplotMatrix, #DataVisualization, #MultivariateAnalysis, #DensityEllipses -->

**Code**:
```jsl
// Scatterplot matrix
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Create scatterplot matrix.
3. Select columns for analysis.
4. Display density ellipses.
5. Set ellipse color.



### Example 6
> **Summary**: Opens a data table, specifies columns for multivariate analysis, and creates a scatterplot matrix with density ellipses to visualize relationships between variables.

<!-- Keywords: #JMPScriptingLanguage, #MultivariateAnalysis, #ScatterplotMatrix, #DensityEllipses, #DataVisualization -->

**Code**:
```jsl
// Multivariate
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Call Multivariate function.
3. Specify columns.
4. Create Scatterplot Matrix.
5. Enable Density Ellipses.
6. Set Ellipse Color.



### Example 7
> **Summary**: Opens a data table, performs multivariate analysis with row-wise estimation, and generates a scatterplot matrix with density ellipses, shaded ellipses disabled, vertical orientation, and ellipse color set to 3. The script also enables the color map on correlations.

<!-- Keywords: #MultivariateAnalysis, #ScatterPlotMatrix, #DensityEllipses, #JSLScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
// Multivariate
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Perform multivariate analysis.
3. Set estimation method.
4. Create scatterplot matrix.
5. Enable density ellipses.
6. Disable shaded ellipses.
7. Set vertical orientation.
8. Set ellipse color.
9. Enable color map on correlations.



### Example 8
> **Summary**: Opens a data table, performs a multivariate analysis with pairwise estimation method, and generates a scatterplot matrix with density ellipses and custom ellipse color.

<!-- Keywords: #MultivariateAnalysis, #ScatterPlotMatrix, #PairwiseEstimation, #DensityEllipses, #Customization -->

**Code**:
```jsl
// Multivariate
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Define variables.
3. Run Multivariate analysis.
4. Specify Y variables.
5. Set estimation method.
6. Generate scatterplot matrix.
7. Add density ellipses.
8. Disable shaded ellipses.
9. Set ellipse color.



### Example 9
> **Summary**: Creates a multivariate analysis object with row-wise estimation method, scatterplot matrix, and customized report title.

<!-- Keywords: #MultivariateAnalysis, #RowWiseEstimation, #ScatterplotMatrix, #CustomReportTitle, #JSLScripting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Multivariate(
	Y( :Discus, :Pole Vault, :Javelin, :Name( "1500m" ) ),
	Estimation Method( "Row-wise" ),
	Scatterplot Matrix( Density Ellipses( 1 ), Shaded Ellipses( 0 ), Ellipse Color( 3 ) ),
	SendToReport(
		Dispatch( {}, "Multivariate ", OutlineBox, {Set Title( "Time tick labels on Y axis" )} ),
		Dispatch( {}, "Correlations", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create multivariate analysis object.
3. Set response variables: Discus, Pole Vault, Javelin, 1500m.
4. Use row-wise estimation method.
5. Generate scatterplot matrix.
6. Enable density ellipses.
7. Disable shaded ellipses.
8. Set ellipse color to blue.
9. Set report title to "Time tick labels on Y axis".
10. Close "Correlations" outline box.



### Example 10
> **Summary**: Generates a scatterplot matrix with density ellipses for multivariate analysis, filtered by specific conditions on the 'MW' column.

<!-- Keywords: #MultivariateAnalysis, #ScatterplotMatrix, #DensityEllipses, #LocalDataFilter, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Multivariate(
	Y( :Fuel, :Steam Flow, :Steam Temp ),
	Estimation Method( "Row-wise" ),
	Scatterplot Matrix( Density Ellipses( 1 ), Shaded Ellipses( 0 ), Ellipse Color( 3 ) ),
	Local Data Filter( Add Filter( columns( :MW ), Where( :MW >= 20.1112 & :MW <= 21.78 ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Launch Multivariate analysis.
3. Specify response variables.
4. Set estimation method.
5. Create scatterplot matrix.
6. Enable density ellipses.
7. Disable shaded ellipses.
8. Set ellipse color.
9. Add local data filter.
10. Define filter conditions.



### Example 11
> **Summary**: Performs a multivariate analysis to visualize relationships between 12 variables, including Household Income, IQ, and Vegetable Consumption, using a pairwise estimation method and scatterplot matrix with density ellipses.

<!-- Keywords: #MultivariateAnalysis, #ScatterplotMatrix, #PairwiseEstimation, #JSLScripting, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Multivariate(
	Y(
		:Household Income, :IQ, :Eighth Grade Math, :High School Graduates, :Gross State Product, :Vegetable Consumption, :Smokers,
		:Physical Activity, :Obese, :College Degrees, :Alcohol Consumption
	),
	Estimation Method( "Pairwise" ),
	Scatterplot Matrix( Density Ellipses( 1 ), Shaded Ellipses( 0 ), Ellipse Color( 3 ) ),
	Pairwise Correlations( 1 ),
	Parallel Coord Plot,
	Ellipsoid 3D Plot( :Household Income, :IQ, :Eighth Grade Math ),
	SendToReport(
		Dispatch( {"Ellipsoid 3D"}, "1", ScaleBox,
			{Format(
				"Custom",
				Formula(
					x = Char( value );
					If( Ends With( x, "000" ),
						Substr( x, 1, 2 ) || "K"
					);
				),
				9
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Launch Multivariate analysis.
3. Set response variables.
4. Choose pairwise estimation method.
5. Create scatterplot matrix.
6. Enable density ellipses.
7. Disable shaded ellipses.
8. Set ellipse color.
9. Generate pairwise correlations.
10. Display parallel coordinates plot.
11. Create 3D ellipsoid plot.
12. Format axis labels.



### Example 12
> **Summary**: Performs a multivariate analysis to visualize the relationship between multiple response variables, utilizing row-wise estimation and a scatterplot matrix with density ellipses.

<!-- Keywords: #MultivariateAnalysis, #ScatterplotMatrix, #RowWiseEstimation, #DensityEllipses, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Multivariate(
	Y( :height, :weight ),
	Estimation Method( "Row-wise" ),
	Matrix Format( "Square" ),
	Scatterplot Matrix( Density Ellipses( 1 ), Shaded Ellipses( 0 ), Horizontal( 1 ), Ellipse Color( 3 ) )
);
```

**Code Explanation**:

1. Open table.
2. Run Multivariate analysis.
3. Set response variables.
4. Choose Row-wise estimation.
5. Select Square matrix format.
6. Create Scatterplot Matrix.
7. Add Density Ellipses.
8. Disable Shaded Ellipses.
9. Enable Horizontal display.
10. Set Ellipse Color.



### Example 13
> **Summary**: Runs the multivariate analysis of a data table, generating a scatterplot matrix with row-wise estimation and customizable density ellipses.

<!-- Keywords: #MultivariateAnalysis, #ScatterplotMatrix, #RowWiseEstimation, #DensityEllipses, #JMPScriptingLanguage -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Perform multivariate analysis.



### Example 14
> **Summary**: Performs a multivariate analysis to visualize the relationship between thigh thickness and mass, utilizing row-wise estimation method, scatterplot matrix with density ellipses, and parallel coordinate plot.

<!-- Keywords: #MultivariateAnalysis, #ScatterplotMatrix, #ParallelCoordinatePlot, #RowWiseEstimation, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Multivariate(
	Y( :Thigh, :Mass ),
	Estimation Method( "Row-wise" ),
	Scatterplot Matrix( Density Ellipses( 1 ), Shaded Ellipses( 0 ), Ellipse Color( 3 ) ),
	Parallel Coord Plot
);
```

**Code Explanation**:

1. Open data table;
2. Launch Multivariate analysis platform.
3. Set response variables.
4. Choose row-wise estimation method.
5. Create scatterplot matrix.
6. Enable density ellipses.
7. Disable shaded ellipses.
8. Set ellipse color to blue.
9. Generate parallel coordinate plot.



### Example 15
> **Summary**: Runs a Multivariate analysis with row-wise estimation method, including Ether as response variable and 1-Octanol to responses, with customization options for report title.

<!-- Keywords: #MultivariateAnalysis, #RowWiseEstimation, #CustomReportTitle, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Multivariate(
	Y( :Ether, :Name( "1-Octanol" ), :Carbon Tetrachloride, :Benzene, :Hexane, :Chloroform ),
	Estimation Method( "Row-wise" ),
	Scatterplot Matrix( 0 ),
	Correlations Multivariate( 0 ),
	Cluster the Correlations( 1 ),
	Ellipsoid 3D Plot( :Ether, :Name( "1-Octanol" ), :Carbon Tetrachloride ),
	SendToReport(
		Dispatch( {}, "Multivariate ", OutlineBox, {Set Title( "Color Maps: Cluster the Correlations, Ellipsoid 3D Plot: Default" )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Launch Multivariate analysis.
3. Set Ether as response variable.
4. Add 1-Octanol to responses.
5. Include Carbon Tetrachloride in analysis.
6. Add Benzene to analysis.
7. Include Hexane in analysis.
8. Add Chloroform to responses.
9. Use row-wise estimation method.
10. Customize report title.



### Example 16
> **Summary**: Runs a Multivariate analysis with row-wise estimation, enabling CI of correlation, partial correlations, pairwise correlations, and Spearman's œÅ, while disabling scatterplot matrix and correlations multivariate.

<!-- Keywords: #MultivariateAnalysis, #RowWiseEstimation, #CorrelationCoefficient, #PartialCorrelation, #SpearmanRho -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Multivariate(
	Y( :Ether, :Name( "1-Octanol" ), :Carbon Tetrachloride, :Benzene, :Hexane, :Chloroform ),
	Estimation Method( "Row-wise" ),
	Scatterplot Matrix( 0 ),
	Correlations Multivariate( 0 ),
	CI of Correlation( 1 ),
	Partial Correlations( 1 ),
	Pairwise Correlations( 1 ),
	Spearman's œÅ( 1 ),
	SendToReport(
		Dispatch( {}, "Multivariate ", OutlineBox,
			{Set Title( "CI of Correlation, Partial Correlations, Pairwise Correlations, Nonparametric Correlations: Spearman's p" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Run Multivariate analysis.
3. Set response variables.
4. Use row-wise estimation.
5. Disable scatterplot matrix.
6. Disable correlations multivariate.
7. Enable CI of correlation.
8. Enable partial correlations.
9. Enable pairwise correlations.
10. Enable Spearman's œÅ.



### Example 17
> **Summary**: Creates a scatterplot matrix with density ellipses for multivariate analysis, utilizing specified columns and ellipse color settings.

<!-- Keywords: #MultivariateAnalysis, #ScatterplotMatrix, #DensityEllipses, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Multivariate(
	Columns( :Ether, :Name( "1-Octanol" ), :Carbon Tetrachloride, :Benzene, :Hexane, :Chloroform ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Color( 3 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create Multivariate analysis object.
3. Select specified columns for analysis.
4. Generate Scatterplot Matrix.
5. Enable Density Ellipses.
6. Set Ellipse Color to 3.



### Example 18
> **Summary**: Runs a Multivariate analysis to visualize correlations between Household Income, IQ, Eighth Grade Math, High School Graduates, and College Degrees, with scatterplot matrix and significance circles.

<!-- Keywords: #MultivariateAnalysis, #ScatterplotMatrix, #SignificanceCircles, #Correlation, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Multivariate(
	Y( :Household Income, :IQ, :Eighth Grade Math, :High School Graduates, :College Degrees ),
	Estimation Method( "Pairwise" ),
	Scatterplot Matrix( Show Points( 0 ), Significance Circles( 1 ) ),
	SendToReport( Dispatch( {}, "Correlations", OutlineBox, {Close( 1 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Launch Multivariate analysis.
3. Specify response variables.
4. Set estimation method.
5. Create scatterplot matrix.
6. Hide data points.
7. Display significance circles.
8. Close correlations outline box.



### Example 19
> **Summary**: Creates a scatterplot matrix with density ellipses and customized contour fill colors for multivariate analysis, utilizing the Multivariate platform in JMP.

<!-- Keywords: #JMP, #MultivariateAnalysis, #ScatterplotMatrix, #DensityEllipses, #ContourFillColors -->

**Code**:
```jsl
Open("data_table.jmp");
Multivariate(
	Y( :Aperture, :Ranging, :Cadence, :Yield ),
	Estimation Method( "Row-wise" ),
	Scatterplot Matrix( Density Ellipses( 1 ), Shaded Ellipses( 0 ), Nonpar Density( 1 ), Ellipse Color( 3 ) ),
	SendToReport(
		Dispatch( {"Scatterplot Matrix"}, "Multiv Scatter Plot", FrameBox( 2 ), {DispatchSeg( Contour Seg( 1 ), {Fill Color( "Gray" )} )} ),
		Dispatch( {"Scatterplot Matrix"}, "Multiv Scatter Plot", FrameBox( 3 ), {DispatchSeg( Contour Seg( 1 ), {Fill Color( "Gray" )} )} ),
		Dispatch( {"Scatterplot Matrix"}, "Multiv Scatter Plot", FrameBox( 4 ), {DispatchSeg( Contour Seg( 1 ), {Fill Color( "Gray" )} )} ),
		Dispatch( {"Scatterplot Matrix"}, "Multiv Scatter Plot", FrameBox( 5 ), {DispatchSeg( Contour Seg( 1 ), {Fill Color( "Gray" )} )} ),
		Dispatch( {"Scatterplot Matrix"}, "Multiv Scatter Plot", FrameBox( 7 ), {DispatchSeg( Contour Seg( 1 ), {Fill Color( "Gray" )} )} ),
		Dispatch( {"Scatterplot Matrix"}, "Multiv Scatter Plot", FrameBox( 8 ), {DispatchSeg( Contour Seg( 1 ), {Fill Color( "Gray" )} )} ),
		Dispatch( {"Scatterplot Matrix"}, "Multiv Scatter Plot", FrameBox( 9 ), {DispatchSeg( Contour Seg( 1 ), {Fill Color( "Gray" )} )} ),
		Dispatch( {"Scatterplot Matrix"}, "Multiv Scatter Plot", FrameBox( 10 ),
			{DispatchSeg( Contour Seg( 1 ), {Fill Color( "Gray" )} )}
		),
		Dispatch( {"Scatterplot Matrix"}, "Multiv Scatter Plot", FrameBox( 12 ),
			{DispatchSeg( Contour Seg( 1 ), {Fill Color( "Gray" )} )}
		),
		Dispatch( {"Scatterplot Matrix"}, "Multiv Scatter Plot", FrameBox( 13 ),
			{DispatchSeg( Contour Seg( 1 ), {Fill Color( "Gray" )} )}
		),
		Dispatch( {"Scatterplot Matrix"}, "Multiv Scatter Plot", FrameBox( 14 ),
			{DispatchSeg( Contour Seg( 1 ), {Fill Color( "Gray" )} )}
		),
		Dispatch( {"Scatterplot Matrix"}, "Multiv Scatter Plot", FrameBox( 15 ),
			{DispatchSeg( Contour Seg( 1 ), {Fill Color( "Gray" )} )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create multivariate analysis.
3. Set response variables.
4. Choose row-wise estimation.
5. Generate scatterplot matrix.
6. Enable density ellipses.
7. Disable shaded ellipses.
8. Enable nonparametric density.
9. Set ellipse color.
10. Customize contour fill colors.



### Example 20
> **Summary**: Performs a multivariate analysis to explore correlations between various solvents, enabling interactive filtering and recalculation of results.

<!-- Keywords: #MultivariateAnalysis, #CorrelationMatrix, #InteractiveFiltering, #Recalculation, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
mult = dt << Multivariate(
	Columns( :Ether, :Name( "1-Octanol" ), :Carbon Tetrachloride, :Benzene, :Hexane, :Chloroform ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Color( 3 ) )
);
mult << Automatic Recalc( 1 );
dt << Select where( :benzene > 0 );
dt << Hide and Exclude( 1 );
sumStats1 = Report( mult )["Correlations"][Matrix Box( 1 )] << get;
certStats1 = [1 0.902074754725272 -0.0866841587420217 0.145448146205675 0.0576099516434211 -0.120181057237778,
0.902074754725272 1 0.0984976933705812 0.354070111340126 0.158352202398996 0.171361328619173,
-0.0866841587420217 0.0984976933705812 1 0.877589725458114 0.835862797204165 0.702624834825921,
0.145448146205675 0.354070111340126 0.877589725458114 1 0.714844682622524 0.77949789728746,
0.0576099516434211 0.158352202398996 0.835862797204165 0.714844682622524 1 0.584447727771582,
-0.120181057237778 0.171361328619173 0.702624834825921 0.77949789728746 0.584447727771582 1];
dt << Clear Row States;
dt << Select Where( :benzene < 0 );
dt << Hide and Exclude( 1 );
sumStats2 = Report( mult )["Correlations"][Matrix Box( 1 )] << get;
```

**Code Explanation**:

1. Open table.
2. Perform multivariate analysis.
3. Enable automatic recalculation.
4. Select rows where benzene > 0.
5. Hide and exclude selected rows.
6. Retrieve correlation matrix.
7. Define certified statistics.
8. Clear row states.
9. Select rows where benzene < 0.
10. Hide and exclude selected rows.



### Example 21
> **Summary**: Performs a multivariate analysis on the data table, selecting rows where Benzene > 0 and retrieving the correlation matrix to define certified statistics.

<!-- Keywords: #MultivariateAnalysis, #CorrelationMatrix, #DataSelection, #CertifiedStatistics, #JSLScripting -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
mult = dt << Multivariate(
	Columns( :Ether, :Name( "1-Octanol" ), :Carbon Tetrachloride, :Benzene, :Hexane, :Chloroform ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Color( 3 ) )
);
mult << Automatic Recalc( 1 );
dt << Select where( :benzene > 0 );
dt << Hide and Exclude( 1 );
sumStats1 = Report( mult )["Correlations"][Matrix Box( 1 )] << get;
certStats1 = [1 0.902074754725272 -0.0866841587420217 0.145448146205675 0.0576099516434211 -0.120181057237778,
0.902074754725272 1 0.0984976933705812 0.354070111340126 0.158352202398996 0.171361328619173,
-0.0866841587420217 0.0984976933705812 1 0.877589725458114 0.835862797204165 0.702624834825921,
0.145448146205675 0.354070111340126 0.877589725458114 1 0.714844682622524 0.77949789728746,
0.0576099516434211 0.158352202398996 0.835862797204165 0.714844682622524 1 0.584447727771582,
-0.120181057237778 0.171361328619173 0.702624834825921 0.77949789728746 0.584447727771582 1];
dt << Clear Row States;
dt << Select Where( :benzene < 0 );
dt << Hide and Exclude( 1 );
sumStats2 = Report( mult )["Correlations"][Matrix Box( 1 )] << get;
certStats2 = [1 0.851002672208769 0.156488687602535 0.264925936084334 0.204149256495449 0.0991860075226077,
0.851002672208769 1 0.25123879812244 0.362273109818683 0.27676387579104 0.137023626643891,
0.156488687602535 0.25123879812244 1 0.923756458566312 0.95518333562607 0.904093377609318,
0.264925936084334 0.362273109818683 0.923756458566312 1 0.905318226405976 0.916247933052237,
0.204149256495449 0.27676387579104 0.95518333562607 0.905318226405976 1 0.862162625146563,
0.0991860075226077 0.137023626643891 0.904093377609318 0.916247933052237 0.862162625146563 1];
```

**Code Explanation**:

1. Open data table;
2. Perform Multivariate analysis.
3. Enable automatic recalculation.
4. Select rows where Benzene > 0.
5. Hide and exclude selected rows.
6. Retrieve correlation matrix from report.
7. Define certified statistics for positive Benzene.
8. Clear row states in dataset.
9. Select rows where Benzene < 0.
10. Hide and exclude selected rows.



### Example 22
> **Summary**: Performs a multivariate analysis to generate a scatterplot matrix with density ellipses and certified statistics for positive benzene concentrations, while selecting and hiding rows based on the benzene threshold.

<!-- Keywords: #MultivariateAnalysis, #ScatterPlotMatrix, #DensityEllipses, #CertifiedStatistics, #DataSelection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
mult = dt << Multivariate(
	Columns( :Ether, :Name( "1-Octanol" ), :Carbon Tetrachloride, :Benzene, :Hexane, :Chloroform ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Color( 3 ) )
);
mult << Automatic Recalc( 1 );
dt << Select where( :benzene > 0 );
dt << Hide and Exclude( 1 );
sumStats1 = Report( mult )["Correlations"][Matrix Box( 1 )] << get;
certStats1 = [1 0.902074754725272 -0.0866841587420217 0.145448146205675 0.0576099516434211 -0.120181057237778,
0.902074754725272 1 0.0984976933705812 0.354070111340126 0.158352202398996 0.171361328619173,
-0.0866841587420217 0.0984976933705812 1 0.877589725458114 0.835862797204165 0.702624834825921,
0.145448146205675 0.354070111340126 0.877589725458114 1 0.714844682622524 0.77949789728746,
0.0576099516434211 0.158352202398996 0.835862797204165 0.714844682622524 1 0.584447727771582,
-0.120181057237778 0.171361328619173 0.702624834825921 0.77949789728746 0.584447727771582 1];
dt << Clear Row States;
dt << Select Where( :benzene < 0 );
dt << Hide and Exclude( 1 );
sumStats2 = Report( mult )["Correlations"][Matrix Box( 1 )] << get;
certStats2 = [1 0.851002672208769 0.156488687602535 0.264925936084334 0.204149256495449 0.0991860075226077,
0.851002672208769 1 0.25123879812244 0.362273109818683 0.27676387579104 0.137023626643891,
0.156488687602535 0.25123879812244 1 0.923756458566312 0.95518333562607 0.904093377609318,
0.264925936084334 0.362273109818683 0.923756458566312 1 0.905318226405976 0.916247933052237,
0.204149256495449 0.27676387579104 0.95518333562607 0.905318226405976 1 0.862162625146563,
0.0991860075226077 0.137023626643891 0.904093377609318 0.916247933052237 0.862162625146563 1];
```

**Code Explanation**:

1. Open data table.
2. Perform multivariate analysis.
3. Enable automatic recalculation.
4. Select rows where benzene > 0.
5. Hide and exclude selected rows.
6. Get correlation matrix.
7. Define certified statistics for positive benzene.
8. Clear row states.
9. Select rows where benzene < 0.
10. Hide and exclude selected rows.



### Example 23
> **Summary**: Performs a multivariate analysis to explore correlations between height, weight, and age by sex, generating a scatterplot matrix with density ellipses and extracting the correlations matrix into a new table.

<!-- Keywords: #MultivariateAnalysis, #ScatterplotMatrix, #CorrelationMatrix, #ByGrouping, #JMPScripting -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
m = dt1 << Multivariate(
	Y( :height, :weight, :age ),
	Estimation Method( "Row-wise" ),
	Matrix Format( "Square" ),
	Scatterplot Matrix( Density Ellipses( 1 ), Shaded Ellipses( 0 ), Ellipse Color( 3 ) ),
	By( :sex )
);
r = Report( m[1] );
dt2 = r["Correlations"][Matrix Box( 1 )] << makeIntoDataTable;
```

**Code Explanation**:

1. Open data table;
2. Launch Multivariate analysis.
3. Set response variables: height, weight, age.
4. Use row-wise estimation method.
5. Display square matrix format.
6. Create scatterplot matrix with density ellipses.
7. Disable shaded ellipses.
8. Set ellipse color to blue.
9. Group by sex.
10. Extract correlations matrix into new table.



### Example 24
> **Summary**: Performs a multivariate analysis to explore the relationships between height, weight, and age, grouped by sex, using row-wise estimation and a scatterplot matrix with density ellipses.

<!-- Keywords: #MultivariateAnalysis, #ScatterplotMatrix, #DensityEllipses, #RowWiseEstimation, #ByGroup -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
m = dt1 << Multivariate(
	Y( :height, :weight, :age ),
	Estimation Method( "Row-wise" ),
	Matrix Format( "Square" ),
	Scatterplot Matrix( Density Ellipses( 1 ), Shaded Ellipses( 0 ), Ellipse Color( 3 ) ),
	By( :sex )
);
r = Report( m[1] );
dt2 = r["Correlations"][Matrix Box( 1 )] << makeCombinedDataTable;
```

**Code Explanation**:

1. Open data table;
2. Perform multivariate analysis.
3. Set response variables: height, weight, age.
4. Use row-wise estimation method.
5. Format matrix as square.
6. Create scatterplot matrix.
7. Add density ellipses.
8. Disable shaded ellipses.
9. Set ellipse color to blue.
10. Group by sex.



### Example 25
> **Summary**: Performs a multivariate analysis to generate correlations between height, weight, and age variables in a data table, utilizing row-wise estimation method and scatterplot matrix.

<!-- Keywords: #MultivariateAnalysis, #CorrelationMatrix, #JSLScripting, #DataVisualization, #RowWiseEstimation -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
m = dt1 << Multivariate(
	Y( :height, :weight, :age ),
	Estimation Method( "Row-wise" ),
	Matrix Format( "Square" ),
	Scatterplot Matrix( Density Ellipses( 1 ), Shaded Ellipses( 0 ), Ellipse Color( 3 ) )
);
r = Report( m );
dt2 = r["Correlations"][Matrix Box( 1 )] << makeCombinedDataTable;
Close( dt2, "nosave" );
Close( dt1, "nosave" );
mb = Matrix Box( [1 2 31, 4 3 21] );
mat = [38.2 3 4, 5 6 7, 8 9 10];
```

**Code Explanation**:

1. Open data table;
2. Perform multivariate analysis.
3. Specify variables: height, weight, age.
4. Use row-wise estimation method.
5. Create square matrix format.
6. Generate scatterplot matrix.
7. Extract correlations report.
8. Convert matrix box to data table.
9. Close temporary data table without saving.
10. Close original data table without saving.



### Example 26
> **Summary**: Generates a scatterplot matrix with density ellipses and shaded ellipses for multivariate analysis, extracting correlations matrices and converting them to data tables.

<!-- Keywords: #MultivariateAnalysis, #ScatterplotMatrix, #CorrelationMatrix, #DataTables, #JMPScriptingLanguage -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
m = dt1 << Multivariate(
	Y( :height, :weight, :age ),
	Estimation Method( "Row-wise" ),
	Matrix Format( "Square" ),
	Scatterplot Matrix( Density Ellipses( 1 ), Shaded Ellipses( 0 ), Ellipse Color( 3 ) )
);
r = Report( m );
dt2 = r["Correlations"][Matrix Box( 1 )] << makeIntoDataTable;
Close( dt2, "nosave" );
Close( dt1, "nosave" );
dt1 = Open("data_table.jmp");
m = dt1 << Multivariate(
	Y( :height, :weight, :age ),
	Estimation Method( "Row-wise" ),
	Matrix Format( "Square" ),
	Scatterplot Matrix( Density Ellipses( 1 ), Shaded Ellipses( 0 ), Ellipse Color( 3 ) ),
	By( :sex )
);
r = Report( m[1] );
dt2 = r["Correlations"][Matrix Box( 1 )] << makeIntoDataTable;
Close( dt2, "nosave" );
Close( dt1, "nosave" );
dt1 = Open("data_table.jmp");
m = dt1 << Multivariate(
	Y( :height, :weight, :age ),
	Estimation Method( "Row-wise" ),
	Matrix Format( "Square" ),
	Scatterplot Matrix( Density Ellipses( 1 ), Shaded Ellipses( 0 ), Ellipse Color( 3 ) ),
	By( :sex )
);
r = Report( m[1] );
dt2 = r["Correlations"][Matrix Box( 1 )] << makeCombinedDataTable;
Close( dt2, "nosave" );
Close( dt1, "nosave" );
dt1 = Open("data_table.jmp");
m = dt1 << Multivariate(
	Y( :height, :weight, :age ),
	Estimation Method( "Row-wise" ),
	Matrix Format( "Square" ),
	Scatterplot Matrix( Density Ellipses( 1 ), Shaded Ellipses( 0 ), Ellipse Color( 3 ) )
);
r = Report( m );
dt2 = r["Correlations"][Matrix Box( 1 )] << makeCombinedDataTable;
Close( dt2, "nosave" );
Close( dt1, "nosave" );
mb = Matrix Box( [1 2 31, 4 3 21] );
mat = [38.2 3 4, 5 6 7, 8 9 10];
mb = Matrix Box( mat );
```

**Code Explanation**:

1. Open data_table data
2. Perform multivariate analysis.
3. Generate scatterplot matrix.
4. Extract correlations matrix.
5. Convert to data table.
6. Close data table without saving.
7. Repeat steps 1-6.
8. Include "By sex" option.
9. Extract correlations matrix.
10. Convert to combined data table.



### Example 27
> **Summary**: Performs a multivariate analysis to generate a scatterplot matrix with density ellipses, using row-wise estimation and square matrix format.

<!-- Keywords: #MultivariateAnalysis, #ScatterplotMatrix, #DensityEllipses, #RowWiseEstimation, #JMPScriptingLanguage -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
m = dt1 << Multivariate(
	Y( :height, :weight, :age ),
	Estimation Method( "Row-wise" ),
	Matrix Format( "Square" ),
	Scatterplot Matrix( Density Ellipses( 1 ), Shaded Ellipses( 0 ), Ellipse Color( 3 ) )
);
r = Report( m );
dt2 = r["Correlations"][Matrix Box( 1 )] << makeCombinedDataTable;
```

**Code Explanation**:

1. Open data table;
2. Run Multivariate analysis.
3. Set Y variables: height, weight, age.
4. Use Row-wise estimation.
5. Format matrix as Square.
6. Create Scatterplot Matrix.
7. Add density ellipses.
8. Disable shaded ellipses.
9. Set ellipse color to blue.
10. Extract correlation matrix data.



### Example 28
> **Summary**: Creates a multivariate analysis object with pairwise estimation, parallel coordinate plot, and univariate simple statistics for data exploration.

<!-- Keywords: #JSLScriptingLanguage, #MultivariateAnalysis, #PairwiseEstimation, #ParallelCoordinatePlot, #UnivariateStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Multivariate(
	Y(
		:Household Income, :IQ, :Eighth Grade Math, :High School Graduates, :Gross State Product, :Vegetable Consumption, :Smokers,
		:Physical Activity, :Obese, :College Degrees, :Alcohol Consumption
	),
	Estimation Method( "Pairwise" ),
	Scatterplot Matrix( 0 ),
	Correlations Multivariate( 0 ),
	Univariate Simple Statistics( 1 ),
	Parallel Coord Plot
);
:Household Income << Set Property( "Missing Value Codes", 99999 );
:Household Income << Set Values( [99999] );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
actN = (rpt[Number Col Box( 1 )] << Get( 1 ));
```

**Code Explanation**:

1. Open data table;
2. Create multivariate analysis object.
3. Set estimation method to pairwise.
4. Disable scatterplot matrix.
5. Disable correlations multivariate.
6. Enable univariate simple statistics.
7. Enable parallel coordinate plot.
8. Set missing value code for Household Income.
9. Replace Household Income values with missing code.
10. Redo analysis with updated data.



### Example 29
> **Summary**: Creates a multivariate object with REML estimation method and scatterplot matrix, including density ellipses and ellipse color customization.

<!-- Keywords: #MultivariateAnalysis, #REML, #ScatterplotMatrix, #JSLScripting, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multivariate(
	Y( :height ),
	Estimation Method( "REML" ),
	Scatterplot Matrix( Density Ellipses( 1 ), Shaded Ellipses( 0 ), Ellipse Color( 3 ) )
);
dt << delete columns( "height" );
```

**Code Explanation**:

1. Open data table.
2. Create multivariate object.
3. Set response variable.
4. Choose REML estimation method.
5. Generate scatterplot matrix.
6. Add density ellipses.
7. Disable shaded ellipses.
8. Set ellipse color to red.
9. Delete height column from table.



### Example 30
> **Summary**: Analyze OZONE, CO, SO2, NO, and PM10 variables using multivariate techniques, including principal components and score plots with imputation.

<!-- Keywords: #MultivariateAnalysis, #PrincipalComponents, #ScorePlot, #Imputation, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj3 = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Correlations Multivariate( 0 ) );
obj3 << Principal Components( on Correlations, Score Plot with Imputation( 3 ), Score Plot( 3 ) );
obj2 = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Correlations Multivariate( 0 ) );
obj2 << Principal Components( on Correlations, Score Plot with Imputation( 2 ), Score Plot( 2 ) );
jrn2 = Report( obj2 )[Outline Box( "Principal Components / Factor Analysis" )] << get journal;
jrn3 = Report( obj3 )[Outline Box( "Principal Components / Factor Analysis" )] << get journal;
```

**Code Explanation**:

1. Open data table;
2. Create multivariate analysis for OZONE, CO, SO2, NO, PM10.
3. Enable principal components on correlations.
4. Generate score plot with imputation for 3 components.
5. Generate regular score plot for 3 components.
6. Repeat steps 2-5 for 2 components.
7. Extract report for 2-component analysis.
8. Extract report for 3-component analysis.



### Example 31
> **Summary**: Creates a scatterplot matrix with nonparametric density plots for height and weight variables, utilizing Multivariate analysis in JMP.

<!-- Keywords: #JMPScriptingLanguage, #MultivariateAnalysis, #ScatterplotMatrix, #NonParametricDensity, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
mv = dt << Multivariate( Y( :height, :weight ) );
so = Report( mv )["Scatterplot Matrix"] << Get Scriptable Object;
so << Nonpar Density( 1 );
so << Nonpar Density( 0 );
mv << close window;
mv2 = dt << Multivariate( Y( :height, :weight ), Scatterplot Matrix( Nonpar Density( 1 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create multivariate analysis on height and weight.
3. Extract scatterplot matrix object.
4. Add nonparametric density plot for first variable.
5. Add nonparametric density plot for second variable.
6. Close the multivariate window.
7. Create new multivariate analysis.
8. Include scatterplot matrix with nonparametric density for first variable.



### Example 32
> **Summary**: Process of performing multivariate analysis on a data table, extracting covariance matrices and imputed data tables, and calculating mean values.

<!-- Keywords: #MultivariateAnalysis, #Imputation, #CovarianceMatrix, #DataTableManipulation, #JSLScripting -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1 = Current Data Table();
dt1:Sepal length[1] = .;
Xmiss = (dt1 << get as matrix)[0, 1 :: 4];
mv = Multivariate(
	Y( 1 :: 4 ),
	Scatterplot Matrix( 0 ),
	Estimation Method( "Pairwise" ),
	Covariance Matrix( 1 ),
	Univariate Simple Statistics( 1 ),
	Impute Missing Data( 1 )
);
r = Report( mv );
covar = r["Covariance Matrix"][Matrix Box( 1 )] << get;
dtimp = Data Table( "Imputed Data Table of " || (dt1 << Get Name) );
newDat = dtimp << get as matrix;
mu = r["Univariate Simple Statistics"][Number Col Box( "Mean" )] << get as matrix;
idx = 2 :: 4;
invCov = G Inverse( Covar[idx, idx] );
evec = (mu[1] + covar[1, idx] * invCov * (Xmiss[1, idx]` - mu[idx]))[1];
avec = newDat[1, 1];
```

**Code Explanation**:

1. Open data table;
2. Set current data table.
3. Replace first sepal length value with missing.
4. Extract X variables as matrix.
5. Perform multivariate analysis.
6. Retrieve report from multivariate analysis.
7. Extract covariance matrix from report.
8. Retrieve imputed data table.
9. Convert imputed data table to matrix.
10. Extract mean values from report.



### Example 33
> **Summary**: Generates two scatterplot matrices with correlation probability analysis for row-wise and pairwise multivariate data, utilizing the Multivariate platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #MultivariateAnalysis, #ScatterplotMatrix, #CorrelationProbability, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
objrow = dt << Multivariate(
	Y( :Percent body fat, :Name( "Height (inches)" ) ),
	Estimation Method( "Row-wise" ),
	Matrix Format( "Square" ),
	Scatterplot Matrix( Density Ellipses( 1 ), Shaded Ellipses( 0 ), Ellipse Color( 3 ) ),
	Correlation Probability( 1 )
);
rptrow = objrow << report;
probrow = rptrow["Correlation Probability"][Matrix Box( 1 )] << get;
objpair = dt << Multivariate(
	Y( :Percent body fat, :Name( "Height (inches)" ) ),
	Estimation Method( "Pairwise" ),
	Matrix Format( "Square" ),
	Scatterplot Matrix( Density Ellipses( 1 ), Shaded Ellipses( 0 ), Ellipse Color( 3 ) ),
	Correlation Probability( 1 )
);
rptpair = objpair << report;
probpair = rptpair["Correlation Probability"][Matrix Box( 1 )] << get;
```

**Code Explanation**:

1. Open data table;
2. Perform multivariate analysis row-wise.
3. Configure scatterplot matrix options.
4. Enable correlation probability.
5. Retrieve report object.
6. Extract correlation probability matrix row-wise.
7. Perform multivariate analysis pairwise.
8. Configure scatterplot matrix options.
9. Enable correlation probability.
10. Retrieve report object.
11. Extract correlation probability matrix pairwise.



### Example 34
> **Summary**: Performs a multivariate analysis to estimate robust principal components on unscaled data, using CO, SO2, and NO as response variables, Lead as the frequency variable, and PM10 as the weight variable.

<!-- Keywords: #MultivariateAnalysis, #PrincipalComponents, #RobustEstimation, #WeightedData, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multivariate(
	Y( :CO, :SO2, :NO ),
	Freq( :Lead ),
	Weight( :PM10 ),
	Estimation Method( "Robust" ),
	Matrix Format( "Square" ),
	Principal Components( "on Unscaled", )
);
obj << Principal Components( Save Principal Components with Imputation( 2 ) );
```

**Code Explanation**:

1. Open data table;
2. Launch Multivariate analysis.
3. Set response variables: CO, SO2, NO.
4. Use Lead as frequency variable.
5. Apply PM10 as weight variable.
6. Choose Robust estimation method.
7. Select Square matrix format.
8. Enable Principal Components on unscaled data.
9. Save first two principal components with imputation.



### Example 35
> **Summary**: Performs a multivariate analysis on the provided data table, enabling principal components on correlations and generating a 3D score plot, while disabling automatic recalculation and randomly selecting 10% of rows for reporting.

<!-- Keywords: #MultivariateAnalysis, #PrincipalComponents, #3DScorePlot, #DataSelection, #Reporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Name( "3D Score Plot" ) );
obj << Automatic Recalc( 0 );
Random Reset( 123456789 );
dt << Select Randomly( 0.1 ) << Hide and Exclude( 1 );
rpt = obj << Report();
```

**Code Explanation**:

1. Open data table;
2. Perform multivariate analysis.
3. Enable principal components on correlations.
4. Generate 3D score plot.
5. Disable automatic recalculation.
6. Set random seed.
7. Randomly select 10% of rows.
8. Hide and exclude selected rows.
9. Create report from analysis.



### Example 36
> **Summary**: Creates a multivariate analysis report with scatterplot matrix and row-wise variance estimation for age, height, and weight variables in a data table.

<!-- Keywords: #MultivariateAnalysis, #ScatterplotMatrix, #RowWiseVarianceEstimation, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multivariate( Y( :age, :height, :weight ), Variance Estimation( "Row-wise" ), Scatterplot Matrix( Fit Line ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create multivariate analysis object.
3. Set response variables: age, height, weight.
4. Use row-wise variance estimation.
5. Generate scatterplot matrix.
6. Add fit lines to plots.
7. Retrieve analysis report.



### Example 37
> **Summary**: Creates a multivariate object from a data table, selecting specific rows and excluding others, while enabling automatic recalculation.

<!-- Keywords: #JSLScriptingLanguage, #MultivariateAnalysis, #DataTableManipulation, #AutomaticRecalculation, #RowSelection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multivariate( Y( :Sepal length, :Sepal width ) );
obj << Automatic Recalc( 1 );
dt << Select rows( [2 3 4 7 8 9 10] ) << Exclude( 1 );
```

**Code Explanation**:

1. Open data table;
2. Create Multivariate object.
3. Set automatic recalculation.
4. Select specified rows.
5. Exclude selected rows.



### Example 38
> **Summary**: Creates a multivariate analysis object, enabling principal components analysis and generating a 3D score plot from the data table.

<!-- Keywords: #MultivariateAnalysis, #PrincipalComponents, #3DScorePlot, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", "3D Score Plot"n );
rpt = obj << report;
jrn = rpt["Scatterplot 3D"] << Get Journal;
jrn_act = Regex( jrn, "(points\(.*?)\!",", "\1" );
```

**Code Explanation**:

1. Open data table.
2. Create multivariate analysis object.
3. Enable principal components analysis.
4. Generate 3D score plot.
5. Retrieve analysis report.
6. Extract 3D scatterplot journal.
7. Use regex to extract points.



### Example 39
> **Summary**: Creates a multivariate analysis object with row-wise variance estimation and scatterplot matrix, including density ellipses and significance circles.

<!-- Keywords: #MultivariateAnalysis, #ScatterplotMatrix, #RowWiseVarianceEstimation, #DensityEllipses, #SignificanceCircles -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
obj = dt1 << Multivariate(
	Y( :v1, :v25 ),
	Variance Estimation( "Row-wise" ),
	Scatterplot Matrix( Density Ellipses( 1 ), Significance Circles( 1 ) )
);
obj << Save Script to Report;
rpt = obj << report;
script_act = Try( rpt[Text Box( 1 )] << Get Text );
script_exp =
"Multivariate(
Y( :v1, :v25 ),
Variance Estimation( \!"Row-wise\!" ),
Scatterplot Matrix( Density Ellipses( 1 ), Significance Circles( 1 ) )
)";
```

**Code Explanation**:

1. Open data table;
2. Create multivariate analysis object.
3. Set response variables v1, v25.
4. Use row-wise variance estimation.
5. Generate scatterplot matrix.
6. Add density ellipses to plots.
7. Add significance circles to plots.
8. Save script to report.
9. Extract script from report.
10. Compare extracted script to expected script.



### Example 40
> **Summary**: Creates a custom display window with four analyses placed horizontally, featuring a multivariate analysis object and 3D ellipsoid plot.

<!-- Keywords: #JSLScriptingLanguage, #MultivariateAnalysis, #EllipsoidPlot, #CustomDisplayWindow, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Multivariate(
	Y( :Mass, :Fore, :Bicep, :Chest, :Neck, :Shoulder, :Waist, :Height, :Calf, :Thigh, :Head ),
	Estimation Method( "Pairwise" ),
	Scatterplot Matrix( 0 ), 
);
myMass = Column( "Mass" );
myFore = Column( "Fore" );
myHeight = Column( "Height" );
lc = Log Capture( obj << Ellipsoid 3D Plot( myMass, myFore, myHeight ) );
```

**Code Explanation**:

1. Open data table.
2. Create multivariate analysis object.
3. Set estimation method to pairwise.
4. Disable scatterplot matrix.
5. Assign Mass column to variable.
6. Assign Fore column to variable.
7. Assign Height column to variable.
8. Generate 3D ellipsoid plot.
9. Capture log output.
10. Store result in lc variable.



### Example 41
> **Summary**: Performs a multivariate analysis to visualize relationships between variables, generating a scatterplot matrix and attempting to create a 3D ellipsoid plot for selected variables.

<!-- Keywords: #MultivariateAnalysis, #ScatterplotMatrix, #EllipsoidPlot, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Multivariate(
	Y( :Mass, :Fore, :Bicep, :Chest, :Neck, :Shoulder, :Waist, :Height, :Calf, :Thigh, :Head ),
	Estimation Method( "Pairwise" ),
	Scatterplot Matrix( 1 ),
	SendToReport( Dispatch( {}, "Multivariate ", OutlineBox, {Close( 1 )} ) )
);
Try( obj << Ellipsoid 3D Plot( Mass, Fore, Bicep ) );
```

**Code Explanation**:

1. Open data table.
2. Run multivariate analysis.
3. Set estimation method.
4. Generate scatterplot matrix.
5. Close outline box.
6. Attempt to create 3D ellipsoid plot.
7. Use Mass, Fore, Bicep variables.



### Example 42
> **Summary**: Performs a multivariate analysis with REML estimation method, scatterplot matrix, and 3D plot creation for specified variables.

<!-- Keywords: #JMPScriptingLanguage, #MultivariateAnalysis, #REMLEstimation, #ScatterplotMatrix, #3DPlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Multivariate(
	Y( :Mass, :Fore, :Bicep, :Chest, :Neck, :Shoulder, :Waist, :Height, :Calf, :Thigh, :Head ),
	Estimation Method( "REML" ),
	Scatterplot Matrix( 1 ),
	SendToReport( Dispatch( {}, "Multivariate ", OutlineBox, {Close( 1 )} ) )
);
Try( obj << Ellipsoid 3D Plot( Mass, Fore, Bicep ) );
```

**Code Explanation**:

1. Open table.
2. Define multivariate analysis.
3. Set estimation method.
4. Create scatterplot matrix.
5. Close outline box.
6. Attempt to create 3D plot.
7. Use specified variables.
8. Handle potential errors.



### Example 43
> **Summary**: Performs a multivariate analysis to visualize the relationships between various physical measurements, utilizing maximum likelihood estimation and scatterplot matrix features.

<!-- Keywords: #MultivariateAnalysis, #JMPScriptingLanguage, #MaximumLikelihoodEstimation, #ScatterplotMatrix, #3DEllipsoidPlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Multivariate(
	Y( :Mass, :Fore, :Bicep, :Chest, :Neck, :Shoulder, :Waist, :Height, :Calf, :Thigh, :Head ),
	Estimation Method( "ML" ),
	Scatterplot Matrix( 1 ),
	SendToReport( Dispatch( {}, "Multivariate ", OutlineBox, {Close( 1 )} ) )
);
Try( obj << Ellipsoid 3D Plot( Mass, Fore, Bicep ) );
```

**Code Explanation**:

1. Open data table.
2. Define multivariate analysis object.
3. Set response variables.
4. Use maximum likelihood estimation.
5. Create scatterplot matrix.
6. Close multivariate outline box.
7. Attempt to create 3D ellipsoid plot.
8. Specify plot variables.



### Example 44
> **Summary**: Creates a custom display window with four analyses placed horizontally, using the Multivariate platform to visualize relationships between response variables.

<!-- Keywords: #Multivariate, #CustomDisplayWindow, #JSLScriptingLanguage, #DataVisualization, #RobustEstimation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Multivariate(
	Y( :Mass, :Fore, :Bicep, :Chest, :Neck, :Shoulder, :Waist, :Height, :Calf, :Thigh, :Head ),
	Estimation Method( "Robust" ),
	Scatterplot Matrix( 1 ),
	SendToReport( Dispatch( {}, "Multivariate ", OutlineBox, {Close( 1 )} ) )
);
Try( obj << Ellipsoid 3D Plot( Mass, Fore, Bicep ) );
```

**Code Explanation**:

1. Open data table.
2. Launch Multivariate platform.
3. Set response variables.
4. Choose robust estimation method.
5. Enable scatterplot matrix.
6. Close multivariate outline box.
7. Attempt to create 3D ellipsoid plot.
8. Use Mass, Fore, Bicep for plot.



### Example 45
> **Summary**: Creates a multivariate analysis object with specified response variables, estimation method, and scatterplot matrix, and attempts to generate a 3D ellipsoid plot.

<!-- Keywords: #MultivariateAnalysis, #JSLScriptingLanguage, #ScatterplotMatrix, #EllipsoidPlot, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Multivariate(
	Y( :Mass, :Fore, :Bicep, :Chest, :Neck, :Shoulder, :Waist, :Height, :Calf, :Thigh, :Head ),
	Estimation Method( "Row-wise" ),
	Scatterplot Matrix( 1 ),
	SendToReport( Dispatch( {}, "Multivariate ", OutlineBox, {Close( 1 )} ) )
);
Try( obj << Ellipsoid 3D Plot( Mass, Fore, Bicep ) );
```

**Code Explanation**:

1. Open data table.
2. Create multivariate analysis object.
3. Specify response variables.
4. Set estimation method.
5. Generate scatterplot matrix.
6. Close multivariate outline box.
7. Attempt to create 3D ellipsoid plot.
8. Use specified variables for plot.



### Example 46
> **Summary**: Performs a multivariate analysis with pairwise estimation method, disabling scatterplot matrix and correlations, and creating a 3D ellipsoid plot for selected variables.

<!-- Keywords: #MultivariateAnalysis, #PairwiseEstimation, #JMPScriptingLanguage, #DataVisualization, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multivariate(
	Y(
		:Household Income, :IQ, :Eighth Grade Math, :High School Graduates, :Gross State Product, :Vegetable Consumption, :Smokers,
		:Physical Activity, :Obese, :College Degrees, :Alcohol Consumption
	),
	Estimation Method( "Pairwise" ),
	Scatterplot Matrix( 0 ),
	Correlations Multivariate( 0 ),
	Ellipsoid 3D Plot( :Household Income, :IQ, :Eighth Grade Math )
);
obj << Automatic Recalc( 1 );
dt << Delete Columns( "IQ" );
Log Capture( dt:Household Income[1] = 40000 );
Get Window( "US Demographics - Multivariate" ) << Close Window;
Close( dt, NoSave );
ut extract3DScaleBox = Function( {str},
	{tmp, newstr, idx, k = 0, i = 0, stack = {"("}, ex = Empty()},
	idx = J(
		4,
		1,
		k = Contains( str, "ScaleBox", i + 1 );
		i = If( k, k, i );
		k;
	);
	If( All( idx ),
		newstr = Substr( str, 1, idx[4] + 8 );
		For( i = idx[4] + 9, i <= Length( str ) & N Items( stack ), i++,
			tmp = Substr( str, i, 1 );
			If( Contains( {"(", ")"}, tmp ),
				If( tmp == "(",
					Insert Into( stack, tmp ),
					Remove From( stack, N Items( stack ) )
				)
			);
		);
		newstr ||= Substr( str, i - 1, -1 );
		ex = Parse( newstr );
	);
	Name Expr( ex );
);
```

**Code Explanation**:

1. Open data table;
2. Perform multivariate analysis.
3. Select multiple variables for analysis.
4. Use pairwise estimation method.
5. Disable scatterplot matrix.
6. Disable correlations multivariate.
7. Create 3D ellipsoid plot.
8. Enable automatic recalculation.
9. Delete IQ column.
10. Log capture household income value.
11. Close multivariate window.
12. Close dataset without saving.
13. Define function to extract 3D scale box.



### Example 47
> **Summary**: Performs a multivariate analysis to explore relationships between various demographic and economic factors, utilizing the Pairwise estimation method and disabling scatterplot matrix and correlations.

<!-- Keywords: #MultivariateAnalysis, #PairwiseEstimation, #JMPScriptingLanguage, #DataVisualization, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multivariate(
	Y(
		:Household Income, :IQ, :Eighth Grade Math, :High School Graduates, :Gross State Product, :Vegetable Consumption, :Smokers,
		:Physical Activity, :Obese, :College Degrees, :Alcohol Consumption
	),
	Estimation Method( "Pairwise" ),
	Scatterplot Matrix( 0 ),
	Correlations Multivariate( 0 ),
	Ellipsoid 3D Plot( :Household Income, :IQ, :Eighth Grade Math )
);
obj << Automatic Recalc( 1 );
dt << Delete Columns( "IQ" );
Log Capture( dt:Household Income[1] = 40000 );
Get Window( "US Demographics - Multivariate" ) << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Run Multivariate analysis.
3. Select specified columns for analysis.
4. Use Pairwise estimation method.
5. Disable Scatterplot Matrix.
6. Disable Correlations Multivariate.
7. Create Ellipsoid 3D Plot.
8. Enable automatic recalculation.
9. Delete IQ column.
10. Log Household Income value.
11. Close Multivariate window.



### Example 48
> **Summary**: Performs a multivariate analysis on a data table, excluding scatterplot matrix and using pairwise estimation method, with imputation of missing data.

<!-- Keywords: #MultivariateAnalysis, #JSLScriptingLanguage, #DataImputation, #PairwiseEstimation, #ScatterplotMatrix -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1:v1[1] = .;
mv = dt1 << Multivariate(
	Y( 5 :: 31 ),
	Scatterplot Matrix( 0 ),
	Estimation Method( "Pairwise" ),
	Covariance Matrix( 1 ),
	Multivariate Simple Statistics( 1 ), 
);
mv << Impute Missing Data( 1 );
Close( dt1, No Save );
dt2 = Current Data Table();
v1One = Column( dt2, 1 )[1];
```

**Code Explanation**:

1. Open data table;
2. Set first value of v1 to missing.
3. Perform multivariate analysis.
4. Exclude scatterplot matrix.
5. Use pairwise estimation method.
6. Include covariance matrix.
7. Include simple statistics.
8. Impute missing data.
9. Close original dataset without saving.
10. Retrieve first value of first column.



### Example 49
> **Summary**: Performs a multivariate analysis on a selected range of variables, enabling covariance matrix and simple statistics calculation, with missing data imputation.

<!-- Keywords: #MultivariateAnalysis, #JMPScriptingLanguage, #DataImputation, #CovarianceMatrix, #SimpleStatistics -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1:v1[1] = .;
mv = dt1 << Multivariate(
	Y( 5 :: 31 ),
	Scatterplot Matrix( 0 ),
	Estimation Method( "Pairwise" ),
	Covariance Matrix( 1 ),
	Multivariate Simple Statistics( 1 ), 
);
mv << Impute Missing Data( 1 );
```

**Code Explanation**:

1. Open data table;
2. Set v1[1] to missing.
3. Launch Multivariate analysis.
4. Select variables 5 to 31.
5. Disable scatterplot matrix.
6. Use pairwise estimation method.
7. Enable covariance matrix.
8. Enable simple statistics.
9. Impute missing data.



### Example 50
> **Summary**: Runs the extraction and visualization of principal components from a multivariate analysis, utilizing correlations for score plotting and matrix saving.

<!-- Keywords: #JMPScriptingLanguage, #MultivariateAnalysis, #PrincipalComponents, #CorrelationMatrix, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multivariate( Y( 2 :: 16 ), Principal Components( on Correlations, Score Plot( 2 ), Save Principal Components( 2 ) ) );
principal1 = dt << get as matrix( 17 );
principal2 = dt << get as matrix( 18 );
```

**Code Explanation**:

1. Open data table;
2. Perform multivariate analysis.
3. Specify columns 2 to 16 for analysis.
4. Enable principal components analysis.
5. Use correlations for analysis.
6. Generate score plot for first two components.
7. Save first two principal components.
8. Extract first principal component matrix.
9. Extract second principal component matrix.



### Example 51
> **Summary**: Performs a multivariate analysis on the selected columns of a data table, generating a report with pairwise estimation method and multivariate simple statistics.

<!-- Keywords: #MultivariateAnalysis, #PairwiseEstimation, #JMPScriptingLanguage, #DataVisualization, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multivariate( Y( 1 :: 4 ), Estimation Method( "Pairwise" ), Multivariate Simple Statistics( 1 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Run Multivariate analysis.
3. Select all four columns.
4. Use Pairwise estimation method.
5. Enable Multivariate Simple Statistics.
6. Generate report object.



### Example 52
> **Summary**: Analyze a multivariate data table by fitting Y by X Group using REML estimation method and generating a report with simple statistics.

<!-- Keywords: #MultivariateAnalysis, #REML, #JMPScriptingLanguage, #DataReport, #SimpleStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multivariate( Y( 1 :: 4 ), Estimation Method( "REML" ), Multivariate Simple Statistics( 1 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create multivariate object.
3. Set response variables 1-4.
4. Use REML estimation method.
5. Enable simple statistics.
6. Generate multivariate report.



### Example 53
> **Summary**: Executes a multivariate analysis on a data table, generating a report with simple statistics and estimation method set to 'ML'.

<!-- Keywords: #MultivariateAnalysis, #JMPScriptingLanguage, #DataVisualization, #SimpleStatistics, #EstimationMethod -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multivariate( Y( 1 :: 4 ), Estimation Method( "ML" ), Multivariate Simple Statistics( 1 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Launch Multivariate analysis.
3. Set response variables.
4. Choose ML estimation method.
5. Enable simple statistics.
6. Generate report object.
7. Extract report.



### Example 54
> **Summary**: Performs a multivariate analysis on columns 1 to 4 of the data table, generating simple statistics and a report using row-wise estimation method.

<!-- Keywords: #MultivariateAnalysis, #RowWiseEstimation, #SimpleStatistics, #JMPScriptingLanguage, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multivariate( Y( 1 :: 4 ), Estimation Method( "Row-wise" ), Multivariate Simple Statistics( 1 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Perform multivariate analysis.
3. Specify columns 1 to 4.
4. Use row-wise estimation method.
5. Generate simple statistics.
6. Retrieve analysis report.



### Example 55
> **Summary**: Generates a multivariate analysis report with robust estimation method and simple statistics for columns 1 to 4 in a data table.

<!-- Keywords: #MultivariateAnalysis, #RobustEstimation, #SimpleStatistics, #JMPScriptingLanguage, #DataReport -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multivariate( Y( 1 :: 4 ), Estimation Method( "Robust" ), Multivariate Simple Statistics( 1 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create multivariate object.
3. Specify columns 1 to 4.
4. Use robust estimation method.
5. Enable simple statistics.
6. Generate report object.



### Example 56
> **Summary**: Performs a multivariate analysis to extract correlations and eigenvalues from a data table, utilizing the Multivariate platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #MultivariateAnalysis, #CorrelationMatrix, #PrincipalComponentsAnalysis, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Multivariate(
	Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U ),
	Correlations Multivariate( 1 ),
	Principal Components( on Correlations )
);
rep = Report( obj );
Corr = rep[Matrix Box( 1 )] << get;
Eigen = rep[Number Col Box( "Eigenvalue" )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Launch Multivariate analysis.
3. Specify variables for analysis.
4. Enable correlations matrix.
5. Use correlation matrix for PCA.
6. Retrieve report object.
7. Extract correlations matrix.
8. Extract eigenvalues matrix.



### Example 57
> **Summary**: Performs a multivariate analysis report for the '1-Octanol' dataset, utilizing the Multivariate platform to visualize relationships between variables.

<!-- Keywords: #MultivariateAnalysis, #JSLScriptingLanguage, #DataVisualization, #StatisticalReporting, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
rpt = Multivariate( Y( :Name( "1-Octanol" ), :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
```

**Code Explanation**:

1. Open data table;
2. Create multivariate analysis report.



## Multivariate using Surface Plot
> **Summary**: Creates a surface plot to visualize the relationship between Pred Formula ABRASION and multiple variables, utilizing various customization options for color themes, axis settings, and 3D plotting.

<!-- Keywords: #JSL, #SurfacePlot, #GraphBuilder, #CustomizationOptions, #MultivariateAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Lock Z Scale( 1 ),
	Scale response axes independently( 1 ),
	Z Grid Position( 130 ),
	Surface Color Theme( "Green to Black to Red" ),
	Surface Color Theme2( "Green to White to Red" ),
	Surface Color Theme3( "White to Black" ),
	Surface Color Theme4( "Blue to Gray to Red" ),
	Response Column Color Theme( "Blue to Green to Red" ),
	Response Column Color Theme2( "Spectral" ),
	Response Column Color Theme3( "Jet" ),
	Response Column Color Theme4( "White to Blue" ),
	Formula( "Pred Formula ABRASION" ),
	Equation( "", "", "", "" ),
	Surface Color Method( "Solid", "Solid", "Solid", "Solid" ),
	SetVariableAxis( :SILICA, Axis Data( {Format( "Custom", Formula( Round( Ln( value ), 2 ) ), 8 )} ) ),
	SetVariableAxis( :SILANE, Axis Data( {Format( "Custom", Formula( Round( Log( value, 2 ), 2 ) ), 8 )} ) ),
	SetZAxis( Pred Formula ABRASION, Current Value( 130 ), Axis Data( {Format( "Custom", Formula( Round( Log10( value ), 2 ) ), 8 )} ) ),
	SetZAxis( z#2, Axis Data( {} ) ),
	SetZAxis( z#3, Axis Data( {} ) ),
	SetZAxis( z#4, Axis Data( {} ) ),
	SetXVariable( :SILICA ),
	SetYVariable( :SILANE ),
	Iso Value( 0, 139.119238722664 ),
	Frame3D( Set Rotation( -54, 0, 38 ) )
);
Open("data_table.jmp");
Multivariate(
	Y(
		:Household Income, :IQ, :Eighth Grade Math, :High School Graduates, :Gross State Product, :Vegetable Consumption, :Smokers,
		:Physical Activity, :Obese, :College Degrees, :Alcohol Consumption
	),
	Estimation Method( "Pairwise" ),
	Pairwise Correlations( 0 ),
	Scatterplot Matrix( 0 ),
	Ellipsoid 3D Plot( :Household Income, :IQ, :Eighth Grade Math ),
	SendToReport( Dispatch( {}, "Correlations", OutlineBox, {Close( 1 )} ), )
);
```

**Code Explanation**:

1. Open data_table data
2. Create surface plot.
3. Set prediction formula.
4. Lock Z scale.
5. Scale response axes independently.
6. Set Z grid position.
7. Define surface color themes.
8. Set response column color themes.
9. Customize variable axes.
10. Customize Z axis.
11. Set X and Y variables.
12. Add iso value.
13. Rotate 3D frame.
14. Open data_table data
15. Perform multivariate analysis.
16. Select variables for analysis.
17. Use pairwise estimation method.
18. Disable pairwise correlations.
19. Disable scatterplot matrix.
20. Create 3D ellipsoid plot.
21. Close correlations outline box.



## Multivariate using For Each
> **Summary**: Creates multivariate analysis objects for a set of samples, applying presets and setting report titles.

<!-- Keywords: #JSLScriptingLanguage, #MultivariateAnalysis, #DataTable, #PresetManagement, #ReportCustomization -->

**Code**:
```jsl
plat_samples = ["Multivariate" => {"Outlier Analysis", "Item Reliability Analysis", "All Correlations",
"Scatterplot Matrix Significance Circles", "Scatterplot Matrix Significance Heatmap"}, => {}];
dt = Open("data_table.jmp");
For Each( {sample}, plat_samples["Multivariate"],
	obj = dt << Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
	Eval( Eval Expr( obj << Apply Preset( "Sample Presets", Expr( sample ) ) ) );
	obj << Set Report Title( sample );
);
```

**Code Explanation**:

1. Define multivariate presets.
2. Open data table.
3. Iterate over multivariate samples.
4. Create multivariate analysis object.
5. Apply preset to analysis.
6. Set report title.
7. Repeat for each sample.



## Multivariate using Go To Row
> **Summary**: Selects and labels specific rows in a data table, followed by the generation of a multivariate analysis with scatterplot matrix, correlations, and jackknife distances.

<!-- Keywords: #JMPScriptingLanguage, #MultivariateAnalysis, #ScatterplotMatrix, #JackknifeDistances, #DataTableOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
r = dt << Go To Row( 2 );
r << Label;
r = dt << Go To Row( 5 );
r << Label;
r = dt << Go To Row( 69 );
r << Label;
r = dt << Go To Row( 76 );
r << Label;
r << clear select;
Multivariate(
	Y( :Calories, :Protein, :Fat, :Sodium, :Fiber, :Complex Carbos, :Tot Carbo, :Sugars, :Calories fr Fat, :Potassium ),
	Estimation Method( "Row-wise" ),
	Scatterplot Matrix( 0 ),
	Correlations Multivariate( 0 ),
	Jackknife Distances( 1 ),
	SendToReport(
		Dispatch( {"Outlier Analysis", "Jackknife Distances"}, "Multiv Outlier", FrameBox, {Frame Size( 446, 279 )} ),
		Dispatch( {"Outlier Analysis", "Jackknife Distances"}, "Multiv Outlier", FrameBox( 2 ), {Frame Size( 57, 279 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Go to row 2.
3. Label row 2.
4. Go to row 5.
5. Label row 5.
6. Go to row 69.
7. Label row 69.
8. Go to row 76.
9. Label row 76.
10. Clear selection.



## Multivariate using New Column
### Example 1
> **Summary**: Creates and configures multivariate scatterplot matrices with density ellipses for exploratory data analysis, utilizing JMP's Multivariate platform.

<!-- Keywords: #JMPScriptingLanguage, #MultivariateAnalysis, #ScatterplotMatrix, #DensityEllipses, #DataExploration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "By", Formula( Random Integer( 1, 4 ) ) );
mul1 = dt << Multivariate(
	Columns( :Ether, :Name( "1-Octanol" ), :Carbon Tetrachloride, :Benzene, :Hexane, :Chloroform ),
	By( :By ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Color( 3 ) ),
	Title( "Multivariate Test By Title" )
);
mul2 = dt << Multivariate(
	Columns( :Ether, :Name( "1-Octanol" ), :Carbon Tetrachloride, :Benzene, :Hexane, :Chloroform ),
	By( :By ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Color( 3 ) )
);
mul3 = dt << Multivariate(
	Columns( :Ether, :Name( "1-Octanol" ), :Carbon Tetrachloride, :Benzene, :Hexane, :Chloroform ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Color( 3 ) ),
	Title( "Multivariate Test By Title" )
);
rpt1 = mul1 << Report;
rpt2 = mul2 << Report;
rpt3 = mul3 << Report;
```

**Code Explanation**:

1. Open data table;
2. Add new "By" column.
3. Run first Multivariate analysis.
4. Configure scatterplot matrix.
5. Set density ellipses and color.
6. Assign title to first multivariate.
7. Run second Multivariate analysis.
8. Configure scatterplot matrix.
9. Set density ellipses and color.
10. Extract reports from all multivariates.



### Example 2
> **Summary**: Fits a multivariate model with Mahalanobis, Jackknife, and T¬≤ distances to a dataset, generating a profiler plot for analysis.

<!-- Keywords: #MultivariateModeling, #MahalanobisDistances, #JackknifeDistances, #T2Distances, #ProfilerPlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Constant Column", Set Each Value( 5 ) );
obj = dt << Multivariate(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width, :Constant Column ),
	Mahalanobis Distances( 1 ),
	Jackknife Distances( 1 ),
	T¬≤( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Add constant column.
3. Set each value to 5.
4. Launch Multivariate analysis.
5. Select all variables.
6. Enable Mahalanobis distances.
7. Enable Jackknife distances.
8. Enable T¬≤ distances.



### Example 3
> **Summary**: Calculates and visualizes multivariate statistics, including Mahalanobis distances, Jackknife distances, and T¬≤ statistics for a given data table.

<!-- Keywords: #MultivariateAnalysis, #JMPScriptingLanguage, #DataVisualization, #Statistics, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Constant Column", Set Each Value( 5 ) );
obj = dt << Multivariate(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width, :Constant Column ),
	Mahalanobis Distances( 1 ),
	Jackknife Distances( 1 ),
	T¬≤( 1 )
);
rpt = obj << report;
mahReport = rpt[Outline Box( "Mahalanobis Distances" )] << get scriptable object;
mahReport << Save Outlier Distances;
jackReport = rpt[Outline Box( "Jackknife Distances" )] << get scriptable object;
jackReport << Save Jackknife Distances;
t2Report = rpt[Outline Box( "T¬≤" )] << get scriptable object;
t2Report << Save T¬≤;
obj1 = dt << Multivariate(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Mahalanobis Distances( 1 ),
	Jackknife Distances( 1 ),
	T¬≤( 1 )
);
rpt1 = obj1 << report;
mahReport1 = rpt1[Outline Box( "Mahalanobis Distances" )] << get scriptable object;
mahReport1 << Save Outlier Distances;
jackReport1 = rpt1[Outline Box( "Jackknife Distances" )] << get scriptable object;
jackReport1 << Save Jackknife Distances;
t2Report1 = rpt1[Outline Box( "T¬≤" )] << get scriptable object;
t2Report1 << Save T¬≤;
_mat = dt << get as matrix( {7 :: 12} );
```

**Code Explanation**:

1. Open data table;
2. Add constant column.
3. Perform multivariate analysis.
4. Retrieve report object.
5. Extract Mahalanobis distances.
6. Save outlier distances.
7. Extract Jackknife distances.
8. Save Jackknife distances.
9. Extract T¬≤ statistics.
10. Save T¬≤ statistics.



## Multivariate using Profiler
> **Summary**: Creates a custom profiler object in JMP, configuring response variables, desirability functions, term values, and simulator settings to analyze data table relationships.

<!-- Keywords: #JMPScriptingLanguage, #ProfilerObject, #DesirabilityFunctions, #SimulatorSettings, #DataTableAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj_cust = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Profiler(
		1,
		Desirability Functions( 1 ),
		Term Value( :SILICA( 1.2, Lock( 0 ), Show( 1 ) ), :SILANE( 50, Lock( 0 ), Show( 1 ) ), :SULFUR( 2.3, Lock( 0 ), Show( 1 ) ) ),
		Simulator(
			1,
			Factors( :SILICA << Fixed( 1.041 ), :SILANE << Multivariate( 50, 6.532 ), :SULFUR << Random( Normal( 1.789, 0.3266 ) ) ),
			Responses(
				:Pred Formula ABRASION << Add Random Noise( 5.61124693112815 ), :Pred Formula MODULUS << No Noise,
				:Pred Formula ELONG << Add Random Weighted Noise( 20.5491717951077 ),
				:Pred Formula HARDNESS << Add Multivariate Noise( 1.26735561611683 )
			),
			X Correlations( 1, {:SILICA, :SILANE, :SULFUR}, [1 0.5 0.25, 0.5 1 -0.5, 0.25 -0.5 1] ),
			Y Correlations(
				1,
				{:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS},
				[1 0.75 0.5 -0.125, 0.75 1 -0.06 0.3, 0.5 -0.06 1 -0.45, -0.125 0.3 -0.45 1]
			),
			Resimulate
		)
	)
);
obj = dt << Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
preset = obj_cust << New Preset;
obj << Apply Preset( Preset );
```

**Code Explanation**:

1. Open data table;
2. Create profiler object.
3. Set response variables.
4. Configure desirability functions.
5. Define term values.
6. Initialize simulator.
7. Set factor types.
8. Add noise to responses.
9. Define X correlations.
10. Define Y correlations.
11. Resimulate data.
12. Save custom preset.
13. Apply preset to original profiler.



## Multivariate using Select Rows
> **Summary**: Runs multivariate analysis with different estimation methods, retrieving Mahalanobis distances reports and visualizing results in JMP.

<!-- Keywords: #JMPScriptingLanguage, #MultivariateAnalysis, #EstimationMethods, #MahalanobisDistances, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( 4 :: 40 );
dt << Exclude;
dt << Clear Select;
get line value = Expr(
	mv = Multivariate( Y( :height ), Estimation Method( Expr( _method_ ) ), Mahalanobis Distances( 1 ) );
	rp = Report( mv );
	jrn = rp["Mahalanobis Distances"] << get journal;
	mv << close window;
);
Eval( Substitute( Name Expr( getlinevalue ), Expr( _method_ ), "REML" ) );
Eval( Substitute( Name Expr( getlinevalue ), Expr( _method_ ), "ML" ) );
Eval( Substitute( Name Expr( getlinevalue ), Expr( _method_ ), "Row-wise" ) );
Eval( Substitute( Name Expr( getlinevalue ), Expr( _method_ ), "Pairwise" ) );
Eval( Substitute( Name Expr( getlinevalue ), Expr( _method_ ), "Robust" ) );
```

**Code Explanation**:

1. Open data table;
2. Select rows 4 to 40.
3. Exclude selected rows.
4. Clear row selection.
5. Define `getlinevalue` expression.
6. Perform multivariate analysis with REML method.
7. Retrieve Mahalanobis distances report.
8. Close multivariate window.
9. Repeat for ML method.
10. Repeat for Row-wise method.



## Multivariate using Delete Rows
> **Summary**: Analyzes and creates reports for a multivariate model, specifying columns 2 to last as Y, using the Pairwise estimation method, and generating score plots with imputation.

<!-- Keywords: #JMPScriptingLanguage, #MultivariateAnalysis, #PairwiseEstimation, #ScorePlot, #Imputation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Rows( 10 :: N Row( dt ) );
dt[6, 3 :: 6] = .;
dt[8, 5 :: 9] = .;
obj = dt << Multivariate(
	Y( 2 :: N Col( dt ) ),
	Estimation Method( "Pairwise" ),
	Scatterplot Matrix( 0 ),
	Principal Components( "on Correlations", Score Plot( 2 ), Score Plot with Imputation( 2 ) )
);
rpt = obj << Report;
```

**Code Explanation**:

1. Open data table;
2. Delete rows 10 to last.
3. Set cells [6,3:6] to missing.
4. Set cells [8,5:9] to missing.
5. Run Multivariate analysis.
6. Specify columns 2 to last as Y.
7. Use Pairwise estimation method.
8. Disable Scatterplot Matrix.
9. Enable Principal Components on correlations.
10. Generate Score Plot with 2 components.
11. Generate Score Plot with Imputation for 2 components.
12. Retrieve report from analysis.



## Multivariate using For
### Example 1
> **Summary**: Process of setting every second value in each column to missing, and then performs multivariate analysis on columns 2-16 with imputation of missing data.

<!-- Keywords: #JSLScriptingLanguage, #MultivariateAnalysis, #Imputation, #DataManipulation, #Distribution -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For( i = 2, i <= N Cols( dt ), i++,
	Column( dt, i )[2 * i :: 2 * (i + 1)] = .
);
obj = dt << Multivariate( Y( 2 :: 16 ) );
obj << Impute Missing Data;
```

**Code Explanation**:

1. Open data table;
2. Loop through columns starting from 2.
3. Set every second value in each column to missing.
4. Perform multivariate analysis on columns 2-16.
5. Impute missing data in the analysis.



### Example 2
> **Summary**: Process of preparing a data table for multivariate analysis by setting every second value to missing, performing imputation, and extracting relevant columns as matrices.

<!-- Keywords: #JSLScriptingLanguage, #MultivariateAnalysis, #DataPreprocessing, #Imputation, #MatrixOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For( i = N Cols( dt ), i >= 2, i--,
	Column( dt, i )[2 * (i - 1) :: 2 * i] = .
);
obj = dt << Multivariate( Y( 2 :: 16 ) );
obj << Save Imputed Formula;
_mat = (dt << get as matrix( {17 :: N Cols( dt )} ));
obj << Impute Missing Data;
dt1 = Current Data Table();
_mat1 = (dt1 << get as matrix( {1 :: N Cols( dt1 )} ));
```

**Code Explanation**:

1. Open data table;
2. Loop through columns 2 to end.
3. Set every second value to missing.
4. Perform multivariate analysis.
5. Save imputation formula.
6. Extract columns 17 to end as matrix.
7. Impute missing data.
8. Get current data table.
9. Extract all columns as matrix.



### Example 3
> **Summary**: Process of setting every second row to missing, running multivariate analysis on columns 2-16, imputing missing data, and saving the imputation formula in a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #MultivariateAnalysis, #Imputation, #DataTableManipulation, #JSL -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For( i = 2, i <= N Cols( dt ), i++,
	Column( dt, i )[2 * i :: 2 * (i + 1)] = .
);
obj = dt << Multivariate( Y( 2 :: 16 ) );
obj << Impute Missing Data;
dt = Open("data_table.jmp");
For( i = N Cols( dt ), i >= 2, i--,
	Column( dt, i )[2 * (i - 1) :: 2 * i] = .
);
obj = dt << Multivariate( Y( 2 :: 16 ) );
obj << Save Imputed Formula;
_mat = (dt << get as matrix( {17 :: N Cols( dt )} ));
obj << Impute Missing Data;
dt1 = Current Data Table();
_mat1 = (dt1 << get as matrix( {1 :: N Cols( dt1 )} ));
```

**Code Explanation**:

1. Open data table;
2. Loop through columns 2 to end.
3. Set every second row to missing.
4. Run Multivariate analysis on columns 2-16.
5. Impute missing data.
6. Reopen data_table dataset
7. Loop through columns end to 2.
8. Set every second row to missing.
9. Run Multivariate analysis on columns 2-16.
10. Save imputation formula.



## Multivariate using Random Integer
> **Summary**: Runs multivariate analysis with different estimation methods and extracts principal components from a data table.

<!-- Keywords: #JSLScriptingLanguage, #MultivariateAnalysis, #PrincipalComponents, #DataTableManipulation, #EstimationMethods -->

**Code**:
```jsl
n = 3;
m = 10;
X = J( m, n, Random Integer( 4 ) );
X[1, 1] = .;
dt = As Table( X );
launch = Function( {meth},
	multi = Expr(
		dt << Multivariate( Y( 1 :: n ), Estimation Method( estMeth ) )
	);
	obj = Substitute( Name Expr( multi ), Expr( estMeth ), Eval Expr( meth ) );
	bet = Eval( Name Expr( obj ) );
	rmult = bet << report;
	Method = Arg( Parse( rmult[Text Box( 2 )] << get journal ) );
);
meth = "ML";
launch( meth );
meth = "REML";
launch( meth );
meth = "Robust";
launch( meth );
meth = "Pairwise";
launch( meth );
meth = "Row-wise";
launch( meth );
Close( dt, No Save );
dt = Open("data_table.jmp");
obj = dt << Multivariate( Y( 2 :: 16 ), Principal Components( on Correlations, Score Plot( 2 ), Save Principal Components( 2 ) ) );
principal1 = dt << get as matrix( 17 );
principal2 = dt << get as matrix( 18 );
```

**Code Explanation**:

1. Initialize variables n and m.
2. Create matrix X with random integers.
3. Set first element of X to missing.
4. Convert X to data table dt.
5. Define function launch for multivariate analysis.
6. Set estimation method based on input.
7. Launch multivariate analysis with ML method.
8. Launch multivariate analysis with REML method.
9. Launch multivariate analysis with Robust method.
10. Launch multivariate analysis with Pairwise method.
11. Launch multivariate analysis with Row-wise method.
12. Close data table dt without saving.
13. Open data table;
14. Perform multivariate analysis on columns 2 to 16.
15. Extract principal components into matrices.



## Multivariate using N Col
### Example 1
> **Summary**: Performs a multivariate analysis workflow, including principal component extraction and reporting, using JMP's scripting language.

<!-- Keywords: #JMPScriptingLanguage, #MultivariateAnalysis, #PrincipalComponents, #DataTransformation, #Reporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nc = N Col( dt );
obj = dt << Multivariate(
	Y(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	)
);
obj << Principal Components( "on Correlations", Save Principal Components( 27 ) );
ncPC1 = N Col( dt ) - nc;
nc = N Col( dt );
obj2 = dt << Principal Components(
	Y(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	),
	Estimation Method( "Default" ),
	"on Correlations"
);
obj2 << Save Principal Components( 27 );
ncPC2 = N Col( dt ) - nc;
Close( dt, nosave );
Random Reset( 444 );
mat = J( 24, 31, Random Normal() );
dt = As Table( mat );
obj = dt << Principal Components( Y( 1 :: 31 ), Estimation Method( "Wide" ), Eigenvalues( 1 ) );
	
rpt = obj << Report();
```

**Code Explanation**:

1. Open data table;
2. Count initial columns.
3. Run Multivariate analysis.
4. Enable Principal Components on correlations.
5. Save 27 principal components.
6. Count new columns after PCA.
7. Run another Multivariate analysis.
8. Set estimation method to default.
9. Enable Principal Components on correlations.
10. Save 27 principal components.
11. Count new columns after PCA.
12. Close dataset without saving.
13. Reset random seed.
14. Create random normal matrix.
15. Convert matrix to table.
16. Run Principal Components analysis.
17. Extract report.



### Example 2
> **Summary**: Process of performing two multivariate analyses on a data table, enabling principal components on correlations and saving 27 principal components in each analysis.

<!-- Keywords: #MultivariateAnalysis, #PrincipalComponents, #CorrelationMatrix, #JSLScriptingLanguage, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nc = N Col( dt );
obj = dt << Multivariate(
	Y(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22,
		:v23, :v24, :v25, :v26, :v27
	)
);
obj << Principal Components( "on Correlations", Save Principal Components( 27 ) );
ncPC1 = N Col( dt ) - nc;
nc = N Col( dt );
obj2 = dt << Principal Components(
	Y(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22,
		:v23, :v24, :v25, :v26, :v27
	),
	Estimation Method( "Default" ),
	"on Correlations"
);
obj2 << Save Principal Components( 27 );
ncPC2 = N Col( dt ) - nc;
```

**Code Explanation**:

1. Open data table;
2. Count initial columns.
3. Run Multivariate analysis.
4. Enable Principal Components on Correlations.
5. Save 27 principal components.
6. Count new columns after PCA.
7. Run another Multivariate analysis.
8. Enable Principal Components on Correlations.
9. Save 27 principal components again.
10. Count new columns after second PCA.



