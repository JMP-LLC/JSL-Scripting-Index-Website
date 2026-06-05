# Formula Depot

### Example 1
> **Summary**: Executes a nominal logistic model and publishes probability formulas, saving the report to a temporary file.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #ProbabilityFormulas, #ReportGeneration, #DataAnalysis -->

**Code**:
```jsl
Names Default To Here( 1 );
fd1 = Formula Depot();
dt = Open("data_table.jmp");
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
Report( fd1 ) << Save Window Report( "$TEMP/nodt_fdepot.jrp", embed data( 0 ) );
Report( fd1 ) << Close Window;
Open( "$TEMP/nodt_fdepot.jrp" );
```

**Code Explanation**:

1. Set default names.
2. Create formula depot.
3. Open data table;
4. Run nominal logistic model.
5. Publish probability formulas.
6. Save report window.
7. Close report window.
8. Open saved report.



### Example 2
> **Summary**: Executes a Lasso Poisson script and publishes the prediction formula for further analysis.

<!-- Keywords: #JMPScriptingLanguage, #LassoRegression, #PoissonDistribution, #FormulaDepot, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fd = Formula Depot();
obj1 = dt << Run Script( "Lasso Poisson, Validation Column" );
md1 = obj1 << (Fit[1] << Publish Prediction Formula);
```

**Code Explanation**:

1. Open table.
2. Create Formula Depot.
3. Run Lasso Poisson script.
4. Publish prediction formula.



## Formula Depot using RunScript
### Example 1
> **Summary**: Executes a Nominal Logistic script and generates a report for model comparison, utilizing Formula Depot to save and publish probability formulas.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #FormulaDepot, #ModelComparison, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << RunScript( "Nominal Logistic" );
fd = Formula Depot();
obj << Save Probability Formula;
fd << Add Formula From Column( Table( dt ), Columns( "Most Likely Species" ) );
obj << Publish Probability Formulas;
fd << Model Comparison( Table( dt ), Formulas( 1, 2 ) );
rfd = fd << report;
fd << close window;
```

**Code Explanation**:

1. Open data table;
2. Run Nominal Logistic script.
3. Create Formula Depot object.
4. Save probability formula.
5. Add formula from column.
6. Publish probability formulas.
7. Compare models.
8. Generate report.
9. Close Formula Depot window.



### Example 2
> **Summary**: Executes a Nominal Logistic script, generates reports from Formula Depot, and creates a new table with a single column.

<!-- Keywords: #JSLScripting, #NominalLogisticRegression, #FormulaDepot, #ReportGeneration, #TableCreation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << RunScript( "Nominal Logistic" );
fd = Formula Depot();
obj << Publish Probability Formulas;
obj << Publish Probability Formulas;
rfd = fd << report;
fd << close window;
Close( dt, nosave );
dt = New Table( "test",
	Add Rows( 0 ),
	New Column( "test", Numeric, "Continuous", Format( "Best", 12 ), Formula( Names Default To Here( 1 ) ), Set Selected )
);
fd = Formula Depot();
fd << Add Formula From Column( Table( dt ), Columns( "test" ) );
rfd = fd << report;
fd << close window;
```

**Code Explanation**:

1. Open data table;
2. Run Nominal Logistic script.
3. Create Formula Depot.
4. Publish probability formulas twice.
5. Generate report.
6. Close Formula Depot window.
7. Close dataset without saving.
8. Create new empty table.
9. Add "test" column.
10. Create another Formula Depot.



### Example 3
> **Summary**: Executes a Nominal Logistic script and publishes probability formulas, generating a report in JMP.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #FormulaDepot, #ReportGeneration, #DataAnalysisAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << RunScript( "Nominal Logistic" );
fd = Formula Depot();
obj << Publish Probability Formulas;
obj << Publish Probability Formulas;
rfd = fd << report;
fd << close window;
```

**Code Explanation**:

1. Open data table;
2. Run Nominal Logistic script.
3. Create Formula Depot.
4. Publish probability formulas.
5. Publish probability formulas.
6. Generate report.
7. Close Formula Depot window.



## Formula Depot using Run Scripts
### Example 1
> **Summary**: Executes scripts, profiling, and model comparison in a formula depot, while also opening and closing data tables and the formula depot window.

<!-- Keywords: #JMPScriptingLanguage, #FormulaDepot, #DataTableManagement, #ScriptExecution, #ModelComparison -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fd = formula depot();
fd << Run Scripts();
fd << Profiler();
fd << Model Comparison();
fd << Run Scripts( dt );
fd << Profiler( dt );
fd << Model Comparison( dt );
Close( dt, nosave );
fd << close window;
```

**Code Explanation**:

1. Open data table.
2. Create formula depot.
3. Run scripts in depot.
4. Open profiler in depot.
5. Compare models in depot.
6. Run scripts on data table.
7. Open data table.
8. Compare models on data table.
9. Close data table without saving.
10. Close formula depot window.



### Example 2
> **Summary**: Executes scripts, profiling, and model comparison in a formula depot with a data table.

<!-- Keywords: #JMPScripting, #FormulaDepot, #DataTable, #Profiler, #ModelComparison -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fd = formula depot();
fd << Run Scripts();
fd << Profiler();
fd << Model Comparison();
fd << Run Scripts( dt );
fd << Profiler( dt );
fd << Model Comparison( dt );
```

