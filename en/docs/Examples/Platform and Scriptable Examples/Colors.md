# Colors

> **Summary**: Runs the selection and coloring of all rows in a data table, utilizing JMP's built-in functionality.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #RowSelection, #ColorCoding, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select All Rows;
dt << Colors( "red" );
```

**Code Explanation**:

1. Open data table;
2. Select all rows in dataset.
3. Change row colors to red.



