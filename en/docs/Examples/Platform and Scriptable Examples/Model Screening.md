# Model Screening

### Example 1
> **Summary**: Process of opening a data table, launching Model Screening with two-way splits for k-fold validation, and retrieving the session script.

<!-- Keywords: #ModelScreening, #TwoWaySplits, #KFoldValidation, #SessionScript, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = Model Screening();
ss = Get Session Script();
```

**Code Explanation**:

1. Open table.
2. Launch Model Screening.
3. Retrieve session script.



### Example 2
> **Summary**: Performs a model screening process using Naive Bayes and Partial Least Squares methods, with K-Fold cross-validation and two-way splits for reproducibility.

<!-- Keywords: #JMPScriptingLanguage, #ModelScreening, #NaiveBayes, #PartialLeastSquares, #K-FoldCross-Validation -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Model Screening(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Naive Bayes( 1 ),
	Partial Least Squares( 1 ),
	Set Random Seed( 24680 ),
	K Fold Crossvalidation( 1 ),
	Use Two Way Splits for K Fold( 1 )
);
rpt = obj << report;
b method = {"Boosted Tree", "Bootstrap Forest", "Decision Tree", "Fit Least Squares", "Fit Stepwise", "Generalized Regression Lasso",
"K Nearest Neighbors", "Neural Boosted", "Partial Least Squares", "Support Vector Machines"};
b fold = [1, 5, 5, 1, 2, 2, 1, 4, 2, 1];
obj << Select Fit( Clear All );
obj << Select Fit( "Summary", Where( N Trials Folds >= 1 ) );
obj << Save Prediction Formulas( 1 );
```

**Code Explanation**:

1. Open data table;
2. Create model screening object.
3. Define response variable.
4. Define predictor variables.
5. Enable Naive Bayes method.
6. Enable Partial Least Squares method.
7. Set random seed for reproducibility.
8. Use K-Fold cross-validation.
9. Use two-way splits for K-Fold.
10. Save prediction formulas.



### Example 3
> **Summary**: Runs a Model Screening process to evaluate the performance of various machine learning algorithms, including Naive Bayes and Partial Least Squares, on a binary outcome variable with multiple predictor variables, utilizing K-Fold cross-validation with two-way splits.

