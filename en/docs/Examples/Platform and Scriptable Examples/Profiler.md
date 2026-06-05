# Profiler

### Example 1
> **Summary**: Generates a Profiler to analyze the Time 2sided response variable, adjusting for Firth bias and including likelihood ratio tests. The script uses a Simulator with random normal weights for factors and defines term values for each factor.

<!-- Keywords: #JMP, #Profiler, #Simulator, #TimeSeries, #FirthBias -->

**Code**:
```jsl
// Profiler Time2sided
// Open data table
dt = Open("data_table.jmp");
// Profiler Time2sided
Profiler(
	Y( :Time 2sided ),
	Profiler(
		1,
		Confidence Intervals( 1 ),
		Term Value(
			Receive Application(
				13,
				Min( 7 ),
				Max( 25 )
			),
			Review(
				14,
				Min( 7 ),
				Max( 25 )
			),
			Credit Check(
				15,
				Min( 7 ),
				Max( 25 )
			),
			Loan Finalization(
				16,
				Min( 7 ),
				Max( 25 )
			)
		),
		Simulator(
			1,
			Factors(
				Receive Application <<
				Random(
					Normal weighted(
						13, 1
					)
				),
				Review <<
				Random(
					Normal weighted(
						14, 2
					)
				),
				Credit Check <<
				Random(
					Normal weighted(
						15, 3
					)
				),
				Loan Finalization <<
				Random(
					Normal weighted(
						16, 4
					)
				)
			),
			Responses(
				Time 2sided << No Noise
			),
			Defect Profiler( 1 ),
			Defect Parametric Profile(
				1
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Profiler.
3. Set Y variable.
4. Enable Confidence Intervals.
5. Set Term Values for factors.
6. Configure Simulator.
7. Define Random Normal weights for factors.
8. Set Response with No Noise.
9. Enable Defect Profiler.
10. Enable Defect Parametric Profile.



### Example 2
> **Summary**: Opens a data table, launches the Profiler Simulator, and configures it to analyze yield response limits with confidence intervals and desirability functions.

<!-- Keywords: #JMPScriptingLanguage, #ProfilerSimulator, #YieldResponseLimits, #ConfidenceIntervals, #DesirabilityFunctions -->

**Code**:
```jsl
// Profiler Simulator
// Open data table
dt = Open("data_table.jmp");
// Profiler Simulator
Profiler(
	Y( :Yield ),
	Profiler(
		1,
		Confidence Intervals( 1 ),
		Desirability Functions( 1 ),
		Yield <<
		Response Limits(
			{Lower( 0.5, 0.05 ),
			Middle( 0.6, 0.75 ),
			Upper(
				0.625, 0.815624999999997
			), Goal( Maximize ),
			Importance( 1 )}
		),
		Term Value(
			Reaction Temperature(
				525.82376091265
			),
			Reaction Time(
				0.298,
				Min( 0.101 )
			)
		),
		Simulator(
			1,
			Factors(
				Reaction Temperature <<
				Random(
					Normal weighted(
						525.82376091265,
						1
					)
				),
				Reaction Time <<
				Random(
					Normal weighted(
						0.298, 0.03
					)
				)
			),
			Responses(
				Yield << No Noise
			)
		)
	),
	Expand
);
```

**Code Explanation**:

1. Open data table.
2. Launch Profiler.
3. Set response variable.
4. Enable profiler settings.
5. Configure confidence intervals.
6. Enable desirability functions.
7. Define yield response limits.
8. Set lower limit.
9. Set middle limit.
10. Set upper limit.



### Example 3
> **Summary**: Visualizes a prediction profiler using the GP Fit, NL Fit, and Difference response variables from an open data table, with confidence intervals and term values adjusted for Firth bias.

<!-- Keywords: #JMPScriptingLanguage, #PredictionProfiler, #ConfidenceIntervals, #FirthBias, #DataVisualization -->

**Code**:
```jsl
// Profiler
// Open data table
dt = Open("data_table.jmp");
// Profiler
Profiler(
	Y( :GP Fit, :NL Fit, :Difference ),
	Profiler(
		1,
		Confidence Intervals( 1 ),
		Term Value(
			l( 0.5 ),
			k( 0.3966 )
		)
	),
	Expand,
	SendToReport(
		Dispatch( {"Prediction Profiler"},
			"Profiler", FrameBox,
			Frame Size( 174, 87 )
		),
		Dispatch( {"Prediction Profiler"},
			"Profiler", FrameBox( 2 ),
			Frame Size( 174, 87 )
		),
		Dispatch( {"Prediction Profiler"},
			"Profiler", FrameBox( 3 ),
			Frame Size( 174, 87 )
		),
		Dispatch( {"Prediction Profiler"},
			"Profiler", FrameBox( 5 ),
			Frame Size( 174, 87 )
		),
		Dispatch( {"Prediction Profiler"},
			"Profiler", FrameBox( 6 ),
			Frame Size( 174, 87 )
		),
		Dispatch( {"Prediction Profiler"},
			"Profiler", FrameBox( 7 ),
			Frame Size( 174, 87 )
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Launch Profiler.
3. Set response variables.
4. Configure Profiler settings.
5. Enable confidence intervals.
6. Set term values.
7. Expand Profiler.
8. Adjust report size.
9. Adjust report size.
10. Adjust report size.



### Example 4
> **Summary**: Opens a data table, launches the Profiler, and configures it to simulate yield response with reaction temperature and time as factors, while adjusting for Firth bias and including likelihood ratio tests.

<!-- Keywords: #JMPProfiler, #Simulation, #DesirabilityFunctions, #TermValue, #ConfidenceIntervals -->

**Code**:
```jsl
// Profiler Ready to Simulate
// Open data table
dt = Open("data_table.jmp");
// Profiler Ready to Simulate
Profiler(
	Y( :Yield ),
	Profiler(
		1,
		Confidence Intervals( 1 ),
		Desirability Functions( 1 ),
		Yield <<
		Response Limits(
			{Lower( 0.5, 0.05 ),
			Middle( 0.6, 0.75 ),
			Upper( 0.625, 0.815625 ),
			Goal( Maximize ),
			Importance( 1 )}
		),
		Term Value(
			Reaction Temperature( 530 ),
			Reaction Time(
				0.2,
				Min( 0.101 )
			)
		),
		Simulator(
			1,
			Factors(
				Reaction Temperature <<
				Random(
					Normal weighted(
						530, 1
					)
				),
				Reaction Time <<
				Random(
					Normal weighted(
						0.2, 0.03
					)
				)
			),
			Responses(
				Yield << No Noise
			)
		),
		Desirability Functions( 0 ),
		Simulator( 0 )
	),
	Expand
);
```

**Code Explanation**:

1. Open data table.
2. Launch Profiler.
3. Set response variable.
4. Configure confidence intervals.
5. Enable desirability functions.
6. Define yield response limits.
7. Set reaction temperature term value.
8. Set reaction time term value.
9. Enable simulator.
10. Define random factors for simulation.



### Example 5
> **Summary**: Creates a profiler object to analyze the relationships between ABRASION, MODULUS, ELONG, and HARDNESS in a data table, utilizing desirability functions.

<!-- Keywords: #JMPScriptingLanguage, #ProfilerObject, #DesirabilityFunctions, #DataAnalysis, #PredictiveModeling -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
```

**Code Explanation**:

1. Set default names.
2. Open data table;
3. Create profiler object.
4. Set response variables.
5. Enable desirability functions.



### Example 6
> **Summary**: Creates a profiler object to analyze the relationships between ABRASION, MODULUS, ELONG, and HARDNESS variables in a data table, with term values set for SILICA, SILANE, and SULFUR.

<!-- Keywords: #JMP, #Profiler, #TermValue, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Profiler(
		1,
		Arrange in Rows( 2 ),
		Term Value( SILICA( 1.25, Lock( 0 ), Show( 1 ) ), SILANE( 50, Lock( 0 ), Show( 1 ) ), SULFUR( 2.25, Lock( 0 ), Show( 1 ) ) )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create profiler object.
3. Set response variables.
4. Configure profiler settings.
5. Arrange rows in profiler.
6. Set term values for silica.
7. Set term values for silane.
8. Set term values for sulfur.
9. Lock silica term.
10. Lock silane term.



### Example 7
> **Summary**: Creates a profiler object to analyze population age demographics, specifying term values and arranging rows for visualization.

<!-- Keywords: #JMPScriptingLanguage, #ProfilerObject, #TermValue, #RowArrangement, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Profiler(
	Y( :Name( "Pop Age 0-19" ), :Name( "Pop Age 20-59" ), :Name( "Pop Age 60+" ) ),
	Profiler(
		1,
		Arrange in Rows( 3 ),
		Term Value(
			Name( "Pop Age 0-19 M" )(92500000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 0-19 F" )(100000000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 20-59 M" )(40000000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 20-59 F" )(40000000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 60+ M" )(10000000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 60+ F" )(14000000, Lock( 0 ), Show( 1 ))
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create profiler object.
3. Set response variables.
4. Configure profiler settings.
5. Arrange rows in profiler.
6. Set term values for each variable.
7. Unlock term values.
8. Display all terms.
9. Initialize "Pop Age 0-19 M" term.
10. Initialize "Pop Age 0-19 F" term.



### Example 8
> **Summary**: Configures a profiler object to analyze population age demographics, specifying term values for male and female populations across three age groups.

<!-- Keywords: #JMPScriptingLanguage, #ProfilerObject, #TermValues, #PopulationDemographics, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Profiler(
	Y( :Name( "Pop Age 0-19" ), :Name( "Pop Age 20-59" ), :Name( "Pop Age 60+" ) ),
	Profiler(
		1,
		Arrange in Rows( 4 ),
		Term Value(
			Name( "Pop Age 0-19 M" )(92500000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 0-19 F" )(100000000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 20-59 M" )(40000000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 20-59 F" )(40000000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 60+ M" )(10000000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 60+ F" )(14000000, Lock( 0 ), Show( 1 ))
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create profiler object.
3. Set response variables.
4. Configure profiler settings.
5. Arrange profiles in rows.
6. Set term values for "Pop Age 0-19 M".
7. Set term values for "Pop Age 0-19 F".
8. Set term values for "Pop Age 20-59 M".
9. Set term values for "Pop Age 20-59 F".
10. Set term values for "Pop Age 60+ M".
11. Set term values for "Pop Age 60+ F".



### Example 9
> **Summary**: Creates a prediction profiler in JMP, configuring term values and arranging profiles in rows for analysis.

<!-- Keywords: #JMPScriptingLanguage, #PredictionProfiler, #TermValues, #ProfileArrangement, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Profiler(
	Y( :Pred Formula Y ),
	Profiler(
		1,
		Profile at Boundary( "Turn at Boundaries" ),
		Arrange in Rows( 2 ),
		Term Value(
			p1( 0.6615, Min( 0.474 ), Max( 0.849 ), Lock( 0 ), Show( 1 ) ),
			p2( 0.126, Max( 0.252 ), Lock( 0 ), Show( 1 ) ),
			p3( 0.2125, Min( 0.151 ), Max( 0.274 ), Lock( 0 ), Show( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create profiler object.
3. Set response variable.
4. Configure profiler settings.
5. Set profile at boundaries.
6. Arrange profiles in rows.
7. Define term values.
8. Set p1 value and constraints.
9. Set p2 value and constraints.
10. Set p3 value and constraints.



### Example 10
> **Summary**: Creates a profiler object to visualize and analyze data from the 'data_table.jmp' file, with specific settings for term values, boundaries, and arrangement.

<!-- Keywords: #JMPScriptingLanguage, #ProfilerObject, #DataVisualization, #TermValues, #BoundarySettings -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Profiler(
	Y( :Pred Formula Y ),
	Profiler(
		1,
		Profile at Boundary( "Turn at Boundaries" ),
		Arrange in Rows( 1 ),
		Term Value(
			p1( 0.6615, Min( 0.474 ), Max( 0.849 ), Lock( 0 ), Show( 1 ) ),
			p2( 0.126, Max( 0.252 ), Lock( 0 ), Show( 1 ) ),
			p3( 0.2125, Min( 0.151 ), Max( 0.274 ), Lock( 0 ), Show( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create profiler object.
3. Set response variable.
4. Configure profiler settings.
5. Profile at boundaries.
6. Arrange profiles in rows.
7. Set term values for p1.
8. Set minimum and maximum for p1.
9. Set term values for p2.
10. Set maximum for p2.
11. Set term values for p3.
12. Set minimum and maximum for p3.



### Example 11
> **Summary**: Calculates profit-related metrics, including Revenue, Product Cost, and Customer Service Cost, using a Profiler object in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ProfilerObject, #ProfitMetrics, #DataAnalysis, #BusinessIntelligence -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Profiler(
	Y( :Profit ),
	Profiler(
		1,
		Term Value(
			Revenue( 3750, Lock( 0 ), Show( 1 ) ),
			Product Cost( 4625, Lock( 0 ), Show( 1 ) ),
			Customer Service Cost( 925, Lock( 0 ), Show( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create profiler object.
3. Set response variable.
4. Configure profiler settings.
5. Define term values.
6. Set Revenue value.
7. Unlock Revenue.
8. Display Revenue.
9. Set Product Cost value.
10. Unlock Product Cost.
11. Display Product Cost.
12. Set Customer Service Cost value.
13. Unlock Customer Service Cost.
14. Display Customer Service Cost.



### Example 12
> **Summary**: Creates a prediction profiler with specified term values and boundary settings, sending the report to the Prediction Profiler platform.

<!-- Keywords: #JMPScriptingLanguage, #PredictionProfiler, #TermValue, #BoundarySettings, #SendToReport -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Profiler(
	Y( :Pred Formula Y ),
	Profiler(
		1,
		Profile at Boundary( "Turn at Boundaries" ),
		Term Value(
			p1( 0.6615, Min( 0.474 ), Max( 0.849 ), Lock( 0 ), Show( 1 ) ),
			p2( 0.126, Max( 0.252 ), Lock( 0 ), Show( 1 ) ),
			p3( 0.2125, Min( 0.151 ), Max( 0.274 ), Lock( 0 ), Show( 1 ) )
		)
	),
	SendToReport(
		Dispatch( {"Prediction Profiler"}, "Profiler", FrameBox, {Frame Size( 200, 166 )} ),
		Dispatch( {"Prediction Profiler"}, "Profiler", FrameBox( 3 ), {Frame Size( 200, 166 )} ),
		Dispatch( {"Prediction Profiler"}, "Profiler", FrameBox( 5 ), {Frame Size( 200, 166 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Profiler object.
3. Set response variable Pred Formula Y.
4. Configure Profiler settings.
5. Profile at boundaries.
6. Set initial term values.
7. Lock terms p1, p2, p3.
8. Display terms p1, p2, p3.
9. Send report to Prediction Profiler.
10. Adjust frame sizes for visualization.



### Example 13
> **Summary**: Runs the construction of a choice model using Profiles, Responses, and Subjects data tables in JMP, specifying response, profile, and subject effects while adjusting for Firth bias and including likelihood ratio tests.

<!-- Keywords: #JMP, #ChoiceModel, #Profiler, #ConfidenceIntervals, #TermValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Profiler( Y( :GP Fit, :NL Fit, :Difference ), Profiler( 1, Confidence Intervals( 1 ), Term Value( l( 0.5 ), k( 0.3966 ) ) ) );
```

**Code Explanation**:

1. Open data table.
2. Launch Profiler platform.
3. Set response variables.
4. Configure Profiler settings.
5. Enable confidence intervals.
6. Set term values for l.
7. Set term values for k.



### Example 14
> **Summary**: Creates a profiler object to analyze Yield response variable, with specified confidence intervals and desirability functions, using Simulator settings and initial term values.

<!-- Keywords: #JSLScriptingLanguage, #ProfilerObject, #SimulatorSettings, #ConfidenceIntervals, #DesirabilityFunctions -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Profiler(
	Y( :Yield ),
	Profiler(
		1,
		Confidence Intervals( 1 ),
		Desirability Functions( 1 ),
		Yield << Response Limits( {Lower( 0.5, 0.05 ), Middle( 0.6, 0.75 ), Upper( 0.625, 0.815625 ), Goal( Maximize ), Importance( 1 )} ),
		Term Value( Reaction Temperature( 530 ), Reaction Time( 0.2, Min( 0.101 ) ) ),
		Simulator(
			1,
			Factors( Reaction Temperature << Random( Normal weighted( 530, 1 ) ), Reaction Time << Random( Normal weighted( 0.2, 0.03 ) ) ),
			Responses( Yield << No Noise )
		),
		Desirability Functions( 0 ),
		Simulator( 0 )
	),
	Expand
);
```

**Code Explanation**:

1. Open data table;
2. Create profiler object.
3. Set response variable.
4. Enable profiler settings.
5. Configure confidence intervals.
6. Enable desirability functions.
7. Define response limits.
8. Set initial term values.
9. Configure simulator settings.
10. Expand profiler view.



### Example 15
> **Summary**: Creates a profiler object to analyze the relationship between ABRASION, MODULUS, ELONG, and HARDNESS in a data table, with specific term values for SILICA, SILANE, and SULFUR.

<!-- Keywords: #JMP, #Profiler, #TermValue, #Simulator, #DataAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Profiler(
		1,
		Term Value( SILICA( 1.25, Lock( 0 ), Show( 1 ) ), SILANE( 50, Lock( 0 ), Show( 1 ) ), SULFUR( 2.25, Lock( 0 ), Show( 1 ) ) ),
		Simulator(
			1,
			Factors( SILICA << Fixed( 1.25 ), SILANE << Fixed( 50 ), SULFUR << Fixed( 2.25 ) ),
			Responses(
				Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise, Pred Formula ELONG << No Noise,
				Pred Formula HARDNESS << No Noise
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Profiler object.
3. Set response variables.
4. Configure Profiler settings.
5. Lock SILICA term.
6. Lock SILANE term.
7. Lock SULFUR term.
8. Initialize Simulator.
9. Fix SILICA factor.
10. Fix SILANE factor.
11. Fix SULFUR factor.
12. Disable noise for responses.



### Example 16
> **Summary**: Configures a profiler object to analyze data from the 'data_table.jmp' file, specifying response, profile, and subject effects while adjusting for Firth bias and including likelihood ratio tests.

<!-- Keywords: #JSL, #Profiler, #DataAnalysis, #FirthBias, #LikelihoodRatioTests -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Profiler(
	Y( :Time 2sided ),
	Profiler(
		1,
		Term Value(
			Receive Application( 16, Min( 7 ), Max( 25 ), Lock( 0 ), Show( 1 ) ),
			Review( 16, Min( 7 ), Max( 25 ), Lock( 0 ), Show( 1 ) ),
			Credit Check( 16, Max( 25 ), Lock( 0 ), Show( 1 ) ),
			Loan Finalization( 16, Max( 25 ), Lock( 0 ), Show( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create profiler object.
3. Set response variable.
4. Configure profiler settings.
5. Define term values.
6. Set initial value for "Receive Application".
7. Set minimum and maximum for "Receive Application".
8. Set initial value for "Review".
9. Set minimum and maximum for "Review".
10. Set initial value for "Credit Check".



### Example 17
> **Summary**: Creates a Profiler object to analyze the relationship between ln(dose) and Dose, with adjustments for Firth bias and likelihood ratio tests.

<!-- Keywords: #JMPScriptingLanguage, #ProfilerAnalysis, #FirthBiasAdjustment, #LikelihoodRatioTest, #DataTableOperations -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Profiler( Y( :Name( "ln(dose)" ) ), Profiler( 1, Term Value( Dose( 2.25, Lock( 0 ), Show( 1 ) ) ) ) );
```

**Code Explanation**:

1. Open data_table data
2. Create Profiler object.
3. Set response variable ln(dose).
4. Add Profiler analysis.
5. Specify term value for Dose.
6. Set Dose value to 2.25.
7. Unlock Dose parameter.
8. Display Dose parameter.



### Example 18
> **Summary**: Creates a profiler object to analyze data table 'data_table.jmp', specifying response, profile, and subject effects, and adjusting for Firth bias with likelihood ratio tests.

<!-- Keywords: #JSLScripting, #ProfilerObject, #DataAnalysis, #FirthBiasAdjustment, #LikelihoodRatioTests -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Profiler(
	Y( :Pred Formula Y ),
	Profiler(
		1,
		Profile at Boundary( "Turn at Boundaries" ),
		Term Value(
			p1( 0.6615, Min( 0.474 ), Max( 0.849 ), Lock( 0 ), Show( 1 ) ),
			p2( 0.126, Max( 0.252 ), Lock( 0 ), Show( 1 ) ),
			p3( 0.2125, Min( 0.151 ), Max( 0.274 ), Lock( 0 ), Show( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create profiler object.
3. Set response variable.
4. Configure profiler settings.
5. Set boundary behavior.
6. Define term values.
7. Set initial value for p1.
8. Set min and max for p1.
9. Unlock p1.
10. Show p1.



### Example 19
> **Summary**: Creates a profiler object to analyze the relationship between ABRASION, MODULUS, ELONG, and HARDNESS variables in a data table, with specific term values for SILICA, SILANE, and SULFUR predictors.

<!-- Keywords: #JMPScriptingLanguage, #ProfilerObject, #TermValue, #PredictorVariables, #DataAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Profiler(
		1,
		Term Value( SILICA( 1.25, Lock( 0 ), Show( 1 ) ), SILANE( 50, Lock( 0 ), Show( 1 ) ), SULFUR( 2.25, Lock( 0 ), Show( 1 ) ) )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create profiler object.
3. Set response variables.
4. Configure profiler settings.
5. Set term values for predictors.
6. Lock predictor SILICA.
7. Show predictor SILICA.
8. Lock predictor SILANE.
9. Show predictor SILANE.
10. Lock predictor SULFUR.
11. Show predictor SULFUR.



### Example 20
> **Summary**: Creates a prediction profiler to analyze data in the 'data_table.jmp' table, specifying noise factors and response variables.

<!-- Keywords: #JMPScriptingLanguage, #PredictionProfiler, #DataAnalysis, #NoiseFactors, #ResponseVariables -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Profiler(
	Noise Factors( :p3 ),
	Y( :Pred Formula Y ),
	Profiler(
		1,
		Profile at Boundary( "Turn at Boundaries" ),
		Term Value(
			p1( 0.6615, Min( 0.474 ), Max( 0.849 ), Lock( 0 ), Show( 1 ) ),
			p2( 0.126, Max( 0.252 ), Lock( 0 ), Show( 1 ) ),
			p3( 0.2125, Min( 0.151 ), Max( 0.274 ), Lock( 0 ), Show( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Profiler object.
3. Set noise factor to p3.
4. Set response variable to Pred Formula Y.
5. Initialize nested Profiler.
6. Enable boundary profiling.
7. Set initial value for p1.
8. Define min and max for p1.
9. Set initial value for p2.
10. Define max for p2.



### Example 21
> **Summary**: Creates a Profiler object to analyze population age distribution, specifying term values and locking them off for further analysis.

<!-- Keywords: #JMPScriptingLanguage, #ProfilerObject, #TermValues, #DataAnalysis, #PopulationAgeDistribution -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Profiler(
	Y( :Name( "Pop Age 0-19" ), :Name( "Pop Age 20-59" ), :Name( "Pop Age 60+" ) ),
	Profiler(
		1,
		Term Value(
			Name( "Pop Age 0-19 M" )(92500000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 0-19 F" )(100000000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 20-59 M" )(40000000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 20-59 F" )(40000000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 60+ M" )(10000000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 60+ F" )(14000000, Lock( 0 ), Show( 1 ))
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Profiler object.
3. Set response variables.
4. Configure Profiler settings.
5. Set term values.
6. Lock term values off.
7. Show all terms.
8. Assign value for "Pop Age 0-19 M".
9. Assign value for "Pop Age 0-19 F".
10. Assign values for remaining terms.



### Example 22
> **Summary**: Runs a profiler analysis to optimize multiple response variables, including ABRASION, MODULUS, ELONG, and HARDNESS, by defining limits, goals, and initial factor values.

<!-- Keywords: #JSLScripting, #ProfilerAnalysis, #ResponseOptimization, #FactorSettings, #DataTable -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Profiler(
		1,
		Desirability Functions( 1 ),
		Pred Formula ABRASION << Response Limits(
			{Lower( 90, 0.066 ), Middle( 145, 0.5 ), Upper( 200, 0.9819 ), Goal( "Maximize" ), Importance( 1 )}
		),
		Pred Formula MODULUS << Response Limits(
			{Lower( 500, 0.066 ), Middle( 1375, 0.5 ), Upper( 2250, 0.9819 ), Goal( "Maximize" ), Importance( 1 )}
		),
		Pred Formula ELONG << Response Limits(
			{Lower( 200, 0.066 ), Middle( 425, 0.5 ), Upper( 650, 0.9819 ), Goal( "Maximize" ), Importance( 1 )}
		),
		Pred Formula HARDNESS << Response Limits(
			{Lower( 60, 0.066 ), Middle( 70, 0.5 ), Upper( 80, 0.9819 ), Goal( "Maximize" ), Importance( 1 )}
		),
		Term Value(
			SILICA( 0.98793639563904, Lock( 0 ), Show( 1 ) ),
			SILANE( 66.33, Lock( 0 ), Show( 1 ) ),
			SULFUR( 3.1165, Lock( 0 ), Show( 1 ) )
		),
		Simulator(
			1,
			Factors( SILICA << Fixed( 0.98793639563904 ), SILANE << Fixed( 66.33 ), SULFUR << Fixed( 3.1165 ) ),
			Responses(
				Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise, Pred Formula ELONG << No Noise,
				Pred Formula HARDNESS << No Noise
			)
		)
	)
);
```

**Code Explanation**:

1. Set default names.
2. Open data_table data
3. Start profiler analysis.
4. Set response variables.
5. Configure profiler settings.
6. Define ABRASION limits and goal.
7. Define MODULUS limits and goal.
8. Define ELONG limits and goal.
9. Define HARDNESS limits and goal.
10. Set initial factor values.



### Example 23
> **Summary**: Creates a choice model using Profiler, Responses, and Subjects data tables, specifying response, profile, and subject effects while adjusting for Firth bias and including likelihood ratio tests.

<!-- Keywords: #JSLScriptingLanguage, #ChoiceModel, #Profiler, #Simulation, #DefectProfiling -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Profiler(
	Y( :Time 2sided ),
	Profiler(
		1,
		Confidence Intervals( 1 ),
		Term Value(
			Receive Application( 13, Min( 7 ), Max( 25 ) ),
			Review( 14, Min( 7 ), Max( 25 ) ),
			Credit Check( 15, Min( 7 ), Max( 25 ) ),
			Loan Finalization( 16, Min( 7 ), Max( 25 ) )
		),
		Simulator(
			1,
			Factors(
				Receive Application << Random( Normal weighted( 13, 1 ) ), Review << Random( Normal weighted( 14, 2 ) ),
				Credit Check << Random( Normal weighted( 15, 3 ) ), Loan Finalization << Random( Normal weighted( 16, 4 ) )
			),
			Responses( Time 2sided << No Noise ),
			Defect Profiler( 1 ),
			Defect Parametric Profile( 1 )
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create Profiler object.
3. Set response variable.
4. Configure Profiler settings.
5. Define term values.
6. Enable confidence intervals.
7. Initialize Simulator.
8. Set random factors.
9. Define response without noise.
10. Enable Defect Profiler.



### Example 24
> **Summary**: Creates a prediction profiler to analyze data from the 'data_table.jmp' file, specifying response limits and goal for maximum desirability.

<!-- Keywords: #JSLScriptingLanguage, #PredictionProfiler, #DesirabilityFunctions, #TermValues, #SendToReport -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Profiler(
	Y( :Y ),
	Profiler(
		1,
		Desirability Functions( 0 ),
		Y << Response Limits( {Lower( -1.25, 0.066 ), Middle( 0, 0.5 ), Upper( 1.25, 0.9819 ), Goal( "Maximize" ), Importance( 1 )} ),
		Term Value( X1( 0, Lock( 0 ), Show( 1 ) ), X2( 0, Lock( 0 ), Show( 1 ) ) )
	),
	SendToReport(
		Dispatch( {"Prediction Profiler"}, "Profiler", FrameBox, {Frame Size( 249, 212 )} ),
		Dispatch( {"Prediction Profiler"}, "Profiler", FrameBox( 3 ), {Frame Size( 249, 212 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create profiler object.
3. Set response variable.
4. Configure profiler settings.
5. Define response limits.
6. Set goal for response.
7. Specify term values.
8. Lock term values.
9. Show terms in profiler.
10. Adjust frame sizes.



### Example 25
> **Summary**: Runs the simulation and profiling process for a material properties prediction model, defining response limits and goals for ABRASION, MODULUS, ELONG, and HARDNESS, and configuring simulator factors and responses.

<!-- Keywords: #JMP, #Profiler, #Simulator, #MaterialProperties, #PredictiveModel -->

**Code**:
```jsl
Open("data_table.jmp");
Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Profiler(
		1,
		Pred Formula ABRASION << Response Limits(
			{Lower( 90, 0.066 ), Middle( 145, 0.5 ), Upper( 200, 0.9819 ), Goal( "Maximize" ), Importance( 1 )}
		),
		Pred Formula MODULUS << Response Limits(
			{Lower( 500, 0.066 ), Middle( 1375, 0.5 ), Upper( 2250, 0.9819 ), Goal( "Maximize" ), Importance( 1 )}
		),
		Pred Formula ELONG << Response Limits(
			{Lower( 200, 0.066 ), Middle( 425, 0.5 ), Upper( 650, 0.9819 ), Goal( "Maximize" ), Importance( 1 )}
		),
		Pred Formula HARDNESS << Response Limits(
			{Lower( 60, 0.066 ), Middle( 70, 0.5 ), Upper( 80, 0.9819 ), Goal( "Maximize" ), Importance( 1 )}
		),
		Term Value( SILICA( 1.25, Lock( 0 ), Show( 1 ) ), SILANE( 50, Lock( 0 ), Show( 1 ) ), SULFUR( 2.25, Lock( 0 ), Show( 1 ) ) ),
		Simulator(
			1,
			Factors(
				SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Random( Normal( 50, 6.532 ) ),
				SULFUR << Random( Normal( 2.25, 0.3266 ) )
			),
			Responses(
				Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise, Pred Formula ELONG << No Noise,
				Pred Formula HARDNESS << No Noise
			),
			Resimulate
		)
	), 
);
```

**Code Explanation**:

1. Open data_table data
2. Start Profiler.
3. Set response variables.
4. Define ABRASION limits and goal.
5. Define MODULUS limits and goal.
6. Define ELONG limits and goal.
7. Define HARDNESS limits and goal.
8. Set initial factor values.
9. Configure simulator factors.
10. Configure simulator responses and resimulate.



### Example 26
> **Summary**: Creates and configures a custom profiler object in JMP, specifying response variables, profile effects, and subject adjustments for Firth bias and likelihood ratio tests.

<!-- Keywords: #JMPProfiler, #CustomPreset, #FirthBias, #LikelihoodRatioTests, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj_cust = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Profiler(
		1,
		Desirability Functions( 1 ),
		Term Value( :SILICA( 1.2, Lock( 0 ), Show( 1 ) ), :SILANE( 50, Lock( 0 ), Show( 1 ) ), :SULFUR( 2.3, Lock( 0 ), Show( 1 ) ) )
	)
);
obj = dt << Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
preset = obj_cust << New Preset;
obj << Apply Preset( Preset );
```

**Code Explanation**:

1. Open data table;
2. Create custom profiler object.
3. Set response variables.
4. Configure profiler settings.
5. Lock term values.
6. Show term values.
7. Create another profiler object.
8. Set response variables.
9. Save custom preset.
10. Apply saved preset.



### Example 27
> **Summary**: Creates and configures a custom profiler object in JMP, specifying response variables, profile settings, and term values for SILICA, SILANE, and SULFUR.

<!-- Keywords: #JMPScriptingLanguage, #ProfilerObject, #CustomConfiguration, #TermValues, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj_cust = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Profiler(
		1,
		Desirability Functions( 0 ),
		Overlaid Interactions( 1 ),
		Data Points( 1 ),
		Term Value( :SILICA( 1.2, Lock( 0 ), Show( 1 ) ), :SILANE( 50, Lock( 0 ), Show( 1 ) ), :SULFUR( 2.3, Lock( 0 ), Show( 1 ) ) )
	)
);
obj = dt << Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
preset = obj_cust << New Preset;
obj << Apply Preset( Preset );
```

**Code Explanation**:

1. Open data table;
2. Create custom profiler object.
3. Set response variables: ABRASION, MODULUS, ELONG, HARDNESS.
4. Configure profiler settings.
5. Enable overlaid interactions.
6. Display data points.
7. Set term values for SILICA, SILANE, SULFUR.
8. Create default profiler object.
9. Save custom profiler as preset.
10. Apply saved preset to default profiler.



### Example 28
> **Summary**: Creates and configures a Prediction Profiler in JMP, using the data_table.jmp dataset to analyze the relationships between ABRASION, MODULUS, ELONG, and HARDNESS.

<!-- Keywords: #JMP, #PredictionProfiler, #DataAnalysis, #Scripting, #DesirabilityFunctions -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj_cust = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Profiler(
		1,
		Desirability Functions( 0 ),
		Sensitivity Indicator( 1 ),
		Independent Uniform Inputs( 1 ),
		Reorder X Variables( :SILANE, :SILICA, :SULFUR ),
		Term Value( :SILICA( 1.2, Lock( 0 ), Show( 1 ) ), :SILANE( 50, Lock( 0 ), Show( 1 ) ), :SULFUR( 2.3, Lock( 0 ), Show( 1 ) ) )
	),
	SendToReport(
		Dispatch( {"Prediction Profiler", "Variable Importance: Independent Uniform Inputs"}, "Summary Report", OutlineBox, {Close( 1 )} )
	)
);
obj = dt << Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
preset = obj_cust << New Preset;
obj << Apply Preset( Preset );
```

**Code Explanation**:

1. Open data_table data
2. Create Profiler object.
3. Set response variables.
4. Configure Profiler settings.
5. Disable Summary Report.
6. Order X variables.
7. Set initial term values.
8. Save Profiler preset.
9. Apply saved preset.



### Example 29
> **Summary**: Creates a profiler object to analyze the relationship between Abrasion, Modulus, Elongation, and Hardness in a data table, with specific term values for Silica, Silane, and Sulfur.

<!-- Keywords: #JMP, #Profiler, #TermValue, #DataAnalysis, #Scripting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Profiler(
		1,
		Arrange in Rows( 2 ),
		Term Value( SILICA( 1.25, Lock( 0 ), Show( 1 ) ), SILANE( 50, Lock( 0 ), Show( 1 ) ), SULFUR( 2.25, Lock( 0 ), Show( 1 ) ) )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create profiler object.
3. Specify response variables.
4. Configure profiler settings.
5. Arrange plots in rows.
6. Set term values for silica.
7. Lock silica value.
8. Show silica value.
9. Set term values for silane.
10. Lock silane value.
11. Show silane value.
12. Set term values for sulfur.
13. Lock sulfur value.
14. Show sulfur value.



### Example 30
> **Summary**: Creates a profiler object to visualize population age distribution, specifying response and profile effects, and adjusting for Firth bias.

<!-- Keywords: #JMPProfiler, #DataVisualization, #PopulationAnalysis, #FirthBiasAdjustment, #Scripting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Profiler(
	Y( :Name( "Pop Age 0-19" ), :Name( "Pop Age 20-59" ), :Name( "Pop Age 60+" ) ),
	Profiler(
		1,
		Arrange in Rows( 3 ),
		Term Value(
			Name( "Pop Age 0-19 M" )(92500000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 0-19 F" )(100000000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 20-59 M" )(40000000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 20-59 F" )(40000000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 60+ M" )(10000000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 60+ F" )(14000000, Lock( 0 ), Show( 1 ))
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create profiler object.
3. Set response variables.
4. Configure profiler settings.
5. Arrange plots in rows.
6. Set term values.
7. Unlock term values.
8. Show all terms.
9. Assign values to "Pop Age 0-19 M".
10. Assign values to other terms.



### Example 31
> **Summary**: Creates a profiler object to analyze population age demographics, specifying response variables and configuring term values for visualization.

<!-- Keywords: #JMPScriptingLanguage, #ProfilerObject, #TermValue, #DataVisualization, #DemographicAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Profiler(
	Y( :Name( "Pop Age 0-19" ), :Name( "Pop Age 20-59" ), :Name( "Pop Age 60+" ) ),
	Profiler(
		1,
		Arrange in Rows( 4 ),
		Term Value(
			Name( "Pop Age 0-19 M" )(92500000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 0-19 F" )(100000000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 20-59 M" )(40000000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 20-59 F" )(40000000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 60+ M" )(10000000, Lock( 0 ), Show( 1 )),
			Name( "Pop Age 60+ F" )(14000000, Lock( 0 ), Show( 1 ))
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create profiler object.
3. Set response variables.
4. Configure profiler settings.
5. Arrange terms in rows.
6. Set term values.
7. Unlock term "Pop Age 0-19 M".
8. Unlock term "Pop Age 0-19 F".
9. Unlock term "Pop Age 20-59 M".
10. Unlock term "Pop Age 20-59 F".



### Example 32
> **Summary**: Creates a prediction profiler to analyze data table 'data_table.jmp', utilizing Profiler settings and term values to visualize response, profile, and subject effects.

<!-- Keywords: #JMPScriptingLanguage, #Profiler, #TermValue, #BoundaryTurning, #DataTable -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Profiler(
	Y( :Pred Formula Y ),
	Profiler(
		1,
		Profile at Boundary( "Turn at Boundaries" ),
		Arrange in Rows( 2 ),
		Term Value(
			p1( 0.6615, Min( 0.474 ), Max( 0.849 ), Lock( 0 ), Show( 1 ) ),
			p2( 0.126, Max( 0.252 ), Lock( 0 ), Show( 1 ) ),
			p3( 0.2125, Min( 0.151 ), Max( 0.274 ), Lock( 0 ), Show( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Profiler object.
3. Set response variable.
4. Configure Profiler settings.
5. Enable boundary turning.
6. Arrange profiles in 2 rows.
7. Set initial term values.
8. Define p1 range and lock.
9. Define p2 range and lock.
10. Define p3 range and lock.



### Example 33
> **Summary**: Creates a prediction profiler to analyze data in a table, configuring boundary profiling and term values for p1, p2, and p3.

<!-- Keywords: #JSLScriptingLanguage, #PredictionProfiler, #BoundaryProfiling, #TermValues, #DataAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Profiler(
	Y( :Pred Formula Y ),
	Profiler(
		1,
		Profile at Boundary( "Turn at Boundaries" ),
		Arrange in Rows( 1 ),
		Term Value(
			p1( 0.6615, Min( 0.474 ), Max( 0.849 ), Lock( 0 ), Show( 1 ) ),
			p2( 0.126, Max( 0.252 ), Lock( 0 ), Show( 1 ) ),
			p3( 0.2125, Min( 0.151 ), Max( 0.274 ), Lock( 0 ), Show( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Create profiler object.
3. Set response variable.
4. Configure profiler settings.
5. Set boundary profiling.
6. Arrange profiles in rows.
7. Define term values.
8. Set initial value for p1.
9. Set min and max for p1.
10. Lock p1 value.



### Example 34
> **Summary**: Generates a prediction profiler report from a data table, including bagged predictions and confidence intervals.

<!-- Keywords: #JSLScriptingLanguage, #PredictionProfiler, #BaggedPredictions, #ConfidenceIntervals, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << run script( "Model" );
rpt = Report( obj << (Profiler( 1 )) );
scpt = rpt[Outline Box( "Prediction Profiler" )] << get scriptable object;
scpt << Save Bagged Predictions( 2 );
n = dt << Get Column Names( string );
col1 = Contains( n, "Pred Formula Shrinkage Bagged Mean" );
col2 = Contains( n, "Shrinkage Bootstrap Std Err" );
col3 = Contains( n, "StdError Shrinkage Bagged Mean" );
```

**Code Explanation**:

1. Open data table.
2. Run "Model" script on data table.
3. Generate report from Profiler.
4. Extract Prediction Profiler outline box.
5. Get scriptable object from outline box.
6. Save bagged predictions for 2 iterations.
7. Retrieve all column names from data table.
8. Check for "Pred Formula Shrinkage Bagged Mean" column.
9. Check for "Shrinkage Bootstrap Std Err" column.
10. Check for "StdError Shrinkage Bagged Mean" column.



### Example 35
> **Summary**: Runs the simulation and analysis of data table using Profiler, Simulator, and Report features in JMP.

<!-- Keywords: #JMPScriptingLanguage, #Profiler, #Simulator, #Report, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Profiler(
	Y( :Name( "X-formula" ) ),
	Profiler(
		1,
		Simulator( 1, N Runs( 100 ), Factors( year << Random( Normal( 1912.5, 48 ) ) ), Responses( Name( "X-formula" ) << No Noise ) )
	), 
);
Report( obj )[Outline Box( "Simulate to Table" )][Button Box( 1 )] << Click;
Close( dt, No Save );
dt1 = Current Data Table();
dt1 << Sort( By( :year ), Order( Ascending ) );
Close( dt1, No Save );
dt2 = Current Data Table();
_mat = J( N Rows( dt2 ) - 1, 2, 0 );
_mat[0, 1] = Transpose( Column( dt2, 1 )[2 :: N Rows( dt2 )] - Column( dt2, 1 )[1 :: (N Rows( dt2 ) - 1)] );
_mat[0, 2] = Transpose( Column( dt2, 2 )[2 :: N Rows( dt2 )] - Column( dt2, 2 )[1 :: (N Rows( dt2 ) - 1)] );
Close( dt2, No Save );
::square = 2;
dt1 = New Table( "Table 1",
	New Column( "xmat", Set Values( 1 :: 10 ) ),
	New Column( "ymat1", Formula( Parameter( {a = 1, b = 1}, a + b * :xmat + :xmat ^ ::square ) ) )
);
obj1 = dt1 << Profiler( Y( :ymat1 ), Profiler( 1 ), Expand );
rpt1 = obj1 << report;
y1 = Num( rpt1[Text Box( 2 )] << get Text );
dt2 = New Table( "Table2",
	New Column( "xmat", Set Values( 1 :: 10 ) ),
	New Column( "ymat2", ::square = 1, Formula( Parameter( {a = 1, b = 1}, a + b * :xmat + :xmat ^ ::square ) ) )
);
obj2 = dt2 << Profiler( Y( :ymat2 ), Profiler( 1 ), Expand );
rpt2 = obj2 << report;
y2 = Num( rpt2[Text Box( 2 )] << get Text );
dt = New Table( "Test", Add Rows( 100 ), New Column( "A", Formula( Random Normal() ) ) );
dt << New Column( "B", Formula( Summation( i = 1, 7, :A * Random Integer( 2 ) ) ) );
obj = dt << Profiler( Y( :B ), Expand );
obj << Save Expanded Formulas;
_mat = dt << Get as Matrix( {3} );
```

**Code Explanation**:

1. Open data table.
2. Launch Profiler on table.
3. Configure Profiler settings.
4. Run simulation.
5. Close original data table.
6. Retrieve simulation results.
7. Sort results by year.
8. Close sorted data table.
9. Calculate differences between rows.
10. Create new table with formulas.



### Example 36
> **Summary**: Launches a Profiler on selected columns in a JMP data table, adjusting for Firth bias and including likelihood ratio tests.

<!-- Keywords: #JMPScriptingLanguage, #Profiler, #DesirabilityFunctions, #FirthBiasAdjustment, #LikelihoodRatioTests -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Unthreaded( 1 );
obj << Save Script to Script Window;
For( ii = 1, ii <= N Items( Window() ), ii++,
	If( (Window()[ii] << get window title) == "Script Window",
		If( Host is( mac ),
			scpt = Trim( Window()[ii][Script Box( 1 )] << get line text( 15 ) ),
			scpt = Trim( Window()[ii][Script Box( 1 )] << get line text( 15 ) )
		);
		Window()[ii] << Close Window;
		Break();
	)
);
```

**Code Explanation**:

1. Open data table;
2. Launch Profiler on selected columns.
3. Set desirability functions.
4. Disable threading in Profiler.
5. Save Profiler script to Script Window.
6. Iterate through open windows.
7. Identify Script Window.
8. Retrieve script line text.
9. Trim retrieved script text.
10. Close Script Window.



### Example 37
> **Summary**: Creates a Profiler object in JMP, specifying response variables and desirability functions, and saves the script to the Script Window.

<!-- Keywords: #JMPScriptingLanguage, #ProfilerObject, #DesirabilityFunctions, #ScriptWindow, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Default N Levels( 20 );
obj << Save Script to Script Window;
For( ii = 1, ii <= N Items( Window() ), ii++,
	If( (Window()[ii] << get window title) == "Script Window",
		If( Host is( mac ),
			scpt = Trim( Words( Window()[ii][Script Box( 1 )] << get line text( 10 ), "," )[1] ),
			scpt = Trim( Words( Window()[ii][Script Box( 1 )] << get line text( 10 ), "," )[1] )
		);
		Window()[ii] << Close Window;
		Break();
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Profiler object.
3. Set response variables.
4. Initialize desirability functions.
5. Set default number of levels to 20.
6. Save script to Script Window.
7. Loop through all windows.
8. Find Script Window.
9. Extract script content.
10. Close Script Window.



### Example 38
> **Summary**: Creates a profiler object to optimize desirability functions, adjusting for Firth bias and including likelihood ratio tests.

<!-- Keywords: #JMPScriptingLanguage, #ProfilerObject, #DesirabilityFunctions, #FirthBiasAdjustment, #LikelihoodRatioTests -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Profiler(
		1,
		Term Value( SILICA( 1.25, Lock( 0 ), Show( 1 ) ), SILANE( 50, Lock( 0 ), Show( 1 ) ), SULFUR( 2.25, Lock( 0 ), Show( 1 ) ) ),
		Remember Settings( "Default" ),
		Term Value( SILICA( 1.25, Lock( 0 ), Show( 1 ) ), SILANE( 50, Lock( 0 ), Show( 1 ) ), SULFUR( 2.25, Lock( 0 ), Show( 1 ) ) ),
		Desirability Functions( 1 ),
		Maximize Desirability,
		Remember Settings( "Optimal" ), 
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Profiler object.
3. Set response variables.
4. Configure Profiler settings.
5. Lock SILICA term value.
6. Lock SILANE term value.
7. Lock SULFUR term value.
8. Save default settings.
9. Maximize desirability functions.
10. Save optimal settings.



### Example 39
> **Summary**: Runs the simulation and profiling of a formula-based model, generating 100 runs with random normal distribution for the year factor and disabling noise for the response.

<!-- Keywords: #JMPScriptingLanguage, #Profiler, #Simulator, #Formula-BasedModel, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Profiler(
	Y( :Name( "X-formula" ) ),
	Profiler(
		1,
		Simulator( 1, N Runs( 100 ), Factors( year << Random( Normal( 1912.5, 48 ) ) ), Responses( Name( "X-formula" ) << No Noise ) )
	), 
);
Report( obj )[Outline Box( "Simulate to Table" )][Button Box( 1 )] << Click;
```

**Code Explanation**:

1. Open data table;
2. Launch Profiler on X-formula.
3. Configure Simulator for 100 runs.
4. Set year factor to random normal distribution.
5. Disable noise for X-formula response.
6. Execute simulation.
7. Access Simulate to Table outline.
8. Click first button box.



### Example 40
> **Summary**: Configures a Profiler object to analyze the ABRASION response variable, adjusting for Firth bias and including likelihood ratio tests.

<!-- Keywords: #JMPScriptingLanguage, #ProfilerObject, #FirthBiasAdjustment, #LikelihoodRatioTests, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Profiler(
	Y( :Pred Formula ABRASION ),
	Profiler(
		1,
		Term Value( SILICA( 1.25, Lock( 0 ), Show( 1 ) ), SILANE( 50, Lock( 0 ), Show( 1 ) ), SULFUR( 2.25, Lock( 0 ), Show( 1 ) ) )
	)
);
obj << Profiler( Extrapolation Control Option( "On" ) );
obj << Profiler( Extrapolation Control Option( "Warning On" ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create a Profiler object.
3. Set response variable to ABRASION.
4. Configure Profiler settings.
5. Set SILICA term value to 1.25.
6. Set SILANE term value to 50.
7. Set SULFUR term value to 2.25.
8. Enable extrapolation control.
9. Enable extrapolation warning.
10. Generate Profiler report.



### Example 41
> **Summary**: Runs the simulation and prediction of material properties using a Profiler object, configuring factors and extracting predictions from the report.

<!-- Keywords: #JMPScriptingLanguage, #ProfilerObject, #Simulation, #MaterialProperties, #PredictiveModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
rpt = obj << report;
obj << Simulator(
	Factors(
		SILICA << Random( Normal( 1.2, 0.2 ) ), SILANE << Random( Normal weighted( 61.6, 3.2 ) ), SULFUR << Random( Lognormal( 1.4, 0.2 ) )
	)
);
sim = J( 6, 1, 0 );
sim_parm = J( 3, 2, 0 );
For( i = 1, i <= N Rows( sim ), i++,
	sim[i] = rpt[Outline Box( "Prediction Profiler" )][Combo Box( i )] << get
);
For( i = 1, i <= N Rows( sim_parm ), i++,
	sim_parm[i, 0] = Transpose( Matrix( rpt[Outline Box( "Prediction Profiler" )][Number Col Edit Box( i )] << get ) )
);
obj << Simulator( 0 );
obj << Simulator(
	Factors(
		SILICA << Random( JohnsonSb( 0, 1, 0, 1 ) ), SILANE << Random( Triangular( 55.2, 61.6, 68.1 ) ),
		SULFUR << Random( Gamma( 1, 1.4 ) )
	)
);
sim1 = J( 6, 1, 0 );
For( i = 1, i <= N Rows( sim1 ), i++,
	sim1[i] = rpt[Outline Box( "Prediction Profiler" )][Combo Box( i )] << get
);
```

**Code Explanation**:

1. Open data table;
2. Create Profiler object.
3. Generate Profiler report.
4. Configure Simulator with factors.
5. Initialize simulation arrays.
6. Extract predictions from Profiler.
7. Extract parameters from Profiler.
8. Disable current Simulator.
9. Reconfigure Simulator with different factors.
10. Extract new predictions from Profiler.



### Example 42
> **Summary**: Runs the construction of a choice model using Profiler, Responses, and Subjects data tables to specify response, profile, and subject effects, adjusting for Firth bias and including likelihood ratio tests.

<!-- Keywords: #JMPScriptingLanguage, #Profiler, #ChoiceModel, #FirthBias, #LikelihoodRatioTests -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Profiler(
	Y( :Time 2sided ),
	Profiler(
		1,
		Confidence Intervals( 1 ),
		Term Value(
			Receive Application( 13, Min( 7 ), Max( 25 ) ),
			Review( 14, Min( 7 ), Max( 25 ) ),
			Credit Check( 15, Min( 7 ), Max( 25 ) ),
			Loan Finalization( 16, Min( 7 ), Max( 25 ) )
		),
		Simulator(
			1,
			Factors(
				Receive Application << Random( Normal weighted( 13, 1 ) ), Review << Random( Normal weighted( 14, 2 ) ),
				Credit Check << Random( Normal weighted( 15, 3 ) ), Loan Finalization << Random( Normal weighted( 16, 4 ) )
			),
			Responses( Time 2sided << No Noise ),
			Defect Profiler( 1 ),
			Defect Parametric Profile( 1 )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Profiler object.
3. Set Y variable to "Time 2sided".
4. Configure Profiler settings.
5. Enable confidence intervals.
6. Define term values for four factors.
7. Set min and max for each factor.
8. Initialize Simulator within Profiler.
9. Assign random distributions to factors.
10. Enable Defect Profiler and Parametric Profile.



## Profiler using Structural Equation Models
### Example 1
> **Summary**: Performs a mediation analysis using Structural Equation Models (SEM) to analyze the relationships between Interest, Belonging, and Autonomy variables.

<!-- Keywords: #JMPScriptingLanguage, #StructuralEquationModeling, #MediationAnalysis, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// SEM: Mediation Analysis
// Open data table
dt = Open("data_table.jmp");
// SEM: Mediation Analysis
Structural Equation Models(
	Model Variables(
		:Interest, :Belonging, :Autonomy
	),
	Model Specification(
		Model Name( "Model 2" ),
		Means(
			{"Constant", {:Interest,
			:Belonging, :Autonomy}}
		),
		Regressions(
			{:Belonging, {:Autonomy,
			:Interest}},
			{:Autonomy, {:Interest}}
		),
		Variances(
			{:Interest, {:Interest}},
			{:Belonging, {:Belonging}},
			{:Autonomy, {:Autonomy}}
		)
	),
	Fit(
		Model Name(
			"Mediation Analysis"
		),
		Means(
			{"Constant", {:Interest,
			:Belonging, :Autonomy}}
		),
		Regressions(
			{:Belonging, {:Autonomy,
			:Interest}},
			{:Autonomy, {:Interest}}
		),
		Variances(
			{:Interest, {:Interest}},
			{:Belonging, {:Belonging}},
			{:Autonomy, {:Autonomy}}
		),
		Prediction Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				:
				Belonging(
					3.6848,
					Lock( 0 ),
					Show( 1 )
				)
			),
			Y Terms( Interest )
		),
		Total Effects( 1 ),
		Indirect Effects( 1 ),
		Path Diagram Properties(
			Show R Squared Values( 1 )
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define model variables.
3. Specify model name.
4. Set means for variables.
5. Define regressions between variables.
6. Set variances for variables.
7. Fit mediation analysis model.
8. Configure prediction profiler.
9. Include confidence intervals.
10. Set term values and show predictions.



### Example 2
> **Summary**: Runs the specification and fitting of a structural equation model using JMP's Structural Equation Models platform, with means, regressions, and variances defined for Model 2, and prediction profiler enabled for Model 1.

<!-- Keywords: #JMP, #StructuralEquationModels, #ModelSpecification, #PredictionProfiler, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L ),
	Model Specification(
		Model Name( "Model 2" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L}} ),
		Regressions( {:Goal_L, {:Work_L}} ),
		Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}}, {:Work_L, {:Work_L}} )
	),
	Fit(
		Model Name( "Model 1" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L}} ),
		Regressions( {:Goal_L, {:Work_L}} ),
		Variances( {:Support_L, {:Support_L}}, {:Goal_L, {:Goal_L}}, {:Work_L, {:Work_L}} ),
		Prediction Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value( new_Goal_L( 6.59, Lock( 0 ), Show( 1 ) ), new_Work_L( 8.81, Lock( 0 ), Show( 1 ) ) ),
			Y Terms( Support_L )
		)
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Define structural equation models.
3. Specify model variables.
4. Create model specification for Model 2.
5. Include means for Model 2.
6. Define regressions for Model 2.
7. Set variances for Model 2.
8. Fit Model 1 using same specifications.
9. Enable prediction profiler for Model 1.
10. Configure prediction profiler settings.



## Profiler using Set Property
### Example 1
> **Summary**: Simulates a profiler object to analyze the relationships between ABRASION, MODULUS, ELONG, and HARDNESS factors in a data table, utilizing unthreaded mode and specifying factor distributions.

<!-- Keywords: #JSL, #Profiler, #Simulation, #DataAnalysis, #JMP -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );
obj = Profiler(
	<<Unthreaded( 1 ),
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Simulator(
		1,
		Factors( SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 ) ),
		Responses(
			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise, Pred Formula ELONG << No Noise,
			Pred Formula HARDNESS << No Noise
		),
		Defect Profiler( 1 ),
		Simulate
	),
	SendToReport( Dispatch( {"Prediction Profiler", "Simulator"}, "Responses", OutlineBox, {Close( 1 )} ) )
);
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Set lower spec limit for ABRASION.
4. Set lower and upper spec limits for MODULUS.
5. Create profiler object.
6. Specify unthreaded mode.
7. Add response variables.
8. Configure simulator settings.
9. Define factor distributions.
10. Set responses without noise.
11. Enable defect profiler.
12. Run simulation.
13. Close simulator responses report.



### Example 2
> **Summary**: Configures spec limits for four response variables (ABRASION, MODULUS, ELONG, and HARDNESS) in a data table, followed by generating 20,000 random samples and creating a 3D scatterplot for three variables.

<!-- Keywords: #JSLScripting, #SpecLimits, #Profiler, #RandomSampling, #Scatterplot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 120 ), Show Limits( 1 )} );
dt:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 1200 ), Show Limits( 1 )} );
dt:Pred Formula ELONG << Set Property( "Spec Limits", {LSL( 350 ), USL( 500 ), Show Limits( 1 )} );
dt:Pred Formula HARDNESS << Set Property( "Spec Limits", {LSL( 65 ), USL( 75 ), Show Limits( 1 )} );
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Profiler( 1, Desirability Functions( 1 ) )
);
dtNew = obj << Output Random Table( 20000 );
dtNew << Scatterplot 3D( Y( :SILICA, :SILANE, :SULFUR ) );
```

**Code Explanation**:

1. Open data table;
2. Set LSL for ABRASION.
3. Set LSL for MODULUS.
4. Set LSL and USL for ELONG.
5. Set LSL and USL for HARDNESS.
6. Create Profiler object.
7. Configure Profiler with four responses.
8. Enable Desirability Functions.
9. Output 20,000 random samples.
10. Generate 3D scatterplot for three variables.



### Example 3
> **Summary**: Sets up spec limits for four formulas (ABRASION, MODULUS, ELONG, and HARDNESS) in a data table, followed by generating a 3D scatterplot from a profiler output.

<!-- Keywords: #JSL, #SpecLimits, #Profiler, #ScatterPlot, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 120 ), Show Limits( 1 )} );
dt:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 1200 ), Show Limits( 1 )} );
dt:Pred Formula ELONG << Set Property( "Spec Limits", {LSL( 350 ), USL( 500 ), Show Limits( 1 )} );
dt:Pred Formula HARDNESS << Set Property( "Spec Limits", {LSL( 65 ), USL( 75 ), Show Limits( 1 )} );
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Profiler( 1, Desirability Functions( 1 ) )
);
dtNew = obj << Output Random Table( 20000 );
dtNew << Scatterplot 3D( Y( :SILICA, :SILANE, :SULFUR ) );
dtNew << Clear Select;
```

**Code Explanation**:

1. Open data table;
2. Set spec limits for ABRASION.
3. Set spec limits for MODULUS.
4. Set spec limits for ELONG.
5. Set spec limits for HARDNESS.
6. Create profiler for four formulas.
7. Enable desirability functions in profiler.
8. Output random table from profiler.
9. Generate 3D scatterplot for new data.
10. Clear selection in new data table.



### Example 4
> **Summary**: Configures prediction formulas and spec limits for ABRASION, MODULUS, ELONG, and HARDNESS variables in a data table, and applies a custom profiler preset to visualize the predictions.

<!-- Keywords: #JSLScripting, #DataTableConfiguration, #PredictionFormulas, #SpecLimits, #ProfilerPreset -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 120 ), Show Limits( 0 )} );
dt:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 1200 ), Show Limits( 0 )} );
dt:Pred Formula ELONG << Set Property( "Spec Limits", {LSL( 350 ), USL( 500 ), Show Limits( 0 )} );
dt:Pred Formula HARDNESS << Set Property( "Spec Limits", {LSL( 65 ), USL( 75 ), Show Limits( 0 )} );
dt:Pred Formula ABRASION << Set Property( "Predicting", {:ABRASION, Creator( "Fit Least Squares" ), RMSE( 3 )} );
dt:Pred Formula MODULUS << Set Property( "Predicting", {:MODULUS, Creator( "Fit Least Squares" ), RMSE( 100 )} );
dt:Pred Formula ELONG << Set Property( "Predicting", {:ELONG, Creator( "Fit Least Squares" ), RMSE( 10 )} );
dt:Pred Formula HARDNESS << Set Property( "Predicting", {:HARDNESS, Creator( "Fit Least Squares" ), RMSE( .6 )} );
obj_cust = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Profiler(
		1,
		Desirability Functions( 0 ),
		Term Value( :SILICA( 1.2, Lock( 0 ), Show( 1 ) ), :SILANE( 50, Lock( 0 ), Show( 1 ) ), :SULFUR( 2.3, Lock( 0 ), Show( 1 ) ) ),
		Design Space Profiler( Set Limits( :SILICA( 0.82208, 1.72909 ), :SILANE( 43.468, 59.5963 ), :SULFUR( 1.72845, 2.3 ) ) )
	),
	SendToReport(
		Dispatch( {"Prediction Profiler", "Design Space Profiler"}, "DesignSpaceProfiler frame", FrameBox( 2 ), {Frame Size( 136, 120 )} )
	)
);
obj = dt << Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
preset = obj_cust << New Preset;
obj << Apply Preset( Preset );
```

**Code Explanation**:

1. Open table.
2. Set ABRASION spec limits.
3. Set MODULUS spec limits.
4. Set ELONG spec limits.
5. Set HARDNESS spec limits.
6. Configure ABRASION prediction.
7. Configure MODULUS prediction.
8. Configure ELONG prediction.
9. Configure HARDNESS prediction.
10. Create custom profiler preset.
11. Apply custom profiler preset.



### Example 5
> **Summary**: Runs the design space profiler to analyze the ABRASION prediction formula and generates a report with interactive buttons, then selects hidden rows in the data table and sets the Connect Hide Mode.

<!-- Keywords: #JSLScripting, #DesignSpaceProfiler, #ABRASIONPredictionFormula, #InteractiveReport, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 120 ), Show Limits( 1 )} );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION ),
	Profiler( 1, Desirability Functions( 0 ), Design Space Profiler( 1, Connect to Table( "data_table.jmp" ), Connect Hide Mode ) )
);
rpt = obj << Report();
rpt[Outline Box( "Design Space Profiler" )][Button Box( 1 )] << Click;
rpt[Outline Box( "Design Space Profiler" )][Button Box( 1 )] << Click;
rpt[Outline Box( "Design Space Profiler" )][Button Box( 1 )] << Click;
r = (dt << select hidden) << get selected rows;
scpt = rpt[Outline Box( "Design Space Profiler" )] << get scriptable object;
scpt << Connect Hide Mode( 0 );
r1 = (dt << select hidden) << get selected rows;
```

**Code Explanation**:

1. Open data table;
2. Set property for "Pred Formula ABRASION".
3. Create profiler object.
4. Generate report from profiler.
5. Click button box in report.
6. Click button box again.
7. Click button box once more.
8. Select hidden rows in data table.
9. Get scriptable object from report.
10. Set Connect Hide Mode to 0.
11. Select hidden rows in data table again.



### Example 6
> **Summary**: Analyzes and creates reports for ABRASION data by setting property limits, creating a profiler, and generating a report.

<!-- Keywords: #JSLScriptingLanguage, #DataTable, #Profiler, #ReportGeneration, #ABRASIONAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 120 ), Show Limits( 1 )} );
obj = dt << Profiler( Y( :Pred Formula ABRASION ), Profiler( 1, Desirability Functions( 0 ), Design Space Profiler( 1 ) ) );
rpt = obj << Report();
```

**Code Explanation**:

1. Open data table;
2. Set LSL for ABRASION.
3. Enable limit display.
4. Create Profiler for ABRASION.
5. Disable desirability functions.
6. Enable design space profiler.
7. Generate report.



### Example 7
> **Summary**: Runs the specification limits for four quality control metrics (ABRASION, MODULUS, ELONG, and HARDNESS) using Profiler and Simulator in JMP.

<!-- Keywords: #JMPProfiler, #Simulator, #QualityControl, #SpecificationLimits, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 0 ), USL( 2000 )} );
:Pred Formula ELONG << Set Property( "Spec Limits", {LSL( 350 ), USL( 550 )} );
:Pred Formula HARDNESS << Set Property( "Spec Limits", {LSL( 66 ), USL( 74 )} );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Profiler(
		1,
		Simulator(
			1,
			Factors(
				SILICA << Random( Normal weighted( 1.25, 0.1 ) ), SILANE << Random( Normal weighted( 50, 2 ) ),
				SULFUR << Random( Normal weighted( 2.25, 0.15 ) )
			),
			Set Random Seed( 1 ),
			Defect Profiler( 1 ),
			Defect Parametric Profile( 1 )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Set LSL for ABRASION.
3. Set LSL and USL for MODULUS.
4. Set LSL and USL for ELONG.
5. Set LSL and USL for HARDNESS.
6. Create Profiler object.
7. Add ABRASION, MODULUS, ELONG, HARDNESS to Profiler.
8. Configure Profiler settings.
9. Enable Simulator within Profiler.
10. Define random factors: SILICA, SILANE, SULFUR.



### Example 8
> **Summary**: Simulates multiple predictor formulas with random factors and sets spec limits for each formula, utilizing Profiler and Simulator in JMP.

<!-- Keywords: #JMPScriptingLanguage, #Profiler, #Simulator, #PredictorFormulas, #RandomFactors -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );
:Pred Formula ELONG << Set Property( "Spec Limits", {USL( 600 )} );
:Pred Formula HARDNESS << Set Property( "Spec Limits", {LSL( 65 ), USL( 75 )} );
obj1 = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Profiler(
		1,
		Simulator(
			1,
			Factors(
				SILICA << Random( Normal weighted( 1.25, 0.1 ) ), SILANE << Random( Normal weighted( 50, 2 ) ),
				SULFUR << Random( Normal weighted( 2.25, 0.15 ) )
			),
			Set Random Seed( 1 ),
			Simulate
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Set LSL for ABRASION.
3. Set LSL and USL for MODULUS.
4. Set USL for ELONG.
5. Set LSL and USL for HARDNESS.
6. Create profiler for predictions.
7. Add ABRASION, MODULUS, ELONG, HARDNESS to profiler.
8. Enable simulator in profiler.
9. Define SILICA, SILANE, SULFUR factors with random distributions.
10. Set random seed to 1 and run simulation.



## Profiler using For Each
> **Summary**: Creates and configures profiler objects for specified columns in a data table, applying presets to generate reports with customizable titles.

<!-- Keywords: #JMPScriptingLanguage, #ProfilerObject, #DataTableManipulation, #PresetApplication, #ReportConfiguration -->

**Code**:
```jsl
plat_samples = ["Profiler" => {"Simulator", "Optimization", "Exploration", "Variable Importance", "Design Space Profiler"}, => {}];
dt = Open("data_table.jmp");
For Each( {sample}, plat_samples["Profiler"],
	obj = dt << Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ) );
	With Window Handler(
		Eval( Eval Expr( obj << Apply Preset( "Sample Presets", Expr( sample ) ) ) ),
		Function( {win},
			win << Close Window
		)
	);
	obj << Set Report Title( sample );
);
```

**Code Explanation**:

1. Define presets for profiler.
2. Open data table.
3. Loop through each preset.
4. Create profiler object for specified columns.
5. Apply current preset to profiler.
6. Handle window events.
7. Close profiler window.
8. Set report title to current preset name.
9. Repeat for all presets.



## Profiler using New Column
### Example 1
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot to visualize the relationship between height and weight.

<!-- Keywords: #JSLScripting, #LeastSquaresModel, #ProfilerPlot, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myCol = dt << New Column( "myFormula", formula( :height / :weight ) );
myProfiler = dt << Profiler(
	Y( :myFormula ),
	Profiler( 1, Interaction Profiler( 1 ), Term Value( height( 61.25, Lock( 0 ), Show( 1 ) ), weight( 120, Lock( 0 ), Show( 1 ) ) ) )
);
```

**Code Explanation**:

1. Open table.
2. Create new column.
3. Define formula.
4. Launch profiler.
5. Set response variable.
6. Configure profiler settings.
7. Enable interaction profiler.
8. Set term values.
9. Unlock term height.
10. Show term height.



### Example 2
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot to visualize the results.

<!-- Keywords: #JSLScriptingLanguage, #LeastSquaresModel, #ProfilerPlot, #DataTable, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Pred Formula",
	formula(
		If( :height < 65,
			If( :height < 60,
				79,
				Choose( Match( :age, 12, 1, 13, 1, 14, 2, 15, 2, 16, 2, 17, 2, 3 ), 109.833333333333, 97.1538461538462, 101.157894736842 )
			),
			123.214285714286
		)
	)
);
dt << Profiler( Y( :Pred Formula ) );
```

**Code Explanation**:

1. Open data table.
2. Create new column "Pred Formula".
3. Define formula for "Pred Formula".
4. Use nested If statements for conditions.
5. Use Choose function for specific age matching.
6. Assign constant values based on conditions.
7. End formula definition.
8. Launch Profiler.
9. Set Y variable to "Pred Formula".
10. Display Profiler window.



### Example 3
> **Summary**: Creates a new column in a JMP data table with a custom formula, and generates a profiler plot to visualize the results.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ProfilerPlot, #CustomFormula, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Pred Formula",
	formula(
		If( Is Missing( :height ) | :height < 65,
			If( Is Missing( :height ) | :height < 60,
				79,
				101.157894736842
			),
			123.214285714286
		)
	)
);
dt << Profiler( Y( :Pred Formula ) );
```

**Code Explanation**:

1. Open data table;
2. Create new column "Pred Formula".
3. Define formula for "Pred Formula".
4. Check if height is missing or less than 65.
5. If true, check if height is missing or less than 60.
6. If true, set "Pred Formula" to 79.
7. If false, set "Pred Formula" to 101.157894736842.
8. If height is not less than 65, set "Pred Formula" to 123.214285714286.
9. Launch Profiler.
10. Set "Pred Formula" as Y variable.



### Example 4
> **Summary**: Creates a profiler plot for a standard least squares model with multiple effects, utilizing the Profiler platform in JMP.

<!-- Keywords: #JMPProfiler, #LeastSquaresModel, #MultipleEffects, #DataAnalysis, #Scripting -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
dt2 << New Column( "temp, sex", nominal, values( J( 15, 1, 0 ) |/ J( 25, 1, 1 ) ) );
dt2 << New Column( "Formula1",
	formula( (-100) + Match( :Name( "temp, sex" ), 0, 10, 1, 20, . ) + Match( :sex, "F", 2, "M", -2, . ) + 5 * :height )
);
obj = dt2 << Profiler( Y( :Formula1 ), Surface Profiler( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create new column "temp, sex".
3. Set column type to nominal.
4. Assign values to "temp, sex".
5. Create new column "Formula1".
6. Define formula for "Formula1".
7. Launch Profiler for "Formula1".
8. Enable Surface Profiler.



## Profiler using Expr
> **Summary**: Executes multiple scripts and profilers in JMP, including RSM for 4 Responses, Neural, and custom profiling with log scale adjustments.

<!-- Keywords: #JMPScriptingLanguage, #RSM, #NeuralNetworks, #Profiler, #LogScale -->

**Code**:
```jsl
Open("data_table.jmp");
sProfiler1_expr = Expr(
	dt << run script( "RSM for 4 Responses" )
);
sProfiler2_expr = Expr(
	dt << run script( "Neural" )
);
sProfiler3_expr = Expr(
	dt << Profiler(
		Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
		Profiler(
			1,
			Term Value( SILICA( 1.25, Lock( 0 ), Show( 1 ) ), SILANE( 50, Lock( 0 ), Show( 1 ) ), SULFUR( 2.25, Lock( 0 ), Show( 1 ) ) )
		)
	)
);
sProfiler4_expr = Expr(
	dt << Profiler(
		Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
		Profiler(
			1,
			Term Value( SILICA( 1.25, Lock( 0 ), Show( 1 ) ), SILANE( 50, Lock( 0 ), Show( 1 ) ), SULFUR( 2.25, Lock( 0 ), Show( 1 ) ) )
		),
		SendToReport(
			Dispatch( {"Prediction Profiler"}, "10003", ScaleBox, {Scale( "Log" ), Min( 60 ), Max( 80 ), Inc( 1 ), Minor Ticks( 1 )} ),
			Dispatch( {"Prediction Profiler"}, "10002", ScaleBox, {Scale( "Log" ), Min( 200 ), Max( 700 ), Inc( 1 ), Minor Ticks( 1 )} ),
			Dispatch( {"Prediction Profiler"}, "10001", ScaleBox,
				{Scale( "Log" ), Min( 482.825749283043 ), Max( 2367.2124029803 ), Inc( 1 ), Minor Ticks( 1 )}
			),
			Dispatch( {"Prediction Profiler"}, "10000", ScaleBox,
				{Scale( "Log" ), Min( 92.7491640697742 ), Max( 203.924120755593 ), Inc( 1 ), Minor Ticks( 1 )}
			)
		)
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Define sProfiler1_expr.
3. Run RSM for 4 Responses script.
4. Define sProfiler2_expr.
5. Run Neural script.
6. Define sProfiler3_expr.
7. Create profiler for 4 responses.
8. Set term values for silica, silane, sulfur.
9. Define sProfiler4_expr.
10. Create profiler with log scale adjustments.



## Profiler using Run Script
### Example 1
> **Summary**: Extracts and compares prediction profiler values from a SEM Path Analysis report, utilizing JMP's Run Script and Report features.

<!-- Keywords: #JMPScriptingLanguage, #SEMPathAnalysis, #PredictionProfiler, #DataVisualization, #ReportAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: Path Analysis No Latent" );
obj << Prediction Profiler( 1, Term Value( Leadership_Avg( 1, Lock( 0 ), Show( 1 ) ) ), Y Terms( Conflict_Avg, Satisfaction_Avg ) );
 
rpt = Current Report();
x_jmp_mx = rpt[Outline Box( "Prediction Profiler" )][Number Edit Box( 1 )] << get;
 
y1_jmp_mx = Num( rpt[Outline Box( "Prediction Profiler" )][Text Box( 2 )] << get text );
y1_lower_jmp_mx = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 3 )] << get text, "[," )[1] );
y1_upper_jmp_mx = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 4 )] << get text, "]" )[1] );
 
y2_jmp_mx = Num( rpt[Outline Box( "Prediction Profiler" )][Text Box( 6 )] << get text );
y2_lower_jmp_mx = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 7 )] << get text, "[," )[1] );
y2_upper_jmp_mx = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 8 )] << get text, "]" )[1] );
 
x_bm_mx = 1;
y1_bm_mx = 5.036488;
y1_lower_bm_mx = 4.433301;
y1_upper_bm_mx = 5.639675;
y2_bm_mx = 2.406151;
y2_lower_bm_mx = 1.884959;
y2_upper_mx = 2.927344;
comp = Round( x_jmp_mx, 3 ) - Round( x_bm_mx, 3 );
comp = Round( y1_jmp_mx, 3 ) - Round( y1_bm_mx, 3 );
comp = Round( y1_lower_jmp_mx, 3 ) - Round( y1_lower_bm_mx, 3 );
comp = Round( y1_upper_jmp_mx, 3 ) - Round( y1_upper_bm_mx, 3 );
comp = Round( y2_jmp_mx, 3 ) - Round( y2_bm_mx, 3 );
comp = Round( y2_lower_jmp_mx, 3 ) - Round( y2_lower_bm_mx, 3 );
comp = Round( y2_upper_jmp_mx, 3 ) - Round( y2_upper_mx, 3 );
```

**Code Explanation**:

1. Open data table;
2. Run SEM Path Analysis script.
3. Create Prediction Profiler for variables.
4. Retrieve current report object.
5. Extract X value from Prediction Profiler.
6. Extract Y1 value from Prediction Profiler.
7. Extract Y1 lower bound from Prediction Profiler.
8. Extract Y1 upper bound from Prediction Profiler.
9. Extract Y2 value from Prediction Profiler.
10. Extract Y2 lower bound from Prediction Profiler.
11. Extract Y2 upper bound from Prediction Profiler.
12. Compare extracted values with benchmark values.
13. Round comparison results to 3 decimal places.



### Example 2
> **Summary**: Extracts and compares prediction profiler values from a SEM path analysis in JMP, utilizing the Run Script and Prediction Profiler features.

<!-- Keywords: #JMP, #SEM, #PathAnalysis, #PredictionProfiler, #DataExtraction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: Path Analysis w/ Latent" );
obj << Prediction Profiler( 1, Term Value( Leadership( 0, Lock( 0 ), Show( 1 ) ) ), Y Terms( Conflict, Satisfaction ) );
rpt = Current Report();
x_jmp_mx = rpt[Outline Box( "Prediction Profiler" )][Number Edit Box( 1 )] << get;
 
y1_jmp_mx = Num( rpt[Outline Box( "Prediction Profiler" )][Text Box( 2 )] << get text );
y1_lower_jmp_mx = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 3 )] << get text, "[," )[1] );
y1_upper_jmp_mx = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 4 )] << get text, "]" )[1] );
 
y2_jmp_mx = Num( rpt[Outline Box( "Prediction Profiler" )][Text Box( 6 )] << get text );
y2_lower_jmp_mx = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 7 )] << get text, "[," )[1] );
y2_upper_jmp_mx = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 8 )] << get text, "]" )[1] );
 
x_bm_mx = 0;
y1_bm_mx = 0;
y1_lower_bm_mx = 0;
y1_upper_bm_mx = 0;
y2_bm_mx = 0;
y2_lower_bm_mx = 0;
y2_upper_mx = 0;
comp = Round( x_jmp_mx, 3 ) - Round( x_bm_mx, 3 );
comp = Round( y1_jmp_mx, 3 ) - Round( y1_bm_mx, 3 );
comp = Round( y1_lower_jmp_mx, 3 ) - Round( y1_lower_bm_mx, 3 );
comp = Round( y1_upper_jmp_mx, 3 ) - Round( y1_upper_bm_mx, 3 );
comp = Round( y2_jmp_mx, 3 ) - Round( y2_bm_mx, 3 );
comp = Round( y2_lower_jmp_mx, 3 ) - Round( y2_lower_bm_mx, 3 );
comp = Round( y2_upper_jmp_mx, 3 ) - Round( y2_upper_mx, 3 );
```

**Code Explanation**:

1. Open data_table data
2. Run SEM path analysis script.
3. Create prediction profiler.
4. Set leadership value to 0.
5. Include conflict and satisfaction in Y terms.
6. Retrieve current report.
7. Extract X value from prediction profiler.
8. Extract Y1 value from prediction profiler.
9. Extract Y1 lower bound from prediction profiler.
10. Extract Y1 upper bound from prediction profiler.



### Example 3
> **Summary**: Extracts and compares prediction profiler values from a SEM analysis, utilizing JMP's Run Script feature to execute the 'SEM: Path Analysis w/ Latent' script.

<!-- Keywords: #JMP, #SEM, #PathAnalysis, #PredictionProfiler, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: Path Analysis w/ Latent" );
obj << Prediction Profiler( 1, Term Value( Leadership( 1, Lock( 0 ), Show( 1 ) ) ), Y Terms( Conflict, Satisfaction ) );
 
rpt = Current Report();
x_jmp_mx = rpt[Outline Box( "Prediction Profiler" )][Number Edit Box( 1 )] << get;
 
y1_jmp_mx = Num( rpt[Outline Box( "Prediction Profiler" )][Text Box( 2 )] << get text );
y1_lower_jmp_mx = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 3 )] << get text, "[," )[1] );
y1_upper_jmp_mx = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 4 )] << get text, "]" )[1] );
 
