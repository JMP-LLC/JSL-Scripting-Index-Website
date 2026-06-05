# Sort

> **Summary**: Sort the data table by the Shuffle column in ascending order, creating a new output table called Sort of Join of Chocolate Factory with Untitled 3 by Shuffle.

<!-- Keywords: #DataTable, #Order, #Sort -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Fancy Chocolate Factory.jmp");
// Source
Data Table(
	"Join of Chocolate Factory with Untitled 3"
) << Sort(
	By( :Shuffle ),
	Order( Ascending ),
	Output Table(
		"Sort of Join of Chocolate Factory with Untitled 3 by Shuffle"
	)
);
```

