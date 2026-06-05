# Fit Two Level Screening

### Example 1
> **Summary**: Runs a two-level screening model to evaluate the statistical properties of a designed experiment, using the Fit Two Level Screening function in JMP.

<!-- Keywords: #JMP, #DOE, #TwoLevelScreening, #DesignOfExperiments, #StatisticalAnalysis -->

**Code**:
```jsl
// Screening
// Open data table
dt = Open("data_table.jmp");
// Screening
Fit Two Level Screening(
	Y( :Depth ),
	X( :Operator, :Speed, :Current )
);
```

**Code Explanation**:

1. Open data table.
2. Fit two-level screening model.
3. Set response variable: Depth.
4. Include predictors: Operator, Speed, Current.



### Example 2
> **Summary**: Opens a data table, fits a two-level screening model to analyze the relationship between response variable Percent Reacted and predictor variables Feed Rate, Catalyst, Stir Rate, Temperature, and Concentration.

<!-- Keywords: #TwoLevelScreening, #DesignOfExperiments, #JMPScriptingLanguage, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// Screening
// Open data table
dt = Open("data_table.jmp");
// Screening
Fit Two Level Screening(
	Y( :Percent Reacted ),
	X(
		:Feed Rate, :Catalyst, :Stir Rate,
		:Temperature, :Concentration
	)
);
```

**Code Explanation**:

1. Open table.
2. Fit two-level screening model.
3. Set response variable.
4. Specify predictor variables.
5. Analyze data.



### Example 3
> **Summary**: Runs two-level screening analysis on a designed experiment, visualizing the results with customized half-normal plots and geodesic scales.

<!-- Keywords: #JSLScripting, #TwoLevelScreening, #DOE, #HalfNormalPlot, #GeodesicScale -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Fit Two Level Screening(
	Y( :Strength ),
	X( :Liquid, :Sugar, :Flour, :Sifted, :Type, :Temp, :Salt, :Clamp, :Coat ),
	SendToReport(
		Dispatch( {"Half Normal Plot"}, "1", ScaleBox,
			{Scale( "Geodesic" ), Format( "Custom", Formula( value * 17.3 ), 12 ), Minor Ticks( 1 )}
		),
		Dispatch( {"Half Normal Plot"}, "2", ScaleBox, {Scale( "Geodesic US" ), Format( "Best", 12 ), Minor Ticks( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit two-level screening model.
3. Set response variable.
4. Specify predictor variables.
5. Customize half normal plot.
6. Set scale to geodesic.
7. Apply custom formatting.
8. Set minor ticks.
9. Customize second half normal plot.
10. Set scale to geodesic US.



### Example 4
> **Summary**: Evaluates a designed experiment using two-level screening, fitting a model to predict Percent Reacted based on Feed Rate, Catalyst, Stir Rate, Temperature, and Concentration.

<!-- Keywords: #TwoLevelScreening, #DesignOfExperiments, #JMPScriptingLanguage, #DOE, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Two Level Screening( Y( :Percent Reacted ), X( :Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration ) );
Report( obj )[Button Box( 1 )] << Click;
Window( "Selected Model" ) << Close Window;
```

**Code Explanation**:

1. Open table.
2. Fit two-level screening model.
3. Click "Done" button.
4. Close "Selected Model" window.



### Example 5
> **Summary**: Evaluates a designed experiment using two-level screening and logs capture button clicks, leveraging the Fit Two Level Screening function in JMP.

<!-- Keywords: #JMPDOE, #TwoLevelScreening, #LogCapture, #DesignExperiment, #FitFunction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Two Level Screening( Y( :Weight ), X( :Country, :Type, :Turning Circle ) );
Log Capture( (obj << report)[Button Box( 2 )] << click );
```

**Code Explanation**:

1. Open data table.
2. Fit two-level screening model.
3. Log capture button click.



### Example 6
> **Summary**: Evaluates a designed experiment by fitting a two-level screening model and removing specific columns from the data table.

<!-- Keywords: #JMPScriptingLanguage, #Two-LevelScreening, #DesignofExperiments, #DataTableManagement, #DOE -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Two Level Screening( Y( :Weight ), X( :Country, :Type, :Turning Circle ) );
dt << Delete Columns( {1, 2, 4} );
```

**Code Explanation**:

1. Open data table.
2. Fit two-level screening model.
3. Remove specific columns.



## Fit Two level Screening 
> **Summary**: Fits a Two Level Screening model to a data table, applying local data filters, and generating reports while controlling automatic recalculation.

<!-- Keywords: #JSLScriptingLanguage, #TwoLevelScreeningModel, #LocalDataFilter, #AutomaticRecalculation, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Two level Screening(
	Y( :Y ),
	X( :X1, :X2, :X3, :X4, :X5, :X6, :X7, :X8, :X9, :X10, :X11, :X12, :X13, :X14, :X15, :X16, :X17, :X18 ),
	Local Data Filter( Add Filter( columns( :Y ), Where( :Y >= 5 & :Y <= 15 ) ), Mode( Select( 0 ), Show( 1 ), Include( 1 ) ) ), 
);
obj << Automatic Recalc( 1 );
dt << Select Where( :X1 == -1 );
dt << Exclude();
rpt = Report( obj );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Fit Two Level Screening(
	Y( :Y ),
	X( :X1, :X2, :X3, :X4, :X5, :X6, :X7, :X8, :X9, :X10, :X11, :X12, :X13, :X14, :X15, :X16, :X17, :X18 ),
	Local Data Filter( Add Filter( columns( :Y ), Where( :Y >= 5 & :Y <= 15 ) ), Mode( Select( 0 ), Show( 1 ), Include( 1 ) ) ), 
);
obj << Automatic Recalc( 0 );
dt << Select Where( :X1 == -1 );
dt << Exclude();
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table;
2. Fit Two Level Screening model.
3. Apply local data filter on Y.
4. Enable automatic recalculation.
5. Select rows where X1 equals -1.
6. Exclude selected rows.
7. Generate report.
8. Close the dataset without saving.
9. Reopen Supersaturated.jmp.
10. Refit Two Level Screening model.
11. Apply local data filter on Y.
12. Disable automatic recalculation.
13. Select rows where X1 equals -1.
14. Exclude selected rows.
15. Generate report.



