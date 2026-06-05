# All

## All using Run Script
> **Summary**: Runs the stepwise fit process for a data table, extracting initial and final estimates matrices while modifying path diagram properties.

<!-- Keywords: #JSLScripting, #StepwiseFit, #PathDiagramProperties, #EstimateMatrix, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "Stepwise Fit" );
rpt = obj << report;
est1 = rpt[Outline Box( "Current Estimates" )][Table Box( 1 )] << get as matrix;
rpt[Outline Box( "Current Estimates" )][CheckBoxBox( 1 )] << set( 5, 1 );
est2 = rpt[Outline Box( "Current Estimates" )][Table Box( 1 )] << get as matrix;
obj << Remove All( 1 );
est3 = rpt[Outline Box( "Current Estimates" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Run Stepwise Fit script.
3. Extract initial estimates matrix.
4. Set checkbox for significance level.
5. Extract updated estimates matrix.
6. Remove all terms from model.
7. Extract final estimates matrix.



