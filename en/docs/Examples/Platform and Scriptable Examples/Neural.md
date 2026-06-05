# Neural

### Example 1
> **Summary**: Opens a data table, defines a neural network model with a binary response variable and multiple predictor variables, specifies validation and missing value handling, sets a random seed, and fits the model using NTanH activation function.

<!-- Keywords: #NeuralNetwork, #BinaryResponseVariable, #PredictorVariables, #Validation, #MissingValueHandling -->

**Code**:
```jsl
// Neural of Y Binary
// Open data table
dt = Open("data_table.jmp");
// Neural of Y Binary
Neural(
	Y( :Y Binary ),
	X(
		:Age, :Gender, :BMI, :BP,
		:Total Cholesterol, :LDL, :HDL,
		:TCH, :LTG, :Glucose
	),
	Validation( :Validation ),
	Informative Missing( 0 ),
	Set Random Seed( 1234 ),
	Fit( NTanH( 3 ) )
);
```

**Code Explanation**:

1. Open data table.
2. Define neural network model.
3. Specify binary response variable.
4. List predictor variables.
5. Use validation column.
6. Handle missing values.
7. Set random seed.
8. Fit neural network.
9. Use NTanH activation function.
10. Specify 3 hidden layers.



### Example 2
> **Summary**: Generates a neural network analysis to predict HARDNESS based on ABRASION, MODULUS, ELONG, and SILICA, SILANE, SULFUR predictor variables in the data table.

<!-- Keywords: #NeuralNetwork, #PredictiveModeling, #DataAnalysis, #JMPScriptingLanguage, #MachineLearning -->

**Code**:
```jsl
// Neural
// Open data table
dt = Open("data_table.jmp");
// Neural
Neural(
	Y(
		:ABRASION, :MODULUS, :ELONG,
		:HARDNESS
	),
	X( :SILICA, :SILANE, :SULFUR ),
	Informative Missing( 0 ),
	Validation Method(
		"Holdback", 0.3333
	),
	Go,
	Profiler( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Define response variables.
3. Define predictor variables.
4. Set missing data handling.
5. Specify validation method.
6. Run neural network analysis.
7. Generate profiler.



### Example 3
> **Summary**: Generates a neural network analysis to predict ABRASION, MODULUS, ELONG, and HARDNESS using SILICA, SILANE, and SULFUR as predictor variables, with Holdback validation method and NTanH(3) fit.

<!-- Keywords: #NeuralNetwork, #PredictiveModeling, #HoldbackValidation, #NTanH, #JMPScripting -->

**Code**:
```jsl
Open("data_table.jmp");
Neural(
	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),
	X( :SILICA, :SILANE, :SULFUR ),
	Validation Method( "Holdback", 0.3333 ),
	Fit(
		NTanH( 3 ),
		Profiler(
			1,
			ABRASION << Response Limits(
				{Lower( 100, 0.066 ), Middle( 150, 0.5 ), Upper( 200, 0.9819 ), Goal( "Maximize" ), Importance( 0.25 )}
			),
			MODULUS << Response Limits(
				{Lower( 1000, 0.066 ), Middle( 1500, 0.5 ), Upper( 2000, 0.9819 ), Goal( "Maximize" ), Importance( 0.25 )}
			),
			ELONG << Response Limits(
				{Lower( 450, 0.0183 ), Middle( 500, 1 ), Upper( 550, 0.0183 ), Goal( "Match Target" ), Importance( 0.25 )}
			),
			HARDNESS << Response Limits(
				{Lower( 65, 0.0183 ), Middle( 67.5, 1 ), Upper( 70, 0.0183 ), Goal( "Match Target" ), Importance( 0.25 )}
			),
			Term Value( SILICA( 1.2, Lock( 0 ), Show( 1 ) ), SILANE( 50, Lock( 0 ), Show( 1 ) ), SULFUR( 2.3, Lock( 0 ), Show( 1 ) ) )
		),
		Plot Actual by Predicted( 1 )
	),
	SendToReport(
		Dispatch( {"Model NTanH(3)"}, "Training", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Model NTanH(3)"}, "Validation", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Model NTanH(3)", "Actual by Predicted Plot"}, "Neural Model Report", FrameBox,
			{Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 0 ),
				Index Row( 9 ),
				UniqueID( 1121111184 ),
				FoundPt( {350, 308} ),
				Origin( {166.292134831461, 152} ),
				Offset( {-1, 62} ),
				Tag Line( 1 )
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Run Neural network analysis.
3. Set response variables.
4. Define predictor variables.
5. Use Holdback validation method.
6. Fit model with NTanH(3).
7. Configure Profiler settings.
8. Set response limits for ABRASION.
9. Set response limits for MODULUS.
10. Set response limits for ELONG.
11. Set response limits for HARDNESS.
12. Set initial term values.
13. Generate Actual by Predicted plot.
14. Close Training report.
15. Close Validation report.
16. Add pin annotation to Actual by Predicted plot.



### Example 4
> **Summary**: Generates a neural network analysis to predict body fat percentage using demographic and anthropometric variables, with profiler settings for confidence intervals and term locking.

<!-- Keywords: #NeuralNetwork, #PredictiveModeling, #Profiler, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Neural(
	Y( :Percent body fat ),
	X(
		:Name( "Age (years)" ), :Name( "Weight (lbs)" ), :Name( "Height (inches)" ), :Name( "Neck circumference (cm)" ),
		:Name( "Chest circumference (cm)" ), :Name( "Abdomen circumference (cm)" ), :Name( "Hip circumference (cm)" ),
		:Name( "Thigh circumference (cm)" ), :Name( "Knee circumference (cm)" ), :Name( "Ankle circumference (cm)" ),
		:Name( "Biceps (extended) circumference (cm)" ), :Name( "Forearm circumference (cm)" ), :Name( "Wrist circumference (cm)" )
	),
	set random seed( 47 ),
	Validation( :Validation ),
	Missing Value Coding( 1 ),
	Transform Covariates( 1 ),
	Fit(
		NTanH( 4 ),
		NTanH2( 8 ),
		Transform Covariates( 1 ),
		Robust Fit( 1 ),
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				Name( "Age (years)" )(44.885, Lock( 0 ), Show( 1 )),
				Name( "Weight (lbs)" )(178.92, Lock( 0 ), Show( 1 )),
				Name( "Height (inches)" )(70.149, Lock( 0 ), Show( 1 )),
				Name( "Neck circumference (cm)" )(37.992, Lock( 0 ), Show( 1 )),
				Name( "Chest circumference (cm)" )(100.824, Lock( 0 ), Show( 1 )),
				Name( "Abdomen circumference (cm)" )(92.556, Lock( 0 ), Show( 1 )),
				Name( "Hip circumference (cm)" )(99.905, Lock( 0 ), Show( 1 )),
				Name( "Thigh circumference (cm)" )(59.406, Lock( 0 ), Show( 1 )),
				Name( "Knee circumference (cm)" )(38.59, Lock( 0 ), Show( 1 )),
				Name( "Ankle circumference (cm)" )(23.102, Lock( 0 ), Show( 1 )),
				Name( "Biceps (extended) circumference (cm)" )(32.273, Lock( 0 ), Show( 1 )),
				Name( "Forearm circumference (cm)" )(28.664, Lock( 0 ), Show( 1 )),
				Name( "Wrist circumference (cm)" )(18.2298, Lock( 0 ), Show( 1 ))
			)
		),
		Plot Actual by Predicted( 1 )
	),
	SendToReport( Dispatch( {}, "Neural", OutlineBox, {Set Title( "Model NTanH(4)NTanH2(8): Profiler, Plot Actual by Predicted" )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Define neural network model.
3. Set response variable.
4. Define predictor variables.
5. Set random seed.
6. Specify validation column.
7. Enable missing value coding.
8. Transform covariates.
9. Fit neural network model.
10. Configure profiler settings.



### Example 5
> **Summary**: Creates a neural network model to predict percent body fat using multiple predictor variables, including demographics and anthropometric measurements, with validation, missing value handling, and robust fitting.

<!-- Keywords: #NeuralNetwork, #PredictiveModeling, #JMPScriptingLanguage, #DataAnalysis, #MachineLearning -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Neural(
	Y( :Percent body fat ),
	X(
		:Name( "Age (years)" ), :Name( "Weight (lbs)" ), :Name( "Height (inches)" ), :Name( "Neck circumference (cm)" ),
		:Name( "Chest circumference (cm)" ), :Name( "Abdomen circumference (cm)" ), :Name( "Hip circumference (cm)" ),
		:Name( "Thigh circumference (cm)" ), :Name( "Knee circumference (cm)" ), :Name( "Ankle circumference (cm)" ),
		:Name( "Biceps (extended) circumference (cm)" ), :Name( "Forearm circumference (cm)" ), :Name( "Wrist circumference (cm)" )
	),
	Validation( :Validation ),
	Missing Value Coding( 1 ),
	Transform Covariates( 1 ),
	Fit(
		NTanH( 4 ),
		NTanH2( 8 ),
		Transform Covariates( 1 ),
		Robust Fit( 1 ),
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				Name( "Age (years)" )(44.885, Lock( 0 ), Show( 1 )),
				Name( "Weight (lbs)" )(178.92, Lock( 0 ), Show( 1 )),
				Name( "Height (inches)" )(70.149, Lock( 0 ), Show( 1 )),
				Name( "Neck circumference (cm)" )(37.992, Lock( 0 ), Show( 1 )),
				Name( "Chest circumference (cm)" )(100.824, Lock( 0 ), Show( 1 )),
				Name( "Abdomen circumference (cm)" )(92.556, Lock( 0 ), Show( 1 )),
				Name( "Hip circumference (cm)" )(99.905, Lock( 0 ), Show( 1 )),
				Name( "Thigh circumference (cm)" )(59.406, Lock( 0 ), Show( 1 )),
				Name( "Knee circumference (cm)" )(38.59, Lock( 0 ), Show( 1 )),
				Name( "Ankle circumference (cm)" )(23.102, Lock( 0 ), Show( 1 )),
				Name( "Biceps (extended) circumference (cm)" )(32.273, Lock( 0 ), Show( 1 )),
				Name( "Forearm circumference (cm)" )(28.664, Lock( 0 ), Show( 1 )),
				Name( "Wrist circumference (cm)" )(18.2298, Lock( 0 ), Show( 1 ))
			)
		),
		Plot Actual by Predicted( 1 )
	),
	SendToReport( Dispatch( {}, "Neural", OutlineBox, {Set Title( "Model NTanH(4)NTanH2(8): Profiler, Plot Actual by Predicted" )} ) )
);
```

**Code Explanation**:

1. Open table.
2. Define neural network model.
3. Set response variable.
4. Specify predictor variables.
5. Use validation column.
6. Handle missing values.
7. Transform covariates.
8. Fit neural network.
9. Configure NTanH activation.
10. Configure NTanH2 activation.
11. Transform covariates again.
12. Enable robust fitting.
13. Create profiler.
14. Display confidence intervals.
15. Set term values.
16. Plot actual vs. predicted.
17. Rename report title.



### Example 6
> **Summary**: Creates and configures a neural network model to predict height based on sex, utilizing holdback validation method and NTanH activation function.

<!-- Keywords: #NeuralNetwork, #PredictiveModeling, #HoldbackValidation, #NTanHActivationFunction, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Neural(
	Y( :height ),
	X( :sex ),
	Informative Missing( 0 ),
	Validation Method( "Holdback", 0.3333 ),
	Fit( NTanH( 3 ) ),
	Set Random Seed( 1 )
);
obj << save formulas;
mp1 = obj << Publish Prediction Formula;
mp1 << Copy Formula as function;
code = Get Clipboard();
```

