# Dimensionality Reduction

More examples for this topic using the sample data files provided with JMP

### Perform principal components: analysis for variable reduction

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

### Create a loading plot using the Principal Components analysis with specified correlations and eigenvalues on the dataset.

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

