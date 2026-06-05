# Reliability Growth

### Example 1
> **Summary**: Fits a parametric survival model using the LogNormal distribution with the Personality set to Parametric Survival and includes the effect of variable x, while also performing piecewise Weibull NHPP change point detection on a reliability growth dataset.

<!-- Keywords: #ReliabilityGrowth, #ParametricSurvivalModel, #LogNormalDistribution, #PiecewiseWeibullNHPP, #ChangePointDetection -->

**Code**:
```jsl
// Reliability Growth
// Open data table
dt = Open("data_table.jmp");
// Reliability Growth
Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes ),
	Piecewise Weibull NHPP Change Point Detection
);
```

**Code Explanation**:

1. Open data table.
2. Set input format to dates.
3. Define timestamp column.
4. Define event count column.
5. Perform piecewise Weibull NHPP analysis.
6. Detect change points.



### Example 2
> **Summary**: Opens a data table, applies the Reliability Growth function with Crow AMSAA method to analyze the reliability of two prototypes, and specifies time-to-event columns for each prototype.

<!-- Keywords: #ReliabilityGrowth, #CrowAMSAA, #ParametricSurvivalModel, #LogNormalDistribution, #JMPScriptingLanguage -->

**Code**:
```jsl
// Reliability Growth
// Open data table
dt = Open("data_table.jmp");
// Reliability Growth
Reliability Growth(
	Input Format( Concurrent Systems ),
	Time to Event(
		:Prototype 1, :Prototype 2
	),
	System ID( :Failed System ),
	Crow AMSAA
);
```

**Code Explanation**:

1. Open data table.
2. Call Reliability Growth function.
3. Set input format.
4. Specify time to event columns.
5. Define system ID column.
6. Choose Crow AMSAA method.



### Example 3
> **Summary**: Opens a data table, applies the Reliability Growth function with Crow AMSAA method to analyze time-to-event data, and sets input format, time to event column, and event count column.

<!-- Keywords: #ReliabilityGrowth, #CrowAMSAA, #ParametricSurvivalModel, #LogNormalDistribution, #JMPScriptingLanguage -->

**Code**:
```jsl
// Reliability Growth
// Open data table
dt = Open("data_table.jmp");
// Reliability Growth
Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	Crow AMSAA
);
```

**Code Explanation**:

1. Open data table.
2. Call Reliability Growth function.
3. Set input format.
4. Specify time to event column.
5. Define event count column.
6. Use Crow AMSAA method.



### Example 4
> **Summary**: Opens a data table, runs a Reliability Growth analysis with parallel systems input format, and specifies time to event, event count, system ID, and phase columns.

<!-- Keywords: #ReliabilityGrowth, #ParallelSystems, #ParametricSurvivalModel, #LogNormalDistribution, #JMPScriptingLanguage -->

**Code**:
```jsl
// Reliability Growth Feasibility
// Open data table
dt = Open("data_table.jmp");
// Reliability Growth Feasibility
Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
```

**Code Explanation**:

1. Open table.
2. Run Reliability Growth analysis.
3. Set input format to parallel systems.
4. Specify time to event column.
5. Define event count column.
6. Identify system ID column.
7. Assign phase column.



### Example 5
> **Summary**: Calculates reliability growth models for parallel systems using the Weibull NHPP model, with distinct phase and event count detection, and sorts the model list by system ID.

