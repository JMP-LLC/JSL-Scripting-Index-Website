# Response Screening

### Example 1
> **Summary**: Generates a contour profiler plot for yield with Reaction Temperature and Reaction Time as factors, utilizing the Response Screening platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ResponseScreening, #ContourProfiler, #FactorAnalysis, #YieldOptimization -->

**Code**:
```jsl
// Response Screening
// Open data table
dt = Open("data_table.jmp");
// Response Screening
Response Screening(
	Y(
		:log2in_TMS1, :log2in_CG4847,
		:log2in_Adh, :log2in_CG18178,
		:log2in_CG12744,
		:log2in_alpha_Man_II,
		:log2in_Arc105, :log2in_CG8818,
		:log2in_Ptpa, :log2in_CG1965,
		:log2in_BcDNA_GH06348,
		:log2in_CG8336, :log2in_RpS3,
		:log2in_CG10992, :log2in_CG3700,
		:log2in_CG3223, :log2in_CG8701,
		:log2in_EG_BACN32G11_6,
		:log2in_CG8965, :log2in_Tsp42Ej,
		:log2in_CG6210, :log2in_CG3301,
		:log2in_Rel, :log2in_CG5063,
		:log2in_CG8445,
		:log2in_BcDNA_GH04120,
		:log2in_CG17259,
		:log2in_BcDNA_GH04802,
		:log2in_CG9547,
		:log2in_BcDNA_GH06717,
		:log2in_CG5567, :log2in_CG5538,
		:log2in_BcDNA_GH07188,
		:log2in_BEST_CK00246, :log2in_Tpi,
		:log2in_CG8040, :log2in_Dredd,
		:log2in_MIP, :log2in_PpD3,
		:log2in_CG1345, :log2in_CG6251,
		:log2in_cenB1A, :log2in_CG6306,
		:log2in_CG6372, :log2in_CG4995,
		:log2in_CG2493, :log2in_CG3045,
		:log2in_CG12239, :log2in_CG10115,
		:log2in_CG10675, :log2in_CG3570,
		:log2in_CG7888, :log2in_CG8547,
		:log2in_CG7761, :log2in_CG8134,
		:log2in_CG1937,
		:log2in_TfIIEalpha,
		:log2in_CG10487, :log2in_Rab_RP4,
		:log2in_CG1839, :log2in_CG8503,
		:log2in_E2f2, :log2in_snapin,
		:log2in_CG9584, :log2in_CG10563,
		:log2in_Pglym78,
		:log2in_BcDNA_GH13356,
		:log2in_CG8286, :log2in_CG5222,
		:log2in_CG4785, :log2in_alpha_Cat,
		:log2in_CG9797, :log2in_CG17711,
		:log2in_tef, :log2in_CG3430,
		:log2in_BcDNA_LD32788,
		:log2in_CG15893, :log2in_nop5,
		:log2in_BEST_LD08487,
		:log2in_CG6563, :log2in_CG17401,
		:log2in_CG11490, :log2in_CG8237,
		:log2in_CG6005, :log2in_CG4364,
		:log2in_CG4968, :log2in_CG10733,
		:log2in_CG3409, :log2in_Mat89Bb,
		:log2in_CG18551, :log2in_elav,
		:log2in_mei_S332, :log2in_CG4351,
		:log2in_ProsMA5, :log2in_CG6239,
		:log2in_CG17292, :log2in_CG13796,
		:log2in_HLHmbeta, :log2in_CG6783,
		:log2in_CG11317
	),
	X( :line )
);
```

**Code Explanation**:

1. Open table.
2. Set response variables.
3. Set predictor variable.
4. Run Response Screening.



### Example 2
> **Summary**: Process of response screening and data manipulation, including column selection, deletion, and p-value saving, to prepare a dataset for further analysis.

<!-- Keywords: #JSLScriptingLanguage, #ResponseScreening, #DataManipulation, #P-ValueSaving, #JMPDataTables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
rs = dt << Response Screening( Y( 8 :: 394 ), X( :Process ), MaxLogWorth( 100 ) );
Column( dt, 12 ) << Set Selected( 1 );
dt << Delete Columns;
rs << Save PValues;
dt2 = Data Table("data_table");
dt2 << Select Rows( 1 :: 10 );
Log Capture( rs << Fit Selected Items );
rs << close window;
```

**Code Explanation**:

1. Open data table.
2. Perform response screening.
3. Select column for deletion.
4. Delete selected columns.
5. Save p-values to new table.
6. Open p-values table.
7. Select first ten rows.
8. Capture log output.
9. Fit selected items.
10. Close response screening window.



### Example 3
> **Summary**: Runs a Response Screening analysis to identify correlations between Job Satisfaction and demographic factors, including Employee Tenure, Position Tenure, and Age Group.

<!-- Keywords: #ResponseScreening, #CorrelationAnalysis, #JMPScriptingLanguage, #DataVisualization, #BusinessIntelligence -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Response Screening(
	Y( :Job Satisfaction ),
	X( :Employee Tenure, :Position Tenure, :Age Group ),
	PValues Table on Launch( 0 ),
	Corr( 1 )
);
rpt = Report( obj );
corr = rpt[Outline Box( "Response Screening" )][Number Col Box( "Corr" )] << get as matrix;
fdr lw by corr = (rpt[Outline Box( "Response Screening" )][FrameBox( 3 )] << Find Seg( Marker Seg( 1 ) )) << Get X values;
```

**Code Explanation**:

