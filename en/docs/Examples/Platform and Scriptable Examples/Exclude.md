# Exclude

## Exclude using Select Rows
> **Summary**: Selects and excludes specific rows in a data table, allowing for targeted analysis.

<!-- Keywords: #DataTableOperations, #RowSelection, #Exclusion, #JMPScriptingLanguage, #DataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( 1 :: 4 );
dt << Select Rows( 25 :: 28 );
dt << Exclude( 1 );
```

**Code Explanation**:

1. Open data table.
2. Select first four rows.
3. Select next four rows.
4. Exclude first row.



