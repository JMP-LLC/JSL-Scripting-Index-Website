# Discriminant

### Example 1
> **Summary**: Performs a discriminant analysis on the provided data table, using location name as the X variable and various elements (Al, Mn, Na, Br, Ce, Co, Cr, Cs, Eu, Fe, Hf, La, Sc, Sm, U) as Y variables, with classification counts displayed.

<!-- Keywords: #DiscriminantAnalysis, #JSLScriptingLanguage, #JMPDataTables, #MultivariateAnalysis, #ClassificationCounts -->

**Code**:
```jsl
// Discriminant
// Open data table
dt = Open("data_table.jmp");
// Discriminant
Discriminant(
	X( :location name ),
	Y(
		:Al, :Mn, :Na, :Br, :Ce, :Co, :Cr,
		:Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm,
		:U
	),
	Show Classification Counts( 1 )
);
```

**Code Explanation**:

1. Open table.
2. Define discriminant analysis.
3. Specify X variable.
4. List Y variables.
5. Enable classification counts display.



### Example 2
> **Summary**: Performs a discriminant analysis on the Longley data table, using Sepal length, width and Petal length, width as predictors for the Species variable.

<!-- Keywords: #DiscriminantAnalysis, #MultipleLinearRegression, #JSLScripting, #LongleyData, #PredictiveModel -->

**Code**:
```jsl
// Discriminant
// Open data table
dt = Open("data_table.jmp");
// Discriminant
Discriminant(
	X( :Species ),
	Y(
		:Sepal length, :Sepal width,
		:Petal length, :Petal width
	)
);
```

**Code Explanation**:

1. Open data table.
2. Assign table to dt.
3. Perform discriminant analysis.
4. Set Species as X variable.
5. Include Sepal length, width.
6. Include Petal length, width.



### Example 3
> **Summary**: Discriminant analysis to classify data based on multiple predictor variables, displaying classification counts and customizing axis scales in the report.