**Code Explanation**:

1. Open data table.
2. Create neural network model.
3. Set response variable.
4. Add predictor variable.
5. Disable informative missing handling.
6. Use holdback validation method.
7. Specify NTanH activation function.
8. Set random seed for reproducibility.
9. Save prediction formulas.
10. Publish prediction formula.



### Example 7
> **Summary**: Generates a neural network analysis to identify significant factors affecting log life in the Weld-Repaired Castings dataset, generating reports and visualizing results through contour and surface profilers.

<!-- Keywords: #NeuralNetwork, #DataAnalysis, #Visualization, #JMPScriptingLanguage, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nn = Neural( Y( :ABRASION ), X( :SILICA ) );
rpt = Report( nn );
rpt[Button Box( 1 )] << Click;
spex = Try(
	rpt["Response Grid Slider"];
	1;
,
	0
);
nn << Contour Profiler;
nn << Surface Profiler;
spex = Try(
	rpt["Response Grid Slider"];
	1;
,
	0
);
nn << close window;
Delete Symbols( rpt, cpex, spex, nn );
nn = Neural( Y( :ABRASION ), X( :SILICA, :SILANE ) );
rpt = Report( nn );
rpt[Button Box( 1 )] << Click;
spex = Try(
	rpt["Response Grid Slider"];
	1;
,
	0
);
nn << Contour Profiler;
nn << Surface Profiler;
spex = Try(
	rpt["Response Grid Slider"];
	1;
,
	0
);
nn << close window;
Delete Symbols( rpt, cpex, spex, nn );
nn = Neural( Y( :ABRASION ), X( :SILICA, :SILANE, :SULFUR ) );
rpt = Report( nn );
rpt[Button Box( 1 )] << Click;
spex = Try(
	rpt["Response Grid Slider"];
	1;
,
	0
);
nn << Contour Profiler;
nn << Surface Profiler;
spex = Try(
	rpt["Response Grid Slider"];
	1;
,
	0
);
nn << close window;
Delete Symbols( rpt, cpex, spex, nn );
```

**Code Explanation**:

1. Open data table;
2. Create neural network model.
3. Generate report.
4. Click first button box.
5. Check for response grid slider.
6. Open contour profiler.
7. Open surface profiler.
8. Check for response grid slider again.
9. Close neural network window.
10. Delete symbols.
11. Repeat steps 2-10 with additional predictors.



### Example 8
> **Summary**: Creates and configures a neural network model to predict sex based on height and weight, with interactive profiling capabilities.

<!-- Keywords: #NeuralNetwork, #PredictiveModeling, #InteractiveProfiling, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nn = Neural(
	Y( :sex ),
	X( :height, :weight ),
	Missing Value Coding( 0 ),
	Fit( NTanH( 3 ), Profiler( 1, Set to Data in Row( 1 ) ) ),
	set random seed( 123456789 )
);
rpt = Report( nn );
expval = (dt:height << Get Values)[1] || (dt:weight << Get Values)[1];
actval = rpt[Outline Box( "Prediction Profiler" )][Number Edit Box( 1 )] << Get;
actval ||= rpt[Outline Box( "Prediction Profiler" )][Number Edit Box( 2 )] << Get;
expval = (dt:height << Get Values)[20] || (dt:weight << Get Values)[20];
actval = rpt[Outline Box( "Prediction Profiler" )][Number Edit Box( 1 )] << Get;
actval ||= rpt[Outline Box( "Prediction Profiler" )][Number Edit Box( 2 )] << Get;
expval = [50.25 165];
rpt[Outline Box( "Prediction Profiler" )][Number Edit Box( 1 )] << Set( expval[1] );
rpt[Outline Box( "Prediction Profiler" )][Number Edit Box( 2 )] << Set( expval[2] );
actval = rpt[Outline Box( "Prediction Profiler" )][Number Edit Box( 1 )] << Get;
actval ||= rpt[Outline Box( "Prediction Profiler" )][Number Edit Box( 2 )] << Get;
```

