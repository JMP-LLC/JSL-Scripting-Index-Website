# Nonlinear

### Example 1
> **Summary**: Fits a nonlinear model to predict observed yield using a yield model, utilizing the Nonlinear platform in JMP.

<!-- Keywords: #NonlinearModeling, #YieldPrediction, #JMPScriptingLanguage, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// Model
// Open data table
dt = Open("data_table.jmp");
// Model
Nonlinear(
	Y( :Observed Yield ),
	X( :Yield Model )
);
```

**Code Explanation**:

1. Open data table.
2. Define model variables.
3. Fit nonlinear model.



### Example 2
> **Summary**: Opens a data table, defines a full nonlinear model with Mitscherlich function, and executes the analysis to estimate the parameters.

<!-- Keywords: #NonlinearModeling, #MitscherlichFunction, #JMPScriptingLanguage, #DataAnalysis, #ParameterEstimation -->

**Code**:
```jsl
// Full nonlinear model
// Open data table
dt = Open("data_table.jmp");
// Full nonlinear model
Nonlinear(
	Y( :Algae density ),
	X( :Mitscherlich ),
	Finish
);
```

**Code Explanation**:

1. Open data table.
2. Define nonlinear model.
3. Specify response variable.
4. Specify predictor variable.
5. Execute nonlinear analysis.



### Example 3
> **Summary**: Fits a reduced nonlinear model with equal alphas to the Algae density response variable using the :equal alphas predictor variable in a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #NonlinearModel, #ReducedModel, #AlgaeDensity, #EqualAlphas -->

**Code**:
```jsl
// Reduced nonlinear model-with equal alphas
// Open data table
dt = Open("data_table.jmp");
// Reduced nonlinear model-with equal alphas
Nonlinear(
	Y( :Algae density ),
	X( :equal alphas ),
	Finish
);
```

**Code Explanation**:

1. Open data table.
2. Define variable `dt`.
3. Call `Open` function.
4. Specify file path.
5. Start `Nonlinear` function.
6. Set response variable `Y`.
7. Set predictor variable `X`.
8. Use `:Algae density` for `Y`.
9. Use `:equal alphas` for `X`.
10. Execute `Finish`.



### Example 4
> **Summary**: Fits a reduced nonlinear model with equal betas to the Algae density data, utilizing the Nonlinear function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #NonlinearModeling, #EqualBetas, #AlgaeDensity, #DataAnalysis -->

**Code**:
```jsl
// Reduced nonlinear model-with equal betas
// Open data table
dt = Open("data_table.jmp");
// Reduced nonlinear model-with equal betas
Nonlinear(
	Y( :Algae density ),
	X( :equal betas ),
	Finish
);
```

**Code Explanation**:

1. Open data table.
2. Assign data table to dt.
3. Call Nonlinear function.
4. Specify Y variable.
5. Specify X variable.
6. Finish Nonlinear model.



### Example 5
> **Summary**: Fits a nominal logistic regression model with multiple predictors using the Nonlinear platform in JMP, analyzing data from the Skull.jmp table.

<!-- Keywords: #Nonlinear, #LogisticRegression, #NominalResponse, #MultiplePredictors, #JMPScripting -->

**Code**:
```jsl
// Nonlinear
// Open data table
dt = Open("data_table.jmp");
// Nonlinear
Nonlinear(
	Y( :"log($ value)"n ),
	X( :Model )
);
```

**Code Explanation**:

1. Open data table.
2. Set variable `dt`.
3. Run nonlinear analysis.
4. Specify response variable.
5. Specify predictor variable.



### Example 6
> **Summary**: Fits a Meyers Model to the 'Velocity (y)' response variable using the 'Model (x)' predictor in the 'data_table.jmp' data table, utilizing the Newton optimization method.

<!-- Keywords: #MeyersModel, #NonlinearFit, #NewtonOptimization, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
// Meyers Model Fit
// Open data table
dt = Open("data_table.jmp");
// Meyers Model Fit
Nonlinear(
	Y( :"Velocity (y)"n ),
	X( :"Model (x)"n ),
	Newton,
	Finish
);
```

**Code Explanation**:

1. Open data table.
2. Specify response variable.
3. Specify predictor variable.
4. Choose optimization method.
5. Execute nonlinear fit.



### Example 7
> **Summary**: Fits a nonlinear, disjoint linear model to predict the yield response variable using the linear predictor variable in the Skull data table.

<!-- Keywords: #NonlinearModeling, #DisjointLinear, #JMPScriptingLanguage, #RegressionAnalysis, #PredictiveModeling -->

