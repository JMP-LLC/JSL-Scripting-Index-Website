# Select Rows

### Example 1
> **Summary**: Selects the first 15 rows from a data table, allowing for efficient analysis and exploration.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #RowSelection, #DataExploration, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] );
```

**Code Explanation**:

1. Open data_table data
2. Select first 15 rows.



### Example 2
> **Summary**: Selects and excludes specific rows in a data table, hiding them from view.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #RowSelection, #Exclusion, #Hide -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select rows( {4, 5, 6, 7} ) << Hide << Exclude;
```

**Code Explanation**:

1. Open data table.
2. Select specific rows.
3. Hide selected rows.
4. Exclude selected rows.



### Example 3
> **Summary**: Selects and excludes a specific row in a data table, utilizing the Hide and Exclude operations.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #HideRow, #ExcludeRow, #Selection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select rows( {38} ) << Hide << exclude;
```

**Code Explanation**:

1. Open data table;
2. Select row 38.
3. Hide selected row.
4. Exclude selected row.



### Example 4
> **Summary**: Selects and excludes a specific row in a data table, utilizing JMP's built-in data manipulation capabilities.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #RowSelection, #Exclusion, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select rows( {15} ) << exclude;
```

**Code Explanation**:

1. Open data table.
2. Select row 15.
3. Exclude selected row.



### Example 5
> **Summary**: Selects and hides a specific row in a data table, allowing for targeted analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #RowSelection, #HideRows, #DataAnalysisAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select rows( {1} ) << hide;
```

**Code Explanation**:

1. Open data table.
2. Select first row.
3. Hide selected row.



### Example 6
> **Summary**: Selects and excludes rows in a data table, allowing for focused analysis on specific subsets of data.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #RowSelection, #Exclusion, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select rows( {1, 2, 3, 4, 5} ) << exclude;
```

**Code Explanation**:

1. Open data table;
2. Select first five rows.
3. Exclude selected rows.



### Example 7
> **Summary**: Selects and excludes rows in a data table, specifically selecting the first 10 rows and then excluding them.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #RowSelection, #Exclusion, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
r = dt << Select Rows( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] );
r << Exclude;
```

**Code Explanation**:

1. Open data table;
2. Select first 10 rows.
3. Exclude selected rows.



### Example 8
> **Summary**: Selects specific rows from a data table, utilizing the `Select Rows` platform.

<!-- Keywords: #JSLScripting, #DataTableManipulation, #RowSelection, #JMP, #ScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( {30, 62, 140} );
```

**Code Explanation**:

1. Open data table;
2. Select specific rows.



### Example 9
> **Summary**: Runs the selection and clearing of row states in a data table, allowing for focused analysis on specific rows.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #RowStateControl, #InteractiveAnalysis, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << clear row states;
dt << select rows( 16 );
```

**Code Explanation**:

1. Open data table.
2. Clear row states.
3. Select specific rows.



### Example 10
> **Summary**: Selects specific rows from a data table, targeting rows 16-20.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #RowSelection, #JMPScripting, #DataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( {16, 17, 18, 19, 20} );
```

**Code Explanation**:

1. Open data table.
2. Select specific rows 16-20.



## Select rows 
> **Summary**: Runs data table operations to select, exclude, and reorder rows, as well as set missing values for specific heights.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #RowSelection, #MissingValues, #ValueOrdering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select rows( [11, 12, 13, 14, 15, 16, 17, 18, 19, 20] );
dt << exclude << clear select;
dt:height[9] = :height[10] = :height[11] = .;
dt:age << Set Property( "Value Ordering", {12, 13, 14, 16, 17, 15} );
```

**Code Explanation**:

1. Open data table;
2. Select rows 11-20.
3. Exclude selected rows.
4. Clear selection.
5. Set height of 9th row to missing.
6. Set height of 10th row to missing.
7. Set height of 11th row to missing.
8. Set age value ordering.



