# N Cols

## N Cols using Delete Columns
### Example 1
> **Summary**: Runs data table preparation by opening a file, deleting unwanted columns, and retrieving column names.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnOperations, #FileInput/Output, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Columns( :Height, :Weight );
colnames = (dt << get column names)[2 :: N Cols( dt )];
```

**Code Explanation**:

1. Open data table;
2. Delete Height and Weight columns.
3. Retrieve column names.



### Example 2
> **Summary**: Process of opening a data table, removing specified columns, and retrieving remaining column names.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnDeletion, #ColumnNamesRetrieval, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Columns( "height", "weight" );
colnames = (dt << get column names)[1 :: N Cols( dt )];
```

**Code Explanation**:

1. Open data table;
2. Remove height and weight columns.
3. Retrieve remaining column names.



### Example 3
> **Summary**: Process of opening a data table, removing Height and Weight columns, and retrieving all column names.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #ColumnManagement, #DataTableOperations, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Columns( {:Height, :Weight} );
colnames = (dt << get column names)[1 :: N Cols( dt )];
```

**Code Explanation**:

1. Open data table;
2. Remove Height and Weight columns.
3. Retrieve all column names.



### Example 4
> **Summary**: Deletes a column and retrieval of column names in a JMP data table, starting from index 4.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnOperations, #TableManipulation, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Columns( :Height );
colnames = (dt << get column names)[4 :: N Cols( dt )];
```

**Code Explanation**:

1. Open data table;
2. Delete Height column.
3. Retrieve column names starting from index 4.



## N Cols using N Rows
> **Summary**: Runs the reversal of rows and columns in an open data table, allowing for efficient data manipulation.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #TableOperations, #RowReversal, #ColumnReversal -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[1 :: N Rows( dt ), 0] = dt[N Rows( dt ) :: 1, 0];
dt[0, 1 :: N Cols( dt )] = dt[0, N Cols( dt ) :: 1];
```

**Code Explanation**:

1. Open data table.
2. Reverse rows in table.
3. Reverse columns in table.



> **Summary**: Opens a data table and assigns the number of columns.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnManagement, #JMP, #ScriptingAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
noCol = N Cols( dt );
```

**Code Explanation**:

1. Open data table.
2. Assign number of columns.



## N Cols using Random Normal
> **Summary**: Selects random columns in a data table, utilizing the Random Normal function to determine column inclusion.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #RandomSelection, #ColumnSelection, #JMPScripting -->

**Code**:
```jsl
//select random cols rows in a data table
Names Default To Here (1);
dt = Open("data_table.jmp");
cols = {};
for each ({i}, 2::n cols(dt),
	if (Random Normal() > 0,
		Insert Into (cols, i)
	)
);
dt << Select columns (cols);
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Initialize empty list cols.
4. Loop through columns 2 to n.
5. If random normal > 0.
6. Insert column index into cols.
7. End loop.
8. Select columns in cols list.



