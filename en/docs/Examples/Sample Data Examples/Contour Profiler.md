# Contour Profiler

## Example 1
> **Summary**: Generate a contour profiler plot for yield with Reaction Temperature and Reaction Time as factors.

<!-- Keywords: #ContourProfiler, #Profiler, #ContourValue, #Factor, #HorizontalFactor -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/First-Order Kinetics.jmp");
// Contour Profiler
Contour Profiler(
	Y( :Yield ),
	Contour Profiler(
		1,
		Term Value(
			Reaction Temperature(
				530.05
			),
			Reaction Time(
				0.1995,
				Min( 0.101 )
			)
		),
		Contour Value(
			Yield(
				0.596698113207547,
				Lo Limit(
					0.596698113207547
				),
				Min( 0.425 ),
				Max( 0.625 )
			)
		),
		Horizontal Factor(
			Reaction Temperature
		),
		Vertical Factor( Reaction Time )
	),
	Expand
);
```

## Example 2
> **Summary**: Generate a Contour Profiler for the Yield response variable utilizing Reaction Temperature and Reaction Time factors from the Stochastic Optimization dataset.

<!-- Keywords: #ContourProfiler, #Profiler, #ContourValue, #Factor, #HorizontalFactor -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Stochastic Optimization.jmp");
// Contour Profiler
Contour Profiler(
	Y( :Yield ),
	Contour Profiler(
		1,
		Term Value(
			Reaction Temperature(
				530.05
			),
			Reaction Time(
				0.1995,
				Min( 0.101 )
			)
		),
		Contour Value(
			Yield(
				0.596698113207547,
				Lo Limit(
					0.596698113207547
				),
				Min( 0.425 ),
				Max( 0.625 )
			)
		),
		Horizontal Factor(
			Reaction Temperature
		),
		Vertical Factor( Reaction Time )
	),
	Expand
);
```

