# Control Charts

More examples for this topic using the sample data files provided with JMP

### Build a rare event T control chart in the Control Chart Builder platform using Weibull limits for subgrouped data analysis.

```jsl

// Open data table
dt = Open("$Sample_Data/Quality Control/Fan Burnout.jmp");
// Control Chart Builder T Chart
Control Chart Builder(
	Class( "Rare Event" ),
	Variables(
		Subgroup( :Burnout ),
		Y( :Hours between Burnouts )
	),
	Chart(
		Points( Statistic( "Count" ) ),
		Limits( Sigma( "Weibull" ) )
	)
);

```

