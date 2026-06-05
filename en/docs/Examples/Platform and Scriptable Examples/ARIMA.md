# ARIMA

## ARIMA using For
### Example 1
> **Summary**: Generates a forecasted value for 'Steel Shipments' based on ARIMA analysis, using the Match function to handle different cases and populate a list with relevant data.

<!-- Keywords: #JSLScriptingLanguage, #ARIMAForecasting, #MatchFunction, #ListHandling, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
y = "";
xlist = {"1", "2", "3", "4"};
testVar = {};
For( i = 1, i <= N Items( xlist ), i++,
	If( i == 3,
		y = Column( "Steel Shipments" )
	);
	Match( xlist[i],
		xlist[1], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[2], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[3],
			Insert Into(
				testVar,
				Eval List(
					{i, y, Round(
						ARIMA Forecast(
							y,
							96,
							ARIMA( 1, 0, 1 ),
							{AR Coefficients( {0.900397691783565} ), MA Coefficients( {0.483316746530245} ), Intercept( 6466.03264802329 )},
							1,
							2
						),
						3
					)}
				)
			),
		xlist[4], Insert Into( testVar, Eval List( {i, y} ) ),
		Insert Into( testVar, Eval List( {i, y, "error"} ) )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Initialize variable `y` as empty string.
3. Define list `xlist` with four elements.
4. Initialize empty list `testVar`.
5. Loop through each item in `xlist`.
6. If index `i` equals 3, assign column "Steel Shipments" to `y`.
7. Use `Match` to handle different cases based on `xlist[i]`.
8. For first two cases, insert `{i, y}` into `testVar`.
9. For third case, insert `{i, y, forecast value}` into `testVar`.
10. For fourth case, insert `{i, y}` into `testVar`.



### Example 2
> **Summary**: Generates a forecasted distribution analysis for continuous variables in a specified data table using ARIMA forecasting and MatchMZ matching.

<!-- Keywords: #JSLScripting, #ARIMAForecasting, #MatchMZMatching, #DataAnalysis, #Forecasting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
y = "";
xlist = {"1", "2", "3", "4"};
testVar = {};
For( i = 1, i <= N Items( xlist ), i++,
	If( i == 3,
		y = Column( "Steel Shipments" )
	);
	MatchMZ( xlist[i],
		xlist[1], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[2], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[3],
			Insert Into(
				testVar,
				Eval List(
					{i, y, Round(
						ARIMA Forecast(
							y,
							96,
							ARIMA( 1, 0, 1 ),
							{AR Coefficients( {0.900397691783565} ), MA Coefficients( {0.483316746530245} ), Intercept( 6466.03264802329 )},
							1,
							2
						),
						3
					)}
				)
			),
		xlist[4], Insert Into( testVar, Eval List( {i, y} ) ),
		Insert Into( testVar, Eval List( {i, y, "error"} ) )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Initialize variable `y`.
3. Define list `xlist`.
4. Initialize empty list `testVar`.
5. Loop through `xlist` items.
6. Set `y` for third item.
7. Match current `xlist` item.
8. Insert `i` and `y` for first two items.
9. Insert `i`, `y`, and ARIMA forecast for third item.
10. Insert `i` and `y` for fourth item.



### Example 3
> **Summary**: Generates a distribution analysis for continuous variables in a specified data table using the Distribution platform, incorporating ARIMA forecasting and error handling.

<!-- Keywords: #JSLScriptingLanguage, #Distribution, #ARIMAForecasting, #ErrorHandling, #DataTableAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
y = "";
xlist = {"1", "2", "3", "4"};
testVar = {};
For( i = 1, i <= N Items( xlist ), i++,
	If( i == 3,
		y = Column( "Steel Shipments" )
	);
	MatchV3( xlist[i],
		xlist[1], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[2], Insert Into( testVar, Eval List( {i, y} ) ),
		xlist[3],
			Insert Into(
				testVar,
				Eval List(
					{i, y, Round(
						ARIMA Forecast(
							y,
							96,
							ARIMA( 1, 0, 1 ),
							{AR Coefficients( {0.900397691783565} ), MA Coefficients( {0.483316746530245} ), Intercept( 6466.03264802329 )},
							1,
							2
						),
						3
					)}
				)
			),
		xlist[4], Insert Into( testVar, Eval List( {i, y} ) ),
		Insert Into( testVar, Eval List( {i, y, "error"} ) )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Initialize variables.
3. Loop through list items.
4. Check if index is 3.
5. Assign column to variable.
6. Match list item 1.
7. Insert into testVar.
8. Match list item 2.
9. Insert into testVar.
10. Match list item 3.
11. Perform ARIMA forecast.
12. Round forecast value.
13. Insert into testVar.
14. Match list item 4.
15. Insert into testVar.
16. Handle unmatched cases.