<!-- Keywords: #ReliabilityGrowth, #WeibullNHPP, #ParallelSystems, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
// Reliability Growth Models
// Open data table
dt = Open("data_table.jmp");
// Reliability Growth Models
Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase ),
	Distinct Phase Weibull NHPP,
	Distinct Weibull NHPP,
	SendToReport(
		Dispatch( {"Model List"}, "",
			TableBox,
			{Sort By Column( 4, 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define variable `dt`.
3. Call `Reliability Growth` function.
4. Set input format to parallel systems.
5. Specify time to event column.
6. Specify event count column.
7. Specify system ID column.
8. Specify phase column.
9. Use distinct phase Weibull NHPP model.
10. Use distinct Weibull NHPP model.
11. Sort model list by fourth column.



### Example 6
> **Summary**: Fits a reliability growth model using the piecewise Weibull NHPP with different intercepts, distinct phase Weibull NHPP, and distinct Weibull NHPP, and sends the results to a report.

<!-- Keywords: #ReliabilityGrowth, #WeibullNHPP, #JMPScriptingLanguage, #ParametricSurvivalModel, #LogNormalDistribution -->

**Code**:
```jsl
// Reliability Growth Models
// Open data table
dt = Open("data_table.jmp");
// Reliability Growth Models
Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase ),
	Piecewise Weibull NHPP with Different Intercepts,
	Distinct Phase Weibull NHPP,
	Distinct Weibull NHPP,
	SendToReport(
		Dispatch( {"Model List"}, "",
			TableBox,
			{Sort By Column( 4, 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define reliability growth model.
3. Set input format.
4. Specify time to event.
5. Define event count.
6. Identify system ID.
7. Specify phase.
8. Select piecewise Weibull NHPP.
9. Enable distinct phase Weibull NHPP.
10. Enable distinct Weibull NHPP.



### Example 7
> **Summary**: Performs a reliability growth analysis using the Reliability Growth feasibility tool, opening a data table and specifying input format, time to event, event count, and system ID.

<!-- Keywords: #ReliabilityGrowth, #ParametricSurvivalModel, #LogNormalDistribution, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
// Reliability Growth Feasibility
// Open data table
dt = Open("data_table.jmp");
// Reliability Growth Feasibility
Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Repairs ),
	System ID( :System ID )
);
```

**Code Explanation**:

1. Open data table.
2. Set input format.
3. Specify time to event.
4. Define event count.
5. Identify system ID.
6. Perform reliability growth analysis.



### Example 8
> **Summary**: Fits a reliability growth model using the LogNormal distribution with the personality set to Parametric Survival, incorporating the effect of variable x and analyzing data from a specified table.

<!-- Keywords: #ReliabilityGrowthModel, #LogNormalDistribution, #ParametricSurvival, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
// Reliability Growth Models
// Open data table
dt = Open("data_table.jmp");
// Reliability Growth Models
Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Repairs ),
	System ID( :System ID ),
	Distinct System Weibull NHPP,
	Identical System Weibull NHPP
);
```

**Code Explanation**:

1. Open data table.
2. Fit reliability growth model.
3. Specify input format.
4. Define time to event.
5. Define event count.
6. Define system ID.
7. Use distinct system Weibull NHPP.
8. Use identical system Weibull NHPP.



### Example 9
> **Summary**: Fits a reliability growth model using the Piecewise Weibull NHPP with different intercepts, and sends the results to a report sorted by system ID.

<!-- Keywords: #ReliabilityGrowthModel, #PiecewiseWeibullNHPP, #JMPScriptingLanguage, #DataAnalysis, #SurvivalAnalysis -->

**Code**:
```jsl
// Reliability Growth Models
// Open data table
dt = Open("data_table.jmp");
// Reliability Growth Models
Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase ),
	Piecewise Weibull NHPP,
	Piecewise Weibull NHPP with Different Intercepts,
	Distinct Phase Weibull NHPP,
	Distinct Weibull NHPP,
	SendToReport(
		Dispatch( {"Model List"}, "",
			TableBox,
			{Sort By Column( 4, 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Set input format.
3. Define time to event.
4. Specify event count.
5. Identify system ID.
6. Define phase variable.
7. Choose Piecewise Weibull NHPP.
8. Select Piecewise Weibull NHPP with different intercepts.
9. Apply Distinct Phase Weibull NHPP.
10. Use Distinct Weibull NHPP.
11. Sort model list by column 4.



### Example 10
> **Summary**: Fits a parametric survival model using the LogNormal distribution with the personality set to Parametric Survival, including the effect of variable x, and applies Reliability Growth analysis on the specified data table.

<!-- Keywords: #ReliabilityGrowth, #ParametricSurvivalModel, #LogNormalDistribution, #WeibullNHPP, #JMPScriptingLanguage -->

**Code**:
```jsl
// Reliability Growth
// Open data table
dt = Open("data_table.jmp");
// Reliability Growth
Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage ),
	Reinitialized Weibull NHPP
);
```

**Code Explanation**:

1. Open data table.
2. Define variable `dt`.
3. Call `Reliability Growth` function.
4. Set input format to `Time to Event`.
5. Specify time to event column.
6. Specify event count column.
7. Specify phase column.
8. Use `Reinitialized Weibull NHPP` method.



### Example 11
> **Summary**: Fits a parametric survival model using the LogNormal distribution with the Personality set to Parametric Survival, and includes the effect of variable x in the analysis.

<!-- Keywords: #ReliabilityGrowth, #ParametricSurvivalModel, #LogNormalDistribution, #PiecewiseWeibullNHPP, #JMPScriptingLanguage -->

**Code**:
```jsl
// Reliability Growth
// Open data table
dt = Open("data_table.jmp");
// Reliability Growth
Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase ),
	Piecewise Weibull NHPP
);
```

**Code Explanation**:

1. Open data table.
2. Run Reliability Growth analysis.
3. Set input format.
4. Specify time to event column.
5. Define event count column.
6. Identify phase column.
7. Choose Piecewise Weibull NHPP model.



### Example 12
> **Summary**: Fits a parametric survival model using the LogNormal distribution with personality set to Parametric Survival, including the effect of variable x, and performs reliability growth analysis on the Devalt data table.

<!-- Keywords: #ReliabilityGrowth, #ParametricSurvivalModel, #LogNormalDistribution, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
// Reliability Growth
// Open data table
dt = Open("data_table.jmp");
// Reliability Growth
Reliability Growth(
	Input Format( Time to Event ),
	Time to Event(
		:Interval Start, :Interval End
	),
	Event Count( :Fixes ),
	Phase( :Design Phase ),
	Piecewise Weibull NHPP
);
```

**Code Explanation**:

1. Open data table.
2. Define reliability growth analysis.
3. Specify input format.
4. Set time to event columns.
5. Define event count column.
6. Identify phase column.
7. Select piecewise Weibull NHPP model.



### Example 13
> **Summary**: Performs reliability growth analysis using the Reinitialized Weibull NHPP model, with customizable observed data scales and axis labels.

<!-- Keywords: #ReliabilityGrowth, #WeibullNHPP, #Customization, #JMPScriptingLanguage, #ParametricSurvivalModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage ),
	Reinitialized Weibull NHPP,
	SendToReport(
		Dispatch( {"Observed Data", "Cumulative Events"}, "1", ScaleBox,
			{Scale( "Log" ), Format( "Custom", Formula( In Hours( value ) ), 12 ), Min( 4 ), Max( 10499.8 ), Inc( 1 ), Minor Ticks( 1 )}
		),
		Dispatch( {"Observed Data", "Cumulative Events"}, "2", ScaleBox,
			{Scale( "Log" ), Format( "Best", 12 ), Min( 0.1 ), Max( 400 ), Inc( 1 ), Minor Ticks( 1 )}
		),
		Dispatch( {"Observed Data", "Cumulative Events"}, "Hours of Operation", TextEditBox, {Set Text( "Seconds of Operation" )} ),
		Dispatch( {"Observed Data", "Mean Time Between Failures"}, "1", ScaleBox,
			{Scale( "Log" ), Format( "Custom", Formula( In Hours( value ) ), 12 ), Min( 4 ), Max( 10499.8 ), Inc( 1 ), Minor Ticks( 1 )}
		),
		Dispatch( {"Models", "Reinitialized Weibull NHPP", "MTBF"}, "1", ScaleBox,
			{Scale( "Power" ), Format( "Custom", Formula( value ), 12 ), Min( 0 ), Max( 10000 ), Inc( 10000 ), Minor Ticks( 1 )}
		),
		Dispatch( {"Models", "Reinitialized Weibull NHPP", "MTBF"}, "2", ScaleBox,
			{Scale( "Power" ), Format( "Best", 12 ), Minor Ticks( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform reliability growth analysis.
3. Set input format.
4. Specify time to event column.
5. Define event count column.
6. Identify phase column.
7. Use reinitialized Weibull NHPP model.
8. Customize observed data scale.
9. Adjust cumulative events scale.
10. Change axis label text.



### Example 14
> **Summary**: Performs reliability growth analysis using the LogNormal distribution with change point detection, incorporating variable x as a factor.

<!-- Keywords: #ReliabilityGrowth, #LogNormalDistribution, #ChangePointDetection, #ParametricSurvivalModel, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	Piecewise Weibull NHPP Change Point Detection, 
);
```

**Code Explanation**:

1. Open data table.
2. Call Reliability Growth function.
3. Set input format.
4. Specify time to event column.
5. Define event count column.
6. Apply Piecewise Weibull NHPP method.
7. Enable change point detection.



### Example 15
> **Summary**: Performs reliability growth analysis using the LogNormal distribution with the Personality set to Parametric Survival, including the effect of variable x.

<!-- Keywords: #ReliabilityGrowth, #LogNormalDistribution, #ParametricSurvival, #JMPScriptingLanguage, #SurvivalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	Crow AMSAS,
	Fixed Parameter Crow AMSAA,
	Crow AMSAA with Modified MLE
);
```

**Code Explanation**:

1. Open data table.
2. Initiate reliability growth analysis.
3. Set input format to time-to-event.
4. Specify time-to-event column.
5. Define event count column.
6. Apply Crow AMSAS method.
7. Use fixed parameter Crow AMSAA.
8. Include Crow AMSAA with modified MLE.



### Example 16
> **Summary**: Fits a parametric survival model using the LogNormal distribution with the Personality set to Parametric Survival and includes the effect of variable x.

<!-- Keywords: #ReliabilityGrowth, #ParametricSurvivalModel, #LogNormalDistribution, #JMPScriptingLanguage, #SurvivalAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage ),
	Reinitialized Weibull NHPP,
	Crow AMSAA,
	Fixed Parameter Crow AMSAA,
	Piecewise Weibull NHPP,
	SendToReport(
		Dispatch( {}, "Reliability Growth", OutlineBox, {Set Title( "Crow AMSAA, Fixed Parameter Crow AMSAA, Piecewise Weibull NHPP" )} ),
		Dispatch( {}, "Observed Data", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Model List", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Models", "Reinitialized Weibull NHPP"}, "MTBF", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Assign data table to variable.
3. Create reliability growth object.
4. Set input format to time to event.
5. Specify time to event column.
6. Define event count column.
7. Select phase column.
8. Include Reinitialized Weibull NHPP model.
9. Include Crow AMSAA model.
10. Include Fixed Parameter Crow AMSAA model.
11. Include Piecewise Weibull NHPP model.
12. Set report title.
13. Close observed data section.
14. Close model list section.
15. Close MTBF section for Reinitialized Weibull NHPP.



### Example 17
> **Summary**: Creates a reliability growth object using the Reliability Growth platform in JMP, with input format set to Time to Event and applying Reinitialized Weibull NHPP model.

<!-- Keywords: #ReliabilityGrowth, #TimeToEvent, #WeibullNHPP, #ParametricSurvivalModel, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage ),
	Reinitialized Weibull NHPP
);
```

**Code Explanation**:

1. Open data table.
2. Create reliability growth object.
3. Set input format.
4. Specify time to event column.
5. Define event count column.
6. Identify phase column.
7. Apply Reinitialized Weibull NHPP model.



### Example 18
> **Summary**: Performs reliability growth analysis using the Reliability Growth platform in JMP, specifying input format, time to event column, and piecewise Weibull NHPP model.

<!-- Keywords: #ReliabilityGrowth, #JMPScriptingLanguage, #ParametricSurvivalModel, #LogNormalDistribution, #PiecewiseWeibullNHPP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
rg = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase ),
	Piecewise Weibull NHPP
);
np = Report( rg )["Model List"][Number Col Box( "Nparm" )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Perform reliability growth analysis.
3. Specify input format.
4. Define time to event column.
5. Define event count column.
6. Specify phase column.
7. Choose piecewise Weibull NHPP model.
8. Retrieve report object.
9. Access model list.
10. Extract number of parameters.



### Example 19
> **Summary**: Fits a parametric survival model using the LogNormal distribution with the Personality set to Parametric Survival, including the effect of variable x.

<!-- Keywords: #ReliabilityGrowth, #ParametricSurvivalModel, #LogNormalDistribution, #PiecewiseWeibullNHPPChangePointDetection, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
rg = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes ),
	Piecewise Weibull NHPP Change Point Detection
);
np = Report( rg )["Model List"][Number Col Box( "Nparm" )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Run Reliability Growth analysis.
3. Set input format to dates.
4. Specify timestamp column.
5. Define event count column.
6. Use Piecewise Weibull NHPP.
7. Detect change points.
8. Extract report object.
9. Access Model List.
10. Get Nparm values as matrix.



### Example 20
> **Summary**: Performs reliability growth analysis with Weibull NHPP and generates two reports, extracting NHPP values for comparison.

<!-- Keywords: #ReliabilityGrowth, #WeibullNHPP, #JMPScriptingLanguage, #ParametricSurvivalModel, #LogNormalDistribution -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage ),
	Reinitialized Weibull NHPP,
	SendToReport(
		Dispatch( {"Observed Data"}, "Duane Plot", OutlineBox, {Close( 0 )} ),
		Dispatch( {"Model List"}, "", TableBox, {Sort By Column( 4, 1 )} )
	)
);
rpt1 = obj << Report;
nhpp1 = (rpt1[Number Col Box( 3 )] << Get( 1 ));
:Hours of Operation << Set Property( "Missing Value Codes", 4, 25, 30, 39 );
obj2 = obj << Redo Analysis;
rpt2 = obj2 << Report;
nhpp2 = (rpt2[Number Col Box( 3 )] << Get( 1 ));
```

**Code Explanation**:

1. Open table.
2. Perform reliability growth analysis.
3. Configure input format.
4. Specify time to event.
5. Define event count.
6. Set phase variable.
7. Choose model type.
8. Customize report layout.
9. Retrieve first report.
10. Extract NHPP value.
11. Set missing value codes.
12. Redo analysis.
13. Retrieve second report.
14. Extract new NHPP value.



### Example 21
> **Summary**: Creates two reliability growth objects with different input formats, timestamps, and event counts to detect change points in a dataset.

<!-- Keywords: #ReliabilityGrowth, #ParametricSurvivalModel, #LogNormalDistribution, #PiecewiseWeibullNHPPChangePointDetection, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
relg1 = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes ),
	Piecewise Weibull NHPP Change Point Detection
);
relg2 = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Date ), Event Count( :Fixes ) );
```

**Code Explanation**:

1. Open table.
2. Create reliability growth object with dates.
3. Set input format to dates.
4. Specify timestamp column.
5. Define event count column.
6. Use piecewise Weibull NHPP change point detection.
7. Create another reliability growth object.
8. Set input format to time to event.
9. Specify time to event column.
10. Define event count column again.



### Example 22
> **Summary**: Performs reliability growth analysis with dates and time-to-event data, generating reports on achieved MTBF and goodness of fit.

<!-- Keywords: #ReliabilityGrowth, #ParametricSurvivalModel, #LogNormalDistribution, #JSLScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
mat = dt << Get as matrix;
relg1 = dt << Reliability Growth( Input Format( Dates ), Timestamp( :Date ), Crow AMSAA( Achieved MTBF( 0.05 ), Goodness of Fit ), );
dt << New Column( "Day" );
dc = Column( "Day" );
formula = (dt:dc << Set Formula( Date Difference( mat[1, 1], :Date, "Day" ) ));
Row State( 1 ) = Excluded State( 1 );
relg2 = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Crow AMSAA( Achieved MTBF( 0.05 ), Goodness of Fit ), 
);
Close( dt, No Save );
launch1 = Function( {dt},
	relg1 = dt << Reliability Growth(
		Input Format( Dates ),
		Timestamp( :Date ),
		Event Count( :Fixes ),
		Crow AMSAA with Modified MLE( Achieved MTBF, Goodness of Fit )
	)
);
launch2 = Function( {dt},
	dt << New Column( "Day" );
	dc = Column( "Day" );
	formula = (dt:dc << Set Formula( Date Difference( :Date[1, 1], :Date, "Day" ) ));
	Row State( 1 ) = Excluded State( 1 );
	dt << Reliability Growth(
		Input Format( Time to Event ),
		Time to Event( :Day ),
		Event Count( :Fixes ),
		Crow AMSAA with Modified MLE( Achieved MTBF, Goodness of Fit )
	);
);
asserts = Function( {relg1, relg2},
	rlt1 = relg1 << get results;
	rgres1 = rlt1["Crow AMSAA with Modified MLE"];
	rpt1 = relg1 << report;
	std1 = (rpt1[Number Col Box( "Std Error" )] << get as matrix);
	amtbf1 = (rpt1[Outline Box( "Achieved MTBF" )][Table Box( 1 )] << get as matrix);
	gof1 = (rpt1[Outline Box( "Goodness of Fit" )][Table Box( 1 )] << get as matrix);
	rlt2 = relg2 << get results;
	rgres2 = rlt2["Crow AMSAA with Modified MLE"];
	rpt2 = relg2 << report;
	std2 = (rpt2[Number Col Box( "Std Error" )] << get as matrix);
	amtbf2 = (rpt2[Outline Box( "Achieved MTBF" )][Table Box( 1 )] << get as matrix);
	gof2 = (rpt2[Outline Box( "Goodness of Fit" )][Table Box( 1 )] << get as matrix);
);
```

**Code Explanation**:

1. Open data table.
2. Convert table to matrix.
3. Perform reliability growth analysis with dates.
4. Create new "Day" column.
5. Calculate days from first date.
6. Exclude first row.
7. Perform reliability growth analysis with time-to-event.
8. Close data table without saving.
9. Define function for first reliability growth analysis.
10. Define function for second reliability growth analysis.



### Example 23
> **Summary**: Performs reliability growth analysis with dates and time to event, generating two separate Reliability Growth models using the Crow AMSAA with Modified MLE method.

<!-- Keywords: #ReliabilityGrowth, #CrowAMSAA, #ModifiedMLE, #JSLScripting, #SurvivalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
mat = dt << Get as matrix;
relg1 = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Crow AMSAA with Modified MLE( Achieved MTBF( 0.05 ), Goodness of Fit ), 
);
dt << New Column( "Day" );
dc = Column( "Day" );
formula = (dt:dc << Set Formula( Date Difference( :Date[1, 1], :Date, "Day" ) ));
Row State( 1 ) = Excluded State( 1 );
relg2 = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Crow AMSAA with Modified MLE( Achieved MTBF( 0.05 ), Goodness of Fit ), 
);
```

