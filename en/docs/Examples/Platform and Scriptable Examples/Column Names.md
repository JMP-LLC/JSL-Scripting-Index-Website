# Column Names

## Column Names using HTML Table
### Example 1
> **Summary**: Runs the parsing and extraction of data from an HTML table on a web page, utilizing JMP's Open() function to access the webpage and extract the second table with column names from the first row and data starting from the third row.

<!-- Keywords: #JMPScriptingLanguage, #HTMLTableParsing, #WebScraping, #DataExtraction, #Automation -->

**Code**:
```jsl
// Source
Open(
	"https://en.wikipedia.org/wiki/Delta_Air_Lines_fleet",
	HTML Table(
		2,
		Column Names( 1 ),
		Data Starts( 2 )
	)
);
```

**Code Explanation**:

1. Open web page.
2. Parse HTML table.
3. Select second table.
4. Use first row for column names.
5. Start data from third row.



### Example 2
> **Summary**: Process of opening a webpage, parsing an HTML table, and specifying the data start row.

<!-- Keywords: #JSLScriptingLanguage, #HTMLTableParsing, #WebScraping, #DataExtraction, #Automation -->

**Code**:
```jsl
// Source
Open(
	"https://db-engines.com/en/ranking",
	HTML Table(
		4,
		Column Names( 0 ),
		Data Starts( 1 )
	)
);
```

**Code Explanation**:

1. Open webpage.
2. Parse HTML table.
3. Specify table index.
4. Exclude column names.
5. Define data start row.



## Get Column Names 
### Example 1
> **Summary**: Runs the selection and referencing of specific columns in a data table, utilizing the Get Column Names and Get Column Reference functions.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnSelection, #ReferenceFunctions, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
cols = dt << Get Column Names( String );
MyCols = cols[{2, 3}];
refList1 = dt << Get Column Reference( cols[{2, 3}] );
refList2 = dt << Get Column Reference( MyCols );
```

**Code Explanation**:

1. Open data table.
2. Retrieve column names as strings.
3. Select specific columns.
4. Get reference to selected columns.
5. Get reference to selected columns again.



### Example 2
> **Summary**: Opens a data table and retrieval of column names.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnNames, #JMPScripting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
colList = dt << Get Column Names( String );
```

**Code Explanation**:

1. Open data table.
2. Retrieve column names.



## Column Names using Delete Columns
### Example 1
> **Summary**: Deletes columns 2, 3, 4, and 5 from a data table, then retrieves the remaining column names.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #ColumnDeletion, #DataRetrieval, #JSLScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Columns( {2, 3, 4, 5} );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table;
2. Delete columns 2, 3, 4, 5.
3. Get remaining column names.



### Example 2
> **Summary**: Deletes specified columns from a data table and retrieves the updated column names.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnDeletion, #DataRetrieval, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xCol = {2, 3, 4, 5};
dt << Delete Columns( xCol );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table;
2. Define columns to delete.
3. Delete specified columns.
4. Retrieve column names.



### Example 3
> **Summary**: Deletes columns and retrieval of remaining column names in a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnDeletion, #DataRetrieval, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Columns( {age, sex, height, weight} );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table;
2. Delete age column.
3. Delete sex column.
4. Delete height column.
5. Delete weight column.
6. Retrieve remaining column names.



### Example 4
> **Summary**: Deletes specified columns from a data table and retrieves remaining column names, utilizing JMP's built-in data manipulation capabilities.

<!-- Keywords: #JMPScripting, #DataManipulation, #ColumnDeletion, #DataTableManagement, #JSLProgramming -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xcol = {age, sex, height, weight};
dt << Delete Columns( xcol );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table.
2. Define column names to delete.
3. Delete specified columns.
4. Retrieve remaining column names.



### Example 5
> **Summary**: Deletes specified columns from a data table and retrieves remaining column names, streamlining data preparation for further analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnDeletion, #DataPreparation, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xcol = {:age, :sex, :height, :weight};
dt << Delete Columns( xcol );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table;
2. Define columns for deletion.
3. Delete specified columns.
4. Retrieve remaining column names.



### Example 6
> **Summary**: Process of opening a data table, deleting specified columns, and retrieving remaining column names.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnOperations, #DataPreparation, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xcol = {"age", "sex", "height", "weight"};
dt << Delete Columns( xcol );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table.
2. Define column names list.
3. Delete specified columns.
4. Retrieve remaining column names.



### Example 7
> **Summary**: Process of opening a data table, deleting specified columns, and retrieving remaining column names.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnOperations, #JMPScripting, #DataPreparation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xcol = {"age"n, "sex"n, "height"n, "weight"n};
dt << Delete Columns( xcol );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table;
2. Define column names in xcol.
3. Delete specified columns from dataset.
4. Retrieve remaining column names.



