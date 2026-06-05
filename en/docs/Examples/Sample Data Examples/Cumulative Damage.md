# Cumulative Damage

## Example 1
> **Summary**: Perform a Piecewise Ramp Stress Cumulative Damage analysis with an Inverse Power relationship and Weibull distribution, using the Piecewise Ramp Stress Pattern data table for patterns and the CD Piecewise Ramp Stress data table for time to event data.

<!-- Keywords: #CumulativeDamage, #DataTable, #Distribution, #Censor, #ID -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/CD Piecewise Ramp Stress.jmp");
// Cumulative Damage
Open(
	"$SAMPLE_DATA/Reliability/CD Piecewise Ramp Stress Pattern.jmp"
);
Cumulative Damage(
	Model Type( "Piecewise Ramp Stress" ),
	Time to Event Data Table(
		"CD Piecewise Ramp Stress",
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID )
	),
	Piecewise Ramp Stress Pattern Data Table(
		"CD Piecewise Ramp Stress Pattern",
		Stress Duration( :Duration ),
		Stress Ramp(
			:Stress Start, :Stress End
		),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Weibull" ),
	Pattern Continuation( "Terminate" )
);
```

## Example 2
> **Summary**: Perform cumulative damage analysis using the Ramp Stress model, Weibull distribution, and Inverse Power relationship.

<!-- Keywords: #CumulativeDamage, #DataTable, #Distribution, #Censor, #ID -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/CD Ramp Stress.jmp");
// Cumulative Damage
Open(
	"$SAMPLE_DATA/Reliability/CD Ramp Stress Pattern.jmp"
);
Cumulative Damage(
	Model Type( "Ramp Stress" ),
	Time to Event Data Table(
		"CD Ramp Stress",
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID )
	),
	Ramp Stress Pattern Data Table(
		"CD Ramp Stress Pattern",
		Intercept( :intercept ),
		Slope( :slope ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Weibull" )
);
```

## Example 3
> **Summary**: Perform a Cumulative Damage analysis using the Sinusoid Stress model in the Reliability platform, specifying the Weibull distribution and inverse power relationship for the failure data.

<!-- Keywords: #CumulativeDamage, #DataTable, #Distribution, #Censor, #ID -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/CD Sinusoid Stress.jmp");
// Cumulative Damage
Open(
	"$SAMPLE_DATA/Reliability/CD Sinusoid Stress Pattern.jmp"
);
Cumulative Damage(
	Model Type( "Sinusoid Stress" ),
	Time to Event Data Table(
		"CD Sinusoid Stress",
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID )
	),
	Sinusoid Stress Pattern Data Table(
		"CD Sinusoid Stress Pattern",
		Level( :level ),
		Amplitude( :amplitude ),
		Period( :period ),
		Phase( :phase ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Weibull" )
);
```

## Example 4
> **Summary**: Perform cumulative damage analysis using step stress modeling with an inverse power relationship and Weibull distribution.

<!-- Keywords: #CumulativeDamage, #DataTable, #Distribution, #Censor, #ID -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Reliability/CD Step Stress.jmp");
// Cumulative Damage
Open(
	"$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp"
);
Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		"CD Step Stress",
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID )
	),
	Step Stress Pattern Data Table(
		"CD Step Stress Pattern",
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Weibull" ),
	Pattern Continuation( "Terminate" )
);
```