y2_jmp_mx = Num( rpt[Outline Box( "Prediction Profiler" )][Text Box( 6 )] << get text );
y2_lower_jmp_mx = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 7 )] << get text, "[," )[1] );
y2_upper_jmp_mx = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 8 )] << get text, "]" )[1] );
 
x_bm_mx = 1;
y1_bm_mx = -0.8844;
y1_lower_bm_mx = -1.18402;
y1_upper_bm_mx = -0.58484;
y2_bm_mx = 0.84947;
y2_lower_bm_mx = 0.600728;
y2_upper_mx = 1.098213;
comp = Round( x_jmp_mx, 3 ) - Round( x_bm_mx, 3 );
comp = Round( y1_jmp_mx, 3 ) - Round( y1_bm_mx, 3 );
comp = Round( y1_lower_jmp_mx, 3 ) - Round( y1_lower_bm_mx, 3 );
comp = Round( y1_upper_jmp_mx, 3 ) - Round( y1_upper_bm_mx, 3 );
comp = Round( y2_jmp_mx, 3 ) - Round( y2_bm_mx, 3 );
comp = Round( y2_lower_jmp_mx, 3 ) - Round( y2_lower_bm_mx, 3 );
comp = Round( y2_upper_jmp_mx, 3 ) - Round( y2_upper_mx, 3 );
```

**Code Explanation**:

1. Open table.
2. Run script for SEM.
3. Create prediction profiler.
4. Extract report.
5. Get X value from JMP.
6. Get Y1 value from JMP.
7. Get Y1 lower bound from JMP.
8. Get Y1 upper bound from JMP.
9. Get Y2 value from JMP.
10. Compare extracted values with benchmark.



### Example 4
> **Summary**: Executes a SEM path analysis with latent variables, generating prediction profiler results and extracting relevant values for further analysis.

<!-- Keywords: #JMPScriptingLanguage, #SEMPathAnalysis, #LatentVariables, #PredictionProfiler, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: Path Analysis w/ Latent" );
obj << Prediction Profiler(
	1,
	Term Value( Satisfaction( 0, Lock( 0 ), Show( 1 ) ) ),
	Y Terms( General_S, Growth_S, Coworker_S, Supervisor_S )
);
rpt = Current Report();
x_jmp_mx = rpt[Outline Box( "Prediction Profiler" )][Number Edit Box( 1 )] << get;
 
y1_jmp_mx = Num( rpt[Outline Box( "Prediction Profiler" )][Text Box( 2 )] << get text );
y1_lower_jmp_mx = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 3 )] << get text, "[," )[1] );
y1_upper_jmp_mx = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 4 )] << get text, "]" )[1] );
 
y2_jmp_mx = Num( rpt[Outline Box( "Prediction Profiler" )][Text Box( 6 )] << get text );
y2_lower_jmp_mx = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 7 )] << get text, "[," )[1] );
y2_upper_jmp_mx = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 8 )] << get text, "]" )[1] );
y3_jmp_mx = Num( rpt[Outline Box( "Prediction Profiler" )][Text Box( 10 )] << get text );
y3_lower_jmp_mx = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 11 )] << get text, "[," )[1] );
y3_upper_jmp_mx = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 12 )] << get text, "]" )[1] );
 
y4_jmp_mx = Num( rpt[Outline Box( "Prediction Profiler" )][Text Box( 14 )] << get text );
y4_lower_jmp_mx = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 15 )] << get text, "[," )[1] );
y4_upper_jmp_mx = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 16 )] << get text, "]" )[1] );
 
 
x_bm_mx = 0;
y1_bm_mx = 7.645;
y1_lower_bm_mx = 7.471403;
y1_upper_bm_mx = 7.818597;
y2_bm_mx = 6.105;
y2_lower_bm_mx = 5.925154;
y2_upper_mx = 6.284846;
y3_bm_mx = 6.28;
y3_lower_bm_mx = 6.097629;
y3_upper_mx = 6.462371;
y4_bm_mx = 2.9;
y4_lower_bm_mx = 2.723603;
y4_upper_mx = 3.076397;
```