**Code Explanation**:

1. Open data table.
2. Convert data to matrix.
3. Run Reliability Growth analysis with dates.
4. Create new column "Day".
5. Define formula for "Day" column.
6. Exclude first row.
7. Run Reliability Growth analysis with time to event.



### Example 24
> **Summary**: Performs reliability growth analysis and report generation using the Crow AMSAA method, extracting achieved MTBF, unbiased beta value, and Cramer von Mises statistic from a LogNormal distribution model.

<!-- Keywords: #ReliabilityGrowth, #CrowAMSAA, #LogNormalDistribution, #ParametricSurvivalModel, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
relg = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours ),
	Crow AMSAA( Achieved MTBF( .05 ), Goodness of Fit )
);
rlt = relg << get results;
rgres = rlt["Crow AMSAA"];
param = Matrix( rgres["Parameter Estimate"] );
nparam = N Rows( param );
rpt = relg << report;
MTBFachieve = (rpt[Outline Box( "Achieved MTBF" )][Table Box( 1 )] << get as matrix)[1 :: 2];
betaunbias = (rpt[Number Col Box( "Unbiased beta" )] << get)[1];
cvm_gof = (rpt[Number Col Box( "Cramer von Mises" )] << get)[1];
relg2 = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours ),
	Crow AMSAA( Achieved MTBF( .05 ), Goodness of Fit )
);
rlt2 = relg2 << get results;
rgres2 = rlt2["Crow AMSAA"];
param2 = Matrix( rgres2["Parameter Estimate"] );
nparam2 = N Rows( param2 );
rpt2 = relg2 << report;
MTBFachieve2 = (rpt2[Outline Box( "Achieved MTBF" )][Table Box( 1 )] << get as matrix)[1 :: 2];
betaunbias2 = (rpt2[Number Col Box( "Unbiased beta" )] << get)[1];
cvm_gof2 = (rpt2[Number Col Box( "Cramer von Mises" )] << get)[1];
_mat = dt << get as matrix();
nr = N Rows( dt );
betahat = nr / Sum( Ln( _mat[nr, 1] / _mat[0, 1] ) );
lambdahat = nr / (_mat[nr, 1] ^ betahat);
unbiasbeta = (nr - 2) * betahat / nr;
achieveMTBF = _mat[nr, 1] / (nr * betahat);
atTime = _mat[nr, 1];
M = nr - 1;
cvm = 1 / (12 * M) + Sum( ((_mat[1 :: M, 1] :/ _mat[nr, 1]) ^ unbiasbeta - (Transpose( 1 :: M ) * 2 - 1) / (2 * M)) ^ 2 );
neg2lnL = -2 * (nr * Ln( lambdahat * betahat ) - lambdahat * _mat[nr, 1] ^ betahat + (betahat - 1) * Sum( Ln( _mat[0, 1] ) ));
bic = neg2lnL + nparam * Ln( nr );
aic = 2 * nparam + neg2lnL;
aicc = aic + 2 * nparam * (nparam + 1) / (nr - nparam - 1);
```

**Code Explanation**:

1. Open data table.
2. Perform reliability growth analysis.
3. Retrieve results from analysis.
4. Extract Crow AMSAA parameters.
5. Convert parameter estimates to matrix.
6. Get number of parameters.
7. Generate analysis report.
8. Extract achieved MTBF.
9. Get unbiased beta value.
10. Retrieve Cramer von Mises statistic.



### Example 25
> **Summary**: Performs reliability growth analysis using the Crow AMSAA method, with input format set to dates and event count based on fixes, and retrieves a window object.

<!-- Keywords: #ReliabilityGrowth, #CrowAMSAA, #ParametricSurvivalModel, #LogNormalDistribution, #JMPScriptingLanguage -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
rg = dt2 << Reliability Growth( Input Format( Dates ), Timestamp( :Day ), Event Count( :Fixes ), Phase( :Design Phase ), Crow AMSAA );
rg << Relaunch Analysis;
wn = Window( "Reliability Growth" );
```

