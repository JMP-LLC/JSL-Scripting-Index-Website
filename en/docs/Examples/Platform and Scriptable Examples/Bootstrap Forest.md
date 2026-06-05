# Bootstrap Forest

### Example 1
> **Summary**: Opens a data table, sets the response variable, defines predictor variables, specifies validation method, chooses Bootstrap Forest method, and executes analysis with 100 trees and 3 terms.

<!-- Keywords: #BootstrapForest, #JMPScriptingLanguage, #DataAnalysis, #MachineLearning, #PredictiveModel -->

**Code**:
```jsl
// Bootstrap Forest
// Open data table
dt = Open("data_table.jmp");
// Bootstrap Forest
Bootstrap Forest(
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
	Method( "Bootstrap Forest" ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 100 ),
	Go
);
```

**Code Explanation**:

1. Open data table.
2. Set response variable.
3. Define predictor variables.
4. Specify validation method.
5. Choose Bootstrap Forest method.
6. Set bootstrap portion to 1.
7. Limit number of terms to 3.
8. Set number of trees to 100.
9. Execute analysis.



### Example 2
> **Summary**: Runs a Bootstrap Forest analysis to identify key factors affecting the 'Log[Y]' response variable, utilizing predictor variables and configuring the model with 100 trees and 5 terms.

<!-- Keywords: #BootstrapForest, #JMPScriptingLanguage, #PredictiveModeling, #DataAnalysis, #MachineLearning -->