1. Open data table.
2. Run Response Screening analysis.
3. Set Y variable to Job Satisfaction.
4. Set X variables to Employee Tenure, Position Tenure, Age Group.
5. Disable PValues Table on launch.
6. Enable correlation display.
7. Retrieve report object.
8. Extract correlation matrix.
9. Locate FDR plot.
10. Extract FDR lower bound values.



### Example 4
> **Summary**: Runs response screening and report generation, extracting Kappa value and FDR plot X values from a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #ResponseScreening, #KappaCoefficient, #FDRPlot, #DataTableOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Response Screening( X( :From ), Y( :To ), Kappa( 1 ) );
rpt = Report( obj );
Kappa = rpt[Outline Box( "Response Screening" )][Number Col Box( "Kappa" )] << Get as matrix;
fdr lw by kappa = (rpt[Outline Box( "Response Screening" )][FrameBox( 3 )] << Find Seg( Marker Seg( 1 ) )) << Get X values;
```

**Code Explanation**:

1. Open data table.
2. Perform response screening.
3. Extract report object.
4. Retrieve Kappa value.
5. Locate FDR plot.
6. Identify marker segment.
7. Extract X values.



### Example 5
> **Summary**: Creates a response screening object with specified Y and X variables, customizing the report layout and visibility of columns.

<!-- Keywords: #JSLScripting, #ResponseScreening, #CustomReportLayout, #ColumnVisibility, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Response Screening(
	Y( Column Group( "Markers" ) ),
	X( :Sex, :Disease Status ),
	PValues Table on Launch( 0 ),
	Common Y Scale( 1 ),
	SendToReport(
		Dispatch( {}, "", TabListBox, {Set Selected( 4 )} ),
		Dispatch( {}, "", TabPageBox, {Title( "FDR PValue Plot" )} ),
		Dispatch( {}, "", TabListBox( 2 ), {Set Selected( 2 )} ),
		Dispatch( {}, "Diff FDR L95", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "Diff FDR U95", NumberColBox, {Visibility( "Visible" )} )
	)
);
means = obj << Save Means Differences;
L95_MD = means[0, N Col( means ) - 2];
U95_MD = means[0, N Col( means ) - 1];
```

**Code Explanation**:

1. Open data table;
2. Create response screening object.
3. Set Y variables from "Markers".
4. Set X variables: Sex, Disease Status.
5. Disable PValues Table on launch.
6. Enable common Y scale.
7. Select fourth tab in report.
8. Rename tab to "FDR PValue Plot".
9. Select second tab in report.
10. Show Diff FDR L95 and U95 columns.



### Example 6
> **Summary**: Analyze a data table by opening it, launching Response Screening, and generating a report with X Baseline values.

<!-- Keywords: #JSLScriptingLanguage, #ResponseScreening, #DataTableAnalysis, #ReportGeneration, #XBaseline -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Response Screening( X( :Age Group ), Y( :Single Status, :Gender, :I am working on my career ) );
rpt = Report( obj );
BaselineNoCont = rpt[Tab Page Box( 4 ), String Col Box( "X Baseline" )][1, 1];
```

**Code Explanation**:

1. Open data table.
2. Launch Response Screening platform.
3. Set Age Group as predictor.
4. Set Single Status, Gender, I am working on my career as responses.
5. Generate report object.
6. Navigate to fourth tab page.
7. Access X Baseline column box.
8. Extract first row value.
9. Assign value to BaselineNoCont variable.



### Example 7
> **Summary**: Response Screening platform to visualize and analyze data, setting response variable, predictor variables, grouping variable, and enabling common Y scale.

<!-- Keywords: #JMPScriptingLanguage, #ResponseScreening, #DataAnalysis, #Visualization, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Response Screening(
	Y( :height ),
	X( :age ),
	Grouping( :sex ),
	Common Y Scale( 1 ),
	SendToReport(
		Dispatch( {}, "", TabListBox( 2 ), {Set Selected( 2 )} ),
		Dispatch( {}, "Difference L95", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "Difference U95", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "Diff FDR L95", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "Diff FDR U95", NumberColBox, {Visibility( "Visible" )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Launch Response Screening platform.
3. Set response variable.
4. Set predictor variable.
5. Apply grouping variable.
6. Enable common Y scale.
7. Select second tab.
8. Show Difference L95 column.
9. Show Difference U95 column.
10. Show Diff FDR L95 column.
11. Show Diff FDR U95 column.



### Example 8
> **Summary**: Process of response screening for a data table, utilizing Response Screening platform to set up predictor and response variables.

<!-- Keywords: #JSLScriptingLanguage, #ResponseScreening, #DataTable, #PredictorVariable, #ResponseVariable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Response Screening( Y( :Sepal length ), X( :Petal length ), PValues Table on Launch( 0 ) );
```

**Code Explanation**:

1. Open data table;
2. Launch Response Screening.
3. Set response variable.
4. Set predictor variable.
5. Disable PValues Table on launch.



### Example 9
> **Summary**: Process of performing Response Screening with Sepal length as response and Species as predictor, then repeats the process with Petal length as predictor.

<!-- Keywords: #JSLScriptingLanguage, #ResponseScreening, #DataTable, #PredictorVariable, #RepeatProcess -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Response Screening( Y( :Sepal length ), X( :Species ), PValues Table on Launch( 0 ) );
errormsg1 = Log Capture( obj << Show Means Differences );
Close( dt, nosave );
dt = Open("data_table.jmp");
obj = dt << Response Screening( Y( :Sepal length ), X( :Petal length ), PValues Table on Launch( 0 ) );
```

**Code Explanation**:

1. Open data table;
2. Perform Response Screening.
3. Set Sepal length as response.
4. Set Species as predictor.
5. Disable PValues Table on Launch.
6. Capture error messages.
7. Close dataset without saving.
8. Reopen data_table dataset
9. Perform Response Screening again.
10. Set Sepal length as response.
11. Set Petal length as predictor.
12. Disable PValues Table on Launch.



### Example 10
> **Summary**: Runs a Response Screening analysis to identify relationships between height and weight, grouped by age, with missing values treated as category.

<!-- Keywords: #JSLScripting, #ResponseScreening, #DataAnalysis, #MissingValueHandling, #AgeGrouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:age[35 :: 40] = .;
obj = dt << Response Screening( Y( :height ), X( :weight ), Grouping( :age ), Missing is Category( 1 ) );
rpt1 = Report( obj );
```