**Code Explanation**:

1. Open data table.
2. Create reliability growth object.
3. Set input format to dates.
4. Specify timestamp column.
5. Define event count column.
6. Set phase column.
7. Choose Crow AMSAA method.
8. Relaunch analysis.
9. Retrieve window object.
10. Assign to variable `wn`.



### Example 26
> **Summary**: Performs reliability growth analysis using the Piecewise Weibull NHPP method with change point detection, based on dates and event counts.

<!-- Keywords: #ReliabilityGrowth, #PiecewiseWeibullNHPP, #ChangePointDetection, #ParametricSurvivalModel, #LogNormalDistribution -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes ),
	Piecewise Weibull NHPP Change Point Detection
);
```

**Code Explanation**:

1. Open data table.
2. Call Reliability Growth platform.
3. Set input format to dates.
4. Specify timestamp column.
5. Define event count column.
6. Use Piecewise Weibull NHPP method.
7. Enable change point detection.



### Example 27
> **Summary**: Performs reliability growth analysis using the LogNormal distribution with Piecewise Weibull NHPP change point detection, extracting estimates and model list from a report.

<!-- Keywords: #ReliabilityGrowth, #LogNormalDistribution, #PiecewiseWeibullNHPP, #ChangePointDetection, #ParametricSurvivalModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
relg = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase ),
	Piecewise Weibull NHPP
);
rgres = relg << report;
param = (rgres[Outline Box( "Estimates" )][Table Box( 1 )] << get as matrix);
model = (rgres[Outline Box( "Model List" )][Table Box( 1 )] << get as matrix);
_mat = dt << get as matrix();
N = N Rows( dt );
r = (dt << Get Rows Where( :Fixes == 0 ));
C = _mat[r, 1];
NP = r - 1;
N1 = Sum( _mat[1 :: NP[1], 2] );
N2 = Sum( _mat[NP[1] + 1 :: NP[2], 2] );
N3 = Sum( _mat[NP[2] + 1 :: N, 2] );
T = _mat[N, 1];
temp1 = Sum( _mat[1 :: NP[1], 2] :* Ln( _mat[1 :: NP[1], 1] ) );
temp2 = Sum( _mat[NP[1] + 2 :: NP[2], 2] :* Ln( _mat[NP[1] + 2 :: NP[2], 1] ) );
temp3 = Sum( _mat[NP[2] + 2 :: N, 2] :* Ln( _mat[NP[2] + 2 :: N, 1] ) );
est = J( 4, 1, 0 );
est[2] = N1 / (N1 * Ln( C[1] ) - temp1);
est[3] = N2 / ((N1 + N2) * Ln( C[2] ) - temp2 - N1 * Ln( C[1] ));
est[4] = N3 / (((N1 + N2 + N3) * Ln( T )) - temp3 - ((N1 + N2) * Ln( C[2] )));
est[1] = (N1 + N2 + N3) / (C[1] ^ (est[2] - est[3]) * C[2] ^ (est[3] - est[4]) * T ^ est[4]);
lnL = (N1 + N2 + N3) * Ln( est[1] ) + N1 * Ln( est[2] ) + N2 * Ln( est[3] ) + N3 * Ln( est[4] ) + (N2 + N3) * (est[2] - est[3]) *
Ln( C[1] ) + N3 * (est[3] - est[4]) * Ln( C[2] ) + (est[2] - 1) * temp1 + (est[3] - 1) * temp2 + (est[4] - 1) * temp3 - (N1 + N2 + N3);
neg2lnL = -2 * lnL;
nparam = N Rows( est );
bic = neg2lnL + nparam * Ln( N1 + N2 + N3 );
aic = 2 * nparam + neg2lnL;
aicc = aic + 2 * nparam * (nparam + 1) / (N1 + N2 + N3 - nparam - 1);
```

