# Recurrence Analysis

### Example 1
> **Summary**: Performs a recurrence analysis on the 'Age' variable, with cost and grouping variables specified for treatment groups, and plots MCF differences.

<!-- Keywords: #RecurrenceAnalysis, #JMPScriptingLanguage, #SurvivalAnalysis, #TimeCycles, #GroupingVariables -->

**Code**:
```jsl
// Recurrence Analysis
// Open data table
dt = Open("data_table.jmp");
// Recurrence Analysis
Recurrence Analysis(
	Y( :Age ),
	Cost( :Cost ),
	Grouping( :Treatment Group ),
	Label( :Patient Number ),
	Plot MCF Differences( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Perform recurrence analysis.
3. Set response variable.
4. Specify cost variable.
5. Define grouping variable.
6. Assign label variable.
7. Plot MCF differences.



### Example 2
> **Summary**: Performs a Recurrence Analysis on the provided data table, using kHours as the time variable, Cost as the cost variable, and System ID as the label. The analysis excludes excluded rows and clears all selections.

<!-- Keywords: #RecurrenceAnalysis, #JMPScriptingLanguage, #DataTableOperations, #TimeSeriesAnalysis, #SurvivalAnalysis -->

**Code**:
```jsl
// Recurrence Analysis
// Open data table
dt = Open("data_table.jmp");
// Recurrence Analysis
dt = Current Data Table();
dt << Clear Select;
dt << Select Excluded << Exclude;
dt << Clear Select;
obj =
Recurrence Analysis(
	Y( :kHours ),
	Cost( :Cost ),
	Label( :System ID )
);
```

**Code Explanation**:

1. Open data table.
2. Set current data table.
3. Clear all selections.
4. Exclude excluded rows.
5. Clear all selections again.
6. Perform recurrence analysis.
7. Set Y variable to kHours.
8. Set Cost variable to Cost.
9. Set Label variable to System ID.



### Example 3
> **Summary**: Performs a recurrence analysis on the provided data table, grouping by 'System ID' and specifying 'kHours' as the Y variable, 'Cost' as the cost variable, and excluding excluded rows.

<!-- Keywords: #RecurrenceAnalysis, #JMPScriptingLanguage, #DataTable, #GroupingVariable, #YVariable -->

**Code**:
```jsl
// Recurrence Grouped
// Open data table
dt = Open("data_table.jmp");
// Recurrence Grouped
dt = Current Data Table();
dt << Clear Select;
dt << Select Excluded << Exclude;
dt << Clear Select;
obj =
Recurrence Analysis(
	Y( :kHours ),
	Cost( :Cost ),
	Grouping( :System ID ),
	Label( :System ID )
);
```

**Code Explanation**:

1. Open data table.
2. Set current data table.
3. Clear all selections.
4. Exclude excluded rows.
5. Clear all selections again.
6. Perform recurrence analysis.
7. Specify Y variable.
8. Specify cost variable.
9. Define grouping variable.
10. Label by system ID.



### Example 4
> **Summary**: Performs a recurrence analysis on the 'Age' variable, considering the 'Cost' and 'EngineID' variables as cost and label respectively, to visualize patterns in reliability data.

<!-- Keywords: #RecurrenceAnalysis, #ReliabilityData, #JMPScriptingLanguage, #TimeSeriesAnalysis, #SurvivalAnalysis -->

**Code**:
```jsl
// Recurrence Analysis
// Open data table
dt = Open("data_table.jmp");
// Recurrence Analysis
Recurrence Analysis(
	Y( :Age ),
	Cost( :Cost ),
	Label( :EngineID )
);
```

**Code Explanation**:

1. Open data table.
2. Perform recurrence analysis.
3. Set Y variable.
4. Set Cost variable.
5. Set Label variable.



### Example 5
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables to analyze the reliability of blenders.

<!-- Keywords: #RecurrenceAnalysis, #SurvivalAnalysis, #TimeCycles, #GroupingVariables, #JMPScriptingLanguage -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Recurrence Analysis( Y( :Age ), Cost( :Cost ), Grouping( :Treatment Group ), Label( :Patient Number ) );
```

**Code Explanation**:

1. Set default names.
2. Open data table;
3. Perform recurrence analysis.
4. Specify Age as response variable.
5. Use Cost as cost variable.
6. Define Treatment Group for grouping.
7. Label patients by number.



### Example 6
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables to visualize the reliability of blenders across treatment groups.

<!-- Keywords: #JMP, #RecurrenceAnalysis, #SurvivalAnalysis, #TimeCycles, #GroupingVariables -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Recurrence Analysis(
	Age at Event( :Age ),
	Label( :Patient Number ),
	Name( "End-of-Service" )(:Cost),
	Grouping( :Treatment Group ),
	MCF Confid Limits( 1 ),
	Event Plot( 0 ),
	MCF Plot Each Group( 1 ),
	SendToReport( Dispatch( {}, "Recurrence Analysis", OutlineBox, {Set Title( "MCF Plot, MCF Confid Limits, MCF Plot Each Group" )} ) )
);
```

**Code Explanation**:

1. Open data_table data
2. Perform Recurrence Analysis.
3. Set Age at Event.
4. Label by Patient Number.
5. Define End-of-Service as Cost.
6. Group by Treatment Group.
7. Enable MCF Confidence Limits.
8. Disable Event Plot.
9. Enable MCF Plot for each group.
10. Set report title.



### Example 7
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables to analyze the reliability of blenders.

<!-- Keywords: #JMPScriptingLanguage, #SurvivalAnalysis, #RecurrenceAnalysis, #TimeCycles, #GroupingVariables -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Recurrence Analysis( Y( :Age ), Cost( :Cost ), Grouping( :Treatment Group ), Label( :Patient Number ), Plot MCF Differences( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Perform Recurrence Analysis.
3. Set Y variable to Age.
4. Set Cost variable to Cost.
5. Set Grouping variable to Treatment Group.
6. Set Label variable to Patient Number.
7. Plot MCF Differences.



### Example 8
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables to analyze the reliability of blenders.

<!-- Keywords: #RecurrenceAnalysis, #SurvivalAnalysis, #TimeCycles, #CensorStatus, #GroupingVariables -->

**Code**:
```jsl
Open("data_table.jmp");
ra = Recurrence Analysis( Y( :Age ), Label( :EngineID ), Cost( :Cost ), Event Plot( 1 ), Report View( "Summary" ) );
```

**Code Explanation**:

1. Open data table.
2. Perform recurrence analysis.
3. Set response variable.
4. Define label variable.
5. Specify cost variable.
6. Enable event plot.
7. Set report view to summary.



### Example 9
> **Summary**: Runs a recurrence analysis to identify patterns in the Age variable, while considering cost and treatment group as covariates, and visualizing the results with an event plot.

<!-- Keywords: #RecurrenceAnalysis, #EventPlot, #CostVariable, #GroupingVariables, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
ra = Recurrence Analysis( Y( :Age ), Label( :EngineID ), Cost( :Cost ), Event Plot( 1 ), Report View( "Summary" ) );
(ra << Report) << Set Window Size( 800, 800 );
```

**Code Explanation**:

1. Open data table;
2. Perform recurrence analysis.
3. Set response variable.
4. Define label variable.
5. Specify cost variable.
6. Enable event plot.
7. Select summary report view.
8. Retrieve analysis report.
9. Set window size to 800x800.



### Example 10
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables by performing Recurrence Analysis on the 'Age' column, filtering data locally, and generating reports.

<!-- Keywords: #RecurrenceAnalysis, #SurvivalAnalysis, #TimeCycles, #LocalDataFiltering, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Recurrence Analysis( Y( :Age ), Cost( :Cost ), Label( :EngineID ), );
obj << Local Data Filter( Add Filter( columns( :Age ), Where( :Age >= 200 & :Age <= 650 ) ), Mode( Select( 0 ), Show( 1 ), Include( 1 ) ) );
obj << Automatic Recalc( 1 );
dt << Select Where( :EngineID >= 400 );
dt << Exclude();
rpt = Report( obj );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Recurrence Analysis(
	Y( :Age ),
	Cost( :Cost ),
	Label( :EngineID ),
	Local Data Filter( Add Filter( columns( :Age ), Where( :Age >= 200 & :Age <= 650 ) ), Mode( Select( 0 ), Show( 1 ), Include( 1 ) ) ), 
);
obj << Automatic Recalc( 0 );
dt << Select Where( :EngineID >= 400 );
dt << Exclude();
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table;
2. Perform Recurrence Analysis.
3. Add local data filter for Age.
4. Enable automatic recalculation.
5. Select rows where EngineID >= 400.
6. Exclude selected rows.
7. Generate report from analysis.
8. Close table without saving.
9. Reopen table "data_table.jmp".
10. Perform Recurrence Analysis with local data filter.
11. Disable automatic recalculation.
12. Select rows where EngineID >= 400.
13. Exclude selected rows.
14. Generate report from analysis.



