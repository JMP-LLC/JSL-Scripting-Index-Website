# Col Shuffle

## Col Shuffle using For
### Example 1
> **Summary**: Creates a list `testVar` by iterating through variables in `xlist`, inserting specific values and shuffling columns based on conditions.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #ConditionalLogic, #ListOperations, #ColumnShuffle -->

**Code**:
```jsl
xlist = {"age", "height", "weight", "sex"};
testVar = [];
For( i = 1, i <= N Items( xlist ), i++,
	If( i == 3,
		dt = Open("data_table.jmp");
		Row() = 1;
	);
	Match( xlist[i],
		xlist[1], Insert Into( testVar, Eval List( {i, Row()} ) ),
		xlist[2], Insert Into( testVar, Eval List( {i, Row()} ) ),
		xlist[3],
			Insert Into( testVar, Eval List( {i, Row()} ) );
			testVar2 = Col Shuffle();,
		xlist[4], Insert Into( testVar, Eval List( {i, Row()} ) ),
		Insert Into( testVar, Eval List( {i, Row(), "error"} ) )
	);
);
```

**Code Explanation**:

1. Initialize `xlist` with variables.
2. Initialize empty list `testVar`.
3. Loop through `xlist` items.
4. Check if index `i` equals 3.
5. Open data table;
6. Set row to 1.
7. Match current `xlist` item.
8. For "age", insert index and row into `testVar`.
9. For "height", insert index and row into `testVar`.
10. For "weight", insert index and row into `testVar`, shuffle column.



### Example 2
> **Summary**: Runs data manipulation and filtering for specified variables in a JMP data table, utilizing a For loop to iterate over the list of variables.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #Filtering, #ForLoop, #JMPDataTable -->

**Code**:
```jsl
xlist = {"age", "height", "weight", "sex"};
testVar = [];
For( i = 1, i <= N Items( xlist ), i++,
	If( i == 3,
		dt = Open("data_table.jmp");
		Row() = 1;
	);
	MatchMZ( xlist[i],
		xlist[1], Insert Into( testVar, Eval List( {i, Row()} ) ),
		xlist[2], Insert Into( testVar, Eval List( {i, Row()} ) ),
		xlist[3],
			Insert Into( testVar, Eval List( {i, Row()} ) );
			testVar2 = Col Shuffle();,
		xlist[4], Insert Into( testVar, Eval List( {i, Row()} ) ),
		Insert Into( testVar, Eval List( {i, Row(), "error"} ) )
	);
);
```

**Code Explanation**:

1. Define variable `xlist`.
2. Initialize empty list `testVar`.
3. Start loop over `xlist`.
4. Check if index `i` is 3.
5. Open data table;
6. Set row pointer to 1.
7. Match current item in `xlist`.
8. For "age" or "height", insert index and row into `testVar`.
9. For "weight", insert index and row into `testVar`.
10. Shuffle column data into `testVar2`.



### Example 3
> **Summary**: Matches and inserts data from a specified table into an empty list, utilizing a For loop to iterate through the xlist items.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #TableOperations, #LoopControl, #ConditionalStatements -->

**Code**:
```jsl
xlist = {"age", "height", "weight", "sex"};
testVar = [];
For( i = 1, i <= N Items( xlist ), i++,
	If( i == 3,
		dt = Open("data_table.jmp");
		Row() = 1;
	);
	MatchV3( xlist[i],
		xlist[1], Insert Into( testVar, Eval List( {i, Row()} ) ),
		xlist[2], Insert Into( testVar, Eval List( {i, Row()} ) ),
		xlist[3],
			Insert Into( testVar, Eval List( {i, Row()} ) );
			testVar2 = Col Shuffle();,
		xlist[4], Insert Into( testVar, Eval List( {i, Row()} ) ),
		Insert Into( testVar, Eval List( {i, Row(), "error"} ) )
	);
);
```

**Code Explanation**:

1. Initialize variable `xlist`.
2. Initialize empty list `testVar`.
3. Loop through `xlist` items.
4. Check if index `i` equals 3.
5. Open data table;
6. Set row to 1.
7. Match current `xlist` item.
8. For `age`, insert index and row into `testVar`.
9. For `height`, insert index and row into `testVar`.
10. For `weight`, insert index and row into `testVar`; shuffle column.



## Col Shuffle using New Column
> **Summary**: Fits a parametric survival model with multiple effects and generates a profiler plot, utilizing data table manipulation and script execution in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ParametricSurvivalModel, #DataTableManipulation, #ScriptExecution, #ProfilerPlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Censor Shuffle", Formula( Col Stored Value( :Censor, Col Shuffle() ) ) );
dt << New Column( "Hours Shuffle", Formula( Col Stored Value( :Hours, Col Shuffle() ) ) );
Column( dt, "Censor Shuffle" ) << Suppress Eval;
Column( dt, "Hours Shuffle" ) << Suppress Eval;
FPS = dt << Run Script( "Fit Parametric Survival" );
rpt = Report( FPS );
ChiSqval = rpt["Whole Model Test"][1][3];
new_log = Collapse Whitespace( Log Capture( ChiSqval << Simulate( toSim, Out( :Hours ), In( :Hours Shuffle ) ) ) );
oracle_log = "Unable to perform simulation. The Column to Switch In (Hours Shuffle) must not have evaluation suppressed.";
FPS << close window;
```

**Code Explanation**:

1. Open data table.
2. Create new column for shuffled censor data.
3. Create new column for shuffled hours data.
4. Suppress evaluation on shuffled censor column.
5. Suppress evaluation on shuffled hours column.
6. Run parametric survival fit script.
7. Retrieve report from fit script.
8. Extract chi-square value from report.
9. Capture log output from chi-square simulation.
10. Compare captured log to expected error message.



