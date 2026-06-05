# Marker Admixture

### Example 1
> **Summary**: Performs the Marker Admixture analysis on a data table, allowing for interactive exploration of admixed samples.

<!-- Keywords: #MarkerAdmixture, #DataTable, #JMPScriptingLanguage, #InteractiveAnalysis, #Genomics -->

**Code**:
```jsl
Open("data_table.jmp");
Marker Admixture();
```

**Code Explanation**:

1. Open data table;
2. Run Marker Admixture analysis.



### Example 2
> **Summary**: Executes Marker Admixture analysis on a dataset, with repeated opening and re-execution of the analysis.

<!-- Keywords: #MarkerAdmixture, #DataAnalysis, #JMPScriptingLanguage, #RepetitionControl, #DataTable -->

**Code**:
```jsl
Open("data_table.jmp");
Marker Admixture();
dt = Open("data_table.jmp");
dt << Marker  Admixture();
dt = Open("data_table.jmp");
```

**Code Explanation**:

1. Open data_table data
2. Run Marker Admixture analysis.
3. Open data_table data again.
4. Run Marker Admixture analysis on dataset.
5. Open data_table data once more.



### Example 3
> **Summary**: Executes a Marker Admixture analysis and report generation, with interactive features for toggling checkboxes, selecting combo boxes, and editing number edit boxes.

