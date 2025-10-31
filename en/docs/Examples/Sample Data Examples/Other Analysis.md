# Other Analysis

More examples for this topic using the sample data files provided with JMP

### Perform a screening analysis to identify significant factors affecting log life in the Weld-Repaired Castings dataset using the Screening platform.

```jsl

// Open data table
dt = Open("$Sample_Data/Weld-Repaired Castings.jmp");
// Screening
Screening(
	Y( :"Log Life (×100)"n ),
	X(
		:Initial Structure, :Bead Size,
		:Pressure Treatment,
		:Heat Treatment, :Cooling Rate,
		:Polish, :Final Treatment, :ε1,
		:ε2, :ε3, :ε4
	)
);

```

