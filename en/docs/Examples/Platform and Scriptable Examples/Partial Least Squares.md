# Partial Least Squares

### Example 1
> **Summary**: Performs a Partial Least Squares analysis on the provided data table, using NIPALS method and setting the initial number of factors to 15.

<!-- Keywords: #PartialLeastSquares, #NIPALS, #JMPScriptingLanguage, #DataAnalysis, #Regression -->

**Code**:
```jsl
// Partial Least Squares
// Open data table
dt = Open("data_table.jmp");
// Partial Least Squares
Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7,
		:v8, :v9, :v10, :v11, :v12, :v13,
		:v14, :v15, :v16, :v17, :v18,
		:v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	),
	Fit(
		Method( NIPALS ),
		Initial Number of Factors( 15 )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define response variables.
3. Define predictor variables.
4. Perform Partial Least Squares analysis.
5. Use NIPALS method.
6. Set initial number of factors to 15.



### Example 2
> **Summary**: Performs a Partial Least Squares (PLS) analysis on the provided data table, using multiple predictor variables to model the response variable 'Percent body fat', with validation and initial number of factors specified.

<!-- Keywords: #PartialLeastSquares, #JMPScriptingLanguage, #DataAnalysis, #PredictiveModeling, #Regression -->

**Code**:
```jsl
// Partial Least Squares
// Open data table
dt = Open("data_table.jmp");
// Partial Least Squares
Partial Least Squares(
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
	Initial Number of Factors( 13 ),
	Fit(
		Method( NIPALS ),
		Number of Factors( 7 ),
		Variable Importance Plot( 1 )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define response variable.
3. Define predictor variables.
4. Set validation method.
5. Specify initial number of factors.
6. Choose fitting method.
7. Set number of factors.
8. Enable variable importance plot.
9. Execute Partial Least Squares analysis.



### Example 3
> **Summary**: Performs a partial least squares analysis on the specified data table, using the log of RAI as the response variable and multiple predictor variables to identify significant relationships.

<!-- Keywords: #PartialLeastSquares, #JMPScriptingLanguage, #DataAnalysis, #PredictorVariables, #ResponseVariable -->

**Code**:
```jsl
// Partial Least Squares
// Open data table
dt = Open("data_table.jmp");
// Partial Least Squares
Partial Least Squares(
	Y( :log RAI ),
	X(
		:S1, :L1, :P1, :S2, :L2, :P2, :S3,
		:L3, :P3, :S4, :L4, :P4, :S5, :L5,
		:P5
	),
	Go
);
```

**Code Explanation**:

1. Open data table.
2. Fit partial least squares model.
3. Specify response variable.
4. List predictor variables.
5. Execute analysis.



### Example 4
> **Summary**: Performs a Partial Least Squares analysis on the provided data table, using Hedonic, Goes with meat, and Goes with dessert as response variables, and Price, Sugar, Alcohol, and Acidity as predictor variables.

<!-- Keywords: #PartialLeastSquares, #JMPScriptingLanguage, #DataAnalysis, #PredictiveModeling, #Regression -->

**Code**:
```jsl
// Partial Least Squares
// Open data table
dt = Open("data_table.jmp");
// Partial Least Squares
Partial Least Squares(
	Y(
		:Hedonic, :Goes with meat,
		:Goes with dessert
	),
	X(
		:Price, :Sugar, :Alcohol,
		:Acidity
	),
	Validation Method(
		KFold( 5 ),
		Initial Number of Factors( 4 )
	),
	Fit(
		Method( NIPALS ),
		Number of Factors( 1 )
	)
);
```

**Code Explanation**:

1. Open table.
2. Define response variables.
3. Define predictor variables.
4. Set validation method.
5. Specify initial number of factors.
6. Choose fitting method.
7. Set number of factors.
8. Execute Partial Least Squares.



### Example 5
> **Summary**: Performs a Partial Least Squares analysis on a dataset with multiple response variables and predictor variables, using NIPALS method for fitting and specifying the initial number of factors.

<!-- Keywords: #PartialLeastSquares, #NIPALS, #JMPScriptingLanguage, #DataAnalysis, #PredictiveModel -->

**Code**:
```jsl
Open("data_table.jmp");
p = Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X( :v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12 ),
	Validation Method( None, Initial Number of Factors( 6 ) ),
	Fit( Method( NIPALS ), Number of Factors( 6 ) )
);
pr = p << report;
pr[Outline Box( 2 )] << Close;
pr[Outline Box( 5 )] << Close;
tb = pr[Table Box( 2 )];
```

**Code Explanation**:

1. Open data table;
2. Perform Partial Least Squares analysis.
3. Specify response variables: ls, ha, dt.
4. Define predictor variables: v1 to v12.
5. Set validation method to none.
6. Use NIPALS method for fitting.
7. Request 6 factors for fitting.
8. Retrieve analysis report.
9. Close second outline box.
10. Close fifth outline box.



### Example 6
> **Summary**: Performs a Partial Least Squares (PLS) analysis on a data table, generating a report with specified outline boxes and reordered columns.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #DataAnalysis, #ReportGeneration, #JSL -->

**Code**:
```jsl
Names Default To Here( 1 );
Open("data_table.jmp");
p = Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X( :v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12 ),
	Validation Method( None, Initial Number of Factors( 6 ) ),
	Fit( Method( NIPALS ), Number of Factors( 6 ) )
);
pr = p << report;
pr[Outline Box( 2 )] << Close;
pr[Outline Box( 5 )] << Close;
tb = pr[Table Box( 2 )];
tb << Reorder Columns( 0, 4 );
```

**Code Explanation**:

1. Set default names scope.
2. Open data table;
3. Perform Partial Least Squares analysis.
4. Assign PLS report to 'p'.
5. Close second outline box.
6. Close fifth outline box.
7. Access second table box.
8. Reorder columns 0 and 4.



### Example 7
> **Summary**: Performs a Partial Least Squares analysis on the log RAI response variable, utilizing 15 initial factors and NIPALS method, with Leave-One-Out validation and sending results to two outline boxes.

<!-- Keywords: #PartialLeastSquares, #NIPALS, #LeaveOneOutValidation, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Partial Least Squares(
	Y( :log RAI ),
	X( :S1, :L1, :P1, :S2, :L2, :P2, :S3, :L3, :P3, :S4, :L4, :P4, :S5, :L5, :P5 ),
	Validation Method( Name( "Leave-One-Out" ), Initial Number of Factors( 15 ) ),
	Fit( Method( NIPALS ), Number of Factors( 5 ) ),
	SendToReport(
		Dispatch( {}, "Model Launch", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Model Comparison Summary", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform Partial Least Squares analysis.
3. Set response variable to log RAI.
4. Define predictors: S1 to P5.
5. Use Leave-One-Out validation method.
6. Initialize with 15 factors.
7. Fit model using NIPALS method.
8. Specify 5 factors for fitting.
9. Close Model Launch outline box.
10. Close Model Comparison Summary outline box.



### Example 8
> **Summary**: Performs a Partial Least Squares analysis on the 'data_table.jmp' dataset, using specified predictor variables and validation method to determine the optimal number of factors.

<!-- Keywords: #PartialLeastSquares, #DataAnalysis, #JMPScriptingLanguage, #PredictorVariables, #ValidationMethod -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Partial Least Squares(
	Y( :log RAI ),
	X( :S1, :L1, :P1, :S2, :L2, :P2, :S3, :L3, :P3, :S4, :L4, :P4, :S5, :L5, :P5 ),
	Validation Method( Name( "Leave-One-Out" ), Initial Number of Factors( 15 ) ),
	Fit( Method( NIPALS ), Number of Factors( 5 ) ),
	SendToReport(
		Dispatch( {}, "Model Launch", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Model Comparison Summary", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform Partial Least Squares analysis.
3. Set response variable.
4. Define predictor variables.
5. Specify validation method.
6. Set initial number of factors.
7. Choose fitting method.
8. Specify number of factors.
9. Close Model Launch outline.
10. Close Model Comparison Summary outline.



### Example 9
> **Summary**: Performs a Partial Least Squares analysis on the 'data_table.jmp' dataset, grouping results by sex and using weight as a predictor variable.

<!-- Keywords: #PartialLeastSquares, #ByGroup, #KFoldValidation, #NIPALS, #JMPScriptingLanguage -->

**Code**:
```jsl
Open("data_table.jmp");
Partial Least Squares(
	SendToByGroup( Bygroup Default ),
	Y( :height ),
	By( :sex ),
	X( :weight ),
	Validation Method( KFold( 7 ), Initial Number of Factors( 1 ) ),
	SendToByGroup( {:sex == "M"}, Fit( Method( NIPALS ), Number of Factors( 1 ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Perform Partial Least Squares analysis.
3. Group results by sex.
4. Set height as response variable.
5. Use weight as predictor variable.
6. Apply K-Fold validation with 7 folds.
7. Initialize with 1 factor.
8. For males, fit model using NIPALS.
9. Set number of factors to 1 for males.
10. Analyze and display results.



### Example 10
> **Summary**: Performs a Partial Least Squares analysis on the 'data_table.jmp' data table, using 23 predictor variables and specifying response variables ls, ha, and dt.

<!-- Keywords: #PartialLeastSquares, #PredictorVariables, #ResponseVariables, #JSLScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	),
	Set Random Seed( 1234 ),
	Go
);
```

**Code Explanation**:

1. Set default names.
2. Open data table.
3. Define Partial Least Squares analysis.
4. Specify response variables: ls, ha, dt.
5. List predictor variables: v1-v27.
6. Set random seed to 1234.
7. Execute analysis.



### Example 11
> **Summary**: Performs a Partial Least Squares analysis to model the relationship between response variables Hedonic, Goes with meat, and Goes with dessert, and predictor variables Price, Sugar, Alcohol, and Acidity.

<!-- Keywords: #PartialLeastSquares, #RegressionAnalysis, #JMPScriptingLanguage, #DataScience, #PredictiveModeling -->

**Code**:
```jsl
Open("data_table.jmp");
Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Validation Method( KFold( 5 ), Initial Number of Factors( 4 ) ),
	Fit( Method( NIPALS ), Number of Factors( 1 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Run Partial Least Squares analysis.
3. Set response variables.
4. Set predictor variables.
5. Use K-Fold validation method.
6. Specify initial number of factors.
7. Choose NIPALS fitting method.
8. Set number of factors to 1.
9. Generate model results.
10. Display analysis output.



### Example 12
> **Summary**: Performs a Partial Least Squares (PLS) analysis on a data table, using NIPALS method with 8 factors, and generates scatter loading plot matrices and correlation loading plots.

<!-- Keywords: #PartialLeastSquares, #NIPALS, #ScatterLoadingPlot, #CorrelationLoadingPlot, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	),
	Validation Method( KFold( 7 ), Initial Number of Factors( 15 ) ),
	Fit( Method( NIPALS ), Number of Factors( 8 ), Scatter Loadings Plot( 1 ), Correlation Loading Plot( 2 ) ),
	SendToReport(
		Dispatch( {}, "Partial Least Squares", OutlineBox,
			{Set Title( "NIPALS Fit with 8 Factors: Loading Scatterplot Matrices, Correlation Loading Plot" )}
		),
		Dispatch( {}, "Model Launch", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Model Comparison Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "KFold Cross Validation with K= 7 and Method=NIPALS Using Fast SVD", OutlineBox, {Close( 1 )} ),
		Dispatch( {"NIPALS Fit with 8 Factors Using Fast SVD"}, "X-Y Scores Plots", OutlineBox, {Close( 1 )} ),
		Dispatch( {"NIPALS Fit with 8 Factors Using Fast SVD"}, "Percent Variation Explained", OutlineBox, {Close( 1 )} ),
		Dispatch( {"NIPALS Fit with 8 Factors Using Fast SVD", "X Loading Scatterplot Matrix"}, "X Loadings Plot", FrameBox,
			{Frame Size( 67, 51 )}
		),
		Dispatch( {"NIPALS Fit with 8 Factors Using Fast SVD"}, "Y Loading Scatterplot Matrix", OutlineBox, {Close( 1 )} ),
		Dispatch( {"NIPALS Fit with 8 Factors Using Fast SVD", "Y Loading Scatterplot Matrix"}, "Y Loadings Plot", FrameBox,
			{Frame Size( 67, 51 )}
		),
		Dispatch( {"NIPALS Fit with 8 Factors Using Fast SVD", "Correlation Loading Plot"}, "Correlation Loadings Plot", FrameBox,
			{Frame Size( 296, 235 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define response variables.
3. Define predictor variables.
4. Set validation method.
5. Fit model using NIPALS.
6. Configure scatter loadings plot.
7. Configure correlation loading plot.
8. Set report title.
9. Close unnecessary reports.
10. Adjust plot sizes.



### Example 13
> **Summary**: Performs a Partial Least Squares analysis on the 'data_table.jmp' data table, using NIPALS method and initial factors set to 15.

<!-- Keywords: #PartialLeastSquares, #NIPALS, #JMPScriptingLanguage, #DataAnalysis, #Regression -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	),
	Fit( Method( NIPALS ), Initial Number of Factors( 15 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Define response variables.
3. Define predictor variables.
4. Apply Partial Least Squares.
5. Use NIPALS method.
6. Set initial factors to 15.



### Example 14
> **Summary**: Performs a Partial Least Squares analysis on the 'data_table.jmp' dataset, using 8 factors and NIPALS method to generate scatter loadings plot and correlation loading plot.

<!-- Keywords: #PartialLeastSquares, #NIPALS, #ScatterLoadingsPlot, #CorrelationLoadingPlot, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	),
	Validation Method( KFold( 7 ), Initial Number of Factors( 15 ) ),
	Fit( Method( NIPALS ), Number of Factors( 8 ), Scatter Loadings Plot( 1 ), Correlation Loading Plot( 2 ) ),
	SendToReport(
		Dispatch( {}, "Partial Least Squares", OutlineBox,
			{Set Title( "NIPALS Fit with 8 Factors: Loading Scatterplot Matrices, Correlation Loading Plot" )}
		),
		Dispatch( {}, "Model Launch", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Model Comparison Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "KFold Cross Validation with K= 7 and Method=NIPALS Using Fast SVD", OutlineBox, {Close( 1 )} ),
		Dispatch( {"NIPALS Fit with 8 Factors Using Fast SVD"}, "X-Y Scores Plots", OutlineBox, {Close( 1 )} ),
		Dispatch( {"NIPALS Fit with 8 Factors Using Fast SVD"}, "Percent Variation Explained", OutlineBox, {Close( 1 )} ),
		Dispatch( {"NIPALS Fit with 8 Factors Using Fast SVD", "X Loading Scatterplot Matrix"}, FrameBox, {Frame Size( 67, 51 )} ),
		Dispatch( {"NIPALS Fit with 8 Factors Using Fast SVD"}, "Y Loading Scatterplot Matrix", OutlineBox, {Close( 1 )} ),
		Dispatch( {"NIPALS Fit with 8 Factors Using Fast SVD", "Y Loading Scatterplot Matrix"}, FrameBox, {Frame Size( 67, 51 )} ),
		Dispatch( {"NIPALS Fit with 8 Factors Using Fast SVD", "Correlation Loading Plot"}, FrameBox, {Frame Size( 56, 35 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Run Partial Least Squares analysis.
3. Set response variables ls, ha, dt.
4. Define predictor variables v1-v27.
5. Use K-Fold validation with 7 folds.
6. Fit model using NIPALS method.
7. Set initial number of factors to 15.
8. Specify 8 factors for fit.
9. Generate scatter loadings plot.
10. Generate correlation loading plot.



### Example 15
> **Summary**: Performs a Partial Least Squares (PLS) analysis on a dataset, setting missing values and redoing the analysis to generate a report with extracted number from the first column box.

<!-- Keywords: #PartialLeastSquares, #DataAnalysis, #JMPScriptingLanguage, #MissingValueHandling, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Partial Least Squares(
	Y( :height ),
	X( :weight ),
	Validation Method( KFold( 7 ), Initial Number of Factors( 1 ) ),
	Fit( Method( NIPALS ), Number of Factors( 1 ) )
);
:weight << Set Property( "Missing Value Codes", 999 );
:weight << Set Values( [999] );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
actN = (rpt[Number Col Box( 1 )] << Get( 1 ));
```

**Code Explanation**:

1. Open data table;
2. Perform PLS analysis.
3. Set missing value code for weight.
4. Replace weight values with 999.
5. Redo the analysis.
6. Generate report from analysis.
7. Extract number from first column box.



### Example 16
> **Summary**: Performs a Partial Least Squares analysis using the NIPALS method, with Y variable set to 'ls^2' and X variable set to 'ha^2', utilizing Leave-One-Out validation.

<!-- Keywords: #PartialLeastSquares, #NIPALS, #LeaveOneOut, #JMPScriptingLanguage, #RegressionAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Partial Least Squares(
	Y( Transform Column( "ls^2", Formula( :ls * :ls ) ) ),
	X( Transform Column( "ha^2", Formula( :ha * :ha ) ) ),
	Validation Method( Name( "Leave-One-Out" ), Initial Number of Factors( 1 ) ),
	Fit( Method( NIPALS ), Number of Factors( 0 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create "ls^2" column.
3. Square "ls" values.
4. Create "ha^2" column.
5. Square "ha" values.
6. Perform Partial Least Squares.
7. Set Y variable to "ls^2".
8. Set X variable to "ha^2".
9. Use Leave-One-Out validation.
10. Fit model using NIPALS method.



### Example 17
> **Summary**: Performs a Partial Least Squares (PLS) analysis on a dataset with multiple response variables and predictor variables, generating coefficient plots for the first fit.

<!-- Keywords: #PartialLeastSquares, #JMPScriptingLanguage, #DataAnalysis, #PredictiveModeling, #Regression -->

**Code**:
```jsl
dt3 = Open("data_table.jmp");
obj = dt3 << Partial Least Squares( Y( :ls, :ha, :dt ), X( :v1, :v2, :v3, :v4, :v5 ), Initial Number of Factors( 5 ), Go );
obj << (Fit[1] << Coefficient Plots( 1 ));
rpt = obj << report;
b plot coeff x = [0, 1, 2, 3, 4];
```

**Code Explanation**:

1. Open data table.
2. Run Partial Least Squares analysis.
3. Set response variables: ls, ha, dt.
4. Set predictor variables: v1, v2, v3, v4, v5.
5. Initialize 5 factors.
6. Execute the analysis.
7. Generate coefficient plots for first fit.
8. Retrieve analysis report.
9. Define coefficient plot x-axis range.
10. Plot coefficients with specified x-axis.



### Example 18
> **Summary**: Performs a Partial Least Squares analysis on the 'data_table.jmp' dataset, using 15 initial factors and no validation method, to generate T Square values and plots.

<!-- Keywords: #PartialLeastSquares, #JMPScriptingLanguage, #DataAnalysis, #RegressionAnalysis, #T-SquarePlot -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
obj = dt2 << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	),
	Validation Method( None, Initial Number of Factors( 15 ) ),
	Go
);
obj << (Fit[1] << Save T Square( 1 ));
obj << (Fit[1] << T Square Plot);
TSquares = dt2:T¬≤ << get values;
```

**Code Explanation**:

1. Open data table;
2. Perform Partial Least Squares.
3. Set response variables: ls, ha, dt.
4. Define predictor variables: v1-v27.
5. Use no validation method.
6. Set initial factors to 15.
7. Execute the model.
8. Save first T Square.
9. Generate T Square plot.
10. Retrieve T Square values.



### Example 19
> **Summary**: Performs a Partial Least Squares analysis with SIMPLS method to identify significant factors in the relationship between response variables ls, ha, and dt, and predictor variables v1, v2, v3, v4, and v5.

<!-- Keywords: #PartialLeastSquares, #SIMPLS, #RegressionAnalysis, #DataScience, #JMP -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
obj1 = dt2 << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X( :v1, :v2, :v3, :v4, :v5 ),
	Validation Method( Holdback( 0.4 ), Initial Number of Factors( 5 ) ),
	Go
);
obj1 << Fit( Method( SIMPLS ), Number of Factors( 4 ) );
obj1 << (Fit[1] << Save Validation( 1 ));
obj1 << (Fit[2] << Save Validation( 1 ));
vcol1 = dt2:Validation << get values;
vcol2 = dt2:Validation 2 << get values;
```

**Code Explanation**:

1. Open data table;
2. Launch Partial Least Squares platform.
3. Set response variables: ls, ha, dt.
4. Set predictor variables: v1, v2, v3, v4, v5.
5. Configure validation method: Holdback 40%.
6. Set initial number of factors: 5.
7. Run Partial Least Squares analysis.
8. Fit using SIMPLS method.
9. Specify number of factors: 4.
10. Save validation results for both fits.



### Example 20
> **Summary**: Performs a Partial Least Squares (PLS) model to analyze the relationship between response variables ls, ha, and dt with predictor variables v1-v27, while imputing missing data using NIPALS method.

<!-- Keywords: #PartialLeastSquares, #Imputation, #NIPALS, #PredictorVariables, #ResponseVariables -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
dt2:ls << set values( [., ., ., ., .] );
obj1 = dt2 << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	),
	Impute Missing Data( 1 ),
	Fit( Method( NIPALS ), Initial Number of Factors( 12 ) )
);
rpt1 = Report( obj1 );
nrows = (rpt1[Outline Box( "Model Comparison Summary" )][Number Col Box( 1 )] << get)[1];
If( Contains( JMP Product Name(), "Pro" ),
	, 
);
```

**Code Explanation**:

1. Open data table;
2. Set ls column values to missing.
3. Run Partial Least Squares model.
4. Specify response variables: ls, ha, dt.
5. Define predictor variables: v1-v27.
6. Enable missing data imputation.
7. Use NIPALS method for fitting.
8. Set initial number of factors to 12.
9. Generate model comparison report.
10. Count rows in Model Comparison Summary.



### Example 21
> **Summary**: Performs a Partial Least Squares (PLS) model to predict response variable ls using 27 predictor variables, with centering and NIPALS fitting methods.

<!-- Keywords: #PartialLeastSquares, #PredictiveModeling, #RegressionAnalysis, #JMPScriptingLanguage, #DataScience -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
obj = Partial Least Squares(
	Y( :ls ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	),
	Centering( 1 ),
	Validation Method( "None", Initial Number of Factors( 15 ) ),
	Fit( Method( NIPALS ) )
);
obj << (Fit[1] << Save Standard Errors of Prediction Formula( 1 ));
predse = dt2:PredSE ls << get values;
obj << (Fit[1] << Save Mean Confidence Limit Formula( 1 ));
cl1 = (dt2:Lower 95% Mean ls << get values) || (dt2:Upper 95% Mean ls << get values);
obj << (Fit[1] << Save Indiv Confidence Limit Formula( 1 ));
cl2 = (dt2:Lower 95% Indiv ls << get values) || (dt2:Upper 95% Indiv ls << get values);
obj << (Fit[1] << Save Y Predicted Values( 1 ));
pred = dt2:Predicted ls << get values;
```

**Code Explanation**:

1. Open data table;
2. Run Partial Least Squares model.
3. Set response variable ls.
4. Include 27 predictor variables.
5. Apply centering method.
6. Use None validation method.
7. Set initial number of factors to 15.
8. Use NIPALS fitting method.
9. Save standard errors of prediction.
10. Extract predicted standard errors.
11. Save mean confidence limits.
12. Extract mean confidence limits.
13. Save individual confidence limits.
14. Extract individual confidence limits.
15. Save predicted values.
16. Extract predicted values.



### Example 22
> **Summary**: Performs a Partial Least Squares analysis on a dataset with multiple response variables and predictor variables, generating various plots for each fit.

<!-- Keywords: #PartialLeastSquares, #JMPScriptingLanguage, #DataAnalysis, #RegressionAnalysis, #Visualization -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
obj = dt2 << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	),
	Fit( Method( NIPALS ), Number of Factors( 1 ) )
);
obj << (Fit[1] << Correlation Loading Plot( 1 ));
obj << (Fit[1] << Loading Scatterplot Matrices( 1 ));
obj << (Fit[1] << Score Scatterplot Matrices( 1 ));
For( i = 1, i <= 10, i++,
	obj << Fit( Number of Factors( 1 ) );
	obj << (Fit[i] << Correlation Loading Plot( 1 ));
	obj << (Fit[i] << Loading Scatterplot Matrices( 1 ));
	obj << (Fit[i] << Score Scatterplot Matrices( 1 ));
);
For( i = 1, i <= 11, i++,
	obj << (Fit[i] << Remove Fit( 1 ))
);
```

**Code Explanation**:

1. Open data table;
2. Perform Partial Least Squares analysis.
3. Set response variables: ls, ha, dt.
4. Set predictor variables: v1 to v27.
5. Use NIPALS method with 1 factor.
6. Generate Correlation Loading Plot for Fit 1.
7. Generate Loading Scatterplot Matrices for Fit 1.
8. Generate Score Scatterplot Matrices for Fit 1.
9. Loop 10 times, adding new fits with 1 factor each.
10. Generate plots for each new fit.
11. Loop 11 times, removing each fit.



### Example 23
> **Summary**: Performs a Partial Least Squares (PLS) analysis on the Sepal length response variable with Sepal width, Petal length, and Petal width as predictor variables, using NIPALS method for fitting and generating diagnostics plots.

<!-- Keywords: #JMP, #PartialLeastSquares, #NIPALS, #DiagnosticsPlots, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Partial Least Squares(
	Y( :Sepal length ),
	X( :Sepal width, :Petal length, :Petal width ),
	Validation Method( Holdback( 0.3 ), Initial Number of Factors( 3 ) ),
	Fit( Method( NIPALS ), Diagnostics Plots( 1 ) ),
	SendToReport(
		Dispatch( {"NIPALS Fit with 3 Factors Using Fast SVD", "Diagnostics Plots for Training Data", "Actual by Predicted Plot"},
			"Diagnostics Plots", FrameBox,
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
rpt = obj << report;
obj << (Fit[1] << Save Validation( 1 ));
b yplot = (dt:Sepal length << get values)[Loc( dt:Validation << get values == 1 )];
npoints = N Items( (rpt[Outline Box( "Actual by Predicted Plot" )][FrameBox( 1 )] << Find Seg( MarkerSeg )) << get colors );
dt << New Column( "Colors", Expression, "None", Formula( Matrix( Color To RGB( Color Of( Row State( Row() ) ) ) ) ) );
color1 = (dt:Colors << get values)[1 :: 50];
color2 = (dt:Colors << get values)[51 :: 100];
color3 = (dt:Colors << get values)[101 :: 150];
color4 = (dt:Colors << get values)[Loc( dt:Validation << get values == 2 )];
For( i = 1, i < 50, i++,
	If( color1[i] != [0, 0, 0],
		temp1 = color1[i]
	);
	If( color2[i] != [0, 0, 0],
		temp2 = color2[i]
	);
	If( color3[i] != [0, 0, 0],
		temp3 = color3[i]
	);
);
```

**Code Explanation**:

1. Open data table;
2. Perform Partial Least Squares analysis.
3. Set validation method to holdback 30%.
4. Use NIPALS method for fitting.
5. Generate diagnostics plots.
6. Customize Actual by Predicted Plot.
7. Retrieve model report.
8. Save validation predictions.
9. Extract validation data.
10. Analyze plot colors.



### Example 24
> **Summary**: Performs a Partial Least Squares analysis on a data table with multiple predictor variables, using KFold validation and NIPALS method for fitting.

<!-- Keywords: #PartialLeastSquares, #JMPScriptingLanguage, #DataAnalysis, #ValidationMethod, #NIPALS -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
obj1 = dt1 << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	),
	Set Random Seed( 23487 ),
	Validation Method( KFold( 7 ), Initial Number of Factors( 15 ) ),
	Fit( Method( NIPALS ) )
);
rn1 = [];
For( i = 1, i <= 10, i++,
	rn1 |/= Random Uniform()
);
obj1 << close window( 1 );
For( i = 1, i <= 10, i++,
	rn2 = [];
	obj2 = dt1 << Partial Least Squares(
		Y( :ls, :ha, :dt ),
		X(
			:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
			:v24, :v25, :v26, :v27
		),
		Set Random Seed( 23487 ),
		Validation Method( KFold( 7 ), Initial Number of Factors( 15 ) ),
		Fit( Method( NIPALS ) )
	);
	For( j = 1, j <= 100, j++,
		rn2 |/= Random Uniform()
	);
	obj2 << close window( 1 );
);
```

**Code Explanation**:

1. Open data table.
2. Perform Partial Least Squares analysis.
3. Set random seed to 23487.
4. Use KFold validation with 7 folds.
5. Initialize 15 factors for fitting.
6. Use NIPALS method for fitting.
7. Create empty list rn1.
8. Generate 10 random uniform numbers into rn1.
9. Close first window of obj1.
10. Repeat steps 2-9 for 10 iterations.



### Example 25
> **Summary**: Performs a Partial Least Squares analysis on the response variables ls, ha, and dt using predictor variables v1-v10, with K-Fold validation and SIMPLS method.

<!-- Keywords: #PartialLeastSquares, #K-FoldValidation, #SIMPLSMethod, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
obj2 = dt2 << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X( :v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10 ),
	Set Random Seed( 1234 ),
	Method( SIMPLS ),
	Validation Method( KFold( 16 ), Initial Number of Factors( 10 ) ),
	Go
);
obj2 << (Fit[1] << Profiler( 1 ));
obj2 << (Fit[1] << Remove Fit( 1 ));
```