<!-- Keywords: #MarkerAdmixture, #JSLScripting, #DataAnalysis, #InteractiveReporting, #FitObject -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit( Set Random Seed( 12345 ), Missing Marker Imputation Method( "HWE On" ), Imputation Value( 1 ) )
);
rpt = obj << report;
rpt[Outline Box( "Launch" )][CheckBoxBox( 1 )] << set;
rpt[Outline Box( "Launch" )][Button Box( 1 )] << Click();
rpt[Combo Box( 1 )] << Set( 1 );
rpt[Outline Box( "Launch" )][Button Box( 1 )] << Click();
rpt[Outline Box( "Launch" )][CheckBoxBox( 1 )] << set();
rpt[Combo Box( 1 )] << Set( 3 );
rpt[Outline Box( "Launch" )][Button Box( 1 )] << Click();
rpt[Combo Box( 1 )] << Set( 4 );
rpt["Launch", "Advanced Options", Number Edit Box( 1 )] << Set( 2 );
rpt[Outline Box( "Launch" )][Button Box( 1 )] << Click();
rpt[Outline Box( "Launch" )][CheckBoxBox( 1 )] << set;
rpt[Combo Box( 1 )] << Set( 4 );
rpt["Launch", "Advanced Options", Number Edit Box( 1 )] << Set( 1 );
rpt[Outline Box( "Launch" )][Button Box( 1 )] << Click();
obj << (Fit[1] << Remove Fit( 1 ));
obj << (Fit[2] << Remove Fit( 1 ));
obj << (Fit[3] << Remove Fit( 1 ));
obj << (Fit[4] << Remove Fit( 1 ));
obj << (Fit[5] << Remove Fit( 1 ));
obj << (Fit[6] << Remove Fit( 1 ));
```

**Code Explanation**:

1. Open data table.
2. Run Marker Admixture analysis.
3. Retrieve analysis report.
4. Toggle first checkbox in Launch outline.
5. Click first button in Launch outline.
6. Set first combo box to option 1.
7. Click first button in Launch outline.
8. Toggle first checkbox in Launch outline.
9. Set first combo box to option 3.
10. Click first button in Launch outline.
11. Set first combo box to option 4.
12. Set first number edit box in Advanced Options to 2.
13. Click first button in Launch outline.
14. Toggle first checkbox in Launch outline.
15. Set first combo box to option 4.
16. Set first number edit box in Advanced Options to 1.
17. Click first button in Launch outline.
18. Remove first fit from Fit object.
19. Remove second fit from Fit object.
20. Remove third fit from Fit object.
21. Remove fourth fit from Fit object.
22. Remove fifth fit from Fit object.
23. Remove sixth fit from Fit object.



### Example 4
> **Summary**: Performs the Marker Admixture analysis on a data table, enabling parallel plots for individuals and markers, as well as clustering for both.

<!-- Keywords: #MarkerAdmixture, #ParallelPlot, #Clustering, #DataAnalysis, #JMPScripting -->

**Code**:
```jsl
Open("data_table.jmp");
dt = Current Data Table();
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit( Parallel Plot for Individuals( 1 ), Parallel Plot for Markers( 1 ), Cluster Individuals( 1 ), Cluster Markers( 1 ) )
);
```

**Code Explanation**:

1. Open data table.
2. Assign current data table.
3. Run Marker Admixture analysis.
4. Specify marker column group.
5. Enable parallel plot for individuals.
6. Enable parallel plot for markers.
7. Enable clustering for individuals.
8. Enable clustering for markers.



### Example 5
> **Summary**: Runs marker admixture analysis to group markers by column and analyze by sex, generating parallel plots for individuals and markers, and clustering both.

<!-- Keywords: #MarkerAdmixture, #JMPScriptingLanguage, #DataAnalysis, #Biostatistics, #ParallelPlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt = Current Data Table();
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	By( :Sex ),
	Fit( Parallel Plot for Individuals( 1 ), Parallel Plot for Markers( 1 ), Cluster Individuals( 1 ), Cluster Markers( 1 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Set current data table.
3. Perform marker admixture analysis.
4. Group markers by column.
5. Analyze by sex.
6. Generate parallel plot for individuals.
7. Generate parallel plot for markers.
8. Cluster individuals.
9. Cluster markers.



### Example 6
> **Summary**: Performs the Marker Admixture analysis on a data table, grouping markers by 'Markers' column and fitting parallel plots for individuals and markers, with optional clustering by sex.

<!-- Keywords: #MarkerAdmixture, #JMPScriptingLanguage, #DataAnalysis, #Biostatistics, #Genomics -->

**Code**:
```jsl
Open("data_table.jmp");
dt = Current Data Table();
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Fit( Parallel Plot for Individuals( 1 ), Parallel Plot for Markers( 1 ), Cluster Individuals( 1 ), Cluster Markers( 1 ) )
);
dt = Open("data_table.jmp");
dt = Current Data Table();
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	By( :Sex ),
	Fit( Parallel Plot for Individuals( 1 ), Parallel Plot for Markers( 1 ), Cluster Individuals( 1 ), Cluster Markers( 1 ) )
);
```

**Code Explanation**:

1. Open data_table data
2. Assign current data table to dt.
3. Run Marker Admixture analysis.
4. Group markers by "Markers" column.
5. Fit parallel plot for individuals.
6. Fit parallel plot for markers.
7. Cluster individuals.
8. Cluster markers.
9. Reopen data_table data.
10. Assign current data table to dt.
11. Run Marker Admixture analysis by sex.
12. Group markers by "Markers" column.
13. Fit parallel plot for individuals.
14. Fit parallel plot for markers.
15. Cluster individuals.
16. Cluster markers.



## Marker Admixture using If
### Example 1
> **Summary**: Performs the Marker Admixture analysis and report generation in JMP Pro, with interactive features for checkbox setting, button clicking, and combo box value selection.

<!-- Keywords: #JMPPro, #MarkerAdmixture, #ScriptingLanguage, #DataAnalysis, #InteractiveFeatures -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = dt << Marker Admixture(
		Marker( Column Group( "Markers" ) ),
		Fit( Set Random Seed( 12345 ), Missing Marker Imputation Method( "HWE On" ), Imputation Value( 1 ) )
	);
	obj << (Fit[1] << Remove Fit( 1 ));
	dt = Open("data_table.jmp");
	obj = dt << Marker Admixture(
		Marker( Column Group( "Markers" ) ),
		Fit( Set Random Seed( 12345 ), Missing Marker Imputation Method( "HWE On" ), Imputation Value( 1 ) )
	);
	rpt = obj << report;
	rpt[Outline Box( "Launch" )][CheckBoxBox( 1 )] << set;
	rpt[Outline Box( "Launch" )][Button Box( 1 )] << Click();
	rpt[Combo Box( 1 )] << Set( 1 );
	rpt[Outline Box( "Launch" )][Button Box( 1 )] << Click();
	rpt[Outline Box( "Launch" )][CheckBoxBox( 1 )] << set();
	rpt[Combo Box( 1 )] << Set( 3 );
	rpt[Outline Box( "Launch" )][Button Box( 1 )] << Click();
	rpt[Combo Box( 1 )] << Set( 4 );
	rpt["Launch", "Advanced Options", Number Edit Box( 1 )] << Set( 2 );
	rpt[Outline Box( "Launch" )][Button Box( 1 )] << Click();
	rpt[Outline Box( "Launch" )][CheckBoxBox( 1 )] << set;
	rpt[Combo Box( 1 )] << Set( 4 );
	rpt["Launch", "Advanced Options", Number Edit Box( 1 )] << Set( 1 );
	rpt[Outline Box( "Launch" )][Button Box( 1 )] << Click();
	obj << (Fit[1] << Remove Fit( 1 ));
	obj << (Fit[2] << Remove Fit( 1 ));
	obj << (Fit[3] << Remove Fit( 1 ));
	obj << (Fit[4] << Remove Fit( 1 ));
	obj << (Fit[5] << Remove Fit( 1 ));
	obj << (Fit[6] << Remove Fit( 1 ));
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data_table data
3. Run Marker Admixture analysis.
4. Remove first fit.
5. Reopen data_table data.
6. Run Marker Admixture analysis again.
7. Generate report.
8. Set checkbox.
9. Click button.
10. Set combo box value.
11. Click button.
12. Set checkbox.
13. Set combo box value.
14. Click button.
15. Set combo box value.
16. Set advanced option.
17. Click button.
18. Set checkbox.
19. Set combo box value.
20. Set advanced option.
21. Click button.
22. Remove all fits.



### Example 2
> **Summary**: Performs the Marker Admixture analysis on a data table, retrieves all data tables, and counts their number, while checking if JMP is running in Pro version.

<!-- Keywords: #JMPScriptingLanguage, #MarkerAdmixtureAnalysis, #DataTableManagement, #ProVersionCheck, #ScriptAutomation -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit, Fit, Fit );
	dtlist = Get Data Table List();
	N_table = N Items( dtlist );
	dtName = Left( Current Data Table() << Get Name, 18 );
	e_dtName = "data_table";
);
```