**Code**:
```jsl
// Nonlinear - disjoint linear
// Open data table
dt = Open("data_table.jmp");
// Nonlinear - disjoint linear
Nonlinear(
	Y( :yield ),
	X( :linear ),
	Plot( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Assign data table to dt.
3. Start nonlinear analysis.
4. Set response variable to yield.
5. Set predictor variable to linear.
6. Generate plot for analysis.



### Example 8
> **Summary**: Fits a nonlinear model with a disjoint quadratic predictor to predict yield, utilizing the QuasiNewton SR1 method and enabling plot display.

<!-- Keywords: #NonlinearModeling, #QuadraticRegression, #JMPScriptingLanguage, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// Nonlinear - disjoint quadratic
// Open data table
dt = Open("data_table.jmp");
// Nonlinear - disjoint quadratic
Nonlinear(
	Y( :yield ),
	X( :quad ),
	Plot( 1 ),
	QuasiNewton SR1
);
```

**Code Explanation**:

1. Open data table.
2. Fit nonlinear model.
3. Specify yield as response.
4. Use quad as predictor.
5. Enable plot display.
6. Use QuasiNewton SR1 method.



### Example 9
> **Summary**: Fits a nonlinear model with multiple predictors using the Nonlinear platform in JMP, utilizing the ModelY variable as the response and Loss function to estimate parameters.

<!-- Keywords: #NonlinearModeling, #JMPScriptingLanguage, #RegressionAnalysis, #LossFunction, #NewtonMethod -->

**Code**:
```jsl
// Nonlinear with ModelY and Loss
// Open data table
dt = Open("data_table.jmp");
// Nonlinear with ModelY and Loss
Nonlinear(
	X( :Model Y ),
	Loss( :Loss ),
	Second Deriv Method( 1 ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish,
	Plot( 0 )
);
```

**Code Explanation**:

1. Open data table.
2. Define nonlinear model.
3. Specify response variable.
4. Specify loss function.
5. Set second derivative method.
6. Define loss as negative log-likelihood.
7. Use Newton method.
8. Finalize model fitting.
9. Disable plot output.



### Example 10
> **Summary**: Fits a nonlinear model with Model2 Y and Loss2 using the Newton method, specifying numeric derivatives and relative gradient limits.

<!-- Keywords: #NonlinearModeling, #JMPScriptingLanguage, #NewtonMethod, #LossFunction, #GradientLimits -->

**Code**:
```jsl
// Nonlinear with Model2 Y and Loss2
// Open data table
dt = Open("data_table.jmp");
// Nonlinear with Model2 Y and Loss2
Nonlinear(
	X( :Model2 Y ),
	Loss( :Loss2 ),
	Relative Gradient( 0.000000001 ),
	Gradient Limit( 0.000000001 ),
	CL Limit( 0.00000001 ),
	Numeric Derivatives Only( 1 ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish,
	Plot( 0 )
);
```

**Code Explanation**:

1. Open data table.
2. Define dependent variable.
3. Define loss function.
4. Set relative gradient limit.
5. Set gradient limit.
6. Set confidence limit.
7. Use numeric derivatives.
8. Specify loss type.
9. Use Newton method.
10. Finish nonlinear analysis.



### Example 11
> **Summary**: Fits a nonlinear model with no model column using the Nonlinear platform in JMP, utilizing the second derivative method and Newton's method for optimization.

