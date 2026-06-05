# EWMA

## EWMA using Column
> **Summary**: Creates an EWMA control chart for the 'Gap' column in a data table, with report generation.

<!-- Keywords: #EWMAControlChart, #JSLScriptingLanguage, #DataAnalysis, #QualityControl, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "Gap" ) << set property( "Control Limits", {EWMA( AVG( 10 ) )} );
obj = dt << EWMA Control Chart( Y( :Gap ), Subgroup( :Sample ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Set "Gap" column properties.
3. Create EWMA control chart.
4. Generate report object.



