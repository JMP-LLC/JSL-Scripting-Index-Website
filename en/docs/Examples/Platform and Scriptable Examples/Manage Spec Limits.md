# Manage Spec Limits

## Manage Spec Limits using Add Rows
> **Summary**: Process of applying specification limits to a data table, grouping by region, and generating a report.

<!-- Keywords: #JSLScriptingLanguage, #SpecificationLimits, #DataTableManagement, #ReportGeneration, #Grouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtlimits = New Table( "Limits",
	Add Rows( 4 ),
	New Column( "Variable", Character, "Nominal", Set Values( {"OZONE", "CO", "SO2", "NO"} ) ),
	New Column( "LSL", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [0.06, 4, 0.001, 0.012] ) ),
	New Column( "Target", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [0.14, 8, 0.052, 0.026] ) ),
	New Column( "USL", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [0.33, 23, 0.095, 0.061] ) )
);
obj = dt << Manage Spec Limits( Y( :OZONE, :CO, :SO2, :NO ), Grouping( :Region ), Load from Limits Table( dtLimits ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create new limits table.
3. Define variable column.
4. Define LSL values.
5. Define target values.
6. Define USL values.
7. Apply spec limits to data.
8. Group by region.
9. Load limits from table.
10. Generate report.



> **Summary**: Creates a spec limits object for process variables height and weight in a data table.

<!-- Keywords: #JSLScriptingLanguage, #SpecLimitsObject, #ProcessVariables, #DataTableManagement, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Manage Spec Limits( Process Variables( :height, :weight ) );
```

**Code Explanation**:

1. Open data table;
2. Create spec limits object.
3. Set process variables to height and weight.



