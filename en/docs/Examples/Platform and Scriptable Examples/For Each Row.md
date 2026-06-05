# For Each Row

> **Summary**: Process of opening a data table, matching batch values, and setting the batch data type to numeric.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #BatchProcessing, #NumericDataTypes, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For Each Row( dt, dt:batch = Match( dt:batch, "small", "1", "large", "2" ) );
dt:batch << Set Data Type( "Numeric" );
```

**Code Explanation**:

1. Open table.
2. Loop through each row.
3. Match batch values.
4. Replace "small" with "1".
5. Replace "large" with "2".
6. Set batch data type.
7. Convert to numeric.



