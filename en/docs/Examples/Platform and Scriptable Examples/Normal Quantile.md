# Normal Quantile

## Normal Quantile using Run Script
> **Summary**: Fits an exponential model to a data table, generating a report, and calculating confidence bounds for parameter estimates.

<!-- Keywords: #JSLScriptingLanguage, #ExponentialModelFitting, #ConfidenceBounds, #DataTableAnalysis, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
flbx = dt << Run Script( "Fit Life by X" );
flbx << Fit Exponential;
rpt = Report( flbx );
z = Normal Quantile( .975 );
expvals = [-28.5185625373458 3.17756972351273 . ., 1.16679249525913 0.106118891768106 . .];
actvals = (rpt[Outline Box( "Exponential Results" )][Outline Box( "Estimates" )][Table Box( 1 )] << get as matrix);
expvals[1, 3 :: 4] = (actvals[1, 1] - z * actvals[1, 2]) || (actvals[1, 1] + z * actvals[1, 2]);
expvals[2, 3 :: 4] = (actvals[2, 1] - z * actvals[2, 2]) || (actvals[2, 1] + z * actvals[2, 2]);
```

**Code Explanation**:

1. Open data table.
2. Run Fit Life by X script.
3. Fit exponential model.
4. Generate report object.
5. Calculate normal quantile.
6. Define expected values matrix.
7. Extract actual estimates from report.
8. Calculate lower confidence bound for first parameter.
9. Calculate upper confidence bound for first parameter.
10. Calculate lower confidence bound for second parameter.
11. Calculate upper confidence bound for second parameter.



