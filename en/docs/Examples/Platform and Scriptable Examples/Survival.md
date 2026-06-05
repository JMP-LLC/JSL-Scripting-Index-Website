# Survival

### Example 1
> **Summary**: Performs survival analysis on the BrakeReliability data set by opening a data table, defining variables for time cycles, censoring, and grouping, and generating a survival plot.

<!-- Keywords: #SurvivalAnalysis, #JMPScriptingLanguage, #DataTable, #PiecewiseWeibullNHPP, #ChangePointDetection -->

**Code**:
```jsl
// Survival
// Open data table
dt = Open("data_table.jmp");
// Survival
Survival(
	Y( :days ),
	Censor( :Censor ),
	Grouping( :Group ),
	Survival Plot( 1 )
);
```

**Code Explanation**:

1. Open table.
2. Define variable dt.
3. Call Survival function.
4. Specify Y variable.
5. Specify Censor variable.
6. Specify Group variable.
7. Enable Survival Plot.



### Example 2
> **Summary**: Performs reliability growth analysis using the Piecewise Weibull NHPP model for change point detection on the BrakeReliability data set, opening a data table and running survival analysis.

<!-- Keywords: #JMPScriptingLanguage, #SurvivalAnalysis, #PiecewiseWeibullNHPPModel, #ChangePointDetection, #ReliabilityGrowthAnalysis -->

**Code**:
```jsl
// Survival
// Open data table
dt = Open("data_table.jmp");
// Survival
Survival(
	Y( :Time Cycles ),
	Censor( :Censor ),
	Grouping( :Group )
);
```

**Code Explanation**:

1. Open data table.
2. Run survival analysis.



### Example 3
> **Summary**: Performs reliability growth analysis using the Piecewise Weibull NHPP model for change point detection on the BrakeReliability data set, visualizing results in a customized survival plot with years on the X-axis and normal probability on the Y-axis.

