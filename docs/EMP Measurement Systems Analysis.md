# EMP Measurement Systems Analysis



## EMP MSA Analysis > EMP AIAG Gauge Results

### AIAG Labels

**Syntax:** obj << (EMP MSA Analysis[number] << "AIAG Gauge R&R Results"n(1, AIAG Labels( state=0|1 )))

**Description:** Shows or hides labels in the AIAG Gauge R&R Results table. The labels are defined by the Automotive Industry Action Group (AIAG). On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << "AIAG Gauge R&R Results"n( 1, AIAG Labels( 0 ) ));

```

### Discrimination Ratio

**Syntax:** obj << (EMP MSA Analysis[number] << "AIAG Gauge R&R Results"n(1, Discrimination Ratio( state=0|1 )))

**Description:** Shows or hides the discrimination ratio for the given model.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << "AIAG Gauge R&R Results"n( 1, Discrimination Ratio( 1 ) ));

```

## EMP MSA Analysis > EMP Average Chart

### Show Connected Means

**Syntax:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Connected Means( state=0|1 )))

**Description:** Shows or hides lines that connect the average measurement values on the Average Chart. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Connected Means( 0 ) ));

```

### Show Control Limits

**Syntax:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Control Limits( state=0|1 )))

**Description:** Shows or hides control limits on the Average Chart. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Control Limits( 0 ) ));

```

### Show Control Limits Shading

**Syntax:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Control Limits Shading( state=0|1 )))

**Description:** Shows or hides shading between the control limits on the Average Chart. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Control Limits Shading( 0 ) ));

```

### Show Data

**Syntax:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Data( state=0|1 )))

**Description:** Shows or hides the data points on the Average Chart.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Data( 1 ) ));

```

### Show Grand Mean

**Syntax:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Grand Mean( state=0|1 )))

**Description:** Shows or hides the overall mean of the Y variable on the Average Chart. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Grand Mean( 0 ) ));

```

### Show Separators

**Syntax:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Separators( state=0|1 )))

**Description:** Shows or hides vertical lines that separate the X variables on the Average Chart. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Separators( 0 ) ));

```

## EMP MSA Analysis > EMP Dispersion Chart

### Show Average Dispersion

**Syntax:** obj << (EMP MSA Analysis[number] << Dispersion Chart( 1, Show Average Dispersion( state=0|1 )))

**Description:** Shows or hides the average range or standard deviation on the dispersion chart. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Average Dispersion( 0 ) ));

```

### Show Connected Points

**Syntax:** obj << (EMP MSA Analysis[number] << Dispersion Chart( 1, Show Connected Points( state=0|1 )))

**Description:** Shows or hides lines that connect all of the ranges or standard deviations on the dispersion chart. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Connected Points( 0 ) ));

```

### Show Control Limits

**Syntax:** obj << (EMP MSA Analysis[number] << Dispersion Chart( 1, Show Control Limits( state=0|1 )))

**Description:** Shows or hides the control limits on the dispersion chart. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits( 0 ) ));

```

### Show Control Limits Shading

**Syntax:** obj << (EMP MSA Analysis[number] << Dispersion Chart( 1, Show Control Limits Shading( state=0|1 )))

**Description:** Shows or hides shading between the control limits on the dispersion chart. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits Shading( 0 ) ));

```

### Show Separators

**Syntax:** obj << (EMP MSA Analysis[number] << Dispersion Chart( 1, Show Separators( state=0|1 )))

**Description:** Shows or hides vertical lines that separate the X variables on the dispersion chart. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Separators( 0 ) ));

```

## EMP MSA Analysis > EMP Linearity and Bias Results

### Show Avg Bias Points

**Syntax:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( 1, Show Avg Bias Points( state=0|1 )))

**Description:** Shows or hides the average bias points on the graph. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Avg Bias Points( 1 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Avg Bias Points( 0 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Avg Bias Points( 1 ) ));

```

### Show Bias Points

**Syntax:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( 1, Show Bias Points( state=0|1 )))

**Description:** Shows or hides the bias points on the graph. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Bias Points( 1 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Bias Points( 0 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Bias Points( 1 ) ));

```

### Show Fit Confidence Curves

**Syntax:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( 1, Show Fit Confidence Curves( state=0|1 )))

**Description:** Shows or hides the line of fit confidence curves on the graph. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results(
	1,
	Show Fit Confidence Curves( 1 )
));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results(
	1,
	Show Fit Confidence Curves( 0 )
));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results(
	1,
	Show Fit Confidence Curves( 1 )
));

```

### Show Line of Fit

**Syntax:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( 1, Show Line of Fit( state=0|1 )))