**Code Explanation**:

1. Open data table.
2. Run SEM script.
3. Launch Prediction Profiler.
4. Set term value for Satisfaction.
5. Define Y terms.
6. Retrieve current report.
7. Extract X value from profiler.
8. Extract Y1 value from profiler.
9. Extract Y1 lower bound from profiler.
10. Extract Y1 upper bound from profiler.



### Example 5
> **Summary**: Executes a SEM path analysis with latent variables, generating a prediction profiler for leadership term values and Y terms conflict and satisfaction.

<!-- Keywords: #JMPScriptingLanguage, #SEMPathAnalysis, #LatentVariables, #PredictionProfiler, #PathDiagram -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: Path Analysis w/ Latent" );
obj << Prediction Profiler( 1, Term Value( Leadership( 0, Lock( 0 ), Show( 1 ) ) ), Y Terms( Conflict, Satisfaction ) );
```

**Code Explanation**:

1. Open data table.
2. Run SEM path analysis script.
3. Launch prediction profiler.
4. Set leadership term value.
5. Lock leadership term.
6. Show leadership term.
7. Select Y terms conflict, satisfaction.



### Example 6
> **Summary**: Fits a parametric survival model and generates a distribution profiler with independent uniform inputs, resampled inputs, and dependent resampled inputs.

<!-- Keywords: #JSL, #ParametricSurvivalModel, #DistributionProfiler, #IndependentUniformInputs, #ResampledInputs -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "Fit Parametric Survival" );
obj << Distribution Profiler( 1, Independent Uniform Inputs( 1 ), Independent Resampled Inputs( 1 ), Dependent Resampled Inputs( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Run "Fit Parametric Survival" script.
3. Launch Distribution Profiler.
4. Set first parameter as independent.
5. Use uniform distribution for inputs.
6. Set second parameter as independent.
7. Resample second input.
8. Set third parameter as dependent.
9. Resample third input.



## Profiler using Format
### Example 1
> **Summary**: Runs the formatting and profiling of a data table, generating a report with specific text boxes and extracting valid characters from extracted text.

<!-- Keywords: #JSLScripting, #DataProfiling, #TextAnalysis, #ReportGeneration, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Pred Formula ABRASION << Format( "Fixed Dec", 15, 3 );
:Pred Formula MODULUS << Format( "Currency", 15, 5, "Use Thousands separator" );
:Pred Formula ELONG << Format( "Percent", 15, 3 );
:Pred Formula HARDNESS << Format( "Scientific", 5 );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Profiler( 1, Term Value( SILICA( 1.25 ), SILANE( 50 ), SULFUR( 2.25 ) ) )
);
rpt = obj << report;
temp = (rpt[Outline Box( "Prediction Profiler" )][Text Box( 2 )] << get text);
validChar1 = Left( Right( temp, 4 ), 1 );
temp = (rpt[Outline Box( "Prediction Profiler" )][Text Box( 4 )] << get text);
validChar2 = Left( temp, 1 );
validChar3 = Left( Right( temp, 6 ), 1 );
temp = (rpt[Outline Box( "Prediction Profiler" )][Text Box( 6 )] << get text);
validChar4 = Right( temp, 1 );
validChar5 = Left( Right( temp, 5 ), 1 );
temp = (rpt[Outline Box( "Prediction Profiler" )][Text Box( 8 )] << get text);
validChar6 = Left( Right( temp, 5 ), 1 );
validChar7 = Substr( Right( temp, 3 ), 1, 2 );
```

