# Gaussian Process

### Example 1
> **Summary**: Fits a Gaussian Process model to predict the 'Y' response variable using multiple predictor variables, including interactions between silica, sulfur, and silane in the provided data table.

<!-- Keywords: #GaussianProcess, #MultipleInteractions, #PredictiveModeling, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Gaussian Process(
	Y( :Y ),
	X( :X1, :X2 )
);
```

**Code Explanation**:

1. Open data table.
2. Define response variable.
3. Define predictor variables.
4. Fit Gaussian Process model.



### Example 2
> **Summary**: Fits a Gaussian Process model to predict CPU Time using Alpha, Beta, Gamma, Algorithm, and Compiler as predictors, with a block size of 50.

<!-- Keywords: #GaussianProcess, #PredictiveModeling, #JMPScriptingLanguage, #DataAnalysis, #MachineLearning -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Gaussian Process(
	Y( :CPU Time ),
	X(
		:Alpha, :Beta, :Gamma, :Algorithm,
		:Compiler
	),
	Set Correlation Function(
		"Gaussian"
	),
	Fast GASP( 1 ),
	Block Size( 50 )
);
```

**Code Explanation**:

1. Open data table.
2. Define model variables.
3. Set correlation function.
4. Enable fast GASP.
5. Specify block size.



### Example 3
> **Summary**: Creates a Gaussian Process model using Open() to load data and specifying Y(:Y) and X(:X1, :X2) variables.

<!-- Keywords: #GaussianProcess, #JSLScriptingLanguage, #DataModeling, #RegressionAnalysis, #MachineLearning -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Gaussian Process( Y( :Y ), X( :X1, :X2 ) );
```

**Code Explanation**:

1. Open data table.
2. Create Gaussian Process object.
3. Set Y variable to :Y.
4. Set X variables to :X1, :X2.



### Example 4
> **Summary**: Runs the creation and grouping of Gaussian Process objects with cubic correlation functions for jackknife predicted values, utilizing a new column 'Z' to differentiate between groups.

<!-- Keywords: #GaussianProcess, #JackknifePredictedValues, #CubicCorrelationFunction, #JSLScriptingLanguage, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = Gaussian Process( Y( :Y ), X( :X1, :X2 ), Set Correlation Function( "Cubic" ) );
obj1 << Save Jackknife Predicted Values;
dt << New Column( "Z", character );
For Each Row( :Z = "A" );
obj2 = Gaussian Process( Y( :Y ), X( :X1, :X2 ), Set Correlation Function( "Cubic" ), By( :Z ) );
obj2 << Save Jackknife Predicted Values;
```

**Code Explanation**:

1. Open data table.
2. Create Gaussian Process object.
3. Set correlation function to cubic.
4. Save Jackknife predicted values.
5. Add new column "Z".
6. Assign "A" to all rows in "Z".
7. Create another Gaussian Process object.
8. Set correlation function to cubic.
9. Group by column "Z".
10. Save Jackknife predicted values.



### Example 5
> **Summary**: Creates and saves jackknife predicted values for a Gaussian Process model, with conditional predictions based on a new column 'Z'.

