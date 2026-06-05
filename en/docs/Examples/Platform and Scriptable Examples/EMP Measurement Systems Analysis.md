# EMP Measurement Systems Analysis

### Example 1
> **Summary**: Opens a data table, runs an EMP Measurement Systems Analysis with specified mixture effects and interactions, and enables average and dispersion charts.

<!-- Keywords: #EMPMeasurementSystemsAnalysis, #MixedModel, #JSLScriptingLanguage, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// EMP Measurement Systems Analysis
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Run EMP Measurement Systems Analysis.
3. Set response variable.
4. Set operator factor.
5. Set part factor.
6. Specify crossed model.
7. Use range for dispersion.
8. Enable average chart.
9. Enable dispersion chart.
10. Execute analysis.



### Example 2
> **Summary**: Opens a data table, performs EMP Measurement Systems Analysis with specified mixture effects and interactions, and generates various charts to visualize the results.

<!-- Keywords: #JMPScriptingLanguage, #EMPMeasurementSystemsAnalysis, #MixedModel, #DataVisualization, #StatisticalModeling -->

**Code**:
```jsl
// EMP Measurement Systems Analysis
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Perform EMP analysis.
3. Set response variable.
4. Specify operator factor.
5. Define part factor.
6. Choose nested model.
7. Select range chart type.
8. Include variance components.
9. Generate average chart.
10. Create dispersion chart.



### Example 3
> **Summary**: Opens a data table, specifies the response and predictor variables, and runs an EMP Measurement Systems Analysis with a nested then crossed model type and range dispersion chart.

<!-- Keywords: #EMPMeasurementSystemsAnalysis, #NestedThenCrossedModel, #RangeDispersionChart, #JMPScriptingLanguage, #MixedModels -->

**Code**:
```jsl
// EMP Measurement Systems Analysis
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Define data table variable.
3. Run EMP Measurement Systems Analysis.
4. Specify response variable.
5. Specify operator and instrument variables.
6. Specify part variable.
7. Choose model type.
8. Set dispersion chart type.



### Example 4
> **Summary**: Performs an EMP Measurement Systems Analysis (MSA) on a data table, specifying the response variable, operator factor, part factor, model type, and chart types to visualize the results.

<!-- Keywords: #EMPMSA, #MixedModel, #JMPScriptingLanguage, #DataAnalysis, #QualityControl -->

**Code**:
```jsl
// EMP Measurement Systems Analysis
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open table.
2. Perform EMP MSA.
3. Specify response variable.
4. Specify operator factor.
5. Specify part factor.
6. Set model type.
7. Choose dispersion chart type.
8. Enable average chart.
9. Enable dispersion chart.
10. Execute analysis.



### Example 5
> **Summary**: Opens a data table, launches EMP Measurement Systems Analysis, and specifies variables for Y, X, Part, and Model type. It also enables Average Chart and Dispersion Chart with Range dispersion chart type.

<!-- Keywords: #JMPScriptingLanguage, #EMPMeasurementSystemsAnalysis, #DataTable, #MixedModel, #StatisticalModeling -->

**Code**:
```jsl
// EMP Measurement Systems Analysis
// Open data table
dt = Open("data_table.jmp");
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

**Code Explanation**:

1. Open data table.
2. Launch EMP Measurement Systems Analysis.
3. Specify Y variable.
4. Specify X variable.
5. Specify Part variable.
6. Set model type to Crossed.
7. Choose Range for Dispersion Chart.
8. Enable Average Chart.
9. Enable Dispersion Chart.



### Example 6
> **Summary**: Opens a data table, runs an EMP Measurement Systems Analysis with specified mixture effects and interactions, and customizes the report title and settings.

