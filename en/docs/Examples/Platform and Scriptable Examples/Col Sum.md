# Col Sum

## Col Sum using For
### Example 1
> **Summary**: Generates a custom data table by iterating through a list and inserting values based on specific conditions, utilizing For loop and Match function.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #ConditionalInsertion, #MatchFunction, #ForLoop -->

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
		xlist[3], Insert Into( testVar, Eval List( {i, y, Col Sum( Column( dt, y ) )} ) ),
		xlist[4], Insert Into( testVar, Eval List( {i, y} ) ),
		Insert Into( testVar, Eval List( {i, y, "error"} ) )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Define list `xlist`.
3. Initialize empty list `testVar`.
4. Loop through `xlist` items.
5. Set default `y` to "sex".
6. Change `y` to "height" for third iteration.
7. Match current `xlist` item.
8. Insert index and `y` into `testVar`.
9. For third item, insert sum of column `y`.
10. Continue loop until completion.



### Example 2
> **Summary**: Generates a custom data table by matching specific values in an xlist and inserting corresponding information into a testVar list.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ConditionalStatements, #MatchMZFunction, #InsertIntoFunction -->

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
		xlist[3], Insert Into( testVar, Eval List( {i, y, Col Sum( Column( dt, y ) )} ) ),
		xlist[4], Insert Into( testVar, Eval List( {i, y} ) ),
		Insert Into( testVar, Eval List( {i, y, "error"} ) )
	);
);
```

**Code Explanation**:

1. Open data table;
2. Define xlist with values.
3. Initialize empty testVar list.
4. Loop through xlist items.
5. Set y to "sex".
6. Change y to "height" for third item.
7. Match xlist item to corresponding action.
8. Insert i and y into testVar.
9. For third item, add column sum of y.
10. Handle unmatched cases by adding error message.



### Example 3
> **Summary**: Generates a custom data table with specific variables and calculations, utilizing a For loop and MatchV3 function.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #CustomTableCreation, #ConditionalLogic, #MatchV3Function -->

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
		xlist[3], Insert Into( testVar, Eval List( {i, y, Col Sum( Column( dt, y ) )} ) ),
		xlist[4], Insert Into( testVar, Eval List( {i, y} ) ),
		Insert Into( testVar, Eval List( {i, y, "error"} ) )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Define xlist with four items.
3. Initialize empty list testVar.
4. Start loop from 1 to 4.
5. Set y to "sex".
6. If i equals 3, set y to "height".
7. Match xlist item with cases.
8. For xlist[1] or [2], add {i, y} to testVar.
9. For xlist[3], add {i, y, column sum} to testVar.
10. For xlist[4], add {i, y} to testVar.