<!-- Keywords: #JSLScripting, #DiscriminantAnalysis, #MultipleLinearRegression, #CustomizedReporting, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Discriminant(
	X( :location name ),
	Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U ),
	Show Classification Counts( 1 ),
	Use Matrix Columns( 1 ),
	Biplot Ray Position( [5.03382757760824, 2.95931834906931, 1.5] ),
	SendToReport(
		Dispatch( {"Canonical Plot"}, "1", ScaleBox, {Format( "Custom", Formula( Ln( Exp( value ) ) ), 12 )} ),
		Dispatch( {"Canonical Plot"}, "2", ScaleBox, {Format( "Custom", Formula( Root( value ^ 3, 3 ) ), 12 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform discriminant analysis.
3. Set predictor variables.
4. Set response variables.
5. Display classification counts.
6. Use matrix columns.
7. Set biplot ray position.
8. Customize first axis scale.
9. Customize second axis scale.
10. Generate report.



### Example 4
> **Summary**: Discriminant analysis using the Standard Least Squares personality to model relationships between Species and Sepal length, Sepal width, Petal length, and Petal width.

<!-- Keywords: #DiscriminantAnalysis, #StandardLeastSquares, #JMPScriptingLanguage, #DataModeling, #MultivariateStatistics -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
```

**Code Explanation**:

1. Open data table;
2. Create Discriminant object.
3. Set Species as X variable.
4. Set Sepal length, Sepal width, Petal length, Petal width as Y variables.



### Example 5
> **Summary**: Runs a multiple linear regression analysis using the Standard Least Squares personality, fitting a model to predict Crude Death Rate (1000) based on Development Level and Crude Birth Rate (1000).

<!-- Keywords: #JSL, #MultipleLinearRegression, #StandardLeastSquares, #PredictiveModeling, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Discriminant( X( :Development Level ), Weight( :"Crude Birth Rate (1000)"n ), Y( :"Crude Death Rate (1000)"n ) );
```

**Code Explanation**:

1. Open data table.
2. Run Discriminant analysis.
3. Set X variable.
4. Assign weight variable.
5. Define Y variable.



### Example 6
> **Summary**: Discriminant analysis to classify data points based on sex and physical characteristics, with interactive filtering and visualization options.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #DataFiltering, #InteractiveVisualization, #Classification -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Discriminant(
	X( :sex ),
	Y( :length, :basilar, :zygomat, :postorb ),
	Show Canonical Details( 1 ),
	Show Within Covariances( 1 ),
	Show Group Means( 1 ),
	Show Distances to each group( 1 ),
	Show Probabilities to each group( 1 ),
	Show Classification Counts( 1 ),
	Crossvalidate by Excluded Rows( 1 )
);
obj << Local Data Filter(
	Location( {984, 8} ),
	Add Filter( columns( :length ), Where( :length >= 5966 & :length <= 6488 ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
dt << Select Where( :sex == "m" );
dt << Exclude();
rpt = obj << Report;
```

**Code Explanation**:

1. Open data table;
2. Fit discriminant analysis.
3. Set X variable to "sex".
4. Set Y variables: "length", "basilar", "zygomat", "postorb".
5. Enable canonical details display.
6. Enable within covariances display.
7. Enable group means display.
8. Enable distances to groups display.
9. Enable probabilities to groups display.
10. Enable classification counts display.
11. Enable cross-validation by excluded rows.
12. Add local data filter for "length".
13. Set filter range for "length": 5966 to 6488.
14. Set filter mode to select and show.
15. Select rows where "sex" is "m".
16. Exclude selected rows.
17. Generate report from analysis object.



### Example 7
> **Summary**: Discriminant analysis to classify data points into groups based on multiple predictor variables, with interactive filtering and reporting capabilities.

<!-- Keywords: #DiscriminantAnalysis, #JMPScriptingLanguage, #DataFiltering, #InteractiveReporting, #MultivariateStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Discriminant(
	X( :sex ),
	Y( :length, :basilar, :zygomat, :postorb ),
	Show Canonical Details( 1 ),
	Show Within Covariances( 1 ),
	Show Group Means( 1 ),
	Show Distances to each group( 1 ),
	Show Probabilities to each group( 1 ),
	Show Classification Counts( 1 )
);
obj << Local Data Filter(
	Location( {984, 8} ),
	Add Filter( columns( :length ), Where( :length >= 5966 & :length <= 6488 ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
obj << Automatic Recalc( 0 );
dt << Select Where( :sex == "m" );
dt << Exclude();
rpt = obj << Report;
```

**Code Explanation**:

1. Open data table;
2. Fit discriminant analysis.
3. Configure display options.
4. Add local data filter.
5. Set filter criteria for "length".
6. Disable automatic recalculation.
7. Select rows where "sex" is "m".
8. Exclude selected rows.
9. Generate report.



### Example 8
> **Summary**: Discriminant analysis with multiple linear regression on the 'data_table.jmp' file, filtering by sex and length, and generating reports.

<!-- Keywords: #JSLScriptingLanguage, #DiscriminantAnalysis, #MultipleLinearRegression, #DataFiltering, #ReportGeneration -->

**Code**:
```jsl
filePath = "$Sample_Data\data_table.jmp";
dt = Open("data_table.jmp");
obj = Discriminant(
	X( :sex ),
	Y( :length, :basilar, :zygomat, :postorb ),
	Show Canonical Details( 1 ),
	Show Within Covariances( 1 ),
	Show Group Means( 1 ),
	Show Distances to each group( 1 ),
	Show Probabilities to each group( 1 ),
	Show Classification Counts( 1 ),
	Crossvalidate by Excluded Rows( 1 )
);
obj << Local Data Filter(
	Location( {984, 8} ),
	Add Filter( columns( :length ), Where( :length >= 5966 & :length <= 6488 ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
dt << Select Where( :sex == "m" );
dt << Exclude();
rpt = obj << Report;
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Discriminant(
	X( :sex ),
	Y( :length, :basilar, :zygomat, :postorb ),
	Show Canonical Details( 1 ),
	Show Within Covariances( 1 ),
	Show Group Means( 1 ),
	Show Distances to each group( 1 ),
	Show Probabilities to each group( 1 ),
	Show Classification Counts( 1 )
);
obj << Local Data Filter(
	Location( {984, 8} ),
	Add Filter( columns( :length ), Where( :length >= 5966 & :length <= 6488 ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
obj << Automatic Recalc( 0 );
dt << Select Where( :sex == "m" );
dt << Exclude();
rpt = obj << Report;
```

**Code Explanation**:

1. Open data table;
2. Create Discriminant analysis object.
3. Set filter location.
4. Add length filter criteria.
5. Configure filter mode.
6. Select rows where sex is "m".
7. Exclude selected rows.
8. Generate report from analysis.
9. Close data_table.jmp file without saving.
10. Reopen Skull.jmp file.
11. Recreate Discriminant analysis object.
12. Set filter location again.
13. Add length filter criteria again.
14. Disable automatic recalculation.
15. Select rows where sex is "m".
16. Exclude selected rows.
17. Generate report from analysis.



### Example 9
> **Summary**: Discriminant analysis to classify species based on sepal and petal measurements, saving the results to a new data table.

<!-- Keywords: #DiscriminantAnalysis, #JSLScriptingLanguage, #DataTableManipulation, #StatisticalModeling, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
mytab = obj << Save To New Data Table;
```

**Code Explanation**:

1. Open data table;
2. Create Discriminant analysis object.
3. Set Species as X variable.
4. Set Sepal length, width, Petal length, width as Y variables.
5. Save analysis results to new data table.



### Example 10
> **Summary**: Discriminant analysis to classify data based on manufacturer, using calories, protein, fat, and sodium as predictors, with ROC curve and biplot visualization.

<!-- Keywords: #DiscriminantAnalysis, #ROCCurve, #Biplot, #JMPScriptingLanguage, #MultivariateAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Discriminant(
	X( :Manufacturer ),
	Y( :Calories, :Protein, :Fat, :Sodium ),
	Canonical Plot( 0 ),
	Discriminant Scores( 0 ),
	Show Classification Counts( 0 ),
	ROC Curve( 1 ),
	Use Matrix Columns( 1 ),
	Biplot Ray Position( [-4.68243746823651, 1.48486773809783, 1.5] )
);
```

**Code Explanation**:

1. Open data table;
2. Create Discriminant object.
3. Set X variable to Manufacturer.
4. Set Y variables to Calories, Protein, Fat, Sodium.
5. Disable Canonical Plot.
6. Disable Discriminant Scores.
7. Disable Classification Counts.
8. Enable ROC Curve.
9. Enable Matrix Columns.
10. Set Biplot Ray Position.



### Example 11
> **Summary**: Discriminant analysis with classification counts display, matrix columns usage, and biplot ray position configuration.

<!-- Keywords: #JSLScripting, #DiscriminantAnalysis, #ClassificationCounts, #MatrixColumns, #BiplotRayPosition -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Discriminant(
	X( :location name ),
	Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U ),
	Show Classification Counts( 1 ),
	Use Matrix Columns( 1 ),
	Biplot Ray Position( [5.03382757760824, 2.95931834906931, 1.5] )
);
:Mn << Set Property( "Missing Value Codes", 0 );
:Mn << Set Values( [0] );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
actN = (rpt[Number Col Box( 2 )] << Get( 1 ));
```

**Code Explanation**:

1. Open data table.
2. Create Discriminant analysis object.
3. Set X variable to location name.
4. Set Y variables to specified elements.
5. Enable classification counts display.
6. Enable matrix columns usage.
7. Set biplot ray position.
8. Set Mn missing value code to 0.
9. Set Mn values to 0.
10. Redo the Discriminant analysis.



### Example 12
> **Summary**: Discriminant analysis to identify the relationships between sepal length, sepal width, petal length, and petal width, using uncentered canonical structures and disabling pseudoinverses.

<!-- Keywords: #DiscriminantAnalysis, #CanonicalStructures, #UncenteredCanonical, #Pseudoinverses, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Discriminant(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	X( :Species ),
	Uncentered Canonical( 1 ),
	Use Pseudoinverses( 0 )
);
obj << Show Canonical Structures( 1 );
rpt = obj << report;
totalCanonicalStructure = rpt[Outline Box( "Canonical Plot" )][Matrix Box( 1 )] << get;
betweenCanonicalStructure = rpt[Outline Box( "Canonical Plot" )][Matrix Box( 2 )] << get;
pooledWithinCanonicalStructure = rpt[Outline Box( "Canonical Plot" )][Matrix Box( 3 )] << get;
Close( dt, No Save );
sas_classMeans = [-7.607599927 1.82504949 5.782550437, 0.215133017 -0.727899622 0.512766605];
ut relative epsilon = 1e-8;
```

**Code Explanation**:

1. Open data table;
2. Perform discriminant analysis.
3. Set uncentered canonical option.
4. Disable pseudoinverses.
5. Display canonical structures.
6. Retrieve report object.
7. Extract total canonical structure matrix.
8. Extract between canonical structure matrix.
9. Extract pooled within canonical structure matrix.
10. Close dataset without saving.



### Example 13
> **Summary**: Discriminant analysis on the provided data table, generating reports and extracting matrices for within, between, and scoring coefficients, as well as class means and canonical structures.

<!-- Keywords: #JSLScriptingLanguage, #DiscriminantAnalysis, #CanonicalStructures, #MatrixExtraction, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Discriminant( X( 1 ), Y( 2 :: 16 ), Uncentered Canonical( 1 ), Use Pseudoinverses( 0 ) );
obj << Show Canonical Details( 1 );
obj << Show Canonical Structures( 1 );
rpt = obj << report;
withinMat = rpt[Outline Box( "Canonical Details" )][Matrix Box( 1 )] << get;
betMat = rpt[Outline Box( "Canonical Details" )][Matrix Box( 2 )] << get;
scorCoeff = rpt[Outline Box( "Canonical Details" )][Matrix Box( 3 )] << get;
stdScorCoeff = rpt[Outline Box( "Canonical Details" )][Matrix Box( 4 )] << get;
totalCanonicalStructure = rpt[Outline Box( "Canonical Structure" )][Matrix Box( 1 )] << get;
betweenCanonicalStructure = rpt[Outline Box( "Canonical Structure" )][Matrix Box( 2 )] << get;
pooledWithinCanonicalStructure = rpt[Outline Box( "Canonical Structure" )][Matrix Box( 3 )] << get;
classMeansCanonicalStructure = rpt[Outline Box( "Canonical Structure" )][Matrix Box( 4 )] << get;
obj << Save Canonical Scores;
obj1 = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Grouping Columns( :location name ) ),
		Row Table(
			Analysis Columns(
				:Name( "Canon[1]" ), :Name( "Canon[2]" ), :Name( "Canon[3]" ), :Name( "Canon[4]" ), :Name( "Canon[5]" ),
				:Name( "Canon[6]" )
			),
			Statistics( Mean )
		)
	)
);
rpt1 = obj1 << report;
tabClassMeans = J( N Rows( classMeansCanonicalStructure ), N Cols( classMeansCanonicalStructure ), 0 );
For( i = 1, i <= N Cols( classMeansCanonicalStructure ), i++,
	tmp = (Words( rpt1[MultiTblNumColBox( i )] << get text, "\!N" )[2 :: 7]);
	For( k = 1, k <= N Items( tmp ), k++,
		tabClassMeans[k, i] = Num( tmp[k] )
	);
);
```

**Code Explanation**:

1. Open data table;
2. Perform discriminant analysis.
3. Enable canonical details display.
4. Enable canonical structures display.
5. Retrieve report object.
6. Extract within matrix.
7. Extract between matrix.
8. Extract scoring coefficients.
9. Extract standardized scoring coefficients.
10. Extract total canonical structure.
11. Extract between canonical structure.
12. Extract pooled within canonical structure.
13. Extract class means canonical structure.
14. Save canonical scores.
15. Create tabulation report.
16. Retrieve tabulation report object.
17. Initialize class means table.
18. Loop through columns for class means.
19. Extract and convert text data.
20. Populate class means table.



### Example 14
> **Summary**: Discriminant analysis to visualize the relationships between Sepal length, Sepal width, Petal length, and Petal width with respect to Species, generating canonical structures for total, between, and pooled within groups.

<!-- Keywords: #DiscriminantAnalysis, #CanonicalStructures, #JMPScriptingLanguage, #MultivariateAnalysis, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Discriminant(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	X( :Species ),
	Uncentered Canonical( 1 ),
	Use Pseudoinverses( 0 )
);
obj << Show Canonical Structures( 1 );
rpt = obj << report;
totalCanonicalStructure = rpt[Outline Box( "Canonical Plot" )][Matrix Box( 1 )] << get;
betweenCanonicalStructure = rpt[Outline Box( "Canonical Plot" )][Matrix Box( 2 )] << get;
pooledWithinCanonicalStructure = rpt[Outline Box( "Canonical Plot" )][Matrix Box( 3 )] << get;
```

**Code Explanation**:

1. Open data table;
2. Run Discriminant analysis.
3. Set Y variables.
4. Set X variable.
5. Enable Uncentered Canonical.
6. Disable Pseudoinverses.
7. Show Canonical Structures.
8. Get report object.
9. Extract Total Canonical Structure.
10. Extract Between Canonical Structure.
11. Extract Pooled Within Canonical Structure.



### Example 15
> **Summary**: Discriminant analysis to classify iris species based on sepal and petal measurements, displaying the canonical structures and retrieving report data.

<!-- Keywords: #DiscriminantAnalysis, #CanonicalStructures, #ReportObject, #JSLScriptingLanguage, #IrisData -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Discriminant( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), X( :Species ), );
obj << Show Canonical Structures( 1 );
rpt = obj << report;
classMeansCanonicalStructure = rpt[Outline Box( "Canonical Plot" )][Matrix Box( 4 )] << get;
```

**Code Explanation**:

1. Open data table;
2. Perform discriminant analysis.
3. Set show canonical structures.
4. Retrieve report object.
5. Extract canonical plot outline box.
6. Access matrix box number 4.
7. Get canonical structure data.



### Example 16
> **Summary**: Runs a multiple linear regression analysis using the Standard Least Squares personality, fitting a model to predict Species based on Sepal and Petal measurements.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #MultipleLinearRegression, #StandardLeastSquares, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
SASbtmatrix = [0.632121333 -0.199526667 1.652484000 0.712793333,
-0.199526667 0.113449333 -0.572396000 -0.229326667,
1.652484000 -0.572396000 4.371028000 1.867740000,
0.712793333 -0.229326667 1.867740000 0.804133333];
ut relative epsilon = 5e-5;
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Show Canonical Details( 1 ),
	SendToReport( Dispatch( {}, "Discriminant Scores", OutlineBox, {Close( 1 )} ) )
);
rpt = obj << report;
btmatrix = rpt[Matrix Box( 2 )] << Get;
```

**Code Explanation**:

1. Open data table;
2. Define SASbtmatrix.
3. Set relative epsilon.
4. Run Discriminant analysis.
5. Specify Species as X.
6. Include Sepal and Petal measurements as Y.
7. Show canonical details.
8. Close Discriminant Scores outline.
9. Retrieve report object.
10. Extract matrix from report.



### Example 17
> **Summary**: Runs a quadratic discriminant analysis to classify iris species based on sepal and petal dimensions, with optional model comparison and report generation for JMP Pro users.

<!-- Keywords: #JMPScriptingLanguage, #QuadraticDiscriminantAnalysis, #IrisDataset, #ModelComparison, #JMPPro -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Discriminant Method( "Quadratic" ), 
);
obj << Save Formulas;
If( JMP Product Name() == "Pro",
	obj1 = dt << Model Comparison( Y( :Name( "Prob[setosa]" ), :Name( "Prob[versicolor]" ), :Name( "Prob[virginica]" ) ) );
	rpt1 = obj1 << report;
	creator = (rpt1[String Col Box( "Creator" )] << get)[1];
);
```

**Code Explanation**:

1. Open data table;
2. Create Discriminant object.
3. Set Species as X variable.
4. Set Sepal/Petal dimensions as Y variables.
5. Use Quadratic Discriminant Method.
6. Save discriminant formulas.
7. Check if JMP version is Pro.
8. Create Model Comparison object.
9. Include probability columns.
10. Extract Creator from report.



### Example 18
> **Summary**: Executes multiple linear discriminant analyses with varying methods and options on a specified data table.

<!-- Keywords: #JSLScripting, #LinearDiscriminantAnalysis, #MultipleRegression, #DataScience, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Discriminant( X( 5 ), Y( 1 :: 4 ), Discriminant Method( "Linear" ), Shrink Covariances( 0 ), Use Pseudoinverses( 0 ), );
obj1 = dt << Discriminant( X( 5 ), Y( 1 :: 4 ), Discriminant Method( "Quadratic" ), Shrink Covariances( 0 ), Use Pseudoinverses( 0 ), );
obj1 = dt << Discriminant(
	X( 5 ),
	Y( 1 :: 4 ),
	Discriminant Method( "Regularized", Regularization Lambda( 0.5 ), Regularization Gamma( 0.5 ) ),
	Shrink Covariances( 0 ),
	Use Pseudoinverses( 0 ), 
);
obj1 = dt << Discriminant( X( 5 ), Y( 1 :: 4 ), Discriminant Method( "Wide Linear" ), Shrink Covariances( 0 ), Use Pseudoinverses( 0 ), );
```

