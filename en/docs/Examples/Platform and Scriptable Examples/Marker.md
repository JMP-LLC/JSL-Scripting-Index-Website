# Marker

## UseForMarker 
### Example 1
> **Summary**: Opens a data table and sets its name as a marker column property.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #MarkerColumnProperty, #JMP, #ScriptingAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Name << UseForMarker( 1 );
```

**Code Explanation**:

1. Open data table;
2. Assign data table to dt.
3. Set marker column property.



### Example 2
> **Summary**: Runs the analysis process by setting default names, opening a data table, and running the Bivariate script.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #BivariateAnalysis, #ScriptingAutomation, #JMP -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
dt:Name << UseForMarker( 1 );
dt << run script( "Bivariate" );
```

**Code Explanation**:

1. Set default names.
2. Open data table;
3. Use Name column for markers.
4. Run Bivariate script.



### Example 3
> **Summary**: Executes a Bivariate analysis script on an open data table, setting a column for markers.

<!-- Keywords: #JSLScripting, #BivariateAnalysis, #DataTable, #MarkerColumn, #ScriptExecution -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Name << UseForMarker( 1 );
dt << run script( "Bivariate" );
```

**Code Explanation**:

1. Open data table;
2. Set column for markers.
3. Run Bivariate analysis script.