**Code Explanation**:

1. Open data table;
2. Set age values 35-40 to missing.
3. Run Response Screening analysis.
4. Set height as response variable.
5. Set weight as predictor variable.
6. Use age as grouping variable.
7. Treat missing values as category.
8. Generate report object.
9. Assign report to rpt1 variable.



### Example 11
> **Summary**: Runs response screening analysis to identify significant traits and markers, generating a contour profiler plot for yield with Reaction Temperature and Reaction Time as factors.

<!-- Keywords: #JMPScriptingLanguage, #ResponseScreening, #ContourProfilerPlot, #FactorAnalysis, #YieldOptimization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Response Screening(
	Y( :Trait1, :Trait2, :Trait3, :Trait4 ),
	X( Column Group( "Markers" ) ),
	PValues Table on Launch( 0 ),
	Common Y Scale( 1 ),
	Common X Scale( 1 ),
	Volcano Plots Use FDR Axis( 1 ), 
);
dt2 = obj << Save PValues;
fdrlogworth = (dt2 << get as matrix)[0, 5];
```

**Code Explanation**:

1. Open data table.
2. Perform response screening analysis.
3. Specify traits as responses.
4. Group markers as predictors.
5. Disable PValues table on launch.
6. Enable common Y scale.
7. Enable common X scale.
8. Use FDR axis in volcano plots.
9. Save PValues to new table.
10. Extract FDR logworth value.



### Example 12
> **Summary**: Response Screening analysis for a data table, setting Trait1-4 as response variables and Father, Mother, Sex, Disease Status as predictors, with options to customize common Y and X scales, PValues Table, and Volcano Plots.

<!-- Keywords: #ResponseScreening, #JSLScriptingLanguage, #TraitAnalysis, #PredictorVariables, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Response Screening(
	Y( :Trait1, :Trait2, :Trait3, :Trait4 ),
	X( :Father, :Mother, :Sex, :Disease Status ),
	PValues Table on Launch( 0 ),
	Common Y Scale( 1 ),
	Common X Scale( 1 ),
	Volcano Plots Use FDR Axis( 1 ), 
);
dt2 = obj << Save PValues;
fdrlogworth = (dt2 << get as matrix)[0, 5];
```

**Code Explanation**:

1. Open data_table data
2. Initiate Response Screening analysis.
3. Set Trait1-4 as response variables.
4. Set Father, Mother, Sex, Disease Status as predictors.
5. Disable PValues Table on launch.
6. Enable common Y scale.
7. Enable common X scale.
8. Use FDR axis for volcano plots.
9. Save PValues to new table.
10. Extract FDR logworth value.



### Example 13
> **Summary**: Response Screening analysis to visualize yield with Reaction Temperature and Reaction Time as factors, utilizing a pre-defined data table.

<!-- Keywords: #JSLScripting, #ResponseScreening, #ContourProfiler, #FactorAnalysis, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Response Screening(
	Y( Column Group( "Markers" ) ),
	X( :Sex, :Disease Status ),
	Common Y Scale( 1 ),
	Show Means Differences( 1 ),
	SendToReport( Dispatch( {}, "", TabListBox, {Set Selected( 4 )} ), Dispatch( {}, "", TabListBox( 2 ), {Set Selected( 2 )} ) )
);
obj << Relaunch Analysis;
win = Window( "Response Screening" );
defmaxlevels = win[Number Edit Box( 2 )] << get;
```

**Code Explanation**:

1. Open data table.
2. Launch Response Screening.
3. Set Y variables.
4. Set X variables.
5. Enable common Y scale.
6. Show means differences.
7. Select specific tabs.
8. Relaunch analysis.
9. Access Response Screening window.
10. Get max levels value.



## Response Screening using Associative Array
### Example 1
> **Summary**: Runs response screening analysis by creating an associative array, performing the analysis, and extracting relevant data tables.

<!-- Keywords: #JSLScriptingLanguage, #AssociativeArray, #ResponseScreening, #DataTables, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = Response Screening( Y( Column Group( "Responses" ) ), X( :Process ), PValues Table on Launch( 1 ) );
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create associative array before action.
3. Perform response screening analysis.
4. Create associative array after action.
5. Remove initial items from associative array.
6. Get keys from associative array.
7. Loop through keys.
8. Check if key contains "PValues".
9. Assign matching data table to variable.
10. End loop.



### Example 2
> **Summary**: Process of launching a response screening analysis, capturing window titles before and after the analysis, and extracting data tables from the resulting PValues table.

<!-- Keywords: #JMPScriptingLanguage, #ResponseScreening, #AssociativeArrays, #DataTables, #PValuesTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = Response Screening( Y( Column Group( "Responses" ) ), X( :Process ), Robust( 1 ), MaxLogWorth( 1000 ), PValues Table on Launch( 1 ) );
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create associative array before analysis.
3. Launch response screening analysis.
4. Create associative array after analysis.
5. Remove common windows from associative arrays.
6. Get keys from associative array.
7. Loop through keys.
8. Check for "PValues" in key.
9. Assign matching data table to variable.
10. End loop.



### Example 3
> **Summary**: Runs the response screening analysis process, generating PValues and Means tables from a data table, while also capturing window titles before and after analysis.

<!-- Keywords: #JSLScriptingLanguage, #ResponseScreening, #DataAnalysis, #WindowManagement, #AssociativeArrays -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = Response Screening( Y( Column Group( "Responses" ) ), X( :Process ), PValues Table on Launch( 1 ) );
obj << Save Means;
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	);
	If( Contains( aftlst[i], "Means" ),
		dt3 = Data Table( aftlst[i] )
	);
);
Close( dt, no save );
```