**Code Explanation**:

1. Open data table;
2. Perform linear discriminant analysis.
3. Perform quadratic discriminant analysis.
4. Perform regularized discriminant analysis.
5. Perform wide linear discriminant analysis.



### Example 19
> **Summary**: Fits a quadratic discriminant model to a dataset, capturing log output and generating a report with group outlines and count extraction.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #LogCapture, #RegularizedMethod, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Discriminant( X( 5 ), Y( 1 :: 4 ), Discriminant Method( "Quadratic" ) );
Log Capture( obj << Consider New Levels( 0.4 ) );
obj << Discriminant Method( "Regularized", Regularization Lambda( 0.8 ), Regularization Gamma( 0.2 ) );
rpt = obj << report;
rpt["Groups"] << Open All Like This;
cnt = rpt[Outline Box( "Groups" )][Number Col Box( "Count" )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Fit quadratic discriminant model.
3. Capture log output.
4. Change method to regularized.
5. Set regularization parameters.
6. Generate report.
7. Open all group outlines.
8. Extract count column.
9. Convert counts to matrix.



### Example 20
> **Summary**: Runs the repetition of discriminant analysis and report generation for a specified number of iterations, retrieving squared distances and closing each report window.

<!-- Keywords: #JSLScripting, #DiscriminantAnalysis, #ReportGeneration, #MatrixOperations, #LoopControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Discriminant( X( 5 ), Y( 1 :: 4 ) );
rpt = obj << report;
sqDist = rpt[Number Col Box( "SqDist(Actual)" )] << get as matrix;
rpt << Close Window( 1 );
For( i = 1, i <= 10, i++,
	obj1 = dt << Discriminant( X( 5 ), Y( 1 :: 4 ) );
	rpt1 = obj1 << report;
	sqDist1 = rpt1[Number Col Box( "SqDist(Actual)" )] << get as matrix;
	rpt1 << Close Window( 1 );
);
```

**Code Explanation**:

1. Open data table;
2. Run discriminant analysis.
3. Extract report object.
4. Retrieve squared distances.
5. Close initial report window.
6. Loop 10 times.
7. Re-run discriminant analysis.
8. Extract new report object.
9. Retrieve squared distances.
10. Close current report window.



### Example 21
> **Summary**: Executes a Discriminant analysis with Wide Linear method, capturing scoring script logs and closing the window after identifying the 'Discriminant Formulas' window.

<!-- Keywords: #JSLScriptingLanguage, #DiscriminantAnalysis, #WideLinearMethod, #ScoringScript, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Discriminant( X( 5 ), Y( 1 :: 4 ), Discriminant Method( "Wide Linear" ), Shrink Covariances( 0 ), Use Pseudoinverses( 0 ), );
Log Capture( obj1 << Make Scoring Script );
For( i = N Items( Window() ), i >= 1, i--,
	scpt = Window()[i];
	scptTitle = scpt << Get window title;
	If( scptTitle == "Discriminant Formulas",
		Log Capture( scpt[Script Box( 1 )] << Run );
		scpt << Close Window;
		Break();
	);
);
```

**Code Explanation**:

1. Open data table;
2. Create Discriminant analysis object.
3. Configure Discriminant settings.
4. Capture scoring script log.
5. Loop through open windows.
6. Identify Discriminant Formulas window.
7. Run scoring script.
8. Close Discriminant Formulas window.



### Example 22
> **Summary**: Executes a discriminant analysis using the Wide Linear method on a specified data table, suppressing matrix columns and capturing the log for scoring scripts.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #WideLinearMethod, #MatrixColumns, #ScoringScripts -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Discriminant( X( 5 ), Y( 1 :: 4 ), Discriminant Method( "Wide Linear" ), Shrink Covariances( 0 ), Use Pseudoinverses( 0 ), );
obj1 << Use Matrix Columns( 0 );
Log Capture( obj1 << Make Scoring Script );
For( i = N Items( Window() ), i >= 1, i--,
	scpt = Window()[i];
	scptTitle = scpt << Get window title;
	If( scptTitle == "Discriminant Formulas",
		scpt << Close Window;
		Break();
	);
);
```

**Code Explanation**:

1. Open data table;
2. Run Discriminant analysis.
3. Set X variables.
4. Set Y variables.
5. Choose Wide Linear method.
6. Disable covariance shrinkage.
7. Disable pseudoinverses.
8. Suppress matrix columns.
9. Capture log for scoring script.
10. Close Discriminant Formulas window.



### Example 23
> **Summary**: Executes a Discriminant analysis on a data table, capturing the scoring script and closing the 'Discriminant Formulas' window.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #DataTable, #ScoringScript, #WindowManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Discriminant( X( 5 ), Y( 1 :: 4 ) );
Log Capture( obj << Make Scoring Script );
For( i = N Items( Window() ), i >= 1, i--,
	scpt = Window()[i];
	scptTitle = scpt << Get window title;
	If( scptTitle == "Discriminant Formulas",
		scpt << Close Window;
		Break();
	);
);
```

**Code Explanation**:

1. Open data table;
2. Run Discriminant analysis.
3. Capture scoring script.
4. Loop through windows.
5. Check window title.
6. Close Discriminant Formulas window.
7. Break loop.



### Example 24
> **Summary**: Discriminant analysis with multiple linear regression using the Standard Least Squares personality, retrieving covariance and correlation matrices for each group.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #MultipleLinearRegression, #StandardLeastSquares, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Discriminant(
	X( 5 ),
	Y( 1 :: 4 ),
	Use Pseudoinverses( 0 ),
	Score Data( 0 ),
	Canonical Plot( 0 ),
	Show within Covariances( 1 )
);
rpt = obj << report;
withinCov1 = rpt[Outline Box( "Covariance Matrices" )][Matrix Box( 1 )] << get;
withinCorr1 = rpt[Outline Box( "Covariance Matrices" )][Matrix Box( 2 )] << get;
obj << Discriminant Method( Quadratic );
setosaCorr1 = rpt[Outline Box( "Correlations for each Group" )][Matrix Box( 1 )] << get;
versicolorCorr1 = rpt[Outline Box( "Correlations for each Group" )][Matrix Box( 2 )] << get;
virginicaCorr1 = rpt[Outline Box( "Correlations for each Group" )][Matrix Box( 3 )] << get;
obj << Discriminant Method( Linear );
withinCov2 = rpt[Outline Box( "Covariance Matrices" )][Matrix Box( 1 )] << get;
withinCorr2 = rpt[Outline Box( "Covariance Matrices" )][Matrix Box( 2 )] << get;
```

**Code Explanation**:

1. Open data table;
2. Create discriminant analysis object.
3. Set predictor variables.
4. Set response variable range.
5. Disable pseudoinverses.
6. Disable scoring data.
7. Disable canonical plot.
8. Enable within covariances display.
9. Retrieve within covariance matrix.
10. Retrieve within correlation matrix.
11. Change discriminant method to quadratic.
12. Retrieve setosa group correlation.
13. Retrieve versicolor group correlation.
14. Retrieve virginica group correlation.
15. Change discriminant method to linear.
16. Retrieve updated within covariance matrix.
17. Retrieve updated within correlation matrix.



### Example 25
> **Summary**: Discriminant analysis to classify species based on sepal and petal measurements, utilizing stepwise variable selection and matrix columns.

<!-- Keywords: #DiscriminantAnalysis, #StepwiseVariableSelection, #MatrixColumns, #CanonicalStructure, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Canonical Plot( 0 ),
	Discriminant Scores( 0 ),
	Show Classification Counts( 0 ),
	Stepwise Variable Selection( 1 ),
	Use Matrix Columns( 1 )
);
obj << Show Canonical Structure( 1 );
obj << Redo Analysis;
obj1 = Current Report();
```

**Code Explanation**:

1. Open data table;
2. Perform Discriminant analysis.
3. Set Species as X variable.
4. Set Sepal length, width, Petal length, width as Y variables.
5. Disable Canonical Plot.
6. Disable Discriminant Scores.
7. Disable Classification Counts display.
8. Enable Stepwise Variable Selection.
9. Enable Matrix Columns usage.
10. Show Canonical Structure.



