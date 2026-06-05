# Degradation

## Example 1
> **Summary**: Perform a destructive degradation analysis using the Destructive Degradation() function with multiple models and control methods.

<!-- Keywords: #Degradation, #DestructiveDegradation, #Censor, #CensorCode, #Code -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Adhesive Bond.jmp");
// Destructive Degradation Fit
Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	Censor( :Censor ),
	X( :Degrees ),
	Censor Code( "Right" ),
	Model(
		"Log10", "Sqrt", "Normal",
		"Individual Path with Intercept"
	),
	Control(
		"Log10", "Sqrt", "Normal",
		"Individual Path with Intercept"
	)
);
```

## Example 2
> **Summary**: Perform repeated measures degradation analysis using the Degradation function.

<!-- Keywords: #Degradation, #Application, #Label, #Time -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Device B.jmp");
// Degradation
Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Application(
		Repeated Measures Degradation
	)
);
```

## Example 3
> **Summary**: Build a degradation model using repeated measures degradation with custom linear and nonlinear paths to analyze the change in current over time in the GaAs Laser dataset.

<!-- Keywords: #Degradation, #PredictionInterval, #SpecLimits, #alpha, #Application -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/GaAs Laser.jmp");
// Degradation
Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application(
		Repeated Measures Degradation
	),
	Connect Data Markers( 1 ),
	Show Fitted Lines( 0 ),
	Show Spec Limits( 1 ),
	Show Median Curves( 0 ),
	Show Legend( 0 ),
	No Tab List( 0 ),
	Use Pooled MSE for Nonpoolable Model(
		0
	),
	Set Censoring Time( . ),
	Show Residual Plot( 1 ),
	Show Inverse Prediction Plot( 1 ),
	Inverse Prediction Interval(
		No Interval
	),
	Inverse Prediction Alpha( 0.05 ),
	Path Specifications(
		Simple Linear(
			Add Custom X Scale(
				{{"Linear",
				Function( {x}, x ),
				Function( {x}, x )}}
			),
			Add Custom Y Scale(
				{{"Linear",
				Function( {x}, x ),
				Function( {x}, x )}}
			),
			Slope( Different ),
			Intercept( Different ),
			Select X Scale( "Linear" ),
			Select Y Scale( "Linear" )
		),
		Nonlinear Path
	),
	Simple Linear Path( 1 ),
	Mean Path( 1 )
);
```

## Example 4
> **Summary**: Perform repeated measures degradation analysis on the resistor data.

<!-- Keywords: #Degradation, #Application, #Label, #Time -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Resistor.jmp");
// Degradation
Degradation(
	Y( :Percent Increase ),
	Time( :kHours ),
	Label( :Resistor ),
	X( :Degrees C ),
	Application(
		Repeated Measures Degradation
	)
);
```

## Example 5
> **Summary**: Analyze degradation using the Degradation platform, with time as the predictor, concentration as the response, and batch number as the label.

<!-- Keywords: #Degradation, #PredictionInterval, #alpha, #Application, #CensoringTime -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/Stability.jmp");
// Degradation
Degradation(
	Y( :"Concentration (mg/Kg)"n ),
	Time( :Time ),
	Label( :Batch Number ),
	Application( Stability Test ),
	Connect Data Markers( 0 ),
	Show Fitted Lines( 1 ),
	Show Median Curves( 0 ),
	Show Legend( 1 ),
	Set Upper Spec Limit( . ),
	Set Lower Spec Limit( 99 ),
	Set Censoring Time( . ),
	Show Residual Plot( 1 ),
	Show Inverse Prediction Plot( 1 ),
	Inverse Prediction Interval(
		No Interval
	),
	Inverse Prediction Alpha( 0.05 )
);
```

