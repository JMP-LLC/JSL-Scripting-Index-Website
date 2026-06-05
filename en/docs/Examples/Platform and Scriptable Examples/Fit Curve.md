# Fit Curve

### Example 1
> **Summary**: Fits a curve to model dissolution by time, grouping by batch and performing F2 analysis with specified unit ID, alpha level, reference level, and bootstrap samples.

<!-- Keywords: #FitCurve, #DissolutionModeling, #BatchGrouping, #F2Analysis, #BootstrapSampling -->

**Code**:
```jsl
// Fit Curve of Dissolution by Time
// Open data table
dt = Open("data_table.jmp");
// Fit Curve of Dissolution by Time
Fit Curve(
	Y( :Dissolution ),
	X( :Time ),
	Group( :Batch ),
	F2 Analysis(
		Unit ID( :Tablet in Batch ),
		Alpha( 0.1 ),
		Reference Level( "Reference" ),
		Bootstrap Samples( 2500 )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit curve analysis.
3. Specify response variable.
4. Specify predictor variable.
5. Group by batch.
6. Perform F2 analysis.
7. Set unit ID.
8. Define significance level.
9. Set reference level.
10. Specify bootstrap samples.



### Example 2
> **Summary**: Fits a Weibull growth curve to dissolution data using the Fit Curve platform, with specified effects and without an intercept term, while configuring CDOE Profiler for confidence intervals and initial term values.

<!-- Keywords: #FitCurve, #WeibullGrowth, #CDOEProfiler, #GeneralizedRegressionModel, #JMPScriptingLanguage -->

**Code**:
```jsl
// Weibull Growth DoE Analysis - Fit Curve
// Open data table
dt = Open("data_table.jmp");
// Weibull Growth DoE Analysis - Fit Curve
Fit Curve(
	Data Format( Row ),
	Y(
		:Dissolution 60, :Dissolution 120,
		:Dissolution 240,
		:Dissolution 360
	),
	Group( :Batch ),
	Z(
		:Polymer A, :Polymer B,
		:Total Polymer,
		:Compression Force
	),
	Fit Weibull Growth(
		Curve DOE Analysis(
			CDOE Profiler(
				1,
				Confidence Intervals( 1 ),
				Term Value(
					X(
						195,
						Lock( 1 ),
						Show( 1 )
					),
					Polymer A(
						0.8,
						Lock( 0 ),
						Show( 1 )
					),
					Polymer B(
						0.2,
						Lock( 0 ),
						Show( 1 )
					),
					Total Polymer(
						0.15,
						Lock( 0 ),
						Show( 1 )
					),
					Compression Force(
						2000,
						Lock( 0 ),
						Show( 1 )
					)
				)
			),
			Generalized Regression Parameter Model(
				Parameter( 1 ),
				Estimation Method(
					Best Subset
				),
				Validation Method( AICc ),
				Force( [1 1 0 0 0 0 0] ),
				Model Summary( 0 ),
				Parameter Estimates for Original Predictors(
					0
				),
				Effect Tests( 0 )
			),
			Generalized Regression Parameter Model(
				Parameter( 2 ),
				Estimation Method(
					Best Subset
				),
				Validation Method( AICc ),
				Force( [1 1 0 0 0 0 0] ),
				Model Summary( 0 ),
				Parameter Estimates for Original Predictors(
					0
				),
				Effect Tests( 0 )
			),
			Generalized Regression Parameter Model(
				Parameter( 3 ),
				Estimation Method(
					Best Subset
				),
				Validation Method( AICc ),
				Force( [1 1 0 0 0 0 0] ),
				Model Summary( 0 ),
				Parameter Estimates for Original Predictors(
					0
				),
				Effect Tests( 0 )
			)
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit Weibull Growth curve.
3. Set data format to rows.
4. Specify response variables.
5. Define grouping variable.
6. Identify predictor variables.
7. Configure CDOE Profiler.
8. Enable confidence intervals.
9. Set initial term values.
10. Define generalized regression models.



### Example 3
> **Summary**: Fits a logistic curve to model the relationship between toxicity and log concentration, grouped by formulation, and performs an equivalence test with specified ratios. The results are then sent to a report with customized display settings.

<!-- Keywords: #FitCurve, #LogisticModel, #EquivalenceTest, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
// Fit Curve
// Open data table
dt = Open("data_table.jmp");
// Fit Curve
Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :Formulation ),
	Fit Logistic 4P(
		Equivalence Test(
			Reference Group( "standard" ),
			Equivalence with Ratios( 1 ),
			Equivalence with Ratios( 1 ),
			Equivalence with Ratios( 1 )
		),
		Test Parallelism,
		Save Parametric Prediction Formula
	),
	SendToReport(
		Dispatch( {}, "Plot", OutlineBox,
			{Close( 1 )}
		),
		Dispatch(
			{"Logistic 4P",
			"Equivalence Test Results",
			"Equivalence between test A and standard"
			}, "Ratio Based Equivalence",
			FrameBox,
			{Marker Size( 4 ),
			DispatchSeg(
				Poly Seg( 1 ),
				{Line Color( "None" )}
			)}
		),
		Dispatch(
			{"Logistic 4P",
			"Equivalence Test Results",
			"Equivalence between test B and standard"
			}, "Ratio Based Equivalence",
			FrameBox,
			{Marker Size( 4 ),
			DispatchSeg(
				Poly Seg( 1 ),
				{Line Color( "None" )}
			)}
		),
		Dispatch(
			{"Logistic 4P",
			"Equivalence Test Results",
			"Equivalence between test C and standard"
			}, "Ratio Based Equivalence",
			FrameBox,
			{Marker Size( 4 ),
			DispatchSeg(
				Poly Seg( 1 ),
				{Line Color( "None" )}
			)}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit Curve analysis initiated.
3. Specify Y variable: Toxicity.
4. Specify X variable: log Conc.
5. Group by Formulation.
6. Fit Logistic 4P model.
7. Perform Equivalence Test.
8. Set reference group to "standard".
9. Configure Equivalence with Ratios.
10. Test for parallelism.
11. Save parametric prediction formula.
12. Close initial plot.
13. Adjust equivalence test results display settings.



### Example 4
> **Summary**: Fits multiple logistic and probit curves to a dataset using the Fit Curve platform, with specified groups and models.

<!-- Keywords: #FitCurve, #LogisticModel, #ProbitModel, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
// 
dt = Open("data_table.jmp");
Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :Formulation ),
	Fit Logistic 4P,
	Fit Probit 4P,
	Fit Logistic 4P Hill
);
Fit Curve(
	Y( :Toxicity ),
	X( :Concentration ),
	Group( :Formulation ),
	Fit Logistic 4P Rodbard
);
```

**Code Explanation**:

1. Open data table.
2. Fit curve with logistic 4P model.
3. Fit curve with probit 4P model.
4. Fit curve with logistic 4P Hill model.
5. Fit curve with logistic 4P Rodbard model.



### Example 5
> **Summary**: Fits a logistic 4P curve to model toxicity data, with group comparisons and equivalence tests, and generates reports for model comparison and plot visualization.

<!-- Keywords: #FitCurve, #LogisticRegression, #EquivalenceTesting, #GroupComparison, #JMPScripting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :Formulation ),
	Fit Logistic 4P(
		Equivalence Test(
			Reference Group( "standard" ),
			Equivalence with Ratios( 1 ),
			Equivalence with Ratios( 1 ),
			Equivalence with Ratios( 1 )
		),
		Test Parallelism
	),
	SendToReport(
		Dispatch( {"Model Comparison"}, "", TableBox, {Sort By Column( 2, 1 )} ),
		Dispatch( {}, "Logistic 4P", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Set Title( "Plot: *** look at tooltips here, should not be null" )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit logistic 4P curve.
3. Set reference group to "standard".
4. Perform equivalence tests.
5. Test for parallelism.
6. Sort model comparison table.
7. Close logistic 4P outline.
8. Set plot title.



### Example 6
> **Summary**: Fits a cubic, linear, and quadratic curve to model Net Cost over Days Advance Purchase in a data table, with customizable plot scripts and confidence intervals.

<!-- Keywords: #FitCurve, #JMPScriptingLanguage, #DataModeling, #Plotting, #ConfidenceIntervals -->

**Code**:
```jsl
Open("data_table.jmp") << Fit Curve(
	Y( :Net Cost ),
	X( :Days Advance Purchase ),
	Fit Cubic( Profiler( 1, Confidence Intervals( 1 ), Term Value( Days Advance Purchase( 17.88, Lock( 0 ), Show( 1 ) ) ) ) ),
	Fit Linear,
	Fit Quadratic,
	SendToReport(
		Dispatch( {"Plot"}, "Fit Curve Report", FrameBox,
			{DispatchSeg(
				TopSeg( 1 ),
				{Set Script(
					Pen Color( -4354269 );
					Y Function(
						2381.75915443108 + -26.3270307195393 * Days Advance Purchase + 0.54141694483968 * Days Advance Purchase ^ 2 +
						-0.00305577481222314 * Days Advance Purchase ^ 3,
						Days Advance Purchase
					);
				)}
			), DispatchSeg(
				TopSeg( 2 ),
				{Set Script(
					Pen Color( -13400361 );
					Y Function( 2221.90639301051 + -5.32734340817896 * Days Advance Purchase, Days Advance Purchase );
				)}
			), DispatchSeg(
				TopSeg( 3 ),
				{Set Script(
					Pen Color( -2668175 );
					Y Function(
						2269.42767902643 + -9.64315422042397 * Days Advance Purchase + 0.0507451757206061 * Days Advance Purchase ^ 2,
						Days Advance Purchase
					);
				)}
			)}
		),
		Dispatch( {}, "Cubic", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Linear", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Linear"}, "Prediction Model", OutlineBox, {Close( 0 )} ),
		Dispatch( {}, "Quadratic", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Quadratic"}, "Prediction Model", OutlineBox, {Close( 0 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit cubic curve.
3. Enable profiler.
4. Set confidence intervals.
5. Set term value.
6. Fit linear model.
7. Fit quadratic model.
8. Customize plot script.
9. Change pen color.
10. Close unnecessary outlines.



### Example 7
> **Summary**: Fits a linear curve to chins vs weight, adding a local data filter for situps, and extracting parameter estimates from the report.

<!-- Keywords: #FitCurve, #LinearRegression, #LocalDataFilter, #ParameterEstimates, #JMPScripting -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
FitCurve_LDF = dt1 << Fit Curve( Y( :chins ), X( :weight ), Fit Linear );
FitCurve_LDF << Local Data Filter( Add Filter( columns( :situps ), Where( :situps >= 192.38 & :situps <= 251 ) ) );
ParameterEst = Report( FitCurve_LDF )[Outline Box( "Fit Curve" )][Outline Box( "Linear" )][Outline Box( "Parameter Estimates" )][
Table Box( 1 )] << Make Into Data Table;
vals = ParameterEst << get as matrix;
text1 = (Report( FitCurve_LDF ) << Parent)[Outline Box( 1 )][Text Box( 1 )] << Get Text;
```

**Code Explanation**:

1. Open data table.
2. Fit linear curve to chins vs weight.
3. Add local data filter for situps.
4. Extract parameter estimates report.
5. Convert estimates to matrix.
6. Retrieve text from report.



### Example 8
> **Summary**: Fits a logistic 4P curve to predict toxicity levels based on log concentration and formulation group, saving the prediction formula for further analysis.

<!-- Keywords: #FitCurve, #LogisticRegression, #PredictiveModeling, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), Fit Logistic 4P );
obj << (Fit[1] << Save Prediction Formula);
prop1 = dt:Toxicity Predictor << get property( "Predicting" );
```

**Code Explanation**:

1. Open data_table data
2. Fit logistic 4P curve.
3. Save prediction formula.
4. Get predicting property.



### Example 9
> **Summary**: Fits a linear curve to predict height based on weight, generates a prediction profiler report, and saves bagged predictions with 2 iterations.

<!-- Keywords: #FitCurve, #PredictionProfiler, #BaggedPredictions, #LinearRegression, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Curve( Y( :height ), X( :weight ), Fit Linear( Profiler( 1 ) ) );
rpt = obj << report;
scptObj = rpt[Outline Box( "Prediction Profiler" )] << get scriptable object;
scptObj << Save Bagged Predictions( 2, Random Seed( 12345 ) );
latest = Column( 18 ) << getasmatrix;
Close( dt, nosave );
previous = [61.4001132085979, 64.7250645808446, 57.7064833070605, 66.5818524496217, 55.3537205800792, 59.6383779474339, 65.1930882066591,
58.7176470157176, 63.5776189842256, 62.9941700875311, 56.1116696511706, 61.8271289563357, 62.748493319043, 61.4001132085979,
58.7176470157176, 59.0960928842128, 60.7972207277169, 66.3569745530643, 59.6383779474339, 59.8127307947223, 61.1036564625456,
61.9649786803403, 64.3277002763886, 60.9517172089283, 63.5776189842256, 61.9649786803403, 63.6893379591226, 60.9517172089283,
63.5776189842256, 65.1930882066591, 63.4642908214641, 62.748493319043, 62.6228598782666, 62.8722494626038, 63.5776189842256,
63.9080835598046, 65.1930882066591, 64.0151754416483, 65.7165492336944, 68.3019833632967];
```

**Code Explanation**:

1. Open data table;
2. Fit linear curve on height vs weight.
3. Generate prediction profiler.
4. Get prediction profiler report.
5. Access prediction profiler scriptable object.
6. Save bagged predictions with 2 iterations.
7. Extract latest predictions matrix.
8. Close "data_table.jmp" without saving.
9. Define previous predictions array.
10. Compare latest and previous predictions.



### Example 10
> **Summary**: Fits a Michaelis-Menten curve to predict height based on weight, generating a report and saving bagged predictions with a random seed.

<!-- Keywords: #FitCurve, #MichaelisMenten, #PredictionProfiler, #BaggedPredictions, #RandomSeed -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Curve( Y( :height ), X( :weight ), Fit Michaelis Menten( Profiler( 1 ) ) );
rpt = obj << report;
scptObj = rpt[Outline Box( "Prediction Profiler" )] << get scriptable object;
scptObj << Save Bagged Predictions( 2, Random Seed( 12345 ) );
latest = Column( 18 ) << getasmatrix;
```

**Code Explanation**:

1. Open data table.
2. Fit Michaelis Menten curve.
3. Generate report.
4. Access Prediction Profiler.
5. Get scriptable object.
6. Save bagged predictions.
7. Set random seed.
8. Retrieve latest column.
9. Convert to matrix.



### Example 11
> **Summary**: Fits a linear curve to height vs weight data, generating a prediction profiler report and saving bagged predictions with 2 iterations.

<!-- Keywords: #FitCurve, #PredictionProfiler, #BaggedPredictions, #LinearRegression, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Curve( Y( :height ), X( :weight ), Fit Linear( Profiler( 1 ) ) );
rpt = obj << report;
scptObj = rpt[Outline Box( "Prediction Profiler" )] << get scriptable object;
scptObj << Save Bagged Predictions( 2, Random Seed( 12345 ) );
latest = Column( 18 ) << getasmatrix;
```

**Code Explanation**:

1. Open data table;
2. Fit linear curve to height vs weight.
3. Generate prediction profiler report.
4. Retrieve prediction profiler scriptable object.
5. Save bagged predictions with 2 iterations.
6. Set random seed to 12345 for reproducibility.
7. Extract latest column data as matrix.



### Example 12
> **Summary**: Fits and creates reports for linear and nonlinear models to predict height based on weight, grouped by sex, using JMP's Fit Curve and Nonlinear platforms.

<!-- Keywords: #JMPScriptingLanguage, #FitCurve, #NonlinearModeling, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fc = dt << Fit Curve( Y( :height ), X( :weight ), Group( :sex ), Fit Linear );
rfc = fc << report;
est1 = Matrix( rfc[Number Col Box( "Estimate" )] << get );
std1 = Matrix( rfc[Number Col Box( "Std Error" )] << get );
fc << (Fit["Linear"] << Remove Fit);
fc << Fit Michaelis Menten;
fc << (Fit[1] << Remove Fit);
nlin = dt << Nonlinear(
	Y( :height ),
	Model(
		Parameter( {a_F = 50, b_F = 0.12, a_M = 50, b_M = 0.12}, Match( :sex, "F", a_F + b_F * :weight, "M", a_M + b_M * :weight, . ) )
	),
	Group( :sex ),
	Newton,
	Finish
);
rpt = nlin << report;
est2 = Matrix( rpt[Number Col Box( "Estimate" )] << get );
std2 = Matrix( rpt[Number Col Box( "ApproxStdErr" )] << get );
```

**Code Explanation**:

1. Open data table;
2. Fit linear curve on height vs weight grouped by sex.
3. Retrieve linear fit estimates and standard errors.
4. Remove linear fit from model.
5. Add Michaelis-Menten fit to model.
6. Remove Michaelis-Menten fit from model.
7. Perform nonlinear fit on height vs weight grouped by sex.
8. Retrieve nonlinear fit estimates and approximate standard errors.



### Example 13
> **Summary**: Fits and creates reports for a quadratic curve model to predict height based on weight, with separate estimates for male and female subjects, and then performs nonlinear regression using the Michaelis-Menten model.

<!-- Keywords: #FitCurve, #NonlinearRegression, #MichaelisMentenModel, #QuadraticCurve, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fc = dt << Fit Curve( Y( :height ), X( :weight ), Group( :sex ), Fit Quadratic );
rfc = fc << report;
est1 = Matrix( rfc[Number Col Box( "Estimate" )] << get );
std1 = Matrix( rfc[Number Col Box( "Std Error" )] << get );
fc << (Fit["Quadratic"] << Remove Fit);
fc << Fit Michaelis Menten;
fc << (Fit[1] << Remove Fit);
nlin = dt << Nonlinear(
	Y( :height ),
	Model(
		Parameter(
			{a_F = 35, b_F = 0.5, c_F = -0.001, a_M = 20, b_M = 0.6, c_M = -0.002},
			Match( :sex, "F", a_F + b_F * :weight + c_F * :weight ^ 2, "M", a_M + b_M * :weight + c_M * :weight ^ 2, . )
		)
	),
	Group( :sex ),
	Newton,
	Finish
);
rpt = nlin << report;
est2 = Matrix( rpt[Number Col Box( "Estimate" )] << get );
std2 = Matrix( rpt[Number Col Box( "ApproxStdErr" )] << get );
```

**Code Explanation**:

1. Open data table.
2. Fit quadratic curve model.
3. Retrieve fit curve report.
4. Extract parameter estimates.
5. Extract standard errors.
6. Remove quadratic fit.
7. Add Michaelis Menten fit.
8. Remove Michaelis Menten fit.
9. Perform nonlinear regression.
10. Retrieve nonlinear regression report.



### Example 14
> **Summary**: Fits a nonlinear model to data, extracting estimates and standard errors, and visualizing the results using JMP's Fit Curve and Nonlinear platforms.

<!-- Keywords: #JMPScriptingLanguage, #FitCurve, #NonlinearModeling, #Estimation, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fc = dt << Fit Curve( Y( :height ), X( :weight ), Group( :sex ), Fit Cubic );
rfc = fc << report;
est1 = Matrix( rfc[Number Col Box( "Estimate" )] << get );
std1 = Matrix( rfc[Number Col Box( "Std Error" )] << get );
fc << (Fit["Cubic"] << Remove Fit);
fc << Fit Michaelis Menten;
fc << (Fit[1] << Remove Fit);
nlin = dt << Nonlinear(
	Y( :height ),
	Model(
		Parameter(
			{a_F = -90, b_F = 4, c_F = -0.04, d_F = 0.01, a_M = -102, b_M = 4, c_M = -0.02, d_M = 0.01},
			Match( :sex,
				"F", a_F + b_F * :weight + c_F * :weight ^ 2 + d_F * :weight ^ 3,
				"M", a_M + b_M * :weight + c_M * :weight ^ 2 + d_M * :weight ^ 3,
				.
			)
		)
	),
	Group( :sex ),
	Newton,
	Finish
);
rpt = nlin << report;
est2 = Matrix( rpt[Number Col Box( "Estimate" )] << get );
std2 = Matrix( rpt[Number Col Box( "ApproxStdErr" )] << get );
```

**Code Explanation**:

1. Open data table.
2. Fit cubic curve model.
3. Extract fit report.
4. Get parameter estimates.
5. Get standard errors.
6. Remove cubic fit.
7. Fit Michaelis Menten model.
8. Remove Michaelis Menten fit.
9. Fit nonlinear model.
10. Extract nonlinear report.



### Example 15
> **Summary**: Fits a generalized linear model using the Fit Model platform with specified effects and without an intercept term, retrieving fit reports, extracting estimates and standard errors, and performing nonlinear fits.

<!-- Keywords: #FitModel, #GeneralizedLinearModel, #NonlinearFitting, #JSLScripting, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fc = dt << Fit Curve( Y( :height ), X( :weight ), Group( :sex ), Fit Quartic );
rfc = fc << report;
est1 = Matrix( rfc[Number Col Box( "Estimate" )] << get );
std1 = Matrix( rfc[Number Col Box( "Std Error" )] << get );
fc << (Fit["Quartic"] << Remove Fit);
fc << Fit Michaelis Menten;
fc << (Fit[1] << Remove Fit);
nlin = dt << Nonlinear(
	Y( :height ),
	Model(
		Parameter(
			{a_F = -97, b_F = 5, c_F = -0.04, d_F = 0.0001, f_F = -0.01, a_M = -190, b_M = 7, c_M = -0.06, d_M = 0.0003, f_M = -0.04},
			Match( :sex,
				"F", a_F + b_F * :weight + c_F * :weight ^ 2 + d_F * :weight ^ 3 + f_F * :weight ^ 4,
				"M", a_M + b_M * :weight + c_M * :weight ^ 2 + d_M * :weight ^ 3 + f_M * :weight ^ 4,
				.
			)
		)
	),
	Group( :sex ),
	Newton,
	Finish
);
rpt = nlin << report;
est2 = Matrix( rpt[Number Col Box( "Estimate" )] << get );
std2 = Matrix( rpt[Number Col Box( "ApproxStdErr" )] << get );
```

**Code Explanation**:

1. Open data table.
2. Fit quartic curve model.
3. Retrieve fit report.
4. Extract estimates.
5. Extract standard errors.
6. Remove quartic fit.
7. Fit Michaelis-Menten model.
8. Remove Michaelis-Menten fit.
9. Perform nonlinear fit.
10. Retrieve nonlinear report.



### Example 16
> **Summary**: Fits a quintic curve, then a Michaelis-Menten model to a dataset, and finally performs nonlinear regression using specified effects without an intercept term.

<!-- Keywords: #FitCurve, #MichaelisMenten, #NonlinearRegression, #JSLScripting, #GeneralizedLinearModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fc = dt << Fit Curve( Y( :height ), X( :weight ), Group( :sex ), Fit Quintic );
rfc = fc << report;
est1 = Matrix( rfc[Number Col Box( "Estimate" )] << get );
std1 = Matrix( rfc[Number Col Box( "Std Error" )] << get );
fc << (Fit["Quintic"] << Remove Fit);
fc << Fit Michaelis Menten;
fc << (Fit[1] << Remove Fit);
nlin = dt << Nonlinear(
	Y( :height ),
	Model(
		Parameter(
			{a_F = -150, b_F = 7, c_F = -0.1, d_F = 0.1, f_F = -0.02, g_F = 0.05, a_M = -408, b_M = 16, c_M = -0.25, d_M = 0.01, f_M =
			-0.07, g_M = 0.1},
			Match( :sex,
				"F", a_F + b_F * :weight + c_F * :weight ^ 2 + d_F * :weight ^ 3 + f_F * :weight ^ 4 + g_F * :weight ^ 5,
				"M", a_M + b_M * :weight + c_M * :weight ^ 2 + d_M * :weight ^ 3 + f_M * :weight ^ 4 + g_M * :weight ^ 5,
				.
			)
		)
	),
	Group( :sex ),
	Newton,
	Finish
);
rpt = nlin << report;
est2 = Matrix( rpt[Number Col Box( "Estimate" )] << get );
std2 = Matrix( rpt[Number Col Box( "ApproxStdErr" )] << get );
```

**Code Explanation**:

1. Open data table;
2. Fit quintic curve.
3. Retrieve fit report.
4. Extract estimates.
5. Extract standard errors.
6. Remove quintic fit.
7. Fit Michaelis Menten.
8. Remove Michaelis Menten fit.
9. Perform nonlinear regression.
10. Retrieve nonlinear report.



### Example 17
> **Summary**: Fits and creates reports for logistic and Michaelis-Menten curves to a dissolution data set, extracting parameter estimates and standard errors.

<!-- Keywords: #FitCurve, #LogisticRegression, #MichaelisMentenModel, #NonlinearFitting, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fc = dt << Fit Curve( Y( :Y ), X( :X ), Fit Logistic 2p );
rfc = fc << report;
est1 = Matrix( rfc[Number Col Box( "Estimate" )] << get );
std1 = Matrix( rfc[Number Col Box( "Std Error" )] << get );
fc << (Fit["Logistic 2p"] << Remove Fit);
fc << Fit Michaelis Menten;
fc << (Fit[1] << Remove Fit);
nlin = dt << Nonlinear( Y( :Y ), Model( Parameter( {a = 0.01, b = 200}, 1 / (1 + Exp( -a * (:X - b) )) ) ), Newton, Finish );
rpt = nlin << report;
est2 = Matrix( rpt[Number Col Box( "Estimate" )] << get );
```

**Code Explanation**:

1. Open data table.
2. Fit logistic 2p curve.
3. Retrieve fit report.
4. Extract parameter estimates.
5. Extract standard errors.
6. Remove logistic 2p fit.
7. Fit Michaelis Menten model.
8. Remove Michaelis Menten fit.
9. Perform nonlinear fitting.
10. Retrieve nonlinear report.



### Example 18
> **Summary**: Fits and creates reports for Gompertz 3p and Michaelis Menten curves to a dissolution data table, extracting estimates and standard errors for each model.

<!-- Keywords: #FitCurve, #Gompertz3p, #MichaelisMenten, #NonlinearFit, #DissolutionData -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fc = dt << Fit Curve( Y( :Y ), X( :X ), Fit Gompertz 3p );
rfc = fc << report;
est1 = Matrix( rfc[Number Col Box( "Estimate" )] << get );
std1 = Matrix( rfc[Number Col Box( "Std Error" )] << get );
fc << (Fit["Gompertz 3p"] << Remove Fit);
fc << Fit Michaelis Menten;
fc << (Fit[1] << Remove Fit);
nlin = dt << Nonlinear( Y( :Y ), Model( Parameter( {a = 1, b = 0.05, c = 6}, a * Exp( -Exp( -b * (:X - c) ) ) ) ), Newton, Finish );
rpt = nlin << report;
est2 = Matrix( rpt[Number Col Box( "Estimate" )] << get );
std2 = Matrix( rpt[Number Col Box( "ApproxStdErr" )] << get );
```

**Code Explanation**:

1. Open data table.
2. Fit Gompertz 3p curve.
3. Extract estimates.
4. Extract standard errors.
5. Remove Gompertz fit.
6. Fit Michaelis Menten curve.
7. Remove Michaelis Menten fit.
8. Perform nonlinear fit.
9. Extract estimates.
10. Extract standard errors.



### Example 19
> **Summary**: Fits a Probit curve model to predict height based on weight, grouped by sex, and generates report estimates for parallel fit parameters.

<!-- Keywords: #FitCurve, #ProbitModel, #GeneralizedLinearModel, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Curve( Y( :Height ), X( :weight ), Group( :sex ), Fit Probit 4P( Test Parallelism ) );
rpt = obj << report;
est = rpt[Outline Box( "Parallel Fit Parameter Estimates" )][Number Col Box( "Estimate" )] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Fit nonlinear curve model.
3. Specify height as response.
4. Specify weight as predictor.
5. Group by sex.
6. Use 4-parameter Probit fit.
7. Test for parallelism.
8. Generate report object.
9. Extract parallel fit estimates.
10. Convert estimates to matrix.



### Example 20
> **Summary**: Fits an exponential curve to dissolution data, grouping by batch number and providing inverse predictions for specific concentrations.

<!-- Keywords: #FitCurve, #ExponentialModel, #InversePrediction, #BatchGrouping, #JSLScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Curve(
	Y( :Name( "Concentration (mg/Kg)" ) ),
	X( :Time ),
	Group( :Batch Number ),
	Fit Exponential 3P(
		Custom Inverse Prediction( Confidence Level( 0.9 ), Response( 110 ) ),
		Custom Inverse Prediction( Confidence Level( 0.9 ), Response( 100 ) ),
		Custom Inverse Prediction( Confidence Level( 0.9 ), Response( 90 ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Select Fit Curve analysis.
3. Set response variable.
4. Set predictor variable.
5. Group by batch number.
6. Choose Exponential 3P fit.
7. Add inverse prediction for 110 mg/Kg.
8. Set confidence level to 90%.
9. Add inverse prediction for 100 mg/Kg.
10. Set confidence level to 90%.



### Example 21
> **Summary**: Fits a generalized linear model to predict height based on weight, grouped by sex, and performs custom inverse prediction at 150 units.

<!-- Keywords: #FitCurve, #GeneralizedLinearModel, #CustomInversePrediction, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Curve( Y( :height ), X( :weight ), Group( :sex ) );
obj << Fit Linear;
obj << (Fit[1] << {remove fit, Equivalence Test( Reference Group( "F" ) )});
obj << Fit Linear;
obj << (Fit[1] << {remove fit, Custom Inverse Prediction( Response( 150 ) )});
```

**Code Explanation**:

1. Open data table;
2. Fit curve to height vs weight.
3. Group by sex.
4. Fit linear model.
5. Remove first fit.
6. Perform equivalence test for males.
7. Fit linear model again.
8. Remove first fit.
9. Perform custom inverse prediction at 150.



### Example 22
> **Summary**: Fits a logistic curve to model algae density over days, grouped by treatment, with inverse prediction enabled and response value set to 2.5.

<!-- Keywords: #FitCurve, #LogisticRegression, #InversePrediction, #Grouping, #CustomFit -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Curve(
	Y( :Algae density ),
	X( :Days ),
	Group( :Treatment ),
	Fit Logistic 4P( Custom Inverse Prediction( Response( 2.5 ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Fit nonlinear curve.
3. Specify algae density as Y.
4. Use days as X variable.
5. Group by treatment.
6. Choose logistic 4P fit.
7. Enable inverse prediction.
8. Set response value to 2.5.



### Example 23
> **Summary**: Fits logistic 4P Hill curve models to predict toxicity values, with data splitting and customized inverse prediction for response values.

<!-- Keywords: #FitCurve, #LogisticModel, #DataSplitting, #CustomInversePrediction, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :Formulation ),
	Fit Logistic 4P Hill( Custom Inverse Prediction( Response( 0.8 ) ) )
);
rpt = obj << report;
predVal = rpt["Predicted Values"][Table Box( 1 )] << get as matrix;
Log Capture(
	dt1 = dt << Split(
		Split By( :Formulation ),
		Split( :Toxicity ),
		Output Table( "Split of data_table by Formulation" ),
		Remaining Columns( Keep( :log Conc ) ),
		Sort by Column Property
	)
);
obj1 = dt1 << Fit Curve(
	Data Format( Column ),
	Y( :test A, :test B, :test C, :standard ),
	X( :log Conc ),
	Fit Logistic 4P Hill( Custom Inverse Prediction( Response( 0.8 ) ) )
);
rpt1 = obj1 << report;
predVal1 = rpt1["Predicted Values"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Fit logistic 4P Hill curve model.
3. Extract predicted values report.
4. Convert predicted values to matrix.
5. Log capture starts.
6. Split data by formulation.
7. Fit logistic 4P Hill curve model on split data.
8. Extract predicted values report from split data.
9. Convert predicted values to matrix for split data.
10. Log capture ends.



### Example 24
> **Summary**: Fits a biexponential curve to data, grouping by batch and performing Curve DOE analysis.

<!-- Keywords: #FitCurve, #BiexponentialModel, #CurveDOEAnalysis, #BatchGrouping, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
```

**Code Explanation**:

1. Open data table.
2. Fit curve model.
3. Specify response variable.
4. Specify predictor variable.
5. Group data by batch.
6. Include additional predictors.
7. Select biexponential fit.
8. Perform curve DOE analysis.
9. Analyze results.
10. End script.



### Example 25
> **Summary**: Fits a linear curve to dissolution data over time, utilizing the Fit Curve platform.

<!-- Keywords: #FitCurve, #LinearModel, #DissolutionData, #TimeSeriesAnalysis, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fc = dt << Fit Curve(
	Data Format( Column ),
	Y( :"1980"n, :"1984"n, :"1988"n, :"1992"n, :"1996"n, :"2000"n, :"2004"n, :"2008"n, :"2012"n ),
	Fit Linear
);
```

**Code Explanation**:

1. Open table.
2. Fit curve model.
3. Specify data format.
4. Set Y variables.
5. Choose linear fit.



### Example 26
> **Summary**: Fits a curve to dissolution data, grouping by batch and including predictor variables, with T2EQ analysis and report generation.

<!-- Keywords: #FitCurve, #T2EQAnalysis, #BatchGrouping, #PredictorVariables, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force )
);
obj << T2EQ( Alpha( 0.1 ), Reference Level( "R01" ) );
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Define data format.
3. Specify response variables.
4. Group by batch.
5. Include predictor variables.
6. Set T2EQ alpha level.
7. Define reference level.
8. Generate fit curve report.



### Example 27
> **Summary**: Fits a curve to data, capturing log output, and deleting columns in JMP.

<!-- Keywords: #JMPScriptingLanguage, #FitCurve, #DataManipulation, #LogCapture, #ColumnDeletion -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fc = dt << Fit Curve( Y( :Birth Year ), X( :Toothpaste Cost ) );
Log Capture( dt << Delete Columns( {"Birth Year"} ) );
fc << Fit Quintic( Save Studentized Residual Formula );
fc << close window;
```

**Code Explanation**:

1. Open data table.
2. Fit curve model.
3. Capture log output.
4. Delete "Birth Year" column.
5. Fit quintic model.
6. Save studentized residuals.
7. Close fit curve window.



### Example 28
> **Summary**: Fits a curve to data, deleting columns, and capturing log output using JMP's Fit Curve platform.

<!-- Keywords: #FitCurve, #JMPScriptingLanguage, #DataAnalysis, #CurveFitting, #LogOutput -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fc = dt << Fit Curve( Y( :Birth Year ), X( :Toothpaste Cost ) );
Log Capture( dt << Delete Columns( {"Birth Year"} ) );
fc << Fit Quartic( Save Residual Formula );
fc << close window;
```

**Code Explanation**:

1. Open data table.
2. Fit curve model.
3. Delete "Birth Year" column.
4. Capture log output.
5. Fit quartic model.
6. Save residual formula.
7. Close fit curve window.



## Fit Curve using New Column
### Example 1
> **Summary**: Fits a standard least squares model with multiple effects and generating a profiler plot to analyze height vs weight data, utilizing JMP's Fit Curve and Nonlinear platforms.

<!-- Keywords: #JMPScriptingLanguage, #FitCurve, #NonlinearModeling, #ProfilerPlot, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Fractional Frequencies", Set Values( 1 ) );
fc = dt << Fit Curve( Y( :height ), X( :weight ), Group( :sex ), Fit Linear );
rfc = fc << report;
est1 = Matrix( rfc[Number Col Box( "Estimate" )] << get );
std1 = Matrix( rfc[Number Col Box( "Std Error" )] << get );
nlin = dt << Nonlinear(
	Y( :height ),
	Model(
		Parameter( {a_F = 50, b_F = 0.12, a_M = 50, b_M = 0.12}, Match( :sex, "F", a_F + b_F * :weight, "M", a_M + b_M * :weight, . ) )
	),
	Group( :sex ),
	Freq( :Fractional Frequencies ),
	Newton,
	Finish
);
rpt = nlin << report;
est2 = Matrix( rpt[Number Col Box( "Estimate" )] << get );
```

**Code Explanation**:

1. Open data table;
2. Add Fractional Frequencies column.
3. Fit linear curve to height vs weight.
4. Extract linear fit report.
5. Retrieve linear estimates.
6. Retrieve linear standard errors.
7. Fit nonlinear model to height vs weight.
8. Extract nonlinear fit report.
9. Retrieve nonlinear estimates.



### Example 2
> **Summary**: Fits a standard least squares model with multiple effects and generating a profiler plot, utilizing JMP's Fit Curve and Nonlinear platforms.

<!-- Keywords: #JMPScriptingLanguage, #FitCurve, #NonlinearFitting, #ProfilerPlot, #LeastSquaresModel -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Fractional Frequencies", Set Values( 1 ) );
fc = dt << Fit Curve( Y( :height ), X( :weight ), Group( :sex ), Fit Quadratic );
rfc = fc << report;
est1 = Matrix( rfc[Number Col Box( "Estimate" )] << get );
std1 = Matrix( rfc[Number Col Box( "Std Error" )] << get );
nlin = dt << Nonlinear(
	Y( :height ),
	Model(
		Parameter(
			{a_F = 35, b_F = 0.5, c_F = -0.001, a_M = 20, b_M = 0.6, c_M = -0.002},
			Match( :sex, "F", a_F + b_F * :weight + c_F * :weight ^ 2, "M", a_M + b_M * :weight + c_M * :weight ^ 2, . )
		)
	),
	Group( :sex ),
	Freq( :Fractional Frequencies ),
	Newton,
	Finish
);
rpt = nlin << report;
est2 = Matrix( rpt[Number Col Box( "Estimate" )] << get );
```

**Code Explanation**:

1. Open data table.
2. Add new column "Fractional Frequencies".
3. Fit quadratic curve model.
4. Retrieve fit curve report.
5. Extract estimates from report.
6. Extract standard errors from report.
7. Perform nonlinear fitting.
8. Retrieve nonlinear report.
9. Extract estimates from report.



### Example 3
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot for height vs weight data grouped by sex.

<!-- Keywords: #JSLScripting, #NonlinearFit, #CurveFitting, #DataModeling, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Fractional Frequencies", Set Values( 1 ) );
fc = dt << Fit Curve( Y( :height ), X( :weight ), Group( :sex ), Fit Cubic );
rfc = fc << report;
est1 = Matrix( rfc[Number Col Box( "Estimate" )] << get );
std1 = Matrix( rfc[Number Col Box( "Std Error" )] << get );
nlin = dt << Nonlinear(
	Y( :height ),
	Model(
		Parameter(
			{a_F = -90, b_F = 4, c_F = -0.04, d_F = 0.01, a_M = -102, b_M = 4, c_M = -0.02, d_M = 0.01},
			Match( :sex,
				"F", a_F + b_F * :weight + c_F * :weight ^ 2 + d_F * :weight ^ 3,
				"M", a_M + b_M * :weight + c_M * :weight ^ 2 + d_M * :weight ^ 3,
				.
			)
		)
	),
	Group( :sex ),
	Freq( :Fractional Frequencies ),
	Newton,
	Finish
);
rpt = nlin << report;
est2 = Matrix( rpt[Number Col Box( "Estimate" )] << get );
```

**Code Explanation**:

1. Open data table.
2. Add new column "Fractional Frequencies".
3. Fit cubic curve to height vs weight grouped by sex.
4. Extract fit curve report.
5. Retrieve estimates from fit curve report.
6. Retrieve standard errors from fit curve report.
7. Perform nonlinear fit on height vs weight grouped by sex.
8. Define nonlinear model with parameters for each sex.
9. Use Newton method for optimization.
10. Extract nonlinear fit report.



### Example 4
> **Summary**: Fits a standard least squares model with multiple effects and generating a profiler plot for a given data table.

<!-- Keywords: #JSLScripting, #LeastSquaresModel, #NonlinearFitting, #ProfilerPlot, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Fractional Frequencies", Set Values( 1 ) );
fc = dt << Fit Curve( Y( :height ), X( :weight ), Group( :sex ), Fit Quartic );
rfc = fc << report;
est1 = Matrix( rfc[Number Col Box( "Estimate" )] << get );
std1 = Matrix( rfc[Number Col Box( "Std Error" )] << get );
nlin = dt << Nonlinear(
	Y( :height ),
	Model(
		Parameter(
			{a_F = -97, b_F = 5, c_F = -0.04, d_F = 0.0001, f_F = -0.01, a_M = -190, b_M = 7, c_M = -0.06, d_M = 0.0003, f_M = -0.04},
			Match( :sex,
				"F", a_F + b_F * :weight + c_F * :weight ^ 2 + d_F * :weight ^ 3 + f_F * :weight ^ 4,
				"M", a_M + b_M * :weight + c_M * :weight ^ 2 + d_M * :weight ^ 3 + f_M * :weight ^ 4,
				.
			)
		)
	),
	Group( :sex ),
	Freq( :Fractional Frequencies ),
	Newton,
	Finish
);
rpt = nlin << report;
est2 = Matrix( rpt[Number Col Box( "Estimate" )] << get );
```

**Code Explanation**:

1. Open data table.
2. Add new column "Fractional Frequencies".
3. Fit quartic curve model.
4. Retrieve fit curve report.
5. Extract estimates from report.
6. Extract standard errors from report.
7. Perform nonlinear fitting.
8. Retrieve nonlinear fit report.
9. Extract estimates from report.
10. Store final estimates.



### Example 5
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot to visualize the results.

<!-- Keywords: #JSLScripting, #LeastSquaresModel, #MultipleEffects, #ProfilerPlot, #NonlinearFitting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Fractional Frequencies", Set Values( 1 ) );
fc = dt << Fit Curve( Y( :height ), X( :weight ), Group( :sex ), Fit Quintic );
rfc = fc << report;
est1 = Matrix( rfc[Number Col Box( "Estimate" )] << get );
std1 = Matrix( rfc[Number Col Box( "Std Error" )] << get );
nlin = dt << Nonlinear(
	Y( :height ),
	Model(
		Parameter(
			{a_F = -150, b_F = 7, c_F = -0.1, d_F = 0.1, f_F = -0.02, g_F = 0.05, a_M = -408, b_M = 16, c_M = -0.25, d_M = 0.01, f_M =
			-0.07, g_M = 0.1},
			Match( :sex,
				"F", a_F + b_F * :weight + c_F * :weight ^ 2 + d_F * :weight ^ 3 + f_F * :weight ^ 4 + g_F * :weight ^ 5,
				"M", a_M + b_M * :weight + c_M * :weight ^ 2 + d_M * :weight ^ 3 + f_M * :weight ^ 4 + g_M * :weight ^ 5,
				.
			)
		)
	),
	Group( :sex ),
	Freq( :Fractional Frequencies ),
	Newton,
	Finish
);
rpt = nlin << report;
est2 = Matrix( rpt[Number Col Box( "Estimate" )] << get );
```

**Code Explanation**:

1. Open data table.
2. Add new column for fractional frequencies.
3. Fit quintic curve model.
4. Retrieve fit curve report.
5. Extract estimates from fit curve report.
6. Extract standard errors from fit curve report.
7. Perform nonlinear fitting.
8. Retrieve nonlinear report.
9. Extract estimates from nonlinear report.



### Example 6
> **Summary**: Fits a logistic curve and nonlinear model to data, extracting estimates and standard errors, and generating reports.

<!-- Keywords: #JMPScriptingLanguage, #LogisticCurveFitting, #NonlinearModeling, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Fractional Frequencies", Set Values( 1 ) );
fc = dt << Fit Curve( Y( :Y ), X( :X ), Fit Logistic 2p );
rfc = fc << report;
est1 = Matrix( rfc[Number Col Box( "Estimate" )] << get );
std1 = Matrix( rfc[Number Col Box( "Std Error" )] << get );
nlin = dt << Nonlinear(
	Y( :Y ),
	Model( Parameter( {a = 0.01, b = 11}, 1 / (1 + Exp( -a * (:X - b) )) ) ),
	Freq( :Fractional Frequencies ),
	Newton,
	Finish
);
rpt = nlin << report;
est2 = Matrix( rpt[Number Col Box( "Estimate" )] << get );
```

**Code Explanation**:

1. Open data table.
2. Add new column "Fractional Frequencies".
3. Fit logistic 2p curve.
4. Extract fit report.
5. Get parameter estimates.
6. Get standard errors.
7. Perform nonlinear fitting.
8. Extract nonlinear report.
9. Get nonlinear estimates.



### Example 7
> **Summary**: Fits a Gompertz model and a nonlinear model to data, generating reports with estimates and standard errors.

<!-- Keywords: #JSLScripting, #GompertzModel, #NonlinearModel, #DataFitting, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Fractional Frequencies", Set Values( 1 ) );
fc = dt << Fit Curve( Y( :Y ), X( :X ), Fit Gompertz 3p );
rfc = fc << report;
est1 = Matrix( rfc[Number Col Box( "Estimate" )] << get );
std1 = Matrix( rfc[Number Col Box( "Std Error" )] << get );
nlin = dt << Nonlinear(
	Y( :Y ),
	Model( Parameter( {a = 1, b = 0.05, c = 6}, a * Exp( -Exp( -b * (:X - c) ) ) ) ),
	Freq( :Fractional Frequencies ),
	Newton,
	Finish
);
rpt = nlin << report;
est2 = Matrix( rpt[Number Col Box( "Estimate" )] << get );
```

**Code Explanation**:

1. Open data table;
2. Add new column.
3. Fit Gompertz model.
4. Retrieve report.
5. Extract estimates.
6. Extract standard errors.
7. Fit nonlinear model.
8. Retrieve report.
9. Extract estimates.



### Example 8
> **Summary**: Fits a standard least squares model with multiple effects and generates a profiler plot for selected data.

<!-- Keywords: #JSLScripting, #LeastSquaresModel, #ProfilerPlot, #DataFitting, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Grp",
	Nominal,
	Set Values( {1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2} )
);
r = dt << Select Rows( 1 :: 20 );
r << Hide and Exclude;
obj = dt << Fit Curve( Y( :weight ), X( :height ), Group( :Grp ), );
```

**Code Explanation**:

1. Open data table;
2. Add new nominal column "Grp".
3. Set values for "Grp" column.
4. Select first 20 rows.
5. Hide and exclude selected rows.
6. Fit curve model on selected columns.



## Fit Curve using Transpose
> **Summary**: Process of generating and visualizing missing data patterns for a specified set of columns in a JMP data table, utilizing log capture, curve fitting, and equivalence testing.

<!-- Keywords: #JMPScriptingLanguage, #LogCapture, #CurveFitting, #EquivalenceTesting, #MissingDataPattern -->

**Code**:
```jsl
dt = Open("data_table.jmp");
exRows = Transpose( 2 :: 13 ) |/ Transpose( 19 :: 30 ) |/ Transpose( 36 :: 47 ) |/ Transpose( 50 :: 61 );
dt << Select Rows( exRows );
dt << Hide and Exclude;
lCap = Log Capture(
	obj = dt << Fit Curve(
		Y( :Toxicity ),
		X( :log Conc ),
		Group( :Formulation ),
		Fit Logistic 4P(
			Equivalence Test(
				Reference Group( "standard" ),
				Equivalence with Ratios( 1 ),
				Equivalence with Ratios( 1 ),
				Equivalence with Ratios( 1 )
			), 
		), 
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define excluded row indices.
3. Select rows for exclusion.
4. Hide and exclude selected rows.
5. Start log capture.
6. Fit logistic 4P curve model.
7. Set response variable.
8. Set predictor variable.
9. Group by formulation.
10. Perform equivalence test.



