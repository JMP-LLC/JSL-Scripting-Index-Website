# Columns

## Text to Columns 
### Example 1
> **Summary**: Runs the conversion of a Model column to text columns and creates indicator columns, while linking the resulting data table to another reference table.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #TexttoColumns, #IndicatorColumns, #LinkReference -->

**Code**:
```jsl
dt2 = Open( "data_table.jmp", invisible );
dt2 << Text to Columns( Delimiter( " " ), Make Indicator Columns( 0 ), Columns( :Model ) );
dt2:Model2 << Set Property( "Link Reference", Reference Table( "data_table2.jmp" ) );
```

**Code Explanation**:

1. Open data table;
2. Convert Model column to text columns.
3. Create indicator columns for Model.
4. Link Model2 to Cars 1993.jmp.



### Example 2
> **Summary**: Prepares data by opening a data table, converting the Model column to columns, creating indicator columns, and linking the Model2 column to the Cars 1993 reference table.

<!-- Keywords: #JSLScriptingLanguage, #DataPreparation, #TableOperations, #ReferenceTables, #ColumnManipulation -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
dt2 << Text to Columns( Delimiter( " " ), Make Indicator Columns( 0 ), Columns( :Model ) );
dt2:Model2 << Set Property( "Link Reference", Reference Table( "$SAMPLE_DATA/Cars 1993.jmp" ) );
```

**Code Explanation**:

1. Open data_table data
2. Convert Model to columns.
3. Create indicator columns.
4. Link Model2 to Cars 1993.



## Group Columns 
### Example 1
> **Summary**: Runs data table operations by opening a file, grouping and ungrouping columns, and retrieving column names.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnManagement, #DataRetrieval, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
cols = {:age, :sex, :height, :weight};
dt << Group Columns( cols );
dt << Ungroup Columns( cols );
n = dt << Get Column Names;
```

**Code Explanation**:

1. Open data table.
2. Define column list.
3. Group specified columns.
4. Ungroup specified columns.
5. Retrieve column names.



### Example 2
> **Summary**: Runs the renaming process for column groups in a data table, demonstrating the iterative application of rename operations.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnGroupManagement, #RenameColumns, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
gname1 = dt << Group Columns( {height, weight} );
gname2 = dt << Rename Column Group( gName1, "Size" );
gname3 = dt << Rename Column Group( gName2, "Dimensions" );
gname4 = dt << Rename Column Group( gName3, "Dimensions" );
```

**Code Explanation**:

1. Open data table.
2. Group columns height and weight.
3. Rename column group to Size.
4. Rename column group to Dimensions.
5. Attempt to rename column group again.



### Example 1
> **Summary**: Opens a data table and selecting specific columns for analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnSelection, #JMP, #ScriptingAutomation -->

**Code**:
```jsl
dt1 = Open( "$SAMPLE_DATA/data_table.jmp", select columns( "age", "height", "weight" ) );
```

**Code Explanation**:

1. Open data table.
2. Select specific columns.



### Example 2
> **Summary**: Opens a JMP data table, ignoring specific columns and assigning it to a variable dt2.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnSelection, #VariableAssignment, #ScriptAutomation -->

**Code**:
```jsl
dt2 = Open( "$SAMPLE_DATA/data_table.jmp", ignore columns( "name", "sex" ) );
```

**Code Explanation**:

1. Open data table;
2. Ignore "name" column.
3. Ignore "sex" column.
4. Assign to dt2 variable.



### Example 3
> **Summary**: Opens a data table, selecting specific columns, and retrieving column names for further analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnSelection, #ColumnNames, #JMP -->

**Code**:
```jsl
dt1 = Open( "$SAMPLE_DATA/data_table.jmp", select columns( "weight", "age" ) );
collist = dt1 << get columnnames( string );
```

**Code Explanation**:

1. Open data table;
2. Select specific columns.
3. Assign table reference.
4. Retrieve column names.
5. Store column names in list.



### Example 4
> **Summary**: Opens a JMP data table, hiding the table window, ignoring specified columns, and retrieving column names for storage in a list.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnHandling, #ScriptAutomation, #JSL -->

**Code**:
```jsl
dt1 = Open( "$SAMPLE_DATA/data_table.jmp", invisible, ignore columns( "name", "sex" ) );
collist = dt1 << get columnnames( string );
```

**Code Explanation**:

1. Open data table.
2. Hide table window.
3. Ignore specified columns.
4. Retrieve column names.
5. Store column names in list.



## Select Columns 
### Example 1
> **Summary**: Selects and retrieves specific columns from a data table, including clearing previous selections.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnSelection, #ClearColumnSelection, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Columns( :Height );
names = dt << get selected columns;
dt << Clear column selection;
clist = {:Height, :Weight};
dt << Select Columns( clist );
name2 = dt << get selected columns;
```

**Code Explanation**:

1. Open data table;
2. Select "Height" column.
3. Get selected column names.
4. Clear column selection.
5. Define column list.
6. Select specified columns.
7. Get selected column names again.



### Example 2
> **Summary**: Process of opening a data table, selecting all columns, and retrieving selected column names.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnSelection, #DataRetrieval, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Columns( all );
colnames = dt << Get selected Columns;
```

**Code Explanation**:

1. Open data table;
2. Select all columns.
3. Retrieve selected column names.



### Example 3
> **Summary**: Opens a data table and selecting the 'age' column, providing an interactive platform for further analysis.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnSelection, #InteractiveAnalysis, #Automation -->

**Code**:
```jsl
dt2 = Open( "$SAMPLE_DATA\data_table.jmp", Select Columns( "age" ) );
```

**Code Explanation**:

1. Open data table;
2. Select "age" column.



## Move selected columns 
> **Summary**: Process of moving specific columns to the end of a data table, utilizing the Move selected columns() function.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnOperations, #ScriptingAutomation, #JSLCode -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
list2 = {"State", "Region"};
dt2 << Move selected columns( list2, To last );
```

**Code Explanation**:

1. Open data table.
2. Define column list.
3. Move columns to end.



## Columns 
> **Summary**: Opens a JMP data table, ignoring a specific column.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnHandling, #ScriptAutomation, #JSLSyntax -->

**Code**:
```jsl
dt3 = Open( "$SAMPLE_DATA\data_table.jmp", ignore Columns( "Âπ¥ÈΩ¢" ) );
```

**Code Explanation**:

1. Open data table.
2. Ignore specific column.