**Code Explanation**:

1. Open data table;
2. Create associative array before analysis.
3. Run response screening analysis.
4. Save means from analysis.
5. Create associative array after analysis.
6. Remove original window titles.
7. Get list of new window titles.
8. Loop through new window titles.
9. Identify and assign PValues table.
10. Identify and assign Means table.
11. Close original data table without saving.



### Example 4
> **Summary**: Response Screening analysis and saves means differences, utilizing Associative Arrays to track window titles and data table keys.

<!-- Keywords: #JSLScripting, #ResponseScreening, #AssociativeArrays, #DataTables, #MeansDifferences -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = Response Screening( Y( Column Group( "Responses" ) ), X( :Process ), PValues Table on Launch( 1 ) );
obj << Save Means Differences;
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	);
	If( Contains( aftlst[i], "Means Differences" ),
		dt3 = Data Table( aftlst[i] )
	);
);
Close( dt, no save );
```

**Code Explanation**:

1. Open data table;
2. Store initial window titles.
3. Perform Response Screening analysis.
4. Save means differences.
5. Store updated window titles.
6. Remove initial titles from updated list.
7. Get remaining window keys.
8. Loop through window keys.
9. Identify "PValues" table.
10. Identify "Means Differences" table.
11. Close original table without saving.



### Example 5
> **Summary**: Response Screening analysis and saves means differences, while also identifying and extracting specific tables from the output.

<!-- Keywords: #JSLScriptingLanguage, #ResponseScreening, #MeansDifferences, #DataTableManagement, #AssociativeArrays -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = Response Screening(
	Y( Column Group( "Responses" ) ),
	X( :Process ),
	Practical Difference Portion( 0.15 ),
	PValues Table on Launch( 1 )
);
obj << Save Means Differences;
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	);
	If( Contains( aftlst[i], "Means Differences" ),
		dt3 = Data Table( aftlst[i] )
	);
);
Close( dt, no save );
```

**Code Explanation**:

1. Open data table.
2. Create associative array of current windows.
3. Run Response Screening analysis.
4. Save means differences.
5. Create new associative array of current windows.
6. Remove initial windows from new array.
7. Get keys of remaining windows.
8. Loop through window keys.
9. Identify "PValues" table.
10. Identify "Means Differences" table.
11. Close original data table without saving.



### Example 6
> **Summary**: Response Screening analysis and extracts relevant data tables from the output, utilizing associative arrays to manage window states.

<!-- Keywords: #JSLScriptingLanguage, #ResponseScreening, #AssociativeArrays, #DataTables, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = Response Screening( Y( Column Group( "Responses" ) ), X( :Process ), MaxLogWorth( 1000 ), PValues Table on Launch( 1 ) );
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Store current windows in associative array.
3. Perform Response Screening analysis.
4. Store updated windows in associative array.
5. Remove initial windows from updated array.
6. Get keys of remaining windows.
7. Loop through remaining windows.
8. Check for window containing "PValues".
9. Assign matching data table to dt2.
10. End loop.



### Example 7
> **Summary**: Runs response screening analysis and saves means, utilizing associative arrays to manage window titles and data tables.

<!-- Keywords: #JSLScripting, #ResponseScreening, #AssociativeArrays, #DataTables, #MeansAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = Response Screening( Y( Column Group( "Responses" ) ), X( :Process ), PValues Table on Launch( 1 ) );
obj << Save Means;
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	);
	If( Contains( aftlst[i], "Means" ),
		dt3 = Data Table( aftlst[i] )
	);
);
```

**Code Explanation**:

1. Open data table.
2. Create associative array before analysis.
3. Perform response screening analysis.
4. Save means from analysis.
5. Create associative array after analysis.
6. Remove windows from before array.
7. Get keys from after array.
8. Loop through keys in after array.
9. Identify PValues table.
10. Identify Means table.



### Example 8
> **Summary**: Processes and analyzes data table responses, generating separate data tables for PValues and Means Differences.

<!-- Keywords: #JSLScriptingLanguage, #DataTableAnalysis, #ResponseScreening, #AssociativeArrays, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = Response Screening( Y( Column Group( "Responses" ) ), X( :Process ), PValues Table on Launch( 1 ) );
obj << Save Means Differences;
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	);
	If( Contains( aftlst[i], "Means Differences" ),
		dt3 = Data Table( aftlst[i] )
	);
);
```

**Code Explanation**:

1. Open data table;
2. Create associative array of windows.
3. Run Response Screening analysis.
4. Save means differences.
5. Create new associative array of windows.
6. Remove previous window titles from new array.
7. Get keys from new associative array.
8. Loop through each key in array.
9. Check if key contains "PValues".
10. Assign matching data table to dt2.



### Example 9
> **Summary**: Runs response screening analysis and saves means differences in a JMP data table, utilizing associative arrays to manage window titles and data tables.

