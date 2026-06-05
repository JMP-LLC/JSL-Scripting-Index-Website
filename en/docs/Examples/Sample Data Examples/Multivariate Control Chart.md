# Multivariate Control Chart

## Example 1
> **Summary**: Save T Square statistics and configuration for a multivariate control chart involving six variables.

<!-- Keywords: #ControlChart, #DataTable, #MultivariateControlChart, #Chart, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Aluminum Pins Historical.jmp");
// Save T Square
dt = Current Data Table();
MyTchart =
Multivariate Control Chart(
	Y(
		:Diameter1, :Diameter2,
		:Diameter3, :Diameter4, :Length1,
		:Length2
	),
	Subgroup( :subgroup )
);
MyTchart << Save T Square;
```

## Example 2
> **Summary**: Generate a multivariate control chart for quality control variables on aluminum pins using the Subgroup function and set the Alpha Level to 0.0027.

<!-- Keywords: #ControlChart, #MultivariateControlChart, #Chart, #Group, #SetAlphaLevel -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Aluminum Pins Historical.jmp");
// Multivariate Control Chart
Multivariate Control Chart(
	Y(
		:Diameter1, :Diameter2,
		:Diameter3, :Diameter4, :Length1,
		:Length2
	),
	Subgroup( :subgroup ),
	Set Alpha Level( 0.0027 )
);
```

## Example 3
> **Summary**: Build a Multivariate Control Chart using the Principal Components method and Phase Detection.

<!-- Keywords: #ControlChart, #MultivariateControlChart, #PrincipalComponents, #Chart, #PhaseDetection -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Gravel.jmp");
// Multivariate Control Chart
Multivariate Control Chart(
	Y( :Large, :Medium ),
	Principal Components( 1 ),
	Phase Detection( 1 )
);
```

## Example 4
> **Summary**: Perform Principal Component Analysis to identify underlying factors influencing multiple quality control metrics in Steam Turbine Historical data.

<!-- Keywords: #ControlChart, #DataTable, #MultivariateControlChart, #Chart, #Column -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Steam Turbine Historical.jmp");
// Principal Component Analysis
Multivariate Control Chart(
	Y(
		:Fuel, :Steam Flow, :Steam Temp,
		:MW, :Cool Temp, :Pressure
	)
) << Save T Square <<
Save Principal Components;
Current Data Table() <<
New Column( :PCA Column,
	Continuous,
	Formula(
		:Prin1 ^ 2 + :Prin2 ^ 2 + :Prin3
		 ^ 2 + :Prin4 ^ 2 + :Prin5 ^ 2
		+:Prin6 ^ 2
	)
);
```

## Example 5
> **Summary**: Construct a multivariate control chart using the Multivariate Control Chart function .

<!-- Keywords: #ControlChart, #MultivariateControlChart, #PrincipalComponents, #Chart, #SetAlphaLevel -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Thickness.jmp");
// Multivariate Control Chart
Multivariate Control Chart(
	Y(
		:Thickness 01, :Thickness 02,
		:Thickness 03, :Thickness 04,
		:Thickness 05, :Thickness 06,
		:Thickness 07, :Thickness 08,
		:Thickness 09, :Thickness 10,
		:Thickness 11, :Thickness 12
	),
	T Square Partitioned( 1 ),
	Principal Components( 1 ),
	Set Alpha Level(
		0.00270000000000004
	)
);
```