<!-- Keywords: #NonlinearModeling, #JMPScriptingLanguage, #OptimizationTechniques, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
// Nonlinear with no Model Column
// Open data table
dt = Open("data_table.jmp");
// Nonlinear with no Model Column
Nonlinear(
	Loss( :Loss with No Model Column ),
	Second Deriv Method( 1 ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish,
	Plot( 0 )
);
```

**Code Explanation**:

1. Open data table.
2. Set loss function.
3. Use second derivative method.
4. Define loss as negative log-likelihood.
5. Apply Newton method.
6. Finalize nonlinear analysis.
7. Disable plot display.



### Example 12
> **Summary**: Fits a nominal logistic regression model with multiple predictors using the Nonlinear platform in JMP, utilizing the Poisson loss function and Newton method.

<!-- Keywords: #Nonlinear, #LogisticRegression, #PoissonLossFunction, #NewtonMethod, #JMPScriptingLanguage -->

**Code**:
```jsl
// Nonlinear
// Open data table
dt = Open("data_table.jmp");
// Nonlinear
Nonlinear(
	X( :model ),
	Loss( :Poisson ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish,
	Plot( 0 )
);
```

**Code Explanation**:

1. Open data table.
2. Specify nonlinear model.
3. Define Poisson loss function.
4. Use negative log-likelihood.
5. Apply Newton method.
6. Complete analysis.
7. Disable plot display.



### Example 13
> **Summary**: Fits a nominal logistic regression model with multiple predictors using Newton's method and sending the results to reports.

<!-- Keywords: #NonlinearModeling, #LogisticRegression, #NewtonMethod, #JMPScriptingLanguage, #ReportOutput -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Nonlinear(
	Y( :pop ),
	X( :Name( "X-formula" ) ),
	Newton,
	Finish,
	SendToReport( Dispatch( {}, "Control Panel", OutlineBox, {Close( 1 )} ), Dispatch( {}, "Solution", OutlineBox, {Close( 1 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Create nonlinear model object.
3. Set dependent variable: population.
4. Set independent variable: X-formula.
5. Use Newton method for fitting.
6. Finalize model fitting process.
7. Close Control Panel report.
8. Close Solution report.



### Example 14
> **Summary**: Fits a nonlinear model to data using the Nonlinear platform in JMP, with options for profiling and plotting.

<!-- Keywords: #NonlinearModeling, #JMPScriptingLanguage, #DataFitting, #Profiler, #Plotting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Nonlinear(
	Y( :Name( "Velocity (y)" ) ),
	X( :Name( "Model (x)" ) ),
	Newton,
	Finish,
	Plot( 0 ),
	Profiler( 1, Confidence Intervals( 1 ), Term Value( Concentration( 2.5646, Lock( 0 ), Show( 1 ) ) ) ),
	SendToReport(
		Dispatch( {}, "Nonlinear Fit", OutlineBox, {Set Title( "Profilers: Profiler" )} ),
		Dispatch( {}, "Solution", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define nonlinear model.
3. Specify dependent variable.
4. Specify independent variable.
5. Use Newton method.
6. Finalize model fit.
7. Disable plot display.
8. Enable profiler.
9. Set confidence intervals.
10. Set term value.



### Example 15
> **Summary**: Fits a nonlinear model to predict velocity based on a model variable, utilizing the Newton method and finishing the analysis.

<!-- Keywords: #NonlinearModeling, #NewtonMethod, #JMPScriptingLanguage, #PredictiveAnalytics, #DataFitting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Nonlinear( Y( :Name( "Velocity (y)" ) ), X( :Name( "Model (x)" ) ), Newton, Finish );
```

**Code Explanation**:

1. Open data table.
2. Define dependent variable.
3. Define independent variable.
4. Apply nonlinear model.
5. Use Newton method.
6. Finalize analysis.



### Example 16
> **Summary**: Fits a nonlinear model with multiple predictors using the Nonlinear platform in JMP.

<!-- Keywords: #NonlinearModeling, #MultiplePredictors, #JMPScriptingLanguage, #DataFitting, #StatisticalAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Nonlinear( Y( :pop ), X( :Name( "X-formula" ) ), Newton, Finish );
```

**Code Explanation**:

1. Open data table.
2. Assign table to variable.
3. Perform nonlinear analysis.
4. Specify response variable.
5. Specify predictor variable.
6. Use Newton method.
7. Complete analysis.



### Example 17
> **Summary**: Fits a nonlinear model using the Newton method to analyze the relationship between nitrate levels and Name in the data table.

<!-- Keywords: #NonlinearModeling, #NewtonMethod, #JMPScriptingLanguage, #RegressionAnalysis, #DataFitting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Nonlinear( Y( :nitrate ), X( :Name( "linear" ) ), Newton, Finish );
```

**Code Explanation**:

1. Open data table.
2. Assign table to variable.
3. Perform nonlinear analysis.
4. Specify response variable.
5. Specify predictor variable.
6. Use Newton method.
7. Finalize analysis.



### Example 18
> **Summary**: Fits a nonlinear model using the Nonlinear platform to estimate population values based on a specified formula.

<!-- Keywords: #NonlinearModeling, #JMPScriptingLanguage, #Estimation, #RegressionAnalysis, #DataFitting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
sol = [15.052907630874, 0.0141885129643142];
obj = dt << Nonlinear( Y( :pop ), X( :Name( "X-formula" ) ), Newton );
obj << go;
rpt = obj << report;
est = Matrix( rpt[Number Col Box( "Estimate" )] << get );
```

**Code Explanation**:

1. Open data table.
2. Define solution vector.
3. Launch Nonlinear platform.
4. Set response and predictor.
5. Use Newton method.
6. Execute analysis.
7. Retrieve report object.
8. Extract estimate column.
9. Convert to matrix.
10. Store estimates.



### Example 19
> **Summary**: Fits a nonlinear model with a nominal logistic regression using multiple predictors, including profiling and confidence intervals.

<!-- Keywords: #NonlinearModeling, #LogisticRegression, #MultiplePredictors, #Profiler, #ConfidenceIntervals -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Nonlinear(
	Y( :pop ),
	X( :Name( "X-formula" ) ),
	Newton,
	Finish,
	Profiler( 1, Confidence Intervals( 1 ), Term Value( Year( 1910, Lock( 0 ), Show( 1 ) ) ) ),
	Parameter Profiler(
		1,
		Confidence Intervals( 1 ),
		Term Value( B0( 15.0529, Lock( 0 ), Show( 1 ) ), B1( 0.0141885, Lock( 0 ), Show( 1 ) ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Launch Nonlinear platform.
3. Set response variable.
4. Set predictor variable.
5. Use Newton method.
6. Finish model fitting.
7. Enable Profiler.
8. Show confidence intervals.
9. Set term value for Year.
10. Configure Parameter Profiler.



### Example 20
> **Summary**: Fits and creates reports for two nonlinear models to population data, with interactive features for exploring solution estimates and plots.

<!-- Keywords: #JMPScriptingLanguage, #NonlinearModeling, #DataFitting, #Reporting, #InteractiveAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Nonlinear(
	Y( :pop ),
	Model( Parameter( {A0 = 45000, k = 0.085, C = 0}, (C + A0 * Exp( k * (:year - 1790) )) ) ),
	Finish,
	Accept Current Estimates
);
rpt1 = obj1 << report;
est1 = (rpt1[Outline Box( "Solution" )][Table Box( 2 )] << get as matrix)[0, 1 :: 2];
jrn1 = rpt1[Outline Box( "Plot" )] << get journal;
obj2 = dt << Nonlinear(
	Y( :pop ),
	Model( Parameter( {A0 = 45000, k = 0.085, C = 0}, (C + A0 * Exp( k * (:year - Col Minimum( :year )) )) ) ),
	Finish,
	Accept Current Estimates
);
rpt2 = obj2 << report;
est2 = (rpt2[Outline Box( "Solution" )][Table Box( 2 )] << get as matrix)[0, 1 :: 2];
jrn2 = rpt2[Outline Box( "Plot" )] << get journal;
```

**Code Explanation**:

1. Open data_table data
2. Run nonlinear model on population.
3. Set initial parameter estimates.
4. Define model equation.
5. Finish nonlinear analysis.
6. Accept current estimates.
7. Retrieve report object.
8. Extract solution estimates.
9. Get plot journal.
10. Repeat steps 2-9 with modified model.



### Example 21
> **Summary**: Process of extracting checkbox text from a Nonlinear window in JMP, iterating through windows to find the desired one.

<!-- Keywords: #JMPScriptingLanguage, #Nonlinear, #CheckboxTextExtraction, #WindowIteration, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Nonlinear();
For( i = 1, i <= N Items( Window() ), i++,
	If( Window()[i] << get window title == "Nonlinear",
		rpt = Window()[i];
		cBox1 = Trim( rpt[CheckBoxBox( 1 )] << get text );
		cBox2 = Trim( rpt[CheckBoxBox( 2 )] << get text );
	)
);
```

**Code Explanation**:

1. Open table.
2. Access Nonlinear platform.
3. Iterate through windows.
4. Find Nonlinear window.
5. Get first checkbox text.
6. Get second checkbox text.



### Example 22
> **Summary**: Fits a nonlinear model to predict population growth using a custom equation with parameters A0, k, and C.

<!-- Keywords: #NonlinearModeling, #CustomEquation, #ParameterEstimation, #JMPScriptingLanguage, #DataFitting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Nonlinear(
	Y( :pop ),
	Model( Parameter( {A0 = 45000, k = 0.085, C = 0}, (C + A0 * Exp( k * (:year - Col Minimum( :year )) )) ) ),
	Finish
);
```

**Code Explanation**:

1. Open data table;
2. Launch Nonlinear platform.
3. Set response variable.
4. Define model parameters.
5. Specify model equation.
6. Apply model constraints.
7. Complete analysis setup.



### Example 23
> **Summary**: Fits a nonlinear model with multiple predictors to predict population values, utilizing the Nonlinear platform in JMP.

<!-- Keywords: #JMPNonlinear, #NominalLogisticRegression, #MultiplePredictors, #PopulationPrediction, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Nonlinear( Y( :pop ), X( :Name( "X-formula" ) ), Finish );
rpt = obj << report;
popu = 200 + 100;
obj << Save Specific Solving Formula( :year, {:pop = 200 + 100}, Save Formula for Std Error Mean );
yr2 = Column( dt, N Col( dt ) - 1 ) << get formula;
obj << Profiler;
scptObj = rpt[Outline Box( "Prediction Profiler" )] << get scriptable object;
scptObj << Term Value( :year( yr2 ) );
popVal = Num( rpt[Outline Box( "Prediction Profiler" )][Text Box( 2 )] << get text );
```

**Code Explanation**:

1. Open table.
2. Fit nonlinear model.
3. Retrieve report object.
4. Define population value.
5. Save solving formula.
6. Get year column formula.
7. Launch profiler.
8. Get scriptable object.
9. Set term value.
10. Extract prediction value.



### Example 24
> **Summary**: Fits a nonlinear model with multiple predictors to a population response variable, generating a report and extracting standard error, correlation, and covariance matrices.

<!-- Keywords: #NonlinearModeling, #MultiplePredictors, #PopulationResponse, #JMPScriptingLanguage, #RegressionAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Nonlinear( Y( :pop ), X( :Name( "X-formula" ) ), Finish );
rpt = obj << report;
stdErr = rpt[Number Col Box( "ApproxStdErr" )] << get as matrix;
correlation = obj << Get Corr;
covariance = obj << Get Cov;
```

**Code Explanation**:

1. Open data table;
2. Perform nonlinear analysis.
3. Set population as response variable.
4. Use X-formula as predictor.
5. Finalize nonlinear model.
6. Retrieve analysis report.
7. Extract standard error matrix.
8. Obtain correlation matrix.
9. Fetch covariance matrix.



### Example 25
> **Summary**: Fits a nominal logistic regression model with multiple predictors using JMP's Nonlinear platform, saving estimates and prediction formulas.

<!-- Keywords: #NonlinearModeling, #LogisticRegression, #JMPScriptingLanguage, #DataAnalysis, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Nonlinear( y( pop ), x( Name( "X-formula" ) ), Finish, );
obj << Save Estimates;
obj << Save Prediction Formula;
_xmat = dt << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Fit nonlinear model.
3. Save parameter estimates.
4. Save prediction formula.
5. Extract data matrix.



### Example 26
> **Summary**: Fits a nonlinear model to predict population based on a formula, utilizing parameter profiling for independent and dependent resampling.

<!-- Keywords: #NonlinearModeling, #ParameterProfiling, #JMPScriptingLanguage, #DataFitting, #RegressionAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Nonlinear( Y( :pop ), X( :Name( "X-formula" ) ), Go );
obj << Parameter Profiler( 1, Independent Uniform Inputs( 1 ), Independent Resampled Inputs( 1 ), Dependent Resampled Inputs( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Perform nonlinear fit.
3. Launch parameter profiler.
4. Set independent uniform inputs.
5. Enable independent resampling.
6. Enable dependent resampling.



## Nonlinear using New Column
### Example 1
> **Summary**: Estimates Crow AMSAA loss and reliability growth analysis using nonlinear models with fixed parameters, generating reports for loss values and estimated parameters.

<!-- Keywords: #JSLScriptingLanguage, #NonlinearModeling, #ReliabilityGrowthAnalysis, #CrowAMSAA, #LossEstimation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Crow AMSAA Loss",
	Formula(
		Parameter(
			{lambda = 0.012, beta = 0.75},
			-(:Fixes * Log( lambda * beta )) - (:Fixes * (beta - 1) * Log( :Hours )) + If( Row() < 13, 0, lambda * (:Hours) ^ beta )
		)
	)
);
obj1 = dt << Nonlinear( Loss( :Crow AMSAA Loss ), Loss is Neg LogLikelihood( 1 ), Newton );
obj1 << Set Parameter( lambda = 0.012 );
obj1 << Lock Parameter( lambda );
obj1 << Finish;
rpt1 = obj1 << report;
loss1 = rpt1[Number Col Box( "Loss" )][1];
param1 = Matrix( rpt1[Number Col Box( "Estimate" )] << Get );
relg1 = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ), Fixed Parameter Crow AMSAA( lambda( 0.012 ) ) );
rgt1 = relg1 << report;
n2llk1 = rgt1[Number Col Box( "-2Loglikelihood" )][2];
est1 = Matrix( rgt1[Number Col Edit Box( 1 )] << get );
obj2 = dt << Nonlinear( Loss( :Crow AMSAA Loss ), Loss is Neg LogLikelihood( 1 ), Newton );
obj2 << Set Parameter( beta = 0.75 );
obj2 << Lock Parameter( beta );
obj2 << Finish;
rpt2 = obj2 << report;
loss2 = rpt2[Number Col Box( "Loss" )][1];
param2 = Matrix( rpt2[Number Col Box( "Estimate" )] << get );
relg2 = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ), Fixed Parameter Crow AMSAA( Beta( 0.75 ) ) );
rgt2 = relg2 << report;
n2llk2 = rgt2[Number Col Box( "-2Loglikelihood" )][2];
est2 = Matrix( rgt2[Number Col Edit Box( 1 )] << get );
```

**Code Explanation**:

1. Open data table.
2. Create new column "Crow AMSAA Loss".
3. Define formula for "Crow AMSAA Loss".
4. Run nonlinear model with initial parameters.
5. Set lambda parameter.
6. Lock lambda parameter.
7. Finish nonlinear model run.
8. Extract loss value from report.
9. Extract parameter estimates from report.
10. Run reliability growth analysis with fixed lambda.
11. Extract report from reliability growth analysis.
12. Extract -2Loglikelihood value.
13. Extract estimated parameters.
14. Run nonlinear model with initial parameters.
15. Set beta parameter.
16. Lock beta parameter.
17. Finish nonlinear model run.
18. Extract loss value from report.
19. Extract parameter estimates from report.
20. Run reliability growth analysis with fixed beta.
21. Extract report from reliability growth analysis.
22. Extract -2Loglikelihood value.
23. Extract estimated parameters.



### Example 2
> **Summary**: Estimates Crow AMSAA loss and reliability growth analysis using a nonlinear model with fixed parameters, generating reports on loss values and parameter estimates.

<!-- Keywords: #JSLScriptingLanguage, #NonlinearModeling, #ReliabilityGrowthAnalysis, #CrowAMSAA, #ParameterEstimation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Crow AMSAA Loss",
	Formula(
		Parameter(
			{lambda = 0.012, beta = 0.75},
			-(:Fixes * Log( lambda * beta )) - (:Fixes * (beta - 1) * Log( :Hours )) + If( Row() < N Rows( Current Data Table() ),
				0,
				lambda * (:Hours) ^ beta
			)
		)
	)
);
obj1 = dt << Nonlinear( Loss( :Crow AMSAA Loss ), Loss is Neg LogLikelihood( 1 ), Newton );
obj1 << Set Parameter( lambda = 0.012 );
obj1 << Lock Parameter( lambda );
obj1 << Finish;
rpt1 = obj1 << report;
loss1 = rpt1[Number Col Box( "Loss" )][1];
param1 = Matrix( rpt1[Number Col Box( "Estimate" )] << Get );
relg1 = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ), Fixed Parameter Crow AMSAA( lambda( 0.012 ) ) );
rgt1 = relg1 << report;
n2llk1 = rgt1[Number Col Box( "-2Loglikelihood" )][2];
est1 = Matrix( rgt1[Number Col Edit Box( 1 )] << get );
obj2 = dt << Nonlinear( Loss( :Crow AMSAA Loss ), Loss is Neg LogLikelihood( 1 ), Newton );
obj2 << Set Parameter( beta = 0.75 );
obj2 << Lock Parameter( beta );
obj2 << Finish;
rpt2 = obj2 << report;
loss2 = rpt2[Number Col Box( "Loss" )][1];
param2 = Matrix( rpt2[Number Col Box( "Estimate" )] << get );
relg2 = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ), Fixed Parameter Crow AMSAA( Beta( 0.75 ) ) );
rgt2 = relg2 << report;
n2llk2 = rgt2[Number Col Box( "-2Loglikelihood" )][2];
est2 = Matrix( rgt2[Number Col Edit Box( 1 )] << get );
```