<!-- Keywords: #GaussianProcess, #JackknifePredictedValues, #ConditionalPredictions, #JSLScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
ut relative epsilon = 1e-10;
dt = Open("data_table.jmp");
obj1 = Gaussian Process( Y( :Y ), X( :X1, :X2 ), Set Correlation Function( "Cubic" ) );
obj1 << Save Jackknife Predicted Values;
dt << New Column( "Z", character );
For Each Row( :Z = "A" );
obj2 = Gaussian Process( Y( :Y ), X( :X1, :X2 ), Set Correlation Function( "Cubic" ), By( :Z ) );
obj2 << Save Jackknife Predicted Values;
```

**Code Explanation**:

1. Set relative epsilon.
2. Open data table.
3. Create Gaussian Process object.
4. Save jackknife predicted values.
5. Add new column "Z".
6. Set all "Z" values to "A".
7. Create Gaussian Process object by "Z".
8. Save jackknife predicted values.



### Example 6
> **Summary**: Fits two Gaussian Process models with local data filters to analyze CPU time and filter compiler or algorithm variables.

<!-- Keywords: #GaussianProcess, #LocalDataFilter, #JSLScriptingLanguage, #ModelFitting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Gaussian_LDF = dt << Gaussian Process(
	Y( :CPU Time ),
	X( :Alpha, :Beta, :Gamma ),
	Set Correlation Function( "Gaussian" ),
	Fast GASP( 0 ),
	SendToReport( Dispatch( {}, "Model Report", OutlineBox, {Close( 1 )} ) )
);
Gaussian_LDF << Local Data Filter( Add Filter( columns( :Compiler ), Where( :Compiler == "A" ) ) );
text1 = (Report( Gaussian_LDF ) << Parent)[Outline Box( 1 )][Text Box( 1 )] << Get Text;
Gaussian_LDF << Close window;
Gaussian_LDF2 = dt << Gaussian Process(
	Y( :CPU Time ),
	X( :Alpha, :Beta, :Gamma ),
	Set Correlation Function( "Gaussian" ),
	Fast GASP( 0 ),
	SendToReport( Dispatch( {}, "Model Report", OutlineBox, {Close( 1 )} ) )
);
Gaussian_LDF2 << Local Data Filter(
	Add Filter( columns( :Algorithm ), Where( :Algorithm == "Greedy" ), Display( :Algorithm, N Items( 3 ), "List Display" ) )
);
text2 = (Report( Gaussian_LDF2 ) << Parent)[Outline Box( 1 )][Text Box( 1 )] << Get Text;
```

**Code Explanation**:

1. Open data table.
2. Run Gaussian Process model.
3. Set response variable.
4. Set predictor variables.
5. Choose Gaussian correlation function.
6. Disable Fast GASP.
7. Hide Model Report.
8. Add local data filter.
9. Filter Compiler column for "A".
10. Extract report text.
11. Close model window.
12. Repeat steps 2-10 for another model.
13. Filter Algorithm column for "Greedy".
14. Extract report text.



### Example 7
> **Summary**: Fits a Gaussian Process model to predict CPU Time based on Alpha, Beta, Gamma, Algorithm, and Compiler variables.

<!-- Keywords: #GaussianProcess, #PredictiveModeling, #JMPScriptingLanguage, #DataAnalysis, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Gaussian Process(
	Y( :CPU Time ),
	X( :Alpha, :Beta, :Gamma, :Algorithm, :Compiler ),
	Set Correlation Function( "Gaussian" ),
	Fast GASP( 1 ),
	Block Size( 50 )
);
obj << Save Prediction Formula( 1 );
obj << Save Variance Formula( 1 );
obj << Save Jackknife Predicted Values( 1 );
```

**Code Explanation**:

1. Open data table.
2. Fit Gaussian Process model.
3. Specify response variable.
4. Define predictor variables.
5. Set correlation function.
6. Enable Fast GASP.
7. Set block size.
8. Save prediction formula.
9. Save variance formula.
10. Save jackknife predicted values.



### Example 8
> **Summary**: Fits a Gaussian Process model to predict CPU Time using Alpha, Beta, Gamma, Algorithm, and Compiler as predictors, generating a report with -2*LogLikelihood and warnings.

<!-- Keywords: #GaussianProcess, #PredictiveModeling, #JMPScriptingLanguage, #DataAnalysis, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Gaussian Process(
	Y( :CPU Time ),
	X( :Alpha, :Beta, :Gamma, :Algorithm, :Compiler ),
	Set Correlation Function( "Gaussian" ),
	Fast GASP( 1 ),
	Block Size( 50 )
);
rpt = obj << report;
Neg2LL = (rpt[Outline Box( "Model Report" )][Number Col Box( "-2*LogLikelihood" )] << get as matrix)[1];
warning = rpt[Outline Box( "Model Report" )][Text Box( 2 )] << get text;
```

**Code Explanation**:

1. Open data table;
2. Define model parameters.
3. Apply Gaussian Process.
4. Generate report object.
5. Extract -2*LogLikelihood.
6. Retrieve warning message.



### Example 9
> **Summary**: Fits Gaussian Process models with and without Fast GASP to a data table, retrieving model reports and extracting relevant values and matrices.

