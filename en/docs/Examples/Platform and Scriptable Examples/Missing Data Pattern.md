# Missing Data Pattern

### Example 1
> **Summary**: Opens a data table, generates a missing data pattern, and specifies columns for analysis.

<!-- Keywords: #JMPScriptingLanguage, #MissingDataPattern, #DataTableOperations, #ColumnSpecification, #DataAnalysis -->

**Code**:
```jsl
// Missing Data Pattern
// Open data table
dt = Open("data_table.jmp");
// Missing Data Pattern
Current Data Table() <<
Missing Data Pattern(
	Columns(
		:Trial 1, :Trial 2, :Trial 3,
		:Trial 4
	)
);
```

**Code Explanation**:

1. Open data table.
2. Access current data table.
3. Generate missing data pattern.
4. Specify columns for analysis.



### Example 2
> **Summary**: Runs the identification and visualization of missing data patterns in a JMP data table, specifying columns for analysis and adding value colors property.

<!-- Keywords: #MissingDataPattern, #JMPScriptingLanguage, #DataVisualization, #TableAnalysis, #PropertyGet -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
dtMiss2 = dt2 << Missing Data Pattern(
	columns( :POP, :Max deg. F Jan, :OZONE, :CO, :SO2, :NO, :PM10, :Lead, :X, :Y ),
	Add Value Colors Property,
	output table( "Missing Pattern for data_table2" )
);
property2 = dtMiss2:SO2 << Get property( Value Colors );
```

**Code Explanation**:

1. Open data table.
2. Create missing data pattern.
3. Specify columns for analysis.
4. Add value colors property.
5. Output table with results.
6. Retrieve SO2 value colors property.



## Missing Data Pattern using Data Table
> **Summary**: Analyze missing data patterns in a table, generating a report and visualizing the results using a tree map script.

<!-- Keywords: #JSLScripting, #DataAnalysis, #MissingDataPattern, #TreeMap, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt2 = Data Table( dt ) << Missing Data Pattern( columns( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ), Output Table( "Missing Data Pattern" ) );
matStd = [29 0 0 0 0 0 0 0,
3 1 0 0 0 0 0 1,
5 1 0 0 0 1 0 0,
3 2 0 0 0 1 0 1,
1 1 0 0 1 0 0 0,
2 2 0 0 1 1 0 0,
2 3 0 0 1 1 0 1,
1 3 0 1 0 1 0 1,
1 3 0 1 0 1 1 0,
1 4 0 1 1 1 0 1,
1 3 1 0 0 1 0 1,
1 4 1 0 1 1 0 1,
1 4 1 1 1 1 0 0,
1 5 1 1 1 1 0 1];
matTable = dt2 << get as matrix;
tree = dt2 << Run Script( "Tree Map" );
rpt = tree << report;
tree << Close Window();
```

**Code Explanation**:

1. Open data table.
2. Create missing data pattern.
3. Define standard matrix.
4. Get matrix from table.
5. Run tree map script.
6. Retrieve report from tree.
7. Close tree map window.



