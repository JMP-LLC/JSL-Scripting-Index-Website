# Model Comparison

### Example 1
> **Summary**: Fits a model with the prediction profiler, utilizing desirability functions to compare multiple models for predicting body fat. The script opens a data table, specifies response variables, and filters observations by validation type.

<!-- Keywords: #JMPScriptingLanguage, #ModelComparison, #PredictionProfiler, #DesirabilityFunctions, #DataTable -->

**Code**:
```jsl
// Model Comparison
// Open data table
dt = Open("data_table.jmp");
// Model Comparison
Model Comparison(
	Y(
		:
		"Pred Body Fat - 2nd Order Stepwise"n,
		:
		"Pred Body Fat - Variable Reduction PCA"n,
		:"Pred Body Fat - Stepwise"n,
		:"Pred Body Fat - Partition"n,
		:"Pred Body Fat - PLS"n,
		:
		"Pred Body Fat - Bootstrap Forest"n,
		:"Pred Body Fat - Boosted Tree"n,
		:
		"Pred Body Fat - Neural (3,0,0)"n,
		:
		"Pred Body Fat - Neural (4,0,0),(8,0,0)"n,
		:
		"Pred Body Fat - Boosted Neural"n,
		:
		"Pred Body Fat - Ensemble Model"n
	),
	Where(
		Format( :Validation ) ==
		"Validation"
	)
);
```

**Code Explanation**:

1. Open data table.
2. Launch Model Comparison.
3. Specify response variables.
4. Filter observations by validation type.



### Example 2
> **Summary**: Compares multiple models for predicting body fat using a model comparison object, filtering data by validation condition.

<!-- Keywords: #JMPScriptingLanguage, #ModelComparison, #DataTable, #PredictionProfiler, #DesirabilityFunctions -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Model Comparison(
	Y(
		:Name( "Pred Body Fat - 2nd Order Stepwise" ), :Name( "Pred Body Fat - Variable Reduction PCA" ),
		:Name( "Pred Body Fat - Stepwise" ), :Name( "Pred Body Fat - Partition" ), :Name( "Pred Body Fat - PLS" ),
		:Name( "Pred Body Fat - Bootstrap Forest" ), :Name( "Pred Body Fat - Boosted Tree" ), :Name( "Pred Body Fat - Neural (3,0,0)" ),
		:Name( "Pred Body Fat - Neural (4,0,0),(8,0,0)" ), :Name( "Pred Body Fat - Boosted Neural" ),
		:Name( "Pred Body Fat - Ensemble Model" )
	),
	Where( Format( :Validation ) == "Validation" )
);
```

**Code Explanation**:

1. Open table "data_table".
2. Create model comparison object.
3. Set response variables.
4. Filter data by validation condition.



### Example 3
> **Summary**: Compares multiple models for predicting body fat percentage, including stepwise regression, principal component analysis, and neural networks, with visualizations for actual vs. predicted values and residual plots.

<!-- Keywords: #ModelComparison, #PredictiveAnalytics, #JMPScriptingLanguage, #DataScience, #MachineLearning -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Model Comparison(
	Y(
		:Name( "Pred Body Fat - 2nd Order Stepwise" ), :Name( "Pred Body Fat - Variable Reduction PCA" ),
		:Name( "Pred Body Fat - Stepwise" ), :Name( "Pred Body Fat - Partition" ), :Name( "Pred Body Fat - PLS" ),
		:Name( "Pred Body Fat - Bootstrap Forest" ), :Name( "Pred Body Fat - Boosted Tree" ), :Name( "Pred Body Fat - Neural (3,0,0)" ),
		:Name( "Pred Body Fat - Neural (4,0,0),(8,0,0)" ), :Name( "Pred Body Fat - Boosted Neural" ),
		:Name( "Pred Body Fat - Ensemble Model" )
	),
	Plot Actual by Predicted( 1 ),
	Plot Residual by Row( 1 ),
	Profiler( 1 ),
	Where( Format( :Validation ) == "Validation" ),
	SendToReport(
		Dispatch( {}, "Model Comparison", OutlineBox, {Set Title( "Plot Actual by Predicted, Plot Residual by Row, Profiler" )} ),
		Dispatch( {"Model Comparison"}, "Measures of Fit for Percent body fat", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Model Comparison object.
3. Set response variables.
4. Enable Plot Actual by Predicted.
5. Enable Plot Residual by Row.
6. Enable Profiler.
7. Filter rows where Validation is "Validation".
8. Send report to window.
9. Set title for plots.
10. Close Measures of Fit for Percent body fat.