**Code Explanation**:

1. Open data table;
2. Create neural network model.
3. Set response variable to sex.
4. Include height and weight as predictors.
5. Use tanh activation function with 3 neurons.
6. Enable profiler and set initial values from row 1.
7. Set random seed for reproducibility.
8. Generate report from model.
9. Retrieve first data point's height and weight.
10. Get predicted value from profiler for first data point.
11. Retrieve 20th data point's height and weight.
12. Get predicted value from profiler for 20th data point.
13. Set custom input values (50.25, 165).
14. Update profiler with new input values.
15. Get predicted value from profiler for custom input.



### Example 9
> **Summary**: Fits a neural network model to predict log life in weld-repaired castings, generating reports for validation and training, and extracting key metrics such as Generalized R* and -LogLikelihood.

<!-- Keywords: #NeuralNetwork, #JMPScriptingLanguage, #DataAnalysis, #PredictiveModeling, #ValidationMetrics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nn = Neural( Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ), X( :SILICA, :SILANE, :SULFUR ), Missing Value Coding( 0 ), Fit( NTanH( 3 ) ) );
befAA = Associative Array( Window() << get window title );
nn << Make SAS Data Step;
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
Window( (aftlst = aftAA << get keys)[1] ) << close window( 1 );
rpt = Report( nn );
ls1 = rpt[Outline Box( "Validation" )][String Col Box( 2 )] << Get;
ls2 = rpt[Outline Box( "Training" )][String Col Box( 4 )] << Get;
grs = Try( preorder2( rpt, {"Generalized R*"} )[1], [] );
nll = Try( preorder2( rpt, {"-LogLikelihood"} )[1], [] );
isPro = 1;
If( isPro,
	dt << New Column( "val", Numeric, Continuous, Set Values( J( N Rows( dt ), 1, Random Integer( 1, 3 ) ) ) );
	n2 = Neural( Y( :ABRASION, :MODULUS ), X( :SILICA, :SILANE, :SULFUR ), Fit( NTanh( 5 ) ), Validation( :val ) );
	rpt = Report( n2 );
	grs = Try( preorder2( rpt, {"Generalized R*"} )[1], [] );
	nll = Try( preorder2( rpt, {"-LogLikelihood"} )[1], [] );
);
```

**Code Explanation**:

1. Open data table;
2. Fit neural network model.
3. Store initial window titles.
4. Generate SAS data step.
5. Store updated window titles.
6. Close unnecessary windows.
7. Extract validation report.
8. Extract training report.
9. Try extracting Generalized R*.
10. Try extracting -LogLikelihood.



### Example 10
> **Summary**: Create and evaluate a neural network model to predict species based on sepal length, sepal width, petal length, and petal width, utilizing Missing Value Coding and NTanH activation function.

<!-- Keywords: #NeuralNetwork, #MissingValueCoding, #NTanHActivationFunction, #JMPScriptingLanguage, #DataScience -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Neural( Y( :Species ), X( :Sepal length, :Sepal width, :Petal length, :Petal width ), Missing Value Coding( 0 ), Fit( NTanH( 3 ) ) );
rpt = Report( obj );
trn = Contains( rpt[Outline Box( "Training" )][String Col Box( 1 )] << get, "-LogLikelihood" ) > 0;
val = Contains( rpt[Outline Box( "Validation" )][String Col Box( 1 )] << get, "-LogLikelihood" ) > 0;
obj << Local Data Filter;
```

**Code Explanation**:

1. Open data table;
2. Create neural network model.
3. Set response variable.
4. Specify predictor variables.
5. Handle missing values.
6. Choose activation function.
7. Generate model report.
8. Check training log-likelihood.
9. Check validation log-likelihood.
10. Add local data filter.



### Example 11
> **Summary**: Fits a neural network model to predict weight based on height and age, with profiler report generation.

<!-- Keywords: #NeuralNetwork, #Profiler, #RegressionAnalysis, #PredictiveModeling, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
o2 = dt << Neural( Y( :weight ), X( :height, :age ), Fit( NTanH( 1 ), Go ) );
o2 << (Fit[1] << Profiler( 1, Independent Uniform Inputs( 1 ), Independent Resampled Inputs( 1 ), Dependent Resampled Inputs( 1 ) ));
```

**Code Explanation**:

1. Open data table;
2. Fit neural network model.
3. Set response variable: weight.
4. Include predictors: height, age.
5. Use NTanH activation function.
6. Start fitting process.
7. Access first fit object.
8. Generate profiler report.
9. Enable independent uniform inputs.
10. Enable independent resampled inputs.
11. Enable dependent resampled inputs.



### Example 12
> **Summary**: Generates a neural network analysis to predict weight based on height and sex, utilizing holdback validation and profile formulas.

<!-- Keywords: #NeuralNetwork, #PredictiveModeling, #DataAnalysis, #JMPScriptingLanguage, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
(dt:sex)[1] = "";
obj1 = dt << Neural(
	Y( :weight ),
	X( :height, :sex ),
	Missing Value Coding( 1 ),
	Validation Method( "Holdback", 0.3333 ),
	Fit( NTanH( 1 ), Profiler( 1 ) ), 
);
col1 = obj1 << Save Profile Formulas;
obj1 << (Fit[1] << Profiler( Dependent Resampled Inputs( 1 ) ));
col2 = obj1 << Save Profile Formulas;
```

**Code Explanation**:

1. Open data table.
2. Modify first sex value.
3. Launch Neural platform.
4. Set weight as response.
5. Include height and sex as predictors.
6. Use missing value coding.
7. Apply holdback validation method.
8. Fit neural network model.
9. Save profile formulas.
10. Enable profiler for fit.
11. Save updated profile formulas.



### Example 13
> **Summary**: Creates and fits a neural network model using KFold validation to predict ABRASION, MODULUS, ELONG, and HARDNESS based on SILICA, SILANE, and SULFUR.

