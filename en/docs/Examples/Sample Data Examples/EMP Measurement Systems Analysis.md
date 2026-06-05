# EMP Measurement Systems Analysis

## Example 1
> **Summary**: Perform measurement systems analysis using the EMP procedure with crossed model and range chart for dispersion.

<!-- Keywords: #EMPMeasurementSystemsAnalysis, #AverageChart, #Chart, #DispersionChart, #DispersionChartType -->

**Code:**
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

## Example 2
> **Summary**: Perform EMP Measurement Systems Analysis using Nested Model, including Dispersion Chart, Variance Components, Average Chart, and Dispersion Chart.

<!-- Keywords: #EMPMeasurementSystemsAnalysis, #AverageChart, #Chart, #DispersionChart, #DispersionChartType -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Variability Data/2 Factors Nested.jmp");
// EMP Measurement Systems Analysis
EMP Measurement Systems Analysis(
	Y( :" Y"n ),
	X( :Operator ),
	Part( :Part ),
	Model( Nested ),
	Dispersion Chart Type( "Range" ),
	Variance Components( 1 ),
	Average Chart( 1 ),
	Dispersion Chart( 1 )
);
```

## Example 3
> **Summary**: Perform an EMP Measurement Systems Analysis using nested and crossed factors, generate a dispersion chart using the range method for variability data.

<!-- Keywords: #EMPMeasurementSystemsAnalysis, #DispersionChartType, #MeasurementSystemsAnalysis, #Model, #Part -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Variability Data/3 Factors Nested & Crossed.jmp");
// EMP Measurement Systems Analysis
EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator, :Instrument ),
	Part( :Part ),
	Model(
		"Nested then Crossed (3 Factors Only)"n
	),
	Dispersion Chart Type( "Range" )
);
```

## Example 4
> **Summary**: Perform Measurement Systems Analysis for EMP with crossed model, range chart, and average and dispersion charts .

<!-- Keywords: #EMPMeasurementSystemsAnalysis, #AverageChart, #Chart, #DispersionChart, #DispersionChartType -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Variability Data/Gasket.jmp");
// EMP Measurement Systems Analysis
EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	Average Chart( 1 ),
	Dispersion Chart( 1 )
);
```

## Example 5
> **Summary**: Perform EMP Measurement Systems Analysis using Crossed Model, Dispersion Chart with Range, and include Average and Dispersion Charts.

<!-- Keywords: #EMPMeasurementSystemsAnalysis, #AverageChart, #Chart, #DispersionChart, #DispersionChartType -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Variability Data/Wafer.jmp");
// EMP Measurement Systems Analysis
EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Wafer ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	Average Chart( 1 ),
	Dispersion Chart( 1 )
);
```