**Code Explanation**:

1. Open data table.
2. Perform reliability growth analysis.
3. Extract estimates from report.
4. Extract model list from report.
5. Convert data table to matrix.
6. Calculate number of rows.
7. Identify rows with zero fixes.
8. Extract specific column values.
9. Calculate phase boundaries.
10. Compute various statistical metrics.



### Example 28
> **Summary**: Runs the Reliability Growth analysis using Crow AMSAA model to estimate failure rates and predict future failures, with fixed parameters for lambda and Beta.

<!-- Keywords: #ReliabilityGrowth, #CrowAMSAA, #ParametricSurvivalModel, #LogNormalDistribution, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ), Event Count( :Fixes ), );
obj << Fixed Parameter Crow AMSAA( lambda( 0.012 ) );
obj << Fixed Parameter Crow AMSAA( Beta( 0.75 ), lambda( 0 ) );
```

**Code Explanation**:

1. Open data table.
2. Run Reliability Growth analysis.
3. Set input format.
4. Specify time to event.
5. Define event count.
6. Apply Crow AMSAA model.
7. Fix lambda parameter.
8. Fix Beta parameter.
9. Fix lambda parameter again.
10. End script execution.



### Example 29
> **Summary**: Performs reliability growth analysis using the LogNormal distribution and Piecewise Weibull NHPP Change Point Detection, extracting parameter estimates, negative log-likelihood, AICc, BIC, number of parameters, and number of observations.

<!-- Keywords: #ReliabilityGrowth, #LogNormalDistribution, #PiecewiseWeibullNHPP, #ChangePointDetection, #ParametricSurvivalModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Piecewise Weibull NHPP Change Point Detection
);
rpt = obj << report;
gres = obj << get results;
res = gres["Piecewise Weibull NHPP Change Point Detection"];
est_GetResults = Matrix( res["Parameter Estimate"] );
neg2llk_GetResults = Matrix( res["Negative 2 Loglikelihood"] );
aicc_GetResults = Matrix( res["AICc"] );
bic_GetResults = Matrix( res["BIC"] );
nparm_GetResults = Matrix( res["NParm"] );
nobs_GetResults = Matrix( res["NObs"] );
nparm_ObjReport = Matrix( rpt[Number Col Box( "Nparm" )] << get );
neg2llk_ObjReport = Matrix( rpt[Number Col Box( "-2Loglikelihood" )] << get );
aicc_ObjReport = Matrix( rpt[Number Col Box( "AICc" )] << get );
bic_ObjReport = Matrix( rpt[Number Col Box( "BIC" )] << get );
est_ObjReport = Matrix( rpt[Number Col Box( "Estimate" )] << get );
change_ObjReport = Matrix( rpt[Outline Box( "Estimates" ), Number Col Box( 5 )] << get );
nobs_ObjReport = Matrix( Sum( dt << get as matrix( {2} ) ) );
Close( dt, No Save );
asserts = Function( {rpt, res, dt},
	est_GetResults = Matrix( res["Parameter Estimate"] );
	neg2llk_GetResults = Matrix( res["Negative 2 Loglikelihood"] );
	aicc_GetResults = Matrix( res["AICc"] );
	bic_GetResults = Matrix( res["BIC"] );
	nparm_GetResults = Matrix( res["NParm"] );
	nobs_GetResults = Matrix( res["NObs"] );
	nparm_ObjReport = Matrix( rpt[Number Col Box( "Nparm" )] << get );
	neg2llk_ObjReport = Matrix( rpt[Number Col Box( "-2Loglikelihood" )] << get );
	aicc_ObjReport = Matrix( rpt[Number Col Box( "AICc" )] << get );
	bic_ObjReport = Matrix( rpt[Number Col Box( "BIC" )] << get );
	est_ObjReport = Matrix( rpt[Number Col Box( "Estimate" )] << get );
	nobs_ObjReport = Matrix( Sum( dt << get as matrix( {2} ) ) );
);
```

