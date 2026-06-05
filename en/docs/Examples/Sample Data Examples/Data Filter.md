# Data Filter

> **Summary**: Filter the dataset to include only rows where the space type is exterior using the Data Filter platform.

<!-- Keywords: #DataFilter, #DataTable, #AddFilter, #columns, #Display -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/S4 Temps.jmp");
// Data Filter - Exterior Offices
Current Data Table() <<
Data Filter(
	Location( {376, 286} ),
	Add Filter(
		columns( :type of space ),
		Where(
			:type of space == "exterior"
		),
		Display(
			:type of space,
			Size( 204, 123 ),
			List Display
		)
	),
	Mode( Select( 0 ), Include( 1 ) )
);
```

