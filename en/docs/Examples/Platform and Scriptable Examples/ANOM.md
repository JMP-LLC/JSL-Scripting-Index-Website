# ANOM

## ANOM using Run Script
> **Summary**: Fits a model, selecting a weight column, deleting the selected column, and configuring multiple comparisons with overall average using ANOM chart.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #MultipleComparisons, #ANOMChart, #PathDiagram -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "Fit Model" );
dt:weight << Set Selected;
dt << Delete Column;
obj << Multiple Comparisons(
	Effect( age ),
	Comparisons with Overall Average( 1, Comparisons with Overall Average Decision Chart( ANOM( 1, Point Options( "Show Needles" ) ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Run Fit Model script.
3. Select weight column.
4. Delete selected column.
5. Configure multiple comparisons.
6. Set effect to age.
7. Enable comparisons with overall average.
8. Generate ANOM chart.
9. Show needles on chart.