<!-- Keywords: #NeuralNetwork, #KFoldValidation, #PredictiveModeling, #DataScience, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Neural( Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ), X( :SILICA, :SILANE, :SULFUR ), Validation Method( "KFold", 7 ), Go );
s = dt << Select All Rows;
s << Delete Rows;
obj << (Fit[1] << Save Valiation( 1 ));
```

**Code Explanation**:

1. Open data table;
2. Create neural network model.
3. Set predictors: SILICA, SILANE, SULFUR.
4. Set responses: ABRASION, MODULUS, ELONG, HARDNESS.
5. Use KFold validation with 7 folds.
6. Fit the neural network model.
7. Select all rows in dataset.
8. Delete all selected rows.
9. Save validation results for first fit.
10. Close script.



### Example 14
> **Summary**: Generates a neural network model to predict ABRASION, MODULUS, ELONG, and HARDNESS using SILICA, SILANE, and SULFUR as predictor variables, with KFold validation and profile formula saving.

<!-- Keywords: #NeuralNetwork, #KFoldValidation, #ProfileFormulas, #PredictiveModeling, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Neural( Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ), X( :SILICA, :SILANE, :SULFUR ), Validation Method( "KFold", 7 ), Go );
s = dt << Select All Rows;
s << Delete Rows;
obj << (Fit[1] << Save Profile Formulas( 1 ));
```

**Code Explanation**:

1. Open data table;
2. Create neural network model.
3. Set response variables.
4. Set predictor variables.
5. Use KFold validation with 7 folds.
6. Run the model.
7. Select all rows in dataset.
8. Delete all rows from dataset.
9. Save profile formulas for first fit.
10. Close script.



### Example 15
> **Summary**: Create and train a neural network model using the Weld-Repaired Castings dataset, with KFold validation and fast formula saving.

<!-- Keywords: #NeuralNetwork, #KFoldValidation, #DataPreprocessing, #JMPScriptingLanguage, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Neural( Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ), X( :SILICA, :SILANE, :SULFUR ), Validation Method( "KFold", 7 ), Go );
s = dt << Select All Rows;
s << Delete Rows;
obj << (Fit[1] << Save Fast Formulas( 1 ));
```

**Code Explanation**:

1. Open data table;
2. Create neural network model.
3. Set response variables.
4. Set predictor variables.
5. Use KFold validation with 7 folds.
6. Run the model.
7. Select all rows in dataset.
8. Delete all rows from dataset.
9. Save fast formulas for first fit.
10. Save formulas to dataset.



### Example 16
> **Summary**: Generates a neural network analysis to identify significant factors affecting log life in the Weld-Repaired Castings dataset, utilizing KFold validation and transforming covariates.

<!-- Keywords: #NeuralNetwork, #KFoldValidation, #CovariateTransformation, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Neural(
	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),
	X( :SILICA, :SILANE, :SULFUR ),
	Validation Method( "KFold", 7 ),
	Transform Covariates( 1 )
);
s = dt << Select All Rows;
s << Delete Rows;
Log Capture( obj << Go );
```

**Code Explanation**:

1. Open data table;
2. Define neural network model.
3. Set response variables.
4. Set predictor variables.
5. Use KFold validation with 7 folds.
6. Transform covariates.
7. Select all rows in dataset.
8. Delete selected rows.
9. Capture log output.
10. Run neural network model.



### Example 17
> **Summary**: Create and execute a neural network model to predict log life in weld-repaired castings, utilizing KFold validation and robust fitting.

<!-- Keywords: #NeuralNetwork, #KFoldValidation, #RobustFitting, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Neural(
	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),
	X( :SILICA, :SILANE, :SULFUR ),
	Validation Method( "KFold", 7 ),
	Robust Fit( 1 )
);
s = dt << Select All Rows;
s << Delete Rows;
Log Capture( obj << Go );
```

**Code Explanation**:

1. Open data table;
2. Create neural network model.
3. Set response variables.
4. Set predictor variables.
5. Use KFold validation.
6. Enable robust fitting.
7. Select all rows in data table.
8. Delete selected rows.
9. Capture log output.
10. Run neural network model.



### Example 18
> **Summary**: Generates a neural network analysis to predict response variables using specified predictor variables, with validation through k-fold cross-validation.

<!-- Keywords: #NeuralNetwork, #PredictiveModeling, #KfoldCrossValidation, #JMPScriptingLanguage, #DataScience -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Neural( Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ), X( :SILICA, :SILANE, :SULFUR ), Validation Method( "KFold", 7 ) );
dt << Delete Column( :ABRASION );
obj << Go;
```

**Code Explanation**:

1. Open data table.
2. Create neural network model.
3. Specify response variables.
4. Specify predictor variables.
5. Set validation method.
6. Remove abrasion column.
7. Run neural network.



### Example 19
> **Summary**: Creates a neural network model to predict hardness, using KFold validation and deleting the ABRASION column, with the option to generate a SAS data step.

<!-- Keywords: #NeuralNetwork, #KFoldValidation, #DataStep, #PredictiveModeling, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Neural( Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ), X( :SILICA, :SILANE, :SULFUR ), Validation Method( "KFold", 7 ), Go );
dt << Delete Column( :ABRASION );
obj << (Fit[1] << Make SAS Data Step( 1 ));
```

**Code Explanation**:

1. Open data table;
2. Create neural network model.
3. Set response variables.
4. Set predictor variables.
5. Use KFold validation.
6. Perform model fitting.
7. Delete ABRASION column.
8. Generate SAS data step.
9. Select first fit.
10. Save SAS data step.



### Example 20
> **Summary**: Creates a neural network model to predict ABRASION, utilizing SILICA, SILANE, and SULFUR as predictors, with holdback validation and desirability formula generation.

<!-- Keywords: #NeuralNetwork, #PredictiveModeling, #HoldbackValidation, #DesirabilityFormula, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Neural(
	Y( :ABRASION ),
	X( :SILICA, :SILANE, :SULFUR ),
	Informative Missing( 0 ),
	Validation Method( "Holdback", 0.3333 ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj1 << (Fit[1] << Save Fast Formulas( 1 ));
obj1 << (Fit[1] << Profiler( 1, Save Desirability Formula ));
obj2 = Profiler( Y( :Predicted ABRASION ), Save Desirability Formula );
val1 = dt:Desirability << get values;
val2 = dt:Desirability 2 << get values;
```

**Code Explanation**:

1. Open data table;
2. Create neural network model.
3. Set response variable to ABRASION.
4. Use SILICA, SILANE, SULFUR as predictors.
5. Disable informative missing handling.
6. Use holdback validation with 33% test set.
7. Set random seed to 123 for reproducibility.
8. Fit neural network with 3 hidden nodes.
9. Save fast formulas for predictions.
10. Generate profiler with desirability formula.



### Example 21
> **Summary**: Fits a neural network model to predict log life in Weld-Repaired Castings dataset, utilizing bagged predictions and profiling for model evaluation.

