# Add Rows

### Example 1
> **Summary**: Runs data table operations by opening a file, adding rows, reverting the changes, and marking the table as modified.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #TableManagement, #JMPScripting, #DataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << add rows( 5 );
dt = dt << revert();
dt << set dirty;
```

**Code Explanation**:

1. Open data table.
2. Add 5 rows to table.
3. Revert table to original state.
4. Mark table as modified.



### Example 2
> **Summary**: Runs data table operations by opening a file, adding rows at the start, selecting specific rows, retrieving row values, and deleting all rows.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #RowSelection, #DeleteRows, #JMP -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
dt2 << Add Rows( 5, At Start );
dt2 << select rows( [1, 2, 3, 4, 5] );
rowvals2 = dt2 << get rows( {3} );
dt2 << delete rows;
```

**Code Explanation**:

1. Open data table;
2. Add 5 rows at start.
3. Select first 5 rows.
4. Get values from row 3.
5. Delete all rows.