### Example 26
> **Summary**: Discriminant analysis to identify the best linear combination of variables for classification, generating a 3D canonical plot and report.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #CanonicalPlot, #MultipleLinearRegression, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Discriminant( X( 5 ), Y( 1 :: 4 ), Canonical 3D Plot );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Create discriminant analysis object.
3. Set X variable to column 5.
4. Set Y variables to columns 1-4.
5. Generate canonical 3D plot.
6. Retrieve analysis report.



### Example 27
> **Summary**: Discriminant analysis to classify observations based on multiple predictor variables, generating a scatterplot matrix for visualization and classification counts.

<!-- Keywords: #DiscriminantAnalysis, #MultipleRegression, #ScatterplotMatrix, #ClassificationCounts, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Discriminant( X( 5 ), Y( 1 :: 4 ), Show Classification Counts( 1 ), Use Pseudoinverses( 0 ), Use Matrix Columns( 1 ) );
Log Capture( obj << Scatterplot Matrix );
obj1 = Current Report();
```

**Code Explanation**:

1. Open data table;
2. Perform discriminant analysis.
3. Set predictor variables.
4. Set response variables.
5. Show classification counts.
6. Do not use pseudoinverses.
7. Use matrix columns.
8. Capture log output.
9. Create scatterplot matrix.
10. Assign current report.



### Example 28
> **Summary**: Discriminant analysis to classify data into predefined groups, saving the resulting matrices and retrieving the classification results.

<!-- Keywords: #DiscriminantAnalysis, #Classification, #MatrixOperations, #DataTableManipulation, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), );
obj << save discrim matrices;
valList = dt << get property( "Discrim Results" );
expList = obj << get discrim matrices;
```

**Code Explanation**:

1. Open data table;
2. Perform discriminant analysis.
3. Save discriminant matrices.
4. Retrieve discriminant results.
5. Retrieve saved matrices.



### Example 29
> **Summary**: Calculates and stores discriminant matrices for a given data table, utilizing the Discriminant function to analyze categorical and continuous variables.

<!-- Keywords: #JSLScriptingLanguage, #DiscriminantAnalysis, #DataTableOperations, #MatrixCalculations, #StatisticalModeling -->

**Code**:
```jsl
ut relative epsilon = 1e-10;
dt = Open("data_table.jmp");
obj = Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), );
obj << save discrim matrices;
valList = dt << get property( "Discrim Results" );
expList = obj << get discrim matrices;
```

**Code Explanation**:

1. Set relative epsilon.
2. Open data table;
3. Create Discriminant object.
4. Save discriminant matrices.
5. Retrieve Discrim Results property.
6. Get discriminant matrices.



### Example 30
> **Summary**: Discriminant analysis to predict species based on skull length, teeth row, palatine foramen, and jaw length, extracting likelihood ratio, F-value, number of degrees of freedom, denominator degrees of freedom, and p-value.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #MultivariateAnalysis, #DataScience, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Discriminant( X( :species ), Y( :skull length, :teeth row, :palatine foramen, :jaw length ), Show Canonical Details( 1 ) );
rpt = obj << report;
obs_likelihood_ratio = rpt[Number Col Box( "Likelihood Ratio" )] << get as matrix;
obs_F_value = rpt[Number Col Box( "Approx. F" )] << get as matrix;
obs_numDF = rpt[Number Col Box( "NumDF" )] << get as matrix;
obs_denDF = rpt[Number Col Box( "DenDF" )] << get as matrix;
obs_p_value = rpt[Number Col Box( "Prob>F" )] << get as matrix;
obj << close window;
obj = dt << Discriminant( X( :species ), Y( :skull length, :teeth row, palatine foramen ), Show Canonical Details( 1 ) );
rpt = obj << report;
obs_likelihood_ratio = rpt[Number Col Box( "Likelihood Ratio" )] << get as matrix;
obs_F_value = rpt[Number Col Box( "Approx. F" )] << get as matrix;
obs_numDF = rpt[Number Col Box( "NumDF" )] << get as matrix;
obs_denDF = rpt[Number Col Box( "DenDF" )] << get as matrix;
obs_p_value = rpt[Number Col Box( "Prob>F" )] << get as matrix;
obj << close window;
obj = dt << Discriminant( X( :species ), Y( :skull length, :teeth row ), Show Canonical Details( 1 ) );
rpt = obj << report;
obs_likelihood_ratio = rpt[Number Col Box( "Likelihood Ratio" )] << get as matrix;
obs_F_value = rpt[Number Col Box( "Approx. F" )] << get as matrix;
obs_numDF = rpt[Number Col Box( "NumDF" )] << get as matrix;
obs_denDF = rpt[Number Col Box( "DenDF" )] << get as matrix;
obs_p_value = rpt[Number Col Box( "Prob>F" )] << get as matrix;
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Run Discriminant analysis.
3. Extract Likelihood Ratio.
4. Extract Approx. F value.
5. Extract NumDF.
6. Extract DenDF.
7. Extract Prob>F.
8. Close window.
9. Repeat steps 2-8 with fewer variables.
10. Repeat steps 2-8 with fewer variables.



### Example 31
> **Summary**: Discriminant analysis to classify species based on sepal and petal features, retrieving likelihood ratio, F-value, degrees of freedom, and p-value.

<!-- Keywords: #DiscriminantAnalysis, #JMPScriptingLanguage, #MultivariateStatistics, #MachineLearning, #DataScience -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Discriminant( X( :species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Show Canonical Details( 1 ) );
rpt = obj << report;
obs_likelihood_ratio = rpt[Number Col Box( "Likelihood Ratio" )] << get as matrix;
obs_F_value = rpt[Number Col Box( "Approx. F" )] << get as matrix;
obs_numDF = rpt[Number Col Box( "NumDF" )] << get as matrix;
obs_denDF = rpt[Number Col Box( "DenDF" )] << get as matrix;
obs_p_value = rpt[Number Col Box( "Prob>F" )] << get as matrix;
obj << close window;
obj = dt << Discriminant( X( :species ), Y( :Sepal length, :Sepal width, :Petal length ), Show Canonical Details( 1 ) );
rpt = obj << report;
obs_likelihood_ratio = rpt[Number Col Box( "Likelihood Ratio" )] << get as matrix;
obs_F_value = rpt[Number Col Box( "Approx. F" )] << get as matrix;
obs_numDF = rpt[Number Col Box( "NumDF" )] << get as matrix;
obs_denDF = rpt[Number Col Box( "DenDF" )] << get as matrix;
obs_p_value = rpt[Number Col Box( "Prob>F" )] << get as matrix;
obj << close window;
obj = dt << Discriminant( X( :species ), Y( :Sepal length, :Sepal width ), Show Canonical Details( 1 ) );
rpt = obj << report;
obs_likelihood_ratio = rpt[Number Col Box( "Likelihood Ratio" )] << get as matrix;
obs_F_value = rpt[Number Col Box( "Approx. F" )] << get as matrix;
obs_numDF = rpt[Number Col Box( "NumDF" )] << get as matrix;
obs_denDF = rpt[Number Col Box( "DenDF" )] << get as matrix;
obs_p_value = rpt[Number Col Box( "Prob>F" )] << get as matrix;
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Perform discriminant analysis.
3. Retrieve likelihood ratio.
4. Retrieve F-value.
5. Retrieve numerator degrees of freedom.
6. Retrieve denominator degrees of freedom.
7. Retrieve p-value.
8. Close analysis window.
9. Perform discriminant analysis (reduced features).
10. Retrieve results (repeat steps 3-8).



### Example 32
> **Summary**: Discriminant analysis to predict group membership based on the specified variables, utilizing the Standard Least Squares personality and generating reports with observed log-likelihood and predicted probabilities.

