# K Nearest Neighbors

### Example 1
> **Summary**: Performs a K-Nearest Neighbors analysis on the 'data_table.jmp' table, generating reports and visualizations for training and prediction.

<!-- Keywords: #JSLScriptingLanguage, #KNNAnalysis, #DataVisualization, #PredictiveModeling, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
knn = dt << K Nearest Neighbors(
	Y( :country ),
	X( :sex, :marital status, :age, :type ),
	K( 10 ),
	Category Bias( 0.2 ),
	SendToReport(
		Dispatch( {"country"}, "Training", OutlineBox, {Close( 1 )} ),
		Dispatch( {"country", "Confusion Matrix for Best K=1"}, "Training", OutlineBox, {Close( 1 )} ),
		Dispatch( {"country", "Mosaic Plot"}, "Mosaic Plot for K=1", TextBox, {Set Font Scale( 2 )} ),
		Dispatch( {"country", "Mosaic Plot", "Training"}, "country Predicted", TextEditBox, {Text Color( "Red" ), Font Color( 3 )} ),
		Dispatch( {"country", "Mosaic Plot", "Training"}, "country", TextEditBox, {Text Color( "Red" ), Font Color( 3 )} )
	)
);
cs = knn << Column Switcher( :country, {:country, :size} );
```

**Code Explanation**:

1. Open table.
2. Perform KNN analysis.
3. Set response variable.
4. Set predictor variables.
5. Specify number of neighbors.
6. Set category bias.
7. Close training report.
8. Close confusion matrix report.
9. Increase font size in mosaic plot.
10. Change text color in mosaic plot.



### Example 2
> **Summary**: Performs a K Nearest Neighbors analysis to predict country based on sex, marital status, age, and type, with category bias applied and interactive column switching for size.

<!-- Keywords: #JMPScriptingLanguage, #KNearestNeighbors, #ColumnSwitcher, #DataTable, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
knn = dt << K Nearest Neighbors(
	Y( :country ),
	X( :sex, :marital status, :age, :type ),
	K( 10 ),
	Category Bias( 0.2 ),
	SendToReport(
		Dispatch( {"country"}, "Training", OutlineBox, {Close( 1 )} ),
		Dispatch( {"country", "Mosaic Plot", "Training"}, "country Predicted", TextEditBox, {Text Color( "Red" ), Font Color( 3 )} ),
		Dispatch( {"country", "Mosaic Plot", "Training"}, "country", TextEditBox, {Text Color( "Red" ), Font Color( 3 )} )
	)
);
cs = knn << Column Switcher( :country, {:country, :size} );
cs << Set Current( "size" );
```

**Code Explanation**:

1. Open data table.
2. Perform K Nearest Neighbors analysis.
3. Set Y variable to country.
4. Set X variables: sex, marital status, age, type.
5. Use 10 nearest neighbors.
6. Apply category bias of 0.2.
7. Close training outline box.
8. Change predicted country text color to red.
9. Change actual country text color to red.
10. Switch column to size.



### Example 3
> **Summary**: Performs a K Nearest Neighbors analysis to predict country based on sex, marital status, and age, with a column switcher for dynamic visualization.

<!-- Keywords: #JMPScriptingLanguage, #KNearestNeighbors, #ColumnSwitcher, #MosaicPlot, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
knn = dt << K Nearest Neighbors(
	Y( :country ),
	X( :sex, :marital status, :age ),
	K( 10 ),
	Category Bias( 0.2 ),
	Response( "country", Mosaic Plot( 0 ) )
);
cs = knn << Column Switcher( :country, {:country, :size, :type} );
```

**Code Explanation**:

1. Open data table;
2. Run K Nearest Neighbors analysis.
3. Set response variable as country.
4. Use sex, marital status, age as predictors.
5. Specify K value as 10.
6. Apply category bias of 0.2.
7. Generate mosaic plot for country response.
8. Add column switcher to analysis.
9. Switch country column to size.
10. Include type column in switcher.



### Example 4
> **Summary**: Performs a K Nearest Neighbors analysis to predict country based on sex, marital status, and age, with 10 nearest neighbors and category bias of 0.2, and generates a mosaic plot for visualization.

<!-- Keywords: #JMPScriptingLanguage, #KNearestNeighbors, #MosaicPlot, #ColumnSwitcher, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
knn = dt << K Nearest Neighbors(
	Y( :country ),
	X( :sex, :marital status, :age ),
	K( 10 ),
	Category Bias( 0.2 ),
	Response( "country", Mosaic Plot( 0 ) )
);
cs = knn << Column Switcher( :country, {:country, :size, :type} );
cs << Set Current( "size" );
```

**Code Explanation**:

