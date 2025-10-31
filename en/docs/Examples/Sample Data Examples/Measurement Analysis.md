# Measurement Analysis

More examples for this topic using the sample data files provided with JMP

### Perform measurement systems analysis using the EMP procedure with crossed model and range chart for dispersion.

```jsl

// Open data table
dt = Open("$Sample_Data/Variability Data/2 Factors Crossed.jmp");
// EMP Measurement Systems Analysis
EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Model( Crossed ),
	Dispersion Chart Type( "Range" ),
	Average Chart( 1 ),
	Dispersion Chart( 1 )
);

```