<!-- Keywords: #GaussianProcess, #FastGASP, #JSLScriptingLanguage, #DataAnalysis, #ModelFitting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Gaussian Process( X( :X, :Y ), Y( :Z ), Estimate Nugget( 1 ), Fast GASP( 1 ) );
rpt1 = obj1 << report;
theta = rpt1[Outline Box( "Model Report" )][Number Col Box( "Theta" )] << get as matrix;
sigma2 = rpt1[Outline Box( "Model Report" )][Number Col Box( "œÉ¬≤" )] << get as matrix;
fast1 = rpt1[Outline Box( "Model Report" )][Table Box( 1 )] << get as matrix;
fast2 = rpt1[Outline Box( "Model Report" )][Table Box( 2 )] << get as matrix;
obj2 = dt << Gaussian Process( X( :X, :Y ), Y( :Z ), Estimate Nugget( 1 ) );
rpt2 = obj2 << report;
nonfast1 = rpt2[Outline Box( "Model Report" )][Table Box( 1 )] << get as matrix;
nonfast2 = rpt2[Outline Box( "Model Report" )][Table Box( 2 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Create Gaussian Process model with Fast GASP.
3. Retrieve Model Report.
4. Extract Theta value as matrix.
5. Extract œÉ¬≤ value as matrix.
6. Extract first Table Box data as matrix.
7. Extract second Table Box data as matrix.
8. Create Gaussian Process model without Fast GASP.
9. Retrieve Model Report.
10. Extract first Table Box data as matrix.
11. Extract second Table Box data as matrix.



### Example 10
> **Summary**: Creates and analyzes Gaussian Process models with cubic correlation function, saving Jackknife predicted values for multiple scenarios.

<!-- Keywords: #GaussianProcess, #JackknifePredictedValues, #CubicCorrelationFunction, #JSLScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = Gaussian Process( Y( :Y ), X( :X1, :X2 ), Set Correlation Function( "Cubic" ) );
obj1 << Save Jackknife Predicted Values;
expJPV = Column( "Y Jackknife Predicted Values" ) << get as matrix;
dt << New Column( "Z", character );
For Each Row( :Z = "A" );
obj2 = Gaussian Process( Y( :Y ), X( :X1, :X2 ), Set Correlation Function( "Cubic" ), By( :Z ) );
obj2 << Save Jackknife Predicted Values;
objJPV = Column( "Y Jackknife Predicted Values By Z" ) << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Create Gaussian Process model.
3. Set correlation function to cubic.
4. Save Jackknife predicted values.
5. Extract Jackknife predicted values.
6. Add new column "Z".
7. Set all "Z" values to "A".
8. Create Gaussian Process model by "Z".
9. Set correlation function to cubic.
10. Save Jackknife predicted values by "Z".



### Example 11
> **Summary**: Creates and analyzes Gaussian Process models with multiple interaction terms, utilizing a By Group feature to segment data by 'Z' values.

<!-- Keywords: #GaussianProcess, #ByGroup, #JMPScriptingLanguage, #DataAnalysis, #MachineLearning -->

**Code**:
```jsl
ut relative epsilon = 1e-10;
dt = Open("data_table.jmp");
obj1 = Gaussian Process( Y( :Y ), X( :X1, :X2 ), Set Correlation Function( "Cubic" ) );
obj1 << Save Jackknife Predicted Values;
expJPV = Column( "Y Jackknife Predicted Values" ) << get as matrix;
dt << New Column( "Z", character );
For Each Row( :Z = "A" );
obj2 = Gaussian Process( Y( :Y ), X( :X1, :X2 ), Set Correlation Function( "Cubic" ), By( :Z ) );
obj2 << Save Jackknife Predicted Values;
objJPV = Column( "Y Jackknife Predicted Values By Z" ) << get as matrix;
```

**Code Explanation**:

1. Define relative epsilon.
2. Open data table.
3. Create Gaussian Process model.
4. Save Jackknife Predicted Values.
5. Extract Jackknife Predicted Values.
6. Add new column "Z".
7. Set "Z" values to "A".
8. Create Gaussian Process model by "Z".
9. Save Jackknife Predicted Values.
10. Extract Jackknife Predicted Values by "Z".



## Gaussian Process using Model
> **Summary**: Opens a data table and defines a Gaussian Process model with multiple predictor variables, specifying the response variable Y.

<!-- Keywords: #JMPScriptingLanguage, #GaussianProcess, #PredictorVariables, #DataModeling, #StatisticalAnalysis -->

**Code**:
```jsl
// Model (GP from DOE)
// Open data table
dt = Open("data_table.jmp");
// Model (GP from DOE)
Gaussian Process(
	Y( :Y ),
	X(
		:log10 Rw, :log10 R, :Tu, :Tl,
		:Hu, :Hl, :L, :Kw
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define Gaussian Process model.
3. Set response variable Y.
4. Specify predictor variables X.
5. Include log10 Rw in predictors.
6. Include log10 R in predictors.
7. Include Tu in predictors.
8. Include Tl in predictors.
9. Include Hu in predictors.
10. Include Hl in predictors.
11. Include L in predictors.
12. Include Kw in predictors.



## Gaussian Process using Partition
> **Summary**: Creates three partition objects based on different combinations of variables, and then generates a Gaussian Process object using the Text Explorer platform.

<!-- Keywords: #JSLScriptingLanguage, #TextExplorer, #PartitionObjects, #GaussianProcess, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
obj1 = Partition( Y( :weight ), X( :sex ), By( :age ) );
obj2 = Partition( Y( :weight ), X( :sex ), By( :age ) );
obj3 = Partition( Y( :weight ), X( :height, :sex ), By( :age ) );
dt = Open("data_table.jmp");
dt << New Column( "_bycol", Character, Nominal, set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ) );
obj = dt << Gaussian Process( Y( :Y ), X( :X1, :X2 ), By( _bycol ) );
```

**Code Explanation**:

1. Open data table;
2. Create partition object 1.
3. Create partition object 2.
4. Create partition object 3.
5. Open data table;
6. Add new column "_bycol".
7. Assign values to "_bycol".
8. Create Gaussian Process object.



## Gaussian Process using New Column
### Example 1
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot to visualize the results.

<!-- Keywords: #GaussianProcess, #ProfilerPlot, #LeastSquaresModel, #MultipleEffects, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "AllMissing" );
obj = Gaussian Process(
	Y( :AllMissing ),
	X( :X1, :X2 ),
	Profiler( 1, Confidence Intervals( 1 ), Desirability Functions( 0 ) ),
	Estimate Nugget( 1 ),
	Set Correlation Function( "Cubic" )
);
validRef = Is Scriptable( obj );
```

**Code Explanation**:

1. Open data table.
2. Create new column.
3. Define Gaussian Process model.
4. Set response variable.
5. Set predictor variables.
6. Enable profiler.
7. Include confidence intervals.
8. Disable desirability functions.
9. Estimate nugget effect.
10. Set correlation function.



### Example 2
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot using Gaussian Process in JMP.

<!-- Keywords: #JMPScriptingLanguage, #GaussianProcess, #ProfilerPlot, #LeastSquaresModel, #MultipleEffects -->

**Code**:
```jsl
ut relative epsilon = 1e-10;
dt = Open("data_table.jmp");
dt << New Column( "AllMissing" );
obj = Gaussian Process(
	Y( :AllMissing ),
	X( :X1, :X2 ),
	Profiler( 1, Confidence Intervals( 1 ), Desirability Functions( 0 ) ),
	Estimate Nugget( 1 ),
	Set Correlation Function( "Cubic" )
);
validRef = Is Scriptable( obj );
```

**Code Explanation**:

1. Define relative epsilon.
2. Open data table.
3. Add new column "AllMissing".
4. Create Gaussian Process object.
5. Specify Y as "AllMissing".
6. Specify X as :X1, :X2.
7. Enable Profiler with confidence intervals.
8. Disable desirability functions.
9. Estimate nugget parameter.
10. Set correlation function to "Cubic".



### Example 3
> **Summary**: Fits a Gaussian Process model to predict Z2 values based on X and Y predictors, with interactive features for report generation.

<!-- Keywords: #GaussianProcess, #PredictiveModeling, #JMPScriptingLanguage, #DataAnalysis, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Z2", numeric, continuous, formula( :Z * 10 ) );
obj1 = dt << Gaussian Process(
	X( :X, :Y ),
	Y( :Z2 ),
	Estimate Nugget( 1 ),
	Fast GASP( 1 ),
	Correlation Type( "Gaussian" ),
	Set Minimum Theta( 0.0008 )
);
rpt1 = obj1 << report;
theta = rpt1[Outline Box( "Model Report" )][Number Col Box( "Theta" )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Create new column "Z2".
3. Fit Gaussian Process model.
4. Specify predictors X and Y.
5. Use Z2 as response variable.
6. Estimate nugget parameter.
7. Enable Fast GASP method.
8. Set correlation type to Gaussian.
9. Define minimum theta value.
10. Retrieve model report.



## Gaussian Process using If
### Example 1
> **Summary**: Estimates and reports Gaussian Process models with Fast GASP and non-Fast GASP, utilizing data from a JMP data table.

<!-- Keywords: #GaussianProcess, #FastGASP, #JMPScriptingLanguage, #DataAnalysis, #ModelEstimation -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	b theta = [0.0016, 0.0007];
	b sigma2 = [6.72];
	dt = Open("data_table.jmp");
	obj1 = dt << Gaussian Process( X( :X, :Y ), Y( :Z ), Estimate Nugget( 1 ), Fast GASP( 1 ) );
	rpt1 = obj1 << report;
	theta = rpt1[Outline Box( "Model Report" )][Number Col Box( "Theta" )] << get as matrix;
	sigma2 = rpt1[Outline Box( "Model Report" )][Number Col Box( "œÉ¬≤" )] << get as matrix;
	fast1 = rpt1[Outline Box( "Model Report" )][Table Box( 1 )] << get as matrix;
	fast2 = rpt1[Outline Box( "Model Report" )][Table Box( 2 )] << get as matrix;
	obj2 = dt << Gaussian Process( X( :X, :Y ), Y( :Z ), Estimate Nugget( 1 ) );
	rpt2 = obj2 << report;
	nonfast1 = rpt2[Outline Box( "Model Report" )][Table Box( 1 )] << get as matrix;
	nonfast2 = rpt2[Outline Box( "Model Report" )][Table Box( 2 )] << get as matrix;
	Close( dt, no save );
);
If( Contains( JMP Product Name(), "Pro" ),
	b theta = [0.0016, 0.0008];
	Random Reset( 4785 );
	dt = Open("data_table.jmp");
	dt << New Column( "Z2", numeric, continuous, formula( :Z * 10 ) );
	obj1 = dt << Gaussian Process(
		X( :X, :Y ),
		Y( :Z2 ),
		Estimate Nugget( 1 ),
		Fast GASP( 1 ),
		Correlation Type( "Gaussian" ),
		Set Minimum Theta( 0.0008 )
	);
	rpt1 = obj1 << report;
	theta = rpt1[Outline Box( "Model Report" )][Number Col Box( "Theta" )] << get as matrix;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro.
2. Set b theta values.
3. Set b sigma2 values.
4. Open data_table data
5. Run Gaussian Process with Fast GASP.
6. Extract model report.
7. Retrieve Theta values.
8. Retrieve œÉ¬≤ values.
9. Retrieve Fast GASP tables.
10. Run Gaussian Process without Fast GASP.
11. Extract model report.
12. Retrieve non-Fast GASP tables.
13. Close data table.
14. Check if JMP Pro again.
15. Set new b theta values.
16. Reset random seed.
17. Open data_table data
18. Create new column Z2.
19. Run Gaussian Process with Fast GASP.
20. Extract model report.
21. Retrieve Theta values.
22. Close data table.



### Example 2
> **Summary**: Executes a Gaussian Process model with profiler to predict CPU time, utilizing data from a JMP data table and configuring input values for new rows.

<!-- Keywords: #JMPScriptingLanguage, #GaussianProcessModel, #Profiler, #DataTableManipulation, #PredictiveAnalytics -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	Random Reset( 123 );
	obj1 = dt << Gaussian Process(
		Y( :CPU Time ),
		X( :Alpha, :Beta, :Gamma, :Algorithm, :Compiler ),
		Set Correlation Function( "Gaussian" ),
		Fast GASP( 1 ),
		Block Size( 50 )
	);
	obj1 << Save Prediction Formula( 1 );
	obj1 << Save Variance Formula( 1 );
	obj1 << Save Jackknife Predicted Values( 1 );
	Close( dt, no save );
);
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	Random Reset( 82727 );
	obj = dt << Gaussian Process(
		Y( :CPU Time ),
		X( :Alpha, :Beta, :Gamma, :Algorithm, :Compiler ),
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				Alpha( 0.42, Min( -1 ), Max( 1 ), Lock( 0 ), Show( 1 ) ),
				Beta( 0.6, Min( -1 ), Max( 1 ), Lock( 0 ), Show( 1 ) ),
				Gamma( 0.52, Min( -1 ), Max( 1 ), Lock( 0 ), Show( 1 ) ),
				Algorithm( "Greedy", Lock( 0 ), Show( 1 ) ),
				Compiler( "B", Lock( 0 ), Show( 1 ) )
			)
		),
		Set Correlation Function( "Gaussian" ),
		Fast GASP( 1 ),
		Block Size( 50 )
	);
	obj << Save Prediction Formula( 1 );
	rpt = obj << report;
	dt << Add row( 1 );
	dt:Alpha[51] = 0.42;
	dt:Beta[51] = 0.6;
	dt:Gamma[51] = 0.52;
	dt:Algorithm[51] = "Greedy";
	dt:Compiler[51] = "B";
	pred1 = rpt[Outline Box( "Prediction Profiler" )][AxisBox( 1 )][Text Box( 2 )] << get text;
	pred2 = (dt:CPU Time Prediction Formula << get values)[51];
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro.
2. Open data table.
3. Reset random seed.
4. Run Gaussian Process model.
5. Save prediction formula.
6. Save variance formula.
7. Save jackknife predicted values.
8. Close data table.
9. Check if JMP Pro again.
10. Open data table.
11. Reset random seed.
12. Run Gaussian Process model with profiler.
13. Save prediction formula.
14. Get report.
15. Add new row to data table.
16. Set input values for new row.
17. Get prediction from profiler.
18. Get prediction from formula.
19. Close data table.



### Example 3
> **Summary**: Analyze a data table using Gaussian Process modeling, specifying response and predictor variables, and generating a report.

<!-- Keywords: #JMPScriptingLanguage, #GaussianProcess, #DataAnalysis, #PredictiveModeling, #ReportGeneration -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	Random Reset( 1500 );
	dt = Open("data_table.jmp");
	dt:Compiler[46 :: 50] = "";
	Random Reset( 1500 );
	obj1 = dt << Gaussian Process(
		Y( :CPU Time ),
		X( :Alpha, :Beta, :Gamma, :Algorithm, :Compiler ),
		Set Correlation Function( "Gaussian" ),
		Fast GASP( 1 ),
		Block Size( 50 )
	);
	rpt1 = obj1 << report;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Reset random seed.
3. Open data table.
4. Clear specific cells.
5. Reset random seed again.
6. Run Gaussian Process model.
7. Specify response variable.
8. Define predictor variables.
9. Set correlation function.
10. Configure Fast GASP.
11. Set block size.
12. Generate report.
13. Close data table without saving.



## Gaussian Process using Random Reset
> **Summary**: Runs the definition and execution of a Gaussian Process model to analyze CPU time data, utilizing predictor variables Alpha, Beta, Gamma, Algorithm, and Compiler.

<!-- Keywords: #GaussianProcess, #PredictiveModeling, #JMPScriptingLanguage, #DataAnalysis, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Compiler[46 :: 50] = "";
Random Reset( 1500 );
obj1 = dt << Gaussian Process(
	Y( :CPU Time ),
	X( :Alpha, :Beta, :Gamma, :Algorithm, :Compiler ),
	Set Correlation Function( "Gaussian" ),
	Fast GASP( 1 ),
	Block Size( 50 )
);
rpt1 = obj1 << report;
```

**Code Explanation**:

1. Open data table.
2. Clear compiler data.
3. Reset random seed.
4. Define Gaussian Process model.
5. Specify response variable.
6. Specify predictor variables.
7. Set correlation function.
8. Enable fast GASP.
9. Set block size.
10. Generate report.



