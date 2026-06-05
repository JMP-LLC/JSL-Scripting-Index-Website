# Go to

> **Summary**: Runs the navigation to a specific row and retrieves selected columns from a data table.

<!-- Keywords: #JSLScriptingLanguage, #DataTableNavigation, #ColumnSelection, #InteractiveAnalysis, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
i = 2;
dt << Go to( i );
selCol = dt << get Selected columns;
```

**Code Explanation**:

1. Open data table.
2. Assign row index 2 to i.
3. Navigate to row 2.
4. Get selected columns.



