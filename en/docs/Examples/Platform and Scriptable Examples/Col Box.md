# Col Box

## Col Box using Run Script
### Example 1
> **Summary**: Generates a Bivariate analysis report with formatted parameter estimates and saves it to a temporary file.

<!-- Keywords: #JSLScriptingLanguage, #BivariateAnalysis, #ParameterEstimates, #ReportGeneration, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Run Script( "Bivariate" );
Report( biv )["Linear Fit", "Parameter Estimates", Number Col Box( "Std Error" )] << Set Format( "Best", 6 );
Report( biv ) << Save Window Report( "$TEMP/platform.jrp", embed data( 0 ) );
Report( biv ) << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Run Bivariate analysis script.
3. Format parameter estimates.
4. Save report to temporary file.
5. Close Bivariate window.



### Example 2
> **Summary**: Generates a Bivariate analysis report, formatting linear fit parameters and saving to a temporary file.

<!-- Keywords: #JSLScriptingLanguage, #BivariateAnalysis, #LinearFit, #ReportGeneration, #PathDiagramProperties -->

**Code**:
```jsl
dt = Open("data_table.jmp");
biv = dt << Run Script( "Bivariate" );
Report( biv )["Linear Fit", "Parameter Estimates", Number Col Box( "Std Error" )] << Set Format( "Best", 6 );
Report( biv ) << Save Window Report( "$TEMP/platform.jrp", embed data( 0 ) );
Report( biv ) << Close Window;
Open( "$TEMP/platform.jrp" );
```

**Code Explanation**:

1. Open data table;
2. Run Bivariate analysis script.
3. Format linear fit report.
4. Save report to temporary file.
5. Close Bivariate window.
6. Open saved report file.



### Example 3
> **Summary**: Executes a SEM script with Bollen (1989) MIIV-2SLS Estimator and configures model diagnostics for analysis.

<!-- Keywords: #JMPScriptingLanguage, #SEMAnalysis, #Bollen1989, #MIIV-2SLSEstimator, #ModelDiagnostics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Run Script( "SEM: Bollen (1989) MIIV-2SLS Estimator" );
rpt = Current Report();
modelCompOpen = rpt["Model Diagnostics"] << set open;
rpt["Model Specification", Tab Page Box( 3 ), String Col Box( "Name" )] << set selected rows( [2] );
```

**Code Explanation**:

1. Open data table.
2. Run SEM script.
3. Get current report.
4. Open model diagnostics.
5. Select specific row in report.



### Example 4
> **Summary**: Runs the extraction and conversion of a parametric survival fit report from a script, retrieving the fourth column box as a matrix.

<!-- Keywords: #JSLScriptingLanguage, #ParametricSurvivalFit, #ReportExtraction, #MatrixConversion, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ps = dt << Run Script( "Fit Parametric Survival" );
cv = Report( ps )["Parametric Survival Fit"][Number Col Box( 4 )] << get as matrix;
```

**Code Explanation**:

1. Open table.
2. Run script "Fit Parametric Survival".
3. Extract report from script.
4. Access "Parametric Survival Fit" section.
5. Get fourth column box.
6. Convert to matrix.
7. Assign to variable cv.



### Example 5
> **Summary**: Runs the extraction and conversion of a Whole Model section from a Proportional Hazards script report, returning the result as a matrix.