**Code Explanation**:

1. Open data table.
2. Perform reliability growth analysis.
3. Retrieve analysis report.
4. Extract analysis results.
5. Store parameter estimates.
6. Store negative log-likelihood.
7. Store AICc value.
8. Store BIC value.
9. Store number of parameters.
10. Store number of observations.



### Example 30
> **Summary**: Fits a Piecewise Weibull NHPP model to analyze reliability growth data, including the effect of variable x and generating a report with results.

<!-- Keywords: #ReliabilityGrowth, #PiecewiseWeibullNHPP, #ParametricSurvivalModel, #LogNormalDistribution, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase ),
	Piecewise Weibull NHPP
);
rpt = obj << report;
gres = obj << get results;
res = gres["Piecewise Weibull NHPP"];
```

**Code Explanation**:

1. Open data table.
2. Launch Reliability Growth platform.
3. Set input format to Time to Event.
4. Specify Time to Event column.
5. Define Event Count column.
6. Identify Phase column.
7. Select Piecewise Weibull NHPP model.
8. Generate report object.
9. Retrieve analysis results.
10. Extract Piecewise Weibull NHPP results.



### Example 31
> **Summary**: Fits a Reinitialized Weibull NHPP model to analyze reliability growth data, incorporating time-to-event and event count information.

<!-- Keywords: #ReliabilityGrowth, #WeibullNHPP, #ParametricSurvivalModel, #LogNormalDistribution, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase ),
	Reinitialized Weibull NHPP
);
rpt = obj << report;
gres = obj << get results;
res = gres["Reinitialized Weibull NHPP"];
```

