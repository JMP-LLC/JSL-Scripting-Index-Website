# Col Rank

## Col Rank using Row
### Example 1
> **Summary**: Runs data manipulation by iterating over a list of variables and performing conditional actions to populate an empty table.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #ConditionalActions, #TablePopulation, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Row() = 5;
xlist = {"1", "2", "3", "4"};
testVar = {};
For( i = 1, i <= N Items( xlist ), i++,
	y = "sex";
	If( i == 3, y = "height" );
	Match( xlist[i],
		xlist[1], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[2], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[3], Insert Into( testVar, Eval List( {i, y, Col Rank( Column( dt, Eval( y ) ) )} ) ),
		xlist[4], Insert Into( testVar, Eval List( {i, y} ) ),
		Insert Into( testVar, Eval List( {i, y, "error"} ) )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Set current row to 5.
3. Define variable list `xlist`.
4. Initialize empty list `testVar`.
5. Start loop for each item in `xlist`.
6. Set `y` to "sex".
7. Change `y` to "height" if index is 3.
8. Match item in `xlist` and perform actions.
9. Insert values into `testVar` based on match.
10. End loop.



### Example 2
> **Summary**: Runs data table manipulation by iterating through a list of variables and inserting values into a test variable, utilizing MatchMZ and Insert Into functions.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #MatchMZFunction, #InsertIntoFunction, #LoopControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Row() = 5;
xlist = {"1", "2", "3", "4"};
testVar = {};
For( i = 1, i <= N Items( xlist ), i++,
	y = "sex";
	If( i == 3, y = "height" );
	MatchMZ( xlist[i],
		xlist[1], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[2], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[3], Insert Into( testVar, Eval List( {i, y, Col Rank( Column( dt, Eval( y ) ) )} ) ),
		xlist[4], Insert Into( testVar, Eval List( {i, y} ) ),
		Insert Into( testVar, Eval List( {i, y, "error"} ) )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Set row index.
3. Define variable list.
4. Initialize test variable.
5. Start loop through list.
6. Set default column name.
7. Change column name for specific iteration.
8. Match current list item.
9. Insert values into test variable.
10. End loop.



### Example 3
> **Summary**: Runs data matching and insertion into a test variable based on a predefined list of values, utilizing the MatchV3 function.

<!-- Keywords: #JSLScripting, #DataMatching, #MatchV3, #InsertInto, #LoopControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Row() = 5;
xlist = {"1", "2", "3", "4"};
testVar = {};
For( i = 1, i <= N Items( xlist ), i++,
	y = "sex";
	If( i == 3, y = "height" );
	MatchV3( xlist[i],
		xlist[1], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[2], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[3], Insert Into( testVar, Eval List( {i, y, Col Rank( Column( dt, Eval( y ) ) )} ) ),
		xlist[4], Insert Into( testVar, Eval List( {i, y} ) ),
		Insert Into( testVar, Eval List( {i, y, "error"} ) )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Set row number.
3. Define variable list.
4. Initialize test variable.
5. Loop through list items.
6. Set y variable.
7. Change y for third item.
8. Match item and execute action.
9. Insert into test variable.
10. Repeat for all items.



