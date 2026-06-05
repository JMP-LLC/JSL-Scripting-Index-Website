# Split

## Example 1
> **Summary**: Split data table into separate tables based on the Drug Type and Measurement columns, grouping by the Subject column.

<!-- Keywords: #DataTable, #Group, #Split -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Drug Measurements.jmp");
// Split
Data Table( "Drug Measurements" ) <<
Split(
	Split By( :Drug Type ),
	Split( :Measurement ),
	Group( :Subject )
);
```

## Example 2
> **Summary**: Prepare an initial uplift report by generating an uplift analysis using the Hair Care Product data table.

<!-- Keywords: #Uplift, #History, #InformativeMissing, #MinimumSizeSplit, #Split -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hair Care Product.jmp");
// Initial Uplift Report
Uplift(
	Y( :Purchase ),
	X(
		:Gender, :Age, :Hair Color,
		:U.S. Region, :Residence
	),
	Validation( :Validation ),
	Minimum Size Split( 63 ),
	Treatment( :Promotion ),
	Split History( 1 ),
	Informative Missing( 1 )
);
```

## Example 3
> **Summary**: Analyze uplift effects using the Uplift function, with Purchase as the outcome and Gender, Age, Hair Color, U.S. Region, and Residence as predictors, incorporating a validation column, specifying a minimum split size of 63, considering Promotion as the treatment, utilizing split history, handling informative missing values, generating an uplift graph, and limiting the number of splits to 4.

<!-- Keywords: #Uplift, #Graph, #History, #InformativeMissing, #MinimumSizeSplit -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hair Care Product.jmp");
// Uplift
Uplift(
	Y( :Purchase ),
	X(
		:Gender, :Age, :Hair Color,
		:U.S. Region, :Residence
	),
	Validation( :Validation ),
	Minimum Size Split( 63 ),
	Treatment( :Promotion ),
	Split History( 1 ),
	Informative Missing( 1 ),
	Uplift Graph( 1 ),
	Split Best( 4 )
);
```

