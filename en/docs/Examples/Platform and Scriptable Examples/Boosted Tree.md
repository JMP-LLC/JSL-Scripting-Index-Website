# Boosted Tree

## Boosted Tree using Random Reset
> **Summary**: Opens a data table, sets a random seed, and defines a boosted tree model with specified response and predictor variables, validation portion, method, splits per tree, number of layers, learning rate, and executes the model.

<!-- Keywords: #JMPScriptingLanguage, #BoostedTree, #DataTable, #MachineLearning, #PredictiveModeling -->

**Code**:
```jsl
// Boosted Tree of Banding?
// Open data table
dt = Open("data_table.jmp");
// Boosted Tree of Banding?
Random Reset( 123 );
Boosted Tree(
	Y( :Banding? ),
	X(
		:grain screened,
		:proof on ctd ink, :blade mfg,
		:paper type, :ink type,
		:direct steam, :solvent type,
		:type on cylinder, :press type,
		:unit number, :cylinder size,
		:paper mill location,
		:plating tank, :proof cut,
		:viscosity, :caliper,
		:ink temperature, :humidity,
		:roughness, :blade pressure,
		:varnish pct, :press speed,
		:ink pct, :solvent pct,
		:ESA Voltage, :ESA Amperage, :wax,
		:hardener, :roller durometer,
		:current density,
		:anode space ratio,
		:chrome content
	),
	Validation Portion( 0.2 ),
	Method( "Boosted Tree" ),
	Splits per Tree( 3 ),
	Number of Layers( 41 ),
	Learning Rate( 0.1 ),
	Go
);
```

**Code Explanation**:

1. Open data table.
2. Set random seed.
3. Define boosted tree model.
4. Specify response variable.
5. List predictor variables.
6. Set validation portion.
7. Choose boosting method.
8. Define splits per tree.
9. Set number of layers.
10. Specify learning rate.
11. Execute model.



### Example 1
> **Summary**: Fits a boosted tree model to predict percent body fat using multiple predictor variables, with validation and specified parameters for splits per tree, number of layers, and learning rate.

<!-- Keywords: #BoostedTree, #PredictiveModeling, #JMPScriptingLanguage, #DataAnalysis, #MachineLearning -->

**Code**:
```jsl
// Boosted Tree
// Open data table
dt = Open("data_table.jmp");
// Boosted Tree
Boosted Tree(
	Y( :Percent body fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n,
		:"Height (inches)"n,
		:"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n,
		:"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n,
		:"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n,
		:
		"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n,
		:"Wrist circumference (cm)"n
	),
	Validation( :Validation ),
	Method( "Boosted Tree" ),
	Splits per Tree( 3 ),
	Number of Layers( 30 ),
	Learning Rate( 0.1 ),
	Go
);
```

**Code Explanation**:

1. Open table.
2. Define model variables.
3. Specify response variable.
4. List predictor variables.
5. Set validation method.
6. Choose model type.
7. Configure splits per tree.
8. Set number of layers.
9. Define learning rate.
10. Execute analysis.



### Example 2
> **Summary**: Runs a Boosted Tree analysis to predict Y Binary, utilizing a local data filter on the Age column and generating a report with column contributions, lift curves, and overall statistics.

<!-- Keywords: #BoostedTree, #JMPScriptingLanguage, #DataFilter, #LiftCurve, #ColumnContributions -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
BoostedTree_LDF2 = dt2 << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Set Random Seed( 12345 ),
	Multithreading( 0 ),
	Method( "Boosted Tree" ),
	Column Contributions( 1 ),
	Lift Curve( 1 ),
	Splits per Tree( 4 ),
	Number of Layers( 29 ),
	Learning Rate( 0.08 ),
	Go,
	SendToReport(
		Dispatch( {}, "Specifications", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Overall Statistics", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Overall Statistics"}, "Confusion Matrix", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Lift Curve on Training Data"}, "Partition Lift Curve", FrameBox, {Background Color( 70 )} ),
		Dispatch( {"Lift Curve on Validation Data"}, "Partition Lift Curve", FrameBox, {Background Color( 70 )} )
	)
);
BoostedTree_LDF2 << Local Data Filter(
	Add Filter(
		columns( :Age ),
		Modeling Type( :Age, Nominal ),
		Where( :Age == {41, 42, 43, 44, 45, 46, 47, 48, 49} ),
		Display( :Age, N Items( 15 ), Find( Set Text( "" ) ) )
	)
);
ColumnContribs = Report( BoostedTree_LDF2 )[Outline Box( "Boosted Tree for Y Binary" )][Outline Box( "Column Contributions" )][
Table Box( 1 )] << Make Into Data Table;
vals2 = ColumnContribs << get as matrix;
text2 = (Report( BoostedTree_LDF2 ) << Parent)[Outline Box( 1 )][Text Box( 1 )] << Get Text;
```

**Code Explanation**:

1. Open data table;
2. Run Boosted Tree analysis.
3. Specify response variable.
4. Select predictor variables.
5. Use validation column.
6. Set random seed.
7. Disable multithreading.
8. Choose Boosted Tree method.
9. Enable column contributions.
10. Enable lift curve.
11. Set splits per tree.
12. Define number of layers.
13. Set learning rate.
14. Generate report.
15. Close specifications section.
16. Close overall statistics section.
17. Close confusion matrix.
18. Change lift curve background color.
19. Change validation lift curve background color.
20. Add local data filter.
21. Filter Age column.
22. Set Age as nominal.
23. Define Age filter conditions.
24. Display Age filter.
25. Extract column contributions.
26. Convert to matrix.
27. Extract model text.



### Example 3
> **Summary**: Creates and analyzes boosted tree models for body fat prediction, extracting overall statistics reports and converting them to matrices.

<!-- Keywords: #BoostedTree, #JMPScriptingLanguage, #DataAnalysis, #MachineLearning, #PredictiveModeling -->

**Code**:
```jsl
Open("data_table.jmp");
obj1 = Boosted Tree(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Learning Rate( 0.08 ),
	Go
);
rpt1 = obj1 << report;
fit1 = rpt1["Overall Statistics"][Table Box( 1 )] << get as matrix;
obj2 = obj1 << Redo analysis( 1 );
rpt2 = obj2 << report;
fit2 = rpt2["Overall Statistics"][Table Box( 1 )] << get as matrix;
obj3 = Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Learning Rate( 0.08 ),
	Go
);
rpt3 = obj3 << report;
fit3 = rpt3["Overall Statistics"][Table Box( 1 )] << get as matrix;
obj4 = obj3 << Redo analysis( 1 );
rpt4 = obj4 << report;
fit4 = rpt4["Overall Statistics"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Create first boosted tree model.
3. Extract overall statistics report.
4. Convert report to matrix.
5. Redo first analysis.
6. Extract new report.
7. Convert new report to matrix.
8. Create second boosted tree model.
9. Extract overall statistics report.
10. Convert report to matrix.



### Example 4
> **Summary**: Fits a boosted tree model to predict body fat percentage using a specified set of predictor variables and validation column, generating cumulative details and saving them in matrix format.

<!-- Keywords: #JSLScriptingLanguage, #BoostedTreeModel, #PredictiveModeling, #DataAnalysis, #MatrixOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Boosted Tree(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Go
);
rpt = obj << report;
b saved1 = rpt["Cumulative Details"][Table Box( 1 )] << get as matrix;
tmp = obj << Save Cumulative Details;
saved1 = tmp << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Create Boosted Tree model.
3. Set response variable Y.
4. Define predictor variables.
5. Use validation column.
6. Run the model.
7. Generate model report.
8. Extract cumulative details table.
9. Save cumulative details.
10. Convert to matrix format.



