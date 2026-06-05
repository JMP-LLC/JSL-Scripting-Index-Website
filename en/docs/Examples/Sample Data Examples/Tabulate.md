# Tabulate

## Example 1
> **Summary**: Generate a tabulated report with grouping columns

<!-- Keywords: #Tabulate, #AddTable, #AnalysisColumns, #columns, #Format -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Auto Raw Data.jmp");
// Tabulate (Summary)
Tabulate(
	Set Format(
		Sum(
			Premium USD( 15, 95 ),
			Claim USD( 15, 95 )
		)
	),
	Add Table(
		Column Table(
			Analysis Columns(
				:Premium USD
			),
			Statistics( N, Sum )
		),
		Column Table(
			Analysis Columns(
				:Claim USD
			),
			Statistics( N, Sum )
		),
		Row Table(
			Grouping Columns(
				:Branch, :Zone
			)
		)
	)
);
```

## Example 2
> **Summary**: Genearate a tabulated report with grouping columns

<!-- Keywords: #Tabulate, #AddTable, #AnalysisColumns, #columns, #ControlPanel -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cola Heart Rate.jmp");
// Tabulate
Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Analysis Columns( :Baseline ),
			Statistics( Mean )
		),
		Row Table(
			Grouping Columns( :Testers )
		)
	)
);
```

## Example 3
> **Summary**: Create a tabulation with mean and standard deviation statistics for columns X and Y, grouped by Ship event and Lot.

<!-- Keywords: #Tabulate, #AddTable, #AnalysisColumns, #columns, #GroupingColumns -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// Tabulate
Tabulate(
	Add Table(
		Column Table(
			Analysis Columns( :X, :Y ),
			Statistics( Mean, Std Dev )
		),
		Row Table(
			Grouping Columns(
				:Ship event, :Lot
			)
		)
	)
);
```

## Example 4
> **Summary**: Generate a tabular summary with double row groupings on surface quality and color.

<!-- Keywords: #Tabulate, #AddTable, #columns, #ControlPanel, #GroupingColumns -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// Tabulate 2
Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Row Table(
			Grouping Columns(
				:surface quality
			)
		),
		Row Table(
			Grouping Columns( :color )
		)
	)
);
```

## Example 5
> **Summary**: Tabulate a frequency table with 'color' as the column grouping and 'surface quality' as the row grouping.

<!-- Keywords: #Tabulate, #AddTable, #columns, #ControlPanel, #GroupingColumns -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// Tabulate 3
Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :color )
		),
		Row Table(
			Grouping Columns(
				:surface quality
			)
		)
	)
);
```