**Code Explanation**:

1. Open data table.
2. Launch Reliability Growth platform.
3. Set input format.
4. Specify time to event column.
5. Define event count column.
6. Select phase column.
7. Choose Weibull NHPP model.
8. Generate report object.
9. Retrieve results object.
10. Extract specific result.



### Example 32
> **Summary**: Creates a reliability growth object using the Piecewise Weibull NHPP model to analyze the time-to-event data in a JMP data table.

<!-- Keywords: #ReliabilityGrowth, #PiecewiseWeibullNHPP, #TimeToEvent, #JMPScriptingLanguage, #ParametricSurvivalModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Day ), Event Count( :Fixes ), Piecewise Weibull NHPP );
```

**Code Explanation**:

1. Open data table.
2. Assign table to `dt`.
3. Create reliability growth object.
4. Set input format to time-to-event.
5. Specify time-to-event column.
6. Define event count column.
7. Use piecewise Weibull NHPP model.



### Example 33
> **Summary**: Fits a parametric survival model using the LogNormal distribution with the Personality set to Parametric Survival, incorporating the effect of variable x.

<!-- Keywords: #ReliabilityGrowth, #ParametricSurvivalModel, #LogNormalDistribution, #WeibullNHPP, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Day ), Event Count( :Fixes ), Reinitialized Weibull NHPP );
```

**Code Explanation**:

1. Open data table.
2. Assign data table to variable.
3. Call Reliability Growth platform.
4. Set input format to time-to-event.
5. Specify time to event column.
6. Define event count column.
7. Select Reinitialized Weibull NHPP model.



### Example 34
> **Summary**: Performs reliability growth analysis on a data table, generating a report and extracting key metrics such as parameter estimates, negative 2 log-likelihood, AICc, BIC, number of parameters, and number of observations.

<!-- Keywords: #ReliabilityGrowth, #ParametricSurvivalModel, #LogNormalDistribution, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ), Event Count( :Fixes ), Crow AMSAA );
rpt = obj << report;
res = obj << get results;
est_GetResults = Matrix( res["Crow AMSAA"]["Parameter Estimate"] );
neg2llk_GetResults = Matrix( res["Crow AMSAA"]["Negative 2 Loglikelihood"] );
aicc_GetResults = Matrix( res["Crow AMSAA"]["AICc"] );
bic_GetResults = Matrix( res["Crow AMSAA"]["BIC"] );
nparm_GetResults = Matrix( res["Crow AMSAA"]["NParm"] );
nobs_GetResults = Matrix( res["Crow AMSAA"]["NObs"] );
nparm_ObjReport = Matrix( rpt[Number Col Box( "Nparm" )] << get );
neg2llk_ObjReport = Matrix( rpt[Number Col Box( "-2Loglikelihood" )] << get );
aicc_ObjReport = Matrix( rpt[Number Col Box( "AICc" )] << get );
bic_ObjReport = Matrix( rpt[Number Col Box( "BIC" )] << get );
est_ObjReport = Matrix( (rpt[Number Col Box( "Estimate" )] << get)[1 :: 2] );
nobs_ObjReport = Matrix( Sum( dt << get as matrix( {2} ) ) );
```

**Code Explanation**:

1. Open data table.
2. Perform reliability growth analysis.
3. Generate report object.
4. Retrieve analysis results.
5. Extract parameter estimates.
6. Extract negative 2 log-likelihood.
7. Extract AICc value.
8. Extract BIC value.
9. Extract number of parameters.
10. Extract number of observations.



### Example 35
> **Summary**: Analyze reliability growth using a Piecewise Weibull NHPP change point detection model, extracting parameter estimates and statistical metrics from the report object.

<!-- Keywords: #ReliabilityGrowth, #PiecewiseWeibullNHPP, #JMPScriptingLanguage, #ParametricSurvivalModel, #LogNormalDistribution -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Piecewise Weibull NHPP Change Point Detection
);
rpt = obj << report;
gres = obj << get results;
res = gres["Piecewise Weibull NHPP Change Point Detection"];
est_GetResults = Matrix( res["Parameter Estimate"] );
neg2llk_GetResults = Matrix( res["Negative 2 Loglikelihood"] );
aicc_GetResults = Matrix( res["AICc"] );
bic_GetResults = Matrix( res["BIC"] );
nparm_GetResults = Matrix( res["NParm"] );
nobs_GetResults = Matrix( res["NObs"] );
nparm_ObjReport = Matrix( rpt[Number Col Box( "Nparm" )] << get );
neg2llk_ObjReport = Matrix( rpt[Number Col Box( "-2Loglikelihood" )] << get );
aicc_ObjReport = Matrix( rpt[Number Col Box( "AICc" )] << get );
bic_ObjReport = Matrix( rpt[Number Col Box( "BIC" )] << get );
est_ObjReport = Matrix( rpt[Number Col Box( "Estimate" )] << get );
change_ObjReport = Matrix( rpt[Outline Box( "Estimates" ), Number Col Box( 5 )] << get );
nobs_ObjReport = Matrix( Sum( dt << get as matrix( {2} ) ) );
```

