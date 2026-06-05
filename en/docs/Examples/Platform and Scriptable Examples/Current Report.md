# Current Report

## Current Report using Fit Y by X
> **Summary**: Runs data analysis by opening a data table, running the 'Set Age Value Labels' script, fitting height by age regression, saving the report to OW.jrn, and closing the dataset without saving.

<!-- Keywords: #JMPScriptingLanguage, #DataAnalysis, #RegressionAnalysis, #ReportGeneration, #DataTableManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << run script( "Set Age Value Labels" );
dt << Fit Y by X( Y( :height ), X( :age ) );
Current Report() << save journal( "$TEMP\OW.jrn" );
dt << close window( "No Save" );
```

**Code Explanation**:

1. Open data table;
2. Run "Set Age Value Labels" script.
3. Fit height by age regression.
4. Save report to OW.jrn.
5. Close dataset without saving.



## Current Report using Run Script
### Example 1
> **Summary**: Executes a SEM: Multiple Group Analysis LGC script, allowing for interactive selection of tabs and diagram properties.

<!-- Keywords: #JSLScriptingLanguage, #SEMAnalysis, #MultipleGroupAnalysis, #PathDiagramProperties, #JMPReporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: Multiple Group Analysis LGC" );
rpt = Current Report();
rpt[TabListBox( 1 )] << SetSelected( 2 );
rpt[TabListBox( 1 )] << SetSelected( 1 );
```

**Code Explanation**:

1. Open data table;
2. Run SEM: Multiple Group Analysis LGC script.
3. Get current report.
4. Select second tab.
5. Select first tab.



### Example 2
> **Summary**: Executes Multiple Factor Analysis on a data table, enabling automatic recalculation and setting a specific value for Carolyn Tannic.

<!-- Keywords: #JSLScriptingLanguage, #MultipleFactorAnalysis, #AutomaticRecalculation, #DataTableOperations, #PathDiagramProperties -->

**Code**:
```jsl
dt = Open("data_table.jmp");
mfa = dt << Run Script( "Multiple Factor Analysis" );
mfa << Automatic Recalc( 1 );
:Carolyn Tannic[Where( :Region == "Sonoma" )] = 1000;
Wait( 0 );
rpt = Current Report();
eigen_jmp = rpt["Summary Plots", Table Box( 1 )] << get as matrix();
```

**Code Explanation**:

1. Open data_table data
2. Run Multiple Factor Analysis.
3. Enable automatic recalculation.
4. Set Carolyn Tannic value.
5. Wait for script completion.
6. Get current report.
7. Extract Summary Plots table.
8. Convert table to matrix.



### Example 3
> **Summary**: Compares selected models in a SEM: Measurement Models script, generating a report with a Chi-Square Difference Test outline box and retrieving its XML results.

<!-- Keywords: #JSLScriptingLanguage, #SEM:MeasurementModels, #PathDiagramProperties, #Chi-SquareDifferenceTest, #XMLResults -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: Measurement Models" );
rpt = Current Report();
For( i = 1, i <= 2, i++,
	(obj << Report())[Outline Box( "Model Comparison" )][Table Box( 1 )] << Set Selected
Rows( [3, 4] );
	obj << Compare Selected Models();
);
results_box = (rpt[Outline Box( "Chi-Square Difference Test" )]);
results_box << get xml;
```

**Code Explanation**:

1. Open data table;
2. Run SEM: Measurement Models script.
3. Get current report.
4. Loop 2 times.
5. Select rows 3 and 4 in Model Comparison table.
6. Compare selected models.
7. Get Chi-Square Difference Test outline box.
8. Retrieve XML of results.



### Example 4
> **Summary**: Compares growth trajectories in a data table by running a SEM script, setting model independence, and extracting relevant text from the report.

<!-- Keywords: #JSLScriptingLanguage, #SEMPathAnalysis, #PathDiagramProperties, #ModelIndependence, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "SEM: Compare Growth Trajectories" );
rpt = Current Report();
obj << Set as Independence Model( 5 );
text = rpt["Model Comparison", Text Box( 1 )] << get text();
```

**Code Explanation**:

1. Open data table;
2. Run SEM script.
3. Retrieve current report.
4. Set model independence.
5. Extract text from report.



