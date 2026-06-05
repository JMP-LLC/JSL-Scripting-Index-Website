# MaxDiff

### Example 1
> **Summary**: Performs a MaxDiff analysis on the 'data_table.jmp' data table, specifying response subject ID, profile ID, and profile effects for candy, with Firth bias-adjusted estimates.

<!-- Keywords: #MaxDiff, #JMPScriptingLanguage, #DataAnalysis, #SurveyResearch, #FirthBiasAdjustment -->

**Code**:
```jsl
// MaxDiff
// Open data table
dt = Open("data_table.jmp");
// MaxDiff
MaxDiff(
	One Table( 1 ),
	Response Subject ID( :Subject ),
	Profile ID( :Choice ),
	Profile Grouping(
		:Subject, :Choice Set
	),
	Profile Effects( :Candy ),
	"Firth Bias-adjusted Estimates"n( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Call MaxDiff function.
3. Specify one table.
4. Define response subject ID.
5. Define profile ID.
6. Group profiles by subject and choice set.
7. Specify profile effects for candy.
8. Enable Firth bias adjustment.



### Example 2
> **Summary**: Performs a MaxDiff analysis on the 'data_table.jmp' file, specifying subject ID as 'Respondent', choice set ID, profile ID, and profile grouping. The script also enables Firth bias adjustment and specifies response values.

<!-- Keywords: #MaxDiff, #JMPScriptingLanguage, #DataAnalysis, #SurveyResearch, #FirthBiasAdjustment -->

**Code**:
```jsl
// One Table MaxDiff
// Open data table
dt = Open("data_table.jmp");
// One Table MaxDiff
MaxDiff(
	One Table( 1 ),
	Subject ID( :Respondent ),
	Choice Set ID( :Choice Set ID ),
	Profile ID( :Response ),
	Profile Grouping( :Survey ID ),
	Profile Effects( :Profile ID ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	Response Value Indicates Best( 1 ),
	Response Value Indicates Worst( -1 )
);
```

**Code Explanation**:

1. Open data table.
2. Run MaxDiff analysis.
3. Use one table.
4. Set subject ID.
5. Set choice set ID.
6. Set profile ID.
7. Set profile grouping.
8. Include profile effects.
9. Enable Firth bias adjustment.
10. Specify response values.



### Example 3
> **Summary**: Performs a MaxDiff analysis on the 'data_table.jmp' data table, specifying response and profile data tables, subject data table, and effects for flavor and citizenship/gender.

<!-- Keywords: #MaxDiff, #JMPScriptingLanguage, #DataAnalysis, #FlavorProfiling, #SurveyResearch -->

**Code**:
```jsl
// MaxDiff for Flavor
// Open data table
dt = Open("data_table.jmp");
// MaxDiff for Flavor
Open("data_table.jmp");
Open("data_table.jmp");
MaxDiff(
	Response Data Table(
		Data Table("data_table")
	),
	Profile DataTable(
		Potato Chip Profiles
	),
	Subject DataTable(
		Data Table("data_table")
	),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices(
		:Choice 1, :Choice 2, :Choice 3
	),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Subject Effects(
		:Citizenship, :Gender
	),
	"Firth Bias-adjusted Estimates"n( 1 ),
	Response Best Option( :Best Profile ),
	Response Worst Option(
		:Worst Profile
	)
);
```

**Code Explanation**:

1. Open data table.
2. Open data table.
3. Open data table.
4. Run MaxDiff analysis.
5. Specify response data table.
6. Specify profile data table.
7. Specify subject data table.
8. Set response subject ID.
9. Define response profile choices.
10. Set profile ID and effects.



### Example 4
> **Summary**: Performs a MaxDiff analysis with no subject effects on the 'data_table.jmp' data, specifying response and profile data tables, as well as response and profile IDs.

<!-- Keywords: #MaxDiff, #JMPScriptingLanguage, #DataAnalysis, #ProfileEffects, #FirthBias-adjustedEstimates -->

**Code**:
```jsl
// MaxDiff with No Subject Effects
// Open data table
dt = Open("data_table.jmp");
// MaxDiff with No Subject Effects
Open("data_table.jmp");
Open("data_table.jmp");
MaxDiff(
	Response Data Table(
		Data Table("data_table")
	),
	Profile DataTable(
		Potato Chip Profiles
	),
	Subject DataTable(
		Data Table("data_table")
	),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices(
		:Choice 1, :Choice 2, :Choice 3
	),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	"Firth Bias-adjusted Estimates"n( 1 ),
	Response Best Option( :Best Profile ),
	Response Worst Option(
		:Worst Profile
	)
);
```

**Code Explanation**:

1. Open data table.
2. Open subjects table.
3. Open profiles table.
4. Run MaxDiff analysis.
5. Specify response data table.
6. Specify profile data table.
7. Specify subject data table.
8. Set response subject ID.
9. Set response profile ID choices.
10. Set profile ID.



### Example 5
> **Summary**: Performs a MaxDiff analysis on the 'data_table.jmp' data table, specifying response and profile IDs, subject effects, and custom axis settings for continuous distributions.

<!-- Keywords: #MaxDiff, #DataAnalysis, #JMPScriptingLanguage, #ContinuousDistributions, #CustomAxisSettings -->

**Code**:
```jsl
// Max Diff for Product Of
// Open data table
dt = Open("data_table.jmp");
// Max Diff for Product Of
Open("data_table.jmp");
Open("data_table.jmp");
MaxDiff(
	Response Data Table(
		Data Table("data_table")
	),
	Profile DataTable(
		Potato Chip Profiles
	),
	Subject DataTable(
		Data Table("data_table")
	),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices(
		:Choice 1, :Choice 2, :Choice 3
	),
	Profile ID( :Profile ID ),
	Profile Effects( :Product Of ),
	Subject Subject ID( :Respondent ),
	Subject Effects(
		:Citizenship, :Gender
	),
	"Firth Bias-adjusted Estimates"n( 1 ),
	Response Best Option( :Best Profile ),
	Response Worst Option(
		:Worst Profile
	)
);
```

**Code Explanation**:

1. Open data table.
2. Open data table.
3. Open data table.
4. Run MaxDiff analysis.
5. Set response data table.
6. Set profile data table.
7. Set subject data table.
8. Define response subject ID.
9. Define response profile choices.
10. Define profile ID and effects.



### Example 6
> **Summary**: Performs a MaxDiff analysis with Hierarchical Bayes on the specified data table, utilizing response subject ID, profile ID choices, and subject effects.

<!-- Keywords: #MaxDiff, #HierarchicalBayes, #JMPScriptingLanguage, #DataAnalysis, #SurveyResearch -->

**Code**:
```jsl
// MaxDiff with Hierarchical Bayes
// Open data table
dt = Open("data_table.jmp");
// MaxDiff with Hierarchical Bayes
Open("data_table.jmp");
Open("data_table.jmp");
Open("data_table.jmp");
MaxDiff(
	Response Data Table(
		Data Table("data_table")
	),
	Profile DataTable(
		Data Table("data_table")
	),
	Subject DataTable(
		Data Table("data_table")
	),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices(
		:Choice 1, :Choice 2, :Choice 3
	),
	Profile ID( :Profile ID ),
	Profile Effects( :Product Of ),
	Subject Subject ID( :Respondent ),
	Subject Effects(
		:Citizenship, :Gender
	),
	Hierarchical Bayes( 1 ),
	Hierarchical Bayes( 1 ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	Response Best Option( :Best Profile ),
	Response Worst Option(
		:Worst Profile
	)
);
```

**Code Explanation**:

1. Open data table.
2. Open data table.
3. Open data table.
4. Open data table.
5. Run MaxDiff analysis.
6. Specify response data table.
7. Specify profile data table.
8. Specify subject data table.
9. Set response subject ID.
10. Set response profile choices.



### Example 7
> **Summary**: Performs the MaxDiff analysis on three data tables, specifying response and profile IDs, and saving utility formulas.

<!-- Keywords: #MaxDiff, #DataTables, #JSLScriptingLanguage, #UtilityFormulas, #StatisticalAnalysis -->

**Code**:
```jsl
dt1 = Open("data_table1.jmp");
dt2 = Open("data_table2.jmp");
dt3 = Open("data_table3.jmp");
obj1 = MaxDiff(
	Response Data Table( Data Table("data_table1") ),
	Profile DataTable( dt2 ),
	Subject DataTable( Data Table("data_table3") ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Subject Effects( :Citizenship ),
	Name( "Firth Bias-Adjusted Estimates" )(1),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);
obj1 << Save Utility Formula;
newdt = Current Data Table();
actRows = N Rows( newdt );
```

**Code Explanation**:

1. Open table "data_table1".
2. Open table "data_table2".
3. Open table "data_table3".
4. Run MaxDiff analysis.
5. Specify response data table.
6. Specify profile data table.
7. Specify subject data table.
8. Set response subject ID.
9. Set response profile ID choices.
10. Set profile ID.



### Example 8
> **Summary**: Estimates Firth bias-adjusted estimates using MaxDiff platform for a specified data table, with hierarchical Bayes and response value indication for best and worst options.

<!-- Keywords: #MaxDiff, #FirthBiasAdjustment, #HierarchicalBayes, #ResponseValueIndication, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << MaxDiff(
	One Table( 1 ),
	Subject ID( :Respondent ),
	Choice Set ID( :Choice Set ID ),
	Profile ID( :Response ),
	Profile Effects( :Profile ID ),
	Name( "Firth Bias-Adjusted Estimates" )(0),
	Hierarchical Bayes( 1 ),
	Response Value Indicates Best( 1 ),
	Response Value Indicates Worst( -1 )
);
```

**Code Explanation**:

1. Open data table.
2. Launch MaxDiff platform.
3. Specify one table.
4. Set subject ID column.
5. Define choice set ID column.
6. Identify profile ID column.
7. Include profile effects.
8. Disable Firth bias adjustment.
9. Enable hierarchical Bayes.
10. Set response value for best option.
11. Set response value for worst option.



### Example 9
> **Summary**: Performs the MaxDiff analysis on three data tables, extracting Bayesian parameter estimates and verifying confidence limits.

<!-- Keywords: #MaxDiff, #BayesianAnalysis, #DataTables, #JSLScripting, #ConfidenceLimits -->

**Code**:
```jsl
dt1 = Open("data_table1.jmp");
dt2 = Open("data_table2.jmp");
dt3 = Open("data_table3.jmp");
obj = MaxDiff(
	Response Data Table( Data Table("data_table1") ),
	Profile DataTable( data_table2 ),
	Subject DataTable( Data Table("data_table3") ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Subject Effects( :Gender ),
	Name( "Firth Bias-Adjusted Estimates" )(0),
	Hierarchical Bayes( 1 ),
	Number of Bayesian Iterations( 1000 ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);
rpt = obj << Report;
text = rpt[Outline Box( "Bayesian Parameter Estimates" )] << Get Text();
shouldBeEmpty = Regex Match( text, "95%" );
obj << Confidence Limits( 1 );
text2 = rpt[Outline Box( "Bayesian Parameter Estimates" )] << Get Text();
shouldBe95 = Regex Match( text2, "95%" );
obj << Confidence Limits( 0 );
text3 = rpt[Outline Box( "Bayesian Parameter Estimates" )] << Get Text();
shouldBeEmpty2 = Regex Match( text3, "95%" );
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Open data table;
4. Run MaxDiff analysis.
5. Extract Bayesian Parameter Estimates text.
6. Check for "95%" presence.
7. Enable confidence limits.
8. Extract updated text.
9. Verify "95%" presence.
10. Disable confidence limits.



### Example 10
> **Summary**: Runs the Firth bias-adjusted estimation of parameters in a MaxDiff analysis, utilizing hierarchical Bayes and confidence intervals.

<!-- Keywords: #MaxDiff, #HierarchicalBayes, #FirthBiasAdjustment, #ConfidenceIntervals, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << MaxDiff(
	One Table( 1 ),
	Subject ID( :Respondent ),
	Choice Set ID( :Choice Set ID ),
	Profile ID( :Response ),
	Profile Effects( :Profile ID ),
	Name( "Firth Bias-Adjusted Estimates" )(0),
	Hierarchical Bayes( 1 ),
	Number of Bayesian Iterations( 1000 ),
	Response Value Indicates Best( 1 ),
	Response Value Indicates Worst( -1 ),
	Confidence Intervals( 1 )
);
rpt = obj << Report;
actBayParEst = rpt[Outline Box( "Bayesian Parameter Estimates" )][Table Box( 1 )] << Get As Matrix;
actSummary = rpt[Outline Box( "Bayesian Parameter Estimates" )][Number Col Box( 6 )] << Get As Matrix;
```

**Code Explanation**:

1. Open table.
2. Run MaxDiff analysis.
3. Specify hierarchical Bayes.
4. Set iterations to 1000.
5. Define response values.
6. Enable confidence intervals.
7. Retrieve report.
8. Extract Bayesian parameter estimates.
9. Extract summary statistics.



### Example 11
> **Summary**: Runs a MaxDiff analysis to estimate Firth bias-adjusted estimates for potato chip preferences, utilizing hierarchical Bayes and confidence intervals.

<!-- Keywords: #MaxDiff, #HierarchicalBayes, #ConfidenceIntervals, #FirthBiasAdjustment, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table1.jmp");
dt2 = Open("data_table2.jmp");
dt3 = Open("data_table3.jmp");
NIter = 1000;
obj = MaxDiff(
	Response Data Table( Data Table("data_table1") ),
	Profile DataTable( data_table2 ),
	Subject DataTable( Data Table("data_table3") ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Subject Effects( :Gender ),
	Name( "Firth Bias-Adjusted Estimates" )(0),
	Hierarchical Bayes( 1 ),
	Number of Bayesian Iterations( 1000 ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile ),
	Confidence Intervals( 1 )
);
```

**Code Explanation**:

1. Open potato chip profiles.
2. Open potato chip responses.
3. Open potato chip subjects.
4. Set iterations to 1000.
5. Define MaxDiff analysis.
6. Specify response data table.
7. Specify profile data table.
8. Specify subject data table.
9. Define response subject ID.
10. Define response profile choices.
11. Define profile ID.
12. Define profile effects.
13. Define subject subject ID.
14. Define subject effects.
15. Disable Firth bias adjustment.
16. Enable hierarchical Bayes.
17. Set Bayesian iterations.
18. Define best profile option.
19. Define worst profile option.
20. Enable confidence intervals.



### Example 12
> **Summary**: Estimates Firth bias-adjusted parameters for a MaxDiff analysis, utilizing Hierarchical Bayes and generating reports with Bayesian parameter estimates and summary statistics.

<!-- Keywords: #MaxDiff, #HierarchicalBayes, #FirthBiasAdjustment, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt1 = Open("data_table1.jmp");
dt2 = Open("data_table2.jmp");
dt3 = Open("data_table3.jmp");
NIter = 1000;
obj = MaxDiff(
	Response Data Table( Data Table("data_table1") ),
	Profile DataTable( data_table2 ),
	Subject DataTable( Data Table("data_table3") ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Subject Effects( :Gender ),
	Name( "Firth Bias-Adjusted Estimates" )(0),
	Hierarchical Bayes( 1 ),
	Number of Bayesian Iterations( 1000 ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile ),
	Confidence Limits( 1 )
);
rpt = obj << Report;
actBayParEst = rpt[Outline Box( "Bayesian Parameter Estimates" )][Table Box( 1 )] << Get As Matrix;
actSummary = rpt[Outline Box( "Bayesian Parameter Estimates" )][Number Col Box( 6 )] << Get As Matrix;
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Open data table;
4. Set NIter to 1000.
5. Create MaxDiff object.
6. Set response data table.
7. Set profile data table.
8. Set subject data table.
9. Define response subject ID.
10. Define response profile ID choices.
11. Define profile ID.
12. Define profile effects.
13. Define subject subject ID.
14. Define subject effects.
15. Disable Firth Bias-Adjusted Estimates.
16. Enable Hierarchical Bayes.
17. Set number of Bayesian iterations.
18. Define response best option.
19. Define response worst option.
20. Enable confidence limits.
21. Generate report.
22. Extract Bayesian parameter estimates.
23. Extract Bayesian summary statistics.



## MaxDiff using New Column
### Example 1
> **Summary**: Fits a standard least squares model with multiple effects and generates profiler plots for data analysis.

<!-- Keywords: #MaxDiff, #DataAnalysis, #LeastSquaresModel, #ProfilerPlot, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "GroupNames",
	Numeric,
	Continuous,
	Formula(
		If( Left( :Respondent, 1 ) == "A" | Left( :Respondent, 1 ) == "B" | Left( :Respondent, 1 ) == "C" | Left( :Respondent, 1 ) == "E",
			0,
			1
		)
	)
);
obj = dt << MaxDiff(
	One Table( 1 ),
	Subject ID( :Respondent ),
	Choice Set ID( :Choice Set ID ),
	Profile ID( :Response ),
	Profile Effects( :Profile ID ),
	Response Value Indicates Best( 1 ),
	Response Value Indicates Worst( -1 ),
	By( :GroupNames )
);
rpt1 = obj[1] << Report();
rpt2 = obj[2] << Report();
dt << Select Where( :GroupNames == 0 );
dt << Delete Rows();
objOne = dt << MaxDiff(
	One Table( 1 ),
	Subject ID( :Respondent ),
	Choice Set ID( :Choice Set ID ),
	Profile ID( :Response ),
	Profile Effects( :Profile ID ),
	Response Value Indicates Best( 1 ),
	Response Value Indicates Worst( -1 )
);
rptOne = objOne << Report();
```

**Code Explanation**:

1. Open data table.
2. Create new column "GroupNames".
3. Define formula for "GroupNames".
4. Run MaxDiff analysis.
5. Extract first report.
6. Extract second report.
7. Select rows where "GroupNames" equals 0.
8. Delete selected rows.
9. Run MaxDiff analysis again.
10. Extract report from new analysis.



### Example 2
> **Summary**: Fits a standard least squares model with multiple effects and generating a profiler plot, utilizing data table operations and MaxDiff analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #MaxDiffAnalysis, #LeastSquaresModel, #ProfilerPlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "GroupNames",
	Numeric,
	Continuous,
	Formula(
		If( Left( :Respondent, 1 ) == "A" | Left( :Respondent, 1 ) == "B" | Left( :Respondent, 1 ) == "C" | Left( :Respondent, 1 ) == "E",
			0,
			1
		)
	)
);
dt << Select Where( :GroupNames == 1 );
dt << Delete Rows();
objZero = dt << MaxDiff(
	One Table( 1 ),
	Subject ID( :Respondent ),
	Choice Set ID( :Choice Set ID ),
	Profile ID( :Response ),
	Profile Effects( :Profile ID ),
	Response Value Indicates Best( 1 ),
	Response Value Indicates Worst( -1 )
);
rptZero = objZero << Report();
```

**Code Explanation**:

1. Open data table.
2. Create new column "GroupNames".
3. Define formula for "GroupNames".
4. Select rows where "GroupNames" equals 1.
5. Delete selected rows.
6. Run MaxDiff analysis.
7. Set subject ID.
8. Set choice set ID.
9. Set profile ID.
10. Generate report.



### Example 3
> **Summary**: Fits a standard least squares model with multiple effects and generating profiler plots for two groups, utilizing MaxDiff analysis and interactive filtering.

<!-- Keywords: #JSLScriptingLanguage, #MaxDiffAnalysis, #LeastSquaresModel, #ProfilerPlot, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "GroupNames",
	Numeric,
	Continuous,
	Formula(
		If( Left( :Respondent, 1 ) == "A" | Left( :Respondent, 1 ) == "B" | Left( :Respondent, 1 ) == "C" | Left( :Respondent, 1 ) == "E",
			0,
			1
		)
	)
);
dt << Select Where( :GroupNames == 1 ) << Exclude( 1 );
objExZ = dt << MaxDiff(
	One Table( 1 ),
	Subject ID( :Respondent ),
	Choice Set ID( :Choice Set ID ),
	Profile ID( :Response ),
	Profile Effects( :Profile ID ),
	Response Value Indicates Best( 1 ),
	Response Value Indicates Worst( -1 )
);
dt << Exclude( 0 );
dt << Invert Row Selection() << Exclude( 1 );
objExZ << Close Window();
objExO = dt << MaxDiff(
	One Table( 1 ),
	Subject ID( :Respondent ),
	Choice Set ID( :Choice Set ID ),
	Profile ID( :Response ),
	Profile Effects( :Profile ID ),
	Response Value Indicates Best( 1 ),
	Response Value Indicates Worst( -1 )
);
dt << Clear Row States();
objExO << Close Window();
dt:GroupNames << Modeling Type( "Nominal" );
objCat = dt << MaxDiff(
	One Table( 1 ),
	Subject ID( :Respondent ),
	Choice Set ID( :Choice Set ID ),
	Profile ID( :Response ),
	Profile Effects( :Profile ID ),
	Response Value Indicates Best( 1 ),
	Response Value Indicates Worst( -1 ),
	By( :GroupNames )
);
rpt1Cat = objCat[1] << Report();
rpt2Cat = objCat[2] << Report();
```

**Code Explanation**:

1. Open data table.
2. Create new column "GroupNames".
3. Apply formula to "GroupNames".
4. Select rows where "GroupNames" equals 1.
5. Exclude selected rows.
6. Run MaxDiff analysis for excluded group.
7. Close MaxDiff window.
8. Select remaining rows.
9. Exclude remaining rows.
10. Run MaxDiff analysis for included group.
11. Clear row states.
12. Close MaxDiff window.
13. Set "GroupNames" modeling type to Nominal.
14. Run MaxDiff analysis by groups.
15. Extract first report from analysis.
16. Extract second report from analysis.



### Example 4
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot using MaxDiff analysis in JMP.

<!-- Keywords: #JMPScriptingLanguage, #MaxDiffAnalysis, #LeastSquaresModel, #ProfilerPlot, #DataTable -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
dt3 = Open("data_table.jmp");
dt3 << New Column( "GroupNames",
	Numeric,
	Nominal,
	Formula(
		If( Left( :Respondent, 1 ) == "A" | Left( :Respondent, 1 ) == "B" | Left( :Respondent, 1 ) == "C" | Left( :Respondent, 1 ) == "E",
			0,
			1
		)
	)
);
obj = MaxDiff(
	Response DataTable( Data Table("data_table") ),
	Profile DataTable( Data Table("data_table") ),
	Subject DataTable( Data Table("data_table") ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Name( "Firth Bias-adjusted Estimates" )(1),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile ),
	By( :GroupNames )
);
rpt1 = obj[1] << Report();
rpt2 = obj[2] << Report(); 
                           
dt1 << New Column( "GroupNames2",
	Numeric,
	Continuous,
	Formula(
		If( Left( :Respondent, 1 ) == "A" | Left( :Respondent, 1 ) == "B" | Left( :Respondent, 1 ) == "C" | Left( :Respondent, 1 ) == "E",
			0,
			1
		)
	)
);
obj = dt1 << MaxDiff(
	Response DataTable( Data Table("data_table") ),
	Profile DataTable( Data Table("data_table") ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Name( "Firth Bias-adjusted Estimates" )(1),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile ),
	By( :GroupNames2 )
);
rpt1 = obj << Report();
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Open data table;
4. Create new column "GroupNames".
5. Define formula for "GroupNames".
6. Run MaxDiff analysis.
7. Extract report from analysis.
8. Create new column "GroupNames2".
9. Define formula for "GroupNames2".
10. Run MaxDiff analysis again.



## MaxDiff using Select Rows
> **Summary**: Performs the MaxDiff analysis to estimate Firth bias-adjusted estimates, utilizing a Log Capture to record output and specifying various parameters such as subject ID, choice set ID, profile ID, and survey ID grouping.

<!-- Keywords: #MaxDiff, #LogCapture, #FirthBiasAdjustment, #ProfileGrouping, #SurveyAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( 1 :: N Row( dt ) );
dt << Exclude( 1 );
myLog = Log Capture(
	dt << MaxDiff(
		One Table( 1 ),
		Subject ID( :Respondent ),
		Choice Set ID( :Choice Set ID ),
		Profile ID( :Response ),
		Profile Grouping( :Survey ID ),
		Profile Effects( :Profile ID ),
		Name( "Firth Bias-Adjusted Estimates" )(1),
		Response Value Indicates Best( 1 ),
		Response Value Indicates Worst( -1 )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Select all rows.
3. Exclude first row.
4. Capture log output.
5. Run MaxDiff analysis.
6. Use one table.
7. Specify subject ID.
8. Define choice set ID.
9. Set profile ID.
10. Group profiles by survey ID.



## MaxDiff using Log Capture
> **Summary**: Executes MaxDiff analysis on three data tables, capturing and extracting posterior mean estimates and parameter values.

<!-- Keywords: #JMPScriptingLanguage, #MaxDiffAnalysis, #BayesianEstimation, #DataTables, #LogCapture -->

**Code**:
```jsl
dt1 = Open("data_table1.jmp");
dt2 = Open("data_table2.jmp");
dt3 = Open("data_table3.jmp");
myLog2 = Log Capture(
	obj = dt3 << MaxDiff(
		Response Data Table( Data Table("data_table1") ),
		Profile DataTable( data_table2 ),
		Subject DataTable( Data Table("data_table3") ),
		Response Subject ID( :Respondent ),
		Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
		Profile ID( :Profile ID ),
		Profile Effects( :Flavor ),
		Subject Subject ID( :Respondent ),
		Response Best Option( :Best Profile ),
		Response Worst Option( :Worst Profile ),
		Name( "Firth Bias-Adjusted Estimates" )(0),
		Hierarchical Bayes( 1 ),
		Number of Bayesian Iterations( 0 )
	)
);
rpt = obj << Report;
actEst3 = rpt[Outline Box( "Bayesian Parameter Estimates" )][Number Col Box( "Posterior Mean" )] << Get As Matrix();
obj << Confidence Limits( 1 );
obj4 = dt3 << MaxDiff(
	Response Data Table( Data Table("data_table") ),
	Profile DataTable( data_table ),
	Subject DataTable( Data Table("data_table") ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Name( "Firth Bias-Adjusted Estimates" )(0),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);
rpt4 = obj4 << Report;
actEst4 = rpt4[Outline Box( "Parameter Estimates" )][Number Col Box( "Estimate" )] << Get As Matrix();
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Open data table;
4. Start logging.
5. Run MaxDiff analysis on dt3.
6. Capture report from MaxDiff analysis.
7. Extract posterior mean estimates.
8. Enable confidence limits.
9. Run MaxDiff analysis again on dt3.
10. Capture and extract parameter estimates.



