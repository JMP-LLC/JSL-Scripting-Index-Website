# Process Screening

> **Summary**: Perform process screening analysis with grouping variable

<!-- Keywords: #ProcessScreening, #Graph, #Grouping, #SampleSize, #ShiftGraph -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Consumer Prices.jmp");
// Process Screening of Price by Series
Process Screening(
	Y( :Price ),
	Grouping( :Series ),
	Time( :Date ),
	Subgroup Sample Size( 3 ),
	Recent Shift Up( 1 ),
	Recent Shift Down( 1 ),
	Shift Graph( 1 )
);
```

