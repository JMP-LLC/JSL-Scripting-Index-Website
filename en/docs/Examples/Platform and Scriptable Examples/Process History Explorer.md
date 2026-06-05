# Process History Explorer

### Example 1
> **Summary**: Launches the Process History Explorer to visualize and analyze data from a specified data table, grouping by Lot and Wafer, with Tool and Route as X columns, Layer and Operation as Step columns, and TimeIn and TimeOut as Timestamp columns.

<!-- Keywords: #ProcessHistoryExplorer, #DataVisualization, #JMPScriptingLanguage, #TableAnalysis, #YieldCalculation -->

**Code**:
```jsl
// Process History Explorer
// Open data table
dt = Open("data_table.jmp");
// Process History Explorer
Open("data_table.jmp");
Open("data_table.jmp") <<
Process History Explorer(
	ID( :Lot, :Wafer ),
	X( :Tool, :Route ),
	Step( :Layer, :Operation ),
	Timestamp( :TimeIn, :TimeOut ),
	Yield Table( "Lot Wafer Yield" ),
	Yield Columns( "Yield" ),
	Levels with Lowest Yield( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Open data table;
4. Launch Process History Explorer.
5. Set ID columns: Lot, Wafer.
6. Set X columns: Tool, Route.
7. Set Step columns: Layer, Operation.
8. Set Timestamp columns: TimeIn, TimeOut.
9. Specify Yield Table: Lot Wafer Yield.
10. Specify Yield Columns: Yield.
11. Show levels with lowest yield: 1.



### Example 2
> **Summary**: Analyze process history data by launching a Process History Explorer, performing stepwise regression, and displaying levels with lowest yield.

<!-- Keywords: #ProcessHistoryExplorer, #StepwiseRegression, #YieldAnalysis, #DataVisualization, #JMPScriptingLanguage -->

**Code**:
```jsl
dtlh = Open("data_table.jmp");
dtwy = Open("data_table.jmp");
obj = dtlh << Process History Explorer(
	ID( :lot, :wafer ),
	X( :Tool, :Route ),
	Step( :Layer, :Operation ),
	Timestamp( :TimeIn, :TimeOut ),
	Yield Table( dtwy ),
	Yield Columns( "yield" ),
	Stepwise Regression(
		Goal( "Biggest individual difference" ),
		Time Filtering( "None" ),
		X Transform( "None" ),
		N Steps( 10 )
	)
);
obj << Levels with Lowest Yield;
obj << Levels with Lowest Yield with Time Filter;
dtCount = obj << Save Count Table;
dtLogCount = obj << Save Log Count Table;
Print( "************** Bottom of Log ***************" );
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Launch Process History Explorer.
4. Set ID variables: lot, wafer.
5. Set X variables: Tool, Route.
6. Set Step variables: Layer, Operation.
7. Set Timestamp variables: TimeIn, TimeOut.
8. Link Yield Table: dtwy.
9. Set Yield Column: yield.
10. Perform Stepwise Regression analysis.
11. Display Levels with Lowest Yield.
12. Display Levels with Lowest Yield with Time Filter.
13. Save Count Table to dtCount.
14. Save Log Count Table to dtLogCount.
15. Print log completion message.



### Example 3
> **Summary**: Analyze process history data by identifying levels with lowest yield and applying stepwise regression, utilizing the Process History Explorer platform in JMP.

<!-- Keywords: #ProcessHistoryExplorer, #StepwiseRegression, #YieldAnalysis, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dtlh = Open("data_table.jmp");
dtwy = Open("data_table.jmp");
obj = dtlh << Process History Explorer(
	ID( :lot, :wafer ),
	X( :Tool, :Route ),
	Step( :Layer, :Operation ),
	Timestamp( :TimeIn, :TimeOut ),
	Yield Table( dtwy ),
	Yield Columns( "yield" ),
	Stepwise Regression(
		Goal( "Biggest individual difference" ),
		Time Filtering( "None" ),
		X Transform( "None" ),
		N Steps( 10 )
	)
);
obj << Levels with Lowest Yield;
obj << Levels with Lowest Yield with Time Filter;
dtCount = obj << Save Count Table;
dtLogCount = obj << Save Log Count Table;
```

**Code Explanation**:

1. Open data_table data
2. Open data_table data
3. Launch Process History Explorer.
4. Set ID variables.
5. Set X variables.
6. Set Step variables.
7. Set Timestamp variables.
8. Link Yield Table.
9. Specify Yield Columns.
10. Configure Stepwise Regression settings.
11. Display Levels with Lowest Yield.
12. Display Levels with Lowest Yield with Time Filter.
13. Save Count Table.
14. Save Log Count Table.



### Example 4
> **Summary**: Runs the process history explorer to analyze and visualize data, including stepwise regression and yield table calculations.

<!-- Keywords: #JMPScriptingLanguage, #ProcessHistoryExplorer, #StepwiseRegression, #YieldTable, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
phe = dt << Process History Explorer(
	ID( :Lot, :Wafer ),
	X( :Tool, :Route ),
	Step( :Layer, :Operation ),
	Timestamp( :TimeIn, :TimeOut ),
	Yield Table( "Lot Wafer Yield" ),
	Yield Columns( "Yield" ),
	Levels with Lowest Yield
);
Column( dt, "Tool" ) << Set Selected( 1 );
dt << Delete Columns;
phe << Stepwise Regression( Goal( "Biggest individual difference" ), Time Filtering( "None" ), X Transform( "None" ), N Steps( 10 ) );
phe << close window;
Window( "Report: Note" ) << Close window;
```

**Code Explanation**:

1. Open data table.
2. Open data table.
3. Create process history explorer.
4. Set ID variables.
5. Set X variables.
6. Set step variables.
7. Set timestamp variables.
8. Specify yield table.
9. Specify yield columns.
10. Show levels with lowest yield.
11. Select "Tool" column.
12. Delete selected columns.
13. Perform stepwise regression.
14. Close process history explorer.
15. Close report window.



## Process History Explorer using New Window
> **Summary**: Creates a report window with Process History Explorer and Run Script features, displaying yield tables and processing data from three JMP data tables.

<!-- Keywords: #JMPScriptingLanguage, #ProcessHistoryExplorer, #RunScript, #YieldTable, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table1.jmp");
dt2 = Open("data_table2.jmp");
dt3 = Open("data_table3.jmp");
myobj = New Window( "report",
	H List Box(
		obj = dt << Process History Explorer(
			ID( :Lot, :Wafer ),
			X( :Tool, :Route ),
			Step( :Layer, :Operation ),
			Timestamp( :TimeIn, :TimeOut ),
			Yield Table( "Lot Wafer Yield" ),
			Yield Columns( "Yield" )
		),
		dt3 << Run Script( "Bivariate" )
	)
);
```

**Code Explanation**:

1. Open data_table1 table.
2. Open data_table2 table.
3. Open data_table3 table.
4. Create new window named "report".
5. Add horizontal list box to window.
6. Display Process History Explorer on first table.
7. Set ID variables: Lot, Wafer.
8. Set X variables: Tool, Route.
9. Set Step variables: Layer, Operation.
10. Set Timestamp variables: TimeIn, TimeOut.



