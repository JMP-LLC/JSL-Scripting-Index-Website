# Reliability Forecast

## Reliability Forecast using Function
> **Summary**: Runs the reliability forecast analysis for a data table, utilizing the Subscribe and Unsubscribe functions to track events and perform calculations.

<!-- Keywords: #JMPScriptingLanguage, #ReliabilityForecast, #DataTableOperations, #SubscribeandUnsubscribe, #Event-DrivenAnalysis -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
on tbl open = Function( {dt2},
	dt2 << Subscribe( "CrashySub", On Add Columns( Function( {d2t, cols}, . ) ) )
);
Subscribe to Data Table List( "CrashyListSub", On Open( on tbl open ) );
dt2 << Reliability Forecast( Input Format( Nevada ), Production Count( :Volume ), Timestamp( :Time ), Failure Count( :"08/2000"n ) );
dt2 << Unsubscribe( "CrashySub", All );
Unsubscribe to Data Table List( "CrashyListSub", "ALL" );
```

**Code Explanation**:

1. Open data table.
2. Define function for table open event.
3. Subscribe to table open event.
4. Subscribe to data table list.
5. Perform reliability forecast analysis.
6. Unsubscribe from table event.
7. Unsubscribe from data table list.



### Example 1
> **Summary**: Runs a reliability forecast analysis by opening a data table, setting input format to Nevada, and specifying failure counts for each month.

<!-- Keywords: #ReliabilityForecast, #JMPScriptingLanguage, #DataAnalysis, #Setup, #TimeSeries -->

**Code**:
```jsl
dt = Open("data_table.jmp");
plat = Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Sold Quantity ),
	Interval Censored Failure( 0 ),
	Timestamp( :Sold Month ),
	Failure Count(
		:Name( "08/2009" ), :Name( "09/2009" ), :Name( "10/2009" ), :Name( "11/2009" ), :Name( "12/2009" ), :Name( "01/2010" ),
		:Name( "02/2010" )
	),
	Life Time Unit( Month ), 
);
plat << Relaunch Analysis;
wn = Window( "Reliability Forecast" );
```

**Code Explanation**:

1. Open data table.
2. Create reliability forecast platform.
3. Set input format to Nevada.
4. Use sold quantity for production count.
5. Define interval censored failure at zero.
6. Use sold month as timestamp.
7. Specify failure counts for each month.
8. Set lifetime unit to month.
9. Relaunch the analysis.
10. Open reliability forecast window.



### Example 2
> **Summary**: Runs a reliability forecast analysis by opening a data table, specifying input format and censor variable, and launching an analysis window.

<!-- Keywords: #ReliabilityForecast, #JMPScriptingLanguage, #DataAnalysis, #TimeToEvent, #CensorVariable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
rf = Reliability Forecast(
	Input Format( Time to Event ),
	Time to Event( :Time ),
	Censor( :censor ),
	Life Time Unit( Numeric ),
	Forecast Start( 0 ),
	Life Time Unit( Numeric ),
	Censor Code( 1 )
);
rf << Relaunch Analysis;
wn = Window( "Reliability Forecast" );
```

**Code Explanation**:

1. Open data table.
2. Perform reliability forecast.
3. Set input format.
4. Specify time to event.
5. Define censor variable.
6. Set life time unit.
7. Define forecast start.
8. Confirm life time unit.
9. Set censor code.
10. Launch analysis window.



### Example 3
> **Summary**: Runs the creation and relaunch of a reliability forecast analysis, utilizing two data tables with specific parameters for production and failure data.

<!-- Keywords: #ReliabilityForecast, #JMPScriptingLanguage, #DataTables, #LifeTimeUnit, #RelaunchAnalysis -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
rf = dt1 << Reliability Forecast(
	Input Format( Dates ),
	Production Data Table( Small Production part1, Production Count( :Sold Quantity ), Timestamp( :Sold Month ) ),
	Failure Data Table(
		Small Production part2,
		Failure Time( :Return Month ),
		Timestamp( :Sold Month ),
		Failure Count( :Return Quantity )
	),
	Life Time Unit( Month )
);
rf << Relaunch Analysis;
wn = Window( "Reliability Forecast" );
```

**Code Explanation**:

1. Open data table.
2. Open data table.
3. Create reliability forecast object.
4. Set input format to dates.
5. Define production data table parameters.
6. Define failure data table parameters.
7. Set life time unit to months.
8. Relaunch the analysis.
9. Get window reference.
10. Display window.