### Example 8
> **Summary**: Runs data table operations by opening a file, retrieving column names, deleting specified columns, and updating the column list.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnManagement, #JMP, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtnames = dt << Get Column Names;
dt << Delete Columns( dtnames[2 :: 5] );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table.
2. Retrieve column names.
3. Delete specified columns.
4. Get updated column names.



### Example 9
> **Summary**: Process of opening a data table, deleting specified columns, and retrieving column names.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnOperations, #DataRetrieval, #ScriptingAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Columns( {name, age, sex, height, weight}[2 :: 5] );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table.
2. Delete specified columns.
3. Retrieve column names.



### Example 10
> **Summary**: Process of opening a data table, deleting selected columns, and retrieving column names.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnOperations, #JMPScripting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Columns( {:name, :age, :sex, :height, :weight}[2 :: 5] );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table.
2. Delete selected columns.
3. Retrieve column names.



### Example 11
> **Summary**: Process of opening a data table, deleting specified columns, and retrieving column names.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnOperations, #JMPScripting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Columns( {"name", "age", "sex", "height", "weight"}[2 :: 5] );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table.
2. Delete specified columns.
3. Retrieve column names.



### Example 12
> **Summary**: Deletes specified columns and retrieval of column names from a data table, utilizing JMP's built-in functionality.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnOperations, #JSLScripting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Columns( {"name"n, "age"n, "sex"n, "height"n, "weight"n}[2 :: 5] );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table;
2. Delete specified columns.
3. Retrieve column names.



### Example 13
> **Summary**: Process of opening a data table, deleting specific columns, and retrieving column names.

<!-- Keywords: #JSLScripting, #DataManipulation, #ColumnManagement, #DataTableOperations, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Columns( [2, 3, 4, 5] );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table;
2. Delete columns 2, 3, 4, 5.
3. Get column names.



### Example 14
> **Summary**: Deletes columns 2-5 from a data table and retrieves updated column names.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnDeletion, #DataManipulation, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xCol = [2, 3, 4, 5];
dt << Delete Columns( xCol );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table;
2. Define columns 2-5 for deletion.
3. Delete specified columns.
4. Retrieve updated column names.



### Example 15
> **Summary**: Runs data table operations by opening a file, deleting columns, and retrieving column names.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnManagement, #JMPScripting, #DataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xCol = [1, 2, 3, 4, 5];
dt << Delete Columns( xCol[2 :: 5] );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table.
2. Define column indices.
3. Delete specified columns.
4. Retrieve column names.



### Example 16
> **Summary**: Deletes specific columns and retrieval of column names from a data table, utilizing JMP's built-in functions.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnOperations, #DataRetrieval, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Columns( [1, 2, 3, 4, 5][2 :: 5] );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table.
2. Delete specific columns.
3. Retrieve column names.



### Example 17
> **Summary**: Runs data table operations by opening a file, deleting columns, and retrieving column names.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnManagement, #FileHandling, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xcol = {(2 :: 5)`};
dt << Delete Columns( xcol[1] );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table.
2. Assign column range to variable.
3. Delete specified columns.
4. Retrieve column names.



### Example 18
> **Summary**: Process of opening a data table, deleting columns 2 to 5, and retrieving column names.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnDeletion, #ColumnNames, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Columns( [2 3 4 5] );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table.
2. Delete columns 2 to 5.
3. Retrieve column names.



### Example 19
> **Summary**: Deletes columns 2-5 from a data table and retrieves the remaining column names.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnDeletion, #DataRetrieval, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xCol = [2 3 4 5];
dt << Delete Columns( xCol );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table;
2. Define columns 2-5 for deletion.
3. Delete specified columns.
4. Retrieve remaining column names.



### Example 20
> **Summary**: Deletes specified columns from a data table and retrieves the remaining column names.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ColumnDeletion, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xCol = [1 2 3 4 5];
dt << Delete Columns( xCol[2 :: 5] );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table;
2. Define column indices to delete.
3. Delete specified columns.
4. Retrieve remaining column names.



### Example 21
> **Summary**: Deletes columns and retrieval of column names from a data table, utilizing JMP's built-in functions.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnOperations, #JSLScripting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Columns( [1 2 3 4 5][2 :: 5] );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table;
2. Delete columns 2 to 5.
3. Retrieve column names.



### Example 22
> **Summary**: Runs data table operations by opening a file, deleting specified columns, and retrieving remaining column names.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #ColumnManagement, #FileHandling, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xcol = {[2 3 4 5]};
dt << Delete Columns( xcol[1] );
col_names = dt << Get Column Names();
```

**Code Explanation**:

1. Open data table;
2. Define column indices.
3. Delete specified columns.
4. Retrieve remaining column names.