**Code Explanation**:

1. Open data table;
2. Perform Partial Least Squares analysis.
3. Set response variables ls, ha, dt.
4. Set predictor variables v1-v10.
5. Initialize random seed 1234.
6. Use SIMPLS method.
7. Apply K-Fold validation with 16 folds.
8. Set initial number of factors to 10.
9. Generate fit.
10. Create profiler for first fit.
11. Remove first fit.



### Example 26
> **Summary**: Performs a Partial Least Squares analysis on a data table, using NIPALS method and saving the prediction formula for the first fit.

<!-- Keywords: #PartialLeastSquares, #NIPALS, #JMPScriptingLanguage, #DataAnalysis, #Regression -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
obj = dt2 << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X( :v1, :v2, :v3, :v4, :v5, :v6 ),
	Fit( Method( NIPALS ), Initial Number of Factors( 15 ) )
);
obj << (Fit[1] << Save Prediction Formula( 1 ));
prop1 = dt2:Pred Formula ls << get property( "Predicting" );
```

**Code Explanation**:

1. Open data table;
2. Perform Partial Least Squares analysis.
3. Set response variables: ls, ha, dt.
4. Set predictor variables: v1 to v6.
5. Use NIPALS method.
6. Set initial number of factors to 15.
7. Save prediction formula for first fit.
8. Retrieve predicting property for ls formula.



### Example 27
> **Summary**: Performs a Partial Least Squares analysis to predict percent body fat using various predictor variables and validation criteria, generating bagged predictions with profiler output.

<!-- Keywords: #PartialLeastSquares, #PredictiveModeling, #ValidationCriteria, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Partial Least Squares(
	Y( :Percent body fat ),
	X(
		:Name( "Age (years)" ), :Name( "Weight (lbs)" ), :Name( "Height (inches)" ), :Name( "Neck circumference (cm)" ),
		:Name( "Chest circumference (cm)" ), :Name( "Abdomen circumference (cm)" ), :Name( "Hip circumference (cm)" ),
		:Name( "Thigh circumference (cm)" ), :Name( "Knee circumference (cm)" ), :Name( "Ankle circumference (cm)" ),
		:Name( "Biceps (extended) circumference (cm)" ), :Name( "Forearm circumference (cm)" ), :Name( "Wrist circumference (cm)" )
	),
	Validation( :Validation ),
	Initial Number of Factors( 13 ),
	Fit( Method( NIPALS ), Number of Factors( 7 ), Variable Importance Plot( 1 ) )
);
ex = Expr(
	Profiler( Save Bagged Predictions( 2, Random Seed( 12345 ) ) )
);
Eval( Substitute( Expr( obj << (fit[1] << _ex) ), Expr( _ex ), Name Expr( ex ) ) );
latest = Column( 29 ) << getasmatrix;
Close( dt, nosave );
previous = [67.4404878608323, 63.5084824442824, 71.9784031051219, 74.4358091817854, 64.7504200058424, 66.6512909384104, 75.1013525602319,
71.4055265578555, 69.9579875346793, 68.9356574499992, 63.1117798013588, 75.5514611157535, 66.9307772825149, 72.0374063585219,
69.4030395423268, 69.4030395423268, 69.4030395423268, 69.4030395423268, 69.4030395423268, 69.4030395423268];
```

