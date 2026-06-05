# Report

> **Summary**: Creates a report by opening a data table, launching the Fit Model dialog, and generating a report object.

<!-- Keywords: #JMPScriptingLanguage, #FitModelDialog, #ReportObject, #DataTableOperations, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dlg = dt << Fit Model;
rpt = Report( dlg );
```

**Code Explanation**:

1. Open data table;
2. Launch Fit Model dialog.
3. Create report object.



## Report using Run Script
### Example 1
> **Summary**: Executes three SEM scripts and generates reports for growth comparison, latent growth curve analysis, and conditional growth curve modeling.

<!-- Keywords: #JMPScriptingLanguage, #SEMAnalysis, #PathDiagrams, #ReportGeneration, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj3 = dt << Run Script( "SEM: Compare Growth Trajectories" );
rpt3 = obj3 << Report();
obj4 = dt << Run Script( "SEM: LGC with LDF" );
rpt4 = obj4 << Report();
obj5 = dt << Run Script( "SEM: Conditional LGC" );
rpt5 = obj5 << Report();
```

**Code Explanation**:

1. Open data table.
2. Run SEM script for growth comparison.
3. Generate report from growth comparison.
4. Run SEM script with latent growth curve.
5. Generate report from latent growth curve.
6. Run SEM script with conditional growth curve.
7. Generate report from conditional growth curve.



### Example 2
> **Summary**: Generates two SEM reports using different estimators, leveraging the Run Script function to execute the Bollen (1989) and MIIV-2SLS Estimator scripts.

<!-- Keywords: #JMPScriptingLanguage, #StructuralEquationModeling, #SEMReportGeneration, #EstimatorVariants, #DataAnalysisAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Run Script( "SEM: Bollen (1989)" );
rpt1 = obj1 << Report();
obj2 = dt << Run Script( "SEM: Bollen (1989) MIIV-2SLS Estimator" );
rpt2 = obj2 << Report();
```

**Code Explanation**:

1. Open table.
2. Run SEM script.
3. Generate report.
4. Run another SEM script.
5. Generate another report.



### Example 3
> **Summary**: Executes a SEM Bi-Factor Model script and generates a report from the output.

<!-- Keywords: #JSLScriptingLanguage, #SEMBi-FactorModel, #PathDiagramProperties, #ReportGeneration, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj9 = dt << Run Script( "SEM: Bi-Factor Model" );
rpt9 = obj9 << Report();
```

**Code Explanation**:

1. Open data table.
2. Run SEM Bi-Factor Model script.
3. Generate report from output.



### Example 4
> **Summary**: Executes a Second-Order CFA SEM script and generates a report object, allowing for further analysis and visualization.

<!-- Keywords: #JSLScriptingLanguage, #SEM, #SecondOrderCFA, #PathDiagram, #ReportObject -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj10 = dt << Run Script( "SEM: Second-Order CFA" );
rpt9 = obj10 << Report();
```

**Code Explanation**:

1. Open data table.
2. Run SEM script.
3. Retrieve report object.



### Example 5
> **Summary**: Executes two SEM scripts, Multivariate LGC and Multiple Group Analysis LGC, on a data table and generates reports for each script.

<!-- Keywords: #JSLScriptingLanguage, #SEMAnalysis, #PathDiagrams, #ReportGeneration, #DataTableOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj11 = dt << Run Script( "SEM: Multivariate LGC" );
rpt11 = obj11 << Report();
obj12 = dt << Run Script( "SEM: Multiple Group Analysis LGC" );
rpt12 = obj12 << Report();
```

**Code Explanation**:

1. Open data table;
2. Run SEM: Multivariate LGC script.
3. Generate report from obj11.
4. Run SEM: Multiple Group Analysis LGC script.
5. Generate report from obj12.



### Example 6
> **Summary**: Executes four SEM scripts to analyze student perceptions, grades, and measurement invariance across groups, generating reports for each analysis.

<!-- Keywords: #JSL, #SEM, #PathDiagram, #ReportGeneration, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj13 = dt << Run Script( "SEM: Measure Students Perceptions" );
rpt13 = obj13 << Report();
obj14 = dt << Run Script( "SEM: Students Perceptions and Grades" );
rpt14 = obj14 << Report();
obj15 = dt << Run Script( "SEM: Mediation Analysis" );
rpt15 = obj15 << Report();
obj16 = dt << Run Script( "Measurement Invariance Across Groups (Gender)" );
rpt16 = obj16 << Report();
```

**Code Explanation**:

1. Open data table.
2. Run SEM script for student perceptions.
3. Extract report from SEM analysis.
4. Run SEM script for perceptions and grades.
5. Extract report from SEM analysis.
6. Run SEM script for mediation analysis.
7. Extract report from SEM analysis.
8. Run SEM script for measurement invariance.
9. Extract report from SEM analysis.
10. End script execution.



### Example 7
> **Summary**: Executes a Small Sample SEM script and generates a report from the results, utilizing JMP's Run Script and Report functions.

<!-- Keywords: #JMP, #SEM, #SmallSample, #PathAnalysis, #LatentVariables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj17 = dt << Run Script( "Small Sample SEM MIIV-2SLS" );
rpt17 = obj17 << Report();
```