<!-- Keywords: #JMPScriptingLanguage, #ResponseScreening, #AssociativeArrays, #DataTables, #MeansDifferences -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = Response Screening(
	Y( Column Group( "Responses" ) ),
	X( :Process ),
	Practical Difference Portion( 0.15 ),
	PValues Table on Launch( 1 )
);
obj << Save Means Differences;
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	);
	If( Contains( aftlst[i], "Means Differences" ),
		dt3 = Data Table( aftlst[i] )
	);
);
```

**Code Explanation**:

1. Open data table;
2. Create associative array before analysis.
3. Perform response screening analysis.
4. Save means differences.
5. Create associative array after analysis.
6. Remove initial windows from associative array.
7. Get keys from associative array.
8. Loop through keys.
9. Identify PValues table.
10. Identify Means Differences table.



### Example 10
> **Summary**: Process of response screening, saving p-values, and extracting data tables from a JMP script.

<!-- Keywords: #JSLScripting, #ResponseScreening, #PValues, #DataTables, #AssociativeArrays -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
test = Is Scriptable( obj = Response Screening( Y( :Height, :Weight ), X( :Age, :Sex ) ) );
obj << Save PValues;
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create associative array of windows.
3. Perform response screening.
4. Save p-values from analysis.
5. Create associative array of windows again.
6. Remove original windows from new array.
7. Get keys from updated array.
8. Loop through keys in array.
9. Check if key contains "PValues".
10. Assign matching data table to dt2.



### Example 11
> **Summary**: Runs data table operations to prepare for Response Screening analysis, including locking the data table and capturing log information.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ResponseScreening, #LogCapture, #AssociativeArray -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
dt << Lock Data Table( 1 );
LC = Log Capture(
	obj = dt << Response Screening(
		Y( :log2in_TMS1, :log2in_CG4847, :log2in_Adh ),
		X( :line ),
		save outlier indicator,
		save std residuals
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create associative array of window titles.
3. Lock data table.
4. Start log capture.
5. Launch Response Screening platform.
6. Set response variables: log2in_TMS1, log2in_CG4847, log2in_Adh.
7. Set predictor variable: line.
8. Save outlier indicators.
9. Save standardized residuals.
10. End log capture.



### Example 12
> **Summary**: Response Screening analysis and saves means differences and p-values in separate data tables, utilizing JMP's built-in functionality.

<!-- Keywords: #JMPScriptingLanguage, #ResponseScreening, #MeansDifferences, #PValues, #DataTables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = dt << Response Screening( Y( :height ), X( :sex ), Robust( 0 ) );
obj << Save Means Differences( 1 );
obj << Save PValues( 1 );
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	);
	If( Contains( aftlst[i], "Means Differences" ),
		dt3 = Data Table( aftlst[i] )
	);
);
mat3 = dt3 << get as matrix;
Close( dt3, no save );
```

**Code Explanation**:

1. Open data table;
2. Create associative array of windows.
3. Perform Response Screening analysis.
4. Save means differences.
5. Save p-values.
6. Create associative array of windows again.
7. Remove original window titles from new array.
8. Get keys of new array.
9. Loop through keys.
10. Identify and assign PValues and Means Differences tables.



### Example 13
> **Summary**: Response Screening analysis and saves p-values and means differences in separate data tables, utilizing associative arrays to manage window titles.

<!-- Keywords: #JMPScriptingLanguage, #ResponseScreening, #AssociativeArrays, #DataTables, #AnalyticsAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = dt << Response Screening( Y( :height ), X( :sex ), Robust( 1 ), <<Save Means Differences( 1 ) );
obj << Save PValues( 1 );
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	);
	If( Contains( aftlst[i], "Means Differences" ),
		dt3 = Data Table( aftlst[i] )
	);
);
mat3 = dt3 << get as matrix;
Close( dt3, no save );
Close( dt2, no save );
Close( dt, no save );
ut relative epsilon = 1e-2;
```

**Code Explanation**:

1. Open data table;
2. Create associative array before analysis.
3. Perform Response Screening analysis.
4. Save p-values from analysis.
5. Create associative array after analysis.
6. Remove unchanged windows from associative array.
7. Get list of new windows.
8. Loop through new windows.
9. Identify and assign PValues table.
10. Identify and assign Means Differences table.



### Example 14
> **Summary**: Runs the response screening analysis process, generating a PValues table and assigning it to a new data table.

<!-- Keywords: #JSLScripting, #ResponseScreening, #PValuesTable, #DataManipulation, #JMPAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = dt << Response Screening( Y( :age, :sex ), X( :height, :weight ), PValues Table on Launch( 1 ) );
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
Close( dt2, no save );
Close( dt, no save );
ut relative epsilon = 1e-10;
```

**Code Explanation**:

1. Open data table.
2. Create associative array of windows.
3. Perform response screening analysis.
4. Create associative array of windows again.
5. Remove initial windows from second array.
6. Get remaining window keys.
7. Loop through window keys.
8. Check for "PValues" in window title.
9. Assign matching data table to dt2.
10. Close dt2 without saving.
11. Close original data table without saving.
12. Set relative epsilon value.



### Example 15
> **Summary**: Response Screening analysis process, generating a PValues table and extracting relevant information from the data.