**Code Explanation**:

1. Check if JMP is Pro version.
2. Open data table.
3. Run Marker Admixture analysis.
4. Retrieve all data tables.
5. Count number of data tables.
6. Get current data table name.
7. Limit name to 18 characters.
8. Define expected data table name.
9. End if condition.



### Example 3
> **Summary**: Executes Marker Admixture analysis on a data table, with options to run by sex or without grouping.

<!-- Keywords: #MarkerAdmixture, #DataAnalysis, #JMPScriptingLanguage, #ByGrouping, #StatisticalModeling -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	dt = Current Data Table();
	dt << Marker Admixture(
		Marker( Column Group( "Markers" ) ),
		Fit( Parallel Plot for Individuals( 1 ), Parallel Plot for Markers( 1 ), Cluster Individuals( 1 ), Cluster Markers( 1 ) )
	);
	dt = Open("data_table.jmp");
	dt = Current Data Table();
	dt << Marker Admixture(
		Marker( Column Group( "Markers" ) ),
		By( :Sex ),
		Fit( Parallel Plot for Individuals( 1 ), Parallel Plot for Markers( 1 ), Cluster Individuals( 1 ), Cluster Markers( 1 ) )
	);
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data_table data
3. Set current data table.
4. Run Marker Admixture analysis.
5. Open data_table data again.
6. Set current data table.
7. Run Marker Admixture analysis by sex.



### Example 4
> **Summary**: Runs marker admixture analysis and report generation in JMP Pro, utilizing the Marker Admixture platform to cluster individuals and markers.

<!-- Keywords: #JMPPro, #MarkerAdmixture, #ClusterAnalysis, #DataScience, #Genomics -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );
	rpt = obj << report;
   
	obj << (Fit[1] << Cluster Individuals());
	rpt = obj << report;
   
	obj << (Fit[1] << Cluster Markers());
	rpt = obj << report;
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data_table data
3. Perform marker admixture analysis.
4. Generate initial report.
5. Cluster individuals in fit.
6. Update report after clustering.
7. Cluster markers in fit.
8. Update report after clustering.
9. End script execution.



### Example 5
> **Summary**: Performs the Marker Admixture analysis in JMP Pro, configuring fit options and generating a report with interactive features.

<!-- Keywords: #JMPPro, #MarkerAdmixture, #FitOptions, #InteractiveReport, #Scripting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = dt << Marker Admixture(
		Marker( Column Group( "Markers" ) ),
		Fit( Set Random Seed( 12345 ), Missing Marker Imputation Method( "HWE On" ), Imputation Value( 1 ) )
	);
	rpt = obj << report;
	rpt[Outline Box( "Launch" )][CheckBoxBox( 1 )] << set;
	rpt[Outline Box( "Launch" )][Button Box( 1 )] << Click();
	rpt[Combo Box( 1 )] << Set( 1 );
	rpt[Outline Box( "Launch" )][Button Box( 1 )] << Click();
	rpt[Outline Box( "Launch" )][CheckBoxBox( 1 )] << set();
	rpt[Combo Box( 1 )] << Set( 3 );
	rpt[Outline Box( "Launch" )][Button Box( 1 )] << Click();
	rpt[Combo Box( 1 )] << Set( 4 );
	rpt["Launch", "Advanced Options", Number Edit Box( 1 )] << Set( 2 );
	rpt[Outline Box( "Launch" )][Button Box( 1 )] << Click();
	rpt[Outline Box( "Launch" )][CheckBoxBox( 1 )] << set;
	rpt[Combo Box( 1 )] << Set( 4 );
	rpt["Launch", "Advanced Options", Number Edit Box( 1 )] << Set( 1 );
	rpt[Outline Box( "Launch" )][Button Box( 1 )] << Click();
	Imputated = rpt["Model Comparison", Number Col Box( "Imputation Value" )] << get as matrix;
	predictors = rpt["Model Comparison", Number Col Box( "Predictors" )] << get as matrix;
	obj << (Fit[6] << Remove Fit( 1 ));
	obj << (Fit[5] << Remove Fit( 1 ));
	obj << (Fit[4] << Remove Fit( 1 ));
	obj << (Fit[3] << Remove Fit( 1 ));
	obj << (Fit[2] << Remove Fit( 1 ));
	obj << (Fit[1] << Remove Fit( 1 ));
);
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Open data table.
3. Launch Marker Admixture analysis.
4. Set marker column group.
5. Configure fit options.
6. Generate initial report.
7. Toggle checkbox and click button.
8. Set combo box value to 1.
9. Click button again.
10. Toggle checkbox and set combo box to 3.
11. Click button again.
12. Set combo box to 4.
13. Set advanced option number.
14. Click button again.
15. Toggle checkbox and set combo box to 4.
16. Set advanced option number to 1.
17. Click button again.
18. Extract imputed values matrix.
19. Extract predictors matrix.
20. Remove all fits from model.