**Code Explanation**:

1. Open data table;
2. Perform Partial Least Squares analysis.
3. Set response variable to "Percent body fat".
4. Define predictors for the analysis.
5. Use validation column for validation.
6. Set initial number of factors to 13.
7. Fit model using NIPALS method.
8. Create expression for profiler with bagged predictions.
9. Evaluate expression with substituted variables.
10. Extract latest predictions matrix.
11. Close dataset without saving changes.



### Example 28
> **Summary**: Performs a Partial Least Squares (PLS) model to predict percent body fat using multiple predictor variables, with initial number of factors set to 13 and validation enabled.

<!-- Keywords: #PartialLeastSquares, #PredictiveModeling, #Validation, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Partial Least Squares(
	Y( :Percent body fat ),
	X(
		:Name( "Age (years)" ), :Name( "Weight (lbs)" ), :Name( "Height (inches)" ), :Name( "Neck circumference (cm)" ),
		:Name( "Chest circumference (cm)" ), :Name( "Abdomen circumference (cm)" ), :Name( "Hip circumference (cm)" ),
		:Name( "Thigh circumference (cm)" ), :Name( "Knee circumference (cm)" ), :Name( "Ankle circumference (cm)" ),
		:Name( "Biceps (extended) circumference (cm)" ), :Name( "Forearm circumference (cm)" ), :Name( "Wrist circumference (cm)" )
	),
	Validation( :Validation ),
	Initial Number of Factors( 13 ),
	Fit( Method( NIPALS ), Number of Factors( 7 ), Variable Importance Plot( 1 ) )
);
ex = Expr(
	Profiler( Save Bagged Predictions( 2, Random Seed( 12345 ) ) )
);
Eval( Substitute( Expr( obj << (fit[1] << _ex) ), Expr( _ex ), Name Expr( ex ) ) );
latest = Column( 29 ) << getasmatrix;
```

**Code Explanation**:

1. Open data table;
2. Fit Partial Least Squares model.
3. Set response variable to "Percent body fat".
4. Include multiple predictor variables.
5. Use validation column.
6. Set initial number of factors to 13.
7. Fit model using NIPALS method.
8. Set number of factors to 7.
9. Enable variable importance plot.
10. Save bagged predictions with random seed.



## Partial Least Squares using Fit PLS
> **Summary**: Performs a Partial Least Squares (PLS) analysis on a dataset, defining response and predictor variables, specifying validation method, initial number of factors, and fitting method.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #DataAnalysis, #PredictiveModeling, #ChemicalProcessOptimization -->

**Code**:
```jsl
// Fit PLS (Pro Only)
// Open data table
dt = Open("data_table.jmp");
// Fit PLS (Pro Only)
Partial Least Squares(
	Y(
		:Composition.G.S9,
		:Composition.H.S9
	),
	X(
		:A.Feed.S1, :D.Feed.S2,
		:E.Feed.S3, :Total.Feed.S4,
		:Recycle.Flow.S8,
		:Reactor.Feed.Rate.S6,
		:Reactor.Pressure, :Reactor.Level,
		:Reactor.Temperature,
		:Purge.Rate.S9, :Product.Sep.Temp,
		:Product.Sep.Level,
		:Prod.Sep.Pressure,
		:Prod.Sep.Underflow.S10,
		:Stripper.Level,
		:Stripper.Pressure,
		:Stripper.Underflow.S11,
		:Stripper.Temp,
		:Stripper.Steam.Flow,
		:Compressor.Work,
		:
		Reactor.Cooling.Water.Outlet.Temp,
		:
		Separator.Cooling.Water.Outlet.Temp,
		:D.Feed.Flow.Stream.2,
		:E.Feed.Flow.Stream.3,
		:A.Feed.Flow.Stream.1,
		:Total.Feed.Flow.Stream.4,
		:Compressor.Recycle.Valve,
		:Purge.Valve.Stream.9,
		:
		Separator.Pot.Liquid.Flow.Stream.10,
		:
		Stripper.Liquid.Product.Flow.Stream.11,
		:Stripper.Steam.Valve,
		:Reactor.Cooling.Water.Flow,
		:Condensor.Cooling.Water.Flow
	),
	Validation( :Validation ),
	Initial Number of Factors( 6 ),
	Fit(
		Method( NIPALS ),
		Number of Factors( 6 )
	)
);
```

**Code Explanation**:

1. Open table.
2. Define response variables.
3. Define predictor variables.
4. Specify validation method.
5. Set initial number of factors.
6. Choose fitting method.
7. Specify number of factors.
8. Execute PLS analysis.



## Partial Least Squares using If
### Example 1
> **Summary**: Runs Partial Least Squares analysis and imputation of missing data in a JMP dataset, utilizing the `Partial Least Squares` function and associative arrays to manage window titles.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #Imputation, #AssociativeArrays, #DataAnalysis -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt2 = Open("data_table.jmp");
	(dt2:ls)[1 :: 5] = .;
	(dt2:v1)[5 :: 12] = .;
	obj1 = Partial Least Squares(
		Y( :ls, :ha, :dt ),
		X(
			:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
			:v24, :v25, :v26, :v27
		),
		Impute Missing Data( 1 ),
		Imputation Method( "EM" ),
		Max Iterations( 0 ),
		Validation Method( "None" ),
		Fit( SVD( Classical ), Method( NIPALS ) )
	);
	befAA = Associative Array( Window() << get window title );
	obj1 << (Fit[1] << Save Imputation( 1 ));
	aftAA = Associative Array( Window() << get window title );
	aftAA << Remove( befAA );
	aftlst = aftAA << get keys;
	For( i = 1, i <= N Items( aftlst ), i++,
		If( Contains( aftlst[i], "Imputation" ),
			imputed1 = (Data Table( aftlst[i] ) << get as matrix);
			Data Table( aftlst[i] ) << close window( 1 );
		)
	);
	obj2 = Partial Least Squares(
		Y( :ls, :ha, :dt ),
		X(
			:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
			:v24, :v25, :v26, :v27
		),
		Impute Missing Data( 1 ),
		Imputation Method( "Mean" ),
		Validation Method( None ),
		Fit( SVD( Classical ), Method( NIPALS ) )
	);
	befAA = Associative Array( Window() << get window title );
	obj2 << (Fit[1] << Save Imputation( 1 ));
	aftAA = Associative Array( Window() << get window title );
	aftAA << Remove( befAA );
	aftlst = aftAA << get keys;
	For( i = 1, i <= N Items( aftlst ), i++,
		If( Contains( aftlst[i], "Imputation" ),
			imputed2 = (Data Table( aftlst[i] ) << get as matrix);
			Data Table( aftlst[i] ) << close window( 1 );
		)
	);
	Close( dt2, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table;
3. Set first 5 ls values to missing.
4. Set v1 values 5 to 12 to missing.
5. Perform Partial Least Squares analysis.
6. Create associative array before saving imputation.
7. Save imputation results.
8. Create associative array after saving imputation.
9. Remove before array from after array.
10. Retrieve keys from after array.
11. Loop through keys to find imputation windows.
12. Extract imputation data as matrix.
13. Close imputation windows.
14. Perform another PLS analysis with mean imputation.
15. Create associative array before saving imputation.
16. Save imputation results.
17. Create associative array after saving imputation.
18. Remove before array from after array.
19. Retrieve keys from after array.
20. Loop through keys to find imputation windows.
21. Extract imputation data as matrix.
22. Close imputation windows.
23. Close dataset without saving.



### Example 2
> **Summary**: Performs a Partial Least Squares (PLS) analysis with EM imputation on a specified data table, capturing window titles and retrieving imputed data matrices.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #ImputationMethods, #DataTableOperations, #WindowManagement -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt2 = Open("data_table.jmp");
	(dt2:ls)[1 :: 5] = .;
	(dt2:v1)[5 :: 12] = .;
	obj1 = Partial Least Squares(
		Y( :ls, :ha, :dt ),
		X(
			:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
			:v24, :v25, :v26, :v27
		),
		Impute Missing Data( 1 ),
		Imputation Method( "EM" ),
		Max Iterations( 0 ),
		Validation Method( "None" ),
		Fit( Method( NIPALS ) )
	);
	befAA = Associative Array( Window() << get window title );
	obj1 << (Fit[1] << Save Imputation( 1 ));
	aftAA = Associative Array( Window() << get window title );
	aftAA << Remove( befAA );
	aftlst = aftAA << get keys;
	For( i = 1, i <= N Items( aftlst ), i++,
		If( Contains( aftlst[i], "Imputation" ),
			imputed1 = (Data Table( aftlst[i] ) << get as matrix);
			Data Table( aftlst[i] ) << close window( 1 );
		)
	);
	obj2 = Partial Least Squares(
		Y( :ls, :ha, :dt ),
		X(
			:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
			:v24, :v25, :v26, :v27
		),
		Impute Missing Data( 1 ),
		Imputation Method( "Mean" ),
		Validation Method( None ),
		Fit( Method( NIPALS ) )
	);
	befAA = Associative Array( Window() << get window title );
	obj2 << (Fit[1] << Save Imputation( 1 ));
	aftAA = Associative Array( Window() << get window title );
	aftAA << Remove( befAA );
	aftlst = aftAA << get keys;
	For( i = 1, i <= N Items( aftlst ), i++,
		If( Contains( aftlst[i], "Imputation" ),
			imputed2 = (Data Table( aftlst[i] ) << get as matrix);
			Data Table( aftlst[i] ) << close window( 1 );
		)
	);
	Close( dt2, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Introduce missing values in specific columns.
4. Perform PLS with EM imputation.
5. Capture initial window titles.
6. Save imputation results.
7. Capture updated window titles.
8. Identify new windows.
9. Retrieve imputed data matrix.
10. Close imputation window.
11. Repeat PLS with Mean imputation.
12. Capture initial window titles.
13. Save imputation results.
14. Capture updated window titles.
15. Identify new windows.
16. Retrieve imputed data matrix.
17. Close imputation window.
18. Close dataset without saving.



### Example 3
> **Summary**: Runs Partial Least Squares (PLS) analysis with K-Fold and Leave-One-Out validation, generating a T Square Plot for the first fit.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #ValidationMethods, #TSquarePlot, #DataAnalysis -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
If( Contains( JMP Product Name(), "Pro" ),
	obj1 = dt2 << Partial Least Squares(
		Y( :ls, :ha, :dt ),
		X(
			:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
			:v24, :v25, :v26, :v27
		),
		Validation Method( KFold( 16 ), Initial Number of Factors( 15 ) ),
		Fit( Method( NIPALS ) )
	),
	obj1 = dt2 << Partial Least Squares(
		Y( :ls, :ha, :dt ),
		X(
			:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
			:v24, :v25, :v26, :v27
		),
		Validation Method( Name( "Leave-One-Out" ), Initial Number of Factors( 15 ) ),
		Fit( Method( NIPALS ), Number of Factors( 7 ) )
	)
);
obj1 << (Fit[1] << T Square Plot( 1 ));
rpt1 = obj1 << report;
b label1 = "\!"UCL=10.60\!")}";
```