<!-- Keywords: #ModelScreening, #MachineLearning, #KFoldCrossValidation, #NaiveBayes, #PartialLeastSquares -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Model Screening(
	Y( :Y Binary ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Naive Bayes( 1 ),
	Partial Least Squares( 1 ),
	Set Random Seed( 24680 ),
	K Fold Crossvalidation( 1 ),
	Use Two Way Splits for K Fold( 1 )
);
rpt = obj << report;
b method = {"Boosted Tree", "Bootstrap Forest", "Decision Tree", "Fit Stepwise", "Generalized Regression Lasso", "K Nearest Neighbors",
"Naive Bayes", "Neural Boosted", "Nominal Logistic", "Support Vector Machines"};
b fold = [5, 5, 4, 5, 4, 1, 1, 5, 4, 1];
obj << Select Fit( Clear All );
obj << Select Fit( "Summary", Where( N Trials Folds >= 1 ) );
obj << Save Prediction Formulas( 1 );
```

**Code Explanation**:

1. Open data table;
2. Run Model Screening.
3. Specify binary outcome variable.
4. Define predictor variables.
5. Use validation column.
6. Enable Naive Bayes model.
7. Enable Partial Least Squares model.
8. Set random seed for reproducibility.
9. Perform K-Fold cross-validation.
10. Use two-way splits for K-Fold.



### Example 4
> **Summary**: Runs a comprehensive model screening process using the Model Screening platform in JMP, incorporating Naive Bayes and Partial Least Squares methods, K-Fold cross-validation, and two-way splits for enhanced predictive modeling.

<!-- Keywords: #JMP, #ModelScreening, #NaiveBayes, #PartialLeastSquares, #KFoldCrossValidation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Model Screening(
	Y( :Y Ordinal ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Naive Bayes( 1 ),
	Partial Least Squares( 1 ),
	Set Random Seed( 24680 ),
	K Fold Crossvalidation( 1 ),
	Use Two Way Splits for K Fold( 1 )
);
rpt = obj << report;
b method = {"Bootstrap Forest", "Decision Tree", "Fit Stepwise", "Generalized Regression Lasso", "K Nearest Neighbors", "Naive Bayes",
"Neural Boosted", "Ordinal Logistic", "Support Vector Machines"};
obj << Select Fit( Clear All );
obj << Select Fit( "Summary", Where( N Trials Folds >= 1 ) );
Log Capture( obj << Save Prediction Formulas( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Launch Model Screening platform.
3. Set response variable to Y Ordinal.
4. Specify predictor variables.
5. Use Validation column for validation.
6. Enable Naive Bayes method.
7. Enable Partial Least Squares method.
8. Set random seed to 24680.
9. Perform K-Fold cross-validation.
10. Use two-way splits for K-Fold.
11. Generate model report.
12. Define best modeling methods.
13. Clear previous selections.
14. Select models with at least 1 trial fold.
15. Capture log output.
16. Save prediction formulas.



### Example 5
> **Summary**: Model screening and cross-validation for a data table, generating a report with summary statistics across folds.

<!-- Keywords: #JMPScriptingLanguage, #ModelScreening, #Cross-Validation, #DataAnalysis, #MachineLearning -->

**Code**:
```jsl
Open("data_table.jmp");
obj1 = Model Screening(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	K Fold Crossvalidation( 1 ),
	Nested Crossvalidation( 1 ),
	K for Nested( 3 ),
	L for Nested( 2 ),
	Repeated K Fold( 2 ), 
);
rpt1 = obj1 << report;
nfolds = rpt1["Summary across the folds"][Number Col Box( "N Trials Folds" )] << get as matrix;
s1 = Try( dt:Hidden Validation << get hidden, 0 );
obj1 << Plot Actual by Predicted( 1 );
```

**Code Explanation**:

1. Open data table;
2. Perform model screening.
3. Set response variable Y.
4. Include multiple predictor variables.
5. Enable K Fold Crossvalidation.
6. Enable Nested Crossvalidation.
7. Set K for Nested.
8. Set L for Nested.
9. Enable Repeated K Fold.
10. Retrieve summary report.
11. Extract number of trials.
12. Check for hidden validation.
13. Plot actual vs. predicted.



### Example 6
> **Summary**: Model screening by opening a data table, setting response and predictor variables, and generating a report with random seed control.

<!-- Keywords: #ModelScreening, #DataTable, #RandomSeed, #ReportGeneration, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Model Screening( Y( :sex ), X( :height ), Set Random Seed( 2374 ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Launch Model Screening platform.
3. Set response variable to "sex".
4. Set predictor variable to "height".
5. Set random seed to 2374.
6. Generate model screening report.



### Example 7
> **Summary**: Model screening by opening a data table, specifying response and predictor variables, and generating a report with titles from outline boxes.

<!-- Keywords: #JMPScriptingLanguage, #ModelScreening, #DataTable, #ReportGeneration, #Validation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Model Screening( Y( :Y, :Y Binary ), X( :Age, :Gender, BMI ), Validation( :Validation ), );
rpt = obj << report;
rpt title1 = rpt[1][Outline Box( 1 )] << get title;
rpt title2 = rpt[2][Outline Box( 1 )] << get title;
```

**Code Explanation**:

1. Open data table;
2. Perform model screening.
3. Specify response variables.
4. Specify predictor variables.
5. Use validation column.
6. Retrieve report object.
7. Get first outline box title.
8. Get second outline box title.



### Example 8
> **Summary**: Runs a Model Screening process to identify the most relevant predictors for a binary response variable, utilizing Naive Bayes and Partial Least Squares methods with random seed set to 24680.