## Marker Admixture using Is Scriptable
### Example 1
> **Summary**: Process of marker admixture and clustering in a data table, utilizing the `Marker Admixture` and `Fit` functions to identify patterns.

<!-- Keywords: #JSLScriptingLanguage, #MarkerAdmixture, #DataTableAnalysis, #Clustering, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );
	obj << (Fit[1] << Cluster Markers());
);
```

**Code Explanation**:

1. Open data table;
2. Check scriptability.
3. Run Marker Admixture.
4. Specify marker columns.
5. Perform fitting.
6. Access fit object.
7. Cluster markers.
8. End script block.



### Example 2
> **Summary**: Performs the Marker Admixture analysis on a data table, selecting marker column groups and performing fit operations with fixed parameters and 3 ancestral populations.

<!-- Keywords: #MarkerAdmixture, #DataAnalysis, #JMPScriptingLanguage, #FixedParameterEstimation, #AncestralPopulations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	obj = dt << Marker Admixture(
		Marker( Column Group( "Markers" ) ),
		Fit,
		Fit( Estimation Method( "Fixed Parameter" ), Number of Ancestral Populations( 3 ) ),
		Set( Estimation Method( "Fixed Parameter" ), Number of Ancestral Populations( 3 ) )
	);
	obj << Compare( LogLikehood( 0 ) );
);
```

**Code Explanation**:

1. Open data table.
2. Check if scriptable.
3. Run Marker Admixture analysis.
4. Select marker column group.
5. Perform fit operation.
6. Set estimation method to Fixed Parameter.
7. Specify 3 ancestral populations.
8. Repeat set operation.
9. Compare using LogLikelihood.
10. End script execution.



### Example 3
> **Summary**: Process of running Marker Admixture analysis on a data table, selecting the 'Markers' column group and fitting an admixture model.

<!-- Keywords: #MarkerAdmixture, #DataTable, #Scripting, #JMP, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	obj = dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Fit() );
	obj << (Fit[1] << Copy Parameters to Launch());
);
```

**Code Explanation**:

1. Open data table.
2. Check if scriptable.
3. Run Marker Admixture analysis.
4. Select Markers column group.
5. Fit admixture model.
6. Copy fit parameters.



### Example 4
> **Summary**: Performs the Marker Admixture analysis for a data table, specifying markers column group, estimation method, number of ancestral populations, and imputation method.

<!-- Keywords: #MarkerAdmixture, #ScriptingLanguage, #JSL, #DataAnalysis, #Genomics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable(
	obj = dt << Marker Admixture(
		Marker( Column Group( "Markers" ) ),
		Fit(
			Estimation Method( "Fixed Parameter" ),
			Number of Ancestral Populations( 3 ),
			Unthreaded( 1 ),
			Missing Marker Imputation Method( "Specified" ),
			Imputation Value( 1 )
		)
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Check scriptability.
3. Run Marker Admixture analysis.
4. Specify markers column group.
5. Set estimation method to fixed parameter.
6. Define number of ancestral populations as 3.
7. Enable unthreaded processing.
8. Choose specified imputation method.
9. Set imputation value to 1.



### Example 5
> **Summary**: Runs marker admixture analysis on data_table.jmp, using the Marker Admixture platform to fit a model and label by sex.

<!-- Keywords: #MarkerAdmixture, #Scripting, #DataAnalysis, #JMP, #StatisticalModeling -->

**Code**:
```jsl
test = Is Scriptable(
	dt = Open("data_table.jmp");
	dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Label( :Sex ), Fit );
);
```

**Code Explanation**:

1. Check scriptability.
2. Open data_table data
3. Apply marker admixture analysis.
4. Use markers column group.
5. Label by sex.
6. Perform fit operation.



