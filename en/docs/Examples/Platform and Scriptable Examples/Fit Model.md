# Fit Model

### Example 1
> **Summary**: Opens a data table, fits a model to predict pain levels based on gender and drug interactions, and generates plots for actual vs predicted values, residuals, and effect leverage.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #PredictiveModeling, #DataVisualization, #StatisticalAnalysis -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y( :pain ),
	Effects(
		:gender, :drug, :gender * :drug
	),
	Personality(
		"Standard Least Squares"
	),
	Run(
		:pain <<
		{Plot Actual by Predicted( 1 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )}
	)
);
```

**Code Explanation**:

1. Open table.
2. Fit model.
3. Specify response variable.
4. Add effects.
5. Set personality.
6. Run analysis.
7. Plot actual vs predicted.
8. Plot residual vs predicted.
9. Plot effect leverage.



### Example 2
> **Summary**: Opens a data table and fits a repeated measures model to analyze the relationship between species, subject, season, and miles traveled.

<!-- Keywords: #JMPScriptingLanguage, #RepeatedMeasuresModel, #DataTable, #RegressionAnalysis, #StandardLeastSquares -->

**Code**:
```jsl
// Repeated Measures Model
// Open data table
dt = Open("data_table.jmp");
// Repeated Measures Model
Fit Model(
	Y( :miles ),
	Effects(
		:species,
		:subject[:species] & Random,
		:season, :species * :season
	),
	Personality(
		"Standard Least Squares"
	),
	Run
);
```

**Code Explanation**:

1. Open data table.
2. Fit Model dialog initiated.
3. Set response variable: miles.
4. Add species effect.
5. Add subject[:species] random effect.
6. Add season effect.
7. Add species*season interaction.
8. Set personality to Standard Least Squares.
9. Run the model.



### Example 3
> **Summary**: Fits a Nominal Logistic model to predict the 'Claim(Y/N)' response variable, considering AgeClass, City(Y/N), and Rating Class as effects, with interactive profiling capabilities.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #ModelFitting, #InteractiveProfiling, #LogisticRegression -->

**Code**:
```jsl
// Fit Model (Claim Y/N)
// Open data table
dt = Open("data_table.jmp");
// Fit Model (Claim Y/N)
Fit Model(
	Y( :"Claim(Y/N)"n ),
	Effects(
		:AgeClass, :"City(Y/N)"n,
		:Rating Class
	),
	Personality( "Nominal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 0 ),
		Profiler(
			1,
			Term Value(
				AgeClass( "Elder" ),
				"City(Y/N)"n( "N" ),
				Rating Class( "A" )
			)
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Fit Model.
3. Set response variable.
4. Add effects.
5. Use Nominal Logistic personality.
6. Run model.
7. Enable Likelihood Ratio Tests.
8. Disable Wald Tests.
9. Enable Profiler.
10. Set term values.



### Example 4
> **Summary**: Opens a data table, fits a model for Claim USD using Standard Least Squares personality and Minimal Report emphasis, and generates a profiler with confidence intervals.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #MinimalReport, #Profiler -->

**Code**:
```jsl
// Fit Model (Claim USD)
// Open data table
dt = Open("data_table.jmp");
// Fit Model (Claim USD)
Fit Model(
	Y( :Claim USD ),
	Effects(
		:AgeClass, :"City(Y/N)"n,
		:Rating Class
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				AgeClass( "Elder" ),
				"City(Y/N)"n( "N" ),
				Rating Class( "A" )
			)
		),
		:Claim USD <<
		{Plot Actual by Predicted( 0 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 0 )},
		SendToReport(
			Dispatch(
				{"Response Claim USD",
				"Prediction Profiler"},
				"10000", ScaleBox,
				{
				Format(
					"Currency",
					"USD",
					15,
					0
				), Max( 8000 ),
				Inc( 1000 )}
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit model for Claim USD.
3. Specify response variable.
4. Add effects: AgeClass, City(Y/N), Rating Class.
5. Set personality to Standard Least Squares.
6. Set emphasis to Minimal Report.
7. Run profiler with confidence intervals.
8. Set term values: Elder, N, A.
9. Disable plot options.
10. Format prediction profiler scale.



### Example 5
> **Summary**: Opens a data table, fits a model report with frequency and response variables, specifies effects, chooses personality, sets emphasis, and runs the model to generate a customized report.

<!-- Keywords: #JMPScriptingLanguage, #FitModelReport, #DataTable, #ModelFitting, #CustomizedReporting -->

**Code**:
```jsl
// Fit Model Report
// Open data table
dt = Open("data_table.jmp");
// Fit Model Report
Fit Model(
	Freq( :Relative Sizes ),
	Y( :Group Means ),
	Effects( :Group ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" ),
	Run(
		:Group Means << {{:Group << {}}}
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit Model Report.
3. Set frequency variable.
4. Define response variable.
5. Specify effects.
6. Choose personality.
7. Set emphasis.
8. Run model.
9. Customize report.



### Example 6
> **Summary**: Performs a power analysis and plot for a group effect in a linear model, utilizing the Fit Model platform to analyze the relationship between Group Means and Relative Sizes.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #PowerAnalysis, #LinearRegression, #GroupEffect -->

**Code**:
```jsl
// Power Analysis and Plot
// Open data table
dt = Open("data_table.jmp");
// Power Analysis and Plot
Fit Model(
	Freq( :Relative Sizes ),
	Y( :Group Means ),
	Effects( :Group ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" ),
	Run(
		:Group Means << {Lack of Fit( 0 ),
		Plot Actual by Predicted( 0 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 0 ),
		{:Group <<
		{Power Analysis(
			Alpha( 0.05 ),
			Sigma( 5, 6, 1 ),
			Delta( 3.46410161513775 ),
			Number( 16, 64, 4 ),
			Solve for Power,
			Power Plot,
			Done
		)}}}
	),
	SendToReport(
		Dispatch(
			{"Response Group Means"},
			"Summary of Fit", OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Response Group Means"},
			"Analysis of Variance",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Response Group Means"},
			"Effect Tests", OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Response Group Means",
			"Effect Details", "Group"},
			"Least Squares Means Table",
			OutlineBox,
			{Close( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Initiate Fit Model process.
3. Set frequency to Relative Sizes.
4. Define Y variable as Group Means.
5. Include Group effect.
6. Choose Standard Least Squares personality.
7. Minimal report emphasis.
8. Configure model options.
9. Disable various plot outputs.
10. Perform power analysis for Group.



### Example 7
> **Summary**: Fits a model to predict the response variable Y, considering the effects of HBars, Dynamo, Seat, Tires, Gear, Raincoat, and Brkfast. The script also generates profiler plots with normal and Pareto plots.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #ProfilerPlots, #NormalPlot, #ParetoPlot -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y( :Y ),
	Effects(
		:HBars, :Dynamo, :Seat, :Tires,
		:Gear, :Raincoat, :Brkfast
	),
	Personality(
		"Standard Least Squares"
	),
	Run(
		Profiler( 1 ),
		Y << {Normal Plot( 1 ),
		Pareto Plot( 1 )}
	)
);
```

**Code Explanation**:

1. Open table.
2. Define response variable.
3. Define effect variables.
4. Choose model personality.
5. Run model.
6. Generate profiler.
7. Enable normal plot.
8. Enable Pareto plot.



### Example 8
> **Summary**: Opens a data table, fits weight to an age vector and height using standard least squares, and generates a minimal report with customized plots disabled.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #MinimalReport, #CustomizedPlots -->

**Code**:
```jsl
// Fit weight to age vector and height
// Open data table
dt = Open("data_table.jmp");
// Fit weight to age vector and height
Fit Model(
	Y( :weight ),
	Effects( :age vector, :height ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" ),
	Run(
		:weight << {Lack of Fit( 0 ),
		Plot Actual by Predicted( 0 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 0 )}
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit weight to age vector.
3. Include height as effect.
4. Use standard least squares.
5. Generate minimal report.
6. Disable lack of fit test.
7. Disable actual vs predicted plot.
8. Disable regression plot.
9. Disable residual vs predicted plot.
10. Disable effect leverage plot.



### Example 9
> **Summary**: Opens a data table, fits a model to predict weight based on age, sex, and height, and generates plots for actual vs predicted, residual vs predicted, and effect leverage.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #DataAnalysis, #PredictiveModeling, #Visualization -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height ),
	Personality(
		"Standard Least Squares"
	),
	Run(
		:weight <<
		{Plot Actual by Predicted( 1 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )}
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define model response.
3. Specify model effects.
4. Choose model personality.
5. Run model fit.
6. Plot actual vs predicted.
7. Plot residual vs predicted.
8. Plot effect leverage.



### Example 10
> **Summary**: Opens a data table, fits a MANOVA model to specified response variables, and runs the analysis with the 'Manova' personality.

<!-- Keywords: #JMPScriptingLanguage, #MANOVA, #DataAnalysis, #StatisticalModeling, #JMP -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y(
		:BP 8M, :BP 12M, :BP 6M, :BP 8W,
		:BP 12W, :BP 6W, :BP 8F, :BP 12F,
		:BP 6F
	),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
```

**Code Explanation**:

1. Open table.
2. Define response variables.
3. Specify effects.
4. Choose MANOVA personality.
5. Run model.



### Example 11
> **Summary**: Opens a data table, fits a stepwise model with 2nd-order interactions to predict percent body fat from various anthropometric measurements, and generates a profiler with confidence intervals.

<!-- Keywords: #JMPScriptingLanguage, #StepwiseRegression, #Profiler, #ConfidenceIntervals, #DataAnalysis -->

**Code**:
```jsl
// Fit Model: Stepwise, 2nd order interactions
// Open data table
dt = Open("data_table.jmp");
// Fit Model: Stepwise, 2nd order interactions
Fit Model(
	Y( :Percent body fat ),
	Effects(
		:"Weight (lbs)"n,
		:"Abdomen circumference (cm)"n,
		:"Thigh circumference (cm)"n *
		:"Wrist circumference (cm)"n,
		:"Wrist circumference (cm)"n,
		:"Thigh circumference (cm)"n
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Reorder X Variables(
				:"Weight (lbs)"n,
				:
				"Abdomen circumference (cm)"n,
				:
				"Thigh circumference (cm)"n,
				:
				"Wrist circumference (cm)"n
			),
			Term Value(
				" Weight (lbs)"n(
					183,
					Lock( 0 ),
					Show( 1 )
				),
				" Abdomen 2 circumference (cm)"n(
					93.662,
					Lock( 0 ),
					Show( 1 )
				),
				" Thigh circumference (cm)"n(
					57.15,
					Lock( 0 ),
					Show( 1 )
				),
				" Wrist circumference (cm)"n(
					15,
					Min( 15 ),
					Lock( 0 ),
					Show( 1 )
				)
			)
		),
		:Percent body fat <<
		{Lack of Fit( 0 ),
		Plot Actual by Predicted( 0 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 0 )}
	),
	SendToReport(
		Dispatch(
			{"Response Percent body fat",
			"Prediction Profiler"}, "4",
			ScaleBox,
			{Min( 15 ), Max( 22 ),
			Inc( 1 ), Minor Ticks( 0 ),
			Inside Ticks( 1 ),
			Rotated Labels( "Vertical" )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Define response variable.
3. Specify effects for modeling.
4. Choose model personality.
5. Set report emphasis.
6. Run model fit.
7. Generate profiler.
8. Configure confidence intervals.
9. Reorder X variables.
10. Set term values and constraints.



### Example 12
> **Summary**: Opens a data table, fits a model using PCA variable reduction, and generates a report with a profiler and term values for selected variables.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #PCAVariableReduction, #Profiler, #TermValues -->

**Code**:
```jsl
// Fit Model: From PCA variable reduction
// Open data table
dt = Open("data_table.jmp");
// Fit Model: From PCA variable reduction
Fit Model(
	Y( :Percent body fat ),
	Effects(
		:"Hip circumference (cm)"n,
		:"Neck circumference (cm)"n,
		:"Wrist circumference (cm)"n
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				" Hip circumference (cm)"n(
					99.06,
					Lock( 0 ),
					Show( 1 )
				),
				" Neck circumference (cm)"n(
					38.1,
					Lock( 0 ),
					Show( 1 )
				),
				" Wrist circumference (cm)"n(
					18,
					Min( 15 ),
					Lock( 0 ),
					Show( 1 )
				)
			)
		),
		:Percent body fat <<
		{Lack of Fit( 0 ),
		Plot Actual by Predicted( 0 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 0 )}
	),
	SendToReport(
		Dispatch(
			{"Response Percent body fat",
			"Prediction Profiler"}, "3",
			ScaleBox,
			{Min( 15 ), Max( 22 ),
			Inc( 1 ), Minor Ticks( 0 ),
			Inside Ticks( 1 ),
			Rotated Labels( "Vertical" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit Model: From PCA variable reduction.
3. Set response variable.
4. Add effects variables.
5. Use Standard Least Squares personality.
6. Emphasize Minimal Report.
7. Run Profiler with confidence intervals.
8. Set term values for variables.
9. Hide Lack of Fit plot.
10. Adjust Prediction Profiler scale.



### Example 13
> **Summary**: Fits a model to the data table, defining dependent and independent variables, specifying interaction effects, choosing a modeling personality, and applying a Box Cox transformation.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #BoxCoxTransformation, #StandardLeastSquares, #DataAnalysis -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y( :y ),
	Effects(
		:load, :flow, :load * :flow,
		:speed, :load * :speed,
		:flow * :speed, :mud,
		:load * :mud, :flow * :mud,
		:speed * :mud
	),
	Personality(
		"Standard Least Squares"
	),
	Run( Box Cox Y Transformation( 1 ) )
);
```

**Code Explanation**:

1. Open data table.
2. Define dependent variable.
3. Define independent variables.
4. Specify interaction effects.
5. Choose modeling personality.
6. Apply Box Cox transformation.



### Example 14
> **Summary**: Fits an ordinal logistic model to a data table, specifying the response variable and effect variable, while utilizing the 'Ordinal Logistic' personality.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #OrdinalLogisticRegression, #DataTableAnalysis, #ModelFitting -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :Cheese ),
	Personality( "Ordinal Logistic" ),
	Run
);
```

**Code Explanation**:

1. Open table.
2. Set frequency column.
3. Define response variable.
4. Add effect variable.
5. Choose ordinal logistic personality.
6. Run model.



### Example 15
> **Summary**: Fits a model to the data table, specifying response and effect variables, and runs the fit with profiler and desirability functions for multiple components.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #Profiler, #DesirabilityFunctions, #ModelPersonality -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y(
		:MN ckt wx, :MN ckt yz,
		:SD ckt wx, :SD ckt yz
	),
	Effects(
		:Thickness, :PEB, :PUDDLE, :time,
		:focus
	),
	Personality(
		"Standard Least Squares"
	),
	Run(
		Profiler(
			Confidence Intervals( 1 ),
			Desirability Functions( 1 )
		),
		:MN ckt wx <<
		{Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )},
		:MN ckt yz <<
		{Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )},
		:SD ckt wx <<
		{Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )},
		:SD ckt yz <<
		{Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )}
	)
);
```

**Code Explanation**:

1. Open table.
2. Define response variables.
3. Define effect variables.
4. Choose model personality.
5. Run fit model.
6. Enable profiler.
7. Set confidence intervals.
8. Enable desirability functions.
9. Display scaled estimates for MN ckt wx.
10. Plot actual vs predicted for MN ckt wx.
11. Display scaled estimates for MN ckt yz.
12. Plot actual vs predicted for MN ckt yz.
13. Display scaled estimates for SD ckt wx.
14. Plot actual vs predicted for SD ckt wx.
15. Display scaled estimates for SD ckt yz.
16. Plot actual vs predicted for SD ckt yz.



### Example 16
> **Summary**: Opens a data table, fits a MANOVA model with specified response variables and an effect, and runs the analysis.

<!-- Keywords: #JMPScriptingLanguage, #MANOVAModel, #DataTable, #FitModel, #RunAnalysis -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y(
		:April AM, :April PM, :May AM,
		:May PM, :June AM, :June PM
	),
	Effects( :treatment ),
	Personality( "Manova" ),
	Run
);
```

**Code Explanation**:

1. Open table.
2. Fit Model.
3. Specify response variables.
4. Add effect.
5. Set personality to MANOVA.
6. Execute model.



### Example 17
> **Summary**: Opens a data table and fits a model to predict 'Coal particles' based on the effects of 'pH', 'Polymer', and their interaction, using Standard Least Squares personality.

<!-- Keywords: #JSLScripting, #ModelSpecification, #StandardLeastSquares, #DataTable, #PredictiveModeling -->

**Code**:
```jsl
// Model Specification
// Open data table
dt = Open("data_table.jmp");
// Model Specification
Fit Model(
	Y( :Coal particles ),
	Effects(
		:pH, :Polymer, :pH * :Polymer
	),
	Personality(
		"Standard Least Squares"
	)
);
```

**Code Explanation**:

1. Open table.
2. Fit model.
3. Specify response variable.
4. Add effects.
5. Set personality.



### Example 18
> **Summary**: Opens a data table, fits an ANCOVA model with pH, Polymer, and their interaction as effects, and configures various plots for visualization.

<!-- Keywords: #JMPScriptingLanguage, #ANCOVAModel, #DataTable, #PlotConfiguration, #StatisticalModeling -->

**Code**:
```jsl
// Fit ANCOVA Model
// Open data table
dt = Open("data_table.jmp");
// Fit ANCOVA Model
Fit Model(
	Y( :Coal particles ),
	Effects(
		:pH, :Polymer, :pH * :Polymer
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Leverage" ),
	Run(
		:Coal particles <<
		{Lack of Fit( 0 ),
		Plot Actual by Predicted( 1 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )}
	)
);
```

**Code Explanation**:

1. Open table.
2. Fit ANCOVA model.
3. Set response variable.
4. Add effects: pH, Polymer, interaction.
5. Choose personality: Standard Least Squares.
6. Set emphasis: Effect Leverage.
7. Configure lack of fit test.
8. Enable actual vs predicted plot.
9. Enable residual vs predicted plot.
10. Enable effect leverage plot.



### Example 19
> **Summary**: Opens a data table, fits a model to predict heart rate based on drink type and time, and generates various plots and reports for analysis.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #PredictiveModeling, #DataVisualization, #ReportGeneration -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y( :Heart Rate ),
	Effects(
		:Drink, :"Time (Numeric)"n,
		:Drink * :"Time (Numeric)"n,
		:Testers
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Leverage" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				Drink( "Coca-Cola" ),
				"Time (Numeric)"n(
					21.44
				),
				Testers( "Tester 1" )
			)
		),
		:Heart Rate << {Lack of Fit( 0 ),
		Plot Actual by Predicted( 1 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )},
		SendToReport(
			Dispatch(
				{"Response Heart Rate",
				"Prediction Profiler"},
				"Profiler", FrameBox,
				Frame Size( 217, 151 )
			),
			Dispatch(
				{"Response Heart Rate",
				"Prediction Profiler"},
				"Profiler", FrameBox( 3 ),
				Frame Size( 217, 151 )
			),
			Dispatch(
				{"Response Heart Rate",
				"Prediction Profiler"},
				"Profiler", FrameBox( 5 ),
				Frame Size( 217, 151 )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define response variable.
3. Specify model effects.
4. Choose personality.
5. Set emphasis.
6. Run profiler.
7. Configure profiler settings.
8. Customize plot options.
9. Adjust report frame sizes.
10. Display results.



### Example 20
> **Summary**: Opens a data table and fits a MANOVA model using the Fit Model command, specifying response variables, an effect variable, and setting the personality to Manova.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #MANOVA, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// Manova
// Open data table
dt = Open("data_table.jmp");
// Manova
Fit Model(
	Y( :S1, :S3 ),
	Effects( :CROP ),
	Personality( "Manova" ),
	Run
);
```

**Code Explanation**:

1. Open data table.
2. Fit Model command initiated.
3. Specify response variables.
4. Define effect variable.
5. Set personality to Manova.
6. Execute model fitting.



### Example 21
> **Summary**: Opens a data table and fits a nominal logistic regression model to predict the response variable CROP based on predictor variables S1 and S3, using the Nominal Logistic personality.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #DataTable, #PredictiveModeling, #StatisticalAnalysis -->

**Code**:
```jsl
// Nominal Logistic Regression
// Open data table
dt = Open("data_table.jmp");
// Nominal Logistic Regression
Fit Model(
	Y( :CROP ),
	Effects( :S1, :S3 ),
	Personality( "Nominal Logistic" ),
	Run
);
```

**Code Explanation**:

1. Open table.
2. Fit Nominal Logistic Regression.
3. Set response variable.
4. Add predictor variables.
5. Specify model personality.
6. Execute the analysis.



### Example 22
> **Summary**: Opens a data table, fits a model with specified effects and interactions, sets the response variable, and uses standard least squares personality.

<!-- Keywords: #JMPScriptingLanguage, #ModelFitting, #EffectsModeling, #LeastSquares, #DataTableOperations -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:X1, :X2, :X3, :X1 * :X2,
		:X1 * :X3, :X2 * :X3
	),
	Y( :Y ),
	PERSONALITY( Standard Least Squares )
);
```

**Code Explanation**:

1. Open data table.
2. Fit model with effects.
3. Include X1, X2, X3.
4. Include interactions X1*X2, X1*X3, X2*X3.
5. Set response variable Y.
6. Use standard least squares personality.



### Example 23
> **Summary**: Opens a data table, fits a model with effects, and includes random effects to analyze the relationship between variables.

<!-- Keywords: #JMPScriptingLanguage, #DataTable, #ModelFitting, #RandomEffects, #EffectsModeling -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:Whole Plots & Random,
		:Subplots & Random, :A1, :A2, :A3,
		:A4, :C1, :C2, :A1 * :A2,
		:A1 * :A3, :A1 * :A4, :A1 * :C1,
		:A1 * :C2, :A2 * :A3, :A2 * :A4,
		:A2 * :C1, :A2 * :C2, :A3 * :A4,
		:A3 * :C1, :A3 * :C2, :A4 * :C1,
		:A4 * :C2, :C1 * :C2
	),
	Y( :OCV )
);
```

**Code Explanation**:

1. Open data table.
2. Fit model with effects.
3. Include random effects.
4. Add main effects.
5. Include interaction terms.
6. Set response variable.
7. Execute model fitting.



### Example 24
> **Summary**: Opens a data table, fits a reduced model with specified effects, and keeps the dialog open for further analysis.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #REMLMethod, #StandardLeastSquares, #DataAnalysis -->

**Code**:
```jsl
// Reduced Model 1
// Open data table
dt = Open("data_table.jmp");
// Reduced Model 1
Fit Model(
	Y( :OCV ),
	Effects(
		:Whole Plots & Random,
		:Subplots & Random, :A1, :A2, :A3,
		:A4, :C1, :C2, :A1 * C1, :A1 * C2,
		:A2 * C1, :A4 * C2
	),
	Keep dialog open( 1 ),
	Personality(
		"Standard Least Squares"
	),
	Method( "REML" )
);
```

**Code Explanation**:

1. Open data table.
2. Define response variable.
3. Specify effects.
4. Keep dialog open.
5. Set personality.
6. Choose method.



### Example 25
> **Summary**: Opens a data table, fits a Reduced Model 2 with specified effects and personality, and keeps the dialog open for further analysis.

<!-- Keywords: #JMPScriptingLanguage, #ReducedModel2, #FitModel, #DataTable, #REMLMethod -->

**Code**:
```jsl
// Reduced Model 2
// Open data table
dt = Open("data_table.jmp");
// Reduced Model 2
Fit Model(
	Y( :OCV ),
	Effects(
		:Whole Plots & Random,
		:Subplots & Random, :A1, :A2, :A4,
		:C1, :C2, :A1 * C1, :A1 * C2,
		:A2 * C1, :A4 * C2
	),
	Keep dialog open( 1 ),
	Personality(
		"Standard Least Squares"
	),
	Method( "REML" )
);
```

**Code Explanation**:

1. Open data table.
2. Fit model.
3. Specify response variable.
4. Define effects.
5. Keep dialog open.
6. Choose personality.
7. Select method.
8. End fit model command.



### Example 26
> **Summary**: Opens a data table and fits a linear model using the specified effects, with the response variable being :Y.

<!-- Keywords: #JSLScriptingLanguage, #LinearModel, #DataTable, #FitModel, #JMP -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:X1, :X2, :X3, :X4, :X5, :X6
	),
	Y( :Y )
);
```

**Code Explanation**:

1. Open data table.
2. Define model effects.
3. Specify response variable.
4. Fit linear model.



### Example 27
> **Summary**: Fits a model to the specified data table, defining response and effect variables, setting personality and emphasis, and generating a profiler with confidence intervals.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #Profiler, #ConfidenceIntervals, #StandardLeastSquares -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y( :log y ),
	Effects(
		:log10 Rw, :log10 R, :Tu, :Tl,
		:Hu, :Hl, :L, :Kw, :Hu * :Hu,
		:L * :L, :Hl * :Hl, :Kw * :Kw,
		:Hl * :Hu
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Screening" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				log10 Rw(
					-1.06,
					Max( -0.82 )
				),
				log10 R( 3.35 ),
				Tu( 89335 ),
				Tl( 89.55, Min( 63.1 ) ),
				Hu( 1050 ),
				Hl( 760 ),
				L( 1400 ),
				Kw( 10950 )
			)
		),
		:Y << {Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )}
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define response variable.
3. Define effects.
4. Set model personality.
5. Set emphasis.
6. Run fit model.
7. Generate profiler.
8. Enable confidence intervals.
9. Set term values.
10. Configure predictions plot.



### Example 28
> **Summary**: Opens a data table, fits a model using least squares regression with specified effects, and generates a profiler with confidence intervals.

<!-- Keywords: #JMPScriptingLanguage, #LeastSquaresRegression, #Profiler, #ConfidenceIntervals, #DataAnalysis -->

**Code**:
```jsl
// Fit Model (Least Squares)
// Open data table
dt = Open("data_table.jmp");
// Fit Model (Least Squares)
Fit Model(
	Y( :log y ),
	Effects(
		:log10 Rw, :log10 R, :Tu, :Tl,
		:Hu, :Hl, :L, :Kw, :Hu * :Hu,
		:L * :L, :Hl * :Hl, :Kw * :Kw,
		:Hl * :Hu
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Screening" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				log10 Rw(
					-1.06,
					Max( -0.82 )
				),
				log10 R( 3.35 ),
				Tu( 89335 ),
				Tl( 89.55, Min( 63.1 ) ),
				Hu( 1050 ),
				Hl( 760 ),
				L( 1400 ),
				Kw( 10950 )
			)
		),
		:Y << {Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )}
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit model using least squares.
3. Specify response variable.
4. Define effects for model.
5. Set personality to standard least squares.
6. Emphasize effect screening.
7. Run the model.
8. Create profiler.
9. Include confidence intervals.
10. Set term values for profiler.



### Example 29
> **Summary**: Opens a data table, defines a model with multiple effects, specifies the response variable, sets the model personality to Standard Least Squares, and fits the model.

<!-- Keywords: #JMPScriptingLanguage, #ModelFitting, #DataTableOperations, #StandardLeastSquares, #RegressionAnalysis -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:Silica & RS, :Sulfur & RS,
		:Silane & RS, :Silica * :Sulfur,
		:Silica * :Silane,
		:Sulfur * :Silane,
		:Silica * :Silica,
		:Sulfur * :Sulfur,
		:Silane * :Silane
	),
	Y( :Stretch ),
	PERSONALITY(
		"Standard Least Squares"
	)
);
```

**Code Explanation**:

1. Open table.
2. Define model effects.
3. Specify response variable.
4. Set model personality.
5. Fit model.



### Example 30
> **Summary**: Opens a data table, defines a model with whole plots and random effects, and fits the model to predict corrosion resistance based on furnace temperature and coating.

<!-- Keywords: #JMPScriptingLanguage, #DataTable, #ModelFitting, #WholePlots&RandomEffects, #CorrosionResistance -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:Whole Plots & Random,
		:Furnace Temp, :Coating,
		:Furnace Temp * :Coating
	),
	Y( :Corrosion Resistance )
);
```

**Code Explanation**:

1. Open table.
2. Define model effects.
3. Specify response variable.
4. Fit model.



### Example 31
> **Summary**: Opens a data table and fits a model with multiple effects to analyze the relationships between Interfer, Wall, Depth, and Adhesive variables.

<!-- Keywords: #JMPScriptingLanguage, #ModelFitting, #DataAnalysis, #RegressionAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:Interfer, :Wall, :Depth,
		:Adhesive
	),
	Y( :Mean Y ),
	Y( :SN Ratio Y )
);
```

**Code Explanation**:

1. Open data table.
2. Fit Model script initiated.
3. Define effects: Interfer, Wall, Depth, Adhesive.
4. Set response variable: Mean Y.
5. Add response variable: SN Ratio Y.
6. Model execution begins.
7. Analyze data using defined effects.
8. Generate model results for Mean Y.
9. Generate model results for SN Ratio Y.
10. Display analysis reports.



### Example 32
> **Summary**: Opens a data table and fits a model with multiple effects, excluding the intercept.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #EffectsSpecification, #NoIntercept, #DataTableOperations -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:Cocoa & RS & Mixture,
		:Sugar & RS & Mixture,
		:Flour & RS & Mixture,
		:Butter & RS & Mixture,
		:Milk & RS & Mixture
	),
	Y( :Taste ),
	No Intercept( 1 )
);
```

**Code Explanation**:

1. Open table.
2. Fit a model.
3. Specify effects.
4. Include Cocoa & RS & Mixture.
5. Include Sugar & RS & Mixture.
6. Include Flour & RS & Mixture.
7. Include Butter & RS & Mixture.
8. Include Milk & RS & Mixture.
9. Set response variable.
10. Exclude intercept.



### Example 33
> **Summary**: Opens a data table, defines a model with whole plots and random effects, includes continuous effects, specifies interaction terms, sets the response variable, and fits the model using standard least squares.

<!-- Keywords: #JMPScriptingLanguage, #ModelFitting, #RandomEffects, #ContinuousEffects, #InteractionTerms -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:Whole Plots & Random,
		:Subplots & Random, :Temperature,
		:Time, :Catalyst,
		:Temperature * :Time,
		:Temperature * :Catalyst,
		:Time * :Catalyst
	),
	Y( :Y )
);
```

**Code Explanation**:

1. Open data table.
2. Define model effects.
3. Include random effects.
4. Add continuous effects.
5. Specify interaction terms.
6. Set response variable.
7. Fit the model.



### Example 34
> **Summary**: Opens a data table, fits a model for Y Simulated using REML method with Standard Least Squares personality, and specifies effects including interactions and random effects.

<!-- Keywords: #JMPScriptingLanguage, #REMLMethod, #StandardLeastSquares, #ModelFitting, #DataAnalysis -->

**Code**:
```jsl
// Model for Y Simulated
// Open data table
dt = Open("data_table.jmp");
// Model for Y Simulated
Fit Model(
	Y( :Y Simulated ),
	Effects(
		:Temperature, :Time, :Catalyst,
		:Temperature * :Time,
		:Temperature * :Catalyst,
		:Time * :Catalyst
	),
	Random Effects(
		:Whole Plots, :Subplots
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" ),
	Method( "REML" )
);
```

**Code Explanation**:

1. Open table.
2. Fit model for Y Simulated.
3. Specify response variable.
4. Define effects: Temperature, Time, Catalyst.
5. Include interaction effects.
6. Define random effects: Whole Plots, Subplots.
7. Choose personality: Standard Least Squares.
8. Set emphasis: Minimal Report.
9. Select method: REML.
10. Execute fit model.



### Example 35
> **Summary**: Opens a data table and fits a model to predict the Strength variable based on various effects, including Grind, Temperature, Time, Charge, and Station.

<!-- Keywords: #JMPScriptingLanguage, #DataModeling, #PredictiveAnalytics, #RegressionAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:Grind, :Temperature, :Time,
		:Charge, :Station
	),
	Y( :Strength )
);
```

**Code Explanation**:

1. Open table.
2. Fit model.
3. Specify effects.
4. Include Grind.
5. Include Temperature.
6. Include Time.
7. Include Charge.
8. Include Station.
9. Set response variable.
10. Y is Strength.



### Example 36
> **Summary**: Fits a reduced model with 'Strength' as response, including 'Time', 'Charge', and 'Station' as effects, using Standard Least Squares personality and Effect Screening emphasis.

<!-- Keywords: #JSLScripting, #FitModel, #StandardLeastSquares, #EffectScreening, #DataTable -->

**Code**:
```jsl
// Reduced Model
// Open data table
dt = Open("data_table.jmp");
// Reduced Model
Fit Model(
	Y( :Strength ),
	Effects( :Time, :Charge, :Station ),
	Keep dialog open( 1 ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Screening" )
);
```

**Code Explanation**:

1. Open data table.
2. Assign table to variable `dt`.
3. Fit model with `Strength` as response.
4. Include `Time`, `Charge`, `Station` as effects.
5. Keep dialog open.
6. Use "Standard Least Squares" personality.
7. Set emphasis to "Effect Screening".



### Example 37
> **Summary**: Opens a data table, defines a response variable, and fits a standard least squares model with multiple effects using the Fit Model platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #DataAnalysis, #Regression -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Y( :Y ),
	Effects(
		:X1 & RS, :X2 & RS, :X3 & RS,
		:X1 * :X1, :X1 * :X2, :X2 * :X2,
		:X1 * :X3, :X2 * :X3, :X3 * :X3
	),
	Personality(
		"Standard Least Squares"
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define response variable.
3. Define effects for model.
4. Specify model personality.
5. Fit standard least squares model.



### Example 38
> **Summary**: Opens a data table, defines a linear model with multiple effects, specifies the response variable, sets the model personality to Standard Least Squares, and fits the model.

<!-- Keywords: #JMPScriptingLanguage, #LinearModel, #DataTable, #StandardLeastSquares, #ModelFitting -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:Operator, :Speed, :Current,
		:Operator * :Speed,
		:Operator * :Current,
		:Speed * :Current
	),
	Y( :Depth ),
	PERSONALITY(
		"Standard Least Squares"
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define model effects.
3. Specify response variable.
4. Set model personality.
5. Fit the model.



### Example 39
> **Summary**: Opens a data table, defines effects for a mixed-effects model, specifies the response variable, and fits the model without an intercept.

<!-- Keywords: #JMPScriptingLanguage, #Mixed-EffectsModel, #DataTableOperations, #ModelFitting, #NoIntercept -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:CuSO4 & RS & Mixture,
		:Na2S2O3 & RS & Mixture,
		:Glyoxal & RS & Mixture,
		:CuSO4 * :Na2S2O3,
		:CuSO4 * :Glyoxal,
		:CuSO4 * :Wavelength,
		:Na2S2O3 * :Glyoxal,
		:Na2S2O3 * :Wavelength,
		:Glyoxal * :Wavelength
	),
	Y( :Damping ),
	No Intercept( 1 )
);
```

**Code Explanation**:

1. Open table.
2. Define effects.
3. Specify response variable.
4. Fit model without intercept.



### Example 40
> **Summary**: Opens a data table, fits a stepwise model for regression analysis, and includes main effects and interaction terms to analyze the relationship between Yield and various predictor variables.

<!-- Keywords: #JMPScriptingLanguage, #StepwiseRegression, #RegressionAnalysis, #DataModeling, #StatisticalAnalysis -->

**Code**:
```jsl
// Model for Stepwise
// Open data table
dt = Open("data_table.jmp");
// Model for Stepwise
Fit Model(
	Y( :Yield ),
	Effects(
		:Methanol & RS, :Ethanol & RS,
		:Propanol & RS, :Butanol & RS,
		:pH & RS, :Time & RS,
		:Methanol * :Methanol,
		:Methanol * :Ethanol,
		:Ethanol * :Ethanol,
		:Methanol * :Propanol,
		:Ethanol * :Propanol,
		:Propanol * :Propanol,
		:Methanol * :Butanol,
		:Ethanol * :Butanol,
		:Propanol * :Butanol,
		:Butanol * :Butanol,
		:Methanol * :pH, :Ethanol * :pH,
		:Propanol * :pH, :Butanol * :pH,
		:pH * :pH, :Methanol * :Time,
		:Ethanol * :Time,
		:Propanol * :Time,
		:Butanol * :Time, :pH * :Time,
		:Time * :Time
	),
	Personality( "Stepwise" )
);
```

**Code Explanation**:

1. Open data table.
2. Fit model for stepwise analysis.
3. Set response variable: Yield.
4. Include main effects: Methanol & RS, Ethanol & RS, Propanol & RS, Butanol & RS, pH & RS, Time & RS.
5. Include interaction effects between methanol, ethanol, propanol, butanol, pH, and time.
6. Set personality to stepwise.
7. Perform stepwise regression analysis.



### Example 41
> **Summary**: Opens a data table, defines effects for a model, specifies the response variable, and fits the model with the specified effects.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #ModelFitting, #EffectsSpecification, #RegressionAnalysis -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:Dichloromethane & RS,
		:Methanol & RS,
		:Sample Volume & RS,
		:Dichloromethane *
		:Dichloromethane,
		:Dichloromethane * :Methanol,
		:Methanol * :Methanol,
		:Dichloromethane * :Sample Volume,
		:Methanol * :Sample Volume,
		:Sample Volume * :Sample Volume
	),
	Y( :Metacrate )
);
```

**Code Explanation**:

1. Open data table.
2. Define effects for model.
3. Specify response variable.
4. Fit model with specified effects.



### Example 42
> **Summary**: Opens a data table, fits a model with specified effects, and excludes the intercept using Standard Least Squares personality.

<!-- Keywords: #JMPScriptingLanguage, #ModelFitting, #EffectsSpecification, #NoIntercept, #StandardLeastSquares -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:X1 & Mixture, :X2 & Mixture,
		:X3 & Mixture, :X1 * :X2,
		:X1 * :X3, :X2 * :X3
	),
	Y( :Y ),
	No Intercept,
	PERSONALITY(
		"Standard Least Squares"
	)
);
```

**Code Explanation**:

1. Open table.
2. Fit model.
3. Define effects.
4. Specify response.
5. Exclude intercept.
6. Choose personality.



### Example 43
> **Summary**: Opens a data table, defines a standard least squares model with specified effects, sets the response variable, and fits the model.

<!-- Keywords: #JMPScriptingLanguage, #StandardLeastSquaresModel, #DataTableOperations, #ModelDefinition, #RegressionAnalysis -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:Feed Rate, :Catalyst, :Stir Rate,
		:Temperature, :Concentration
	),
	Y( :Percent Reacted ),
	PERSONALITY(
		"Standard Least Squares"
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define model effects.
3. Set response variable.
4. Specify model personality.
5. Fit standard least squares model.



### Example 44
> **Summary**: Opens a data table, defines effects for multiple response variables, and fits a model using the specified effects.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #ModelFitting, #EffectsSpecification, #RegressionAnalysis -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:Brand, :Time, :Power,
		:Brand * :Time, :Brand * :Power,
		:Time * :Power, :Time * :Time,
		:Power * :Power
	),
	Y( :Number Popped ),
	Y( :Total Kernels )
);
```

**Code Explanation**:

1. Open table.
2. Define effects.
3. Specify response variables.
4. Fit model.



### Example 45
> **Summary**: Opens a data table, defines a model with multiple effects, and fits the model to predict the response variable 'Percent Reacted'.

<!-- Keywords: #JMPScriptingLanguage, #ModelFitting, #EffectsModeling, #DataTableOperations, #PredictiveAnalytics -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:Feed Rate, :Catalyst, :Stir Rate,
		:Temperature, :Concentration,
		:Feed Rate * :Catalyst,
		:Feed Rate * :Stir Rate,
		:Feed Rate * :Temperature,
		:Feed Rate * :Concentration,
		:Catalyst * :Stir Rate,
		:Catalyst * :Temperature,
		:Catalyst * :Concentration,
		:Stir Rate * :Temperature,
		:Stir Rate * :Concentration,
		:Temperature * :Concentration
	),
	Y( :Percent Reacted )
);
```

**Code Explanation**:

1. Open data table.
2. Define effects for model.
3. Specify response variable.
4. Fit the model.



### Example 46
> **Summary**: Opens a data table, defines a reduced model with multiple effects, and executes the fit using Standard Least Squares personality.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #StandardLeastSquares, #DataTableOperations, #ModelFitting -->

**Code**:
```jsl
// Reduced Model
// Open data table
dt = Open("data_table.jmp");
// Reduced Model
Fit Model(
	Y( :Percent Reacted ),
	Effects(
		:Catalyst, :Temperature,
		:Concentration,
		:Catalyst * :Temperature,
		:Temperature * :Concentration
	),
	Personality(
		"Standard Least Squares"
	)
);
```

**Code Explanation**:

1. Open table.
2. Define model.
3. Set response variable.
4. Specify effects.
5. Choose personality.
6. Execute fit.



### Example 47
> **Summary**: Opens a data table and fits a linear regressor model with multiple effects to predict the response variable, using standard least squares personality.

<!-- Keywords: #JSLScriptingLanguage, #LinearRegression, #MultipleEffects, #StandardLeastSquares, #DataTable -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:Feed Rate, :Catalyst, :Stir Rate,
		:Temperature, :Concentration,
		:Feed Rate * :Catalyst,
		:Feed Rate * :Stir Rate,
		:Catalyst * :Stir Rate,
		:Feed Rate * :Temperature,
		:Catalyst * :Temperature,
		:Stir Rate * :Temperature,
		:Feed Rate * :Concentration,
		:Catalyst * :Concentration,
		:Stir Rate * :Concentration,
		:Temperature * :Concentration
	),
	Y( :Percent Reacted ),
	PERSONALITY(
		"Standard Least Squares"
	)
);
```

**Code Explanation**:

1. Open table.
2. Fit a linear regressor.
3. Include multiple effects.
4. Specify response variable.
5. Use standard least squares personality.



### Example 48
> **Summary**: Opens a data table, fits a reduced model with main effects and interaction terms using standard least squares, and keeps the dialog open.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #DataTableOperations, #ModelFitting -->

**Code**:
```jsl
// Reduced Model
// Open data table
dt = Open("data_table.jmp");
// Reduced Model
Fit Model(
	Y( :Percent Reacted ),
	Effects(
		:Catalyst, :Temperature,
		:Concentration,
		:Catalyst * :Temperature,
		:Temperature * :Concentration
	),
	Keep dialog open( 1 ),
	Personality(
		"Standard Least Squares"
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit model.
3. Specify response variable.
4. Add main effects.
5. Add interaction terms.
6. Keep dialog open.
7. Use standard least squares.



### Example 49
> **Summary**: Opens a data table, defines effects for a model, specifies the response variable, chooses the modeling personality, and fits the model using Standard Least Squares.

<!-- Keywords: #JMPScriptingLanguage, #Modeling, #RegressionAnalysis, #DataTableOperations, #StatisticalModeling -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:Feed Rate, :Catalyst, :Stir Rate,
		:Temperature, :Concentration,
		:Feed Rate * :Catalyst,
		:Feed Rate * :Stir Rate
	),
	Y( :Percent Reacted ),
	PERSONALITY(
		"Standard Least Squares"
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define effects for model.
3. Specify response variable.
4. Choose modeling personality.
5. Fit the model.



### Example 50
> **Summary**: Opens a data table, fits a model with multiple effects and interaction terms, sets the response variable, and excludes the intercept term.

<!-- Keywords: #JMPScriptingLanguage, #ModelFitting, #EffectsSpecification, #InteractionTerms, #DataAnalysis -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:Whole Plots & Random,
		:m1 & RS & Mixture,
		:m2 & RS & Mixture,
		:m3 & RS & Mixture,
		:extrusion rate * :temperature,
		:extrusion rate * :m1,
		:extrusion rate * :m2,
		:extrusion rate * :m3,
		:temperature * :m1,
		:temperature * :m2,
		:temperature * :m3, :m1 * :m2,
		:m1 * :m3, :m2 * :m3
	),
	Y( :thickness ),
	No Intercept( 1 )
);
```

**Code Explanation**:

1. Open table.
2. Fit model.
3. Specify effects.
4. Include interaction terms.
5. Set response variable.
6. Exclude intercept term.



### Example 51
> **Summary**: Opens a data table and fits a model with multiple effects, including Rater, Variety, Field, De-Stem, Yeast, Temperature, Press, Barrel Age, Barrel Seasoning, and Filtering, using the Rating as the response variable.

<!-- Keywords: #JSLScripting, #FitModel, #EffectsModeling, #DataTableOperations, #JMPScriptingLanguage -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:Rater, :Variety, :Field,
		:"De-Stem"n, :Yeast, :Temperature,
		:Press, :Barrel Age,
		:Barrel Seasoning, :Filtering
	),
	Y( :Rating )
);
```

**Code Explanation**:

1. Open data table.
2. Fit model with effects.
3. Include Rater effect.
4. Include Variety effect.
5. Include Field effect.
6. Include De-Stem effect.
7. Include Yeast effect.
8. Include Temperature effect.
9. Include Press effect.
10. Include Barrel Age effect.
11. Include Barrel Seasoning effect.
12. Include Filtering effect.
13. Set Rating as response variable.



### Example 52
> **Summary**: Opens a data table and fits a model with specified variables, including Rater, Variety, De-Stem, Yeast, Press, Barrel Seasoning, and Filtering effects.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #DataTable, #EffectsScreening, #StandardLeastSquares -->

**Code**:
```jsl
// Reduced Model
// Open data table
dt = Open("data_table.jmp");
// Reduced Model
Fit Model(
	Y( :Rating ),
	Effects(
		:Rater, :Variety, :"De-Stem"n,
		:Yeast, :Press, :Barrel Seasoning,
		:Filtering
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Screening" )
);
```

**Code Explanation**:

1. Open data table.
2. Fit model with specified variables.
3. Set response variable to Rating.
4. Include Rater effect.
5. Include Variety effect.
6. Include De-Stem effect.
7. Include Yeast effect.
8. Include Press effect.
9. Include Barrel Seasoning effect.
10. Include Filtering effect.



### Example 53
> **Summary**: Performs a nominal logistic regression analysis on the provided data table, incorporating main effects and interaction terms to predict the response variable.

<!-- Keywords: #NominalLogisticRegression, #JMPScriptingLanguage, #DataAnalysis, #RegressionModel, #StatisticalModeling -->

**Code**:
```jsl
// Nominal Logistic Regression
// Open data table
dt = Open("data_table.jmp");
// Nominal Logistic Regression
Fit Model(
	Freq( :count ),
	Y( :brand ),
	Effects(
		:softness, :previous use,
		:softness * :previous use,
		:temperature,
		:softness * :temperature,
		:previous use * :temperature,
		:softness * :previous use *
		:temperature
	),
	Personality( "Nominal Logistic" ),
	Run
);
```

**Code Explanation**:

1. Open table.
2. Set frequency column.
3. Define response variable.
4. Add main effects.
5. Add interaction effects.
6. Set model personality.
7. Run the model.



### Example 54
> **Summary**: Fits an ordinal logistic model to a data table, incorporating multiple predictors and running likelihood ratio tests.

<!-- Keywords: #JSLScriptingLanguage, #OrdinalLogisticRegression, #DataTableAnalysis, #PredictorModeling, #LikelihoodRatioTests -->

**Code**:
```jsl
// Logistic for Y Ordinal
// Open data table
dt = Open("data_table.jmp");
// Logistic for Y Ordinal
Fit Model(
	Y( :Y Ordinal ),
	Effects(
		:Age, :Gender, :BMI, :BP,
		:Total Cholesterol, :LDL, :HDL,
		:TCH, :LTG, :Glucose
	),
	Personality( "Ordinal Logistic" ),
	Run( Likelihood Ratio Tests( 1 ) )
);
```

**Code Explanation**:

1. Open data table.
2. Fit ordinal logistic model.
3. Set response variable.
4. Include multiple predictors.
5. Choose ordinal logistic personality.
6. Run likelihood ratio tests.



### Example 55
> **Summary**: Fits a linear model to open data, defining response and effect variables, selecting personality, and emphasizing effect screening in JMP.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #DataModeling, #EffectScreening, #StandardLeastSquares -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Y( :Price ),
	Effects(
		:Carat Weight, :Color, :Clarity,
		:Depth, :Table, :Cut, :Report
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Screening" )
);
```

**Code Explanation**:

1. Open table.
2. Fit a linear model.
3. Set response variable.
4. Define effects.
5. Choose personality.
6. Set emphasis.



### Example 56
> **Summary**: Opens a data table, fits a model to predict Price using various effects, and runs a profiler with confidence intervals, desirability functions, and response limits.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #Profiler, #DesirabilityFunctions, #ResponseLimits -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y( :Price ),
	Effects(
		:Carat Weight, :Color, :Clarity,
		:Depth, :Table, :Cut, :Report
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Screening" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Desirability Functions( 1 ),
			Price <<
			Response Limits(
				{Lower( 2000, 0.01 ),
				Middle( 3000, 1 ),
				Upper( 4000, 0.01 ),
				Goal( Match Target ),
				Importance( 1 )}
			),
			Term Value(
				Carat Size(
					0.631909406669322
				),
				Color( "E" ),
				Clarity( "VS2" ),
				Depth( 58.015177401438 ),
				Table( 62.4632071198035 ),
				Cut( "Ideal" ),
				Report( "GIA" )
			)
		),
		:Price << {Sorted Estimates( 0 ),
		Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 0 )}
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit model on Price.
3. Include Carat Weight, Color, Clarity.
4. Include Depth, Table, Cut, Report.
5. Use Standard Least Squares personality.
6. Emphasize effect screening.
7. Run profiler with confidence intervals.
8. Set desirability functions.
9. Define response limits for Price.
10. Set term values for predictors.



### Example 57
> **Summary**: Opens a data table and fits a model with specified effects, including interactions between Polymer A, Polymer B, Total Polymer, and Compression Force, while setting the response variable to Dissolution 60 and excluding the intercept.

<!-- Keywords: #JMPScriptingLanguage, #ModelFitting, #InteractionTerms, #DataTableOperations, #StatisticalModeling -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:Polymer A & Mixture,
		:Polymer B & Mixture,
		:Polymer A * :Total Polymer,
		:Polymer A * :Compression Force,
		:Polymer B * :Total Polymer,
		:Polymer B * :Compression Force,
		:Total Polymer *
		:Compression Force
	),
	Y( :Dissolution 60 ),
	No Intercept( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Fit model with specified effects.
3. Include Polymer A & Mixture.
4. Include Polymer B & Mixture.
5. Include interaction: Polymer A * Total Polymer.
6. Include interaction: Polymer A * Compression Force.
7. Include interaction: Polymer B * Total Polymer.
8. Include interaction: Polymer B * Compression Force.
9. Include interaction: Total Polymer * Compression Force.
10. Set response variable: Dissolution 60.
11. Exclude intercept from model.



### Example 58
> **Summary**: Performs a multivariate analysis of variance (MANOVA) model to analyze the relationship between log-histogram variables and categorical predictors, utilizing the Manova personality in JMP.

<!-- Keywords: #JMP-Scripting-Language, #Manova, #Multivariate-Analysis, #Categorical-Predictors, #Log-Histogram -->

**Code**:
```jsl
// Manova
// Open data table
dt = Open("data_table.jmp");
// Manova
Fit Model(
	Y(
		:LogHist0, :LogHist1, :LogHist3,
		:LogHist5
	),
	Effects(
		:drug, :dep1, :drug * :dep1
	),
	Personality( "Manova" ),
	Run(
		Response Function( "Contrast" ),
		Response Function( "Sum" )
	)
);
```

**Code Explanation**:

1. Open table.
2. Fit model with Manova personality.
3. Specify response variables.
4. Include main effects.
5. Include interaction effect.
6. Run contrast response function.
7. Run sum response function.



### Example 59
> **Summary**: Opens a data table, fits a model with measurement as the response variable and drug type as an effect, using standard least squares personality and emphasizing effect leverage. It also enables plot residual by predicted.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #EffectLeverage, #PlotResidualbyPredicted, #DataTable -->

**Code**:
```jsl
// Fit Model Equivalence Tests
// Open data table
dt = Open("data_table.jmp");
// Fit Model Equivalence Tests
Fit Model(
	Y( :Measurement ),
	Effects( :Drug Type ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Leverage" ),
	Run(
		:Measurement <<
		{Summary of Fit( 0 ),
		Analysis of Variance( 0 ),
		Parameter Estimates( 0 ),
		Lack of Fit( 0 ),
		Scaled Estimates( 0 ),
		Plot Actual by Predicted( 0 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 1 ),
		Plot Studentized Residuals( 0 ),
		Plot Effect Leverage( 0 ),
		Plot Residual by Normal Quantiles(
			0
		), Box Cox Y Transformation( 0 ),
		Effect Tests( 0 ),
		Multiple Comparisons(
			Effect( :Drug Type ),
			Student's t(
				1,
				All Pairwise Comparisons Scatterplot(
					0
				),
				Equivalence Tests( 3 )
			)
		)}
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit model with measurement.
3. Use drug type as effect.
4. Choose standard least squares personality.
5. Set emphasis on effect leverage.
6. Disable summary of fit.
7. Disable analysis of variance.
8. Disable parameter estimates.
9. Disable lack of fit.
10. Enable plot residual by predicted.



### Example 60
> **Summary**: Fits a model with separate slopes using the Fit Model function in JMP, specifying the response variable y and effects for Drug, x, and their interaction.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #SeparateSlopes, #RegressionAnalysis, #DataFitting -->

**Code**:
```jsl
// Fit Model-separate slopes
// Open data table
dt = Open("data_table.jmp");
// Fit Model-separate slopes
Fit Model(
	Y( :y ),
	Effects( :Drug, :x, :Drug * :x ),
	Personality(
		"Standard Least Squares"
	),
	Run
);
```

**Code Explanation**:

1. Open data table.
2. Define variable `dt`.
3. Specify file path.
4. Call `Fit Model` function.
5. Set response variable `y`.
6. Define effects: `Drug`, `x`, interaction `Drug * x`.
7. Set personality to "Standard Least Squares".
8. Execute model fit.



### Example 61
> **Summary**: Fits a model to data, specifying the response variable and effects, choosing a personality, and running the analysis.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #DataAnalysis, #RegressionAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality(
		"Standard Least Squares"
	),
	Run
);
```

**Code Explanation**:

1. Open table.
2. Fit Model.
3. Specify response variable.
4. Add effects.
5. Choose personality.
6. Run model.



### Example 62
> **Summary**: Opens a data table, fits a model for Annual Salary Z with effects of Gender, Length Of Service, and Performance, and generates a minimal report with parameter estimates.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #DataTable, #ParameterEstimates, #MinimalReport -->

**Code**:
```jsl
// Fit Model - Annual Salary Z
// Open data table
dt = Open("data_table.jmp");
// Fit Model - Annual Salary Z
Fit Model(
	Y( :Annual Salary Z ),
	Effects(
		:Gender, :Length Of Service,
		:Performance
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" ),
	Run(
		:Annual Salary Z <<
		{Summary of Fit( 1 ),
		Analysis of Variance( 1 ),
		Parameter Estimates( 1 ),
		Scaled Estimates( 0 ),
		Plot Actual by Predicted( 0 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ),
		Plot Studentized Residuals( 0 ),
		Plot Effect Leverage( 0 ),
		Plot Residual by Normal Quantiles(
			0
		), Box Cox Y Transformation( 0 )}
	),
	SendToReport(
		Dispatch(
			{"Response Annual Salary Z"},
			"Effect Tests", OutlineBox,
			{Close( 0 )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Fit model for Annual Salary Z.
3. Set response variable.
4. Add effects: Gender, Length Of Service, Performance.
5. Choose Standard Least Squares personality.
6. Set Minimal Report emphasis.
7. Configure report options.
8. Disable summary of fit.
9. Disable analysis of variance.
10. Enable parameter estimates.



### Example 63
> **Summary**: Fits a MANOVA model to analyze the relationships between weight, waist, and pulse on chin-ups, sit-ups, and jumps.

<!-- Keywords: #JMPScriptingLanguage, #MANOVAModel, #DataAnalysis, #StatisticalModeling, #FitModel -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y( :chins, :situps, :jumps ),
	Effects( :weight, :waist, :pulse ),
	Personality( "Manova" ),
	Run
);
```

**Code Explanation**:

1. Open table.
2. Fit model.
3. Specify response variables.
4. Specify effect variables.
5. Set personality to MANOVA.
6. Run model.



### Example 64
> **Summary**: Opens a data table and fits a quadratic model to analyze the relationships between Reaction Time, Reaction Temperature, and Yield.

<!-- Keywords: #JMPScriptingLanguage, #QuadraticModel, #DataAnalysis, #RegressionAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// Model quadratic
// Open data table
dt = Open("data_table.jmp");
// Model quadratic
Fit Model(
	Effects(
		:Reaction Time & RS,
		:Reaction Temperature & RS,
		:Reaction Time * :Reaction Time,
		:Reaction Time *
		:Reaction Temperature,
		:Reaction Temperature *
		:Reaction Temperature,
		:Reaction Time * :Reaction Time
		 * :Reaction Time,
		:Reaction Time * :Reaction Time
		 * :Reaction Temperature,
		:Reaction Time * (
		Reaction Temperature *
		:Reaction Temperature),
		:Reaction Temperature *
		:Reaction Temperature *
		:Reaction Temperature
	),
	Y( :Yield )
);
```

**Code Explanation**:

1. Open data table.
2. Fit quadratic model.
3. Specify effects: Reaction Time & RS.
4. Specify effects: Reaction Temperature & RS.
5. Specify effects: Reaction Time squared.
6. Specify effects: Reaction Time * Temperature.
7. Specify effects: Temperature squared.
8. Specify effects: Reaction Time cubed.
9. Specify effects: Reaction Time squared * Temperature.
10. Specify effects: Temperature cubed.



### Example 65
> **Summary**: Opens a data table, fits a linear regressor model with multiple effects and interactions, and excludes the intercept. The response variable is set to Rating.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #ModelBuilding, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:Mullet & RS & Mixture,
		:Sheepshead & RS & Mixture,
		:Croaker & RS & Mixture,
		:Mullet * :Sheepshead,
		:Mullet * :Croaker,
		:Mullet * :Temperature,
		:Sheepshead * :Croaker,
		:Sheepshead * :Temperature,
		:Croaker * :Temperature,
		:Mullet * :Sheepshead * :Croaker,
		:Mullet * :Sheepshead *
		:Temperature,
		:Mullet * :Croaker * :Temperature,
		:Sheepshead * :Croaker *
		:Temperature,
		:Mullet * :Sheepshead * :Croaker
		 * :Temperature
	),
	Y( :Rating ),
	No Intercept( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Fit a linear regressor.
3. Define effects for model.
4. Include interactions between variables.
5. Set response variable as Rating.
6. Exclude intercept from model.



### Example 66
> **Summary**: Fits a model to predict Oxy levels based on Runtime, Weight, RunPulse, RstPulse, and MaxPulse using Standard Least Squares personality.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #PredictiveModeling, #DataAnalysis -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y( :Oxy ),
	Effects(
		:Runtime, :Weight, :RunPulse,
		:RstPulse, :MaxPulse
	),
	Personality(
		"Standard Least Squares"
	),
	Run
);
```

**Code Explanation**:

1. Open data table.
2. Define response variable.
3. Specify predictor variables.
4. Choose model personality.
5. Run the model.



### Example 67
> **Summary**: Runs a stepwise regression analysis to identify significant predictor variables in the specified model, utilizing the Stepwise personality.

<!-- Keywords: #JSLScriptingLanguage, #StepwiseRegression, #PredictorVariables, #ModelFit, #RegressionAnalysis -->

**Code**:
```jsl
// Stepwise Fit
// Open data table
dt = Open("data_table.jmp");
// Stepwise Fit
Fit Model(
	Y( :Oxy ),
	Effects(
		:Runtime, :Weight, :RunPulse,
		:RstPulse, :MaxPulse
	),
	Personality( "Stepwise" ),
	Run
);
```

**Code Explanation**:

1. Open table.
2. Define model.
3. Specify response variable.
4. List predictor variables.
5. Choose stepwise personality.
6. Execute model fit.



### Example 68
> **Summary**: Opens a data table, defines effects for modeling, specifies the response variable, and fits the model using the specified effects.

<!-- Keywords: #JMPScriptingLanguage, #DataModeling, #RegressionAnalysis, #EffectSpecification, #ModelFitting -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:Liquid, :Sugar, :Flour, :Sifted,
		:Type, :Temp, :Salt, :Clamp,
		:Coat
	),
	Y( :Strength )
);
```

**Code Explanation**:

1. Open data table.
2. Define effects for modeling.
3. Specify response variable.
4. Fit model using specified effects.



### Example 69
> **Summary**: Opens a data table, fits a model with specified effects and interactions, applies Scheffe cubic terms, sets the response variable, and excludes the intercept.

<!-- Keywords: #JSLScriptingLanguage, #ModelFitting, #ScheffeCubic, #DataTableOperations, #StatisticalAnalysis -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:Solvent & Mixture,
		:Active & Mixture,
		:Water & Mixture,
		:Solvent * :Active,
		:Solvent * :Water,
		:Active * :Water,
		:Solvent * :Active * :Water,
		Scheffe Cubic( Solvent, Active ),
		Scheffe Cubic( Solvent, Water ),
		Scheffe Cubic( Active, Water )
	),
	Y( :T ),
	No Intercept( 1 )
);
```

**Code Explanation**:

1. Open table.
2. Fit model.
3. Specify effects.
4. Include interactions.
5. Apply Scheffe cubic.
6. Set response variable.
7. Exclude intercept.



### Example 70
> **Summary**: Opens a data table, fits a model with multiple effects and interaction terms, and specifies the response variable.

<!-- Keywords: #JMPScriptingLanguage, #ModelFitting, #DataAnalysis, #InteractionTerms, #ResponseVariable -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:"%Beads"n, :"%Strength"n,
		:"Flow(g/min)"n, :"T(¬∫C)"n,
		:"%Beads"n * :"%Strength"n,
		:"%Beads"n * :"Flow(g/min)"n,
		:"%Beads"n * :"T(¬∫C)"n,
		:"%Strength"n * :"Flow(g/min)"n,
		:"%Strength"n * :"T(¬∫C)"n,
		:"Flow(g/min)"n * :"T(¬∫C)"n,
		:"%Beads"n * :"%Beads"n,
		:"%Strength"n * :"%Strength"n,
		:"Flow(g/min)"n * :"Flow(g/min)"n,
		:"T(¬∫C)"n * :"T(¬∫C)"n
	),
	Y( :"Size/nm"n )
);
```

**Code Explanation**:

1. Open table.
2. Fit model with effects.
3. Include interaction terms.
4. Set response variable.



### Example 71
> **Summary**: Opens a data table, defines a model with specified effects and interaction terms, adds Scheffe cubic terms, and fits the model without an intercept.

<!-- Keywords: #JMPScriptingLanguage, #ModelBuilding, #Scheffecubic, #InteractionTerms, #NoIntercept -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:Propanol & Mixture,
		:Butanol & Mixture,
		:Pentanol & Mixture,
		:Propanol * :Butanol,
		:Propanol * :Pentanol,
		:Butanol * :Pentanol,
		:Propanol * :Butanol * :Pentanol,
		Scheffe Cubic(
			Propanol,
			Butanol
		),
		Scheffe Cubic(
			Propanol,
			Pentanol
		),
		Scheffe Cubic(
			Butanol,
			Pentanol
		)
	),
	No Intercept( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Define effects for model.
3. Include interaction terms.
4. Add Scheffe cubic terms.
5. Fit model without intercept.



### Example 72
> **Summary**: Opens a data table, defines effects for a model, specifies the response variable, and fits the model using JMP's Fit Model platform.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #DataAnalysis, #RegressionModel, #StatisticalModeling -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:X1, :X2, :X3, :X1 * :X2,
		:X1 * :X3, :X2 * :X3
	),
	Y( :Y )
);
```

**Code Explanation**:

1. Open data table.
2. Define effects for model.
3. Specify response variable.
4. Fit the model.



### Example 73
> **Summary**: Opens a data table and fits a MANOVA model to analyze the relationship between response variables Distance and Durability, with Brand as an effect variable.

<!-- Keywords: #JMPScriptingLanguage, #MANOVA, #DataAnalysis, #StatisticalModeling, #JMPDataTable -->

**Code**:
```jsl
// MANOVA
// Open data table
dt = Open("data_table.jmp");
// MANOVA
Fit Model(
	Y( :Distance, :Durability ),
	Effects( :Brand ),
	Personality( "Manova" ),
	Run
);
```

**Code Explanation**:

1. Open data table.
2. Fit Model command.
3. Specify response variables.
4. Add effect variable.
5. Set personality to Manova.
6. Execute the model.



### Example 74
> **Summary**: Visualizes the relationship between durability and brand, using a standard least squares personality to fit the model. The script also generates a profiler report with confidence intervals and term values for each brand.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #DurabilityAnalysis, #BrandEffects, #ProfilerReport -->

**Code**:
```jsl
// Fit Model: Durability by Brand
// Open data table
dt = Open("data_table.jmp");
// Fit Model: Durability by Brand
Fit Model(
	Y( :Durability ),
	Effects( :Brand ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Leverage" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				Brand(
					"Brand A",
					Lock( 0 ),
					Show( 1 )
				)
			)
		),
		:Durability <<
		{Parameter Estimates( 0 ),
		Effect Details( 0 ),
		Lack of Fit( 0 ),
		Plot Actual by Predicted( 1 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 0 )}
	),
	SendToReport(
		Dispatch(
			{"Response Durability",
			"Whole Model"},
			"Actual by Predicted Plot",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Response Durability",
			"Whole Model"},
			"Summary of Fit", OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Response Durability",
			"Whole Model"},
			"Effect Tests", OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Response Durability",
			"Prediction Profiler"},
			"Profiler", FrameBox,
			{Frame Size( 185, 118 )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Fit model.
3. Set response variable.
4. Add effect.
5. Choose personality.
6. Set emphasis.
7. Run profiler.
8. Configure profiler settings.
9. Hide certain reports.
10. Adjust report layout.



### Example 75
> **Summary**: Fits a model to the 'Price' variable in a data table, considering the effects of 'Age' and 'Bidders', with emphasis on effect leverage. The script also configures various plots for visualization.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #DataTable, #EffectLeverage, #Plotting -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y( :Price ),
	Effects( :Age, :Bidders ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Leverage" ),
	Run(
		:Price << {Lack of Fit( 0 ),
		Plot Actual by Predicted( 1 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )}
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define model variables.
3. Select modeling personality.
4. Set analysis emphasis.
5. Run the model fit.
6. Configure lack of fit test.
7. Enable actual vs predicted plot.
8. Disable regression plot.
9. Enable residual vs predicted plot.
10. Enable effect leverage plot.



### Example 76
> **Summary**: Fits a model to open data, specifying effects and personality for Stepwise regression.

<!-- Keywords: #JSLScriptingLanguage, #StepwiseRegression, #ModelFitting, #DataAnalysis, #RegressionAnalysis -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y( :"$/oz"n ),
	Effects(
		:Type, :Size, :Type * :Size
	),
	Personality( "Stepwise" ),
	Run
);
```

**Code Explanation**:

1. Open table.
2. Define model response.
3. Specify model effects.
4. Set personality to Stepwise.
5. Run model.



### Example 77
> **Summary**: Fits a logistic regression model to analyze the relationship between heat, soak, and readiness using the Nominal Logistic personality.

<!-- Keywords: #LogisticRegression, #NominalLogistic, #JSLScripting, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// Logistic Regression
// Open data table
dt = Open("data_table.jmp");
// Logistic Regression
Fit Model(
	Freq( :count ),
	Y( :ready ),
	Effects( :heat, :soak ),
	Personality( "Nominal Logistic" ),
	Run
);
```

**Code Explanation**:

1. Open data table.
2. Fit logistic regression model.
3. Set frequency column.
4. Specify response variable.
5. Define effect variables.
6. Choose nominal logistic personality.
7. Run the analysis.



### Example 78
> **Summary**: Opens a data table and fits a model with specified variables, including main effects, interaction effect, and log variance effect, using the Loglinear Variance personality.

<!-- Keywords: #JMPScriptingLanguage, #LoglinearVariance, #ModelFitting, #DataTableOperations, #StatisticalModeling -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Y( :Shrinkage ),
	Effects(
		:MoldTemp, :Screw Speed,
		:MoldTemp * :Screw Speed
	),
	LogVariance Effects(
		:Hold Time & LogVariance
	),
	Personality( "Loglinear Variance" ),
	Run
);
```

**Code Explanation**:

1. Open data table.
2. Fit model with specified variables.
3. Set response variable: Shrinkage.
4. Include main effects: MoldTemp, Screw Speed.
5. Include interaction effect: MoldTemp * Screw Speed.
6. Specify log variance effect: Hold Time.
7. Choose personality: Loglinear Variance.
8. Run the model.



### Example 79
> **Summary**: Fits a model using REML, incorporating random and fixed effects for temperature, with standard least squares personality.

<!-- Keywords: #JMPScriptingLanguage, #REMLModel, #RandomEffects, #FixedEffects, #StandardLeastSquares -->

**Code**:
```jsl
// Model: REML
// Open data table
dt = Open("data_table.jmp");
// Model: REML
Fit Model(
	Censor Code( "" ),
	Y( :Shrinkage ),
	Effects(
		:Casting[:Temperature] & Random,
		:Temperature
	),
	Personality(
		"Standard Least Squares"
	),
	Method( "REML" ),
	Set Alpha Level( 0.05 )
);
```

**Code Explanation**:

1. Open data table.
2. Fit model using REML.
3. Set censor code to none.
4. Specify response variable.
5. Add random effect for temperature.
6. Include fixed effect for temperature.
7. Choose standard least squares personality.
8. Use REML method.
9. Set alpha level to 0.05.



### Example 80
> **Summary**: Fits an EMS model to a data table, specifying censor code and response variable, while defining random and fixed effects.

<!-- Keywords: #JSLScriptingLanguage, #EMSModel, #DataAnalysis, #StatisticalModeling, #JMP -->

**Code**:
```jsl
// Model: EMS
// Open data table
dt = Open("data_table.jmp");
// Model: EMS
Fit Model(
	Censor Code( "" ),
	Y( :Shrinkage ),
	Effects(
		:Casting[:Temperature] & Random,
		:Temperature
	),
	Personality(
		"Standard Least Squares"
	),
	Method( "EMS" ),
	Set Alpha Level( 0.05 )
);
```

**Code Explanation**:

1. Open table.
2. Fit model using EMS.
3. Specify censor code.
4. Set response variable.
5. Define random effect.
6. Include fixed effect.
7. Choose standard least squares.
8. Select EMS method.
9. Set alpha level.



### Example 81
> **Summary**: Performs a Nominal Logistic regression analysis on the 'Species' response variable, utilizing 'Sepal length', 'Sepal width', 'Petal length', and 'Petal width' as predictor variables in JMP.

<!-- Keywords: #NominalLogisticRegression, #JMPScriptingLanguage, #PredictiveModeling, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// Nominal Logistic
// Open data table
dt = Open("data_table.jmp");
// Nominal Logistic
Fit Model(
	Y( :Species ),
	Effects(
		:Sepal length, :Sepal width,
		:Petal length, :Petal width
	),
	Personality( "Nominal Logistic" ),
	Run
);
```

**Code Explanation**:

1. Open data table.
2. Define response variable.
3. Specify predictor variables.
4. Set model personality.
5. Run the model.



### Example 82
> **Summary**: Fits a linear regression model to data, using standard least squares personality and emphasizing effect leverage.

<!-- Keywords: #JSLScriptingLanguage, #LinearRegression, #StandardLeastSquares, #EffectLeverage, #DataModeling -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y( :y ),
	Effects(
		:x1, :x2, :x3, :x4, :x5, :x6
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Leverage" ),
	Run
);
```

**Code Explanation**:

1. Open data table.
2. Fit model using linear regression.
3. Set response variable to y.
4. Include x1 to x6 as effects.
5. Use standard least squares personality.
6. Emphasize effect leverage.
7. Run the model.



### Example 83
> **Summary**: Opens a data table and fits a nominal logistic model to predict Lung Cancer based on the Smoker variable.

<!-- Keywords: #JSLScriptingLanguage, #NominalLogisticRegression, #DataTable, #ModelFitting, #PredictiveModeling -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Freq( :Count ),
	Y( :Lung Cancer ),
	Effects( :Smoker ),
	Personality( "Nominal Logistic" )
);
```

**Code Explanation**:

1. Open table.
2. Fit logistic model.



### Example 84
> **Summary**: Fits a model using REML to analyze the relationship between rating and machine/person interactions, with random effects for both machine and person.

<!-- Keywords: #JMPScriptingLanguage, #REMLModelFitting, #MixedEffectsModeling, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// Fit Model REML
// Open data table
dt = Open("data_table.jmp");
// Fit Model REML
Fit Model(
	Y( :rating ),
	Effects(
		:machine, :person & Random,
		:machine * :person & Random
	),
	Personality(
		"Standard Least Squares"
	),
	Run
);
```

**Code Explanation**:

1. Open data table.
2. Fit model using REML.
3. Set response variable.
4. Add fixed effects.
5. Add random effects.
6. Specify model personality.
7. Run the analysis.



### Example 85
> **Summary**: Fits a mixed-effects model using the EMS method to analyze the relationship between machine and person variables, with rating as the response variable.

<!-- Keywords: #JMPScriptingLanguage, #Mixed-EffectsModel, #EMSMethod, #MachineLearning, #DataAnalysis -->

**Code**:
```jsl
// Fit Model EMS
// Open data table
dt = Open("data_table.jmp");
// Fit Model EMS
Fit Model(
	Y( :rating ),
	Effects(
		:machine, :person & Random,
		:machine * :person & Random
	),
	Personality(
		"Standard Least Squares"
	),
	Method( "EMS" ),
	Run
);
```

**Code Explanation**:

1. Open table.
2. Fit Model EMS.
3. Specify response variable.
4. Define effects.
5. Set personality.
6. Choose method.
7. Execute model fit.



### Example 86
> **Summary**: Fits a standard least squares model to data, specifying frequency, response, and effect variables, and configuring mean effects.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #StandardLeastSquares, #DataAnalysis, #JMP -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Freq( :N ),
	Y( :mean ),
	Effects( :grp ),
	Personality(
		"Standard Least Squares"
	),
	Run( :mean << {{:grp << {}}} )
);
```

**Code Explanation**:

1. Open table.
2. Define data table variable.
3. Fit Model command.
4. Specify frequency column.
5. Set response variable.
6. Add effect variable.
7. Choose personality.
8. Run model.
9. Configure mean effect.
10. Display results.



### Example 87
> **Summary**: Fits a Nominal Logistic model to predict a response variable based on predictor variables, with likelihood ratio tests enabled and Wald tests disabled.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #LikelihoodRatioTests, #WaldTests, #LogisticPlot -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y( :Y ),
	Effects( :X ),
	Personality( "Nominal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 0 ),
		Logistic Plot( 1 )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define data table variable.
3. Initiate Fit Model.
4. Specify response variable.
5. Specify predictor variable.
6. Set model personality.
7. Run model fitting.
8. Enable likelihood ratio tests.
9. Disable Wald tests.
10. Enable logistic plot.



### Example 88
> **Summary**: Generates a response surface model to analyze the relationship between odor, temperature, and glucose ratio, with additional effects for humidity and interactions. The model is run with profiler plots and scaled estimates.

<!-- Keywords: #JMPScriptingLanguage, #ResponseSurfaceModeling, #ModelFitting, #ProfilerPlotting, #ScaledEstimates -->

**Code**:
```jsl
// Response Surface
// Open data table
dt = Open("data_table.jmp");
// Response Surface
Fit Model(
	Y( :odor ),
	Effects(
		:temp & RS, :gl ratio & RS,
		:ht & RS, :temp * :temp,
		:gl ratio * :temp,
		:gl ratio * :gl ratio,
		:ht * :temp, :ht * :gl ratio,
		:ht * :ht
	),
	Personality(
		"Standard Least Squares"
	),
	Run(
		Profiler( 1 ),
		:odor << {Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )}
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define response variable.
3. Specify effects for model.
4. Set model personality.
5. Run the model.
6. Generate profiler plot.
7. Enable scaled estimates.
8. Plot actual vs. predicted.



### Example 89
> **Summary**: Opens a data table, defines effects for a model, and fits the model to predict the 'Odor' variable.

<!-- Keywords: #JMPScriptingLanguage, #ModelFitting, #DataAnalysis, #RegressionAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:temp & RS, :gl ratio & RS,
		:ht & RS, :temp * :temp,
		:temp * :gl ratio,
		:gl ratio * :gl ratio,
		:temp * :ht, :gl ratio * :ht,
		:ht * :ht
	),
	Y( :Odor )
);
```

**Code Explanation**:

1. Open table.
2. Define effects.
3. Fit model.



### Example 90
> **Summary**: Opens a data table, defines a linear model with multiple effects, sets the response variable, and fits the model using Standard Least Squares personality.

<!-- Keywords: #JMPScriptingLanguage, #LinearModel, #EffectsModeling, #StandardLeastSquares, #DataTable -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		temp & RS, gl ratio & RS, ht & RS,
		temp * gl ratio, temp * ht,
		gl ratio * ht, temp * temp,
		gl ratio * gl ratio, ht * ht
	),
	Y( :odor ),
	Personality(
		"Standard Least Squares"
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define effects for model.
3. Set response variable.
4. Choose modeling personality.
5. Fit the model.



### Example 91
> **Summary**: Opens a data table, defines a standard least squares model with multiple effects, excludes the intercept, and fits the model to the response variable.

<!-- Keywords: #JMPScriptingLanguage, #StandardLeastSquaresModel, #EffectsModeling, #DataTableOperations, #ModelFitting -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:p1 & RS & Mixture,
		:p2 & RS & Mixture,
		:p3 & RS & Mixture, :p1 * :p2,
		:p1 * :p3, :p2 * :p3
	),
	Y( :Y ),
	No Intercept,
	PERSONALITY(
		"Standard Least Squares"
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define effects for model.
3. Specify response variable.
4. Exclude intercept from model.
5. Set model personality.
6. Fit standard least squares model.



### Example 92
> **Summary**: Fits a linear model to data, utilizing the Fit Model function in JMP Scripting Language (JSL) to analyze the relationship between OZONE levels and POPulation.

<!-- Keywords: #JMPScriptingLanguage, #LinearModel, #FitModel, #DataAnalysis, #Regression -->

**Code**:
```jsl
// Fit Model with Linear Fit
// Open data table
dt = Open("data_table.jmp");
// Fit Model with Linear Fit
Fit Model(
	Y( :OZONE ),
	Effects( :POP ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Leverage" ),
	Run(
		:OZONE << {Lack of Fit( 0 ),
		Plot Actual by Predicted( 1 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )}
	)
);
```

**Code Explanation**:

1. Open table.
2. Define data table variable.
3. Fit Model function call.
4. Specify response variable.
5. Specify effect variable.
6. Set personality to "Standard Least Squares".
7. Set emphasis to "Effect Leverage".
8. Run the model.
9. Configure Lack of Fit option.
10. Enable Plot Actual by Predicted.



### Example 93
> **Summary**: Fits a model with a knotted spline effect to analyze the relationship between OZONE levels and POPulation, while emphasizing effect leverage and providing plots for actual vs. predicted values, residuals, and effect leverage.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #KnottedSplineEffect, #EffectLeverage, #DataAnalysis -->

**Code**:
```jsl
// Fit Model with Knotted Spline Effect
// Open data table
dt = Open("data_table.jmp");
// Fit Model with Knotted Spline Effect
Fit Model(
	Y( :OZONE ),
	Effects( :POP & Knotted( 5 ) ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Leverage" ),
	Run(
		:OZONE << {Lack of Fit( 0 ),
		Plot Actual by Predicted( 1 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )}
	)
);
```

**Code Explanation**:

1. Open table.
2. Fit Model with Knotted Spline Effect.
3. Specify response variable.
4. Add knotted spline effect.
5. Choose Standard Least Squares personality.
6. Set emphasis on Effect Leverage.
7. Run model.
8. Disable Lack of Fit test.
9. Enable Actual vs. Predicted plot.
10. Enable Residual vs. Predicted plot.
11. Enable Effect Leverage plot.



### Example 94
> **Summary**: This JSL script defines a full factorial model to analyze the relationship between popcorn, oil amount, and batch on yield, using standard least squares personality.

<!-- Keywords: #FullFactorialModel, #JMPScriptingLanguage, #StandardLeastSquares, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// Full Factorial Model
// Open data table
dt = Open("data_table.jmp");
// Full Factorial Model
Fit Model(
	Y( :yield ),
	Effects(
		:popcorn, :oil amt,
		:popcorn * :oil amt, :batch,
		:popcorn * :batch,
		:oil amt * :batch,
		:popcorn * :oil amt * :batch
	),
	Personality(
		"Standard Least Squares"
	),
	Run
);
```

**Code Explanation**:

1. Open data table.
2. Define response variable.
3. Define main effects.
4. Define interaction effects.
5. Specify model personality.
6. Run the model.



### Example 95
> **Summary**: Fits a proportional hazards model to analyze the relationship between the 'days' variable and the effect of 'Group', while accounting for censoring in the data.

<!-- Keywords: #ProportionalHazards, #SurvivalAnalysis, #JMPScriptingLanguage, #DataModeling, #Censoring -->

**Code**:
```jsl
// Proportional Hazards
// Open data table
dt = Open("data_table.jmp");
// Proportional Hazards
Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run
);
```

**Code Explanation**:

1. Open table.
2. Fit proportional hazards model.
3. Set response variable.
4. Include group effect.
5. Choose proportional hazard personality.
6. Specify censoring variable.
7. Execute model fit.



### Example 96
> **Summary**: Opens a data table, fits a model using Standard Least Squares personality, and runs a profiler with plots for actual vs predicted values, effect leverage, and residual analysis.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #Profiler, #StandardLeastSquares, #DataAnalysis -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y( :Y ),
	Effects( :F, :Ct, :A, :T, :Cn ),
	Personality(
		"Standard Least Squares"
	),
	Run(
		Profiler,
		:Y <<
		{Plot Actual by Predicted( 1 ),
		Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 1 )}
	)
);
```

**Code Explanation**:

1. Open table.
2. Fit model.
3. Specify response variable.
4. Add effects.
5. Choose personality.
6. Run profiler.
7. Plot actual vs predicted.
8. Disable residual plot.
9. Enable effect leverage plot.



### Example 97
> **Summary**: Fits a Proportional Hazards model to analyze the relationship between Usage Hours and various effect variables, including Avg Load, Avg Moisture, Avg Vibration, Avg Solar Exposure, Location X, and Location Y.

<!-- Keywords: #ProportionalHazards, #JMPScriptingLanguage, #SurvivalAnalysis, #RegressionModel, #DataFitting -->

**Code**:
```jsl
// Fit Proportional Hazards
// Open data table
dt = Open("data_table.jmp");
// Fit Proportional Hazards
Fit Model(
	Y( :Usage Hours ),
	Effects(
		:Avg Load, :Avg Moisture,
		:Avg Vibration,
		:Avg Solar Exposure, :Location X,
		:Location Y
	),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Censor Code( "1" ),
	Run( Likelihood Ratio Tests( 1 ) )
);
```

**Code Explanation**:

1. Open data table.
2. Define data table variable.
3. Fit Proportional Hazards model.
4. Specify response variable.
5. Define effect variables.
6. Set model personality.
7. Identify censor variable.
8. Specify censor code.
9. Run model.
10. Perform likelihood ratio tests.



### Example 98
> **Summary**: Fits a regression model to predict Yield based on Aperture, Ranging, and Cadence variables in a data table.

<!-- Keywords: #RegressionModel, #JSLScripting, #DataAnalysis, #PredictiveModeling, #StatisticalAnalysis -->

**Code**:
```jsl
// Regression Model
// Open data table
dt = Open("data_table.jmp");
// Regression Model
Fit Model(
	Y( :Yield ),
	Effects(
		:Aperture, :Ranging, :Cadence
	),
	Personality(
		"Standard Least Squares"
	),
	Run
);
```

**Code Explanation**:

1. Open table.
2. Fit regression model.
3. Specify response variable.
4. Define predictor variables.
5. Choose modeling personality.
6. Execute model fit.



### Example 99
> **Summary**: Opens a data table, defines main effects for various variables, specifies the response variable, and fits a model using the Fit Model platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #MainEffects, #DataTable, #StatisticalModeling -->

**Code**:
```jsl
// Main Effects Model
// Open data table
dt = Open("data_table.jmp");
// Main Effects Model
Fit Model(
	Effects(
		:day & Random, :time of day,
		:thermometer, :outside temp,
		:type of space, :east or west,
		:sector, :wing, :volunteer,
		:outside conditions
	),
	Y( :fahrenheit )
);
```

**Code Explanation**:

1. Open table.
2. Define effects.
3. Specify response variable.
4. Fit model.



### Example 100
> **Summary**: Opens a data table, fits a model with specified effects, and configures various plot options to visualize the results.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #EffectLeverage, #PlotOptions -->

**Code**:
```jsl
// Final Model, after Stepwise
// Open data table
dt = Open("data_table.jmp");
// Final Model, after Stepwise
Fit Model(
	Y( :fahrenheit ),
	Effects(
		:time of day, :east or west,
		:time of day * :east or west,
		:thermometer, :type of space,
		:sector, :volunteer
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Leverage" ),
	Run(
		:fahrenheit <<
		{Parameter Estimates( 0 ),
		Plot Actual by Predicted( 1 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )}
	)
);
```

**Code Explanation**:

1. Open table.
2. Fit model with specified effects.
3. Use Standard Least Squares personality.
4. Set emphasis on Effect Leverage.
5. Configure fahrenheit parameter estimates.
6. Enable Plot Actual by Predicted.
7. Disable Plot Regression.
8. Enable Plot Residual by Predicted.
9. Enable Plot Effect Leverage.



### Example 101
> **Summary**: Runs the ordinal logistic model fit process, utilizing the Fit Model platform in JMP to analyze the relationship between taste test ratings and salt levels.

<!-- Keywords: #JMPScriptingLanguage, #OrdinalLogisticRegression, #FitModel, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// Ordinal Fit
// Open data table
dt = Open("data_table.jmp");
// Ordinal Fit
Fit Model(
	Y( :Taste Test ),
	Effects( :Salt & RS, :Salt * :Salt ),
	Personality( "Ordinal Logistic" ),
	Run
);
```

**Code Explanation**:

1. Open data table.
2. Fit ordinal logistic model.
3. Set response variable.
4. Add main effect.
5. Add interaction effect.
6. Specify personality.
7. Execute analysis.



### Example 102
> **Summary**: Opens a data table, fits a model to the Expenditures variable with Age Cohort and Ethnicity effects, and runs a profiler with confidence intervals. It also displays summary statistics and plots.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #Profiler, #DataTable, #StatisticalModeling -->

**Code**:
```jsl
// Fit Model (Expenditures)
// Open data table
dt = Open("data_table.jmp");
// Fit Model (Expenditures)
Fit Model(
	Y( :Expenditures ),
	Effects(
		:Age Cohort, :Ethnicity,
		:Age Cohort * :Ethnicity
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Leverage" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				Age Cohort(
					" 51 +",
					Lock( 0 ),
					Show( 1 )
				),
				Ethnicity(
					"Hispanic",
					Lock( 0 ),
					Show( 1 )
				)
			)
		),
		:Expenditures <<
		{Summary of Fit( 1 ),
		Analysis of Variance( 1 ),
		Parameter Estimates( 1 ),
		Lack of Fit( 0 ),
		Scaled Estimates( 0 ),
		Plot Actual by Predicted( 1 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 1 ),
		Plot Studentized Residuals( 0 ),
		Plot Effect Leverage( 1 ),
		Plot Residual by Normal Quantiles(
			0
		), Box Cox Y Transformation( 0 )}
	),
	Local Data Filter(
		Add Filter(
			columns( :Ethnicity ),
			Where(
				:Ethnicity == {"Hispanic",
				"White not Hispanic"}
			),
			Display(
				:Ethnicity,
				N Items( 8 )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit Model (Expenditures).
3. Set response variable: Expenditures.
4. Include effects: Age Cohort, Ethnicity, Age Cohort * Ethnicity.
5. Use Standard Least Squares personality.
6. Emphasize Effect Leverage.
7. Run Profiler with confidence intervals.
8. Lock Age Cohort and Ethnicity terms.
9. Display Summary of Fit, Analysis of Variance, Parameter Estimates.
10. Enable Plot Actual by Predicted, Plot Residual by Predicted, Plot Effect Leverage.



### Example 103
> **Summary**: Fits a linear regressor model to a data table, specifying the response variable and adding effects, while choosing the personality and emphasis.

<!-- Keywords: #JSLScriptingLanguage, #LinearRegression, #ModelFitting, #DataTableAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// Model 1
// Open data table
dt = Open("data_table.jmp");
// Model 1
Fit Model(
	Censor Code( "" ),
	Y( :Y ),
	Effects( :X1, :X2, :X3 ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" ),
	Set Alpha Level( 0.05 )
);
```

**Code Explanation**:

1. Open table.
2. Fit a linear regressor.
3. Specify response variable.
4. Add effects.
5. Choose personality.
6. Set emphasis.
7. Define alpha level.



### Example 104
> **Summary**: Fits a linear model to analyze the relationship between Y and X1, X2, and X3 variables in a data table, using standard least squares and generating a minimal report.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #DataAnalysis, #ModelFitting, #MinimalReport -->

**Code**:
```jsl
// Model 2
// Open data table
dt = Open("data_table.jmp");
// Model 2
Fit Model(
	Censor Code( "" ),
	Y( :Y ),
	Effects( :X1, :X3, :X2 ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" ),
	Set Alpha Level( 0.05 )
);
```

**Code Explanation**:

1. Open data table.
2. Fit a linear model.
3. Specify Y variable.
4. Include X1 effect.
5. Include X3 effect.
6. Include X2 effect.
7. Use standard least squares.
8. Generate minimal report.
9. Set alpha level to 0.05.



### Example 105
> **Summary**: Opens a data table, fits a model report with standard least squares personality, and configures analysis options for a minimal report.

<!-- Keywords: #JMPScriptingLanguage, #FitModelReport, #StandardLeastSquares, #MinimalReport, #AnalysisOptions -->

**Code**:
```jsl
// Fit Model Report
// Open data table
dt = Open("data_table.jmp");
// Fit Model Report
Fit Model(
	Y( :Y ),
	Effects( :X1, :A ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" ),
	Run(
		:Y << {Analysis of Variance( 1 ),
		Lack of Fit( 0 ),
		Plot Actual by Predicted( 0 ),
		Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 0 )}
	),
	SendToReport(
		Dispatch( {"Response Y"},
			"Effect Tests", OutlineBox,
			{Close( 0 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit model report.
3. Set response variable.
4. Define effects.
5. Choose personality.
6. Set emphasis.
7. Configure analysis options.
8. Disable analysis of variance.
9. Disable lack of fit.
10. Close effect tests outline.



### Example 106
> **Summary**: Fits a Nominal Logistic model to predict sex based on length, basilar, zygomat, and postorb effects in a data table.

<!-- Keywords: #NominalLogisticModel, #DataTable, #JSLScriptingLanguage, #FitModel, #PredictiveAnalytics -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y( :sex ),
	Effects(
		:length, :basilar, :zygomat,
		:postorb
	),
	Personality( "Nominal Logistic" ),
	Run
);
```

**Code Explanation**:

1. Open data table.
2. Fit Nominal Logistic model.
3. Set response variable to sex.
4. Add length as effect.
5. Add basilar as effect.
6. Add zygomat as effect.
7. Add postorb as effect.
8. Execute model fitting.



### Example 107
> **Summary**: Opens a data table, fits Model 2 to the data, and generates plots for actual vs predicted values, residuals, and effect leverage for multiple response variables.

<!-- Keywords: #JMPScriptingLanguage, #FitModel2, #Plotting, #DataAnalysis, #Regression -->

**Code**:
```jsl
// Fit Model 2
// Open data table
dt = Open("data_table.jmp");
// Fit Model 2
Fit Model(
	Y(
		:length, :basilar, :zygomat,
		:postorb
	),
	Effects( :sex ),
	Personality(
		"Standard Least Squares"
	),
	Run(
		:length <<
		{Plot Actual by Predicted( 1 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )},
		:basilar <<
		{Plot Actual by Predicted( 1 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )},
		:zygomat <<
		{Plot Actual by Predicted( 1 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )},
		:postorb <<
		{Plot Actual by Predicted( 1 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )}
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit Model 2.
3. Specify response variables.
4. Add effect variable.
5. Choose personality method.
6. Run model for length.
7. Plot actual vs predicted.
8. Plot residual vs predicted.
9. Plot effect leverage.
10. Repeat steps 6-9 for basilar, zygomat, postorb.



### Example 108
> **Summary**: Fits a model using the EMS method to analyze the relationship between tenderizer, carcass, roasting time, and their interactions in a data table.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #EMSMethod, #DataAnalysis, #Regression -->

**Code**:
```jsl
// Fit Model - EMS Method
// Open data table
dt = Open("data_table.jmp");
// Fit Model - EMS Method
Fit Model(
	Y( :Y ),
	Effects(
		:Tenderizer, :Carcass,
		:Tenderizer * :Carcass & Random,
		:Roasting Time,
		:Roasting Time * :Tenderizer
	),
	Personality(
		"Standard Least Squares"
	),
	Method( "EMS" ),
	Run
);
```

**Code Explanation**:

1. Open data table.
2. Define response variable.
3. Specify effects.
4. Set personality.
5. Choose method.
6. Run model.



### Example 109
> **Summary**: Opens a data table and fits a quadratic model to predict the response variable, incorporating interaction terms between Reaction Time, Reaction Temperature, and their combinations.

<!-- Keywords: #JMPScriptingLanguage, #QuadraticModel, #InteractionTerms, #DataTable, #RegressionAnalysis -->

**Code**:
```jsl
// Quadratic Model
// Open data table
dt = Open("data_table.jmp");
// Quadratic Model
Fit Model(
	Effects(
		:Reaction Time & RS,
		:Reaction Temperature & RS,
		:Reaction Time * :Reaction Time,
		:Reaction Time *
		:Reaction Temperature,
		:Reaction Temperature *
		:Reaction Temperature,
		:Reaction Time * :Reaction Time
		 * :Reaction Time,
		:Reaction Time * :Reaction Time
		 * :Reaction Temperature,
		:Reaction Time * (
		Reaction Temperature *
		:Reaction Temperature),
		:Reaction Temperature *
		:Reaction Temperature *
		:Reaction Temperature
	),
	Y( :Yield )
);
```

**Code Explanation**:

1. Open data table.
2. Fit quadratic model.
3. Include interaction terms.
4. Set response variable.



### Example 110
> **Summary**: Opens a data table, defines effects for multiple variables, specifies the response variable, chooses the Standard Least Squares model personality, and sets the report emphasis to minimal.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #ModelFitting, #StandardLeastSquares, #MinimalReport -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Fit Model(
	Effects(
		:X1, :X2, :X3, :X4, :X5, :X6, :X7,
		:X8, :X9, :X10, :X11, :X12, :X13,
		:X14, :X15, :X16, :X17, :X18
	),
	Y( :Y ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" )
);
```

**Code Explanation**:

1. Open table.
2. Define effects.
3. Specify response variable.
4. Choose model personality.
5. Set report emphasis.



### Example 111
> **Summary**: Opens a data table, fits a model with specified effects and personality, runs the model with profiler settings, and configures report dispatch for parameter estimates and scaled estimates.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #Profiler, #ParameterEstimates, #ScaledEstimates -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y( :Disso ),
	Effects(
		:Mill Time, :Screen Size,
		:Blend Time, :Blend Speed,
		:Compressor, :Coating Viscosity,
		:Spray Rate
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Screening" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				Mill Time(
					17.011,
					Lock( 0 ),
					Show( 1 )
				),
				Screen Size(
					"3",
					Lock( 0 ),
					Show( 1 )
				),
				Blend Time(
					14.9224,
					Lock( 0 ),
					Show( 1 )
				),
				Blend Speed(
					60.0442,
					Lock( 0 ),
					Show( 1 )
				),
				Compressor(
					"Compress1",
					Lock( 0 ),
					Show( 1 )
				),
				Coating Viscosity(
					99.316,
					Lock( 0 ),
					Show( 1 )
				),
				Spray Rate(
					399.7,
					Lock( 0 ),
					Show( 1 )
				)
			)
		),
		:Disso << {Lack of Fit( 0 ),
		Sorted Estimates( 0 ),
		Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 0 )}
	),
	SendToReport(
		Dispatch( {"Response Disso"},
			"Parameter Estimates",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Response Disso"},
			"Scaled Estimates",
			OutlineBox,
			{Close( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit Model command starts.
3. Set response variable.
4. Define model effects.
5. Choose personality method.
6. Set emphasis on effect screening.
7. Run model with profiler.
8. Configure profiler settings.
9. Lock term values.
10. Close unnecessary reports.



### Example 112
> **Summary**: Fits a model with interactions to analyze the relationship between various variables, including Mill Time, Screen Size, Blend Time, Compressor, Coating Viscosity, and Spray Rate, and generates a profiler with confidence intervals.

<!-- Keywords: #JMPScriptingLanguage, #ModelFitting, #Interactions, #Profiler, #DataAnalysis -->

**Code**:
```jsl
// Fit Model with Interactions
// Open data table
dt = Open("data_table.jmp");
// Fit Model with Interactions
Fit Model(
	Y( :Disso ),
	Effects(
		:Mill Time, :Screen Size,
		:Blend Time, :Compressor,
		:Coating Viscosity, :Spray Rate,
		:Mill Time * :Coating Viscosity,
		:Blend Time * :Spray Rate,
		:Coating Viscosity * :Spray Rate
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Screening" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				Mill Time(
					17.011,
					Lock( 0 ),
					Show( 1 )
				),
				Screen Size(
					"3",
					Lock( 0 ),
					Show( 1 )
				),
				Blend Time(
					14.9224,
					Lock( 0 ),
					Show( 1 )
				),
				Compressor(
					"Compress1",
					Lock( 0 ),
					Show( 1 )
				),
				Coating Viscosity(
					99.316,
					Lock( 0 ),
					Show( 1 )
				),
				Spray Rate(
					399.7,
					Lock( 0 ),
					Show( 1 )
				)
			)
		),
		:Disso << {Lack of Fit( 0 ),
		Sorted Estimates( 0 ),
		Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 0 )}
	),
	SendToReport(
		Dispatch( {"Response Disso"},
			"Parameter Estimates",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Response Disso"},
			"Scaled Estimates",
			OutlineBox,
			{Close( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit Model with interactions.
3. Set response variable.
4. Define effects.
5. Set personality.
6. Set emphasis.
7. Run model.
8. Generate profiler.
9. Configure profiler settings.
10. Customize report display.



### Example 113
> **Summary**: Fits a model with interaction profiles to analyze the relationship between 'Mill Time', 'Screen Size', 'Blend Time', 'Coating Viscosity', and 'Spray Rate' on the response variable 'Disso', while emphasizing effect screening and customizing diagnostic plots.

<!-- Keywords: #JMPScriptingLanguage, #FitModelwithInteractionProfiles, #EffectScreening, #DiagnosticPlots, #ModelCustomization -->

**Code**:
```jsl
// Fit Model with Interaction Profiles
// Open data table
dt = Open("data_table.jmp");
// Fit Model with Interaction Profiles
Fit Model(
	Y( :Disso ),
	Effects(
		:Mill Time, :Screen Size,
		:Blend Time, :Coating Viscosity,
		:Spray Rate,
		:Mill Time * :Coating Viscosity,
		:Blend Time * :Spray Rate,
		:Coating Viscosity * :Spray Rate,
		:Mill Time * :Mill Time
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Screening" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				Mill Time(
					17.011,
					Lock( 0 ),
					Show( 1 )
				),
				Screen Size(
					"3",
					Lock( 0 ),
					Show( 1 )
				),
				Blend Time(
					14.9224,
					Lock( 0 ),
					Show( 1 )
				),
				Coating Viscosity(
					99.316,
					Lock( 0 ),
					Show( 1 )
				),
				Spray Rate(
					399.7,
					Lock( 0 ),
					Show( 1 )
				)
			)
		),
		:Disso << {Lack of Fit( 0 ),
		Sorted Estimates( 0 ),
		Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 0 ),
		Interaction Plots( 1 )}
	),
	SendToReport(
		Dispatch( {"Response Disso"},
			"Parameter Estimates",
			OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Response Disso"},
			"Scaled Estimates",
			OutlineBox,
			{Close( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define response variable.
3. Specify model effects.
4. Set model personality.
5. Emphasize effect screening.
6. Run profiler with settings.
7. Configure profiler term values.
8. Customize diagnostic plots.
9. Hide parameter estimates.
10. Hide scaled estimates.



### Example 114
> **Summary**: Visualizes the relationship between four response variables (ABRASION, MODULUS, ELONG, and HARDNESS) using a Standard Least Squares model with specified effects and plots actual vs predicted values for each response variable.

<!-- Keywords: #JMPScriptingLanguage, #RegressionAnalysis, #StandardLeastSquares, #PredictiveModeling, #DataVisualization -->

**Code**:
```jsl
// RSM for 4 Responses
// Open data table
dt = Open("data_table.jmp");
// RSM for 4 Responses
Fit Model(
	Y(
		:ABRASION, :MODULUS, :ELONG,
		:HARDNESS
	),
	Effects(
		:SILICA & RS, :SILANE & RS,
		:SULFUR & RS, :SILICA * :SILICA,
		:SILANE * :SILICA,
		:SILANE * :SILANE,
		:SULFUR * :SILICA,
		:SULFUR * :SILANE,
		:SULFUR * :SULFUR
	),
	Personality(
		"Standard Least Squares"
	),
	Run(
		Profiler(
			Confidence Intervals( 1 )
		),
		:ABRASION <<
		{Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )},
		:MODULUS <<
		{Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )},
		:ELONG << {Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )},
		:HARDNESS <<
		{Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 )}
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define response variables.
3. Specify model effects.
4. Use Standard Least Squares personality.
5. Run the model.
6. Generate profiler with confidence intervals.
7. Display scaled estimates for ABRASION.
8. Plot actual vs predicted for ABRASION.
9. Display scaled estimates for MODULUS.
10. Plot actual vs predicted for MODULUS.



### Example 115
> **Summary**: Opens a data table, fits a Nominal Logistic model with specified effect variables, and runs the model execution with likelihood ratio tests enabled and Wald tests disabled.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #DataTable, #ModelFitting, #LikelihoodRatioTests -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y( :Survived ),
	Effects(
		:Passenger Class, :Sex, :Age,
		:Siblings and Spouses,
		:Parents and Children, :Fare
	),
	Personality( "Nominal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 0 )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit Model command initiated.
3. Specify response variable.
4. Define effect variables.
5. Set personality to Nominal Logistic.
6. Run model execution.
7. Enable Likelihood Ratio Tests.
8. Disable Wald Tests.



### Example 116
> **Summary**: Fits a full factorial model to analyze the relationship between Wear, Speed, Angle, Material, and their interactions using Standard Least Squares.

<!-- Keywords: #JMPScriptingLanguage, #FullFactorialModel, #StandardLeastSquares, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// Fit Model: Full Factorial Specification
// Open data table
dt = Open("data_table.jmp");
// Fit Model: Full Factorial Specification
Fit Model(
	Y( :Wear ),
	Effects(
		:Speed, :Angle, :Speed * :Angle,
		:Material, :Speed * :Material,
		:Angle * :Material,
		:Speed * :Angle * :Material
	),
	Personality(
		"Standard Least Squares"
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit model with specified effects.
3. Set response variable to Wear.
4. Include Speed in effects.
5. Include Angle in effects.
6. Include interaction Speed*Angle.
7. Include Material in effects.
8. Include interaction Speed*Material.
9. Include interaction Angle*Material.
10. Include interaction Speed*Angle*Material.



### Example 117
> **Summary**: Opens a data table, fits a model with specified effects, and runs a profiler with confidence intervals, while configuring term values, locking some terms, and plotting actual by predicted.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #Profiler, #TermValues, #Plotting -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y( :Wear ),
	Effects(
		:Speed, :Angle, :Speed * :Angle,
		:Material, :Speed * :Material,
		:Angle * :Material,
		:Speed * :Angle * :Material
	),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Effect Screening" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				Speed(
					0,
					Lock( 0 ),
					Show( 1 )
				),
				Angle(
					0,
					Lock( 0 ),
					Show( 1 )
				),
				Material(
					"A",
					Lock( 0 ),
					Show( 1 )
				)
			)
		),
		:Wear << {Lack of Fit( 0 ),
		Sorted Estimates( 1 ),
		Plot Actual by Predicted( 1 ),
		Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 0 )}
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit model with specified effects.
3. Use standard least squares personality.
4. Set emphasis on effect screening.
5. Run profiler with confidence intervals.
6. Set term values for Speed, Angle, and Material.
7. Lock term values for Speed and Angle.
8. Show term values for Speed, Angle, and Material.
9. Configure Lack of Fit and Sorted Estimates.
10. Plot Actual by Predicted, disable other plots.



### Example 118
> **Summary**: Fits a Proportional Hazards model to analyze the relationship between variables in a data table, with interactive features for censoring and risk ratio calculation.

<!-- Keywords: #ProportionalHazards, #JMPScriptingLanguage, #SurvivalAnalysis, #DataModeling, #RiskRatios -->

**Code**:
```jsl
// Fit Proportional Hazards
// Open data table
dt = Open("data_table.jmp");
// Fit Proportional Hazards
Fit Model(
	Y( :Time ),
	Effects(
		:Cell Type, :Treatment, :Prior,
		:Age, :Diag Time, :KPS
	),
	Personality( "Proportional Hazard" ),
	Censor( :censor ),
	Run( Risk Ratios( 1 ) )
);
```

**Code Explanation**:

1. Open data table.
2. Define response variable.
3. Specify effects variables.
4. Choose proportional hazard model.
5. Identify censoring variable.
6. Run model.
7. Display risk ratios.



### Example 119
> **Summary**: Fits a standard least squares model to predict weight (lb.) based on age, sex, and height (in.), with interactive plots for actual vs predicted, residual vs predicted, and effect leverage.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #StandardLeastSquares, #InteractivePlots, #DataAnalysis -->

**Code**:
```jsl
// Fit Model
// Open data table
dt = Open("data_table.jmp");
// Fit Model
Fit Model(
	Y( :"weight (lb.)"n ),
	Effects(
		:age, :sex, :"height (in.)"n
	),
	Personality(
		"Standard Least Squares"
	),
	Run(
		:"weight (lb.)"n <<
		{Plot Actual by Predicted( 1 ),
		Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )}
	)
);
```

**Code Explanation**:

1. Open table.
2. Fit Model.
3. Set response variable.
4. Add effects.
5. Choose personality.
6. Run model.
7. Plot actual vs predicted.
8. Plot residual vs predicted.
9. Plot effect leverage.



### Example 120
> **Summary**: Opens the 'data_table.jmp' file and fits a model with ABRASION as the response variable, including main effects of SILICA, SILANE, SULFUR, and their interactions, using Standard Least Squares personality and minimal report emphasis.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #InteractionPlots, #MinimalReport -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		:ABRASION << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 0 ), Effect Tests( 0 ), Effect Details( 0 ),
		Lack of Fit( 0 ), Scaled Estimates( 0 ), Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ),
		Plot Studentized Residuals( 0 ), Plot Effect Leverage( 0 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 ),
		Interaction Plots( 1 )},
		Effect Summary( 0 )
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Fit model with ABRASION as response.
3. Include SILICA, SILANE, SULFUR effects.
4. Include interaction effects between pairs.
5. Use Standard Least Squares personality.
6. Set report emphasis to Minimal.
7. Disable Summary of Fit.
8. Disable Analysis of Variance.
9. Enable Interaction Plots.
10. Disable other report sections.



### Example 121
> **Summary**: Opens the 'data_table.jmp' file and fits two separate models for ABRASION and weight, including interaction effects, using Standard Least Squares personality with minimal report emphasis.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #InteractionEffects, #StandardLeastSquares, #MinimalReport -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		:ABRASION << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 0 ), Effect Tests( 0 ), Effect Details( 0 ),
		Lack of Fit( 0 ), Scaled Estimates( 0 ), Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ),
		Plot Studentized Residuals( 0 ), Plot Effect Leverage( 0 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 ),
		Interaction Plots( 1 )},
		Effect Summary( 0 )
	)
);
Open("data_table.jmp");
Fit Model(
	Y( :weight ),
	Effects( :sex, :height, :sex * :height ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:weight << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 0 ), Effect Tests( 0 ), Effect Details( 0 ),
		Lack of Fit( 0 ), Scaled Estimates( 0 ), Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ),
		Plot Studentized Residuals( 0 ), Plot Effect Leverage( 0 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 ),
		Interaction Plots( 1 )},
		Effect Summary( 0 )
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Fit model for ABRASION.
3. Include interaction effects.
4. Use Standard Least Squares personality.
5. Minimal report emphasis.
6. Disable most output options.
7. Enable Interaction Plots.
8. Open data_table data
9. Fit model for weight.
10. Include interaction effects.



### Example 122
> **Summary**: Fits a nominal logistic model to a data table, including effects for country, type, and marital status, and generates two windows with graph boxes featuring log and linear scales.

<!-- Keywords: #JSLScripting, #NominalLogisticModel, #DataVisualization, #GraphBuilder, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Fit Model(
	Y( :size ),
	Effects( :country, :type, :marital status ),
	Personality( "Nominal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 0 ),
		Profiler(
			1,
			Term Value(
				country( "American", Lock( 0 ), Show( 1 ) ),
				Type( "Family", Lock( 0 ), Show( 1 ) ),
				marital status( "Married", Lock( 0 ), Show( 1 ) )
			)
		)
	),
	SendToReport(
		Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Lack Of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} )
	)
);
x = New Window( "Test", gb1 = Graph Box( FrameSize( 200, 200 ), H Line( 30 ) ), gb2 = Graph Box( FrameSize( 200, 200 ), V Line( 30 ) ) );
gb1[AxisBox( 2 )] << Scale( Log );
gb1[AxisBox( 2 )] << Scale( Linear );
gb2[AxisBox( 1 )] << Scale( Log );
gb2[AxisBox( 1 )] << Scale( Linear );
y = New Window( "Test",
	gb1 = Graph Box( FrameSize( 200, 200 ), H Line( -1000, 1000, 30 ) ),
	gb2 = Graph Box( FrameSize( 200, 200 ), V Line( 30, -1000, 1000 ) )
);
gb1[AxisBox( 2 )] << Scale( Log );
gb2[AxisBox( 1 )] << Scale( Log );
```

**Code Explanation**:

1. Open data table;
2. Fit nominal logistic model.
3. Set response variable: size.
4. Include effects: country, type, marital status.
5. Run likelihood ratio tests.
6. Disable Wald tests.
7. Enable profiler.
8. Lock and show term values.
9. Close whole model test, lack of fit, parameter estimates.
10. Create two windows with graph boxes.
11. Set horizontal line at y=30 in first window.
12. Set vertical line at x=30 in second window.
13. Toggle log and linear scales for axes.
14. Create another window with graph boxes.
15. Set horizontal line from -1000 to 1000 at y=30.
16. Set vertical line from 30 to -1000 to 1000.
17. Set log scale for axes.



### Example 123
> **Summary**: Fits a linear model to a data table, specifying response variables and effects, while configuring output options and disabling summary statistics.

<!-- Keywords: #JSLScriptingLanguage, #LinearRegression, #DataTableOperations, #FitModel, #ColumnSwitcher -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fit = dt << Fit Model(
	Y( :Process 1 ),
	Effects,
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Process 1 << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 0 ), Lack of Fit( 0 ), Scaled Estimates( 0 ),
		Plot Actual by Predicted( 1 ), Plot Regression( 0 ), Plot Residual by Predicted( 1 ), Plot Studentized Residuals( 0 ),
		Plot Effect Leverage( 1 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 )},
		Effect Summary( 0 )
	),
	SendToReport(
		Dispatch( {"Response Process 1", "Whole Model", "Actual by Predicted Plot"}, "1", ScaleBox,
			{Add Ref Line( 14, "Solid", "Light Green", "", 4 )}
		),
		Dispatch( {"Response Process 1", "Whole Model", "Residual by Predicted Plot"}, "1", ScaleBox,
			{Add Ref Line( 14, "Solid", "Light Green", "", 4 )}
		)
	)
);
cs = fit << Column Switcher( :Process 1, {:Process 1, :Process 2}, Retain Axis Settings( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Fit linear model.
3. Set response variable.
4. Define effects.
5. Choose personality.
6. Set emphasis.
7. Configure output options.
8. Disable summary of fit.
9. Disable analysis of variance.
10. Disable parameter estimates.



### Example 124
> **Summary**: Fits a linear model to a data table, configuring specific plots and reports while disabling most analysis outputs.

<!-- Keywords: #JSLScripting, #LinearModelFitting, #DataAnalysis, #Plotting, #ReportConfiguration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fit = dt << Fit Model(
	Y( :Process 1 ),
	Effects,
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Process 1 << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 0 ), Lack of Fit( 0 ), Scaled Estimates( 0 ),
		Plot Actual by Predicted( 1 ), Plot Regression( 0 ), Plot Residual by Predicted( 1 ), Plot Studentized Residuals( 0 ),
		Plot Effect Leverage( 1 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 )},
		Effect Summary( 0 )
	),
	SendToReport(
		Dispatch( {"Response Process 1", "Whole Model", "Actual by Predicted Plot"}, "1", ScaleBox,
			{Add Ref Line( 14, "Solid", "Light Green", "", 4 )}
		),
		Dispatch( {"Response Process 1", "Whole Model", "Residual by Predicted Plot"}, "1", ScaleBox,
			{Add Ref Line( 14, "Solid", "Light Green", "", 4 )}
		)
	)
);
cs = fit << Column Switcher( :Process 1, {:Process 1, :Process 2}, Retain Axis Settings( 1 ) );
cs << Next;
```

**Code Explanation**:

1. Open data table.
2. Fit linear model.
3. Set model options.
4. Run model analysis.
5. Disable most reports.
6. Enable specific plots.
7. Add reference line to actual vs predicted plot.
8. Add reference line to residual vs predicted plot.
9. Initialize column switcher.
10. Switch columns and retain settings.



### Example 125
> **Summary**: Fits a linear model to data, emphasizing effect leverage and generating plots for actual by predicted and residual by predicted values.

<!-- Keywords: #JSLScriptingLanguage, #LinearRegression, #EffectLeverage, #Plotting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fit = dt << Fit Model(
	Y( :Process 1 ),
	Effects,
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Process 1 << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 0 ), Lack of Fit( 0 ), Scaled Estimates( 0 ),
		Plot Actual by Predicted( 1 ), Plot Regression( 0 ), Plot Residual by Predicted( 1 ), Plot Studentized Residuals( 0 ),
		Plot Effect Leverage( 1 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 )},
		Effect Summary( 0 )
	),
	SendToReport(
		Dispatch( {"Response Process 1", "Whole Model", "Actual by Predicted Plot"}, "1", ScaleBox,
			{Add Ref Line( 14, "Solid", "Light Green", "", 4 )}
		),
		Dispatch( {"Response Process 1", "Whole Model", "Residual by Predicted Plot"}, "1", ScaleBox,
			{Add Ref Line( 14, "Solid", "Light Green", "", 4 )}
		)
	)
);
cs = fit << Column Switcher( :Process 1, {:Process 1, :Process 2} );
```

**Code Explanation**:

1. Open data table.
2. Fit linear model.
3. Set effect leverage emphasis.
4. Hide summary of fit.
5. Hide analysis of variance.
6. Hide parameter estimates.
7. Hide lack of fit.
8. Hide scaled estimates.
9. Show actual by predicted plot.
10. Hide regression plot.
11. Show residual by predicted plot.
12. Hide studentized residuals plot.
13. Show effect leverage plot.
14. Hide residual by normal quantiles plot.
15. Hide Box Cox transformation.
16. Hide effect summary report.
17. Add reference line to actual by predicted plot.
18. Add reference line to residual by predicted plot.
19. Enable column switching for Process 1.



### Example 126
> **Summary**: Fits a linear model to a data table, generating plots and summary statistics for analysis.

<!-- Keywords: #JMPScriptingLanguage, #LinearModel, #DataAnalysis, #Plotting, #ColumnSwitcher -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fit = dt << Fit Model(
	Y( :Process 1 ),
	Effects,
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Process 1 << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 0 ), Lack of Fit( 0 ), Scaled Estimates( 0 ),
		Plot Actual by Predicted( 1 ), Plot Regression( 0 ), Plot Residual by Predicted( 1 ), Plot Studentized Residuals( 0 ),
		Plot Effect Leverage( 1 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 )},
		Effect Summary( 0 )
	),
	SendToReport(
		Dispatch( {"Response Process 1", "Whole Model", "Actual by Predicted Plot"}, "1", ScaleBox,
			{Add Ref Line( 14, "Solid", "Light Green", "", 4 )}
		),
		Dispatch( {"Response Process 1", "Whole Model", "Residual by Predicted Plot"}, "1", ScaleBox,
			{Add Ref Line( 14, "Solid", "Light Green", "", 4 )}
		)
	)
);
cs = fit << Column Switcher( :Process 1, {:Process 1, :Process 2} );
cs << Next;
```

**Code Explanation**:

1. Open data table.
2. Fit linear model.
3. Set response variable.
4. Define effects.
5. Choose modeling personality.
6. Set emphasis.
7. Run model with options.
8. Disable summary of fit.
9. Disable analysis of variance.
10. Disable parameter estimates.
11. Disable lack of fit.
12. Disable scaled estimates.
13. Enable actual by predicted plot.
14. Disable regression plot.
15. Enable residual by predicted plot.
16. Disable studentized residuals plot.
17. Enable effect leverage plot.
18. Disable residual by normal quantiles plot.
19. Disable Box Cox transformation.
20. Disable effect summary.
21. Add reference line to actual by predicted plot.
22. Add reference line to residual by predicted plot.
23. Switch columns for prediction.
24. Move to next column.



### Example 127
> **Summary**: Analyze and visualize a diamond pricing model, utilizing Fit Model to screen effects and configure response limits.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #EffectScreening, #ResponseLimits, #Profiler -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Y( :Price ),
	Effects( :Carat Weight, :Color, :Clarity, :Depth, :Table, :Cut, :Report ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Desirability Functions( 1 ),
			Price << Response Limits(
				{Lower( 2000, 0.01 ), Middle( 3000, 1 ), Upper( 4000, 0.01 ), Goal( "Match Target" ), Importance( 1 )}
			),
			Arrange in Rows( 4 ),
			Term Value(
				Carat Weight( 0.8701, Lock( 0 ), Show( 1 ) ),
				Color( "K", Lock( 0 ), Show( 1 ) ),
				Clarity( "SI2", Lock( 0 ), Show( 1 ) ),
				Depth( 61.7115, Lock( 0 ), Show( 1 ) ),
				Table( 57.861, Lock( 0 ), Show( 1 ) ),
				Cut( "Very Good", Lock( 0 ), Show( 1 ) ),
				Report( "AGS", Lock( 0 ), Show( 1 ) )
			)
		),
		:Price << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 1 ), Sorted Estimates( 0 ), Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 ), Plot Regression( 0 ), Plot Residual by Predicted( 1 ), Plot Studentized Residuals( 1 ),
		Plot Effect Leverage( 0 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 1 )},
		Automatic Recalc( 1 )
	),
	Local Data Filter(
		Mode( Include( 0 ) ),
		Add Filter( columns( :Report ), Where( :Report == "AGS" ), Display( :Report, Size( 160, 30 ), List Display ) )
	),
	SendToReport(
		Dispatch( {"Response Price"}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response Price"}, "Lack Of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response Price"}, "Residual by Predicted Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response Price"}, "Studentized Residuals", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response Price"}, "Scaled Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response Price"}, "Prediction Profiler", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit model with Price as response.
3. Include multiple effects.
4. Use Standard Least Squares personality.
5. Emphasize Effect Screening.
6. Run Profiler with confidence intervals.
7. Set Price response limits.
8. Arrange profiler in rows.
9. Set term values for each factor.
10. Configure report options and local data filter.



### Example 128
> **Summary**: Fits a linear model to predict weight, considering age, sex, and height effects, with minimal report emphasis and expanded estimates.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #DataAnalysis, #ModelFitting, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( :weight << {Expanded Estimates( 1 ), Show Prediction Expression( 1 )} ),
	SendToReport(
		Dispatch( {"Response weight"}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response weight"}, "Lack Of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response weight"}, "Summary of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response weight"}, "Analysis of Variance", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response weight"}, "Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response weight"}, "Effect Tests", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response weight", "Expanded Estimates"}, "Estimate", NumberColBox, {Set Format( "Best", 12 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit linear model on weight.
3. Include age, sex, height effects.
4. Use standard least squares personality.
5. Minimal report emphasis.
6. Run expanded estimates for weight.
7. Show prediction expression for weight.
8. Close Effect Summary.
9. Close Lack Of Fit.
10. Close Summary of Fit.



### Example 129
> **Summary**: Fits a linear model to data, generating a detailed report with various sections and customizing the display of estimates.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #DataAnalysis, #ReportGeneration, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( :weight << {Expanded Estimates( 1 ), Show Prediction Expression( 1 )} ),
	SendToReport(
		Dispatch( {"Response weight"}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response weight"}, "Lack Of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response weight"}, "Summary of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response weight"}, "Analysis of Variance", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response weight"}, "Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response weight"}, "Effect Tests", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response weight", "Expanded Estimates"}, "Estimate", NumberColBox, {Set Format( "Best", 12 )} )
	)
);
New Window( "pictures", H List Box( Tab Page Box( "Picture", obj << Get Picture() ) ) );
```

**Code Explanation**:

1. Open data table.
2. Fit linear model to data.
3. Set response variable.
4. Add effects to model.
5. Choose personality method.
6. Set report emphasis.
7. Run model with options.
8. Close unnecessary report sections.
9. Set number format for estimates.
10. Create new window with picture.



### Example 130
> **Summary**: Fits a model with multiple predictors to analyze relationships between response variable Y and effects Age, Gender, BMI, BP, Total Cholesterol, LDL, HDL, TCH, LTG, Glucose.

<!-- Keywords: #JSL, #FitModel, #MultiplePredictors, #StandardLeastSquares, #MinimalReport -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run,
	SendToReport( Dispatch( {"Response Y", "Effect Summary"}, "", TableBox, {Set Shade Alternate Rows( 1 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Fit model with multiple predictors.
3. Set response variable to Y.
4. Include Age, Gender, BMI, BP, Total Cholesterol, LDL, HDL, TCH, LTG, Glucose as effects.
5. Use Standard Least Squares personality.
6. Generate Minimal Report.
7. Run the model.
8. Access Response Y report.
9. Navigate to Effect Summary.
10. Enable alternate row shading.



### Example 131
> **Summary**: Fits a model to predict weight based on height, grouped by sex, using standard least squares method and reports the results.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #ByGrouping, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fm = dt << Fit Model( Y( :Weight ), Effects( :Height ), By( :Sex ), Personality( Standard Least Squares ), Run );
Report( fm[1] )["sex=F"] << Close;
```

**Code Explanation**:

1. Open data table.
2. Fit model with weight as response.
3. Include height as effect.
4. Use sex for grouping.
5. Apply standard least squares method.
6. Run the model.
7. Access first report element.
8. Close "sex=F" outline.



### Example 132
> **Summary**: Fits a linear model for weight, using height as a predictor and grouping by sex, with standard least squares applied.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #LinearRegression, #ByGroup, #StandardLeastSquares -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fm = dt << Fit Model( Y( :Weight ), Effects( :Height ), By( :Sex ), Personality( Standard Least Squares ), Run );
Report( fm[1] )["sex=F"] << Close;
Report( fm[2] )["sex=M"] << Close;
```

**Code Explanation**:

1. Open data table.
2. Fit linear model for weight.
3. Use height as predictor.
4. Group by sex.
5. Apply standard least squares.
6. Run the model.
7. Access report for females.
8. Close female report.
9. Access report for males.
10. Close male report.



### Example 133
> **Summary**: Analyze and visualize a model with height as response, including sex as an effect, using standard least squares personality and emphasizing effect leverage.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #EffectLeverage, #LSMeansDunnett -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Fit Model(
	Y( :height ),
	Effects( :sex ),
	Personality( Standard Least Squares ),
	Emphasis( Effect Leverage ),
	Run(
		:height << {Lack of Fit( 0 ), Plot Actual by Predicted( 1 ), Plot Regression( 0 ), Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 ), {:sex << {LSMeans Dunnett(
			0.05,
			Control Level( "F" ),
			Control Differences Chart( 1, Point Options( "Show Needles" ) )
		)}}}
	),
	SendToReport(
		Dispatch( {"Response height"}, "Whole Model", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response height", "sex"}, "Leverage Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response height", "sex"}, "Least Squares Means Table", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit model with height as response.
3. Include sex as effect.
4. Use standard least squares personality.
5. Emphasize effect leverage.
6. Run model with specified options.
7. Disable lack of fit test.
8. Enable plot actual by predicted.
9. Disable plot regression.
10. Enable plot residual by predicted.
11. Enable plot effect leverage.
12. Perform LSMeans Dunnett for sex.
13. Set control level to "F".
14. Enable control differences chart with needles.
15. Close "Whole Model" outline.
16. Close "Leverage Plot" outline.
17. Close "Least Squares Means Table" outline.



### Example 134
> **Summary**: Runs a MANOVA analysis to compare the means of multiple response variables across treatment groups, with customized formatting for least squares means and overall means.

<!-- Keywords: #JMPScriptingLanguage, #MANOVAAnalysis, #CustomFormatting, #LeastSquaresMeans, #OverallMeans -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Fit Model(
	Y( :April AM, :April PM, :May AM, :May PM, :June AM, :June PM ),
	Effects( :treatment ),
	Personality( "Manova" ),
	Run,
	SendToReport(
		Dispatch( {"Least Squares Means", "Overall Means"}, "2", ScaleBox, {Format( "Custom", Formula( value > 200 ), 12 )} ),
		Dispatch( {"Least Squares Means", "treatment"}, "2", ScaleBox, {Format( "Custom", Formula( value > 220 ), 12 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit Manova model.
3. Specify response variables.
4. Include treatment effect.
5. Set Manova personality.
6. Run the analysis.
7. Format least squares means.
8. Apply custom format.
9. Format overall means.
10. Apply custom format.



### Example 135
> **Summary**: Fits a nominal logistic model to analyze lung cancer data, generating various diagnostic plots and metrics.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #ROCCurve, #LiftCurve, #ConfusionMatrix -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Fit Model(
	Freq( :Count ),
	Y( :Lung Cancer ),
	Effects( :Smoker ),
	Personality( "Nominal Logistic" ),
	Run(
		Positive Level( "Cancer" ),
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 1 ),
		Odds Ratios( 1 ),
		ROC Curve( 1 ),
		Lift Curve( 1 ),
		Confusion Matrix( 1 ),
		Profiler( 1, Interaction Profiler( 1 ), Term Value( Smoker( "NonSmoker", Lock( 0 ), Show( 1 ) ) ) )
	),
	SendToReport(
		Dispatch( {"Receiver Operating Characteristic"}, "1", ScaleBox,
			{Format( "Custom", Formula( If( Contains( Char( value ), "." ), Char( value ) || "000", Char( value ) || ".000" ) ), 12 )}
		),
		Dispatch( {"Receiver Operating Characteristic"}, "2", ScaleBox,
			{Format( "Custom", Formula( If( Contains( Char( value ), "." ), Char( value ) || "000", Char( value ) || ".000" ) ), 12 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit nominal logistic model.
3. Set frequency variable.
4. Specify response variable.
5. Add effect variable.
6. Configure positive level.
7. Enable likelihood ratio tests.
8. Enable Wald tests.
9. Enable odds ratios.
10. Generate ROC curve.
11. Generate lift curve.
12. Display confusion matrix.
13. Create profiler.
14. Customize ROC scale formatting.



### Example 136
> **Summary**: Fits a proportional hazard model to analyze survival data, utilizing the Fit Model platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ProportionalHazardModel, #SurvivalAnalysis, #FitModel, #JSL -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Fit Model(
	Y( :Time ),
	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),
	Personality( "Proportional Hazard" ),
	Censor( :censor ),
	Censor Code( "1" ),
	Run( Likelihood Ratio Tests( 1 ), Likelihood Confidence Intervals( 1 ), Risk Ratios( 1 ) ),
	SendToReport(
		Dispatch( {"Baseline Survival at mean"}, "1", ScaleBox,
			{Format(
				"Custom",
				Formula(
					Random Reset( 1 );
					Round( Random Uniform( 0, value ), 2 );
				),
				12
			)}
		),
		Dispatch( {"Baseline Survival at mean"}, "2", ScaleBox, {Format( "Custom", Formula( Round( SinH( value ), 2 ) ), 12 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit proportional hazard model.
3. Set response variable.
4. Define effects variables.
5. Choose personality type.
6. Specify censor variable.
7. Set censor code.
8. Run likelihood ratio tests.
9. Enable confidence intervals.
10. Calculate risk ratios.



### Example 137
> **Summary**: Fits a proportional hazards model to analyze survival data, incorporating multiple effects variables and censoring information.

<!-- Keywords: #JMPScriptingLanguage, #ProportionalHazardsModel, #SurvivalAnalysis, #Censoring, #LikelihoodRatioTests -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Fit Model(
	Y( :Time ),
	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),
	Personality( "Proportional Hazard" ),
	Censor( :censor ),
	Censor Code( "1" ),
	Run( Likelihood Ratio Tests( 1 ), Likelihood Confidence Intervals( 1 ), Risk Ratios( 1 ) ),
	SendToReport(
		Dispatch( {"Baseline Survival at mean"}, "1", ScaleBox, {Format( "Custom", Formula( Char( value ) || " s" ), 12 )} ),
		Dispatch( {"Baseline Survival at mean"}, "2", ScaleBox, {Format( "Custom", Formula( Round( Logit( value ), 2 ) ), 12 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit proportional hazards model.
3. Specify response variable.
4. Define effects variables.
5. Set personality to Proportional Hazard.
6. Identify censoring variable.
7. Define censor code.
8. Request likelihood ratio tests.
9. Request likelihood confidence intervals.
10. Request risk ratios.



### Example 138
> **Summary**: Fits a model with ABRASION and HARDNESS as responses, including SILICA, SILANE, and SULFUR as effects, using Standard Least Squares personality.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #Profiler, #SurfaceProfiler -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( Standard Least Squares ),
	Run,
	SendToReport(
		Dispatch( {}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Response ABRASION", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Response HARDNESS", OutlineBox, {Close( 1 )} )
	)
);
obj << profiler( 1 );
obj << surface profiler( 1 );
```

**Code Explanation**:

1. Open data table.
2. Fit model with ABRASION, HARDNESS as responses.
3. Include SILICA, SILANE, SULFUR as effects.
4. Use Standard Least Squares personality.
5. Run the model.
6. Close Effect Summary report.
7. Close Response ABRASION report.
8. Close Response HARDNESS report.
9. Launch Profiler for the model.
10. Launch Surface Profiler for the model.



### Example 139
> **Summary**: Fits a model with two responses and three effects, using standard least squares, and generates reports for effect summary, response abrasion, and response hardness.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #ReportGeneration, #DataAnalysis -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( Standard Least Squares ),
	Run,
	SendToReport(
		Dispatch( {}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Response ABRASION", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Response HARDNESS", OutlineBox, {Close( 1 )} )
	)
);
obj << profiler( 1 );
obj << surface profiler( 1 );
```

**Code Explanation**:

1. Set default names.
2. Open data_table data
3. Fit model with two responses.
4. Include three effects.
5. Use standard least squares.
6. Run the model.
7. Close effect summary.
8. Close response abrasion.
9. Close response hardness.
10. Open profiler.
11. Open surface profiler.



### Example 140
> **Summary**: Fits a model with weight as response, including age, sex, and height as effects, and generates reports for summary of fit, analysis of variance, parameter estimates, and plots actual by predicted and residual by predicted.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #EffectLeverage, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:weight << {Summary of Fit( 1 ), Analysis of Variance( 1 ), Parameter Estimates( 1 ), Scaled Estimates( 0 ),
		Plot Actual by Predicted( 1 ), Plot Regression( 0 ), Plot Residual by Predicted( 1 ), Plot Studentized Residuals( 0 ),
		Plot Effect Leverage( 1 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 )}
	),
	Local Data Filter( Add Filter( columns( :name ), Display( :name, N Items( 15 ), Find( Set Text( "" ) ) ) ) ),
	SendToReport(
		Dispatch( {"Response weight", "Whole Model", "Actual by Predicted Plot"}, "FitLS Leverage", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 13 ),
				Index Row( 13 ),
				UniqueID( 13 ),
				FoundPt( {354, 236} ),
				Origin( {82.2965413533835, 95.1744} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			)
		),
		Dispatch( {"Response weight", "Whole Model", "Residual by Predicted Plot"}, "FitLS Leverage", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 10 ),
				Index Row( 10 ),
				UniqueID( 10 ),
				FoundPt( {361, 767} ),
				Origin( {76.7446153846154, -9.89877267803325} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit model with weight as response.
3. Include age, sex, height as effects.
4. Use standard least squares personality.
5. Emphasize effect leverage.
6. Generate summary of fit report.
7. Generate analysis of variance report.
8. Generate parameter estimates report.
9. Plot actual by predicted.
10. Plot residual by predicted.
11. Add local data filter for name column.
12. Annotate actual by predicted plot.
13. Annotate residual by predicted plot.



### Example 141
> **Summary**: Fits a Partial Least Squares model to predict Price, considering Carat Weight, Color, Clarity, Depth, Table, and Cut as effects, with KFold validation and NIPALS method.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #KFoldCross-Validation, #NIPALSMethod, #ModelFitting -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Y( :Price ),
	Effects( :Carat Weight, :Color, :Clarity, :Depth, :Table, :Cut ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	Personality( "Partial Least Squares" ),
	Run(
		Initial Number of Factors( 15 ),
		Validation Method( KFold( 7 ), Initial Number of Factors( 15 ) ),
		Fit( Method( NIPALS ), Number of Factors( 6 ) )
	),
	SendToReport(
		Dispatch( {}, "Model Launch", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "KFold Cross Validation with K=7 and Method=NIPALS Using Fast SVD", OutlineBox, {Close( 1 )} ),
		Dispatch( {"NIPALS Fit with 6 Factors Using Fast SVD"}, "X-Y Scores Plots", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit Model dialog initiated.
3. Set Price as response variable.
4. Include Carat Weight, Color, Clarity, Depth, Table, Cut as effects.
5. Disable intercept term.
6. Disable centering polynomials.
7. Choose Partial Least Squares personality.
8. Set initial number of factors to 15.
9. Use KFold validation with 7 folds.
10. Fit model using NIPALS method with 6 factors.



### Example 142
> **Summary**: Analyze and visualize a mixed model with repeated effects, generating a graph builder with interactive elements.

<!-- Keywords: #JMPScriptingLanguage, #MixedModel, #GraphBuilder, #RepeatedEffects, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Quadrant, :Layout, :Quadrant * :Layout ),
	Subject( :Wafer ID ),
	Repeated Effects( :Quadrant ),
	Repeated Structure( "Unstructured" ),
	Personality( "Mixed Model" ),
	Run( Repeated Effects Covariance Parameter Estimates( 0 ) ), 
);
obj << Prediction Formula;
dt << Graph Builder(
	Size( 532, 482 ),
	Show Control Panel( 0 ),
	Variables( X( :Horizontal ), Y( :Vertical ), Wrap( :Layout ), Color( :Pred Formula Y ) ),
	Elements( Points( X, Y, Legend( 20 ), Jitter( "Auto" ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Fit mixed model.
3. Include main effects.
4. Include interaction effect.
5. Specify subject variable.
6. Define repeated effects.
7. Set unstructured covariance.
8. Generate prediction formula.
9. Create graph builder.
10. Add variables and elements.



### Example 143
> **Summary**: Fits a linear model to a data table, specifying effects and personality, and generating various summary statistics and plots.

<!-- Keywords: #JSLScripting, #FitModel, #LinearRegression, #EffectScreening, #SummaryStatistics -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Fit Model(
	Y( :Y ),
	Effects( :HBars, :Dynamo, :Seat, :Tires, :Gear, :Raincoat, :Brkfast ),
	Personality( Standard Least Squares ),
	Emphasis( Effect Screening ),
	Run(
		Profiler( 0 ),
		:Y << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 0 ), Effect Tests( 0 ), Effect Details( 0 ),
		Lack of Fit( 0 ), Normal Plot( 1 ), Sorted Estimates( 1 ), Plot Actual by Predicted( 0 ), Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ), Plot Effect Leverage( 0 )}
	),
	SendToReport( Dispatch( {"Response Y"}, "Sorted Parameter Estimates", OutlineBox, {Close( 1 )} ) )
);
```

**Code Explanation**:

1. Open data table.
2. Define dependent variable.
3. Specify model effects.
4. Set personality to standard least squares.
5. Emphasize effect screening.
6. Run fit model.
7. Disable profiler.
8. Configure summary of fit.
9. Enable normal plot.
10. Enable sorted estimates.



### Example 144
> **Summary**: Analyze a data table to model the relationship between height and weight, with emphasis on effect leverage, using Standard Least Squares personality.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #EffectLeverage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fm = dt << Fit Model(
	Y( :height, :weight ),
	Effects,
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:height << {Summary of Fit( 1 ), Analysis of Variance( 1 ), Parameter Estimates( 1 ), Lack of Fit( 0 ), Scaled Estimates( 0 ),
		Plot Actual by Predicted( 1 ), Plot Regression( 0 ), Plot Residual by Predicted( 1 ), Plot Studentized Residuals( 0 ),
		Plot Effect Leverage( 1 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 )},
		:weight << {Summary of Fit( 1 ), Analysis of Variance( 1 ), Parameter Estimates( 1 ), Lack of Fit( 0 ), Scaled Estimates( 0 ),
		Plot Actual by Predicted( 1 ), Plot Regression( 0 ), Plot Residual by Predicted( 1 ), Plot Studentized Residuals( 0 ),
		Plot Effect Leverage( 1 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 )}
	),
	By( :sex )
);
fm2 = fm << redo analysis;
```

**Code Explanation**:

1. Open data table.
2. Create Fit Model object.
3. Set response variables: height, weight.
4. Define effects.
5. Choose Standard Least Squares personality.
6. Set emphasis on Effect Leverage.
7. Run analysis for height.
8. Display Summary of Fit.
9. Display Analysis of Variance.
10. Display Parameter Estimates.



### Example 145
> **Summary**: Fits a model with two responses, including three effects and standard least squares personality, and runs profiler and surface profiler.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #Profiler, #SurfaceProfiler -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( Standard Least Squares ),
	Run( profiler( 1 ), surface profiler( 1 ) ), 
);
```

**Code Explanation**:

1. Open table.
2. Fit model with two responses.
3. Include three effects.
4. Use standard least squares personality.
5. Run profiler.
6. Run surface profiler.



### Example 146
> **Summary**: Fits a model with two responses, including three effects and running profiler and surface profiler, while deleting the first row from the data table.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #Profiler, #SurfaceProfiler, #DataTableManipulation -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( Standard Least Squares ),
	Run( profiler( 1 ), surface profiler( 1 ) ), 
);
Data Table("data_table") << delete rows( [1] );
```

**Code Explanation**:

1. Set default names.
2. Open data table;
3. Fit model with two responses.
4. Include three effects.
5. Use standard least squares.
6. Run profiler.
7. Run surface profiler.
8. Delete first row from data_table.



### Example 147
> **Summary**: Runs a MANOVA analysis on the provided data table, generating least squares means and overall means plots with customizable marker sizes.

<!-- Keywords: #JMPScripting, #MANOVA, #LeastSquaresMeans, #CentroidPlot, #DataAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Fit Model(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Effects( :Species ),
	Personality( Manova ),
	Run(
		Response Function(
			Identity, "Intercept" << {Test Details( 1 ), Centroid Plot( 1 )}, "Species" << {Test Details( 1 ), Centroid Plot( 1 )}
		)
	),
	SendToReport(
		Dispatch( {"Least Squares Means", "Overall Means"}, "FitManova LSMeans", FrameBox, {Marker Size( 2 )} ),
		Dispatch( {"Least Squares Means", "Species"}, "FitManova LSMeans", FrameBox, {Marker Size( 2 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Define response variables.
3. Specify effect variable.
4. Choose MANOVA personality.
5. Run model fit.
6. Set response function.
7. Configure intercept test details.
8. Enable intercept centroid plot.
9. Configure species test details.
10. Enable species centroid plot.



### Example 148
> **Summary**: Fits a mixed model to analyze sales data, incorporating # Employees and Assets as effects, with random effects and residual plots.

<!-- Keywords: #JMPScriptingLanguage, #MixedModel, #RandomEffects, #ResidualPlots, #DataAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Fit Model(
	Y( :Name( "Sales ($M)" ) ),
	Effects( :Name( "# Employees" ), :Assets ),
	Random Effects( :Type ),
	Center Polynomials( 0 ),
	Personality( Mixed Model ),
	Run( Repeated Effects Covariance Parameter Estimates( 0 ), Residual Plots( 1 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Define Y variable as Sales ($M).
3. Include # Employees and Assets as effects.
4. Set Type as random effect.
5. Disable polynomial centering.
6. Choose Mixed Model personality.
7. Run model without repeated effects covariance.
8. Generate residual plots.



### Example 149
> **Summary**: Fits a Nominal Logistic model to analyze the relationship between brand and customer preferences, utilizing frequency column and effects specification.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #ModelFitting, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Fit Model(
	Freq( :count ),
	Y( :brand ),
	Effects(
		:softness, :previous use, :softness * :previous use, :temperature, :softness * :temperature, :previous use * :temperature,
		:softness * :previous use * :temperature
	),
	Personality( Nominal Logistic ),
	Run(
		Positive Level( "m" ),
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 1 ),
		Odds Ratios( 1 ),
		ROC Curve( 1 ),
		Lift Curve( 1 ),
		Confusion Matrix( 1 ),
		Confidence Intervals( 1 ),
		Profiler(
			1,
			Term Value(
				softness( "hard", Lock( 0 ), Show( 1 ) ),
				previous use( "no", Lock( 0 ), Show( 1 ) ),
				temperature( "low", Lock( 0 ), Show( 1 ) )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit Nominal Logistic model.
3. Set frequency column.
4. Specify response variable brand.
5. Define effects for model.
6. Configure model personality.
7. Run model analysis.
8. Set positive level to "m".
9. Enable Likelihood Ratio Tests.
10. Enable Wald Tests.



### Example 150
> **Summary**: Fits an ordinal logistic model to a data table, specifying frequency, response, and effect variables, with confidence intervals, likelihood ratio tests, and Wald tests enabled.

<!-- Keywords: #JMPScriptingLanguage, #OrdinalLogisticRegression, #FitModel, #ConfidenceIntervals, #LikelihoodRatioTests -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :Cheese ),
	Personality( Ordinal Logistic ),
	Run(
		Confidence Intervals( 1 ),
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 1 ),
		ROC Curve( 1 ),
		Lift Curve( 1 ),
		Profiler( 1, Term Value( Cheese( "A", Lock( 0 ), Show( 1 ) ) ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define data table variable.
3. Fit ordinal logistic model.
4. Specify frequency column.
5. Set response variable.
6. Include effect variable.
7. Set model personality.
8. Enable confidence intervals.
9. Enable likelihood ratio tests.
10. Enable Wald tests.



### Example 151
> **Summary**: Create and execute a Proportional Hazard model to analyze the relationship between 'Group' and 'days', with censoring based on 'Censor'.

<!-- Keywords: #JMPScriptingLanguage, #ProportionalHazardModel, #SurvivalAnalysis, #DataTableOperations, #FitModel -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Fit Model( Y( :days ), Effects( :Group ), Personality( Proportional Hazard ), Censor( :Censor ), Run( Risk Ratios( 1 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create Fit Model object.
3. Set response variable to "days".
4. Add "Group" as effect.
5. Select Proportional Hazard personality.
6. Specify "Censor" as censoring variable.
7. Run the model.
8. Generate Risk Ratios report.



### Example 152
> **Summary**: Analyze a diamond data table to identify key factors affecting price, using a standard least squares model with effect screening and profiler output.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #Profiler, #EffectScreening, #StandardLeastSquares -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Y( :Price ),
	Effects( :Carat Weight, :Color, :Clarity, :Depth, :Table, :Cut, :Report ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Desirability Functions( 1 ),
			Price << Response Limits(
				{Lower( 2000, 0.01 ), Middle( 3000, 1 ), Upper( 4000, 0.01 ), Goal( "Match Target" ), Importance( 1 )}
			),
			Arrange in Rows( 4 ),
			Term Value(
				Carat Weight( 0.8701, Lock( 0 ), Show( 1 ) ),
				Color( "K", Lock( 0 ), Show( 1 ) ),
				Clarity( "SI2", Lock( 0 ), Show( 1 ) ),
				Depth( 61.7115, Lock( 0 ), Show( 1 ) ),
				Table( 57.861, Lock( 0 ), Show( 1 ) ),
				Cut( "Very Good", Lock( 0 ), Show( 1 ) ),
				Report( "AGS", Lock( 0 ), Show( 1 ) )
			)
		),
		:Price << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 1 ), Sorted Estimates( 0 ), Scaled Estimates( 1 ),
		Plot Actual by Predicted( 1 ), Plot Regression( 0 ), Plot Residual
by Predicted( 1 ), Plot Studentized Residuals( 1 ),
		Plot Effect Leverage( 0 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 1 )},
		Automatic Recalc( 1 )
	),
	Local Data Filter( Mode( Include( 0 ) ), Add Filter( columns( :Report ), Where( :Report == "AGS" ) ) )
);
```

**Code Explanation**:

1. Open data_table data
2. Fit model with price as response.
3. Include carat weight, color, clarity, depth, table, cut, report as effects.
4. Use standard least squares personality.
5. Set emphasis on effect screening.
6. Run profiler with confidence intervals and desirability functions.
7. Set price response limits and goal.
8. Arrange profiler terms in rows.
9. Define term values for each factor.
10. Configure model output options.



### Example 153
> **Summary**: Runs a linear regression analysis to model the relationship between 'y' and 'Drug', 'x', and their interaction, with emphasis on effect leverage, and visualizes results through plots of actual vs. predicted values, residuals, and effect leverage.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #EffectLeverage, #Plotting, #DataAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Fit Model(
	Y( :y ),
	Effects( :Drug, :x, :Drug * :x ),
	Personality( Standard Least Squares ),
	Emphasis( Effect Leverage ),
	Run( :y << {Plot Actual by Predicted( 1 ), Plot Residual by Predicted( 1 ), Plot Effect Leverage( 1 )} )
);
```

**Code Explanation**:

1. Open data table;
2. Define dependent variable y.
3. Specify effects: Drug, x, Drug*x.
4. Use Standard Least Squares personality.
5. Set emphasis on Effect Leverage.
6. Run model.
7. Plot Actual by Predicted.
8. Plot Residual by Predicted.
9. Plot Effect Leverage.



### Example 154
> **Summary**: Fits a model to predict Percent Reacted based on various effects, including interactions, using Stepwise personality and customized stopping rules.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StepwisePersonality, #CustomStoppingRules, #ModelFitting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Fit Model(
	Y( :Percent Reacted ),
	Effects(
		:Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration, :Catalyst * :Stir Rate, :Catalyst * :Concentration,
		:Feed Rate * :Catalyst, :Feed Rate * :Stir Rate, :Feed Rate * :Temperature, :Feed Rate * :Concentration, :Catalyst * :Temperature,
		:Stir Rate * :Temperature, :Stir Rate * :Concentration, :Temperature * :Concentration
	),
	Personality( Stepwise ),
	Run( Stopping Rule( "P-value Threshold" ), Prob to Enter( 0.05 ), Direction( "Mixed" ), Plot Criterion History( 1 ) )
);
```

**Code Explanation**:

1. Open data table.
2. Define response variable.
3. Specify model effects.
4. Set personality to Stepwise.
5. Configure stopping rule.
6. Set probability to enter.
7. Allow mixed direction.
8. Plot criterion history.
9. Run the model.
10. Store model object.



### Example 155
> **Summary**: Fits a Nominal Logistic model to analyze the relationship between 'heat' and 'soak' effects on the 'ready' response, utilizing likelihood ratio tests and inverse prediction.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #InversePrediction, #LikelihoodRatioTests, #ModelFitting -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Freq( :count ),
	Y( :ready ),
	Effects( :heat, :soak ),
	Personality( "Nominal Logistic" ),
	Run( Likelihood Ratio Tests( 1 ), Wald Tests( 0 ), Inverse Prediction( Response( 0.9, 0.8 ), Term Value( heat( . ), soak( 2 ) ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Fit logistic model.
3. Use count as frequency.
4. Set ready as response.
5. Include heat and soak effects.
6. Choose Nominal Logistic personality.
7. Run likelihood ratio tests.
8. Disable Wald tests.
9. Perform inverse prediction.
10. Set response probabilities 0.9, 0.8.
11. Fix heat term at mean.
12. Set soak term to 2.



### Example 156
> **Summary**: Fits a model with specified effects, generates an effect summary report, and configures a profiler with confidence intervals for term value analysis.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #EffectScreening, #Profiler, #ReportGeneration -->

**Code**:
```jsl
Open("data_table.jmp");
fm = Fit Model(
	Y( :y ),
	Effects( :load, :flow, :load * :flow, :speed, :load * :speed, :flow * :speed, :mud, :load * :mud, :flow * :mud, :speed * :mud ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run(
		:y << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 0 ), Effect Details( 0 ), Lack of Fit( 0 ),
		Sorted Estimates( 0 ), Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ),
		Plot Studentized Residuals( 0 ), Plot Effect Leverage( 0 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 ),
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				:load( 0, Lock( 0 ), Show( 1 ) ), :flow( 0, Max( 2 ), Lock( 0 ), Show( 1 ) ), :speed( 0, Lock( 0 ), Show( 1 ) ),
				:mud( 0, Lock( 0 ), Show( 1 ) )
			),
			Remember Settings( "Setting 1", Differences Report( 0 ) ),
			Term Value(
				:load( 0, Lock( 0 ), Show( 1 ) ), :flow( 2, Max( 2 ), Lock( 0 ), Show( 1 ) ), :speed( 0.825, Lock( 0 ), Show( 1 ) ),
				:mud( 0.875, Lock( 0 ), Show( 1 ) )
			),
			Remember Settings( "Setting 2", Differences Report( 1 ) ),
			Term Value(
				:load( 0, Lock( 0 ), Show( 1 ) ), :flow( 0, Max( 2 ), Lock( 0 ), Show( 1 ) ), :speed( 0, Lock( 0 ), Show( 1 ) ),
				:mud( 0, Lock( 0 ), Show( 1 ) )
			)
		), Cube Plots( 1 ), Interaction Plots( 1 )}
	),
	SendToReport(
		Dispatch( {"Response y"}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response y"}, "Prediction Profiler", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response y"}, "Cube Plot", OutlineBox, {Close( 1 )} )
	)
);
rpt = fm << Report();
tb = rpt["Response y", "Interaction Profiles", FrameBox( 17 )];
```

**Code Explanation**:

1. Open data table;
2. Fit model with specified effects.
3. Use standard least squares personality.
4. Set emphasis on effect screening.
5. Disable various fit reports.
6. Enable profiler with confidence intervals.
7. Set initial term values for profiler.
8. Remember first profiler setting.
9. Update term values for second setting.
10. Remember second profiler setting with differences report.
11. Retrieve final report.
12. Access interaction profiles frame box.



### Example 157
> **Summary**: Fits a linear model to a data table, specifying effects and configuring summary outputs, while also generating cube plots and interaction profiles.

<!-- Keywords: #JSLScriptingLanguage, #LinearRegression, #EffectScreening, #CubePlots, #InteractionProfiles -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fm = Fit Model(
	Y( :y ),
	Effects( :load, :flow, :load * :flow, :speed, :load * :speed, :flow * :speed, :mud, :load * :mud, :flow * :mud, :speed * :mud ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run(
		:y << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 0 ), Effect Details( 0 ), Lack of Fit( 0 ),
		Sorted Estimates( 0 ), Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ),
		Plot Studentized Residuals( 0 ), Plot Effect Leverage( 0 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 ),
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				:load( 0, Lock( 0 ), Show( 1 ) ), :flow( 0, Max( 2 ), Lock( 0 ), Show( 1 ) ), :speed( 0, Lock( 0 ), Show( 1 ) ),
				:mud( 0, Lock( 0 ), Show( 1 ) )
			),
			Remember Settings( "Setting 1", Differences Report( 0 ) ),
			Term Value(
				:load( 0, Lock( 0 ), Show( 1 ) ), :flow( 2, Max( 2 ), Lock( 0 ), Show( 1 ) ), :speed( 0.825, Lock( 0 ), Show( 1 ) ),
				:mud( 0.875, Lock( 0 ), Show( 1 ) )
			),
			Remember Settings( "Setting 2", Differences Report( 1 ) ),
			Term Value(
				:load( 0, Lock( 0 ), Show( 1 ) ), :flow( 0, Max( 2 ), Lock( 0 ), Show( 1 ) ), :speed( 0, Lock( 0 ), Show( 1 ) ),
				:mud( 0, Lock( 0 ), Show( 1 ) )
			)
		), Cube Plots( 1 ), Interaction Plots( 1 )}
	),
	SendToReport(
		Dispatch( {"Response y"}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response y"}, "Prediction Profiler", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response y"}, "Cube Plot", OutlineBox, {Close( 1 )} )
	)
);
rpt = fm << Report();
tb = rpt["Response y", "Interaction Profiles", FrameBox( 17 )];
tb << Text Color( "Red" );
```

**Code Explanation**:

1. Open data table.
2. Fit linear model.
3. Define response variable.
4. Specify effects.
5. Set personality to SLR.
6. Set emphasis to screening.
7. Configure summary outputs.
8. Enable profiler with settings.
9. Generate cube plots.
10. Generate interaction plots.
11. Close effect summary.
12. Close prediction profiler.
13. Close cube plot.
14. Access interaction profiles.
15. Change text color to red.



### Example 158
> **Summary**: Fits a model to predict response variable 'y' using main effects and interactions, with Standard Least Squares personality and emphasis on Effect Screening.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #EffectScreening, #StandardLeastSquares, #ModelFitting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Fit Model(
	Y( :y ),
	Effects( :load, :flow, :load * :flow, :speed, :load * :speed, :flow * :speed, :mud, :load * :mud, :flow * :mud, :speed * :mud ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run(
		:y << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 0 ), Effect Details( 0 ), Lack of Fit( 0 ),
		Sorted Estimates( 0 ), Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ),
		Plot Studentized Residuals( 0 ), Plot Effect Leverage( 0 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 ),
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				:load( 0, Lock( 0 ), Show( 1 ) ), :flow( 0, Max( 2 ), Lock( 0 ), Show( 1 ) ), :speed( 0, Lock( 0 ), Show( 1 ) ),
				:mud( 0, Lock( 0 ), Show( 1 ) )
			),
			Remember Settings( "Setting 1", Differences Report( 0 ) ),
			Term Value(
				:load( 0, Lock( 0 ), Show( 1 ) ), :flow( 2, Max( 2 ), Lock( 0 ), Show( 1 ) ), :speed( 0.825, Lock( 0 ), Show( 1 ) ),
				:mud( 0.875, Lock( 0 ), Show( 1 ) )
			),
			Remember Settings( "Setting 2", Differences Report( 1 ) ),
			Term Value(
				:load( 0, Lock( 0 ), Show( 1 ) ), :flow( 0, Max( 2 ), Lock( 0 ), Show( 1 ) ), :speed( 0, Lock( 0 ), Show( 1 ) ),
				:mud( 0, Lock( 0 ), Show( 1 ) )
			)
		), Cube Plots( 1 ), Interaction Plots( 1 )}
	),
	SendToReport(
		Dispatch( {"Response y"}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response y"}, "Prediction Profiler", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response y"}, "Cube Plot", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit model with response "y".
3. Include main effects and interactions.
4. Use Standard Least Squares personality.
5. Emphasize Effect Screening.
6. Disable most reports and plots.
7. Enable Profiler with confidence intervals.
8. Set initial term values for load, flow, speed, mud.
9. Remember first setting.
10. Set new term values for load, flow, speed, mud.
11. Remember second setting.
12. Close Effect Summary, Prediction Profiler, Cube Plot.



### Example 159
> **Summary**: Fits an ordinal logistic model to analyze the relationship between Frequency of Teeth Cleaning and demographic factors, including Gender, Birth Year, Single Status, and Age Group.

<!-- Keywords: #JMPScriptingLanguage, #OrdinalLogisticRegression, #FitModel, #Profiler, #LikelihoodRatioTests -->

**Code**:
```jsl
Open("data_table.jmp") << Fit Model(
	Y( :Frequency of Teeth Cleaning ),
	Effects( :Gender, :Birth Year, :Single Status, :Age Group ),
	Personality( "Ordinal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Profiler(
			1,
			Term Value(
				Gender( 1, Lock( 0 ), Show( 1 ) ),
				Birth Year( 1971.5, Lock( 0 ), Show( 1 ) ),
				Single Status( 1, Lock( 0 ), Show( 1 ) ),
				Age Group( 1, Lock( 0 ), Show( 1 ) )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit Model dialog initiated.
3. Set response variable: Frequency of Teeth Cleaning.
4. Add effects: Gender, Birth Year, Single Status, Age Group.
5. Select Ordinal Logistic personality.
6. Run the model.
7. Enable Likelihood Ratio Tests.
8. Launch Profiler.
9. Configure profiler settings.
10. Set initial term values and show all terms.



### Example 160
> **Summary**: Runs the Fit Model process to analyze the relationship between Date, Time, Shift, and time2 variables in a data table, utilizing Nominal Logistic personality and profiling options.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #NominalLogistic, #Profiler, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Y( :Date ),
	Effects( :Time, :Shift, :"Date/Time"n, :time2 ),
	Personality( "Nominal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 0 ),
		Profiler(
			1,
			Term Value(
				Time( 43260, Lock( 0 ), Show( 1 ) ),
				Shift( "B", Lock( 0 ), Show( 1 ) ),
				"Date/Time"n( 2882156400, Lock( 0 ), Show( 1 ) ),
				time2( 54000, Lock( 0 ), Show( 1 ) )
			)
		)
	),
	SendToReport(
		Dispatch( {}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Initiate Fit Model process.
3. Set Y variable as Date.
4. Include effects: Time, Shift, Date/Time, time2.
5. Use Nominal Logistic personality.
6. Run model with specified options.
7. Enable Likelihood Ratio Tests.
8. Disable Wald Tests.
9. Launch Profiler with settings.
10. Close Effect Summary, Whole Model Test, Parameter Estimates reports.



### Example 161
> **Summary**: Fits a nominal logistic model to analyze the relationship between response variable ID and effects variables Female Binary and Multiple Choice Year1, with profiler enabled for term value analysis.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #Profiler, #WaldTests, #LikelihoodRatioTests -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Y( :ID ),
	Effects( :Female Binary, :Multiple Choice Year1 ),
	Personality( "Nominal Logistic" ),
	Run(
		Likelihood Ratio Tests( 0 ),
		Wald Tests( 1 ),
		Profiler( 1, Term Value( Female Binary( 0.343, Lock( 0 ), Show( 1 ) ), Multiple Choice Year1( 5.9287, Lock( 0 ), Show( 1 ) ) ) )
	),
	SendToReport(
		Dispatch( {}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Lack Of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Effect Wald Tests", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit nominal logistic model.
3. Set response variable.
4. Include effects variables.
5. Enable likelihood ratio tests.
6. Enable Wald tests.
7. Enable profiler.
8. Set term values.
9. Lock term values.
10. Display profiler.



### Example 162
> **Summary**: Fits a Nominal Logistic model to analyze the relationship between Day of Week and various effects, including Month, Day of Month, Elapsed Time, Arrival Delay, and Distance.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #ModelFitting, #Profiler, #WaldTests -->

**Code**:
```jsl
Open("data_table.jmp") << Fit Model(
	Y( :Day of Week ),
	Effects( :Month, :Day of Month, :Elapsed Time, :Arrival Delay, :Distance ),
	Personality( "Nominal Logistic" ),
	Run(
		Likelihood Ratio Tests( 0 ),
		Wald Tests( 1 ),
		Profiler(
			1,
			Term Value(
				Month( "Jan", Lock( 0 ), Show( 1 ) ),
				Day of Month( 1, Lock( 0 ), Show( 1 ) ),
				Elapsed Time( 139.32, Lock( 0 ), Show( 1 ) ),
				Arrival Delay( 9.6, Lock( 0 ), Show( 1 ) ),
				Distance( 847.7, Lock( 0 ), Show( 1 ) )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit Nominal Logistic model.
3. Set response variable: Day of Week.
4. Include effects: Month, Day of Month, Elapsed Time, Arrival Delay, Distance.
5. Disable Likelihood Ratio Tests.
6. Enable Wald Tests.
7. Launch Profiler.
8. Set term values for each effect.
9. Lock terms: Jan, 1, 139.32, 9.6, 847.7.
10. Display all terms in profiler.



### Example 163
> **Summary**: Fits a Nominal Logistic model to analyze the relationship between response variable CROP and effects S1, S3, while generating various reports for effect summary, whole model test, lack of fit, parameter estimates, and likelihood ratio tests.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticModel, #FitModel, #ReportGeneration, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Y( :CROP ),
	Effects( :S1, :S3 ),
	Personality( "Nominal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 0 ),
		Profiler( 1, Term Value( S1( 48.08, Lock( 0 ), Show( 1 ) ), S3( 31.38, Lock( 0 ), Show( 1 ) ) ) )
	),
	SendToReport(
		Dispatch( {}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Lack Of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Effect Likelihood Ratio Tests", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit Nominal Logistic model.
3. Set response variable CROP.
4. Include effects S1, S3.
5. Enable Likelihood Ratio Tests.
6. Disable Wald Tests.
7. Launch Profiler.
8. Set initial values for S1, S3.
9. Display Profiler for S1, S3.
10. Close Effect Summary, Whole Model Test, Lack Of Fit, Parameter Estimates, Effect Likelihood Ratio Tests reports.



### Example 164
> **Summary**: Fits a Nominal Logistic model to predict Clarity based on multiple effects, including Carat Weight, Color, Depth, Table, Cut, and Report, while enabling Likelihood Ratio Tests and running a profiler with initial term values.

<!-- Keywords: #NominalLogisticModel, #JMPScriptingLanguage, #FitModel, #Profiler, #LikelihoodRatioTests -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Y( :Clarity ),
	Effects( :Carat Weight, :Color, :Depth, :Table, :Cut, :Report ),
	Personality( "Nominal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 0 ),
		Profiler(
			1,
			Term Value(
				Carat Weight( 0.8701, Lock( 0 ), Show( 1 ) ),
				Color( "J", Lock( 0 ), Show( 1 ) ),
				Depth( 61.7115, Lock( 0 ), Show( 1 ) ),
				Table( 57.861, Lock( 0 ), Show( 1 ) ),
				Cut( "Good", Lock( 0 ), Show( 1 ) ),
				Report( "AGS", Lock( 0 ), Show( 1 ) )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit Nominal Logistic model.
3. Set Clarity as response.
4. Include multiple effects.
5. Enable Likelihood Ratio Tests.
6. Disable Wald Tests.
7. Run Profiler.
8. Set initial term values.
9. Lock and show Carat Weight.
10. Lock and show Color.



### Example 165
> **Summary**: Fits a Nominal Logistic model to analyze the relationship between Handedness and Analysis, BBQ, and Pie effects.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #FitModel, #Profiler, #SendToReport -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Y( :Handedness ),
	Effects( :Analysis, :BBQ, :Pie ),
	Personality( "Nominal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 0 ),
		Profiler(
			1,
			Term Value(
				Analysis( "Generalized Regression", Lock( 0 ), Show( 1 ) ),
				BBQ( "Both", Lock( 0 ), Show( 1 ) ),
				Pie( "2.718", Lock( 0 ), Show( 1 ) )
			)
		)
	),
	SendToReport(
		Dispatch( {}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Lack Of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Effect Likelihood Ratio Tests", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit Nominal Logistic model.
3. Set response variable: Handedness.
4. Include effects: Analysis, BBQ, Pie.
5. Enable Likelihood Ratio Tests.
6. Disable Wald Tests.
7. Create Profiler.
8. Configure Analysis term settings.
9. Configure BBQ term settings.
10. Configure Pie term settings.



### Example 166
> **Summary**: Fits a Nominal Logistic model to predict Species based on Sepal length, Sepal width, Petal length, and Petal width, with likelihood ratio tests enabled and Wald tests disabled.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #LikelihoodRatioTests, #WaldTests, #Profiler -->

**Code**:
```jsl
Open("data_table.jmp") << Fit Model(
	Y( :Species ),
	Effects( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Personality( "Nominal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 0 ),
		Profiler(
			1,
			Term Value(
				Sepal length( 5.8433, Lock( 0 ), Show( 1 ) ),
				Sepal width( 3.0573, Lock( 0 ), Show( 1 ) ),
				Petal length( 3.758, Lock( 0 ), Show( 1 ) ),
				Petal width( 1.1993, Lock( 0 ), Show( 1 ) )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit Nominal Logistic model.
3. Set response variable Species.
4. Include predictor variables.
5. Enable Likelihood Ratio Tests.
6. Disable Wald Tests.
7. Launch Profiler.
8. Set term values.
9. Display all terms.
10. Unlock term values.



### Example 167
> **Summary**: Fits a nominal logistic model to analyze the relationship between sex and log(weight) in a data table, with interactive profiling capabilities.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #DataAnalysis, #ModelFitting, #InteractiveProfiling -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Y( :name ),
	Effects( :sex, Log( :weight ) ),
	Personality( "Nominal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 0 ),
		Profiler( 1, Term Value( sex( "F", Lock( 0 ), Show( 1 ) ), weight( 141.86, Lock( 0 ), Show( 1 ) ) ) )
	),
	SendToReport(
		Dispatch( {}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Lack Of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Effect Likelihood Ratio Tests", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Prediction Profiler"}, "Profiler", FrameBox, {Frame Size( 167, 145 )} ),
		Dispatch( {"Prediction Profiler"}, "Profiler", FrameBox( 3 ), {Frame Size( 167, 145 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit nominal logistic model.
3. Set response variable.
4. Include effects: sex and log(weight).
5. Enable likelihood ratio tests.
6. Disable Wald tests.
7. Open profiler for sex and weight.
8. Set initial values for sex and weight.
9. Close effect summary.
10. Close whole model test.
11. Close lack of fit.
12. Close parameter estimates.
13. Close effect likelihood ratio tests.
14. Resize prediction profiler frames.



### Example 168
> **Summary**: Fits a nominal logistic model to a data table, specifying effect variables and configuring term values for profiling.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #DataTableAnalysis, #ModelFitting, #ProfilerConfiguration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :country ),
	Effects( :sex, :marital status, :age, :size, :type ),
	Personality( "Nominal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 0 ),
		Profiler(
			1,
			Term Value(
				sex( "Female", Lock( 0 ), Show( 1 ) ),
				marital status( "Married", Lock( 0 ), Show( 1 ) ),
				age( 30.719, Lock( 0 ), Show( 1 ) ),
				size( "Large", Lock( 0 ), Show( 1 ) ),
				Type( "Family", Lock( 0 ), Show( 1 ) )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit nominal logistic model.
3. Set response variable.
4. Specify effect variables.
5. Enable likelihood ratio tests.
6. Disable Wald tests.
7. Launch profiler.
8. Configure term values.
9. Lock terms for profiling.
10. Display all terms in profiler.



### Example 169
> **Summary**: Fits a nominal logistic model to analyze geographic data, with interactive profiling and likelihood ratio tests.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #GeographicAnalysis, #LikelihoodRatioTests, #InteractiveProfiling -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Y( :SAS Country Office ),
	Effects( :Latitude, :Longitude, :City ),
	Personality( "Nominal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 0 ),
		Profiler(
			1,
			Term Value(
				Latitude( 36.7, Min( -33.3333333333333 ), Max( 66.6666666666667 ), Lock( 0 ), Show( 1 ) ),
				Longitude( 69.2, Lock( 0 ), Show( 1 ) ),
				City( "Budapest", Lock( 0 ), Show( 1 ) )
			)
		)
	),
	SendToReport(
		Dispatch( {}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Effect Likelihood Ratio Tests", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Prediction Profiler"}, "1", ScaleBox,
			{Min( -33.3333333333333 ), Max( 66.6666666666667 ), Inc( 20 ), Minor Ticks( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit nominal logistic model.
3. Set response variable.
4. Add predictor effects.
5. Enable likelihood ratio tests.
6. Disable Wald tests.
7. Initialize profiler.
8. Set term values for predictors.
9. Configure profiler display.
10. Close unnecessary report sections.



### Example 170
> **Summary**: Runs a Nominal Logistic regression analysis to model the relationship between sex and length, basilar, zygomat, and postorb variables, with profiling enabled for each term.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #FitModel, #Profiler, #LikelihoodRatioTests -->

**Code**:
```jsl
Open("data_table.jmp") << Fit Model(
	Y( :sex ),
	Effects( :length, :basilar, :zygomat, :postorb ),
	Personality( "Nominal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 0 ),
		Profiler(
			1,
			Term Value(
				Length( 6454.2, Lock( 0 ), Show( 1 ) ),
				basilar( 4916.17, Lock( 0 ), Show( 1 ) ),
				zygomat( 3259.92, Lock( 0 ), Show( 1 ) ),
				postorb( 1091.85, Lock( 0 ), Show( 1 ) )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Initiate Fit Model platform.
3. Set response variable: sex.
4. Include effects: length, basilar, zygomat, postorb.
5. Choose Nominal Logistic personality.
6. Run model analysis.
7. Perform Likelihood Ratio Tests.
8. Disable Wald Tests.
9. Launch Profiler.
10. Configure Profiler settings for each term.



### Example 171
> **Summary**: Runs a Nominal Logistic regression analysis on the JOB response variable, considering effects of BAD, LOAN, VALUE, DEBTINC, and REASON, with profiling enabled.

<!-- Keywords: #NominalLogisticRegression, #FitModel, #JMPScriptingLanguage, #Profiler, #LogisticRegression -->

**Code**:
```jsl
Open("data_table.jmp") << Fit Model(
	Validation( :Validation ),
	Y( :JOB ),
	Effects( :BAD, :LOAN, :VALUE, :DEBTINC, :REASON ),
	Personality( "Nominal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 0 ),
		Profiler(
			1,
			Term Value(
				BAD( 0, Lock( 0 ), Show( 1 ) ),
				LOAN( 19370, Lock( 0 ), Show( 1 ) ),
				VALUE( 104180, Lock( 0 ), Show( 1 ) ),
				DEBTINC( 34.11, Lock( 0 ), Show( 1 ) ),
				REASON( "DebtCon", Lock( 0 ), Show( 1 ) )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Initiate Fit Model platform.
3. Specify validation column.
4. Set response variable as JOB.
5. Define effects: BAD, LOAN, VALUE, DEBTINC, REASON.
6. Choose Nominal Logistic personality.
7. Execute model run.
8. Perform Likelihood Ratio Tests.
9. Disable Wald Tests.
10. Launch Profiler with specified term values.



### Example 172
> **Summary**: Fits a Nominal Logistic model to a data table, with specific effects and tests configured for analysis.

<!-- Keywords: #JSLScriptingLanguage, #NominalLogisticRegression, #LikelihoodRatioTests, #WaldTests, #Profiler -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Y( :"‰∏≠Êñá (Simplified)"n ),
	Effects( :age ),
	Personality( "Nominal Logistic" ),
	Run( Likelihood Ratio Tests( 0 ), Wald Tests( 1 ), Profiler( 1, Term Value( age( 15, Lock( 0 ), Show( 1 ) ) ) ) ),
	SendToReport(
		Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Effect Wald Tests", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit Nominal Logistic model.
3. Set response variable.
4. Add age effect.
5. Configure Likelihood Ratio Tests.
6. Enable Wald Tests.
7. Create Profiler for age.
8. Set age value to 15.
9. Unlock age value.
10. Show age in profiler.



### Example 173
> **Summary**: Fits an ordinal logistic model to a data table, including predictor effects and likelihood ratio tests, with profiler output and report dispatch.

<!-- Keywords: #JSLScriptingLanguage, #OrdinalLogisticRegression, #LikelihoodRatioTests, #ProfilerOutput, #ReportDispatch -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Y( :Number of Engines ),
	Effects( :Longitude, :Fatal ),
	Personality( "Ordinal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Profiler( 1, Term Value( Longitude( -104.46, Lock( 0 ), Show( 1 ) ), Fatal( 0, Lock( 0 ), Show( 1 ) ) ) )
	),
	SendToReport(
		Dispatch( {}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Lack Of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Effect Likelihood Ratio Tests", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit ordinal logistic model.
3. Set response variable.
4. Include predictor effects.
5. Configure model personality.
6. Run likelihood ratio tests.
7. Activate profiler.
8. Set term values.
9. Display profiler.
10. Close unnecessary reports.



### Example 174
> **Summary**: Fits an ordinal logistic model to a data table, specifying weight and response variables, defining effects, configuring likelihood ratio tests, and enabling profiler reports.

<!-- Keywords: #JSLScriptingLanguage, #OrdinalLogisticRegression, #DataAnalysis, #ModelFitting, #ProfilerReports -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Weight( :Date ),
	Y( :Quarter ),
	Effects( :Rooms, :Year ),
	Personality( "Ordinal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Profiler( 1, Term Value( Rooms( 77650, Lock( 0 ), Show( 1 ) ), Year( 2005, Lock( 0 ), Show( 1 ) ) ) )
	),
	SendToReport(
		Dispatch( {}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Lack Of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Effect Likelihood Ratio Tests", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit ordinal logistic model.
3. Specify weight variable.
4. Set response variable.
5. Define model effects.
6. Configure likelihood ratio tests.
7. Enable profiler.
8. Set term values for Rooms and Year.
9. Lock Rooms term value.
10. Show profiler report.



### Example 175
> **Summary**: Fits an ordinal logistic model to a data table, including effects for height and sex, with likelihood ratio tests and profiler settings.

<!-- Keywords: #JSLScriptingLanguage, #OrdinalLogisticRegression, #LikelihoodRatioTests, #ProfilerSettings, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Y( :age ),
	Effects( :height, :sex ),
	Personality( "Ordinal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Profiler( 1, Term Value( height( 62.55, Lock( 0 ), Show( 1 ) ), sex( "F", Lock( 0 ), Show( 1 ) ) ) )
	),
	SendToReport(
		Dispatch( {}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Lack Of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Effect Likelihood Ratio Tests", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit ordinal logistic model.
3. Set response variable as age.
4. Include height and sex as effects.
5. Enable likelihood ratio tests.
6. Launch profiler with specific settings.
7. Set height value to 62.55.
8. Set sex value to "F".
9. Close effect summary report.
10. Close whole model test report.
11. Close lack of fit report.
12. Close parameter estimates report.
13. Close effect likelihood ratio tests report.



### Example 176
> **Summary**: Fits an ordinal logistic model to a data table, with likelihood ratio tests and profiler enabled for detailed analysis.

<!-- Keywords: #JSLScripting, #OrdinalLogisticRegression, #LikelihoodRatioTests, #Profiler, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Y( :Air Bags Standard ),
	Effects(
		:Vehicle Category, :"Minimum Price ($1000)"n, :"City Mileage (MPG)"n, :Drive Train Type, :Manual Transmission Available,
		:RPM at Max Horsepower
	),
	Personality( "Ordinal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Profiler(
			1,
			Term Value(
				Vehicle Category( "Compact", Lock( 0 ), Show( 1 ) ),
				"Minimum Price ($1000)"n( 28.85, Lock( 0 ), Show( 1 ) ),
				"City Mileage (MPG)"n( 22.366, Lock( 0 ), Show( 1 ) ),
				Drive Train Type( 0, Lock( 0 ), Show( 1 ) ),
				Manual Transmission Available( 0, Lock( 0 ), Show( 1 ) ),
				RPM at Max Horsepower( 5280.6, Lock( 0 ), Show( 1 ) )
			)
		)
	),
	SendToReport(
		Dispatch( {}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Lack Of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Effect Likelihood Ratio Tests", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit ordinal logistic model.
3. Set response variable.
4. Define predictor effects.
5. Specify ordinal logistic personality.
6. Run model with likelihood ratio tests.
7. Enable profiler.
8. Set term values for profiler.
9. Close effect summary report.
10. Close whole model test report.
11. Close lack of fit report.
12. Close parameter estimates report.
13. Close effect likelihood ratio tests report.



### Example 177
> **Summary**: Fits an ordinal logistic model to a data table, generating effect summaries and likelihood ratio tests, while configuring term values and locking them for display.

<!-- Keywords: #JSLScriptingLanguage, #OrdinalLogisticRegression, #LikelihoodRatioTests, #TermValues, #DataVisualization -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Y( :Step ID ),
	Effects( :Pattern ID, :Duration ),
	Personality( "Ordinal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Profiler( 1, Term Value( Pattern ID( 2, Lock( 0 ), Show( 1 ) ), Duration( 206.48, Lock( 0 ), Show( 1 ) ) ) )
	),
	SendToReport(
		Dispatch( {}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Lack Of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Effect Likelihood Ratio Tests", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit ordinal logistic model.
3. Specify response variable.
4. Add effect variables.
5. Configure model personality.
6. Run likelihood ratio tests.
7. Enable profiler.
8. Set term values.
9. Lock term values.
10. Display term values.



### Example 178
> **Summary**: Fits an Ordinal Logistic model to a data table, enabling likelihood ratio tests and prediction profiling with a locked term value.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #OrdinalLogisticRegression, #LikelihoodRatioTests, #PredictionProfiler -->

**Code**:
```jsl
Open("data_table.jmp") << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :Cheese ),
	Personality( "Ordinal Logistic" ),
	Run( Likelihood Ratio Tests( 1 ), Profiler( 1, Term Value( Cheese( "B", Lock( 0 ), Show( 1 ) ) ) ) ),
	SendToReport( Dispatch( {"Prediction Profiler"}, "Profiler", FrameBox, {Frame Size( 247, 208 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Initiate Fit Model platform.
3. Set frequency variable.
4. Define response variable.
5. Add categorical effect.
6. Choose Ordinal Logistic personality.
7. Run model with specified options.
8. Request likelihood ratio tests.
9. Enable prediction profiler.
10. Lock term value for "B".



### Example 179
> **Summary**: Fits an ordinal logistic model to a data table, enabling likelihood ratio tests and profiling for four effects.

<!-- Keywords: #JMPScripting, #OrdinalLogisticRegression, #LikelihoodRatioTests, #Profiler, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp") << Fit Model(
	Y( :Response ),
	Effects( :A, :B, :C, :D ),
	Personality( "Ordinal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Profiler(
			1,
			Term Value(
				A( 5.778, Lock( 0 ), Show( 1 ) ),
				B( 5.778, Lock( 0 ), Show( 1 ) ),
				C( 5.778, Lock( 0 ), Show( 1 ) ),
				D( 5.778, Lock( 0 ), Show( 1 ) )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit ordinal logistic model.
3. Set response variable.
4. Include four effects.
5. Enable likelihood ratio tests.
6. Launch profiler.
7. Set term values.
8. Unlock terms.
9. Display terms.
10. Execute script.



### Example 180
> **Summary**: Fits an ordinal logistic model to a data table, specifying response and effects variables, and generates various reports for analysis.

<!-- Keywords: #JMPScriptingLanguage, #OrdinalLogisticRegression, #LikelihoodRatioTests, #Profiler, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp") << Fit Model(
	Y( :Response ),
	Effects( :A, :B, :C, :D ),
	Personality( "Ordinal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Profiler(
			1,
			Term Value(
				A( 13.48, Lock( 0 ), Show( 1 ) ),
				B( 4.25, Lock( 0 ), Show( 1 ) ),
				C( 5.778, Lock( 0 ), Show( 1 ) ),
				D( 5.778, Lock( 0 ), Show( 1 ) )
			)
		)
	),
	SendToReport(
		Dispatch( {}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Lack Of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Effect Likelihood Ratio Tests", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Prediction Profiler"}, "10000", ScaleBox,
			{Min( 0.0641025641025641 ), Max( 1.06410256410256 ), Inc( 1 ), Minor Ticks( 0 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit ordinal logistic model.
3. Specify response variable.
4. Include effects A, B, C, D.
5. Run likelihood ratio tests.
6. Launch profiler.
7. Set term values for A, B, C, D.
8. Close effect summary.
9. Close whole model test.
10. Close lack of fit.



### Example 181
> **Summary**: Fits an ordinal logistic model to a data table, specifying response and predictor variables, and generating a profiler with term values.

<!-- Keywords: #JMPScriptingLanguage, #OrdinalLogisticRegression, #Profiler, #LikelihoodRatioTests, #ModelFitting -->

**Code**:
```jsl
Open("data_table.jmp") << Fit Model(
	Y( :Grades ),
	Effects( :Gender, :Grade, :Age, :Sports, :Money ),
	Personality( "Ordinal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Profiler(
			1,
			Term Value(
				Gender( "girl", Lock( 0 ), Show( 1 ) ),
				Grade( 5.1339, Lock( 0 ), Show( 1 ) ),
				Age( 13, Lock( 0 ), Show( 1 ) ),
				Sports( 3, Lock( 0 ), Show( 1 ) ),
				Money( 4, Lock( 0 ), Show( 1 ) )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit ordinal logistic model.
3. Set response variable.
4. Define predictor effects.
5. Configure model personality.
6. Run model analysis.
7. Perform likelihood ratio tests.
8. Generate profiler.
9. Set term values.
10. Display all terms.



### Example 182
> **Summary**: Fits an Ordinal Logistic model to a data table, including effects for Brush After Waking Up, Brush After Meal, and Brush, with likelihood ratio tests and profiler settings.

<!-- Keywords: #JMPScriptingLanguage, #OrdinalLogisticRegression, #LikelihoodRatioTests, #Profiler, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Y( :Floss ),
	Effects( :Brush After Waking Up, :Brush After Meal, :Brush ),
	Personality( "Ordinal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Profiler(
			1,
			Term Value(
				Brush After Waking Up( 0, Lock( 0 ), Show( 1 ) ),
				Brush After Meal( 1, Lock( 0 ), Show( 1 ) ),
				Brush( 3, Lock( 0 ), Show( 1 ) )
			)
		)
	),
	SendToReport(
		Dispatch( {}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Lack Of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Effect Likelihood Ratio Tests", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit Ordinal Logistic model.
3. Set response variable Floss.
4. Include effects: Brush After Waking Up, Brush After Meal, Brush.
5. Enable Likelihood Ratio Tests.
6. Launch Profiler.
7. Set Brush After Waking Up value to 0.
8. Set Brush After Meal value to 1.
9. Set Brush value to 3.
10. Close unnecessary reports.



### Example 183
> **Summary**: Fits an ordinal logistic model to a data table, generating reports for effect summary, whole model test, lack of fit, parameter estimates, and likelihood ratio tests.

<!-- Keywords: #JSLScriptingLanguage, #OrdinalLogisticRegression, #FitModel, #ReportGeneration, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Model(
	Y( :Thread Wear ),
	Effects( :Lot Number, :Method, :"Size of Load (lbs)"n, :Sand blasted?, :"Starch Content (%)"n ),
	Personality( "Ordinal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Profiler(
			1,
			Term Value(
				Lot Number( 4, Lock( 0 ), Show( 1 ) ),
				Method( "Alpha Amalyze",
					Lock( 0 ),
					Show( 1 )
				),
				"Size of Load (lbs)"n( 182.26, Lock( 0 ), Show( 1 ) ),
				Sand blasted?( "no", Lock( 0 ), Show( 1 ) ),
				"Starch Content (%)"n( 30.5, Lock( 0 ), Show( 1 ) )
			)
		)
	),
	SendToReport(
		Dispatch( {}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Lack Of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Effect Likelihood Ratio Tests", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit ordinal logistic model.
3. Specify response variable.
4. Define effects for analysis.
5. Set personality to ordinal logistic.
6. Run likelihood ratio tests.
7. Create profiler.
8. Set term values for profiler.
9. Lock certain terms in profiler.
10. Close unnecessary reports.



### Example 184
> **Summary**: Fits an ordinal logistic model to a data table, performing likelihood ratio tests and profiling the term value for Salt.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #OrdinalLogistic, #LikelihoodRatioTests, #Profiler -->

**Code**:
```jsl
Open("data_table.jmp") << Fit Model(
	Y( :Taste Test ),
	Effects( :Salt & RS, :Salt * :Salt ),
	Personality( "Ordinal Logistic" ),
	Run( Likelihood Ratio Tests( 1 ), Profiler( 1, Term Value( Salt( 1.5, Lock( 0 ), Show( 1 ) ) ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Initiate Fit Model.
3. Set response variable.
4. Define effects.
5. Choose Ordinal Logistic personality.
6. Run model.
7. Perform likelihood ratio tests.
8. Enable profiler.
9. Set term value for Salt.
10. Display profiler.



### Example 185
> **Summary**: Runs a comprehensive analysis of the relationship between fish species and environmental factors, using a Fit Model script to generate effect summaries, studentized residuals, and box-cox transformations.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #EffectScreening, #ConfidenceIntervals, #ResponseLimits -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model(
	Y( :Rating ),
	Effects(
		:Mullet & RS & Mixture, :Sheepshead & RS & Mixture, :Croaker & RS & Mixture, :Mullet * :Sheepshead, :Mullet * :Croaker,
		:Mullet * :Temperature, :Sheepshead * :Croaker, :Sheepshead * :Temperature, :Croaker * :Temperature,
		:Mullet * :Sheepshead * :Croaker, :Mullet * :Sheepshead * :Temperature, :Mullet * :Croaker * :Temperature,
		:Sheepshead * :Croaker * :Temperature, :Mullet * :Sheepshead * :Croaker * :Temperature
	),
	No Intercept,
	Center Polynomials( 0 ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Desirability Functions( 0 ),
			Rating << Response Limits(
				{Lower( 3.5, 0.066 ), Middle( 4.5, 0.5 ), Upper( 5.5, 0.9819 ), Goal( "Maximize" ), Importance( 1 )}
			),
			Maximize and Remember,
			Term Value(
				Mullet( 0.5, Lock( 0 ), Show( 1 ) ),
				Sheepshead( 0.291622074467057, Lock( 0 ), Show( 1 ) ),
				Croaker( 0.208377925532948, Lock( 0 ), Show( 1 ) ),
				Temperature( 400, Lock( 0 ), Show( 1 ) )
			)
		),
		:Rating << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 1 ), Effect Details( 0 ), Lack of Fit( 0 ),
		Sorted Estimates( 1 ), Plot Actual by Predicted( 1 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ),
		Plot Studentized Residuals( 1 ), Plot Effect Leverage( 0 ), Box Cox Y Transformation( 1 ), Interaction Plots( 1 )}
	),
	SendToReport(
		Dispatch( {"Response Rating"}, "Actual by Predicted Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response Rating"}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response Rating"}, "Studentized Residuals", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response Rating"}, "Box-Cox Transformations", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response Rating"}, "Sorted Parameter Estimates", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Define model with Rating as Y.
3. Include multiple effects in model.
4. Exclude intercept from model.
5. Set polynomial centering to 0.
6. Use Standard Least Squares personality.
7. Emphasize effect screening.
8. Run profiler with confidence intervals.
9. Set response limits for Rating.
10. Maximize and remember settings.



### Example 186
> **Summary**: Fits a linear mixed-effects model to analyze miles as a response variable, incorporating species, season, and interaction effects with subject:species as random effect.

<!-- Keywords: #LinearMixedEffectsModel, #JMPScriptingLanguage, #REMLMethod, #StandardLeastSquaresPersonality, #InteractionPlots -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	NoBounds( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run(
		:miles << {Summary of Fit( 1 ), Analysis of Variance( 0 ), Parameter Estimates( 1 ), Scaled Estimates( 0 ),
		Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ), Plot Studentized Residuals( 0 ),
		Plot Effect Leverage( 0 ), Plot Residual by Normal Quantiles( 0 ), Interaction Plots( 1 )}
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit model with miles as response.
3. Include species, season, and interaction effects.
4. Specify subject:species as random effect.
5. Set no bounds for parameters.
6. Use Standard Least Squares personality.
7. Employ REML method.
8. Request minimal report.
9. Generate summary of fit.
10. Enable interaction plots.



### Example 187
> **Summary**: Fits a mixed-effects model to analyze miles data, incorporating species and season effects, with REML estimation and minimal reporting.

<!-- Keywords: #JMPScriptingLanguage, #Mixed-EffectsModel, #REMLEstimation, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
Open("data_table.jmp") << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	NoBounds( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Convergence Limit( 0.0001 ),
	Emphasis( "Minimal Report" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value( species( "COYOTE", Lock( 0 ), Show( 1 ) ), season( "fall", Lock( 0 ), Show( 1 ) ) )
		),
		:miles << {Summary of Fit( 1 ), Analysis of Variance( 0 ), Parameter Estimates( 1 ), Scaled Estimates( 0 ),
		Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ), Plot Studentized Residuals( 0 ),
		Plot Effect Leverage( 0 ), Plot Residual by Normal Quantiles( 0 )}
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit a model with miles as response.
3. Include species, season, and interaction effects.
4. Define subject[:species] as random effects.
5. Use Standard Least Squares personality.
6. Employ REML method for estimation.
7. Set convergence limit to 0.0001.
8. Generate minimal report.
9. Launch Profiler with confidence intervals.
10. Display profiler for specified term values.



### Example 188
> **Summary**: Fits a linear model to predict weight, incorporating age, sex, and height effects, with emphasis on effect leverage, and generates plots for actual vs predicted, residual vs predicted, and effect leverage.

<!-- Keywords: #JSL, #LinearModel, #EffectLeverage, #Plotting, #FitModel -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		Profiler(
			1,
			Term Value( age( 12, Lock( 0 ), Show( 1 ) ), sex( "F", Lock( 0 ), Show( 1 ) ), height( 62.55, Lock( 0 ), Show( 1 ) ) )
		),
		Cube Plots( 1 ),
		:weight << {Plot Actual by Predicted( 1 ), Plot Regression( 0 ), Plot Residual by Predicted( 1 ), Plot Effect Leverage( 1 )}
	),
	SendToReport(
		Dispatch( {"Response weight", "Prediction Profiler"}, "Profiler", FrameBox, {Frame Size( 161, 140 )} ),
		Dispatch( {"Response weight", "Prediction Profiler"}, "Profiler", FrameBox( 3 ), {Frame Size( 161, 140 )} ),
		Dispatch( {"Response weight", "Prediction Profiler"}, "Profiler", FrameBox( 5 ), {Frame Size( 161, 140 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit linear model on weight.
3. Include age, sex, height effects.
4. Set personality to Standard Least Squares.
5. Emphasize effect leverage.
6. Run profiler for age, sex, height.
7. Generate cube plots.
8. Plot actual vs predicted for weight.
9. Plot residual vs predicted for weight.
10. Plot effect leverage for weight.



### Example 189
> **Summary**: Create and execute a Fit Model object to analyze data, specifying response variables S1 and S3, adding CROP as an effect, and running with MANOVA personality.

<!-- Keywords: #FitModel, #MANOVA, #JSLScripting, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Fit Model(
	Y( :S1, :S3 ),
	Effects( :CROP ),
	Personality( Manova ),
	Run(
		Response Function( Sum, Repeated( 1 ), Title( "Between Subjects" ) ),
		Response Function( Contrast, Repeated( 2 ), Prefix( "Time*" ), Title( "Within Subjects" ) )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Fit Model object.
3. Set response variables S1, S3.
4. Add CROP as effect.
5. Choose MANOVA personality.
6. Run model.
7. Define Between Subjects response function.
8. Set Sum contrast type.
9. Repeat 1 time.
10. Title "Between Subjects".



### Example 190
> **Summary**: Generates a mixed model analysis to fit the relationship between Sales ($M) and # Employees, with Assets as an effect, using Type as a random effect, and generating residual plots.

<!-- Keywords: #MixedModel, #JMPScriptingLanguage, #DataAnalysis, #RegressionAnalysis, #ResidualPlots -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Fit Model(
	Y( :Name( "Sales ($M)" ) ),
	Effects( :Name( "# Employees" ), :Assets ),
	Random Effects( :Type ),
	Center Polynomials( 0 ),
	Personality( Mixed Model ),
	Run( Residual Plots( 1 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Fit mixed model analysis.
3. Set Sales ($M) as response.
4. Include # Employees and Assets as effects.
5. Add Type as random effect.
6. Disable polynomial centering.
7. Use mixed model personality.
8. Generate residual plots.



### Example 191
> **Summary**: Fits a linear model to predict weight based on age, sex, and height, with emphasis on effect leverage and visualization of plots.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #LinearRegression, #EffectLeverage, #DataVisualization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height ),
	Personality( Standard Least Squares ),
	Emphasis( Effect Leverage ),
	Run(
		:weight << {Normal Plot( 1 ), Plot Actual by Predicted( 1 ), Plot Regression( 0 ), Plot Residual by Predicted( 1 ),
		Plot Effect Leverage( 1 )}
	)
);
```

**Code Explanation**:

1. Open data table;
2. Assign table to variable "dt under test".
3. Create Fit Model object.
4. Set response variable to "weight".
5. Add effects: "age", "sex", "height".
6. Use Standard Least Squares personality.
7. Emphasize Effect Leverage.
8. Run model with specified plots.
9. Plot Normal Plot for weight.
10. Plot Actual by Predicted for weight.



### Example 192
> **Summary**: Fits two models with transformed variables RunPulse and Oxy, using standard least squares personality and emphasizing minimal leverage.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #TransformedVariables, #StandardLeastSquares, #MinimalLeverage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
varlist = {:RstPulse, :MaxPulse};
Fit Model(
	Y( Eval( varlist ) ),
	Effects(
		Transform Column( "X", Formula( 1 / :RunPulse + 20 ) ),
		Transform Column( "X", Formula( 1 / :RunPulse + 20 ) ) * Transform Column( "X", Formula( 1 / :RunPulse + 20 ) )
	),
	Center Polynomials( 0 ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Leverage" ),
	Run( Eval( varlist ) << {Lack of Fit( 0 ), Plot Actual by Predicted( 1 ), Plot Residual by Predicted( 1 ), Plot Effect Leverage( 0 )} )
);
Fit Model(
	Y( Eval( varlist ) ),
	Effects(
		Transform Column( "X", Formula( 1 / :Oxy + 1000 ) ),
		Transform Column( "X", Formula( 1 / :Oxy + 1000 ) ) * Transform Column( "X", Formula( 1 / :Oxy + 1000 ) )
	),
	Center Polynomials( 0 ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Leverage" ),
	Run( Eval( varlist ) << {Lack of Fit( 0 ), Plot Actual by Predicted( 1 ), Plot Residual by Predicted( 1 ), Plot Effect Leverage( 0 )} )
);
```

**Code Explanation**:

1. Open data table;
2. Define variable list.
3. Fit model with transformed RunPulse.
4. Include squared transformed RunPulse effect.
5. Set center polynomials to 0.
6. Use standard least squares personality.
7. Emphasize minimal leverage.
8. Run model with specified plots.
9. Fit model with transformed Oxy.
10. Include squared transformed Oxy effect.



### Example 193
> **Summary**: Fits a model with specified effects and personalities, generating reports and clicking on button boxes to interact with the results.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StepwisePersonality, #ButtonBoxInteractions, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :ABRASION, MODULUS ),
	Effects(
		:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
		:SILANE * :SULFUR, :SULFUR * :SULFUR
	),
	Personality( "Stepwise" ),
	Run()
);
Report( obj[1] )[Button Box( 2 )] << Click;
rpt2 = Report( obj[1] )[Button Box( 6 )] << Click;
Report( obj[2] )[Button Box( 2 )] << click;
rpt2 = Report( obj[2] )[Button Box( 6 )] << click;
Fit Group[1] << Profiler( 1 );
rpt = Fit Group[1] << parent;
Close( dt, no save );
b test3 = {Number Edit Box( width( 9 ), decimal( 99 ), fmtdecimal( -1 ), Number( 47.536 ) ), Number Edit Box(
	width( 9 ),
	decimal( 99 ),
	fmtdecimal( -1 ),
	Number( 78.112 )
)};
```

**Code Explanation**:

1. Open data table;
2. Fit model with ABRASION and MODULUS as responses.
3. Include specified effects in the model.
4. Use Stepwise personality for fitting.
5. Run the model.
6. Click on second button box in report.
7. Click on sixth button box in report.
8. Click on second button box in second report.
9. Click on sixth button box in second report.
10. Create profiler for the first fit group.



### Example 194
> **Summary**: Fits a linear model to predict weight based on age, sex, and height, with interactive plots for actual vs. predicted values, residuals, and effect leverage.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #DataTableManipulation, #ModelFitting, #InteractivePlots -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fm = dt << Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height ),
	Personality( Standard Least Squares ),
	Run Model( :weight << {Plot Actual by Predicted( 1 ), Plot Residual by Predicted( 1 ), Plot Effect Leverage( 1 )} )
);
fm << Automatic Recalc( 1 );
dt << Select Where( :sex == "M" );
dt << Hide and Exclude( 1 );
```

**Code Explanation**:

1. Open data table.
2. Fit linear model.
3. Set response variable.
4. Add predictor variables.
5. Choose personality method.
6. Run model with plots.
7. Enable automatic recalculation.
8. Select rows by condition.
9. Hide and exclude selected rows.



### Example 195
> **Summary**: Fits a loglinear variance model to analyze Salary data, incorporating Years at Current Employer and I am working on my career as effects, and then visualizes the results using the Profiler.

<!-- Keywords: #JMPScriptingLanguage, #LogLinearVarianceModel, #FitModel, #DataAnalysis, #Profiler -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fm = dt << Fit Model(
	Y( :Salary ),
	Effects( :Years at Current Employer ),
	LogVariance Effects( :I am working on my career ),
	Personality( "Loglinear Variance" ),
	Run
);
dt << Delete Columns( {12, 13} );
fm << Profiler;
```

**Code Explanation**:

1. Open data table.
2. Fit loglinear variance model.
3. Specify Salary as response.
4. Include Years at Current Employer effect.
5. Add I am working on my career as log variance effect.
6. Run the model.
7. Delete columns 12 and 13.
8. Open profiler for the model.



### Example 196
> **Summary**: Fits a Partial Least Squares model to a data table, using NIPALS method with 1 factor and generating various diagnostic plots.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #NIPALSMethod, #DiagnosticPlots, #DataTableAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Fit Model(
	Y( :y ),
	Effects( :Drug, :x, :Drug * :x ),
	No Intercept,
	Personality( Partial Least Squares ),
	Run(
		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),
		Fit(
			Method( NIPALS ),
			Number of Factors( 1 ),
			Variable Importance Plot( 1 ),
			Distance Plots( 1 ),
			Diagnostics Plots( 1 ),
			Profiler( 1 ),
			Overlay Loadings Plots( 1 ),
			VIP vs Coefficients Plots( 1 ),
			Percent Variation Plots( 1 ),
			T Square Plot( 1 ),
			Overlay Coefficients Plots( 1 )
		)
	),
	SendToReport(
		Dispatch( {"NIPALS Fit with 1 Factors Using Fast SVD", "Percent Variation Explained for X Effects"}, "1", ScaleBox,
			{Rotated Labels( "Vertical" )}
		),
		Dispatch( {"NIPALS Fit with 1 Factors Using Fast SVD", "Percent Variation Explained for Y Responses"}, "1", ScaleBox,
			{Rotated Labels( "Vertical" )}
		),
		Dispatch( {"NIPALS Fit with 1 Factors Using Fast SVD", "X Loading Plot"}, "1", ScaleBox, {Rotated Labels( "Vertical" )} ),
		Dispatch( {"NIPALS Fit with 1 Factors Using Fast SVD", "Y Loading Plot"}, "1", ScaleBox, {Rotated Labels( "Vertical" )} ),
		Dispatch( {"NIPALS Fit with 1 Factors Using Fast SVD", "Variable Importance Plot"}, "1", ScaleBox, {Rotated Labels( "Vertical" )} ),
		Dispatch( {"NIPALS Fit with 1 Factors Using Fast SVD", "Coefficient Plot for Centered and Scaled Data"}, "1", ScaleBox,
			{Rotated Labels( "Vertical" )}
		),
		Dispatch( {"NIPALS Fit with 1 Factors Using Fast SVD", "Coefficient Plot for Original Data"}, "1", ScaleBox,
			{Rotated Labels( "Vertical" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit model using Partial Least Squares.
3. Set response variable as :y.
4. Include effects: :Drug, :x, and interaction :Drug * :x.
5. Exclude intercept from model.
6. Use K-Fold validation with 7 folds.
7. Specify initial number of factors as 6.
8. Apply NIPALS method.
9. Set number of factors to 1.
10. Generate various diagnostic plots.



### Example 197
> **Summary**: Fits and publishes a linear regression model to predict weight based on age, sex, and height, with minimal report output.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #PublishPredictionFormula, #RegressionPersonality, #MinimalReport -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model( Y( :weight ), Effects( :age, :sex, :height ), Personality( Standard Least Squares ), Emphasis( "Minimal Report" ), Run );
mp1 = obj << Publish Prediction Formula;
mp2 = obj << Publish Prediction Formula;
```

**Code Explanation**:

1. Open data table.
2. Fit linear regression model.
3. Set response variable.
4. Define predictor variables.
5. Choose regression personality.
6. Minimize report output.
7. Run the model.
8. Publish prediction formula.
9. Publish prediction formula again.
10. Save published formulas.



### Example 198
> **Summary**: Analyze a linear regression model, publishing prediction formulas and performing partition analysis on a data table.

<!-- Keywords: #JSLScriptingLanguage, #LinearRegression, #PartitionAnalysis, #DataTableManipulation, #PredictionFormula -->

**Code**:
```jsl
source = Open("data_table.jmp");
obj = Fit Model( Y( :weight ), Effects( :age, :sex, :height ), Personality( Standard Least Squares ), Emphasis( "Minimal Report" ), Run );
mp1 = obj << Publish Prediction Formula;
obj = Partition( Y( :weight ), X( :sex, :age, :height ), Split Best( 3 ) );
mp2 = obj << Publish Prediction Formula;
source << New Column( "Test", Formula( :height + :weight ) );
```

**Code Explanation**:

1. Open data table.
2. Fit linear regression model.
3. Publish prediction formula.
4. Perform partition analysis.
5. Publish prediction formula.
6. Create new column.
7. Define column formula.



### Example 199
> **Summary**: Fits an ordinal logistic model to a data table, enabling likelihood ratio tests, ROC curve, lift curve, confusion matrix, and profiler analysis.

<!-- Keywords: #JMPScriptingLanguage, #OrdinalLogisticRegression, #DataAnalysis, #ModelFitting, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :Cheese ),
	Personality( "Ordinal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		ROC Curve( 1 ),
		Lift Curve( 1 ),
		Confusion Matrix( 1 ),
		Profiler( 1, Term Value( Cheese( "A", Lock( 0 ), Show( 1 ) ) ) )
	)
);
:Count << Set Property( "Missing Value Codes", 999 );
:Count << Set Values( [999, 999, 999] );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
```

**Code Explanation**:

1. Open data_table data
2. Fit ordinal logistic model.
3. Configure likelihood ratio tests.
4. Enable ROC curve.
5. Enable lift curve.
6. Enable confusion matrix.
7. Enable profiler.
8. Set missing value codes.
9. Modify count values.
10. Redo analysis.
11. Generate report.



### Example 200
> **Summary**: Fits and creates reports for a proportional hazard model to analyze the relationship between various factors and time-to-event data, with censoring options and likelihood tests.

<!-- Keywords: #JMPScriptingLanguage, #ProportionalHazardModel, #CensoringOptions, #LikelihoodTests, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model(
	Y( :Time ),
	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),
	Personality( "Proportional Hazard" ),
	Censor( :censor ),
	Censor Code( "1" ),
	Run( Likelihood Ratio Tests( 1 ), Likelihood Confidence Intervals( 1 ), Risk Ratios( 1 ) )
);
:Time << Set Property( "Missing Value Codes", 0 );
:Time << Set Values( [0, 0, 0] );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
```

**Code Explanation**:

1. Open data table.
2. Fit proportional hazard model.
3. Specify response variable.
4. Define model effects.
5. Set censoring options.
6. Configure likelihood tests.
7. Modify missing value codes.
8. Update time values.
9. Redo analysis.
10. Generate report.



### Example 201
> **Summary**: Fits a nominal logistic model to analyze lung cancer data, including smoker effect and configuring various model options.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #LungCancerAnalysis, #SmokerEffect, #ModelOptions -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model(
	Freq( :Count ),
	Y( :Lung Cancer ),
	Effects( :Smoker ),
	Personality( "Nominal Logistic" ),
	Run(
		Positive Level( "Cancer" ),
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 1 ),
		Odds Ratios( 1 ),
		ROC Curve( 1 ),
		Lift Curve( 1 ),
		Confusion Matrix( 1 ),
		Profiler( 1, Interaction Profiler( 1 ), Term Value( Smoker( "NonSmoker", Lock( 0 ), Show( 1 ) ) ) )
	)
);
:Count << Set Property( "Missing Value Codes", 999 );
:Count << Set Values( [999] );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
```

**Code Explanation**:

1. Open table.
2. Fit nominal logistic model.
3. Set frequency column.
4. Specify response variable.
5. Include smoker effect.
6. Configure model options.
7. Set positive level.
8. Enable likelihood ratio tests.
9. Enable Wald tests.
10. Enable odds ratios.



### Example 202
> **Summary**: Fits a model with specified effects, excluding intercept and centering polynomials, using stepwise personality and K-Fold Crossvalidation for data_table.jmp.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StepwisePersonality, #K-FoldCrossvalidation, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model(
	Y( :Y ),
	Effects( :p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p1 * :p2, :p1 * :p3, :p2 * :p3 ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	Personality( "Stepwise" ),
	Run( Name( "K-Fold Crossvalidation" )(5), Plot Criterion History( 1 ), Plot RSquare History( 1 ) )
);
:Y << Set Property( "Missing Value Codes", 999 );
:Y << Set Values( [999] );
rpt1 = obj << Report;
actN1 = (rpt1[Number Col Box( 3 )][1]);
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
actN = (rpt[Number Col Box( 3 )][1]);
```

**Code Explanation**:

1. Open data_table data
2. Fit model with specified effects.
3. Exclude intercept from model.
4. Disable centering polynomials.
5. Use stepwise personality.
6. Perform K-Fold Crossvalidation.
7. Plot criterion history.
8. Plot R-Square history.
9. Set missing value code for Y.
10. Set Y values to missing code.



### Example 203
> **Summary**: Runs a loglinear variance analysis with specified effects, response limits, and profiler settings to optimize Shrinkage, while locking MoldTemp and Screw Speed at 0.

<!-- Keywords: #JMPScriptingLanguage, #LogLinearVariance, #ProfilerSettings, #ResponseLimits, #ShrinkageAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed ),
	LogVariance Effects( :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Desirability Functions( 1 ),
			Prediction Intervals( 1 ),
			Shrinkage << Response Limits(
				{Lower( 0, 0.066 ), Middle( 35, 0.5 ), Upper( 70, 0.9819 ), Goal( "Maximize" ), Importance( 0.5 )}
			),
			Shrinkage Std Dev << Response Limits(
				{Lower( -1, 0.9819 ), Middle( 3, 0.5 ), Upper( 7, 0.066 ), Goal( "Minimize" ), Importance( 1 )}
			),
			Term Value( MoldTemp( 0, Lock( 0 ), Show( 1 ) ), Screw Speed( 0, Lock( 0 ), Show( 1 ) ), Hold Time( 0, Lock( 0 ), Show( 1 ) ) )
		)
	)
);
:Shrinkage << Set Property( "Missing Value Codes", 999 );
:Shrinkage << Set Values( [999] );
obj2 = obj << Redo Analysis;
rpt = obj2 << Report;
expr = rpt[FrameBox( 1 )] << Get Journal;
p = "y(" + Pat Arb() >? actN + ",10,32,60,4,15,26,60,8,12";
Pat Match( expr, p );
```

**Code Explanation**:

1. Open data table;
2. Fit model with specified effects.
3. Configure loglinear variance personality.
4. Run profiler with various settings.
5. Set response limits for Shrinkage.
6. Set response limits for Shrinkage Std Dev.
7. Lock MoldTemp and Screw Speed at 0.
8. Redo analysis with updated settings.
9. Retrieve report from new analysis.
10. Extract journal from first frame box.



### Example 204
> **Summary**: Fits a robust model to predict Age and Weight based on Runtime, RunPulse, RstPulse, and MaxPulse variables, using Response Screening personality.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #RobustFit, #ResponseScreening, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model(
	Y( :Age, :Weight ),
	Effects( :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Robust Fit( 1 ),
	Personality( "Response Screening" ),
	Run
);
obj << save script to report;
rpt = Report( obj );
txt2 = rpt[Outline Box( "Fit Response Screening" )][Text Box( 2 )] << get text;
b txt2 = "Robust Fit";
Close( dt, no save );
ut relative epsilon = 1e-10;
```

**Code Explanation**:

1. Open data_table data
2. Define Fit Model object.
3. Set response variables: Age, Weight.
4. Add effects: Runtime, RunPulse, RstPulse, MaxPulse.
5. Enable robust fit.
6. Use Response Screening personality.
7. Run the model.
8. Save script to report.
9. Extract report content.
10. Close data table without saving.



### Example 205
> **Summary**: Fits and creates reports for two models with different robust fit settings, extracting count values from each report.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #RobustFit, #DataAnalysis, #ReportGeneration -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
obj1 = dt1 << Fit Model(
	Y( :log2in_TMS1, :log2in_CG4847, :log2in_Adh ),
	Effects( :channel, :sex, :line, :age, :sex * :line, :sex * :age, :line * :age, :sex * :line * :age ),
	Personality( Response Screening ),
	Robust Fit( 1 ),
	Run()
);
obj1 << Overall Report( 1 );
rpt1 = obj1 << report;
count1 = rpt1["Overall Fit"][Number Col Box( "Count" )] << get as matrix;
obj2 = dt1 << Fit Model(
	Y( :log2in_TMS1, :log2in_CG4847, :log2in_Adh ),
	Effects( :channel, :sex, :line, :age, :sex * :line, :sex * :age, :line * :age, :sex * :line * :age ),
	Personality( Response Screening ),
	Robust Fit( 0 ),
	Run()
);
obj2 << Overall Report( 1 );
rpt2 = obj2 << report;
count2 = rpt2["Overall Fit"][Number Col Box( "Count" )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Fit model with robust fit.
3. Generate overall report.
4. Extract count from report.
5. Fit model without robust fit.
6. Generate overall report.
7. Extract count from report.



### Example 206
> **Summary**: Analyzes and creates reports for a response screening model for ABRASION and HARDNESS, extracting overall fit report matrices and generating minimal reports for each variable.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #ResponseScreening, #MinimalReport, #MatrixExtraction -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
obj = dt1 << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( Response Screening ),
	Run( Overall Report( 1 ) )
);
rpt = Report( obj );
mat3 = rpt["Overall Fit"][Table Box( 1 )] << get as matrix;
obj2 = dt1 << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( Standard Least Squares ),
	Emphasis( Minimal Report ),
	Run(), 
);
rpt2 = Report( obj2 );
obj3 = dt1 << Fit Model(
	Y( :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( Standard Least Squares ),
	Emphasis( Minimal Report ),
	Run(), 
);
rpt3 = Report( obj3 );
overall_fratio = [28.2729062923768, 22.9359458381486];
overall_pval = [0.0000012449144342723, 0.0000048880142218544];
overall_lw = [5.90486049756455, 5.31086753916814];
overall_fdrpval = [0.0000024898288685446, 0.0000048880142218544];
overall_fdrlw = [5.60383050190058, 5.31086753916814];
Close( dt1, no save );
count_mat = [];
```

**Code Explanation**:

1. Open data table.
2. Fit response screening model for ABRASION and HARDNESS.
3. Extract overall fit report matrix.
4. Fit standard least squares model for ABRASION.
5. Generate minimal report for ABRASION model.
6. Fit standard least squares model for HARDNESS.
7. Generate minimal report for HARDNESS model.
8. Define overall F-ratio, p-value, and lower width arrays.
9. Close data table without saving.
10. Initialize empty count matrix.



### Example 207
> **Summary**: Analyze and visualize least squares means for a response screening model, filtering data by sex and age, and extracting standard error values.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #LeastSquaresMeans, #DataFiltering, #StandardError -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model( Effects( :Sex, :Oxy ), Personality( "Response Screening" ), Y( :Weight, :Age ), run );
obj1 << save Least Squares Means;
LSMEAN = Data Table("data_table");
W_F = LSMEAN << Get Rows Where( :Y == "Weight" & :Level == "F" );
W_M = LSMEAN << Get Rows Where( :Y == "Weight" & :Level == "M" );
A_F = LSMEAN << Get Rows Where( :Y == "Age" & :Level == "F" );
A_M = LSMEAN << Get Rows Where( :Y == "Age" & :Level == "M" );
LSM = LSMEAN:LSMeans[W_F |/ W_M |/ A_F |/ A_M];
SE = LSMEAN:StdError[W_F |/ W_M |/ A_F |/ A_M];
obj2 = dt << Fit Model(
	Y( :Weight, :Age ),
	Effects( :Sex, :Oxy ),
	Personality( "Standard Least Squares" ),
	Emphasis( Effect Leverage ),
	run
);
```

**Code Explanation**:

1. Open data table;
2. Fit Response Screening model.
3. Save Least Squares Means.
4. Retrieve LSMeans Table.
5. Filter Weight for females.
6. Filter Weight for males.
7. Filter Age for females.
8. Filter Age for males.
9. Extract LSMeans values.
10. Extract StdError values.
11. Fit Standard Least Squares model.



### Example 208
> **Summary**: Fits a model to predict height based on weight and sex, then saves and filters least squares means for female and male heights.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #LeastSquaresMeans, #DataTable, #Filtering -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
obj1 = dt1 << Fit Model( Effects( :weight, :sex ), Personality( Response Screening ), Y( :height ), run );
obj1 << save Least Squares Means;
LSMEAN = Data Table("data_table");
H_F = LSMEAN << Get Rows Where( :Y == "height" & :Level == "F" );
H_M = LSMEAN << Get Rows Where( :Y == "height" & :Level == "M" );
```

**Code Explanation**:

1. Open table.
2. Fit model.
3. Save least squares means.
4. Access LSMeans table.
5. Filter rows for female height.
6. Filter rows for male height.



### Example 209
> **Summary**: Analyze SO2 data by fitting a response screening model, saving least squares means, and filtering rows for specific levels.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #LeastSquaresMeans, #DataFiltering, #ResponseScreening -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
obj2 = dt2 << Fit Model( Effects( :CO, :Region ), Personality( "Response Screening" ), Y( :SO2 ), run );
obj2 << save Least Squares Means;
LSMEAN = Data Table("data_table");
S_C = LSMEAN << Get Rows Where( :Y == "SO2" & :Level == "C" );
S_MW = LSMEAN << Get Rows Where( :Y == "SO2" & :Level == "MW" );
S_N = LSMEAN << Get Rows Where( :Y == "SO2" & :Level == "N" );
S_S = LSMEAN << Get Rows Where( :Y == "SO2" & :Level == "S" );
S_TX = LSMEAN << Get Rows Where( :Y == "SO2" & :Level == "TX" );
S_W = LSMEAN << Get Rows Where( :Y == "SO2" & :Level == "W" );
```

**Code Explanation**:

1. Open data table;
2. Fit response screening model.
3. Save least squares means.
4. Access LSMeans Table.
5. Filter rows for SO2 and C level.
6. Filter rows for SO2 and MW level.
7. Filter rows for SO2 and N level.
8. Filter rows for SO2 and S level.
9. Filter rows for SO2 and TX level.
10. Filter rows for SO2 and W level.



### Example 210
> **Summary**: Fits a robust model to predict Age and Weight based on Runtime, RunPulse, RstPulse, and MaxPulse effects, utilizing Response Screening personality.

<!-- Keywords: #JMPScriptingLanguage, #RobustFit, #FitModel, #ResponseScreening, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model(
	Y( :Age, :Weight ),
	Effects( :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Robust Fit( 1 ),
	Personality( "Response Screening" ),
	Run
);
obj << save script to report;
rpt = Report( obj );
txt2 = rpt[Outline Box( "Fit Response Screening" )][Text Box( 2 )] << get text;
b txt2 = "Robust Fit";
```

**Code Explanation**:

1. Open data_table data
2. Fit model with Age, Weight.
3. Include Runtime, RunPulse, RstPulse, MaxPulse effects.
4. Use robust fit method.
5. Apply Response Screening personality.
6. Execute the model fit.
7. Save script to report.
8. Generate report from object.
9. Extract text from second Text Box.
10. Check if text contains "Robust Fit".



### Example 211
> **Summary**: Fits and creates reports for multiple linear models for ABRASION and HARDNESS responses, with SILICA, SILANE, and SULFUR as effects, using Response Screening personality and minimal reports.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #ResponseScreening, #MinimalReport, #LinearRegression -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
obj = dt1 << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( Response Screening ),
	Run( Overall Report( 1 ) )
);
rpt = Report( obj );
mat3 = rpt["Overall Fit"][Table Box( 1 )] << get as matrix;
obj2 = dt1 << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( Standard Least Squares ),
	Emphasis( Minimal Report ),
	Run(), 
);
rpt2 = Report( obj2 );
obj3 = dt1 << Fit Model(
	Y( :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( Standard Least Squares ),
	Emphasis( Minimal Report ),
	Run(), 
);
rpt3 = Report( obj3 );
overall_fratio = [28.2729062923768, 22.9359458381486];
overall_pval = [0.0000012449144342723, 0.0000048880142218544];
overall_lw = [5.90486049756455, 5.31086753916814];
overall_fdrpval = [0.0000024898288685446, 0.0000048880142218544];
overall_fdrlw = [5.60383050190058, 5.31086753916814];
```

**Code Explanation**:

1. Open data table;
2. Fit model with ABRASION and HARDNESS as responses.
3. Include SILICA, SILANE, SULFUR as effects.
4. Use Response Screening personality.
5. Generate overall report.
6. Extract overall fit matrix.
7. Fit model for ABRASION using Standard Least Squares.
8. Generate minimal report.
9. Fit model for HARDNESS using Standard Least Squares.
10. Generate minimal report.



### Example 212
> **Summary**: Fits and creates reports for two models with different fit types, utilizing Response Screening personality and extracting effect test results as matrices.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #ResponseScreening, #RobustFitting, #CauchyFit -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Effects( :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Response Screening" ),
	Y( :Age, :Weight ),
	Robust Fit( 1 ),
	Run
);
rpt = obj << report;
colnames = rpt["Effect Tests"][Table Box( 1 )] << get names;
tests1 = rpt["Effect Tests"][Table Box( 1 )] << get as matrix;
 
obj2 = dt << Fit Model(
	Effects( :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Response Screening" ),
	Y( :Age, :Weight ),
	Cauchy Fit( 1 ),
	Run
);
rpt2 = obj2 << report;
colnames2 = rpt2["Effect Tests"][Table Box( 1 )] << get names;
tests2 = rpt2["Effect Tests"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Fit model with specified effects.
3. Set personality to Response Screening.
4. Define response variables: Age, Weight.
5. Enable robust fitting.
6. Run the first model.
7. Retrieve report from first model.
8. Extract column names from effect tests.
9. Get effect test results as matrix.
10. Repeat steps 2-9 with Cauchy fit instead of robust fit.



### Example 213
> **Summary**: Fits and creates reports for a response screening model, extracting effect tests and sorting by F Ratio.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #ResponseScreening, #EffectTests, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :ABRASION, :MODULUS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Switch( :ELONG, :HARDNESS ),
	Personality( "Response Screening" ),
	Run
);
rpt = obj << report;
rpt["Effect Tests"][Table Box( 1 )] << Sort by Column( "F Ratio" );
b col1 = rpt["Effect Tests"][Table Box( 1 )][String Col Box( 1 )] << get;
b col2 = rpt["Effect Tests"][Table Box( 1 )][String Col Box( 2 )] << get;
b col3 = rpt["Effect Tests"][Table Box( 1 )][String Col Box( 3 )] << get;
b mtrx1 = rpt["Effect Tests"][Table Box( 1 )] << get as matrix;
dt2 = obj << Save Effect Tests;
dt3 = dt2 << Sort( By( :F Ratio ), Order( Descending ) );
col1 = dt3:Y << get values;
col2 = dt3:Switch << get values;
col3 = dt3:Effect << get values;
mtrx1 = dt3 << get as matrix;
Close( dt, no save );
```

**Code Explanation**:

1. Open data table;
2. Fit response screening model.
3. Set Y variables: ABRASION, MODULUS.
4. Include effects: SILICA, SILANE, SULFUR.
5. Use ELONG to switch personality.
6. Run the model.
7. Extract report object.
8. Sort effect tests by F Ratio.
9. Retrieve columns from effect tests table.
10. Save effect tests to new dataset.
11. Sort new dataset by F Ratio descending.
12. Extract sorted column values.
13. Convert sorted data to matrix.
14. Close original dataset without saving.



### Example 214
> **Summary**: Fits a response screening model to data, extracting effect tests reports, and re-fitting the model with modified data selection.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #ResponseScreening, #DataSelection, #EffectTests -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1:v1[1 :: 3] = .;
dt1:ls[4 :: 6] = .;
obj1 = dt1 << Fit Model( Y( :ls ), Effects( :v1 ), Personality( "Response Screening" ), Run );
rpt1 = obj1 << report;
test1 = rpt1["Effect Tests"][Table Box( 1 )] << get as matrix;
dt1 << Clear Row States;
dt1 << Select Rows( 1 :: 6 );
dt1 << Exclude( 1 );
obj2 = dt1 << Fit Model( Y( :ls ), Effects( :v1 ), Personality( "Response Screening" ), Run );
rpt2 = obj2 << report;
test2 = rpt2["Effect Tests"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Set first three v1 values to missing.
3. Set fourth to sixth ls values to missing.
4. Fit response screening model with ls as Y and v1 as effect.
5. Extract effect tests report from first model.
6. Clear row states in data table.
7. Select first six rows in data table.
8. Exclude first row from selection.
9. Fit response screening model again with ls as Y and v1 as effect.
10. Extract effect tests report from second model.



### Example 215
> **Summary**: Runs the Fit Model dialog to analyze miles data, specifying species, season, and interaction effects with random subject[:species] effects, and generates a report.

<!-- Keywords: #FitModel, #JSLScripting, #RandomEffects, #ResponseScreening, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dlg = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Response Screening" ), 
);
dlgrpt = dlg << report;
Try(
	check0 = dlgrpt[Button Box( 1 )] << get button name;
	check1 = dlgrpt[Button Box( 2 )] << get button name;
	check2 = dlgrpt[Button Box( 3 )] << get button name;
	check3 = dlgrpt[Button Box( 4 )] << get button name;
	check4 = dlgrpt[Button Box( 5 )] << get button name;
	check5 = dlgrpt[Button Box( 6 )] << get button name;
	check6 = dlgrpt[TabListBox( 1 )][Tab Page Box( 1 )] << get title;
	check7 = dlgrpt[TabListBox( 1 )][Tab Page Box( 2 )] << get title;
	check8 = dlgrpt[TabListBox( 1 )][Tab Page Box( 2 )][Button Box( 4 )] << get button name;
	check9 = dlgrpt[TabListBox( 1 )][Tab Page Box( 2 )][Text Box( 2 )] << get text;
);
IsPro = 1;
log1 = Log Capture(
	obj = dt << Fit Model(
		Y( :miles ),
		Effects( :species, :season, :species * :season ),
		Random Effects( :subject[:species] ),
		Personality( "Response Screening" ),
		Run
	)
);
If( IsPro,
	rpt = obj << report;
	title1 = rpt[Outline Box( 1 )] << get title;
	title2 = rpt[Outline Box( 2 )] << get title;
	title3 = rpt[Outline Box( 3 )] << get title;
	title4 = rpt[Outline Box( 4 )] << get title;
	title5 = rpt[Outline Box( 5 )] << get title;
	title6 = rpt[Outline Box( 6 )] << get title;
	title7 = rpt[Outline Box( 7 )] << get title;
, 
);
```

**Code Explanation**:

1. Open data table;
2. Launch Fit Model dialog.
3. Set response variable to miles.
4. Add species, season, and interaction effects.
5. Specify subject[:species] as random effects.
6. Use Response Screening personality.
7. Generate report from dialog.
8. Attempt to retrieve button names and titles.
9. Set IsPro to 1.
10. Capture log of Fit Model run.



### Example 216
> **Summary**: Fits and creates reports for a linear model with age as response, including effects for sex and marital status, and subgroups by country, size, and type.

<!-- Keywords: #JSLScriptingLanguage, #LinearModel, #ModelReporting, #SubgroupAnalysis, #FitModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :age ),
	Effects( :sex, :marital status ),
	Personality( "Response Screening" ),
	Subgroup( :country, :size, :type ),
	Run( Unthreaded, Overall Report( 1 ) )
);
rpt1 = obj1 << report;
effecttests = rpt1["Effect Tests"][Table Box( 1 )] << get as matrix;
test subgroup = rpt1["Effect Tests"][String Col Box( "Subgroup" )] << get;
effect label = rpt1["Effect Tests"][String Col Box( "Effect" )] << get;
sig rpt = rpt1["FDR PValue Plot Effects"][Table Box( 1 )] << get as matrix;
sig rpt colname = rpt1["FDR PValue Plot Effects"][Table Box( 1 )] << get names;
sig rpt label = rpt1["FDR PValue Plot Effects"][String Col Box( 1 )] << get;
parmest = rpt1["Parameter Estimates"][Table Box( 1 )] << get as matrix;
overallfit = rpt1["OverallFit"][Table Box( 1 )] << get as matrix;
obj1 << Least Squares Means( 1 );
lsmeans = rpt1["Least Squares Means"][Table Box( 1 )] << get as matrix;
dt effecttests = obj1 << Save Effect Tests;
dt effecttests2 = dt effecttests << Sort( By( :FDR Logworth ), Order( Descending ), );
s1 = Random Integer( 1, 20 );
dt effecttests << Select Where( Row() == s1 );
s2 = (dt effecttests << get as matrix)[s1, 0];
s3 = rpt1["Effect Tests"][Table Box( 1 )] << get selected rows;
s4 = ((dt tmp = rpt1["Effect Tests"][Table Box( 1 )] << Make into data table) << get as matrix)[s3, 0];
Close( dt tmp, no save );
Close( dt effecttests, no save );
Close( dt effecttests2, no save );
dt overallfit = obj1 << Save Overall Fit;
dt overallfit2 = dt overallfit << Sort( By( :RSquare ), Order( Descending ), );
Close( dt overallfit, no save );
Close( dt overallfit2, no save );
dt estimates = obj1 << Save Estimates;
Close( dt estimates, no save );
dt lsmeans = obj1 << Save Least Squares Means;
Close( dt lsmeans, no save );
dt lsmeans diff = obj1 << Save LSMeans Differences;
```

**Code Explanation**:

1. Open data table;
2. Fit model with age as response.
3. Include sex and marital status effects.
4. Use Response Screening personality.
5. Define subgroups by country, size, type.
6. Run model unthreaded, show overall report.
7. Extract effect tests report.
8. Get effect test matrix, subgroup, labels.
9. Extract FDR PValue plot effects.
10. Get parameter estimates, overall fit.



### Example 217
> **Summary**: Analyze and visualize a fitted model, extracting effect tests, parameter estimates, and FDR PValue plot effects from a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #EffectTests, #ParameterEstimates, #FDRPValuePlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :age ),
	Effects( :sex, :marital status ),
	Personality( "Response Screening" ),
	Subgroup( :country, :size, :type ),
	Run( Unthreaded, Overall Report( 1 ) )
);
rpt1 = obj1 << report;
effecttests = rpt1["Effect Tests"][Table Box( 1 )] << get as matrix;
test subgroup = rpt1["Effect Tests"][String Col Box( "Subgroup" )] << get;
effect label = rpt1["Effect Tests"][String Col Box( "Effect" )] << get;
sig rpt = rpt1["FDR PValue Plot Effects"][Table Box( 1 )] << get as matrix;
sig rpt colname = rpt1["FDR PValue Plot Effects"][Table Box( 1 )] << get names;
sig rpt label = rpt1["FDR PValue Plot Effects"][String Col Box( 1 )] << get;
parmest = rpt1["Parameter Estimates"][Table Box( 1 )] << get as matrix;
overallfit = rpt1["OverallFit"][Table Box( 1 )] << get as matrix;
obj1 << Least Squares Means( 1 );
lsmeans = rpt1["Least Squares Means"][Table Box( 1 )] << get as matrix;
dt effecttests = obj1 << Save Effect Tests;
dt effecttests2 = dt effecttests << Sort( By( :FDR Logworth ), Order( Descending ), );
s1 = Random Integer( 1, 20 );
dt effecttests << Select Where( Row() == s1 );
s2 = (dt effecttests << get as matrix)[s1, 0];
s3 = rpt1["Effect Tests"][Table Box( 1 )] << get selected rows;
s4 = ((dt tmp = rpt1["Effect Tests"][Table Box( 1 )] << Make into data table) << get as matrix)[s3, 0];
```

**Code Explanation**:

1. Open table.
2. Fit model with response screening.
3. Extract effect tests report.
4. Get effect tests matrix.
5. Get subgroup names.
6. Get effect labels.
7. Extract FDR PValue plot effects.
8. Get FDR PValue plot column names.
9. Get FDR PValue plot labels.
10. Extract parameter estimates.



### Example 218
> **Summary**: Fits and creates reports for multiple linear regression models with varying robustness and switching techniques, utilizing JMP's Fit Model platform.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #RobustFit, #SwitchingModels, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:LDL[3 :: 10] = .;
obj1 = dt << Fit Model( Y( :Y ), Effects( :Gender, :BMI, :BP, :LDL ), Personality( "Response Screening" ), Robust Fit( 1 ), Run );
rpt1 = obj1 << report;
test1 = rpt1["Effect Tests"][Table Box( 1 )] << get as matrix;
obj2 = dt << Fit Model( Y( :Y ), Effects( :Gender, :BMI, :BP ), Switch( :LDL ), Personality( "Response Screening" ), Robust Fit( 1 ), Run );
rpt2 = obj2 << report;
test2 = rpt2["Effect Tests"][Table Box( 1 )] << get as matrix;
obj3 = dt << Fit Model( Y( :Y ), Effects( :Gender, :BMI, :BP, :LDL ), Personality( "Response Screening" ), Cauchy Fit( 1 ), Run );
rpt3 = obj3 << report;
test3 = rpt3["Effect Tests"][Table Box( 1 )] << get as matrix;
obj4 = dt << Fit Model( Y( :Y ), Effects( :Gender, :BMI, :BP ), Switch( :LDL ), Personality( "Response Screening" ), Cauchy Fit( 1 ), Run );
rpt4 = obj4 << report;
test4 = rpt4["Effect Tests"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Set LDL values 3-10 to missing.
3. Fit model with Gender, BMI, BP, LDL.
4. Use Response Screening personality.
5. Enable Robust Fit.
6. Run the model.
7. Extract Effect Tests report.
8. Store results in test1.
9. Fit model with Gender, BMI, BP.
10. Include LDL with Switch.
11. Use Response Screening personality.
12. Enable Robust Fit.
13. Run the model.
14. Extract Effect Tests report.
15. Store results in test2.
16. Fit model with Gender, BMI, BP, LDL.
17. Use Response Screening personality.
18. Enable Cauchy Fit.
19. Run the model.
20. Extract Effect Tests report.
21. Store results in test3.
22. Fit model with Gender, BMI, BP.
23. Include LDL with Switch.
24. Use Response Screening personality.
25. Enable Cauchy Fit.
26. Run the model.
27. Extract Effect Tests report.
28. Store results in test4.



### Example 219
> **Summary**: Fits a model to a data table, extracting effect tests reports, and calculating FDR-adjusted p-values for multiple responses.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #EffectTestsReport, #FDRAdjustment, #DataAnalysis -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
obj1 = Fit Model(
	Y( :log2in_TMS1, :log2in_CG4847, :log2in_Adh ),
	Effects( :sex, :age, :sex * :age ),
	Personality( Response Screening ),
	Run( Overall Report( 1 ) )
);
rpt1 = Report( obj1 );
pval1 = rpt1[Outline Box( "Effect Tests" )][Number Col Box( 2 )] << get as matrix;
pval1 = [1.85315633052524e-17, 0.0071580086985955, 0.47325845287857, 0.398869746093294, 0.454490666280177, 0.536170020793328,
0.93428866011056, 0.737894301019547, 0.89528622789438];
obj2 = dt1 << Fit Model(
	Y( :log2in_TMS1, :log2in_CG4847, :log2in_Adh ),
	Effects( :sex, :age, :sex * :age ),
	Personality( Standard Least Squares ),
	Emphasis( Minimal Report ),
	Run(), 
);
rpt2 = Report( obj2 );
ylst = {"log2in_TMS1", "log2in_CG4847", "log2in_Adh"};
pval2 = [];
For( i = 1, i <= N Items( ylst ), i++,
	ylabel = "Response " || ylst[i];
	pval2 |/= (rpt2[Outline Box( ylabel )][Outline Box( "Effect Tests" )][Number Col Box( 6 )] << get as matrix);
);
pval2;
pval2 = [1.85315633052524e-17, 0.0071580086985955, 0.47325845287857, 0.398869746093294, 0.454490666280177, 0.536170020793328,
0.93428866011056, 0.737894301019547, 0.89528622789438];
lw = -Log( pval2 ) / Log( 10 );
fdr pval2 = [0.804255031189991, 0.934288660110561, 0.804255031189991, 1.66784069747265e-16, 0.934288660110561, 0.0322110391436796,
0.804255031189991, 0.934288660110561, 0.804255031189991];
fdr lw = -Log( fdr pval2 ) / (Log( 10 ));
rank frac = Loc Sorted( Sort Ascending( fdr pval2 ), fdr pval2 ) / N Rows( fdr pval2 );
```

**Code Explanation**:

1. Open data table.
2. Fit model with response screening.
3. Extract effect tests report.
4. Assign fixed p-values.
5. Fit model with standard least squares.
6. Extract effect tests report.
7. Initialize response list.
8. Initialize p-values list.
9. Loop through responses.
10. Extract and append p-values.



### Example 220
> **Summary**: Fits and analyzes a generalized linear mixed model, extracting random effects covariance parameters, fixed effects parameter estimates, standard errors, tests, and prediction formula.

<!-- Keywords: #JMPScriptingLanguage, #GeneralizedLinearMixedModel, #RandomEffects, #FixedEffects, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = Fit Model(
	Y( :Y ),
	Effects( :Age & Excluded, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Random Effects( :Gender, :BP & BSpline( 3, Degree( 3 ) ) ),
	Personality( "Generalized Linear Mixed Model" ),
	Run
);
rpt1 = obj1 << report;
covparms = rpt1["Random Effects Covariance Parameter Estimates"][Table Box( 1 )] << get as matrix;
parmest1 = rpt1["Fixed Effects Parameter Estimates"][Tab Page Box( 1 )][Table Box( 1 )] << get as matrix;
scl = rpt1["Fixed Effects Parameter Estimates"][Table Box( 2 )] << get as matrix;
tests3 = rpt1["Fixed Effects Tests"][Table Box( 1 )] << get as matrix;
obj1 << (Fit[1] << Sequential Tests( 1 ));
tests1 = rpt1["Sequential (Type1) Tests"][Table Box( 1 )] << get as matrix;
obj1 << (Fit[1] << Prediction Formula);
obj1 << (Fit[1] << Standard Error of Predicted);
obj1 << (Fit[1] << Mean Confidence Interval);
obj1 << (Fit[1] << Save Residual Formula);
obj1 << (Fit[1] << Prediction and Interval Formulas);
obj1 << (Fit[1] << Conditional Prediction Formula);
obj1 << (Fit[1] << Standard Error of Conditional Predicted);
obj1 << (Fit[1] << Conditional Mean CI);
obj1 << (Fit[1] << Save Conditional Residual Formula);
saved1 = (dt << get as matrix)[0, 13 :: 25];
obj1 << Save Script to Report;
savedscript1 = rpt1[Text Box( 1 )] << get text;
obj1 << (Fit[1] << Covariance of Fixed Effects( 1 ));
covb = rpt1["Covariance of Fixed Effects"][Matrix Box( 1 )] << get;
obj1 << (Fit[1] << Correlation of Fixed Effects( 1 ));
corrb = rpt1["Correlation of Fixed Effects"][Matrix Box( 1 )] << get;
```

**Code Explanation**:

1. Open data table;
2. Fit generalized linear mixed model.
3. Extract random effects covariance parameters.
4. Extract fixed effects parameter estimates.
5. Extract fixed effects standard errors.
6. Extract fixed effects tests.
7. Perform sequential tests.
8. Extract sequential tests results.
9. Generate prediction formula.
10. Save script to report.



### Example 221
> **Summary**: Fits loglinear variance models to analyze height data, grouping by age and saving residuals.

<!-- Keywords: #JSLScripting, #LogLinearModel, #ByGrouping, #ResidualAnalysis, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:height[38 :: 40] = .;
Fit Model(
	Y( :height ),
	Effects( :weight & LogVariance ),
	Personality( Loglinear Variance ),
	By( :age ),
	Run Model( Save Columns( Residuals ) )
);
Fit Model(
	Y( :height ),
	Effects( :weight & LogVariance ),
	Personality( Loglinear Variance ),
	By( :age ),
	Run Model( Save Columns( Residuals ) )
);
```

**Code Explanation**:

1. Open data table;
2. Set height values 38-40 to missing.
3. Fit loglinear variance model.
4. Use height as response variable.
5. Include weight & LogVariance effect.
6. Group by age.
7. Save residuals to dataset.
8. Repeat steps 3-7.



### Example 222
> **Summary**: Fits a log-linear variance model to predict shrinkage, incorporating MoldTemp, Screw Speed, and interaction effects, with prediction profiler generation and confidence interval extraction.

<!-- Keywords: #JMPScriptingLanguage, #Log-LinearVarianceModel, #PredictionProfiler, #ConfidenceIntervals, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( Loglinear Variance ),
	Run( Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ), Desirability Functions( 0 ) ) )
);
rpt = obj << report;
obj << Save Columns( Prediction Formula, Mean Confidence Interval, Indiv Confidence Interval, Std Dev Formula );
b test1 = (dt << get as matrix)[20, 9 :: 13];
pred1 = rpt["Prediction Profiler"][AxisBox( 1 )][Text Box( 2 )] << get text;
ci1 = (rpt["Prediction Profiler"][AxisBox( 1 )][Text Box( 3 )] << get text) || (rpt["Prediction Profiler"][AxisBox( 1 )][Text Box( 4 )] <<
get text);
pi1 = rpt["Prediction Profiler"][AxisBox( 1 )][Text Box( 5 )] << get text;
pred2 = rpt["Prediction Profiler"][AxisBox( 2 )][Text Box( 2 )] << get text;
b test2 = (dt << get as matrix)[20, 14];
ci2 = (rpt["Prediction Profiler"][AxisBox( 2 )][Text Box( 3 )] << get text) || (rpt["Prediction Profiler"][AxisBox( 2 )][Text Box( 4 )] <<
get text);
pi2 = rpt["Prediction Profiler"][AxisBox( 2 )][Text Box( 5 )] << get text;
```

**Code Explanation**:

1. Open data_table data
2. Fit log-linear variance model.
3. Include Shrinkage as response.
4. Add MoldTemp, Screw Speed, and interaction effects.
5. Enable Hold Time & LogVariance.
6. Generate prediction profiler.
7. Extract report object.
8. Save prediction formulas and confidence intervals.
9. Retrieve specific coefficients from data table.
10. Extract prediction and interval texts from profiler.



### Example 223
> **Summary**: Fits a linear model to a data table, extracting parameter estimates and uncoded estimates.

<!-- Keywords: #JSLScripting, #LinearModelFitting, #DataAnalysis, #EstimateExtraction, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :Number Popped ),
	Effects( :Time, :Power, :Time * :Power, :Time * :Time, :Power * :Power ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run()
);
rpt1 = obj1 << report;
est1 = rpt1["Parameter Estimates"][Number Col Box( "Estimate" )] << get as matrix;
uncoded est1 = rpt1[Number Col Box( "Uncoded Estimate" )] << get as matrix;
obj1 << Prediction formula;
test1 = Items( Char( Simplify Expr( dt:Pred Formula Number Popped << get formula ), "+" ) );
b uncoded est1 = [-2687.92062050198, 792.113681198563, 356.777416178866, -14.0833420977742, -74.88343240098, -20.6392935079174];
```

**Code Explanation**:

1. Open data table.
2. Fit linear model.
3. Set response variable.
4. Define model effects.
5. Choose personality.
6. Set emphasis.
7. Run the model.
8. Get report object.
9. Extract parameter estimates.
10. Extract uncoded estimates.



### Example 224
> **Summary**: Fits a linear model, retrieving and updating effect summary reports, and enabling/disabling checkboxes in JMP.

<!-- Keywords: #JMPScriptingLanguage, #LinearModel, #EffectSummary, #CheckboxManagement, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x, :Drug * :x ), Personality( "Standard Least Squares" ), Run( FDR( 1 ) ) );
rpt = Report( obj );
show1 = rpt[Outline Box( "Whole Model" )][If Box( 1 )] << get;
ckbox = rpt[Outline Box( "Effect Summary" )][CheckBoxBox( 1 )] << get;
obj << Effect Summary( 0 );
show2 = (rpt[Outline Box( "Effect Summary" )] << Parent) << get;
obj << Effect Summary( 1 );
```

**Code Explanation**:

1. Open data table;
2. Fit linear model.
3. Retrieve whole model report.
4. Retrieve effect summary checkbox state.
5. Disable effect summary.
6. Retrieve updated effect summary report.
7. Enable effect summary.



### Example 225
> **Summary**: Fits and creates reports for two models with ls as response, utilizing Fit Model and Report features in JMP.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #ReportGeneration, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
obj1 = Fit Model(
	Y( :ls ),
	Emphasis( "Minimal Report" ),
	Effects(
		Grouped(
			:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
			:v24, :v25, :v26, :v27
		)
	),
	Run
);
rpt1 = obj1 << report;
obj2 = Fit Model(
	Y( :ls ),
	Emphasis( "Minimal Report" ),
	Effects(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	),
	Run
);
rpt2 = obj2 << report;
parmest1 = rpt1[Outline Box( "Parameter Estimates" )][Table Box( 1 )] << get as matrix;
parmest2 = rpt2[Outline Box( "Parameter Estimates" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Fit model with ls as response.
3. Set emphasis to minimal report.
4. Group all variables as effects.
5. Run the first model.
6. Retrieve report from first model.
7. Fit another model with ls as response.
8. Set emphasis to minimal report.
9. List all variables as effects.
10. Run the second model and retrieve its report.



### Example 226
> **Summary**: Fits a model to a transformed response variable, incorporating multiple effects and generating a minimal report with confidence and prediction intervals.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #PredictionIntervals, #ConfidenceIntervals -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( Transform Column( "Log[Y]", Formula( Log( :Y ) ) ) ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ), Arrange in Rows( 4 ), Set to Data in Row( 2 ) ) )
);
obj << Save Columns( Prediction Formula, Mean Confidence Limit Formula, Indiv Confidence Limit Formula );
rpt = obj << report;
pred1 = rpt["Prediction Profiler"][Text Box( 2 )] << get text;
ci1 = (rpt["Prediction Profiler"][Text Box( 3 )] << get text) || (rpt["Prediction Profiler"][Text Box( 4 )] << get text);
pi1 = rpt["Prediction Profiler"][Text Box( 5 )] << get text;
b test1 = (dt << get as matrix)[2, 13 :: 17];
```

**Code Explanation**:

1. Open data table;
2. Fit model using transformed Y.
3. Include multiple effects in model.
4. Use Standard Least Squares personality.
5. Generate minimal report.
6. Run profiler with confidence and prediction intervals.
7. Save prediction and confidence limit formulas.
8. Retrieve report object.
9. Extract prediction profiler text.
10. Concatenate confidence interval texts.
11. Extract prediction interval text.
12. Get beta test results from dataset.



### Example 227
> **Summary**: Fits a model with specified effects and generates a prediction profiler report, including confidence and prediction intervals.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #PredictionProfiler, #ConfidenceIntervals, #PredictionIntervals -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :Y ),
	Freq( :Gender ),
	Effects( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ), Arrange in Rows( 4 ), Set to Data in Row( 2 ) ) )
);
obj << Save Columns( Prediction Formula, Mean Confidence Limit Formula, Indiv Confidence Limit Formula );
rpt = obj << report;
pred1 = rpt["Prediction Profiler"][Text Box( 2 )] << get text;
ci1 = (rpt["Prediction Profiler"][Text Box( 3 )] << get text) || (rpt["Prediction Profiler"][Text Box( 4 )] << get text);
pi1 = rpt["Prediction Profiler"][Text Box( 5 )] << get text;
b test1 = (dt << get as matrix)[2, 13 :: 17];
```

**Code Explanation**:

1. Open data table;
2. Fit model with Y as response.
3. Use Gender as frequency.
4. Include specified effects in model.
5. Choose Standard Least Squares personality.
6. Generate minimal report.
7. Run profiler with confidence and prediction intervals.
8. Save prediction and confidence limit formulas.
9. Extract prediction profiler report.
10. Retrieve text from specific text boxes.



### Example 228
> **Summary**: Fits a linear model to predict continuous outcomes, utilizing multiple effects and confidence intervals, while generating reports with minimal emphasis.

<!-- Keywords: #JMPScriptingLanguage, #LinearModel, #ConfidenceIntervals, #PredictionIntervals, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :Y ),
	Weight( :Gender ),
	Effects( :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ), Arrange in Rows( 4 ), Set to Data in Row( 1 ) ) )
);
obj << Save Columns( Prediction Formula, Mean Confidence Limit Formula, Indiv Confidence Limit Formula );
rpt = obj << report;
pred1 = rpt["Prediction Profiler"][Text Box( 2 )] << get text;
ci1 = (rpt["Prediction Profiler"][Text Box( 3 )] << get text) || (rpt["Prediction Profiler"][Text Box( 4 )] << get text);
pi1 = rpt["Prediction Profiler"][Text Box( 5 )] << get text;
b test1 = (dt << get as matrix)[1, 13 :: 17];
```

**Code Explanation**:

1. Open data table;
2. Fit linear model.
3. Specify response variable Y.
4. Use Gender as weight.
5. Include multiple effects.
6. Choose Standard Least Squares personality.
7. Minimal report emphasis.
8. Run profiler with intervals.
9. Save prediction columns.
10. Extract profiler texts.



### Example 229
> **Summary**: Fits a linear model to data, generating prediction columns and saving them for further analysis.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #DataAnalysis, #ModelFitting, #PredictiveAnalytics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dlg = dt << Fit Model( Y( :y ), Effects( :Drug, :x, :Drug * :x ), Personality( Standard Least Squares ), Emphasis( Effect Screening ) );
obj = dlg << Run Model(
	:y << {Scaled Estimates( 1 ), Plot Actual by Predicted( 1 ), Plot Regression( 1 ), Plot Residual by Predicted( 0 ),
	Plot Effect Leverage( 0 ), Sequential Tests( 1 ), Press( 1 ), Durbin Watson Test( 1 )}
);
obj << save columns(
	predicted values, residuals, mean confidence interval, indiv confidence interval, studentized residuals, hats, std error of predicted,
	std error of residual, std error of individual, cook's d influence
);
rpt = Report( obj );
fitstat = rpt[Outline Box( "Summary of Fit" )][Table Box( 1 )] << get as matrix;
obj << Analysis of Variance( 1 );
anova1 = rpt[Outline Box( "Analysis of Variance" )][Table Box( 1 )] << get as matrix;
anova2 = rpt[Outline Box( "Analysis of Variance" )][Number Col Box( 4 )] << get as matrix;
anova3 = rpt[Outline Box( "Analysis of Variance" )][Number Col Box( 5 )] << get as matrix;
parms = rpt[Outline Box( "Parameter Estimates" )][Table Box( 1 )] << get as matrix;
type3 = rpt[Outline Box( "Effect Tests" )][Table Box( 1 )] << get as matrix;
b eta2 = type3[0, 3] :/ anova1[3, 2];
b omega2 = (type3[0, 3] - type3[0, 2] :* anova1[2, 3]) / (anova1[3, 2] + anova1[2, 3]);
type1 = rpt[Outline Box( "Sequential (Type 1) Tests" )][Table Box( 1 )] << get as matrix;
press = rpt[Outline Box( "Press" )][Table Box( 1 )] << get as matrix;
dw = rpt[Outline Box( "Durbin-Watson" )][Table Box( 1 )] << get as matrix;
obj << Plot Effect Leverage( 1 );
obj << Plot Residual by Normal Quantiles( 1 );
plot y1 = (rpt[Outline Box( "Residual Normal Quantile Plot" )][FrameBox( 1 )] << Find Seg( Marker Seg( 1 ) )) << get y values;
plot x1 = (rpt[Outline Box( "Residual Normal Quantile Plot" )][FrameBox( 1 )] << Find Seg( Marker Seg( 1 ) )) << get x values;
```

**Code Explanation**:

1. Open data table;
2. Launch Fit Model dialog.
3. Set response variable.
4. Specify model effects.
5. Choose Standard Least Squares personality.
6. Emphasize effect screening.
7. Run the model.
8. Save prediction columns.
9. Retrieve report object.
10. Extract summary of fit statistics.



### Example 230
> **Summary**: Creates and analyzes a linear model to predict weight based on age, sex, and height, with optional Box-Cox transformation.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #Box-CoxTransformation, #LinearRegression, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
obj1 = Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run
);
rpt1 = obj1 << report;
check1 = (rpt1["Box-Cox Transformations"] << parent) << Get;
If( check1 == 0,
	obj1 << Box Cox Y Transformation( 1 );
	check2 = (rpt1["Box-Cox Transformations"] << parent) << Get;
);
```

**Code Explanation**:

1. Open data table.
2. Create Fit Model object.
3. Set response variable.
4. Add effect variables.
5. Choose personality.
6. Set emphasis.
7. Run the model.
8. Generate report object.
9. Check for Box-Cox transformation.
10. Apply Box-Cox transformation if needed.



### Example 231
> **Summary**: Fits a standard least squares model with effect screening, retrieving and extracting the Box-Cox transformations section from the report.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #EffectScreening, #BoxCoxTransformations, #JMPReporting -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
obj2 = Fit Model(
	Y( :Y ),
	Effects( :load, :flow, :load * :flow, :speed, :load * :speed, :flow * :speed, :mud, :load * :mud, :flow * :mud, :speed * :mud ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run
);
rpt2 = obj2 << report;
check1 = (rpt2["Box-Cox Transformations"] << parent) << Get;
title1 = (rpt2["Box-Cox Transformations"] << parent)[Outline Box( 1 )] << get title;
```

**Code Explanation**:

1. Open data table;
2. Fit standard least squares model.
3. Specify response variable.
4. Define model effects.
5. Set emphasis on effect screening.
6. Run the model.
7. Retrieve model report.
8. Extract Box-Cox transformations section.
9. Get parent container.
10. Fetch outline box title.



### Example 232
> **Summary**: Fits two models with different response variables and effects, generating reports and checking for Box-Cox transformations.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #BoxCoxTransformation, #EffectScreening, #StandardLeastSquares -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
obj1 = Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run
);
rpt1 = obj1 << report;
check1 = (rpt1["Box-Cox Transformations"] << parent) << Get;
If( check1 == 0,
	obj1 << Box Cox Y Transformation( 1 );
	check2 = (rpt1["Box-Cox Transformations"] << parent) << Get;
);
Close( dt1, no save );
dt2 = Open("data_table.jmp");
obj2 = Fit Model(
	Y( :Y ),
	Effects( :load, :flow, :load * :flow, :speed, :load * :speed, :flow * :speed, :mud, :load * :mud, :flow * :mud, :speed * :mud ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run
);
rpt2 = obj2 << report;
check1 = (rpt2["Box-Cox Transformations"] << parent) << Get;
title1 = (rpt2["Box-Cox Transformations"] << parent)[Outline Box( 1 )] << get title;
```

**Code Explanation**:

1. Open data table;
2. Fit model with weight as response.
3. Include age, sex, height as effects.
4. Use Standard Least Squares personality.
5. Emphasize Effect Screening.
6. Run the model.
7. Retrieve report object.
8. Check for Box-Cox transformations.
9. Apply Box-Cox transformation if none.
10. Close data_table dataset without saving.
11. Open data table;
12. Fit model with Y as response.
13. Include specified effects.
14. Use Standard Least Squares personality.
15. Emphasize Effect Screening.
16. Run the model.
17. Retrieve report object.
18. Check for Box-Cox transformations.
19. Get title of Box-Cox transformations outline box.



### Example 233
> **Summary**: Analyze and visualize a linear model to compare slopes for Fiber Gr*Sugars, including Student's t pairwise comparisons and Tukey HSD all-pairwise differences.

<!-- Keywords: #JMPScriptingLanguage, #LinearModeling, #SlopeComparisons, #TukeyHSD, #REMLMethod -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :Calories ),
	Effects( :Fiber Gr, :Sugars, :Fiber Gr * :Sugars ),
	Random Effects( :Manufacturer ),
	Center Polynomials( 0 ),
	NoBounds( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
rpt = obj << report;
obj << Compare Slopes(
	Effect( :Fiber Gr * :Sugars ),
	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) ),
	Comparisons with Control(
		1,
		Control Level( "Fiber Gr: High" ),
		Comparisons with Control Decision Chart( Control Differences Chart( 1, Point Options( "Show Needles" ) ) )
	),
	Tukey HSD( 1 ),
	Equivalence Tests( 0.001 )
);
slope est = rpt["Slope Comparisons for Fiber Gr*Sugars"]["Slope Estimates"][Table Box( 1 )] << get as matrix;
slope diff t = rpt["Slope Comparisons for Fiber Gr*Sugars"]["Student's t All Pairwise Comparisons"]["All Pairwise Differences"][
Table Box( 1 )] << get as matrix;
slope diff ctrl level = Substitute( rpt["Slope Comparisons for Fiber Gr*Sugars"]["Comparisons with Control"][Text Box( 3 )] << get text,
	"Control = ", "",
	", ", ""
);
slope diff ctrl level1 = rpt["Slope Comparisons for Fiber Gr*Sugars"]["Differences from Control"][String Col Box( 1 )] << get;
slope diff ctrl level2 = rpt["Slope Comparisons for Fiber Gr*Sugars"]["Differences from Control"][String Col Box( 2 )] << get;
slope diff ctrl = rpt["Slope Comparisons for Fiber Gr*Sugars"]["Comparisons with Control"]["Differences from Control"][Table Box( 1 )] <<
get as matrix;
dunnett q1 = Parse( Substitute( rpt[Outline Box( "Comparisons with Control" )][Text Box( 1 )] << get text, "Quantile = ", "", ", ", "" ) );
slope diff tukey = rpt["Slope Comparisons for Fiber Gr*Sugars"]["Tukey HSD All Pairwise Comparisons"]["All Pairwise Differences"][
Table Box( 1 )] << get as matrix;
tukey q1 = Parse( Substitute( rpt["Tukey HSD All Pairwise Comparisons"][Text Box( 1 )] << get text, "Quantile = ", "", ", ", "" ) );
```

**Code Explanation**:

1. Open data table;
2. Fit model with Calories as response.
3. Include Fiber Gr, Sugars, and interaction effect.
4. Add Manufacturer as random effect.
5. Use Standard Least Squares personality.
6. Employ REML method.
7. Generate model report.
8. Compare slopes for Fiber Gr*Sugars.
9. Perform Student's t pairwise comparisons.
10. Conduct Tukey HSD comparisons.



### Example 234
> **Summary**: Fits and creates reports for a linear model to predict weight based on height, with sex as an effect and age as a grouping variable, using Standard Least Squares personality.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #LinearRegression, #DataAnalysis, #Reporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :weight, :height ),
	Effects( :sex ),
	By( :age ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" )
);
obj2 = obj1 << Run( Fit Separately );
rpt2 = obj2 << report;
title1 = rpt2[1][Outline Box( 1 )] << get title;
title2 = rpt2[2][Outline Box( 1 )] << get title;
Close( dt, no save );
b saved best = [740.461721909822, 740.791126828611, 736.56998547995, 736.829557986967, 732.142283958934, 732.804580938359, 731.6879311151,
728.449599328476, 733.409803934388, 729.725512315114, 728.313734937804, 733.269357052251, 733.406234386125, 729.828804971495,
734.55491998591, 728.816933896644, 730.52111208449, 730.328952567045, 732.081558215028, 723.136567133826, 728.105562830131,
727.713075354822, 729.118759182372, 727.555293483343, 730.964933294099, 727.774874932873, 728.702692632588, 721.287134162021,
721.014293217693, 721.333716806471, 718.482044098266];
b saved specific = [68.3425980468971, 68.8039925999582, 63.2646411090245, 63.5832389388707, 58.2187967048493, 58.9296237366239,
57.7394541737309, 54.506846986677, 59.5920721294783, 55.7433321332399, 54.3778947787684, 59.4372314774295, 59.5881283400142,
55.8454919211671, 60.8803397193425, 54.858074984139, 56.5384039971999, 56.3446337648044, 58.1543439569268, 49.8198778116537,
54.1813039928387, 53.813878977695, 55.1495191467358, 53.6673483421066, 56.9902523352468, 53.8714546648772, 54.7484368159972,
48.3443471429808, 48.1328392111724, 48.3806132336711, 46.2411805553648];
```

**Code Explanation**:

1. Open data table;
2. Fit model with weight and height as Y.
3. Include sex as effect.
4. Group by age.
5. Use Standard Least Squares personality.
6. Minimal report emphasis.
7. Run fit separately.
8. Get report object.
9. Extract first outline box title.
10. Extract second outline box title.
11. Close table without saving.



### Example 235
> **Summary**: Create and execute a fit model object with inverse prediction for weight, incorporating effects of age, sex, and height, and generating a minimal report.

<!-- Keywords: #FitModel, #InversePrediction, #StandardLeastSquares, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( Log( :weight ) ),
	Effects( :age, :sex, :height ),
	Personality( Standard Least Squares ),
	Emphasis( Minimal Report ),
	Run(
		:weight << {Inverse Prediction(
			Confidence Level( 0.95 ),
			Response( 10, 50, 100, 150 ),
			Term Value( age( "14" ), sex( "M" ), height( . ) )
		)}
	)
);
b y function = {Y Function( Exp( 1.64795562681825 + 0.0457945886355865 * X ), X )};
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table.
2. Create fit model object.
3. Set response variable to log(weight).
4. Add effects: age, sex, height.
5. Use standard least squares personality.
6. Generate minimal report.
7. Run inverse prediction for weight.
8. Set confidence level to 95%.
9. Define response values: 10, 50, 100, 150.
10. Set term values: age=14, sex=M, height=missing.



### Example 236
> **Summary**: Runs a linear regression analysis to model the relationship between yield and popcorn batch, utilizing Standard Least Squares personality and minimal report emphasis.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #LinearRegression, #StandardLeastSquares, #LSMeansPlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :yield ),
	Effects( :popcorn, :batch, :popcorn * :batch ),
	Personality( Standard Least Squares ),
	Emphasis( Minimal Report ),
	Run( :yield << {{:popcorn * :batch << {LSMeans Plot( 1 )}}} )
);
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table;
2. Initiate Fit Model platform.
3. Set response variable to "yield".
4. Include "popcorn", "batch", and interaction effects.
5. Choose Standard Least Squares personality.
6. Request minimal report emphasis.
7. Run model with LSMeans plot for interaction.
8. Retrieve report object.



### Example 237
> **Summary**: Fits a linear model with weight as response, including age, sex, and height as effects, using standard least squares personality and generating a minimal report.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #DataTable, #FitModel, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height ),
	Personality( Standard Least Squares ),
	Emphasis( Minimal Report ),
	Run()
);
obj1 << Automatic Recalc( 1 );
obj1 << Save Script to Report;
rpt1 = obj1 << report;
test1 = Substitute( (rpt1[Text Box( 1 )] << get text), "\!N", "", "\!n", "", "\!r", "", "\!b", "", "\!t", "", " ", "" );
Close( dt, no save );
b term1 = "TermRuntimeRunPulseRuntime*RunPulseRuntime*RunPulse*(Runtime-RunPulse)";
```

**Code Explanation**:

1. Open data table;
2. Fit linear model with weight as response.
3. Include age, sex, height as effects.
4. Use standard least squares personality.
5. Generate minimal report.
6. Run the model.
7. Enable automatic recalculation.
8. Save script to report.
9. Extract report content.
10. Close dataset without saving.



### Example 238
> **Summary**: Analyze and visualize mean weight and height by sex, utilizing a Fit Model script to generate confidence intervals and formulas.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #ConfidenceIntervals, #ByGroups, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( Log( :weight ) ),
	Effects( :height ),
	By( :sex ),
	Personality( Standard Least Squares ),
	Emphasis( Minimal Report ),
	Run
);
obj1[1] << Save Columns( mean confidence interval( 1 ) );
obj1[2] << Save Columns( mean confidence interval( 1 ) );
b lcl mean = dt:Name( "Lower 95% Mean weight By sex" ) << get values;
b ucl mean = dt:Name( "Upper 95% Mean weight By sex" ) << get values;
dt << Delete Column( :Name( "Lower 95% Mean weight By sex" ) );
dt << Delete Column( :Name( "Upper 95% Mean weight By sex" ) );
obj1[1] << Save Columns( mean confidence limit formula( 1 ) );
obj1[2] << Save Columns( mean confidence limit formula( 1 ) );
lcl mean = dt:Name( "Lower 95% Mean weight By sex" ) << get values;
ucl mean = dt:Name( "Upper 95% Mean weight By sex" ) << get values;
obj2 = dt << Fit Model(
	Y( :height ),
	Effects( :weight, :age, :weight * :age ),
	By( :sex ),
	Personality( Standard Least Squares ),
	Emphasis( Minimal Report ),
	Run( :height << {Lack of Fit( 0 ), Plot Actual by Predicted( 0 ), Plot Residual by Predicted( 0 ), Plot Effect Leverage( 1 )} ), 
);
obj2[1] << Save Columns( mean confidence interval( 1 ) );
obj2[2] << Save Columns( mean confidence interval( 1 ) );
b lcl mean = dt:Name( "Lower 95% Mean height By sex" ) << get values;
b ucl mean = dt:Name( "Upper 95% Mean height By sex" ) << get values;
dt << Delete Column( :Name( "Lower 95% Mean height By sex" ) );
dt << Delete Column( :Name( "Upper 95% Mean height By sex" ) );
obj2[1] << Save Columns( mean confidence limit formula( 1 ) );
obj2[2] << Save Columns( mean confidence limit formula( 1 ) );
lcl mean = dt:Name( "Lower 95% Mean height By sex" ) << get values;
ucl mean = dt:Name( "Upper 95% Mean height By sex" ) << get values;
```

**Code Explanation**:

1. Open data table.
2. Fit model for log(weight).
3. Use height as effect.
4. Group by sex.
5. Use standard least squares personality.
6. Create minimal report.
7. Run the model.
8. Save mean confidence intervals.
9. Retrieve confidence interval values.
10. Delete temporary columns.
11. Save mean confidence limit formulas.
12. Retrieve confidence limit formula values.
13. Fit another model for height.
14. Include weight, age, and interaction.
15. Group by sex.
16. Use standard least squares personality.
17. Create minimal report.
18. Customize plot options.
19. Run the model.
20. Save mean confidence intervals.
21. Retrieve confidence interval values.
22. Delete temporary columns.
23. Save mean confidence limit formulas.
24. Retrieve confidence limit formula values.



### Example 239
> **Summary**: Create and execute a Fit Model object to analyze the relationship between weight, height, and sex, grouped by age, with minimal report emphasis.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #ByGrouping, #StandardLeastSquares, #MinimalReport -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :weight, :height ),
	Effects( :sex ),
	By( :age ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" )
);
obj2 = obj1 << Run( Fit Separately );
rpt2 = obj2 << report;
title1 = rpt2[1][Outline Box( 1 )] << get title;
title2 = rpt2[2][Outline Box( 1 )] << get title;
```

**Code Explanation**:

1. Open data table;
2. Create Fit Model object.
3. Set response variables: weight, height.
4. Add effect: sex.
5. Group by age.
6. Use Standard Least Squares personality.
7. Emphasize Minimal Report.
8. Run model separately.
9. Retrieve report object.
10. Extract titles from first two outline boxes.



### Example 240
> **Summary**: Runs a linear regression analysis to model miles as a function of species, subject, and season using the Fit Model platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #LinearRegression, #PredictiveAnalytics, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( Standard Least Squares ),
	Run, 
);
obj << Parameterized Formula( 1 );
obj << Predicted Values( 1 );
val1 = dt:Pred Param Formula miles << get values;
val2 = dt:Predicted miles << get values;
```

**Code Explanation**:

1. Open data table;
2. Launch Fit Model platform.
3. Set miles as response variable.
4. Include species, subject, season, interaction effects.
5. Choose Standard Least Squares personality.
6. Run the model.
7. Set parameterized formula.
8. Calculate predicted values.
9. Retrieve parameterized formula values.
10. Retrieve predicted miles values.



### Example 241
> **Summary**: Fits a linear model to predict weight based on age and height, with multiple comparisons enabled for age levels.

<!-- Keywords: #JSLScripting, #LinearModel, #MultipleComparisons, #FitModel, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model(
	Y( :weight ),
	Effects( :age, :height ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		:weight << {Effect Summary( 0 ), Summary of Fit( 0 ), Lack of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 0 ),
		Scaled Estimates( 0 ), Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ),
		Plot Studentized Residuals( 0 ), Plot Effect Leverage( 0 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 ),
		Multiple Comparisons(
			Effect( :age ),
			Comparisons with Control(
				1,
				Control Level( "age:15" ),
				Differences from Control( 0 ),
				Comparisons with Control Decision Chart(
					Control Differences Chart( 1, Show Summary Report( 1 ), Point Options( "Show Needles" ) )
				)
			)
		), {:age << {LSMeans Dunnett(
			0.05,
			Control Differences Report( 0 ),
			Control Level( "15" ),
			Control Differences Chart( 1, Show Summary Report( 1 ), Point Options( "Show Needles" ) )
		)}}}
	)
);
rpt = obj << report;
levels1 = rpt[Outline Box( "LSMeans Differences Dunnett" )][Outline Box( "Control Differences Summary" )][String Col Box( 1 )] << get;
```

**Code Explanation**:

1. Open table.
2. Fit model with weight as response.
3. Include age and height as effects.
4. Use standard least squares personality.
5. Minimal report emphasis.
6. Suppress all default reports.
7. Enable multiple comparisons for age.
8. Compare age levels with control level 15.
9. Disable differences from control.
10. Show control differences decision chart with needles.



### Example 242
> **Summary**: Runs the fitting and prediction of a model with transformed height, incorporating sex, age, and weight effects, using Standard Least Squares personality and Minimal Report emphasis.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #PredictionFormula, #ConfidenceInterval, #StandardLeastSquares -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = Fit Model(
	Y( Transform Column( "Square height", Formula( (:height) ^ 2 ) ), ),
	Effects( :sex, :age, :weight ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj1 << Prediction Formula( 1 );
obj1 << Predicted Values( 1 );
obj1 << Mean Confidence Interval( 1 );
obj1 << Indiv Confidence Interval( 1 );
obj1 << Mean Confidence Limit Formula( 1 );
obj1 << Indiv Confidence Limit Formula( 1 );
obj2 = Fit Model(
	Y( :height ^ 2 ),
	Effects( :sex, :age, :weight ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj2 << Prediction Formula( 1 );
obj2 << Predicted Values( 1 );
obj2 << Mean Confidence Interval( 1 );
obj2 << Indiv Confidence Interval( 1 );
obj2 << Mean Confidence Limit Formula( 1 );
obj2 << Indiv Confidence Limit Formula( 1 );
```

**Code Explanation**:

1. Open data table;
2. Create obj1 with transformed height.
3. Add sex, age, weight effects.
4. Use Standard Least Squares personality.
5. Set Minimal Report emphasis.
6. Run obj1 model.
7. Add Prediction Formula to obj1.
8. Add Predicted Values to obj1.
9. Add Mean Confidence Interval to obj1.
10. Add Indiv Confidence Interval to obj1.
11. Add Mean Confidence Limit Formula to obj1.
12. Add Indiv Confidence Limit Formula to obj1.
13. Create obj2 with squared height.
14. Add sex, age, weight effects.
15. Use Standard Least Squares personality.
16. Set Minimal Report emphasis.
17. Run obj2 model.
18. Add Prediction Formula to obj2.
19. Add Predicted Values to obj2.
20. Add Mean Confidence Interval to obj2.
21. Add Indiv Confidence Interval to obj2.
22. Add Mean Confidence Limit Formula to obj2.
23. Add Indiv Confidence Limit Formula to obj2.



### Example 243
> **Summary**: Runs the fitting and prediction of a linear model with transformed miles, incorporating species, season, and interaction effects, as well as random effects for subject by species.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #LinearRegression, #RandomEffects, #REML -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = Fit Model(
	Y( Transform Column( "Square Root[miles]", Formula( Sqrt( :miles ) ) ), ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	NoBounds( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj1 << Prediction Formula( 1 );
obj1 << Predicted Values( 1 );
obj1 << Conditional Pred Formula( 1 );
obj1 << Conditional Pred Values( 1 );
obj1 << Mean Confidence Interval( 1 );
obj1 << Indiv Confidence Interval( 1 );
obj1 << Mean Confidence Limit Formula( 1 );
obj1 << Indiv Confidence Limit Formula( 1 );
obj2 = Fit Model(
	Y( Sqrt( :miles ) ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	NoBounds( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj2 << Prediction Formula( 1 );
obj2 << Predicted Values( 1 );
obj2 << Conditional Pred Formula( 1 );
obj2 << Conditional Pred Values( 1 );
obj2 << Mean Confidence Interval( 1 );
obj2 << Indiv Confidence Interval( 1 );
obj2 << Mean Confidence Limit Formula( 1 );
obj2 << Indiv Confidence Limit Formula( 1 );
```

**Code Explanation**:

1. Open data table;
2. Create transformed column for miles.
3. Fit model with transformed miles.
4. Include species, season, and interaction effects.
5. Add random effects for subject by species.
6. Use REML method.
7. Generate minimal report.
8. Enable prediction formula.
9. Calculate predicted values.
10. Enable conditional prediction formula.
11. Calculate conditional predicted values.
12. Generate mean confidence interval.
13. Generate individual confidence interval.
14. Enable mean confidence limit formula.
15. Enable individual confidence limit formula.
16. Fit another model with original miles.
17. Include same effects and random effects.
18. Use REML method.
19. Generate minimal report.
20. Enable prediction formula.
21. Calculate predicted values.
22. Enable conditional prediction formula.
23. Calculate conditional predicted values.
24. Generate mean confidence interval.
25. Generate individual confidence interval.
26. Enable mean confidence limit formula.
27. Enable individual confidence limit formula.



### Example 244
> **Summary**: Runs the Fit Model process to analyze miles data, defining effects for species, subject nested in species with random effect, season, and interaction between species and season, then generates a report and attempts to extract Sequential Tests outline.

<!-- Keywords: #FitModel, #JSLScriptingLanguage, #SequentialTests, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Sequential Tests( 1 );
rpt = obj << report;
test1 = Try( rpt[Outline Box( "Response miles" )][Outline Box( "Sequential (Type 1) Tests" )], "Sequential Tests removed for REML" );
```

**Code Explanation**:

1. Open data table;
2. Initiate Fit Model process.
3. Set response variable to miles.
4. Define effects: species, subject nested in species with random effect, season, interaction between species and season.
5. Choose Standard Least Squares personality.
6. Run the model.
7. Enable Sequential Tests.
8. Generate report from model.
9. Attempt to extract Sequential Tests outline.
10. Handle case where Sequential Tests are missing.



### Example 245
> **Summary**: Fits a linear mixed effects model to analyze the relationship between height and age, with sex as a random effect, using REML estimation and minimal reporting.

<!-- Keywords: #JMPScriptingLanguage, #LinearMixedEffectsModel, #REMLEstimation, #RandomEffects, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model(
	Y( :height ),
	Effects( :age ),
	Random Effects( :sex ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Define model object.
3. Set response variable.
4. Add effect variable.
5. Specify random effect.
6. Choose personality method.
7. Select estimation method.
8. Set report emphasis.
9. Run the model.
10. Retrieve model report.



### Example 246
> **Summary**: Create and execute a Fit Model object to analyze the relationship between height and age, with sex as a random effect, using REML method and generating a control differences chart.

<!-- Keywords: #FitModel, #REML, #ControlDifferencesChart, #JSLScriptingLanguage, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model(
	Y( :height ),
	Effects( :age ),
	Random Effects( :sex ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run(
		:height << {:age << {LSMeans Dunnett(
			0.05,
			Control Level( "12" ),
			Control Differences Chart( 1, Point Options( "Show Needles" ) )
		)}}
	)
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Create Fit Model object.
3. Set response variable to height.
4. Add age as effect.
5. Include sex as random effect.
6. Use Standard Least Squares personality.
7. Employ REML method.
8. Request minimal report.
9. Run model with LSMeans Dunnett.
10. Set significance level to 0.05.
11. Define control level as "12".
12. Generate control differences chart.
13. Show needles on chart.
14. Retrieve model report.



### Example 247
> **Summary**: Fits a model to the Oxy variable, incorporating effects from Runtime, Weight, RunPulse, RstPulse, and MaxPulse, with minimal reporting and indicator parameterization.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #MinimalReport, #IndicatorParameterization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	No Intercept,
	Personality( Standard Least Squares ),
	Emphasis( Minimal Report ),
	Run( :Oxy << {Indicator Parameterization Estimates( 1 )} )
);
rpt = obj << report;
test1 = Try( rpt["Indicator Function Parameterization"] << get title, "None" );
```

**Code Explanation**:

1. Open data table;
2. Fit model to Oxy variable.
3. Include Runtime, Weight, RunPulse, RstPulse, MaxPulse effects.
4. Exclude intercept term.
5. Use standard least squares personality.
6. Generate minimal report.
7. Set indicator parameterization for Oxy.
8. Retrieve model report.
9. Attempt to get title of indicator function parameterization.
10. Assign result to test1; default to "None" if not found.



### Example 248
> **Summary**: Fits three models with different transformations to a data table, including age, sex, and height effects, and generates plots for actual vs predicted, residual vs predicted, and effect leverage.

<!-- Keywords: #JSL, #FitModel, #Transformation, #Plotting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1a = dt << Fit Model(
	Y( 1 / :weight ),
	Effects( :age, :sex, :height ),
	Personality( "Standard Least Squares" ),
	Run( :weight << {Plot Actual by Predicted( 1 ), Plot Residual by Predicted( 1 ), Plot Effect Leverage( 1 )} )
);
rpt1a = obj1a << report;
test1a = rpt1a[Outline Box( "age" )][Outline Box( "Least Squares Means Table" )][Table Box( 1 )] << get as matrix;
obj2a = dt << Fit Model(
	Y( Arrhenius( :weight ) ),
	Effects( :age, :sex, :height ),
	Personality( "Standard Least Squares" ),
	Run( :weight << {Plot Actual by Predicted( 1 ), Plot Residual by Predicted( 1 ), Plot Effect Leverage( 1 )} )
);
rpt2a = obj2a << report;
test2a = rpt2a[Outline Box( "age" )][Outline Box( "Least Squares Means Table" )][Table Box( 1 )] << get as matrix;
obj3a = dt << Fit Model(
	Y( Arrhenius Inv( :weight ) ),
	Effects( :age, :sex, :height ),
	Personality( "Standard Least Squares" ),
	Run( :weight << {Plot Actual by Predicted( 1 ), Plot Residual by Predicted( 1 ), Plot Effect Leverage( 1 )} )
);
rpt3a = obj3a << report;
test3a = rpt3a[Outline Box( "age" )][Outline Box( "Least Squares Means Table" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Fit model with inverse weight.
3. Include age, sex, height effects.
4. Use standard least squares personality.
5. Generate actual vs predicted plot.
6. Generate residual vs predicted plot.
7. Generate effect leverage plot.
8. Retrieve report for model.
9. Extract age least squares means.
10. Repeat steps 2-9 for Arrhenius and Arrhenius Inv transformations.



### Example 249
> **Summary**: Fits a linear model to predict loan values based on mortgage due amounts, utilizing standard least squares and minimal report emphasis.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #PredictiveModeling, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model(
	Y( :LOAN ),
	Effects( Log( :MORTDUE ) ),
	Informative Missing( 1 ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run()
);
obj << Prediction Formula;
obj << Predicted Values;
pred1 = dt:Pred Formula LOAN << get values;
pred2 = dt:Predicted LOAN << get values;
```

**Code Explanation**:

1. Open data table;
2. Fit linear model.
3. Set response variable.
4. Define effect using log.
5. Handle missing data.
6. Choose standard least squares.
7. Minimize report emphasis.
8. Execute model fit.
9. Generate prediction formula.
10. Calculate predicted values.



### Example 250
> **Summary**: Fits a linear model to data, predicting loan values based on log-transformed mortgage due and property value, with informative missing handling and standard least squares personality.

<!-- Keywords: #JSLScriptingLanguage, #LinearRegression, #PredictiveModeling, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model(
	Y( :LOAN ),
	Effects( Log( :MORTDUE ), Log( :VALUE ), :MORTDUE * :VALUE ),
	Informative Missing( 1 ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run()
);
obj << Prediction Formula;
obj << Predicted Values;
pred1 = dt:Pred Formula LOAN << get values;
pred2 = dt:Predicted LOAN << get values;
```

**Code Explanation**:

1. Open data table;
2. Fit linear model to data.
3. Set Y variable as LOAN.
4. Define effects: log(MORTDUE), log(VALUE), MORTDUE*VALUE.
5. Enable informative missing handling.
6. Use standard least squares personality.
7. Generate minimal report.
8. Run the model.
9. Add prediction formula.
10. Extract predicted values.



### Example 251
> **Summary**: Fits a linear model with weight as response, including sex and height as effects, and generates a minimal report with multiple comparisons for sex.

<!-- Keywords: #JSLScriptingLanguage, #LinearModel, #MultipleComparisons, #MinimalReport, #FitModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :weight ),
	Effects( :sex, :height ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		:weight << {Analysis of Variance( 0 ), Lack of Fit( 0 ), Plot Regression( 0 ), Plot Actual by Predicted( 0 ),
		Plot Residual by Predicted( 0 ), Plot Effect Leverage( 0 ), Multiple Comparisons(
			Effect( sex ),
			Comparisons with Control(
				1,
				Control Level( "sex:F" ),
				Name( "Calculate P-Values" )(1),
				Comparisons with Control Decision Chart( 0 )
			)
		), {:sex << {LSMeans Dunnett( 0.05, Control Level( "F" ), Control Differences Chart( 0 ) )}}}
	)
);
rpt = Report( obj );
b dunnett = [-4.40159873158484 5.42365132639064 -15.3909601712154 6.58776270804572 0.422236591083852];
dunnett1 = rpt[Outline Box( "LSMeans Differences Dunnett" )][Table Box( 1 )] << get as matrix;
dunnett2 = rpt[Outline Box( "Multiple Comparisons for sex" )][Outline Box( "Comparisons with Control" )][
Outline Box( "Differences from Control" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Fit linear model with weight as response.
3. Include sex and height as effects.
4. Use standard least squares personality.
5. Generate minimal report.
6. Disable various analysis options.
7. Perform multiple comparisons for sex.
8. Compare with control level "sex:F".
9. Calculate p-values for comparisons.
10. Extract LSMeans differences Dunnett from report.



### Example 252
> **Summary**: Runs a custom test script in the Fit Model platform to analyze the relationship between height and weight, with an attempt to crash the software.

<!-- Keywords: #FitModel, #CustomTestScript, #JSL, #DataAnalysis, #CrashTest -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Fit Model( Y( :height ), Effects( :weight ), Add Script( Custom Test( [42], Remove, Make it Crash ) ), Run() );
```

**Code Explanation**:

1. Open data table.
2. Assign table to variable dt.
3. Launch Fit Model platform.
4. Set response variable to height.
5. Add weight as effect.
6. Add custom test script.
7. Define custom test parameters.
8. Remove specified effect.
9. Attempt to crash software.
10. Execute model fit.



### Example 253
> **Summary**: Fits a linear regression model, adding effect leverage pairs, and retrieving column group names from a data table.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #DataAnalysis, #EffectLeveragePairs, #ColumnGroups -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model( Y( :height ), Effects( :sex, weight ), Personality( "Standard Least Squares" ), Run() );
obj1 << Effect Leverage Pairs( 1 );
obj1 << Effect Leverage Pairs( 1 );
obj1 << Effect Leverage Pairs( 1 );
group1 = dt << Get Column Groups Names;
For( i = 1, i <= N Items( group1 ), i++,
	colname = dt << Get Column Group( group1[i] );
	If( i == 1, , );
);
```

**Code Explanation**:

1. Open data table.
2. Fit linear regression model.
3. Add effect leverage pairs.
4. Add effect leverage pairs.
5. Add effect leverage pairs.
6. Get column group names.
7. Loop through column groups.
8. Get column group for each.
9. Conditional statement (no action).
10. End loop.



### Example 254
> **Summary**: Fits a linear model to predict height, incorporating sex and age effects, with standard least squares personality and effect screening, and generates a report from the model.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #EffectScreening, #StandardLeastSquares, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :height ),
	Effects( :sex, :age, :age * :sex ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run()
);
rpt1 = Report( obj1 );
title1 = "";
Try( title1 = rpt1[Outline Box( "Whole Model" )][Outline Box( "Contour Profiler" )] << get title );
```

**Code Explanation**:

1. Open data table;
2. Fit linear model to height.
3. Include sex, age, and interaction effects.
4. Use standard least squares personality.
5. Focus on effect screening.
6. Run the model.
7. Generate report from model.
8. Initialize title variable.
9. Try to get contour profiler title.
10. Store title if available.



### Example 255
> **Summary**: Fits a model to a data table, using standard least squares and emphasizing minimal report generation.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #MinimalReport, #DataTableOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	By( :age ),
	Y( :height ),
	Effects( :weight ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Try( dt1 = Report( obj[] )[Table Box( 3 )] << make combined data table );
```

**Code Explanation**:

1. Open data table;
2. Fit model by age.
3. Set response variable height.
4. Add weight effect.
5. Use standard least squares.
6. Minimal report emphasis.
7. Run the model.
8. Try to extract report.
9. Access third table box.
10. Make combined data table.



### Example 256
> **Summary**: Runs a linear regression analysis to model yield based on popcorn, oil amount, batch, and interaction effects, using the Standard Least Squares personality and EMS method.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #StandardLeastSquares, #EMSMethod, #EffectLeverage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :yield ),
	Effects( :popcorn, :oil amt, :popcorn * :oil amt, :batch, :popcorn * :batch, :oil amt * :batch, :popcorn * :oil amt * :batch & Random ),
	NoBounds( 0 ),
	Personality( Standard Least Squares ),
	Method( EMS ),
	Emphasis( Effect Leverage ),
	Run
);
rpt = obj << report;
source = rpt[Outline Box( "Effect Summary" )][String Col Box( 1 )] << get;
Close( dt, no save );
b log1 = "Unable to compute the p-value for the Durbin-Watson test statistic.";
```

**Code Explanation**:

1. Open data table;
2. Initiate Fit Model analysis.
3. Set yield as dependent variable.
4. Include popcorn, oil amt, batch, and interaction effects.
5. Disable bounds on parameters.
6. Use Standard Least Squares personality.
7. Apply EMS method.
8. Focus on effect leverage.
9. Execute the model fit.
10. Retrieve effect summary report.



### Example 257
> **Summary**: Fits a model to data, excluding intercept and including specified effects, and generates standard error and predicted values.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardError, #PredictedValues, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :Damping ),
	Effects(
		:CuSO4 & RS & Mixture,
		:Na2S2O3 & RS & Mixture,
		:Glyoxal & RS & Mixture,
		:CuSO4 * :Na2S2O3,
		:CuSO4 * :Glyoxal,
		:CuSO4 * :Wavelength,
		:Na2S2O3 * :Glyoxal,
		:Na2S2O3 * :Wavelength,
		:Glyoxal * :Wavelength,
		Scheffe Cubic( CuSO4, Glyoxal )
	),
	No Intercept( 1 ),
	Run
);
obj << Std Error of Predicted( 1 );
obj << StdErr Pred Formula( 1 );
stderr pred1 = dt:StdErr Pred Damping << get values;
stderr pred2 = dt:PredSE Damping << get values;
obj << Predicted Values( 1 );
obj << Prediction Formula( 1 );
pred1 = dt:Pred Formula Damping << get values;
pred2 = dt:Predicted Damping << get values;
obj << Mean Confidence Interval( 1 );
obj << Mean Confidence Limit Formula( 1 );
mean ci1 = (dt:Lower 95% Mean Damping << get values) || (dt:Upper 95% Mean Damping << get values);
mean ci2 = (dt:Lower 95% Mean Damping 2 << get values) || (dt:Upper 95% Mean Damping 2 << get values);
obj << Indiv Confidence Interval( 1 );
obj << Indiv Confidence Limit Formula( 1 );
indiv ci1 = (dt:Lower 95% Indiv Damping << get values) || (dt:Upper 95% Indiv Damping << get values);
indiv ci2 = (dt:Lower 95% Indiv Damping 2 << get values) || (dt:Upper 95% Indiv Damping 2 << get values);
Close( dt, no save );
b log1 =
"You have entered categorical effects that interact with a main effect (age).  These effects have been removed from the analysis.You have entered categorical effects that interact with a main effect (sex).  These effects have been removed from the analysis.";
```

**Code Explanation**:

1. Open data table.
2. Fit model with specified effects.
3. Exclude intercept from model.
4. Run the model.
5. Add standard error of predicted.
6. Get standard error formula.
7. Retrieve standard error values.
8. Add predicted values.
9. Get prediction formula.
10. Retrieve predicted values.



### Example 258
> **Summary**: Fits a model to data, performing custom testing, and saving the script to a report in JMP.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #CustomTesting, #ReportGeneration, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj1 << Custom Test( [0 1 1 0 0 0 0 2 0] );
obj1 << Save Script to Report;
rpt1 = Report( obj1 );
text1 = rpt1[Outline Box( "Response weight" )][Text Box( 1 )] << get text;
```

**Code Explanation**:

1. Open data table.
2. Fit model to data.
3. Specify response variable.
4. Add effects to model.
5. Choose personality type.
6. Set report emphasis.
7. Run the model.
8. Perform custom test.
9. Save script to report.
10. Extract text from report.



### Example 259
> **Summary**: Fits a linear model to predict yield, incorporating popcorn, oil amount, and interaction terms, with emphasis on effect leverage.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #ModelFitting, #EffectLeverage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :yield ),
	Effects( :popcorn, :oil amt, :popcorn * :oil amt, :batch, :popcorn * :batch, :oil amt * :batch, :popcorn * :oil amt * :batch & Random ),
	NoBounds( 0 ),
	Personality( Standard Least Squares ),
	Method( EMS ),
	Emphasis( Effect Leverage ),
	Run
);
rpt = obj << report;
source = rpt[Outline Box( "Effect Summary" )][String Col Box( 1 )] << get;
```

**Code Explanation**:

1. Open data table;
2. Fit model with yield as response.
3. Include popcorn, oil amt, and interaction terms.
4. Set no bounds for coefficients.
5. Use standard least squares personality.
6. Employ EMS method.
7. Focus on effect leverage emphasis.
8. Run the model.
9. Retrieve model report.
10. Extract effect summary column data.



### Example 260
> **Summary**: Fits a model with specified effects, disables intercept term, and retrieves standard error values and predicted values from a data table.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #StandardError, #PredictedValues, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :Damping ),
	Effects(
		:CuSO4 & RS & Mixture,
		:Na2S2O3 & RS & Mixture,
		:Glyoxal & RS & Mixture,
		:CuSO4 * :Na2S2O3,
		:CuSO4 * :Glyoxal,
		:CuSO4 * :Wavelength,
		:Na2S2O3 * :Glyoxal,
		:Na2S2O3 * :Wavelength,
		:Glyoxal * :Wavelength,
		Scheffe Cubic( CuSO4, Glyoxal )
	),
	No Intercept( 1 ),
	Run
);
obj << Std Error of Predicted( 1 );
obj << StdErr Pred Formula( 1 );
stderr pred1 = dt:StdErr Pred Damping << get values;
stderr pred2 = dt:PredSE Damping << get values;
obj << Predicted Values( 1 );
obj << Prediction Formula( 1 );
pred1 = dt:Pred Formula Damping << get values;
pred2 = dt:Predicted Damping << get values;
obj << Mean Confidence Interval( 1 );
obj << Mean Confidence Limit Formula( 1 );
mean ci1 = (dt:Lower 95% Mean Damping << get values) || (dt:Upper 95% Mean Damping << get values);
mean ci2 = (dt:Lower 95% Mean Damping 2 << get values) || (dt:Upper 95% Mean Damping 2 << get values);
obj << Indiv Confidence Interval( 1 );
obj << Indiv Confidence Limit Formula( 1 );
indiv ci1 = (dt:Lower 95% Indiv Damping << get values) || (dt:Upper 95% Indiv Damping << get values);
indiv ci2 = (dt:Lower 95% Indiv Damping 2 << get values) || (dt:Upper 95% Indiv Damping 2 << get values);
```

**Code Explanation**:

1. Open data table.
2. Fit model with specified effects.
3. Disable intercept term.
4. Run the model.
5. Enable standard error of predicted.
6. Enable standard error formula.
7. Retrieve standard error values.
8. Enable predicted values.
9. Enable prediction formula.
10. Retrieve predicted values.



### Example 261
> **Summary**: Fits and creates reports for two models to analyze relationships between variables in a data table, utilizing the Fit Model platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #DataAnalysis, #RegressionAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj0 = dt << Fit Model(
	Effects(
		:Silica & RS, :Sulfur & RS, :Silane & RS, :Silica * :Sulfur, :Silica * :Silane, :Sulfur * :Silane, :Silica * :Silica,
		:Sulfur * :Sulfur, :Silane * :Silane
	),
	Y( :Stretch ),
	PERSONALITY( "Standard Least Squares" ),
	Error Specification( "Default Estimate" ),
	Run( Show All Confidence Intervals( 1 ) )
);
rpt0 = obj0 << report;
obj1 = dt << Fit Model(
	Effects(
		:Silica & RS, :Sulfur & RS, :Silane & RS, :Silica * :Sulfur, :Silica * :Silane, :Sulfur * :Silane, :Silica * :Silica,
		:Sulfur * :Sulfur, :Silane * :Silane
	),
	Y( :Stretch ),
	PERSONALITY( "Standard Least Squares" ),
	Error Specification( "Pure Error" ),
	Run( Show All Confidence Intervals( 1 ) )
);
rpt1 = obj1 << report;
dtcoding0 = obj0 << Save Coding Table( 1 );
dtcoding1 = obj1 << Save Coding Table( 1 );
xy0 = dtcoding0 << get as matrix;
xy1 = dtcoding1 << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Fit first model.
3. Specify effects for model.
4. Set response variable.
5. Choose personality.
6. Define error specification.
7. Run model with confidence intervals.
8. Retrieve report from first model.
9. Fit second model.
10. Retrieve report from second model.



### Example 262
> **Summary**: Fits a standard least squares model to predict stretch values, including specified effects and informative missing handling, while generating various statistics and formulas.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #StandardLeastSquares, #PredictiveStatistics, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Silica[1 :: 2] = .;
obj = dt << Fit Model(
	Y( :Stretch ),
	Effects( :Silica & RS, :Sulfur & RS, :Silica * :Silica, :Silica * :Sulfur, :Sulfur * :Sulfur ),
	Informative Missing( 1 ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Predicted;
obj << StdErr Pred Formula;
obj << Predicted Values;
obj << Mean Confidence Interval;
obj << Indiv Confidence Interval;
obj << Prediction and Interval Formulas;
obj << StdErr Pred Formula;
obj << Std Error of Predicted;
b test = (dt:StdErr Pred Stretch << get values) || (dt:Predicted Stretch << get values) || (dt:Lower 95% Mean Stretch << get values) || (dt
:Upper 95% Mean Stretch << get values) || (dt:Lower 95% Indiv Stretch << get values) || (dt:Upper 95% Indiv Stretch << get values);
test = (dt:PredSE Stretch << get values) || (dt:Pred Formula Stretch << get values) || (dt:Lower 95% Mean Stretch 2 << get values) || (dt
:Upper 95% Mean Stretch 2 << get values) || (dt:Lower 95% Indiv Stretch 2 << get values) || (dt:Upper 95% Indiv Stretch 2 << get values);
obj << Prediction and Interval Formulas( 0.01 );
alpha1 = Substr( Char( Arg( Arg( (dt:Lower 99% Mean Stretch << get formula), 2 ), 1 ) ), 1, 40 );
```

**Code Explanation**:

1. Open data table.
2. Set first two Silica values to missing.
3. Fit standard least squares model.
4. Include specified effects in model.
5. Use informative missing handling.
6. Request minimal report emphasis.
7. Run the model.
8. Calculate standard error of predicted values.
9. Get standard error prediction formula.
10. Calculate predicted values.
11. Calculate mean confidence intervals.
12. Calculate individual confidence intervals.
13. Get prediction and interval formulas.
14. Get standard error prediction formula again.
15. Calculate standard error of predicted values again.
16. Concatenate various prediction and interval values.
17. Get prediction and interval formulas with alpha 0.01.
18. Extract part of the lower 99% mean stretch formula.



### Example 263
> **Summary**: Fits a Cox mixture model to data, generating various reports and plots for analysis.

<!-- Keywords: #CoxMixtureModel, #JMPScriptingLanguage, #DataAnalysis, #StatisticalModeling, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model(
	Effects( :p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p1 * :p2, :p1 * :p3, :p2 * :p3 ),
	Y( :Y ),
	No Intercept,
	PERSONALITY( "Standard Least Squares" ),
	Run
);
obj << Analysis of Variance( 1 );
obj << Summary of Fit( 1 );
obj << Cox Mixtures( p1( 0.6615 ), p2( 0.126 ), p3( 0.2125 ) );
obj << Sorted Estimates( 1 );
obj << Scaled Estimates( 1 );
obj << Expanded Estimates( 1 );
obj << Correlation of Estimates( 1 );
obj << Show Prediction Expression( 1 );
obj << Sequential Tests( 1 );
obj << Durbin Watson Test( 1 );
obj << Normal Plot( 1 );
obj << Pareto Plot( 1 );
obj << Bayes Plot( 1 );
obj << Press( 1 );
obj << Plot Residual by Normal Quantiles( 1 );
obj << Plot Residual by Row( 1 );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Define effects for model.
3. Set response variable.
4. Specify no intercept.
5. Choose standard least squares personality.
6. Run fit model.
7. Generate analysis of variance report.
8. Display summary of fit report.
9. Apply Cox mixtures with specified parameters.
10. Show sorted estimates.



### Example 264
> **Summary**: Fits a linear model to predict weight, incorporating age, sex, and height effects, while generating a minimal report with prediction profiler text.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #PredictionProfiler, #DataTable, #FitModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		:weight << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 0 ), Scaled Estimates( 0 ),
		Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ), Plot Studentized Residuals( 0 ),
		Plot Effect Leverage( 0 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 ),
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Prediction Intervals( 1 ),
			Term Value( age( 12, Lock( 0 ), Show( 1 ) ), sex( "F", Lock( 0 ), Show( 1 ) ), height( 62.55, Lock( 0 ), Show( 1 ) ) )
		)}
	)
);
rpt = obj << report;
pi1 = rpt["Prediction Profiler"][Text Box( 5 )] << get text;
:weight << Format( "Fixed Dec", 9, 4 );
obj2 = obj << Redo Analysis;
rpt2 = obj2 << report;
pi = rpt2["Prediction Profiler"][Text Box( 5 )] << get text;
```

**Code Explanation**:

1. Open data table;
2. Fit linear model to weight.
3. Include age, sex, height effects.
4. Use standard least squares personality.
5. Minimal report emphasis.
6. Disable all fit diagnostics plots.
7. Enable prediction profiler with intervals.
8. Set term values for age, sex, height.
9. Get prediction profiler text from first run.
10. Format weight column.
11. Redo analysis.
12. Get prediction profiler text from redo.



### Example 265
> **Summary**: Fits a model to predict Price using multiple effects, with emphasis on effect screening and generating a report.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #EffectScreening, #MultipleComparisons, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :Price ),
	Effects( :Carat Weight, :Color, :Clarity, :Depth, :Table, :Cut, :Report ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run(
		Profiler( 0 ),
		:Price << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 1 ), Sorted Estimates( 0 ),
		Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ), Plot Studentized Residuals( 0 ),
		Plot Effect Leverage( 0 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 ), Scaled Estimates( 0 ),
		Multiple Comparisons(
			Estimates(
				Estimate(
					Carat Weight( 0.870104089219332 ),
					Color( "J" ),
					Clarity( "VS2" ),
					Depth( 61.7114869888476 ),
					Table( 57.8609665427509 ),
					Cut( "Good" ),
					Report( "AGS" )
				),
				Estimate(
					Carat Weight( 0.870104089219332 ),
					Color( "J" ),
					Clarity( "VS1" ),
					Depth( 61.7114869888476 ),
					Table( 57.8609665427509 ),
					Cut( "Good" ),
					Report( "AGS" )
				),
				Estimate(
					Carat Weight( 0.870104089219332 ),
					Color( "I" ),
					Clarity( "VS2" ),
					Depth( 61.7114869888476 ),
					Table( 57.8609665427509 ),
					Cut( "Good" ),
					Report( "AGS" )
				),
				Estimate(
					Carat Weight( 0.870104089219332 ),
					Color( "I" ),
					Clarity( "VS1" ),
					Depth( 61.7114869888476 ),
					Table( 57.8609665427509 ),
					Cut( "Good" ),
					Report( "AGS" )
				)
			),
			Comparisons with Overall Average(
				1,
				Comparisons with Overall Average Decision Chart( ANOM( 1, Point Options( "Show Needles" ) ) )
			),
			Comparisons with Control(
				1,
				Control Level( "Color:J, Clarity:VS2" ),
				Comparisons with Control Decision Chart( Control Differences Chart( 1, Point Options( "Show Needles" ) ) )
			)
		)},
		Effect Summary( 0 )
	)
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Fit Model dialog initiated.
3. Set response variable: Price.
4. Add effects: Carat Weight, Color, Clarity, Depth, Table, Cut, Report.
5. Choose Standard Least Squares personality.
6. Set emphasis to Effect Screening.
7. Run model with specified options.
8. Disable Profiler.
9. Configure multiple comparisons.
10. Generate report.



### Example 266
> **Summary**: Fits a model with height as response, including weight with knots effect, and generates reports for actual vs predicted plots and leverage plots.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #StandardLeastSquares, #EffectLeverage, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :height ),
	Effects( :weight & Knotted( 5 ) ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
rpt = obj << report;
actpred y = (rpt["Actual by Predicted Plot"][FrameBox( 1 )] << Find Seg( MarkerSeg )) << get y values;
actpred x = (rpt["Actual by Predicted Plot"][FrameBox( 1 )] << Find Seg( MarkerSeg )) << get x values;
lvrg y = (rpt["weight&Knotted(5)"]["Leverage Plot"][FrameBox( 1 )] << Find Seg( MarkerSeg )) << get y values;
lvrg x = (rpt["weight&Knotted(5)"]["Leverage Plot"][FrameBox( 1 )] << Find Seg( MarkerSeg )) << get x values;
Close( dt, no save );
b est = [37.8296010642445 4.53897360446876 8.33439547368156 0.0000000005134489894 28.6327669569818 47.0264351715072 0 . 1.61087237620685,
0.254966111160294 0.0496761011584376 5.13257089857158 0.0000093584205799208 0.154312769400396 0.355619452920192 1.33434065274774
5.97510741841139 0.0176299459056118,
-0.0000558994032318075 0.0000212112522052945 -2.63536554517298 0.0122059118583557 -0.0000988774825815848 -0.0000129213238820302
-0.685129431481145 5.97510741841139 0.0000075278296856861];
```

**Code Explanation**:

1. Open data table.
2. Fit model with height as response.
3. Include weight with knots effect.
4. Use standard least squares personality.
5. Emphasize effect leverage.
6. Run the model fit.
7. Retrieve report object.
8. Extract actual vs predicted plot y-values.
9. Extract actual vs predicted plot x-values.
10. Extract leverage plot y-values.



### Example 267
> **Summary**: Fits a model to predict height based on weight, using Standard Least Squares personality and minimal report emphasis.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #MinimalReport, #ParameterEstimates -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :height ),
	Effects( :weight & Knotted( 3 ) ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
rpt = obj << report;
est = rpt["Parameter Estimates"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Launch Fit Model platform.
3. Set response variable to height.
4. Add weight with cubic knot effects.
5. Use Standard Least Squares personality.
6. Minimal Report emphasis selected.
7. Run the model.
8. Extract report object.
9. Access Parameter Estimates table.
10. Retrieve estimates as matrix.



### Example 268
> **Summary**: Fits a model with height as response, including weight with 5 knots as effect, and generates reports for actual vs predicted plots and leverage plots.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #LeveragePlot, #ActualvsPredictedPlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :height ),
	Effects( :weight & Knotted( 5 ) ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
rpt = obj << report;
actpred y = (rpt["Actual by Predicted Plot"][FrameBox( 1 )] << Find Seg( MarkerSeg )) << get y values;
actpred x = (rpt["Actual by Predicted Plot"][FrameBox( 1 )] << Find Seg( MarkerSeg )) << get x values;
lvrg y = (rpt["weight&Knotted(5)"]["Leverage Plot"][FrameBox( 1 )] << Find Seg( MarkerSeg )) << get y values;
lvrg x = (rpt["weight&Knotted(5)"]["Leverage Plot"][FrameBox( 1 )] << Find Seg( MarkerSeg )) << get x values;
```

**Code Explanation**:

1. Open data table;
2. Fit model with height as response.
3. Include weight with 5 knots as effect.
4. Use Standard Least Squares personality.
5. Emphasize Effect Leverage.
6. Run the model fit.
7. Retrieve report object.
8. Extract Actual vs Predicted plot y-values.
9. Extract Actual vs Predicted plot x-values.
10. Extract Leverage plot y-values.
11. Extract Leverage plot x-values.



### Example 269
> **Summary**: Analyze and visualize a model fit to predict ABRASION, incorporating multiple effects and user-defined estimates, with minimal report generation and interactive output.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #MultipleComparisons, #StandardLeastSquares, #DataVisualization -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
obj2 = dt2 << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILANE * :SILICA, :SILANE * :SILANE, :SULFUR * :SILICA,
		:SULFUR * :SILANE, :SULFUR * :SULFUR
	),
	Personality( Standard Least Squares ),
	Emphasis( Minimal Report ),
	Run( :ABRASION << {Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ), Plot Effect Leverage( 0 )} )
);
obj2 << Multiple Comparisons(
	Estimates(
		Estimate( SILICA( 0.6 ), SILANE( 36.32 ), SULFUR( 0.96 ) ),
		Estimate( SILICA( 0.6 ), SILANE( 36.32 ), SULFUR( 1.82 ) ),
		Estimate( SILICA( 0.6 ), SILANE( 59.97 ), SULFUR( 0.96 ) ),
		Estimate( SILICA( 0.6 ), SILANE( 59.97 ), SULFUR( 1.82 ) ),
		Estimate( SILICA( 1.94 ), SILANE( 36.32 ), SULFUR( 0.96 ) ),
		Estimate( SILICA( 1.94 ), SILANE( 36.32 ), SULFUR( 1.82 ) ),
		Estimate( SILICA( 1.94 ), SILANE( 59.97 ), SULFUR( 0.96 ) ),
		Estimate( SILICA( 1.94 ), SILANE( 59.97 ), SULFUR( 1.82 ) )
	),
	Student's t( 1 )
);
rpt3 = obj2 << report;
est2 = rpt3[Outline Box( "Multiple Comparisons for User-Defined estimates" )][Outline Box( "User-Defined Estimates" )][Table Box( 1 )] <<
get as matrix;
diff student DF2 = rpt3[Outline Box( "Student's t All Pairwise Comparisons" )][Text Box( 2 )] << get text;
diff student2 = rpt3[Outline Box( "Student's t All Pairwise Comparisons" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data_table data
2. Fit model with ABRASION as response.
3. Include multiple effects in model.
4. Use standard least squares personality.
5. Generate minimal report.
6. Disable various plot outputs.
7. Perform multiple comparisons.
8. Define user-defined estimates.
9. Use Student's t test for comparisons.
10. Extract multiple comparison results.



### Example 270
> **Summary**: Fits a model to predict log weight based on age, sex, and height, generating a minimal report and saving the prediction formula column.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #PredictionFormula, #DataTable -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
fm2 = dt2 << Fit Model(
	Y( Log( :weight ) ),
	Effects( :age, :sex, :height ),
	Personality( Standard Least Squares ),
	Emphasis( Minimal Report ),
	Run()
);
fm2 << Save Columns( Prediction Formula );
jmp pred = dt2:Pred Formula weight << get values;
sql2 = As SQL Expr( (dt2:Pred Formula weight << get formula) );
sas1 = Collapse Whitespace( As SAS Expr( (dt2:Pred Formula weight << get formula) ) );
```

**Code Explanation**:

1. Open data table.
2. Fit model with log weight.
3. Include age, sex, height effects.
4. Use standard least squares personality.
5. Generate minimal report.
6. Run the model.
7. Save prediction formula column.
8. Retrieve prediction formula values.
9. Convert formula to SQL expression.
10. Convert formula to SAS expression.



### Example 271
> **Summary**: Generates a prediction formula for log-transformed weight based on age, sex, and height using Fit Model with Standard Least Squares personality.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #PredictionFormula, #LogTransformation -->

**Code**:
```jsl
b sql2 =
"Exp((1.8912707717926 + ( CASE  age  WHEN 12 THEN 0 WHEN 13 THEN -0.112749259010382 WHEN 14 THEN -0.22662104932495 WHEN 15 THEN -0.160618417414009 WHEN 16 THEN -0.0711335847058128 WHEN 17 THEN -0.00570382632499081 ELSE  NULL  END ) + ( CASE  sex  WHEN 'F' THEN 0.0166940956494036 WHEN 'M' THEN -0.0166940956494036 ELSE  NULL  END ) + 0.0457945886355865* height ))";
b sas1 =
"RESULT = Exp((1.8912707717926 + ( SELECT (age) WHEN (12) 0 WHEN (13) -0.112749259010382 WHEN (14) -0.22662104932495 WHEN (15) -0.160618417414009 WHEN ( 16) -0.0711335847058128 WHEN (17) -0.00570382632499081 OTHERWISE . END ) + ( SELECT (sex) WHEN ('F') 0.0166940956494036 WHEN ( 'M') -0.0166940956494036 OTHERWISE . END ) + 0.0457945886355865*height));";
  
dt2 = Open("data_table.jmp");
fm2 = dt2 << Fit Model(
	Y( Log( :weight ) ),
	Effects( :age, :sex, :height ),
	Personality( Standard Least Squares ),
	Emphasis( Minimal Report ),
	Run()
);
fm2 << Save Columns( Prediction Formula );
jmp pred = dt2:Pred Formula weight << get values;
sql2 = As SQL Expr( (dt2:Pred Formula weight << get formula) );
sas1 = Collapse Whitespace( As SAS Expr( (dt2:Pred Formula weight << get formula) ) );
```

**Code Explanation**:

1. Define SQL expression.
2. Define SAS expression.
3. Open data table.
4. Fit model using log-transformed weight.
5. Include age, sex, height as effects.
6. Use standard least squares personality.
7. Generate minimal report.
8. Run the model.
9. Save prediction formula column.
10. Extract JMP prediction values.



### Example 272
> **Summary**: Fits a model to data, generating reports, and saving residuals for analysis.

<!-- Keywords: #JSLScripting, #FitModel, #ResidualAnalysis, #REMLMethod, #JMPDataTables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
rpt1 = obj1 << report;
obj1 << Save Columns( Studentized Residuals );
obj1 << Save Columns( Externally Studentized Residuals );
obj1 << Plot Studentized Residuals( 1 );
b y1 = dt:Studentized Resid miles << get values;
y1 = (rpt1[Outline Box( "Studentized Residuals" )][FrameBox( 1 )] << Find Seg( Marker Seg( 1 ) )) << Get Y Values;
note1 = rpt1[Outline Box( "Studentized Residuals" )][Text Box( 3 )] << get text;
obj1 << Externally Studentized Residuals( 1 );
test1 = Try( saved = dt:Externally Studentized Residuals miles << get values, "Externally Studentized Residuals not available for REML" );
```

**Code Explanation**:

1. Open data table.
2. Fit model with specified effects.
3. Set personality and method.
4. Run the model.
5. Retrieve model report.
6. Save studentized residuals.
7. Save externally studentized residuals.
8. Plot studentized residuals.
9. Extract studentized residual values.
10. Extract externally studentized residual values if available.



### Example 273
> **Summary**: Fits a model to predict oxygen levels, incorporating specified effects and using standard least squares personality.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #ConfidenceInterval, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Weight( :Weight ),
	Y( :Oxy ),
	Effects( :Sex, :MaxPulse, :Runtime, :Sex * :MaxPulse, ::Runtime * :Runtime ),
	Personality( "Standard Least Squares" ),
	Emphasis( Minimal Report ),
	Run()
);
obj1 << Indiv Confidence Interval;
obj1 << Indiv Confidence Limit Formula;
indiv lcl1 = dt:Name( "Lower 95% Indiv Oxy" ) << get values;
indiv ucl1 = dt:Name( "Upper 95% Indiv Oxy" ) << get values;
indiv lcl2 = dt:Name( "Lower 95% Indiv Oxy 2" ) << get values;
indiv ucl2 = dt:Name( "Upper 95% Indiv Oxy 2" ) << get values;
```

**Code Explanation**:

1. Open data_table data
2. Fit model using weight.
3. Set response variable to oxy.
4. Include specified effects.
5. Use standard least squares personality.
6. Create minimal report.
7. Run the model.
8. Add individual confidence interval.
9. Add confidence limit formula.
10. Retrieve lower and upper limits.



### Example 274
> **Summary**: Fits a model to predict Oxy levels based on Weight, MaxPulse, Runtime, and Runtime squared effects, grouped by Sex, with individual confidence intervals.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #ByGroup, #ConfidenceInterval, #StandardLeastSquares -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Weight( :Weight ),
	Y( :Oxy ),
	Effects( MaxPulse, :Runtime, :Runtime * :Runtime ),
	By( :Sex ),
	Personality( "Standard Least Squares" ),
	Emphasis( Minimal Report ),
	Run()
);
obj1[1] << Indiv Confidence Interval;
obj1[2] << Indiv Confidence Interval;
indiv lcl1 = dt:Name( "Lower 95% Indiv Oxy By Sex" ) << get values;
indiv ucl1 = dt:Name( "Upper 95% Indiv Oxy By Sex" ) << get values;
obj1[1] << Indiv Confidence Limit Formula;
obj1[2] << Indiv Confidence Limit Formula;
indiv lcl2 = dt:Name( "Lower 95% Indiv Oxy By Sex" ) << get values;
indiv ucl2 = dt:Name( "Upper 95% Indiv Oxy By Sex" ) << get values;
```

**Code Explanation**:

1. Open data table;
2. Fit model with Weight as weight.
3. Set Oxy as response variable.
4. Include MaxPulse, Runtime, and Runtime squared effects.
5. Group by Sex.
6. Use Standard Least Squares personality.
7. Generate minimal report.
8. Run the model.
9. Add individual confidence intervals for both groups.
10. Retrieve lower and upper confidence interval values.



### Example 275
> **Summary**: Fits two MANOVA models with custom response functions and generates centroid plots for the 'drug' effect, retrieving canonical centroid plot reports.

<!-- Keywords: #JMPScriptingLanguage, #MANOVA, #CentroidPlot, #CustomResponseFunctions, #JournalReport -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :hist0, :hist1, :hist3 ),
	Effects( :drug, :dep1 ),
	Personality( "Manova" ),
	Run(
		Response Function( "Sum" ),
		Response Function( "Identity" ),
		Response Function( "Contrast" ),
		Response Function( "Polynomial" ),
		Response Function( "Helmert" ),
		Response Function( "Profile" ),
		Response Function( "Mean" ),
		Response Function( [0.9 0.1 -1, -0.35 1 -0.65], title( "My Custom Test" ) )
	)
);
obj1 << (Response["Sum"] << (Effect["drug"] << Centroid Plot( Centroid Circles( 1 ) )));
rpt1 = Report( obj1 );
jrn1 = rpt1[Outline Box( "Canonical Centroid Plot" )] << get journal;
obj2 = dt << Fit Model(
	Y( :hist0, :hist1, :hist3 ),
	Effects( :drug, :dep1 ),
	Personality( "Manova" ),
	Set Alpha Level( 0.4 ),
	Run(
		Response Function( "Sum" ),
		Response Function( "Identity" ),
		Response Function( "Contrast" ),
		Response Function( "Polynomial" ),
		Response Function( "Helmert" ),
		Response Function( "Profile" ),
		Response Function( "Mean" ),
		Response Function( [0.9 0.1 -1, -0.35 1 -0.65], title( "My Custom Test" ) )
	)
);
obj2 << (Response["Sum"] << (Effect["drug"] << Centroid Plot( Centroid Circles( 1 ) )));
rpt2 = Report( obj2 );
jrn2 = rpt2[Outline Box( "Canonical Centroid Plot" )] << get journal;
```

**Code Explanation**:

1. Open data table;
2. Fit Manova model with specified responses.
3. Define multiple response functions.
4. Generate centroid plot for "drug" effect.
5. Retrieve canonical centroid plot report.
6. Fit another Manova model with custom alpha level.
7. Define same response functions again.
8. Generate centroid plot for "drug" effect.
9. Retrieve canonical centroid plot report.



### Example 276
> **Summary**: Analyze and visualize a data table by fitting a Manova model, saving canonical scores, and retrieving column group names.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #Manova, #CanonicalScores, #ColumnGroups -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Contrast" ) )
);
obj1 << (Response["Contrast"] << (Effect["Whole Model"] << Save Canonical Scores));
obj1 << (Response["Contrast"] << (Effect["Whole Model"] << Save Canonical Scores));
group1 = dt << Get Column Groups Names;
For( i = 1, i <= N Items( group1 ), i++,
	colname = dt << Get Column Group( group1[i] );
	If( i == 1, , );
);
```

**Code Explanation**:

1. Open data table;
2. Launch Fit Model platform.
3. Set response variables.
4. Define model effects.
5. Select Manova personality.
6. Run model with Contrast.
7. Save canonical scores for Whole Model.
8. Repeat saving canonical scores.
9. Retrieve column group names.
10. Loop through each group name.



### Example 277
> **Summary**: Analyze and visualize a mixed model with specified effects, extracting random effects covariance parameters, fixed effects parameter estimates, scale estimates, and performing sequential tests.

<!-- Keywords: #JMPScriptingLanguage, #MixedModelAnalysis, #FixedEffects, #RandomEffects, #SequentialTests -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = Fit Model(
	Y( :Y ),
	Effects( :Age & Excluded, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Random Effects( :Gender, :BP & BSpline( 3, Degree( 3 ) ) ),
	Personality( "Mixed Model" ),
	Run
);
rpt1 = obj1 << report;
covparms = rpt1["Random Effects Covariance Parameter Estimates"][Table Box( 1 )] << get as matrix;
parmest1 = rpt1["Fixed Effects Parameter Estimates"][Tab Page Box( 1 )][Table Box( 1 )] << get as matrix;
scl = rpt1["Fixed Effects Parameter Estimates"][Table Box( 2 )] << get as matrix;
tests3 = rpt1["Fixed Effects Tests"][Table Box( 1 )] << get as matrix;
obj1 << Sequential Tests( 1 );
tests1 = rpt1["Sequential (Type1) Tests"][Table Box( 1 )] << get as matrix;
obj1 << Predictions;
obj1 << Prediction Formula;
obj1 << Standard Error of Predicted;
obj1 << Mean Confidence Interval;
obj1 << Residuals;
obj1 << Prediction and Interval Formulas;
obj1 << Conditional Predictions;
obj1 << Conditional Prediction Formula;
obj1 << Standard Error of Conditional Predicted;
obj1 << Conditional Mean CI;
obj1 << Conditional Residuals;
saved1 = (dt << get as matrix)[0, 13 :: 27];
obj1 << Save Script to Report;
savedscript1 = rpt1[Text Box( 1 )] << get text;
obj1 << Covariance of Fixed Effects( 1 );
covb = rpt1["Covariance of Fixed Effects"][Matrix Box( 1 )] << get;
obj1 << Correlation of Fixed Effects( 1 );
corrb = rpt1["Correlation of Fixed Effects"][Matrix Box( 1 )] << get;
```

**Code Explanation**:

1. Open data table;
2. Fit mixed model with specified effects.
3. Extract random effects covariance parameters.
4. Extract fixed effects parameter estimates.
5. Extract scale estimates.
6. Extract fixed effects tests.
7. Perform sequential Type1 tests.
8. Extract sequential tests results.
9. Generate predictions.
10. Extract prediction formula.



### Example 278
> **Summary**: Fits and creates reports for mixed models with center polynomials, allowing for comparison of fixed effects estimates.

<!-- Keywords: #JMPScriptingLanguage, #MixedModel, #CenterPolynomials, #FixedEffects, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects( Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 ) ),
	Personality( "Mixed Model" ),
	Center Polynomials( 1 ),
	Run
);
rpt1 = obj1 << report;
obj2 = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects( Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 ) ),
	Personality( "Mixed Model" ),
	Center Polynomials( 0 ),
	Run
);
rpt2 = obj2 << report;
fixed1 = rpt1[Outline Box( "Fixed Effects Parameter Estimates" )][Table Box( 1 )] << get as matrix;
fixed2 = rpt2[Outline Box( "Fixed Effects Parameter Estimates" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Fit mixed model with center polynomials.
3. Retrieve report from first fit.
4. Fit mixed model without center polynomials.
5. Retrieve report from second fit.
6. Extract fixed effects estimates from first report.
7. Extract fixed effects estimates from second report.



### Example 279
> **Summary**: Fits and creates reports for two mixed models with different polynomial centering settings, extracting fixed effects matrices from each report.

<!-- Keywords: #JMPScriptingLanguage, #MixedModel, #PolynomialCentering, #FixedEffectsMatrix, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :Yield ),
	Effects( Polynomial( :Moisture ) ),
	Random Effects( Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 ) ),
	Personality( "Mixed Model" ),
	Center Polynomials( 1 ),
	Run
);
rpt1 = obj1 << report;
obj2 = dt << Fit Model(
	Y( :Yield ),
	Effects( Polynomial( :Moisture ) ),
	Random Effects( Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 ) ),
	Personality( "Mixed Model" ),
	Center Polynomials( 0 ),
	Run
);
rpt2 = obj2 << report;
fixed1 = rpt1[Outline Box( "Fixed Effects Parameter Estimates" )][Table Box( 1 )] << get as matrix;
fixed2 = rpt2[Outline Box( "Fixed Effects Parameter Estimates" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Fit mixed model with centered polynomials.
3. Retrieve report from first fit.
4. Fit mixed model without centered polynomials.
5. Retrieve report from second fit.
6. Extract fixed effects matrix from first report.
7. Extract fixed effects matrix from second report.



### Example 280
> **Summary**: Fits and creates reports for mixed models with center polynomials, followed by a second fit without center polynomials, and extracts fixed effects estimates from both reports.

<!-- Keywords: #JMPScriptingLanguage, #MixedModel, #CenterPolynomials, #FixedEffectsEstimates, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :Yield ),
	Effects( Polynomial( :Moisture ) ),
	Random Effects( :Variety * :Moisture ),
	Personality( "Mixed Model" ),
	Center Polynomials( 1 ),
	Run
);
rpt1 = obj1 << report;
obj2 = dt << Fit Model(
	Y( :Yield ),
	Effects( Polynomial( :Moisture ) ),
	Random Effects( :Variety * :Moisture ),
	Personality( "Mixed Model" ),
	Center Polynomials( 0 ),
	Run
);
rpt2 = obj2 << report;
fixed1 = rpt1[Outline Box( "Fixed Effects Parameter Estimates" )][Table Box( 1 )] << get as matrix;
fixed2 = rpt2[Outline Box( "Fixed Effects Parameter Estimates" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Fit mixed model with center polynomials.
3. Retrieve report from first fit.
4. Fit mixed model without center polynomials.
5. Retrieve report from second fit.
6. Extract fixed effects estimates from first report.
7. Extract fixed effects estimates from second report.



### Example 281
> **Summary**: Fits and creates reports for mixed models with center polynomials and without, extracting fixed effects estimates from the reports.

<!-- Keywords: #JMPScriptingLanguage, #MixedModel, #CenterPolynomials, #FixedEffects, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :Yield ),
	Effects( Factorial to Degree( :Moisture, :Variety ) ),
	Random Effects( Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 ) ),
	Personality( "Mixed Model" ),
	Center Polynomials( 1 ),
	Run
);
rpt1 = obj1 << report;
obj2 = dt << Fit Model(
	Y( :Yield ),
	Effects( Factorial to Degree( :Moisture, :Variety ) ),
	Random Effects( Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 ) ),
	Personality( "Mixed Model" ),
	Center Polynomials( 0 ),
	Run
);
rpt2 = obj2 << report;
fixed1 = rpt1[Outline Box( "Fixed Effects Parameter Estimates" )][Table Box( 1 )] << get as matrix;
fixed2 = rpt2[Outline Box( "Fixed Effects Parameter Estimates" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Fit mixed model with center polynomials.
3. Retrieve report from first fit.
4. Fit mixed model without center polynomials.
5. Retrieve report from second fit.
6. Extract fixed effects estimates from first report.
7. Extract fixed effects estimates from second report.



### Example 282
> **Summary**: Analyze and visualize mixed model results, comparing slopes for the interaction between Fiber Gr and Sugars in a data table.

<!-- Keywords: #JMPScriptingLanguage, #MixedModelAnalysis, #SlopeComparison, #DataVisualization, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :Calories ),
	Effects( :Fiber Gr, :Sugars, :Fiber Gr * :Sugars ),
	Random Effects( :Manufacturer ),
	Center Polynomials( 0 ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Run
);
rpt = obj << report;
obj << Compare Slopes(
	Effect( :Fiber Gr * :Sugars ),
	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) ),
	Comparisons with Control(
		1,
		Control Level( "Fiber Gr: High" ),
		Comparisons with Control Decision Chart( Control Differences Chart( 1, Point Options( "Show Needles" ) ) )
	),
	Tukey HSD( 1 ),
	Equivalence Tests( 0.001 )
);
slope est = rpt["Slope Comparisons for Fiber Gr*Sugars"]["Slope Estimates"][Table Box( 1 )] << get as matrix;
slope diff t = rpt["Slope Comparisons for Fiber Gr*Sugars"]["Student's t All Pairwise Comparisons"]["All Pairwise Differences"][
Table Box( 1 )] << get as matrix;
slope diff ctrl level = Substitute( rpt["Slope Comparisons for Fiber Gr*Sugars"]["Comparisons with Control"][Text Box( 3 )] << get text,
	"Control = ", "",
	", ", ""
);
slope diff ctrl level1 = rpt["Slope Comparisons for Fiber Gr*Sugars"]["Differences from Control"][String Col Box( 1 )] << get;
slope diff ctrl level2 = rpt["Slope Comparisons for Fiber Gr*Sugars"]["Differences from Control"][String Col Box( 2 )] << get;
slope diff ctrl = rpt["Slope Comparisons for Fiber Gr*Sugars"]["Comparisons with Control"]["Differences from Control"][Table Box( 1 )] <<
get as matrix;
dunnett q1 = Parse( Substitute( rpt[Outline Box( "Comparisons with Control" )][Text Box( 1 )] << get text, "Quantile = ", "", ", ", "" ) );
slope diff tukey = rpt["Slope Comparisons for Fiber Gr*Sugars"]["Tukey HSD All Pairwise Comparisons"]["All Pairwise Differences"][
Table Box( 1 )] << get as matrix;
tukey q1 = Parse( Substitute( rpt["Tukey HSD All Pairwise Comparisons"][Text Box( 1 )] << get text, "Quantile = ", "", ", ", "" ) );
```

**Code Explanation**:

1. Open data table;
2. Fit mixed model with Calories as response.
3. Include Fiber Gr, Sugars, and their interaction as effects.
4. Set Manufacturer as random effect.
5. Disable polynomial centering.
6. Remove bounds constraints.
7. Use Mixed Model personality.
8. Run the model.
9. Generate model report.
10. Compare slopes for Fiber Gr*Sugars interaction.



### Example 283
> **Summary**: Fits a mixed model with AR(1) repeated structure and captures log output, utilizing the Fit Model platform in JMP.

<!-- Keywords: #JMPFitModel, #MixedModel, #AR1Repeats, #LogCapture, #Variogram -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model( Y( :CO2 ), Effects, Personality( "Mixed Model" ), Repeated Structure( "AR(1)" ), Run );
log = Log Capture( obj << Variogram( Exponential( 1 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Initiate Fit Model platform.
3. Set CO2 as response variable.
4. Define model personality as Mixed Model.
5. Specify AR(1) repeated structure.
6. Run the model.
7. Capture log output.
8. Generate variogram plot.
9. Use Exponential model for variogram.
10. Display variogram results.



### Example 284
> **Summary**: Fits and creates reports for a mixed model with random effects, fixed effects, and center polynomials to analyze the relationship between yield and moisture in a dataset.

<!-- Keywords: #JMPScriptingLanguage, #MixedModel, #RandomEffects, #FixedEffects, #CenterPolynomials -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture, :Moisture * :Moisture ),
	Random Effects( Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 ) ),
	Personality( Mixed Model ),
	Center Polynomials( 1 ),
	Run
);
rpt = obj << report;
randparm = rpt[Outline Box( "Random Effects Covariance Parameter Estimates" )][Number Col Box( "Estimate" )] << get as matrix;
fixed term = rpt[Outline Box( "Fixed Effects Parameter Estimates" )][String Col Box( "Term" )] << get;
```

**Code Explanation**:

1. Open table.
2. Fit mixed model.
3. Set response variable.
4. Add fixed effects.
5. Define random effects.
6. Specify personality.
7. Center polynomials.
8. Run model.
9. Retrieve report.
10. Extract random parameters.



### Example 285
> **Summary**: Fits and creates reports for a mixed model for miles, incorporating prediction formulas and extracting fit statistics.

<!-- Keywords: #JMPScriptingLanguage, #MixedModel, #FitStatistics, #PredictionFormula, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Center Polynomials( 0 ),
	Personality( Mixed Model ),
	Run
);
obj1 << Prediction Formula( 1 );
obj2 = dt << Fit Model(
	Y( :Pred Formula miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Center Polynomials( 0 ),
	Personality( Mixed Model ),
	Run
);
rpt2 = obj2 << report;
fitstat = rpt2[Outline Box( "Fit Statistics" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Fit mixed model for miles.
3. Add prediction formula.
4. Fit model using prediction formula.
5. Generate report from second fit.
6. Extract fit statistics table.
7. Convert fit statistics to matrix.



### Example 286
> **Summary**: Fits a mixed model with spatial anisotropic structure and spherical type, estimating repeated effects covariance parameter estimates.

<!-- Keywords: #JMPScriptingLanguage, #MixedModel, #SpatialAnisotropy, #SphericalType, #RepeatedEffects -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :Yield ),
	Effects,
	Center Polynomials( 0 ),
	Personality( Mixed Model ),
	Repeated Effects( :Row, :Column ),
	Repeated Structure( "Spatial Anisotropic" ),
	Repeated Structure Type( "Spherical" ),
	Run(), 
);
rpt = obj << report;
parmest = rpt[Outline Box( "Repeated Effects Covariance Parameter Estimates" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open table.
2. Fit mixed model.
3. Set response variable.
4. Specify effects.
5. Disable center polynomials.
6. Choose mixed personality.
7. Define repeated effects.
8. Set spatial anisotropic structure.
9. Specify spherical type.
10. Retrieve parameter estimates.



### Example 287
> **Summary**: Fits a mixed-effects model analysis on a data table, specifying treatment effects and repeated measures structure.

<!-- Keywords: #JMPScriptingLanguage, #MixedModel, #RepeatedMeasures, #DataTableAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:Treatment, :Month, :Treatment * :Month, :Name( "AM/PM" ), :Treatment * :Name( "AM/PM" ), :Month * :Name( "AM/PM" ),
		:Treatment * :Month * :Name( "AM/PM" )
	),
	Center Polynomials( 0 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Time ),
	Repeated Structure( "Unstructured" ),
	Run
);
dt:Y << Set selected;
dt << Delete Columns;
obj << Variogram( 1 );
```

**Code Explanation**:

1. Open data table;
2. Define model.
3. Specify response variable.
4. Add effects.
5. Disable centering polynomials.
6. Choose mixed model personality.
7. Set subject variable.
8. Define repeated effects.
9. Select unstructured repeated structure.
10. Run the model.
11. Select Y column.
12. Delete columns.
13. Generate variogram.



### Example 288
> **Summary**: Create and execute a mixed model fit to predict weight based on age and height, utilizing linear combination of variance components.

<!-- Keywords: #JMPScriptingLanguage, #MixedModel, #LinearCombination, #VarianceComponents, #FitModel -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Fit Model( Y( :weight ), Effects( :age, :height ), Personality( "Mixed Model" ), Run( Linear Combination of Variance Components ) );
```

**Code Explanation**:

1. Open data table;
2. Create Fit Model object.
3. Set response variable to weight.
4. Add age effect.
5. Add height effect.
6. Choose Mixed Model personality.
7. Run model.
8. Calculate linear combination of variance components.



### Example 289
> **Summary**: Fits a mixed model to analyze the relationship between treatment, month, and AM/PM time on patient outcomes, with diagnostics for repeated measures covariance.

<!-- Keywords: #JMPScriptingLanguage, #MixedModel, #RepeatedMeasures, #CovarianceDiagnostics, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:Treatment, :Month, :Month * :Treatment, :"AM/PM"n, :Treatment * :"AM/PM"n, :Month * :"AM/PM"n, :Month * :Treatment * :"AM/PM"n
	),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Time ),
	Repeated Structure( "Unstructured" ),
	Run
);
obj << Repeated Measures Covariance Diagnostics( 1 );
rpt = obj << report;
r = rpt["Repeated Measures Covariance Diagnostics"]["Covariance Matrix"][Matrix Box( 1 )] << get;
rcorr = rpt["Repeated Measures Covariance Diagnostics"]["Correlation Matrix"][Matrix Box( 1 )] << get;
rpt["Repeated Measures Covariance Diagnostics"]["Correlation Heat Map"][AxisBox( 1 )] << save to column property;
```

**Code Explanation**:

1. Open data table;
2. Fit mixed model.
3. Set response variable.
4. Define effects for model.
5. Remove bounds constraint.
6. Specify mixed model personality.
7. Define subject variable.
8. Define repeated effects.
9. Set repeated structure.
10. Run the model.



### Example 290
> **Summary**: Runs the creation and retrieval of a partial cubic effects list from a data table, utilizing the Fit Model dialog in JMP.

<!-- Keywords: #JMPScriptingLanguage, #FitModelDialog, #PartialCubicEffects, #DataTableOperations, #JSLAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dlg = dt << Fit Model( Effects( Partial Cubic( :age, :sex, :height ) ) );
effects list = Report( dlg )[Panel Box( 3 )][ListBoxBox( 1 )] << get items;
```

**Code Explanation**:

1. Open data table;
2. Launch Fit Model dialog.
3. Add effects: Partial Cubic(age, sex, height).
4. Create dialog reference.
5. Access report panel.
6. Select ListBoxBox item.
7. Retrieve selected items.
8. Store effects list.



### Example 291
> **Summary**: Fits a linear regression model to a data table, retrieving the report, and extracting summary statistics.

<!-- Keywords: #JSLScriptingLanguage, #LinearRegression, #DataTable, #ReportGeneration, #MatrixOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model( Effects( :height ), Y( :weight ), Personality( "Standard Least Squares" ), Emphasis( "Minimal Report" ), Run );
rpt1 = obj1 << report;
n1 = (rpt1[Outline Box( "Summary of Fit" )][Table Box( 1 )] << get as matrix)[5];
```

**Code Explanation**:

1. Open data table.
2. Fit linear regression model.
3. Retrieve model report.
4. Extract summary of fit outline.
5. Access first table box.
6. Convert table to matrix.
7. Select fifth row value.
8. Assign value to n1 variable.



### Example 292
> **Summary**: Analyze a data table by fitting a model with height as an effect, grouping by age, and filtering for females, while generating a minimal report without lack of fit test.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #LocalDataFilter, #ByGroup, #MinimalReport -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Effects( :height ),
	Y( :weight ),
	by( :age ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Plot Regression( 0 ), Lack of Fit( 0 ) )
);
obj1[1] << Local Data Filter( Add Filter( columns( :sex ), Include( 1 ), Where( :sex == "F" ) ) );
obj1[2] << Local Data Filter( Add Filter( columns( :sex ), Include( 1 ), Where( :sex == "F" ) ) );
obj1[3] << Local Data Filter( Add Filter( columns( :sex ), Include( 1 ), Where( :sex == "F" ) ) );
obj1[4] << Local Data Filter( Add Filter( columns( :sex ), Include( 1 ), Where( :sex == "F" ) ) );
obj1[5] << Local Data Filter( Add Filter( columns( :sex ), Include( 1 ), Where( :sex == "F" ) ) );
obj1[6] << Local Data Filter( Add Filter( columns( :sex ), Include( 1 ), Where( :sex == "F" ) ) );
```

**Code Explanation**:

1. Open data table;
2. Fit model with height effect.
3. Set weight as response variable.
4. Group by age.
5. Use standard least squares personality.
6. Generate minimal report.
7. Plot regression without plot.
8. Exclude lack of fit test.
9. Apply local data filter for females.
10. Repeat filter application for all subreports.



### Example 293
> **Summary**: Runs a linear regression model to analyze the relationship between age, height, and weight, with interactive filtering by sex.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #DataFiltering, #ModelFitting, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model( Effects( :age ), Y( :height, :weight ), Personality( "Standard Least Squares" ), Emphasis( "Minimal Report" ), Run );
obj << Local Data Filter( Add Filter( columns( :sex ) ) );
```

**Code Explanation**:

1. Open table.
2. Define model effects.
3. Specify response variables.
4. Set personality type.
5. Choose report emphasis.
6. Run the model.
7. Add local data filter.
8. Specify filter columns.



### Example 294
> **Summary**: Fits a linear model to a data table, generating two plots: Actual by Predicted and Pareto Plot of Transformed Estimates.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #DataVisualization, #StatisticalModeling, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :weight ),
	Effects( :height, :sex, :age ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( :weight << {Pareto Plot( 1 ), Plot Actual by Predicted( 1 )} )
);
rpt = obj << report;
Try(
	plot1 = rpt[Outline Box( "Actual by Predicted Plot" )] << get title;
	plot2 = rpt[Outline Box( "Pareto Plot of Transformed Estimates" )] << get title;
);
```

**Code Explanation**:

1. Open data table;
2. Fit linear model.
3. Set response variable.
4. Include predictor variables.
5. Choose standard least squares.
6. Minimal report emphasis.
7. Run Pareto plot.
8. Run actual by predicted plot.
9. Retrieve report object.
10. Try to get plot titles.



### Example 295
> **Summary**: Runs the fitting and running of two linear regression models, one for the overall data set and another by sex, using standard least squares.

<!-- Keywords: #JSLScriptingLanguage, #LinearRegression, #ModelFitting, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
obj1 = dt1 << Fit Model( Y( :height ), Effects( :weight ), Personality( "Standard Least Squares" ), Run, Run );
obj2 = dt1 << Fit Model( Y( :height ), Effects( :weight ), By( :sex ), Personality( "Standard Least Squares" ), Run, Run );
```

**Code Explanation**:

1. Open data table.
2. Fit model on height.
3. Use weight as effect.
4. Apply standard least squares.
5. Run the model.
6. Repeat model run.
7. Create second model object.
8. Fit model by sex.
9. Apply standard least squares again.
10. Run the second model.



### Example 296
> **Summary**: Fits a linear model to predict weight based on height, with a local data filter applied to include only female observations.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #LinearRegression, #LocalDataFilter, #DataFiltering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model( Effects( :height ), Y( :weight ), Personality( "Standard Least Squares" ), Emphasis( "Minimal Report" ), Run );
obj1 << Local Data Filter( Add Filter( columns( :sex ), Include( 1 ), Where( :sex == "F" ) ) );
```

**Code Explanation**:

1. Open data table.
2. Fit linear model.
3. Specify height as effect.
4. Set weight as response.
5. Choose standard least squares.
6. Request minimal report.
7. Run the model.
8. Add local data filter.
9. Filter by sex column.
10. Include only females.



### Example 297
> **Summary**: Runs a standard least squares model to analyze the relationship between height and weight, with automatic recalculation enabled and specific rows excluded.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #AutomaticRecalculation, #RowSelection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Effects( :height ),
	Y( :weight ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( Index( 2, 4 ) );
dt << Exclude;
```

**Code Explanation**:

1. Open data table.
2. Define model effects.
3. Set response variable.
4. Choose modeling personality.
5. Set report emphasis.
6. Run the model.
7. Enable automatic recalculation.
8. Select specific rows.
9. Exclude selected rows.



### Example 298
> **Summary**: Fits and creates reports for two linear models with different effects, retrieving selected options from a combo box.

<!-- Keywords: #JSLScripting, #LinearModeling, #ComboBoxInteraction, #DataAnalysis, #JMPScripting -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
obj1 = dt1 << Fit Model( Y( :ls ), Personality( "Standard Least Squares" ), );
rpt1 = obj1 << report;
test01 = rpt1[Combo Box( 2 )] << get selected;
obj1 << Effects( :v1, :v2, :v3, :v4, :v5 );
test1 = rpt1[Combo Box( 2 )] << get selected;
obj2 = dt1 << Fit Model( Y( :ls ), Personality( "Standard Least Squares" ), );
rpt2 = obj2 << report;
test02 = rpt2[Combo Box( 2 )] << get selected;
obj2 << Effects( :v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12 );
test2 = rpt2[Combo Box( 2 )] << get selected;
```

**Code Explanation**:

1. Open data table;
2. Fit model with Y: ls.
3. Retrieve report object.
4. Get selected option from ComboBox.
5. Add effects v1-v5 to model.
6. Get updated selected option.
7. Fit another model with Y: ls.
8. Retrieve new report object.
9. Get selected option from ComboBox.
10. Add effects v1-v12 to model.



### Example 299
> **Summary**: Fits a Nominal Logistic model to predict Edibility based on Gills, Rings, and Color, without likelihood ratio tests or Wald tests.

<!-- Keywords: #FitModel, #NominalLogistic, #JSLScripting, #PredictiveModeling, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :Edibility ),
	Target Level( "edible" ),
	Effects( :Gills, :Rings, :Color ),
	Personality( Nominal Logistic ),
	Run( Likelihood Ratio Tests( 0 ), Wald Tests( 0 ) )
);
t1 = Tick Seconds();
obj << Odds Ratios( 1 );
t2 = Tick Seconds();
test = t2 - t1;
Close( dt, no save );
b group1 = {"Prob for sex", "Prob for sex 2", "Prob for sex 3"};
```

**Code Explanation**:

1. Open data table;
2. Launch Fit Model platform.
3. Set Edibility as response variable.
4. Specify "edible" as target level.
5. Include Gills, Rings, Color as effects.
6. Choose Nominal Logistic personality.
7. Run model without likelihood and Wald tests.
8. Record start time.
9. Add Odds Ratios to model.
10. Record end time and calculate duration.



### Example 300
> **Summary**: Fits and saves a nominal logistic model to predict probabilities for specific target levels, incorporating height and weight effects, and retrieving column group names.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #ProbabilityFormula, #ColumnGroups, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model( Y( :sex ), Target Level( "F" ), Effects( :height, weight ), Personality( Nominal Logistic ), Run() );
obj1 << Save Probability Formula( 1 );
obj1 << Save Probability Formula( 1 );
obj1 << Save Probability Formula( 1 );
group1 = dt << Get Column Groups Names;
b group2 = {"Prob for sex", "Prob for sex 2", "Prob for sex 3", "Prob for age", "Prob for age 2"};
```

**Code Explanation**:

1. Open data table.
2. Fit nominal logistic model.
3. Set target level to "F".
4. Include height and weight effects.
5. Run the model.
6. Save probability formula.
7. Save probability formula again.
8. Save probability formula once more.
9. Retrieve column group names.
10. Define group names.



### Example 301
> **Summary**: Fits an ordinal logistic model, calculation of odds ratios, and report generation for a new test table.

<!-- Keywords: #JSLScripting, #OrdinalLogisticRegression, #NominalLogisticRegression, #OddsRatios, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj2 = dt << Fit Model( Y( :age ), Effects( :height, weight ), Personality( Ordinal Logistic ), Run() );
obj2 << Save Probability Formula( 1 );
obj2 << Save Probability Formula( 1 );
group2 = dt << Get Column Groups Names;
Close( dt, no save );
dt = New Table( "Test",
	New Column( "Y", Character, Nominal, Values( {"A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B", "B", "B"} ) ),
	New Column( "X1", Nominal, Values( [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1] ) ),
	New Column( "X2", Nominal, Values( [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1] ) ),
	New Column( "X3", Nominal, Values( [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] ) )
);
obj = dt << Fit Model( Y( :Y ), Target Level( "A" ), Effects( :X1, :X2, :X3 ), Personality( Nominal Logistic ), Run() );
obj << Odds Ratios( 1 );
rpt = Report( obj );
rpt[Outline Box( "Odds Ratios for X3" )][Number Col Box( 2 )] << Hide( 0 );
chi2 = rpt[Outline Box( "Odds Ratios for X3" )][Number Col Box( 2 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Fit ordinal logistic model.
3. Save probability formula twice.
4. Retrieve column group names.
5. Close data table without saving.
6. Create new test table.
7. Fit nominal logistic model.
8. Calculate odds ratios.
9. Retrieve report object.
10. Hide specific report element.



### Example 302
> **Summary**: Fits a nominal logistic model to predict car type based on weight, turning circle, and displacement for Japanese data, saving probability formulas and extracting values.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #DataFiltering, #ProbabilityFormula, #ModelFitting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :Type ),
	Effects( :Weight, :Turning Circle, :Displacement ),
	Where( :Country == "Japan" ),
	Personality( "Nominal Logistic" ),
	Run
);
obj1 << Save Probability Formula( 1 );
b save1 = (dt:Name( "Prob[Sporty] Where" ) << get values) || (dt:Name( "Prob[Small] Where" ) << get values) || (dt
:Name( "Prob[Compact] Where" ) << get values) || (dt:Name( "Prob[Medium] Where" ) << get values) || (dt:Name( "Prob[Large] Where" ) <<
get values);
```

**Code Explanation**:

1. Open table.
2. Fit nominal logistic model.
3. Specify response variable.
4. Define effect variables.
5. Filter data for Japan.
6. Use nominal logistic personality.
7. Run the model.
8. Save probability formula.
9. Extract probability values.
10. Concatenate probability arrays.



### Example 303
> **Summary**: Fits a nominal logistic model to predict car type based on weight, turning circle, and displacement, with data filtered by country 'USA', and saves the probability formula.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #DataFiltering, #ProbabilityFormula, #ModelFitting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :Type ),
	Effects( :Weight, :Turning Circle, :Displacement ),
	Where( :Country == "USA" ),
	Personality( "Nominal Logistic" ),
	Run
);
obj1 << Save Probability Formula( 1 );
b save2 = (dt:Name( "Prob[Sporty] Where" ) << get values) || (dt:Name( "Prob[Small] Where" ) << get values) || (dt
:Name( "Prob[Compact] Where" ) << get values) || (dt:Name( "Prob[Medium] Where" ) << get values) || (dt:Name( "Prob[Large] Where" ) <<
get values);
```

**Code Explanation**:

1. Open data table.
2. Define model object.
3. Set response variable.
4. Specify model effects.
5. Filter data for USA.
6. Choose nominal logistic personality.
7. Run the model.
8. Save probability formula.
9. Extract probability values.
10. Combine probability arrays.



### Example 304
> **Summary**: Fits a nominal logistic model to a data table, specifying response and effect variables, applying a filter condition, and saving probability formulas.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #DataFiltering, #ProbabilityFormulas, #ModelFitting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :Type ),
	Effects( :Weight, :Turning Circle, :Displacement ),
	Where( :Country == "Other" ),
	Personality( "Nominal Logistic" ),
	Run
);
obj1 << Save Probability Formula( 1 );
b save3 = (dt:Name( "Prob[Sporty] Where" ) << get values) || (dt:Name( "Prob[Small] Where" ) << get values) || (dt
:Name( "Prob[Compact] Where" ) << get values) || (dt:Name( "Prob[Medium] Where" ) << get values) || (dt:Name( "Prob[Large] Where" ) <<
get values);
```

**Code Explanation**:

1. Open data table.
2. Fit nominal logistic model.
3. Specify response variable.
4. Define effect variables.
5. Apply filter condition.
6. Set model personality.
7. Execute model fit.
8. Save probability formula.
9. Retrieve probability values.
10. Concatenate probability arrays.



### Example 305
> **Summary**: Analyze a data table to fit a nominal logistic model by country, generating probability values for different categories and matching countries to specific groups.

<!-- Keywords: #JSLScriptingLanguage, #NominalLogisticModel, #DataAnalysis, #ProbabilityFormula, #CountryByGroup -->

**Code**:
```jsl
dt = Open("data_table.jmp");
val = dt:Country << get values;
obj = dt << Fit Model(
	Y( :Type ),
	Effects( :Weight, :Turning Circle, :Displacement ),
	by( :Country ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Probability Formula( 1 );
save = (dt:Name( "Prob[Sporty] By Country" ) << get values) || (dt:Name( "Prob[Small] By Country" ) << get values) || (dt
:Name( "Prob[Compact] By Country" ) << get values) || (dt:Name( "Prob[Medium] By Country" ) << get values) || (dt
:Name( "Prob[Large] By Country" ) << get values);
For( i = 1, i <= N Items( val ), i++,
	Match( val[i], "Japan", , "USA", , "Other", )
);
```

**Code Explanation**:

1. Open data table.
2. Retrieve country values.
3. Fit nominal logistic model.
4. Save probability formula.
5. Concatenate probability values.
6. Loop through country values.
7. Match country to category.



### Example 306
> **Summary**: Fits logistic regression models and extracting parameter estimates from a JMP data table, with the ability to switch between target levels.

<!-- Keywords: #JMPScriptingLanguage, #LogisticRegression, #DataAnalysis, #ParameterEstimation, #ModelFitting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model( Y( :ready ), Target Level( "Ready" ), Effects( :heat, soak ), Freq( :count ), Run );
rpt1 = obj1 << report;
note1 = rpt1[Outline Box( "Parameter Estimates" )][Text Box( 1 )] << get text;
obj2 = dt << Fit Model( Y( :ready ), Target Level( "Not Ready" ), Effects( :heat, soak ), Freq( :count ), Choose High Target( 1 ), Run );
rpt2 = obj2 << report;
note2 = rpt2[Outline Box( "Parameter Estimates" )][Text Box( 1 )] << get text;
Close( dt, no save );
b note1 = "Low/High";
```

**Code Explanation**:

1. Open table.
2. Fit logistic regression.
3. Extract parameter estimates.
4. Fit logistic regression.
5. Extract parameter estimates.
6. Close table.
7. Set note text.



### Example 307
> **Summary**: Fits and analyzes nominal logistic models for edible and ordinal logistic models for age, utilizing JMP's Fit Model platform to generate probability formulas and odds ratios.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticModel, #OrdinalLogisticModel, #ProbabilityFormulas, #OddsRatios -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :Edibility ),
	Target Level( "edible" ),
	Effects( :Gills, :Rings, :Color ),
	Personality( Nominal Logistic ),
	Run( Likelihood Ratio Tests( 0 ), Wald Tests( 0 ) )
);
t1 = Tick Seconds();
obj << Odds Ratios( 1 );
t2 = Tick Seconds();
test = t2 - t1;
Close( dt, no save );
b group1 = {"Prob for sex", "Prob for sex 2", "Prob for sex 3"};
dt = Open("data_table.jmp");
obj1 = dt << Fit Model( Y( :sex ), Target Level( "F" ), Effects( :height, weight ), Personality( Nominal Logistic ), Run() );
obj1 << Save Probability Formula( 1 );
obj1 << Save Probability Formula( 1 );
obj1 << Save Probability Formula( 1 );
group1 = dt << Get Column Groups Names;
b group2 = {"Prob for sex", "Prob for sex 2", "Prob for sex 3", "Prob for age", "Prob for age 2"};
dt = Open("data_table.jmp");
obj2 = dt << Fit Model( Y( :age ), Effects( :height, weight ), Personality( Ordinal Logistic ), Run() );
obj2 << Save Probability Formula( 1 );
obj2 << Save Probability Formula( 1 );
group2 = dt << Get Column Groups Names;
```

**Code Explanation**:

1. Open data table;
2. Fit nominal logistic model.
3. Set target level to edible.
4. Include Gills, Rings, Color effects.
5. Run model with tests disabled.
6. Calculate odds ratios.
7. Measure time for odds ratios.
8. Close data_table.jmp without saving.
9. Define probability groups for sex.
10. Open data table;
11. Fit nominal logistic model for sex.
12. Set target level to F.
13. Include height, weight effects.
14. Run model.
15. Save probability formulas.
16. Get column group names.
17. Define probability groups for age.
18. Open data table;
19. Fit ordinal logistic model for age.
20. Include height, weight effects.
21. Run model.
22. Save probability formulas.
23. Get column group names.



### Example 308
> **Summary**: Fits and creates reports for logistic models for 'Ready' and 'Not Ready' states, retrieving parameter estimates from the data table.

<!-- Keywords: #JMPScriptingLanguage, #LogisticRegression, #DataTable, #FitModel, #Report -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model( Y( :ready ), Target Level( "Ready" ), Effects( :heat, soak ), Freq( :count ), Run );
rpt1 = obj1 << report;
note1 = rpt1[Outline Box( "Parameter Estimates" )][Text Box( 1 )] << get text;
obj2 = dt << Fit Model( Y( :ready ), Target Level( "Not Ready" ), Effects( :heat, soak ), Freq( :count ), Choose High Target( 1 ), Run );
rpt2 = obj2 << report;
note2 = rpt2[Outline Box( "Parameter Estimates" )][Text Box( 1 )] << get text;
```

**Code Explanation**:

1. Open data table.
2. Fit logistic model for "Ready".
3. Retrieve parameter estimates.
4. Fit logistic model for "Not Ready".
5. Retrieve parameter estimates.



### Example 309
> **Summary**: Fits a Nominal Logistic model to predict sex based on weight and height, with likelihood ratio tests and Wald tests enabled.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #LikelihoodRatioTests, #WaldTests, #FitModel -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Fit Model(
	Y( :sex ),
	Target Level( "F" ),
	Effects( :weight, :height ),
	Personality( "Nominal Logistic" ),
	Run( Likelihood Ratio Tests( 0 ), Wald Tests( 1 ), Specify Profit Matrix( [1 -1, -1 1, . .], ) )
);
```

**Code Explanation**:

1. Open data table.
2. Fit model using sex as response.
3. Set target level to female.
4. Include weight and height as effects.
5. Use Nominal Logistic personality.
6. Run Likelihood Ratio Tests.
7. Enable Wald Tests.
8. Specify profit matrix for analysis.



### Example 310
> **Summary**: Fits and creates reports for a nominal logistic model with indicator parameterization, extracting parameter estimates from the output.

<!-- Keywords: #JSLScriptingLanguage, #NominalLogisticRegression, #IndicatorParameterization, #FitModel, #JMPReporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = Fit Model(
	Y( :Gender ),
	Target Level( "F" ),
	Effects( :Brush Delimited, :Toothpaste Cost ),
	Personality( "Nominal Logistic" ),
	Run( Likelihood Ratio Tests( 0 ), Wald Tests( 0 ), Indicator Parameterization Estimates( 1 ) )
);
rpt1 = obj1 << report;
parm1 = rpt1[Outline Box( "Parameter Estimates" )][Table Box( 1 )] << get as matrix;
parm2 = rpt1[Outline Box( "Indicator Function Parameterization" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Fit nominal logistic model.
3. Set response variable.
4. Specify target level.
5. Define effects.
6. Choose personality type.
7. Run likelihood ratio tests.
8. Run Wald tests.
9. Enable indicator parameterization.
10. Extract parameter estimates.



### Example 311
> **Summary**: Fits a Nominal Logistic model to a data table, generating a report with ROC and Lift curves.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #ROCcurve, #LiftCurve, #FitModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :Type ),
	Effects( :Weight, :Turning Circle, :Displacement, :Horsepower ),
	Personality( "Nominal Logistic" ),
	Run( Wald Tests( 0 ), ROC Curve( 1 ), Lift Curve( 1 ) )
);
rpt = obj << report;
roc1 = rpt["Receiver Operating Characteristic on Training Data"][Table Box( 1 )] << get as matrix;
lift1 = (rpt["Lift Curve on Training Data"][FrameBox( 1 )] << FindSegs( LineSeg )) << get x values;
```

**Code Explanation**:

1. Open data table.
2. Launch Fit Model platform.
3. Set response variable.
4. Add predictor variables.
5. Choose Nominal Logistic personality.
6. Run model with specified options.
7. Retrieve model report.
8. Extract ROC curve data.
9. Extract Lift curve data.
10. Get x-values from Lift curve.



### Example 312
> **Summary**: Fits a Nominal Logistic model to a data table, specifying response variables and predictor effects while suppressing reports and adding confidence intervals.

<!-- Keywords: #JSLScriptingLanguage, #NominalLogisticRegression, #DataTableAnalysis, #ModelFitting, #ConfidenceIntervals -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Fit Model(
	Y(
		:I am working on my career, :I want to see the world, :My home needs some major improvements,
		:I have vast interests outside of work, :I want to get my debt under control, :I come from a large family
	),
	Effects( :Gender, :Birth Year, :Single Status ),
	Personality( "Nominal Logistic" ),
	Run( Suppress Reports( 1 ) )
);
obj << Confidence Intervals( 1 );
```

**Code Explanation**:

1. Open data table.
2. Fit Nominal Logistic model.
3. Specify response variables.
4. Define predictor effects.
5. Set personality to Nominal Logistic.
6. Suppress reports.
7. Run the model.
8. Add confidence intervals.



### Example 313
> **Summary**: Fits and creates reports for a Nominal Logistic model to analyze the relationship between 'country', 'size', and 'type' variables, while controlling for 'marital status' and 'age'.

<!-- Keywords: #JSL, #NominalLogisticModel, #FitModel, #DataTables, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Fit Model(
	Y( :country, :size, :type ),
	Effects( :marital status, :age ),
	Personality( "Nominal Logistic" ),
	Run( Suppress Reports, Results in Data Tables )
);
dt2 = Data Table("data_table");
dt3 = Data Table("data_table");
dt4 = Data Table("data_table");
val1 = dt2:Y << get values;
colname1 = Column( dt2, 11 ) << get name;
Close( dt2, no save );
Close( dt3, no save );
Close( dt4, no save );
Close( dt, no save );
b y3 count 1 = [8, 8, 6, 6, 5, 5, 3, 3, 0];
b y3 count 0 = [3, 3, 2, 2, 0];
dt = New Table( "Test",
	New Column( "y1", numeric, nominal, values( [0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, ., ., ., ., ., ., ., ., 1, 1, 1, 1, 1, 1] ) ),
	New Column( "x1", numeric, values( [5, 9, 7, 8, 4, 5, 6, 7, 4, 9, 9, 2, 3, 5, 9, 10, 1, 4, 5, ., ., ., ., ., .] ) )
);
obj1 = dt << Fit Model( Y( :y1 ), Effects( :x1 ), Target Level( "1" ), Run( Decision Threshold( 1 ) ) );
rpt1 = obj1 << report;
```

**Code Explanation**:

1. Open data table;
2. Fit Nominal Logistic model.
3. Extract effect tests data.
4. Extract parameter estimates data.
5. Extract statistics data.
6. Close extracted data tables.
7. Close original data table.
8. Define count arrays.
9. Create new "Test" table.
10. Fit logistic model on data_table data.



### Example 314
> **Summary**: Fits a Nominal Logistic model to predict sex based on age and height, generating a confusion matrix and decision threshold.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #ConfusionMatrix, #DecisionThreshold, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:age[3 :: 4] = .;
 
obj = dt << Fit Model(
	Y( :sex ),
	Effects( :age, :height ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ), Decision Threshold( 1 ) )
);
rpt = obj << report;
mtrx1 = rpt["Confusion Matrix"][Table Box( 1 )] << get as matrix;
mtrx2 = rpt["Decision Thresholds"]["Training"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Set age values 3-4 to missing.
3. Fit Nominal Logistic model.
4. Specify sex as response variable.
5. Include age and height as effects.
6. Generate confusion matrix.
7. Display decision threshold.
8. Extract confusion matrix data.
9. Retrieve decision thresholds data.



### Example 315
> **Summary**: Fits multiple logistic models to a data table, extracting decision thresholds, and saving results in data tables.

<!-- Keywords: #JMPScriptingLanguage, #LogisticRegression, #DataModeling, #DecisionThresholds, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Fit Model(
	Y(
		:I am working on my career, :I want to see the world, :My home needs some major improvements,
		:I have vast interests outside of work, :I want to get my debt under control, :I come from a large family
	),
	Effects( :Gender, :Birth Year, :Single Status ),
	Personality( "Nominal Logistic" ),
	Run( Suppress Reports( 1 ) )
);
obj << Confidence Intervals( 1 );
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj1 = dt << Fit Model(
		Y( :Y Binary ),
		Effects( :Age, :Gender, BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Validation( :Validation ),
		Personality( "Nominal Logistic" ),
		Target Level( "High" ),
		Run( Decision Threshold( 1 ) )
	);
	rpt1 = obj1 << report;
	test1 = rpt1["Decision Thresholds"][Table Box( 1 )] << get as matrix;
	obj2 = dt << Fit Model(
		Y( :Y Binary ),
		Effects( :Age, :Gender, BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Validation( :Validation ),
		Personality( "Nominal Logistic" ),
		Run( Decision Threshold( 1 ) )
	);
	rpt2 = obj2 << report;
	test2 = rpt2["Decision Thresholds"][Table Box( 1 )] << get as matrix;
	Close( dt, no save );
);
dt = Open("data_table.jmp");
dt << Fit Model(
	Y( :country, :size, :type ),
	Effects( :marital status, :age ),
	Personality( "Nominal Logistic" ),
	Run( Suppress Reports, Results in Data Tables )
);
dt2 = Data Table("data_table");
dt3 = Data Table("data_table");
dt4 = Data Table("data_table");
val1 = dt2:Y << get values;
colname1 = Column( dt2, 11 ) << get name;
```

**Code Explanation**:

1. Open data table;
2. Fit nominal logistic model.
3. Add confidence intervals.
4. Check JMP version.
5. Open data table;
6. Fit model for binary outcome.
7. Extract decision thresholds.
8. Fit another model for comparison.
9. Extract second set of decision thresholds.
10. Close data_table.jmp without saving.
11. Open data table;
12. Fit nominal logistic model.
13. Save results in data tables.
14. Access "Fit Nom Effect Tests".
15. Access "Fit Nom Parameter Estimates".
16. Access "Fit Nom Statistics".
17. Retrieve Y values.
18. Get column name.



### Example 316
> **Summary**: Fits and analyzes ordinal logistic models to predict thread wear based on size of load, with confidence intervals, odds ratios, and parameter estimates.

<!-- Keywords: #JMPScriptingLanguage, #OrdinalLogisticRegression, #ConfidenceIntervals, #OddsRatios, #ParameterEstimates -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model( Y( :Thread Wear ), Effects( :"Size of Load (lbs)"n ), Personality( "Ordinal Logistic" ), Run );
obj1 << Confidence Intervals( 1 );
obj1 << Odds Ratios( 1 );
rpt1 = obj1 << report;
parmest1 = rpt1["Parameter Estimates"][Table Box( 1 )] << get as matrix;
unit OR1 = rpt1["Unit Odds Ratios"][Table Box( 1 )] << get as matrix;
obj2 = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Set Alpha Level( 0.05 ),
	Run
);
obj2 << Confidence Intervals( 0.1 );
rpt2 = obj2 << report;
parmest2 = rpt2["Parameter Estimates"][Table Box( 1 )] << get as matrix;
parmest2 label = rpt2["Parameter Estimates"][Table Box( 1 )] << get names;
obj2 << Odds Ratios( 1 );
unit OR2 = rpt2["Unit Odds Ratios"][Table Box( 1 )] << get as matrix;
unit OR2 label = rpt2["Unit Odds Ratios"][Table Box( 1 )] << get names;
obj3 = dt << Fit Model( Y( :Thread Wear ), Effects( :"Size of Load (lbs)"n ), Personality( "Ordinal Logistic" ), Run );
obj3 << Odds Ratios;
obj3 << Confidence Intervals( 0.1 );
rpt3 = obj3 << report;
unit OR3 = rpt3["Unit Odds Ratios"][Table Box( 1 )] << get as matrix;
unit OR3 label = rpt3["Unit Odds Ratios"][Table Box( 1 )] << get names;
parmest3 = rpt3["Parameter Estimates"][Table Box( 1 )] << get as matrix;
parmest3 label = rpt3["Parameter Estimates"][Table Box( 1 )] << get names;
obj4 = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run( Likelihood Ratio Tests( 0 ), Wald Tests( 1 ) )
);
obj4 << Odds Ratios( 1 );
obj4 << Confidence Intervals( 1 );
rpt4 = obj4 << report;
parmest1 = rpt1["Parameter Estimates"][Table Box( 1 )] << get as matrix;
unit OR4 = rpt4["Unit Odds Ratios"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Fit ordinal logistic model.
3. Enable confidence intervals.
4. Enable odds ratios.
5. Retrieve parameter estimates.
6. Retrieve unit odds ratios.
7. Fit ordinal logistic model again.
8. Set alpha level to 0.05.
9. Enable confidence intervals.
10. Retrieve parameter estimates and labels.
11. Enable odds ratios.
12. Retrieve unit odds ratios and labels.
13. Fit ordinal logistic model.
14. Enable odds ratios.
15. Enable confidence intervals.
16. Retrieve unit odds ratios and labels.
17. Retrieve parameter estimates and labels.
18. Fit ordinal logistic model.
19. Enable likelihood ratio tests.
20. Enable Wald tests.
21. Enable odds ratios.
22. Enable confidence intervals.
23. Retrieve parameter estimates.
24. Retrieve unit odds ratios.



### Example 317
> **Summary**: Fits an ordinal logistic model to a data table, generating odds ratios and confidence intervals for analysis.

<!-- Keywords: #JMPScriptingLanguage, #OrdinalLogisticRegression, #OddsRatios, #ConfidenceIntervals, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model( Y( :Thread Wear ), Effects( :"Size of Load (lbs)"n, :Method ), Personality( "Ordinal Logistic" ), Run );
obj1 << Confidence Intervals( 0.1 );
obj1 << Odds Ratios;
rpt1 = obj1 << report;
parmest1 = rpt1["Parameter Estimates"][Table Box( 1 )] << get as matrix;
unit OR1 = rpt1["Unit Odds Ratios"][Table Box( 1 )] << get as matrix;
OR1 = rpt1["Odds Ratios for Method"][Table Box( 1 )] << get as matrix;
obj2 = dt << Fit Model( Y( :Thread Wear ), Effects( :"Size of Load (lbs)"n, :Method ), Personality( "Ordinal Logistic" ), Run );
obj2 << Odds Ratios;
obj2 << Confidence Intervals( 0.1 );
rpt2 = obj2 << report;
parmest2 = rpt2["Parameter Estimates"][Table Box( 1 )] << get as matrix;
unit OR2 = rpt2["Unit Odds Ratios"][Table Box( 1 )] << get as matrix;
OR2 = rpt2["Odds Ratios for Method"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Fit ordinal logistic model.
3. Set confidence level to 0.1.
4. Calculate odds ratios.
5. Retrieve parameter estimates.
6. Retrieve unit odds ratios.
7. Retrieve odds ratios for method.
8. Fit ordinal logistic model again.
9. Calculate odds ratios.
10. Set confidence level to 0.1.



### Example 318
> **Summary**: Fits a parametric survival model to a data table, retrieving the title and text from the last window.

<!-- Keywords: #JMPScriptingLanguage, #ParametricSurvivalModel, #DataTableOperations, #WindowManagement, #TextExtraction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model( Personality( "Parametric Survival" ) );
winTtl = Window( N Items( Window() ) - 1 ) << get window title;
winObj = Window( N Items( Window() ) - 1 );
winTxt = winObj[Text Box( 4 )] << get text;
```

**Code Explanation**:

1. Open data table.
2. Fit parametric survival model.
3. Get last window title.
4. Get last window object.
5. Extract text from fourth text box.



### Example 319
> **Summary**: Fits two Partial Least Squares models with specified effects and validation methods, generating cross-validation statistics and saving validation results.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #ValidationMethods, #CrossValidationStatistics, #ModelFitting -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
obj1 = dt1 << Fit Model(
	Y( :ls, :ha, :dt ),
	Effects(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	),
	Center Polynomials( 0 ),
	Personality( "Partial Least Squares" ),
	Run(
		Set Random Seed( 123 ),
		Initial Number of Factors( 15 ),
		Validation Method( Holdback( 0.2 ), Initial Number of Factors( 15 ) ),
		Fit( Method( NIPALS ) )
	),
	SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 1 )} ) )
);
rpt1 = obj1 << report;
fitstat1 = rpt1["Crossvalidation"][Table Box( 1 )] << get as matrix;
obj1 << (Fit[1] << Save Validation);
obj2 = dt1 << Fit Model(
	Y( :ls, :ha, :dt ),
	Effects(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	),
	Validation( :Validation ),
	Center Polynomials( 0 ),
	Personality( "Partial Least Squares" ),
	Run( Fit( Method( NIPALS ) ) ),
	SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 1 )} ) )
);
rpt2 = obj2 << report;
fitstat2 = rpt2["Crossvalidation"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Fit model with specified effects.
3. Use Partial Least Squares personality.
4. Set random seed for reproducibility.
5. Specify initial number of factors.
6. Use holdback validation method.
7. Fit model using NIPALS method.
8. Close model launch outline box.
9. Retrieve cross-validation statistics.
10. Save validation results.



### Example 320
> **Summary**: Fits and creates reports for partial least squares models with variable importance plots, utilizing leave-one-out validation and multiple factor selection methods.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #VariableImportancePlot, #LeaveOneOutValidation, #FactorSelection -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
obj = dt2 << Fit Model(
	Y( :ls, :ha, :dt ),
	Effects(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	),
	Personality( "Partial Least Squares" ),
	Run(
		Validation Method( "Leave-One-Out" ),
		Fit( SVD( Classical ), Method( NIPALS ), Variable Importance Plot( 1 ), Set VIP Threshold( 1.5 ) ),
		Fit( SVD( Classical ), Method( SIMPLS ), Number of Factors( 3 ), Variable Importance Plot( 1 ), Set VIP Threshold( 0.95 ) )
	)
);
rpt = obj << report;
befAA = Associative Array( Window() << get window title );
obj << (Fit[1] << Make Model Using VIP( 1 ));
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
dl1 = Window( aftlst[1] );
item1 = dl1[ListBoxBox( 7 )] << get items;
dl1 << Close Window;
befAA = Associative Array( Window() << get window title );
obj << (Fit[2] << Make Model Using VIP( 1 ));
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
dl2 = Window( aftlst[1] );
item2 = dl2[ListBoxBox( 7 )] << get items;
dl2 << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Fit partial least squares model.
3. Set response variables.
4. Include all effects.
5. Use leave-one-out validation.
6. Fit using classical SVD and NIPALS method.
7. Generate variable importance plot.
8. Set VIP threshold to 1.5.
9. Fit using classical SVD and SIMPLS method.
10. Set number of factors to 3.
11. Generate variable importance plot.
12. Set VIP threshold to 0.95.
13. Create model using VIP for first fit.
14. Track changes in window titles.
15. Extract items from list box.
16. Close the window.
17. Create model using VIP for second fit.
18. Track changes in window titles.
19. Extract items from list box.
20. Close the window.



### Example 321
> **Summary**: Executes two Partial Least Squares (PLS) models with different methods and settings, generating Variable Importance Plots and retrieving items from ListBoxBoxes.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #VariableImportancePlot, #ListBoxBox, #DataTable -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
obj = dt2 << Fit Model(
	Y( :ls, :ha, :dt ),
	Effects(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	),
	Personality( "Partial Least Squares" ),
	Run(
		Validation Method( "Leave-One-Out" ),
		Fit( Method( NIPALS ), Variable Importance Plot( 1 ), Set VIP Threshold( 1.5 ) ),
		Fit( Method( SIMPLS ), Number of Factors( 3 ), Variable Importance Plot( 1 ), Set VIP Threshold( 0.95 ) )
	)
);
rpt = obj << report;
befAA = Associative Array( Window() << get window title );
obj << (Fit[1] << Make Model Using VIP( 1 ));
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
dl1 = Window( aftlst[1] );
item1 = dl1[ListBoxBox( 7 )] << get items;
dl1 << Close Window;
befAA = Associative Array( Window() << get window title );
obj << (Fit[2] << Make Model Using VIP( 1 ));
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
dl2 = Window( aftlst[1] );
item2 = dl2[ListBoxBox( 7 )] << get items;
dl2 << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Launch Fit Model platform.
3. Set response variables: ls, ha, dt.
4. Include all v1-v27 as effects.
5. Choose Partial Least Squares personality.
6. Run model with Leave-One-Out validation.
7. Fit using NIPALS method.
8. Generate Variable Importance Plot.
9. Set VIP threshold to 1.5.
10. Fit using SIMPLS method.
11. Specify 3 factors.
12. Generate Variable Importance Plot.
13. Set VIP threshold to 0.95.
14. Create model using NIPALS VIP.
15. Capture window titles before creation.
16. Retrieve items from ListBoxBox.
17. Close the window.
18. Create model using SIMPLS VIP.
19. Capture window titles before creation.
20. Retrieve items from ListBoxBox.
21. Close the window.



### Example 322
> **Summary**: Fits a proportional hazard model to analyze the relationship between age, diagnosis time, KPS, and cell type on patient survival time.

<!-- Keywords: #JMPScriptingLanguage, #ProportionalHazardModel, #SurvivalAnalysis, #CoxRegression, #DataScience -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
SASllike = 1011.7679126;
SASWaldChiSq = [0.3788401066, 0.1171207076, 33.927925265, 17.581698537];
SASage = [-0.005609572, 0.0091138477, 0.9944061321];
SASdiag = [0.0027993762, 0.0081798326, 1.0028032981];
SASkps = [-0.031655029, 0.005434556, 0.9688407461];
SASgroup1 = [1.1749616964, 0.2953908715, 3.2380189137];
SASgroup2 = [0.321381871, 0.2766246669, 1.3790320927];
SASgroup3 = [0.7157058488, 0.2535332216, 2.0456300784];
obj = dt2 << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time, :KPS, :Cell Type ),
	Personality( "Proportional Hazard" ),
	Censor( :censor ),
	Run Model( Risk Ratios( 1 ) )
);
rpt = obj << report;
vallist = (rpt[Number Col Box( "-LogLikelihood" )] << get as matrix);
vallist = (rpt[Outline Box( "Parameter Estimates" )][Table Box( 1 )] << get as matrix);
vallist = (rpt[Outline Box( "Effect Likelihood Ratio Tests" )][Table Box( 1 )] << get as matrix);
```

**Code Explanation**:

1. Open data table.
2. Define SAS likelihood value.
3. Define SAS Wald Chi-Square values.
4. Define SAS age coefficients.
5. Define SAS diagnosis coefficients.
6. Define SAS KPS coefficients.
7. Define SAS group1 coefficients.
8. Define SAS group2 coefficients.
9. Define SAS group3 coefficients.
10. Fit proportional hazard model.



### Example 323
> **Summary**: Fits and creates reports for two proportional hazard models, extracting parameter estimates from each model's output.

<!-- Keywords: #JMPScriptingLanguage, #ProportionalHazardModel, #FitModel, #ParameterEstimates, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :Time ),
	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),
	No Intercept,
	Personality( "Proportional Hazard" ),
	Censor( :censor ),
	Run( Risk Ratios( 1 ) )
);
rpt1 = obj1 << report;
est1 = (rpt1[Outline Box( "Parameter Estimates" )][Table Box( 1 )] << get as matrix)[0, 1 :: 4];
obj2 = dt << Fit Model(
	Y( :Time ),
	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),
	Personality( "Proportional Hazard" ),
	Censor( :censor ),
	Run( Risk Ratios( 1 ) )
);
rpt2 = obj2 << report;
est2 = (rpt2[Outline Box( "Parameter Estimates" )][Table Box( 1 )] << get as matrix)[0, 1 :: 4];
```

**Code Explanation**:

1. Open table.
2. Fit proportional hazard model.
3. Extract parameter estimates.
4. Fit proportional hazard model again.
5. Extract parameter estimates.



### Example 324
> **Summary**: Fits a proportional hazard model to a data table, extracting estimates and converting them to a matrix.

<!-- Keywords: #JMPScriptingLanguage, #ProportionalHazardModel, #FitModel, #DataTableAnalysis, #MatrixOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
plat = dt << Fit Model(
	Y( :Time ),
	Effects( :Treatment, :Cell Type, :Age ),
	Censor( :censor ),
	Personality( "Proportional Hazard" ),
	Run Model
);
r = Report( plat );
Actual = r[Number Col Box( "Estimate" )] << GetAsMatrix;
```

**Code Explanation**:

1. Open data table.
2. Launch Fit Model platform.
3. Set response variable.
4. Add effects to model.
5. Specify censoring variable.
6. Choose Proportional Hazard personality.
7. Run the model.
8. Retrieve report object.
9. Extract Estimate column box.
10. Convert estimates to matrix.



### Example 325
> **Summary**: Fits a proportional hazard model to analyze the relationship between days and group, while accounting for censoring, and generates a report with unit and range risk ratios.

<!-- Keywords: #JMPScriptingLanguage, #ProportionalHazardModel, #Censoring, #RiskRatios, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
plat = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run( Unit Risk Ratios( 1 ), Range Risk Ratios( 1 ) ), 
);
r = Report( plat );
Actual = r["Whole Model"][Table Box( 3 )] << GetAsMatrix;
```

**Code Explanation**:

1. Open data table.
2. Fit proportional hazard model.
3. Set response variable.
4. Include group effect.
5. Specify censor variable.
6. Run unit risk ratios.
7. Run range risk ratios.
8. Retrieve report object.
9. Access whole model summary.
10. Extract third table box as matrix.



### Example 326
> **Summary**: Fits a proportional hazard model to analyze the relationship between Time, Treatment, Cell Type, and Age, while accounting for censoring.

<!-- Keywords: #JMPScriptingLanguage, #ProportionalHazardModel, #SurvivalAnalysis, #Censoring, #RiskRatios -->

**Code**:
```jsl
dt = Open("data_table.jmp");
plat = dt << Fit Model(
	Y( :Time ),
	Effects( :Treatment, :Cell Type, :Age ),
	Censor( :censor ),
	Personality( "Proportional Hazard" ),
	Run Model( Risk Ratios( 1 ) )
);
r = Report( plat );
Actual = r[Number Col Box( "Estimate" )] << GetAsMatrix;
```

**Code Explanation**:

1. Open data table.
2. Launch Fit Model platform.
3. Set response variable.
4. Specify model effects.
5. Define censor variable.
6. Choose proportional hazard personality.
7. Run the model with risk ratios.
8. Retrieve report object.
9. Extract estimate column box.
10. Convert estimates to matrix.



### Example 327
> **Summary**: Fits a linear model to predict outcomes, extracting variance components, parameter estimates, and test results from a data table.

<!-- Keywords: #JMPScriptingLanguage, #LinearModel, #REMLMethod, #VarianceComponents, #ParameterEstimation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = Fit Model(
	Y( :Y ),
	Effects( :Age & Excluded, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Random Effects( :Gender, :BP & BSpline( 3, Degree( 3 ) ) ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
rpt1 = obj1 << report;
covparms = rpt1["REML Variance Component Estimates"][Table Box( 1 )] << get as matrix;
parmest1 = rpt1["Parameter Estimates"][Table Box( 1 )] << get as matrix;
tests3 = rpt1["Fixed Effect Tests"][Table Box( 1 )] << get as matrix;
obj1 << Predicted Values;
obj1 << Prediction Formula;
obj1 << Std Error of Predicted;
obj1 << StdErr Pred Formula;
obj1 << Mean Confidence Interval;
obj1 << Residuals;
obj1 << Prediction and Interval Formulas;
obj1 << Conditional Pred Values;
obj1 << Conditional Pred Formula;
obj1 << Conditional Mean CI;
obj1 << Conditional Residuals;
saved1 = (dt << get as matrix)[0, 13 :: 27];
obj1 << Save Script to Report;
savedscript1 = rpt1[Text Box( 1 )] << get text;
```

**Code Explanation**:

1. Open data table;
2. Fit linear model.
3. Specify response variable.
4. Define fixed effects.
5. Define random effects.
6. Use REML method.
7. Generate report.
8. Extract variance components.
9. Extract parameter estimates.
10. Extract test results.



### Example 328
> **Summary**: Fits a model with specified effects, using Standard Least Squares personality and REML method, while suppressing certain plots and calculating a contrast CI.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #REMLMethod, #ContrastInterval -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( Standard Least Squares ),
	Emphasis( Effect Leverage ),
	Method( REML ),
	Run(
		:miles << {Analysis of Variance( 0 ), Lack of Fit( 0 ), Plot Actual by Predicted( 1 ), Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ), Plot Effect Leverage( 0 ), {:species * :season << {LSMeans Contrast( [1 0 0 0 -1 0 0 0] )}}}
	)
);
rpt = obj << report;
b contrast ci = (3 - 1.15470053837925 * t Quantile( 0.975, 11.1293146824999 )) |/ (3 + 1.15470053837925 *
t Quantile( 0.975, 11.1293146824999 ));
label1 = rpt["Test Detail"][String Col Box( 2 )] << get;
test1 = rpt["Test Detail"][Number Col Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Fit model with specified effects.
3. Use Standard Least Squares personality.
4. Focus on Effect Leverage emphasis.
5. Employ REML method for fitting.
6. Suppress Analysis of Variance.
7. Disable Lack of Fit analysis.
8. Enable Plot Actual by Predicted.
9. Disable other plots.
10. Calculate b contrast CI.



### Example 329
> **Summary**: Analyze a data table by fitting a model with specified parameters, including effects for sex and weight, and emphasizing effect leverage, while grouping by age.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #REMLMethod, #EffectLeverage, #ByGroup -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:height[38 :: 40] = .;
Fit Model(
	Y( :height ),
	Effects( :sex & Random, :weight ),
	Personality( Standard Least Squares ),
	Method( REML ),
	Emphasis( Effect Leverage ),
	By( age ),
	Run Model( 1 )
);
dt:height[2] = .;
```

**Code Explanation**:

1. Open data table.
2. Set height values to missing for rows 38-40.
3. Fit model with specified parameters.
4. Use height as response variable.
5. Include sex and weight as effects.
6. Use standard least squares personality.
7. Apply REML method.
8. Focus on effect leverage emphasis.
9. Group analysis by age.
10. Run the model.
11. Set height value to missing for row 2.



### Example 330
> **Summary**: Fits a linear model to predict ratings, incorporating machine and person effects, with standard least squares personality, and saves confidence intervals.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #ConfidenceIntervals, #MatrixConversion, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fm = Fit Model(
	Y( :rating ),
	Effects( :machine, :person & Random, :machine * :person & Random ),
	Personality( Standard Least Squares ),
	Run Model
);
fm << Save Columns( Mean Confidence Interval, Indiv Confidence Interval, Conditional Mean CI, Conditional Indiv CI );
m = dt << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Fit model with rating as response.
3. Include machine, person, and interaction effects.
4. Use standard least squares personality.
5. Run the model.
6. Save mean confidence interval.
7. Save individual confidence interval.
8. Save conditional mean confidence interval.
9. Save conditional individual confidence interval.
10. Convert data table to matrix.



### Example 331
> **Summary**: Fits a model to predict ratings, incorporating machine and person effects with randomization, and saving confidence intervals for mean and individual predictions.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #ConfidenceIntervals, #RandomEffects, #PredictiveModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fm = Fit Model(
	Y( :rating ),
	Effects( :machine, :person & Random, :machine * :person & Random ),
	Personality( Standard Least Squares ),
	Run Model
);
fm << Save Columns(
	Mean Confidence Interval( .01 ),
	Indiv Confidence Interval( .01 ),
	Conditional Mean CI( .01 ),
	Conditional Indiv CI( .01 )
);
rpt = fm << report;
m = dt << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Fit model with rating as response.
3. Include machine, person & Random, and interaction effects.
4. Use Standard Least Squares personality.
5. Run the model.
6. Save mean confidence intervals.
7. Save individual confidence intervals.
8. Save conditional mean CIs.
9. Save conditional individual CIs.
10. Get report from model.



### Example 332
> **Summary**: Fits a model with specified effects, generating a report, and extracting a prediction profiler outline box.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #ReportGeneration, #Profiler, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fm = Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( Standard Least Squares ),
	Run Model
);
fm << Profiler( 1 );
rpt = Report( fm );
jrn = rpt[Outline Box( "Prediction Profiler" )] << get journal;
```

**Code Explanation**:

1. Open table.
2. Fit model with specified effects.
3. Use standard least squares personality.
4. Run the model.
5. Create profiler.
6. Generate report from model.
7. Extract prediction profiler outline box.
8. Get journal from outline box.



### Example 333
> **Summary**: Analyze a data table using Fit Model to define a linear mixed effects model, generating minimal reports and saving standard error columns.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #LinearMixedEffects, #StandardLeastSquares, #REML -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fm = Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Carcass, :Tenderizer * :Carcass & Random, :Roasting Time, :Roasting Time * :Tenderizer ),
	Personality( Standard Least Squares ),
	Method( REML ),
	Set Alpha Level( 0.05 ),
	Emphasis( Minimal Report ),
	Run(
		:Y << {Analysis of Variance( 0 ), Lack of Fit( 0 ), Plot Actual by Predicted( 0 ), Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ), Plot Effect Leverage( 1 )}
	)
);
fm << Save Columns( StdErr Pred Formula );
fm << Save Columns( Std Error of Predicted );
fcol = dt:PredSE Y << get values;
nfcol = dt:StdErr Pred Y << get values;
form = dt:PredSE Y << Get Property( Formula );
dfz = dt:PredSE Y << Get Property( DF );
```

**Code Explanation**:

1. Open data table;
2. Define model with specified effects.
3. Use Standard Least Squares personality.
4. Apply REML method.
5. Set alpha level to 0.05.
6. Generate minimal report.
7. Configure analysis options.
8. Save standard error columns.
9. Retrieve predicted SE values.
10. Extract formula and degrees of freedom.



### Example 334
> **Summary**: Fits a mixed model to predict weight and height based on age, sex, and random effects, while disabling plots for both responses.

<!-- Keywords: #JSLScriptingLanguage, #MixedModel, #FitModel, #RandomEffects, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fm = Fit Model(
	Y( :weight, :height ),
	Effects( :age, :sex & Random ),
	Personality( Standard Least Squares ),
	Run(
		:weight << {Plot Actual by Predicted( 0 ), Plot Residual by Predicted( 0 ), Plot Effect Leverage( 0 )},
		:height << {Plot Actual by Predicted( 0 ), Plot Residual by Predicted( 0 ), Plot Effect Leverage( 0 )}
	)
);
Fit Group[1] << Profiler( 1 );
fg = ((fm[1] << get container) << parent) << parent;
pp = (fg << child) << sib;
jrn = pp << get journal;
Close( dt, No Save );
Try( fg << close window );
If( Contains( JMP Product Name(), "Pro" ) > 0,
	b log1 =
	"Warning: Fit Least Squares no longer supports radial effects. The Mixed Model personality of Fit Model does fit radial effects in a different way.",
	b log1 = "Warning: Fit Least Squares no longer supports radial effects."
);
dt = New Table( "Test",
	New Column( "X1", Values( [1, 1, 2, 2, 3, 4, 5, 8, 9] ) ),
	New Column( "X2", Values( [1, 4, 2, 15, 34, 41, 15, 80, 50] ) ),
	New Column( "Y", Values( [1, 2, 4, 5, 8, 7, 4, 9, 1] ) )
);
log1 = Log Capture(
	fm = Fit Model( Y( :Y ), Effects( Radial( :X1, :X2 ) & Random ), Personality( Standard Least Squares ), Method( REML ), Run )
);
Close( dt, No Save );
If( Contains( JMP Product Name(), "Pro" ) > 0,
	b log1 =
	"Warning: Fit Least Squares no longer supports radial effects. The Mixed Model personality of Fit Model does fit radial effects in a different way.",
	b log1 = "Warning: Fit Least Squares no longer supports radial effects."
);
Random Reset( 1111111 );
dt = New Table( "Test2",
	AddRows( 100 ),
	New Column( "X1", Formula( Random Uniform() ) ),
	New Column( "X2", Formula( Random Uniform() ) ),
	New Column( "Y", Formula( X1 + X2 + Random Normal() / 5 ) )
);
dt << Run Formulas;
log1 = Log Capture( plat = Fit Model( Y( :Y ), Effects( Radial( :X1, :X2 ) & Random ), Run ) );
```

**Code Explanation**:

1. Open data table.
2. Fit model with weight and height as responses.
3. Include age and sex as effects.
4. Use standard least squares personality.
5. Disable plots for weight and height.
6. Create profiler for first fit group.
7. Retrieve fit model container.
8. Get parent window.
9. Close data table without saving.
10. Close fit model window if open.



### Example 335
> **Summary**: Fits multiple linear models to a data table, extracting X matrices, and calculating hat matrices.

<!-- Keywords: #JSLScripting, #LinearModelFitting, #DataTableManipulation, #MatrixCalculations, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fm = Fit Model( Y( :Measurement ), Effects(), Run );
x = fm << Get X Matrix;
xpx = fm << Get XPX Inverse;
hmat = x * xpx * x`;
hb = hb0 = Vec Diag( hmat );
fm << Save Columns( Hats );
hact = Column( dt, N Cols( dt ) ) << Get Values;
Try( dt << Delete Column( :h Measurement ) );
fm << close window;
fm1 = Fit Model( Y( :Measurement ), Effects( :Operator & Random, :part# & Random, :Operator * :part# & Random ), Run );
fm1 << Save Columns( Hats );
hact = Column( dt, N Cols( dt ) ) << Get Values;
Try( dt << Delete Column( :h Measurement ) );
fm1 << close window;
fm2 = Fit Model( Y( :Measurement ), Effects( :Operator, :part#, :Operator * :part# ), Run );
fm2 << Save Columns( Hats );
hact = Column( dt, N Cols( dt ) ) << Get Values;
x = fm2 << Get X Matrix;
xpx = fm2 << Get XPX Inverse;
hmat = x * xpx * x`;
hb = Vec Diag( hmat );
```

**Code Explanation**:

1. Open data table.
2. Fit empty model.
3. Extract X matrix.
4. Compute XPX inverse.
5. Calculate hat matrix.
6. Extract diagonal elements.
7. Save hats to data table.
8. Retrieve saved hats.
9. Remove existing hat column.
10. Close model window.



### Example 336
> **Summary**: Fits a model to predict height based on sex, weight, and age, with residuals saved for further analysis.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #REMLMethod, #StandardLeastSquares, #ByGroup -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:height[38 :: 40] = .;
Fit Model(
	Y( :height ),
	Effects( :sex & Random, :weight ),
	Personality( Standard Least Squares ),
	Method( REML ),
	Emphasis( Effect Leverage ),
	By( age ),
	Run Model( Save Columns( Residuals ) )
);
Fit Model(
	Y( :height ),
	Effects( :sex & Random, :weight ),
	Personality( Standard Least Squares ),
	Method( REML ),
	Emphasis( Effect Leverage ),
	By( age ),
	Run Model( Save Columns( Residuals ) )
);
```

**Code Explanation**:

1. Open data table;
2. Set height values 38-40 to missing.
3. Fit model with height as response.
4. Include sex & Random, weight as effects.
5. Use Standard Least Squares personality.
6. Employ REML method.
7. Focus on Effect Leverage emphasis.
8. Group by age.
9. Save residuals to dataset.
10. Repeat steps 3-9.



### Example 337
> **Summary**: Runs a Fit Model analysis to predict weight and height based on age, sex, and random effects, utilizing Standard Least Squares personality.

<!-- Keywords: #FitModel, #StandardLeastSquares, #RandomEffects, #PredictiveAnalysis, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fm = Fit Model(
	Y( :weight, :height ),
	Effects( :age, :sex & Random ),
	Personality( Standard Least Squares ),
	Run(
		:weight << {Plot Actual by Predicted( 0 ), Plot Residual by Predicted( 0 ), Plot Effect Leverage( 0 )},
		:height << {Plot Actual by Predicted( 0 ), Plot Residual by Predicted( 0 ), Plot Effect Leverage( 0 )}
	)
);
Fit Group[1] << Profiler( 1 );
fg = ((fm[1] << get container) << parent) << parent;
pp = (fg << child) << sib;
jrn = pp << get journal;
```

**Code Explanation**:

1. Open data table;
2. Initiate Fit Model platform.
3. Set response variables: weight, height.
4. Define effects: age, sex as random.
5. Use Standard Least Squares personality.
6. Disable plots for weight predictions.
7. Disable plots for height predictions.
8. Create profiler for first model.
9. Navigate to model's container.
10. Retrieve journal from profiler's parent.



### Example 338
> **Summary**: Fits multiple linear models with varying effects, retrieving X matrices, and calculating hat matrices.

<!-- Keywords: #JSLScriptingLanguage, #LinearRegression, #ModelFitting, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fm0 = Fit Model( Y( :Name( " Y" ) ), Effects(), Run );
x = fm0 << Get X Matrix;
xpx = fm0 << Get XPX Inverse;
hmat = x * xpx * x`;
hb0 = Vec Diag( hmat );
fm0 << Save Columns( Hats );
hact = Column( dt, N Cols( dt ) ) << Get Values;
Try( dt << Delete Column( :h  Y ) );
fm0 << close window;
fm = Fit Model( Y( :Name( " Y" ) ), Effects( :Operator, :Part[:Operator] ), Run );
x = fm << Get X Matrix;
xpx = fm << Get XPX Inverse;
hmat = x * xpx * x`;
hb = Vec Diag( hmat );
fm << Save Columns( Hats );
hact = Column( dt, N Cols( dt ) ) << Get Values;
Try( dt << Delete Column( :h  Y ) );
fm << close window;
fm1 = Fit Model( Y( :Name( " Y" ) ), Effects( :Operator & Random, :Part[:Operator] & Random ), Run );
fm1 << Save Columns( Hats );
hact = Column( dt, N Cols( dt ) ) << Get Values;
Try( dt << Delete Column( :h  Y ) );
fm1 << close window;
```

**Code Explanation**:

1. Open data table.
2. Fit empty model.
3. Retrieve X matrix.
4. Calculate XPX inverse.
5. Compute hat matrix.
6. Extract diagonal elements.
7. Save hats column.
8. Retrieve actual hats.
9. Delete existing hats column.
10. Close empty model window.
11. Fit model with fixed effects.
12. Retrieve X matrix.
13. Calculate XPX inverse.
14. Compute hat matrix.
15. Extract diagonal elements.
16. Save hats column.
17. Retrieve actual hats.
18. Delete existing hats column.
19. Close fixed effects model window.
20. Fit model with random effects.
21. Save hats column.
22. Retrieve actual hats.
23. Delete existing hats column.
24. Close random effects model window.



### Example 339
> **Summary**: Fits a model to predict height, incorporating age and random weight effects, with conditional predictions enabled for profiling.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #REMLMethod, #ConditionalPredictions, #PredictionProfiler -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :height ),
	Effects( :age, :weight & Random ),
	Personality( Standard Least Squares ),
	Method( REML ),
	Emphasis( Effect Leverage ),
	Run()
);
obj1 << Profiler( 1, Conditional Predictions( 1 ) );
rpt1 = Report( obj1 );
text1 = rpt1[Outline Box( "Prediction Profiler" )][AxisBox( 3 )] << get text;
```

**Code Explanation**:

1. Open data table;
2. Fit model with height as response.
3. Include age and random weight effects.
4. Use standard least squares personality.
5. Apply REML method.
6. Focus on effect leverage.
7. Run the model.
8. Create profiler for the model.
9. Enable conditional predictions.
10. Extract text from prediction profiler axis.



### Example 340
> **Summary**: Analyze and visualize a linear mixed-effects model to compare LSMeans differences between seasons, utilizing the Fit Model dialog in JMP.

<!-- Keywords: #JMPScriptingLanguage, #LinearMixed-EffectsModel, #FitModelDialog, #LSMeansDifferences, #TukeyHSD -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dlg = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" )
);
obj = dlg << Run( :season << {LSMeans Tukey HSD( 1 )} );
rpt = obj << report;
q1 = rpt[Outline Box( "Effect Details" )][Outline Box( "season" )][Outline Box( "LSMeans Differences Tukey HSD" )][Numberbox( 2 )] <<
get text;
```

**Code Explanation**:

1. Open data table;
2. Launch Fit Model dialog.
3. Set response variable to "miles".
4. Add effects: species, subject nested in species random, season, interaction species*season.
5. Choose Standard Least Squares personality.
6. Use REML method.
7. Run model with Tukey HSD for season LSMeans.
8. Retrieve model report object.
9. Access "Effect Details" outline box.
10. Extract text from season LSMeans differences Tukey HSD p-value.



### Example 341
> **Summary**: Calculates and visualizes LSMeans differences using Tukey HSD post-hoc test for season, within a Fit Model dialog in JMP.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #TukeyHSD, #REMLMethod, #LSMeans -->

**Code**:
```jsl
b diff = [-2.33333333333333 0.641901111571742 12 -3.63503550822649 0.00341901926308975 0.0156224952339201 0.05 -3.7319157106035
-0.934750956063169 -4.23900652207623 -0.427660144590442,
-1.5 0.641901111571742 12 -2.33680854100274 0.0376028859651221 0.143871279201253 0.05 -2.89858237727017 -0.101417622729834
-3.40567318874289 0.405673188742892,
1.33333333333334 0.641901111571742 12 2.077163147558 0.0599232741765273 0.215115820160972 0.05 -0.0652490439368294 2.7319157106035
-0.572339855409556 3.23900652207623,
0.833333333333335 0.641901111571742 12 1.29822696722375 0.218606218568194 0.58107630466973 0.05 -0.565249043936831 2.2319157106035
-1.07233985540956 2.73900652207623,
3.66666666666667 0.641901111571742 12 5.71219865578449 0.0000972441187268471 0.000487455383364699 0.05 2.2680842893965 5.06524904393684
1.76099347792378 5.57233985540956,
2.83333333333334 0.641901111571742 12 4.41397168856074 0.000844457562111378 0.00405138015228368 0.05 1.43475095606317 4.2319157106035
0.927660144590445 4.73900652207623];
b q1 = (b diff[1, 11] - b diff[1, 1]) :/ b diff[1, 2];
dt = Open("data_table.jmp");
dlg = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" )
);
obj = dlg << Run( :season << {LSMeans Tukey HSD( 1 )} );
rpt = obj << report;
q1 = rpt[Outline Box( "Effect Details" )][Outline Box( "season" )][Outline Box( "LSMeans Differences Tukey HSD" )][Numberbox( 2 )] <<
get text;
```

**Code Explanation**:

1. Define matrix `b diff`.
2. Calculate `b q1` using matrix elements.
3. Open data table;
4. Launch Fit Model dialog.
5. Set response variable to "miles".
6. Add effects: species, subject within species (random), season, species*season interaction.
7. Choose "Standard Least Squares" personality.
8. Use REML method for estimation.
9. Run model with Tukey HSD post-hoc test for season.
10. Extract LSMeans differences Tukey HSD value.



### Example 342
> **Summary**: Fits a linear mixed-effects model to analyze miles as a response variable, incorporating species and season effects, with subject[:species] as a random effect, using REML method and Standard Least Squares personality.

<!-- Keywords: #JMP, #LinearMixedEffectsModel, #REML, #StandardLeastSquares, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run(
		:miles << {Analysis of Variance( 0 ), Lack of Fit( 0 ), Plot Actual by Predicted( 0 ), Plot Regression( 0 ),
		Plot Residual by Predicted( 0 ), Plot Effect Leverage( 0 ), {:subject[:species] <<
		{LSMeans Tukey HSD( 0.05, Ordered Differences Report( 1 ) )}}}
	),
	SendToReport(
		Dispatch( {"Response miles"}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response miles"}, "Summary of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response miles"}, "Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response miles"}, "REML Variance Component Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response miles"}, "Effect Details", OutlineBox, {Close( 0 )} )
	)
);
rpt = obj << report;
q1 = Parse( rpt[Outline Box( "subject[species]" )][Outline Box( "LSMeans Differences Tukey HSD" )][NumberBox( 2 )] << get text );
diff1 = rpt[Outline Box( "LSMeans Differences Tukey HSD" )][Table Box( 2 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Fit model with miles as response.
3. Include species, season, and interaction effects.
4. Specify subject[:species] as random effect.
5. Use Standard Least Squares personality.
6. Employ REML method for estimation.
7. Minimal report emphasis.
8. Suppress analysis outputs.
9. Enable LSMeans Tukey HSD for subject[:species].
10. Retrieve and parse LSMeans differences text and matrix.



### Example 343
> **Summary**: Analyzes and creates reports for a mixed-effects model with random effects for Operator, Part#, and their interaction, using REML method and Tukey HSD for LSMeans differences.

<!-- Keywords: #JMPScriptingLanguage, #Mixed-EffectsModel, #RandomEffects, #REMLMethod, #TukeyHSD -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Fit Model(
	Y( :Measurement ),
	Random Effects( :Operator, :part#, :Operator * :part# ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Method( "REML" ),
	Run(
		:Measurement << {{:Operator << {LSMeans Tukey HSD( 0.05 )}, :part# << {LSMeans Tukey HSD( 0.05 )}, :Operator * :part# <<
		{LSMeans Tukey HSD( 0.05 )}}}
	)
);
rpt = obj << report;
df1 = Parse(
	Reverse(
		Words( Trim( rpt[Outline Box( "Operator" )][Outline Box( "LSMeans Differences Tukey HSD" )][Text Box( 2 )] << get text ), "=" )
	)[1]
);
df2 = Parse(
	Reverse( Words( Trim( rpt[Outline Box( "Part#" )][Outline Box( "LSMeans Differences Tukey HSD" )][Text Box( 2 )] << get text ), "=" ) )
	[1]
);
df3 = Parse(
	Reverse(
		Words(
			Trim( rpt[Outline Box( "Operator*part#" )][Outline Box( "LSMeans Differences Tukey HSD" )][Text Box( 2 )] << get text ),
			"="
		)
	)[1]
);
```

**Code Explanation**:

1. Open data file.
2. Define model with response variable.
3. Specify random effects.
4. Set personality to standard least squares.
5. Minimize report emphasis.
6. Use REML method.
7. Run model with LSMeans Tukey HSD.
8. Extract report object.
9. Parse degrees of freedom for Operator.
10. Parse degrees of freedom for Part#.



### Example 344
> **Summary**: Analyze and extract degrees of freedom from a fitted model, utilizing REML method and specifying random effects for Operator and Part[Operator].

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #REMLMethod, #DegreesOfFreedom, #RandomEffects -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model(
	Y( :Y ),
	Random Effects( :Operator, :Part[:Operator] ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Method( "REML" ),
	Run( :Y << {{:Operator << {LSMeans Tukey HSD( 0.05 )}, :Part[:Operator] << {LSMeans Tukey HSD( 0.05 )}}} )
);
rpt = obj << report;
df1 = Parse(
	Reverse(
		Words( Trim( rpt[Outline Box( "Operator" )][Outline Box( "LSMeans Differences Tukey HSD" )][Text Box( 2 )] << get text ), "=" )
	)[1]
);
df2 = Parse(
	Reverse(
		Words(
			Trim( rpt[Outline Box( "Part[Operator]" )][Outline Box( "LSMeans Differences Tukey HSD" )][Text Box( 2 )] << get text ),
			"="
		)
	)[1]
);
```

**Code Explanation**:

1. Open table.
2. Fit model with REML.
3. Specify random effects.
4. Set personality to SLR.
5. Minimize report emphasis.
6. Run analysis.
7. Extract report object.
8. Parse Operator LSMeans.
9. Parse Part[Operator] LSMeans.
10. Retrieve degrees of freedom.



### Example 345
> **Summary**: Fits and creates reports for a linear mixed effects model with random effects for person and machine*person, using Standard Least Squares personality and Tukey HSD for LSMeans.

<!-- Keywords: #JMPScriptingLanguage, #LinearMixedEffectsModel, #RandomEffects, #StandardLeastSquares, #TukeyHSD -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :rating ),
	Effects( :machine ),
	Random Effects( :person, :machine * :person ),
	Personality( "Standard Least Squares" ),
	Run( :rating << {{:person << {LSMeans Tukey HSD( 0.05 )}, :machine * :person << {LSMeans Tukey HSD( 0.05 )}}} )
);
rpt = obj << report;
df1 = Parse(
	Reverse(
		Words( Trim( rpt[Outline Box( "person" )][Outline Box( "LSMeans Differences Tukey HSD" )][Text Box( 2 )] << get text ), "=" )
	)[1]
);
df2 = Parse(
	Reverse(
		Words(
			Trim( rpt[Outline Box( "machine*person" )][Outline Box( "LSMeans Differences Tukey HSD" )][Text Box( 2 )] << get text ),
			"="
		)
	)[1]
);
```

**Code Explanation**:

1. Open data table;
2. Fit model with rating as Y.
3. Include machine as effect.
4. Add person and machine*person as random effects.
5. Use Standard Least Squares personality.
6. Run model with Tukey HSD for LSMeans.
7. Retrieve model report.
8. Extract degrees of freedom for person.
9. Extract degrees of freedom for machine*person.



### Example 346
> **Summary**: Runs the fitting and profiling of two models with Yield as response, including Moisture as effect and Variety and Moisture:Variety as random effects, using JMP's Fit Model platform.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #Profiler, #ConditionalPredictions, #Simulator -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model( Y( :Yield ), Effects( :Moisture ), Random Effects( :Variety, :Moisture[:Variety] ), Run );
obj1 << Profiler( 1, Conditional Predictions( 1 ), Simulator( 1 ) );
obj1 << Plot Regression( 0 );
obj1 << Scroll Window;
obj2 = dt << Fit Model( Y( :Yield ), Effects( :Moisture ), Random Effects( :Variety, :Moisture[:Variety] ), Run );
obj2 << Profiler( 1, Simulator( 1 ), Conditional Predictions( 1 ) );
obj2 << Plot Regression( 0 );
obj2 << Scroll Window;
```

**Code Explanation**:

1. Open data table;
2. Fit model with Yield as response.
3. Include Moisture as effect.
4. Add Variety and Moisture:Variety as random effects.
5. Run the model.
6. Create profiler with conditional predictions.
7. Enable simulator in profiler.
8. Disable plot regression.
9. Scroll to window.
10. Repeat steps 2-9 for another model.



### Example 347
> **Summary**: Fits a linear mixed effects model to analyze the relationship between tenderizer, carcass, and roasting time on Y, with random effects for the interaction between tenderizer and carcass.

<!-- Keywords: #JMPScriptingLanguage, #LinearMixedEffectsModel, #RandomEffects, #ModelFitting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Carcass, :Roasting Time, :Roasting Time * :Tenderizer ),
	Random Effects( :Tenderizer * :Carcass ),
	NoBounds( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);
rpt = obj << report;
note1 = Trim( rpt["Effect Summary"][String Col Box( 2 )] << get text );
note2 = rpt["Effect Summary"][Text Box( 1 )] << get text;
```

**Code Explanation**:

1. Open table.
2. Fit model.
3. Set response variable.
4. Define fixed effects.
5. Define random effects.
6. Disable bounds.
7. Choose personality.
8. Select method.
9. Set emphasis.
10. Execute model.



### Example 348
> **Summary**: Fits multiple models to a data table, extracting report and matrix results, and visualizing the findings.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #AllPossibleModels, #StepwisePersonality, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj2 = dt << Fit Model(
	Y( :weight ),
	Effects( :age, :sex ),
	Personality( Stepwise ),
	Run( All Possible Models( 6, 15, Heredity Restriction( 1 ) ) )
);
rpt2 = obj2 << report;
test2 = rpt2[Outline Box( "All Possible Models" )][Table Box( 1 )] << get as matrix;
obj4 = dt << Fit Model(
	Y( :weight ),
	Effects( :height, :sex, :height * :sex ),
	Personality( Stepwise ),
	Run( All Possible Models( 3, 3, Heredity Restriction( 1 ) ) )
);
rpt4 = obj4 << report;
test4 = rpt4[Outline Box( "All Possible Models" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Fit model with weight as response.
3. Include age and sex as effects.
4. Use stepwise personality.
5. Run all possible models with specified parameters.
6. Extract report from model fit.
7. Get matrix of all possible models results.
8. Fit another model with weight as response.
9. Include height, sex, and interaction as effects.
10. Extract matrix of all possible models results.



### Example 349
> **Summary**: Fits a model to predict Oxy values based on Runtime, Weight, and RunPulse effects, excluding intercept, using stepwise personality and generating a report.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StepwisePersonality, #ReportGeneration, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse ),
	No Intercept( 1 ),
	Personality( Stepwise ),
	Run( All Possible Models( 3, 6 ) )
);
obj << Enter All;
rpt = Report( obj );
rpt[Radio Box( 2 )] << set( 7 );
```

**Code Explanation**:

1. Open data table;
2. Fit model with Oxy as response.
3. Include Runtime, Weight, RunPulse effects.
4. Exclude intercept from model.
5. Use stepwise personality.
6. Run all possible models with 3-6 terms.
7. Enter all selected models.
8. Generate report from model object.
9. Set radio box to 7th option.
10. End script execution.



### Example 350
> **Summary**: Fits a model to predict height based on weight and age, while grouping by sex, using stepwise personality and generating reports with button box interactions.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #StepwisePersonality, #ButtonBoxInteractions, #AssociativeArrays -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model( Y( :height ), Effects( :weight, :age ), By( :sex ), Personality( Stepwise ), Run() );
befAA = Associative Array( Window() << get window title );
Report( obj[1] )[Button Box( 2 )] << click;
rpt2 = Report( obj[1] )[Button Box( 6 )] << click;
Report( obj[2] )[Button Box( 2 )] << click;
rpt2 = Report( obj[2] )[Button Box( 6 )] << click;
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
```

**Code Explanation**:

1. Open data table;
2. Fit model with height as response.
3. Include weight and age as effects.
4. Use sex for grouping.
5. Apply stepwise personality.
6. Run the model.
7. Create associative array before analysis.
8. Click on second button box in report.
9. Click on sixth button box in report.
10. Create associative array after analysis.



### Example 351
> **Summary**: Fits a model with Oxy and Runtime as Y, including effects for Weight, RunPulse, RstPulse, and MaxPulse, grouped by sex, using Stepwise personality, and then interacts with reports to remove and make models.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StepwisePersonality, #AssociativeArrays, #WindowManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model( Y( :Oxy, :Runtime ), Effects( :Weight, :RunPulse, :RstPulse, :MaxPulse ), By( :sex ), Personality( Stepwise ), Run );
befAA = Associative Array( Window() << get window title );
Report( obj[1] )[Button Box( 2 )] << click;
rpt2 = Report( obj[1] )[Button Box( 6 )] << click;
Report( obj[2] )[Button Box( 2 )] << click;
rpt2 = Report( obj[2] )[Button Box( 6 )] << click;
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
```

**Code Explanation**:

1. Open data table;
2. Fit model with Oxy, Runtime as Y.
3. Include Weight, RunPulse, RstPulse, MaxPulse effects.
4. Group by sex variable.
5. Use Stepwise personality.
6. Run the model.
7. Create associative array of current windows.
8. Click "Remove" button in first report.
9. Click "Make Model" button in first report.
10. Click "Remove" button in second report.
11. Click "Make Model" button in second report.
12. Create associative array of updated windows.
13. Remove original windows from updated array.
14. Get keys of remaining windows.



### Example 352
> **Summary**: Runs stepwise regression analysis with varying stopping rules and probability thresholds, generating reports for each scenario.

<!-- Keywords: #StepwiseRegression, #JMPScriptingLanguage, #DataAnalysis, #ModelBuilding, #StoppingRules -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :Sex ),
	Effects( :Age, :Weight, :Oxy, :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run( Stopping Rule( "P-value Threshold" ), Prob to Leave( 0.35 ), Direction( "Mixed" ), Rules( "No Rules" ) )
);
rpt1 = Report( obj1 );
prob1 = rpt1[Outline Box( "Stepwise Regression Control" )][Number Col Edit Box( 1 )] << get;
rule1 = rpt1[Outline Box( "Stepwise Regression Control" )][Combo Box( 3 )] << get selected;
obj2 = dt << Fit Model(
	Y( :Sex ),
	Effects( :Age, :Weight, :Oxy, :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run( Prob to Leave( 0.35 ), Stopping Rule( "P-value Threshold" ), Direction( "Mixed" ), Rules( "Whole Effects" ) )
);
rpt2 = Report( obj2 );
prob2 = rpt2[Outline Box( "Stepwise Regression Control" )][Number Col Edit Box( 1 )] << get;
rule2 = rpt2[Outline Box( "Stepwise Regression Control" )][Combo Box( 3 )] << get selected;
obj3 = dt << Fit Model(
	Y( :Sex ),
	Effects( :Age, :Weight, :Oxy, :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run( Prob to Leave( 0.35 ), Direction( "Mixed" ), Stopping Rule( "P-value
Threshold" ), Rules( "Restrict" ) )
);
rpt3 = Report( obj3 );
prob3 = rpt1[Outline Box( "Stepwise Regression Control" )][Number Col Edit Box( 1 )] << get;
rule3 = rpt3[Outline Box( "Stepwise Regression Control" )][Combo Box( 3 )] << get selected;
obj4 = dt << Fit Model(
	Y( :Sex ),
	Effects( :Age, :Weight, :Oxy, :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run( Direction( "Mixed" ), Prob to Leave( 0.35 ), Stopping Rule( "P-value
Threshold" ) )
);
rpt4 = Report( obj4 );
prob4 = rpt4[Outline Box( "Stepwise Regression Control" )][Number Col Edit Box( 1 )] << get;
rule4 = rpt4[Outline Box( "Stepwise Regression Control" )][Combo Box( 3 )] << get selected;
```

**Code Explanation**:

1. Open data table;
2. Fit model with Sex as response.
3. Use Age, Weight, Oxy, Runtime, RunPulse, RstPulse, MaxPulse as effects.
4. Apply Stepwise personality.
5. Set stopping rule to P-value Threshold.
6. Set Prob to Leave to 0.35.
7. Set direction to Mixed.
8. Set rules to No Rules.
9. Generate report from first model.
10. Extract probability threshold and rule from first report.
11. Repeat steps 2-10 for different rule settings.
12. Extract results for each scenario.



### Example 353
> **Summary**: Fits a stepwise model for Speed2, retrieving and extracting summary text and missing values matrix, and refitting the model after excluding selected rows.

<!-- Keywords: #JSLScriptingLanguage, #StepwiseRegression, #DataTableOperations, #ModelFitting, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model( Y( :Speed2 ), Effects( :Height, :Weight, :Fat, :Neck, :Bench ), Personality( "Stepwise" ), Run );
rpt1 = Report( obj1 );
txt1 = rpt1[Outline Box( "Stepwise Regression Control" )][String Col Box( 1 )] << get;
miss1 = rpt1[Outline Box( "Stepwise Regression Control" )][Table Box( 1 )] << get as matrix;
r = dt << select rows( [1, 2, 3] );
r << Exclude;
obj2 = dt << Fit Model( Y( :Speed2 ), Effects( :Height, :Weight, :Fat, :Neck, :Bench ), Personality( "Stepwise" ), Run );
rpt2 = Report( obj2 );
txt2 = rpt2[Outline Box( "Stepwise Regression Control" )][String Col Box( 1 )] << get;
miss2 = rpt2[Outline Box( "Stepwise Regression Control" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Fit stepwise model for Speed2.
3. Retrieve stepwise report.
4. Extract stepwise summary text.
5. Extract stepwise missing values matrix.
6. Select first three rows.
7. Exclude selected rows.
8. Refit stepwise model for Speed2.
9. Retrieve new stepwise report.
10. Extract new stepwise summary text.



### Example 354
> **Summary**: Fits a model with stepwise personality, running K-Fold Crossvalidation, and extracting R¬≤ values from reports in JMP.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #K-FoldCrossvalidation, #StepwisePersonality, #R¬≤Extraction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :Horsepower ),
	Effects( :Weight, :Turning Circle ),
	Personality( Stepwise ),
	Set Alpha Level( 0.05 ),
	Run( Finish, Name( "K-Fold Crossvalidation" )(116) )
);
rpt1 = Report( obj1 );
KfoldR2 = (rpt1[Outline Box( "Step History" )][Table Box( 1 )] << get as matrix)[0, 9];
obj2 = dt << Fit Model(
	Y( :Horsepower ),
	Effects( :Weight, :Turning Circle ),
	Personality( Stepwise ),
	Set Alpha Level( 0.05 ),
	Run( Name( "K-Fold Crossvalidation" )(116), Finish )
);
rpt2 = Report( obj2 );
KfoldR2 2 = (rpt2[Outline Box( "Step History" )][Table Box( 1 )] << get as matrix)[0, 9];
```

**Code Explanation**:

1. Open data table.
2. Fit model with stepwise personality.
3. Set alpha level to 0.05.
4. Run K-Fold Crossvalidation.
5. Extract R¬≤ from report.
6. Fit model again with stepwise personality.
7. Set alpha level to 0.05.
8. Run K-Fold Crossvalidation.
9. Extract R¬≤ from report.
10. Store both R¬≤ values.



### Example 355
> **Summary**: Runs a stepwise linear regression model to predict height based on age, weight, and their interaction, grouped by sex, using the Fit Model platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StepwiseRegression, #LinearRegression, #ByGroup -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :height ),
	Effects( :age, :weight, :age * :weight ),
	Personality( "Stepwise" ),
	By( :sex ),
	Run( Stopping Rule( "P-value Threshold" ), Direction( "Backward" ) ), 
);
obj << Enter all( 1 );
obj << Finish( 1 );
obj << Run Model( 1 );
Close( dt, no save );
b fratio1 = [0, 285681.652644516, 999999, 0.00799966737158615];
b fratio2 = [0, 285681.652644516, 999999, 4.01473373231686];
```

**Code Explanation**:

1. Open table.
2. Define model with height as Y.
3. Include age, weight, and interaction.
4. Use Stepwise personality.
5. Group by sex.
6. Set stopping rule and direction.
7. Enter all effects.
8. Finish model setup.
9. Run the model.
10. Close table without saving.



### Example 356
> **Summary**: Performs the stepwise regression analysis of MaxPulse data, generating reports and extracting statistics.

<!-- Keywords: #JSLScripting, #StepwiseRegression, #MaxPulseAnalysis, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :MaxPulse ),
	Effects(
		:Age & RS, :Weight & RS, :Oxy & RS, :Runtime & RS, :Age * :Age, :Age * :Weight, :Weight * :Weight, :Age * :Oxy, :Weight * :Oxy,
		:Oxy * :Oxy, :Age * :Runtime, :Weight * :Runtime, :Oxy * :Runtime, :Runtime * :Runtime
	),
	Personality( "Stepwise" ),
	Run
);
rpt1 = obj1 << report;
rpt1[Button Box( 7 )] << click;
stat1 = rpt1[Outline Box( "Stepwise Fit for MaxPulse" )][Table Box( 2 )] << get as matrix;
obj2 = dt << Fit Model(
	Y( :MaxPulse ),
	Effects(
		:Age & RS, :Weight & RS, :Oxy & RS, :Runtime & RS, :Age * :Age, :Age * :Weight, :Weight * :Weight, :Age * :Oxy, :Weight * :Oxy,
		:Oxy * :Oxy, :Age * :Runtime, :Weight * :Runtime, :Oxy * :Runtime, :Runtime * :Runtime
	),
	Personality( "Stepwise" ),
	Run( Plot Criterion History( 1 ) )
);
rpt2 = obj2 << report;
rpt2[Button Box( 7 )] << click;
stat2 = rpt2[Outline Box( "Stepwise Fit for MaxPulse" )][Table Box( 2 )] << get as matrix;
obj3 = dt << Fit Model(
	Y( :MaxPulse ),
	Effects(
		:Age & RS, :Weight & RS, :Oxy & RS, :Runtime & RS, :Age * :Age, :Age * :Weight, :Weight * :Weight, :Age * :Oxy, :Weight * :Oxy,
		:Oxy * :Oxy, :Age * :Runtime, :Weight * :Runtime, :Oxy * :Runtime, :Runtime * :Runtime
	),
	Personality( "Stepwise" ),
	Run( Plot Criterion History( 1 ) )
);
rpt3 = obj3 << report;
rpt3[Outline Box( "Current Estimates" )] << Close( 1 );
rpt3[Button Box( 7 )] << click;
stat3 = rpt3[Outline Box( "Stepwise Fit for MaxPulse" )][Table Box( 2 )] << get as matrix;
rpt3[Button Box( 9 )] << click;
rpt3[Outline Box( "Step History" )] << Close( 1 );
rpt3[Button Box( 7 )] << click;
```

**Code Explanation**:

1. Open data table.
2. Fit model with MaxPulse as response.
3. Use Stepwise personality.
4. Run the model.
5. Get report object.
6. Click on button box 7.
7. Extract stepwise fit statistics.
8. Fit another model with same settings.
9. Plot criterion history.
10. Extract stepwise fit statistics again.



### Example 357
> **Summary**: Fits a model to predict height using age, weight, and their interaction as predictors, with stepwise selection and backward elimination.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StepwiseSelection, #BackwardElimination, #ByGroups -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :height ),
	Effects( :age, :weight, :age * :weight ),
	Personality( "Stepwise" ),
	By( :sex ),
	Run( Stopping Rule( "P-value Threshold" ), Direction( "Backward" ) ), 
);
obj << Enter all( 1 );
obj << Finish( 1 );
obj << Run Model( 1 );
```

**Code Explanation**:

1. Open data table.
2. Fit model using height as response.
3. Include age, weight, and interaction effects.
4. Use stepwise personality.
5. Group analysis by sex.
6. Set stopping rule to P-value threshold.
7. Perform backward elimination.
8. Enter all models.
9. Finish model selection.
10. Run the selected model.



### Example 358
> **Summary**: Performs the stepwise regression analysis for MaxPulse data, generating two reports with statistics and enabling Plot Criterion History.

<!-- Keywords: #JMPScriptingLanguage, #StepwiseRegression, #DataAnalysis, #ReportGeneration, #PlotCriterionHistory -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :MaxPulse ),
	Effects(
		:Age & RS, :Weight & RS, :Oxy & RS, :Runtime & RS, :Age * :Age, :Age * :Weight, :Weight * :Weight, :Age * :Oxy, :Weight * :Oxy,
		:Oxy * :Oxy, :Age * :Runtime, :Weight * :Runtime, :Oxy * :Runtime, :Runtime * :Runtime
	),
	Personality( "Stepwise" ),
	Run
);
rpt1 = obj1 << report;
rpt1[Button Box( 7 )] << click;
stat1 = rpt1[Outline Box( "Stepwise Fit for MaxPulse" )][Table Box( 2 )] << get as matrix;
obj2 = dt << Fit Model(
	Y( :MaxPulse ),
	Effects(
		:Age & RS, :Weight & RS, :Oxy & RS, :Runtime & RS, :Age * :Age, :Age * :Weight, :Weight * :Weight, :Age * :Oxy, :Weight * :Oxy,
		:Oxy * :Oxy, :Age * :Runtime, :Weight * :Runtime, :Oxy * :Runtime, :Runtime * :Runtime
	),
	Personality( "Stepwise" ),
	Run( Plot Criterion History( 1 ) )
);
rpt2 = obj2 << report;
rpt2[Button Box( 7 )] << click;
stat2 = rpt2[Outline Box( "Stepwise Fit for MaxPulse" )][Table Box( 2 )] << get as matrix;
obj3 = dt << Fit Model(
	Y( :MaxPulse ),
	Effects(
		:Age & RS, :Weight & RS, :Oxy & RS, :Runtime & RS, :Age * :Age, :Age * :Weight, :Weight * :Weight, :Age * :Oxy, :Weight * :Oxy,
		:Oxy * :Oxy, :Age * :Runtime, :Weight * :Runtime, :Oxy * :Runtime, :Runtime * :Runtime
	),
	Personality( "Stepwise" ),
	Run( Plot Criterion History( 1 ) )
);
rpt3 = obj3 << report;
```

**Code Explanation**:

1. Open data table.
2. Fit model with Stepwise personality.
3. Retrieve report object.
4. Click "Go" button in report.
5. Extract statistics from report.
6. Fit model again with Stepwise personality.
7. Enable Plot Criterion History.
8. Retrieve second report object.
9. Click "Go" button in second report.
10. Extract statistics from second report.



### Example 359
> **Summary**: Fits a linear model to predict height based on age, sex, and weight, generating a report with minimal emphasis.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #DataTable, #FitModel, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :height ),
	Effects( :age, :sex, :weight ),
	Personality( Standard Least Squares ),
	Emphasis( Minimal Report ),
	Run()
);
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table.
2. Fit linear model.
3. Set response variable.
4. Add predictor variables.
5. Choose personality method.
6. Set report emphasis.
7. Execute model fit.
8. Retrieve report object.



### Example 360
> **Summary**: Fits a logistic model to data, generating a report, and performing bootstrap analysis, while also capturing window titles and splitting data by specified columns.

<!-- Keywords: #JMPScriptingLanguage, #LogisticRegression, #BootstrapAnalysis, #DataSplitting, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model( Y( :sex ), Effects( :age, :weight, :height ), Personality( Nominal Logistic ), Run() );
rpt = Report( obj );
befAA = Associative Array( Window() << get window title );
rpt[Outline Box( "Fit Details" )][Number Col Box( 1 )] << Bootstrap(
	5,
	Fractional Weights( 0 ),
	Discard Stacked Table if Split Works( 0 )
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
first table = dt;
bt2 = first table << get as matrix;
b last table = first table << Split(
	Split By( :sex ),
	Split( :height ),
	Group( :age ),
	Remaining Columns( Drop All ),
	Sort by Value Order
);
```

**Code Explanation**:

1. Open data table.
2. Fit logistic model.
3. Create report object.
4. Capture initial window titles.
5. Perform bootstrap analysis.
6. Capture updated window titles.
7. Remove unchanged titles.
8. Extract new window titles.
9. Retrieve original data matrix.
10. Split data by specified columns.



### Example 361
> **Summary**: Fits a loglinear variance model to a data table, predicting shrinkage values, and extracting the predicting property.

<!-- Keywords: #JMPScriptingLanguage, #LoglinearVarianceModel, #FitModel, #PredictionFormula, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Columns( Prediction Formula( 1 ) );
prop1 = dt:Shrinkage Mean << get  Property( "Predicting" );
```

**Code Explanation**:

1. Open data table.
2. Define response variable.
3. Define effects for model.
4. Set model personality.
5. Run fit model.
6. Save prediction formula.
7. Get predicting property.



### Example 362
> **Summary**: Fits a multivariate model with MANOVA personality, including main effects and interaction terms, to predict response variables in a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #MANOVA, #PredictiveModeling, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Contrast" ) )
);
obj << Save Predicted( 1 );
prop1 = dt:Pred LogHist0 << get property( "Predicting" );
```

**Code Explanation**:

1. Open data table;
2. Fit multivariate model.
3. Set response variables.
4. Include main effects.
5. Add interaction effect.
6. Use MANOVA personality.
7. Run contrast analysis.
8. Save predicted values.
9. Retrieve predicting property.
10. Assign to prop1 variable.



### Example 363
> **Summary**: Fits a Partial Least Squares model to a data table, specifying effects and retrieving fit measures from the first fit object.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #FitModel, #DataTableAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = Fit Model(
	Y( :Yield ),
	Effects(
		:Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time, :Methanol * :Methanol, :Ethanol * :Methanol, :Ethanol * :Ethanol,
		:Propanol * :Methanol, :Propanol * :Ethanol, :Propanol * :Propanol, :Butanol * :Methanol, :Butanol * :Ethanol, :Butanol * :Propanol,
		:Butanol * :Butanol, :pH * :Methanol, :pH * :Ethanol, :pH * :Propanol, :pH * :Butanol, :pH * :pH, :Time * :Methanol,
		:Time * :Ethanol, :Time * :Propanol, :Time * :Butanol, :Time * :pH, :Time * :Time
	),
	Personality( "Partial Least Squares" ),
	Run( Fit )
);
obj1 << (Fit[1] << get measures);
```

**Code Explanation**:

1. Open data table.
2. Define model with response variable.
3. Specify effects for analysis.
4. Choose Partial Least Squares personality.
5. Run the fit model.
6. Retrieve fit measures from first fit object.



### Example 364
> **Summary**: Analyze and visualize a linear regression model to predict height based on weight, with emphasis on effect leverage and confidence intervals.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #ConfidenceIntervals, #EffectLeverage, #PredictiveModel -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Fit Model(
	Y( :height ),
	Effects( :weight ),
	Personality( Standard Least Squares ),
	Emphasis( Effect Leverage ),
	Run Model(
		:height << {Plot Actual by Predicted( 1 ), Plot Regression( 1 ), Plot Residual by Predicted( 1 ), Plot Effect Leverage( 1 )}
	)
);
obj << prediction formula;
obj << stdErr pred formula;
obj = Profiler(
	Y( :Pred Formula height, :PredSE height ),
	Profiler(
		1,
		Confidence Intervals( 1 ),
		Desirability Functions( 1 ),
		Pred Formula height << Response Limits(
			{Lower( 55, 0.066 ), Middle( 63.75, 0.5 ), Upper( 72.5, 0.9819 ), Goal( Maximize ), Importance( 1 )}
		),
		Term Value( weight( 120 ) )
	),
	Use SE Formula( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Fit model with height as Y.
3. Add weight as effect.
4. Use standard least squares personality.
5. Emphasize effect leverage.
6. Run model with specified plots.
7. Extract prediction formula.
8. Extract standard error prediction formula.
9. Create profiler for prediction formulas.
10. Set profiler options and limits.



### Example 365
> **Summary**: Fits a linear model to predict height based on weight, with emphasis on effect leverage and visualization of plots, prediction formulas, and standard error formulas.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #ModelFitting, #DataVisualization, #PredictionFormula -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model(
	Y( :height ),
	Effects( :weight ),
	Personality( Standard Least Squares ),
	Emphasis( Effect Leverage ),
	Run Model(
		:height << {Plot Actual by Predicted( 1 ), Plot Regression( 1 ), Plot Residual by Predicted( 1 ), Plot Effect Leverage( 1 )}
	)
);
obj << prediction formula;
obj << stdErr pred formula;
obj = Profiler(
	Y( :Pred Formula height, :PredSE height ),
	Profiler(
		1,
		Confidence Intervals( 1 ),
		Desirability Functions( 1 ),
		Pred Formula height << Response Limits(
			{Lower( 55, 0.066 ), Middle( 63.75, 0.5 ), Upper( 72.5, 0.9819 ), Goal( Maximize ), Importance( 1 )}
		),
		Term Value( weight( 120 ) )
	),
	Use SE Formula( 1 )
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Fit linear model with height as Y.
3. Include weight as effect.
4. Set personality to standard least squares.
5. Emphasize effect leverage.
6. Run model with specified plots.
7. Add prediction formula to model.
8. Add standard error formula to model.
9. Create profiler for prediction formulas.
10. Configure profiler settings and limits.



### Example 366
> **Summary**: Fits a model with multiple responses, generating prediction and standard error formulas, and creating a profiler for predictions.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #MultipleResponses, #PredictionProfiler, #StandardLeastSquares -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Fit Model(
	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),
	Effects(
		:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILANE * :SILICA, :SILANE * :SILANE, :SULFUR * :SILICA,
		:SULFUR * :SILANE, :SULFUR * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Run Model(
		:ABRASION << {Scaled Estimates( 1 ), Plot Actual by Predicted( 1 )},
		:MODULUS << {Scaled Estimates( 1 ), Plot Actual by Predicted( 1 )},
		:ELONG << {Scaled Estimates( 1 ), Plot Actual by Predicted( 1 )},
		:HARDNESS << {Scaled Estimates( 1 ), Plot Actual by Predicted( 1 )}
	)
);
obj << prediction formula;
obj << stdErr pred formula;
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Profiler(
		1,
		Desirability Functions( 1 ),
		Pred Formula ABRASION << Response Limits(
			{Lower( 100, 0.066 ), Middle( 150, 0.5 ), Upper( 200, 0.9819 ), Goal( Maximize ), Importance( 0.25 )}
		),
		Pred Formula MODULUS << Response Limits(
			{Lower( 1000, 0.066 ), Middle( 1500, 0.5 ), Upper( 2000, 0.9819 ), Goal( Maximize ), Importance( 0.25 )}
		),
		Pred Formula ELONG << Response Limits(
			{Lower( 450, 0.0183 ), Middle( 500, 1 ), Upper( 550, 0.0183 ), Goal( Match Target ), Importance( 0.25 )}
		),
		Pred Formula HARDNESS << Response Limits(
			{Lower( 65, 0.0183 ), Middle( 67.5, 1 ), Upper( 70, 0.0183 ), Goal( Match Target ), Importance( 0.25 )}
		),
		Term Value( SILICA( 1.25 ), SILANE( 50 ), SULFUR( 2.25 ) ),
		Simulator(
			1,
			Factors(
				SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Random( Normal( 50, 6.532 ) ),
				SULFUR << Random( Normal( 2.25, 0.3266 ) )
			),
			Responses(
				Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise, Pred Formula ELONG << No Noise,
				Pred Formula HARDNESS << No Noise
			)
		)
	),
	SendToReport( Dispatch( {"Prediction Profiler"}, "Simulator", OutlineBox, Close( 1 ) ) )
);
```

**Code Explanation**:

1. Open data table;
2. Fit model with multiple responses.
3. Specify response variables.
4. Define model effects.
5. Set personality to standard least squares.
6. Run model for each response.
7. Generate prediction formulas.
8. Generate standard error formulas.
9. Create profiler for predictions.
10. Configure profiler settings and limits.



### Example 367
> **Summary**: Fits a nominal logistic model, running a prediction profiler, and saving bagged predictions in JMP.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #PredictionProfiler, #BaggedPredictions, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model( Y( :sex ), Effects( :height, :weight ), Personality( "Nominal Logistic" ), Run( Profiler( 1 ) ) );
rpt = obj << report;
scptObj = rpt[Outline Box( "Prediction Profiler" )] << get scriptable object;
scptObj << Save Bagged Predictions( 2 );
n = dt << Get Column Names( string );
col1 = Contains( n, "Pred Formula sex=M Bagged Mean" );
col2 = Contains( n, "sex=M Bootstrap Std Err" );
col3 = Contains( n, "StdError sex=M Bagged Mean" );
```

**Code Explanation**:

1. Open data table.
2. Fit nominal logistic model.
3. Run prediction profiler.
4. Retrieve report object.
5. Access prediction profiler outline box.
6. Get scriptable object.
7. Save bagged predictions.
8. Get column names from data table.
9. Check for "Pred Formula sex=M Bagged Mean".
10. Check for "sex=M Bootstrap Std Err".
11. Check for "StdError sex=M Bagged Mean".



### Example 368
> **Summary**: Runs a regression analysis to predict height based on age, sex, and weight, with minimal reporting and bagged predictions, while ensuring reproducibility through random seeding.

<!-- Keywords: #JMPScriptingLanguage, #RegressionAnalysis, #PredictiveModeling, #DataTableOperations, #Profiler -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :height ),
	Effects( :age, :sex, :weight ),
	Personality( Standard Least Squares ),
	Emphasis( Minimal Report ),
	Run( Profiler( Save Bagged Predictions( 2, Random Seed( 12345 ) ) ) )
);
latest = Column( 8 ) << getasmatrix;
Close( dt, nosave );
previous = [107.296386796026, 118.880827902028, 117.631012957427, 180.228036572534, 101.707530620837, 131.178240427961, 134.078348558084,
153.54576996098, 99.0560149107187, 156.009845512103, 102.871396088845, 163.247295467457, 163.655558208347, 150.262368291464,
135.529673542059, 138.643995319214, 135.767024502089, 134.377803249253, 136.595545330826, 136.641050544328];
```

**Code Explanation**:

1. Open data table.
2. Fit model with height as response.
3. Include age, sex, weight as effects.
4. Use standard least squares personality.
5. Generate minimal report.
6. Run profiler with bagged predictions.
7. Set random seed for reproducibility.
8. Extract latest predictions matrix.
9. Close data table without saving.
10. Define previous predictions array.



### Example 369
> **Summary**: Fits a logistic regression model to predict sex based on height and weight, utilizing nominal logistic personality and target level 'F', with profiler output and bagged predictions saved.

<!-- Keywords: #JMPScriptingLanguage, #LogisticRegression, #NominalLogisticPersonality, #TargetLevel, #Profiler -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :sex ),
	Effects( :height, :weight ),
	Personality( "Nominal Logistic" ),
	Target Level( "F" ),
	Run( Profiler( 1 ) )
);
rpt = obj << report;
scptObj = rpt[Outline Box( "Prediction Profiler" )] << get scriptable object;
scptObj << Save Bagged Predictions( 2, Random Seed( 12345 ) );
latest = Column( 6 ) << getasmatrix;
Close( dt, nosave );
previous = [0.790073099558239, 0.832956360234627, 0.902868750849507, 0.564710312269022, 0.960664485218417, 0.573086603022027,
0.856849435222434, 0.988792883285044, 0.835579286481847, 0.715358638688458, 0.793331169030237, 0.195515583783082, 0.461844227504816,
0.860289203802612, 0.628531763876653, 0.425924309230628, 0.420109257561788, 0.638267947297169, 0.257824769630824, 0.35921414379987,
0.331845157675685, 0.287348287414742, 0.387003635027645, 0.232043880413534, 0.0962848756504722, 0.287348287414742, 0.0648687144586094,
0.43106271132504, 0.423732028653442, 0.269142475508493, 0.300640823883263, 0.16915340619722, 0.571664355914893, 0.175188739820968,
0.310659314380646, 0.852011128592585, 0.183430150626145, 0.70101906954451, 0.23374409121397, 0.433266293026398];
```

**Code Explanation**:

1. Open data table;
2. Fit logistic regression model.
3. Set response variable to "sex".
4. Include "height" and "weight" as effects.
5. Use nominal logistic personality.
6. Set target level to "F".
7. Run profiler.
8. Extract prediction profiler report.
9. Get scriptable object from profiler.
10. Save bagged predictions with random seed.



### Example 370
> **Summary**: Fits a linear model to predict height, incorporating age, sex, and weight effects, while generating minimal reports and saving bagged predictions.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #LinearRegression, #Bagging, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :height ),
	Effects( :age, :sex, :weight ),
	Personality( Standard Least Squares ),
	Emphasis( Minimal Report ),
	Run( Profiler( Save Bagged Predictions( 2, Random Seed( 12345 ) ) ) )
);
latest = Column( 8 ) << getasmatrix;
```

**Code Explanation**:

1. Open data table.
2. Fit linear model on height.
3. Include age, sex, weight effects.
4. Use standard least squares personality.
5. Generate minimal report.
6. Run profiler with bagging.
7. Set number of bags to 2.
8. Use random seed 12345.
9. Save bagged predictions.
10. Extract matrix from latest column.



### Example 371
> **Summary**: Fits a Nominal Logistic model to predict sex based on height and weight, with bagged predictions saved for further analysis.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #PredictionProfiler, #BaggedPredictions, #ScriptableObject -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :sex ),
	Effects( :height, :weight ),
	Personality( "Nominal Logistic" ),
	Target Level( "F" ),
	Run( Profiler( 1 ) )
);
rpt = obj << report;
scptObj = rpt[Outline Box( "Prediction Profiler" )] << get scriptable object;
scptObj << Save Bagged Predictions( 2, Random Seed( 12345 ) );
latest = Column( 6 ) << getasmatrix;
```

**Code Explanation**:

1. Open data table;
2. Fit Nominal Logistic model.
3. Set response variable to "sex".
4. Include "height" and "weight" as effects.
5. Set target level to "F".
6. Run Prediction Profiler.
7. Retrieve report object.
8. Get Prediction Profiler scriptable object.
9. Save 2 bagged predictions with seed 12345.
10. Extract latest column data as matrix.



### Example 372
> **Summary**: Fits a model with specified effects and personalities, generating reports and profilers in JMP.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StepwisePersonality, #ReportGeneration, #Profiler -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :ABRASION, MODULUS ),
	Effects(
		:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
		:SILANE * :SULFUR, :SULFUR * :SULFUR
	),
	Personality( Stepwise ),
	Run()
);
Report( obj[1] )[Button Box( 2 )] << Click;
rpt2 = Report( obj[1] )[Button Box( 6 )] << Click;
Report( obj[2] )[Button Box( 2 )] << click;
rpt2 = Report( obj[2] )[Button Box( 6 )] << click;
Fit Group[1] << Profiler( 1 );
rpt = Fit Group[1] << parent;
Close( dt, no save );
b test1 = {Text Box( "¬±1.626755", fontcolor( 5 ), left ), Text Box( "49.83", fontcolor( 3 ), left ),
Text Box( "¬±2.500005", fontcolor( 5 ), left ), Text Box( "46.92", fontcolor( 3 ), left ), Text Box( "Runtime", wrapWidth( 120 ) ),
Text Box( "Weight", wrapWidth( 120 ) )};
b test2 = {Text Edit Box( "Oxy", default font id( 9 ), left ), Text Edit Box( "Oxy", default font id( 9 ), left )};
b test3 = {Number Edit Box(
	static( true ),
	drawbox( false ),
	width( 9 ),
	decimal( 99 ),
	fmtdecimal( -1 ),
	Number( 10.0162 ),
	hjust( 1 ),
	narrow( true ),
	Text Color( "Red" )
), Number Edit Box(
	static( true ),
	drawbox( false ),
	width( 9 ),
	decimal( 99 ),
	fmtdecimal( -1 ),
	Number( 72.909 ),
	hjust( 1 ),
	narrow( true ),
	Text Color( "Red" )
)};
```

**Code Explanation**:

1. Open data table;
2. Fit model with ABRASION, MODULUS as Y.
3. Include specified effects in model.
4. Use Stepwise personality for fitting.
5. Run the model.
6. Click second button box in first report.
7. Click sixth button box in first report.
8. Click second button box in second report.
9. Click sixth button box in second report.
10. Generate profiler for Fit Group.



### Example 373
> **Summary**: Analyze weight data by fitting a model with height as a predictor, grouped by sex, and highlighting effect leverage.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #ByGroup, #EffectLeverage, #StandardLeastSquares -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = fit group(
	Fit Model(
		Y( :weight ),
		X( :height ),
		by( :sex ),
		Effects( :height ),
		Personality( Standard Least Squares ),
		Set Alpha Level( 0.05 ),
		Emphasis( Effect Leverage ),
		Run()
	),
	<<{Profiler( 1, Confidence Intervals( 1 ), Term Value( height( 60.889 ) ) )}
);
rpt = obj << parent;
```

**Code Explanation**:

1. Open data_table data
2. Create fit group object.
3. Fit model for weight.
4. Use height as predictor.
5. Group by sex variable.
6. Specify height effect.
7. Use standard least squares.
8. Set alpha level to 0.05.
9. Focus on effect leverage.
10. Run the analysis.



### Example 374
> **Summary**: Fits a linear model with height as Y and weight as effect, generating prediction profiler values and standard error formulas.

<!-- Keywords: #JSLScripting, #LinearModel, #PredictionProfiler, #StandardErrorFormula, #FitModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :height ),
	Effects( :weight ),
	Personality( Standard Least Squares ),
	Emphasis( Effect Leverage ),
	Run Model(
		Profiler( 1, Confidence Intervals( 1 ), Term Value( weight( 120 ) ) ),
		:height << {Plot Actual by Predicted( 1 ), Plot Residual by Predicted( 1 ), Plot Effect Leverage( 1 )}
	)
);
rpt = obj << report;
expected1 = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 3 )] << get text, "[," )[1] );
expected2 = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 4 )] << get text, "]" )[1] );
obj << prediction formula;
obj << stdErr pred formula;
obj = dt << Profiler(
	Y( :Pred Formula height, :PredSE height ),
	Profiler( 1, Confidence Intervals( 1 ), Term Value( weight( 120 ) ) ),
	Use SE Formula( 1 )
);
rpt = obj << report;
compared1 = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 3 )] << get text, "[," )[1] );
compared2 = Num( Words( rpt[Outline Box( "Prediction Profiler" )][Text Box( 4 )] << get text, "]" )[1] );
```

**Code Explanation**:

1. Open data table.
2. Fit linear model with height as Y and weight as effect.
3. Set personality to Standard Least Squares.
4. Emphasize effect leverage.
5. Run model with profiler.
6. Plot actual vs predicted, residual vs predicted, and effect leverage.
7. Extract prediction profiler values.
8. Create prediction and standard error formulas.
9. Open profiler with prediction and standard error formulas.
10. Compare extracted values with new profiler values.



### Example 375
> **Summary**: Runs the fitting and profiling of a Nominal Logistic model to predict size based on country, type, and marital status, with desirability functions applied.

<!-- Keywords: #JSLScriptingLanguage, #NominalLogisticModel, #DesirabilityFunctions, #Profiler, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fm = dt << Fit Model( Y( :size ), Effects( :country, :type, :marital status ), Personality( "Nominal Logistic" ) );
fm << Run Model(
	Likelihood Ratio Tests( 1 ),
	Wald Tests( 0 ),
	Profiler(
		1,
		Desirability Functions( 1 ),
		size << Category Desirability( {"Large", 0.5}, {"Medium", 0.66}, {"Small", 0.2} ),
		Term Value( country( "American" ), Type( "Family" ), marital status( "Married" ) ),
		Output Random Table( 5000 )
	)
);
ort = Data Table( 1 );
ort << Sort( By( country, type, marital status ), Replace Table );
tmport = ort << Summary( Group( :country, :type, :marital status ), Mean( :Desirability ), Std Dev( :Desirability ) );
means = Column( "Mean(Desirability)" ) << get values;
stds = Column( "Std Dev(Desirability)" ) << get values;
Close( ort, No Save );
Close( dt, No Save );
dt = New Table( "Test",
	New Column( "X", Values( [-2, -1, 0, 1, 2] ) ),
	New Column( "Formula",
		Formula( 0.01 + X ^ 2 ),
		Set Property(
			"Response Limits",
			{Goal( Maximize ), Lower( 0.00, 0.066 ), Middle( 2.25, 0.5 ), Upper( 4.5, 0.9819 ), Importance( 1 )}
		)
	)
);
pLinear = dt << Profiler( Y( :Formula ), Profiler( 1, Desirability Functions( 1 ) ), );
pLinear << Save Desirability Formula;
pLinear << SendToReport( Dispatch( {"Prediction Profiler"}, "10000", ScaleBox, {Scale( "Log" )} ) );
  
pLinear << Save Desirability Formula;
  
myExpCol = Column( "Desirability" );
myRealCol = Column( "Desirability 2" );
```

**Code Explanation**:

1. Open data table.
2. Fit Nominal Logistic model on size.
3. Run model with Likelihood Ratio Tests.
4. Enable Profiler with desirability functions.
5. Set category desirability for size.
6. Set term values for country, type, marital status.
7. Output random table with 5000 rows.
8. Sort table by country, type, marital status.
9. Summarize data by mean and standard deviation of desirability.
10. Create new table with X and formula columns.
11. Enable Profiler for formula with desirability functions.
12. Save desirability formula.
13. Set log scale for Prediction Profiler.
14. Save desirability formula again.
15. Assign Desirability column to myExpCol.
16. Assign Desirability 2 column to myRealCol.



### Example 376
> **Summary**: Fits a linear model to data, profiling the results, and extracting relevant information from windows.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #Profiler, #AssociativeArray, #DataTable -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
obj1 = dt1 << Fit Model(
	Y( :Name( "Midrange Price ($1000)" ) ),
	Effects( :Air Bags Standard, :Drive Train Type, :Name( "Engine Size (liters)" ) ),
	Personality( Standard Least Squares ),
	Emphasis( Minimal Report ),
	Run
);
befAA = Associative Array( Window() << get window title );
obj1 << Profiler( 1, Output Grid Table( 1 ) );
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
dt2 = Data Table( aftlst[1] );
```

**Code Explanation**:

1. Open data table.
2. Fit linear model to data.
3. Create associative array of windows.
4. Launch profiler from fit model.
5. Create new associative array of windows.
6. Remove unchanged windows from array.
7. Extract keys from associative array.
8. Open first data table from list.



### Example 377
> **Summary**: Fits a model to predict loan values based on job and reason, generating a prediction formula column and retrieving its properties.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #PredictionFormula, #ColumnProperties, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :LOAN ),
	Effects( :REASON, :JOB ),
	Informative Missing( 1 ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run()
);
obj << Prediction Formula;
colPropLst = Column( dt, "Pred Formula LOAN" ) << Get Properties List;
colProp = Column( dt, "Pred Formula LOAN" ) << Get Column Properties;
colForm = Column( dt, "Pred Formula LOAN" ) << Get Formula;
obj1 = dt << Profiler( Y( :Pred Formula LOAN ) );
rpt1 = obj1 << report;
predProfScptObj = rpt1[Outline Box( "Prediction Profiler" )] << get scriptable object;
obj1 << Term Value( :JOB( "" ), :REASON( "" ) );
jobval = rpt1[Outline Box( "Prediction Profiler" )][Text Box( 3 )] << get text;
reasonval = rpt1[Outline Box( "Prediction Profiler" )][Text Box( 5 )] << get text;
predProfLoanPred = Num( rpt1[Outline Box( "Prediction Profiler" )][Text Box( 2 )] << get text );
loanPredCol = Column( dt, "Pred Formula LOAN" )[(dt << Select Where( :JOB == "" & :REASON == "" )) << get selected rows];
```

**Code Explanation**:

1. Open data table.
2. Fit model with LOAN as response.
3. Include REASON and JOB as effects.
4. Use Standard Least Squares personality.
5. Generate minimal report.
6. Run the model.
7. Create prediction formula column.
8. Get properties list for prediction column.
9. Retrieve column properties.
10. Extract formula from prediction column.



### Example 378
> **Summary**: Fits a model, creating a prediction formula, and profiling the results in JMP, while also extracting specific script lines from open windows.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #PredictionFormula, #Profiler, #ScriptExtraction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
 
obj1 = dt << Fit Model(
	Y( :weight ),
	Effects( :height, :sex, :age ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
obj1 << Prediction Formula;
obj2 = dt << Profiler( Y( :Pred Formula weight ), Profiler );
obj2 << Show Formulas;
For( ii = 1, ii <= N Items( Window() ), ii++,
	If( (Window()[ii] << get window title) == "Profiler formulas",
		scpt = Window()[ii][Script Box( 1 )] << get line text( 17 );
		Window()[ii] << Close Window;
		Break();
	)
);
```

**Code Explanation**:

1. Open table.
2. Fit model with specified effects.
3. Create prediction formula.
4. Open profiler for prediction.
5. Show profiler formulas.
6. Loop through open windows.
7. Find "Profiler formulas" window.
8. Extract specific script line.
9. Close "Profiler formulas" window.
10. Exit loop.



### Example 379
> **Summary**: Fits a linear model with Runtime as Y, including Oxy and RstPulse as effects, using Standard Least Squares personality and generating a minimal report.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #ModelFitting, #DataAnalysis, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :Runtime ),
	Effects( :Oxy, :RstPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Profiler( 1, Desirability Functions( 1 ) ) )
);
obj << Surface profiler( 1 );
rpt = obj << report;
obj1 = obj << redo analysis;
rpt1 = obj1 << report;
pp = rpt[Outline Box( "Prediction Profiler" )] << get scriptable object;
pp << Maximize and Remember;
```

**Code Explanation**:

1. Open data table;
2. Fit linear model with Runtime as Y.
3. Include Oxy and RstPulse as effects.
4. Use Standard Least Squares personality.
5. Generate minimal report.
6. Run Prediction Profiler.
7. Create Surface profiler.
8. Retrieve model report.
9. Redo the analysis.
10. Retrieve new report.



### Example 380
> **Summary**: Fits a nominal logistic model to a data table, with profiler settings and output random table configuration.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #ProfilerSettings, #RandomTableOutput, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fm = dt << Fit Model( Y( :size ), Effects( :country, :type, :marital status ), Personality( "Nominal Logistic" ) );
fm << Run Model(
	Likelihood Ratio Tests( 1 ),
	Wald Tests( 0 ),
	Profiler(
		1,
		Desirability Functions( 1 ),
		size << Category Desirability( {"Large", 0.5}, {"Medium", 0.66}, {"Small", 0.2} ),
		Term Value( country( "American" ), Type( "Family" ), marital status( "Married" ) ),
		Output Random Table( 5000 )
	)
);
ort = Data Table( 1 );
ort << Sort( By( country, type, marital status ), Replace Table );
tmport = ort << Summary( Group( :country, :type, :marital status ), Mean( :Desirability ), Std Dev( :Desirability ) );
means = Column( "Mean(Desirability)" ) << get values;
stds = Column( "Std Dev(Desirability)" ) << get values;
```

**Code Explanation**:

1. Open data table.
2. Fit nominal logistic model.
3. Run model with profiler.
4. Enable likelihood ratio tests.
5. Disable Wald tests.
6. Configure profiler settings.
7. Set category desirability for size.
8. Define term values for predictors.
9. Output random table with 5000 rows.
10. Sort table by country, type, marital status.



### Example 381
> **Summary**: Fits a model with transformed response, including interaction effects and standard least squares personality, and generates prediction formulas and profiler reports.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #PredictiveAnalytics, #DataTransformation, #ProfilerReports -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( Transform Column( "Square Root[y]", Format( "Fixed Dec", 6, 0 ), Formula( Sqrt( :y ) ) ) ),
	Y( :"Square Root[y]"n ),
	Effects( :Drug, :x, :Drug * :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Name( "Square Root[y]" ) << {Plot Actual by Predicted( 1 ), Plot Residual by Predicted( 1 ), Plot Effect Leverage( 1 ),
		Prediction Formula, StdErr Pred Formula}
	)
);
dt << New Column( "Pred Formula Square Root[y]",
	Formula( Sqrt( :Pred Formula y ) ),
	Set Property( "Predicting", {:y, Creator( "Fit Least Squares" ), ID( 1889078400 ), Std Dev( 0.866879155464266 )} )
);
obj1 = dt << Profiler(
	Y( :Name( "Pred Formula Square Root[y]" ), :Name( "PredSE Square Root[y]" ) ),
	Profiler( 1 ),
	Expand,
	Use SE Formula( 0 )
);
rpt1 = obj1 << report;
d1 = rpt1[Outline Box( "Prediction Profiler" )][Text Box( 5 )] << get text;
x1 = rpt1[Outline Box( "Prediction Profiler" )][Number Edit Box( 1 )] << get;
pred1 = Num( rpt1[Outline Box( "Prediction Profiler" )][Text Box( 2 )] << get text );
obj2 = dt << Profiler(
	Y( :Name( "Pred Formula Square Root[y]" ), :Name( "PredSE Square Root[y]" ) ),
	Profiler( 1 ),
	Expand,
	Use SE Formula( 1 )
);
rpt2 = obj2 << report;
d2 = rpt2[Outline Box( "Prediction Profiler" )][Text Box( 9 )] << get text;
x2 = rpt2[Outline Box( "Prediction Profiler" )][Number Edit Box( 1 )] << get;
pred2 = Num( rpt2[Outline Box( "Prediction Profiler" )][Text Box( 2 )] << get text );
```

**Code Explanation**:

1. Open data table;
2. Fit a model with transformed response.
3. Include interaction effects.
4. Use standard least squares personality.
5. Emphasize effect leverage.
6. Generate prediction formulas.
7. Create new column for predicted values.
8. Configure predicting properties.
9. Generate first profiler report.
10. Extract data from profiler reports.



### Example 382
> **Summary**: Fits a Partial Least Squares model with multiple responses, using K-Fold validation and NIPALS method for fitting, while excluding intercept term and disabling polynomial centering.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #KFoldValidation, #NIPALSMethod, #MultipleResponses -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :ls, :ha, :dt ),
	Effects(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	Personality( "Partial Least Squares" ),
	Run(
		Initial Number of Factors( 15 ),
		Validation Method( KFold( 7 ), Initial Number of Factors( 15 ) ),
		Fit(
			Method( NIPALS ),
			Number of Factors( 10 ),
			Profiler( 1, Confidence Intervals( 1 ), Extrapolation Details( 1 ), Extrapolation Control Option( "On" ) )
		)
	)
);
rpt = obj << report;
mat = dt << Get as matrix( dt << get column group( "Intensities" ) );
```

**Code Explanation**:

1. Open data table.
2. Fit model with multiple responses.
3. Include all variables as effects.
4. Exclude intercept term.
5. Disable polynomial centering.
6. Use Partial Least Squares personality.
7. Set initial number of factors to 15.
8. Use K-Fold validation with 7 folds.
9. Apply NIPALS method for fitting.
10. Set number of factors to 10.
11. Enable profiler with confidence intervals.
12. Enable extrapolation details and control.
13. Generate model report.
14. Extract matrix from "Intensities" column group.



### Example 383
> **Summary**: Fits a Partial Least Squares model to a data table, imputing missing values using EM method, and configuring profiler settings for NIPALS fit.

<!-- Keywords: #PartialLeastSquares, #EMImputation, #NIPALSFit, #JMPScriptingLanguage, #DataTableAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[1, 5] = .;
dt[2, 10] = .;
dt[3, 15] = .;
dt[4, 27] = .;
obj = dt << Fit Model(
	Y( :ls, :ha, :dt ),
	Effects(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
		:v24, :v25, :v26, :v27
	),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	Personality( "Partial Least Squares" ),
	Impute Missing Data( 1 ),
	Imputation Method( "EM" ),
	Max Iterations( 10 ),
	Run(
		Set Random Seed( 111 ),
		Initial Number of Factors( 15 ),
		Validation Method( KFold( 7 ), Initial Number of Factors( 15 ) ),
		Fit(
			Method( NIPALS ),
			Number of Factors( 10 ),
			Profiler( 1, Confidence Intervals( 1 ), Extrapolation Details( 1 ), Extrapolation Control Option( "On" ) )
		)
	)
);
rpt = obj << report;
scrobj = rpt["NIPALS?"] << Get Scriptable Object;
dt_imp = scrobj << Save Imputation;
mat = dt_imp << Get as matrix;
mat = mat[0, 1 :: 27];
```

**Code Explanation**:

1. Open data table;
2. Set cell [1, 5] to missing.
3. Set cell [2, 10] to missing.
4. Set cell [3, 15] to missing.
5. Set cell [4, 27] to missing.
6. Fit model with specified effects.
7. Use Partial Least Squares personality.
8. Impute missing data using EM method.
9. Set max iterations to 10.
10. Configure and run NIPALS fit with profiler settings.



### Example 384
> **Summary**: Fits a linear model to predict continuous outcomes, utilizing Standard Least Squares personality and effect screening for optimal parameter estimation.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #EffectScreening, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
X = dt << Get as Matrix;
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Extrapolation Details( 1 ),
			Desirability Functions( 1 ),
			Extrapolation Control Option( "On" ),
			Arrange in Rows( 6 ),
			Term Value(
				Age( 67.65, Lock( 0 ), Show( 1 ) ),
				Gender( 2, Lock( 0 ), Show( 1 ) ),
				BMI( 20.5, Lock( 0 ), Show( 1 ) ),
				BP( 103.67, Lock( 0 ), Show( 1 ) ),
				Total Cholesterol( 210, Lock( 0 ), Show( 1 ) ),
				LDL( 85.2, Lock( 0 ), Show( 1 ) ),
				HDL( 35, Lock( 0 ), Show( 1 ) ),
				TCH( 6, Lock( 0 ), Show( 1 ) ),
				LTG( 6.107, Lock( 0 ), Show( 1 ) ),
				Glucose( 124, Lock( 0 ), Show( 1 ) )
			)
		),
		:Y << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 1 ), Lack of Fit( 0 ), Sorted Estimates( 0 ),
		Plot Actual by Predicted( 1 ), Plot Regression( 0 ), Plot Residual by Predicted( 1 ), Plot Studentized Residuals( 1 ),
		Plot Effect Leverage( 0 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 1 )}
	)
);
rpt = obj << report;
scrobj_profiler = rpt[Outline Box( "Prediction Profiler" )] << Get Scriptable Object;
```

**Code Explanation**:

1. Open data table;
2. Extract data matrix.
3. Initiate Fit Model platform.
4. Set response variable.
5. Define predictor variables.
6. Choose Standard Least Squares personality.
7. Focus on effect screening.
8. Run model with profiler.
9. Enable confidence intervals.
10. Display extrapolation details.



### Example 385
> **Summary**: Fits a linear model with height as response and weight as effect, utilizing standard least squares personality and emphasizing effect leverage.

<!-- Keywords: #JMPScriptingLanguage, #LinearModel, #StandardLeastSquares, #EffectLeverage, #Profiler -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Model(
	Y( :height ),
	Effects( :weight ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run Model(
		Profiler( 1, Confidence Intervals( 1 ), Term Value( weight( 120 ) ), Remember Settings( "Setting 1" ) ),
		:height << {Plot Actual by Predicted( 1 ), Plot Residual by Predicted( 1 ), Plot Effect Leverage( 1 )}
	)
);
rpt = obj << report;
b settings1 = [120, 64.5826154806492, 63.4074130207982, 65.7578179405001];
settings1 = rpt[Outline Box( "Remembered Settings" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Fit linear model with height as response.
3. Use weight as effect.
4. Set modeling personality to standard least squares.
5. Emphasize effect leverage.
6. Run the model.
7. Create profiler with confidence intervals.
8. Set term value for weight to 120.
9. Remember settings as "Setting 1".
10. Plot actual vs predicted, residual vs predicted, and effect leverage.



### Example 386
> **Summary**: Fits a linear model to predict weight based on height and sex, while handling missing data and providing detailed reports.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #DataTable, #FitModel, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
(dt:sex)[1] = "";
obj = dt << Fit Model(
	Y( :weight ),
	Effects( :height, :sex ),
	Informative Missing( 1 ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( Profiler( 1 ) )
);
rpt = obj << report;
profileObj = rpt[Outline Box( "Prediction Profiler" )] << get scriptable object();
rpt[Outline Box( "Prediction Profiler" )][FrameBox( 1 )] << Y Axis( Max( 100 ) );
predProfilerYMax = rpt[Outline Box( "Prediction Profiler" )][AxisBox( 1 )] << Get Max;
regressPlotYMax = rpt[Outline Box( "Regression Plot" )][AxisBox( 1 )] << Get Max;
actVsPredPlotYMax = rpt[Outline Box( "Actual by Predicted Plot" )][AxisBox( 1 )] << Get Max;
profileObj << Adapt Y Axis( 1 );
predProfilerYMax = rpt[Outline Box( "Prediction Profiler" )][AxisBox( 1 )] << Get Max;
regressPlotYMax = rpt[Outline Box( "Regression Plot" )][AxisBox( 1 )] << Get Max;
actVsPredPlotYMax = rpt[Outline Box( "Actual by Predicted Plot" )][AxisBox( 1 )] << Get Max;
```

**Code Explanation**:

1. Open table.
2. Set first sex value to empty.
3. Fit linear model.
4. Specify response variable.
5. Include effects.
6. Handle missing data.
7. Choose modeling personality.
8. Set emphasis.
9. Run profiler.
10. Retrieve report.



### Example 387
> **Summary**: Fits a model to predict weight based on age, sex, and height, with emphasis on effect leverage and response limits.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #EffectLeverage, #ResponseLimits -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run Model(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Desirability Functions( 1 ),
			weight << Response Limits( {Lower( 60, 0.066 ), Middle( 120, 0.5 ), Upper( 180, 0.9819 ), Goal( Maximize ), Importance( 1 )} ),
			Term Value( age( 17 ), sex( "F" ), height( 70 ) ),
			Remember Settings( 1 )
		),
		:weight << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 0 ), Effect Tests( 0 ), Effect Details( 0 ),
		Lack of Fit( 0 ), Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ), Plot Effect Leverage( 0 ),
		{:age << {LSMeans Table( 0 )}, :sex << {LSMeans Table( 0 )}}}
	)
);
rep = Report( obj );
vallist = (rep[Outline Box( "Remembered Settings" )][Table Box( 1 )] << get as matrix);
```

**Code Explanation**:

1. Open data table;
2. Fit model with weight as response.
3. Include age, sex, height as effects.
4. Use Standard Least Squares personality.
5. Emphasize Effect Leverage.
6. Run the model.
7. Create a profiler.
8. Enable confidence intervals.
9. Enable desirability functions.
10. Set response limits for weight.



### Example 388
> **Summary**: Fits a linear model to a data table, generating prediction formulas and confidence intervals with minimal report output.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #LinearRegression, #ConfidenceIntervals, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( Standard Least Squares ),
	Emphasis( Minimal Report ),
	Run( Profiler( 1, Confidence Intervals( 1 ), Term Value( Drug( "a", Lock( 0 ), Show( 1 ) ), x( 12, Lock( 0 ), Show( 1 ) ) ) ) )
);
obj << Prediction Formula;
obj << Mean Confidence Limit Formula( .05 );
rpt = obj << report;
predFormY = Words( rpt["Prediction Profiler"][List Box( 6 )] << get text, "[,]" )[1 :: 3];
predY = Num( predFormY[1] );
lowCI = Num( predFormY[2] );
higCI = Num( predFormY[3] );
obj1 = dt << Profiler( Y( :Pred Formula y ) );
rpt1 = obj1 << report;
predFormY1 = Words( rpt1["Prediction Profiler"][List Box( 6 )] << get text, "[,]" )[1 :: 3];
predY1 = Num( predFormY1[1] );
lowCI1 = Num( predFormY1[2] );
higCI1 = Num( predFormY1[3] );
```

**Code Explanation**:

1. Open data table;
2. Fit linear model with variables.
3. Use Standard Least Squares personality.
4. Emphasize minimal report output.
5. Run profiler with confidence intervals.
6. Set term values for Drug and x.
7. Generate prediction formula.
8. Calculate mean confidence limit.
9. Extract prediction profiler report.
10. Retrieve prediction, lower, and upper confidence limits.



### Example 389
> **Summary**: Runs the fitting and profiling of a linear model to predict y values, configuring confidence intervals and prediction intervals for minimal report.

<!-- Keywords: #JSLScriptingLanguage, #LinearModel, #ConfidenceIntervals, #PredictionIntervals, #MinimalReport -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( Standard Least Squares ),
	Emphasis( Minimal Report ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Prediction Intervals( 1 ),
			Term Value( Drug( "a", Lock( 0 ), Show( 1 ) ), x( 12, Lock( 0 ), Show( 1 ) ) )
		)
	)
);
obj << Prediction Formula;
obj << Mean Confidence Limit Formula;
obj << Indiv Confidence Limit Formula;
rpt = obj << report;
predFormY = Words( rpt["Prediction Profiler"][List Box( 6 )] << get text, "[,]" )[{1, 2, 3, 5, 6}];
predY = Num( predFormY[1] );
lowCI = Num( predFormY[2] );
higCI = Num( predFormY[3] );
lowPI = Num( predFormY[4] );
higPI = Num( predFormY[5] );
obj1 = dt << Profiler( Y( :Pred Formula y ), Confidence Intervals( 1 ), Prediction Intervals( 1 ) );
rpt1 = obj1 << report;
predFormY1 = Words( rpt1["Prediction Profiler"][List Box( 6 )] << get text, "[,]" )[{1, 2, 3, 5, 6}];
predY1 = Num( predFormY1[1] );
lowCI1 = Num( predFormY1[2] );
higCI1 = Num( predFormY1[3] );
lowPI1 = Num( predFormY1[4] );
higPI1 = Num( predFormY1[5] );
```

**Code Explanation**:

1. Open data table;
2. Fit linear model.
3. Set model effects.
4. Use minimal report.
5. Run profiler analysis.
6. Configure confidence intervals.
7. Configure prediction intervals.
8. Set term values.
9. Extract prediction formula.
10. Extract confidence limits.



### Example 390
> **Summary**: Analyze and visualize a Nominal Logistic model, including frequency variable inclusion, response variable specification, effect variable addition, likelihood ratio tests, profiler output, and probability formula saving.

<!-- Keywords: #NominalLogisticModel, #JMPScriptingLanguage, #DataAnalysis, #ProbabilityFormula, #ShapleyValues -->

**Code**:
```jsl
dt5 = Open("data_table.jmp");
obj5 = dt5 << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run( Likelihood Ratio Tests( 1 ), Wald Tests( 0 ), Profiler( 1, Save Shapley Values ), Logistic Plot( 1 ) )
);
obj5 << Save Probability Formula;
dt5:"SHAP Intercept for Probability(Response=Died)"n << Exclude( 0 );
dt5 << New Column( "Sum of SHAP (Response=Died)",
	Formula( Sum( :"SHAP Intercept for Probability(Response=Died)"n, :"SHAP ln(dose) for Probability(Response=Died)"n ) )
);
dt5:"SHAP Intercept for Probability(Response=Cured)"n << Exclude( 0 );
dt5 << New Column( "Sum of SHAP (Response=Cured)",
	Formula( Sum( :"SHAP Intercept for Probability(Response=Cured)"n, :"SHAP ln(dose) for Probability(Response=Cured)"n ) )
);
dt5 << New Column( "Absolute Deviation(Response=Died)", Formula( Abs( :"Sum of SHAP (Response=Died)"n - :"Prob[Died]"n ) ) );
dt5 << New Column( "Max Deviation (Response=Died)", Formula( Col Max( :"Absolute Deviation (Response=Died)"n ) ) );
:"Max Deviation (Response=Died)"n[1];
dt5 << New Column( "Absolute Deviation(Response=Cured)", Formula( Abs( :"Sum of SHAP (Response=Cured)"n - :"Prob[Cured]"n ) ) );
dt5 << New Column( "Max Deviation (Response=Cured)", Formula( Col Max( :"Absolute Deviation (Response=Cured)"n ) ) );
:"Max Deviation (Response=Cured)"n[1];
Window( "data_table - Fit Nominal Logistic" ) << close window;
```

**Code Explanation**:

1. Open data table;
2. Fit Nominal Logistic model.
3. Include frequency variable.
4. Set response variable.
5. Add effect variable.
6. Run likelihood ratio tests.
7. Enable profiler, save Shapley values.
8. Generate logistic plot.
9. Save probability formula.
10. Unexclude SHAP intercept for Died.
11. Create Sum of SHAP (Died).
12. Unexclude SHAP intercept for Cured.
13. Create Sum of SHAP (Cured).
14. Calculate absolute deviation for Died.
15. Find max deviation for Died.
16. Calculate absolute deviation for Cured.
17. Find max deviation for Cured.
18. Close fit window.



### Example 391
> **Summary**: Fits a linear model to predict weight based on age, sex, and height, with confidence intervals and simulator configurations.

<!-- Keywords: #JMPScriptingLanguage, #LinearModel, #ConfidenceIntervals, #Simulator, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value( age( 12, Lock( 0 ), Show( 1 ) ), sex( "F", Lock( 0 ), Show( 1 ) ), height( 52.25, Lock( 0 ), Show( 1 ) ) ),
			Simulator( 1, Factors( age << Fixed( 0 ), sex << Fixed( 0 ), height << Fixed( 52.25 ) ), Responses( weight << No Noise ) )
		),
		:weight << {Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ), Plot Effect Leverage( 0 )}
	),
	SendToReport(
		Dispatch( {"Response weight", "Prediction Profiler", "Simulator"}, "Simulate to Table", OutlineBox, {Close( 0 )} ),
		Dispatch( {"Response weight", "Prediction Profiler", "Simulator", "Simulate to Table"}, "Sequencing", OutlineBox, {Close( 0 )} )
	)
);
```

**Code Explanation**:

1. Open table.
2. Fit linear model.
3. Set response variable.
4. Add effects.
5. Choose personality.
6. Set emphasis.
7. Run profiler.
8. Configure confidence intervals.
9. Set term values.
10. Configure simulator.



### Example 392
> **Summary**: Fits a model to predict weight based on height and sex, generating a report with main effects and profiling predictions.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #PredictionProfiling, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
(dt:sex)[1] = "";
obj = dt << Fit Model(
	Y( :weight ),
	Effects( :height, :sex ),
	Informative Missing( 1 ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( Profiler( 1, Dependent Resampled Inputs( 1 ) ) )
);
rpt = obj << report;
mainEff = rpt[Outline Box( "Summary Report" )][Number Col Box( "Main Effect" )] << get as matrix;
profileObj = rpt[Outline Box( "Prediction Profiler" )] << get scriptable object();
profileObj << Set to Data in Row( 1 );
wt1 = Num( rpt[Outline Box( "Prediction Profiler" )][Text Box( 2 )] << get text );
sex1 = rpt[Outline Box( "Prediction Profiler" )][Text Box( 5 )] << get text;
ht1 = Num( rpt[Outline Box( "Prediction Profiler" )][Number Edit Box( 1 )] << get text );
```

**Code Explanation**:

1. Open table.
2. Modify sex value.
3. Fit model.
4. Generate report.
5. Extract main effects.
6. Get profiler object.
7. Set data to row.
8. Retrieve weight prediction.
9. Retrieve sex prediction.
10. Retrieve height prediction.



### Example 393
> **Summary**: Fits a model to predict weight based on height and sex, generating a summary report with main effect matrix and prediction profiler output.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #PredictiveModeling, #DataAnalysis, #StatisticalReporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
(dt:sex)[1] = "";
obj = dt << Fit Model(
	Y( :weight ),
	Effects( :height, :sex ),
	Informative Missing( 0 ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( Profiler( 1, Dependent Resampled Inputs( 1 ) ) )
);
rpt = obj << report;
mainEff = rpt[Outline Box( "Summary Report" )][Number Col Box( "Main Effect" )] << get as matrix;
profileObj = rpt[Outline Box( "Prediction Profiler" )] << get scriptable object();
profileObj << Set to Data in Row( 1 );
wt1 = Num( rpt[Outline Box( "Prediction Profiler" )][Text Box( 2 )] << get text );
sex1 = rpt[Outline Box( "Prediction Profiler" )][Text Box( 5 )] << get text;
ht1 = Num( rpt[Outline Box( "Prediction Profiler" )][Number Edit Box( 1 )] << get text );
```

**Code Explanation**:

1. Open data table;
2. Modify first sex value.
3. Fit model with weight as response.
4. Include height and sex as effects.
5. Use standard least squares personality.
6. Emphasize effect leverage.
7. Run profiler with resampled inputs.
8. Extract summary report.
9. Get main effect matrix.
10. Retrieve prediction profiler object.



### Example 394
> **Summary**: Fits an ordinal logistic model to a data table, incorporating height and weight effects, and generates a report with likelihood ratio tests and profiler results.

<!-- Keywords: #JMPScriptingLanguage, #OrdinalLogisticRegression, #FitModel, #Profiler, #LikelihoodRatioTests -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :age ),
	Effects( :height, :weight ),
	Personality( "Ordinal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Profiler( 1, Independent Uniform Inputs( 1 ), Independent Resampled Inputs( 1 ), Dependent Resampled Inputs( 1 ) )
	)
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table;
2. Fit ordinal logistic model.
3. Set response variable as age.
4. Include height and weight effects.
5. Enable likelihood ratio tests.
6. Generate profiler.
7. Use independent uniform inputs.
8. Use independent resampled inputs.
9. Use dependent resampled inputs.
10. Retrieve report object.



### Example 395
> **Summary**: Fits a Nominal Logistic model to a data table, generating reports on variable importance for independent uniform inputs, independent resampled inputs, and dependent resampled inputs.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #VariableImportance, #ModelFitting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :sex ),
	Effects( :height, :weight ),
	Personality( "Nominal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Profiler( 1, Independent Uniform Inputs( 1 ), Independent Resampled Inputs( 1 ), Dependent Resampled Inputs( 1 ) )
	)
);
rpt = obj << report;
unifInputs = rpt[Outline Box( "Variable Importance:Independent Uniform Inputs" )] << get scriptable object;
indResampl = rpt[Outline Box( "Variable Importance:Independent Resampled Inputs" )] << get scriptable object;
depResampl = rpt[Outline Box( "Variable Importance:Dependent Resampled Inputs" )] << get scriptable object;
```

**Code Explanation**:

1. Open table.
2. Fit Nominal Logistic model.
3. Set response variable.
4. Add effects variables.
5. Run likelihood ratio tests.
6. Generate profiler.
7. Enable independent uniform inputs.
8. Enable independent resampled inputs.
9. Enable dependent resampled inputs.
10. Retrieve report objects.



### Example 396
> **Summary**: Analyze a time series dataset by fitting a linear model, removing linear trends, and generating reports for detrended series.

<!-- Keywords: #JMPScriptingLanguage, #TimeSeriesAnalysis, #LinearModeling, #DataVisualization, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
objLS1 = dt << Fit Model(
	Y( :Passengers ),
	Effects( :Time ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Residuals( 1 ) )
);
rptls = Report( objLS1 );
b beta = (rptls[Outline Box( "Parameter Estimates" )][Table Box( 1 )] << get as matrix)[1 :: 2, 1];
obj1 = dt << Time Series( Y( :Passengers ), Remove Linear Trend( 1 ) );
obj1 << Remove Linear Trend( 1 );
rpt1 = Report( obj1 );
stat1 = rpt1[Outline Box( "Time Series Passengers (Detrended)" )][Table Box( 2 )] << get as matrix;
b det y = dt:Residual Passengers << get values;
det y1 = dt:Name( "Passengers (Detrended)" ) << get values;
beta1 = rpt1[Outline Box( "Time Series Passengers (Detrended)" )][Outline Box( "Linear Trend" )][Table Box( 1 )] << get as matrix;
obj2 = dt << Time Series( Y( :Name( "Passengers (Detrended)" ) ), );
rpt2 = Report( obj2 );
stat2 = rpt2[Outline Box( "Time Series Passengers (Detrended)" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Fit linear model to passengers.
3. Retrieve parameter estimates.
4. Create time series object.
5. Remove linear trend.
6. Generate report for detrended series.
7. Extract residual values.
8. Extract detrended values.
9. Retrieve trend coefficients.
10. Analyze detrended time series.



### Example 397
> **Summary**: Fits a nominal logistic model to predict size, considering country, type, and marital status effects, with profiler output generation.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #ProfilerOutput, #ModelFitting, #DataTableOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Fit Model( Y( :size ), Effects( :country, :type, :marital status ), Personality( Nominal Logistic ), Run Model( Profiler( 1 ) ) );
```

**Code Explanation**:

1. Open data table.
2. Fit nominal logistic model.
3. Set response variable to size.
4. Include country, type, marital status effects.
5. Run the model.
6. Generate profiler output.



### Example 398
> **Summary**: Runs a linear regression analysis to model ABRASION with specified effects, using Standard Least Squares personality and Effect Screening emphasis.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #EffectScreening, #StandardLeastSquares, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SILICA * :SILANE, :SULFUR, :SILICA * :SULFUR, :SILANE * :SULFUR, :SILICA * :SILANE * :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run(
		:ABRASION << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 1 ), Effect Details( 0 ), Sorted Estimates( 0 ),
		Plot Actual by Predicted( 1 ), Plot Regression( 0 ), Plot Residual by Predicted( 1 ), Plot Studentized Residuals( 1 ),
		Plot Effect Leverage( 0 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 1 ),
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Desirability Functions( 1 ),
			Term Value( SILICA( 1.2, Lock( 0 ), Show( 1 ) ), SILANE( 50, Lock( 0 ), Show( 1 ) ), SULFUR( 2.3, Lock( 0 ), Show( 1 ) ) )
		)}
	)
);
rpt = Report( obj );
rpt[Table Box( 1 )] << Set Selected Rows( 1 :: 7 );
rpt[Outline Box( 3 )][Button Box( 1 )] << Click;
```

**Code Explanation**:

1. Open data table;
2. Launch Fit Model platform.
3. Set ABRASION as response variable.
4. Include specified effects in model.
5. Use Standard Least Squares personality.
6. Focus on Effect Screening emphasis.
7. Run model with detailed output settings.
8. Disable Summary of Fit and ANOVA.
9. Enable Parameter Estimates and plots.
10. Generate and display reports.



### Example 399
> **Summary**: Fits a standard least squares model to a data table, emphasizing effect screening and utilizing the Fit Model platform.

<!-- Keywords: #FitModel, #StandardLeastSquares, #EffectScreening, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Model( Y( :ABRASION ), Personality( "Standard Least Squares" ), Emphasis( "Effect Screening" ), Run );
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Create new data table object.
3. Launch Fit Model platform.
4. Set response variable.
5. Choose modeling personality.
6. Set analysis emphasis.
7. Run the model.
8. Retrieve fit model object.
9. Close the model window.



## Fit Model using Column
### Example 1
> **Summary**: Fits a model to predict weight based on age and height, using standard least squares and minimal report emphasis.

<!-- Keywords: #JMPScriptingLanguage, #RegressionAnalysis, #MultivariateModeling, #DataVisualization, #StatisticalModeling -->

**Code**:
```jsl
// Fit weight to age and height
// Open data table
dt = Open("data_table.jmp");
// Fit weight to age and height
Column( "age" ) <<
Set Modeling Type( "Nominal" );
Fit Model(
	Y( :weight ),
	Effects( :age, :height ),
	Personality(
		"Standard Least Squares"
	),
	Emphasis( "Minimal Report" ),
	Run(
		:weight << {Lack of Fit( 0 ),
		Plot Actual by Predicted( 0 ),
		Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 0 )},
		Effect Summary( 0 )
	)
);
```

**Code Explanation**:

1. Open table.
2. Set age modeling type.
3. Fit model to weight.
4. Include age and height effects.
5. Use standard least squares.
6. Minimal report emphasis.
7. Disable lack of fit test.
8. Disable actual vs predicted plot.
9. Disable residual vs predicted plot.
10. Disable effect leverage plot.



### Example 2
> **Summary**: Runs a linear regression analysis to model the relationship between height and weight, generating plots for effect leverage, actual vs predicted values, and residual analysis.

<!-- Keywords: #LinearRegression, #JMPScriptingLanguage, #DataAnalysis, #StatisticalModeling, #Plotting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "height" ) << Set Property( "Units", "in" );
Column( dt, "weight" ) << Set Property( "Units", "lbs" );
obj = dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:weight << {Summary of Fit( 1 ), Analysis of Variance( 1 ), Parameter Estimates( 1 ), Scaled Estimates( 0 ),
		Plot Actual by Predicted( 1 ), Plot Residual by Predicted( 1 ), Plot Studentized Residuals( 0 ), Plot Effect Leverage( 1 ),
		Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 )}
	)
);
rpt = obj << report;
label1 = rpt["Regression Plot"][AxisBox( 1 )] << get text;
label2 = rpt["Regression Plot"][AxisBox( 2 )] << get text;
label3 = rpt["Actual by Predicted Plot"][AxisBox( 1 )] << get text;
label4 = rpt["Residual by Predicted Plot"][AxisBox( 2 )] << get text;
```

**Code Explanation**:

1. Open data table.
2. Set units for height.
3. Set units for weight.
4. Fit model with weight as Y.
5. Use height as effect.
6. Choose standard least squares personality.
7. Emphasize effect leverage.
8. Generate summary of fit.
9. Generate analysis of variance.
10. Extract axis labels from plots.



## Fit Model using Fit Group
### Example 1
> **Summary**: Opens a data table, fits a validated stepwise model to predict percent body fat based on weight, abdomen circumference, forearm circumference, and wrist circumference, and generates a profiler with confidence intervals and term values.

<!-- Keywords: #JMPScriptingLanguage, #ValidatedStepwiseRegression, #Profiler, #ConfidenceIntervals, #TermValues -->

**Code**:
```jsl
// Fit Group: Validated Stepwise
// Open data table
dt = Open("data_table.jmp");
// Fit Group: Validated Stepwise
Fit Group(
	Fit Model(
		Y( :Percent body fat ),
		Effects(
			:"Weight (lbs)"n,
			:
			"Abdomen circumference (cm)"n,
			:
			"Forearm circumference (cm)"n,
			:"Wrist circumference (cm)"n
		),
		Personality(
			"Standard Least Squares"
		),
		Emphasis( "Minimal Report" ),
		Run(
			Profiler(
				1,
				Confidence Intervals( 1 ),
				Term Value(
					" Weight (lbs)"n(
						178.92,
						Lock( 0 ),
						Show( 1 )
					),
					" Abdomen 2 circumference (cm)"n(
						92.556,
						Lock( 0 ),
						Show( 1 )
					),
					" Forearm circumference (cm)"n(
						28.664,
						Lock( 0 ),
						Show( 1 )
					),
					" Wrist circumference (cm)"n(
						18.2298,
						Lock( 0 ),
						Show( 1 )
					)
				)
			),
			:Percent body fat <<
			{Lack of Fit( 0 ),
			Plot Actual by Predicted( 1 ),
			Plot Regression( 0 ),
			Plot Residual by Predicted(
				0
			), Plot Effect Leverage( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Fit model.
3. Set response variable.
4. Add effects.
5. Set personality.
6. Set emphasis.
7. Run profiler.
8. Configure confidence intervals.
9. Set term values.
10. Configure plot options.



### Example 2
> **Summary**: Fits two linear mixed-effects models for height and weight, considering age as an effect and sex as a random effect, with minimal report emphasis.

<!-- Keywords: #JMPScriptingLanguage, #LinearMixedEffectsModel, #RandomEffects, #NoBounds, #REML -->

**Code**:
```jsl
Open("data_table.jmp");
Fit Group(
	Fit Model(
		Y( :height ),
		Effects( :age ),
		Random Effects( :sex ),
		NoBounds( 1 ),
		Personality( "Standard Least Squares" ),
		Method( "REML" ),
		Emphasis( "Minimal Report" ),
		Run(
			:height << {Summary of Fit( 1 ), Analysis of Variance( 0 ), Parameter Estimates( 1 ), Scaled Estimates( 0 ),
			Plot Actual by Predicted( 0 ), Plot Residual by Predicted( 0 ), Plot Studentized Residuals( 0 ), Plot Effect Leverage( 0 ),
			Plot Residual by Normal Quantiles( 0 )}
		)
	),
	Fit Model(
		Y( :weight ),
		Effects( :age ),
		Random Effects( :sex ),
		NoBounds( 1 ),
		Personality( "Standard Least Squares" ),
		Method( "REML" ),
		Emphasis( "Minimal Report" ),
		Run(
			:height << {Summary of Fit( 1 ), Analysis of Variance( 0 ), Parameter Estimates( 1 ), Scaled Estimates( 0 ),
			Plot Actual by Predicted( 0 ), Plot Residual by Predicted( 0 ), Plot Studentized Residuals( 0 ), Plot Effect Leverage( 0 ),
			Plot Residual by Normal Quantiles( 0 )}
		)
	),
	<<{Profiler( 1, Confidence Intervals( 1 ), Term Value( age( 12, Lock( 0 ), Show( 1 ) ) ) ), Arrange in Rows( 2 )}
);
```

**Code Explanation**:

1. Open data table.
2. Fit model for height.
3. Set response variable: height.
4. Add effect: age.
5. Add random effect: sex.
6. Configure model settings.
7. Run model with specified options.
8. Fit model for weight.
9. Set response variable: weight.
10. Add effect: age.
11. Add random effect: sex.
12. Configure model settings.
13. Run model with specified options.
14. Create profiler with confidence intervals.
15. Set term value for age.
16. Arrange profilers in rows.



### Example 3
> **Summary**: Fits group models to analyze relationships between age, sex, height, and weight, utilizing ordinal and nominal logistic regression techniques.

<!-- Keywords: #JMPScriptingLanguage, #LogisticRegression, #GroupModeling, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Fit Group(
	Fit Model( Y( :age ), Effects( :height, :weight ), Personality( "Ordinal Logistic" ), Run( Likelihood Ratio Tests( 1 ) ) ),
	Fit Model(
		Y( :sex ),
		Effects( :height, :weight ),
		Personality( "Nominal Logistic" ),
		Run( Likelihood Ratio Tests( 1 ), Wald Tests( 0 ) )
	),
	<<{Profiler( 1, Term Value( height( 62.55, Lock( 0 ), Show( 1 ) ), weight( 105, Lock( 0 ), Show( 1 ) ) ) )}
);
```

**Code Explanation**:

1. Open data table.
2. Fit group models.
3. Fit ordinal logistic model for age.
4. Include height and weight effects.
5. Run likelihood ratio tests.
6. Fit nominal logistic model for sex.
7. Include height and weight effects.
8. Run likelihood ratio tests.
9. Disable Wald tests.
10. Launch profiler with specified term values.



### Example 4
> **Summary**: Fits two models to transform columns 'Sqrt weight' and 'Sqrt height', including age and sex effects, and generates reports with minimal emphasis.

<!-- Keywords: #JMPScriptingLanguage, #FitGroup, #Profiler, #ReportGeneration, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Fit Group(
	Fit Model(
		Y( Transform Column( "Sqrt weight", Formula( Sqrt( :weight ) ) ) ),
		Effects( :age, :sex ),
		Emphasis( "Minimal Report" ),
		Run,
		SendToReport( Dispatch( {}, "Response Sqrt weight", OutlineBox, {Close( 1 )} ) )
	),
	Fit Model(
		Y( Transform Column( "Sqrt height", Formula( Sqrt( :height ) ) ) ),
		Effects( :age, :sex ),
		Emphasis( "Minimal Report" ),
		Run,
		SendToReport( Dispatch( {}, "Response Sqrt height", OutlineBox, {Close( 1 )} ) )
	),
	<<Profiler( 1 )
);
rpt1 = Report( obj1 );
num1 = rpt1["Prediction Profiler", Text Box( 2 )] << Get Text;
obj2 = dt << Fit Group(
	Fit Model(
		Y( Transform Column( "Sqrt weight", Formula( Sqrt( :weight ) ) ) ),
		Effects( :age, :sex ),
		Emphasis( "Minimal Report" ),
		Run( Profiler ),
		SendToReport( Dispatch( {}, "Response Sqrt weight", OutlineBox, {Close( 1 )} ) )
	),
	Fit Model(
		Y( Transform Column( "Sqrt height", Formula( Sqrt( :height ) ) ) ),
		Effects( :age, :sex ),
		Emphasis( "Minimal Report" ),
		Run( Profiler ),
		SendToReport( Dispatch( {}, "Response Sqrt height", OutlineBox, {Close( 1 )} ) )
	),
	<<Profiler( 1 )
);
rpt2 = Report( obj2 );
num2 = rpt2["Prediction Profiler", Text Box( 2 )] << Get Text;
```

**Code Explanation**:

1. Open data table.
2. Create Fit Group object.
3. Fit model for sqrt(weight).
4. Include age and sex effects.
5. Use minimal report emphasis.
6. Run the model.
7. Close response summary.
8. Fit model for sqrt(height).
9. Include age and sex effects.
10. Use minimal report emphasis.
11. Run the model.
12. Close response summary.
13. Enable profiler.
14. Retrieve prediction profiler text.
15. Repeat steps 2-14.
16. Retrieve prediction profiler text again.



### Example 5
> **Summary**: Creates and analyzes a fit group object for predicting weight and height based on age and sex, generating a profiler report with labeled axes.

<!-- Keywords: #JMPScriptingLanguage, #FitGroupObject, #ProfilerReport, #DataAnalysis, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Group(
	Fit Model( Y( :weight ), Effects( :age ), Personality( "Standard Least Squares" ), by( :sex ), Run ),
	Fit Model( Y( :height ), Effects( :age ), Personality( "Standard Least Squares" ), by( :sex ), Run ), 
);
obj << Profiler( 1 );
rpt = obj << report;
label1 = rpt[Outline Box( "Prediction Profiler" )][AxisBox( 1 )][Text Box( 1 )] << get text;
label2 = rpt[Outline Box( "Prediction Profiler" )][AxisBox( 2 )][Text Box( 1 )] << get text;
```

**Code Explanation**:

1. Open data table.
2. Create fit group object.
3. Fit model for weight by age and sex.
4. Fit model for height by age and sex.
5. Generate profiler for first model.
6. Retrieve report object.
7. Extract label from first axis box.
8. Extract label from second axis box.



## Fit Model using Recurrence Analysis
### Example 1
> **Summary**: Creates a Proportional Intensity Model for survival analysis using the Recurrence Analysis platform in JMP, specifying response and cost variables, grouping by System ID, and fitting the model with scale effects.

<!-- Keywords: #JMP, #RecurrenceAnalysis, #ProportionalIntensityModel, #SurvivalAnalysis, #TimeSeries -->

**Code**:
```jsl
// Proportional Intensity Model
// Open data table
dt = Open("data_table.jmp");
// Proportional Intensity Model
dt = Current Data Table();
dt << Clear Select;
dt << Select Excluded << Exclude;
dt << Clear Select;
obj =
Recurrence Analysis(
	Y( :kHours ),
	Cost( :Cost ),
	Grouping( :System ID ),
	Label( :System ID ),
	Fit Model(
		Scale Effects( :System ID ),
		Run Model,
		Model Type(
			"Proportional Intensity Poisson Process"
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Set current data table.
3. Clear all selections.
4. Exclude excluded rows.
5. Clear all selections again.
6. Create Recurrence Analysis object.
7. Specify response variable.
8. Specify cost variable.
9. Specify grouping variable.
10. Label systems by ID.
11. Fit model with scale effects.
12. Run the model.
13. Set model type to Proportional Intensity Poisson Process.



### Example 2
> **Summary**: Runs a Recurrence Analysis to visualize the reliability of blenders over time, considering censor status and grouping variables.

<!-- Keywords: #RecurrenceAnalysis, #JMPScriptingLanguage, #SurvivalAnalysis, #TimeSeries, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Recurrence Analysis(
	Age at Event( :event time ),
	Label( :System ID ),
	Grouping( :System ID ),
	Timestamp at Start( :orig time ),
	Timestamp at End( :end time ),
	MCF Confid Limits( 1 ),
	Event Plot( 1 ),
	Plot MCF Differences( 1 ),
	MCF Plot Each Group( 1 ),
	Age Scaling( "DateTime to Hour" ),
	Fit Model( Scale Effects( :System ID ), Run Model, Model Type( Power Nonhomogeneous Poisson Process ) ),
	SendToReport(
		Dispatch( {"Event Plot"}, "1", ScaleBox,
			{Scale( "Geodesic" ), Format( "Custom", Formula( Char( value ) || " s" ), 12 ), Minor Ticks( 1 )}
		),
		Dispatch( {"MCF Plot"}, "1", ScaleBox,
			{Scale( "Geodesic" ), Format( "Custom", Formula( Char( value ) || " s" ), 12 ), Minor Ticks( 1 )}
		),
		Dispatch( {"MCF Differences Between Groups"}, "1", ScaleBox,
			{Scale( "Geodesic" ), Format( "Custom", Formula( Char( value ) || " s" ), 12 ), Minor Ticks( 1 )}
		),
		Dispatch( {"MCF Plot Each Group"}, "1", ScaleBox,
			{Scale( "Geodesic" ), Format( "Custom", Formula( Char( value ) || " s" ), 12 ), Minor Ticks( 1 )}
		),
		Dispatch( {"MCF Plot Each Group"}, "1", ScaleBox( 2 ),
			{Scale( "Geodesic" ), Format( "Custom", Formula( Char( value ) || " s" ), 12 ), Minor Ticks( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform Recurrence Analysis.
3. Set event time column.
4. Set label column.
5. Set grouping column.
6. Set start timestamp column.
7. Set end timestamp column.
8. Enable MCF confidence limits.
9. Enable event plot.
10. Enable MCF differences plot.



### Example 3
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables to model the power nonhomogeneous Poisson process.

<!-- Keywords: #JMPScriptingLanguage, #RecurrenceAnalysis, #SurvivalAnalysis, #PowerNonhomogeneousPoissonProcess, #TimeSeriesModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ra = dt << Recurrence Analysis(
	Y( :Age ),
	Cost( :Cost ),
	Grouping( :Treatment Group ),
	Label( :Patient Number ),
	Plot MCF Differences( 1 )
);
ra << Fit Model( Run Model, Model Type( "Power Nonhomogeneous Poisson Process" ) );
rascript = ra << Get Script;
```

**Code Explanation**:

1. Open data table.
2. Perform recurrence analysis.
3. Set response variable.
4. Set cost variable.
5. Set grouping variable.
6. Set label variable.
7. Plot MCF differences.
8. Fit power nonhomogeneous Poisson process model.
9. Retrieve script for analysis.



### Example 4
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables to model the power nonhomogeneous Poisson process.

<!-- Keywords: #JMPScriptingLanguage, #SurvivalAnalysis, #RecurrenceAnalysis, #PowerNonhomogeneousPoissonProcess, #Time-to-EventData -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ra = dt << Recurrence Analysis(
	Y( :Age ),
	Cost( :Cost ),
	Grouping( :Treatment Group ),
	Label( :Patient Number ),
	Plot MCF Differences( 1 )
);
ra << Fit Model( Run Model, Model Type( "Power Nonhomogeneous Poisson Process" ) );
rascript = ra << Get Script;
Eval( rascript );
```

**Code Explanation**:

1. Open data table.
2. Perform recurrence analysis.
3. Set response variable.
4. Set cost variable.
5. Define grouping variable.
6. Label patients.
7. Plot MCF differences.
8. Fit power nonhomogeneous Poisson process model.
9. Retrieve script from analysis.
10. Execute retrieved script.



### Example 5
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables in JMP, generating multiple cause models and plots for different causes of death.

<!-- Keywords: #JMPScriptingLanguage, #SurvivalAnalysis, #RecurrenceAnalysis, #PowerNonhomogeneousPoissonProcess, #MultipleCauseModels -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Recurrence Analysis(
	Y( :Age ),
	Label( :Patient Number ),
	Cost( :Cost ),
	Cause( :Cause of Death ),
	Fit Model( Run Model, Model Type( Power Nonhomogeneous Poisson Process ) )
);
r = Report( obj )["Multiple Cause Models"] << get scriptable object;
r << MCF Plot( 1 );
r1 = Report( obj )["Multiple Cause Models", "Fitted Recurrence Model Cause=Alive"] << get scriptable object;
r2 = Report( obj )["Multiple Cause Models", "Fitted Recurrence Model Cause=Bladder Cancer"] << get scriptable object;
r3 = Report( obj )["Multiple Cause Models", "Fitted Recurrence Model Cause=Other Cause"] << get scriptable object;
r3 << Remove Fit;
r << MCF Plot( 0 );
r << MCF Plot( 1 );
r2 << Remove Fit;
r << MCF Plot( 0 );
r << MCF Plot( 1 );
r1 << Remove Fit;
r << MCF Plot( 0 );
r << MCF Plot( 1 );
```

**Code Explanation**:

1. Open data table;
2. Perform Recurrence Analysis.
3. Set Age as Y variable.
4. Use Patient Number for labels.
5. Include Cost variable.
6. Specify Cause of Death.
7. Fit Power Nonhomogeneous Poisson Process model.
8. Get Multiple Cause Models report.
9. Generate MCF Plot.
10. Remove fit for Alive cause model.
11. Update MCF Plot.
12. Remove fit for Bladder Cancer cause model.
13. Update MCF Plot.
14. Remove fit for Other Cause model.
15. Update MCF Plot.



### Example 6
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables to model the recurrence of events in a dataset.

<!-- Keywords: #RecurrenceAnalysis, #SurvivalAnalysis, #Time-to-EventData, #PowerNonhomogeneousPoissonProcess, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Recurrence Analysis(
	Y( :Age ),
	Label( :Patient Number ),
	Cost( :Cost ),
	Grouping( :Treatment Group ),
	Event Plot( 0 ),
	Fit Model( Run Model, Profiler( 1 ), Model Type( Power Nonhomogeneous Poisson Process ) )
);
r = Report( obj )["Fitted Recurrence Model"] << get scriptable object;
r << Profiler( 0 );
r << Profiler( 1 );
```

**Code Explanation**:

1. Open data table;
2. Perform Recurrence Analysis.
3. Set Y variable as Age.
4. Use Patient Number for labeling.
5. Include Cost variable.
6. Group by Treatment Group.
7. Disable Event Plot.
8. Fit model using Power Nonhomogeneous Poisson Process.
9. Retrieve Fitted Recurrence Model report.
10. Toggle Profiler on and off.



### Example 7
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables by performing recurrence analysis on the Age variable with cost and labeling EngineID.

<!-- Keywords: #JMPScriptingLanguage, #RecurrenceAnalysis, #SurvivalAnalysis, #TimeCycles, #CensorStatus -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Recurrence Analysis(
	Y( :Age ),
	Cost( :Cost ),
	Label( :EngineID ),
	Event Plot( 0 ),
	Fit Model( Run Model, Model Type( Proportional Intensity Poisson Process ) )
);
rpt = obj << report;
pip1exp = [-8.84047058945275, 1.39957926695259];
pip2exp = [1.29825927920351, 0.20050222815652];
```

**Code Explanation**:

1. Open data table.
2. Perform recurrence analysis.
3. Set response variable as Age.
4. Set cost variable as Cost.
5. Use EngineID for labeling.
6. Disable event plot.
7. Fit proportional intensity model.
8. Generate analysis report.
9. Define first parameter estimates.
10. Define second parameter estimates.



### Example 8
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables to analyze the reliability of blenders.

<!-- Keywords: #JSLScriptingLanguage, #SurvivalAnalysis, #RecurrenceAnalysis, #TimeCycles, #GroupingVariables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Recurrence Analysis(
	Y( :Age ),
	Label( :Patient Number ),
	Cost( :Cost ),
	Grouping( :Treatment Group ),
	Event Plot( 0 ),
	Fit Model(
		Scale Effects( :Treatment Group ),
		Shape Effects( :Cause of Death ),
		Run Model,
		Model Type( Proportional Intensity Poisson Process )
	)
);
obj1 << Fit Model;
Report( obj1 )[Button Box( 11 )] << Click;
Report( obj1 )[Button Box( 9 )] << Click;
Close( dt, No Save );
dt = Open("data_table.jmp");
dt:Treatment Group << Value Labels( {1 = "Placebo", 2 = "Pyridoxine", 3 = "Thiotepa", 4 = "Nonexistent"} ) << Use Value Labels( 1 ) <<
Set Property( "Forced Values", {1, 2, 3, 4} );
obj = dt << Recurrence Analysis( Y( :Age ), Cost( :Cost ), Grouping( :Treatment Group ), Label( :Patient Number ), Event Plot( 0 ) );
dt1 = obj << Save MCF Differences( Last );
```

**Code Explanation**:

1. Open data table;
2. Perform recurrence analysis.
3. Set Y variable to Age.
4. Set label to Patient Number.
5. Set cost to Cost.
6. Group by Treatment Group.
7. Disable event plot.
8. Fit model with specified effects.
9. Run proportional intensity Poisson process.
10. Refit the model.
11. Click button box 11.
12. Click button box 9.
13. Close dataset without saving.
14. Reopen data_table dataset
15. Define value labels for Treatment Group.
16. Apply value labels to Treatment Group.
17. Set forced values for Treatment Group.
18. Perform recurrence analysis again.
19. Save MCF differences for last model.



### Example 9
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables by performing Recurrence Analysis on the data table.

<!-- Keywords: #JMPScriptingLanguage, #RecurrenceAnalysis, #SurvivalAnalysis, #TimeCycles, #CensorStatus -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Recurrence Analysis(
	Y( :Age ),
	Label( :Patient Number ),
	Cost( :Cost ),
	Fit Model( Run Model, Model Type( Power Nonhomogeneous Poisson Process ) )
);
rpt = obj << report;
stdErr = rpt[Number Col Box( "Std Error" )] << get as matrix;
cov = rpt[Outline Box( "Covariance of Estimates" )][Matrix Box( 1 )] << get;
corr = rpt[Outline Box( "Covariance of Estimates" )][Matrix Box( 2 )] << get;
```

**Code Explanation**:

1. Open data table;
2. Perform Recurrence Analysis.
3. Set Y variable as Age.
4. Label by Patient Number.
5. Include Cost variable.
6. Fit Power Nonhomogeneous Poisson Process model.
7. Retrieve analysis report.
8. Extract Standard Error as matrix.
9. Get Covariance of Estimates matrix.
10. Obtain Correlation matrix.



### Example 10
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables to estimate MTBF and parameter estimates from the provided data table.

<!-- Keywords: #JMPScriptingLanguage, #RecurrenceAnalysis, #SurvivalAnalysis, #MTBFEstimation, #HomogeneousPoissonProcess -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Recurrence Analysis(
	Age at Event( :Age ),
	Label( :Patient Number ),
	"End-of-Service"n( :Cost ),
	Event Plot( 0 ),
	Fit Model( Run Model, Model Type( "Homogeneous Poisson Process" ) )
);
rpt = obj << report;
est = rpt[Outline Box( "Parameter Estimates" )][Table Box( 1 )] << get as matrix;
mtbf = rpt[Outline Box( "Parameter Estimates" )][Table Box( 2 )] << get as matrix;
```

**Code Explanation**:

1. Open data_table data
2. Perform Recurrence Analysis.
3. Set Age at Event.
4. Label Patient Number.
5. Include Cost.
6. Disable Event Plot.
7. Fit Homogeneous Poisson Process.
8. Retrieve analysis report.
9. Extract Parameter Estimates.
10. Extract MTBF estimates.



### Example 11
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables by performing recurrence analysis on the data table.

<!-- Keywords: #JMPScriptingLanguage, #SurvivalAnalysis, #RecurrenceAnalysis, #TimeCycles, #CensorStatus -->

**Code**:
```jsl
dt = Open("data_table.jmp");
r = dt << Select Excluded;
dt << Unexclude;
obj = dt << Recurrence Analysis(
	Y( :kHours ),
	Label( :System ID ),
	Cost( :Cost ),
	Event Plot( 1 ),
	Fit Model(
		Scale Effects( :Cost ),
		Shape Effects( :Cost ),
		Run Model,
		Model Type( "Power Nonhomogeneous Poisson Process" ),
		Test Homogeneity( 1 )
	)
);
rpt = obj << report;
txt = rpt[Outline Box( "Test Homogeneity" )][Text Box( 1 )] << get text;
```

**Code Explanation**:

1. Open data table.
2. Select excluded rows.
3. Unexclude all rows.
4. Perform recurrence analysis.
5. Set response variable.
6. Set label variable.
7. Set cost variable.
8. Generate event plot.
9. Fit model using Power Nonhomogeneous Poisson Process.
10. Test homogeneity.



### Example 12
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables by performing recurrence analysis with additional parameters and extracting reports.

<!-- Keywords: #RecurrenceAnalysis, #SurvivalAnalysis, #TimeSeries, #JMPScriptingLanguage, #DataScience -->

**Code**:
```jsl
dt = Open("data_table.jmp");
r = dt << Select Excluded;
dt << Unexclude;
obj = dt << Recurrence Analysis(
	Y( :kHours ),
	Label( :System ID ),
	Cost( :Cost ),
	Event Plot( 1 ),
	Fit Model( Scale Effects( :System ID ), Run Model, Model Type( "Homogeneous Poisson Process" ) )
);
rpt = obj << report;
scptObj = rpt[Outline Box( "Fitted Recurrence Model" )] << get scriptable object;
scptObj << Remove Fit;
Close( dt, No Save );
dt = Open("data_table.jmp");
dt << Run Script( "Recurrence Analysis" );
dt << Run Script( "Recurrence Grouped" );
lcap1 = Log Capture( dt << Run Script( "Proportional Intensity Model" ) );
lcap2 = Log Capture( dt << Run Script( "Recurrence endtime in column" ) );
lcap3 = Log Capture( dt << Run Script( "Recurrence endtime in field" ) );
Close( dt, No Save );
dt = Open("data_table.jmp");
r = dt << Select Excluded;
dt << Unexclude;
obj = dt << Recurrence Analysis(
	Y( :kHours ),
	Label( :System ID ),
	Cost( :Cost ),
	Event Plot( 1 ),
	Fit Model(
		Scale Effects( :Cost ),
		Shape Effects( :Cost ),
		Run Model,
		Model Type( "Power Nonhomogeneous Poisson Process" ),
		Test Homogeneity( 1 )
	)
);
rpt = obj << report;
txt = rpt[Outline Box( "Test Homogeneity" )][Text Box( 1 )] << get text;
```

**Code Explanation**:

1. Open data table.
2. Select excluded rows.
3. Unexclude all rows.
4. Perform recurrence analysis.
5. Extract report.
6. Get scriptable object.
7. Remove fit from object.
8. Close data table.
9. Reopen data table.
10. Run "Recurrence Analysis" script.
11. Run "Recurrence Grouped" script.
12. Capture log for "Proportional Intensity Model".
13. Capture log for "Recurrence endtime in column".
14. Capture log for "Recurrence endtime in field".
15. Close data table.
16. Reopen data table.
17. Select excluded rows again.
18. Unexclude all rows.
19. Perform recurrence analysis with additional parameters.
20. Extract report.
21. Get text from homogeneity test.



### Example 13
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables to generate a report with recurrence analysis results.

<!-- Keywords: #JSLScriptingLanguage, #RecurrenceAnalysis, #SurvivalAnalysis, #TimeCycles, #CensorStatus -->

**Code**:
```jsl
Open("data_table.jmp");
plat = Recurrence Analysis( Y( :Age ), Cost( :Cost ), Grouping( :Treatment Group ), Label( :Patient Number ), Plot MCF Differences( 1 ) );
rep = Report( plat );
title = rep[Outline Box( 2 )] << GetTitle;
dt = New Table( "Rigdon_Basu_Table4_8",
	New Column( "System", Values( [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] ) ),
	New Column( "t", Values( [10, 55, 166, 205, 341, 488, 567, 731, 1308, 2050, 2453, 3115, 4017, 4596, 4596] ) ),
	New Column( "Cost", Values( [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0] ) )
);
plat = dt << Recurrence Analysis(
	Y( :t ),
	Cost( :Cost ),
	Label( :System ),
	Fit Model( Run Model, Model Type( Homogeneous Poisson Process ), Specific Intensity and Cumulative( [1000, 0.95] ) )
);
rep = Report( plat );
result = (rep[Table Box( 4 )] << GetAsMatrix);
```

**Code Explanation**:

1. Open data table.
2. Perform recurrence analysis.
3. Retrieve report object.
4. Extract title from outline box.
5. Create new table.
6. Add columns to new table.
7. Perform recurrence analysis on new table.
8. Retrieve updated report object.
9. Extract matrix from table box.
10. Store result in variable.



### Example 14
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables to generate a recurrence plot with expected values.

<!-- Keywords: #JSLScriptingLanguage, #SurvivalAnalysis, #RecurrenceAnalysis, #TimeCycles, #GroupingVariables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
plat = Recurrence Analysis( Y( :Age ), Cost( :Cost ), Grouping( :Treatment Group ), Label( :Patient Number ), Plot MCF Differences( 1 ) );
rep = Report( plat );
title = rep[Outline Box( 2 )] << GetTitle;
Close( dt, No Save );
::Expected = [1000 3.0461270670148 1.71607190480756 4.93170866274965 0.95,
1000 0.0030461270670148 0.00171607190490799 0.00493170866269081 0.95];
dt = New Table( "Rigdon_Basu_Table4_8",
	New Column( "System", Values( [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] ) ),
	New Column( "t", Values( [10, 55, 166, 205, 341, 488, 567, 731, 1308, 2050, 2453, 3115, 4017, 4596, 4596] ) ),
	New Column( "Cost", Values( [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0] ) )
);
plat = dt << Recurrence Analysis(
	Y( :t ),
	Cost( :Cost ),
	Label( :System ),
	Fit Model( Run Model, Model Type( Homogeneous Poisson Process ), Specific Intensity and Cumulative( [1000, 0.95] ) )
);
rep = Report( plat );
result = (rep[Table Box( 4 )] << GetAsMatrix);
```

**Code Explanation**:

1. Open data table.
2. Perform recurrence analysis.
3. Retrieve report object.
4. Extract title from outline box.
5. Close data table without saving.
6. Define expected values array.
7. Create new table.
8. Add columns to new table.
9. Perform recurrence analysis on new table.
10. Retrieve result matrix from report.



### Example 15
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables by performing recurrence analysis, fitting homogeneous Poisson process models, and calculating negative log-likelihood.

<!-- Keywords: #JMPScriptingLanguage, #RecurrenceAnalysis, #SurvivalAnalysis, #HomogeneousPoissonProcess, #NonlinearFitting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Recurrence Analysis(
	Y( :Age ),
	Cost( :Cost ),
	Label( :EngineID ),
	Event Plot( 0 ),
	Fit Model( Run Model, Model Type( Power Nonhomogeneous Poisson Process ) )
);
rpt1 = obj1 << report;
r1 = rpt1["Fitted Recurrence Model"] << get scriptable object;
r1 << Test Homogeneity;
est1 = Matrix( rpt1[Number Col Box( "Estimate" )] << get );
std1 = Matrix( rpt1[Number Col Box( "Std Error" )] << get );
n2llk1 = (rpt1[Outline Box( "Parameter Estimates" )][Number Col Box( 3 )] << get)[1];
LRChiSquare1 = (rpt1[Number Col Box( "L-R ChiSquare" )] << get)[1];
df1 = (rpt1[Number Col Box( "DF" )] << get)[1];
prob1 = (rpt1[Number Col Box( "Prob>ChiSq" )] << get)[1];
r1 << Remove Fit;
obj1 << Fit Model( Model Type( Homogeneous Poisson Process ), Run Model, );
rpt = obj1 << report;
n2llk = (rpt[Outline Box( "Parameter Estimates" )][Number Col Box( 3 )] << get)[1];
chi2 = n2llk - n2llk1;
dt << New Column( "Loss",
	Formula(
		Parameter(
			{theta = 550, beta = 1},
			If( :Cost != 0,
				-:Cost * (Log( beta / theta ) + (beta - 1) * Log( :Age / theta )),
				(:Age / theta) ^ beta
			)
		)
	)
);
obj2 = dt << Nonlinear( Loss( :Loss ), Loss is Neg LogLikelihood( 1 ), Newton, Finish, );
rpt2 = obj2 << report;
est2 = Matrix( rpt2[Number Col Box( "Estimate" )] << get );
std2 = Matrix( rpt2[Number Col Box( "ApproxStdErr" )] << get );
nllk2 = Matrix( rpt2[Number Col Box( "Loss" )] << get )[1];
```

**Code Explanation**:

1. Open data table.
2. Perform recurrence analysis.
3. Extract fitted model report.
4. Test homogeneity of recurrence model.
5. Retrieve estimates and standard errors.
6. Calculate negative log-likelihood.
7. Calculate likelihood ratio chi-square.
8. Retrieve degrees of freedom and probability.
9. Remove previous fit.
10. Fit homogeneous Poisson process model.
11. Calculate new negative log-likelihood.
12. Compute chi-square statistic.
13. Create new column for loss.
14. Perform nonlinear fitting.
15. Extract nonlinear model report.
16. Retrieve new estimates and standard errors.
17. Retrieve final negative log-likelihood.



### Example 16
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables by performing recurrence analysis, testing homogeneity, and extracting parameter estimates.

<!-- Keywords: #JSLScriptingLanguage, #SurvivalAnalysis, #RecurrenceAnalysis, #Time-to-EventData, #Censoring -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Recurrence Analysis(
	Y( :Age ),
	Label( :EngineID ),
	Cost( :Cost ),
	Event Plot( 0 ),
	Fit Model( Run Model, Model Type( Proportional Intensity Poisson Process ) )
);
rpt1 = obj1 << report;
r1 = rpt1["Fitted Recurrence Model"] << get scriptable object;
r1 << Test Homogeneity;
est1 = Matrix( rpt1[Number Col Box( "Estimate" )] << get );
std1 = Matrix( rpt1[Number Col Box( "Std Error" )] << get );
n2llk1 = (rpt1[Outline Box( "Parameter Estimates" )][Number Col Box( 3 )] << get)[1];
LRChiSquare1 = (rpt1[Number Col Box( "L-R ChiSquare" )] << get)[1];
df1 = (rpt1[Number Col Box( "DF" )] << get)[1];
prob1 = (rpt1[Number Col Box( "Prob>ChiSq" )] << get)[1];
r1 << Remove Fit;
obj1 << Fit Model( Model Type( Homogeneous Poisson Process ), Run Model, );
rpt = obj1 << report;
n2llk = (rpt[Outline Box( "Parameter Estimates" )][Number Col Box( 3 )] << get)[1];
chi2 = n2llk - n2llk1;
dt << New Column( "Loss",
	Formula(
		Parameter(
			{gamma = -8, delta = 1},
			If( :Cost != 0,
				-:Cost * (Log( delta ) + (delta - 1) * Log( :Age ) + gamma),
				(:Age ^ delta) * (Exp( gamma ))
			)
		)
	)
);
obj2 = dt << Nonlinear( Loss( :Loss ), Loss is Neg LogLikelihood( 1 ), Newton, Finish, );
rpt2 = obj2 << report;
est2 = Matrix( rpt2[Number Col Box( "Estimate" )] << get );
std2 = Matrix( rpt2[Number Col Box( "ApproxStdErr" )] << get );
nllk2 = (rpt2[Number Col Box( "Loss" )] << get)[1];
```

**Code Explanation**:

1. Open data table.
2. Perform recurrence analysis.
3. Retrieve fitted model report.
4. Test homogeneity of model.
5. Extract parameter estimates.
6. Extract standard errors.
7. Calculate negative log-likelihood.
8. Extract chi-square statistic.
9. Extract degrees of freedom.
10. Extract p-value.



### Example 17
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables by performing recurrence analysis, testing homogeneity, and extracting parameter estimates.

<!-- Keywords: #JSL, #SurvivalAnalysis, #RecurrenceAnalysis, #TimeCycles, #GroupingVariables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Recurrence Analysis(
	Y( :Age ),
	Label( :EngineID ),
	Cost( :Cost ),
	Event Plot( 0 ),
	Fit Model( Run Model, Model Type( Loglinear Nonhomogeneous Poisson Process ) )
);
rpt1 = obj1 << report;
r1 = rpt1["Fitted Recurrence Model"] << get scriptable object;
r1 << Test Homogeneity;
est1 = Matrix( rpt1[Number Col Box( "Estimate" )] << get );
std1 = Matrix( rpt1[Number Col Box( "Std Error" )] << get );
n2llk1 = (rpt1[Outline Box( "Parameter Estimates" )][Number Col Box( 3 )] << get)[1];
LRChiSquare1 = (rpt1[Number Col Box( "L-R ChiSquare" )] << get)[1];
df1 = (rpt1[Number Col Box( "DF" )] << get)[1];
prob1 = (rpt1[Number Col Box( "Prob>ChiSq" )] << get)[1];
r1 << Remove Fit;
obj1 << Fit Model( Model Type( Homogeneous Poisson Process ), Run Model, );
rpt = obj1 << report;
n2llk = (rpt[Outline Box( "Parameter Estimates" )][Number Col Box( 3 )] << get)[1];
chi2 = n2llk - n2llk1;
dt << New Column( "Loss",
	Formula(
		Parameter(
			{gamma = -6, delta = .001},
			If( :Cost != 0,
				-:Cost * (gamma + delta * :Age),
				((Exp( gamma + delta * :Age ) - Exp( gamma )) / delta)
			)
		)
	)
);
obj2 = dt << Nonlinear( Loss( :Loss ), Loss is Neg LogLikelihood( 1 ), Newton, Finish, );
rpt2 = obj2 << report;
est2 = Matrix( rpt2[Number Col Box( "Estimate" )] << get );
std2 = Matrix( rpt2[Number Col Box( "ApproxStdErr" )] << get );
nllk2 = (rpt2[Number Col Box( "Loss" )] << get)[1];
```

**Code Explanation**:

1. Open data table.
2. Perform recurrence analysis.
3. Retrieve fitted model report.
4. Test homogeneity of model.
5. Extract parameter estimates.
6. Extract standard errors.
7. Calculate negative log-likelihood.
8. Calculate likelihood ratio chi-square.
9. Extract degrees of freedom.
10. Extract p-value for chi-square test.



### Example 18
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables by performing recurrence analysis, extracting estimates and standard errors, creating a new column for loss, and conducting nonlinear analysis.

<!-- Keywords: #JMPScriptingLanguage, #SurvivalAnalysis, #RecurrenceAnalysis, #NonlinearAnalysis, #Time-to-EventData -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Recurrence Analysis(
	Y( :Age ),
	Label( :EngineID ),
	Cost( :Cost ),
	Event Plot( 0 ),
	Fit Model( Run Model, Model Type( Homogeneous Poisson Process ) )
);
rpt1 = obj1 << report;
est1 = Matrix( rpt1[Number Col Box( "Estimate" )] << get );
std1 = Matrix( rpt1[Number Col Box( "Std Error" )] << get );
n2llk1 = (rpt1[Outline Box( "Parameter Estimates" )][Number Col Box( 3 )] << get)[1];
dt << New Column( "Loss", Formula( Parameter( {gamma = -6}, If( :Cost != 0, -:Cost * (gamma), (:Age * Exp( gamma )) ) ) ) );
obj2 = dt << Nonlinear( Loss( :Loss ), Loss is Neg LogLikelihood( 1 ), Newton, Finish, );
rpt2 = obj2 << report;
est2 = Matrix( rpt2[Number Col Box( "Estimate" )] << get );
std2 = Matrix( rpt2[Number Col Box( "ApproxStdErr" )] << get );
nllk2 = (rpt2[Number Col Box( "Loss" )] << get)[1];
```

**Code Explanation**:

1. Open data table.
2. Perform recurrence analysis.
3. Extract estimates from report.
4. Extract standard errors from report.
5. Extract negative log-likelihood from report.
6. Create new column for loss.
7. Perform nonlinear analysis.
8. Extract estimates from report.
9. Extract standard errors from report.
10. Extract negative log-likelihood from report.



### Example 19
> **Summary**: Performs a survival analysis using time cycles, censor status, and grouping variables to estimate parameters for different causes of death.

<!-- Keywords: #JSL, #SurvivalAnalysis, #RecurrenceAnalysis, #NonlinearFitting, #LoglinearNonhomogeneousPoissonProcess -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Recurrence Analysis(
	Y( :Age ),
	Label( :Patient Number ),
	Cost( :Cost ),
	Event Plot( 0 ),
	Fit Model( Run Model, Model Type( Loglinear Nonhomogeneous Poisson Process ) ),
	By( :Cause of Death )
);
rpt1 = obj1 << report;
estAlive = Matrix( rpt1[1][Number Col Box( "Estimate" )] << get );
stdAlive = Matrix( rpt1[1][Number Col Box( "Std Error" )] << get );
n2llkAlive = (rpt1[1][Outline Box( "Parameter Estimates" )][Number Col Box( 3 )] << get)[1];
estBladder = Matrix( rpt1[2][Number Col Box( "Estimate" )] << get );
stdBladder = Matrix( rpt1[2][Number Col Box( "Std Error" )] << get );
n2llkBladder = (rpt1[2][Outline Box( "Parameter Estimates" )][Number Col Box( 3 )] << get)[1];
estOther = Matrix( rpt1[3][Number Col Box( "Estimate" )] << get );
stdOther = Matrix( rpt1[3][Number Col Box( "Std Error" )] << get );
n2llkOther = (rpt1[3][Outline Box( "Parameter Estimates" )][Number Col Box( 3 )] << get)[1];
dt << New Column( "By Loss Column",
	Formula(
		Parameter(
			{gamma1 = -2, delta1 = -.002, gamma2 = -2, delta2 = -.02, gamma3 = -2, delta3 = -.002},
			tempGamma = Match( :Cause of Death, 0, gamma1, 1, gamma2, 2, gamma3, . );
			tempDelta = Match( :Cause of Death, 0, delta1, 1, delta2, 2, delta3, . );
			If( :Cost != 0,
				-:Cost * (tempGamma + tempDelta * :Age),
				((Exp( tempGamma + tempDelta * :Age ) - Exp( tempGamma )) / tempDelta)
			);
		)
	)
);
obj1 = dt << Nonlinear( Loss( :By Loss Column ), Loss is Neg LogLikelihood( 1 ), Newton, Finish, );
rpt1 = obj1 << report;
est1 = Matrix( rpt1[Number Col Box( "Estimate" )] << get );
std1 = Matrix( rpt1[Number Col Box( "ApproxStdErr" )] << get );
nllk1 = (rpt1[Number Col Box( "Loss" )] << get)[1];
```

**Code Explanation**:

1. Open data table.
2. Perform recurrence analysis.
3. Extract report.
4. Retrieve estimates for alive.
5. Retrieve standard errors for alive.
6. Retrieve negative log-likelihood for alive.
7. Retrieve estimates for bladder.
8. Retrieve standard errors for bladder.
9. Retrieve negative log-likelihood for bladder.
10. Retrieve estimates for other causes.
11. Retrieve standard errors for other causes.
12. Retrieve negative log-likelihood for other causes.
13. Create new column for loss calculation.
14. Perform nonlinear fitting.
15. Extract report from nonlinear fit.
16. Retrieve estimates from nonlinear fit.
17. Retrieve standard errors from nonlinear fit.
18. Retrieve negative log-likelihood from nonlinear fit.



## Fit Model using Select Rows
### Example 1
> **Summary**: Performs recurrence analysis on a data table, excluding specific rows and fitting a model using specified parameters.

<!-- Keywords: #JMPScriptingLanguage, #RecurrenceAnalysis, #DataTableManipulation, #ModelFitting, #TimeSeriesAnalysis -->

**Code**:
```jsl
// Recurrence endtime in column
// Open data table
dt = Open("data_table.jmp");
// Recurrence endtime in column
dt = Current Data Table();
dt << Clear Select;
dt << Select Excluded << Exclude;
dt << Clear Select;
dt << Select Rows( [57, 129] ) << Exclude;
dt << Clear Select;
obj =
Recurrence Analysis(
	Y( :event time ),
	Label( :System ID ),
	Grouping( :System ID ),
	Timestamp at Start( :orig time ),
	Timestamp at End( :end time ),
	Event Plot( 1 ),
	Age Scaling( "DateTime to Hour" ),
	Fit Model(
		Scale Effects( :System ID ),
		Run Model,
		Model Type(
			"Power Nonhomogeneous Poisson Process"
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Set current data table.
3. Clear all selections.
4. Exclude excluded rows.
5. Clear all selections again.
6. Select specific rows.
7. Exclude selected rows.
8. Clear all selections.
9. Perform recurrence analysis.
10. Fit model using specified parameters.



### Example 2
> **Summary**: Performs a recurrence analysis on a data table, setting the Y variable to event time, labeling by System ID, and grouping by the same field. It also sets age scaling to DateTime to Hour and fits a power nonhomogeneous Poisson process model.

<!-- Keywords: #RecurrenceAnalysis, #JMPScriptingLanguage, #DataTableManipulation, #TimeSeriesModeling, #StatisticalModeling -->

**Code**:
```jsl
// Recurrence endtime in field
// Open data table
dt = Open("data_table.jmp");
// Recurrence endtime in field
dt = Current Data Table();
dt << Clear Select;
dt << Select Excluded << Exclude;
dt << Clear Select;
dt << Select Rows( [57, 129] ) << Exclude;
dt << Clear Select;
obj =
Recurrence Analysis(
	Y( :event time ),
	Label( :System ID ),
	Grouping( :System ID ),
	Timestamp at Start( :orig time ),
	Event Plot( 1 ),
	Age Scaling( "DateTime to Hour" ),
	Default End Timestamp(
		"1996/09/30 02:20:00"
	),
	Fit Model(
		Scale Effects( :System ID ),
		Run Model,
		Model Type(
			"Power Nonhomogeneous Poisson Process"
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Set current data table.
3. Clear selection.
4. Exclude excluded rows.
5. Clear selection again.
6. Exclude specific rows.
7. Clear selection.
8. Perform recurrence analysis.
9. Set Y variable.
10. Set label variable.
11. Set grouping variable.
12. Set timestamp at start.
13. Enable event plot.
14. Set age scaling.
15. Set default end timestamp.
16. Fit model.
17. Scale effects by system ID.
18. Run model.
19. Set model type.



### Example 3
> **Summary**: Runs marker relatedness analysis and model fitting with random effects, utilizing principal components, clustering, and kinship table merging.

<!-- Keywords: #JMPScriptingLanguage, #MarkerRelatedness, #RandomEffectsModel, #PrincipalComponentsAnalysis, #KinshipTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Clear Select << Select Rows( Index( 11, 1000 ) ) << Delete Rows;
obj = dt << Marker Relatedness(
	Marker( Column Group( "Markers" ) ),
	Principal Components( 1 ),
	Clustering( 1 ),
	Ploidy( 2 ),
	Set Random Seed( 0 ),
	Missing Marker Imputation Method( "NONEHWE" ),
	Kinship Type( "Identical by State" ),
	SendToReport(
		Dispatch( {"Marker Relatedness", "Hierarchical Clustering", "Dendrogram"}, "Clust Dendro", FrameBox, {Frame Size( 35, 700 )} )
	)
);
obj << Merge Kinship Table;
Fit Model(
	Effects,
	Random Effects( Grouped( Column Group( "IBS" ) ) ),
	Personality( "Response Screening" ),
	Y( :Trait1 ),
	Switch( :CG1 SNP1, :CG1 SNP2 ),
	Run,
	SendToReport(
		Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 0 )} ),
		Dispatch( {}, "Variance Components", OutlineBox, {Close( 0 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Clear previous selections.
3. Select specific rows.
4. Delete selected rows.
5. Perform marker relatedness analysis.
6. Set principal components to 1.
7. Enable clustering.
8. Set ploidy to 2.
9. Initialize random seed.
10. Use NONEHWE imputation method.
11. Set kinship type to IBS.
12. Adjust dendrogram size.
13. Merge kinship table.
14. Fit model with random effects.
15. Use response screening personality.
16. Set Y variable to Trait1.
17. Include specific switch effects.
18. Run the model.
19. Close parameter estimates report.
20. Close variance components report.



## Fit Model using Time Series Forecast
### Example 1
> **Summary**: Performs a time series forecast of monthly sales data using the X11 decomposition method, specifying the response variable, grouping variable, and time variable.

<!-- Keywords: #TimeSeriesForecasting, #X11Decomposition, #JMPScriptingLanguage, #DataAnalysis, #PredictiveModeling -->

**Code**:
```jsl
// Time Series Forecast of Data 2
// Open data table
dt = Open("data_table.jmp");
// Time Series Forecast of Data 2
Time Series Forecast(
	Y( :Y ),
	Grouping( :Series ),
	Time( :Time ),
	Fit Model(
		NAhead( 4 ),
		Period( 4 ),
		Constrain Parameters( 1 )
	)
);
```

**Code Explanation**:

1. Open table.
2. Define data table variable.
3. Perform time series forecast.
4. Specify response variable.
5. Specify grouping variable.
6. Specify time variable.
7. Fit model for forecasting.
8. Set forecast ahead.
9. Define period length.
10. Constrain model parameters.



### Example 2
> **Summary**: Runs the Time Series X11 decomposition of a dataset containing monthly sales data, using the Date column as the time variable and generating reports for two series.

<!-- Keywords: #TimeSeriesForecasting, #X11Decomposition, #JMPScriptingLanguage, #DataAnalysis, #Forecasting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Time Series Forecast(
	Y( :Y ),
	Grouping( :Series ),
	Time( :Time ),
	Fit Model( NAhead( 8 ), Seasonality( 1 ), NHoldout( 8 ) ),
	Show Report for Series( 0, 0, 1 ),
	Show Report for Series( 0, 0, 2 )
);
rpt = obj << report;
tmp1 = rpt[Outline Box( "Series = N 647" )] << Get Scriptable Object;
tmp1 << Remove;
```

**Code Explanation**:

1. Open data_table data
2. Define time series forecast object.
3. Set response variable.
4. Specify grouping variable.
5. Define time variable.
6. Configure fit model settings.
7. Generate report for first series.
8. Generate report for second series.
9. Extract report outline box.
10. Remove extracted outline box.



### Example 3
> **Summary**: Runs the time series X11 decomposition of monthly sales data using JMP's Time Series Forecast platform, generating a forecast report and extracting model summary labels.

<!-- Keywords: #TimeSeriesForecast, #JMPScriptingLanguage, #X11Decomposition, #MonthlySalesData, #ForecastReport -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Time Series Forecast( Y( :Y ), Grouping( :Series ), Time( :Time ), Fit Model( NAhead( 10 ), Seasonality( [1 4] ), NHoldout( 8 ) ) );
rpt = obj << report;
label1 = rpt[Outline Box( "Model Summary" )][String Col Box( 1 )] << get;
```

**Code Explanation**:

1. Open data_table data
2. Create time series forecast object.
3. Set forecast parameters.
4. Generate forecast report.
5. Extract model summary label.



### Example 4
> **Summary**: Runs time series forecasting and report generation for monthly sales data, selecting specific model reports and retrieving titles from outline boxes.

<!-- Keywords: #TimeSeriesForecasting, #JMPScriptingLanguage, #DataAnalysis, #ReportGeneration, #OutlineBox -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Time Series Forecast(
	Y( :Price, :Price2000, :Name( "Price/Price2000" ) ),
	Grouping( :Series ),
	Time( :date ),
	Fit Model( NAhead( 12 ), NHoldout( 0 ) )
);
rpt = obj << report;
rpt[Outline Box( "Model Reports" )][Table Box( 1 )][String Col Box( 1 )] << set selected rows( [37] );
title1 = rpt[Outline Box( "Model Reports" )][Outline Box( 2 )] << get title;
title2 = rpt[Outline Box( "Model Reports" )][Outline Box( 3 )] << get title;
rpt[Outline Box( "Model Reports" )][Table Box( 1 )][String Col Box( 1 )] << set selected rows( [1] );
title3 = rpt[Outline Box( "Model Reports" )][Outline Box( 2 )] << get title;
title4 = rpt[Outline Box( "Model Reports" )][Outline Box( 3 )] << get title;
```

**Code Explanation**:

1. Open data table;
2. Perform time series forecast.
3. Select specific model report row.
4. Retrieve first title from outline box.
5. Retrieve second title from outline box.
6. Select another model report row.
7. Retrieve third title from outline box.
8. Retrieve fourth title from outline box.



### Example 5
> **Summary**: Runs time series forecasting and decomposition of monthly sales data using the X11 method, generating reports with parameter estimates.

<!-- Keywords: #TimeSeriesForecasting, #X11Decomposition, #JMPScriptingLanguage, #ETSModel, #ForecastingSettings -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Time Series Forecast(
	Y( :Log Passengers ),
	Time( :Time ),
	Fit Model(
		Select Models( ETS( Error Type( "Multiplicative" ), Trend Type( "Additive" ), Seasonal Type( "Additive" ), Damped( "No" ) ) ),
		Forecasting Settings( NAhead( 20 ), Period( 12 ), NHoldout( 0 ) ),
		Other Options(
			Preserve Model Selection Criterion( 1 ),
			Forecast Interval Level( 0.95 ),
			Imputation for Applicable Models( "None" )
		)
	),
	SendToReport(
		Dispatch( {}, "Modeling Specifications", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Modeling Specifications", "Forecasting Settings"}, "", TextEditBox, {Fixed Size( 1, 100, 19 ), Set Text( "12" )} ),
		Dispatch( {}, "Model Reports", OutlineBox, {Visibility( "Visible" )} )
	)
);
rpt1 = obj1 << report;
obj2 = dt << Time Series Forecast(
	Y( :Log Passengers ),
	Time( :Time ),
	Fit Model(
		Select Models( ETS( Error Type( "Multiplicative" ), Trend Type( "Additive" ), Seasonal Type( "Additive" ), Damped( "No" ) ) ),
		Forecasting Settings( NAhead( 20 ), Period( 12 ), NHoldout( 0 ) ),
		Other Options(
			Preserve Model Selection Criterion( 1 ),
			Forecast Interval Level( 0.95 ),
			Imputation for Applicable Models( "None" )
		)
	)
);
rpt2 = obj2 << report;
test1 = rpt1[Outline Box( "Parameter Estimates" )][Table Box( 1 )] << get as matrix;
test2 = rpt2[Outline Box( "Parameter Estimates" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Create time series forecast object1.
3. Set Y variable to Log Passengers.
4. Set Time variable to Time.
5. Fit ETS model with specified parameters.
6. Set forecasting settings.
7. Configure other options.
8. Hide modeling specifications.
9. Set period to 12.
10. Show model reports.
11. Create time series forecast object2.
12. Extract parameter estimates from report1.
13. Extract parameter estimates from report2.



### Example 6
> **Summary**: Runs the time series X11 decomposition of monthly sales data using JMP's Time Series Forecast function, fitting multiple ETS models and generating a forecast report.

<!-- Keywords: #TimeSeriesForecast, #ETSModel, #JMPScriptingLanguage, #Forecasting, #DataDecomposition -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Time Series Forecast(
	Y( :Passengers ),
	Time( :Time ),
	Fit Model(
		Select Models(
			ETS( Error Type( "Multiplicative" ), Trend Type( "None" ), Seasonal Type( "Additive" ), Damped( "No" ) ),
			ETS( Error Type( "Multiplicative" ), Trend Type( "Additive" ), Seasonal Type( "Additive" ), Damped( "No" ) ),
			ETS( Error Type( "Multiplicative" ), Trend Type( "Additive" ), Seasonal Type( "Additive" ), Damped( "Yes" ) )
		),
		Forecasting Settings( NAhead( 10 ), Period( 12 ), NHoldout( 0 ) ),
		Other Options(
			Preserve Model Selection Criterion( 0 ),
			Forecast Interval Level( 0.95 ),
			Imputation for Applicable Models( "None" )
		)
	)
);
rpt = obj << report;
type = rpt[Outline Box( "Model Type" )][Text Box( 2 )] << get text;
```

**Code Explanation**:

1. Open data_table data
2. Define time series forecast object.
3. Set response variable.
4. Set time variable.
5. Fit multiple ETS models.
6. Configure forecasting settings.
7. Set other options.
8. Generate forecast report.
9. Extract model type text.
10. Assign extracted text to variable.



### Example 7
> **Summary**: Runs time series forecasting and decomposition of monthly sales data, generating forecast intervals and retrieving plot segments.

<!-- Keywords: #TimeSeriesForecasting, #JMPScriptingLanguage, #X11Decomposition, #ForecastIntervals, #PlotSegments -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = Time Series Forecast(
	Y( :Log Passengers ),
	Time( :Time ),
	Fit Model(
		NAhead( 10 ),
		Period( 4 ),
		NHoldout( 0 ),
		Forecasting Settings( NAhead( 10 ), Period( 12 ), NHoldout( 0 ) ),
		Constrain Parameters( 0 ),
		Other Options(
			Preserve Model Selection Criterion( 0 ),
			Forecast Interval Level( 0.5 ),
			Imputation for Applicable Models( "None" )
		)
	)
);
rpt1 = obj1 << report;
dt2 = (obj1 << Save Results(
	Save Forecast Intervals( 1 ),
	Name( "Save One-Step-Ahead Predictions" )(0),
	Save Original Series( 0 ),
	Save Forecast Results to Original Table( 0 ),
	Forecast Interval Level( 0.5 ),
	NAhead( 10 ),
	NHoldout( 0 )
))[1];
lower fi50 = dt2:Name( "Log Passengers (Lower 50%)" ) << get values;
upper fi50 = dt2:Name( "Log Passengers (Upper 50%)" ) << get values;
plot fi = (rpt1[Outline Box( "Series and Forecasts" )][FrameBox( 1 )] << Find Segs( PolySeg )) << get Y values;
```

**Code Explanation**:

1. Open data_table data
2. Create time series forecast object.
3. Set forecast parameters.
4. Generate forecast report.
5. Save forecast results to new table.
6. Extract lower forecast interval.
7. Extract upper forecast interval.
8. Retrieve plot segments.
9. Get Y values from plot.
10. Store extracted values.



### Example 8
> **Summary**: Runs time series forecasting and decomposition of monthly sales data using the X11 method, with parameters set for a 4-step ahead forecast and imputation.

<!-- Keywords: #TimeSeriesForecasting, #X11Decomposition, #JMPScriptingLanguage, #DataAnalysis, #Forecasting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Time Series Forecast(
	Y( :Y ),
	Grouping( :Series ),
	Time( :Time ),
	Fit Model(
		NAhead( 4 ),
		Period( 4 ),
		NHoldout( 0 ),
		Other Options(
			Preserve Model Selection Criterion( 0 ),
			Forecasting Interval Level( 0.95 ),
			Imputation for Applicable Models( "None" )
		)
	)
);
dt2 = (obj << Save Results(
	Save Forecast Intervals( 0 ),
	Name( "Save One-Step-Ahead Predictions" )(0),
	Save Original Series( 0 ),
	Save Forecast Results to Original Table( 0 ),
	Forecasting Interval Level( 0.95 ),
	N Ahead( 20 ),
	Holdout( 0 )
))[1];
dt3 = Data Table("data_table") << Split( Split By( :Series ), Split( :Y ), Remaining Columns( Drop All ), Sort by Column Property );
dt3 y646 = dt3:N 646 << get values;
dt y646 = (dt:Y << get values)[1 :: 44];
Close( dt, no save );
```

**Code Explanation**:

1. Open data_table data
2. Perform time series forecasting.
3. Set forecast parameters.
4. Save forecast results.
5. Split data table by series.
6. Extract specific series values.
7. Extract original series values.
8. Close original data table.



### Example 9
> **Summary**: Runs time series forecasting and decomposition of monthly sales data using the X11 method, generating forecast intervals and saving results to a new table.

<!-- Keywords: #TimeSeriesForecasting, #X11Decomposition, #JMPScriptingLanguage, #DataAnalysis, #ForecastIntervals -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Time Series Forecast(
	Y( :Price ),
	Time( :Year ),
	Fit Model(
		Select Models(
			ETS( Error Type( "Additive" ), Trend Type( "Additive" ), Seasonal Type( "None" ), Damped( "Yes" ) ),
			Constrain Parameters( 0 ), 
		),
		Forecasting Settings( NAhead( 10 ), NHoldout( 0 ) ),
		Other Options(
			Preserve Model Selection Criterion( 0 ),
			Forecast Interval Level( 0.95 ),
			Imputation for Applicable Models( "None" )
		)
	)
);
rpt = obj << report;
dt2 = (obj << Save Results(
	Save Forecast Intervals( 1 ),
	Name( "Save One-Step-Ahead Predictions" )(0),
	Save Original Series( 0 ),
	Save Forecast Results to Original Table( 0 ),
	Forecast Interval Level( 0.95 ),
	NAhead( 10 ),
	NHoldout( 0 )
))[1];
fi95 = (dt2 << get as matrix)[0, 2 :: 4];
b fi95 = [1572.9868203155 1384.41782651072 1767.18592301449,
1470.20788896397 1224.82491999765 1819.85386494249,
1413.99355209847 1145.82636710235 1848.39212375291,
1383.24744851796 1088.65197683527 1859.32368846236,
1366.43104654483 1043.53409008127 1870.73552180569,
1357.23341359659 1008.73829663898 1887.5982125351,
1352.20282191678 976.991128674843 1892.5266775765,
1349.4513691472 955.179401884862 1915.74867225852,
1347.94647810751 948.310341257474 1939.04705515661,
1347.12338673326 942.546284825438 1956.08425375373];
b fi95 2 = [1572.9868203155 1382.38865790976 1763.58498272125,
1516.77248345 1213.55215805518 1819.99280884482,
1486.02637986949 1129.75298333502 1842.29977640397,
1469.20997789636 1078.50518498267 1859.91477081006,
1460.01234494813 1042.99617918936 1877.02851070689,
1454.98175326831 1015.7875661642 1894.17594037242,
1452.23030049873 993.213271219201 1911.24732977825,
1450.72540945905 973.367789361757 1928.08302955634,
1449.90231808479 955.227248293665 1944.57738787592,
1449.45213305976 938.226410155071 1960.67785596445];
```

**Code Explanation**:

1. Open data table.
2. Perform time series forecasting.
3. Set model parameters.
4. Configure forecasting settings.
5. Apply other options.
6. Generate report.
7. Save results to new table.
8. Extract forecast intervals.
9. Define expected forecast intervals.
10. Define alternative expected forecast intervals.



### Example 10
> **Summary**: Runs the time series forecasting process for monthly sales data, generating one-step-ahead predictions with customized save options and forecast interval level.

<!-- Keywords: #TimeSeriesForecasting, #JMPScriptingLanguage, #DataAnalysis, #Forecasting, #BusinessIntelligence -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Time Series Forecast( Y( :CO2 ), Fit Model( NAhead( 18 ), Seasonality( 12 ), NHoldout( 17 ) ) );
rpt = obj << report;
saved1 = obj << Save Results(
	Save Forecast Intervals( 0 ),
	Name( "Save One-Step-Ahead Predictions" )(1),
	Save Original Series( 0 ),
	Save Forecast Results to Original Table( 0 ),
	Forecast Interval Level( 0.95 ),
	NAhead( 18 ),
	NHoldout( 10 )
);
saved1[1] << New Column( "row", formula( Row() ) );
```

**Code Explanation**:

1. Open data table.
2. Create time series forecast object.
3. Fit model with parameters.
4. Generate forecast report.
5. Save forecast results.
6. Customize save options.
7. Save one-step-ahead predictions.
8. Set forecast interval level.
9. Specify ahead and holdout periods.
10. Add row number column.



### Example 11
> **Summary**: Runs time series forecasting and decomposition of monthly sales data using the X11 method, with options for preserving model selection criterion and imputation.

<!-- Keywords: #TimeSeriesForecasting, #X11Decomposition, #JMPScriptingLanguage, #DataAnalysis, #Forecasting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Time Series Forecast(
	Y( :Y ),
	Grouping( :Series ),
	Time( :Time ),
	Fit Model(
		NAhead( 4 ),
		Period( 4 ),
		NHoldout( 0 ),
		Other Options(
			Preserve Model Selection Criterion( 0 ),
			Forecasting Interval Level( 0.95 ),
			Imputation for Applicable Models( "None" )
		)
	)
);
dt2 = (obj << Save Results(
	Save Forecast Intervals( 0 ),
	Name( "Save One-Step-Ahead Predictions" )(0),
	Save Original Series( 0 ),
	Save Forecast Results to Original Table( 0 ),
	Forecasting Interval Level( 0.95 ),
	N Ahead( 20 ),
	Holdout( 0 )
))[1];
dt3 = Data Table("data_table") << Split( Split By( :Series ), Split( :Y ), Remaining Columns( Drop All ), Sort by Column Property );
dt3 y646 = dt3:N 646 << get values;
dt y646 = (dt:Y << get values)[1 :: 44];
```

**Code Explanation**:

1. Open data_table data
2. Initiate time series forecasting.
3. Set forecasted variable.
4. Define grouping variable.
5. Specify time variable.
6. Configure fit model settings.
7. Save forecast results.
8. Split data table by series.
9. Extract values from split table.
10. Extract original values for comparison.



### Example 12
> **Summary**: Runs the Time Series X11 decomposition of a dataset containing monthly sales data using the Date column as the time variable, generating model summary matrices and reports.

<!-- Keywords: #TimeSeriesForecasting, #X11Decomposition, #JMPScriptingLanguage, #DataAnalysis, #Forecasting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Time Series Forecast(
	Y( :Y ),
	Grouping( :Series ),
	Time( :Time ),
	Fit Model(
		NAhead( 4 ),
		Period( 4 ),
		NHoldout( 0 ),
		Other Options(
			Preserve Model Selection Criterion( 0 ),
			Forecast Interval Level( 0.95 ),
			Imputation for Applicable Models( "None" )
		)
	)
);
rpt = obj << report;
fit1 = rpt["Model Reports"]["Series = N 646"]["Model Summary"][Table Box( 1 )] << get as matrix;
obj << Automatic Recalc( 1 );
dt << Clear row states;
dt << Select Where( Row() < 11 );
dt << Exclude;
rpt = obj << report;
fit2 = rpt["Model Reports"]["Series = N 646"]["Model Summary"][Table Box( 1 )] << get as matrix;
dt << Clear row states;
rpt = obj << report;
fit3 = rpt["Model Reports"]["Series = N 646"]["Model Summary"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data_table data
2. Run time series forecast.
3. Store forecast object.
4. Generate report.
5. Extract model summary matrix.
6. Enable automatic recalculation.
7. Clear row states.
8. Select first 10 rows.
9. Exclude selected rows.
10. Extract updated model summary matrix.



### Example 13
> **Summary**: Runs the time series forecasting process for monthly sales data, extracting relevant values and generating a forecast report with parameter estimates and sigma squared value.

<!-- Keywords: #TimeSeriesForecasting, #JMPScriptingLanguage, #X11Decomposition, #MonthlySalesData, #Forecasting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
my1 = (dt:Y << get values)[1 :: 44];
my2 = (dt:Y << get values)[1 :: 34];
my3 = (dt:Y << get values)[35 :: 44];
time1 = (dt:Time << get values)[1 :: 44];
obj = Time Series Forecast(
	Y( :Y ),
	Grouping( :Series ),
	Time( :Time ),
	Fit Model(
		NAhead( 4 ),
		Period( 4 ),
		NHoldout( 0 ),
		Constrain Parameters( 0 ),
		Other Options(
			Preserve Model Selection Criterion( 0 ),
			Forecast Interval Level( 0.95 ),
			Imputation for Applicable Models( "None" )
		)
	), 
);
rpt = obj << report;
sigma2 = (rpt[Outline Box( "Model Summary" )][Table Box( 1 )] << get as matrix)[5] ^ 2;
alpha0 = (rpt[Outline Box( "Parameter Estimates" )][Number Col Box( "Estimate" )] << get as matrix)[1];
beta0 = (rpt[Outline Box( "Parameter Estimates" )][Number Col Box( "Estimate" )] << get as matrix)[2];
gamma0 = (rpt[Outline Box( "Parameter Estimates" )][Number Col Box( "Estimate" )] << get as matrix)[3];
inits0 = (rpt[Outline Box( "Parameter Estimates" )][Number Col Box( "Estimate" )] << get as matrix)[4 :: 9];
saved2 = obj << Save Results(
	Save Forecast Intervals( 0 ),
	Name( "Save One-Step-Ahead Predictions" )(0),
	Save Original Series( 0 ),
	Save Forecast Results to Original Table( 0 ),
	Forecast Interval Level( 0.95 ),
	NAhead( 20 ),
	NHoldout( 10 )
);
dt forecast1 = saved2[1];
forecast1 = (dt forecast1:Y << get values)[1 :: 20];
b forecast1 time1 = {"1995Q1", "1995Q2", "1995Q3", "1995Q4", "1996Q1", "1996Q2", "1996Q3", "1996Q4", "1997Q1", "1997Q2", "1997Q3", "1997Q4",
"1998Q1", "1998Q2", "1998Q3", "1998Q4", "1999Q1", "1999Q2", "1999Q3", "1999Q4"};
saved time1 = (dt forecast1:Time << get values)[1 :: 20];
forecast1 time1 = {};
For( i = 1, i <= N Rows( saved time1 ), i++,
	Insert Into( forecast1 time1, Format( saved time1[i], "yyyyQq" ) )
);
```

**Code Explanation**:

1. Open data table.
2. Extract first 44 Y values.
3. Extract first 34 Y values.
4. Extract last 10 Y values.
5. Extract first 44 Time values.
6. Perform time series forecasting.
7. Generate forecast report.
8. Extract sigma squared value.
9. Extract parameter estimates.
10. Save forecast results.



## Fit Model using Split
> **Summary**: Opens a data table, splits Y by quadrant, keeps specific columns, and sorts the data. It then creates a new script named 'Model' that fits a model using Y variables with Layout as an effect.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #ModelFitting, #ColumnSelection, #ScriptCreation -->

**Code**:
```jsl
// Split Y by Quadrant
// Open data table
dt = Open("data_table.jmp");
// Split Y by Quadrant
dt = Split(
	Split By( :Quadrant ),
	Split( :Y ),
	Remaining Columns(
		Keep( :Wafer ID, :Layout )
	),
	Sort by Column Property
);
dt <<
New Script(
	"Model",
	Fit Model(
		Y(
			:"High, High"n, :"High, Low"n,
			:"Low, High"n, :"Low, Low"n
		),
		Effects( :Layout ),
		Keep dialog open( 1 ),
		Personality(
			"Standard Least Squares"
		),
		Emphasis( "Minimal Report" )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Split Y by Quadrant.
3. Keep specific columns.
4. Sort by column property.
5. Create new script.
6. Name script "Model".
7. Fit model using Y variables.
8. Include Layout as effect.
9. Keep dialog open.
10. Use Standard Least Squares personality.



## Fit Model using Oneway
> **Summary**: Performs a stepwise linear regression analysis on the Fitness data table to identify significant predictors of Oxygen consumption, utilizing Oneway and Fit Model platforms in JMP.

<!-- Keywords: #JMPScriptingLanguage, #StepwiseLinearRegression, #OxygenConsumption, #FitnessDataTable, #MultivariateModeling -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Oneway( Y( :LogHist0 ), X( :drug ) );
obj << Matching Column( :LogHist1 );
obj << Matching Lines( 1 );
Open("data_table.jmp");
Fit Model(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Effects( :Species ),
	Personality( Manova ),
	Run(
		Response Function(
			Identity, "Intercept" << {Test Details( 1 ), Centroid Plot( 1 )}, "Species" << {Test Details( 1 ), Centroid Plot( 1 )}
		)
	),
	SendToReport(
		Dispatch( {"Least Squares Means", "Overall Means"}, "FitManova LSMeans", FrameBox, {Marker Size( 2 )} ),
		Dispatch( {"Least Squares Means", "Species"}, "FitManova LSMeans", FrameBox, {Marker Size( 2 )} )
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Create Oneway plot.
3. Set matching column.
4. Enable matching lines.
5. Open data_table data
6. Fit multivariate model.
7. Specify response variables.
8. Include Species effect.
9. Use MANOVA personality.
10. Configure report settings.



## Fit Model using For
### Example 1
> **Summary**: Generates MANOVA models for BP variables in a specified data table, with interactive scrolling features to visualize frame boxes and absolute/relative window positioning.

<!-- Keywords: #JSLScriptingLanguage, #MANOVA, #DataVisualization, #WindowManagement, #InteractiveFeatures -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
For( i = 3, i >= 1, i--,
	fm = dt << Fit Model(
		Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
		Effects( :Subject, :Dose ),
		Personality( "Manova" ),
		Run
	);
	fm << Set Window Title( fm << Get Window Title || " Box Scrolling" );
	fm << setwindowsize( 600, 600 );
	fm << scroll window( Report( fm )[framebox( i )] );
);
For( j = 1, j <= 3, j++,
	fm = dt << Fit Model(
		Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
		Effects( :Subject, :Dose ),
		Personality( "Manova" ),
		Run
	);
	fm << Set Window Title( fm << Get Window Title || " Relative Scrolling" );
	fm << setwindowsize( 600, 600 );
	Match( j,
		1,
			fm << scroll window( Relative( "End" ) );
			fm << scroll window( Relative( -300 ) );,
		2,
			fm << scroll window( Relative( 150, 150 ) );
			fm << scroll window( Relative( "Start", 150 ) );,
		3,
			fm << scroll window( Relative( "End", "Start" ) );
			fm << scroll window( Relative( -150, 300 ) );
	
	);
);
For( k = 1, k <= 3, k++,
	fm = dt << Fit Model(
		Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
		Effects( :Subject, :Dose ),
		Personality( "Manova" ),
		Run
	);
	fm << Set Window Title( fm << Get Window Title || " Absolute Scrolling" );
	fm << setwindowsize( 600, 600 );
	Match( k,
		1,
			fm << scroll window( Absolute( "End" ) );
			fm << scroll window( Absolute( 150 ) );,
		2,
			fm << scroll window( Absolute( "End", "Start" ) );
			fm << scroll window( Absolute( 150, 350 ) );,
		3,
			fm << scroll window( Absolute( "End", "End" ) );
			fm << scroll window( Absolute( 150, "Start" ) );
	
	);
);
```

**Code Explanation**:

1. Open data table;
2. Loop through three iterations.
3. Fit MANOVA model for BP variables.
4. Append "Box Scrolling" to window title.
5. Set window size to 600x600.
6. Scroll to frame box based on iteration.
7. Loop through three iterations.
8. Fit MANOVA model for BP variables.
9. Append "Relative Scrolling" to window title.
10. Set window size to 600x600.
11. Scroll window relatively based on iteration.
12. Loop through three iterations.
13. Fit MANOVA model for BP variables.
14. Append "Absolute Scrolling" to window title.
15. Set window size to 600x600.
16. Scroll window absolutely based on iteration.



### Example 2
> **Summary**: Generates a distribution analysis for continuous variables in a specified data table using the Distribution platform, fitting a model with weight as an effect and displaying overall report metrics.

<!-- Keywords: #JSLScriptingLanguage, #Distribution, #ContinuousVariables, #ModelFitting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For( i = 1, i <= 10, i++,
	obj = dt << Fit Model( Y( :height ), Effects( :weight ), Personality( Response Screening ), Cauchy Fit( 1 ), Run() );
	obj << Overall Report( 1 );
	rpt = obj << report;
	temp1 = rpt["Overall Fit"][Number Col Box( "Count" )] << get as matrix;
	obj << close window;
);
```

**Code Explanation**:

1. Open data table;
2. Loop 10 times.
3. Fit model for height.
4. Use weight as effect.
5. Set personality to Response Screening.
6. Enable Cauchy fit.
7. Run the model.
8. Show overall report.
9. Get report object.
10. Extract count from report.



### Example 3
> **Summary**: Generates a predictive model for continuous variables in a specified data table, utilizing the Fit Model platform and filtering by a specific level.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #PredictiveModeling, #DataFiltering, #ContinuousVariables -->

**Code**:
```jsl
For( i = 1, i <= 10, i++,
	dt = Open("data_table.jmp");
	dt << New Column( "Level", continuous, formula( If( :age > 13, 2, 1 ) ) );
	obj_1 = dt << Fit Model(
		Y( :height ),
		Effects( :weight ),
		Personality( Response Screening ),
		Cauchy Fit( 1 ),
		Run(),
		Where( :Level == 2 )
	);
	obj_1 << save prediction formula;
);
```

**Code Explanation**:

1. Loop starts.
2. Open data table;
3. Add "Level" column.
4. Define "Level" formula.
5. Start Fit Model.
6. Set response variable.
7. Add effect variable.
8. Choose Response Screening.
9. Apply Cauchy Fit.
10. Run model.
11. Filter for Level == 2.
12. Save prediction formula.
13. Loop ends.



## Fit Model using Graph Builder
> **Summary**: Creates a variability chart with nested factors using operator and part configurations, displaying standard deviation charts in Graph Builder.

<!-- Keywords: #GraphBuilder, #VariabilityChart, #NestedFactors, #OperatorConfigurations, #StandardDeviationCharts -->

**Code**:
```jsl
Open("data_table.jmp");
Graph Builder(
	Size( 1057, 579 ),
	Show Control Panel( 0 ),
	Variables( X( :Sex ), Y( :MaxPulse ) ),
	Elements( Bar( X, Y, Legend( 3 ) ) ),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Set Graphlet(
				Picture(
					Fit Model(
						Y( :MaxPulse ),
						Effects( :Age, :Weight, :Oxy, :Runtime, :RunPulse, :RstPulse ),
						Personality( "Standard Least Squares" ),
						Emphasis( "Effect Leverage" ),
						Run(
							:MaxPulse << {Summary of Fit( 1 ), Analysis of Variance( 1 ), Parameter Estimates( 1 ), Lack of Fit( 0 ),
							Scaled Estimates( 0 ), Plot Actual by Predicted( 1 ), Plot Regression( 0 ), Plot Residual by Predicted( 1 ),
							Plot Studentized Residuals( 0 ), Plot Effect Leverage( 1 ), Plot Residual by Normal Quantiles( 0 ),
							Box Cox Y Transformation( 0 )}
						)
					)
				)
			), {Add Pin Annotation(
				Seg( BarSeg( 1 ) ),
				Index( {1, 1} ),
				Index Row( {4, 4} ),
				UniqueID( 103479057 ),
				FoundPt( {442, 353} ),
				Origin( {1.06935817805383, 44.4774} ),
				Offset( {-99, -11} ),
				Tag Line( 1 )
			), Add Pin Annotation(
				Seg( BarSeg( 1 ) ),
				Index( {0, 0} ),
				Index Row( {0, 0} ),
				UniqueID( 103479056 ),
				FoundPt( {205, 142} ),
				Origin( {0.087991718426501, 146.48535} ),
				Offset( {-25, 62} ),
				Tag Line( 1 )
			)}}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create Graph Builder window.
3. Set window size to 1057x579.
4. Hide control panel.
5. Assign Sex to X-axis, MaxPulse to Y-axis.
6. Add bar element to graph.
7. Insert fit model graphlet.
8. Define MaxPulse as response variable.
9. Include Age, Weight, Oxy, Runtime, RunPulse, RstPulse as effects.
10. Use standard least squares personality.



## Fit Model using New Column
### Example 1
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot, grouping by a new column _bycol.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StepwisePersonality, #ProfilerPlot, #ByGroup -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "_bycol", Character, Nominal, set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ) );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
```

**Code Explanation**:

1. Open data table;
2. Create new column _bycol.
3. Set _bycol values to "A", "B".
4. Launch Fit Model platform.
5. Specify Oxy as response.
6. Add Runtime, Weight, RunPulse, RstPulse, MaxPulse as effects.
7. Select Stepwise personality.
8. Group by _bycol.
9. Run the model.
10. Finish the analysis.



### Example 2
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot, utilizing the Fit Model platform to analyze data in the '_bycol' group.

<!-- Keywords: #FitModel, #LeastSquares, #ProfilerPlot, #ByGrouping, #StepwisePersonality -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "_bycol", Character, Nominal, set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ) );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
(obj[1] << Get Group ) << Local Data Filter();
```

**Code Explanation**:

1. Open data table;
2. Create new column "_bycol".
3. Set values for "_bycol".
4. Launch Fit Model platform.
5. Set response variable to Oxy.
6. Add effects: Runtime, Weight, RunPulse, RstPulse, MaxPulse.
7. Use Stepwise personality.
8. Apply By grouping using "_bycol".
9. Run the model.
10. Finish the model fit.



### Example 3
> **Summary**: Fits a nominal logistic model with multiple effects to predict the 'ReadyOld' column in a data table, generating a profiler plot for terms 'heat' and 'soak'.

<!-- Keywords: #NominalLogisticModel, #MultipleEffects, #ProfilerPlot, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "ReadyOld", Character, Nominal, Formula( If( :ready == "Not Ready", 1, 0 ) ) );
:ReadyOld << Delete Formula;
obj = dt << Fit Model(
	Freq( :count ),
	Y( :ReadyOld ),
	Effects( :heat, :soak ),
	Personality( "Nominal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 0 ),
		Profiler( 1, Term Value( heat( 19.876, Lock( 0 ), Show( 1 ) ), soak( 2.0333, Lock( 0 ), Show( 1 ) ) ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create new column "ReadyOld".
3. Define formula for "ReadyOld".
4. Remove formula from "ReadyOld".
5. Launch Fit Model platform.
6. Set frequency to "count".
7. Specify response variable "ReadyOld".
8. Add effects: "heat", "soak".
9. Choose "Nominal Logistic" personality.
10. Run model with specified options.



### Example 4
> **Summary**: Fits a standard logistic regression model with multiple effects and generates a profiler plot, utilizing the Nominal Logistic personality and customizing report layout.

<!-- Keywords: #JSLScriptingLanguage, #LogisticRegression, #NominalLogisticPersonality, #ProfilerPlot, #CustomReportLayout -->

**Code**:
```jsl
fn = "c:\temp\test.htm";
dt under test = Open("data_table.jmp");
dt under test << New Column( "Over 70", numeric, nominal, values( (Column( "Age(years)" ) << get values) > 70 ) );
cols = dt under test << get column names();
obj = Fit Model(
	Y( :Over 70 ),
	Effects( Eval( cols[1 :: N Items( cols ) - 1] ) ),
	Personality( Nominal Logistic ),
	Run( Likelihood Ratio Tests( 1 ), Wald Tests( 0 ) ),
	SendToReport(
		Dispatch( {}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Lack Of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Parameter Estimates"}, "Covariance of Estimates", OutlineBox, {Close( 0 )} ),
		Dispatch( {}, "Effect Likelihood Ratio Tests", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Define file path.
2. Open data table.
3. Create new column "Over 70".
4. Get all column names.
5. Fit logistic regression model.
6. Set response variable.
7. Include all effects except last.
8. Use nominal logistic personality.
9. Run likelihood ratio tests.
10. Customize report layout.



### Example 5
> **Summary**: Fits a standard least squares model with multiple effects and generating a profiler plot for analysis.

<!-- Keywords: #JSLScriptingLanguage, #FitGroup, #StandardLeastSquares, #ProfilerPlot, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Model E (2P)", Formula( Parameter( {theta1 = 0.1, theta2 = 1.8889}, theta1 * :ABRASION ^ theta2 ) ) );
dt << New Column( "Logistic 5p (Richard Function)",
	Formula(
		Parameter(
			{theta1 = 2294, theta2 = 700, theta3 = -5.79484272907593, theta4 = 0.0380645949622243, theta5 = 1},
			theta1 + (theta2 - theta1) / (1 + Exp( theta3 + theta4 * :ABRASION )) ^ theta5
		)
	)
);
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run()
	),
	Neural( Set Random Seed( 12345 ), Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ), X( :SILICA, :SILANE, :SULFUR ), Go ),
	Gaussian Process( Y( :HARDNESS ), X( :SILICA, :SILANE, :SULFUR ), Set Correlation Function( "Cubic" ), ),
	Nonlinear( Y( :MODULUS ), X( :Name( "Model E (2P)" ) ), Newton, Finish, Accept Current Estimates )
);
obj << Profiler( 1 );
rpt = obj << parent;
Close( dt, no save );
b test3 = {Number Edit Box( width( 9 ), decimal( 99 ), fmtdecimal( -1 ), Number( 1.2 ) ), Number Edit Box(
	width( 9 ),
	decimal( 99 ),
	fmtdecimal( -1 ),
	Number( 50 )
), Number Edit Box( width( 9 ), decimal( 99 ), fmtdecimal( -1 ), Number( 2.3 ) )};
```

**Code Explanation**:

1. Open data table.
2. Add new column "Model E (2P)" with formula.
3. Add new column "Logistic 5p (Richard Function)" with formula.
4. Perform Fit Group analysis.
5. Fit standard least squares model.
6. Run neural network analysis.
7. Perform Gaussian process analysis.
8. Conduct nonlinear regression.
9. Generate profiler report.
10. Close data table without saving.



### Example 6
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot, utilizing various JMP platforms including Fit Group, Neural, Gaussian Process, and Nonlinear.

<!-- Keywords: #JMPScriptingLanguage, #FitGroup, #NeuralNetwork, #GaussianProcess, #NonlinearModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Model E (2P)", Formula( Parameter( {theta1 = 0.1, theta2 = 1.8889}, theta1 * :ABRASION ^ theta2 ) ) );
dt << New Column( "Logistic 5p (Richard Function)",
	Formula(
		Parameter(
			{theta1 = 2294, theta2 = 700, theta3 = -5.79484272907593, theta4 = 0.0380645949622243, theta5 = 1},
			theta1 + (theta2 - theta1) / (1 + Exp( theta3 + theta4 * :ABRASION )) ^ theta5
		)
	)
);
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( Standard Least Squares ),
		Emphasis( Minimal Report ),
		Run()
	), 
	Neural( Set Random Seed( 12345 ), Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ), X( :SILICA, :SILANE, :SULFUR ), Go ), 
	Gaussian Process( Y( :HARDNESS ), X( :SILICA, :SILANE, :SULFUR ), Set Correlation Function( "Cubic" ), ),
	Nonlinear( Y( :MODULUS ), X( :Name( "Model E (2P)" ) ), Newton, Finish, Accept Current Estimates )
);
obj << Local Data Filter(
	Location( {0, 0} ),
	Add Filter( columns( :ABRASION ), Where( :ABRASION >= 110 & :ABRASION <= 190 ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
obj << Automatic Recalc( 0 );
dt << Select Rows( 1 :: 5 );
dt << Exclude();
rpt = obj << Report;
```

**Code Explanation**:

1. Open data_table data
2. Create new column "Model E (2P)".
3. Create new column "Logistic 5p".
4. Fit group of models.
5. Fit standard least squares model.
6. Run neural network analysis.
7. Fit Gaussian process model.
8. Fit nonlinear model.
9. Add local data filter.
10. Disable automatic recalculation.



### Example 7
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot, utilizing various JMP platforms and features.

<!-- Keywords: #JMPScriptingLanguage, #FitGroup, #StandardLeastSquares, #ProfilerPlot, #DataFiltering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Model E (2P)", Formula( Parameter( {theta1 = 0.1, theta2 = 1.8889}, theta1 * :ABRASION ^ theta2 ) ) );
dt << New Column( "Logistic 5p (Richard Function)",
	Formula(
		Parameter(
			{theta1 = 2294, theta2 = 700, theta3 = -5.79484272907593, theta4 = 0.0380645949622243, theta5 = 1},
			theta1 + (theta2 - theta1) / (1 + Exp( theta3 + theta4 * :ABRASION )) ^ theta5
		)
	)
);
obj = dt << Fit Group(
	Fit Model(
		Y( :ABRASION ),
		Effects(
			:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILICA * :SILANE, :SILANE * :SILANE, :SILICA * :SULFUR,
			:SILANE * :SULFUR, :SULFUR * :SULFUR
		),
		Personality( Standard Least Squares ),
		Emphasis( Minimal Report ),
		Run()
	),
	Neural( Set Random Seed( 12345 ), Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ), X( :SILICA, :SILANE, :SULFUR ), Go ),
	Gaussian Process( Y( :HARDNESS ), X( :SILICA, :SILANE, :SULFUR ), Set Correlation Function( "Cubic" ), ),
	Nonlinear( Y( :MODULUS ), X( :Name( "Model E (2P)" ) ), Newton, Finish, Accept Current Estimates )
);
obj << Local Data Filter(
	Location( {0, 0} ),
	Add Filter( columns( :ABRASION ), Where( :ABRASION >= 110 & :ABRASION <= 190 ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
obj << Automatic Recalc( 0 );
dt << Select Rows( 1 :: 5 );
dt << Exclude();
rpt = obj << Report;
```

**Code Explanation**:

1. Open table.
2. Create new column "Model E (2P)".
3. Create new column "Logistic 5p".
4. Fit group models.
5. Add local data filter.
6. Disable automatic recalculation.
7. Select first 5 rows.
8. Exclude selected rows.
9. Generate report.



### Example 8
> **Summary**: Fits multiple standard least squares models with different effects and generating profiler plots, utilizing JMP's Fit Model platform.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #ProfilerPlot, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "w",
	Numeric,
	"Continuous",
	Format( "Best", 12 ),
	Set Values( [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] )
);
obj1 = dt << Fit Model(
	Weight( :w ),
	Y( :height ),
	Effects( :weight ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Press( 1 ) )
);
rpt1 = obj1 << report;
press1 = rpt1["Press"][Table Box( 1 )] << get as matrix;
obj2 = dt << Fit Model(
	Freq( :w ),
	Y( :height ),
	Effects( :weight ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Press( 1 ) )
);
rpt2 = obj2 << report;
press2 = rpt2["Press"][Table Box( 1 )] << get as matrix;
dt << Clear Select << Select Rows( Index( 4, 40 ) ) << Hide and Exclude;
obj3 = dt << Fit Model(
	Y( :height ),
	Effects( :weight ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Press( 1 ) )
);
rpt3 = obj1 << report;
press3 = rpt3["Press"][Table Box( 1 )] << get as matrix;
dt << Invert Row Selection;
dt subset = dt << subset( selected rows( 1 ) );
obj0 = dt subset << Fit Model(
	Y( :height ),
	Effects( :weight ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Press( 1 ) )
);
rpt0 = obj0 << report;
b press = rpt0["Press"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Add new column "w".
3. Set values for column "w".
4. Fit model with weight.
5. Retrieve model report.
6. Extract Press statistic.
7. Fit model with frequency.
8. Retrieve model report.
9. Extract Press statistic.
10. Select and hide rows 4 to 40.
11. Fit model without weights.
12. Retrieve model report.
13. Extract Press statistic.
14. Invert row selection.
15. Create subset of selected rows.
16. Fit model on subset.
17. Retrieve model report.
18. Extract Press statistic.



### Example 9
> **Summary**: Fits a standard least squares model with multiple effects and generating a profiler plot, utilizing JMP's Fit Model platform.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #ProfilerPlot, #StandardLeastSquares, #MultipleEffects -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "temp, sex", character, nominal, formula( :sex ) );
obj1 = dt << Fit Model(
	Y( :weight ),
	Effects( :age, :Name( "temp, sex" ), :height ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Profiler( 1 ), Surface Profiler( 1 ) )
);
rpt1 = obj1 << report;
fit1 = rpt1[Outline Box( "Summary of Fit" )][Table Box( 1 )] << get as matrix;
obj2 = dt << Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Profiler( 1 ), Surface Profiler( 1 ) )
);
rpt2 = obj2 << report;
fit2 = rpt2[Outline Box( "Summary of Fit" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Create new column "temp, sex".
3. Fit model with weight as response.
4. Include age, temp, sex, height as effects.
5. Use Standard Least Squares personality.
6. Generate minimal report.
7. Run Profiler and Surface Profiler.
8. Extract Summary of Fit report.
9. Convert report to matrix.
10. Repeat steps 3-9 without "temp, sex" column.



### Example 10
> **Summary**: Fits a standard least squares model with multiple effects and generates predicted values for a transformed response variable.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #PredictedValues, #LogisticRegression, #StandardLeastSquares -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "height2", numeric, formula( :height / 200 ) );
obj1 = dt << Fit Model(
	Y( Logit( :height2 ) ),
	Effects( :weight ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj1 << Predicted Values;
pred1 = dt:Predicted height2 << get values;
obj2 = dt << Fit Model(
	Y( Transform Column( "Transform[height]", Formula( Logit( :height2 ) ) ) ),
	Effects( :weight ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj2 << Predicted Values;
pred2 = dt:Predicted height2 2 << get values;
```

**Code Explanation**:

1. Open data table;
2. Create new column "height2".
3. Fit logistic model with "height2" as response.
4. Include "weight" as effect.
5. Use standard least squares personality.
6. Generate minimal report.
7. Calculate predicted values for "height2".
8. Store predicted values in pred1.
9. Create transform column for "height".
10. Fit logistic model with transformed "height" as response.



### Example 11
> **Summary**: Fits two standard least squares models with multiple effects and generates profiler plots for parameter estimates.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #ProfilerPlot, #DataAnalysis -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
dt2 << New Column( "sqrt v1", formula( Sqrt( :v1 ) ) );
dt2 << New Column( "sqrt v2", formula( Sqrt( :v2 ) ) );
dt2 << New Column( "sqrt v3", formula( Sqrt( :v3 ) ) );
obj1 = dt2 << Fit Model(
	Y( :ls ),
	Effects( Sqrt( :v1 ), Sqrt( :v2 ), Sqrt( :v3 ), :v1 * :v2, :v1 * :v3, :v2 * :v3 ),
	No Intercept( 1 ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
rpt1 = Report( obj1 );
obj2 = dt2 << Fit Model(
	Y( :ls ),
	Effects( :Sqrt v1, :Sqrt v2, :Sqrt v3, :Sqrt v1 * :Sqrt v2, :Sqrt v1 * :Sqrt v3, :Sqrt v2 * :Sqrt v3 ),
	Center Polynomials( 0 ),
	No Intercept( 1 ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
rpt2 = Report( obj2 );
parm1 = rpt1[Outline Box( "Parameter Estimates" )][Table Box( 1 )] << get as matrix;
parm2 = rpt2[Outline Box( "Parameter Estimates" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Create sqrt v1 column.
3. Create sqrt v2 column.
4. Create sqrt v3 column.
5. Fit first model with sqrt terms.
6. Store first model report.
7. Fit second model with sqrt columns.
8. Store second model report.
9. Extract parameter estimates from first report.
10. Extract parameter estimates from second report.



### Example 12
> **Summary**: Fits a standard least squares model with multiple effects, generates a profiler plot, and retrieves prediction standard errors from two models.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #StandardLeastSquares, #MultipleEffects, #ProfilerPlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:height[2] = dt:height[4] = .;
dt << New Column( "height2", formula( If( Is Missing( :height ), Col Mean( :height ), :height ) ) );
dt << New Column( "indicator", formula( If( Is Missing( :height ), 1, 0 ) ) );
obj = Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height ),
	Informative Missing( 1 ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << StdErr Pred Formula( 1 );
obj2 = Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height2, :indicator ),
	Informative Missing( 0 ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj2 << StdErr Pred Formula( 1 );
stderr1 = dt:PredSE weight << get values;
stderr2 = dt:PredSE weight 2 << get values;
```

**Code Explanation**:

1. Open data table.
2. Set specific height values to missing.
3. Create new column "height2".
4. Create new column "indicator".
5. Fit model with original height.
6. Enable standard error prediction formula.
7. Fit model with modified height and indicator.
8. Enable standard error prediction formula.
9. Retrieve prediction standard errors from first model.
10. Retrieve prediction standard errors from second model.



### Example 13
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot, including studentized residuals and UCL/LCL calculations.

<!-- Keywords: #JSLScriptingLanguage, #StandardLeastSquaresModel, #ProfilerPlot, #StudentizedResiduals, #UCL/LCLCalculations -->

**Code**:
```jsl
dt3 = Open("data_table.jmp");
dt3 << New Column( "Freq1", values( [2, 3] |/ J( 38, 1, 1 ) ) );
obj2 = dt3 << Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height ),
	Freq( :Freq1 ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
rpt2 = obj2 << report;
obj2 << Plot Studentized Residuals( 1 );
plot resid = (rpt2[Outline Box( "Studentized Residuals" )][FrameBox( 1 )] << Find Seg( Marker Seg( 1 ) )) << Get Y Values;
b ucl bonf = J( 2, 1, -t Quantile( 0.025 / 43, 34 ) );
b lcl bonf = J( 2, 1, t Quantile( 0.025 / 43, 34 ) );
b ucl indiv = J( 2, 1, -t Quantile( 0.025, 34 ) );
b lcl indiv = J( 2, 1, t Quantile( 0.025, 34 ) );
b ref = [0, 0];
ref = (rpt2[Outline Box( "Studentized Residuals" )][FrameBox( 1 )] << Find Seg( Line Seg( 1 ) )) << Get Y Values;
ucl bonf = (rpt2[Outline Box( "Studentized Residuals" )][FrameBox( 1 )] << Find Seg( Line Seg( 2 ) )) << Get Y Values;
lcl bonf = (rpt2[Outline Box( "Studentized Residuals" )][FrameBox( 1 )] << Find Seg( Line Seg( 3 ) )) << Get Y Values;
ucl indiv = (rpt2[Outline Box( "Studentized Residuals" )][FrameBox( 1 )] << Find Seg( Line Seg( 4 ) )) << Get Y Values;
lcl indiv = (rpt2[Outline Box( "Studentized Residuals" )][FrameBox( 1 )] << Find Seg( Line Seg( 5 ) )) << Get Y Values;
obj2 << Externally Studentized Residuals( 1 );
saved = dt3:Externally Studentized Residuals weight << get values;
```

**Code Explanation**:

1. Open data table;
2. Add "Freq1" column with values.
3. Fit linear model with specified effects and frequency.
4. Generate minimal report for the model.
5. Plot studentized residuals.
6. Extract Y values from residual plot.
7. Calculate Bonferroni UCL and LCL.
8. Calculate individual UCL and LCL.
9. Extract reference line Y values.
10. Extract Bonferroni and individual UCL/LCL values.
11. Plot externally studentized residuals.
12. Save externally studentized residuals to dataset.



### Example 14
> **Summary**: Fits two standard least squares models with multiple effects and generates profiler plots for studentized residuals.

<!-- Keywords: #JSLScripting, #FitModel, #StandardLeastSquares, #MultipleEffects, #ProfilerPlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "miles2", formula( :miles + Random Normal( 0, 6 ) ) );
obj1 = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
rpt1 = obj1 << report;
obj1 << Plot Studentized Residuals( 1 );
y1 = (rpt1[Outline Box( "Studentized Residuals" )][FrameBox( 1 )] << Find Seg( Marker Seg( 1 ) )) << Get Y Values;
obj2 = dt << Fit Model(
	Y( :miles2 ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
rpt2 = obj2 << report;
obj2 << Plot Studentized Residuals( 1 );
y2 = (rpt2[Outline Box( "Studentized Residuals" )][FrameBox( 1 )] << Find Seg( Marker Seg( 1 ) )) << Get Y Values;
obj = dt << Fit Model(
	Y( :miles, :miles2 ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Columns( Studentized Residuals );
rpt = obj << report;
obj << Plot Studentized Residuals( 1 );
y3 = (rpt[1][Outline Box( "Studentized Residuals" )][FrameBox( 1 )] << Find Seg( Marker Seg( 1 ) )) << Get Y Values;
y4 = (rpt[2][Outline Box( "Studentized Residuals" )][FrameBox( 1 )] << Find Seg( Marker Seg( 1 ) )) << Get Y Values;
b y3 = dt:Studentized Resid miles << get values;
b y4 = dt:Studentized Resid miles2 << get values;
note3 = rpt[1][Outline Box( "Response miles" )][Outline Box( "Studentized Residuals" )][Text Box( 3 )] << get text;
note4 = rpt[2][Outline Box( "Response miles2" )][Outline Box( "Studentized Residuals" )][Text Box( 3 )] << get text;
```

**Code Explanation**:

1. Open data table;
2. Add new column "miles2".
3. Fit model for "miles".
4. Retrieve report object.
5. Plot studentized residuals.
6. Extract Y values from plot.
7. Fit model for "miles2".
8. Retrieve report object.
9. Plot studentized residuals.
10. Extract Y values from plot.



### Example 15
> **Summary**: Fits multiple MANOVA models with different response functions and saves canonical scores for each group.

<!-- Keywords: #JMPScriptingLanguage, #MANOVA, #CanonicalScores, #DataModeling, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "group",
	Numeric,
	Continuous,
	Format( "Best", Use thousands separator, 12 ),
	Set Values( [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	by( :group ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
obj << (Response[1] << (Effect[1] << Save Canonical Scores));
obj2 = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) ),
	Where( :group == 1 )
);
obj2 << (Response[1] << (Effect[1] << Save Canonical Scores));
obj3 = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) ),
	Where( :group == 2 )
);
obj3 << (Response[1] << (Effect[1] << Save Canonical Scores));
save1 = dt:Name( "Canon[1] By group" ) << get values;
save2 = dt:Name( "Canon[1] Where" ) << get values;
Close( dt, no save );
b group1 = {"Canonical", "Canonical 2"};
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Contrast" ) )
);
obj1 << (Response["Contrast"] << (Effect["Whole Model"] << Save Canonical Scores));
obj1 << (Response["Contrast"] << (Effect["Whole Model"] << Save Canonical Scores));
group1 = dt << Get Column Groups Names;
For( i = 1, i <= N Items( group1 ), i++,
	colname = dt << Get Column Group( group1[i] );
	If( i == 1, , );
);
```

**Code Explanation**:

1. Open data table;
2. Create new column "group".
3. Fit model with MANOVA personality.
4. Save canonical scores for first response.
5. Fit model for group 1.
6. Save canonical scores for group 1.
7. Fit model for group 2.
8. Save canonical scores for group 2.
9. Retrieve saved canonical score values.
10. Close data table without saving.



### Example 16
> **Summary**: Fits a mixed model with multiple Ys, generating reports, and extracting covariance parameter estimates, fixed effects parameter estimates, and fit statistics from the results.

<!-- Keywords: #JSLScriptingLanguage, #MixedModel, #FitStatistics, #CovarianceParameterEstimates, #FixedEffects -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "miles2", numeric, formula( :miles + Random Integer( 0, 5 ) ) );
dt << New Column( "miles3", numeric, formula( :miles + Random Normal() ) );
bef aa = Associative Array( Window() << get window title );
obj = dt << Fit Model(
	Y( :miles, :miles2, :miles3 ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run( Results in Data Tables )
);
rpt = obj << report;
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aft aa << get keys;
b tbl2 = ((rpt[1]["Random Effects Covariance Parameter Estimates"][Table Box( 1 )] << get as matrix)[0, 2 :: 6] |/ (rpt[2][
"Random Effects Covariance Parameter Estimates"][Table Box( 1 )] << get as matrix)[0, 2 :: 6] |/ (rpt[3][
"Random Effects Covariance Parameter Estimates"][Table Box( 1 )] << get as matrix)[0, 2 :: 6]);
b tbl3 = (rpt[1]["Fixed Effects Parameter Estimates"][Tab Page Box( 2 )][Table Box( 1 )] << get as matrix)[0, 1 :: 7] |/ (rpt[2][
"Fixed Effects Parameter Estimates"][Tab Page Box( 2 )][Table Box( 1 )] << get as matrix)[0, 1 :: 7] |/ (rpt[3][
"Fixed Effects Parameter Estimates"][Tab Page Box( 2 )][Table Box( 1 )] << get as matrix)[0, 1 :: 7];
b tbl4 = (rpt[1]["Fit Statistics"][Table Box( 1 )] << get as matrix)` |/ (rpt[2]["Fit Statistics"][Table Box( 1 )] << get as matrix)` |/ (
rpt[3]["Fit Statistics"][Table Box( 1 )] << get as matrix)`;
```

**Code Explanation**:

1. Open data table;
2. Create new column "miles2".
3. Create new column "miles3".
4. Store current window titles.
5. Fit mixed model with multiple Ys.
6. Retrieve model report.
7. Update window titles.
8. Remove unchanged windows.
9. Get remaining window keys.
10. Extract and compare covariance parameter estimates.
11. Extract and compare fixed effects parameter estimates.
12. Extract and compare fit statistics.



### Example 17
> **Summary**: Fits a Nominal Logistic model with multiple effects and generates a report, utilizing the Validation 2 column for validation and setting the decision threshold to 1.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #Validation, #DecisionThreshold, #ModelFitting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Validation 2", formula( Match( :Y Ordinal, "Low", 0, "Medium", 1, "High", Random Integer( 0, 1 ) ) ) );
dt:Y Ordinal << Set Modeling Type( "Nominal" );
obj = dt << Fit Model(
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Personality( "Nominal Logistic" ),
	Target Level( "High" ),
	Run
);
obj << Decision Threshold( 1 );
rpt = obj << report;
test1 = Try( rpt["Decision Tresholds"] << get title, 1 );
```

**Code Explanation**:

1. Open data table;
2. Add new column "Validation 2".
3. Define formula for "Validation 2".
4. Set "Y Ordinal" as Nominal.
5. Fit Nominal Logistic model.
6. Specify effects for the model.
7. Use "Validation 2" for validation.
8. Set target level to "High".
9. Run the model.
10. Set decision threshold to 1.



### Example 18
> **Summary**: Fits a nominal logistic model with multiple effects and generates reports for parameter estimates, unit odds ratios, and confidence intervals.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #MultipleEffects, #ParameterEstimates, #ConfidenceIntervals -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Thread Wear Nom",
	character,
	nominal,
	Formula( If( :Thread Wear Measured <= 4, "Low", :Thread Wear Measured <= 15, "Moderate", "Severe" ) )
);
obj1 = dt << Fit Model( Y( :Thread Wear Nom ), Effects( :"Size of Load (lbs)"n, :Method ), Personality( "Nominal Logistic" ), Run );
obj1 << Confidence Intervals( 0.1 );
obj1 << Odds Ratios;
rpt1 = obj1 << report;
parmest1 = rpt1["Parameter Estimates"][Table Box( 1 )] << get as matrix;
unit OR1 = rpt1["Unit Odds Ratios"][Table Box( 1 )] << get as matrix;
OR1 = rpt1["Odds Ratios for Method"][Table Box( 1 )] << get as matrix;
obj2 = dt << Fit Model( Y( :Thread Wear Nom ), Effects( :"Size of Load (lbs)"n, :Method ), Personality( "Nominal Logistic" ), Run );
obj2 << Odds Ratios;
obj2 << Confidence Intervals( 0.1 );
rpt2 = obj2 << report;
parmest2 = rpt2["Parameter Estimates"][Table Box( 1 )] << get as matrix;
unit OR2 = rpt2["Unit Odds Ratios"][Table Box( 1 )] << get as matrix;
OR2 = rpt2["Odds Ratios for Method"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Create new column "Thread Wear Nom".
3. Define formula for "Thread Wear Nom".
4. Fit nominal logistic model with effects.
5. Set confidence level for intervals.
6. Calculate odds ratios.
7. Retrieve parameter estimates report.
8. Extract parameter estimates matrix.
9. Extract unit odds ratios matrix.
10. Extract odds ratios for method matrix.



### Example 19
> **Summary**: Fits a nominal logistic model with multiple effects and generates a profiler plot to analyze the relationship between 'sex 2', 'age', and 'height' in a data table.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #ProfilerPlot, #MultipleEffects, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "sex 2", character, Formula( Match( :sex, "F", "High", "M", "Low" ) ) );
obj1 = dt << Fit Model( Y( :sex 2 ), Target Level( "Low" ), Effects( :age, :height ), Personality( "Nominal Logistic" ), Run );
rpt1 = obj1 << report;
note1 = rpt1[Outline Box( "Parameter Estimates" )][Text Box( 1 )] << get text;
```

**Code Explanation**:

1. Open data table;
2. Create new column "sex 2".
3. Assign formula to "sex 2".
4. Fit nominal logistic model.
5. Set target level to "Low".
6. Include age and height as effects.
7. Run the model.
8. Retrieve model report.
9. Access parameter estimates outline box.
10. Get text from first text box.



### Example 20
> **Summary**: Fits a nominal logistic model for sex and an ordinal logistic model for age, with subsequent profiling and quantile extraction.

<!-- Keywords: #JSLScripting, #NominalLogisticRegression, #OrdinalLogisticRegression, #QuantileExtraction, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Freq", values( J( 3, 1, 0 ) |/ J( 4, 1, 1 ) |/ J( 5, 1, -1 ) |/ J( 28, 1, 1 ) ) );
obj1 = dt << Fit Model( Freq( :Freq ), Y( :sex ), Target Level( "F" ), Effects( :height ), Personality( "Nominal Logistic" ), Run );
s = dt << Select Where( :Freq != 1 );
s << Colors( "Red" );
obj2 = dt << Fit Model( Freq( :Freq ), Y( :age ), Effects( :sex ), Personality( "Ordinal Logistic" ), Run );
Log Capture(
	obj2 << Save Quantiles( 1 );
	obj2 << Save Expected Value( 1 );
);
saved q = (dt:Name( "OrdQ.05" ) << get values) || (dt:Name( "OrdQ.50" ) << get values) || (dt:Name( "OrdQ.95" ) << get values);
saved exp = dt:Ord Expected << get values;
```

**Code Explanation**:

1. Open data table;
2. Create new column "Freq".
3. Fit nominal logistic model for sex.
4. Select rows where Freq != 1.
5. Color selected rows red.
6. Fit ordinal logistic model for age.
7. Capture log output.
8. Save quantiles from ordinal model.
9. Save expected values from ordinal model.
10. Extract saved quantile values.
11. Extract saved expected values.



### Example 21
> **Summary**: Fits a proportional hazard model to analyze the relationship between days and group, with censoring based on the ZCensor column.

<!-- Keywords: #JMPScriptingLanguage, #ProportionalHazardModel, #Censoring, #SurvivalAnalysis, #DataModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "ZCensor", Set Formula( 1 - :Censor ) );
fm = dt << Fit Model( Y( :days ), Effects( :Group ), Personality( "Proportional Hazard" ), Censor( :ZCensor ), Censor Code( 0 ), Run );
v = Report( fm )["Whole Model"][Number Col Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open table.
2. Create new column.
3. Define censor formula.
4. Fit proportional hazard model.
5. Specify response variable.
6. Include group effect.
7. Set censor column.
8. Define censor code.
9. Execute model fit.
10. Extract report matrix.



### Example 22
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot for three responses: miles, scaled miles, and scaled miles2.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #StandardLeastSquares, #REMLMethod, #ProfilerPlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "scaled miles", numeric, formula( :miles * 10 ^ 10 ) );
dt << New Column( "scaled miles2", numeric, formula( :miles / 10 ^ 5 ) );
obj = dt << Fit Model(
	Y( :miles, :scaled miles, :scaled miles2 ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
rpt = obj << report;
df1 = rpt[1][Outline Box( "Response miles" )][Outline Box( "Fixed Effect Tests" )][Number Col Box( "DFDen" )] << get as matrix;
df2 = rpt[2][Outline Box( "Response scaled miles" )][Outline Box( "Fixed Effect Tests" )][Number Col Box( "DFDen" )] << get as matrix;
df3 = rpt[3][Outline Box( "Response scaled miles2" )][Outline Box( "Fixed Effect Tests" )][Number Col Box( "DFDen" )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Create new column "scaled miles".
3. Create new column "scaled miles2".
4. Fit model with specified responses and effects.
5. Use REML method for estimation.
6. Retrieve model report.
7. Extract degrees of freedom for "miles" response.
8. Extract degrees of freedom for "scaled miles" response.
9. Extract degrees of freedom for "scaled miles2" response.



### Example 23
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot, utilizing the REML method to analyze the relationship between weight, MR1, height, and other variables in a data table.

<!-- Keywords: #JSLScripting, #FitModel, #REMLMethod, #ProfilerPlot, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "MR1", Character, "Multiple Response", Formula( Char( :age ) || "," || :sex ) );
dt:age << Set Modeling Type( "nominal" );
befAA = Associative Array( Window() << get window title );
log1 = Log Capture(
	obj1 = dt << Fit Model(
		Y( :weight ),
		Effects( :MR1 & random, :height ),
		Personality( "Standard Least Squares" ),
		Method( "REML" ),
		Run
	)
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	Window( aftlst[i] ) << Close Window( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create new column "MR1".
3. Set "age" modeling type to nominal.
4. Capture initial window titles.
5. Fit model with REML method.
6. Capture final window titles.
7. Remove initial titles from final titles.
8. Get remaining window keys.
9. Loop through remaining windows.
10. Close each window.



### Example 24
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot, utilizing the JMP scripting language.

<!-- Keywords: #JMPScriptingLanguage, #MultipleResponseModeling, #StandardLeastSquares, #REMLMethod, #ProfilerPlot -->

**Code**:
```jsl
b log1 = "Columns with a Mutliple Response modeling type can not be random effects.";
dt = Open("data_table.jmp");
dt << New Column( "MR1", Character, "Multiple Response", Formula( Char( :age ) || "," || :sex ) );
dt:age << Set Modeling Type( "nominal" );
befAA = Associative Array( Window() << get window title );
log1 = Log Capture(
	obj1 = dt << Fit Model(
		Y( :weight ),
		Effects( :MR1 & random, :height ),
		Personality( "Standard Least Squares" ),
		Method( "REML" ),
		Run
	)
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	Window( aftlst[i] ) << Close Window( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create new column "MR1".
3. Set "age" to nominal.
4. Capture initial window titles.
5. Fit model with REML.
6. Capture final window titles.
7. Remove initial titles from final list.
8. Get remaining window keys.
9. Loop through remaining windows.
10. Close each remaining window.



### Example 25
> **Summary**: Fits a standard least squares model with multiple effects and generating a profiler plot, utilizing the JMP Fit Model platform.

<!-- Keywords: #JMPFitModel, #MultipleEffects, #ProfilerPlot, #LeastSquares, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "MR1", Character, "Multiple Response", Formula( Char( :age ) || "," || :sex ) );
befAA = Associative Array( Window() << get window title );
log1 = Log Capture( obj1 = dt << Fit Model( Y( :weight ), Effects( :MR1, :height ), Personality( "Stepwise" ), Run ) );
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	Window( aftlst[i] ) << Close Window( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Create new column "MR1".
3. Store initial window titles.
4. Fit model using stepwise method.
5. Capture log output.
6. Store updated window titles.
7. Remove initial titles from updated list.
8. Get remaining window keys.
9. Loop through remaining windows.
10. Close each window.



### Example 26
> **Summary**: Fits a standard least squares model with multiple effects and generating a profiler plot, utilizing Stepwise personality in JMP.

<!-- Keywords: #JMPScriptingLanguage, #StepwiseRegression, #MultipleResponseEffects, #ProfilerPlot, #DataAnalysis -->

**Code**:
```jsl
b log1 = "Stepwise does not support multiple response effects.";
dt = Open("data_table.jmp");
dt << New Column( "MR1", Character, "Multiple Response", Formula( Char( :age ) || "," || :sex ) );
befAA = Associative Array( Window() << get window title );
log1 = Log Capture( obj1 = dt << Fit Model( Y( :weight ), Effects( :MR1, :height ), Personality( "Stepwise" ), Run ) );
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	Window( aftlst[i] ) << Close Window( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Create new column for multiple responses.
3. Capture initial window titles.
4. Fit model using Stepwise personality.
5. Capture final window titles.
6. Remove initial windows from final list.
7. Get remaining window keys.
8. Loop through remaining windows.
9. Close each window.



### Example 27
> **Summary**: Fits a standard least squares model with multiple effects and generating a profiler plot, while also calculating various statistics such as mean, SE, ST, and R_2.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #ProfilerPlot, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Validation", formula( Random Integer( 1, 3 ) ) );
obj1 = dt << Fit Model(
	Y( :Age ),
	Effects( :Sex, :Weight, :Oxy, :Runtime, :Weight * :Oxy, :Weight * :Runtime, :Oxy * :Runtime, :Weight * :Oxy * :Runtime, ),
	Validation( :Validation ),
	Personality( "Stepwise" ),
	Run
);
obj1 << Enter All( 1 );
obj2 = dt << Fit Model(
	Y( :Age ),
	Effects( :Sex, :Weight, :Oxy, :Runtime, :Weight * :Oxy, :Weight * :Runtime, :Oxy * :Runtime, :Weight * :Oxy * :Runtime, ),
	Validation( :Validation ),
	Personality( "Standard Least Squares" ),
	Run
);
obj2 << {:Age << Save Columns( Prediction Formula )};
dt << New Column( "MeanBy", formula( Col Mean( :Age, :Validation ) ) );
dt << New Column( "SE", formula( (:Age - :Pred Formula Age) ^ 2 ) );
dt << New Column( "ST", formula( (:Age - :MeanBy) ^ 2 ) );
dt << New Column( "R_2", formula( 1 - Col Sum( :SE, :Validation ) / Col Sum( :ST, :Validation ) ) );
Summarize( dt, by1 = By( :Validation ), b r2 = Mean( :R_2 ) );
rpt1 = Report( obj1 );
r2 = (rpt1[Outline Box( "Stepwise Fit for Age" )][Number Col Box( "RSquare" )] << get as matrix) |/ (rpt1[
Outline Box( "Stepwise Fit for Age" )][Number Col Box( "RSquare Validation" )] << get as matrix) |/ (rpt1[
Outline Box( "Stepwise Fit for Age" )][Number Col Box( "RSquare Test" )] << get as matrix);
```

**Code Explanation**:

1. Open data table;
2. Create "Validation" column.
3. Fit model using Stepwise personality.
4. Enter all effects.
5. Fit model using Standard Least Squares.
6. Save prediction formula.
7. Create "MeanBy" column.
8. Create "SE" column.
9. Create "ST" column.
10. Create "R_2" column.



### Example 28
> **Summary**: Fits a standard least squares model with multiple effects and generating a profiler plot for sex prediction, utilizing stepwise personality for model selection.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #StepwisePersonality, #NominalLogisticRegression, #ProfilerPlot -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Validation", formula( Random Integer( 1, 3 ) ) );
obj1 = dt << Fit Model(
	Y( :sex ),
	Effects( :Runtime, :RunPulse, :Runtime * :RunPulse ),
	Validation( :Validation ),
	Personality( "Stepwise" ),
	Run
);
obj1 << Step( 1 );
obj2 = dt << Fit Model( Y( :sex ), Effects( :Runtime ), Validation( :Validation ), Personality( "Nominal Logistic" ), Run );
obj2 << Save Probability Formula( 1 );
dt << New Column( "Train -logp",
	formula( If( :Validation == 1, -Log( Match( :sex, "F", :Name( "Prob[F]" ), "M", :Name( "Prob[M]" ), ) ) ) )
);
dt << New Column( "Valid -logp",
	formula( If( :Validation == 2, -Log( Match( :sex, "F", :Name( "Prob[F]" ), "M", :Name( "Prob[M]" ), ) ) ) )
);
dt << New Column( "Test -logp",
	formula( If( :Validation == 3, -Log( Match( :sex, "F", :Name( "Prob[F]" ), "M", :Name( "Prob[M]" ), ) ) ) )
);
b Train Neglogp = Col Mean( :Name( "Train -logp" ) );
b Valid Neglogp = Col Mean( :Name( "Valid -logp" ) );
b Test Neglogp = Col Mean( :Name( "Test -logp" ) );
Train NegLL = Col Sum( :Name( "Train -logp" ) );
Valid NegLL = Col Sum( :Name( "Valid -logp" ) );
Test NegLL = Col Sum( :Name( "Test -logp" ) );
b r2 = (1 - Train NegLL / 3.01416129005149) |/ (1 - Valid NegLL / 5.00402423538188) |/ (1 - Test NegLL / 8.97241378824445);
	
rpt1 = Report( obj1 );
r2 = (rpt1[Outline Box( "Stepwise Fit for Sex" )][Number Col Box( "RSquare" )] << get as matrix) |/ (rpt1[
Outline Box( "Stepwise Fit for Sex" )][Number Col Box( "RSquare Validation" )] << get as matrix) |/ (rpt1[
Outline Box( "Stepwise Fit for Sex" )][Number Col Box( "RSquare Test" )] << get as matrix);
```

**Code Explanation**:

1. Open data table.
2. Add "Validation" column with random integers.
3. Fit model with sex as response.
4. Include Runtime, RunPulse, and interaction effects.
5. Use stepwise personality for model selection.
6. Run the stepwise model.
7. Perform first step of stepwise process.
8. Fit nominal logistic model with sex as response.
9. Include Runtime effect.
10. Save probability formula for logistic model.



### Example 29
> **Summary**: Fits a standard least squares model with multiple effects and generates profiler plots for two response variables.

<!-- Keywords: #JSLScripting, #FitModel, #ProfilerPlot, #StandardLeastSquares, #MultipleEffects -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "y1", Numeric, Formula( :y + 1 ) );
dt << New Column( "y2", Numeric, Formula( :y + 1 ) );
obj1 = dt << Fit Model(
	Transform Column( "Log[y1]", Formula( Log( :y1 ) ) ),
	Y( :"Log[y1]"n ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Profiler( 1, Confidence Intervals( 1 ), Term Value( Drug( "a", Lock( 0 ), Show( 1 ) ), x( 12, Lock( 0 ), Show( 1 ) ) ) ) )
);
obj1 << Prediction Formula;
obj1 << StdErr Pred Formula;
rpt1 = obj1 << report;
predFormY1 = Words( rpt1["Prediction Profiler"][List Box( 6 )] << get text, "[,]" )[1 :: 3];
predY1 = Num( predFormY1[1] );
lowCI1 = Num( predFormY1[2] );
higCI1 = Num( predFormY1[3] );
Log Capture( obj = dt << Profiler( Y( :Pred Formula y1, :"PredSE Log[y1]"n ), Use SE Formula( 1 ) ) );
rpt = obj << report;
predFormY = Words( rpt["Prediction Profiler"][List Box( 6 )] << get text, "[,]" )[1 :: 3];
predY = Num( predFormY[1] );
lowCI = Num( predFormY[2] );
higCI = Num( predFormY[3] );
obj2 = dt << Fit Model(
	Y( Sqrt( :y2 ) ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Profiler( 1, Confidence Intervals( 1 ), Term Value( Drug( "a", Lock( 0 ), Show( 1 ) ), x( 12, Lock( 0 ), Show( 1 ) ) ) ) )
);
obj2 << Prediction Formula;
obj2 << StdErr Pred Formula;
rpt2 = obj2 << report;
predFormY2 = Words( rpt2["Prediction Profiler"][List Box( 6 )] << get text, "[,]" )[1 :: 3];
predY2 = Num( predFormY2[1] );
lowCI2 = Num( predFormY2[2] );
higCI2 = Num( predFormY2[3] );
Log Capture( obj3 = dt << Profiler( Y( :Pred Formula y2, :"PredSE Sqrt(y2)"n ), Use SE Formula( 1 ) ) );
rpt3 = obj3 << report;
predFormY3 = Words( rpt3["Prediction Profiler"][List Box( 6 )] << get text, "[,]" )[1 :: 3];
predY3 = Num( predFormY3[1] );
lowCI3 = Num( predFormY3[2] );
higCI3 = Num( predFormY3[3] );
```

**Code Explanation**:

1. Open data table;
2. Create new column "y1".
3. Create new column "y2".
4. Fit model for "Log[y1]".
5. Add effects: "Drug", "x".
6. Run profiler with confidence intervals.
7. Extract prediction formula.
8. Extract standard error formula.
9. Capture report from first profiler.
10. Extract prediction values and confidence intervals.
11. Fit model for "Sqrt(y2)".
12. Add effects: "Drug", "x".
13. Run profiler with confidence intervals.
14. Extract prediction formula.
15. Extract standard error formula.
16. Capture report from second profiler.
17. Extract prediction values and confidence intervals.



### Example 30
> **Summary**: Fits a nominal logistic model with multiple effects and generates a profiler plot to visualize the probability of readiness.

<!-- Keywords: #JSLScripting, #NominalLogisticRegression, #ProfilerPlot, #MultipleEffects, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "ReadyOld", Numeric, Nominal, Formula( If( :ready == "Not Ready", 1, 0 ) ) );
dt:ReadyOld << Delete Formula;
obj = dt << Fit Model( Freq( :count ), Y( :ReadyOld ), Effects( :heat, :soak ), Personality( "Nominal Logistic" ), Run Model );
obj << Save Probability Formula;
Log Capture(
	obj = dt << Profiler(
		Y( :Name( "Prob[0]" ), :Name( "Prob[1]" ), :Most Likely ReadyOld ),
		Profiler( 1, Term Value( heat( 50 ), soak( 2.5 ) ) ),
		Expand,
		SendToReport(
			Dispatch( {"Prediction Profiler"}, "2", ScaleBox, {Min( 0 ), Max( 60 ), Inc( 10 ), Rotated Labels( 1 )} ),
			Dispatch( {"Prediction Profiler"}, "1", ScaleBox, {Max( 100 ), Inc( 20 ), Minor Ticks( 0 ), Rotated Labels( 1 )} )
		)
	)
);
indicator = Is Scriptable( obj );
formLin = Column( "Lin[1]" ) << get formula;
formProb0 = Column( "Prob[0]" ) << get formula;
formProb1 = Column( "Prob[1]" ) << get formula;
Substitute Into( formLin, Expr( :heat ), Expr( x1 ), Expr( :soak ), Expr( x2 ) );
Substitute Into( formProb0, Expr( :Name( "Lin[1]" ) ), Expr( LinValue ) );
Substitute Into( formProb1, Expr( :Name( "Lin[1]" ) ), Expr( LinValue ) );
nTest = 10;
For( i = 1, i <= nTest, i++,
	x1 = Random Uniform( 40, 80 );
	x2 = Random Uniform( 5, 15 );
	obj << Profiler( Term Value( heat( x1, Max( 80 ) ), soak( x2, Max( 15 ) ) ) );
	rpt = obj << report;
	observedLike = Num( rpt[Text Box( 3 )] << get text );
	LinValue = Eval( formLin );
	expProb0 = Eval( formProb0 );
	expProb1 = Eval( formProb1 );
	expLike = Match( Max( expProb0, expProb1 ), expProb0, 0, expProb1, 1, . );
);
```

**Code Explanation**:

1. Open table.
2. Add new column.
3. Remove formula from new column.
4. Fit logistic model.
5. Save probability formula.
6. Create profiler.
7. Set profiler settings.
8. Check scriptability.
9. Get formulas.
10. Substitute variables.



### Example 31
> **Summary**: Process of performing time series forecasting with multiple effects and configuring model options, generating a profiler plot for analysis.

<!-- Keywords: #TimeSeriesForecasting, #ModelOptions, #ProfilerPlot, #JSLScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "missing", numeric );
For( i = 1, i <= 30, i++,
	obj2 = dt << Time Series Forecast(
		Y( :missing ),
		Grouping( :Series ),
		Time( :Time ),
		Fit Model(
			NAhead( 8 ),
			NHoldout( 8 ),
			Other Options(
				Preserve Model Selection Criterion( 0 ),
				Forecast Interval Level( 0.95 ),
				Imputation for Applicable Models( "None" )
			)
		)
	);
	obj2 << close window;
);
```

**Code Explanation**:

1. Open data table.
2. Create new column "missing".
3. Loop 30 times.
4. Perform time series forecast.
5. Set forecast parameters.
6. Configure model options.
7. Close forecast window.
8. Repeat loop.
9. Continue until loop ends.
10. End script.



## Fit Model using Random Reset
### Example 1
> **Summary**: Performs a Partial Least Squares (PLS) regression analysis on the provided data table, generating various plots and reports.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #RegressionAnalysis, #DataVisualization, #PLSPlotting -->

**Code**:
```jsl
Random Reset( 47 );
dt = Open("data_table.jmp");
obj = Fit Model(
	Y( :y ),
	Effects( :Drug, :x, :Drug * :x ),
	No Intercept,
	Personality( Partial Least Squares ),
	Run(
		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),
		Fit(
			Method( NIPALS ),
			Number of Factors( 1 ),
			Variable Importance Plot( 1 ),
			Distance Plots( 1 ),
			Diagnostics Plots( 1 ),
			Profiler( 1 ),
			Overlay Loadings Plots( 1 ),
			VIP vs Coefficients Plots( 1 ),
			Percent Variation Plots( 1 ),
			T Square Plot( 1 ),
			Overlay Coefficients Plots( 1 )
		)
	),
	SendToReport(
		Dispatch( {"NIPALS Fit with 1 Factors Using Fast SVD", "Percent Variation Explained for X Effects"}, "1", ScaleBox,
			{Rotated Labels( "Vertical" )}
		),
		Dispatch( {"NIPALS Fit with 1 Factors Using Fast SVD", "Percent Variation Explained for Y Responses"}, "1", ScaleBox,
			{Rotated Labels( "Vertical" )}
		),
		Dispatch( {"NIPALS Fit with 1 Factors Using Fast SVD", "X Loading Plot"}, "1", ScaleBox, {Rotated Labels( "Vertical" )} ),
		Dispatch( {"NIPALS Fit with 1 Factors Using Fast SVD", "Y Loading Plot"}, "1", ScaleBox, {Rotated Labels( "Vertical" )} ),
		Dispatch( {"NIPALS Fit with 1 Factors Using Fast SVD", "Variable Importance Plot"}, "1", ScaleBox, {Rotated Labels( "Vertical" )} ),
		Dispatch( {"NIPALS Fit with 1 Factors Using Fast SVD", "Coefficient Plot for Centered and Scaled Data"}, "1", ScaleBox,
			{Rotated Labels( "Vertical" )}
		),
		Dispatch( {"NIPALS Fit with 1 Factors Using Fast SVD", "Coefficient Plot for Original Data"}, "1", ScaleBox,
			{Rotated Labels( "Vertical" )}
		)
	)
);
```

**Code Explanation**:

1. Reset random seed.
2. Open data table;
3. Initiate Fit Model.
4. Set response variable.
5. Define model effects.
6. Exclude intercept term.
7. Choose Partial Least Squares personality.
8. Configure validation method.
9. Specify fitting method.
10. Generate various plots.



### Example 2
> **Summary**: Fits multiple linear regression models with varying specifications, generating reports and extracting effect tests for each model.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #ModelFitting, #DataAnalysis, #ReportGeneration -->

**Code**:
```jsl
Random Reset( 2342 );
dt = Open("data_table.jmp");
dt:LDL[3 :: 10] = .;
obj1 = dt << Fit Model( Y( :Y ), Effects( :Gender, :BMI, :BP, :LDL ), Personality( "Response Screening" ), Robust Fit( 1 ), Run );
rpt1 = obj1 << report;
test1 = rpt1["Effect Tests"][Table Box( 1 )] << get as matrix;
obj2 = dt << Fit Model( Y( :Y ), Effects( :Gender, :BMI, :BP ), Switch( :LDL ), Personality( "Response Screening" ), Robust Fit( 1 ), Run );
rpt2 = obj2 << report;
test2 = rpt2["Effect Tests"][Table Box( 1 )] << get as matrix;
obj3 = dt << Fit Model( Y( :Y ), Effects( :Gender, :BMI, :BP, :LDL ), Personality( "Response Screening" ), Cauchy Fit( 1 ), Run );
rpt3 = obj3 << report;
test3 = rpt3["Effect Tests"][Table Box( 1 )] << get as matrix;
obj4 = dt << Fit Model( Y( :Y ), Effects( :Gender, :BMI, :BP ), Switch( :LDL ), Personality( "Response Screening" ), Cauchy Fit( 1 ), Run );
rpt4 = obj4 << report;
test4 = rpt4["Effect Tests"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Set random seed.
2. Open data table;
3. Set LDL values 3-10 to missing.
4. Fit model with LDL.
5. Generate report for model 1.
6. Extract effect tests from report 1.
7. Fit model without LDL using switch.
8. Generate report for model 2.
9. Extract effect tests from report 2.
10. Fit model with LDL using Cauchy fit.
11. Generate report for model 3.
12. Extract effect tests from report 3.
13. Fit model without LDL using switch and Cauchy fit.
14. Generate report for model 4.
15. Extract effect tests from report 4.



### Example 3
> **Summary**: Analyze a linear model with random selection and multiple comparisons, utilizing JMP's standard least squares personality.

<!-- Keywords: #JMPScriptingLanguage, #LinearModel, #MultipleComparisons, #RandomSelection, #StandardLeastSquares -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 12345 );
dt << Select Randomly( 0.9 ) << Delete Rows();
obj = Fit Model( Y( :y ), Effects( :x, :Drug ), Personality( "Standard Least Squares" ), Emphasis( "Minimal Report" ), Run );
log1 = Log Capture( obj << Multiple Comparisons( Effect( :Drug ), Comparisons with Overall Average( 1 ) ) );
Close( dt, no save );
b comp effect = [3.15523529023617 0.2 15.7761764511808,
-5.42829364982825 0.327407594936709 -16.5796204296287,
0.0368755861890933 0.378921569620253 0.0973172000370663];
```

**Code Explanation**:

1. Open data table;
2. Reset random seed.
3. Select 90% rows randomly.
4. Delete unselected rows.
5. Fit linear model with "y" as response.
6. Include "x" and "Drug" as effects.
7. Use standard least squares personality.
8. Generate minimal report.
9. Run the model.
10. Capture log for multiple comparisons.
11. Close table without saving.



### Example 4
> **Summary**: Fits a standard least squares model to a data table, selecting 90% of rows randomly, and capturing log for multiple comparisons.

<!-- Keywords: #JSLScriptingLanguage, #DataAnalysis, #RegressionModel, #MultipleComparisons, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 12345 );
dt << Select Randomly( 0.9 ) << Delete Rows();
obj = Fit Model( Y( :y ), Effects( :x, :Drug ), Personality( "Standard Least Squares" ), Emphasis( "Minimal Report" ), Run );
Log Capture(
	obj << Multiple Comparisons( Effect( :Drug ), Tukey HSD );
	obj << Multiple Comparisons( Effect( :Drug ), Comparisons with control( 1, Control Level( "Drug:d" ) ) );
);
```

**Code Explanation**:

1. Open data table;
2. Set random seed to 12345.
3. Randomly select 90% of rows.
4. Delete unselected rows.
5. Fit standard least squares model.
6. Use "y" as response variable.
7. Include "x" and "Drug" as effects.
8. Generate minimal report.
9. Run the model.
10. Capture log for multiple comparisons.



### Example 5
> **Summary**: Process of selecting a random sample from a data table, fitting a standard least squares model, and generating a minimal report with multiple comparisons.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #RegressionAnalysis, #MultipleComparisons, #MinimalReport -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 12345 );
dt << Select Randomly( 0.9 ) << Delete Rows();
obj = Fit Model( Y( :y ), Effects( :x, :Drug ), Personality( "Standard Least Squares" ), Emphasis( "Minimal Report" ), Run );
log1 = Log Capture( obj << Multiple Comparisons( Effect( :Drug ), Comparisons with Overall Average( 1 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Set random seed to 12345.
3. Randomly select 90% of rows.
4. Delete unselected rows.
5. Fit standard least squares model.
6. Specify response variable "y".
7. Include effects "x" and "Drug".
8. Generate minimal report.
9. Run the model.
10. Capture multiple comparisons log.



### Example 6
> **Summary**: Process of performing a time series forecast and saving one-step-ahead predictions in JMP, utilizing the Time Series Forecast platform.

<!-- Keywords: #JMP, #TimeSeriesForecast, #PredictiveModeling, #DataAnalysis, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 12345 );
dt << New Column( "Y2", numeric, formula( :Y + Random Integer( 100, 500 ) ) );
act01 = dt:Y << get values;
act02 = dt:Y2 << get values;
time0 = dt:Time << get values;
nobs = N Rows( dt );
obj = dt << Time Series Forecast(
	Y( :Y, :Y2 ),
	Grouping( :Series ),
	Time( :Time ),
	Fit Model(
		NAhead( 4 ),
		Period( 4 ),
		NHoldout( 0 ),
		Other Options(
			Preserve Model Selection Criterion( 0 ),
			Forecasting Interval Level( 0.95 ),
			Imputation for Applicable Models( "None" )
		)
	)
);
obj << Save Results(
	Save Forecast Intervals( 0 ),
	Name( "Save One-Step-Ahead Predictions" )(1),
	Save Original Series( 1 ),
	Save Forecast Results to Original Table( 1 ),
	Forecasting Interval Level( 0.95 ),
	N Ahead( 20 ),
	Holdout( 0 )
);
time1 = dt:Time 2 << get values;
time2a = dt:Time 2 2 << get values;
onestep1 = dt:Y 1 Step and Forecast << get values;
onestep2 = dt:Y2 1 Step and Forecast << get values;
forecast1 = dt:Y Actual and Forecast << get values;
forecast2 = dt:Y2 Actual and Forecast << get values;
nobs2 = N Rows( dt );
```

**Code Explanation**:

1. Open data_table data
2. Reset random seed.
3. Create new column Y2.
4. Extract Y values.
5. Extract Y2 values.
6. Extract Time values.
7. Count rows in table.
8. Perform time series forecast.
9. Save forecast results.
10. Extract forecasted values.



## Fit Model using If
### Example 1
> **Summary**: Runs marker relatedness analysis and model fitting for a specific dataset, utilizing principal components, clustering, and random effects.

<!-- Keywords: #JMPScriptingLanguage, #MarkerRelatednessAnalysis, #ModelFitting, #DataTableOperations, #StatisticalModeling -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	dt << Clear Select << Select Rows( Index( 11, 1000 ) ) << Delete Rows;
	obj = dt << Marker Relatedness(
		Marker( Column Group( "Markers" ) ),
		Principal Components( 1 ),
		Clustering( 1 ),
		Ploidy( 2 ),
		Set Random Seed( 0 ),
		Missing Marker Imputation Method( "NONEHWE" ),
		Kinship Type( "Identical by State" ),
		SendToReport(
			Dispatch( {"Marker Relatedness", "Hierarchical Clustering", "Dendrogram"}, "Clust Dendro", FrameBox, {Frame Size( 35, 700 )} )
		)
	);
	obj << Merge Kinship Table;
	Fit Model(
		Effects,
		Random Effects( Grouped( Column Group( "IBS" ) ) ),
		Personality( "Response Screening" ),
		Y( :Trait1 ),
		Switch( :CG1 SNP1, :CG1 SNP2 ),
		Run,
		SendToReport(
			Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 0 )} ),
			Dispatch( {}, "Variance Components", OutlineBox, {Close( 0 )} )
		)
	);
);
```

**Code Explanation**:

1. Check for JMP Pro version.
2. Open data_table data
3. Clear existing selections.
4. Delete specific rows.
5. Perform marker relatedness analysis.
6. Set principal components to 1.
7. Enable clustering.
8. Set ploidy to 2.
9. Initialize random seed.
10. Use NONEHWE imputation method.
11. Set kinship type.
12. Adjust dendrogram size.
13. Merge kinship table.
14. Fit model with response screening personality.
15. Add random effects.
16. Specify Y variable.
17. Switch variables.
18. Run the model.
19. Close parameter estimates report.
20. Close variance components report.



### Example 2
> **Summary**: Runs a series of model fitting, publishing, and comparison operations using JMP's Formula Depot and data table manipulation features.

<!-- Keywords: #JMPScriptingLanguage, #FormulaDepot, #DataTableManipulation, #ModelFitting, #Publishing -->

**Code**:
```jsl
If( JMP Product Name() == "Pro",
	fd = formula depot();
	dt = Open("data_table.jmp");
	obj = Fit Model(
		Y( :weight ),
		Effects( :age, :sex, :height ),
		Personality( Standard Least Squares ),
		Emphasis( "Minimal Report" ),
		Run
	);
	mp1 = obj << Publish Prediction Formula;
	mp2 = obj << Publish Parameterized Formula;
	mc = fd << Model comparison( formulas( mp1, mp2 ) );
	rfd = fd << Report;
	mc << Profiler;
	mc << Plot Actual by Predicted;
	mc << Plot Residual by Row;
	mc << Model Averaging;
	mc << Local Data Filter;
	Close( dt, nosave );
	fd = formula depot();
	dt = Open("data_table.jmp");
	obj = Fit Model(
		Y( :weight ),
		Effects( :age, :sex, :height ),
		Personality( Standard Least Squares ),
		Emphasis( "Minimal Report" ),
		Run
	);
	mp1 = obj << Publish Prediction Formula;
	mp2 = obj << Publish Parameterized Formula;
	pr = fd << Profiler( formulas( mp1, mp2 ) );
	rfd = fd << Report;
			
	pr << Custom Profiler;
	fd << close window;
	Close( dt, nosave );
	dt = Open("data_table.jmp");
	obj = dt << RunScript( "Nominal Logistic" );
	fd = Formula Depot();
	obj << Save Probability Formula;
	fd << Add Formula From Column( Table( dt ), Columns( "Most Likely Species" ) );
	obj << Publish Probability Formulas;
	fd << Model Comparison( Table( dt ), Formulas( 1 ) );
	rfd = fd << report;
	fd << close window;
	Close( dt, nosave );
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
	Close( dt, nosave );
);
```

**Code Explanation**:

1. Check if JMP Product Name is Pro.
2. Initialize Formula Depot.
3. Open data table.
4. Fit Model with weight as Y and age, sex, height as effects.
5. Publish Prediction Formula.
6. Publish Parameterized Formula.
7. Compare models using Formula Depot.
8. Generate model report.
9. Enable Profiler.
10. Plot Actual vs Predicted.
11. Plot Residual vs Row.
12. Enable Model Averaging.
13. Enable Local Data Filter.
14. Close data_table.jmp without saving.
15. Reinitialize Formula Depot.
16. Reopen data table.
17. Refit Model.
18. Republish Prediction Formula.
19. Republish Parameterized Formula.
20. Generate Profiler report.
21. Enable Custom Profiler.
22. Close Formula Depot window.
23. Close data_table.jmp without saving.
24. Open data table.
25. Run Nominal Logistic script.
26. Initialize Formula Depot.
27. Save Probability Formula.
28. Add formula from "Most Likely Species" column.
29. Publish Probability Formulas.
30. Compare models using Formula Depot.
31. Generate model report.
32. Close Formula Depot window.
33. Close data_table.jmp without saving.
34. Reopen data table.
35. Rerun Nominal Logistic script.
36. Reinitialize Formula Depot.
37. Republish Probability Formulas.
38. Republish Probability Formulas.
39. Generate model report.
40. Close Formula Depot window.
41. Close data_table.jmp without saving.
42. Create new table named "test".
43. Initialize Formula Depot.
44. Add formula from "test" column.
45. Generate model report.
46. Close Formula Depot window.
47. Close "test" table without saving.



### Example 3
> **Summary**: Runs a series of data manipulation and analysis tasks in JMP Pro, including model fitting, partitioning, and formula publishing.

<!-- Keywords: #JMPScriptingLanguage, #DataManipulation, #ModelFitting, #Partitioning, #FormulaPublishing -->

**Code**:
```jsl
If( JMP Product Name() == "Pro",
	fd = Formula Depot();
	fd << Title( "FD Sanity Check" );
	source = Open("data_table.jmp");
	obj = Fit Model(
		Y( :weight ),
		Effects( :age, :sex, :height ),
		Personality( Standard Least Squares ),
		Emphasis( "Minimal Report" ),
		Run
	);
	mp1 = obj << Publish Prediction Formula;
	obj = Partition( Y( :weight ), X( :sex, :age, :height ), Split Best( 3 ) );
	mp2 = obj << Publish Prediction Formula;
	source << New Column( "Test", Formula( :height + :weight ) );
	mp3 = fd << Add Formula from Column( Table( source ), columns( "Test" ) );
	invaliddt = Open("data_table.jmp");
	target = Open("data_table.jmp");
	fd << Copy Scripts();
	str = Get Clipboard();
	fd << Copy Scripts( abcd );
	str = Get Clipboard();
	fd << Copy Formulas as Transforms();
	str = Get Clipboard();
	fd << Copy Formulas as Transforms( abc );
	str = Get Clipboard();
	code = fd << Generate C Code( NoEditor );
	code = fd << Generate Python Code( Formulas( {mp1, mp2} ), NoEditor );
	code = fd << Generate Python Code( table(), Formulas( {mp1, mp2} ), NoEditor );
	code = fd << Generate Javascript Code( table( source ), Formulas( {3} ), NoEditor );
	code = fd << Generate SAS Code( Formulas( {3} ), NoEditor );
	code = fd << Generate SQL Code( Formulas( mp1, "Partition - weight" ), "MySQL", NoEditor );
	code = fd << Generate SQL Code( Formulas( mp2, 1 ), "SQL Server", NoEditor );
	code = fd << Generate SQL Code( Formulas( {mp1, 2} ), NoEditor );
	Close( source, nosave );
	Close( invaliddt, nosave );
	Close( target, nosave );
	fd << close window;
);
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Initialize Formula Depot.
3. Set title for Formula Depot.
4. Open data table;
5. Fit model with weight as response.
6. Publish prediction formula.
7. Partition data on weight.
8. Publish another prediction formula.
9. Create new column with formula.
10. Add formula to Formula Depot.
11. Open data table;
12. Open data table;
13. Copy scripts from Formula Depot.
14. Copy scripts with name "abcd".
15. Copy formulas as transforms.
16. Copy formulas as transforms named "abc".
17. Generate C code.
18. Generate Python code for formulas.
19. Generate Python code for table and formulas.
20. Generate JavaScript code for source table.
21. Generate SAS code for formulas.
22. Generate MySQL SQL code.
23. Generate SQL Server SQL code.
24. Generate generic SQL code.
25. Close all datasets without saving.
26. Close Formula Depot window.



### Example 4
> **Summary**: Fits a mixed-effects model, generating prediction and parameterized formulas, and publishing standard error and confidence limit formulas in JMP Pro.

<!-- Keywords: #JMPPro, #MixedEffectsModeling, #PredictiveAnalytics, #FormulaPublishing, #DataAnalysis -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	n1 = N Items( dt << get column names( string ) );
	obj = dt << Fit Model(
		Y( :miles ),
		Effects( :species, :season, :species * :season ),
		Random Effects( :subject[:species] ),
		Personality( "Standard Least Squares" ),
		Method( "EMS" ),
		Run
	);
	obj << Prediction Formula( 1 );
	pred formula1 = (dt:Pred Formula miles << get formula( 1 ));
	pred formula1 eval = dt:Pred Formula miles << get values;
	obj << Parameterized Formula( 1 );
	pred param formula1 = (dt:Pred Param Formula miles << get formula( 1 ));
	dt << Delete Columns( n1 + 1 :: N Cols( dt ) );
	depot1 = obj << Publish Prediction Formula( 1 );
	depot1 << Run Script( 1 );
	pred formula2 = (dt:Pred Formula miles << get formula( 1 ));
	pred formula2 eval = dt:Pred Formula miles << get values;
	depot2 = obj << Publish Parameterized Formula( 1 );
	obj << Publish Standard Error Formula( 1 );
	obj << Publish Mean Confid Limit Formula( 1 );
	obj << Publish Indiv Confid Limit Formula( 1 );
	Close( dt, no save );
	Window( "Formula Depot" ) << close window( 1 );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table;
3. Count initial columns.
4. Fit a mixed-effects model.
5. Add prediction formula.
6. Retrieve prediction formula.
7. Evaluate prediction formula.
8. Add parameterized formula.
9. Retrieve parameterized formula.
10. Delete added columns.
11. Publish prediction formula.
12. Run published script.
13. Retrieve updated prediction formula.
14. Publish parameterized formula.
15. Publish standard error formula.
16. Publish mean confidence limit formula.
17. Publish individual confidence limit formula.
18. Close dataset without saving.
19. Close Formula Depot window.



### Example 5
> **Summary**: Fits two Partial Least Squares (PLS) models to predict ABRASION using different effects and captures logs for each model.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #LogCapture, #DataTableManagement, #ModelFitting -->

**Code**:
```jsl
If( Contains( Build Information(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	log1 = Log Capture(
		obj1 = Fit Model(
			Y( :ABRASION ),
			Effects( Log( :SILICA ), Sqrt( :SILANE ), Exp( :SULFUR ), Exp( :SULFUR ) * Log( :SILICA ), Exp( :SULFUR ) * Sqrt( :SILANE ) ),
			Personality( "Partial Least Squares" ),
			Run
		)
	);
	log2 = Log Capture(
		obj2 = Fit Model(
			Y( :ABRASION ),
			Effects( Log( :SILICA ), Sqrt( :SILANE ), Exp( :SULFUR ), :SULFUR * :SILICA, :SULFUR * :SILANE ),
			Personality( "Partial Least Squares" ),
			Run
		)
	);
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for Pro version.
2. Open data table.
3. Capture log for first model.
4. Fit first model using PLS.
5. Specify ABRASION as response.
6. Define transformed effects.
7. Run first model.
8. Capture log for second model.
9. Fit second model using PLS.
10. Specify ABRASION as response.
11. Define different effects.
12. Run second model.
13. Close data table without saving.



### Example 6
> **Summary**: Fits and creates reports for two random effects models with response screening in JMP Pro, extracting parameter estimates, variance components, and BLUPs.

<!-- Keywords: #JMPPro, #RandomEffectsModeling, #ResponseScreening, #ParameterEstimation, #VarianceComponents -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj1 = dt << Fit Model(
		Random Effects( Grouped( Column Group( "Markers" ) ) ),
		Personality( "Response Screening" ),
		Y( :Trait1 ),
		Run
	);
	obj2 = dt << Fit Model(
		Random Effects( Grouped( Column Group( "Markers" ) ) ),
		Personality( "Response Screening" ),
		Y( :Trait1 ),
		Run
	);
	rpt1 = obj1 << report;
	rpt2 = obj2 << report;
	parmest1 = rpt1["Parameter Estimates"][Table Box( 1 )] << get as matrix;
	parmest2 = rpt2["Parameter Estimates"][Table Box( 1 )] << get as matrix;
	vc1 = rpt1["Variance Components"][Table Box( 1 )] << get as matrix;
	vc2 = rpt2["Variance Components"][Table Box( 1 )] << get as matrix;
	blups1 = rpt1["BLUPs - Random Effect Predictions"][Table Box( 1 )] << get as matrix;
	blups2 = rpt2["BLUPs - Random Effect Predictions"][Table Box( 1 )] << get as matrix;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro version.
2. Open data_table data
3. Fit first model with response screening.
4. Fit second model with response screening.
5. Retrieve first model's report.
6. Retrieve second model's report.
7. Extract parameter estimates from first report.
8. Extract parameter estimates from second report.
9. Extract variance components from first report.
10. Extract variance components from second report.



### Example 7
> **Summary**: Creates a Fit Model dialog in JMP, capturing button names and titles, and logging output for analysis.

<!-- Keywords: #JMPScriptingLanguage, #FitModelDialog, #ButtonNames, #Titles, #LogCapture -->

**Code**:
```jsl
If( JMP Product Name() == "Pro",
	IsPro = 1,
	IsPro = 0
);
dt = Open("data_table.jmp");
dlg = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Response Screening" ), 
);
dlgrpt = dlg << report;
Try(
	check0 = dlgrpt[Button Box( 1 )] << get button name;
	check1 = dlgrpt[Button Box( 2 )] << get button name;
	check2 = dlgrpt[Button Box( 3 )] << get button name;
	check3 = dlgrpt[Button Box( 4 )] << get button name;
	check4 = dlgrpt[Button Box( 5 )] << get button name;
	check5 = dlgrpt[Button Box( 6 )] << get button name;
	check6 = dlgrpt[TabListBox( 1 )][Tab Page Box( 1 )] << get title;
	check7 = dlgrpt[TabListBox( 1 )][Tab Page Box( 2 )] << get title;
	check8 = dlgrpt[TabListBox( 1 )][Tab Page Box( 2 )][Button Box( 4 )] << get button name;
	check9 = dlgrpt[TabListBox( 1 )][Tab Page Box( 2 )][Text Box( 2 )] << get text;
);
log1 = Log Capture(
	obj = dt << Fit Model(
		Y( :miles ),
		Effects( :species, :season, :species * :season ),
		Random Effects( :subject[:species] ),
		Personality( "Response Screening" ),
		Run
	)
);
If( IsPro,
	rpt = obj << report;
	title1 = rpt[Outline Box( 1 )] << get title;
	title2 = rpt[Outline Box( 2 )] << get title;
	title3 = rpt[Outline Box( 3 )] << get title;
	title4 = rpt[Outline Box( 4 )] << get title;
	title5 = rpt[Outline Box( 5 )] << get title;
	title6 = rpt[Outline Box( 6 )] << get title;
	title7 = rpt[Outline Box( 7 )] << get title;
, 
);
```

**Code Explanation**:

1. Check if JMP version is Pro.
2. Set `IsPro` variable.
3. Open data table;
4. Create Fit Model dialog.
5. Define response variable and effects.
6. Specify random effects.
7. Set personality to Response Screening.
8. Retrieve report from dialog.
9. Attempt to capture button names and titles.
10. Log captured output for analysis.



### Example 8
> **Summary**: Generalized regression analysis in JMP Pro, fitting a model to predict 'weight' based on 'age', 'sex', and 'height' effects.

<!-- Keywords: #JMPPro, #GeneralizedRegression, #ModelFit, #PredictionExpression, #DataAnalysis -->

**Code**:
```jsl
If( Contains( Build Information(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	obj = dt << Fit Model(
		Y( :weight ),
		Effects( :age, :sex, :height ),
		Personality( "Generalized Regression" ),
		Run( Fit( Estimation Method( Maximum Likelihood ), Validation Method( None ) ) )
	);
	rpt = obj << report;
	obj << (fit[1] << Show Prediction Expression( 1 ));
	a = Try( , 0 );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table;
3. Initiate Fit Model platform.
4. Set response variable to "weight".
5. Include effects: "age", "sex", "height".
6. Use Generalized Regression personality.
7. Run model with Maximum Likelihood estimation.
8. Generate model report.
9. Display prediction expression.
10. Attempt to close dataset without saving.



### Example 9
> **Summary**: Fits a Generalized Regression model in JMP Pro, capturing window titles and item enabled states along the way.

<!-- Keywords: #JMPPro, #GeneralizedRegression, #WindowManagement, #ComboBox, #Scripting -->

**Code**:
```jsl
If( Contains( Build Information(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	befaa = Associative Array( Window() << get window title );
	obj = dt << Fit Model( Y( :Y Binary ), Target Level( "Low" ), Personality( "Generalized Regression" ), );
	aftaa = Associative Array( Window() << getwindowtitle );
	aftaa << Remove( befaa );
	title = ((aftaa << getkeys)[1]);
	modwin = Window( title );
	items = modwin[Combo Box( 2 )] << getitems;
	aEnabled = J( N Items( items ), 1, . );
	For( i = 1, i <= N Items( items ), i++,
		aEnabled[i] = modwin[Combo Box( 2 )] << itemenabled( i )
	);
	bEnabled = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	Close( dt, nosave );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Capture initial window titles.
4. Fit Generalized Regression model.
5. Capture new window titles.
6. Remove initial window titles.
7. Get model window title.
8. Access model window.
9. Retrieve combo box items.
10. Compare item enabled states.



### Example 10
> **Summary**: Generalized regression analysis in JMP Pro, capturing window titles and closing windows as necessary.

<!-- Keywords: #JMPPro, #GeneralizedRegression, #WindowManagement, #AssociativeArrays, #LogCapture -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	dt:sex[1 :: 40] = "M";
	befAA = Associative Array( Window() << get window title );
	log1 = Log Capture(
		Fit Model( Y( :sex ), Target Level( "F" ), Effects( :age, :height, :weight ), Personality( "Generalized Regression" ), Run )
	);
	aftAA = Associative Array( Window() << get window title );
	aftAA << Remove( befAA );
	aftlst = aftAA << get keys;
	If( N Items( aftlst ) == 1,
		tmp = Window( aftlst[1] );
		tmp << close window( 1 );
	);
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro.
2. Open data table.
3. Set first 40 sex entries to "M".
4. Capture initial window titles.
5. Fit generalized regression model.
6. Capture new window titles.
7. Remove initial titles from new titles.
8. Get remaining window keys.
9. If one key, close corresponding window.
10. Close data table without saving.



### Example 11
> **Summary**: Generalized regression analysis in JMP Pro, fitting a model to the Damping response variable and selecting the best predictors using Forward Selection and AICc.

<!-- Keywords: #JMPPro, #GeneralizedRegression, #ForwardSelection, #AICc, #Scripting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	obj1 = dt << Fit Model(
		Y( :Damping ),
		Effects( :CuSO4 & RS & Mixture, :Na2S2O3 & RS & Mixture, :CuSO4 * :Na2S2O3, :Glyoxal ),
		Center Polynomials( 0 ),
		No Intercept( 0 ),
		Personality( "Generalized Regression" ),
		Run( Fit( Estimation Method( Forward Selection ), Validation Method( AICc ) ) )
	);
	obj1 << Save Script to Report( 1 );
	rpt = obj1 << report;
	script1 = rpt[Text Box( 1 )] << get text;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table.
3. Start Fit Model.
4. Set response variable.
5. Define effects.
6. Disable center polynomials.
7. Enable intercept.
8. Choose Generalized Regression.
9. Run model with Forward Selection and AICc.
10. Save script to report.
11. Extract report.
12. Retrieve script text.
13. Close data table without saving.



### Example 12
> **Summary**: Fits a Generalized Linear Mixed Model in JMP Pro, enabling covariance analysis and generating a report with residual standard error and covariance of covariance parameters.

<!-- Keywords: #JMPPro, #GeneralizedLinearMixedModel, #CovarianceAnalysis, #ReportGeneration, #MixedEffectsModeling -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = dt << Fit Model(
		Y( :Y ),
		Effects( :Treatment, :Month, :Month * :Treatment ),
		NoBounds( 1 ),
		Personality( "Generalized Linear Mixed Model" ),
		Run
	);
	obj << (Fit[1] << Covariance of Covariance Parameters( 1 ));
	obj << (Fit[1] << Covariance of All Parameters( 1 ));
	rpt = obj << report;
	resid stderr = (rpt["Fixed Effects Parameter Estimates"][Table Box( 2 )] << get as matrix)[2];
	cov covparms = rpt["Covariance of Covariance Parameters"][Matrix Box( 1 )] << get;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table;
3. Fit Generalized Linear Mixed Model.
4. Enable covariance of covariance parameters.
5. Enable covariance of all parameters.
6. Generate model report.
7. Extract residual standard error.
8. Extract covariance of covariance parameters.
9. Close dataset without saving.



### Example 13
> **Summary**: Fits a mixed model with conditional profiler in JMP Pro, extracting prediction text and updating profiler settings.

<!-- Keywords: #JMPPro, #MixedModel, #ConditionalProfiler, #PredictiveAnalytics, #DataScience -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = Fit Model(
		Y( :Defect ),
		Effects( :Finishing Treatment ),
		Random Effects( :Lot, :Lot * :Finishing Treatment ),
		NoBounds( 1 ),
		Personality( "Mixed Model" ),
		Run(
			Conditional Profiler(
				1,
				Confidence Intervals( 1 ),
				Term Value( "Conditional", Finishing Treatment( 5, Lock( 0 ), Show( 1 ) ), Lot( 1, Lock( 0 ), Show( 1 ) ), )
			)
		)
	);
	rpt = obj << report;
	pred1 = rpt["Conditional Model Profiler"][Text Box( 2 )] << get text;
	obj << Conditional Profiler(
		1,
		Confidence Intervals( 0 ),
		Term Value( "Conditional", Finishing Treatment( 5, Lock( 0 ), Show( 1 ) ), Lot( 1, Lock( 0 ), Show( 1 ) ), )
	);
	pred2 = rpt["Conditional Model Profiler"][Text Box( 2 )] << get text;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table.
3. Fit mixed model.
4. Set effects and random effects.
5. Disable bounds.
6. Run model with profiler.
7. Get profiler report.
8. Extract prediction text.
9. Update profiler settings.
10. Extract updated prediction text.
11. Close data table without saving.



### Example 14
> **Summary**: Fits a model to data and generating prediction formulas, confidence intervals, and prediction intervals.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #PredictionFormulas, #ConfidenceIntervals, #PredictionIntervals -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro", ) > 0,
	dt = Open("data_table.jmp");
	obj = dt << Fit Model(
		Validation( :Validation ),
		Y( :Y ),
		Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run( Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ), Arrange in Rows( 4 ), Set to Data in Row( 2 ) ) )
	);
	obj << Save Columns( Prediction Formula, Mean Confidence Limit Formula, Indiv Confidence Limit Formula );
	rpt = obj << report;
	pred1 = rpt["Prediction Profiler"][Text Box( 2 )] << get text;
	ci1 = (rpt["Prediction Profiler"][Text Box( 3 )] << get text) || (rpt["Prediction Profiler"][Text Box( 4 )] << get text);
	pi1 = rpt["Prediction Profiler"][Text Box( 5 )] << get text;
	b test1 = (dt << get as matrix)[2, 13 :: 17];
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP version.
2. Open data table;
3. Initiate Fit Model platform.
4. Set validation method.
5. Define response variable.
6. Specify model effects.
7. Choose Standard Least Squares personality.
8. Request minimal report.
9. Run Profiler with intervals.
10. Save prediction formulas.
11. Extract profiler report.
12. Retrieve prediction text.
13. Concatenate confidence interval texts.
14. Fetch prediction interval text.
15. Get beta test values.
16. Close dataset without saving.



### Example 15
> **Summary**: Fits a model to a data table, generating a minimal report, and extracting specific test results.

<!-- Keywords: #JMPScriptingLanguage, #DataModeling, #RegressionAnalysis, #ConfidenceIntervals, #PredictionIntervals -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro", ) > 0,
	dt = Open("data_table.jmp");
	obj = dt << Fit Model(
		Validation( :Validation ),
		Y( Transform Column( "Log[Y]", Formula( Log( :Y ) ) ) ),
		Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run( Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ), Arrange in Rows( 4 ), Set to Data in Row( 2 ) ) )
	);
	obj << Save Columns( Prediction Formula, Mean Confidence Limit Formula, Indiv Confidence Limit Formula );
	rpt = obj << report;
	pred1 = rpt["Prediction Profiler"][Text Box( 2 )] << get text;
	ci1 = (rpt["Prediction Profiler"][Text Box( 3 )] << get text) || (rpt["Prediction Profiler"][Text Box( 4 )] << get text);
	pi1 = rpt["Prediction Profiler"][Text Box( 5 )] << get text;
	b test1 = (dt << get as matrix)[2, 13 :: 17];
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for "Pro" in product name.
2. Open data table;
3. Fit model with specified parameters.
4. Use Standard Least Squares personality.
5. Generate minimal report.
6. Run profiler with confidence and prediction intervals.
7. Save prediction, mean confidence, and individual confidence limit formulas.
8. Extract report from fitted model.
9. Retrieve prediction, confidence interval, and prediction interval texts.
10. Extract specific test results from dataset.
11. Close dataset without saving.



### Example 16
> **Summary**: Fits a model to a data table, generating a minimal report with prediction formulas and confidence limits, and extracting text from the profiler report.

<!-- Keywords: #JMPScriptingLanguage, #DataAnalysis, #ModelFitting, #PredictionIntervals, #ConfidenceLimits -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro", ) > 0,
	dt = Open("data_table.jmp");
	obj = dt << Fit Model(
		Validation( :Validation ),
		Y( :Y ),
		Freq( :Gender ),
		Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run( Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ), Arrange in Rows( 4 ), Set to Data in Row( 2 ) ) )
	);
	obj << Save Columns( Prediction Formula, Mean Confidence Limit Formula, Indiv Confidence Limit Formula );
	rpt = obj << report;
	pred1 = rpt["Prediction Profiler"][Text Box( 2 )] << get text;
	ci1 = (rpt["Prediction Profiler"][Text Box( 3 )] << get text) || (rpt["Prediction Profiler"][Text Box( 4 )] << get text);
	pi1 = rpt["Prediction Profiler"][Text Box( 5 )] << get text;
	b test1 = (dt << get as matrix)[2, 13 :: 17];
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for "Pro" in product name.
2. Open data table;
3. Fit model using standard least squares.
4. Set validation column.
5. Specify response variable Y.
6. Use Gender as frequency.
7. Include multiple effects in model.
8. Generate minimal report.
9. Run profiler with confidence and prediction intervals.
10. Save prediction formulas and confidence limits.
11. Extract text from profiler report.
12. Retrieve beta test results.
13. Close dataset without saving.



### Example 17
> **Summary**: Fits a standard least squares model, generating a regression plot, and extracting marker segments from a data table in JMP Pro.

<!-- Keywords: #JMPPro, #RegressionAnalysis, #DataVisualization, #ModelFitting, #MarkerSegmentation -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	dt:Validation[1 :: 10] = 3;
	obj = Fit Model(
		Validation( :Validation ),
		Y( :Y ),
		Effects( :BMI ),
		Personality( "Standard Least Squares" ),
		Emphasis( "Effect Leverage" ),
		Run
	);
	rpt = obj << report;
	markers1 = (rpt[Outline Box( "Regression Plot" )][FrameBox( 1 )] << Find Seg( MarkerSeg )) << get markers;
	dt << Recode Column( :Validation, {If( _rcNow <= 1, "Dot", _rcNow <= 2, "v", "t" )}, Target Column( "Test Marker" ) );
	b markers1 = dt:Test Marker << get values;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Set validation column.
4. Fit standard least squares model.
5. Generate regression plot.
6. Extract marker segments.
7. Recode validation column.
8. Get test marker values.
9. Close dataset without saving.



### Example 18
> **Summary**: Fits a standard least squares model to a data table, extracting the R-Square value, and generating a minimal report.

<!-- Keywords: #JSLScripting, #StandardLeastSquares, #DataAnalysis, #ModelFitting, #MinimalReporting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	Random Reset( 123 );
	dt << New Column( "Freq1", formula( Random Integer( 1, 3 ) ) );
	obj = Fit Model(
		Freq( :Freq1 ),
		Validation( :Validation ),
		Y( :Y ),
		Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run( Effect Summary( 0 ) )
	);
	rpt = obj << report;
	rsquare = rpt["Crossvalidation"][Number Col Box( "RSquare" )] << get as matrix;
	Close( dt, no save );
);
b log1 =
"Note: The data table has changed. The output no longer represents the data. To synchronize the output with the data, select 'Sync to Data Table Changes' from the platform menu.";
```

**Code Explanation**:

1. Check for JMP Pro version.
2. Open data table;
3. Set random seed.
4. Add new column "Freq1".
5. Fit standard least squares model.
6. Specify validation method.
7. Set response variable.
8. Include multiple effects.
9. Generate minimal report.
10. Extract R-Square value.



### Example 19
> **Summary**: Fits four linear and mixed models to a data table, utilizing different weight and frequency options, and closes the dataset without saving.

<!-- Keywords: #JMPScriptingLanguage, #LinearModeling, #MixedModeling, #DataTableOperations, #ModelFitting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	dt:age[1 :: 3] = .;
	obj1 = dt << Fit Model( Y( :weight ), Effects( :sex ), Weight( :age ), Personality( "Standard Least Squares" ), Run );
	obj2 = dt << Fit Model( Y( :weight ), Effects( :sex ), Weight( :age ), Personality( "Generalized Linear Mixed Model" ), Run );
	obj3 = dt << Fit Model( Y( :weight ), Effects( :sex ), Freq( :age ), Personality( "Standard Least Squares" ), Run );
	obj4 = dt << Fit Model( Y( :weight ), Effects( :sex ), Freq( :age ), Personality( "Generalized Linear Mixed Model" ), Run );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table;
3. Set first three ages to missing.
4. Fit linear model with age as weight.
5. Fit mixed model with age as weight.
6. Fit linear model with age as frequency.
7. Fit mixed model with age as frequency.
8. Close the dataset without saving.



### Example 20
> **Summary**: Fits a mixed model in JMP Pro, generating random effects predictions, and closing windows without saving data.

<!-- Keywords: #JMPPro, #MixedModel, #RandomEffects, #WindowManagement, #Scripting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	befAA = Associative Array( Window() << get window title );
	obj = dt << Fit Model(
		Y( :NPN1, :PNP1, :PNP2 ),
		Effects( :NPN2 ),
		Random Effects( :lot_id, :wafer[:lot_id] ),
		Personality( "Mixed Model" ),
		Run( Results in Data Tables, )
	);
	aftAA = Associative Array( Window() << get window title );
	aftAA << Remove( befAA );
	aftlst = aftAA << get keys;
	obj << Random Effects Predictions( 1 );
	For( i = 1, i <= N Items( aftlst ), i++,
		Window( aftlst[i] ) << close window
	);
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro.
2. Open data table.
3. Store initial window titles.
4. Fit mixed model.
5. Store updated window titles.
6. Remove unchanged window titles.
7. Get new window titles.
8. Generate random effects predictions.
9. Close new windows.
10. Close data table without saving.



### Example 21
> **Summary**: Generates a mixed model analysis for yield prediction, utilizing JMP Pro's Fit Model platform to account for random effects and centering.

<!-- Keywords: #JMPPro, #MixedModel, #FitModel, #RandomEffects, #CenterPolynomials -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = dt << Fit Model(
		Y( :Yield ),
		Effects( :Moisture ),
		Random Effects( Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 ) ),
		Center Polynomials( 0 ),
		Personality( "Mixed Model" ),
		Run()
	);
	obj << Save Script to Report( 1 );
	rpt = obj << report;
	script1 = rpt[Outline Box( "Mixed Model for Yield" )][Text Box( 1 )] << get text;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Fit mixed model analysis.
4. Set response variable as Yield.
5. Add Moisture as effect.
6. Define random effects.
7. Disable polynomial centering.
8. Set personality to Mixed Model.
9. Run the model.
10. Save script to report.



### Example 22
> **Summary**: Analyze a mixed model with residual plots, selecting specific rows and excluding one, using JMP Pro's data manipulation and modeling capabilities.

<!-- Keywords: #JMPPro, #MixedModel, #ResidualPlots, #DataManipulation, #Modeling -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	s = dt << Select Rows( [1, 2, 3, 4] );
	s << Exclude( 1 );
	obj = dt << Fit Model(
		Y( :miles ),
		Effects( :species, :subject[:species] & Random, :season, :species * :season ),
		Personality( "Mixed Model" ),
		Run( Residual Plots( 1 ) )
	);
	rpt = obj << report;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Open data table;
3. Select rows 1-4.
4. Exclude row 1.
5. Fit mixed model.
6. Specify response variable miles.
7. Define effects: species, subject, season, interaction.
8. Set personality to Mixed Model.
9. Generate residual plots.
10. Retrieve report object.



### Example 23
> **Summary**: Fits a mixed model to a data table, generating residual plots, and reporting results in JMP Pro.

<!-- Keywords: #JMPScriptingLanguage, #MixedModel, #ResidualPlots, #DataTable, #JMPPro -->

**Code**:
```jsl
b hist1 = [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 0,
0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0,
0, 0, 0, 0, 0, 0];
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	s = dt << Select Rows( [1, 2, 3, 4] );
	s << Exclude( 1 );
	obj = dt << Fit Model(
		Y( :miles ),
		Effects( :species, :subject[:species] & Random, :season, :species * :season ),
		Personality( "Mixed Model" ),
		Run( Residual Plots( 1 ) )
	);
	rpt = obj << report;
	Close( dt, no save );
);
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	s = dt << Select Rows( [1, 2, 3, 4] );
	s << Exclude( 1 );
	s << Hide( 1 );
	obj = dt << Fit Model(
		Y( :miles ),
		Effects( :species, :subject[:species] & Random, :season, :species * :season ),
		Personality( "Mixed Model" ),
		Run( Residual Plots( 1 ) )
	);
	rpt = obj << report;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Define `b hist1` array.
2. Check if JMP is Pro version.
3. Open data table;
4. Select rows 1-4.
5. Exclude row 1.
6. Fit mixed model on selected data.
7. Generate residual plots.
8. Store report in `rpt`.
9. Close file without saving.
10. Repeat steps 2-9, hiding row 1 instead of excluding.



### Example 24
> **Summary**: Fits a mixed-effects model analysis to predict miles traveled, incorporating species and season fixed effects, subject nested random effects, and displaying summary reports and residual plots.

<!-- Keywords: #JMPPro, #MixedModel, #RandomEffects, #ReportView, #ResidualPlots -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = dt << Fit Model(
		Y( :miles ),
		Effects( :species, :season, :species * :season ),
		Random Effects( :subject[:species] ),
		Personality( "Mixed Model" ),
		Run
	);
	obj << Report View( Summary );
	obj << Report View( Full );
	obj << Residual Plots( 1 );
	obj << Report View( Summary );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Initiate Fit Model platform.
4. Set response variable: miles.
5. Define fixed effects: species, season, interaction.
6. Specify random effect: subject nested in species.
7. Use Mixed Model personality.
8. Run the model.
9. Display summary report.
10. Display full report.
11. Generate residual plots.
12. Display summary report again.
13. Close dataset without saving.



### Example 25
> **Summary**: Fits a mixed model to a dataset, using age and height as effects, with variance components analysis.

<!-- Keywords: #JMPScriptingLanguage, #MixedModel, #VarianceComponents, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = Fit Model(
		Y( :weight ),
		Effects( :age, :height ),
		Personality( "Mixed Model" ),
		Run( Linear Combination of Variance Components )
	);
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Open data table;
3. Fit mixed model.
4. Set response variable.
5. Add age effect.
6. Add height effect.
7. Use Mixed Model personality.
8. Run variance components.
9. Close dataset without saving.



### Example 26
> **Summary**: Fits a mixed model to data, specifying miles as the response variable and including species, season, and interaction effects, with random effects for subject[:species].

<!-- Keywords: #JMPScriptingLanguage, #MixedModel, #DataAnalysis, #StatisticalModeling, #Scripting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = dt << Fit Model(
		Y( :miles ),
		Effects( :species, :season, :species * :season ),
		Random Effects( :subject[:species] ),
		NoBounds( 1 ),
		No Intercept( 1 ),
		Personality( "Mixed Model" ),
		Run( Indicator Parameterization Estimates( 1 ), Repeated Effects Covariance Parameter Estimates( 0 ) )
	);
	rpt = obj << report;
	test1 = Try( rpt[Outline Box( "Indicator Function Parameterization" )] << get as matrix, 1 );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Open data table.
3. Fit mixed model to data.
4. Specify miles as response.
5. Add species, season, and interaction effects.
6. Set subject[:species] as random effect.
7. Disable bounds on parameters.
8. Remove intercept from model.
9. Use Mixed Model personality.
10. Run model with specified options.



### Example 27
> **Summary**: Runs the fitting and prediction of mixed models in JMP Pro, generating reports for two separate models with specified effects.

<!-- Keywords: #JMPPro, #MixedModel, #PredictiveAnalytics, #DataScience, #StatisticalAnalysis -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	obj1 = dt << Fit Model(
		Y( :miles ),
		Effects( :species, :season, :species * :season ),
		Random Effects( :subject[:species] ),
		Personality( "Mixed Model" ),
		Run
	);
	obj1 << Prediction Formula;
	prop1 = dt:Pred Formula miles << get property( "Predicting" );
	obj2 = dt << Fit Model( Y( :miles ), Effects( :species, :season, :species * :season ), Personality( "Mixed Model" ), Run );
	rpt2 = obj2 << report;
	obj2 << Prediction Formula;
	prop2 = dt:Pred Formula miles 2 << get property( "Predicting" );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table;
3. Fit mixed model with specified effects.
4. Add prediction formula to model.
5. Retrieve predicting property from first model.
6. Fit another mixed model with same effects.
7. Generate report for second model.
8. Add prediction formula to second model.
9. Retrieve predicting property from second model.
10. Close dataset without saving.



### Example 28
> **Summary**: Fits a mixed model to data, utilizing JMP Pro's capabilities for spatial analysis with nugget and exponential correlation function.

<!-- Keywords: #JMPPro, #MixedModel, #SpatialAnalysis, #ExponentialCorrelation, #DataFitting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ), 
	
	dt = Open("data_table.jmp");
	obj1 = dt << Fit Model(
		Y( :Yield ),
		Effects,
		Center Polynomials( 0 ),
		Personality( "Mixed Model" ),
		Repeated Effects( :Row, :Column ),
		Repeated Structure( "Spatial with Nugget" ),
		Repeated Structure Type( "Exponential" ),
		Run( Random Effects Covariance Parameter Estimates( 0 ), Fitted Variogram( 1 ) )
	);
	rpt1 = Report( obj1 );
	cov = rpt1[Outline Box( "Repeated Effects Covariance Parameter Estimates" )][Table Box( 1 )] << get as matrix;
	sig2 = cov[3, 1];
	rho2 = cov[1, 1];
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table.
3. Fit mixed model to data.
4. Set response variable as Yield.
5. Specify model effects.
6. Disable center polynomials.
7. Choose mixed model personality.
8. Define repeated effects.
9. Select spatial structure with nugget.
10. Use exponential correlation function.



### Example 29
> **Summary**: Fits a mixed model with repeated effects to analyze yield data, utilizing JMP Pro's advanced statistical capabilities.

<!-- Keywords: #JMPPro, #MixedModel, #RepeatedEffects, #SpatialAnalysis, #CovarianceEstimation -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ), 
	
	dt = Open("data_table.jmp");
	obj1 = dt << Fit Model(
		Y( :Yield ),
		Effects,
		Center Polynomials( 0 ),
		Personality( "Mixed Model" ),
		Repeated Effects( :Row, :Column ),
		Repeated Structure( "Spatial with Nugget" ),
		Repeated Structure Type( "Power" ),
		Run( Random Effects Covariance Parameter Estimates( 0 ), Variogram( 1 ) )
	);
	rpt1 = Report( obj1 );
	cov = rpt1[Outline Box( "Repeated Effects Covariance Parameter Estimates" )][Table Box( 1 )] << get as matrix;
	sig2 = cov[3, 1];
	rho2 = cov[1, 1];
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table.
3. Initiate Fit Model platform.
4. Set response variable.
5. Define effects.
6. Use Mixed Model personality.
7. Specify repeated effects.
8. Set spatial with nugget structure.
9. Choose power structure type.
10. Run model with random effects covariance.



### Example 30
> **Summary**: Generates a mixed model analysis with variogram creation for the 'miles' response variable, incorporating species and season effects, and utilizing Mixed Model personality.

<!-- Keywords: #JMPPro, #MixedModel, #Variogram, #AR1, #Gaussian -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj1 = dt << Fit Model(
		Y( :miles ),
		Effects( :species, :season, :species * :season ),
		Random Effects( :subject[:species] ),
		Personality( "Mixed Model" ),
		Run( Actual by Predicted Plot( 0 ), Actual by Conditional Predicted Plot( 0 ) )
	);
	rpt1 = Report( obj1 );
	obj1 << Variogram( X( :miles ), AR1( 1 ) );
	obj1 << Variogram( 0 );
	obj1 << Variogram( 1 );
	obj1 << Variogram( Gaussian( 1 ) );
	obj1 << Variogram( Exponential( 1 ) );
	obj1 << Variogram( 0 );
	obj1 << Variogram( 1 );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro version.
2. Open data table;
3. Fit mixed model analysis.
4. Set response variable to miles.
5. Include species, season, interaction effects.
6. Define subject:species as random effect.
7. Use Mixed Model personality.
8. Disable default plots.
9. Generate report from fit model.
10. Create variogram with AR1 model.
11. Clear previous variogram settings.
12. Create variogram with default settings.
13. Create variogram with Gaussian model.
14. Create variogram with Exponential model.
15. Clear previous variogram settings.
16. Create variogram with default settings.
17. Close dataset without saving.



### Example 31
> **Summary**: Runs the analysis and prediction of brand preferences using a Nominal Logistic model, fitting data to various effects and publishing probability formulas in JMP Pro.

<!-- Keywords: #JMPPro, #NominalLogisticModel, #PredictiveAnalytics, #DataAnalysis, #ProbabilityFormulas -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	n1 = N Items( dt << get column names( string ) );
	obj = dt << Fit Model(
		Freq( :count ),
		Y( :brand ),
		Effects(
			:softness, :previous use, :softness * :previous use, :temperature, :softness * :temperature, :previous use * :temperature,
			:softness * :previous use * :temperature
		),
		Personality( "Nominal Logistic" ),
		Run
	);
	obj << Save Probability Formula( 1 );
	lin1 = dt:Name( "Lin[x]" ) << get values( 1 );
	prob1 = (dt:Name( "Prob[x]" ) << get values( 1 )) || (dt:Name( "Prob[m]" ) << get values( 1 ));
	pred1 = dt:Most Likely brand << get values( 1 );
	dt << Delete Columns( n1 + 1 :: N Cols( dt ) );
	depot1 = obj << Publish Probability Formulas( 1 );
	depot1 << Run Script( 1 );
	lin2 = dt:Name( "Lin[x]" ) << get values( 1 );
	prob2 = (dt:Name( "Prob[x]" ) << get values( 1 )) || (dt:Name( "Prob[m]" ) << get values( 1 ));
	pred2 = dt:Most Likely brand << get values( 1 );
	Close( dt, no save );
	Window( "Formula Depot" ) << close window( 1 );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Count initial columns.
4. Fit Nominal Logistic model.
5. Save probability formula.
6. Retrieve Lin[x] values.
7. Retrieve Prob[x] and Prob[m] values.
8. Retrieve Most Likely brand values.
9. Delete new columns.
10. Publish probability formulas.
11. Run published script.
12. Retrieve updated Lin[x] values.
13. Retrieve updated Prob[x] and Prob[m] values.
14. Retrieve updated Most Likely brand values.
15. Close dataset without saving.
16. Close Formula Depot window.



### Example 32
> **Summary**: Fits and creates reports for two nominal logistic models with decision thresholds, utilizing JMP Pro's data table and modeling capabilities.

<!-- Keywords: #JMPPro, #NominalLogisticModel, #DecisionThresholds, #DataTable, #Modeling -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj1 = dt << Fit Model(
		Y( :Y Binary ),
		Effects( :Age, :Gender, BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Validation( :Validation ),
		Personality( "Nominal Logistic" ),
		Target Level( "High" ),
		Run( Decision Threshold( 1 ) )
	);
	rpt1 = obj1 << report;
	test1 = rpt1["Decision Thresholds"][Table Box( 1 )] << get as matrix;
	obj2 = dt << Fit Model(
		Y( :Y Binary ),
		Effects( :Age, :Gender, BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Validation( :Validation ),
		Personality( "Nominal Logistic" ),
		Run( Decision Threshold( 1 ) )
	);
	rpt2 = obj2 << report;
	test2 = rpt2["Decision Thresholds"][Table Box( 1 )] << get as matrix;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Fit nominal logistic model.
4. Retrieve decision thresholds.
5. Fit another nominal logistic model.
6. Retrieve decision thresholds.
7. Close dataset without saving.



### Example 33
> **Summary**: Performs a Partial Least Squares analysis with Leave-One-Out validation and generates Variable Importance Plots, utilizing the Fit Model platform to create two models with different fitting methods.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #FitModel, #VariableImportancePlot, #Leave-One-OutValidation -->

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
		Validation Method( "Leave-One-Out" ),
		Fit( SVD( Classical ), Method( NIPALS ), Variable Importance Plot( 1 ), Set VIP Threshold( 1.5 ) ),
		Fit( SVD( Classical ), Method( SIMPLS ), Number of Factors( 3 ), Variable Importance Plot( 1 ), Set VIP Threshold( 0.95 ) )
	);
	rpt = obj << report;
	Close( dt2, no save );
	dt2 = Open("data_table.jmp");
	obj = dt2 << Fit Model(
		Y( :ls, :ha, :dt ),
		Effects(
			:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
			:v24, :v25, :v26, :v27
		),
		Personality( "Partial Least Squares" ),
		Run(
			Validation Method( "Leave-One-Out" ),
			Fit( SVD( Classical ), Method( NIPALS ), Variable Importance Plot( 1 ), Set VIP Threshold( 1.5 ) ),
			Fit( SVD( Classical ), Method( SIMPLS ), Number of Factors( 3 ), Variable Importance Plot( 1 ), Set VIP Threshold( 0.95 ) )
		)
	);
	rpt = obj << report;
	befAA = Associative Array( Window() << get window title );
	obj << (Fit[1] << Make Model Using VIP( 1 ));
	aftAA = Associative Array( Window() << get window title );
	aftAA << Remove( befAA );
	aftlst = aftAA << get keys;
	dl1 = Window( aftlst[1] );
	item1 = dl1[ListBoxBox( 7 )] << get items;
	dl1 << Close Window;
	befAA = Associative Array( Window() << get window title );
	obj << (Fit[2] << Make Model Using VIP( 1 ));
	aftAA = Associative Array( Window() << get window title );
	aftAA << Remove( befAA );
	aftlst = aftAA << get keys;
	dl2 = Window( aftlst[1] );
	item2 = dl2[ListBoxBox( 7 )] << get items;
	dl2 << Close Window;
	Close( dt2, no save );
);
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Open data table;
3. Perform Partial Least Squares analysis.
4. Use Leave-One-Out validation method.
5. Apply two fitting methods: NIPALS and SIMPLS.
6. Generate Variable Importance Plots.
7. Set VIP thresholds.
8. Save report.
9. Close dataset without saving.
10. Repeat steps 2-8 using Fit Model platform.
11. Create associative array of window titles before model creation.
12. Generate model using VIP for first fit.
13. Create associative array of window titles after model creation.
14. Remove initial windows from array.
15. Get keys of remaining windows.
16. Access specific window and list box.
17. Retrieve items from list box.
18. Close window.
19. Repeat steps 11-18 for second fit.
20. Close dataset without saving.



### Example 34
> **Summary**: Runs Partial Least Squares analysis with NIPALS and SIMPLS methods, generating reports and creating Variable Importance Plots for JMP Pro

<!-- Keywords: #JMPPro, #PartialLeastSquares, #NIPALS, #SIMPLS, #VariableImportancePlot -->

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
		Validation Method( "Leave-One-Out" ),
		Fit( Method( NIPALS ), Variable Importance Plot( 1 ), Set VIP Threshold( 1.5 ) ),
		Fit( Method( SIMPLS ), Number of Factors( 3 ), Variable Importance Plot( 1 ), Set VIP Threshold( 0.95 ) )
	);
	rpt = obj << report;
	Close( dt2, no save );
	dt2 = Open("data_table.jmp");
	obj = dt2 << Fit Model(
		Y( :ls, :ha, :dt ),
		Effects(
			:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
			:v24, :v25, :v26, :v27
		),
		Personality( "Partial Least Squares" ),
		Run(
			Validation Method( "Leave-One-Out" ),
			Fit( Method( NIPALS ), Variable Importance Plot( 1 ), Set VIP Threshold( 1.5 ) ),
			Fit( Method( SIMPLS ), Number of Factors( 3 ), Variable Importance Plot( 1 ), Set VIP Threshold( 0.95 ) )
		)
	);
	rpt = obj << report;
	befAA = Associative Array( Window() << get window title );
	obj << (Fit[1] << Make Model Using VIP( 1 ));
	aftAA = Associative Array( Window() << get window title );
	aftAA << Remove( befAA );
	aftlst = aftAA << get keys;
	dl1 = Window( aftlst[1] );
	item1 = dl1[ListBoxBox( 7 )] << get items;
	dl1 << Close Window;
	befAA = Associative Array( Window() << get window title );
	obj << (Fit[2] << Make Model Using VIP( 1 ));
	aftAA = Associative Array( Window() << get window title );
	aftAA << Remove( befAA );
	aftlst = aftAA << get keys;
	dl2 = Window( aftlst[1] );
	item2 = dl2[ListBoxBox( 7 )] << get items;
	dl2 << Close Window;
	Close( dt2, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table.
3. Perform Partial Least Squares analysis.
4. Set validation method to "Leave-One-Out".
5. Fit model using NIPALS method.
6. Create Variable Importance Plot for NIPALS.
7. Set VIP threshold to 1.5.
8. Fit model using SIMPLS method.
9. Create Variable Importance Plot for SIMPLS.
10. Set number of factors to 3 for SIMPLS.
11. Generate report from analysis.
12. Close data table without saving.
13. Reopen data table.
14. Perform Fit Model with Partial Least Squares personality.
15. Set validation method to "Leave-One-Out".
16. Fit model using NIPALS method.
17. Create Variable Importance Plot for NIPALS.
18. Set VIP threshold to 1.5.
19. Fit model using SIMPLS method.
20. Create Variable Importance Plot for SIMPLS.
21. Set number of factors to 3 for SIMPLS.
22. Generate report from analysis.
23. Store initial window titles in associative array.
24. Create model using VIP for NIPALS fit.
25. Store new window titles in associative array.
26. Remove initial windows from associative array.
27. Retrieve new window keys.
28. Access first new window.
29. Get items from ListBoxBox(7).
30. Close first new window.
31. Store initial window titles in associative array.
32. Create model using VIP for SIMPLS fit.
33. Store new window titles in associative array.
34. Remove initial windows from associative array.
35. Retrieve new window keys.
36. Access second new window.
37. Get items from ListBoxBox(7).
38. Close second new window.
39. Close data table without saving.



### Example 35
> **Summary**: Fits a Partial Least Squares model to predict weight based on height, sex, and age in a JMP Pro data table.

<!-- Keywords: #JMPPro, #PartialLeastSquares, #DataFitting, #Modeling, #Scripting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	log1 = Log Capture(
		obj = dt << Fit Model(
			Y( :weight ),
			Effects( :height, :sex, :age ),
			Standardize X( 0 ),
			No Intercept,
			Personality( "Partial Least Squares" ),
			Run( Fit() )
		)
	);
	obj << Close Window( 1 );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Open data table;
3. Start logging output.
4. Fit model using PLS.
5. Set response variable.
6. Include effects: height, sex, age.
7. Do not standardize X.
8. Exclude intercept.
9. Use Partial Least Squares.
10. Run the fit.
11. Close model window.
12. Close dataset without saving.



### Example 36
> **Summary**: Fits a Partial Least Squares model to predict weight based on height and sex, with no intercept and standardization.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #DataTable, #ModelFitting, #ScriptAutomation -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = dt << Fit Model(
		Y( :weight ),
		Effects( :height, :sex ),
		No Intercept,
		Standardize X( 0 ),
		Personality( "Partial Least Squares" ),
		Run()
	);
	obj << Save Script to Report;
	rpt = obj << report;
	script1 = rpt[Outline Box( "Partial Least Squares" )][Text Box( 1 )] << get text;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Open data table.
3. Fit model with weight as Y.
4. Include height and sex as effects.
5. Exclude intercept from model.
6. Do not standardize predictors.
7. Use Partial Least Squares personality.
8. Run the model.
9. Save script to report.
10. Extract text from Partial Least Squares outline box.
11. Close data table without saving.



### Example 37
> **Summary**: Fits a Partial Least Squares (PLS) model to a data table, generating reports and extracting text from them.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #DataAnalysis, #ReportGeneration, #TextExtraction -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
If( Contains( JMP Product Name(), "Pro" ),
	obj1 = Fit Model(
		Y( :ls ),
		Effects( :v1, :v2, :v3, :v4, :v5 ),
		No Intercept,
		Personality( "Partial Least Squares" ),
		Standardize X( 0 ),
		Run( Validation Method( None, Initial Number of Factors( 5 ) ), Fit( Method( NIPALS ) ), Fit( Method( SIMPLS ) ) )
	);
	rpt1 = obj1 << report;
	obj1 << Save Script to Report;
	txt1 = rpt1[Text Box( 1 )] << get text;
);
obj2 = Partial Least Squares(
	Y( :ls ),
	X( :v1, :v2, :v3, :v4, :v5 ),
	Validation Method( None, Initial Number of Factors( 5 ) ),
	Fit( Method( NIPALS ) ),
	Fit( Method( SIMPLS ) )
);
rpt2 = obj2 << report;
obj2 << Save Script to Report;
txt2 = rpt2[Text Box( 1 )] << get text;
```

**Code Explanation**:

1. Open data table;
2. Check for JMP Pro version.
3. Fit model using PLS.
4. Store model report.
5. Save script to report.
6. Extract text from report.
7. Perform PLS analysis.
8. Store analysis report.
9. Save script to report.
10. Extract text from report.



### Example 38
> **Summary**: Fits a Partial Least Squares model to predict height based on sex, utilizing holdback validation and NIPALS fitting method.

<!-- Keywords: #JMPPro, #PartialLeastSquares, #DataImputation, #ValidationMethod, #NIPALSFitting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	pls = dt << Fit Model(
		Y( :height ),
		Effects( :sex ),
		Personality( "Partial Least Squares" ),
		Impute Missing Data( 1 ),
		Run( Validation Method( Holdback( 0.4 ) ), Initial Number of Factors( 2 ), Fit( Method( NIPALS ) ) )
	);
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro version.
2. Open data table.
3. Fit Partial Least Squares model.
4. Set response variable to height.
5. Include sex as effect.
6. Use Partial Least Squares personality.
7. Enable missing data imputation.
8. Run model with holdback validation.
9. Set initial number of factors to 2.
10. Use NIPALS fitting method.



### Example 39
> **Summary**: Fits a Partial Least Squares model to a data table, specifying response variable ls and effects v1-v6, while setting values for column v1.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #DataTableManipulation, #ModelFitting, #Analytics -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt2 = Open("data_table.jmp");
	dt2:v1 << Set Values( J( N Rows( dt2 ), 1, 10 ) );
	obj1 = Fit Model(
		Y( :ls ),
		Effects( :v1, :v2, :v3, :v4, :v5, :v6 ),
		Center Polynomials( 0 ),
		Standardize X( 1 ),
		No Intercept,
		Personality( "Partial Least Squares" ),
		Run()
	);
	rpt1 = Report( obj1 );
	nfac = rpt1[Outline Box( "Model Launch" )][Number Edit Box( 2 )] << get;
	Close( dt2, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table;
3. Set values for column v1.
4. Fit a Partial Least Squares model.
5. Specify response variable ls.
6. Include specified effects in the model.
7. Do not center polynomials.
8. Standardize the predictors.
9. Exclude intercept from the model.
10. Retrieve the number of factors used.



### Example 40
> **Summary**: Fits a Partial Least Squares model to data, extracting the R-squared value and generating a model comparison summary.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #ModelComparisonSummary, #DataAnalysis, #Regression -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt2 = Open("data_table.jmp");
	obj = dt2 << Fit Model(
		Freq( :ha ),
		Y( :ls, :dt ),
		Effects( :v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10 ),
		Center Polynomials( 0 ),
		No Intercept,
		Personality( "Partial Least Squares" ),
		Run( Fit )
	);
	rpt = obj << report;
	n1 = (rpt[Outline Box( "Model Comparison Summary" )][Table Box( 1 )] << get as matrix)[1, 1];
	Close( dt2, no save );
);
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Open data table;
3. Fit Partial Least Squares model.
4. Set frequency to :ha.
5. Set response variables :ls, :dt.
6. Include effects :v1 to :v10.
7. Disable polynomial centering.
8. Exclude intercept term.
9. Retrieve model comparison summary.
10. Extract R-squared value.



### Example 41
> **Summary**: Fits a Partial Least Squares (PLS) model to a data table, utilizing selected columns as effects and validating the results.

<!-- Keywords: #JMPPro, #PartialLeastSquares, #DataTable, #ModelFitting, #Validation -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt2 = Open("data_table.jmp");
	(dt2:v1)[7] = .;
	dt2 << New Column( "Validation", values( [1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1] ) );
	dt2 << Select Column Group( "Intensities" );
	s = dt2 << Get Column Group( "Intensities" );
	obj1 = dt2 << Fit Model(
		Y( :ls, :ha, :dt ),
		Effects( Eval( s ) ),
		Validation( :Validation ),
		Impute Missing Data( 1 ),
		Personality( "Partial Least Squares " ),
		Run( Set Random Seed( 134 ), Validation Method( KFold( 7 ) ), Fit )
	);
	Close( dt2, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro.
2. Open data table;
3. Set v1[7] to missing.
4. Add "Validation" column.
5. Select "Intensities" columns.
6. Get selected columns.
7. Fit model with PLS personality.
8. Use selected columns as effects.
9. Apply validation method.
10. Close dataset without saving.



### Example 42
> **Summary**: Fits a Partial Least Squares model to a data table, selecting specific columns and generating a report.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #DataModeling, #PredictiveAnalytics, #JMPPro -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt1 = Open("data_table.jmp");
	obj1 = dt1 << Fit Model(
		Y( :ls, :ha, :dt ),
		Effects(
			:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
			:v24, :v25, :v26, :v27
		),
		No Intercept( 1 ),
		Center Polynomials( 0 ),
		Personality( "Partial Least Squares" ),
		Run( Initial Number of Factors( 15 ), Validation Method( KFold( 7 ), Initial Number of Factors( 15 ) ) )
	);
	rpt1 = obj1 << report;
	s = dt1:v1 << Set Selected;
	dt1 << Delete Columns();
	Close( dt1, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table.
3. Fit Partial Least Squares model.
4. Set response variables: ls, ha, dt.
5. Include all specified effects.
6. Disable intercept.
7. Do not center polynomials.
8. Run model with 15 factors, K-Fold validation.
9. Generate model report.
10. Select column v1.
11. Delete all columns.
12. Close data table without saving.



### Example 43
> **Summary**: Fits a Partial Least Squares model to multiple response variables, utilizing K-Fold validation and publishing score formulas in JMP Pro.

<!-- Keywords: #JMPPro, #PartialLeastSquares, #KFoldValidation, #ScoreFormulas, #ModelFitting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt1 = Open("data_table.jmp");
	obj1 = dt1 << Fit Model(
		Y( :ls, :ha, :dt ),
		Effects(
			:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16, :v17, :v18, :v19, :v20, :v21, :v22, :v23,
			:v24, :v25, :v26, :v27
		),
		No Intercept( 1 ),
		Center Polynomials( 0 ),
		Personality( "Partial Least Squares" ),
		Run( Initial Number of Factors( 15 ), Validation Method( KFold( 7 ), Initial Number of Factors( 15 ) ), Fit )
	);
	rpt1 = obj1 << report;
	s = Column( dt1, 12 ) << Set Selected;
	dt1 << Delete Columns();
	Log Capture(
		obj1 << (Fit[1] << Save Score Formula( 1 ));
		fd = obj1 << (Fit[1] << Publish Score Formula( 1 ));
	);
	Window( "Formula Depot" ) << close window( 1 );
	Close( dt1, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table.
3. Fit Partial Least Squares model.
4. Include multiple response variables.
5. Specify effects for the model.
6. Exclude intercept from the model.
7. Disable centering polynomials.
8. Set initial number of factors to 15.
9. Use K-Fold validation method.
10. Save and publish score formula.



### Example 44
> **Summary**: Fits a Partial Least Squares model to a data table, validating specific columns, and capturing log output in JMP Pro.

<!-- Keywords: #JMPPro, #PartialLeastSquares, #DataValidation, #ModelFitting, #LogCapture -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	dt:Validation[3 :: 7] = 4;
	dt:Validation[13 :: 16] = 5;
	obj = Fit Model(
		Y( :Y ),
		Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol ),
		Validation( :Validation ),
		Personality( "Partial Least Squares" ),
		Run
	);
	log1 = Log Capture( obj << Fit );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Set validation columns.
4. Define model effects.
5. Specify validation method.
6. Use Partial Least Squares personality.
7. Run the model fit.
8. Capture log output.
9. Close dataset without saving.



### Example 45
> **Summary**: Runs Partial Least Squares analysis and model fitting for a data table, generating two reports with titles extracted from outline boxes.

<!-- Keywords: #JMPPro, #PartialLeastSquares, #DataAnalysis, #ReportGeneration, #Scripting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt1 = Open("data_table.jmp");
	dt1 << New Column( "16Fold", numeric, formula( Row() ) );
	obj1 = dt1 << Partial Least Squares(
		Y( :ls, :ha, :dt ),
		X( Column Group( "Intensities" ) ),
		Validation( :"16fold"n ),
		Method( SIMPLS ),
		Initial Number of Factors( 15 ),
		Go
	);
	obj2 = dt1 << Fit Model(
		Y( :ls, :ha, :dt ),
		Effects( Column Group( "Intensities" ) ),
		Validation( :"16fold"n ),
		Personality( "Partial Least Squares" ),
		Run( Method( SIMPLS ), Initial Number of Factors( 15 ), Fit )
	);
	rpt1 = obj1 << report;
	rpt2 = obj2 << report;
	title1 = rpt1[Outline Box( 4 )] << get title;
	title2 = rpt2[Outline Box( 4 )] << get title;
	Close( dt1, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table.
3. Add "16Fold" column.
4. Perform Partial Least Squares analysis.
5. Fit model using Partial Least Squares.
6. Retrieve report from first analysis.
7. Retrieve report from second analysis.
8. Get title from first report outline box.
9. Get title from second report outline box.
10. Close data table without saving.



### Example 46
> **Summary**: Fits a Partial Least Squares model to a data table, setting specific values for v1 and retrieving maximum factors.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #DataTableManipulation, #ModelFitting, #Automation -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt2 = Open("data_table.jmp");
	dt2:v1 << Set Values( J( N Rows( dt2 ), 1, 10 ) );
	obj1 = Fit Model(
		Y( :ls ),
		Effects( :v1, :v2, :v3, :v4, :v5, :v6 ),
		Center Polynomials( 0 ),
		Standardize X( 1 ),
		No Intercept,
		Personality( "Partial Least Squares" ),
		Run
	);
	rpt1 = obj1 << report;
	maxfact = rpt1["Model Launch"][Number Edit Box( 2 )] << get;
	Close( dt2, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Set v1 values to 10.
4. Fit Partial Least Squares model.
5. Assign model report to rpt1.
6. Get max factors value.
7. Close dataset without saving.



### Example 47
> **Summary**: Fits a Partial Least Squares model to a data table, selecting specific rows, and saving T Square values and prediction formulas.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #DataTableOperations, #ModelFitting, #TSquare -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	dt << Clear Row States( 1 );
	s = dt << Select Rows( 101 :: N Rows( dt ) );
	s << Delete Rows;
	obj = Fit Model(
		Y( :LOAN ),
		Effects( :MORTDUE, :REASON, :MORTDUE * :REASON ),
		Impute Missing Data( 1 ),
		Personality( "Partial Least Squares" ),
		Run( Validation Method( "None" ), Fit() )
	);
	obj << (Fit[1] << Save T Square( 1 ));
	obj << (Fit[1] << Save Prediction Formula( 1 ));
	tsquare = dt:T¬≤ << get values;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table.
3. Clear row states.
4. Select rows 101 to last.
5. Delete selected rows.
6. Fit model using Partial Least Squares.
7. Save T Square to data table.
8. Save prediction formula to data table.
9. Retrieve T Square values.
10. Close data table without saving.



### Example 48
> **Summary**: Fits two models with different random effects and saving prediction and interval formulas in JMP Pro.

<!-- Keywords: #JMPPro, #ModelFitting, #RandomEffects, #PredictionIntervals, #DataAnalysis -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	dt << New Column( "BMI_c", numeric, formula( :BMI - Col Mean( :BMI ) ) );
	obj1 = dt << Fit Model(
		Y( :Y ),
		Effects( :LDL, :HDL ),
		Random Effects( :BMI_c ),
		NoBounds( 1 ),
		Personality( "Standard Least Squares" ),
		Run
	);
	obj1 << Save Columns( Prediction and Interval Formulas, Mean Confidence Interval, Indiv Confidence Interval );
	obj2 = dt << Fit Model(
		Y( :Y ),
		Effects( :LDL, :HDL ),
		Random Effects( :BMI ),
		NoBounds( 1 ),
		Personality( "Standard Least Squares" ),
		Run
	);
	obj2 << Save Columns( Prediction and Interval Formulas, Mean Confidence Interval, Indiv Confidence Interval );
	indiv ci1 = (dt:Lower 95% Mean Y << get values) || (dt:Upper 95% Mean Y << get values) || (dt:Lower 95% Mean Y 2 << get values) || (dt
	:Upper 95% Mean Y 2 << get values);
	indiv ci2 = (dt:Lower 95% Mean Y 3 << get values) || (dt:Upper 95% Mean Y 3 << get values) || (dt:Lower 95% Mean Y 4 << get values) ||
	(dt:Upper 95% Mean Y 4 << get values);
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP is Pro version.
2. Open data table;
3. Create new column BMI_c.
4. Fit model with LDL, HDL as effects, BMI_c as random effect.
5. Save prediction and interval formulas.
6. Fit another model with LDL, HDL as effects, BMI as random effect.
7. Save prediction and interval formulas.
8. Extract individual confidence intervals.
9. Combine confidence interval data.
10. Close dataset without saving.



### Example 49
> **Summary**: Process of generating all possible models and extracting stepwise fit statistics for a given dataset, utilizing JMP Pro's modeling capabilities.

<!-- Keywords: #JMPPro, #Modeling, #StepwiseRegression, #DataAnalysis, #Scripting -->

**Code**:
```jsl
If( JMP Product Name() == "Pro",
	For( nterms = 1, nterms <= 10, nterms++,
		n best models = Random Integer( 10, 100 );
		dt = Open("data_table.jmp");
		obj = dt << Fit Model(
			Validation( :Validation ),
			Y( :Y ),
			Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
			Personality( "Stepwise" ),
			Run,
			SendToReport( Dispatch( {}, "Current Estimates", OutlineBox, {Close( 1 )} ) )
		);
		rpt = obj << report;
		obj << All Possible Models( nterms, n best models );
		all models stats = rpt["All Possible Models"][Table Box( 1 )] << get as matrix;
		n models = N Rows( all models stats );
		For( i = 1, i <= n models, i++,
			rpt["All Possible Models"][Radio Box( 1 )] << set( i );
			b stats = rpt["Stepwise Fit for Y"][Table Box( 2 )] << get as matrix;
		);
	);
	Close( dt, no save );
	For( nterms = 1, nterms <= 10, nterms++,
		n best models = Random Integer( 10, 100 );
		dt = Open("data_table.jmp");
		dt << New Column( "Validation 2", nominal, formula( Random Category( 0.4, 0, 0.35, 1, 2 ) ) );
		obj = dt << Fit Model(
			Validation( :Validation 2 ),
			Y( :Y ),
			Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
			Personality( "Stepwise" ),
			Run,
			SendToReport( Dispatch( {}, "Current Estimates", OutlineBox, {Close( 1 )} ) )
		);
		rpt = obj << report;
		obj << All Possible Models( nterms, n best models );
		all models stats = rpt["All Possible Models"][Table Box( 1 )] << get as matrix;
		n models = N Rows( all models stats );
		For( i = 1, i <= n models, i++,
			rpt["All Possible Models"][Radio Box( 1 )] << set( i );
			b stats = rpt["Stepwise Fit for Y"][Table Box( 2 )] << get as matrix;
		);
	);
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro.
2. Loop from 1 to 10 terms.
3. Generate random number of models.
4. Open data table;
5. Fit model with validation.
6. Specify response variable Y.
7. Include all effects.
8. Use Stepwise personality.
9. Run the model.
10. Close Current Estimates box.
11. Get model report.
12. Generate all possible models.
13. Extract all models statistics.
14. Loop through each model.
15. Set current model.
16. Extract stepwise fit statistics.
17. Close dataset without saving.
18. Repeat steps 3-17 with new validation column.
19. Close dataset without saving.



### Example 50
> **Summary**: Fits a Nominal Logistic model to a data table, generating a confusion matrix and saving probability formulas for comparison.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #ConfusionMatrix, #ModelComparison, #DataAnalysis -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = dt << Fit Model(
		Freq( :count ),
		Target Level( "m" ),
		Y( :brand ),
		Effects(
			:softness, :previous use, :softness * :previous use, :temperature, :softness * :temperature, :previous use * :temperature,
			:softness * :previous use * :temperature
		),
		Personality( "Nominal Logistic" ),
		Run( Confusion Matrix( 1 ), Save Probability Formula( 1 ) )
	);
	rpt1 = Report( obj );
	obj2 = Model Comparison( Freq( :count ), Confusion Matrix( 1 ) );
	rpt2 = Report( obj2 );
	b confmat1 = rpt1[Outline Box( "Confusion Matrix" )][Table Box( 1 )] << get as matrix;
	confmat1 = rpt2[Outline Box( "Confusion Matrix" )][Table Box( 1 )] << get as matrix;
	b confmat2 = b confmat1 :/ Shape( V Sum( b confmat1` ), 2, 2 )`;
	confmat2 = rpt2[Outline Box( "Confusion Matrix" )][Table Box( 2 )] << get as matrix;
	confmat1_from = rpt2[Outline Box( "Confusion Matrix" )][Outline Box( "Predictor Fit Nominal Logistic" )][Col Span Box( 1 )] <<
	get heading;
	confmat1_to = rpt2[Outline Box( "Confusion Matrix" )][Outline Box( "Predictor Fit Nominal Logistic" )][Col Span Box( 2 )] <<
	get heading;
	confmat2_from = rpt2[Outline Box( "Confusion Matrix" )][Outline Box( "Predictor Fit Nominal Logistic" )][Col Span Box( 3 )] <<
	get heading;
	confmat2_to = rpt2[Outline Box( "Confusion Matrix" )][Outline Box( "Predictor Fit Nominal Logistic" )][Col Span Box( 4 )] <<
	get heading;
	col1_from = Char( Parse( rpt2[Outline Box( "Predictor Fit Nominal Logistic" )][Col Span Box( 1 )][String Col Box( 1 )] << get text ) );
	col2_from = Char( Parse( rpt2[Outline Box( "Predictor Fit Nominal Logistic" )][Col Span Box( 3 )][String Col Box( 1 )] << get text ) );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table;
3. Fit Nominal Logistic model.
4. Set frequency column.
5. Define target level.
6. Specify response variable.
7. List model effects.
8. Generate confusion matrix.
9. Save probability formula.
10. Compare models.



### Example 51
> **Summary**: Runs neural network analysis and logistic modeling to predict food product classification, utilizing JMP Pro's Neural platform and Fit Model features.

<!-- Keywords: #JMPPro, #NeuralNetworks, #LogisticRegression, #FoodScience, #PredictiveModeling -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	nn = dt << Neural(
		Y( :Calories, :Calories fr Fat ),
		X( :Mfr, :Protein, :Fat, :Sodium, :Fiber Gr ),
		Missing Value Coding( 0 ),
		Validation Method( Holdback, 0.3333 ),
		Fit( NTanH( 3 ) ),
		Set Random Seed( 3000 )
	);
	nn << Save Validation;
	nn << Close window;
	fmnlogi = dt << Fit Model(
		Y( :Name( "Hot/Cold" ) ),
		Effects( :Calories, :Fiber, Sugars ),
		Validation( :Validation ),
		freq( :protein ),
		Personality( Nominal Logistic ),
		invisible,
		Run()
	);
	fmnlogi << ROC Curve( 1 );
	fmnlogi << Save Probability Formula;
	rpt1 = fmnlogi << report;
	mc2 = dt << Model Comparison(
		Y( :Name( "Prob[C]" ), :Name( "Prob[H]" ) ),
		freq( :protein ),
		Group( :Validation ),
		AUC Comparison( 1 )
	);
	rpt2 = mc2 << report;
	stat1 = ((rpt1[Outline Box( "Fit Details" )][Table Box( 1 )][Number Col Box( 1 )] << get as matrix) | (rpt1[
	Outline Box( "Fit Details" )][Table Box( 1 )][Number Col Box( 2 )] << get as matrix)) || ((rpt1[Outline Box( "Fit Details" )][
	Table Box( 1 )][Number Col Box( 3 )] << get as matrix) | (rpt1[Outline Box( "Fit Details" )][Table Box( 1 )][Number Col Box( 4 )] <<
	get as matrix));
	stat2 = rpt2[Outline Box( "Measures of Fit for Hot/Cold" )][Table Box( 1 )] << get as matrix;
	roc1 train = (rpt1[Outline Box( "Receiver Operating Characteristic on Training Data" )][Number Col Box( 1 )] << get as matrix)[1];
	roc1 validation = (rpt1[Outline Box( "Receiver Operating Characteristic on Validation Data" )][Number Col Box( 1 )] << get as matrix)[1
	];
	roc2 train = Try(
		(rpt2[Outline Box( "AUC Comparison for Hot/Cold=H for Validation=Training" )][Number Col Box( 1 )] << get as matrix)[1]
	);
	roc2 validation = Try(
		(rpt2[Outline Box( "AUC Comparison for Hot/Cold=H for Validation=Validation" )][Number Col Box( 1 )] << get as matrix)[1]
	);
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Run neural network analysis.
4. Save validation results.
5. Close neural network window.
6. Fit logistic model.
7. Generate ROC curve.
8. Save probability formula.
9. Extract fit details.
10. Compare models.



### Example 52
> **Summary**: Fits a model to predict sex based on age and height, with model comparison and probability formula saving for males.

<!-- Keywords: #JMPPro, #ModelFit, #ProbabilityFormula, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj1 = dt << Fit Model( Y( :sex ), Effects( :age, :height ), Run );
	obj1 << Save Probability Formula( 1 );
	dt << Model Comparison( Model Averaging( 1 ) );
	prop1 = dt:sex F Avg Predictor << Get Property( Response Probability );
	prop2 = dt:sex M Avg Predictor << Get Property( Response Probability );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data_table data
3. Fit model with sex as response.
4. Include age and height as effects.
5. Run the model.
6. Save probability formula for males.
7. Perform model comparison.
8. Average model predictors.
9. Retrieve female response probability.
10. Retrieve male response probability.
11. Close data table without saving.



### Example 53
> **Summary**: Fits a linear model, retrieving reports, and comparing models in JMP Pro.

<!-- Keywords: #JMPPro, #LinearModeling, #DataAnalysis, #ModelComparison, #Scripting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj1 = dt << Fit Model( Y( :MORTDUE ), Effects( :VALUE ), Personality( Standard Least Squares ), Emphasis( Minimal Report ), Run() );
	rpt1 = Report( obj1 );
	obj1 << Prediction Formula( 1 );
	rsquare1 = (rpt1[Outline Box( "Summary of Fit" )][Table Box( 1 )] << Get as matrix)[1];
	obj2 = dt << Model Comparison();
	rpt2 = Report( obj2 );
	rsquare2 = (rpt2[Outline Box( "Measures of Fit for MORTDUE" )][Table Box( 1 )] << get as matrix)[1];
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro.
2. Open data_table data
3. Fit linear model.
4. Retrieve report object.
5. Add prediction formula.
6. Extract R-square value.
7. Perform model comparison.
8. Retrieve comparison report.
9. Extract R-square from comparison.
10. Close data without saving.



### Example 54
> **Summary**: Fits a Partial Least Squares model to a data table, validating its performance, and extracting fit measures in JMP Pro.

<!-- Keywords: #JMPPro, #PartialLeastSquares, #ModelValidation, #DataAnalysis, #PredictiveAnalytics -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = Fit Model(
		Validation( :Validation ),
		Y( :Y ),
		Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
		No Intercept( 1 ),
		Center Polynomials( 0 ),
		Personality( "Partial Least Squares" ),
		Run( Initial Number of Factors( 11 ), Fit( Method( NIPALS ) ) ), 
	);
	test1 = obj << (Fit[1] << get measures( 1 ));
	obj << (Fit[1] << save prediction formula( 1 ));
	rpt = obj << report;
	obj2 = Model Comparison( Group( :Validation ) );
	rpt2 = obj2 << report;
	test2 = rpt2["Measures of Fit for Y"][Table Box( 1 )] << get as matrix;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro.
2. Open data table;
3. Fit Partial Least Squares model.
4. Set validation column.
5. Specify response variable.
6. Define effects variables.
7. Exclude intercept term.
8. Disable polynomial centering.
9. Run model with NIPALS method.
10. Save prediction formula.
11. Retrieve model report.
12. Compare models by validation.
13. Extract fit measures matrix.
14. Close dataset without saving.



### Example 55
> **Summary**: Runs the fitting and profiling of various models, including Partial Least Squares (PLS) and nonlinear regression, with customizable settings for validation methods and initial number of factors.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #NonlinearRegression, #ModelProfiling, #DataAnalysis -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
If( JMP Product Name() == "Pro",
	obj = dt2 << Fit Model(
		Y( :ls, :ha, :dt ),
		Effects( :v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10 ),
		No Intercept,
		Personality( "Partial Least Squares" ),
		Impute Missing Data( 1 ),
		Run( Validation Method( KFold( 7 ), Initial Number of Factors( 15 ) ), Fit( Method( NIPALS ) ) )
	),
	obj = dt2 << Partial Least Squares(
		Y( :ls, :ha, :dt ),
		X( :v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10 ),
		Validation Method( Name( "Leave-One-Out" ), Initial Number of Factors( 10 ) ),
		Fit( Method( SIMPLS ) )
	)
);
rpt = obj << report;
obj << (Fit[1] << Spectral Profiler( 1 ));
r = rpt[Outline Box( "Spectral Profiler" )] << get scriptable object;
r << Independent Uniform Inputs;
r << Independent Resampled Inputs;
r << Dependent Resampled Inputs;
Close( dt2, No Save );
dt = Open("data_table.jmp");
obj = dt << Nonlinear( Y( :pop ), X( :Name( "X-formula" ) ), Go );
obj << Parameter Profiler( 1, Independent Uniform Inputs( 1 ), Independent Resampled Inputs( 1 ), Dependent Resampled Inputs( 1 ) );
Close( dt, No Save );
dt = Open("data_table.jmp");
obj = dt << Run Script( "Fit Parametric Survival" );
obj << Distribution Profiler( 1, Independent Uniform Inputs( 1 ), Independent Resampled Inputs( 1 ), Dependent Resampled Inputs( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Check if JMP version is Pro.
3. If Pro, fit PLS model with specified settings.
4. If not Pro, fit PLS model with different settings.
5. Generate Spectral Profiler report.
6. Configure profiler inputs.
7. Close data_table.jmp without saving.
8. Open data table.
9. Fit nonlinear model.
10. Generate Parameter Profiler report.
11. Configure profiler inputs.
12. Close data_table.jmp without saving.
13. Open data table.
14. Run Fit Parametric Survival script.
15. Generate Distribution Profiler report.
16. Configure profiler inputs.



### Example 56
> **Summary**: Fits a mixed model with specified effects and random effects, generating a summary report as a matrix.

<!-- Keywords: #JMPScriptingLanguage, #MixedModel, #RandomEffects, #ProfilerSettings, #DataAnalysis -->

**Code**:
```jsl
If( JMP Product Name() == "Pro",
	dt = Open("data_table.jmp");
	obj = dt << Fit Model(
		Y( :miles ),
		Effects( :species, :season, :species * :season ),
		Random Effects( :subject[:species] ),
		Center Polynomials( 0 ),
		Personality( Mixed Model ),
		Run(
			Repeated Effects Covariance Parameter Estimates( 0 ),
			Profiler(
				1,
				Confidence Intervals( 1 ),
				Independent Uniform Inputs( 1 ),
				Reorder X Variables( :species, :season, :subject ),
				Term Value( species( "COYOTE", Lock( 0 ), Show( 1 ) ), season( "fall", Lock( 0 ), Show( 1 ) ) )
			)
		)
	);
	rpt = obj << report;
	sumRpt = rpt[Outline Box( "Summary Report" )][Table Box( 1 )] << get as matrix;
	Close( dt, No Save );
);
```

**Code Explanation**:

1. Check if JMP Product Name is Pro.
2. Open data table;
3. Fit mixed model with specified effects.
4. Configure random effects.
5. Disable centering of polynomials.
6. Run model with profiler settings.
7. Suppress repeated effects covariance estimates.
8. Enable confidence intervals in profiler.
9. Set independent uniform inputs.
10. Reorder X variables in profiler.
11. Lock and show specific term values.
12. Extract summary report as matrix.
13. Close dataset without saving.



### Example 57
> **Summary**: Analyze and extract intraclass correlation (ICC) estimates from a data table, utilizing OneWay analysis and report generation in JMP.

<!-- Keywords: #JMPScriptingLanguage, #IntraclassCorrelation, #OneWayAnalysis, #DataTableManipulation, #ReportGeneration -->

**Code**:
```jsl
If( Num( Left( JMP Version(), 4 ) ) >= 20,
	isPro = (Substr( Build Information(), -3 ) == "Pro");
	dt = Open("data_table.jmp");
	obj1 = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ), intraclass correlation( 1 ) );
	rpt1 = Report( obj1 );
	ICCact = (rpt1["Intraclass Correlation", Number Col Box( "Estimate" )] << Get As Matrix);
	ICCstderract = (rpt1["Intraclass Correlation", Number Col Box( "Std Error" )] << Get  As Matrix);
	ICCLoweract = (rpt1["Intraclass Correlation", Number Col Box( "95% Lower" )] << Get As Matrix);
	ICCUpperact = (rpt1["Intraclass Correlation", Number Col Box( "95% Upper" )] << Get As Matrix);
	ICCExp = [0.507769322528345, 8.52968255480063];
	IccStdErrExp = [0.228206969849747, 3.47360962874902];
	ICCLowerExp = [0.0604918806018222, 4.392073299774];
	ICCUpperExp = [0.955046764454867, 23.1708460839664];
	If( isPro == 1,
		obj2 = dt << Fit Model(
			Y( :Y ),
			Effects,
			Personality( "Mixed Model" ),
			Subject( :Soil ),
			Repeated Effects( :Block ),
			Repeated Structure( "Compound Symmetry" ),
			Run( Random Effects Covariance Parameter Estimates( 0 ) )
		);
		rpt2 = Report( obj2 );
		ICCact = (rpt2["Repeated Effects Covariance Parameter Estimates", Number Col Box( "Estimate" )] << Get As Matrix);
		ICCstderract = (rpt2["Repeated Effects Covariance Parameter Estimates", Number Col Box( "Std Error" )] << Get  As Matrix);
		ICCLoweract = (rpt2["Repeated Effects Covariance Parameter Estimates", Number Col Box( "95% Lower" )] << Get As Matrix);
		ICCUpperact = (rpt2["Repeated Effects Covariance Parameter Estimates", Number Col Box( "95% Upper" )] << Get As Matrix);
	,
		donnothing = 1;
	);
	Close( dt, nosave );
,
	donnothing = 1;
);
```

**Code Explanation**:

1. Check JMP version.
2. Determine if Pro version.
3. Open data table.
4. Perform OneWay analysis.
5. Extract Intraclass Correlation report.
6. Retrieve ICC estimate.
7. Retrieve ICC standard error.
8. Retrieve ICC lower bound.
9. Retrieve ICC upper bound.
10. Close data table without saving.



## Fit Model using Get Preferences
> **Summary**: Fits a linear model to predict weight based on age, sex, and height, while generating a minimal report with expanded estimates and prediction expression.

<!-- Keywords: #JSLScriptingLanguage, #LinearRegression, #DataTable, #FitModel, #ReportGeneration -->

**Code**:
```jsl
pref1 = Get Preferences( Default Field Width );
Preferences( Default Field Width( 8 ) );
dt = Open("data_table.jmp");
obj = dt << Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( :weight << {Expanded Estimates( 1 ), Show Prediction Expression( 1 )} ),
	SendToReport(
		Dispatch( {"Response weight"}, "Effect Summary", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response weight"}, "Lack Of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response weight"}, "Summary of Fit", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response weight"}, "Analysis of Variance", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response weight"}, "Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response weight"}, "Effect Tests", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response weight", "Expanded Estimates"}, "Estimate", NumberColBox, {Set Format( "Best", 12 )} )
	)
);
Eval( pref1 );
```

**Code Explanation**:

1. Save default field width.
2. Set new field width.
3. Open data table;
4. Fit linear model on weight.
5. Include age, sex, height as effects.
6. Use standard least squares personality.
7. Generate minimal report.
8. Show expanded estimates and prediction expression.
9. Close effect summary, lack of fit, summary of fit, analysis of variance, parameter estimates, effect tests.
10. Set estimate format to best with 12 digits.
11. Restore default field width.



## Fit Model using New Window
### Example 1
> **Summary**: Fits nominal logistic models for Date and Time responses, considering Abrasion and Shift effects, with detailed profiling and testing.

<!-- Keywords: #JSLScripting, #NominalLogisticRegression, #Abrasion, #Shift, #ModelProfiling -->

**Code**:
```jsl
Open("data_table.jmp");
New Window( "data_table - Fit Nominal Logistic",
	V List Box(
		Fit Model(
			Y( :Date ),
			Effects( :Abrasion, :Shift ),
			Personality( "Nominal Logistic" ),
			Run(
				Likelihood Ratio Tests( 1 ),
				Wald Tests( 0 ),
				Profiler( 1, Term Value( Abrasion( 139.6, Lock( 0 ), Show( 1 ) ), Shift( "A", Lock( 0 ), Show( 1 ) ) ) )
			)
		),
		Fit Model(
			Y( :Time ),
			Effects( :Abrasion, :Shift ),
			Personality( "Nominal Logistic" ),
			Run(
				Likelihood Ratio Tests( 1 ),
				Wald Tests( 0 ),
				Profiler( 1, Term Value( Abrasion( 139.6, Lock( 0 ), Show( 1 ) ), Shift( "A", Lock( 0 ), Show( 1 ) ) ) )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "Abrasion - Fit Nominal Logistic".
3. Add vertical list box to window.
4. Fit model for Date response.
5. Set response variable to Date.
6. Include Abrasion and Shift as effects.
7. Use Nominal Logistic personality.
8. Run model with specified tests and profiler.
9. Perform Likelihood Ratio Tests.
10. Disable Wald Tests.
11. Enable Profiler with specific term values and settings.
12. Fit model for Time response.
13. Set response variable to Time.
14. Include Abrasion and Shift as effects.
15. Use Nominal Logistic personality.
16. Run model with specified tests and profiler.
17. Perform Likelihood Ratio Tests.
18. Disable Wald Tests.
19. Enable Profiler with specific term values and settings.



### Example 2
> **Summary**: Runs a multiple correspondence analysis with supplementary rows for subject and gender, generating detailed coordinates and scaling for the first three dimensions.

<!-- Keywords: #MultipleCorrespondenceAnalysis, #SupplementaryRows, #SubjectVariables, #GenderVariables, #DimensionalityReduction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "test",
	Outline Box( "Title1",
		testPlat = dt << Fit Model(
			Y( :miles ),
			Effects( :species, :season, :species * :season ),
			Random Effects( :subject[:species] & Random ),
			Personality( Standard Least Squares ),
			Method( REML ),
			Emphasis( Minimal Report ),
			Run(
				:miles << {Analysis of Variance( 0 ), Lack of Fit( 0 ), Plot Actual by Predicted( 0 ), Plot Regression( 0 ),
				Plot Residual by Predicted( 0 ), Plot Effect Leverage( 0 )}
			),
			SendToReport( Dispatch( {}, "Response miles", OutlineBox, {Set Title( "Custom" )} ) )
		)
	)
);
testRedo = Report( testPlat << Redo Analysis );
```

**Code Explanation**:

1. Open data table;
2. Create new window titled "test".
3. Add Outline Box named "Title1".
4. Fit model with miles as response.
5. Include species, season, and interaction effects.
6. Specify random effects for subject within species.
7. Use Standard Least Squares personality.
8. Employ REML method.
9. Minimize report emphasis.
10. Redo analysis and store report.



## Fit Model using Item Analysis
> **Summary**: Analyze and visualize relationships between ABRASION, MODULUS, and ELONG responses using item analysis and a linear model with effect screening.

<!-- Keywords: #JMPScriptingLanguage, #ItemAnalysis, #LinearModel, #EffectScreening, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5, :Q6, :Q7, :Q8, :Q9 ) );
dt = Open("data_table.jmp");
Fit Model(
	Y( :ABRASION, :MODULUS, :ELONG ),
	Effects(
		:SILICA & RS, :SILANE & RS, :SULFUR & RS, :SILICA * :SILICA, :SILANE * :SILICA, :SILANE * :SILANE, :SULFUR * :SILICA,
		:SULFUR * :SILANE, :SULFUR * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run( :ABRASION << {Scaled Estimates( 1 )}, :MODULUS << {Scaled Estimates( 1 )}, ),
	SendToReport(
		Dispatch( {"Response ABRASION"}, "Actual by Predicted Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response ABRASION"}, "Residual by Predicted Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response ABRASION"}, "Studentized Residuals", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response MODULUS"}, "Actual by Predicted Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response MODULUS"}, "Residual by Predicted Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response MODULUS"}, "Studentized Residuals", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response ELONG"}, "Actual by Predicted Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response ELONG"}, "Residual by Predicted Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Response ELONG"}, "Studentized Residuals", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Perform item analysis on Q1-Q9.
3. Open data table;
4. Fit model for ABRASION, MODULUS, ELONG.
5. Define effects for silica, silane, sulfur.
6. Set personality to Standard Least Squares.
7. Emphasize effect screening.
8. Enable scaled estimates for ABRASION and MODULUS.
9. Close plots for ABRASION.
10. Close plots for MODULUS and ELONG.



## Fit Model using New Web Report
### Example 1
> **Summary**: Creates and configures a fit model report in JMP, including plotting actual vs. predicted values, residuals, and effect leverage.

<!-- Keywords: #JMPScriptingLanguage, #FitModelReport, #WebReport, #DataAnalysis, #Regression -->

**Code**:
```jsl
Open("data_table.jmp");
webrpt = New Web Report();
webrpt << Add Report(
	Report(
		Fit Model(
			Y( :weight ),
			Effects( :age, :sex, :height ),
			Personality( Standard Least Squares ),
			Run( :weight << {Plot Actual by Predicted( 1 ), Plot Residual by Predicted( 1 ), Plot Effect Leverage( 1 )} ),
		)
	)
);
rptPath = webrpt << Save( "$TEMP" );
 
If(
	Host is( "Windows" ), folderPath = Substr( rptPath, 1, Length( Convert File Path( "$TEMP" ) ) + 35 ),
	Host is( "Mac" ), folderPath = Substr( rptPath, 1, Length( Convert File Path( "$TEMP" ) ) + 36 )
);
Delete Directory( folderPath );
```

**Code Explanation**:

1. Open data table.
2. Create new web report.
3. Add fit model report.
4. Set response variable.
5. Define effects variables.
6. Choose regression personality.
7. Run model with plots.
8. Save web report to temp.
9. Determine host operating system.
10. Delete temporary directory.



### Example 2
> **Summary**: Creates and configures a fit model report in JMP, including specifying response and effect variables, choosing a standard least squares method, and customizing plot options.

<!-- Keywords: #JMPScriptingLanguage, #FitModelReport, #WebReporting, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
webrpt = New Web Report();
webrpt << Add Report(
	Report(
		Fit Model(
			Y( :weight ),
			Effects( :age, :sex, :height ),
			Personality( Standard Least Squares ),
			Run( :weight << {Plot Actual by Predicted( 1 ), Plot Residual by Predicted( 1 ), Plot Effect Leverage( 1 )} ), 
		)
	)
);
dirPath = "$TEMP\TempReports";
rptPath = webrpt << Save( dirPath );
 
Close( dt, NoSave );
webrpt << Reset();
```

**Code Explanation**:

1. Open data table.
2. Create new web report.
3. Add fit model report.
4. Set response variable.
5. Specify effect variables.
6. Choose standard least squares.
7. Configure plot options.
8. Save web report.
9. Close data table.
10. Reset web report.



### Example 3
> **Summary**: Creates and configures a web report to visualize the relationship between weight, age, sex, and height using standard least squares regression.

<!-- Keywords: #JSLScriptingLanguage, #WebReport, #RegressionAnalysis, #StandardLeastSquares, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
webrpt = New Web Report();
webrpt << Add Report(
	Report(
		Fit Model(
			Y( :weight ),
			Effects( :age, :sex, :height ),
			Personality( Standard Least Squares ),
			Run( :weight << {Plot Actual by Predicted( 1 ), Plot Residual by Predicted( 1 ), Plot Effect Leverage( 1 )} ), 
		)
	)
);
dirPath = "$TEMP\TempReports";
rptPath = webrpt << Save( dirPath );
```

**Code Explanation**:

1. Open data table.
2. Create new web report.
3. Add report to web report.
4. Fit model with specified effects.
5. Set personality to standard least squares.
6. Run model with specified plots.
7. Save actual by predicted plot.
8. Save residual by predicted plot.
9. Save effect leverage plot.
10. Save web report to directory.



## Fit Model using Format
> **Summary**: Fits two models to a data table, generating reports for each model, and profiling the fit group.

<!-- Keywords: #JSLScriptingLanguage, #DataAnalysis, #ModelFitting, #ReportGeneration, #Profiler -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Runtime << set values(
	[8.17, 8.63, 8.65, ., 8.95, 9.22, 9.4, ., 9.93, 10, 10.07, 10.08, 10.13, 10.25, 10.33, 10.47, 10.5, 10.6, 10.85, 10.95, 11.08, ., 11.17,
	11.37, 11.5, 11.63, 11.95, 12.63, 12.88, 13.08, 14.03]
);
dt:RunPulse << set values(
	[., 170, 156, 146, 180, 178, ., ., ., 162, 185, 168, 168, 162, 166, 186, 170, 162, 162, 168, ., 176, 156, ., 170, 176, 176, 174, 168,
	174, .]
);
dt:RunPulse << Format( Fixed, 6, 2 );
obj = dt << Fit Model(
	Y( :Runtime, :RunPulse ),
	Effects( :Age, :Weight, :Sex ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Fit Separately )
);
rpt = Current Report();
(rpt["Fit Group"] << get scriptable object) << Profiler( 1 );
rpt1 = obj[1] << report;
rpt2 = obj[2] << report;
obj1 = dt << Fit Model(
	Y( :Runtime ),
	Effects( :Age, :Weight, :Sex ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run()
);
obj1 << Profiler( 1 );
rpt1 = Report( obj1 );
obj2 = dt << Fit Model(
	Y( :RunPulse ),
	Effects( :Age, :Weight, :Sex ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run()
);
obj2 << Profiler( 2 );
rpt2 = Report( obj2 );
```

**Code Explanation**:

1. Open data table.
2. Set Runtime column values.
3. Set RunPulse column values.
4. Format RunPulse column.
5. Fit model for Runtime and RunPulse.
6. Get current report.
7. Enable Profiler for Fit Group.
8. Create report for Runtime fit.
9. Create report for RunPulse fit.
10. Fit model for Runtime.
11. Enable Profiler for Runtime fit.
12. Create report for Runtime fit.
13. Fit model for RunPulse.
14. Enable Profiler for RunPulse fit.
15. Create report for RunPulse fit.



## Fit Model using Set Property
### Example 1
> **Summary**: Fits a nominal logistic model to analyze the relationship between softness, previous use, and temperature on brand count, while also generating a report object with saved probability formulas.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #GraphBuilder, #DataAnalysis, #ProbabilityFormulas -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:softness << Set Property( Value Ordering, {med, soft, hard} );
obj = dt << Fit Model(
	Freq( :count ),
	Y( :brand ),
	Target Level( "m" ),
	Effects( :softness, :previous use, :temperature ),
	Personality( "Nominal Logistic" ),
	Run Model( Likelihood Ratio Tests( 1 ), Wald Tests( 0 ), Confidence Intervals( 0.05 ), Odds Ratios( 1 ), )
);
obj << Save Probability Formula;
rpt = Report( obj );
saved prob = (dt << get as matrix)[0, 2 :: 4];
```

**Code Explanation**:

1. Open data table.
2. Set value ordering for softness.
3. Fit nominal logistic model.
4. Specify frequency column.
5. Set response variable.
6. Define target level.
7. Include effects variables.
8. Choose nominal logistic personality.
9. Run model with specified tests.
10. Save probability formula.
11. Generate report object.
12. Extract saved probabilities.



### Example 2
> **Summary**: Analyze a data table by fitting a model with specified effects, generating prediction formulas, and calculating predicted values.

<!-- Keywords: #JSLScripting, #DataAnalysis, #ModelFitting, #PredictionFormula, #PredictedValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Time[4] = .;
dt:Time[7] = .;
dt:Time << Set Property( "Coding", {2, 5} );
obj = Fit Model(
	Y( :Number Popped ),
	Effects( :Brand, :Time, :Power, :Brand * :Time, :Brand * :Power, :Time * :Power, :Time * :Time, :Power * :Power ),
	Informative Missing( 1 ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run()
);
obj << Prediction Formula;
obj << Predicted Values;
pred1 = dt:Pred Formula Number Popped << get values;
pred2 = dt:Predicted Number Popped << get values;
```

**Code Explanation**:

1. Open table.
2. Remove missing Time values.
3. Set coding for Time.
4. Fit model with specified effects.
5. Enable informative missing data.
6. Use standard least squares personality.
7. Minimal report emphasis.
8. Run the model.
9. Generate prediction formula.
10. Calculate predicted values.



### Example 3
> **Summary**: Analyze mean profit by product line and quarter from the Profit by Product dataset using Graph Builder, fitting a nominal logistic model with specified profit matrix.

<!-- Keywords: #GraphBuilder, #NominalLogisticModel, #ProfitMatrix, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:sex << Set Property( "Profit Matrix", {[0 - 1, -1.5 0, . .], {"F", "M", "Undecided"}} );
obj1 = Fit Model( Y( :sex ), Target Level( "F" ), Effects( :weight, :height ), Personality( "Nominal Logistic" ), Run );
obj1 << Save Probability Formula( 1 );
values1 = (dt << get as matrix)[0, 4 :: 10];
dt:sex << Delete Property( "Profit Matrix" );
obj2 = Fit Model(
	Y( :sex ),
	Target Level( "F" ),
	Effects( :weight, :height ),
	Personality( "Nominal Logistic" ),
	Run( Specify Profit Matrix( [0 -1, -1.5 0, . .], "F", "M", "Undecided" ) )
);
obj2 << Save Probability Formula( 1 );
values2 = (dt << get as matrix)[0, 11 :: 17];
Close( dt, no save );
b saved exp = [14.441741822, 14.441741822, 14.441741822, 14.441741822, 14.441741822, 14.28721429, 14.28721429, 14.28721429, 14.441741822,
14.441741822, 14.441741822, 14.28721429, 14.28721429, 14.28721429, 14.28721429, 14.441741822, 14.441741822, 14.441741822, 14.441741822,
14.441741822, 14.28721429, 14.28721429, 14.28721429, 14.28721429, 14.28721429, 14.28721429, 14.28721429, 14.441741822, 14.441741822,
14.28721429, 14.28721429, 14.28721429, 14.28721429, 14.28721429, 14.441741822, 14.441741822, 14.28721429, 14.441741822, 14.28721429,
14.28721429];
```

**Code Explanation**:

1. Open data table;
2. Set profit matrix for sex.
3. Fit nominal logistic model.
4. Save probability formula.
5. Extract model values.
6. Remove profit matrix property.
7. Fit nominal logistic model again.
8. Specify profit matrix during fit.
9. Save probability formula.
10. Extract model values.



### Example 4
> **Summary**: Fits and saves two nominal logistic models with specified profit matrices, extracting matrix values for further analysis.

<!-- Keywords: #JSLScripting, #NominalLogisticRegression, #ProfitMatrix, #DataManipulation, #ModelFitting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:sex << Set Property( "Profit Matrix", {[0 - 1, -1.5 0, . .], {"F", "M", "Undecided"}} );
obj1 = Fit Model( Y( :sex ), Target Level( "F" ), Effects( :weight, :height ), Personality( "Nominal Logistic" ), Run );
obj1 << Save Probability Formula( 1 );
values1 = (dt << get as matrix)[0, 4 :: 10];
dt:sex << Delete Property( "Profit Matrix" );
obj2 = Fit Model(
	Y( :sex ),
	Target Level( "F" ),
	Effects( :weight, :height ),
	Personality( "Nominal Logistic" ),
	Run( Specify Profit Matrix( [0 -1, -1.5 0, . .], "F", "M", "Undecided" ) )
);
obj2 << Save Probability Formula( 1 );
values2 = (dt << get as matrix)[0, 11 :: 17];
```

**Code Explanation**:

1. Open data table.
2. Set profit matrix property.
3. Fit nominal logistic model.
4. Save probability formula.
5. Extract matrix values.
6. Delete profit matrix property.
7. Fit another nominal logistic model.
8. Specify profit matrix.
9. Save probability formula again.
10. Extract new matrix values.



### Example 5
> **Summary**: Analyze ordinal logistic model for predicting Y Ordinal, utilizing Fit Model and report features to extract unit odds ratios, parameter estimates, and range odds ratios.

<!-- Keywords: #JSLScriptingLanguage, #OrdinalLogisticModel, #FitModel, #ReportFeature, #ParameterEstimates -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Y Ordinal << Set Property( "Value Order", {Custom Order( {"High", "Low", "Medium"} )} );
obj = dt << Fit Model(
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Odds Ratios( 1 ) )
);
rpt = obj << report;
unit OR = rpt["Unit Odds Ratios"][Table Box( 1 )] << get as matrix;
OR = rpt["Odds Ratios for Gender"][Table Box( 1 )] << get as matrix;
range = V Concat(
	Col Max( dt:Age ) - Col Min( dt:Age ),
	Col Max( dt:BMI ) - Col Min( dt:BMI ),
	Col Max( dt:BP ) - Col Min( dt:BP ),
	Col Max( dt:Total Cholesterol ) - Col Min( dt:Total Cholesterol ),
	Col Max( dt:LDL ) - Col Min( dt:LDL ),
	Col Max( dt:HDL ) - Col Min( dt:HDL ),
	Col Max( dt:TCH ) - Col Min( dt:TCH ),
	Col Max( dt:LTG ) - Col Min( dt:LTG ),
	Col Max( dt:Glucose ) - Col Min( dt:Glucose )
);
parmest1 = rpt["Parameter Estimates"][Table Box( 1 )] << get as matrix;
parmest2 = parmest1[3, 0] |/ parmest1[5 :: 12, 0];
b range OR = Exp( parmest2[0, 1] :* range );
range OR = rpt["Range Odds Ratios"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Set custom value order for Y.
3. Fit ordinal logistic model.
4. Run odds ratios.
5. Get unit odds ratios.
6. Get odds ratios for gender.
7. Calculate variable ranges.
8. Get parameter estimates.
9. Extract relevant parameters.
10. Calculate range odds ratios.



## Fit Model using Neural
> **Summary**: Generates a neural network analysis to predict log life in the Weld-Repaired Castings dataset, including model comparison and residual plotting, with interactive filtering capabilities.

<!-- Keywords: #NeuralNetwork, #ModelComparison, #ResidualPlotting, #InteractiveFiltering, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nn = dt << Neural(
	Y( :Calories, :Calories fr Fat ),
	X( :Mfr, :Protein, :Fat, :Sodium, :Fiber Gr ),
	Missing Value Coding( 0 ),
	Validation Method( Holdback, 0.3333 ),
	Fit( NTanH( 3 ) ),
	Set Random Seed( 5000 ),
	invisible
);
nn << Save Profile Formulas;
nn << Save Validation;
fmnlogi = dt << Fit Model(
	Y( :Name( "Hot/Cold" ) ),
	Effects( :Mfr, :Protein, :Fat, :Sodium, :Fiber Gr ),
	Validation( :Validation ),
	Personality( Nominal Logistic ),
	Run(),
	invisible
);
fmnlogi << Save Probability Formula;
obj = dt << Model Comparison( Group( :Validation ) );
obj << Plot Actual by Predicted;
obj << Plot Residual by Row;
obj << Local Data Filter(
	Location( {0, 0} ),
	Add Filter( columns( :Sugars ), Where( :Sugars >= 6 & :Sugars <= 10 ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
obj << Automatic Recalc( 0 );
dt << Select Where( :Mfr == "N" );
dt << Exclude();
rpt = obj << Report;
actN = rpt[Outline Box( "Measures of Fit for Calories" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Perform neural network analysis.
3. Set output invisible.
4. Save profile formulas.
5. Save validation results.
6. Fit nominal logistic model.
7. Set output invisible.
8. Save probability formula.
9. Compare models by validation.
10. Plot actual vs predicted.
11. Plot residual vs row.
12. Add local data filter.
13. Disable automatic recalculation.
14. Exclude rows where Mfr is "N".
15. Generate report.
16. Extract fit measures matrix.



## Fit Model using Local
### Example 1
> **Summary**: Fits a model to predict height based on weight and age, with emphasis on effect leverage, and generates predicted values.

<!-- Keywords: #JSLScriptingLanguage, #LinearRegression, #DataTable, #PredictedValues, #EffectLeverage -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
Local( {obj},
	obj = dt2 << Fit Model(
		Y( :height ),
		Effects( :weight, :age ),
		Personality( "Standard Least Squares" ),
		Emphasis( "Effect Leverage" ),
		Run(
			:height << {Summary of Fit( 1 ), Analysis of Variance( 1 ), Parameter Estimates( 1 ), Lack of Fit( 0 ), Scaled Estimates( 0 ),
			Plot Actual by Predicted( 1 ), Plot Residual by Predicted( 1 ), Plot Studentized Residuals( 0 ), Plot Effect Leverage( 1 ),
			Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 )}
		),
		Where( :sex == "F" )
	);
	obj << Predicted Values;
	obj << Close Window;
);
vals3 = :Predicted height << Get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Fit model to height.
3. Use weight and age as effects.
4. Set personality to Standard Least Squares.
5. Emphasize effect leverage.
6. Run summary of fit.
7. Run analysis of variance.
8. Run parameter estimates.
9. Generate predicted values.
10. Close window.



### Example 2
> **Summary**: Fits a Manova model to a data table, generating canonical scores for contrast response and retrieving column names.

<!-- Keywords: #JMPScriptingLanguage, #ManovaModel, #CanonicalScores, #DataTable, #LocalVariables -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
Local( {obj},
	obj = Data Table("data_table") << Fit Model(
		Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
		Effects( :drug, :dep1, :drug * :dep1 ),
		Personality( "Manova" ),
		Run( Response Function( "Contrast" ), Response Function( "Sum" ) )
	);
	obj << (Response["Contrast"] << (Effect["Whole Model"] << Save Canonical Scores));
	obj << Close Window;
);
cols2 = dt2 << get column names();
```

**Code Explanation**:

1. Open data table;
2. Create local variable `obj`.
3. Fit model using Manova personality.
4. Set response variables.
5. Define effects: drug, dep1, interaction.
6. Run model with Contrast and Sum response functions.
7. Save canonical scores for Contrast response.
8. Close model window.
9. Retrieve column names from dataset.
10. Assign column names to `cols2`.



## Fit Model using Run Script
### Example 1
> **Summary**: Analyze and visualize a virtual join script, fitting a nominal logistic model to predict customer ratings based on age and gender, and generating a report with frequency outline and table box data.

<!-- Keywords: #JSLScripting, #VirtualJoin, #NominalLogisticModel, #ReportGeneration, #DataAnalysis -->

**Code**:
```jsl
dt3 = Open("data_table.jmp");
obj = dt3 << Run Script( " Distribution: Virtual Join - Age and Rating" );
rep = obj << Report;
freq = rep[Outline Box( 6 )] << Get Title;
quant = rep[Table Box( 1 )] << make into data table;
Close( quant, nosave );
																																								
obj2 = dt3 << Fit Model(
	Y( Referenced Column( "Rating[ItemNo]", Reference( Column( :Item Number ), Reference( Column( :Rating ) ) ) ) ),
	Effects(
		Referenced Column( "Age[CustID]", Reference( Column( :Customer ID ), Reference( Column( :Age ) ) ) ),
		Referenced Column( "Gender[CustID]", Reference( Column( :Customer ID ), Reference( Column( :Gender ) ) ) )
	),
	Personality( "Nominal Logistic" ),
	Run(
		Likelihood Ratio Tests( 1 ),
		Wald Tests( 0 ),
		Profiler(
			1,
			Term Value( Name( "Age[CustID]" )(52.12, Lock( 0 ), Show( 1 )), Name( "Gender[CustID]" )("F", Lock( 0 ), Show( 1 )) )
		)
	),
	SendToReport(
		Dispatch( {"Prediction Profiler"}, "Profiler", FrameBox, {Frame Size( 120, 105 )} ),
		Dispatch( {"Prediction Profiler"}, "Profiler", FrameBox( 3 ), {Frame Size( 120, 105 )} )
	)
);
rpt = obj2 << report;
est = rpt["Effect Summary"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Run virtual join script.
3. Extract report object.
4. Get frequency outline title.
5. Convert table box to data table.
6. Close temporary data table.
7. Fit nominal logistic model.
8. Set likelihood ratio tests.
9. Disable Wald tests.
10. Configure profiler settings.



### Example 2
> **Summary**: Fits a model, configuring multiple comparisons for age, and deleting a selected column in JMP.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #MultipleComparisons, #DataTableManagement, #ModelConfiguration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "Fit Model" );
dt:weight << Set Selected;
dt << Delete Column;
obj << Multiple Comparisons(
	Effect( age ),
	Comparisons with Overall Average( 1, Comparisons with Overall Average Decision Chart( ANOM( 1, Point Options( "Show Needles" ) ) ) )
);
Close( dt, no save );
dt = Open("data_table.jmp");
obj = Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Sequential Tests( 1 );
rpt = obj << report;
test1 = Try( rpt[Outline Box( "Response miles" )][Outline Box( "Sequential (Type 1) Tests" )], "Sequential Tests removed for REML" );
```

**Code Explanation**:

1. Open data table;
2. Run "Fit Model" script.
3. Select "weight" column.
4. Delete selected column.
5. Configure multiple comparisons for "age".
6. Close "data_table.jmp" without saving.
7. Open data table;
8. Fit model with specified effects.
9. Enable sequential tests.
10. Extract and try accessing "Sequential Tests".



## Fit Model using Set Values
### Example 1
> **Summary**: Runs a two-stage screening analysis and model fitting process to identify significant effects in the Strength variable, utilizing JMP's Screening and Fit Model platforms.

<!-- Keywords: #JMPScriptingLanguage, #ScreeningAnalysis, #FitModel, #DataTableManipulation, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Strength << Set Values( [999] );
obj = Screening( Y( :Strength ), X( :Liquid, :Sugar, :Flour, :Sifted, :Type, :Temp, :Salt, :Clamp, :Coat ) );
model = Fit Model(
	Y( :Strength ),
	Effects( :Sifted ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		:Strength << {Lack of Fit( 0 ), Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 0 )}
	)
);
:Strength << Set Property( "Missing Value Codes", 999 );
obj2 = Screening( Y( :Strength ), X( :Liquid, :Sugar, :Flour, :Sifted, :Type, :Temp, :Salt, :Clamp, :Coat ) );
model2 = Fit Model(
	Y( :Strength ),
	Effects( :Sifted ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		:Strength << {Lack of Fit( 0 ), Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ),
		Plot Effect Leverage( 0 )}
	)
);
rpt = model2 << Report;
actN = (rpt[Number Col Box( 3 )]);
a = actN << get( 5 );
```

**Code Explanation**:

1. Open data table.
2. Set Strength values to 999.
3. Run screening analysis on all variables.
4. Fit model with Strength as Y and Sifted as effect.
5. Configure model to suppress plots.
6. Set Missing Value Codes for Strength to 999.
7. Run second screening analysis.
8. Fit second model with same settings.
9. Extract report from second model.
10. Retrieve value from fifth row of third column box.



### Example 2
> **Summary**: Fits a model to predict oxygen levels based on various factors, including sex, maximum pulse, and runtime, while generating individual confidence intervals and displaying confidence limit formulas.

<!-- Keywords: #JMPScriptingLanguage, #RegressionAnalysis, #ConfidenceIntervals, #ModelFitting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Oxy << Set Values(
	[59.571, 60.055, 54.297, ., 49.156, 49.874, 48.673, 45.441, 50.545, 46.672, 45.313, 50.388, ., 46.774, 51.855, 45.79, 47.467, 47.273,
	49.091, 40.836, 45.118, 44.754, 46.08, 44.609, 47.92, 44.811, ., 39.407, 39.203, 39.442, 37.388]
);
obj1 = dt << Fit Model(
	Weight( :Weight ),
	Y( :Oxy ),
	Effects( :Sex, :MaxPulse, :Runtime, :Sex * :MaxPulse, ::Runtime * :Runtime ),
	Personality( "Standard Least Squares" ),
	Emphasis( Minimal Report ),
	Run()
);
obj1 << Indiv Confidence Interval;
obj1 << Indiv Confidence Limit Formula;
indiv lcl1 = dt:Name( "Lower 95% Indiv Oxy" ) << get values;
indiv ucl1 = dt:Name( "Upper 95% Indiv Oxy" ) << get values;
indiv lcl2 = dt:Name( "Lower 95% Indiv Oxy 2" ) << get values;
indiv ucl2 = dt:Name( "Upper 95% Indiv Oxy 2" ) << get values;
```

**Code Explanation**:

1. Open data table;
2. Modify Oxy column values.
3. Initiate Fit Model platform.
4. Set Weight as weight variable.
5. Set Oxy as response variable.
6. Include specified effects.
7. Choose Standard Least Squares personality.
8. Generate minimal report.
9. Run the model.
10. Add individual confidence intervals.
11. Display confidence limit formula.
12. Retrieve Lower 95% Indiv Oxy values.
13. Retrieve Upper 95% Indiv Oxy values.
14. Retrieve Lower 95% Indiv Oxy 2 values.
15. Retrieve Upper 95% Indiv Oxy 2 values.



### Example 3
> **Summary**: Analyze and visualize individual confidence intervals for oxygen levels in a dataset, utilizing JMP's Fit Model platform to specify model parameters.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #IndividualConfidenceIntervals, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Runtime << Set Values(
	[., 8.63, 8.65, 8.92, ., 9.22, 9.4, 9.63, 9.93, 10, 10.07, 10.08, 10.13, 10.25, 10.33, 10.47, 10.5, 10.6, 10.85, 10.95, 11.08, 11.12,
	11.17, ., 11.5, 11.63, 11.95, 12.63, 12.88, 13.08, .]
);
obj1 = dt << Fit Model(
	Weight( :Weight ),
	Y( :Oxy ),
	Effects( :Sex, :MaxPulse, :Runtime, :Sex * :MaxPulse, ::Runtime * :Runtime ),
	Personality( "Standard Least Squares" ),
	Emphasis( Minimal Report ),
	Run()
);
obj1 << Indiv Confidence Interval;
obj1 << Indiv Confidence Limit Formula;
indiv lcl1 = dt:Name( "Lower 95% Indiv Oxy" ) << get values;
indiv ucl1 = dt:Name( "Upper 95% Indiv Oxy" ) << get values;
indiv lcl2 = dt:Name( "Lower 95% Indiv Oxy 2" ) << get values;
indiv ucl2 = dt:Name( "Upper 95% Indiv Oxy 2" ) << get values;
```

**Code Explanation**:

1. Open data table;
2. Set values for Runtime.
3. Fit model with specified parameters.
4. Enable individual confidence interval.
5. Enable individual confidence limit formula.
6. Retrieve lower 95% individual Oxy values.
7. Retrieve upper 95% individual Oxy values.
8. Retrieve lower 95% individual Oxy 2 values.
9. Retrieve upper 95% individual Oxy 2 values.



### Example 4
> **Summary**: Fits a model to predict Oxy values based on Weight, Sex, MaxPulse, and Runtime variables, with individual confidence intervals and limit formulas.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #IndividualConfidenceIntervals, #ConfidenceLimitFormulas, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Weight << Set Values(
	[68.15, ., 85.84, ., 81.42, 89.02, ., 76.32, 59.08, 77.91, 75.07, 73.37, 73.03, 91.63, ., 73.71, ., 79.15, 81.19, 69.63, 67.25, 66.45,
	79.38, 89.47, 61.24, 77.45, 75.98, 73.37, 91.63, 81.42, 87.66]
);
obj1 = dt << Fit Model(
	Weight( :Weight ),
	Y( :Oxy ),
	Effects( :Sex, :MaxPulse, :Runtime, :Sex * :MaxPulse, ::Runtime * :Runtime ),
	Personality( "Standard Least Squares" ),
	Emphasis( Minimal Report ),
	Run()
);
obj1 << Indiv Confidence Interval;
obj1 << Indiv Confidence Limit Formula;
indiv lcl1 = dt:Name( "Lower 95% Indiv Oxy" ) << get values;
indiv ucl1 = dt:Name( "Upper 95% Indiv Oxy" ) << get values;
indiv lcl2 = dt:Name( "Lower 95% Indiv Oxy 2" ) << get values;
indiv ucl2 = dt:Name( "Upper 95% Indiv Oxy 2" ) << get values;
```

**Code Explanation**:

1. Open data table;
2. Set new weight values.
3. Launch Fit Model platform.
4. Specify Weight as response.
5. Specify Oxy as Y variable.
6. Add effects: Sex, MaxPulse, Runtime, interaction, quadratic term.
7. Use Standard Least Squares personality.
8. Request minimal report.
9. Run the model.
10. Add individual confidence intervals.
11. Add confidence limit formula.
12. Extract Lower 95% Indiv Oxy values.
13. Extract Upper 95% Indiv Oxy values.
14. Extract Lower 95% Indiv Oxy 2 values.
15. Extract Upper 95% Indiv Oxy 2 values.



## Fit Model using Group Columns
> **Summary**: Fits a least squares model to a table, transforming the weight column, and configuring plot options for visualization.

<!-- Keywords: #JMPScriptingLanguage, #LeastSquaresModel, #DataVisualization, #TableAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Group Columns( "Factors", :age, 3 );
New Window( "data_table - Fit Least Squares",
	Fit Model(
		Weight( Transform Column( "Log[weight] 2", Formula( Log( :weight ) ) ) ),
		Y( Transform Column( "Log[weight]", Formula( Log( :weight ) ) ) ),
		Effects,
		Personality( Standard Least Squares ),
		Emphasis( Effect Leverage ),
		Run(
			:Name( "Log[weight]" ) << {Lack of Fit( 0 ), Plot Actual by Predicted( 1 ), Plot Regression( 0 ),
			Plot Residual by Predicted( 1 ), Plot Effect Leverage( 1 )}
		)
	)
) << Move Window( 58, 0 ) << Size Window( 390, 901 ) << Set Window Icon( "Model" );
```

**Code Explanation**:

1. Open table.
2. Group columns.
3. Create new window.
4. Fit least squares model.
5. Transform weight column.
6. Set Y variable.
7. Define effects.
8. Set personality.
9. Set emphasis.
10. Configure plot options.



## Fit Model using JMP Product Name
> **Summary**: Fits a model to data, retrieving dialog reports, and capturing logs in JMP Pro.

<!-- Keywords: #JMPScriptingLanguage, #FitModelDialog, #LogCapture, #ReportRetrieval, #JMPPro -->

**Code**:
```jsl
isPro = (JMP Product Name() == "Pro");
dt = Open("data_table.jmp");
dlg = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Response Screening" ), 
);
dlgrpt = dlg << report;
Try(
	check0 = dlgrpt[Button Box( 1 )] << get button name;
	check1 = dlgrpt[Button Box( 2 )] << get button name;
	check2 = dlgrpt[Button Box( 3 )] << get button name;
	check3 = dlgrpt[Button Box( 4 )] << get button name;
	check4 = dlgrpt[Button Box( 5 )] << get button name;
	check5 = dlgrpt[Button Box( 6 )] << get button name;
	check6 = dlgrpt[TabListBox( 1 )][Tab Page Box( 1 )] << get title;
	check7 = dlgrpt[TabListBox( 1 )][Tab Page Box( 2 )] << get title;
	check8 = dlgrpt[TabListBox( 1 )][Tab Page Box( 2 )][Button Box( 4 )] << get button name;
	check9 = dlgrpt[TabListBox( 1 )][Tab Page Box( 2 )][Text Box( 2 )] << get text;
);
If( IsPro, , );
log1 = Log Capture(
	obj = dt << Fit Model(
		Y( :miles ),
		Effects( :species, :season, :species * :season ),
		Random Effects( :subject[:species] ),
		Personality( "Response Screening" ),
		Run
	)
);
If( IsPro,
	rpt = obj << report;
	title1 = rpt[Outline Box( 1 )] << get title;
	title2 = rpt[Outline Box( 2 )] << get title;
	title3 = rpt[Outline Box( 3 )] << get title;
	title4 = rpt[Outline Box( 4 )] << get title;
	title5 = rpt[Outline Box( 5 )] << get title;
	title6 = rpt[Outline Box( 6 )] << get title;
	title7 = rpt[Outline Box( 7 )] << get title;
, 
);
```

**Code Explanation**:

1. Check if JMP Pro.
2. Open data table;
3. Launch Fit Model dialog.
4. Set response variable to miles.
5. Add species, season, and interaction effects.
6. Define random effects.
7. Use Response Screening personality.
8. Retrieve dialog report.
9. Attempt to get button names and titles.
10. If JMP Pro, fit model and capture log.



## Fit Model using N Items
> **Summary**: Fits a mixed model to a data table, specifying validation grouping and response variable, and saving simulation formulas.

<!-- Keywords: #MixedModel, #SimulationFormula, #DataTable, #JMPScriptingLanguage, #ValidationGrouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ncols1 = N Items( dt << Get Column Names );
obj = dt << Fit Model(
	By( :Validation ),
	Y( :Y ),
	Effects( :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH ),
	Personality( "Mixed Model" ),
	Run( Save Simulation Formula )
);
ncols2 = N Items( dt << Get Column Names );
```

**Code Explanation**:

1. Open data table;
2. Count initial columns.
3. Fit mixed model.
4. Specify validation grouping.
5. Set response variable.
6. Define model effects.
7. Choose mixed model personality.
8. Run model with simulation formula.
9. Save simulation formula.
10. Count final columns.



## Fit Model using Log Capture
### Example 1
> **Summary**: Fits a linear model to predict weight based on age, sex, and height using Standard Least Squares personality.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #StandardLeastSquares, #LinearRegression, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log1 = Log Capture(
	obj = dt << Fit Model( Y( :weight ), Effects( Grouped( :age, :sex, :height ) ), Personality( "Standard Least Squares" ), Run )
);
```

**Code Explanation**:

1. Open data table.
2. Capture log output.
3. Assign data table to variable.
4. Launch Fit Model platform.
5. Set response variable.
6. Define grouped effects.
7. Select Standard Least Squares personality.
8. Execute model fit.



### Example 2
> **Summary**: Fits a model using age vector as the response variable, including height as an effect, and utilizing standard least squares personality.

<!-- Keywords: #JMPScriptingLanguage, #ModelFitting, #StandardLeastSquares, #LogCapture, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture( obj = Fit Model( Y( :age vector ), Effects( height ), Personality( "Standard Least Squares" ), Run ) );
```

**Code Explanation**:

1. Open data table.
2. Capture log output.
3. Fit model using age vector.
4. Include height as effect.
5. Use standard least squares personality.
6. Run the model.



### Example 3
> **Summary**: Fits a random effects model to predict height, with 10 iterations using REML method and standard least squares personality.

<!-- Keywords: #JSLScriptingLanguage, #RandomEffectsModel, #REMLMethod, #StandardLeastSquares, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	For( i = 1, i <= 10, i++,
		obj = Fit Model(
			Y( :height ),
			Random Effects( :name, :age[:name], :sex[:name, :age] ),
			Personality( "Standard Least Squares" ),
			Method( "REML" ),
			NoBounds( 0 ),
			Run
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Start log capture.
3. Loop 10 times.
4. Fit model for height.
5. Specify random effects.
6. Set personality to SLR.
7. Use REML method.
8. Disable bounds.
9. Run the model.
10. End loop.



### Example 4
> **Summary**: Fits a Cox Mixtures model to a data table, capturing log output and specifying effects, personality, and report emphasis.

<!-- Keywords: #CoxMixtures, #JSLScripting, #LogCapture, #ModelFitting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test1 = Log Capture(
	obj = Fit Model(
		Y( :Y ),
		Effects( :p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1, :p3 * :p2 ),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run( Cox Mixtures( p1( 0.6615 ), p2( 0.126 ), p3( 0.2125 ) ) )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Capture log output.
3. Fit model with specified effects.
4. Set personality to Standard Least Squares.
5. Emphasize minimal report.
6. Run Cox Mixtures analysis.
7. Specify p1 value.
8. Specify p2 value.
9. Specify p3 value.



### Example 5
> **Summary**: Fits a linear model to a data table, capturing log output and including effects for age, sex, their interaction, and quadratic terms.

<!-- Keywords: #JSLScriptingLanguage, #LinearModel, #LogCapture, #DataFitting, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log1 = Log Capture( dt << Fit Model( Y( :weight ), Effects( :age, :sex, :age * :sex, :age * :age, :sex * :sex ), Run ) );
```

**Code Explanation**:

1. Open data table;
2. Capture log output.
3. Fit model to data.
4. Set response variable to weight.
5. Include age effect.
6. Include sex effect.
7. Include interaction age*sex.
8. Include quadratic age term.
9. Include quadratic sex term.
10. Run the model.



### Example 6
> **Summary**: Fits a Cox mixture model to data, capturing log information and generating a minimal report, while also fitting a separate linear regression model for height with sex and age interactions.

<!-- Keywords: #CoxMixtureModel, #LinearRegression, #JMPScriptingLanguage, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test1 = Log Capture(
	obj = Fit Model(
		Y( :Y ),
		Effects( :p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1, :p3 * :p2 ),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run( Cox Mixtures( p1( 0.6615 ), p2( 0.126 ), p3( 0.2125 ) ) )
	)
);
Close( dt, no save );
dt = Open("data_table.jmp");
obj1 = dt << Fit Model(
	Y( :height ),
	Effects( :sex, :age, :age * :sex ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run()
);
rpt1 = Report( obj1 );
title1 = "";
Try( title1 = rpt1[Outline Box( "Whole Model" )][Outline Box( "Contour Profiler" )] << get title );
```

**Code Explanation**:

1. Open data table;
2. Capture log for Fit Model.
3. Fit model with specified effects.
4. Use Standard Least Squares personality.
5. Create minimal report.
6. Run Cox Mixtures with given parameters.
7. Close data_table dataset without saving.
8. Open data table;
9. Fit model for height with sex and age.
10. Include interaction between age and sex.



### Example 7
> **Summary**: Fits a linear model to a data table, capturing log output and performing a Durbin-Watson test.

<!-- Keywords: #JSLScripting, #LinearModel, #DurbinWatsonTest, #LogCapture, #FitModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log1 = Log Capture(
	obj = dt << Fit Model(
		Freq( :age ),
		Y( :weight ),
		Effects( :sex, :height ),
		Personality( "Standard Least Squares" ),
		Emphasis( Effect Leverage ),
		Set Alpha Level( 0.05 ),
		Run( :weight << {Durbin Watson Test( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Capture log output.
3. Start Fit Model.
4. Use age as frequency.
5. Set weight as response.
6. Include sex and height effects.
7. Choose Standard Least Squares personality.
8. Focus on effect leverage.
9. Set alpha level to 0.05.
10. Run Durbin-Watson test.



### Example 8
> **Summary**: Fits a mixed model to analyze spatial relationships in data, utilizing repeated effects and a spherical structure.

<!-- Keywords: #MixedModel, #SpatialAnalysis, #RepeatedEffects, #SphericalStructure, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log1 = Log Capture(
	obj = dt << Fit Model(
		Y( :Yield ),
		Effects,
		Center Polynomials( 0 ),
		Personality( "Mixed Model" ),
		Repeated Effects( :Row, :Column ),
		Repeated Structure( "Spatial with Nugget" ),
		Repeated Structure Type( "Spherical" ),
		Run( Random Effects Covariance Parameter Estimates( 0 ), Empirical Standard Errors( 1 ), Containment Degrees of Freedom( 1 ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Start log capture.
3. Fit mixed model.
4. Specify response variable.
5. Define effects.
6. Set polynomial centering.
7. Choose mixed model personality.
8. Define repeated effects.
9. Set spatial structure.
10. Configure spherical structure.



### Example 9
> **Summary**: Runs the fitting and prediction of a mixed model with spatial anisotropic repeated structure, extracting fit statistics from the report.

<!-- Keywords: #JMPScriptingLanguage, #MixedModel, #SpatialAnalysis, #RepeatedMeasures, #FitStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	obj1 = dt << Fit Model(
		Y( :Y ),
		Center Polynomials( 0 ),
		Repeated Effects( :log10 Rw, :log10 R, :Tu, :Tl, :Hu, :Hl, :L, :Kw ),
		Repeated Structure( Spatial Anisotropic ),
		Repeated Structure Type( Spherical ),
		Personality( "Mixed Model" ),
		Run
	)
);
obj1 << Prediction Formula( 1 );
Log Capture(
	obj2 = dt << Fit Model(
		Y( :Pred Formula Y ),
		Center Polynomials( 0 ),
		Repeated Effects( :log10 Rw, :log10 R, :Tu, :Tl, :Hu, :Hl, :L, :Kw ),
		Repeated Structure( Spatial Anisotropic ),
		Repeated Structure Type( Spherical ),
		Personality( "Mixed Model" ),
		Run()
	)
);
rpt2 = obj2 << report;
fitstat = rpt2[Outline Box( "Fit Statistics" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Start log capture.
3. Fit mixed model.
4. Set prediction formula.
5. Start another log capture.
6. Fit model with prediction.
7. Retrieve report object.
8. Extract fit statistics table.
9. Convert table to matrix.



### Example 10
> **Summary**: Fits a mixed model to a data table, capturing log information and extracting relevant statistics, covariance parameters, and correlations.

<!-- Keywords: #JMPScriptingLanguage, #MixedModel, #LogCapture, #CovarianceParameters, #FixedEffects -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	obj1 = dt << Fit Model(
		Y( :Y ),
		Center Polynomials( 0 ),
		Repeated Effects( :log10 Rw, :log10 R, :Tu, :Tl, :Hu, :Hl, :L, :Kw ),
		Repeated Structure( Spatial Anisotropic ),
		Repeated Structure Type( Spherical ),
		Personality( "Mixed Model" ),
		Run()
	)
);
rpt1 = Report( obj1 );
Try( text = rpt1[Outline Box( "Fit Statistics" )][Text Box( 1 )] << get text );
fitstat = rpt1[Outline Box( "Fit Statistics" )][Table Box( 1 )] << get as matrix;
covparm = rpt1[Outline Box( "Repeated Effects Covariance Parameter Estimates" )][Table Box( 1 )] << get as matrix;
obj1 << Covariance of Fixed Effects( 1 );
cov fixed = rpt1[Outline Box( "Covariance of Fixed Effects" )][Matrix Box( 1 )] << get;
obj1 << Covariance of Covariance Parameters( 1 );
cov covparm = rpt1[Outline Box( "Covariance of Covariance Parameters" )][Matrix Box( 1 )] << get;
obj1 << Covariance of All Parameters( 1 );
cov all = rpt1[Outline Box( "Covariance of All Parameters" )][Matrix Box( 1 )] << get;
obj1 << Correlation of Fixed Effects( 1 );
corr fixed = rpt1[Outline Box( "Correlation of Fixed Effects" )][Matrix Box( 1 )] << get;
obj1 << Mean Confidence Interval( 1 );
mean ci = (dt:Lower 95% Mean Y << get values) || (dt:Upper 95% Mean Y << get values);
```

**Code Explanation**:

1. Open table.
2. Fit mixed model.
3. Capture log.
4. Extract report.
5. Get fit statistics text.
6. Extract fit statistics matrix.
7. Extract covariance parameter estimates matrix.
8. Enable covariance of fixed effects.
9. Extract covariance of fixed effects matrix.
10. Enable covariance of covariance parameters.



### Example 11
> **Summary**: Fits a linear model to predict Stretch values based on Silica and Sulfur * Silane interactions, suppressing missing effects warnings.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #ModelFitting, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
Open("data_table.jmp");
log1 = Log Capture(
	obj = dt << Fit Model(
		Y( :Stretch ),
		Effects( :Silica, :Sulfur * :Silane ),
		Suppress Warning for Missing Effects( 1 ),
		Personality( "Standard Least Squares" ),
		Run
	)
);
```

**Code Explanation**:

1. Open data table;
2. Capture log output.
3. Start fitting model.
4. Set response variable.
5. Define effect terms.
6. Suppress missing effects warning.
7. Choose personality method.
8. Execute model fit.
9. End log capture.
10. Store results.



### Example 12
> **Summary**: Fits a model to predict Stretch based on Silica, Sulfur, and Silane variables in a data table, suppressing missing effects warnings and using Stepwise personality.

<!-- Keywords: #JSLScripting, #FitModel, #StepwisePersonality, #SuppressWarning, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log1 = Log Capture(
	obj = dt << Fit Model(
		Y( :Stretch ),
		Effects( :Silica, :Sulfur * :Silane ),
		Suppress Warning for Missing Effects( 1 ),
		Personality( "Stepwise" ),
		Run
	)
);
```

**Code Explanation**:

1. Open data table.
2. Capture log output.
3. Launch Fit Model dialog.
4. Set response variable.
5. Define model effects.
6. Suppress missing effects warning.
7. Choose Stepwise personality.
8. Execute the model fit.



### Example 13
> **Summary**: Fits a model to a data table, capturing log output, and suppressing missing effect warnings.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #LogCapture, #SuppressMissingEffects, #ResponseScreening -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log1 = Log Capture(
	obj = dt << Fit Model(
		Y( :Stretch ),
		Effects( :Silica, :Sulfur * :Silane ),
		Suppress Warning for Missing Effects( 1 ),
		Personality( "Response Screening" ),
		Run
	)
);
```

**Code Explanation**:

1. Open data table.
2. Capture log output.
3. Launch Fit Model dialog.
4. Set response variable.
5. Add effects to model.
6. Suppress missing effect warnings.
7. Choose Response Screening personality.
8. Run the model.



### Example 14
> **Summary**: Fits a mixed model to a data table, capturing log output and suppressing missing effects warnings.

<!-- Keywords: #JSLScriptingLanguage, #MixedModel, #DataTable, #LogCapture, #SuppressWarning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log1 = Log Capture(
	obj = dt << Fit Model(
		Y( :Stretch ),
		Effects( :Silica, :Sulfur * :Silane ),
		Suppress Warning for Missing Effects( 1 ),
		Personality( "Mixed Model" ),
		Run
	)
);
```

**Code Explanation**:

1. Open data table.
2. Capture log output.
3. Launch Fit Model dialog.
4. Set response variable.
5. Add main effects.
6. Add interaction effect.
7. Suppress missing effects warning.
8. Set model personality.
9. Run the model.
10. Close log capture.



### Example 15
> **Summary**: Fits a Partial Least Squares model to predict Stretch based on Silica, Sulfur, and Silane variables in a data table.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #DataTable, #ModelFitting, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log1 = Log Capture(
	obj = dt << Fit Model(
		Y( :Stretch ),
		Effects( :Silica, :Sulfur * :Silane ),
		Suppress Warning for Missing Effects( 1 ),
		Personality( "Partial Least Squares" ),
		Run( Fit )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Capture log output.
3. Initiate Fit Model platform.
4. Set response variable.
5. Define model effects.
6. Suppress missing effects warning.
7. Choose Partial Least Squares personality.
8. Execute model fit.



### Example 16
> **Summary**: Fits a standard least squares model to predict Weight, incorporating interactions between Age, Oxy1, and Runtime1.

<!-- Keywords: #JSLScripting, #FitModel, #StandardLeastSquares, #LogCapture, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture( dt << Fit Model( Y( :Weight ), Effects( :Age, :Oxy1[:Age], :Runtime1[:Age] ), Personality( Standard Least Squares ), Run() ) );
```

**Code Explanation**:

1. Open data table;
2. Start Log Capture.
3. Initiate Fit Model dialog.
4. Set response variable to Weight.
5. Add Age effect.
6. Add interaction: Oxy1 and Age.
7. Add interaction: Runtime1 and Age.
8. Select Standard Least Squares personality.
9. Run the model.
10. End Log Capture.



### Example 17
> **Summary**: Fits a model to predict weight based on age, sex, and their interactions, capturing log output and checking for error messages.

<!-- Keywords: #JMPScriptingLanguage, #ModelFitting, #LogCapture, #ErrorHandling, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log1 = Log Capture( dt << Fit Model( Y( :weight ), Effects( :age, :sex, :age * :sex, :age * :age, :sex * :sex ), Run ) );
Close( dt, no save );
b log1 = "Random or secondary effects specified in a fitting personality that does not support them";
```

**Code Explanation**:

1. Open data table;
2. Capture log output.
3. Fit model with weight as response.
4. Include age, sex, and interaction terms.
5. Run the model.
6. Close dataset without saving.
7. Check for error message.



### Example 18
> **Summary**: Fits a model to predict weight based on age, sex, and height, capturing log output with Super Duper personality.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #ModelFitting, #LogCapture, #SuperDuperPersonality -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log1 = Log Capture( obj = dt << Fit Model( Y( :weight ), Effects( :age, :sex, :height ), Personality( "Super Duper" ), Run() ) );
```

**Code Explanation**:

1. Open data table;
2. Capture log output.
3. Fit model with weight as response.
4. Include age, sex, height as effects.
5. Use Super Duper personality.
6. Run the model.



### Example 19
> **Summary**: Opens a data table and captures log messages during mixed model fit execution in JMP Pro.

<!-- Keywords: #JMPPro, #MixedModel, #LogCapture, #DataTable, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
b log1 = "The fitting personality \!"Mixed Model\!" is available only in JMP Pro";
log1 = Log Capture( obj = dt << Fit Model( Y( :weight ), Effects( :age, :sex, :height ), Personality( "Mixed Model" ), Run() ) );
```

**Code Explanation**:

1. Open data table.
2. Define mixed model log message.
3. Capture log during fit model execution.



### Example 20
> **Summary**: Fits a Partial Least Squares model to a data table, capturing log output and displaying a message about the available personality.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #DataTable, #LogCapture, #ModelFitting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
b log1 = "The fitting personality \!"Partial Least Squares\!" is available only in JMP Pro";
log1 = Log Capture( obj = dt << Fit Model( Y( :weight ), Effects( :age, :sex, :height ), Personality( "Partial Least Squares" ), Run() ) );
```

**Code Explanation**:

1. Open data table.
2. Define log message.
3. Capture log output.



### Example 21
> **Summary**: Fits a linear model to a data table, capturing log output, and extracting effect tests.

<!-- Keywords: #JSLScripting, #LinearModel, #DataTable, #LogCapture, #EffectTests -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log1 = Log Capture(
	obj = dt << Fit Model(
		Y( :weight ),
		Effects( :age, :height, :age * :age, :age * :height, :height * :height ),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		Run
	)
);
rpt = obj << report;
effect list = rpt["Effect Tests"][String Col Box( 1 )] << get;
```

**Code Explanation**:

1. Open data table;
2. Capture log output.
3. Fit model with specified effects.
4. Use standard least squares personality.
5. Generate minimal report.
6. Run the model.
7. Retrieve report object.
8. Extract effect tests section.
9. Get string column box content.
10. Assign to effect list variable.



### Example 22
> **Summary**: Fits a Partial Least Squares model to a data table, capturing log information and specifying response variables and effects.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #DataModeling, #LogCapture, #FitModel -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1:v1[1 :: 16] = .;
log1 = Log Capture(
	obj = dt1 << Fit Model(
		Y( :ls, :ha, :dt ),
		Effects( :v1, :V2, :v3 ),
		Personality( "Partial Least Squares" ),
		Impute Missing Data( 1 ),
		Run( Validation Method( "None" ), Fit )
	)
);
Close( dt1, no save );
Try( Window( "Report: Fit Model" ) << close window( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Set first 16 values of v1 to missing.
3. Start log capture.
4. Launch Fit Model platform.
5. Specify response variables: ls, ha, dt.
6. Add effects: v1, V2, v3.
7. Choose Partial Least Squares personality.
8. Enable missing data imputation.
9. Run model without validation.
10. Close dataset without saving.
11. Attempt to close Fit Model report window.



### Example 23
> **Summary**: Fits a Partial Least Squares model to predict ls, ha, and dt using v1, V2, and v3 as effects, with missing data imputation and no validation.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #MissingDataImputation, #ModelFitting, #LogCapture -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1:v1[1 :: 16] = .;
log1 = Log Capture(
	obj = dt1 << Fit Model(
		Y( :ls, :ha, :dt ),
		Effects( :v1, :V2, :v3 ),
		Personality( "Partial Least Squares" ),
		Impute Missing Data( 1 ),
		Run( Validation Method( "None" ), Fit )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Set first 16 values of v1 to missing.
3. Capture log output.
4. Fit model with ls, ha, dt as Y.
5. Include v1, V2, v3 as effects.
6. Use Partial Least Squares personality.
7. Enable missing data imputation.
8. Run model without validation.
9. Perform fit operation.
10. End log capture.



### Example 24
> **Summary**: Fits a radial model to population data, incorporating random effects and standard least squares personality.

<!-- Keywords: #JMPScriptingLanguage, #RadialModel, #RandomEffects, #StandardLeastSquares, #REMLMethod -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log1 = Log Capture(
	fm = Fit Model( Y( :pop ), Effects( Radial( :year ) & Random ), Personality( Standard Least Squares ), Method( REML ), Run )
);
```

**Code Explanation**:

1. Open data table;
2. Capture log output.
3. Define Fit Model object.
4. Set response variable to population.
5. Specify radial effect for year.
6. Include random effects.
7. Use standard least squares personality.
8. Apply REML method.
9. Execute model fitting.
10. Store results in fm variable.



### Example 25
> **Summary**: Fits a radial model to data, capturing log output, and creating SAS jobs from the fit model and its report.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #SASJob, #LogCapture, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log1 = Log Capture( fm = Fit Model( Y( :height ), Effects( Radial( :weight ) & Random ) ) );
fm << Create SAS Job;
s1 = Concat Items( (Window( "data_tableModel" )[Script Box( 1 )] << Get lines)[46 :: 49], "\!N" );
Window( "data_tableModel" ) << close window;
ls = fm << Run;
ls << Model Dialog;
dlg = Window( "Report: Fit Model" );
obj = dlg["Model Specification"] << get scriptable object;
obj << Create SAS Job;
s2 = Concat Items( (Window( "data_tableModel" )[Script Box( 1 )] << Get lines)[46 :: 49], "\!N" );
Window( "data_tableModel" ) << close window;
```

**Code Explanation**:

1. Open data table;
2. Fit model with height as response.
3. Capture log output.
4. Create SAS job from fit model.
5. Extract specific lines from log.
6. Close model window.
7. Run fit model.
8. Open model dialog.
9. Access report window.
10. Create SAS job from report.



### Example 26
> **Summary**: Fits a model with multiple effects to predict NPN1, utilizing stepwise personality and running all possible models.

<!-- Keywords: #JMPScriptingLanguage, #LogCapture, #StepwisePersonality, #AllPossibleModels, #ModelFitting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log1 = Log Capture(
	Fit Model(
		Y( :NPN1 ),
		Effects(
			:PNP1, :PNP2, :NPN2, :PNP3, :IVP1, :PNP4, :NPN3, :IVP2, :NPN4, :SIT1, :INM1, :INM2, :VPM1, :VPM2, :VPM3, :PMS1, :SNM1, :SPM1,
			:NPN5, :EP2, :ZD6, :PBA, :PLG, :CAP, :PBA 2, :PLG 2, :PNP5, :NPN6, :PNP6, :PNP7, :NPN7, :PNP8, :IVP3, :IVP4, :IVP5, :IVP6,
			:PNP9, :NPN8, :NPN9, :IVP7, :NPN10, :N_1, :PBA1, :WPR1, :B10, :PLY10, :VBE210, :VTN210, :VTP210, :SIT2, :SIT3, :INV2, :INV3,
			:INV4, :INV5, :FST1, :FST2, :RES1, :RES2, :PNM1, :PPM1, :FNM1, :FPM1, :FST3, :FST4, :RES3, :RES4, :A1, :B1, :A2N, :A2P, :A2P1,
			:IVP8, :IVP9, :DE_H1, :NF_H1, :ESM1, :ESM2, :ESP1, :YFU1, :VPM4, :PBA2, :PBB1, :LYA1, :LYB1, :DEM1, :DEP1, :NFM1
		),
		Personality( "Stepwise" ),
		Run( All Possible Models( 4, 56 ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Start log capture.
3. Fit model with NPN1 as response.
4. Include multiple effects.
5. Use stepwise personality.
6. Run all possible models.
7. Specify minimum terms.
8. Specify maximum terms.
9. End log capture.



### Example 27
> **Summary**: Creates a new column, random assignment of integers, and execution of a Fit Model with Stepwise personality in JMP.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #StepwisePersonality, #RandomAssignment, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
log1 = Log Capture(
	dt << New Column( "Validation", formula( Random Integer( 1, 5 ) ) );
	Fit Model( Validation( :Validation ), Y( :sex ), Effects( :height, :weight ), Personality( "Stepwise" ), Run );
);
```

**Code Explanation**:

1. Open data table;
2. Create new column "Validation".
3. Assign random integers to "Validation".
4. Start Fit Model.
5. Set validation method.
6. Specify response variable.
7. Add effects: height, weight.
8. Choose Stepwise personality.
9. Run the model.
10. Capture log output.



### Example 28
> **Summary**: Analyze recurring events in a data table, capturing log output and fitting a power nonhomogeneous Poisson process model to identify patterns.

<!-- Keywords: #JMPScriptingLanguage, #RecurrenceAnalysis, #LogCapture, #PowerNonhomogeneousPoissonProcess, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
lcap = Log Capture(
	obj = dt << Recurrence Analysis(
		Y( :event time ),
		Label( :System ID ),
		Grouping( :System ID ),
		Timestamp at Start( :orig time ),
		Age Scaling( "DateTime to Hour" ),
		Default End Timestamp( "04Dec1994 2:20 AM" ),
		Fit Model( Scale Effects( :System ID ), Run Model, Model Type( Power Nonhomogeneous Poisson Process ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Capture log output.
3. Perform recurrence analysis.
4. Set response variable.
5. Assign system labels.
6. Group by system ID.
7. Define start timestamp.
8. Scale age to hours.
9. Set default end timestamp.
10. Fit power nonhomogeneous Poisson process model.



### Example 29
> **Summary**: Analyze a data table using recurrence analysis, capturing log events and fitting a Power Nonhomogeneous Poisson Process model.

<!-- Keywords: #JMPScriptingLanguage, #RecurrenceAnalysis, #LogCapture, #PowerNonhomogeneousPoissonProcess, #DataTableAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
lCap = Log Capture(
	obj1 = dt << Recurrence Analysis(
		Y( :Age ),
		Cost( :Cost ),
		Label( :EngineID ),
		Event Plot( 0 ),
		Fit Model( Run Model, Model Type( Power Nonhomogeneous Poisson Process ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Begin log capture.
3. Launch recurrence analysis.
4. Set Y variable to Age.
5. Set Cost variable to Cost.
6. Set Label variable to EngineID.
7. Disable event plot.
8. Fit model using Power Nonhomogeneous Poisson Process.



### Example 30
> **Summary**: Analyze a table by performing recurrence analysis, setting response and label variables, and fitting a loglinear nonhomogeneous Poisson process model.

<!-- Keywords: #JSLScriptingLanguage, #RecurrenceAnalysis, #LogCapture, #LoglinearModel, #PoissonProcess -->

**Code**:
```jsl
dt = Open("data_table.jmp");
lCap = Log Capture(
	obj1 = dt << Recurrence Analysis(
		Y( :Age ),
		Label( :EngineID ),
		Cost( :Cost ),
		Event Plot( 0 ),
		Fit Model( Run Model, Model Type( "Loglinear Nonhomogeneous Poisson Process" ) )
	)
);
```

**Code Explanation**:

1. Open table.
2. Create log capture.
3. Perform recurrence analysis.
4. Set response variable.
5. Set label variable.
6. Set cost variable.
7. Disable event plot.
8. Fit loglinear model.



### Example 31
> **Summary**: Fits a linear model to a data table, generating a surface profiler and redoing analysis with emphasis on effect screening.

<!-- Keywords: #JMPScriptingLanguage, #LinearModel, #SurfaceProfiler, #EffectScreening, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	obj = dt << Fit Model(
		Y( :Number Popped, :Total Kernels ),
		Effects( :Brand, :Time, :Power, :Brand * :Time, :Brand * :Power, :Time * :Power, :Time * :Time, :Power * :Power ),
		Personality( "Standard Least Squares" ),
		Emphasis( "Effect Screening" ),
		Run
	)
);
obj << Surface Profiler;
Log Capture( obj << Redo Analysis );
```

**Code Explanation**:

1. Open data table.
2. Start log capture.
3. Fit linear model.
4. Specify response variables.
5. Define model effects.
6. Set personality to least squares.
7. Emphasize effect screening.
8. Run the analysis.
9. Stop log capture.
10. Create surface profiler.
11. Redo analysis.



### Example 32
> **Summary**: Analyze and visualize a nominal logistic model to predict readiness, utilizing profiler reports and probability formulas.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticModel, #ProfilerReports, #ProbabilityFormulas, #DataAnalysis -->

**Code**:
```jsl
ut relative epsilon = 1e-2;
dt = Open("data_table.jmp");
Log Capture( dt << New Column( "ReadyOld", Character, Nominal, Formula( If( :ready == "Not Ready", 1, 0 ) ) ) );
dt:ReadyOld << Delete Formula;
obj = dt << Fit Model( Freq( :count ), Y( :ReadyOld ), Effects( :heat, :soak ), Personality( "Nominal Logistic" ), Run Model );
obj << Save Probability Formula;
Log Capture(
	obj = dt << Profiler(
		Y( :Name( "Prob[0]" ), :Name( "Prob[1]" ), :Most Likely ReadyOld ),
		Profiler( 1, Term Value( heat( 50 ), soak( 2.5 ) ) ),
		Expand,
		SendToReport(
			Dispatch( {"Prediction Profiler"}, "2", ScaleBox, {Min( 0 ), Max( 60 ), Inc( 10 ), Rotated Labels( 1 )} ),
			Dispatch( {"Prediction Profiler"}, "1", ScaleBox, {Max( 100 ), Inc( 20 ), Minor Ticks( 0 ), Rotated Labels( 1 )} )
		)
	)
);
indicator = Is Scriptable( obj );
formLin = Column( "Lin[1]" ) << get formula;
formProb0 = Column( "Prob[0]" ) << get formula;
formProb1 = Column( "Prob[1]" ) << get formula;
Substitute Into( formLin, Expr( :heat ), Expr( x1 ), Expr( :soak ), Expr( x2 ) );
Substitute Into( formProb0, Expr( :Name( "Lin[1]" ) ), Expr( LinValue ) );
Substitute Into( formProb1, Expr( :Name( "Lin[1]" ) ), Expr( LinValue ) );
nTest = 10;
For( i = 1, i <= nTest, i++,
	x1 = Random Uniform( 40, 80 );
	x2 = Random Uniform( 5, 15 );
	obj << Profiler( Term Value( heat( x1, Max( 80 ) ), soak( x2, Max( 15 ) ) ) );
	rpt = obj << report;
	observedLike = Num( rpt[Text Box( 3 )] << get text );
	LinValue = Eval( formLin );
	expProb0 = Eval( formProb0 );
	expProb1 = Eval( formProb1 );
	expLike = Match( Max( expProb0, expProb1 ), expProb0, 0, expProb1, 1, . );
);
```

**Code Explanation**:

1. Set relative epsilon.
2. Open data table.
3. Create new column "ReadyOld".
4. Remove formula from "ReadyOld".
5. Fit nominal logistic model.
6. Save probability formula.
7. Generate profiler report.
8. Check scriptability of profiler.
9. Retrieve formulas for columns.
10. Substitute variables in formulas.



### Example 33
> **Summary**: Creates and analyzes a nominal logistic model, generating a profiler report with predicted probabilities and observed likelihoods.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #ProfilerReport, #PredictiveModeling, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture( dt << New Column( "ReadyOld", Character, Nominal, Formula( If( :ready == "Not Ready", 1, 0 ) ) ) );
dt:ReadyOld << Delete Formula;
obj = dt << Fit Model( Freq( :count ), Y( :ReadyOld ), Effects( :heat, :soak ), Personality( "Nominal Logistic" ), Run Model );
obj << Save Probability Formula;
Log Capture(
	obj = dt << Profiler(
		Y( :Name( "Prob[0]" ), :Name( "Prob[1]" ), :Most Likely ReadyOld ),
		Profiler( 1, Term Value( heat( 50 ), soak( 2.5 ) ) ),
		Expand,
		SendToReport(
			Dispatch( {"Prediction Profiler"}, "2", ScaleBox, {Min( 0 ), Max( 60 ), Inc( 10 ), Rotated Labels( 1 )} ),
			Dispatch( {"Prediction Profiler"}, "1", ScaleBox, {Max( 100 ), Inc( 20 ), Minor Ticks( 0 ), Rotated Labels( 1 )} )
		)
	)
);
indicator = Is Scriptable( obj );
formLin = Column( "Lin[1]" ) << get formula;
formProb0 = Column( "Prob[0]" ) << get formula;
formProb1 = Column( "Prob[1]" ) << get formula;
Substitute Into( formLin, Expr( :heat ), Expr( x1 ), Expr( :soak ), Expr( x2 ) );
Substitute Into( formProb0, Expr( :Name( "Lin[1]" ) ), Expr( LinValue ) );
Substitute Into( formProb1, Expr( :Name( "Lin[1]" ) ), Expr( LinValue ) );
nTest = 10;
For( i = 1, i <= nTest, i++,
	x1 = Random Uniform( 40, 80 );
	x2 = Random Uniform( 5, 15 );
	obj << Profiler( Term Value( heat( x1, Max( 80 ) ), soak( x2, Max( 15 ) ) ) );
	rpt = obj << report;
	observedLike = Num( rpt[Text Box( 3 )] << get text );
	LinValue = Eval( formLin );
	expProb0 = Eval( formProb0 );
	expProb1 = Eval( formProb1 );
	expLike = Match( Max( expProb0, expProb1 ), expProb0, 0, expProb1, 1, . );
);
```

**Code Explanation**:

1. Open data table;
2. Create new column "ReadyOld".
3. Delete formula from "ReadyOld".
4. Fit nominal logistic model.
5. Save probability formula.
6. Create profiler report.
7. Check if object is scriptable.
8. Get formulas for columns.
9. Substitute variables in formulas.
10. Perform tests with random values.



### Example 34
> **Summary**: Runs a recurrence analysis on the provided data table, utilizing the Proportional Intensity Poisson Process model to analyze Age and Cost variables, with interactive features for grouping by Treatment Group and labeling by Patient Number.

<!-- Keywords: #JSL, #RecurrenceAnalysis, #PoissonProcess, #DataVisualization, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Log Capture(
	obj = dt << Recurrence Analysis(
		Y( :Age ),
		Cost( :Cost ),
		Event Plot( 0 ),
		Grouping( :Treatment Group ),
		Label( :Patient Number ),
		Fit Model(
			Scale Effects( :Treatment Group, :Initial Number of Tumors, :Initial Size of Tumors ),
			Run Model,
			Model Type( Proportional Intensity Poisson Process ),
			Save Intensity Formula( 1 ),
			Save Cumulative Formula( 1 ),
			Profiler( 1 )
		)
	)
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

1. Open data table;
2. Perform recurrence analysis.
3. Set Y variable as Age.
4. Include Cost variable.
5. Disable event plot.
6. Group by Treatment Group.
7. Label by Patient Number.
8. Fit proportional intensity Poisson process model.
9. Save intensity formula.
10. Save cumulative formula.
11. Enable profiler.
12. Retrieve prediction profiler report.
13. Get prediction profiler scriptable object.
14. Randomly select input method for profiler.



### Example 35
> **Summary**: Runs time series forecasting and analysis by capturing logs, performing forecasts, and adding a new column in JMP.

<!-- Keywords: #JMPScriptingLanguage, #TimeSeriesForecasting, #LogCapture, #DataAnalysis, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select rows( 1 :: 8977 );
dt << delete  rows;
log1 = Log Capture(
	dt << Time Series Forecast(
		Y( :Y ),
		Grouping( :Series ),
		Time( :Time ),
		Fit Model(
			NAhead( 8 ),
			NHoldout( 8 ),
			Other Options(
				Preserve Model Selection Criterion( 0 ),
				Forecast Interval Level( 0.95 ),
				Imputation for Applicable Models( "None" )
			)
		)
	)
);
log2 = Log Capture( dt << Time Series( Y( :Y ), Time( :Time ), ) );
Close( dt, no save );
dt = Open("data_table.jmp");
dt << New Column( "missing", numeric );
For( i = 1, i <= 30, i++,
	obj2 = dt << Time Series Forecast(
		Y( :missing ),
		Grouping( :Series ),
		Time( :Time ),
		Fit Model(
			NAhead( 8 ),
			NHoldout( 8 ),
			Other Options(
				Preserve Model Selection Criterion( 0 ),
				Forecast Interval Level( 0.95 ),
				Imputation for Applicable Models( "None" )
			)
		)
	);
	obj2 << close window;
);
```

**Code Explanation**:

1. Open data table.
2. Select specific rows.
3. Delete selected rows.
4. Capture log of time series forecast.
5. Perform time series analysis.
6. Capture another log of time series.
7. Close data table without saving.
8. Reopen data table.
9. Add new column "missing".
10. Loop to perform time series forecast 30 times.



## Fit Model using N Cols
### Example 1
> **Summary**: Fits a linear model to predict ABRASION values based on SILICA, SILANE, and SULFUR variables, with Standard Least Squares personality and minimal report emphasis.

<!-- Keywords: #JMPScriptingLanguage, #LinearModel, #PredictiveAnalytics, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtncols = N Cols( dt );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Predicted Values( 1 );
obj << StdErr Pred Formula( 1 );
obj << StdErr Pred Formula( 1 );
obj << StdErr Pred Formula( 1 );
obj << StdErr Pred Formula( 1 );
obj << StdErr Pred Formula( 1 );
obj << StdErr Pred Formula( 1 );
obj << StdErr Pred Formula( 1 );
obj << StdErr Pred Formula( 1 );
obj << Predicted Values( 1 );
obj << Predicted Values( 1 );
obj << StdErr Pred Formula( 1 );
obj << StdErr Pred Formula( 1 );
obj << StdErr Pred Formula( 1 );
obj << StdErr Pred Formula( 1 );
obj << StdErr Pred Formula( 1 );
obj << StdErr Pred Formula( 1 );
obj << StdErr Pred Formula( 1 );
obj << StdErr Pred Formula( 1 );
dtcols = dt << get column names;
Remove From( dtcols, 1, dtncols );
```

**Code Explanation**:

1. Open data table;
2. Count number of columns.
3. Fit linear model.
4. Set response variable ABRASION.
5. Include predictors SILICA, SILANE, SULFUR.
6. Use Standard Least Squares personality.
7. Minimal report emphasis.
8. Run the model.
9. Add predicted values.
10. Add standard error formulas multiple times.



### Example 2
> **Summary**: Analyzes and creates reports for recurrence models for multiple causes, including intensity and cumulative formulas, using JMP's Recurrence Analysis platform.

<!-- Keywords: #JMPRecurrenceAnalysis, #ScriptingLanguage, #DataAnalysis, #StatisticalModeling, #CauseSpecificReporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nCol = N Cols( dt );
obj = dt << Recurrence Analysis(
	Y( :Age ),
	Label( :Patient Number ),
	Cost( :Cost ),
	Cause( :Cause of Death ),
	Fit Model( Run Model, Model Type( Power Nonhomogeneous Poisson Process ) )
);
rpt = obj << report;
scptObj = rpt[Outline Box( "Multiple Cause Models" )] << get scriptable object;
scptObj1 = rpt[Outline Box( "Fitted Recurrence Model Cause=Alive" )] << get scriptable object;
scptObj2 = rpt[Outline Box( "Fitted Recurrence Model Cause=Bladder Cancer" )] << get scriptable object;
scptObj3 = rpt[Outline Box( "Fitted Recurrence Model Cause=Other Cause" )] << get scriptable object;
scptObj << Save Intensity Formula;
scptObj1 << Save Intensity Formula;
scptObj2 << Save Intensity Formula;
scptObj3 << Save Intensity Formula;
_mat = dt << get as matrix( {nCol + 1 :: (nCol + 4)} );
dt << delete Columns( {nCol + 1 :: (nCol + 4)} );
scptObj << Save Cumulative Formula;
scptObj1 << Save Cumulative Formula;
scptObj2 << Save Cumulative Formula;
scptObj3 << Save Cumulative Formula;
_mat1 = dt << get as matrix( {nCol + 1 :: (nCol + 4)} );
```

**Code Explanation**:

1. Open data table;
2. Count number of columns.
3. Perform Recurrence Analysis.
4. Extract report from analysis.
5. Get scriptable object for multiple causes.
6. Get scriptable object for cause 'Alive'.
7. Get scriptable object for cause 'Bladder Cancer'.
8. Get scriptable object for cause 'Other Cause'.
9. Save intensity formula for each cause.
10. Delete added columns.



## Fit Model using For Each Row
### Example 1
> **Summary**: Fits a model to a data table, including transforming columns, specifying effects, and configuring model settings, while also generating profiler plots and retrieving effect details.

<!-- Keywords: #JSLScriptingLanguage, #DataAnalysis, #ModelFitting, #ProfilerPlots, #EffectDetails -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For Each Row( :Damping = 10 * :Damping );
dt << New Column( "LogDamping", continus, formula( Log( :Damping ) ) );
obj1 = dt << Fit Model(
	Transform Column( "Log[Damping]", Formula( Log( :Damping ) ) ),
	Y( :"Log[Damping]"n ),
	Effects(
		:CuSO4 & RS & Mixture, :Na2S2O3 & RS & Mixture, :Glyoxal & RS & Mixture, :CuSO4 * :Na2S2O3, :CuSO4 * :Glyoxal, :CuSO4 * :Wavelength,
		:Na2S2O3 * :Glyoxal, :Na2S2O3 * :Wavelength, :Glyoxal * :Wavelength
	),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Adapt Y Axis( 1 ),
			Profile at Boundary( "Turn at Boundaries" ),
			Term Value(
				CuSO4( 0.512, Min( 0.2 ), Max( 0.8 ), Lock( 0 ), Show( 1 ) ),
				Na2S2O3( 0.237653363059103, Min( 0.2 ), Max( 0.8 ), Lock( 0 ), Show( 1 ) ),
				Glyoxal( 0.250346636940897, Max( 0.6 ), Lock( 0 ), Show( 1 ) ),
				Wavelength( "L3", Lock( 0 ), Show( 1 ) )
			)
		)
	)
);
rpt1 = obj1 << report;
axis max = rpt1["Prediction Profiler"][AxisBox( 1 )] << get max;
Close( dt, no save );
dt = As Table( J( 500, 2, Random Normal( 0, 1 ) ), <<Column Names( {"X1", "Y"} ) );
obj1 = dt << Fit Model( Y( :Y ), Effects( :X1 ), Personality( "Standard Least Squares" ), Emphasis( "Minimal report" ), Run );
obj1 << Effect details( 1 );
obj1 << Profiler( 1 );
obj1 << Plot Effect Leverage( 1 );
rpt1 = obj1 << report;
title1 = Try( rpt1["Effect Details"][Outline Box( 3 )] << get title, "Leverage Plot Missing" );
obj2 = dt << Fit Model( Y( :Y ), Effects( :X1 ), Personality( "Standard Least Squares" ), Emphasis( "Minimal report" ), Run );
obj2 << Effect details( 1 );
obj2 << Plot Effect Leverage( 1 );
obj2 << Profiler( 1 );
rpt2 = obj2 << report;
title2 = Try( rpt2["Effect Details"][Outline Box( 3 )] << get title, "Leverage Plot Missing" );
```

**Code Explanation**:

1. Open data table.
2. Multiply Damping column by 10.
3. Create new LogDamping column.
4. Fit model with LogDamping response.
5. Include specified effects in model.
6. Configure model settings.
7. Run model with profiler.
8. Retrieve prediction profiler axis max.
9. Close data table without saving.
10. Create new random data table.
11. Fit simple linear model.
12. Enable effect details.
13. Generate profiler plot.
14. Plot effect leverage.
15. Retrieve effect details title.
16. Repeat steps 10-15 for second model.



### Example 2
> **Summary**: Fits a model to a data table, using LogDamping as the response variable and specifying various effects for analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ModelFitting, #EffectScreening, #LeastSquares -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For Each Row( :Damping = 10 * :Damping );
dt << New Column( "LogDamping", continus, formula( Log( :Damping ) ) );
obj1 = dt << Fit Model(
	Transform Column( "Log[Damping]", Formula( Log( :Damping ) ) ),
	Y( :"Log[Damping]"n ),
	Effects(
		:CuSO4 & RS & Mixture, :Na2S2O3 & RS & Mixture, :Glyoxal & RS & Mixture, :CuSO4 * :Na2S2O3, :CuSO4 * :Glyoxal, :CuSO4 * :Wavelength,
		:Na2S2O3 * :Glyoxal, :Na2S2O3 * :Wavelength, :Glyoxal * :Wavelength
	),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Adapt Y Axis( 1 ),
			Profile at Boundary( "Turn at Boundaries" ),
			Term Value(
				CuSO4( 0.512, Min( 0.2 ), Max( 0.8 ), Lock( 0 ), Show( 1 ) ),
				Na2S2O3( 0.237653363059103, Min( 0.2 ), Max( 0.8 ), Lock( 0 ), Show( 1 ) ),
				Glyoxal( 0.250346636940897, Max( 0.6 ), Lock( 0 ), Show( 1 ) ),
				Wavelength( "L3", Lock( 0 ), Show( 1 ) )
			)
		)
	)
);
rpt1 = obj1 << report;
axis max = rpt1["Prediction Profiler"][AxisBox( 1 )] << get max;
```

**Code Explanation**:

1. Open data table.
2. Multiply Damping by 10.
3. Create new column LogDamping.
4. Fit model using LogDamping.
5. Specify response variable.
6. Define model effects.
7. Exclude intercept.
8. Disable center polynomials.
9. Use standard least squares personality.
10. Emphasize effect screening.



## Fit Model using Associative Array
### Example 1
> **Summary**: Fits a linear model to a data table, generating plots for actual vs. predicted values and residuals, while also managing window operations.

<!-- Keywords: #JSLScriptingLanguage, #LinearRegression, #DataTableManagement, #WindowOperations, #Plotting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
test = Try(
	obj = dt << Fit Model(
		Y( :weight ),
		Effects( :age, :sex, Log( 5 * :height + 3 ) ),
		Personality( "Standard Least Squares" ),
		Run( :weight << {Plot Actual by Predicted( 1 ), Plot Residual by Predicted( 1 ), Plot Effect Leverage( 1 )} )
	),
	1
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
Try( Window( aftlst[1] ) << close window );
```

**Code Explanation**:

1. Open data table.
2. Create associative array before fitting model.
3. Attempt to fit linear model.
4. Specify response variable.
5. Define effects for model.
6. Set personality to standard least squares.
7. Run model with specific plots.
8. Create associative array after fitting model.
9. Remove windows present before fitting model.
10. Close the first remaining window.



### Example 2
> **Summary**: Fits a linear regression model to a data table, capturing window titles before and after the fit, and verifying if the 'Fit Model' window exists.

<!-- Keywords: #JMPScriptingLanguage, #LinearRegression, #AssociativeArrays, #DataTableOperations, #WindowManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
obj1 = dt << Fit Model( Y( :weight ), Effects( :height ), Personality( Standard Least Squares ), Emphasis( "Minimal Report" ), Run Model );
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
test = Contains( aftlst, "Fit Model" );
```

**Code Explanation**:

1. Open data table.
2. Create associative array before fit model.
3. Fit linear regression model.
4. Create associative array after fit model.
5. Remove unchanged windows from array.
6. Get remaining window titles.
7. Check if "Fit Model" window exists.



### Example 3
> **Summary**: Fits a linear model to data, storing window titles before and after the fit, and verifying the presence of 'Fit Model' in the remaining titles.

<!-- Keywords: #JSLScriptingLanguage, #LinearRegression, #DataTable, #WindowManagement, #AssociativeArrays -->

**Code**:
```jsl
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
obj1 = dt << Fit Model( Y( :weight ), Effects( :height ), Personality( Standard Least Squares ), Emphasis( "Minimal Report" ), Run );
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
test = Contains( aftlst, "Fit Model" );
```

**Code Explanation**:

1. Open data table.
2. Store initial window titles.
3. Fit linear model.
4. Store new window titles.
5. Remove unchanged titles.
6. Get remaining titles.
7. Check for "Fit Model" title.



### Example 4
> **Summary**: Fits a linear model to data, capturing log output, and verifying the presence of a fit model report.

<!-- Keywords: #JSLScripting, #LinearRegression, #LogCapture, #AssociativeArrays, #FitModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
Log Capture(
	obj1 = dt << Fit Model(
		Y( :weight_abc ),
		Effects( :height ),
		Personality( Standard Least Squares ),
		Emphasis( "Minimal Report" ),
		Run
	)
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
test = Contains( aftlst, "Report: Fit Model" );
```

**Code Explanation**:

1. Open data table.
2. Create associative array before fit.
3. Capture log output.
4. Fit linear model to data.
5. Create associative array after fit.
6. Remove unchanged windows.
7. Get keys of remaining windows.
8. Check for fit model report.



### Example 5
> **Summary**: Fits a model to a data table, verifying the fit, and repeating the process multiple times.

<!-- Keywords: #JSLScriptingLanguage, #FitModel, #DataTable, #AssociativeArray, #WindowTitle -->

**Code**:
```jsl
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
obj1 = dt << Fit Model( Y( :weight ), Effects( :height ), Personality( Standard Least Squares ), Emphasis( "Minimal Report" ), Run Model );
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
test = Contains( aftlst, "Fit Model" );
Close( dt, no save );
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
obj1 = dt << Fit Model( Y( :weight ), Effects( :height ), Personality( Standard Least Squares ), Emphasis( "Minimal Report" ), Run Model );
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
test = Contains( aftlst, "Fit Model" );
Close( dt, no save );
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
obj1 = dt << Fit Model( Y( :weight ), Effects( :height ), Personality( Standard Least Squares ), Emphasis( "Minimal Report" ), Run );
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
test = Contains( aftlst, "Fit Model" );
```

**Code Explanation**:

1. Open data table;
2. Create associative array of window titles.
3. Fit model with weight as Y and height as effect.
4. Create associative array of window titles again.
5. Remove initial window titles from new array.
6. Get remaining window titles.
7. Check if "Fit Model" is in window titles.
8. Close "data_table.jmp" without saving.
9. Repeat steps 1-7.
10. Fit model with weight as Y and height as effect.
11. Create associative array of window titles again.
12. Remove initial window titles from new array.
13. Get remaining window titles.
14. Check if "Fit Model" is in window titles.



### Example 6
> **Summary**: Fits a model to data, capturing window titles and checking for specific keywords in the report.

<!-- Keywords: #JMPScriptingLanguage, #DataAnalysis, #ModelFitting, #WindowManagement, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
obj1 = dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( Standard Least Squares ),
	Emphasis( "Minimal Report" ),
	Keep Dialog Open( 1 ),
	Run
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
test = Contains( aftlst, "Fit Model" );
Close( dt, no save );
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
Log Capture(
	obj1 = dt << Fit Model(
		Y( :weight_abc ),
		Effects( :height ),
		Personality( Standard Least Squares ),
		Emphasis( "Minimal Report" ),
		Run
	)
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
test = Contains( aftlst, "Report: Fit Model" );
```

**Code Explanation**:

1. Open data table;
2. Create associative array of window titles.
3. Fit model with weight as Y and height as effect.
4. Set minimal report emphasis.
5. Keep dialog open.
6. Run the fit model.
7. Create new associative array of window titles.
8. Remove original window titles from new array.
9. Get keys from updated associative array.
10. Check if "Fit Model" is in keys.
11. Close dataset without saving.
12. Reopen data_table dataset
13. Create associative array of window titles.
14. Log capture fit model with incorrect Y variable.
15. Create new associative array of window titles.
16. Remove original window titles from new array.
17. Get keys from updated associative array.
18. Check if "Report: Fit Model" is in keys.



### Example 7
> **Summary**: Fits a model to a data table, capturing log messages, and managing window titles.

<!-- Keywords: #JMPScriptingLanguage, #DataAnalysis, #ModelFitting, #LogCapture, #WindowManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
log1 = Log Capture(
	obj = dt << Fit Model(
		Y( :Y ),
		Effects( :p1 & RS & Mixture, :p2 & Random & RS & Mixture & Knotted, :p3 & RS & Mixture, :p1 * :p2, :p1 * :p3, :p2 * :p3 ),
		Center Polynomials( 0 ),
		No Intercept,
		Personality( "Standard Least Squares" ),
		Method( "REML" ),
		Run
	)
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
Try( If( Is Empty( aftlst ) == 0, Window( aftlst[1] ) << close window( 1 ) ) );
Close( dt, no save );
b log1 =
"You have entered categorical effects that interact with a main effect (age).  These effects have been removed from the analysis.You have entered categorical effects that interact with a main effect (sex).  These effects have been removed from the analysis.";
```

**Code Explanation**:

1. Open data table.
2. Capture initial window titles.
3. Start log capture.
4. Fit model with specified effects.
5. Stop log capture.
6. Capture final window titles.
7. Remove initial titles from final titles.
8. Get remaining window keys.
9. Close remaining windows if any.
10. Close data table without saving.



### Example 8
> **Summary**: Fits a model to a data table, capturing log information during the fit, and managing window titles before and after the fit.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ModelFitting, #LogCapture, #WindowManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
log1 = Log Capture(
	dt << Fit Model(
		Y( :miles ),
		Effects( :species, :subject[:species] & Random, :season, :species * :season ),
		Personality( "Response Screening" ),
		Run
	)
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
Try( If( Is Empty( aftlst ) == 0, Window( aftlst[1] ) << close window( 1 ) ) );
If( Contains( JMP Product Name(), "Pro" ) > 0,
	, 
);
```

**Code Explanation**:

1. Open data table;
2. Create associative array before fitting model.
3. Capture log while fitting model.
4. Specify response variable "miles".
5. Define effects for model.
6. Set personality to "Response Screening".
7. Run the model.
8. Create associative array after fitting model.
9. Remove unchanged windows from associative array.
10. Close the new window if it exists.



### Example 9
> **Summary**: Fits a nominal logistic model to data, capturing log information, and closing windows with duplicate titles.

<!-- Keywords: #JSLScripting, #NominalLogisticModel, #AssociativeArrays, #WindowManagement, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
log1 = Log Capture(
	dt << Fit Model( Y( :season ), Effects( :species, :subject[:species] & Random, :season ), Personality( "Nominal Logistic" ), Run )
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
Try( If( Is Empty( aftlst ) == 0, Window( aftlst[1] ) << close window( 1 ) ) );
```

**Code Explanation**:

1. Open data table.
2. Create associative array before fitting model.
3. Capture log of fit model command.
4. Create associative array after fitting model.
5. Remove common windows from associative arrays.
6. Get unique window titles after fitting model.
7. Try to close the first unique window.



### Example 10
> **Summary**: Fits a model to data, capturing window titles, and closing the data table without saving.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ModelFitting, #WindowCapture, #PartialLeastSquares -->

**Code**:
```jsl
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
log1 = Log Capture(
	dt << Fit Model(
		Y( :miles ),
		Effects( :species, :subject[:species] & Random, :season, :species * :season ),
		Personality( "Partial Least Squares" ),
		Run
	)
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
Try( If( Is Empty( aftlst ) == 0, Window( aftlst[1] ) << close window( 1 ) ) );
Close( dt, no save );
b log1 = "Random or secondary effects specified in a fitting personality that does not support them";
```

**Code Explanation**:

1. Open data table.
2. Capture current window titles.
3. Log capture begins.
4. Fit model with specified parameters.
5. Set model personality to Partial Least Squares.
6. Run the model.
7. Capture new window titles.
8. Remove unchanged titles from associative array.
9. Get keys of remaining titles.
10. Close the model window if exists.
11. Close data table without saving.



### Example 11
> **Summary**: Fits a model to data, capturing window titles before and after the fit, and logging output. It also checks for JMP Pro and logs a specific message if necessary.

<!-- Keywords: #JSLScripting, #DataTableOperations, #ModelFitting, #WindowManagement, #JMPPro -->

**Code**:
```jsl
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
log1 = Log Capture(
	dt << Fit Model(
		Y( :miles ),
		Effects( :species, :subject[:species] & Random, :season, :species * :season ),
		Personality( "Stepwise" ),
		Run
	)
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
Try( If( Is Empty( aftlst ) == 0, Window( aftlst[1] ) << close window( 1 ) ) );
Close( dt, no save );
If( Contains( JMP Product Name(), "Pro" ) > 0,
	b log1 = "Random or secondary effects specified in a fitting personality that does not support them",
	b log1 = "The fitting personality \!"Generalized Regression\!" is available only in JMP Pro."
);
```

**Code Explanation**:

1. Open data table.
2. Capture current window titles.
3. Start logging Fit Model output.
4. Fit model with specified effects and personality.
5. Capture new window titles after fitting.
6. Remove initial window titles from new titles.
7. Get remaining window titles.
8. Close the first remaining window if any.
9. Close data table without saving.
10. Check for JMP Pro and log appropriate message.



### Example 12
> **Summary**: Fits a model to a data table, capturing window titles at various stages, and logging errors for unsupported effects.

<!-- Keywords: #JSLScripting, #ModelFitting, #WindowManagement, #ErrorHandling, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
log1 = Log Capture(
	dt << Fit Model(
		Y( :miles ),
		Effects( :species, :subject[:species] & Random, :season, :species * :season ),
		Personality( "Manova" ),
		Run
	)
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
Try( If( Is Empty( aftlst ) == 0, Window( aftlst[1] ) << close window( 1 ) ) );
Close( dt, no save );
b log1 = "Random or secondary effects specified in a fitting personality that does not support them";
```

**Code Explanation**:

1. Open data table;
2. Capture initial window titles.
3. Log model fitting process.
4. Fit model with specified parameters.
5. Capture final window titles.
6. Remove initial titles from final titles.
7. Get remaining window keys.
8. Close the first remaining window if any.
9. Close dataset without saving.
10. Log error message for unsupported effects.



### Example 13
> **Summary**: Fits a model, capturing window titles, and generating reports in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataAnalysis, #ModelFitting, #WindowManagement, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
log1 = Log Capture(
	dt << Fit Model(
		Y( :miles ),
		Effects( :species, :subject[:species] & Random, :season, :species * :season ),
		Personality( "Loglinear Variance" ),
		Run
	)
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
Try( If( Is Empty( aftlst ) == 0, Window( aftlst[1] ) << close window( 1 ) ) );
Close( dt, no save );
b text = "Lenth PSE is zero because a number of estimates are zero.";
dt = New Table( "test",
	Add Rows( 8 ),
	New Script(
		"Source",
		Data Table("data_table") << Stack( columns( :Name( "1" ), :Name( "2" ) ), Source Label Column( "B" ), Stacked Data Column( "Y" ) )
	),
	New Column( "L", Numeric, "Continuous", Format( "Best", 16 ), Set Values( [-1, -1, 1, 1, -1, -1, 1, 1] ) ),
	New Column( "S", Numeric, "Continuous", Format( "Best", 16 ), Set Values( [-1, -1, -1, -1, 1, 1, 1, 1] ) ),
	New Column( "B", Numeric, "Continuous", Format( "Best", 4 ), Set Values( [-1, 1, -1, 1, -1, 1, -1, 1] ) ),
	New Column( "Y", Numeric, "Continuous", Format( "Best", 10 ), Set Values( [76, 83, 82, 89, 80, 86, 86, 92] ) )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( Full Factorial( :L, :S, :B ) ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Normal Plot( 1 );
obj << Pareto Plot( 1 );
rpt = obj << report;
text = rpt[Outline Box( "Effect Screening" )][Text Box( 3 )] << get text;
pse = rpt[Outline Box( "Effect Screening" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Capture initial window titles.
3. Fit model with specified effects and personality.
4. Capture final window titles.
5. Remove initial window titles from final list.
6. Get list of new window titles.
7. Close the new window if it exists.
8. Close data_table.jmp dataset without saving.
9. Create new table "test" with specific columns and values.
10. Fit model with full factorial effects and standard least squares personality.



### Example 14
> **Summary**: Fits a model to a data table, capturing initial and final window titles, and closing any remaining windows.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ModelFitting, #WindowManagement, #REMLMethod -->

**Code**:
```jsl
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
log1 = Log Capture(
	obj = dt << Fit Model(
		Y( :Y ),
		Effects( :p1 & RS & Mixture, :p2 & Random & RS & Mixture & Knotted, :p3 & RS & Mixture, :p1 * :p2, :p1 * :p3, :p2 * :p3 ),
		Center Polynomials( 0 ),
		No Intercept,
		Personality( "Standard Least Squares" ),
		Method( "REML" ),
		Run
	)
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
Try( If( Is Empty( aftlst ) == 0, Window( aftlst[1] ) << close window( 1 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Capture initial window titles.
3. Start log capture.
4. Fit model with specified effects.
5. Use Standard Least Squares personality.
6. Use REML method.
7. Stop log capture.
8. Capture final window titles.
9. Remove initial window titles from final list.
10. Close the remaining window if any.



### Example 15
> **Summary**: Fits a model to data, capturing the log of the execution, and closing the first remaining window if it exists.

<!-- Keywords: #JMPScriptingLanguage, #AssociativeArrays, #LogCapture, #ModelFitting, #WindowManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
log1 = Log Capture(
	dt << Fit Model(
		Y( :miles ),
		Effects( :species, :subject[:species] & Random, :season, :species * :season ),
		Personality( "Partial Least Squares" ),
		Run
	)
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
Try( If( Is Empty( aftlst ) == 0, Window( aftlst[1] ) << close window( 1 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create associative array of open windows.
3. Capture log of Fit Model execution.
4. Fit model with specified effects.
5. Set model personality to PLS.
6. Run the model.
7. Create associative array of open windows again.
8. Remove original window titles from new array.
9. Get keys of remaining windows.
10. Close the first remaining window if it exists.



### Example 16
> **Summary**: Fits a linear model to data, capturing log information, and managing windows in JMP.

<!-- Keywords: #JMPScriptingLanguage, #LinearModelFitting, #LogCapture, #WindowManagement, #AssociativeArrays -->

**Code**:
```jsl
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
log1 = Log Capture(
	dt << Fit Model(
		Y( :miles ),
		Effects( :species, :subject[:species] & Random, :season, :species * :season ),
		Personality( "Stepwise" ),
		Run
	)
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
Try( If( Is Empty( aftlst ) == 0, Window( aftlst[1] ) << close window( 1 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Create associative array before fitting model.
3. Start log capture.
4. Fit linear model with specified effects.
5. End log capture.
6. Create associative array after fitting model.
7. Remove unchanged windows from associative array.
8. Get keys of remaining windows.
9. Try to close the first remaining window.



### Example 17
> **Summary**: Fits a model to a data table, capturing log output, and managing window titles.

<!-- Keywords: #JSLScripting, #DataAnalysis, #ModelFitting, #LogCapture, #WindowManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
log1 = Log Capture(
	dt << Fit Model(
		Y( :miles ),
		Effects( :species, :subject[:species] & Random, :season, :species * :season ),
		Personality( "Manova" ),
		Run
	)
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
Try( If( Is Empty( aftlst ) == 0, Window( aftlst[1] ) << close window( 1 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Store current window titles.
3. Capture log output.
4. Fit model with specified parameters.
5. Store updated window titles.
6. Remove initial window titles from updated list.
7. Extract remaining window keys.
8. Close the first remaining window if any.



### Example 18
> **Summary**: Fits a log-linear model to data, capturing window titles before and after the fit, and closing any new windows created.

<!-- Keywords: #JSLScriptingLanguage, #LogLinearModel, #WindowManagement, #DataFitting, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
log1 = Log Capture(
	dt << Fit Model(
		Y( :miles ),
		Effects( :species, :subject[:species] & Random, :season, :species * :season ),
		Personality( "Loglinear Variance" ),
		Run
	)
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
Try( If( Is Empty( aftlst ) == 0, Window( aftlst[1] ) << close window( 1 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Capture current window titles.
3. Start log capture.
4. Fit model with specified effects.
5. Use Loglinear Variance personality.
6. Run the model.
7. End log capture.
8. Capture updated window titles.
9. Remove original window titles.
10. Close the new window if it exists.



### Example 19
> **Summary**: Fits a Partial Least Squares (PLS) model to data and generating a report, utilizing log capture and associative arrays.

<!-- Keywords: #JMPScriptingLanguage, #PartialLeastSquares, #LogCapture, #AssociativeArrays, #DataAnalysis -->

**Code**:
```jsl
befAA = Associative Array( Window() << get window title );
dt2 = Open("data_table.jmp");
dt2:v1 << Set Values( [., ., ., ., ., ., ., .] );
dt2:ls << Set Values( [3.011, 0, 0, 1.482, 1.116, 3.397, 2.428, 4.024, ., ., ., ., ., ., ., .] );
log2 = Log Capture(
	obj2 = dt2 << Fit Model(
		Y( :ls, :ha, :dt ),
		Effects( :v1, :v2, :v3, :v4, :v5 ),
		No Intercept,
		Standardize X( 0 ),
		Personality( "Partial Least Squares" ),
		Run()
	)
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
test = Contains( aftlst, "Report: Fit Model" );
If( test > 0,
	Window( aftlst[test] ) << Close Window
);
```

**Code Explanation**:

1. Create associative array.
2. Open data table;
3. Set v1 values to missing.
4. Set ls values.
5. Start log capture.
6. Fit model with PLS personality.
7. End log capture.
8. Update associative array.
9. Remove unchanged windows.
10. Check for "Report: Fit Model".



### Example 20
> **Summary**: Fits a model to a data table, capturing window titles before and after the fit, and closing individual windows.

<!-- Keywords: #JSLScripting, #DataModeling, #WindowManagement, #REMLMethod, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
befAA = Associative Array( Window() << get window title );
log1 = Log Capture(
	obj = dt << Fit Model(
		Y( :weight ),
		Effects( :height, :age vector & random ),
		Personality( "Standard Least Squares" ),
		Method( "REML" ),
		Run
	)
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	Window( aftlst[i] ) << Close Window( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Capture initial window titles.
3. Start logging.
4. Fit model with REML method.
5. Stop logging.
6. Capture final window titles.
7. Remove initial titles from final list.
8. Get remaining window keys.
9. Loop through remaining windows.
10. Close each window.



### Example 21
> **Summary**: Fits a model and extracting relevant tables from the results, while maintaining a record of window titles throughout the analysis.

<!-- Keywords: #JSLScripting, #DataAnalysis, #ModelFitting, #WindowManagement, #TableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = Fit Model( Effects( :Process, :Site, :Process * :Site ), Personality( Response Screening ), Y( Column Group( "Responses" ) ), Run );
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	);
	If( Contains( aftlst[i], "Y Fits" ),
		dt3 = Data Table( aftlst[i] )
	);
);
Close( dt, no save );
```

**Code Explanation**:

1. Open data table;
2. Store initial window titles.
3. Fit model with specified effects.
4. Store updated window titles.
5. Remove initial titles from updated list.
6. Get remaining window titles.
7. Loop through window titles.
8. Identify "PValues" window.
9. Assign "PValues" table to dt2.
10. Identify "Y Fits" window.
11. Assign "Y Fits" table to dt3.
12. Close original dataset without saving.



### Example 22
> **Summary**: Runs the analysis process by opening a data table, fitting a model with specified effects, and extracting relevant tables from window titles.

<!-- Keywords: #JMPScriptingLanguage, #DataAnalysisAutomation, #ModelFitting, #WindowManagement, #AssociativeArrays -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
obj = Fit Model( Effects( :Process, :Site, :Process * :Site ), Personality( Response Screening ), Y( Column Group( "Responses" ) ), Run );
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	);
	If( Contains( aftlst[i], "Y Fits" ),
		dt3 = Data Table( aftlst[i] )
	);
);
```

**Code Explanation**:

1. Open data table;
2. Create associative array before analysis.
3. Fit model with specified effects.
4. Create associative array after analysis.
5. Remove unchanged windows from array.
6. Get list of remaining window keys.
7. Loop through each window key.
8. Check for "PValues" in window title.
9. Assign PValues table to dt2.
10. Check for "Y Fits" in window title.
11. Assign Y Fits table to dt3.



### Example 23
> **Summary**: Fits a model to data, saving effect tests and overall fit, and comparing new and old windows in JMP.

<!-- Keywords: #JMPScriptingLanguage, #AssociativeArrays, #FitModel, #DataTables, #WindowManagement -->

**Code**:
```jsl
Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
test = Is Scriptable(
	obj = Fit Model( Y( :ABRASION, :HARDNESS ), Effects( :SILICA, :SILANE, :SULFUR ), Personality( Response Screening ), Run )
);
obj << Save Effect Tests;
obj << Save Overall Fit;
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "Effect Tests" ),
		dt2 = Data Table( aftlst[i] )
	);
	If( Contains( aftlst[i], "Y Fits" ),
		dt3 = Data Table( aftlst[i] )
	);
);
```

**Code Explanation**:

1. Open data_table data
2. Create associative array of windows.
3. Check if scriptable.
4. Fit model with ABRASION, HARDNESS as Y.
5. Add SILICA, SILANE, SULFUR as effects.
6. Use Response Screening personality.
7. Run the model.
8. Save effect tests.
9. Save overall fit.
10. Compare new and old windows.



### Example 24
> **Summary**: Fits models, saving effect tests and overall fit, and generating data tables for abrasion and hardness analysis.

<!-- Keywords: #JMPScriptingLanguage, #DataAnalysis, #ModelFitting, #AssociativeArrays, #DataTables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
test = Is Scriptable(
	obj = Fit Model( Y( :ABRASION, :HARDNESS ), Effects( :SILICA, :SILANE, :SULFUR ), Personality( Response Screening ), Run )
);
obj << Save Effect Tests;
obj << Save Overall Fit;
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "Effect Tests" ),
		dt2 = Data Table( aftlst[i] )
	);
	If( Contains( aftlst[i], "Y Fits" ),
		dt3 = Data Table( aftlst[i] )
	);
);
Close( dt, no save );
Close( dt2, no save );
Close( dt3, no save );
dt = Open("data_table.jmp");
test = Is Scriptable( obj = Fit Model( Model Dialog ) );
Close( dt, no save );
dt = Open("data_table.jmp");
bef aa = Associative Array( Window() << get window title );
test = Is Scriptable( obj = Response Screening( Y( :Height, :Weight ), X( :Age, :Sex ) ) );
obj << Save PValues;
aft aa = Associative Array( Window() << get window title );
aft aa << Remove( bef aa );
aftlst = aftaa << get keys;
For( i = 1, i <= N Items( aftlst ), i++,
	If( Contains( aftlst[i], "PValues" ),
		dt2 = Data Table( aftlst[i] )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create associative array before script.
3. Fit model for abrasion and hardness.
4. Save effect tests.
5. Save overall fit.
6. Create associative array after script.
7. Remove before array from after array.
8. Get keys from after array.
9. Loop through keys.
10. Check for "Effect Tests" and "Y Fits".
11. Close all data tables without saving.
12. Reopen data_table.jmp.
13. Fit model using Model Dialog.
14. Close data_table.jmp without saving.
15. Open data table;
16. Create associative array before script.
17. Perform response screening on height and weight.
18. Save p-values.
19. Create associative array after script.
20. Remove before array from after array.
21. Get keys from after array.
22. Loop through keys.
23. Check for "PValues".



## Fit Model using Exclude
> **Summary**: Fits a linear model to a dataset, extracting sigma2 values, and visualizing studentized residuals.

<!-- Keywords: #JSLScripting, #LinearModel, #StudentizedResiduals, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :height < 60 );
s = dt << get selected rows;
dt << Exclude( 1 );
For( i = 1, i <= N Rows( dt ), i++,
	dt << Select Rows( i );
	dt << Exclude( 1 );
	obj = dt << Fit Model(
		Y( :weight ),
		Effects( :age, :sex, :height ),
		Personality( "Standard Least Squares" ),
		Emphasis( "Minimal Report" ),
		invisible,
		Run
	);
	rpt = obj << report;
	sigma2 = ((rpt[Outline Box( "Summary of Fit" )][Table Box( 1 )] << get as matrix)[3, 1]);
	dt << Clear Row States( 1 );
	dt << Select Rows( s );
	dt << Exclude( 1 );
	dt << Clear Select;
);
dt << New Column( "sigma_i", values( sigma2 ) );
obj2 = dt << Fit Model(
	Y( :weight ),
	Effects( :age, :sex, :height ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
rpt2 = obj2 << report;
obj2 << Save Columns( Residuals );
obj2 << Save Columns( Hats );
dt << New Column( "Ext Studentized Resid", formula( :Residual weight / (:sigma_i * Sqrt( 1 - :h weight )) ) );
rmse = (rpt2["Summary of Fit"][Table Box( 1 )] << get as matrix)[3, 1];
dt << New Column( "Int Studentized Resid", formula( :Residual weight / (rmse * Sqrt( 1 - :h weight )) ) );
b ext resid = dt:Ext Studentized Resid << get values;
b int resid = dt:Int Studentized Resid << get values;
obj2 << Plot Studentized Residuals( 1 );
y = (rpt2[Outline Box( "Studentized Residuals" )][FrameBox( 1 )] << Find Seg( Marker Seg( 1 ) )) << Get Y Values;
obj2 << Externally Studentized Residuals( 1 );
ext resid = dt:Externally Studentized Residuals weight << get values;
obj2 << Studentized Residuals( 1 );
int resid = dt:Studentized Resid weight << get values;
```

**Code Explanation**:

1. Open table.
2. Select rows where height < 60.
3. Get selected rows.
4. Exclude selected rows.
5. Loop through all rows.
6. Select current row.
7. Exclude current row.
8. Fit model with specified effects.
9. Get report from model.
10. Extract sigma2 value.
11. Clear row states.
12. Re-select excluded rows.
13. Exclude rows again.
14. Clear selection.
15. Create new column for sigma_i.
16. Fit model again.
17. Get report from second model.
18. Save residuals and hats.
19. Create new column for Ext Studentized Resid.
20. Extract RMSE value.
21. Create new column for Int Studentized Resid.
22. Get values of Ext Studentized Resid.
23. Get values of Int Studentized Resid.
24. Plot Studentized Residuals.
25. Find Y values of plot.
26. Calculate externally studentized residuals.
27. Get values of externally studentized residuals.
28. Calculate internally studentized residuals.
29. Get values of internally studentized residuals.



## Fit Model using Set Modeling Type
### Example 1
> **Summary**: Fits an ordinal logistic model to a data table, capturing window titles and removing initial titles from the final list.

<!-- Keywords: #JSLScriptingLanguage, #OrdinalLogisticModel, #DataTableManipulation, #WindowManagement, #JMPPro -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:season << Set Modeling Type( "ordinal" );
befAA = Associative Array( Window() << get window title );
log1 = Log Capture(
	dt << Fit Model( Y( :season ), Effects( :species, :subject[:species] & Random, :season ), Personality( "Ordinal Logistic" ), Run )
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
Try( If( Is Empty( aftlst ) == 0, Window( aftlst[1] ) << close window( 1 ) ) );
Close( dt, no save );
If( Contains( JMP Product Name(), "Pro" ) > 0,
	b log1 = "Random or secondary effects specified in a fitting personality that does not support them",
	b log1 = "The fitting personality \!"Partial Least Squares\!" is available only in JMP Pro."
);
```

**Code Explanation**:

1. Open data table;
2. Set season as ordinal.
3. Capture initial window titles.
4. Fit ordinal logistic model.
5. Capture final window titles.
6. Remove initial titles from final list.
7. Get remaining window keys.
8. Close the first remaining window if any.
9. Close the dataset without saving.
10. Check for JMP Pro version.



### Example 2
> **Summary**: Fits an ordinal logistic model to examine the relationship between season and species, capturing log information during the process.

<!-- Keywords: #JSLScriptingLanguage, #OrdinalLogisticRegression, #AssociativeArrays, #WindowManagement, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:season << Set Modeling Type( "ordinal" );
befAA = Associative Array( Window() << get window title );
log1 = Log Capture(
	dt << Fit Model( Y( :season ), Effects( :species, :subject[:species] & Random, :season ), Personality( "Ordinal Logistic" ), Run )
);
aftAA = Associative Array( Window() << get window title );
aftAA << Remove( befAA );
aftlst = aftAA << get keys;
Try( If( Is Empty( aftlst ) == 0, Window( aftlst[1] ) << close window( 1 ) ) );
```

**Code Explanation**:

1. Open data table;
2. Set "season" column to ordinal.
3. Create associative array before model fit.
4. Capture log during model fitting.
5. Fit ordinal logistic model.
6. Create associative array after model fit.
7. Remove pre-model windows from associative array.
8. Get keys from post-model associative array.
9. Close the first remaining window if exists.



### Example 3
> **Summary**: Runs a nominal logistic regression model to predict the probability of 'High' target level based on various effects, including Age, Gender, BMI, and others, using JMP's Fit Model platform.

<!-- Keywords: #JMPFitModel, #NominalLogisticRegression, #DecisionThresholds, #OrdinalResponseVariable, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Y Ordinal << Set Modeling Type( "Nominal" );
obj = dt << Fit Model(
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Target Level( "High" ),
	Run
);
obj << Decision Threshold( 1 );
rpt = obj << report;
test1 = Try( rpt["Decision Tresholds"] << get title, 1 );
```

**Code Explanation**:

1. Open data table;
2. Set Y Ordinal as Nominal.
3. Start Fit Model process.
4. Specify Y as Y Ordinal.
5. Include Age, Gender, BMI, BP, Total Cholesterol, LDL, HDL, TCH, LTG, Glucose as effects.
6. Choose Nominal Logistic personality.
7. Set target level as High.
8. Run the model.
9. Set decision threshold to 1.
10. Retrieve report and check for "Decision Tresholds" title.



### Example 4
> **Summary**: Fits an ordinal logistic model to analyze the relationship between Type and Weight, with Turning Circle as a covariate, for vehicles from Japan.

<!-- Keywords: #JMPScriptingLanguage, #OrdinalLogisticRegression, #ModelFitting, #DataFiltering, #ProbabilityFormula -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Type << Set Modeling Type( "Ordinal" );
obj1 = dt << Fit Model(
	Y( :Type ),
	Effects( :Weight, :Turning Circle ),
	Where( :Country == "Japan" ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj1 << Save Probability Formula( 1 );
b save1 = (dt:Name( "Prob[Sporty] Where" ) << get values) || (dt:Name( "Prob[Small] Where" ) << get values) || (dt
:Name( "Prob[Compact] Where" ) << get values) || (dt:Name( "Prob[Medium] Where" ) << get values) || (dt:Name( "Prob[Large] Where" ) <<
get values);
```

**Code Explanation**:

1. Open table.
2. Set modeling type.
3. Fit ordinal logistic model.
4. Specify response variable.
5. Include effects.
6. Apply country filter.
7. Use ordinal personality.
8. Run the model.
9. Save probability formula.
10. Extract probability values.



### Example 5
> **Summary**: Fits an ordinal logistic model to analyze the relationship between Type, Weight, and Turning Circle in a dataset filtered by Country == USA.

<!-- Keywords: #OrdinalLogisticModel, #JMPScriptingLanguage, #DataFiltering, #ModelFitting, #ProbabilityFormula -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Type << Set Modeling Type( "Ordinal" );
obj1 = dt << Fit Model(
	Y( :Type ),
	Effects( :Weight, :Turning Circle ),
	Where( :Country == "USA" ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj1 << Save Probability Formula( 1 );
b save2 = (dt:Name( "Prob[Sporty] Where" ) << get values) || (dt:Name( "Prob[Small] Where" ) << get values) || (dt
:Name( "Prob[Compact] Where" ) << get values) || (dt:Name( "Prob[Medium] Where" ) << get values) || (dt:Name( "Prob[Large] Where" ) <<
get values);
```

**Code Explanation**:

1. Open data table;
2. Set Type modeling type to Ordinal.
3. Fit ordinal logistic model.
4. Include Weight and Turning Circle effects.
5. Filter data for Country == USA.
6. Run the model.
7. Save probability formula.
8. Extract Prob[Sporty] values.
9. Extract Prob[Small] values.
10. Concatenate all probability values.



### Example 6
> **Summary**: Fits an ordinal logistic model to analyze the relationship between Type, Weight, and Turning Circle in a filtered dataset where Country is 'Other', and saves the probability formula.

<!-- Keywords: #OrdinalLogisticModel, #JMPScriptingLanguage, #DataFiltering, #ProbabilityFormula, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Type << Set Modeling Type( "Ordinal" );
obj1 = dt << Fit Model(
	Y( :Type ),
	Effects( :Weight, :Turning Circle ),
	Where( :Country == "Other" ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj1 << Save Probability Formula( 1 );
b save3 = (dt:Name( "Prob[Sporty] Where" ) << get values) || (dt:Name( "Prob[Small] Where" ) << get values) || (dt
:Name( "Prob[Compact] Where" ) << get values) || (dt:Name( "Prob[Medium] Where" ) << get values) || (dt:Name( "Prob[Large] Where" ) <<
get values);
```

**Code Explanation**:

1. Open table.
2. Set modeling type ordinal.
3. Fit ordinal logistic model.
4. Include specific effects.
5. Apply country filter.
6. Run model.
7. Save probability formula.
8. Extract probability values.
9. Concatenate probability arrays.



### Example 7
> **Summary**: Fits an ordinal logistic model to analyze the relationship between Type and Weight, with Turning Circle as a covariate, by Country, and saves probability formulas for each country.

<!-- Keywords: #JMPScriptingLanguage, #OrdinalLogisticRegression, #ByGroups, #ProbabilityFormula, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Type << Set Modeling Type( "Ordinal" );
val = dt:Country << get values;
obj = dt << Fit Model( Y( :Type ), Effects( :Weight, :Turning Circle ), by( :Country ), Personality( "Ordinal Logistic" ), Run );
obj << Save Probability Formula( 1 );
save = (dt:Name( "Prob[Sporty] By Country" ) << get values) || (dt:Name( "Prob[Small] By Country" ) << get values) || (dt
:Name( "Prob[Compact] By Country" ) << get values) || (dt:Name( "Prob[Medium] By Country" ) << get values) || (dt
:Name( "Prob[Large] By Country" ) << get values);
For( i = 1, i <= N Items( val ), i++,
	Match( val[i], "Japan", , "USA", , "Other", )
);
```

**Code Explanation**:

1. Open table.
2. Set modeling type.
3. Get country values.
4. Fit ordinal logistic model.
5. Save probability formula.
6. Concatenate probability values.
7. Loop through country values.
8. Match country values.



### Example 8
> **Summary**: Analyze ordinal logistic regression model predictions using Prediction Profiler and saves bagged predictions.

<!-- Keywords: #JMPScriptingLanguage, #OrdinalLogisticRegression, #PredictionProfiler, #BaggedPredictions, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Sex << Set Modeling Type( "Ordinal" );
obj = Fit Model( Y( :sex ), Effects( :height, :weight ), Personality( "Ordinal Logistic" ), Run( Profiler( 1 ) ) );
rpt = obj << report;
scptObj = rpt[Outline Box( "Prediction Profiler" )] << get scriptable object;
scptObj << Save Bagged Predictions( 2 );
n = dt << Get Column Names( string );
col1 = Contains( n, "Pred Formula sex=F Bagged Mean" );
col2 = Contains( n, "sex=F Bootstrap Std Err" );
col3 = Contains( n, "StdError sex=F Bagged Mean" );
```

**Code Explanation**:

1. Open data table;
2. Set Sex modeling type to Ordinal.
3. Fit Ordinal Logistic model.
4. Run Prediction Profiler.
5. Extract report object.
6. Get Prediction Profiler scriptable object.
7. Save Bagged Predictions.
8. Retrieve column names from dataset.
9. Check for "Pred Formula sex=F Bagged Mean".
10. Check for "sex=F Bootstrap Std Err".
11. Check for "StdError sex=F Bagged Mean".



### Example 9
> **Summary**: Fits an ordinal logistic model to predict sex based on height and weight, generating a prediction profiler report with bagged predictions.

<!-- Keywords: #JSLScriptingLanguage, #OrdinalLogisticRegression, #PredictionProfiler, #BaggedPredictions, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Sex << Set Modeling Type( "Ordinal" );
obj = Fit Model( Y( :sex ), Effects( :height, :weight ), Personality( "Ordinal Logistic" ), Run( Profiler( 1 ) ) );
rpt = obj << report;
scptObj = rpt[Outline Box( "Prediction Profiler" )] << get scriptable object;
scptObj << Save Bagged Predictions( 2, Random Seed( 12345 ) );
latest = Column( "Pred Formula sex=F Bagged Mean" ) << getasmatrix;
Close( dt, nosave );
previous = [0.0000466518950843597, 0.00396672485296142, 0.00486116581691323, 0.0424610911345717, 0.044098968754727, 0.0447115319786343,
0.0463189462498474, 0.087799166915582, 0.0903526022466633, 0.100926733882372, 0.106483411245844, 0.107196962640889, 0.0246004165222032,
0.0696393864083769, 0.155811400305345, 0.183501618157499, 0.332461559167312, 0.375996332034806, 0.381641359259519, 0.547627277814303,
0.601608456150515, 0.628920852025775, 0.087780354712625, 0.136533128103669, 0.237098943175992, 0.313690562280029, 0.431802410916644,
0.509208392539839, 0.511705758230795, 0.517882730568811, 0.726980349739599, 0.728954720712524, 0.74391377783697, 0.760501007158788,
0.762659883759114, 0.867363650807755, 0.952466503304748];
```

**Code Explanation**:

1. Open data table.
2. Set Sex modeling type.
3. Fit ordinal logistic model.
4. Generate prediction profiler.
5. Retrieve report object.
6. Access prediction profiler scriptable object.
7. Save bagged predictions.
8. Extract latest predictions matrix.
9. Close data table without saving.
10. Define previous predictions array.



### Example 10
> **Summary**: Analyze ordinal logistic regression with bagged predictions for a given dataset, utilizing the Prediction Profiler to visualize and extract results.

<!-- Keywords: #JSLScriptingLanguage, #OrdinalLogisticRegression, #BaggedPredictions, #PredictionProfiler, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Sex << Set Modeling Type( "Ordinal" );
obj = Fit Model( Y( :sex ), Effects( :height, :weight ), Personality( "Ordinal Logistic" ), Run( Profiler( 1 ) ) );
rpt = obj << report;
scptObj = rpt[Outline Box( "Prediction Profiler" )] << get scriptable object;
scptObj << Save Bagged Predictions( 2, Random Seed( 12345 ) );
latest = Column( "Pred Formula sex=F Bagged Mean" ) << getasmatrix;
```

**Code Explanation**:

1. Open data table.
2. Set modeling type for Sex.
3. Fit ordinal logistic model.
4. Run profiler.
5. Extract report.
6. Get prediction profiler object.
7. Save bagged predictions.
8. Retrieve latest predictions matrix.



### Example 11
> **Summary**: Fits a model to examine the relationship between diameter and day, while also extracting specific dates from the journal.

<!-- Keywords: #JSLScriptingLanguage, #ModelFitting, #DataAnalysis, #JournalExtraction, #DateFiltering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:DAY << Set Modeling Type( "Continuous" );
obj = dt << Fit Model(
	Y( :DIAMETER ),
	Effects( :DAY, :OPERATOR, :DAY * :OPERATOR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		:DIAMETER << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 0 ), Effect Tests( 0 ), Effect Details( 0 ),
		Lack of Fit( 0 ), Scaled Estimates( 0 ), Plot Actual by Predicted( 0 ), Plot Residual by Predicted( 0 ),
		Plot Studentized Residuals( 0 ), Plot Effect Leverage( 0 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 ),
		Profiler( 1, Confidence Intervals( 1 ), Interaction Profiler( 1 ) )},
		Effect Summary( 0 )
	)
);
rpt = obj << report;
journal = rpt << get journal;
count = 0;
For( i = 1, i <= Length( journal ), i++,
	pos = Contains( journal, "05/01/1998", i );
	i = pos + 1;
	If( pos == 0, Break() );
	count++;
);
If( count == 1,
	pos = Contains( journal, "05/01/1998" )
);
count = 0;
For( i = 1, i <= Length( journal ), i++,
	pos = Contains( journal, "06/09/1998", i );
	i = pos + 1;
	If( pos == 0, Break() );
	count++;
);
If( count == 1,
	pos = Contains( journal, "06/09/1998" )
);
```

**Code Explanation**:

1. Open table.
2. Set DAY as continuous.
3. Fit model with DAY, OPERATOR, and interaction.
4. Use Standard Least Squares personality.
5. Minimal report emphasis.
6. Disable most reports.
7. Enable Profiler with confidence intervals and interaction.
8. Disable Effect Summary.
9. Get report.
10. Count occurrences of specific dates in journal.



## Fit Model using Random Uniform
> **Summary**: Process of performing nonlinear modeling and linear modeling on a data table, generating reports and extracting estimates, standard errors, sum of squares, degrees of freedom, mean square error, and root mean square error.

<!-- Keywords: #JSL, #NonlinearModeling, #LinearModeling, #DataAnalysis, #StatisticalReporting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
frequencies = J( 40, 1, Random Uniform( 0, 2 ) );
dt << New Column( "Fractional Frequencies", Set Values( frequencies ) );
obj1 = dt << Nonlinear(
	Y( :height ),
	Model( Parameter( {a = 50, b = 0.12}, a + b * :weight ) ),
	Freq( :Fractional Frequencies ),
	Newton,
	Finish
);
rpt1 = obj1 << report;
est1 = Matrix( rpt1[Number Col Box( "Estimate" )] << get );
std1 = Matrix( rpt1[Number Col Box( "ApproxStdErr" )] << get );
sse1 = Matrix( rpt1[Number Col Box( "SSE" )] << get );
df1 = Matrix( rpt1[Number Col Box( "DFE" )] << get );
mse1 = Matrix( rpt1[Number Col Box( "MSE" )] << get );
rmse1 = Matrix( rpt1[Number Col Box( "RMSE" )] << get );
obj2 = dt << Fit Model(
	Freq( :Fractional Frequencies ),
	Y( :height ),
	Effects( :weight ),
	Personality( Standard Least Squares ),
	Emphasis( Effect Leverage ),
	Run
);
rpt2 = obj2 << report;
est2 = Matrix( rpt2[Number Col Box( "Estimate" )] << get );
std2 = Matrix( rpt2[Number Col Box( "Std Error" )] << get );
sse2 = Matrix( (rpt2[Outline Box( "Analysis of Variance" )][Number Col Box( "Sum of Squares" )] << get)[2] );
df2 = Matrix( (rpt2[Outline Box( "Analysis of Variance" )][Number Col Box( "DF" )] << get)[2] );
mse2 = Matrix( (rpt2[Outline Box( "Analysis of Variance" )][Number Col Box( "Mean Square" )] << get)[2] );
rmse2 = Matrix( (rpt2[Outline Box( "Summary of Fit" )][Number Col Box( 1 )] << get)[3] );
```

**Code Explanation**:

1. Open data table.
2. Generate random frequencies.
3. Add new column for frequencies.
4. Perform nonlinear modeling.
5. Extract model report.
6. Retrieve parameter estimates.
7. Retrieve standard errors.
8. Retrieve sum of squares.
9. Retrieve degrees of freedom.
10. Retrieve mean square error.
11. Retrieve root mean square error.
12. Perform linear modeling.
13. Extract model report.
14. Retrieve parameter estimates.
15. Retrieve standard errors.
16. Retrieve sum of squares.
17. Retrieve degrees of freedom.
18. Retrieve mean square error.
19. Retrieve root mean square error.



## Fit Model using Add Properties to Table
> **Summary**: Process of adding a constraint script to a data table and launching the Fit Model platform for analysis, with emphasis on effect screening.

<!-- Keywords: #JMPScriptingLanguage, #FitModel, #EffectScreening, #DataTableManipulation, #ConstraintScript -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1 << Add Properties to Table( {New Script( "Constraint", {1 * :LDL + 1 * :HDL <= 200} )} );
obj1 = dt1 << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run( Profiler( 1 ) )
);
```

**Code Explanation**:

1. Open data table;
2. Add constraint script.
3. Launch Fit Model platform.
4. Set response variable.
5. Define model effects.
6. Choose Standard Least Squares personality.
7. Set Effect Screening emphasis.
8. Run the model.
9. Generate Profiler.
10. Display Profiler window.



## Fit Model using Subset
> **Summary**: Runs time series forecasting and report generation for a subset of data based on seasonality, utilizing JMP's Time Series Forecasting feature.

<!-- Keywords: #JMPScriptingLanguage, #TimeSeriesForecasting, #DataSubset, #SeasonalAnalysis, #ReportGeneration -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = dt1 << Subset( All rows, Selected columns only( 0 ) );
s1 = dt1 << Select Where( :Season < 7 );
dt1 << Exclude;
obj1 = dt1 << Time Series Forecast( Y( :Log Passengers, :Passengers ), Fit Model( NAhead( 10 ), Seasonality( 12 ), NHoldout( 0 ) ) );
rpt1 = obj1 << report;
test1 = rpt1[Outline Box( "Model Summary" )][Table Box( 1 )] << get as matrix;
s2 = dt2 << Select Where( :Season < 7 );
dt2 << Delete Rows;
obj2 = dt2 << Time Series Forecast( Y( :Log Passengers, :Passengers ), Fit Model( NAhead( 10 ), Seasonality( 12 ), NHoldout( 0 ) ) );
rpt2 = obj2 << report;
test2 = rpt2[Outline Box( "Model Summary" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open table.
2. Subset all rows.
3. Select where season < 7.
4. Exclude selected rows.
5. Fit time series forecast.
6. Get model summary report.
7. Convert report to matrix.
8. Select where season < 7 in subset.
9. Delete selected rows.
10. Fit time series forecast on subset.



## Fit Model using Data Table
### Example 1
> **Summary**: Process of forecasting time series data using a stacked data column and selecting specific rows based on seasonality, then generates a model summary report.

<!-- Keywords: #TimeSeriesForecasting, #DataStacking, #SeasonalSelection, #ModelSummaryReport, #JSLScripting -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = Data Table("data_table") << Stack(
	columns( :Passengers, :Log Passengers ),
	Source Label Column( "Label" ),
	Stacked Data Column( "Data" ),
	Stack By Row( 0 )
);
dt3 = dt2 << Subset( All rows, Selected columns only( 0 ) );
s1 = dt2 << Select Where( :Season < 7 );
dt2 << Exclude;
obj1 = dt2 << Time Series Forecast( Y( :Data ), Grouping( :Label ), Fit Model( NAhead( 10 ), Seasonality( 12 ), NHoldout( 0 ) ) );
rpt1 = obj1 << report;
test1 = rpt1[Outline Box( "Model Summary" )][Table Box( 1 )] << get as matrix;
s3 = dt3 << Select Where( :Season < 7 );
dt3 << Delete Rows;
obj2 = dt3 << Time Series Forecast( Y( :Data ), Grouping( :Label ), Fit Model( NAhead( 10 ), Seasonality( 12 ), NHoldout( 0 ) ) );
rpt2 = obj2 << report;
test2 = rpt2[Outline Box( "Model Summary" )][Table Box( 1 )] << get as matrix;
Close( dt3, no save );
```

**Code Explanation**:

1. Open data_table data
2. Stack columns into new table.
3. Subset all rows, selected columns.
4. Select where season less than 7.
5. Exclude selected rows.
6. Perform time series forecast on dt2.
7. Extract model summary report.
8. Get model summary as matrix.
9. Select where season less than 7 in dt3.
10. Delete selected rows in dt3.



### Example 2
> **Summary**: Runs time series forecasting and model summarization for a subset of data, utilizing the Time Series Forecast platform in JMP.

<!-- Keywords: #TimeSeriesForecast, #JMPScriptingLanguage, #DataSubset, #ModelSummary, #Forecasting -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = Data Table("data_table") << Stack(
	columns( :Passengers, :Log Passengers ),
	Source Label Column( "Label" ),
	Stacked Data Column( "Data" ),
	Stack By Row( 0 )
);
dt3 = dt2 << Subset( All rows, Selected columns only( 0 ) );
s1 = dt2 << Select Where( :Season < 7 );
dt2 << Exclude;
obj1 = dt2 << Time Series Forecast( Y( :Data ), Grouping( :Label ), Fit Model( NAhead( 10 ), Seasonality( 12 ), NHoldout( 0 ) ) );
rpt1 = obj1 << report;
test1 = rpt1[Outline Box( "Model Summary" )][Table Box( 1 )] << get as matrix;
s3 = dt3 << Select Where( :Season < 7 );
dt3 << Delete Rows;
obj2 = dt3 << Time Series Forecast( Y( :Data ), Grouping( :Label ), Fit Model( NAhead( 10 ), Seasonality( 12 ), NHoldout( 0 ) ) );
rpt2 = obj2 << report;
test2 = rpt2[Outline Box( "Model Summary" )][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Stack columns "Passengers", "Log Passengers".
3. Create subset of all rows.
4. Select rows where :Season < 7.
5. Exclude selected rows.
6. Perform time series forecast on remaining data.
7. Retrieve model summary from first forecast.
8. Select rows where :Season < 7 in subset.
9. Delete selected rows in subset.
10. Perform time series forecast on modified subset data.



## Fit Model using Is Scriptable
> **Summary**: Process of checking scriptability for a model dialog fit in JMP, ensuring seamless integration with data tables.

<!-- Keywords: #JMPScriptingLanguage, #ScriptabilityCheck, #ModelDialogFit, #DataTableIntegration, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
test = Is Scriptable( obj = Fit Model( Model Dialog ) );
```

**Code Explanation**:

1. Open data table;
2. Check if scriptable.
3. Fit model dialog.



## Fit Model using V List Box
> **Summary**: Creates an interactive ANOVA GUI, allowing users to select response and factor columns and generate a report.

<!-- Keywords: #JMPScriptingLanguage, #ANOVAAnalysis, #DataVisualization, #InteractiveInterface, #GUIDevelopment -->

**Code**:
```jsl
dt = Open("data_table.jmp");
 
// Create a placeholder for the report
reportBox = V List Box();
 
New Window("ANOVA GUI",
	Panel Box("Select Columns",
		Lineup Box(NCol(2),
		Text Box("Response Column:"),
		cbResponse = Combo Box(dt << Get Column Names( numeric, string ), <<Set Width(150)),
		Text Box("Factor Column:"),
		cbFactor = Combo Box(dt << Get Column Names( character, string ), <<Set Width(150))
		),
 
 
		Button Box("Run ANOVA",
			responseColName = cbResponse << Get Selected;
			factorColName = cbFactor << Get Selected;
 
			If(
			Is Missing(responseColName) | Is Missing(factorColName),
				New Window("Error", Text Box("Please select both a response and a factor column.")),
 
				// Run the Fit Model platform
				modelReport = dt << Fit Model(
					Y( Eval( Column(responseColName) ) ),
					Effects( Eval( Column(factorColName) ) ),
					Personality("Standard Least Squares"),
					Emphasis("Minimal Report"),
					Run
				);
 
 
 
				// Extract the report and insert it into the placeholder
				report = modelReport << Report;
				
				reportBox << Prepend(report);
				modelReport << Close window;
				
				// pare the placeholder back down to just one item if necessary
				if (n items (reportBox) > 1, reportBox[2] << Delete;);
				
 
				// Window("ANOVA GUI 22")["Response weight"]
				// reportbox << XPath("//OutlineBox[1]") << Close window;
				)
		),
		reportBox
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create placeholder for report.
3. Initialize new window.
4. Add panel for column selection.
5. Add lineup box for input fields.
6. Add combo box for response column.
7. Add combo box for factor column.
8. Add button to run ANOVA.
9. Retrieve selected column names.
10. Check for missing selections.
11. Run Fit Model platform.
12. Extract report from model.
13. Insert report into placeholder.
14. Close model report window.
15. Ensure only one report in placeholder.