<!-- Keywords: #EMPMeasurementSystemsAnalysis, #MixedModel, #JMPScriptingLanguage, #DataVisualization, #Customization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Model( "Crossed" ),
	Dispersion Chart Type( Range ),
	Average Chart( 1 ),
	Dispersion Chart( 1 ),
	SendToReport(
		Dispatch( {}, "Measurement Systems Analysis for Measurement", OutlineBox, {Set Title( "MSA X axis grouping labels" )} ),
		Dispatch( {}, "Average Chart", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Average Chart"}, "1", ScaleBox, {Show Major Ticks( 0 ), Show Minor Ticks( 0 )} ),
		Dispatch( {"Range Chart"}, "1", ScaleBox, {Show Major Ticks( 0 ), Show Minor Ticks( 0 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Run EMP Measurement Systems Analysis.
3. Set Y variable.
4. Set X variable.
5. Set Part variable.
6. Choose crossed model.
7. Set dispersion chart type.
8. Enable average chart.
9. Enable dispersion chart.
10. Customize report title and settings.



### Example 7
> **Summary**: Performs the EMP Measurement Systems Analysis to evaluate measurement system performance, including shift detection profiler settings and variance components, using a crossed model with specified mixture effects and interactions.

<!-- Keywords: #EMPMeasurementSystemsAnalysis, #MixedModel, #ShiftDetectionProfiler, #VarianceComponents, #CrossedModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Model( "Crossed" ),
	Dispersion Chart Type( Range ),
	EMP Results( 1 ),
	Variance Components( 1 ),
	Average Chart( 0 ),
	Dispersion Chart( 0 ),
	Shift Detection Profiler(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				Number of Subgroups( "10", Lock( 0 ), Show( 1 ) ),
				Part Mean Shift( 0.17377, Lock( 0 ), Show( 1 ) ),
				Part Std Dev( 0.17377, Lock( 0 ), Show( 1 ) ),
				Bias Factors Std Dev( 0.014803, Lock( 0 ), Show( 1 ) ),
				Name( "Test-Retest Error Std Dev" )(0.06433, Lock( 0 ), Show( 1 )),
				Subgroup Sample Size( "1", Lock( 0 ), Show( 1 ) )
			),
			Change Process Sigma( 0.173765486919709 )
		)
	),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	SendToReport(
		Dispatch( {}, "EMP Measurement Systems Analysis Study", OutlineBox,
			{Set Title( "EMP Results, Shift Detection Profiler, Variance Components" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create EMP measurement system analysis.
3. Set response variable: Measurement.
4. Set operator variable: Operator.
5. Set part variable: part#.
6. Specify crossed model.
7. Use range for dispersion chart type.
8. Display EMP results.
9. Display variance components.
10. Customize shift detection profiler settings.



### Example 8
> **Summary**: Performs the EMP Measurement Systems Analysis to evaluate parallelism plots, effective resolution, and EMP gauge RR results for a given data table.

<!-- Keywords: #EMPMeasurementSystemsAnalysis, #MixedModel, #ParallelismPlots, #EffectiveResolution, #GaugeRR -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Model( "Crossed" ),
	Dispersion Chart Type( Range ),
	Parallelism Plots( 1 ),
	Effective Resolution( 1 ),
	EMP Gauge RR Results( 1 ),
	Average Chart( 0 ),
	Dispersion Chart( 0 ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	SendToReport(
		Dispatch( {}, "EMP Measurement Systems Analysis Study", OutlineBox,
			{Set Title( "Parallelism Plots, Effective Resolution, EMP Gauge RR Results" )}
		),
		Dispatch( {"Parallelism Plots", "Operator"}, "1", ScaleBox, {Rotated Labels( "Automatic" )} )
	)
);
```

**Code Explanation**:

1. Open table.
2. Define EMP Measurement Systems Analysis.
3. Set Y variable.
4. Set X variable.
5. Set Part variable.
6. Choose crossed model.
7. Set dispersion chart type.
8. Enable parallelism plots.
9. Set effective resolution.
10. Enable EMP gauge RR results.



### Example 9
> **Summary**: Performs the EMP Measurement Systems Analysis to fit a mixed model with specified mixture effects and interactions, utilizing the Standard Least Squares personality.

<!-- Keywords: #EMPMeasurementSystemsAnalysis, #MixedModel, #StandardLeastSquares, #MixtureEffects, #Interactions -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Model( Crossed ),
	Dispersion Chart Type( Range ),
	Average Chart( 1 ),
	Dispersion Chart( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Launch EMP Measurement Systems Analysis.
3. Set measurement column.
4. Set operator column.
5. Set part number column.
6. Select crossed model.
7. Choose range for dispersion chart.
8. Enable average chart.
9. Enable dispersion chart.
10. Display analysis results.



### Example 10
> **Summary**: Performs the EMP Measurement Systems Analysis to detect shifts in part standard deviation using a Crossed model, with specified response variable, operator factor, and part identifier.

<!-- Keywords: #EMPMeasurementSystemsAnalysis, #CrossedModel, #ShiftDetectionProfiler, #JSLScriptingLanguage, #MixedModel -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( Range ),
	Average Chart( 0 ),
	Dispersion Chart( 0 ),
	Shift Detection Profiler(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Desirability Functions( 1 ),
			Probability of Warning << Response Limits(
				{Lower( 0, 0.066 ), Middle( 0.5, 0.5 ), Upper( 1, 0.9819 ), Goal( Maximize ), Importance( 1 )}
			),
			Term Value(
				Number of Subgroups( "10", Lock( 0 ), Show( 1 ) ),
				Part Mean Shift( 23.039, Lock( 0 ), Show( 1 ) ),
				Part Std Dev( 23.039, Lock( 0 ), Show( 1 ) ),
				Bias Factors Std Dev( 4.4135, Lock( 0 ), Show( 1 ) ),
				Name( "Test-Retest Std Dev" )(3.4928, Lock( 0 ), Show( 1 )),
				Subgroup Size( "1", Lock( 0 ), Show( 1 ) )
			),
			Name( "Change In-Control Part Std Dev" )(23.0393684809334)
		)
	),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	SendToReport(
		Dispatch( {"Shift Detection Profiler"}, "Shift Detection Profiler Legend", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Shift Detection Profiler"}, "Customize and Select Tests", OutlineBox, {Close( 0 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Run EMP Measurement Systems Analysis.
3. Set response variable as Y.
4. Set operator as factor X.
5. Set part as part identifier.
6. Choose crossed model.
7. Display range dispersion chart.
8. Disable average chart.
9. Disable dispersion chart.
10. Configure shift detection profiler settings.



### Example 11
> **Summary**: Performs the EMP Measurement Systems Analysis to evaluate the performance of a measurement system, generating an average chart, parallelism plots, and EMP results with effective resolution.

<!-- Keywords: #EMPMeasurementSystemsAnalysis, #MixedModel, #JMPScriptingLanguage, #MeasurementSystemEvaluation, #QualityControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( Range ),
	Parallelism Plots( 1 ),
	EMP Results( 1 ),
	Effective Resolution( 1 ),
	Average Chart( 1 ),
	Dispersion Chart( 0 ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	SendToReport(
		Dispatch( {}, "EMP Measurement Systems Analysis Study", OutlineBox,
			{Set Title( "Average Chart, Parallelism Plots, EMP Results, Effective Resolution" )}
		),
		Dispatch( {"Average Chart"}, "1", ScaleBox, {Rotated Labels( "Automatic" )} ),
		Dispatch( {"Parallelism Plots", "Operator"}, "1", ScaleBox, {Rotated Labels( "Automatic" )} )
	)
);
```

**Code Explanation**:

1. Open table.
2. Define analysis object.
3. Set response variable.
4. Set operator variable.
5. Set part variable.
6. Choose crossed model.
7. Select range chart type.
8. Enable parallelism plots.
9. Enable EMP results.
10. Enable effective resolution.



### Example 12
> **Summary**: Performs the EMP Measurement Systems Analysis to compare bias and test-retest error, with variance components and gauge RR results, using a crossed model and range dispersion chart.

<!-- Keywords: #EMPMeasurementSystemsAnalysis, #CrossedModel, #RangeDispersionChart, #VarianceComponents, #GaugeRRResults -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( Range ),
	Variance Components( 1 ),
	EMP Gauge RR Results( 1 ),
	Average Chart( 0 ),
	Dispersion Chart( 0 ),
	Bias Comparison( ANOM( 1, Point Options( "Show Connected Points" ) ) ),
	Name( "Test-Retest Error Comparison" )(Analysis of Mean Ranges( 1, Point Options( "Show Connected Points" ) )),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	SendToReport(
		Dispatch( {}, "EMP Measurement Systems Analysis Study", OutlineBox,
			{Set Title( "Bias Comparison, Test-Retest Error Comparison, Variance components, EMP Gauge RR Results" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform EMP Measurement Systems Analysis.
3. Set response variable.
4. Define operator factor.
5. Define part factor.
6. Specify crossed model.
7. Choose range dispersion chart.
8. Include variance components.
9. Display EMP Gauge RR results.
10. Customize report title.



### Example 13
> **Summary**: Performs the EMP Measurement Systems Analysis to evaluate the performance of a measurement system, configuring shift detection profiler settings and specifying mixture effects and interactions.

<!-- Keywords: #EMPMeasurementSystemsAnalysis, #ShiftDetectionProfiler, #MixedModel, #CrossedModel, #RangeDispersionChart -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( Range ),
	Average Chart( 0 ),
	Dispersion Chart( 0 ),
	Shift Detection Profiler(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Desirability Functions( 1 ),
			Probability of Warning << Response Limits(
				{Lower( 0, 0.066 ), Middle( 0.5, 0.5 ), Upper( 1, 0.9819 ), Goal( Maximize ), Importance( 1 )}
			),
			Term Value(
				Number of Subgroups( "10", Lock( 0 ), Show( 1 ) ),
				Part Mean Shift( 23.039, Lock( 0 ), Show( 1 ) ),
				Part Std Dev( 23.039, Lock( 0 ), Show( 1 ) ),
				Bias Factors Std Dev( 4.4135, Lock( 0 ), Show( 1 ) ),
				Name( "Test-Retest Error Std Dev" )(3.4928, Lock( 0 ), Show( 1 )),
				Subgroup Sample Size( "1", Lock( 0 ), Show( 1 ) )
			),
			Change Process Sigma( 23.0393684809334 )
		)
	),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 )
);
```

**Code Explanation**:

1. Open data_table data
2. Create EMP Measurement Systems Analysis.
3. Set response variable as Y.
4. Set operator variable as X.
5. Set part variable as Part.
6. Choose crossed model.
7. Set dispersion chart type to range.
8. Disable average chart.
9. Disable dispersion chart.
10. Configure shift detection profiler settings.



### Example 14
> **Summary**: Analyze and visualize measurement data using a Mixed Model with specified mixture effects and interactions, filtered by operator and standard values.

<!-- Keywords: #MixedModel, #EMPMeasurementSystemsAnalysis, #LocalDataFilter, #AutomaticRecalculation, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Model( "Crossed" ),
	Dispersion Chart Type( Range ),
	EMP Results( 1 ), 
);
obj << Local Data Filter(
	Location( {0, 0} ),
	Add Filter( columns( :Standard ), Where( :Standard >= 0.6 & :Standard <= 0.8 ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
obj << Automatic Recalc( 0 );
dt << Select Where( :Operator == "Cindy" );
dt << Exclude();
rep = Report( obj );
```

**Code Explanation**:

1. Open data table.
2. Create EMP Measurement Systems Analysis object.
3. Set response variable.
4. Set factor variables.
5. Define model type.
6. Choose dispersion chart type.
7. Set EMP results display.
8. Add local data filter.
9. Set filter location.
10. Define filter conditions.
11. Set filter mode.
12. Disable automatic recalculation.
13. Select rows by operator.
14. Exclude selected rows.
15. Generate report.



### Example 15
> **Summary**: Runs the analysis and reporting process for a mixed model using EMP Measurement Systems Analysis, filtering data by standard range and operator, and generating a report.

<!-- Keywords: #EMPMeasurementSystemsAnalysis, #MixedModel, #DataFiltering, #ReportGeneration, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Model( "Crossed" ),
	Dispersion Chart Type( Range ),
	EMP Results( 1 ), 
);
obj << Local Data Filter(
	Location( {0, 0} ),
	Add Filter( columns( :Standard ), Where( :Standard >= 0.6 & :Standard <= 0.8 ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
dt << Select Where( :Operator == "Cindy" );
dt << Exclude();
rep = Report( obj );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Model( "Crossed" ),
	Dispersion Chart Type( Range ),
	EMP Results( 1 ), 
);
obj << Local Data Filter(
	Location( {0, 0} ),
	Add Filter( columns( :Standard ), Where( :Standard >= 0.6 & :Standard <= 0.8 ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
obj << Automatic Recalc( 0 );
dt << Select Where( :Operator == "Cindy" );
dt << Exclude();
rep = Report( obj );
```

**Code Explanation**:

1. Open data table.
2. Run EMP Measurement Systems Analysis.
3. Add local data filter.
4. Filter data by standard range.
5. Select rows where operator is Cindy.
6. Exclude selected rows.
7. Generate report.
8. Close data table without saving.
9. Reopen data table.
10. Run EMP Measurement Systems Analysis again.
11. Add local data filter.
12. Filter data by standard range.
13. Disable automatic recalculation.
14. Select rows where operator is Cindy.
15. Exclude selected rows.
16. Generate report.



### Example 16
> **Summary**: Performs the EMP Measurement Systems Analysis to evaluate parallelism plots, effective resolution, and EMP gauge RR results for a given data table.

<!-- Keywords: #EMPMeasurementSystemsAnalysis, #ParallelismPlots, #EffectiveResolution, #EMPGaugeRRResults, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Model( "Crossed" ),
	Dispersion Chart Type( Range ),
	Parallelism Plots( 1 ),
	Effective Resolution( 1 ),
	EMP Gauge RR Results( 1 ),
	Average Chart( 0 ),
	Dispersion Chart( 0 ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	SendToReport(
		Dispatch( {}, OutlineBox, {Set Title( "Parallelism Plots, Effective Resolution, EMP Gauge RR Results" )} ),
		Dispatch( {"Parallelism Plots", "Operator"}, "1", ScaleBox, {Rotated Labels( "Automatic" )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Run EMP Measurement Systems Analysis.
3. Set Y variable.
4. Set X variable.
5. Set Part variable.
6. Choose crossed model.
7. Select range dispersion chart.
8. Enable parallelism plots.
9. Set effective resolution.
10. Enable EMP gauge RR results.



### Example 17
> **Summary**: Performs the EMP Measurement Systems Analysis to detect shifts in measurement data, utilizing a Crossed model with specified mixture effects and interactions.

<!-- Keywords: #EMPMeasurementSystemsAnalysis, #MixedModel, #ShiftDetectionProfiler, #VarianceComponents, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Model( "Crossed" ),
	Dispersion Chart Type( Range ),
	EMP Results( 1 ),
	Variance Components( 1 ),
	Average Chart( 0 ),
	Dispersion Chart( 0 ),
	Shift Detection Profiler(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				Number of Subgroups( "10", Lock( 0 ), Show( 1 ) ),
				Part Mean Shift( 0.17377, Lock( 0 ), Show( 1 ) ),
				Part Std Dev( 0.17377, Lock( 0 ), Show( 1 ) ),
				Bias Factors Std Dev( 0.014803, Lock( 0 ), Show( 1 ) ),
				Name( "Test-Retest Error Std Dev" )(0.06433, Lock( 0 ), Show( 1 )),
				Subgroup Sample Size( "1", Lock( 0 ), Show( 1 ) )
			),
			Change Process Sigma( 0.173765486919709 )
		)
	),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	SendToReport( Dispatch( {}, OutlineBox, {Set Title( "EMP Results, Shift Detection Profiler, Variance Components" )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Run EMP Measurement Systems Analysis.
3. Set Y variable.
4. Set X variable.
5. Set Part variable.
6. Choose crossed model.
7. Set dispersion chart type.
8. Enable EMP results.
9. Enable variance components.
10. Configure shift detection profiler.



### Example 18
> **Summary**: Performs the EMP Measurement Systems Analysis to evaluate the performance of a measurement system, generating an average chart, parallelism plots, and EMP results with effective resolution.

<!-- Keywords: #JMPScriptingLanguage, #MeasurementSystemsAnalysis, #CrossedModel, #DispersionChart, #ParallelismPlots -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( Range ),
	Parallelism Plots( 1 ),
	EMP Results( 1 ),
	Effective Resolution( 1 ),
	Average Chart( 1 ),
	Dispersion Chart( 0 ),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	SendToReport(
		Dispatch( {}, "Measurement Systems Analysis for Y", OutlineBox,
			{Set Title( "Average Chart, Parallelism Plots, EMP Results, Effective Resolution" )}
		),
		Dispatch( {"Average Chart"}, "1", ScaleBox, {Rotated Labels( "Automatic" )} ),
		Dispatch( {"Parallelism Plots", "Operator"}, "1", ScaleBox, {Rotated Labels( "Automatic" )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Run EMP Measurement Systems Analysis.
3. Set response variable.
4. Set operator factor.
5. Set part factor.
6. Choose crossed model.
7. Select range dispersion chart.
8. Enable parallelism plots.
9. Enable EMP results.
10. Enable effective resolution.



### Example 19
> **Summary**: Performs the EMP Measurement Systems Analysis to compare bias, test-retest error, and variance components for a specified response variable Y, while controlling for Operator and Part factors.

<!-- Keywords: #EMPMeasurementSystemsAnalysis, #MixedModel, #VarianceComponents, #BiasComparison, #TestRetestError -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( Range ),
	Variance Components( 1 ),
	EMP Gauge RR Results( 1 ),
	Average Chart( 0 ),
	Dispersion Chart( 0 ),
	Bias Comparison( ANOM( 1, Point Options( "Show Connected Points" ) ) ),
	Name( "Test-Retest Error Comparison" )(Analysis of Mean Ranges( 1, Point Options( "Show Connected Points" ) )),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	SendToReport(
		Dispatch( {}, "Measurement Systems Analysis for Y", OutlineBox,
			{Set Title( "Bias Comparison, Test-Retest Error Comparison, Variance components, EMP Gauge RR Results" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform EMP Measurement Systems Analysis.
3. Set response variable to Y.
4. Include Operator as factor.
5. Include Part as factor.
6. Use Crossed model.
7. Display Range chart type.
8. Calculate Variance Components.
9. Display EMP Gauge RR Results.
10. Customize report title.



### Example 20
> **Summary**: Runs the EMP measurement systems analysis for a crossed model with specified mixture effects and interactions, generating reports and parallelism plots.

<!-- Keywords: #EMPMeasurementSystemsAnalysis, #MixedModel, #CrossedModel, #ShiftDetectionProfiler, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	Parallelism Plots( 1 ),
	Average Chart( 1 ),
	Dispersion Chart( 1 ),
	Shift Detection Profiler(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				Number of Subgroups( "10", Lock( 0 ), Show( 1 ) ),
				Part Mean Shift( 23.039, Lock( 0 ), Show( 1 ) ),
				Part Std Dev( 23.039, Lock( 0 ), Show( 1 ) ),
				Bias Factors Std Dev( 4.4535, Lock( 0 ), Show( 1 ) ),
				Name( "Test-Retest Std Dev" )(3.4928, Lock( 0 ), Show( 1 )),
				Subgroup Size( "1", Lock( 0 ), Show( 1 ) )
			),
			Name( "Change In-Control Part Std Dev" )(23.0393684809334)
		)
	),
	Max Iter( 100 ),
	Conv Limit( 0.00000001 ),
	SendToReport(
		Dispatch( {"Average Chart"}, "1", ScaleBox,
			{Label Row( 1, {Automatic Font Size( 1 ), Label Orientation( "Automatic" ), Automatic Tick Marks( 1 )} ),
			Label Row( 2, {Automatic Font Size( 1 ), Label Orientation( "Automatic" ), Automatic Tick Marks( 1 )} )}
		),
		Dispatch( {"Range Chart"}, "1", ScaleBox,
			{Label Row( 1, {Automatic Font Size( 1 ), Label Orientation( "Automatic" ), Automatic Tick Marks( 1 )} ),
			Label Row( 2, {Automatic Font Size( 1 ), Label Orientation( "Automatic" ), Automatic Tick Marks( 1 )} )}
		),
		Dispatch( {"Parallelism Plots", "Operator"}, "1", ScaleBox,
			{Label Row( {Automatic Font Size( 1 ), Label Orientation( "Automatic" ), Automatic Tick Marks( 1 )} )}
		)
	)
);
:Operator << Set Property( "Missing Value Codes", "A" );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
actN = (rpt[String Col Box( 1 )][1]);
```

**Code Explanation**:

1. Open data table.
2. Perform EMP measurement systems analysis.
3. Set Y variable.
4. Set X variable.
5. Set Part variable.
6. Define model as crossed.
7. Configure dispersion chart type.
8. Enable parallelism plots.
9. Enable average chart.
10. Enable dispersion chart.
11. Configure shift detection profiler.
12. Set missing value codes for Operator.
13. Redo the analysis.
14. Retrieve report.
15. Extract first string column box content.



## EMP Measurement Systems Analysis using Log Capture
> **Summary**: Performs the EMP Measurement Systems Analysis to identify shifts in population data, using a crossed model and standard deviation chart, with grouping by Lead.

<!-- Keywords: #JMPScriptingLanguage, #EMPMeasurementSystemsAnalysis, #CrossedModel, #StandardDeviationChart, #ShiftDetectionProfiler -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	obj = dt << EMP Measurement Systems Analysis(
		Y( :"pop- m"n, :POP ),
		X( :Region ),
		Part( :State ),
		Model( Crossed ),
		Dispersion Chart Type( Standard Deviation ),
		Shift Detection Profiler( 1 ),
		By( :Lead )
	)
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Start EMP Measurement Systems Analysis.
3. Set response variables: "pop- m"n, POP.
4. Set factor variable: Region.
5. Set part variable: State.
6. Use crossed model.
7. Display standard deviation chart.
8. Enable shift detection profiler.
9. Group by Lead.
10. Generate analysis report.