**Description:** Shows or hides the line of fit on the graph. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Line of Fit( 1 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Line of Fit( 0 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Line of Fit( 1 ) ));

```

### Show Overall Avg Bias Line

**Syntax:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( 1, Show Overall Avg Bias Line( state=0|1 )))

**Description:** Shows or hides the overall average bias line on the graph. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results(
	1,
	Show Overall Avg Bias Line( 1 )
));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results(
	1,
	Show Overall Avg Bias Line( 0 )
));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results(
	1,
	Show Overall Avg Bias Line( 1 )
));

```

## EMP MSA Analysis

### AIAG Gauge R&R Results

**Syntax:** obj << (EMP MSA Analysis[number] << "AIAG Gauge R&R Results"n( state=0|1 ))

**Description:** Shows or hides a report that partitions the variability in the measurements into part variation and measurement system variation. The calculation for Reproducibility includes interactions.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	MSA Metadata(
		:Y(
			Lower Tolerance( 120 ),
			Upper Tolerance( 240 ),
			Tolerance Range( 120 ),
			Historical Process Sigma( 25 )
		)
	),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << "AIAG Gauge R&R Results"n( 1 ));

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 0 ));
obj << (EMP MSA Analysis[1] << Effective Resolution( 1 ));
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits Shading( 0 ) ));
preset = obj << (EMP MSA Analysis[1] << New Preset);
dt2 = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj2 = dt2 << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	MSA Metadata( :Measurement( Historical Process Sigma( 0.25 ) ) ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" )
);
Wait( 1 );
obj2 << (EMP MSA Analysis[1] << Apply Preset( preset ));

```

### Average Chart

**Syntax:** obj << (EMP MSA Analysis[number] << Average Chart( state=0|1 ))

**Description:** Shows or hides a plot of the average measurement values for each combination of the part and X variables. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 0 ));

```

### Bias Comparison

**Syntax:** obj << (EMP MSA Analysis[number] << Bias Comparison( state=0|1 ))

**Description:** Shows or hides an Analysis of Means chart for testing if the X variables have different averages.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Bias Comparison( 1 ));

```

### Dispersion Chart

**Syntax:** obj << (EMP MSA Analysis[number] << Dispersion Chart( state=0|1 ))

**Description:** Shows or hides the specified dispersion chart. The default dispersion chart is the Range Chart. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 0 ));

```

### EMP Gauge R&R Results

**Syntax:** obj << (EMP MSA Analysis[number] << "EMP Gauge R&R Results"n( state=0|1 ))

**Description:** Shows or hides a report that partitions the variability in the measurements into part variation and measurement system variation. The calculations in this report are based on variances, not ranges.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << "EMP Gauge R&R Results"n( 1 ));

```

### EMP Results

**Syntax:** obj << (EMP MSA Analysis[number] << EMP Results( state=0|1 ))

**Description:** Shows or hides a report that computes several statistics to help you assess and classify your measurement system.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << EMP Results( 1 ));

```

### Edit MSA Metadata

**Syntax:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( state=0|1 ))

**Description:** Opens a window that enables you to add or edit the tolerance range, tolerance limits, historical mean, and historical process sigma for all analyses. The reports are automatically updated.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	EMP MSA Analysis( "Y", Misclassification Probabilities( 1 ) )
);
Wait( 1 );
obj << (EMP MSA Analysis[1] << Edit MSA Metadata(
	Lower Tolerance( 120 ),
	Upper Tolerance( 240 )
));

```

### Effective Resolution

**Syntax:** obj << (EMP MSA Analysis[number] << Effective Resolution( state=0|1 ))

**Description:** Shows or hides a table that contains results for the resolution of a measurement system, which helps you determine how well your measurement increments are working.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Effective Resolution( 1 ));

```

### Linearity and Bias Results

**Syntax:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( state=0|1 ))

**Description:** Shows or hides a graph and summary from a regression analysis using the standard column as the X variable and the bias as the Y variable.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	MSA Metadata( :Measurement( Historical Process Sigma( 0.25 ) ) ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1 ));

```

### Misclassification Probabilities

**Syntax:** obj << (EMP MSA Analysis[number] << Misclassification Probabilties( state=0|1 ))

**Description:** Shows or hides a report that contains the probabilities of misclassification for the given model.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Misclassification Probabilities( 1 ));

```

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 0 ));
obj << (EMP MSA Analysis[1] << Effective Resolution( 1 ));
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits Shading( 0 ) ));
preset = obj << (EMP MSA Analysis[1] << New Preset);

```

### Parallelism Plots

**Syntax:** obj << (EMP MSA Analysis[number] << Parallelism Plots( state=0|1 ))

**Description:** Shows or hides an overlay plot that reflects the average measurement values for each part.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Parallelism Plots( 1 ));

```

