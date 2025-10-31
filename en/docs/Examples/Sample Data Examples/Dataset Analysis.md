# Dataset Analysis

More examples for this topic using the sample data files provided with JMP

### Perform a Cartesian join between the Oil Amount and Batch data tables.

```jsl

// Open data table
dt = Open("$Sample_Data/Oil Amount.jmp");
// Join
Data Table( "Oil Amount" ) <<
Join(
	With(
		Open( "$SAMPLE_DATA/Batch.jmp" )
	),
	Cartesian Join
);

```

