# Col Quantile

## Col Quantile using For
### Example 1
> **Summary**: Generates a test variable by matching xlist items and inserting corresponding values into the testVar list, utilizing For() loop and Match() function.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #ConditionalLogic, #ListHandling, #MatchFunction -->

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
		xlist[3], Insert Into( testVar, Eval List( {i, y, Col Quantile( Column( dt, y ), 0.5 )} ) ),
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
5. Set y to "sex".
6. Change y to "height" for i=3.
7. Match xlist item and insert into testVar.
8. Insert i, y into testVar.
9. Insert i, y, median(y) into testVar for i=3.
10. Insert i, y into testVar for other cases.



### Example 2
> **Summary**: Generates a distribution analysis for continuous variables in a specified data table using the Distribution platform.

<!-- Keywords: #Distribution, #ContinuousVariables, #DataAnalysis, #JSLScriptingLanguage, #Automation -->

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
		xlist[3], Insert Into( testVar, Eval List( {i, y, Col Quantile( Column( dt, y ), 0.5 )} ) ),
		xlist[4], Insert Into( testVar, Eval List( {i, y} ) ),
		Insert Into( testVar, Eval List( {i, y, "error"} ) )
	);
);
```

**Code Explanation**:

1. Open data table;
2. Define xlist with 4 elements.
3. Initialize empty testVar list.
4. Start loop from 1 to 4.
5. Set y to "sex".
6. Change y to "height" if i equals 3.
7. Match xlist[i] with cases.
8. Insert {i, y} into testVar for cases 1, 2, 4.
9. Insert {i, y, median} into testVar for case 3.
10. End loop.



### Example 3
> **Summary**: Generates a test variable by matching values from a specified list and inserting corresponding data into the variable, utilizing MatchV3 and Insert Into functions.

<!-- Keywords: #JSLScriptingLanguage, #MatchV3, #InsertInto, #DataManipulation, #TestVariable -->

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
		xlist[3], Insert Into( testVar, Eval List( {i, y, Col Quantile( Column( dt, y ), 0.5 )} ) ),
		xlist[4], Insert Into( testVar, Eval List( {i, y} ) ),
		Insert Into( testVar, Eval List( {i, y, "error"} ) )
	);
);
```

**Code Explanation**:

1. Open data table;
2. Define xlist with four items.
3. Initialize empty testVar list.
4. Loop through each item in xlist.
5. Set y to "sex".
6. Change y to "height" if i equals 3.
7. Use MatchV3 to handle different cases.
8. Insert i and y into testVar for first two items.
9. Insert i, y, and median of y column for third item.
10. Insert i and y into testVar for fourth item.



