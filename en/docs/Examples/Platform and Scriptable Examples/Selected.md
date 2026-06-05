# Selected

## Set Selected 
### Example 1
> **Summary**: Runs the selection and deselection of rows in a data table, utilizing various logical values to manipulate the selection state.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #RowSelection, #LogicalValues, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
:height << Set Selected( 1 );
:height << Set Selected( 0 );
s = :Height << Get Selected;
:height << Set Selected( yes );
:height << Set Selected( no );
:height << Set Selected( true );
:height << Set Selected( false );
:height << Set Selected( 777 );
Try( :height << Set Selected( gobbledeegook ), );
```

**Code Explanation**:

1. Open data table.
2. Select height column.
3. Unselect height column.
4. Get selected rows.
5. Select all rows.
6. Unselect all rows.
7. Select all rows.
8. Unselect all rows.
9. Select all rows.
10. Attempt to select invalid value.



### Example 2
> **Summary**: Runs data table operations, including selecting and deselecting rows based on various criteria.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #RowSelection, #BooleanValues, #IntegerValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:height << Set Selected( 1 );
:height << Set Selected( 0 );
s = :Height << Get Selected;
:height << Set Selected( yes );
:height << Set Selected( no );
:height << Set Selected( true );
:height << Set Selected( false );
:height << Set Selected( 777 );
Try( :height << Set Selected( gobbledeegook ), );
```

**Code Explanation**:

1. Open data table.
2. Select height column.
3. Deselect height column.
4. Get selected rows.
5. Select all rows.
6. Deselect all rows.
7. Select using boolean true.
8. Select using boolean false.
9. Select using integer 777.
10. Attempt to select invalid value.