**Code**:
```jsl
Open("data_table.jmp");
Bootstrap Forest(
	Transform Column( "Log[Y]", Formula( Log( :Y ) ) ),
	Y( :"Log[Y]"n ),
	X( :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :LTG, :Glucose ),
	Method( "Bootstrap Forest" ),
	Portion Bootstrap( 1 ),
	Number Terms( 5 ),
	Number Trees( 100 ),
	Go,
	Profiler(
		1,
		Confidence Intervals( 1 ),
		Arrange in Rows( 4 ),
		Term Value(
			BMI( 26.376, Lock( 0 ), Show( 1 ) ),
			BP( 94.647, Lock( 0 ), Show( 1 ) ),
			Total Cholesterol( 189.14, Lock( 0 ), Show( 1 ) ),
			LDL( 115.44, Lock( 0 ), Show( 1 ) ),
			HDL( 49.788, Lock( 0 ), Show( 1 ) ),
			LTG( 4.6414, Lock( 0 ), Show( 1 ) ),
			Glucose( 91.26, Lock( 0 ), Show( 1 ) )
		)
	),
	SendToReport(
		Dispatch( {}, "Specifications", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Overall Statistics", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create "Log[Y]" column.
3. Apply log transformation to "Y".
4. Run Bootstrap Forest analysis.
5. Set response variable as "Log[Y]".
6. Include predictor variables.
7. Use Bootstrap Forest method.
8. Set bootstrap portion to 1.
9. Limit number of terms to 5.
10. Use 100 trees.



### Example 3
> **Summary**: Runs a Bootstrap Forest analysis to identify key variables and their relationships in the data table, utilizing multiple predictor variables and specifying missing value order.

<!-- Keywords: #BootstrapForest, #JMPScriptingLanguage, #DataAnalysis, #PredictiveModeling, #MissingValueHandling -->

**Code**:
```jsl
Open("data_table.jmp") << Bootstrap Forest(
	Y( :Region ),
	X( :"pop- m"n, :POP, :Max deg. F Jan, :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	Missing Value Order( Low( :CO, :PM10 ), High( :OZONE, :SO2, :NO, :Lead ) ),
	Method( "Bootstrap Forest" ),
	Portion Bootstrap( 1 ),
	Number Terms( 7 ),
	Number Trees( 100 ),
	Go,
	Profiler(
		1,
		Arrange in Rows( 5 ),
		Term Value(
			"pop- m"n( 1.6426, Lock( 0 ), Show( 1 ) ),
			POP( 1642.6, Lock( 0 ), Show( 1 ) ),
			Max deg. F Jan( 42.846, Lock( 0 ), Show( 1 ) ),
			OZONE( 0.14688, Lock( 0 ), Show( 1 ) ),
			CO( 8.383, Lock( 0 ), Show( 1 ) ),
			SO2( 0.04714, Lock( 0 ), Show( 1 ) ),
			NO( 0.027273, Lock( 0 ), Show( 1 ) ),
			PM10( 39.275, Lock( 0 ), Show( 1 ) ),
			Lead( 0.1649, Lock( 0 ), Show( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Perform Bootstrap Forest analysis.
3. Set Region as response variable.
4. Include multiple predictor variables.
5. Define missing value order for some variables.
6. Use Bootstrap Forest method.
7. Set portion bootstrap to 1.
8. Specify number of terms to 7.
9. Set number of trees to 100.
10. Generate profiler with specific settings.



### Example 4
> **Summary**: Runs a Bootstrap Forest analysis to predict Sex based on multiple predictor variables, including Age, Weight, Oxy, Runtime, RunPulse, RstPulse, and MaxPulse.

<!-- Keywords: #BootstrapForest, #DecisionTrees, #PredictiveModeling, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp") << Bootstrap Forest(
	Y( :Sex ),
	X( :Age, :Weight, :Oxy, :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Method( "Bootstrap Forest" ),
	Portion Bootstrap( 1 ),
	Number Terms( 6 ),
	Number Trees( 100 ),
	Go,
	Profiler(
		1,
		Arrange in Rows( 4 ),
		Term Value(
			Age( 47.677, Lock( 0 ), Show( 1 ) ),
			Weight( 77.445, Lock( 0 ), Show( 1 ) ),
			Oxy( 47.376, Lock( 0 ), Show( 1 ) ),
			Runtime( 10.5861, Lock( 0 ), Show( 1 ) ),
			RunPulse( 169.645, Lock( 0 ), Show( 1 ) ),
			RstPulse( 53.452, Lock( 0 ), Show( 1 ) ),
			MaxPulse( 173.774, Lock( 0 ), Show( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Apply Bootstrap Forest method.
3. Set response variable to Sex.
4. Include multiple predictor variables.
5. Use Bootstrap Forest algorithm.
6. Perform full bootstrap sampling.
7. Limit number of terms to 6.
8. Create 100 decision trees.
9. Generate analysis report.
10. Display profiler with arranged rows.



### Example 5
> **Summary**: Create and execute a Bootstrap Forest analysis to explore relationships between sepal length, sepal width, petal length, and petal width in a data table.

<!-- Keywords: #BootstrapForest, #JMPScriptingLanguage, #DataAnalysis, #MachineLearning, #PredictiveModel -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
obj = Bootstrap Forest(
	Y( :Sepal length ),
	X( :Sepal width, :Petal length, :Petal width ),
	Method( "Bootstrap Forest" ),
	Column Contributions( 1 ),
	Portion Bootstrap( 1 ),
	Number Terms( 2 ),
	Number Trees( 100 ),
	Go
);
```

**Code Explanation**:

1. Open data table;
2. Define bootstrap forest object.
3. Set response variable.
4. Specify predictor variables.
5. Choose bootstrap forest method.
6. Enable column contributions.
7. Set portion bootstrap to 1.
8. Limit number of terms to 2.
9. Set number of trees to 100.
10. Execute analysis.



### Example 6
> **Summary**: Fits a Bootstrap Forest model to predict continuous outcomes, utilizing various technical features such as validation columns and Shapley values.

<!-- Keywords: #JMPScriptingLanguage, #BootstrapForest, #ShapleyValues, #PredictiveModeling, #DataAnalysis -->

**Code**:
```jsl
dt4 = Open("data_table.jmp");
obj4 = dt4 << Bootstrap Forest(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Method( "Bootstrap Forest" ),
	Portion Bootstrap( 1 ),
	Number Terms( 8 ),
	Number Trees( 14 ),
	Go,
	Profiler( 1, Arrange in Rows( 6 ), )
);
dt4 << Clear Row States << Select Rows( Index( 50, N Row( dt4 ) ) ) << Exclude;
profiler[1] << Profiler(
	1,
	Desirability Functions( 1 ),
	Shapley Set Random Seed( 12345 ),
	Shapley Background Data Choice( Percent training data set ),
	Shapley Percent Training Data( 60 )
);
profiler[1] << Save Shapley Values;
dt4:SHAP Intercept << Exclude( 0 );
dt4 << New Column( "Sum of SHAP",
	Formula(
		Sum(
			:SHAP Intercept,
			:SHAP Age,
			:SHAP Gender,
			:SHAP BMI,
			:SHAP BP,
			:SHAP Total Cholesterol,
			:SHAP LDL,
			:SHAP HDL,
			:SHAP TCH,
			:SHAP LTG,
			:SHAP Glucose
		)
	)
);
obj4 << Save Predicteds;
dt4 << New Column( "Absolute Deviation", Formula( Abs( :Sum of SHAP - :Y Predicted ) ), hide );
dt4 << New Column( "Max Deviation", Formula( Col Max( :Absolute Deviation ) ), hide );
Window( "data_table - Bootstrap Forest of Y" ) << close window;
```

**Code Explanation**:

1. Open data table;
2. Fit Bootstrap Forest model.
3. Specify response variable.
4. Define predictor variables.
5. Use validation column.
6. Choose Bootstrap Forest method.
7. Set bootstrap portion.
8. Specify number of terms.
9. Set number of trees.
10. Run model and open profiler.



## Bootstrap Forest using Set Name
> **Summary**: Executes Bootstrap Forest analysis for multiple samples, configuring various parameters and applying sample presets to generate reports.

<!-- Keywords: #JMPScriptingLanguage, #BootstrapForestAnalysis, #DataTableOperations, #SamplePresets, #ReportGeneration -->

**Code**:
```jsl
plat_samples = ["Bootstrap Forest" => {"Bootstrap Forest with 1000 Trees"}, => {}];
dt = Open("data_table.jmp");
dt:Y << Set Name( "Y Var" );
For Each( {sample}, plat_samples["Bootstrap Forest"],
	obj = dt << Bootstrap Forest(
		Y( :Y Var ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Minimum Splits Per Tree( 5 ),
		Portion Bootstrap( 1 ),
		Number Terms( 3 ),
		Number Trees( 25 ),
		Go
	);
	Eval( Eval Expr( obj << Apply Preset( "Sample Presets", Expr( sample ) ) ) );
	obj << Set Report Title( sample );
);
```

**Code Explanation**:

1. Define preset samples.
2. Open data table;
3. Rename Y variable.
4. Loop through samples.
5. Run Bootstrap Forest analysis.
6. Set Y variable.
7. Specify predictor variables.
8. Configure minimum splits.
9. Set bootstrap portion.
10. Define number of terms.
11. Set number of trees.
12. Execute analysis.
13. Apply sample preset.
14. Set report title.



## Bootstrap Forest using Set Modeling Type
> **Summary**: Runs a Bootstrap Forest analysis to model the relationship between various predictors and the response variable REASON, utilizing nominal modeling types for DEROG and DELINQ.

<!-- Keywords: #BootstrapForest, #NominalModeling, #PredictiveAnalytics, #JMPScriptingLanguage, #DataScience -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:DEROG << Set Modeling Type( "nominal" );
dt:DELINQ << Set Modeling Type( "nominal" );
dt << Bootstrap Forest(
	Y( :REASON ),
	X( :BAD, :LOAN, :MORTDUE, :VALUE, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Validation( :Validation ),
	Missing Value Order( Low( :YOJ, :CLAGE, :NINQ, :CLNO, :DEBTINC ), High( :MORTDUE, :VALUE ) ),
	Method( "Bootstrap Forest" ),
	Portion Bootstrap( 1 ),
	Number Terms( 9 ),
	Number Trees( 100 ),
	Go,
	Profiler(
		1,
		Arrange in Rows( 7 ),
		Term Value(
			BAD( 0, Lock( 0 ), Show( 1 ) ),
			LOAN( 18608, Lock( 0 ), Show( 1 ) ),
			MORTDUE( 73760, Lock( 0 ), Show( 1 ) ),
			VALUE( 101780, Lock( 0 ), Show( 1 ) ),
			JOB( "Office", Lock( 0 ), Show( 1 ) ),
			YOJ( 8.922, Lock( 0 ), Show( 1 ) ),
			DEROG( 3, Lock( 0 ), Show( 1 ) ),
			DELINQ( 4, Lock( 0 ), Show( 1 ) ),
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
2. Set DEROG modeling type to nominal.
3. Set DELINQ modeling type to nominal.
4. Run Bootstrap Forest analysis.
5. Specify REASON as response variable.
6. Include multiple predictors in model.
7. Use Validation column for validation.
8. Set missing value order for specific columns.
9. Choose Bootstrap Forest method.
10. Generate profiler with specific settings.



## Bootstrap Forest using Formula Depot
> **Summary**: Runs a data analysis workflow by running Lasso Poisson and Bootstrap Forest scripts, generating code for various programming languages, and copying scripts to the clipboard.

<!-- Keywords: #JSLScriptingLanguage, #DataAnalysis, #MachineLearning, #CodeGeneration, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fd = Formula Depot();
obj1 = dt << Run Script( "Lasso Poisson, Validation Column" );
md1 = obj1 << (Fit[1] << Publish Prediction Formula);
obj2 = dt << Bootstrap Forest(
	Y( :Validation ),
	X( :BMI, :Age, :Time ),
	Method( "Bootstrap Forest" ),
	Portion Bootstrap( 1 ),
	Number Terms( 1 ),
	Number Trees( 100 ),
	Go,
	SendToReport( Dispatch( {}, "Per-Tree Summaries", OutlineBox, {Close( 0 )} ) )
);
md2 = obj2 << Publish Prediction Formula;
obj1 << Close Window;
obj2 << Close Window;
codeC = fd << Generate C Code( Formulas( md1 ), NoEditor );
codeP = fd << Generate Python Code( Formulas( md2 ), NoEditor );
codeJs = fd << Generate JavaScript Code( Formulas( md1, md2 ), NoEditor );
codeS = fd << Generate SAS Code( Formulas( md1, md2 ), NoEditor );
codeQ = fd << Generate SQL Code( Formulas( {md1, md2} ), NoEditor );
fd << Run Scripts( Table( "data_table" ), Formulas( 1 ) );
For( loopCnt = 1, loopCnt <= 10, loopCnt++,
	fd << Copy Scripts( Formulas( 2 ) );
	clip_text = Get Clipboard();
	If( Is String( clip_text ) & Contains( clip_text, "New Column(" ) > 0,
		Break()
	);
);
```

**Code Explanation**:

1. Open data table;
2. Create Formula Depot.
3. Run Lasso Poisson script.
4. Publish prediction formula.
5. Perform Bootstrap Forest analysis.
6. Publish prediction formula.
7. Close both analysis windows.
8. Generate C code.
9. Generate Python code.
10. Generate JavaScript code.
11. Generate SAS code.
12. Generate SQL code.
13. Run scripts on table.
14. Loop to copy scripts.
15. Check clipboard for new column.



## Bootstrap Forest using If
### Example 1
> **Summary**: Runs a Bootstrap Forest analysis with local data filtering on Gender and Age, utilizing multiple predictor variables for Y Binary response.

<!-- Keywords: #JMPScriptingLanguage, #BootstrapForestAnalysis, #LocalDataFiltering, #PredictiveModeling, #DataScience -->

**Code**:
```jsl
If( JMP Product Name() == "Pro",
	dt1 = Open("data_table.jmp");
	BootStrapFor_LDF = dt1 << Bootstrap Forest(
		Y( :Y Binary ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Validation( :Validation ),
		Multithreading( 0 ),
		Set Random Seed( 12345 ),
		Method( "Bootstrap Forest" ),
		Minimum Splits per Tree( 5 ),
		Maximum Splits per Tree( 200 ),
		Portion Bootstrap( 0.747572815533981 ),
		Number Terms( 10 ),
		Number Trees( 20 ),
		Go
	);
	BootStrapFor_LDF << Local Data Filter(
		Add Filter( columns( :Gender, :Age ), Where( :Gender == 2 ), Where( :Age >= 60 & :Age <= 79 ) )
	);
	OverallStats = Report( BootStrapFor_LDF )[Outline Box( "Bootstrap Forest for Y Binary" )][Outline Box( "Overall Statistics" )][
	Table Box( 1 )] << Make Into Data Table;
	vals = OverallStats << get as matrix;
	text1 = (Report( BootStrapFor_LDF ) << Parent)[Outline Box( 1 )][Text Box( 1 )] << Get Text;
	Close( OverallStats, nosave );
	Close( dt1, nosave );
);
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Open data table;
3. Run Bootstrap Forest analysis.
4. Set response variable to Y Binary.
5. Include multiple predictor variables.
6. Specify validation column.
7. Disable multithreading.
8. Set random seed for reproducibility.
9. Use Bootstrap Forest method.
10. Apply local data filter on Gender and Age.



### Example 2
> **Summary**: Runs a Bootstrap Forest analysis to predict binary outcomes using a weighted dataset, with validation and training weights applied.

<!-- Keywords: #JMPPro, #BootstrapForest, #WeightedData, #BinaryOutcomes, #DataAnalysis -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	obj = dt << Bootstrap Forest(
		Y( :Y Binary ),
		X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Weight( :Gender ),
		Validation( :Validation ),
		Set Random Seed( 12345 ),
		Method( "Bootstrap Forest" ),
		Portion Bootstrap( 1 ),
		Number Terms( 7 ),
		Number Trees( 17 ),
		Go
	);
	obj << Save Prediction Formula( 1 );
	b wgt count training = [330 0, 15 112];
	b wgt count validation = [122 13, 21 36];
	mr1 = (0 + 15) / Sum( [330 0, 15 112] );
	mr2 = (13 + 21) / Sum( [122 13, 21 36] );
	rpt = obj << report;
	stat1 = rpt["Overall Statistics"][Table Box( 1 )] << get as matrix;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Run Bootstrap Forest analysis.
4. Specify binary outcome variable.
5. Define predictor variables.
6. Apply weight variable.
7. Use validation column.
8. Set random seed.
9. Choose Bootstrap Forest method.
10. Configure bootstrap portion.
11. Set number of terms.
12. Set number of trees.
13. Execute analysis.
14. Save prediction formula.
15. Define training weights.
16. Define validation weights.
17. Calculate training misclassification rate.
18. Calculate validation misclassification rate.
19. Retrieve overall statistics report.
20. Extract statistics into matrix.
21. Close dataset without saving.



### Example 3
> **Summary**: Executes a Bootstrap Forest model in JMP Pro, specifying response and predictor variables, validation column, and model parameters.

<!-- Keywords: #JMPPro, #BootstrapForest, #Modeling, #DataAnalysis, #MachineLearning -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	obj = dt << Bootstrap Forest(
		Y( :Y ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Validation( :Validation ),
		Minimum Splits Per Tree( 5 ),
		Portion Bootstrap( 1 ),
		Number Terms( 3 ),
		Number Trees( 3 ),
		Set Random Seed( 123 ),
		Go
	);
	rpt = obj << report;
	nsplits = (rpt["Per-Tree Summaries"][Table Box( 1 )] << get as matrix)[0, 2];
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Run Bootstrap Forest model.
4. Specify response variable.
5. Specify predictor variables.
6. Use validation column.
7. Set minimum splits.
8. Set bootstrap portion.
9. Limit number of terms.
10. Set number of trees.



### Example 4
> **Summary**: Creates and analyzes two Bootstrap Forest models for log height, utilizing sex, age, and weight as predictors in JMP Pro.

<!-- Keywords: #JMPPro, #BootstrapForest, #LogHeight, #PredictiveModeling, #DataAnalysis -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	obj1 = Bootstrap Forest(
		Y( Transform Column( "Log height", Formula( Log( :height ) ) ), ),
		X( :sex, :age, :weight ),
		Set Random Seed( 345 ),
		Go
	);
	obj1 << Save Residuals( 1 );
	obj1 << Save Prediction Formula( 1 );
	obj1 << Save Predicteds( 1 );
	dt << New Column( "height mod", numeric, Formula( Log( :height ) ) );
	obj2 = Bootstrap Forest( Y( :height mod ), X( :sex, :age, :weight ), Set Random Seed( 345 ), Go );
	obj2 << Save Residuals( 1 );
	obj2 << Save Prediction Formula( 1 );
	obj2 << Save Predicteds( 1 );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro.
2. Open data table;
3. Create Bootstrap Forest for log height.
4. Use sex, age, weight as predictors.
5. Set random seed to 345.
6. Run the model.
7. Save residuals for model 1.
8. Save prediction formula for model 1.
9. Save predicted values for model 1.
10. Add "height mod" column.
11. Create Bootstrap Forest for "height mod".
12. Use sex, age, weight as predictors.
13. Set random seed to 345.
14. Run the model.
15. Save residuals for model 2.
16. Save prediction formula for model 2.
17. Save predicted values for model 2.
18. Close the dataset without saving.



### Example 5
> **Summary**: Executes a Bootstrap Forest model to predict age categories based on height, weight, and sex, generating two reports with prediction profiler results.

<!-- Keywords: #JMPPro, #BootstrapForest, #Profiler, #DesirabilityFunctions, #PredictionFormula -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj1 = dt << Bootstrap Forest(
		Y( :age ),
		X( :height, :weight, :sex ),
		Go,
		Profiler(
			1,
			Desirability Functions( 1 ), 
	
			:age << Category Desirability( {12, 0.35}, {13, 0.45}, {14, 0.65}, {15, 0.9}, {16, 0.2}, {17, 0.1} ),
			Term Value( height( 62.55 ), weight( 105 ), sex( "F" ) )
		)
	);
	rpt1 = obj1 << report;
	obj1 << Save Prediction Formula;
	d1 = Parse( Substr( rpt1["Prediction Profiler"][AxisBox( 2 )] << get text, 13 ) );
	obj2 = dt << Profiler(
		Y( :"Prob(age==12)"n, :"Prob(age==13)"n, :"Prob(age==14)"n, :"Prob(age==15)"n, :"Prob(age==16)"n, :"Prob(age==17)"n ),
		Profiler(
			1,
			Desirability Functions( 1 ),
			:age << Category Desirability( {12, 0.35}, {13, 0.45}, {14, 0.65}, {15, 0.9}, {16, 0.2}, {17, 0.1} ),
			Term Value( height( 62.55, Lock( 0 ), Show( 1 ) ), weight( 105, Lock( 0 ), Show( 1 ) ) )
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
3. Run Bootstrap Forest model.
4. Configure Profiler settings.
5. Define age category desirabilities.
6. Set term values for height, weight, and sex.
7. Generate first report.
8. Save prediction formula.
9. Extract prediction formula text.
10. Run second Profiler for probabilities.
11. Generate second report.
12. Extract probability formula text.
13. Close dataset without saving.



## Bootstrap Forest using Fit Group
> **Summary**: Runs the analysis and comparison of two data tables by creating new columns, running Bootstrap Forest models, and generating confusion matrix tables.

<!-- Keywords: #JMPScriptingLanguage, #BootstrapForest, #DataComparison, #ConfusionMatrix, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
objA = dt << Fit Group(
	Transform Column( "Lowercase[Meal]", Character, Formula( Lowercase( :Meal ) ) ),
	Transform Column( "Abs[Protein]", Formula( Abs( :Protein ) ) ),
	Transform Column( "Lowercase[Item Name]", Character, Formula( Lowercase( :Item Name ) ) ),
	Bootstrap Forest(
		:"Abs[Protein]"n,
		:"Lowercase[Meal]"n,
		Y( :"Lowercase[Meal]"n ),
		X( :"Abs[Protein]"n ),
		Method( "Bootstrap Forest" ),
		Portion Bootstrap( 1 ),
		Number Terms( 1 ),
		Number Trees( 100 ),
		Go
	),
	Bootstrap Forest(
		:"Abs[Protein]"n,
		:"Lowercase[Item Name]"n,
		Y( :"Lowercase[Item Name]"n ),
		X( :"Abs[Protein]"n ),
		Method( "Bootstrap Forest" ),
		Portion Bootstrap( 1 ),
		Number Terms( 1 ),
		Number Trees( 100 ),
		Go
	)
);
dta1 = Report( objA )["Overall Statistics", "Confusion Matrix", Table Box( 1 )] << Make Into Data Table;
dta2 = Report( objA )["Overall Statistics", "Confusion Matrix", Table Box( 2 )] << Make Into Data Table;
objB = objA << Redo Analysis;
dtb1 = Report( objB )["Overall Statistics", "Confusion Matrix", Table Box( 1 )] << Make Into Data Table;
dtb2 = Report( objB )["Overall Statistics", "Confusion Matrix", Table Box( 2 )] << Make Into Data Table;
ct = dta1 << Compare Data Tables(
	Compare with( dtb1 ),
	Compare table properties,
	Compare column attributes and properties,
	Compare data,
	Show difference summary,
	Show difference plot
);
ct << close window;
ct = dta2 << Compare Data Tables(
	Compare with( dtb2 ),
	Compare table properties,
	Compare column attributes and properties,
	Compare data,
	Show difference summary,
	Show difference plot
);
ct << close window;
Close( dta1, nosave );
Close( dta2, nosave );
Close( dtb1, nosave );
```

**Code Explanation**:

1. Open data table;
2. Create lowercase meal column.
3. Create absolute protein column.
4. Create lowercase item name column.
5. Run first Bootstrap Forest analysis.
6. Run second Bootstrap Forest analysis.
7. Extract first confusion matrix table.
8. Extract second confusion matrix table.
9. Redo analysis.
10. Extract new confusion matrix tables.



