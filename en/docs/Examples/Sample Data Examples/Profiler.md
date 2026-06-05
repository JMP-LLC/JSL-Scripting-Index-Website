# Profiler

## Example 1
> **Summary**: Simulate a Profiler for the Yield response using the First-Order Kinetics dataset, incorporating normal distributions for Reaction Temperature and Reaction Time factors, and setting desirability functions with specified limits and goals.

<!-- Keywords: #Profiler, #Simulator, #ConfidenceIntervals, #DesirabilityFunctions, #Factors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/First-Order Kinetics.jmp");
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

## Example 2
> **Summary**: Generate a Profiler report for three response variables (GP Fit, NL Fit, and Difference) with confidence intervals and specific term values using the Nonlinear Examples/CES Production Function.jmp data table.

<!-- Keywords: #Profiler, #ConfidenceIntervals, #FrameSize, #Report, #SendToReport -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Nonlinear Examples/CES Production Function.jmp");
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

## Example 3
> **Summary**: Set up and configure a Profiler  for simulating the Yield response with specified desirability functions and stochastic factors using Normal weighted random distributions for Reaction Temperature and Reaction Time.

<!-- Keywords: #Profiler, #Simulator, #ConfidenceIntervals, #DesirabilityFunctions, #Factors -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Stochastic Optimization.jmp");
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

