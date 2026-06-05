# Structural Equation Models

> **Summary**: Perform confirmatory factor analysis (CFA) with a single-factor conflict model using the SEM platform.

<!-- Keywords: #StructuralEquationModels, #Loadings, #Means, #ModelSpecification, #ModelVariables -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Job Satisfaction.jmp");
// SEM: CFA 1Factor Conflict UI
Structural Equation Models(
	Model Variables(
		:Person_C, :Intra_C, :Inter_C
	),
	Model Specification(
		New Latent( "Conflict" ),
		Means(
			{"Constant", {:Person_C,
			:Intra_C, :Inter_C}}
		),
		Loadings(
			{"Conflict", {:Person_C,
			:Intra_C, :Inter_C}, {1}}
		),
		Variances(
			{:Person_C, {:Person_C}},
			{:Intra_C, {:Intra_C}},
			{:Inter_C, {:Inter_C}},
			{"Conflict", {"Conflict"}}
		)
	)
);
```