1. Open data table;
2. Run K Nearest Neighbors analysis.
3. Set response variable to "country".
4. Include "sex", "marital status", "age" as predictors.
5. Use 10 nearest neighbors.
6. Apply category bias of 0.2.
7. Generate mosaic plot for "country".
8. Create column switcher for "country".
9. Include "country", "size", "type" in switcher.
10. Set current column to "size".



### Example 5
> **Summary**: Runs the creation and iteration of K Nearest Neighbors models for data analysis, utilizing random seed initialization and window closing.

<!-- Keywords: #JMPScriptingLanguage, #KNearestNeighbors, #DataAnalysis, #RandomSeed, #ModelIteration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << K Nearest Neighbors(
	Validation( :Validation ),
	Y( :Y Binary ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	K( 9 ),
	Set Random Seed( 132752 )
);
rn1 = [];
For( i = 1, i <= 10, i++,
	rn1 |/= Random Uniform()
);
obj << close window( 1 );
For( i = 1, i <= 10, i++,
	rn2 = [];
	obj2 = dt << K Nearest Neighbors(
		Validation( :Validation ),
		Y( :Y Binary ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		K( 9 ),
		Set Random Seed( 132752 )
	);
	For( j = 1, j <= 10, j++,
		rn2 |/= Random Uniform()
	);
	obj2 << close window( 1 );
);
```

**Code Explanation**:

1. Open data table;
2. Create K Nearest Neighbors model.
3. Set validation column.
4. Define response variable.
5. Specify predictor variables.
6. Set number of neighbors (K).
7. Initialize random seed.
8. Generate 10 random numbers.
9. Close first model window.
10. Repeat steps 2-9 for 10 iterations.



### Example 6
> **Summary**: Executes K Nearest Neighbors models with random seed initialization and window closing, iterating 10 times to generate multiple model runs.

<!-- Keywords: #JMPScriptingLanguage, #KNearestNeighbors, #RandomSeed, #ModelIteration, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << K Nearest Neighbors(
	Validation( :Validation ),
	Y( :Y Binary ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	K( 9 ),
	Set Random Seed( 132752 )
);
rn1 = [];
For( i = 1, i <= 100, i++,
	rn1 |/= Random Uniform()
);
obj << close window( 1 );
For( i = 1, i <= 10, i++,
	rn2 = [];
	obj2 = dt << K Nearest Neighbors(
		Validation( :Validation ),
		Y( :Y Binary ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		K( 9 ),
		Set Random Seed( 132752 )
	);
	obj2 << close window( 1 );
);
```

**Code Explanation**:

1. Open data table;
2. Run K Nearest Neighbors model.
3. Initialize random number list.
4. Generate 100 random numbers.
5. Close first KNN window.
6. Loop 10 times.
7. Initialize second random number list.
8. Run K Nearest Neighbors model again.
9. Close second KNN window.



## K Nearest Neighbors using If
### Example 1
> **Summary**: Performs a K Nearest Neighbors analysis on a data table, utilizing local data filtering and report dispatching for training, validation, and test sets.

<!-- Keywords: #JMPScriptingLanguage, #KNearestNeighbors, #LocalDataFilter, #ReportDispatch, #DataAnalysis -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	Open("data_table.jmp") << K Nearest Neighbors(
		Validation( :Validation ),
		Y( :BAD ),
		X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO ),
		K( 10 ),
		Local Data Filter(
			Inverse( 1 ),
			Add Filter(
				columns( :DEBTINC, :JOB ),
				Where( :DEBTINC >= 0.524499215429881 & :DEBTINC <= 76.56 ),
				Display( :JOB, Size( 149, 119 ) )
			)
		),
		SendToReport(
			Dispatch( {"BAD"}, "Training", OutlineBox, {Close( 1 )} ),
			Dispatch( {"BAD"}, "Validation", OutlineBox, {Close( 1 )} ),
			Dispatch( {"BAD"}, "Test", OutlineBox, {Close( 1 )} )
		)
	)
);
```

**Code Explanation**:

1. Check for JMP Pro version.
2. Open data table;
3. Apply K Nearest Neighbors method.
4. Use Validation column for validation.
5. Set BAD as response variable.
6. Include specified predictors.
7. Set K value to 10.
8. Apply local data filter.
9. Invert filter condition.
10. Close Training, Validation, Test reports.



### Example 2
> **Summary**: Performs a K Nearest Neighbors analysis in JMP Pro, specifying the response variable and predictor variables, and retrieving the misclassification rate.

<!-- Keywords: #JMPPro, #KNN, #MachineLearning, #DataAnalysis, #PredictiveModeling -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = dt << K Nearest Neighbors(
		Y( :Species, ),
		X( :Sepal length, :Sepal width, :Petal length, :Petal Width ),
		K( 149 ),
		Set Random Seed( 5384 )
	);
	rpt = obj << report;
	mr = rpt[Outline Box( "Training" )][Number Col Box( "Misclassification Rate" )] << get as matrix;
	minloc = Min( Loc( mr, Min( mr ) ) );
	getbest = obj << (Response[1] << Get Best K);
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Run K Nearest Neighbors.
4. Specify response variable.
5. Define predictor variables.
6. Set K value to 149.
7. Set random seed to 5384.
8. Retrieve report object.
9. Extract misclassification rate.
10. Find minimum misclassification rate location.



### Example 3
> **Summary**: Performs a K Nearest Neighbors analysis with validation, response variable specification, and predictor variables definition in JMP Pro.

<!-- Keywords: #JMPPro, #KNearestNeighbors, #DataAnalysis, #MachineLearning, #Scripting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj1 = dt << K Nearest Neighbors(
		Validation( :Validation ),
		Y( :Y Binary ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Random Seed( 12354 ),
		K( 10 )
	);
	obj1 << (Response[1] << Set K( 6 ));
	rpt1 = obj1 << report;
	obj2 = obj1 << Redo Analysis( 1 );
	rpt2 = obj2 << report;
	obj1 << Save Script to Report( 1 );
	saved1 = rpt1[Text Box( 1 )] << get text;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table;
3. Run K Nearest Neighbors analysis.
4. Set validation column.
5. Specify response variable.
6. Define predictor variables.
7. Set random seed for reproducibility.
8. Set K value to 10.
9. Adjust K value to 6 for response.
10. Generate first report.
11. Redo analysis with new settings.
12. Generate second report.
13. Save script to report.
14. Extract saved script text.
15. Close dataset without saving.



### Example 4
> **Summary**: Runs a K Nearest Neighbors model to predict outcomes and calculates the RSquare ratio between training and validation sets, utilizing JMP Pro.

<!-- Keywords: #JMPPro, #KNNModel, #RSquareCalculation, #PredictiveAnalytics, #MachineLearning -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = dt << K Nearest Neighbors(
		Validation( :Validation ),
		Y( :Y ),
		X( :Age, :Gender, BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH ),
		K( 5 ),
		Set Random Seed( 123 )
	);
	rpt = obj << report;
	rsquare = (rpt["Y"]["Training"][Number Col Box( "RSquare" )] << get as matrix) |/ (rpt["Y"]["Validation"][Number Col Box( "RSquare" )]
	 << get as matrix);
	obj << (Response[1] << Save Predicteds);
	obj2 = dt << Model Comparison( Group( :Validation ) );
	rpt2 = obj2 << report;
	b rsquare = rpt2["Measures of Fit for Y"][Number Col Box( "RSquare" )] << get as matrix;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Open data table;
3. Run K Nearest Neighbors model.
4. Extract training RSquare.
5. Extract validation RSquare.
6. Calculate RSquare ratio.
7. Save predictions.
8. Run Model Comparison.
9. Extract overall RSquare.
10. Close dataset without saving.



### Example 5
> **Summary**: Executes K-Nearest Neighbors models on a data table, with and without grouping by a categorical column.

<!-- Keywords: #JSLScriptingLanguage, #K-NearestNeighbors, #DataTableManipulation, #Grouping, #PredictiveModeling -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	dt << New Column( "Group", formula( Random Integer( 1, 2 ) ) );
	ncols1 = N Cols( dt );
	obj1 = dt << K Nearest Neighbors( Y( :Species ), X( :Sepal length, :Sepal width, :Petal length, :Petal width ), K( 3 ), Nonrandom );
	obj1 << (Response[1] << Save Prediction Formula( 1 ));
	obj1 << (Response[1] << Save Prediction Formula( 2 ));
	obj1 << (Response[1] << Save Prediction Formula( 3 ));
	obj2 = dt << K Nearest Neighbors(
		Y( :Species ),
		X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
		By( :Group ),
		K( 3 ),
		Nonrandom
	);
	obj2[1] << (Response[1] << Save Prediction Formula( 1 ));
	obj2[1] << (Response[1] << Save Prediction Formula( 2 ));
	obj2[1] << (Response[1] << Save Prediction Formula( 3 ));
	ncols2 = N Cols( dt );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP is Pro version.
2. Open data table;
3. Add new "Group" column.
4. Count initial columns.
5. Run K-Nearest Neighbors model.
6. Save prediction formula for response 1.
7. Save prediction formula for response 2.
8. Save prediction formula for response 3.
9. Run K-Nearest Neighbors model by group.
10. Save prediction formula for response 1 in grouped model.
11. Save prediction formula for response 2 in grouped model.
12. Save prediction formula for response 3 in grouped model.
13. Count updated columns.
14. Close dataset without saving.



## K Nearest Neighbors using Shape
### Example 1
> **Summary**: Runs the K Nearest Neighbors analysis by opening a data table, setting a random seed, extracting predictor variables, scaling data, creating a KDTable, finding nearest neighbors, and saving near neighbor rows and distances.

<!-- Keywords: #JMPScriptingLanguage, #KNearestNeighbors, #DataTable, #KDTable, #PredictorVariables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
r = 5384;
m = 6;
mdata = (dt << get as matrix)[0, 1 :: 4];
scl data = mdata :/ Shape( V Std( mdata ), N Rows( mdata ), N Cols( mdata ) );
{b knnrows, b dist} = KDTable( scl data ) << K nearest rows( Eval( m ) );
obj = dt << K Nearest Neighbors( X( :Sepal length, :Sepal width, :Petal length, :Petal width ), K( m ), Set Random Seed( r ) );
test1 = Try( Report( obj )[Outline Box( 1 )] << get title, "No Report" );
If( test1 == "K Nearest Neighbors",
	obj << Save Near Neighbor Rows( 1 );
	knnrows = (dt << get as matrix)[0, 5 :: 4 + m];
	obj << Save Near Neighbor Distances( 1 );
	dist = (dt << get as matrix)[0, 11 :: 16];
	Close( dt, no save );
);
```

