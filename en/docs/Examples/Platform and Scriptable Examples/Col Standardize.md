# Col Standardize

## Col Standardize using For
### Example 1
> **Summary**: Generates a customized data table by matching values from a specified list and inserting corresponding data into an empty list.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ConditionalStatements, #MatchFunction, #InsertInto -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xlist = {"1", "2", "3", "4"};
testVar = {};
For( i = 1, i <= N Items( xlist ), i++,
	y = "sex";
	If( i == 3,
		y = "height";
		Row() = 1;
	);
	Match( xlist[i],
		xlist[1], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[2], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[3], Insert Into( testVar, Eval List( {i, y, Round( Col Standardize( Column( dt, y ) ), 3 )} ) ),
		xlist[4], Insert Into( testVar, Eval List( {i, y} ) ),
		Insert Into( testVar, Eval List( {i, y, "error"} ) )
	);
);
```

**Code Explanation**:

1. Open data table;
2. Initialize xlist with four strings.
3. Initialize empty list testVar.
4. Start loop with i from 1 to 4.
5. Set y to "sex".
6. If i is 3, set y to "height" and reset row to 1.
7. Match xlist[i] value.
8. Insert {i, y} into testVar for first two matches.
9. For third match, insert {i, y, standardized height rounded to 3}.
10. Insert {i, y} into testVar for fourth match.



### Example 2
> **Summary**: Generates a distribution analysis for continuous variables in a specified data table using MatchMZ and conditional logic.

<!-- Keywords: #JSLScripting, #DistributionAnalysis, #ConditionalLogic, #MatchMZ, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xlist = {"1", "2", "3", "4"};
testVar = {};
For( i = 1, i <= N Items( xlist ), i++,
	y = "sex";
	If( i == 3,
		y = "height";
		Row() = 1;
	);
	MatchMZ( xlist[i],
		xlist[1], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[2], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[3], Insert Into( testVar, Eval List( {i, y, Round( Col Standardize( Column( dt, y ) ), 3 )} ) ),
		xlist[4], Insert Into( testVar, Eval List( {i, y} ) ),
		Insert Into( testVar, Eval List( {i, y, "error"} ) )
	);
);
```

**Code Explanation**:

1. Open data_table data
2. Define xlist with values.
3. Initialize empty testVar list.
4. Start loop over xlist items.
5. Set y variable to "sex".
6. Change y to "height" for third iteration.
7. Reset row to 1 if y changed.
8. Use MatchMZ for conditional logic.
9. Insert {i, y} into testVar for first two xlist items.
10. Insert {i, y, standardized height} for third item.
11. Insert {i, y} into testVar for fourth item.
12. Handle any unmatched cases with error message.



### Example 3
> **Summary**: Generates a list containing variables and their corresponding values from a specified data table, utilizing a For loop and MatchV3 function.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #MatchV3Function, #ForLoop, #VariableListGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
xlist = {"1", "2", "3", "4"};
testVar = {};
For( i = 1, i <= N Items( xlist ), i++,
	y = "sex";
	If( i == 3,
		y = "height";
		Row() = 1;
	);
	MatchV3( xlist[i],
		xlist[1], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[2], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[3], Insert Into( testVar, Eval List( {i, y, Round( Col Standardize( Column( dt, y ) ), 3 )} ) ),
		xlist[4], Insert Into( testVar, Eval List( {i, y} ) ),
		Insert Into( testVar, Eval List( {i, y, "error"} ) )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Define variable `xlist`.
3. Initialize empty list `testVar`.
4. Start loop over `xlist`.
5. Set default variable `y` to "sex".
6. Change `y` to "height" on third iteration.
7. Reset row index to 1 on third iteration.
8. Match value in `xlist`.
9. Insert evaluated list into `testVar`.
10. End loop.



