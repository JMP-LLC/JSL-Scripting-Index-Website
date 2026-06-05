# Fit Definitive Screening

## Example 1
> **Summary**: Fit a Definitive Screening model to analyze the effects of six process variables on yield.

<!-- Keywords: #FitDefinitiveScreening -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Extraction Data.jmp");
// Fit Definitive Screening
Fit Definitive Screening(
	X(
		:Methanol, :Ethanol, :Propanol,
		:Butanol, :pH, :Time
	),
	Y( :Yield )
);
```

## Example 2
> **Summary**: Perform Definitive Screening Analysis with Response Variable Yield and Eight Predictor Variables.

<!-- Keywords: #FitDefinitiveScreening -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Extraction2 Data.jmp");
// Fit Definitive Screening
Fit Definitive Screening(
	Y( :Yield ),
	X(
		:Lot, :Methanol, :Ethanol,
		:Propanol, :Butanol, :pH, :Time
	)
);
```

## Example 3
> **Summary**: Generate a Definitive Screening Design to identify significant factors affecting yield in an extraction process.

<!-- Keywords: #FitDefinitiveScreening -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Extraction3 Data.jmp");
// Fit Definitive Screening
Fit Definitive Screening(
	X(
		:Lot, :Methanol, :Ethanol,
		:Propanol, :Butanol, :pH, :Time
	),
	Y( :Yield )
);
```

## Example 4
> **Summary**: Fit a Definitive Screening design to analyze the effects of various factors on the solids content in a peanut processing experiment.

<!-- Keywords: #FitDefinitiveScreening -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Peanut Data.jmp");
// Fit Definitive Screening
Fit Definitive Screening(
	X(
		:pH, :Water Temp,
		:Extraction TIme, :Ratio,
		:Agitation Speed, :Hydrolyze,
		:"Pre-Soak"n
	),
	Y( :Solids )
);
```

