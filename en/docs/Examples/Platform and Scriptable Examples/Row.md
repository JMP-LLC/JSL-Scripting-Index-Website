# Row

### Example 1
> **Summary**: Selects and excludes specific rows in a data table, allowing for targeted analysis and visualization.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #RowSelection, #Exclusion, #DataAnalysisAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
r = dt << go to row( 1 );
r << hide;
dt << clear select();
r = dt << select rows( [2, 3, 4] );
r << exclude;
```

**Code Explanation**:

1. Open data table.
2. Go to first row.
3. Hide first row.
4. Clear all selections.
5. Select rows 2, 3, 4.
6. Exclude selected rows.



### Example 2
> **Summary**: Selects and excludes rows in a data table, followed by running a script to generate Mean and Range Charts.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #RowSelection, #ScriptExecution, #MeanandRangeCharts -->

**Code**:
```jsl
dt = Open("data_table.jmp");
r = dt << go to row( 1 );
r << hide;
dt << clear select();
r = dt << select rows( [2, 3, 4] );
r << exclude;
dt << run script( "Mean and Range Charts" );
```

**Code Explanation**:

1. Open data table.
2. Go to first row.
3. Hide first row.
4. Clear row selection.
5. Select rows 2 to 4.
6. Exclude selected rows.
7. Run "Mean and Range Charts" script.



### Example 3
> **Summary**: Runs data table operations to select and exclude specific rows, while clearing all previous selections.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #RowSelection, #Exclusion, #ClearSelections -->

**Code**:
```jsl
dt = Open("data_table.jmp");
r = dt << go to row( 4 );
r << hide;
dt << clear select();
r = dt << select rows( [1, 2, 3] );
r << exclude;
```

**Code Explanation**:

1. Open data table.
2. Go to row 4.
3. Hide row 4.
4. Clear all selections.
5. Select rows 1, 2, 3.
6. Exclude selected rows.



### Example 4
> **Summary**: Runs data table operations to select and exclude specific rows, then runs a script to generate Mean and Range Charts.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #RowSelection, #MeanAndRangeCharts, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
r = dt << go to row( 4 );
r << hide;
dt << clear select();
r = dt << select rows( [1, 2, 3] );
r << exclude;
dt << run script( "Mean and Range Charts" );
```

**Code Explanation**:

1. Open data table.
2. Go to row 4.
3. Hide row 4.
4. Clear all selections.
5. Select rows 1, 2, 3.
6. Exclude selected rows.
7. Run Mean and Range Charts script.



### Example 5
> **Summary**: Opens and configures a data table in JMP, setting the window size to 800x500 and row index to 40.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #WindowConfiguration, #RowIndexing, #JSLCode -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << set window size( 800, 500 );
Row() = 40;
```

**Code Explanation**:

1. Open data table;
2. Set window size to 800x500.
3. Set row index to 40.



### Example 6
> **Summary**: Runs the navigation to specific rows in a data table, setting the current row to 40, then 1, and finally 6.

<!-- Keywords: #JSLScriptingLanguage, #DataTableNavigation, #RowSelection, #ScriptingAutomation, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Row() = 40;
Row() = 1;
Row() = 6;
```

**Code Explanation**:

1. Open data table.
2. Set current row to 40.
3. Set current row to 1.
4. Set current row to 6.



### Example 7
> **Summary**: Selects row 3 in a data table, allowing for efficient analysis and exploration.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #RowSelection, #InteractiveAnalysis, #JMPScripting -->

**Code**:
```jsl
Open("data_table.jmp");
Row() = 3;
```

**Code Explanation**:

1. Open data table;
2. Set current row to 3.



### Example 8
> **Summary**: Opens a data table and sets the current row to 3.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #RowSelection, #JMPScripting, #DataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Row() = 3;
```

**Code Explanation**:

1. Open data table;
2. Set current row to 3.



### Example 9
> **Summary**: Opens a data table and sets the current row to 10.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #RowSelection, #JMPScripting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Row() = 10;
```

**Code Explanation**:

1. Open data table;
2. Set current row to 10.



## Row using Run Script
> **Summary**: Fits a model to data, visualizing residuals, and performing Durbin-Watson tests to evaluate model quality.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #ResidualAnalysis, #Durbin-WatsonTest, #ModelEvaluation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << clear row states;
dt << select where( :height < 60 );
s = dt << get excluded rows;
dt << Exclude;
obj1 = dt << Run Script( "Fit Model" );
obj1 << Plot Residual by Predicted( 1 );
obj1 << Plot Residual by Row( 1 );
obj1 << Plot Studentized Residuals( 1 );
rpt1 = obj1 << report;
obj1 << Durbin Watson Test( 1 );
dw = rpt1["Durbin-Watson"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Clear row states.
3. Select rows with height < 60.
4. Get excluded rows.
5. Exclude selected rows.
6. Run Fit Model script.
7. Plot residual by predicted.
8. Plot residual by row.
9. Plot studentized residuals.
10. Extract Durbin-Watson test result.



