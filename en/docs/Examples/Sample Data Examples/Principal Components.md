# Principal Components

## Example 1
> **Summary**: Perform principal components: analysis for variable reduction

<!-- Keywords: #PrincipalComponents, #EstimationMethod, #FrameSize, #Method, #Report -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Body Fat.jmp");
// Principal Components: Variable Reduction
Principal Components(
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
	on Correlations,
	Cluster Variables,
	SendToReport(
		Dispatch( {"Summary Plots"},
			"PCA Summary Plots", FrameBox,
			{Frame Size( 51, 37 )}
		),
		Dispatch( {"Summary Plots"},
			"PCA Summary Plots",
			FrameBox( 2 ),
			{Frame Size( 55, 37 )}
		)
	)
);
```

## Example 2
> **Summary**: Perform principal component analysis (PCA) on variables using the on Correlations option.

<!-- Keywords: #PrincipalComponents, #EstimationMethod, #Method -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Flight Delays.jmp");
// Principal Components
Principal Components(
	Y(
		:AA, :CO, :DL, :F9, :FL, :NW, :UA,
		:US, :WN
	),
	Estimation Method( "Default" ),
	"on Correlations"
);
```

## Example 3
> **Summary**: Create a loading plot using the Principal Components analysis with specified correlations and eigenvalues on the dataset.

<!-- Keywords: #PrincipalComponents, #Eigenvalues, #EstimationMethod, #LoadingPlot, #Method -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Steam Turbine Historical.jmp");
// Loading plot
Principal Components(
	Y(
		:Fuel, :Steam Flow, :Steam Temp,
		:MW, :Cool Temp, :Pressure
	),
	Estimation Method( "Default" ),
	"on Correlations",
	Eigenvalues( 1 ),
	Summary Plots( 0 ),
	Loading Plot( 4 )
);
```

## Example 4
> **Summary**: Perform principal components analysis on a dataset containing thickness measurements using the Row-wise estimation method, on covariances, with eigenvalues calculation and arrow lines in the PCA summary plots. Adjust the frame size of the PCA summary plots to 200x200.

<!-- Keywords: #PrincipalComponents, #ArrowLines, #Eigenvalues, #EstimationMethod, #FrameSize -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Thickness.jmp");
// Principal Components
Principal Components(
	Y(
		:Thickness 01, :Thickness 02,
		:Thickness 03, :Thickness 04,
		:Thickness 05, :Thickness 06,
		:Thickness 07, :Thickness 08,
		:Thickness 09, :Thickness 10,
		:Thickness 11, :Thickness 12
	),
	Estimation Method( "Row-wise" ),
	on Covariances,
	Eigenvalues( 1 ),
	Arrow Lines( 1 ),
	SendToReport(
		Dispatch( {"Summary Plots"},
			"PCA Summary Plots", FrameBox,
			{Frame Size( 200, 200 )}
		),
		Dispatch( {"Summary Plots"},
			"PCA Summary Plots",
			FrameBox( 2 ),
			{Frame Size( 200, 200 )}
		)
	)
);
```