<!-- Keywords: #JSLScripting, #ResponseScreening, #AssociativeArrays, #DataTables, #PValuesTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = dt << Response Screening( Y( :age ), X( :height, :weight ), PValues Table on Launch( 1 ) );
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
Close( dt2, no save );
Close( dt, no save );
ut relative epsilon = 1e-10;
```

**Code Explanation**:

1. Open data table.
2. Create associative array of windows.
3. Run Response Screening analysis.
4. Create another associative array of windows.
5. Remove original windows from new array.
6. Get keys from new array.
7. Loop through keys.
8. Check for "PValues" in key.
9. Open PValues table.
10. Close all tables without saving.



### Example 16
> **Summary**: Process of performing response screening analysis on a data table, generating PValues tables and identifying data tables with 'PValues' in their titles.

<!-- Keywords: #JSLScriptingLanguage, #ResponseScreeningAnalysis, #DataTableOperations, #AssociativeArrays, #WindowManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = dt << Response Screening( Y( :sex ), X( :height ), PValues Table on Launch( 1 ) );
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create associative array before action.
3. Perform response screening analysis.
4. Create associative array after action.
5. Remove common elements from arrays.
6. Get remaining window titles.
7. Loop through window titles.
8. Check for "PValues" in title.
9. Identify data table with "PValues".
10. Assign identified table to variable.



### Example 17
> **Summary**: Runs response screening analysis and saves p-values from a data table, utilizing associative arrays to manage window titles and data tables.

<!-- Keywords: #JSLScripting, #ResponseScreening, #PValues, #AssociativeArrays, #DataTables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = dt << Response Screening( Y( :log2in_TMS1, :log2in_CG4847, :log2in_Adh ), X( :line ), PValues Table on Launch( 1 ) );
obj << save pvalues;
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	);
	If( Contains( aftlst[i], "PValues 2" ),
		dt3 = Data Table( aftlst[i] )
	);
);
mat2 = dt2 << get as matrix;
mat3 = dt3 << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Create associative array before analysis.
3. Perform response screening analysis.
4. Save p-values from analysis.
5. Create associative array after analysis.
6. Remove pre-analysis windows from associative array.
7. Get remaining window titles.
8. Loop through window titles.
9. Identify "PValues" table.
10. Convert "PValues" table to matrix.



### Example 18
> **Summary**: Response Screening analysis and extracts PValues tables from a data table, utilizing associative arrays to manage window titles.

<!-- Keywords: #JSLScripting, #ResponseScreening, #AssociativeArrays, #DataTables, #PValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = dt << Response Screening(
	Y(
		:Name( "30D2_7X100_IL_12V" ), :Name( "30D2_7X100_IL_25V" ), :Name( "30N5_2ST(4X100)_ILCSO@12V" ),
		:Name( "30N5_2ST(4X100)_ILCSO@25V" ), :Name( "CJP_2(70X1500)_C0V" ), :Name( "CJP_2(70X1500)_C3V" ), :Name( "CJN_2(70X1500)_C0V" ),
		:Name( "CJN_2(70X1500)_C3V" )
	),
	X( :Process ),
	PValues Table on Launch( 1 )
);
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
mat2 = dt2 << get as matrix;
exp1 = [2.3569957997087e-17, 3.66686909347664e-17, 4.66542798301719e-16, 4.91363069949313e-16, 1.38844751899099e-17, 1.46631194925408e-17,
1.43115158671903e-17, 1.41382637572222e-17];
```

**Code Explanation**:

1. Open data table.
2. Create associative array of current windows.
3. Run Response Screening analysis.
4. Create associative array of new windows.
5. Remove initial windows from new array.
6. Get keys of remaining windows.
7. Loop through window keys.
8. Check for "PValues" in window title.
9. Assign matching data table to dt2.
10. Convert dt2 to matrix.



### Example 19
> **Summary**: Response Screening analysis and saves means differences and p-values in separate data tables, utilizing associative arrays to manage window titles.

<!-- Keywords: #JSLScripting, #ResponseScreening, #AssociativeArrays, #DataTables, #MeansDifferences -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = dt << Response Screening( Y( :height ), X( :sex ), Robust( 0 ) );
obj << Save Means Differences( 1 );
obj << Save PValues( 1 );
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	);
	If( Contains( aftlst[i], "Means Differences" ),
		dt3 = Data Table( aftlst[i] )
	);
);
mat3 = dt3 << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Create associative array before analysis.
3. Run Response Screening analysis.
4. Save means differences.
5. Save p-values.
6. Create associative array after analysis.
7. Remove unchanged windows from array.
8. Get keys of remaining windows.
9. Loop through window keys.
10. Extract tables for p-values and means differences.



### Example 20
> **Summary**: Runs the response screening analysis and saves p-values and means differences in separate data tables, utilizing JMP's built-in functionality.

<!-- Keywords: #JMPScriptingLanguage, #ResponseScreening, #P-Values, #MeansDifferences, #DataTables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = dt << Response Screening( Y( :height ), X( :sex ), Robust( 1 ), <<Save Means Differences( 1 ) );
obj << Save PValues( 1 );
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	);
	If( Contains( aftlst[i], "Means Differences" ),
		dt3 = Data Table( aftlst[i] )
	);
);
mat3 = dt3 << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Create associative array before analysis.
3. Run response screening analysis.
4. Save p-values from analysis.
5. Create associative array after analysis.
6. Remove pre-analysis windows from associative array.
7. Get keys from associative array.
8. Loop through keys.
9. Identify and assign p-values table.
10. Identify and assign means differences table.



### Example 21
> **Summary**: Process of running Response Screening analysis and extracting PValues tables from a data table, utilizing associative arrays to manage window titles.

<!-- Keywords: #JSLScripting, #ResponseScreening, #AssociativeArrays, #DataTables, #PValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = dt << Response Screening( Y( :age, :sex ), X( :height, :weight ), PValues Table on Launch( 1 ) );
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create associative array of windows.
3. Run Response Screening analysis.
4. Create another associative array of windows.
5. Remove common windows from second array.
6. Get keys from updated array.
7. Loop through remaining keys.
8. Check for "PValues" in key.
9. Assign matching data table to dt2.