### Example 11
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables to generate reports for Placebo, Pyridoxine, and Thiotepa treatment groups.

<!-- Keywords: #JSLScriptingLanguage, #SurvivalAnalysis, #RecurrenceAnalysis, #TimeCycles, #GroupingVariables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Recurrence Analysis( Y( :Age ), Cost( :Cost ), By( :Treatment Group ), Label( :Patient Number ), );
rpt = obj << report;
placeboTbl = rpt[1][Outline Box( "MCF" )][Table Box( 1 )] << get as matrix;
pyridoxineTbl = rpt[2][Outline Box( "MCF" )][Table Box( 1 )] << get as matrix;
thiotepaTbl = rpt[3][Outline Box( "MCF" )][Table Box( 1 )] << get as matrix;
nRowPlacebo = N Rows( placeboTbl );
nRowPyridoxine = N Rows( pyridoxineTbl );
nRowThiotepa = N Rows( thiotepaTbl );
placeboTblObj = rpt[1][Outline Box( "MCF" )][Table Box( 1 )];
dt1 = placeboTblObj << Make Combined Data Table;
```

**Code Explanation**:

1. Open data table;
2. Perform Recurrence Analysis.
3. Retrieve report object.
4. Extract MCF table for Placebo.
5. Extract MCF table for Pyridoxine.
6. Extract MCF table for Thiotepa.
7. Count rows in Placebo table.
8. Count rows in Pyridoxine table.
9. Count rows in Thiotepa table.
10. Create combined data table from Placebo table.



### Example 12
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables by performing a Recurrence Analysis on the Age variable, cost calculation, and plotting MCF differences.

<!-- Keywords: #JMPScriptingLanguage, #RecurrenceAnalysis, #SurvivalAnalysis, #TimeCycles, #GroupingVariables -->

**Code**:
```jsl
Open("data_table.jmp");
plat = Recurrence Analysis( Y( :Age ), Cost( :Cost ), Grouping( :Treatment Group ), Label( :Patient Number ), Plot MCF Differences( 1 ) );
rep = Report( plat );
title = rep[Outline Box( 2 )] << GetTitle;
```

**Code Explanation**:

1. Open data table;
2. Perform recurrence analysis.
3. Set Y variable as Age.
4. Set Cost variable.
5. Group by Treatment Group.
6. Label by Patient Number.
7. Plot MCF differences.
8. Generate report object.
9. Access second outline box.
10. Retrieve title text.



## Recurrence Analysis using For
> **Summary**: Generates a recurrence analysis report for a specified data table, utilizing the Recurrence Analysis platform to identify patterns and trends.

<!-- Keywords: #RecurrenceAnalysis, #JMPScriptingLanguage, #DataTable, #ReportGeneration, #Automation -->

**Code**:
```jsl
For( i = 1, i < 99, i++,
	dt = Open("data_table.jmp");
	obj = dt << Recurrence Analysis( Age at Event( :Age ), Label( :EngineID ), Name( "End-of-Service" )(:Cost), );
	rpt = Report( obj )["Recurrence Analysis"] << get scriptable object;
	rpt << Fit Model;
	rpt = obj << report;
	rpt[Button Box( 9 )] << Click;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Loop from 1 to 98.
2. Open data table.
3. Perform recurrence analysis.
4. Get report object.
5. Fit model within report.
6. Update report object.
7. Click button box 9.
8. Close data table without saving.
9. Repeat loop.



## Recurrence Analysis using Value Labels
> **Summary**: Analyze a data table by performing recurrence analysis, grouping by Treatment Group, and saving MCF differences to a new table.

<!-- Keywords: #JMPScriptingLanguage, #RecurrenceAnalysis, #DataTableManipulation, #ValueLabels, #ForcedValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Treatment Group << Value Labels( {1 = "Placebo", 2 = "Pyridoxine", 3 = "Thiotepa", 4 = "Nonexistent"} ) << Use Value Labels( 1 ) <<
Set Property( "Forced Values", {1, 2, 3, 4} );
obj = dt << Recurrence Analysis( Y( :Age ), Cost( :Cost ), Grouping( :Treatment Group ), Label( :Patient Number ), Event Plot( 0 ) );
dt1 = obj << Save MCF Differences( Last );
```

**Code Explanation**:

1. Open data table;
2. Set value labels for Treatment Group.
3. Enable value labels usage.
4. Define forced values for Treatment Group.
5. Perform recurrence analysis.
6. Specify Age as Y variable.
7. Specify Cost as cost variable.
8. Group by Treatment Group.
9. Label by Patient Number.
10. Save MCF differences to new table.



## Recurrence Analysis using Run Script
> **Summary**: Extracts and analyzes data tables for placebo, pyridoxine, and thiotepa treatments using Recurrence Analysis script in JMP.

<!-- Keywords: #JMP, #RecurrenceAnalysis, #DataExtraction, #Scripting, #PathDiagram -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "Recurrence Analysis" );
rpt = obj << report;
placeboTbl = rpt[Outline Box( "Placebo" )][Table Box( 1 )] << get as matrix;
pyridoxineTbl = rpt[Outline Box( "Pyridoxine" )][Table Box( 1 )] << get as matrix;
thiotepaTbl = rpt[Outline Box( "Thiotepa" )][Table Box( 1 )] << get as matrix;
nRowPlacebo = N Rows( placeboTbl );
nRowPyridoxine = N Rows( pyridoxineTbl );
nRowThiotepa = N Rows( thiotepaTbl );
placeboTblObj = rpt[Outline Box( "Placebo" )][Table Box( 1 )];
dt1 = placeboTblObj << Make Combined Data Table;
dt = Open("data_table.jmp");
obj = dt << Recurrence Analysis( Y( :Age ), Cost( :Cost ), By( :Treatment Group ), Label( :Patient Number ), );
rpt = obj << report;
placeboTbl = rpt[1][Outline Box( "MCF" )][Table Box( 1 )] << get as matrix;
pyridoxineTbl = rpt[2][Outline Box( "MCF" )][Table Box( 1 )] << get as matrix;
thiotepaTbl = rpt[3][Outline Box( "MCF" )][Table Box( 1 )] << get as matrix;
nRowPlacebo = N Rows( placeboTbl );
nRowPyridoxine = N Rows( pyridoxineTbl );
nRowThiotepa = N Rows( thiotepaTbl );
placeboTblObj = rpt[1][Outline Box( "MCF" )][Table Box( 1 )];
dt1 = placeboTblObj << Make Combined Data Table;
```

**Code Explanation**:

1. Open data table;
2. Run "Recurrence Analysis" script.
3. Extract Placebo table.
4. Extract Pyridoxine table.
5. Extract Thiotepa table.
6. Count rows in Placebo table.
7. Count rows in Pyridoxine table.
8. Count rows in Thiotepa table.
9. Create combined data table from Placebo.
10. Repeat analysis and extract tables again.



## Recurrence Analysis using Log Capture
> **Summary**: Analyze and visualize end-of-service events by performing recurrence analysis, grouping by system ID, and generating an event plot.

<!-- Keywords: #JMPScriptingLanguage, #RecurrenceAnalysis, #EventPlot, #DataVisualization, #SystemIDGrouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	obj = dt << Recurrence Analysis(
		Age at Event( :kHours ),
		Label( :System ID ),
		Name( "End-of-Service" )(:Cost),
		Grouping( :System ID ),
		Event Plot( 1 )
	)
);
rpt = obj << report;
jrn = rpt[Outline Box( "Event Plot" )][FrameBox( 1 )] << get journal;
```

**Code Explanation**:

1. Open data table.
2. Perform recurrence analysis.
3. Set age at event.
4. Label system ID.
5. Define end-of-service cost.
6. Group by system ID.
7. Enable event plot.
8. Capture log output.
9. Retrieve report object.
10. Extract event plot journal.