<!-- Keywords: #DiscriminantAnalysis, #StandardLeastSquares, #JMPScriptingLanguage, #PredictiveModeling, #DataScience -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Discriminant( X( :location name ), Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U ) );
obj << Show Probabilities to each group( 1 );
dtMat = dt << Get All Columns As Matrix;
Y = dtMat[0, 1];
obj << Specify Priors( Proportional to Occurrence );
rpt = obj << report;
obsLoglik = (rpt[Outline Box( "Score Summaries" )][Number Col Box( "-2LogLikelihood" )] << get as matrix)[1];
ProbPred = (rpt[Outline Box( "Probabilities to each group" )][Table Box( 1 )] << get as matrix)[0, 2 :: 8];
ProbPredVec = [];
For( i = 1, i <= Max( Y ), i++,
	ProbPredVec |/= ProbPred[Loc( Y == i ), i]
);
expLoglik = (-2) * Sum( Log( ProbPredVec ) );
obj << Specify Priors( Equal Probabilities );
rpt = obj << report;
obsLoglik = (rpt[Outline Box( "Score Summaries" )][Number Col Box( "-2LogLikelihood" )] << get as matrix)[1];
ProbPred = (rpt[Outline Box( "Probabilities to each group" )][Table Box( 1 )] << get as matrix)[0, 2 :: 8];
ProbPredVec = [];
For( i = 1, i <= Max( Y ), i++,
	ProbPredVec |/= ProbPred[Loc( Y == i ), i]
);
expLoglik = (-2) * Sum( Log( ProbPredVec ) );
obj << Specify Priors( [0.1, 0.1, 0.2, 0.3, 0.1, 0.05, 0.15] );
rpt = obj << report;
obsLoglik = (rpt[Outline Box( "Score Summaries" )][Number Col Box( "-2LogLikelihood" )] << get as matrix)[1];
ProbPred = (rpt[Outline Box( "Probabilities to each group" )][Table Box( 1 )] << get as matrix)[0, 2 :: 8];
ProbPredVec = [];
For( i = 1, i <= Max( Y ), i++,
	ProbPredVec |/= ProbPred[Loc( Y == i ), i]
);
expLoglik = (-2) * Sum( Log( ProbPredVec ) );
```

**Code Explanation**:

1. Open data table;
2. Create discriminant analysis object.
3. Display probabilities to each group.
4. Convert data table to matrix.
5. Extract response variable.
6. Set priors proportional to occurrence.
7. Generate analysis report.
8. Retrieve observed log-likelihood.
9. Extract predicted probabilities.
10. Calculate expected log-likelihood.
11. Set equal prior probabilities.
12. Generate analysis report.
13. Retrieve observed log-likelihood.
14. Extract predicted probabilities.
15. Calculate expected log-likelihood.
16. Set custom prior probabilities.
17. Generate analysis report.
18. Retrieve observed log-likelihood.
19. Extract predicted probabilities.
20. Calculate expected log-likelihood.



### Example 33
> **Summary**: Discriminant analysis on the provided data table, extracting observed and expected log-likelihoods, predicted probabilities, and custom prior probabilities.

<!-- Keywords: #JSLScriptingLanguage, #DiscriminantAnalysis, #Log-Likelihood, #PriorProbabilities, #DataTable -->

**Code**:
```jsl
ut relative epsilon = 1e-10;
dt = Open("data_table.jmp");
obj = dt << Discriminant( X( :location name ), Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U ) );
obj << Show Probabilities to each group( 1 );
dtMat = dt << Get All Columns As Matrix;
Y = dtMat[0, 1];
obj << Specify Priors( Proportional to Occurrence );
rpt = obj << report;
obsLoglik = (rpt[Outline Box( "Score Summaries" )][Number Col Box( "-2LogLikelihood" )] << get as matrix)[1];
ProbPred = (rpt[Outline Box( "Probabilities to each group" )][Table Box( 1 )] << get as matrix)[0, 2 :: 8];
ProbPredVec = [];
For( i = 1, i <= Max( Y ), i++,
	ProbPredVec |/= ProbPred[Loc( Y == i ), i]
);
expLoglik = (-2) * Sum( Log( ProbPredVec ) );
obj << Specify Priors( Equal Probabilities );
rpt = obj << report;
obsLoglik = (rpt[Outline Box( "Score Summaries" )][Number Col Box( "-2LogLikelihood" )] << get as matrix)[1];
ProbPred = (rpt[Outline Box( "Probabilities to each group" )][Table Box( 1 )] << get as matrix)[0, 2 :: 8];
ProbPredVec = [];
For( i = 1, i <= Max( Y ), i++,
	ProbPredVec |/= ProbPred[Loc( Y == i ), i]
);
expLoglik = (-2) * Sum( Log( ProbPredVec ) );
obj << Specify Priors( [0.1, 0.1, 0.2, 0.3, 0.1, 0.05, 0.15] );
rpt = obj << report;
obsLoglik = (rpt[Outline Box( "Score Summaries" )][Number Col Box( "-2LogLikelihood" )] << get as matrix)[1];
ProbPred = (rpt[Outline Box( "Probabilities to each group" )][Table Box( 1 )] << get as matrix)[0, 2 :: 8];
ProbPredVec = [];
For( i = 1, i <= Max( Y ), i++,
	ProbPredVec |/= ProbPred[Loc( Y == i ), i]
);
expLoglik = (-2) * Sum( Log( ProbPredVec ) );
```

**Code Explanation**:

1. Define relative epsilon.
2. Open data table;
3. Run Discriminant analysis.
4. Enable showing probabilities.
5. Convert data table to matrix.
6. Extract response variable.
7. Set priors proportional to occurrence.
8. Retrieve report from analysis.
9. Extract observed log-likelihood.
10. Extract predicted probabilities.
11. Initialize probability vector.
12. Loop through each class.
13. Aggregate probabilities for each class.
14. Calculate expected log-likelihood.
15. Set equal prior probabilities.
16. Retrieve updated report.
17. Extract new observed log-likelihood.
18. Extract new predicted probabilities.
19. Reinitialize probability vector.
20. Loop through each class again.
21. Aggregate probabilities for each class.
22. Calculate new expected log-likelihood.
23. Set custom prior probabilities.
24. Retrieve final report.
25. Extract final observed log-likelihood.
26. Extract final predicted probabilities.
27. Reinitialize probability vector.
28. Loop through each class once more.
29. Aggregate probabilities for each class.
30. Calculate final expected log-likelihood.



### Example 34
> **Summary**: Runs a stepwise discriminant analysis to identify the most relevant variables in predicting species based on sepal and petal measurements, utilizing interactive features for model refinement.

<!-- Keywords: #JSLScriptingLanguage, #DiscriminantAnalysis, #StepwiseSelection, #ModelRefining, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), );
rpt = obj << report;
obj << Stepwise Variable Selection( 1 );
obj << Step Forward;
obj << Step Forward;
obj << Step Forward;
obj << Step Forward;
obj << Apply This Model;
rpt = obj << report;
obj << Stepwise Variable Selection( 1 );
obj << Step Forward;
obj << Step Forward;
obj << Apply This Model;
rpt = obj << report;
obj << Stepwise Variable Selection( 1 );
obj << Remove All;
obj << Enter All;
obj << Step Backward;
obj << Step Backward;
obj << Apply This Model;
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create discriminant analysis object.
3. Generate initial report.
4. Enable stepwise variable selection.
5. Perform step forward.
6. Perform step forward.
7. Perform step forward.
8. Perform step forward.
9. Apply selected model.
10. Generate updated report.
11. Enable stepwise variable selection again.
12. Perform step forward.
13. Perform step forward.
14. Apply selected model.
15. Generate updated report.
16. Enable stepwise variable selection again.
17. Remove all variables.
18. Enter all variables.
19. Perform step backward.
20. Perform step backward.
21. Apply selected model.
22. Generate final report.



### Example 35
> **Summary**: Runs a stepwise discriminant analysis to select the most relevant variables in a dataset, utilizing the Step Forward and Backward features.

<!-- Keywords: #JSLScripting, #DiscriminantAnalysis, #StepwiseSelection, #VariableSelection, #MachineLearning -->

**Code**:
```jsl
ut relative epsilon = 1e-10;
dt = Open("data_table.jmp");
obj = Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), );
rpt = obj << report;
obj << Stepwise Variable Selection( 1 );
obj << Step Forward;
obj << Step Forward;
obj << Step Forward;
obj << Step Forward;
obj << Apply This Model;
rpt = obj << report;
obj << Stepwise Variable Selection( 1 );
obj << Step Forward;
obj << Step Forward;
obj << Apply This Model;
rpt = obj << report;
obj << Stepwise Variable Selection( 1 );
obj << Remove All;
obj << Enter All;
obj << Step Backward;
obj << Step Backward;
obj << Apply This Model;
rpt = obj << report;
```

**Code Explanation**:

1. Set relative epsilon.
2. Open data table;
3. Create discriminant analysis object.
4. Generate initial report.
5. Enable stepwise variable selection.
6. Perform step forward selection.
7. Repeat step forward.
8. Repeat step forward.
9. Repeat step forward.
10. Apply selected model.



### Example 36
> **Summary**: Runs a Wide Linear discriminant analysis to classify iris species based on sepal and petal dimensions, with prior probabilities specified and classification counts displayed.

<!-- Keywords: #JSLScriptingLanguage, #DiscriminantAnalysis, #WideLinearMethod, #PriorProbabilities, #ClassificationCounts -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Discriminant Method( "Wide Linear" ),
	Specify Priors( [0.25, 0, 0.75] ),
	Show Classification Counts( 1 ),
	Use Matrix Columns( 1 ), 
);
```

**Code Explanation**:

1. Open data table;
2. Create Discriminant object.
3. Set Species as X variable.
4. Set Sepal and Petal dimensions as Y variables.
5. Choose Wide Linear method.
6. Specify prior probabilities.
7. Enable classification counts display.
8. Use matrix columns option.



### Example 37
> **Summary**: Discriminant analysis on the provided data table, adding a new column and capturing log output while deleting the first five columns and coloring points in the plot.

<!-- Keywords: #DiscriminantAnalysis, #DataManipulation, #JSLScripting, #LogCapture, #PlotCustomization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
dt << New Column();
Log Capture( dt << Delete Columns( 1 :: 5 ) );
obj << Color Points;
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Run Discriminant analysis.
3. Add new column.
4. Capture log output.
5. Delete first five columns.
6. Color points in plot.
7. Close Discriminant window.



### Example 38
> **Summary**: Creates a web report that includes a discriminant analysis, 3D scatterplot, and logistic model fit for the Iris dataset, utilizing JMP's Report() function.

<!-- Keywords: #JSLScriptingLanguage, #DiscriminantAnalysis, #Scatterplot3D, #LogisticRegression, #WebReporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
discriminant = Report( Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) ) );
scatterplot3D = Report(
	Scatterplot 3D(
		Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
		Frame3D( Set Rotation( -37.7763571468042, -20.0181349932962, 0.755666043084993 ) )
	)
);
fitModel = Report(
	Fit Model( Y( :Species ), Effects( :Sepal length, :Sepal width, :Petal length, :Petal width ), Personality( Nominal Logistic ), Run )
);
webrpt = New Web Report();
webrpt << Add Reports( {discriminant, scatterplot3D, fitModel} );
webrpt << Index( Title( "test_003_case1_title" ), Timestamp( 0 ) );
dirPath = "$TEMP\TempReports";
rptPath = webrpt << Save( dirPath );
```

**Code Explanation**:

1. Open data table;
2. Create discriminant analysis report.
3. Generate 3D scatterplot report.
4. Fit logistic model report.
5. Create new web report.
6. Add reports to web report.
7. Set web report title and timestamp.
8. Define temporary directory path.
9. Save web report to directory.



### Example 39
> **Summary**: Discriminant analysis and generates a 3D scatter plot to visualize the relationship between sepal length, sepal width, petal length, and petal width in a dataset.

<!-- Keywords: #JSLScripting, #DiscriminantAnalysis, #Scatterplot3D, #DataVisualization, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
Scatterplot 3D(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Frame3D( Set Rotation( -37.7763571468042, -20.0181349932962, 0.755666043084993 ) )
);
windows = Find All( Reports );
For( i = 1, i <= N Items( windows ), i++,
	If( windows[i] << Get Window Title == "JSL Unit Testing",
		Remove From( windows, i )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Perform discriminant analysis.
3. Create 3D scatter plot.
4. Rotate 3D frame.
5. Find all reports.
6. Loop through reports.
7. Check window title.
8. Remove unwanted report.
9. Continue loop.
10. End loop.



## Discriminant using Log Capture
### Example 1
> **Summary**: Creates a Discriminant analysis object in JMP, setting response variables 1-4 and predictor variable 5, while capturing log output.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #DataTable, #LogCapture, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture( obj = dt << Discriminant( Y( 1 :: 4 ), X( 5 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create Discriminant analysis object.
3. Set response variables 1-4.
4. Set predictor variable 5.
5. Capture log output.



### Example 2
> **Summary**: Runs a wide linear discriminant analysis on a specified data table, capturing log information and displaying classification counts.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #LogCapture, #WideLinearMethod, #DataTableOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
lcap = Log Capture(
	dt << Discriminant(
		X( 5 ),
		Y( 1 :: 4 ),
		Discriminant Method( "Wide Linear" ),
		Show Classification Counts( 1 ),
		Use Pseudoinverses( 0 ),
		Save Formulas
	)
);
```