<!-- Keywords: #JMP, #SurvivalAnalysis, #PiecewiseWeibullNHPP, #ChangePointDetection, #ReliabilityGrowth -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Survival(
	Y( :days ),
	Censor( :Censor ),
	Grouping( :Group ),
	Failure Plot( 0 ),
	Show Points( 1 ),
	Show Confid Interval( 1 ),
	Exponential Plot( 1 ),
	Weibull Plot( 1 ),
	LogNormal Plot( 1 ),
	Exponential Fit( 1 ),
	Weibull Fit( 1 ),
	Fitted Quantile( 1 ),
	SendToReport(
		Dispatch( {}, "Survival Plot", OutlineBox, {Set Title( "Survival Plot - custom format shows \!"yrs\!"" )} ),
		Dispatch( {"Survival Plot"}, "1", ScaleBox,
			{Scale( "Power" ), Format( "Custom", Formula( Char( Round( value / 365.25, 2 ) ) || " yrs" ), 12 ), Minor Ticks( 1 )}
		),
		Dispatch( {"Survival Plot"}, "2", ScaleBox,
			{Scale( "Normal Probability" ), Format( "Custom", Formula( Round( value, 4 ) ), 12 ), Min( 0.0000000000000002 ), Max( 1 ),
			Inc( 1 ), Minor Ticks( 1 ), Label Row( Show Major Grid( 1 ) )}
		),
		Dispatch( {}, "Exponential Plot", OutlineBox, {Set Title( "Exponential Plot - custom format shows \!"yrs\!" on X and Pi on Y" )} ),
		Dispatch( {"Exponential Plot"}, "1", ScaleBox,
			{Scale( "Power" ), Format( "Custom", Formula( Char( Round( value / 365.25, 2 ) ) || " yrs" ), 12 ), Minor Ticks( 1 )}
		),
		Dispatch( {"Exponential Plot"}, "2", ScaleBox, {Format( "Custom", Formula( Round( Pi(), 4 ) ), 9 )} ),
		Dispatch( {}, "LogNormal Plot", OutlineBox, {Set Title( "LogNormal Plot - custom format should show all Zeroes on y axis" )} ),
		Dispatch( {"Weibull Plot"}, "2", ScaleBox, {Format( "Custom", Formula( Round( e(), 5 ) ), 9 )} ),
		Dispatch( {"LogNormal Plot"}, "2", ScaleBox, {Format( "Custom", Formula( 0 ), 9 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define survival analysis.
3. Set Y variable.
4. Set censor variable.
5. Set grouping variable.
6. Disable failure plot.
7. Enable point display.
8. Enable confidence interval.
9. Enable exponential plot.
10. Enable Weibull plot.
11. Enable log-normal plot.
12. Enable exponential fit.
13. Enable Weibull fit.
14. Enable fitted quantile.
15. Customize survival plot title.
16. Customize X-axis scale to years.
17. Customize Y-axis scale to normal probability.
18. Customize exponential plot title.
19. Customize exponential X-axis to years.
20. Customize exponential Y-axis to Pi.
21. Customize log-normal plot title.
22. Customize Weibull Y-axis to e.
23. Customize log-normal Y-axis to zero.



### Example 4
> **Summary**: Runs survival analysis and visualization for reliability growth analysis using the Piecewise Weibull NHPP model on the BrakeReliability data set, including failure plots, exponential plots, Weibull plots, log-normal plots, and fitted distribution plots.

<!-- Keywords: #JMP, #SurvivalAnalysis, #ReliabilityGrowth, #WeibullNHPP, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Survival(
	Y( :Time Cycles ),
	Censor( :Censor ),
	Grouping( :Group ),
	Failure Plot( 1 ),
	Exponential Plot( 1 ),
	Weibull Plot( 1 ),
	LogNormal Plot( 1 ),
	Exponential Fit( 1 ),
	Weibull Fit( 1 ),
	LogNormal Fit( 1 ),
	Fitted Quantile( 1 ),
	Fitted Quantile CI Lines( 1 ),
	Fitted Distribution Plots( 1 ),
	SendToReport(
		Dispatch( {}, "Survival Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Failure Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Exponential Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Exponential Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Weibull Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Extreme-Value Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Weibull Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "LogNormal Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "LogNormal Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Quantiles", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Tests Between Groups", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform survival analysis.
3. Set time cycles as Y variable.
4. Use censor data.
5. Group by group variable.
6. Create failure plot.
7. Create exponential plot.
8. Create Weibull plot.
9. Create log-normal plot.
10. Fit exponential model.



### Example 5
> **Summary**: Performs a survival analysis to model reliability growth using the Piecewise Weibull NHPP model for change point detection on the BrakeReliability data set, with censoring and competing causes.

<!-- Keywords: #JMPScriptingLanguage, #SurvivalAnalysis, #PiecewiseWeibullNHPPModel, #ReliabilityGrowthAnalysis, #CompetingCauses -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Competing Causes( :Failure Cause );
```

**Code Explanation**:

1. Open data table;
2. Create survival analysis object.
3. Set response variable to "days".
4. Define censoring variable as "Censor".
5. Group by "Group" variable.
6. Add competing causes analysis.
7. Specify "Failure Cause" for competing causes.



### Example 6
> **Summary**: Performs reliability growth analysis using the Piecewise Weibull NHPP model for change point detection on the BrakeReliability data set.

<!-- Keywords: #JMPScriptingLanguage, #SurvivalAnalysis, #PiecewiseWeibullNHPPModel, #ChangePointDetection, #ReliabilityGrowthAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Competing Causes( :Failure Cause );
Eval( obj << Get Script );
```

**Code Explanation**:

1. Open data table.
2. Perform survival analysis.
3. Set response variable to "days".
4. Define censoring variable as "Censor".
5. Use "Group" for grouping.
6. Specify competing causes using "Failure Cause".
7. Retrieve and evaluate script from object.



### Example 7
> **Summary**: Performs a survival analysis on the BrakeReliability data set, generating failure plots, exponential plots, and exponential fits for change point detection.

<!-- Keywords: #JMPScriptingLanguage, #SurvivalAnalysis, #PiecewiseWeibullNHPPModel, #ChangePointDetection, #ReliabilityGrowth -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Survival(
	Y( :Time Cycles ),
	Censor( :Censor ),
	Grouping( :Group ),
	Failure Plot( 1 ),
	Survival Plot( 0 ),
	Exponential Plot( 1 ),
	Exponential Fit( 1 ),
	Fitted Quantile( 1 ),
	SendToReport(
		Dispatch( {}, "Product-Limit Survival Fit", OutlineBox, {Set Title( "Failure Plot, Exponential Plot, Exponential Fit" )} ),
		Dispatch( {}, "Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Quantiles", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Tests Between Groups", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Run Survival analysis.
3. Set Time Cycles as response.
4. Set Censor as censor variable.
5. Use Group for grouping.
6. Enable Failure Plot.
7. Disable Survival Plot.
8. Enable Exponential Plot.
9. Enable Exponential Fit.
10. Enable Fitted Quantile plot.



### Example 8
> **Summary**: Runs a reliability growth analysis using the Piecewise Weibull NHPP model for change point detection on the BrakeReliability data set, enabling visualization of Weibull and LogNormal plots, fitting of both models, and quantile plotting.

<!-- Keywords: #JMP, #SurvivalAnalysis, #WeibullPlot, #LogNormalPlot, #ReliabilityGrowth -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Survival(
	Y( :Time Cycles ),
	Censor( :Censor ),
	Grouping( :Group ),
	Failure Plot( 0 ),
	Survival Plot( 0 ),
	Weibull Plot( 1 ),
	LogNormal Plot( 1 ),
	Weibull Fit( 1 ),
	LogNormal Fit( 1 ),
	Fitted Quantile( 1 ),
	SendToReport(
		Dispatch( {}, "Product-Limit Survival Fit", OutlineBox, {Set Title( "Weibull Plot, Weibull Fit, LogNormal Plot, LogNormal Fit" )} ),
		Dispatch( {}, "Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Quantiles", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Tests Between Groups", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open table.
2. Define survival analysis object.
3. Set response variable.
4. Set censor variable.
5. Set grouping variable.
6. Disable failure plot.
7. Disable survival plot.
8. Enable Weibull plot.
9. Enable LogNormal plot.
10. Enable Weibull fit.
11. Enable LogNormal fit.
12. Enable fitted quantile plot.
13. Set report title.
14. Close summary section.
15. Close quantiles section.
16. Close tests between groups section.



### Example 9
> **Summary**: Performs reliability growth analysis using the Piecewise Weibull NHPP model for change point detection on the BrakeReliability data set.

<!-- Keywords: #JMPScriptingLanguage, #SurvivalAnalysis, #ReliabilityGrowth, #PiecewiseWeibullNHPPModel, #ChangePointDetection -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Survival( Y( :Time Cycles ), Censor( :Censor ), Grouping( :Group ) );
```

**Code Explanation**:

1. Open data table.
2. Assign table to variable.
3. Create survival analysis object.
4. Specify response variable.
5. Define censoring variable.
6. Set grouping variable.



### Example 10
> **Summary**: Performs reliability growth analysis using the Piecewise Weibull NHPP model for change point detection on the BrakeReliability data set, with interactive filtering and selection capabilities.

<!-- Keywords: #JMPScriptingLanguage, #SurvivalAnalysis, #PiecewiseWeibullNHPPModel, #ChangePointDetection, #DataFiltering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Survival( Y( :height ), Failure Plot( 0 ), );
obj << Local Data Filter(
	Location( {1106, 48} ),
	Add Filter( columns( :sex ), Where( :sex == "F" ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
obj << Automatic Recalc( 0 );
dt << Select Where( :age == 12 );
dt << Exclude();
rpt = obj << Report;
```

**Code Explanation**:

1. Open data table.
2. Create survival object.
3. Set local data filter location.
4. Add filter for female sex.
5. Configure filter mode.
6. Disable automatic recalculation.
7. Select rows where age is 12.
8. Exclude selected rows.
9. Generate report from survival object.



### Example 11
> **Summary**: Performs reliability growth analysis using the Piecewise Weibull NHPP model for change point detection on the BrakeReliability data set, filtering females and selecting rows where age is 12.

<!-- Keywords: #JSLScripting, #SurvivalAnalysis, #PiecewiseWeibullNHPP, #LocalDataFilter, #AutomaticRecalc -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Survival( Y( :height ), Failure Plot( 0 ), );
obj << Local Data Filter(
	Location( {1106, 48} ),
	Add Filter( columns( :sex ), Where( :sex == "F" ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
dt << Select Where( :age == 12 );
dt << Exclude();
rpt = obj << Report;
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Survival( Y( :height ), Failure Plot( 0 ), );
obj << Local Data Filter(
	Location( {1106, 48} ),
	Add Filter( columns( :sex ), Where( :sex == "F" ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
obj << Automatic Recalc( 0 );
dt << Select Where( :age == 12 );
dt << Exclude();
rpt = obj << Report;
```

**Code Explanation**:

1. Open data table;
2. Create survival analysis object.
3. Add local data filter for females.
4. Select rows where age is 12.
5. Exclude selected rows.
6. Generate report from analysis.
7. Close table without saving.
8. Reopen "data_table.jmp" table.
9. Recreate survival analysis object.
10. Add local data filter for females.



### Example 12
> **Summary**: Performs a survival analysis to model reliability growth using the Piecewise Weibull NHPP model for change point detection on the BrakeReliability data set.

<!-- Keywords: #JMPScriptingLanguage, #SurvivalAnalysis, #WeibullFit, #ReliabilityGrowth, #ChangePointDetection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Fit( 1 );
mytab = obj << Save Estimates;
```

**Code Explanation**:

1. Open data_table data
2. Create survival analysis object.
3. Set response variable to "days".
4. Define censoring variable as "Censor".
5. Specify grouping variable as "Group".
6. Perform Weibull fit analysis.
7. Save parameter estimates.



### Example 13
> **Summary**: Performs reliability growth analysis using the Piecewise Weibull NHPP model for change point detection on the BrakeReliability data set, generating a report with fitted quantile and confidence intervals.

<!-- Keywords: #JMP, #SurvivalAnalysis, #PiecewiseWeibullNHPP, #ChangePointDetection, #ReliabilityGrowth -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Survival(
	Y( :days ),
	Censor( :Censor ),
	Grouping( :Group ),
	Failure Plot( 0 ),
	Show Points( 1 ),
	Show Confid Interval( 1 ),
	Exponential Plot( 1 ),
	Weibull Plot( 1 ),
	LogNormal Plot( 1 ),
	Exponential Fit( 1 ),
	Weibull Fit( 1 ),
	Fitted Quantile( 1 )
);
:Days << Set Property( "Missing Value Codes", {999} );
:Days << Set Values( {999, 999, 999} );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
actN = (rpt[Number Col Box( 45 )][1]);
```

**Code Explanation**:

1. Open data table;
2. Create survival analysis object.
3. Set Y variable to "days".
4. Set Censor variable to "Censor".
5. Set Grouping variable to "Group".
6. Disable Failure Plot.
7. Enable Show Points.
8. Enable Show Confid Interval.
9. Enable Exponential Plot.
10. Enable Weibull Plot.
11. Enable LogNormal Plot.
12. Enable Exponential Fit.
13. Enable Weibull Fit.
14. Enable Fitted Quantile.
15. Set missing value code for "Days" to 999.
16. Set "Days" values to 999.
17. Redo the survival analysis.
18. Generate report from analysis.
19. Extract value from report box 45.



### Example 14
> **Summary**: Performs reliability growth analysis using the Piecewise Weibull NHPP model for change point detection on the BrakeReliability data set, extracting mean values, standard error values, and chi-square values.

<!-- Keywords: #JMP, #SurvivalAnalysis, #PiecewiseWeibullNHPP, #ReliabilityGrowth, #ChangePointDetection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
SASMean = [218.75657895, 240.79464286];
SASMean = SASMean[[2, 1]];
SASstderr = [9.4031790232, 11.205971747];
SASstderr = SASstderr[[2, 1]];
SASlrank = 3.1227121013;
SASwilcox = 2.651042239;
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), Survival Plot( 1 ) );
rpt = obj << report;
mean = rpt[Number Col Box( "Mean" )] << get as matrix;
stdErr = rpt[Number Col Box( "Std Error" )] << get as matrix;
chiSq = rpt[Number Col Box( "ChiSquare" )] << get as matrix;
lrank = chiSq[1];
wilcox = chiSq[2];
```

**Code Explanation**:

1. Open data table.
2. Define SAS mean values.
3. Rearrange SAS mean values.
4. Define SAS standard error values.
5. Rearrange SAS standard error values.
6. Store SAS LRT value.
7. Store SAS Wilcoxon value.
8. Run survival analysis.
9. Extract report object.
10. Retrieve mean values.
11. Retrieve standard error values.
12. Retrieve chi-square values.
13. Assign LRT value.
14. Assign Wilcoxon value.



### Example 15
> **Summary**: Performs reliability growth analysis using the Piecewise Weibull NHPP model for change point detection on a given data set, retrieving and extracting report objects along the way.

<!-- Keywords: #JMPScriptingLanguage, #ReliabilityGrowthAnalysis, #PiecewiseWeibullNHPPModel, #ChangePointDetection, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
plat = dt << Survival( Y( :Time ), Censor( :Censor ), Exponential Fit( 1, theta( 30000 ) ) );
Rep = Report( plat );
val = (Rep[Table Box( 1 )] << GetAsMatrix)[1, 1];
Close( dt, No Save );
dt = New Table( "Test", New Column( "L", Values( [1, 2, 8] ) ), New Column( "H", Values( [3, 5, 10] ) ) );
obj = dt << Survival( Y( L, H ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Perform survival analysis.
3. Retrieve report object.
4. Extract matrix value.
5. Close data table without saving.
6. Create new data table.
7. Add columns with values.
8. Perform survival analysis on new table.
9. Retrieve report object for new analysis.
10. Save report object.



### Example 16
> **Summary**: Performs reliability growth analysis using the Piecewise Weibull NHPP model for change point detection on the BrakeReliability data set, simulating 1000 datasets and extracting the 'Group' column.

<!-- Keywords: #JMP, #SurvivalAnalysis, #PiecewiseWeibullNHPP, #ReliabilityGrowth, #ChangePointDetection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Survival(
	Y( :days ),
	Censor( :Censor ),
	Grouping( :Group ),
	Competing Causes( :Failure Cause ),
	Weibull Lines( 1 ),
	Failure Plot( 0 ),
	Survival Plot( 1 )
);
dtnew = obj << simulate( 1000 );
dt_col = Column( dtnew, "Group" );
col_scpt = dt_col << get script;
charscpt = Char( Name Expr( col_scpt ) );
```

**Code Explanation**:

1. Open data table;
2. Perform survival analysis.
3. Set response variable to "days".
4. Define censor variable as "Censor".
5. Use "Group" for grouping.
6. Include "Failure Cause" for competing causes.
7. Add Weibull lines.
8. Disable failure plot.
9. Enable survival plot.
10. Simulate 1000 datasets.
11. Extract "Group" column from new dataset.
12. Get script for "Group" column.
13. Convert script to character string.



### Example 17
> **Summary**: Performs reliability growth analysis using the Piecewise Weibull NHPP model for change point detection on the BrakeReliability data set, specifying response and censoring variables, fitting an exponential model, and extracting a value from the report object.

<!-- Keywords: #JSL, #SurvivalAnalysis, #PiecewiseWeibullNHPP, #ChangePointDetection, #ReliabilityGrowth -->

**Code**:
```jsl
dt = Open("data_table.jmp");
plat = dt << Survival( Y( :Time ), Censor( :Censor ), Exponential Fit( 1, theta( 30000 ) ) );
Rep = Report( plat );
val = (Rep[Table Box( 1 )] << GetAsMatrix)[1, 1];
```

**Code Explanation**:

1. Open data table.
2. Perform survival analysis.
3. Specify response variable.
4. Specify censoring variable.
5. Fit exponential model.
6. Set initial theta value.
7. Generate report object.
8. Extract first table box.
9. Convert to matrix.
10. Retrieve first cell value.



### Example 18
> **Summary**: Performs reliability growth analysis using the Piecewise Weibull NHPP model for change point detection on the BrakeReliability data set, generating a survival report.

<!-- Keywords: #JMPScriptingLanguage, #SurvivalAnalysis, #PiecewiseWeibullNHPPModel, #ChangePointDetection, #ReliabilityGrowth -->

**Code**:
```jsl
dt = Open("data_table.jmp");
exp xFrom = [6, 12, 48, 168, 500, 1000, 2000];
exp xTo = [6, 24, 48, 168, 500, 1000, 2000];
exp yFrom = [0.995783555867885, 0.994378074490513, 0.992971599137627, 0.991238664409638, 0.988889757621937, 0.981618509404101,
0.973636841057758];
exp yTo = [0.995783555867885, 0.994378074490513, 0.992971599137627, 0.991238664409638, 0.988889757621937, 0.981618509404101,
0.973636841057758];
obj = dt << Survival( Y( :start time, :end time ), Freq( :count ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Define experimental xFrom values.
3. Define experimental xTo values.
4. Define experimental yFrom values.
5. Define experimental yTo values.
6. Create survival analysis object.
7. Generate survival report.



### Example 19
> **Summary**: Performs reliability growth analysis using the Piecewise Weibull NHPP model for change point detection on the BrakeReliability data set, retrieving a combined table and converting it to a matrix.

<!-- Keywords: #JMPScriptingLanguage, #SurvivalAnalysis, #PiecewiseWeibullNHPPModel, #ChangePointDetection, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
plat = dt << Survival( Y( :start time, :end time ), Freq( :count ) );
rep = Report( plat );
result = rep["Combined"][Table Box( 1 )] << GetAsMatrix;
expected = [6 6 0.995783555867885 0.00421644413211525 0.00171772327438447,
12 24 0.994378074490513 0.005621925509487 0.00198205573822738,
48 48 0.992971599137627 0.00702840086237316 0.00221475212968978,
168 168 0.991238664409638 0.00876133559036203 0.00280817429974461,
500 500 0.988889757621937 0.0111102423780626 0.00365414864140573,
1000 1000 0.981618509404101 0.0183814905958986 0.00627680698629204,
2000 2000 0.973636841057758 0.0263631589422419 0.0100970600584676];
```

**Code Explanation**:

1. Open data table.
2. Perform survival analysis.
3. Retrieve report object.
4. Extract combined table.
5. Convert table to matrix.
6. Define expected values matrix.
7. Compare results with expected values.



### Example 20
> **Summary**: Performs reliability growth analysis using the Piecewise Weibull NHPP model for change point detection on the BrakeReliability data set, generating confidence intervals and actual values.

<!-- Keywords: #JSL, #ReliabilityGrowthAnalysis, #PiecewiseWeibullNHPP, #ChangePointDetection, #BrakeReliability -->

**Code**:
```jsl
dt = Open("data_table.jmp");
plat = dt << Survival( Y( :Time ), Censor( :Censor ) );
plat << Save Estimates;
dt2 = Data Table( 1 );
plow = [];
pup = [];
slow = [];
sup = [];
z = Normal Quantile( 0.975 );
e = 3.16;
For( i = 1, i <= N Row( dt2 ), i++,
	p = Column( dt2, "Survival" )[i];
	SE = Column( dt2, "SurvStdErr" )[i];
	logitse = 1 / (p * (1 - p)) * SE;
	pllow = Logit( p ) - z * logitse;
	plup = Logit( p ) + z * logitse;
	sllow = Logit( p ) - e * logitse;
	slup = Logit( p ) + e * logitse;
	plow |/= Squish( pllow );
	pup |/= Squish( plup );
	slow |/= Squish( sllow );
	sup |/= Squish( slup );
);
SEActual = Column( dt2, 3 ) << GetAsMatrix;
plowActual = Column( dt2, 4 ) << GetAsMatrix;
pupActual = Column( dt2, 5 ) << GetAsMatrix;
slowActual = Column( dt2, 6 ) << GetAsMatrix;
supActual = Column( dt2, 7 ) << GetAsMatrix;
Fail_plowActual = Column( dt2, 9 ) << GetAsMatrix;
Fail_pupActual = Column( dt2, 10 ) << GetAsMatrix;
Fail_slowActual = Column( dt2, 11 ) << GetAsMatrix;
Fail_supActual = Column( dt2, 12 ) << GetAsMatrix;
```

**Code Explanation**:

1. Open data table.
2. Perform survival analysis.
3. Save estimates.
4. Access results data table.
5. Initialize confidence interval lists.
6. Define quantile value.
7. Set multiplier for wider intervals.
8. Loop through each row.
9. Calculate survival probability.
10. Compute standard error.
11. Convert to logit scale.
12. Calculate confidence limits.
13. Adjust limits using Squish function.
14. Retrieve actual SE values.
15. Retrieve actual lower and upper limits.
16. Retrieve actual failure limits.



## Survival using Set Property
### Example 1
> **Summary**: Runs survival analysis with censoring on a data table, extracting summary reports as matrices, and modifying missing value codes.

<!-- Keywords: #JSLScriptingLanguage, #SurvivalAnalysis, #DataTableManipulation, #MissingValueCodes, #MatrixOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Time << Set Property( "Missing Value Codes", 1150 );
surv1 = dt << Survival( Y( :Time ), Censor( :Censor ) );
rvec1 = Report( surv1 )["Summary"][Table Box( 1 )] << get as matrix;
dt:Time[dt << get rows where( Col Stored Value( :Time ) == 1150 )] = .;
surv2 = dt << Survival( Y( :Time ), Censor( :Censor ) );
rvec2 = Report( surv2 )["Summary"][Table Box( 1 )] << get as matrix;
dt = dt << Revert;
dt:Censor[1 :: 3] = 3;
dt:Censor << Set Property( "Missing Value Codes", {3} );
surv1 = dt << Survival( Y( :Time ), Censor( :Censor ) );
rvec1 = Report( surv1 )["Summary"][Table Box( 1 )] << get as matrix;
dt:Censor[dt << get rows where( Col Stored Value( :Censor ) == 3 )] = .;
surv2 = dt << Survival( Y( :Time ), Censor( :Censor ) );
rvec2 = Report( surv2 )["Summary"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Set missing value code for "Time" to 1150.
3. Perform survival analysis on "Time" with censoring.
4. Extract summary report as matrix.
5. Replace 1150 in "Time" with missing values.
6. Repeat survival analysis.
7. Extract new summary report as matrix.
8. Revert dataset to original state.
9. Set first three "Censor" values to 3.
10. Set missing value code for "Censor" to 3.



### Example 2
> **Summary**: Runs survival analysis with Cause Code and extracts report matrices for competing causes, demonstrating the impact of replacing missing values on the results.

<!-- Keywords: #JSLScripting, #SurvivalAnalysis, #DataManipulation, #ReportMatrix, #MissingValueHandling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Cause Code << Set Property( "Missing Value Codes", {0} );
surv1 = dt << Survival( Y( :Time Cycles ), Competing Causes( :Cause Code ) );
rvec1 = N Rows( Report( surv1 )["Competing Causes"][Table Box( 1 )] << get as matrix );
dt:Cause Code[dt << get rows where( Col Stored Value( :Cause Code ) == 0 )] = .;
surv2 = dt << Survival( Y( :Time Cycles ), Competing Causes( :Cause Code ) );
rvec2 = N Rows( Report( surv2 )["Competing Causes"][Table Box( 1 )] << get as matrix );
```

**Code Explanation**:

1. Open data table.
2. Set missing value code for Cause Code.
3. Run survival analysis with Cause Code.
4. Extract report matrix for competing causes.
5. Replace missing values in Cause Code.
6. Run survival analysis again.
7. Extract new report matrix for competing causes.