**Code Explanation**:

1. Open data table;
2. Format "Pred Formula ABRASION" as fixed decimal.
3. Format "Pred Formula MODULUS" as currency.
4. Format "Pred Formula ELONG" as percent.
5. Format "Pred Formula HARDNESS" as scientific.
6. Create profiler for selected columns.
7. Set initial term values for profiler.
8. Generate profiler report.
9. Extract text from specific text boxes.
10. Extract valid characters from extracted text.



### Example 2
> **Summary**: Runs the prediction profiler report generation by formatting specific columns and extracting relevant text, utilizing JMP's Profiler and Report features.

<!-- Keywords: #JMPScriptingLanguage, #ProfilerReport, #DataTableManipulation, #TextExtraction, #Formatting -->

**Code**:
```jsl
ut relative epsilon = 1e-9;
dt = Open("data_table.jmp");
:Pred Formula ABRASION << Format( "Fixed Dec", 15, 3 );
:Pred Formula MODULUS << Format( "Currency", 15, 5, "Use Thousands separator" );
:Pred Formula ELONG << Format( "Percent", 15, 3 );
:Pred Formula HARDNESS << Format( "Scientific", 5 );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Profiler( 1, Term Value( SILICA( 1.25 ), SILANE( 50 ), SULFUR( 2.25 ) ) )
);
rpt = obj << report;
temp = (rpt[Outline Box( "Prediction Profiler" )][Text Box( 2 )] << get text);
validChar1 = Left( Right( temp, 4 ), 1 );
temp = (rpt[Outline Box( "Prediction Profiler" )][Text Box( 4 )] << get text);
validChar2 = Left( temp, 1 );
validChar3 = Left( Right( temp, 6 ), 1 );
temp = (rpt[Outline Box( "Prediction Profiler" )][Text Box( 6 )] << get text);
validChar4 = Right( temp, 1 );
validChar5 = Left( Right( temp, 5 ), 1 );
temp = (rpt[Outline Box( "Prediction Profiler" )][Text Box( 8 )] << get text);
validChar6 = Left( Right( temp, 5 ), 1 );
validChar7 = Substr( Right( temp, 3 ), 1, 2 );
```

