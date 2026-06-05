# Matched Pairs

### Example 1
> **Summary**: Calculates a paired t-test using the Matched Pairs platform to compare the 'Awake' and 'Asleep' response variables in a data table, with reference frame 1.

<!-- Keywords: #PairedTTest, #MatchedPairs, #JSLScripting, #Bivariate, #DataAnalysis -->

**Code**:
```jsl
// paired t-test
// Open data table
dt = Open("data_table.jmp");
// paired t-test
(
Matched Pairs(
	y( Awake, Asleep ),
	Reference Frame( 1 )
) << report)[AxisBox( 1 )] << Revert Axis;
```

**Code Explanation**:

1. Open data table;
2. Perform paired t-test.
3. Set response variables: Awake, Asleep.
4. Use reference frame 1.
5. Generate report.
6. Access AxisBox 1.
7. Revert axis settings.



### Example 2
> **Summary**: Calculates a paired t-test using the Matched Pairs platform to compare BP AM and BP PM values, with reference frame set to 1.

<!-- Keywords: #PairedTTest, #MatchedPairs, #JSLScripting, #Bivariate, #DataAnalysis -->

**Code**:
```jsl
// paired t-test
// Open data table
dt = Open("data_table.jmp");
// paired t-test
(
Matched Pairs(
	y( BP AM, BP PM ),
	Reference Frame( 1 )
) << report)[AxisBox( 1 )] << Revert Axis;
```

**Code Explanation**:

1. Open data table.
2. Perform paired t-test.
3. Match pairs of BP AM and BP PM.
4. Set reference frame to 1.
5. Extract report from analysis.
6. Access first axis box.
7. Revert axis settings.



### Example 3
> **Summary**: Performs a paired t-test using the Matched Pairs function in JMP, analyzing the relationship between two response variables (:LogHist0 and :LogHist1) from an open data table.

<!-- Keywords: #MatchedPairs, #PairedTTest, #JMPScriptingLanguage, #Bivariate, #DataAnalysis -->

**Code**:
```jsl
// Matched Pairs
// Open data table
dt = Open("data_table.jmp");
// Matched Pairs
Matched Pairs(
	Y( :LogHist0, :LogHist1 )
);
```

**Code Explanation**:

1. Open data table.
2. Define variable `dt`.
3. Use `Matched Pairs` function.
4. Specify response variables `:LogHist0` and `:LogHist1`.



### Example 4
> **Summary**: Runs a matched pairs analysis to compare the log histograms of two variables, with customized formatting for difference scale boxes and additional rules.

