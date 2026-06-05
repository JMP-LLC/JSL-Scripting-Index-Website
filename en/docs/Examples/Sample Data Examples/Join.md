# Join

## Example 1
> **Summary**: Jsl code to join two tables using a cartesian join

<!-- Keywords: #DataTable, #Join, #With -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Batch.jmp");
// Join
Open( "$SAMPLE_DATA/Oil Amount.jmp" ) <<
Join(
	With( Data Table( "Batch" ) ),
	Cartesian Join
);
```

## Example 2
> **Summary**: Example jsl code to join 2 tables by matching columns

<!-- Keywords: #DataTable, #columns, #Join, #Order, #With -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Coffee Shop Purchases.jmp");
// Join
Data Table( "Coffee Shop Purchases" ) <<
Join(
	With(
		Data Table(
			"Coffee Shop Purchases"
		)
	),
	By Matching Columns(
		:Date = :Date,
		:Customer = :Customer,
		:Beverage = :Beverage
	),
	Drop multiples( 1, 1 ),
	"Include non-matches"n( 0, 0 ),
	Preserve main table order( 1 ),
	Output Table(
		"Coffee Shop Purchases Final"
	)
);
```

## Example 3
> **Summary**: Perform a Cartesian join between two data tables using the 'Join' function.

<!-- Keywords: #DataTable, #Join, #With -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Species2.jmp");
// Cartesian join
Open( "$SAMPLE_DATA/Species1.jmp" ) <<
Join(
	With( Data Table( "Species2" ) ),
	Cartesian Join
);
```

## Example 4
> **Summary**: Perform a Cartesian join between the Oil Amount and Batch data tables.

<!-- Keywords: #DataTable, #Join, #With -->

**Code:**
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

## Example 5
> **Summary**: Join two data tables based on their unequal numbers of rows using the Join function.

<!-- Keywords: #DataTable, #Join, #With -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Species2.jmp");
// Joining unequal rows
Open( "$SAMPLE_DATA/Species1.jmp" ) <<
Join(
	With( Data Table( "Species2" ) ),
	By Row Number
);
```

## Example 6
> **Summary**: Perform a Cartesian join between two data tables using the Join() function.

<!-- Keywords: #DataTable, #Join, #With -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Species1.jmp");
// Cartesian join
Data Table( "Species1" ) <<
Join(
	With(
		Open(
			"$SAMPLE_DATA/Species2.jmp"
		)
	),
	Cartesian Join
);
```

## Example 7
> **Summary**: Join two data tables containing unequal numbers of rows using the By Row Number method.

<!-- Keywords: #DataTable, #Join, #With -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Species1.jmp");
// Joining unequal rows
Data Table( "Species1" ) <<
Join(
	With(
		Open(
			"$SAMPLE_DATA/Species2.jmp"
		)
	),
	By Row Number
);
```