**Code Explanation**:

1. Open data table;
2. Check for JMP Pro version.
3. If JMP Pro, run PLS with K-Fold validation.
4. Set initial factors to 15.
5. Use NIPALS method for fitting.
6. If not JMP Pro, run PLS with Leave-One-Out validation.
7. Set initial factors to 15.
8. Use NIPALS method for fitting.
9. Set number of factors to 7.
10. Generate T Square Plot for first fit.
11. Retrieve report object.
12. Label plot with UCL value.



### Example 4
> **Summary**: Runs Partial Least Squares (PLS) analysis with validation on a data table, capturing logs and generating reports in JMP Pro.

<!-- Keywords: #JMPPro, #PartialLeastSquares, #DataAnalysis, #Validation, #LogCapture -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt2 = Open("data_table.jmp");
	dt2 << New Column( "Validation1", values( [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, ., ., ., .] ) );
	log1 = Log Capture(
		dt2 << Partial Least Squares(
			Y( :ls, :ha, :dt ),
			X( :v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10 ),
			Validation( :Validation1 ),
			Fit( Method( NIPALS ), Initial Number of Factors( 15 ) )
		)
	);
	dt2 << New Column( "Validation3", values( [1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, ., ., ., .] ) );
	log2 = Log Capture(
		obj3 = dt2 << Partial Least Squares(
			Y( :ls, :ha, :dt ),
			X( :v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10 ),
			Validation( :Validation3 ),
			Go( Method( NIPALS ), Initial Number of Factors( 15 ) )
		)
	);
	rpt3 = obj3 << report;
	Close( dt2, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table.
3. Add Validation1 column.
4. Capture PLS analysis log.
5. Run PLS with Validation1.
6. Add Validation3 column.
7. Capture PLS analysis log again.
8. Run PLS with Validation3.
9. Extract report from PLS object.
10. Close data table without saving.



### Example 5
> **Summary**: Runs Partial Least Squares analysis to predict height based on weight, utilizing holdback validation and extracting report metrics.

<!-- Keywords: #JMPPro, #PartialLeastSquares, #HoldbackValidation, #DataAnalysis, #ReportGeneration -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	pls = Partial Least Squares( Y( :height ), X( :weight ), Validation Method( Holdback( 0.4 ) ) );
	rpt = Report( pls );
	text1 = rpt[Text Box( 2 )] << get text;
	val1 = rpt[Number Edit Box( 1 )] << get;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table;
3. Perform Partial Least Squares analysis.
4. Set height as response variable.
5. Set weight as predictor variable.
6. Use holdback validation method.
7. Extract report from PLS model.
8. Retrieve text from second text box.
9. Retrieve value from first number edit box.
10. Close dataset without saving.



### Example 6
> **Summary**: Performs a Partial Least Squares analysis to predict percent body fat using multiple predictor variables, with missing data imputation and holdback validation.

<!-- Keywords: #JMPPro, #PartialLeastSquares, #DataImputation, #HoldbackValidation, #NIPALSFitting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj1 = dt << Partial Least Squares(
		Y( :Percent body fat ),
		X(
			:Name( "Age (years)" ), :Name( "Weight (lbs)" ), :Name( "Height (inches)" ), :Name( "Neck circumference (cm)" ),
			:Name( "Chest circumference (cm)" ), :Name( "Abdomen circumference (cm)" ), :Name( "Hip circumference (cm)" ),
			:Name( "Thigh circumference (cm)" ), :Name( "Knee circumference (cm)" ), :Name( "Ankle circumference (cm)" ),
			:Name( "Biceps (extended) circumference (cm)" ), :Name( "Forearm circumference (cm)" ), :Name( "Wrist circumference (cm)" )
		),
		Impute Missing Data( 1 ),
		Validation Method( Holdback( 0 ), Initial Number of Factors( 13 ) ),
		Fit( Method( NIPALS ) )
	);
	rpt1 = Report( obj1 );
	obj1 << Save Script to Report;
	text1 = rpt1[Outline Box( "Partial Least Squares" )][Text Box( 1 )] << get text;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Run Partial Least Squares analysis.