**Code Explanation**:

1. Set relative epsilon.
2. Open data table.
3. Format Pred Formula ABRASION.
4. Format Pred Formula MODULUS.
5. Format Pred Formula ELONG.
6. Format Pred Formula HARDNESS.
7. Create profiler object.
8. Generate profiler report.
9. Extract text from Prediction Profiler.
10. Extract specific characters from text.



## Profiler using Delete Property
> **Summary**: Configures response limits and predicting properties for four formulas in a JMP data table, enabling interactive analysis and visualization.

<!-- Keywords: #JMPScriptingLanguage, #DataTableConfiguration, #PredictiveModeling, #ResponseLimits, #DesirabilityFunctions -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Pred Formula ABRASION << Delete Property( "Response Limits" );
dt:Pred Formula MODULUS << Delete Property( "Response Limits" );
dt:Pred Formula ELONG << Delete Property( "Response Limits" );
dt:Pred Formula HARDNESS << Delete Property( "Response Limits" );
dt:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 120 ), Show Limits( 1 )} );
dt:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 1200 ), Show Limits( 1 )} );
dt:Pred Formula ELONG << Set Property( "Spec Limits", {LSL( 350 ), USL( 500 ), Show Limits( 1 )} );
dt:Pred Formula HARDNESS << Set Property( "Spec Limits", {LSL( 65 ), USL( 75 ), Show Limits( 1 )} );
dt:Pred Formula ABRASION << Set Property( "Predicting", {:ABRASION, Creator( "Fit Least Squares" ), Std Dev( 3 )} );
dt:Pred Formula MODULUS << Set Property( "Predicting", {:MODULUS, Creator( "Fit Least Squares" ), Std Dev( 100 )} );
dt:Pred Formula ELONG << Set Property( "Predicting", {:ELONG, Creator( "Fit Least Squares" ), Std Dev( 10 )} );
dt:Pred Formula HARDNESS << Set Property( "Predicting", {:HARDNESS, Creator( "Fit Least Squares" ), Std Dev( .6 )} );
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Profiler( 1, Desirability Functions( 1 ) )
);
obj2 = obj << Design Space Profiler;
obj2 << Reset Factor Space( SILICA( 1, 2.0165 ), SILANE( 33.67, 66.33 ), SULFUR( 1.4835, 3.1165 ) );
```

**Code Explanation**:

1. Open data table;
2. Delete Response Limits for ABRASION.
3. Delete Response Limits for MODULUS.
4. Delete Response Limits for ELONG.
5. Delete Response Limits for HARDNESS.
6. Set Spec Limits for ABRASION.
7. Set Spec Limits for MODULUS.
8. Set Spec Limits for ELONG.
9. Set Spec Limits for HARDNESS.
10. Configure Predicting properties for each response.



## Profiler using Associative Array
### Example 1
> **Summary**: Executes Response Screening analysis, Profiler, and data table operations to extract PValues tables from a JMP data table.

<!-- Keywords: #JSLScripting, #ResponseScreening, #Profiler, #DataTableOperations, #PValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = Response Screening( Y( :height, ), X( :weight ), PValues Table on Launch( 1 ) );
obj << Save Std Residuals( 1 );
obj = Profiler(
	Y( :Std Resid height by weight ),
	Profiler( 1, Term Value( height( 61.25, Lock( 0 ), Show( 1 ) ), weight( 120, Lock( 0 ), Show( 1 ) ) ) )
);
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Store initial window titles.
3. Run Response Screening analysis.
4. Save standard residuals.
5. Create Profiler for standard residuals.
6. Store updated window titles.
7. Remove initial window titles from updated list.
8. Get remaining window titles.
9. Loop through remaining window titles.
10. Find and open PValues table.



### Example 2
> **Summary**: Executes Response Screening and Profiler analysis, saving outlier indicators and configuring profiler settings.

<!-- Keywords: #JMPScriptingLanguage, #ResponseScreening, #ProfilerAnalysis, #DataVisualization, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = Response Screening( Y( :height, ), X( :weight ), PValues Table on Launch( 1 ) );
obj << Save Outlier Indicator( 1 );
obj = Profiler(
	Y( :Outlier Indicator height by weight ),
	Profiler( 1, Term Value( height( 61.25, Lock( 0 ), Show( 1 ) ), weight( 120, Lock( 0 ), Show( 1 ) ) ) )
);
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
Close( dt2, no save );
Close( dt, no save );
ut relative epsilon = 1e-10;
```