**Code Explanation**:

1. Open data table;
2. Start log capture.
3. Perform discriminant analysis.
4. Set X variable count.
5. Define Y variables range.
6. Choose wide linear method.
7. Display classification counts.
8. Disable pseudoinverses.
9. Save prediction formulas.
10. End log capture.



## Discriminant using Expr
> **Summary**: Process of performing a discriminant analysis on a data table, creating a new continuous species column and extracting squared distances from the report.

<!-- Keywords: #JSLScriptingLanguage, #DiscriminantAnalysis, #DataTableManipulation, #ReportExtraction, #MissingValueHandling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
discrim = Expr(
	dt << Discriminant( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), X( :Species ) )
);
dt << New Column( "Species Continuous", Formula( If( :Species == "setosa", 1, :Species == "versicolor", 2, 3 ) ) );
dt:Species Continuous << Delete Formula;
discrim1 = Expr(
	dt << Discriminant( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), X( :Species Continuous ) )
);
dt:Species Continuous[1 :: 5] = 0;
dt:Species Continuous << Set Property( "Missing Value Codes", {0} );
obj1 = Eval( Name Expr( discrim1 ) );
sqdist1 = Matrix( Report( obj1 )[Number Col Box( "SqDist(Actual)" )] << get );
dt:Species Continuous[1 :: 5] = .;
obj2 = Eval( Name Expr( discrim1 ) );
sqdist2 = Matrix( Report( obj2 )[Number Col Box( "SqDist(Actual)" )] << get );
```

**Code Explanation**:

1. Open data table;
2. Define discriminant analysis expression.
3. Create new continuous species column.
4. Delete formula from new column.
5. Define second discriminant analysis expression.
6. Set first five rows to zero.
7. Set missing value code for new column.
8. Evaluate second discriminant analysis.
9. Extract squared distances from report.
10. Reset first five rows to missing.



## Discriminant using New Column
### Example 1
> **Summary**: Process of performing discriminant analysis on a dataset, generating canonical scores for two groups and saving them for further analysis.

<!-- Keywords: #DiscriminantAnalysis, #CanonicalScores, #JMPScriptingLanguage, #DataAnalysis, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Group", Numeric, Nominal, Formula( Random Integer( 2 ) ) );
obj = dt << Discriminant( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), X( :Species ), BY( :Group ), );
r1 = Report( obj[1] )["Discriminant Analysis Group=1"] << get scriptable object;
r1 << Save Canonical Scores;
r2 = Report( obj[2] )["Discriminant Analysis Group=2"] << get scriptable object;
r2 << Save Canonical Scores;
dt << Select where( :Group != 1 ) << Exclude;
obj1 = dt << Discriminant( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), X( :Species ) );
obj1 << Save Canonical Scores;
dt << Unexclude;
dt << Invert Row Selection << Exclude;
obj2 = dt << Discriminant( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), X( :Species ) );
obj2 << Save Canonical Scores;
_mat = dt << Get as matrix( {6 :: 12} );
```

**Code Explanation**:

1. Open data table;
2. Add "Group" column.
3. Perform Discriminant Analysis.
4. Get report for Group 1.
5. Save canonical scores for Group 1.
6. Get report for Group 2.
7. Save canonical scores for Group 2.
8. Exclude non-Group 1 rows.
9. Perform Discriminant Analysis on remaining data.
10. Save canonical scores for remaining data.



### Example 2
> **Summary**: Fits a standard least squares model with multiple effects and generating a profiler plot, utilizing Discriminant Analysis and matrix operations in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #MatrixOperations, #LeastSquaresModel, #ProfilerPlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Group", Numeric, Nominal, Formula( Random Integer( 2 ) ) );
obj = dt << Discriminant( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), X( :Species ), BY( :Group ), );
r1 = Report( obj[1] )["Discriminant Analysis Group=1"] << get scriptable object;
r1 << Save Formulas;
r2 = Report( obj[2] )["Discriminant Analysis Group=2"] << get scriptable object;
r2 << Save Formulas;
dt << Select where( :Group != 1 ) << Exclude;
obj1 = dt << Discriminant( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), X( :Species ) );
obj1 << Save Formulas;
dt << Unexclude;
dt << Invert Row Selection << Exclude;
obj2 = dt << Discriminant( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), X( :Species ) );
obj2 << Save Formulas;
_mat = dt << Get as matrix( {6 :: 29} );
For( i = 1, i <= N Rows( _mat ), i++,
	If( _mat[i, 1] == 1, , )
);
```

**Code Explanation**:

1. Open data table;
2. Add new "Group" column.
3. Run Discriminant analysis by Group.
4. Save formulas for Group 1 report.
5. Save formulas for Group 2 report.
6. Exclude rows where Group != 1.
7. Run Discriminant analysis without Group.
8. Save formulas for ungrouped analysis.
9. Unexclude previously excluded rows.
10. Invert row selection and exclude again.
11. Run Discriminant analysis without Group.
12. Save formulas for second ungrouped analysis.
13. Get matrix from specified columns.
14. Loop through matrix rows.
15. Check if first column value is 1.



### Example 3
> **Summary**: Fits a standard least squares model with multiple effects and generating a profiler plot using JMP's Discriminant analysis feature.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #LeastSquaresModel, #ProfilerPlot, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Missing" );
obj = dt << Discriminant( X( :Species ), Y( :Missing ), Show Classification Counts( 1 ), Use Matrix Columns( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create new column "Missing".
3. Perform discriminant analysis.
4. Set X variable to Species.
5. Set Y variable to Missing.
6. Show classification counts.
7. Use matrix columns.



### Example 4
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot using discriminant analysis in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #ProfilerPlot, #LeastSquaresModel, #MultivariateStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "F" );
dt:f[1] = 1;
lc = Trim( Log Capture( Discriminant( X( :Species ), Freq( :F ), Y( :Sepal length ), Canonical Plot( 1 ), ) ) );
```

**Code Explanation**:

1. Open data table;
2. Add new column "F".
3. Set first row of "F" to 1.
4. Perform discriminant analysis.
5. Use Species as X variable.
6. Use F as frequency variable.
7. Use Sepal length as Y variable.
8. Enable canonical plot.
9. Capture log output.
10. Trim captured log.



### Example 5
> **Summary**: Fits a standard least squares model with multiple effects and generating a profiler plot using Discriminant analysis in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #LeastSquaresModel, #ProfilerPlot, #MultivariateAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "LinDepend", Formula( 0.25 * :Sepal length + 0.25 * :Sepal width + 0.25 * :Petal length + 0.25 * :Sepal width ) );
obj1 = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Sepal width, :LinDepend ),
	Use Pseudoinverses( 1 )
);
entropy1R2 = (Report( obj1 )[Number Col Box( "Entropy RSquare" )] << get)[1];
obj1 << Save Formulas;
If( JMP Product Name() == "Pro",
	obj = dt << Model Comparison( Y( :Name( "Prob[setosa]" ), :Name( "Prob[versicolor]" ), :Name( "Prob[virginica]" ) ) );
	entropyR2 = (Report( obj )[Number Col Box( "Entropy RSquare" )] << get)[1];
);
```

**Code Explanation**:

1. Open data table;
2. Create new column "LinDepend".
3. Apply Discriminant analysis.
4. Use pseudoinverses in analysis.
5. Extract Entropy RSquare value.
6. Save analysis formulas.
7. Check for JMP Pro version.
8. Perform Model Comparison if Pro.
9. Extract Entropy RSquare for comparison.
10. End script.



### Example 6
> **Summary**: Fits a standard least squares model with multiple effects and generating a profiler plot using JMP's Discriminant analysis feature.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #LeastSquaresModel, #ProfilerPlot, #StepwiseSelection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Valid", Values( J( N Rows( dt ), 1, Random Integer( 0, 2 ) ) ) );
obj = dt << Discriminant(
	X( 5 ),
	Y( 1 :: 4 ),
	Validation( 6 ),
	Stepwise Variable Selection( 1 ),
	Shrink Covariances( 0 ),
	Uncentered Canonical( 0 ),
	Use Pseudoinverses( 0 )
);
obj << Step Forward;
```

**Code Explanation**:

1. Open data table;
2. Add "Valid" column.
3. Initialize Discriminant analysis.
4. Set X variables.
5. Set Y variables.
6. Enable validation.
7. Enable stepwise selection.
8. Disable covariance shrinkage.
9. Disable uncentered canonical.
10. Disable pseudoinverses.
11. Perform step forward.