<!-- Keywords: #JSLScriptingLanguage, #ProportionalHazards, #WholeModel, #MatrixConversion, #ReportExtraction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ph = dt << Run Script( "Fit Proportional Hazards" );
wm = Report( ph )["Whole Model"][Number Col Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open table.
2. Run script "Fit Proportional Hazards".
3. Extract report from script.
4. Access "Whole Model" section.
5. Get first number column box.
6. Convert to matrix.
7. Assign to variable wm.



## Col Box using Log Capture
### Example 1
> **Summary**: Process of running a script, capturing the report object, and extracting summary data from a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #ReportObjectHandling, #ScriptExecution, #SummaryDataExtraction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture( obj = dt << Run Script( "Fit Life by X" ) );
rp = Report( obj );
summdata = rp["Summary of Data"][Number Col Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Run script "Fit Life by X".
3. Capture report object.
4. Extract summary report.
5. Retrieve data from box.
6. Convert to matrix.



### Example 2
> **Summary**: Process of setting missing value codes, running a script, capturing report summaries, and reverting data tables for multiple columns.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #MissingValueCodes, #ReportSummaries, #NevadaFormat -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	dt:Sold Quantity << Set Property( "Missing Value Codes", 2600 );
	rf1 = dt << Run Script( "Nevada Format" );
	rv1 = Report( rf1 )["Summary of Data"][Number Col Box( 1 )] << get as matrix;
	dt:Sold Quantity[dt << get rows where( Col Stored Value( :Sold Quantity ) == 2600 )] = .;
	rf2 = dt << Run Script( "Nevada Format" );
	rv2 = Report( rf2 )["Summary of Data"][Number Col Box( 1 )] << get as matrix;
	dt = dt << Revert;
	dt:Sold Month << Set Property( "Missing Value Codes", 3345148800 );
	rf1 = dt << Run Script( "Nevada Format" );
	rv1 = Report( rf1 )["Summary of Data"][Number Col Box( 1 )] << get as matrix;
	dt:Sold Month[7] = .;
	rf2 = dt << Run Script( "Nevada Format" );
	rv2 = Report( rf2 )["Summary of Data"][Number Col Box( 1 )] << get as matrix;
	dt = dt << Revert;
	dt:"01/2010" << Set Property( "Missing Value Codes", {18, 6} );
	rf1 = dt << Run Script( "Nevada Format" );
	rv1 = Report( rf1 )["Summary of Data"][Number Col Box( 1 )] << get as matrix;
	dt:"01/2010"[{1, 6}] = .;
	rf2 = dt << Run Script( "Nevada Format" );
	rv2 = Report( rf2 )["Summary of Data"][Number Col Box( 1 )] << get as matrix;
);
```

**Code Explanation**:

1. Open data table.
2. Set missing value code.
3. Run script "Nevada Format".
4. Capture report summary.
5. Replace values with missing.
6. Run script again.
7. Capture new report summary.
8. Revert data table.
9. Set another missing value code.
10. Repeat steps 3-8 for different columns.



### Example 3
> **Summary**: Process of running 'Fit Life by X' script on a data table, capturing summary reports, and manipulating missing values in Hours and Censor columns.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #MissingValues, #FitLifeByX, #SummaryReports -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	dt:Hours << Set Property( "Missing Value Codes", {1298, 1390, 3187} );
	flbx1 = dt << Run Script( "Fit Life by X" );
	rvec1 = Report( flbx1 )["Summary of Data"][Number Col Box( 1 )] << get as matrix;
	dt:Hours[2 :: 4] = .;
	flbx2 = dt << Run Script( "Fit Life by X" );
	rvec2 = Report( flbx2 )["Summary of Data"][Number Col Box( 1 )] << get as matrix;
	dt = dt << Revert;
	dt:Temp << Set Property( "Missing Value Codes", {40} );
	flbx1 = dt << Run Script( "Fit Life by X" );
	rvec1 = Report( flbx1 )["Summary of Data"][Number Col Box( 1 )] << get as matrix;
	dt:Temp[dt << get rows where( Col Stored Value( :Temp ) == 40 )] = .;
	flbx2 = dt << Run Script( "Fit Life by X" );
	rvec2 = Report( flbx2 )["Summary of Data"][Number Col Box( 1 )] << get as matrix;
	(dt << select where( Is Missing( :Temp ) )) << delete rows;
	flbx3 = dt << Run Script( "Fit Life by X" );
	rvec3 = Report( flbx3 )["Summary of Data"][Number Col Box( 1 )] << get as matrix;
	dt = dt << Revert;
	dt:Censor << Delete Formula;
	dt:Censor[2 :: 4] = 3;
	dt:Censor << Set Property( "Missing Value Codes", {3} );
	flbx1 = dt << Run Script( "Fit Life by X" );
	rvec1 = Report( flbx1 )["Summary of Data"][Number Col Box( 1 )] << get as matrix;
	dt:Censor[dt << get rows where( Col Stored Value( :Censor ) == 3 )] = .;
	flbx2 = dt << Run Script( "Fit Life by X" );
	rvec2 = Report( flbx2 )["Summary of Data"][Number Col Box( 1 )] << get as matrix;
);
```

**Code Explanation**:

1. Open data table.
2. Set missing value codes for Hours.
3. Run "Fit Life by X" script.
4. Capture summary report.
5. Introduce missing values in Hours.
6. Repeat "Fit Life by X".
7. Capture second summary report.
8. Revert data table.
9. Set missing value codes for Temp.
10. Run "Fit Life by X" again.
11. Capture third summary report.
12. Remove rows with missing Temp.
13. Run "Fit Life by X" one more time.
14. Capture fourth summary report.
15. Revert data table.
16. Delete Censor formula.
17. Introduce missing values in Censor.
18. Set missing value codes for Censor.
19. Run "Fit Life by X" script.
20. Capture fifth summary report.
21. Remove rows with missing Censor.
22. Run "Fit Life by X" last time.
23. Capture sixth summary report.



## Col Box using N Col
> **Summary**: Analyze and visualize a binomial elastic net model, generating predicted probabilities for low and high severity outcomes, and calculating expected profits based on validation data.

<!-- Keywords: #JSLScriptingLanguage, #BinomialElasticNetModel, #ValidationData, #PredictedProbabilities, #ExpectedProfits -->

**Code**:
```jsl
dt = Open("data_table.jmp");
n1 = N Col( dt );
fm = dt << Run Script( "Elastic Net Binomial, Validation Column" );
fm << (Fit[1] << Save Prediction Formula);
rp = Report( fm )["Binomial Adaptive Elastic Net with Validation Column"];
val = rp[Number Col Box( "Validation" )] << get as matrix;
lnz = Loc( rp[Number Col Box( "Estimate" )] << get as matrix );
pred = (dt:Name( "Probability(Severity=Low)" ) << get values)[1];
			
val exp = [42, 42, 25.7686441526887, 10, 88.9139844882111, 78.6340624989258, 0.131857261916875];
nonzero = [1, 3, 4, 6, 7, 12, 13, 14, 17, 20];
obs1pred = 0.448130177304281;
n2 = N Col( dt );
pred_high = dt:Name( "Probability(Severity=High)" ) << get values;
pred_low = dt:Name( "Probability(Severity=Low)" ) << get values;
dt:Severity << Set Property( "Profit Matrix", {[1 - 2, -1 1, . .], {"High", "Low", "Undecided"}} );
fm << (Fit[1] << Save Prediction Formula);
n3 = N Col( dt );
pred_high2 = dt:Name( "Probability(Severity=High) 2" ) << get values;
pred_low2 = dt:Name( "Probability(Severity=Low) 2" ) << get values;
form = dt:Most Likely Severity 2 << get formula;
prof_high = dt:Profit for High << get values;
prof_low = dt:Profit for Low << get values;
profit_form = dt:Most Profitable Prediction for Severity << get formula;
exp_form = dt:Expected Profit for Severity << get formula;
act_form = dt:Actual Profit for Severity << get formula;
```

**Code Explanation**:

1. Open data table;
2. Count columns in dataset.
3. Run elastic net binomial model.
4. Save prediction formula.
5. Extract validation report.
6. Get validation column as matrix.
7. Locate non-zero estimates.
8. Get predicted probability for low severity.
9. Define expected validation values.
10. Define non-zero index list.



## Col Box using New Window
### Example 1
> **Summary**: Creates interactive windows with nested popup boxes and collapsible tables using JMP Scripting Language (JSL).

<!-- Keywords: #JMPScriptingLanguage, #InteractiveWindows, #NestedPopupBoxes, #CollapsibleTables, #JSLProgramming -->

**Code**:
```jsl
Names Default To Here( 1 );
//ex1: nest popup boxes into a table box
New Window( "test",
	Table Box(
		Col Span Box(
			"Col Span",
			Number Col Box( "", {1, 2, 3} ),
			Col Box ( "",
				Popup Box( {"x", ex = 1, "y", ex = 2} ),
				Popup Box( {"x", ex = 1, "y", ex = 2} ),
				Popup Box( {"x", ex = 1, "y", ex = 2} )
			)
		),
		string col box ("ABC", {"a", "b", "c"})
	)
);
//ex2: a collapsible table
New Window( "test",
	Outline Box( "test",
		Table Box (
		Number Col Box( "", {1, 2, 3} ),
		String Col Box( "ABC", {"a", "b", "c"} ),
		<< set column borders (1),
		<< set row borders (1)
		)
	)
);
//ex3: collapsible table with nested popups
New Window( "test",
	Outline Box( "test",
		Table Box(
		Col Span Box(
			"Col Span",
			Number Col Box( "", {1, 2, 3} ),
			Col Box ( "",
				Popup Box( {"x", ex = 1, "y", ex = 2} ),
				Popup Box( {"x", ex = 1, "y", ex = 2} ),
				Popup Box( {"x", ex = 1, "y", ex = 2} )
			)
		),
		string col box ("ABC", {"a", "b", "c"}),
		<< set column borders (1),
		<< set row borders (1)
	)
	)
);
```

**Code Explanation**:

1. Set default name scope.
2. Create new window "test".
3. Add table box to window.
4. Add column span box.
5. Add number column box with data.
6. Add column box with three popup boxes.
7. Add string column box with data.
8. Create new window "test".
9. Add outline box to window.
10. Add table box with number and string columns.
11. Set column borders.
12. Set row borders.
13. Create new window "test".
14. Add outline box to window.
15. Add table box with column span box.
16. Add number column box with data.
17. Add column box with three popup boxes.
18. Add string column box with data.
19. Set column borders.
20. Set row borders.



### Example 2
> **Summary**: Creates a new window with two table boxes, one for interval plots and one for bar plots, setting lower and upper bounds for each plot style.

<!-- Keywords: #JSLScriptingLanguage, #NewWindow, #IntervalPlot, #BarPlot, #JMP -->

**Code**:
```jsl
nw = New Window( "Example",
	Table Box( pcb1 = Plot Col Box( "Interval", {25, 40, 5, 10, 10, 5} ) ),
	Table Box( pcb2 = Plot Col Box( "Bar", {25, 45, 5, 10, 10, 5} ) )
);
//Interval
pcb1 << Lower( [20, 30, 0, 5, 5, 0] );
pcb1 << Upper( [30, 50, 10, 15, 15, 10] );
pcb1 << Set Plot Style( Interval );
//Bar
pcb2 << Lower( [20, 30, 0, 5, 5, 0] );
pcb2 << Upper( [30, 50, 10, 15, 15, 10] );
pcb2 << Set Plot Style( Bar );
```

**Code Explanation**:

1. Create new window.
2. Add table box with interval plot.
3. Add table box with bar plot.
4. Set lower bounds for interval plot.
5. Set upper bounds for interval plot.
6. Apply interval style to plot.
7. Set lower bounds for bar plot.
8. Set upper bounds for bar plot.
9. Apply bar style to plot.