<!-- Keywords: #NeuralNetwork, #PredictiveModeling, #DataScience, #JMPScriptingLanguage, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Neural( Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ), X( :SILICA, :SILANE, :SULFUR ), Crossvalidation( No Crossvalidation ), Go );
obj << Profiler( Save Bagged Predictions( 2, Random Seed( 12345 ) ) );
latest = Column( 29 ) << getasmatrix;
Close( dt, nosave );
previous = [61.1503772921641, 64.6523126221598, 58.5239257946674, 67.403833238585, 57.2732346053832, 59.7746169839516, 65.2776582168019,
59.1492713893095, 63.2765523139472, 62.6512067193051, 57.6484419621685, 61.5255846489494, 62.4010684814483, 61.1503772921641,
59.1492713893095, 59.3994096271663, 60.6501008164505, 67.0286258817998, 59.7746169839516, 59.89968610288, 60.9002390543073,
61.6506537678778, 64.1520361464462, 60.7751699353789, 63.2765523139472, 61.6506537678778, 63.4016214328756, 60.7751699353789,
63.2765523139472, 65.2776582168019, 63.1514831950188, 62.4010684814483, 62.2759993625199, 62.5261376003767, 63.2765523139472,
63.6517596707325, 65.2776582168019, 63.7768287896609, 66.0280729303724, 70.7806994496522];
```

**Code Explanation**:

1. Open data table;
2. Fit neural network model.
3. Enable Profiler with bagged predictions.
4. Retrieve latest predictions.
5. Close dataset without saving.
6. Define previous predictions list.



### Example 22
> **Summary**: Fits a neural network model to predict log life in weld-repaired castings, generating profiler output and saving bagged predictions.

<!-- Keywords: #NeuralNetwork, #PredictiveModeling, #DataScience, #JMPScriptingLanguage, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Neural( Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ), X( :SILICA, :SILANE, :SULFUR ), Crossvalidation( No Crossvalidation ), Go );
obj << Profiler( Save Bagged Predictions( 2, Random Seed( 12345 ) ) );
latest = Column( 29 ) << getasmatrix;
```

**Code Explanation**:

1. Open data table;
2. Fit neural network model.
3. Configure no cross-validation.
4. Run the model.
5. Generate profiler output.
6. Save bagged predictions.
7. Set random seed.
8. Retrieve latest column.
9. Convert column to matrix.
10. Store matrix in variable.



### Example 23
> **Summary**: Generates a neural network model to predict Single Status based on various demographic and job satisfaction factors, utilizing missing value coding and holdback validation method.