4. Set response variable: Percent body fat.
5. Define predictor variables.
6. Enable missing data imputation.
7. Use holdback validation method.
8. Specify initial number of factors.
9. Apply NIPALS fitting method.
10. Generate report from analysis.



### Example 7
> **Summary**: Runs Partial Least Squares analysis with random seed and validation method, generating bagged predictions and numeric column names.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #DataAnalysis, #RandomSeed, #ValidationMethod -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt1 = Open("data_table.jmp");
	obj = dt1 << Run Script( "Partial Least Squares" );
	obj << (Fit[1] << Profiler( 1, Save Bagged Predictions( 50 ) ));
	colnames = dt1 << Get Column Names( Numeric );
	Close( dt1, no save );
);
If( Contains( JMP Product Name(), "Pro" ) > 0,
	rn1 = [];
	dt1 = Open("data_table.jmp");
	obj1 = dt1 << Partial Least Squares(
		Y( :ls, :ha, :dt ),
		X(
			:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
			:v24, :v25, :v26, :v27
		),
		Set Random Seed( 23487 ),
		Validation Method( KFold( 7 ), Initial Number of Factors( 15 ) ),
		Fit( Method( NIPALS ) )
	);
	For( i = 1, i <= 100, i++,
		rn1 |/= Random Uniform()
	);
	obj1 << close window( 1 );
	For( i = 1, i <= 50, i++,
		rn2 = [];
		obj2 = dt1 << Partial Least Squares(
			Y( :ls, :ha, :dt ),
			X(
				:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22,
				:v23, :v24, :v25, :v26, :v27
			),
			Set Random Seed( 23487 ),
			Validation Method( KFold( 7 ), Initial Number of Factors( 15 ) ),
			Fit( Method( NIPALS ) )
		);
		For( j = 1, j <= 100, j++,
			rn2 |/= Random Uniform()
		);
		obj2 << close window( 1 );
	);
	Close( dt1, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table.
3. Run "Partial Least Squares" script.
4. Create profiler with 50 bagged predictions.
5. Get numeric column names.
6. Close data table without saving.
7. Check for JMP Pro again.
8. Initialize random number list.
9. Open data table.
10. Perform Partial Least Squares analysis.
11. Generate 100 random numbers.
12. Close first analysis window.
13. Loop 50 times.
14. Initialize another random number list.
15. Perform Partial Least Squares analysis.
16. Generate 100 random numbers.
17. Close second analysis window.
18. Close data table without saving.



### Example 8
> **Summary**: Runs the Partial Least Squares (PLS) analysis for a specified data table, utilizing the NIPALS method and generating distance plots and diagnostics plots.

<!-- Keywords: #JMPPro, #PartialLeastSquares, #NIPALS, #DataAnalysis, #Regression -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt1 = Open("data_table.jmp");
	dt1 << New Column( "Validation", values( J( 8, 1, 1 ) |/ J( 4, 1, 2 ) |/ J( 4, 1, . ) ) );
	Log Capture(
		obj = dt1 << Partial Least Squares(
			Y( :ls, :ha, :dt ),
			X( :v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10 ),
			Validation( :Validation ),
			Fit( Method( NIPALS ), Initial Number of Factors( 10 ) )
		)
	);
	obj << (Fit[1] << Distance Plots( 1 ));
	obj << (Fit[1] << Diagnostics Plots( 1 ));
	Close( dt1, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data_table data
3. Add "Validation" column.
4. Capture log output.
5. Run Partial Least Squares.
6. Specify response variables.
7. Specify predictor variables.
8. Use "Validation" column.
9. Set NIPALS method.
10. Initialize 10 factors.
11. Generate distance plots.
12. Generate diagnostics plots.
13. Close data table without saving.



### Example 9
> **Summary**: Runs Partial Least Squares analysis for centered and original data, extracting model coefficients and bootstrap results in JMP Pro.

<!-- Keywords: #JMPPro, #PartialLeastSquares, #BootstrapAnalysis, #ModelCoefficients, #DataPreprocessing -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt2 = Open("data_table.jmp");
	obj = dt2 << Partial Least Squares(
		Y( :ls, :ha, :dt ),
		X(
			:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
			:v24, :v25, :v26, :v27
		),
		Validation( "Leave-One-Out" ),
		Fit( Method( NIPALS ), Initial Number of Factors( 15 ) )
	);
	rpt = Report( obj );
	rpt[Outline Box( "Model Coefficients for Centered and Scaled Data" )][Table Box( 1 )][Number Col Box( 1 )] << select( 1 );
	Log Capture(
		btdt = (rpt[Outline Box( "Model Coefficients for Centered and Scaled Data" )][Table Box( 1 )][Number Col Box( 1 )] <<
		Bootstrap( 100, Fractional Weights( 1 ), Split Selected Column( 0 ) ))[1]
	);
	b bootid0 = rpt[Outline Box( "Model Coefficients for Centered and Scaled Data" )][Table Box( 1 )] << get as matrix;
	bootid0 = (btdt << get as matrix)[1 :: 28, 1 :: 3];
	rpt[Outline Box( "Model Coefficients for Centered and Scaled Data" )][Table Box( 1 )][Number Col Box( 1 )] << deselect( 1 );
	Log Capture(
		btdt2 = (rpt[Outline Box( "Model Coefficients for Original Data" )][Table Box( 1 )][Number Col Box( 1 )] <<
		Bootstrap( 200, Fractional Weights( 0 ), Split Selected Column( 0 ) ))[1]
	);
	b bootid0 original = rpt[Outline Box( "Model Coefficients for Original Data" )][Table Box( 1 )] << get as matrix;
	bootid0 original = (btdt2 << get as matrix)[1 :: 28, 1 :: 3];
	Close( btdt, no save );
	Close( btdt2, no save );
	Close( dt2, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro version.
2. Open data table;
3. Perform Partial Least Squares analysis.
4. Set response variables: ls, ha, dt.
5. Define predictor variables: v1 to v27.
6. Use Leave-One-Out validation method.
7. Fit model using NIPALS method.
8. Extract Model Coefficients report.
9. Select first row of coefficients.
10. Capture bootstrap results for centered data.
11. Extract bootstrap matrix for centered data.
12. Deselect first row of coefficients.
13. Capture bootstrap results for original data.
14. Extract bootstrap matrix for original data.
15. Close all datasets without saving.



## Partial Least Squares using Select Rows
### Example 1
> **Summary**: Performs a Partial Least Squares (PLS) analysis on a subset of rows from a data table, selecting the response variable 'ls' and including 27 predictor variables.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #DataTable, #RegressionAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
s = dt2 << Select Rows( 1 :: 14 );
s << Exclude( 1 );
obj = dt2 << Partial Least Squares(
	Y( :ls ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22,
		:v23, :v24, :v25, :v26, :v27
	),
	Fit( SVD( Classical ) )
);
obj << Fit( SVD( Classical ), Number of Factors( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Select rows 1 to 14.
3. Exclude row 1.
4. Run Partial Least Squares analysis.
5. Set response variable to ls.
6. Include all 27 predictor variables.
7. Use Classical SVD method.
8. Refit model with 1 factor.
9. Specify Number of Factors as 1.
10. Execute the refit command.



### Example 2
> **Summary**: Performs a Partial Least Squares analysis on a subset of data rows, selecting 14 rows and excluding the first row, with 27 predictor variables and a single factor.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #DataSubset, #PredictorVariables, #FactorAnalysis -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
s = dt2 << Select Rows( 1 :: 14 );
s << Exclude( 1 );
obj = dt2 << Partial Least Squares(
	Y( :ls ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22,
		:v23, :v24, :v25, :v26, :v27
	),
	Fit
);
obj << Fit( Number of Factors( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Select rows 1 to 14.
3. Exclude row 1.
4. Perform Partial Least Squares.
5. Set response variable to ls.
6. Include 27 predictor variables.
7. Fit model.
8. Set number of factors to 1.



## Partial Least Squares using Set Values
> **Summary**: Process of opening a data table, setting values in columns 'v1' and 'ls', performing Partial Least Squares analysis with specified Y and X variables, and capturing log output.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #DataTableOperations, #LogCapture, #Analytics -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
dt2:v1 << Set Values( [., ., ., ., ., ., ., .] );
dt2:ls << Set Values( [3.011, 0, 0, 1.482, 1.116, 3.397, 2.428, 4.024, ., ., ., ., ., ., ., .] );
log1 = Log Capture( obj1 = dt2 << Partial Least Squares( Y( :ls, :ha, :dt ), X( :v1, :v2, :v3, :v4, :v5 ), Go ) );
```

**Code Explanation**:

1. Open data table.
2. Clear values in column "v1".
3. Set specific values in column "ls".
4. Perform Partial Least Squares analysis.
5. Specify "ls", "ha", "dt" as Y variables.
6. Include "v1", "v2", "v3", "v4", "v5" as X variables.
7. Execute the model fitting process.
8. Capture log output for analysis.



## Partial Least Squares using New Column
### Example 1
> **Summary**: Fits a Partial Least Squares model with multiple effects and generates a profiler plot using JMP's Log Capture feature.

<!-- Keywords: #PartialLeastSquares, #LogCapture, #JMPScriptingLanguage, #DataAnalysis, #ModelFitting -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
dt2 << New Column( "Validation3", values( [1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, ., ., ., .] ) );
log1 = Log Capture(
	obj3 = dt2 << Partial Least Squares(
		Y( :ls, :ha, :dt ),
		X( :v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10 ),
		Validation( :Validation3 ),
		Go( Method( NIPALS ), Initial Number of Factors( 10 ) )
	)
);
obj3 << (Fit[1] << Save Validation( 1 ));
colname = Column( dt2, 33 ) << Get name;
```

**Code Explanation**:

1. Open data table.
2. Add new column "Validation3".
3. Capture log output.
4. Perform Partial Least Squares analysis.
5. Set response variables: ls, ha, dt.
6. Set predictor variables: v1 to v10.
7. Use "Validation3" for validation.
8. Apply NIPALS method.
9. Set initial number of factors to 10.
10. Save validation results for first fit.



### Example 2
> **Summary**: Fits two Partial Least Squares (PLS) models with multiple effects and generates correlation loading plots for each model.

<!-- Keywords: #PartialLeastSquares, #JMPScriptingLanguage, #DataAnalysis, #RegressionModel, #CorrelationLoadingPlot -->

**Code**:
```jsl
nfac1 = 2;
nfac2 = 4;
dt2 = Open("data_table.jmp");
dt2 << New Column( "constant_term", formula( 1500 ) );
obj1 = dt2 << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X( :v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :constant_term ),
	Validation Method( Name( "Leave-One-Out" ), Initial Number of Factors( 11 ) ),
	Centering( 1 ),
	Scaling( 0 ),
	Fit( Correlation Loading Plot( nfac1 ) )
);
 
 
obj2 = dt2 << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X( :v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :constant_term ),
	Validation Method( Name( "Leave-One-Out" ), Initial Number of Factors( 11 ) ),
	Centering( 1 ),
	Scaling( 0 ),
	Fit
);
obj2 << (Fit[1] << Correlation Loading Plot( nfac2 ));
```

**Code Explanation**:

1. Define nfac1 variable.
2. Define nfac2 variable.
3. Open data table;
4. Add constant_term column.
5. Perform PLS analysis on obj1.
6. Set Y variables.
7. Set X variables including constant_term.
8. Use Leave-One-Out validation.
9. Enable centering, disable scaling.
10. Generate correlation loading plot for obj1.
11. Perform PLS analysis on obj2.
12. Set same Y and X variables.
13. Use same validation method.
14. Enable centering, disable scaling.
15. Generate correlation loading plot for obj2.



## Partial Least Squares using Delete Rows
> **Summary**: Process of performing Partial Least Squares regression with KFold validation and imputation of missing data, extracting the number of factors from the report.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #KFoldValidation, #MissingDataImputation, #RegressionAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Rows( {31} );
obj1 = dt << Partial Least Squares(
	Y( :log RAI ),
	X( :S1, :L1, :P1, :S2, :L2, :P2, :S3, :L3, :P3, :S4, :L4, :P4, :S5, :L5, :P5 ),
	Validation Method( KFold( 30 ), Initial Number of Factors( 15 ) ),
	Fit( Method( NIPALS ), Number of Factors( 4 ) )
);
rpt1 = obj1 << report;
n1 = rpt1[Outline Box( "Model Comparison Summary" )][Number Col Box( "Number of factors" )] << get as matrix;
obj2 = dt << Partial Least Squares(
	Y( :log RAI ),
	X( :S1, :L1, :P1, :S2, :L2, :P2, :S3, :L3, :P3, :S4, :L4, :P4, :S5, :L5, :P5 ),
	Impute Missing Data( 1 ),
	Validation Method( KFold( 30 ), Initial Number of Factors( 15 ) ),
	Fit( Method( NIPALS ), Number of Factors( 4 ) )
);
rpt2 = obj2 << report;
n2 = rpt1[Outline Box( "Model Comparison Summary" )][Number Col Box( "Number of factors" )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Delete row 31.
3. Perform Partial Least Squares.
4. Set Y variable: log RAI.
5. Set X variables: S1 to P5.
6. Use KFold validation with 30 folds.
7. Set initial number of factors to 15.
8. Fit model using NIPALS method.
9. Extract number of factors from report.
10. Repeat Partial Least Squares with imputed missing data.



## Partial Least Squares using Select Randomly
> **Summary**: Runs the Partial Least Squares (PLS) analysis on a data table, selecting 25% of rows randomly and excluding them, then generating diagnostics plots.

<!-- Keywords: #JSLScriptingLanguage, #PartialLeastSquares, #DiagnosticsPlots, #DataVisualization, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
s = dt << Select Randomly( 0.25 );
s << Exclude( 1 );
obj = dt << Partial Least Squares(
	Y( :Sepal length ),
	X( :Sepal width, :Petal length, :Petal width ),
	Validation Method( KFold( 7 ), Initial Number of Factors( 3 ) ),
	Fit( Method( NIPALS ), Diagnostics Plots( 1 ) ),
	SendToReport(
		Dispatch( {"NIPALS Fit with 3 Factors Using Fast SVD", "Diagnostics Plots", "Actual by Predicted Plot"}, "Diagnostics Plots",
			FrameBox,
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
rpt = obj << report;
selected rows = Remove( (Index( 1, 150 ))`, As List( dt << get excluded rows() ) );
b yplot = (dt:Sepal length << get values)[selected rows];
npoints = N Items( (rpt[Outline Box( "Actual by Predicted Plot" )][FrameBox( 1 )] << Find Seg( MarkerSeg )) << get colors );
yplot = (rpt[Outline Box( "Actual by Predicted Plot" )][FrameBox( 1 )] << Find Seg( MarkerSeg )) << get Y values;
```

**Code Explanation**:

1. Open data table;
2. Select 25% randomly.
3. Exclude selected rows.
4. Run Partial Least Squares.
5. Set response variable.
6. Set predictor variables.
7. Use K-Fold validation.
8. Specify initial factors.
9. Apply NIPALS method.
10. Generate diagnostics plots.