## Boosted Tree using Model Screening
### Example 1
> **Summary**: Runs a comprehensive model screening analysis to identify the most relevant predictors for a response variable, utilizing K-Fold cross-validation and various machine learning methods.

<!-- Keywords: #JMPScriptingLanguage, #ModelScreening, #KFoldCrossValidation, #MachineLearning, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Model Screening(
	Y( :Y ),
	X( :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	DiBPscriminant( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 0 ),
	K Fold Crossvalidation( 1 ),
	K for K Fold( 3 ),
	Set Random Seed( 123 ),
	By( :Gender ),
	Group Options( Return Group )
);
obj1 << Relaunch Analysis;
obj2 = dt << Fit Model(
	Y( :Y, :BMI ),
	Effects( :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( :Gender ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run,
	Group Options( Return Group )
);
```

**Code Explanation**:

1. Open data table;
2. Launch model screening analysis.
3. Set response variable Y.
4. Include multiple predictor variables.
5. Disable various machine learning methods.
6. Enable K-Fold cross-validation.
7. Set K to 3.
8. Set random seed to 123.
9. Group by gender.
10. Relaunch analysis.
11. Launch fit model analysis.
12. Set response variables Y and BMI.
13. Include selected effects.
14. Group by gender.
15. Use standard least squares personality.
16. Request minimal report.
17. Run the analysis.



### Example 2
> **Summary**: Model screening and fitting of a standard least squares model to predict Y using multiple predictor variables, with K-fold cross-validation and grouping by Gender.

<!-- Keywords: #JMPScriptingLanguage, #ModelScreening, #K-FoldCross-Validation, #StandardLeastSquares, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Model Screening(
	Y( :Y ),
	X( :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	DiBPscriminant( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 0 ),
	K Fold Crossvalidation( 1 ),
	K for K Fold( 3 ),
	Set Random Seed( 123 ),
	By( :Gender ),
	Group Options( Return Group )
);
obj1 << Relaunch Analysis;
obj2 = dt << Fit Model(
	Y( :Y, :BMI ),
	Effects( :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( :Gender ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run,
	Group Options( Return Group )
);
obj2 << Relaunch Analysis;
```

**Code Explanation**:

1. Open data table;
2. Perform model screening.
3. Specify response variable Y.
4. Include multiple predictor variables.
5. Disable various modeling methods.
6. Enable K-fold cross-validation.
7. Set K to 3.
8. Fix random seed to 123.
9. Group by Gender.
10. Relaunch analysis.
11. Fit standard least squares model.
12. Specify two response variables.
13. Include selected effects.
14. Group by Gender.
15. Use standard least squares personality.
16. Request minimal report.
17. Run the model.
18. Relaunch analysis.



### Example 3
> **Summary**: Performs a model screening process using the JMP Model Screening platform, configuring multiple X variables and validation for decision threshold analysis.

<!-- Keywords: #JMPModelScreening, #DecisionThresholds, #DataAnalysis, #MachineLearning, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Model Screening(
	Y( :Y Binary ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Discriminant( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 0 ),
	Decision Threshold( 1 ), 
);
rpt = obj << report;
test1 = rpt["Decision Thresholds"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Launch Model Screening platform.
3. Set Y variable as binary.
4. Include multiple X variables.
5. Enable validation.
6. Disable Decision Tree.
7. Disable Bootstrap Forest.
8. Disable Boosted Tree.
9. Disable K Nearest Neighbors.
10. Disable Neural network.
11. Disable Support Vector Machines.
12. Disable Discriminant analysis.
13. Disable Fit Least Squares.
14. Disable Fit Stepwise.
15. Disable Logistic Regression.
16. Set decision threshold to 1.
17. Retrieve report object.
18. Extract Decision Thresholds table.
19. Convert table to matrix.



### Example 4
> **Summary**: Process of running two Model Screening scripts with specified models, decision thresholds, and profit matrices to generate reports and extract decision threshold matrices.

<!-- Keywords: #ModelScreening, #DecisionThresholds, #ProfitMatrix, #JSLScripting, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
obj1 = Model Screening(
	Y( :Y Binary ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Set Random Seed( 3458 ),
	Decision Tree( 1 ),
	Bootstrap Forest( 1 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Discriminant( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 0 ),
	Decision Threshold( 1, Set Probability Threshold( 0.3 ) )
);
rpt1 = obj1 << report;
mtrx1 = rpt1["Decision Thresholds"][Table Box( 1 )] << get as matrix;
obj2 = Model Screening(
	Y( :Y Binary ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Set Random Seed( 3458 ),
	Decision Tree( 1 ),
	Bootstrap Forest( 1 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Discriminant( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 0 ),
	Specify Profit Matrix( [0 -1, -0.428571428571429 0, . .], "Low", "High", "Undecided" ),
	Show Profit( 1 ),
	Decision Threshold( 1 )
);
rpt2 = obj2 << report;
mtrx2 = rpt2["Decision Thresholds"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Run Model Screening with specified models.
3. Set random seed for reproducibility.
4. Include Decision Tree, Bootstrap Forest, Boosted Tree, Logistic Regression.
5. Exclude other models.
6. Set decision threshold probability.
7. Generate report from first model screening.
8. Extract matrix from decision thresholds.
9. Run second Model Screening with profit matrix.
10. Generate report from second model screening.
11. Extract matrix from decision thresholds.



## Boosted Tree using Set Modeling Type
> **Summary**: Runs a Boosted Tree analysis to predict BAD using 12 predictors, including LOAN, MORTDUE, VALUE, REASON, JOB, YOJ, DEROG, DELINQ, CLAGE, NINQ, CLNO, and DEBTINC.

<!-- Keywords: #BoostedTree, #PredictiveModeling, #JMPScriptingLanguage, #DataAnalysis, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:DEROG << Set Modeling Type( "nominal" );
dt:DELINQ << Set Modeling Type( "nominal" );
Boosted Tree(
	Y( :BAD ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Validation( :Validation ),
	Missing Value Order( Low( :MORTDUE, :YOJ, :NINQ, :CLNO, :DEBTINC ), High( :VALUE, :CLAGE ) ),
	Method( "Boosted Tree" ),
	Splits per Tree( 15 ),
	Number of Layers( 200 ),
	Learning Rate( 0.128 ),
	Go,
	Profiler(
		1,
		Arrange in Rows( 7 ),
		Term Value(
			LOAN( 18608, Lock( 0 ), Show( 1 ) ),
			MORTDUE( 73760, Lock( 0 ), Show( 1 ) ),
			VALUE( 101780, Lock( 0 ), Show( 1 ) ),
			REASON( "", Lock( 0 ), Show( 1 ) ),
			JOB( "", Lock( 0 ), Show( 1 ) ),
			YOJ( 8.922, Lock( 0 ), Show( 1 ) ),
			DEROG( ., Lock( 0 ), Show( 1 ) ),
			DELINQ( ., Lock( 0 ), Show( 1 ) ),
			CLAGE( 179.8, Lock( 0 ), Show( 1 ) ),
			NINQ( 1.186, Lock( 0 ), Show( 1 ) ),
			CLNO( 21.296, Lock( 0 ), Show( 1 ) ),
			DEBTINC( 33.78, Lock( 0 ), Show( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Set DEROG as nominal.
3. Set DELINQ as nominal.
4. Run Boosted Tree analysis.
5. Specify BAD as response variable.
6. Include 12 predictors.
7. Use Validation column for validation.
8. Set missing value order.
9. Configure Boosted Tree method.
10. Generate Profiler with specific settings.



## Boosted Tree using If
### Example 1
> **Summary**: Performs a Model Screening analysis in JMP Pro, filtering data and extracting summary statistics for a specific response variable.

<!-- Keywords: #JMPPro, #ModelScreening, #DataFiltering, #SummaryStatistics, #Scripting -->

**Code**:
```jsl
If( JMP Product Name() == "Pro",
	dt = Open("data_table.jmp");
	ModelScreening_LDF = dt << Model Screening(
		Y( :Y ),
		X( :Age, :Gender, :BMI ),
		Validation( :Validation ),
		Decision Tree( 0 ),
		Bootstrap Forest( 0 ),
		Boosted Tree( 0 ),
		K Nearest Neighbors( 0 ),
		Neural( 0 ),
		Support Vector Machines( 0 ),
		Discriminant( 0 ),
		Fit Stepwise( 0 ),
		Logistic Regression( 0 ),
		SendToReport( Dispatch( {"Model Screening for Y"}, "Details", OutlineBox, {Close( 0 )} ) )
	);
	ModelScreening_LDF << Local Data Filter(
		Add Filter(
			columns( :Age ),
			Modeling Type( :Age, Nominal ),
			Where( :Age == 60 ),
			Display( :Age, N Items( 15 ), Find( Set Text( "" ) ) ),
			Order By Count( :Age )
		)
	);
	SummaryOfFit = Report( ModelScreening_LDF )[Outline Box( "Model Screening for Y" )][Outline Box( "Details" )][
	Outline Box( "Response Y" )][Outline Box( "Summary of Fit" )][Table Box( 1 )] << Make Into Data Table;
	vals1 = SummaryOfFit << Get as Matrix;
	GenRegSummary = Report( ModelScreening_LDF )[Outline Box( "Model Screening for Y" )][Outline Box( "Details" )][
	Outline Box( "Generalized Regression for Y" )][Outline Box( "Normal Lasso with Validation Column" )][Outline Box( "Model Summary" )][
	Table Box( 2 )] << Make Into Data Table;
	vals2 = GenRegSummary << Get as matrix;
	text1 = (Report( ModelScreening_LDF ) << Parent)[Outline Box( 1 )][Text Box( 1 )] << Get Text;
	Close( SummaryOfFit, nosave );
	Close( GenRegSummary, nosave );
	Close( dt, nosave );
);
```

**Code Explanation**:

1. Check if JMP version is Pro.
2. Open data table;
3. Run Model Screening analysis.
4. Disable all models except Linear.
5. Close Details section in report.
6. Apply local data filter on Age.
7. Extract Summary of Fit data.
8. Convert Summary of Fit to matrix.
9. Extract Generalized Regression data.
10. Convert Generalized Regression to matrix.
11. Retrieve text from report.
12. Close Summary of Fit table.
13. Close Generalized Regression table.
14. Close original dataset.



### Example 2
> **Summary**: Fits and publishes multiple models, including Nominal Logistic, Boosted Tree, and Neural Network, in JMP Pro.

<!-- Keywords: #JMPPro, #Modeling, #DataAnalysis, #Scripting, #MachineLearning -->

**Code**:
```jsl
If( JMP Product Name() == "Pro",
	dt1 = Open("data_table.jmp");
	fd1 = Formula Depot();
	objL = dt1 << Fit Model(
		Y( :sex ),
		Effects( :height, :weight ),
		Personality( "Nominal Logistic" ),
		Run( Publish Probability Formulas )
	);
	objL << Close Window;
	fd1 << Dispatch( {"Formula Scripts", "Fit Nominal Logistic - sex"}, "", TextEditBox,
		{Set Text( "This is for testing - Fit Nominal Logistic" )}
	);
	objBT = dt1 << Boosted Tree(
		Y( :sex ),
		X( :height, :weight ),
		Splits per Tree( 2 ),
		Number of Layers( 1 ),
		Learning Rate( 0.1 ),
		Go,
		Publish Prediction Formula
	);
	objBT << Close Window;
	fd1 << Dispatch( {"Formula Scripts", "Boosted Tree - sex"}, "", TextEditBox, {Set Text( "This is for testing - Boosted Tree" )} );
	objNN = dt1 << Neural( Y( :sex ), X( :height, :weight ), Validation Method( "Holdback", 0.3333 ), Fit( NTanH( 1 ) ) );
	objNN << Fit[1] << (Publish Prediction Formula);
	objNN << Close Window;
	fd1 << Dispatch( {"Formula Scripts", "Neural/Model NTanH(1) - Save Formulas - sex"}, "", TextEditBox,
		{Set Text( "This is for testing - Neural Net" )}
	);
	rfd = fd1 << report;
	fd_script = fd1 << Get Script;
	Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
	Close( dt1, NoSave );
	fd1 << close window( 1 );
	rfd = Open( "$TEMP\fd.jrp" );
	rfd << close window( 1 );
);
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Open data table;
3. Create Formula Depot.
4. Fit Nominal Logistic model.
5. Close logistic model window.
6. Update Formula Depot script.
7. Run Boosted Tree analysis.
8. Close Boosted Tree window.
9. Update Formula Depot script.
10. Run Neural Network analysis.
11. Close Neural Network window.
12. Update Formula Depot script.
13. Save Formula Depot report.
14. Save Formula Depot script.
15. Close data table.
16. Close Formula Depot window.
17. Reopen saved Formula Depot report.
18. Close reopened Formula Depot window.



### Example 3
> **Summary**: Runs the fitting and comparison of multiple machine learning models, including neural networks, logistic regression, and boosted trees, in JMP Pro.

<!-- Keywords: #JMPPro, #MachineLearning, #NeuralNetworks, #LogisticRegression, #BoostedTrees -->

**Code**:
```jsl
If( JMP Product Name() == "Pro",
	dt1 = Open("data_table.jmp");
	fd1 = Formula Depot();
	objNN = dt1 << Neural( Y( :sex ), X( :height, :weight ), Validation Method( "Holdback", 0.3333 ), Fit( NTanH( 1 ) ) );
	objNN << Fit[1] << (Publish Prediction Formula);
	objNN << Close Window;
	objL = dt1 << Fit Model(
		Y( :sex ),
		Effects( :height, :weight ),
		Personality( "Nominal Logistic" ),
		Run( Publish Probability Formulas )
	);
	objL << Close Window;
	objBT = dt1 << Boosted Tree(
		Y( :sex ),
		X( :height, :weight ),
		Splits per Tree( 2 ),
		Number of Layers( 1 ),
		Learning Rate( 0.1 ),
		Go,
		Publish Prediction Formula
	);
	objBT << Close Window;
	fd1 << Profiler( Formulas( "Neural/Model NTanH(1) - Save Formulas - sex", "Fit Nominal Logistic - sex", "Boosted Tree - sex" ) );
	fd1 << Model Comparison(
		Formulas( "Neural/Model NTanH(1) - Save Formulas - sex", "Fit Nominal Logistic - sex", "Boosted Tree - sex" )
	);
	rfd = fd1 << report;
	Close( dt1, no save );
	fd1 << close window( 1 );
);
```

**Code Explanation**:

1. Check if JMP version is Pro.
2. Open data table;
3. Create Formula Depot.
4. Fit neural network model.
5. Publish prediction formula for neural network.
6. Close neural network window.
7. Fit logistic regression model.
8. Publish probability formulas for logistic regression.
9. Close logistic regression window.
10. Fit boosted tree model.
11. Publish prediction formula for boosted tree.
12. Close boosted tree window.
13. Add models to profiler.
14. Compare models.
15. Get report from Formula Depot.
16. Close dataset without saving.
17. Close Formula Depot window.



### Example 4
> **Summary**: Process of modeling and predicting readiness using JMP Pro, enabling users to screen models, fit generalized regression models with ordinal logistic distribution, and validate results using AICc.

<!-- Keywords: #JMPPro, #ModelScreening, #GeneralizedRegression, #OrdinalLogistic, #AICc -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	dt:ready << Modeling Type( "Ordinal" );
	obj1 = dt << Model Screening(
		Y( :ready ),
		X( :heat, :soak, :count ),
		Decision Tree( 0 ),
		Bootstrap Forest( 0 ),
		Boosted Tree( 0 ),
		K Nearest Neighbors( 0 ),
		Neural( 0 ),
		Support Vector Machines( 0 ),
		Discriminant( 0 ),
		Fit Least Squares( 0 ),
		Fit Stepwise( 0 ),
		Logistic Regression( 0 )
	);
	obj2 = dt << Fit Model(
		Y( :ready ),
		Effects( :heat, :soak, :count ),
		Personality( "Generalized Regression" ),
		Generalized Distribution( "Ordinal Logistic" ),
		Run( Fit( Estimation Method( Lasso ), Validation Method( AICc ) ) ),
		SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) )
	);
	rpt1 = obj1 << report;
	rpt2 = obj2 << report;
	test1 = rpt1["Training"][Table Box( 1 )] << get as matrix;
	test2 = rpt2["Model Summary"][Table Box( 2 )] << get as matrix;
	rpt1["Training"][Table Box( 1 )] << Set Selected Rows( [1] );
	obj1 << Save Prediction Formulas;
	prob1 = (dt:"Prob[Not Ready]"n << get values) || (dt:"Prob[Ready]"n << get values);
	obj2 << (Fit[1] << Save Prediction Formula);
	prob2 = (dt:"Prob[Not Ready] 2"n << get values) || (dt:"Prob[Ready] 2"n << get values);
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro.
2. Open data table;
3. Set "ready" as Ordinal.
4. Run Model Screening.
5. Disable multiple models.
6. Run Fit Model.
7. Use Generalized Regression.
8. Specify Ordinal Logistic distribution.
9. Use Lasso estimation.
10. Validate using AICc.



### Example 5
> **Summary**: Runs data analysis and modeling tasks, including boosted tree and bootstrap forest fitting, cumulative details reporting, and formula publishing.

<!-- Keywords: #JMPScriptingLanguage, #DataAnalysis, #MachineLearning, #PredictiveModeling, #FormulaPublishing -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	obj = dt << Boosted Tree( Y( :sex ), X( :height, :weight ), Method( "Boosted Tree" ), Go );
	obj << Profiler( 1, Append Settings to Table( 1 ) );
	fd = Formula Depot();
	pred1 = obj << Publish Prediction Formula;
	fd << Profiler( Formulas( pred1 ) );
	(Report( fd )["Prediction Profiler"] << get scriptable object) << Set to Data in Row( 41 );
	obj << Save Prediction Formula( 1 );
	probs = ((dt:"Prob(sex==M)"n << get values) || (dt:"Prob(sex==F)"n << get values))[41, 0];
	Close( dt, no save );
	fd << close window( 1 );
);
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	obj = dt << Bootstrap Forest(
		Y( :Y ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Validation( :Validation ),
		Go
	);
	rpt = obj << report;
	b saved1 = rpt["Cumulative Details"][Table Box( 1 )] << get as matrix;
	tmp = obj << Save Cumulative Details;
	saved1 = tmp << get as matrix;
	Close( tmp, no save );
	Close( dt, no save );
	dt = Open("data_table.jmp");
	obj = dt << Boosted Tree(
		Y( :Y ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Validation( :Validation ),
		Go
	);
	rpt = obj << report;
	b saved1 = rpt["Cumulative Details"][Table Box( 1 )] << get as matrix;
	tmp = obj << Save Cumulative Details;
	saved1 = tmp << get as matrix;
	Close( tmp, no save );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table;
3. Fit Boosted Tree model on sex using height and weight.
4. Create profiler for the model.
5. Access Formula Depot.
6. Publish prediction formula.
7. Add formula to profiler.
8. Set profiler to data row 41.
9. Save prediction formula to dataset.
10. Extract probabilities for row 41.
11. Close "data_table.jmp" without saving.
12. Close Formula Depot window.
13. Check if JMP Pro is installed.
14. Open data table;
15. Fit Bootstrap Forest model on Y using specified variables.
16. Retrieve cumulative details report.
17. Save cumulative details to matrix.
18. Close temporary dataset without saving.
19. Close "Diabetes.jmp" without saving.
20. Reopen data_table dataset
21. Fit Boosted Tree model on Y using specified variables.
22. Retrieve cumulative details report.
23. Save cumulative details to matrix.
24. Close temporary dataset without saving.
25. Close "Diabetes.jmp" without saving.



### Example 6
> **Summary**: Performs a Model Screening analysis in JMP Pro, specifying the response variable and predictor variables, and generating a report with decision thresholds.

<!-- Keywords: #JMPPro, #ModelScreening, #DecisionThresholds, #LogisticRegression, #DataAnalysis -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = Model Screening(
		Y( :Y Binary ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Validation( :Validation ),
		Decision Tree( 0 ),
		Bootstrap Forest( 0 ),
		Boosted Tree( 0 ),
		Discriminant( 0 ),
		Fit Least Squares( 0 ),
		Fit Stepwise( 0 ),
		Logistic Regression( 1 ),
		Decision Threshold( 1 )
	);
	rpt = obj << report;
	test1 = Try( rpt["Model Screening for Y Binary"]["Decision Thresholds"] << get title, 0 );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP version is Pro.
2. Open data table;
3. Run Model Screening analysis.
4. Set response variable as Y Binary.
5. Specify predictor variables.
6. Enable validation column.
7. Disable Decision Tree.
8. Disable Bootstrap Forest.
9. Disable Boosted Tree.
10. Disable Discriminant.
11. Disable Fit Least Squares.
12. Disable Fit Stepwise.
13. Enable Logistic Regression.
14. Enable Decision Threshold.
15. Retrieve report.
16. Attempt to get Decision Thresholds title.
17. Close dataset without saving.



### Example 7
> **Summary**: Executes Model Screening with customized settings for Boosted Tree, Neural Network, Generalized Regression, and Support Vector Machines, while extracting model summary text.

<!-- Keywords: #JMPScriptingLanguage, #ModelScreening, #BoostedTree, #NeuralNetwork, #GeneralizedRegression -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = Model Screening(
		Y( :Y Binary ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Validation( :Validation ),
		Decision Tree( 0 ),
		Bootstrap Forest( 0 ),
		K Nearest Neighbors( 0 ),
		Fit Least Squares( 0 ),
		Fit Stepwise( 0 ),
		Fit Logistic( 0 ),
		Discriminant( 0 ),
		Boosted Tree( 1, {Number of Layers( 26 ), Learning Rate( 0.44 )} ),
		Neural( 1, {NLinear( 2 ), N Boost( 17 )} ),
		Generalized Regression( 1, {Estimation Method( Elastic Net ), Validation Method( BIC )} ),
		Support Vector Machines( 1, {Kernel Function( "Linear" )} ), 
	);
	rpt = obj << report;
	label1 = rpt["Support Vector Machine Model 1"]["Model Summary"][String Col Box( 2 )] << get text;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Open data table;
3. Run Model Screening.
4. Set binary outcome variable.
5. Define predictor variables.
6. Use validation column.
7. Disable Decision Tree.
8. Disable Bootstrap Forest.
9. Disable K Nearest Neighbors.
10. Disable Least Squares fit.
11. Disable Stepwise fit.
12. Disable Logistic fit.
13. Disable Discriminant analysis.
14. Enable Boosted Tree with settings.
15. Enable Neural network with settings.
16. Enable Generalized Regression with settings.
17. Enable Support Vector Machines with settings.
18. Extract model summary text.
19. Close dataset without saving.



### Example 8
> **Summary**: Runs Model Screening analysis in JMP Pro, performing neural network modeling and extracting mean -log p values from the report.

<!-- Keywords: #JMPPro, #ModelScreening, #NeuralNetworks, #PredictiveAnalytics, #DataScience -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = Model Screening(
		Y( :Y Binary ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Validation( :Validation ),
		Set Random Seed( 12345 ),
		Neural( 1 ),
		Decision Tree( 1 ),
		Bootstrap Forest( 0 ),
		Boosted Tree( 0 ),
		K Nearest Neighbors( 0 ),
		Support Vector Machines( 0 ),
		Discriminant( 0 ),
		Fit Least Squares( 0 ),
		Fit Stepwise( 0 ),
		Logistic Regression( 0 ),
		Generalized Regression( 0 ), 
	);
	rpt = obj << report;
	stat2 = rpt[Outline Box( 17 )][Number Col Box( "Mean -log p" )] << get as matrix;
	tmp = rpt["Details"]["Neural"]["Model NTanH(3)NBoost(20)"] << get scriptable object;
	tmp << Save Fast Formulas;
	obj2 = Model Comparison( Group( :Validation ) );
	rpt2 = obj2 << report;
	b stat = rpt2["Measures of Fit for Y Binary"][Number Col Box( "Mean -log p" )] << get as matrix;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP version is Pro.
2. Open data table;
3. Perform Model Screening analysis.
4. Set response variable as binary.
5. Specify predictor variables.
6. Use validation column.
7. Set random seed for reproducibility.
8. Enable Neural network model.
9. Disable other predictive models.
10. Extract mean -log p values from report.
11. Save fast formulas for neural model.
12. Compare models using validation group.
13. Extract mean -log p values from comparison report.
14. Close dataset without saving.



### Example 9
> **Summary**: Model screening and fitting using Partial Least Squares regression in JMP Pro, generating reports and extracting performance metrics for training and validation datasets.

<!-- Keywords: #JMPPro, #PartialLeastSquares, #ModelScreening, #RegressionAnalysis, #DataScience -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj1 = Model Screening(
		Y( :Y ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Validation( :Validation ),
		Fit Least Squares( 0 ),
		Partial Least Squares( 1 ),
		Bootstrap Forest( 0 ),
		Boosted Tree( 0 ),
		Decision Tree( 0 ),
		Neural( 0 ),
		Fit Stepwise( 0 ),
		Generalized Regression( 0 ),
		K Nearest Neighbors( 0 ),
		Support Vector Machines( 0 )
	);
	rpt1 = obj1 << report;
	test1 training = rpt1["Training"][Table Box( 1 )] << get as matrix;
	test1 validation = rpt1["Validation"][Table Box( 1 )] << get as matrix;
	obj2 = Fit Model(
		Validation( :Validation ),
		Y( :Y ),
		Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		No Intercept( 1 ),
		Center Polynomials( 0 ),
		Personality( "Partial Least Squares" ),
		Run( Initial Number of Factors( 11 ), Fit( Method( NIPALS ) ) ), 
	);
	test2 = obj2 << (Fit[1] << get measures( 1 ));
	test2 training = J( 1, 3, test2["Y"]["Training"]["N"] ) || test2["Y"]["Training"]["RSquare"] || test2["Y"]["Training"]["RASE"];
			
	test2 validation = J( 1, 3, test2["Y"]["Validation"]["N"] ) || test2["Y"]["Validation"]["RSquare"] || test2["Y"]["Validation"]["RASE"];
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro version.
2. Open data table;
3. Run Model Screening.
4. Define response variable Y.
5. Define predictor variables.
6. Set validation column.
7. Enable multiple modeling methods.
8. Generate model screening report.
9. Extract training data from report.
10. Extract validation data from report.
11. Fit model using Partial Least Squares.
12. Retrieve model fit measures.
13. Format training performance metrics.
14. Format validation performance metrics.
15. Close dataset without saving.



### Example 10
> **Summary**: Performs a model screening process in JMP Pro, enabling the selection of Generalized Regression and Partial Least Squares models with Nested Crossvalidation.

<!-- Keywords: #JMPPro, #ModelScreening, #GeneralizedRegression, #PartialLeastSquares, #NestedCrossvalidation -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj1 = dt << Model Screening(
		Y( :Y ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Decision Tree( 0 ),
		Bootstrap Forest( 0 ),
		Boosted Tree( 0 ),
		K Nearest Neighbors( 0 ),
		Neural( 0 ),
		Support Vector Machines( 0 ),
		Discriminant( 0 ),
		Fit Least Squares( 0 ),
		Fit Stepwise( 0 ),
		Logistic Regression( 0 ),
		Generalized Regression( 1 ),
		Partial Least Squares( 1 ),
		Nested Crossvalidation( 1 )
	);
	rpt1 = obj1 << report;
	method = rpt1["Summary Across the Folds"][String Col Box( 1 )] << get text;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro version.
2. Open data table;
3. Launch Model Screening platform.
4. Set response variable.
5. Define predictor variables.
6. Disable Decision Tree.
7. Disable Bootstrap Forest.
8. Disable Boosted Tree.
9. Disable K Nearest Neighbors.
10. Disable Neural network.
11. Disable Support Vector Machines.
12. Disable Discriminant analysis.
13. Disable Fit Least Squares.
14. Disable Fit Stepwise.
15. Disable Logistic Regression.
16. Enable Generalized Regression.
17. Enable Partial Least Squares.
18. Enable Nested Crossvalidation.
19. Retrieve model summary report.
20. Extract method names.
21. Close dataset without saving.



### Example 11
> **Summary**: Runs the Model Screening platform in JMP Pro to configure and generate a report, utilizing multiple predictor variables and validation settings.

<!-- Keywords: #JMPPro, #ModelScreening, #BoostedTree, #NeuralNetwork, #GeneralizedRegression -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = dt << Model Screening(
		Y( :Y ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Validation( :Validation ),
		Decision Tree( 0 ),
		Bootstrap Forest( 0 ),
		K Nearest Neighbors( 0 ),
		Fit Least Squares( 0 ),
		Fit Stepwise( 0 ),
		Fit Logistic( 0 ),
		Discriminant( 0 ),
		Support Vector Machines( 0 ),
		Boosted Tree( 1, {Number of Layers( 20 ), Learning Rate( 0.4 )} ),
		Neural( 1, {NLinear( 2 ), N Boost( 15 )} ),
		Generalized Regression( 1, {Estimation Method( Elastic Net ), Validation Method( BIC )} ), 
	);
	rpt = obj << report;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table;
3. Launch Model Screening platform.
4. Set response variable Y.
5. Add multiple predictor variables.
6. Enable validation column.
7. Disable Decision Tree.
8. Disable Bootstrap Forest.
9. Disable K Nearest Neighbors.
10. Disable Fit Least Squares.
11. Disable Fit Stepwise.
12. Disable Fit Logistic.
13. Disable Discriminant.
14. Disable Support Vector Machines.
15. Enable Boosted Tree with settings.
16. Enable Neural network with settings.
17. Enable Generalized Regression with settings.
18. Generate model report.
19. Close dataset without saving.



### Example 12
> **Summary**: Performs a model screening process in JMP Pro, utilizing Boosted Trees and Logistic Regression to analyze the relationship between multiple predictor variables and a binary response variable.

<!-- Keywords: #JMPPro, #ModelScreening, #BoostedTrees, #LogisticRegression, #DataAnalysis -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = dt << Model Screening(
		Y( :Y Binary ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Decision Tree( 0 ),
		Bootstrap Forest( 0 ),
		Boosted Tree( 1 ),
		K Nearest Neighbors( 0 ),
		Neural( 0 ),
		Support Vector Machines( 0 ),
		Fit Least Squares( 0 ),
		Fit Stepwise( 0 ),
		Logistic Regression( 1 ),
		Generalized Regression( 0 ),
		Nested Crossvalidation( 1 ),
		K for Nested( 2 ),
		L for Nested( 3 ),
		Set Random Seed( 12345 ), 
	);
	obj << Decision Threshold( 1 );
	obj << Decision Threshold( 1 );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro version.
2. Open data table;
3. Launch Model Screening platform.
4. Set response variable (Y Binary).
5. Include multiple predictor variables.
6. Disable Decision Tree.
7. Disable Bootstrap Forest.
8. Enable Boosted Tree.
9. Disable K Nearest Neighbors.
10. Disable Neural networks.
11. Disable Support Vector Machines.
12. Disable Fit Least Squares.
13. Disable Fit Stepwise.
14. Enable Logistic Regression.
15. Disable Generalized Regression.
16. Enable Nested Crossvalidation.
17. Set K for Nested to 2.
18. Set L for Nested to 3.
19. Set random seed to 12345.
20. Set decision threshold to 1.
21. Set decision threshold to 1 again.
22. Close dataset without saving.



### Example 13
> **Summary**: Performs a Model Screening analysis in JMP Pro, utilizing various algorithms and settings to evaluate the performance of different models.

<!-- Keywords: #JMPPro, #ModelScreening, #MachineLearning, #DataAnalysis, #PredictiveModelling -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj1 = dt << Model Screening(
		Y( :Y ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Decision Tree( 0 ),
		Bootstrap Forest( 0 ),
		Boosted Tree( 0 ),
		K Nearest Neighbors( 0 ),
		Neural( 0 ),
		Support Vector Machines( 0 ),
		Fit Least Squares( 1 ),
		Fit Stepwise( 0 ),
		Logistic Regression( 0 ),
		Generalized Regression( 0 ),
		Partial Least Squares( 1 ),
		Nested Crossvalidation( 1 ),
		K for Nested( 2 ),
		L for Nested( 2 ),
		Set Random Seed( 888 ), 
	);
	rpt1 = obj1 << report;
	summary1 = rpt1["Summary Across the Folds"][Table Box( 1 )] << get as matrix;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP is Pro version.
2. Open data table;
3. Run Model Screening.
4. Set response variable.
5. Specify predictor variables.
6. Disable Decision Tree.
7. Disable Bootstrap Forest.
8. Disable Boosted Tree.
9. Disable K Nearest Neighbors.
10. Disable Neural Network.
11. Disable Support Vector Machines.
12. Enable Fit Least Squares.
13. Disable Fit Stepwise.
14. Disable Logistic Regression.
15. Disable Generalized Regression.
16. Enable Partial Least Squares.
17. Enable Nested Crossvalidation.
18. Set K for Nested.
19. Set L for Nested.
20. Set random seed.
21. Retrieve report.
22. Extract summary matrix.
23. Close dataset without saving.



### Example 14
> **Summary**: Performs a Model Screening analysis in JMP Pro, including logistic regression and generalized regression models, with decision threshold option enabled.

<!-- Keywords: #JMPPro, #ModelScreening, #LogisticRegression, #GeneralizedRegression, #DecisionThreshold -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	dt:sex << Set Property( "Profit Matrix", {[0 - 1, -0.428571428571429 0, . .], {"F", "M", "Undecided"}} );
	obj1 = Model Screening(
		Y( :sex ),
		X( :height, :weight ),
		Decision Tree( 0 ),
		Bootstrap Forest( 0 ),
		Boosted Tree( 0 ),
		K Nearest Neighbors( 0 ),
		Neural( 0 ),
		Support Vector Machines( 0 ),
		Discriminant( 0 ),
		Fit Least Squares( 0 ),
		Fit Stepwise( 0 ),
		Logistic Regression( 1 ),
		Generalized Regression( 1 ),
		Decision Threshold( 1 )
	);
	rpt1 = obj1 << report;
	label1 = rpt1["Decision Thresholds"]["Training"][Text Box( 6 )] << get text;
	prob1 = rpt1["Decision Thresholds"]["Training"][Number Edit Box( 1 )] << get;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro version.
2. Open data_table data
3. Set property for "sex" column.
4. Run Model Screening analysis.
5. Include logistic regression model.
6. Include generalized regression model.
7. Enable decision threshold option.
8. Retrieve report from analysis.
9. Extract decision threshold label.
10. Extract decision threshold probability.



### Example 15
> **Summary**: Performs a Model Screening analysis in JMP Pro, utilizing Support Vector Machines and decision thresholding to evaluate predictive models.

<!-- Keywords: #JMPPro, #ModelScreening, #SupportVectorMachines, #DecisionThresholding, #PredictiveModelEvaluation -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	obj1 = dt << Model Screening(
		Y( :BAD ),
		X( :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ ),
		Validation( :Validation ),
		Decision Tree( 0 ),
		Bootstrap Forest( 0 ),
		Boosted Tree( 0 ),
		K Nearest Neighbors( 0 ),
		Discriminant( 0 ),
		Fit Least Squares( 0 ),
		Fit Stepwise( 0 ),
		Logistic Regression( 0 ),
		Generalized Regression( 0 ),
		Informative Missing( 1 ),
		Set Random Seed( 123 ), 
	);
	obj1 << Select Fit( "Training", Where( Method == "Support Vector Machines" ) );
	obj1 << Decision Threshold( 1 );
	obj2 = obj1 << Redo Analysis( 1 );
	rpt1 = obj1 << report;
	rpt2 = obj2 << report;
	conf mtrx1 = rpt1["Decision Thresholds"]["Training"][Table Box( 1 )] << get as matrix;
	conf mtrx2 = rpt2["Decision Thresholds"]["Training"][Table Box( 1 )] << get as matrix;
	obj1 << Save Prediction Formulas( 1 );
	mc1 = Model Comparison( Group( :Validation ) );
	mc1 << Decision Threshold( 1 );
	rpt3 = mc1 << report;
	conf mtrx3 = rpt3["Decision Thresholds"]["Training"][Table Box( 1 )] << get as matrix;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table.
3. Run Model Screening analysis.
4. Set Y variable to BAD.
5. Include multiple X variables.
6. Enable validation.
7. Disable several modeling methods.
8. Enable Informative Missing option.
9. Set random seed to 123.
10. Select Support Vector Machines fit.
11. Set decision threshold to 1.
12. Redo analysis with selected method.
13. Extract first report.
14. Extract second report.
15. Get confusion matrix from first report.
16. Get confusion matrix from second report.
17. Save prediction formulas.
18. Create Model Comparison object.
19. Set decision threshold to 1 in comparison.
20. Extract comparison report.
21. Get confusion matrix from comparison report.
22. Close data table without saving.



### Example 16
> **Summary**: Creates and compares two Boosted Tree models using log-transformed height as response, with sex, age, and weight as predictors, in JMP Pro.

<!-- Keywords: #JMPPro, #BoostedTree, #LogTransformation, #PredictiveModeling, #DataScience -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	obj1 = Boosted Tree(
		Y( Transform Column( "Log height", Formula( Log( :height ) ) ), ),
		X( :sex, :age, :weight ),
		Set Random Seed( 345 ),
		Go
	);
	obj1 << Save Residuals( 1 );
	obj1 << Save Prediction Formula( 1 );
	obj1 << Save Predicteds( 1 );
	dt << New Column( "height mod", numeric, Formula( Log( :height ) ) );
	obj2 = Boosted Tree( Y( :height mod ), X( :sex, :age, :weight ), Set Random Seed( 345 ), Go );
	obj2 << Save Residuals( 1 );
	obj2 << Save Prediction Formula( 1 );
	obj2 << Save Predicteds( 1 );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table.
3. Create Boosted Tree model.
4. Use log-transformed height as response.
5. Include sex, age, weight as predictors.
6. Set random seed for reproducibility.
7. Run the model.
8. Save residuals to data table.
9. Save prediction formula to data table.
10. Save predicted values to data table.
11. Add log-transformed height column.
12. Create second Boosted Tree model.
13. Use new height column as response.
14. Include same predictors.
15. Set random seed for consistency.
16. Run the second model.
17. Save residuals for second model.
18. Save prediction formula for second model.
19. Save predicted values for second model.
20. Close data table without saving.



### Example 17
> **Summary**: Executes a Boosted Tree model with custom Profiler settings and report generation in JMP Pro.

<!-- Keywords: #JMPPro, #BoostedTree, #ProfilerSettings, #ReportGeneration, #CustomModel -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj1 = dt << Boosted Tree(
		Y( :sex ),
		X( :height, :weight, :age ),
		Go,
		Profiler(
			1,
			Desirability Functions( 1 ),
			:sex << Category Desirability( {"F", 0.8}, {"M", 0.4}, ),
			Term Value( height( 62.55 ), weight( 105 ), age( 12 ) )
		)
	);
	rpt1 = obj1 << report;
	obj1 << Save Prediction Formula;
	d1 = Parse( Substr( rpt1["Prediction Profiler"][AxisBox( 2 )] << get text, 13 ) );
	obj2 = dt << Profiler(
		Y( :"Prob(sex==M)"n, :"Prob(sex==F)"n ),
		Profiler(
			1,
			Desirability Functions( 1 ),
			:sex << Category Desirability( {"F", 0.8}, {"M", 0.4}, ),
			Term Value( height( 62.55 ), weight( 105 ), age( 12 ) )
		)
	);
	rpt2 = obj2 << report;
	d2 = Parse( Substr( rpt2["Prediction Profiler"][AxisBox( 2 )] << get text, 13 ) );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Run Boosted Tree model.
4. Configure Profiler settings.
5. Generate model report.
6. Save prediction formula.
7. Extract prediction text.
8. Run standard Profiler.
9. Configure Profiler settings again.
10. Generate second report.



## Boosted Tree using Log Capture
> **Summary**: Model screening and evaluation using K-Fold Crossvalidation, enabling Decision Trees and disabling other models.

<!-- Keywords: #JMPScriptingLanguage, #ModelScreening, #KFoldCrossValidation, #DecisionTrees, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log1 = Log Capture(
	obj1 = Model Screening(
		Y( :Y ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		K Fold Crossvalidation( 1 ),
		K for K Fold( 23 ),
		Neural( 0 ),
		Decision Tree( 1 ),
		Bootstrap Forest( 0 ),
		Boosted Tree( 0 ),
		K Nearest Neighbors( 0 ),
		Support Vector Machines( 0 ),
		Discriminant( 0 ),
		Fit Least Squares( 0 ),
		Fit Stepwise( 0 ),
		Logistic Regression( 0 ),
		Generalized Regression( 0 ), 
	)
);
```

**Code Explanation**:

1. Open data table;
2. Start log capture.
3. Launch Model Screening.
4. Set response variable Y.
5. Define predictor variables.
6. Enable K Fold Crossvalidation.
7. Set K to 23.
8. Disable Neural network.
9. Enable Decision Tree.
10. Disable other models.