<!-- Keywords: #NeuralNetwork, #PredictiveModeling, #MissingValueCoding, #HoldbackValidation, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Neural(
	Y( :Single Status ),
	X(
		:Age in Years, :Age Group, :Years at Current Employer, :Employee Tenure, :Years in Current Position, :Position Tenure, :Salary,
		:Salary Group, :Job Satisfaction
	),
	Missing Value Coding( 0 ),
	Validation Method( Holdback, 0.3333 ),
	Fit( NTanH( 3 ), Profiler( 1, Confidence Intervals( 1 ) ) )
);
rpt = obj << report;
predProfScptObj = rpt[Outline Box( "Prediction Profiler" )] << get scriptable object;
Match( Random Integer( 1, 3 ),
	1, predProfScptObj << Independent Uniform Inputs( 1 ),
	2, predProfScptObj << Independent Resampled Inputs( 1 ),
	3, predProfScptObj << Dependent Resampled Inputs( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Run neural network model.
3. Specify response variable.
4. Define predictor variables.
5. Set missing value coding.
6. Choose validation method.
7. Fit model with tanh activation.
8. Enable profiler with confidence intervals.
9. Extract prediction profiler report.
10. Randomly select input type for profiler.



## Neural using Set Name
> **Summary**: Define and apply neural model presets for data analysis, utilizing JMP's Neural platform to fit models and generate reports.

<!-- Keywords: #JMPScriptingLanguage, #NeuralNetworks, #DataAnalysis, #ModelPresets, #ReportGeneration -->

**Code**:
```jsl
plat_samples = ["Neural" => {"Default Model with Profiler"}, => {}];
dt = Open("data_table.jmp");
:Y << Set Name( "Y Var" );
For Each( {sample}, plat_samples["Neural"],
	obj = Neural( Y( :Y Var ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
	Eval( Eval Expr( obj << Apply Preset( "Sample Presets", Expr( sample ) ) ) );
	obj << Set Report Title( sample );
);
```

**Code Explanation**:

1. Define presets for neural models.
2. Open data table;
3. Rename Y column.
4. Iterate over neural samples.
5. Fit neural network model.
6. Apply preset configuration.
7. Set report title.



## Neural using Set Values
> **Summary**: Generates a neural network analysis with missing value coding and validation, generating two reports with journals for comparison.

<!-- Keywords: #JMPScriptingLanguage, #NeuralNetworkAnalysis, #MissingValueCoding, #ValidationMethod, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:ABRASION << Set Values( [999] );
obj = Neural(
	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),
	X( :SILICA, :SILANE, :SULFUR ),
	Missing Value Coding( 0 ),
	Validation Method( Holdback, 0.3333 ),
	Fit( NTanH( 3 ), Plot Actual by Predicted( 1 ) )
);
rpt1 = obj << Report;
expr1 = rpt1 << Get Journal;
:ABRASION << Set Property( "Missing Value Codes", 999 );
obj2 = obj << Redo Analysis;
rpt2 = obj2 << Report;
expr2 = obj2 << get Journal;
actN = Equal( expr1, expr2 );
```

**Code Explanation**:

1. Open data table;
2. Set ABRASION missing value to 999.
3. Perform neural network analysis.
4. Save first report object.
5. Extract first journal from report.
6. Set ABRASION missing value property to 999.
7. Redo analysis with updated settings.
8. Save second report object.
9. Extract second journal from report.
10. Compare two journals for equality.



## Neural using If
### Example 1
> **Summary**: Runs a data analysis workflow in JMP Pro, performing Lasso regression and neural network modeling to extract model summaries and predicting properties.

<!-- Keywords: #JMPPro, #LassoRegression, #NeuralNetworks, #DataAnalysis, #PredictiveModeling -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	obj1 = dt << Run Script( "Lasso" );
	obj1 << (Fit[1] << Save Prediction Formula);
	rpt1 = obj1 << report;
	s1 = (rpt1["Model Summary"][Table Box( 2 )] << get as matrix)[8, 1];
	prop1 = dt:Y Prediction Formula << Get Property( "Predicting" );
	obj2 = dt << Neural(
		Y( :Y ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Validation( :Validation ),
		Informative Missing( 0 ),
		Set Random Seed( 1234 ),
		Fit( NTanH( 3 ) )
	);
	obj2 << (Fit[1] << Save Fast Formulas);
	rpt2 = obj2 << report;
	s2 = (rpt2["Training"][Table Box( 1 )] << get as matrix)[2, 1];
	prop2 = dt:Predicted Y << Get Property( "Predicting" );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table;
3. Run Lasso script on dataset.
4. Save prediction formula from Lasso.
5. Extract model summary from Lasso report.
6. Get predicting property from Lasso formula.
7. Perform neural network analysis on dataset.
8. Save fast formulas from neural network.
9. Extract training report from neural network.
10. Get predicting property from neural network formula.



### Example 2
> **Summary**: Generates a neural network analysis to predict survival outcomes in the Titanic dataset, utilizing JMP Pro's predictive modeling capabilities.

<!-- Keywords: #JMPPro, #NeuralNetworks, #PredictiveModeling, #DataAnalysis, #MachineLearning -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	n1 = N Items( dt << get column names( string ) );
	obj = dt << Neural(
		Y( :Survived ),
		X( :Passenger Class, :Sex, :Age, :Siblings and Spouses, :Parents and Children, :Fare, :Port, :Lifeboat ),
		Informative Missing( 1 ),
		Fit
	);
	obj << Save Formulas( 1 );
	prob1 = (dt:Name( "Probability(Survived=No)" ) << get values) || (dt:Name( "Probability(Survived=Yes)" ) << get values);
	pred1 = dt:Most Likely Survived << get values( 1 );
	dt << Delete Columns( n1 + 1 :: N Cols( dt ) );
	depot1 = obj << Publish Prediction Formula( 1 );
	depot1 << Run Script( 1 );
	prob2 = (dt:Name( "Probability(Survived=No)" ) << get values) || (dt:Name( "Probability(Survived=Yes)" ) << get values);
	pred2 = dt:Most Likely Survived << get values( 1 );
	Close( dt, no save );
	Window( "Formula Depot" ) << close window( 1 );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table;
3. Count initial columns.
4. Fit neural network model.
5. Save prediction formulas.
6. Retrieve survival probabilities.
7. Retrieve predicted survival outcomes.
8. Remove new columns.
9. Publish prediction formula.
10. Execute published script.
11. Retrieve updated probabilities.
12. Retrieve updated predictions.
13. Close dataset without saving.
14. Close Formula Depot window.



### Example 3
> **Summary**: Generates a neural network analysis on the data_table.jmp dataset, generating estimates and visualizing results.

<!-- Keywords: #JMPScriptingLanguage, #NeuralNetwork, #DataAnalysis, #Estimation, #Visualization -->

**Code**:
```jsl
isPro = 1;
If( isPro,
	dt = Open("data_table.jmp");
	nn = Neural(
		Y( :BAD, :LOAN, :JOB ),
		X( :MORTDUE, :VALUE, :REASON, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
		Missing Value Coding( 1 ),
		Transform Covariates( 1 ),
		Fit(
			NLinear( 2 ),
			NTanH2( 2 ),
			Robust Fit( 1 ),
			Penalty Method( "Weight Decay" ),
			N Boost( 3 ),
			Learning Rate( 0.3 ),
			Show Estimates( 1 )
		)
	);
	rpt = Report( nn );
	st = rpt[Outline Box( "Estimates" )][String Col Box( 1 )] << get;
	np = N Items( st );
	ne = N Rows( rpt[Outline Box( "Estimates" )][Number Col Box( 1 )] << Get as Matrix );
	Close( dt, No Save );
);
```

**Code Explanation**:

1. Check if Pro version.
2. Open data_table data
3. Run Neural Network model.
4. Set response variables.
5. Set predictor variables.
6. Configure missing value coding.
7. Transform covariates.
8. Define fitting methods.
9. Retrieve report estimates.
10. Close data without saving.



### Example 4
> **Summary**: Generates a neural network analysis on the 'Country' column using JMP Pro, utilizing Type, Weight, Turning Circle, Displacement, and Horsepower as predictors.

<!-- Keywords: #JMPPro, #NeuralNetwork, #PredictiveModeling, #DataAnalysis, #MachineLearning -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	Column( dt, "Country" )[1 :: 5] = "";
	obj = dt << Neural(
		Y( :Country ),
		X( :Type, :Weight, :Turning Circle, :Displacement, :Horsepower ),
		Missing Value Coding( 0 ),
		Validation Method( Holdback, 0.3333 ),
		Go
	);
	obj << (Fit[1] << Save Validation);
	vcol = dt:Validation << get values;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro.
2. Open data_table data
3. Clear first 5 Country entries.
4. Run Neural model on Country.
5. Use Type, Weight, Turning Circle, Displacement, Horsepower as predictors.
6. Set missing value coding to 0.
7. Use holdback validation method with 33% data.
8. Execute the neural network.
9. Save validation results.
10. Retrieve validation column values.
11. Close the dataset without saving.



### Example 5
> **Summary**: Creates and analyzes a neural network model in JMP Pro, selecting setosa species from a data table and generating predicted formulas.

<!-- Keywords: #JMPPro, #NeuralNetworks, #DataAnalysis, #PredictiveModeling, #MachineLearning -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	dt << Select Where( :Species == "setosa" );
	dt << Exclude;
	dt << Clear Select;
	nn1 = dt << Neural( Y( :Sepal length ), X( :Species ), Fit( NTanH( 3 ) ), Set Random Seed( 1000 ) );
	nn1 << (Fit[1] << Show Estimates);
	nn1 << (Fit[1] << Save Fast Formulas);
	formula1 = Char( dt:Predicted Sepal length << Get Formula );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro.
2. Open data table;
3. Select setosa species.
4. Exclude selected rows.
5. Clear row selection.
6. Create neural network model.
7. Show fit estimates.
8. Save fast formulas.
9. Get predicted formula.
10. Close dataset without saving.



### Example 6
> **Summary**: Generates a neural network model to predict outcomes based on input variables, utilizing the JMP Pro platform and generating a report with confusion matrix.

<!-- Keywords: #JMPPro, #NeuralNetwork, #PredictiveModeling, #DataScience, #MachineLearning -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	dt:DEROG << Set Modeling Type( "Nominal" );
	obj = Neural(
		Y( :DEROG ),
		X( :BAD, :LOAN, :MORTDUE, :VALUE ),
		Validation( :Validation ),
		Informative Missing( 1 ),
		Fit( Confusion Matrix( 1 ) )
	);
	rpt = obj << report;
	nobs = (rpt[Outline Box( "Training" )][Number Col Box( "Value" )] << get as matrix)[7] + (rpt[Outline Box( "Validation" )][
	Number Col Box( "Value" )] << get as matrix)[7] + (rpt[Outline Box( "Test" )][Number Col Box( "Value" )] << get as matrix)[7];
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro.
2. Open data_table data
3. Set DEROG as Nominal.
4. Run Neural network model.
5. Specify Y and X variables.
6. Use Validation column.
7. Enable Informative Missing.
8. Generate Confusion Matrix.
9. Retrieve report object.
10. Calculate total observations.
11. Close data table without saving.



### Example 7
> **Summary**: Runs the creation and validation of a neural network model using JMP Pro, with actual vs. predicted plots and customizable legend.

<!-- Keywords: #JMPPro, #NeuralNetworks, #DataVisualization, #ModelValidation, #NTanHActivation -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj1 = Neural(
		Y( :Sepal length ),
		X( :Sepal width, :Petal length, :Petal width ),
		Informative Missing( 0 ),
		Validation Method( "Holdback", 0.3333 ),
		Fit( NTanH( 3 ), Plot Actual by Predicted( 1 ) ),
		SendToReport(
			Dispatch( {"Model NTanH(3)", "Actual by Predicted Plot"}, "Neural Model Report", FrameBox( 1 ),
				{Row Legend(
					Species,
					Color( 1 ),
					Color Theme( "JMP Default" ),
					Marker( 0 ),
					Marker Theme( "" ),
					Continuous Scale( 0 ),
					Reverse Scale( 0 ),
					Excluded Rows( 0 )
				)}
			)
		)
	);
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Create neural network model.
4. Set response variable.
5. Define predictor variables.
6. Handle missing values.
7. Use holdback validation.
8. Fit NTanH activation function.
9. Plot actual vs. predicted.
10. Customize plot legend.



### Example 8
> **Summary**: Executes a neural network analysis on a filtered data table, extracting model reports and matrices, and then re-running the analysis with inverted row selection.

<!-- Keywords: #JMPPro, #NeuralNetwork, #DataFiltering, #MatrixExtraction, #ModelReport -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj1 = dt << Neural(
		Y( :Y ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Validation( :Validation ),
		Informative Missing( 0 ),
		Set Random Seed( 1234 ),
		Fit( NTanH( 3 ) ),
		Local Data Filter(
			Mode( Show( 0 ) ),
			Add Filter( columns( :Y, :Gender ), Where( :Y >= 72.77 & :Y <= 346 ), Where( :Gender == 1 ) )
		)
	);
	rpt1 = obj1 << report;
	stat1 = rpt1["Model NTanH(3)"][Table Box( 1 )] << get as matrix;
	stat2 = rpt1["Model NTanH(3)"][Table Box( 2 )] << get as matrix;
	dt << Select Where( :Y >= 72.77 & :Y <= 346 & :Gender == 1 );
	dt << Invert Row Selection;
	dt << Exclude;
	obj2 = dt << Neural(
		Y( :Y ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Validation( :Validation ),
		Informative Missing( 0 ),
		Set Random Seed( 1234 ),
		Fit( NTanH( 3 ) )
	);
	rpt2 = obj2 << report;
	stat3 = rpt2["Model NTanH(3)"][Table Box( 1 )] << get as matrix;
	stat4 = rpt2["Model NTanH(3)"][Table Box( 2 )] << get as matrix;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Run Neural Network analysis.
4. Extract model report.
5. Convert tables to matrices.
6. Select specific rows.
7. Invert row selection.
8. Exclude selected rows.
9. Run Neural Network again.
10. Extract second model report.



## Neural using Set Modeling Type
> **Summary**: Creates a neural network model to predict ordinal responses, utilizing holdback validation and specifying informative missing values.

<!-- Keywords: #NeuralNetworks, #OrdinalResponse, #HoldbackValidation, #InformativeMissingValues, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Y Ordinal << Set Modeling Type( "Nominal" );
obj = dt << Neural(
	Y( :Y Ordinal ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Informative Missing( 0 ),
	Validation Method( "Holdback", 0.35 ),
	Set Random Seed( 1234 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Decision Threshold( 1 ));
rpt = obj << report;
test1 = Try( rpt["Decision Tresholds"] << get title, 1 );
```

**Code Explanation**:

1. Open data table;
2. Set Y as nominal.
3. Create neural network model.
4. Specify predictors.
5. Use holdback validation.
6. Set random seed.
7. Fit model with 3 hidden layers.
8. Set decision threshold to 1.
9. Generate model report.
10. Attempt to get decision threshold title.



## Neural using New Column
### Example 1
> **Summary**: Fits a neural network model with multiple effects and generates a report, utilizing Holdback validation method and setting decision threshold to 1.

<!-- Keywords: #JMPScriptingLanguage, #NeuralNetworkModeling, #HoldbackValidation, #DecisionThreshold, #ModelReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Validation 2", formula( Match( :Y Ordinal, "Low", 0, "Medium", 1, "High", Random Integer( 0, 1 ) ) ) );
dt:Y Ordinal << Set Modeling Type( "Nominal" );
obj = dt << Neural(
	Y( :Y Ordinal ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Informative Missing( 0 ),
	Validation Method( "Holdback", 0.35 ),
	Set Random Seed( 1234 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Decision Threshold( 1 ));
rpt = obj << report;
test1 = Try( rpt["Decision Tresholds"] << get title, 1 );
```

**Code Explanation**:

1. Open data table;
2. Create "Validation 2" column.
3. Set "Y Ordinal" modeling type to Nominal.
4. Run Neural network model.
5. Specify "Y Ordinal" as response variable.
6. Include multiple predictors in model.
7. Use Holdback validation method (35%).
8. Set random seed for reproducibility.
9. Fit neural network with NTanH activation function.
10. Set decision threshold to 1.
11. Generate model report.
12. Attempt to retrieve "Decision Tresholds" title.



### Example 2
> **Summary**: Fits a neural network model to a data table, capturing error messages, and re-running the model with missing values.

<!-- Keywords: #JMPScriptingLanguage, #NeuralNetwork, #DataTable, #ErrorHandling, #ModelFitting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "missing", character, nominal );
nn = neural( Y( :missing, :country ), X( :sex, :marital status, :age, :size, :type ) );
errmsg = Log Capture( nn << Go );
nn << close window;
cnbef = dt << Get Column Names;
Column( dt, "age" )[3] = .;
lc = Log Capture(
	obj = dt << Neural(
		Y( :country ),
		X( :sex, :marital status, :age, :size, :type ),
		Missing Value Coding( 0 ),
		Fit( NTanH( 3 ), Save Formulas( 1 ) )
	)
);
cnaft = dt << Get Column Names;
```

**Code Explanation**:

1. Open data table;
2. Create new "missing" column.
3. Initialize neural network model.
4. Execute neural network model.
5. Capture error messages.
6. Close neural network window.
7. Get initial column names.
8. Set age value to missing.
9. Re-run neural network with missing values.
10. Capture log output.



### Example 3
> **Summary**: Fits a neural network model with TanH activation to predict sex based on height and weight, utilizing validation and missing value coding.

<!-- Keywords: #NeuralNetwork, #TanHActivation, #Validation, #MissingValueCoding, #JMPScriptingLanguage -->

**Code**:
```jsl
bh = Open("data_table.jmp");
bh:sex[1] = "";
bh << New Column( "V", Set Values( Repeat( [1, 0], 20 ) ) );
nnet = bh << Neural( Y( :sex ), X( :height, :weight ), Validation( :V ), Missing Value Coding( 1 ), Fit( NTanH( 3 ), Profiler( 1 ) ) );
rep = Report( nnet )["Validation"]["sex"];
n = (rep[Number Col Box( "Value" )] << get as matrix)[7];
confmatrix = rep[Table Box( 2 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Clear first sex value.
3. Add new column "V".
4. Fill "V" with alternating 1s and 0s.
5. Run neural network model.
6. Specify sex as output.
7. Use height and weight as inputs.
8. Set validation using column "V".
9. Configure missing value coding.
10. Fit model with TanH activation.



## Neural using Lock Data Table
> **Summary**: Creates and fits a neural network model to predict weight based on height, age, and sex in a data table.

<!-- Keywords: #JMPScriptingLanguage, #NeuralNetwork, #DataTable, #PredictiveModeling, #NTanHActivationFunction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Lock Data Table( 1 );
obj = dt << Neural( Y( :weight ), X( :height, :age, :sex ), Fit( NTanH( 1 ), Go ) );
obj << (Fit[1] << Save Formulas);
```

**Code Explanation**:

1. Open data table.
2. Lock data table.
3. Create neural network model.
4. Set response variable to weight.
5. Include height, age, sex as predictors.
6. Use NTanH activation function.
7. Fit the model.
8. Save prediction formulas.



## Neural using Log Capture
### Example 1
> **Summary**: Create and execute a neural network model to predict ABRASION, MODULUS, ELONG, and HARDNESS based on SILICA, SILANE, and SULFUR variables, utilizing KFold validation with 7 folds.

<!-- Keywords: #JMP, #NeuralNetwork, #DataScience, #MachineLearning, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	obj = Neural(
		Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),
		X( :SILICA, :SILANE, :SULFUR ),
		Validation Method( "KFold", 7 ),
		Transform Covariates( 1 ),
		Go
	)
);
s = dt << Select All Rows;
s << Delete Rows;
obj << (Fit[1] << Save Formulas( 1 ));
```

**Code Explanation**:

1. Open data table;
2. Log capture begins.
3. Create neural network model.
4. Set response variables: ABRASION, MODULUS, ELONG, HARDNESS.
5. Set predictor variables: SILICA, SILANE, SULFUR.
6. Use KFold validation with 7 folds.
7. Transform covariates.
8. Execute the model.
9. Select all rows in table.
10. Delete selected rows.
11. Save formulas for first fit.



### Example 2
> **Summary**: Runs the creation and validation of a neural network model using JMP's Neural platform, generating training and validation matrices for three different models.

<!-- Keywords: #JMPNeural, #NTanH, #ModelValidation, #MachineLearning, #DataScience -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log1 = Log Capture(
	obj1 = Neural(
		Y( :Y ),
		X( :Y, :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Validation( :Validation ),
		Set Random Seed( 123 ),
		Fit( NTanH( 3 ) ),
		Set Random Seed( 123 ),
		Fit( NTanH( 1 ) ),
		Set Random Seed( 123 ),
		Fit( NTanH( 1 ), NLinear( 1 ), NGaussian( 1 ) )
	)
);
rpt1 = obj1 << report;
t1 = rpt1["Model NTanH(3)"]["Training"][Table Box( 1 )] << get as matrix;
v1 = rpt1["Model NTanH(3)"]["Validation"][Table Box( 1 )] << get as matrix;
t2 = rpt1["Model NTanH(1)"]["Training"][Table Box( 1 )] << get as matrix;
v2 = rpt1["Model NTanH(1)"]["Validation"][Table Box( 1 )] << get as matrix;
t3 = rpt1["Model NTanH(1)NLinear(1)NGaussian(1)"]["Training"][Table Box( 1 )] << get as matrix;
v3 = rpt1["Model NTanH(1)NLinear(1)NGaussian(1)"]["Validation"][Table Box( 1 )] << get as matrix;
Close( dt, no save );
b log1 =
"Columns used both in X and Y:  A_Feed_S1 D_Feed_S2 E_Feed_S3 Total_Feed_S4 Reactor_Feed_Rate_S6 D_Feed_Flow_Stream_2 E_Feed_Flow_Stream_3 A_Feed_Flow_Stream_1 Total_Feed_Flow_Stream_4";
If( Host is( Windows ),
	b fit = [1 -7614.5291091107, 1 -1891.41694794659],
	b fit = [1 -6458.20104328074, 1 -1601.56457431546]
);
```

**Code Explanation**:

1. Open data table;
2. Start log capture.
3. Create neural network model.
4. Set response variable.
5. Set predictor variables.
6. Specify validation column.
7. Set random seed.
8. Fit model with NTanH(3).
9. Set random seed.
10. Fit model with NTanH(1).



### Example 3
> **Summary**: Generates a neural network analysis to predict Infant Mortality Rate based on Life Expectancy Ranking, while handling missing values and applying holdback validation.

<!-- Keywords: #JMPScriptingLanguage, #NeuralNetworkAnalysis, #DataTableOperations, #LogCapture, #HoldbackValidation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log1 = Log Capture(
	obj = dt << Neural(
		Y( :Infant Mortality Rate ),
		X( :Life Expectancy Ranking ),
		Informative Missing( 0 ),
		Validation Method( "Holdback", 0.3333 ),
		Where( Is Missing( :Life Expectancy Ranking ) ),
		Go
	)
);
```

**Code Explanation**:

1. Open data table;
2. Initialize log capture.
3. Start neural network analysis.
4. Set Infant Mortality Rate as output.
5. Use Life Expectancy Ranking as input.
6. Handle missing values.
7. Apply holdback validation method.
8. Exclude rows with missing Life Expectancy Ranking.
9. Run the neural network model.
10. Capture the analysis results.



### Example 4
> **Summary**: Create and execute a neural network model to predict Infant Mortality Rate based on Life Expectancy Ranking, handling missing data and validating with KFold cross-validation.

<!-- Keywords: #JMPScriptingLanguage, #NeuralNetworks, #DataScience, #PredictiveModeling, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log1 = Log Capture(
	obj = dt << Neural(
		Y( :Infant Mortality Rate ),
		X( :Life Expectancy Ranking ),
		Informative Missing( 0 ),
		Validation Method( "KFold", 6 ),
		Where( Is Missing( :Life Expectancy Ranking ) ),
		Go
	)
);
```