### Example 7
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot using JMP's Discriminant analysis feature.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #LeastSquaresModel, #ProfilerPlot, #MultivariateStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Valid", Values( J( N Rows( dt ), 1, Random Integer( 0, 2 ) ) ) );
obj = dt << Discriminant(
	X( 5 ),
	Y( 1 :: 4 ),
	Validation( 6 ),
	Stepwise Variable Selection( 1 ),
	Shrink Covariances( 0 ),
	Uncentered Canonical( 0 ),
	Use Pseudoinverses( 0 )
);
obj << Go;
```

**Code Explanation**:

1. Open data table;
2. Add "Valid" column.
3. Generate random validation values.
4. Initiate Discriminant analysis.
5. Set X variables count to 5.
6. Define Y variables range.
7. Enable validation method.
8. Activate stepwise variable selection.
9. Disable covariance shrinkage.
10. Disable uncentered canonical.
11. Disable pseudoinverses use.



### Example 8
> **Summary**: Fits a standard least squares model with multiple effects and generating a profiler plot, utilizing discriminant analysis to validate the model.

<!-- Keywords: #JSLScriptingLanguage, #DiscriminantAnalysis, #LeastSquaresModel, #ProfilerPlot, #DataValidation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Validation", Formula( Random Integer( 0, 1 ) ) );
obj = dt << Discriminant(
	X( :Sex ),
	Validation( :Validation ),
	Y( :Age, :Weight, :Oxy, :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Canonical Plot( 0 ),
	Score Data( 0 ),
	Show Classification Counts( 0 ),
	Stepwise Variable Selection( 1 ),
	Use Matrix Columns( 1 )
);
rpt = obj << report;
rpt[Button Box( 3 )] << Click;
ent = J( 7, 1, 0 );
For( i = 1, i <= N Rows( ent ), i++,
	ent[i] = rpt[CheckBoxBox( 2 )] << Get( i )
);
```

**Code Explanation**:

1. Open data table;
2. Add validation column.
3. Perform discriminant analysis.
4. Set validation method.
5. Specify predictor variables.
6. Disable canonical plot.
7. Disable score data.
8. Disable classification counts.
9. Enable stepwise selection.
10. Use matrix columns.



## Discriminant using N Cols
### Example 1
> **Summary**: Process of running a Discriminant analysis, retrieving probabilities and squared distances for each group, and saving formulas in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #DataVisualization, #StatisticalModeling, #JSLProgramming -->

**Code**:
```jsl
dt = Open("data_table.jmp");
noCol = N Cols( dt );
obj = dt << Discriminant(
	X( 5 ),
	Y( 1 :: 4 ),
	Discriminant Scores( 0 ),
	Show Distances to each group( 1 ),
	Show Probabilities to each group( 1 ),
	Show Classification Counts( 1 ),
	Use Pseudoinverses( 0 ),
	Use Matrix Columns( 1 ),
	SendToReport(
		Dispatch( {}, "Probabilities to each group", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Squared Distances to each group", OutlineBox, {Close( 1 )} ), 
	)
);
rpt = obj << report;
probLin = (rpt[Outline Box( "Probabilities to each group" )][Table Box( 1 )] << get as matrix())[0, 2 :: 4];
sqDistLin = (rpt[Outline Box( "Squared Distances to each group" )][Table Box( 1 )] << get as matrix())[0, 2 :: 4];
obj << Save Formulas;
colNames = dt << Get Column Names();
For( j = N Cols( dt ), j > noCol, j--,
	dt << Delete Column( j )
);
obj << Discriminant Method( "Quadratic" );
probQuad = (rpt[Outline Box( "Probabilities to each group" )][Table Box( 1 )] << get as matrix())[0, 2 :: 4];
sqDistQuad = (rpt[Outline Box( "Squared Distances to each group" )][Table Box( 1 )] << get as matrix())[0, 2 :: 4];
obj << Save Formulas;
```

**Code Explanation**:

1. Open data table;
2. Count columns in dataset.
3. Run Discriminant analysis.
4. Set X variable count.
5. Set Y variables range.
6. Disable Discriminant Scores.
7. Enable distances to groups.
8. Enable probabilities to groups.
9. Enable classification counts.
10. Disable pseudoinverses.
11. Enable matrix columns.
12. Close probability outline box.
13. Close squared distance outline box.
14. Save formulas from analysis.
15. Retrieve column names.
16. Loop through columns.
17. Delete added columns.
18. Change Discriminant method to Quadratic.
19. Retrieve quadratic probabilities.
20. Retrieve quadratic squared distances.
21. Save quadratic formulas.



### Example 2
> **Summary**: Process of performing discriminant analysis, configuring options, and extracting probability matrices from a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #DataTableManipulation, #ProbabilityMatrix, #JSLCode -->

**Code**:
```jsl
dt = Open("data_table.jmp");
noCol = N Cols( dt );
obj = dt << Discriminant(
	X( 1 ),
	Y( 2 :: 16 ),
	Discriminant Scores( 0 ),
	Show Probabilities to each group( 1 ),
	SendToReport( Dispatch( {}, "Probabilities to each group", OutlineBox, {Close( 1 )} ) )
);
rpt = obj << report;
probLin = (rpt[Outline Box( "Probabilities to each group" )][Table Box( 1 )] << get as matrix())[0, 2 :: 8];
obj << Save Formulas;
colNames = dt << Get Column Names();
For( j = N Cols( dt ), j > noCol, j--,
	dt << Delete Column( j )
);
obj << Specify Priors( Proportional to Occurrence );
obj << Discriminant Scores( 0 );
probLin = (rpt[Outline Box( "Probabilities to each group" )][Table Box( 1 )] << get as matrix())[0, 2 :: 8];
obj << Save Formulas;
```

**Code Explanation**:

1. Open data table;
2. Count columns in table.
3. Perform discriminant analysis.
4. Configure discriminant options.
5. Retrieve analysis report.
6. Extract probability matrix.
7. Save discriminant formulas.
8. Get column names.
9. Delete added columns.
10. Set priors proportional to occurrence.
11. Disable discriminant scores.
12. Update probability matrix.
13. Save updated formulas.



## Discriminant using Select Randomly
### Example 1
> **Summary**: Process of performing a Discriminant analysis on a data table, extracting relevant metrics and tables from the report, and handling specific requirements for JMP Pro version.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #DataTableManipulation, #ReportExtraction, #JMPPro -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Randomly( 0.3 );
dt << Exclude;
obj = dt << Discriminant( X( 5 ), Y( 1 :: 4 ), Cross Validate by Excluded Rows( 1 ) );
rpt = obj << report;
exclTtl = rpt[Outline Box( "Score Summaries" )][Text Box( 2 )] << get text;
exclSrc = Trim( Words( rpt[Outline Box( "Score Summaries" )][String Col Box( 1 )] << get text, "g" )[2] );
exclCnt = (rpt[Outline Box( "Score Summaries" )][Number Col Box( 1 )] << get as matrix)[2];
scrSumm = rpt[Outline Box( "Score Summaries" )][Table Box( 1 )] << get as matrix;
trnMat = rpt[Outline Box( "Score Summaries" )][Table Box( 2 )] << get as matrix;
exclMat = rpt[Outline Box( "Score Summaries" )][Table Box( 4 )] << get as matrix;
If( JMP Product Name() == "Pro",
	dt << Unexclude;
	r = dt << get selected rows;
	valMat = J( N Rows( dt ), 1, 0 );
	For( i = 1, i <= N Rows( r ), i++,
		ValMat[r[i]] = 1
	);
	dt << New Column( "Validation", Set Values( ValMat ) );
	obj1 = dt << Discriminant( X( 5 ), Y( 1 :: 4 ), Validation( Validation ) );
	rpt1 = obj1 << report;
	exclTtl1 = rpt1[Outline Box( "Score Summaries" )][Text Box( 2 )] << get text;
	exclSrc1 = Trim( Words( rpt1[Outline Box( "Score Summaries" )][String Col Box( 1 )] << get text, "g" )[2] );
	exclCnt1 = (rpt1[Outline Box( "Score Summaries" )][Number Col Box( 1 )] << get as matrix)[2];
	scrSumm1 = rpt1[Outline Box( "Score Summaries" )][Table Box( 1 )] << get as matrix;
	trnMat1 = rpt1[Outline Box( "Score Summaries" )][Table Box( 2 )] << get as matrix;
	exclMat1 = rpt1[Outline Box( "Score Summaries" )][Table Box( 4 )] << get as matrix;
);
```

**Code Explanation**:

1. Open data table;
2. Select 30% randomly.
3. Exclude selected rows.
4. Run Discriminant analysis.
5. Get report object.
6. Extract title from score summaries.
7. Extract source from score summaries.
8. Extract count from score summaries.
9. Extract score summaries table.
10. Extract training matrix table.
11. Extract excluded matrix table.
12. Check if JMP Pro version.
13. Unexclude rows.
14. Get selected row indices.
15. Create validation column.
16. Run Discriminant analysis with validation.
17. Get new report object.
18. Extract title from new score summaries.
19. Extract source from new score summaries.
20. Extract count from new score summaries.
21. Extract new score summaries table.
22. Extract new training matrix table.
23. Extract new excluded matrix table.



### Example 2
> **Summary**: Process of performing a discriminant analysis on a data table, selecting 40% of rows randomly, and saving prediction formulas and discriminant matrices.

<!-- Keywords: #JSLScriptingLanguage, #DiscriminantAnalysis, #DataTableManipulation, #PredictiveModeling, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Randomly( 0.40 );
dt << Data View;
dt1 = Current Data Table();
obj = dt1 << Discriminant( X( 5 ), Y( 1 :: 4 ) );
nCol11 = N Col( dt1 );
obj << Save Formulas;
nCol12 = N Col( dt1 );
dt1 << Delete Columns( nCol11 + 1 :: nCol12 );
obj << Save Discrim Matrices;
scptDT1 = dt1 << Get Script;
scptWin = New Window( "Script", Script Box( Char( Name Expr( scptDT1 ) ) ) );
scptWin << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Randomly select 40% rows.
3. Switch to Data View.
4. Assign selected data to dt1.
5. Perform Discriminant analysis.
6. Count initial columns.
7. Save prediction formulas.
8. Count updated columns.
9. Delete new columns.
10. Save discriminant matrices.



### Example 3
> **Summary**: Process of performing a discriminant analysis on a data table, selecting 40% of the data randomly and visualizing the results in Data View.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #DataVisualization, #RandomSampling, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Randomly( 0.40 );
dt << Data View;
dt1 = Current Data Table();
obj = dt1 << Discriminant( X( 5 ), Y( 1 :: 4 ) );
nCol11 = N Col( dt1 );
obj << Save Formulas;
nCol12 = N Col( dt1 );
dt1 << Delete Columns( nCol11 + 1 :: nCol12 );
obj << Save Discrim Matrices;
scptDT1 = dt1 << Get Script;
scptWin = New Window( "Script", Script Box( Char( Name Expr( scptDT1 ) ) ) );
scptWin << Close Window;
dt = Open("data_table.jmp");
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Canonical Plot( 0 ),
	Discriminant Scores( 0 ),
	Show Classification Counts( 0 ),
	Stepwise Variable Selection( 1 ),
	Use Matrix Columns( 1 )
);
obj << Show Canonical Structure( 1 );
obj << Redo Analysis;
obj1 = Current Report();
```

