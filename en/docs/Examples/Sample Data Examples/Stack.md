# Stack

> **Summary**: Stack data in a data table

<!-- Keywords: #Column, #columns, #Stack -->

**Code:**
```jsl
// Open data table
dt = Open( "$Sample_Data/Antibiotic MICs.jmp" );
// Stack MICs
dt << Stack(
	Columns( :penicillin, :streptomycin, :neomycin ),
	Source Label Column( :Stack Source Label ),
	Stacked Data Column( :Stack Data Column ),
	Output Table( :Stack Output Table )
);
```