**Code Explanation**:

1. Open data table;
2. Set random seed.
3. Extract predictor variables.
4. Scale data.
5. Create KDTable.
6. Find nearest neighbors.
7. Run K Nearest Neighbors analysis.
8. Check if report exists.
9. Save near neighbor rows.
10. Save near neighbor distances.



### Example 2
> **Summary**: Runs K-Nearest Neighbors (KNN) analysis on a data table, utilizing standardization and KDTable creation to find the nearest rows.

<!-- Keywords: #JSLScriptingLanguage, #KNNAnalysis, #DataStandardization, #KDTree, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
r = 5384;
m = 6;
mdata = (dt << get as matrix)[0, 1 :: 4];
scl data = mdata :/ Shape( V Std( mdata ), N Rows( mdata ), N Cols( mdata ) );
{b knnrows, b dist} = KDTable( scl data ) << K nearest rows( Eval( m ) );
obj = dt << K Nearest Neighbors( X( :Sepal length, :Sepal width, :Petal length, :Petal width ), K( m ), Set Random Seed( r ) );
test1 = Try( Report( obj )[Outline Box( 1 )] << get title, "No Report" );
```

**Code Explanation**:

1. Open data table;
2. Set random seed.
3. Define number of neighbors.
4. Extract feature columns.
5. Standardize feature data.
6. Create KDTable.
7. Find K nearest rows.
8. Perform KNN analysis.
9. Retrieve report outline.
10. Get title or default message.



## K Nearest Neighbors using New Column
> **Summary**: Runs K-Nearest Neighbors analysis on a standardized dataset, generating a report and saving near neighbor rows and distances.

<!-- Keywords: #JSL, #KNN, #DataStandardization, #KDTree, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Species_Num", formula( Match( :Species, "setosa", 1, "versicolor", 2, "virginica", 3 ) ) );
act1 = dt:Species_Num << get values;
m = 6;
mdata = (dt << get as matrix)[0, 1 :: 4];
scl data = mdata :/ Shape( V Std( mdata ), N Rows( mdata ), N Cols( mdata ) );
{b knnrows, b dist} = KDTable( scl data ) << K nearest rows( Eval( m ) );
obj = dt << K Nearest Neighbors( X( :Sepal length, :Sepal width, :Petal length, :Petal width ), K( m ) );
rpt = Report( obj );
test1 = Try( Report( obj )[Outline Box( 1 )] << get title, "No Report" );
If( test1 == "K Nearest Neighbors",
	obj << Save Near Neighbor Rows( 1 );
	knnrows = (dt << get as matrix)[0, 6 :: 5 + m];
	obj << Save Near Neighbor Distances( 1 );
	dist = (dt << get as matrix)[0, 12 :: 17];
);
```

**Code Explanation**:

1. Open data table;
2. Create Species_Num column.
3. Retrieve Species_Num values.
4. Set K value to 6.
5. Extract first four columns as matrix.
6. Standardize the data matrix.
7. Build KDTree for standardized data.
8. Perform K-Nearest Neighbors analysis.
9. Generate report from analysis.
10. Check if report exists.
11. Save near neighbor rows if report valid.
12. Extract saved near neighbor rows.
13. Save near neighbor distances if report valid.
14. Extract saved distances.