**Code Explanation**:

1. Open data table;
2. Run Small Sample SEM script.
3. Generate report from results.



### Example 8
> **Summary**: Runs the reliability growth analysis by running a script, extracting estimates matrices, and updating data table rows.

<!-- Keywords: #ReliabilityGrowth, #JSLScripting, #DataTableManipulation, #EstimatesMatrix, #PathDiagram -->

**Code**:
```jsl
dt = Open("data_table.jmp");
rg = dt << Run Script( "Reliability Growth" );
m1 = Report( rg )["Estimates"][Table Box( 1 )] << get as matrix;
dt << Add Rows( 2 );
dt:Hours[14] = 11000;
dt:Hours[15] = 12000;
rg2 = dt << Run Script( "Reliability Growth" );
m2 = Report( rg2 )["Estimates"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Run reliability growth script.
3. Extract estimates matrix.
4. Add two rows to table.
5. Set Hours for new rows.
6. Run reliability growth script again.
7. Extract new estimates matrix.



## Report using Set Property
> **Summary**: Executes Proportional Hazards scripts on a data table, modifying missing value codes and modeling types to analyze the impact on parameter estimates.

<!-- Keywords: #JSLScriptingLanguage, #ProportionalHazards, #DataTableModification, #MissingValueCodes, #ModelingTypes -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:days << Set Property( "Missing Value Codes", {142, 143, 163, 164} );
ph1 = dt << Run Script( "Proportional Hazards" );
rv1 = Report( ph1 )["Parameter Estimates"][Table Box( 1 )] << get as matrix;
dt:days[{1, 2, 4, 5}] = .;
ph2 = dt << Run Script( "Proportional Hazards" );
rv2 = Report( ph2 )["Parameter Estimates"][Table Box( 1 )] << get as matrix;
dt = dt << Revert;
dt:Group << Lock( 0 );
dt:Group[1 :: 3] = 3;
dt:Group << Set Property( "Missing Value Codes", 3 );
dt:Group << Set Modeling Type( "Continuous" );
ph1 = dt << Run Script( "Proportional Hazards" );
rv1 = Report( ph1 )["Parameter Estimates"][Table Box( 1 )] << get as matrix;
dt:Group[1 :: 3] = .;
ph2 = dt << Run Script( "Proportional Hazards" );
rv2 = Report( ph2 )["Parameter Estimates"][Table Box( 1 )] << get as matrix;
dt = dt << Revert;
dt:Censor << Lock( 0 );
dt:Censor[10 :: 15] = 3;
dt:Censor << Set Property( "Missing Value Code", {3} );
ph1 = dt << Run Script( "Proportional Hazards" );
rv1 = Report( ph1 )["Parameter Estimates"][Table Box( 1 )] << get as matrix;
dt:Censor[10 :: 15] = .;
ph2 = dt << Run Script( "Proportional Hazards" );
rv2 = Report( ph2 )["Parameter Estimates"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Set missing value codes for days.
3. Run Proportional Hazards script.
4. Extract parameter estimates matrix.
5. Replace specific days values with missing.
6. Run Proportional Hazards script again.
7. Extract new parameter estimates matrix.
8. Revert dataset changes.
9. Lock Group column.
10. Modify Group values.
11. Set missing value code for Group.
12. Change Group modeling type to Continuous.
13. Run Proportional Hazards script.
14. Extract parameter estimates matrix.
15. Replace Group values with missing.
16. Run Proportional Hazards script again.
17. Extract new parameter estimates matrix.
18. Revert dataset changes.
19. Lock Censor column.
20. Modify Censor values.
21. Set missing value code for Censor.
22. Run Proportional Hazards script.
23. Extract parameter estimates matrix.
24. Replace Censor values with missing.
25. Run Proportional Hazards script again.
26. Extract new parameter estimates matrix.



## Report using Chart
> **Summary**: Creates a range chart with multiple series, connecting points and customizing pen style, and sends report settings to frame box.

<!-- Keywords: #JMPScriptingLanguage, #RangeChart, #Customization, #ReportSettings, #FrameBox -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart(
	X( :Date ),
	Y( :High, :Low, :Close ),
	Range Chart( 1 ),
	Y[3] << {Connect Points( 1 ), Pen Style( 1 )},
	SendToReport( Dispatch( {}, "Chart", FrameBox, {Frame Size( 868, 207 ), Line Width Scale( 0.5 )} ) )
);
```

**Code Explanation**:

1. Open data_table data
2. Create chart object.
3. Set X-axis to Date.
4. Add High, Low, Close to Y-axis.
5. Enable range chart.
6. Connect points for Close series.
7. Set pen style for Close series.
8. Send report settings.
9. Set frame size.
10. Adjust line width scale.