**Code Explanation**:

1. Open data table;
2. Create associative array of windows.
3. Run Response Screening analysis.
4. Save outlier indicator.
5. Create Profiler object.
6. Configure Profiler settings.
7. Create new associative array of windows.
8. Remove initial windows from new array.
9. Get keys from new associative array.
10. Loop through keys, find "PValues" window.
11. Close "PValues" window without saving.
12. Close original dataset without saving.
13. Set relative epsilon to 1e-10.



### Example 3
> **Summary**: Runs a data analysis workflow that performs Response Screening, saves outlier indicators, and generates a profiler for height by weight relationships.

<!-- Keywords: #JMPScriptingLanguage, #ResponseScreening, #Profiler, #DataAnalysis, #OutlierDetection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = Response Screening( Y( :height, ), X( :weight ), PValues Table on Launch( 1 ) );
obj << Save Outlier Indicator( 1 );
obj = Profiler(
	Y( :Outlier Indicator height by weight ),
	Profiler( 1, Term Value( height( 61.25, Lock( 0 ), Show( 1 ) ), weight( 120, Lock( 0 ), Show( 1 ) ) ) )
);
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Store initial window titles.
3. Perform Response Screening analysis.
4. Save outlier indicator.
5. Create Profiler for outlier indicator.
6. Store updated window titles.
7. Remove initial window titles from updated list.
8. Get remaining window titles.
9. Loop through remaining titles.
10. Find and store PValues table.