**Code Explanation**:

1. Open data table.
2. Create new column.
3. Define formula for new column.
4. Run nonlinear model.
5. Set lambda parameter.
6. Lock lambda parameter.
7. Finish nonlinear model.
8. Extract loss value.
9. Extract parameter estimates.
10. Run reliability growth analysis.



## Nonlinear using Column
### Example 1
> **Summary**: Runs the estimation and analysis of Crow AMSAA Loss using nonlinear regression, reliability growth modeling, and reporting in JMP.

<!-- Keywords: #JMPScriptingLanguage, #NonlinearRegression, #ReliabilityGrowthModeling, #DataAnalysis, #StatisticalEstimation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, 2 )[N Rows( dt )] = 0;
dt << New Column( "Crow AMSAA Loss",
	Formula(
		Parameter(
			{lambda = 0.012, beta = 0.75},
			-(:Fixes * Log( lambda * beta )) - :Fixes * (beta - 1) * Log( :Hours ) + If( Row() < N Rows( Current Data Table() ),
				0,
				lambda * (:Hours) ^ beta
			)
		)
	)
);
obj = dt << Nonlinear( Loss( :Crow AMSAA Loss ), Loss is Neg LogLikelihood( 1 ), Newton, Finish );
rpt = obj << report;
loss = (rpt[Number Col Box( "Loss" )] << get)[1];
param = (rpt[Outline Box( "Solution" )][Table Box( 2 )] << get as matrix)[0, 1 :: 2];
relg = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ), Event Count( :Fixes ), Crow AMSAA );
rgt = relg << report;
n2llk = (rgt[Number Col Box( "-2Loglikelihood" )] << get)[1];
est = (rgt[Outline Box( "Estimates" )][Table Box( 1 )] << get as matrix)[0, 1 :: 2];
```

**Code Explanation**:

1. Open data table.
2. Set last row's second column to 0.
3. Create new column "Crow AMSAA Loss".
4. Define formula for "Crow AMSAA Loss".
5. Run nonlinear analysis.
6. Extract loss value from report.
7. Extract parameter estimates from report.
8. Perform reliability growth analysis.
9. Extract -2Loglikelihood from report.
10. Extract estimated parameters from report.



### Example 2
> **Summary**: Estimates Crow AMSAA loss and reliability growth analysis using nonlinear regression and fixed parameter Crow AMSAA models.

<!-- Keywords: #JMPScriptingLanguage, #NonlinearRegression, #ReliabilityGrowth, #CrowAMSAA, #Estimation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, 2 )[N Rows( dt )] = 0;
dt << New Column( "Crow AMSAA Loss",
	Formula(
		Parameter(
			{lambda = 0.012, beta = 0.75},
			-(:Fixes * Log( lambda * beta )) - (:Fixes * (beta - 1) * Log( :Hours )) + If( Row() < N Rows( Current Data Table() ),
				0,
				lambda * (:Hours) ^ beta
			)
		)
	)
);
obj1 = dt << Nonlinear( Loss( :Crow AMSAA Loss ), Loss is Neg LogLikelihood( 1 ), Newton );
obj1 << Set Parameter( lambda = 0.012 );
obj1 << Lock Parameter( lambda );
obj1 << Finish;
rpt1 = obj1 << report;
loss1 = rpt1[Number Col Box( "Loss" )][1];
param1 = Matrix( rpt1[Number Col Box( "Estimate" )] << Get );
relg1 = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	Fixed Parameter Crow AMSAA( lambda( 0.012 ) )
);
rgt1 = relg1 << report;
n2llk1 = rgt1[Number Col Box( "-2Loglikelihood" )][2];
est1 = Matrix( rgt1[Number Col Edit Box( 1 )] << get );
obj2 = dt << Nonlinear( Loss( :Crow AMSAA Loss ), Loss is Neg LogLikelihood( 1 ), Newton );
obj2 << Set Parameter( beta = 0.75 );
obj2 << Lock Parameter( beta );
obj2 << Finish;
rpt2 = obj2 << report;
loss2 = rpt2[Number Col Box( "Loss" )][1];
param2 = Matrix( rpt2[Number Col Box( "Estimate" )] << get );
relg2 = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	Fixed Parameter Crow AMSAA( Beta( 0.75 ) )
);
rgt2 = relg2 << report;
n2llk2 = rgt2[Number Col Box( "-2Loglikelihood" )][2];
est2 = Matrix( rgt2[Number Col Edit Box( 1 )] << get );
```