<!-- Keywords: #MatchedPairs, #WilcoxonSignedRankTest, #CustomFormatting, #JSLScriptingLanguage, #Bivariate -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Matched Pairs(
	Y( :LogHist0, :LogHist1 ),
	Plot Dif By Row( 1 ),
	Reference Frame( 1 ),
	Wilcoxon Signed Rank( 1 ),
	SendToReport(
		Dispatch( {"Difference: LogHist1-LogHist0"}, "1", ScaleBox,
			{Format( "Custom", Formula( If( Starts With( Char( value ), "-" ), -Abs( value ), Abs( value ) ) ), 12 )}
		),
		Dispatch( {"Difference: LogHist1-LogHist0"}, "2", ScaleBox,
			{Format( "Custom", Formula( If( Starts With( Char( value ), "-" ), "neg", "non-neg" ) ), 12 )}
		),
		Dispatch( {"Difference: LogHist1-LogHist0"}, "1", ScaleBox( 2 ), {Format( "Custom", Formula( Modulo( value, 4 ) * 5 ), 12 )} ),
		Dispatch( {"Difference: LogHist1-LogHist0"}, "2", ScaleBox( 2 ),
			{Format( "Custom", Formula( If( Starts With( Char( value ), "-" ), "neg", "non-neg" ) ), 12 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform matched pairs analysis.
3. Set Y variables.
4. Plot differences by row.
5. Use reference frame.
6. Apply Wilcoxon signed rank test.
7. Format difference scale box.
8. Customize positive/negative labels.
9. Format second scale box.
10. Apply additional formatting rules.



### Example 5
> **Summary**: Runs a Matched Pairs analysis to compare the difference between 'BP 8M' and 'BP 8W' variables, while controlling for 'Dose', using Bland Altman percent analysis.

<!-- Keywords: #MatchedPairs, #BlandAltmanAnalysis, #PercentDifferenceStatistics, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Matched Pairs(
	X( :Dose ),
	Y( :BP 8M, :BP 8W ),
	Reference Frame( 1 ),
	Percent Dif Statistics( 1 ),
	Plot Percent Dif by Mean( 1 ),
	Plot Percent Dif by Row( 1 ),
	Bland Altman Percent Analysis( 1 ),
	Bland Altman Analysis( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Create Matched Pairs analysis.
3. Set X variable to "Dose".
4. Set Y variables to "BP 8M", "BP 8W".
5. Use first reference frame.
6. Calculate percent difference statistics.
7. Plot percent difference by mean.
8. Plot percent difference by row.
9. Perform Bland Altman percent analysis.
10. Perform Bland Altman analysis.



### Example 6
> **Summary**: Runs a Matched Pairs analysis to compare LogHist0 and LogHist1, with plots of difference by mean and row, and Wilcoxon Signed Rank and Sign tests.

<!-- Keywords: #MatchedPairs, #WilcoxonSignedRank, #SignTest, #Plotting, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Matched Pairs(
	Y( :LogHist0, :LogHist1 ),
	Plot Dif By Mean( 0 ),
	Plot Dif By Row( 1 ),
	Reference Frame( 0 ),
	Wilcoxon Signed Rank( 1 ),
	Sign Test( 1 ),
	SendToReport( Dispatch( {}, "Matched Pairs", OutlineBox, {Set Title( "Plot Dif by Row, Wilcoxon Signed Rank, Sign Test" )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Perform Matched Pairs analysis.
3. Set Y variables to LogHist0, LogHist1.
4. Plot difference by mean.
5. Plot difference by row.
6. Use reference frame 0.
7. Enable Wilcoxon Signed Rank test.
8. Enable Sign test.
9. Send report to window.
10. Set title for report.



### Example 7
> **Summary**: Runs a matched pairs analysis to compare the log-histograms of two variables, utilizing the Matched Pairs platform in JMP.

<!-- Keywords: #MatchedPairs, #Bivariate, #JMPScriptingLanguage, #LogHistograms, #DataAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Matched Pairs( Y( :LogHist0, :LogHist1 ) );
```

**Code Explanation**:

1. Open data table.
2. Perform matched pairs analysis.



### Example 8
> **Summary**: Runs a matched pairs analysis to compare the difference between Crude Death Rate and Crude Birth Rate, plotting the result by row using the first reference frame.

<!-- Keywords: #MatchedPairs, #Bivariate, #JMPScriptingLanguage, #DataAnalysis, #StatisticalAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Matched Pairs( Y( :"Crude Death Rate (1000)"n, :"Crude Birth Rate (1000)"n ), Plot Dif By Row( 1 ), Reference Frame( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Perform matched pairs analysis.
3. Select death and birth rates.
4. Plot difference by row.
5. Use first reference frame.



### Example 9
> **Summary**: Runs a matched pairs analysis to compare the relationship between height and weight, sending the report to display with a customized title.

<!-- Keywords: #MatchedPairs, #Bivariate, #ReportGeneration, #Customization, #DataAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Matched Pairs(
	Y( :height, :weight ),
	Reference Frame( 1 ),
	SendToReport(
		Dispatch( {}, "Matched Pairs", OutlineBox,
			{Set Title( "Matched Pairs - Testing, look for table layout correct and not discolored" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create matched pairs analysis.
3. Set Y variables: height, weight.
4. Use reference frame 1.
5. Send report to display.
6. Set title for matched pairs outline box.
7. Title content: "Matched Pairs - Testing, look for table layout correct and not discolored".



### Example 10
> **Summary**: Runs a paired t-test analysis using the Matched Pairs platform, filtering data and generating a report.

<!-- Keywords: #MatchedPairs, #PairedTTest, #DataFiltering, #ReportGeneration, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Matched Pairs( Y( :LogHist0, :LogHist1 ), Reference Frame( 1 ), );
obj << Local Data Filter(
	Location( {734, 143} ),
	Add Filter( columns( :dep1 ), Where( :dep1 == "n" ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
dt << Select Where( :drug == "morphine" );
dt << Exclude();
rep = Report( obj );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Matched Pairs( Y( :LogHist0, :LogHist1 ), Reference Frame( 1 ), );
obj << Local Data Filter(
	Location( {734, 143} ),
	Add Filter( columns( :dep1 ), Where( :dep1 == "n" ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
obj << Automatic Recalc( 0 );
dt << Select Where( :drug == "morphine" );
dt << Exclude();
rep = Report( obj );
```

**Code Explanation**:

1. Open data table;
2. Create Matched Pairs analysis.
3. Add Local Data Filter at location {734, 143}.
4. Filter column :dep1 where value equals "n".
5. Set filter mode to Select 0, Show 1, Include 1.
6. Select rows where :drug equals "morphine".
7. Exclude selected rows.
8. Generate report from analysis.
9. Close "data_table.jmp" without saving.
10. Reopen data_table dataset



### Example 11
> **Summary**: Runs a paired t-test analysis using the Matched Pairs platform in JMP, generating a report and extracting numerical results.

<!-- Keywords: #JMPScriptingLanguage, #MatchedPairs, #PairedT-Test, #ReportGeneration, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Matched Pairs( Y( :LogHist0, :LogHist1 ), Plot Dif By Row( 1 ), Reference Frame( 1 ), Wilcoxon Signed Rank( 1 ) );
:LogHist0 << Set Property( "Missing Value Codes", 0 );
:LogHist1 << Set Property( "Missing Value Codes", 0 );
:diff << Set Property( "Missing Value Codes", 0 );
:hist0 << Set Values( [1] );
:hist1 << Set Values( [1] );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
actN = (rpt[Number Col Box( 1 )] << get( 7 ));
```

**Code Explanation**:

1. Open data table.
2. Perform matched pairs analysis.
3. Set missing value codes to 0 for LogHist0.
4. Set missing value codes to 0 for LogHist1.
5. Set missing value codes to 0 for diff.
6. Assign value 1 to hist0.
7. Assign value 1 to hist1.
8. Redo the analysis.
9. Generate report from analysis.
10. Extract number from report.



### Example 12
> **Summary**: Runs a matched pairs analysis with Bland Altman, Sign Test, and Wilcoxon Signed Rank tests to compare log-histogram values across different sleep states.

<!-- Keywords: #MatchedPairs, #BlandAltmanAnalysis, #SignTest, #WilcoxonSignedRank, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Matched Pairs(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Separate Pairs( 0 ),
	Bland Altman Analysis( 1 ),
	Sign Test( 1 ),
	Wilcoxon Signed Rank( 1 )
);
rpt = Report( obj );
obj2 = obj << redo analysis;
rpt2 = Report( obj2 );
```

**Code Explanation**:

1. Open table.
2. Define matched pairs analysis.
3. Set separate pairs to 0.
4. Enable Bland Altman analysis.
5. Enable sign test.
6. Enable Wilcoxon signed rank.
7. Generate initial report.
8. Redo analysis.
9. Generate second report.



### Example 13
> **Summary**: Runs a matched pairs analysis to compare the Wilcoxon signed rank test results for 'LogHist0' and 'LogHist1' variables, given a reference frame of 1.

<!-- Keywords: #MatchedPairs, #WilcoxonSignedRankTest, #ReferenceFrame, #JSLScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
mp = Matched Pairs( X( :drug ), Y( :LogHist0, :LogHist1 ), Reference Frame( 1 ), Wilcoxon Signed Rank( 1 ) );
rep = Report( mp );
```

**Code Explanation**:

1. Open data table;
2. Perform matched pairs analysis.
3. Set X variable as "drug".
4. Set Y variables as "LogHist0", "LogHist1".
5. Use reference frame 1.
6. Enable Wilcoxon signed rank test.
7. Generate report object.



### Example 14
> **Summary**: Runs a paired t-test analysis using the Matched Pairs platform to compare 'Post' and 'Pre' values, generating a report of the results.

<!-- Keywords: #MatchedPairs, #PairedTTest, #JSLScriptingLanguage, #DataAnalysis, #StatisticalAnalysis -->

**Code**:
```jsl
dt3 = Open("data_table.jmp");
mp = Matched Pairs( Y( :BP 8M, :BP 12M ) );
rep = Report( mp );
Close( dt3, No Save );
dt = New Table( "S0295117",
	Add Rows( 25 ),
	New Column( "Post", Numeric, Continuous, Set Values( J( 25, 1, 1 ) ) ),
	New Column( "Pre", Numeric, Continuous, Set Values( J( 25, 1, 1 ) ) )
);
dt:Pre[7] = .;
dt:Pre[18] = .;
dt:Pre[21] = .;
dt:Pre[25] = .;
mp = Matched Pairs( Y( :Post, :Pre ), Reference Frame( 0 ) );
rep = Report( mp );
```

**Code Explanation**:

1. Open data table;
2. Perform matched pairs analysis.
3. Generate report from analysis.
4. Close dataset without saving.
5. Create new table "S0295117".
6. Add 25 rows to table.
7. Add "Post" column with numeric values.
8. Add "Pre" column with numeric values.
9. Set missing values in "Pre" column.
10. Perform matched pairs analysis on new data.



### Example 15
> **Summary**: Runs a matched pairs analysis to compare BP 8M and BP 12M, generating a report with the results.

<!-- Keywords: #MatchedPairs, #Report, #Bivariate, #JSLScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt3 = Open("data_table.jmp");
mp = Matched Pairs( Y( :BP 8M, :BP 12M ) );
rep = Report( mp );
```

**Code Explanation**:

1. Open data table;
2. Create matched pairs analysis.
3. Specify BP 8M as response.
4. Specify BP 12M as response.
5. Generate matched pairs report.



### Example 16
> **Summary**: Creates and configures two matched pairs analyses to compare log-histogram data, utilizing separate pairs and reference frames.

<!-- Keywords: #MatchedPairs, #JSLScriptingLanguage, #Bivariate, #DataAnalysis, #JMPStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
mp = Matched Pairs( Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ), Separate Pairs( 0 ), Reference Frame( 0 ) );
mp << close window;
mp2 = Matched Pairs( Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ), Separate Pairs( 1 ), Reference Frame( 0 ) );
```

**Code Explanation**:

1. Open data table.
2. Create matched pairs analysis.
3. Set separate pairs to 0.
4. Set reference frame to 0.
5. Close matched pairs window.
6. Create second matched pairs analysis.
7. Set separate pairs to 1.
8. Set reference frame to 0.



## Matched Pairs using Interactive HTML Color
> **Summary**: Runs a series of matched pairs analyses with interactive HTML color changes, utilizing JMP's data table and preferences settings.

<!-- Keywords: #JMPScriptingLanguage, #MatchedPairsAnalysis, #InteractiveHTMLColor, #DataTableManagement, #PreferencesSettings -->

**Code**:
```jsl
Preferences[1] << Set( Interactive HTML Color( "Dark Background" ) );
Open("data_table.jmp");
Matched Pairs( Y( :"Crude Death Rate (1000)"n, :"Crude Birth Rate (1000)"n ), Reference Frame( 1 ) );
Preferences[1] << Set( Interactive HTML Color( "Gray Background" ) );
Matched Pairs( Y( :"Crude Death Rate (1000)"n, :"Crude Birth Rate (1000)"n ), Reference Frame( 1 ) );
Preferences[1] << Set( Interactive HTML Color( "Light Background" ) );
Matched Pairs( Y( :"Crude Death Rate (1000)"n, :"Crude Birth Rate (1000)"n ), Reference Frame( 1 ) );
```

**Code Explanation**:

1. Set interactive HTML color.
2. Open data table.
3. Perform matched pairs analysis.
4. Change interactive HTML color.
5. Repeat matched pairs analysis.
6. Change interactive HTML color.
7. Repeat matched pairs analysis.



## Matched Pairs using For
> **Summary**: Generates a Bland-Altman analysis for continuous variables in a specified data table, calculating percentage differences and statistical metrics.

<!-- Keywords: #Bland-AltmanAnalysis, #ContinuousVariables, #DataTable, #JMPScriptingLanguage, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
x = dt:BP 8W << get values();
y = dt:BP 8M << get values();
diff_perc = [];
For( i = 1, i <= N Items( x ), i++,
	diff_perc = diff_perc || 100 * (x[i] - y[i]) * 2 / (x[i] + y[i])
);
mean_diff_perc = Mean( diff_perc );
se_diff_perc = Std Dev( diff_perc / Sqrt( N Items( x ) ) );
t_stat = mean_diff_perc / se_diff_perc;
b_Perc_Diff_Stat = Matrix( {mean_diff_perc, se_diff_perc, t_stat} );
Lower = mean_diff_perc + Normal Quantile( 0.025 ) * Std Dev( diff_perc );
Upper = mean_diff_perc + Normal Quantile( 0.975 ) * Std Dev( diff_perc );
b_BA_Perc_Anal = Matrix( {mean_diff_perc, Lower, Upper} );
obj = dt << Matched Pairs(
	X( :Dose ),
	Y( :BP 8M, :BP 8W ),
	Reference Frame( 1 ),
	Percent Dif Statistics( 1 ),
	Plot Percent Dif by Mean( 1 ),
	Plot Percent Dif by Row( 1 ),
	Bland Altman Percent Analysis( 1 ),
	Bland Altman Analysis( 1 )
);
rpt = Report( obj );
Perc_Diff_table = rpt["Difference: BP 8W-BP 8M", Table Box( 2 )] << get as matrix;
Perc_Diff_Stat = Matrix( {Perc_Diff_table[3, 1], Perc_Diff_table[4, 1], Perc_Diff_table[1, 2]} );
BA_perc_table = rpt["Bland-Altman Percent Analysis", Table Box( 1 )] << get as matrix;
BA_Perc_Anal = BA_perc_table[0, 1];
```

**Code Explanation**:

1. Open data_table data
2. Extract BP 8W values.
3. Extract BP 8M values.
4. Initialize diff_perc list.
5. Calculate percentage differences.
6. Compute mean difference percentage.
7. Calculate standard error of difference.
8. Compute t-statistic.
9. Store percentage difference statistics.
10. Calculate confidence interval limits.