**Code Explanation**:

1. Open data table;
2. Capture log output.
3. Create neural network model.
4. Set response variable.
5. Set predictor variable.
6. Handle missing data.
7. Use KFold validation.
8. Filter missing data rows.
9. Execute model fitting.
10. Store model results.



### Example 5
> **Summary**: Create and evaluate neural network models using JMP's Neural platform, capturing log data and generating matrices for training and validation sets.

<!-- Keywords: #JMP_Neural, #Log_Capture, #Neural_Network_Models, #Data_Analysis, #Machine_Learning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log1 = Log Capture(
	obj1 = Neural(
		Y( :Y ),
		X( :Y, :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Validation( :Validation ),
		Set Random Seed( 123 ),
		Fit( NTanH( 3 ) ),
		Set Random Seed( 123 ),
		Fit( NTanH( 1 ) ),
		Set Random Seed( 123 ),
		Fit( NTanH( 1 ), NLinear( 1 ), NGaussian( 1 ) )
	)
);
rpt1 = obj1 << report;
t1 = rpt1["Model NTanH(3)"]["Training"][Table Box( 1 )] << get as matrix;
v1 = rpt1["Model NTanH(3)"]["Validation"][Table Box( 1 )] << get as matrix;
t2 = rpt1["Model NTanH(1)"]["Training"][Table Box( 1 )] << get as matrix;
v2 = rpt1["Model NTanH(1)"]["Validation"][Table Box( 1 )] << get as matrix;
t3 = rpt1["Model NTanH(1)NLinear(1)NGaussian(1)"]["Training"][Table Box( 1 )] << get as matrix;
v3 = rpt1["Model NTanH(1)NLinear(1)NGaussian(1)"]["Validation"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Log capture begins.
3. Create neural network model.
4. Set response variable.
5. Include predictor variables.
6. Use validation column.
7. Set random seed.
8. Fit model with NTanH(3).
9. Set random seed again.
10. Fit model with NTanH(1).



