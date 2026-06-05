# N Col

## N Col using Get Column Names
### Example 1
> **Summary**: Process of opening a data table, retrieving column names, and deleting all columns.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnOperations, #ScriptingAutomation, #JSLScripting -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
list_colNames = dt2 << Get Column Names( String );
dt2 << Delete Columns( list_colNames[1 :: N Col( dt2 )] );
```

**Code Explanation**:

1. Open data table;
2. Retrieve column names.
3. Delete all columns.



### Example 2
> **Summary**: Process of selecting and deleting columns in a JMP data table, while preserving the original column order.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #ColumnSelection, #DataManagement, #ScriptAutomation -->

**Code**:
```jsl
dt3 = Open("data_table.jmp");
dtNames = dt3 << Get Column Names();
dt3 << Select Columns( dtNames[2 :: N Col( dt3 )] );
dt3 << Move Selected Columns( To First );
dt3 << Clear Column Selection();
dt3 << Delete Columns( dtNames[2 :: N Col( dt3 )] );
names = dt3 << get column names;
```

**Code Explanation**:

1. Open data table;
2. Retrieve column names.
3. Select all columns except first.
4. Move selected columns to front.
5. Clear column selection.
6. Delete moved columns.
7. Retrieve updated column names.



