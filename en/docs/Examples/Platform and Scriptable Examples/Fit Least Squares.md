# Fit Least Squares

## Fit Least Squares using Fit Model
> **Summary**: Fits a linear model to a data table, selecting specific rows and excluding others, while configuring Pareto plot and Actual vs. Predicted plot preferences.

<!-- Keywords: #JSLScriptingLanguage, #LinearRegression, #DataTableManagement, #PlotConfiguration, #FitModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model( Effects( :height ), Y( :weight ), Personality( "Standard Least Squares" ), Emphasis( "Minimal Report" ), Run );
obj << Automatic Recalc( 1 );
dt << Select Rows( Index( 2, 4 ) );
dt << Exclude;
Close( dt, No Save );
pref1 = Get  Preferences( Fit Least Squares( Pareto Plot ) );
pref2 = Get  Preferences( Fit Least Squares( Plot Actual by Predicted ) );
 Preferences( Fit Least Squares( Pareto Plot( 1 ) ) );
 Preferences( Fit Least Squares( Plot Actual by Predicted( 1 ) ) );
```

**Code Explanation**:

1. Open data table.
2. Fit linear model.
3. Set automatic recalculation.
4. Select specific rows.
5. Exclude selected rows.
6. Close data table without saving.
7. Get Pareto plot preferences.
8. Get Actual vs. Predicted plot preferences.
9. Enable Pareto plot.
10. Enable Actual vs. Predicted plot.