### Shift Detection Profiler

**Syntax:** obj << (EMP MSA Analysis[number] << Shift Detection Profiler( state=0|1 ))

**Description:** Shows or hides an interactive set of charts that you can adjust to see the probabilities of getting warnings on your process behavior chart.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Shift Detection Profiler( 1 ));

```

### Show Monitor Classification Legend

**Syntax:** obj << (EMP MSA Analysis[number] << Show Monitor Classification Legend( state=0|1 ))

**Description:** Shows or hides the monitor classification legend in the EMP Results report. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << EMP Results( 1 ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Show Monitor Classification Legend( 0 ));

```

### Show Part Legend

**Syntax:** obj << (EMP MSA Analysis[number] << Show Part Legend( state=0|1 ))

**Description:** Shows or hides the part legend for the average and dispersion charts. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Show Part Legend( 0 ));

```

### Show Shift Detection Profiler Legend

**Syntax:** obj << (EMP MSA Analysis[number] << Show Shift Detection Profiler Legend( state=0|1 ))

**Description:** Shows or hides the legend in the Shift Detection Profiler. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Shift Detection Profiler( 1 ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Show Shift Detection Profiler Legend( 0 ));

```

### Test-Retest Error Comparison

**Syntax:** obj << (EMP MSA Analysis[number] << "Test-Retest Error Comparison"n( state=0|1 ))

**Description:** Shows or hides an Analysis of Means for Variances or Analysis of Means Ranges chart for testing if any of the groups have different test-retest error levels.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << "Test-Retest Error Comparison"n( 1 ));

```

### Variance Components

**Syntax:** obj << (EMP MSA Analysis[number] << Variance Components( state=0|1 ))

**Description:** Shows or hides a report that contains the estimates of the variance components for the given model.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Variance Components( 1 ));

```

### Action

**Syntax:** obj << Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

**Anonymous preset**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj << Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Syntax:** obj = EMP Measurement Systems Analysis(...<By( column(s) )>...)

**Description:** Produce multiple reports, one for each level of the variable(s).

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Crossed.jmp" );
EMP Measurement Systems Analysis(
	Y( :new Y ),
	X( :Operator ),
	Part( :Part ),
	Model( Crossed ),
	Dispersion Chart Type( Range ),
	By( :Instrument )
);

```

### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description:** Adds a control panel for changing the platform&apos;s variables

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Conv Limit

**Syntax:** obj = EMP Measurement Systems Analysis(...Conv Limit( number )...)

**Description:** Sets the convergence limit that is used for computing variance components. This option affects only REML analyses.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << Select Rows( 5 ) << Exclude( 1 );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	Conv Limit( 1e-7 )
);
obj << (EMP MSA Analysis[1] << Variance Components( 1 ));

```

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Description:** Move the data table window for this analysis to the front.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Data Table Window;

```

### EMP MSA Analysis

**Syntax:** obj = EMP Measurement Systems Analysis(...EMP MSA Analysis( )...)

**Description:** Specifies the EMP MSA Analysis report options for each measurement response.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	EMP MSA Analysis(
		"Y",
		EMP Results( 1 ),
		Variance Components( 1 ),
		"EMP Gauge R&R Results"n( 1 )
	)
);

```

### EMP Measurement Systems Analysis

**Syntax:** EMP Measurement Systems Analysis( Y( column ), X( columns ), Part(column), Model(Main|Crossed|Crossed with Two Factor Interactions|Nested|Crossed then Nested|Nested then Crossed), Dispersion Chart Type(Range|Standard Deviation) )

**Description:** Launches the EMP (Evaluating the Measurement Process) method for Measurement Systems Analysis. The average and dispersion (range or standard deviation) charts are displayed by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### Edit MSA Metadata

**Syntax:** obj << Edit MSA Metadata( :column( Lower Tolerance( number ), Upper Tolerance( number ), <Historical Mean( number ), Historical Process Sigma( number )> ) )

**Description:** Opens a window that enables you to add or edit the tolerance range, tolerance limits, historical mean, and historical process sigma for all analyses. The reports are automatically updated.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	EMP MSA Analysis( "Y", Dispersion Chart( 0 ), "AIAG Gauge R&R Results"n( 1 ) )
);
Wait( 1 );
obj << Edit MSA Metadata( :Y( Lower Tolerance( 130 ), Upper Tolerance( 230 ) ) );

