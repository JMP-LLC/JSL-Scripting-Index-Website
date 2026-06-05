# Concatenate

## Example 1
> **Summary**: Concatenate 2 tables

<!-- Keywords: #DataTable, #Concatenate -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cancer2.jmp");
// Concatenate
Open( "$SAMPLE_DATA/Cancer1.jmp" ) <<
Concatenate( Data Table( "Cancer2" ) );
```

## Example 2
> **Summary**: Concatenate 2 tables

<!-- Keywords: #DataTable, #Concatenate -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cancer1.jmp");
// Concatenate
Data Table( "Cancer1" ) <<
Concatenate(
	Open( "$SAMPLE_DATA/Cancer2.jmp" )
);
```