**Code Explanation**:

1. Open data table.
2. Run Reliability Growth analysis.
3. Extract report object.
4. Retrieve analysis results.
5. Access Piecewise Weibull NHPP results.
6. Extract parameter estimates.
7. Extract negative 2 log-likelihood.
8. Extract AICc value.
9. Extract BIC value.
10. Extract number of parameters.



## Reliability Growth using Select Rows
> **Summary**: Performs reliability growth analysis and retrieval of results, utilizing the JMP Reliability Growth platform to analyze data table rows.

<!-- Keywords: #JMPReliabilityGrowth, #DataAnalysis, #ScriptingLanguage, #JSL, #ReliabilityEngineering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
r = dt << Select Rows( [1] );
Column( dt, 2 )[1] = 0;
relg = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ), Event Count( :Fixes ), Crow AMSAA );
rlt = relg << get results;
r << exclude;
relg1 = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ), Event Count( :Fixes ), Crow AMSAA );
rlt1 = relg1 << get results;
```

**Code Explanation**:

1. Open data table.
2. Select first row.
3. Set second column value to 0.
4. Perform reliability growth analysis.
5. Retrieve analysis results.
6. Exclude selected row.
7. Perform reliability growth analysis again.
8. Retrieve new analysis results.



## Reliability Growth using Column
### Example 1
> **Summary**: Performs reliability growth analysis with Crow AMSAA method to estimate achieved MTBF and goodness of fit, utilizing a data table opened from a file.

<!-- Keywords: #ReliabilityGrowthAnalysis, #CrowAMSAA, #MTBF, #GoodnessOfFit, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, 1 )[1] = 0;
relg2 = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours ),
	Crow AMSAA( Achieved MTBF( .05 ), Goodness of Fit )
);
rlt2 = relg2 << get results;
```

**Code Explanation**:

1. Open data table.
2. Modify first column value.
3. Perform reliability growth analysis.
4. Set input format to time-to-event.
5. Specify time-to-event column.
6. Use Crow AMSAA method.
7. Set achieved MTBF to 0.05.
8. Request goodness of fit.
9. Retrieve analysis results.



### Example 2
> **Summary**: Performs reliability growth analysis with Crow AMSAA method, retrieving results and excluding a selected row.

<!-- Keywords: #ReliabilityGrowth, #CrowAMSAA, #JSLScripting, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, 1 )[1] = 0;
Column( dt, 2 )[1] = 0;
relg = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ), Event Count( :Fixes ), Crow AMSAA );
rlt = relg << get results;
r = dt << Select Rows( [1] );
r << exclude;
relg1 = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ), Event Count( :Fixes ), Crow AMSAA );
rlt1 = relg1 << get results;
```

**Code Explanation**:

1. Open data table.
2. Set first row, column 1 to 0.
3. Set first row, column 2 to 0.
4. Run Reliability Growth analysis.
5. Retrieve analysis results.
6. Select first row.
7. Exclude selected row.
8. Run Reliability Growth analysis again.
9. Retrieve new analysis results.



### Example 3
> **Summary**: Performs reliability growth analysis and extracts key metrics, including Crow AMSAA parameters, achieved MTBF, unbiased beta, and Cramer von Mises goodness of fit.

<!-- Keywords: #ReliabilityGrowthAnalysis, #CrowAMSAA, #MTBF, #UnbiasedBeta, #CramerVonMises -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, 2 )[N Rows( dt )] = 0;
relg = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	Crow AMSAA( Achieved MTBF( .05 ), Goodness of Fit )
);
rpt = relg << report;
rlt = relg << get results;
rgres = rlt["Crow AMSAA"];
param = Matrix( rgres["Parameter Estimate"] );
nparam = N Rows( param );
slope = Matrix( rpt[Number Col Box( "Estimate" )] << get )[3];
stderr = stderr = Matrix( rpt[Number Col Box( "Std Error" )] << get );
MTBFachieve = (rpt[Outline Box( "Achieved MTBF" )][Table Box( 1 )] << get as matrix)[1 :: 2];
betaunbias = Matrix( rpt[Number Col Box( "Unbiased beta" )] << get )[1];
cvm_gof = Matrix( rpt[Number Col Box( "Cramer von Mises" )] << get )[1];
neg2lnL = rgres["Negative 2 Loglikelihood"];
_mat = dt << get as matrix();
n = Sum( _mat[0, 2] );
nr = N Rows( dt );
betahat = n / Sum( Ln( _mat[nr, 1] / _mat[0, 1] ) );
lambdahat = n / (_mat[nr, 1] ^ betahat);
unbiasbeta = (n - 1) * betahat / n;
achieveMTBF = _mat[nr, 1] / (n * betahat);
atTime = _mat[nr, 1];
M = nr - 1;
cvm = 1 / (12 * M) + Sum( ((_mat[1 :: M, 1] :/ _mat[nr, 1]) ^ unbiasbeta - (Transpose( 1 :: M ) * 2 - 1) / (2 * M)) ^ 2 );
bic = neg2lnL + nparam * Ln( n );
aic = 2 * nparam + neg2lnL;
aicc = aic + 2 * nparam * (nparam + 1) / (n - nparam - 1);
```

**Code Explanation**:

1. Open table.
2. Set last row's second column to 0.
3. Perform reliability growth analysis.
4. Retrieve analysis report.
5. Get analysis results.
6. Extract Crow AMSAA parameters.
7. Get parameter estimates.
8. Calculate slope from report.
9. Get standard error from report.
10. Extract achieved MTBF from report.