### Example 22
> **Summary**: Runs response screening analysis on a data table, generating PValues tables and extracting matching data tables.

<!-- Keywords: #JSLScripting, #ResponseScreening, #PValuesTable, #DataExtraction, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = dt << Response Screening( Y( :age ), X( :height, :weight ), PValues Table on Launch( 1 ) );
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create associative array of current windows.
3. Perform response screening analysis.
4. Create associative array of new windows.
5. Remove original windows from new array.
6. Get keys of remaining windows.
7. Loop through remaining windows.
8. Check if window title contains "PValues".
9. Assign matching data table to dt2.
10. End loop.



### Example 23
> **Summary**: Executes Response Screening analysis on a data table, generating a list of windows and filtering out non-PValues tables.

<!-- Keywords: #JSLScripting, #ResponseScreening, #DataTableAnalysis, #WindowManagement, #PValueTables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = dt << Response Screening(
	Y(
		:Gender, :Single Status, :School Age Children, :Age Group, :Employee Tenure, :Position Tenure, :Job Satisfaction,
		:I am working on my career, :I want to see the world, :My home needs some major improvements,
		:I have vast interests outside of work, :I want to get my debt under control, :I come from a large family, :Brush, :Floss,
		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Other,
	),
	X( :Salary ),
	PValues Table on Lauch( 1 )
);
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create associative array of windows.
3. Run Response Screening analysis.
4. Create associative array of windows again.
5. Remove original windows from new array.
6. Get keys of remaining windows.
7. Loop through remaining windows.
8. Check if window title contains "PValues".
9. Assign matching window to dt2 variable.
10. End loop.



### Example 24
> **Summary**: Process of screening a data table for response variables, utilizing Response Screening and filtering out common windows to extract relevant PValues tables.

<!-- Keywords: #JSLScriptingLanguage, #ResponseScreening, #DataTableManipulation, #AssociativeArrays, #PValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = dt << Response Screening( Y( :age ), X( :sex ), Corr( 1 ), PValues Table On Launch( 1 ) );
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
mat2 = dt2 << get as matrix;
corr_val = 0.122395420615724;
```

**Code Explanation**:

1. Open data table;
2. Create associative array of windows before running analysis.
3. Run Response Screening on age and sex.
4. Create associative array of windows after running analysis.
5. Remove common windows from after array.
6. Get keys of remaining windows.
7. Loop through remaining windows.
8. Check if window title contains "PValues".
9. Assign matching window to dt2.
10. Get data table as matrix.



### Example 25
> **Summary**: Launches Response Screening in JMP, configuring Y and X variables, paired analysis, and PValues Table display.

<!-- Keywords: #JMPScriptingLanguage, #ResponseScreening, #PairedAnalysis, #PValuesTable, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = dt << Response Screening(
	Y( :Job Satisfaction ),
	X( :I am working on my career, :I want to see the world ),
	Paired X and Y( 1 ),
	PValues Table on Launch( 1 )
);
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create associative array bef aa.
3. Launch Response Screening.
4. Set Y to Job Satisfaction.
5. Set X to two columns.
6. Enable paired X and Y.
7. Show PValues Table on launch.
8. Create associative array aft aa.
9. Remove windows from bef aa in aft aa.
10. Get remaining window keys in aftlst.
11. Loop through aftlst.
12. Check for "PValues" in window titles.
13. Assign matching data table to dt2.



### Example 26
> **Summary**: Response Screening analysis in JMP, generating a PValues table and extracting specific values from the output.

<!-- Keywords: #JMPScriptingLanguage, #ResponseScreening, #PValuesTable, #DataAnalysis, #AssociativeArrays -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = dt << Response Screening(
	Y( :I am working on my career, :I want to see the world, ),
	X( :Single Status ),
	Force X Continuous( 1 ),
	PValues Table on Launch( 1 )
);
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
mat2 = dt2 << get as matrix;
pval = mat2[0, 2];
exppval = [0.598778649965148, 0.470758420621694];
exppval = [0.598778649965148, 0.470758420621694];
```

**Code Explanation**:

1. Open data table;
2. Create associative array before analysis.
3. Launch Response Screening analysis.
4. Set response variables.
5. Set predictor variable.
6. Force X continuous.
7. Include PValues Table on launch.
8. Create associative array after analysis.
9. Remove unchanged windows.
10. Retrieve new window keys.



### Example 27
> **Summary**: Processes Response Screening script results, storing window titles and extracting relevant data tables.

<!-- Keywords: #JSLScripting, #ResponseScreening, #DataTableManagement, #WindowTitleHandling, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
test = Is Scriptable( obj = Response Screening( Y( 8 :: 394 ), X( :Process ), MaxLogWorth( 1000 ), PValues Table on Launch( 1 ) ) );
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Store initial window titles.
3. Run Response Screening script.
4. Store updated window titles.
5. Remove initial titles from updated list.
6. Get remaining window titles.
7. Loop through window titles.
8. Check for "PValues" in title.
9. Assign matching table to dt2.
10. End loop.



## Response Screening using Set Property
### Example 1
> **Summary**: Runs response screening and report generation for a data table with serious events as the response variable, body system or organ class as the predictor, and ratio adjustments to add 0.5 when any zero.