**Code Explanation**:

1. Open data table.
2. Create formula depot object.
3. Run scripts in depot.
4. Launch profiler.
5. Launch model comparison.
6. Run scripts with data table.
7. Launch profiler with data table.
8. Launch model comparison with data table.



## Formula Depot using If
### Example 1
> **Summary**: Process of performing Principal Component Analysis (PCA) and DModX calculations on a dataset, publishing formulas for selected components, and comparing original and published values.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentAnalysis, #DModX, #DataVisualization, #Automation -->

**Code**:
```jsl
If( JMP Product Name() == "Pro",
	fd = formula depot();
	dt = Open("data_table.jmp");
	obj = Principal Components(
		Y( :Name( "1-Octanol" ), :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
		Estimation Method( "Wide" )
	);
	mo = obj << Publish Components Formulas( 3 );
	obj << Save Principal Components( 3 );
	mo << Run Script;
	For( i = 1, i <= 3, i++,
		objCol = Column( "Prin" || Char( i ) );
		fdCol = Column( "Prin" || Char( i ) || "_1" );
		objVals = objCol << get values;
		fdVals = fdCol << get values;
	);
	obj << close window;
	obj = Principal Components(
		Y( :Name( "1-Octanol" ), :Ether, :Chloroform, :Prin1, :Prin2, :Prin3 ),
		Estimation Method( "Sparse" ),
		Number of Components( 2 ),
		"on Correlations"
	);
	mo = obj << Publish Components Formulas( 2 );
	obj << Save Principal Components( 2 );
	mo << Run Script;
	For( i = 1, i <= 2, i++,
		objCol = Column( "Prin" || Char( i ) || " 2" );
		fdCol = Column( "Prin" || Char( i ) || "_2_1" );
		objVals = objCol << get values;
		fdVals = fdCol << get values;
	);
	obj << close window;
	fd << close window;
	Close( dt, nosave );
	fd = formula depot();
	dt = Open("data_table.jmp");
	obj = Principal Components(
		Y( :Name( "1-Octanol" ), :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
		Estimation Method( "Wide" )
	);
	mo = obj << Publish dModX Formula( 2 );
	obj << Save dModX( 2 );
	mo << Run Script;
	objCol = Column( "DModX" );
	fdCol = Column( "DModX_1" );
	objVals = objCol << get values;
	fdVals = fdCol << get values;
	obj << close window;
	fd << close window;
	Close( dt, nosave );
);
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Open Formula Depot.
3. Load data_table.jmp data.
4. Perform PCA on selected columns.
5. Publish 3 component formulas.
6. Save 3 principal components.
7. Run published script.
8. Loop through first 3 principal components.
9. Compare original and published values.
10. Close PCA window.
11. Repeat PCA with sparse method.
12. Publish 2 component formulas.
13. Save 2 principal components.
14. Run published script.
15. Loop through first 2 principal components.
16. Compare original and published values.
17. Close PCA window.
18. Close Formula Depot.
19. Close data table without saving.
20. Reopen Formula Depot.
21. Reopen data_table data.
22. Perform PCA on selected columns.
23. Publish DModX formula for 2 components.
24. Save DModX for 2 components.
25. Run published script.
26. Compare DModX original and published values.
27. Close PCA window.
28. Close Formula Depot.
29. Close data table without saving.



### Example 2
> **Summary**: Executes a Lasso Poisson model and generates a report in Formula Depot, while also profiling and updating the report.

<!-- Keywords: #JMPPro, #LassoPoisson, #FormulaDepot, #Profiler, #Scripting -->

**Code**:
```jsl
If( JMP Product Name() == "Pro",
	dt = Open( ‚Äú$SAMPLE_DATA\data_table.jmp‚Äù );
	fd = Formula Depot();
	obj1 = dt << Run Script( ‚ÄúLasso Poisson, Validation Column‚Äù );
	model = obj1 << (Fit[1] << Publish Prediction Formula);
	rfd = fd << report;
	wnd1 = Window( ‚Äúdata_table - Formula Depot‚Äù );
	fd << Profiler;
	rfd = fd << report;
	wnd2 = Window( ‚Äúdata_table - Formula Depot‚Äù );
	Close( dt, NoSave );
	fd << close window( 1 );
);
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Open data table;
3. Initialize Formula Depot.
4. Run "Lasso Poisson" script.
5. Publish prediction formula.
6. Get Formula Depot report.
7. Create "data_table - Formula Depot" window.
8. Open profiler in Formula Depot.
9. Update Formula Depot report.
10. Close "data_table" dataset.
11. Close Formula Depot window.