<!-- Keywords: #ModelScreening, #NaiveBayes, #PartialLeastSquares, #RandomSeed, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Model Screening(
	Y( :Y Binary ),
	X( :Age, :Gender, BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Naive Bayes( 1 ),
	Partial Least Squares( 1 ),
	Set Random Seed( 24680 ),
	Profiler( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Launch Model Screening.
3. Set Y variable to binary.
4. Specify X variables.
5. Use validation column.
6. Enable Naive Bayes method.
7. Enable Partial Least Squares method.
8. Set random seed to 24680.
9. Enable Profiler option.
10. Generate report.



### Example 9
> **Summary**: Performs a model screening process to identify the most relevant predictors for a response variable, utilizing Naive Bayes and Partial Least Squares methods, and generates a report.

<!-- Keywords: #ModelScreening, #NaiveBayes, #PartialLeastSquares, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Model Screening(
	Y( :Y Ordinal ),
	X( :Age, :Gender, BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Naive Bayes( 1 ),
	Partial Least Squares( 1 ),
	Set Random Seed( 24680 ),
	Profiler( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Launch Model Screening platform.
3. Set response variable.
4. Specify predictor variables.
5. Enable validation column.
6. Include Naive Bayes method.
7. Include Partial Least Squares method.
8. Set random seed for reproducibility.
9. Enable Profiler option.
10. Generate model report.



### Example 10
> **Summary**: Runs a Model Screening process to identify the most important predictor variables for a Naive Bayes and Partial Least Squares model, utilizing K-Fold Crossvalidation with a random seed for reproducibility.

<!-- Keywords: #ModelScreening, #NaiveBayes, #PartialLeastSquares, #KFoldCrossvalidation, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Model Screening(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Naive Bayes( 1 ),
	Partial Least Squares( 1 ),
	Set Random Seed( 24680 ),
	K Fold Crossvalidation( 1 ), 
);
obj << Profiler( 1 );
```

**Code Explanation**:

1. Open data table;
2. Initiate Model Screening.
3. Set response variable Y.
4. Define predictor variables.
5. Specify validation method.
6. Enable Naive Bayes model.
7. Enable Partial Least Squares model.
8. Set random seed for reproducibility.
9. Use K-Fold Crossvalidation.
10. Launch Profiler.



### Example 11
> **Summary**: Performs a Model Screening analysis to evaluate multiple machine learning models for predicting Y Binary, utilizing various algorithms and validation techniques.

<!-- Keywords: #ModelScreening, #MachineLearning, #JMPScriptingLanguage, #PredictiveAnalytics, #DataScience -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Model Screening(
	Y( :Y Binary ),
	X( :Age, :Gender, BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Naive Bayes( 1 ),
	Set Random Seed( 24680 )
);
rpt = obj << report;
(rpt["Details"]["Partition for Y Binary"] << get scriptable object) << Save Prediction Formula( 1 );
(rpt["Details"]["Bootstrap Forest for Y Binary"] << get scriptable object) << Save Prediction Formula( 1 );
(rpt["Details"]["Boosted Tree for Y Binary"] << get scriptable object) << Save Prediction Formula( 1 );
(rpt["Details"]["K Nearest Neighbors"]["Y Binary"] << get scriptable object) << Save Prediction Formula( 6 );
(rpt["Details"]["Naive Bayes"] << get scriptable object) << Save Probability Formula( 1 );
(rpt["Details"]["Neural"] << get scriptable object) << (Fit[1] << Save Formulas( 1 ));
(rpt["Details"]["Support Vector Machine"] << get scriptable object) << (Fit[1] << Save Probability Formula( 1 ));
(rpt["Details"]["Nominal Logistic Fit for Y Binary"] << get scriptable object) << Save Probability Formula( 1 );
(rpt["Details"]["Generalized Regression for Y Binary = High"] << get scriptable object) << (Fit[1] << Save Prediction Formula( 1 ));
b pred = (dt << get as matrix)[0, 13 :: 72];
obj << Select Fit( "Validation", Where( N > 1 ) );
obj << Save Prediction Formulas( 1 );
pred = (dt << get as matrix)[0, 73 :: 132];
```

**Code Explanation**:

1. Open data table;
2. Run Model Screening analysis.
3. Set response variable.
4. Define predictor variables.
5. Use validation column.
6. Apply Naive Bayes model.
7. Set random seed.
8. Extract report object.
9. Save prediction formulas for multiple models.
10. Save probability formula for Naive Bayes.
11. Save neural network formulas.
12. Save SVM probability formula.
13. Save logistic fit probability formula.
14. Save generalized regression prediction formula.
15. Extract baseline predictions.
16. Select fits based on validation.
17. Save all prediction formulas.
18. Extract final predictions.



### Example 12
> **Summary**: Performs a model screening process to evaluate the performance of various machine learning algorithms on an ordinal response variable, utilizing data from a JMP data table and generating reports for each algorithm.

<!-- Keywords: #ModelScreening, #MachineLearning, #OrdinalResponse, #JMPScriptingLanguage, #DataScience -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Model Screening(
	Y( :Y Ordinal ),
	X( :Age, :Gender, BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Naive Bayes( 1 ),
	Partial Least Squares( 1 ),
	Set Random Seed( 24680 ),
	Profiler( 1 )
);
rpt = obj << report;
(rpt["Details"]["Partition for Y Ordinal"] << get scriptable object) << Save Prediction Formula( 1 );
(rpt["Details"]["Bootstrap Forest for Y Ordinal"] << get scriptable object) << Save Prediction Formula( 1 );
(rpt["Details"]["K Nearest Neighbors"]["Y Ordinal"] << get scriptable object) << Save Prediction Formula( 10 );
(rpt["Details"]["Naive Bayes"] << get scriptable object) << Save Probability Formula( 1 );
(rpt["Details"]["Neural"] << get scriptable object) << (Fit[1] << Save Formulas( 1 ));
(rpt["Details"]["Ordinal Logistic Fit for Y Ordinal"] << get scriptable object) << Save Probability Formula( 1 );
(rpt["Details"]["Generalized Regression for Y Ordinal"] << get scriptable object) << (Fit[1] << Save Prediction Formula( 1 ));
b pred = (dt << get as matrix)[0, 13 :: 76];
obj << Select Fit( "Validation", Where( N > 1 ) );
Log Capture( obj << Save Prediction Formulas( 1 ) );
pred = (dt << get as matrix)[0, 77 :: 140];
```

**Code Explanation**:

1. Open data table;
2. Launch Model Screening.
3. Set Y variable.
4. Specify X variables.
5. Configure validation method.
6. Enable Naive Bayes model.
7. Enable Partial Least Squares model.
8. Set random seed.
9. Enable Profiler.
10. Retrieve report object.



### Example 13
> **Summary**: Runs a Model Screening process to select the best-fit model for predicting continuous outcomes, utilizing Naive Bayes and Partial Least Squares methods with K-Fold cross-validation.

<!-- Keywords: #ModelScreening, #NaiveBayes, #PartialLeastSquares, #KFoldCrossValidation, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Model Screening(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Naive Bayes( 1 ),
	Partial Least Squares( 1 ),
	Set Random Seed( 24680 ),
	K Fold Crossvalidation( 1 ), 
);
obj << Select Fit( "Summary", Where( Sum Freq > 1 ) );
obj << Save Prediction Formulas( 1 );
```

**Code Explanation**:

1. Open data table;
2. Run Model Screening.
3. Set response variable.
4. Define predictor variables.
5. Use validation column.
6. Enable Naive Bayes method.
7. Enable Partial Least Squares method.
8. Set random seed.
9. Perform K-Fold cross-validation.
10. Save prediction formulas.



### Example 14
> **Summary**: Performs a Model Screening analysis to identify the best-fitting models for predicting Y, using multiple predictor variables and K-Fold Crossvalidation with two-way splits.

<!-- Keywords: #ModelScreening, #KFoldCrossvalidation, #NaiveBayes, #PartialLeastSquares, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Model Screening(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	By( :Gender ),
	Naive Bayes( 1 ),
	Partial Least Squares( 1 ),
	Set Random Seed( 24680 ),
	K Fold Crossvalidation( 1 ), 
);
obj << Select Fit( "Summary", Where( Sum Freq > 1 ) );
Log Capture( obj << Save Prediction Formulas( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Run Model Screening analysis.
3. Set response variable as Y.
4. Include multiple predictor variables.
5. Use Validation column.
6. Group by Gender.
7. Enable Naive Bayes method.
8. Enable Partial Least Squares method.
9. Set random seed for reproducibility.
10. Perform K-Fold Crossvalidation.
11. Select models with summary fit.
12. Save prediction formulas to log.



## Model Screening using Set Modeling Type
### Example 1
> **Summary**: Performs a model screening process to identify the best-fitting models for predicting Y Ordinal, utilizing Naive Bayes and Partial Least Squares algorithms with K Fold Crossvalidation.

<!-- Keywords: #JMPScriptingLanguage, #ModelScreening, #NaiveBayes, #PartialLeastSquares, #KFoldCrossvalidation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Y Ordinal << Set Modeling Type( "Nominal" );
obj = Model Screening(
	Y( :Y Ordinal ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Naive Bayes( 1 ),
	Partial Least Squares( 1 ),
	Set Random Seed( 24680 ),
	K Fold Crossvalidation( 1 ),
	Use Two Way Splits for K Fold( 1 )
);
rpt = obj << report;
b method = {"Bootstrap Forest", "Decision Tree", "Generalized Regression Lasso", "K Nearest Neighbors", "Naive Bayes", "Neural Boosted",
"Nominal Logistic", "Support Vector Machines"};
obj << Select Fit( Clear All );
obj << Select Fit( "Summary", Where( N Trials Folds >= 1 ) );
Log Capture( obj << Save Prediction Formulas( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Set Y Ordinal as Nominal.
3. Perform Model Screening.
4. Specify Y and X variables.
5. Use Validation column.
6. Include Naive Bayes model.
7. Include Partial Least Squares model.
8. Set random seed for reproducibility.
9. Enable K Fold Crossvalidation.
10. Use Two Way Splits for K Fold.



### Example 2
> **Summary**: Performs a model screening process to identify the most relevant predictors for a nominal response variable, using Naive Bayes and Partial Least Squares methods, with Profiler report generation.

<!-- Keywords: #ModelScreening, #NaiveBayes, #PartialLeastSquares, #ProfilerReport, #NominalResponse -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Y Ordinal << Set Modeling Type( "Nominal" );
obj = dt << Model Screening(
	Y( :Y Ordinal ),
	X( :Age, :Gender, BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Naive Bayes( 1 ),
	Partial Least Squares( 1 ),
	Set Random Seed( 24680 ),
	Profiler( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Set Y Ordinal to Nominal.
3. Launch Model Screening platform.
4. Specify Y as Y Ordinal.
5. Add multiple predictors.
6. Use Validation column.
7. Enable Naive Bayes method.
8. Enable Partial Least Squares method.
9. Set random seed to 24680.
10. Generate Profiler report.



### Example 3
> **Summary**: Process of performing model screening and generating prediction formulas for a nominal response variable using Naive Bayes, Neural, Support Vector Machine, Nominal Logistic Fit, and Generalized Regression models.

<!-- Keywords: #JSL, #ModelScreening, #NaiveBayes, #NeuralNetworks, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Y Ordinal << Set Modeling Type( "Nominal" );
obj = dt << Model Screening(
	Y( :Y Ordinal ),
	X( :Age, :Gender, BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Naive Bayes( 1 ),
	Set Random Seed( 24680 )
);
rpt = obj << report;
Log Capture(
	(rpt["Details"]["Partition for Y Ordinal"] << get scriptable object) << Save Prediction Formula( 1 );
	(rpt["Details"]["Bootstrap Forest for Y Ordinal"] << get scriptable object) << Save Prediction Formula( 1 );
	(rpt["Details"]["K Nearest Neighbors"]["Y Ordinal"] << get scriptable object) << Save Prediction Formula( 6 );
	(rpt["Details"]["Naive Bayes"] << get scriptable object) << Save Probability Formula( 1 );
	(rpt["Details"]["Neural"] << get scriptable object) << (Fit[1] << Save Formulas( 1 ));
	(rpt["Details"]["Support Vector Machine"] << get scriptable object) << (Fit[1] << Save Probability Formula( 1 ));
	(rpt["Details"]["Nominal Logistic Fit for Y Ordinal"] << get scriptable object) << Save Probability Formula( 1 );
	(rpt["Details"]["Generalized Regression for Y Ordinal"] << get scriptable object) << (Fit[1] << Save Prediction Formula( 1 ));
	b pred = (dt << get as matrix)[0, 13 :: 72];
	obj << Select Fit( "Validation", Where( N > 1 ) );
	obj << Save Prediction Formulas( 1 );
	pred = (dt << get as matrix)[0, 73 :: 132];
);
```

**Code Explanation**:

1. Open data table;
2. Set Y Ordinal as Nominal.
3. Run Model Screening.
4. Specify Y and X variables.
5. Use Validation column.
6. Enable Naive Bayes model.
7. Set random seed.
8. Retrieve model report.
9. Log prediction and probability formulas.
10. Save all model formulas.



## Model Screening using If
### Example 1
> **Summary**: Model screening and cross-validation for a binary response variable, utilizing predictor variables from a data table.

<!-- Keywords: #JMPPro, #ModelScreening, #CrossValidation, #DataTable, #PredictiveAnalytics -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = Model Screening(
		Y( :Y Binary ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		K Fold Crossvalidation( 1 ), 
	);
	dt2 = obj << Save Results Table( 1 );
	Close( dt, no save );
	Close( dt2[1], no save );
	Close( dt2[2], no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Run Model Screening.
4. Set response variable.
5. Define predictor variables.
6. Perform cross-validation.
7. Save results table.
8. Close original data table.
9. Close first result table.
10. Close second result table.



### Example 2
> **Summary**: Model screening in JMP Pro by selecting rows, excluding others, and running a Model Screening process with specified variables.

<!-- Keywords: #JMPPro, #ModelScreening, #DataSelection, #LogCapture, #Scripting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	selected = dt << Select Where( :Validation == 2 );
	selected << Exclude;
	Log Capture(
		Model Screening(
			Y( :Y Binary ),
			X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
			Validation( :Validation )
		)
	);
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Select rows where Validation=2.
4. Exclude selected rows.
5. Start logging.
6. Run Model Screening.
7. Set response variable: Y Binary.
8. Set predictor variables.
9. Use Validation column.
10. Close dataset without saving.



### Example 3
> **Summary**: Executes Model Screening analysis with optional binary Y variable, and extracts report titles from outline boxes.

<!-- Keywords: #JMPScriptingLanguage, #ModelScreening, #DataAnalysis, #ReportGeneration, #ConditionalExecution -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	obj = dt << Model Screening( Y( :Y ), X( :Age, :Gender, BMI ), Validation( :Validation ), );
	rpt = obj << report;
	rpt title = rpt[Outline Box( 1 )] << get title;
	Close( dt, no save );
	dt = Open("data_table.jmp");
	obj = dt << Model Screening( Y( :Y, :Y Binary ), X( :Age, :Gender, BMI ), Validation( :Validation ), );
	rpt = obj << report;
	rpt title1 = rpt[1][Outline Box( 1 )] << get title;
	rpt title2 = rpt[2][Outline Box( 1 )] << get title;
	Close( dt, no save );
,
	dt = Open("data_table.jmp");
	Log Capture( obj = dt << Model Screening( Y( :Y ), X( :Age, :Gender, BMI ) ) );
	rpt = Current Report();
	Try();
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro version.
2. Open data table;
3. Run Model Screening analysis.
4. Extract report.
5. Get first outline box title.
6. Close dataset without saving.
7. Reopen data_table dataset
8. Run Model Screening with binary Y.
9. Extract report again.
10. Get titles from both outline boxes.
11. Close dataset without saving.
12. If not JMP Pro, open data_table dataset.
13. Run Model Screening analysis.
14. Capture log output.
15. Extract current report.
16. Attempt to close dataset without saving.



## Model Screening using New Column
### Example 1
> **Summary**: Fits a standard least squares model with multiple effects and generating a ROC curve for predictive modeling, utilizing Model Screening in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ModelScreening, #ROCcurve, #PredictiveModeling, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Y Nominal", character, nominal, formula( :Y Ordinal ) );
dt:Y Nominal << Set Property( "Target Level", "Low" );
obj = Model Screening(
	Y( :Y Nominal ),
	X( :Gender, :BMI, :BP, :Total Cholesterol ),
	Validation( :Validation ),
	Set Random Seed( 123 ),
	ROC Curve( 1 )
);
rpt = obj << report;
check1 = rpt[Outline Box( 73 )] << get title;
If( check1 == "ROC Curve",
	roc1 = rpt[Outline Box( 73 )][Table Box( 1 )] << get as matrix,
	Show( "OutlineBox index for ROC Curve needs to be updated." )
);
```

**Code Explanation**:

1. Open data table;
2. Create new column "Y Nominal".
3. Convert "Y Ordinal" to "Y Nominal".
4. Set target level to "Low".
5. Run Model Screening.
6. Specify predictors: Gender, BMI, BP, Total Cholesterol.
7. Use Validation column.
8. Set random seed to 123.
9. Generate ROC Curve.
10. Extract ROC curve data.



### Example 2
> **Summary**: Fits a standard least squares model with multiple effects and generating a ROC curve, utilizing Model Screening to analyze the relationship between Y Nominal and specified X variables.

<!-- Keywords: #JMPScriptingLanguage, #ModelScreening, #ROCCurve, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Y Nominal", character, nominal, formula( :Y Ordinal ) );
dt:Y Nominal << Set Property( "Target Level", "Medium" );
obj = Model Screening(
	Y( :Y Nominal ),
	X( :Gender, :BMI, :BP, :Total Cholesterol ),
	Validation( :Validation ),
	Set Random Seed( 123 ),
	ROC Curve( 1 )
);
rpt = obj << report;
check1 = rpt[Outline Box( 73 )] << get title;
If( check1 == "ROC Curve",
	roc2 = rpt[Outline Box( 73 )][Table Box( 1 )] << get as matrix,
	Show( "OutlineBox index for ROC Curve needs to be updated." )
);
```

**Code Explanation**:

1. Open data table;
2. Create new column "Y Nominal".
3. Convert "Y Ordinal" to "Y Nominal".
4. Set target level to "Medium".
5. Run Model Screening.
6. Include specified variables.
7. Use validation column.
8. Set random seed to 123.
9. Generate ROC curve.
10. Extract ROC curve data.



### Example 3
> **Summary**: Fits a standard least squares model with multiple effects and generating a ROC Curve report, utilizing Model Screening analysis to identify the best predictors.

<!-- Keywords: #JSLScriptingLanguage, #ModelScreening, #ROCCurve, #LeastSquaresRegression, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Y Nominal", character, nominal, formula( :Y Ordinal ) );
dt:Y Nominal << Set Property( "Target Level", "High" );
obj = Model Screening(
	Y( :Y Nominal ),
	X( :Gender, :BMI, :BP, :Total Cholesterol ),
	Validation( :Validation ),
	Set Random Seed( 123 ),
	ROC Curve( 1 )
);
rpt = obj << report;
check1 = rpt[Outline Box( 73 )] << get title;
If( check1 == "ROC Curve",
	roc3 = rpt[Outline Box( 73 )][Table Box( 1 )] << get as matrix,
	Show( "OutlineBox index for ROC Curve needs to be updated." )
);
```

**Code Explanation**:

1. Open data table;
2. Create new nominal column.
3. Set target level to "High".
4. Run Model Screening analysis.
5. Specify response and predictors.
6. Use validation column.
7. Set random seed for reproducibility.
8. Enable ROC Curve option.
9. Retrieve model screening report.
10. Check for ROC Curve outline box.



### Example 4
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot for data analysis, utilizing Model Screening and specifying response variable Y Nominal Num.

<!-- Keywords: #JMPScriptingLanguage, #ModelScreening, #PartialLeastSquares, #NaiveBayes, #ProfilerPlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Y Nominal Num", numeric, nominal, formula( If( :Y > 200, 10, :Y > 150 & :Y <= 200, 50, :Y <= 150, 100 ) ) );
obj = dt << Model Screening(
	Y( :Y Nominal Num ),
	X( :Age, :Gender, BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Naive Bayes( 1 ),
	Partial Least Squares( 1 ),
	Set Random Seed( 24680 ),
	Profiler( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create new column "Y Nominal Num".
3. Define formula for "Y Nominal Num".
4. Initiate Model Screening.
5. Specify response variable "Y Nominal Num".
6. Include multiple predictor variables.
7. Use validation column.
8. Enable Naive Bayes method.
9. Enable Partial Least Squares method.
10. Set random seed to 24680.
11. Generate Profiler report.



### Example 5
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot using JMP's Model Screening platform.

<!-- Keywords: #JMPModelScreening, #LeastSquaresRegression, #ProfilerPlot, #NaiveBayes, #PartialLeastSquares -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Y Ordinal Num", numeric, ordinal, formula( If( :Y > 200, 10, :Y > 150 & :Y <= 200, 50, :Y <= 150, 100 ) ) );
obj = dt << Model Screening(
	Y( :Y Ordinal Num ),
	X( :Age, :Gender, BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Naive Bayes( 1 ),
	Partial Least Squares( 1 ),
	Set Random Seed( 24680 ),
	Profiler( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create new column "Y Ordinal Num".
3. Define ordinal formula for new column.
4. Launch Model Screening platform.
5. Specify "Y Ordinal Num" as response.
6. Include multiple predictors.
7. Use validation method.
8. Enable Naive Bayes modeling.
9. Enable Partial Least Squares modeling.
10. Set random seed for reproducibility.



### Example 6
> **Summary**: Fits multiple models to a data table, including Naive Bayes, Bootstrap Forest, Boosted Tree, K Nearest Neighbors, and Generalized Regression, and generates reports with prediction formulas.

<!-- Keywords: #JMPScriptingLanguage, #ModelScreening, #NaiveBayes, #BootstrapForest, #BoostedTree -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Y Binary Num", numeric, nominal, formula( If( :Y > 200, 10000, :Y <= 200, 10 ) ) );
obj = dt << Model Screening(
	Y( :Y Binary Num ),
	X( :Age, :Gender, BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Naive Bayes( 1 ),
	Set Random Seed( 24680 )
);
rpt = obj << report;
(rpt["Details"]["Partition for Y Binary Num"] << get scriptable object) << Save Prediction Formula( 1 );
(rpt["Details"]["Bootstrap Forest for Y Binary Num"] << get scriptable object) << Save Prediction Formula( 1 );
(rpt["Details"]["Boosted Tree for Y Binary Num"] << get scriptable object) << Save Prediction Formula( 1 );
(rpt["Details"]["K Nearest Neighbors"]["Y Binary Num"] << get scriptable object) << Save Prediction Formula( 6 );
(rpt["Details"]["Naive Bayes"] << get scriptable object) << Save Probability Formula( 1 );
(rpt["Details"]["Neural"] << get scriptable object) << (Fit[1] << Save Formulas( 1 ));
(rpt["Details"]["Support Vector Machine"] << get scriptable object) << (Fit[1] << Save Probability Formula( 1 ));
(rpt["Details"]["Nominal Logistic Fit for Y Binary Num"] << get scriptable object) << Save Probability Formula( 1 );
(rpt["Details"]["Generalized Regression for Y Binary Num = 10000"] << get scriptable object) << (Fit[1] << Save Prediction Formula( 1 ));
b pred = (dt << get as matrix)[0, 14 :: 83];
obj << Select Fit( "Validation", Where( N > 1 ) );
obj << Save Prediction Formulas( 1 );
pred = (dt << get as matrix)[0, 84 :: 153];
```

**Code Explanation**:

1. Open data table;
2. Create new binary column.
3. Run Model Screening.
4. Set model parameters.
5. Generate report.
6. Save Naive Bayes prediction formula.
7. Save Bootstrap Forest prediction formula.
8. Save Boosted Tree prediction formula.
9. Save K Nearest Neighbors prediction formula.
10. Save Naive Bayes probability formula.
11. Save Neural network formulas.
12. Save SVM probability formula.
13. Save Nominal Logistic Fit probability formula.
14. Save Generalized Regression prediction formula.
15. Extract base predictions.
16. Select validation fits.
17. Save overall prediction formulas.
18. Extract final predictions.



### Example 7
> **Summary**: Fits a standard least squares model with multiple effects and generating a profiler plot, utilizing Model Screening and Naive Bayes algorithms.

<!-- Keywords: #JSLScriptingLanguage, #ModelScreening, #NaiveBayes, #PredictiveModeling, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Y Nominal Num", numeric, nominal, formula( If( :Y > 200, 100, :Y > 150 & :Y <= 200, 50, :Y <= 150, 10 ) ) );
obj = dt << Model Screening(
	Y( :Y Nominal Num ),
	X( :Age, :Gender, BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Naive Bayes( 1 ),
	Set Random Seed( 24680 )
);
rpt = obj << report;
Log Capture(
	(rpt["Details"]["Partition for Y Nominal Num"] << get scriptable object) << Save Prediction Formula( 1 );
	(rpt["Details"]["Bootstrap Forest for Y Nominal Num"] << get scriptable object) << Save Prediction Formula( 1 );
	(rpt["Details"]["K Nearest Neighbors"]["Y Nominal Num"] << get scriptable object) << Save Prediction Formula( 10 );
	(rpt["Details"]["Naive Bayes"] << get scriptable object) << Save Probability Formula( 1 );
	(rpt["Details"]["Neural"] << get scriptable object) << (Fit[1] << Save Formulas( 1 ));
	(rpt["Details"]["Support Vector Machine"] << get scriptable object) << (Fit[1] << Save Probability Formula( 1 ));
	(rpt["Details"]["Nominal Logistic Fit for Y Nominal Num"] << get scriptable object) << Save Probability Formula( 1 );
	(rpt["Details"]["Generalized Regression for Y Nominal Num"] << get scriptable object) << (Fit[1] << Save Prediction Formula( 1 ));
	b pred = (dt << get as matrix)[0, 14 :: 80];
	obj << Select Fit( "Validation", Where( N > 1 ) );
	obj << Save Prediction Formulas( 1 );
	pred = (dt << get as matrix)[0, 81 :: 147];
);
```

**Code Explanation**:

1. Open data table;
2. Create new column "Y Nominal Num".
3. Run Model Screening.
4. Specify Y and X variables.
5. Use Validation column.
6. Enable Naive Bayes.
7. Set random seed.
8. Get model report.
9. Save prediction formulas.
10. Save probability formulas.



### Example 8
> **Summary**: Fits a standard least squares model with multiple effects and generating a profiler plot, utilizing Model Screening and various algorithms to analyze data.

<!-- Keywords: #JSLScriptingLanguage, #ModelScreening, #LeastSquaresRegression, #ProfilerPlot, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Y Ordinal Num", numeric, ordinal, formula( If( :Y > 200, 100, :Y > 150 & :Y <= 200, 50, :Y <= 150, 10 ) ) );
obj = dt << Model Screening(
	Y( :Y Ordinal Num ),
	X( :Age, :Gender, BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Naive Bayes( 1 ),
	Partial Least Squares( 1 ),
	Set Random Seed( 24680 ),
	Profiler( 1 )
);
rpt = obj << report;
(rpt["Details"]["Partition for Y Ordinal Num"] << get scriptable object) << Save Prediction Formula( 1 );
(rpt["Details"]["Bootstrap Forest for Y Ordinal Num"] << get scriptable object) << Save Prediction Formula( 1 );
(rpt["Details"]["K Nearest Neighbors"]["Y Ordinal Num"] << get scriptable object) << Save Prediction Formula( 10 );
(rpt["Details"]["Naive Bayes"] << get scriptable object) << Save Probability Formula( 1 );
(rpt["Details"]["Neural"] << get scriptable object) << (Fit[1] << Save Formulas( 1 ));
(rpt["Details"]["Ordinal Logistic Fit for Y Ordinal Num"] << get scriptable object) << Save Probability Formula( 1 );
(rpt["Details"]["Generalized Regression for Y Ordinal Num"] << get scriptable object) << (Fit[1] << Save Prediction Formula( 1 ));
b pred = (dt << get as matrix)[0, 14 :: 84];
obj << Select Fit( "Validation", Where( N > 1 ) );
Log Capture( obj << Save Prediction Formulas( 1 ) );
pred = (dt << get as matrix)[0, 85 :: 155];
```

**Code Explanation**:

1. Open data table;
2. Create new column "Y Ordinal Num".
3. Run Model Screening.
4. Specify response and predictors.
5. Set validation method.
6. Enable Naive Bayes, PLS.
7. Set random seed.
8. Enable Profiler.
9. Get model report.
10. Save prediction formulas for various models.
11. Extract baseline predictions.
12. Select fits based on validation.
13. Capture log for saving prediction formulas.
14. Extract final predictions.