<!-- Keywords: #JSL, #ResponseScreening, #ReportGeneration, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Description of Planned Arm << Set Property( "Control Level", "Placebo" );
dt:Description of Planned Arm << Set Name( "Arm" );
obj = dt << Response Screening(
	Y( :Serious Event ),
	X( :Body System or Organ Class ),
	Ratio Adjustment( "Add 0.5 when any zero" ),
	Plots( 0 ),
	"2 by M Table"n( 1 ),
	SendToReport( Dispatch( {}, "", TabListBox( 2 ), {Set Selected( 2 )} ) )
);
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table;
2. Set Control Level to Placebo.
3. Rename column to Arm.
4. Run Response Screening.
5. Specify Serious Event as response.
6. Use Body System as predictor.
7. Adjust ratios adding 0.5.
8. Disable plots display.
9. Create 2 by M Table.
10. Select second tab in report.



### Example 2
> **Summary**: Extracts X Baseline values from a report object, utilizing Response Screening analysis and control levels for Age Group.

<!-- Keywords: #JSLScriptingLanguage, #ResponseScreening, #ReportObject, #ControlLevels, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Age Group << Set Property( "Control Level", ">54" );
obj = dt << Response Screening( X( :Age Group ), Y( :Single Status, :Gender, :I am working on my career ) );
rpt = Report( obj );
BaselineCont = rpt[Tab Page Box( 4 ), String Col Box( "X Baseline" )][1, 1];
```

**Code Explanation**:

1. Open data table.
2. Set control level for Age Group.
3. Run Response Screening analysis.
4. Create report object.
5. Access Baseline Cont tab page.
6. Extract X Baseline column box.
7. Retrieve first row value.



## Response Screening using Expr
> **Summary**: Runs a response screening analysis to identify serious events in a clinical trial, utilizing custom ordering and control levels for the 'Arm' column.

<!-- Keywords: #JSLScriptingLanguage, #ResponseScreening, #CustomOrdering, #ControlLevels, #ClinicalTrialAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
doScreening = Expr(
	Response Screening(
		Y( :Serious Event ),
		X( :Arm ),
		Title( Eval( theTitle ) ),
		Grouping( :Body System or Organ Class ),
		Show Plots( 0 ),
		SendToReport(
			Dispatch( {}, "", TabListBox( 2 ), {Set Selected( 2 )} ),
			Dispatch( {}, "X Category", StringColBox, {Visibility( "Visible" )} ),
			Dispatch( {}, "X Baseline", StringColBox, {Visibility( "Visible" )} )
		)
	)
);
dt:Description of Planned Arm << Set Name( "Arm" );
theTitle = "Default Baseline is Low, which is NIC.15";
obj = doScreening;
rpt = Report( obj );
baseline = (rpt[Tab Page Box( 2 ), String Col Box( "X Baseline" )] << Get)[1];
dt:Arm << Set Property( "Value Order", {Custom Order( {"NIC .15", "Placebo"} ), Common Order( 0 )} );
theTitle = "After Value Order, NIC.15 is still low and default Baseline";
obj2 = doScreening;
rpt2 = Report( obj2 );
baseline = (rpt2[Tab Page Box( 2 ), String Col Box( "X Baseline" )] << Get)[1];
theTitle = "After specifying Control Level Placebo in Column Property";
dt:Arm << Set Property( "Control Level", "Placebo" );
obj3 = doScreening;
rpt3 = Report( obj3 );
baseline_act = (rpt3[Tab Page Box( 2 ), String Col Box( "X Baseline" )] << Get)[1];
```

**Code Explanation**:

1. Open data table;
2. Define expression for screening.
3. Rename column "Description of Planned Arm" to "Arm".
4. Set title to "Default Baseline is Low, which is NIC.15".
5. Execute screening analysis.
6. Retrieve report object.
7. Extract baseline value.
8. Set custom order for "Arm" column.
9. Update title to "After Value Order, NIC.15 is still low and default Baseline".
10. Execute screening analysis again.
11. Retrieve updated report object.
12. Extract new baseline value.
13. Set control level to "Placebo" in "Arm" column.
14. Execute screening analysis once more.
15. Retrieve final report object.
16. Extract actual baseline value.



## Response Screening using Summary
> **Summary**: Creates summary tables by sex and age, extracts specific columns from these summaries, and performs a response screening analysis to analyze height and weight data.

<!-- Keywords: #JSLScriptingLanguage, #SummaryTable, #ResponseScreening, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtsum1 = dt << Summary(
	Group( :sex ),
	Min( :height ),
	Quantiles( 25, :height ),
	Median( :height ),
	Quantiles( 75, :height ),
	Max( :height ),
	Range( :height ),
	Freq( "None" ),
	Weight( "None" ),
	output table name( "Summary of height grouped by sex" )
);
mat1 = dtsum1 << get as matrix( {3, 4, 5, 6, 7, 8} );
dtsum2 = dt << Summary(
	Group( :age ),
	Min( :weight ),
	Quantiles( 25, :weight ),
	Median( :weight ),
	Quantiles( 75, :weight ),
	Max( :weight ),
	Range( :weight ),
	Freq( "None" ),
	Weight( "None" ),
	output table name( "Summary of weight grouped by age" )
);
mat2 = dtsum2 << get as matrix( {3, 4, 5, 6, 7, 8} );
rs_obj = dt << Response Screening(
	Y( :height, :weight ),
	X( :sex, :age ),
	Paired X and Y( 1 ),
	Quartiles per group( 1 ),
	SendToReport( Dispatch( {}, "", TabListBox( 2 ), {Set Selected( 2 )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create summary table by sex.
3. Extract specific columns from summary.
4. Create summary table by age.
5. Extract specific columns from summary.
6. Perform response screening analysis.
7. Set Y variables: height, weight.
8. Set X variables: sex, age.
9. Configure paired X and Y.
10. Configure quartiles per group.



