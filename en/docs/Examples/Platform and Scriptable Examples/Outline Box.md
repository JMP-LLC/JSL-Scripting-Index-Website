# Outline Box

## Outline Box using Run Script
### Example 1
> **Summary**: Opens a data table, runs a distribution script, and selects specific boxes in the report to visualize the results.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #PathDiagrams, #SEMAnalysis, #ReportCustomization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dist = dt << Run Script( "Distribution" );
Report( dist )[Axis Box( 1 )] << Select;
Report( dist )[FrameBox( 1 )] << Select;
Report( dist )[Outline Box( 4 )] << Select;
```

**Code Explanation**:

1. Open data table.
2. Run distribution script.
3. Select first axis box.
4. Select first frame box.
5. Select fourth outline box.



### Example 2
> **Summary**: Executes a virtual join script, retrieving a report object and extracting specific box titles and table contents.

<!-- Keywords: #JSLScriptingLanguage, #VirtualJoin, #ReportObject, #DataTableOperations, #PathDiagramProperties -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
dt3 = Open("data_table.jmp");
obj = dt3 << Run Script( " Distribution: Virtual Join - Age and Rating" );
rep = obj << Report;
freq = rep[Outline Box( 6 )] << Get Title;
quant = rep[Table Box( 1 )] << make into data table;
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Run virtual join script.
4. Retrieve report object.
5. Extract outline box title.
6. Extract table box content.
7. Convert table box to data table.



### Example 3
> **Summary**: Generates a 3-Factor CFA report by recalling model specification from an SEM script, leveraging the Run Script and Report functions in JMP.

<!-- Keywords: #JMP-Scripting-Language, #SEM-Modeling, #Path-Diagram, #Report-Generation, #Data-Analysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: Measurement Models" );
rpt = obj << Report();
scr = rpt[Outline Box( "?: 3-Factor CFA" )] << Get Scriptable Object();
scr << Recall in Model Specification();
```

**Code Explanation**:

1. Open data_table data
2. Run SEM script.
3. Generate report object.
4. Access 3-Factor CFA outline.
5. Retrieve scriptable object.
6. Recall model specification.



### Example 4
> **Summary**: Configures diagnostics checkbox in a path diagram report, enabling and disabling it to track changes.

<!-- Keywords: #JSLScriptingLanguage, #PathDiagramReport, #DiagnosticsCheckbox, #ReportConfiguration, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "Fit Life by X" );
rpt = obj << report;
default = rpt[Outline Box( "Diagnostics - Regression" )][CheckBoxBox( 1 )] << get;
rpt[Outline Box( "Diagnostics - Regression" )][CheckBoxBox( 1 )] << Set( 1, 1 );
default1 = rpt[Outline Box( "Diagnostics - Regression" )][CheckBoxBox( 1 )] << get;
rpt[Outline Box( "Diagnostics - Regression" )][CheckBoxBox( 1 )] << Set( 1, 0 );
default0 = rpt[Outline Box( "Diagnostics - Regression" )][CheckBoxBox( 1 )] << get;
```

**Code Explanation**:

1. Open table.
2. Run "Fit Life by X".
3. Get report object.
4. Retrieve diagnostics checkbox state.
5. Enable diagnostics checkbox.
6. Retrieve updated checkbox state.
7. Disable diagnostics checkbox.
8. Retrieve final checkbox state.



### Example 5
> **Summary**: Estimates Weibull life distribution parameters and probability quantiles from a data table, utilizing Run Script and report objects.

<!-- Keywords: #WeibullDistribution, #JMPScriptingLanguage, #DataAnalysis, #ProbabilityEstimation, #QuantileEstimation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "Life Distribution - Weibull" );
rpt = obj << report;
parEstWeibullObj = rpt[Outline Box( "Parametric Estimate - Weibull" )] << Get Scriptable Object;
parEstWeibullObj << Custom Estimation;
estProbObj = rpt[Outline Box( "Estimate Probability" )] << Get Scriptable Object;
estQuantObj = rpt[Outline Box( "Estimate Quantile" )] << Get Scriptable Object;
twoProb = (Words( Trim( rpt[Outline Box( "Estimate Probability" )][Table Box( 1 )] << Get Text ), "\!N	." ));
estProbObj << Side( 2 );
lowProb = (Words( Trim( rpt[Outline Box( "Estimate Probability" )][Table Box( 1 )] << Get Text ), "\!N	." ));
estProbObj << Side( 0 );
twoProb = (Words( Trim( rpt[Outline Box( "Estimate Probability" )][Table Box( 1 )] << Get Text ), "\!N	." ));
estProbObj << Side( 1 );
uppProb = (Words( Trim( rpt[Outline Box( "Estimate Probability" )][Table Box( 1 )] << Get Text ), "\!N	." ));
estProbObj << Side( 0 );
twoProb = (Words( Trim( rpt[Outline Box( "Estimate Probability" )][Table Box( 1 )] << Get Text ), "\!N	." ));
twoQuant = (Words( Trim( rpt[Outline Box( "Estimate Quantile" )][Table Box( 1 )] << Get Text ), "\!N	." ));
estQuantObj << Side( 1 );
lowQuant = (Words( Trim( rpt[Outline Box( "Estimate Quantile" )][Table Box( 1 )] << Get Text ), "\!N	." ));
estQuantObj << Side( 0 );
twoQuant = (Words( Trim( rpt[Outline Box( "Estimate Quantile" )][Table Box( 1 )] << Get Text ), "\!N	." ));
estQuantObj << Side( 2 );
uppQuant = (Words( Trim( rpt[Outline Box( "Estimate Quantile" )][Table Box( 1 )] << Get Text ), "\!N	." ));
estQuantObj << Side( 0 );
twoQuant = (Words( Trim( rpt[Outline Box( "Estimate Quantile" )][Table Box( 1 )] << Get Text ), "\!N	." ));
```

**Code Explanation**:

1. Open data table;
2. Run Weibull life distribution script.
3. Retrieve report object.
4. Access Weibull parametric estimate.
5. Perform custom estimation.
6. Access probability estimate outline.
7. Set side to 2 for probability.
8. Retrieve low probability values.
9. Reset side to 0 for probability.
10. Retrieve upper probability values.



