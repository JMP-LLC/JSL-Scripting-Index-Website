# Eval

### Example 1
> **Summary**: Selects and opens specific columns from a data table using Eval and select columns functions.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ColumnSelection, #EvalFunction, #SelectColumns -->

**Code**:
```jsl
mylist = {:age, :height};
dt3 = Open( "$SAMPLE_DATA/data_table.jmp", select columns( Eval( mylist ) ) );
```

**Code Explanation**:

1. Define variable `mylist`.
2. Assign column names to `mylist`.
3. Open data table.
4. Select specified columns for opening.



### Example 2
> **Summary**: Selects and opens a data table with specified columns, utilizing the Eval function to dynamically define column names.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnSelection, #EvalFunction, #JMPScripting -->

**Code**:
```jsl
mylist = {:sex, :weight};
dt3 = Open( "$SAMPLE_DATA/data_table.jmp", select columns( Eval( mylist ) ) );
```

**Code Explanation**:

1. Define variable `mylist`.
2. Assign column names to `mylist`.
3. Open data table;
4. Select specified columns.
5. Store opened table in `dt3`.



## Eval using GetAsMatrix
> **Summary**: Runs the extraction and transformation of data table columns, defining variables and matrices for further analysis.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #MatrixOperations, #VariableDefinition, #DataTransformation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
vars = 4 :: 5;
Answer = [59 95, 61 123, 55 74, 66 145, 52 64, 60 84, 61 128, 51 79, 60 112, 61 107, 56 67, 65 98, 63 105, 58 95, 59 79, 61 81, 62 91, 65
142, 63 84, 62 85, 63 93, 64 99, 65 119, 64 92, 68 112, 64 99, 69 113, 62 92, 64 112, 67 128, 65 111, 66 105, 62 104, 66 106, 65 112, 60
115, 68 128, 62 116, 68 134, 70 172];
xData = dt << GetAsMatrix( 4 :: 5 );
xData2 = dt << GetAsMatrix( vars );
xData3 = dt << GetAsMatrix( Eval( vars ) );
xData4 = dt << GetAsMatrix( Eval( 4 :: 5 ) );
```

**Code Explanation**:

1. Open data table;
2. Define variables 4 to 5.
3. Define Answer matrix.
4. Extract columns 4 to 5 as xData.
5. Extract columns 4 to 5 as xData2.
6. Extract columns 4 to 5 as xData3.
7. Extract columns 4 to 5 as xData4.



## Eval using For
### Example 1
> **Summary**: Creates a test variable by iterating over a list and matching specific conditions to assign values.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #ConditionalLogic, #MatrixOperations, #TestVariableCreation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xlist = {"1", "2", "3", "4"};
testVar = {};
For( i = 1, i <= N Items( xlist ), i++,
	y = "sex";
	If( i == 3, y = "height" );
	Match( xlist[i],
		xlist[1], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[2], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[3],
			Insert Into( testVar, Eval List( {i, y} ) );
			testVar2 = Random Shuffle( dt << Get As Matrix( {Eval( y )} ) );,
		xlist[4], Insert Into( testVar, Eval List( {i, y} ) ),
		Insert Into( testVar, Eval List( {i, y, "error"} ) )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Define list `xlist`.
3. Initialize empty list `testVar`.
4. Start loop over `xlist` items.
5. Set `y` to "sex".
6. Change `y` to "height" if `i` equals 3.
7. Match current `xlist` item.
8. Insert `{i, y}` into `testVar`.
9. For `xlist[3]`, shuffle column matrix.
10. Insert `{i, y}` into `testVar`.



### Example 2
> **Summary**: Generates a test variable by matching xlist items with cases and inserting index and y values, while also shuffling matrix of y values for the third item.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ConditionalStatements, #MatrixManipulation, #LoopControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xlist = {"1", "2", "3", "4"};
testVar = {};
For( i = 1, i <= N Items( xlist ), i++,
	y = "sex";
	If( i == 3, y = "height" );
	MatchMZ( xlist[i],
		xlist[1], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[2], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[3],
			Insert Into( testVar, Eval List( {i, y} ) );
			testVar2 = Random Shuffle( dt << Get As Matrix( {Eval( y )} ) );,
		xlist[4], Insert Into( testVar, Eval List( {i, y} ) ),
		Insert Into( testVar, Eval List( {i, y, "error"} ) )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Define xlist variable.
3. Initialize testVar list.
4. Loop through xlist items.
5. Set y variable to "sex".
6. Change y to "height" for third item.
7. Match xlist item with cases.
8. Insert index and y into testVar.
9. For third item, shuffle matrix of y values.
10. Insert shuffled matrix into testVar2.



### Example 3
> **Summary**: Generates a distribution analysis for continuous variables in a specified data table using the Distribution platform, with interactive features and conditional logic.

<!-- Keywords: #JSLScriptingLanguage, #Distribution, #ConditionalLogic, #InteractiveFeatures, #DataTableAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xlist = {"1", "2", "3", "4"};
testVar = {};
For( i = 1, i <= N Items( xlist ), i++,
	y = "sex";
	If( i == 3, y = "height" );
	MatchV3( xlist[i],
		xlist[1], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[2], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[3],
			Insert Into( testVar, Eval List( {i, y} ) );
			testVar2 = Random Shuffle( dt << Get As Matrix( {Eval( y )} ) );,
		xlist[4], Insert Into( testVar, Eval List( {i, y} ) ),
		Insert Into( testVar, Eval List( {i, y, "error"} ) )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Define `xlist` with values "1" to "4".
3. Initialize empty list `testVar`.
4. Loop through each item in `xlist`.
5. Set `y` to "sex".
6. Change `y` to "height" if `i` equals 3.
7. Match `xlist[i]` value.
8. Insert `{i, y}` into `testVar` for matches 1 and 2.
9. For match 3, insert `{i, y}` into `testVar`.
10. Shuffle column `y` data and store in `testVar2`.



## Eval using Summarize
### Example 1
> **Summary**: Runs data summarization by age and sex, calculating the mean height for each group.

<!-- Keywords: #JSLScriptingLanguage, #DataSummarization, #ByGroups, #MeanHeight, #InteractiveAnalysis -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
byList2 = {"age", "sex"};
Summarize( var2a = By( Eval( byList2 ) ), var2b = Mean( :height ) );
```

**Code Explanation**:

1. Open data table;
2. Define byList2 variables.
3. Summarize data by age and sex.
4. Calculate mean height for each group.



### Example 2
> **Summary**: Runs the summarization of data by 'age' and 'sex', calculating the mean height for each combination.

<!-- Keywords: #JSLScriptingLanguage, #DataSummarization, #ByGrouping, #MeanCalculation, #JMP -->

**Code**:
```jsl
dt3 = Open("data_table.jmp");
byList2 = {"age", "sex"};
Summarize( var3varlista = By( Eval( byList2 ) ), var3varlistb = Mean( :height ) );
Summarize( var3explicitlista = By( {"age", "sex"} ), var3explicitlistb = Mean( :height ) );
Summarize( var3simplelista = By( "age", "sex" ), var3simplelistb = Mean( :height ) );
```

**Code Explanation**:

1. Open data table;
2. Define variable `byList2` with "age", "sex".
3. Summarize data by `byList2`, calculate mean of height.
4. Summarize data by {"age", "sex"}, calculate mean of height.
5. Summarize data by "age", "sex", calculate mean of height.



