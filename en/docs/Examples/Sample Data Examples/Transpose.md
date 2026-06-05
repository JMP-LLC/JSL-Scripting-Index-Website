# Transpose

## Example 1
> **Summary**: Example jsl to transpose at table

<!-- Keywords: #DataTable, #columns, #Label, #Transpose -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Animals Subset.jmp");
// Transpose by
Current Data Table() <<
Transpose(
	columns( :subject, :miles ),
	By( :species ),
	Label( :season )
);
```

## Example 2
> **Summary**: Transpose specific columns with a label in the current data table.

<!-- Keywords: #DataTable, #columns, #Label, #Transpose -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Materials2.jmp");
// Transpose with label
Current Data Table() <<
Transpose(
	Columns( :plastic, :tin, :gold ),
	Label( :item )
);
```