**Code Explanation**:

1. Open data table.
2. Set last row's Fixes to 0.
3. Add new column "Crow AMSAA Loss".
4. Define formula for "Crow AMSAA Loss".
5. Run nonlinear analysis with initial parameters.
6. Set lambda parameter.
7. Lock lambda parameter.
8. Finish nonlinear analysis.
9. Extract loss value from report.
10. Extract parameter estimates from report.



## Nonlinear using Expr
> **Summary**: Fits a nonlinear model to a dataset, retrieving fit messages and estimates, and handling missing values.

<!-- Keywords: #JSLScriptingLanguage, #NonlinearFitting, #MissingValueHandling, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nlfit = Expr(
	dt << Nonlinear( Y( :pop ), X( :Name( "X-formula" ) ), Newton, Finish )
);
dt:year << Set Property( "Missing Value Codes", {1890} );
obj1 = Eval( Name Expr( nlfit ) );
mes1 = Report( obj1 )[String Col Box( 1 )] << get;
dt:year[dt << get rows where( :year == 1890 )] = .;
obj2 = Eval( Name Expr( nlfit ) );
mes2 = Report( obj2 )[String Col Box( 1 )] << get;
dt = dt << revert;
dt:pop << Set Property( "Missing Value Codes", {62.947} );
obj1 = Eval( Name Expr( nlfit ) );
est1 = Matrix( Report( obj1 )[Number Col Box( "Estimate" )] << get );
mes1 = Report( obj1 )[String Col Box( 1 )] << get;
dt:pop[dt << get rows where( :pop == 62.947 )] = .;
obj2 = Eval( Name Expr( nlfit ) );
est2 = Matrix( Report( obj2 )[Number Col Box( "Estimate" )] << get );
mes2 = Report( obj2 )[String Col Box( 1 )] << get;
```

**Code Explanation**:

1. Open data table;
2. Define nonlinear fitting expression.
3. Set missing value code for year 1890.
4. Execute nonlinear fit.
5. Retrieve fit message.
6. Replace year 1890 with missing value.
7. Re-execute nonlinear fit.
8. Retrieve new fit message.
9. Revert dataset changes.
10. Set missing value code for population 62.947.
11. Execute nonlinear fit.
12. Retrieve estimates.
13. Retrieve fit message.
14. Replace population 62.947 with missing value.
15. Re-execute nonlinear fit.
16. Retrieve new estimates.
17. Retrieve new fit message.



## Nonlinear using For
> **Summary**: Generates distribution analysis for continuous variables in a specified data table using the Distribution platform, including calculation of median and IQR values, one-way ANOVA with Cauchy fit, and nonlinear regression on Cauchy loss.

<!-- Keywords: #Distribution, #CauchyFit, #NonlinearRegression, #JSLScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
heightF = {};
heightM = {};
For( i = 1, i <= N Rows( dt ), i++,
	If( Column( dt, 3 )[i] == "F",
		heightF = heightF |/ Column( dt, 4 )[i],
		heightM = heightM |/ Column( dt, 4 )[i]
	)
);
htF = Sort Ascending( heightF );
htM = Sort Ascending( heightM );
medianF = (htF[N Rows( htF ) / 2] + htF[N Rows( htF ) / 2 + 1]) / 2;
medianM = (htM[N Rows( htM ) / 2] + htM[N Rows( htM ) / 2 + 1]) / 2;
IQR_F = Quantile( 0.75, htF ) - Quantile( 0.25, htF );
IQR_M = Quantile( 0.75, htM ) - Quantile( 0.25, htM );
obj = dt << Oneway( Y( :Height ), X( :Sex ) );
obj << Cauchy Fit;
rpt = obj << report;
cauchy_sig = (rpt[Outline Box( "Cauchy Fit" )][Number Col Box( "Sigma" )] << get as matrix)[1];
cauchy_CS = rpt[Outline Box( "Cauchy Fit" )][Number Col Box( "ChiSquare" )] << get as matrix;
cauchy_pVal = rpt[Outline Box( "Cauchy Fit" )][Number Col Box( "PValue" )] << get as matrix;
cauchy_LW = rpt[Outline Box( "Cauchy Fit" )][Number Col Box( "LogWorth" )] << get as matrix;
cauchy_est = rpt[Outline Box( "Cauchy Fit" )][Number Col Box( "Robust Mean" )] << get as matrix;
cauchy_std = rpt[Outline Box( "Cauchy Fit" )][Number Col Box( "Std Error" )] << get as matrix;
dt << New Column( "Cauchy Loss",
	Formula(
		Parameter(
			{muF = Mean( htF ), muM = Mean( htM ), sigma = (IQR_F + IQR_M) / 2},
			mu = Match( :sex, "F", muF, "M", muM, . );
			Log( sigma + ((:height - mu) ^ 2 / sigma) );
		)
	)
);
obj1 = dt << Nonlinear( Loss( :Cauchy Loss ), Loss is Neg LogLikelihood( 1 ), Iteration Limit( 50 ), Finish );
rpt1 = obj1 << report;
est1 = (rpt1[Number Col Box( "Estimate" )] << get as matrix);
std1 = (rpt1[Number Col Box( "ApproxStdErr" )] << get as matrix);
```

**Code Explanation**:

1. Open data table;
2. Initialize empty lists for heights.
3. Loop through rows of data.
4. Separate female and male heights.
5. Sort female heights.
6. Sort male heights.
7. Calculate median height for females.
8. Calculate median height for males.
9. Calculate IQR for females.
10. Calculate IQR for males.
11. Perform one-way ANOVA with Cauchy fit.
12. Extract Cauchy fit parameters.
13. Create new column for Cauchy loss formula.
14. Perform nonlinear regression on Cauchy loss.
15. Extract nonlinear regression estimates.