**Code Explanation**:

1. Open data table;
2. Select 40% randomly.
3. Switch to data view.
4. Create new table from selection.
5. Run discriminant analysis.
6. Count initial columns.
7. Save prediction formulas.
8. Count updated columns.
9. Remove added columns.
10. Save discriminant matrices.



## Discriminant using If
### Example 1
> **Summary**: Process of validating and reporting on a discriminant analysis in JMP Pro, capturing log data and extracting count information.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #LogCapture, #DataValidation, #ReportGeneration -->

**Code**:
```jsl
If( JMP Product Name() == "Pro",
	dt = Open("data_table.jmp");
	dt << New Column( "Validation", Set Values( J( N Rows( dt ), 1, Random Integer( 0, 3 ) ) ) );
	:Validation << Value Labels( {0 = "Training", 1 = "Validation", 2 = "Test", 3 = "Nothing"} );
	valLbl = Arg( :Validation << get value labels, 1 );
	lcap = Log Capture(
		obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ), Validation( :Validation ) )
	);
	rpt = obj << report;
	cnt = rpt[Outline Box( "Score Summaries" )][Number Col Box( "Count" )] << get as matrix;
	cntLbl = rpt[String Col Box( "Source" )] << get;
	cntAll = 0;
	For( i = 1, i <= N Items( cntLbl ), i++,
		dt << Select where( :Validation == Arg Expr( valLbl[i], 1 ) );
		rRows = dt << get selected rows;
		cntAll += N Rows( rRows );
		dt << Clear Select;
	);
	dt << Select where( :Validation == Arg Expr( valLbl[4], 1 ) );
	rRows = dt << get selected rows;
	cntAll += N Rows( rRows );
	Close( dt, No Save );
);
```

**Code Explanation**:

1. Check if JMP version is Pro.
2. Open data table;
3. Create "Validation" column.
4. Assign random validation labels.
5. Label validation values.
6. Capture log of discriminant analysis.
7. Retrieve report from analysis.
8. Extract count data from report.
9. Extract source labels from report.
10. Close dataset without saving.



### Example 2
> **Summary**: Process of running a Discriminant analysis on a data table, publishing probability formulas, and displaying scriptable objects in JMP Pro.

<!-- Keywords: #JMPPro, #DiscriminantAnalysis, #ProbabilityFormulas, #ScriptableObjects, #DataVisualization -->

**Code**:
```jsl
If( JMP Product Name() == "Pro",
	dt = Open("data_table.jmp");
	For Each Row( If( :Species == "setosa", :Species = "0" ) );
	obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
	obj << Publish Probability Formulas;
	For( i = N Items( Window() ), i >= 1, i--,
		If( Window()[i] << Get Window Title == "Formula Depot",
			mywin = Window()[i];
			Break();
		)
	);
	scpt = mywin[Outline Box( "Formula Depot" )] << get scriptable object;
	scpt << Show Scripts;
	mywin << Close Window;
	For( i = N Items( Window() ), i >= 1, i--,
		If( Window()[i] << Get Window Title == "Formula Window",
			myforwin = Window()[i];
			txt = myforwin[Script Box( 1 )] << get text;
			Break();
		)
	);
	myforwin << Close Window;
	wd = Words( txt, ")" );
);
```

**Code Explanation**:

1. Check JMP product name.
2. Open data table;
3. Replace "setosa" with "0".
4. Run Discriminant analysis.
5. Publish probability formulas.
6. Find Formula Depot window.
7. Get scriptable object from Outline Box.
8. Show scripts in Formula Depot.
9. Close Formula Depot window.
10. Find Formula Window.



### Example 3
> **Summary**: Model screening and report generation in JMP Pro, selecting specific rows, excluding others, and disabling various analysis methods.

<!-- Keywords: #JMPPro, #ModelScreening, #DataSelection, #ReportGeneration, #MachineLearning -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	selected = dt << Select Where( (:Validation == 2) & (:Glucose < 105) );
	selected << Exclude;
	obj = Model Screening(
		Y( :Y Binary ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Validation( :Validation ),
		Neural( 0 ),
		Support Vector Machines( 0 ),
		Discriminant( 0 ),
		Fit Least Squares( 0 ),
		Fit Stepwise( 0 ),
		Logistic Regression( 0 ),
		Generalized Regression( 0 ),
		Remove Live Reports( 1 )
	);
	rpt = obj << report;
	n1 = rpt["Training"][Table Box( 1 )] << get as matrix;
	n2 = rpt["Validation"][Table Box( 1 )] << get as matrix;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro version.
2. Open data table;
3. Select specific rows.
4. Exclude selected rows.
5. Run Model Screening.
6. Specify response variable.
7. Define predictor variables.
8. Set validation method.
9. Disable neural networks.
10. Disable support vector machines.
11. Disable discriminant analysis.
12. Disable least squares fit.
13. Disable stepwise regression.
14. Disable logistic regression.
15. Disable generalized regression.
16. Remove live reports.
17. Retrieve training results.
18. Retrieve validation results.
19. Close dataset without saving.



## Discriminant using Select where
> **Summary**: Fits a discriminant analysis model, generating reports, and extracting misclassified samples from a data table.

<!-- Keywords: #JMPScriptingLanguage, #DiscriminantAnalysis, #DataTableOperations, #ReportGeneration, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select where( :species == "" );
dt << Delete Rows;
obj = dt << Discriminant( X( 5 ), Y( 1 :: 4 ) );
rpt = obj << report;
obj << Discriminant Method( "Quadratic" );
rpt = obj << report;
numMisclass = (rpt[Number Col Box( "Number Misclassified" )] << get as matrix)[1];
dt1 = rpt[Outline Box( "Discriminant Scores" )][Table Box( 1 )] << Make Into Data Table;
dt1 << Select where( :Name( "~Misclassified" ) == "*" );
```

**Code Explanation**:

1. Open data table.
2. Select empty species rows.
3. Delete selected rows.
4. Fit discriminant analysis.
5. Generate initial report.
6. Change method to quadratic.
7. Update report.
8. Extract number misclassified.
9. Create new data table from scores.
10. Select misclassified rows.



## Discriminant using Delete Rows
> **Summary**: Process of deleting middle rows, running a discriminant analysis, and capturing log output from a data table, then saves the script to a report.

<!-- Keywords: #JSLScriptingLanguage, #DiscriminantAnalysis, #DataTableManipulation, #LogCapture, #ScriptSaving -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Rows( Index( 2, N Row( dt ) - 1 ) );
Log Capture( obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) ) );
obj << Save Script to Report;
```

**Code Explanation**:

1. Open data table;
2. Delete middle rows.
3. Run discriminant analysis.
4. Capture log output.
5. Save script to report.



## Discriminant using Select Rows
> **Summary**: Process of performing a discriminant analysis on a subset of rows in a data table, generating score summaries and extracting specific column values.

<!-- Keywords: #JSLScriptingLanguage, #DiscriminantAnalysis, #DataTableManipulation, #ReportGeneration, #OutlineExtraction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( 2 :: 11 ) << Hide and Exclude( 1 );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
rpt = obj << report;
test = rpt[Outline Box( "Score Summaries" )][Number Col Box( "Source" )] << get;
```

**Code Explanation**:

1. Open data table;
2. Select rows 2 to 11.
3. Hide and exclude selected rows.
4. Run Discriminant analysis.
5. Assign report to variable.
6. Extract Score Summaries outline.
7. Get Source column from outline.
8. Assign extracted data to variable.



## Discriminant using N Row
> **Summary**: Process of generating a random group variable, performing discriminant analysis, and selecting new columns in a JMP data table.

<!-- Keywords: #JSLScriptingLanguage, #DiscriminantAnalysis, #DataTableManagement, #ColumnSelection, #RandomVariableGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
gpVar = J( N Row( dt ), 1, Random Integer( 0, 1 ) );
dt << New Column( "GroupVar", Numeric, Continuous, SetValues( gpVar ) );
obj = dt << Discriminant( X( :sex ), Y( :height, :weight ), Show Classification Counts( 1 ), Use Matrix Columns( 1 ), By( :GroupVar ) );
nC = N Col( dt );
obj[1] << Save Formulas();
dt << Select Columns( nC + 1 :: N Col( dt ) );
dt << Delete Columns();
obj[1] << Save Formulas();
```

**Code Explanation**:

1. Open data table;
2. Generate random group variable.
3. Add group variable to dataset.
4. Run discriminant analysis.
5. Count number of columns.
6. Save formulas from analysis.
7. Select new columns.
8. Delete new columns.
9. Save formulas again.
10. End script.



