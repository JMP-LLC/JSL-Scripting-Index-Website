# Mixture Profiler

### Example 1
> **Summary**: Creates and customizes a Mixture Profiler object to analyze predicted ratings, utilizing term values for components, contour value for predicted rating, top factor, left factor, and right factor.

<!-- Keywords: #MixtureProfiler, #JMPScriptingLanguage, #PredictiveModeling, #DataVisualization, #CustomReporting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Mixture Profiler(
	Y( :Predicted Rating ),
	Mixture Profiler(
		1,
		Term Value(
			Mullet( 0.333333333333333, Lock( 0 ), Show( 1 ) ),
			Sheepshead( 0.333333333333333, Lock( 0 ), Show( 1 ) ),
			Croaker( 0.333333333333333, Lock( 0 ), Show( 1 ) ),
			Temperature( 400, Lock( 1 ), Show( 1 ) )
		),
		Contour Value( Predicted Rating( 4.5, Min( 3.5 ), Max( 5.5 ) ) ),
		Top Factor( Mullet ),
		Left Factor( Sheepshead ),
		Right Factor( Croaker )
	),
	SendToReport(
		Dispatch( {"Mixture Profiler"}, "Mixture Profiler", FrameBox,
			{DispatchSeg( Contour Seg( 1 ), {Line Color( "None" ), Fill Color( {213, 72, 87} )} )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create mixture profiler object.
3. Set response variable.
4. Configure mixture profiler settings.
5. Define term values for components.
6. Set contour value for predicted rating.
7. Specify top factor.
8. Specify left factor.
9. Specify right factor.
10. Customize report appearance.



### Example 2
> **Summary**: Launches Mixture Profiler on 'Pred Formula Y' data and captures log output, extracting the first word to a variable lc.

<!-- Keywords: #JMPScriptingLanguage, #MixtureProfiler, #LogCapture, #DataTable, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );
lc = Words( Log Capture( obj << Surface Profiler( 1 ) ), "\!N" )[1];
```

**Code Explanation**:

1. Open data_table data
2. Launch Mixture Profiler on "Pred Formula Y".
3. Capture log output.
4. Extract first word from log.
5. Assign extracted word to variable lc.



