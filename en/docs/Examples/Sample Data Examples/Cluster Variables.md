# Cluster Variables

## Example 1
> **Summary**: Example variable clustering

<!-- Keywords: #ClusterVariables, #Close, #Report, #SendToReport, #Variables -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cherts.jmp");
// Cluster Variables
Cluster Variables(
	Y(
		:Al, :Mn, :Na, :Br, :Ce, :Co, :Cr,
		:Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm,
		:U
	),
	SendToReport(
		Dispatch( {},
			"Standardized Components",
			OutlineBox,
			{Close( 1 )}
		)
	)
);
```

## Example 2
> **Summary**: Cluster variables using the K-means clustering algorithm with the specified numerical columns.

<!-- Keywords: #ClusterVariables, #Variables -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Diabetes.jmp");
// Cluster Variables
Cluster Variables(
	Y(
		:Age, :BMI, :BP,
		:Total Cholesterol, :LDL, :HDL,
		:TCH, :LTG, :Glucose
	)
);
```