```

### Get By Levels

**Syntax:** obj << Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

### Get Data Table

**Syntax:** obj << Get Data Table

**Description:** Returns a reference to the data table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj << Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj << Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj << Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Grouping

**Syntax:** obj = EMP Measurement Systems Analysis(...<Grouping( column(s) )>...)

**Description:** Specifies categorical column(s) as grouping variables.

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	Grouping( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Include Interactions in Reproducibility

**Syntax:** obj = EMP Measurement Systems Analysis(...Include Interactions in Reproducibility( state=0|1 )...)

**Description:** Includes interactions in the calculation of the Reproducibility statistic.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	Include Interactions in Reproducibility( 1 )
);
obj << (EMP MSA Analysis[1] << "EMP Gauge R&R Results"n( 1 ));

```

### Local Data Filter

**Syntax:** obj << Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### Max Iter

**Syntax:** obj = EMP Measurement Systems Analysis(...Max Iter( number )...)

**Description:** Sets the maximum number of iterations that are used for computing variance components. This option affects only REML analyses.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << Select Rows( 5 ) << Exclude( 1 );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	Max Iter( 200 )
);
obj << (EMP MSA Analysis[1] << Variance Components( 1 ));

```

### Measurement

**Syntax:** obj = EMP Measurement Systems Analysis(...Measurement( column(s) )...)

**Description:** Specifies the continuous column(s) of measurements.

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Measurement( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Part

**Syntax:** obj = EMP Measurement Systems Analysis(...Part( column )...)

**Description:** Specifies the categorical column designating the part or unit.

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Sample ID( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntax:** obj << Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj << Report;

Report( obj )

**Description:** Returns a reference to the report object.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Report View( "Summary" );

```

### Sample ID

**Syntax:** obj = EMP Measurement Systems Analysis(...Sample ID( column )...)

**Description:** Specifies the categorical column designating the part or unit.

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Sample ID( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### Save All Metadata to Table

**Syntax:** obj << Save All Metadata to Table( < MSA( state=0|1 ) >, < Measurement Sigma( state=0|1 ) >, < Tolerance as Specs( state=0|1 ) > )

**Description:** Creates a new data table that contains the MSA metadata and Measurement Sigma for each column of measurement data. The table is in a tall format and contains a row for each measurement variable. There is an option to save the lower and upper tolerance values as additional columns in the data table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save All Metadata to Table;

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Metadata as Column Properties

**Syntax:** obj << Save Metadata as Column Properties( < MSA( state=0|1 ) >, < Measurement Sigma( state=0|1 ) >, < Tolerance as Specs( state=0|1 ) > )

**Description:** For each column of measurement data, saves the MSA metadata and Measurement Sigma as column properties within the column of the original data table. There is an option to save the lower and upper tolerance values as Spec Limits column properties.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save Metadata as Column Properties;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers",
			"Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value(
				Time( 6000, Lock( 0 ), Show( 1 ) )
			)}
		)
	)
);

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport(
		Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} )
	)
);

```

### Set Alpha Level

**Syntax:** obj = EMP Measurement Systems Analysis(...Set Alpha Level( number )...)

**Description:** Specifies the alpha level that is used for the bias comparison and test-retest error comparison reports. "0.05" by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	Set Alpha Level( .01 )
);
obj << (EMP MSA Analysis[1] << Bias Comparison( 1 ));

```

### Set Random Seed

**Syntax:** obj = EMP Measurement Systems Analysis(...Set Random Seed( number )...)

**Description:** Sets the random seed to a specific value assuring that all subsequent runs using the same seed are reproducible.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	Set Random Seed( 12345 )
);
obj << (EMP MSA Analysis[1] << "Test-Retest Error Comparison"n( 1 ));

```

### Sigma Multiplier

**Syntax:** obj = EMP Measurement Systems Analysis(...Sigma Multiplier( number=6 )...)

**Description:** Specifies a constant value that is multiplied by sigma. "6" by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	Sigma Multiplier( 5.15 ),
	EMP MSA Analysis( "Y", "AIAG Gauge R&R Results"n( 1 ) )
);

```

### Standard

**Syntax:** obj = EMP Measurement Systems Analysis(...<Standard( column )>...)

**Description:** Specifies a standard or reference column that contains the known values for the measured part.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Response ),
	Part( :Part ),
	Standard( :Standard ),
	Model( "Main" ),
	Dispersion Chart Type( "Range" )
);

```

### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj << Title( "new title" )

**Description:** Sets the title of the platform.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Syntax:** obj << View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = EMP Measurement Systems Analysis(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### X

**Syntax:** obj = EMP Measurement Systems Analysis(...<X( column(s) )>...)

**Description:** Specifies categorical column(s) as grouping variables.

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	Grouping( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### Y

**Syntax:** obj = EMP Measurement Systems Analysis(...Y( column(s) )...)

**Description:** Specifies the continuous column(s) of measurements.

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Measurement( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

