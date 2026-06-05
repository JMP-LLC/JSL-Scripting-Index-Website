# Missing Data Pattern

> **Summary**: Generate and visualize the missing data pattern for a specified set of columns.

<!-- Keywords: #DataTable, #columns, #MissingDataPattern -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Missing Data Pattern.jmp");
// Missing Data Pattern
Current Data Table() <<
Missing Data Pattern(
	Columns(
		:Trial 1, :Trial 2, :Trial 3,
		:Trial 4
	)
);
```

